import Navbar from "../Navbar";
import Hero from '../Homepage/Hero';
import About from "./About";
import Services from "./Services";
import Professional from "./Professional";
import Blog from "../Blog";
import Footer from "./Footer";
import Blogs from "./Blogs";

const Home = () => {

    return (
        <>
            <section id="home">
                {/* <Navbar /> */}
                <Hero />
                <About />
                <Services />
                <Professional />
                <Blogs />
                <Footer />
            </section>
        </>
    );
}

export default Home;