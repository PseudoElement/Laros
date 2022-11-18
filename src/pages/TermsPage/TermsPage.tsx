import React, { FC } from 'react'
import s from './TermsPage.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { termsMock } from 'shared/mocks/terms'
import { useTranslate } from 'shared/hooks/useTranslate'

export const TermsPage: FC = () => {
  const t = useTranslate();
  return (
    <div className={s.page}>
      <div className={s.title}>
        <h2>{t('terms.title')}</h2>
        <p>
          {t('terms.subtitle')}
        </p>
      </div>
      <div className={s.container}>
        <Tabs selectedTabClassName={s.selectedTab} className={s.tabs}>
          <TabList className={s.tabList}>
            <Tab className={s.tab}>{t('terms.travelDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.rentalDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.cookiesDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.termsOfUseDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.privacyDescription')}</Tab>
          </TabList>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
          <TabPanel className={s.tabPanel}>{termsMock}</TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
