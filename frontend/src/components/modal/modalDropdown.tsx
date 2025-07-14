import dropDown from "../../../assets/dropDownArrowIcon.svg"
import dropUp from "../../../assets/dropDownArrowUpIcon.svg"
const modalDropdown= (placeholder:string,icon:string, state:boolean, error:string)=>{
    if(icon){
        console.log()
    }
    return (
        <div className="modal__input">
            <label>{placeholder}</label>
            {state ? <img src={dropDown}/> : <img src={dropUp}/>}
            <div>
                <label>{error}</label>
            </div>
        </div>
    )
}
export default modalDropdown