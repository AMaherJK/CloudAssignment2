const express = require('express');
const connectDB = require('./db')
const People = require('./people');
const app = express();
app.use(express.json());
connectDB();



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  // Define a route that serves the about page
  app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
  });
  
  // Define a route that serves the contact page
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
  });
  
  // Serve static files from the public directory
  app.use(express.static(__dirname));

app.get('/people', async (req, res) => {
    try {
        const people = await People.find();
        res.json(people);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

function get(){
    var id=document.getElementById("ID");   
    app.get('/people/:id', async (req, res) => {   
        try {
            const people = await People.findById(id);
            if (!people) throw new Error('404');
            res.json(people);
            document.getElementById("p_id")=people.id;
            document.getElementById("p_name")=people.name;
            document.getElementById("p_age")=people.age;
            document.getElementById("p_email")=people.emailadress;
            document.getElementById("p_gender")=people.gender;        
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });

}
function create(){
    var name=document.getElementById("name");
    var age=document.getElementById("age");
    var gender=document.getElementById("gender");
    var emailadress=document.getElementById("Email");
    app.post('/people', async (req, res) => {     
        try {
            const people = new People({ name, age, gender, emailadress });
            await people.save();
            res.json({ success: true });
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
function update(){
    var name=document.getElementById("name");
    var age=document.getElementById("age");
    var gender=document.getElementById("gender");
    var emailadress=document.getElementById("Email");
    const Uppeople = new People({ name, age, gender, emailadress });

    app.put('/people/:id', async (req, res) => {      
        try {
            const people = await People.findByIdAndUpdate(document.getElementById("ID"), Uppeople, { new: true });
            if (!people) throw new Error('404');
            res.json({ success: true });
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
function discard(){
    app.delete('/people/:id', async (req, res) => {      
        try {
            const people = await People.findByIdAndDelete(document.getElementById("ID"));
            if (!people) throw new Error('404');
            res.json({ success: true });
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}

const port = 8000;
app.listen(port, () => {
    console.log("API server started on port 8000");
})