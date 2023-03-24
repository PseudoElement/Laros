import { FC, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { ArrowIcon, Button, Input, Select } from 'components'
import { AddressInput, ThankYouPage } from 'features'
import { Steps } from '../VoucherPage'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/voucher/voucher'
import { useTranslate } from 'shared/hooks/useTranslate'
import { sendContactFormThunk } from 'store/slices/voucher/thunk'

import { VoucherDelivery, VoucherForm } from 'shared/types/vouchers'
import { EMAIL_VALIDATION } from 'shared/constants'

import store from '/public/assets/images/voucherDelivery/store.svg?url'
import mail from '/public/assets/images/voucherDelivery/mail.svg?url'
import post from '/public/assets/images/voucherDelivery/post.svg?url'

import s from './Step2Form.module.scss'

interface Step2FormProps {
  setStep: (step: Steps) => void
}

export const Step2Form: FC<Step2FormProps> = ({ setStep }) => {
  const dispatch = useAppDispatch()
  const t = useTranslate()
  const [thankYou, setThankYou] = useState(false)

  const { form, history } = useAppSelector(state => state.vouchers)

  const [deliveryOption, setDeliveryOption] = useState<VoucherDelivery>(
    history.delivery
  )

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const paymentOptions = [
    { value: 'qrcode', label: 'Rechnung' },
    { value: 'cash', label: 'Barzahlung' },
    { value: 'card', label: 'Kreditkarte' },
  ]

  const vocabulary: any = {
    recepientEmail: 'E-Mail',
    phone: 'Telefonnummer',
    address: 'Adresse',
  }

  const onError = (error: any) => {
    alert(
      `${Object.keys(error)
        .map(key => vocabulary[key])
        .join(', ')}, sind Pflichtfelder`
    )
    console.error('error', errors)
  }

  const selectPreviousAddress = () => {
    setValue('address', form.address)
    setValue('zip_code', form.zip_code)
    setValue('city', form.city)
  }

  const onSubmit: SubmitHandler<any> = async formData => {
    const requestData: VoucherForm = {
      value: form.value,
      delivery: deliveryOption,
      payment: formData.payment.value,
      address: form.address,
      city: form.city,
      email: form.email,
      phone: form.phone,
      title: form.title,
      name: form.name,
      comment: form.comment,
      recipient: form.recipient,
      company: form.company,
      recipient_address: formData.address,
      recipient_city: formData.city,
      recipient_email: formData.recepientEmail,
      sender: form.sender,
      zip_code: form.zip_code,
      recipient_zip_code: formData.zip_code,
      recipient_phone: formData.phone,
    }
    dispatch(sendContactFormThunk(requestData))
    dispatch(updateForm(requestData))
    window.scrollTo(0, 0)
    setThankYou(true)
  }

  return (
    <div className={s.container}>
      {!thankYou ? (
        <>
          <div className={s.nav} onClick={() => setStep(Steps.FIRST)}>
            <div className={s.arrow}>
              <ArrowIcon />
            </div>
            <div className={s.goBack}>{t('vouchers.buttonGoBack')}</div>
          </div>
          <div className={s.wrapper}>
            <div className={s.delivery}>
              <div className={s.title}>{t('vouchers.step2Title')}</div>

              <div className={s.deliveryDescription}>
                {t('vouchers.step2SubTitle')}
              </div>

              <div className={s.deliveryOptions}>
                <div
                  onClick={() => setDeliveryOption(VoucherDelivery.STORE)}
                  className={cn(s.deliveryOption, {
                    [s.activeOption]: deliveryOption === VoucherDelivery.STORE,
                  })}
                >
                  <Image src={store} width={80} height={80} />
                  <div className={s.deliveryOptionTitle}>
                    {t('vouchers.store1')}
                  </div>
                </div>

                <div
                  onClick={() => setDeliveryOption(VoucherDelivery.POST)}
                  className={cn(s.deliveryOption, {
                    [s.activeOption]: deliveryOption === VoucherDelivery.POST,
                  })}
                >
                  <Image src={post} width={80} height={80} />
                  <div className={s.deliveryOptionTitle}>
                    {t('vouchers.store2')}
                  </div>
                </div>

                <div
                  onClick={() => setDeliveryOption(VoucherDelivery.EMAIL)}
                  className={cn(s.deliveryOption, {
                    [s.activeOption]: deliveryOption === VoucherDelivery.EMAIL,
                  })}
                >
                  <Image src={mail} width={80} height={80} />
                  <div className={s.deliveryOptionTitle}>
                    {t('vouchers.store3')}
                  </div>
                </div>
              </div>
            </div>
            {deliveryOption !== VoucherDelivery.EMAIL && (
              <div className={s.recepientSection}>
                <div className={s.description}>{t('vouchers.text1')}</div>
                <div className={s.adressPhoneForm}>
                  <AddressInput control={control} />

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
                </div>
                <div className={s.previousBtn}>
                  {t('vouchers.text2')}{' '}
                  <span onClick={selectPreviousAddress} className={s.highlight}>
                    {t('vouchers.text3')}
                  </span>
                </div>
              </div>
            )}
            {deliveryOption === VoucherDelivery.EMAIL && (
              <div className={s.emailSection}>
                <div className={s.description}>{t('vouchers.text4')}</div>

                <Controller
                  name='recepientEmail'
                  control={control}
                  rules={{ required: true, pattern: EMAIL_VALIDATION }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      classname={s.input}
                      placeholder={t('forms.email3')}
                      required
                      shorten
                      type='email'
                      onChange={onChange}
                      id='name'
                      value={value}
                      label={`${t('forms.inputLabel1')}*`}
                    />
                  )}
                />
              </div>
            )}
            <div className={s.paymentSection}>
              <div className={s.title}>{t('vouchers.payment')}</div>
              <div className={s.decription}>{t('vouchers.option')}</div>

              <div className={s.selectDiv}>
                <div className={s.selectLabel}>{t('forms.inputLabel29')}</div>

                <Controller
                  name='payment'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      options={paymentOptions}
                      onChange={onChange}
                      value={value}
                      classname={s.select}
                      placeholder={t('common.select')}
                      defaultValue={paymentOptions[0]}
                    />
                  )}
                />
              </div>
            </div>
            <div className={s.termsSection}>
              <div className={s.title}>{t('vouchers.useBlock')}</div>
              <ul className={s.list}>
                <li className={s.termsItem}>{t('vouchers.useText1')}</li>
                <li className={s.termsItem}>{t('vouchers.useText2')}</li>
                <li className={s.termsItem}>{t('vouchers.useText3')}</li>
              </ul>
            </div>
            <div className={s.shippingSection}>
              <div className={s.title}>{t('vouchers.invoiceBlock')}</div>
              <ul className={s.list}>
                <li className={s.termsItem}>{t('vouchers.invoiceBlock1')}</li>
                <li className={s.termsItem}>{t('vouchers.invoiceBlock2')}</li>
                <li className={s.termsItem}>{t('vouchers.invoiceBlock3')}</li>
              </ul>
            </div>
            <Button
              onClick={handleSubmit(onSubmit, onError)}
              classname={s.submitBtn}
            >
              {t('vouchers.buttonDone')}
            </Button>
          </div>
        </>
      ) : deliveryOption === 'store' ? (
        <ThankYouPage
          description={t('vouchers.thankYouDescrStore')}
          title={t('vouchers.thankYouStore')}
        />
      ) : (
        <ThankYouPage
          description={t('vouchers.thankYouDescr')}
          title={t('vouchers.thankYou')}
        />
      )}
    </div>
  )
}
