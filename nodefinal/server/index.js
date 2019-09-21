const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

///Configuracion de cors
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    next();
});

app.get('/', function(req, res) {
    res.send('[{"id":"1","nombre":"Jose","edad":"25","genero":"masculino","email":"josegonzales9871@gmail.com","localidad":"Madrid","telefono":"912546524"},{"id":"2","nombre":"Juan","edad":"31","genero":"masculino","email":"juanrodriguez65465@gmail.com","localidad":"Barcelona","telefono":"934654654"},{"id":"3","nombre":"Antonio","edad":"43","genero":"masculino","email":"antoni654654@gmail.com","localidad":"Valencia","telefono":"214748366"},{"id":"4","nombre":"Angelina","edad":"35","genero":"femenino","email":"angelina654456@gmail.com","localidad":"New York","telefono":"247483647"}]');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});