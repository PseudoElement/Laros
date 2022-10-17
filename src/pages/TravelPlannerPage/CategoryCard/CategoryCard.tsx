import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'
import s from './CategoryCard.module.scss';
import mockImg from '/public/assets/images/trip-planner/planner__category-bg.png';
import mockVerticalImg from '/public/assets/images/trip-planner/slide__trip-planner--one.jpg';
import cn from 'classnames';
interface CategoryCardProps {
    id: number;
    title: string;
    image: string; // next img TODO
    description: string;
    vertical?: boolean;
};
export const CategoryCard: FC<CategoryCardProps> = ({ id, title, description, image, vertical = false }) => {

    return (
        <Link href={`travel_planner/${id}`}>
            <div className={cn(s.card, { [s.vertical]: vertical })}>
                <div className={s.image}>
                    <Image src={vertical ? mockVerticalImg : mockImg} height={vertical ? 640 : 176} width={vertical ? 338 : 543} />

                </div>
                <div className={s.content}>
                    <div className={s.title}>{title}</div>
                    <div className={s.description}>{description}</div>
                </div>

            </div>
        </Link>

    )
}