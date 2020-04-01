(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{41:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),l=a.n(r),c=(a(46),a(24)),i=a(6),s=a(7),m=a(8),u=a(9),d=a(13),p=a(11);var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f={color:"#fff",textDecoration:"none"},b=function(){return o.a.createElement("header",{style:h},o.a.createElement("h1",null,"TodoList"),o.a.createElement(d.b,{style:f,to:"/"},"Home")," | ",o.a.createElement(d.b,{style:f,to:"/contact"},"Contact"))},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",a,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:g},"x")))}}]),a}(n.Component),g={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},E=v,y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(E,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),a}(n.Component),C=a(38),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e.onChange=function(t){return e.setState(Object(C.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1",backgroundColor:"Green"}}))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Contact"},o.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"first-name"},"First Name"),o.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"last-name"},"Last Name"),o.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"comments"},"Comments"),o.a.createElement("textarea",{className:"form-control",rows:"5",value:this.state.comments,onChange:this.onMessageChange.bind(this)})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){}}]),a}(o.a.Component),S=a(39),j=a.n(S),x=a(19),T=a.n(x),N=a(18),w="SHOW_ALL",I="SHOW_COMPLETED",A="SHOW_ACTIVE",L={marginLeft:"10px",padding:"0px 5px",borderRadius:"10%",cursor:"pointer"},F=function(e){var t=e.active,a=e.children,n=e.onClick;return o.a.createElement("button",{onClick:n,disabled:t,style:L},a)},_=Object(N.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(F),B={textAlign:"Center",backgroundColor:"#d4d4d4",padding:"10px 0px"},D=function(){return o.a.createElement("div",{style:B},o.a.createElement("span",null,"Show: "),o.a.createElement(_,{filter:w},"All"),o.a.createElement(_,{filter:A},"Active"),o.a.createElement(_,{filter:I},"Completed"))},H=(a(71),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(a){return e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){t.data.id=j.a.v4(),e.setState({todos:[].concat(Object(c.a)(e.state.todos),[t.data])})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=3").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(b,null),o.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:e.addTodo}),o.a.createElement(D,null),o.a.createElement(y,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(p.a,{path:"/contact",component:O}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(17),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},R=Object(M.b)(W);l.a.render(o.a.createElement(N.a,{store:R},o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.06de4783.chunk.js.map