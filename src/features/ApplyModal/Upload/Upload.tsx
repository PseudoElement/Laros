import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Controller } from 'react-hook-form'

import { Checkbox } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import upload from '/public/assets/images/upload.svg?url'
import scrap from '/public/assets/images/scrap.svg?url'

import s from './Upload.module.scss'

interface UploadProps {
  file: any
  setFile: (file: any) => void
  control: any
}

type File = {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

export const Upload: FC<UploadProps> = ({ setFile, file, control }) => {
  const t = useTranslate()

  const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  return (
    <div className={s.wrapperCv}>
      {file ? (
        <>
          <div className={s.fileLoad}>
            <div className={s.scrap}>
              <Image src={scrap} width={13} height={14} alt={'file'} />
            </div>

            <div className={s.fileName}>{file.name}</div>
          </div>

          <div className={s.changeFile} onClick={() => setFile(null)}>
            {t('career.changeFile')}
          </div>

          <div className={s.privacyPolicyBlock}>
            <div>
              <Controller
                name='checkbox'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Checkbox label={''} value={value} onChange={onChange} />
                )}
              />
            </div>

            <p className={s.privacyPolicy}>
              {t('worldwideTours.Privacy1')}{' '}
              <Link className={s.link} href={'/terms/1'}>
                {t('worldwideTours.Privacy2')}
              </Link>{' '}
              {t('worldwideTours.Privacy3')}{' '}
              <Link className={s.link} href={'/terms/1'}>
                {t('worldwideTours.Privacy4')}
              </Link>
            </p>
          </div>
        </>
      ) : (
        <>
          <label className={s.label}>
            <input
              accept='.doc, .docx, .pdf'
              type='file'
              className={s.fileInput}
              onChange={fileHandler}
            />

            <span className={s.title}>
              <Image alt='uploadIcon' src={upload} width={16} height={16} />

              <span className={s.text}>{t('aboutModal.upload')}</span>
            </span>
          </label>

          <p className={s.fileTypes}>DOC, DOCX, PDF (2MB)</p>
        </>
      )}
    </div>
  )
}
