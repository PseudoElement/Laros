//@ts-nocheck
import { FC, memo, useEffect, useState } from 'react'
import cn from 'classnames'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input, Modal, Select } from 'components'
import { ThankYouPage } from 'features'
import { Upload } from './Upload/Upload'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Vacancy } from 'shared/types/vacancy'
import { Option } from 'shared/types'
import { applyForVacancy } from 'shared/api/routes/vacancy'

import s from './ApplyModal.module.scss'

interface ApplyModalProps {
  position: number | null
  isOpen: boolean
  title?: string
  onClose: () => void
  className?: string
  vacancies: Vacancy[]
}

interface ApplyForm {
  position: Option
  name: string
  phone: string
  email: string
  file: File
  checkbox: boolean
}

const ApplyModal: FC<ApplyModalProps> = ({
  vacancies,
  position,
  isOpen,
  title,
  className,
  onClose,
}) => {
  const t = useTranslate()
  const [positions, setPositions] = useState<Option[]>([])
  const [file, setFile] = useState<any>()
  const [thankYou, setThankYou] = useState(false)

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ApplyForm>({
    defaultValues: {
      checkbox: false,
    },
  })

  const onSubmit: SubmitHandler<ApplyForm> = data => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('file', file)

    applyForVacancy(Number(data.position.value), formData)

    reset()
    setThankYou(true)
  }

  useEffect(() => {
    setPositions(
      vacancies.map(vacancy => ({
        label: vacancy.name,
        value: vacancy.id.toString(),
        icon: '',
      }))
    )
  }, [vacancies])

  useEffect(() => {
    const currentVacancy = vacancies.find(item => item.id == position)

    if (currentVacancy) {
      setValue('position', {
        value: currentVacancy.id.toString(),
        icon: '',
        label: currentVacancy.name,
      })
    }
  }, [position])

  return (
    <Modal
      title={title}
      classname={className}
      isOpen={isOpen}
      onClose={onClose}
    >
      {!thankYou ? (
        <div className={s.applyModal}>
          <Controller
            name='position'
            control={control}
            render={({ field }) => (
              <Select classname={s.select} options={positions} {...field} />
            )}
          />

          <h2 className={s.contactTitle}>{t('aboutModal.info')}</h2>
          <Controller
            name='name'
            defaultValue=''
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                shorten
                rules={{ required: true }}
                id='name'
                classname={s.input}
                label={`${t('forms.inputLabel5')}*`}
                placeholder={t('forms.inputLabel5')}
                {...field}
              />
            )}
          />

          <div className={s.flex}>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  shorten
                  required
                  id='name'
                  withCounter
                  type='email'
                  placeholder={t('forms.email3')}
                  classname={s.input}
                  label={`${t('forms.inputLabel1')}*`}
                  {...field}
                />
              )}
            />

            <Controller
              name='phone'
              defaultValue=''
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className={s.phoneInputWrap}>
                  <Input
                    id='name'
                    required
                    onChange={onChange}
                    value={value}
                    shorten
                    type='phone'
                    label={t('forms.inputLabel6')}
                    classname={cn(s.input, s.phoneInput)}
                  />
                  {!value && (
                    <span className={s.phonePlaceholder}>
                      <span>+41</span> 123 - 45 - 67
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          <div className={s.wrapperSending}>
            <p className={s.cv}>{t('aboutModal.cv')}</p>

            <div className={s.uploadWrap}>
              <Upload file={file} setFile={setFile} control={control} />

              <div className={s.buttons}>
                <Button variant='outline' onClick={onClose}>
                  {t('aboutModal.cancel')}
                </Button>

                <Button
                  onClick={handleSubmit(onSubmit)}
                  variant='primary'
                  type='submit'
                >
                  {t('aboutModal.submit')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ThankYouPage isCV />
      )}
    </Modal>
  )
}

export default memo(ApplyModal)
