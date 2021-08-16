const mssql=require("mssql")

const config={
    options: {
        trustServerCertificate: true,
        encrypt:true       
    },
    user:"sa",
    password:"najarp@1977",
    server:"183.82.32.76",
    database:'Radiant'    
}

module.exports=config;