const express = require("express")
const app = express()
const Server = require("http").createServer(app)
const path = require("path")

// set the front end as static 
const static_path = "src"
app.use(express.static(path.join(__dirname, static_path)))

// 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, static_path, "index.html"))
})

/// all route set to the index.html file
app.get('*', (req, res) => {
    res.redirect('/')
})

// start the server
const PORT = process.env.PORT || 5000
Server.listen(PORT, () => {
    console.log(`Server listing on port ${PORT}`)
})