import React from 'react'
import Context from './Context'
import { useState } from 'react';

const ContextProvoider = (children: any) => {
    const [packages, setPackages] = useState<any>([])
    const [packagesName, setPackagesName] = useState<any>([])
    const [data, setData] = useState({
        name: "",
        description: ""
    })
    return (
        <Context.Provider value={{ packages, setPackages, packagesName, setPackagesName, data, setData, }}>
            {children.children}
        </Context.Provider>
    )
}

export default ContextProvoider