'use strict';

var menubar = require('menubar');
var ipc = require('ipc');
require('electron-debug')();

var mb = menubar();

mb.on('ready', function ready () {
  console.log('app is ready');
});

ipc.on('quit', function(event) {
 mb.app.quit();
});
