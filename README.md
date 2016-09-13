## Relational Algebra Parser


This package parses a relational algebra syntax into a simple AST. To interpret this Ast,


###To build the parser, from the commandline:

```
npm install
npm run build
```

###To use it in your code:
```
const parser = require('ra-parser');


try {
   const programAST = parser.parse('ValidId01 := [[attr1, attr2] -> [[1,2],[2,3]]];');
   /*
	  Do cool things with the AST
   */
} catch(e){
   // Won't reach here since there won't be a parsing error
   console.log(e.toString());
}
```

author: Adel Lahlou
