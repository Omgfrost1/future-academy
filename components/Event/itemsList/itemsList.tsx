import { FC } from 'react';
import Image from 'next/image';
import { Sova } from '../../sova/sova';

import img_1 from './img_1.svg';
import img_2 from './img_2.svg';
import img_3 from './img_3.svg';

import styles from './itemsList.module.scss';

interface ItemsListProps {
    
}
 
const items:any[] = [
    {
        img: img_1,
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget',
    },
    {
        img: img_2,
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget',
    },
    {
        img: img_3,
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget',
    },
]

export const ItemsList: FC<ItemsListProps> = () => {
    return ( 
        <div className="container">
            <div className={styles.inner}>
                <Sova bigSize mid_text='Текст, призывающий записаться на мероприятие'/>
                <div className={styles.items}>
                    {items.map((item, i) => 
                        <div key={i} className={styles.item}>
                             <Image src={item.img} width={32} height={32} alt="item-img" className={styles.img}/>
                             <p className={styles.title}>
                                {item.title}
                             </p>
                             <p className={styles.text}>
                                {item.text}
                             </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
