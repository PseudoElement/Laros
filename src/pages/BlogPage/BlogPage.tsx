import { Container, Button } from 'components';
import { Review } from 'features';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import s from './BlogPage.module.scss';

import ava2 from '/public/assets/images/blogs/Ellipse 24 (1).svg'
import ava from '/public/assets/images/blogs/Ellipse 24.svg';
import mountain from '/public/assets/images/blogs/firstblog.jpg';
import airplane from '/public/assets/images/blogs/airplane.jpg';


export const BlogPage: FC = () => {
    return <>
    {/* <Container> */}
        <div className={s.page}>
            <div className={s.pictures}></div>
            <div className={s.blogs}>
                <div className={s.firstBlog}>
                    <div className={s.content}>
                        <h2>Diam ac odio id lectus mi..</h2>
                        <h3>
                            Quis mi id scelerisque
                            viverra neque
                        </h3>
                        <p>
                            Quam sed pellentesque odio sit gravida. Nulla eget sed non hendrerit velit quis cum
                            diam. Ante non et hac elit. Mollis sit a sit cursus donec turpis orci. Pharetra, donec neque
                            eget adipiscing. Auctor nulla orci est vestibulum in non vitae, viverra turpis. Dignissim
                            egestas vel, morbi senectus amet fermentum tincidunt. Amet imperdiet pharetra, est et
                            quis eu mollis ultricies. Quis mi id scelerisque viverra neque.
                        </p>
                        <Button className={s.button}>Learn more</Button>
                    </div>
                    <div className={s.image}>
                        <div className={s.block}></div>
                        <Image src={mountain} height={500} width={500} alt='mountain'/>
                    </div>
                </div>
                <div className={s.secondBlog}>
                    <div className={s.content}>
                        <h2>Morbi dignissim lacinia sit proin
                            gravida enim ac</h2>
                        <h3>
                        Urna, vestibulum egestas sit
                        diam, mattis pretium
                        </h3>
                        <p>
                        Vitae bibendum ornare nascetur massa. Cras tortor quis risus tristique nec amet morbi.
                        Urna, vestibulum egestas sit diam, mattis pretium. Morbi dignissim lacinia sit proin
                        gravida enim ac. Aliquam massa pretium maecenas nisi, imperdiet. Tellus aenean
                        tincidunt pharetra proin donec amet, id. Eu felis id egestas lobortis rhoncus. Neque id id
                        pellentesque quam ut facilisis. Fames elementum eget et nisi aliquam risus. Risus arcu a,
                        nisi est, consequat convallis massa maecenas sit. Sagittis lectus felis, purus, gravida nec.
                        Faucibus odio hendrerit pretium nunc pharetra varius pellentesque euismod posuere.
                        Elementum in facilisis elementum sed pellentesque donec nunc. Mollis enim auctor
                        volutpat aliquam faucibus enim quis sed nunc.
                        </p>
                        <Button className={s.button}>Learn more</Button>
                    </div>
                    <div className={s.image}>
                        <div className={s.block}></div>
                        <Image src={airplane} height={500} width={500} alt='mountain'/>
                    </div>
                </div>
            </div>
            <div className={s.reviews}>
            <div className={s.title}>
                <h3>What people say about us</h3>
                <p>At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.</p>
            </div> 
            <div className={s.review}>
                <Review 
                avatar={ava}
                id={0}
                name="Darrell Steward"
                tripname='Trip name'
                comment='Eu leo facilisi nunc sed nibh risus. Tortor venenatis felis amet duis lorem. Aliquam sapien, tortor non suscipit montes, venenatis.'
                />
                <Review 
                avatar={ava2}
                id={1}
                name="Kathryn Murphy"
                tripname='Trip name'
                comment='Ut nulla sem tellus ac fermentum vestibulum. Pulvinar vitae, non imperdiet condimentum fermentum feugiat. Ut porttitor sit tristique dolor turpis feugiat.'
                />
            </div>
            </div>
            <div className={s.contact}>
                <Button className={s.button}>Contact</Button>
            </div>
        </div>
    {/* </Container> */}
    </>;
};
