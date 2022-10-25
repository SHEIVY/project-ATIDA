import React, { useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router"

export default function UpdateDetails() {
    const params = useParams()


    useEffect(() => {
        deleteFromDb()
    }, [])
    
    const deleteFromDb = async () => {
        try{
        const res= await axios.delete(`http://localhost:3000/api/deleteCust/${params.customerId}`)
       // const data = await res.json()
        console.log(res)
        }catch(err) {
          console.warn(err.warn);
        };
      };
      return (<>
      <h1> הלקוח נמחק</h1>
         </>)

    }

       