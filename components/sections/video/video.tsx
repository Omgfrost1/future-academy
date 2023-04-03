import Image from 'next/image';

import play from './play.svg'
import left_line from './left_line.svg'
import cross from './cross.svg'
import triangle from './triangle.svg'
import right_line from './right_line.svg'

import styles from './video.module.scss';


export const Video = (props : any) => {
    return (
        <div className='container'>
            <div className={styles.inner}>
                <a href={props.link} target='blank' className={styles.video}>
                    <Image className={styles.img} src={props.img} width={780} height={436} alt="video-img"/>
                    <button className={styles.button}>
                        <Image className={styles.img_play} src={play} width={98} height={98} alt="play"/>
                    </button>
                </a>
                <Image className={styles.left_line} src={left_line} width={280} height={130} alt="left_line"/>
                <Image className={styles.cross} src={cross} width={230} height={230} alt="cross"/>
                <Image className={styles.triangle} src={triangle} width={165} height={137} alt="triangle"/>
                <Image className={styles.right_line} src={right_line} width={350} height={350} alt="right_line"/>
            </div>
        </div>
    );
};
