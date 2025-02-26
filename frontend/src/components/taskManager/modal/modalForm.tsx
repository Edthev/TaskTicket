import "./modalForm.scss"
import Input from "./modalInput"
import Dropdown from "./modalDropdown"
import addressIcon from "../../../assets/buildingsIcon.svg"
import aptIcon from "../../../assets/doorIcon.svg"
import phoneIcon from "../../../assets/phoneIcon.svg"
import noteIcon from "../../../assets/noteIcon.svg"

const modal=({isModalOpen, setIsModalOpen}: any)=>{
    console.log("test:",isModalOpen)
    if(isModalOpen){
    return(
        <>
            <div className="background"/>
            <div className="modal">
                <div className="modal__header">
                    <span className="title">Add Task</span>
                    <button className="close" onClick={()=>{setIsModalOpen(false)}}>X</button>
                </div>
                <form className="modal__form">
                    <Input placeholder="Address" icon={addressIcon} state={true} error={false}/>
                    <Input placeholder="Apartment" icon={aptIcon} state={true} error={false}/>
                    <Input placeholder="Phone Number" icon={phoneIcon} state={true} error={false}/>
                    {/* <Dropdown placeholder="Status" state={true} error={false}/> */}
                    <Input placeholder="Notes" icon={noteIcon} state={true} error={false}/>
                    <div className="submit">
                        <button onSubmit={()=>{setIsModalOpen(false)}}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )}
}
export default modal