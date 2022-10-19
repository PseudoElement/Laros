import { FC, ReactNode } from 'react'

import s from './CheckBox.module.scss'



interface checkBox {
    onChange: () => void
    value: boolean
    name: ReactNode
}

export const CheckBox: FC<checkBox> = ({onChange, value}) => {

    return (
        <label className={s.label}>
            <input
            className={s.check__input} type="checkbox"/>
            <span onClick={onChange} className={value ? s.check__box__active : s.check__box}></span>
        </label>
    );
}



