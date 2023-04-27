import { FC } from "react";
import Image from "next/image";

import styles from './interview.module.scss';

import photo from './photo.jpg';

interface InterviewProps {
    
}
 
export const Interview: FC<InterviewProps> = () => {
    return ( 
        <div className={styles.inner}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.biography}>
                        <Image src={photo} width={380} height={400} alt="photo"/>
                        <p className={styles.name}>
                            Имя Фамилия
                        </p>
                        <p className={styles.subtitle}>
                            Основатель Академии будущего ХОД
                        </p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.text}>
                            «Все началось с любви к шахматам. Я хотел предвидеть ход противника, хотел просчитать его действия, хотел побеждать. Я не стал гением шахмат, но стратег и психолог из меня неплохой» - смеется Иван Иванович. Идея открыть Академию шахмат пришла к нему в 2020 году, когда в период полного локдауна он вдруг вспомнил про хобби - игру в шахматы.  Оказалось, что для игры в шахматы сейчас и доска-то не обязательна, все есть в телефоне. Племянник (сын?) Ивана Ивановича большую часть дня проводил в стрелялках на планшете. 
                            {<br/>}«Я показал ему шахматы. К июню он уже был неплохим соперником» - 
                            Вскоре идея небольшой академии шахмат превратилась в план создания Академии Будущего, где дети смогут учиться тому, что им нравится, а взрослые попытаются изменить жизнь. Уж очень это сейчас актуально". 
                        </p>
                        <p className={styles.subtitle}>
                            Из интервью с основателем Академии Будущего Ивановым И.И.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 