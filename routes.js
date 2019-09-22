const controller = require("./controller");
var path = require("path");

module.exports = function(app){
    app.get('/api/what', controller.index)
    app.post('/api/what',controller.new_what)

    app.get('/api/what/:id', controller.one_what)

    app.delete('/api/delete/:id',controller.delete_what)
    app.patch('/api/what/edit/:id', controller.update_what)

    app.get('/api/what/like/:id', controller.like_what)

}