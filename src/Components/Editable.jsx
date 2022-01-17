import React from 'react'

function Editable({editFormData,handleEditFormChange,hadleCancleClick}) {
    return (
        <tr>
            <td> <input type="text" name="fullName" placeholder='Enter Fullname' value={editFormData.fullName} onChange={handleEditFormChange}/></td>
            <td> <input type="text" name="address" placeholder='Enter address'value={editFormData.address}  onChange={handleEditFormChange}/></td>
            <td> <input type="text" name="phoneNumber" placeholder='Enter phoneNumber'value={editFormData.phoneNumber}  onChange={handleEditFormChange}/></td>
            <td> <input type="text" name="email" placeholder='Enter email'value={editFormData.email}  onChange={handleEditFormChange}/></td>
            <td><button type="submit">Save</button></td>
            <td><button type="button" onClick={hadleCancleClick}>cancel</button></td>
        </tr>
    )
}

export default Editable
