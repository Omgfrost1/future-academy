import { Sova } from '../../sova/sova';
import { Ages } from '../../ages/ages';
import { CourseList} from '../../courseList/courseList';

import styles from './choise.module.scss';

export const Choise = () => {
    return (
        <div className='container'>
            <div className={styles.inner}>
                <Sova/>
                <div className={styles.right}>
                    <Ages />
                    <CourseList/>
                </div>
            </div>
        </div>
    );
};
