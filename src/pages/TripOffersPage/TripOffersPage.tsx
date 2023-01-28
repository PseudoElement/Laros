import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import cn from 'classnames'

import { TripCard } from 'features'
import { Tags, Select, Button } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'
import { useGetTrips } from 'shared/hooks/useGetTrips'
import { getHotelTags } from 'shared/api/routes/hotels'
import { TripSortOptions } from 'shared/constants/filters'
import { getTripsDuration } from 'shared/api/routes/trips'
import { getTripDurationOptions } from 'shared/helpers/transformers'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getTripCategoriesThunk } from 'store/slices/trips/thunk'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import {
  getRootDestinations,
  getSubRegions,
} from 'store/slices/destinations/selectors'
import { sortByAlphabet } from 'shared/helpers/sortByAlphabet'
import { withDomain } from 'shared/helpers/withDomain'

import { Tag } from 'shared/types/tag'
import { TripFilterParams, TripSort } from 'shared/types/trip'
import { Option } from 'shared/types'

import listIcon from '/public/assets/images/list.svg?url'
import gridIcon from '/public/assets/images/grid.svg?url'

import s from './TripOffersPage.module.scss'

enum View {
  LIST,
  GRID,
}

export const TripOffersPage: FC = () => {
  const t = useTranslate()
  const { query, push } = useRouter()
  const { category } = query
  const { control, watch, setValue } = useForm<any>({
    defaultValues: {
      ordering: TripSortOptions[0],
    },
  })
  const dispatch = useAppDispatch()

  const [view, setView] = useState(View.GRID)
  const [tags, setTags] = useState<Tag[]>([])
  const [region, setRegion] = useState<Option | null>(null)
  const [durations, setDurations] = useState<Option[]>([])
  const [page, setPage] = useState(1)
  const [params, setParams] = useState<Partial<TripFilterParams>>(
    category
      ? {
          travel_types: Number(category),
          ordering: TripSort.AZ,
          page,
        }
      : {
          ordering: TripSort.AZ,
          page,
        }
  )

  const TRIP_PAGINATION_PER_PAGE = 10
  const [newTrips, isLoading, handleReady] = useGetTrips(params)
  const [trips, setTrips] = useState([...newTrips])
  const [isButtonShowed, setIsButtonShowed] = useState<boolean>(
    newTrips.length === TRIP_PAGINATION_PER_PAGE
  )

  const tripCategoryInfo = useAppSelector(state =>
    state.trips.categories.find(cat => cat.id === Number(category))
  )
  const destinations = useAppSelector(state => state.destinations.destinations)
  const regions = getRootDestinations(destinations)
  const subregions = useAppSelector(state =>
    getSubRegions(state, region ? region.value : null)
  )

  const updateRequest = (form: any) => {
    // TODO
    form.region ? setRegion(form.region) : setRegion(null)
    const subregions = form.subregions
      ? form.subregions.map((region: Option) => region.value)
      : []
    const destination = subregions.length
      ? subregions.join(',')
      : form.region
      ? form.region?.value.toString()
      : undefined

    const duration =
      form.duration?.length > 0
        ? form.duration.map((item: Option) => Number(item.value)).join(',')
        : undefined

    const tags = form.tags
      ? form.tags
          ?.filter((tag: Tag) => tag.isSelected === true)
          .map((tag: Tag) => tag.id)
          .join(',')
      : undefined

    setParams({
      destination,
      duration,
      tags,
      travel_types: Number(category),
      ordering: form.ordering?.value,
      page: 1,
    })
  }

  const loadHotelTags = async () => {
    try {
      const { data } = await getHotelTags()
      setTags(data.data)
    } catch (error) {
      console.error(error)
    }
  }
  const loadDurations = async () => {
    try {
      const { data } = await getTripsDuration()
      setDurations(getTripDurationOptions(data))
    } catch (error) {
      console.error(error)
    }
  }

  const handlePush = (id: number) => {
    push(`/trips/${id}`)
  }

  useEffect(() => {
    loadHotelTags()
    loadDurations()
    dispatch(getTripCategoriesThunk())
    dispatch(getDestinationsThunk()) // TODO we can create a hook to combine it with SpecialOffersPage logic
  }, [])

  useEffect(() => handleReady(true), [params])

  useEffect(() => {
    setIsButtonShowed(newTrips.length === TRIP_PAGINATION_PER_PAGE)
    setTrips(prevState => {
      if (params.page === 1) return newTrips
      return prevState.concat(...newTrips)
    })
  }, [newTrips])

  useEffect(() => {
    setParams(prevState => ({
      ...prevState,
      page,
    }))
  }, [page])

  useEffect(() => {
    const subscription = watch(value => updateRequest(value))
    setParams(prevState => ({
      ...prevState,
      travel_types: Number(category),
    }))
    return () => subscription.unsubscribe()
  }, [category, watch])

  useEffect(() => {
    setValue(
      'region',
      regions
        .filter(item => item.id === 17)
        .map(region => ({
          label: region.name,
          value: region.id.toString(),
        }))[0]
    )
    setParams(prevState => ({ ...prevState, destination: '17' }))
  }, [destinations])

  return (
    <div className={s.tripOffersPage}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${
            tripCategoryInfo?.images.length
              ? withDomain(tripCategoryInfo?.images[1])
              : null
          })`,
        }}
      >
        <div className={s.shadow} />
      </div>

      <div className={s.title}>{tripCategoryInfo?.name} </div>
      <div className={s.subTitle}>{tripCategoryInfo?.description}</div>

      <div className={s.filters}>
        <div className={s.filterTitle}>{t('travelPlannerCategory.sortBy')}</div>

        <div className={s.filterContent}>
          <div className={s.filterSelects}>
            <Controller
              name='region'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder={t('forms.inputLabel3')}
                  options={
                    regions.map(region => ({
                      label: region.name,
                      value: region.id.toString(),
                    })) ?? []
                  }
                  onChange={onChange}
                  value={value ?? null}
                  classname={s.select}
                />
              )}
            />

            <Controller
              name='subregions'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder={`+ ${t('common.addSubRegion')}`}
                  options={
                    sortByAlphabet(
                      subregions.map(region => ({
                        label: region.name,
                        value: region.id.toString(),
                      }))
                    ) ?? []
                  }
                  onChange={onChange}
                  value={value ?? []}
                  isMulti
                  classname={s.select}
                />
              )}
            />
            <Controller
              name='duration'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder={t('forms.inputLabel16')}
                  options={durations}
                  onChange={onChange}
                  value={value}
                  classname={s.select}
                  isMulti
                />
              )}
            />
          </div>

          <div className={s.sort}>
            <div className={s.sortFrom}>{t('travelPlannerCategory.from')}</div>
            <Controller
              name='ordering'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  options={TripSortOptions}
                  onChange={onChange}
                  value={value}
                  hasArrow={false}
                  classname={s.select}
                  isClearable={false}
                />
              )}
            />
          </div>
        </div>

        <div className={s.tagSwitchFilters}>
          <div className={s.tags}>
            <Controller
              name='tags'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Tags tags={tags} onChange={onChange} value={value} />
              )}
            />
          </div>

          <div className={s.viewSwitch}>
            <span
              onClick={() => setView(View.LIST)}
              className={cn(s.viewIcon, {
                [s.viewSelected]: view === View.LIST,
              })}
            >
              <Image src={listIcon} width={16} height={16} />
            </span>
            <span
              onClick={() => setView(View.GRID)}
              className={cn(s.viewIcon, {
                [s.viewSelected]: view === View.GRID,
              })}
            >
              <Image src={gridIcon} width={16} height={16} />
            </span>
          </div>
        </div>
      </div>

      {!isLoading && !trips.length && (
        <div className={s.loading}>{t('common.emptyText')}</div>
      )}
      {isLoading && <div className={s.loading}>{t('common.loadingText')}</div>}
      <div className={cn(s.offers, view === View.GRID ? s.grid : s.list)}>
        {(!isLoading || page > 1) &&
          trips.map((offer, idx) => {
            return (
              <div key={idx} className={s.tripCardWrap}>
                <TripCard
                  {...offer}
                  wide={view === View.LIST}
                  onClick={handlePush}
                />
              </div>
            )
          })}
      </div>

      {!!trips.length && isButtonShowed && !isLoading && (
        <Button
          classname={s.button}
          variant='secondary'
          onClick={() => setPage(prevState => ++prevState)}
        >
          {t('common.loadMore')}
        </Button>
      )}
    </div>
  )
}
