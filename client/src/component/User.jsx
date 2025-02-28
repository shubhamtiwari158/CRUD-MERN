import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deleteUser/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        // Reload to reflect the deleted user
        window.location.reload()
    }

    return (
        <div className="container">
            {/* Centered and Bold Heading */}
            <h3 className="fw-bold text-center mt-5 mb-4 display-4 text-primary">
                CRUD Operation
            </h3>

            <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
                <div className='w-50 bg-white p-4 rounded shadow-lg'>
                    {/* Add User Button */}
                    <div className="d-flex justify-content-between mb-3">
                        <h4 className="fw-semibold">User List</h4>
                        <Link to='/create' className='btn btn-success'>Add +</Link>
                    </div>

                    {/* Table for Users */}
                    <table className='table table-striped text-center'>
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`/update/${user._id}`} className='btn btn-warning me-2'>Update</Link>
                                            <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
