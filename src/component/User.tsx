import React, { useState } from 'react'

type Authuser = {
    name:string,
    email:string
}

const User = () => {
    const[user,setuser]=useState<Authuser|null>(null)

    const userLogin = () =>{
       setuser({
        name:"admin",
        email:"admin@gmail.com"
       })
    }
    const userLogout = () =>{
       setuser(null)
    }
  return (
    <div>
      <button onClick={userLogin}>Login</button>
      <button onClick={userLogout}>Logout</button>
      <div>User Name is:{user?.name}</div>
      <div>User Email is:{user?.email}</div>
    </div>
  )
}

export default User
