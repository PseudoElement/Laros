import {FC} from 'react';

import {HotelCard} from 'features';
import {Slider} from 'components';

import {Hotel} from 'shared/types/hotel';

import s from './HotelSection.module.scss';
import {useWindowDimensions} from '../../shared/hooks/useWindowDimensions';

interface HotelSection {
  hotels: Hotel[];
  title?: string;
  subTitle?: string;
}

export const HotelSection: FC<HotelSection> = ({hotels, title, subTitle}) => {
  const {width} = useWindowDimensions();
  return (
    <div className={s.hotelSection}>
      <div className={s.title}>{title}</div>

      <div className={s.subTitle}>{subTitle}</div>

      <div className={s.wrap}>
        {hotels.length ? (
          <Slider
            classname={s.hotelSlider}
            withNavigation={width > 570}
            withPagination
            spaceBetween={30}
            slidesPerView={width > 1200 ? undefined : width > 800 ? 2 : 1}
          >
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel}/>
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  );
};
