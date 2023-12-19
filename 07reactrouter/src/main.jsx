import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx' 
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx';
import Github, { useGitUserInfo } from './components/Github/Github.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path= 'user/:userid'  element={<User/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route 
          path='github' 
          element={<Github/>}
          loader={useGitUserInfo}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
