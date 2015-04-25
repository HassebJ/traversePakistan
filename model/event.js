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
    image: {image: String, caption: String},
    charges: Number,
    activitiesTag: [String],
    going: [{userId: Schema.Types.ObjectId}],
    host: Schema.Types.ObjectId,
    difficulty: String
});
