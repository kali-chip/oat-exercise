const m = require("mithril");

const App = require("./views/App");

m.route(document.body, "/users", {
    "/users": App
});
