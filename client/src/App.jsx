import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './component/User'
import CreateUser from './component/CreateUser'
import UpdateUser from './component/UpdateUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
