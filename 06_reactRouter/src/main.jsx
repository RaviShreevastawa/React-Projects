import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/ContactUs'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
import SignIn from './components/Sign-In/SignIn'
/*const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>
      }, 
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      }
    ]
  }
])*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:Userid' element={<User/>}/>
      <Route path='login' element={<SignIn/>}/>
      <Route 
      loader ={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
