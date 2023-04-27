import { FC } from 'react';
import Image from 'next/image';

import styles from './peopleCard.module.scss';


interface PeopleCardProps {
    img: any,
    name: string,
    text: string
}
 
export const PeopleCard: FC<PeopleCardProps> = ({img, name, text}) => {
    return ( 
        <div className={styles.item}>
            <div className={styles.photo}>
                <Image src={img} width={120} height={120} alt="photo" className={styles.img}/>
            </div>

            <p className={styles.name}>
                {name}
            </p>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    );
}
 
