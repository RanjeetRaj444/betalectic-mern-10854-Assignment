import React from 'react'
interface MyComponentProps {
    text: string;
    type: any
}
const Button: React.FC<MyComponentProps> = (props) => {
    return (

        <button
            type={props.type}
            className="rounded-md w-36 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {props.text}
        </button>

    )
}

export default Button