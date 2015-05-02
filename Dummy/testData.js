/**
 *
 * Created by usman on 4/20/15.
 */


var Event = require('../model/event');
var Place = require('../model/place');
var mongoose= require('mongoose');

mongoose.connect("mongodb://localhost/traverse_pakistan_db");
var db = mongoose.connection;
db.on('open',function() {

    var event = new Event({
        gettingThere: {routeDesc: "It will be a wonderful Place", lat: 43.9, long: 32.1},
        eventSchedule: {startDate: new Date, endDate: new Date},
        description: "Will be the greatest event you ave ever been to",
        coverImage: {imageSrc: String, caption: String},
        charges: 11000,
        tags: ["kool","awesome","happy"],
        going: [{ userId: mongoose.Types.ObjectId() }],
        host: mongoose.Types.ObjectId(),
        difficulty: "hard",
        socialMediaLinks: ["twittter/shit"]
    });

    event.save(function(error,data){
        if(error)
            console.log(error);
        else
            console.log(data);
    });
    /*
    var K2 = new Place({
        name: "K2",
        description: 'The second highest mountain on Earth.',
        gallery: [],
        getting_there: {route_desc: 'Through Baltoro galacier, to Gondogoro La', lat: 45.1, long: 11.6},
        reviews: [{comment: 'Magistic Place', rating: '5'}],
        //Api address to the weather update
        weather: '/',
        visiting_season: {to: "January", from: "September"}
    });
    K2.save(function (error, data) {
        if (error)
            console.error(error);
        else
            console.log(data);
    });*/
});

