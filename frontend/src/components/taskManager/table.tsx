import "./table.scss"

const tableComponent = ()=>{
    const Row = ({Address,Apt,PhoneNumber,Notes,Status,CreationDate}: any)=>{
        return(
            <tr>
                <td>{Address}</td>
                <td>{Apt}</td>
                <td>{PhoneNumber}</td>
                <td>{Notes}</td>
                <td>{Status}</td>
                <td>{CreationDate}</td>
                {/* last 2 elements are buttons to edit and delete the data */}
                <td>
                    <button>edit</button>
                </td>
                <td>
                    <button>delete</button>
                </td>                                  
            </tr>
        )
    }
    return(
        <>
            <table className="table">
                <thead>
                    <tr className="table__header">
                        <th>Address</th>
                        <th>Apt</th>

                        <th>Number</th>
                        <th>Notes</th>
                        <th>Status</th>

                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO for loop for each entry in a tr */}
                    <Row Address="test" Apt="test" PhoneNumber="123" Notes="test" Status="open" CreationDate="test"/>
                </tbody>
            </table>
        </>
    )
}
export default tableComponent