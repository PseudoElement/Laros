import { FC } from 'react'

import { Accordion } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import {
  faqData_1,
  faqData_2,
  faqData_3,
  faqData_4,
  faqData_5,
} from 'shared/mocks/faqData'

import s from './FAQPage.module.scss'

export const FAQPage: FC = () => {
  const t = useTranslate()

  return (
    <div className={s.faqPage}>
      <div className={s.faqContent}>
        <h1 className={s.faqTitle}>{t('faq.pageTitle')}</h1>

        <div className={s.text}>{t('faq.pageDescription')}</div>

        <div className={s.accordionTitle}>{t('faq.sectionTitle1')}</div>
        <div className={s.accordeon}>
          <div className={s.accordeonWrapper}>
            {faqData_1.map(({ title, content }, i) => (
              <Accordion
                key={title}
                title={t(title)}
                content={t(content)}
                index={i}
              />
            ))}
          </div>
        </div>

        <div className={s.accordionTitle}>{t('faq.sectionTitle2')}</div>
        <div className={s.accordion}>
          <div className={s.accordeonWrapper}>
            {faqData_2.map(({ title, content }, i) => (
              <Accordion
                key={title}
                title={t(title)}
                content={t(content)}
                index={i}
              />
            ))}
          </div>
        </div>

        <div className={s.accordionTitle}>{t('faq.sectionTitle3')}</div>
        <div className={s.accordion}>
          <div className={s.accordeonWrapper}>
            {faqData_3.map(({ title, content }, i) => (
              <Accordion
                key={title}
                title={t(title)}
                content={t(content)}
                index={i}
              />
            ))}
          </div>
        </div>

        <div className={s.accordionTitle}>{t('faq.sectionTitle4')}</div>
        <div className={s.accordion}>
          <div className={s.accordeonWrapper}>
            {faqData_4.map(({ title, content }, i) => (
              <Accordion
                key={title}
                title={t(title)}
                content={t(content)}
                index={i}
              />
            ))}
          </div>
        </div>

        <div className={s.accordionTitle}>{t('faq.sectionTitle5')}</div>
        <div className={s.accordion}>
          <div className={s.accordeonWrapper}>
            {faqData_5.map(({ title, content }, i) => (
              <Accordion
                key={title}
                title={t(title)}
                content={t(content)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
