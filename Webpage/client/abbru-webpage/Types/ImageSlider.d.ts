import React from 'react';
interface Slide {
    image: string;
    link: string;
}
interface ImageSliderProps {
    slides: Slide[];
}
declare const ImageSlider: React.FC<ImageSliderProps>;
export default ImageSlider;
