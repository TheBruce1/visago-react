import { useState } from 'react';
import '../../App.css';
import heroImg from '../../assets/Images/family1.png';

const Hero = () => {

    const [className, setClassName] = useState();
    const [id, setId] = useState();

    const function1 = () => {

        setClassName("hero-title1");
        setId("hero-title2");
    }

    return (
        <>
            <section onLoad={function1} className='row mx-0 justify-content-center' id='hero'>
                <div className='col px-0'>
                    <div className='row ms-auto justify-content-center justify-content-md-start me-0'>
                        <div className='col col-sm-10 col-md-12 col-xl-7 col-xxl-6 text-center ms-xxl-auto pe-0' id='hero-left'>
                            <div className={className} id={id}>
                                <p className='mb-5 mx-sm-auto ms-md-0 text-lg-start ps-lg-4 fw-semibold hero-p'>Solution for all types of visas</p>
                            </div>
                            <div>
                                <h1 className='text-white fw-bolder lh-base mb-5 text-md-start'>Professional Solutions for Visa & Immigrations</h1>
                            </div>
                            <div className='text-md-start'>
                                <button className='btn text-white rounded-0 px-4 py-3'>REQUEST A QUOTE</button>
                            </div>
                        </div>
                        <div className='col col-xl-5 col-xxl-5 d-none d-xl-block' id='hero-right'>
                            <img src={heroImg} className='img-fluid' alt='family1' style={{backgroundSize: "50%"}} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;