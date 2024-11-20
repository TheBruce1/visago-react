// import "../../js/Service-Carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import StudentVisa from '../../assets/Images/service1-1.jpg';
import TouristVisa from '../../assets/Images/service1-2.jpg';
import WorkVisa from '../../assets/Images/service1-3.jpg';

const Services = () => {

    return (
        <>
            <section id="services" className="row mx-0 justify-content-center">
                <div className="col py-5 my-5">
                    <div className="row">
                        <div className="col col-sm-10 col-lg-8 col-xl-7 col-xxl-6 mx-sm-auto text-center text-white px-xxl-5">
                            <div className="my-4">
                                <span id="service-title">SERVICES WE PROVIDE</span>
                            </div>
                            <div>
                                <h2>Outstanding Immigration Visa Services</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 px-md-3 px-xxl-5 mt-4">
                        <div class="col">
                            <div class="card p-3">
                                <img src={StudentVisa} class="card-img-top" alt="student-visa" />
                                <div class="card-body">
                                    <div className='row mx-2 card-title-body mb-3 row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-xl-2'>
                                        <div className='col'>
                                            <span className=''>01</span>
                                            <h5 class="card-title my-3 fw-bold fs-4">Student Visa</h5>
                                        </div>
                                        <div className='col col-sm-3 col-xl-3 ms-auto'>
                                            <i class="fs-1 text-danger text-center pt-3 fa-solid fa-book-atlas"></i>
                                        </div>
                                    </div>
                                    <p class="card-text ms-3">We denounce righteous indigna dislike beguiled demoralized charms.</p>
                                    <hr />
                                    <a className='text-danger text-decoration-none fw-bold'>Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card p-3">
                                <img src={TouristVisa} class="card-img-top" alt="tourist-visa" />
                                <div class="card-body">
                                    <div className='row mx-2 card-title-body mb-3 row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-xl-2'>
                                        <div className='col'>
                                            <span className=''>02</span>
                                            <h5 class="card-title my-3 fw-bold fs-4">Tourist Visa</h5>
                                        </div>
                                        <div className='col col-sm-3 col-xl-3 ms-auto'>
                                            <i class="fs-1 text-danger text-center pt-3 fa-solid fa-people-group"></i>
                                        </div>
                                    </div>
                                    <p class="card-text ms-3">We denounce righteous indigna dislike beguiled demoralized charms.</p>
                                    <hr />
                                    <a className='text-danger text-decoration-none fw-bold'>Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card p-3">
                                <img src={WorkVisa} class="card-img-top" alt="work-visa" />
                                <div class="card-body">
                                    <div className='row mx-2 card-title-body mb-3 row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-xl-2'>
                                        <div className='col'>
                                            <span className=''>03</span>
                                            <h5 class="card-title my-3 fw-bold fs-4">Working Visa</h5>
                                        </div>
                                        <div className='col col-sm-3 col-xl-3 ms-auto'>
                                            <i class="fs-1 text-danger text-center pt-3 fa-solid fa-passport"></i>
                                        </div>
                                    </div>
                                    <p class="card-text ms-3">We denounce righteous indigna dislike beguiled demoralized charms.</p>
                                    <hr />
                                    <a className='text-danger text-decoration-none fw-bold'>Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script>
                {
                    $('.owl-carousel').owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 5
                            }
                        }
                    })
                }
            </script>
        </>
    );
}

export default Services;