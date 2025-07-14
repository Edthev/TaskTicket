import "./modalForm.scss"
import Input from "./modalInput"
// import Dropdown from "./modalDropdown"
import addressIcon from "../../assets/buildingsIcon.svg"
import aptIcon from "../../assets/doorIcon.svg"
import phoneIcon from "../../assets/phoneIcon.svg"
import noteIcon from "../../assets/noteIcon.svg"
import { useEffect, useState } from "react"

const PORT = process.env.PORT

const Modal=({isModalOpen,setIsModalOpen,}: {isModalOpen: boolean,setIsModalOpen: (value: boolean) => void})=>{
    const [addressText,setAddressText] = useState("")
    const [aptText,setAptText] = useState("")
    const [phone,setPhone] = useState("")
    const [notes,setNotes] = useState("")
    const [response,setResponse] = useState("")

    useEffect(()=>{
        //TODO if response includes error display error
        if(response){
            console.log("response:",response)
        }
    },[response])

    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault()
        try{
            const postData = {address:addressText,apt:aptText,phone:phone,note:notes}
            const res = await fetch(`http://localhost:${PORT}}/submit`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(postData)
            })
            const resData = await res.json()
            if(resData.message=="Empty"){
                new Error("Empty Response")
            }else{
            setResponse(resData.message) 
            setIsModalOpen(false)
            //TODO fetch new data to display
            }
        }catch{
            setResponse("Error Getting Data")
        }
    }

    if(isModalOpen){
    return(
        <>
            <div className="background"/>
            <div className="modal">
                <div className="modal__header">
                    <span className="title">Add Task</span>
                    <button className="close" onClick={()=>{setIsModalOpen(false)}}>X</button>
                </div>
                <form className="modal__form" onSubmit={(e:React.FormEvent)=>{
                            handleSubmit(e)
                        }}>
                    <Input placeholder="Address" onChange={setAddressText} icon={addressIcon} state={true} error={false}/>
                    <Input placeholder="Apartment" onChange={setAptText} icon={aptIcon} state={true} error={false}/>
                    <Input placeholder="Phone Number" onChange={setPhone} icon={phoneIcon} state={true} error={false}/>
                    {/* <Dropdown placeholder="Status" state={true} error={false}/> */}
                    <Input placeholder="Notes"onChange={setNotes} icon={noteIcon} state={true} error={false}/>
                        {response? <p>{response}</p>:""}
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )}
}
export default Modal