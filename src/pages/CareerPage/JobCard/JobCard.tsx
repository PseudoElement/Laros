import { FC, useState } from 'react'

import { Button, TruncatedText } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './JobCard.module.scss'
import { JOB_CARD_TEXT_LIMIT } from '../../../shared/constants'

export interface jobCardProps {
     vacancy: string
     time: string
     description: string
     id: number
     onClick?: (id: number) => void
}

export const JobCard: FC<jobCardProps> = ({ vacancy, time, id, onClick, description }) => {
     const t = useTranslate()
     const [isTruncated, setIsTruncated] = useState<boolean>(true)

     return (
          <div className={s.cardWrapper}>
               <h2 className={s.title}>{vacancy}</h2>

               <div className={s.time}>{time}</div>
               <TruncatedText isTruncatedOuter={isTruncated} setIsTruncatedOuter={setIsTruncated} limit={JOB_CARD_TEXT_LIMIT}>
                    {description}
               </TruncatedText>

               <div className={s.buttons}>
                    <Button onClick={() => (onClick ? onClick(id) : null)} classname={s.applyButton}>
                         {t('career.modalTitle')}
                    </Button>

                    <Button classname={s.infoButton} variant={'outline'} onClick={() => setIsTruncated(prev => !prev)}>
                         {isTruncated ? t('career.moreInfo') : t('career.close')}
                    </Button>
               </div>
          </div>
     )
}
