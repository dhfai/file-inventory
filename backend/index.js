require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 8080
app.use(express.json());
app.use(cors());
app.use('/api', router)
app.listen(PORT, () => {
    console.log(`Server ready on port http://localhost:${PORT}`);
});