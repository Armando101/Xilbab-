function _templateObject(){var a=_taggedTemplateLiteral(["\n        {\n          getCountrys{\n            code\n            bedsTotal\n            bedsAverage\n            populationAverage\n            estimatedBedsTotal\n            estimatedBedsAverage\n            restrictions{\n             description\n             dateStart\n            }\n          }\n        }\n      "]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,n){return n||(n=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(n)}}))}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function _createClass(a,n,e){return n&&_defineProperties(a.prototype,n),e&&_defineProperties(a,e),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"ct+p":function(a,n,e){"use strict";e.r(n);var i,t,r=e("ofXK"),s=e("tyNb"),c=e("lTCR"),o=e.n(c),b=e("fXoL"),l=e("Ri1u"),u=e("mqnr"),d=e("QRGM"),f=e("/IUn"),m=e("2Vo4"),h=((t=function(){function a(){_classCallCheck(this,a),this.hideOverlayService$=new m.a({country:"ad",status:!1})}return _createClass(a,[{key:"getObservable",value:function(){return this.hideOverlayService$.asObservable()}},{key:"enviarData",value:function(a){this.hideOverlayService$.next(a)}}]),a}()).\u0275fac=function(a){return new(a||t)},t.\u0275prov=b.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t),v=((i=function(){function a(){_classCallCheck(this,a),this.codes=[["Afghanistan","AF"],["\xc3\u2026land Islands","AX"],["Albania","AL"],["Algeria","DZ"],["American Samoa","AS"],["Andorra","AD"],["Angola","AO"],["Anguilla","AI"],["Antarctica","AQ"],["Antigua and Barbuda","AG"],["Argentina","AR"],["Armenia","AM"],["Aruba","AW"],["Australia","AU"],["Austria","AT"],["Azerbaijan","AZ"],["Bahamas","BS"],["Bahrain","BH"],["Bangladesh","BD"],["Barbados","BB"],["Belarus","BY"],["Belgium","BE"],["Belize","BZ"],["Benin","BJ"],["Bermuda","BM"],["Bhutan","BT"],["Bolivia, Plurinational State of","BO"],["Bonaire, Sint Eustatius and Saba","BQ"],["Bosnia and Herzegovina","BA"],["Botswana","BW"],["Bouvet Island","BV"],["Brazil","BR"],["British Indian Ocean Territory","IO"],["Brunei Darussalam","BN"],["Bulgaria","BG"],["Burkina Faso","BF"],["Burundi","BI"],["Cambodia","KH"],["Cameroon","CM"],["Canada","CA"],["Cape Verde","CV"],["Cayman Islands","KY"],["Central African Republic","CF"],["Chad","TD"],["Chile","CL"],["China","CN"],["Christmas Island","CX"],["Cocos (Keeling) Islands","CC"],["Colombia","CO"],["Comoros","KM"],["Congo","CG"],["Congo, the Democratic Republic of the","CD"],["Cook Islands","CK"],["Costa Rica","CR"],["C\xc3\xb4te d'Ivoire","CI"],["Croatia","HR"],["Cuba","CU"],["Cura\xc3\xa7ao","CW"],["Cyprus","CY"],["Czech Republic","CZ"],["Denmark","DK"],["Djibouti","DJ"],["Dominica","DM"],["Dominican Republic","DO"],["Ecuador","EC"],["Egypt","EG"],["El Salvador","SV"],["Equatorial Guinea","GQ"],["Eritrea","ER"],["Estonia","EE"],["Ethiopia","ET"],["Falkland Islands (Malvinas)","FK"],["Faroe Islands","FO"],["Fiji","FJ"],["Finland","FI"],["France","FR"],["French Guiana","GF"],["French Polynesia","PF"],["French Southern Territories","TF"],["Gabon","GA"],["Gambia","GM"],["Georgia","GE"],["Germany","DE"],["Ghana","GH"],["Gibraltar","GI"],["Greece","GR"],["Greenland","GL"],["Grenada","GD"],["Guadeloupe","GP"],["Guam","GU"],["Guatemala","GT"],["Guernsey","GG"],["Guinea","GN"],["Guinea-Bissau","GW"],["Guyana","GY"],["Haiti","HT"],["Heard Island and McDonald Islands","HM"],["Holy See (Vatican City State)","VA"],["Honduras","HN"],["Hong Kong","HK"],["Hungary","HU"],["Iceland","IS"],["India","IN"],["Indonesia","ID"],["Iran Islamic Republic of","IR"],["Iraq","IQ"],["Ireland","IE"],["Isle of Man","IM"],["Israel","IL"],["Italy","IT"],["Jamaica","JM"],["Japan","JP"],["Jersey","JE"],["Jordan","JO"],["Kazakhstan","KZ"],["Kenya","KE"],["Kiribati","KI"],["Korea Democratic People's Republic of","KP"],["Korea Republic of","KR"],["Kuwait","KW"],["Kyrgyzstan","KG"],["Lao People's Democratic Republic","LA"],["Latvia","LV"],["Lebanon","LB"],["Lesotho","LS"],["Liberia","LR"],["Libya","LY"],["Liechtenstein","LI"],["Lithuania","LT"],["Luxembourg","LU"],["Macao","MO"],["Macedonia, the Former Yugoslav Republic of","MK"],["Madagascar","MG"],["Malawi","MW"],["Malaysia","MY"],["Maldives","MV"],["Mali","ML"],["Malta","MT"],["Marshall Islands","MH"],["Martinique","MQ"],["Mauritania","MR"],["Mauritius","MU"],["Mayotte","YT"],["Mexico","MX"],["Micronesia, Federated States of","FM"],["Moldova, Republic of","MD"],["Monaco","MC"],["Mongolia","MN"],["Montenegro","ME"],["Montserrat","MS"],["Morocco","MA"],["Mozambique","MZ"],["Myanmar","MM"],["Namibia","NA"],["Nauru","NR"],["Nepal","NP"],["Netherlands","NL"],["New Caledonia","NC"],["New Zealand","NZ"],["Nicaragua","NI"],["Niger","NE"],["Nigeria","NG"],["Niue","NU"],["Norfolk Island","NF"],["Northern Mariana Islands","MP"],["Norway","NO"],["Oman","OM"],["Pakistan","PK"],["Palau","PW"],["Palestine, State of","PS"],["Panama","PA"],["Papua New Guinea","PG"],["Paraguay","PY"],["Peru","PE"],["Philippines","PH"],["Pitcairn","PN"],["Poland","PL"],["Portugal","PT"],["Puerto Rico","PR"],["Qatar","QA"],["R\xc3\xa9union","RE"],["Romania","RO"],["Russian Federation","RU"],["Rwanda","RW"],["Saint Barth\xc3\xa9lemy","BL"],["Saint Helena, Ascension and Tristan da Cunha","SH"],["Saint Kitts and Nevis","KN"],["Saint Lucia","LC"],["Saint Martin (French part)","MF"],["Saint Pierre and Miquelon","PM"],["Saint Vincent and the Grenadines","VC"],["Samoa","WS"],["San Marino","SM"],["Sao Tome and Principe","ST"],["Saudi Arabia","SA"],["Senegal","SN"],["Serbia","RS"],["Seychelles","SC"],["Sierra Leone","SL"],["Singapore","SG"],["Sint Maarten (Dutch part)","SX"],["Slovakia","SK"],["Slovenia","SI"],["Solomon Islands","SB"],["Somalia","SO"],["South Africa","ZA"],["South Georgia and the South Sandwich Islands","GS"],["South Sudan","SS"],["Spain","ES"],["Sri Lanka","LK"],["Sudan","SD"],["Suriname","SR"],["Svalbard and Jan Mayen","SJ"],["Swaziland","SZ"],["Sweden","SE"],["Switzerland","CH"],["Syrian Arab Republic","SY"],["Taiwan, Province of China","TW"],["Tajikistan","TJ"],["Tanzania, United Republic of","TZ"],["Thailand","TH"],["Timor-Leste","TL"],["Togo","TG"],["Tokelau","TK"],["Tonga","TO"],["Trinidad and Tobago","TT"],["Tunisia","TN"],["Turkey","TR"],["Turkmenistan","TM"],["Turks and Caicos Islands","TC"],["Tuvalu","TV"],["Uganda","UG"],["Ukraine","UA"],["United Arab Emirates","AE"],["United Kingdom","GB"],["United States","US"],["United States Minor Outlying Islands","UM"],["Uruguay","UY"],["Uzbekistan","UZ"],["Vanuatu","VU"],["Venezuela, Bolivarian Republic of","VE"],["Viet Nam","VN"],["Virgin Islands, British","VG"],["Virgin Islands, U.S.","VI"],["Wallis and Futuna","WF"],["Western Sahara","EH"],["Yemen","YE"],["Zambia","ZM"],["Zimbabwe","ZW"]]}return _createClass(a,[{key:"transform",value:function(a){return this.codes.find((function(n){return n[1]==a}))[0]}}]),a}()).\u0275fac=function(a){return new(a||i)},i.\u0275pipe=b.Ib({name:"codeCountry",type:i,pure:!0}),i);function p(a,n){1&a&&(b.Mb(0,"p"),b.lc(1,"No measure registered"),b.Lb())}function g(a,n){if(1&a){var e=b.Nb();b.Mb(0,"i",12),b.Ub("click",(function(){return b.hc(e),b.Wb(2).more()})),b.Lb()}}function M(a,n){if(1&a){var e=b.Nb();b.Mb(0,"i",13),b.Ub("click",(function(){return b.hc(e),b.Wb(2).more()})),b.Lb()}}function y(a,n){if(1&a&&(b.Mb(0,"p"),b.Mb(1,"span",7),b.lc(2),b.Lb(),b.lc(3),b.Lb()),2&a){var e=b.Wb(2);b.zb(2),b.mc(e.information.restrictions[0].dateStart),b.zb(1),b.nc(" ",e.information.restrictions[0].description,"")}}function C(a,n){if(1&a&&(b.Mb(0,"div"),b.Mb(1,"p"),b.Mb(2,"span",7),b.lc(3),b.Lb(),b.lc(4),b.Lb(),b.Lb()),2&a){var e=n.$implicit;b.zb(3),b.mc(e.dateStart),b.zb(1),b.nc(" ",e.description,"")}}function S(a,n){if(1&a&&(b.Mb(0,"div",14),b.kc(1,C,5,2,"div",15),b.Lb()),2&a){var e=b.Wb(2);b.zb(1),b.cc("ngForOf",e.information.restrictions)}}function L(a,n){if(1&a&&(b.Mb(0,"div",8),b.kc(1,g,1,0,"i",9),b.kc(2,M,1,0,"i",10),b.kc(3,y,4,2,"p",5),b.kc(4,S,2,1,"div",11),b.Lb()),2&a){var e=b.Wb();b.zb(1),b.cc("ngIf",!e.showMore),b.zb(1),b.cc("ngIf",e.showMore),b.zb(1),b.cc("ngIf",!e.showMore),b.zb(1),b.cc("ngIf",e.showMore)}}var _,I,k=function(a){return{show__overlay:a}},O=((I=function(){function a(n){_classCallCheck(this,a),this._hideOverlayService=n,this.showMore=!1,this.showOverlay=!1}return _createClass(a,[{key:"ngOnInit",value:function(){var a=this;this._hideOverlayService.getObservable().subscribe((function(n){n.country==a.information.code&&(a.showOverlay=n.status)}))}},{key:"hide",value:function(){this._hideOverlayService.enviarData({country:this.information.code,status:!1})}},{key:"more",value:function(){this.showMore=!this.showMore}}]),a}()).\u0275fac=function(a){return new(a||I)(b.Jb(h))},I.\u0275cmp=b.Db({type:I,selectors:[["app-overlay"]],inputs:{information:"information"},decls:45,vars:30,consts:[[1,"camas__overlay",3,"ngClass"],["id","overlay",1,"overlay","active","back"],["id","modal",1,"modal"],["id","close",1,"close",3,"click"],[1,"overlay__content__main"],[4,"ngIf"],["class","showMeauses",4,"ngIf"],[1,"note"],[1,"showMeauses"],["class","icon-plus burger-button burguer-button--show","id","burger-menu",3,"click",4,"ngIf"],["class","icon-minus burger-button burguer-button--show","id","burger-menu",3,"click",4,"ngIf"],["class","measure",4,"ngIf"],["id","burger-menu",1,"icon-plus","burger-button","burguer-button--show",3,"click"],["id","burger-menu",1,"icon-minus","burger-button","burguer-button--show",3,"click"],[1,"measure"],[4,"ngFor","ngForOf"]],template:function(a,n){1&a&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"div",3),b.Ub("click",(function(){return n.hide()})),b.lc(4," x "),b.Lb(),b.Mb(5,"h1"),b.lc(6),b.Xb(7,"codeCountry"),b.Xb(8,"uppercase"),b.Lb(),b.Mb(9,"p"),b.lc(10,"Showing the number of beds available in hospitals in the face of the COVID-19 pandemic."),b.Lb(),b.Mb(11,"div",4),b.Mb(12,"p"),b.Mb(13,"span"),b.lc(14,"Population:"),b.Lb(),b.lc(15),b.Xb(16,"number"),b.Lb(),b.Mb(17,"p"),b.Mb(18,"span"),b.lc(19,"Total beds:"),b.Lb(),b.lc(20),b.Xb(21,"number"),b.Lb(),b.Lb(),b.Mb(22,"div",4),b.Mb(23,"p"),b.Mb(24,"span"),b.lc(25,"Avarage beds:"),b.Lb(),b.lc(26),b.Xb(27,"number"),b.Lb(),b.Mb(28,"p"),b.Mb(29,"span"),b.lc(30,"Total estimated beds:"),b.Lb(),b.lc(31),b.Xb(32,"number"),b.Lb(),b.Mb(33,"p"),b.Mb(34,"span"),b.lc(35,"Avarage estimated beds:"),b.Lb(),b.lc(36),b.Xb(37,"number"),b.Lb(),b.Lb(),b.Mb(38,"div",4),b.Mb(39,"h2"),b.lc(40,"Measures taken"),b.Lb(),b.kc(41,p,2,0,"p",5),b.kc(42,L,5,4,"div",6),b.Lb(),b.Mb(43,"p",7),b.lc(44,"*Availability of beds per 1000 inhabitants"),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&a&&(b.cc("ngClass",b.ec(28,k,n.showOverlay)),b.zb(6),b.mc(b.Yb(7,9,b.Yb(8,11,n.information.code))),b.zb(9),b.nc(" ",b.Zb(16,13,n.information.populationAverage,"1.0-2")," "),b.zb(5),b.nc(" ",b.Zb(21,16,n.information.bedsTotal,"1.0-2")," "),b.zb(6),b.nc(" ",b.Zb(27,19,n.information.bedsAverage,"1.0-2")," "),b.zb(5),b.nc(" ",b.Zb(32,22,n.information.estimatedBedsTotal,"1.0-2")," "),b.zb(5),b.nc(" ",b.Zb(37,25,n.information.estimatedBedsAverage,"1.0-2")," "),b.zb(5),b.cc("ngIf",0==n.information.restrictions.length),b.zb(1),b.cc("ngIf",n.information.restrictions.length>0))},directives:[r.i,r.k,r.j],pipes:[v,r.n,r.d],styles:[""]}),I),w=((_=function(){function a(n){_classCallCheck(this,a),this._hideOverlayService=n,this.showOverlay=!1}return _createClass(a,[{key:"ngOnInit",value:function(){var a=this;this._hideOverlayService.getObservable().subscribe((function(n){n.country==a.information.code&&(a.showOverlay=n.status)}))}},{key:"overlay",value:function(){this.showOverlay?(this.showOverlay=!1,this._hideOverlayService.enviarData({country:this.information.code,status:!1})):(this.showOverlay=!0,this._hideOverlayService.enviarData({country:this.information.code,status:!0}))}}]),a}()).\u0275fac=function(a){return new(a||_)(b.Jb(h))},_.\u0275cmp=b.Db({type:_,selectors:[["app-cama"]],inputs:{information:"information"},decls:10,vars:10,consts:[["id","burger-menu",1,"icon-info","burger-button","burguer-button--show",3,"click"],[1,"camas__country"],[1,"camas__amount"],[3,"information"]],template:function(a,n){1&a&&(b.Mb(0,"i",0),b.Ub("click",(function(){return n.overlay()})),b.Lb(),b.Mb(1,"span",1),b.lc(2),b.Xb(3,"codeCountry"),b.Xb(4,"uppercase"),b.Lb(),b.Mb(5,"span",2),b.lc(6),b.Xb(7,"number"),b.Lb(),b.Mb(8,"div"),b.Kb(9,"app-overlay",3),b.Lb()),2&a&&(b.zb(2),b.mc(b.Yb(3,3,b.Yb(4,5,n.information.code))),b.zb(4),b.mc(b.Zb(7,7,n.information.bedsTotal,"1.0-2")),b.zb(3),b.cc("information",n.information))},directives:[O],pipes:[v,r.n,r.d],styles:[""]}),_);function A(a,n){if(1&a&&(b.Mb(0,"div",2),b.Kb(1,"app-cama",3),b.Lb()),2&a){var e=n.$implicit;b.zb(1),b.cc("information",e)}}var T,z=((T=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(a){return new(a||T)},T.\u0275cmp=b.Db({type:T,selectors:[["app-camas"]],inputs:{camas:"camas"},decls:2,vars:1,consts:[[1,"Camas"],["class","camas__container",4,"ngFor","ngForOf"],[1,"camas__container"],[3,"information"]],template:function(a,n){1&a&&(b.Mb(0,"div",0),b.kc(1,A,2,1,"div",1),b.Lb()),2&a&&(b.zb(1),b.cc("ngForOf",n.camas))},directives:[r.j,w],styles:[""]}),T);function G(a,n){1&a&&(b.Mb(0,"span",4),b.lc(1,"No hay medidas registradas"),b.Lb())}function B(a,n){if(1&a&&(b.Mb(0,"span",4),b.lc(1),b.Lb()),2&a){var e=b.Wb().$implicit;b.zb(1),b.mc(e.restrictions[0].description)}}function N(a,n){if(1&a&&(b.Mb(0,"div",2),b.kc(1,G,2,0,"span",3),b.kc(2,B,2,1,"span",3),b.Lb()),2&a){var e=n.$implicit;b.zb(1),b.cc("ngIf",0==e.restrictions.length),b.zb(1),b.cc("ngIf",e.restrictions[0])}}var F,K,P=((K=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(a){return new(a||K)},K.\u0275cmp=b.Db({type:K,selectors:[["app-medidas"]],inputs:{medidas:"medidas"},decls:2,vars:1,consts:[[1,"Medidas"],["class","medidas__container",4,"ngFor","ngForOf"],[1,"medidas__container"],["class","medidas__country",4,"ngIf"],[1,"medidas__country"]],template:function(a,n){1&a&&(b.Mb(0,"div",0),b.kc(1,N,3,2,"div",1),b.Lb()),2&a&&(b.zb(1),b.cc("ngForOf",n.medidas))},directives:[r.j,r.k],styles:[""]}),K),R=((F=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(a){return new(a||F)},F.\u0275cmp=b.Db({type:F,selectors:[["app-loading"]],decls:4,vars:0,consts:[[1,"overlay","active","loading"],["src","../../../../assets/loading.png","alt","loading..."]],template:function(a,n){1&a&&(b.Mb(0,"div",0),b.Kb(1,"img",1),b.Mb(2,"h1"),b.lc(3,"Loading... "),b.Lb(),b.Lb())},styles:[""]}),F);function D(a,n){1&a&&(b.Mb(0,"span"),b.lc(1,"No hay medidas registradas"),b.Lb())}function E(a,n){if(1&a&&(b.Mb(0,"span"),b.lc(1),b.Lb()),2&a){var e=b.Wb();b.zb(1),b.mc(e.information.restrictions[0].description)}}function U(a,n){if(1&a&&(b.Mb(0,"div"),b.Kb(1,"app-overlay",2),b.Lb()),2&a){var e=b.Wb();b.zb(1),b.cc("information",e.information)}}var H,J=((H=function(){function a(n){_classCallCheck(this,a),this._hideOverlayService=n,this.showOverlay=!1}return _createClass(a,[{key:"ngOnInit",value:function(){var a=this;this._hideOverlayService.getObservable().subscribe((function(n){a.showOverlay=n.status}))}},{key:"overlay",value:function(){this._hideOverlayService.enviarData(this.showOverlay?{country:this.information.code,status:!1}:{country:this.information.code,status:!0})}}]),a}()).\u0275fac=function(a){return new(a||H)(b.Jb(h))},H.\u0275cmp=b.Db({type:H,selectors:[["app-medida-cama"]],inputs:{information:"information"},decls:13,vars:12,consts:[["id","burger-menu",1,"icon-info","burger-button","burguer-button--show",3,"click"],[4,"ngIf"],[3,"information"]],template:function(a,n){1&a&&(b.Mb(0,"i",0),b.Ub("click",(function(){return n.overlay()})),b.Lb(),b.Mb(1,"h2"),b.lc(2),b.Xb(3,"codeCountry"),b.Xb(4,"uppercase"),b.Lb(),b.Mb(5,"span"),b.lc(6),b.Xb(7,"number"),b.Lb(),b.Mb(8,"h2"),b.lc(9,"Medidas"),b.Lb(),b.kc(10,D,2,0,"span",1),b.kc(11,E,2,1,"span",1),b.kc(12,U,2,1,"div",1)),2&a&&(b.zb(2),b.mc(b.Yb(3,5,b.Yb(4,7,n.information.code))),b.zb(4),b.nc("",b.Zb(7,9,n.information.bedsTotal,"1.0-2")," camas"),b.zb(4),b.cc("ngIf",0==n.information.restrictions.length),b.zb(1),b.cc("ngIf",n.information.restrictions[0]),b.zb(1),b.cc("ngIf",n.showOverlay))},directives:[r.k,O],pipes:[v,r.n,r.d],styles:[""]}),H);function V(a,n){if(1&a&&(b.Mb(0,"div",2),b.Kb(1,"app-medida-cama",3),b.Lb()),2&a){var e=n.$implicit;b.zb(1),b.cc("information",e)}}var W,Z=((W=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(a){return new(a||W)},W.\u0275cmp=b.Db({type:W,selectors:[["app-medidas-camas"]],inputs:{camas:"camas"},decls:2,vars:1,consts:[[1,"Medidas"],["class","medidas-camas",4,"ngFor","ngForOf"],[1,"medidas-camas"],[3,"information"]],template:function(a,n){1&a&&(b.Mb(0,"div",0),b.kc(1,V,2,1,"div",1),b.Lb()),2&a&&(b.zb(1),b.cc("ngForOf",n.camas))},directives:[r.j,J],styles:[""]}),W);function X(a,n){1&a&&(b.Mb(0,"div",8),b.Mb(1,"p"),b.lc(2,"Not Found Country"),b.Lb(),b.Lb())}function Y(a,n){1&a&&(b.Mb(0,"div",9),b.Kb(1,"app-loading"),b.Lb())}function j(a,n){if(1&a&&(b.Mb(0,"div",10),b.Kb(1,"app-medidas-camas",4),b.Lb()),2&a){var e=b.Wb();b.zb(1),b.cc("camas",e.camas)}}var Q,$,q=function(a){return{"highlight-cards":a}},x=[{path:"",component:(Q=function(){function a(n,e,i,t){_classCallCheck(this,a),this._medidasService=n,this._camasService=e,this._highlight=i,this._apollo=t,this.beds=Number}return _createClass(a,[{key:"ngOnInit",value:function(){var a=this;this._camasService.getObservable().subscribe((function(n){a.notFoundMessage=n,a.camas=a._camasService.getCamas()})),this._medidasService.getObservable().subscribe((function(n){a.medidas=a._medidasService.getMedidas()})),this._apollo.watchQuery({query:o.a(_templateObject())}).valueChanges.subscribe((function(n){var e=n.data;a._camasService.setCamas2(e.getCountrys),a.camas=a._camasService.getCamas()})),this._highlight.getObservable().subscribe((function(n){a.highlight_camas=n})),console.log("Dashboard iniciado")}}]),a}(),Q.\u0275fac=function(a){return new(a||Q)(b.Jb(l.a),b.Jb(u.a),b.Jb(d.a),b.Jb(f.b))},Q.\u0275cmp=b.Db({type:Q,selectors:[["app-dashboard"]],decls:16,vars:11,consts:[[1,"dashboard"],["class","notFoundMessage",4,"ngIf"],["class","loading",4,"ngIf"],[1,"dashboard__cards","camas",3,"ngClass"],[3,"camas"],[1,"dashboard__cards","medidas",3,"ngClass"],[3,"medidas"],["class","dashboard__cards--medidas_camas",4,"ngIf"],[1,"notFoundMessage"],[1,"loading"],[1,"dashboard__cards--medidas_camas"]],template:function(a,n){1&a&&(b.Mb(0,"div",0),b.kc(1,X,3,0,"div",1),b.kc(2,Y,2,0,"div",2),b.Mb(3,"div",3),b.Mb(4,"h2"),b.lc(5,"Availability of beds per 1000 inhabitants"),b.Lb(),b.Kb(6,"hr"),b.Kb(7,"br"),b.Kb(8,"app-camas",4),b.Lb(),b.Mb(9,"div",5),b.Mb(10,"h2"),b.lc(11,"Measures taken in different countries"),b.Lb(),b.Kb(12,"hr"),b.Kb(13,"br"),b.Kb(14,"app-medidas",6),b.Lb(),b.kc(15,j,2,1,"div",7),b.Lb()),2&a&&(b.zb(1),b.cc("ngIf",n.notFoundMessage),b.zb(1),b.cc("ngIf",0==n.camas.length),b.zb(1),b.cc("ngClass",b.ec(7,q,!n.highlight_camas)),b.zb(5),b.cc("camas",n.camas),b.zb(1),b.cc("ngClass",b.ec(9,q,n.highlight_camas)),b.zb(5),b.cc("medidas",n.camas),b.zb(1),b.cc("ngIf",n.camas.length>0))},directives:[r.k,r.i,z,P,R,Z],styles:[""]}),Q)}],aa=(($=function a(){_classCallCheck(this,a)}).\u0275mod=b.Hb({type:$}),$.\u0275inj=b.Gb({factory:function(a){return new(a||$)},imports:[[s.b.forChild(x)],s.b]}),$),na=e("PCNd");e.d(n,"HomeModule",(function(){return ia}));var ea,ia=((ea=function a(){_classCallCheck(this,a)}).\u0275mod=b.Hb({type:ea}),ea.\u0275inj=b.Gb({factory:function(a){return new(a||ea)},imports:[[r.b,aa,na.a]]}),ea)}}]);