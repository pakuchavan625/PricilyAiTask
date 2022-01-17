import React,{useState,Fragment} from 'react'
import "../Styles/right.css"
import data from "../Data/sampleData.json"
import Readonly from './Readonly';
import Editable from './Editable';

function RightComponet() {
    const [contacts,setContacts]=useState(data);
    const [addFormData,setAddFormData]=useState({
        fullName:"",
        address:"",
        phoneNumber:"",
        email:""

    })

    const[editFormData,setEditFormData]=useState({
        fullName:"",
        address:"",
        phoneNumber:"",
        email:""

    })


    const [editContactId,setEditContactId]=useState(null)

    const handleFormdata=(e)=>{
    
        e.preventDefault();
        const fieldName=e.target.getAttribute("name");
        const fieldValue=e.target.value;

        const newFormData={ ...addFormData };
        newFormData[fieldName]=fieldValue;

        setAddFormData(newFormData)  

    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const newContact={
            
            fullName:addFormData.fullName,
            address:addFormData.address,
            phoneNumber:addFormData.phoneNumber,
            email:addFormData.email,
        };

        const newContacts=[...contacts,newContact]
        setContacts(newContacts)
    }

    const handleEditFormSubmit=(event)=>{
        event.preventDefault();

        const editedContact={
            id:editContactId,
            fullName:editFormData.fullName,
            address:editFormData.address,
            phoneNumber:editFormData.phoneNumber,
            email:editFormData.email,
        }

        const newContacts=[...contacts]

        const index= contacts.findIndex((contacts)=> contacts.id===editContactId);

        newContacts[index]=editedContact
        setContacts(newContacts)
        setEditContactId(null)

        
    }

    const handleEditClick=(event,contacts)=>{
        event.preventDefault();
        setEditContactId(contacts.id)
        const formValue={
            fullName:contacts.fullName,
            address:contacts.address,
            phoneNumber:contacts.phoneNumber,
            email:contacts.email,
        }

        setEditFormData(formValue)
    }
   const handleEditFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormChangeData={ ...editFormData };
    newFormChangeData[fieldName]=fieldValue;
   
    setEditFormData(newFormChangeData)

   }
   const hadleCancleClick=()=>{
    setEditContactId(null)
   }
    return (
        <div className="RightComponetContainer">
            
            <h1>Data information about employees</h1>
            <div className="table-containers">
             <form onSubmit={handleEditFormSubmit}>
            <table className="table table-dark table-striped table-size ">
               
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Adress</th>
                    <th scope="col">PhoneNumber</th>
                    <th scope="col">email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map(items=>
                    <Fragment>
                        
                        {editContactId === items.id ?<Editable editFormData={editFormData} handleEditFormChange={handleEditFormChange} hadleCancleClick={hadleCancleClick}/> :<Readonly items={items} handleEditClick={handleEditClick}/>}
                        
                        
                    </Fragment>
                        
                    )}
                   
                </tbody>
                </table>
                </form>
            </div>
            <div className="formdetail">
                <header>Add a new Contact</header>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" name="fullName" placeholder='Enter Fullname' onChange={handleFormdata}/>
                    <input type="text" name="address" placeholder='Enter address' onChange={handleFormdata} />
                    <input type="text" name="phoneNumber" placeholder='Enter phoneNumber'onChange={handleFormdata}/>
                    <input type="email" name="email"placeholder='Enter email' onChange={handleFormdata} />
                    <button type="submit" className="btn btn-outline-success mx-2">add</button>
                </form>
            </div>
            
        </div>
    )
}

export default RightComponet
