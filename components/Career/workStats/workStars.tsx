import { FC } from 'react';
import Image from 'next/image';

import { SectionTitle } from '@/components/section-title/section-title';

import vacancy from './vacancy.svg';
import students from './students.svg';
import zarplata from './zarplata.svg';

import styles from './workStats.module.scss';

interface WorkStatsProps {
    
}

const statsItems = [
    {
        img: vacancy,
        width: 188,
        text: 'Вакансий',
    },
    {
        img: students,
        width: 201,
        text: 'Трудоустроенных студентов',
    },
    {
        img: zarplata,
        width: 336,
        text: 'Средняя зарплата наших выпускников',
    },
]

export const WorkStats: FC<WorkStatsProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle title='Почему вы точно найдете работу с ХОД Future Academy' color='black'/>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>

                <div className={styles.stats}>
                    {statsItems.map((item, i) => 
                        <div key={i} className={styles.item}>
                            <Image src={item.img} width={item.width} height={105} alt='stats'/>
                            <p className={styles.item_text}>{item.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 