(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[26,51],{412:function(e,t,a){"use strict";a.r(t);var r=a(51),s=a(52),i=a(42),n=a(41),o=a(43),c=a(44),l=a(1),d=a(49),h=a(389),p=a(96),m=a(53),j=a(48),b=a(2),u=a.n(b),g=a(54),x=a.n(g),O=a(3),f=a(139),y=a.n(f),v=a(60),S=a.n(v),w=a(0),N=a(125),C=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageNo:0,payment_orderId:"",carModelName:"",carType:"",carNo:"",rcBook:"",extraRate:0,cabType:"",ac:"N",bags:"0",capacity:0,cars:"",rate:0,returTripRate:0,discount:0,cabImage:"",perDayKmReturn:0,perDayKmSingle:0,cabId:0,note:"",cabTypes:[],errorListing:""},n.addCabs=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),{Authorization:"Bearer ".concat(t)},""!=n.state.cabType&&null!=n.state.cabType){e.next=5;break}return n.setState({error:"Please enter car number"}),e.abrupt("return",!1);case 5:if(""!=n.state.perDayKmReturn&&null!=n.state.perDayKmReturn){e.next=8;break}return n.setState({error:"Please enter per day min Km for return trip"}),e.abrupt("return",!1);case 8:if(""!=n.state.perDayKmSingle&&null!=n.state.perDayKmSingle){e.next=11;break}return n.setState({error:"Please enter per day min Km for single trip"}),e.abrupt("return",!1);case 11:if(""!=n.state.rate&&null!=n.state.rate){e.next=14;break}return n.setState({error:"Please enter Rate"}),e.abrupt("return",!1);case 14:if(""!=n.state.returTripRate&&null!=n.state.returTripRate){e.next=17;break}return n.setState({error:"Please enter Return trip rate"}),e.abrupt("return",!1);case 17:if(""!=n.state.extraRate&&null!=n.state.perDayKmSingle){e.next=20;break}return n.setState({error:"Please enter Extra Km Rate"}),e.abrupt("return",!1);case 20:return a={userId:n.state.userId,cabType:n.state.cabType,ac:n.state.ac,bags:n.state.bags,capacity:n.state.capacity,perDayKmReturn:n.state.perDayKmReturn,perDayKmSingle:n.state.perDayKmSingle,cars:n.state.cars,rate:n.state.rate,returTripRate:n.state.returTripRate,discount:n.state.discount,extraRate:n.state.extraRate,cabImage:n.state.cabImage},e.prev=21,s=localStorage.getItem("token"),i={Authorization:"Bearer ".concat(s),"Content-Type":"application/json"},e.next=26,x.a.post("http://localhost:8080/admin/add_cab",a,{headers:i});case 26:200==e.sent.data.code?(n.setState({error:"Cab Added"}),n.setState({cabType:""}),n.setState({ac:""}),n.setState({bags:""}),n.setState({capacity:""}),n.setState({perDayKmReturn:0}),n.setState({perDayKmSingle:0}),n.setState({cars:""}),n.setState({rate:0}),n.setState({returTripRate:0}),n.setState({discount:0}),n.setState({extraRate:0}),n.setState({cabImage:""}),n.getCabs(n.state.userId)):n.setState({error:"Internal error"}),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(21),n.setState({isOtpSent:"N"}),n.setState({error:e.t0.response.data.message});case 34:n.setState({isLoading:!1});case 35:case"end":return e.stop()}}),e,null,[[21,30]])}))),n.editCabs=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),{Authorization:"Bearer ".concat(t)},!(n.state.cabId<1||null==n.state.cabId)){e.next=5;break}return n.setState({error:"Something went wrong"}),e.abrupt("return",!1);case 5:if(""!=n.state.cabType&&null!=n.state.cabType){e.next=8;break}return n.setState({error:"Please enter car number"}),e.abrupt("return",!1);case 8:if(""!=n.state.perDayKmReturn&&null!=n.state.perDayKmReturn){e.next=11;break}return n.setState({error:"Please enter per day min Km for return trip"}),e.abrupt("return",!1);case 11:if(""!=n.state.perDayKmSingle&&null!=n.state.perDayKmSingle){e.next=14;break}return n.setState({error:"Please enter per day min Km for single trip"}),e.abrupt("return",!1);case 14:if(""!=n.state.rate&&null!=n.state.rate){e.next=17;break}return n.setState({error:"Please enter Rate"}),e.abrupt("return",!1);case 17:if(""!=n.state.returTripRate&&null!=n.state.returTripRate){e.next=20;break}return n.setState({error:"Please enter Return trip rate"}),e.abrupt("return",!1);case 20:if(""!=n.state.extraRate&&null!=n.state.perDayKmSingle){e.next=23;break}return n.setState({error:"Please enter Extra Km Rate"}),e.abrupt("return",!1);case 23:return a={userId:n.state.userId,cabId:n.state.cabId,cabType:n.state.cabType,ac:n.state.ac,bags:n.state.bags,capacity:n.state.capacity,perDayKmReturn:n.state.perDayKmReturn,perDayKmSingle:n.state.perDayKmSingle,cars:n.state.cars,rate:n.state.rate,returTripRate:n.state.returTripRate,discount:n.state.discount,extraRate:n.state.extraRate,cabImage:n.state.cabImage},e.prev=24,s=localStorage.getItem("token"),i={Authorization:"Bearer ".concat(s),"Content-Type":"application/json"},e.next=29,x.a.put("http://localhost:8080/admin/update_cab",a,{headers:i});case 29:200==e.sent.data.code?(n.setState({error:"Cab updated"}),n.setState({cabType:""}),n.setState({ac:""}),n.setState({bags:""}),n.setState({capacity:""}),n.setState({perDayKmReturn:0}),n.setState({perDayKmSingle:0}),n.setState({cars:""}),n.setState({rate:0}),n.setState({returTripRate:0}),n.setState({discount:0}),n.setState({extraRate:0}),n.setState({cabImage:""}),n.getCabs(n.state.userId)):n.setState({error:"Internal error"}),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(24),n.setState({isOtpSent:"N"}),n.setState({error:e.t0.response.data.message});case 37:n.setState({isLoading:!1});case 38:case"end":return e.stop()}}),e,null,[[24,33]])}))),n.setExtraRate=function(e){n.setState({extraRate:e.target.value})},n.setCabType=function(e){n.setState({cabType:e.target.value})},n.setAc=function(e){n.setState({ac:e.target.value})},n.setBags=function(e){n.setState({bags:e.target.value})},n.setCapacity=function(e){n.setState({capacity:e.target.value})},n.setCars=function(e){n.setState({cars:e.target.value})},n.setRate=function(e){n.setState({rate:e.target.value})},n.setReturTripRate=function(e){n.setState({returTripRate:e.target.value})},n.setDiscount=function(e){n.setState({discount:e.target.value})},n.setPerDayKmReturn=function(e){n.setState({perDayKmReturn:e.target.value})},n.setPerDayKmSingle=function(e){n.setState({perDayKmSingle:e.target.value})},n.deleteCab=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({cabId:0}),a=localStorage.getItem("token"),s={Authorization:"Bearer ".concat(a)},i="&userId="+n.state.userId+"&cabId="+t,e.next=7,x.a.delete("http://localhost:8080/admin/cab?"+i,{headers:s});case 7:200==e.sent.data.code?(n.setState({error:"Cab deleted successfully"}),n.getCabs(n.state.userId)):n.setState({error:"Something went wrong"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),n.setState({isOtpSent:"N"}),n.setState({error:e.t0.response.data.message});case 15:n.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),n.setCabImage=function(e){var t=e.target.files[0],a=t.size,r=t.name.split(".").pop(),s=S.a.now()+"."+r;N.config().parsed;if(a>11e4)return n.setState({error:"Image size must be <100kb"}),n.setState({rcLink:""}),!1;n.setState({isLoading:!0});var i=new y.a({bucketName:"vishwacarrentdata",dirName:"cabs",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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"}),o="https://d394hnp8jvz6yg.cloudfront.net/cabs/"+s;console.log("fileUrl:"+o),i.uploadFile(t,s).then((function(e){n.setState({cabImage:o})})).catch((function(e){n.setState({error:"File Not uploaded, Please try again"})})),n.setState({isLoading:!1})},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.getCabs(e),this.getCabTypes(e)}},{key:"getCabs",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i,n,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({cabId:0}),a=localStorage.getItem("token"),s=this.state.pageNo+1,i={Authorization:"Bearer ".concat(a)},n="&userId="+t+"&pageId="+s,e.next=8,x.a.get("http://localhost:8080/admin/get_cabs?"+n,{headers:i});case 8:200==(o=e.sent).data.code&&(console.log("cabData:"+JSON.stringify(o)),this.setState({item:o.data.data})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({isOtpSent:"N"}),this.setState({errorListing:e.t0.response.data.message});case 16:this.setState({isLoading:!1});case 17:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCabTypes",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),this.state.pageNo+1,s={Authorization:"Bearer ".concat(a)},i="&userId="+t,e.next=7,x.a.get("http://localhost:8080/admin/get_cab_types?"+i,{headers:s});case 7:200==(n=e.sent).data.code&&(console.log("CabTypes:"+JSON.stringify(n.data.data)),this.setState({cabTypes:n.data.data})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({isOtpSent:"N"}),this.setState({error:e.t0.response.data.message});case 15:this.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"viewCabs",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),s={Authorization:"Bearer ".concat(a)},i="&userId="+this.state.userId+"&cabId="+t,e.next=6,x.a.get("http://localhost:8080/admin/get_cabbyid?"+i,{headers:s});case 6:200==(n=e.sent).data.code&&(this.setState({cabType:n.data.data.cabType}),this.setState({ac:n.data.data.ac}),this.setState({bags:n.data.data.bags}),this.setState({note:n.data.data.note}),this.setState({rate:n.data.data.rate}),this.setState({returTripRate:n.data.data.returnTripRate}),this.setState({discount:n.data.data.discount}),this.setState({extraRate:n.data.data.extraRate}),this.setState({perDayKmReturn:n.data.data.PerDayKmReturn}),this.setState({perDayKmSingle:n.data.data.PerDayKmSingle}),this.setState({cabImage:n.data.data.image}),this.setState({capacity:n.data.data.capacity}),this.setState({cars:n.data.data.cars}),this.setState({cabId:n.data.data._id})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({isOtpSent:"N"}),this.setState({error:e.t0.response.data.message});case 14:this.setState({isLoading:!1});case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onInputHandler",value:function(e){var t=e.target;t.name,t.value}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{children:[Object(w.jsx)(j.default,{}),Object(w.jsx)("div",{children:Object(w.jsx)(u.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(w.jsx)("div",{children:Object(w.jsx)("section",{id:"pricing",className:"pricing",children:Object(w.jsxs)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(d.a.Title,{className:"bgColor",style:{fontSize:16,fontWeight:"bold",borderRadius:"5px 5px 0px 0px",padding:10,color:"white"},children:"Add Cab Type"}),Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)("div",{style:{color:"red"},children:this.state.error}),Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Cab Type ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsxs)("select",{className:"form-control",value:this.state.cabType,onChange:this.setCabType,children:[Object(w.jsx)("option",{value:"",children:"Select Car Type"}),this.state.cabTypes.map((function(e,t){return Object(w.jsx)("option",{value:e.cabType,children:e.cabType})}))]})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["AC",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsxs)("select",{className:"form-control",value:this.state.ac,onChange:this.setAc,children:[Object(w.jsx)("option",{value:"Y",children:"Yes"}),Object(w.jsx)("option",{value:"N",children:"No"})]})]})})]}),Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Bags ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"bags",type:"text",placeholder:"Bags",value:this.state.bags,onChange:this.setBags})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Capacity ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"capacity",type:"text",placeholder:"Capacity",value:this.state.capacity,onChange:this.setCapacity})]})})]}),Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Minimum Return Trip Km ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"PerDayKmReturn",type:"text",placeholder:"PerDayKmReturn",value:this.state.perDayKmReturn,onChange:this.setPerDayKmReturn})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Minimum Oneway Trip Km ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"perDayKmSingle",type:"text",placeholder:"perDayKmSingle",value:this.state.perDayKmSingle,onChange:this.setPerDayKmSingle})]})})]}),Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Cars ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"cars",type:"text",placeholder:"Cars",value:this.state.cars,onChange:this.setCars})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Rate ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"rate",type:"text",placeholder:"Rate",value:this.state.rate,onChange:this.setRate})]})})]}),Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Return Trip Rate ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"returTripRate",type:"text",placeholder:"Return trip rate",value:this.state.returTripRate,onChange:this.setReturTripRate})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Discount ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"discount",type:"text",placeholder:"Discount",value:this.state.discount,onChange:this.setDiscount})]})})]}),Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Extra Rate ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{name:"extraRate",type:"text",placeholder:"Car Model Name`",value:this.state.extraRate,onChange:this.setExtraRate})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(m.a.Label,{children:["Upload Image",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(m.a.Control,{type:"file",onChange:this.setCabImage,placeholder:"Select RC"})]})})]}),Object(w.jsx)("div",{className:"col-12",children:this.state.cabId<1?Object(w.jsx)(m.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(w.jsx)(h.a,{variant:"primary",type:"button",onClick:this.addCabs.bind(this),children:"Add Cab type"})}):Object(w.jsx)(m.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(w.jsx)(h.a,{variant:"primary",type:"button",onClick:this.editCabs.bind(this),children:"Update Cab type"})})})]})]})})}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(d.a.Title,{className:"bgColor",style:{fontSize:16,fontWeight:"bold",borderRadius:"5px 5px 0px 0px",padding:10,color:"white"},children:"Cabs "}),Object(w.jsx)(d.a.Body,{children:Object(w.jsxs)("div",{style:{color:"red"},children:[Object(w.jsx)("div",{children:this.state.errorListing}),Object(w.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Type"}),Object(w.jsx)("th",{children:"Rate"}),Object(w.jsx)("th",{children:"Return TripRate"}),Object(w.jsx)("th",{children:"Discount"}),Object(w.jsx)("th",{children:"ExtraRate"}),Object(w.jsx)("th",{children:"PerDayKmReturn"}),Object(w.jsx)("th",{children:"PerDayKmSingle"}),Object(w.jsx)("th",{children:"Ac "}),Object(w.jsx)("th",{children:"Bags"}),Object(w.jsx)("th",{children:"Capacity"}),Object(w.jsx)("th",{children:"Action"})]})}),Object(w.jsx)("tbody",{children:this.state.item.map((function(t,a){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:t.cabType}),Object(w.jsx)("td",{children:t.rate}),Object(w.jsx)("td",{children:t.returnTripRate}),Object(w.jsx)("td",{children:t.discount}),Object(w.jsx)("td",{children:t.extraRate}),Object(w.jsx)("td",{children:t.PerDayKmReturn}),Object(w.jsx)("td",{children:t.PerDayKmSingle}),Object(w.jsx)("td",{children:t.ac}),Object(w.jsx)("td",{children:t.bags}),Object(w.jsx)("td",{children:t.capacity}),Object(w.jsxs)("td",{children:[Object(w.jsx)(h.a,{style:{float:"right",marginRight:5},variant:"primary",type:"button",onClick:e.viewCabs.bind(e,t._id),children:Object(w.jsx)("i",{className:"fa fa-edit iconStyle","aria-hidden":"true"})}),"\xa0\xa0",Object(w.jsx)(h.a,{style:{float:"right",marginRight:5},variant:"primary",type:"button",onClick:e.deleteCab.bind(e,t._id),children:Object(w.jsx)("i",{className:"fa fa-remove iconStyle","aria-hidden":"true"})})]})]},a)}))})]})]})})]})})})]})})})]})}}]),a}(l.Component);t.default=Object(O.f)(C)},48:function(e,t,a){"use strict";a.r(t);var r=a(51),s=a(52),i=a(42),n=a(41),o=a(43),c=a(44),l=a(1),d=a(62),h=a(49),p=a(389),m=(a(50),a(54),a(53)),j=a(3),b=a(60),u=a.n(b),g=a(65),x=a(0),O=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={uid:"",userId:"",firstName:"",lastName:"",mobileNo:"",email:"",userType:"",show:!1,pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"},n.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:"",timeOutInterval:0},n.startTimer=function(){console.log("setTimeout Called");setTimeout((function(){console.log("setTimeout Called=====");var e=localStorage.getItem("lastInteractionTime"),t=u.a.duration(u()().diff(u()(e))),a=n.state.timeOutInterval?n.state.timeOutInterval:6e4;console.log("lastInteractionTime:="+e),t._milliseconds<a&&n.startTimer()}),n.state.timeOutInterval?n.state.timeOutInterval:6e4)},n.setShow=function(e){n.setState({isOtpSent:"N"}),n.setState({mobileNo:""}),n.setState({otp:""});var t=n.state.show;console.log("val=="+t+"***"),n.setState({show:!t})},n.setMobile=function(e){console.log("===="+e.target.value),n.setState({mobileNo:e.target.value})},n.setOtp=function(e){n.setState({otp:e.target.value})},n.setUserPassword=function(e){n.setState({userPassword:e.target.value})},n.loginWithPassword=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({error:""}),t="&mobileNo="+n.state.mobileNo+"&userPassword="+n.state.userPassword,a={"Content-Type":"application/json"},"http://localhost:8080/v1/user_login?mobileNo="+n.state.mobileNo+"&userPassword="+n.state.userPassword,e.next=6,fetch("http://localhost:8080/user/user_login?"+t,{headers:a});case 6:return s=e.sent,console.log("+++response=="+JSON.stringify(s)),e.next=10,s.json();case 10:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(o=i.data[0],console.log("userObj=="+JSON.stringify(o)+"==id="+o._id),localStorage.setItem("userId",o._id),localStorage.setItem("firstName",o.firstName),localStorage.setItem("lastName",o.lastName),localStorage.setItem("mobileNo",o.mobileNo),localStorage.setItem("email",o.email),localStorage.setItem("userType",o.userType),localStorage.setItem("token",o.token),"agent"==o.userType?window.location.href="agent/Home":"admin"==o.userType?window.location.href="admin/Home":"driver"==o.userType?window.location.href="driver/Home":window.location.href="/Home"):(n.setState({isOtpSent:"N"}),n.setState({error:"user not found"}));case 13:case"end":return e.stop()}}),e)}))),n.setState({isOtpSent:"N"}),localStorage.setItem("lastInteractionTime",u()()),console.log("userType Constructor=="+localStorage.getItem("userType")),n.startTimer(),n}return Object(n.a)(a,[{key:"super",value:function(){this.setShow.bind(this)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userId");if(console.log("UserId=="+localStorage.getItem("userId")),console.log("userType=="+localStorage.getItem("userType")),e>0||null!=e){var t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName"),r=localStorage.getItem("mobileNo"),s=localStorage.getItem("email"),i=localStorage.getItem("userType");localStorage.getItem("token");this.setState({userId:e}),this.setState({firstName:t}),this.setState({lastName:a}),this.setState({mobileNo:r}),this.setState({email:s}),this.setState({userType:i})}console.log("Title Header==="+JSON.stringify(this.props.match.params.title)),this.setState({pageTitle:this.props.match.params.title})}},{key:"sendOtp",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo,a={"Content-Type":"application/json"},{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Origin":"*"}},e.next=6,fetch("http://localhost:8080/user/send_otp?"+t,{headers:a});case 6:return s=e.sent,e.next=9,s.json();case 9:200==e.sent.code?this.setState({isOtpSent:"Y"}):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,a={"Content-Type":"application/json"},"https://c77b3hr0m0.execute-api.ap-south-1.amazonaws.com/v1/prayag-verifyOtp?mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,e.next=6,fetch("http://localhost:8080/user/verify_otp?"+t,{headers:a});case 6:return s=e.sent,e.next=9,s.json();case 9:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(n=i.data[0],console.log("userObj=="+JSON.stringify(n)+"==id="+n._id),localStorage.setItem("userId",n._id),localStorage.setItem("firstName",n.firstName),localStorage.setItem("lastName",n.lastName),localStorage.setItem("mobileNo",n.mobileNo),localStorage.setItem("email",n.email),localStorage.setItem("userType",n.userType),localStorage.setItem("token",n.token),"agent"==n.userType?window.location.href="agent/Home":"admin"==n.userType?window.location.href="admin/Home":"driver"==n.userType?window.location.href="driver/Home":window.location.href="/Home"):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){console.log("here===sign out"),localStorage.setItem("userId",""),localStorage.setItem("firstName",""),localStorage.setItem("lastName",""),localStorage.setItem("mobileNo",""),localStorage.setItem("email",""),localStorage.setItem("userType",""),localStorage.setItem("token",""),this.setState({userId:""}),this.setState({firstName:""}),this.setState({lastName:""}),this.setState({mobileNo:""}),this.setState({email:""}),this.setState({userType:""}),console.log("here===sign out"),window.location.href="/Home"}},{key:"getMenus",value:function(){return console.log("this.state.userType=="+this.state.userType),"admin"==this.state.userType?Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/admin/Home/Admin Home",children:"Home"})}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(x.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/AddCar/Add Cars",children:"My Cars"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/addDriver/Add Drives",children:"My Driver"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/addCabs/Add Cabs",children:"Add Cabs"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/addSurge/Add Surge Rates",children:"Surge"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/SpecialPrices/Special Price",children:"Special Prices"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/AddBookings/Add Bookings",children:"Add Bookings"})]})]}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Booking"}),Object(x.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/agentWaiting/Waiting for Agent",children:"Waiting for Agent"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/driverWaiting/Waiting for Driver",children:"Waiting for Driver"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/ready/Ready To Go Bookings",children:"Ready"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/completed/Completed Bookings",children:"Completed"})]})]}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(x.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/Booking/Booking Report",children:"Bookings"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/SearchLog/Search Log Report",children:"Search Log"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/AllCars/All Cars",children:"Cars"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/AllDrivers/All Drivers",children:"Drivers"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/admin/AllAgents/All Agents",children:"Agents"})]})]}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"user"==this.state.userType?Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/Home/My Home",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/History/Booking History",children:"History"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/Profile/Profile",children:"Profile"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"agent"==this.state.userType?Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/agent/Home/My Home",children:"Home"})}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Bookings"}),Object(x.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("a",{className:"dropdown-item",href:"/agent/myPendingBookings/Bookings Confirmed",children:"Pending"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/agent/myCompletedBookings/Completed Bookings",children:"Completed"})]})]}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(x.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("a",{className:"dropdown-item",href:"/agent/profile/Profile",children:"Profile"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/agent/AddCar/Add My Car",children:"My Cars"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/agent/addDriver/Add My Driver",children:"My Driver"})]})]}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"driver"==this.state.userType?Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/driver/Home/My Bookings",children:"Home"})}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(x.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(x.jsx)("a",{className:"dropdown-item",href:"/driver/profile/Profile",children:"Profile"})})]}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(x.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("a",{className:"dropdown-item",href:"/driver/booking-report/My Booking Report",children:"Booking Report"}),Object(x.jsx)("a",{className:"dropdown-item",href:"/driver/bankDetails/My Payment Report",children:"Payment Report"})]})]}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"operator"==this.state.userType?Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"active",children:Object(x.jsx)("a",{href:"/Home",children:"Home"})}),Object(x.jsx)("li",{className:"active",children:Object(x.jsx)("a",{href:"/History",children:"History"})}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(x.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"My Assign"})})]}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/Home/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/Login/Login",children:Object(x.jsx)("span",{children:"Sign In"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"/agent/Login/Partner Login",children:"Partner"})})]})}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{children:Object(x.jsx)("title",{children:this.state.pageTitle?this.state.pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"})}),Object(x.jsx)("div",{className:"row",style:{backgroundColor:"#0e0d0d"},children:Object(x.jsx)("div",{className:"header-detail row",style:{width:"100%",marginLeft:30},children:Object(x.jsxs)("div",{className:"row",style:{width:"100%",paddingTop:10,paddingBottom:10},children:[Object(x.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(x.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=7710054367",children:[Object(x.jsx)("i",{className:"fa fa-whatsapp top-icon","aria-hidden":"true",children:" "})," What's App"]})}),Object(x.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(x.jsxs)("a",{href:"tel:+91 7710054367",children:[Object(x.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 7710054367"]})}),Object(x.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(x.jsxs)("a",{href:"tel:+91 9136617676",children:[" ",Object(x.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 9136617676"]})}),Object(x.jsxs)("div",{className:"col-md-3 col-sm-12",children:[Object(x.jsxs)("a",{href:"mailto:vishwacarrental@gmail.com ",title:"Email Us",children:[" ",Object(x.jsx)("i",{className:"fa fa-envelope top-icon","aria-hidden":"true"})," "]}),Object(x.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=100095395351364",title:"Facebook",children:[" ",Object(x.jsx)("i",{className:"fa fa-facebook-official top-icon","aria-hidden":"true"})," "]}),Object(x.jsxs)("a",{href:"https://www.youtube.com/channel/UCatEK6ZpzY6xi-mn0xSwFEQ",title:"YouTube",children:[" ",Object(x.jsx)("i",{className:"fa fa-youtube-square top-icon","aria-hidden":"true"})," "]}),Object(x.jsxs)("a",{href:"https://www.instagram.com/vishwacarrental",title:"Instagram",children:[" ",Object(x.jsx)("i",{className:"fa fa-instagram top-icon","aria-hidden":"true"})," "]}),Object(x.jsxs)("a",{href:"https://www.linkedin.com/onboarding/start/follow-recommendations/new",title:"LinkedIn",children:[" ",Object(x.jsx)("i",{className:"fa fa-linkedin-square top-icon","aria-hidden":"true"})," "]})]})]})})}),Object(x.jsxs)("div",{className:"row d-flex align-items-center bgColor",children:[Object(x.jsx)("h1",{className:"logo mr-auto",children:Object(x.jsx)("a",{href:"/Home/",children:Object(x.jsx)("img",{src:"/logo_cab.png",style:{width:100,padding:5,borderRadius:"12px"}})})}),Object(x.jsx)("nav",{className:"nav-menu d-none d-lg-block",children:this.getMenus()}),Object(x.jsxs)(d.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(x.jsx)(d.a.Header,{closeButton:!0,children:Object(x.jsx)(d.a.Title,{id:"example-custom-modal-styling-title",children:"Login"})}),Object(x.jsx)(d.a.Body,{children:Object(x.jsx)("section",{id:"pricing",className:"pricing",children:Object(x.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(m.a.Label,{children:"Mobile No"}),Object(x.jsx)(m.a.Control,{name:"mobileNo",value:this.state.mobileNo,type:"text",placeholder:"Mobile No",onChange:this.setMobile})]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(m.a.Label,{children:"Password"}),Object(x.jsx)(m.a.Control,{name:"userPassword",value:this.state.userPassword,type:"password",placeholder:"Paasword/Mobile No",onChange:this.setUserPassword})]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)(m.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(x.jsx)(p.a,{variant:"primary",type:"button",onClick:this.loginWithPassword.bind(this),children:"Login"})})})]})]})})})})})})})]})]})]})}}]),a}(l.Component);t.default=Object(j.f)(O)},50:function(e,t,a){(function(t){e.exports=t.config={apiUrl:"http://localhost:8080/",paymentKey:"rzp_test_8KHr7ine3uj7uk",bucketName:"vishwacarrentdata",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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",cdnUrl:"https://d394hnp8jvz6yg.cloudfront.net/"}}).call(this,a(16))},96:function(e,t,a){"use strict";var r=a(4),s=a(8),i=a(61),n=a.n(i),o=a(1),c=a.n(o),l=a(64),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.striped,h=e.bordered,p=e.borderless,m=e.hover,j=e.size,b=e.variant,u=e.responsive,g=Object(s.a)(e,d),x=Object(l.a)(a,"table"),O=n()(i,x,b&&x+"-"+b,j&&x+"-"+j,o&&x+"-striped",h&&x+"-bordered",p&&x+"-borderless",m&&x+"-hover"),f=c.a.createElement("table",Object(r.a)({},g,{className:O,ref:t}));if(u){var y=x+"-responsive";return"string"===typeof u&&(y=y+"-"+u),c.a.createElement("div",{className:y},f)}return f}));t.a=h}}]);
//# sourceMappingURL=26.ed274687.chunk.js.map