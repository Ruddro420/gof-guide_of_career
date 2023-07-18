import { Tabs } from "flowbite-react";
import { andriod, ios } from "../../../public";
import Andriod from "../../Pages/AppDev/Andriod";
import Ios from "../../Pages/AppDev/Ios";

const Apptitle = () => {
    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">WELCOME TO <br /> APP DEVLOPMENT WORLD !!</h1>
                    <div className="text-center mt-10">
                        <Tabs.Group className="items-center" aria-label="Pills" style="pills">
                            <Tabs.Item active title="Andriod">

                                <div className="main-content-container mt-20">
                                    <div className="top-content">
                                        <img src={andriod} alt="" />
                                    </div>
                                    <div className="bottom-content mt-10">
                                        <Andriod />
                                    </div>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="iOs">
                                <div className="main-content-container mt-20">
                                    <div className="top-content">
                                        <img src={ios} alt="" />
                                    </div>
                                    <div className="bottom-content mt-10">
                                        <Ios />
                                    </div>
                                </div>
                            </Tabs.Item>
                        </Tabs.Group>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Apptitle;