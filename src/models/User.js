const m = require('mithril');

const cache = {};

let User = {
    userData: {},
    load: function(url, options) {
        if (cache[options.userId]) {
            return Promise.resolve(cache[options.userId]);
        } else {
            User.userData = {};
            let params = Object.assign({}, options);

            return m.request({
                method: "GET",
                url: url,
                params: params,
            })
            .then(function(data) {
                cache[options.userId] = data;
                User.userData = data;
            });
        }
    }
};

module.exports = User;
