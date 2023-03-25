import { FC, memo, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import cn from 'classnames'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { useTranslate } from 'shared/hooks/useTranslate'
import { useAppSelector } from 'shared/hooks/redux'
import { getDestination } from 'store/slices/destinations/selectors'

import Polis from '/public/assets/images/destinations/Polis.svg'

import s from './RegionCard.module.scss'
import { withDomain } from '../../shared/helpers/withDomain'

interface RegionCardProps {
  id: number
  image?: string | StaticImageData
  title: string
  cardText: string
  className?: string
  onClose?: () => void
  link: string
  onOpen?: () => void
  isOpen?: boolean
  isTooltip?: boolean
}

const RegionCard: FC<RegionCardProps> = ({
  id,
  image,
  title,
  cardText,
  onClose,
  onOpen,
  isOpen,
  link,
  isTooltip = false,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const t = useTranslate()

  const destination = useAppSelector(state => getDestination(state, id))
  const currentTitle = destination?.title ?? title

  useClickOutside(ref, () => onClose && ref.current && onClose())

  return (
    <>
      {isOpen && (
        <div ref={ref} className={cn(s.cart_shown, className)}>
          <div className={s.cart_picture}>
            {image ? (
              <Image
                src={withDomain(image)}
                width={240}
                className={s.image}
                height={135}
                alt='cart picture image'
              />
            ) : (
              <Polis />
            )}
          </div>
          <div className={s.cart_info}>
            <h3 className={s.cart_title}>{currentTitle}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: cardText }}
              className={clsx(s.description, isTooltip && s.descriptionTooltip)}
            />
          </div>

          {!isTooltip && (
            <div className={s.link__blockDestinationMap}>
              <Link href={`/areas/${id}`}>
                <span className={s.link__detailCartMap}>
                  {t('hotelCard.moreButton')}
                </span>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default memo(RegionCard)
