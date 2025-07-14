// import SearchIcon from "../../../assets/searchIcon.svg"
const ModalInput = ({ onChange, placeholder, icon, state, error }:{  
    onChange: (value: string) => void;
    placeholder: string;
    icon?: string;
    state: boolean;
    error: boolean;})=>{

    if(state){
        console.log()
    }
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
                <input onChange={(e)=>onChange(e.target.value)} placeholder={placeholder}/>
            </div>
            {error ? displayError() : <></>}
        </div>
    )
}
export default ModalInput