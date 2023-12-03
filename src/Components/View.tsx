import React from "react";
import { HeadlessModal } from "@locoworks/reusejs-react-modal";
import { ReuseButton } from "@locoworks/reusejs-react-button";
import { RxCross2 } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
interface data {
    element: {
        name: "";
        description: ""
    }
}
const ViewNodal: React.FC<data> = (prop) => {
    const Modal = (props: any, ref: any) => {
        let nameValue = "";
        let emailValue = "";
        return (
            <div
                ref={ref}
                className="relative bg-white px-2 py-2 rounded-lg border-2 border-blue-500 flex flex-col items-center gap-y-5 w-[1000px] font-bold text-lg"
            >
                <div
                    className="text-gray-500 bg-transparent absolute top-2 right-2 p-0 cursor-pointer"
                    onClick={() => {
                        props.onAction(false);
                    }}
                >
                    <RxCross2 />
                </div>
                <div className="w-[700px]">
                    <div className=" gap-[4.5rem]">
                        <h3 className="text-xl">Package Name</h3>
                        <p className="font-semibold text-[grey]">{prop.element.name}</p>
                    </div>
                </div>
                <div className="w-[700px]">
                    <div className="gap-2">
                        <h3 className="text-xl">Why is your favourite?</h3>
                        <p className="font-semibold text-[grey]">{prop.element.description}</p>
                    </div>
                </div>
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
                    Close
                </ReuseButton>
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
                <FaEye className="text-gray-600" />
            </button>
        </div>
    );
};

export default ViewNodal;
