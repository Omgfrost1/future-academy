import { FC } from 'react';
import Image from 'next/image';

import border from '../../../About/ourPrograms/border.svg';
import styles from './courseInfo.module.scss';

interface CourseInfoProps {
    term: string;
    mode: string;
    price: string;
}
 
export const CourseInfo: FC<CourseInfoProps> = ({term, mode, price}) => {
    return ( 
        <div className={styles.inner}>
            <div className={styles.item}>
                <Image src={border} alt='border'/>
                <p className={styles.term}>
                    Cрок обучения:
                </p>
                <p className={styles.term_value}>
                    {term}
                </p>
            </div>

            <div className={styles.item}>
                <Image src={border} alt='border'/>
                <p className={styles.mode}>
                    Cрок обучения:
                </p>
                <p className={styles.mode_value}>
                    {mode}
                </p>
            </div>

            <div className={styles.item}>
                <Image src={border} alt='border'/>
                <p className={styles.price}>
                    от {price} ₽ в месяц
                </p>
            </div>
        </div>
     );
}
