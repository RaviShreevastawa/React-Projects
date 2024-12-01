import React, { useState , useContext} from 'react'
import UserContext from '../Context/userContext'

function Login() {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    
    }
  return (
    <div className='bg-slate-600 m-5 p-5 item-center w-56 rounded-md shadow-slate-800 shadow-md'>
      <h2>Login</h2>
      <input 
      className='mt-5'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text" 
      placeholder='username' />
      <br/>
      <input 
      className='mt-5 shadow-md shadow-gray-800'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="text" 
      placeholder='password' />
      <br/>
      <button 
      className='bg-red-400 p-1 mt-5 rounded-md hover:bg-red-800'
      onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
