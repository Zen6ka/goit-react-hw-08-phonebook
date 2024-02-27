"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{1771:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,o,a,i,c,d,s,l,u,f=t(3050),p=t(9439),x=t(2791),m=t(168),g=t(5685),h=g.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),b=g.ZP.input(o||(o=(0,m.Z)(["\n  padding: 10px;\n  margin-bottom: 10px;\n  border-radius: 16px;\n  border: none;\n  outline: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 6px 0 #25262946;\n"]))),Z=g.ZP.button(a||(a=(0,m.Z)(["\n  padding: 8px 16px;\n  margin-top: 8px;\n  font-size: 18px;\n  border-radius: 24px;\n  border: 1px solid;\n  background-color: #f4f1de;\n  color: #050a38;\n  &:hover {\n    background: #3a3d58;\n    color: #f4f1de;\n  }\n"]))),v=g.ZP.p(i||(i=(0,m.Z)(["\n  margin-bottom: 8px;\n  color: #050a38;\n  font-weight:700;\n"]))),j=t(4420),k=t(7694),y=t.n(k),C=t(9770),P=t(3553),w=function(n){return n.contacts.items},z=function(n){return n.filter},N=function(n){return n.contacts.error},A=function(n){return n.contacts.isLoading},S=(0,P.P1)([w,z],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),L=t(2564),I=(t(5462),t(3329));function q(){var n=(0,j.I0)(),e=(0,j.v9)(w),t=(0,x.useState)("null"),r=(0,p.Z)(t,2),o=(r[0],r[1],(0,x.useState)("")),a=(0,p.Z)(o,2),i=a[0],c=a[1],d=(0,x.useState)(""),s=(0,p.Z)(d,2),l=s[0],u=s[1];return(0,x.useEffect)((function(){isNaN(Number(l))&&L.Am.error("Invalid telephone number! Letters cannot be used.")})),(0,I.jsxs)("div",{children:[(0,I.jsxs)(h,{onSubmit:function(t){if(t.preventDefault(),!isNaN(Number(l))){var r={name:i,number:l};if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))y().Report.warning("Alert","Contact with name ".concat(r.name," already exists!"),"Ok");else{var o=e.find((function(n){var e=n.number;return r.number.replace(/\D/g,"")===e.replace(/\D/g,"")}));o?y().Report.warning("Alert","Number ".concat(r.number," is already in contacts!"),"Ok"):(n((0,C.uK)(r)),c(""),u(""))}}},children:[(0,I.jsx)(v,{children:"Name"}),(0,I.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i,onChange:function(n){c(n.target.value)}}),(0,I.jsx)(v,{children:"Number"}),(0,I.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l,onChange:function(n){u(n.target.value)}}),(0,I.jsx)(Z,{type:"submit",children:"Add Contact"})]}),(0,I.jsx)(L.Ix,{})]})}var D,G,F=g.ZP.li(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 10px;\n  background-color: #f5f6f7;\n  padding-left: 10px;\n  border-radius: 24px;\n"]))),T=g.ZP.span(d||(d=(0,m.Z)([" \n margin-right: 12px; \n color: #000;\n"]))),Y=g.ZP.button(s||(s=(0,m.Z)(["\n  @media only screen and (max-width: 600px) {\n    margin-right: 10px;\n  }\n  padding: 8px 16px;\n  margin-left: 1px;\n  font-size: 18px;\n  border-radius: 0 24px 24px 0;\n  border: 1px solid;\n  background-color: #f4f1de;\n  color: #000;\n  &:hover {\n    background: #e07a5f;\n    color: #f4f1de;\n    border:none;\n    border: 1px solid #e07a5f;\n  }\n"]))),_=g.ZP.button(l||(l=(0,m.Z)(["\n  padding: 8px 16px;\n  margin-left: 5px;\n  font-size: 18px;\n  border-radius: 24px 0 0 24px;\n  border: 1px solid;\n  background-color: #f4f1de;\n  color: #000;\n  &:hover {\n    background: #f2cc8f;\n    color: #a1712a;\n    border: 1px solid #f2cc8f;\n  }\n"]))),B=g.ZP.p(u||(u=(0,m.Z)(["\ntext-align: center;\ncolor: #fff;\nmargin-top: 8px;\n  margin-bottom: 16px;  \n"]))),E=t(9258),O=t(3832),R=t(5820),J=t(6249),K=t(2556),M=t(7328),$=t(1752),H=t(2622),Q=t(732),U=t(7575);function V(){var n=(0,j.v9)(S),e=(0,j.v9)(N),t=(0,j.v9)(A),r=(0,j.I0)();return(0,x.useEffect)((function(){r((0,C.yF)())}),[r]),(0,I.jsx)("ul",{children:t&&!e?(0,I.jsx)(E.a,{}):0!==n.length||e?n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,I.jsx)(W,{contact:{id:e,name:t,number:r}},e)})):(0,I.jsx)(B,{children:"There no matches in phonebook."})})}function W(n){var e=n.contact,t=(0,j.I0)(),r=(0,x.useState)(!1),o=(0,p.Z)(r,2),a=o[0],i=o[1],c=(0,x.useState)(e.name),d=(0,p.Z)(c,2),s=d[0],l=d[1],u=(0,x.useState)(e.number),f=(0,p.Z)(u,2),m=f[0],g=f[1],h=function(){t((0,C.GK)(e.id))},b=function(){i(!1)};return(0,I.jsxs)(F,{children:[(0,I.jsx)(T,{children:e.name}),(0,I.jsx)(T,{href:"tel:".concat(e.number),children:e.number}),(0,I.jsxs)(_,{onClick:function(){i(!0)},children:["Edit ",(0,I.jsx)($.Z,{})]}),(0,I.jsx)(R.Z,{title:"Delete the contact",description:"Are you sure to delete this contact?",onConfirm:function(n){h(n.target.value),O.ZP.success("Click on Yes")},onCancel:function(n){console.log(n),O.ZP.error("Click on No")},okText:"Yes",cancelText:"No",children:(0,I.jsxs)(Y,{children:["Delete ",(0,I.jsx)(H.Z,{})]})}),(0,I.jsx)(J.Z,{open:a,onCancel:b,footer:[(0,I.jsxs)(K.ZP,{onClick:b,children:[(0,I.jsx)(Q.Z,{})," Cancel"]},"cancel"),(0,I.jsxs)(K.ZP,{onClick:function(){i(!1),t((0,C.mP)({id:e.id,name:s,number:m}))},children:[(0,I.jsx)(U.Z,{})," Save"]},"save")],children:(0,I.jsxs)("div",{className:"modal-content",children:[(0,I.jsx)("label",{children:"New Name:"}),(0,I.jsx)(M.Z,{type:"text",value:s,onChange:function(n){l(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,I.jsx)("label",{children:"New Number:"}),(0,I.jsx)(M.Z,{type:"text",value:m,onChange:function(n){g(n.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number format could be: +1 555 1234567 or 555 1234567.",required:!0})]})})]})}var X=g.ZP.input(D||(D=(0,m.Z)(["\n  padding: 16px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-radius: 24px;\n  border: none;\n  outline: 0;\n  background-color: #fff;\n"]))),nn=g.ZP.h3(G||(G=(0,m.Z)(["\n  color: #2e2d2dbc;\n"]))),en=t(6895);function tn(){var n=(0,j.I0)(),e=(0,j.v9)(z);return(0,j.v9)(w).length<1?(0,I.jsx)(nn,{children:"Add your first contact"}):(0,I.jsx)(X,{type:"text",name:"filter",placeholder:"Search by name",value:e,onChange:function(e){n((0,en.T)(e.target.value.trim()))}})}var rn=t(5558);function on(){return(0,I.jsx)(rn.gY,{children:(0,I.jsxs)(f.B6,{children:[(0,I.jsx)(f.ql,{children:(0,I.jsx)("title",{children:"Phonebook"})}),(0,I.jsx)(q,{}),(0,I.jsx)("h2",{children:"Contacts"}),(0,I.jsx)(tn,{}),(0,I.jsx)(V,{})]})})}},5558:function(n,e,t){t.d(e,{CP:function(){return m},FO:function(){return g},LH:function(){return h},bR:function(){return b},gY:function(){return p},om:function(){return x}});var r,o,a,i,c,d,s,l=t(168),u=t(5685),f=t(7005),p=(u.ZP.div(r||(r=(0,l.Z)(["\nheight: auto;\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\n"]))),u.ZP.div(o||(o=(0,l.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbackground-color: rgba(217, 205, 173, 0.5);\nheight: auto;\nmin-width: 500px;\nmin-height: 270px;\npadding: 8px 8px 0 8px;\nmargin-bottom: 16px;\nmargin-top:450px;\nborder-radius: 16px;\nfont-size:24px;\nfont-weight: 600;\n\n"])))),x=u.ZP.div(a||(a=(0,l.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbackground-color: rgba(217, 205, 173, 0.5);\nheight: auto;\nmin-width: 500px;\nmin-height: 300px;\npadding: 8px 8px 0 8px;\nmargin-bottom: 16px;\nmargin-top:200px;\nborder-radius: 16px;\nfont-size:24px;\nfont-weight: 600;\n\n"]))),m=u.ZP.button(i||(i=(0,l.Z)(['\n\tpadding: 10px 20px;\n  margin-top: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid;\n\tcolor: #ffffff;\n\tfont-family: "Gill Sans", sans-serif;\n\tfont-weight:700;\n\tfont-size:18px;\n\tbackground-color:#9f8c54;\n  &:hover {\n    background-color: #3a3d58;    \n  }\n']))),g=u.ZP.button(c||(c=(0,l.Z)(['\n\tpadding: 10px 20px;\n  margin-top: 5px;\n  font-size: 14px;\n\tfont-family: "Gill Sans", sans-serif;\n  border-radius: 6px;\n  border: 1px solid;\n\tcolor: #ffffff;\n\tfont-weight:700;\n\tfont-size:18px;\n\tbackground-color:#9f8c54;\n  &:hover {\n    background-color: #3a3d58;    \n  }\n']))),h=u.ZP.h1(d||(d=(0,l.Z)(['\nfont-family: "Gill Sans", sans-serif;\nfont-size:35px;\nfont-weight: 700;\ncolor:#050a38;\ntext-shadow: rgb(165, 193, 224) 1px 2px 3px;\n']))),b=(0,u.ZP)(f.y)(s||(s=(0,l.Z)(['\ncolor: #ffffff;\nbackground-color:#9f8c54;\nfont-family: "Gill Sans", sans-serif;\nfont-size:22px;\nborder: 1px solid #ffffff;\nmargin-top: 40px;\n  &:hover {\n    background: #3a3d58;\n    color: #f4f1de;\n  }\n'])))}}]);
//# sourceMappingURL=771.e0b30e66.chunk.js.map