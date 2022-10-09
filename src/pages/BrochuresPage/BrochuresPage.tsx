import { Container } from 'components/Container';
import { Modal } from 'components/Modal'
import { FC, useState } from 'react'
import { brochuresMock } from 'shared/mocks/brochures';
import { BrochureCard } from './BrochureCard';
import s from './BrochuresPage.module.scss';
export const BrochuresPage: FC = () => {
    const brochures = brochuresMock;
    return <>
        <Container>
            <div className={s.wrapper}>
                <div className={s.title}>Brochures</div>
                <div className={s.nav}>
                    <div className={s.subtitle} >Faucibus enim sit leo, purus, odio erat. Neque scelerisque volutpat morbi proin. Massa quis montes, scelerisque commodo elit erat in urna id. Purus sit odio egestas venenatis viverra blandit amet vitae.</div>
                    <div className={s.selectBtn}>Send me selected</div>
                </div>
                <div className={s.sort}>Sort</div>
                <div className={s.brochuresList}>
                    {
                        brochures.map((brochure) => <BrochureCard {...brochure} onSelect={(id) => console.log(id)} />
                        )
                    }
                </div>

            </div>

        </Container>
    </>

}
