(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{316:function(e,t,a){e.exports=a(519)},516:function(e,t){},519:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(56),c=a.n(o),l=a(20),s=a(25),i=a(281),u=a(36),p=a(75),m=a(541),h=a(51),d=a.n(h),f=Object(s.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(sessionStorage.getItem("user"));if(a)return a;switch(t.type){case"LOGOUT":return{};case"LOGIN_USER":return t.payload;default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":return[];case"LOAD_USER_CHANNELS":case"CREATE_CHANNEL":return t.payload;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":case"SWITCH_TAB":case"SWITCH_CHANNEL":return[];case"NEW_POST":return d.a.unionBy([].concat(Object(p.a)(e),Object(p.a)(t.payload)),"_id");case"LOAD_USER_POSTS":return d.a.unionBy([].concat(Object(p.a)(t.payload),Object(p.a)(e)),"_id");default:return e}},invites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":return[];case"LOAD_USER_INVITES":return t.payload;default:return e}},top5:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGOUT":return{};case"FETCH_TOP5":return d.a.assign(e,Object(u.a)({},n.entity,n.data));default:return e}},activeTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"POSTS",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":return"POSTS";case"SWITCH_TAB":return t.payload;default:return e}},activeChannel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{_id:!1},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGOUT":return{_id:!1};case"LOAD_USER_CHANNELS":case"CREATE_CHANNEL":return n.length<1?e:n[0];case"SWITCH_CHANNEL":return n;default:return e}},form:m.a}),v=a(15),g=a(17),b=a(16),E=a(26),O=a(34),y=a(73),C=a(539),j=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{to:"/login"},r.a.createElement(C.a,{color:"blue"},"Login")),r.a.createElement(y.a,{to:"/register"},r.a.createElement(C.a,{color:"green"},"Sign Up")))}}]),a}(r.a.Component),S=a(531),w=a(538),T=a(533),I=a(530),_=a(19),k=a.n(_),x=a(29),A=a(285),L=a.n(A),N=window.location.protocol+"//"+window.location.hostname+":3001",U="localhost"===window.location.hostname?N:"https://kb512-team-up-api.herokuapp.com",D=L.a.create({baseURL:U}),H=function(e){return function(){var t=Object(x.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.get("/channels",{params:{username:e}});case 2:n=t.sent,r=n.data,a({type:"LOAD_USER_CHANNELS",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e,t){return function(){var a=Object(x.a)(k.a.mark((function a(n){var r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=t.$gte||t.$lte?JSON.stringify({created:t}):{},a.next=3,D.get("/top5",{params:{entity:e,filter:t}});case 3:r=a.sent.data,n({type:"FETCH_TOP5",payload:{entity:e,data:r}});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},M=function(){var e=Object(x.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/invitations",t);case 2:return a=e.sent.data,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=(0,a(43).createBrowserHistory)(),G=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.componentDidUpdate=function(){var t=e.props,a=t.user,n=t.submitSucceeded;a._id?(sessionStorage.setItem("user",JSON.stringify(a)),R.push("/user")):!e.state.err&&n&&e.setState({err:!0})},e.renderInput=function(e){var t=e.input,a=e.type;return r.a.createElement(S.a.Input,Object.assign({label:t.name[0].toUpperCase()+t.name.slice(1),type:a,style:{width:"25vw"}},t,{required:!0,autoComplete:"off"}))},e.render=function(){var t=e.props,a=t.loginUser,n=t.handleSubmit,o=t.submitting;return r.a.createElement(S.a,{error:e.state.err,onSubmit:n(a)},r.a.createElement(T.a,{name:"username",type:"text",component:e.renderInput}),r.a.createElement(T.a,{name:"password",type:"password",component:e.renderInput}),r.a.createElement(w.a,{error:!0,header:"Login Failed",style:{width:"25vw"},content:"Invalid Username or Password"}),r.a.createElement("br",null),r.a.createElement(S.a.Button,{loading:o,type:"submit",color:"blue"},"Login"))},e}return a}(r.a.Component),B=Object(l.b)((function(e){return{user:e.user}}),{loginUser:function(e){return function(){var t=Object(x.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.get("/login",{params:e});case 2:n=t.sent,r=n.data,a({type:"LOGIN_USER",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Object(I.a)({form:"login"})(G)),$=a(305),z=a(187),Y=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={requestSent:!1},e.onSubmit=function(){var t=Object(x.a)(k.a.mark((function t(a){var n,r,o,c,l,s,i,u,p,m,h,f;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e.setState({requestSent:!0}),n={},r={email:{pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,err:"Please enter a valid email address"},password:{pattern:/^[a-zA-Z0-9._@]{8,}$/,err:"Invalid Password Format ( only '.' , '@' , '_' , a-z , A-Z , 0-9 are allowed. Min Length = 8 )"},region:{pattern:/^[a-zA-Z]{2,}$/,err:"Enter a valid region"},username:{pattern:/^[a-z0-9_-]{3,}$/,err:"Enter a valid username ( only '-' , '_' , a-z , A-Z , 0-9 are allowed. Min Length = 3 )  "}},o=0,c=Object.entries(a);o<c.length;o++)l=Object($.a)(c[o],2),s=l[0],i=l[1],p=(u=r[s]).pattern,m=u.err,p.test(i)||(n[s]=m);if(Object.entries(n).length){t.next=10;break}return t.next=7,D.post("/register",a);case 7:h=t.sent,(f=h.data)._id?(sessionStorage.setItem("user",JSON.stringify(f)),e.props.reset(),R.push("/user")):d.a.assign(n,f);case 10:if(e.setState({requestSent:!1}),!Object.entries(n).length){t.next=13;break}throw new z.a(n);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderInput=function(e){var t=e.input,a=e.type,n=e.meta,o=n.asyncValidating,c=n.error,l=n.touched;return r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Input,Object.assign({label:t.name[0].toUpperCase()+t.name.slice(1),type:a,style:{width:"25vw"},error:l&&c?{content:c,pointing:"left"}:void 0},t,{loading:o,required:!0,autoComplete:"off"})))},e.render=function(){var t=e.props,a=t.handleSubmit,n=t.pristine,o=t.reset,c=t.submitting;return r.a.createElement(S.a,{onSubmit:a(e.onSubmit)},r.a.createElement(T.a,{name:"email",type:"email",component:e.renderInput}),r.a.createElement(T.a,{name:"region",type:"text",component:e.renderInput}),r.a.createElement(T.a,{name:"username",type:"text",component:e.renderInput}),r.a.createElement(T.a,{name:"password",type:"password",component:e.renderInput}),r.a.createElement("br",null),r.a.createElement(C.a,{type:"submit",loading:e.state.requestSent,color:"green"},"Register"),r.a.createElement(C.a,{disabled:n||c,onClick:o,color:"red"},"Reset"))},e}return a}(r.a.Component),F=Object(I.a)({form:"register",asyncValidate:function(){var e=Object(x.a)(k.a.mark((function e(t){var a,n,r,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.username,e.next=3,D.get("/validate",{params:{email:a,username:n}});case 3:if(r=e.sent,!(o=r.data).email&&!o.username){e.next=7;break}throw o;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),asyncChangeFields:["username","email"]})(Y),q=a(542),W=a(529),J=a(540),V=a(111),Z=a(147),X=a(93),K=a(532),Q=a(528),ee=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",description:"",tag:"",tags:[],modalOpen:!1,error:{name:!1,description:!1,tag:!1}},e.handleChange=function(t,a){var n=a.name,r=a.value;return e.setState(Object(u.a)({},n,r))},e.handleOpen=function(){return e.setState({modalOpen:!0})},e.handleClose=function(){return e.setState({modalOpen:!1})},e.validate=function(){var t={name:!1,description:!1},a=!0;return e.state.name.length||(t.name="Enter a Channel Name",a=!1),e.state.description.length||(t.description="Enter a Description",a=!1),e.state.tags.length<=0&&(t.tag="Add atleast one tag",a=!1),e.setState({error:t}),a},e.validateTag=function(){var t=Object(V.a)({},e.state.error);return e.state.tag.length<=0?(t.tag="Enter a Tag",e.setState({error:t}),!1):e.state.tags.includes(e.state.tag)?(t.tag="Tag already added",e.setState({error:t}),!1):(t.tag=!1,e.setState({error:t}),!0)},e.onSubmitTag=function(){e.validateTag()&&e.setState({tags:[].concat(Object(p.a)(e.state.tags),[e.state.tag])})},e.removeTag=function(t){e.setState({tags:e.state.tags.filter((function(e){return e!==t}))})},e.onSubmit=function(){e.validate()&&(e.props.createChannel({name:e.state.name,description:e.state.description,tags:e.state.tags,username:e.props.username}),e.handleClose())},e.renderTags=function(){return e.state.tags.map((function(t){return r.a.createElement(Z.a,{key:t,color:"orange"},t,r.a.createElement(X.a,{name:"delete",link:!0,onClick:function(){e.removeTag(t)}}))}))},e.render=function(){return r.a.createElement(K.a,{trigger:r.a.createElement(C.a,{onClick:e.handleOpen,icon:!0,primary:!0},r.a.createElement(X.a,{name:"add"})," New Channel"),open:e.state.modalOpen,onClose:e.handleClose,closeIcon:!0},r.a.createElement(K.a.Header,null,"Create a new Channel"),r.a.createElement(K.a.Content,{image:!0},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Input,{label:"Name",placeholder:"Name",name:"name",onChange:e.handleChange,style:{width:"40rem"},error:e.state.error.name?{content:e.state.error.name,pointing:"left"}:void 0})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Field,{label:"Description",placeholder:"Description",control:Q.a,name:"description",onChange:e.handleChange,style:{width:"40rem",height:"10rem"},error:e.state.error.description?{content:e.state.error.description,pointing:"left"}:void 0})),r.a.createElement(S.a.Group,{inline:!0},r.a.createElement(S.a.Input,{label:"Tag",placeholder:"Tag",name:"tag",onChange:e.handleChange,error:e.state.error.tag?{content:e.state.error.tag,pointing:"left"}:void 0}),r.a.createElement(X.a,{size:"large",color:"green",name:"add",link:!0,onClick:e.onSubmitTag})),r.a.createElement(S.a.Group,null," ",e.renderTags()),r.a.createElement("br",null),r.a.createElement(K.a.Actions,null,r.a.createElement(C.a,{color:"green",onClick:e.onSubmit},"SUBMIT")))))},e}return a}(r.a.Component),te=Object(l.b)((function(e){return e.user}),{createChannel:function(e){return function(){var t=Object(x.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.post("/channels",e);case 2:return n=t.sent.data.msg,alert(n),t.next=6,D.get("/channels",{params:{username:e.username}});case 6:r=t.sent.data,a({type:"CREATE_CHANNEL",payload:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ee),ae=a(535),ne=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={channel:{},username:"",modalOpen:!1,requestSent:!1,error:{username:!1,channel:!1}},e.handleChange=function(t,a){var n=a.name,r=a.value;return e.setState(Object(u.a)({},n,"channel"===n?JSON.parse(r):r))},e.openModal=function(){e.props.channels.length<1?alert("No Channel created to Invite anyone"):e.setState({modalOpen:!0})},e.closeModal=function(){return e.setState({modalOpen:!1})},e.validate=function(){e.setState({requestSent:!0});var t={username:!1,channel:!1},a=!0;return e.state.channel._id||(t.channel="Select a Channel",a=!1),e.setState({error:t}),a},e.onSubmit=Object(x.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.validate()){t.next=3;break}return e.setState({requestSent:!1}),t.abrupt("return");case 3:return t.next=5,M({channel_id:e.state.channel._id,channel_name:e.state.channel.name,username:e.state.username,sent_by:e.state.channel.username});case 5:a=t.sent,e.setState({requestSent:!1}),a.err?e.setState({error:{username:a.err,channel:!1}}):(e.closeModal(),alert(a.msg));case 8:case"end":return t.stop()}}),t)}))),e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(K.a,{trigger:r.a.createElement(C.a,{onClick:this.openModal,icon:!0,primary:!0},r.a.createElement(X.a,{name:"add"})," New Invite"),open:this.state.modalOpen,onClose:this.closeModal,closeIcon:!0},r.a.createElement(K.a.Header,null,"Send an Invite "),r.a.createElement(K.a.Content,{image:!0},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,null,r.a.createElement(ae.a,{style:{marginLeft:"2%"},name:"channel",onChange:this.handleChange,placeholder:"Channel",error:Boolean(this.state.error.channel),options:this.props.channels.filter((function(t){return t.username===e.props.user.username})).map((function(e){var t=e._id,a=e.name,n=e.username;return{key:t,text:a,value:JSON.stringify({_id:t,name:a,username:n})}}))})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Input,{label:"Username",placeholder:"Username",name:"username",onChange:this.handleChange,style:{width:"40rem"},error:this.state.error.username?{content:this.state.error.username,pointing:"left"}:void 0})),r.a.createElement("br",null),r.a.createElement(K.a.Actions,null,this.state.requestSent?r.a.createElement(C.a,{loading:!0,primary:!0},"Loading"):r.a.createElement(C.a,{color:"blue",onClick:this.onSubmit},"INVITE")))))}}]),a}(n.Component),re=Object(l.b)((function(e){return{channels:e.channels,user:e.user}}),{loadChannels:H})(ne),oe=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:"POSTS"},e.handleItemClick=function(t,a){var n=a.name;e.props.switchTab(n),e.setState({activeItem:n})},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement(J.a,{style:{position:"relative",height:"6%"},size:"large",pointing:!0},r.a.createElement(J.a.Item,{header:!0},"TEAM-UP"),r.a.createElement(J.a.Item,{name:"POSTS",active:"POSTS"===this.state.activeItem,onClick:this.handleItemClick}),r.a.createElement(J.a.Item,{name:"TOP5",active:"TOP5"===this.state.activeItem,onClick:this.handleItemClick}),r.a.createElement(J.a.Menu,{position:"right"},r.a.createElement(J.a.Item,{name:"INVITES",active:"INVITES"===this.state.activeItem,onClick:this.handleItemClick}),r.a.createElement(J.a.Item,null,r.a.createElement(te,null)),r.a.createElement(J.a.Item,null,r.a.createElement(re,null))))}}]),a}(n.Component),ce=Object(l.b)(null,{switchTab:function(e){return{type:"SWITCH_TAB",payload:e}}})(oe),le=a(543),se=a(544),ie=a(306),ue=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.logout=function(){sessionStorage.clear(),e.props.logoutUser()},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement(le.a,{style:{height:"auto"},clearing:!0},r.a.createElement(se.a,{as:"h2",floated:"left"},r.a.createElement(ie.a,{circular:!0,src:"https://react.semantic-ui.com/images/avatar/large/patrick.png"}),this.props.username),r.a.createElement(y.a,{to:"/"},r.a.createElement(C.a,{floated:"right",color:"black",onClick:this.logout},"Logout")))}}]),a}(r.a.Component),pe=Object(l.b)(null,{logoutUser:function(){return{type:"LOGOUT"}}})(ue),me=a(545),he=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={activeItem:""},e.handleItemClick=function(t,a){var n=a.name;e.setState({activeItem:n})},e.componentDidMount=Object(x.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.loadChannels(e.props.user.username);case 2:e.props.channels&&e.props.channels.length&&e.setState({activeItem:e.props.channels[0].name});case 3:case"end":return t.stop()}}),t)}))),e.channelList=function(t){return r.a.createElement(J.a.Item,{name:t.name,key:t._id,active:e.state.activeItem===t.name,onClick:function(a,n){e.handleItemClick(a,n),e.props.switchChannel(t)}})},e.render=function(){return e.props.channels?r.a.createElement(J.a,{text:!0,vertical:!0,stackable:!0},r.a.createElement(J.a.Item,{header:!0},"CHANNELS"),e.props.channels.map((function(t){return e.channelList(t)}))):r.a.createElement(W.a,{active:!0,inline:!0})},e}return a}(r.a.Component),de=Object(l.b)((function(e){return{user:e.user,channels:e.channels}}),{loadChannels:H,switchChannel:function(e){return{type:"SWITCH_CHANNEL",payload:e}}})(he),fe=a(303),ve=a.n(fe)()(U),ge={position:"relative",width:"100%",height:"70%",resize:"none"},be=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={content:"",tags:[],error:!1},e.handleChange=function(t,a){var n=a.name,r=a.value;e.setState(Object(u.a)({},n,"content"===n?r.replace(/[/^ *$/]{2,}/g," ").replace(/^\s*[\r\n]/gm,""):r))},e.validate=function(){return e.state.content.length<2?(e.setState({error:"Invalid Content"}),!1):(e.setState({error:!1}),!0)},e.onSubmit=function(){e.validate()&&(ve.emit("new_post",{username:e.props.user.username,tags:e.state.tags,content:e.state.content,channel_id:e.props.activeChannel._id}),e.setState({content:"",tags:[],error:!1}))},e}return Object(O.a)(a,[{key:"render",value:function(){return this.props.activeChannel._id?r.a.createElement(le.a,{style:{position:"relative",height:"20%",marginTop:"0",top:"0",bottom:"0",background:"#989898"}},r.a.createElement(ae.a,{name:"tags",placeholder:"Tags",style:{position:"relative",marginBottom:"0.3%"},multiple:!0,selection:!0,value:this.state.tags,options:this.props.activeChannel.tags.map((function(e){return{key:e,text:e,value:e}})),onChange:this.handleChange}),r.a.createElement(C.a,{color:"green",floated:"right",onClick:this.onSubmit},"POST"),r.a.createElement("br",null),r.a.createElement(Q.a,{name:"content",placeholder:this.state.error?"Enter some text!":"Post Content",style:this.state.error?d.a.assign(ge,{border:"4px solid red"}):ge,value:this.state.content,onChange:this.handleChange})):r.a.createElement(r.a.Fragment,null,"Loading..")}}]),a}(n.Component),Ee=Object(l.b)((function(e){return{activeChannel:e.activeChannel,user:e.user}}))(be),Oe=a(534),ye=a(74),Ce=a.n(ye),je=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={activeChannel:!1},e.componentDidMount=function(){var t=document.getElementById("chatContainer");t.onscroll=function(){0===t.scrollTop&&ve.emit("fetch_old_posts",{channel_id:e.props.activeChannel._id,skip:e.props.posts.length},e.props.loadPosts)},ve.on("new_post_braodcast",(function(a){e.props.updatePosts(a),t.scrollHeight&&(t.scrollTop=t.scrollHeight)}))},e.componentDidUpdate=function(t){var a=document.getElementById("chatContainer"),n=t.posts.length,r=e.props.posts.length;n<r&&(a.scrollTop=n<1?a.scrollHeight:1+a.scrollHeight*(r-n)/r)},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement(le.a,{id:"chatContainer",style:{position:"relative",overflowY:"scroll",scrollBehavior:"smooth",height:"70%",marginBottom:"0",background:"#D0D0D0"}},this.props.posts.map((function(e,t){return Se(e,t)})))}}]),a}(n.Component);je.getDerivedStateFromProps=function(e,t){return e.activeChannel&&e.activeChannel._id!==t.activeChannel._id?(ve.emit("join_channel_room",e.activeChannel._id,e.loadPosts),{activeChannel:e.activeChannel}):t};var Se=function(e){return r.a.createElement(le.a,{style:{wordWrap:"break-word"},key:e._id},r.a.createElement(Oe.a.User,null,r.a.createElement("b",{style:{marginRight:"1%",fontSize:"1.1rem"}},e.username)),r.a.createElement("span",{style:{color:"#bfbfbf",fontSize:"0.85rem"}},Ce()(e.created,"x").format("h:mm A, D-MMM-YYYY")),r.a.createElement("span",{style:{float:"right"}},e.tags.map((function(e,t){return r.a.createElement(Z.a,{color:"orange",key:t},e)}))),r.a.createElement("br",null),we(e.content.split("\n")))},we=function(e){var t=[];return e.forEach((function(e,a){t.push(e),t.push(r.a.createElement("br",{key:a}))})),t.pop(),t},Te=Object(l.b)((function(e){return{activeChannel:e.activeChannel,posts:e.posts,user:e.user}}),{updatePosts:function(e){return{type:"NEW_POST",payload:e}},loadPosts:function(e){return{type:"LOAD_USER_POSTS",payload:e}}})(je),Ie=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.render=function(){return r.a.createElement(me.a,{style:{position:"relative",height:"100%"},stackable:!0},r.a.createElement(me.a.Row,{style:{position:"relative",height:"100%",paddingBottom:"0",display:"flex"},stretched:!0},r.a.createElement(me.a.Column,{style:{position:"relative",overflowX:"auto",overflowY:"scroll",width:"auto",height:"100%"}},r.a.createElement(de,null)),r.a.createElement("br",null),r.a.createElement(me.a.Column,{style:{position:"relative",flexGrow:"100",height:"100%"}},r.a.createElement(Te,null),r.a.createElement(Ee,null))))},e}return a}(r.a.Component),_e=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.handleChange=function(t,a){var n=a.name,r=a.value,o="$lte"===n?Ce()(r).add("1","day").subtract("1","milliseconds").format("x"):Ce()(r).format("x");if(""===r)e.updateTop5(d.a.omit(e.state,n)),delete e.state[n],e.setState({});else{if(!e.validate(n,o))return void alert("Invalid Range");e.updateTop5(Object(V.a)(Object(V.a)({},e.state),{},Object(u.a)({},n,o))),e.setState(Object(u.a)({},n,o))}},e.validate=function(t,a){return"$lte"===t&&e.state.$gte?-1===e.state.$gte.localeCompare(a):"$gte"!==t||!e.state.$lte||-1===a.localeCompare(e.state.$lte)},e.updateTop5=function(t){e.props.loadTop5("channels",t),e.props.loadTop5("users",t),e.props.loadTop5("tags",t),e.props.loadTop5("regions",t)},e.render=function(){return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},r.a.createElement(S.a.Input,{label:"FROM:",name:"$gte",type:"date",style:{marginLeft:"1rem"},onChange:e.handleChange,max:Ce()(Date.now(),"x").format("YYYY-MM-DD")}),r.a.createElement("div",{style:{marginLeft:"3rem"}},r.a.createElement(S.a.Input,{label:"TO:",name:"$lte",type:"date",style:{marginLeft:"1rem"},onChange:e.handleChange,max:Ce()(Date.now(),"x").format("YYYY-MM-DD")})))},e}return a}(n.Component),ke=Object(l.b)(null,{loadTop5:P})(_e),xe=a(536),Ae=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){e.props.loadTop5(e.props.name,{})},e.createList=function(t){return r.a.createElement(xe.a,{style:{textAlign:"center"},basic:"very",celled:!0,collapsing:!0},r.a.createElement(xe.a.Header,null,r.a.createElement(xe.a.Row,null,r.a.createElement(xe.a.HeaderCell,null,e.props.name.toUpperCase()),r.a.createElement(xe.a.HeaderCell,null,e.units(e.props.name).toUpperCase()))),r.a.createElement(xe.a.Body,null,t.map((function(t){return r.a.createElement(xe.a.Row,{key:"channels"===e.props.name?t.name:t._id},r.a.createElement(xe.a.Cell,null,"channels"===e.props.name?t.name:t._id),r.a.createElement(xe.a.Cell,null,"tags"===e.props.name?t.channels.length:t.count))}))))},e}return Object(O.a)(a,[{key:"units",value:function(e){switch(e){case"channels":case"users":return"Posts";case"regions":return"Users";case"tags":return"Channels";default:return""}}},{key:"render",value:function(){return this.props[this.props.name]?r.a.createElement(le.a,null,r.a.createElement(se.a,{as:"h2",floated:"left"},"Top ",this.props.name),r.a.createElement("br",null),this.createList(this.props[this.props.name])):r.a.createElement(q.a,{active:!0,inverted:!0},r.a.createElement(W.a,{content:"Loading"}))}}]),a}(r.a.Component),Le=Object(l.b)((function(e,t){var a=e.top5,n=t.name;return Object(u.a)({},n,a[n])}),{loadTop5:P})(Ae),Ne=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(le.a.Group,{horizontal:!0},r.a.createElement(Le,{name:"users"}),r.a.createElement(Le,{name:"channels"})),r.a.createElement(le.a.Group,{horizontal:!0},r.a.createElement(Le,{name:"regions"}),r.a.createElement(Le,{name:"tags"})))},e}return a}(r.a.Component),Ue=a(537),De=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.componentDidMount=Object(x.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.loadInvites(e.props.user.username);case 2:case"end":return t.stop()}}),t)}))),e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.invites.length?this.props.invites.map((function(t){return r.a.createElement(Ue.a,{key:t._id},r.a.createElement(Ue.a.Content,null,r.a.createElement(Ue.a.Header,null,t.channel_name),r.a.createElement(Ue.a.Description,null,r.a.createElement("strong",null,t.sent_by)," invited you to this channel.")),r.a.createElement(Ue.a.Content,{extra:!0},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement(C.a,{onClick:Object(x.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.respondToInvite({_id:t._id});case 2:return a.next=4,e.props.loadInvites(e.props.user.username);case 4:case"end":return a.stop()}}),a)}))),basic:!0,color:"green"},"Accept"),r.a.createElement(C.a,{onClick:Object(x.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.respondToInvite({_id:t._id},!1);case 2:return a.next=4,e.props.loadInvites(e.props.user.username);case 4:case"end":return a.stop()}}),a)}))),basic:!0,color:"red"},"Reject"))))})):"No Invites")}}]),a}(r.a.Component),He=Object(l.b)((function(e){return{user:e.user,invites:e.invites}}),{respondToInvite:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(x.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=5;break}return a.next=3,D.put("/invitations",e);case 3:a.next=7;break;case 5:return a.next=7,D.delete("/invitations",{params:e});case 7:return a.abrupt("return",null);case 8:case"end":return a.stop()}}),a)})))},loadInvites:function(e){return function(){var t=Object(x.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.get("/invitations",{params:{username:e}});case 2:n=t.sent.data,a({type:"LOAD_USER_INVITES",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(De),Pe=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).selectTab=function(){switch(e.props.tab){case"TOP5":return r.a.createElement(Ne,null);case"INVITES":return r.a.createElement(He,null);default:return r.a.createElement(Ie,null)}},e.render=function(){return r.a.createElement(le.a,{style:{position:"relative",height:"80%"}},e.selectTab())},e}return a}(r.a.Component),Me=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.componentDidMount=function(){setTimeout((function(){JSON.parse(sessionStorage.getItem("user"))||R.push("/login")}),800)},e.render=function(){return e.props.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{username:e.props.user.username}),r.a.createElement(ce,null),r.a.createElement(Pe,{tab:e.props.activeTab})):r.a.createElement(q.a,{active:!0,inverted:!0},r.a.createElement(W.a,{content:"Loading"}))},e}return a}(r.a.Component),Re=Object(l.b)((function(e){return{activeTab:e.activeTab,user:e.user}}))(Me),Ge=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:j}),r.a.createElement(E.a,{exact:!0,path:"/login",component:B}),r.a.createElement(E.a,{exact:!0,path:"/register",component:F}),r.a.createElement(E.a,{exact:!0,path:"/user",component:Re}))},e}return a}(r.a.Component),Be=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement("div",{style:{padding:"2%",position:"absolute",width:"100vw",height:"100vh"}},r.a.createElement(E.b,{history:R},r.a.createElement(Ge,null)))},e}return a}(r.a.Component),$e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,ze=Object(s.e)(f,$e(Object(s.a)(i.a)));c.a.render(r.a.createElement(l.a,{store:ze},r.a.createElement(Be,null)),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.a382cb02.chunk.js.map