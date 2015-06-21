/**
 * Created by mac on 5/2/15.
 */
var event = require("../controllers/event");
module.exports = function( app ) {
    app.delete("/event/:id", event.deleteEvent);
    app.get("/event/:id", event.getEvent);
    app.post("/event", event.createEvent);
};