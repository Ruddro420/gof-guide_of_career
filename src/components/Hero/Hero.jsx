import Filter from "../Filter/Filter/Filter";

const Hero = () => {
    return (
        <div>
            <section className="pt-20">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="m-auto place-self-center lg:col-span-12 text-center mb-5">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">স্কিল শিখুন <span className="hero-free-text">ফ্রিতে</span></h1>
                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl mt-10">বেছে   নিন  নিজের প্রয়োজনীয় ক্যাটাগরি , নিচের বক্সে ক্লিক করে ক্যাটাগরি বেছে নিন এবং  প্রয়োজনীয় গাইডলাইন দেখে নিন। </p>
                    </div>
                    <div className="mx-auto lg:mt-0 lg:col-span-12 lg:block filter-box">
                        <Filter />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;