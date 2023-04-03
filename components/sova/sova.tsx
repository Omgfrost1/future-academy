
import Image from 'next/image';

import sova from './sova.svg';

import styles from './sova.module.scss';

export const Sova = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.text}>
                <div className={styles.top_text}>
                    Кем вы хотите стать?
                </div>
                <div className={styles.mid_text}>
                    Пора найти себя и выбрать подходящий курс {':)'}
                </div>
                <div className={styles.bot_text}>
                    Удачи!
                </div>
            </div>
            <Image src={sova} width={168} height={189} alt="sova" className={styles.img}/>
        </div>
    );
};
