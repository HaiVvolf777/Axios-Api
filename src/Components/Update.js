import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const navigate =  useNavigate();

    const [ id , setId] = useState(0);
    const [ name , setName] = useState('');
    const [ email , setEmail] = useState('');
    const [ phone , setPhone] = useState('');

    useEffect(() => {
     setId(localStorage.getItem('id'));
     setName(localStorage.getItem('name'));
     setEmail(localStorage.getItem('email'));
     setPhone(localStorage.getItem('phone'));
    }, [])
    

    const handelUpdate =  (e) => {
        e.preventDefault();
        axios.put(`https://63d3bb03a93a149755b16422.mockapi.io/practices/${id}`, {
            e_name: name,
            e_email: email,
            e_phone: phone
        }).then(() => {
            navigate('/read')

        })
    }




    return (
        <div>
            <div className='px-80'>

            <div className='flex justify-center mt-16 bg-[#212529] text-white rounded-t-lg  py-10 items-center '>
                    <h1 className='text-xl text-center font-bold uppercase'> Update Form</h1>
                </div>

                <div className='flex justify-center py-8  border-[1px] bg-white  '>

              

                    <form  onSubmit={handelUpdate}>

                        <div className='flex flex-col items-start py-2 gap-x-4'>
                            <label for="name" className='text-[18px] py-2 font-semibold'>Full Name:</label>
                            <input type="text"  name="name" placeholder='Full Name' 
                            value={name} onChange={(e)=> setName(e.target.value)}
                            className='border-[1px] border-black rounded-lg h-8 outline-none px-4' />

                        </div>

                        <div className='flex flex-col items-start py-2 gap-x-4'>
                            <label for="email" className='text-[18px] py-2 font-semibold'>Email:</label>
                            <input type="text"  name="email"  placeholder='Email' 
                            value={email} onChange={(e)=> setEmail(e.target.value)}
                            className='border-[1px] border-black rounded-lg h-8 outline-none px-4' />
                        </div>

                        <div className='flex flex-col items-start py-2 gap-x-4'>
                            <label for="phone" className='text-[18px] py-2 font-semibold'>Phone:</label>
                            <input type="number"  name="phone"  placeholder='+92-3171466044'
                             value={phone} onChange={(e)=> setPhone(e.target.value)}
                            className='border-[1px] border-black rounded-lg h-8 outline-none px-4' />
                        </div>

                        <div className='flex justify-center mt-10'>

                            <input type="submit" value="Submit" className='border-[#2C3034] font-semibold border-[1px] bg-black text-white hover:bg-white hover:text-black hover:font-semibold px-3 py-2  rounded-lg' />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Update