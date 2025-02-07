import "./modal.scss"
const modal=({isModalOpen, setIsModalOpen}: any)=>{
    console.log("test:",isModalOpen)
    if(isModalOpen){
    return(
        <div className="modal" id="modal">
            <button className="modal__close" onClick={()=>{setIsModalOpen(false)}}>X</button>
            <div className="modal__input">
                <form>
                    <label>Address:</label>
                    <input type="text" name="address" placeholder="Address" required /> 
                    <label>Apartment:</label>
                    <input type="text" name="apt" placeholder="Apt" required/>
                    <label>Phone Number:</label>
                    <input type="text" name="number" placeholder="Number" required/>
                    <label>Notes:</label>
                    <input type="text" name="notes" placeholder="Notes" required/>
                    <label>Status:</label>
                    <input type="text" name="status" placeholder="Status" required/>
            <div className="modal__submit">
                <button onSubmit={()=>{setIsModalOpen(false)}}>Submit</button>
            </div>
                </form>
            </div>
        </div>
    )}
}
export default modal