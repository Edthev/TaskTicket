import Header from "../../components/taskManager/header"
import Table from "../../components/taskManager/table"
const taskManagerPage = () =>{
    /*
    header
        tabs 
        search
        add new button (blue)
    */
    return(
        <>
         <Header/>
         <Table/>
        </>
    )
}
export default taskManagerPage