import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import cl from "classnames";

import img from '../../public/images/news-img.jpg';
import play from '../../components/sections/video/play.svg';
import left_line from '../../components/sections/video/left_line.svg'
import cross from '../../components/sections/video/cross.svg'
import triangle from '../../components/sections/video/triangle.svg'
import right_line from '../../components/sections/video/right_line.svg'

import { Pagination } from "@/components/pagination/pagination";
import { SectionTitle } from "@/components/section-title/section-title";

import { Footer } from "@/components/footer/footer";

import styles from '../../scss/oneNews.module.scss';

interface OneNewsProps {
    
}

const OneNews: FC<OneNewsProps> = () => {

    return ( 
        <>
            <Head>
                <title>One News</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

                <div className='container'>
                    <div className={styles.inner}>
                        <Pagination page='Новости' link='/news'/>
                        <SectionTitle title='Заголовок новости' color='black'/>
                       
                        <p className={styles.date}>
                            16 ноября 2021
                        </p>

                        <p className={cl(styles.top_text, styles.text)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst. 
                        </p>

                        <div className={styles.image_container}>

                            <Image src={img} width={780} height={436} alt="img" className={styles.img}/>
                            

                            <Image className={styles.left_line} src={left_line} width={280} height={130} alt="left_line"/>
                            <Image className={styles.cross} src={cross} width={230} height={230} alt="cross"/>
                            <Image className={styles.triangle} src={triangle} width={165} height={137} alt="triangle"/>
                            <Image className={styles.right_line} src={right_line} width={350} height={350} alt="right_line"/>
                        </div>

                        <p className={cl(styles.mid_text, styles.text)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst. Vestibulum tristique porta aliquam. Suspendisse blandit et sapien sit amet sagittis. Praesent tristique ante sed lacinia congue. Etiam egestas mauris at arcu gravida interdum. Aliquam feugiat risus lacus, ac rutrum dolor porttitor vitae. Etiam porta, nunc sit amet pellentesque posuere, risus nulla sollicitudin enim, commodo bibendum nulla lacus et lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>

                        <p className={cl(styles.bottom_text, styles.text)}>
                            Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.
                        </p>
                    </div>
                </div>

            <Footer/>
        </>
    );
};

export default OneNews;