
%options case-insensitive

id        [a-zA-Z][a-zA-Z0-9]*
string    \'([^\']|\'\')*\'
FLOAT     [0-9]+\.[0-9]+
INT       [0-9]+

%%


"->"                          return 'HEADERTAIL';
","                           return ',';
";"                           return 'ENDSTATEMENT';

OR|"||"                       return 'OR';
AND|"&&"                      return 'AND';
NOT                           return 'NOT';
"=="|"!="|"<="|">="|"<"|">"   return 'COMPARISON';
":="                          return 'ASSIGN';


"PROJECT"                       return 'PROJECT';
"RENAME"                        return 'RENAME';
"SELECT"                        return 'SELECT';
"UNION"|"+"                     return 'UNION';
"INTERSECT"|"^"                 return 'INTERSECT';
"DIFFERENCE"|"-"                return 'DIFFERENCE';
"PRODUCT"|"X"                   return 'PRODUCT';
"DIVIDE"|"/"                    return 'DIVIDE';
"LEFTJOIN"|"~@"                 return 'LEFTJOIN';
"RIGHTJOIN"|"@~"                return 'RIGHTJOIN';
"JOIN"|"~~"                     return 'JOIN';



"("                           return '(';
")"                           return ')';
"["                           return '[';
"]"                           return ']';

{id}               return 'ID';
{string}           return 'STRING';
{FLOAT}            return 'FLOAT';
{INT}              return 'INT';
\s+                /* skip whitespace */
<<EOF>>            return 'EOF';
