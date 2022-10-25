import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';
function Addcusto() {
    let data = [];
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [street, setStreet] = useState(null);
    const [streetNumber, setStreetNumber] = useState(null);
    const [dateOFbirth, setDateOFbirth] = useState(null);
    const [custID, setCustID] = useState(null);
    const [pelephon, setPelephon] = useState(null);
    const [telephon, setTelephon] = useState(null);
    const [vaccinationDate1, setVaccinationDate1] = useState(null);
    const [vaccinationDate2, setVaccinationDate2] = useState(null);
    const [vaccinationDate3, setVaccinationDate3] = useState(null);
    const [vaccinationDate4, setVaccinationDate4] = useState(null);
    const [manufacturer, setManufacturer] = useState(null);
    const [positiveResult, setPositiveResult] = useState(null);
    const [negativeResult, setNegativeResult] = useState(null);
    // vaccinationDate
    // manufacturer 
    // positiveResult
    // negativeResult


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "city") {
            setCity(value);
        }
        if (id === "street") {
            setStreet(value);
        }
        if (id === "streetNumber") {
            setStreetNumber(value);
        }
        if (id === "dateOFbirth") {
            setDateOFbirth(value);
        }
        if (id === "custID") {
            setCustID(value);
        }
        if (id === "pelephon") {
            setPelephon(value);
        }
        if (id === "telephon") {
            setTelephon(value);

        }
        if (id === "vaccinationDate1") {
            setVaccinationDate1(value);
        }
        if (id === "vaccinationDate2") {
            setVaccinationDate2(value);
        }
        if (id === "vaccinationDate3") {
            setVaccinationDate3(value);
        }
        if (id === "vaccinationDate4") {
            setVaccinationDate4(value);
        }
        if (id === "manufacturer") {
            setManufacturer(value);
        }
        if (id === "positiveResult") {
            setPositiveResult(value);
        }
        if (id === "negativeResult") {
            setNegativeResult(value);
        }

    }
    const printCust = (data) => {
        let obj = new Object()
        obj = data
        alert(data)

    }
    const getDataFromDb = () => {
        fetch('http://localhost:3000/api/getCUSTlist')
            .then((list) => list.json())
            .then((res) => this.setState({ data: res.list }));
        console.log(data)
        //  printCust(data);
    };

    const TheCUST = () => {
        const [data, setData] = useState('');
        const getData = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/getCUSTlist`);
            setData(data);
        };
        useEffect(() => {
            getData();
        }, []);
        printCust(data)
    }
    const handleSubmit = (event) => {





        console.log(streetNumber)
        let cust = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            city: city,
            street: street,
            streetNumber: streetNumber,
            dateOFbirth: dateOFbirth,
            custID: custID,
            pelephon: pelephon,
            telephon: telephon,
            theVaccination: {
                vaccinationDate: [vaccinationDate1, vaccinationDate2, vaccinationDate3, vaccinationDate4],
                manufacturer: manufacturer,
                positiveResult: positiveResult,
                negativeResult: negativeResult
            }
        }
        console.log("the cust")
        console.log(cust)
        axios.post("http://localhost:3000/api/addCustomer", cust).then(() => {

        }).catch(() => {
            console.log("Something went wrong. Plase try again later");
        });
    }

    return (
        <div className="form">
            <div className="form-body" >
                <div className="username">
                    <label className="form__label" for="firstName">שם פרטי </label>
                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="שם פרטי" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">שם משפחה </label>
                    <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="שם משפחה" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">כתובת מייל </label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="כתובת מייל" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">עיר </label>
                    <input type="text" id="city" className="form__input" value={city} onChange={(e) => handleInputChange(e)} placeholder="עיר" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">רחוב </label>
                    <input type="text" id="street" className="form__input" value={street} onChange={(e) => handleInputChange(e)} placeholder="רחוב" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">מספר בית </label>
                    <input type="number" id="streetNumber" className="form__input" value={streetNumber} onChange={(e) => handleInputChange(e)} placeholder="מספר בית" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">תאריך לידה </label>
                    <input type="date" id="dateOFbirth" className="form__input" value={dateOFbirth} onChange={(e) => handleInputChange(e)} placeholder="תאריך לידה" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">תעודת זהות</label>
                    <input className="form__input" type="text" id="custID" value={custID} onChange={(e) => handleInputChange(e)} placeholder="תעודת זהות" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">מספר פלאפון </label>
                    <input className="form__input" type="tel" id="pelephon" value={pelephon} onChange={(e) => handleInputChange(e)} placeholder="פלאפון" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">מספר טלפון </label>
                    <input className="form__input" type="tel" id="telephon" value={telephon} onChange={(e) => handleInputChange(e)} placeholder="טלפון" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword"> תאריך חיסון ראשון</label>
                    <input className="form__input" type="date" id="vaccinationDate1" value={vaccinationDate1} onChange={(e) => handleInputChange(e)} placeholder="חיסון ראשון" />
                    <label className="form__label" for="confirmPassword">תאריך חיסון שני</label>
                    <input className="form__input" type="date" id="vaccinationDate2" value={vaccinationDate2} onChange={(e) => handleInputChange(e)} placeholder="חיסון שני" />
                    <label className="form__label" for="confirmPassword">תאריך חיסון שלישי</label>
                    <input className="form__input" type="date" id="vaccinationDate3" value={vaccinationDate3} onChange={(e) => handleInputChange(e)} placeholder="חיסון שלישי" />
                    <label className="form__label" for="confirmPassword">תאריך חיסון רביעי </label>
                    <input className="form__input" type="date" id="vaccinationDate4" value={vaccinationDate4} onChange={(e) => handleInputChange(e)} placeholder="חיסון רביעי" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">יצרן  החיסון </label>
                    <input className="form__input" type="text" id="manufacturer" value={manufacturer} onChange={(e) => handleInputChange(e)} placeholder="יצרן חיסון" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">תאריך תשובה חיובית </label>
                    <input className="form__input" type="date" id="positiveResult" value={positiveResult} onChange={(e) => handleInputChange(e)} placeholder="תשובה חיובית" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">תאריך תשובה שלילית </label>
                    <input className="form__input" type="date" id="negativeResult" value={negativeResult} onChange={(e) => handleInputChange(e)} placeholder="תשובה שלילית" />
                </div>
            </div>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn">הוסף</button>
            </div>


        </div>

    )
}

export default Addcusto