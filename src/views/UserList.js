const m = require('mithril');

const List = require('../models/List.js');

function capitalize(word) {
    return word.replace(/^\w/, function (chr) { return chr.toUpperCase(); });
}

function displayUser(user) {
    return capitalize(user.firstName) + " " + capitalize(user.lastName);
}

module.exports = {
    view: function() {
        return m('ul.list',
            List.items.map(function(user) {
                let label = displayUser(user);
                return m("li.list-item", [
                    m('a', {href: "/user/" + user.userId, oncreate: m.route.link}, label)
                ])
            })
        );
    }
};

