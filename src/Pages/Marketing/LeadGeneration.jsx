import { Button, Card, Tabs } from "flowbite-react";
import { leadGeneration } from "../../../public";
import marketingData from '../../../data/digitalMarketing.json'
import { useMemo, useState } from "react";

const LeadGeneration = () => {
    const [getData, setGetData] = useState([])
    useMemo(() => {
        const findData = marketingData.filter(data => data.name === 'Lead Generation')
        findData.map(item => setGetData(item.video))
    }, [])
    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">WELCOME TO <br /> LEAD GENERATION WORLD !!</h1>
                    <div className="main-content-container mt-20">
                        <div className="top-content">
                            <img src={leadGeneration} alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <Tabs.Group aria-label="Tabs with underline" style="underline" >
                            <Tabs.Item active title="Know Here"
                            >
                                <p className='text-left'>
                                    লিড জেনারেশন হলো একটি ব্যবসায়িক প্রক্রিয়া যা প্রস্তুত এবং সঠিক কাস্টমারদের তালিকা তৈরি করে যা কোম্পানির পণ্য বা পরিষেবার দিকে আগ্রহী হতে পারে। এটি একটি গুরুত্বপূর্ণ মার্কেটিং প্রক্রিয়া, যা নতুন ক্লায়েন্টদের উদ্দীপনা দেয় এবং ব্যবসায়ের বিকাশে ভূমিকা পালন করে।
                                </p>
                            </Tabs.Item>
                            {/* For HTML */}
                            <Tabs.Item title="Lead Generation" >
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

export default LeadGeneration;