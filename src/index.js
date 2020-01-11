const m = require("mithril");

const App = require("./views/App");
const Detail = require("./views/Detail");

m.route(document.body, "/users", {
    "/users": App,
    "/user/:id": Detail
});
