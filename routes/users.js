var users = require('../controllers/users');


module.exports = function(app) {

    var requireLogin = users.checkLogin(config.requireLogin);

    app.post(apiversion+'/users/signup', users.signup);
    app.post(apiversion+'/users/login', users.signin);
    app.post(apiversion+'/users/logout', requireLogin, users.signout);
    app.get(apiversion+'/users/me', requireLogin, users.me);
    app.put(apiversion+'/users/update', requireLogin, users.hasPermission('updateOwnUserRole', config.requirePermission), users.update);
    app.get(apiversion+'/users/list', requireLogin, users.userList);
    app.get(apiversion+'/users/permissions', requireLogin, users.userPermissions);
    app.post(apiversion+'/users/create', requireLogin ,users.hasPermission('createUsers', config.requirePermission),  users.createOtherUser);
    app.put(apiversion+'/users/:userId', requireLogin ,users.hasPermission('updateUsers', config.requirePermission),  users.updateOtherUser);
    app.put(apiversion+'/users/:userId/permissions', requireLogin ,users.hasPermission('updateUsers', config.requirePermission),  users.updateOtherUserPermissions);

};