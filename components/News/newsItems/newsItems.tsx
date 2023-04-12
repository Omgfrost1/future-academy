import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import arrow from '../../../public/arrow.svg';
import img_1 from './img_1.jpg';
import img_2 from './img_2.jpg';
import img_3 from './img_3.jpg';
import img_4 from './img_4.jpg';
import img_5 from './img_5.jpg';
import img_6 from './img_6.jpg';

import styles from './newsItems.module.scss';

interface NewsItemsProps {
    
}
 
const items = [
    {
        img: img_1,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.',
        link: '/news/1',
    },
    {
        img: img_2,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.',
        link: '/news/1',
    },
    {
        img: img_3,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.',
        link: '/news/1',
    },
    {
        img: img_4,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.',
        link: '/news/1',
    },
    {
        img: img_5,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.',
        link: '/news/1',
    },
    {
        img: img_6,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.',
        link: '/news/1',
    },
]

export const NewsItems: FC<NewsItemsProps> = () => {
    return ( 
        <div className={styles.inner}>
            {items.map((item, i) =>
                <div key={i} className={styles.item}>
                    <Image src={item.img} width={380} height={250} alt="item-img" className={styles.img}/>
                    <div className={styles.content}>

                        <p className={styles.date}>
                            {item.date}
                        </p>

                        <p className={styles.title}>
                            {item.title}
                        </p>

                        <p className={styles.text}>
                            {item.text}
                        </p>

                        <Link href={item.link} className={styles.link}>
                            <span>
                                Подробнее
                            </span>
                            <Image src={arrow} width={20} height={20} alt="arrow" className={styles.arrow}/>
                        </Link>

                        <Link href={item.link} className={styles.absolute_link}>

                        </Link>
                    </div>
                </div>
            )}
        
        </div>
     );
}
 
