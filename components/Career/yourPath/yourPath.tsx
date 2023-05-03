import { FC } from 'react';
import Image from 'next/image';

import { SectionTitle } from '@/components/section-title/section-title';
import { QuestionButton } from '../questionButton/questionButton';
import cross from '@/components/sections/academy/cross.svg';
import circle from '@/components/sections/academy/circle.svg';
import triangle from '@/components/sections/academy/triangle.svg';

import styles from './yourPath.module.scss';


interface YourPathProps {
    
}

const items = [
    {
        img: cross,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. '
    },
    {
        img: circle,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem.'
    },
    {
        img: triangle,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem.'
    },
]
export const YourPath: FC<YourPathProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle title='Ваш путь к трудоустройству' color='white'/>
                <div className={styles.items}>
                    {items.map((item, i) =>
                        <div key={i} className={styles.item}>
                            <Image src={item.img} width={74} height={74} alt='item-img'/>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                        </div>
                    )}
                </div>
                <QuestionButton position='center'/>
            </div>
        </div>
     );
}
 