const routers= require("./routes/router")

const express= require("express")
const app= express()
app.use(express.json())
app.use(routers)
app.listen(process.env.PORT || 4000,()=>console.log("Server running on port 4000.."))
