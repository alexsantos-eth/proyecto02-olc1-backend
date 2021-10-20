/* parser generated by jison 0.4.18 */
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
var index = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,27],$V1=[1,28],$V2=[1,29],$V3=[1,30],$V4=[1,31],$V5=[1,32],$V6=[1,8],$V7=[1,9],$V8=[1,10],$V9=[1,17],$Va=[1,35],$Vb=[1,36],$Vc=[1,37],$Vd=[1,22],$Ve=[1,38],$Vf=[1,23],$Vg=[1,39],$Vh=[1,40],$Vi=[1,41],$Vj=[5,7,8,9,10,11,12,17,24,25,26,36,72,73,74,76,77,78,81,82,86,87,88],$Vk=[1,53],$Vl=[2,26],$Vm=[1,57],$Vn=[1,58],$Vo=[1,55],$Vp=[1,56],$Vq=[1,62],$Vr=[14,20,35,36,40,45,46],$Vs=[20,35],$Vt=[1,80],$Vu=[1,81],$Vv=[1,76],$Vw=[1,75],$Vx=[1,74],$Vy=[1,78],$Vz=[1,79],$VA=[1,82],$VB=[1,83],$VC=[1,84],$VD=[20,46],$VE=[1,90],$VF=[1,89],$VG=[1,114],$VH=[1,115],$VI=[1,105],$VJ=[1,106],$VK=[1,107],$VL=[1,108],$VM=[1,109],$VN=[1,110],$VO=[1,111],$VP=[1,112],$VQ=[1,113],$VR=[1,116],$VS=[1,117],$VT=[13,14,20,35,46,47,48,49,50,51,52,53,54,55,56,57,60,61],$VU=[13,14,17,20,35,46,47,48,49,50,51,52,53,54,55,56,57,60,61],$VV=[2,63],$VW=[1,123],$VX=[1,124],$VY=[13,14,20,35,46,47,48,49,50,51,52,53,54,55,60,61],$VZ=[20,35,46,47,52,54,55,60,61],$V_=[20,35,46,52,54,60,61],$V$=[1,183],$V01=[1,184],$V11=[1,193],$V21=[17,35,46],$V31=[17,81,82],$V41=[1,205];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCTIONS":4,"EOF":5,"TYPE":6,"intType":7,"dblType":8,"boolType":9,"charType":10,"strType":11,"dynamicList":12,"minor":13,"major":14,"BLOCKCONTENT":15,"openBracket":16,"closeBracket":17,"INSTRUCTION":18,"DECLARATION":19,"semicolom":20,"LINEASSIGNMENT":21,"INCREMENTEXP":22,"METHODS":23,"breakRw":24,"continueRw":25,"returnRw":26,"CONTROLSEQ":27,"SWITCHSEQ":28,"LOOPSEQ":29,"ASSIGNMENTS":30,"ASSIGNMENT":31,"VECTORVALUE":32,"equals":33,"EXPRESSIONS":34,"comma":35,"id":36,"TERNARY":37,"VECTORASSIGNMENT":38,"CLASSINSTANCE":39,"openSquareBracket":40,"closeSquareBracket":41,"newRw":42,"integer":43,"VALUELIST":44,"openParenthesis":45,"closeParenthesis":46,"plus":47,"equalsEquals":48,"moreOrEquals":49,"lessOrEquals":50,"notEquals":51,"divition":52,"module":53,"times":54,"minus":55,"and":56,"or":57,"not":58,"VARVALUE":59,"questionMark":60,"colom":61,"plusPlus":62,"minusMinus":63,"decimal":64,"text":65,"character":66,"trBool":67,"flBool":68,"APPEND":69,"GETVALUE":70,"SETVALUE":71,"appendRw":72,"getValueRw":73,"setValueRw":74,"CONSTROLSEQSYM":75,"elseRw":76,"ifRw":77,"switchRw":78,"SWITCHSEQCASES":79,"SWITCHSEQCONTENT":80,"caseRw":81,"defaultRw":82,"WHILESEQ":83,"DOWHILESEQ":84,"FORSEQ":85,"whileRw":86,"doRw":87,"forRw":88,"FORSEQPARAMS":89,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"intType",8:"dblType",9:"boolType",10:"charType",11:"strType",12:"dynamicList",13:"minor",14:"major",16:"openBracket",17:"closeBracket",20:"semicolom",24:"breakRw",25:"continueRw",26:"returnRw",33:"equals",35:"comma",36:"id",40:"openSquareBracket",41:"closeSquareBracket",42:"newRw",43:"integer",45:"openParenthesis",46:"closeParenthesis",47:"plus",48:"equalsEquals",49:"moreOrEquals",50:"lessOrEquals",51:"notEquals",52:"divition",53:"module",54:"times",55:"minus",56:"and",57:"or",58:"not",60:"questionMark",61:"colom",62:"plusPlus",63:"minusMinus",64:"decimal",65:"text",66:"character",67:"trBool",68:"flBool",72:"appendRw",73:"getValueRw",74:"setValueRw",76:"elseRw",77:"ifRw",78:"switchRw",81:"caseRw",82:"defaultRw",86:"whileRw",87:"doRw",88:"forRw"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[6,4],[15,3],[4,2],[4,1],[18,2],[18,2],[18,2],[18,2],[18,2],[18,2],[18,2],[18,1],[18,1],[18,1],[19,2],[21,1],[21,3],[30,3],[30,1],[31,1],[31,3],[31,3],[31,1],[31,1],[38,9],[38,7],[39,4],[39,4],[39,6],[39,6],[39,7],[39,7],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,3],[34,2],[34,2],[34,3],[34,4],[34,3],[34,1],[37,5],[22,2],[22,2],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[32,4],[44,3],[44,1],[23,1],[23,1],[23,1],[69,6],[70,6],[71,8],[27,5],[27,2],[75,1],[75,2],[28,7],[79,2],[79,1],[80,4],[80,3],[29,1],[29,1],[29,1],[83,5],[84,7],[85,5],[89,5],[89,5],[89,5],[89,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 
        return $$[$0-1]; 
    
