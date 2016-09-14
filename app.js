"use strict";

const 
   parser = require('./src/parser.js'),
   ast    = require('./ast.js');

parser.lexer = parser.Parser.prototype.lexer;
parser.yy = ast;
parser.parser.yy = ast;

module.exports = parser;
