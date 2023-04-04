import Image from 'next/image';

import one_img from './one_img.svg';
import two_img from './two_img.svg';
import tree_img from './tree_img.svg';

import styles from './statsItems.module.scss';

const statItems = [
    {
        img: one_img,
        width: 188,
        height: 105,
        name: 'Курсов',
    },
    {
        img: two_img,
        width: 116,
        height: 105,
        name: 'Ведущих преподавателей',
    },
    {
        img: tree_img,
        width: 318,
        height: 105,
        name: 'Выпускников',
    }
]

export const StatItems = (props:any) => {
    return (
        <div className={styles.content}>
            {statItems.map((item, i)=>(
                <div key={i} className={styles.item}>
                    <Image src={item.img} width={item.width} height={item.height} alt="stats"/>
                    <p className={styles.desc}>
                    {item.name}
                </p>
                </div>
            ))}
    </div>
    );
};
