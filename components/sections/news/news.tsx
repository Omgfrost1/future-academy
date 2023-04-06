import Image from 'next/image';
import cl from 'classnames';
import Link from 'next/link';

import comp from './comp.svg';
import news from './news.svg';
import it from './it.svg';
import logo from './logo.svg';


import { OpenDoorCart } from './openDoorCart/openDoorCart';
import { LinkBtn } from '@/components/linkBtn/linkBtn';

import styles from './news.module.scss';

export const News = () => {
    return (
        <div className='container'>
            <div className={styles.inner}>

                <OpenDoorCart/>

                <div className={styles.items}>

                    <div className={cl(styles.item, styles.blue)}>
                        <Image src={comp} width={77} height={77} alt="comp" className={styles.comp}/>
                        <p className={styles.title}>
                            Программы обучения
                        </p>
                        <p className={styles.text}>
                            В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты.
                        </p>
                        <LinkBtn text="Подробнее" link="/courses"/>
                    </div>

                    <Link className={cl(styles.item, styles.green)} href="#">
                        <Image src={news} width={68} height={68} alt="news" className={styles.news}/>
                        <p className={styles.title}>
                            Новости Академии
                        </p>
                    </Link>

                    <Link className={cl(styles.item, styles.pink)} href="#">
                        <Image src={it} width={68} height={68} alt="it" className={styles.it}/>
                        <p className={styles.title}>
                            Мир IT
                        </p>
                    </Link>

                    <Link className={cl(styles.item, styles.yellow)} href="#">
                        <Image src={logo} width={97} height={97} alt="logo" className={styles.logo}/>
                        <div className={styles.content}>
                            <p className={styles.title}>
                                Попробуй!
                            </p>
                            <p className={styles.text}>
                                Пройдите тест и узнайте свои способности 
                                в сфере информационных технологий
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
