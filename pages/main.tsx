import { Academy } from '../components/sections/academy/academy';
import { Choise } from '../components/sections/choise/choise';
import { Video } from '../components/sections/video/video';
import { Stats } from '../components/sections/stats/stats';
import { News } from '../components/sections/news/news';
import { Peoples } from '../components/sections/peoples/peoples';
import { Reviews } from '../components/reviews/reviews';
import { Welcome } from '../components/sections/welcome/welcome';
import { HelpForm } from '../components/helpForm/helpForm';
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
            <Welcome/>
            <HelpForm/>
        </>
    );
};
