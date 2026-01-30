const express = require("express");
const cors = require("cors");
const { products, vehicles, persons } = require("./data/data.js");
const app = express();
app.use(cors());
//Modal
app.set('view engine', 'ejs'); // Usaremos EJS para la vista
app.use(express.static('public')); // Para archivos CSS/JS frontend


const port = process.env.PORT || 8000;

app.get("/", (request, response) => {
    response.json({
    ok: true,
        routes: ["/api/products","/api/vehicles","/api/persons"]
    });
});


app.get("/api/products",(request,response)=>{
    response.json({
        ok: true,
        data: products
    });
});

app.get("/api/vehicles",(request,response)=>{
    response.json({
        ok: true,
        data: vehicles
    });
});

app.get("/api/persons",(request,response)=>{
    response.json({
        ok: true,
        data: persons
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    
});