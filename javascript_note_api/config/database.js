/*const mongoose=require('mongoose')
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote', {
    userNewUrlParser:true,  //para utilizar a novas ferramentas de mongoose 
    useUnifiedTopology:true, //indexsacao de conteudo 
    useCreateIndex:true  //indexsacao de banco de ados 
}).then(()=>console.log('Connection succesfull'))
.catch((err)=>console.log(err));
*/
const mongoose= require ('mongoose');
mongoose.Promise= global.Promise;

require('dotenv').config();
const MONGO_URL= process.env.MONGO_URL;

mongoose.connect('MONGO_URL', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>console.log('Conectado ao MongoDB'))
    .catch((err)=>console.error(err));


    