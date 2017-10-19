/**
 * Router module
 */
var express    = require('express'); 
// ROUTES FOR OUR API
let router = express.Router();              // get an instance of the express Router
var __dirname = './public/';
var fs = require("fs");

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
router.get('/pnrdetails',function(req,res){
    fs.readFile( __dirname + "/" + "pnrdetails.json", 'utf8', function (err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.send( data);
    });
});
module.exports = router;