const express = require("express");
const cors= require("cors");
const app = express();

let corsOptions = {
origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extends: true }));

app.get("/", (req, res) => { 
    const{id,token} = req.query;
    console.log(token)
    console.log(id)
res.json({mensaje: "Bienvenidos a mi primer api consss express" });
}); 

app.post("/", (req, res) => { 
    const{id,token} = req.query;
    console.log(token)
    console.log(id)
res.json({mensaje: "Bienvenidos a mi primer api consss express" });
}); 

const PORT= 8081;

app.listen(PORT, () => { 
    console.log(`server corriendo por el puerto: ${PORT}`);
}); 
