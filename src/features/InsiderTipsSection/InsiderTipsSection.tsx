import { FC } from 'react'

import s from './InsiderTipsSection.module.scss'

interface InsiderTipsSectionProps {
  title: string
  content: string
}

export const InsiderTipsSection: FC<InsiderTipsSectionProps> = ({
  title,
  content,
}) => {
  return (
    <section className={s.insiderTipsSection}>
      <h3 className={s.title}>{title}</h3>
      <p
        className={s.insiderTips}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}
