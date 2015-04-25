/**
 * Created by usman on 4/25/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * All discussed headings are entered, but the Facebook Event Integration Part is not added. I do not have idea
 * how we are supposed to save it in our database. Schema
 * @type {Schema}
 */
var eventSchema = new Schema({
    gettingThere: {routeDesc: String, lat: Number, long: Number},
    eventSchedule: {startDate: Date, endDate: Date},
    description: String,
    coverImage: {imageSrc: String, caption: String},
    charges: Number,
    tags: [String],
    going: [{userId: Schema.Types.ObjectId}],
    host: Schema.Types.ObjectId,
    difficulty: String
});

//Statics (They are methods that apply to the Schema)

eventSchema.static.upcomingEventList = function(cb){
    this
        .find()
        .where( (new Date()).getTime() > eventSchedule.startDate.getTime())
        .sort( { 'eventSchedule.startDate' : 'asc'})
        .limit(10)
        .exec(cb);
};

//Methods (They apply on objects of Schema)

/**
 * To get the count of the number of people going to an event.
 */

eventSchema.methods.getEventGoingCount = function(cb){
    this.find({_id : this._id}, cb);
};

mongoose.model('place',placeSchema);
