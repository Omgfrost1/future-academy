import styles from './stats.module.scss';

const statItems = [
    {
        number: '600',
        name: 'Курсов',
    },
    {
        number: '82',
        name: 'Ведущих преподавателей',
    },
    {
        number: '14 795',
        name: 'Выпускников',
    }
]
export const Stats = () => {
    return (
        <div className={styles.inner}>
            <div className='container'>
                <h3 className={styles.title}>
                    Актуальные знания от признанных экспертов рынка 
                    для новичков и практикующих специалистов.
                </h3>
                <div className={styles.content}>
                    {statItems.map(item=>(
                        <div className={styles.item}>
                            <p className={styles.number}>
                                {item.number}
                            </p>
                            <p className={styles.desc}>
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
