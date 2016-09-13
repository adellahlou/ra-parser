// contains the constructors to use for the relational algebra AST

"use strict";
module.exports = (function() {
   const ast = {
	  Program : function(body){
		 this.body = Array.isArray(body) ? body : [body];
	  },

	  Assign : function(id, value) {
		 this.id = id;
		 this.value = value;
	  },

	  /* Binary Expressions */
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

    /* Unary Expressions */
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

	  ConditionList : function(op, left, right){
      this.op = op;
      this.left = left;
      this.right = right;
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

   // Methods for certain nodes
   ast.AttributeList.prototype.add = function(attribute){
     this.attributes.push(attribute);
     return this;
   };

   ast.Value.prototype.getType = function(){
     return typeof this.value;
   }

   // Assign types to make node checking easier
   ast.Program.prototype.type = 'Program';
   ast.Assign.prototype.type = 'Assign';
   ast.Intersect.prototype.type = 'Intersect';
   ast.Union.prototype.type = 'Union';
   ast.Difference.prototype.type = 'Difference';
   ast.Product.prototype.type = 'Product';
   ast.Divide.prototype.type = 'Divide';
   ast.NaturalJoin.prototype.type = 'NaturalJoin';
   ast.ThetaJoin.prototype.type = 'ThetaJoin';
   ast.LeftJoin.prototype.type = 'LeftJoin';
   ast.RightJoin.prototype.type = 'RightJoin';
   ast.Project.prototype.type = 'Project';
   ast.Rename.prototype.type = 'Rename';
   ast.Select.prototype.type = 'Select';
   ast.AttributeList.prototype.type = 'AttributeList';
   ast.ConditionList.prototype.type = 'ConditionList';
   ast.RelationReference.prototype.type = 'RelationReference';
   ast.Relation.prototype.type = 'Relation';
   ast.Value.prototype.type = 'Value';

   // ast helper members
   ast.binaryExprTypes = ['INTERSECT', 'UNION', 'DIFFERENCE', 'PRODUCT', 'DIVIDE', 'NATURALJOIN', 'THETAJOIN', 'LEFTJOIN', 'RIGHTJOIN'];
   ast.unaryExprTypes  = ['PROJECT', 'SELECT', 'RENAME'];

   ast.isBinaryExpr = (node) => {
     return node.type.toUpperCase() in ast.binaryExprTypes;
   }

   ast.isUnaryExpr = (node) => {
     return node.type.toUpperCase() in ast.unaryExprTypes;
   }

   return ast;
})();
