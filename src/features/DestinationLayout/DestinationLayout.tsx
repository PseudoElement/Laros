import { FC, ReactNode } from 'react'
import s from './DestinationLayout.module.scss';
import { DestionationsList } from './DestionationsList';
interface DestinationLayoutProps {
    children: ReactNode;
    destinationId?: number;
    title?: string;
    description?: string;
}
export const defaultDescription = 'Ullamcorper risus interdum lorem vulputate amet id quis massa elementum. Massa nisl urna accumsan proin imperdiet eget. In sagittis, facilisi tristique non.Curabitur id amet cras iaculis netus cras at et massa. Laoreet nulla quis vitae sollicitudin commodo at cursus dui. Felis, sed sit maecenas vitae eget nulla vel. Egestas turpis vivamus lorem pulvinar nunc. Mauris at nulla lorem mauris consequat pretium maecenas gravida viverra. Interdum enim mauris quis porttitor tristique vestibulum. Vitae mi eget vel bibendum a tortor a, turpis fusce. Pulvinar purus, mauris aenean aenean.'
export const DestinationLayout: FC<DestinationLayoutProps> = ({ children, destinationId, title = 'Destinations', description = defaultDescription }) => {
    return (
        <div className={s.container}>
            <div className={s.sidebar}>
                <div className={s.list}>
                    <DestionationsList destinations={[]} destination={1} />
                </div>
                <div className={s.description}>
                    <div className={s.select}>Please select the region on the map</div>
                    <div className={s.title}>{title}</div>
                    <div className={s.text}>{description}</div>
                    <div className={s.more}>More</div>
                </div>
            </div>
            <div className={s.content}>
                {children}
            </div>

        </div>
    )
}