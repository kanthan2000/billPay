const memberSchema = require("../modul/MemberSchema")
module.exports = {
    AddMember : async (req,res) => {
        const member = new memberSchema({
           name: req.body.name,
           phoneNumber:req.body.phoneNumber,
           liter: req.body.liter,
           data : [{
            date :req.body.data[0].date,
            mrng :req.body.data[0].mrng,
            evng :req.body.data[0].evng,
           }]
        })
        try{
            const data = await member.save()
            if(data) {
                res.status(200).json({ message: " created" , data: data})
            }else{
                res.status(500).json({ message: "not created "})
            }
        }catch (err) {
            res.status(500).json({ message: "Error " })
        }
    },
    ViewMember : async (req,res) => {
        try {
            const data = await memberSchema.find()
            if(data) {
                res.status(200).json({ message: "Sucess" , data: data})
            }else{
                res.status(500).json({ message: "not found"})
            }
        }catch (err) {
            res.status(500).json({ message: "Error " }) 
        }
    },
    UpdateMember :  (req,res) => {
        const member = new memberSchema({
            data : [{
             date :req.body.data[0].date,
             mrng :req.body.data[0].mrng,
             evng :req.body.data[0].evng,
            }]
         })
        try {
            const data =  memberSchema.findById(req.params.id)
            // let value = [...data.data,member.data[0]]
            // data.data = value
            console.log(data)
            let v = {
                _id: new ObjectId("63a87e96a682947de139d04a"),
                name: 'kumar',
                phoneNumber: 7708628661,
                liter: '1L',
                data: [
                  {
                    date: '27/11/2001',
                    mrng: 500,
                    evng: 500,
                    _id: new ObjectId("63a87e96a682947de139d04b")
                  },
                  {
                    date: '27/11/2001',
                    mrng: 300,
                    evng: 400,
                    _id: new ObjectId("63a88427e82aa002d0d2092e")
                  }
                ]
              }
              
            const finalData =  memberSchema.updateOne({_id: req.params.id,v})
            if(finalData) {
                res.status(200).json({ message: "Update" , data: finalData})
            }else{
                res.status(500).json({ message: "not found"})
            }
        }catch (err) {
            console.log(err)
            res.status(500).json({ message: "Error",err })  
        }     
    },
    SingleMember : async (req,res) => {
        try {
            const data = await memberSchema.findById(req.params.id)
            if(data) {
                res.status(200).json({ message: "Sucess" , data: data})
            }else{
                res.status(500).json({ message: "not found"})
            }
        }catch (err) {
            res.status(500).json({ message: "Error " }) 
        }
    },
}