import { StatItems } from './statsItems/statsItems';
import styles from './stats.module.scss';

export const Stats = () => {
    return (
        <div className={styles.inner}>
            <div className='container'>
                <h3 className={styles.title}>
                    Актуальные знания от признанных экспертов рынка 
                    для новичков и практикующих специалистов.
                </h3>
                <StatItems/>
            </div>
        </div>
    );
};
