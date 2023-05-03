import { Academy } from '../components/sections/academy/academy';
import { Choise } from '../components/sections/choise/choise';
import { Video } from '../components/sections/video/video';
import { Stats } from '../components/sections/stats/stats';
import { News } from '../components/sections/news/news';
import { Peoples } from '../components/sections/peoples/peoples';
import { Reviews } from '../components/reviews/reviews';
import { CardItems } from '../components/sections/cardItems/cardItems';

import { Footer } from "@/components/footer/footer";


import vr from '../components/sections/video/vr.jpg';


export const Main = () => {
    return (
        <>
            <Academy/>
            <Choise/>
            <Video img={vr} link={'https://youtu.be/Q6Lru2ZhaAE'}/>
            <Stats/>
            <News/>
            <Peoples content={Reviews} title="Отзывы наших студентов"/>
            <CardItems title='Добро пожаловать в Академию будущего ХОД' bottom={true}/>
            <Footer/>
        </>
    );
};
