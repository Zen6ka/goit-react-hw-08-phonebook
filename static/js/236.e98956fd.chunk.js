"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{5558:function(n,e,r){r.d(e,{CP:function(){return x},FO:function(){return h},LH:function(){return g},bR:function(){return w},gY:function(){return p},om:function(){return m}});var t,i,o,s,a,l,d,f=r(168),u=r(5685),c=r(7005),p=(u.ZP.div(t||(t=(0,f.Z)(["\nheight: auto;\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\n"]))),u.ZP.div(i||(i=(0,f.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbackground-color: rgba(217, 205, 173, 0.5);\nheight: auto;\nmin-width: 500px;\nmin-height: 270px;\npadding: 8px 8px 0 8px;\nmargin-bottom: 16px;\nmargin-top:450px;\nborder-radius: 16px;\nfont-size:24px;\nfont-weight: 600;\n\n"])))),m=u.ZP.div(o||(o=(0,f.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbackground-color: rgba(217, 205, 173, 0.5);\nheight: auto;\nmin-width: 500px;\nmin-height: 300px;\npadding: 8px 8px 0 8px;\nmargin-bottom: 16px;\nmargin-top:200px;\nborder-radius: 16px;\nfont-size:24px;\nfont-weight: 600;\n\n"]))),x=u.ZP.button(s||(s=(0,f.Z)(['\n\tpadding: 10px 20px;\n  margin-top: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n\tcolor: #ffffff;\n\tfont-family: "Gill Sans", sans-serif;\n\tfont-weight:700;\n\tfont-size:18px;\n\tbackground-color:#9f8c54;\n  &:hover {\n    background-color: #3a3d58;    \n  }\n']))),h=u.ZP.button(a||(a=(0,f.Z)(['\n\tpadding: 10px 20px;\n  margin-top: 5px;\n  font-size: 14px;\n\tfont-family: "Gill Sans", sans-serif;\n  border-radius: 6px;\n  border: 1px solid;\n\tcolor: #ffffff;\n\tfont-weight:700;\n\tfont-size:18px;\n\tbackground-color:#9f8c54;\n  &:hover {\n    background-color: #3a3d58;    \n  }\n']))),g=u.ZP.h1(l||(l=(0,f.Z)(['\nfont-family: "Gill Sans", sans-serif;\nfont-size:35px;\nfont-weight: 700;\ncolor:#050a38;\ntext-shadow: rgb(165, 193, 224) 1px 2px 3px;\n']))),w=(0,u.ZP)(c.y)(d||(d=(0,f.Z)(['\ncolor: #ffffff;\nbackground-color:#9f8c54;\nfont-family: "Gill Sans", sans-serif;\nfont-size:22px;\nborder: 1px solid #ffffff;\nmargin-top: 40px;\n  &:hover {\n    background: #3a3d58;\n    color: #f4f1de;\n  }\n'])))},8236:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t=r(3050),i=r(1413),o=r(5861),s=r(9439),a=r(4687),l=r.n(a),d=r(4420),f=r(4442),u=r(7428),c=r(7328),p=r(5558),m=r(3329);function x(){var n=u.Z.useForm(),e=(0,s.Z)(n,1)[0],r=(0,d.I0)(),t=(0,d.v9)((function(n){return n.auth})),a=t.isLoading,x=t.error,h=function(){var n=(0,o.Z)(l().mark((function n(t){var i,o,s,d;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=t.name,o=t.email,s=t.password,d=t.confirm,s!==d){n.next=5;break}return n.next=4,r((0,f.z2)({name:i,email:o,password:s}));case 4:!a&&x&&400===x.status?alert("Error while registering user"):e.resetFields();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsx)(p.om,{children:(0,m.jsxs)(u.Z,(0,i.Z)((0,i.Z)({},{labelCol:{span:24},wrapperCol:{span:24}}),{},{form:e,name:"register",onFinish:h,size:"default",initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},style:{width:300},scrollToFirstError:!0,children:[(0,m.jsx)(u.Z.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)(u.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,m.jsx)(c.Z.Password,{})}),(0,m.jsx)(u.Z.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(n){var e=n.getFieldValue;return{validator:function(n,r){return r&&e("password")!==r?Promise.reject(new Error("The new password that you entered do not match!")):Promise.resolve()}}}],children:(0,m.jsx)(c.Z.Password,{})}),(0,m.jsx)(u.Z.Item,{name:"name",label:"Name",tooltip:"How would you like to be called?",rules:[{required:!0,message:"Please input your name!",whitespace:!0}],children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)(u.Z.Item,(0,i.Z)((0,i.Z)({},{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:4}}}),{},{children:(0,m.jsx)(p.CP,{type:"primary",shape:"round",htmlType:"submit",children:"Register"})}))]}))})}function h(){return(0,m.jsx)(t.B6,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(t.ql,{children:(0,m.jsx)("title",{children:"Registration"})}),(0,m.jsx)(x,{})]})})}}}]);
//# sourceMappingURL=236.e98956fd.chunk.js.map