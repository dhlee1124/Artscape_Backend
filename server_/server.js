const express = require('express');
const db = require('./db');  
const path = require('path');
const matchRouter = require('./routes/match');
const authRoutes = require('./routes/auth');
const planRouter = require('./routes/mlt_plan');



require('dotenv').config();

const app = express();
 
app.use(express.json());

const { swaggerUi, specs } = require("./swagger/swagger")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/match', matchRouter);
app.use('/auth', authRoutes);
app.use('/mltplan', planRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

