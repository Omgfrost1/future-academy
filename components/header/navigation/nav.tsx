import { Location } from '../location/location';

import book from './book.svg';
import arrow from '../../linkBtn/arrow.svg';
import profile from './profile.svg';

import cl from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './nav.module.scss';

const right_list = [
    {
        book_img: book,
        text: 'Все курсы',
        link : '/courses',
        img_width: 20,
        img_height: 17,
    },
    {
        text: 'Мероприятия',
        link : '/events',
    },
    {
        arrow_img: arrow,
        text: 'Информация',
        link : '',
        list: 
            [ 
                {
                    text: 'Об академии',
                    link: '/about',
                },
                {
                    text: 'Новости',
                    link: '/news',
                },
                {
                    text: 'Контакты',
                    link: '/contacts',
                },
            
            ]
    },
    {
        text: 'Карьера',
        link : '/career',
    },
];


export const Nav = () => {
    return (
        <div className={styles.inner}>

            <div className={styles.left_list}>
                {right_list.map((link, i) =>(
                 
                        <div key={i} className={styles.item}>

                            
                            { 
                                link.book_img &&
                                    <Link className={cl(styles.link, styles.link_with_book_img)} 
                                            href={link.link}>
                                        {link.text}
                                        <Image src={link.book_img} width={link.img_width} height={link.img_height} alt="logo" className={styles.link_img}/>
                                    </Link>
                            }

                            { 
                                link.arrow_img &&
                                    <Link className={cl(styles.link, styles.link_with_arrow_img)}
                                    href={link.link}>
                                        {link.text}
                                        <Image src={link.arrow_img} width={10} height={10} alt="arrow" className={styles.arrow_img}/>
                                    </Link>
                            }

                            {  
                                !link.arrow_img && !link.book_img &&
                                    <Link href={link.link}>
                                        {link.text}
                                    </Link>
                            }
                            
                            

                            {link.list 

                            ? 

                            <div className={styles.hover}>
                                {link.list.map((link,i) =>
                                    <Link key={i} className={cl(styles.link)} href={link.link}>
                                    {link.text} 
                                </Link>
                                )}
                            </div>

                            : ""
                        }
                        </div>  

                   
                    
                        
                ))}
            </div>

            <div className={styles.right_list}>
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
