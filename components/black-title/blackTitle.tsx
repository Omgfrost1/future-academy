import styles from './blackTitle.module.scss';

export const BlackTitle = (props: any) => {
    return (
        <>
            <h4 className={styles.title}>
                {props.title}
            </h4>   
        </>
    );
};
