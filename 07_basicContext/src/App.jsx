import UserContext from "./Context/userContext"
import UserContextProvider from "./Context/UserContextProvider"
import Login from "./Components/Login"
import Profile from "./Components/Profile"

function App() {

  return (
    <UserContextProvider>
       <h1 className="text-center font-bold text-xl">Hello Context</h1>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
