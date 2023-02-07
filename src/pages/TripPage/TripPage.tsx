import { FC, useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { TripPlan } from './Tab/TripPlan'
import { InsiderTips } from './Tab/InsiderTips'
import { RelatedTours } from './Tab/RelatedTours'
import { AreasOf } from '../../features/AreasOf'
import { TripPageIntro } from './TripPageIntro/TripPageIntro'
import { ContactForm } from 'features'
import { Modal } from 'components'

import { getTripsNearby, getTripsSimilar } from 'shared/api/routes/trips'
import { withDomain } from 'shared/helpers/withDomain'
import { useTranslate } from 'shared/hooks/useTranslate'
import { useModal } from 'shared/hooks/useModal'
import { getParentDestination } from 'store/slices/destinations/selectors'
import { useAppSelector } from 'shared/hooks/redux'

import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'

import s from './TripPage.module.scss'
import cn from 'classnames'
import { useGetTripInfo } from 'shared/hooks/useGetTripInfo'
import { OrderPayload } from 'shared/types/order'

export interface TripPageProps {
  trip: Trip
}

export const TripPage: FC<TripPageProps> = ({ trip }) => {
  const t = useTranslate()

  const [relatedTours, setRelatedTours] = useState<Trip[]>([])
  const [tripNearby, setTripNearby] = useState<Destination[]>([])
  const { isOpen, onClose, open } = useModal()
  const form = useAppSelector((state) => state.order.form);
  const destination = useAppSelector(state =>
    getParentDestination(state, tripNearby[0]?.parent)
  )

  const loadTripSimilar = async (id: number) => {
    try {
      const { data } = await getTripsSimilar(id)
      setRelatedTours(data.data)
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadTripNearby = async (id: number) => {
    try {
      const { data } = await getTripsNearby(id)
      setTripNearby(data.data)
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    if (trip) {
      loadTripSimilar(trip.id)
      loadTripNearby(trip.id)
    }
  }, [trip])

  return (
    <div className={s.wrapper}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${trip?.images ? withDomain(trip.images[0]) : ''
            })`,
        }}
      />

      <div className={s.container}>
        <div className={s.card}>
          {trip.name ? (
            <TripPageIntro {...trip} onStartTrip={() => open()} />
          ) : (
            <div className={s.loader}>
              <p>{t('common.loadingText')}</p>
            </div>
          )}
        </div>

        <Tabs className={s.tabs}>
          <TabList className={s.tabList}>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab1')}</Tab>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab2')}</Tab>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab3')}</Tab>
            <Tab className={s.tab}>{t('travelPlannerTabs.tab4')}</Tab>
            <Tab className={s.tab} onClick={open}>
              {t('travelPlannerTabs.tab5')}
            </Tab>
          </TabList>

          <TabPanel>
            {trip?.destinations ? (
              <TripPlan tripDestination={trip.destinations} onStartTrip={() => open()} />
            ) : null}
          </TabPanel>

          <TabPanel>
            {trip.tips ? <InsiderTips data={trip.tips} /> : null}
          </TabPanel>

          <TabPanel>
            {relatedTours.length ? (
              <RelatedTours similarTrips={relatedTours} />
            ) : null}
          </TabPanel>

          <TabPanel>
            {tripNearby && destination ? (
              <AreasOf
                className={s.destinations}
                destinations={tripNearby}
                destination={destination}
              />
            ) : null}
          </TabPanel>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={t('contactForm.formTitle')}
            classname={s.modalWrap}
          >
            <div className={cn(s.modal, ['scrollStyle'])}>
              {/* @ts-ignore */}
              <ContactForm order={{ ...form, ...trip }} />
            </div>
          </Modal>
        </Tabs>
      </div>
    </div>
  )
}
