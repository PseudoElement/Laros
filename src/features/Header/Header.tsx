import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import s from './Header.module.scss'
import { SubNav } from "./SubNav";
import callImg from '/public/assets/images/call.svg'
import giftImg from '/public/assets/images/gift.svg'
import logoFull from '/public/assets/images/laros_logo_rgb_web.svg'
import logo from '/public/assets/images/logo.svg'

const COLLAPSE_IN_PX = 100;
const mainNavItems = [
    { name: 'Home', to: '/home' },
    { name: 'About us', to: '/about' },
    { name: 'Brochure', to: '/brochures' }
]

export const Header: FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    useEffect(() => {
        const onScroll = () => setIsCollapsed(window.pageYOffset > COLLAPSE_IN_PX);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(isCollapsed);

    return <>
        <div className={s.fixed}>
            <div className={s.container}>
                <header>
                    <div className={cn(s.header, { [s.collapsed]: isCollapsed })}>
                        <div className={s.mainNav}>
                            {mainNavItems.map((item) => {
                                return <div className={s.navItem}>
                                    <Link href={item.to}>{item.name}</Link>
                                </div>
                            })}
                        </div>
                        <div className={s.logo}>
                            <Image src={isCollapsed ? logo : logoFull} alt="" />
                        </div>
                        <div className={s.rightNav}>
                            <Link href="/">
                                <div className={s.headContactUse}>
                                    <Image className={s.headSmIcon} src={callImg} alt="call" />
                                    <span> Contact us</span>
                                </div>
                            </Link>
                            <Link href="/vouchers">
                                <div className={s.headGift}>
                                    <Image className={s.headSmIcon} src={giftImg} alt="call" />
                                    <div>&nbsp;Gift voucher</div>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <SubNav />
                </header>
            </div>
        </div>
    </>;

}