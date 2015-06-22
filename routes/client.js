/**
 * Created by usman on 6/21/15.
 */
var clientController = require("../controllers/client");
var authenticationM = require("../middlewares/authentication");
module.exports = function( app ) {
    app.get("/client/:id",authenticationM.ensureAuthentication, clientController.getClient)
    app.post("/client",authenticationM.ensureAuthentication, clientController.postClient)

};
