import { FC } from 'react'
import { ContactForm } from 'features/ContactForm'

import s from './ContactPage.module.scss'

export const ContactPage: FC = () => {
  return (
    <>
      <div className={s.headerBg}></div>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.formWrapper}>
            <ContactForm contactPage />
          </div>
          <div className={s.mapWrapper}></div>
        </div>
      </div>
    </>
  )
}
