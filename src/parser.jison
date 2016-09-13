/* Describes the semantics for relational algebra implementation */

%left PRODUCT JOIN LEFTJOIN RIGHTJOIN DIFFERENCE DIVIDE
%left UNION INTERSECT
%left AND
%left OR
%left NOT

%%

program
  : block EOF
  { return new yy.Program($1); }
  ;

block
  : statement                             ->  [$1]
  | block statement
  { $$ = $1; $$.push($2); }
  ;


statement
  : ID ASSIGN expression ENDSTATEMENT     -> new yy.Assign($1, $3)
  | expression ENDSTATEMENT               -> new yy.Assign('it', $1)
  ;

expression
   : ID                                   -> new yy.RelationReference(yytext)
   | Relation                             -> $1
   | '(' expression ')'                   -> $2
   | expression INTERSECT expression      -> new yy.Intersect($1, $3 )
   | expression UNION expression          -> new yy.Union($1, $3 )
   | expression DIFFERENCE expression     -> new yy.Difference($1, $3 )
   | expression PRODUCT expression        -> new yy.Product($1, $3 )
   | expression DIVIDE expression         -> new yy.Divide($1, $3 )
   | expression JOIN expression           -> new yy.NaturalJoin( $1, $3 )
   | expression LEFTJOIN expression       -> new yy.LeftJoin( $1, $3 )
   | expression RIGHTJOIN expression      -> new yy.RightJoin( $1, $3 )
   | PROJECT '[' AttributeList ']' '(' expression ')' -> new yy.Project($3, $6 )
   | RENAME  '[' ID DIVIDE ID ']' '(' expression ')'  -> new yy.Rename( $8, $3, $5 )
   | SELECT  '[' ConditionList ']' '(' expression ')' -> new yy.Select($3, $6 )
   ;

AttributeList
   : ID                                   -> new yy.AttributeList( [$1] )
   | AttributeList ',' ID                 -> $1.add($3)
   ;

ConditionList
   : Value COMPARISON Value           -> new yy.ConditionList($2, $1, $3)
   | '(' ConditionList ')'            -> $2
   | NOT ConditionList                -> new yy.ConditionList('NOT', $2)
   | ConditionList AND ConditionList  -> new yy.ConditionList('AND', $1, $3)
   | ConditionList OR ConditionList   -> new yy.ConditionList('OR', $1, $3)
   ;

Value
   : ID                                -> new yy.Value(yytext)
   | STRING                            -> new yy.Value(yytext.substring(1, yytext.length - 1))
   | FLOAT                             -> new yy.Value(parseFloat(yytext))
   | INT                               -> new yy.Value(parseInt(yytext, 10))
   ;

Relation
   : '[' '[' AttributeList ']' HEADERTAIL RelRowList ']' -> new yy.Relation($3, $6)
   ;

RelRowList
   : '[' CellList ']'                 ->  [$2]
   | RelRowList ',' '[' CellList ']'
   { $$ = $1; $$.push($4); }
   ;

CellList
   : Value                             -> [$1]
   | CellList ',' Value
   { $$ = $1; $$.push($3); }
   ;
