import { FC, ReactNode } from 'react'
import s from './Checkbox.module.scss'



interface СheckboxProps {
    onChange: () => void
    value: boolean
    label: ReactNode
}

export const Checkbox: FC<СheckboxProps> = ({onChange, value}) => {
    return (
    <div className={s.checkboxWrapper}>
        <label className={s.label}>
            <input className={s.checkInput} type="checkbox"/>
            <span onClick={onChange} className={value ? s.checkBoxActive : s.checkBox}></span>
        </label>
    </div>
    );
}



