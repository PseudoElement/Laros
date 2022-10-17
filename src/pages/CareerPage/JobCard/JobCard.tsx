import { FC } from 'react'
import s from './JobCard.module.scss'

export type jobCard = {
  vacancy: string,
  time: string,
  description: string,
  id?: number
}


export const JobCard: FC<jobCard> = ({vacancy, time, description} ) => {
    return (
       <div className={s.cardWrapper}>
         <h2 className={s.title}>{vacancy}</h2>
         <div className={s.time}>{time}</div>
         <p className={s.description}>{description}</p>
         <div className={s.buttons}>
           <button className={s.applyButton}>Apply for a job</button>
           <button className={s.infoButton}>More info</button>
         </div>
       </div>
    )
}