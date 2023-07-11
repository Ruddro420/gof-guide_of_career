/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Tabs } from 'flowbite-react';
import htmlData from '../../../data/webDev.json'
import { useEffect, useState } from 'react';

const FrontEnd = () => {
    const [getHtmlData, setGetHtmlData] = useState([])
    const [htmlVideo, setHtmlVideo] = useState([])
    useEffect(() => {
        htmlData.map(data => setGetHtmlData(data.language))
        //get Video Data
        getHtmlData.map(item => setHtmlVideo(item.video))
    }, [getHtmlData])
    console.log(htmlVideo);

    return (
        <div className='text-center'>
            <Tabs.Group aria-label="Tabs with underline" style="underline" >
                <Tabs.Item active title="Know Here"
                >
                    <p className='text-left'>
                        ফ্রন্ট-এন্ড ওয়েব ডেভেলপমেন্ট হল একটি বহুমাত্রিক শৃঙ্খলা যা বিভিন্ন দক্ষতা এবং প্রযুক্তিকে অন্তর্ভুক্ত করে। এটির জন্য ডিজাইনের সংবেদনশীলতা, কোডিং দক্ষতা এবং একটি ব্যবহারকারী-কেন্দ্রিক মানসিকতার মিশ্রণ প্রয়োজন। ইন্টারনেট এবং ডিজিটাল প্ল্যাটফর্মের ক্রমাগত বৃদ্ধির সাথে, ফ্রন্ট-এন্ড ডেভেলপমেন্ট আকর্ষণীয় এবং ব্যবহারকারী-বান্ধব ওয়েবসাইট এবং অ্যাপ্লিকেশন তৈরির একটি গুরুত্বপূর্ণ দিক হয়ে থাকবে।
                    </p>
                </Tabs.Item>
                {/* For HTML */}
                <Tabs.Item title="HTML" >
                    <div className="video-container">
                        {
                            htmlVideo.map(item => {
                                return (
                                    <div key={item.id} className="single-video">
                                        <Card>
                                            <iframe width="100%" height="300" src={item.link} title={item.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                <p>
                                                    {item.name}
                                                </p>
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <Button gradientDuoTone="purpleToBlue"
                                                    href={item.cLink}>Know More</Button>
                                            </p>
                                        </Card>
                                    </div>
                                )
                            })
                        }

                    </div>
                </Tabs.Item>
                <Tabs.Item
                    title="CSS"
                >
                    <p>
                        This is
                        <span className="font-medium text-gray-800 dark:text-white">
                            Settings tab's associated content
                        </span>
                        .
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
                    </p>
                </Tabs.Item>
                <Tabs.Item
                    title="JAVASCRIPT"
                >
                    <p>
                        This is
                        <span className="font-medium text-gray-800 dark:text-white">
                            Contacts tab's associated content
                        </span>
                        .
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
                    </p>
                </Tabs.Item>
            </Tabs.Group>
        </div>
    );
};

export default FrontEnd;