import { Button, Navbar } from 'flowbite-react';
import { logo } from '../../../public';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className="grid max-w-screen-xl mx-auto">
                <Navbar
                    fluid
                    rounded
                >
                    <Navbar.Brand href="/">
                        <img
                            alt="Flowbite React Logo"
                            className="mr-3 h-6 sm:h-9"
                            src={logo}
                        />
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Button>
                            Get started
                        </Button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Link
                            to='/'
                        >
                            <p>
                                Home
                            </p>
                        </Link>

                        <Navbar.Link>
                            <Link
                                to='/about'
                            >
                                <p>
                                    About
                                </p>
                            </Link>
                        </Navbar.Link>
                        <Navbar.Link href="#">
                            Services
                        </Navbar.Link>
                        <Navbar.Link href="#">
                            Pricing
                        </Navbar.Link>
                        <Navbar.Link href="#">
                            Contact
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;