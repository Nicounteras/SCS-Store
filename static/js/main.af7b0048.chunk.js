(this.webpackJsonpscs=this.webpackJsonpscs||[]).push([[0],{42:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(1),i=c(34),r=c.n(i),s=c(9),o=c(3),j=(c(42),c(4)),l=function(e){var t=e.callback,c=e.iconName;return Object(a.jsx)("i",{onClick:t,className:c})},b=c(25),d=Object(n.createContext)(),u=function(e){var t=e.children,c=Object(n.useState)([]),i=Object(o.a)(c,2),r=i[0],s=i[1],j=Object(n.useState)(""),l=Object(o.a)(j,2),u=l[0],O=l[1],m=Object(n.useState)(""),h=Object(o.a)(m,2),x=h[0],p=h[1],f=Object(n.useState)(""),S=Object(o.a)(f,2),v=S[0],g=S[1],C=Object(n.useState)(""),N=Object(o.a)(C,2),y=N[0],E=N[1];return Object(a.jsx)(d.Provider,{value:{products:r,addProduct:function(e,t){var c=r.find((function(t){return t.id===e.id}));c?(c.quantity+=t,s(Object(b.a)(r))):s([].concat(Object(b.a)(r),[{product:e,quantity:t}]))},productsCount:function(){return r.reduce((function(e,t){return e+t.quantity}),0)},deleteProduct:function(e){r.splice(r.findIndex((function(t){return t.id===e})),1),s(Object(b.a)(r))},priceCount:function(){return r.reduce((function(e,t){return e+t.quantity*t.product.price}),0)},name:u,setName:O,email:x,setEmail:p,emailValidation:v,setEmailValidation:g,phone:y,setPhone:E},children:t})},O=function(){return Object(n.useContext)(d)},m=function(){var e=O().productsCount;return Object(a.jsxs)("span",{className:"cart-icon",children:[Object(a.jsx)(l,{iconName:"fas fa-shopping-cart"})," (",e(),")"]})};var h=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(a.jsxs)("nav",{id:"target",children:[Object(a.jsx)(j.b,{to:"/SCS-Store",className:"computer-logo",children:Object(a.jsx)("h1",{children:"Shaka Cool Stuff"})}),Object(a.jsx)(j.b,{to:"/SCS-Store",className:"toggle-logo",children:Object(a.jsx)("h1",{children:"SCS"})}),Object(a.jsx)(j.b,{to:"/SCS-Store",children:Object(a.jsx)(l,{iconName:"far fa-hand-peace main-icon"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j.b,{to:"/SCS-Store/categoria/camisetas",children:"Camisetas"}),Object(a.jsx)(j.b,{to:"/SCS-Store/categoria/bucket-hats",children:"Bucket hats"}),Object(a.jsxs)(j.b,{to:"/SCS-Store/carrito",children:["Carrito ",Object(a.jsx)(m,{})]})]}),Object(a.jsx)("button",{className:"nav-icon",onClick:function(){i(!c)},children:"\u2630"}),Object(a.jsxs)("aside",{className:!0===c?"visible":"not-visible",children:[Object(a.jsx)(j.b,{className:"button secondary",to:"/SCS-Store/categoria/camisetas",children:"Camisetas"}),Object(a.jsx)(j.b,{className:"button secondary",to:"/SCS-Store/categoria/bucket-hats",children:"Bucket hats"}),Object(a.jsxs)(j.b,{className:"button secondary",to:"/SCS-Store/carrito",children:["Carrito ",Object(a.jsx)(m,{})]})]})]})};function x(e){var t=e.product;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("article",{className:"item-container",children:[Object(a.jsx)("img",{src:t.image}),Object(a.jsx)("h2",{children:t.product}),Object(a.jsxs)("h4",{children:["Precio: $",t.price]}),Object(a.jsx)(j.b,{to:"/SCS-Store/productos/"+t.category+"/"+t.iD,className:"button primary",children:"Comprar"})]})})}function p(e){var t=e.products;return Object(a.jsx)("div",{className:"items-home",children:t?t.map((function(e){return Object(a.jsx)(x,{product:e},e.id)})):""})}var f=c(31),S=function(){var e=Object(f.b)({loading:!0,indicator:Object(a.jsx)(f.a,{width:"50",className:"loading-element"})}),t=(e.containerProps,e.indicatorEl);return Object(a.jsx)("div",{className:"loading-container",children:t})},v=c(32),g=(c(50),v.a.initializeApp({apiKey:"AIzaSyCTQiv8rFXgYciEQ3QNgEUwPOh8tyuz3Bw",authDomain:"scs-store-7bf88.firebaseapp.com",projectId:"scs-store-7bf88",storageBucket:"scs-store-7bf88.appspot.com",messagingSenderId:"460208913747",appId:"1:460208913747:web:133d6c5d4c6ea3a15e75a6",measurementId:"G-RZS1PS53Q7"}),function(){return v.a.firestore()});function C(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){g().collection("json-oficial").get().then((function(e){var t=e.docs.map((function(e){var t=e.id;return Object(s.a)(Object(s.a)({},e.data()),{},{id:t})}));i(t)}))}),[]),Object(a.jsx)("div",{children:0===c.length?Object(a.jsx)(S,{}):Object(a.jsx)(p,{products:c})})}var N=c(15),y=c.n(N),E=c(19),k=c(6);function w(e){var t=e.min,c=e.max,i=e.initial,r=e.onChange,s=Object(n.useState)(i),j=Object(o.a)(s,2),l=j[0],b=j[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"flex-container",children:[Object(a.jsx)("button",{onClick:function(e){l>t&&(b(l-1),r(l-1))},children:"-"}),l,Object(a.jsx)("button",{onClick:function(e){l<c&&(b(l+1),r(l+1))},children:"+"})]})})}var P=function(){return Object(a.jsxs)("div",{className:"no-items-div",children:[Object(a.jsx)("p",{children:"El producto que buscas no est\xe1 disponible."}),Object(a.jsx)(j.b,{to:"/SCS-Store",className:"button primary",children:"Descubrir prendas"})]})};function V(e){var t=e.detail,c=O().addProduct,i=Object(n.useState)(!1),r=Object(o.a)(i,2),s=r[0],l=r[1],b=Object(n.useState)(1),d=Object(o.a)(b,2),u=d[0],m=d[1];return console.log(t),t?Object(a.jsx)("div",{className:"detail-container",children:Object(a.jsxs)("article",{className:"item-detail",children:[Object(a.jsxs)("div",{className:"item-detail-left-side",children:[Object(a.jsxs)(j.b,{to:"/SCS-Store/imagenes/"+t.iD,children:[" ",Object(a.jsx)("img",{src:t.image})]}),Object(a.jsx)("h1",{children:t.product})]}),Object(a.jsxs)("div",{className:"item-detail-right-side",children:[Object(a.jsxs)("div",{className:"price-description-section",children:[Object(a.jsxs)("h5",{children:["Precio: $",t.price]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Descripci\xf3n:"})," ",Object(a.jsx)("br",{})," ",t.description]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{min:1,max:t.stock,initial:1,onChange:function(e){m(e),l(e>1)}}),Object(a.jsx)("br",{style:{height:"10px"}}),Object(a.jsxs)("span",{className:"items-to-buy",children:["Vas a comprar ",u," prenda",!0===s?"s":""]})]}),Object(a.jsx)("div",{className:"add-to-cart-div",children:Object(a.jsx)(j.b,{to:"/SCS-Store/carrito",onClick:function(){c(t,u)},className:"button secondary",children:"A\xf1adir al carrito"})})]})]})},t.id):(console.log("No hay nada"),Object(a.jsx)(P,{}))}var q=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)({}),j=Object(o.a)(r,2),l=j[0],b=j[1],d=Object(n.useState)([]),u=Object(o.a)(d,2),O=(u[0],u[1]),m=Object(k.g)(),h=m.iD,x=m.category;return Object(n.useEffect)((function(){function e(){return(e=Object(E.a)(y.a.mark((function e(){var t,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=g(),c=t.collection("json-oficial"),c.where("available","==",!0).get().then((function(e){if(e.size){var t=e.docs.map((function(e){var t=e.id;return Object(s.a)(Object(s.a)({},e.data()),{},{id:t})}));O(t),t.forEach((function(e){e.iD===h?(i(!1),b(e)):i(!1)}))}}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h,x]),Object(a.jsx)(a.Fragment,{children:c?Object(a.jsx)(S,{}):Object(a.jsx)(V,{detail:l})})},D=c(54);function z(e){var t={};return e.name.trim()||(t.name="El nombre de usuario es requerido"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Coloca una direcci\xf3n v\xe1lida de e-mail"):t.email="El e-mail es requerido",e.telephone?e.telephone.length<9?t.telephone="El tel\xe9fono debe tener 9 d\xedgitos (m\xf3vil)":e.telephone.num()||(t.telephone="El n\xfamero de tel\xe9fono es inv\xe1lido"):t.telephone="El tel\xe9fono es requerido",e.emailValidation?e.emailValidation!==e.email&&(t.emailValidation="Los e-mail no coinciden"):t.emailValidation="Este campo es requerido",t}var I=c(23),F=function(e,t,c){var a=Object(n.useState)({name:"",email:"",emailValidation:"",phone:""}),i=Object(o.a)(a,2),r=i[0],j=i[1],l=O(),b=(l.products,l.priceCount,l.name,l.email,l.phone,l.setName,l.setEmail,l.setPhone,l.setEmailValidation,Object(n.useState)({})),d=Object(o.a)(b,2),u=d[0],m=d[1];return{handleChange:function(e){var t=e.target,c=t.name,a=t.value;j(Object(s.a)(Object(s.a)({},r),{},Object(I.a)({},c,a)))},values:r,errors:u,setErrors:m,callback:e}},T=function(e){var t=e.submitForm,c=O(),i=c.products,r=c.priceCount,s=c.name,j=c.email,l=c.phone,b=c.setName,d=c.setEmail,u=c.setPhone,m=c.setEmailValidation,h=F(t,z),x=h.handleChange,p=h.values,f=h.errors,S=h.setErrors,v=Object(n.useState)(!1),C=Object(o.a)(v,2),N=C[0],y=C[1],E=function(e){console.log(s),g().collection("ventas").add({name:s,email:j,phone:l,items:i,total:r()}).then((function(e){var t=e.id;alert(t)})).catch((function(){alert("Tu compra no se efectu\xf3 con \xe9xito, te pedimos intentar de nuevo")})),S(z(p)),m(""),d(""),b(""),u("")};return Object(a.jsx)("div",{children:N?Object(a.jsx)("div",{children:"Hubo un error"}):Object(a.jsxs)("form",{noValidate:!0,children:[Object(a.jsx)("p",{children:"Para poder realizar la compra, te pedimos rellenar este formulario."}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("label",{children:"Tu nombre"}),Object(a.jsx)("input",{placeholder:"Escribe tu nombre aqu\xed",name:"name",autoComplete:"off",value:p.name,onChange:x}),f.name&&Object(a.jsxs)("span",{children:[f.name," "]})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("label",{children:"Tu e-mail"}),Object(a.jsx)("input",{placeholder:"Coloca tu e-mail aqu\xed",name:"email",autoComplete:"off",onChange:x,value:p.email}),f.email&&Object(a.jsxs)("span",{children:[f.email," "]})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("label",{children:"Confirma tu e-mail"}),Object(a.jsx)("input",{placeholder:"Reescribe tu e-mail",name:"emailValidation",value:p.emailValidation,autoComplete:"off",onChange:x}),f.emailValidation&&Object(a.jsxs)("span",{children:[f.emailValidation," "]})]}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){0===Object.keys(f).length?(E(),console.log("No hay errores")):(y(!0),console.log("Hay"))},className:"button primary margin-20-top",children:"Realizar compra"})})]}),Object(a.jsx)("p",{children:"O tambi\xe9n puedes entrar en contacto con nosotros por medio de Instagram o envi\xe1ndo un mensaje de WhatsApp al +51 949-161-510."})]})})};function B(){return Object(a.jsxs)("div",{className:"no-items-div",children:[Object(a.jsx)("p",{children:"No tienes art\xedculos en el carrito"}),Object(a.jsx)(j.b,{to:"/SCS-Store",className:"button primary",children:"Descubrir prendas"})]})}var A=function(){var e=Object(D.a)("(max-width:768px)"),t=Object(D.a)("(max-width:475px)"),c=O(),i=c.products,r=c.deleteProduct,s=c.priceCount,j=(c.name,c.email,c.phone,Object(n.useState)(!1)),b=Object(o.a)(j,2);b[0],b[1];return Object(a.jsx)(a.Fragment,{children:0===i.length?Object(a.jsx)(B,{}):Object(a.jsxs)("div",{className:"cart",children:[Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{className:"table-header",children:[Object(a.jsx)("th",{children:"Producto"}),t?null:Object(a.jsx)("th",{children:"P. Unit"}),Object(a.jsx)("th",{children:t?"Cant.":"Cantidad"}),Object(a.jsx)("th",{children:"P. Total"}),Object(a.jsx)("th",{})]}),i.map((function(c){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[c.product.product," "]}),t?null:Object(a.jsxs)("td",{children:["s/",c.product.price]}),Object(a.jsx)("td",{children:c.quantity}),Object(a.jsxs)("td",{children:["s/",c.product.price*c.quantity," "]}),Object(a.jsx)("td",{onClick:function(){return function(e){r(e.id)}(c)},children:Object(a.jsx)("span",{className:"eliminate-button",children:e?Object(a.jsx)(l,{iconName:"fas fa-trash"}):"Eliminar"})})]},c.product.id)}))]}),Object(a.jsx)("ul",{className:"total-payment-section",children:Object(a.jsx)("li",{children:Object(a.jsxs)("span",{children:["Total a pagar: s/",s()]})})}),Object(a.jsx)(T,{})]})})},Q=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)(Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){i(!1)}),1e3);case 1:case"end":return e.stop()}}),e)}))),[]),Object(a.jsxs)(a.Fragment,{children:[" ",c?Object(a.jsx)(S,{}):Object(a.jsx)(A,{})]})};function R(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(k.g)().cat;return Object(n.useEffect)((function(){g().collection("json-oficial").where("category","==","".concat(r)).get().then((function(e){var t=e.docs.map((function(e){var t=e.id;return Object(s.a)(Object(s.a)({},e.data()),{},{id:t})}));i(t),console.log(c)}))}),[r]),Object(a.jsx)("div",{children:0===c.length?Object(a.jsx)(S,{}):Object(a.jsx)(p,{products:c})})}var L=function(e){var t=e.detail;return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:t.image})})},U=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=(t[0],t[1]),i=Object(n.useState)({}),r=Object(o.a)(i,2),j=r[0],l=r[1],b=Object(n.useState)([]),d=Object(o.a)(b,2),u=(d[0],d[1]),O=Object(k.g)().iD;return Object(n.useEffect)(Object(E.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=g(),a=t.collection("json-oficial"),a.where("available","==",!0).get().then((function(e){if(e.size){var t=e.docs.map((function(e){var t=e.id;return Object(s.a)(Object(s.a)({},e.data()),{},{id:t})}));u(t),t.forEach((function(e){e.iD===O?(c(!1),l(e)):c(!1)}))}}));case 4:case"end":return e.stop()}}),e)}))),[O]),Object(a.jsx)(L,{detail:j})},H=function(){return Object(a.jsxs)("div",{className:"no-items-div",children:[Object(a.jsx)("p",{children:"La URL que introdujiste es inv\xe1lida."}),Object(a.jsx)(j.b,{to:"/SCS-Store",className:"button primary",children:"Volver al inicio"})]})};var J=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=(t[0],t[1],Object(n.useState)([])),i=Object(o.a)(c,2),r=i[0],l=i[1],b=Object(n.useState)([]),d=Object(o.a)(b,2);return d[0],d[1],Object(n.useEffect)((function(){g().collection("json-oficial").get().then((function(e){if(e.size){var t=e.docs.map((function(e){var t=e.id;return Object(s.a)(Object(s.a)({},e.data()),{},{id:t})}));l(t)}})),console.log(r)}),[]),Object(a.jsx)(u,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h,{}),Object(a.jsxs)(k.d,{children:[Object(a.jsx)(k.b,{path:"/SCS-Store/productos/:category/:iD",component:q}),Object(a.jsx)(k.b,{path:"/",exact:!0,component:C,children:Object(a.jsx)(k.a,{to:"/SCS-Store",exact:!0,component:C})}),Object(a.jsx)(k.b,{path:"/SCS-Store",exact:!0,component:C}),Object(a.jsx)(k.b,{path:"/SCS-Store/imagenes/:iD",exact:!0,component:U}),Object(a.jsx)(k.b,{path:"/SCS-Store/categoria/:cat",exact:!0,component:R}),Object(a.jsx)(k.b,{path:"/SCS-Store/carrito",exact:!0,component:Q}),Object(a.jsx)(k.b,{component:H})]})]})})},$=c(53);r.a.render(Object(a.jsx)($.a,{children:Object(a.jsx)(J,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.af7b0048.chunk.js.map