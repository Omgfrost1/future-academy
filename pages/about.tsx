import { FC } from "react";
import Head from "next/head";

import { Academy } from "@/components/sections/academy/academy";
import { ItemsList } from "@/components/Event/itemsList/itemsList";
import { Video } from "@/components/sections/video/video";
import { Interview } from "@/components/About/interview/interview";
import { Values } from "@/components/About/values/values";
import { Peoples } from "@/components/sections/peoples/peoples";
import { OurPeoples } from "@/components/About/ourPeoples/ourPeoples";
import { OurPrograms } from "@/components/About/ourPrograms/ourPrograms";
import { Partners } from "@/components/partners/partners";
import { ClickCards } from '@/components/About/clickCards/clickCards';

import { Footer } from "@/components/footer/footer";


import styles from '../scss/about.module.scss';

import man from '../components/sections/video/man.jpg';

interface AboutProps {
    
}
 
const About: FC<AboutProps> = () => {
    return (  
        <>
            <Head>
                <title>About us</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Academy/>
            <ItemsList/>
            <Video img={man} link={'https://youtu.be/Q6Lru2ZhaAE'}/>
            <Interview/>
            <Values/>
            <Peoples title="Наши люди" content={OurPeoples}/>
            <OurPrograms/>
            <Partners title='Наши партнеры'/>
            <ClickCards/>
            <Footer/>
        </>
    );
}
 
export default About;