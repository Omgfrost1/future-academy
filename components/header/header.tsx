import { LogoBlack } from '../logo/logo';
import { Nav } from './navigation/nav';

import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.inner}>
                    <LogoBlack/>
                    <Nav/>
                </div>
            </div>
        </header>
    );
};
