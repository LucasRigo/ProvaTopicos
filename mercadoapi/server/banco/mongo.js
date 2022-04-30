const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27017/basemercado?authSource=basemercado";

mongoose.connect(uri, { } );
    