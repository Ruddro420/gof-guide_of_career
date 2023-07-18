import { Button, Card, Tabs } from "flowbite-react";
import { uiUx } from "../../../public";
import designData from '../../../data/design.json'
import { useMemo, useState } from "react";

const UiUx = () => {
    const [getData, setGetData] = useState([])
    useMemo(() => {
        const findData = designData.filter(data => data.name === 'UI/UX Design')
        findData.map(item => setGetData(item.video))
    }, [])
    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">WELCOME TO <br /> UI / UX DEVELOPMENT WORLD !!</h1>
                    <div className="main-content-container mt-20">
                        <div className="top-content">
                            <img src={uiUx} alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <Tabs.Group aria-label="Tabs with underline" style="underline" >
                            <Tabs.Item active title="Know Here"
                            >
                                <p className='text-left'>
                                    UI/UX এর মূল উদ্দেশ্য হলো ব্যবহারকারীদের সাথে সুবিধাজনক, আকর্ষণীয় এবং স্বচ্ছ অভিজ্ঞতা তৈরি করা। UI (User Interface) সম্পর্কিত, ব্যবহারকারীর সাথে সরাসরি সম্পর্ক করা হয় এবং তার মধ্যে ব্যবহারকারীর প্রথম যোগাযোগ বিন্যাস, অভিজ্ঞতা এবং সাধনাসমূহ রয়েছে। UX (User Experience) এর মাধ্যমে প্রধানভাবে ব্যবহারকারীর সাথে সম্পর্ক স্থাপন করা হয়
                                </p>
                            </Tabs.Item>
                            {/* For HTML */}
                            <Tabs.Item title="UI / UX" >
                                <div className="video-container">
                                    {
                                        getData.map(item => {
                                            return (
                                                <div key={item.id} className="single-video">
                                                    <Card className='main-background main-border'>
                                                        <iframe width="100%" height="300" src={item.link} title={item.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                        <h5 className="text-2xl font-bold tracking-tight text-white">
                                                            <p>
                                                                {item.name}
                                                            </p>
                                                        </h5>
                                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                                            <Button target="_blank" gradientDuoTone="purpleToBlue"
                                                                href={item.cLink}>Know More</Button>
                                                        </p>
                                                    </Card>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Tabs.Item>
                        </Tabs.Group>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default UiUx;