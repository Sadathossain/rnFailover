const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Serving from Server 1'))

app.listen(port, () => console.log(`Server 1 listening on port ${port}!`))