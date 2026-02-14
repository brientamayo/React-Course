import UserProfile from "./UserProfile"
import {UserProvider} from './UserContext'
import UpdateUser from "./UpdateUser"
function App() {

  return (
    <div>
      <UserProvider>
        <UserProfile/>
        <UpdateUser/>
      </UserProvider>
    </div>

  )
}

export default App
