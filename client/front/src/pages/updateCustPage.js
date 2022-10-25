import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Customer from '../components/customer'
import UpdateDetails from './updateDetails'
import { Link } from "react-router-dom";

export default function UpdateCustPage() {



    const [isLoading, setIsLoading] = useState(true)
    const [customer, setCustomer] = useState(null)
    const [error, setError] = useState(null);
    const params = useParams()
    // console.log({params})

    useEffect(() => {
        getDataFromDb()
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

    return (<>{customer ?
        <Customer
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
            vaccinationDate1={ customer.theVaccination.vaccinationDate[0]}
            vaccinationDate2={ customer.theVaccination.vaccinationDate[1]}
            vaccinationDate3={ customer.theVaccination.vaccinationDate[2]}
            vaccinationDate4={ customer.theVaccination.vaccinationDate[3]}
            manufacturer={customer.theVaccination.manufacturer }
            positiveResult={ customer.theVaccination.positiveResult }
            negativeResult= { customer.theVaccination.negativeResult }
        />
        : error ?? 'No data...'} 
         <Link to={`/updateDetails/${customer.custID}`}>
                  to update
                    </Link>
        <input type="button" placeholder="update details" onClick></input> </>)
}
