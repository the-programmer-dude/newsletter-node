const mailchimp = require("@mailchimp/mailchimp_marketing")

mailchimp.setConfig({
    apiKey: "api key here",
    server: "us6"
})

module.exports = mailchimp