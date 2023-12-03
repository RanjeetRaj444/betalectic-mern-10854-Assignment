import { ReuseToast } from "@locoworks/reusejs-react-toast";
// import { MdError } from "react-icons/md";
interface MyData {
    name?: string;
    description?: string;
}


 export const getDataFromLocalStorage = (key: string): MyData[] | null => {
    const storedData = localStorage.getItem(key);
    // console.log(storedData);
    if (storedData) {
        try {
            // Parse the JSON string stored in localStorage
            const parsedData: MyData[] = JSON.parse(storedData);
            // console.log(parsedData)
            return parsedData || [];
        } catch (error) {
            // Handle parsing error
            console.error('Error parsing data from localStorage:', error);
            return null;
        }
    }
    // Return null if no data is found
    return null;
};


export const saveDataToLocalStorage = (key: string, data: MyData[]) => {
    localStorage.setItem(key, JSON.stringify(data));
};


export function handleAddDataToLocalStorage(e: React.FormEvent<HTMLFormElement>,navigate:Function,data:any) {
    e.preventDefault()
    const storedData = getDataFromLocalStorage("packages") || [];
    // console.log(storedData);
    let status=false
    for(let i=0;i<storedData.length;i++){
        if(storedData[i].name===data.name){
            status=true
        }
    }
    if(status){
        showToast("Package is already in Favorite List.","bg-red-500")

    }else{
        const updatedData = [...storedData, data]
        saveDataToLocalStorage("packages", updatedData);
        showToast("Package is saved in Favorite List","bg-green-500")
        navigate("/")
    }
    
}


export const deletPackage=(title:String,navigate:Function,setData:Function,setPackages:Function)=>{
    const storedData = getDataFromLocalStorage("packages") || [];
    const updatedData = storedData.filter((word) => word.name!==title);
    saveDataToLocalStorage("packages", updatedData);
    const storedData2 = getDataFromLocalStorage("packages") || [];
    setData(storedData2)
    setPackages(storedData2)
    showToast("Package deleted from Favorite List","bg-green-500")
    // navigate("/")
}

export const updatePackage=(setData:Function,setPackages:Function,data:any,Index:Number)=>{
console.log(data)
    const storedData = getDataFromLocalStorage("packages") || [];
const newData=storedData.map((ele:any,index:Number)=>index===Index?{...ele,description:data}:ele)
    saveDataToLocalStorage("packages", newData)
    const storedData2 = getDataFromLocalStorage("packages") || [];
    setData(storedData2)
    setPackages(storedData2)
    showToast("Package description is edited.","bg-green-500")
    // navigate("/")
}


const showToast = async (text:string,color:string) => {
    await ReuseToast({
        timeout: 2000,
        label: `${text}`,
        // icon: <MdError/>,
        position:"top-centre",
        customToastPosition: `absolute rounded-lg text-bolder text-white inset-x-0 top-3 m-auto h-12 w-fit ${color}`,
        showProgress:true,
        customAnimation: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 },
        },
    });
};