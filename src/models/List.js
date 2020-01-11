const m = require('mithril');

const cache = {};
let List = {
    items: [],
    loadItems: function(url, options) {
        if (List.items.length) return;
        let params = Object.assign({ limit: 200}, options);

        return m.request({
            method: "GET",
            url: url,
            params: params,
        })
        .then(function(userList) {
            List.items = userList;
        });
    }
};

module.exports = List;
