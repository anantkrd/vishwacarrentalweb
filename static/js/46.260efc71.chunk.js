(this.webpackJsonpVishvajeet=this.webpackJsonpVishvajeet||[]).push([[46,53],{408:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a(52),n=a(67),o=a(42),i=a(41),c=a(43),l=a(44),d=a(1),h=a(49),j=a(93),m=a(389),b=a(53),u=a(48),p=a(9),g=a(2),O=a.n(g),x=a(60),f=a(434),v=a(3),w=a(54),y=a.n(w),N=a(0),S=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i,c;return Object(o.a)(this,a),(c=t.call(this,e)).state=(i={agents:[],agentId:"",userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",show:!1,showAgent:!1},Object(n.a)(i,"error",""),Object(n.a)(i,"agentAmont",0),Object(n.a)(i,"bookingId",0),Object(n.a)(i,"pageId",1),Object(n.a)(i,"rowCount",0),Object(n.a)(i,"totalPage",0),i),c.setAgentAmont=function(e){c.setState({agentAmont:e.target.value})},c.setShow=function(e){c.setState({agentAmont:0});var t=c.state.show;c.setState({show:!t})},c.setShowAgentPopup=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.setState({agentId:0}),a=c.state.showAgent,console.log("object.bookingId:"+t.orderId),c.setState({bookingId:t.orderId}),c.setState({showAgent:!a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.setShowAgent=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.setState({agentId:0}),a=c.state.showAgent,c.setState({showAgent:!a});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.assignAgent=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a,r,n,o,i,l;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),r={Authorization:"Bearer ".concat(a)},n="&agentId="+c.state.agentId+"&bookingId="+c.state.bookingId,e.next=5,fetch("https://vishwacarrental.com:8080/admin/assign_agent?"+n,{headers:r});case 5:return o=e.sent,e.next=8,o.json();case 8:200==(i=e.sent).code?(l=c.state.showAgent,c.setState({showAgent:!l}),c.getBooking(c.state.userId,1)):(200==i.code&&c.setState({error:"Session expired"}),c.setState({error:"some internal error please try later"})),c.setState({isLoading:!1});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.handlePageChange=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t,a){var r,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c.state.userId,n=a,c.setState({pageId:n}),c.getBooking(r,n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),c.setAgentId=function(e){c.setState({agentId:e})},c.cancelBooking=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a,r,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("object:"+JSON.stringify(t)),e.prev=1,c.setState({cabId:0}),a=localStorage.getItem("token"),c.state.pageNo+1,r={Authorization:"Bearer ".concat(a)},n="&userId="+c.state.userId+"&bookingId="+t._id,e.next=9,y.a.delete("https://vishwacarrental.com:8080/admin/cancel_booking?"+n,{headers:r});case 9:200==e.sent.data.code&&c.getBooking(c.state.userId,1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),c.setState({isOtpSent:"N"}),c.setState({error:e.t0.response.data.message});case 17:c.setState({isLoading:!1});case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.setState({pageId:1}),this.getBooking(e,1),this.getAgents(e,1)}},{key:"getAgents",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(t,a){var r,n,o,i,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),n={Authorization:"Bearer ".concat(r)},o="&userId="+t+"&pageId="+a,e.next=5,fetch("https://vishwacarrental.com:8080/admin/get_agent?"+o,{headers:n});case 5:return i=e.sent,e.next=8,i.json();case 8:200==(c=e.sent).code?this.setState({agents:c.data}):(200==c.code&&this.setState({error:"Session expired"}),this.setState({error:"some internal error please try later"})),this.setState({isLoading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getBooking",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a,r,n,o,i,c,l=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:1,r=localStorage.getItem("token"),n={Authorization:"Bearer ".concat(r)},o="&userId="+t+"&pageId="+a,e.next=6,fetch("https://vishwacarrental.com:8080/admin/get_booking_admin?"+o,{headers:n});case 6:return i=e.sent,e.next=9,i.json();case 9:c=e.sent,this.setState({totalPage:c.totalPage}),this.setState({rowCount:c.rowCount}),200==c.code?this.setState({item:c.data}):(200==c.code&&this.setState({error:"Session expired"}),this.setState({error:"some internal error please try later"})),this.setState({isLoading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"showPopup",value:function(e){this.setState({agentAmont:0}),this.setState({error:""});var t=this.state.show;this.setState({bookingId:e.orderId}),this.setState({show:!t})}},{key:"addAgentPrice",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a,r,n,o,i,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this.state.bookingId+"booking Data:"+t),!(this.state.agentAmont<1)){e.next=5;break}this.setState({error:"amount must be >0"}),e.next=17;break;case 5:return this.setState({error:""}),a=localStorage.getItem("token"),r={Authorization:"Bearer ".concat(a)},n="&amount="+this.state.agentAmont+"&bookingId="+this.state.bookingId,e.next=11,fetch("https://vishwacarrental.com:8080/admin/update_agent_amount?"+n,{headers:r});case 11:return o=e.sent,e.next=14,o.json();case 14:200==(i=e.sent).code?(c=this.state.show,this.setState({show:!c}),this.getBooking(this.state.userId,1)):(200==i.code&&this.setState({error:"Session expired"}),this.setState({error:"some internal error please try later"})),this.setState({isLoading:!1});case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsx)(u.default,{}),Object(N.jsx)("div",{children:Object(N.jsx)(O.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(N.jsx)("div",{children:Object(N.jsx)("section",{id:"pricing",className:"pricing",children:Object(N.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(h.a.Title,{className:"bgColor",style:{fontSize:16,padding:10,color:"white",backgroundColor:"gray"},children:"Bookings "}),Object(N.jsxs)(h.a.Body,{children:[Object(N.jsx)("div",{style:{color:"red"},children:Object(N.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"BookingId"}),Object(N.jsx)("th",{children:"Name "}),Object(N.jsx)("th",{children:"Pickup"}),Object(N.jsx)("th",{children:"Destination"}),Object(N.jsx)("th",{children:"PickupDate"}),Object(N.jsx)("th",{children:"ReturnDate"}),Object(N.jsx)("th",{children:"Amount"}),Object(N.jsx)("th",{children:"Paid"}),Object(N.jsx)("th",{children:"Agent Amount"})]})}),Object(N.jsx)("tbody",{children:this.state.item.map((function(t,a){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(p.b,{variant:"success",style:{padding:"4px",fontSize:12,textAlign:"center"},to:{pathname:"/BookingDetails/".concat(t.orderId)},children:t.orderId})}),Object(N.jsxs)("td",{children:[t.userName,"(",t.mobileNo,")"]}),Object(N.jsx)("td",{children:t.pickup}),Object(N.jsx)("td",{children:t.destination}),Object(N.jsx)("td",{children:void 0!=t.pickupDate?new Intl.DateTimeFormat("en-GB",{month:"long",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(new Date(t.pickupDate)):null}),Object(N.jsx)("td",{children:void 0!=t.returnDate?new Intl.DateTimeFormat("en-GB",{month:"long",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(new Date(t.returnDate)):null}),Object(N.jsx)("td",{children:t.finalAmount}),Object(N.jsx)("td",{children:t.paid}),Object(N.jsxs)("td",{children:[t.agentPrice>0?Object(N.jsxs)("div",{className:"row",style:{color:"red",fontSize:18},children:[t.agentPrice,Object(N.jsx)("div",{className:"col-12",style:{paddingTop:5},children:Object(N.jsxs)(m.a,{title:"Update Amount",style:{float:"right"},size:"sm",variant:"primary",type:"button",onClick:e.showPopup.bind(e,t),children:[Object(N.jsx)("i",{className:"fa fa-inr iconStyle"})," \xa0",Object(N.jsx)("i",{className:"fa fa-edit iconStyle","aria-hidden":"true"})]})})]}):Object(N.jsx)("div",{className:"row",style:{paddingTop:5},children:Object(N.jsx)("div",{className:"col-12",children:Object(N.jsxs)(m.a,{title:"Add Amount",style:{float:"right"},size:"sm",variant:"primary",type:"button",onClick:e.showPopup.bind(e,t),children:[Object(N.jsx)("i",{className:"fa fa-inr iconStyle"}),"\xa0",Object(N.jsx)("i",{className:"fa fa-plus iconStyle","aria-hidden":"true"})]})})}),t.agentId<=0?Object(N.jsx)("div",{className:"row",style:{color:"red",fontSize:14},children:Object(N.jsx)("div",{className:"col-12",style:{paddingTop:5},children:Object(N.jsx)(m.a,{title:"Add Agent",style:{float:"right"},size:"sm",variant:"primary",type:"button",onClick:e.setShowAgentPopup.bind(e,t),children:Object(N.jsx)("i",{className:"fa fa-user-plus iconStyle"})})})}):Object(N.jsx)("div",{className:"row",style:{paddingTop:5},children:Object(N.jsx)("div",{className:"col-12",children:Object(N.jsx)(m.a,{title:"Remove Agent",style:{float:"right"},size:"sm",variant:"primary",type:"button",onClick:e.setShowAgentPopup.bind(e,t),children:Object(N.jsx)("i",{className:"fa fa-remove iconStyle","aria-hidden":"true"})})})}),Object(N.jsx)("div",{className:"col-12",style:{paddingTop:5},children:Object(N.jsx)(m.a,{title:"Update Amount",style:{float:"right"},size:"sm",variant:"primary",type:"button",onClick:e.cancelBooking.bind(e,t),children:Object(N.jsx)("i",{className:"fa fa-remove iconStyle"})})})]})]},a+1)}))})]})}),Object(N.jsx)("div",{children:Object(N.jsx)(f.a,{className:"paging",count:this.state.totalPage,page:this.state.pageId,defaultPage:this.state.pageId,siblingCount:2,boundaryCount:2,color:"primary",showFirstButton:!0,showLastButton:!0,onChange:this.handlePageChange.bind()})})]})]})})})})})}),Object(N.jsxs)(x.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(N.jsx)(x.a.Header,{closeButton:!0,children:Object(N.jsx)(x.a.Title,{id:"example-custom-modal-styling-title",children:"Add Amount"})}),Object(N.jsx)(x.a.Body,{children:Object(N.jsx)("section",{id:"pricing",className:"pricing",children:Object(N.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(h.a.Body,{children:[Object(N.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"col-12",children:Object(N.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(N.jsxs)(b.a.Label,{children:["Enter agent amount: ",this.state.bookingId]}),Object(N.jsx)(b.a.Control,{name:"mobileNo",value:this.state.agentAmont,type:"text",placeholder:"Mobile No",onChange:this.setAgentAmont})]})}),Object(N.jsx)("div",{className:"col-12",children:Object(N.jsx)(b.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(N.jsx)(m.a,{variant:"primary",type:"button",onClick:this.addAgentPrice.bind(this),children:"Save"})})})]})]})})})})})})})]}),Object(N.jsxs)(x.a,{show:this.state.showAgent,onHide:this.setShowAgent.bind(this.state.showAgent),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(N.jsx)(x.a.Header,{closeButton:!0,children:Object(N.jsx)(x.a.Title,{id:"example-custom-modal-styling-title",children:"Select Agent"})}),Object(N.jsx)(x.a.Body,{children:Object(N.jsx)("section",{id:"pricing",className:"pricing",children:Object(N.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(h.a.Body,{children:[Object(N.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"col-12",children:Object(N.jsxs)(b.a.Group,{controlId:"formBasicSelect",children:[Object(N.jsx)(b.a.Label,{children:"Select Norm Type"}),Object(N.jsxs)(b.a.Control,{as:"select",value:this.state.agentId,onChange:function(t){e.setAgentId(t.target.value)},children:[Object(N.jsx)("option",{value:"0",children:"Select Agent"}),this.state.agents.map((function(e,t){return Object(N.jsx)("option",{value:e._id,children:e.firstName})}))]})]})}),Object(N.jsx)("div",{className:"col-12",children:Object(N.jsx)(b.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(N.jsx)(m.a,{variant:"primary",type:"button",onClick:this.assignAgent.bind(this),children:"Assign"})})})]})]})})})})})})})]})]})}}]),a}(d.Component);t.default=Object(v.f)(S)},46:function(e,t,a){(function(t){e.exports=t.config={apiUrl:"http://localhost:8080/",paymentKey:"rzp_test_8KHr7ine3uj7uk",bucketName:"vishwacarrentdata",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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",cdnUrl:"https://d394hnp8jvz6yg.cloudfront.net/"}}).call(this,a(16))},48:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a(52),n=a(42),o=a(41),i=a(43),c=a(44),l=a(1),d=a(60),h=a(49),j=a(389),m=(a(46),a(54),a(53)),b=a(3),u=a(59),p=a.n(u),g=a(0),O=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={uid:"",userId:"",firstName:"",lastName:"",mobileNo:"",email:"",userType:"",show:!1},o.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:"",timeOutInterval:0},o.startTimer=function(){console.log("setTimeout Called");setTimeout((function(){console.log("setTimeout Called=====");var e=localStorage.getItem("lastInteractionTime"),t=p.a.duration(p()().diff(p()(e))),a=o.state.timeOutInterval?o.state.timeOutInterval:6e4;console.log("lastInteractionTime:="+e),t._milliseconds<a&&o.startTimer()}),o.state.timeOutInterval?o.state.timeOutInterval:6e4)},o.setShow=function(e){o.setState({isOtpSent:"N"}),o.setState({mobileNo:""}),o.setState({otp:""});var t=o.state.show;console.log("val=="+t+"***"),o.setState({show:!t})},o.setMobile=function(e){console.log("===="+e.target.value),o.setState({mobileNo:e.target.value})},o.setOtp=function(e){o.setState({otp:e.target.value})},o.setUserPassword=function(e){o.setState({userPassword:e.target.value})},o.loginWithPassword=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,n,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setState({error:""}),t="&mobileNo="+o.state.mobileNo+"&userPassword="+o.state.userPassword,a={"Content-Type":"application/json"},"https://vishwacarrental.com:8080/v1/user_login?mobileNo="+o.state.mobileNo+"&userPassword="+o.state.userPassword,e.next=6,fetch("https://vishwacarrental.com:8080/user/user_login?"+t,{headers:a});case 6:return r=e.sent,console.log("+++response=="+JSON.stringify(r)),e.next=10,r.json();case 10:n=e.sent,console.log("Data="+JSON.stringify(n)),200==n.code?(i=n.data[0],console.log("userObj=="+JSON.stringify(i)+"==id="+i._id),localStorage.setItem("userId",i._id),localStorage.setItem("firstName",i.firstName),localStorage.setItem("lastName",i.lastName),localStorage.setItem("mobileNo",i.mobileNo),localStorage.setItem("email",i.email),localStorage.setItem("userType",i.userType),localStorage.setItem("token",i.token),"agent"==i.userType?window.location.href="agent/Home":"admin"==i.userType?window.location.href="admin/Home":"driver"==i.userType?window.location.href="driver/Home":window.location.href="/Home"):(o.setState({isOtpSent:"N"}),o.setState({error:"user not found"}));case 13:case"end":return e.stop()}}),e)}))),o.setState({isOtpSent:"N"}),localStorage.setItem("lastInteractionTime",p()()),console.log("userType Constructor=="+localStorage.getItem("userType")),o.startTimer(),o}return Object(o.a)(a,[{key:"super",value:function(){this.setShow.bind(this)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userId");if(console.log("UserId=="+localStorage.getItem("userId")),console.log("userType=="+localStorage.getItem("userType")),e>0||null!=e){var t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName"),s=localStorage.getItem("mobileNo"),r=localStorage.getItem("email"),n=localStorage.getItem("userType");localStorage.getItem("token");this.setState({userId:e}),this.setState({firstName:t}),this.setState({lastName:a}),this.setState({mobileNo:s}),this.setState({email:r}),this.setState({userType:n})}}},{key:"sendOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo,a={"Content-Type":"application/json"},{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Origin":"*"}},e.next=6,fetch("https://vishwacarrental.com:8080/user/send_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:200==e.sent.code?this.setState({isOtpSent:"Y"}):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,n,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,a={"Content-Type":"application/json"},"https://c77b3hr0m0.execute-api.ap-south-1.amazonaws.com/v1/prayag-verifyOtp?mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,e.next=6,fetch("https://vishwacarrental.com:8080/user/verify_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,console.log("Data="+JSON.stringify(n)),200==n.code?(o=n.data[0],console.log("userObj=="+JSON.stringify(o)+"==id="+o._id),localStorage.setItem("userId",o._id),localStorage.setItem("firstName",o.firstName),localStorage.setItem("lastName",o.lastName),localStorage.setItem("mobileNo",o.mobileNo),localStorage.setItem("email",o.email),localStorage.setItem("userType",o.userType),localStorage.setItem("token",o.token),"agent"==o.userType?window.location.href="agent/Home":"admin"==o.userType?window.location.href="admin/Home":"driver"==o.userType?window.location.href="driver/Home":window.location.href="/Home"):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){console.log("here===sign out"),localStorage.setItem("userId",""),localStorage.setItem("firstName",""),localStorage.setItem("lastName",""),localStorage.setItem("mobileNo",""),localStorage.setItem("email",""),localStorage.setItem("userType",""),localStorage.setItem("token",""),this.setState({userId:""}),this.setState({firstName:""}),this.setState({lastName:""}),this.setState({mobileNo:""}),this.setState({email:""}),this.setState({userType:""}),console.log("here===sign out"),window.location.href="/Home"}},{key:"getMenus",value:function(){return console.log("this.state.userType=="+this.state.userType),"admin"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/admin/Home",children:"Home"})}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AddCar",children:"My Cars"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/addDriver",children:"My Driver"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/addCabs",children:"Add Cabs"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/addSurge",children:"Surge"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/SpecialPrices",children:"Special Prices"})]})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Booking"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/agentWaiting",children:"Waiting for Agent"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/driverWaiting",children:"Waiting for Driver"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/ready",children:"Ready"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/completed",children:"Completed"})]})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/Booking",children:"Bookings"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/SearchLog",children:"Search Log"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AllCars",children:"Cars"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AllDrivers",children:"Drivers"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AllAgents",children:"Agents"})]})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"user"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/Home",children:"Home"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/History",children:"History"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/Profile",children:"Profile"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"agent"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/agent/Home",children:"Home"})}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Bookings"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/myPendingBookings",children:"Pending"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/myCompletedBookings",children:"Completed"})]})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/profile",children:"Profile"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/AddCar",children:"My Cars"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/addDriver",children:"My Driver"})]})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"driver"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/driver/Home",children:"Home"})}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(g.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(g.jsx)("a",{className:"dropdown-item",href:"/driver/profile",children:"Profile"})})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/driver/booking-report",children:"Booking Report"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/driver/bankDetails",children:"Payment Report"})]})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"operator"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"active",children:Object(g.jsx)("a",{href:"/Home",children:"Home"})}),Object(g.jsx)("li",{className:"active",children:Object(g.jsx)("a",{href:"/History",children:"History"})}),Object(g.jsxs)("li",{class:"nav-item dropdown",children:[Object(g.jsx)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(g.jsx)("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(g.jsx)("a",{class:"dropdown-item",href:"#",children:"My Assign"})})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/Home",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"/Login",children:Object(g.jsx)("span",{children:"Sign In"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/agent/Login",children:"Partner"})})]})}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"row",style:{backgroundColor:"#0e0d0d"},children:[Object(g.jsx)("div",{className:"header-detail col-md-6",children:Object(g.jsx)("ul",{children:Object(g.jsxs)("li",{children:[Object(g.jsx)("a",{href:"https://api.whatsapp.com/send?phone=7710054367",children:Object(g.jsx)("img",{src:"https://d394hnp8jvz6yg.cloudfront.net/cabs/1678541979073.png",style:{height:30,width:30},alt:"whatsapp"})}),Object(g.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"})," ",Object(g.jsx)("a",{href:"tel:+91 7710054367",children:"+91 7710054367"}),Object(g.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"})," ",Object(g.jsx)("a",{href:"tel:+91 9136617676",children:"+91 9136617676"})]})})}),Object(g.jsx)("div",{className:"header-detail-r col-md-6",children:Object(g.jsx)("ul",{children:Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"}),Object(g.jsx)("a",{href:"mailto:vishwacarrental@gmail.com ",children:"vishwacarrental@gmail.com "})]})})})]}),Object(g.jsxs)("div",{className:"row d-flex align-items-center bgColor",children:[Object(g.jsx)("h1",{className:"logo mr-auto",children:Object(g.jsx)("a",{href:"/Home",children:Object(g.jsx)("img",{src:"/logo_cab.png",style:{width:100,padding:5,borderRadius:"12px"}})})}),Object(g.jsx)("nav",{className:"nav-menu d-none d-lg-block",children:this.getMenus()}),Object(g.jsxs)(d.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(g.jsx)(d.a.Header,{closeButton:!0,children:Object(g.jsx)(d.a.Title,{id:"example-custom-modal-styling-title",children:"Login"})}),Object(g.jsx)(d.a.Body,{children:Object(g.jsx)("section",{id:"pricing",className:"pricing",children:Object(g.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(g.jsx)(h.a,{children:Object(g.jsxs)(h.a.Body,{children:[Object(g.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"col-12",children:Object(g.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(m.a.Label,{children:"Mobile No"}),Object(g.jsx)(m.a.Control,{name:"mobileNo",value:this.state.mobileNo,type:"text",placeholder:"Mobile No",onChange:this.setMobile})]})}),Object(g.jsx)("div",{className:"col-12",children:Object(g.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(m.a.Label,{children:"Password"}),Object(g.jsx)(m.a.Control,{name:"userPassword",value:this.state.userPassword,type:"password",placeholder:"Paasword/Mobile No",onChange:this.setUserPassword})]})}),Object(g.jsx)("div",{className:"col-12",children:Object(g.jsx)(m.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(g.jsx)(j.a,{variant:"primary",type:"button",onClick:this.loginWithPassword.bind(this),children:"Login"})})})]})]})})})})})})})]})]})]})}}]),a}(l.Component);t.default=Object(b.f)(O)}}]);
//# sourceMappingURL=46.260efc71.chunk.js.map