(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{23:function(e,t,i){e.exports=i(42)},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(20),c=i.n(r),l=i(6),s=(i(28),i(1)),o=i(8),p=i(10),m=[{id:1,title:"Baby Product",imageUrl:"https://i.picsum.photos/id/0/200/200.jpg",route:"shop/babyProduct"},{id:2,title:"Chocolate & Candy",imageUrl:"https://i.picsum.photos/id/10/200/200.jpg",route:"shop/chocolateCandy"},{id:3,title:"Electronics",imageUrl:"https://i.picsum.photos/id/20/200/200.jpg",route:"shop/electronics"},{id:4,title:"Family Planning",imageUrl:"https://i.picsum.photos/id/30/200/200.jpg",route:"shop/familyPlanning"},{id:5,title:"Groceries",imageUrl:"https://i.picsum.photos/id/40/200/200.jpg",route:"shop/groceries"},{id:6,title:"Health & Hygiene",imageUrl:"https://i.picsum.photos/id/50/200/200.jpg",route:"shop/healthHygiene"},{id:7,title:"Medicine",imageUrl:"https://i.picsum.photos/id/60/200/200.jpg",route:"shop/medicine"},{id:8,title:"Lockdown Essentials",imageUrl:"https://i.picsum.photos/id/70/200/200.jpg",route:"shop/lockdownEssentials"},{id:9,title:"Pet Products",imageUrl:"https://i.picsum.photos/id/80/200/200.jpg",route:"shop/petProducts"},{id:10,title:"Office Supplies",imageUrl:"https://i.picsum.photos/id/90/200/200.jpg",route:"shop/officeSupplies"},{id:11,title:"Snacks",imageUrl:"https://i.picsum.photos/id/31/200/200.jpg",route:"shop/snacks"},{id:12,title:"Toiletries",imageUrl:"https://i.picsum.photos/id/33/200/200.jpg",route:"shop/toiletries"},{id:13,title:"Smoking Essentials",imageUrl:"https://i.picsum.photos/id/34/200/200.jpg",route:"shop/smokingEssentials"}];i(29);var u=function(e){var t=e.title,i=e.imageUrl,r=e.price,c=Object(a.useState)(!1),l=Object(p.a)(c,2),s=l[0],o=l[1],m=Object(a.useState)(!1),u=Object(p.a)(m,2),d=u[0],g=u[1];return n.a.createElement("div",{className:"product_item"},n.a.createElement("div",{className:"product_image-wrapper"},n.a.createElement("span",{className:"product_love fas fa-heart ".concat(s&&"active"),onClick:function(){return o(!s)}}),n.a.createElement("div",{className:"product_image",style:{backgroundImage:"url(".concat(i,")")}})),n.a.createElement("div",{className:"product_content"},r?n.a.createElement(a.Fragment,null,n.a.createElement("div",{className:"product_info"},n.a.createElement("span",{className:"product_name"},t),n.a.createElement("span",{className:"product_price"},n.a.createElement("span",{className:"price_sign"},"$"),n.a.createElement("span",{className:"price_number"},r))),!d&&n.a.createElement("div",{className:"product_buy",onClick:function(){return g(!d)}},"Buy"),d&&n.a.createElement("div",{className:"product_quantity-wrapper"},n.a.createElement("span",{className:"minus"},"\u2212"),n.a.createElement("span",{className:"product_quantity"},"10"),n.a.createElement("span",{className:"plus"},"+"))):n.a.createElement("span",{className:"product_name"},t)))};i(30);var d=function(){var e=Object(a.useState)(m),t=Object(p.a)(e,2),i=t[0];return t[1],n.a.createElement("div",{className:"categories-container"},i.map((function(e){var t=e.id,i=Object(o.a)(e,["id"]);return n.a.createElement(u,Object.assign({key:t},i))})))};i(31);var g=function(){return n.a.createElement("div",{className:"homepage"},n.a.createElement(d,null))},h=i(11),b=i(12),f=i(14),v=i(13),E=[{id:1,title:"Baby Product",routeName:"babyProduct",items:[{id:1,title:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,title:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,title:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,title:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,title:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,title:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,title:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,title:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,title:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Chocolate & Candy",routeName:"chocolateCandy",items:[{id:10,title:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,title:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,title:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,title:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,title:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,title:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,title:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,title:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Electronics",routeName:"electronics",items:[{id:18,title:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,title:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,title:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,title:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,title:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Family Planning",routeName:"familyPlanning",items:[{id:23,title:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,title:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,title:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,title:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,title:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,title:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,title:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Groceries",routeName:"groceries",items:[{id:30,title:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,title:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,title:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,title:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,title:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,title:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}];i(32);var y=function(e){var t=e.title,i=e.items;return n.a.createElement("div",{className:"collection-list"},n.a.createElement("div",{className:"collection-name"},t.toUpperCase()),n.a.createElement("div",{className:"collection-items categories-container"},i.filter((function(e,t){return t<4})).map((function(e){var t=e.id,i=Object(o.a)(e,["id"]);return n.a.createElement(u,Object.assign({key:t},i))}))))},k=(i(33),function(e){Object(f.a)(i,e);var t=Object(v.a)(i);function i(){var e;return Object(h.a)(this,i),(e=t.call(this)).state={collections:E},e}return Object(b.a)(i,[{key:"render",value:function(){var e=this.state.collections;return n.a.createElement(a.Fragment,null,n.a.createElement("div",{className:"shop-page-title"},"Collections"),e.map((function(e){var t=e.id,i=Object(o.a)(e,["id"]);return n.a.createElement(y,Object.assign({key:t},i))})))}}]),i}(a.Component)),U=i(21),N=(i(34),function(e){Object(f.a)(i,e);var t=Object(v.a)(i);function i(){var e;return Object(h.a)(this,i),(e=t.call(this)).handleChange=function(t){e.setState(Object(U.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state)},e.state={email:"",password:""},e}return Object(b.a)(i,[{key:"render",value:function(){return n.a.createElement("div",{className:"sign-in-page"},n.a.createElement("div",null,"I alrady have an account"),n.a.createElement("span",null,"Sign in with your email and password"),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"email",name:"email",id:"user-email",onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"user-email"},"Email"),n.a.createElement("input",{type:"password",name:"password",id:"user-pass",onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"user-pass"},"Password"),n.a.createElement("input",{type:"submit",value:"Submit"})))}}]),i}(a.Component));i(35);var j=function(){return n.a.createElement("div",{className:"signin-signup-page"},n.a.createElement("div",{className:"sign-in-wrapper"},n.a.createElement(N,null)),n.a.createElement("div",{className:"sign-up-wrapper"},"SignUp"))};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var O=n.a.createElement("path",{d:"m448.034 177.676v262.38c0 17.67-14.33 32-32 32h-352c-17.67 0-32-14.33-32-32 0-248.047-.021-201.581.07-262.38z",fill:"#d6f4fc"}),S=n.a.createElement("path",{d:"m448.034 177.676v60.598c0 13.114-10.512 23.978-23.626 24.031-.146.001-368.493.001-368.759 0-13.11-.057-23.615-10.921-23.615-24.031 0-17.484-.013-5.22.07-60.598z",fill:"#bdeffc"}),C=n.a.createElement("path",{d:"m321.034 329.056v143h-162v-143c0-17.67 14.33-32 32-32h98c17.67 0 32 14.33 32 32z",fill:"#e8f8fc"}),P=n.a.createElement("path",{d:"m472.034 177.676c0 32.017-25.963 58-58 58-32.03 0-58-25.97-58-58 0 32.03-25.97 58-58 58s-58-25.97-58-58c0 32.03-25.97 58-58 58s-58-25.97-58-58c-.05 31.82-26.24 58-58 58-31.721 0-57.95-26.147-58-58 0-50.408-.138-47.306.35-49.62.48-2.271-2.847 5.77 47.47-110.36 2.54-5.85 8.31-9.64 14.68-9.64h339c6.37 0 12.14 3.79 14.68 9.64 50.354 116.216 46.989 108.087 47.47 110.36.487 2.309.35-.843.35 49.62z",fill:"#ff6d7a"}),J=n.a.createElement("path",{d:"m472.034 177.676c0 32.017-25.963 58-58 58-32.03 0-58-25.97-58-58 0 32.03-25.97 58-58 58s-58-25.97-58-58c0 32.03-25.97 58-58 58s-58-25.97-58-58c-.05 31.82-26.24 58-58 58-31.721 0-57.95-26.147-58-58v-46.3c0-1.12.12-2.23.35-3.32h463.3c.487 2.309.35-.843.35 49.62z",fill:"#fe4f60"}),T=n.a.createElement("path",{d:"m405.211 50.803c-101.577-13.98-204.092 3.951-287.008 66.429-9.333 7.033-20.709 10.823-32.395 10.823h-77.424c.48-2.271-2.847 5.77 47.47-110.36 2.54-5.85 8.31-9.64 14.68-9.64h339c6.376 0 12.143 3.786 14.678 9.636l2.229 5.142c6.246 14.413-5.668 30.112-21.23 27.97z",fill:"#ff7c87"}),_=n.a.createElement("path",{d:"m456.034 271.056v169c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-169c0-4.418 3.582-8 8-8s8 3.582 8 8v169c0 13.234 10.766 24 24 24h87v-135c0-22.056 17.944-40 40-40h98c22.056 0 40 17.944 40 40v103c0 4.418-3.582 8-8 8s-8-3.582-8-8v-103c0-13.233-10.767-24-24-24h-98c-13.233 0-24 10.767-24 24v135h65v-126c0-4.418 3.582-8 8-8s8 3.582 8 8v126h168c13.233 0 24-10.766 24-24v-169c0-4.418 3.582-8 8-8s8 3.581 8 8zm-404-143c0 4.418 3.582 8 8 8 435.268 0 413.687.778 416.867-1.661 1.662-1.279 2.749-3.124 3.047-5.232.446-3.215 3.317 4.691-52.574-124.288-1.269-2.926-4.152-4.819-7.341-4.819h-360c-3.188 0-6.073 1.894-7.34 4.819l-52 120c-.919 2.122-.66-1.246-.66 52.813.058 36.385 29.665 65.987 66 65.987 24.979 0 46.778-13.99 57.983-34.556 25.026 45.99 90.945 46.041 116.017.031 25.052 45.973 90.942 45.983 116 0 11.197 20.548 32.998 34.525 58 34.525 36.393 0 66-29.607 66-66 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 27.57-22.43 50-50 50s-50-22.43-50-50c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 27.57-22.43 50-50 50s-50-22.43-50-50c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 27.57-22.43 50-50 50-26.957 0-50-21.664-50-50.4 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 28.493-22.899 50.4-50 50.4-27.526 0-49.957-22.436-50-50v-47.961l49.253-113.658h349.496l45.066 104h-399.814c-4.419 0-8 3.581-8 8z"}),z=function(e){var t=e.svgRef,i=e.title,a=B(e,["svgRef","title"]);return n.a.createElement("svg",w({id:"Layer_1",enableBackground:"new 0 0 480.111 480.111",height:50,viewBox:"0 0 480.111 480.111",width:50,ref:t},a),i?n.a.createElement("title",null,i):null,O,S,C,P,J,T,_)},F=n.a.forwardRef((function(e,t){return n.a.createElement(z,w({svgRef:t},e))}));i.p,i(36);var W=function(){return n.a.createElement("div",{className:"header"},n.a.createElement(l.b,{className:"logo-container",to:"/"},n.a.createElement(F,{className:"logo"})),n.a.createElement("div",{className:"menu-items"},n.a.createElement(l.b,{className:"menu-item",to:"/shop"},"Shop"),n.a.createElement(l.b,{className:"menu-item",to:"/contact"},"Contact"),n.a.createElement(l.b,{className:"menu-item",to:"/signin"},"SignIn")))};var M=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(W,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:g}),n.a.createElement(s.a,{path:"/shop",component:k}),n.a.createElement(s.a,{path:"/signin",component:j})))};c.a.render(n.a.createElement(l.a,{basename:"/ecommerce"},n.a.createElement(M,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.44642c86.chunk.js.map