"use strict";

const 
   parser        = require('../app.js'),
   ast           = parser.yy,
   Program       = ast.Program,
   Statement     = ast.Statement,
   Assign        = ast.Assign,
   Intersect     = ast.Intersect,
   Union         = ast.Union,
   Difference    = ast.Difference,
   Product       = ast.Product,
   Divide        = ast.Divide,
   NaturalJoin   = ast.NaturalJoin,
   ThetaJoin     = ast.ThetaJoin,
   LeftJoin      = ast.LeftJoin,
   RightJoin     = ast.RightJoin,
   Project       = ast.Project,
   Rename        = ast.Rename,
   Select        = ast.Select,
   Attribute     = ast.Attribute,
   AttributeList = ast.AttributeList,
   ConditionList = ast.ConditionList,
   Relation      = ast.Relation,
   Value         = ast.Value,
   RelationReference = ast.RelationReference,
   parse         = function(input){
	  return parser.parse(input);
   };

module.exports = {
   testBinaryExprWithReferences : function(test) {
	  test.expect(16);

	  test.deepEqual(parse('Relation Union Relation2;'),
			new Program(
			   new Assign('it',
				  new Union(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation + Relation2;'),
			new Program(
			   new Assign('it',
				  new Union(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));


	  test.deepEqual(parse('Relation Intersect Relation2;'),
			new Program(
			   new Assign('it',
				  new Intersect(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation ^ Relation2;'),
			new Program(
			   new Assign('it',
				  new Intersect(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation Difference Relation2;'),
			new Program(
			   new Assign('it',
				  new Difference(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation - Relation2;'),
			new Program(
			   new Assign('it',
				  new Difference(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation Product Relation2;'),
			new Program(
			   new Assign('it',
				  new Product(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation X Relation2;'),
			new Program(
			   new Assign('it',
				  new Product(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation Divide Relation2;'),
			new Program(
			   new Assign('it',
				  new Product(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation / Relation2;'),
			new Program(
			   new Assign('it',
				  new Product(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation Join Relation2;'),
			new Program(
			   new Assign('it',
				  new Union(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation ~~ Relation2;'),
			new Program(
			   new Assign('it',
				  new Union(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation LeftJoin Relation2;'),
			new Program(
			   new Assign('it',
				  new LeftJoin(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation ~@ Relation2;'),
			new Program(
			   new Assign('it',
				  new LeftJoin(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation RightJoin Relation2;'),
			new Program(
			   new Assign('it',
				  new RightJoin(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.deepEqual(parse('Relation @~ Relation2;'),
			new Program(
			   new Assign('it',
				  new RightJoin(
					 new RelationReference('Relation'),
					 new RelationReference('Relation2')))));

	  test.done();
   },

   testRelationLiterals: function(test){
	  test.expect(5);

	  test.deepEqual(parse("[[attr1 / Integer, attr2 / Integer] -> [1,2], [2,3], [3,4]];"),
			new Program(
			   new Assign('it',
				  new Relation([
					 new Attribute('attr1', 'Integer'),
					 new Attribute('attr2', 'Integer')
				  ],
				  [[1, 2],
				  [2, 3],
				  [3, 4]]))));


	  test.deepEqual(parse("AnId := [[attr1 / Integer, attr2 / Integer] -> [1,2], [2,3], [3,4]];"),
			new Program(
			   new Assign('AnId',
				  new Relation([
					 new Attribute('attr1', 'Integer'),
					 new Attribute('attr2', 'Integer')
				  ],
				  [[1, 2],
				  [2, 3],
				  [3, 4]]))));

	  test.deepEqual(parse("AnId := [[attr1 / Integer, attr2 / Integer] -> [1,2], [2,3], [3,4]] + ARelation;"),
			new Program(
			   new Assign('AnId',
				  new Union(
					 new Relation([
						new Attribute('attr1', 'Integer'),
						new Attribute('attr2', 'Integer')
					 ],
					 [[1, 2],
					 [2, 3],
					 [3, 4]]),
					 new RelationReference('ARelation')))));

	  test.deepEqual(parse("AnId := ARelation1 ~~ [[attr1 / Integer, attr2 / Integer] -> [1,2], [2,3], [3,4]];"),
			new Program(
			   new Assign('AnId',
				  new NaturalJoin(
					 new RelationReference('ARelation1'),
					 new Relation([
						new Attribute('attr1', 'Integer'),
						new Attribute('attr2', 'Integer')
					 ],
					 [[1, 2],
					 [2, 3],
					 [3, 4]])))));

	  test.deepEqual(parse('NewRelation := Project[attr1, attr2]([[attr1 / Integer, attr2 / Integer] -> [1,2], [2,3], [3,4]]);'),
			new Program(
			   new Assign('NewRelation',
				  new Project(
					 ['attr1', 'attr2'],
					 new Relation([
						new Attribute('attr1', 'Integer'),
						new Attribute('attr2', 'Integer')
					 ],		
					 [[1, 2],
					 [2, 3],
					 [3, 4]])))));

	  test.done();
   },

   testUnaryExprWithReferences : function(test) {
	  test.expect(6);

	  test.deepEqual(parse('NewRelation := Project[attr1, attr2](Data1);'),
			new Program(
			   new Assign('NewRelation',
				  new Project(
					 ['attr1', 'attr2'],
					 new RelationReference('Data1')))), "Test Projection");

	  test.deepEqual(parse('NewRelation := Rename[oldattr/newattr](Data1);'),
			new Program(
			   new Assign('NewRelation',
				  new Rename(
					 'oldattr',
					 'newattr',
					 new RelationReference('Data1')))), "Test Rename");

	  test.deepEqual(parse('NewRelation := Select[attr1 == 10](Arelation);'),
			new Program(
			   new Assign('NewRelation',
				  new Select(
					 new ConditionList('==', 'attr1', 10),
					 new RelationReference('Arelation')))), "Test Select - single condition");

	  test.deepEqual(parse("NewRelation := Select[attr1 == 10 AND attr2 != 'London'](Arelation);"),
			new Program(
			   new Assign('NewRelation',
				  new Select(
					 new ConditionList('AND',
						new ConditionList('==', 'attr1', 10),
						new ConditionList('!=', 'attr2', 'London')),
					 new RelationReference('Arelation')))), "Test Select - AND condition");

	  test.deepEqual(parse("NewRelation := Select[NOT (attr1 == 10) AND attr2 != 'London'](Arelation);"),
			new Program(
			   new Assign('NewRelation',
				  new Select(
					 new ConditionList('AND',
						new ConditionList('NOT',
						   new ConditionList('==', 'attr1', 10)),
						new ConditionList('!=', 'attr2', 'London')),
					 new RelationReference('Arelation')))), "Test Select - 'NOT' associativity");

	  test.deepEqual(parse("NewRelation := Select[NOT (attr1 == 10 AND attr2 != 'London')](Arelation);"),
			new Program(
			   new Assign('NewRelation',
				  new Select(
					 new ConditionList('NOT',
						new ConditionList('AND',
						   new ConditionList('==', 'attr1', 10),
						   new ConditionList('!=', 'attr2', 'London'))),
					 new RelationReference('Arelation')))), "Test 2 for 'NOT' associativity");
	  test.done();
   },

   testPrograms : function(test) {
	  test.expect(1);

	  test.deepEqual(parse("Arelation := [[attr1 / Integer, attr2 / Integer] -> [1,2], [2,3], [3,4]];" +
			   "Brelation := Select[NOT (attr1 == 1 OR attr2 != 2)](Arelation);" +
			   "Crelation := Arelation + Brelation;"),

			new Program(
			   [new Assign('Arelation',
				  new Relation([
					 new Attribute('attr1', 'Integer'),
					 new Attribute('attr2', 'Integer')
				  ],
				  [[1, 2],
				  [2, 3],
				  [3, 4]])),
			   new Assign('Brelation',
				  new Select(
					 new ConditionList('NOT',
						new ConditionList('OR',
						   new ConditionList('==', 'attr1', 1),
						   new ConditionList('!=', 'attr2', 2))),
					 new RelationReference('Arelation'))),
			   new Assign('Crelation',
				  new Union(
					 new RelationReference('Arelation'),
					 new RelationReference('Brelation')))]));
	  test.done();
   },
};
