import { FC } from 'react';
import Image from 'next/image';

import { SectionTitle } from '@/components/section-title/section-title';
import { StatItems } from '@/components/sections/stats/statsItems/statsItems';
import border from './border.svg';

import styles from './ourPrograms.module.scss';

interface OurProgramsProps {
    
}

const items = [
    {
        text: 'Предполагают пролонгированное обучение'
    },
    {
        text: 'Составлены с учетом возрастных и индивидуальных особенностей детей'
    },
    {
        text: 'Авторские и не имеют аналогов'
    },
    {
        text: 'Составлены на основе деятельностного и компетентностного подходов'
    },
    {
        text: 'Реализуются с помощью современных педагогических технологий'
    },
    {
        text: 'Актуальны и фундаментальны'
    },
 
]

export const OurPrograms: FC<OurProgramsProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className='container'>
                <SectionTitle color='black' title='Наши программы'/>
                <div className={styles.items}>
                    {items.map((item, i) => 
                        <div key={i} className={styles.item}>
                            <Image src={border} width={181} height={2} alt='border'/>
                            <p className={styles.text}>
                                {item.text}
                            </p>
                        </div>
                    )}
                </div>
                <StatItems/>
            </div>
        </div>
     );
}
 
