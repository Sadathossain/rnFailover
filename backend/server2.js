const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Serving from Server 2'))

app.listen(port, () => console.log(`Server 2 listening on port ${port}!`))