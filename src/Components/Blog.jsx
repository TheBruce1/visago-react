import Blogs from "./Homepage/Blogs";
import Footer from "./Homepage/Footer";

const Blog = () => {

    return (
        <>
            <section id="blog-hero">
                <div className="row mx-0 justify-content-center text-center">
                    <div className="col">
                        <h1 className="fw-bold text-white">News Grid</h1>
                        <p className="text-white">Home <i class="fa-solid fa-angle-right"></i> News Grid</p>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <Blogs className="blogs-comp" />
            </section>
            <Footer />
        </>
    );
}

export default Blog;