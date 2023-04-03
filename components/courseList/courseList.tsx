import styles from './courseList.module.scss';

const courses = [
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
export const CourseList = () => {
    return (
        <div className={styles.inner}>
            {courses.map((course, i) => (
                <a key={i}className={styles.item} href={course.link}>
                    {course.name}
                </a>
            ))}
        </div>
    );
};
