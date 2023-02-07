import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import cn from 'classnames'
import { sendContactFormThunk, sendContactOrderFormThunk } from 'store/slices/contactForm/thunk'

import { Button, Input, Radio, InputCalendar } from 'components'

import { genderOptions } from 'shared/constants/form'
import { useAppDispatch } from 'shared/hooks/redux'
import { ContactForm as ContactFormData } from 'shared/types/contact'
import { useTranslate } from 'shared/hooks/useTranslate'

import fb from '/public/assets/images/socials/facebook.svg?url'
import inst from '/public/assets/images/socials/instagram.svg?url'
import linked from '/public/assets/images/socials/linkedin.svg?url'
import map from '/public/assets/images/info/map.svg?url'
import userPlus from '/public/assets/images/info/user-plus.svg?url'
import send from '/public/assets/images/info/send.svg?url'
import video from '/public/assets/images/info/video.svg?url'

import s from './ContactForm.module.scss'
import Link from 'next/link'
import { OrderPayload } from 'shared/types/order'

type ContactFormProps = {
  contactPage?: boolean
  onFormSubmit?: () => void
  order?: OrderPayload
}

export const ContactForm: FC<ContactFormProps> = ({
  contactPage,
  onFormSubmit,
  order
}) => {
  const { handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()
  const route = useRouter()
  const t = useTranslate()
  const onError = (error: any) => {
    alert(`${Object.keys(error).join(', ')} are required`)
  }
  const onSubmit = (formData: any) => {
    // TODO add types
    const form: ContactFormData = {
      ...formData,
    }
    if (order) {
      dispatch(sendContactOrderFormThunk({
        form: form as ContactFormData,
        order: order
      }))
    } else {
      dispatch(sendContactFormThunk(form as ContactFormData))

    }
    onFormSubmit && onFormSubmit()
  }
  return (
    <div className={cn(s.container, { [s.contactContainer]: contactPage })}>
      <div className={cn(s.main, { [s.contactMain]: contactPage })}>
        <div className={s.title}>
          {contactPage ? t('contactForm.title') : t('contactForm.sendUs')}
        </div>
        <div className={s.description}>{t('contactForm.subTitle')}</div>
        <div className={s.form}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t('vouchers.placeholder1')}
                onChange={onChange}
                id='name'
                value={value}
                label={t('forms.inputLabel5')}
              />
            )}
          />
          <Controller
            name='gender'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <div className={s.radio}>
                <div className={s.radioLabel}>{t('contactForm.label1')}*</div>
                <Radio
                  name='gender'
                  onChange={onChange}
                  value={value}
                  options={genderOptions}
                />
              </div>
            )}
          />
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                type='email'
                placeholder={t('forms.inputLabel1')}
                onChange={onChange}
                id='email'
                value={value}
                label={t('forms.inputLabel1')}
              />
            )}
          />

          {contactPage ? (
            <Controller
              name='phone'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  type='phone'
                  placeholder=''
                  onChange={e => onChange(e)}
                  id='phone'
                  value={value}
                  label={t('forms.inputLabel6')}
                />
              )}
            />
          ) : (
            <Controller
              name='number'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type='number'
                  onChange={onChange}
                  id='number'
                  value={value}
                  label={t('contactForm.exact')}
                />
              )}
            />
          )}
          {contactPage ? null : (
            <>
              <Controller
                name='depature'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCalendar
                    onChange={e => onChange(e)}
                    value={value}
                    label={t('worldwideTours.label3')}
                    error={false}
                    handleIconClick={() => { }}
                  />
                )}
              />
              <Controller
                name='return'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCalendar
                    onChange={e => onChange(e)}
                    value={value}
                    label={t('contactForm.return')}
                    error={false}
                    handleIconClick={() => { }}
                  />
                )}
              />
            </>
          )}

          <Controller
            name='message'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t('worldwideTours.label12')}
                onChange={onChange}
                id='number'
                value={value}
                label={t('forms.inputLabel7')}
              />
            )}
          />
          <Button
            onClick={handleSubmit(onSubmit, onError)}
            type='submit'
            variant='secondary'
            classname={cn(s.sendBtn, { [s.contactBtn]: contactPage })}
          >
            {t('brochures.buttonSend')}
          </Button>
        </div>
      </div>

      <div className={cn(s.info, { [s.contactInfo]: contactPage })}>
        <div
          className={cn(s.infoItem, s.appointment)}
          onClick={() => route.push('https://meetings-eu1.hubspot.com/laros')}
        >
          <div className={s.infoIcon}>
            <Image src={video} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>{t('brochures.buttonSend')}</div>
          <div className={s.infoDescription}>
            {t('contactForm.chooseTheDate')}
          </div>
        </div>
        <div className={cn(s.infoItem, s.addressTime)}>
          <div className={s.infoIcon}>
            <Image src={map} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>{t('pdfs.address')}</div>
          <div
            className={s.infoDescription}
          >{`Hauptstrasse 94,\nCH-4147 Aesch\n\nMo: 13:30 – 18:00 Uhr\nDi bis Fri: 09:00 – 12:00 und 13:30 – 18:00 Uhr
`}</div>
        </div>
        <div className={cn(s.infoItem, s.contacts)}>
          <div className={s.infoIcon}>
            <Image src={send} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>{t('pdfs.phone')}</div>
          <div className={s.infoDescription}>
            <a href='tel:+410617568080' className={s.phone}>
              61 756 80 80
            </a>
            {`\n\n`}
            <a href='mailto:info@laros.ch' className={s.mail}>
              {t('forms.larosEmail')}
            </a>
          </div>
        </div>

        <div className={cn(s.infoItem, s.socials)}>
          <div className={s.infoIcon}>
            <Image src={userPlus} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>{t('contactForm.socialMedia')}</div>
          <div className={s.infoDescription}>{t('contactForm.follow')}:</div>

          <div className={s.socialIcons}>
            <Link href={'https://www.instagram.com/larosreisen'}>
              <a target={'_blank'}>
                <div>
                  <Image src={inst} width={20} height={20} />
                </div>
              </a>
            </Link>

            <Link href={'https://www.facebook.com/larosreisen'}>
              <a target={'_blank'}>
                <div>
                  <Image src={fb} width={20} height={20} />
                </div>
              </a>
            </Link>

            <Link href={'https://www.linkedin.com/company/laros-reisen-gmbh'}>
              <a target={'_blank'}>
                <div>
                  <Image src={linked} width={20} height={20} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
