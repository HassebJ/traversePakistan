/**
 * Created by usman on 5/2/15.
 */

var Place = require("../models/place");
var mongoose = require("mongoose");

module.exports = {
    getPlace : function(req,res ){
        var id = req.params.id;
        Place.find( {},function(error,data){
            if(error){
                console.log(error)
                res.send(500);
            }else{
                res.send({
                    status: "success",
                    result: data
                });
            }
        });
    },
    deletePlace : function(req,res){
        var id = req.params.id;
        Place.findOneAndRemove( {_id: mongoose.Schema.ObjectId(id)},function(error,data){
            if(error){
                console.error(error)
                res.send(500);
            }else{
                res.send(200);
            }
        });
    },
    addPlace : function(req, res){
        var placeJson = req.body;
        var place= new Place(placeJson);
        place.save(function(error,data){
            if(error){
                console.error(error);
                res.send(500);
            }else{
                res.send(200);
            }
        });
    }
}
