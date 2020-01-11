const m = require('mithril');

const List = require('../models/List.js');

module.exports = {
    view: function() {
        return m('ul.list',
            List.items.map(function(user) {
                return m("li.user-list-item", [
                    m('a', {href: "/user/" + user.userId, oncreate: m.route.link}, user.firstName + " " + user.lastName)
                ])
            })
        );
    }
};

