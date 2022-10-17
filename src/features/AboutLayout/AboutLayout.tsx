import Image from 'next/image';
import { FC, ReactNode } from 'react'
import s from './AboutLayout.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import logo from '/public/assets/images/laros_logo_rgb_web 1.png'
import bg from '/public/assets/images/aboutLayoutBG.jpg'
import Link from 'next/link';
interface AboutLayoutProps {
    tab: number;
    children: ReactNode
};
export const AboutLayout: FC<AboutLayoutProps> = ({ tab, children }) => {
    return (
        <div>
            <div className={s.hero}>
                <div className={s.bg} style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                }}>
                </div>
                <div className={s.about}>About</div>
                <div className={s.title}>
                    <Image src={logo} width={202} height={81} />
                </div>
            </div>
            <div className={s.container}>
                <Tabs selectedTabClassName={s.selectedTab} defaultIndex={tab} className={s.tabs}>
                    <TabList className={s.tabList}>
                        <Tab className={s.tab}><Link href={'/about/'}>Who We Are </Link></Tab>
                        <Tab className={s.tab}><Link href={'/about/team'}>Our Team</Link></Tab>
                        <Tab className={s.tab}><Link href={'/about/testimonials'}>Testimonials</Link></Tab>
                        <Tab className={s.tab}><Link href={'/about/faq'}>FAQ</Link></Tab>
                        <Tab className={s.tab}><Link href={'/about/careers'}>Careers</Link></Tab>
                    </TabList>
                    <TabPanel className={s.tabPanel}>
                        {children}
                    </TabPanel>
                    <TabPanel className={s.tabPanel}>
                        {children}
                    </TabPanel>
                    <TabPanel className={s.tabPanel}>
                        {children}
                    </TabPanel>
                    <TabPanel className={s.tabPanel}>
                        {children}
                    </TabPanel>
                    <TabPanel className={s.tabPanel}>
                        {children}
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}