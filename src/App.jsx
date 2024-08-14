import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainBody from './components/MainBody'
import Watch from './components/Watch'
import Feed from './components/Feed'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainBody/>,
    children:[
      {
        path:"/watch",
        element:<Watch/>
      },
      {
      path:"/",
      element:<Feed/>
      }
    ]
  }
])

function App() {
  

  return (
    <>
     <Navbar/>
     <RouterProvider router={appRouter} />
     
    </>
  )
}

export default App
