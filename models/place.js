/**
 * Created by usman on 4/19/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
    name : String,
    description : String,
    gallery : [{ image : String, caption : String}],
    gettingThere : { routeDesc : String, lat : Number, long : Number},
    reviews : [{ comment : String, rating : Number}],
    weather : String,
    visitingSeason : {to : String, from : String}
});

//Statics (They are methods that apply to the Schema)



//Methods (They apply on objects of Schema)

module.exports = mongoose.model('place' ,placeSchema);