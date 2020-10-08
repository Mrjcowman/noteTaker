const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
// ================================================================

app.get("/notes", (req, res)=>{
    res.sendFile(__dirname+"/public/assets/notes.html");
});

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/public/assets/index.html");
});

app.get("/api/notes", (req, res)=>{
    // TODO: implement note get
});

app.post("/api/notes", (req, res)=>{
    // TODO: implement note post
})

app.delete("/api/notes/:id", (req, res)=>{
    let id = req.params.id;
    // TODO: implement note deletion
})