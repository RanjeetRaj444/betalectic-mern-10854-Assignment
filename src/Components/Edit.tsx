import React, { useState } from 'react';
// import { FaEdit } from 'react-icons/fa';
import "../Styles/Modal.css"
import Context from '../Context/Context';
import { updatePackage } from '../action';
import { useEffect } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    element: {
        name: string;
        description: string
        index: Number
        setDataFromLocalStorage: Function
    }
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, element }) => {
    const [text, setText] = useState<string>(element.description);
    const first = React.useContext(Context)
    function handleUpdatePackage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updatePackage(first.setPackages, element.setDataFromLocalStorage, text, element.index)
        onClose();
    }
    useEffect(() => {

    }, [isOpen])
    return (
        <>
            {isOpen && (
                <div className="overlay">
                    <div className="modal">
                        <h1 className='font-bold'>Edit why<span className='font-bold text-xl text-purple-900'> {element.name}</span> is your favorite.</h1>
                        <form action="" onSubmit={handleUpdatePackage}>
                            <textarea
                                className='p-4 rounded-xl bg-[#d8d4d4]'
                                rows={4}
                                cols={50}
                                placeholder="Enter text..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <div className="button-container">
                                <button className="btn btn-cancel" onClick={() => { onClose() }}>
                                    Close
                                </button>
                                <button type='submit' className="btn btn-save" >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal
// import React, { useState } from 'react';
// import Modal from './Modal'; // Make sure to adjust the import path based on your project structure


// const EditModal: React.FC = () => {
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div>
//             <button onClick={openModal}> <FaEdit className="text-gray-600" /></button>
//             <Modal isOpen={isModalOpen} onClose={closeModal} />
//         </div>
//     );
// };

// export default EditModal;