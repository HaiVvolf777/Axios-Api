import  Axios  from 'axios';
import { React, useState, useEffect} from 'react'

const baseUrl= 'https://jsonplaceholder.typicode.com/posts';

const GetAxios = () => {
 const [my_data,setData] = useState([]);


  useEffect(() => {
    Axios.get(baseUrl).then((response) => {
      setData(response.data)
    });

  }, []);
  return (

    <>
  {/*
    <div className='container'>
    <h1>{my_data.id}</h1>
     <h2>{my_data.title}</h2>
     <h3>{my_data.body}</h3>
      
    </div>

  */}


    <div>
    {
      my_data.map((items) =>{
        const { id, title , body} = items;

        return(
          <div>
          <h1>{id}</h1>
          <h2>{title}</h2>
          <h3>{body}</h3>
          </div>
        )

      })
    }
    
    </div>

    </>
  )
}

export default GetAxios
