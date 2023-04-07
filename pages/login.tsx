import { FC, useState } from "react";
import cl from "classnames";
import Image from "next/image";
import Link from "next/link";
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Sova } from '../components/sova/sova';
import { Footer } from "@/components/footer/footer";

import vk from '../public/vk.svg';
import inst from '../public/inst.svg';
import facebook from '../public/facebook.svg';
import youtube from '../public/youtube.svg';
import telegram from '../public/telegram.svg';


import styles from '../scss/login.module.scss';

interface RegistrationProps {
    
}

const links = [
    {
        img: vk,
        link: '#',
    },
    {
        img: inst,
        link: '#',
    },
    {
        img: facebook,
        link: '#',
    },
    {
        img: youtube,
        link: '#',
    },
    {
        img: telegram,
        link: '#',
    },
]

const Registration: FC<RegistrationProps> = () => {

const [ login, setLogin ]:any = useState(true)
const [ reg, setReg ]:any = useState(false)

const showLogin = () => {
    if (login ==!true) {
        setLogin(true)
        setReg(false)
    }
}

const showReg = () => {
    if (reg ==!true) {
        setReg(true)
        setLogin(false)
    }
}

    return ( 
        <>
            <div className={styles.inner}>
                <div className="container">
                    <div className={styles.titles}>
                        <p className={ login ? cl(styles.title, styles.active_title): styles.title} onClick={()=> showLogin()}>
                            Вход
                        </p>
                        <p className={ reg ? cl(styles.title, styles.active_title) : styles.title} onClick={()=> showReg()}>
                            Регистрация
                        </p>
                    </div>

                    <div className={styles.content}>
                        { login && 
                        <>
                            <div className={styles.inputs_box}>
                                <InputText className={styles.input_login} placeholder="Ваш логин" type="text" maxLength={50}/>
                                <InputText className={styles.input_password} placeholder="Ваш пароль"  maxLength={50}/>
                            </div>
                            <p className={styles.login_links_title}>
                                Войти с помощью соцсетей:
                            </p>
                            <div className={styles.links}>
                                {links.map(link =>
                                    <Link className={styles.link} href='#'>
                                        <Image src={link.img} width={26} height={26} alt="link-img" className={styles.link_img}/>
                                    </Link> 
                                )}
                            </div>
                        </>
                     }
                        
                     { reg &&
                        <div className={styles.inputs_box}>
                            <InputText className={styles.input_name} keyfilter="alpha" placeholder="Ваше имя" type="text" maxLength={50}/>
                            <InputText className={styles.input_login} placeholder="Ваш логин" type="text" maxLength={50}/>
                            <InputText className={styles.input_password} placeholder="Ваш пароль"  maxLength={50}/>
                            <InputText className={styles.input_mail} placeholder="Ваш e-mail" maxLength={30} type="email"/>
                            <InputMask className={styles.input_tel} mask="+ 7 (999) 999-99-99" maxLength={11} placeholder="Ваш телефон" type="tel"/>
                            <InputMask className={styles.input_tel} mask="+ 7 (999) 999-99-99" maxLength={11} placeholder="Подтвердите телефон" type="tel"/>
                        </div>
                     }
                    
                    <div className={styles.aside_sova}>
                        <Sova mid_text="Войдите в систему или зарегистриуйтесь, если у вас еще нет аккаунта"/>
                    </div>
                    </div>
                    <button className={styles.button} type="submit">
                        { login ? "Войти" : ""}
                        { reg ? "Регистрация" : ""}
                    </button>
                </div>
               
            </div>
            <Footer form="disable"/>
        </>
     );
}

export default Registration;
 
