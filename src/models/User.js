const m = require('mithril');

let User = {
    userData: {},
    load: function(url, options) {
        let params = Object.assign({ limit: 20}, options);

        return m.request({
            method: "GET",
            url: url,
            params: params,
        })
        .then(function(data) {
            User.userData = data;
        });
    }
};

module.exports = User;
