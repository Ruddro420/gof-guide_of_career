import { careerImg } from "../../../public";

const Career = () => {
    return (
        <div>
            <section className="main-background">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className=" text-white sm:text-lg ">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">ABOUT <span className="font-extrabold">CAREER</span></h2>
                        <p className="mb-4 font-light text-left mt-10">When you try new things, you prepare yourself for your next role. You may consider taking on new and difficult tasks that initially feel uncomfortable. Embrace upskilling, which is the process of building more advanced skills for your role, and reskilling, which is the process of learning new skills to pursue a different role. You can pursue challenging new skills by volunteering for leadership responsibilities and working cross-functionally with different departments at work.</p>
                        <div className="about-img mt-10">
                            <img src={careerImg} alt="about-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;