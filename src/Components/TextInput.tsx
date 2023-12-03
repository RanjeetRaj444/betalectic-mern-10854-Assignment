import React, { useState } from 'react'
interface MyComponentProps {
    text: string;
    handleChange: Function
}
const TextInput: React.FC<MyComponentProps> = (props) => {
    const [inputValue, setInputValue] = useState(props.text)
    function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        props.handleChange(e)
        setInputValue(e.target.value)
    }
    return (
        <div className="mt-2">
            <input
                type="text"
                name="name"
                id="street-address"
                value={inputValue}
                autoComplete="street-address"
                placeholder='Enter Package name...'
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => handleInputValue(e)}
            />
        </div>
    )
}

export default TextInput