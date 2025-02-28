import React, { useState } from "react";
import axios from 'axios' 
import { useNavigate } from "react-router-dom";
 
 const CreateUser = () => {
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate = useNavigate()


const Submit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/createUser',{name,email,age})
    .then(res => {
        console.log(res.data)
        navigate('/')
    })
    .catch(err => console.log(err)) 
}

  return (
    <div className=" d-flex bg-light justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Add User</h3>
        <form onSubmit={Submit}>
          <div className="mb-3">
            <label htmlFor="">Name</label>
            <input type="text" placeholder=" Enter Name" className='form-control'
             onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="text" placeholder=" Enter Email" className='form-control'
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="">Age</label>
            <input type="text" placeholder=" Enter Age" className='form-control'
            onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
