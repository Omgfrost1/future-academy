import { Sova } from '../../sova/sova';
import { Ages } from '../../ages/ages';
import { useState } from 'react';
import { CourseList} from '../../courseList/courseList';

import styles from './choise.module.scss';

export const Choise = (props:any) => {
    const [active, setActive] = useState(0);

    return (
        <div className='container'>
            <div className={styles.inner}>
                {props.sova_disable === true ? '' : <Sova/>}
                <div className={styles.right}>
                    <Ages state={active} setState={setActive}/>
                    <CourseList state={active} setState={setActive}/>
                </div>
            </div>
        </div>
    );
};
