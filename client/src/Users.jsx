import {useState} from "react";

function Users() {
    const [users, setUsers] = useState([{
        Name: "rashi", Email: "rashivishnoi30@gmail.com", Age: 23 
    }])
    return (
        <div>
        <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
            users.map((user) => {
                <tr>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Age}</td>
                    <td><button>Edit</button><button>Delete</button></td>
                </tr>
            })
        }
        </tbody>
        </table>
        </div>
    )
}

export default Users;