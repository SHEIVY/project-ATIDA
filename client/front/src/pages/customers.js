import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CustomersPage() {

    const [isLoading, setIsLoading] = useState(true)
    const [customers, setCustomers] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getDataFromDb()
    }, [])

    const getDataFromDb = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getCUSTlist')
            const data = await response.json()
            if (data.success) {
                const _customers = data.data;
                setCustomers(_customers)
            }
        } catch (error) {
            setError('Could not get customers')
        } finally {
            setIsLoading(false)
        }
    };



    if (isLoading) {
        return (<h1>Loading customers...</h1>)
    }

    return (<>{customers ?
        <ul>
            {customers.map((customer, index) =>
                <li key={index}>
                    <Link to={`customer/${customer.custID}`}>
                    {customer.firstName} {customer.lastName}
                    </Link>
                </li>
            )}
        </ul>
        : error ?? 'No data...'} </>)
}



// customers.map((customer, index) =>
// <Customer
//     key={index}
//     firstName={customer.firstName}
//     lastName={customer.lastName}
//     dateOfBirth={customer.dateOFbirth}
//     email={customer.email}
//     phone={customer.pelephon}
//     custId={customer.custID}
// />)