(function(F,Oe){typeof exports=="object"&&typeof module<"u"?Oe(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],Oe):(F=typeof globalThis<"u"?globalThis:F||self,Oe(F.VueGanttastic={},F.dayjs,F.Vue))})(this,function(F,Oe,n){"use strict";const G=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(Oe);var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jt={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){var r="day";return function(o,a,l){var i=function(f){return f.add(4-f.isoWeekday(),r)},c=a.prototype;c.isoWeekYear=function(){return i(this).year()},c.isoWeek=function(f){if(!this.$utils().u(f))return this.add(7*(f-this.isoWeek()),r);var u,y,x,k,C=i(this),m=(u=this.isoWeekYear(),y=this.$u,x=(y?l.utc:l)().year(u).startOf("year"),k=4-x.isoWeekday(),x.isoWeekday()>4&&(k+=7),x.add(k,r));return C.diff(m,"week")+1},c.isoWeekday=function(f){return this.$utils().u(f)?this.day()||7:this.day(this.day()%7?f:f-7)};var d=c.startOf;c.startOf=function(f,u){var y=this.$utils(),x=!!y.u(u)||u;return y.p(f)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(f,u)}}})})(jt);const tr=jt.exports;var It={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o){o.prototype.isSameOrBefore=function(a,l){return this.isSame(a,l)||this.isBefore(a,l)}}})})(It);const nr=It.exports;var Ht={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o){o.prototype.isSameOrAfter=function(a,l){return this.isSame(a,l)||this.isAfter(a,l)}}})})(Ht);const rr=Ht.exports;var zt={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o,a){o.prototype.isBetween=function(l,i,c,d){var f=a(l),u=a(i),y=(d=d||"()")[0]==="(",x=d[1]===")";return(y?this.isAfter(f,c):!this.isBefore(f,c))&&(x?this.isBefore(u,c):!this.isAfter(u,c))||(y?this.isBefore(f,c):!this.isAfter(f,c))&&(x?this.isAfter(u,c):!this.isBefore(u,c))}}})})(zt);const Gt=zt.exports;var Yt={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){var r="week",o="year";return function(a,l,i){var c=l.prototype;c.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var f=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=i(this).startOf(o).add(1,o).date(f),y=i(this).endOf(r);if(u.isBefore(y))return 1}var x=i(this).startOf(o).date(f).startOf(r).subtract(1,"millisecond"),k=this.diff(x,r,!0);return k<0?i(this).startOf("week").week():Math.ceil(k)},c.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Yt);const or=Yt.exports;var Ft={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o,a){var l=o.prototype,i=l.format;a.en.ordinal=function(c){var d=["th","st","nd","rd"],f=c%100;return"["+c+(d[(f-20)%10]||d[f]||d[0])+"]"},l.format=function(c){var d=this,f=this.$locale();if(!this.isValid())return i.bind(this)(c);var u=this.$utils(),y=(c||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(x){switch(x){case"Q":return Math.ceil((d.$M+1)/3);case"Do":return f.ordinal(d.$D);case"gggg":return d.weekYear();case"GGGG":return d.isoWeekYear();case"wo":return f.ordinal(d.week(),"W");case"w":case"ww":return u.s(d.week(),x==="w"?1:2,"0");case"W":case"WW":return u.s(d.isoWeek(),x==="W"?1:2,"0");case"k":case"kk":return u.s(String(d.$H===0?24:d.$H),x==="k"?1:2,"0");case"X":return Math.floor(d.$d.getTime()/1e3);case"x":return d.$d.getTime();case"z":return"["+d.offsetName()+"]";case"zzz":return"["+d.offsetName("long")+"]";default:return x}});return i.bind(this)(y)}}})})(Ft);const ar=Ft.exports;var Ut={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},o=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,l=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,c={},d=function(m){return(m=+m)+(m>68?1900:2e3)},f=function(m){return function(O){this[m]=+O}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=function(O){if(!O||O==="Z")return 0;var g=O.match(/([+-]|\d\d)/g),p=60*g[1]+(+g[2]||0);return p===0?0:g[0]==="+"?-p:p}(m)}],y=function(m){var O=c[m];return O&&(O.indexOf?O:O.s.concat(O.f))},x=function(m,O){var g,p=c.meridiem;if(p){for(var E=1;E<=24;E+=1)if(m.indexOf(p(E,0,O))>-1){g=E>12;break}}else g=m===(O?"pm":"PM");return g},k={A:[i,function(m){this.afternoon=x(m,!1)}],a:[i,function(m){this.afternoon=x(m,!0)}],S:[/\d/,function(m){this.milliseconds=100*+m}],SS:[a,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[l,f("seconds")],ss:[l,f("seconds")],m:[l,f("minutes")],mm:[l,f("minutes")],H:[l,f("hours")],h:[l,f("hours")],HH:[l,f("hours")],hh:[l,f("hours")],D:[l,f("day")],DD:[a,f("day")],Do:[i,function(m){var O=c.ordinal,g=m.match(/\d+/);if(this.day=g[0],O)for(var p=1;p<=31;p+=1)O(p).replace(/\[|\]/g,"")===m&&(this.day=p)}],M:[l,f("month")],MM:[a,f("month")],MMM:[i,function(m){var O=y("months"),g=(y("monthsShort")||O.map(function(p){return p.slice(0,3)})).indexOf(m)+1;if(g<1)throw new Error;this.month=g%12||g}],MMMM:[i,function(m){var O=y("months").indexOf(m)+1;if(O<1)throw new Error;this.month=O%12||O}],Y:[/[+-]?\d+/,f("year")],YY:[a,function(m){this.year=d(m)}],YYYY:[/\d{4}/,f("year")],Z:u,ZZ:u};function C(m){var O,g;O=m,g=c&&c.formats;for(var p=(m=O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,D,S){var M=S&&S.toUpperCase();return D||g[S]||r[S]||g[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function($,R,H){return R||H.slice(1)})})).match(o),E=p.length,s=0;s<E;s+=1){var b=p[s],w=k[b],v=w&&w[0],_=w&&w[1];p[s]=_?{regex:v,parser:_}:b.replace(/^\[|\]$/g,"")}return function(P){for(var D={},S=0,M=0;S<E;S+=1){var $=p[S];if(typeof $=="string")M+=$.length;else{var R=$.regex,H=$.parser,I=P.slice(M),V=R.exec(I)[0];H.call(D,V),P=P.replace(V,"")}}return function(j){var z=j.afternoon;if(z!==void 0){var Y=j.hours;z?Y<12&&(j.hours+=12):Y===12&&(j.hours=0),delete j.afternoon}}(D),D}}return function(m,O,g){g.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(d=m.parseTwoDigitYear);var p=O.prototype,E=p.parse;p.parse=function(s){var b=s.date,w=s.utc,v=s.args;this.$u=w;var _=v[1];if(typeof _=="string"){var P=v[2]===!0,D=v[3]===!0,S=P||D,M=v[2];D&&(M=v[2]),c=this.$locale(),!P&&M&&(c=g.Ls[M]),this.$d=function(I,V,j){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*I);var z=C(V)(I),Y=z.year,ee=z.month,te=z.day,ge=z.hours,ie=z.minutes,X=z.seconds,se=z.milliseconds,me=z.zone,Q=new Date,pe=te||(Y||ee?1:Q.getDate()),ne=Y||Q.getFullYear(),le=0;Y&&!ee||(le=ee>0?ee-1:Q.getMonth());var we=ge||0,he=ie||0,xe=X||0,ke=se||0;return me?new Date(Date.UTC(ne,le,pe,we,he,xe,ke+60*me.offset*1e3)):j?new Date(Date.UTC(ne,le,pe,we,he,xe,ke)):new Date(ne,le,pe,we,he,xe,ke)}catch{return new Date("")}}(b,_,w),this.init(),M&&M!==!0&&(this.$L=this.locale(M).$L),S&&b!=this.format(_)&&(this.$d=new Date("")),c={}}else if(_ instanceof Array)for(var $=_.length,R=1;R<=$;R+=1){v[1]=_[R-1];var H=g.apply(this,v);if(H.isValid()){this.$d=H.$d,this.$L=H.$L,this.init();break}R===$&&(this.$d=new Date(""))}else E.call(this,s)}}})})(Ut);const ir=Ut.exports;var Wt;const ze=typeof window<"u";ze&&((Wt=window==null?void 0:window.navigator)==null?void 0:Wt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function sr(e){return typeof e=="function"?e():n.unref(e)}function lr(e){return e}function cr(e){return n.getCurrentScope()?(n.onScopeDispose(e),!0):!1}function dr(e,t=!0){n.getCurrentInstance()?n.onMounted(e):t?e():n.nextTick(e)}function qt(e){var t;const r=sr(e);return(t=r==null?void 0:r.$el)!=null?t:r}const ur=ze?window:void 0;ze&&window.document,ze&&window.navigator,ze&&window.location;function fr(e,t=!1){const r=n.ref(),o=()=>r.value=Boolean(e());return o(),dr(o,t),r}const vt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt="__vueuse_ssr_handlers__";vt[yt]=vt[yt]||{},vt[yt];var Xt=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable,mr=(e,t)=>{var r={};for(var o in e)pr.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&Xt)for(var o of Xt(e))t.indexOf(o)<0&&gr.call(e,o)&&(r[o]=e[o]);return r};function hr(e,t,r={}){const o=r,{window:a=ur}=o,l=mr(o,["window"]);let i;const c=fr(()=>a&&"ResizeObserver"in a),d=()=>{i&&(i.disconnect(),i=void 0)},f=n.watch(()=>qt(e),y=>{d(),c.value&&a&&y&&(i=new ResizeObserver(t),i.observe(y,l))},{immediate:!0,flush:"post"}),u=()=>{d(),f()};return cr(u),{isSupported:c,stop:u}}function Qt(e,t={width:0,height:0},r={}){const o=n.ref(t.width),a=n.ref(t.height);return hr(e,([l])=>{o.value=l.contentRect.width,a.value=l.contentRect.height},r),n.watch(()=>qt(e),l=>{o.value=l?t.width:0,a.value=l?t.height:0}),{width:o,height:a}}var Kt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Kt||(Kt={}));var vr=Object.defineProperty,Zt=Object.getOwnPropertySymbols,yr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,Jt=(e,t,r)=>t in e?vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wr=(e,t)=>{for(var r in t||(t={}))yr.call(t,r)&&Jt(e,r,t[r]);if(Zt)for(var r of Zt(t))br.call(t,r)&&Jt(e,r,t[r]);return e};wr({linear:lr},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const en={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},tn=Symbol("CHART_ROWS_KEY"),nn=Symbol("CONFIG_KEY"),rn=Symbol("EMIT_BAR_EVENT_KEY"),on=Symbol("BAR_CONTAINER_KEY");function ye(){const e=n.inject(nn);if(!e)throw Error("Failed to inject config!");return e}const an="YYYY-MM-DD HH:mm";function bt(e=ye()){const{chartStart:t,chartEnd:r,barStart:o,barEnd:a,dateFormat:l}=e,i=n.computed(()=>d(t.value)),c=n.computed(()=>d(r.value)),d=(u,y)=>{let x;if(y!==void 0&&typeof u!="string"&&!(u instanceof Date)&&(x=y==="start"?u[o.value]:u[a.value]),typeof u=="string")x=u;else if(u instanceof Date)return G.default(u);const k=l.value||an;return G.default(x,k,!0)};return{chartStartDayjs:i,chartEndDayjs:c,toDayjs:d,format:(u,y)=>y===!1?u instanceof Date?u:G.default(u).toDate():(typeof u=="string"||u instanceof Date?d(u):u).format(y)}}const xr={class:"g-gantt-grid-current-date"},kr=n.defineComponent({__name:"GGanttGridCurrentDay",props:{parentWidth:{}},setup(e){const t=e,r=n.inject("iconComponent"),o=new Date,a=new Date(o.getFullYear(),0,1),l=n.computed(()=>Math.ceil((new Date(o.getTime()).valueOf()-a.valueOf())/864e5)),i=n.computed(()=>t.parentWidth/52/7),c=n.ref(l.value>=365-10),d=n.computed(()=>l.value>=365-10?0:i.value*l.value-33),f=n.computed(()=>l.value<10?0:i.value*l.value-33);return(u,y)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createElementVNode("div",{style:n.normalizeStyle({position:"absolute",top:"-65px",zIndex:3,left:i.value*l.value-7.5+"px"})},[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(r)),{name:"marker-current-date",size:"16","size-s":"16",style:{color:"#C882BE"}}))],4),n.createElementVNode("div",{style:n.normalizeStyle({position:"absolute",top:"-52px",left:c.value?"unset":f.value+"px",right:c.value?d.value+"px":"unset",width:"68px",height:"20px",backgroundColor:"white",padding:"2px",borderRadius:"4px"})},[n.createElementVNode("p",xr,n.toDisplayString(n.unref(G.default)(new Date).format("DD.MM.YYYY")),1)],4),n.createElementVNode("div",{style:n.normalizeStyle({position:"absolute",width:"2px",height:"100%",left:i.value*l.value+"px",borderRight:"2px solid #C882BE",zIndex:3})},null,4)],64))}}),hi="",Ae=(e,t)=>{const r=e.__vccOpts||e;for(const[o,a]of t)r[o]=a;return r},Cr=Ae(kr,[["__scopeId","data-v-dd346c68"]]);function sn(){const{precision:e}=ye(),{chartStartDayjs:t,chartEndDayjs:r}=bt(),o=n.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),a=n.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),l={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"W",month:"MMM",year:"YYYY"},i=n.computed(()=>{const c=[],d=[],f=r.value.diff(t.value,"minutes",!0),u=o.value,y=a.value;let x=t.value,k=t.value;for(;k.isSameOrBefore(r.value);){const C=k.endOf(y),O=C.isAfter(r.value)?r.value.diff(k,"minutes",!0)/f*100:C.diff(k,"minutes",!0)/f*100;d.push({label:k.format(l[e==null?void 0:e.value]),value:String(k),date:k.toDate(),width:String(O)+"%"}),k=C.add(1,y==="isoWeek"?"week":y).startOf(y)}for(;x.isSameOrBefore(r.value);){const C=x.endOf(u),O=C.isAfter(r.value)?r.value.diff(x,"minutes",!0)/f*100:C.diff(x,"minutes",!0)/f*100;c.push({label:x.format(l[u]),value:String(x),date:x.toDate(),width:String(O)+"%"}),x=C.add(1,u).startOf(u)}return{upperUnits:c,lowerUnits:d}});return i.value.lowerUnits[0].label==="53"&&i.value.lowerUnits.splice(0,1),i.value.lowerUnits[i.value.lowerUnits.length-1].label==="1"&&i.value.lowerUnits.splice(i.value.lowerUnits.length-1,1),i.value.lowerUnits[i.value.lowerUnits.length-1].label==="14"&&i.value.lowerUnits.splice(i.value.lowerUnits.length-1,1),{timeaxisUnits:i}}const Or=n.defineComponent({__name:"GGanttGridAreaDivider",props:{areaHeights:{}},setup(e){const{timeaxisUnits:t}=sn(),r=(a,l)=>l===t.value.lowerUnits.length-1?"unset":a&&Number(a)%13===0?"2px solid #a8adb3":"2px solid #f0f1f2",o=a=>{const l=+a>=14&&+a<=26,i=+a>=40&&+a<=52;return l||i?"#f7f8f9":"#ffffff"};return(a,l)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(a.areaHeights,i=>(n.openBlock(),n.createElementBlock("div",{key:i,style:n.normalizeStyle({position:"absolute",top:i+"px",zIndex:2,height:"6px",width:"100%",backgroundColor:"#DFE2E6"})},null,4))),128)),(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(t).lowerUnits,({label:i,width:c},d)=>(n.openBlock(),n.createElementBlock("div",{key:i,style:n.normalizeStyle({width:c,borderRight:r(i,d),backgroundColor:o(i)}),class:"g-grid-line"},null,4))),128))],64))}}),Er=n.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{}},setup(e){const t=n.ref(null),{width:r}=Qt(t),o=n.ref([]);return n.onMounted(()=>{n.nextTick(()=>{Object.values(document.querySelector(".g-gantt-rows-list").children).forEach(l=>{o.value.push(l.clientHeight)}),o.value.pop()})}),(a,l)=>(n.openBlock(),n.createElementBlock("div",{ref_key:"gridContainer",ref:t,class:"g-grid-container"},[n.createVNode(Cr,{"parent-width":n.unref(r)},null,8,["parent-width"]),n.createVNode(Or,{"area-heights":o.value},null,8,["area-heights"])],512))}}),vi="",ln=Ae(Er,[["__scopeId","data-v-a719d7c7"]]);function _r(){const e=n.inject(tn);if(!e)throw Error("Failed to inject getChartRows!");return e}const Tr={class:"g-label-column-rows"},Br=n.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:t,colors:r,labelColumnTitle:o,rowHeight:a}=ye(),l=_r();return(i,c)=>(n.openBlock(),n.createElementBlock("div",{class:"g-label-column",style:n.normalizeStyle({fontFamily:n.unref(t),color:n.unref(r).text})},[n.renderSlot(i.$slots,"label-column-title",{},()=>[n.createElementVNode("div",{class:"g-label-column-header",style:n.normalizeStyle({background:n.unref(r).primary})},n.toDisplayString(n.unref(o)),5)]),n.createElementVNode("div",Tr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(l)(),({label:d},f)=>(n.openBlock(),n.createElementBlock("div",{key:`${d}_${f}`,class:"g-label-column-row",style:n.normalizeStyle({background:f%2===0?n.unref(r).ternary:n.unref(r).quartenary,height:`${n.unref(a)}px`})},[n.renderSlot(i.$slots,"label-column-row",{label:d},()=>[n.createElementVNode("span",null,n.toDisplayString(d),1)])],4))),128))])],4))}}),yi="",Dr={class:"g-timeaxis"},Sr={class:"g-timeunits-container g-timeunits-low"},Mr={key:0,class:"g-timeunit-low-kw"},Ar={class:"g-timeunits-container g-timeunits-upper"},Pr=n.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:t,colors:r}=ye(),{timeaxisUnits:o}=sn();return(a,l)=>(n.openBlock(),n.createElementBlock("div",Dr,[n.createElementVNode("div",Sr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(o).lowerUnits,({label:i,value:c,date:d,width:f},u)=>(n.openBlock(),n.createElementBlock("div",{key:i,class:"g-timeunit g-timeunit-low",style:n.normalizeStyle({flexDirection:n.unref(t)==="hour"?"column":"row",alignItems:n.unref(t)==="hour"?"":"center",width:f})},[u===0?(n.openBlock(),n.createElementBlock("span",Mr,"KW")):n.createCommentVNode("",!0),n.renderSlot(a.$slots,"timeunit",{label:i,value:c,date:d},()=>[n.createTextVNode(n.toDisplayString(i),1)]),n.unref(t)==="hour"?(n.openBlock(),n.createElementBlock("div",{key:1,class:"g-timeaxis-hour-pin",style:n.normalizeStyle({background:n.unref(r).text})},null,4)):n.createCommentVNode("",!0)],4))),128))]),n.createElementVNode("div",Ar,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(o).upperUnits,({label:i,value:c,date:d,width:f})=>(n.openBlock(),n.createElementBlock("div",{key:i,class:"g-upper-timeunit",style:n.normalizeStyle({width:f})},[n.renderSlot(a.$slots,"upper-timeunit",{label:i,value:c,date:d},()=>[n.createTextVNode(n.toDisplayString(i),1)])],4))),128))])]))}}),bi="";function wt(e=ye()){const{dateFormat:t,chartSize:r}=e,{chartStartDayjs:o,chartEndDayjs:a,toDayjs:l,format:i}=bt(e),c=n.computed(()=>a.value.diff(o.value,"minutes"));return{mapTimeToPosition:u=>{const y=r.width.value||0,x=l(u).diff(o.value,"minutes",!0);return Math.ceil(x/c.value*y)},mapPositionToTime:u=>{const y=r.width.value||0,x=u/y*c.value;return i(o.value.add(x,"minutes"),t.value)}}}const $r=n.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:t}=wt(),r=n.ref(G.default()),{colors:o,dateFormat:a,currentTimeLabel:l}=ye(),i=n.computed(()=>{const c=a.value||"YYYY-MM-DD HH:mm";return t(G.default(r.value,c).format(c))});return(c,d)=>(n.openBlock(),n.createElementBlock("div",{class:"g-grid-current-time",style:n.normalizeStyle({left:`${i.value}px`})},[n.createElementVNode("div",{class:"g-grid-current-time-marker",style:n.normalizeStyle({border:`1px dashed ${n.unref(o).markerCurrentTime}`})},null,4),n.createElementVNode("span",{class:"g-grid-current-time-text",style:n.normalizeStyle({color:n.unref(o).markerCurrentTime})},[n.renderSlot(c.$slots,"current-time-label",{},()=>[n.createTextVNode(n.toDisplayString(n.unref(l)),1)])],4)],4))}}),wi="",Lr={class:"g-gantt-legend-collapse"},Rr={class:"g-gantt-legend-areas-list"},Nr={class:"g-gantt-legend-promotion"},Vr=6,jr=n.defineComponent({__name:"GGanttLegendNonCollapsedView",props:{legend:{},isCollapsed:{type:Boolean}},emits:["update:isCollapsed"],setup(e){const t=n.inject("iconComponent"),r=n.ref([]);return n.onMounted(()=>{n.nextTick(()=>{Object.values(document.querySelector(".g-gantt-rows-list").children).forEach(a=>{r.value.push(a.clientHeight)})})}),(o,a)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createElementVNode("div",Lr,[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{name:"chevron-left",class:"g-gantt-legend-do-collapse",size:"24",onClick:a[0]||(a[0]=()=>o.$emit("update:isCollapsed",!o.isCollapsed))}))]),n.createElementVNode("div",Rr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(Object.entries(o.legend),([l,i],c)=>(n.openBlock(),n.createElementBlock("div",{key:l,class:"g-gantt-legend-area-list",style:n.normalizeStyle({height:r.value[c]+Vr+"px"})},[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{class:"g-gantt-legend-area-icon",size:"24",name:o.legend[l][0].area.icon},null,8,["name"])),n.createElementVNode("div",Nr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(i,d=>(n.openBlock(),n.createElementBlock("div",{key:d.category.name,class:"g-gantt-legend-category-color",style:n.normalizeStyle({backgroundColor:"#"+d.category.color})},null,4))),128))])],4))),128))])],64))}}),xi="",Ir=Ae(jr,[["__scopeId","data-v-1dd633de"]]),Hr={class:"g-gantt-legend-collapse"},zr={class:"g-gantt-legend-areas-list"},Gr={class:"g-gantt-legend-title"},Yr={class:"g-gantt-legend-area"},Fr={class:"g-gantt-legend-category-name"},Ur=6,Wr=n.defineComponent({__name:"GGanttLegendCollapsedView",props:{legend:{},isCollapsed:{type:Boolean}},emits:["update:isCollapsed"],setup(e){const t=n.inject("iconComponent"),r=n.ref([]);return n.onMounted(()=>{n.nextTick(()=>{Object.values(document.querySelector(".g-gantt-rows-list").children).forEach(a=>{r.value.push(a.clientHeight)})})}),(o,a)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createElementVNode("div",Hr,[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{name:"chevron-right",class:"g-gantt-legend-do-uncollapse",size:"24",onClick:a[0]||(a[0]=()=>o.$emit("update:isCollapsed",!o.isCollapsed))}))]),n.createElementVNode("div",zr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(Object.entries(o.legend),([l,i],c)=>(n.openBlock(),n.createElementBlock("div",{key:l,class:"g-gantt-legend-area-list",style:n.normalizeStyle({height:r.value[c]+Ur+"px"})},[n.createElementVNode("div",Gr,[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{size:"32",name:o.legend[l][0].area.icon},null,8,["name"])),n.createElementVNode("p",Yr,n.toDisplayString(l),1)]),(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(i,d=>(n.openBlock(),n.createElementBlock("div",{key:d.category.name,class:"g-gantt-legend-promotion"},[n.createElementVNode("div",{class:"g-gantt-legend-category-color",style:n.normalizeStyle({backgroundColor:"#"+d.category.color})},null,4),n.createElementVNode("p",Fr,n.toDisplayString(d.category.name),1)]))),128))],4))),128))])],64))}}),ki="",qr=Ae(Wr,[["__scopeId","data-v-46e9751c"]]),Xr={class:"g-gantt-legend"},Qr=n.defineComponent({__name:"GGanttLegend",props:{legend:{}},setup(e){n.useCssVars(l=>({"8b45b7ac":o.value}));const t=n.ref(!0),r=n.computed(()=>t.value?"chevron-right":"chevron-left"),o=n.computed(()=>t.value?"255px":"56px"),a=()=>document.querySelector("body").clientWidth>1200;return n.onBeforeMount(()=>{t.value=a()}),(l,i)=>(n.openBlock(),n.createElementBlock("div",Xr,[t.value?(n.openBlock(),n.createBlock(qr,{key:1,"is-collapsed":t.value,"onUpdate:isCollapsed":i[1]||(i[1]=c=>t.value=c),"arrow-name":r.value,legend:l.legend},null,8,["is-collapsed","arrow-name","legend"])):(n.openBlock(),n.createBlock(Ir,{key:0,"is-collapsed":t.value,"onUpdate:isCollapsed":i[0]||(i[0]=c=>t.value=c),"arrow-name":r.value,legend:l.legend},null,8,["is-collapsed","arrow-name","legend"]))]))}}),Ci="",Kr=Ae(Qr,[["__scopeId","data-v-517e11e4"]]),Zr={class:"g-gantt-chart-container"},Jr={class:"g-gantt-chart-quarters"},eo={key:0,class:"g-gantt-chart-quarter"},to={class:"g-gantt-rows-list"},cn=n.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:an},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"},verticalGrid:{type:Boolean},legend:{}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:t}){const r=e;G.default.extend(Gt);const o=new Date,a=new Date;o.setDate(15),o.setMonth(10),a.setDate(31),a.setMonth(11);const l=n.ref(G.default(new Date).isBetween(o,a)),i=t,{width:c,font:d,colorScheme:f}=n.toRefs(r),u=n.useSlots(),y=n.computed(()=>typeof f.value!="string"?f.value:en[f.value]||en.default),x=()=>{var E;const g=(E=u.default)==null?void 0:E.call(u),p=[];return g&&g.forEach(s=>{var b;if((b=s.props)!=null&&b.bars){const{label:w,bars:v}=s.props;p.push({label:w,bars:v})}else Array.isArray(s.children)&&s.children.forEach(w=>{var _;const v=w;if((_=v==null?void 0:v.props)!=null&&_.bars){const{label:P,bars:D}=v.props;p.push({label:P,bars:D})}})}),p},k=n.ref(!1),C=(g,p,E,s)=>{switch(g.type){case"click":i("click-bar",{bar:p,e:g,datetime:E});break;case"mousedown":i("mousedown-bar",{bar:p,e:g,datetime:E});break;case"mouseup":i("mouseup-bar",{bar:p,e:g,datetime:E});break;case"dblclick":i("dblclick-bar",{bar:p,e:g,datetime:E});break;case"mouseenter":i("mouseenter-bar",{bar:p,e:g});break;case"mouseleave":i("mouseleave-bar",{bar:p,e:g});break;case"dragstart":k.value=!0,i("dragstart-bar",{bar:p,e:g});break;case"drag":i("drag-bar",{bar:p,e:g});break;case"dragend":k.value=!1,i("dragend-bar",{bar:p,e:g,movedBars:s});break;case"contextmenu":i("contextmenu-bar",{bar:p,e:g,datetime:E});break}},m=n.ref(null),O=Qt(m);return n.provide(tn,x),n.provide(nn,{...n.toRefs(r),colors:y,chartSize:O}),n.provide(rn,C),(g,p)=>(n.openBlock(),n.createElementBlock("div",Zr,[n.createVNode(Kr,{legend:g.legend?g.legend:{}},null,8,["legend"]),n.createElementVNode("div",{class:n.normalizeClass([[{"labels-in-column":!!g.labelColumnTitle}],"g-gantt-chart-wrapper"])},[g.labelColumnTitle?(n.openBlock(),n.createBlock(Br,{key:0,style:n.normalizeStyle({width:g.labelColumnWidth})},{"label-column-title":n.withCtx(()=>[n.renderSlot(g.$slots,"label-column-title")]),"label-column-row":n.withCtx(({label:E})=>[n.renderSlot(g.$slots,"label-column-row",{label:E})]),_:3},8,["style"])):n.createCommentVNode("",!0),n.createElementVNode("div",{ref_key:"ganttChart",ref:m,class:n.normalizeClass(["g-gantt-chart",{"with-column":g.labelColumnTitle,"g-gantt-chart-container--4-quarters-width":!l.value,"g-gantt-chart-container--5-quarters-width":l.value}]),style:n.normalizeStyle({width:n.unref(c),background:y.value.background,fontFamily:n.unref(d)})},[g.grid?(n.openBlock(),n.createBlock(ln,{key:0,"highlighted-units":g.highlightedUnits},null,8,["highlighted-units"])):n.createCommentVNode("",!0),g.currentTime?(n.openBlock(),n.createBlock($r,{key:1},{"current-time-label":n.withCtx(()=>[n.renderSlot(g.$slots,"current-time-label")]),_:3})):n.createCommentVNode("",!0),n.createElementVNode("div",Jr,[p[0]||(p[0]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q1",-1)),p[1]||(p[1]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q2",-1)),p[2]||(p[2]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q3",-1)),p[3]||(p[3]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q4",-1)),l.value?(n.openBlock(),n.createElementBlock("div",eo,"Q1")):n.createCommentVNode("",!0)]),n.createElementVNode("div",{class:n.normalizeClass(["g-gantt-rows-container",r.verticalGrid?"g-gantt-chart-vertical-grid":""])},[n.createElementVNode("div",to,[n.renderSlot(g.$slots,"default")]),n.createVNode(ln,{"highlighted-units":g.highlightedUnits},null,8,["highlighted-units"])],2),g.hideTimeaxis?n.createCommentVNode("",!0):(n.openBlock(),n.createBlock(Pr,{key:2},{"upper-timeunit":n.withCtx(({label:E,value:s,date:b})=>[n.renderSlot(g.$slots,"upper-timeunit",{date:b,label:E,value:s})]),timeunit:n.withCtx(({label:E,value:s,date:b})=>[n.renderSlot(g.$slots,"timeunit",{date:b,label:E,value:s})]),_:3}))],6)],2)]))}}),Oi="";/*!
  * vue-tippy v6.6.0
  * (c) 2024 
  * @license MIT
  */var W="top",K="bottom",Z="right",q="left",xt="auto",Ge=[W,K,Z,q],Pe="start",Ye="end",no="clippingParents",dn="viewport",Fe="popper",ro="reference",un=Ge.reduce(function(e,t){return e.concat([t+"-"+Pe,t+"-"+Ye])},[]),fn=[].concat(Ge,[xt]).reduce(function(e,t){return e.concat([t,t+"-"+Pe,t+"-"+Ye])},[]),oo="beforeRead",ao="read",io="afterRead",so="beforeMain",lo="main",co="afterMain",uo="beforeWrite",fo="write",po="afterWrite",go=[oo,ao,io,so,lo,co,uo,fo,po];function ce(e){return e?(e.nodeName||"").toLowerCase():null}function oe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function $e(e){var t=oe(e).Element;return e instanceof t||e instanceof Element}function J(e){var t=oe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function pn(e){if(typeof ShadowRoot>"u")return!1;var t=oe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function mo(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},a=t.attributes[r]||{},l=t.elements[r];!J(l)||!ce(l)||(Object.assign(l.style,o),Object.keys(a).forEach(function(i){var c=a[i];c===!1?l.removeAttribute(i):l.setAttribute(i,c===!0?"":c)}))})}function ho(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var a=t.elements[o],l=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),c=i.reduce(function(d,f){return d[f]="",d},{});!J(a)||!ce(a)||(Object.assign(a.style,c),Object.keys(l).forEach(function(d){a.removeAttribute(d)}))})}}var gn={name:"applyStyles",enabled:!0,phase:"write",fn:mo,effect:ho,requires:["computeStyles"]};function de(e){return e.split("-")[0]}var _e=Math.max,tt=Math.min,Le=Math.round;function Re(e,t){t===void 0&&(t=!1);var r=e.getBoundingClientRect(),o=1,a=1;if(J(e)&&t){var l=e.offsetHeight,i=e.offsetWidth;i>0&&(o=Le(r.width)/i||1),l>0&&(a=Le(r.height)/l||1)}return{width:r.width/o,height:r.height/a,top:r.top/a,right:r.right/o,bottom:r.bottom/a,left:r.left/o,x:r.left/o,y:r.top/a}}function kt(e){var t=Re(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function mn(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&pn(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ue(e){return oe(e).getComputedStyle(e)}function vo(e){return["table","td","th"].indexOf(ce(e))>=0}function be(e){return(($e(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return ce(e)==="html"?e:e.assignedSlot||e.parentNode||(pn(e)?e.host:null)||be(e)}function hn(e){return!J(e)||ue(e).position==="fixed"?null:e.offsetParent}function yo(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&J(e)){var o=ue(e);if(o.position==="fixed")return null}for(var a=nt(e);J(a)&&["html","body"].indexOf(ce(a))<0;){var l=ue(a);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||t&&l.willChange==="filter"||t&&l.filter&&l.filter!=="none")return a;a=a.parentNode}return null}function Ue(e){for(var t=oe(e),r=hn(e);r&&vo(r)&&ue(r).position==="static";)r=hn(r);return r&&(ce(r)==="html"||ce(r)==="body"&&ue(r).position==="static")?t:r||yo(e)||t}function Ct(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function We(e,t,r){return _e(e,tt(t,r))}function bo(e,t,r){var o=We(e,t,r);return o>r?r:o}function vn(){return{top:0,right:0,bottom:0,left:0}}function yn(e){return Object.assign({},vn(),e)}function bn(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var wo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,yn(typeof t!="number"?t:bn(t,Ge))};function xo(e){var t,r=e.state,o=e.name,a=e.options,l=r.elements.arrow,i=r.modifiersData.popperOffsets,c=de(r.placement),d=Ct(c),f=[q,Z].indexOf(c)>=0,u=f?"height":"width";if(!(!l||!i)){var y=wo(a.padding,r),x=kt(l),k=d==="y"?W:q,C=d==="y"?K:Z,m=r.rects.reference[u]+r.rects.reference[d]-i[d]-r.rects.popper[u],O=i[d]-r.rects.reference[d],g=Ue(l),p=g?d==="y"?g.clientHeight||0:g.clientWidth||0:0,E=m/2-O/2,s=y[k],b=p-x[u]-y[C],w=p/2-x[u]/2+E,v=We(s,w,b),_=d;r.modifiersData[o]=(t={},t[_]=v,t.centerOffset=v-w,t)}}function ko(e){var t=e.state,r=e.options,o=r.element,a=o===void 0?"[data-popper-arrow]":o;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||!mn(t.elements.popper,a)||(t.elements.arrow=a))}var Co={name:"arrow",enabled:!0,phase:"main",fn:xo,effect:ko,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ne(e){return e.split("-")[1]}var Oo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Eo(e){var t=e.x,r=e.y,o=window,a=o.devicePixelRatio||1;return{x:Le(t*a)/a||0,y:Le(r*a)/a||0}}function wn(e){var t,r=e.popper,o=e.popperRect,a=e.placement,l=e.variation,i=e.offsets,c=e.position,d=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,y=e.isFixed,x=u===!0?Eo(i):typeof u=="function"?u(i):i,k=x.x,C=k===void 0?0:k,m=x.y,O=m===void 0?0:m,g=i.hasOwnProperty("x"),p=i.hasOwnProperty("y"),E=q,s=W,b=window;if(f){var w=Ue(r),v="clientHeight",_="clientWidth";if(w===oe(r)&&(w=be(r),ue(w).position!=="static"&&c==="absolute"&&(v="scrollHeight",_="scrollWidth")),w=w,a===W||(a===q||a===Z)&&l===Ye){s=K;var P=y&&b.visualViewport?b.visualViewport.height:w[v];O-=P-o.height,O*=d?1:-1}if(a===q||(a===W||a===K)&&l===Ye){E=Z;var D=y&&b.visualViewport?b.visualViewport.width:w[_];C-=D-o.width,C*=d?1:-1}}var S=Object.assign({position:c},f&&Oo);if(d){var M;return Object.assign({},S,(M={},M[s]=p?"0":"",M[E]=g?"0":"",M.transform=(b.devicePixelRatio||1)<=1?"translate("+C+"px, "+O+"px)":"translate3d("+C+"px, "+O+"px, 0)",M))}return Object.assign({},S,(t={},t[s]=p?O+"px":"",t[E]=g?C+"px":"",t.transform="",t))}function _o(e){var t=e.state,r=e.options,o=r.gpuAcceleration,a=o===void 0?!0:o,l=r.adaptive,i=l===void 0?!0:l,c=r.roundOffsets,d=c===void 0?!0:c,f={placement:de(t.placement),variation:Ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,wn(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:d})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,wn(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:d})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var To={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_o,data:{}},rt={passive:!0};function Bo(e){var t=e.state,r=e.instance,o=e.options,a=o.scroll,l=a===void 0?!0:a,i=o.resize,c=i===void 0?!0:i,d=oe(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return l&&f.forEach(function(u){u.addEventListener("scroll",r.update,rt)}),c&&d.addEventListener("resize",r.update,rt),function(){l&&f.forEach(function(u){u.removeEventListener("scroll",r.update,rt)}),c&&d.removeEventListener("resize",r.update,rt)}}var Do={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bo,data:{}},So={left:"right",right:"left",bottom:"top",top:"bottom"};function ot(e){return e.replace(/left|right|bottom|top/g,function(t){return So[t]})}var Mo={start:"end",end:"start"};function xn(e){return e.replace(/start|end/g,function(t){return Mo[t]})}function Ot(e){var t=oe(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Et(e){return Re(be(e)).left+Ot(e).scrollLeft}function Ao(e){var t=oe(e),r=be(e),o=t.visualViewport,a=r.clientWidth,l=r.clientHeight,i=0,c=0;return o&&(a=o.width,l=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,c=o.offsetTop)),{width:a,height:l,x:i+Et(e),y:c}}function Po(e){var t,r=be(e),o=Ot(e),a=(t=e.ownerDocument)==null?void 0:t.body,l=_e(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=_e(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),c=-o.scrollLeft+Et(e),d=-o.scrollTop;return ue(a||r).direction==="rtl"&&(c+=_e(r.clientWidth,a?a.clientWidth:0)-l),{width:l,height:i,x:c,y:d}}function _t(e){var t=ue(e),r=t.overflow,o=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+o)}function kn(e){return["html","body","#document"].indexOf(ce(e))>=0?e.ownerDocument.body:J(e)&&_t(e)?e:kn(nt(e))}function qe(e,t){var r;t===void 0&&(t=[]);var o=kn(e),a=o===((r=e.ownerDocument)==null?void 0:r.body),l=oe(o),i=a?[l].concat(l.visualViewport||[],_t(o)?o:[]):o,c=t.concat(i);return a?c:c.concat(qe(nt(i)))}function Tt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function $o(e){var t=Re(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Cn(e,t){return t===dn?Tt(Ao(e)):$e(t)?$o(t):Tt(Po(be(e)))}function Lo(e){var t=qe(nt(e)),r=["absolute","fixed"].indexOf(ue(e).position)>=0,o=r&&J(e)?Ue(e):e;return $e(o)?t.filter(function(a){return $e(a)&&mn(a,o)&&ce(a)!=="body"&&(r?ue(a).position!=="static":!0)}):[]}function Ro(e,t,r){var o=t==="clippingParents"?Lo(e):[].concat(t),a=[].concat(o,[r]),l=a[0],i=a.reduce(function(c,d){var f=Cn(e,d);return c.top=_e(f.top,c.top),c.right=tt(f.right,c.right),c.bottom=tt(f.bottom,c.bottom),c.left=_e(f.left,c.left),c},Cn(e,l));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function On(e){var t=e.reference,r=e.element,o=e.placement,a=o?de(o):null,l=o?Ne(o):null,i=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,d;switch(a){case W:d={x:i,y:t.y-r.height};break;case K:d={x:i,y:t.y+t.height};break;case Z:d={x:t.x+t.width,y:c};break;case q:d={x:t.x-r.width,y:c};break;default:d={x:t.x,y:t.y}}var f=a?Ct(a):null;if(f!=null){var u=f==="y"?"height":"width";switch(l){case Pe:d[f]=d[f]-(t[u]/2-r[u]/2);break;case Ye:d[f]=d[f]+(t[u]/2-r[u]/2);break}}return d}function Xe(e,t){t===void 0&&(t={});var r=t,o=r.placement,a=o===void 0?e.placement:o,l=r.boundary,i=l===void 0?no:l,c=r.rootBoundary,d=c===void 0?dn:c,f=r.elementContext,u=f===void 0?Fe:f,y=r.altBoundary,x=y===void 0?!1:y,k=r.padding,C=k===void 0?0:k,m=yn(typeof C!="number"?C:bn(C,Ge)),O=u===Fe?ro:Fe,g=e.rects.popper,p=e.elements[x?O:u],E=Ro($e(p)?p:p.contextElement||be(e.elements.popper),i,d),s=Re(e.elements.reference),b=On({reference:s,element:g,strategy:"absolute",placement:a}),w=Tt(Object.assign({},g,b)),v=u===Fe?w:s,_={top:E.top-v.top+m.top,bottom:v.bottom-E.bottom+m.bottom,left:E.left-v.left+m.left,right:v.right-E.right+m.right},P=e.modifiersData.offset;if(u===Fe&&P){var D=P[a];Object.keys(_).forEach(function(S){var M=[Z,K].indexOf(S)>=0?1:-1,$=[W,K].indexOf(S)>=0?"y":"x";_[S]+=D[$]*M})}return _}function No(e,t){t===void 0&&(t={});var r=t,o=r.placement,a=r.boundary,l=r.rootBoundary,i=r.padding,c=r.flipVariations,d=r.allowedAutoPlacements,f=d===void 0?fn:d,u=Ne(o),y=u?c?un:un.filter(function(C){return Ne(C)===u}):Ge,x=y.filter(function(C){return f.indexOf(C)>=0});x.length===0&&(x=y);var k=x.reduce(function(C,m){return C[m]=Xe(e,{placement:m,boundary:a,rootBoundary:l,padding:i})[de(m)],C},{});return Object.keys(k).sort(function(C,m){return k[C]-k[m]})}function Vo(e){if(de(e)===xt)return[];var t=ot(e);return[xn(e),t,xn(t)]}function jo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var a=r.mainAxis,l=a===void 0?!0:a,i=r.altAxis,c=i===void 0?!0:i,d=r.fallbackPlacements,f=r.padding,u=r.boundary,y=r.rootBoundary,x=r.altBoundary,k=r.flipVariations,C=k===void 0?!0:k,m=r.allowedAutoPlacements,O=t.options.placement,g=de(O),p=g===O,E=d||(p||!C?[ot(O)]:Vo(O)),s=[O].concat(E).reduce(function(ie,X){return ie.concat(de(X)===xt?No(t,{placement:X,boundary:u,rootBoundary:y,padding:f,flipVariations:C,allowedAutoPlacements:m}):X)},[]),b=t.rects.reference,w=t.rects.popper,v=new Map,_=!0,P=s[0],D=0;D<s.length;D++){var S=s[D],M=de(S),$=Ne(S)===Pe,R=[W,K].indexOf(M)>=0,H=R?"width":"height",I=Xe(t,{placement:S,boundary:u,rootBoundary:y,altBoundary:x,padding:f}),V=R?$?Z:q:$?K:W;b[H]>w[H]&&(V=ot(V));var j=ot(V),z=[];if(l&&z.push(I[M]<=0),c&&z.push(I[V]<=0,I[j]<=0),z.every(function(ie){return ie})){P=S,_=!1;break}v.set(S,z)}if(_)for(var Y=C?3:1,ee=function(X){var se=s.find(function(me){var Q=v.get(me);if(Q)return Q.slice(0,X).every(function(pe){return pe})});if(se)return P=se,"break"},te=Y;te>0;te--){var ge=ee(te);if(ge==="break")break}t.placement!==P&&(t.modifiersData[o]._skip=!0,t.placement=P,t.reset=!0)}}var Io={name:"flip",enabled:!0,phase:"main",fn:jo,requiresIfExists:["offset"],data:{_skip:!1}};function En(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _n(e){return[W,Z,K,q].some(function(t){return e[t]>=0})}function Ho(e){var t=e.state,r=e.name,o=t.rects.reference,a=t.rects.popper,l=t.modifiersData.preventOverflow,i=Xe(t,{elementContext:"reference"}),c=Xe(t,{altBoundary:!0}),d=En(i,o),f=En(c,a,l),u=_n(d),y=_n(f);t.modifiersData[r]={referenceClippingOffsets:d,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:y},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":y})}var zo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ho};function Go(e,t,r){var o=de(e),a=[q,W].indexOf(o)>=0?-1:1,l=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,i=l[0],c=l[1];return i=i||0,c=(c||0)*a,[q,Z].indexOf(o)>=0?{x:c,y:i}:{x:i,y:c}}function Yo(e){var t=e.state,r=e.options,o=e.name,a=r.offset,l=a===void 0?[0,0]:a,i=fn.reduce(function(u,y){return u[y]=Go(y,t.rects,l),u},{}),c=i[t.placement],d=c.x,f=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=d,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=i}var Fo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yo};function Uo(e){var t=e.state,r=e.name;t.modifiersData[r]=On({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Wo={name:"popperOffsets",enabled:!0,phase:"read",fn:Uo,data:{}};function qo(e){return e==="x"?"y":"x"}function Xo(e){var t=e.state,r=e.options,o=e.name,a=r.mainAxis,l=a===void 0?!0:a,i=r.altAxis,c=i===void 0?!1:i,d=r.boundary,f=r.rootBoundary,u=r.altBoundary,y=r.padding,x=r.tether,k=x===void 0?!0:x,C=r.tetherOffset,m=C===void 0?0:C,O=Xe(t,{boundary:d,rootBoundary:f,padding:y,altBoundary:u}),g=de(t.placement),p=Ne(t.placement),E=!p,s=Ct(g),b=qo(s),w=t.modifiersData.popperOffsets,v=t.rects.reference,_=t.rects.popper,P=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,D=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(!!w){if(l){var $,R=s==="y"?W:q,H=s==="y"?K:Z,I=s==="y"?"height":"width",V=w[s],j=V+O[R],z=V-O[H],Y=k?-_[I]/2:0,ee=p===Pe?v[I]:_[I],te=p===Pe?-_[I]:-v[I],ge=t.elements.arrow,ie=k&&ge?kt(ge):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:vn(),se=X[R],me=X[H],Q=We(0,v[I],ie[I]),pe=E?v[I]/2-Y-Q-se-D.mainAxis:ee-Q-se-D.mainAxis,ne=E?-v[I]/2+Y+Q+me+D.mainAxis:te+Q+me+D.mainAxis,le=t.elements.arrow&&Ue(t.elements.arrow),we=le?s==="y"?le.clientTop||0:le.clientLeft||0:0,he=($=S==null?void 0:S[s])!=null?$:0,xe=V+pe-he-we,ke=V+ne-he,je=We(k?tt(j,xe):j,V,k?_e(z,ke):z);w[s]=je,M[s]=je-V}if(c){var Ke,ct=s==="x"?W:q,dt=s==="x"?K:Z,ve=w[b],Ce=b==="y"?"height":"width",Ze=ve+O[ct],Se=ve-O[dt],Je=[W,q].indexOf(g)!==-1,ut=(Ke=S==null?void 0:S[b])!=null?Ke:0,ft=Je?Ze:ve-v[Ce]-_[Ce]-ut+D.altAxis,pt=Je?ve+v[Ce]+_[Ce]-ut-D.altAxis:Se,gt=k&&Je?bo(ft,ve,pt):We(k?ft:Ze,ve,k?pt:Se);w[b]=gt,M[b]=gt-ve}t.modifiersData[o]=M}}var Qo={name:"preventOverflow",enabled:!0,phase:"main",fn:Xo,requiresIfExists:["offset"]};function Ko(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Zo(e){return e===oe(e)||!J(e)?Ot(e):Ko(e)}function Jo(e){var t=e.getBoundingClientRect(),r=Le(t.width)/e.offsetWidth||1,o=Le(t.height)/e.offsetHeight||1;return r!==1||o!==1}function ea(e,t,r){r===void 0&&(r=!1);var o=J(t),a=J(t)&&Jo(t),l=be(t),i=Re(e,a),c={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(o||!o&&!r)&&((ce(t)!=="body"||_t(l))&&(c=Zo(t)),J(t)?(d=Re(t,!0),d.x+=t.clientLeft,d.y+=t.clientTop):l&&(d.x=Et(l))),{x:i.left+c.scrollLeft-d.x,y:i.top+c.scrollTop-d.y,width:i.width,height:i.height}}function ta(e){var t=new Map,r=new Set,o=[];e.forEach(function(l){t.set(l.name,l)});function a(l){r.add(l.name);var i=[].concat(l.requires||[],l.requiresIfExists||[]);i.forEach(function(c){if(!r.has(c)){var d=t.get(c);d&&a(d)}}),o.push(l)}return e.forEach(function(l){r.has(l.name)||a(l)}),o}function na(e){var t=ta(e);return go.reduce(function(r,o){return r.concat(t.filter(function(a){return a.phase===o}))},[])}function ra(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function oa(e){var t=e.reduce(function(r,o){var a=r[o.name];return r[o.name]=a?Object.assign({},a,o,{options:Object.assign({},a.options,o.options),data:Object.assign({},a.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var Tn={placement:"bottom",modifiers:[],strategy:"absolute"};function Bn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function aa(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,a=t.defaultOptions,l=a===void 0?Tn:a;return function(c,d,f){f===void 0&&(f=l);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tn,l),modifiersData:{},elements:{reference:c,popper:d},attributes:{},styles:{}},y=[],x=!1,k={state:u,setOptions:function(g){var p=typeof g=="function"?g(u.options):g;m(),u.options=Object.assign({},l,u.options,p),u.scrollParents={reference:$e(c)?qe(c):c.contextElement?qe(c.contextElement):[],popper:qe(d)};var E=na(oa([].concat(o,u.options.modifiers)));return u.orderedModifiers=E.filter(function(s){return s.enabled}),C(),k.update()},forceUpdate:function(){if(!x){var g=u.elements,p=g.reference,E=g.popper;if(!!Bn(p,E)){u.rects={reference:ea(p,Ue(E),u.options.strategy==="fixed"),popper:kt(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(D){return u.modifiersData[D.name]=Object.assign({},D.data)});for(var s=0;s<u.orderedModifiers.length;s++){if(u.reset===!0){u.reset=!1,s=-1;continue}var b=u.orderedModifiers[s],w=b.fn,v=b.options,_=v===void 0?{}:v,P=b.name;typeof w=="function"&&(u=w({state:u,options:_,name:P,instance:k})||u)}}}},update:ra(function(){return new Promise(function(O){k.forceUpdate(),O(u)})}),destroy:function(){m(),x=!0}};if(!Bn(c,d))return k;k.setOptions(f).then(function(O){!x&&f.onFirstUpdate&&f.onFirstUpdate(O)});function C(){u.orderedModifiers.forEach(function(O){var g=O.name,p=O.options,E=p===void 0?{}:p,s=O.effect;if(typeof s=="function"){var b=s({state:u,name:g,instance:k,options:E}),w=function(){};y.push(b||w)}})}function m(){y.forEach(function(O){return O()}),y=[]}return k}}var ia=[Do,Wo,To,gn,Fo,Io,Qo,Co,zo],sa=aa({defaultModifiers:ia}),la="tippy-box",Dn="tippy-content",Sn="tippy-backdrop",Mn="tippy-arrow",An="tippy-svg-arrow",Te={passive:!0,capture:!0},Pn=function(){return document.body};function Bt(e,t,r){if(Array.isArray(e)){var o=e[t];return o==null?Array.isArray(r)?r[t]:r:o}return e}function Dt(e,t){var r={}.toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function $n(e,t){return typeof e=="function"?e.apply(void 0,t):e}function Ln(e,t){if(t===0)return e;var r;return function(o){clearTimeout(r),r=setTimeout(function(){e(o)},t)}}function ca(e,t){var r=Object.assign({},e);return t.forEach(function(o){delete r[o]}),r}function da(e){return e.split(/\s+/).filter(Boolean)}function Be(e){return[].concat(e)}function Rn(e,t){e.indexOf(t)===-1&&e.push(t)}function ua(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function Nn(e){return e.split("-")[0]}function Ve(e){return[].slice.call(e)}function Vn(e){return Object.keys(e).reduce(function(t,r){return e[r]!==void 0&&(t[r]=e[r]),t},{})}function De(){return document.createElement("div")}function at(e){return["Element","Fragment"].some(function(t){return Dt(e,t)})}function fa(e){return Dt(e,"NodeList")}function St(e){return Dt(e,"MouseEvent")}function pa(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function ga(e){return at(e)?[e]:fa(e)?Ve(e):Array.isArray(e)?e:Ve(document.querySelectorAll(e))}function Mt(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function Qe(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function jn(e){var t,r=Be(e),o=r[0];return o!=null&&(t=o.ownerDocument)!=null&&t.body?o.ownerDocument:document}function ma(e,t){var r=t.clientX,o=t.clientY;return e.every(function(a){var l=a.popperRect,i=a.popperState,c=a.props,d=c.interactiveBorder,f=Nn(i.placement),u=i.modifiersData.offset;if(!u)return!0;var y=f==="bottom"?u.top.y:0,x=f==="top"?u.bottom.y:0,k=f==="right"?u.left.x:0,C=f==="left"?u.right.x:0,m=l.top-o+y>d,O=o-l.bottom-x>d,g=l.left-r+k>d,p=r-l.right-C>d;return m||O||g||p})}function At(e,t,r){var o=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(a){e[o](a,r)})}function In(e,t){for(var r=t;r;){var o;if(e.contains(r))return!0;r=r.getRootNode==null||(o=r.getRootNode())==null?void 0:o.host}return!1}var fe={isTouch:!1},Hn=0;function ha(){fe.isTouch||(fe.isTouch=!0,window.performance&&document.addEventListener("mousemove",zn))}function zn(){var e=performance.now();e-Hn<20&&(fe.isTouch=!1,document.removeEventListener("mousemove",zn)),Hn=e}function va(){var e=document.activeElement;if(pa(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function ya(){document.addEventListener("touchstart",ha,Te),window.addEventListener("blur",va)}var ba=typeof window<"u"&&typeof document<"u",wa=ba?!!window.msCrypto:!1,xa={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},ka={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},ae=Object.assign({appendTo:Pn,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},xa,ka),Ca=Object.keys(ae),Oa=function(t){var r=Object.keys(t);r.forEach(function(o){ae[o]=t[o]})};function Gn(e){var t=e.plugins||[],r=t.reduce(function(o,a){var l=a.name,i=a.defaultValue;if(l){var c;o[l]=e[l]!==void 0?e[l]:(c=ae[l])!=null?c:i}return o},{});return Object.assign({},e,r)}function Ea(e,t){var r=t?Object.keys(Gn(Object.assign({},ae,{plugins:t}))):Ca,o=r.reduce(function(a,l){var i=(e.getAttribute("data-tippy-"+l)||"").trim();if(!i)return a;if(l==="content")a[l]=i;else try{a[l]=JSON.parse(i)}catch{a[l]=i}return a},{});return o}function Yn(e,t){var r=Object.assign({},t,{content:$n(t.content,[e])},t.ignoreAttributes?{}:Ea(e,t.plugins));return r.aria=Object.assign({},ae.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content},r}var _a=function(){return"innerHTML"};function Pt(e,t){e[_a()]=t}function Fn(e){var t=De();return e===!0?t.className=Mn:(t.className=An,at(e)?t.appendChild(e):Pt(t,e)),t}function Un(e,t){at(t.content)?(Pt(e,""),e.appendChild(t.content)):typeof t.content!="function"&&(t.allowHTML?Pt(e,t.content):e.textContent=t.content)}function it(e){var t=e.firstElementChild,r=Ve(t.children);return{box:t,content:r.find(function(o){return o.classList.contains(Dn)}),arrow:r.find(function(o){return o.classList.contains(Mn)||o.classList.contains(An)}),backdrop:r.find(function(o){return o.classList.contains(Sn)})}}function Wn(e){var t=De(),r=De();r.className=la,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var o=De();o.className=Dn,o.setAttribute("data-state","hidden"),Un(o,e.props),t.appendChild(r),r.appendChild(o),a(e.props,e.props);function a(l,i){var c=it(t),d=c.box,f=c.content,u=c.arrow;i.theme?d.setAttribute("data-theme",i.theme):d.removeAttribute("data-theme"),typeof i.animation=="string"?d.setAttribute("data-animation",i.animation):d.removeAttribute("data-animation"),i.inertia?d.setAttribute("data-inertia",""):d.removeAttribute("data-inertia"),d.style.maxWidth=typeof i.maxWidth=="number"?i.maxWidth+"px":i.maxWidth,i.role?d.setAttribute("role",i.role):d.removeAttribute("role"),(l.content!==i.content||l.allowHTML!==i.allowHTML)&&Un(f,e.props),i.arrow?u?l.arrow!==i.arrow&&(d.removeChild(u),d.appendChild(Fn(i.arrow))):d.appendChild(Fn(i.arrow)):u&&d.removeChild(u)}return{popper:t,onUpdate:a}}Wn.$$tippy=!0;var Ta=1,st=[],$t=[];function Ba(e,t){var r=Yn(e,Object.assign({},ae,Gn(Vn(t)))),o,a,l,i=!1,c=!1,d=!1,f=!1,u,y,x,k=[],C=Ln(xe,r.interactiveDebounce),m,O=Ta++,g=null,p=ua(r.plugins),E={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},s={id:O,reference:e,popper:De(),popperInstance:g,props:r,state:E,plugins:p,clearDelayTimeouts:ft,setProps:pt,setContent:gt,show:ci,hide:di,hideWithInteractivity:ui,enable:Je,disable:ut,unmount:fi,destroy:pi};if(!r.render)return s;var b=r.render(s),w=b.popper,v=b.onUpdate;w.setAttribute("data-tippy-root",""),w.id="tippy-"+s.id,s.popper=w,e._tippy=s,w._tippy=s;var _=p.map(function(h){return h.fn(s)}),P=e.hasAttribute("aria-expanded");return le(),Y(),V(),j("onCreate",[s]),r.showOnCreate&&Ze(),w.addEventListener("mouseenter",function(){s.props.interactive&&s.state.isVisible&&s.clearDelayTimeouts()}),w.addEventListener("mouseleave",function(){s.props.interactive&&s.props.trigger.indexOf("mouseenter")>=0&&R().addEventListener("mousemove",C)}),s;function D(){var h=s.props.touch;return Array.isArray(h)?h:[h,0]}function S(){return D()[0]==="hold"}function M(){var h;return!!((h=s.props.render)!=null&&h.$$tippy)}function $(){return m||e}function R(){var h=$().parentNode;return h?jn(h):document}function H(){return it(w)}function I(h){return s.state.isMounted&&!s.state.isVisible||fe.isTouch||u&&u.type==="focus"?0:Bt(s.props.delay,h?0:1,ae.delay)}function V(h){h===void 0&&(h=!1),w.style.pointerEvents=s.props.interactive&&!h?"":"none",w.style.zIndex=""+s.props.zIndex}function j(h,T,A){if(A===void 0&&(A=!0),_.forEach(function(L){L[h]&&L[h].apply(L,T)}),A){var N;(N=s.props)[h].apply(N,T)}}function z(){var h=s.props.aria;if(!!h.content){var T="aria-"+h.content,A=w.id,N=Be(s.props.triggerTarget||e);N.forEach(function(L){var U=L.getAttribute(T);if(s.state.isVisible)L.setAttribute(T,U?U+" "+A:A);else{var re=U&&U.replace(A,"").trim();re?L.setAttribute(T,re):L.removeAttribute(T)}})}}function Y(){if(!(P||!s.props.aria.expanded)){var h=Be(s.props.triggerTarget||e);h.forEach(function(T){s.props.interactive?T.setAttribute("aria-expanded",s.state.isVisible&&T===$()?"true":"false"):T.removeAttribute("aria-expanded")})}}function ee(){R().removeEventListener("mousemove",C),st=st.filter(function(h){return h!==C})}function te(h){if(!(fe.isTouch&&(d||h.type==="mousedown"))){var T=h.composedPath&&h.composedPath()[0]||h.target;if(!(s.props.interactive&&In(w,T))){if(Be(s.props.triggerTarget||e).some(function(A){return In(A,T)})){if(fe.isTouch||s.state.isVisible&&s.props.trigger.indexOf("click")>=0)return}else j("onClickOutside",[s,h]);s.props.hideOnClick===!0&&(s.clearDelayTimeouts(),s.hide(),c=!0,setTimeout(function(){c=!1}),s.state.isMounted||se())}}}function ge(){d=!0}function ie(){d=!1}function X(){var h=R();h.addEventListener("mousedown",te,!0),h.addEventListener("touchend",te,Te),h.addEventListener("touchstart",ie,Te),h.addEventListener("touchmove",ge,Te)}function se(){var h=R();h.removeEventListener("mousedown",te,!0),h.removeEventListener("touchend",te,Te),h.removeEventListener("touchstart",ie,Te),h.removeEventListener("touchmove",ge,Te)}function me(h,T){pe(h,function(){!s.state.isVisible&&w.parentNode&&w.parentNode.contains(w)&&T()})}function Q(h,T){pe(h,T)}function pe(h,T){var A=H().box;function N(L){L.target===A&&(At(A,"remove",N),T())}if(h===0)return T();At(A,"remove",y),At(A,"add",N),y=N}function ne(h,T,A){A===void 0&&(A=!1);var N=Be(s.props.triggerTarget||e);N.forEach(function(L){L.addEventListener(h,T,A),k.push({node:L,eventType:h,handler:T,options:A})})}function le(){S()&&(ne("touchstart",he,{passive:!0}),ne("touchend",ke,{passive:!0})),da(s.props.trigger).forEach(function(h){if(h!=="manual")switch(ne(h,he),h){case"mouseenter":ne("mouseleave",ke);break;case"focus":ne(wa?"focusout":"blur",je);break;case"focusin":ne("focusout",je);break}})}function we(){k.forEach(function(h){var T=h.node,A=h.eventType,N=h.handler,L=h.options;T.removeEventListener(A,N,L)}),k=[]}function he(h){var T,A=!1;if(!(!s.state.isEnabled||Ke(h)||c)){var N=((T=u)==null?void 0:T.type)==="focus";u=h,m=h.currentTarget,Y(),!s.state.isVisible&&St(h)&&st.forEach(function(L){return L(h)}),h.type==="click"&&(s.props.trigger.indexOf("mouseenter")<0||i)&&s.props.hideOnClick!==!1&&s.state.isVisible?A=!0:Ze(h),h.type==="click"&&(i=!A),A&&!N&&Se(h)}}function xe(h){var T=h.target,A=$().contains(T)||w.contains(T);if(!(h.type==="mousemove"&&A)){var N=Ce().concat(w).map(function(L){var U,re=L._tippy,Ie=(U=re.popperInstance)==null?void 0:U.state;return Ie?{popperRect:L.getBoundingClientRect(),popperState:Ie,props:r}:null}).filter(Boolean);ma(N,h)&&(ee(),Se(h))}}function ke(h){var T=Ke(h)||s.props.trigger.indexOf("click")>=0&&i;if(!T){if(s.props.interactive){s.hideWithInteractivity(h);return}Se(h)}}function je(h){s.props.trigger.indexOf("focusin")<0&&h.target!==$()||s.props.interactive&&h.relatedTarget&&w.contains(h.relatedTarget)||Se(h)}function Ke(h){return fe.isTouch?S()!==h.type.indexOf("touch")>=0:!1}function ct(){dt();var h=s.props,T=h.popperOptions,A=h.placement,N=h.offset,L=h.getReferenceClientRect,U=h.moveTransition,re=M()?it(w).arrow:null,Ie=L?{getBoundingClientRect:L,contextElement:L.contextElement||$()}:e,er={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(mt){var He=mt.state;if(M()){var gi=H(),Vt=gi.box;["placement","reference-hidden","escaped"].forEach(function(ht){ht==="placement"?Vt.setAttribute("data-placement",He.placement):He.attributes.popper["data-popper-"+ht]?Vt.setAttribute("data-"+ht,""):Vt.removeAttribute("data-"+ht)}),He.attributes.popper={}}}},Me=[{name:"offset",options:{offset:N}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!U}},er];M()&&re&&Me.push({name:"arrow",options:{element:re,padding:3}}),Me.push.apply(Me,(T==null?void 0:T.modifiers)||[]),s.popperInstance=sa(Ie,w,Object.assign({},T,{placement:A,onFirstUpdate:x,modifiers:Me}))}function dt(){s.popperInstance&&(s.popperInstance.destroy(),s.popperInstance=null)}function ve(){var h=s.props.appendTo,T,A=$();s.props.interactive&&h===Pn||h==="parent"?T=A.parentNode:T=$n(h,[A]),T.contains(w)||T.appendChild(w),s.state.isMounted=!0,ct()}function Ce(){return Ve(w.querySelectorAll("[data-tippy-root]"))}function Ze(h){s.clearDelayTimeouts(),h&&j("onTrigger",[s,h]),X();var T=I(!0),A=D(),N=A[0],L=A[1];fe.isTouch&&N==="hold"&&L&&(T=L),T?o=setTimeout(function(){s.show()},T):s.show()}function Se(h){if(s.clearDelayTimeouts(),j("onUntrigger",[s,h]),!s.state.isVisible){se();return}if(!(s.props.trigger.indexOf("mouseenter")>=0&&s.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(h.type)>=0&&i)){var T=I(!1);T?a=setTimeout(function(){s.state.isVisible&&s.hide()},T):l=requestAnimationFrame(function(){s.hide()})}}function Je(){s.state.isEnabled=!0}function ut(){s.hide(),s.state.isEnabled=!1}function ft(){clearTimeout(o),clearTimeout(a),cancelAnimationFrame(l)}function pt(h){if(!s.state.isDestroyed){j("onBeforeUpdate",[s,h]),we();var T=s.props,A=Yn(e,Object.assign({},T,Vn(h),{ignoreAttributes:!0}));s.props=A,le(),T.interactiveDebounce!==A.interactiveDebounce&&(ee(),C=Ln(xe,A.interactiveDebounce)),T.triggerTarget&&!A.triggerTarget?Be(T.triggerTarget).forEach(function(N){N.removeAttribute("aria-expanded")}):A.triggerTarget&&e.removeAttribute("aria-expanded"),Y(),V(),v&&v(T,A),s.popperInstance&&(ct(),Ce().forEach(function(N){requestAnimationFrame(N._tippy.popperInstance.forceUpdate)})),j("onAfterUpdate",[s,h])}}function gt(h){s.setProps({content:h})}function ci(){var h=s.state.isVisible,T=s.state.isDestroyed,A=!s.state.isEnabled,N=fe.isTouch&&!s.props.touch,L=Bt(s.props.duration,0,ae.duration);if(!(h||T||A||N)&&!$().hasAttribute("disabled")&&(j("onShow",[s],!1),s.props.onShow(s)!==!1)){if(s.state.isVisible=!0,M()&&(w.style.visibility="visible"),V(),X(),s.state.isMounted||(w.style.transition="none"),M()){var U=H(),re=U.box,Ie=U.content;Mt([re,Ie],0)}x=function(){var Me;if(!(!s.state.isVisible||f)){if(f=!0,w.offsetHeight,w.style.transition=s.props.moveTransition,M()&&s.props.animation){var Nt=H(),mt=Nt.box,He=Nt.content;Mt([mt,He],L),Qe([mt,He],"visible")}z(),Y(),Rn($t,s),(Me=s.popperInstance)==null||Me.forceUpdate(),j("onMount",[s]),s.props.animation&&M()&&Q(L,function(){s.state.isShown=!0,j("onShown",[s])})}},ve()}}function di(){var h=!s.state.isVisible,T=s.state.isDestroyed,A=!s.state.isEnabled,N=Bt(s.props.duration,1,ae.duration);if(!(h||T||A)&&(j("onHide",[s],!1),s.props.onHide(s)!==!1)){if(s.state.isVisible=!1,s.state.isShown=!1,f=!1,i=!1,M()&&(w.style.visibility="hidden"),ee(),se(),V(!0),M()){var L=H(),U=L.box,re=L.content;s.props.animation&&(Mt([U,re],N),Qe([U,re],"hidden"))}z(),Y(),s.props.animation?M()&&me(N,s.unmount):s.unmount()}}function ui(h){R().addEventListener("mousemove",C),Rn(st,C),C(h)}function fi(){s.state.isVisible&&s.hide(),s.state.isMounted&&(dt(),Ce().forEach(function(h){h._tippy.unmount()}),w.parentNode&&w.parentNode.removeChild(w),$t=$t.filter(function(h){return h!==s}),s.state.isMounted=!1,j("onHidden",[s]))}function pi(){s.state.isDestroyed||(s.clearDelayTimeouts(),s.unmount(),we(),delete e._tippy,s.state.isDestroyed=!0,j("onDestroy",[s]))}}function B(e,t){t===void 0&&(t={});var r=ae.plugins.concat(t.plugins||[]);ya();var o=Object.assign({},t,{plugins:r}),a=ga(e),l=a.reduce(function(i,c){var d=c&&Ba(c,o);return d&&i.push(d),i},[]);return at(e)?l[0]:l}B.defaultProps=ae,B.setDefaultProps=Oa,B.currentInput=fe;var Da=Object.assign({},gn,{effect:function(t){var r=t.state,o={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,o.popper),r.styles=o,r.elements.arrow&&Object.assign(r.elements.arrow.style,o.arrow)}}),Sa=function(t,r){var o;r===void 0&&(r={});var a=t,l=[],i=[],c,d=r.overrides,f=[],u=!1;function y(){i=a.map(function(s){return Be(s.props.triggerTarget||s.reference)}).reduce(function(s,b){return s.concat(b)},[])}function x(){l=a.map(function(s){return s.reference})}function k(s){a.forEach(function(b){s?b.enable():b.disable()})}function C(s){return a.map(function(b){var w=b.setProps;return b.setProps=function(v){w(v),b.reference===c&&s.setProps(v)},function(){b.setProps=w}})}function m(s,b){var w=i.indexOf(b);if(b!==c){c=b;var v=(d||[]).concat("content").reduce(function(_,P){return _[P]=a[w].props[P],_},{});s.setProps(Object.assign({},v,{getReferenceClientRect:typeof v.getReferenceClientRect=="function"?v.getReferenceClientRect:function(){var _;return(_=l[w])==null?void 0:_.getBoundingClientRect()}}))}}k(!1),x(),y();var O={fn:function(){return{onDestroy:function(){k(!0)},onHidden:function(){c=null},onClickOutside:function(w){w.props.showOnCreate&&!u&&(u=!0,c=null)},onShow:function(w){w.props.showOnCreate&&!u&&(u=!0,m(w,l[0]))},onTrigger:function(w,v){m(w,v.currentTarget)}}}},g=B(De(),Object.assign({},ca(r,["overrides"]),{plugins:[O].concat(r.plugins||[]),triggerTarget:i,popperOptions:Object.assign({},r.popperOptions,{modifiers:[].concat(((o=r.popperOptions)==null?void 0:o.modifiers)||[],[Da])})})),p=g.show;g.show=function(s){if(p(),!c&&s==null)return m(g,l[0]);if(!(c&&s==null)){if(typeof s=="number")return l[s]&&m(g,l[s]);if(a.indexOf(s)>=0){var b=s.reference;return m(g,b)}if(l.indexOf(s)>=0)return m(g,s)}},g.showNext=function(){var s=l[0];if(!c)return g.show(0);var b=l.indexOf(c);g.show(l[b+1]||s)},g.showPrevious=function(){var s=l[l.length-1];if(!c)return g.show(s);var b=l.indexOf(c),w=l[b-1]||s;g.show(w)};var E=g.setProps;return g.setProps=function(s){d=s.overrides||d,E(s)},g.setInstances=function(s){k(!0),f.forEach(function(b){return b()}),a=s,k(!1),x(),y(),f=C(g),g.setProps({triggerTarget:i})},f=C(g),g},Ma={name:"animateFill",defaultValue:!1,fn:function(t){var r;if(!((r=t.props.render)!=null&&r.$$tippy))return{};var o=it(t.popper),a=o.box,l=o.content,i=t.props.animateFill?Aa():null;return{onCreate:function(){i&&(a.insertBefore(i,a.firstElementChild),a.setAttribute("data-animatefill",""),a.style.overflow="hidden",t.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var d=a.style.transitionDuration,f=Number(d.replace("ms",""));l.style.transitionDelay=Math.round(f/10)+"ms",i.style.transitionDuration=d,Qe([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&Qe([i],"hidden")}}}};function Aa(){var e=De();return e.className=Sn,Qe([e],"hidden"),e}var Lt={clientX:0,clientY:0},lt=[];function qn(e){var t=e.clientX,r=e.clientY;Lt={clientX:t,clientY:r}}function Pa(e){e.addEventListener("mousemove",qn)}function $a(e){e.removeEventListener("mousemove",qn)}var La={name:"followCursor",defaultValue:!1,fn:function(t){var r=t.reference,o=jn(t.props.triggerTarget||r),a=!1,l=!1,i=!0,c=t.props;function d(){return t.props.followCursor==="initial"&&t.state.isVisible}function f(){o.addEventListener("mousemove",x)}function u(){o.removeEventListener("mousemove",x)}function y(){a=!0,t.setProps({getReferenceClientRect:null}),a=!1}function x(m){var O=m.target?r.contains(m.target):!0,g=t.props.followCursor,p=m.clientX,E=m.clientY,s=r.getBoundingClientRect(),b=p-s.left,w=E-s.top;(O||!t.props.interactive)&&t.setProps({getReferenceClientRect:function(){var _=r.getBoundingClientRect(),P=p,D=E;g==="initial"&&(P=_.left+b,D=_.top+w);var S=g==="horizontal"?_.top:D,M=g==="vertical"?_.right:P,$=g==="horizontal"?_.bottom:D,R=g==="vertical"?_.left:P;return{width:M-R,height:$-S,top:S,right:M,bottom:$,left:R}}})}function k(){t.props.followCursor&&(lt.push({instance:t,doc:o}),Pa(o))}function C(){lt=lt.filter(function(m){return m.instance!==t}),lt.filter(function(m){return m.doc===o}).length===0&&$a(o)}return{onCreate:k,onDestroy:C,onBeforeUpdate:function(){c=t.props},onAfterUpdate:function(O,g){var p=g.followCursor;a||p!==void 0&&c.followCursor!==p&&(C(),p?(k(),t.state.isMounted&&!l&&!d()&&f()):(u(),y()))},onMount:function(){t.props.followCursor&&!l&&(i&&(x(Lt),i=!1),d()||f())},onTrigger:function(O,g){St(g)&&(Lt={clientX:g.clientX,clientY:g.clientY}),l=g.type==="focus"},onHidden:function(){t.props.followCursor&&(y(),u(),i=!0)}}}};function Ra(e,t){var r;return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((((r=e.popperOptions)==null?void 0:r.modifiers)||[]).filter(function(o){var a=o.name;return a!==t.name}),[t])})}}var Na={name:"inlinePositioning",defaultValue:!1,fn:function(t){var r=t.reference;function o(){return!!t.props.inlinePositioning}var a,l=-1,i=!1,c=[],d={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(k){var C=k.state;o()&&(c.indexOf(C.placement)!==-1&&(c=[]),a!==C.placement&&c.indexOf(C.placement)===-1&&(c.push(C.placement),t.setProps({getReferenceClientRect:function(){return f(C.placement)}})),a=C.placement)}};function f(x){return Va(Nn(x),r.getBoundingClientRect(),Ve(r.getClientRects()),l)}function u(x){i=!0,t.setProps(x),i=!1}function y(){i||u(Ra(t.props,d))}return{onCreate:y,onAfterUpdate:y,onTrigger:function(k,C){if(St(C)){var m=Ve(t.reference.getClientRects()),O=m.find(function(p){return p.left-2<=C.clientX&&p.right+2>=C.clientX&&p.top-2<=C.clientY&&p.bottom+2>=C.clientY}),g=m.indexOf(O);l=g>-1?g:l}},onHidden:function(){l=-1}}}};function Va(e,t,r,o){if(r.length<2||e===null)return t;if(r.length===2&&o>=0&&r[0].left>r[1].right)return r[o]||t;switch(e){case"top":case"bottom":{var a=r[0],l=r[r.length-1],i=e==="top",c=a.top,d=l.bottom,f=i?a.left:l.left,u=i?a.right:l.right,y=u-f,x=d-c;return{top:c,bottom:d,left:f,right:u,width:y,height:x}}case"left":case"right":{var k=Math.min.apply(Math,r.map(function(w){return w.left})),C=Math.max.apply(Math,r.map(function(w){return w.right})),m=r.filter(function(w){return e==="left"?w.left===k:w.right===C}),O=m[0].top,g=m[m.length-1].bottom,p=k,E=C,s=E-p,b=g-O;return{top:O,bottom:g,left:p,right:E,width:s,height:b}}default:return t}}var ja={name:"sticky",defaultValue:!1,fn:function(t){var r=t.reference,o=t.popper;function a(){return t.popperInstance?t.popperInstance.state.elements.reference:r}function l(f){return t.props.sticky===!0||t.props.sticky===f}var i=null,c=null;function d(){var f=l("reference")?a().getBoundingClientRect():null,u=l("popper")?o.getBoundingClientRect():null;(f&&Xn(i,f)||u&&Xn(c,u))&&t.popperInstance&&t.popperInstance.update(),i=f,c=u,t.state.isMounted&&requestAnimationFrame(d)}return{onMount:function(){t.props.sticky&&d()}}}};function Xn(e,t){return e&&t?e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left:!0}B.setDefaultProps({render:Wn}),B.setDefaultProps({onShow:e=>{if(!e.props.content)return!1}});function Qn(e,t={},r={mount:!0,appName:"Tippy"}){r=Object.assign({mount:!0,appName:"Tippy"},r);const o=n.getCurrentInstance(),a=n.ref(),l=n.ref({isEnabled:!1,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1}),i=n.shallowRef();let c=null;const d=()=>c||(c=document.createDocumentFragment(),c),f=v=>{let _,P=n.isRef(v)?v.value:v;return n.isVNode(P)?(i.value||(i.value=n.createApp({name:r.appName,setup:()=>()=>n.isRef(v)?v.value:v}),o&&Object.assign(i.value._context,o.appContext),i.value.mount(d())),_=()=>d()):typeof P=="object"?(i.value||(i.value=n.createApp({name:r.appName,setup:()=>()=>n.h(n.isRef(v)?v.value:v)}),o&&Object.assign(i.value._context,o.appContext),i.value.mount(d())),_=()=>d()):_=P,_},u=v=>{let _={};return n.isRef(v)?_=v.value||{}:n.isReactive(v)?_={...v}:_={...v},_.content&&(_.content=f(_.content)),_.triggerTarget&&(_.triggerTarget=n.isRef(_.triggerTarget)?_.triggerTarget.value:_.triggerTarget),(!_.plugins||!Array.isArray(_.plugins))&&(_.plugins=[]),_.plugins=_.plugins.filter(P=>P.name!=="vueTippyReactiveState"),_.plugins.push({name:"vueTippyReactiveState",fn:()=>({onCreate(){l.value.isEnabled=!0},onMount(){l.value.isMounted=!0},onShow(){l.value.isMounted=!0,l.value.isVisible=!0},onShown(){l.value.isShown=!0},onHide(){l.value.isMounted=!1,l.value.isVisible=!1},onHidden(){l.value.isShown=!1},onUnmounted(){l.value.isMounted=!1},onDestroy(){l.value.isDestroyed=!0}})}),_},y=()=>{!a.value||a.value.setProps(u(t))},x=()=>{!a.value||!t.content||a.value.setContent(f(t.content))},k=v=>{var _;(_=a.value)===null||_===void 0||_.setContent(f(v))},C=v=>{var _;(_=a.value)===null||_===void 0||_.setProps(u(v))},m=()=>{var v;a.value&&(a.value.destroy(),a.value=void 0),c=null,(v=i.value)===null||v===void 0||v.unmount(),i.value=void 0},O=()=>{var v;(v=a.value)===null||v===void 0||v.show()},g=()=>{var v;(v=a.value)===null||v===void 0||v.hide()},p=()=>{var v;(v=a.value)===null||v===void 0||v.disable(),l.value.isEnabled=!1},E=()=>{var v;(v=a.value)===null||v===void 0||v.enable(),l.value.isEnabled=!0},s=()=>{var v;(v=a.value)===null||v===void 0||v.unmount()},b=()=>{if(!e)return;let v=n.isRef(e)?e.value:e;typeof v=="function"&&(v=v()),v&&(a.value=B(v,u(t)),v.$tippy=w)},w={tippy:a,refresh:y,refreshContent:x,setContent:k,setProps:C,destroy:m,hide:g,show:O,disable:p,enable:E,unmount:s,mount:b,state:l};return r.mount&&(o?o.isMounted?b():n.onMounted(b):b()),o&&n.onUnmounted(()=>{m()}),n.isRef(t)||n.isReactive(t)?n.watch(t,y,{immediate:!1}):n.isRef(t.content)&&n.watch(t.content,x,{immediate:!1}),w}function Ia(e,t){const r=n.ref();return n.onMounted(()=>{const a=(Array.isArray(e)?e.map(l=>l.value):typeof e=="function"?e():e.value).map(l=>l instanceof Element?l._tippy:l).filter(Boolean);r.value=Sa(a,t?{allowHTML:!0,...t}:{allowHTML:!0})}),{singleton:r}}function Ha(e){return typeof e=="function"?e():n.unref(e)}function za(e){var t,r;const o=Ha(e);return(r=(t=o)===null||t===void 0?void 0:t.$el)!==null&&r!==void 0?r:o}n.defineComponent({props:{to:{type:[String,Function]},tag:{type:[String,Object],default:"span"},contentTag:{type:[String,Object],default:"span"},contentClass:{type:String,default:null},appendTo:{default:()=>B.defaultProps.appendTo},aria:{default:()=>B.defaultProps.aria},delay:{default:()=>B.defaultProps.delay},duration:{default:()=>B.defaultProps.duration},getReferenceClientRect:{default:()=>B.defaultProps.getReferenceClientRect},hideOnClick:{type:[Boolean,String],default:()=>B.defaultProps.hideOnClick},ignoreAttributes:{type:Boolean,default:()=>B.defaultProps.ignoreAttributes},interactive:{type:Boolean,default:()=>B.defaultProps.interactive},interactiveBorder:{default:()=>B.defaultProps.interactiveBorder},interactiveDebounce:{default:()=>B.defaultProps.interactiveDebounce},moveTransition:{default:()=>B.defaultProps.moveTransition},offset:{default:()=>B.defaultProps.offset},onAfterUpdate:{default:()=>B.defaultProps.onAfterUpdate},onBeforeUpdate:{default:()=>B.defaultProps.onBeforeUpdate},onCreate:{default:()=>B.defaultProps.onCreate},onDestroy:{default:()=>B.defaultProps.onDestroy},onHidden:{default:()=>B.defaultProps.onHidden},onHide:{default:()=>B.defaultProps.onHide},onMount:{default:()=>B.defaultProps.onMount},onShow:{default:()=>B.defaultProps.onShow},onShown:{default:()=>B.defaultProps.onShown},onTrigger:{default:()=>B.defaultProps.onTrigger},onUntrigger:{default:()=>B.defaultProps.onUntrigger},onClickOutside:{default:()=>B.defaultProps.onClickOutside},placement:{default:()=>B.defaultProps.placement},plugins:{default:()=>B.defaultProps.plugins},popperOptions:{default:()=>B.defaultProps.popperOptions},render:{default:()=>B.defaultProps.render},showOnCreate:{type:Boolean,default:()=>B.defaultProps.showOnCreate},touch:{type:[Boolean,String,Array],default:()=>B.defaultProps.touch},trigger:{default:()=>B.defaultProps.trigger},triggerTarget:{default:()=>B.defaultProps.triggerTarget},animateFill:{type:Boolean,default:()=>B.defaultProps.animateFill},followCursor:{type:[Boolean,String],default:()=>B.defaultProps.followCursor},inlinePositioning:{type:Boolean,default:()=>B.defaultProps.inlinePositioning},sticky:{type:[Boolean,String],default:()=>B.defaultProps.sticky},allowHTML:{type:Boolean,default:()=>B.defaultProps.allowHTML},animation:{default:()=>B.defaultProps.animation},arrow:{default:()=>B.defaultProps.arrow},content:{default:()=>B.defaultProps.content},inertia:{default:()=>B.defaultProps.inertia},maxWidth:{default:()=>B.defaultProps.maxWidth},role:{default:()=>B.defaultProps.role},theme:{default:()=>B.defaultProps.theme},zIndex:{default:()=>B.defaultProps.zIndex}},emits:["state"],setup(e,{slots:t,emit:r,expose:o}){const a=n.ref(),l=n.ref(),i=n.ref(),c=n.ref(!1),d=()=>{let k={...e};for(const C of["to","tag","contentTag","contentClass"])k.hasOwnProperty(C)&&delete k[C];return k};let f=()=>za(a);e.to&&(typeof Element<"u"&&e.to instanceof Element?f=()=>e.to:e.to==="parent"?f=()=>{let k=a.value;return k||(k=a.value=l.value.parentElement),k}:(typeof e.to=="string"||e.to instanceof String)&&(f=()=>document.querySelector(e.to)));const u=Qn(f,d());let y=t.content;!y&&e.to==="parent"&&(y=t.default),n.onMounted(()=>{c.value=!0,n.nextTick(()=>{y&&u.setContent(()=>i.value)})}),n.watch(u.state,()=>{r("state",n.unref(u.state))},{immediate:!0,deep:!0}),n.watch(()=>e,()=>{u.setProps(d()),y&&u.setContent(()=>i.value)},{deep:!0});let x=n.reactive({elem:a,contentElem:i,mounted:c,...u});return o(x),()=>{const k=(typeof e.contentTag=="string",e.contentTag),C=y?n.h(k,{ref:i,style:{display:c.value?"inherit":"none"},class:e.contentClass},y(x)):null;if(e.to==="parent"){const g=[];if(!a.value){const p=n.h("span",{ref:l,"data-v-tippy":"",style:{display:"none"}});g.push(p)}return C&&g.push(C),g}const m=t.default?t.default(x):[];if(!e.tag){const g=n.h(m[0],{ref:a,"data-v-tippy":""});return C?[g,C]:g}const O=(typeof e.tag=="string",e.tag);return n.h(O,{ref:a,"data-v-tippy":""},C?[m,C]:m)}}});const Ga=["a11y","allowHTML","arrow","flip","flipOnUpdate","hideOnClick","ignoreAttributes","inertia","interactive","lazy","multiple","showOnInit","touch","touchHold"];let Rt={};Object.keys(B.defaultProps).forEach(e=>{Ga.includes(e)?Rt[e]={type:Boolean,default:function(){return B.defaultProps[e]}}:Rt[e]={default:function(){return B.defaultProps[e]}}}),n.defineComponent({props:Rt,setup(e){const t=n.ref([]),{singleton:r}=Ia(t,e);return{instances:t,singleton:r}},mounted(){var e;const r=this.$el.parentElement.querySelectorAll("[data-v-tippy]");this.instances=Array.from(r).map(o=>o._tippy).filter(Boolean),(e=this.singleton)===null||e===void 0||e.setInstances(this.instances)},render(){let e=this.$slots.default?this.$slots.default():[];return n.h(()=>e)}});const Ya=B.setDefaultProps;Ya({ignoreAttributes:!0,plugins:[ja,Na,La,Ma]});function Fa(){const e=n.inject(rn);if(!e)throw Error("Failed to inject emitBarEvent!");return e}const Ua={class:"g-gantt-tooltip-container"},Wa={class:"g-gantt-tooltip-area-container"},qa={class:"g-gantt-tooltip-area"},Xa={class:"g-gantt-tooltip-category-container"},Qa={class:"g-gantt-tooltip-category"},Ka={class:"g-gantt-tooltip-promotion-title"},Za={class:"g-gantt-tooltip-promotion-time-container"},Ja={class:"g-gantt-tooltip-time"},ei="cadetblue",ti=n.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},config:{},toDayjs:{}},setup(e){n.useCssVars(y=>({"4613e272":l.value}));const t=n.inject("iconComponent"),r=e,{bar:o}=n.toRefs(r),a=n.computed(()=>{var x,k,C;const y=(C=(k=(x=o.value)==null?void 0:x.ganttBarConfig)==null?void 0:k.tooltipInfo)==null?void 0:C.publishedAt;return y?!G.default(new Date(y*1e3)).isAfter(new Date):!1}),l=n.ref(a.value?"pointer":"default"),i=n.computed(()=>{var y,x;return((x=(y=o==null?void 0:o.value)==null?void 0:y.ganttBarConfig.style)==null?void 0:x.backgroundColor)||ei}),c=()=>{var x,k;const y=(k=(x=o.value)==null?void 0:x.ganttBarConfig.tooltipInfo)==null?void 0:k.promotionUrl;!y||!a.value||window.location.assign(y)},d=n.computed(()=>{var y;return(y=o.value)==null?void 0:y[r.config.barStart.value]}),f=n.computed(()=>{var y;return(y=o.value)==null?void 0:y[r.config.barEnd.value]}),u=n.computed(()=>{if(!(o!=null&&o.value))return"";const y=r.toDayjs(d.value).format("DD.MM."),x=r.toDayjs(f.value).format("DD.MM.YYYY");return`${y} \u2013 ${x}`});return(y,x)=>{var k,C,m,O,g,p,E,s,b,w,v,_;return n.openBlock(),n.createElementBlock("div",{class:"g-gantt-tooltip",style:n.normalizeStyle({fontFamily:y.config.font.value}),onClick:c},[n.createElementVNode("div",Ua,[n.createElementVNode("div",Wa,[n.createElementVNode("span",qa,n.toDisplayString((m=(C=(k=n.unref(o))==null?void 0:k.ganttBarConfig)==null?void 0:C.tooltipInfo)==null?void 0:m.areaName),1),n.unref(o)?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{key:0,name:(p=(g=(O=n.unref(o))==null?void 0:O.ganttBarConfig)==null?void 0:g.tooltipInfo)==null?void 0:p.icon,size:"24"},null,8,["name"])):n.createCommentVNode("",!0)]),n.createElementVNode("div",Xa,[n.createElementVNode("div",{class:"g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",style:n.normalizeStyle({background:i.value})},null,4),n.createElementVNode("span",Qa,n.toDisplayString((b=(s=(E=n.unref(o))==null?void 0:E.ganttBarConfig)==null?void 0:s.tooltipInfo)==null?void 0:b.categoryName),1),n.createElementVNode("div",{class:"g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",style:n.normalizeStyle({background:i.value})},null,4)]),n.createElementVNode("p",Ka,n.toDisplayString((_=(v=(w=n.unref(o))==null?void 0:w.ganttBarConfig)==null?void 0:v.tooltipInfo)==null?void 0:_.title),1),n.createElementVNode("div",Za,[n.createElementVNode("p",Ja,[n.renderSlot(y.$slots,"default",{bar:n.unref(o),barStart:d.value,barEnd:f.value},()=>[n.createTextVNode(n.toDisplayString(u.value),1)],!0)]),a.value?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{key:0,name:"chevron-right",size:"16",style:{color:"#008075"}})):n.createCommentVNode("",!0)])])],4)}}}),Ei="",ni=Ae(ti,[["__scopeId","data-v-00b81e26"]]),ri=["id"],oi={class:"g-gantt-bar-label"},ai=["innerHTML"],ii=`
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`,si=8,li=n.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){var P;n.useCssVars(D=>({"408c4e0a":n.unref(a)}));const t=e,r=Fa(),{bar:o}=n.toRefs(t),a=(P=t.bar.ganttBarConfig.style)==null?void 0:P.backgroundColor,{mapTimeToPosition:l,mapPositionToTime:i}=wt(),{font:c,barEnd:d,barStart:f,rowHeight:u,width:y,chartStart:x,chartEnd:k,chartSize:C}=ye(),m=n.ref(),{toDayjs:O}=bt(),g=n.ref(!1),p=n.computed(()=>o.value.ganttBarConfig),E=n.inject(on),s=D=>{var H,I;const S=document.querySelector(".tippy-svg-arrow");if(!S)return;const $=((H=S.style.transform)!=null?H:"").match(/translate3d\((-?\d+)/),R=(I=document.querySelector(".tippy-content"))==null?void 0:I.clientHeight;if(D==="bottom"&&$){const V=S.firstElementChild;V.style.transform="rotateX(180deg)";const j=parseInt($[1]);S.style.transform=`translate3d(${j}px, -${R+7}px, 0px)`}if(D==="top"&&$){const V=parseInt($[1]);S.style.transform=`translate3d(${V}px, -1px, 0px)`}};n.onMounted(()=>{!(m!=null&&m.value)||Qn(m.value,{content:n.h(ni,{bar:o.value,config:{barStart:f,barEnd:d,font:c},toDayjs:O}),arrow:ii,interactiveBorder:0,placement:"top",interactive:!0,popperOptions:{modifiers:[{name:"offset",options:{offset:[5,15]}},{name:"applyArrowHide",enabled:!0,phase:"write",fn({instance:D}){s((D==null?void 0:D.state.placement)||"top")}}]},delay:[0,0],duration:[300,0]})});const b=D=>{var $,R;if(D.preventDefault(),D.type==="mousedown"||!(E!=null&&E.value))return;const S=(R=($=E==null?void 0:E.value)==null?void 0:$[0])==null?void 0:R.getBoundingClientRect();if(!S)return;const M=i(D.clientX-S.left);r(D,o.value,M)},w=n.ref(0),v=n.ref(0),_=n.computed(()=>{const D=new Date(o.value.myBeginDate).getTime(),S=new Date(o.value.myEndDate).getTime();return Math.abs(D-S)/(1e3*60*60*24)<=2?0:v.value-w.value-si});return n.onMounted(()=>{n.watch([o,y,x,k,C.width],()=>{w.value=l(o.value[f.value]),v.value=l(o.value[d.value])},{deep:!0,immediate:!0})}),(D,S)=>{var M,$,R;return n.openBlock(),n.createElementBlock("div",{id:p.value.id,ref_key:"ganttBarRef",ref:m,class:n.normalizeClass(["g-gantt-bar",p.value.asArrow?"g-gantt-bar-is-arrow":"",p.value.class||""]),style:n.normalizeStyle({...p.value.style,position:"relative",top:`${n.unref(u)*.1}px`,left:`${w.value}px`,width:`${_.value}px`,height:`${n.unref(u)*.8}px`,zIndex:g.value?3:2}),onClick:b,onContextmenu:b,onDblclick:b,onMousedown:b,onMouseenter:b,onMouseleave:b},[n.createElementVNode("div",oi,[n.renderSlot(D.$slots,"default",{bar:n.unref(o)},()=>[n.createElementVNode("div",null,n.toDisplayString(p.value.label||""),1),p.value.html?(n.openBlock(),n.createElementBlock("div",{key:0,innerHTML:p.value.html},null,8,ai)):n.createCommentVNode("",!0)])]),p.value.asArrow?(n.openBlock(),n.createElementBlock("div",{key:0,style:n.normalizeStyle({borderLeft:`8px solid #${(R=($=(M=n.unref(o))==null?void 0:M.ganttBarConfig)==null?void 0:$.style)==null?void 0:R.backgroundColor}`}),class:"g-gantt-bar-arrow"},null,4)):n.createCommentVNode("",!0),p.value.hasHandles?(n.openBlock(),n.createElementBlock(n.Fragment,{key:1},[S[0]||(S[0]=n.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1)),S[1]||(S[1]=n.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1))],64)):n.createCommentVNode("",!0)],46,ri)}}}),_i="",Kn=n.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},overlaps:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:t}){const r=e,o=n.ref([]),a=t,{rowHeight:l,colors:i,labelColumnTitle:c}=ye(),{highlightOnHover:d}=n.toRefs(r),f=n.ref(!1),u=n.computed(()=>({height:`${l.value}px`,background:(d==null?void 0:d.value)&&f.value?i.value.hoverHighlight:null})),{mapPositionToTime:y}=wt(),x=n.useTemplateRef("barContainer");n.provide(on,x);const k=p=>{var w,v;const E=(v=(w=x.value)==null?void 0:w[0])==null?void 0:v.getBoundingClientRect();if(!E){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const s=p.clientX-E.left,b=y(s);a("drop",{e:p,datetime:b})};function C(p,E,s,b){return p<=b&&s<=E}function m(p){const E=[];for(let s=0;s<p.length;s++)for(let b=s+1;b<p.length;b++)C(p[s].myBeginDate,p[s].myEndDate,p[b].myBeginDate,p[b].myEndDate)&&E.push(G.default(p[s].myEndDate).isAfter(p[b].myEndDate)?p[s]:p[b]);return E}const O=()=>{const p=[],E=s=>{if(!s||s.length===0)return;const b=m(s);if(b.length>0){const w=s.filter(_=>!b.includes(_)),v=s.filter(_=>b.includes(_));p.push(w),E(v)}else p.push(s)};return E(r.bars),p};n.onMounted(()=>{o.value=O()});const g=p=>!p||/^\s*$/.test(p);return(p,E)=>(n.openBlock(),n.createElementBlock("div",null,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(o.value,s=>(n.openBlock(),n.createElementBlock("div",{key:s[0].ganttBarConfig.id,style:n.normalizeStyle(u.value),class:"g-gantt-row",onDragleave:E[0]||(E[0]=b=>f.value=!1),onDrop:E[1]||(E[1]=b=>k(b)),onMouseleave:E[2]||(E[2]=b=>f.value=!1),onMouseover:E[3]||(E[3]=b=>f.value=!0),onDragover:E[4]||(E[4]=n.withModifiers(b=>f.value=!0,["prevent"]))},[!g(p.label)&&!n.unref(c)?(n.openBlock(),n.createElementBlock("div",{key:0,style:n.normalizeStyle({background:n.unref(i).primary,color:n.unref(i).text}),class:"g-gantt-row-label"},[n.renderSlot(p.$slots,"label",{},()=>[n.createTextVNode(n.toDisplayString(p.label),1)])],4)):n.createCommentVNode("",!0),n.createElementVNode("div",n.mergeProps({ref_for:!0,ref:"barContainer",class:"g-gantt-row-bars-container"},p.$attrs),[n.createVNode(n.TransitionGroup,{name:"bar-transition sys",tag:"div"},{default:n.withCtx(()=>[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(s,b=>(n.openBlock(),n.createBlock(li,{key:b.ganttBarConfig.id,bar:b},{default:n.withCtx(()=>[n.renderSlot(p.$slots,"bar-label",{bar:b})]),_:2},1032,["bar"]))),128))]),_:2},1024)],16)],36))),128))]))}}),Ti="";function Zn(){G.default.extend(nr),G.default.extend(rr),G.default.extend(Gt),G.default.extend(ir),G.default.extend(or),G.default.extend(tr),G.default.extend(ar)}const Jn={install(e,t){Zn(),e.component("GGanttChart",cn),e.component("GGanttRow",Kn)}};F.GGanttChart=cn,F.GGanttRow=Kn,F.default=Jn,F.extendDayjs=Zn,F.ganttastic=Jn,Object.defineProperties(F,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(F,Oe="top"){if(!F||typeof document>"u")return;const n=document.head,et=document.createElement("style");Oe==="top"&&n.firstChild?n.insertBefore(et,n.firstChild):n.appendChild(et),et.appendChild(document.createTextNode(F))}injectStyle(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-chart-overview {
  width: 50px;
  height: 100%;
}
.g-gantt-chart-wrapper {
  width: 100%;
  padding-left: 16px;
  overflow-x: scroll;
}
.g-gantt-chart-container {
  width: 100%;
  display: flex;
  background: #f0f1f2;
  padding: 0 24px 0 0;
  border-top: 4px solid #91979c;
  border-bottom: 4px solid #91979c;
}
.g-gantt-chart-vertical-grid__line {
  height: 100%;
  width: 2px;
  background-color: black;
}
.g-gantt-chart-quarters {
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 64px;
  background-color: #f0f1f2;
}
.g-gantt-chart-quarter {
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 100%;

  padding-bottom: 4px;

  line-height: 24.8px;
  color: #636a6d;
}
.with-column {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.g-gantt-rows-container {
  position: relative;
  height: 400px;
}
.g-gantt-chart-container--5-quarters-width {
  /* min-width of week * (1 year weeks + 1st quarter weeks) */
  min-width: calc(21px * (52 + 13));
}
.g-gantt-chart-container--4-quarters-width {
  /* min-width of week * 1 year weeks */
  min-width: calc(21px * 52);
}
.labels-in-column {
  display: flex;
  flex-direction: row;
}
`,"top");injectStyle(`
.g-gantt-row {
  height: 24px !important;
}
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`,"top");injectStyle(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
  z-index: 4;
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunits-low {
  height: 24px;
  display: flex;
  gap: 2px;
}
.g-timeunits-upper {
  height: 41px;
}
.g-timeunit-low:nth-child(odd) {
  color: #4c5356;
  font-size: 12px;
  line-height: 15.6px;
}
.g-timeunit-low {
  position: relative;
  display: flex;
  justify-content: center;

  width: 30px;
  height: 24px;
  color: #7a8084;

  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  text-align: center;

  text-underline-position: from-font;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
}
.g-timeunit-low-kw {
  position: absolute;
  top: -10px;

  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  text-underline-position: from-font;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
}
.g-timeunit {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0f1f2;

  color: #636a6d;
  font-size: 16px;
  font-weight: 400;
  line-height: 24.8px;
  text-align: center;
  text-underline-position: from-font;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
`,"top");injectStyle(`
.g-grid-current-time {
  position: absolute;
  height: 100%;
  display: flex;
  z-index: 5;
  pointer-events: none;
}
.g-grid-current-time-marker {
  width: 0px;
  height: calc(100% - 2px);
  display: flex;
}
.g-grid-current-time-text {
  font-size: x-small;
}
`,"top");injectStyle(`
.g-label-column {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(64, 64, 64);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  font-size: 0.9em;
}
.g-label-column-header {
  width: 100%;
  height: 80px;
  min-height: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
}
.g-label-column-rows {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
}
.g-label-column-row {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.1rem 0.3rem;
  overflow: hidden;
  white-space: normal;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.g-label-column-row:last-child {
  border-bottom-left-radius: 5px;
}
`,"top");injectStyle(`
.g-grid-container[data-v-a719d7c7] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line[data-v-a719d7c7] {
  width: 1px;
  height: 100%;
}
`,"top");injectStyle(`
#tippy-1 {
  top: auto;
  top: initial;
  right: auto;
  right: initial;
  bottom: auto;
  bottom: initial;
  left: auto;
  left: initial;
  transform: none;
  transform: initial;
}
.tippy-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 6px solid red;
  margin-top: -35px;
}
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: visible;
  margin: 8px 0;

  border-radius: 4px 0 0 4px;
}
.g-gantt-bar-is-arrow {
  height: 6px !important;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
.g-gantt-bar-arrow {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid var(--408c4e0a);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  z-index: 10;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
`,"top");injectStyle(`
.g-gantt-legend[data-v-517e11e4] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: var(--8b45b7ac);

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
}
`,"top");injectStyle(`
.g-gantt-grid-current-date[data-v-dd346c68] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: center;
}
`,"top");injectStyle(`
.g-gantt-legend-collapse[data-v-1dd633de] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 48px;
  margin-bottom: 14px;
}
.g-gantt-legend-area-icon[data-v-1dd633de] {
  margin: 0 8px 0 16px;
}
.g-gantt-legend-promotion[data-v-1dd633de] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-gantt-legend-areas-list[data-v-1dd633de] {
  display: flex;
  flex-direction: column;
}
.g-gantt-legend-area-list[data-v-1dd633de] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-do-collapse[data-v-1dd633de]:hover {
  cursor: pointer;
  color: #008075;
}
.g-gantt-legend-category-color[data-v-1dd633de] {
  width: 44px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
`,"top");injectStyle(`
.g-gantt-legend-collapse[data-v-46e9751c] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
}
.g-gantt-legend-title[data-v-46e9751c] {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}
.g-gantt-legend-area[data-v-46e9751c] {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;

  color: #1b1e1f;
}
.g-gantt-legend-category-color[data-v-46e9751c] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend-promotion[data-v-46e9751c] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-gantt-legend-do-uncollapse[data-v-46e9751c]:hover {
  cursor: pointer;
  color: #008075;
}
.g-gantt-legend-area-list[data-v-46e9751c] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-category-name[data-v-46e9751c] {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}
`,"top");injectStyle(`
.g-gantt-tooltip[data-v-00b81e26] {
  display: flex;
  align-items: flex-start;

  width: 224px;

  background: white;
  color: #4c5356;
  z-index: 4;
  font-size: 0.85em;
  padding-top: 8px;
  padding-bottom: 12px;
  border-radius: 3px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;

  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
}
.g-gantt-tooltip[data-v-00b81e26]:hover {
  cursor: var(--4613e272);
}
.g-gantt-tooltip-category-container[data-v-00b81e26] {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.g-gantt-tooltip-container[data-v-00b81e26] {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.g-gantt-tooltip-time[data-v-00b81e26] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;

  color: #4c5356;
}
.g-gantt-tooltip-promotion-time-container[data-v-00b81e26] {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}
.g-gantt-tooltip-area[data-v-00b81e26] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-category[data-v-00b81e26] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-area-container[data-v-00b81e26] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.g-gantt-tooltip-promotion-title[data-v-00b81e26] {
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;

  color: #1b1e1f;

  padding: 0 12px 10px 12px;
}
.g-gantt-tooltip-color-line[data-v-00b81e26] {
  height: 2px;
}
.g-gantt-tooltip-color-line-left[data-v-00b81e26] {
  min-width: 8px;
  margin-right: 4px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-tooltip-color-line-right[data-v-00b81e26] {
  margin-left: 4px;
  width: 100%;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
@media (max-width: 1400px) {
.g-gantt-tooltip[data-v-00b81e26] {
    width: 208px;

    padding-top: 6px;
    padding-bottom: 8px;
}
.g-gantt-tooltip-color-line-left[data-v-00b81e26] {
    min-width: 4px;
}
.g-gantt-tooltip-area-container[data-v-00b81e26],
  .g-gantt-tooltip-promotion-title[data-v-00b81e26],
  .g-gantt-tooltip-promotion-time-container[data-v-00b81e26] {
    padding-left: 8px;
    padding-right: 8px;
}
}
`,"top");
