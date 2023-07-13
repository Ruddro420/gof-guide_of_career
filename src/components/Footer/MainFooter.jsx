import { Footer } from 'flowbite-react';
import './MainFooter.css'
const MainFooter = () => {
    return (
        <div>
            <Footer className='flowbite-footer main-background'>
                <div className="w-full grid max-w-screen-xl mx-auto">
                    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 place-content-stretch">
                        <div>
                            <Footer.Title title="Address" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Rangpur,Bangladesh
                                </Footer.Link>
                                <Footer.Link href="#">
                                    +88 01755232541
                                </Footer.Link>
                                <Footer.Link href="#">
                                    techitrick420@gmail.com
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="company" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    About
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contact
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Careers
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Licensing
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="contact" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Facebbok
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Youtube
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Email
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="GOF™"
                            href="#"
                            year={2023}
                        />
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default MainFooter;