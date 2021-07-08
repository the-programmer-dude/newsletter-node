const express = require("express")
const router = express.Router()

const mailchimp = require("./mailchimp")
const { id } = require("./credentials.json")

const path = require("path")

router.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/html/index.html"))
})

router.post("/", async (req, res) => {
    const {name, surname, email} = req.body;

    const data = {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: name, 
            LNAME: surname
        }
    }

    try{
        await mailchimp.lists.addListMember(id, data)
        
        return res.sendFile(path.join(__dirname, "../public/html/success.html"))
    }catch(err){
        console.error(err)

        return res.status(500).sendFile(path.join(__dirname, "../public/html/error.html"))
    }
})

module.exports = router