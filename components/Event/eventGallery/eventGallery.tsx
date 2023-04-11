import { FC } from 'react';

import { GallerySlider } from '@/components/gallerySlider/gallerySlider';

import photo_1 from './photo_1.jpg'
import photo_2 from './photo_2.jpg'
import photo_3 from './photo_3.jpg'
import photo_4 from './photo_4.jpg'
import photo_5 from './photo_5.jpg'
import photo_6 from './photo_6.jpg'

import photo_7 from './photo_2.jpg'
import photo_8 from './photo_3.jpg'
import photo_9 from './photo_4.jpg'


import styles from './eventGallery.module.scss';

const photos = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9];

interface EventGalleryProps {
    
}
 
export const EventGallery: FC<EventGalleryProps> = () => {
    return ( 
            <>
            <GallerySlider 
                title='Фотографии с прошлых мероприятий' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo.' 
                items={photos}
                padding_bottom={true}/>
            </>
     );
}
 
