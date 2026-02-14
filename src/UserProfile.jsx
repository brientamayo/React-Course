import { useContext } from "react"
import { UserContext } from "./UserContext"
const UserProfile = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
      <h1 className="font-bold text-slate-800">My Profile</h1>
      <p className="text-slate-600">Name: {user.name}</p>
    </div>
  )
}

export default UserProfile
