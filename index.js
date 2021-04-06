require('dotenv').config()
const CSocClient = require('./lib/classes/CSocClient')
const mongoose = require('mongoose');
const {Goods} = require('./models/goods')
const dtsServer = new CSocClient(process.env.DTS_URL, 'DTS-Server')

mongoose.connect('mongodb://mongodb/goods', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PWD
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('Database connected!')
});

dtsServer.on('message', async (data) => {
    await Goods.create(data)
        .then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
})
