const m = require('mithril');
const UserDetail = require('../components/detail.js');

module.exports = {
    view: function(vnode) {
        return  m(".list", [
            m("h1", {class: "title"}, "List of users taking the test:"),
            m('.container', [
                m(m.route.Link, {href:'/users', class: "back"}, "⇦ Back to list"),
                m(UserDetail(vnode.attrs.id))
            ])
        ]);
    }
};

