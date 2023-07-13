import { useEffect, useState } from 'react';
import './Category.css'
import { Link } from 'react-router-dom';
const Category = () => {

    const data = [
        {
            "id": 1,
            "name": "Web Development",
            "description": "Learn Web Development and App Development, Build a tech-career now",
            "icon": "../public/cat-img/dev.png",
            "link": '/web-development'
        },
        {
            "id": 2,
            "name": "App Development",
            "description": "Learn Web Development and App Development, Build a tech-career now",
            "icon": "../public/cat-img/dev.png",
            "link": "/app-development"
        },
        {
            "id": 3,
            "name": "Design",
            "description": "Design products, increase demand internationally",
            "icon": "../public/cat-img/design.png",
        },
        {
            "id": 4,
            "name": "Digital Marketing",
            "description": "Become a successful corporate person by taking business and marketing-related courses.",
            "icon": "../public/cat-img/marketing.png",
        },
        {
            "id": 5,
            "name": "Job Preparation",
            "icon": "../public/cat-img/job.png",
            "description": "Prepare yourself for success in the competitive job market",
        },
        {
            "id": 6,
            "name": "CV Writing",
            "description": "Build up your skills and gather informative knowledge with modern technology",
            "icon": "../public/cat-img/common.png",
        }
    ]
    const [category, setCategory] = useState([])
    useEffect(() => {
        setCategory(data)
    }, [category])
    console.log(category);
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
                </div>
            </section>
        </div>
    );
};

export default Category;