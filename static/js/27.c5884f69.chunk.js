(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[27,4,8,51],{418:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a(52),i=a(42),c=a(41),o=a(43),n=a(44),l=a(1),d=a(49),j=a(96),h=a(48),b=(a(55),a(9)),m=(a(75),a(2)),u=a.n(m),O=(a(54),a(3)),x=a(436),p=a(0),g=function(e){Object(o.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageId:1,payment_orderId:"",carModelName:"",carType:"",carNo:"",rcBook:""},c.handlePageChange=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t,a){var r,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c.state.userId,i=a,c.setState({pageId:i}),c.getAgents(r,i);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.getAgents(e,1)}},{key:"showPopup",value:function(e){this.prePayment(e)}},{key:"getAgents",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(t,a){var r,i,c,o,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),i={Authorization:"Bearer ".concat(r)},c="&userId="+t+"&pageId="+a,e.next=5,fetch("https://vishwacarrental.com:8080/admin/get_agent?"+c,{headers:i});case 5:return o=e.sent,e.next=8,o.json();case 8:200==(n=e.sent).code?(this.setState({totalPage:n.totalPage}),this.setState({rowCount:n.rowCount}),this.setState({item:n.data})):console.log("errorr"),this.setState({isLoading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.default,{}),Object(p.jsx)("div",{children:Object(p.jsx)(u.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(p.jsx)("div",{children:Object(p.jsx)("section",{id:"pricing",className:"pricing",children:Object(p.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(d.a.Title,{className:"bgColor",style:{fontSize:16,fontWeight:"bold",borderRadius:"5px 5px 0px 0px",padding:10,color:"white"},children:"All Vendores "}),Object(p.jsxs)(d.a.Body,{children:[Object(p.jsx)("div",{style:{color:"red"},children:Object(p.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Agent Name"}),Object(p.jsx)("th",{children:"mobileNo "}),Object(p.jsx)("th",{children:"Email"}),Object(p.jsx)("th",{children:"Comapany"}),Object(p.jsx)("th",{children:"Account Status"}),Object(p.jsx)("th",{children:"Status"})]})}),Object(p.jsx)("tbody",{children:this.state.item.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(p.jsx)("td",{children:e.mobileNo}),Object(p.jsx)("td",{children:e.email}),Object(p.jsx)("td",{children:e.companyName}),Object(p.jsx)("td",{children:e.accountStatus}),Object(p.jsx)("td",{children:Object(p.jsx)(b.b,{variant:"success",style:{padding:"4px",fontSize:12,textAlign:"center"},to:{pathname:"/admin/ViewAgent/".concat(e._id)},children:"View"})})]},t)}))})]})}),Object(p.jsx)("div",{children:Object(p.jsx)(x.a,{className:"paging",count:this.state.totalPage,page:this.state.pageId,defaultPage:this.state.pageId,siblingCount:2,boundaryCount:2,color:"primary",showFirstButton:!0,showLastButton:!0,shape:"rounded",onChange:this.handlePageChange.bind()})})]})]})})})})})})]})}}]),a}(l.Component);t.default=Object(O.f)(g)},48:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a(52),i=a(42),c=a(41),o=a(43),n=a(44),l=a(1),d=a(62),j=a(49),h=a(389),b=(a(50),a(54),a(53)),m=a(3),u=a(60),O=a.n(u),x=a(65),p=a(0),g=function(e){Object(o.a)(a,e);var t=Object(n.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={uid:"",userId:"",firstName:"",lastName:"",mobileNo:"",email:"",userType:"",show:!1,pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"},c.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:"",timeOutInterval:0},c.startTimer=function(){console.log("setTimeout Called");setTimeout((function(){console.log("setTimeout Called=====");var e=localStorage.getItem("lastInteractionTime"),t=O.a.duration(O()().diff(O()(e))),a=c.state.timeOutInterval?c.state.timeOutInterval:6e4;console.log("lastInteractionTime:="+e),t._milliseconds<a&&c.startTimer()}),c.state.timeOutInterval?c.state.timeOutInterval:6e4)},c.setShow=function(e){c.setState({isOtpSent:"N"}),c.setState({mobileNo:""}),c.setState({otp:""});var t=c.state.show;console.log("val=="+t+"***"),c.setState({show:!t})},c.setMobile=function(e){console.log("===="+e.target.value),c.setState({mobileNo:e.target.value})},c.setOtp=function(e){c.setState({otp:e.target.value})},c.setUserPassword=function(e){c.setState({userPassword:e.target.value})},c.loginWithPassword=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,i,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.setState({error:""}),t="&mobileNo="+c.state.mobileNo+"&userPassword="+c.state.userPassword,a={"Content-Type":"application/json"},"https://vishwacarrental.com:8080/v1/user_login?mobileNo="+c.state.mobileNo+"&userPassword="+c.state.userPassword,e.next=6,fetch("https://vishwacarrental.com:8080/user/user_login?"+t,{headers:a});case 6:return r=e.sent,console.log("+++response=="+JSON.stringify(r)),e.next=10,r.json();case 10:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(o=i.data[0],console.log("userObj=="+JSON.stringify(o)+"==id="+o._id),localStorage.setItem("userId",o._id),localStorage.setItem("firstName",o.firstName),localStorage.setItem("lastName",o.lastName),localStorage.setItem("mobileNo",o.mobileNo),localStorage.setItem("email",o.email),localStorage.setItem("userType",o.userType),localStorage.setItem("token",o.token),"agent"==o.userType?window.location.href="agent/Home":"admin"==o.userType?window.location.href="admin/Home":"driver"==o.userType?window.location.href="driver/Home":window.location.href="/Home"):(c.setState({isOtpSent:"N"}),c.setState({error:"user not found"}));case 13:case"end":return e.stop()}}),e)}))),c.setState({isOtpSent:"N"}),localStorage.setItem("lastInteractionTime",O()()),console.log("userType Constructor=="+localStorage.getItem("userType")),c.startTimer(),c}return Object(c.a)(a,[{key:"super",value:function(){this.setShow.bind(this)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userId");if(console.log("UserId=="+localStorage.getItem("userId")),console.log("userType=="+localStorage.getItem("userType")),e>0||null!=e){var t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName"),s=localStorage.getItem("mobileNo"),r=localStorage.getItem("email"),i=localStorage.getItem("userType");localStorage.getItem("token");this.setState({userId:e}),this.setState({firstName:t}),this.setState({lastName:a}),this.setState({mobileNo:s}),this.setState({email:r}),this.setState({userType:i})}console.log("Title Header==="+JSON.stringify(this.props.match.params.title));var c=this.props.match.params.title;console.log("pagetitle:"+c),void 0!=c&&(c=c.replaceAll("-"," ")),this.setState({pageTitle:c})}},{key:"sendOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo,a={"Content-Type":"application/json"},{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Origin":"*"}},e.next=6,fetch("https://vishwacarrental.com:8080/user/send_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:200==e.sent.code?this.setState({isOtpSent:"Y"}):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,i,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,a={"Content-Type":"application/json"},"https://c77b3hr0m0.execute-api.ap-south-1.amazonaws.com/v1/prayag-verifyOtp?mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,e.next=6,fetch("https://vishwacarrental.com:8080/user/verify_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(c=i.data[0],console.log("userObj=="+JSON.stringify(c)+"==id="+c._id),localStorage.setItem("userId",c._id),localStorage.setItem("firstName",c.firstName),localStorage.setItem("lastName",c.lastName),localStorage.setItem("mobileNo",c.mobileNo),localStorage.setItem("email",c.email),localStorage.setItem("userType",c.userType),localStorage.setItem("token",c.token),"agent"==c.userType?window.location.href="agent/Home":"admin"==c.userType?window.location.href="admin/Home":"driver"==c.userType?window.location.href="driver/Home":window.location.href="/Home"):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){console.log("here===sign out"),localStorage.setItem("userId",""),localStorage.setItem("firstName",""),localStorage.setItem("lastName",""),localStorage.setItem("mobileNo",""),localStorage.setItem("email",""),localStorage.setItem("userType",""),localStorage.setItem("token",""),this.setState({userId:""}),this.setState({firstName:""}),this.setState({lastName:""}),this.setState({mobileNo:""}),this.setState({email:""}),this.setState({userType:""}),console.log("here===sign out"),window.location.href="/Home"}},{key:"getMenus",value:function(){return console.log("this.state.userType=="+this.state.userType),"admin"==this.state.userType?Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/admin/Home/Admin Home",children:"Home"})}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(p.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/AddCar/Add Cars",children:"My Cars"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/addDriver/Add Drives",children:"My Driver"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/addCabs/Add Cabs",children:"Add Cabs"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/addSurge/Add Surge Rates",children:"Surge"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/SpecialPrices/Special Price",children:"Special Prices"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/AddBookings/Add Bookings",children:"Add Bookings"})]})]}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Booking"}),Object(p.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/agentWaiting/Waiting for Agent",children:"Waiting for Agent"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/driverWaiting/Waiting for Driver",children:"Waiting for Driver"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/ready/Ready To Go Bookings",children:"Ready"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/completed/Completed Bookings",children:"Completed"})]})]}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(p.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/Booking/Booking Report",children:"Bookings"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/SearchLog/Search Log Report",children:"Search Log"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/AllCars/All Cars",children:"Cars"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/AllDrivers/All Drivers",children:"Drivers"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/admin/AllAgents/All Agents",children:"Agents"})]})]}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"user"==this.state.userType?Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/Home/My Home",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/History/Booking History",children:"History"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/Profile/Profile",children:"Profile"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"agent"==this.state.userType?Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/agent/Home/My Home",children:"Home"})}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Bookings"}),Object(p.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(p.jsx)("a",{className:"dropdown-item",href:"/agent/myPendingBookings/Bookings Confirmed",children:"Pending"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/agent/myCompletedBookings/Completed Bookings",children:"Completed"})]})]}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(p.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(p.jsx)("a",{className:"dropdown-item",href:"/agent/profile/Profile",children:"Profile"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/agent/AddCar/Add My Car",children:"My Cars"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/agent/addDriver/Add My Driver",children:"My Driver"})]})]}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"driver"==this.state.userType?Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/driver/Home/My Bookings",children:"Home"})}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(p.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(p.jsx)("a",{className:"dropdown-item",href:"/driver/profile/Profile",children:"Profile"})})]}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(p.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(p.jsx)("a",{className:"dropdown-item",href:"/driver/booking-report/My Booking Report",children:"Booking Report"}),Object(p.jsx)("a",{className:"dropdown-item",href:"/driver/bankDetails/My Payment Report",children:"Payment Report"})]})]}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"operator"==this.state.userType?Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"active",children:Object(p.jsx)("a",{href:"/Home",children:"Home"})}),Object(p.jsx)("li",{className:"active",children:Object(p.jsx)("a",{href:"/History",children:"History"})}),Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(p.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(p.jsx)("a",{className:"dropdown-item",href:"#",children:"My Assign"})})]}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/Home/",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/Login/Login",children:Object(p.jsx)("span",{children:"Sign In"})})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"/agent/Login/Partner Login",children:"Partner"})})]})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(x.a,{children:Object(p.jsx)("title",{children:this.state.pageTitle?this.state.pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"})}),Object(p.jsx)("div",{className:"row",style:{backgroundColor:"#0e0d0d"},children:Object(p.jsx)("div",{className:"header-detail row",style:{width:"100%",marginLeft:30},children:Object(p.jsxs)("div",{className:"row",style:{width:"100%",paddingTop:10,paddingBottom:10},children:[Object(p.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(p.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=7710054367",children:[Object(p.jsx)("i",{className:"fa fa-whatsapp top-icon","aria-hidden":"true",children:" "})," What's App"]})}),Object(p.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(p.jsxs)("a",{href:"tel:+91 7710054367",children:[Object(p.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 7710054367"]})}),Object(p.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(p.jsxs)("a",{href:"tel:+91 9136617676",children:[" ",Object(p.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 9136617676"]})}),Object(p.jsxs)("div",{className:"col-md-3 col-sm-12",children:[Object(p.jsxs)("a",{href:"mailto:vishwacarrental@gmail.com ",title:"Email Us",children:[" ",Object(p.jsx)("i",{className:"fa fa-envelope top-icon","aria-hidden":"true"})," "]}),Object(p.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=100095395351364",title:"Facebook",children:[" ",Object(p.jsx)("i",{className:"fa fa-facebook-official top-icon","aria-hidden":"true"})," "]}),Object(p.jsxs)("a",{href:"https://www.youtube.com/channel/UCatEK6ZpzY6xi-mn0xSwFEQ",title:"YouTube",children:[" ",Object(p.jsx)("i",{className:"fa fa-youtube-square top-icon","aria-hidden":"true"})," "]}),Object(p.jsxs)("a",{href:"https://www.instagram.com/vishwacarrental",title:"Instagram",children:[" ",Object(p.jsx)("i",{className:"fa fa-instagram top-icon","aria-hidden":"true"})," "]}),Object(p.jsxs)("a",{href:"https://www.linkedin.com/onboarding/start/follow-recommendations/new",title:"LinkedIn",children:[" ",Object(p.jsx)("i",{className:"fa fa-linkedin-square top-icon","aria-hidden":"true"})," "]})]})]})})}),Object(p.jsxs)("div",{className:"row d-flex align-items-center bgColor",children:[Object(p.jsx)("h1",{className:"logo mr-auto",children:Object(p.jsx)("a",{href:"/Home/",children:Object(p.jsx)("img",{src:"/logo_cab.png",alt:"Logo",style:{width:100,padding:5,borderRadius:"12px"}})})}),Object(p.jsx)("nav",{className:"nav-menu d-none d-lg-block",children:this.getMenus()}),Object(p.jsxs)(d.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(p.jsx)(d.a.Header,{closeButton:!0,children:Object(p.jsx)(d.a.Title,{id:"example-custom-modal-styling-title",children:"Login"})}),Object(p.jsx)(d.a.Body,{children:Object(p.jsx)("section",{id:"pricing",className:"pricing",children:Object(p.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(j.a.Body,{children:[Object(p.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(b.a.Label,{children:"Mobile No"}),Object(p.jsx)(b.a.Control,{name:"mobileNo",value:this.state.mobileNo,type:"text",placeholder:"Mobile No",onChange:this.setMobile})]})}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(b.a.Label,{children:"Password"}),Object(p.jsx)(b.a.Control,{name:"userPassword",value:this.state.userPassword,type:"password",placeholder:"Paasword/Mobile No",onChange:this.setUserPassword})]})}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)(b.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(p.jsx)(h.a,{variant:"primary",type:"button",onClick:this.loginWithPassword.bind(this),children:"Login"})})})]})]})})})})})})})]})]})]})}}]),a}(l.Component);t.default=Object(m.f)(g)},50:function(e,t,a){(function(t){e.exports=t.config={apiUrl:"http://localhost:8080/",paymentKey:"rzp_test_8KHr7ine3uj7uk",bucketName:"vishwacarrentdata",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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",cdnUrl:"https://d394hnp8jvz6yg.cloudfront.net/"}}).call(this,a(16))},55:function(e,t,a){"use strict";var s=a(42),r=a(41),i=a(43),c=a(44),o=a(1),n=a(3),l=a(0),d=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("footer",{id:"footer",children:[Object(l.jsx)("div",{className:"footer-top",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg-3 col-md-6 footer-contact",children:[Object(l.jsx)("h3",{children:"Address"}),Object(l.jsxs)("p",{children:["Vishwa Car Rental",Object(l.jsx)("br",{}),"Head Office: D 1 prakash sadan Mohili Village sakinaka ",Object(l.jsx)("br",{}),"Mumbai 400072 ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Branch Office: Hex Blox CHS LTD, Plot No:269 Setore: 10 Kharghar ",Object(l.jsx)("br",{}),"Navi Mumbai 410210 ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Branch Office 2: A Wing Flat No. 402 Kubera Sankul Riddhi Building adital ",Object(l.jsx)("br",{}),"Pune 411028 ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Mobile:"})," 7710054367,9136617676",Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Email :"})," vishwacarrental@gmail.com",Object(l.jsx)("br",{})]})]}),Object(l.jsxs)("div",{className:"col-lg-2 col-md-6 footer-links",children:[Object(l.jsx)("h4",{children:"Useful Links"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/Home/Vishwa Car Rental Indias Chepest Car Rental Service",children:"Home"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/ContactUs/Contact Us",children:"Contact Us"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/Servises/Our Services",children:"Services"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/privacyPolicy/Our Policy",children:"Pravacy Policy"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/Aboutus/About Us",children:"About Us"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/termCondition/Our Terms And Conditions",children:"Term & Condition"})]})]})]}),Object(l.jsxs)("div",{className:"col-lg-3 col-md-6 footer-links",children:[Object(l.jsx)("h4",{children:"DAILY SERVICE"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-To-Mumbai",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mumbai"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-To-Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Shirdi"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-To-Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Alibaugh"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumabi-to-Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumabi to Alibaugh"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Shirdi"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Murud-Janjira",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Murud-Janjira"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Mahableshwar",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mahableshwar"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Nashik",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Nashik"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Mahableshwar",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Mahableshwar"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Kolhapur",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Kolhapur"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/pune-to-Kolhapur",style:{color:"rgba(255, 255, 255, 0.7)"},children:"pune to Kolhapur"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Goa"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-To-Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune To Goa"})]})]})]}),Object(l.jsxs)("div",{className:"col-lg-3 col-md-6 footer-links",children:[Object(l.jsx)("h4",{children:"FIXED CAR RENTAL PACKAGE"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Mumbai-cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mumbai cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-Airport-to-Shirdi-cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune Airport to Shirdi cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Alibaugh-cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Alibaugh cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Ahmednagar-cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Ahmednagar cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Aurangabad-cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Aurangabad cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Murud-Janjira-cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Murud-Janjira cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-panchgani-cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to panchgani cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-best-car-service",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai best car service"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-taxi-service",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai taxi service"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-Cabs",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai Cabs"})]})]})]}),Object(l.jsxs)("div",{className:"col-lg-3 col-md-6 footer-links",children:[Object(l.jsx)("h4",{children:"TOURIST DESTINATIONS"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Mumbai",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mumbai"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Shirdi"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Alibaugh"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumabi-to-Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumabi to Alibaugh"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Shirdi"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Murud-Janjira",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Murud-Janjira"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-to-panchgani cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to panchgani cab"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Mahableshwar",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Mahableshwar"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Mumbai-to-Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Goa"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(l.jsx)("a",{href:"/Home/Pune-To-Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune To Goa"})]})]})]})]})})}),Object(l.jsxs)("div",{className:"container d-md-flex py-4",children:[Object(l.jsxs)("div",{className:"mr-md-auto text-center text-md-left",children:[Object(l.jsxs)("div",{className:"copyright",children:["\xa9 Copyright ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"VishwaJeet Cab Services"})}),". All Rights Reserved"]}),Object(l.jsxs)("div",{className:"credits",children:["Designed by ",Object(l.jsx)("a",{href:"#",children:"Ellipse Software Technology"})]})]}),Object(l.jsxs)("div",{className:"social-links text-center text-md-right pt-3 pt-md-0",children:[Object(l.jsx)("a",{href:"#",className:"twitter",children:Object(l.jsx)("i",{className:"bx bxl-twitter"})}),Object(l.jsx)("a",{href:"#",className:"facebook",children:Object(l.jsx)("i",{className:"bx bxl-facebook"})}),Object(l.jsx)("a",{href:"#",className:"instagram",children:Object(l.jsx)("i",{className:"bx bxl-instagram"})}),Object(l.jsx)("a",{href:"#",className:"google-plus",children:Object(l.jsx)("i",{className:"bx bxl-skype"})}),Object(l.jsx)("a",{href:"#",className:"linkedin",children:Object(l.jsx)("i",{className:"bx bxl-linkedin"})})]})]})]})}}]),a}(o.Component);t.a=Object(n.f)(d)}}]);
//# sourceMappingURL=27.c5884f69.chunk.js.map