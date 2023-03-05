import React, { FC, useState } from 'react'
import cls from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Destination } from 'shared/types/destinations'

import { MAP_REGIONS_IDS } from 'shared/constants/destinations'

import arrow from '/public/assets/images/homepage/arrow.png'

import s from './Select.module.scss'

export interface SelectBlockProps {
  setActiveMenu: (active: boolean) => void
  activeMenu: boolean
  destinations: Destination[]
}

export const SelectBlock: FC<SelectBlockProps> = ({
  setActiveMenu,
  activeMenu,
  destinations,
}) => {
  const { push } = useRouter()
  const [selectedDestination, setSelectedDestination] = useState<number>(0)
  const [value, setValue] = useState<string>('')
  const [searching, setSearching] = useState<string>('')
  const t = useTranslate()

  const filtredItems = destinations.filter((item: any) =>
    item.name.toLowerCase().includes(searching.toLowerCase())
  )

  const onClickItem = (id: number) => {
    setSelectedDestination(id)
    setSearching('')
    const clickedItem = destinations.filter(item => item.id === id)
    setValue(clickedItem[0].name)
    setActiveMenu(false)
  }

  const onChangeValue = (e: string) => {
    setSearching(e)
    setValue(e)
    setSelectedDestination(0)
    setActiveMenu(true)
  }

  const handleGo = () => {
    if (selectedDestination) {
      push(
        MAP_REGIONS_IDS.includes(selectedDestination)
          ? `/destinations/areas/${selectedDestination}`
          : `areas/${selectedDestination}`
      )
    }
  }

  return (
    <div className={s.wrapper}>
      <label className={s.title}>{t('homepage.textFieldLabel')}?</label>
      <div className={s.select_block}>
        <div className={s.select}>
          <div onClick={() => setActiveMenu(!activeMenu)} className={s.image}>
            <Image src={arrow} layout={'fixed'} />
          </div>
          {activeMenu ? (
            <input
              autoFocus={true}
              value={value}
              onChange={e => onChangeValue(e.target.value)}
              onClick={() => setActiveMenu(!activeMenu)}
              className={cls(s.selected_item, {
                [s.active]: activeMenu,
              })}
            />
          ) : (
            <>
              <label
                onClick={() => setActiveMenu(!activeMenu)}
                className={cls(s.selected_item, {
                  [s.active]: activeMenu,
                })}
              >
                {value ? value : ''}
              </label>
            </>
          )}

          <div
            className={cls(s.items, ['scrollStyle'], {
              [s.opened]: activeMenu,
              [s.closed]: !activeMenu,
            })}
          >
            {filtredItems
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onClickItem(item.id)}
                  className={s.listItem}
                >
                  <label className={s.name}>{item.name}</label>
                </div>
              ))}
          </div>
        </div>

        <div className={s.link}>
          <button className={s.button} onClick={handleGo}>
            {t('homepage.textFieldButton')} !
          </button>
        </div>
      </div>
    </div>
  )
}
