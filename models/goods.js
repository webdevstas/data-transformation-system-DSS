const mongoose = require('mongoose')

const goodsSchema = new mongoose.Schema({
    goods: Array,
    date: Date,
    total: Number
})

module.exports.Goods = mongoose.model('Goods', goodsSchema)
