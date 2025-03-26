//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
//Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
//Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.



//importazione e invocazione express e definizione porta
const express = require("express");
const app = express();
const port = 3000;

//definizione rotta /
app.get("/" , (req,res) => {
    res.send("Server del mio blog")
});

//definizione rotta /bacheca
app.get("/bacheca" , (req,res) => {

    const post=[

        {
            titolo: "ciambellone",
            contenuto: "ciambella con zucchero",
            immagine: "http://localhost:3000/images/ciambellone.jpeg",
            tags: ["piatto" , "zucchero"]
        },
        {
            titolo: "craker",
            contenuto: "tagliere con crakers",
            immagine: "http://localhost:3000/images/cracker_barbabietola.jpeg",
            tags: ["craker" , "barbabietola"]
        },
        {
            titolo: "panefritto",
            contenuto: "piatto con pan fritto",
            immagine: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
            tags: ["piatto" , "panfritto"]
        },
        {
            titolo: "pasta",
            contenuto: "piatto di pasta",
            immagine: "http://localhost:3000/images/pasta_barbabietola.jpeg",
            tags: ["piatto" , "pasta"]
        },
        {
            titolo: "torta",
            contenuto: "torta su portatorte",
            immagine: "http://localhost:3000/images/torta_paesana.jpeg",
            tags: ["portatorta" , "torta"]
        },

    ]

    res.json(post);

});



// avvio server su porta 3000
app.listen(port, () => {
    console.log(`app in ascolto sulla porta `+port)
})
