import { useEffect, useState } from 'react';
import './Category.css'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
const Category = () => {

    const data = [
        {
            "id": 1,
            "name": "Web Development",
            "description": "Learn Web Development and App Development, Build a tech-career now",
            "icon": "../../../cat-img/dev.png",
            "link": '/web-development'
        },
        {
            "id": 2,
            "name": "App Development",
            "description": "Learn Web Development and App Development, Build a tech-career now",
            "icon": "../../../cat-img/ai.png",
            "link": "/app-development"
        },
        {
            "id": 3,
            "name": "UI/UX Design",
            "description": "Design products, increase demand internationally",
            "icon": "../../../cat-img/design.png",
            "link": "/ui-ux"
        },
        {
            "id": 4,
            "name": "Graphics-design",
            "description": "Become a successful corporate person by taking business and marketing-related courses.",
            "icon": "../../../cat-img/design.png",
            "link": "/graphics-design"
        },
        {
            "id": 5,
            "name": "Lead Generation",
            "description": "Become a successful corporate person by taking business and marketing-related courses.",
            "icon": "../../../cat-img/marketing.png",
            "link": "/lead-generation"
        },
        {
            "id": 6,
            "name": "Social Media Marketing",
            "description": "Become a successful corporate person by taking business and marketing-related courses.",
            "icon": "../../../cat-img/marketing.png",
            "link": "/social-media-marketing"
        },
        {
            "id": 7,
            "name": "Affiliate Marketing",
            "description": "Become a successful corporate person by taking business and marketing-related courses.",
            "icon": "../../../cat-img/marketing.png",
            "link": "/affiliate-marketing"
        },
        {
            "id": 8,
            "name": "Drop Shipping",
            "description": "Become a successful corporate person by taking business and marketing-related courses.",
            "icon": "../../../cat-img/marketing.png",
            "link": "/drop-shipping"
        },
        {
            "id": 9,
            "name": "SSC / HSC Preparation",
            "icon": "../../../cat-img/job.png",
            "description": "Prepare yourself for success in the competitive job market",
            "link": "/ssc-and-hsc"
        }
    ]
    const [category, setCategory] = useState([])
    const [loadMore, setLoadMore] = useState(6)

    useEffect(() => {
        setCategory(data.slice(0, loadMore))
    }, [loadMore])
    // for load more feature
    const loadMoreHandler = () => {
        setLoadMore(loadMore + 3)
    }
    console.log(data.length, loadMore);
    return (
        <div>
            <section className="">
                <div className="category-container py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold">ক্যারিয়ার গোল সেট করুন</h2>
                        <p className="text-gray-200 sm:text-xl">নিচের অপশন গুলো থেকে আপনার গোল সিলেক্ট করে শেখা শুরু করুন</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
                        {
                            category.map(item => {
                                return (
                                    <div className='category-design' key={item.id}>
                                        <Link to={item.link}>
                                            <div className=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <h3 className="mb-2 text-xl font-bold text-white uppercase">{item.name}</h3>
                                            <p className="text-gray-200">{item.description}</p>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        data.length <= loadMore ? ''
                            :
                            <center className='mt-10'>
                                <Button onClick={loadMoreHandler} gradientMonochrome="info">Load More</Button>
                            </center>
                    }
                </div>
            </section>
        </div>
    );
};

export default Category;