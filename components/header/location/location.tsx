import { useState } from "react";
import cl from "classnames";
import Image from "next/image";
import Link from 'next/link';

import Loc from './loc.svg';
import Arrow_up from './arrow_up.svg';
import Arrow_down from './arrow_down.svg';
import Empty_circle from './empty_circle.svg';
import Active_circle from './active_circle.svg';

import styles from './location.module.scss';

// const [ selected , setSelected] = useState();


const cities: string[] = ['Нижний Новгород', 'Москва', 'Тамбов'];

export const Location = () => {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(2);

    const onClickItem = (i : number) => {
        setActive(i);
        setOpen(false);
    };

    return (
        <>
            <div className={styles.location}>
                <a className={styles.city} onClick={() => setOpen(!open)}>
                    <Image src={Loc} width={17} height={20} alt="location" className={styles.location_logo}/>
                        {cities[active]}
                    { open === false 
                        ? <Image src={Arrow_down} width={10} height={6} alt="arrow_down" className={styles.location_arrow}/>
                        : <Image src={Arrow_up} width={10} height={6} alt="arrow_up" className={styles.location_arrow}/>
                    }
                </a>
            </div>

           {open && (
                <div className={styles.popup}>
                    
                    {cities.map((city, i) => (
                        <div key={i} className={styles.item} onClick={()=> onClickItem(i)}>
                           { active === i 
                           ? <Image src={Active_circle} width={20} height={20} alt="active_circle" className={styles.active_circle}/>
                           : <Image src={Empty_circle} width={20} height={20} alt="empty_circle" className={styles.empty_circle}/>
                           }
                            <p>
                                {city}
                            </p>
                        </div>
                    ))}
                    
                </div>
            )}
        </>
    );
};
