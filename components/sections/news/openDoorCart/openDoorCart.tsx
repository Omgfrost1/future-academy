import { LinkBtn } from '@/components/linkBtn/linkBtn';
import styles from './openDoorCart.module.scss';

export const OpenDoorCart = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.right}>
                <div className={styles.date}>
                    <span className={styles.num}>
                        25
                    </span>
                    <span className={styles.mounth}>
                        ноября
                    </span>
                </div>

                <div className={styles.content}>
                    <h4 className={styles.title}>
                        День открытых дверей 
                    </h4>
                    <p className={styles.text}>
                        Приглашаем всех желающих на бесплатную экскурсию 
                        в мир востребованных профессий и полезных навыков
                    </p>
                </div>
            </div>
            
            <LinkBtn text="Записаться" link="#"/>
        </div>
    );
};
