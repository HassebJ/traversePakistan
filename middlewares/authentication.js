/**
 * Created by usman on 6/21/15.
 */

module.exports = {
    ensureAuthentication : function(req,res, next){
        if(req.isAuthenticated())
            return next();
        else{
            res.send("User is not authenticated");
        }
    }
}
