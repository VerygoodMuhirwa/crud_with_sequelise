const sequelise= require("../config/dbConnectionPool")
const Sequelize= require("sequelize")

//defining the data schema
const Data= sequelise.define("Data",
{
ID:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    
name:{
    type:Sequelize.CHAR,
allowNull:false
},
Gender:{
    type:Sequelize.CHAR,
    allowNull:true,
    default:"Male"
},
DateOfBirth:{
    type:Sequelize.DATE,
    defaultValue:sequelise.literal("CURRENT_TIMESTAMP")
}
    

});

Data.sync({alter:true})
.then(()=>{
    console.log("Data table created successfully");
})

.catch((error)=>console.log("Error creating a table",error))

module.exports= Data