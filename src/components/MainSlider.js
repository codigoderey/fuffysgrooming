import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function MainSlider() {
    const settings = {
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,

        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } },
        ],
    };

    return (
        <section className='slider-area'>
            <Slider
                className='slider-active'
                {...settings}
            >
                <div>
                    <div
                        className='single-slider slider-bg d-flex align-items-center'
                        style={{
                            backgroundImage:
                                "url('img/slider/slider_bg01.jpg')",
                        }}
                    >
                        <div className='container custom-container'>
                            <div className='row'>
                                <div className='col-xl-5 col-lg-7 col-md-10'>
                                    <div className='slider-content'>
                                        <div className='slider-title'>
                                            <h2
                                                className='title'
                                                data-animation='fadeInUpBig'
                                                data-delay='.2s'
                                                data-duration='1.2s'
                                            >
                                                El mejor amigo <span>con</span>{' '}
                                                el mejor servicio
                                            </h2>
                                        </div>
                                        <div className='slider-desc'>
                                            <p
                                                className='desc'
                                                data-animation='fadeInUpBig'
                                                data-delay='.4s'
                                                data-duration='1.2s'
                                            >
                                                Centro de cuidado estético para
                                                perros.
                                            </p>
                                        </div>
                                        <Link
                                            to='/doglist'
                                            className='btn'
                                            data-animation='fadeInUpBig'
                                            data-delay='.6s'
                                            data-duration='1.2s'
                                        >
                                            Aprende más...{' '}
                                            <img
                                                src='img/icon/w_pawprint.png'
                                                alt=''
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className='slider-shape'>
                <img
                    src='img/slider/slider_shape01.png'
                    alt=''
                />
            </div>
        </section>
    );
}

export default MainSlider;
