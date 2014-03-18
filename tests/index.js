var Ajax = require('../');

var ajax = new Ajax('https://api.github.com/users/octocat/orgs');

ajax.on('success', function(event) {
    console.log('success', event);
});

ajax.on('error', function(event) {
    console.log('error', event);
});

ajax.on('complete', function(event) {
    console.log('complete', event);
});

ajax.send();