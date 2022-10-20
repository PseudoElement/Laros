import { Review } from 'shared/types/review';
import ava from '/public/assets/images/blogs/Ellipse 24.svg';
import ava2 from '/public/assets/images/blogs/Ellipse 24 (1).svg';

export const reviewsMock: Review[] = [
    {
        id: 0,
        avatar: ava,
        name: 'Darrell Steward',
        tripname: 'Trip name',
        comment: 'Ut nulla sem tellus ac fermentum vestibulum. Pulvinar vitae, non condimentum fermentum feugiat. Ut porttitor sit tristique dolor turpis feugiat.',
    },
    {
        id: 1,
        avatar: ava2,
        name: 'Kathryn Murphy',
        tripname: 'Trip name',
        comment: 'Ut nulla sem tellus ac fermentum vestibulum. Pulvinar vitae, non condimentum fermentum feugiat. Ut porttitor sit tristique dolor turpis feugiat.', 
    },
]