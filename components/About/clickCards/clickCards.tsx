import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionTitle } from '@/components/section-title/section-title';

import child from './child.svg';
import money from './money.svg';
import play from './play.svg';
import code from './code.svg';

import styles from './clickCards.module.scss';

interface ClickCardsProps {

}

const items = [
    {
        img: child,
        text: 'Я хочу чтобы мой ребенок был успешным',
        link: "#",
        background: '#C7EEFF',
    },
    {
        img: money,
        text: 'Я хочу больше зарабатывать',
        link: "#",
        background: '#FFE38E',
    },
    {
        img: play,
        text: 'Мой ребенок не выпускает гаджет из рук',
        link: "#",
        background: '#DDDDFF',
    },
    {
        img: code,
        text: 'Я хочу стать айтишником',
        link: "#",
        background: '#B8EFCF',
    },
]
 
export const ClickCards: FC<ClickCardsProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle color='black' title='Нажми, если это о тебе'/>
                <div className={styles.items}>
                    {items.map((item, i) =>
                        <div key={i} className={styles.item} style={{background:item.background}}>
                            <Image src={item.img} width={53} height={53} alt='item-logo'/>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                            <Link href={item.link} className={styles.link}/>
                    </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
