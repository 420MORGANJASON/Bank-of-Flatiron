// import { useState } from 'react'

// function EditableRow(props) {
//     const [isEditing, setIsEditing] = useState(false);
//   const [updatedData, setUpdatedData] = useState(props.data);


//   const handleUpdate = () => {
//     setIsEditing(false);
//     props.onUpdate(updatedData);
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleInputChange = (event) => {
//     const { transaction, value } = event.target.value;
//     setUpdatedData({ ...updatedData, [transaction]: value });
//   };

//   return (

//         <tr>
//       <td>{props.data.id}</td>
//       <td>{props.data.date}</td>
//       <td>{props.data.description}</td>
//        <td>{props.data.category}</td>
//         <td>{props.data.amount}</td>
//       <td>
//         {isEditing ? (
//           <>
//             <button onClick={handleUpdate}>Update</button>
//             <button onClick={() => setIsEditing(false)}>Cancel</button>
//           </>
//         ) : (
//           <>
//             <button onClick={handleEditClick}>Edit</button>
//             <button onClick={() => props.onDelete(props.data)}>Delete</button>
//           </>
//         )}
//       </td>
//     </tr>
//   );
// }
  

// export default EditableRow;
