import dropDown from "../../../assets/dropDownArrowIcon.svg"
import dropUp from "../../../assets/dropDownArrowUpIcon.svg"
const modalDropdown= ({placeholder,icon, state, error}:any)=>{
    return (
        <div className="modal__input">
            <label>{placeholder}</label>
            {state ? <img src={dropDown}/> : <img src={dropUp}/>}
            <div>
            </div>
        </div>
    )
}
export default modalDropdown