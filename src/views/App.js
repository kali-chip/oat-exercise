const m = require('mithril');
const UserList = require('../components/interactive-list.js');

module.exports = {
    view: function(vnode) {
        return  m(".list", [
            m("h1", {class: "title"}, "List of users taking the test:"),
            m('.container', [
                m(UserList)
            ])
        ]);
    }
};
