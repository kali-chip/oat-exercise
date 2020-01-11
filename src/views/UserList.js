const m = require('mithril');
const u = require('../utils/');

const List = require('../models/List.js');

function displayUser(user) {
    return u.capitalize(user.firstName) + " " + u.capitalize(user.lastName);
}

module.exports = {
    view: function() {
        return m('ul.list',
            List.items.map(function(user) {
                let label = displayUser(user);
                return m("li.list-item", [
                    m(m.route.Link, {href: "/user/" + user.userId}, label)
                ])
            })
        );
    }
};

