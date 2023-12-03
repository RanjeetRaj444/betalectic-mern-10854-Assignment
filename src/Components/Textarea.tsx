import React, { useState } from 'react'
interface MyComponentProps {
    text: string;
    handleChange: Function
}
const Textarea: React.FC<MyComponentProps> = (props) => {
    const [inputValue, setInputValue] = useState(props.text)
    function handleInputValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
        props.handleChange(e)
        setInputValue(e.target.value)
    }
    return (
        <div className="mt-2">
            <textarea
                id="about"
                name="description"
                rows={5}
                value={inputValue}
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder='Description'
                onChange={(e) => handleInputValue(e)}
            />
        </div>
    )
}

export default Textarea