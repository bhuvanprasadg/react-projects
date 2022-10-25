// GET
exports.getTodos = function (req, res, next) {
    console.log('*** gettodos');
    res.json([{}]);
};

exports.addTodos = function (req, res, next) {
    console.log('*** add todos');
    res.json(req.body);
};

exports.toggleTodos = function(req, res, next){
    console.log('*** toogle todos');
    res.json(`${req.params.id}: toggled`);
}