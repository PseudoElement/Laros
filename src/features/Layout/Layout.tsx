import { Footer } from 'features/Footer';
import { Header } from 'features/Header';
import { FC, ReactNode } from 'react'
import s from './Layout.module.scss'

interface LayoutProps {
    children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <div className={s.wrapper}>
            <Header />
            <main className={s.container}>
                <div className={s.content}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>

    )
}

