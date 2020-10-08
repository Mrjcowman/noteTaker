const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname+"/public"));

// Routes
// ================================================================

app.get("/notes", (req, res)=>{
    res.sendFile(__dirname+"/public/notes.html");
});

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
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

// Start Server
// ================================================================
app.listen(PORT, ()=>{
    console.log("Server listening on: http://localhost:"+PORT);
})