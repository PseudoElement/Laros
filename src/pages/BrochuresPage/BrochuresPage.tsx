import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Modal } from 'components/Modal'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { toggleBrochure } from 'store/slices/brochures/brochures';
import { getSelectedBrochuresIds } from 'store/slices/brochures/selector';
import { getBrochuresThunk } from 'store/slices/brochures/thunk';
import { BrochureCard } from './BrochureCard';
import s from './BrochuresPage.module.scss';

export const BrochuresPage: FC = () => {
    const brochures = useAppSelector((state) => state.brochures.brochures)
    const totalSelected = useAppSelector(getSelectedBrochuresIds);
    const totalCounter = totalSelected.length;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getBrochuresThunk())
    }, [dispatch])

    return <>
        <Container>
            <div className={s.wrapper}>
                <div className={s.title}>Brochures</div>
                <div className={s.nav}>
                    <div className={s.subtitle} >Faucibus enim sit leo, purus, odio erat. Neque scelerisque volutpat morbi proin. Massa quis montes, scelerisque commodo elit erat in urna id. Purus sit odio egestas venenatis viverra blandit amet vitae.</div>
                    {totalCounter ? <Button variant='secondary'>Send me selected ({totalCounter})</Button> : <div className={s.selectBtn}>Send me selected</div>}
                </div>
                <div className={s.sort}>Sort</div>
                <div className={s.brochuresList}>
                    {
                        brochures.map((brochure) => <BrochureCard {...brochure} onSelect={(id) => dispatch(toggleBrochure(id))} />
                        )
                    }
                </div>

            </div>

        </Container>
    </>

}
