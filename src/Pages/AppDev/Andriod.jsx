import { useEffect, useMemo, useState } from 'react';
import appData from '../../../data/appDev.json'
import { Button, Card, Tabs } from 'flowbite-react';
const Andriod = () => {
    const [getData, setGetData] = useState([])
    const [kotlin, setKotlin] = useState([])
    const [java, setJava] = useState([])
    const [reactNative, setReactNativ] = useState([])
    const [flutter, setFlutter] = useState([])
    const [cPlusPus, setCPlusPlus] = useState([])
    useMemo(() => {
        const findData = appData.filter(data => data.name === 'Andriod App Development')
        findData.map(item => setGetData(item.language))
    }, [])
    useEffect(() => {
        //for HTML
        const findKotlin = getData.filter(cc => cc.name === 'KOTLIN')
        findKotlin.map(item => setKotlin(item.video))
        //for Css
        const findJava = getData.filter(cc => cc.name === 'JAVA')
        findJava.map(item => setJava(item.video))
        //for scss
        const findreactNativ = getData.filter(cc => cc.name === 'REACT NATIVE')
        findreactNativ.map(item => setReactNativ(item.video))
        //for Bootstrap
        const findflutter = getData.filter(cc => cc.name === 'FLUTTER')
        findflutter.map(item => setFlutter(item.video))
        //for Bootstrap
        const findcPlus = getData.filter(cc => cc.name === 'C++')
        findcPlus.map(item => setCPlusPlus(item.video))
    }, [])
    return (
        <div className='text-center'>
            <Tabs.Group aria-label="Tabs with underline" style="underline" >
                <Tabs.Item active title="Know Here">
                    <p className='text-left'>
                        অ্যানড্রয়েড হলো গুগলের ডেভেলপ করা একটি অপারেটিং সিস্টেম এবং প্রোগ্রামিং প্লাটফর্ম যা বিভিন্ন স্মার্টফোন এবং মোবাইল ডিভাইস (ট্যাবলেট) গুলোর জন্য তৈরি। এটা বিভিন্ন প্রস্তুতকারকের (manufacturer) তৈরি করা ডিভাইস সমূহে রান করতে সক্ষম। অ্যানড্রয়েড একটি সফটওয়ার ডেভলপমেন্ট কিট (Software development kit) বা SDK যুক্ত থাকে যাতে আমরা কোড লিখা এবং সফটওয়ার মডিউল গুলো একত্রিত করে অ্যাপ বানাতে পারি। আমাদের বানানো অ্যাপ গুলো সবার ডাওনলোড করার জন্য একটি মার্কেটপ্লেস (Play store) ও আছে অ্যানড্রয়েডের। সুতরাংআমরা বলতেই পারি অ্যানড্রয়েড হলো মোবাইল অ্যাপ গুলোর জন্য একটি ইকসিস্টেম (Mobile app ecosystem)
                    </p>
                </Tabs.Item>
                {/* For HTML */}
                <Tabs.Item title="KOTLIN" >
                    <div className="video-container">
                        {
                            kotlin.map(item => {
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
                <Tabs.Item title="JAVA">
                    <div className="video-container">
                        {
                            java.map(item => {
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
                <Tabs.Item title="FLUTTER">
                    <div className="video-container">
                        {
                            flutter.map(item => {
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
                <Tabs.Item title="C++">
                    <div className="video-container">
                        {
                            cPlusPus.map(item => {
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

export default Andriod;