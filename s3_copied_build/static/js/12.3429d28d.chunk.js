(this["webpackJsonpstemgarden.org"]=this["webpackJsonpstemgarden.org"]||[]).push([[12],{380:function(e,t,n){"use strict";function r(e,t){return e.filter((function(e){return t.includes(e)}))}n.d(t,"a",(function(){return r}))},421:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _e}));var r=n(0),i=n.n(r),o=n(11),a=n(24),c=n(380);function s(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function u(e){return e[s(0,e.length)]}var l=function(){for(var e=[],t=0,n=0;n<42;n++){if(m(n)){var r=b(n);e[t++]=r}if(x(n)){var i=f(n);e[t++]=i}if(m(c=n)&&x(c)){var o=p(n);e[t++]=o}if(g(n)){var a=j(n);e[t++]=a}}var c;return console.log("Mapped each of the ".concat(e.length," LineIds to the set of Cells in it --\x3e ")),e}();var d=l.length,h=function(){for(var e=new Array(42).fill([]),t=function(t){l[t].forEach((function(n){e[n]=e[n].concat(t)}))},n=0;n<d;n++)t(n);return console.log("Mapped each of the ".concat(42," CellIds to the set of all Lines that include it.")),e}();function b(e){return[e+0,e+7,e+14,e+21]}function f(e){return[e+0,e+1,e+2,e+3]}function p(e){return[e+0+0,e+7+1,e+14+2,e+21+3]}function j(e){return[e-0+0,e-7+1,e-14+2,e-21+3]}function m(e){return 6-v(e)>=4}function x(e){return 7-e%7>=4}function g(e){return function(e){return v(e)>=3}(e)&&x(e)}function v(e){return Math.floor(e/7)}function O(e){var t=[0,1,2,3,4,5,6];return e.forEach((function(e){-1!==e&&(t[e%7]=e+7)})),t}function y(e){if(w(e).length<7)return e.length%2===0?"playerOnesTurn":"playerTwosTurn";var t=e.length%2===1?"playerOne":"playerTwo",n=e.filter((function(t,n){return n%2!==e.length%2})),r=e.slice(-1),i=h[r];console.log("linesAffectedByLastMove --\x3e ".concat(i));for(var o=0;o<i.length;o++){var a=i[o],s=l[a];if(4===Object(c.a)(s,n).length)return"playerOne"===t?"playerOneWins":"playerTwoWins"}return function(e){return!(e.length<42)&&42===w(e).length}(e)?"gameOverDraw":e.length%2===0?"playerOnesTurn":"playerTwosTurn"}function w(e){return e.filter((function(e){return-1!==e}))}function S(e){var t=function(e){for(var t=[],n=function(e){return e.filter((function(e,t){return t%2===0}))}(e),r=0;r<d;r++){var i=l[r];3===Object(c.a)(i,n).length&&(t=t.concat(i.filter((function(t){return!e.includes(t)}))))}return console.log("Found Wins: ".concat(t)),t}(e),n=function(e){for(var t=[],n=function(e){return e.filter((function(e,t){return t%2===1}))}(e),r=0;r<d;r++){var i=l[r];3===Object(c.a)(i,n).length&&(console.log("Found Threat in Line ".concat(r,": ").concat(l)),t=t.concat(i.filter((function(e){return!n.includes(e)}))))}return console.log("Found Threats: ".concat(t)),t}(e),r=function(e){return O(e).filter((function(e){return e<42}))}(e),i=Object(c.a)(t,r),o=Object(c.a)(n,r);return i.length>0?(console.log('Bot found Winning move "'.concat(t,'" in legal options ').concat(r)),u(i)):o.length>0?(console.log("Choosing bot move with threats: ".concat(n," and legal options ").concat(r)),u(o)):(console.log("Choosing RANDOM bot move with NO ways to win and NO ways to block."),u(r))}var C=["Minus how many?","Take away what?","How far apart?"];var T=["Add","What's the Sum?","Find the Total"],A=["Subtract","Find the Difference","How much is left?"],M=["Plus what?","Add how many?","How many more?"],F=["How far apart?"];function k(e){var t={};return"easy"===e?(t.a=s(3,20),t.b=s(3,20)):"medium"===e?(t.a=s(20,100),t.b=s(20,100)):"hard"===e&&(t.a=s(100,1e3),t.b=s(100,1e3)),t.c=t.a+t.b,{type:"missingSumTwo",vars:t,correctAnswer:t.c,equationString:"".concat(t.a," + ").concat(t.b," = __"),instructions:u(T),inputType:"textField"}}function q(e){var t={};return"easy"===e?(t.a=s(2,13),t.b=s(2,13),t.c=s(2,13)):"medium"===e?(t.a=s(10,100),t.b=s(10,100),t.c=s(10,100)):"hard"===e&&(t.a=s(100,600),t.b=s(50,100),t.c=s(50,100)),t.d=t.a+t.b+t.c,{type:"missingSumThree",vars:t,correctAnswer:t.d,equationString:"".concat(t.a," + ").concat(t.b," + ").concat(t.c," =__"),instructions:u(T),inputType:"textField"}}function I(e){var t={};return"easy"===e?(t.a=s(10,40),t.b=s(3,10)):"medium"===e?(t.a=s(40,200),t.b=s(10,40)):"hard"===e&&(t.a=s(300,1e3),t.b=s(50,300)),t.c=t.a-t.b,{type:"missingDifference",vars:t,correctAnswer:t.c,equationString:"".concat(t.a," - ").concat(t.b," = __"),instructions:u(A),inputType:"textField"}}function B(e){var t={};return"easy"===e?(t.a=s(10,40),t.b=s(3,10),t.c=t.a+t.b):"medium"===e?(t.a=s(40,200),t.b=s(10,40),t.c=t.a+t.b):"hard"===e&&(t.a=s(100,700),t.b=s(50,300),t.c=t.a+t.b),{type:"missingAddendTwo",vars:t,correctAnswer:t.b,equationString:"".concat(t.a," + __ = ").concat(t.c),instructions:u(M),inputType:"textField"}}function D(e){var t={};return"easy"===e?(t.a=s(2,12),t.b=s(2,12),t.c=s(2,12)):"medium"===e?(t.a=s(11,33),t.b=s(11,33),t.c=s(11,33)):"hard"===e&&(t.a=s(30,100),t.b=s(30,100),t.c=s(30,100)),t.d=t.a+t.b+t.c,{type:"missingAddendThree",vars:t,correctAnswer:t.c,equationString:"".concat(t.a," + ").concat(t.b," + __ = ").concat(t.d),instructions:u(M),inputType:"textField"}}function _(e){var t={};return"easy"===e?(t.a=s(3,10),t.b=s(10,20)):"medium"===e?(t.a=s(10,40),t.b=s(20,100)):"hard"===e&&(t.a=s(100,1e3),t.b=s(100,1e3)),t.c=Math.abs(t.a-t.b),{type:"howFarApart",vars:t,correctAnswer:t.c,equationString:"".concat(t.a,"  &  ").concat(t.b),instructions:u(F),inputType:"textField"}}function W(e){var t={},n="";return"easy"===e?(n="Double",t.a=s(3,20),t.b=2*t.a):"medium"===e?(n="Triple",t.a=s(20,100),t.b=3*t.a):"hard"===e&&(n=u(["Quadruple","Double Double"]),t.a=s(20,250),t.b=4*t.a),{type:"doubleTripleQuadruple",vars:t,correctAnswer:t.b,equationString:"".concat(t.a),instructions:n,inputType:"textField"}}function N(e){var t={};return"easy"===e?(t.a=s(3,20),t.b=s(0,t.a),t.c=t.a-t.b):"medium"===e?(t.a=s(40,100),t.b=s(5,t.a),t.c=t.a-t.b):"hard"===e&&(t.a=s(200,1e3),t.b=s(100,t.a),t.c=t.a-t.b),{type:"missingMinuend",vars:t,correctAnswer:t.b,equationString:"".concat(t.a," - __ = ").concat(t.c),instructions:u(C),inputType:"textField"}}var L=function(){return u([4,5,6,7,8,9,10,15,20,25,30,40,45,50,60,70,75,80,90])},R=["Multiply","Find the Product"],P=["What's missing?","Times what?"],z=["Find the Divisor","How many groups of...","Divide by what?"],H=["Find the Quotient","How many per group?"];function E(e){var t={};return"easy"===e?(t.a=s(2,11),t.b=s(2,11)):"medium"===e?(t.a=L(),t.b=s(2,16)):"hard"===e&&(t.a=s(11,100),t.b=s(11,50)),t.c=t.a*t.b,{type:"missingProductTwo",vars:t,correctAnswer:t.c,equationString:"".concat(t.a," x ").concat(t.b," = __"),instructions:u(R),inputType:"textField"}}function G(e){var t={};return"easy"===e?(t.a=s(2,7),t.b=s(2,7),t.c=s(2,7)):"medium"===e?(t.a=s(2,11),t.b=s(2,11),t.c=s(2,11)):"hard"===e&&(t.a=s(2,26),t.b=s(2,16),t.c=s(2,11)),t.d=t.a*t.b*t.c,{type:"missingProductThree",vars:t,correctAnswer:t.d,equationString:"".concat(t.a," x ").concat(t.b," x ").concat(t.c," = __"),instructions:u(R),inputType:"textField"}}function Q(e){var t={};return"easy"===e?(t.a=s(2,11),t.b=s(2,11)):"medium"===e?(t.a=s(5,31),t.b=L()):"hard"===e&&(t.a=s(20,100),t.b=s(5,20)),t.c=t.a*t.b,{type:"missingFactorTwo",vars:t,correctAnswer:t.b,equationString:"".concat(t.a," x __ = ").concat(t.c),instructions:u(P),inputType:"textField"}}function U(e){var t={};return"easy"===e?(t.a=s(2,7),t.b=s(2,7),t.c=s(2,7)):"medium"===e?(t.a=s(3,11),t.b=s(3,11),t.c=s(3,11)):"hard"===e&&(t.a=s(4,26),t.b=s(4,11),t.c=s(4,16)),t.d=t.a*t.b*t.c,{type:"missingFactorThree",vars:t,correctAnswer:t.c,equationString:"".concat(t.a," x ").concat(t.b," x __ = ").concat(t.d),instructions:u(P),inputType:"textField"}}function Y(e){var t={};return"easy"===e?(t.b=s(2,10),t.c=s(2,11)):"medium"===e?(t.b=s(3,12),t.c=s(3,16)):"hard"===e&&(t.b=L(),t.c=s(3,16)),t.a=t.b*t.c,{type:"missingDivisor",vars:t,correctAnswer:t.b,equationString:"".concat(t.a," \xf7 __ = ").concat(t.c),instructions:u(z),inputType:"textField"}}function J(e){var t={};return"easy"===e?(t.b=s(2,10),t.c=s(2,11)):"medium"===e?(t.b=L(),t.c=s(3,12)):"hard"===e&&(t.b=L(),t.c=s(12,26)),t.a=t.b*t.c,{type:"missingQuotient",vars:t,correctAnswer:t.c,equationString:"".concat(t.a," \xf7 ").concat(t.b," = __"),instructions:u(H),inputType:"textField"}}function K(e){var t={},n="";return"easy"===e?(n="What's half of",t.a=s(3,50),t.b=2*t.a):"medium"===e?(n="What's a third of",t.a=s(20,100),t.b=3*t.a):"hard"===e&&(n="What's a quarter of",t.a=s(20,250),t.b=4*t.a),{type:"doubleTripleQuadruple",vars:t,correctAnswer:t.a,equationString:"".concat(t.b," ?"),instructions:n,inputType:"textField"}}var V=new Map([["combine",function(e){return console.assert("easy"===e||"medium"===e||"hard"===e,"getCombiningQuestion recieved invalid difficulty ".concat(e)),u([k,q,I,B,D,W,_,N])(e)}],["multiply",function(e){return console.assert("easy"===e||"medium"===e||"hard"===e,"getMultiplyingQuestion recieved invalid difficulty ".concat(e)),u([E,G,Q,U,K,J,Y])(e)}]]);var $=n(1),X=Object(r.createContext)(),Z=function(e){var t={oneSixth:"16.665%",oneSeventh:"14.287%",sixSevenths:"85.714%",chipSizeRelativeToSquare:"84%",rowNumbers:[0,1,2,3,4,5],columnNumbers:[0,1,2,3,4,5,6],columnLetters:["A","B","C","D","E","F","G"],boardSideLength:Object(r.useContext)(a.a).maxSquareSideLength-96,buttonContainerHeight:96,zIndex:{chip:100,board:200}},n=Object(r.useState)({opponent:"human",topics:["combine","multiply"],difficultyMode:"increasing"}),i=Object(o.a)(n,2),c=i[0],s=i[1],u=Object(r.useState)([]),l=Object(o.a)(u,2),d=l[0],h=l[1],b=Object(r.useState)("playerOnesTurn"),f=Object(o.a)(b,2),p=f[0],j=f[1],m=Object(r.useState)(new Array(42).fill("unclaimed")),x=Object(o.a)(m,2),g=x[0],v=x[1],w=Object(r.useState)("playerOne"),S=Object(o.a)(w,2),C=S[0],T=S[1],A=Object(r.useState)(!1),M=Object(o.a)(A,2),F=M[0],k=M[1],q=Object(r.useState)(t.columnNumbers),I=Object(o.a)(q,2),B=I[0],D=I[1],_=Object(r.useState)([]),W=Object(o.a)(_,2),N=W[0],L=W[1],R=Object(r.useState)([]),P=Object(o.a)(R,2),z=P[0],H=P[1],E=Object(r.useState)("welcome"),G=Object(o.a)(E,2),Q=G[0],U=G[1],Y=Object(r.useState)(null),J=Object(o.a)(Y,2),K=J[0],V=J[1],Z=Object(r.useState)(function(){var e=[1,2,3,6];return{type:"missingSumThree",vars:e,correctAnswer:e[3],equationString:"".concat(e[0]," + ").concat(e[1]," + ").concat(e[2]," = __"),instructions:"Test Question",inputType:"textField"}}()),ee=Object(o.a)(Z,2),te=ee[0],ne=ee[1],re=Object(r.useState)(""),ie=Object(o.a)(re,2),oe=ie[0],ae=ie[1],ce=Object(r.useState)(!1),se=Object(o.a)(ce,2),ue=se[0],le=se[1];Object(r.useEffect)((function(){var e=y(d);j(e),v(function(e){var t=new Array(42).fill("unclaimed");return e.forEach((function(e,n){if(-1!==e){var r=n%2===0?"playerOne":"playerTwo";t[e]=r}})),t}(d)),T(d.length%2===0?"playerOne":"playerTwo"),k(["gameOverDraw","playerOneWins","playerTwoWins"].includes(e)),L(d.filter((function(e,t){return t%2===0})).filter((function(e){return-1!==e}))),H(d.filter((function(e,t){return t%2===1})).filter((function(e){return-1!==e}))),D(O(d)),V(null),ae("")}),[d]);var de={settings:c,setSettings:s,moveList:d,setMoveList:h,gameStatus:p,boardData:g,nextPlayer:C,gameIsOver:F,playerOnesMoves:N,playerTwosMoves:z,lowestUnclaimedCells:B,gameBoardConstants:t,openModal:Q,setOpenModal:U,activeCell:K,setActiveCell:V,question:te,setQuestion:ne,headerText:oe,setHeaderText:ae,isBotsTurn:ue,setIsBotsTurn:le};return Object($.jsx)(X.Provider,{value:de,children:e.children})},ee=n(80);function te(e){var t=Object(r.useContext)(a.a).maxSquareSideLength;return Object($.jsx)(ee.a,{children:e.children,display:"flex",flexDirection:"column",alignItems:"center",height:t,width:t,position:"relative"})}var ne=n(146),re=n(374),ie=n(259),oe=n(108),ae=n(256),ce=i.a.forwardRef((function(e,t){return Object($.jsx)(re.a,Object(ne.a)({ref:t},e))}));function se(e){var t=e.open,n=e.openSettingsModal,i=Object(r.useContext)(a.a).maxSquareSideLength;return Object($.jsxs)(ie.a,{open:t,"aria-describedby":"welcome dialog",TransitionComponent:ce,fullWidth:!0,maxWidth:"md",PaperProps:{sx:{height:"".concat(.85*i,"px"),width:"".concat(.7*i,"px"),minHeight:"550px",minWidth:"375px",display:"flex",p:3,borderRadius:6,overflowY:"scroll",msOverflowStyle:"none",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"}}},children:[Object($.jsx)(oe.a,{variant:"h4",align:"center",children:"Math Fact Connect Four"}),Object($.jsx)(o,{openSettingsModal:n}),Object($.jsx)(oe.a,{variant:"h5",children:"Rules of Play"}),Object($.jsx)(oe.a,{gutterBottom:!0,children:"Two players (or teams) take turns picking a column to drop a chip in. Chips always fall to the lowest available space in the selected column. The first to get four consecutive chips in any row, column, or diagonal wins! But there's a catch: A math quetion will pop up when you selecet a column and you must answer it correctly or your turn will be skipped!"}),Object($.jsx)(oe.a,{variant:"h5",children:"Suggested Use"}),Object($.jsx)(oe.a,{gutterBottom:!0,children:"Learning math foundations takes a lot of practice. There is no substitute for repetition. The goal of this project is to make doing all that repetitive practice a little less dull, and a little more joyful."}),Object($.jsx)(oe.a,{gutterBottom:!0,children:'All the questions in this game were designed to be solved mentally. Use your fingers if you have to, but no paper-and-pencil! Push yourself to try new mental math strategies like "stepping stones" and "factor it first".'}),Object($.jsx)(oe.a,{gutterBottom:!0,children:"By default the questions increase in difficulty as the game progresses but you can also set it to ask questions of only one difficulty level throughout the game. This is particularly useful when working with younger students."}),Object($.jsx)(oe.a,{variant:"h5",children:"Note on Time Limits"}),Object($.jsx)(oe.a,{gutterBottom:!0,children:"Some students enjoy playing this game with a two-sided game timer (chess clock). When doing this it is good to give each team about 10 minutes for the whole game. That said, there is no timer built into this game on purpose. Most students report feeling anxious and having less fun, and answer questions less accurately when playing with a timer."}),Object($.jsx)(oe.a,{gutterBottom:!0,children:"Accuracy is more imporatant than speed. Starting out, your focus should be on getting questions right, on holding all the moving pieces in your mind. Accuracy results from focus, conceptual understanding, and effort. Speed is just a pleasant side-effect of lots of practice."}),Object($.jsx)(oe.a,{variant:"h5",children:"Thanks"}),Object($.jsx)(oe.a,{gutterBottom:!0,children:"I want to thank my students at College Track, the Waldorf School of New Orleans, and Bricolage Academy for inspiring me to create this game and helping me to test and improve it. This game was originally played using laminated cards hung on the wall. It was my students' enthusiastic responses to this game that made me want to convert it to a free web app so I could share it with other teachers and students."}),Object($.jsx)(oe.a,{variant:"h5",children:"Dig Deeper"}),Object($.jsxs)(oe.a,{gutterBottom:!0,children:["The code for this project is all open-source so if your are curious how it works behind the scenes visit my ",Object($.jsx)("a",{href:"https://github.com/nolastemgarden",children:"GitHub"})," page. If you find a mistake or have an idea for how to improve this game, please open an issue."]}),Object($.jsx)(oe.a,{color:"text.primary",children:"A production of the NOLA STEM Garden \xa9"})]});function o(){return Object($.jsx)(ee.a,{m:3,sx:{display:"flex",justifyContent:"center"},children:Object($.jsx)(ae.a,{onClick:n,variant:"contained",sx:{m:1,width:"66%"},children:"Start Game"})})}}var ue=n(257),le=n(81),de=n(35),he=i.a.forwardRef((function(e,t){return Object($.jsx)(re.a,Object(ne.a)({ref:t},e))}));function be(e){var t=e.open,n=e.startNewGame,i=e.cancelNewGame,o=Object(r.useContext)(X),a=o.settings,c=o.setSettings,s=0===a.topics.length;return Object($.jsxs)(ie.a,{open:t,"aria-describedby":"game settings dialog",TransitionComponent:he,fullWidth:!0,maxWidth:"md",PaperProps:{sx:{height:"90%",width:"85%",maxHeight:"600px",maxWidth:"450px",display:"flex",p:3,borderRadius:6,overflowY:"scroll"}},children:[Object($.jsx)(u,{}),Object($.jsx)(l,{}),Object($.jsx)(d,{}),Object($.jsx)(h,{})]});function u(){var e=function(e){var t=e.opponent,n=e.icon,r=a.opponent===t;return Object($.jsx)(ue.a,{children:Object($.jsx)(le.a,{icon:n,size:"2x"}),onClick:function(){return function(e){c((function(t){return Object(ne.a)(Object(ne.a)({},t),{},{opponent:e})}))}(t)},color:r?"primary":"secondary"})};return Object($.jsxs)(ee.a,{display:"flex",flex:"1 1 25%",flexDirection:"column",children:[Object($.jsx)(oe.a,{variant:"h5",align:"center",children:"Play vs. Human or Bot?"}),Object($.jsxs)(ee.a,{display:"flex",flexDirection:"row",justifyContent:"space-evenly",p:1,children:[Object($.jsx)(e,{opponent:"human",icon:de.v}),Object($.jsx)(e,{opponent:"bot",icon:de.t})]})]})}function l(){var e=function(e){var t=e.topic,n=e.label,r=a.topics.includes(t);return Object($.jsx)(ae.a,{onClick:function(){return function(e){var t=[];a.topics.includes(e)?(t=a.topics.filter((function(t){return t!==e})),c((function(e){return Object(ne.a)(Object(ne.a)({},e),{},{topics:t})}))):(t=a.topics.concat(e),c((function(e){return Object(ne.a)(Object(ne.a)({},e),{},{topics:t})})))}(t)},variant:r?"contained":"outlined",sx:{m:"0.25rem"},children:n})},t=function(){return Object($.jsx)(oe.a,{children:"*** You must select at least one topic.",variant:"body1",align:"center",color:s?"error":"transparent",gutterBottom:!0})};return Object($.jsxs)(ee.a,{display:"flex",flex:"1 1 25%",flexDirection:"column",children:[Object($.jsx)(oe.a,{variant:"h5",align:"center",children:"What math topics should we include?"}),Object($.jsx)(e,{topic:"combine",label:"Combine & Split Up"}),Object($.jsx)(e,{topic:"multiply",label:"Multiply & Factor"}),Object($.jsx)(t,{})]})}function d(){var e=function(e){var t=e.mode,n=a.difficultyMode===t;return Object($.jsx)(ae.a,{onClick:function(){return e=t,void c((function(t){return Object(ne.a)(Object(ne.a)({},t),{},{difficultyMode:e})}));var e},variant:n?"contained":"outlined",sx:{flex:"2 0 25%",m:"0.25rem"},children:"increasing"===t?"increasing difficulty":"".concat(t)})};return Object($.jsxs)(ee.a,{display:"flex",flex:"1 1 25%",flexDirection:"column",pb:2,children:[Object($.jsx)(oe.a,{variant:"h5",align:"center",children:"How hard should the questions be?"}),Object($.jsxs)(ee.a,{display:"flex",justifyContent:"space-between",children:[Object($.jsx)(e,{mode:"easy"}),Object($.jsx)(e,{mode:"medium"}),Object($.jsx)(e,{mode:"hard"})]}),Object($.jsx)(ee.a,{display:"flex",children:Object($.jsx)(e,{mode:"increasing"})})]})}function h(){return Object($.jsxs)(ee.a,{borderTop:"solid green 3px",borderColor:"primary.main",display:"flex",flex:"1 1 20%",justifyContent:"center",children:[Object($.jsx)(b,{cancelNewGame:i}),Object($.jsx)(f,{startNewGame:n})]})}function b(e){var t=e.cancelNewGame;return Object($.jsx)(ae.a,{onClick:t,variant:"outlined",disabled:s,sx:{m:1,mt:3,width:"40%"},children:"Cancel"})}function f(e){var t=e.startNewGame;return Object($.jsx)(ae.a,{onClick:function(){return t(a)},variant:"contained",disabled:s,sx:{m:1,mt:3,width:"40%"},children:"Start Game"})}}var fe=n(224),pe=n(228),je=n(231),me=i.a.forwardRef((function(e,t){return Object($.jsx)(re.a,Object(ne.a)({ref:t},e))}));function xe(e){var t=e.open,n=e.question,i=e.headerText,c=e.handleAnswerSubmit,s=Object(r.useContext)(a.a),u=s.maxSquareSideLength,l=s.navbarHeightPx,d=Object(r.useContext)(X).nextPlayer,h=n.correctAnswer,b=n.equationString,f=n.inputType,p="connectFour.".concat(d);return Object($.jsxs)(ie.a,{disableEscapeKeyDown:!0,open:t,onBackdropClick:function(){},"aria-describedby":"math-question-dialog",TransitionComponent:me,PaperProps:{sx:{border:"solid white 12px",borderColor:p,margin:"".concat(.05*u,"px"),marginTop:"".concat(l,"px"),height:"".concat(.9*u,"px"),width:"".concat(.9*u,"px"),maxWidth:"100%",borderRadius:"50%"}},children:[Object($.jsx)(j,{headerText:i}),Object($.jsx)(m,{equationString:b}),Object($.jsx)(x,{inputType:f,correctAnswer:h,handleAnswerSubmit:c})]});function j(e){return Object($.jsx)(oe.a,{id:"Instructions",variant:"h4",sx:{height:"33%",width:"100%",display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"flex-end"},children:e.headerText})}function m(e){var t=e.equationString,n=t.length>12?"h2":"h1";return Object($.jsx)(oe.a,{variant:n,sx:{width:"100%",height:"32%",display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},children:t})}function x(e){var t=e.inputType,n=e.correctAnswer,i=e.handleAnswerSubmit,a=Object(r.useState)(""),c=Object(o.a)(a,2),s=c[0],u=c[1],l=/^\d+$/.test(s),d=s.length>0&&!l,h=function(e){var t=e.target.value.trim();u(t)};if("textField"===t)return Object($.jsx)(b,{error:d,handleSubmitButtonClick:i});if("compareButtons"===t)return Object($.jsx)(p,{});function b(e){var t=e.error,r=e.handleSubmitButtonClick;return Object($.jsx)(ee.a,{sx:{height:"35%",width:"100%",padding:"0 20%"},children:Object($.jsxs)(fe.a,{id:"answer-input-form",color:"primary",error:t,sx:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"flex-start"},children:[Object($.jsx)(pe.a,{children:!1===t?"Your Answer":"Enter a whole number"}),Object($.jsx)(je.a,{label:!1===t?"Your Answer":"Enter a whole number",value:s,id:"answer-input",fullWidth:!0,size:"medium",autoFocus:!0,autoComplete:"off",type:"tel",pattern:"[0-9]*",onChange:h,inputProps:{style:{fontSize:"2rem",height:"2rem"}},sx:{width:"62%"},onKeyDown:function(e){"Enter"===e.key&&""!==s&&r(s)}}),Object($.jsx)(f,{error:t,playersAnswer:s,correctAnswer:n,handleSubmitButtonClick:r})]})})}function f(e){var t=e.error,n=e.playersAnswer,r=e.handleSubmitButtonClick;return Object($.jsx)(ae.a,{disabled:t||""===n,onClick:function(){return r(n)},variant:"contained",sx:{ml:1,px:2.5,lineHeight:"3rem",width:"42%"},children:"Submit"})}function p(e){return Object($.jsxs)(ee.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object($.jsx)(ae.a,{}),Object($.jsx)(ae.a,{}),Object($.jsx)(ae.a,{})]})}console.error("getInputComponent failed. Invalid inputType: ".concat(t))}}var ge=n(342);function ve(e){var t=e.id,n=e.containerRef,i=Object(r.useContext)(X),o=i.boardData,a=i.gameBoardConstants,c=a.zIndex,s=a.oneSixth,u=a.chipSizeRelativeToSquare,l=o[t],d="connectFour.".concat(l);return Object($.jsx)(ge.a,{in:"unclaimed"!==l,timeout:300,direction:"down",container:n.current,children:Object($.jsx)(ee.a,{id:"transparentSquareFrame",width:"100%",height:s,display:"flex",justifyContent:"center",alignItems:"center",children:Object($.jsx)(ee.a,{id:"chip",borderRadius:"50%",zIndex:c.board,bgcolor:d,width:u,height:u})})})}function Oe(e){var t=Object(r.useContext)(X).gameBoardConstants,n=t.zIndex,i=t.rowNumbers,o=t.oneSixth,a=t.oneSeventh,c=t.sixSevenths,s=t.chipSizeRelativeToSquare;return Object($.jsx)(ee.a,{id:"columnOfSquares",position:"absolute",top:a,bgcolor:"transparent",width:"100%",height:c,zIndex:n.board,display:"flex",flexDirection:"column-reverse",children:i.map((function(e){return Object($.jsx)(ee.a,{id:"squareWithHole",overflow:"hidden",width:"100%",height:o,display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 1px 1px 1px #0039cb",children:Object($.jsx)(ee.a,{id:"hole",boxShadow:"0 0 0 99px #0039cb",borderRadius:"50%",bgcolor:"transparent",width:s,height:s})},e)}))})}function ye(e){var t=e.index,n=e.handleColumnClick,i=Object(r.useContext)(X),o=i.gameIsOver,a=i.nextPlayer,c=i.gameBoardConstants,s=c.columnLetters,u=c.oneSeventh,l=o?"":s[t];return Object($.jsxs)(ee.a,{id:"column",onClick:function(){return n(t)},position:"relative",width:u,height:"100%",sx:{"&:hover #hoverChip":{backgroundColor:"connectFour.".concat(a)}},children:[Object($.jsx)(we,{columnLetter:l}),Object($.jsx)(Se,{index:t}),Object($.jsx)(Oe,{})]})}function we(e){var t=e.columnLetter,n=Object(r.useContext)(X).gameBoardConstants,i=n.oneSeventh,o=n.chipSizeRelativeToSquare;return Object($.jsx)(ee.a,{id:"hoverChipContainer",height:i,zIndex:8,display:"flex",alignItems:"center",justifyContent:"center",children:Object($.jsx)(ee.a,{id:"hoverChip",bgcolor:"background",width:o,height:o,borderRadius:"50%",zIndex:8,display:"flex",justifyContent:"center",alignItems:"flex-end",fontSize:"2rem",children:Object($.jsx)(oe.a,{variant:"h4",color:"connectFour.text",children:t})})})}function Se(e){var t=e.index,n=Object(r.useContext)(X).gameBoardConstants,o=n.oneSeventh,a=n.sixSevenths,c=n.rowNumbers,s=i.a.useRef(null),u=c.map((function(e){return t+7*e}));return Object($.jsx)(ee.a,{ref:s,width:"100%",position:"absolute",top:o,bgcolor:"transparent",height:a,zIndex:8,display:"flex",flexDirection:"column-reverse",children:u.map((function(e){return Object($.jsx)(ve,{id:e,containerRef:s},e)}))})}function Ce(e){var t=Object(r.useContext)(X),n=t.gameIsOver,i=t.gameStatus,o=t.gameBoardConstants.oneSeventh,a="";return n&&(a="playerOneWins"===i?"Red Wins!":"Yellow Wins!"),Object($.jsx)(ee.a,{id:"infoHeaderRow",sx:{position:"absolute",top:0,left:0,width:"100%",height:o,zIndex:15,display:"flex",justifyContent:"center",alignItems:"center"},children:Object($.jsx)(re.a,{in:""!==a,style:{transitionDelay:"300ms"},children:Object($.jsx)(oe.a,{color:"connectFour.text",variant:"h2",align:"center",children:a})})})}function Te(e){var t=Object(r.useContext)(X).gameBoardConstants,n=t.oneSeventh,i=t.sixSevenths;return Object($.jsx)(ee.a,{id:"rounded_border",boxSizing:"content-box",position:"absolute",top:n,left:"-9px",width:"calc(100% - 2px)",height:i,border:"10px solid",borderColor:"board.main",borderRadius:"10px",borderTop:0})}function Ae(e){var t=e.handleColumnClick,n=Object(r.useContext)(X).gameBoardConstants,i=n.columnNumbers,o=n.boardSideLength;return Object($.jsxs)(ee.a,{id:"game_board",position:"relative",height:o,width:o,display:"flex",flexDirection:"row",alignItems:"flex-end",children:[Object($.jsx)(Ce,{}),i.map((function(e){return Object($.jsx)(ye,{index:e,handleColumnClick:t},e)})),Object($.jsx)(Te,{})]})}var Me=n(16),Fe=Object(Me.a)(Object($.jsx)("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}),"Undo");function ke(e){var t=e.openSettingsModal,n=e.undoMove,i=Object(r.useContext)(X).gameBoardConstants.buttonContainerHeight;return Object($.jsxs)(ee.a,{height:i,width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center",px:4,children:[Object($.jsx)(qe,{openSettingsModal:t}),Object($.jsx)(Ie,{undoMove:n})]})}function qe(e){var t=e.openSettingsModal;return Object($.jsx)(ae.a,{variant:"contained",startIcon:Object($.jsx)(le.a,{icon:de.c,size:"lg"}),onClick:function(){return t()},sx:{flex:"1 0 25%",mx:1},children:"New\xa0Game"})}function Ie(e){var t=e.undoMove;return Object($.jsx)(ae.a,{variant:"contained",startIcon:Object($.jsx)(Fe,{}),onClick:function(){return t()},sx:{flex:"1 0 25%",mx:1},children:"Undo\xa0Move"})}var Be=["Correct!","Right!","That's it!","Good job!","Very good!"];function De(e){var t=Object(r.useContext)(a.a).availableHeight,n=Object(r.useContext)(X),i=n.settings,o=n.setSettings,c=n.moveList,s=n.setMoveList,l=n.playerOnesMoves,d=n.playerTwosMoves,h=n.nextPlayer,b=n.gameIsOver,f=n.lowestUnclaimedCells,p=n.openModal,j=n.setOpenModal,m=n.activeCell,x=n.setActiveCell,g=n.question,v=n.setQuestion,O=n.headerText,w=n.setHeaderText;function C(){j("settings")}return Object($.jsxs)(ee.a,{id:"connect_four_background",width:"100%",height:t,overflow:"hidden",bgcolor:"connectFour.background",color:"connectFour.board",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[Object($.jsx)(se,{open:"welcome"===p,openSettingsModal:C}),Object($.jsx)(be,{open:"settings"===p,settings:i,startNewGame:function(e){o(e),s([]),j("none")},cancelNewGame:function(){j("none")}}),Object($.jsx)(xe,{open:"question"===p,question:g,headerText:O,handleAnswerSubmit:function(e){var t=Number(e.trim())===g.correctAnswer,n=t?u(Be):"Nope. It was ".concat(g.correctAnswer,".");w(n);var r=t?m:-1,o=c.concat(r),a=y(o);if(console.log("updated game status : ".concat(a)),setTimeout((function(){j("none")}),1400),setTimeout((function(){s(o)}),1850),"bot"===i.opponent&&"playerTwosTurn"===a){var l=S(o),d=o.concat(l);console.log("Adding Bot Move: ".concat(l," to the moveList.")),setTimeout((function(){s(d)}),2200)}}}),Object($.jsxs)(te,{children:[Object($.jsx)(Ae,{handleColumnClick:function(e){if(b)console.log("handleColumnClick() had NO EFFECT since game is already over!");else{var t=f[e];-1!==t?(x(t),function(){var e=function(){if("increasing"===i.difficultyMode){var e=function(){return("playerOne"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:h)?l:d).length}();return e<7?"easy":e<14?"medium":e>=14?"hard":(console.error("Invalid number of question right so far: ".concat(e)),"error")}return i.difficultyMode}();(function(e,t){return new Promise((function(n,r){n(V.get(e)(t))}))})(u(i.topics),e).then((function(e){v(e),w(e.instructions),j("question")}))}()):console.log("handleColumnClick() had NO EFFECT since column is full!")}}}),Object($.jsx)(ke,{openSettingsModal:C,undoMove:function(){var e="bot"===i.opponent?c.slice(0,-2):c.slice(0,-1);console.log("MOVELIST AFTER UNDO: ".concat(e)),s(e)}})]})]})}function _e(){return Object($.jsx)(Z,{children:Object($.jsx)(De,{})})}}}]);
//# sourceMappingURL=12.3429d28d.chunk.js.map