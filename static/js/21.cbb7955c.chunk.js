(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[21,53],{119:function(e,t,a){"use strict";var r=a(4),s=a(8),i=a(64),n=a.n(i),o=a(1),c=a.n(o),l=a(66),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.striped,h=e.bordered,p=e.borderless,j=e.hover,m=e.size,b=e.variant,u=e.responsive,x=Object(s.a)(e,d),O=Object(l.a)(a,"table"),g=n()(i,O,b&&O+"-"+b,m&&O+"-"+m,o&&O+"-striped",h&&O+"-bordered",p&&O+"-borderless",j&&O+"-hover"),f=c.a.createElement("table",Object(r.a)({},x,{className:g,ref:t}));if(u){var y=O+"-responsive";return"string"===typeof u&&(y=y+"-"+u),c.a.createElement("div",{className:y},f)}return f}));t.a=h},416:function(e,t,a){"use strict";a.r(t);var r=a(53),s=a(54),i=a(42),n=a(41),o=a(44),c=a(45),l=a(1),d=a(50),h=a(389),p=a(119),j=a(55),m=a(49),b=a(2),u=a.n(b),x=a(58),O=a.n(x),g=a(3),f=(a(141),a(61)),y=a.n(f),v=(a(89),a(122)),S=a.n(v),w=a(0),N=(a(125),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageNo:0,type:"",startDate:new Date,startDateSelected:"",endDateSelected:"",endDate:new Date,extraRate:0,cabType:"",rate:0,returTripRate:0,cabTypes:[],isWeekday:!1,weekDays:[],weekday:0,priceId:""},n.addPrice=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),{Authorization:"Bearer ".concat(t)},""!=n.state.cabType&&null!=n.state.cabType){e.next=5;break}return n.setState({error:"Please select cab type"}),e.abrupt("return",!1);case 5:if(""!=n.state.type&&null!=n.state.type){e.next=10;break}return n.setState({error:"please select type"}),e.abrupt("return",!1);case 10:if("dateRange"!=n.state.type){e.next=19;break}if(""!=n.state.startDate&&null!=n.state.startDate){e.next=14;break}return n.setState({error:"Please select start date"}),e.abrupt("return",!1);case 14:if(""!=n.state.endDate&&null!=n.state.endDate){e.next=17;break}return n.setState({error:"Please select end date"}),e.abrupt("return",!1);case 17:e.next=22;break;case 19:if(""!=n.state.weekday&&null!=n.state.weekday){e.next=22;break}return n.setState({error:"Please select Day"}),e.abrupt("return",!1);case 22:if(""!=n.state.rate&&null!=n.state.rate){e.next=25;break}return n.setState({error:"Please enter Rate"}),e.abrupt("return",!1);case 25:if(""!=n.state.returTripRate&&null!=n.state.returTripRate){e.next=28;break}return n.setState({error:"Please enter Return trip rate"}),e.abrupt("return",!1);case 28:if(""!=n.state.extraRate&&null!=n.state.extraRate){e.next=31;break}return n.setState({error:"Please enter Extra Km Rate"}),e.abrupt("return",!1);case 31:return a={userId:n.state.userId,cabType:n.state.cabType,type:n.state.type,startDate:n.state.startDateSelected,endDate:n.state.endDateSelected,weekday:n.state.weekday,rate:n.state.rate,returTripRate:n.state.returTripRate,extraRate:n.state.extraRate},e.prev=32,s=localStorage.getItem("token"),i={Authorization:"Bearer ".concat(s),"Content-Type":"application/json"},e.next=37,O.a.post("https://vishwacarrental.com:8080/admin/add_specialprice",a,{headers:i});case 37:200==e.sent.data.code?(n.setState({error:"Price Added"}),n.setState({cabType:""}),n.setState({type:""}),n.setState({startDate:""}),n.setState({endDate:""}),n.setState({startDateSelected:""}),n.setState({endDateSelected:""}),n.setState({weekday:0}),n.setState({rate:0}),n.setState({returTripRate:0}),n.setState({extraRate:0}),n.getSpecailPrice(n.state.userId)):n.setState({error:"Internal error"}),e.next=45;break;case 41:e.prev=41,e.t0=e.catch(32),n.setState({isOtpSent:"N"}),n.setState({error:e.t0.response.data.message});case 45:n.setState({isLoading:!1});case 46:case"end":return e.stop()}}),e,null,[[32,41]])}))),n.editPrice=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),{Authorization:"Bearer ".concat(t)},""!=n.state.priceId){e.next=5;break}return n.setState({error:"Something went wrong"}),e.abrupt("return",!1);case 5:if(""!=n.state.cabType&&null!=n.state.cabType){e.next=8;break}return n.setState({error:"Please select cab type"}),e.abrupt("return",!1);case 8:if(""!=n.state.type&&null!=n.state.type){e.next=13;break}return n.setState({error:"please select type"}),e.abrupt("return",!1);case 13:if("dateRange"!=n.state.type){e.next=22;break}if(""!=n.state.startDate&&null!=n.state.startDate){e.next=17;break}return n.setState({error:"Please select start date"}),e.abrupt("return",!1);case 17:if(""!=n.state.endDate&&null!=n.state.endDate){e.next=20;break}return n.setState({error:"Please select end date"}),e.abrupt("return",!1);case 20:e.next=25;break;case 22:if(""!=n.state.weekday&&null!=n.state.weekday){e.next=25;break}return n.setState({error:"Please select Day"}),e.abrupt("return",!1);case 25:if(""!=n.state.rate&&null!=n.state.rate){e.next=28;break}return n.setState({error:"Please enter Rate"}),e.abrupt("return",!1);case 28:if(""!=n.state.returTripRate&&null!=n.state.returTripRate){e.next=31;break}return n.setState({error:"Please enter Return trip rate"}),e.abrupt("return",!1);case 31:if(""!=n.state.extraRate&&null!=n.state.extraRate){e.next=34;break}return n.setState({error:"Please enter Extra Km Rate"}),e.abrupt("return",!1);case 34:return a={priceId:n.state.priceId,userId:n.state.userId,cabType:n.state.cabType,type:n.state.type,startDate:n.state.startDateSelected,endDate:n.state.endDateSelected,weekday:n.state.weekday,rate:n.state.rate,returTripRate:n.state.returTripRate,extraRate:n.state.extraRate},e.prev=35,s=localStorage.getItem("token"),i={Authorization:"Bearer ".concat(s),"Content-Type":"application/json"},e.next=40,O.a.put("https://vishwacarrental.com:8080/admin/update_specialprice",a,{headers:i});case 40:200==e.sent.data.code?(n.setState({error:"Cab updated"}),n.setState({cabType:""}),n.setState({type:""}),n.setState({startDate:""}),n.setState({endDate:""}),n.setState({startDateSelected:""}),n.setState({endDateSelected:""}),n.setState({weekday:0}),n.setState({rate:0}),n.setState({returTripRate:0}),n.setState({extraRate:0}),n.getSpecailPrice(n.state.userId)):n.setState({error:"Internal error"}),e.next=48;break;case 44:e.prev=44,e.t0=e.catch(35),n.setState({isOtpSent:"N"}),n.setState({error:e.t0.response.data.message});case 48:n.setState({isLoading:!1});case 49:case"end":return e.stop()}}),e,null,[[35,44]])}))),n.setExtraRate=function(e){n.setState({extraRate:e.target.value})},n.setCabType=function(e){n.setState({cabType:e.target.value})},n.setRate=function(e){n.setState({rate:e.target.value})},n.setReturTripRate=function(e){n.setState({returTripRate:e.target.value})},n.setStartDate=function(e){n.setState({startDate:e});var t=y()(e).format("YYYY-MM-DD");n.setState({startDateSelected:t})},n.onEndTimeChange=function(e){n.setState({returnTime:e});var t=y()(e).format("YYYY-MM-DD");n.setState({returnTimeSelected:t})},n.setEndDate=function(e){n.setState({endDate:e});var t=y()(e).format("YYYY-MM-DD");n.setState({endDateSelected:t})},n.setWeekday=function(e){n.setState({weekday:e.target.value})},n.setType=function(e){"weekday"==e.target.value?n.setState({isWeekday:!0}):n.setState({isWeekday:!1}),n.setState({type:e.target.value})},n.deletePrice=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({priceId:0}),a=localStorage.getItem("token"),s={Authorization:"Bearer ".concat(a)},i="&userId="+n.state.userId+"&priceId="+t,e.next=7,O.a.delete("https://vishwacarrental.com:8080/admin/remove_specialprice?"+i,{headers:s});case 7:200==e.sent.data.code?(n.setState({error:"Price deleted successfully"}),n.getSpecailPrice(n.state.userId)):n.setState({error:"Something went wrong"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),n.setState({isOtpSent:"N"}),n.setState({error:e.t0.response.data.message});case 15:n.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.state.weekDays[0]="Sunday",this.state.weekDays[1]="Monday",this.state.weekDays[2]="Tuesday",this.state.weekDays[3]="Wednesday",this.state.weekDays[4]="Thursday",this.state.weekDays[5]="Friday",this.state.weekDays[6]="Saturday",this.getSpecailPrice(e),this.getCabTypes(e)}},{key:"getSpecailPrice",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i,n,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({cabId:0}),a=localStorage.getItem("token"),s=this.state.pageNo+1,i={Authorization:"Bearer ".concat(a)},n="&userId="+t+"&pageId="+s,e.next=8,O.a.get("https://vishwacarrental.com:8080/admin/get_specialprice?"+n,{headers:i});case 8:200==(o=e.sent).data.code&&this.setState({item:o.data.data}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({isOtpSent:"N"}),this.setState({error:e.t0.response.data.message});case 16:this.setState({isLoading:!1});case 17:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCabTypes",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),this.state.pageNo+1,s={Authorization:"Bearer ".concat(a)},i="&userId="+t,e.next=7,O.a.get("https://vishwacarrental.com:8080/admin/get_cab_types?"+i,{headers:s});case 7:200==(n=e.sent).data.code&&this.setState({cabTypes:n.data.data}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({isOtpSent:"N"}),this.setState({error:e.t0.response.data.message});case 15:this.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"viewPrice",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a,s,i,n,o,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isLoading:!0}),a=localStorage.getItem("token"),s={Authorization:"Bearer ".concat(a)},i="&userId="+this.state.userId+"&priceId="+t,e.next=7,O.a.get("https://vishwacarrental.com:8080/admin/get_specialpricebyid?"+i,{headers:s});case 7:200==(n=e.sent).data.code&&(o="",c="","weekday"!=n.data.data.type?(o=new Date(n.data.data.startDate),c=new Date(n.data.data.endDate),this.setState({isWeekday:!1})):this.setState({isWeekday:!0}),this.setState({priceId:n.data.data._id}),this.setState({cabType:n.data.data.cabType}),this.setState({type:n.data.data.type}),this.setState({startDate:o}),this.setState({endDate:c}),this.setState({weekday:n.data.data.weekDay}),this.setState({rate:n.data.data.rate}),this.setState({returTripRate:n.data.data.returnTripRate}),this.setState({extraRate:n.data.data.extraRate}),this.setState({startDateSelected:n.data.data.startDate}),this.setState({endDateSelected:n.data.data.endDate})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({isOtpSent:"N"}),this.setState({error:e.t0.response.data.message});case 15:this.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onInputHandler",value:function(e){var t=e.target;t.name,t.value}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{children:[Object(w.jsx)(m.default,{}),Object(w.jsx)("div",{children:Object(w.jsx)(u.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(w.jsx)("div",{children:Object(w.jsx)("section",{id:"pricing",className:"pricing",children:Object(w.jsxs)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(d.a.Title,{className:"bgColor",style:{fontSize:16,fontWeight:"bold",borderRadius:"5px 5px 0px 0px",padding:10,color:"white"},children:"Add Special Price"}),Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)("div",{style:{color:"red"},children:this.state.error}),Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["Cab Type ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsxs)("select",{className:"form-control",value:this.state.cabType,onChange:this.setCabType,children:[Object(w.jsx)("option",{value:"",children:"Select Car Type"}),this.state.cabTypes.map((function(e,t){return Object(w.jsx)("option",{value:e.cabType,children:e.cabType},t)}))]})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["Type",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsxs)("select",{className:"form-control",value:this.state.type,onChange:this.setType,children:[Object(w.jsx)("option",{value:"",children:"Select Type"}),Object(w.jsx)("option",{value:"dateRange",children:"dateRange"}),Object(w.jsx)("option",{value:"weekday",children:"weekday"})]})]})})]}),0==this.state.isWeekday?Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["Start Date ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(S.a,{popperPlacement:"auto",dateFormat:"yyyy-MM-dd",className:"form-control",selected:this.state.startDate,minDate:new Date,onChange:function(t){return e.setStartDate(t)}})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["End Date ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(S.a,{minDate:new Date,className:"form-control",popperPlacement:"auto",dateFormat:"yyyy-MM-dd",selected:this.state.endDate,onChange:function(t){return e.setEndDate(t)}})]})})]}):null,1==this.state.isWeekday?Object(w.jsx)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["Day",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsxs)("select",{className:"form-control",value:this.state.weekday,onChange:this.setWeekday,children:[Object(w.jsx)("option",{value:"",children:"Select Day"}),Object(w.jsx)("option",{value:"0",children:"Sunday"}),Object(w.jsx)("option",{value:"1",children:"Monday"}),Object(w.jsx)("option",{value:"2",children:"Tuesday"}),Object(w.jsx)("option",{value:"3",children:"Wednesday"}),Object(w.jsx)("option",{value:"4",children:"Thursday"}),Object(w.jsx)("option",{value:"5",children:"Friday"}),Object(w.jsx)("option",{value:"6",children:"Saturday"})]})]})})}):null,Object(w.jsxs)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:[Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["Extra Rate Oneway ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(j.a.Control,{name:"rate",type:"text",placeholder:"Rate",value:this.state.rate,onChange:this.setRate})]})}),Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["Extra Return Trip Rate ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(j.a.Control,{name:"returTripRate",type:"text",placeholder:"Return trip rate",value:this.state.returTripRate,onChange:this.setReturTripRate})]})})]}),Object(w.jsx)("div",{className:"col-12",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10},children:Object(w.jsx)("div",{children:Object(w.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(w.jsxs)(j.a.Label,{children:["Extra KM Rate ",Object(w.jsx)("spam",{style:{color:"red"},children:"*"})]}),Object(w.jsx)(j.a.Control,{name:"extraRate",type:"text",placeholder:"Car Model Name`",value:this.state.extraRate,onChange:this.setExtraRate})]})})}),Object(w.jsx)("div",{className:"col-12",children:this.state.priceId<1?Object(w.jsx)(j.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(w.jsx)(h.a,{variant:"primary",type:"button",onClick:this.addPrice.bind(this),children:"Save"})}):Object(w.jsx)(j.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(w.jsx)(h.a,{variant:"primary",type:"button",onClick:this.editPrice.bind(this),children:"Update"})})})]})]})})}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(d.a.Title,{className:"bgColor",style:{fontSize:16,fontWeight:"bold",borderRadius:"5px 5px 0px 0px",padding:10,color:"white"},children:"Special Price "}),Object(w.jsx)(d.a.Body,{children:Object(w.jsx)("div",{style:{color:"red"},children:Object(w.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Cab Type"}),Object(w.jsx)("th",{children:"Type"}),Object(w.jsx)("th",{children:"Start Date"}),Object(w.jsx)("th",{children:"End Date"}),Object(w.jsx)("th",{children:"Week Day"}),Object(w.jsx)("th",{children:"Oneway Rate"}),Object(w.jsx)("th",{children:"Return Rate"}),Object(w.jsx)("th",{children:"Extra Rate "}),Object(w.jsx)("th",{children:"Action"})]})}),Object(w.jsx)("tbody",{children:this.state.item.map((function(t,a){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:t.cabType}),Object(w.jsx)("td",{children:t.type}),Object(w.jsx)("td",{children:t.startDate}),Object(w.jsx)("td",{children:t.endDate}),Object(w.jsx)("td",{children:e.state.weekDays[t.weekDay]}),Object(w.jsx)("td",{children:t.rate}),Object(w.jsx)("td",{children:t.returnTripRate}),Object(w.jsx)("td",{children:t.extraRate}),Object(w.jsxs)("td",{children:[Object(w.jsx)(h.a,{style:{float:"right",marginRight:5},variant:"primary",type:"button",onClick:e.viewPrice.bind(e,t._id),children:Object(w.jsx)("i",{className:"fa fa-edit iconStyle","aria-hidden":"true"})}),"\xa0\xa0",Object(w.jsx)(h.a,{style:{float:"right",marginRight:5},variant:"primary",type:"button",onClick:e.deletePrice.bind(e,t._id),children:Object(w.jsx)("i",{className:"fa fa-remove iconStyle","aria-hidden":"true"})})]})]},a)}))})]})})})]})})})]})})})]})}}]),a}(l.Component));t.default=Object(g.f)(N)},49:function(e,t,a){"use strict";a.r(t);var r=a(53),s=a(54),i=a(42),n=a(41),o=a(44),c=a(45),l=a(1),d=a(63),h=a(50),p=a(389),j=(a(51),a(58),a(55)),m=a(3),b=a(61),u=a.n(b),x=a(65),O=a(0),g=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={uid:"",userId:"",firstName:"",lastName:"",mobileNo:"",email:"",userType:"",show:!1,pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"},n.state={item:[],id:"",bookingId:"",mobileNo:"",otp:"",isOtpSent:"N",error:"",userPassword:"",timeOutInterval:0},n.startTimer=function(){console.log("setTimeout Called");setTimeout((function(){console.log("setTimeout Called=====");var e=localStorage.getItem("lastInteractionTime"),t=u.a.duration(u()().diff(u()(e))),a=n.state.timeOutInterval?n.state.timeOutInterval:6e4;console.log("lastInteractionTime:="+e),t._milliseconds<a&&n.startTimer()}),n.state.timeOutInterval?n.state.timeOutInterval:6e4)},n.setShow=function(e){n.setState({isOtpSent:"N"}),n.setState({mobileNo:""}),n.setState({otp:""});var t=n.state.show;console.log("val=="+t+"***"),n.setState({show:!t})},n.setMobile=function(e){console.log("===="+e.target.value),n.setState({mobileNo:e.target.value})},n.setOtp=function(e){n.setState({otp:e.target.value})},n.setUserPassword=function(e){n.setState({userPassword:e.target.value})},n.loginWithPassword=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({error:""}),t="&mobileNo="+n.state.mobileNo+"&userPassword="+n.state.userPassword,a={"Content-Type":"application/json"},"https://vishwacarrental.com:8080/v1/user_login?mobileNo="+n.state.mobileNo+"&userPassword="+n.state.userPassword,e.next=6,fetch("https://vishwacarrental.com:8080/user/user_login?"+t,{headers:a});case 6:return s=e.sent,console.log("+++response=="+JSON.stringify(s)),e.next=10,s.json();case 10:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(o=i.data[0],console.log("userObj=="+JSON.stringify(o)+"==id="+o._id),localStorage.setItem("userId",o._id),localStorage.setItem("firstName",o.firstName),localStorage.setItem("lastName",o.lastName),localStorage.setItem("mobileNo",o.mobileNo),localStorage.setItem("email",o.email),localStorage.setItem("userType",o.userType),localStorage.setItem("token",o.token),"agent"==o.userType?window.location.href="agent/Home":"admin"==o.userType?window.location.href="admin/Home":"driver"==o.userType?window.location.href="driver/Home":window.location.href="/Home"):(n.setState({isOtpSent:"N"}),n.setState({error:"user not found"}));case 13:case"end":return e.stop()}}),e)}))),n.setState({isOtpSent:"N"}),localStorage.setItem("lastInteractionTime",u()()),console.log("userType Constructor=="+localStorage.getItem("userType")),n.startTimer(),n}return Object(n.a)(a,[{key:"super",value:function(){this.setShow.bind(this)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userId");if(console.log("UserId=="+localStorage.getItem("userId")),console.log("userType=="+localStorage.getItem("userType")),e>0||null!=e){var t=localStorage.getItem("firstName"),a=localStorage.getItem("lastName"),r=localStorage.getItem("mobileNo"),s=localStorage.getItem("email"),i=localStorage.getItem("userType");localStorage.getItem("token");this.setState({userId:e}),this.setState({firstName:t}),this.setState({lastName:a}),this.setState({mobileNo:r}),this.setState({email:s}),this.setState({userType:i})}console.log("Title Header==="+JSON.stringify(this.props.match.params.title));var n=this.props.match.params.title;console.log("pagetitle:"+n),void 0!=n&&(n=n.replaceAll("-"," ")),this.setState({pageTitle:n})}},{key:"sendOtp",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo,a={"Content-Type":"application/json"},{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Origin":"*"}},e.next=6,fetch("https://vishwacarrental.com:8080/user/send_otp?"+t,{headers:a});case 6:return s=e.sent,e.next=9,s.json();case 9:200==e.sent.code?this.setState({isOtpSent:"Y"}):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,a,s,i,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:""}),t="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,a={"Content-Type":"application/json"},"https://c77b3hr0m0.execute-api.ap-south-1.amazonaws.com/v1/prayag-verifyOtp?mobileNo="+this.state.mobileNo+"&otp="+this.state.otp,e.next=6,fetch("https://vishwacarrental.com:8080/user/verify_otp?"+t,{headers:a});case 6:return s=e.sent,e.next=9,s.json();case 9:i=e.sent,console.log("Data="+JSON.stringify(i)),200==i.code?(n=i.data[0],console.log("userObj=="+JSON.stringify(n)+"==id="+n._id),localStorage.setItem("userId",n._id),localStorage.setItem("firstName",n.firstName),localStorage.setItem("lastName",n.lastName),localStorage.setItem("mobileNo",n.mobileNo),localStorage.setItem("email",n.email),localStorage.setItem("userType",n.userType),localStorage.setItem("token",n.token),"agent"==n.userType?window.location.href="agent/Home":"admin"==n.userType?window.location.href="admin/Home":"driver"==n.userType?window.location.href="driver/Home":window.location.href="/Home"):(this.setState({isOtpSent:"N"}),this.setState({error:"user not found"}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){console.log("here===sign out"),localStorage.setItem("userId",""),localStorage.setItem("firstName",""),localStorage.setItem("lastName",""),localStorage.setItem("mobileNo",""),localStorage.setItem("email",""),localStorage.setItem("userType",""),localStorage.setItem("token",""),this.setState({userId:""}),this.setState({firstName:""}),this.setState({lastName:""}),this.setState({mobileNo:""}),this.setState({email:""}),this.setState({userType:""}),console.log("here===sign out"),window.location.href="/Home"}},{key:"getMenus",value:function(){return console.log("this.state.userType=="+this.state.userType),"admin"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/admin/Home/Admin Home",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AddCar/Add Cars",children:"My Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addDriver/Add Drives",children:"My Driver"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addCabs/Add Cabs",children:"Add Cabs"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/addSurge/Add Surge Rates",children:"Surge"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/SpecialPrices/Special Price",children:"Special Prices"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AddBookings/Add Bookings",children:"Add Bookings"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Booking"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/agentWaiting/Waiting for Agent",children:"Waiting for Agent"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/driverWaiting/Waiting for Driver",children:"Waiting for Driver"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/ready/Ready To Go Bookings",children:"Ready"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/completed/Completed Bookings",children:"Completed"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/Booking/Booking Report",children:"Bookings"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/SearchLog/Search Log Report",children:"Search Log"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllCars/All Cars",children:"Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllDrivers/All Drivers",children:"Drivers"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/admin/AllAgents/All Agents",children:"Agents"})]})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):"user"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Home/My Home",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/History/Booking History",children:"History"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Profile/Profile",children:"Profile"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"agent"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/agent/Home/My Home",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Bookings"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/myPendingBookings/Bookings Confirmed",children:"Pending"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/myCompletedBookings/Completed Bookings",children:"Completed"})]})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/profile/Profile",children:"Profile"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/AddCar/Add My Car",children:"My Cars"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/agent/addDriver/Add My Driver",children:"My Driver"})]})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"driver"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/driver/Home/My Bookings",children:"Home"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"My Profile"}),Object(O.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/profile/Profile",children:"Profile"})})]}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/booking-report/My Booking Report",children:"Booking Report"}),Object(O.jsx)("a",{className:"dropdown-item",href:"/driver/bankDetails/My Payment Report",children:"Payment Report"})]})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut/Log Out",children:"LogOut"})})]}):"operator"==this.state.userType?Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"active",children:Object(O.jsx)("a",{href:"/Home",children:"Home"})}),Object(O.jsx)("li",{className:"active",children:Object(O.jsx)("a",{href:"/History",children:"History"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Report"}),Object(O.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",children:"My Assign"})})]}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/LogOut",children:"LogOut"})})]}):Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/Home/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"/Login/Login",children:Object(O.jsx)("span",{children:"Sign In"})})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/agent/Login/Partner Login",children:"Partner"})})]})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x.a,{children:Object(O.jsx)("title",{children:this.state.pageTitle?this.state.pageTitle:"Vishwa Car Rental Indias Chepest Car Rental Service"})}),Object(O.jsx)("div",{className:"row",style:{backgroundColor:"#0e0d0d"},children:Object(O.jsx)("div",{className:"header-detail row",style:{width:"100%",marginLeft:30},children:Object(O.jsxs)("div",{className:"row",style:{width:"100%",paddingTop:10,paddingBottom:10},children:[Object(O.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(O.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=7710054367",children:[Object(O.jsx)("i",{className:"fa fa-whatsapp top-icon","aria-hidden":"true",children:" "})," What's App"]})}),Object(O.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(O.jsxs)("a",{href:"tel:+91 7710054367",children:[Object(O.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 7710054367"]})}),Object(O.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(O.jsxs)("a",{href:"tel:+91 9136617676",children:[" ",Object(O.jsx)("i",{className:"fa fa-phone top-icon","aria-hidden":"true"})," +91 9136617676"]})}),Object(O.jsxs)("div",{className:"col-md-3 col-sm-12",children:[Object(O.jsxs)("a",{href:"mailto:vishwacarrental@gmail.com ",title:"Email Us",children:[" ",Object(O.jsx)("i",{className:"fa fa-envelope top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=100095395351364",title:"Facebook",children:[" ",Object(O.jsx)("i",{className:"fa fa-facebook-official top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.youtube.com/channel/UCatEK6ZpzY6xi-mn0xSwFEQ",title:"YouTube",children:[" ",Object(O.jsx)("i",{className:"fa fa-youtube-square top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.instagram.com/vishwacarrental",title:"Instagram",children:[" ",Object(O.jsx)("i",{className:"fa fa-instagram top-icon","aria-hidden":"true"})," "]}),Object(O.jsxs)("a",{href:"https://www.linkedin.com/onboarding/start/follow-recommendations/new",title:"LinkedIn",children:[" ",Object(O.jsx)("i",{className:"fa fa-linkedin-square top-icon","aria-hidden":"true"})," "]})]})]})})}),Object(O.jsxs)("div",{className:"row d-flex align-items-center bgColor",children:[Object(O.jsx)("h1",{className:"logo mr-auto",children:Object(O.jsx)("a",{href:"/Home/",children:Object(O.jsx)("img",{src:"/logo_cab.png",alt:"Logo",style:{width:100,padding:5,borderRadius:"12px"}})})}),Object(O.jsx)("nav",{className:"nav-menu d-none d-lg-block",children:this.getMenus()}),Object(O.jsxs)(d.a,{show:this.state.show,onHide:this.setShow.bind(this.state.show),dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(O.jsx)(d.a.Header,{closeButton:!0,children:Object(O.jsx)(d.a.Title,{id:"example-custom-modal-styling-title",children:"Login"})}),Object(O.jsx)(d.a.Body,{children:Object(O.jsx)("section",{id:"pricing",className:"pricing",children:Object(O.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(O.jsx)(h.a,{children:Object(O.jsxs)(h.a.Body,{children:[Object(O.jsx)("div",{className:"col-lg-12 col-md-12",style:{color:"red"},children:this.state.error}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"col-12",children:Object(O.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(j.a.Label,{children:"Mobile No"}),Object(O.jsx)(j.a.Control,{name:"mobileNo",value:this.state.mobileNo,type:"text",placeholder:"Mobile No",onChange:this.setMobile})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(j.a.Label,{children:"Password"}),Object(O.jsx)(j.a.Control,{name:"userPassword",value:this.state.userPassword,type:"password",placeholder:"Paasword/Mobile No",onChange:this.setUserPassword})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsx)(j.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(O.jsx)(p.a,{variant:"primary",type:"button",onClick:this.loginWithPassword.bind(this),children:"Login"})})})]})]})})})})})})})]})]})]})}}]),a}(l.Component);t.default=Object(m.f)(g)},51:function(e,t,a){(function(t){e.exports=t.config={apiUrl:"http://localhost:8080/",paymentKey:"rzp_test_8KHr7ine3uj7uk",bucketName:"vishwacarrentdata",region:"ap-south-1",accessKeyId:"AKIA57FA3HCF3ECFDQJF",secretAccessKey:"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",cdnUrl:"https://d394hnp8jvz6yg.cloudfront.net/"}}).call(this,a(16))},89:function(e,t,a){}}]);
//# sourceMappingURL=21.cbb7955c.chunk.js.map