const m = require('mithril');
const u = require('../utils/');

const User = require('../models/User.js');

const LABELS = {
  "login": "User name:",
  "password": "string",
  "title": "Title: ",
  "lastName": "Name: ",
  "firstName": "string",
  "gender": "string",
  "email": "string",
  "picture": "string",
  "address": "string"
};
const project = {
};
module.exports = {
    view: function() {
        let userData = User.userData;

        if(!userData.login) return m('.loading', "Loading...");

        return m('.infoBox', [
            m('h5.title', 'Information for: ' + u.capitalize(userData.login)),
            m('.userdata', [
                m('img', { class: 'avatar', src: userData.picture }),
                m('.personalData', [
                    m('.value', u.capitalize(userData.title) + ". " + u.capitalize(userData.firstName) + " " + u.capitalize(userData.lastName)),
                    m('.value.address', userData.address)
                ]),
                m('.contact', [
                   m('a', {href:'mailto:'+userData.email}, userData.email)
                ]),
            ])
        ]);
    }
};

/*
{
  "userId": 0,
  "login": "string",
  "password": "string",
  "title": "string",
  "lastName": "string",
  "firstName": "string",
  "gender": "string",
  "email": "string",
  "picture": "string",
  "address": "string"
}
*/
