import { Button, Card, Tabs } from "flowbite-react";
import { graphics } from "../../../public";
import { useEffect, useMemo, useState } from "react";
import designData from '../../../data/design.json'

const Graphics = () => {
    const [getData, setGetData] = useState([])
    const [photoshop, setPhotoshop] = useState([])
    const [illustrator, setIllustrator] = useState([])
    useMemo(() => {
        const findData = designData.filter(data => data.name === 'Graphic Design')
        findData.map(item => setGetData(item.language))
    }, [])
    useEffect(() => {
        //for HTML
        const findPhotoshop = getData.filter(cc => cc.name === 'Adobe Photoshop')
        findPhotoshop.map(item => setPhotoshop(item.video))
        //for Css
        const findIllustrator = getData.filter(cc => cc.name === 'Adobe Illustrator')
        findIllustrator.map(item => setIllustrator(item.video))

    }, [])

    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">WELCOME TO <br /> GRAPHICS DESIGN WORLD !!</h1>
                    <div className="main-content-container mt-20">
                        <div className="top-content">
                            <img src={graphics} alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <Tabs.Group aria-label="Tabs with underline" style="underline" >
                            <Tabs.Item active title="Know Here"
                            >
                                <p className='text-left'>
                                    গ্রাফিক্স ডিজাইন এটি একটি সৌন্দর্য ও সৃজনশীল শিল্প যা ছবি, প্রতিচ্ছবি, লোগো, পোস্টার এবং আরও অনেক ধরনের মিডিয়া তৈরি করে। এটি প্রিন্ট অথবা ইলেক্ট্রনিক মাধ্যমে ব্যবহৃত হতে পারে এবং বিভিন্ন উপায়ে সাজানো যায় যাতে দর্শকদের আকর্ষিত করা যায়। এটি বিভিন্ন ক্ষেত্রে ব্যবহার করা হয়, যেমন বিজ্ঞাপন, মার্কেটিং, ওয়েব ডেভেলপমেন্ট, আইকন ডিজাইন, প্রিন্ট মিডিয়া, গেম ডেভেলপমেন্ট ইত্যাদি।
                                </p>
                            </Tabs.Item>
                            <Tabs.Item title="Adobe Photoshop" >
                                <div className="video-container">
                                    {
                                        photoshop.map(item => {
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
                            <Tabs.Item title="Adobe Illustrator" >
                                <div className="video-container">
                                    {
                                        illustrator.map(item => {
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

export default Graphics;