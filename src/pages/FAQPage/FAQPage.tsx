import { FC } from 'react'
import s from './FAQPage.module.scss'

import { faqData } from '../../shared/mocks/faqData'
import { Accordeon } from 'components/Accordeon'

export const FAQPage: FC = () => {
  return (
    <div className={s.faqcontent}>
      <h1 className={s.faqTitle}>What users think about us</h1>
      <div className={s.text}>
        <p>
          Sapien ornare urna urna in facilisis viverra integer. Mi ornare mauris
          in duis in sit diam porttitor a. Congue pulvinar et vitae urna mi
          tristique laoreet integer molestie. Viverra sit sit sapien id blandit.
        </p>
      </div>
      <Accordeon items={faqData} every={false} />
    </div>
  )
}
