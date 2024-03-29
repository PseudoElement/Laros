import { FC } from 'react'
import {
  Control,
  Controller,
  FieldArrayWithId,
  UseFormWatch,
} from 'react-hook-form'
import cn from 'classnames'

import { Input, TrashIcon, Button, Select } from 'components'

import { getCountries } from 'shared/api/routes/countries'

import { Country } from 'shared/types/country'
import {
  FlightRequestFormType,
  PackageRequestFormType,
} from 'shared/types/requestForm'

import s from '../TravellerForm.module.scss'
import s1 from 'pages/FlightRequestPage/FlightRequestPage.module.scss'
import { useTranslate } from '../../../shared/hooks/useTranslate'

export interface TravellerAddressForm {
  country: { label: string; value: string }
  city: string
  address1: string
  address2: string
  zip: number
}

interface TravellerAddressFormProps {
  index: number
  control: Control<
    TravellerAddressForm & (FlightRequestFormType | PackageRequestFormType)
  >
  field: FieldArrayWithId
  setAddress: (index: number, address: string) => void
  hideRightAddressForm?: () => void
  cancelButton?: boolean
  watch: UseFormWatch<
    TravellerAddressForm & (FlightRequestFormType | PackageRequestFormType)
  >
  right?: boolean
}

export const TravellerAddressForm: FC<TravellerAddressFormProps> = ({
  index,
  control,
  field,
  setAddress,
  hideRightAddressForm,
  cancelButton,
  watch,
  right,
}) => {
  const t = useTranslate()
  const saveAddress = () => {
    const country = watch(`travellers.${index}.country`)
    const city = watch(`travellers.${index}.city`) ?? ''
    const address1 = watch(`travellers.${index}.address1`) ?? ''
    const address2 = watch(`travellers.${index}.address2`) ?? ''
    const zip = watch(`travellers.${index}.zip`) ?? ''
    const address = `${address1} ${address2} ${zip} ${city} ${country.value}`
    if (address.length > 4) setAddress(index, address)
  }

  const countriesOptions = async (inputValue: string) => {
    const { data } = await getCountries(inputValue)
    return data.data.map((item: Country) => ({
      label: item.name,
      value: item.id,
    }))
  }
  return (
    <div className={s.travellerAddressWrapper}>
      <div className={cn(s.radioLabel, s.addressRadioLabel)}>
        <div>
          {right
            ? `${t('worldwideTours.address')} #2`
            : `${t('worldwideTours.address')} #1`}
        </div>
        <Button onClick={hideRightAddressForm} classname={s.deleteButton}>
          <TrashIcon />
        </Button>
      </div>

      <div className={s1.selectWrapper}>
        <div className={s1.selectLabel}>{t('forms.inputLabel25')}</div>
        <Controller
          name={`travellers.${index}.country`}
          control={control}
          render={({ field: { onChange } }) => (
            <Select
              {...field}
              classname={s.select}
              onChange={onChange}
              placeholder={t('common.select')}
              loadOptions={countriesOptions}
              options={[]}
              async
            />
          )}
        />
      </div>

      <Controller
        name={`travellers.${index}.city`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            classname={s.input}
            placeholder={t('worldwideTours.label12')}
            onChange={onChange}
            value={value}
            label={t('forms.inputLabel26')}
          />
        )}
      />

      <Controller
        name={`travellers.${index}.address1`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            classname={s.input}
            placeholder={t('worldwideTours.label12')}
            onChange={onChange}
            value={value}
            label={`${t('forms.inputLabel27')} 1*`}
          />
        )}
      />

      <Controller
        name={`travellers.${index}.address2`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            classname={s.input}
            placeholder={t('worldwideTours.label12')}
            onChange={onChange}
            value={value}
            label={`${t('forms.inputLabel27')} 2*`}
          />
        )}
      />

      <Controller
        name={`travellers.${index}.zip`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            type='number'
            classname={s.input}
            placeholder={t('worldwideTours.label12')}
            onChange={onChange}
            value={value}
            label={t('vouchers.placeholder6')}
          />
        )}
      />

      <div className={s.buttons}>
        <Button classname={s.saveButton} onClick={saveAddress}>
          {t('worldwideTours.buttonSave')}
        </Button>
        {cancelButton && (
          <Button onClick={hideRightAddressForm} classname={s.cancelButton}>
            {t('contactForm.buttonCancel')}
          </Button>
        )}
      </div>
    </div>
  )
}
