(this.webpackJsonpVishvajeet=this.webpackJsonpVishvajeet||[]).push([[31,52],{43:function(e,t,a){(function(t){e.exports=t.config={apiUrl:"http://localhost:8080/",paymentKey:"rzp_test_8KHr7ine3uj7uk",bucketName:"vishwacarrentdata",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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",cdnUrl:"https://d394hnp8jvz6yg.cloudfront.net/"}}).call(this,a(15))},446:function(e,t,a){"use strict";a.r(t);var s=a(47),r=a(48),i=a(38),n=a(36),o=a(39),c=a(40),l=a(1),d=a(46),j=a(81),h=a(45),m=(a(53),a(8)),b=(a(77),a(33)),p=a.n(b),u=(a(52),a(2)),O=a(0),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageNo:0,payment_orderId:""},s}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.getBooking(e)}},{key:"showPopup",value:function(e){this.prePayment(e)}},{key:"getBooking",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a,r,i,n,o,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),r=this.state.pageNo+1,i={Authorization:"Bearer ".concat(a)},n="&userId="+t+"&pageId="+r,e.next=6,fetch("https://vishwacarrental.com:8080/driver/get_payment_report?"+n,{headers:i});case 6:return o=e.sent,e.next=9,o.json();case 9:200==(c=e.sent).code?this.setState({item:c.data}):(console.log("errorr"),this.setState({error:"some internal error please try later"})),this.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(h.default,{}),Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(O.jsx)("div",{children:Object(O.jsx)("section",{id:"pricing",className:"pricing",children:Object(O.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(d.a.Title,{style:{fontSize:16,padding:10,color:"white",backgroundColor:"gray"},children:"Booking History "}),Object(O.jsx)(d.a.Body,{children:Object(O.jsx)("div",{style:{color:"red"},children:Object(O.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"BookingId"}),Object(O.jsx)("th",{children:"Name "}),Object(O.jsx)("th",{children:"Pickup"}),Object(O.jsx)("th",{children:"Destination"}),Object(O.jsx)("th",{children:"PickupDate"}),Object(O.jsx)("th",{children:"ReturnDate"}),Object(O.jsx)("th",{children:"Amount"}),Object(O.jsx)("th",{children:"Status"})]})}),Object(O.jsx)("tbody",{children:this.state.item.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(m.b,{variant:"success",style:{padding:"4px",fontSize:12,textAlign:"center"},to:{pathname:"/driver/trip-details/".concat(e.orderId)},children:e.orderId})}),Object(O.jsx)("td",{children:e.userName}),Object(O.jsx)("td",{children:e.pickup}),Object(O.jsx)("td",{children:e.destination}),Object(O.jsx)("td",{children:void 0!=e.pickupDate?new Intl.DateTimeFormat("en-GB",{month:"long",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(new Date(e.pickupDate)):null}),Object(O.jsx)("td",{children:void 0!=e.returnDate?new Intl.DateTimeFormat("en-GB",{month:"long",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(new Date(e.returnDate)):null}),Object(O.jsx)("td",{children:e.finalAmount}),Object(O.jsx)("td",{children:e.status})]})}))})]})})})]})})})})})})]})}}]),a}(l.Component);t.default=Object(u.f)(x)},45:function(e,t,a){"use strict";a.r(t);var s=a(47),r=a(48),i=a(38),n=a(36),o=a(39),c=a(40),l=a(1),d=a(60),j=a(46),h=a(409),m=(a(43),a(52),a(49)),b=a(2),p=a(59),u=a.n(p),O=a(0),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={uid:"",userId:"",firstName:"",lastName:"",mobileNo:"",email:"",userType:"",show:!1},n.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:"",timeOutInterval:0},n.startTimer=function(){console.log("setTimeout Called");setTimeout((function(){console.log("setTimeout Called=====");var e=localStorage.getItem("lastInteractionTime"),t=u.a.duration(u()().diff(u()(e))),a=n.state.timeOutInterval?n.state.timeOutInterval:6e4;console.log("lastInteractionTime:="+e),t._milliseconds<a&&n.startTimer()}),n.state.timeOutInterval?n.state.timeOutInterval:6e4)},n.setShow=function(e){n.setState({isOtpSent:"N"}),n.setState({mobileNo:""}),n.setState({otp:""});var t=n.state.show;console.log("val=="+t+"***"),n.setState({show:!t})},n.setMobile=function(e){console.log("===="+e.target.value),n.setState({mobileNo:e.target.value})},n.setOtp=function(e){n.setState({otp:e.target.value})},n.setUserPassword=function(e){n.setState({userPassword:e.target.value})},n.loginWithPassword=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,i,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({error:""}),t="&mobileNo="+n.state.mobileNo+"&userPassword="+n.state.userPassword,a={"Content-Type":"application/json"},"https://vishwacarrental.com:8080/v1/user_login?mobileNo="+n.state.mobileNo+"&userPassword="+n.state.userPassword,e.next=6,fetch("https://vishwacarrental.com:8080/user/user_login?"+t,{headers:a});case 6:return r=e.sent,console.log("+++response=="+JSON.stringify(r)),e.next=10,r.json();case 10:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(o=i.data[0],console.log("userObj=="+JSON.stringify(o)+"==id="+o._id),localStorage.setItem("userId",o._id),localStorage.setItem("firstName",o.firstName),localStorage.setItem("lastName",o.lastName),localStorage.setItem("mobileNo",o.mobileNo),localStorage.setItem("email",o.email),localStorage.setItem("userType",o.userType),localStorage.setItem("token",o.token),"agent"==o.userType?window.location.href="agent/Home":"admin"==o.userType?window.location.href="admin/Home":"driver"==o.userType?window.location.href="driver/Home":window.location.href="/Home"):(n.setState({isOtpSent:"N"}),n.setState({error:"user not found"}));case 13:case"end":return e.stop()}}),e)}))),n.signOut=function(){console.log("here===sign out"),localStorage.setItem("userId",""),localStorage.setItem("firstName",""),localStorage.setItem("lastName",""),localStorage.setItem("mobileNo",""),localStorage.setItem("email",""),localStorage.setItem("userType",""),localStorage.setItem("token",""),n.setState({userId:""}),n.setState({firstName:""}),n.setState({lastName:""}),n.setState({mobileNo:""}),n.setState({email:""}),n.setState({userType:""}),window.location.href="/Home"},n.setState({isOtpSent:"N"}),localStorage.setItem("lastInteractionTime",u()()),console.log("userType Constructor=="+localStorage.getItem("userType")),n.startTimer(),n}return Object(n.a)(a,[{key:"super",value:function(){this.setShow.bind(this)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userId");if(console.log("UserId=="+localStorage.getItem("userId")),console.log("userType=="+localStorage.getItem("userType")),e>0||null!=e){var t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName"),s=localStorage.getItem("mobileNo"),r=localStorage.getItem("email"),i=localStorage.getItem("userType");localStorage.getItem("token");this.setState({userId:e}),this.setState({firstName:t}),this.setState({lastName:a}),this.setState({mobileNo:s}),this.setState({email:r}),this.setState({userType:i})}}},{key:"sendOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo,a={"Content-Type":"application/json"},{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Origin":"*"}},e.next=6,fetch("https://vishwacarrental.com:8080/user/send_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:200==e.sent.code?this.setState({isOtpSent:"Y"}):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,i,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,a={"Content-Type":"application/json"},"https://c77b3hr0m0.execute-api.ap-south-1.amazonaws.com/v1/prayag-verifyOtp?mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,e.next=6,fetch("https://vishwacarrental.com:8080/user/verify_otp?"+t,{headers:a});case 6:return r=e.sent,e.next=9,r.json();case 9:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(n=i.data[0],console.log("userObj=="+JSON.stringify(n)+"==id="+n._id),localStorage.setItem("userId",n._id),localStorage.setItem("firstName",n.firstName),localStorage.setItem("lastName",n.lastName),localStorage.setItem("mobileNo",n.mobileNo),localStorage.setItem("email",n.email),localStorage.setItem("userType",n.userType),localStorage.setItem("token",n.token),"agent"==n.userType?window.location.href="agent/Home":"admin"==n.userType?window.location.href="admin/Home":"driver"==n.userType?window.location.href="driver/Home":window.location.href="/Home"):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMenus",value:function(){return console.log("this.state.userType=="+this.state.userType),"admin"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/admin/Home",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AddCar",children:"My Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addDriver",children:"My Driver"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addCabs",children:"Add Cabs"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addSurge",children:"Surge"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/SpecialPrices",children:"Special Prices"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Booking"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/agentWaiting",children:"Waiting for Agent"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/driverWaiting",children:"Waiting for Driver"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/ready",children:"Ready"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/completed",children:"Completed"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/Booking",children:"Bookings"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/SearchLog",children:"Search Log"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllCars",children:"Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllDrivers",children:"Drivers"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllAgents",children:"Agents"})]})]}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",onClick:this.signOut,children:Object(O.jsx)("span",{children:"Sign Out"})})})]}):"user"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Home",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/History",children:"History"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Profile",children:"Profile"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",onClick:this.signOut.bind(this),children:Object(O.jsx)("span",{children:"Sign Out"})})})]}):"agent"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/agent/Home",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Bookings"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/myPendingBookings",children:"Pending"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/myCompletedBookings",children:"Completed"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/profile",children:"Profile"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/AddCar",children:"My Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/addDriver",children:"My Driver"})]})]}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",onClick:this.signOut.bind(this),children:Object(O.jsx)("span",{children:"Sign Out"})})})]}):"driver"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/driver/Home",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/profile",children:"Profile"})})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/booking-report",children:"Booking Report"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/bankDetails",children:"Payment Report"})]})]}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",onClick:this.signOut.bind(this),children:Object(O.jsx)("span",{children:"Sign Out"})})})]}):"operator"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"active",children:Object(O.jsx)("a",{href:"/Home",children:"Home"})}),Object(O.jsx)("li",{className:"active",children:Object(O.jsx)("a",{href:"/History",children:"History"})}),Object(O.jsxs)("li",{class:"nav-item dropdown",children:[Object(O.jsx)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsx)("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(O.jsx)("a",{class:"dropdown-item",href:"#",children:"My Assign"})})]}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",onClick:this.signOut.bind(this),children:Object(O.jsx)("span",{children:"Sign Out"})})})]}):Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"/Login",children:Object(O.jsx)("span",{children:"Sign In"})})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/agent/Login",children:"Partner"})})]})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"row",style:{backgroundColor:"#0e0d0d"},children:[Object(O.jsx)("div",{className:"header-detail col-md-6",children:Object(O.jsx)("ul",{children:Object(O.jsxs)("li",{children:[Object(O.jsx)("a",{href:"https://api.whatsapp.com/send?phone=9987973223",children:Object(O.jsx)("img",{src:"https://d394hnp8jvz6yg.cloudfront.net/cabs/1678541979073.png",style:{height:30,width:30},alt:"whatsapp"})}),Object(O.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"})," ",Object(O.jsx)("a",{href:"tel:+91 7710054367",children:"+91 7710054367"}),Object(O.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"})," ",Object(O.jsx)("a",{href:"tel:+91 9136617676",children:"+91 9136617676"})]})})}),Object(O.jsx)("div",{className:"header-detail-r col-md-6",children:Object(O.jsx)("ul",{children:Object(O.jsxs)("li",{children:[Object(O.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"}),Object(O.jsx)("a",{href:"mailto:vishwacarrental@gmail.com ",children:"vishwacarrental@gmail.com "})]})})})]}),Object(O.jsxs)("div",{className:"row d-flex align-items-center bgColor",children:[Object(O.jsx)("h1",{className:"logo mr-auto",children:Object(O.jsx)("a",{href:"/Home",children:Object(O.jsx)("img",{src:"/logo_cab.png",style:{width:100,padding:5,borderRadius:"12px"}})})}),Object(O.jsx)("nav",{className:"nav-menu d-none d-lg-block",children:this.getMenus()}),Object(O.jsxs)(d.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(O.jsx)(d.a.Header,{closeButton:!0,children:Object(O.jsx)(d.a.Title,{id:"example-custom-modal-styling-title",children:"Login"})}),Object(O.jsx)(d.a.Body,{children:Object(O.jsx)("section",{id:"pricing",className:"pricing",children:Object(O.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(O.jsx)(j.a,{children:Object(O.jsxs)(j.a.Body,{children:[Object(O.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"col-12",children:Object(O.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(m.a.Label,{children:"Mobile No"}),Object(O.jsx)(m.a.Control,{name:"mobileNo",value:this.state.mobileNo,type:"text",placeholder:"Mobile No",onChange:this.setMobile})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(m.a.Label,{children:"Password"}),Object(O.jsx)(m.a.Control,{name:"userPassword",value:this.state.userPassword,type:"password",placeholder:"Paasword/Mobile No",onChange:this.setUserPassword})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsx)(m.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(O.jsx)(h.a,{variant:"primary",type:"button",onClick:this.loginWithPassword.bind(this),children:"Login"})})})]})]})})})})})})})]})]})]})}}]),a}(l.Component);t.default=Object(b.f)(x)},53:function(e,t,a){"use strict";var s=a(38),r=a(36),i=a(39),n=a(40),o=a(1),c=a(2),l=a(0),d=function(e){Object(i.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("footer",{id:"footer",children:[Object(l.jsx)("div",{className:"footer-top",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://wa.me/9987973223?text=Hey Buddy, I just want to chill with your car and make my tour easy. ",target:"_blank",title:"Connect with us on WhatsApp",children:Object(l.jsx)("img",{variant:"top",src:"https://d394hnp8jvz6yg.cloudfront.net/cabs/1678541979073.png",alt:"WhatsApp",style:{height:60,right:0,position:"fixed",bottom:30}})})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg-3 col-md-6 footer-contact",children:[Object(l.jsx)("h3",{children:"Address"}),Object(l.jsxs)("p",{children:["VishwaJeet Cab Services",Object(l.jsx)("br",{}),"Head Office: D 1 prakash sadan Mohili Village sakinaka ",Object(l.jsx)("br",{}),"Mumbai 400072 ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Mobile:"})," 7710054367,9136617676",Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Email :"})," vishwacarrental@gmail.com",Object(l.jsx)("br",{})]})]}),Object(l.jsxs)("div",{className:"col-lg-2 col-md-6 footer-links",children:[Object(l.jsx)("h4",{children:"Useful Links"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/Home",children:"Home"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/Servises",children:"Services"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/privacyPolicy",children:"Pravacy Policy"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/Aboutus",children:"About Us"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(l.jsx)("a",{href:"/termCondition",children:"Term & Condition"})]})]})]})]})]})}),Object(l.jsxs)("div",{className:"container d-md-flex py-4",children:[Object(l.jsxs)("div",{className:"mr-md-auto text-center text-md-left",children:[Object(l.jsxs)("div",{className:"copyright",children:["\xa9 Copyright ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"VishwaJeet Cab Services"})}),". All Rights Reserved"]}),Object(l.jsxs)("div",{className:"credits",children:["Designed by ",Object(l.jsx)("a",{href:"#",children:"Ellipse Software Technology"})]})]}),Object(l.jsxs)("div",{className:"social-links text-center text-md-right pt-3 pt-md-0",children:[Object(l.jsx)("a",{href:"#",className:"twitter",children:Object(l.jsx)("i",{className:"bx bxl-twitter"})}),Object(l.jsx)("a",{href:"#",className:"facebook",children:Object(l.jsx)("i",{className:"bx bxl-facebook"})}),Object(l.jsx)("a",{href:"#",className:"instagram",children:Object(l.jsx)("i",{className:"bx bxl-instagram"})}),Object(l.jsx)("a",{href:"#",className:"google-plus",children:Object(l.jsx)("i",{className:"bx bxl-skype"})}),Object(l.jsx)("a",{href:"#",className:"linkedin",children:Object(l.jsx)("i",{className:"bx bxl-linkedin"})})]})]})]})}}]),a}(o.Component);t.a=Object(c.f)(d)},81:function(e,t,a){"use strict";var s=a(3),r=a(7),i=a(58),n=a.n(i),o=a(1),c=a.n(o),l=a(62),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],j=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.striped,j=e.bordered,h=e.borderless,m=e.hover,b=e.size,p=e.variant,u=e.responsive,O=Object(r.a)(e,d),x=Object(l.a)(a,"table"),g=n()(i,x,p&&x+"-"+p,b&&x+"-"+b,o&&x+"-striped",j&&x+"-bordered",h&&x+"-borderless",m&&x+"-hover"),f=c.a.createElement("table",Object(s.a)({},O,{className:g,ref:t}));if(u){var v=x+"-responsive";return"string"===typeof u&&(v=v+"-"+u),c.a.createElement("div",{className:v},f)}return f}));t.a=j}}]);
//# sourceMappingURL=31.19c27a0c.chunk.js.map