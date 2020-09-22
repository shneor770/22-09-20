const mongoose = require('mongoose');
const express =require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const Axios = require('axios');

mongoose.connect('mongodb+srv://yoda:313127250@cluster0.2xpim.mongodb.net/keepkids?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
()=>{
    console.log('CONNECT TO MONGODB');
}
);

const app = express();
const user = require('./models/user');
//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.post('/register', (req, res)=>{
    console.log(req.body.email, req.body.username, req.body.password)
    user.findOne({email: req.body.email},  async (err, doc)=>{
        if(err) throw err;
        if(doc) {
            console.log(doc);
            res.send('user alredy exsist');
        }
        if(!doc){
            const Hash = await bcrypt.hash(req.body.password, 10);
            const newUser = new user({
                username: req.body.username,
                email: req.body.email,
                password: Hash
            })
            await newUser.save();
            res.send('user created and now the pass is so Hard');
        }
    });
});

app.post('/login', async (req, res)=>{
  const users = await  user.findOne({email: req.body.email});
  if(!users){
      res.send('the mail is invalid')
  }
  if(users){
    console.log(users)
    const pass =  await  bcrypt.compare(req.body.password, users.password);
    if(pass){
      res.send('chmpine');
    }        
    if(!pass){
      res.send('isnot validate');
    }        
  }
});





app.get('/user', (req, res)=>{
    res.send('Shneorbachar');
});


const PORT= process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`the server run on  PORT ${PORT}`);
})
















// function servUrl(t){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve('http://nztodo.herokuapp.com/api/tasks/?format=json');
//         },t)
//     });
// }

// async function Main(){
//     const url = await servUrl(2000);
//     const connect = await Axios.get(url);
//     console.log(connect.data)
// }
// Main();