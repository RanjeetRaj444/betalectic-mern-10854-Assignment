import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import "../Styles/FavPakage.css";
import ViewNodal from "../Components/View";
// import EditModal from "../Components/EditModal";
import DeleteModel from "../Components/DeleteModel";
import { Link } from "react-router-dom";
import { getDataFromLocalStorage } from "../action";
// import EditModal from './../Components/Edit';
import Modal from "./../Components/Edit";
import { FaEdit } from "react-icons/fa";
const FavPackage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const [dataFromLocalStorage, setDataFromLocalStorage] = useState<any>([]);

	useEffect(() => {
		const storedData = getDataFromLocalStorage("packages");
		setDataFromLocalStorage(storedData)
	}, [])
	return (
		<div className="body px-24 py-24 flex flex-col gap-20">
			<div>
				<div className="lg:flex lg:items-center lg:justify-between">
					<div className="min-w-0 flex-1">
						<h1 className="text-4xl text-gray-700">
							Welcome to Favorite NPM Packages
						</h1>
					</div>
					<div className="mt-5 flex lg:ml-4 lg:mt-0">
						<span className="sm:ml-3">
							<Link to={"/add_package"}>
								<Button text={"Add Fav"} type={"button"} />
							</Link>
						</span>
					</div>
				</div>
			</div>
			<div>
				<div className="flex ">
					<div className="Pakage_name">
						<ul className="flex flex-col">
							<li className="font-bold text-gray-700 text-lg border-solid border-2 p-1  package_name border-slate-300">
								Package Name
							</li>
							{dataFromLocalStorage.length > 0 && dataFromLocalStorage.map((ele: any, ind: number) => (
								<li
									key={ind}
									className="border-solid border-2 p-2  package_name border-slate-300 text-gray-600 font-semibold"
								>
									{ele.name}
								</li>
							))}
						</ul>
					</div>
					<div className="Pakage_operations">
						<ul className="flex flex-col  ">
							<li className="font-bold text-lg border-solid border-2 p-1 text-gray-700 border-slate-300">
								Action
							</li>
							{dataFromLocalStorage.length > 0 && dataFromLocalStorage.map((ele: any, ind: number) => (
								<li
									key={ind}
									className="flex p-2 pr-56 gap-14 border-solid border-2 border-slate-300"
								>
									<span>
										<ViewNodal element={{ name: ele.name, description: ele.description }} />
									</span>
									<span>
										<button onClick={openModal}> <FaEdit className="text-gray-600" /></button>

										<Modal element={{ name: ele.name, description: ele.description, index: ind, setDataFromLocalStorage: setDataFromLocalStorage }} isOpen={isModalOpen} onClose={closeModal} />
									</span>
									<span>
										<DeleteModel name={ele.name} setDataFromLocalStorage={setDataFromLocalStorage} />
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FavPackage;
