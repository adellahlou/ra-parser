"use strict";
// contains the constructors to use for the relational algebra AST

module.exports = (function() {
   const ast = {
	  Program : function(body){
		 this.body = Array.isArray(body) ? body : [body];
	  },

	  Assign : function(id, value) {
		 this.id = id;
		 this.value = value;
	  },

	  /* Expressions */
	  Intersect : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  Union : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  Difference : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  Product : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  Divide : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  NaturalJoin : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  ThetaJoin : function(left, conditionList, right){
		 this.left = left;
		 this.conditionList = conditionList;
		 this.right = right;
	  },

	  LeftJoin : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  RightJoin : function(left, right){
		 this.left = left;
		 this.right = right;
	  },

	  Project : function(attributeList, relation){
		 this.attributeList = attributeList;
		 this.relation = relation;
	  },

	  Rename : function(target, newName, relation){
		 this.target = target;
		 this.newName = newName;
		 this.relation = relation;
	  },

	  Select : function(conditionList, relation){
		 this.conditionList = conditionList;
		 this.relation = relation;
	  },

	  /* Terminals  */
	  AttributeList : function(attribute){
		 this.attributes = Array.isArray(attribute) ? attribute : [attribute];
	  },

	  ConditionList : function(){
	  },

	  RelationReference : function(name) {
		 this.name = name;
	  },

	  Relation : function(attributes, data) {
		 this.attributes = attributes;
		 this.data = data;
	  },

	  Value : function(value){
		 this.value = value;
	  }
   };

   ast.AttributeList.prototype.add = function(attribute){
	  this.attributes.push(attribute);
	  return this;
   };

   return ast;
})();
