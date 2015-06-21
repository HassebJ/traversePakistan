/**
 * Created by usman on 5/2/15.
 */

var Event = require("../models/event");

var mongoose = require("mongoose");

module.exports = {
    getEvent : function( req, res){
        var id = req.params.id;
        console.log(id);
        Event.find( {_id : id}, function(error, data){
            if(error){
                res.status(500).end();
            }else{
                console.log(data);
                res.send({
                    result : data
                });
            }
        });
    },
    createEvent : function( req, res) {
        var jsonEvent = req.body;
        console.log(jsonEvent);
        var event= new Event(jsonEvent);

        event.save(function(error,data){
            if(error) {
                res.send(500);
            }else{
                res.send(200);
            }
        });
    },
    deleteEvent : function( req, res){
        var eventId = req.params.id;
        Event.findOneAndRemove({ _id : eventId},function(error,data){
            if(error) {
                console.error(error);
                res.send(500);
            }else{
                console.log("Event removed.");
                res.send(200);
            }
        });
    }
};
