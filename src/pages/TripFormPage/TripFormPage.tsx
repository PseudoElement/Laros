import { ChevronRightIcon, Map, ResetIcon } from 'components';
import { ChevronLeftIcon } from 'components/icons/ChevronLeft';
import { FC, useEffect, useState } from 'react'
import { Step1 } from './Step1/Step1';
import { Step2 } from './Step2/Step2';
import s from './TripFormPage.module.scss';
import bg from '/public/assets/images/tripFormBg.png'
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getTrip } from 'shared/api/routes/trips';
import { Country } from 'shared/types/country';
import { getCountries } from 'shared/api/routes/countries';

export enum Steps {
  FIRST,
  SECOND
}
// TODO Mock location in s.info
export const TripFormPage: FC = () => {
  const [step, setStep] = useState(Steps.FIRST)
  const [trip, setTrip] = useState<any>(null) // TODO
  const [countries, setCountries] = useState<Country[]>([])
  const { query } = useRouter();
  useEffect(() => {
    const tripID = Number(query.trip);
    if (!tripID) { return }
    const loadTrip = async (trip: number) => {
      try {
        const tripDetails = await getTrip(trip)
        setTrip(tripDetails.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadTrip(tripID)
  }, [query.trip]);
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countries = await getCountries()
        setCountries(countries.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadCountries()
  }, []);

  useEffect(() => {
    console.log(trip)
  }, [trip]);
  if (!trip) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.container}>
      <div className={s.bg} style={{
        backgroundImage: `url(${bg.src})`,
      }}>
      </div>
      <div className={s.content}>
        <div className={s.form}>
          <div className={s.header}>
            <div onClick={() => setStep(Steps.FIRST)}><ChevronLeftIcon /> <div className={s.title}>Back to previous step</div></div>
            <div><ResetIcon /> <div className={s.reset}>Reset all changes</div></div>
          </div>
          <div className={s.crumbs}>
            <div className={cn(s.crumbStep, { [s.activeCrumb]: step === Steps.FIRST })} onClick={() => setStep(Steps.FIRST)}>
              <span className={s.stepIndex}>1</span>
              <span className={s.crumbStep}>Step 1:</span>
              <span className={s.stepName}>Trip details</span>
            </div>
            <div className={s.arrow}> <ChevronRightIcon /> </div>
            <div className={cn(s.crumbStep, { [s.activeCrumb]: step === Steps.SECOND })}>
              <span className={s.stepIndex}>2</span>
              <span className={s.crumbStep}>Step 2:</span>
              <span className={s.stepName}>Travellers’ details</span>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.infoTitle}>{trip?.name}</div>
            <div className={s.infoLocation}>Peloponnese, Greece</div>
            {trip.description ? <div className={s.infoDescription}>{trip?.description}</div> : null}
          </div>
          {
            step === Steps.FIRST ?
              <Step1 setStep={setStep} trip={trip} />
              : <Step2 setStep={setStep} countries={countries} />
          }
        </div>
        <div className={s.sidebar}>
          <div className={s.map}>
            <Map route={trip?.route} />
          </div>

        </div>
      </div>
    </div>
  )
}