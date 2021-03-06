/* parser generated by jison 0.4.16 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,7],$V2=[1,8],$V3=[1,11],$V4=[1,9],$V5=[1,10],$V6=[5,7,12,22,23,26,27],$V7=[2,6],$V8=[1,16],$V9=[1,17],$Va=[1,18],$Vb=[1,19],$Vc=[1,20],$Vd=[1,21],$Ve=[1,22],$Vf=[1,23],$Vg=[10,13,14,15,16,17,18,19,20,21],$Vh=[1,25],$Vi=[1,47],$Vj=[1,45],$Vk=[1,46],$Vl=[1,48],$Vm=[1,49],$Vn=[1,50],$Vo=[10,13,16,17,18,19,20,21],$Vp=[25,29],$Vq=[1,58],$Vr=[1,59],$Vs=[13,25,29,32,34,35],$Vt=[13,25,34,35],$Vu=[1,94];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"block":4,"EOF":5,"statement":6,"ID":7,"ASSIGN":8,"expression":9,"ENDSTATEMENT":10,"Relation":11,"(":12,")":13,"INTERSECT":14,"UNION":15,"DIFFERENCE":16,"PRODUCT":17,"DIVIDE":18,"JOIN":19,"LEFTJOIN":20,"RIGHTJOIN":21,"PROJECT":22,"[":23,"ProjectList":24,"]":25,"RENAME":26,"SELECT":27,"ConditionList":28,",":29,"AttributeList":30,"Value":31,"COMPARISON":32,"NOT":33,"AND":34,"OR":35,"STRING":36,"FLOAT":37,"INT":38,"HEADERTAIL":39,"RelRowList":40,"CellList":41,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"ID",8:"ASSIGN",10:"ENDSTATEMENT",12:"(",13:")",14:"INTERSECT",15:"UNION",16:"DIFFERENCE",17:"PRODUCT",18:"DIVIDE",19:"JOIN",20:"LEFTJOIN",21:"RIGHTJOIN",22:"PROJECT",23:"[",25:"]",26:"RENAME",27:"SELECT",29:",",32:"COMPARISON",33:"NOT",34:"AND",35:"OR",36:"STRING",37:"FLOAT",38:"INT",39:"HEADERTAIL"},
productions_: [0,[3,2],[4,1],[4,2],[6,4],[6,2],[9,1],[9,1],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,7],[9,9],[9,7],[24,1],[24,3],[30,3],[30,5],[28,3],[28,3],[28,2],[28,3],[28,3],[31,1],[31,1],[31,1],[31,1],[11,7],[40,3],[40,5],[41,1],[41,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return new yy.Program($$[$0-1]); 
break;
case 2:
this.$ =  [$$[$0]];
break;
case 3:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 4:
this.$ = new yy.Assign($$[$0-3], $$[$0-1]);
break;
case 5:
this.$ = new yy.Assign('it', $$[$0-1]);
break;
case 6:
this.$ = new yy.RelationReference(yytext);
break;
case 7:
this.$ = $$[$0];
break;
case 8: case 25:
this.$ = $$[$0-1];
break;
case 9:
this.$ = new yy.Intersect($$[$0-2], $$[$0] );
break;
case 10:
this.$ = new yy.Union($$[$0-2], $$[$0] );
break;
case 11:
this.$ = new yy.Difference($$[$0-2], $$[$0] );
break;
case 12:
this.$ = new yy.Product($$[$0-2], $$[$0] );
break;
case 13:
this.$ = new yy.Divide($$[$0-2], $$[$0] );
break;
case 14:
this.$ = new yy.NaturalJoin( $$[$0-2], $$[$0] );
break;
case 15:
this.$ = new yy.LeftJoin( $$[$0-2], $$[$0] );
break;
case 16:
this.$ = new yy.RightJoin( $$[$0-2], $$[$0] );
break;
case 17:
this.$ = new yy.Project($$[$0-4], $$[$0-1] );
break;
case 18:
this.$ = new yy.Rename($$[$0-6], $$[$0-4], $$[$0-1]);
break;
case 19:
this.$ = new yy.Select($$[$0-4], $$[$0-1] );
break;
case 20:
this.$ = [yytext];
break;
case 21: case 37:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 22:
this.$ = [new yy.Attribute($$[$0-2], $$[$0])];
break;
case 23:
 this.$ = $$[$0-4]; this.$.push(new yy.Attribute($$[$0-2], $$[$0])); 
break;
case 24:
this.$ = new yy.ConditionList($$[$0-1], $$[$0-2], $$[$0]);
break;
case 26:
this.$ = new yy.ConditionList('NOT', $$[$0]);
break;
case 27:
this.$ = new yy.ConditionList('AND', $$[$0-2], $$[$0]);
break;
case 28:
this.$ = new yy.ConditionList('OR', $$[$0-2], $$[$0]);
break;
case 29:
this.$ = yytext;
break;
case 30:
this.$ = yytext.substring(1, yytext.length - 1);
break;
case 31:
this.$ = parseFloat(yytext);
break;
case 32:
this.$ = parseInt(yytext, 10);
break;
case 33:
this.$ = new yy.Relation($$[$0-4], $$[$0-1]);
break;
case 34:
this.$ =  [$$[$0-1]];
break;
case 35:
 this.$ = $$[$0-4]; this.$.push($$[$0-1]); 
break;
case 36:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,9:5,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{1:[3]},{5:[1,12],6:13,7:$V0,9:5,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},o($V6,[2,2]),o([10,14,15,16,17,18,19,20,21],$V7,{8:[1,14]}),{10:[1,15],14:$V8,15:$V9,16:$Va,17:$Vb,18:$Vc,19:$Vd,20:$Ve,21:$Vf},o($Vg,[2,7]),{7:$Vh,9:24,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{23:[1,26]},{23:[1,27]},{23:[1,28]},{23:[1,29]},{1:[2,1]},o($V6,[2,3]),{7:$Vh,9:30,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},o($V6,[2,5]),{7:$Vh,9:31,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{7:$Vh,9:32,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{7:$Vh,9:33,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{7:$Vh,9:34,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{7:$Vh,9:35,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{7:$Vh,9:36,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{7:$Vh,9:37,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{7:$Vh,9:38,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},{13:[1,39],14:$V8,15:$V9,16:$Va,17:$Vb,18:$Vc,19:$Vd,20:$Ve,21:$Vf},o($Vg,$V7),{7:[1,41],24:40},{7:[1,42]},{7:$Vi,12:$Vj,28:43,31:44,33:$Vk,36:$Vl,37:$Vm,38:$Vn},{7:[1,52],30:51},{10:[1,53],14:$V8,15:$V9,16:$Va,17:$Vb,18:$Vc,19:$Vd,20:$Ve,21:$Vf},o($Vg,[2,9]),o($Vg,[2,10]),o($Vo,[2,11],{14:$V8,15:$V9}),o($Vo,[2,12],{14:$V8,15:$V9}),o($Vo,[2,13],{14:$V8,15:$V9}),o($Vo,[2,14],{14:$V8,15:$V9}),o($Vo,[2,15],{14:$V8,15:$V9}),o($Vo,[2,16],{14:$V8,15:$V9}),o($Vg,[2,8]),{25:[1,54],29:[1,55]},o($Vp,[2,20]),{18:[1,56]},{25:[1,57],34:$Vq,35:$Vr},{32:[1,60]},{7:$Vi,12:$Vj,28:61,31:44,33:$Vk,36:$Vl,37:$Vm,38:$Vn},{7:$Vi,12:$Vj,28:62,31:44,33:$Vk,36:$Vl,37:$Vm,38:$Vn},o($Vs,[2,29]),o($Vs,[2,30]),o($Vs,[2,31]),o($Vs,[2,32]),{25:[1,63],29:[1,64]},{18:[1,65]},o($V6,[2,4]),{12:[1,66]},{7:[1,67]},{7:[1,68]},{12:[1,69]},{7:$Vi,12:$Vj,28:70,31:44,33:$Vk,36:$Vl,37:$Vm,38:$Vn},{7:$Vi,12:$Vj,28:71,31:44,33:$Vk,36:$Vl,37:$Vm,38:$Vn},{7:$Vi,31:72,36:$Vl,37:$Vm,38:$Vn},{13:[1,73],34:$Vq,35:$Vr},o($Vt,[2,26]),{39:[1,74]},{7:[1,75]},{7:[1,76]},{7:$Vh,9:77,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},o($Vp,[2,21]),{25:[1,78]},{7:$Vh,9:79,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},o([13,25,34],[2,27],{35:$Vr}),o($Vt,[2,28]),o($Vt,[2,24]),o($Vt,[2,25]),{23:[1,81],40:80},{18:[1,82]},o($Vp,[2,22]),{13:[1,83],14:$V8,15:$V9,16:$Va,17:$Vb,18:$Vc,19:$Vd,20:$Ve,21:$Vf},{12:[1,84]},{13:[1,85],14:$V8,15:$V9,16:$Va,17:$Vb,18:$Vc,19:$Vd,20:$Ve,21:$Vf},{25:[1,86],29:[1,87]},{7:$Vi,31:89,36:$Vl,37:$Vm,38:$Vn,41:88},{7:[1,90]},o($Vg,[2,17]),{7:$Vh,9:91,11:6,12:$V1,22:$V2,23:$V3,26:$V4,27:$V5},o($Vg,[2,19]),o($Vg,[2,33]),{23:[1,92]},{25:[1,93],29:$Vu},o($Vp,[2,36]),o($Vp,[2,23]),{13:[1,95],14:$V8,15:$V9,16:$Va,17:$Vb,18:$Vc,19:$Vd,20:$Ve,21:$Vf},{7:$Vi,31:89,36:$Vl,37:$Vm,38:$Vn,41:96},o($Vp,[2,34]),{7:$Vi,31:97,36:$Vl,37:$Vm,38:$Vn},o($Vg,[2,18]),{25:[1,98],29:$Vu},o($Vp,[2,37]),o($Vp,[2,35])],
defaultActions: {12:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = new Error();

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 39;
break;
case 1:return 29;
break;
case 2:return 10;
break;
case 3:return 35;
break;
case 4:return 34;
break;
case 5:return 33;
break;
case 6:return 32;
break;
case 7:return 8;
break;
case 8:return 22;
break;
case 9:return 26;
break;
case 10:return 27;
break;
case 11:return 15;
break;
case 12:return 14;
break;
case 13:return 16;
break;
case 14:return 17;
break;
case 15:return 18;
break;
case 16:return 20;
break;
case 17:return 21;
break;
case 18:return 19;
break;
case 19:return 12;
break;
case 20:return 13;
break;
case 21:return 23;
break;
case 22:return 25;
break;
case 23:return 7;
break;
case 24:return 36;
break;
case 25:return 37;
break;
case 26:return 38;
break;
case 27:/* skip whitespace */
break;
case 28:return 5;
break;
}
},
rules: [/^(?:->)/i,/^(?:,)/i,/^(?:;)/i,/^(?:OR|\|\|)/i,/^(?:AND|&&)/i,/^(?:NOT\b)/i,/^(?:==|!=|<=|>=|<|>)/i,/^(?::=)/i,/^(?:PROJECT\b)/i,/^(?:RENAME\b)/i,/^(?:SELECT\b)/i,/^(?:UNION|\+)/i,/^(?:INTERSECT|\^)/i,/^(?:DIFFERENCE|-)/i,/^(?:PRODUCT|X\b)/i,/^(?:DIVIDE|\/)/i,/^(?:LEFTJOIN|~@)/i,/^(?:RIGHTJOIN|@~)/i,/^(?:JOIN|~~)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:([a-zA-Z][a-zA-Z0-9]*))/i,/^(?:('([^\']|'')*'))/i,/^(?:([0-9]+\.[0-9]+))/i,/^(?:([0-9]+))/i,/^(?:\s+)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}