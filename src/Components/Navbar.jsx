import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png'

const Navbar = () => {

    return (
        <>
            <section id="header" className='row mx-0 justify-space-between'>
                <div className='col-8 col-md-5 col-lg-3 bg-white'>
                    <img src={logo} alt='logo' className='img-fluid' />
                </div>
                <div className='col-5 mx-auto d-none d-xl-block'>
                    <ul className='list-unstyled d-flex mt-4'>
                        <li>
                            <Link className='text-decoration-none mx-3 text-white fw-bold' to={"/"}>HOME</Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none mx-3 text-white fw-bold' to={"/pages"}>PAGES</Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none mx-3 text-white fw-bold' to={"/visa"}>VISA</Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none mx-3 text-white fw-bold' to={"/blog"}>BLOGS</Link>
                        </li>
                        <li>
                            <Link className='text-decoration-none mx-3 text-white fw-bold' to={"/contact"}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-1 ms-auto d-none d-xl-block'>
                    <i class="fa-solid fa-magnifying-glass text-secondary mt-4 pt-1"></i>
                </div>
                <div className='col col-md-3 col-lg-2 ms-md-auto text-center d-xl-none'>
                    <i class="fa-solid fa-bars text-white mt-1 mt-sm-3 mt-lg-2" id='menu-icon'></i>
                </div>
            </section>
        </>
    );
}

export default Navbar;