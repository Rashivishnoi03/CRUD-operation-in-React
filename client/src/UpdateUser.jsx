import { useParams ,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
         setName(result.data.name)
         setEmail(result.data.email)
         setAge(result.data.age)
        })
        .catch(err => console.log(err))
      }, [])

      const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })  
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1718653158025-11a5b61178d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D')`}}>
            <div className="w-50 bg-white rounded p-3">
               <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className="mb-2">
                    <label htmlFor=" ">Name</label>
                    <input type="text" placeholder="Enter Name" className="form-control"
                     value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control"
                     value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
               
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Age" className="form-control"
                     value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <button className="btn btn-success">Submit</button>
               </form>
            </div>

         </div>
    )
}

export default UpdateUser;

