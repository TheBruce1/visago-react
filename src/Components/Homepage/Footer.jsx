import FooterLogo from "../../assets/Images/logo-2.png"

const Footer = () => {

    return (
        <>
            <section id="footer">
                <div className="row mx-0 justify-content-center py-5">
                    <div className="col col-xxl-10">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4">
                            <div className="col">
                                <div className="pe-5 mb-4"><img src={ FooterLogo } alt="footer-logo" className="img-fluid" /></div>
                                <p className="text-light">We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                                <button className="btn btn-danger fs-6 px-4 py-2 rounded-0 my-3">READ MORE</button>
                            </div>
                            <div className="col">
                                <h5 className="text-white my-4">Services</h5>
                                <ul className="list-unstyled">
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Canada Visa</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Japan Visa</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Spain Visa</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Germany Visa</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Italy Visa</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5 className="text-white my-4">Useful Links</h5>
                                <ul className="list-unstyled">
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Home</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>About Us</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Visa</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Blog</li>
                                    <li className="text-light mb-3"><i class="fa-solid fa-angles-right text-danger pe-2"></i>Contact Us</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5 className="text-white my-4">News Letter</h5>
                                <p className="text-light my-4">Sign up for alerts, our latest blogs,
                                    thoughts, and insights.</p>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control rounded-0 py-3" placeholder="Your Email Address" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                </div>
                                <button className="btn btn-danger rounded-0 py-3 w-100">SUBSCRIBE NOW</button>
                            </div>
                        </div>
                        <div className="row mt-5 text-center">
                            <div className="col-12">
                                <p className="text-light align-center">&copy; Copyrights served by <span className="fw-bold">Sachin Dhage</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;