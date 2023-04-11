import { FC } from 'react';
import Image from 'next/image';

import photo_1 from './photo_1.png';
import photo_2 from './photo_2.png';
import photo_3 from './photo_3.png';
import photo_4 from './photo_4.png';

import styles from './eventManagers.module.scss';

interface EventManagersProps {
    
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

export const EventManagers: FC<EventManagersProps> = () => {
    return (

        <div className='container'>
            <div className={styles.items}>
                {items.map((item, i) => 
                    <div key={i} className={styles.item}>
                        <div className={styles.photo}>
                            <Image src={item.img} width={120} height={120} alt="photo" className={styles.img}/>
                        </div>

                        <p className={styles.name}>
                            {item.name}
                        </p>
                        <p className={styles.text}>
                            {item.text}
                        </p>
                    </div>
                )}
            </div>
        </div>
     );
}
 
