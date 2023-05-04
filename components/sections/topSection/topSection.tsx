import { FC } from "react";

import Image from "next/image";
import cl from "classnames";

import cross from '../academy/cross.svg';
import circle from '../academy/circle.svg';
import triangle from '../academy/triangle.svg';
import bottom_line from '../academy/left_line.svg';
import right_line from './right_line.svg';
import left_line from './left_line.svg';
import border from './border.svg';

import styles from './topSection.module.scss';

interface TopSection {
    content: any,
    img: any,
    left_image?: any,
}



export const TopSection: FC<TopSection> = (props) => {

    return ( 
        <div className={styles.topSection}>
            <div className="container">
                <div className={styles.inner}>
                    
                    <props.content/>

                    <Image src={props.img} width={530} height={480} alt="top-image" className={styles.top_img}/>
                    
                </div>


                { props.left_image 
                    ? 
                    props.left_image 
                    :
                    <Image src={cross} width={144} height={144} alt="cross" className={styles.cross}/>
                }
                <Image src={left_line} width={127} height={267} alt="left-line" className={styles.left_line}/>
                <Image src={bottom_line} width={338} height={131} alt="bottom-line" className={styles.bottom_line}/>
                <Image src={circle} width={128} height={128} alt="circle" className={styles.circle}/>

                <Image src={cross} width={100} height={100} alt="cross" className={styles.cross_small}/>
                <Image src={triangle} width={98} height={82} alt="triangle" className={styles.triangle_small}/>
                <Image src={triangle} width={138} height={115} alt="triangle" className={styles.triangle}/>
                <Image src={right_line} width={338} height={131} alt="right-line" className={styles.right_line}/>
            </div>
        </div>
    );
};


 