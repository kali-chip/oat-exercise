const m = require('mithril');
const c = require('../config/index.js');

const User = require('../models/User.js');
const DetailView = require('../views/UserDetail.js');

module.exports = function(userId) {

    let url = c.API_URL + c.ENDPOINTS.USER_DETAIL;

    User.load(url, {userId: userId});

    return DetailView;
};
