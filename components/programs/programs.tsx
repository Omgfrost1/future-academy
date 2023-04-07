import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import mobile from './mobile.svg'

import styles from './programs.module.scss';

interface ProgramsProps {
    
}

const programs:any[] = [
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        link: "#",
        background: '#C7EEFF',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        sale: '-10%',
        link: "#",
        background: '#FFCE94',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        link: "#",
        background: '#FFE38E',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        link: "#",
        background: '#DDDDFF',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        sale: '-10%',
        link: "#",
        background: '#B8EFCF',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        sale: '-10%',
        link: "#",
        background: '#C7EEFF',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        link: "#",
        background: '#C5DDFF',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        link: "#",
        background: '#FFE9A8',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        link: "#",
        background: '#FFEEF6',
    },
    {
        pretitle: 'Программа',
        img: mobile,
        title: '«Разработка мобильных приложений»',
        text: 'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.',
        duration: '24 месяца',
        link: "#",
        background: '#DDDDFF',
    },
]


export const Programs: FC<ProgramsProps> = () => {
    return (  
        <div className={styles.inner}>
            {programs.map((item, i) =>
                <div key={i} className={styles.item} style={{background:item.background}}>
                <p className={styles.pretitle}>
                    {item.pretitle}
                </p>
                <div className={styles.title_inner}>
                    <Image src={item.img} width={26} height={42} alt="item-img" className={styles.img}/>
                    <p className={styles.title}>
                        {item.title}
                    </p>
                </div>
                <p className={styles.text}>
                    {item.text}
                </p>
                <p className={styles.duration}>
                    {item.duration}
                </p>
                { item.sale && 
                <span className={styles.sale}>
                    {item.sale}
                </span>
                }
                <Link href={item.link} className={styles.link}>
                </Link>
            </div>
            )}
        </div>
    );
}
