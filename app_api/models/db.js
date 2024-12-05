var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://yusuferen:<YUZAR1sieff>@cluster0.iifxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI);
mongoose.connection.on("connected", function() {
    console.log(dbURI + " adresindeki veritabanına bağlandı")
});
mongoose.connection.on("disconnected", function() {
    console.log(dbURI + " adresindeki bağlantı koptu")
});

process.on("SIGINT", function() {
    mongoose.connection.close();
    console.log("Bağlantı kesildi");
    process.exit(0);
});

require("./venue");