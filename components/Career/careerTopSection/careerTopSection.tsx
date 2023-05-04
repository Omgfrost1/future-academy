import { FC } from 'react';
import Image from 'next/image';

import { QuestionButton } from '../questionButton/questionButton';

import cross from '@/components/sections/academy/cross.svg';
import left_line from '@/components/sections/academy/left_line.svg';
import circle from '@/components/sections/academy/circle.svg';
import triangle from '@/components/sections/academy/triangle.svg';
import cross_small from '@/components/sections/academy/cross.svg';

import man_cross from './man_cross.png';
import girl_circle from './girl_circle.png';
import man_triangle from './man_triangle.png';


import styles from './careertopSection.module.scss';


interface CareerTopSectionProps {
    
}
 
export const CareerTopSection: FC<CareerTopSectionProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Поможем построить карьеру
                    </h2>
                    <p className={styles.subtitle}>
                        Карьерный центр ХОД Future Academy
                    </p>
                    
                    <QuestionButton/>

                    <Image src={cross} className={styles.cross} width={130} height={130} alt='image'/>
                    <Image src={left_line} className={styles.left_line} width={338} height={131} alt='image'/>
                    <Image src={triangle} className={styles.triangle} width={98} height={82} alt='image'/>
                    <Image src={circle} className={styles.circle} width={80} height={80} alt='image'/>
                    <Image src={cross_small} className={styles.cross_small} width={68} height={68} alt='image'/>

                    <Image src={man_cross} className={styles.man_cross} width={165} height={165} alt='image'/>
                    <Image src={girl_circle} className={styles.girl_circle} width={200} height={200} alt='image'/>
                    <Image src={man_triangle} className={styles.man_triangle} width={215} height={180} alt='image'/>
                </div>
            </div>
        </div>
     );
}
