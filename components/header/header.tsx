import Image from 'next/image';
import Link from 'next/link';

import logo_black from '../logo/logo_black.svg';
import { Nav } from './navigation/nav';

import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        <Image src={logo_black} width={100} height={71} alt="logo"/>
                    </Link>
                    <Nav/>
                </div>
            </div>
        </header>
    );
};
