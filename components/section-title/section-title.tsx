
import styles from './section-title.module.scss';

type Props = {
 title: string,
 color: string,
}


export const SectionTitle = ({title, color} :Props) => {

    const style = {
        color: color
    }

    return (
        <h2 className={styles.title} style={style}>
            {title} 
        </h2>
    );
};

