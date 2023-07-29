import React from 'react';
// import { Component } from "react";
import Slider from 'react-slick';
// import { Link } from "react-router-dom";
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type='button'
            className={className}
            onClick={onClick}
        >
            <img
                src='img/icon/arrow.png'
                alt='PREV'
            />
        </button>
    );
}

function BreedServices() {
    const settings = {
        nav: true,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: true,
        prevArrow: <PrevArrow />,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 1000,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 1000,
                },
            },
        ],
    };
    return (
        <section className='breeds-services pt-110 pb-110'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-7 col-lg-9'>
                        <div className='section-title text-center mb-65'>
                            <div className='section-icon'>
                                <img
                                    src='img/icon/pawprint.png'
                                    alt=''
                                />
                            </div>
                            <h5 className='sub-title'>
                                Servimos cualquier raza
                            </h5>
                            <h2 className='title'>Amamos todos los perros</h2>
                            <p>
                                En Fuffy's Grooming Services amamos a todos los
                                perros, sin importar su raza, tamaño o edad.
                                Nuestro equipo de cuidadores de perros está
                                capacitado para cuidar a todos los perros, desde
                                los más pequeños hasta los más grandes, y desde
                                los más jóvenes hasta los más viejos. Siempre
                                nos aseguramos de que su perro esté feliz y
                                cómodo en nuestro hogar, y nos aseguramos de que
                                su perro reciba el cuidado y la atención que se
                                merece.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <Slider
                            className='breed-services-active slick'
                            {...settings}
                        >
                            <div className='breed-services-item'>
                                <div className='thumb'>
                                    <img
                                        src='img/images/breed_services_img01.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='content'>
                                    <h3 className='title'>Golden Retriever</h3>
                                </div>
                            </div>
                            <div className='breed-services-item'>
                                <div className='thumb'>
                                    <img
                                        src='img/images/breed_services_img02.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='content'>
                                    <h3 className='title'>German Sharped</h3>
                                </div>
                            </div>
                            <div className='breed-services-item'>
                                <div className='thumb'>
                                    <img
                                        src='img/images/breed_services_img03.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='content'>
                                    <h3 className='title'>Siberian Husky</h3>
                                </div>
                            </div>
                            <div className='breed-services-item'>
                                <div className='thumb'>
                                    <img
                                        src='img/images/breed_services_img04.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='content'>
                                    <h3 className='title'>Bernes Mountain</h3>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div
                            className='breed-services-info'
                            style={{
                                backgroundImage:
                                    'url("img/bg/breed_services_bg.jpg")',
                            }}
                        >
                            <h5 className='sub-title'>Llama ahora</h5>
                            <h3 className='title'>
                                Comunícate para citas e información
                            </h3>
                            <p>
                                Para obtener más información sobre nuestros
                                servicios, o para una cita, llámenos al
                                787-394-9231.
                            </p>
                            <a
                                href='tel:7873949231'
                                className='btn'
                            >
                                Llama{' '}
                                <img
                                    src='img/icon/w_pawprint.png'
                                    alt=''
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='breed-services-shape'>
                <img
                    src='img/images/breed_services_shape01.png'
                    alt=''
                />
            </div>
            <div className='breed-services-shape shape-two'>
                <img
                    src='img/images/breed_services_shape02.png'
                    alt=''
                />
            </div>
        </section>
    );
}

export default BreedServices;
