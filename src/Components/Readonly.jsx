import React from 'react'

function Readonly({items,handleEditClick}) {
    return (
        <tr>
                       
                        <td>{items.fullName}</td>
                        <td>{items.address}</td>
                        <td>{items.phoneNumber}</td>
                        <td>{items.email}</td>
                        <td><button type="button" onClick={(event)=>handleEditClick(event,items)}>edit</button></td>
        </tr>
    )
}

export default Readonly

