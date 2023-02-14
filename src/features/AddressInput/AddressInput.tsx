import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import { PencilIcon } from 'components'

import { useAppSelector } from 'shared/hooks/redux'
import { useTranslate } from 'shared/hooks/useTranslate'

import s from './AddressInput.module.scss'

interface AddressInputProps {
  control: Control
}

export const AddressInput: FC<AddressInputProps> = ({ control }) => {
  const t = useTranslate()
  const { history } = useAppSelector(state => state.vouchers)

  return (
    <div className={s.address}>
      <div className={s.addressTitle}>{t('vouchers.label7')}*</div>

      <div className={s.addressInputs}>
        <Controller
          name='address'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <input
              placeholder={t('vouchers.placeholder4')}
              id='street'
              required
              onChange={onChange}
              value={value}
              type='text'
              defaultValue={history.street}
              className={s.addressStreet}
            />
          )}
        />

        <Controller
          name='zip_code'
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              placeholder={t('vouchers.placeholder6')}
              id='zip'
              required
              onChange={onChange}
              value={value}
              type='text'
              defaultValue={history.zip}
              className={s.addressZip}
            />
          )}
        />

        <Controller
          name='city'
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              placeholder={t('vouchers.placeholder5')}
              id='region'
              required
              onChange={onChange}
              value={value}
              type='text'
              defaultValue={history.region}
              className={s.addressRegion}
            />
          )}
        />
      </div>

      <span className={s.addressIcon1}>
        <PencilIcon />
      </span>

      <span className={s.addressIcon2}>
        <PencilIcon />
      </span>
    </div>
  )
}
