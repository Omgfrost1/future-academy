import Link from 'next/link';
import { useEffect } from 'react';
import styles from './courseList.module.scss';

export const coursesToChilds = [ 
        {
            name : 'Робототехника',
            link : '#',
        },
        {
            name : 'Создание игр',
            link : '#',
        },
        {
            name : 'Web-разработка',
            link : '#',
        },
        {
            name : 'Мультимедиа',
            link : '#',
        },
        {
            name : 'Шахматы',
            link : '#',
        },
        {
            name : '3D-моделирование и дизайн',
            link : '#',
        },
        {
            name : 'Английский язык',
            link : '#',
        },
        {
            name : 'Блогинг',
            link : '#',
        },
        {
            name : 'Soft skills',
            link : '#',
        }
]

export const coursesToTeens = [
    {
        name : 'Web-разработка',
        link : '#',
    },
    {
        name : 'Прикладное программирование',
        link : '#',
    },
    {
        name : 'Графическое моделирование',
        link : '#',
    },
    {
        name : 'Game development',
        link : '#',
    },
    {
        name : 'Разработчик мобильных приложений',
        link : '#',
    },
    {
        name : '3D-моделирование и дизайн',
        link : '#',
    },
    {
        name : 'Английский язык',
        link : '#',
    },
    {
        name : 'Мультимедия',
        link : '#',
    },
    {
        name : 'Блогинг',
        link : '#',
    },
    {
        name : 'Soft skills',
        link : '#',
    }
]

export const coursesToOlds = [
    {
        name : 'Разработчик игр на Unity',
        link : '#',
    },
    {
        name : 'Разработка ПО',
        link : '#',
    },
    {
        name : 'Графический Дизайн',
        link : '#',
    },
    {
        name : 'Тестировщик ПО',
        link : '#',
    },
    {
        name : 'Интернет Маркетинг',
        link : '#',
    },
    {
        name : 'Java-Разработчик',
        link : '#',
    },
    {
        name : 'Python-Разработчик',
        link : '#',
    },
    {
        name : 'IOS-Разработчик',
        link : '#',
    },
    {
        name : 'Программирование',
        link : '#',
    }
]



export const CourseList = (props:any) => {
    const courses = [coursesToChilds, coursesToTeens, coursesToOlds];
    let activeCourses = courses[props.state];
    
    useEffect(() => {
        activeCourses = courses[props.state];
    }, [props.state]);

    return (
        <div className={styles.inner}>
            {activeCourses.map((course, i) => (
                <Link key={i} className={styles.item} href={course.link}>
                    {course.name}
                </Link>
            ))}
        </div>
    );
};
