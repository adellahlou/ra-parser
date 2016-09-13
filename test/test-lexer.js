"use strict";

const 
   parser         = require('../app.js'),
   lexer          = parser.lexer,
   terminals_     = parser.Parser.prototype.terminals_,
   getMappedLex   = function(){
	  return terminals_[lexer.lex()];
   };

module.exports = {
   testValues: function(test){
	  test.expect(4);
	  
	  lexer.setInput("aAnId0 'astring0' 532.1079 123456790");
	  test.deepEqual(getMappedLex(), 'ID');
	  test.deepEqual(getMappedLex(), 'STRING');
	  test.deepEqual(getMappedLex(), 'FLOAT');
	  test.deepEqual(getMappedLex(), 'INT');

	  test.done();
   },   

   testSymbols : function(test){
	  test.expect(8);

	  lexer.setInput("( ) [ ] , ; -> :=");

	  test.deepEqual(getMappedLex(), '(');
	  test.deepEqual(getMappedLex(), ')');
	  test.deepEqual(getMappedLex(), '[');
	  test.deepEqual(getMappedLex(), ']');
	  test.deepEqual(getMappedLex(), ',');
	  test.deepEqual(getMappedLex(), 'ENDSTATEMENT');
	  test.deepEqual(getMappedLex(), 'HEADERTAIL');
	  test.deepEqual(getMappedLex(), 'ASSIGN');

	  test.done();
   },

   testComparisons : function(test){
	  test.expect(6);
	  
	  lexer.setInput("== != <= >= < >");

	  test.deepEqual(getMappedLex(), 'COMPARISON');
	  test.deepEqual(getMappedLex(), 'COMPARISON');
	  test.deepEqual(getMappedLex(), 'COMPARISON');
	  test.deepEqual(getMappedLex(), 'COMPARISON');
	  test.deepEqual(getMappedLex(), 'COMPARISON');
	  test.deepEqual(getMappedLex(), 'COMPARISON');

	  test.done();
   },

   testBooleanOps : function(test){
	  test.expect(6);
   
   	  lexer.setInput("AND aNd && OR || NOT")
	  test.deepEqual(getMappedLex(), 'AND');
	  test.deepEqual(getMappedLex(), 'AND');
	  test.deepEqual(getMappedLex(), 'AND');
	  test.deepEqual(getMappedLex(), 'OR');
	  test.deepEqual(getMappedLex(), 'OR');
	  test.deepEqual(getMappedLex(), 'NOT');

	  test.done();
   },
   
   testOperations : function(test){
	  test.expect(19);
	  
	  lexer.setInput("PROJECT RENAME SELECT UNION + INTERSECT ^ DIFFERENCE - PRODUCT X DIVIDE / JOIN ~~ LEFTJOIN ~@ RIGHTJOIN @~");
	  test.deepEqual(getMappedLex(), 'PROJECT');
	  test.deepEqual(getMappedLex(), 'RENAME');
	  test.deepEqual(getMappedLex(), 'SELECT');
	  test.deepEqual(getMappedLex(), 'UNION');
	  test.deepEqual(getMappedLex(), 'UNION');
	  test.deepEqual(getMappedLex(), 'INTERSECT');
	  test.deepEqual(getMappedLex(), 'INTERSECT');
	  test.deepEqual(getMappedLex(), 'DIFFERENCE');
	  test.deepEqual(getMappedLex(), 'DIFFERENCE');
	  test.deepEqual(getMappedLex(), 'PRODUCT');
	  test.deepEqual(getMappedLex(), 'PRODUCT');
	  test.deepEqual(getMappedLex(), 'DIVIDE');
	  test.deepEqual(getMappedLex(), 'DIVIDE');
	  test.deepEqual(getMappedLex(), 'JOIN');
	  test.deepEqual(getMappedLex(), 'JOIN');
	  test.deepEqual(getMappedLex(), 'LEFTJOIN');
	  test.deepEqual(getMappedLex(), 'LEFTJOIN');
	  test.deepEqual(getMappedLex(), 'RIGHTJOIN');
	  test.deepEqual(getMappedLex(), 'RIGHTJOIN');

	  test.done();
   },
   
   testRelationLiterals : function(test){
   	  test.expect(25);
	  lexer.setInput("[['attr1', 'attr1'] -> [1,2], [2,3], [3,4]]");

	  test.deepEqual(getMappedLex(), '[');
	  test.deepEqual(getMappedLex(), '[');
	  test.deepEqual(getMappedLex(), 'STRING');
	  test.deepEqual(getMappedLex(), ',');
	  test.deepEqual(getMappedLex(), 'STRING');
	  test.deepEqual(getMappedLex(), ']');
	  test.deepEqual(getMappedLex(), 'HEADERTAIL');
	  test.deepEqual(getMappedLex(), '[');
	  test.deepEqual(getMappedLex(), 'INT');
	  test.deepEqual(getMappedLex(), ',');
	  test.deepEqual(getMappedLex(), 'INT');
	  test.deepEqual(getMappedLex(), ']');
	  test.deepEqual(getMappedLex(), ',');
	  test.deepEqual(getMappedLex(), '[');
	  test.deepEqual(getMappedLex(), 'INT');
	  test.deepEqual(getMappedLex(), ',');
	  test.deepEqual(getMappedLex(), 'INT');
	  test.deepEqual(getMappedLex(), ']');
	  test.deepEqual(getMappedLex(), ',');
	  test.deepEqual(getMappedLex(), '[');
	  test.deepEqual(getMappedLex(), 'INT');
	  test.deepEqual(getMappedLex(), ',');
	  test.deepEqual(getMappedLex(), 'INT');
	  test.deepEqual(getMappedLex(), ']');
	  test.deepEqual(getMappedLex(), ']');

   	  test.done();
   }
};
