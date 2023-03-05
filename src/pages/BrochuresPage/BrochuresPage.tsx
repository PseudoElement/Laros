import { FC, useEffect, useState } from 'react'

import { BrochureCard } from './BrochureCard'
import { Button } from 'components'
import {
  DownloadBrochuresModal,
  SendBrochuresModal,
  ThankYouPage,
} from 'features'

import { getSelectedBrochures } from 'shared/helpers/brochures'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getBrochuresThunk } from 'store/slices/brochures/thunk'
import { downloadFile } from 'shared/helpers/downloadFile'
import { useTranslate } from 'shared/hooks/useTranslate'
import {
  brochuresIsDownloadFalse,
  toggleBrochure,
} from 'store/slices/brochures/brochures'

import s from './BrochuresPage.module.scss'

export const BrochuresPage: FC = () => {
  const t = useTranslate()
  const dispatch = useAppDispatch()

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false)
  const [isSendModalOpen, setIsSendModalOpen] = useState<boolean>(false)
  const [thankYou, setThankYou] = useState(true)
  const { brochures, isDownloadFormSent } = useAppSelector(
    state => state.brochures
  )

  const totalSelected = getSelectedBrochures(brochures)
  const totalCounter = totalSelected.length

  const showThankYou = () => {
    setThankYou(prevState => !prevState)
    setIsSendModalOpen(false)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    dispatch(getBrochuresThunk())

    return () => {
      dispatch(brochuresIsDownloadFalse())
    }
  }, [dispatch])

  const onBrochureDownload = (id: number) => {
    if (isDownloadFormSent) {
      brochures
        .filter(item => item.isSelected || item.id === id)
        .forEach(brochure => {
          downloadFile(brochure.file)
        })
      setIsDownloadModalOpen(false)
    } else {
      setIsDownloadModalOpen(true)
    }
    dispatch(toggleBrochure({ id, selected: true }))
  }

  return (
    <div className={s.brochuresPage}>
      {thankYou ? (
        <div className={s.wrapper} key={s.title}>
          <div className={s.title}>{t('brochures.title')}</div>

          <div className={s.nav} key={s.title}>
            <div className={s.subtitle}>{t('brochures.subtitle')}</div>
            {totalCounter ? (
              <Button
                onClick={() => setIsSendModalOpen(true)}
                classname={s.selectBtn}
                variant='secondary'
              >
                {t('brochures.sendMeText')} ({totalCounter})
              </Button>
            ) : (
              <div className={s.noSelectBtn}>{t('brochures.sendMeText')}</div>
            )}
          </div>

          <div className={s.sort}>{t('brochures.sort')}</div>

          <div className={s.brochuresList}>
            {brochures.map(brochure => (
              <BrochureCard
                onDownload={onBrochureDownload}
                {...brochure}
                onSelect={id => dispatch(toggleBrochure({ id }))}
                key={brochure.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <ThankYouPage
          description={t('brochures.thankYouDescr')}
          title={t('brochures.thankYou')}
        />
      )}

      <SendBrochuresModal
        brochures={totalSelected}
        isOpen={isSendModalOpen}
        onClose={() => setIsSendModalOpen(false)}
        onFormSubmit={showThankYou}
      />
      <DownloadBrochuresModal
        brochures={totalSelected}
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  )
}
