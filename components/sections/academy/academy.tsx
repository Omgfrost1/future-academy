import Image from 'next/image';

import cross from './cross.svg';
import left_line from './left_line.svg';
import middle_line from './middle_line.svg';
import right_line from './right_line.svg';
import triangle from './triangle.svg';
import vertical_line from './vertical_line.svg';
import circle from './circle.svg';

import styles from './academy.module.scss';

export const Academy = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.black_bg}>
            </div>
            <div className="container">
                <div className={styles.content}>
                    <span className={styles.pretitle}>
                        Образовательная платформа
                    </span>

                    <h1 className={styles.title}>
                        ХОД Future Academy
                    </h1>
                    <span className={styles.subtitle}>
                        Актуальные знания для новичков и профессионалов
                    </span>
                </div>
                
                <Image src={cross} width={130} height={130} alt="cross" className={styles.cross}/>
                <Image src={left_line} width={338} height={131} alt="left_line" className={styles.left_line}/>
                <Image src={middle_line} width={309} height={1} alt="middle_line" className={styles.middle_line}/>
                <Image src={right_line} width={126} height={266} alt="right_line" className={styles.right_line}/>
                <Image src={triangle} width={99} height={82} alt="triangle" className={styles.triangle}/>
                <Image src={cross} width={85} height={85} alt="cross" className={styles.cross_small}/>
                <Image src={vertical_line} width={71} height={79} alt="vertical_line" className={styles.vertical_line}/>
                <Image src={circle} width={120} height={120} alt="circle" className={styles.circle}/>
            </div>
        </div>
    );
};
