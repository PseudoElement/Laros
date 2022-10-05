import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import cn from 'classnames'

import {
  Button,
  CheckboxGroup,
  Dropdown,
  InputLabel,
  InputRange,
  Select,
  SwitchTabs,
  Title,
} from 'components'
import { FilterProductsModal } from 'features'

import { useGetCategory } from 'shared/hooks/useGetCategory'
import { metaToOptions, stringToOption } from 'shared/helpers/select'
import { prepareQuery, formToQuery } from 'shared/helpers/parseQuery'
import { FilterProductsForm } from 'shared/types/filterProductsForm'
import { switchTabs } from 'shared/mocks/tabs'

import s from './FindPage.module.scss'

export const Find: FC = () => {
  const router = useRouter()
  const [category] = useGetCategory()

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FilterProductsForm>({
    defaultValues: {
      delivery_to: null,
      type: null,
      method: null,
      mfr: [null, null],
    },
  })
  const onSubmit: SubmitHandler<FilterProductsForm> = formData => {
    router.push(prepareQuery('/polymers', {}, formToQuery(formData, category)))
  }

  const CountryFilterLabel = () => (
    <div className={s.deliveryTitle}>
      <span className={s.description}>Delivery to</span>
      <span className={s.countries}>
        {getValues(['delivery_to']).join(', ') || 'All countries'}
      </span>
    </div>
  )

  return (
    <>
      <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <Title As='h2' className={s.title}>
          Select your requirements for polymers
        </Title>

        <SwitchTabs className={s.switchTabs} tabs={switchTabs} />

        <div className={s.filtersWrapper}>
          <InputLabel label='Type' className={s.label}>
            <Controller
              name='type'
              control={control}
              render={({ field }) => (
                <Select
                  className={cn(s.select, s.firstChild)}
                  isMulti
                  {...field}
                  placeholder='All types'
                  value={stringToOption(field.value)}
                  options={metaToOptions(category?.product_types)}
                  ref={null}
                />
              )}
            />
          </InputLabel>
          <InputLabel label='Processing method' className={s.label}>
            <Controller
              name='method'
              control={control}
              render={({ field }) => (
                <Select
                  className={s.select}
                  isMulti
                  {...field}
                  placeholder='All methods'
                  value={stringToOption(field.value)}
                  options={metaToOptions(category?.processing_methods)}
                  ref={null}
                />
              )}
            />
          </InputLabel>
          <InputLabel label='MFR' className={s.label}>
            <Controller
              name='mfr'
              control={control}
              render={({ field }) => (
                <InputRange
                  {...field}
                  min={0}
                  max={100}
                  values={field.value}
                  className={cn(s.inputRange, s.lastChild)}
                  ref={null}
                />
              )}
            />
          </InputLabel>
        </div>

        <div className={s.bottomPanel}>
          <FilterProductsModal
            query={{}}
            category={category}
            redirect='/polymers'
          />

          <Controller
            name='delivery_to'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Dropdown
                title={<CountryFilterLabel />}
                className={s.delivery}
                contentClassName={s.deliveryContent}
              >
                <CheckboxGroup
                  className={s.deliveryGroup}
                  value={value}
                  onChange={onChange}
                  options={category?.delivery_to.map(item => item.name) || []}
                />
              </Dropdown>
            )}
          />
        </div>

        <Button className={s.submitButton} type='submit'>
          Find offers
        </Button>
      </form>
    </>
  )
}
