import About from "./Homepage/About";
import Footer from "./Homepage/Footer";

const Pages = () => {

    return(
        <>
            <section id="pages">
                <div className="row mx-0 justify-content-center text-center">
                    <div className="col">
                        <h1 className="fw-bold text-white">About</h1>
                        <p className="text-white">Home <i class="fa-solid fa-angle-right"></i> About</p>
                    </div>
                </div>
            </section>
            <About/>
            <Footer/>
        </>
    );
}

export default Pages;