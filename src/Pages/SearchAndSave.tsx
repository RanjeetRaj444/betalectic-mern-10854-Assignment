import React, { useEffect, useState } from 'react'
import "../Styles/SearchAndSave.css"
import Button from '../Components/Button'
import Textarea from '../Components/Textarea'
import TextInput from '../Components/TextInput'
import { IoArrowBackCircle } from "react-icons/io5";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { handleAddDataToLocalStorage } from '../action'
import Context from '../Context/Context'
const SearchAndSave: React.FC = () => {
    const first = React.useContext(Context)
    const [packagesName, setPackagesName] = useState<any>()
    const navigate = useNavigate()
    function handleChange(vale: any) {
        if (vale !== "") {
            axios(`https://api.npms.io/v2/search?q=${vale.target.value}`).then((data) => {
                setPackagesName(data.data)
            })
        } else {
            setPackagesName(undefined)
        }
    }
    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        first.setData({ ...first.data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setPackagesName(undefined)
    }, [])
    return (
        <div className='body'>
            <Link to={"/"}><h1 className='text-4xl flex items-center'><IoArrowBackCircle />Back</h1></Link>
            <form onSubmit={(e) => handleAddDataToLocalStorage(e, navigate, first.data)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm  font-bold text-stone-600 leading-6 ">
                                    Search for NPM Packages
                                </label>
                                <TextInput text={""} handleChange={handleChange} />
                            </div>
                            <div className='result_show '>
                                {/* results show here :- */}
                                {packagesName ? <fieldset >
                                    <label className='text-xs font-bold'>Results</label>
                                    <div className="mt-6 space-y-6 w-80 h-44 overflow-auto" >
                                        {packagesName.results.map((ele: any, ind: Number) => <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-everything"
                                                name="name"
                                                type="radio"
                                                value={ele.package.name}
                                                onChange={e => handleData(e)}
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                {ele.package.name}
                                            </label>
                                        </div>)}
                                    </div>
                                </fieldset> : ""}
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-stone-600 font-bold text-sm  leading-6 ">
                                    Why is this your fav?
                                </label>
                                <Textarea text={""} handleChange={handleData} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Button text={"Submit"} type="submit" />
                </div>
            </form>
        </div>
    )
}

export default SearchAndSave


