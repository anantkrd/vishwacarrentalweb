(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[43,51],{404:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a(52),o=a(42),i=a(41),n=a(43),l=a(44),c=a(1),d=a(49),h=a(96),m=a(48),j=a(9),p=a(2),u=a.n(p),b=a(3),g=a(436),O=a(0),f=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageId:1,rowCount:0,totalPage:0},i.handlePageChange=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t,a){var r,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=i.state.userId,o=a,i.setState({pageId:o}),i.getHistory(r,o);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),""!=e&&null!=e||(window.location.href="/Home"),this.getHistory(e,1)}},{key:"getHistory",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(t,a){var r,o,i,n,l;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),o={Authorization:"Bearer ".concat(r)},i="&userId="+t+"&pageId="+a,e.next=5,fetch("https://vishwacarrental.com:8080/user/get_user_booking?"+i,{headers:o});case 5:return n=e.sent,e.next=8,n.json();case 8:200==(l=e.sent).code?(this.setState({totalPage:l.totalPage}),this.setState({rowCount:l.rowCount}),this.setState({item:l.data})):this.setState({error:"some internal error please try later"}),this.setState({isLoading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m.default,{}),Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "}),Object(O.jsx)("section",{id:"pricing",className:"pricing",children:Object(O.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(d.a.Title,{className:"bgColor",style:{fontSize:16,padding:10,color:"white"},children:"Booking History "}),Object(O.jsxs)(d.a.Body,{children:[Object(O.jsx)("div",{style:{color:"red"},children:Object(O.jsxs)(h.a,{striped:!0,bordered:!0,responsive:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"BookingId"}),Object(O.jsx)("th",{children:"Pickup"}),Object(O.jsx)("th",{children:"Destination"}),Object(O.jsx)("th",{children:"PickupDate"}),Object(O.jsx)("th",{children:"ReturnDate"}),Object(O.jsx)("th",{children:"Amount"}),Object(O.jsx)("th",{children:"Paid"}),Object(O.jsx)("th",{children:"Status"})]})}),Object(O.jsx)("tbody",{children:this.state.item.map((function(e,t){return Object(O.jsxs)("tr",{children:[" ",Object(O.jsx)("td",{children:Object(O.jsx)(j.b,{variant:"success",style:{padding:"4px",fontSize:12,textAlign:"center"},to:{pathname:"/BookingDetails/".concat(e.orderId)},children:e.orderId})}),Object(O.jsx)("td",{children:e.pickup}),Object(O.jsx)("td",{children:e.destination}),Object(O.jsx)("td",{children:null!=e.pickupDate?new Intl.DateTimeFormat("en-GB",{month:"long",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(new Date(e.pickupDate)):null}),Object(O.jsx)("td",{children:null!=e.returnDate?new Intl.DateTimeFormat("en-GB",{month:"long",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(new Date(e.returnDate)):null}),Object(O.jsxs)("td",{children:[e.finalAmount," "]}),Object(O.jsxs)("td",{children:[e.paid," "]}),Object(O.jsxs)("td",{children:[e.status," "]})]},t+1)}))})]})}),Object(O.jsx)("div",{children:Object(O.jsx)(g.a,{className:"paging",count:this.state.totalPage,page:this.state.pageId,defaultPage:this.state.pageId,siblingCount:2,boundaryCount:2,color:"primary",showFirstButton:!0,showLastButton:!0,shape:"rounded",onChange:this.handlePageChange.bind()})})]})]})})})})})]})]})}}]),a}(c.Component);t.default=Object(b.f)(f)},48:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a(52),o=a(42),i=a(41),n=a(43),l=a(44),c=a(1),d=a(62),h=a(49),m=a(389),j=(a(50),a(54),a(53)),p=a(3),u=a(60),b=a.n(u),g=a(65),O=a(0),f=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={uid:"",userId:"",firstName:"",lastName:"",mobileNo:"",email:"",userType:"",show:!1,pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"},i.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:"",timeOutInterval:0},i.startTimer=function(){console.log("setTimeout Called");setTimeout((function(){console.log("setTimeout Called=====");var e=localStorage.getItem("lastInteractionTime"),t=b.a.duration(b()().diff(b()(e))),a=i.state.timeOutInterval?i.state.timeOutInterval:6e4;console.log("lastInteractionTime:="+e),t._milliseconds<a&&i.startTimer()}),i.state.timeOutInterval?i.state.timeOutInterval:6e4)},i.setShow=function(e){i.setState({isOtpSent:"N"}),i.setState({mobileNo:""}),i.setState({otp:""});var t=i.state.show;console.log("val=="+t+"***"),i.setState({show:!t})},i.setMobile=function(e){console.log("===="+e.target.value),i.setState({mobileNo:e.target.value})},i.setOtp=function(e){i.setState({otp:e.target.value})},i.setUserPassword=function(e){i.setState({userPassword:e.target.value})},i.loginWithPassword=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,o,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({error:""}),t="&mobileNo="+i.state.mobileNo+"&userPassword="+i.state.userPassword,a={"Content-Type":"application/json"},"https://vishwacarrental.com:8080/v1/user_login?mobileNo="+i.state.mobileNo+"&userPassword="+i.state.userPassword,e.next=6,fetch("https://vishwacarrental.com:8080/user/user_login?"+t,{headers:a});case 6:return r=e.sent,console.log("+++response=="+JSON.stringify(r)),e.next=10,r.json();case 10:o=e.sent,console.log("Data="+JSON.stringify(o)),200==o.code?(n=o.data[0],console.log("userObj=="+JSON.stringify(n)+"==id="+n._id),localStorage.setItem("userId",n._id),localStorage.setItem("firstName",n.firstName),localStorage.setItem("lastName",n.lastName),localStorage.setItem("mobileNo",n.mobileNo),localStorage.setItem("email",n.email),localStorage.setItem("userType",n.userType),localStorage.setItem("token",n.token),"agent"==n.userType?window.location.href="agent/Home":"admin"==n.userType?window.location.href="admin/Home":"driver"==n.userType?window.location.href="driver/Home":window.location.href="/Home"):(i.setState({isOtpSent:"N"}),i.setState({error:"user not found"}));case 13:case"end":return e.stop()}}),e)}))),i.setState({isOtpSent:"N"}),localStorage.setItem("lastInteractionTime",b()()),console.log("userType Constructor=="+localStorage.getItem("userType")),i.startTimer(),i}return Object(i.a)(a,[{key:"super",value:function(){this.setShow.bind(this)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userId");if(console.log("UserId=="+localStorage.getItem("userId")),console.log("userType=="+localStorage.getItem("userType")),e>0||null!=e){var t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName"),s=localStorage.getItem("mobileNo"),r=localStorage.getItem("email"),o=localStorage.getItem("userType");localStorage.getItem("token");this.setState({userId:e}),this.setState({firstName:t}),this.setState({lastName:a}),this.setState({mobileNo:s}),this.setState({email:r}),this.setState({userType:o})}console.log("Title Header==="+JSON.stringify(this.props.match.params.title)),this.setState({pageTitle:this.props.match.params.title})}},{key:"sendOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo,a={"Content-Type":"application/json"},{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Origin":"*"}},e.next=6,fetch("https://vishwacarrental.com:8080/user/send_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:200==e.sent.code?this.setState({isOtpSent:"Y"}):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,o,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,a={"Content-Type":"application/json"},"https://c77b3hr0m0.execute-api.ap-south-1.amazonaws.com/v1/prayag-verifyOtp?mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,e.next=6,fetch("https://vishwacarrental.com:8080/user/verify_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:o=e.sent,console.log("Data="+JSON.stringify(o)),200==o.code?(i=o.data[0],console.log("userObj=="+JSON.stringify(i)+"==id="+i._id),localStorage.setItem("userId",i._id),localStorage.setItem("firstName",i.firstName),localStorage.setItem("lastName",i.lastName),localStorage.setItem("mobileNo",i.mobileNo),localStorage.setItem("email",i.email),localStorage.setItem("userType",i.userType),localStorage.setItem("token",i.token),"agent"==i.userType?window.location.href="agent/Home":"admin"==i.userType?window.location.href="admin/Home":"driver"==i.userType?window.location.href="driver/Home":window.location.href="/Home"):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){console.log("here===sign out"),localStorage.setItem("userId",""),localStorage.setItem("firstName",""),localStorage.setItem("lastName",""),localStorage.setItem("mobileNo",""),localStorage.setItem("email",""),localStorage.setItem("userType",""),localStorage.setItem("token",""),this.setState({userId:""}),this.setState({firstName:""}),this.setState({lastName:""}),this.setState({mobileNo:""}),this.setState({email:""}),this.setState({userType:""}),console.log("here===sign out"),window.location.href="/Home"}},{key:"getMenus",value:function(){return console.log("this.state.userType=="+this.state.userType),"admin"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/admin/Home/Admin Home",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AddCar/Add Cars",children:"My Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addDriver/Add Drives",children:"My Driver"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addCabs/Add Cabs",children:"Add Cabs"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addSurge/Add Surge Rates",children:"Surge"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/SpecialPrices/Special Price",children:"Special Prices"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AddBookings/Add Bookings",children:"Add Bookings"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Booking"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/agentWaiting/Waiting for Agent",children:"Waiting for Agent"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/driverWaiting/Waiting for Driver",children:"Waiting for Driver"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/ready/Ready To Go Bookings",children:"Ready"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/completed/Completed Bookings",children:"Completed"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/Booking/Booking Report",children:"Bookings"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/SearchLog/Search Log Report",children:"Search Log"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllCars/All Cars",children:"Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllDrivers/All Drivers",children:"Drivers"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllAgents/All Agents",children:"Agents"})]})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"user"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Home/My Home",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/History/Booking History",children:"History"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Profile/Profile",children:"Profile"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"agent"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/agent/Home/My Home",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Bookings"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/myPendingBookings/Bookings Confirmed",children:"Pending"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/myCompletedBookings/Completed Bookings",children:"Completed"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/profile/Profile",children:"Profile"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/AddCar/Add My Car",children:"My Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/addDriver/Add My Driver",children:"My Driver"})]})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"driver"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/driver/Home/My Bookings",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/profile/Profile",children:"Profile"})})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/booking-report/My Booking Report",children:"Booking Report"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/bankDetails/My Payment Report",children:"Payment Report"})]})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"operator"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"active",children:Object(O.jsx)("a",{href:"/Home",children:"Home"})}),Object(O.jsx)("li",{className:"active",children:Object(O.jsx)("a",{href:"/History",children:"History"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",children:"My Assign"})})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Home/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"/Login/Login",children:Object(O.jsx)("span",{children:"Sign In"})})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/agent/Login/Partner Login",children:"Partner"})})]})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(g.a,{children:Object(O.jsx)("title",{children:this.state.pageTitle?this.state.pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"})}),Object(O.jsx)("div",{className:"row",style:{backgroundColor:"#0e0d0d"},children:Object(O.jsx)("div",{className:"header-detail row",style:{width:"100%",marginLeft:30},children:Object(O.jsxs)("div",{className:"row",style:{width:"100%",paddingTop:10,paddingBottom:10},children:[Object(O.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(O.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=7710054367",children:[Object(O.jsx)("i",{className:"fa fa-whatsapp top-icon","aria-hidden":"true",children:" "})," What's App"]})}),Object(O.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(O.jsxs)("a",{href:"tel:+91 7710054367",children:[Object(O.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 7710054367"]})}),Object(O.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(O.jsxs)("a",{href:"tel:+91 9136617676",children:[" ",Object(O.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 9136617676"]})}),Object(O.jsxs)("div",{className:"col-md-3 col-sm-12",children:[Object(O.jsxs)("a",{href:"mailto:vishwacarrental@gmail.com ",title:"Email Us",children:[" ",Object(O.jsx)("i",{className:"fa fa-envelope top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=100095395351364",title:"Facebook",children:[" ",Object(O.jsx)("i",{className:"fa fa-facebook-official top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.youtube.com/channel/UCatEK6ZpzY6xi-mn0xSwFEQ",title:"YouTube",children:[" ",Object(O.jsx)("i",{className:"fa fa-youtube-square top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.instagram.com/vishwacarrental",title:"Instagram",children:[" ",Object(O.jsx)("i",{className:"fa fa-instagram top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.linkedin.com/onboarding/start/follow-recommendations/new",title:"LinkedIn",children:[" ",Object(O.jsx)("i",{className:"fa fa-linkedin-square top-icon","aria-hidden":"true"})," "]})]})]})})}),Object(O.jsxs)("div",{className:"row d-flex align-items-center bgColor",children:[Object(O.jsx)("h1",{className:"logo mr-auto",children:Object(O.jsx)("a",{href:"/Home/",children:Object(O.jsx)("img",{src:"/logo_cab.png",style:{width:100,padding:5,borderRadius:"12px"}})})}),Object(O.jsx)("nav",{className:"nav-menu d-none d-lg-block",children:this.getMenus()}),Object(O.jsxs)(d.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(O.jsx)(d.a.Header,{closeButton:!0,children:Object(O.jsx)(d.a.Title,{id:"example-custom-modal-styling-title",children:"Login"})}),Object(O.jsx)(d.a.Body,{children:Object(O.jsx)("section",{id:"pricing",className:"pricing",children:Object(O.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(O.jsx)(h.a,{children:Object(O.jsxs)(h.a.Body,{children:[Object(O.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"col-12",children:Object(O.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(j.a.Label,{children:"Mobile No"}),Object(O.jsx)(j.a.Control,{name:"mobileNo",value:this.state.mobileNo,type:"text",placeholder:"Mobile No",onChange:this.setMobile})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(j.a.Label,{children:"Password"}),Object(O.jsx)(j.a.Control,{name:"userPassword",value:this.state.userPassword,type:"password",placeholder:"Paasword/Mobile No",onChange:this.setUserPassword})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsx)(j.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(O.jsx)(m.a,{variant:"primary",type:"button",onClick:this.loginWithPassword.bind(this),children:"Login"})})})]})]})})})})})})})]})]})]})}}]),a}(c.Component);t.default=Object(p.f)(f)},50:function(e,t,a){(function(t){e.exports=t.config={apiUrl:"http://localhost:8080/",paymentKey:"rzp_test_8KHr7ine3uj7uk",bucketName:"vishwacarrentdata",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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",cdnUrl:"https://d394hnp8jvz6yg.cloudfront.net/"}}).call(this,a(16))}}]);
//# sourceMappingURL=43.6cff720d.chunk.js.map