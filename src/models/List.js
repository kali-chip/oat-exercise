const m = require('mithril');

let List = {
    items: [],
    loadItems: function(url, options) {
        let params = Object.assign({ limit: 20}, options);

        return m.request({
            method: "GET",
            url: url,
            params: params,
        })
        .then(function(userList) {
            List.items = userList;
        })
    }
};

module.exports = List;
