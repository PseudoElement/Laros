import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Brochure } from 'shared/types/brochures';
import { Card } from './Card';
import s from './SendBrochuresModal.module.scss';
interface SendBrochuresModalProps {
    brochures: Brochure[];
    isOpen: boolean;
    onClose: () => void;
};
export const SendBrochuresModal: FC<SendBrochuresModalProps> = ({ brochures, isOpen, onClose }) => {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <Modal title="Sending you our brochure" isOpen={isOpen} onClose={onClose}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.title}>You selected:</div>
                    <div className={s.list}>
                        {brochures.map((brochure) => <Card brochure={brochure} />)}
                    </div>
                    <form className={s.form}>
                        <div className={s.formTitle}>Contact info</div>
                        <Controller
                            name='number'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input id='number' onChange={onChange} value={value} type='number' label='Number' classname={s.formName} />

                            )}
                        />
                        <Controller
                            name='name'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input onChange={onChange} id='name' value={value} label='Fullname and surname' />
                            )}
                        />
                        <div className={s.actions}>
                            <Button onClick={onClose} variant="outline">Cancel</Button>
                            <Button type="submit" classname={s.downloadBtn}>send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}