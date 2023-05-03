import { FC } from 'react';

import { SectionTitle } from '@/components/section-title/section-title';

import styles from './vacancy.module.scss';

const items = [
    {
        title: 'Графический дизайнер',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. ',
        background: '#C5DDFF',
        price: '80 000',
    },
    {
        title: 'Веб-разработчик',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. ',
        background: '#B8EFCF',
        price: '90 000',
    },
    {
        title: 'Графический дизайнер',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. ',
        background: '#FFCE94',
        price: '80 000',
    },
    {
        title: 'Графический дизайнер',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. ',
        background: '#C7EEFF',
        price: '80 000',
    },
    {
        title: 'Веб-разработчик',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. ',
        background: '#FFE38E',
        price: '90 000',
    }
]

interface VacancyProps {
    
}
 
export const Vacancy: FC<VacancyProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle title='Примеры активных вакансий' color='black'/>
                <div className={styles.items}>
                    {items.map((item, i) =>
                        <div key={i} className={styles.item} style={{background:item.background}}>
                            <p className={styles.title}>
                                {item.title}
                            </p>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                            <p className={styles.price}>
                                от {item.price} ₽ в месяц
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 