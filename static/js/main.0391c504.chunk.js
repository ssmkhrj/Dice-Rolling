(this["webpackJsonpbug-test"]=this["webpackJsonpbug-test"]||[]).push([[0],{14:function(t,e,i){},15:function(t,e,i){},16:function(t,e,i){},17:function(t,e,i){"use strict";i.r(e);var s=i(0),n=i(1),o=i.n(n),a=i(8),c=i.n(a),l=(i(14),i(2)),r=i(3),u=i(4),h=i(6),d=i(5),j=(i(15),function(t){Object(h.a)(i,t);var e=Object(d.a)(i);function i(){return Object(l.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(s.jsx)("i",{className:"Die fas fa-dice-".concat(this.props.num," ").concat(this.props.animate&&"Die-shake")})}}]),i}(n.Component)),b=(i(16),function(t){Object(h.a)(i,t);var e=Object(d.a)(i);function i(t){var s;return Object(l.a)(this,i),(s=e.call(this,t)).state={dieOneNum:"six",dieTwoNum:"six",isRolling:!1},s.roll=s.roll.bind(Object(u.a)(s)),s}return Object(r.a)(i,[{key:"roll",value:function(){var t=this,e=Math.floor(Math.random()*this.props.sides.length),i=Math.floor(Math.random()*this.props.sides.length);this.setState({dieOneNum:this.props.sides[e],dieTwoNum:this.props.sides[i],isRolling:!0}),setTimeout((function(){t.setState({isRolling:!1})}),1e3)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"RollDice",children:[Object(s.jsxs)("div",{className:"RollDice-dice",children:[Object(s.jsx)(j,{num:this.state.dieOneNum,animate:this.state.isRolling}),Object(s.jsx)(j,{num:this.state.dieTwoNum,animate:this.state.isRolling})]}),Object(s.jsx)("button",{onClick:this.roll,disabled:this.state.isRolling,children:this.state.isRolling?"Rolling...":"Roll Dice!"})]})}}]),i}(n.Component));b.defaultProps={sides:["one","two","three","four","five","six"]};var p=b;var m=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(p,{})})};c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0391c504.chunk.js.map