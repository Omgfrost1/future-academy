import Image from 'next/image';

import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';

import sova from '../sova/sova.svg';
import styles from './helpForm.module.scss';

export const HelpForm = () => {
    return (
        <div className={styles.inner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Image src={sova} width={276} height={311} alt="sova" className={styles.sova}/>
            <div className={styles.text_box}>
                <span className={styles.title}>
                    Помочь с выбором?
                </span>
                <p className={styles.text}>
                    Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы 
                    и подберут подходящий вариант обучения.
                </p>
            </div>
            <form className={styles.form} action='#'>
            <InputText className={styles.input_name} keyfilter="alpha" placeholder="Ваше имя" type="text" maxLength={50}/>
            <InputMask className={styles.input_tel} mask="+ 7 (999) 999-99-99" maxLength={11} placeholder="Ваш телефон" type="tel"/>
            <InputText className={styles.input_mail}  placeholder="Ваш e-mail" maxLength={30} type="email"/>
                <p className={styles.text}>
                    Нажимая на кнопку, я соглашаюсь 
                    на обработку персональных данных 
                    и с правилами пользования Платформой
                </p>
                <button className={styles.button} type='submit'>
                    Отправить
                </button>
            </form>
        </div>
    );
};
