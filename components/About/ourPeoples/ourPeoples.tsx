import { FC } from 'react';

import { PeopleCard } from '@/components/PeopleCard/peopleCard';

import photo_1 from '../../Event/eventManagers/photo_1.png';
import photo_2 from '../../Event/eventManagers/photo_2.png';
import photo_3 from '../../Event/eventManagers/photo_3.png';
import photo_4 from '../../Event/eventManagers/photo_4.png';

import styles from './ourPeoples.module.scss';

interface OurPeoplesProps {
    
}

const items = [
    {
        img: photo_1,
        name: 'Имя Фамилия',
        text: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
    {
        img: photo_2,
        name: 'Имя Фамилия',
        text: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
    {
        img: photo_3,
        name: 'Имя Фамилия',
        text: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
    {
        img: photo_4,
        name: 'Имя Фамилия',
        text: 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'
    },
 
]

export const OurPeoples: FC<OurPeoplesProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <div className={styles.items}>
                    {items.map((item, i) => 
                        <PeopleCard key={i} img={item.img} name={item.name} text={item.text}/>   
                    )}
                </div>
            </div>
        </div>
     );
}
 
