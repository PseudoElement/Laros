import { FC } from 'react'
import { Destination } from 'shared/types/destinations';
import s from './DestinationsList.module.scss';
import cn from 'classnames';
import { useAppDispatch } from 'shared/hooks/redux';
interface DestionationsListProps {
    destinations: Destination[]
    destination: number | null;
    onClick: (id: number) => void
};
export const DestionationsList: FC<DestionationsListProps> = ({ destination, destinations, onClick }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={s.list}>{destinations.map((place) => {
            return <div onClick={() => onClick(place.id)} className={cn(s.item, { [s.active]: place.id === destination })}>
                <span className={s.title}>{place.name}</span>
            </div>
        })
        }</div >
    )
}