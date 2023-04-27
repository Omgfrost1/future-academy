import { FC } from "react";
import Image from "next/image";

import { SectionTitle } from "@/components/section-title/section-title";

import img1 from './img1.svg';
import img2 from './img2.svg';
import img3 from './img3.svg';
import img4 from './img4.svg';
import img5 from './img5.svg';

import styles from './values.module.scss';

const items = [
    {
        img: img1,
        text: "Содержание обучения должно быть актуальным, а методика проверенная годами.",
    },
    {
        img: img2,
        text: "Педагог - прежде всего личность компетентная и харизматичная.",
    },
    {
        img: img3,
        text: "Точка развития образования - ребенок, его интересы и потребности",
    },
    {
        img: img4,
        text: "Прогрессом правит любовь к знаниям",
    },
    {
        img: img5,
        text: "Технологии правят миром, а человек эти технологии создает",
    },
]


interface ValuesProps {
    
}

export const Values: FC<ValuesProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle color="black" title="Наши ценности"/>
                <div className={styles.items}>
                    {items.map((item, i) => 
                        
                        <div key={i} className={styles.item}>
                            <Image src={item.img} width={60} height={60} alt="logo"/>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
