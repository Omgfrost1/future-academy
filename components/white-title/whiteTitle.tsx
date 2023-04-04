import styles from './whiteTitle.module.scss';

export const WhiteTitle = (props: any) => {
    return (
        <>
            <h4 className={styles.title}>
                {props.title}
            </h4>   
        </>
    );
};
