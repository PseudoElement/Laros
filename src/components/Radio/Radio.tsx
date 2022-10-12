import { ChangeEvent, FC } from "react"
import s from './Radio.module.scss';
import cn from 'classnames';
type Radio = { value: string, label: string };
interface RadioProps {
    name: string
    options: Radio[]
    value: string;
    onChange?: (value: string) => void
    onClick?: (value: string) => void
    orientation?: 'column' | 'row'
    className?: string
};
export const Radio: FC<RadioProps> = ({ name, options, value, onChange, onClick, className }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={s.radioGroup}>
            {options.map((option) => {
                return <label key={option.value} className={s.radio}>
                    <input
                        type='radio'
                        className={cn(s.radioButton)}
                        name={option.label}
                        value={option.value}
                        defaultChecked={value === option.value}
                        onChange={handleChange}
                        onClick={() => onClick}
                    />
                    <span className={s.label}>{option.label}</span>
                </label>
            })}
        </div>
    )
}
