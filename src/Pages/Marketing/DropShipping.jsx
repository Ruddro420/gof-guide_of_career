import { Button, Card, Tabs } from "flowbite-react";
import { dropShipping } from "../../../public";
import marketingData from '../../../data/digitalMarketing.json'
import { useMemo, useState } from "react";

const DropShipping = () => {
    const [getData, setGetData] = useState([])
    useMemo(() => {
        const findData = marketingData.filter(data => data.name === 'Drop Shipping')
        findData.map(item => setGetData(item.video))
    }, [])
    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white uppercase">WELCOME TO <br /> Drop Shipping WORLD !!</h1>
                    <div className="main-content-container mt-20">
                        <div className="top-content">
                            <img src={dropShipping} alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <Tabs.Group aria-label="Tabs with underline" style="underline" >
                            <Tabs.Item active title="Know Here"
                            >
                                <p className='text-left'>
                                    ড্রপ শিপিং হলো একটি ব্যবসা মডেল যেখানে একটি ব্যক্তি বা প্রতিষ্ঠান উৎপাদন বা স্টক করা প্রোডাক্ট ধারণ করে না, তারপর আপনার গ্রাহকদের অর্ডারের উপর ভিত্তি করে প্রয়োজনীয় পণ্যটি নির্মিতকারক বা সরবরাহকারী কর্তৃক প্রেরণ করে। ড্রপ শিপিং মডেল ব্যবসায়িকভাবে আকর্ষণীয় কারণে যেমন ব্যয় মিনিমাম, স্কেল করার সুবিধা, প্রায়শই প্রার্থনা করা পণ্য বা নিচে মূল্যে প্রবেশের সুবিধা ইত্যাদি।
                                </p>
                            </Tabs.Item>
                            {/* For HTML */}
                            <Tabs.Item title="Drop Shipping" >
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

export default DropShipping;