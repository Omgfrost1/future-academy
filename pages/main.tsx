import { Academy } from '../components/sections/academy/academy';
import { Choise } from '../components/sections/choise/choise';
import { Video } from '../components/sections/video/video';
import { Stats } from '../components/sections/stats/stats';
import { News } from '../components/sections/news/news';
import { Peoples } from '../components/sections/peoples/peoples';
import { Reviews } from '../components/reviews/reviews';
import { Welcome } from '../components/sections/welcome/welcome';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

import vr from '../components/sections/video/vr.jpg';
import styles from '../scss/index.module.scss';

export const Main = () => {
    return (
        <>
        <Header/>
            <main className={styles.main}>
                <Academy/>
                <Choise/>
                <Video img={vr} link={'https://youtu.be/Q6Lru2ZhaAE'}/>
                <Stats/>
                <News/>
                <Peoples content={Reviews} title="Отзывы наших студентов"/>
                <Welcome/>
            </main>
        <Footer />
        </>
    );
};
