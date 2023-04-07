import cl from 'classnames';
import Image from 'next/image';

import sova from './sova.svg';

import styles from './sova.module.scss';

export const Sova = (props:any) => {
    return (
        <div className={
            cl(
                props.bigSize ? (styles.inner, styles.bigSize) : styles.inner,
                props.smallSize ? (styles.inner, styles.smallSize) : styles.inner,
            )}>
            <div className={styles.text}>
                {props.top_text &&
                    <div className={styles.top_text}>
                        {props.top_text}
                    </div>
                }

                {props.mid_text &&
                    <div className={styles.mid_text}>
                        {props.mid_text}
                    </div>
                }

                {props.bot_text &&
                    <div className={styles.bot_text}>
                        {props.bot_text}
                    </div>
                }
                
            </div>
            <Image src={sova} width={168} height={189} alt="sova" className={styles.img}/>
        </div>
    );
};
