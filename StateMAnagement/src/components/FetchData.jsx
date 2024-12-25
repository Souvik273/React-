import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading : false ,
    err : false ,
    data : []
}

const getData = async (url)=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        return data
    }catch(error){
        throw new Error(`Something went wrong while fetching data`);
    }
}

const FetchReducer = (state,action)=>{
    switch(action.type){
        case 'LOADING':
            return {loading:true,err:false,data:[]}
        case 'FETCH':
            return {loading:false,err:false,data:action.payload}
        case 'ERROR':
            return {loading:false,err:true,data:[]}
        default:
            throw new Error(`Action type is invalid`);
    }
}

const FetchData = () => {

    const [state , dispatch] = useReducer(FetchReducer,initialState)

    const getAndUpdateData = (url)=>{
        dispatch({type:'LOADING'})
        getData(url)
        .then((res)=>dispatch({type:'FETCH',payload:res}))
        .catch(()=>dispatch({type:'ERROR'}))
    }

    useEffect(()=>{
        getAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    },[])

    const {loading , data , err} = state

  return loading ? 
    <h1>Loading Data ....</h1>:
    <div>
        {data.map((item,index)=>{
            return <p key={index}>{item.id} {item.title}</p>
        })}
    </div>
}

export default FetchData