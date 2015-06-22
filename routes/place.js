/**
 *
 * Created by usman on 5/2/15.
 */
var place= require("../controllers/place");
var authenticationM = require("../middlewares/authentication");

module.exports = function (app){
    app.get('/place/:id', authenticationM.ensureAuthentication, place.getPlace);
    app.post('/place/', place.addPlace);
    app.delete('/place/', place.deletePlace);
};

