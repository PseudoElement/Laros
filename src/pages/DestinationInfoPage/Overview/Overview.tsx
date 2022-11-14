import React, { FC } from 'react'
import Image from 'next/image'

import { AboutSlider } from '../../AboutPage/AboutSlider/AboutSlider'

import s from './Overview.module.scss'

interface Overview {
  images: string[]
}

export const Overview: FC<Overview> = ({ images }) => {
  return (
    <div className={s.overview}>
      <div className={s.title}>Overview</div>

      {/*поменять на данные которые будут приходить с бэка ==============================================*/}
      <div className={s.subTitle}>
        Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius
        eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna
        a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est
        eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus
        quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id
        odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit
        quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut
        eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque
        lacus, magna nisl blandit pellentesque.
      </div>

      <div className={s.overviewSlider}>
        {images?.length ? (
          <AboutSlider>
            {images.map((image, index) => (
              <div key={index} className={s.image}>
                <Image width={'1000'} height={'500'} src={image} alt='' />
              </div>
            ))}
          </AboutSlider>
        ) : null}
      </div>

        {/*поменять на данные которые будут приходить с бэка ============================================*/}
      <div className={s.subTitle}>
        Sed pharetra sed egestas morbi sagittis senectus. Arcu imperdiet dolor
        velit diam, aliquam eu vitae nec sed. Pellentesque placerat convallis
        egestas in arcu a, est velit cras. Sit sed amet, amet enim. Condimentum
        amet, id vitae, neque gravida. Sed rhoncus vel dolor gravida vitae sed
        pharetra enim. Facilisis tincidunt aenean nulla ipsum faucibus placerat.
        Nunc ipsum orci venenatis, suscipit mauris pharetra. Sagittis pharetra
        gravida metus, ipsum morbi nec elit tristique. Egestas senectus neque
        gravida est. Venenatis, egestas et mus lectus fringilla tortor odio
        faucibus. Enim proin at luctus sed arcu neque. Felis viverra convallis
        fames pulvinar massa mi, nulla tincidunt nisl. Non eu diam blandit nec
        enim. Aliquet quis at vel proin at tempor volutpat gravida. Quis auctor
        dignissim a ultrices nec duis aliquam. Sagittis ut eleifend vitae
        tellus. Ultricies nec suspendisse suspendisse dictum aliquam.
      </div>
    </div>
  )
}
