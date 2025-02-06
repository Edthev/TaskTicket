import "./modal.scss"
const modal=()=>{
    return(
        <div className="modal">
            <div className="modal__close"></div>
            <div className="modal__input">
                <form>
                    <label>Address:</label>
                    <input type="text" name="address" placeholder="Address" required /> 
                    <label></label>
                    <input type="text" name="apt" placeholder="apt" required/>
                    <label></label>
                    <input type="text" name="number" placeholder="number" required/>
                    <label></label>
                    <input type="text" name="notes" placeholder="notes" required/>
                    <label></label>
                    <input type="text" name="status" placeholder="status" required/>
                </form>
            </div>
            <div className="modal__submit">
                <button>Submit</button>
            </div>
        </div>
    )
}
export default modal