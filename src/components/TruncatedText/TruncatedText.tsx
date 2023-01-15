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
}
export const TruncatedText: FC<TruncatedTextProps> = ({
  children,
  limit = TRUNCATION_LIMIT_DEFAULT,
  className,
  more = 'Mehr ansehen',
}) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true)
  const t = useTranslate()

  return (
    <div className={cn(s.truncatedText, className)}>
      <div className={s.description}>
        {isTruncated && children
          ? truncate(children, { length: limit })
          : children}
      </div>

      {children && children.length > limit && (
        <div
          className={s.seeMore}
          onClick={() => setIsTruncated(prev => !prev)}
        >
          {isTruncated ? more : t('career.close')}
        </div>
      )}
    </div>
  )
}
