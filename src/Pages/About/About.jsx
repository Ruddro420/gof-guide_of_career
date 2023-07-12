/* eslint-disable react/no-unescaped-entities */

import { aboutImg } from "../../../public";

const About = () => {
    return (
        <div>
            <section className="main-background">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className=" text-white sm:text-lg ">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">ABOUT <span className="font-extrabold">TECH I TRICK</span></h2>
                        <p className="mb-4 font-light text-left mt-10">Welcome to TECH I TRICK, a passionate and dedicated team of technical and technology experts. With a deep understanding of web development and a commitment to excellence, we specialize in creating exceptional websites and web applications that empower businesses to succeed in the digital world.

                            At TECH I TRICK, we believe that technology is the driving force behind innovation and growth. With this belief, we strive to stay ahead of the curve by keeping up with the latest trends and advancements in the ever-evolving tech landscape. Our team consists of skilled professionals with diverse backgrounds and expertise, united by a shared passion for delivering outstanding digital solutions.

                            What sets us apart is our unwavering focus on providing customized and tailored solutions to our clients. We recognize that every business is unique, with its own set of challenges and goals. That's why we take the time to understand your specific requirements and develop innovative strategies that align with your vision.

                            Our comprehensive range of services includes website design and development, web application development, e-commerce solutions, content management systems, and much more. We leverage cutting-edge technologies and industry best practices to ensure that our solutions are not only visually stunning but also highly functional, user-friendly, and scalable.</p>
                        <p className="mb-4 font-medium text-left">
                            At TECH I TRICK, we believe that successful partnerships are built on trust, transparency, and effective communication. Throughout the project lifecycle, we collaborate closely with our clients, keeping them informed and involved at every step. We value your feedback and work collaboratively to refine and enhance our solutions, ensuring that the end result exceeds your expectations.

                            Whether you are a startup looking to establish a strong online presence or an established enterprise seeking to optimize your digital operations, we are here to help. Our goal is to empower your business with robust, secure, and future-proof web solutions that drive growth, streamline processes, and engage your target audience.

                            We are excited to embark on this journey with you and look forward to helping you achieve your digital goals. Contact us today to learn more about how TECH I TRICK can transform your online presence and drive your business forward.</p>
                        <div className="about-img mt-10">
                            <img src={aboutImg} alt="about-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;