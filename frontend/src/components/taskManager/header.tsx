import "./header.scss"
const taskManagerPageHeader = () =>{
    /*
    header
        tabs 
        search
        add new button (blue)
    */
    return(
        <div className="header">
            <div className="header__logo">LOGO</div>
            <h1 className="header__title">Dashboard</h1>
            <div className="header__addTaskBtn"></div>
            <button className="header__search">+ add new</button>
            <div className="header__user"></div>
        </div>
    )
}
export default taskManagerPageHeader