const mongoose = require("mongoose")
const schema = mongoose.Schema

let member = new schema({
    name: {type:'string' , require : true},
    phoneNumber: {type: 'number' ,require :true},
    liter: {type:'string' , require : true},
    data: [{
        date: {type:'string'},
        mrng: {type:'number'},
        evng: {type:'number'},
    }]
},
{
    versionKey:false
}
)

const model = mongoose.model("member",member)
module.exports = model