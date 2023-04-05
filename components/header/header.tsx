import Image from 'next/image';
import logo_black from '../logo/logo_black.svg';
import { Nav } from './navigation/nav';

import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.inner}>
                    <a href="#" className={styles.logo}>
                        <Image src={logo_black} width={100} height={71} alt="logo"/>
                    </a>
                    <Nav/>
                </div>
            </div>
        </header>
    );
};
