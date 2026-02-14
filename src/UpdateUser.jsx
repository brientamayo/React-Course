import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(newName.trim() !== '') {
            updateUser(newName);
            setNewName('');
        }
    }
  return (
    <div>
      <h1 className="text-slate-800 font-bold">Update User Name</h1>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            className="border p-2 mr-2 rounded-md"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new name"/>
        <button 
            className="text-white p-2 bg-emerald-500 cursor-pointer rounded-md"
            type="submit">
            Submit
        </button>
      </form>
      
    </div>
  )
}

export default UpdateUser
