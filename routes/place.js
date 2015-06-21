/**
 *
 * Created by usman on 5/2/15.
 */
var place= require("../controllers/place");

module.exports = function (app){
    app.get('/place/:id', place.getPlace);
    app.post('/place/', place.addPlace);
    app.delete('/place/', place.deletePlace);
};

