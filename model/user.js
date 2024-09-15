
let mongoose=   require('mongoose')
let useSchema=    mongoose.Schema({
    name:{
        type:String
    },
    email:{
       type:String
    }
    ,passWord:{
        type:String
    }
})
 let User=    mongoose.model('user',useSchema)

module.exports=User
