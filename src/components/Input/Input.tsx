import { PencilIcon } from "components/icons";
import { FC } from "react"
import s from './Input.module.scss';
import MaskedInput from 'react-text-mask'; // TODO add types
import { NUMBER_REG_EXP } from "shared/constants/regExp";
import cn from 'classnames';

interface InputProps {
    label: string;
    value: string | number;
    type?: 'text' | 'number' | 'mail' | 'passoword';
    required?: boolean;
    placeholder?: string;
    id: string;
    onChange: (value: string | number) => void;
    classname?: string;
    shorten?: boolean
};
export const Input: FC<InputProps> = ({ label, value, type = 'text', required = false, id, onChange, placeholder, classname, shorten }) => {
    return (
        <div className={cn(s.input, { [s.shorten]: shorten }, classname)}>
            <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>
            {type === 'number' ?
                <MaskedInput
                    mask={NUMBER_REG_EXP}
                    guide={true}
                    showMask={false}
                    className={s.field}
                    placeholder={placeholder}
                    id={id}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                /> : <input placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={s.field} type={type} />}

            <span className={s.icon}> <PencilIcon /></span>
        </div>
    )
}
