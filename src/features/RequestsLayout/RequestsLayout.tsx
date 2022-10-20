import Link from 'next/link'
import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { useRouter } from 'next/router'

import s from './RequestsLayout.module.scss'
import gobackImg from '/public/assets/images/back__arrow.svg'
import Image from 'next/image'

export const RequestsLayout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <div className={s.top__contentBg}>
        <h2 className={s.h2__titleWhite}>Worldwide tours</h2>
        <p className={s.top__contentText}>
          Ullamcorper risus interdum lorem vulputate amet id quis massa
          elementum. Massa nisl urna accumsan proin imperdiet eget. In sagittis,
          facilisi tristique non. Curabitur id amet cras iaculis netus cras at
          et massa. Laoreet nulla quis vitae sollicitudin commodo at cursus dui.
          Felis, sed sit maecenas vitae eget nulla vel.
        </p>
      </div>
      <div className={s.request__form}>
        <div className={s.top__contentForm}>
          <div className={s.go__backRequest}>
            <button className={s.goback__button} onClick={() => router.back()}>
              <Image src={gobackImg} alt='back arrow' width={10} height={10} />
              <span className={s.request__span}>Go back</span>
            </button>
          </div>

          <div className={s.contact__usRequest}>
            <span className={s.contact__requestText}>
              Haven’t found what you’ve been looking for?
            </span>
            <Link className={s.link__contactUs} href=''>
              <a>Contact us</a>
            </Link>
          </div>
        </div>

        <MyTabs />
      </div>
    </>
  )
}

const MyTabs = () => (
  <nav className={s.tabs__navigation}>
    <Tabs
      defaultIndex={0}
      selectedTabClassName={s.selectedTab}
      onSelect={index => console.log(index)}
    >
      <TabList className={s.tabList}>
        <Tab className={s.tab}>Flight Reques</Tab>
        <Tab className={s.tab}>Request package</Tab>
      </TabList>
      <TabPanel className={s.tabPanel}>
        <form action='post' className={s.form__flight}>
          Form 1 here
        </form>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <form action='post' className={s.form__flight}>
          Form 2 here
        </form>
      </TabPanel>
    </Tabs>
  </nav>
)
