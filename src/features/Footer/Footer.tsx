import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './Footer.module.scss'
import airport from '/public/assets/images/airport__footer.svg';

import reisegarantie from '/public/assets/images/reisegarantie__footer.svg';
import srv from '/public/assets/images/srv__footer.svg';
import tps from '/public/assets/images/tps__footer.svg';

import fb from '/public/assets/images/facebook__footer.svg'; // по аналогии сделай
import ig from '/public/assets/images/instagram__footer.svg'; //instagram
import lk from '/public/assets/images/linkedIn__footer.svg'; //linkedin

export const siteLinks = [ // TODO move 
    { name: 'Home page', to: '/' },
    { name: 'Destination', to: '/' },
    { name: 'Trip planner', to: '/' },
    { name: 'Hotels', to: '/' },
    { name: 'Special offers', to: '/' },
    { name: 'Inspiration', to: '/' },
    { name: 'About us', to: '/' },
    { name: 'Careers', to: '/' },
    { name: 'Brochure', to: '/' },
]
export const bottomLinks = [
    { name: 'Travel policy', to: '/' },
    { name: 'Car rental policyTravel policy', to: '/' },
    { name: 'Cookies policy', to: '/' },
    { name: 'Terms of use', to: '/' },
    { name: 'Privacy policy', to: '/' },
]

export const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.content}>

                <div className={s.partners}>
                    <div className={s.blockImg}>
                        <span>
                        <Image className={s.imgFirst} width={200} height={50} src={airport} alt="airport icon" />
                        </span>
                        <span className={s.imgSecond}>
                        <Image src={reisegarantie} width={200} height={50} alt="reise garantie icon" />
                        </span>
                    </div>

                    <div className={s.blockImg}>
                        <span>
                        <Image className={s.imgFirst} width={200} height={50} src={srv} alt="srv icon" />
                        </span>
                        <span className={s.imgSecond}>
                        <Image src={tps} width={200} height={50} alt="tps icon" />
                        </span>
                    </div>
                </div>

                <div className={s.about}>

                    <div className={s.siteLinks}>
                        <div className={s.subtitleFooter}><span>SITE LINKS</span></div>
                        <ul className={s.listLinks}>
                            {siteLinks.map((item) => {
                                return <li key={item.to} className={s.itemLink}>
                                    <Link className={s.link} href={item.to}>{item.name}</Link>
                                </li>
                            })}

                        </ul>

                    </div>

                    <div className={s.listInfo}>

                        <div className={s.itemInfo}>
                            <div className={s.subtitleFooter}><span>CONTACT US</span></div>
                            <ul className={s.aboutInfoList}>
                                <li className={s.aboutItem}>
                                    <p className={s.link} >Hauptstrasse 94 CH-4147 Aesch</p>
                                </li>
                                <li className={s.aboutItem}>
                                    <p className={s.link} >Tel / Fax:<span className={s.linkNum}>061 / 756 80 80</span></p>
                                </li>
                                <li className={s.aboutItem}>
                                    <p className={s.link}>Email:   info@laros.ch</p>
                                </li>
                            </ul>
                        </div>

                        <div className={s.itemInfo}>
                            <div className={s.subtitleFooter}><span>WORKING HOURS:</span></div>
                            <ul className={s.aboutInfoList}>
                                <li className={s.aboutItem}>
                                    <p className={s.link} >Mo:<span className={s.linkNum}>14:00 - 17:00</span></p>
                                </li>
                                <li className={s.aboutItem}>
                                    <p className={s.link} >Tu-Fr:<span className={s.linkNum}>10:00 - 12:00 and 14:00 - 17:00</span></p>
                                </li>
                            </ul>
                        </div>

                        <div className={s.itemInfo}>
                            <div className={s.subtitleFooter}><span>FOLLOW US ON</span></div>

                            <ul className={s.socialList}>
                                <li className={s.socialItem}>
                                    <Link href="">
                                        <Image src={ig} width={13} height={13} alt="instagram"/>
                                    </Link>
                                </li>

                                <li className={s.socialItem}>
                                    <Link href="">
                                        <Image src={fb} width={13} height={13} alt="facebook" />
                                        {/* по аналогии сделай */}
                                    </Link>
                                </li>

                                <li className={s.socialItem}>
                                    <Link href="">
                                        <Image src={lk} width={13} height={13} alt="linkedin"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.navigation}>
                <div className={s.nav}>
                    <ul className={s.navList}>
                        {bottomLinks.map((link, idx) => {
                            return <li key={idx} className={s.navItem}>
                                <Link className={s.navLink} href={link.to}>{link.name}</Link>
                            </li>
                        })}
                    </ul>
                </div>
                <div className={s.textInfo}><p>© Laros Reisen. All rights reserved</p></div>
            </div>
        </footer >
    )
}

