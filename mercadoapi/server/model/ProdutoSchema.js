const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    nome: { type: String, required: true, unique: true },
    valor: Number
});

module.exports = mongoose.model("Produto", ProdutoSchema);

