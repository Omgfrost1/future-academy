import Image from 'next/image';
import { useState } from 'react';
import cl from 'classnames';

import children from './children.svg';
import oldman from './oldman.svg';
import teenager from './teenager.svg';

import styles from './ages.module.scss';


const items = [
    {   
        img: children,
        title: 'Дети',
        age: '8 - 14 лет'
    },
    {
        img: teenager,
        title: 'Подростки',
        age: '14 — 18 лет'
    },
    {
        img: oldman,
        title: 'Взрослые',
        age: '18 — ∞'
    }
];

export const Ages = (props:any) => {
   
    
    return (
        <div className={styles.inner}>
            {items.map((item, i) => (
                <div key={i} className={ props.state === i ? cl(styles.active, styles.item): styles.item} onClick={() => props.setState(i)}>
                    <Image src={item.img} width={49} height={49} alt="item-img" className={styles.img}/>
                    <p className={styles.title}>
                        {item.title}
                        <span className={styles.age}>
                        {item.age}
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
};
