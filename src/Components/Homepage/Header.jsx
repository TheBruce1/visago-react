import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/Icons/logo.png';

const Header = () => {

    return(
        <>
            <section id="header" className="row mx-0 justify-content-center">
                <div>
                    <img src={BrandLogo} alt='logo' className='img-fluid'/>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/Pages'}>Pages</Link>
                        </li>
                        <li>
                            <Link to={'/Visa'}>Visa</Link>
                        </li>
                        <li>
                            <Link to={'/Blog'}>Blog</Link>
                        </li>
                        <li>
                            <Link to={'/Contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </section>
        </>
    );
}

export default Header;