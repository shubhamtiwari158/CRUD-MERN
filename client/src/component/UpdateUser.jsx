import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function UpdateUser (){
    const {id} = useParams()
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/getUSer/'+id)
            .then(res =>{ console.log(res.data)
                setName(res.data.name)
                setEmail(res.data.email)
                setAge(res.data.age)
            })
            .catch(err => console.log(err))
    
    },[])

    const Update = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:5000/updateUser/'+id,{name,email,age})
        .then(res => {
            console.log(res.data)
            navigate('/')
        })
        .catch(err => console.log(err)) 
    }

 return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Update User</h3>
        <form onSubmit={Update}>
        <div className="mb-3">
            <label htmlFor="">Name</label>
            <input type="text" placeholder=" Enter Name" className='form-control'
            value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="text" placeholder=" Enter email" className='form-control'
             value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="">Age</label>
            <input type="text" placeholder=" Enter Age" className='form-control'
             value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
