import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const Home = () => {
  const [users , setUsers] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  const fetchAndUpdate = async ()=>{
    setLoading(true)
    try{
      const fetchData = await fetch(`https://reqres.in/api/users`)
      const data = await fetchData.json()
      console.log(data.data)
      setUsers(data.data)
      setLoading(false)
    }catch(error){
      setError(error.message)
    }
  }

  useEffect(()=>{
    fetchAndUpdate()
  },[])

  return (
    <div>
      {loading ? <h3>Loading Data...</h3>:
        users.map((item,index)=>{
          return (
            <Link to={`/user/${item.id}`} key={index}>
              <img src={item.avatar} alt="" />
              <h3>{item.first_name} {item.last_name}</h3>
              <h3>{item.id}</h3>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Home