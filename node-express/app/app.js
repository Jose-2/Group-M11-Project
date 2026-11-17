const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8000;
const filePath = path.join(__dirname,'public','Index.html')

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.get('/', (req, res) => {
    //res.render('start', { name: 'User' });
    res.sendFile('Index.html', (err)=>{
    if (err)
        console.log(err);
   })
});

app.post("/contact", (req,res)=>{
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    res.json({email:email});
    //res.send(`Response from the Server: Hello ${name}, thank
       // you for your message!, we will contact you at ${email}`)
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});