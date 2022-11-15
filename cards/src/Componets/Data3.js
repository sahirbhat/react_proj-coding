import React, { useEffect, useState } from 'react'

import Cards3 from './Cards3'



const Data3 = (props) => {
    const [users,Setusers]=useState([])
    const getdata= async()=>{
        const response= await fetch ('http://localhost:3333/posts');
        Setusers (await response.json())
    }
   
    useEffect(()=>{
        getdata();
    },[])

  return (
    <div>
      {
                  users.map((e,index)=>{
                    if(e.col==="3"){
                      return<Cards3  title = {e.title} desc={e.desc} col={e.col} id={e.id}/>
                    }
                    return <div></div>

                  
                  })
                    
          }

      
      
      
    </div>
  )
}

export default Data3

