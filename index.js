const express = require('express');
const routes = require('./routes');

require('./database')
const app = express();

app.use(express.json());
app.use(routes);

const PORT = 5000;
app.listen(PORT,()=>console.log(`server is running at http://localhost:${PORT}`))

// (async () => {
//     const database = require('./db');
//     const User = require('./User');
    // await database.sync();
//  })();