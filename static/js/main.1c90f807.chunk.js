(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"},29:function(e,t,a){e.exports=a.p+"static/media/castelo.4f95b1fe.gif"},32:function(e,t,a){e.exports=a.p+"static/media/nino.a4689103.webp"},33:function(e,t,a){e.exports=a.p+"static/media/rato.f418d2eb.gif"},36:function(e,t,a){e.exports=a(58)},41:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=(a(41),a(20)),s=a(8),u=(a(45),a(1)),l=a(12),m=a.n(l),p=a(17),d=a(2),b=a(3),h=a(5),f=a(4),v=a(7),g=a(6),O=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"email",className:"label-login"},"Email:",r.a.createElement("input",{className:"input-login",type:"text",name:"email",id:"email","data-testid":"input-gravatar-email",value:t,onChange:a}))}}]),t}(r.a.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"login",className:"label-login"},"Login:",r.a.createElement("input",{className:"input-login",type:"text",name:"login",id:"login","data-testid":"input-player-name",value:t,onChange:a}))}}]),t}(r.a.Component),k=a(28),E=a.n(k),j=a(29),C=a.n(j),D=function(e){return{type:"ADD_TRIVIA",payload:e}},w=(a(47),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={email:"",login:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.checkFields=a.checkFields.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.removeCurrent)()}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(p.a)({},a,n))}},{key:"checkFields",value:function(){var e=this.state,t=e.email;return!(0!==e.login.length&&0!==t.length)}},{key:"handleClick",value:function(){var e,t,a,n,r,c,i;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=this.props,t=e.history,a=e.functionAddUserData,n=this.state,r=n.email,c=n.login,a({name:c,email:r}),o.next=6,m.a.awrap(this.fetchToken());case 6:i=o.sent,localStorage.setItem("token",i),t.push("/trivia-game");case 9:case"end":return o.stop()}}),null,this)}},{key:"fetchToken",value:function(){var e,t,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 2:return e=n.sent,n.next=5,m.a.awrap(e.json());case 5:return t=n.sent,a=t.token,n.abrupt("return",a);case 8:case"end":return n.stop()}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.login,n=t.email,c=this.props.history;return r.a.createElement("main",null,r.a.createElement("form",{action:"GET",className:"form-login"},r.a.createElement(y,{onChange:this.handleChange,value:a}),r.a.createElement(O,{onChange:this.handleChange,value:n}),r.a.createElement("button",{className:"button-login",type:"button","data-testid":"btn-play",disabled:this.checkFields(),onClick:function(){return e.handleClick()}},"Jogar"),r.a.createElement("button",{className:"button-config",type:"button","data-testid":"btn-settings",onClick:function(){return c.push("/configuracoes")}},"Configura\xe7\xf5es")),r.a.createElement("section",{className:"login-image-container"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("img",{src:C.a,alt:"Castelo"})))}}]),t}(r.a.Component)),S=Object(s.b)((function(e){return{userName:e.apiReducer.userData.name,userEmail:e.apiReducer.userData.email}}),(function(e){return{functionAddUserData:function(t){e(function(e){return{type:"ADD_USERDATA",payload:e}}(t))},removeCurrent:function(){e({type:"RESET_CURRENT"})}}}))(w),R=a(14),N=a.n(R),T=(a(50),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={imgURL:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"},a.fetchImgSrc=a.fetchImgSrc.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.fetchImgSrc()}},{key:"fetchImgSrc",value:function(){var e=this.props.userEmail,t=N()(e).toString();this.setState({imgURL:"https://www.gravatar.com/avatar/".concat(t)})}},{key:"render",value:function(){var e=this.props,t=e.userName,a=e.userScore,n=this.state.imgURL;return r.a.createElement("header",{className:"trivia-header"},r.a.createElement("img",{src:n,alt:"Your avatar","data-testid":"header-profile-picture"}),r.a.createElement("h1",{"data-testid":"header-player-name"},t),r.a.createElement("h2",{"data-testid":"header-score"},a))}}]),t}(r.a.Component)),I=Object(s.b)((function(e){return{userName:e.apiReducer.userData.name,userEmail:e.apiReducer.userData.email,userScore:e.apiReducer.userData.score}}),null)(T),U=a(9),x=a(23),A=(a(51),function(e,t){return 10+e*{hard:3,medium:2,easy:1}[t]}),L=(a(52),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).buttonDisabledOrTime=e.buttonDisabledOrTime.bind(Object(v.a)(e)),e}return Object(g.a)(t,e),Object(b.a)(t,[{key:"buttonDisabledOrTime",value:function(){var e=this.props,t=e.time;return!1!==e.buttonDisabled&&0!==t}},{key:"buttonClick",value:function(){var e=this.props,t=e.increaseCurrent,a=e.rst,n=e.saveRankOnLocalStorage;t(),a(),n()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.buttonDisabledOrTime()?r.a.createElement("p",null," "):r.a.createElement("button",{className:"button-next",type:"button","data-testid":"btn-next",onClick:function(){return e.buttonClick()}},"Pr\xf3xima"))}}]),t}(r.a.Component)),_=Object(s.b)(null,(function(e){return{increaseCurrent:function(){return e({type:"ADD_CURRENT"})}}}))(L),Q=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={answered:!1,buttonDisabled:!0,time:30,constInterval:void 0,counting:!1},a.setAnswer=a.setAnswer.bind(Object(v.a)(a)),a.startTimming=a.startTimming.bind(Object(v.a)(a)),a.stopTimming=a.stopTimming.bind(Object(v.a)(a)),a.makeInterval=a.makeInterval.bind(Object(v.a)(a)),a.saveOnLocalStorage=a.saveOnLocalStorage.bind(Object(v.a)(a)),a.reset=a.reset.bind(Object(v.a)(a)),a.saveRankOnLocalStorage=a.saveRankOnLocalStorage.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.saveOnLocalStorage()}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.time,a=e.answered;a||this.startTimming(),0!==t||a||this.setAnswer(!1)}},{key:"setAnswer",value:function(e){var t=this;this.setState({answered:!0,buttonDisabled:!1},(function(){var a=t.state.time,n=t.props,r=n.trivia,c=n.addPoints,i=n.addCorrectQuestion,o=r.results[r.current];if(e){var s=A(a,o.difficulty);c(s),i(),t.saveOnLocalStorage(s)}t.stopTimming()}))}},{key:"saveRankOnLocalStorage",value:function(){var e=this.props,t=e.nameUser,a=e.scoreUser,n=e.trivia.current,r={name:t,score:a,img:this.fetchImgSrc()};if(4===n){var c=localStorage.ranking?JSON.parse(localStorage.ranking):[],i=[].concat(Object(x.a)(c),[r]);i.sort((function(e,t){return t.score-e.score})),i=i.map((function(e,t){return Object(U.a)({},e,{index:t})}));var o=JSON.stringify(i);localStorage.ranking=o}}},{key:"fetchImgSrc",value:function(){var e=this.props.emailUser,t=N()(e).toString();return"https://www.gravatar.com/avatar/".concat(t)}},{key:"reset",value:function(){this.setState({answered:!1,buttonDisabled:!0,time:30,constInterval:void 0,counting:!1})}},{key:"makeInterval",value:function(){var e=this,t=setInterval((function(){e.setState((function(e){return{time:e.time-1,constInterval:t}}))}),1e3)}},{key:"startTimming",value:function(){this.state.counting||this.setState({counting:!0},this.makeInterval())}},{key:"stopTimming",value:function(){var e=this.state.constInterval;e&&(clearInterval(e),this.setState({constInterval:void 0}))}},{key:"saveOnLocalStorage",value:function(e){var t=this.props,a=t.nameUser,n=t.scoreUser,r=t.emailUser,c=t.assertionsUser,i={player:{name:a,assertions:0===c?0:c+1,score:void 0===e?0:n+e,gravatarEmail:r}};localStorage.setItem("state",JSON.stringify(i))}},{key:"compareFunction",value:function(e,t){return e.answer>t.answer?1:-1}},{key:"render",value:function(){var e,t,a=this,n=this.props.trivia,c=n.results,i=this.state,o=i.answered,s=i.time,u=i.buttonDisabled,l="question-category";if(c){var m={correct:!0,answer:(e=c[n.current]).correct_answer},p=e.incorrect_answers.map((function(e,t){return{correct:!1,answer:e,index:t}}));(t=[m].concat(Object(x.a)(p))).sort((function(e,t){return a.compareFunction(e,t)}))}return r.a.createElement("section",{className:"game-section"},r.a.createElement("p",{className:"timer"},"Time: ".concat(s)),e?r.a.createElement("p",{"data-testid":l,className:l},"Category: ".concat(e.category)):r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"question-image"}),e?r.a.createElement("p",{"data-testid":"question-text",className:"text",dangerouslySetInnerHTML:{__html:e.question}}):r.a.createElement("p",null,"Loading..."),t?t.map((function(e,t){return r.a.createElement("button",{type:"button",disabled:o,key:t,"data-testid":e.correct?"correct-answer":"wrong-answer-".concat(e.index),className:o&&(e.correct?"correct answer":"wrong answer")||"answer",onClick:function(){return a.setAnswer(e.correct)}},e.answer)})):r.a.createElement("p",null,"Loading"),r.a.createElement(_,{buttonDisabled:u,time:s,rst:this.reset,saveRankOnLocalStorage:this.saveRankOnLocalStorage}))}}]),t}(n.Component),F=Object(s.b)((function(e){return{trivia:e.apiReducer.trivias,nameUser:e.apiReducer.userData.name,scoreUser:e.apiReducer.userData.score,emailUser:e.apiReducer.userData.email,assertionsUser:e.apiReducer.userData.correctQuestionCounter}}),(function(e){return{addPoints:function(t){return e({type:"ADD_SCORE",payload:t})},addCorrectQuestion:function(){return e({type:"ADD_CORRECT_QUESTION_COUNTER"})}}}))(Q),J=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getTrivia()}},{key:"getTrivia",value:function(){var e,t,a,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=localStorage.getItem("token"),t=this.props.setTrivia,r.next=4,m.a.awrap(fetch("https://opentdb.com/api.php?amount=5&token=".concat(e)));case 4:return a=r.sent,r.next=7,m.a.awrap(a.json());case 7:n=r.sent,t(n);case 9:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.trivia.current;return r.a.createElement("main",null,r.a.createElement(I,null),r.a.createElement(F,null),5===e&&r.a.createElement(u.a,{to:"/feedback"}))}}]),t}(r.a.Component),M=Object(s.b)((function(e){return{trivia:e.apiReducer.trivias}}),(function(e){return{setTrivia:function(t){return e(D(t))}}}))(J),q=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{"data-testid":"settings-title"},"Configura\xe7\xf5es:"))}}]),t}(r.a.Component),P=(a(55),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).state={imgURL:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"},e.fetchImgSrc=e.fetchImgSrc.bind(Object(v.a)(e)),e}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.fetchImgSrc()}},{key:"fetchImgSrc",value:function(){var e=this.props.userEmail,t=N()(e).toString();this.setState({imgURL:"https://www.gravatar.com/avatar/".concat(t)})}},{key:"render",value:function(){var e=this.props,t=e.userName,a=e.userScore,n=this.state.imgURL;return r.a.createElement("header",{className:"header-feedback"},r.a.createElement("img",{src:n,alt:t,"data-testid":"header-profile-picture"}),r.a.createElement("h1",{"data-testid":"header-player-name"},"".concat(t)),r.a.createElement("h2",{"data-testid":"header-score"},a))}}]),t}(n.Component)),V=Object(s.b)((function(e){return{userEmail:e.apiReducer.userData.email,userName:e.apiReducer.userData.name,userScore:e.apiReducer.userData.score}}))(P),W=(a(56),a(32)),B=a.n(W),G=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"phraseConstructor",value:function(e){var t;return e<3?t="Plift ploft still, a porta n\xe3o se abriu...":e>=3&&(t="Plift ploft still, a porta se abriu!"),t}},{key:"render",value:function(){var e=this.props,t=e.correctQuestionCounter,a=e.totalScore,n=e.history;return r.a.createElement("main",{className:"feedback-main"},r.a.createElement(V,null),r.a.createElement("section",{className:"feedback-image-container"},r.a.createElement("div",{className:"feedback-text-container"},r.a.createElement("p",{"data-testid":"feedback-text"},this.phraseConstructor(t)),r.a.createElement("p",{"data-testid":"feedback-total-score"},"Pontua\xe7\xe3o:",a),r.a.createElement("p",{"data-testid":"feedback-total-question"},"Respostas Corretas:",t)),r.a.createElement("img",{src:B.a,alt:"nino"})),r.a.createElement("div",{className:"feedback-button-container"},r.a.createElement("button",{type:"button","data-testid":"btn-play-again",onClick:function(){return n.push("/trivia")},className:"button-playagain"},"Jogar novamente"),r.a.createElement("button",{type:"button","data-testid":"btn-ranking",onClick:function(){return n.push("/ranking")},className:"button-ranking"},"Ver Ranking")))}}]),t}(n.Component),H=Object(s.b)((function(e){return{correctQuestionCounter:e.apiReducer.userData.correctQuestionCounter,totalScore:e.apiReducer.userData.score}}))(G),Y=(a(57),a(33)),$=a.n(Y),z=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.ranking),t=this.props.history;return r.a.createElement("main",null,r.a.createElement("header",{className:"ranking-header"},r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("img",{src:$.a,alt:"Rato tomando banho",className:"rato-img"})),r.a.createElement("button",{type:"button","data-testid":"btn-go-home",onClick:function(){return t.push("/trivia")},className:"btn-go-home"},"Inicio"),e.map((function(e,t){return r.a.createElement("section",{key:t,className:"player-section"},r.a.createElement("img",{src:e.img,alt:"gravatar"}),r.a.createElement("p",{"data-testid":"player-name-".concat(t)},e.name?e.name:"An\xf3nimo",":"),r.a.createElement("p",{"data-testid":"player-score-".concat(t)},e.score," ","pontos"))})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(15),X=a(34),Z=a(35),ee={trivias:{current:0},userData:{name:"",email:"",score:0,correctQuestionCounter:0}};var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TRIVIA":return Object(U.a)({},e,{trivias:Object(U.a)({},e.trivias,{},t.payload)});case"ADD_USERDATA":return Object(U.a)({},e,{userData:Object(U.a)({},e.userData,{name:t.payload.name,email:t.payload.email})});case"ADD_SCORE":return Object(U.a)({},e,{userData:Object(U.a)({},e.userData,{score:e.userData.score+t.payload})});case"ADD_CORRECT_QUESTION_COUNTER":return Object(U.a)({},e,{userData:Object(U.a)({},e.userData,{correctQuestionCounter:e.userData.correctQuestionCounter+1})});case"ADD_CURRENT":return Object(U.a)({},e,{trivias:Object(U.a)({},e.trivias,{current:e.trivias.current+1})});case"RESET_CURRENT":return Object(U.a)({},e,{trivias:{current:0},userData:{name:"",email:"",score:0,correctQuestionCounter:0}});default:return e}},ae=Object(K.combineReducers)({apiReducer:te}),ne=Object(K.createStore)(ae,Object(X.composeWithDevTools)(Object(K.applyMiddleware)(Z.a)));window.Cypress&&(window.store=ne);var re=ne;i.a.render(r.a.createElement(s.a,{store:re},r.a.createElement(o.a,null,r.a.createElement((function(){return r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/trivia",component:S}),r.a.createElement(u.b,{path:"/trivia-game",component:M}),r.a.createElement(u.b,{path:"/configuracoes",component:q}),r.a.createElement(u.b,{path:"/feedback",component:H}),r.a.createElement(u.b,{path:"/ranking",component:z}))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1c90f807.chunk.js.map