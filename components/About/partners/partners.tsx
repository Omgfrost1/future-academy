import { FC } from 'react';
import Image from 'next/image';

import { SectionTitle } from '@/components/section-title/section-title';

import tinkoff from './tinkoff.png';
import alphabank from './alphabank.png';
import vk from './vk.png';
import avito from './avito.png';


import styles from './partners.module.scss';

interface PartnersProps {
    
}

const items = [
    {
        img: tinkoff,
    },
    {
        img: alphabank,
    },
    {
        img: vk,
    },
    {
        img: avito,
    },
    {
        img: alphabank,
    },
    {
        img: vk,
    },
    {
        img: avito,
    },
    {
        img: vk,
    },
    {
        img: tinkoff,
    },
    {
        img: alphabank,
    },
    {
        img: avito,
    },
    {
        img: tinkoff,
    },
 
]

export const Partners: FC<PartnersProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle color='black' title='Наши партнеры'/>
                <div className={styles.items}>
                    {items.map((item, i) => 
                        <div key={i} className={styles.item}>
                            <Image src={item.img} width={120} alt='parnter-logo'/>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 