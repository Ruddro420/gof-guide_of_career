import { Button, Card, Label, Select } from 'flowbite-react';
import category from '../../../../data/category.json'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Filter = () => {
    // main categoyr
    const [main, setMain] = useState()
    const [sub, setSub] = useState()
    const [subSub, setSubSub] = useState()
    // set data
    const [subcat, setSubcat] = useState([])
    const [subcat2, setSubcat2] = useState([])
    // Navigation
    const navigate = useNavigate();

    const categoryHandler = (e) => {
        setMain(e.target.value)
        // check first category
        const check = category.filter(item => item.name === e.target.value)
        check.map(item => setSubcat(item.subCategory_1))
    }
    const subCategoryHandler = (e) => {
        setSub(e.target.value)
        // check second category
        const check = subcat.filter(item => item.name === e.target.value)
        check.map(item => setSubcat2(item.subCategory_2))
    }
    const subSUBCategoryHandler = (e) => {
        setSubSub(e.target.value)
    }

    // submite handler
    const submitHandler = (e) => {
        e.preventDefault();

        if (sub) {
            const getData = sub.split(' ').join('-').toLowerCase();
            navigate(`/${getData}`)
            console.log(getData);
        }
        else {
            console.log('no data found');
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <Card className='category-card'>
                    <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                            <Label className='text-white' htmlFor="countries" value="Select you category" />
                        </div>
                        <Select onChange={categoryHandler} id="countries" value={main} required >
                            <option>Select Category</option>
                            {
                                category.map(item => {
                                    return (
                                        <option key={item.id}>{item.name}</option>
                                    )
                                })
                            }
                        </Select>
                        {
                            subcat?.length > 0 &&
                            <Select onChange={subCategoryHandler} id="countries" value={sub} required className='mt-5' >
                                <option>Select Sub-Category</option>
                                {
                                    subcat.map((item, i) => {
                                        return (
                                            <option key={i}>{item.name}</option>
                                        )
                                    })
                                }
                            </Select>

                        }
                        {/* sub - sub category */}
                        {
                            subcat2?.length > 0 &&
                            <Select onChange={subSUBCategoryHandler} id="countries" value={subSub} required className='mt-5' >
                                <option>Select Your Choice</option>
                                {
                                    subcat2.map((item, i) => {
                                        return (
                                            <option key={i}>{item.name}</option>
                                        )
                                    })
                                }
                            </Select>
                        }

                    </div>
                    {
                        subcat?.length > 0 && sub ?
                            <Button type="submit">দেখে নিন আপনার কি প্রয়োজন</Button> : ''
                    }


                </Card>
            </form>
        </div>
    );
};

export default Filter;