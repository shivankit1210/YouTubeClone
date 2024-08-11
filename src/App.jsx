import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'

function App() {
  

  return (
    <>
     <Navbar/>
     <div className='flex mt-16'>
     <Sidebar/>
     <Feed/>
     </div>
     
    </>
  )
}

export default App
