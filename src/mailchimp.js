const mailchimp = require("@mailchimp/mailchimp_marketing")

mailchimp.setConfig({
    apiKey: "86b8c1cef0aba53c9fead5e61140926f-us6",
    server: "us6"
})

module.exports = mailchimp