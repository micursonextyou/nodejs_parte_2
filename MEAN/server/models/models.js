var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nextu', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, ' Error de conexión! '));
db.once('open', function callback() {
    console.log('Acceso a Base de datos Teamapp ');
});
module.exports = mongoose;