'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  this.template('common/view.html', 'app/views/' + this.name + '.html');
};
