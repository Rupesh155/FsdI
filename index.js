
// let express=  require('express')
// const { type } = require('express/lib/response')
//  let app=   express()
//  let mongoose=   require('mongoose')
//  mongoose.connect('mongodb://localhost:27017/fsdI').then(()=>{
//     console.log('db');
    
//  }).catch((err)=>{
//     console.log(err);
    

//  })



//    let useSchema=  mongoose.Schema({
//     name:{
//         type:String
//     },
//     email:{
//         type:String
//     },
//     passWord:{
//         type:String
//     }

//    })
//    let User=    mongoose.model('user',useSchema)
//      let data=  new User({name:"Rahul",email:"rahul@gmail.com",passWord:"1234"})
//      data.save()
// app.get('/',(req,res)=>{
//     res.render('index',{arr})

// })
// app.get('/show/:key',(req,res)=>{
//     let {key}=req.params

//     let showData=   arr.find((a)=>{
//         return a.id==key

//       })
//       console.log(showData,"heeh");
//     res.render('show',{showData})

// })
// app.get('/shows/create',(req,res)=>{
//     res.render('createData')

// })


// app.post('/user',(req,res)=>{
//     let {name,lastName}=req.body
//     console.log(name,lastName,"heheh");
//     arr.push({name,lastName,id:arr.length})
//     res.redirect('/')

// })

//  app.listen(5000,()=>{
//     console.log('server running on port no 5000');

//  })


  let express=   require('express')
  let app=   express()
  app.use(express.json())
  let mongoose=   require('mongoose')
const User = require('./model/user')
  mongoose.connect('mongodb://localhost:27017/fsdI').then(()=>{
    console.log('db');
    
  }).catch((err)=>{
    console.log( err);
    
  })


  app.post('/create', async(req,res)=>{
    // console.log(req.body);
    let {email}=req.body

   let milGya=    await  User.findOne({email})
   if(milGya){
    res.send('user jinda hai')
   }
   else{

       let dbUser=  new User({...req.body})
       dbUser.save()
    res.send('createddddd')
   }
    


  })

  app.listen(5000,()=>{
    console.log('server chal gyaa');
    

  })