import Image from 'next/image';
import Link from 'next/link';

import arrow from './arrow.svg';

import styles from './linkBtn.module.scss';

export const LinkBtn = (props:any) => {
    return (
        <Link className={styles.button} href={props.link}>
                <span className={styles.text}>
                    {props.text}
                </span>
                <Image src={arrow} width={10} height={16} alt="arrow" className={styles.img}/>
        </Link>
    );
};