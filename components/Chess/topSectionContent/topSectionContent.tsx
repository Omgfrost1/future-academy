import { FC } from 'react';

import { CourseInfo } from '@/components/sections/topSection/courseInfo/courseInfo';
import { EntryButton } from '@/components/sections/topSection/entryButton/entryButton';
import styles from './topSectionContent.module.scss'

interface TopSectionContentProps {
    
}
 
export const TopSectionContent: FC<TopSectionContentProps> = () => {
    return ( 
        <div className={styles.inner}>
            <h3 className={styles.title}>
                Шахматная школа
            </h3>
            <p className={styles.subtitle}>
                Развитие мышленияи логики
            </p>

            <CourseInfo term="5 лет" mode="2 раза в неделю по 2 академических часа" price="4 350"/>

            <p className={styles.first}>
                1 занятие бесплатное
            </p>
            <p className={styles.recommended}>
                Прежде чем начать обучение советуем записаться на пробное заниятие
            </p>
            <EntryButton link='#'/>
        </div>
     );
}
 