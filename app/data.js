App.Data = (function(lng,app, undefined){

var config = {
    name: 'eventos_db',         //Name of the database
    version: '1.0',           //Version of the database
    size: 65536,              //Size of the database
    schema: [                 //Database schema
        {
            name: 'eventos',     //Table name
            drop: true,       //Drop existing content on init
            fields: {         //Table fields
              id:'INTEGER PRIMARY KEY AUTOINCREMENT',
              evento_tipo: "STRING",
              evento_titulo: "STRING",
              evento_url: "STRING",
              latitude: "FLOAT",
              longitude:  "FLOAT"

            }
        }
        
    ]
};  
Lungo.Data.Sql.init(config);



 var insertarEventos = function(evento){
    Lungo.Data.Sql.insert('eventos', evento);
 }

 return {
      insertarEventos: insertarEventos
   }

}) (Lungo,App);

