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
                        ব্যাক-এন্ড ডেভেলপমেন্ট বলতে একটি অ্যাপ্লিকেশনের ব্যাক-এন্ড বা সার্ভার-সাইডের ডেভেলপমেন্ট বোঝায়। ব্যাক-এন্ড অ্যাপ্লিকেশনটির জন্য লজিক এবং ডেটা ম্যানেজমেন্ট করে এবং সাধারণত পাইথন, জাভা বা পিএইচপি-এর মতো সার্ভার-সাইড ল্যাংগুয়েজ লেখা হয়।
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