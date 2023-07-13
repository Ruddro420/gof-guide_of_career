import { useEffect, useMemo, useState } from 'react';
import appData from '../../../data/appDev.json'
import { Button, Card, Tabs } from 'flowbite-react';
const Ios = () => {
    const [getData, setGetData] = useState([])
    const [swift, setSwift] = useState([])
    const [reactNative, setReactNativ] = useState([])
    const [objective, setObjective] = useState([])
    useMemo(() => {
        const findData = appData.filter(data => data.name === 'iOs App Development')
        findData.map(item => setGetData(item.language))
    }, [])
    useEffect(() => {
        //for HTML
        const findSwift = getData.filter(cc => cc.name === 'SWIFT')
        findSwift.map(item => setSwift(item.video))
        //for scss
        const findreactNativ = getData.filter(cc => cc.name === 'REACT NATIVE')
        findreactNativ.map(item => setReactNativ(item.video))
        //for Bootstrap
        const findobjective = getData.filter(cc => cc.name === 'OBJECTIVE-C')
        findobjective.map(item => setObjective(item.video))
    }, [])
    return (
        <div className='text-center'>
            <Tabs.Group aria-label="Tabs with underline" style="underline" >
                <Tabs.Item active title="Know Here">
                    <p className='text-left'>
                        আইওএস (iOS) অ্যাপ ডেভেলপমেন্ট হলো আইফোন এবং আইপ্যাডের জন্য অ্যাপ তৈরি করার প্রক্রিয়া। আইওএস ডেভেলপমেন্ট আপনাকে অ্যাপ তৈরি করার জন্য সরবরাহ করে একটি সরঞ্জাম বা প্লাটফর্ম প্রয়োজন যা কেবলমাত্র আইওএস অপারেটিং সিস্টেম ব্যবহার করে চলতে পারে। আইওএস অ্যাপ ডেভেলপমেন্ট ভাষার জন্য প্রাথমিকভাবে সুইফট ব্যবহার করা হয়, যা একটি বলতে হলো আইওএস অ্যাপ ডেভেলপমেন্টের প্রাথমিক ভাষা। আপনি একটি অ্যাপ তৈরি করার জন্য একটি সুইফট প্রজেক্ট শুরু করতে পারেন এবং সুইফট প্রোগ্রামিং ল্যাঙ্গুয়েজ ব্যবহার করে অ্যাপ ডেভেলপ করতে পারেন।
                    </p>
                </Tabs.Item>
                {/* For HTML */}
                <Tabs.Item title="SWIFT" >
                    <div className="video-container">
                        {
                            swift.map(item => {
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
                <Tabs.Item title="REACT NATIVE">
                    <div className="video-container">
                        {
                            reactNative.map(item => {
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
                <Tabs.Item title="OBJECTIVE-C">
                    <div className="video-container">
                        {
                            objective.map(item => {
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

export default Ios;