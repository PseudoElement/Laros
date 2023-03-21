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
     isTruncatedOuter?: boolean
     setIsTruncatedOuter?: React.Dispatch<React.SetStateAction<boolean>>
}
export const TruncatedText: FC<TruncatedTextProps> = ({
     isTruncatedOuter, // isTruncatedOuter is using when you need to change TRUNCATED state out of this component, for instance in JobCard component
     setIsTruncatedOuter, // If you'll conduct isTruncatedOuter/setIsTrunctaedOuter - this ones will be influence on open/close view of text in component
     children, // Otherwise all logic of changing TRUNCATED (true/false) state is incapsulated inside this (here) component
     limit = TRUNCATION_LIMIT_DEFAULT,
     className,
     more = 'Mehr ansehen',
     seeMoreClass,
}) => {
     const t = useTranslate()
     const [isTruncatedInner, setIsTruncatedInner] = useState<boolean>(true)

     return (
          <div className={cn(s.truncatedText, className)}>
               {isTruncatedOuter === undefined ? (
                    <div className={s.description}>{isTruncatedInner && children ? truncate(children, { length: limit }) : children}</div>
               ) : (
                    <div className={s.description}>{isTruncatedOuter && children ? truncate(children, { length: limit }) : children}</div>
               )}

               {children && children.length > limit && isTruncatedOuter === undefined ? (
                    <div className={cn(s.seeMore, seeMoreClass)} onClick={() => setIsTruncatedInner!(prev => !prev)}>
                         {isTruncatedInner ? more : t('career.close')}
                    </div>
               ) : (
                    <div className={cn(s.seeMore, seeMoreClass)} onClick={() => setIsTruncatedOuter!(prev => !prev)}>
                         {isTruncatedOuter ? more : t('career.close')}
                    </div>
               )}
          </div>
     )
}
