const mailchimp = require("@mailchimp/mailchimp_marketing")
const { apiKey } = require("./credentials.json")

mailchimp.setConfig({
    apiKey: apiKey,
    server: "us6"
})

module.exports = mailchimp