import Image from 'next/image';
import logo_black from './Logo_black.svg';
import logo_white from './Logo_white.svg';
import styles from './logo.module.scss';

export const LogoBlack = () => {
    return (
        <>
           <a href="/" className={styles.logo}>
             <Image src={logo_black} width={100} height={71} alt="logo"/>
            </a>
        </>
    );
};

export const LogoWhite = () => {
    return (
        <>
           <a href="/" className={styles.logo}>
             <Image src={logo_white} width={100} height={71} alt="logo"/>
            </a>
        </>
    );
};
