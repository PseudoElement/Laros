import Link from 'next/link';
import { FC } from 'react'
import { moreCategoriesMock } from 'shared/mocks/tripPlanner';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryCard } from './CategoryCard/CategoryCard';
import s from './TravelPlannerPage.module.scss';
export const TravelPlannerPage: FC = () => {
    const mainCategories = moreCategoriesMock;
    const moreCategories = moreCategoriesMock;
    return (
        <>
            <div className={s.background}>
                <h1 className={s.title}>Travel planner</h1>
            </div>

            <div className={s.content}>
                <div className={s.container}>
                    <div><span className={s.subtitle}>Our top trip categories</span></div>
                </div>

                <Swiper
                    className={s.slider}
                    slidesPerView={3}
                    spaceBetween={0}
                    slidesPerGroup={3}
                    // loop={true}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                        {mainCategories.map((cat) => {
                            return <div className={s.slideItem}>
                                <CategoryCard {...cat} vertical />
                            </div>
                        })}
                    </SwiperSlide>
                </Swiper>
                <div className={s.categories}>
                    <div className={s.categoriesMore}><span>More categories</span></div>
                </div>
                <ul className={s.categoriesList}>
                    {moreCategories.map((cat) => {
                        return <CategoryCard {...cat} />
                    })}
                </ul>
            </div>
        </>
    )
}