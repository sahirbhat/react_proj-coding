import React, { useEffect, useState } from 'react'

import Cards2 from './Cards2'




const Data2 = (props) => {
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
                    if(e.col==="2"){
                      return<Cards2  title = {e.title} desc={e.desc} col={e.col} id={e.id}/>
                    }

                 
                    return <div></div>

                     
                   })
          }

      
      
      
    </div>
  )
}

export default Data2

