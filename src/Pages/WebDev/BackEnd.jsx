import { useEffect, useMemo, useState } from "react";
import htmlData from '../../../data/webDev.json'
import { Button, Card, Tabs } from "flowbite-react";
const BackEnd = () => {
    const [getData, setGetData] = useState([])
    const [nodeJsVideo, setNodeJsVideo] = useState([])
    const [phpVideo, setPhpVideo] = useState([])
    const [djangoVideo, setDjangoVideo] = useState([])
    const [laravelVideo, setLaravelVideo] = useState([])
    useMemo(() => {
        const findData = htmlData.filter(data => data.name === 'Back End')
        findData.map(item => setGetData(item.language))
    }, [])

    useEffect(() => {
        //for HTML
        const findHtml = getData.filter(cc => cc.name === 'NodeJS')
        findHtml.map(item => setNodeJsVideo(item.video))
        //for Css
        const findCss = getData.filter(cc => cc.name === 'PHP')
        findCss.map(item => setPhpVideo(item.video))
        //for scss
        const findScss = getData.filter(cc => cc.name === 'Python Django')
        findScss.map(item => setDjangoVideo(item.video))
        //for Bootstrap
        const findBootstrap = getData.filter(cc => cc.name === 'Laravel')
        findBootstrap.map(item => setLaravelVideo(item.video))
    }, [])

    return (
        <div className='text-center'>
            <Tabs.Group aria-label="Tabs with underline" style="underline" >
                <Tabs.Item active title="Know Here">
                    <p className='text-left'>
                        ব্যাক-এন্ড ওয়েব ডেভেলপমেন্ট হল ওয়েব অ্যাপ্লিকেশনের পিছনের অংশের প্রোগ্রামিং ও ইনফ্রাস্ট্রাকচার ডেভেলপমেন্ট। এটি সার্ভার সাইডের প্রোগ্রামিং ভাষাগুলি (যেমন: পাইথন, জাভা, নোড.জেএস) ব্যবহার করে ডেটাবেস সংযোগ, সার্ভার সাইড লজিক এবং অন্যান্য সার্ভার সম্পর্কিত কাজে মোডিউল বা এপিআই তৈরি করে।
                    </p>
                </Tabs.Item>
                {/* For HTML */}
                <Tabs.Item title="NODE JS" >
                    <div className="video-container">
                        {
                            nodeJsVideo.map(item => {
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
                <Tabs.Item title="PHP">
                    <div className="video-container">
                        {
                            phpVideo.map(item => {
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
                <Tabs.Item title="DJANGO">
                    <div className="video-container">
                        {
                            djangoVideo.map(item => {
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
                <Tabs.Item title="LARAVEL">
                    <div className="video-container">
                        {
                            laravelVideo.map(item => {
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
    );
};

export default BackEnd;