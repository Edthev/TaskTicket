import { useEffect, useState } from "react"
import "./settingsForm.scss"
import Input from "../modal/modalInput"
export default function SettingsForm({isSettingsOpen,setIsSettingsOpen,}: {isSettingsOpen: boolean;setIsSettingsOpen: (value: boolean) => void;}){
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
            const postData = {}
            const res = await fetch("http://localhost:3000/submit",{
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
            setIsSettingsOpen(false)
            //TODO fetch new data to display
            }
        }catch{
            setResponse("Error Getting Data")
        }
    }

    if(isSettingsOpen){
    return(
        <>
            <div className="background"/>
            <div className="modal">
                <div className="modal__header">
                    <span className="title">Settings</span>
                    <button className="close" onClick={()=>{setIsSettingsOpen(false)}}>X</button>
                </div>
                <form className="modal__form" onSubmit={(e:React.FormEvent)=>{
                            handleSubmit(e)
                        }}>
                        <Input placeholder="MangoDB Collection" onChange={setResponse} state={true} error={false}/>
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}}