const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

const user = require("./routes/user")
const card = require("./routes/card")
const checkKey = require("./middlewares/checkKey")

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(checkKey)

app.use("/api/user", user)
app.use("/api/card", card)

app.get("/", (req, res) => {
  res.send("API working")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
