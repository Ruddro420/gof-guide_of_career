import { useEffect, useState } from 'react';
import data from '../../../data/category.json'
import './Category.css'
import { useNavigate } from 'react-router-dom';
const Category = () => {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        setCategory(data)
    }, [category])
    console.log(category);
    const detailsHandler = () => {
        navigate('/web-development')
    }
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
                                    <div onClick={detailsHandler} className='category-design' key={item.id}>
                                        <div className=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-white uppercase">{item.name}</h3>
                                        <p className="text-gray-200">{item.description}</p>
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