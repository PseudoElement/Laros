import { Button } from "components/Button";
import { DownloadIcon } from "components/icons";
import { Input } from "components/Input";
import { Modal } from "components/Modal";
import { FC } from "react"
import { Controller, useForm } from "react-hook-form";
import { Brochure } from "shared/types/brochures";
import s from './DownloadBrochuresModal.module.scss';
import { Card } from "./Сard";

interface DownloadBrochuresModalProps {
    isOpen: boolean;
    links: Brochure[];
    onClose: () => void;
}

export const DownloadBrochuresModal: FC<DownloadBrochuresModalProps> = ({ isOpen, links, onClose }) => {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <Modal title="Downloading brochure" isOpen={isOpen} onClose={onClose}>
            <div className={s.container}>
                <div className={s.content}>
                    <Card brochure={links[0]} />
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.title}>Contact info</div>
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
                            <Button type="submit" classname={s.downloadBtn}>
                                <span className={s.icon}><DownloadIcon /></span>
                                <span className={s.downloadText}>{`Download (${links?.length})`}</span>
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </Modal >
    )
}
