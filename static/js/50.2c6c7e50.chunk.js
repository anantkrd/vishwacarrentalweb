(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[50],{402:function(e,a,t){"use strict";t.r(a);var s=t(51),r=t(52),i=t(42),c=t(41),o=t(43),l=t(44),n=t(1),j=t(389),b=t(54),h=t.n(b),d=t(53),m=t(55),u=t(3),x=t(0),O=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var s;return Object(i.a)(this,t),(s=a.call(this,e)).state={isLoginShow:!1,isRegShow:!1,firstName:"",lastName:"",email:"",mobileNo:"",userMobileNo:"",userPassword:""},s.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:""},s.setFirstName=function(e){s.setState({firstName:e.target.value})},s.setLastName=function(e){s.setState({lastName:e.target.value})},s.setEmail=function(e){s.setState({email:e.target.value})},s.setUserMobileNo=function(e){s.setState({userMobileNo:e.target.value})},s.setUserPassword=function(e){s.setState({userPassword:e.target.value})},s.setState({isOtpSent:"N"}),s}return Object(c.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("userId")>0&&(window.location.href="/Home"),this.setState({bookingId:this.props.match.params.orderId})}},{key:"register",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var a,t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({error:""}),""!=this.state.firstName&&void 0!=this.state.firstName){e.next=4;break}return this.setState({error:"Please enter first name"}),e.abrupt("return",!1);case 4:if(""!=this.state.lastName&&void 0!=this.state.lastName){e.next=7;break}return this.setState({error:"Please enter last name"}),e.abrupt("return",!1);case 7:if(""!=this.state.userMobileNo&&10==this.state.userMobileNo.length){e.next=10;break}return this.setState({error:"Invalid mobile number"}),e.abrupt("return",!1);case 10:if(""!=this.state.email&&void 0!=this.state.email){e.next=13;break}return this.setState({error:"Please enter email"}),e.abrupt("return",!1);case 13:if(""!=this.state.userPassword&&void 0!=this.state.userPassword){e.next=16;break}return this.setState({error:"Please enter Password"}),e.abrupt("return",!1);case 16:return a="&mobileNo="+this.state.userMobileNo+"&fname="+this.state.firstName+"&lname="+this.state.lastName+"&email="+this.state.email+"&userPassword="+this.state.userPassword+"&type=user",{"Content-Type":"application/json"},e.prev=18,e.next=21,h.a.post("https://vishwacarrental.com:8080/user/create_user",a);case 21:t=e.sent,console.log(t.data+"resultpay:"+JSON.stringify(t.data)),t.data?(this.setState({error:"Register successfully"}),this.setState({userMobileNo:""}),this.setState({firstName:""}),this.setState({lastName:""}),this.setState({email:""})):(this.setState({isOtpSent:"N"}),this.setState({error:"Something went wrong"})),e.next=31;break;case 26:e.prev=26,e.t0=e.catch(18),console.log("error:"+JSON.stringify(e.t0.response)),this.setState({isOtpSent:"N"}),this.setState({error:e.t0.response.data.message});case 31:case"end":return e.stop()}}),e,this,[[18,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:{width:"50vh",left:"0",right:"0",margin:"auto",borderRadius:"2%"},children:Object(x.jsx)("section",{id:"pricing",className:"pricing",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"col-12",style:{textAlign:"center",marginBottom:"20px"},children:Object(x.jsx)("img",{src:"/logo_cab.png",style:{width:200,padding:5,borderRadius:"12px"}})}),Object(x.jsx)("div",{className:"col-12",style:{textAlign:"center"},children:Object(x.jsx)("h3",{children:"Wel-Come To VishwaCarRental"})}),Object(x.jsx)("div",{className:"col-12",style:{color:"red"},children:this.state.error}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)(d.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(d.a.Label,{children:"First Name"}),Object(x.jsx)(d.a.Control,{name:"firstName",value:this.state.firstName,type:"text",placeholder:"First Name",onChange:this.setFirstName})]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)(d.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(d.a.Label,{children:"Last Name"}),Object(x.jsx)(d.a.Control,{name:"lastName",value:this.state.lastName,type:"text",placeholder:"Last Name",onChange:this.setLastName})]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)(d.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(d.a.Label,{children:"Mobile No"}),Object(x.jsx)(d.a.Control,{name:"userMobileNo",value:this.state.userMobileNo,type:"number",placeholder:"Mobile No",onChange:this.setUserMobileNo})]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)(d.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(d.a.Label,{children:"Email"}),Object(x.jsx)(d.a.Control,{name:"email",value:this.state.email,type:"text",placeholder:"Email",onChange:this.setEmail})]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)(d.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(d.a.Label,{children:"Password"}),Object(x.jsx)(d.a.Control,{name:"userPassword",value:this.state.userPassword,type:"text",placeholder:"Password",onChange:this.setUserPassword})]})}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)(d.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(x.jsx)(j.a,{variant:"primary",type:"button",onClick:this.register.bind(this),children:"Register"})}),Object(x.jsx)(d.a.Group,{controlId:"formBasicEmail",style:{float:"left",color:"white"},children:Object(x.jsx)(j.a,{variant:"primary",type:"button",children:Object(x.jsx)("a",{style:{color:"white"},href:"/Home",children:Object(x.jsx)("span",{children:"Home"})})})})]})]})})}),Object(x.jsx)(m.a,{})]})}}]),t}(n.Component);a.default=Object(u.f)(O)},55:function(e,a,t){"use strict";var s=t(42),r=t(41),i=t(43),c=t(44),o=t(1),l=t(3),n=t(0),j=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={},e}return Object(r.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("footer",{id:"footer",children:[Object(n.jsx)("div",{className:"footer-top",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-lg-3 col-md-6 footer-contact",children:[Object(n.jsx)("h3",{children:"Address"}),Object(n.jsxs)("p",{children:["Vishwa Car Rental",Object(n.jsx)("br",{}),"Head Office: D 1 prakash sadan Mohili Village sakinaka ",Object(n.jsx)("br",{}),"Mumbai 400072 ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("strong",{children:"Mobile:"})," 7710054367,9136617676",Object(n.jsx)("br",{}),Object(n.jsx)("strong",{children:"Email :"})," vishwacarrental@gmail.com",Object(n.jsx)("br",{})]})]}),Object(n.jsxs)("div",{className:"col-lg-2 col-md-6 footer-links",children:[Object(n.jsx)("h4",{children:"Useful Links"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(n.jsx)("a",{href:"/Home/Vishwa Car Rental Indias Chepest Car Rental Service",children:"Home"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(n.jsx)("a",{href:"/ContactUs/Contact Us",children:"Contact Us"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(n.jsx)("a",{href:"/Servises/Our Services",children:"Services"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(n.jsx)("a",{href:"/privacyPolicy/Our Policy",children:"Pravacy Policy"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(n.jsx)("a",{href:"/Aboutus/About Us",children:"About Us"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bx bx-chevron-right"})," ",Object(n.jsx)("a",{href:"/termCondition/Our Terms And Conditions",children:"Term & Condition"})]})]})]}),Object(n.jsxs)("div",{className:"col-lg-3 col-md-6 footer-links",children:[Object(n.jsx)("h4",{children:"DAILY SERVICE"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune To Mumbai",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mumbai"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune To Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Shirdi"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune To Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Alibaugh"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumabi to Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumabi to Alibaugh"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Shirdi"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Murud-Janjira",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Murud-Janjira"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Mahableshwar",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mahableshwar"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Nashik",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Nashik"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Mahableshwar",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Mahableshwar"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Kolhapur",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Kolhapur"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/pune to Kolhapur",style:{color:"rgba(255, 255, 255, 0.7)"},children:"pune to Kolhapur"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Goa"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune To Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune To Goa"})]})]})]}),Object(n.jsxs)("div",{className:"col-lg-3 col-md-6 footer-links",children:[Object(n.jsx)("h4",{children:"FIXED CAR RENTAL PACKAGE"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Mumbai cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mumbai cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune Airport to Shirdi cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune Airport to Shirdi cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Alibaugh cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Alibaugh cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Ahmednagar cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Ahmednagar cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Aurangabad cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Aurangabad cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Murud-Janjira cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Murud-Janjira cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to panchgani cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to panchgani cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai best car service",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai best car service"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai taxi service",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai taxi service"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai Cabs",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai Cabs"})]})]})]}),Object(n.jsxs)("div",{className:"col-lg-3 col-md-6 footer-links",children:[Object(n.jsx)("h4",{children:"TOURIST DESTINATIONS"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Mumbai",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Mumbai"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Shirdi"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to Alibaugh"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumabi to Alibaugh",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumabi to Alibaugh"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Shirdi",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Shirdi"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Murud-Janjira",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Murud-Janjira"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune to panchgani cab",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune to panchgani cab"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Mahableshwar",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Mahableshwar"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Mumbai to Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Mumbai to Goa"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fa fa-car top-icon","aria-hidden":"true"})," ",Object(n.jsx)("a",{href:"/Home/Pune To Goa",style:{color:"rgba(255, 255, 255, 0.7)"},children:"Pune To Goa"})]})]})]})]})})}),Object(n.jsxs)("div",{className:"container d-md-flex py-4",children:[Object(n.jsxs)("div",{className:"mr-md-auto text-center text-md-left",children:[Object(n.jsxs)("div",{className:"copyright",children:["\xa9 Copyright ",Object(n.jsx)("strong",{children:Object(n.jsx)("span",{children:"VishwaJeet Cab Services"})}),". All Rights Reserved"]}),Object(n.jsxs)("div",{className:"credits",children:["Designed by ",Object(n.jsx)("a",{href:"#",children:"Ellipse Software Technology"})]})]}),Object(n.jsxs)("div",{className:"social-links text-center text-md-right pt-3 pt-md-0",children:[Object(n.jsx)("a",{href:"#",className:"twitter",children:Object(n.jsx)("i",{className:"bx bxl-twitter"})}),Object(n.jsx)("a",{href:"#",className:"facebook",children:Object(n.jsx)("i",{className:"bx bxl-facebook"})}),Object(n.jsx)("a",{href:"#",className:"instagram",children:Object(n.jsx)("i",{className:"bx bxl-instagram"})}),Object(n.jsx)("a",{href:"#",className:"google-plus",children:Object(n.jsx)("i",{className:"bx bxl-skype"})}),Object(n.jsx)("a",{href:"#",className:"linkedin",children:Object(n.jsx)("i",{className:"bx bxl-linkedin"})})]})]})]})}}]),t}(o.Component);a.a=Object(l.f)(j)}}]);
//# sourceMappingURL=50.2c6c7e50.chunk.js.map