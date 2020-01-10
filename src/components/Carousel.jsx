import React, {Fragment} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(props) {
    const { config, children } = props;

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        ...config
    };
    return (
        <Fragment>
            <Slider {...settings}>
                {children}
            </Slider>
        </Fragment>
    );
}

