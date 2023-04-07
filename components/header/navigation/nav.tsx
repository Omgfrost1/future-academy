import { Location } from '../location/location';

import book from './book.svg';
import profile from './profile.svg';

import cl from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './nav.module.scss';

const right_list = [
    {
        img: book,
        text: 'Все курсы',
        link : '/courses',
        img_widh: 20,
        img_height: 17,
        header: 'black',
    },
    {
        text: 'Мероприятия',
        link : '#',
    },
    {
        text: 'Базы знаний',
        link : '#',
    },
    {
        text: 'Карьера',
        link : '#',
    },
];


export const Nav = () => {
    return (
        <div className={styles.inner}>

            <div className={styles.right_list}>
                {right_list.map(link =>(
                    link.img
                    ? <Link className={cl(styles.link, styles.link_with_img)} href={link.link}>
                        <Image src={link.img} width={link.img_widh} height={link.img_widh} alt="logo" className={styles.link_img}/>
                        {link.text} 
                        </Link>
                    : <Link className={styles.link} href={link.link}>
                        {link.text}
                    </Link>
                        
                ))}
            </div>

            <div className={styles.left_list}>
                <Location/>
                <Link className={cl(styles.link, styles.phone)} href="tel:8 800 950-33-98">
                    8 800 950-33-98 
                </Link>
                <Link className={cl(styles.link, styles.profile)} href="/login">
                    <Image src={profile} width={17} height={18} alt="profile" className={styles.profile_logo}/>
                    <span>Войти</span>
                </Link>
            </div>   
        </div>
    );
};
