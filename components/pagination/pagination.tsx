import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import arrow from './arrow.svg'

import styles from "./pagination.module.scss";

interface PaginationProps {
    page: string;
    link : string;
}
 
export const Pagination: FC<PaginationProps> = ({page, link}) => {
    return ( 
        <div className={styles.pagination}>
            <Link href="/">Главная</Link>
            <Image src={arrow} width={14} height={8} alt="arrow" className={styles.arrow}/>
            <Link href={link}>{page}</Link>
        </div>
     );
}
 