/**
 * Created by usman on 4/19/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
    description : String,
    gallery : [{ image : String, caption : String}],
    gettingThere : { routeDesc : String, lat : Number, long : Number},
    reviews : [{ comment : String, rating : Number}],
    //Api address to the weather update
    weather : String,
    visitingSeason : {to : String, from : String}
    //reservations about adding to Wish list
});

//Statics (They are methods that apply to the Schema)



//Methods (They apply on objects of Schema)

mongoose.model('place',placeSchema);