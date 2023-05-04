import { FC } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import chess from '../public/images/chess.jpg';
import { TopSection } from '@/components/sections/topSection/topSection';
import { TopSectionContent } from '@/components/Chess/topSectionContent/topSectionContent';
import { Footer } from '@/components/footer/footer';
import styles from '../scss/chess.module.scss';

interface ChessProps {
    
}
 
const Chess: FC<ChessProps> = () => {
    return (
        <> 
            <Head>
                <title>Chess</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopSection content={TopSectionContent} img={chess}/>
            {/* <Footer/> */}
        </>
     );
}
 
export default Chess;