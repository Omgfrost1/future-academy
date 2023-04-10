import { FC } from 'react'

import cl from 'classnames';
import Image from "next/image";
import Link from 'next/link';

import mobile from '../programs/mobile.svg';
import content_img from './content_img.jpg';

import styles from './eventsList.module.scss';



interface EventsListProps {
    
}
 
const events:any[] = [
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#C7EEFF',
    },
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#FFCE94',
    },
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#DDDDFF',
    },
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#B8EFCF',
        important: true,
    },
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#FFCE94',
    },
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#C5DDFF',
    },
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#FFEEF6',
    },
    {
        pretitle: 'Встреча',
        img: mobile,
        title: 'Заголовок мероприятия',
        text: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя',
        date: '16 ноября 2021',
        link: "/event",
        background: '#FFCE94',
    },
]

export const EventsList: FC<EventsListProps> = () => {
    return (  
        <div className={styles.inner}>
            {events.map((item, i) =>

                item.important ?  

                <div key={i} className={cl(styles.item, styles.big_item)} style={{background:item.background}}>
                    <Image src={content_img} width={280} height={250} alt="content_img" className={styles.img_content}/>
                    <div className={styles.item_right}>
                        <p className={styles.pretitle}>
                            {item.pretitle}
                        </p>
                        <div className={styles.title_inner}>
                            <Image src={item.img} width={26} height={42} alt="item-img" className={styles.img}/>
                            <p className={styles.title}>
                                {item.title}
                            </p>
                        </div>
                        <p className={styles.text}>
                            {item.text}
                        </p>
                        <p className={styles.date}>
                            {item.date}
                        </p>
                        <Link href={item.link} className={styles.link}>
                        </Link>
                    </div>
                </div>

                :

                <div key={i} className={cl(styles.item)} style={{background:item.background}}>
                    <p className={styles.pretitle}>
                        {item.pretitle}
                    </p>
                    <div className={styles.title_inner}>
                        <Image src={item.img} width={26} height={42} alt="item-img" className={styles.img}/>
                        <p className={styles.title}>
                            {item.title}
                        </p>
                    </div>
                    <p className={styles.text}>
                        {item.text}
                    </p>
                    <p className={styles.date}>
                        {item.date}
                    </p>
                    <Link href={item.link} className={styles.link}>
                    </Link>
                </div>
            )}
        </div>
    );
}
 