import { FC } from 'react'
import { Destination } from 'shared/types/destinations';
import s from './DestinationsList.module.scss';
import cn from 'classnames';
interface DestionationsListProps {
    destinations: Destination[]
    destination: number;
};
export const DestionationsList: FC<DestionationsListProps> = ({ destination, destinations }) => {
    return (
        <div className={s.container}>{destinations.map((place) => {
            return <div className={cn(s.item, { [s.active]: place.id === destination })}>
                {place.name}
            </div>
        })
        }</div>
    )
}