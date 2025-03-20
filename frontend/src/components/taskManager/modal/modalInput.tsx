// import SearchIcon from "../../../assets/searchIcon.svg"
const ModalInput = ({placeholder,icon, state, error}:any)=>{
    const displayError =()=>{
        return(
            <div className="error">
                You can't leave this field empty
            </div>
        )
    }
    return (
        <div className="input">
            <label className="label">{placeholder}</label>
            <div>
                <img className="icon" src={icon}/>
                <input placeholder={placeholder}/>
            </div>
            {error ? displayError() : <></>}
        </div>
    )
}
export default ModalInput