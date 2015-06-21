/**
 * Created by usman on 5/2/15.
 */


module.exports = function( app ){


  //For error Handling, always keep in the end

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
        && (~err.message.indexOf('not found')
        || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500);
    res.send({
      "status" : "error",
      "result" : err.message
    });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).send({
      "status" : "error",
      "result" : "404"
    });
  });
};
