import "./header.scss"
import Logo from "../../assets/Logo.svg"
import SearchIcon from "../../assets/searchIcon.svg"
const taskManagerPageHeader = () =>{
    /*
    header
        tabs 
        search
        add new button (blue)
    */
    return(
        <div className="header">
            {/* TODO turn logo into route to home page */}
            <div className="header__logo"><img src={Logo} className="logo"/> </div>
            {/* TODO make title dynamic based on route */}
            <h1 className="header__title">Dashboard</h1>
            <button className="header__addTaskBtn">Add New +</button>
            {/* FIXME visual glitch with search icon */}
            <div className="header__search">
                {/* TODO make search icon a enter button */}
                <img src={SearchIcon} className="searchIcon"/>
                {/* TODO search table with fuzzy search */}
                <input placeholder="Search" className="searchInput"/>
            </div>
            <div className="header__user"></div>
        </div>
    )
}
export default taskManagerPageHeader