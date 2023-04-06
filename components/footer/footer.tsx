import Image from 'next/image';
import Link from 'next/link';
import cl from 'classnames';
import logo_white from '../logo/logo_white.svg';

import vk from './vk.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import youtube from './youtube.svg';
import telegram from './telegram.svg';

import { HelpForm } from '../helpForm/helpForm';

import { coursesToChilds } from '../courseList/courseList';
import { coursesToTeens } from '../courseList/courseList';
import { coursesToOlds } from '../courseList/courseList';

import styles from './footer.module.scss';

const socials:any = [
        {
            img : vk,
            link : '#',
        },
        {
            img : instagram,
            link : '#',
        },
        {
            img : facebook,
            link : '#',
        },
        {
            img : youtube,
            link : '#',
        },
        {
            img : telegram,
            link : '#',
        }
]

const info = [
    {
        name : 'Об академии',
        link : '#',
    },
    {
        name : 'Мероприятия',
        link : '#',
    },
    {
        name : 'Новости',
        link : '#',
    },
    {
        name : 'База знаний',
        link : '#',
    },
    {
        name : 'Карьера',
        link : '#',
    },
    {
        name : 'Контакты',
        link : '#',
    }
]

export const Footer = (props:any) => {
    return (
        <div className={styles.footer}>
            <div className='container'>
                {props.form === "disable" ? "" : <HelpForm/>}

                <div className={styles.items}>
                    <div className={cl(styles.item,styles.contacts)}>
                        <Link href="#" className={styles.logo}>
                            <Image src={logo_white} width={100} height={71} alt="logo"/>
                        </Link>
                        <Link className={styles.phone} href='tel:8 800 950-33-98'>
                            8 800 950-33-98
                        </Link>
                        <p className={styles.adress}>
                            г. Москва, ул. Ленина, д. 50
                        </p>
                        <p className={styles.mail}>
                            info@hodfutureacademy.ru
                        </p>

                        <div className={styles.socials}>
                            {socials.map((item :any, i :any) =>
                                <Link key={i} href={item.link} className={styles.link}>
                                    <Image src={item.img} width={20} height={20} alt="img"/>
                                </Link>
                            )}
                        </div>
                        <p className={styles.copy}>
                            © ХОД, Future Academy
                        </p>
                    </div>

                    <div className={cl(styles.item, styles.to_childrens)}>
                        <p className={styles.list_title}>
                            Детям
                        </p>
                        {coursesToChilds.map((course : any, i:any) =>
                            <Link key={i} className={styles.link} href={course.link}>
                                {course.name}
                            </Link>
                        )}
                    </div>

                    <div className={cl(styles.item, styles.to_teens)}>
                        <p className={styles.list_title}>
                            Подросткам
                        </p>
                        {coursesToTeens.map((course : any, i:any) =>
                            <Link key={i} className={styles.link} href={course.link}>
                                {course.name}
                            </Link>
                        )}
                    </div>

                    <div className={cl(styles.item,styles.to_olds)}>
                        <p className={styles.list_title}>
                            Взрослым
                        </p>
                        {coursesToOlds.map((course : any, i:any) =>
                            <Link key={i} className={styles.link} href={course.link}>
                                {course.name}
                            </Link>
                        )}
                    </div>

                    <div className={cl(styles.item,styles.to_info)}>
                        <p className={styles.list_title}>
                            Информация
                        </p>
                        {info.map((course : any, i:any) =>
                            <Link key={i} className={styles.link} href={course.link}>
                                {course.name}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
