require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products.routes')


const app = express();
app.use(express.json());


app.use(cors({
  origin: "http://localhost:5173",
})
);

app.use('/api/products', productsRoutes);


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  
});

