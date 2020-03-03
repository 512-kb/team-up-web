(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{291:function(e,t,a){e.exports=a(502)},498:function(e,t){},502:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),c=a.n(o),s=a(20),l=a(57),i=a(254),u=a(24),p=a(82),m=a(120),h=a.n(m),d=Object(l.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:!1},t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(sessionStorage.getItem("user"));if(a)return a;switch(t.type){case"LOGOUT":return{username:!1};case"LOGIN_USER":case"REGISTER_USER":return t.payload;default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":return[];case"LOAD_USER_CHANNELS":case"CREATE_CHANNEL":return t.payload;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":case"SWITCH_CHANNEL":return[];case"NEW_POST":return[].concat(Object(p.a)(e),[t.payload]);case"LOAD_USER_POSTS":return[].concat(Object(p.a)(t.payload),Object(p.a)(e));default:return e}},invites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":return[];case"LOAD_USER_INVITES":return t.payload;default:return e}},top5:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGOUT":return{};case"FETCH_TOP5":return h.a.assign(e,Object(u.a)({},n.entity,n.data));default:return e}},activeTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"POSTS",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT":return"POSTS";case"SWITCH_TAB":return t.payload;default:return e}},activeChannel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{_id:!1},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGOUT":return{_id:!1};case"LOAD_USER_CHANNELS":case"CREATE_CHANNEL":return n.length<1?e:n[0];case"SWITCH_CHANNEL":return n;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=t.type;return"LOAD_USER_POSTS"===a?++e:e}}),g=a(14),f=a(15),v=a(16),E=a(17),b=a(60),O=a(25),C=a(66),y=a(519),w=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{to:"/login"},r.a.createElement(y.a,{color:"blue"},"Login")),r.a.createElement(C.a,{to:"/register"},r.a.createElement(y.a,{color:"green"},"Sign Up")))}}]),t}(r.a.Component),j=a(513),S=a(19),T=a.n(S),_=a(29),I=a(259),k=a.n(I),A=window.location.protocol+"//"+window.location.hostname+":3001",x="localhost"===window.location.hostname?A:"https://kb512-team-up-api.herokuapp.com",N=k.a.create({baseURL:x}),L=function(e){return function(){var t=Object(_.a)(T.a.mark((function t(a){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("/channels",{params:{username:e}});case 2:n=t.sent.data,a({type:"LOAD_USER_CHANNELS",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(){var e=Object(_.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("/invitations",t);case 2:return a=e.sent.data,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=(0,a(38).createBrowserHistory)(),R=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:"",error:{username:!1,password:!1}},a.validate=function(e){var t={username:!1,password:!1};return e.username||(t.username="Enter the username"),e.password||(t.password="Enter the password"),a.setState({error:t}),!t.username&&!t.password},a.onSubmit=function(){var e={username:a.state.username,password:a.state.password};a.validate(e)&&a.props.loginUser(e)},a.handleChange=function(e,t){return a.setState(Object(u.a)({},t.name,t.value))},a.render=function(){return r.a.createElement(j.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Username",placeholder:"Username",name:"username",autoComplete:"off",onChange:a.handleChange,error:a.state.error.username?a.state.error.username:void 0})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Password",placeholder:"Password",type:"password",name:"password",autoComplete:"off",onChange:a.handleChange,error:a.state.error.password?a.state.error.password:void 0})),r.a.createElement("br",null),r.a.createElement(j.a.Button,{onClick:a.onSubmit,color:"blue"},"Login"))},a}return Object(E.a)(t,e),t}(r.a.Component),D=Object(s.b)((function(e){var t=e.user;return t.username&&(sessionStorage.setItem("user",JSON.stringify(t)),P.push("/user")),t.msg&&alert(t.msg),t}),{loginUser:function(e){return function(){var t=Object(_.a)(T.a.mark((function t(a){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("/login",{params:e});case 2:n=t.sent,a({type:"LOGIN_USER",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(R),G=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",region:"",username:"",password:"",requestSent:!1,error:{email:!1,region:!1,username:!1,password:!1}},a.handleChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(u.a)({},n,r))},a.emailValidator=function(e){return!(""===e||!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e))},a.passValidator=function(e){return!(""===e||!/[a-zA-Z0-9._@]{8,}/.test(e))},a.regionValidator=function(e){return!(""===e||!/^[a-zA-Z]{2,}$/.test(e))},a.usernameValidator=function(e){return!(""===e||!/^[a-z0-9_-]{3,}$/.test(e))},a.validate=function(e){var t={email:!1,region:!1,username:!1,password:!1};return a.usernameValidator(e.username)||(t.username="Enter a valid username ( only '-' , '_' , a-z , A-z , 0-9 are allowed. Min Length = 3 )  "),a.regionValidator(e.region)||(t.region="Enter a valid region"),a.emailValidator(e.email)||(t.email="Please enter a valid email address"),a.passValidator(e.password)||(t.password="Invalid Password Format ( only '.' , '@' , '_' , a-z , A-z , 0-9 are allowed. Min Length = 8 )"),a.setState({error:t,requestSent:!1}),!(t.email||t.region||t.username||t.password)},a.onSubmit=function(){a.setState({requestSent:!0});var e={email:a.state.email,region:a.state.region,username:a.state.username,password:a.state.password};a.validate(e)&&a.props.registerUser(e)},a.render=function(){return r.a.createElement(j.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Email",placeholder:"Email",name:"email",onChange:a.handleChange,error:a.state.error.email?{content:a.state.error.email,pointing:"below"}:void 0})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Region",placeholder:"Region",name:"region",onChange:a.handleChange,error:a.state.error.region?{content:a.state.error.region,pointing:"below"}:void 0})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Username",placeholder:"Username",name:"username",onChange:a.handleChange,error:a.state.error.username?{content:a.state.error.username,pointing:"below"}:void 0})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Password",placeholder:"Password",name:"password",onChange:a.handleChange,error:a.state.error.password?{content:a.state.error.password,pointing:"below"}:void 0})),r.a.createElement("br",null),a.state.requestSent?r.a.createElement(y.a,{loading:!0,primary:!0},"Loading"):r.a.createElement(y.a,{color:"green",onClick:a.onSubmit},"Register"))},a}return Object(E.a)(t,e),t}(r.a.Component),H=Object(s.b)((function(e){var t=e.user;return t.username&&(sessionStorage.setItem("user",JSON.stringify(t)),P.push("/user")),t.msg&&alert(t.msg),t}),{registerUser:function(e){return function(){var t=Object(_.a)(T.a.mark((function t(a){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.post("/register",e);case 2:n=t.sent,a({type:"REGISTER_USER",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(G),M=a(521),B=a(512),z=a(520),V=a(268),F=a(127),q=a(83),J=a(514),W=a(511),Y=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",description:"",tag:"",tags:[],modalOpen:!1,error:{name:!1,description:!1,tag:!1}},a.handleChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(u.a)({},n,r))},a.handleOpen=function(){return a.setState({modalOpen:!0})},a.handleClose=function(){return a.setState({modalOpen:!1})},a.validate=function(){var e={name:!1,description:!1},t=!0;return a.state.name.length||(e.name="Enter a Channel Name",t=!1),a.state.description.length||(e.description="Enter a Description",t=!1),a.state.tags.length<=0&&(e.tag="Add atleast one tag",t=!1),a.setState({error:e}),t},a.validateTag=function(){var e=Object(V.a)({},a.state.error);return a.state.tag.length<=0?(e.tag="Enter a Tag",a.setState({error:e}),!1):a.state.tags.includes(a.state.tag)?(e.tag="Tag already added",a.setState({error:e}),!1):(e.tag=!1,a.setState({error:e}),!0)},a.onSubmitTag=function(){a.validateTag()&&a.setState({tags:[].concat(Object(p.a)(a.state.tags),[a.state.tag])})},a.removeTag=function(e){a.setState({tags:a.state.tags.filter((function(t){return t!==e}))})},a.onSubmit=function(){a.validate()&&(a.props.createChannel({name:a.state.name,description:a.state.description,tags:a.state.tags,username:a.props.username}),a.handleClose())},a.renderTags=function(){return a.state.tags.map((function(e){return r.a.createElement(F.a,{key:e,color:"orange"},e,r.a.createElement(q.a,{name:"delete",link:!0,onClick:function(){a.removeTag(e)}}))}))},a.render=function(){return r.a.createElement(J.a,{trigger:r.a.createElement(y.a,{onClick:a.handleOpen,icon:!0,primary:!0},r.a.createElement(q.a,{name:"add"})," New Channel"),open:a.state.modalOpen,onClose:a.handleClose,closeIcon:!0},r.a.createElement(J.a.Header,null,"Create a new Channel"),r.a.createElement(J.a.Content,{image:!0},r.a.createElement(j.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Name",placeholder:"Name",name:"name",onChange:a.handleChange,style:{width:"40rem"},error:a.state.error.name?{content:a.state.error.name,pointing:"left"}:void 0})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{label:"Description",placeholder:"Description",control:W.a,name:"description",onChange:a.handleChange,style:{width:"40rem",height:"10rem"},error:a.state.error.description?{content:a.state.error.description,pointing:"left"}:void 0})),r.a.createElement(j.a.Group,{inline:!0},r.a.createElement(j.a.Input,{label:"Tag",placeholder:"Tag",name:"tag",onChange:a.handleChange,error:a.state.error.tag?{content:a.state.error.tag,pointing:"left"}:void 0}),r.a.createElement(q.a,{size:"large",color:"green",name:"add",link:!0,onClick:a.onSubmitTag})),r.a.createElement(j.a.Group,null," ",a.renderTags()),r.a.createElement("br",null),r.a.createElement(J.a.Actions,null,r.a.createElement(y.a,{color:"green",onClick:a.onSubmit},"SUBMIT")))))},a}return Object(E.a)(t,e),t}(r.a.Component),Z=Object(s.b)((function(e){return e.user}),{createChannel:function(e){return function(){var t=Object(_.a)(T.a.mark((function t(a){var n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.post("/channels",e);case 2:return n=t.sent.data.msg,alert(n),t.next=6,N.get("/channels",{params:{username:e.username}});case 6:r=t.sent.data,a({type:"CREATE_CHANNEL",payload:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Y),X=a(516),$=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={channel:{},username:"",modalOpen:!1,requestSent:!1,error:{username:!1,channel:!1}},a.handleChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(u.a)({},n,"channel"===n?JSON.parse(r):r))},a.openModal=function(){a.props.channels.length<1?alert("No Channel created to Invite anyone"):a.setState({modalOpen:!0})},a.closeModal=function(){return a.setState({modalOpen:!1})},a.validate=function(){a.setState({requestSent:!0});var e={username:!1,channel:!1},t=!0;return a.state.channel._id||(e.channel="Select a Channel",t=!1),a.setState({error:e}),t},a.onSubmit=Object(_.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.validate()){e.next=3;break}return a.setState({requestSent:!1}),e.abrupt("return");case 3:return e.next=5,U({channel_id:a.state.channel._id,channel_name:a.state.channel.name,username:a.state.username,sent_by:a.state.channel.username});case 5:t=e.sent,a.setState({requestSent:!1}),t.err?a.setState({error:{username:t.err,channel:!1}}):(a.closeModal(),alert(t.msg));case 8:case"end":return e.stop()}}),e)}))),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(J.a,{trigger:r.a.createElement(y.a,{onClick:this.openModal,icon:!0,primary:!0},r.a.createElement(q.a,{name:"add"})," New Invite"),open:this.state.modalOpen,onClose:this.closeModal,closeIcon:!0},r.a.createElement(J.a.Header,null,"Send an Invite "),r.a.createElement(J.a.Content,{image:!0},r.a.createElement(j.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(X.a,{style:{marginLeft:"2%"},name:"channel",onChange:this.handleChange,placeholder:"Channel",error:Boolean(this.state.error.channel),options:this.props.channels.filter((function(t){return t.username===e.props.user.username})).map((function(e){var t=e._id,a=e.name,n=e.username;return{key:t,text:a,value:JSON.stringify({_id:t,name:a,username:n})}}))})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Input,{label:"Username",placeholder:"Username",name:"username",onChange:this.handleChange,style:{width:"40rem"},error:this.state.error.username?{content:this.state.error.username,pointing:"left"}:void 0})),r.a.createElement("br",null),r.a.createElement(J.a.Actions,null,this.state.requestSent?r.a.createElement(y.a,{loading:!0,primary:!0},"Loading"):r.a.createElement(y.a,{color:"blue",onClick:this.onSubmit},"INVITE")))))}}]),t}(n.Component),K=Object(s.b)((function(e){return{channels:e.channels,user:e.user}}),{loadChannels:L})($),Q=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:"POSTS"},a.handleItemClick=function(e,t){var n=t.name;a.props.switchTab(n),a.setState({activeItem:n})},a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{style:{position:"relative",height:"6%"},size:"large",pointing:!0},r.a.createElement(z.a.Item,{header:!0},"TEAM-UP"),r.a.createElement(z.a.Item,{name:"POSTS",active:"POSTS"===this.state.activeItem,onClick:this.handleItemClick}),r.a.createElement(z.a.Item,{name:"TOP5",active:"TOP5"===this.state.activeItem,onClick:this.handleItemClick}),r.a.createElement(z.a.Menu,{position:"right"},r.a.createElement(z.a.Item,{name:"INVITES",active:"INVITES"===this.state.activeItem,onClick:this.handleItemClick}),r.a.createElement(z.a.Item,null,r.a.createElement(Z,null)),r.a.createElement(z.a.Item,null,r.a.createElement(K,null))))}}]),t}(n.Component),ee=Object(s.b)(null,{switchTab:function(e){return{type:"SWITCH_TAB",payload:e}}})(Q),te=a(522),ae=a(523),ne=a(281),re=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},a.logout=function(){sessionStorage.clear(),a.props.logoutUser()},a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(te.a,{style:{height:"10%"},clearing:!0},r.a.createElement(ae.a,{as:"h2",floated:"left"},r.a.createElement(ne.a,{style:{height:"100%"},circular:!0,src:"https://react.semantic-ui.com/images/avatar/large/patrick.png"}),this.props.username),r.a.createElement(C.a,{to:"/"},r.a.createElement(y.a,{floated:"right",color:"black",onClick:this.logout},"Logout")))}}]),t}(r.a.Component),oe=Object(s.b)(null,{logoutUser:function(){return{type:"LOGOUT"}}})(re),ce=a(524),se=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={activeItem:""},a.handleItemClick=function(e,t){var n=t.name;a.setState({activeItem:n})},a.componentDidMount=Object(_.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.loadChannels(a.props.user.username);case 2:a.props.channels&&a.props.channels.length&&a.setState({activeItem:a.props.channels[0].name});case 3:case"end":return e.stop()}}),e)}))),a.channelList=function(e){return r.a.createElement(z.a.Item,{name:e.name,key:e._id,active:a.state.activeItem===e.name,onClick:function(t,n){a.handleItemClick(t,n),a.props.switchChannel(e)}})},a.render=function(){return a.props.channels?r.a.createElement(z.a,{text:!0,vertical:!0,stackable:!0},r.a.createElement(z.a.Item,{header:!0},"CHANNELS"),a.props.channels.map((function(e){return a.channelList(e)}))):r.a.createElement(B.a,{active:!0,inline:!0})},a}return Object(E.a)(t,e),t}(r.a.Component),le=Object(s.b)((function(e){return{user:e.user,channels:e.channels}}),{loadChannels:L,switchChannel:function(e){return{type:"SWITCH_CHANNEL",payload:e}}})(se),ie=a(278),ue=a.n(ie),pe=window.location.protocol+"//"+window.location.hostname+":3001",me=ue()("localhost"===window.location.hostname?pe:"https://kb512-team-up-api.herokuapp.com"),he={position:"relative",width:"100%",height:"70%",resize:"none"},de=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={content:"",tags:[],error:!1},a.handleChange=function(e,t){var n=t.name,r=t.value;a.setState(Object(u.a)({},n,"content"===n?r.replace(/\s\s+/g," "):r))},a.validate=function(){return a.state.content.length<2?(a.setState({error:"Invalid Content"}),!1):(a.setState({error:!1}),!0)},a.onSubmit=function(){a.validate()&&(me.emit("new_post",{username:a.props.user.username,tags:a.state.tags,content:a.state.content,channel_id:a.props.activeChannel._id}),a.setState({content:"",tags:[],error:!1}))},a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return this.props.activeChannel._id?r.a.createElement(te.a,{style:{position:"relative",height:"20%",marginTop:"0",top:"0",bottom:"0",background:"#989898"}},r.a.createElement(X.a,{name:"tags",placeholder:"Tags",style:{position:"relative",marginBottom:"0.3%"},multiple:!0,selection:!0,value:this.state.tags,options:this.props.activeChannel.tags.map((function(e){return{key:e,text:e,value:e}})),onChange:this.handleChange}),r.a.createElement(y.a,{color:"green",floated:"right",onClick:this.onSubmit},"POST"),r.a.createElement("br",null),r.a.createElement(W.a,{name:"content",placeholder:this.state.error?"Enter some text!":"Post Content",style:this.state.error?h.a.assign(he,{border:"4px solid red"}):he,value:this.state.content,onChange:this.handleChange})):r.a.createElement(r.a.Fragment,null,"Loading..")}}]),t}(n.Component),ge=Object(s.b)((function(e){return{activeChannel:e.activeChannel,user:e.user}}))(de),fe=a(515),ve=a(279),Ee=a.n(ve),be=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={activeChannel:!1},a.componentDidMount=function(){me.on("new_post_braodcast",(function(e){a.props.updatePosts(e),a.scrollToBottom()}));var e=document.getElementById("chatContainer");e.onscroll=function(){0===e.scrollTop&&me.emit("fetch_old_posts",{channel_id:a.props.activeChannel._id,page:a.props.page},a.props.loadPosts)}},a.componentDidUpdate=function(e){e.page===a.props.page&&a.scrollToBottom()},a.scrollToBottom=function(){var e=document.getElementById("chatContainer");e.scrollHeight&&(e.scrollTop=e.scrollHeight)},a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(te.a,{id:"chatContainer",style:{position:"relative",overflowY:"scroll",scrollbehaviour:"smooth",height:"70%",marginBottom:"0",background:"#D0D0D0"}},this.props.posts.map((function(e,t){return Oe(e,t)})))}}]),t}(n.Component);be.getDerivedStateFromProps=function(e,t){return e.activeChannel&&e.activeChannel._id!==t.activeChannel._id?(me.emit("join_channel_room",e.activeChannel._id,e.loadPosts),{activeChannel:e.activeChannel,page:1}):t};var Oe=function(e,t){return r.a.createElement(te.a,{key:t},r.a.createElement(fe.a.User,null,r.a.createElement("b",{style:{marginRight:"1%",fontSize:"1.1rem"}},e.username)),r.a.createElement("span",{style:{color:"#bfbfbf",fontSize:"0.85rem"}},Ee()(e.created,"x").format("h:mm A, D-MMM-YYYY")),r.a.createElement("span",{style:{float:"right"}},e.tags.map((function(e){return r.a.createElement(F.a,{color:"orange",key:e},e)}))),r.a.createElement(fe.a.Extra,{text:!0},e.content))},Ce=Object(s.b)((function(e){return{activeChannel:e.activeChannel,posts:e.posts,user:e.user,page:e.page}}),{updatePosts:function(e){return{type:"NEW_POST",payload:e}},loadPosts:function(e){return{type:"LOAD_USER_POSTS",payload:e}}})(be),ye=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},a.componentDidMount=function(){a.props.loadChannels(a.props.user.username)},a.render=function(){return a.props.channels.length?r.a.createElement(ce.a,{style:{position:"relative",height:"100%"},stackable:!0},r.a.createElement(ce.a.Row,{style:{position:"relative",height:"100%",paddingBottom:"0",display:"flex"},stretched:!0},r.a.createElement(ce.a.Column,{style:{position:"relative",overflowX:"auto",overflowY:"scroll",width:"auto",height:"100%"}},r.a.createElement(le,null)),r.a.createElement("br",null),r.a.createElement(ce.a.Column,{style:{position:"relative",flexGrow:"100",height:"100%"}},r.a.createElement(Ce,null),r.a.createElement(ge,null)))):r.a.createElement(r.a.Fragment,null,"NO CHANNEL SUBSCRIBED")},a}return Object(E.a)(t,e),Object(O.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return t}}]),t}(r.a.Component),we=Object(s.b)((function(e){return{channels:e.channels,user:e.user}}),{loadChannels:L})(ye),je=a(517),Se=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){a.props.loadTop5(a.props.name)},a.createList=function(e){return r.a.createElement(je.a,{style:{textAlign:"center"},basic:"very",celled:!0,collapsing:!0},r.a.createElement(je.a.Header,null,r.a.createElement(je.a.Row,null,r.a.createElement(je.a.HeaderCell,null,a.props.name.toUpperCase()),r.a.createElement(je.a.HeaderCell,null,a.units(a.props.name).toUpperCase()))),r.a.createElement(je.a.Body,null,e.map((function(e){return r.a.createElement(je.a.Row,{key:"channels"===a.props.name?e.name:e._id},r.a.createElement(je.a.Cell,null,"channels"===a.props.name?e.name:e._id),r.a.createElement(je.a.Cell,null,"tags"===a.props.name?e.channels.length:e.count))}))))},a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"units",value:function(e){switch(e){case"channels":case"users":return"Posts";case"regions":return"Users";case"tags":return"Channels";default:return""}}},{key:"render",value:function(){return this.props[this.props.name]?r.a.createElement(te.a,null,r.a.createElement(ae.a,{as:"h2",floated:"left"},"Top ",this.props.name),r.a.createElement("br",null),this.createList(this.props[this.props.name])):r.a.createElement(M.a,{active:!0,inverted:!0},r.a.createElement(B.a,{content:"Loading"}))}}]),t}(r.a.Component),Te=Object(s.b)((function(e,t){var a=e.top5,n=t.name;return Object(u.a)({},n,a[n])}),{loadTop5:function(e){return function(){var t=Object(_.a)(T.a.mark((function t(a){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("/top5",{params:{entity:e}});case 2:n=t.sent.data,a({type:"FETCH_TOP5",payload:{entity:e,data:n}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Se),_e=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a.Group,{horizontal:!0},r.a.createElement(Te,{name:"users"}),r.a.createElement(Te,{name:"channels"})),r.a.createElement(te.a.Group,{horizontal:!0},r.a.createElement(Te,{name:"regions"}),r.a.createElement(Te,{name:"tags"})))},a}return Object(E.a)(t,e),t}(r.a.Component),Ie=a(518),ke=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},a.componentDidMount=Object(_.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.loadInvites(a.props.user.username);case 2:case"end":return e.stop()}}),e)}))),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.invites.length?this.props.invites.map((function(t){return r.a.createElement(Ie.a,{key:t._id},r.a.createElement(Ie.a.Content,null,r.a.createElement(Ie.a.Header,null,t.channel_name),r.a.createElement(Ie.a.Description,null,r.a.createElement("strong",null,t.sent_by)," invited you to this channel.")),r.a.createElement(Ie.a.Content,{extra:!0},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement(y.a,{onClick:Object(_.a)(T.a.mark((function a(){return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.respondToInvite({_id:t._id});case 2:return a.next=4,e.props.loadInvites(e.props.user.username);case 4:case"end":return a.stop()}}),a)}))),basic:!0,color:"green"},"Accept"),r.a.createElement(y.a,{onClick:Object(_.a)(T.a.mark((function a(){return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.respondToInvite({_id:t._id},!1);case 2:return a.next=4,e.props.loadInvites(e.props.user.username);case 4:case"end":return a.stop()}}),a)}))),basic:!0,color:"red"},"Reject"))))})):"No Invites")}}]),t}(r.a.Component),Ae=Object(s.b)((function(e){return{user:e.user,invites:e.invites}}),{respondToInvite:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(Object(_.a)(T.a.mark((function a(){return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=5;break}return a.next=3,N.put("/invitations",e);case 3:a.next=7;break;case 5:return a.next=7,N.delete("/invitations",{params:e});case 7:return a.abrupt("return",null);case 8:case"end":return a.stop()}}),a)}))))},loadInvites:function(e){return function(){var t=Object(_.a)(T.a.mark((function t(a){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("/invitations",{params:{username:e}});case 2:n=t.sent.data,a({type:"LOAD_USER_INVITES",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ke),xe=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).selectTab=function(){switch(a.props.tab){case"TOP5":return r.a.createElement(_e,null);case"INVITES":return r.a.createElement(Ae,null);default:return r.a.createElement(we,null)}},a.render=function(){return r.a.createElement(te.a,{style:{position:"relative",height:"80%"}},a.selectTab())},a}return Object(E.a)(t,e),t}(r.a.Component),Ne=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},a.componentDidMount=function(){setTimeout((function(){JSON.parse(sessionStorage.getItem("user"))||P.push("/login")}),800)},a.render=function(){return a.props.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{username:a.props.user.username}),r.a.createElement(ee,null),r.a.createElement(xe,{tab:a.props.activeTab})):r.a.createElement(M.a,{active:!0,inverted:!0},r.a.createElement(B.a,{content:"Loading"}))},a}return Object(E.a)(t,e),t}(r.a.Component),Le=Object(s.b)((function(e){return{activeTab:e.activeTab,user:e.user}}))(Ne),Ue=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:w}),r.a.createElement(b.a,{exact:!0,path:"/login",component:D}),r.a.createElement(b.a,{exact:!0,path:"/register",component:H}),r.a.createElement(b.a,{exact:!0,path:"/user",component:Le}))},a}return Object(E.a)(t,e),t}(r.a.Component),Pe=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",{style:{padding:"2%",position:"absolute",width:"100vw",height:"100vh"}},r.a.createElement(b.b,{history:P},r.a.createElement(Ue,null)))},a}return Object(E.a)(t,e),t}(r.a.Component),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,De=Object(l.e)(d,Re(Object(l.a)(i.a)));c.a.render(r.a.createElement(s.a,{store:De},r.a.createElement(Pe,null)),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.27b86275.chunk.js.map