break;
case 2:
 
        this.$ = DATATYPE.INT; 
    
break;
case 3:
 
        this.$ = DATATYPE.DECIMAL; 
    
break;
case 4:
 
        this.$ = DATATYPE.BOOLEAN; 
    
break;
case 5:
 
        this.$ = DATATYPE.CHAR; 
    
break;
case 6:
 
        this.$ = DATATYPE.STRING; 
    
break;
case 7:

        this.$ = DATATYPE.DYNAMICLIST
    
break;
}
},
table: [{3:1,4:2,6:14,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,18:3,19:4,21:5,22:6,23:7,24:$V6,25:$V7,26:$V8,27:11,28:12,29:13,31:15,32:16,36:$V9,38:33,39:34,69:18,70:19,71:20,72:$Va,73:$Vb,74:$Vc,75:21,76:$Vd,77:$Ve,78:$Vf,83:24,84:25,85:26,86:$Vg,87:$Vh,88:$Vi},{1:[3]},{5:[1,42],6:14,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,18:43,19:4,21:5,22:6,23:7,24:$V6,25:$V7,26:$V8,27:11,28:12,29:13,31:15,32:16,36:$V9,38:33,39:34,69:18,70:19,71:20,72:$Va,73:$Vb,74:$Vc,75:21,76:$Vd,77:$Ve,78:$Vf,83:24,84:25,85:26,86:$Vg,87:$Vh,88:$Vi},o($Vj,[2,10]),{20:[1,44]},{20:[1,45]},{20:[1,46]},{20:[1,47]},{20:[1,48]},{20:[1,49]},{20:[1,50]},o($Vj,[2,18]),o($Vj,[2,19]),o($Vj,[2,20]),{30:51,31:52,36:$Vk,38:33,39:34},{20:[2,22]},{33:[1,54]},{20:$Vl,33:$Vm,40:$Vn,62:$Vo,63:$Vp},{20:[2,72]},{20:[2,73]},{20:[2,74]},{45:[1,59]},{15:60,16:$Vq,77:[1,61]},{45:[1,63]},o($Vj,[2,87]),o($Vj,[2,88]),o($Vj,[2,89]),o($Vr,[2,2]),o($Vr,[2,3]),o($Vr,[2,4]),o($Vr,[2,5]),o($Vr,[2,6]),{13:[1,64]},o($Vs,[2,29]),o($Vs,[2,30]),{45:[1,65]},{45:[1,66]},{45:[1,67]},{45:[2,80]},{45:[1,68]},{15:69,16:$Vq},{45:[1,70]},{1:[2,1]},o($Vj,[2,9]),o($Vj,[2,11]),o($Vj,[2,12]),o($Vj,[2,13]),o($Vj,[2,14]),o($Vj,[2,15]),o($Vj,[2,16]),o($Vj,[2,17]),{20:[2,21],35:[1,71]},o($Vs,[2,25]),o($Vs,$Vl,{33:$Vm,40:[1,72]}),{32:85,34:73,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($VD,[2,59]),o($VD,[2,60]),{32:85,34:86,36:$Vt,37:87,42:[1,88],43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{41:$VE,43:$VF},{32:85,34:91,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($Vj,[2,79]),{45:[2,81]},{4:92,6:14,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,18:3,19:4,21:5,22:6,23:7,24:$V6,25:$V7,26:$V8,27:11,28:12,29:13,31:15,32:16,36:$V9,38:33,39:34,69:18,70:19,71:20,72:$Va,73:$Vb,74:$Vc,75:21,76:$Vd,77:$Ve,78:$Vf,83:24,84:25,85:26,86:$Vg,87:$Vh,88:$Vi},{32:85,34:93,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{6:94,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5},{36:[1,95]},{36:[1,96]},{36:[1,97]},{32:85,34:98,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{86:[1,99]},{6:14,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,19:101,21:102,31:15,32:16,36:[1,103],38:33,39:34,89:100},{31:104,36:$Vk,38:33,39:34},{41:$VE},{13:$VG,14:$VH,20:[2,23],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{32:85,34:118,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:119,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{6:121,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,32:85,34:120,36:$Vt,37:122,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($VT,[2,57]),o($VU,[2,61]),o($VU,[2,62]),o($VU,$VV,{40:$VW}),o($VU,[2,64]),o($VU,[2,65]),o($VU,[2,66]),o($VU,[2,67]),o($VU,[2,68]),o($Vs,[2,27],{13:$VG,14:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS,60:$VX}),o($Vs,[2,28]),{6:125,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,36:[1,126]},{41:[1,127]},{33:[1,128]},{13:$VG,14:$VH,46:[1,129],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{6:14,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,17:[1,130],18:43,19:4,21:5,22:6,23:7,24:$V6,25:$V7,26:$V8,27:11,28:12,29:13,31:15,32:16,36:$V9,38:33,39:34,69:18,70:19,71:20,72:$Va,73:$Vb,74:$Vc,75:21,76:$Vd,77:$Ve,78:$Vf,83:24,84:25,85:26,86:$Vg,87:$Vh,88:$Vi},{13:$VG,14:$VH,46:[1,131],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{14:[1,132]},{35:[1,133]},{35:[1,134]},{35:[1,135]},{13:$VG,14:$VH,46:[1,136],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{45:[1,137]},{46:[1,138]},{20:[1,139]},{20:[1,140]},{20:$Vl,33:$Vm,40:$Vn},o($Vs,[2,24]),{32:85,34:141,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:142,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:143,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:144,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:145,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:146,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:147,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:148,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:149,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:150,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:151,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:152,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:153,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($VY,[2,52],{56:$VR,57:$VS}),o($VZ,[2,53],{13:$VG,14:$VH,48:$VJ,49:$VK,50:$VL,51:$VM,53:$VO,56:$VR,57:$VS}),{13:$VG,14:$VH,46:[1,154],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS,60:$VX},{46:[1,155]},{46:[1,156]},{43:$VF},{32:85,34:157,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($Vs,[2,33],{45:[1,158]}),o($Vs,[2,34],{45:[1,159]}),o([13,14,17,20,33,35,46,47,48,49,50,51,52,53,54,55,56,57,60,61],[2,69]),{16:[1,161],42:[1,160]},{15:162,16:$Vq},o($Vj,[2,8]),{16:[1,163]},o($Vr,[2,7]),{32:85,34:164,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:165,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:166,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{15:167,16:$Vq},{32:85,34:168,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{15:169,16:$Vq},{32:85,34:170,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,34:171,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($VZ,[2,39],{13:$VG,14:$VH,48:$VJ,49:$VK,50:$VL,51:$VM,53:$VO,56:$VR,57:$VS}),o($VY,[2,40],{56:$VR,57:$VS}),o($VY,[2,41],{56:$VR,57:$VS}),o($VY,[2,42],{56:$VR,57:$VS}),o($VY,[2,43],{56:$VR,57:$VS}),o($V_,[2,44],{13:$VG,14:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,53:$VO,55:$VQ,56:$VR,57:$VS}),o([20,35,46,47,52,53,54,55,60,61],[2,45],{13:$VG,14:$VH,48:$VJ,49:$VK,50:$VL,51:$VM,56:$VR,57:$VS}),o($V_,[2,46],{13:$VG,14:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,53:$VO,55:$VQ,56:$VR,57:$VS}),o($VZ,[2,47],{13:$VG,14:$VH,48:$VJ,49:$VK,50:$VL,51:$VM,53:$VO,56:$VR,57:$VS}),o($VY,[2,48],{56:$VR,57:$VS}),o($VY,[2,49],{56:$VR,57:$VS}),o([13,14,20,35,46,47,48,49,50,51,52,53,54,55,56,60,61],[2,50],{57:$VS}),o($VT,[2,51]),o($VT,[2,54]),{32:85,34:172,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($VT,[2,56]),{13:$VG,14:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS,61:[1,173]},{32:85,36:$Vt,43:$Vu,44:175,46:[1,174],59:176,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{32:85,36:$Vt,43:$Vu,44:178,46:[1,177],59:176,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{6:179,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5},{32:85,36:$Vt,43:$Vu,44:180,59:176,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($Vj,[2,78]),{79:181,80:182,81:$V$,82:$V01},{13:$VG,14:$VH,46:[1,185],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{13:$VG,14:$VH,46:[1,186],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{13:$VG,14:$VH,35:[1,187],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},o($Vj,[2,90]),{13:$VG,14:$VH,46:[1,188],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},o($Vj,[2,92]),{13:$VG,14:$VH,20:[1,189],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{13:$VG,14:$VH,20:[1,190],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},o($VT,[2,55]),{32:85,34:191,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($Vs,[2,35]),{35:$V11,46:[1,192]},o($V21,[2,71]),o($Vs,[2,36]),{35:$V11,46:[1,194]},{40:[1,195]},{17:[1,196],35:$V11},{17:[1,197],80:198,81:$V$,82:$V01},o($V31,[2,84]),{32:85,36:$Vt,43:$Vu,59:199,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{61:[1,200]},{20:[2,75]},{20:[2,76]},{32:85,34:201,36:$Vt,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{20:[1,202]},{22:204,32:85,34:203,36:$V41,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},{22:207,32:85,34:206,36:$V41,43:$Vu,45:$Vv,55:$Vw,58:$Vx,59:77,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o([20,35,46],[2,58],{13:$VG,14:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS}),o($Vs,[2,37]),{32:85,36:$Vt,43:$Vu,59:208,64:$Vy,65:$Vz,66:$VA,67:$VB,68:$VC},o($Vs,[2,38]),{43:[1,209]},o($Vs,[2,32]),o($Vj,[2,82]),o($V31,[2,83]),{61:[1,210]},{4:211,6:14,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,18:3,19:4,21:5,22:6,23:7,24:$V6,25:$V7,26:$V8,27:11,28:12,29:13,31:15,32:16,36:$V9,38:33,39:34,69:18,70:19,71:20,72:$Va,73:$Vb,74:$Vc,75:21,76:$Vd,77:$Ve,78:$Vf,83:24,84:25,85:26,86:$Vg,87:$Vh,88:$Vi},{13:$VG,14:$VH,46:[1,212],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},o($Vj,[2,91]),{13:$VG,14:$VH,46:[2,93],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{46:[2,94]},o([13,14,46,47,48,49,50,51,52,53,54,55,56,57],$VV,{40:$VW,62:$Vo,63:$Vp}),{13:$VG,14:$VH,46:[2,95],47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:$VO,54:$VP,55:$VQ,56:$VR,57:$VS},{46:[2,96]},o($V21,[2,70]),{41:[1,213]},{4:214,6:14,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,18:3,19:4,21:5,22:6,23:7,24:$V6,25:$V7,26:$V8,27:11,28:12,29:13,31:15,32:16,36:$V9,38:33,39:34,69:18,70:19,71:20,72:$Va,73:$Vb,74:$Vc,75:21,76:$Vd,77:$Ve,78:$Vf,83:24,84:25,85:26,86:$Vg,87:$Vh,88:$Vi},o($V31,[2,86],{19:4,21:5,22:6,23:7,27:11,28:12,29:13,6:14,31:15,32:16,69:18,70:19,71:20,75:21,83:24,84:25,85:26,38:33,39:34,18:43,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,24:$V6,25:$V7,26:$V8,36:$V9,72:$Va,73:$Vb,74:$Vc,76:$Vd,77:$Ve,78:$Vf,86:$Vg,87:$Vh,88:$Vi}),{20:[2,77]},o($Vs,[2,31]),o($V31,[2,85],{19:4,21:5,22:6,23:7,27:11,28:12,29:13,6:14,31:15,32:16,69:18,70:19,71:20,75:21,83:24,84:25,85:26,38:33,39:34,18:43,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:$V5,24:$V6,25:$V7,26:$V8,36:$V9,72:$Va,73:$Vb,74:$Vc,76:$Vd,77:$Ve,78:$Vf,86:$Vg,87:$Vh,88:$Vi})],
defaultActions: {15:[2,22],18:[2,72],19:[2,73],20:[2,74],38:[2,80],42:[2,1],61:[2,81],185:[2,75],186:[2,76],204:[2,94],207:[2,96],212:[2,77]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
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


    const DATATYPE = require('./ast')
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
test_match:function(match, indexed_rule) {
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
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
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
case 0:/* IGNORE */
break;
case 1:/* IGNORE */
break;
case 2:/* IGNORE */
break;
case 3:return 10
break;
case 4:return 9
break;
case 5:return 11
break;
case 6:return 8
break;
case 7:return 7
break;
case 8:return 67
break;
case 9:return 68
break;
case 10:return 50
break;
case 11:return 49
break;
case 12:return 48
break;
case 13:return 51
break;
case 14:return 63
break;
case 15:return 62
break;
case 16:return 60
break;
case 17:return 61
break;
case 18:return 52
break;
case 19:return 53
break;
case 20:return 54
break;
case 21:return 'power'
break;
case 22:return 33
break;
case 23:return 13
break;
case 24:return 14
break;
case 25:return 55
break;
case 26:return 47
break;
case 27:return 56
break;
case 28:return 58
break;
case 29:return 57
break;
case 30:return 35
break;
case 31:return 20
break;
case 32:return 16
break;
case 33:return 17
break;
case 34:return 45
break;
case 35:return 46
break;
case 36:return 40
break;
case 37:return 41
break;
case 38:return 42;
break;
case 39:return 12
break;
case 40:return 72
break;
case 41:return 73
break;
case 42:return 74
break;
case 43:return 77
break;
case 44:return 76
break;
case 45:return 78
break;
case 46:return 24
break;
case 47:return 81
break;
case 48:return 82
break;
case 49:return 86
break;
case 50:return 88
break;
case 51:return 87
break;
case 52:return 25
break;
case 53:return 26
break;
case 54:"\""
break;
case 55:"\\\""
break;
case 56:"\\\\"
break;
case 57:"\\n"
break;
case 58:"\\r"
break;
case 59:"\\t"
break;
case 60:"\\0"
break;
case 61: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 65; 
break;
case 62: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 66; 
break;
case 63:return 64
break;
case 64:return 43
break;
case 65:return 36
break;
case 66:return 5
break;
case 67: console.error('Error léxico: ' 
                              + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line 
                              + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:--)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:new\b)/i,/^(?:DynamicList\b)/i,/^(?:append\b)/i,/^(?:getValue\b)/i,/^(?:setValue\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:switch\b)/i,/^(?:break\b)/i,/^(?:case\b)/i,/^(?:default\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:do\b)/i,/^(?:continue\b)/i,/^(?:return\b)/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"inclusive":true}}
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
exports.parser = index;
exports.Parser = index.Parser;
exports.parse = function () { return index.parse.apply(index, arguments); };
exports.main = function commonjsMain (args) {
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