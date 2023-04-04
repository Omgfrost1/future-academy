import Image from 'next/image';

import cross from '../academy/cross.svg';
import triangle from '../academy/triangle.svg';
import circle from '../academy/circle.svg';
import right_line from '../academy/left_line.svg';
import left_line from '../video/left_line.svg';

import { WhiteTitle } from '../../white-title/whiteTitle';

import styles from './peoples.module.scss';

export const Peoples = (props: any) => {
    return (
        <div className={styles.inner}>
            <WhiteTitle title={props.title}/>
            <div className={styles.list}>
                {props.list}
            </div>

            <Image src={cross} width={130} height={130} alt="cross" className={styles.cross}/>
            <Image src={triangle} width={98} height={82} alt="triangle" className={styles.triangle}/>
            <Image src={right_line} width={338} height={131} alt="right_line" className={styles.right_line}/>
            <Image src={circle} width={120} height={120} alt="circle" className={styles.circle}/>
            <Image src={left_line} width={227} height={267} alt="left_line" className={styles.left_line}/>
        </div>
    );
};
