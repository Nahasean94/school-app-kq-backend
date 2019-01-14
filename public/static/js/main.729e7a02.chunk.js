(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){e.exports=a(346)},157:function(e,t){},159:function(e,t){},196:function(e,t){},197:function(e,t){},346:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),i=a.n(s),o=a(353),l=a(354),c=a(348),u=a(5),m=a(6),d=a(8),h=a(7),p=a(9),v=a(12),b=a(29),f=a.n(b),E=a(136),g=a(1),O=a.n(g),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).logout=a.logout.bind(Object(v.a)(Object(v.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"logout",value:function(e){e.preventDefault(),localStorage.removeItem("SchoolSystem"),this.context.router.history.push("/")}},{key:"render",value:function(){var e,t=!1;localStorage.getItem("SchoolSystem")&&(e=f.a.decode(localStorage.getItem("SchoolSystem")),t=!0);var a=r.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto"},r.a.createElement(E.a,{to:"",className:"nav-item nav-link nav-link-custom",onClick:this.logout},"Logout")),n=r.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto"},r.a.createElement(E.a,{to:"login",className:"nav-item nav-link nav-link-custom"},"Sign in")),s=r.a.createElement("div",{className:" collapse navbar-collapse"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(E.a,{to:"/students",className:"nav-item nav-link nav-link-custom"},"Students"),r.a.createElement(E.a,{to:"/subjects",className:"nav-item nav-link nav-link-custom"},"Subjects"),r.a.createElement(E.a,{to:"/kcpe",className:"nav-item nav-link nav-link-custom"},"KCPE"))),i=r.a.createElement("div",{className:" collapse navbar-collapse"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(E.a,{to:"/students",className:"nav-item nav-link nav-link-custom"},"Students"),r.a.createElement(E.a,{to:"/classes",className:"nav-item nav-link nav-link-custom"},"Classes"))),o=r.a.createElement("div",{className:" collapse navbar-collapse"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(E.a,{to:"/students",className:"nav-item nav-link nav-link-custom"},"Students"),r.a.createElement(E.a,{to:"/teachers",className:"nav-item nav-link nav-link-custom"},"Teachers"))),l="";return e&&("5c3a4b8f427a0e57a2b9df44"===e.role?l=s:"5c39b79cb9717d6060a33c80"===e.role?l=i:"5c3a4be8d08d5d582332d66b"===e.role&&(l=o)),r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark-green fixed-top "},r.a.createElement(E.a,{className:"navbar-brand",to:"/"},"Home"),t?l:"",r.a.createElement("div",{className:"navbar-collapse",id:"navbarNavAltMarkup"},t?a:n)))}}]),t}(r.a.Component);j.contextTypes={router:O.a.object.isRequired};var y=j,k=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(y,null),r.a.createElement("div",{id:"body"},this.props.children))}}]),t}(n.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"School management system"),r.a.createElement("h6",null,"This is the home page"),r.a.createElement("p",null,"This page contains information that is general to all users. This is  information such as:"),r.a.createElement("ol",null,r.a.createElement("li",null,"School Events"),r.a.createElement("li",null,"News Articles"),r.a.createElement("li",null,"Announcements"),r.a.createElement("li",null,"School gallery")))}}]),t}(r.a.Component);w.contextTypes={router:O.a.object.isRequired};var S=w,N=a(55),C=a(22),x=a.n(C),T=a(56),q=a(23),A=a.n(q),R=function(e){var t=e.name,a=e.value,n=e.label,s=e.error,i=e.type,o=e.onChange,l=e.checkLocationExists,c=e.checkIfExists,u=e.autoFocus;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},n),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:i,name:t,className:A()("form-control form-control-sm",{"is-invalid":s}),value:a,onChange:o,onBlur:c,onKeyUp:l,autoFocus:u}),s&&r.a.createElement("div",{className:"invalid-feedback"},s)))};R.defaultTypes={type:"text"};var L=R,U=a(137);function $(e){e.url="http://68.183.29.191:8080/graphql";var t=localStorage.getItem("SchoolSystem");t&&(e.headers.Authorization="Bearer ".concat(t))}var I,W=a(351),M=a(352),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleRoleChange=function(e){a.setState({role:e})},a.state={name:"",email:"",password:"",passwordConfirmation:"",role:"",errors:{},isLoading:!1,invalid:!1,loading:!1,message:""},a.onChange=a.onChange.bind(Object(v.a)(Object(v.a)(a))),a.onSubmit=a.onSubmit.bind(Object(v.a)(Object(v.a)(a))),a.checkUserExists=a.checkUserExists.bind(Object(v.a)(Object(v.a)(a))),a.handleRoleChange=a.handleRoleChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"checkUserExists",value:function(e){var t=this,a=e.target.value;""!==a&&this.props.graphql.query({fetchOptionsOverride:$,resetOnLoad:!0,operation:{variables:{email:a},query:"\n   mutation($email:String!){\n  isUserExists(email:$email){\n   exists\n  }\n}\n"}}).request.then(function(e){var a=e.graphQLErrors,n=e.data;if(a&&t.setState({errors:{form:a[0].message},isLoading:!1}),n){var r,s=t.state.errors;n.isUserExists.exists?(r=!0,s.email="email already exists."):(r=!1,s.email=""),t.setState({errors:s,invalid:r})}})}},{key:"validateInput",value:function(e){var t={};return x.a.isEmpty(e.name)&&(t.name="This field is required"),x.a.isEmpty(e.email)&&(t.email="This field is required"),x.a.isEmail(e.email)||(t.email="This field must be an email"),x.a.isEmpty(e.password)&&(t.password="This field is required"),x.a.isEmpty(e.passwordConfirmation)&&(t.passwordConfirmation="This field is required"),x.a.equals(e.password,e.passwordConfirmation)||(t.passwordConfirmation="Passwords must match"),{errors:t,isValid:Object(T.isEmpty)(t)}}},{key:"isValid",value:function(){var e=this.validateInput(this.state),t=e.errors,a=e.isValid;return a||this.setState({errors:t}),a}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.isValid()&&(this.setState({errors:{},isLoading:!0}),this.setState({errors:{}}),this.props.graphql.query({fetchOptionsOverride:$,resetOnLoad:!0,operation:{variables:{name:this.state.name.trim(),email:this.state.email.trim(),password:this.state.password.trim(),role:this.state.role.value},query:"\n   mutation($name:String!,$email:String!,$password:String!,$role:String!) {\n  createUser(name:$name,email:$email,password:$password,role:$role) {\n   success\n  }\n}\n"}}).request.then(function(e){var a=e.graphQLErrors,n=e.data;a?t.setState({errors:{form:a[0].message},isLoading:!1}):n&&n.createUser.success&&t.setState({name:"",email:"",password:"",passwordConfirmation:"",role:"",errors:{},isLoading:!1,invalid:!1,loading:!1,message:r.a.createElement("div",{className:"alert alert-info"},"Account successfully created.",r.a.createElement("br",null),"Please check your email for further instructions.")})}))}},{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.errors,n=t.loading,s=t.message;return n?r.a.createElement("p",null,"Creating account\u2026"):s?r.a.createElement("p",null,s):r.a.createElement("div",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 offset-sm-4"},r.a.createElement("h3",null,"Sign up"))),r.a.createElement("form",{onSubmit:this.onSubmit},a.form&&r.a.createElement("div",{className:"alert alert-danger"},a.form),r.a.createElement(L,{label:"Name",type:"text",name:"name",value:this.state.name,autoFocus:!0,onChange:this.onChange,error:a.name}),r.a.createElement(L,{label:"Email",type:"email",name:"email",value:this.state.email,onChange:this.onChange,error:a.email,checkIfExists:this.checkUserExists}),r.a.createElement(L,{label:"Password",type:"password",name:"password",value:this.state.password,onChange:this.onChange,error:a.password}),r.a.createElement(L,{label:"Confirm Password ",type:"password",name:"passwordConfirmation",value:this.state.passwordConfirmation,onChange:this.onChange,error:a.passwordConfirmation}),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"hosts"},"Role"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(W.c,{loadOnMount:!0,loadOnReset:!0,fetchOptionsOverride:$,query:"\n   {\n  getSignupRoles{\n    id\n    role\n  }\n}\n"},function(t){var a=t.loading,n=t.data;return n?(I=n.getSignupRoles.map(function(e){return{label:e.role,value:e.id}}),r.a.createElement(U.a.Creatable,{closeOnSelect:!0,onChange:e.handleRoleChange,options:I,placeholder:"Search role",removeSelected:!0,value:e.state.role})):a?r.a.createElement("p",null,"Loading\u2026"):r.a.createElement("p",null,"Loading failed.")}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-9 offset-sm-3"},r.a.createElement("button",{disabled:this.state.isLoading||this.state.invalid,className:"btn btn-dark btn-sm form-control",type:"submit"},"Sign up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,r.a.createElement(M.a,{to:"/login",className:"nav-link"},"Login"))))))}}]),t}(r.a.Component);V.contextTypes={router:O.a.object.isRequired};var P=V,B=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 offset-sm-2"},r.a.createElement(W.a,null,function(e){return r.a.createElement(P,{graphql:e})})))}}]),t}(r.a.Component),F="SET_CURRENT_USER";function Y(e){return{type:F,user:e}}var D=a(19),Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={email:"",password:"",errors:{},isLoading:!1,invalid:!1,loading:!1,message:a.props.message},a.onChange=a.onChange.bind(Object(v.a)(Object(v.a)(a))),a.onSubmit=a.onSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"validateInput",value:function(e){var t={};return x.a.isEmpty(e.email)&&(t.email="This field is required"),x.a.isEmpty(e.password)&&(t.password="This field is required"),{errors:t,isValid:Object(T.isEmpty)(t)}}},{key:"isValid",value:function(){var e=this.validateInput(this.state),t=e.errors,a=e.isValid;return a||this.setState({errors:t}),a}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.isValid()&&(this.setState({errors:{},isLoading:!0}),this.setState({loading:!0}),this.props.graphql.query({fetchOptionsOverride:$,resetOnLoad:!0,operation:{variables:{email:this.state.email,password:this.state.password},query:"\n   mutation($email:String!,$password:String!) {\n  login(email:$email,password:$password) {\n    token\n    ok\n    error\n  }\n}\n"}}).request.then(function(e){var a=e.data;console.log(a),null===a.login.token||!1===a.login.ok?t.setState({errors:{form:a.login.error},isLoading:!1}):(t.props.setLoginToken(a.login.token),t.context.router.history.push("/"),t.setState({loading:!1}))}))}},{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state,t=e.errors,a=e.password,n=e.email,s=e.invalid,i=e.isLoading,o=e.message;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 offset-sm-4"},r.a.createElement("h3",null,"Sign in"))),o&&r.a.createElement("div",{className:"alert alert-success"},o),t.form&&r.a.createElement("div",{className:"alert alert-danger"},t.form),r.a.createElement(L,{label:"Email",type:"email",name:"email",value:n,onChange:this.onChange,error:t.email}),r.a.createElement(L,{label:"Password",type:"password",name:"password",value:a,onChange:this.onChange,error:t.password}),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-9 offset-sm-3"},r.a.createElement("button",{disabled:i||s,className:"btn btn-dark btn-sm form-control",type:"submit"},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,r.a.createElement(M.a,{to:"/signup",className:"nav-link"},"Create an account")))))}}]),t}(r.a.Component);Q.contextTypes={router:O.a.object.isRequired};var J=Object(D.b)(null,{setLoginToken:function(e){return function(t){var a=e;localStorage.setItem("SchoolSystem",a),t(Y(f.a.decode(a)))}}})(Q),K=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 offset-sm-2"},r.a.createElement(W.a,null,function(e){return r.a.createElement(J,{graphql:e})})))}}]),t}(r.a.Component),_=function(e){var t=function(t){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={isAuthenticated:!1},t}return Object(p.a)(a,t),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.isAuthenticated&&this.setState({isAuthenticated:!0})}},{key:"componentWillUpdate",value:function(e){e.isAuthenticated||this.context.router.history.push("/")}},{key:"render",value:function(){return this.state.isAuthenticated?r.a.createElement(e,this.props):r.a.createElement("div",{className:"alert alert-danger"},"You do no have the permission to view this page")}}]),a}(r.a.Component);return t.contextTypes={router:O.a.object.isRequired},Object(D.b)(function(e){return{isAuthenticated:e.loginReducers.isAuthenticated,user:e.loginReducers.user}})(t)},z=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"This page displays a list of all students "),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Email"))),r.a.createElement("tbody",null,r.a.createElement(W.c,{loadOnMount:!0,loadOnReset:!0,fetchOptionsOverride:$,query:"\n   {\n  getAllStudents{\n    id\n    name\n    email\n    timestamp\n  }\n}\n"},function(e){var t=e.loading,a=e.data;return a?a.getAllStudents.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email))}):t?r.a.createElement("tr",null,r.a.createElement("td",null,"Loading\u2026")):r.a.createElement("tr",null,r.a.createElement("td",null,"Loading failed."))}))))}}]),t}(r.a.Component);z.contextTypes={router:O.a.object.isRequired};var H=z,G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={count:0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"This page displays a list of all teachers "),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Email"))),r.a.createElement("tbody",null,r.a.createElement(W.c,{loadOnMount:!0,loadOnReset:!0,fetchOptionsOverride:$,query:"\n   {\n  getAllTeachers{\n    id\n    name\n    email\n    timestamp\n  }\n}\n"},function(e){var t=e.loading,a=e.data;return a?a.getAllTeachers.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email))}):t?r.a.createElement("tr",null,r.a.createElement("td",null,"Loading\u2026")):r.a.createElement("tr",null,r.a.createElement("td",null,"Loading failed."))}))))}}]),t}(r.a.Component);G.contextTypes={router:O.a.object.isRequired};var X=G,Z=function(e){var t=function(t){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={isAuthenticated:!1},t}return Object(p.a)(a,t),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.isAuthenticated&&"5c3a4b8f427a0e57a2b9df44"===this.props.user.role&&this.setState({isAuthenticated:!0})}},{key:"componentWillUpdate",value:function(e){e.isAuthenticated||this.context.router.history.push("/")}},{key:"render",value:function(){return this.state.isAuthenticated?r.a.createElement(e,this.props):r.a.createElement("div",{className:"alert alert-danger"},"You do no have the permission to view this page")}}]),a}(r.a.Component);return t.contextTypes={router:O.a.object.isRequired},Object(D.b)(function(e){return{isAuthenticated:e.loginReducers.isAuthenticated,user:e.loginReducers.user}})(t)},ee=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"This is the page for kcpe "))}}]),t}(r.a.Component);ee.contextTypes={router:O.a.object.isRequired};var te=ee,ae=function(e){var t=function(t){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={isAuthenticated:!1},t}return Object(p.a)(a,t),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.isAuthenticated&&"5c39b79cb9717d6060a33c80"===this.props.user.role&&this.setState({isAuthenticated:!0})}},{key:"componentWillUpdate",value:function(e){e.isAuthenticated||this.context.router.history.push("/")}},{key:"render",value:function(){return this.state.isAuthenticated?r.a.createElement(e,this.props):r.a.createElement("div",{className:"alert alert-danger"},"You do no have the permission to view this page")}}]),a}(r.a.Component);return t.contextTypes={router:O.a.object.isRequired},Object(D.b)(function(e){return{isAuthenticated:e.loginReducers.isAuthenticated,user:e.loginReducers.user}})(t)},ne=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"This is the page for classes "))}}]),t}(r.a.Component);ne.contextTypes={router:O.a.object.isRequired};var re=ne,se=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"This is the page for menus "))}}]),t}(r.a.Component);se.contextTypes={router:O.a.object.isRequired};var ie=se,oe=function(e){var t=function(t){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={isAuthenticated:!1},t}return Object(p.a)(a,t),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.isAuthenticated&&"5c3a4be8d08d5d582332d66b"===this.props.user.role&&this.setState({isAuthenticated:!0})}},{key:"componentWillUpdate",value:function(e){e.isAuthenticated||this.context.router.history.push("/")}},{key:"render",value:function(){return this.state.isAuthenticated?r.a.createElement(e,this.props):r.a.createElement("div",{className:"alert alert-danger"},"You do no have the permission to view this page")}}]),a}(r.a.Component);return t.contextTypes={router:O.a.object.isRequired},Object(D.b)(function(e){return{isAuthenticated:e.loginReducers.isAuthenticated,user:e.loginReducers.user}})(t)},le=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"This is the page for roles "))}}]),t}(r.a.Component);le.contextTypes={router:O.a.object.isRequired};var ce=le,ue=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"This is the page for subjects "))}}]),t}(r.a.Component);ue.contextTypes={router:O.a.object.isRequired};var me=ue,de=a(347),he=a(26),pe=a(145),ve=a(146),be=a.n(ve),fe={isAuthenticated:!1,user:{}},Ee=Object(he.c)({loginReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case F:return{isAuthenticated:!be()(t.user),user:t.user};default:return e}}}),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var je=Object(he.e)(Ee,Object(he.d)(Object(he.a)(pe.a)));if(localStorage.getItem("SchoolSystem")){var ye=f.a.decode(localStorage.getItem("SchoolSystem"));je.dispatch(Y(ye))}var ke=new de.a;i.a.render(r.a.createElement(D.a,{store:je},r.a.createElement(W.b,{value:ke},r.a.createElement(function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(k,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:S}),r.a.createElement(c.a,{exact:!0,path:"/signup",component:B}),r.a.createElement(c.a,{exact:!0,path:"/login",component:K}),r.a.createElement(c.a,{exact:!0,path:"/students",component:_(H)}),r.a.createElement(c.a,{exact:!0,path:"/teachers",component:_(X)}),r.a.createElement(c.a,{exact:!0,path:"/kcpe",component:Z(te)}),r.a.createElement(c.a,{exact:!0,path:"/subjects",component:Z(me)}),r.a.createElement(c.a,{exact:!0,path:"/classes",component:ae(re)}),r.a.createElement(c.a,{exact:!0,path:"/menus",component:oe(ie)}),r.a.createElement(c.a,{exact:!0,path:"/roles",component:oe(ce)})))))},null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ge?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Oe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Oe(e)})}}()}},[[147,2,1]]]);
//# sourceMappingURL=main.729e7a02.chunk.js.map