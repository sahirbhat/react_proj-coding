import React, { useEffect, useState } from 'react'
import Cards from './Cards'




const Data = (props) => {
    const [users,Setusers]=useState([])
    const getdata= async()=>{
        const response= await fetch ('https://63750d5208104a9c5f90ff72.mockapi.io/crudapi1');
        Setusers (await response.json())
    }
   
    useEffect(()=>{
        getdata();
    },[])

  return (
    <div>
      {
                  users.map((e,index)=>{
                    if(e.col==="1"){
                      return<Cards  title = {e.title} desc={e.desc} col={e.col} id={e.id}/>
                    }

                  
                    return 


                     
                   })
          }

      
      
      
    </div>
  )
}

export default Data

