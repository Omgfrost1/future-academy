import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import border from './border.svg';

import styles from './eventContent.module.scss';



interface EventContentProps {
    
}

export const EventContent: FC<EventContentProps> = () => {

    const items = [
        {
            img: border,
            text: 'Узнайте самые востребованные профессии, на которые более 113 тысяч вакансий',
        },
        {
            img: border,
            text: 'Выберите подходящую именно для вас',
        },
        {
            img: border,
            text: 'Сделайте первые шаги к возможности выйти на доход более 100 тысяч рублей',
        },
    
    ]

    return ( 
            <div className={styles.inner}>
                <h3 className={styles.title}>
                    Название мероприятия
                </h3>
                <p className={styles.subtitle}>
                    Подпись к названию
                </p>
                <div className={styles.info_list}>

                    {items.map((item, i) =>
                        <div key={i} className={styles.info_item}>
                            <Image src={item.img} width={181} height={2} alt="border" className={styles.border}/>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                        </div>
                    )}
                    
                </div>

                <p className={styles.sing}>
                    Запишитесь сейчас
                </p>
                <Link className={styles.button} href='#'>
                    Записаться на интенсив
                </Link>

            </div>
     );
}
 
