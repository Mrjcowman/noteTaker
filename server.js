const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname+"/public"));

// ROUTES
// ================================================================

// Get routes
app.get("/notes", (req, res)=>{
    res.sendFile(__dirname+"/public/notes.html");
});

// Responds with the json of notes from db.json
app.get("/api/notes", (req, res)=>{
    console.log("Getting notes!");
    fs.readFile(__dirname+"/db/db.json", (err, data)=>{
        if(err) throw err;
        console.log(JSON.parse(data));
        res.send(JSON.parse(data));
    })
});

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

// Post routes
app.post("/api/notes", (req, res)=>{
    // TODO: implement note post
    console.log("Posting a new note!");
})

// Delete routes
app.delete("/api/notes/:id", (req, res)=>{
    let id = req.params.id;
    // TODO: implement note deletion
    console.log("Deleting a note with ID: "+id);
})

// Start Server
// ================================================================
app.listen(PORT, ()=>{
    console.log("Server listening on: http://localhost:"+PORT);
})