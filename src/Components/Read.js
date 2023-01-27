import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
    const [apiData, setApidata] = useState([])

    const getData = () => {
        axios.get('https://63d3bb03a93a149755b16422.mockapi.io/practices')
            .then((response) => {
                setApidata(response.data);
            })
    }

    const handelDelete = (id) => {
        axios.delete(`https://63d3bb03a93a149755b16422.mockapi.io/practices/${id}`)
            .then(() => {
                getData();
            });
    }

    useEffect(() => {
        getData();
    }, [])




    const setDataToStorage = (id, name , email, phone) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
    }



    return (
        <div className='mt-8'>


            <div className='container'>

                <div className='my-4'>
                    <Link to='/'>
                        <button type='button' className='btn btn-outline-primary'>
                            Create Form </button>
                    </Link>
                </div>

                <div className=' row' >
                    <div className='col-md-12'>
                        <table className='table table-bordered table-striped table-dark table-hover rounded'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    apiData.map((item) => {
                                        return (

                                            <>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.e_name}</td>
                                                    <td>{item.e_email}</td>
                                                    <td>{item.e_phone}</td>
                                                    <td>

                                                        <Link to='/update'>
                                                            <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_email, item.e_phone)}>Edit</button>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => handelDelete(item.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </>


                                        )



                                    })







                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Read