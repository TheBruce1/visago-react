import Footer from "./Homepage/Footer";

const Contact = () => {

    return (
        <>
            <section id="contact-hero">
                <div className="row mx-0 justify-content-center text-center">
                    <div className="col">
                        <h1 className="fw-bold text-white">Contact Us</h1>
                        <p className="text-white">Home <i class="fa-solid fa-angle-right"></i> Contact Us</p>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="row mx-0 justify-content-center my-5">
                    <div className="col col-md-10 col-lg-9 mt-sm-5">
                        <div className="row justify-content-center">
                            <div className="col-9 col-sm-10 mx-auto col-md-12" id="blog-position">
                                <div className='mx-auto' id='contact-full-title'>
                                    <div id='contact-title-position'>
                                        <i className="fa-solid fa-angles-right" id="contact-title-icon"></i>
                                    </div>
                                    <p id='contact-title'>NEED ANY HELP?</p>
                                </div>
                                <h2 className="mb-4 fw-bold text-center">Get in touch with us</h2>
                                <p>Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;