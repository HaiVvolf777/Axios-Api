import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    
   const navigate =  useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://63d3bb03a93a149755b16422.mockapi.io/practices' , {
            e_name: name,
            e_email: email,
            e_phone: phone
        }).then( () =>{
            navigate('/read')
        })

    }


    return (
        <>

   
        <div>
            <div className='px-80'>

                <div className='flex justify-center mt-16 bg-[#212529] text-white rounded-t-lg  py-10 items-center '>
                    <h1 className='text-xl text-center font-bold uppercase'> Create Form</h1>
                </div>

                <div className='flex justify-center py-8  border-[1px] bg-white  '>



                    <form onSubmit={handleSubmit} >

                        <div className='flex flex-col items-start py-2 gap-x-4'>
                            <label for="name" className='text-[18px] py-2 font-semibold'>Full Name:</label>
                            <input type="text" name="name" placeholder='Full Name'
                                className='border-[1px] border-black rounded-lg h-8 outline-none px-4'
                                onChange={(e) => setName(e.target.value)} />

                        </div>

                        <div className='flex flex-col items-start py-2 gap-x-4'>
                            <label for="email" className='text-[18px] py-2 font-semibold'>Email:</label>
                            <input type="text" name="email" placeholder='Email'
                                className='border-[1px] border-black rounded-lg h-8 outline-none px-4'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='flex flex-col items-start py-2 gap-x-4'>
                            <label for="phone" className='text-[18px] py-2 font-semibold'>Phone:</label>
                            <input type="number" name="phone" placeholder='+92-3171466044'
                                className='border-[1px] border-black rounded-lg h-8 outline-none px-4'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className='flex justify-center mt-10'>

                            <input type="submit" value="Submit" className='border-[#2C3034] font-semibold border-[1px] bg-black text-white hover:bg-white hover:text-black hover:font-semibold px-3 py-2  rounded-lg' />
                        </div>

                    </form>

                </div>
            </div>
        

        </div>

        </>
    )
}

export default Create