import React, { useEffect } from 'react'
import Button from '../Components/Button'
import "../Styles/Homepage.css"
import FavPackage from './FavPackage';
import { Link } from 'react-router-dom';
import { getDataFromLocalStorage } from '../action';
import Context from '../Context/Context';
const Homepage = () => {
    const first = React.useContext(Context)
    useEffect(() => {
        const storedData = getDataFromLocalStorage("packages");
        first.setPackages(storedData)
    }, [])
    return first.packages.length > 0 ? <FavPackage  /> : <div className='body px-24 py-24 flex flex-col gap-20'>
        <div className="heading">
            <h1 className="text-4xl text-gray-700">Welcome to Favorite NPM Packages</h1>
        </div>
        <div className="body ">
            <div className='add_fav w-full h-96 text-center border-2 border-solid border-slate-300' >
                <p className='font-semibold text-gray-600'>You don't have any favs yet. Please add.</p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <Link to={"/add_package"}><Button text={"Add Fav"} type={"button"} /></Link>
                </div>
            </div>
        </div>
    </div>
}

export default Homepage