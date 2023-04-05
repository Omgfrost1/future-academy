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

export const CourseList = () => {
    return (
        <div className={styles.inner}>
            {coursesToChilds.map((course, i) => (
                <a key={i} className={styles.item} href={course.link}>
                    {course.name}
                </a>
            ))}
        </div>
    );
};
