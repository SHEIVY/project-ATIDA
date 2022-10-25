function Customer({firstName, lastName, dateOfBirth, email,city,street,streetNumber,custId, phone,telephon,vaccinationDate1,vaccinationDate2,vaccinationDate3,vaccinationDate4,manufacturer,positiveResult,negativeResult}){
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <p>שם לקוח: {firstName} {lastName}</p>
            <p>תאריך לידה: {dateOfBirth}</p>
            <p>כתובת דואר אלקטרוני: {email}</p>
            <p>כתובת מגורים:{street} {streetNumber} {city}</p>  
            <p>תעודת זהות: {custId}</p>
            <p>מספר פלאפון: {phone}</p>
            <p>מספר טלפון: {telephon}</p>
            <label>מידע על חיסונים:</label>
          
                <p>חיסון ראשון: {vaccinationDate1}</p>     
                <p>חיסון שני: {vaccinationDate2}</p>     
                <p>חיסון שלישי:  {vaccinationDate3}</p>     
                <p>חיסון רביעי:  {vaccinationDate4}</p>          
                
        
            <p>יצרן חיסון:  {manufacturer}</p>     
            <p>תאריך קבלת תשובה חיובית: {positiveResult}</p>
            <p>תאריך קבלה תשובה שלילית: {negativeResult}</p>
        </div>
    )
    
}

export default Customer