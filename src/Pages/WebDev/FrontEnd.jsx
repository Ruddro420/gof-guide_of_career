/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Tabs } from 'flowbite-react';
import htmlData from '../../../data/webDev.json'
import { useEffect, useMemo, useState } from 'react';

const FrontEnd = () => {
    const [getData, setGetData] = useState([])
    const [htmlVideo, setHtmlVideo] = useState([])
    const [cssVideo, setCssVideo] = useState([])
    const [scssVideo, setScssVideo] = useState([])
    const [bootsVideo, setBootsVideo] = useState([])
    const [tailwindVideo, setTailwindVideo] = useState([])
    const [jsVideo, setJsVideo] = useState([])
    const [jqueryVideo, setJqueryVideo] = useState([])
    const [githubVideo, setGithubVideo] = useState([])


    useMemo(() => {
        const findData = htmlData.filter(data => data.name === 'Front End')
        findData.map(item => setGetData(item.language))
    }, [])



    useEffect(() => {
        //for HTML
        const findHtml = getData.filter(cc => cc.name === 'HTML')
        findHtml.map(item => setHtmlVideo(item.video))
        //for Css
        const findCss = getData.filter(cc => cc.name === 'CSS')
        findCss.map(item => setCssVideo(item.video))
        //for scss
        const findScss = getData.filter(cc => cc.name === 'SCSS')
        findScss.map(item => setScssVideo(item.video))
        //for Bootstrap
        const findBootstrap = getData.filter(cc => cc.name === 'BOOTSTRAP')
        findBootstrap.map(item => setBootsVideo(item.video))
        //for Tailwind
        const findTailwind = getData.filter(cc => cc.name === 'TAILWIND')
        findTailwind.map(item => setTailwindVideo(item.video))
        //for Tailwind
        const findJs = getData.filter(cc => cc.name === 'JAVASCRIPT')
        findJs.map(item => setJsVideo(item.video))
        //for jquery
        const findJquery = getData.filter(cc => cc.name === 'JQUERY')
        findJquery.map(item => setJqueryVideo(item.video))
        //for github
        const findGithub = getData.filter(cc => cc.name === 'GITHUB')
        findGithub.map(item => setGithubVideo(item.video))
    }, [])


    return (
        <div className='text-center'>
            <Tabs.Group aria-label="Tabs with underline" style="underline" >
                <Tabs.Item active title="Know Here"
                >
                    <p className='text-left'>
                        ফ্রন্ট-এন্ড ওয়েব ডেভেলপমেন্ট হলো ওয়েব সাইটের সাজানোর কাজ যা ব্যবহারকারীদের ব্রাউজারে দেখা যায়। এটি হলো ডিজাইন এবং ইন্টারফেস তৈরির পক্ষ এবং জাভাস্ক্রিপ্ট, এইচটিএমএল এবং সিএসএস ব্যবহার করে ব্যাক-এন্ড ডেভেলপারদের কাজে মধ্যস্থতা করে। এটি ব্যবহারকারীর ব্রাউজারে প্রদর্শিত ডেটা, অ্যানিমেশন, ইন্টারেকশন এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করে।
                    </p>
                </Tabs.Item>
                {/* For HTML */}
                <Tabs.Item title="HTML" >
                    <div className="video-container">
                        {
                            htmlVideo.map(item => {
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
                <Tabs.Item title="CSS">
                    <div className="video-container">
                        {
                            cssVideo.map(item => {
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
                <Tabs.Item title="SCSS">
                    <div className="video-container">
                        {
                            scssVideo.map(item => {
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
                <Tabs.Item title="BOOTSTRAP">
                    <div className="video-container">
                        {
                            bootsVideo.map(item => {
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
                <Tabs.Item title="TAILWIND">
                    <div className="video-container">
                        {
                            tailwindVideo.map(item => {
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
                <Tabs.Item title="JAVASCRIPT">
                    <div className="video-container">
                        {
                            jsVideo.map(item => {
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
                <Tabs.Item title="JQUERY">
                    <div className="video-container">
                        {
                            jqueryVideo.map(item => {
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
                <Tabs.Item title="GITHUB">
                    <div className="video-container">
                        {
                            githubVideo.map(item => {
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

export default FrontEnd;