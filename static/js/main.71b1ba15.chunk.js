(this.webpackJsonpdisassembler=this.webpackJsonpdisassembler||[]).push([[0],{22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,s,i,o,a,l,c,d,b,j,u,h=n(1),p=n.n(h),x=n(14),O=n.n(x),g=n(7),m=(n(22),n(6)),f=n(2),w=n(3),v=n(4),$=v.a.div(r||(r=Object(w.a)(["\n  margin: auto;\n"]))),y=v.a.div(s||(s=Object(w.a)(["\n  background-color: #C4C4C4;\n  align-item: center;\n  border-radius: 8px;\n  display: flex;\n  position: fixed;\n  top: 100px;\n  left: 20px;\n  bottom: 80px;\n  width: 30%;\n  margin: auto;\n"]))),k=v.a.div(i||(i=Object(w.a)(["\n  align-item: center;\n  text-align: center;\n  border-radius: 8px;\n  border: 2px solid #ccc;\n  position: fixed;\n  top: 100px;\n  right: 20px;\n  width: 64%;\n  bottom: 80px;\n  z-index: 20;\n"]))),C=v.a.div(o||(o=Object(w.a)(["\n  height: 100%;\n  display: flex;\n  align-item: center;\n"]))),I=v.a.textarea(a||(a=Object(w.a)(["\n  background-color: white;\n  border: 2px solid #ccc;\n  display: flex;\n  width: 100%;\n  padding: 12px 20px;\n  border-radius: 6px;\n  font-size: 1.0rem;\n  resize: none;\n  text-align: left;\n"]))),A=v.a.div(l||(l=Object(w.a)(["\n  display: block;\n  text-align: center;\n  margin: auto;\n"]))),S=v.a.button(c||(c=Object(w.a)(["\n  border-radius: 35px;\n  text-align: center;\n  background: #1F435C;\n  padding: 30px 20px;\n  color: white;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5rem;\n  cursor: pointer;\n  font-weight: bold;\n"]))),z=v.a.div(d||(d=Object(w.a)(["\n  display: block;\n  float: right;\n"]))),F=v.a.a(b||(b=Object(w.a)(["\n  border-radius: 35px;\n  text-align: center;\n  background: #1F435C;\n  padding: 5px 11px;\n  color: white;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.0rem;\n  cursor: pointer;\n  font-weight: bold;\n  text-decoration: none;\n  \n  &:hover {\n    background: white;\n    color: #8CA5AE;\n  }\n"]))),R=v.a.input(j||(j=Object(w.a)(["\n  display: none;\n"]))),E=v.a.button(u||(u=Object(w.a)(["\n  border-radius: 35px;\n  text-align: center;\n  padding: 10px 10px;\n  cursor: pointer;\n  border: 2px solid white;\n  background: white;\n  font-size: 0.8rem;\n\n  &:hover {\n    color: #8CA5AE;\n  }\n"]))),T=n(0),M=["$zero","$at","$v0","$v1","$a0","$a1","$a2","$a3","$t0","$t1","$t2","$t3","$t4","$t5","$t6","$t7","$s0","$s1","$s2","$s3","$s4","$s5","$s6","$s7","$t8","$t9","$k0","$k1","$gp","$sp","$fp","$ra"],P=new Map([[32,"add"],[33,"addu"],[36,"and"],[8,"jr"],[39,"nor"],[37,"or"],[42,"slt"],[43,"sltu"],[0,"sll"],[2,"srl"],[34,"sub"],[35,"subu"],[26,"div"],[27,"divu"],[16,"mfhi"],[18,"mflo"],[0,"mfc0"],[24,"mult"],[25,"multu"],[3,"sra"],[12,"syscall"],[13,"break"]]),B=new Map([[8,"addi"],[9,"addiu"],[12,"andi"],[4,"beq"],[5,"bne"],[36,"lbu"],[37,"lhu"],[48,"ll"],[15,"lui"],[35,"lw"],[13,"ori"],[10,"slti"],[11,"sltiu"],[40,"sb"],[56,"sc"],[41,"sh"],[43,"sw"]]),H=new Map([[2,"j"],[3,"jal"]]),U=new Map([["add","3rdrsrt"],["addu","3rdrsrt"],["and","3rdrsrt"],["break","0"],["div","2rsrt"],["divu","2rsrt"],["jr","1rs"],["mfhi","1rd"],["mflo","1rd"],["mult","2rsrt"],["multu","2rsrt"],["nor","3rdrsrt"],["or","3rdrsrt"],["or","3rdrsrt"],["sll","3rdrtsa"],["sllv","3rdrtrs"],["slt","3rdrsrt"],["sltu","3rdrsrt"],["sra","3rdrtsa"],["srl","3rdrtrs"],["srlv","3rdrsrt"],["sub","3rdrsrt"],["subu","3rdrsrt"],["syscall","0"],["addi","3rtrsim"],["addiu","3rtrsim"],["andi","3rtrsim"],["beq","3rsrtlabel"],["bgez","2rslabel"],["bgtz","2rslabel"],["blez","2rslabel"],["bltz","2rslabel"],["bne","3rsrtlabel"],["lb","2rtim(rs)"],["lbu","2rtim(rs)"],["lh","2rtim(rs)"],["lhu","2rsim(rs)"],["lui","2rtim"],["lw","2rtim(rs)"],["lwcl","2rtim(rs)"],["ori","3rtrsim"],["sb","2im(rs)"],["slti","3rtrsim"],["sltiu","3rtrsim"],["sh","2rtim(rs)"],["sw","2rtim(rs)"],["swcl","2rtim(rs)"],["xori","3rtrsim"],["j","1label"],["jal","1label"],["jr","1rs"]]);function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0123456";return e.substr(0,6)}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"000000",t=parseInt(e,2);return 0===t?"R":17===t?"F":B.has(t)?"I":H.has(t)?"J":void 0}function q(e){return e.substr(6,5)}function G(e){return e.substr(16,5)}function J(e){var t=parseInt(e,2);console.log(t);var n=M[t];return console.log(n),n}function W(e){var t=e.substr(6,5);return parseInt(t,2)}function N(e){var t=e.substr(26,6);return parseInt(t,2)}function K(e){var t=e.substr(16,16);return parseInt(t,2)}var Q,V,X,Y,Z,_,ee,te,ne,re,se,ie,oe,ae,le,ce,de,be,je,ue,he=function(){var e=Object(h.useState)(null),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(h.useState)(""),i=Object(m.a)(s,2),o=i[0],a=i[1],l=Object(h.useState)(null),c=Object(m.a)(l,2),d=c[0],b=c[1],j=Object(h.useState)(!1),u=Object(m.a)(j,2),x=u[0],O=u[1],g=p.a.useRef(null),f=function(e){var t=new Blob([e],{type:"text/plain"});b(window.webkitURL.createObjectURL(t))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)($,{children:[Object(T.jsx)(y,{children:Object(T.jsxs)(A,{children:[Object(T.jsx)(R,{type:"file",accept:".txt",ref:g,onChange:function(e){var t=new FileReader,n=e.target.files[0];!function(e){return"txt"===e.name.split(".").pop()}(n)?(alert("Please Upload A .txt File"),O(!1)):(t.onload=function(e){r(e.target.result)},t.readAsText(n),O(!0))}}),Object(T.jsx)(S,{onClick:function(){g.current.click()},children:"BROWSE FILES"}),Object(T.jsxs)(A,{children:[Object(T.jsx)("br",{}),Object(T.jsx)(E,{onClick:function(){if(x){var e=function(e){var t="";return e.forEach((function(e){t+=e+"\n"})),t}(function(e){for(var t=[],n=0,r=0;-1!==(r=e.indexOf("\n",n));){var s=e.substring(n,r),i=D(s);console.log(i);var o=L(i);console.log(o);var a="";if("R"===o){var l=N(s);a=P.get(l)}else if("I"===o){var c=parseInt(i,2);a=B.get(c)}else if("J"===o)c=parseInt(i,2),a=H.get(c);else if("F"===o){t.push("FI and FR instructions not yet implemented"),n=r+1;continue}console.log("instance: "),console.log(a);var d=U.get(a);console.log(d);var b=parseInt(d.substr(0,1));if(d=d.substr(1,d.length-1),0!==b)if(1!==b){console.log(a);for(var j=0;j<d.length;j+=2){var u=d[0+j]+d[1+j];if(console.log(u),"rs"===u)a+=" ",a+=J(q(s));else if("rt"===u)a+=" ",a+=J(s.substr(11,5));else if("rd"===u)a+=" ",a+=J(G(s));else if("sa"===u)a+=" ",a+=W(s);else if("im"===u&&(a+=" ",a+=K(s),j+2<b.length)){a+="(",a+=J(q(s)),a+=")";break}}t.push(a),n=r+1}else d.length>2?a+=" label":(a+=" ",a+=J(q(s))),t.push(a),n=r+1;else t.push(a),n=r+1}return console.log(t),t}(n));a(e),f(e)}else alert("Please Upload A File Before Clicking Start Button!")},children:"CLICK HERE TO START!"})]})]})}),Object(T.jsxs)(k,{children:[Object(T.jsx)(C,{children:Object(T.jsx)(I,{id:"result-area",value:o,disabled:!0,onchange:f,placeholder:"Output Will Go Here"})}),Object(T.jsx)("br",{}),Object(T.jsx)(z,{children:Object(T.jsx)(F,{href:d,download:"output.txt",id:"link",children:"DOWNLOAD"})})]})]})})},pe=v.a.div(Q||(Q=Object(w.a)(["\n  margin-top: 5%;\n  margin-right: 5%;\n  margin-left: 5%;\n  padding: 10px 20px;\n"]))),xe=v.a.div(V||(V=Object(w.a)(["\n  color: #1F435C;\n  font-variant: small-caps;   \n  background-color: #C4C4C4;\n  border-radius: 8px;\n  padding: 10px 20px;\n  margin-top: 5%;\n  margin-right: 5%;\n"]))),Oe=v.a.div(X||(X=Object(w.a)(["\n  border: 2px solid #1F435C;\n  padding: 10px 20px;\n  border-radius: 8px;\n  align-items: center;\n"]))),ge=v.a.div(Y||(Y=Object(w.a)(["\n  padding: 10px 20px;\n  width: 300px; \n  margin: auto; \n  overflow: auto; \n  height: 100px;\n  border: 2px solid #1F435C;\n"]))),me=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(pe,{children:[Object(T.jsx)(xe,{children:Object(T.jsx)("h1",{children:"About Super Cool MIPS Disassembler "})}),Object(T.jsx)("br",{}),Object(T.jsxs)(Oe,{children:[Object(T.jsx)("p",{children:"Malware, or harmful and malicious of software has been major problem in the modern era. To learn more about malware and how it infiltrates and attacks a device, it is reversed engineered from binary into a programming language that can be understood. To successfully combat malware attacks, many reverse engineers will use a disassembler."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"Our disassembler website takes in a text file that contains binary, translates it into MIPS assembly language, and then displays the output. The output can be downloaded as a text file."})]})]})})},fe=["add","addi","addiu","addu","and","andi","beq","bne","j","jal","jr","lbu","lhu","li","lui","lw","nor","or","ori","slt","slti","sltiu","sltu","sll","srl","sb","sc","sh","sw","sub","subu","sra"],we=["$zero","$at","$v0","$v1","$a0","$a1","$a2","$a3","$t0","$t1","$t2","$t3","$t4","$t5","$t6","$t7","$s0","$s1","$s2","$s3","$s4","$s5","$s6","$s7","$t8","$t9","$k0","$k1","$gp","$sp","$fp","$ra"],ve=function(e){var t=e.list,n=e.listTitle,r=t.map((function(e){return Object(T.jsx)("tr",{children:Object(T.jsx)("td",{children:e})},e.toString())}));return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsx)("tr",{children:Object(T.jsx)("th",{children:n})})}),Object(T.jsx)("tbody",{children:r})]})})},$e=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(pe,{children:[Object(T.jsx)(xe,{children:Object(T.jsx)("h1",{children:"Help Page"})}),Object(T.jsx)("br",{}),Object(T.jsxs)(Oe,{children:[Object(T.jsx)("p",{children:"Below are some details that may help resolve some issues with the use of the website."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"Because we are using MIPS Assembly, each instruction must be 32 bits long. The disassembler doesn't support pseudoinstructions. Below is a list of supported instructions and registers:"}),Object(T.jsx)("br",{}),Object(T.jsxs)(ge,{children:[Object(T.jsx)(ve,{listTitle:"Supported Instructions",list:fe}),Object(T.jsx)(ve,{listTitle:"Supported Registers",list:we})]}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"The input file must be a text file for the translation to work correctly. Click the link at the bottom of the page to visit the git repository to download the program that will convert an C++ object file to a text file."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"If there are still concerns that are not addressed in this help section, click the link at the bottom for more info or click the Report Errors button on the top right of the site to report any errors or send any questions."}),Object(T.jsx)("a",{href:"https://git.txstate.edu/sts100/proj3339",children:"Super Cool MIPS Disassembler Git Repo"})]})]})})},ye=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(pe,{children:[Object(T.jsx)(xe,{children:Object(T.jsx)("h1",{children:"Instructions"})}),Object(T.jsx)("br",{}),Object(T.jsx)(Oe,{children:Object(T.jsxs)("ol",{children:[Object(T.jsx)("li",{children:'On the Upload zone, located on the left hand side of the screen, you may upload a text file containing binary by clicking on the "Browse Files" button.'}),Object(T.jsx)("li",{children:'Once the file has been uploaded, click on the "Click Here To Start!" button to commence the process.'}),Object(T.jsx)("li",{children:"When the translation is complete, the result will appear on the right hand side of the website."}),Object(T.jsx)("li",{children:"If interested, you can download copy of the results by clicking the download button at the bottom of the result's section. The copy will be a text file."})]})})]})})},ke=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(pe,{children:[Object(T.jsx)(xe,{children:Object(T.jsx)("h1",{children:"Report Errors"})}),Object(T.jsx)("br",{}),Object(T.jsxs)(Oe,{children:[Object(T.jsx)("p",{children:"If there are any issues with the website,"}),Object(T.jsx)("a",{href:"mailto:supercooldisassember@gmail.com",children:"Contact Us Through Email"}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"Or, visit the Super Cool MIPS Disassembler Git and Create A New Issue:"}),Object(T.jsx)("a",{href:"https://git.txstate.edu/sts100/proj3339",children:"Super Cool MIPS Disassembler Git Repo"})]})]})})},Ce=n(9),Ie=Object(v.a)(g.b)(Z||(Z=Object(w.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  \n  &:active {\n    border-bottom: 3px solid #8CA5AE\n  }\n"]))),Ae=v.a.li(_||(_=Object(w.a)(["\n  height: 80px;\n"]))),Se=v.a.div(ee||(ee=Object(w.a)(["\n  display: none;\n  \n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.7rem;\n    cursor: pointer;\n    color: white;\n  }\n"]))),ze=v.a.nav(te||(te=Object(w.a)(["\n  background-color: #1F435C;\n  height: 80px;\n  margin-top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n"]))),Fe=v.a.div(ne||(ne=Object(w.a)(["\n   display: flex;\n   justify-content: space-between;\n   height: 80px;\n   z-index: 1;\n   width: 100%;\n   padding: 0 24px;\n   max-width: 1100px;\n"]))),Re=Object(v.a)(g.b)(re||(re=Object(w.a)(["\n  color: white;\n  font-size: 1.5rem;\n  font-variant: small-caps;\n  justify-self: flex-start;\n  cursor: pointer;\n  align-items: center;\n  margin-left: 10px;\n  margin-top: 20px;\n  font-weight: bold;\n  text-decoration: none;\n"]))),Ee=v.a.ul(se||(se=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  margin-left: 25px;\n  \n  @media screen and (max-width: 768px) {\n    display:none;\n  }\n"]))),Te=v.a.nav(ie||(ie=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  \n  @media screen and (max-width: 768px){\n    display: none;\n  }\n"]))),Me=Object(v.a)(g.b)(oe||(oe=Object(w.a)(["\n  border-radius: 50px;\n  background-color: #8CA5AE;\n  white-space: nowrap;\n  padding: 10px 15px;\n  color: white;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  \n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: white;\n    color: #8CA5AE;\n  }\n "]))),Pe=function(e){var t=e.toggle;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(ze,{children:Object(T.jsxs)(Fe,{children:[Object(T.jsx)(Re,{to:"/",children:"Super Cool MIPS Disassembler"}),Object(T.jsx)(Se,{onClick:t,children:Object(T.jsx)(Ce.a,{})}),Object(T.jsxs)(Ee,{children:[Object(T.jsx)(Ae,{children:Object(T.jsx)(Ie,{to:"About",children:"About Us"})}),Object(T.jsx)(Ae,{children:Object(T.jsx)(Ie,{to:"Help",children:"Help"})}),Object(T.jsx)(Ae,{children:Object(T.jsx)(Ie,{to:"Instructions",children:"Instructions"})})]}),Object(T.jsx)(Te,{children:Object(T.jsx)(Me,{to:"Report",children:"Report Errors!"})})]})})})},Be=Object(v.a)(g.b)(ae||(ae=Object(w.a)(["\n  display: flex;\n  align-item: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style: none;\n  transition: 0.2s ease-in-out;\n  color: white;\n  cursor: pointer;\n  \n  &:hover {\n    color: #8CA5AE;\n    transition: 0.2s ease-in-out;\n  }\n"]))),He=v.a.aside(le||(le=Object(w.a)(["\n  position: fixed;\n  z-index: 500;\n  width: 100%;\n  height: 100%;\n  background-color: #1F435C;\n  display: grid;\n  align-items: center;\n  top: 0;\n  left: 0;\n  transition: 0.35s ease-in-out;\n  opacity: ",";\n  top: ",";\n"])),(function(e){return e.isOn?"100%":"0%"}),(function(e){return e.isOn?"0":"-100%"})),Ue=Object(v.a)(Ce.b)(ce||(ce=Object(w.a)(["\n  color: white;\n"]))),De=v.a.div(de||(de=Object(w.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]))),Le=v.a.ul(be||(be=Object(w.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  padding: 0px;\n  grid-template-rows: repeat(5, 80px);\n  text-align: center;\n"]))),qe=v.a.div(je||(je=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Ge=Object(v.a)(g.b)(ue||(ue=Object(w.a)(["\n  border-radius: 50px;\n  background: #8CA5AE;\n  white-space: nowrap;\n  padding: 16px 50px;\n  color: white;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  \n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: white;\n    color: #8CA5AE;\n  }\n "]))),Je=function(e){var t=e.isOn,n=e.toggle;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(He,{isOn:t,onClick:n,children:[Object(T.jsx)(De,{onClick:n,children:Object(T.jsx)(Ue,{})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)(Le,{children:[Object(T.jsx)(Be,{to:"About",onClick:n,children:"About Us"}),Object(T.jsx)(Be,{to:"Help",onClick:n,children:"Help"}),Object(T.jsx)(Be,{to:"Instructions",onClick:n,children:"Instructions"})]}),Object(T.jsx)(qe,{children:Object(T.jsx)(Ge,{to:"Report",children:"Report Errors!"})})]})]})})};var We=function(){var e=Object(h.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],s=function(){r(!n)};return Object(T.jsx)(g.a,{children:Object(T.jsxs)("div",{children:[Object(T.jsx)(Je,{isOn:n,toggle:s}),Object(T.jsx)(Pe,{toggle:s}),Object(T.jsxs)(f.c,{children:[Object(T.jsx)(f.a,{path:"/",element:Object(T.jsx)(he,{})}),Object(T.jsx)(f.a,{path:"/About",element:Object(T.jsx)(me,{})}),Object(T.jsx)(f.a,{path:"/Help",element:Object(T.jsx)($e,{})}),Object(T.jsx)(f.a,{path:"/Instructions",element:Object(T.jsx)(ye,{})}),Object(T.jsx)(f.a,{path:"/Report",element:Object(T.jsx)(ke,{})})]})]})})};O.a.render(Object(T.jsx)(p.a.StrictMode,{children:Object(T.jsx)(g.a,{base:"/",children:Object(T.jsx)(We,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.71b1ba15.chunk.js.map