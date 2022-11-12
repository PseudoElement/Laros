import { Container } from 'components'
import { FC } from 'react'
import s from './SpecialOffersPage.module.scss';

export const SpecialOffersPage: FC = () => {
    return (
        <Container>
            <div className={s.wrapper} key={s.title}>
                <div className={s.title}>Special offers</div>
                <div className={s.nav} key={s.title}>
                    <div className={s.subtitle}>
                        Faucibus enim sit leo, purus, odio erat. Neque scelerisque volutpat morbi proin. Massa quis montes, scelerisque commodo elit erat in urna id. Purus sit odio egestas venenatis viverra blandit amet vitae.
                    </div>
                </div>
            </div>
        </Container>
    )
}