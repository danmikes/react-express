const express = require('express')
const app = express()

app.use('/users/', require('./routes/userRoute'))

app.listen(5000, function () {
  console.log('express server running on port 5000')
})