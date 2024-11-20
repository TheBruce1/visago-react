import BlogImage1 from '../../assets/Images/family1.png';
import BlogImage2 from '../../assets/Images/news1-2.jpg';
import BlogImage3 from '../../assets/Images/news1-3.jpg';

const Blogs = () => {

    return (
        <>
            <section id="blogs">
                <div className="row mx-0 justify-content-center">
                    <div className="col-11 col-xxl-10">
                        <div className="row row-cols-1">
                            <div className="col-9 col-sm-10 mx-auto col-md-12" id="blog-position">
                                <div className='mx-auto text-center' id='blog-full-title'>
                                    <div id='blog-title-position'>
                                        <i className="fa-solid fa-angles-right" id="blog-title-icon"></i>
                                    </div>
                                    <p id='blog-title'>NEWS & BLOGS</p>
                                </div>
                                <h2 className="mb-4 fw-bold text-center">Latest News from Insight</h2>
                            </div>
                            <div className="col">
                                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                                    <div className="col mb-4">
                                        <div className="card">
                                            {/* <img src={{ BlogImage1 }} className="card-img-top" alt="img1" /> */}
                                            <div className='blog-img1'></div>
                                            <div className="card-body">
                                                <div className='row my-2 card-span'>
                                                    <div className='col-5'><i class="fa-regular fa-user text-danger pe-2"></i><span className='text-secondary'>Admin</span></div>
                                                    <div className='col'><i class="fa-solid fa-comment text-danger pe-2"></i><span className='text-secondary'>0 Comments</span></div>
                                                </div>
                                                <h5 className="card-title mb-4">
                                                    <a className='fw-bold text-dark text-decoration-none'>Citizenship Concept on How to Become a UK Resident</a>
                                                </h5>
                                                <a href="#" className="text-dark text-decoration-none fw-bold fs-6">FULL ARTICLE <i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-4">
                                        <div className="card">
                                            {/* <img src={{ BlogImage2 }} className="card-img-top" alt="img2" /> */}
                                            <div className='blog-img2'></div>
                                            <div className="card-body">
                                                <div className='row my-2 card-span'>
                                                    <div className='col-5'><i class="fa-regular fa-user text-danger pe-2"></i><span className='text-secondary'>Admin</span></div>
                                                    <div className='col'><i class="fa-solid fa-comment text-danger pe-2"></i><span className='text-secondary'>0 Comments</span></div>
                                                </div>
                                                <h5 className="card-title mb-4">
                                                    <a className='fw-bold text-dark text-decoration-none'>How consultation is affecting ventures in 2024</a>
                                                </h5>
                                                <a href="#" className="text-dark text-decoration-none fw-bold fs-6">FULL ARTICLE <i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-4">
                                        <div className="card">
                                            {/* <img src={{ BlogImage3 }} className="card-img-top" alt="img3" /> */}
                                            <div className='blog-img3'></div>
                                            <div className="card-body">
                                                <div className='row my-2 card-span'>
                                                    <div className='col-5'><i class="fa-regular fa-user text-danger pe-2"></i><span className='text-secondary'>Admin</span></div>
                                                    <div className='col'><i class="fa-solid fa-comment text-danger pe-2"></i><span className='text-secondary'>0 Comments</span></div>
                                                </div>
                                                <h5 className="card-title mb-4">
                                                    <a className='fw-bold text-dark text-decoration-none'>Project Concepts or Related Queries Should be</a>
                                                </h5>
                                                <a href="#" className="text-dark text-decoration-none fw-bold fs-6">FULL ARTICLE <i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs