import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const {userId} = useParams()
  console.log(userId)

  const [user,setUser] = useState({})

  const fetchUser = async ()=>{
    try{
      const res = await fetch(`https://reqres.in/api/users/${userId}`)
    const data =await res.json()
    console.log(data.data)
    setUser(data.data)
    }catch(error){console.log(error)}
  }
  
  useEffect(()=>{
    fetchUser()
  },[userId])
  return (
    <div>
        <img src={user.avatar} alt="" />
        <h3>Name : {user.first_name} {user.last_name}</h3>
        <h3>Email: {user.email}</h3>
    </div>
  )
}

export default UserDetails