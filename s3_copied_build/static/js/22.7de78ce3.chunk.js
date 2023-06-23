(this["webpackJsonpstemgarden.org"]=this["webpackJsonpstemgarden.org"]||[]).push([[22],{422:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(11),o=n(0),i=n(378),s=n(392),r=n(256),c=n(80),h=n(271),l=n(81),d=n(35),m=n(389),u=n(108),w=n(1);function g(e){var t=e.moveList,n=Object(i.k)(t);return Object(w.jsx)(u.a,{pt:2,color:"common.white",align:"center",component:"h1",variant:"h4",noWrap:!0,gutterBottom:!0,children:function(e){switch(e){case"xWins":return"Game Over. X Wins!";case"oWins":return"Game Over. O Wins!";case"draw":return"Game Over! Draw.";case"xNext":return"X's turn.";case"oNext":return"O's turn.";default:return"Error"}}(n)})}var f=n(384);function b(e){var t=e.moveList,n=e.outcomeMap,a="xNext"===Object(i.g)(t)?"X":"O",o="xNext"===Object(i.g)(t)?"O":"X",s=function(e){var t=Object(i.k)(e),a=n.get(e),o=n.get(Object(i.e)(e)),s="error";0===e.length?s="newGame":"xWins"===t?s="xWins":"oWins"===t?s="oWins":"draw"===t?s="draw":1===e.length?s="5"===e.charAt(0)?"centerOpening":Number(e.charAt(0))%2===0?"cornerOpening":"edgeOpening":Object(f.d)(e).length>0?s="immediateWin":1===Object(f.c)(e).length?s="urgentDefence":2===Object(f.c)(e).length?s="losing":Object(f.a)(e).length>0?s="doubleAttack":"draw"===o&&"draw"===a?s="sound":("draw"!==o||"xWins"!==a&&"oWins"!==a)&&("oWins"!==o||"xWins"!==a&&"draw"!==a)&&("xWins"!==o||"oWins"!==a&&"draw"!==a)?"draw"!==a||"xWins"!==o&&"oWins"!==o||(s="missedWin"):s="mistake";return s}(t);return Object(w.jsx)(c.a,{sx:{color:"common.white",width:"100%"},children:Object(w.jsx)(u.a,{align:"justify",component:"p",variant:"body1",gutterBottom:!0,children:function(e,t){var n="Error in get commentary.  Called with commentLabel: ".concat(e);switch(e){case"newGame":n="New Game. X always goes first. It may look like X has 9 different \n            options but, considering symmetry, there are really only 3: Center, Edge, or Corner. \n            Do any of them set X up to force a win? Is there any move for X that would be a 'mistake'?";break;case"centerOpening":n="The Center Opening is the most popular. I think this is because there are more three-in-a-rows that\n            include the center square than the edges and corners. Though X is still on track for a draw, the center opening\n            is the easiest for O to defend against because, considering symmetry, O really only has two options, edge or corner.\n            One is good and keeps O on track for a draw. The other is bad and opens the door for X to force a win.";break;case"cornerOpening":n="The Corner Opening can lead X to a winning double attack if O makes a mistake on their first move. \n            O has 5 non-symetrical options in this position, however, the only sound move that O has in this position is also the most\n            intuitive one. Proove this to yourself by going through O's 4 losing options and finding a plan that guarantees X \n            a victory in each one.";break;case"edgeOpening":n="The Edge Opening is my personal favorite. It is the least commonly played and is the most complex to analyze.\n            There are many tricks and traps in this opening that both players can take advantage of!\n            O has five non-symmetrical options. Don't settle for just finding one move that lets O guarantee a draw,\n            dig into each of the five options and find the ones that maximize the chances X will make a mistake!";break;case"immediateWin":n="".concat(t," goes next and has the ability to win immediately! That means ").concat(o," must have made a mistake \n            earlier in the game. Go back and see if you can find the mistake and choose the better option instead.");break;case"urgentDefence":n="".concat(t," goes next and has an urgent defensive move they must make in order to not lose on the next turn!");break;case"losing":n="".concat(t," goes next, has no immediate way to win and ").concat(o," has more than one threat, meaning ").concat(t," cannot \n            defend against them all. Defeat is on its way no matter what ").concat(t," does now. This move is not the mistake though! \n            Go back and find the mistake that allowed ").concat(o," to create this double attack.");break;case"doubleAttack":n="Though ".concat(t," cannot win this turn, they can create a double attack, setting up for a\n            guaranteed win on their next turn no matter what ").concat(o," does. Don't settle for a move that only creates \n            one threat, you need to make two simultaneous threats in order to win.");break;case"mistake":n="A mistake! Before that last move ".concat(o," was on track for a draw. That last move  \n            has given ").concat(t," the opportunity to force a win. ").concat(t," cannot create a double attack quite yet, so they will\n            have to look further into the future to see what forced continuations can lead them to making a double attack on\n            their next move. Don't settle for a draw anymore! Make the most of your opponent's mistake.");break;case"missedWin":n="".concat(t," made the first mistake and gave ").concat(o," a chance to force a win, but ").concat(o," replied with\n            another mistake and now they have missed missed that chance to win! Look for forcing moves that lead to double\n            attacks and you will avoid mistakes like the one ").concat(o," just made.");break;case"sound":n="Good. The last move by ".concat(o,' was "sound" meaning it has not hurt their worst case outcome: previously\n            on track for a draw, still on track for a draw.');break;case"xWins":n='X has won the game! That means O must have made a mistake along the way.\n            Go back and see if you can find it on your own. If not, check the hints. In starting position, all 9 squares are Yellow, \n            indicating that no matter which one X chooses they will be on track for a draw. When Red squares appear in the hints these \n            indicate moves that would be mistakes, moves that would grant the opponent a chance to win.  When Green squares appear in \n            the hints these indicate moves that either win immediately or force a win in the next few moves.\n            Choosing a red square always a "mistake", but so is choosing a yellow square when you had a green option!';break;case"oWins":n='O has won the game! That means X must have made a mistake along the way.\n            Go back and see if you can find it on your own. If not, check the hints. In starting position, all 9 squares are Yellow, \n            indicating that no matter which one X chooses they will be on track for a draw. When Red squares appear in the hints these \n            indicate moves that would be mistakes, moves that would grant the opponent a chance to win.  When Green squares appear in \n            the hints these indicate moves that either win immediately or force a win in the next few moves.\n            Choosing a red square always a "mistake", but so is choosing a yellow square when you had a green option!';break;case"draw":n="The game has ended a draw. What did you expect? "}return n}(s,a)})})}function k(e){var t=e.moveList,n=e.showSolution,a=e.toggleShowSolution,o=e.handleUndoClick,i=e.outcomeMap,s=function(){return Object(w.jsxs)(r.a,{variant:"contained",color:"primary",onClick:function(){return o()},disabled:0===t.length,sx:{flexGrow:2,mx:1},children:[Object(w.jsx)(c.a,{mr:1,display:"flex",alignContent:"center",children:Object(w.jsx)(l.a,{icon:d.u,size:"lg"})}),"Undo"]})},u=function(){return Object(w.jsxs)(r.a,{variant:"contained",color:"primary",onClick:function(){return a()},sx:{flexGrow:2,mx:1},children:[Object(w.jsx)(c.a,{mr:2,display:"flex",alignContent:"center",children:Object(w.jsx)(l.a,{icon:d.s,size:"lg"})}),n?"Hide Solution":"Show Solution"]})};return Object(w.jsxs)(h.a,{sx:{width:"100%",height:"45%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(w.jsxs)(c.a,{children:[Object(w.jsx)(g,{moveList:t}),Object(w.jsx)(b,{moveList:t,outcomeMap:i})]}),Object(w.jsxs)(c.a,{mb:2,height:40,display:"flex",justifyContent:"space-between",children:[Object(w.jsx)(u,{showSolution:n,toggleShowSolution:a}),Object(w.jsx)(s,{}),Object(w.jsx)(m.a,{})]})]})}function p(e){var t=e.outcomeMap,n=Object(o.useState)(""),r=Object(a.a)(n,2),h=r[0],l=r[1],d=Object(o.useState)(!1),m=Object(a.a)(d,2),u=m[0],g=m[1];return Object(w.jsxs)(c.a,{width:"100%",height:"calc(100vh - 96px)",overflow:"hidden",bgcolor:"common.black",color:"common.white",children:[Object(w.jsx)(s.a,{moveList:h,showSolution:u,handleSquareClick:function(e){if(Object(i.c)(h))console.log("return without effects from handleSquareClick(). The Game is already over.");else if(h.includes(e))console.log("return without effects from handleSquareClick(). That square has already been claimed.");else{var t=h.concat(e);l(t),g(!1)}},outcomeMap:t}),Object(w.jsx)(k,{moveList:h,showSolution:u,toggleShowSolution:function(){g((function(e){return!e}))},handleUndoClick:function(){var e=h.slice(0,h.length-1);g(!1),l(e)},outcomeMap:t})]})}}}]);
//# sourceMappingURL=22.7de78ce3.chunk.js.map