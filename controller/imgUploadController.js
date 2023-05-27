const mongoose = require("mongoose");
const { Img } = require("../models/upload");

const getImg = (req,res) => {
    if (req.body.filter) {
        const filterRegex = new RegExp(`.*${req.body.filter}.*`, 'i');
        return  Img.find( { img_name: filterRegex}).then((result) => {
            res.json( {
                data :result
            })
        }).catch((err) =>{
            res.send("An Error Occures")
        })
    }
    Img.find().then((result) => {
        res.send(result)
    }).catch((err) =>{
        res.send("An Error Occures")
    })
}
const upload = (req, res) => {
     let upload = new Img({
        img_name : req.file.path,
        img_path : `http://localhost:3004/${req.file.path}`,
    })

    upload.save()
    .then( () =>{
        res.json({message: "Image Uploaded Successfully"})
    }).catch( (error) => {
        res.json({message: error.message})
    })
};

const deleteImg = (req,res) => {
    Img.deleteOne({_id:req.params.id}).then(() => {
        res.json({message: "Image Deleted Successfully"})
    })
    .catch(() => {
        res.json({message: "An Error Occured"})
    })
}

module.exports = {
  getImg,
  upload,
  deleteImg
};
