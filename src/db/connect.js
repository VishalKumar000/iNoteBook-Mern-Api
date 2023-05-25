const mongoose = require('mongoose')

// mongoose.connect(`mongodb+srv://vishal:123@cluster0.sula7wu.mongodb.net/`)
mongoose.connect('',{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log('🔥'))
.catch((err) => console.log(`error ${err}`))

module.exports = mongoose