import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import cl from "classnames";

import { Pagination } from "@/components/pagination/pagination";
import { SectionTitle } from '../components/section-title/section-title';
import { OpenDoorCart } from "@/components/sections/news/openDoorCart/openDoorCart";
import { EventsList } from "@/components/eventsList/eventsList";
import { Footer } from "@/components/footer/footer";

import mobile from '../components/programs/mobile.svg'

import styles from '../scss/events.module.scss';

interface EventsProps {
    
}



const Events: FC<EventsProps> = () => {


    return ( 
        <>
            <Head>
                <title>Our Events</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className={styles.inner}>
                    <Pagination page="Мероприятия" link="/events"/>
                    <SectionTitle title="Все мероприятия" color="black"/>
                    <OpenDoorCart/>
                    <EventsList/>
                </div>
            </div>

            
            <Footer />
        </>
    );
};

export default Events;
 
