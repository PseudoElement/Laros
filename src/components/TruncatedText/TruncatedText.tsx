import React, { FC, useState } from 'react'
import cn from 'classnames'
import { truncate } from 'lodash'

import { useTranslate } from 'shared/hooks/useTranslate'

import { TRUNCATION_LIMIT_DEFAULT } from 'shared/constants'

import s from './truncatedText.module.scss'

interface TruncatedTextProps {
  children: string | null
  limit?: number
  className?: string
  more?: string
  seeMoreClass?: string
  isTruncated?: boolean
  setIsTruncated?: React.Dispatch<React.SetStateAction<boolean>>
}
export const TruncatedText: FC<TruncatedTextProps> = ({
  isTruncated,
  setIsTruncated,
  children,
  limit = TRUNCATION_LIMIT_DEFAULT,
  className,
  more = 'Mehr ansehen',
  seeMoreClass,
}) => {
  const t = useTranslate()
  const [isTruncatedInner, setIsTruncatedInner] = useState<boolean>(true)

  return (
    <div className={cn(s.truncatedText, className)}>
      <div className={s.description}>
        {isTruncated && children
          ? truncate(children, { length: limit })
          : children}
      </div>

      {children && children.length > limit && (
        <div
          className={cn(s.seeMore, seeMoreClass)}
          onClick={() =>
            setIsTruncated
              ? setIsTruncated(prev => !prev)
              : setIsTruncatedInner(prev => !prev)
          }
        >
          {isTruncated ? more : t('career.close')}
          {isTruncated ? null : isTruncatedInner ? more : t('career.close')}
        </div>
      )}
    </div>
  )
}
