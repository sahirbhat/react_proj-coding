import React from 'react'
import axios from "axios";
import { useState } from 'react';







const Cards = (props) => {

  const [students, setStudents] = useState([]);

  const handleDelete = async id => {
   await axios.delete(`http://localhost:3333/posts/${id}`);
    var newstudent = students.filter((item) => {
     // console.log(item);
     return item.id !== id;
    })
    setStudents(newstudent);
   }
  return (

    
      
    <div class="card">
    <div class="card-body">
    <h4 class="card-title text-info text-capitalize">{props.title}  </h4>
    <p class="card-text"> {props.desc}</p>
    
    
  </div>
  <div class="row">
    <div class="col"><button type="button" class="btn btn-outline-danger p-2 m-2" onClick={() => handleDelete(props.id)}> Delete</button></div>
    <div class="col"><button type="button" class="btn btn-outline-warning p-2 m-2"></button></div>
    
   </div>
</div>

    
  )
}

export default Cards;
