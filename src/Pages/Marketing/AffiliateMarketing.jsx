import { Button, Card, Tabs } from "flowbite-react";
import { affi } from "../../../public";
import marketingData from '../../../data/digitalMarketing.json'
import { useMemo, useState } from "react";
const AffiliateMarketing = () => {
    const [getData, setGetData] = useState([])
    useMemo(() => {
        const findData = marketingData.filter(data => data.name === 'Affiliate Marketing')
        findData.map(item => setGetData(item.video))
    }, [])
    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white uppercase">WELCOME TO <br /> Affiliate Marketing WORLD !!</h1>
                    <div className="main-content-container mt-20">
                        <div className="top-content">
                            <img src={affi} alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <Tabs.Group aria-label="Tabs with underline" style="underline" >
                            <Tabs.Item active title="Know Here"
                            >
                                <p className='text-left'>
                                    এফিলিয়েট মার্কেটিং হল একটি ব্যবসায়িক মডেল, যেখানে ওয়েবসাইট বা অনলাইন প্ল্যাটফর্ম মাধ্যমে পন্য বা পরিষেবা প্রচার করা হয়। এই মডেলে, একটি অ্যাফিলিয়েট (প্রচারকারী) পণ্যের লিঙ্ক প্রদান করে এবং পণ্য বা পরিষেবা ক্রয় করার  একটি অংশ কমিশন পেতে সক্ষম হয়।
                                </p>
                            </Tabs.Item>
                            {/* For HTML */}
                            <Tabs.Item title="Affiliate Marketing" >
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

export default AffiliateMarketing;