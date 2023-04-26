import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './Footer.module.scss'
import airport from '/public/assets/images/airport__footer.svg?url'

import reisegarantie from '/public/assets/images/reisegarantie__footer.svg?url'
import srv from '/public/assets/images/srv__footer.svg?url'
import tps from '/public/assets/images/tps__footer.svg?url'

import fb from '/public/assets/images/facebook__footer.svg?url'
import ig from '/public/assets/images/instagram__footer.svg?url'
import lk from '/public/assets/images/linkedIn__footer.svg?url'
import { bottomLinks, siteLinks } from 'shared/constants/navigation'
import { useTranslate } from '../../shared/hooks/useTranslate'

export const Footer: FC = () => {
  const t = useTranslate()

  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={s.partners}>
          <div className={s.blockImg}>
            <span>
              <a
                href='https://www.airportparking.ch/index.cfm?method=booking.step-1'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  className={s.imgFirst}
                  width={200}
                  height={50}
                  src={airport}
                  alt='airport icon'
                />
              </a>
            </span>
            <span className={s.imgSecond}>
              <a
                href='https://www.garantiefonds.ch/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src={reisegarantie}
                  width={200}
                  height={50}
                  alt='reise garantie icon'
                />
              </a>
            </span>
          </div>

          <div className={s.blockImg}>
            <span>
              <a href='https://www.srv.ch/' target='_blank' rel='noreferrer'>
                <Image
                  className={s.imgFirst}
                  width={200}
                  height={50}
                  src={srv}
                  alt='srv icon'
                />
              </a>
            </span>
            <span className={s.imgSecond}>
              <a href='https://tps.travel/' target='_blank' rel='noreferrer'>
                <Image src={tps} width={200} height={50} alt='tps icon' />
              </a>
            </span>
          </div>
        </div>

        <div className={s.about}>
          <div className={s.siteLinks}>
            <div className={s.subtitleFooter}>
              <span>{t('navigation.footer.linksText')}</span>
            </div>
            <ul className={s.listLinks}>
              {siteLinks.map(item => {
                return (
                  <li
                    key={item.to + item.name.toLowerCase()}
                    className={s.itemLink}
                  >
                    <Link href={item.to}>
                      <a className={s.link}>{t(item.name)}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={s.listInfo}>
            <div className={s.itemInfo}>
              <div className={s.subtitleFooter}>
                <span>{t('navigation.footer.contactText')}</span>
              </div>
              <ul className={s.aboutInfoList}>
                <li className={s.aboutItem}>
                  <p className={s.link}>
                    {`${t('navigation.footer.address')}`}
                  </p>
                  <p className={s.link}>
                    {`${t('navigation.footer.addressCode')}`}
                  </p>
                </li>
                <li className={s.aboutItem}>
                  <p className={s.link}>
                    {t('navigation.footer.telText')}:{' '}
                    {t('navigation.footer.telNumber')}
                  </p>
                </li>
                <li className={s.aboutItem}>
                  <p className={s.link}>
                    {`${t('navigation.footer.emailText')}: 
                    ${t('navigation.footer.email')}`}
                  </p>
                </li>
              </ul>
            </div>

            <div className={s.itemInfo}>
              <div className={s.subtitleFooter}>
                <span>{t('navigation.footer.workingHoursText')}:</span>
              </div>
              <ul className={s.aboutInfoList}>
                <li className={s.aboutItem}>
                  <p className={s.link}>
                    {`${t('navigation.footer.moText')}: ${t(
                      'navigation.footer.mo'
                    )}`}
                  </p>
                </li>
                <li className={s.aboutItem}>
                  <p className={s.link}>
                    {`${t('navigation.footer.tu-frText')}: ${t(
                      'navigation.footer.tu-fr'
                    )}`}
                  </p>
                </li>
              </ul>
            </div>

            <div className={s.itemInfo}>
              <div className={s.subtitleFooter}>
                <span>{t('navigation.footer.followText')}</span>
              </div>

              <ul className={s.socialList}>
                <li className={s.socialItem}>
                  <Link href={'https://www.instagram.com/larosreisen'}>
                    <a target={'_blank'}>
                      <Image src={ig} width={13} height={13} alt='instagram' />
                    </a>
                  </Link>
                </li>

                <li className={s.socialItem}>
                  <Link href={'https://www.facebook.com/larosreisen'}>
                    <a target={'_blank'}>
                      <Image src={fb} width={13} height={13} alt='facebook' />
                    </a>
                  </Link>
                </li>

                <li className={s.socialItem}>
                  <Link
                    href={'https://www.linkedin.com/company/laros-reisen-gmbh'}
                  >
                    <a target={'_blank'}>
                      <Image src={lk} width={13} height={13} alt='linkedin' />
                    </a>
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
              return (
                <li key={idx} className={s.navItem}>
                  <Link className={s.navLink} href={link.to}>
                    <a className={s.navLink}>{t(link.name)}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={s.textInfo}>
          <p>{t('navigation.footer.textInfo')}</p>
        </div>
      </div>
    </footer>
  )
}
