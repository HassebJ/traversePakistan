/**
 *
 * Created by usman on 4/20/15.
 */

var place = require('../model/place');
var K2 = new place({
    description : 'The second highest mountain on Earth.',
    gallery : [],
    getting_there : { route_desc : 'Through Baltoro galacier, to Gondogoro La', lat : 45.1 , long : 11.6},
    reviews : [{ comment : 'Magistic Place', rating : '5'}],
    //Api address to the weather update
    weather : '/',
    visiting_season : {to : String, from : String}
})
