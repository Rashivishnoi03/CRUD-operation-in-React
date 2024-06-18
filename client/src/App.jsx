
import {useState} from "react"
import './App.css'
import {BrowserRouter, Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update' element={<UpdateUser />}></Route>
      </Router>
    </BrowserRouter>
   </div>
  )
}

export default App
