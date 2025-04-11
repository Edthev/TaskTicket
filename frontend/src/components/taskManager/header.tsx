import { useState } from "react"
import "./header.scss"
import Logo from "../../assets/Logo.svg"
import SearchIcon from "../../assets/searchIcon.svg"
import Modal from "./modal/modalForm"
import SettingIcon from "../../assets/settingsIcon.svg"

const taskManagerPageHeader = () =>{
    const [isModalOpen,setIsModalOpen] = useState(false)
    return(
        <div className="header">
            {/* TODO turn logo into route to home page */}
            <div className="header__logo"><img src={Logo} className="logo"/> </div>
            {/* TODO make title dynamic based on route */}
            <h1 className="header__title">Dashboard</h1>
            <button className="header__addTaskBtn" id="openModal" onClick={()=>setIsModalOpen(true)}>Add New +</button>
            {/* FIXME visual glitch with search icon */}
            <div className="header__search">
                {/* TODO make search icon a enter button */}
                <img src={SearchIcon} className="searchIcon"/>
                {/* TODO search table with fuzzy search */}
                <input placeholder="Search" className="searchInput"/>
            </div>
            <div className="header__user"></div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <button className="settings" onClick={() => console.log("test")}>
                <img src={SettingIcon}/>
            </button>
        </div>
    )
}
export default taskManagerPageHeader