import { Location } from '../location/location';

import book from './book.svg';
import profile from './profile.svg';

import cl from 'classnames';
import Image from 'next/image';

import styles from './nav.module.scss';

const right_list = [
    {
        img: book,
        text: 'Все курсы',
        link : '#',
        img_widh: 20,
        img_height: 17,
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

// const left_list = [
//     {
//         img: book,
//         text: 'Все курсы',
//         link : '#',
//     },
//     {
//         img: book,
//         text: 'Все курсы',
//         link : '#',
//     },
//     {
//         img: book,
//         text: 'Все курсы',
//         link : '#',
//     },
// ];

export const Nav = () => {
    return (
        <div className={styles.inner}>

            <div className={styles.right_list}>
                {right_list.map(link =>(
                    link.img
                    ? <a href={link.link} className={cl(styles.link, styles.link_with_img)}>
                        <Image src={link.img} width={link.img_widh} height={link.img_widh} alt="logo" className={styles.link_img}/>
                        {link.text} 
                        </a>
                    : <a href={link.link} className={styles.link}>
                        {link.text}
                    </a>
                        
                ))}
            </div>

            <div className={styles.left_list}>
                <Location/>
                <a className={cl(styles.link, styles.phone)} href="tel:8 800 950-33-98 ">
                    8 800 950-33-98 
                </a>
                <a className={cl(styles.link, styles.profile)}>
                    <Image src={profile} width={17} height={18} alt="profile" className={styles.profile_logo}/>
                    <span>Войти</span>
                </a>
            </div>   
        </div>
    );
};
