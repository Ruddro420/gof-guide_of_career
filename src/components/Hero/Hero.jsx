import Filter from "../Filter/Filter/Filter";

const Hero = () => {
    return (
        <div>
            <section className="py-20 mb-20">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-8">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">স্কিল শিখুন <span className=" text-[#155E75] p-3 rounded border-4 border-[#155E75]">ফ্রিতে</span></h1>
                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl mt-10">Discover 28 Live course & 100 types of skill tests to start your career & get promotion</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#155E75] hover:bg-[#155E75] focus:ring-4 focus:ring-primary-300 ">
                            কেনো শিখবেন ?
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-[#155E75] focus:ring-4 focus:ring-gray-10 ">
                            কিভাবে শিখবো ?
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-4 lg:block category-card">
                        <Filter />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;