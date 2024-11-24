import axios from "axios";
import React, { useEffect, useState } from 'react'
//import './Table.css'

function Table() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [uname, usetName] = useState('')
    const [uemail, usetEmail] = useState('')
    const [editID, setEditId] = useState(-1) 
    useEffect(()=> {
        axios.get('http://localhost:5000/users')
        .then(res =>setData(res.data))
        .catch(er => console.log(er))
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        axios.post('http://localhost:5000/users', {id: id,name: uname, email: uemail})
            .then(res => console.log(res))
             .catch(er => console.log(er));
    }
    const handleEdit = (id) => {
        axios.get('http://localhost:5000/users'+id)
        .then(res =>{
            console.log(res.data)
            usetName(res.data.name)
            usetEmail(res.data.email)
        }).catch(er => console.log(er));
          setEditId(id)
    }
    const handleUpdate = () => {
        axios.put('http://localhost:5000/users'+editID, {id: editID, name: uname,email: uemail })
        .then(res => {
            console.log(res);
            //location.reload();
            setEditId(-1);
        }).catch(err => console.log(err));
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/users'+id)
        .then(res => {
           // location.reload();
        })
        .catch(er => console.log(er))
    }
    return(
        <div>
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="eneter name" onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)} />
                    <button>Add</button>
                </form>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>position</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index)=> (
                            user.id ===editID ?
                            <tr>
                                <td>{user.id}</td>
                                <td><input type="text" value={user.name} onChange={e => setName(e.target.value)}/></td>
                                    <td><input type="text" value={user.email} onChange={e => setEmail(e.target.value)}/></td>
                                <td><button onClick={handleUpdate}>update</button></td>
                            </tr>
                            :
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(user.id)}>edit</button>
                                    <button onClick={() => handleDelete(user.id)}>delete</button>
                                </td>
                             </tr>
    )) 
                    }
                </tbody>
            </table>

        </div>
    )
    
}

export default Table
