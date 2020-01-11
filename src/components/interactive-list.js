const m = require('mithril');
const c = require('../config/index.js');

const List = require('../models/List.js');
const UserView = require('../views/UserList.js');

module.exports = function() {

    let url = c.API_URL + c.ENDPOINTS.USER_LIST;

    List.loadItems(url);

    return UserView;
};
