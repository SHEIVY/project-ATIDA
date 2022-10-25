import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../components/style.css';
import { useParams } from "react-router"
import FormUpdateDetails from '../components/formUpdateDetails'
// import UpdateDetails from './updateDetails'
import { Link } from "react-router-dom";

export default function UpdateDetails() {



    const [isLoading, setIsLoading] = useState(true)
    const [customer, setCustomer] = useState(null)
    const [error, setError] = useState(null);
    const params = useParams()
    // console.log({params})

    useEffect(() => {
        getDataToUpdate()
    }, [])
    
    const getDataToUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/updateDETAILS/${params.customerId}`)
            const data = await response.json()
            if (data.success) {
                const _customer = data.data;
                setCustomer(_customer)
            }
        } catch (error) {
            setError('Could not get customer')
        } finally {
            setIsLoading(false)
        }

    };


    if (isLoading) {
        return (<h1>Loading customer...</h1>)
    }


    return (<div>{customer ?
        <FormUpdateDetails
            firstName={customer.firstName}
            lastName={customer.lastName}
            dateOfBirth={customer.dateOFbirth}
            email={customer.email}
            city={customer.city}
            street={customer.street}
            streetNumber={customer.streetNumber}
            custId={customer.custID}
            phone={customer.pelephon}
            telephon={customer.telephon}
        />
        : error ?? 'No data...'} 
        </div>
    )
}
