import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products', (req, res)=>{
    res.send(data.products);
});

app.get('/api/products/:id', (req, res)=>{
    const product = data.products.find(x => x._id === req.params.id); //search data by param 
    if(product){
        res.send(product);
    }else{
       res.status(404).send({message: 'product not found'});
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
});