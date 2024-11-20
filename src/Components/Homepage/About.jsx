import Hero2 from '../../assets/Images/about1-2.png';

const About = () => {

    return (
        <>
            <section id="about" className="row mx-0 justify-content-center my-5">
                <div className="col-11 col-lg-11 mt-5">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col order-1 order-lg-0" id="about-left">
                            <div className="d-none d-lg-block" style={{width:"200px", height:"250px"}}>
                                <img src={Hero2} alt='img2' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col px-0 ps-lg-3" id='about-right'>
                            <div id='about-title-position'><i class="fa-solid fa-angles-right" id='about-title-icon'></i></div>
                            <p id='about-title'>WHO WE ARE</p>
                            <h2>Best Immigration & Visa Consultation.</h2>
                            <p id='about-para' className='mt-3'>
                                There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered majority have in some variations of passages
                            </p>
                            <div className='row row-cols-1 row-cols-md-2 my-3 px-2' id='about-right1'>
                                <div className='col my-3'>
                                    <div className='row justify-content-center'>
                                        <div className='col-3 col-sm-2 col-lg-3 text-center me-3' id='about-icon1'><i class="fa-solid fa-plane-departure text-danger"></i></div>
                                        <div className='col'><p className='mt-3 mt-sm-4 fw-bold fs-6'>Expertise Visa Processing</p></div>
                                    </div>
                                </div>
                                <div className='col my-3'>
                                    <div className='row justify-content-center'>
                                        <div className='col-3 col-sm-2 col-lg-3 text-center me-3' id='about-icon2'><i class="fa-solid fa-passport text-danger"></i></div>
                                        <div className='col'><p className='mt-3 mt-sm-4 fw-bold fs-6'>Fastest Working Process</p></div>
                                    </div>
                                </div>
                            </div>
                            <p className='lh-lg'><span className="bg-danger p-1 me-2" style={{ height: "5px", width: "7px", borderRadius: "50%" }}><i class="fa-solid fa-right-long text-light fs-6"></i></span>We strongly support best practice</p>
                            <p className='lh-lg'><span className="bg-danger p-1 me-2" style={{ height: "5px", width: "7px", borderRadius: "50%" }}><i class="fa-solid fa-right-long text-light fs-6"></i></span>Our operations aroound the world and across</p>
                            <button className='btn btn-danger rounded-0 btn-lg px-5 py-3 mt-4 mb-5 fs-6'>READ ME</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;