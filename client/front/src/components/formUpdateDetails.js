import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router"
import './style.css';
// ({firstName, lastName, email,city,street,streetNumber,dateOFbirth,custID, pelephon,telephon })
function FormUpdateDetails({firstName, lastName, email,city,street,streetNumber,dateOFbirth,custID, pelephon,telephon,vaccinationDate1,vaccinationDate2,vaccinationDate3,vaccinationDate4,manufacturer,positiveResult,negativeResult }){
    let data=[];
    let   [idToUpdate, setIdToUpdate] = useState(custID);
    const [firstName1, setFirstName] = useState(lastName);
    const [lastName1, setLastName] = useState(firstName);
    const [email1, setEmail] = useState(email);
    const [city1, setCity] = useState(city);
    const [street1, setStreet] = useState(street);
    const [streetNumber1, setStreetNumber] = useState(streetNumber);
    const [dateOFbirth1, setDateOFbirth] = useState(dateOFbirth);
    const [custID1, setCustID] = useState(custID);
    const [pelephon1, setPelephon] = useState(pelephon);
    const [telephon1, setTelephon] = useState(telephon);
    const [vaccinationDate1_, setVaccinationDate1] = useState(vaccinationDate1);
    const [vaccinationDate2_, setVaccinationDate2] = useState(vaccinationDate2);
    const [vaccinationDate3_, setVaccinationDate3] = useState(vaccinationDate3);
    const [vaccinationDate4_, setVaccinationDate4] = useState(vaccinationDate4);
    const [manufacturer1, setManufacturer] = useState(manufacturer);
    const [positiveResult1, setPositiveResult] = useState(positiveResult);
    const [negativeResult1, setNegativeResult] = useState(negativeResult);
    const params = useParams()
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if (id === "idToUpdate") {
            setIdToUpdate(value);
        }

        if (id === "firstName1") {
            setFirstName(value);
        }
        if (id === "lastName1") {
            setLastName(value);
        }
        if (id === "email1") {
            setEmail(value);
        }
        if (id === "city1") {
            setCity(value);
        }
        if (id === "street1") {
            setStreet(value);
        }
        if (id === "streetNumber1") {
            setStreetNumber(value);
        }
        if (id === "dateOFbirth1") {
            setDateOFbirth(value);
        }
        if (id === "custID1") {
            setCustID(value);
        }
        if (id === "pelephon1") {
            setPelephon(value);
        }
        if (id === "telephon1") {
            setTelephon(value);

        }
        if (id === "vaccinationDate1_") {
            setVaccinationDate1(value);
        }
        if (id === "vaccinationDate2_") {
            setVaccinationDate2(value);
        }
        if (id === "vaccinationDate3_") {
            setVaccinationDate3(value);
        }
        if (id === "vaccinationDate4_") {
            setVaccinationDate4(value);
        }
        if (id === "manufacturer1") {
            setManufacturer(value);
        }
        if (id === "positiveResult1") {
            setPositiveResult(value);
        }
        if (id === "negativeResult1") {
            setNegativeResult(value);
        }

    }
    const handleSubmit  = () => {
        //  console.log(firstName,lastName,email,city,street,streetNumber,dateOFbirth,custID,pelephon);
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
            theVaccination:{
            vaccinationDate:[vaccinationDate1,vaccinationDate2,vaccinationDate3,vaccinationDate4],
            manufacturer:manufacturer ,
            positiveResult:positiveResult,
            negativeResult:negativeResult
            }
        }
          console.log("the cust")
          console.log(cust)
          axios.post('http://localhost:3000/api/updateCustomer',cust).then(() => {
  
                  }).catch(() => {
                     console.log("Something went wrong. Plase try again later");
                 });
      }
   
    return (

        <div className="form">
        <div className="form-body" >
        <div className="username">
                <label className="form__label" for="firstName">ת.ז שהוזנה </label>
                <input className="form__input" type="text" value={idToUpdate} onChange={(e) => handleInputChange(e)} id="idToUpdate" placeholder="מספר תעודת זהות שעבורה מתבקש השינוי" />
            </div>
            <div className="username">
                    <label className="form__label" for="firstName">שם פרטי </label>
                    <input className="form__input" type="text" value={firstName1} onChange={(e) => handleInputChange(e)} id="firstName1" placeholder="שם פרטי" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">שם משפחה </label>
                    <input type="text"  id="lastName1" value={lastName1} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="שם משפחה" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">כתובת מייל </label>
                    <input type="email" id="email1" className="form__input" value={email1} onChange={(e) => handleInputChange(e)} placeholder="כתובת מייל" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">עיר </label>
                    <input type="text" id="city1" className="form__input" value={city1} onChange={(e) => handleInputChange(e)} placeholder="עיר" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">רחוב </label>
                    <input type="text" id="street1" className="form__input" value={street1} onChange={(e) => handleInputChange(e)} placeholder="רחוב" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">מספר בית </label>
                    <input type="number" id="streetNumber1" className="form__input" value={streetNumber1} onChange={(e) => handleInputChange(e)} placeholder="מספר בית" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">תאריך לידה </label>
                    <input type="date" id="dateOFbirth1" className="form__input" value={dateOFbirth1} onChange={(e) => handleInputChange(e)} placeholder="תאריך לידה" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">תעודת זהות</label>
                    <input className="form__input" type="text" id="custID1" value={custID1} onChange={(e) => handleInputChange(e)} placeholder="תעודת זהות" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">מספר פלאפון </label>
                    <input className="form__input" type="tel" id="pelephon1" value={pelephon1} onChange={(e) => handleInputChange(e)} placeholder="פלאפון" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">מספר טלפון </label>
                    <input className="form__input" type="tel" id="telephon1" value={telephon1} onChange={(e) => handleInputChange(e)} placeholder="טלפון" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword"> תאריך חיסון ראשון</label>
                    <input className="form__input" type="date" id="vaccinationDate1_" value={vaccinationDate1_} onChange={(e) => handleInputChange(e)} placeholder="חיסון ראשון" />
                    <label className="form__label" for="confirmPassword">תאריך חיסון שני</label>
                    <input className="form__input" type="date" id="vaccinationDate2_" value={vaccinationDate2_} onChange={(e) => handleInputChange(e)} placeholder="חיסון שני" />
                    <label className="form__label" for="confirmPassword">תאריך חיסון שלישי</label>
                    <input className="form__input" type="date" id="vaccinationDate3_" value={vaccinationDate3_} onChange={(e) => handleInputChange(e)} placeholder="חיסון שלישי" />
                    <label className="form__label" for="confirmPassword">תאריך חיסון רביעי </label>
                    <input className="form__input" type="date" id="vaccinationDate4_" value={vaccinationDate4_} onChange={(e) => handleInputChange(e)} placeholder="חיסון רביעי" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">יצרן  החיסון </label>
                    <input className="form__input" type="text" id="manufacturer1" value={manufacturer1} onChange={(e) => handleInputChange(e)} placeholder="יצרן חיסון" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">תאריך תשובה חיובית </label>
                    <input className="form__input" type="date" id="positiveResult1" value={positiveResult1} onChange={(e) => handleInputChange(e)} placeholder="תשובה חיובית" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">תאריך תשובה שלילית </label>
                    <input className="form__input" type="date" id="negativeResult1" value={negativeResult1} onChange={(e) => handleInputChange(e)} placeholder="תשובה שלילית" />
                </div>
            </div>
        <div class="footer">
            <button onClick={() => handleSubmit()} type="submit" class="btn">שמור שינויים</button>
        </div>

    </div>
    )
    
}

export default FormUpdateDetails