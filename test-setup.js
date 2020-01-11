const o = require("ospec");
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM("", { pretendToBeVisual: true, });

global.window = dom.window;
global.document = dom.window.document;
global.requestAnimationFrame = dom.window.requestAnimationFrame;

require("mithril");

o.after(function() { dom.window.close() });
