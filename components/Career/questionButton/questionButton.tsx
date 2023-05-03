import { FC } from 'react';
import cl from 'classnames';
import Link from 'next/link';
import styles from './questionButton.module.scss';

interface QuestionButtonProps {
    position?: string;
}
 
export const QuestionButton: FC<QuestionButtonProps> = ({position}) => {
    return ( 
        <>
            <Link className={ position === 'center' ? cl(styles.link, styles.center) : styles.link} href='#'> 
                Задать вопрос о трудоустройстве
            </Link>
        </>
        
     );
}
 