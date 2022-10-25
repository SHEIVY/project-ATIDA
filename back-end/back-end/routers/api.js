const router = require('express').Router()
const mongoose = require('mongoose');
const db = mongoose.connection;
const customer_model = require('../models/HMOcustomer')
//to add customer
router.post('/addCustomer', (req, res) => {
    console.log("in add")
    const customer = req.body
    let c = new customer_model(customer)
    console.log("in api-server side")
    console.log(c)
    c.save()
    res.send('save secssfully')
})

router.get('/getCustomer/:customerId', async (req, res) => {
    const custumerId = req.params.customerId;
    try {
        const response = await customer_model.findOne({ 'custID': custumerId });
        if (response) {
            console.log(response)
            return res.json({ success: true, data: response });
        }

        return res.json({ success: false, data: 'not found' });
    } catch (error) {
        return res.json({ success: false, error });
    }

})
router.get('/updateDETAILS/:customerId', async (req, res) => {
    console.log("to-update this object")
    const custumerId_update = req.params.customerId;
    try {
        const response = await customer_model.findOne({ 'custID': custumerId_update });
        if (response) {
            return res.json({ success: true, data: response });
        }

        return res.json({ success: false, data: 'not found' });
    } catch (error) {
        return res.json({ success: false, error });
    }

})
router.post('/updateDetails', async (req, res) => {
    console.log("to-update this object")
    const customer1 = req.body
    let co = new customer_model()
    co.firstName = customer1.firstName;
    co.lastName = customer1.lastName;
    co.email = customer1.email;
    co.city = customer1.city;
    co.street = customer1.street;
    co.streetNumber = customer1.streetNumber;
    co.dateOFbirth = customer1.dateOFbirth;
    co.custID = customer1.custID;
    co.telephon = customer1.telephon;
    co.pelephon = customer1.pelephon;
    try {
        const response = await (await customer_model.findOne({ 'custID': customer1.idToUpdate }));
        //   let query={'custID' : customer1.idToUpdate}
        if (response) {
            co.firstName = customer1.firstName;
            co.lastName = customer1.lastName;
            co.email = customer1.email;
            co.city = customer1.city;
            co.street = customer1.street;
            co.streetNumber = customer1.streetNumber;
            co.dateOFbirth = customer1.dateOFbirth;
            co.custID = customer1.custID;
            co.telephon = customer1.telephon;
            co.pelephon = customer1.pelephon;
            await customer_model.updateOne({ 'custID': customer1.idToUpdate }, co)
            return res.json({ success: true, data: response });
        }
        else {
            console.log("no response at updatecust line 66 api page")
        }
    } catch (error) {
        return res.json({ success: false, error });
    }

})


router.post('/updateCustomer', (req, res) => {
    const obj = req.body
    console.log(obj.idToUpdate)
    // ,dateOfBirth:obj.dateOfBirth,telephon:obj.telephon1,pelephon:obj.pelephon1

    // theVaccination:{
    //     vaccinationDate:[vaccinationDate1,vaccinationDate2,vaccinationDate3,vaccinationDate4],
    //     manufacturer:manufacturer ,
    //     positiveResult:positiveResult,
    //     negativeResult:negativeResult
    //     ,{[obj.vaccinationDate1,obj.vaccinationDate2,obj.vaccinationDate3,obj.vaccinationDate4]}
    customer_model.updateOne({ custID: obj.idToUpdate }, { firstName: obj.firstName, lastName: obj.lastName, email: obj.email, city: obj.city, street: obj.street, streetNumber: obj.streetNumber, dateOfBirth: obj.dateOfBirth, custId: obj.custId, telephon: obj.telephon, pelephon: obj.pelephon }, (err, data) => {
        if (err) {
            console.log("there is eror")
            throw err
        }
        console.log("good")
        console.log(data)
        res.send('succced')

    })


})

router.get('/getCUSTlist', async (req, res) => {
    try {
        const response = await customer_model.find({}, { firstName: 1, lastName: 1, custID: 1 });
        return res.json({ success: true, data: response });
    } catch (error) {
        return res.json({ success: false, error });
    }
});
router.delete('/deleteCust/:customerId', async (req, res) => {
    const custumerId3 = req.params.customerId
    console.log(custumerId3)
    let obj1 = { custID: custumerId3 }
    console.log(obj1)


    try {
        await db.collection("customers").deleteOne(obj1)


        return db.collection("customers")
        db.close();

    } catch (error) {
        throw error
    }
});

module.exports = router
