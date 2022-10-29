import { FC } from 'react'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import cn from 'classnames'
import { sendContactFormThunk } from 'store/slices/contactForm/thunk'

import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Radio } from 'components/Radio'

import { titleOptions } from 'shared/constants/form'
import { useAppDispatch } from 'shared/hooks/redux'
import { ContactForm as ContactFormData } from 'shared/types/contact'

import fb from '/public/assets/images/socials/facebook.svg'
import inst from '/public/assets/images/socials/instagram.svg'
import linked from '/public/assets/images/socials/linkedin.svg'
import map from '/public/assets/images/info/map.svg'
import userPlus from '/public/assets/images/info/user-plus.svg'
import send from '/public/assets/images/info/send.svg'
import video from '/public/assets/images/info/video.svg'

import s from './ContactForm.module.scss'

type ContactFormProps = {
  contactPage?: boolean
}

export const ContactForm: FC<ContactFormProps> = ({ contactPage }) => {
  const { handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()

  const onSubmit = (formData: any) => {
    // TODO add type
    const form: ContactFormData = {
      ...formData,
    }
    dispatch(sendContactFormThunk(form as ContactFormData))
  }
  return (
    <div className={cn(s.container, { [s.contactContainer]: contactPage })}>
      <div className={cn(s.main, { [s.contactMain]: contactPage })}>
        <div className={s.title}>
          {contactPage ? 'Contact us' : 'Send us a message'}
        </div>
        <div className={s.description}>
          In elit volutpat, quam egestas vel ut non. Maecenas sodales amet,
          aliquam, nisl semper justo, vitae enim tortor.
        </div>
        <div className={s.form}>
          <Controller
            name='name'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                shorten
                placeholder='Name'
                onChange={onChange}
                id='name'
                value={value}
                label='Fullname and surname'
              />
            )}
          />
          <Controller
            name='title'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className={s.radio}>
                <div className={s.radioLabel}>Salutation*</div>
                <Radio
                  name='title'
                  onChange={onChange}
                  value={value}
                  options={titleOptions}
                />
              </div>
            )}
          />
          <Controller
            name='email'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                shorten
                type='email'
                placeholder='Email'
                onChange={onChange}
                id='email'
                value={value}
                label='Email'
              />
            )}
          />
          <Controller
            name='number'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                shorten
                type='number'
                placeholder=''
                onChange={onChange}
                id='number'
                value={value}
                label='Exact trip days:'
              />
            )}
          />
          <Controller
            name='message'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                shorten
                placeholder='Tap to add'
                onChange={onChange}
                id='number'
                value={value}
                label='Your message:'
              />
            )}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            variant='secondary'
            classname={cn(s.sendBtn, { [s.contactBtn]: contactPage })}
          >
            Send
          </Button>
        </div>
      </div>

      <div className={cn(s.info, { [s.contactInfo]: contactPage })}>
        <div className={cn(s.infoItem, s.appointment)}>
          <div className={s.infoIcon}>
            <Image src={video} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Book a video appointment</div>
          <div className={s.infoDescription}>
            Choose the date & time and let’s talk!
          </div>
        </div>
        <div className={cn(s.infoItem, s.addressTime)}>
          <div className={s.infoIcon}>
            <Image src={map} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Address and working hours</div>
          <div
            className={s.infoDescription}
          >{`Hauptstrasse 94,\nCH-4147 Aesch\n\nMo: 14:00 - 17:00\nTu-Fr: 10:00 - 12:00 and 14:00 - 17:00s`}</div>
        </div>
        <div className={cn(s.infoItem, s.contacts)}>
          <div className={s.infoIcon}>
            <Image src={send} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Phone and email</div>
          <div className={s.infoDescription}>
            <a href='tel:+410617568080' className={s.phone}>
              + 41 061 / 756 80 80
            </a>
            {`\n\n`}
            <a href='mailto:info@laros.ch' className={s.mail}>
              info@laros.ch
            </a>
          </div>
        </div>
        <div className={cn(s.infoItem, s.socials)}>
          <div className={s.infoIcon}>
            <Image src={userPlus} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Social media</div>
          <div className={s.infoDescription}>Follow us on:</div>
          <div className={s.socialIcons}>
            <div>
              {' '}
              <Image src={inst} width={20} height={20} />
            </div>
            <div>
              {' '}
              <Image src={fb} width={20} height={20} />
            </div>
            <div>
              {' '}
              <Image src={linked} width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
