import React from "react";
import Slider from "react-slick";
import './InfiniteSlider.css'; // Import the CSS file

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    { imgSrc: "/src/components/InfiniteSlider/images/birdseye.svg" },
    { imgSrc: "/src/components/InfiniteSlider/images/break.svg" },
    { imgSrc: "/src/components/InfiniteSlider/images/keddar.svg" },
    { imgSrc: "/src/components/InfiniteSlider/images/shield.svg" },
    { imgSrc: "/src/components/InfiniteSlider/images/tandov.svg" },
    { imgSrc: "/src/components/InfiniteSlider/images/tree.svg" },
];

// CAROUSEL SETTINGS
const MultipleItems: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className='carousel-container'>
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    {data.map((item, i) =>
                        <div key={i}>
                            <img src={item.imgSrc} alt={`Image ${i}`} />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default MultipleItems;
