(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[44,51],{407:function(e,t,a){"use strict";a.r(t);var r=a(51),s=a(52),o=a(42),i=a(41),n=a(43),l=a(44),c=a(1),d=a(49),m=a(389),h=a(53),j=a(48),p=a(2),b=a.n(p),u=a(54),O=a.n(u),g=a(3),f=a(0),x=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageNo:0,mobileNo:"",firstName:""},i.loadScript=function(e){return new Promise((function(t){var a=document.createElement("script");a.src=e,a.onload=function(){t(!0)},a.onerror=function(){t(!1)},document.body.appendChild(a)}))},i.prePayment=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,o,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.loadScript("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:return a=20*t.agentPrice/100,s=t.finalAmount-t.paid,o={amount:100*a,bookingId:t.orderId,agentId:i.state.userId,bookingAmount:t.agentPrice,tripAmount:t.finalAmount,userPaid:t.paid,userAmount:s},e.next=11,O.a.post("https://vishwacarrental.com:8080/agent/payment",o);case 11:if(n=e.sent){e.next=15;break}return alert("Server error. Are you online?"),e.abrupt("return");case 15:return i.setState({payment_orderId:n.data.data._id,currency:n.data.data.currency,receipt:n.data.data.receipt}),i.payNow(a,n.data.data._id,n.data.data.currency),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.getProfile(e)}},{key:"showPopup",value:function(e){this.prePayment(e)}},{key:"getProfile",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,o,i,n,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),s=this.state.pageNo+1,o={Authorization:"Bearer ".concat(a)},i="&userId="+t+"&pageId="+s,e.next=6,fetch("https://vishwacarrental.com:8080/user/get_user_byid?"+i,{headers:o});case 6:return n=e.sent,e.next=9,n.json();case 9:200==(l=e.sent).code?this.setState({item:l.data}):(console.log("errorr"),this.setState({error:"some internal error please try later"})),this.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"payNow",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,a,o){var i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={key:"rzp_live_P6qbTUQVqidRo6",amount:t,currency:o,description:"Booking ID: ",image:"",order_id:a,handler:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={razorpayPaymentId:t.razorpay_payment_id,razorpayOrderId:t.razorpay_order_id,razorpaySignature:t.razorpay_signature,rawResponce:t},e.next=3,O.a.post("https://vishwacarrental.com:8080/agent/success",a);case 3:s=e.sent,window.location.href="/ThankYou/"+this.state.item.bookingId,alert(s.data.message);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),prefill:{name:this.state.firstName+" "+this.state.lastName,email:this.state.email,contact:this.state.item.mobileNo},notes:{address:this.state.item.pickupCity},theme:{color:"#61dafb"}},new window.Razorpay(i).open();case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"addProfile",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(j.default,{}),Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(f.jsx)("div",{children:Object(f.jsx)("section",{id:"pricing",className:"pricing",children:Object(f.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(d.a.Title,{className:"bgColor",style:{fontSize:16,padding:10,color:"white"},children:"Profile"}),Object(f.jsxs)(d.a.Body,{children:[Object(f.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"First Name"}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"First Name",value:this.state.item.firstName})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Last Name"}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Last Name",value:this.state.item.lastName})]})})]}),Object(f.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Mobile No."}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Mobile No",value:this.state.item.mobileNo})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Email"}),Object(f.jsx)(h.a.Control,{type:"email",placeholder:"Mobile No",value:this.state.item.email})]})})]}),Object(f.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Adhaar No."}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Addhaar No",value:this.state.item.adharNo})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Upload Adhaar"}),Object(f.jsx)(h.a.Control,{type:"file",placeholder:"Select Adhaar",value:this.state.item.adhaarLink})]})})]}),Object(f.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Pan No."}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Pan Card No",value:this.state.item.panNo})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Upload Pan"}),Object(f.jsx)(h.a.Control,{type:"file",placeholder:"Select pan",value:this.state.item.panLink})]})})]}),Object(f.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Company Name"}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Company Name",value:this.state.item.companyName})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Office Address"}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Office Address",value:this.state.item.officeAddress})]})})]}),Object(f.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Company Reg No."}),Object(f.jsx)(h.a.Control,{type:"text",placeholder:"Registration No.",value:this.state.item.companyRegNo})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(h.a.Label,{children:"Company License"}),Object(f.jsx)(h.a.Control,{type:"file",placeholder:"Upload Licence",value:this.state.item.companyLicense})]})})]}),Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(h.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(f.jsx)(m.a,{variant:"primary",type:"button",onClick:this.addProfile.bind(this),children:"Update"})})})]})]})})})})})})]})}}]),a}(c.Component);t.default=Object(g.f)(x)},48:function(e,t,a){"use strict";a.r(t);var r=a(51),s=a(52),o=a(42),i=a(41),n=a(43),l=a(44),c=a(1),d=a(62),m=a(49),h=a(389),j=(a(50),a(54),a(53)),p=a(3),b=a(60),u=a.n(b),O=a(65),g=a(0),f=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={uid:"",userId:"",firstName:"",lastName:"",mobileNo:"",email:"",userType:"",show:!1,pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"},i.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:"",timeOutInterval:0},i.startTimer=function(){console.log("setTimeout Called");setTimeout((function(){console.log("setTimeout Called=====");var e=localStorage.getItem("lastInteractionTime"),t=u.a.duration(u()().diff(u()(e))),a=i.state.timeOutInterval?i.state.timeOutInterval:6e4;console.log("lastInteractionTime:="+e),t._milliseconds<a&&i.startTimer()}),i.state.timeOutInterval?i.state.timeOutInterval:6e4)},i.setShow=function(e){i.setState({isOtpSent:"N"}),i.setState({mobileNo:""}),i.setState({otp:""});var t=i.state.show;console.log("val=="+t+"***"),i.setState({show:!t})},i.setMobile=function(e){console.log("===="+e.target.value),i.setState({mobileNo:e.target.value})},i.setOtp=function(e){i.setState({otp:e.target.value})},i.setUserPassword=function(e){i.setState({userPassword:e.target.value})},i.loginWithPassword=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,o,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({error:""}),t="&mobileNo="+i.state.mobileNo+"&userPassword="+i.state.userPassword,a={"Content-Type":"application/json"},"https://vishwacarrental.com:8080/v1/user_login?mobileNo="+i.state.mobileNo+"&userPassword="+i.state.userPassword,e.next=6,fetch("https://vishwacarrental.com:8080/user/user_login?"+t,{headers:a});case 6:return s=e.sent,console.log("+++response=="+JSON.stringify(s)),e.next=10,s.json();case 10:o=e.sent,console.log("Data="+JSON.stringify(o)),200==o.code?(n=o.data[0],console.log("userObj=="+JSON.stringify(n)+"==id="+n._id),localStorage.setItem("userId",n._id),localStorage.setItem("firstName",n.firstName),localStorage.setItem("lastName",n.lastName),localStorage.setItem("mobileNo",n.mobileNo),localStorage.setItem("email",n.email),localStorage.setItem("userType",n.userType),localStorage.setItem("token",n.token),"agent"==n.userType?window.location.href="agent/Home":"admin"==n.userType?window.location.href="admin/Home":"driver"==n.userType?window.location.href="driver/Home":window.location.href="/Home"):(i.setState({isOtpSent:"N"}),i.setState({error:"user not found"}));case 13:case"end":return e.stop()}}),e)}))),i.setState({isOtpSent:"N"}),localStorage.setItem("lastInteractionTime",u()()),console.log("userType Constructor=="+localStorage.getItem("userType")),i.startTimer(),i}return Object(i.a)(a,[{key:"super",value:function(){this.setShow.bind(this)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userId");if(console.log("UserId=="+localStorage.getItem("userId")),console.log("userType=="+localStorage.getItem("userType")),e>0||null!=e){var t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName"),r=localStorage.getItem("mobileNo"),s=localStorage.getItem("email"),o=localStorage.getItem("userType");localStorage.getItem("token");this.setState({userId:e}),this.setState({firstName:t}),this.setState({lastName:a}),this.setState({mobileNo:r}),this.setState({email:s}),this.setState({userType:o})}console.log("Title Header==="+JSON.stringify(this.props.match.params.title)),this.setState({pageTitle:this.props.match.params.title})}},{key:"sendOtp",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo,a={"Content-Type":"application/json"},{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Origin":"*"}},e.next=6,fetch("https://vishwacarrental.com:8080/user/send_otp?"+t,{headers:a});case 6:return s=e.sent,e.next=9,s.json();case 9:200==e.sent.code?this.setState({isOtpSent:"Y"}):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,o,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,a={"Content-Type":"application/json"},"https://c77b3hr0m0.execute-api.ap-south-1.amazonaws.com/v1/prayag-verifyOtp?mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,e.next=6,fetch("https://vishwacarrental.com:8080/user/verify_otp?"+t,{headers:a});case 6:return s=e.sent,e.next=9,s.json();case 9:o=e.sent,console.log("Data="+JSON.stringify(o)),200==o.code?(i=o.data[0],console.log("userObj=="+JSON.stringify(i)+"==id="+i._id),localStorage.setItem("userId",i._id),localStorage.setItem("firstName",i.firstName),localStorage.setItem("lastName",i.lastName),localStorage.setItem("mobileNo",i.mobileNo),localStorage.setItem("email",i.email),localStorage.setItem("userType",i.userType),localStorage.setItem("token",i.token),"agent"==i.userType?window.location.href="agent/Home":"admin"==i.userType?window.location.href="admin/Home":"driver"==i.userType?window.location.href="driver/Home":window.location.href="/Home"):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){console.log("here===sign out"),localStorage.setItem("userId",""),localStorage.setItem("firstName",""),localStorage.setItem("lastName",""),localStorage.setItem("mobileNo",""),localStorage.setItem("email",""),localStorage.setItem("userType",""),localStorage.setItem("token",""),this.setState({userId:""}),this.setState({firstName:""}),this.setState({lastName:""}),this.setState({mobileNo:""}),this.setState({email:""}),this.setState({userType:""}),console.log("here===sign out"),window.location.href="/Home"}},{key:"getMenus",value:function(){return console.log("this.state.userType=="+this.state.userType),"admin"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/admin/Home/Admin Home",children:"Home"})}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AddCar/Add Cars",children:"My Cars"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/addDriver/Add Drives",children:"My Driver"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/addCabs/Add Cabs",children:"Add Cabs"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/addSurge/Add Surge Rates",children:"Surge"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/SpecialPrices/Special Price",children:"Special Prices"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AddBookings/Add Bookings",children:"Add Bookings"})]})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Booking"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/agentWaiting/Waiting for Agent",children:"Waiting for Agent"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/driverWaiting/Waiting for Driver",children:"Waiting for Driver"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/ready/Ready To Go Bookings",children:"Ready"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/completed/Completed Bookings",children:"Completed"})]})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/Booking/Booking Report",children:"Bookings"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/SearchLog/Search Log Report",children:"Search Log"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AllCars/All Cars",children:"Cars"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AllDrivers/All Drivers",children:"Drivers"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/admin/AllAgents/All Agents",children:"Agents"})]})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"user"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/Home/My Home",children:"Home"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/History/Booking History",children:"History"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/Profile/Profile",children:"Profile"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"agent"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/agent/Home/My Home",children:"Home"})}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Bookings"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/myPendingBookings/Bookings Confirmed",children:"Pending"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/myCompletedBookings/Completed Bookings",children:"Completed"})]})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/profile/Profile",children:"Profile"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/AddCar/Add My Car",children:"My Cars"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/agent/addDriver/Add My Driver",children:"My Driver"})]})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"driver"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/driver/Home/My Bookings",children:"Home"})}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(g.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(g.jsx)("a",{className:"dropdown-item",href:"/driver/profile/Profile",children:"Profile"})})]}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(g.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(g.jsx)("a",{className:"dropdown-item",href:"/driver/booking-report/My Booking Report",children:"Booking Report"}),Object(g.jsx)("a",{className:"dropdown-item",href:"/driver/bankDetails/My Payment Report",children:"Payment Report"})]})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"operator"==this.state.userType?Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"active",children:Object(g.jsx)("a",{href:"/Home",children:"Home"})}),Object(g.jsx)("li",{className:"active",children:Object(g.jsx)("a",{href:"/History",children:"History"})}),Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(g.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(g.jsx)("a",{className:"dropdown-item",href:"#",children:"My Assign"})})]}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/Home/",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"/Login/Login",children:Object(g.jsx)("span",{children:"Sign In"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/agent/Login/Partner Login",children:"Partner"})})]})}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{children:Object(g.jsx)("title",{children:this.state.pageTitle?this.state.pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"})}),Object(g.jsx)("div",{className:"row",style:{backgroundColor:"#0e0d0d"},children:Object(g.jsx)("div",{className:"header-detail row",style:{width:"100%",marginLeft:30},children:Object(g.jsxs)("div",{className:"row",style:{width:"100%",paddingTop:10,paddingBottom:10},children:[Object(g.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(g.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=7710054367",children:[Object(g.jsx)("i",{className:"fa fa-whatsapp top-icon","aria-hidden":"true",children:" "})," What's App"]})}),Object(g.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(g.jsxs)("a",{href:"tel:+91 7710054367",children:[Object(g.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 7710054367"]})}),Object(g.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(g.jsxs)("a",{href:"tel:+91 9136617676",children:[" ",Object(g.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 9136617676"]})}),Object(g.jsxs)("div",{className:"col-md-3 col-sm-12",children:[Object(g.jsxs)("a",{href:"mailto:vishwacarrental@gmail.com ",title:"Email Us",children:[" ",Object(g.jsx)("i",{className:"fa fa-envelope top-icon","aria-hidden":"true"})," "]}),Object(g.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=100095395351364",title:"Facebook",children:[" ",Object(g.jsx)("i",{className:"fa fa-facebook-official top-icon","aria-hidden":"true"})," "]}),Object(g.jsxs)("a",{href:"https://www.youtube.com/channel/UCatEK6ZpzY6xi-mn0xSwFEQ",title:"YouTube",children:[" ",Object(g.jsx)("i",{className:"fa fa-youtube-square top-icon","aria-hidden":"true"})," "]}),Object(g.jsxs)("a",{href:"https://www.instagram.com/vishwacarrental",title:"Instagram",children:[" ",Object(g.jsx)("i",{className:"fa fa-instagram top-icon","aria-hidden":"true"})," "]}),Object(g.jsxs)("a",{href:"https://www.linkedin.com/onboarding/start/follow-recommendations/new",title:"LinkedIn",children:[" ",Object(g.jsx)("i",{className:"fa fa-linkedin-square top-icon","aria-hidden":"true"})," "]})]})]})})}),Object(g.jsxs)("div",{className:"row d-flex align-items-center bgColor",children:[Object(g.jsx)("h1",{className:"logo mr-auto",children:Object(g.jsx)("a",{href:"/Home/",children:Object(g.jsx)("img",{src:"/logo_cab.png",style:{width:100,padding:5,borderRadius:"12px"}})})}),Object(g.jsx)("nav",{className:"nav-menu d-none d-lg-block",children:this.getMenus()}),Object(g.jsxs)(d.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(g.jsx)(d.a.Header,{closeButton:!0,children:Object(g.jsx)(d.a.Title,{id:"example-custom-modal-styling-title",children:"Login"})}),Object(g.jsx)(d.a.Body,{children:Object(g.jsx)("section",{id:"pricing",className:"pricing",children:Object(g.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(g.jsx)(m.a,{children:Object(g.jsxs)(m.a.Body,{children:[Object(g.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"col-12",children:Object(g.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(j.a.Label,{children:"Mobile No"}),Object(g.jsx)(j.a.Control,{name:"mobileNo",value:this.state.mobileNo,type:"text",placeholder:"Mobile No",onChange:this.setMobile})]})}),Object(g.jsx)("div",{className:"col-12",children:Object(g.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(j.a.Label,{children:"Password"}),Object(g.jsx)(j.a.Control,{name:"userPassword",value:this.state.userPassword,type:"password",placeholder:"Paasword/Mobile No",onChange:this.setUserPassword})]})}),Object(g.jsx)("div",{className:"col-12",children:Object(g.jsx)(j.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(g.jsx)(h.a,{variant:"primary",type:"button",onClick:this.loginWithPassword.bind(this),children:"Login"})})})]})]})})})})})})})]})]})]})}}]),a}(c.Component);t.default=Object(p.f)(f)},50:function(e,t,a){(function(t){e.exports=t.config={apiUrl:"http://localhost:8080/",paymentKey:"rzp_test_8KHr7ine3uj7uk",bucketName:"vishwacarrentdata",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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",cdnUrl:"https://d394hnp8jvz6yg.cloudfront.net/"}}).call(this,a(16))}}]);
//# sourceMappingURL=44.585be39e.chunk.js.map