(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[56],{432:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a(52),i=a(42),o=a(41),c=a(43),l=a(44),n=a(1),d=a(49),j=a(389),h=a(53),u=a(48),b=(a(55),a(75),a(2)),m=a.n(b),p=a(54),x=a.n(p),f=a(3),O=a(0),g=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageNo:0,mobileNo:"",firstName:"",lastName:"",userPassword:"",email:"",licenseLink:"",idNumber:""},o.loadScript=function(e){return new Promise((function(t){var a=document.createElement("script");a.src=e,a.onload=function(){t(!0)},a.onerror=function(){t(!1)},document.body.appendChild(a)}))},o.updateProfile=Object(r.a)(Object(s.a)().mark((function e(){var t,a,r,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o.setState({error:""}),t=localStorage.getItem("token"),a={Authorization:"Bearer ".concat(t)},""!=o.state.userPassword&&null!=o.state.userPassword){e.next=7;break}return o.setState({error:"Please enter password"}),e.abrupt("return",!1);case 7:return r={userId:o.state.userId,userPassword:o.state.userPassword},e.next=10,x.a.post("https://vishwacarrental.com:8080/user/update_password",r,{headers:a});case 10:i=e.sent,console.log("result:"+JSON.stringify(i)),200==i.data.code?(o.setState({error:i.data.message}),o.setState({userPassword:""})):o.setState({error:i.data.message}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),o.setState({isOtpSent:"N"}),o.setState({error:e.t0.response.data.message});case 19:o.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e,null,[[0,15]])}))),o.setUserPassword=function(e){o.setState({userPassword:e.target.value})},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.getProfile(e)}},{key:"getProfile",value:function(){var e=Object(r.a)(Object(s.a)().mark((function e(t){var a,r,i,o,c,l;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("*****getBookigs******"),this.setState({error:""}),a=localStorage.getItem("token"),r=this.state.pageNo+1,i={Authorization:"Bearer ".concat(a)},o="&userId="+t+"&pageId="+r,e.next=8,fetch("https://vishwacarrental.com:8080/user/get_user_byid?"+o,{headers:i});case 8:return c=e.sent,e.next=11,c.json();case 11:200==(l=e.sent).code?(console.log("idProof:"+l.data.idProof),l.data.idProof,this.setState({firstName:l.data.firstName}),this.setState({lastName:l.data.lastName}),this.setState({mobileNo:l.data.mobileNo}),this.setState({email:l.data.email}),this.setState({licenseLink:l.data.idProof}),this.setState({idNumber:l.data.idNumber}),this.setState({item:l.data})):(console.log("errorr"),this.setState({error:"some internal error please try later"})),this.setState({isLoading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(u.default,{}),Object(O.jsx)("div",{children:Object(O.jsx)(m.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(O.jsx)("div",{children:Object(O.jsx)("section",{id:"pricing",className:"pricing",children:Object(O.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(d.a.Title,{style:{fontSize:16,padding:10,color:"white",backgroundColor:"gray"},children:"Profile"}),Object(O.jsxs)(d.a.Body,{children:[Object(O.jsx)("div",{style:{color:"red"},children:this.state.error}),Object(O.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(O.jsx)("div",{children:Object(O.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"First Name"}),Object(O.jsx)(h.a.Control,{type:"text",disabled:!0,placeholder:"First Name",value:this.state.firstName})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"Last Name"}),Object(O.jsx)(h.a.Control,{type:"text",disabled:!0,placeholder:"Last Name",value:this.state.lastName})]})})]}),Object(O.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(O.jsx)("div",{children:Object(O.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"Mobile No."}),Object(O.jsx)(h.a.Control,{type:"text",disabled:!0,placeholder:"Mobile No",value:this.state.mobileNo})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"Email"}),Object(O.jsx)(h.a.Control,{type:"email",disabled:!0,placeholder:"Mobile No",value:this.state.email})]})})]}),Object(O.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(O.jsx)("div",{children:Object(O.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"Diver License"}),Object(O.jsx)(h.a.Control,{type:"text",disabled:!0,placeholder:"License No",value:this.state.idNumber})]})}),Object(O.jsx)("div",{children:Object(O.jsx)(h.a.Group,{controlId:"formBasicEmail",children:Object(O.jsx)("img",{src:this.state.licenseLink,width:100})})})]}),Object(O.jsx)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:Object(O.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"Password"}),Object(O.jsx)(h.a.Control,{name:"userPassword",value:this.state.userPassword,type:"text",placeholder:"Password",onChange:this.setUserPassword})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsx)(h.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(O.jsx)(j.a,{variant:"primary",type:"button",onClick:this.updateProfile.bind(this),children:"Update password"})})})]})]})})})})})})]})}}]),a}(n.Component);t.default=Object(f.f)(g)}}]);
//# sourceMappingURL=56.e2e2c83f.chunk.js.map