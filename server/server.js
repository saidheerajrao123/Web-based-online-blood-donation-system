const exp = require("express")
const app = exp()
require('dotenv').config(); //process.env
const mongoose = require("mongoose")
const userApp = require("./APIs/userApi")
const cors=require('cors')

app.use(cors())

const port = process.env.PORT || 4000   
console.log(process.env.PORT)
// db connection
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    app.listen(port, () => console.log(`server listening on port ${port}.. `))
    console.log("Database connection is successful")
  })
  .catch((err) => console.log("Error in db connection ", err))

// connect API routes
app.use("/user-api", userApp)
