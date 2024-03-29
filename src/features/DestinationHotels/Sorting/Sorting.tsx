import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import cn from 'classnames'

import { Select, RangeMarks } from 'components'

import { Hotel, HotelFilterParams } from 'shared/types/hotel'
import { Destination } from 'shared/types/destinations'
import { Option, Sort } from 'shared/types'

import { useGetHotelFilters } from 'shared/hooks/useGetHotelFilters'
import { useDebounce } from 'shared/hooks/useDebounce'
import { useTranslate } from 'shared/hooks/useTranslate'

import s from './Sorting.module.scss'
import { TripSortOptions } from '../../../shared/constants/filters'

const direction = [
  { icon: '', label: 'A-Z', value: Sort.AZ },
  { icon: '', label: 'Z-A', value: Sort.ZA },
]

interface SortingProps {
  params: Partial<HotelFilterParams>
  setParams: Dispatch<SetStateAction<Partial<HotelFilterParams>>>
  setPage: Dispatch<SetStateAction<number>>
  map: Destination & {
    destinations: Destination[]
  }
}

const Sorting: FC<SortingProps> = ({ setParams, params, map, setPage }) => {
  const [subRegions, setSubRegions] = useState<Option[]>([])
  const [tags, categories, accommodations] = useGetHotelFilters(false)
  const [price, setPrice] = useState([0, 300])
  const debouncePrice = useDebounce(price, 300)
  const t = useTranslate()

  const changeSubRegion = (value: Option[]) => {
    const destination = value.map(v => v.value).join(',')

    setParams(prev => ({
      ...prev,
      destination: Boolean(destination.length) ? destination : undefined,
    }))
  }

  const onChangePrice = (value: number[]) => {
    setPrice(value)
    setPage(1)
  }

  const changeCategory = (value: Option) => {
    setParams(prev => ({ ...prev, category: value?.value }))
    setPage(1)
  }

  const changeTabs = (value: number) => {
    let newTags = params.tags?.split(',') ?? []

    if (newTags.includes(value.toString())) {
      newTags = newTags.filter(tag => tag !== value.toString())
    } else {
      newTags.push(value.toString())
    }

    setParams(prev => ({
      ...prev,
      tags: Boolean(newTags.length) ? newTags.join(',') : undefined,
    }))
    setPage(1)
  }

  useEffect(() => {
    setSubRegions([
      {
        label: map.name,
        value: String(map.id),
        icon: '',
      },
      ...map.destinations.map(destination => ({
        label: destination.name,
        value: String(destination.id),
        icon: '',
      })),
    ])
  }, [map])

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      price_gt: debouncePrice[0],
      price_lt: debouncePrice[1],
    }))
    setPage(1)
  }, [debouncePrice])

  return (
    <>
      <div className={s.selects}>
        <Select
          // @ts-ignore
          onChange={changeSubRegion}
          classname={cn(s.select, ['scrollStyle'])}
          // @ts-ignore
          value={subRegions.filter(
            region =>
              params.destination
                ?.split(',')
                .some(item => item === region.value) && region
          )}
          placeholder={t('hotels.select1Title')}
          isMulti
          options={subRegions}
        />

        <Select
          placeholder={t('hotels.select2Title')}
          onChange={changeCategory}
          classname={s.select}
          options={categories}
        />
      </div>

      <div className={s.services}>
        <Select
          onChange={value =>
            setParams(prev => ({ ...prev, accommodations: value?.value }))
          }
          placeholder={t('hotels.select3')}
          classname={s.accommodationSelect}
          options={accommodations}
        />

        <div className={s.price}>
          <p>{t('hotels.price')}</p>
          <RangeMarks
            value={price}
            onChange={onChangePrice}
            max={300}
            min={0}
            colorsTrack={['#ccc', '#333', '#ccc']}
            step={50}
          />
        </div>
      </div>

      <div className={s.sorting}>
        <div className={s.tags}>
          <div className={s.tag}>{t('hotels.tags')}:</div>

          <div className={cn(s.tabs, ['scrollStyle'])}>
            {tags.map(tab => (
              <div
                onClick={() => changeTabs(tab.id)}
                key={tab.id}
                className={cn(s.tab, {
                  [s.selectedTab]: params.tags?.includes(tab.id.toString()),
                })}
              >
                {tab.name}
              </div>
            ))}
          </div>
        </div>

        <div className={s.direction}>
          {t('hotels.from')}
          <Select
            onChange={value =>
              setParams(prev => ({
                ...prev,
                ordering: value?.value as keyof Hotel,
              }))
            }
            hasArrow={false}
            defaultValue={TripSortOptions[0]}
            isClearable={false}
            classname={s.selectDirection}
            options={direction}
          />
        </div>
      </div>
    </>
  )
}

export default Sorting
