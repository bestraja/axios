
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function UserList() {
    const [users,setUsers]=useState([])
    useEffect(()=>{ axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
          setUsers(response.data)
          console.log(response.data);
        })
        .catch(error=> {
        
          console.log(error);
        })})
  return (
    <div className="user-list">
            <h1>User List</h1>
            <ul>
                {users.map((e) => (
                    <li key={e.id}>
                        <h2>{e.name}</h2>
                        <p>{e.email}</p>
                        <p>{e.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default UserList