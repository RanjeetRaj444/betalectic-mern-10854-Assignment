/* eslint-disable react/display-name */
import React from "react";
import { HeadlessModal } from "@locoworks/reusejs-react-modal";
import { ReuseButton } from "@locoworks/reusejs-react-button";
import { RxCross2 } from "react-icons/rx";
// import { useState, useEffect } from 'react';
// import { FaEye } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { deletPackage } from "../action";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
interface prop {
    name: String;
    setDataFromLocalStorage: Function
}

const DeleteModel: React.FC<prop> = (props2) => {
    const first = React.useContext(Context)
    const navigate = useNavigate()
    const Modal = (props: any, ref: any) => {
        let nameValue = "";
        let emailValue = "";
        return (
            <div
                ref={ref}
                className="relative bg-white px-2 py-2 rounded-lg border-2 border-blue-500 flex flex-col items-center gap-y-5 w-[600px] h-[250px] justify-center font-bold text-lg"
            >
                <div
                    className="text-gray-500 bg-transparent absolute top-2 right-2 p-0 cursor-pointer"
                    onClick={() => {
                        props.onAction(false);
                    }}
                >
                    <RxCross2 />
                </div>
                <div className="w-[500px] text-center">
                    <h2>Are you sure want to delete?</h2>
                </div>
                <div className="w-[500px] flex gap-5 justify-center">
                    <ReuseButton
                        className="px-3 py-1 rounded bg-red-700"
                        onClick={() => {
                            if (nameValue === "" || emailValue === "") {
                                props.onAction(false);
                            } else {
                                props.onAction({ name: nameValue, email: emailValue });
                            }
                        }}
                    >
                        Cancle
                    </ReuseButton>
                    <ReuseButton
                        className="px-3 py-1 rounded bg-green-700"
                        onClick={() => {
                            if (nameValue === "" || emailValue === "") {
                                props.onAction(false);
                            } else {
                                props.onAction({ name: nameValue, email: emailValue });
                            }
                            deletPackage(props2.name, navigate, first.setPackages, props2.setDataFromLocalStorage)
                        }}
                    >
                        Delete
                    </ReuseButton>
                </div>
            </div>
        );
    };
    const showModal = async () => {
        const result = await HeadlessModal({
            component: Modal,
            backdropClasses: "bg-transparent flex flex-center ",
            animations: {
                modal: {
                    initial: { opacity: 0, x: -400, y: -400 },
                    animate: { opacity: 1, x: 0, y: 0 },
                    exit: { opacity: 0, x: 400, y: 400 },
                },
            },
        });
        console.log("result", result);
    };
    return (
        <div className=" ">
            <button className="" onClick={showModal}>
                <RiDeleteBinFill className="text-gray-600" />
            </button>
        </div>
    );
};

export default DeleteModel;
