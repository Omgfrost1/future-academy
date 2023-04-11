import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import cl from 'classnames';

import cross_icon from './cross.svg';

import styles from './accordeon.module.scss';

interface AccordeonProps {
    title: string;
    text: string;
    id: any;
}
 
export const Accordeon: FC<AccordeonProps> = ({id, title, text}) => {

    const [ active, setActive ] = useState(0);

    const showAccordeon = function (id:any) {
        if (active) {
            setActive(0);
        }
        if (!active) {
            setActive(id);
        }
    }

    return ( 

            <div key={id} className={styles.item} onClick={() => showAccordeon(id)}>
                <div className={styles.top}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <Image src={cross_icon} width={15} height={15} alt="cross" className={id === active ? cl(styles.cross, styles.active_cross) : styles.cross_icon}/>
                </div>
            
                <p className={id == active ? cl(styles.text, styles.active) : styles.text}>
                    {text}
                </p>
            </div>
 
     );
}
 