const express = require ('express');
const app = express();
app.use(express.json())
const PORT = 3001
const db = require('./models')
const postRouter = require("./routes/Posts")

app.use('/posts', postRouter)


db.sequelize.sync().then(()=> {
    app.listen (PORT, () => {
        console.log(`API server running on port ${PORT}`)
    })
})