const express = require ('express')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Evento = require('./models/evento.models');
require('dotenv').config();


const app = express();

app.use(express.json());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



const authRoutes = require('./routes/auth');
const validaToken = require('./routes/validacion-tokens');
const admin = require('./routes/admin');



app.use('/api/user', authRoutes);
app.use('/api/admin', validaToken, admin)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});


//CONEXION A LA BASE DE DATOS 
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    
    console.log("Connected");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });

})
.catch(() => {
    console.log("Failed");
})