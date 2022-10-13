import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import s from './Review.module.scss';
import quotes from '/public/assets/images/blogs/“.svg';

interface ReviewProps {
    id: number
    name: string
    tripname: string
    avatar: StaticImageData | string
    comment: string
}

export const Review: FC<ReviewProps> = ({
    avatar,
    id,
    name,
    tripname,
    comment,
}) => {
    return (
        <div className={s.review}>
            <div className={s.profile}>
            <Image src={avatar} alt='avatar'/>
                <ul className={s.info}>
                    <li className={s.name}>{name}</li>
                    <li className={s.tripname}>{tripname}</li>
                </ul>
            </div>
            <div className={s.comments}>
                <p className={s.comment}>
                {comment}
                </p>
            </div>
            <span className={s.icon}><Image src={quotes}/></span>
        </div>
    );
};
