import { FC } from 'react';
import Image from 'next/image';
import cl from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css'; 

import { SectionTitle } from '../section-title/section-title';

import styles from './gallerySlider.module.scss';

interface GallerySliderProps {
    title: string;
    text: string;
    items: any;
    padding_bottom: boolean;
}
 
export const GallerySlider: FC<GallerySliderProps> = ({title, text, items, padding_bottom}) => {
    SwiperCore.use([Autoplay,])
    
    return ( 
        
        <div className={padding_bottom ? cl(styles.inner, styles.inner_with_padding) : styles.inner}>
            <SectionTitle title={title} color='black'/>
            <p className={styles.text}>
                {text}
            </p>
            <div className={styles.items}>
                <Swiper className={styles.items}
                spaceBetween={20}
                slidesPerView={6}
                autoplay={{
                    delay: 3000,
                }}>

                    {items.map((item:any, i:any) => 
                        <SwiperSlide>
                            <div key={i} className={styles.item}>
                            <Image src={item} width={316} height={210} alt="photo" className={styles.photo}/>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
     );
}
 
