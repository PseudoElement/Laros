import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input, Radio } from 'components'
import { AddressInput } from 'features'
import { Steps } from '../VoucherPage'

import { useAppDispatch } from 'shared/hooks/redux'
import { useTranslate } from 'shared/hooks/useTranslate'
import { updateForm } from 'store/slices/voucher/voucher'

import { titleOptions } from 'shared/constants/form'
import { EMAIL_VALIDATION } from 'shared/constants'

import s from './Step1Form.module.scss'

interface Step1FormProps {
  setStep: (step: Steps) => void
}

export const Step1Form: FC<Step1FormProps> = ({ setStep }) => {
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const t = useTranslate()

  const vocabulary: any = {
    sender: 'Die Daten der Person mit, die den Geschenkgutschein versendet',
    title: 'Anrede',
    email: 'E-Mail',
    phone: 'Telefonnummer',
    address: 'Adresse',
    recipient: 'Empfängername',
    from: 'Gutschein vom',
    value: 'Wert des Gutscheins ein Muss mehr als 50 CHF betragen',
  }

  const onError = (error: any) => {
    alert(
      `${Object.keys(error)
        .map(key => vocabulary[key])
        .join(', ')}, sind Pflichtfelder`
    )
    console.error('error', errors)
    console.log(error)
  }

  const onSubmit: SubmitHandler<any> = formData => {
    window.scrollTo(0, 0)
    setStep(Steps.SECOND)
    dispatch(updateForm(formData))
  }

  return (
    <div className={s.container}>
      <div className={s.introWrapper}>
        <div className={s.intro}>
          <div className={s.introTitle}>{t('vouchers.pageTitle')}</div>

          <div className={s.introDescription}>{t('vouchers.pageSubTitle')}</div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.voucherSection}>
          <div className={s.title}>{t('vouchers.section1')}</div>

          <div className={s.voucherInputs}>
            <div className={s.selectDiv}>
              <Controller
                name='name'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    classname={s.inputVoucherName}
                    required
                    shorten
                    placeholder={t('vouchers.placeholder1')}
                    onChange={onChange}
                    id='name'
                    value={value}
                    label={t('vouchers.label1')}
                  />
                )}
              />
            </div>

            <Controller
              name='value'
              control={control}
              rules={{ required: true, min: 49 }}
              render={({ field: { onChange, value } }) => (
                <Input
                  required
                  shorten
                  placeholder='50'
                  type='number'
                  onChange={onChange}
                  id='name'
                  value={value}
                  label={t('vouchers.label2')}
                  classname={s.price}
                />
              )}
            />
          </div>
        </div>

        <div className={s.billingSection}>
          <div className={s.title}>{t('vouchers.section2')}</div>

          <div className={s.billingDescription}>{t('vouchers.subSection')}</div>

          <Controller
            name='sender'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                required
                shorten
                placeholder={t('vouchers.placeholder1')}
                onChange={onChange}
                id='name'
                value={value}
                label={`${t('vouchers.label3')}*`}
              />
            )}
          />

          <Controller
            name='title'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className={s.radio}>
                <div className={s.radioLabel}>{t('forms.inputLabel23')}*</div>
                <Radio
                  name='title'
                  onChange={onChange}
                  value={value}
                  options={titleOptions}
                />
              </div>
            )}
          />

          <div className={s.personDetals}>
            <Controller
              name='email'
              control={control}
              rules={{ required: true, pattern: EMAIL_VALIDATION }}
              render={({ field: { onChange, value } }) => (
                <Input
                  classname={s.input}
                  required
                  shorten
                  placeholder={t('forms.inputLabel1')}
                  type='email'
                  onChange={onChange}
                  id='name'
                  value={value}
                  label={`${t('forms.inputLabel1')}*`}
                />
              )}
            />

            <Controller
              name='company'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  classname={s.input}
                  shorten
                  placeholder={t('vouchers.placeholder3')}
                  onChange={onChange}
                  id='name'
                  value={value}
                  label={t('vouchers.label5')}
                />
              )}
            />

            <Controller
              name='phone'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  classname={s.input}
                  placeholder='+ 42 123 - 45- 67'
                  required
                  shorten
                  type='phone'
                  onChange={onChange}
                  id='name'
                  value={value}
                  label={`${t('vouchers.label6')}*`}
                />
              )}
            />

            <AddressInput control={control} />
          </div>
        </div>

        <div className={s.recipientSection}>
          <div className={s.title}>{t('vouchers.section3')}</div>

          <Controller
            name='recipient'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                required
                shorten
                placeholder={t('vouchers.placeholder1')}
                onChange={onChange}
                id='name'
                value={value}
                label={`${t('vouchers.label3')}*`}
              />
            )}
          />
        </div>

        <div className={s.fromSection}>
          <div className={s.title}>{t('vouchers.section4')}</div>

          <Controller
            name='from'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                required
                shorten
                placeholder={t('vouchers.placeholder1')}
                onChange={onChange}
                id='name'
                value={value}
                label={`${t('vouchers.label8')}*`}
              />
            )}
          />
        </div>

        <Button onClick={handleSubmit(onSubmit, onError)} classname={s.nextBtn}>
          {t('vouchers.buttonNext')}
        </Button>
      </div>
    </div>
  )
}
