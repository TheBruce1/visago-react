import Footer from "./Homepage/Footer";

const Visa = () => {

    return (
        <>
            <section id="visa1">
                <div className="row mx-0 justify-content-center text-center">
                    <div className="col">
                        <h1 className="fw-bold text-white">Services Details</h1>
                        <p className="text-white">Home <i class="fa-solid fa-angle-right"></i> Services Details</p>
                    </div>
                </div>
            </section>
            <section id="accordion">
                <div className="row mx-0 justify-content-center my-5 row-cols-1">
                    <div className="col col-lg-11 col-xxl-10">
                        <h2 className="fw-bold my-3 fs-1">Frequently Asked Question</h2>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="col col-lg-11 col-xxl-10">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>Is my technology allowed on tech?</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>How to soft launch your business?</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>How to turn visitors into contributors?</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>How can I find my solutions?</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Visa;