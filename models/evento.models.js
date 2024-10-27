const mongoose = require('mongoose');

const EventosSchema = mongoose.Schema(


    {
        descripcion:{
            type: String,
            required : [true, "Descipcion de la actividad"]
        },
    
        localizacion : {
    
            type: String,
            required: true
        },
        
        fecha_inicio : {
            type : String
        },
    
        image : {
            type : String,
            required : false
        },
    
    },

    {timestamps : true}



);


const Evento = mongoose.model("Evento", EventosSchema);

module.exports = Evento;
