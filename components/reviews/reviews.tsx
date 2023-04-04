import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css'; 

import photo_1 from '../reviews/photo_1.png';
import photo_2 from '../reviews/photo_2.png';
import photo_3 from '../reviews/photo_3.png';
import photo_4 from '../reviews/photo_4.png';
import photo_5 from '../reviews/photo_5.png';
import photo_6 from '../reviews/photo_6.png';
import star from '../reviews/star.svg';

import styles from './reviews.module.scss';

const reviewsItems = [
    {
        "photo": photo_1,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        "rating" : "4,87"
    },
    {
        "photo": photo_2,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        "rating" : "4,47"
    },
    {
        "photo": photo_3,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        "rating" : "4,87"
    },
    {
        "photo": photo_4,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet,  urna facilisis varius.",
        "rating" : "3,87"
    },
    {
        "photo": photo_5,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        "rating" : "4,17"
    },
    {
        "photo": photo_2,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        "rating" : "4,47"
    },
    {
        "photo": photo_6,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet, consectetur tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        "rating" : "4,47"
    },
    {
        "photo": photo_4,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet,  urna facilisis varius.",
        "rating" : "3,87"
    },
    {
        "photo": photo_6,
        "name" : "John Smith",
        "prof" : "Студент курса «WEB-разработчик»",
        "review" : "Lorem ipsum dolor sit amet, consectetur tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        "rating" : "4,47"
    }
]

export const Reviews = () => {
    SwiperCore.use([Autoplay,])
    
    return (
        <Swiper className={styles.items}
        spaceBetween={50}
        slidesPerView={6}
        autoplay={{
            delay: 3000,
        }}>

            {reviewsItems.map((item, i) => (
                <SwiperSlide>
                    <div key={i} className={styles.item}>

                    <div className={styles.info}>
                        <Image src={item.photo} width={40} height={40} alt="photo" className={styles.photo}/>
                        <p className={styles.name}>
                            {item.name}
                            <span className={styles.prof}>
                                {item.prof}
                            </span>
                        </p>
                    </div>

                    <p className={styles.text}>
                        {item.review}
                    </p>

                    <div className={styles.rating}>
                        <Image src={star} width={22} height={22} alt="star" className={styles.star}/>
                        <p className={styles.num}>
                            {item.rating} / 5
                        </p>
                    </div>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
    );
};
