"use strict";

const 
   fs = require('fs'),
   JisonLex = require('jison-lex'),
   grammar = fs.readFileSync('./parser.jisonlex').toString(),
   lexer = new JisonLex(grammar);

//console.log(grammar);

module.exports = {
   testValues: function(test){
	  test.expect(4);
	  
	  lexer.setInput("aAnId0 'astring0' 532.1079 123456790");
	  test.deepEqual(lexer.lex(), 'ID');
	  test.deepEqual(lexer.lex(), 'STRING');
	  test.deepEqual(lexer.lex(), 'FLOAT');
	  test.deepEqual(lexer.lex(), 'INT');

	  test.done();
   },   

   testSymbols : function(test){
	  test.expect(8);

	  lexer.setInput("( ) [ ] , ; -> :=");

	  test.deepEqual(lexer.lex(), '(');
	  test.deepEqual(lexer.lex(), ')');
	  test.deepEqual(lexer.lex(), '[');
	  test.deepEqual(lexer.lex(), ']');
	  test.deepEqual(lexer.lex(), ',');
	  test.deepEqual(lexer.lex(), 'ENDSTATEMENT');
	  test.deepEqual(lexer.lex(), 'HEADERTAIL');
	  test.deepEqual(lexer.lex(), 'ASSIGN');

	  test.done();
   },

   testComparisons : function(test){
	  test.expect(6);
	  
	  lexer.setInput("== != <= >= < >");

	  test.deepEqual(lexer.lex(), 'COMPARISON');
	  test.deepEqual(lexer.lex(), 'COMPARISON');
	  test.deepEqual(lexer.lex(), 'COMPARISON');
	  test.deepEqual(lexer.lex(), 'COMPARISON');
	  test.deepEqual(lexer.lex(), 'COMPARISON');
	  test.deepEqual(lexer.lex(), 'COMPARISON');

	  test.done();
   },

   testBooleanOps : function(test){
	  test.expect(5);
   
   	  lexer.setInput("AND && OR || NOT")
	  test.deepEqual(lexer.lex(), 'AND');
	  test.deepEqual(lexer.lex(), 'AND');
	  test.deepEqual(lexer.lex(), 'OR');
	  test.deepEqual(lexer.lex(), 'OR');
	  test.deepEqual(lexer.lex(), 'NOT');

	  test.done();
   },
   
   
   testOperations : function(test){
	  test.expect(19);
	  
	  lexer.setInput("PROJECT RENAME SELECT UNION + INTERSECT ^ DIFFERENCE - PRODUCT X DIVIDE / JOIN ~~ LEFTJOIN ~@ RIGHTJOIN @~");
	  test.deepEqual(lexer.lex(), 'PROJECT');
	  test.deepEqual(lexer.lex(), 'RENAME');
	  test.deepEqual(lexer.lex(), 'SELECT');
	  test.deepEqual(lexer.lex(), 'UNION');
	  test.deepEqual(lexer.lex(), 'UNION');
	  test.deepEqual(lexer.lex(), 'INTERSECT');
	  test.deepEqual(lexer.lex(), 'INTERSECT');
	  test.deepEqual(lexer.lex(), 'DIFFERENCE');
	  test.deepEqual(lexer.lex(), 'DIFFERENCE');
	  test.deepEqual(lexer.lex(), 'PRODUCT');
	  test.deepEqual(lexer.lex(), 'PRODUCT');
	  test.deepEqual(lexer.lex(), 'DIVIDE');
	  test.deepEqual(lexer.lex(), 'DIVIDE');
	  test.deepEqual(lexer.lex(), 'JOIN');
	  test.deepEqual(lexer.lex(), 'JOIN');
	  test.deepEqual(lexer.lex(), 'LEFTJOIN');
	  test.deepEqual(lexer.lex(), 'LEFTJOIN');
	  test.deepEqual(lexer.lex(), 'RIGHTJOIN');
	  test.deepEqual(lexer.lex(), 'RIGHTJOIN');

	  test.done();
   },
   
};
