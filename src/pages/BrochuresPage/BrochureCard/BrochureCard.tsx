import Image, { ImageProps } from "next/image"
import { FC } from "react"
import s from './BrochureCard.module.scss';
import cn from 'classnames';
import { DownloadIcon } from "components/icons";
interface BrochureCardProps {
    readonly id: number,
    image: ImageProps['src'],
    name: string,
    topic: string,
    file: string, // TODO check
    isSelected?: boolean,
    onSelect: (id: BrochureCardProps['id']) => void
};

export const BrochureCard: FC<BrochureCardProps> = ({ id, name, image, topic, file, isSelected = false, onSelect }) => {
    const selectClass = cn(s.select, {
        [s.selected]: isSelected
    })
    return (
        <div className={s.card}>
            {!image ? <Image src={image} height={338} width={368} /> : <div className={s.placeholder} ></div>}
            <div className={s.content}>
                <div className={s.topic} >{topic}</div>
                <div className={s.name}>{name}</div>
                <a href={file} download className={s.icon}><DownloadIcon /></a>
            </div>
            <div onClick={() => onSelect(id)} className={selectClass}>{isSelected ? 'Selected' : 'Select'}</div>
        </div>
    )
}
