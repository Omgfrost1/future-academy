import Image from 'next/image';

import process from './process.svg';
import book from './book.svg';
import teacher from './teacher.svg';
import support from './support.svg';

import { SectionTitle } from '../../section-title/section-title';

import styles from './welcome.module.scss';

const items = [
    {
        img: process,
        content: 'Передовой подход к образовательному процессу',
    },
    {
        img: book,
        content: 'Непрерывное усовершенствование и пополнение базы курсов',
    },
    {
        img: teacher,
        content: 'Только практикующие преподаватели',
    },
    {
        img: support,
        content: 'Сопровождение на всех этапах. От начала обучения до трудоустройства',
    },
]

export const Welcome = () => {
    return (
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle title="Добро пожаловать в Академию будущего ХОД" color="black"/>
                <div className={styles.items}>
                    {items.map((item, i) => 
                        <div key={i} className={styles.item}>
                            <Image src={item.img} width={55} height={55} alt="img" className={styles.img}/>
                            <p className={styles.text}>
                                {item.content}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};