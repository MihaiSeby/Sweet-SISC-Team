const express = require("express");
const cors = require("cors");
const { resetDatabase, createElement, getAllElements, getElementById, updateElement, deleteElement } = require("@sorin9125/utils-ac");
const { database, gameModel } = require("./config");
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Methods",
        "Access-Control-Request-Headers",
        "Access-Control-Allow-Origin"
    ],
    methods: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
    ]
})
);


app.get("/", (req, res) => {
    // Functiie la care aveti acces din pachetul @sorin9125/utils-ac
    // resetDatabase()
    // createElement()
    // getAllElements()
    // getElementById()
    // updateElement
    // deleteElement()
    // Daca nu stiti ce face o functie puteti sa dati hover pe ea si o sa va apara descrierea ei
    // Mult succes 🫡
    res.status(200).send("Ar trebuie sa vedeti asta in browser 😎");
})

app.get("/reset", async (req, res) => {
    await resetDatabase(database);

    let games = {
        twister: 0,
        biliard: 0,
        catan: 0,
        monopoly: 0,
        activity: 0,
        remi: 0,
        pingpong: 0,
        airhockey: 0,
        justdance: 0,
        karaoke: 0,
        sah: 0,
        foosball: 0
    }

    await createElement(gameModel, games);

    res.status(200).send("Baza creeata cu succes!");

})

app.post("/votes", async (req, res) => {
    const games = await getElementById(gameModel, 1);
    //console.log(games)
    const votes = req.body.selectedGames;
    for(var vote of votes){
        //console.log(vote);
        switch(vote){
            case "twister":
                games.twister += 1;
                break;
            case "biliard":
                games.biliard += 1;
                break;
            case "catan":
                games.catan += 1;
                break;
            case "monopoly":
                games.monopoly += 1;
                break;
            case "activity":
                games.activity += 1;
                break;
            case "remi":
                games.remi += 1;
                break;
            case "pingpong":
                games.pingpong += 1;
                break;
            case "airhockey":
                games.airhockey += 1;
                break;
            case "justdance":
                games.justdance += 1;
                break;
            case "karaoke":
                games.karaoke += 1;
                break;
            case "sah":
                games.sah += 1;
                break;
            case "foosball":
                games.foosball += 1;
                break;
            
        }
    }

    await updateElement(gameModel, games, 1);

    res.status(200).send("Voturile au fost introduse cu succes!")
})

app.get("/results", async (req, res) => {
    const games = await getElementById(gameModel, 1);

    console.log(games);

    const votes = Object.entries(games).filter(([key, value]) => {
        const exc = ["id", "createdAt","updatedAt"];
        return !exc.includes(key);
    });

    votes.sort((a, b) => b[1] - a[1]);



    res.status(200).send(votes.slice(0,6));
})

app.listen(1234, () => {
    console.log("Server is running on http://localhost:1234");
})
