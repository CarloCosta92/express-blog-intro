// - Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”


//importazione e invocazione express e definizione porta
const express = require("express");
const app = express();
const port = 3000;

//definizione rotta/
app.get("/" , (req,res) => {
    res.send("Server del mio blog")
})

// avvio server su porta 3000
app.listen(port, () => {
    console.log(`app in ascolto sulla porta`+port)
})
