//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
//Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
//Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.



//importazione e invocazione express e definizione porta
const express = require("express");
const app = express();
const port = 3000;

//import data.js
const post = require("./data.js");

//configurazione asset
app.use(express.static('public'));

//definizione rotta /
app.get("/" , (req,res) => {
    res.send("Server del mio blog")
});

//definizione rotta /bacheca
app.get("/bacheca" , (req,res) => {
    res.json(post);
});



// avvio server su porta 3000
app.listen(port, () => {
    console.log(`app in ascolto sulla porta `+port)
})
