import Image from 'next/image';
import { FC } from 'react'
import s from './Counter.module.scss';
import minus from '/public/assets/images/counter/minus.svg'
import plus from '/public/assets/images/counter/plus.svg'

interface CounterProps {
    onChange: (val: number) => void;
    value: number;
};
export const Counter: FC<CounterProps> = ({ onChange, value }) => {
    return (
        <div className={s.counter}>
            <span onChange={() => onChange(value + 1)}><Image src={plus} width={24} height={24} /></span>
            <span onChange={() => onChange(value - 1)}><Image src={minus} width={24} height={24} /></span>
        </div>
    )
}