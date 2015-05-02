/**
 * Created by usman on 5/2/15.
 */


var Event = require("./event");
var mongoose = require("mongoose");
module.exports = {
    getEvent : function( req, res){
        var id = req.params.id;
        console.log("id :" + id);
        Event.findOne( {_id : mongoose.Types.ObjectId( id ) }, function(error, data){
            if(error){
                console.error("Got an Error" + error);
                res.send({
                    status : "error",
                    result : {}
                });
            }else{
                if( data.length > 0 ){
                    res.send({
                        status : "success",
                        result : data
                    });
                }
            }
        });
    },
    createEvent : function( req, res) {

        event.save(function(error,data){
            if(error)
                console.log(error);
            else
                console.log(data);
        });
        res.send("okay");
    }
};
