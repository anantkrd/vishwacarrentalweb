(this["webpackJsonpVishwa Car Rental"]=this["webpackJsonpVishwa Car Rental"]||[]).push([[50],{119:function(e,t,r){"use strict";var a=r(4),n=r(8),i=r(64),c=r.n(i),s=r(1),o=r.n(s),d=r(66),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.a.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,s=e.striped,u=e.bordered,p=e.borderless,h=e.hover,j=e.size,b=e.variant,m=e.responsive,f=Object(n.a)(e,l),O=Object(d.a)(r,"table"),v=c()(i,O,b&&O+"-"+b,j&&O+"-"+j,s&&O+"-striped",u&&O+"-bordered",p&&O+"-borderless",h&&O+"-hover"),x=o.a.createElement("table",Object(a.a)({},f,{className:v,ref:t}));if(m){var y=O+"-responsive";return"string"===typeof m&&(y=y+"-"+m),o.a.createElement("div",{className:y},x)}return x}));t.a=u},433:function(e,t,r){"use strict";r.r(t);var a=r(53),n=r(54),i=r(42),c=r(41),s=r(44),o=r(45),d=r(1),l=r(50),u=r(119),p=r(389),h=r(55),j=r(49),b=(r(57),r(9)),m=(r(77),r(2)),f=r.n(m),O=r(58),v=r.n(O),x=r(3),y=r(0),g=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(e){var c;return Object(i.a)(this,r),(c=t.call(this,e)).state={userId:"",item:[],error:"",isLoading:!1,loadingColor:"#ffffff",pageNo:0,payment_orderId:""},c.loadScript=function(e){return new Promise((function(t){var r=document.createElement("script");r.src=e,r.onload=function(){t(!0)},r.onerror=function(){t(!1)},document.body.appendChild(r)}))},c.prePayment=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var r,n,i,s,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.loadScript("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:return{"Content-Type":"application/json"},"amount=",r=20*t.agentPrice/100,n=t.finalAmount-t.paid,i={amount:100*r,bookingId:t.orderId,agentId:c.state.userId,bookingAmount:t.agentPrice,tripAmount:t.finalAmount,userPaid:t.paid,userAmount:n},e.next=13,v.a.post("https://vishwacarrental.com:8080/agent/payment",i);case 13:if(s=e.sent){e.next=17;break}return alert("Server error. Are you online?"),e.abrupt("return");case 17:return c.setState({payment_orderId:s.data.data._id,currency:s.data.data.currency,receipt:s.data.data.receipt}),o=s.data.data,o.amount,o.id,o.currency,c.payNow(r,s.data.data._id,s.data.data.currency),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c}return Object(c.a)(r,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e=localStorage.getItem("userId");this.setState({userId:e}),this.getBooking(e)}},{key:"showPopup",value:function(e){this.prePayment(e)}},{key:"getBooking",value:function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var r,n,i,c,s,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),n=this.state.pageNo+1,i={Authorization:"Bearer ".concat(r)},c="&userId="+t+"&pageId="+n,e.next=6,fetch("https://vishwacarrental.com:8080/agent/get_booking_agent?"+c,{headers:i});case 6:return s=e.sent,e.next=9,s.json();case 9:200==(o=e.sent).code?this.setState({item:o.data}):(console.log("errorr"),this.setState({error:"some internal error please try later"})),this.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"payNow",value:function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,r,i){var c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c={key:"rzp_live_P6qbTUQVqidRo6",amount:t,currency:i,description:"Test Transaction",image:"",order_id:r,handler:function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={razorpayPaymentId:t.razorpay_payment_id,razorpayOrderId:t.razorpay_order_id,razorpaySignature:t.razorpay_signature,rawResponce:t},e.next=3,v.a.post("https://vishwacarrental.com:8080/agent/success",r);case 3:n=e.sent,window.location.href="/ThankYou/"+this.state.item.bookingId,alert(n.data.message);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),prefill:{name:this.state.firstName+" "+this.state.lastName,email:this.state.email,contact:this.state.item.mobileNo},notes:{address:this.state.item.pickupCity},theme:{color:"#61dafb"}},new window.Razorpay(c).open();case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)(j.default,{}),Object(y.jsx)("div",{children:Object(y.jsx)(f.a,{css:"\n        display: block;\n        margin: 0 auto;\n        border-color: red;\n        position: absolute;\n        z-index: 9;\n        margin: 0px auto;\n        left: 40%;\n        ",style:{borderColor:"red"},color:this.state.loadingColor,loading:this.state.isLoading,size:150,children:"  "})}),Object(y.jsx)("div",{children:Object(y.jsx)("section",{id:"pricing",className:"pricing",children:Object(y.jsx)("div",{className:"container","data-aos":"fade-up",style:{width:"95%!important"},children:Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(y.jsxs)(l.a,{children:[Object(y.jsx)(l.a.Title,{style:{fontSize:16,padding:10,color:"white",backgroundColor:"gray"},children:"Booking History "}),Object(y.jsx)(l.a.Body,{children:Object(y.jsx)("div",{style:{color:"red"},children:Object(y.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"BookingId"}),Object(y.jsx)("th",{children:"Name "}),Object(y.jsx)("th",{children:"Pickup"}),Object(y.jsx)("th",{children:"Destination"}),Object(y.jsx)("th",{children:"PickupDate"}),Object(y.jsx)("th",{children:"ReturnDate"}),Object(y.jsx)("th",{children:"Amount"}),Object(y.jsx)("th",{children:"Confirm"})]})}),Object(y.jsx)("tbody",{children:this.state.item.map((function(t,r){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)(b.b,{variant:"success",style:{padding:"4px",fontSize:12,textAlign:"center"},to:{pathname:"/BookingDetails/".concat(t.orderId)},children:t.orderId})}),Object(y.jsx)("td",{children:t.userName}),Object(y.jsx)("td",{children:t.pickup}),Object(y.jsx)("td",{children:t.destination}),Object(y.jsx)("td",{children:void 0!=t.pickupDate?t.pickupDate:null}),Object(y.jsx)("td",{children:void 0!=t.returnDate?t.returnDate:null}),Object(y.jsx)("td",{children:t.agentPrice}),Object(y.jsx)("td",{children:Object(y.jsx)(h.a.Group,{controlId:"formBasicEmail",style:{float:"right"},children:Object(y.jsxs)(p.a,{variant:"primary",type:"button",onClick:e.showPopup.bind(e,t),children:["Pay (",20*t.agentPrice/100,") to confirm"]})})})]})}))})]})})})]})})})})})})]})}}]),r}(d.Component);t.default=Object(x.f)(g)}}]);
//# sourceMappingURL=50.41dc48f2.chunk.js.map