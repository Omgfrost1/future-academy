import { FC } from 'react';
import Link from 'next/link';

import styles from './entryButton.module.scss';

interface EntryButtonProps {
    link: string;
}
 
export const EntryButton: FC<EntryButtonProps> = ({link}) => {
    return ( 
        <Link className={styles.link} href={link}>
            Записаться на пробное занятие
        </Link>
     );
}
 