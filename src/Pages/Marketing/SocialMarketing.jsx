import { Button, Card, Tabs } from "flowbite-react";
import { andriodRoadMap } from "../../../public";
import marketingData from '../../../data/digitalMarketing.json'
import { useMemo, useState } from "react";
const SocialMarketing = () => {
    const [getData, setGetData] = useState([])
    useMemo(() => {
        const findData = marketingData.filter(data => data.name === 'Social Media Marketing')
        findData.map(item => setGetData(item.video))
    }, [])
    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">WELCOME TO <br /> SOCIAL MEDIA MARKETING WORLD !!</h1>
                    <div className="main-content-container mt-20">
                        <div className="top-content">
                            <img src={andriodRoadMap} alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <Tabs.Group aria-label="Tabs with underline" style="underline" >
                            <Tabs.Item active title="Know Here"
                            >
                                <p className='text-left'>
                                    খুব সহজ ভাষায় ফ্রন্ট এন্ড ডেভেলপমেন্ট হলো ইউজার এর জন্য দৃশ্যমান অংশ, যা ইউজার কতৃক ব্যবহৃত হয়। আর ব্যাক এন্ড ডেভেলপমেন্ট হলো ভিতরের কাজ যা সাধারন ওয়েবসাইট ব্যাবহারকারির অবগতিতে থাকে না।
                                </p>
                            </Tabs.Item>
                            {/* For HTML */}
                            <Tabs.Item title="Social Media Marketing" >
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

export default SocialMarketing;