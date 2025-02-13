(function(F,Oe){typeof exports=="object"&&typeof module<"u"?Oe(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],Oe):(F=typeof globalThis<"u"?globalThis:F||self,Oe(F.VueGanttastic={},F.dayjs,F.Vue))})(this,function(F,Oe,n){"use strict";const G=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(Oe);var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jt={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){var r="day";return function(o,a,l){var s=function(u){return u.add(4-u.isoWeekday(),r)},c=a.prototype;c.isoWeekYear=function(){return s(this).year()},c.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),r);var f,y,b,C,O=s(this),m=(f=this.isoWeekYear(),y=this.$u,b=(y?l.utc:l)().year(f).startOf("year"),C=4-b.isoWeekday(),b.isoWeekday()>4&&(C+=7),b.add(C,r));return O.diff(m,"week")+1},c.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var d=c.startOf;c.startOf=function(u,f){var y=this.$utils(),b=!!y.u(f)||f;return y.p(u)==="isoweek"?b?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(u,f)}}})})(jt);const tr=jt.exports;var It={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o){o.prototype.isSameOrBefore=function(a,l){return this.isSame(a,l)||this.isBefore(a,l)}}})})(It);const nr=It.exports;var Ht={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o){o.prototype.isSameOrAfter=function(a,l){return this.isSame(a,l)||this.isAfter(a,l)}}})})(Ht);const rr=Ht.exports;var zt={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o,a){o.prototype.isBetween=function(l,s,c,d){var u=a(l),f=a(s),y=(d=d||"()")[0]==="(",b=d[1]===")";return(y?this.isAfter(u,c):!this.isBefore(u,c))&&(b?this.isBefore(f,c):!this.isAfter(f,c))||(y?this.isBefore(u,c):!this.isAfter(u,c))&&(b?this.isAfter(f,c):!this.isBefore(f,c))}}})})(zt);const Gt=zt.exports;var Yt={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){var r="week",o="year";return function(a,l,s){var c=l.prototype;c.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var u=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var f=s(this).startOf(o).add(1,o).date(u),y=s(this).endOf(r);if(f.isBefore(y))return 1}var b=s(this).startOf(o).date(u).startOf(r).subtract(1,"millisecond"),C=this.diff(b,r,!0);return C<0?s(this).startOf("week").week():Math.ceil(C)},c.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Yt);const or=Yt.exports;var Ft={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){return function(r,o,a){var l=o.prototype,s=l.format;a.en.ordinal=function(c){var d=["th","st","nd","rd"],u=c%100;return"["+c+(d[(u-20)%10]||d[u]||d[0])+"]"},l.format=function(c){var d=this,u=this.$locale();if(!this.isValid())return s.bind(this)(c);var f=this.$utils(),y=(c||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(b){switch(b){case"Q":return Math.ceil((d.$M+1)/3);case"Do":return u.ordinal(d.$D);case"gggg":return d.weekYear();case"GGGG":return d.isoWeekYear();case"wo":return u.ordinal(d.week(),"W");case"w":case"ww":return f.s(d.week(),b==="w"?1:2,"0");case"W":case"WW":return f.s(d.isoWeek(),b==="W"?1:2,"0");case"k":case"kk":return f.s(String(d.$H===0?24:d.$H),b==="k"?1:2,"0");case"X":return Math.floor(d.$d.getTime()/1e3);case"x":return d.$d.getTime();case"z":return"["+d.offsetName()+"]";case"zzz":return"["+d.offsetName("long")+"]";default:return b}});return s.bind(this)(y)}}})})(Ft);const ar=Ft.exports;var Ut={exports:{}};(function(e,t){(function(r,o){e.exports=o()})(Ee,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},o=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,l=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,c={},d=function(m){return(m=+m)+(m>68?1900:2e3)},u=function(m){return function(E){this[m]=+E}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=function(E){if(!E||E==="Z")return 0;var p=E.match(/([+-]|\d\d)/g),k=60*p[1]+(+p[2]||0);return k===0?0:p[0]==="+"?-k:k}(m)}],y=function(m){var E=c[m];return E&&(E.indexOf?E:E.s.concat(E.f))},b=function(m,E){var p,k=c.meridiem;if(k){for(var x=1;x<=24;x+=1)if(m.indexOf(k(x,0,E))>-1){p=x>12;break}}else p=m===(E?"pm":"PM");return p},C={A:[s,function(m){this.afternoon=b(m,!1)}],a:[s,function(m){this.afternoon=b(m,!0)}],S:[/\d/,function(m){this.milliseconds=100*+m}],SS:[a,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[l,u("seconds")],ss:[l,u("seconds")],m:[l,u("minutes")],mm:[l,u("minutes")],H:[l,u("hours")],h:[l,u("hours")],HH:[l,u("hours")],hh:[l,u("hours")],D:[l,u("day")],DD:[a,u("day")],Do:[s,function(m){var E=c.ordinal,p=m.match(/\d+/);if(this.day=p[0],E)for(var k=1;k<=31;k+=1)E(k).replace(/\[|\]/g,"")===m&&(this.day=k)}],M:[l,u("month")],MM:[a,u("month")],MMM:[s,function(m){var E=y("months"),p=(y("monthsShort")||E.map(function(k){return k.slice(0,3)})).indexOf(m)+1;if(p<1)throw new Error;this.month=p%12||p}],MMMM:[s,function(m){var E=y("months").indexOf(m)+1;if(E<1)throw new Error;this.month=E%12||E}],Y:[/[+-]?\d+/,u("year")],YY:[a,function(m){this.year=d(m)}],YYYY:[/\d{4}/,u("year")],Z:f,ZZ:f};function O(m){var E,p;E=m,p=c&&c.formats;for(var k=(m=E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,P,S){var B=S&&S.toUpperCase();return P||p[S]||r[S]||p[B].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(R,L,j){return L||j.slice(1)})})).match(o),x=k.length,i=0;i<x;i+=1){var w=k[i],g=C[w],v=g&&g[0],_=g&&g[1];k[i]=_?{regex:v,parser:_}:w.replace(/^\[|\]$/g,"")}return function(M){for(var P={},S=0,B=0;S<x;S+=1){var R=k[S];if(typeof R=="string")B+=R.length;else{var L=R.regex,j=R.parser,H=M.slice(B),I=L.exec(H)[0];j.call(P,I),M=M.replace(I,"")}}return function(N){var z=N.afternoon;if(z!==void 0){var Y=N.hours;z?Y<12&&(N.hours+=12):Y===12&&(N.hours=0),delete N.afternoon}}(P),P}}return function(m,E,p){p.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(d=m.parseTwoDigitYear);var k=E.prototype,x=k.parse;k.parse=function(i){var w=i.date,g=i.utc,v=i.args;this.$u=g;var _=v[1];if(typeof _=="string"){var M=v[2]===!0,P=v[3]===!0,S=M||P,B=v[2];P&&(B=v[2]),c=this.$locale(),!M&&B&&(c=p.Ls[B]),this.$d=function(H,I,N){try{if(["x","X"].indexOf(I)>-1)return new Date((I==="X"?1e3:1)*H);var z=O(I)(H),Y=z.year,ee=z.month,te=z.day,ge=z.hours,ie=z.minutes,X=z.seconds,se=z.milliseconds,me=z.zone,Q=new Date,pe=te||(Y||ee?1:Q.getDate()),ne=Y||Q.getFullYear(),le=0;Y&&!ee||(le=ee>0?ee-1:Q.getMonth());var we=ge||0,he=ie||0,xe=X||0,ke=se||0;return me?new Date(Date.UTC(ne,le,pe,we,he,xe,ke+60*me.offset*1e3)):N?new Date(Date.UTC(ne,le,pe,we,he,xe,ke)):new Date(ne,le,pe,we,he,xe,ke)}catch{return new Date("")}}(w,_,g),this.init(),B&&B!==!0&&(this.$L=this.locale(B).$L),S&&w!=this.format(_)&&(this.$d=new Date("")),c={}}else if(_ instanceof Array)for(var R=_.length,L=1;L<=R;L+=1){v[1]=_[L-1];var j=p.apply(this,v);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}L===R&&(this.$d=new Date(""))}else x.call(this,i)}}})})(Ut);const ir=Ut.exports;var Wt;const He=typeof window<"u";He&&((Wt=window==null?void 0:window.navigator)==null?void 0:Wt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function sr(e){return typeof e=="function"?e():n.unref(e)}function lr(e){return e}function cr(e){return n.getCurrentScope()?(n.onScopeDispose(e),!0):!1}function dr(e,t=!0){n.getCurrentInstance()?n.onMounted(e):t?e():n.nextTick(e)}function qt(e){var t;const r=sr(e);return(t=r==null?void 0:r.$el)!=null?t:r}const fr=He?window:void 0;He&&window.document,He&&window.navigator,He&&window.location;function ur(e,t=!1){const r=n.ref(),o=()=>r.value=Boolean(e());return o(),dr(o,t),r}const vt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt="__vueuse_ssr_handlers__";vt[yt]=vt[yt]||{},vt[yt];var Xt=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable,mr=(e,t)=>{var r={};for(var o in e)pr.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&Xt)for(var o of Xt(e))t.indexOf(o)<0&&gr.call(e,o)&&(r[o]=e[o]);return r};function hr(e,t,r={}){const o=r,{window:a=fr}=o,l=mr(o,["window"]);let s;const c=ur(()=>a&&"ResizeObserver"in a),d=()=>{s&&(s.disconnect(),s=void 0)},u=n.watch(()=>qt(e),y=>{d(),c.value&&a&&y&&(s=new ResizeObserver(t),s.observe(y,l))},{immediate:!0,flush:"post"}),f=()=>{d(),u()};return cr(f),{isSupported:c,stop:f}}function Qt(e,t={width:0,height:0},r={}){const o=n.ref(t.width),a=n.ref(t.height);return hr(e,([l])=>{o.value=l.contentRect.width,a.value=l.contentRect.height},r),n.watch(()=>qt(e),l=>{o.value=l?t.width:0,a.value=l?t.height:0}),{width:o,height:a}}var Kt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Kt||(Kt={}));var vr=Object.defineProperty,Zt=Object.getOwnPropertySymbols,yr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,Jt=(e,t,r)=>t in e?vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wr=(e,t)=>{for(var r in t||(t={}))yr.call(t,r)&&Jt(e,r,t[r]);if(Zt)for(var r of Zt(t))br.call(t,r)&&Jt(e,r,t[r]);return e};wr({linear:lr},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const en={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},tn=Symbol("CHART_ROWS_KEY"),nn=Symbol("CONFIG_KEY"),rn=Symbol("EMIT_BAR_EVENT_KEY"),on=Symbol("BAR_CONTAINER_KEY");function ye(){const e=n.inject(nn);if(!e)throw Error("Failed to inject config!");return e}const an="YYYY-MM-DD HH:mm";function bt(e=ye()){const{chartStart:t,chartEnd:r,barStart:o,barEnd:a,dateFormat:l}=e,s=n.computed(()=>d(t.value)),c=n.computed(()=>d(r.value)),d=(f,y)=>{let b;if(y!==void 0&&typeof f!="string"&&!(f instanceof Date)&&(b=y==="start"?f[o.value]:f[a.value]),typeof f=="string")b=f;else if(f instanceof Date)return G.default(f);const C=l.value||an;return G.default(b,C,!0)};return{chartStartDayjs:s,chartEndDayjs:c,toDayjs:d,format:(f,y)=>y===!1?f instanceof Date?f:G.default(f).toDate():(typeof f=="string"||f instanceof Date?d(f):f).format(y)}}const xr={class:"g-gantt-grid-current-date"},kr=n.defineComponent({__name:"GGanttGridCurrentDay",props:{parentWidth:{}},setup(e){const t=e,r=n.inject("iconComponent"),o=new Date,a=new Date(o.getFullYear(),0,1),l=n.computed(()=>Math.ceil((new Date(o.getTime()).valueOf()-a.valueOf())/864e5)),s=n.computed(()=>t.parentWidth/52/7),c=n.ref(l.value>=365-10),d=n.computed(()=>l.value>=365-10?0:s.value*l.value-33),u=n.computed(()=>l.value<10?0:s.value*l.value-33);return(f,y)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createElementVNode("div",{style:n.normalizeStyle({position:"absolute",top:"-65px",zIndex:3,left:s.value*l.value-7.5+"px"})},[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(r)),{name:"marker-current-date",size:"16","size-s":"16",style:{color:"#C882BE"}}))],4),n.createElementVNode("div",{style:n.normalizeStyle({position:"absolute",top:"-52px",left:c.value?"unset":u.value+"px",right:c.value?d.value+"px":"unset",width:"68px",height:"20px",backgroundColor:"white",padding:"2px",borderRadius:"4px"})},[n.createElementVNode("p",xr,n.toDisplayString(n.unref(G.default)(new Date).format("DD.MM.YYYY")),1)],4),n.createElementVNode("div",{style:n.normalizeStyle({position:"absolute",width:"2px",height:"100%",left:s.value*l.value+"px",borderRight:"2px solid #C882BE",zIndex:3})},null,4)],64))}}),mi="",ze=(e,t)=>{const r=e.__vccOpts||e;for(const[o,a]of t)r[o]=a;return r},Cr=ze(kr,[["__scopeId","data-v-dd346c68"]]);function sn(){const{precision:e}=ye(),{chartStartDayjs:t,chartEndDayjs:r}=bt(),o=n.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),a=n.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),l={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"W",month:"MMM",year:"YYYY"},s=n.computed(()=>{const c=[],d=[],u=r.value.diff(t.value,"minutes",!0),f=o.value,y=a.value;let b=t.value,C=t.value;for(;C.isSameOrBefore(r.value);){const O=C.endOf(y),E=O.isAfter(r.value)?r.value.diff(C,"minutes",!0)/u*100:O.diff(C,"minutes",!0)/u*100;d.push({label:C.format(l[e==null?void 0:e.value]),value:String(C),date:C.toDate(),width:String(E)+"%"}),C=O.add(1,y==="isoWeek"?"week":y).startOf(y)}for(;b.isSameOrBefore(r.value);){const O=b.endOf(f),E=O.isAfter(r.value)?r.value.diff(b,"minutes",!0)/u*100:O.diff(b,"minutes",!0)/u*100;c.push({label:b.format(l[f]),value:String(b),date:b.toDate(),width:String(E)+"%"}),b=O.add(1,f).startOf(f)}return{upperUnits:c,lowerUnits:d}});return s.value.lowerUnits[0].label==="53"&&s.value.lowerUnits.splice(0,1),s.value.lowerUnits[s.value.lowerUnits.length-1].label==="1"&&s.value.lowerUnits.splice(s.value.lowerUnits.length-1,1),s.value.lowerUnits[s.value.lowerUnits.length-1].label==="14"&&s.value.lowerUnits.splice(s.value.lowerUnits.length-1,1),{timeaxisUnits:s}}const Or=n.defineComponent({__name:"GGanttGridAreaDivider",props:{areaHeights:{}},setup(e){const{timeaxisUnits:t}=sn(),r=(a,l)=>l===t.value.lowerUnits.length-1?"unset":a&&Number(a)%13===0?"2px solid #a8adb3":"2px solid #f0f1f2",o=a=>{const l=+a>=14&&+a<=26,s=+a>=40&&+a<=52;return l||s?"#f7f8f9":"#ffffff"};return(a,l)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(a.areaHeights,s=>(n.openBlock(),n.createElementBlock("div",{key:s,style:n.normalizeStyle({position:"absolute",top:s+"px",zIndex:2,height:"6px",width:"100%",backgroundColor:"#DFE2E6"})},null,4))),128)),(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(t).lowerUnits,({label:s,width:c},d)=>(n.openBlock(),n.createElementBlock("div",{key:s,style:n.normalizeStyle({width:c,borderRight:r(s,d),backgroundColor:o(s)}),class:"g-grid-line"},null,4))),128))],64))}}),Er=n.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{}},setup(e){const t=n.ref(null),{width:r}=Qt(t),o=n.ref([]);return n.onMounted(()=>{n.nextTick(()=>{Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((l,s)=>{if(s>0){o.value.push(l.clientHeight+o.value[s-1]);return}o.value.push(l.clientHeight)}),o.value.pop()})}),(a,l)=>(n.openBlock(),n.createElementBlock("div",{ref_key:"gridContainer",ref:t,class:"g-grid-container"},[n.createVNode(Cr,{"parent-width":n.unref(r)},null,8,["parent-width"]),n.createVNode(Or,{"area-heights":o.value},null,8,["area-heights"])],512))}}),hi="",ln=ze(Er,[["__scopeId","data-v-e196b6b3"]]);function _r(){const e=n.inject(tn);if(!e)throw Error("Failed to inject getChartRows!");return e}const Tr={class:"g-label-column-rows"},Dr=n.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:t,colors:r,labelColumnTitle:o,rowHeight:a}=ye(),l=_r();return(s,c)=>(n.openBlock(),n.createElementBlock("div",{class:"g-label-column",style:n.normalizeStyle({fontFamily:n.unref(t),color:n.unref(r).text})},[n.renderSlot(s.$slots,"label-column-title",{},()=>[n.createElementVNode("div",{class:"g-label-column-header",style:n.normalizeStyle({background:n.unref(r).primary})},n.toDisplayString(n.unref(o)),5)]),n.createElementVNode("div",Tr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(l)(),({label:d},u)=>(n.openBlock(),n.createElementBlock("div",{key:`${d}_${u}`,class:"g-label-column-row",style:n.normalizeStyle({background:u%2===0?n.unref(r).ternary:n.unref(r).quartenary,height:`${n.unref(a)}px`})},[n.renderSlot(s.$slots,"label-column-row",{label:d},()=>[n.createElementVNode("span",null,n.toDisplayString(d),1)])],4))),128))])],4))}}),vi="",Br={class:"g-timeaxis"},Sr={class:"g-timeunits-container g-timeunits-low"},Mr={key:0,class:"g-timeunit-low-kw"},Ar={class:"g-timeunits-container g-timeunits-upper"},Pr=n.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:t,colors:r}=ye(),{timeaxisUnits:o}=sn();return(a,l)=>(n.openBlock(),n.createElementBlock("div",Br,[n.createElementVNode("div",Sr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(o).lowerUnits,({label:s,value:c,date:d,width:u},f)=>(n.openBlock(),n.createElementBlock("div",{key:s,class:"g-timeunit g-timeunit-low",style:n.normalizeStyle({flexDirection:n.unref(t)==="hour"?"column":"row",alignItems:n.unref(t)==="hour"?"":"center",width:u})},[f===0?(n.openBlock(),n.createElementBlock("span",Mr,"KW")):n.createCommentVNode("",!0),n.renderSlot(a.$slots,"timeunit",{label:s,value:c,date:d},()=>[n.createTextVNode(n.toDisplayString(s),1)]),n.unref(t)==="hour"?(n.openBlock(),n.createElementBlock("div",{key:1,class:"g-timeaxis-hour-pin",style:n.normalizeStyle({background:n.unref(r).text})},null,4)):n.createCommentVNode("",!0)],4))),128))]),n.createElementVNode("div",Ar,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(o).upperUnits,({label:s,value:c,date:d,width:u})=>(n.openBlock(),n.createElementBlock("div",{key:s,class:"g-upper-timeunit",style:n.normalizeStyle({width:u})},[n.renderSlot(a.$slots,"upper-timeunit",{label:s,value:c,date:d},()=>[n.createTextVNode(n.toDisplayString(s),1)])],4))),128))])]))}}),yi="";function wt(e=ye()){const{dateFormat:t,chartSize:r}=e,{chartStartDayjs:o,chartEndDayjs:a,toDayjs:l,format:s}=bt(e),c=n.computed(()=>a.value.diff(o.value,"minutes"));return{mapTimeToPosition:f=>{const y=r.width.value||0,b=l(f).diff(o.value,"minutes",!0);return Math.ceil(b/c.value*y)},mapPositionToTime:f=>{const y=r.width.value||0,b=f/y*c.value;return s(o.value.add(b,"minutes"),t.value)}}}const $r=n.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:t}=wt(),r=n.ref(G.default()),{colors:o,dateFormat:a,currentTimeLabel:l}=ye(),s=n.computed(()=>{const c=a.value||"YYYY-MM-DD HH:mm";return t(G.default(r.value,c).format(c))});return(c,d)=>(n.openBlock(),n.createElementBlock("div",{class:"g-grid-current-time",style:n.normalizeStyle({left:`${s.value}px`})},[n.createElementVNode("div",{class:"g-grid-current-time-marker",style:n.normalizeStyle({border:`1px dashed ${n.unref(o).markerCurrentTime}`})},null,4),n.createElementVNode("span",{class:"g-grid-current-time-text",style:n.normalizeStyle({color:n.unref(o).markerCurrentTime})},[n.renderSlot(c.$slots,"current-time-label",{},()=>[n.createTextVNode(n.toDisplayString(n.unref(l)),1)])],4)],4))}}),bi="",Lr={class:"g-gantt-legend"},Rr={class:"g-gantt-legend-collapse-container"},Nr={class:"g-gantt-legend-areas-list"},Vr={class:"g-gantt-legend-promotion"},jr=6,Ir=n.defineComponent({__name:"GGanttLegendNonCollapsedView",props:{legend:{},isCollapsed:{type:Boolean}},emits:["update:isCollapsed"],setup(e){const t=n.inject("iconComponent"),r=n.ref([]);return n.onMounted(()=>{n.nextTick(()=>{Object.values(document.querySelector(".g-gantt-rows-list").children).forEach(a=>{r.value.push(a.clientHeight)})})}),(o,a)=>(n.openBlock(),n.createElementBlock("div",Lr,[n.createElementVNode("div",Rr,[n.createElementVNode("div",{class:"g-gantt-legend-collapse",onClick:a[0]||(a[0]=()=>o.$emit("update:isCollapsed",!o.isCollapsed))},[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{name:"chevron-right",class:"g-gantt-legend-do-collapse",size:"24"}))])]),n.createElementVNode("div",Nr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(Object.entries(o.legend),([l,s],c)=>(n.openBlock(),n.createElementBlock("div",{key:l,class:"g-gantt-legend-area-list",style:n.normalizeStyle({height:r.value[c]+jr+"px"})},[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{class:"g-gantt-legend-area-icon","size-s":"24","size-m":"24","size-l":"32",name:o.legend[l][0].area.icon},null,8,["name"])),n.createElementVNode("div",Vr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(s,d=>(n.openBlock(),n.createElementBlock("div",{key:d.category.name,class:"g-gantt-legend-category-color",style:n.normalizeStyle({backgroundColor:"#"+d.category.color})},null,4))),128))])],4))),128))])]))}}),wi="",Hr=ze(Ir,[["__scopeId","data-v-8009c547"]]),zr={class:"g-gantt-legend"},Gr={class:"g-gantt-legend-collapse-container"},Yr={class:"g-gantt-legend-areas-list"},Fr={class:"g-gantt-legend-title"},Ur={class:"g-gantt-legend-area"},Wr={class:"g-gantt-legend-category-name"},qr=6,Xr=n.defineComponent({__name:"GGanttLegendCollapsedView",props:{legend:{},isCollapsed:{type:Boolean}},emits:["update:isCollapsed"],setup(e){const t=n.inject("iconComponent"),r=n.ref([]);return n.onMounted(()=>{n.nextTick(()=>{Object.values(document.querySelector(".g-gantt-rows-list").children).forEach(a=>{r.value.push(a.clientHeight)})})}),(o,a)=>(n.openBlock(),n.createElementBlock("div",zr,[n.createElementVNode("div",Gr,[n.createElementVNode("div",{class:"g-gantt-legend-collapse",onClick:a[0]||(a[0]=()=>o.$emit("update:isCollapsed",!o.isCollapsed))},[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{name:"chevron-left",class:"g-gantt-legend-do-uncollapse",size:"24"}))])]),n.createElementVNode("div",Yr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(Object.entries(o.legend),([l,s],c)=>(n.openBlock(),n.createElementBlock("div",{key:l,class:"g-gantt-legend-area-list",style:n.normalizeStyle({height:r.value[c]+qr+"px"})},[n.createElementVNode("div",Fr,[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{class:"g-gantt-legend-area-icon","size-s":"24","size-m":"24","size-l":"32",name:o.legend[l][0].area.icon},null,8,["name"])),n.createElementVNode("p",Ur,n.toDisplayString(l),1)]),(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(s,d=>(n.openBlock(),n.createElementBlock("div",{key:d.category.name,class:"g-gantt-legend-promotion"},[n.createElementVNode("div",{class:"g-gantt-legend-category-color",style:n.normalizeStyle({backgroundColor:"#"+d.category.color})},null,4),n.createElementVNode("p",Wr,n.toDisplayString(d.category.name),1)]))),128))],4))),128))])]))}}),xi="",Qr=ze(Xr,[["__scopeId","data-v-31a73749"]]),Kr=n.defineComponent({__name:"GGanttLegend",props:{legend:{}},setup(e){const t=n.ref(!0),r=()=>document.querySelector("body").clientWidth>1200;return n.onBeforeMount(()=>{t.value=r()}),(o,a)=>t.value?(n.openBlock(),n.createBlock(Qr,{key:1,"is-collapsed":t.value,"onUpdate:isCollapsed":a[1]||(a[1]=l=>t.value=l),legend:o.legend},null,8,["is-collapsed","legend"])):(n.openBlock(),n.createBlock(Hr,{key:0,"is-collapsed":t.value,"onUpdate:isCollapsed":a[0]||(a[0]=l=>t.value=l),legend:o.legend},null,8,["is-collapsed","legend"]))}}),Zr={class:"g-gantt-chart-container"},Jr={class:"g-gantt-chart-quarters"},eo={key:0,class:"g-gantt-chart-quarter"},to={class:"g-gantt-rows-list"},cn=n.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:an},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"},verticalGrid:{type:Boolean},legend:{}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:t}){const r=e;G.default.extend(Gt);const o=new Date,a=new Date;o.setDate(15),o.setMonth(10),a.setDate(31),a.setMonth(11);const l=n.ref(G.default(new Date).isBetween(o,a)),s=t,{width:c,font:d,colorScheme:u}=n.toRefs(r),f=n.useSlots(),y=n.computed(()=>typeof u.value!="string"?u.value:en[u.value]||en.default),b=()=>{var x;const p=(x=f.default)==null?void 0:x.call(f),k=[];return p&&p.forEach(i=>{var w;if((w=i.props)!=null&&w.bars){const{label:g,bars:v}=i.props;k.push({label:g,bars:v})}else Array.isArray(i.children)&&i.children.forEach(g=>{var _;const v=g;if((_=v==null?void 0:v.props)!=null&&_.bars){const{label:M,bars:P}=v.props;k.push({label:M,bars:P})}})}),k},C=n.ref(!1),O=(p,k,x,i)=>{switch(p.type){case"click":s("click-bar",{bar:k,e:p,datetime:x});break;case"mousedown":s("mousedown-bar",{bar:k,e:p,datetime:x});break;case"mouseup":s("mouseup-bar",{bar:k,e:p,datetime:x});break;case"dblclick":s("dblclick-bar",{bar:k,e:p,datetime:x});break;case"mouseenter":s("mouseenter-bar",{bar:k,e:p});break;case"mouseleave":s("mouseleave-bar",{bar:k,e:p});break;case"dragstart":C.value=!0,s("dragstart-bar",{bar:k,e:p});break;case"drag":s("drag-bar",{bar:k,e:p});break;case"dragend":C.value=!1,s("dragend-bar",{bar:k,e:p,movedBars:i});break;case"contextmenu":s("contextmenu-bar",{bar:k,e:p,datetime:x});break}},m=n.ref(null),E=Qt(m);return n.provide(tn,b),n.provide(nn,{...n.toRefs(r),colors:y,chartSize:E}),n.provide(rn,O),(p,k)=>(n.openBlock(),n.createElementBlock("div",Zr,[n.createVNode(Kr,{legend:p.legend?p.legend:{}},null,8,["legend"]),n.createElementVNode("div",{class:n.normalizeClass([[{"labels-in-column":!!p.labelColumnTitle}],"g-gantt-chart-wrapper"])},[p.labelColumnTitle?(n.openBlock(),n.createBlock(Dr,{key:0,style:n.normalizeStyle({width:p.labelColumnWidth})},{"label-column-title":n.withCtx(()=>[n.renderSlot(p.$slots,"label-column-title")]),"label-column-row":n.withCtx(({label:x})=>[n.renderSlot(p.$slots,"label-column-row",{label:x})]),_:3},8,["style"])):n.createCommentVNode("",!0),n.createElementVNode("div",{ref_key:"ganttChart",ref:m,class:n.normalizeClass(["g-gantt-chart",{"with-column":p.labelColumnTitle,"g-gantt-chart-container--4-quarters-width":!l.value,"g-gantt-chart-container--5-quarters-width":l.value}]),style:n.normalizeStyle({width:n.unref(c),background:y.value.background,fontFamily:n.unref(d)})},[p.grid?(n.openBlock(),n.createBlock(ln,{key:0,"highlighted-units":p.highlightedUnits},null,8,["highlighted-units"])):n.createCommentVNode("",!0),p.currentTime?(n.openBlock(),n.createBlock($r,{key:1},{"current-time-label":n.withCtx(()=>[n.renderSlot(p.$slots,"current-time-label")]),_:3})):n.createCommentVNode("",!0),n.createElementVNode("div",Jr,[k[0]||(k[0]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q1",-1)),k[1]||(k[1]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q2",-1)),k[2]||(k[2]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q3",-1)),k[3]||(k[3]=n.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q4",-1)),l.value?(n.openBlock(),n.createElementBlock("div",eo,"Q1")):n.createCommentVNode("",!0)]),n.createElementVNode("div",{class:n.normalizeClass(["g-gantt-rows-container",r.verticalGrid?"g-gantt-chart-vertical-grid":""])},[n.createElementVNode("div",to,[n.renderSlot(p.$slots,"default")]),n.createVNode(ln,{"highlighted-units":p.highlightedUnits},null,8,["highlighted-units"])],2),p.hideTimeaxis?n.createCommentVNode("",!0):(n.openBlock(),n.createBlock(Pr,{key:2},{"upper-timeunit":n.withCtx(({label:x,value:i,date:w})=>[n.renderSlot(p.$slots,"upper-timeunit",{date:w,label:x,value:i})]),timeunit:n.withCtx(({label:x,value:i,date:w})=>[n.renderSlot(p.$slots,"timeunit",{date:w,label:x,value:i})]),_:3}))],6)],2)]))}}),ki="";/*!
  * vue-tippy v6.6.0
  * (c) 2024 
  * @license MIT
  */var W="top",K="bottom",Z="right",q="left",xt="auto",Ge=[W,K,Z,q],Ae="start",Ye="end",no="clippingParents",dn="viewport",Fe="popper",ro="reference",fn=Ge.reduce(function(e,t){return e.concat([t+"-"+Ae,t+"-"+Ye])},[]),un=[].concat(Ge,[xt]).reduce(function(e,t){return e.concat([t,t+"-"+Ae,t+"-"+Ye])},[]),oo="beforeRead",ao="read",io="afterRead",so="beforeMain",lo="main",co="afterMain",fo="beforeWrite",uo="write",po="afterWrite",go=[oo,ao,io,so,lo,co,fo,uo,po];function ce(e){return e?(e.nodeName||"").toLowerCase():null}function oe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Pe(e){var t=oe(e).Element;return e instanceof t||e instanceof Element}function J(e){var t=oe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function pn(e){if(typeof ShadowRoot>"u")return!1;var t=oe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function mo(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},a=t.attributes[r]||{},l=t.elements[r];!J(l)||!ce(l)||(Object.assign(l.style,o),Object.keys(a).forEach(function(s){var c=a[s];c===!1?l.removeAttribute(s):l.setAttribute(s,c===!0?"":c)}))})}function ho(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var a=t.elements[o],l=t.attributes[o]||{},s=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),c=s.reduce(function(d,u){return d[u]="",d},{});!J(a)||!ce(a)||(Object.assign(a.style,c),Object.keys(l).forEach(function(d){a.removeAttribute(d)}))})}}var gn={name:"applyStyles",enabled:!0,phase:"write",fn:mo,effect:ho,requires:["computeStyles"]};function de(e){return e.split("-")[0]}var _e=Math.max,tt=Math.min,$e=Math.round;function Le(e,t){t===void 0&&(t=!1);var r=e.getBoundingClientRect(),o=1,a=1;if(J(e)&&t){var l=e.offsetHeight,s=e.offsetWidth;s>0&&(o=$e(r.width)/s||1),l>0&&(a=$e(r.height)/l||1)}return{width:r.width/o,height:r.height/a,top:r.top/a,right:r.right/o,bottom:r.bottom/a,left:r.left/o,x:r.left/o,y:r.top/a}}function kt(e){var t=Le(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function mn(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&pn(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function fe(e){return oe(e).getComputedStyle(e)}function vo(e){return["table","td","th"].indexOf(ce(e))>=0}function be(e){return((Pe(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return ce(e)==="html"?e:e.assignedSlot||e.parentNode||(pn(e)?e.host:null)||be(e)}function hn(e){return!J(e)||fe(e).position==="fixed"?null:e.offsetParent}function yo(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&J(e)){var o=fe(e);if(o.position==="fixed")return null}for(var a=nt(e);J(a)&&["html","body"].indexOf(ce(a))<0;){var l=fe(a);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||t&&l.willChange==="filter"||t&&l.filter&&l.filter!=="none")return a;a=a.parentNode}return null}function Ue(e){for(var t=oe(e),r=hn(e);r&&vo(r)&&fe(r).position==="static";)r=hn(r);return r&&(ce(r)==="html"||ce(r)==="body"&&fe(r).position==="static")?t:r||yo(e)||t}function Ct(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function We(e,t,r){return _e(e,tt(t,r))}function bo(e,t,r){var o=We(e,t,r);return o>r?r:o}function vn(){return{top:0,right:0,bottom:0,left:0}}function yn(e){return Object.assign({},vn(),e)}function bn(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var wo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,yn(typeof t!="number"?t:bn(t,Ge))};function xo(e){var t,r=e.state,o=e.name,a=e.options,l=r.elements.arrow,s=r.modifiersData.popperOffsets,c=de(r.placement),d=Ct(c),u=[q,Z].indexOf(c)>=0,f=u?"height":"width";if(!(!l||!s)){var y=wo(a.padding,r),b=kt(l),C=d==="y"?W:q,O=d==="y"?K:Z,m=r.rects.reference[f]+r.rects.reference[d]-s[d]-r.rects.popper[f],E=s[d]-r.rects.reference[d],p=Ue(l),k=p?d==="y"?p.clientHeight||0:p.clientWidth||0:0,x=m/2-E/2,i=y[C],w=k-b[f]-y[O],g=k/2-b[f]/2+x,v=We(i,g,w),_=d;r.modifiersData[o]=(t={},t[_]=v,t.centerOffset=v-g,t)}}function ko(e){var t=e.state,r=e.options,o=r.element,a=o===void 0?"[data-popper-arrow]":o;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||!mn(t.elements.popper,a)||(t.elements.arrow=a))}var Co={name:"arrow",enabled:!0,phase:"main",fn:xo,effect:ko,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Re(e){return e.split("-")[1]}var Oo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Eo(e){var t=e.x,r=e.y,o=window,a=o.devicePixelRatio||1;return{x:$e(t*a)/a||0,y:$e(r*a)/a||0}}function wn(e){var t,r=e.popper,o=e.popperRect,a=e.placement,l=e.variation,s=e.offsets,c=e.position,d=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,y=e.isFixed,b=f===!0?Eo(s):typeof f=="function"?f(s):s,C=b.x,O=C===void 0?0:C,m=b.y,E=m===void 0?0:m,p=s.hasOwnProperty("x"),k=s.hasOwnProperty("y"),x=q,i=W,w=window;if(u){var g=Ue(r),v="clientHeight",_="clientWidth";if(g===oe(r)&&(g=be(r),fe(g).position!=="static"&&c==="absolute"&&(v="scrollHeight",_="scrollWidth")),g=g,a===W||(a===q||a===Z)&&l===Ye){i=K;var M=y&&w.visualViewport?w.visualViewport.height:g[v];E-=M-o.height,E*=d?1:-1}if(a===q||(a===W||a===K)&&l===Ye){x=Z;var P=y&&w.visualViewport?w.visualViewport.width:g[_];O-=P-o.width,O*=d?1:-1}}var S=Object.assign({position:c},u&&Oo);if(d){var B;return Object.assign({},S,(B={},B[i]=k?"0":"",B[x]=p?"0":"",B.transform=(w.devicePixelRatio||1)<=1?"translate("+O+"px, "+E+"px)":"translate3d("+O+"px, "+E+"px, 0)",B))}return Object.assign({},S,(t={},t[i]=k?E+"px":"",t[x]=p?O+"px":"",t.transform="",t))}function _o(e){var t=e.state,r=e.options,o=r.gpuAcceleration,a=o===void 0?!0:o,l=r.adaptive,s=l===void 0?!0:l,c=r.roundOffsets,d=c===void 0?!0:c,u={placement:de(t.placement),variation:Re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,wn(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:d})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,wn(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:d})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var To={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_o,data:{}},rt={passive:!0};function Do(e){var t=e.state,r=e.instance,o=e.options,a=o.scroll,l=a===void 0?!0:a,s=o.resize,c=s===void 0?!0:s,d=oe(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return l&&u.forEach(function(f){f.addEventListener("scroll",r.update,rt)}),c&&d.addEventListener("resize",r.update,rt),function(){l&&u.forEach(function(f){f.removeEventListener("scroll",r.update,rt)}),c&&d.removeEventListener("resize",r.update,rt)}}var Bo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Do,data:{}},So={left:"right",right:"left",bottom:"top",top:"bottom"};function ot(e){return e.replace(/left|right|bottom|top/g,function(t){return So[t]})}var Mo={start:"end",end:"start"};function xn(e){return e.replace(/start|end/g,function(t){return Mo[t]})}function Ot(e){var t=oe(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Et(e){return Le(be(e)).left+Ot(e).scrollLeft}function Ao(e){var t=oe(e),r=be(e),o=t.visualViewport,a=r.clientWidth,l=r.clientHeight,s=0,c=0;return o&&(a=o.width,l=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,c=o.offsetTop)),{width:a,height:l,x:s+Et(e),y:c}}function Po(e){var t,r=be(e),o=Ot(e),a=(t=e.ownerDocument)==null?void 0:t.body,l=_e(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),s=_e(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),c=-o.scrollLeft+Et(e),d=-o.scrollTop;return fe(a||r).direction==="rtl"&&(c+=_e(r.clientWidth,a?a.clientWidth:0)-l),{width:l,height:s,x:c,y:d}}function _t(e){var t=fe(e),r=t.overflow,o=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+o)}function kn(e){return["html","body","#document"].indexOf(ce(e))>=0?e.ownerDocument.body:J(e)&&_t(e)?e:kn(nt(e))}function qe(e,t){var r;t===void 0&&(t=[]);var o=kn(e),a=o===((r=e.ownerDocument)==null?void 0:r.body),l=oe(o),s=a?[l].concat(l.visualViewport||[],_t(o)?o:[]):o,c=t.concat(s);return a?c:c.concat(qe(nt(s)))}function Tt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function $o(e){var t=Le(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Cn(e,t){return t===dn?Tt(Ao(e)):Pe(t)?$o(t):Tt(Po(be(e)))}function Lo(e){var t=qe(nt(e)),r=["absolute","fixed"].indexOf(fe(e).position)>=0,o=r&&J(e)?Ue(e):e;return Pe(o)?t.filter(function(a){return Pe(a)&&mn(a,o)&&ce(a)!=="body"&&(r?fe(a).position!=="static":!0)}):[]}function Ro(e,t,r){var o=t==="clippingParents"?Lo(e):[].concat(t),a=[].concat(o,[r]),l=a[0],s=a.reduce(function(c,d){var u=Cn(e,d);return c.top=_e(u.top,c.top),c.right=tt(u.right,c.right),c.bottom=tt(u.bottom,c.bottom),c.left=_e(u.left,c.left),c},Cn(e,l));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function On(e){var t=e.reference,r=e.element,o=e.placement,a=o?de(o):null,l=o?Re(o):null,s=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,d;switch(a){case W:d={x:s,y:t.y-r.height};break;case K:d={x:s,y:t.y+t.height};break;case Z:d={x:t.x+t.width,y:c};break;case q:d={x:t.x-r.width,y:c};break;default:d={x:t.x,y:t.y}}var u=a?Ct(a):null;if(u!=null){var f=u==="y"?"height":"width";switch(l){case Ae:d[u]=d[u]-(t[f]/2-r[f]/2);break;case Ye:d[u]=d[u]+(t[f]/2-r[f]/2);break}}return d}function Xe(e,t){t===void 0&&(t={});var r=t,o=r.placement,a=o===void 0?e.placement:o,l=r.boundary,s=l===void 0?no:l,c=r.rootBoundary,d=c===void 0?dn:c,u=r.elementContext,f=u===void 0?Fe:u,y=r.altBoundary,b=y===void 0?!1:y,C=r.padding,O=C===void 0?0:C,m=yn(typeof O!="number"?O:bn(O,Ge)),E=f===Fe?ro:Fe,p=e.rects.popper,k=e.elements[b?E:f],x=Ro(Pe(k)?k:k.contextElement||be(e.elements.popper),s,d),i=Le(e.elements.reference),w=On({reference:i,element:p,strategy:"absolute",placement:a}),g=Tt(Object.assign({},p,w)),v=f===Fe?g:i,_={top:x.top-v.top+m.top,bottom:v.bottom-x.bottom+m.bottom,left:x.left-v.left+m.left,right:v.right-x.right+m.right},M=e.modifiersData.offset;if(f===Fe&&M){var P=M[a];Object.keys(_).forEach(function(S){var B=[Z,K].indexOf(S)>=0?1:-1,R=[W,K].indexOf(S)>=0?"y":"x";_[S]+=P[R]*B})}return _}function No(e,t){t===void 0&&(t={});var r=t,o=r.placement,a=r.boundary,l=r.rootBoundary,s=r.padding,c=r.flipVariations,d=r.allowedAutoPlacements,u=d===void 0?un:d,f=Re(o),y=f?c?fn:fn.filter(function(O){return Re(O)===f}):Ge,b=y.filter(function(O){return u.indexOf(O)>=0});b.length===0&&(b=y);var C=b.reduce(function(O,m){return O[m]=Xe(e,{placement:m,boundary:a,rootBoundary:l,padding:s})[de(m)],O},{});return Object.keys(C).sort(function(O,m){return C[O]-C[m]})}function Vo(e){if(de(e)===xt)return[];var t=ot(e);return[xn(e),t,xn(t)]}function jo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var a=r.mainAxis,l=a===void 0?!0:a,s=r.altAxis,c=s===void 0?!0:s,d=r.fallbackPlacements,u=r.padding,f=r.boundary,y=r.rootBoundary,b=r.altBoundary,C=r.flipVariations,O=C===void 0?!0:C,m=r.allowedAutoPlacements,E=t.options.placement,p=de(E),k=p===E,x=d||(k||!O?[ot(E)]:Vo(E)),i=[E].concat(x).reduce(function(ie,X){return ie.concat(de(X)===xt?No(t,{placement:X,boundary:f,rootBoundary:y,padding:u,flipVariations:O,allowedAutoPlacements:m}):X)},[]),w=t.rects.reference,g=t.rects.popper,v=new Map,_=!0,M=i[0],P=0;P<i.length;P++){var S=i[P],B=de(S),R=Re(S)===Ae,L=[W,K].indexOf(B)>=0,j=L?"width":"height",H=Xe(t,{placement:S,boundary:f,rootBoundary:y,altBoundary:b,padding:u}),I=L?R?Z:q:R?K:W;w[j]>g[j]&&(I=ot(I));var N=ot(I),z=[];if(l&&z.push(H[B]<=0),c&&z.push(H[I]<=0,H[N]<=0),z.every(function(ie){return ie})){M=S,_=!1;break}v.set(S,z)}if(_)for(var Y=O?3:1,ee=function(X){var se=i.find(function(me){var Q=v.get(me);if(Q)return Q.slice(0,X).every(function(pe){return pe})});if(se)return M=se,"break"},te=Y;te>0;te--){var ge=ee(te);if(ge==="break")break}t.placement!==M&&(t.modifiersData[o]._skip=!0,t.placement=M,t.reset=!0)}}var Io={name:"flip",enabled:!0,phase:"main",fn:jo,requiresIfExists:["offset"],data:{_skip:!1}};function En(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _n(e){return[W,Z,K,q].some(function(t){return e[t]>=0})}function Ho(e){var t=e.state,r=e.name,o=t.rects.reference,a=t.rects.popper,l=t.modifiersData.preventOverflow,s=Xe(t,{elementContext:"reference"}),c=Xe(t,{altBoundary:!0}),d=En(s,o),u=En(c,a,l),f=_n(d),y=_n(u);t.modifiersData[r]={referenceClippingOffsets:d,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:y},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":y})}var zo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ho};function Go(e,t,r){var o=de(e),a=[q,W].indexOf(o)>=0?-1:1,l=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,s=l[0],c=l[1];return s=s||0,c=(c||0)*a,[q,Z].indexOf(o)>=0?{x:c,y:s}:{x:s,y:c}}function Yo(e){var t=e.state,r=e.options,o=e.name,a=r.offset,l=a===void 0?[0,0]:a,s=un.reduce(function(f,y){return f[y]=Go(y,t.rects,l),f},{}),c=s[t.placement],d=c.x,u=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=d,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=s}var Fo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yo};function Uo(e){var t=e.state,r=e.name;t.modifiersData[r]=On({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Wo={name:"popperOffsets",enabled:!0,phase:"read",fn:Uo,data:{}};function qo(e){return e==="x"?"y":"x"}function Xo(e){var t=e.state,r=e.options,o=e.name,a=r.mainAxis,l=a===void 0?!0:a,s=r.altAxis,c=s===void 0?!1:s,d=r.boundary,u=r.rootBoundary,f=r.altBoundary,y=r.padding,b=r.tether,C=b===void 0?!0:b,O=r.tetherOffset,m=O===void 0?0:O,E=Xe(t,{boundary:d,rootBoundary:u,padding:y,altBoundary:f}),p=de(t.placement),k=Re(t.placement),x=!k,i=Ct(p),w=qo(i),g=t.modifiersData.popperOffsets,v=t.rects.reference,_=t.rects.popper,M=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,P=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(!!g){if(l){var R,L=i==="y"?W:q,j=i==="y"?K:Z,H=i==="y"?"height":"width",I=g[i],N=I+E[L],z=I-E[j],Y=C?-_[H]/2:0,ee=k===Ae?v[H]:_[H],te=k===Ae?-_[H]:-v[H],ge=t.elements.arrow,ie=C&&ge?kt(ge):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:vn(),se=X[L],me=X[j],Q=We(0,v[H],ie[H]),pe=x?v[H]/2-Y-Q-se-P.mainAxis:ee-Q-se-P.mainAxis,ne=x?-v[H]/2+Y+Q+me+P.mainAxis:te+Q+me+P.mainAxis,le=t.elements.arrow&&Ue(t.elements.arrow),we=le?i==="y"?le.clientTop||0:le.clientLeft||0:0,he=(R=S==null?void 0:S[i])!=null?R:0,xe=I+pe-he-we,ke=I+ne-he,Ve=We(C?tt(N,xe):N,I,C?_e(z,ke):z);g[i]=Ve,B[i]=Ve-I}if(c){var Ke,ct=i==="x"?W:q,dt=i==="x"?K:Z,ve=g[w],Ce=w==="y"?"height":"width",Ze=ve+E[ct],Se=ve-E[dt],Je=[W,q].indexOf(p)!==-1,ft=(Ke=S==null?void 0:S[w])!=null?Ke:0,ut=Je?Ze:ve-v[Ce]-_[Ce]-ft+P.altAxis,pt=Je?ve+v[Ce]+_[Ce]-ft-P.altAxis:Se,gt=C&&Je?bo(ut,ve,pt):We(C?ut:Ze,ve,C?pt:Se);g[w]=gt,B[w]=gt-ve}t.modifiersData[o]=B}}var Qo={name:"preventOverflow",enabled:!0,phase:"main",fn:Xo,requiresIfExists:["offset"]};function Ko(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Zo(e){return e===oe(e)||!J(e)?Ot(e):Ko(e)}function Jo(e){var t=e.getBoundingClientRect(),r=$e(t.width)/e.offsetWidth||1,o=$e(t.height)/e.offsetHeight||1;return r!==1||o!==1}function ea(e,t,r){r===void 0&&(r=!1);var o=J(t),a=J(t)&&Jo(t),l=be(t),s=Le(e,a),c={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(o||!o&&!r)&&((ce(t)!=="body"||_t(l))&&(c=Zo(t)),J(t)?(d=Le(t,!0),d.x+=t.clientLeft,d.y+=t.clientTop):l&&(d.x=Et(l))),{x:s.left+c.scrollLeft-d.x,y:s.top+c.scrollTop-d.y,width:s.width,height:s.height}}function ta(e){var t=new Map,r=new Set,o=[];e.forEach(function(l){t.set(l.name,l)});function a(l){r.add(l.name);var s=[].concat(l.requires||[],l.requiresIfExists||[]);s.forEach(function(c){if(!r.has(c)){var d=t.get(c);d&&a(d)}}),o.push(l)}return e.forEach(function(l){r.has(l.name)||a(l)}),o}function na(e){var t=ta(e);return go.reduce(function(r,o){return r.concat(t.filter(function(a){return a.phase===o}))},[])}function ra(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function oa(e){var t=e.reduce(function(r,o){var a=r[o.name];return r[o.name]=a?Object.assign({},a,o,{options:Object.assign({},a.options,o.options),data:Object.assign({},a.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var Tn={placement:"bottom",modifiers:[],strategy:"absolute"};function Dn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function aa(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,a=t.defaultOptions,l=a===void 0?Tn:a;return function(c,d,u){u===void 0&&(u=l);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tn,l),modifiersData:{},elements:{reference:c,popper:d},attributes:{},styles:{}},y=[],b=!1,C={state:f,setOptions:function(p){var k=typeof p=="function"?p(f.options):p;m(),f.options=Object.assign({},l,f.options,k),f.scrollParents={reference:Pe(c)?qe(c):c.contextElement?qe(c.contextElement):[],popper:qe(d)};var x=na(oa([].concat(o,f.options.modifiers)));return f.orderedModifiers=x.filter(function(i){return i.enabled}),O(),C.update()},forceUpdate:function(){if(!b){var p=f.elements,k=p.reference,x=p.popper;if(!!Dn(k,x)){f.rects={reference:ea(k,Ue(x),f.options.strategy==="fixed"),popper:kt(x)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(P){return f.modifiersData[P.name]=Object.assign({},P.data)});for(var i=0;i<f.orderedModifiers.length;i++){if(f.reset===!0){f.reset=!1,i=-1;continue}var w=f.orderedModifiers[i],g=w.fn,v=w.options,_=v===void 0?{}:v,M=w.name;typeof g=="function"&&(f=g({state:f,options:_,name:M,instance:C})||f)}}}},update:ra(function(){return new Promise(function(E){C.forceUpdate(),E(f)})}),destroy:function(){m(),b=!0}};if(!Dn(c,d))return C;C.setOptions(u).then(function(E){!b&&u.onFirstUpdate&&u.onFirstUpdate(E)});function O(){f.orderedModifiers.forEach(function(E){var p=E.name,k=E.options,x=k===void 0?{}:k,i=E.effect;if(typeof i=="function"){var w=i({state:f,name:p,instance:C,options:x}),g=function(){};y.push(w||g)}})}function m(){y.forEach(function(E){return E()}),y=[]}return C}}var ia=[Bo,Wo,To,gn,Fo,Io,Qo,Co,zo],sa=aa({defaultModifiers:ia}),la="tippy-box",Bn="tippy-content",Sn="tippy-backdrop",Mn="tippy-arrow",An="tippy-svg-arrow",Te={passive:!0,capture:!0},Pn=function(){return document.body};function Dt(e,t,r){if(Array.isArray(e)){var o=e[t];return o==null?Array.isArray(r)?r[t]:r:o}return e}function Bt(e,t){var r={}.toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function $n(e,t){return typeof e=="function"?e.apply(void 0,t):e}function Ln(e,t){if(t===0)return e;var r;return function(o){clearTimeout(r),r=setTimeout(function(){e(o)},t)}}function ca(e,t){var r=Object.assign({},e);return t.forEach(function(o){delete r[o]}),r}function da(e){return e.split(/\s+/).filter(Boolean)}function De(e){return[].concat(e)}function Rn(e,t){e.indexOf(t)===-1&&e.push(t)}function fa(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function Nn(e){return e.split("-")[0]}function Ne(e){return[].slice.call(e)}function Vn(e){return Object.keys(e).reduce(function(t,r){return e[r]!==void 0&&(t[r]=e[r]),t},{})}function Be(){return document.createElement("div")}function at(e){return["Element","Fragment"].some(function(t){return Bt(e,t)})}function ua(e){return Bt(e,"NodeList")}function St(e){return Bt(e,"MouseEvent")}function pa(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function ga(e){return at(e)?[e]:ua(e)?Ne(e):Array.isArray(e)?e:Ne(document.querySelectorAll(e))}function Mt(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function Qe(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function jn(e){var t,r=De(e),o=r[0];return o!=null&&(t=o.ownerDocument)!=null&&t.body?o.ownerDocument:document}function ma(e,t){var r=t.clientX,o=t.clientY;return e.every(function(a){var l=a.popperRect,s=a.popperState,c=a.props,d=c.interactiveBorder,u=Nn(s.placement),f=s.modifiersData.offset;if(!f)return!0;var y=u==="bottom"?f.top.y:0,b=u==="top"?f.bottom.y:0,C=u==="right"?f.left.x:0,O=u==="left"?f.right.x:0,m=l.top-o+y>d,E=o-l.bottom-b>d,p=l.left-r+C>d,k=r-l.right-O>d;return m||E||p||k})}function At(e,t,r){var o=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(a){e[o](a,r)})}function In(e,t){for(var r=t;r;){var o;if(e.contains(r))return!0;r=r.getRootNode==null||(o=r.getRootNode())==null?void 0:o.host}return!1}var ue={isTouch:!1},Hn=0;function ha(){ue.isTouch||(ue.isTouch=!0,window.performance&&document.addEventListener("mousemove",zn))}function zn(){var e=performance.now();e-Hn<20&&(ue.isTouch=!1,document.removeEventListener("mousemove",zn)),Hn=e}function va(){var e=document.activeElement;if(pa(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function ya(){document.addEventListener("touchstart",ha,Te),window.addEventListener("blur",va)}var ba=typeof window<"u"&&typeof document<"u",wa=ba?!!window.msCrypto:!1,xa={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},ka={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},ae=Object.assign({appendTo:Pn,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},xa,ka),Ca=Object.keys(ae),Oa=function(t){var r=Object.keys(t);r.forEach(function(o){ae[o]=t[o]})};function Gn(e){var t=e.plugins||[],r=t.reduce(function(o,a){var l=a.name,s=a.defaultValue;if(l){var c;o[l]=e[l]!==void 0?e[l]:(c=ae[l])!=null?c:s}return o},{});return Object.assign({},e,r)}function Ea(e,t){var r=t?Object.keys(Gn(Object.assign({},ae,{plugins:t}))):Ca,o=r.reduce(function(a,l){var s=(e.getAttribute("data-tippy-"+l)||"").trim();if(!s)return a;if(l==="content")a[l]=s;else try{a[l]=JSON.parse(s)}catch{a[l]=s}return a},{});return o}function Yn(e,t){var r=Object.assign({},t,{content:$n(t.content,[e])},t.ignoreAttributes?{}:Ea(e,t.plugins));return r.aria=Object.assign({},ae.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content},r}var _a=function(){return"innerHTML"};function Pt(e,t){e[_a()]=t}function Fn(e){var t=Be();return e===!0?t.className=Mn:(t.className=An,at(e)?t.appendChild(e):Pt(t,e)),t}function Un(e,t){at(t.content)?(Pt(e,""),e.appendChild(t.content)):typeof t.content!="function"&&(t.allowHTML?Pt(e,t.content):e.textContent=t.content)}function it(e){var t=e.firstElementChild,r=Ne(t.children);return{box:t,content:r.find(function(o){return o.classList.contains(Bn)}),arrow:r.find(function(o){return o.classList.contains(Mn)||o.classList.contains(An)}),backdrop:r.find(function(o){return o.classList.contains(Sn)})}}function Wn(e){var t=Be(),r=Be();r.className=la,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var o=Be();o.className=Bn,o.setAttribute("data-state","hidden"),Un(o,e.props),t.appendChild(r),r.appendChild(o),a(e.props,e.props);function a(l,s){var c=it(t),d=c.box,u=c.content,f=c.arrow;s.theme?d.setAttribute("data-theme",s.theme):d.removeAttribute("data-theme"),typeof s.animation=="string"?d.setAttribute("data-animation",s.animation):d.removeAttribute("data-animation"),s.inertia?d.setAttribute("data-inertia",""):d.removeAttribute("data-inertia"),d.style.maxWidth=typeof s.maxWidth=="number"?s.maxWidth+"px":s.maxWidth,s.role?d.setAttribute("role",s.role):d.removeAttribute("role"),(l.content!==s.content||l.allowHTML!==s.allowHTML)&&Un(u,e.props),s.arrow?f?l.arrow!==s.arrow&&(d.removeChild(f),d.appendChild(Fn(s.arrow))):d.appendChild(Fn(s.arrow)):f&&d.removeChild(f)}return{popper:t,onUpdate:a}}Wn.$$tippy=!0;var Ta=1,st=[],$t=[];function Da(e,t){var r=Yn(e,Object.assign({},ae,Gn(Vn(t)))),o,a,l,s=!1,c=!1,d=!1,u=!1,f,y,b,C=[],O=Ln(xe,r.interactiveDebounce),m,E=Ta++,p=null,k=fa(r.plugins),x={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},i={id:E,reference:e,popper:Be(),popperInstance:p,props:r,state:x,plugins:k,clearDelayTimeouts:ut,setProps:pt,setContent:gt,show:li,hide:ci,hideWithInteractivity:di,enable:Je,disable:ft,unmount:fi,destroy:ui};if(!r.render)return i;var w=r.render(i),g=w.popper,v=w.onUpdate;g.setAttribute("data-tippy-root",""),g.id="tippy-"+i.id,i.popper=g,e._tippy=i,g._tippy=i;var _=k.map(function(h){return h.fn(i)}),M=e.hasAttribute("aria-expanded");return le(),Y(),I(),N("onCreate",[i]),r.showOnCreate&&Ze(),g.addEventListener("mouseenter",function(){i.props.interactive&&i.state.isVisible&&i.clearDelayTimeouts()}),g.addEventListener("mouseleave",function(){i.props.interactive&&i.props.trigger.indexOf("mouseenter")>=0&&L().addEventListener("mousemove",O)}),i;function P(){var h=i.props.touch;return Array.isArray(h)?h:[h,0]}function S(){return P()[0]==="hold"}function B(){var h;return!!((h=i.props.render)!=null&&h.$$tippy)}function R(){return m||e}function L(){var h=R().parentNode;return h?jn(h):document}function j(){return it(g)}function H(h){return i.state.isMounted&&!i.state.isVisible||ue.isTouch||f&&f.type==="focus"?0:Dt(i.props.delay,h?0:1,ae.delay)}function I(h){h===void 0&&(h=!1),g.style.pointerEvents=i.props.interactive&&!h?"":"none",g.style.zIndex=""+i.props.zIndex}function N(h,T,A){if(A===void 0&&(A=!0),_.forEach(function($){$[h]&&$[h].apply($,T)}),A){var V;(V=i.props)[h].apply(V,T)}}function z(){var h=i.props.aria;if(!!h.content){var T="aria-"+h.content,A=g.id,V=De(i.props.triggerTarget||e);V.forEach(function($){var U=$.getAttribute(T);if(i.state.isVisible)$.setAttribute(T,U?U+" "+A:A);else{var re=U&&U.replace(A,"").trim();re?$.setAttribute(T,re):$.removeAttribute(T)}})}}function Y(){if(!(M||!i.props.aria.expanded)){var h=De(i.props.triggerTarget||e);h.forEach(function(T){i.props.interactive?T.setAttribute("aria-expanded",i.state.isVisible&&T===R()?"true":"false"):T.removeAttribute("aria-expanded")})}}function ee(){L().removeEventListener("mousemove",O),st=st.filter(function(h){return h!==O})}function te(h){if(!(ue.isTouch&&(d||h.type==="mousedown"))){var T=h.composedPath&&h.composedPath()[0]||h.target;if(!(i.props.interactive&&In(g,T))){if(De(i.props.triggerTarget||e).some(function(A){return In(A,T)})){if(ue.isTouch||i.state.isVisible&&i.props.trigger.indexOf("click")>=0)return}else N("onClickOutside",[i,h]);i.props.hideOnClick===!0&&(i.clearDelayTimeouts(),i.hide(),c=!0,setTimeout(function(){c=!1}),i.state.isMounted||se())}}}function ge(){d=!0}function ie(){d=!1}function X(){var h=L();h.addEventListener("mousedown",te,!0),h.addEventListener("touchend",te,Te),h.addEventListener("touchstart",ie,Te),h.addEventListener("touchmove",ge,Te)}function se(){var h=L();h.removeEventListener("mousedown",te,!0),h.removeEventListener("touchend",te,Te),h.removeEventListener("touchstart",ie,Te),h.removeEventListener("touchmove",ge,Te)}function me(h,T){pe(h,function(){!i.state.isVisible&&g.parentNode&&g.parentNode.contains(g)&&T()})}function Q(h,T){pe(h,T)}function pe(h,T){var A=j().box;function V($){$.target===A&&(At(A,"remove",V),T())}if(h===0)return T();At(A,"remove",y),At(A,"add",V),y=V}function ne(h,T,A){A===void 0&&(A=!1);var V=De(i.props.triggerTarget||e);V.forEach(function($){$.addEventListener(h,T,A),C.push({node:$,eventType:h,handler:T,options:A})})}function le(){S()&&(ne("touchstart",he,{passive:!0}),ne("touchend",ke,{passive:!0})),da(i.props.trigger).forEach(function(h){if(h!=="manual")switch(ne(h,he),h){case"mouseenter":ne("mouseleave",ke);break;case"focus":ne(wa?"focusout":"blur",Ve);break;case"focusin":ne("focusout",Ve);break}})}function we(){C.forEach(function(h){var T=h.node,A=h.eventType,V=h.handler,$=h.options;T.removeEventListener(A,V,$)}),C=[]}function he(h){var T,A=!1;if(!(!i.state.isEnabled||Ke(h)||c)){var V=((T=f)==null?void 0:T.type)==="focus";f=h,m=h.currentTarget,Y(),!i.state.isVisible&&St(h)&&st.forEach(function($){return $(h)}),h.type==="click"&&(i.props.trigger.indexOf("mouseenter")<0||s)&&i.props.hideOnClick!==!1&&i.state.isVisible?A=!0:Ze(h),h.type==="click"&&(s=!A),A&&!V&&Se(h)}}function xe(h){var T=h.target,A=R().contains(T)||g.contains(T);if(!(h.type==="mousemove"&&A)){var V=Ce().concat(g).map(function($){var U,re=$._tippy,je=(U=re.popperInstance)==null?void 0:U.state;return je?{popperRect:$.getBoundingClientRect(),popperState:je,props:r}:null}).filter(Boolean);ma(V,h)&&(ee(),Se(h))}}function ke(h){var T=Ke(h)||i.props.trigger.indexOf("click")>=0&&s;if(!T){if(i.props.interactive){i.hideWithInteractivity(h);return}Se(h)}}function Ve(h){i.props.trigger.indexOf("focusin")<0&&h.target!==R()||i.props.interactive&&h.relatedTarget&&g.contains(h.relatedTarget)||Se(h)}function Ke(h){return ue.isTouch?S()!==h.type.indexOf("touch")>=0:!1}function ct(){dt();var h=i.props,T=h.popperOptions,A=h.placement,V=h.offset,$=h.getReferenceClientRect,U=h.moveTransition,re=B()?it(g).arrow:null,je=$?{getBoundingClientRect:$,contextElement:$.contextElement||R()}:e,er={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(mt){var Ie=mt.state;if(B()){var pi=j(),Vt=pi.box;["placement","reference-hidden","escaped"].forEach(function(ht){ht==="placement"?Vt.setAttribute("data-placement",Ie.placement):Ie.attributes.popper["data-popper-"+ht]?Vt.setAttribute("data-"+ht,""):Vt.removeAttribute("data-"+ht)}),Ie.attributes.popper={}}}},Me=[{name:"offset",options:{offset:V}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!U}},er];B()&&re&&Me.push({name:"arrow",options:{element:re,padding:3}}),Me.push.apply(Me,(T==null?void 0:T.modifiers)||[]),i.popperInstance=sa(je,g,Object.assign({},T,{placement:A,onFirstUpdate:b,modifiers:Me}))}function dt(){i.popperInstance&&(i.popperInstance.destroy(),i.popperInstance=null)}function ve(){var h=i.props.appendTo,T,A=R();i.props.interactive&&h===Pn||h==="parent"?T=A.parentNode:T=$n(h,[A]),T.contains(g)||T.appendChild(g),i.state.isMounted=!0,ct()}function Ce(){return Ne(g.querySelectorAll("[data-tippy-root]"))}function Ze(h){i.clearDelayTimeouts(),h&&N("onTrigger",[i,h]),X();var T=H(!0),A=P(),V=A[0],$=A[1];ue.isTouch&&V==="hold"&&$&&(T=$),T?o=setTimeout(function(){i.show()},T):i.show()}function Se(h){if(i.clearDelayTimeouts(),N("onUntrigger",[i,h]),!i.state.isVisible){se();return}if(!(i.props.trigger.indexOf("mouseenter")>=0&&i.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(h.type)>=0&&s)){var T=H(!1);T?a=setTimeout(function(){i.state.isVisible&&i.hide()},T):l=requestAnimationFrame(function(){i.hide()})}}function Je(){i.state.isEnabled=!0}function ft(){i.hide(),i.state.isEnabled=!1}function ut(){clearTimeout(o),clearTimeout(a),cancelAnimationFrame(l)}function pt(h){if(!i.state.isDestroyed){N("onBeforeUpdate",[i,h]),we();var T=i.props,A=Yn(e,Object.assign({},T,Vn(h),{ignoreAttributes:!0}));i.props=A,le(),T.interactiveDebounce!==A.interactiveDebounce&&(ee(),O=Ln(xe,A.interactiveDebounce)),T.triggerTarget&&!A.triggerTarget?De(T.triggerTarget).forEach(function(V){V.removeAttribute("aria-expanded")}):A.triggerTarget&&e.removeAttribute("aria-expanded"),Y(),I(),v&&v(T,A),i.popperInstance&&(ct(),Ce().forEach(function(V){requestAnimationFrame(V._tippy.popperInstance.forceUpdate)})),N("onAfterUpdate",[i,h])}}function gt(h){i.setProps({content:h})}function li(){var h=i.state.isVisible,T=i.state.isDestroyed,A=!i.state.isEnabled,V=ue.isTouch&&!i.props.touch,$=Dt(i.props.duration,0,ae.duration);if(!(h||T||A||V)&&!R().hasAttribute("disabled")&&(N("onShow",[i],!1),i.props.onShow(i)!==!1)){if(i.state.isVisible=!0,B()&&(g.style.visibility="visible"),I(),X(),i.state.isMounted||(g.style.transition="none"),B()){var U=j(),re=U.box,je=U.content;Mt([re,je],0)}b=function(){var Me;if(!(!i.state.isVisible||u)){if(u=!0,g.offsetHeight,g.style.transition=i.props.moveTransition,B()&&i.props.animation){var Nt=j(),mt=Nt.box,Ie=Nt.content;Mt([mt,Ie],$),Qe([mt,Ie],"visible")}z(),Y(),Rn($t,i),(Me=i.popperInstance)==null||Me.forceUpdate(),N("onMount",[i]),i.props.animation&&B()&&Q($,function(){i.state.isShown=!0,N("onShown",[i])})}},ve()}}function ci(){var h=!i.state.isVisible,T=i.state.isDestroyed,A=!i.state.isEnabled,V=Dt(i.props.duration,1,ae.duration);if(!(h||T||A)&&(N("onHide",[i],!1),i.props.onHide(i)!==!1)){if(i.state.isVisible=!1,i.state.isShown=!1,u=!1,s=!1,B()&&(g.style.visibility="hidden"),ee(),se(),I(!0),B()){var $=j(),U=$.box,re=$.content;i.props.animation&&(Mt([U,re],V),Qe([U,re],"hidden"))}z(),Y(),i.props.animation?B()&&me(V,i.unmount):i.unmount()}}function di(h){L().addEventListener("mousemove",O),Rn(st,O),O(h)}function fi(){i.state.isVisible&&i.hide(),i.state.isMounted&&(dt(),Ce().forEach(function(h){h._tippy.unmount()}),g.parentNode&&g.parentNode.removeChild(g),$t=$t.filter(function(h){return h!==i}),i.state.isMounted=!1,N("onHidden",[i]))}function ui(){i.state.isDestroyed||(i.clearDelayTimeouts(),i.unmount(),we(),delete e._tippy,i.state.isDestroyed=!0,N("onDestroy",[i]))}}function D(e,t){t===void 0&&(t={});var r=ae.plugins.concat(t.plugins||[]);ya();var o=Object.assign({},t,{plugins:r}),a=ga(e),l=a.reduce(function(s,c){var d=c&&Da(c,o);return d&&s.push(d),s},[]);return at(e)?l[0]:l}D.defaultProps=ae,D.setDefaultProps=Oa,D.currentInput=ue;var Ba=Object.assign({},gn,{effect:function(t){var r=t.state,o={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,o.popper),r.styles=o,r.elements.arrow&&Object.assign(r.elements.arrow.style,o.arrow)}}),Sa=function(t,r){var o;r===void 0&&(r={});var a=t,l=[],s=[],c,d=r.overrides,u=[],f=!1;function y(){s=a.map(function(i){return De(i.props.triggerTarget||i.reference)}).reduce(function(i,w){return i.concat(w)},[])}function b(){l=a.map(function(i){return i.reference})}function C(i){a.forEach(function(w){i?w.enable():w.disable()})}function O(i){return a.map(function(w){var g=w.setProps;return w.setProps=function(v){g(v),w.reference===c&&i.setProps(v)},function(){w.setProps=g}})}function m(i,w){var g=s.indexOf(w);if(w!==c){c=w;var v=(d||[]).concat("content").reduce(function(_,M){return _[M]=a[g].props[M],_},{});i.setProps(Object.assign({},v,{getReferenceClientRect:typeof v.getReferenceClientRect=="function"?v.getReferenceClientRect:function(){var _;return(_=l[g])==null?void 0:_.getBoundingClientRect()}}))}}C(!1),b(),y();var E={fn:function(){return{onDestroy:function(){C(!0)},onHidden:function(){c=null},onClickOutside:function(g){g.props.showOnCreate&&!f&&(f=!0,c=null)},onShow:function(g){g.props.showOnCreate&&!f&&(f=!0,m(g,l[0]))},onTrigger:function(g,v){m(g,v.currentTarget)}}}},p=D(Be(),Object.assign({},ca(r,["overrides"]),{plugins:[E].concat(r.plugins||[]),triggerTarget:s,popperOptions:Object.assign({},r.popperOptions,{modifiers:[].concat(((o=r.popperOptions)==null?void 0:o.modifiers)||[],[Ba])})})),k=p.show;p.show=function(i){if(k(),!c&&i==null)return m(p,l[0]);if(!(c&&i==null)){if(typeof i=="number")return l[i]&&m(p,l[i]);if(a.indexOf(i)>=0){var w=i.reference;return m(p,w)}if(l.indexOf(i)>=0)return m(p,i)}},p.showNext=function(){var i=l[0];if(!c)return p.show(0);var w=l.indexOf(c);p.show(l[w+1]||i)},p.showPrevious=function(){var i=l[l.length-1];if(!c)return p.show(i);var w=l.indexOf(c),g=l[w-1]||i;p.show(g)};var x=p.setProps;return p.setProps=function(i){d=i.overrides||d,x(i)},p.setInstances=function(i){C(!0),u.forEach(function(w){return w()}),a=i,C(!1),b(),y(),u=O(p),p.setProps({triggerTarget:s})},u=O(p),p},Ma={name:"animateFill",defaultValue:!1,fn:function(t){var r;if(!((r=t.props.render)!=null&&r.$$tippy))return{};var o=it(t.popper),a=o.box,l=o.content,s=t.props.animateFill?Aa():null;return{onCreate:function(){s&&(a.insertBefore(s,a.firstElementChild),a.setAttribute("data-animatefill",""),a.style.overflow="hidden",t.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(s){var d=a.style.transitionDuration,u=Number(d.replace("ms",""));l.style.transitionDelay=Math.round(u/10)+"ms",s.style.transitionDuration=d,Qe([s],"visible")}},onShow:function(){s&&(s.style.transitionDuration="0ms")},onHide:function(){s&&Qe([s],"hidden")}}}};function Aa(){var e=Be();return e.className=Sn,Qe([e],"hidden"),e}var Lt={clientX:0,clientY:0},lt=[];function qn(e){var t=e.clientX,r=e.clientY;Lt={clientX:t,clientY:r}}function Pa(e){e.addEventListener("mousemove",qn)}function $a(e){e.removeEventListener("mousemove",qn)}var La={name:"followCursor",defaultValue:!1,fn:function(t){var r=t.reference,o=jn(t.props.triggerTarget||r),a=!1,l=!1,s=!0,c=t.props;function d(){return t.props.followCursor==="initial"&&t.state.isVisible}function u(){o.addEventListener("mousemove",b)}function f(){o.removeEventListener("mousemove",b)}function y(){a=!0,t.setProps({getReferenceClientRect:null}),a=!1}function b(m){var E=m.target?r.contains(m.target):!0,p=t.props.followCursor,k=m.clientX,x=m.clientY,i=r.getBoundingClientRect(),w=k-i.left,g=x-i.top;(E||!t.props.interactive)&&t.setProps({getReferenceClientRect:function(){var _=r.getBoundingClientRect(),M=k,P=x;p==="initial"&&(M=_.left+w,P=_.top+g);var S=p==="horizontal"?_.top:P,B=p==="vertical"?_.right:M,R=p==="horizontal"?_.bottom:P,L=p==="vertical"?_.left:M;return{width:B-L,height:R-S,top:S,right:B,bottom:R,left:L}}})}function C(){t.props.followCursor&&(lt.push({instance:t,doc:o}),Pa(o))}function O(){lt=lt.filter(function(m){return m.instance!==t}),lt.filter(function(m){return m.doc===o}).length===0&&$a(o)}return{onCreate:C,onDestroy:O,onBeforeUpdate:function(){c=t.props},onAfterUpdate:function(E,p){var k=p.followCursor;a||k!==void 0&&c.followCursor!==k&&(O(),k?(C(),t.state.isMounted&&!l&&!d()&&u()):(f(),y()))},onMount:function(){t.props.followCursor&&!l&&(s&&(b(Lt),s=!1),d()||u())},onTrigger:function(E,p){St(p)&&(Lt={clientX:p.clientX,clientY:p.clientY}),l=p.type==="focus"},onHidden:function(){t.props.followCursor&&(y(),f(),s=!0)}}}};function Ra(e,t){var r;return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((((r=e.popperOptions)==null?void 0:r.modifiers)||[]).filter(function(o){var a=o.name;return a!==t.name}),[t])})}}var Na={name:"inlinePositioning",defaultValue:!1,fn:function(t){var r=t.reference;function o(){return!!t.props.inlinePositioning}var a,l=-1,s=!1,c=[],d={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(C){var O=C.state;o()&&(c.indexOf(O.placement)!==-1&&(c=[]),a!==O.placement&&c.indexOf(O.placement)===-1&&(c.push(O.placement),t.setProps({getReferenceClientRect:function(){return u(O.placement)}})),a=O.placement)}};function u(b){return Va(Nn(b),r.getBoundingClientRect(),Ne(r.getClientRects()),l)}function f(b){s=!0,t.setProps(b),s=!1}function y(){s||f(Ra(t.props,d))}return{onCreate:y,onAfterUpdate:y,onTrigger:function(C,O){if(St(O)){var m=Ne(t.reference.getClientRects()),E=m.find(function(k){return k.left-2<=O.clientX&&k.right+2>=O.clientX&&k.top-2<=O.clientY&&k.bottom+2>=O.clientY}),p=m.indexOf(E);l=p>-1?p:l}},onHidden:function(){l=-1}}}};function Va(e,t,r,o){if(r.length<2||e===null)return t;if(r.length===2&&o>=0&&r[0].left>r[1].right)return r[o]||t;switch(e){case"top":case"bottom":{var a=r[0],l=r[r.length-1],s=e==="top",c=a.top,d=l.bottom,u=s?a.left:l.left,f=s?a.right:l.right,y=f-u,b=d-c;return{top:c,bottom:d,left:u,right:f,width:y,height:b}}case"left":case"right":{var C=Math.min.apply(Math,r.map(function(g){return g.left})),O=Math.max.apply(Math,r.map(function(g){return g.right})),m=r.filter(function(g){return e==="left"?g.left===C:g.right===O}),E=m[0].top,p=m[m.length-1].bottom,k=C,x=O,i=x-k,w=p-E;return{top:E,bottom:p,left:k,right:x,width:i,height:w}}default:return t}}var ja={name:"sticky",defaultValue:!1,fn:function(t){var r=t.reference,o=t.popper;function a(){return t.popperInstance?t.popperInstance.state.elements.reference:r}function l(u){return t.props.sticky===!0||t.props.sticky===u}var s=null,c=null;function d(){var u=l("reference")?a().getBoundingClientRect():null,f=l("popper")?o.getBoundingClientRect():null;(u&&Xn(s,u)||f&&Xn(c,f))&&t.popperInstance&&t.popperInstance.update(),s=u,c=f,t.state.isMounted&&requestAnimationFrame(d)}return{onMount:function(){t.props.sticky&&d()}}}};function Xn(e,t){return e&&t?e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left:!0}D.setDefaultProps({render:Wn}),D.setDefaultProps({onShow:e=>{if(!e.props.content)return!1}});function Qn(e,t={},r={mount:!0,appName:"Tippy"}){r=Object.assign({mount:!0,appName:"Tippy"},r);const o=n.getCurrentInstance(),a=n.ref(),l=n.ref({isEnabled:!1,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1}),s=n.shallowRef();let c=null;const d=()=>c||(c=document.createDocumentFragment(),c),u=v=>{let _,M=n.isRef(v)?v.value:v;return n.isVNode(M)?(s.value||(s.value=n.createApp({name:r.appName,setup:()=>()=>n.isRef(v)?v.value:v}),o&&Object.assign(s.value._context,o.appContext),s.value.mount(d())),_=()=>d()):typeof M=="object"?(s.value||(s.value=n.createApp({name:r.appName,setup:()=>()=>n.h(n.isRef(v)?v.value:v)}),o&&Object.assign(s.value._context,o.appContext),s.value.mount(d())),_=()=>d()):_=M,_},f=v=>{let _={};return n.isRef(v)?_=v.value||{}:n.isReactive(v)?_={...v}:_={...v},_.content&&(_.content=u(_.content)),_.triggerTarget&&(_.triggerTarget=n.isRef(_.triggerTarget)?_.triggerTarget.value:_.triggerTarget),(!_.plugins||!Array.isArray(_.plugins))&&(_.plugins=[]),_.plugins=_.plugins.filter(M=>M.name!=="vueTippyReactiveState"),_.plugins.push({name:"vueTippyReactiveState",fn:()=>({onCreate(){l.value.isEnabled=!0},onMount(){l.value.isMounted=!0},onShow(){l.value.isMounted=!0,l.value.isVisible=!0},onShown(){l.value.isShown=!0},onHide(){l.value.isMounted=!1,l.value.isVisible=!1},onHidden(){l.value.isShown=!1},onUnmounted(){l.value.isMounted=!1},onDestroy(){l.value.isDestroyed=!0}})}),_},y=()=>{!a.value||a.value.setProps(f(t))},b=()=>{!a.value||!t.content||a.value.setContent(u(t.content))},C=v=>{var _;(_=a.value)===null||_===void 0||_.setContent(u(v))},O=v=>{var _;(_=a.value)===null||_===void 0||_.setProps(f(v))},m=()=>{var v;a.value&&(a.value.destroy(),a.value=void 0),c=null,(v=s.value)===null||v===void 0||v.unmount(),s.value=void 0},E=()=>{var v;(v=a.value)===null||v===void 0||v.show()},p=()=>{var v;(v=a.value)===null||v===void 0||v.hide()},k=()=>{var v;(v=a.value)===null||v===void 0||v.disable(),l.value.isEnabled=!1},x=()=>{var v;(v=a.value)===null||v===void 0||v.enable(),l.value.isEnabled=!0},i=()=>{var v;(v=a.value)===null||v===void 0||v.unmount()},w=()=>{if(!e)return;let v=n.isRef(e)?e.value:e;typeof v=="function"&&(v=v()),v&&(a.value=D(v,f(t)),v.$tippy=g)},g={tippy:a,refresh:y,refreshContent:b,setContent:C,setProps:O,destroy:m,hide:p,show:E,disable:k,enable:x,unmount:i,mount:w,state:l};return r.mount&&(o?o.isMounted?w():n.onMounted(w):w()),o&&n.onUnmounted(()=>{m()}),n.isRef(t)||n.isReactive(t)?n.watch(t,y,{immediate:!1}):n.isRef(t.content)&&n.watch(t.content,b,{immediate:!1}),g}function Ia(e,t){const r=n.ref();return n.onMounted(()=>{const a=(Array.isArray(e)?e.map(l=>l.value):typeof e=="function"?e():e.value).map(l=>l instanceof Element?l._tippy:l).filter(Boolean);r.value=Sa(a,t?{allowHTML:!0,...t}:{allowHTML:!0})}),{singleton:r}}function Ha(e){return typeof e=="function"?e():n.unref(e)}function za(e){var t,r;const o=Ha(e);return(r=(t=o)===null||t===void 0?void 0:t.$el)!==null&&r!==void 0?r:o}n.defineComponent({props:{to:{type:[String,Function]},tag:{type:[String,Object],default:"span"},contentTag:{type:[String,Object],default:"span"},contentClass:{type:String,default:null},appendTo:{default:()=>D.defaultProps.appendTo},aria:{default:()=>D.defaultProps.aria},delay:{default:()=>D.defaultProps.delay},duration:{default:()=>D.defaultProps.duration},getReferenceClientRect:{default:()=>D.defaultProps.getReferenceClientRect},hideOnClick:{type:[Boolean,String],default:()=>D.defaultProps.hideOnClick},ignoreAttributes:{type:Boolean,default:()=>D.defaultProps.ignoreAttributes},interactive:{type:Boolean,default:()=>D.defaultProps.interactive},interactiveBorder:{default:()=>D.defaultProps.interactiveBorder},interactiveDebounce:{default:()=>D.defaultProps.interactiveDebounce},moveTransition:{default:()=>D.defaultProps.moveTransition},offset:{default:()=>D.defaultProps.offset},onAfterUpdate:{default:()=>D.defaultProps.onAfterUpdate},onBeforeUpdate:{default:()=>D.defaultProps.onBeforeUpdate},onCreate:{default:()=>D.defaultProps.onCreate},onDestroy:{default:()=>D.defaultProps.onDestroy},onHidden:{default:()=>D.defaultProps.onHidden},onHide:{default:()=>D.defaultProps.onHide},onMount:{default:()=>D.defaultProps.onMount},onShow:{default:()=>D.defaultProps.onShow},onShown:{default:()=>D.defaultProps.onShown},onTrigger:{default:()=>D.defaultProps.onTrigger},onUntrigger:{default:()=>D.defaultProps.onUntrigger},onClickOutside:{default:()=>D.defaultProps.onClickOutside},placement:{default:()=>D.defaultProps.placement},plugins:{default:()=>D.defaultProps.plugins},popperOptions:{default:()=>D.defaultProps.popperOptions},render:{default:()=>D.defaultProps.render},showOnCreate:{type:Boolean,default:()=>D.defaultProps.showOnCreate},touch:{type:[Boolean,String,Array],default:()=>D.defaultProps.touch},trigger:{default:()=>D.defaultProps.trigger},triggerTarget:{default:()=>D.defaultProps.triggerTarget},animateFill:{type:Boolean,default:()=>D.defaultProps.animateFill},followCursor:{type:[Boolean,String],default:()=>D.defaultProps.followCursor},inlinePositioning:{type:Boolean,default:()=>D.defaultProps.inlinePositioning},sticky:{type:[Boolean,String],default:()=>D.defaultProps.sticky},allowHTML:{type:Boolean,default:()=>D.defaultProps.allowHTML},animation:{default:()=>D.defaultProps.animation},arrow:{default:()=>D.defaultProps.arrow},content:{default:()=>D.defaultProps.content},inertia:{default:()=>D.defaultProps.inertia},maxWidth:{default:()=>D.defaultProps.maxWidth},role:{default:()=>D.defaultProps.role},theme:{default:()=>D.defaultProps.theme},zIndex:{default:()=>D.defaultProps.zIndex}},emits:["state"],setup(e,{slots:t,emit:r,expose:o}){const a=n.ref(),l=n.ref(),s=n.ref(),c=n.ref(!1),d=()=>{let C={...e};for(const O of["to","tag","contentTag","contentClass"])C.hasOwnProperty(O)&&delete C[O];return C};let u=()=>za(a);e.to&&(typeof Element<"u"&&e.to instanceof Element?u=()=>e.to:e.to==="parent"?u=()=>{let C=a.value;return C||(C=a.value=l.value.parentElement),C}:(typeof e.to=="string"||e.to instanceof String)&&(u=()=>document.querySelector(e.to)));const f=Qn(u,d());let y=t.content;!y&&e.to==="parent"&&(y=t.default),n.onMounted(()=>{c.value=!0,n.nextTick(()=>{y&&f.setContent(()=>s.value)})}),n.watch(f.state,()=>{r("state",n.unref(f.state))},{immediate:!0,deep:!0}),n.watch(()=>e,()=>{f.setProps(d()),y&&f.setContent(()=>s.value)},{deep:!0});let b=n.reactive({elem:a,contentElem:s,mounted:c,...f});return o(b),()=>{const C=(typeof e.contentTag=="string",e.contentTag),O=y?n.h(C,{ref:s,style:{display:c.value?"inherit":"none"},class:e.contentClass},y(b)):null;if(e.to==="parent"){const p=[];if(!a.value){const k=n.h("span",{ref:l,"data-v-tippy":"",style:{display:"none"}});p.push(k)}return O&&p.push(O),p}const m=t.default?t.default(b):[];if(!e.tag){const p=n.h(m[0],{ref:a,"data-v-tippy":""});return O?[p,O]:p}const E=(typeof e.tag=="string",e.tag);return n.h(E,{ref:a,"data-v-tippy":""},O?[m,O]:m)}}});const Ga=["a11y","allowHTML","arrow","flip","flipOnUpdate","hideOnClick","ignoreAttributes","inertia","interactive","lazy","multiple","showOnInit","touch","touchHold"];let Rt={};Object.keys(D.defaultProps).forEach(e=>{Ga.includes(e)?Rt[e]={type:Boolean,default:function(){return D.defaultProps[e]}}:Rt[e]={default:function(){return D.defaultProps[e]}}}),n.defineComponent({props:Rt,setup(e){const t=n.ref([]),{singleton:r}=Ia(t,e);return{instances:t,singleton:r}},mounted(){var e;const r=this.$el.parentElement.querySelectorAll("[data-v-tippy]");this.instances=Array.from(r).map(o=>o._tippy).filter(Boolean),(e=this.singleton)===null||e===void 0||e.setInstances(this.instances)},render(){let e=this.$slots.default?this.$slots.default():[];return n.h(()=>e)}});const Ya=D.setDefaultProps;Ya({ignoreAttributes:!0,plugins:[ja,Na,La,Ma]});function Fa(){const e=n.inject(rn);if(!e)throw Error("Failed to inject emitBarEvent!");return e}const Ua={class:"g-gantt-tooltip-container"},Wa={class:"g-gantt-tooltip-area-container"},qa={class:"g-gantt-tooltip-area"},Xa={class:"g-gantt-tooltip-category-container"},Qa={class:"g-gantt-tooltip-category"},Ka={class:"g-gantt-tooltip-promotion-title"},Za={class:"g-gantt-tooltip-promotion-time-container"},Ja={class:"g-gantt-tooltip-time"},ei="cadetblue",ti=n.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},config:{},toDayjs:{}},setup(e){n.useCssVars(y=>({f7565ec2:l.value}));const t=n.inject("iconComponent"),r=e,{bar:o}=n.toRefs(r),a=n.computed(()=>{var b,C,O;const y=(O=(C=(b=o.value)==null?void 0:b.ganttBarConfig)==null?void 0:C.tooltipInfo)==null?void 0:O.publishedAt;return y?!G.default(new Date(y*1e3)).isAfter(new Date):!1}),l=n.ref(a.value?"pointer":"default"),s=n.computed(()=>{var y,b;return((b=(y=o==null?void 0:o.value)==null?void 0:y.ganttBarConfig.style)==null?void 0:b.backgroundColor)||ei}),c=()=>{var b,C;const y=(C=(b=o.value)==null?void 0:b.ganttBarConfig.tooltipInfo)==null?void 0:C.promotionUrl;!y||!a.value||window.location.assign(y)},d=n.computed(()=>{var y;return(y=o.value)==null?void 0:y[r.config.barStart.value]}),u=n.computed(()=>{var y;return(y=o.value)==null?void 0:y[r.config.barEnd.value]}),f=n.computed(()=>{if(!(o!=null&&o.value))return"";const y=r.toDayjs(d.value).format("DD.MM."),b=r.toDayjs(u.value).format("DD.MM.YYYY");return`${y} \u2013 ${b}`});return(y,b)=>{var C,O,m,E,p,k,x,i,w,g,v,_;return n.openBlock(),n.createElementBlock("div",{class:"g-gantt-tooltip",style:n.normalizeStyle({fontFamily:y.config.font.value}),onClick:c},[n.createElementVNode("div",Ua,[n.createElementVNode("div",Wa,[n.createElementVNode("span",qa,n.toDisplayString((m=(O=(C=n.unref(o))==null?void 0:C.ganttBarConfig)==null?void 0:O.tooltipInfo)==null?void 0:m.areaName),1),n.unref(o)?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{key:0,name:(k=(p=(E=n.unref(o))==null?void 0:E.ganttBarConfig)==null?void 0:p.tooltipInfo)==null?void 0:k.icon,size:"24"},null,8,["name"])):n.createCommentVNode("",!0)]),n.createElementVNode("div",Xa,[n.createElementVNode("div",{class:"g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",style:n.normalizeStyle({background:s.value})},null,4),n.createElementVNode("span",Qa,n.toDisplayString((w=(i=(x=n.unref(o))==null?void 0:x.ganttBarConfig)==null?void 0:i.tooltipInfo)==null?void 0:w.categoryName),1),n.createElementVNode("div",{class:"g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",style:n.normalizeStyle({background:s.value})},null,4)]),n.createElementVNode("p",Ka,n.toDisplayString((_=(v=(g=n.unref(o))==null?void 0:g.ganttBarConfig)==null?void 0:v.tooltipInfo)==null?void 0:_.title),1),n.createElementVNode("div",Za,[n.createElementVNode("p",Ja,[n.renderSlot(y.$slots,"default",{bar:n.unref(o),barStart:d.value,barEnd:u.value},()=>[n.createTextVNode(n.toDisplayString(f.value),1)],!0)]),a.value?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(t)),{key:0,name:"chevron-right","size-s":"16",style:{color:"#008075"}})):n.createCommentVNode("",!0)])])],4)}}}),Ci="",ni=ze(ti,[["__scopeId","data-v-3a31d377"]]),ri=["id"],oi={class:"g-gantt-bar-label"},ai=["innerHTML"],ii=`
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`,si=n.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){var P;n.useCssVars(S=>({"267f9539":n.unref(a)}));const t=e,r=Fa(),{bar:o}=n.toRefs(t),a=(P=t.bar.ganttBarConfig.style)==null?void 0:P.backgroundColor,{mapTimeToPosition:l,mapPositionToTime:s}=wt(),{font:c,barEnd:d,barStart:u,rowHeight:f,width:y,chartStart:b,chartEnd:C,chartSize:O}=ye(),m=n.ref(),{toDayjs:E}=bt(),p=n.ref(!1),k=n.inject("iconComponent"),x=n.computed(()=>o.value.ganttBarConfig),i=n.inject(on),w=S=>{var H,I;const B=document.querySelector(".tippy-svg-arrow");if(!B)return;const L=((H=B.style.transform)!=null?H:"").match(/translate3d\((-?\d+)/),j=(I=document.querySelector(".tippy-content"))==null?void 0:I.clientHeight;if(S==="bottom"&&L){const N=B.firstElementChild;N.style.transform="rotateX(180deg)";const z=parseInt(L[1]);B.style.transform=`translate3d(${z}px, -${j+6}px, 0px)`}if(S==="top"&&L){const N=parseInt(L[1]);B.style.transform=`translate3d(${N}px, -1px, 0px)`}};n.onMounted(()=>{!(m!=null&&m.value)||Qn(m.value,{content:n.h(ni,{bar:o.value,config:{barStart:u,barEnd:d,font:c},toDayjs:E}),arrow:ii,interactiveBorder:0,placement:"top",interactive:!0,popperOptions:{modifiers:[{name:"offset",options:{offset:[5,15]}},{name:"applyArrowHide",enabled:!0,phase:"write",fn({instance:S}){w((S==null?void 0:S.state.placement)||"top")}}]},delay:[0,0],duration:[300,0]})});const g=S=>{var L,j;if(S.preventDefault(),S.type==="mousedown"||!(i!=null&&i.value))return;const B=(j=(L=i==null?void 0:i.value)==null?void 0:L[0])==null?void 0:j.getBoundingClientRect();if(!B)return;const R=s(S.clientX-B.left);r(S,o.value,R)},v=n.ref(0),_=n.ref(0),M=n.computed(()=>{const S=new Date(o.value.myBeginDate).getTime(),B=new Date(o.value.myEndDate).getTime();if(Math.abs(S-B)/(1e3*60*60*24)<=2)return 0;const j=6;return _.value-v.value-j+j});return n.onMounted(()=>{n.watch([o,y,b,C,O.width],()=>{v.value=l(o.value[u.value]),_.value=l(o.value[d.value])},{deep:!0,immediate:!0})}),(S,B)=>(n.openBlock(),n.createElementBlock("div",{id:x.value.id,ref_key:"ganttBarRef",ref:m,class:n.normalizeClass(["g-gantt-bar",x.value.asArrow?"g-gantt-bar-is-arrow":"",x.value.class||""]),style:n.normalizeStyle({...x.value.style,position:"absolute",top:`${n.unref(f)*.1}px`,left:`${v.value}px`,width:`${M.value}px`,height:`${n.unref(f)*.8}px`,zIndex:p.value?3:2}),onClick:g,onContextmenu:g,onDblclick:g,onMousedown:g,onMouseenter:g,onMouseleave:g},[n.createElementVNode("div",oi,[n.renderSlot(S.$slots,"default",{bar:n.unref(o)},()=>[n.createElementVNode("div",null,n.toDisplayString(x.value.label||""),1),x.value.html?(n.openBlock(),n.createElementBlock("div",{key:0,innerHTML:x.value.html},null,8,ai)):n.createCommentVNode("",!0)])]),(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(k)),{"size-s":"16","size-m":"16",class:"g-gantt-bar-arrow","size-l":"16",name:"gant-arrow",size:"16"})),x.value.hasHandles?(n.openBlock(),n.createElementBlock(n.Fragment,{key:0},[B[0]||(B[0]=n.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1)),B[1]||(B[1]=n.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1))],64)):n.createCommentVNode("",!0)],46,ri))}}),Oi="",Kn=n.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},overlaps:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:t}){const r=e,o=n.ref([]),a=t,{rowHeight:l,colors:s,labelColumnTitle:c}=ye(),{highlightOnHover:d}=n.toRefs(r),u=n.ref(!1),f=n.computed(()=>({height:`${l.value}px`,background:(d==null?void 0:d.value)&&u.value?s.value.hoverHighlight:null})),{mapPositionToTime:y}=wt(),b=n.useTemplateRef("barContainer");n.provide(on,b);const C=x=>{var v,_;const i=(_=(v=b.value)==null?void 0:v[0])==null?void 0:_.getBoundingClientRect();if(!i){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const w=x.clientX-i.left,g=y(w);a("drop",{e:x,datetime:g})};function O(x,i,w,g){return Math.max(w.valueOf()-i.valueOf(),x.valueOf()-g.valueOf())/864e5<3}function m(x,i,w,g){return x<=g&&w<=i||O(x,i,w,g)}function E(x){const i=[];for(let w=0;w<x.length;w++)for(let g=w+1;g<x.length;g++)m(x[w].myBeginDate,x[w].myEndDate,x[g].myBeginDate,x[g].myEndDate)&&i.push(G.default(x[w].myEndDate).isAfter(x[g].myEndDate)?x[w]:x[g]);return i}const p=()=>{const x=[],i=w=>{if(!w||w.length===0)return;const g=E(w);if(g.length>0){const v=w.filter(M=>!g.includes(M)),_=w.filter(M=>g.includes(M));x.push(v),i(_)}else x.push(w)};return i(r.bars),x};n.onMounted(()=>{o.value=p()});const k=x=>!x||/^\s*$/.test(x);return(x,i)=>(n.openBlock(),n.createElementBlock("div",null,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(o.value,w=>(n.openBlock(),n.createElementBlock("div",{key:w[0].ganttBarConfig.id,style:n.normalizeStyle(f.value),class:"g-gantt-row",onDragleave:i[0]||(i[0]=g=>u.value=!1),onDrop:i[1]||(i[1]=g=>C(g)),onMouseleave:i[2]||(i[2]=g=>u.value=!1),onMouseover:i[3]||(i[3]=g=>u.value=!0),onDragover:i[4]||(i[4]=n.withModifiers(g=>u.value=!0,["prevent"]))},[!k(x.label)&&!n.unref(c)?(n.openBlock(),n.createElementBlock("div",{key:0,style:n.normalizeStyle({background:n.unref(s).primary,color:n.unref(s).text}),class:"g-gantt-row-label"},[n.renderSlot(x.$slots,"label",{},()=>[n.createTextVNode(n.toDisplayString(x.label),1)])],4)):n.createCommentVNode("",!0),n.createElementVNode("div",n.mergeProps({ref_for:!0,ref:"barContainer",class:"g-gantt-row-bars-container"},x.$attrs),[n.createVNode(n.TransitionGroup,{name:"bar-transition sys",tag:"div",class:"transition-group"},{default:n.withCtx(()=>[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(w,g=>(n.openBlock(),n.createBlock(si,{key:g.ganttBarConfig.id,bar:g},{default:n.withCtx(()=>[n.renderSlot(x.$slots,"bar-label",{bar:g})]),_:2},1032,["bar"]))),128))]),_:2},1024)],16)],36))),128))]))}}),Ei="";function Zn(){G.default.extend(nr),G.default.extend(rr),G.default.extend(Gt),G.default.extend(ir),G.default.extend(or),G.default.extend(tr),G.default.extend(ar)}const Jn={install(e,t){Zn(),e.component("GGanttChart",cn),e.component("GGanttRow",Kn)}};F.GGanttChart=cn,F.GGanttRow=Kn,F.default=Jn,F.extendDayjs=Zn,F.ganttastic=Jn,Object.defineProperties(F,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(F,Oe="top"){if(!F||typeof document>"u")return;const n=document.head,et=document.createElement("style");Oe==="top"&&n.firstChild?n.insertBefore(et,n.firstChild):n.appendChild(et),et.appendChild(document.createTextNode(F))}injectStyle(`
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
.g-gantt-chart-wrapper {
  width: 100%;
  padding: 0 24px 0 16px;
  overflow-x: scroll;
}
.g-gantt-chart-container {
  width: 100%;
  display: flex;
  background: #f0f1f2;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
@media (max-width: 700px) {
.g-gantt-chart-wrapper {
    padding-right: 16px;
}
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
.transition-group {
  position: relative;
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
  width: 6.5px;
  right: -5px;
  bottom: -6px;
}
.g-gantt-bar-arrow > path {
  fill: var(--267f9539);
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
.g-grid-container[data-v-e196b6b3] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line[data-v-e196b6b3] {
  width: 1px;
  height: 100%;
}
`,"top");injectStyle(`
.g-gantt-tooltip[data-v-3a31d377] {
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
.g-gantt-tooltip[data-v-3a31d377]:hover {
  cursor: var(--f7565ec2);
}
.g-gantt-tooltip-category-container[data-v-3a31d377] {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.g-gantt-tooltip-container[data-v-3a31d377] {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.g-gantt-tooltip-time[data-v-3a31d377] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;

  color: #4c5356;
}
.g-gantt-tooltip-promotion-time-container[data-v-3a31d377] {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}
.g-gantt-tooltip-area[data-v-3a31d377] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-category[data-v-3a31d377] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-area-container[data-v-3a31d377] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.g-gantt-tooltip-promotion-title[data-v-3a31d377] {
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;

  color: #1b1e1f;

  padding: 0 12px 10px 12px;
}
.g-gantt-tooltip-color-line[data-v-3a31d377] {
  height: 2px;
}
.g-gantt-tooltip-color-line-left[data-v-3a31d377] {
  min-width: 8px;
  margin-right: 4px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-tooltip-color-line-right[data-v-3a31d377] {
  margin-left: 4px;
  width: 100%;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
@media (max-width: 1400px) {
.g-gantt-tooltip[data-v-3a31d377] {
    width: 208px;

    padding-top: 6px;
    padding-bottom: 8px;
}
.g-gantt-tooltip-color-line-left[data-v-3a31d377] {
    min-width: 4px;
}
.g-gantt-tooltip-area-container[data-v-3a31d377],
  .g-gantt-tooltip-promotion-title[data-v-3a31d377],
  .g-gantt-tooltip-promotion-time-container[data-v-3a31d377] {
    padding-left: 8px;
    padding-right: 8px;
}
}
`,"top");injectStyle(`
.g-gantt-grid-current-date[data-v-dd346c68] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: center;
}
`,"top");injectStyle(`
.g-gantt-legend-collapse-container[data-v-31a73749] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
}
.g-gantt-legend-collapse[data-v-31a73749] {
  display: flex;
  align-items: center;
  align-self: baseline;
  justify-content: flex-end;

  width: 48px;
  height: 48px;
}
.g-gantt-legend-collapse[data-v-31a73749]:hover {
  cursor: pointer;
}
.g-gantt-legend-title[data-v-31a73749] {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}
.g-gantt-legend-area[data-v-31a73749] {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;
}
.g-gantt-legend-area-icon > path[data-v-31a73749] {
  fill: #4c5356;
}
.g-gantt-legend-category-color[data-v-31a73749] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend-promotion[data-v-31a73749] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-gantt-legend-do-uncollapse[data-v-31a73749] {
  color: #008075;
}
.g-gantt-legend-area-list[data-v-31a73749] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-category-name[data-v-31a73749] {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}
.g-gantt-legend[data-v-31a73749] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: -moz-fit-content;
  min-width: fit-content;
  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);

  z-index: 1;
}
.g-gantt-legend-area-icon[data-v-31a73749] * {
  fill: #4c5356;
}
@media (max-width: 1400px) {
.g-gantt-legend-category-color[data-v-31a73749] {
    max-width: 52px;
}
.g-gantt-legend-category-name[data-v-31a73749] {
    font-weight: 400;
    font-size: 12px;
    line-height: 15.6px;
    letter-spacing: 0;
}
.g-gantt-legend-area[data-v-31a73749] {
    font-weight: 700;
    font-size: 14px;
    line-height: 21.7px;
    letter-spacing: 0;
}
}
@media (max-width: 700px) {
.g-gantt-legend-category-color[data-v-31a73749] {
    max-width: 44px;
}
.g-gantt-legend-title[data-v-31a73749] {
    padding: 0 16px;
}
}
`,"top");injectStyle(`
.g-gantt-legend-collapse-container[data-v-8009c547] {
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-end;

  height: 62px;
  margin-bottom: 14px;
}
.g-gantt-legend-collapse[data-v-8009c547] {
  display: flex;
  align-items: center;
  align-self: baseline;
  justify-content: flex-end;

  width: 48px;
  height: 48px;
}
.g-gantt-legend-collapse[data-v-8009c547]:hover {
  cursor: pointer;
}
.g-gantt-legend-area-icon[data-v-8009c547] {
  margin: 0 8px 0 24px;
}
.g-gantt-legend-area-icon[data-v-8009c547] > * {
  fill: #4c5356;
}
.g-gantt-legend-promotion[data-v-8009c547] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-gantt-legend-areas-list[data-v-8009c547] {
  display: flex;
  flex-direction: column;
}
.g-gantt-legend-area-list[data-v-8009c547] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-do-collapse[data-v-8009c547] {
  color: #008075;
}
.g-gantt-legend-category-color[data-v-8009c547] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend[data-v-8009c547] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: 68px;

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
  z-index: 1;
}
@media (max-width: 1400px) {
.g-gantt-legend[data-v-8009c547] {
    min-width: 60px;
}
.g-gantt-legend-category-color[data-v-8009c547] {
    max-width: 52px;
}
.g-gantt-legend-collapse[data-v-8009c547] {
    width: 56px;
    height: 48px;
}
}
@media (max-width: 700px) {
.g-gantt-legend[data-v-8009c547] {
    min-width: 56px;
}
.g-gantt-legend-category-color[data-v-8009c547] {
    max-width: 44px;
}
.g-gantt-legend-area-icon[data-v-8009c547] {
    margin-left: 16px;
}
}
`,"top");
