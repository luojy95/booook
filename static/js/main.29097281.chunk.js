(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/img1.c0f1302f.png"},183:function(e,t,a){e.exports=a.p+"static/media/backg.7e2d93f4.jpg"},205:function(e,t,a){e.exports=a(397)},210:function(e,t,a){},228:function(e,t,a){},233:function(e,t,a){e.exports=a.p+"static/media/img2.789d25c3.jpg"},381:function(e,t,a){},383:function(e,t,a){},385:function(e,t,a){},387:function(e,t,a){},389:function(e,t,a){},391:function(e,t,a){},393:function(e,t,a){},395:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(48),i=a.n(l);a(210),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(414),o=a(409),s=(a(212),a(406)),u=r.a.createContext(null),d=a(16),m=a(17),h=a(19),p=a(18),b=a(20),E=r.a.createContext(null),g=function(e){return function(t){return r.a.createElement(E.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},f=E,v=a(23),k=a(50),C=a.n(k),w=(a(219),a(221),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/booook"}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/booook"}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/booook"}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/booook"}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/booook"}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/booook"}).REACT_APP_MESSAGING_SENDER_ID}),O=function e(){var t=this;Object(d.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"/booook"}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged(function(n){n?t.user(n.uid).once("value").then(function(t){var a=t.val();a.roles||(a.roles={}),n=Object(v.a)({uid:n.uid,email:n.email,emailVerified:n.emailVerified,providerData:n.providerData},a),e(n)}):a()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},C.a.initializeApp(w),this.serverValue=C.a.database.ServerValue,this.emailAuthProvider=C.a.auth.EmailAuthProvider,this.auth=C.a.auth(),this.db=C.a.database(),this.googleProvider=new C.a.auth.GoogleAuthProvider},j=function(e){var t=function(t){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(b.a)(a,t),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(u.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return g(t)},y=a(418),S=a(153),I="/",H="/account",U=function(e){return function(t){var a=function(a){function n(){return Object(d.a)(this,n),Object(h.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(b.a)(n,a),Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(a){e(a)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(u.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(S.a)(y.a,g)(a)}},N=function(e){var t=function(t){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then(function(){return t.setState({isSent:!0})})},t.state={isSent:!1},t}return Object(b.a)(a,t),Object(m.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(u.Consumer,null,function(a){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(a)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check your E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check your E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)})}}]),a}(r.a.Component);return g(t)},A=g(function(e){var t=e.firebase;return r.a.createElement(s.a,{to:I,onClick:t.doSignOut},"Sign Out")}),P=(a(228),function(e){e.authUser;return r.a.createElement("div",{className:"ui container",id:"navContainer"},r.a.createElement("div",{className:"ui fixed inverted menu"},r.a.createElement("div",{className:"item",id:"LogoContainer"},r.a.createElement(s.a,{id:"logo",to:I},"BOOOOK .COM")),r.a.createElement("div",{className:"item",id:"hoverEffect"},r.a.createElement(s.a,{to:H},"Dashboard")),r.a.createElement("div",{className:"right item",id:"SignOut"},r.a.createElement(A,null))))}),M=function(){return r.a.createElement("div",{className:"ui container",id:"navContainer"},r.a.createElement("div",{className:"ui fixed inverted menu"},r.a.createElement("div",{className:"item",id:"LogoContainer"},r.a.createElement(s.a,{id:"logo",to:I},"BOOOOK .COM")),r.a.createElement("div",{className:"right item",id:"hoverEffect"},r.a.createElement(s.a,{to:"/signin"},"Sign In"))))},D=function(){return r.a.createElement(u.Consumer,null,function(e){return e?r.a.createElement(P,{authUser:e}):r.a.createElement(M,null)})},_=a(9),B=a(413),R=a(411),x=a(407),L=a(65),T=a.n(L),V=a(109),W=a(415),q=a(416),F=a(398),G=(a(117),a(233),a(22)),$=a.n(G),J=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={page:a.props.page,activeItem:a.props.activeItem,query:a.props.query,category:a.props.category,list:[]},a.detailClickHandler=a.detailClickHandler.bind(Object(_.a)(Object(_.a)(a))),$.a.get("https://rkproject.herokuapp.com/api/books").then(function(){var e=Object(V.a)(T.a.mark(function e(t){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data.data.sort(function(e,t){return"Newly Added"==a.state.page&&e.dateCreated>t.dateCreated?-1:"Newly Added"==a.state.page&&e.dateCreated<=t.dateCreated?1:"Most Viewed"==a.state.page&&e.watchedUsers.length<=t.watchedUsers.length?1:"Most Viewed"==a.state.page&&e.watchedUsers.length>t.watchedUsers.length?-1:void 0});case 2:n=e.sent,a.setState({list:n.map(function(e){return r.a.createElement(W.a.Column,null,r.a.createElement(q.a,null,r.a.createElement(F.a,{onClick:function(){return a.detailClickHandler(e._id)},src:e.picture}),r.a.createElement("p",null,"Title: ",e.title,r.a.createElement("br",null),r.a.createElement("br",null),"College: ",e.college,r.a.createElement("br",null),r.a.createElement("br",null),"Description: ",e.description)),r.a.createElement("br",null))})});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),console.log(a.state.list),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState({page:e.page,activeItem:e.activeItem,query:e.query,category:e.category});var a='https://rkproject.herokuapp.com/api/books?where={"title":{"$regex":".*'+(e.query?e.query:"")+'.*", "$options" : "i"}'+(e.category?', "college": "'+e.category+'"':"")+"}";$.a.get(a).then(function(){var e=Object(V.a)(T.a.mark(function e(a){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.data.data.sort(function(e,a){return"Newly Added"==t.state.page&&e.dateCreated>a.dateCreated?-1:"Newly Added"==t.state.page&&e.dateCreated<=a.dateCreated?1:"Most Viewed"==t.state.page&&e.watchedUsers.length<=a.watchedUsers.length?1:"Most Viewed"==t.state.page&&e.watchedUsers.length>a.watchedUsers.length?-1:void 0});case 2:n=e.sent,t.setState({list:n.map(function(e){return r.a.createElement(W.a.Column,null,r.a.createElement(q.a,null,r.a.createElement(F.a,{onClick:function(){return t.detailClickHandler(e._id)},src:e.picture}),r.a.createElement("p",null,"Title: ",e.title,r.a.createElement("br",null),r.a.createElement("br",null),"College: ",e.college,r.a.createElement("br",null),r.a.createElement("br",null),"Description: ",e.description)),r.a.createElement("br",null))})});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}},{key:"detailClickHandler",value:function(e){window.location.href="https://luojy95.github.io/booook/details/"+e}},{key:"render",value:function(){return r.a.createElement(W.a,{stackable:!0,columns:3},console.log("Child page state: ",this.state.page),r.a.createElement(W.a.Row,null,this.state.list))}}]),t}(r.a.Component),K=a(183),Y=("url(".concat(a.n(K).a,")"),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={activeItem:"Newly Added",category:""},e.newHandleItemClick=e.newHandleItemClick.bind(Object(_.a)(Object(_.a)(e))),e.mostHandleItemClick=e.mostHandleItemClick.bind(Object(_.a)(Object(_.a)(e))),e.searchHandler=e.searchHandler.bind(Object(_.a)(Object(_.a)(e))),e.categoryClickHandler=e.categoryClickHandler.bind(Object(_.a)(Object(_.a)(e))),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"newHandleItemClick",value:function(){this.setState({activeItem:"Newly Added"})}},{key:"mostHandleItemClick",value:function(){this.setState({activeItem:"Most Viewed"})}},{key:"searchHandler",value:function(e){this.setState({query:e.target.value}),console.log(e.target.value)}},{key:"categoryClickHandler",value:function(e){this.setState({category:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B.a,{pointing:!0,secondary:!0,size:"big",stackable:!0},r.a.createElement(R.a,{item:!0,text:"Category"},r.a.createElement(R.a.Menu,null,r.a.createElement(R.a.Item,{onClick:function(){return e.categoryClickHandler("")}},"All"),r.a.createElement(R.a.Item,{onClick:function(){return e.categoryClickHandler("College of Liberal Art and Science")}},"College of Liberal Art and Science"),r.a.createElement(R.a.Item,{onClick:function(){return e.categoryClickHandler("College of Engineering")}},"College of Engineering"),r.a.createElement(R.a.Item,{onClick:function(){return e.categoryClickHandler("College of Business")}},"College of Business"),r.a.createElement(R.a.Item,{onClick:function(){return e.categoryClickHandler("College of Education")}},"College of Education"),r.a.createElement(R.a.Item,{onClick:function(){return e.categoryClickHandler("College of Medicine")}},"College of Medicine"),r.a.createElement(R.a.Item,{onClick:function(){return e.categoryClickHandler("College of Law")}},"College of Law"))),r.a.createElement(B.a.Item,{name:"Newly Added",onClick:this.newHandleItemClick,active:"Newly Added"===this.state.activeItem}),r.a.createElement(B.a.Item,{name:"Most Viewed",onClick:this.mostHandleItemClick,active:"Most Viewed"===this.state.activeItem}),r.a.createElement("div",{className:"center item"},r.a.createElement(x.a,{icon:"search",placeholder:"Title...",value:this.state.query,onChange:this.searchHandler,className:"searchBar"}))),r.a.createElement(J,{category:this.state.category,query:this.state.query,activeItem:this.state.activeItem,page:this.state.activeItem}))}}]),t}(r.a.Component)),z=a(31),Q=a(410),X=(a(381),"https://rkproject.herokuapp.com"),Z={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},ee="auth/email-already-in-use",te="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",ae=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,l=t.passwordOne,i=(t.isAdmin,{});$.a.post(X+"/api/users",{name:n,email:r,password:l}).then(function(e){console.log(e.data.data._id),window.sessionStorage.setItem("userId",e.data.data._id)}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),a.props.firebase.doCreateUserWithEmailAndPassword(r,l).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r,roles:i})}).then(function(){return a.props.history.push(I),a.props.firebase.doSendEmailVerification()}).then(function(){a.setState(Object(v.a)({},Z))}).catch(function(e){e.code===ee&&(e.message=te),a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.state=Object(v.a)({},Z),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,l=e.passwordTwo,i=(e.isAdmin,e.error),c=n!==l||""===n||""===a||""===t;return r.a.createElement(Q.a,{onSubmit:this.onSubmit,class:"form"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{class:"ui button",disabled:c,type:"submit"},"Sign Up"),i&&r.a.createElement("p",null,i.message))}}]),t}(n.Component),ne=function(){return r.a.createElement("div",{class:"forget"},"Don't have an account? ",r.a.createElement(s.a,{to:"/signup"},"Sign Up"))},re=Object(S.a)(y.a,g)(ae),le=function(){return r.a.createElement("div",null,r.a.createElement(re,null))},ie=a(408),ce=a(399),oe=(a(383),a(385),{email:"",error:null}),se=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(v.a)({},oe))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.state=Object(v.a)({},oe),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),ue=(g(se),{marginTop:"12px"}),de={email:"",password:"",error:null},me="auth/account-exists-with-different-credential",he="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",pe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;$.a.get("https://rkproject.herokuapp.com/api/users/email/"+n).then(function(e){window.sessionStorage.setItem("userId",e.data.data._id),console.log(e.data.data._id)}),a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(v.a)({},de)),a.props.history.push("/")}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.state=Object(v.a)({},de),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,l=""===a||""===t;return r.a.createElement(Q.a,{onSubmit:this.onSubmit,class:"form"},r.a.createElement("h1",null,"Sign In"),r.a.createElement(Q.a.Field,null,r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement(Q.a.Field,null,r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement(Q.a.Field,null,r.a.createElement(ce.a,{disabled:l,type:"submit"},"Sign In")),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),be=(n.Component,Object(S.a)(y.a,g)(pe)),Ee=function(){return r.a.createElement(ie.a,null,r.a.createElement(be,null),r.a.createElement(ne,null))},ge=a(412),fe=a(152),ve=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={wish:[],post:[],list:[],activeItem:0},e.detailClickHandler=e.detailClickHandler.bind(Object(_.a)(Object(_.a)(e))),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){0===e.activeItem?this.setState({list:this.state.post}):this.setState({list:this.state.wish})}},{key:"componentDidMount",value:function(){var e=this,t=window.sessionStorage.getItem("userId"),a="https://rkproject.herokuapp.com/api/users/",n="https://rkproject.herokuapp.com/api/books/",l=[],i=[];$.a.get(a+t).then(function(t){l=t.data.data.wishedBooks,console.log(l);for(var a=0;a<l.length;a++)$.a.get(n+l[a]).then(function(t){var a=t.data.data;console.log(a);var n=r.a.createElement(W.a.Column,null,r.a.createElement(q.a,null,r.a.createElement(F.a,{onClick:function(){return e.detailClickHandler(a._id)},src:a.picture}),r.a.createElement("p",null,"Title: ",a.title,r.a.createElement("br",null),r.a.createElement("br",null),"College: ",a.college,r.a.createElement("br",null),r.a.createElement("br",null),"Description: ",a.description)),r.a.createElement("br",null));e.setState({wish:Object(fe.a)(e.state.wish).concat([n])}),console.log(e.state.wish)});return i}),$.a.get(a+t).then(function(t){l=t.data.data.postedBooks;for(var a=0;a<l.length;a++)$.a.get(n+l[a]).then(function(t){var a=t.data.data,n=r.a.createElement(W.a.Column,null,r.a.createElement(q.a,null,r.a.createElement(F.a,{onClick:function(){return e.detailClickHandler(a._id)},src:a.picture}),r.a.createElement("p",null,"Title: ",a.title,r.a.createElement("br",null),r.a.createElement("br",null),"College: ",a.college,r.a.createElement("br",null),r.a.createElement("br",null),"Description: ",a.description)),r.a.createElement("br",null));e.setState({post:Object(fe.a)(e.state.post).concat([n]),list:Object(fe.a)(e.state.post).concat([n])})})})}},{key:"detailClickHandler",value:function(e){window.location.href="https://luojy95.github.io/booook/details/"+e}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W.a,{stackable:!0,columns:3},r.a.createElement(W.a.Row,null,this.state.list)))}}]),t}(n.Component),ke=(a(387),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ce.a,{basic:!0,color:"red",as:s.a,to:"/reset"},"Reset Password"),r.a.createElement(ce.a,{basic:!0,color:"green",as:s.a,to:"/post"},"Post Book"))}}]),t}(n.Component)),Ce=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={activeItem:0},e.postHandler=e.postHandler.bind(Object(_.a)(Object(_.a)(e))),e.wishHandler=e.wishHandler.bind(Object(_.a)(Object(_.a)(e))),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"postHandler",value:function(){this.setState({activeItem:0})}},{key:"wishHandler",value:function(){this.setState({activeItem:1})}},{key:"render",value:function(){var e=this;return r.a.createElement(u.Consumer,null,function(t){return r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"UserCard"},r.a.createElement(ge.a,null,r.a.createElement(F.a,{src:"https://react.semantic-ui.com/images/avatar/large/matthew.png"}),r.a.createElement(ge.a.Content,null,r.a.createElement(ge.a.Header,null,"Hi ",t.username)),r.a.createElement(ge.a.Content,{extra:!0},r.a.createElement(ke,null)))),r.a.createElement("div",{className:"Dropdown"},r.a.createElement(B.a,{tabular:!0},r.a.createElement(B.a.Item,{name:"Posted Book",active:0===e.state.activeItem,onClick:e.postHandler}),r.a.createElement(B.a.Item,{name:"Wished Book",active:1===e.state.activeItem,onClick:e.wishHandler})),r.a.createElement(ve,{activeItem:e.state.activeItem})))})}}]),t}(n.Component),we=a(419),Oe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(v.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement(s.a,{to:{pathname:"".concat("/admin","/").concat(e.uid),state:{user:e}}},"Details")))})))}}]),t}(n.Component),je=g(Oe),ye=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSendPasswordResetEmail=function(){a.props.firebase.doPasswordReset(a.state.user.email)},a.state=Object(v.a)({loading:!1,user:null},e.location.state),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.setState({user:t.val(),loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),a&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",t.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",t.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",t.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(n.Component),Se=g(ye),Ie=Object(S.a)(N,U(function(e){return e&&!!e.roles.ADMIN}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(we.a,null,r.a.createElement(o.a,{exact:!0,path:"/admin/:id",component:Se}),r.a.createElement(o.a,{exact:!0,path:"/admin",component:je})))}),He=(a(389),{title:"",college:"",price:0,description:"",picture:""}),Ue=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state=Object(v.a)({},He),e.titleChangeHandler=e.titleChangeHandler.bind(Object(_.a)(Object(_.a)(e))),e.collegeChangeHandler=e.collegeChangeHandler.bind(Object(_.a)(Object(_.a)(e))),e.priceChangeHandler=e.priceChangeHandler.bind(Object(_.a)(Object(_.a)(e))),e.descriptionChangeHandler=e.descriptionChangeHandler.bind(Object(_.a)(Object(_.a)(e))),e.pictureChangeHandler=e.pictureChangeHandler.bind(Object(_.a)(Object(_.a)(e))),e.clickHandler=e.clickHandler.bind(Object(_.a)(Object(_.a)(e))),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"titleChangeHandler",value:function(e){this.setState({title:e.target.value})}},{key:"collegeChangeHandler",value:function(e){this.setState({college:e.target.value})}},{key:"priceChangeHandler",value:function(e){this.setState({price:parseInt(e.target.value,10)})}},{key:"descriptionChangeHandler",value:function(e){this.setState({description:e.target.value})}},{key:"pictureChangeHandler",value:function(e){console.log(e.target.value),this.setState({picture:e.target.value})}},{key:"clickHandler",value:function(e){var t=new FormData;t.append("rawPic",this.state.picture),t.append("title",this.state.title),t.append("description",this.state.description),t.append("price",this.state.price),t.append("college",this.state.college),t.append("assignedUser",window.sessionStorage.getItem("userId")),$.a.post("https://rkproject.herokuapp.com/api/books",t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"height100"},r.a.createElement("div",{className:"height100"},r.a.createElement("img",{src:""}),r.a.createElement("div",{className:"inputField"},r.a.createElement("form",{className:"ui form",action:"https://luojy95.github.io/booook/account/books"},r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",onChange:this.titleChangeHandler})),r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"College"),r.a.createElement("select",{value:this.state.college,onChange:this.collegeChangeHandler,class:"ui fluid dropdown"},r.a.createElement("option",null,"Choose.."),r.a.createElement("option",{value:"College of Liberal Art and Science"},"College of Liberal Art and Science"),r.a.createElement("option",{value:"College of Engineering"},"College of Engineering"),r.a.createElement("option",{value:"College of Business"},"College of Business"),r.a.createElement("option",{value:"College of Education"},"College of Education"),r.a.createElement("option",{value:"College of Medicine"},"College of Medicine"),r.a.createElement("option",{value:"College of Law"},"College of Law"))),r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Price"),r.a.createElement("div",{class:"ui labeled input"},r.a.createElement("label",{for:"amount",class:"ui label"},"$"),r.a.createElement("input",{onChange:this.priceChangeHandler,type:"text",placeholder:"Amount",id:"amount"}))),r.a.createElement("div",{id:"textarea",class:"ui reply form"},r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{onChange:this.descriptionChangeHandler}))),r.a.createElement("br",null),r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Upload Picture"),r.a.createElement("input",{type:"file",onChange:this.pictureChangeHandler,name:"image"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",class:"ui green button",onClick:this.clickHandler},"Post"),r.a.createElement("button",{to:H,class:"ui red button"},"Cancel")))))}}]),t}(n.Component),Ne=(a(391),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).clickHandler=e.clickHandler.bind(Object(_.a)(Object(_.a)(e))),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"clickHandler",value:function(e,t){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui buttons",id:"halfwidth",onclick:this.clickHandler(0)},r.a.createElement("button",{className:"ui black button",id:"block"},"All"),r.a.createElement("button",{className:"ui red button",id:"block",onclick:this.clickHandler(1)},"College of Engineering")),r.a.createElement("br",null),r.a.createElement("div",{className:"ui buttons",id:"halfwidth"},r.a.createElement("button",{className:"ui red button",id:"block",onclick:this.clickHandler(2)},"College of Liberal Arts and Sciences"),r.a.createElement("button",{className:"ui black button",id:"block",onclick:this.clickHandler(3)},"Gies College of Business")),r.a.createElement("br",null),r.a.createElement("div",{className:"ui buttons",id:"halfwidth"},r.a.createElement("button",{className:"ui black button",id:"block",onclick:this.clickHandler(4)},"College of Law"),r.a.createElement("button",{className:"ui red button",id:"block",onclick:this.clickHandler(5)},"College of Fine and Applied Arts")),r.a.createElement("br",null),r.a.createElement("div",{className:"ui buttons",id:"halfwidth"},r.a.createElement("button",{className:"ui red button",id:"block",onclick:this.clickHandler(6)},"College of Education"),r.a.createElement("button",{className:"ui black button",id:"block",onclick:this.clickHandler(7)},"College of Applied Health Sciences")))}}]),t}(n.Component)),Ae=(a(393),{passwordOne:"",passwordTwo:"",error:null}),Pe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(v.a)({},Ae)),a.props.history.push(H)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.state=Object(v.a)({},Ae),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=(e.error,t!==a||""===t);return r.a.createElement(Q.a,{onSubmit:this.onSubmit,action:"https://luojy95.github.io/booook/account",id:"form"},r.a.createElement("h1",null," Reset Your Password "),r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{class:"ui button",disabled:n,type:"submit"},"Reset My Password"))}}]),t}(n.Component),Me=g(Pe),De=a(167),_e=a(380),Be=(a(395),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(u.Consumer,null,function(t){return t?r.a.createElement(xe,{id:e.props.match.params.id}):r.a.createElement(Re,{id:e.props.match.params.id})})}}]),t}(r.a.Component)),Re=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleItemClick=function(e,t){var n=t.name;a.setState({activeItem:n})},a.state={id:a.props.id,activeItem:"General",price:0,title:"",college:"",description:"",assignedUser:"",owner:"",watchedUser:0,picture:"",email:""},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(window.sessionStorage.getItem("name")),$.a.get("https://rkproject.herokuapp.com/api/books/"+this.state.id).then(function(t){e.setState({price:t.data.data.price,title:t.data.data.title,college:t.data.data.college,description:t.data.data.description,watchedUser:t.data.data.watchedUsers.length,picture:t.data.data.picture}),console.log(t.data.data),$.a.get("https://rkproject.herokuapp.com/api/users/"+t.data.data.assignedUser).then(function(t){e.setState({owner:t.data.data.name,email:t.data.data.email}),console.log(e.state.owner)})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ie.a,{textAlign:"center"},r.a.createElement(ge.a,{id:"card"},r.a.createElement(F.a,{src:this.state.picture,size:"massive"}),r.a.createElement(ge.a.Content,null,r.a.createElement(ge.a.Header,null,this.state.title),r.a.createElement(ge.a.Meta,null,r.a.createElement("span",{className:"price"},"Price: $",this.state.price)),r.a.createElement(ge.a.Meta,null,r.a.createElement("span",{className:"owner"},"Owner: ",this.state.owner)),r.a.createElement(ge.a.Meta,null,r.a.createElement("span",{className:"email"},"Contact: ",this.state.email)),r.a.createElement(ge.a.Description,null,this.state.description)),r.a.createElement(ge.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(De.a,{name:"user"}),this.state.watchedUser," Others want to purchase"))),r.a.createElement("br",null)))}}]),t}(r.a.Component),xe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleItemClick=function(e,t){var n=t.name;a.setState({activeItem:n})},a.state={id:a.props.id,activeItem:"General",price:0,title:"",college:"",description:"",assignedUser:"",owner:"",watchedUser:0,picture:"",buttonName:"BUY with one click!",email:""},a.buyClickHandler=a.buyClickHandler.bind(Object(_.a)(Object(_.a)(a))),a.watchClickHandler=a.watchClickHandler.bind(Object(_.a)(Object(_.a)(a))),a.unwatchClickHandler=a.unwatchClickHandler.bind(Object(_.a)(Object(_.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"buyClickHandler",value:function(){$.a.delete("https://rkproject.herokuapp.com/api/books/"+this.state.id).then(function(){window.location.href="https://luojy95.github.io/booook"})}},{key:"unwatchClickHandler",value:function(){var e=this;$.a.get("https://rkproject.herokuapp.com/api/books/"+this.state.id).then(function(t){var a=t.data.data;a.watchedUsers=new Set(a.watchedUsers),a.watchedUsers.delete(window.sessionStorage.getItem("userId")),a.watchedUsers=Object(fe.a)(a.watchedUsers),$.a.put("https://rkproject.herokuapp.com/api/books/"+e.state.id,a).then(function(){e.componentDidMount()})}),$.a.get("https://rkproject.herokuapp.com/api/users/"+window.sessionStorage.getItem("userId")).then(function(t){var a=t.data.data;a.wishedBooks=new Set(a.wishedBooks),a.wishedBooks.delete(e.state.id),a.wishedBooks=Object(fe.a)(a.wishedBooks),$.a.put("https://rkproject.herokuapp.com/api/users/"+window.sessionStorage.getItem("userId"),a)})}},{key:"watchClickHandler",value:function(){var e=this;$.a.get("https://rkproject.herokuapp.com/api/books/"+this.state.id).then(function(t){var a=t.data.data;a.watchedUsers=new Set(a.watchedUsers),a.watchedUsers.add(window.sessionStorage.getItem("userId")),a.watchedUsers=Object(fe.a)(a.watchedUsers),$.a.put("https://rkproject.herokuapp.com/api/books/"+e.state.id,a).then(function(){e.componentDidMount()})}),$.a.get("https://rkproject.herokuapp.com/api/users/"+window.sessionStorage.getItem("userId")).then(function(t){var a=t.data.data;a.wishedBooks=new Set(a.wishedBooks),a.wishedBooks.add(e.state.id),a.wishedBooks=Object(fe.a)(a.wishedBooks),$.a.put("https://rkproject.herokuapp.com/api/users/"+window.sessionStorage.getItem("userId"),a)})}},{key:"componentDidMount",value:function(){var e=this;console.log(window.sessionStorage.getItem("name")),$.a.get("https://rkproject.herokuapp.com/api/books/"+this.state.id).then(function(t){e.setState({price:t.data.data.price,title:t.data.data.title,college:t.data.data.college,description:t.data.data.description,watchedUser:t.data.data.watchedUsers.length,picture:t.data.data.picture}),console.log(t.data.data),$.a.get("https://rkproject.herokuapp.com/api/users/"+t.data.data.assignedUser).then(function(t){e.setState({owner:t.data.data.name,email:t.data.data.email,buttonName:t.data.data._id==window.sessionStorage.getItem("userId")?"Delete this book":"BUY with one click!"}),console.log(e.state.owner)})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ie.a,{textAlign:"center"},r.a.createElement(ge.a,{id:"card"},r.a.createElement(F.a,{src:this.state.picture,size:"massive"}),r.a.createElement(ge.a.Content,null,r.a.createElement(ge.a.Header,null,this.state.title),r.a.createElement(ge.a.Meta,null,r.a.createElement("span",{className:"price"},"Price: $",this.state.price)),r.a.createElement(ge.a.Meta,null,r.a.createElement("span",{className:"owner"},"Owner: ",this.state.owner)),r.a.createElement(ge.a.Meta,null,r.a.createElement("span",{className:"email"},"Contact: ",this.state.email)),r.a.createElement(ge.a.Description,null,this.state.description)),r.a.createElement(ge.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(De.a,{name:"user"}),this.state.watchedUser," Others want to purchase"))),r.a.createElement("br",null),r.a.createElement(_e.a,{"aria-label":"Basic example"},r.a.createElement(ce.a,{color:"green",onClick:this.watchClickHandler},"Watch this item!"),r.a.createElement("div",{class:"or"}),r.a.createElement(ce.a,{color:"red",onClick:this.unwatchClickHandler},"Unwatch this item!")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ce.a,{basic:!0,color:"BUY with one click!"===this.state.buttonName?"green":"red",onClick:this.buyClickHandler},this.state.buttonName)))}}]),t}(r.a.Component),Le=Be,Te=j(function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement("hr",null),r.a.createElement(o.a,{exact:!0,path:"/details/:id",component:Le}),r.a.createElement(o.a,{exact:!0,path:I,component:Y}),r.a.createElement(o.a,{path:"/signup",component:le}),r.a.createElement(o.a,{path:"/signin",component:Ee}),r.a.createElement(o.a,{path:H,component:Ce}),r.a.createElement(o.a,{path:"/admin",component:Ie}),r.a.createElement(o.a,{path:"/post",component:Ue}),r.a.createElement(o.a,{path:"/category",component:Ne}),r.a.createElement(o.a,{path:"/reset",component:Me})))});i.a.render(r.a.createElement(f.Provider,{value:new O},r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[205,2,1]]]);
//# sourceMappingURL=main.29097281.chunk.js.map