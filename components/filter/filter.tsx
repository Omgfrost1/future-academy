import { FC, useState } from 'react';
import Image from 'next/image';
import cl from 'classnames';

import empty_circle from '../header/location/empty_circle.svg';
import active_circle from '../header/location/active_circle.svg';

import styles from './filter.module.scss';

interface FilterProps {
    
}

const levels = ["Новичок", "Пользователь", "Профессионал", "Читер"]
const types = ["Любой", "Профессия", "Курс"]
const duration = ["До 6 месяцев", "6 - 12 месяцев", "12 - 24 месяца"]
 
export const Filter: FC<FilterProps> = () => {

    const [activeLevel, setActiveLevel] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [activeDuration, setActiveDuration] = useState(0);

    return ( 
        <div className={styles.inner}>

            <div className={cl(styles.level, styles.item)}>
                <p className={styles.title}>
                    Уровень сложности
                </p>
                {levels.map((level, i) => (

                    <div key={i} className={styles.child} onClick={()=> setActiveLevel(i)}>
                        { activeLevel === i 
                        ? <Image src={active_circle} width={20} height={20} alt="active_circle" className={styles.active_circle}/>
                        : <Image src={empty_circle} width={20} height={20} alt="empty_circle" className={styles.empty_circle}/>
                        }
                        <p className={ activeLevel === i ? cl(styles.text, styles.active) : styles.text}>
                            {level}
                        </p>
                    </div>
                ))}
            </div>
            
            <div className={cl(styles.type, styles.item)}>
                <p className={styles.title}>
                    Тип обучения
                </p>
                {types.map((type, i) => (

                    <div key={i} className={styles.child} onClick={()=> setActiveType(i)}>
                        { activeType === i 
                        ? <Image src={active_circle} width={20} height={20} alt="active_circle" className={styles.active_circle}/>
                        : <Image src={empty_circle} width={20} height={20} alt="empty_circle" className={styles.empty_circle}/>
                        }
                        <p className={ activeType === i ? cl(styles.text, styles.active) : styles.text}>
                            {type}
                        </p>
                    </div>
                ))}
            </div>

            <div className={cl(styles.duration, styles.item)}> 
                <p className={styles.title}>
                    Длительность
                </p>
                {duration.map((item, i) => (

                    <div key={i} className={styles.child} onClick={()=> setActiveDuration(i)}>
                        { activeDuration === i 
                        ? <Image src={active_circle} width={20} height={20} alt="active_circle" className={styles.active_circle}/>
                        : <Image src={empty_circle} width={20} height={20} alt="empty_circle" className={styles.empty_circle}/>
                        }
                        <p className={ activeDuration === i ? cl(styles.text, styles.active) : styles.text}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
