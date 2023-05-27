const mongoose =  require('mongoose')

const Img = mongoose.model('image', mongoose.Schema({
    img_name :{
        type : String, 
        required : true,
    },
    img_path :{
        type : String, 
        required : true,
    },
})
) 


exports.Img = Img;
 