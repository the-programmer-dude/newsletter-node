const bodyParser = require("body-parser")
const path = require("path")

const express = require("express")
const app = express()

const routes = require("./routes")

app.use("/static", express.static(path.join(__dirname,"..", "public")))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.get("*", (req, res) => res.status(404).send("<h1>Not Found(404)</h1>"))

app.listen(process.env.PORT || 9999)