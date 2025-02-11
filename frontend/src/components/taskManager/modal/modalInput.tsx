import SearchIcon from "../../../assets/searchIcon.svg"
const ModalInput = ({placeholder,icon, state, error}:any)=>{
    return (
        <div className="modal__input">
            <label>{placeholder}</label>
            <img src={SearchIcon}/>
            <div>
                    
            </div>
        </div>
    )
}
export default ModalInput