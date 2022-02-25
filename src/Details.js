import React, { useState } from "react";
import { useEffect } from "react";

function Details() {
  const [user, setuser] = useState({
    firstname:"",lastname:""
  })
  const[users,setusers]=useState({
    firstname:"",lastname:""
  })

  const add=()=>{
    if(!user){

    }
    else{
      setusers([...users,setuser]);
      setuser('')

    }
  }
  useEffect(()=>{
localStorage.setItem('user',JSON.stringify(users))
  },[users])
  
let name,value;
  const handleInput=(e)=>{
name=e.target.name;
value=e.target.value;
setuser({...user, [name]:value})
  }


  
  return (
    <div className="details">
      <div>
        <h1>Assignment 2</h1>
        <h1>Details</h1>
      </div>
      <div>
        <label>First Name</label>
        <input
          type="text" name="firstname"
          value={user.firstname} onChange={handleInput}
         
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text" name="lastname"
          value={user.lastname} onChange={handleInput}
         
        />
      </div>
      <div>
        <button >Submit</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
