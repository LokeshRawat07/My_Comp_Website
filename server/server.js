const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: ["http://localhost:3000", "https://lokesh-vaibhav-photography.herokuapp.com/"]
    }))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/contact', (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send('success');
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})