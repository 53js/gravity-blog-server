/**
* Allow cross domain
*/
module.exports = function (req,res,ok) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    ok();
};