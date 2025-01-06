(function(M,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],R):(M=typeof globalThis<"u"?globalThis:M||self,R(M.VueGanttastic={},M.dayjs,M.Vue))})(this,function(M,R,t){"use strict";const $=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(R);var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,u){(function(c,i){e.exports=i()})(H,function(){var c="day";return function(i,y,l){var d=function(n){return n.add(4-n.isoWeekday(),c)},o=y.prototype;o.isoWeekYear=function(){return d(this).year()},o.isoWeek=function(n){if(!this.$utils().u(n))return this.add(7*(n-this.isoWeek()),c);var a,p,h,m,b=d(this),f=(a=this.isoWeekYear(),p=this.$u,h=(p?l.utc:l)().year(a).startOf("year"),m=4-h.isoWeekday(),h.isoWeekday()>4&&(m+=7),h.add(m,c));return b.diff(f,"week")+1},o.isoWeekday=function(n){return this.$utils().u(n)?this.day()||7:this.day(this.day()%7?n:n-7)};var s=o.startOf;o.startOf=function(n,a){var p=this.$utils(),h=!!p.u(a)||a;return p.p(n)==="isoweek"?h?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(n,a)}}})})(at);const Yt=at.exports;var it={exports:{}};(function(e,u){(function(c,i){e.exports=i()})(H,function(){return function(c,i){i.prototype.isSameOrBefore=function(y,l){return this.isSame(y,l)||this.isBefore(y,l)}}})})(it);const Gt=it.exports;var st={exports:{}};(function(e,u){(function(c,i){e.exports=i()})(H,function(){return function(c,i){i.prototype.isSameOrAfter=function(y,l){return this.isSame(y,l)||this.isAfter(y,l)}}})})(st);const Vt=st.exports;var lt={exports:{}};(function(e,u){(function(c,i){e.exports=i()})(H,function(){return function(c,i,y){i.prototype.isBetween=function(l,d,o,s){var n=y(l),a=y(d),p=(s=s||"()")[0]==="(",h=s[1]===")";return(p?this.isAfter(n,o):!this.isBefore(n,o))&&(h?this.isBefore(a,o):!this.isAfter(a,o))||(p?this.isBefore(n,o):!this.isAfter(n,o))&&(h?this.isAfter(a,o):!this.isBefore(a,o))}}})})(lt);const ct=lt.exports;var dt={exports:{}};(function(e,u){(function(c,i){e.exports=i()})(H,function(){var c="week",i="year";return function(y,l,d){var o=l.prototype;o.week=function(s){if(s===void 0&&(s=null),s!==null)return this.add(7*(s-this.week()),"day");var n=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var a=d(this).startOf(i).add(1,i).date(n),p=d(this).endOf(c);if(a.isBefore(p))return 1}var h=d(this).startOf(i).date(n).startOf(c).subtract(1,"millisecond"),m=this.diff(h,c,!0);return m<0?d(this).startOf("week").week():Math.ceil(m)},o.weeks=function(s){return s===void 0&&(s=null),this.week(s)}}})})(dt);const zt=dt.exports;var ft={exports:{}};(function(e,u){(function(c,i){e.exports=i()})(H,function(){return function(c,i,y){var l=i.prototype,d=l.format;y.en.ordinal=function(o){var s=["th","st","nd","rd"],n=o%100;return"["+o+(s[(n-20)%10]||s[n]||s[0])+"]"},l.format=function(o){var s=this,n=this.$locale();if(!this.isValid())return d.bind(this)(o);var a=this.$utils(),p=(o||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(h){switch(h){case"Q":return Math.ceil((s.$M+1)/3);case"Do":return n.ordinal(s.$D);case"gggg":return s.weekYear();case"GGGG":return s.isoWeekYear();case"wo":return n.ordinal(s.week(),"W");case"w":case"ww":return a.s(s.week(),h==="w"?1:2,"0");case"W":case"WW":return a.s(s.isoWeek(),h==="W"?1:2,"0");case"k":case"kk":return a.s(String(s.$H===0?24:s.$H),h==="k"?1:2,"0");case"X":return Math.floor(s.$d.getTime()/1e3);case"x":return s.$d.getTime();case"z":return"["+s.offsetName()+"]";case"zzz":return"["+s.offsetName("long")+"]";default:return h}});return d.bind(this)(p)}}})})(ft);const It=ft.exports;var ut={exports:{}};(function(e,u){(function(c,i){e.exports=i()})(H,function(){var c={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,y=/\d\d/,l=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,o={},s=function(f){return(f=+f)+(f>68?1900:2e3)},n=function(f){return function(x){this[f]=+x}},a=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=function(x){if(!x||x==="Z")return 0;var C=x.match(/([+-]|\d\d)/g),E=60*C[1]+(+C[2]||0);return E===0?0:C[0]==="+"?-E:E}(f)}],p=function(f){var x=o[f];return x&&(x.indexOf?x:x.s.concat(x.f))},h=function(f,x){var C,E=o.meridiem;if(E){for(var k=1;k<=24;k+=1)if(f.indexOf(E(k,0,x))>-1){C=k>12;break}}else C=f===(x?"pm":"PM");return C},m={A:[d,function(f){this.afternoon=h(f,!1)}],a:[d,function(f){this.afternoon=h(f,!0)}],S:[/\d/,function(f){this.milliseconds=100*+f}],SS:[y,function(f){this.milliseconds=10*+f}],SSS:[/\d{3}/,function(f){this.milliseconds=+f}],s:[l,n("seconds")],ss:[l,n("seconds")],m:[l,n("minutes")],mm:[l,n("minutes")],H:[l,n("hours")],h:[l,n("hours")],HH:[l,n("hours")],hh:[l,n("hours")],D:[l,n("day")],DD:[y,n("day")],Do:[d,function(f){var x=o.ordinal,C=f.match(/\d+/);if(this.day=C[0],x)for(var E=1;E<=31;E+=1)x(E).replace(/\[|\]/g,"")===f&&(this.day=E)}],M:[l,n("month")],MM:[y,n("month")],MMM:[d,function(f){var x=p("months"),C=(p("monthsShort")||x.map(function(E){return E.slice(0,3)})).indexOf(f)+1;if(C<1)throw new Error;this.month=C%12||C}],MMMM:[d,function(f){var x=p("months").indexOf(f)+1;if(x<1)throw new Error;this.month=x%12||x}],Y:[/[+-]?\d+/,n("year")],YY:[y,function(f){this.year=s(f)}],YYYY:[/\d{4}/,n("year")],Z:a,ZZ:a};function b(f){var x,C;x=f,C=o&&o.formats;for(var E=(f=x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,S,D){var T=D&&D.toUpperCase();return S||C[D]||c[D]||C[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,N,V){return N||V.slice(1)})})).match(i),k=E.length,_=0;_<k;_+=1){var r=E[_],w=m[r],g=w&&w[0],B=w&&w[1];E[_]=B?{regex:g,parser:B}:r.replace(/^\[|\]$/g,"")}return function(v){for(var S={},D=0,T=0;D<k;D+=1){var O=E[D];if(typeof O=="string")T+=O.length;else{var N=O.regex,V=O.parser,z=v.slice(T),I=N.exec(z)[0];V.call(S,I),v=v.replace(I,"")}}return function(Y){var G=Y.afternoon;if(G!==void 0){var j=Y.hours;G?j<12&&(Y.hours+=12):j===12&&(Y.hours=0),delete Y.afternoon}}(S),S}}return function(f,x,C){C.p.customParseFormat=!0,f&&f.parseTwoDigitYear&&(s=f.parseTwoDigitYear);var E=x.prototype,k=E.parse;E.parse=function(_){var r=_.date,w=_.utc,g=_.args;this.$u=w;var B=g[1];if(typeof B=="string"){var v=g[2]===!0,S=g[3]===!0,D=v||S,T=g[2];S&&(T=g[2]),o=this.$locale(),!v&&T&&(o=C.Ls[T]),this.$d=function(z,I,Y){try{if(["x","X"].indexOf(I)>-1)return new Date((I==="X"?1e3:1)*z);var G=b(I)(z),j=G.year,U=G.month,Se=G.day,Te=G.hours,Oe=G.minutes,Me=G.seconds,$e=G.milliseconds,Nt=G.zone,Z=new Date,J=Se||(j||U?1:Z.getDate()),tt=j||Z.getFullYear(),q=0;j&&!U||(q=U>0?U-1:Z.getMonth());var et=Te||0,nt=Oe||0,rt=Me||0,ot=$e||0;return Nt?new Date(Date.UTC(tt,q,J,et,nt,rt,ot+60*Nt.offset*1e3)):Y?new Date(Date.UTC(tt,q,J,et,nt,rt,ot)):new Date(tt,q,J,et,nt,rt,ot)}catch{return new Date("")}}(r,B,w),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),D&&r!=this.format(B)&&(this.$d=new Date("")),o={}}else if(B instanceof Array)for(var O=B.length,N=1;N<=O;N+=1){g[1]=B[N-1];var V=C.apply(this,g);if(V.isValid()){this.$d=V.$d,this.$L=V.$L,this.init();break}N===O&&(this.$d=new Date(""))}else k.call(this,_)}}})})(ut);const Rt=ut.exports,gt=Symbol("CHART_ROWS_KEY"),mt=Symbol("CONFIG_KEY"),pt=Symbol("EMIT_BAR_EVENT_KEY"),ht=Symbol("BAR_CONTAINER_KEY");function L(){const e=t.inject(mt);if(!e)throw Error("Failed to inject config!");return e}const yt="YYYY-MM-DD HH:mm";function A(e=L()){const{chartStart:u,chartEnd:c,barStart:i,barEnd:y,dateFormat:l}=e,d=t.computed(()=>s(u.value)),o=t.computed(()=>s(c.value)),s=(a,p)=>{let h;if(p!==void 0&&typeof a!="string"&&!(a instanceof Date)&&(h=p==="start"?a[i.value]:a[y.value]),typeof a=="string")h=a;else if(a instanceof Date)return $.default(a);const m=l.value||yt;return $.default(h,m,!0)};return{chartStartDayjs:d,chartEndDayjs:o,toDayjs:s,format:(a,p)=>p===!1?a instanceof Date?a:$.default(a).toDate():(typeof a=="string"||a instanceof Date?s(a):a).format(p)}}function wt(){const{precision:e}=L(),{chartStartDayjs:u,chartEndDayjs:c}=A(),i=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),y=t.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),l={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"W",month:"MMM",year:"YYYY"},d=t.computed(()=>{const o=[],s=[],n=c.value.diff(u.value,"minutes",!0),a=i.value,p=y.value;let h=u.value,m=u.value;for(;m.isSameOrBefore(c.value);){const b=m.endOf(p),x=b.isAfter(c.value)?c.value.diff(m,"minutes",!0)/n*100:b.diff(m,"minutes",!0)/n*100;s.push({label:m.format(l[e==null?void 0:e.value]),value:String(m),date:m.toDate(),width:String(x)+"%"}),m=b.add(1,p==="isoWeek"?"week":p).startOf(p)}for(;h.isSameOrBefore(c.value);){const b=h.endOf(a),x=b.isAfter(c.value)?c.value.diff(h,"minutes",!0)/n*100:b.diff(h,"minutes",!0)/n*100;o.push({label:h.format(l[a]),value:String(h),date:h.toDate(),width:String(x)+"%"}),h=b.add(1,a).startOf(a)}return{upperUnits:o,lowerUnits:s}});return d.value.lowerUnits[0].label==="53"&&d.value.lowerUnits.splice(0,1),d.value.lowerUnits[d.value.lowerUnits.length-1].label==="14"&&d.value.lowerUnits.splice(d.value.lowerUnits.length-1,1),{timeaxisUnits:d}}const Ht={class:"g-grid-container"},bt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{}},setup(e){const{colors:u}=L(),{timeaxisUnits:c}=wt(),i=l=>{const d=+l>=14&&+l<=26,o=+l>=40&&+l<=52;return d||o?"#f7f8f9":"#ffffff"},y=(l,d)=>d===c.value.lowerUnits.length-1?"unset":l&&Number(l)%13===0?"2px solid #a8adb3":"2px solid #f0f1f2";return(l,d)=>(t.openBlock(),t.createElementBlock("div",Ht,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c).lowerUnits,({label:o,value:s,width:n},a)=>{var p;return t.openBlock(),t.createElementBlock("div",{key:o,class:"g-grid-line",style:t.normalizeStyle({width:n,borderRight:y(o,a),background:(p=l.highlightedUnits)!=null&&p.includes(Number(s))?t.unref(u).hoverHighlight:void 0,backgroundColor:i(o)})},null,4)}),128))]))}}),Le="";function Q(){const e=t.inject(gt);if(!e)throw Error("Failed to inject getChartRows!");return e}const jt={class:"g-label-column-rows"},At=t.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:u,colors:c,labelColumnTitle:i,rowHeight:y}=L(),l=Q();return(d,o)=>(t.openBlock(),t.createElementBlock("div",{class:"g-label-column",style:t.normalizeStyle({fontFamily:t.unref(u),color:t.unref(c).text})},[t.renderSlot(d.$slots,"label-column-title",{},()=>[t.createElementVNode("div",{class:"g-label-column-header",style:t.normalizeStyle({background:t.unref(c).primary})},t.toDisplayString(t.unref(i)),5)]),t.createElementVNode("div",jt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l)(),({label:s},n)=>(t.openBlock(),t.createElementBlock("div",{key:`${s}_${n}`,class:"g-label-column-row",style:t.normalizeStyle({background:n%2===0?t.unref(c).ternary:t.unref(c).quartenary,height:`${t.unref(y)}px`})},[t.renderSlot(d.$slots,"label-column-row",{label:s},()=>[t.createElementVNode("span",null,t.toDisplayString(s),1)])],4))),128))])],4))}}),Ne="",Wt={class:"g-timeaxis"},Ft={class:"g-timeunits-container g-timeunits-low"},Pt={key:0,class:"g-timeunit-low-kw"},Ut={class:"g-timeunits-container g-timeunits-upper"},qt=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:u,colors:c}=L(),{timeaxisUnits:i}=wt();return(y,l)=>(t.openBlock(),t.createElementBlock("div",Wt,[t.createElementVNode("div",Ft,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(i).lowerUnits,({label:d,value:o,date:s,width:n},a)=>(t.openBlock(),t.createElementBlock("div",{key:d,class:"g-timeunit g-timeunit-low",style:t.normalizeStyle({flexDirection:t.unref(u)==="hour"?"column":"row",alignItems:t.unref(u)==="hour"?"":"center",width:n})},[a===0?(t.openBlock(),t.createElementBlock("span",Pt,"KW")):t.createCommentVNode("",!0),t.renderSlot(y.$slots,"timeunit",{label:d,value:o,date:s},()=>[t.createTextVNode(t.toDisplayString(d),1)]),t.unref(u)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:1,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(c).text})},null,4)):t.createCommentVNode("",!0)],4))),128))]),t.createElementVNode("div",Ut,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(i).upperUnits,({label:d,value:o,date:s,width:n},a)=>(t.openBlock(),t.createElementBlock("div",{key:d,class:"g-upper-timeunit",style:t.normalizeStyle({width:n})},[t.renderSlot(y.$slots,"upper-timeunit",{label:d,value:o,date:s},()=>[t.createTextVNode(t.toDisplayString(d),1)])],4))),128))])]))}}),Ye="",Qt="cadetblue",Xt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(e){const u=e,c={hour:"HH:mm",day:"DD. MMM HH:mm",date:"DD. MMMM YYYY",month:"DD. MMMM YYYY",week:"DD. MMMM YYYY (WW)"},{bar:i}=t.toRefs(u),{precision:y,font:l,barStart:d,barEnd:o,rowHeight:s}=L(),n=t.ref("0px"),a=t.ref("0px");t.watch(()=>u.bar,async()=>{var r;await t.nextTick();const x=((r=i==null?void 0:i.value)==null?void 0:r.ganttBarConfig.id)||"";if(!x)return;const C=document.getElementById(x),{top:E,left:k}=(C==null?void 0:C.getBoundingClientRect())||{top:0,left:0},_=Math.max(k,10);n.value=`${E+s.value-10}px`,a.value=`${_}px`},{deep:!0,immediate:!0});const p=t.computed(()=>{var x,C;return((C=(x=i==null?void 0:i.value)==null?void 0:x.ganttBarConfig.style)==null?void 0:C.background)||Qt}),{toDayjs:h}=A(),m=t.computed(()=>{var x;return(x=i.value)==null?void 0:x[d.value]}),b=t.computed(()=>{var x;return(x=i.value)==null?void 0:x[o.value]}),f=t.computed(()=>{if(!(i!=null&&i.value))return"";const x=c[y.value],C=h(m.value).format(x),E=h(b.value).format(x);return`${C} \u2013 ${E}`});return(x,C)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[x.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:a.value,fontFamily:t.unref(l)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:p.value})},null,4),t.renderSlot(x.$slots,"default",{bar:t.unref(i),barStart:m.value,barEnd:b.value},()=>[t.createTextVNode(t.toDisplayString(f.value),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Ge="";function P(e=L()){const{dateFormat:u,chartSize:c}=e,{chartStartDayjs:i,chartEndDayjs:y,toDayjs:l,format:d}=A(e),o=t.computed(()=>y.value.diff(i.value,"minutes"));return{mapTimeToPosition:a=>{const p=c.width.value||0,h=l(a).diff(i.value,"minutes",!0);return Math.ceil(h/o.value*p)},mapPositionToTime:a=>{const p=c.width.value||0,h=a/p*o.value;return d(i.value.add(h,"minutes"),u.value)}}}const Kt=t.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:u}=P(),c=t.ref($.default()),{colors:i,dateFormat:y,currentTimeLabel:l}=L(),d=t.computed(()=>{const o=y.value||"YYYY-MM-DD HH:mm";return u($.default(c.value,o).format(o))});return(o,s)=>(t.openBlock(),t.createElementBlock("div",{class:"g-grid-current-time",style:t.normalizeStyle({left:`${d.value}px`})},[t.createElementVNode("div",{class:"g-grid-current-time-marker",style:t.normalizeStyle({border:`1px dashed ${t.unref(i).markerCurrentTime}`})},null,4),t.createElementVNode("span",{class:"g-grid-current-time-text",style:t.normalizeStyle({color:t.unref(i).markerCurrentTime})},[t.renderSlot(o.$slots,"current-time-label",{},()=>[t.createTextVNode(t.toDisplayString(t.unref(l)),1)])],4)],4))}}),Ve="";var xt;const W=typeof window<"u";W&&((xt=window==null?void 0:window.navigator)==null?void 0:xt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Zt(e){return typeof e=="function"?e():t.unref(e)}function Jt(e){return e}function te(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function ee(e,u=!0){t.getCurrentInstance()?t.onMounted(e):u?e():t.nextTick(e)}function kt(e){var u;const c=Zt(e);return(u=c==null?void 0:c.$el)!=null?u:c}const ne=W?window:void 0;W&&window.document,W&&window.navigator,W&&window.location;function re(e,u=!1){const c=t.ref(),i=()=>c.value=Boolean(e());return i(),ee(i,u),c}const X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__";X[K]=X[K]||{},X[K];var Bt=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,ie=(e,u)=>{var c={};for(var i in e)oe.call(e,i)&&u.indexOf(i)<0&&(c[i]=e[i]);if(e!=null&&Bt)for(var i of Bt(e))u.indexOf(i)<0&&ae.call(e,i)&&(c[i]=e[i]);return c};function se(e,u,c={}){const i=c,{window:y=ne}=i,l=ie(i,["window"]);let d;const o=re(()=>y&&"ResizeObserver"in y),s=()=>{d&&(d.disconnect(),d=void 0)},n=t.watch(()=>kt(e),p=>{s(),o.value&&y&&p&&(d=new ResizeObserver(u),d.observe(p,l))},{immediate:!0,flush:"post"}),a=()=>{s(),n()};return te(a),{isSupported:o,stop:a}}function le(e,u={width:0,height:0},c={}){const i=t.ref(u.width),y=t.ref(u.height);return se(e,([l])=>{i.value=l.contentRect.width,y.value=l.contentRect.height},c),t.watch(()=>kt(e),l=>{i.value=l?u.width:0,y.value=l?u.height:0}),{width:i,height:y}}var Ct;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ct||(Ct={}));var ce=Object.defineProperty,Et=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,_t=(e,u,c)=>u in e?ce(e,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[u]=c,ue=(e,u)=>{for(var c in u||(u={}))de.call(u,c)&&_t(e,c,u[c]);if(Et)for(var c of Et(u))fe.call(u,c)&&_t(e,c,u[c]);return e};ue({linear:Jt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const vt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},ge=t.createElementVNode("div",{class:"g-gantt-chart-overview"},null,-1),me={class:"g-gantt-chart-quarters"},pe=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q1",-1),he=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q2",-1),ye=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q3",-1),we=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q4",-1),be={key:0,class:"g-gantt-chart-quarter"},Dt=t.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:yt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"},verticalGrid:{type:Boolean}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:u}){const c=e;$.default.extend(ct);const i=new Date,y=new Date;i.setDate(15),i.setMonth(10),y.setDate(31),y.setMonth(11);const l=t.ref($.default(new Date).isBetween(i,y)),{width:d,font:o,colorScheme:s}=t.toRefs(c),n=t.useSlots(),a=t.computed(()=>typeof s.value!="string"?s.value:vt[s.value]||vt.default),p=()=>{var g;const r=(g=n.default)==null?void 0:g.call(n),w=[];return r&&r.forEach(B=>{var v;if((v=B.props)!=null&&v.bars){const{label:S,bars:D}=B.props;w.push({label:S,bars:D})}else Array.isArray(B.children)&&B.children.forEach(S=>{var T;const D=S;if((T=D==null?void 0:D.props)!=null&&T.bars){const{label:O,bars:N}=D.props;w.push({label:O,bars:N})}})}),w},h=t.ref(!1),m=t.ref(!1),b=t.ref(void 0);let f;const x=r=>{f&&clearTimeout(f),f=setTimeout(()=>{h.value=!0},800),b.value=r},C=()=>{clearTimeout(f),h.value=!1},E=(r,w,g,B)=>{switch(r.type){case"click":u("click-bar",{bar:w,e:r,datetime:g});break;case"mousedown":u("mousedown-bar",{bar:w,e:r,datetime:g});break;case"mouseup":u("mouseup-bar",{bar:w,e:r,datetime:g});break;case"dblclick":u("dblclick-bar",{bar:w,e:r,datetime:g});break;case"mouseenter":x(w),u("mouseenter-bar",{bar:w,e:r});break;case"mouseleave":C(),u("mouseleave-bar",{bar:w,e:r});break;case"dragstart":m.value=!0,u("dragstart-bar",{bar:w,e:r});break;case"drag":u("drag-bar",{bar:w,e:r});break;case"dragend":m.value=!1,u("dragend-bar",{bar:w,e:r,movedBars:B});break;case"contextmenu":u("contextmenu-bar",{bar:w,e:r,datetime:g});break}},k=t.ref(null),_=le(k);return document.getElementsByClassName("g-timeunit-low"),t.provide(gt,p),t.provide(mt,{...t.toRefs(c),colors:a,chartSize:_}),t.provide(pt,E),(r,w)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["g-gantt-chart-container",[l.value?"g-gantt-chart-container--5-quarters-width":"g-gantt-chart-container--4-quarters-width"]])},[ge,t.createElementVNode("div",{class:t.normalizeClass([{"labels-in-column":!!r.labelColumnTitle}])},[r.labelColumnTitle?(t.openBlock(),t.createBlock(At,{key:0,style:t.normalizeStyle({width:r.labelColumnWidth})},{"label-column-title":t.withCtx(()=>[t.renderSlot(r.$slots,"label-column-title")]),"label-column-row":t.withCtx(({label:g})=>[t.renderSlot(r.$slots,"label-column-row",{label:g})]),_:3},8,["style"])):t.createCommentVNode("",!0),t.createElementVNode("div",{ref_key:"ganttChart",ref:k,class:t.normalizeClass(["g-gantt-chart",{"with-column":r.labelColumnTitle}]),style:t.normalizeStyle({width:t.unref(d),background:a.value.background,fontFamily:t.unref(o)})},[r.grid?(t.openBlock(),t.createBlock(bt,{key:0,"highlighted-units":r.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),r.currentTime?(t.openBlock(),t.createBlock(Kt,{key:1},{"current-time-label":t.withCtx(()=>[t.renderSlot(r.$slots,"current-time-label")]),_:3})):t.createCommentVNode("",!0),t.createElementVNode("div",me,[pe,he,ye,we,l.value?(t.openBlock(),t.createElementBlock("div",be,"Q1")):t.createCommentVNode("",!0)]),t.createElementVNode("div",{class:t.normalizeClass(["g-gantt-rows-container",c.verticalGrid?"g-gantt-chart-vertical-grid":""])},[t.renderSlot(r.$slots,"default"),t.createVNode(bt,{"highlighted-units":r.highlightedUnits},null,8,["highlighted-units"])],2),r.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(qt,{key:2},{"upper-timeunit":t.withCtx(({label:g,value:B,date:v})=>[t.renderSlot(r.$slots,"upper-timeunit",{label:g,value:B,date:v})]),timeunit:t.withCtx(({label:g,value:B,date:v})=>[t.renderSlot(r.$slots,"timeunit",{label:g,value:B,date:v})]),_:3}))],6)],2),t.createVNode(Xt,{"model-value":h.value||m.value,bar:b.value},{default:t.withCtx(()=>[t.renderSlot(r.$slots,"bar-tooltip",{bar:b.value})]),_:3},8,["model-value","bar"])],2))}}),Ie="";function St(e,u=()=>null,c=()=>null,i=L()){const{barStart:y,barEnd:l,pushOnOverlap:d}=i,o=t.ref(!1);let s=0,n;const{mapPositionToTime:a}=P(i),{toDayjs:p}=A(i),h=k=>{const _=document.getElementById(e.ganttBarConfig.id);if(!_)return;switch(s=k.clientX-(_.getBoundingClientRect().left||0),k.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",n=f;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",n=x;break;default:n=b}o.value=!0,window.addEventListener("mousemove",n),window.addEventListener("mouseup",E)},m=()=>{var r;const k=document.getElementById(e.ganttBarConfig.id),_=(r=k==null?void 0:k.closest(".g-gantt-row-bars-container"))==null?void 0:r.getBoundingClientRect();return{barElement:k,barContainer:_}},b=k=>{const{barElement:_,barContainer:r}=m();if(!_||!r)return;const w=_.getBoundingClientRect().width,g=k.clientX-r.left-s,B=g+w;C(g,B)||(e[y.value]=a(g),e[l.value]=a(B),u(k,e))},f=k=>{const{barElement:_,barContainer:r}=m();if(!_||!r)return;const w=k.clientX-r.left,g=a(w);p(g).isSameOrAfter(p(e,"end"))||(e[y.value]=g,u(k,e))},x=k=>{const{barElement:_,barContainer:r}=m();if(!_||!r)return;const w=k.clientX-r.left,g=a(w);p(g).isSameOrBefore(p(e,"start"))||(e[l.value]=g,u(k,e))},C=(k,_)=>{if(!d.value)return!1;const r=e.ganttBarConfig.dragLimitLeft,w=e.ganttBarConfig.dragLimitRight;return k&&r!=null&&k<r||_&&w!=null&&_>w},E=k=>{o.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",E),c(k,e)};return{isDragging:o,initDrag:h}}function Tt(){const e=t.inject(pt);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function xe(){const e=L(),u=Q(),c=Tt(),{pushOnOverlap:i,barStart:y,barEnd:l,noOverlap:d,dateFormat:o}=e,s=new Map,{toDayjs:n,format:a}=A(),p=(r,w)=>{const{initDrag:g}=St(r,m,E,e);c({...w,type:"dragstart"},r),g(w),k(r)},h=(r,w)=>{const g=r.ganttBarConfig.bundle;g!=null&&(u().forEach(B=>{B.bars.forEach(v=>{if(v.ganttBarConfig.bundle===g){const S=v===r?E:()=>null,{initDrag:D}=St(v,m,S,e);D(w),k(v)}})}),c({...w,type:"dragstart"},r))},m=(r,w)=>{c({...r,type:"drag"},w),b(w)},b=r=>{if(!(i!=null&&i.value))return;let w=r,{overlapBar:g,overlapType:B}=f(w);for(;g;){k(g);const v=n(w[y.value]),S=n(w[l.value]),D=n(g[y.value]),T=n(g[l.value]);let O;switch(B){case"left":O=T.diff(v,"minutes",!0),g[l.value]=a(w[y.value],o.value),g[y.value]=a(D.subtract(O,"minutes"),o.value);break;case"right":O=S.diff(D,"minutes",!0),g[y.value]=a(S,o.value),g[l.value]=a(T.add(O,"minutes"),o.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}g&&(B==="left"||B==="right")&&x(g,O,B),w=g,{overlapBar:g,overlapType:B}=f(g)}},f=r=>{var N,V;let w,g,B;const v=(V=(N=u().find(z=>z.bars.includes(r)))==null?void 0:N.bars)!=null?V:[],S=n(r[y.value]),D=n(r[l.value]);return{overlapBar:v.find(z=>{if(z===r)return!1;const I=n(z[y.value]),Y=n(z[l.value]);return w=S.isBetween(I,Y),g=D.isBetween(I,Y),B=I.isBetween(S,D)||Y.isBetween(S,D),w||g||B}),overlapType:w?"left":g?"right":B?"between":null}},x=(r,w,g)=>{k(r),r.ganttBarConfig.bundle&&u().forEach(B=>{B.bars.forEach(v=>{v.ganttBarConfig.bundle===r.ganttBarConfig.bundle&&v!==r&&(k(v),C(v,w,g))})})},C=(r,w,g)=>{switch(g){case"left":r[y.value]=a(n(r,"start").subtract(w,"minutes"),o.value),r[l.value]=a(n(r,"end").subtract(w,"minutes"),o.value);break;case"right":r[y.value]=a(n(r,"start").add(w,"minutes"),o.value),r[l.value]=a(n(r,"end").add(w,"minutes"),o.value)}b(r)},E=(r,w)=>{_();const g={...r,type:"dragend"};c(g,w,void 0,new Map(s)),s.clear()},k=r=>{if(!s.has(r)){const w=r[y.value],g=r[l.value];s.set(r,{oldStart:w,oldEnd:g})}},_=()=>{if(i.value||!d.value)return;let r=!1;s.forEach((w,g)=>{const{overlapBar:B}=f(g);B!=null&&(r=!0)}),r&&s.forEach(({oldStart:w,oldEnd:g},B)=>{B[y.value]=w,B[l.value]=g})};return{initDragOfBar:p,initDragOfBundle:h}}function ke(){const{pushOnOverlap:e}=L(),u=Q(),c=d=>{const o=[];return d!=null&&u().forEach(s=>{s.bars.forEach(n=>{n.ganttBarConfig.bundle===d&&o.push(n)})}),o},i=d=>{if(!e.value||d.ganttBarConfig.pushOnOverlap===!1)return;for(const s of["left","right"]){const n=s,{gapDistanceSoFar:a,bundleBarsAndGapDist:p}=y(d,0,n);let h=a;const m=p;if(!m)continue;for(let f=0;f<m.length;f++){const x=m[f].bar,C=m[f].gapDistance;c(x.ganttBarConfig.bundle).filter(k=>k!==x).forEach(k=>{const _=y(k,C,n),r=_.gapDistanceSoFar,w=_.bundleBarsAndGapDist;r!=null&&(!h||r<h)&&(h=r),w.forEach(g=>{m.find(B=>B.bar===g.bar)||m.push(g)})})}const b=document.getElementById(d.ganttBarConfig.id);h!=null&&n==="left"?d.ganttBarConfig.dragLimitLeft=b.offsetLeft-h:h!=null&&n==="right"&&(d.ganttBarConfig.dragLimitRight=b.offsetLeft+b.offsetWidth+h)}c(d.ganttBarConfig.bundle).forEach(s=>{s.ganttBarConfig.dragLimitLeft=d.ganttBarConfig.dragLimitLeft,s.ganttBarConfig.dragLimitRight=d.ganttBarConfig.dragLimitRight})},y=(d,o=0,s)=>{const n=d.ganttBarConfig.bundle?[{bar:d,gapDistance:o}]:[];let a=d,p=l(a,s);if(s==="left")for(;p;){const h=document.getElementById(a.ganttBarConfig.id),m=document.getElementById(p.ganttBarConfig.id),b=m.offsetLeft+m.offsetWidth;if(o+=h.offsetLeft-b,p.ganttBarConfig.immobile)return{gapDistanceSoFar:o,bundleBarsAndGapDist:n};p.ganttBarConfig.bundle&&n.push({bar:p,gapDistance:o}),a=p,p=l(p,"left")}if(s==="right")for(;p;){const h=document.getElementById(a.ganttBarConfig.id),m=document.getElementById(p.ganttBarConfig.id),b=h.offsetLeft+h.offsetWidth;if(o+=m.offsetLeft-b,p.ganttBarConfig.immobile)return{gapDistanceSoFar:o,bundleBarsAndGapDist:n};p.ganttBarConfig.bundle&&n.push({bar:p,gapDistance:o}),a=p,p=l(p,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:n}},l=(d,o)=>{var p,h;const s=document.getElementById(d.ganttBarConfig.id),n=(h=(p=u().find(m=>m.bars.includes(d)))==null?void 0:p.bars)!=null?h:[];let a=[];return o==="left"?a=n.filter(m=>{const b=document.getElementById(m.ganttBarConfig.id);return b&&b.offsetLeft<s.offsetLeft&&m.ganttBarConfig.pushOnOverlap!==!1}):a=n.filter(m=>{const b=document.getElementById(m.ganttBarConfig.id);return b&&b.offsetLeft>s.offsetLeft&&m.ganttBarConfig.pushOnOverlap!==!1}),a.length>0?a.reduce((m,b)=>{const f=document.getElementById(m.ganttBarConfig.id),x=document.getElementById(b.ganttBarConfig.id),C=Math.abs(f.offsetLeft-s.offsetLeft),E=Math.abs(x.offsetLeft-s.offsetLeft);return C<E?m:b},a[0]):null};return{setDragLimitsOfGanttBar:i}}const Be=["id"],Ce={class:"g-gantt-bar-label"},Ee=["innerHTML"],_e=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),ve=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),De=8,Ot=t.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){var w;const u=e;t.useCssVars(g=>({"22f5b0ec":t.unref(d)}));const c=Tt(),i=L(),{rowHeight:y}=i,{bar:l}=t.toRefs(u),d=(w=u.bar.ganttBarConfig.style)==null?void 0:w.backgroundColor,{mapTimeToPosition:o,mapPositionToTime:s}=P();xe(),ke();const n=t.ref(!1),a=t.computed(()=>l.value.ganttBarConfig),p=t.inject(ht),h=g=>{var S;g.preventDefault();const B=(S=p==null?void 0:p.value)==null?void 0:S.getBoundingClientRect();if(!B)return;const v=s(g.clientX-B.left);c(g,l.value,v)},{barStart:m,barEnd:b,width:f,chartStart:x,chartEnd:C,chartSize:E}=i,k=t.ref(0),_=t.ref(0),r=t.computed(()=>{const g=new Date(l.value.myBeginDate).getTime(),B=new Date(l.value.myEndDate).getTime();return Math.abs(g-B)/(1e3*60*60*24)<=2?0:_.value-k.value-De});return t.onMounted(()=>{t.watch([l,f,x,C,E.width],()=>{k.value=o(l.value[m.value]),_.value=o(l.value[b.value])},{deep:!0,immediate:!0})}),(g,B)=>{var v;return t.openBlock(),t.createElementBlock("div",{id:a.value.id,class:t.normalizeClass(["g-gantt-bar",a.value.asArrow?"g-gantt-bar-is-arrow":"",a.value.class||""]),style:t.normalizeStyle({...a.value.style,position:"absolute",top:`${t.unref(y)*.1}px`,left:`${k.value}px`,width:`${r.value}px`,height:`${t.unref(y)*.8}px`,zIndex:n.value?3:2}),onMousedown:h,onClick:h,onDblclick:h,onMouseenter:h,onMouseleave:h,onContextmenu:h},[t.createElementVNode("div",Ce,[t.renderSlot(g.$slots,"default",{bar:t.unref(l)},()=>[t.createElementVNode("div",null,t.toDisplayString(a.value.label||""),1),a.value.html?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:a.value.html},null,8,Ee)):t.createCommentVNode("",!0)])]),a.value.asArrow?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-bar-arrow",style:t.normalizeStyle({borderLeft:`8px solid #${(v=t.unref(l).ganttBarConfig.style)==null?void 0:v.backgroundColor}`})},null,4)):t.createCommentVNode("",!0),a.value.hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[_e,ve],64)):t.createCommentVNode("",!0)],46,Be)}}}),Re="",Mt=t.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},overlaps:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:u}){const c=e,{rowHeight:i,colors:y,labelColumnTitle:l}=L(),{highlightOnHover:d}=t.toRefs(c),o=t.ref(!1),s=t.computed(()=>({height:`${i.value}px`,background:(d==null?void 0:d.value)&&o.value?y.value.hoverHighlight:null})),{mapPositionToTime:n}=P(),a=t.ref(null);t.provide(ht,a);const p=m=>{var C;const b=(C=a.value)==null?void 0:C.getBoundingClientRect();if(!b){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const f=m.clientX-b.left,x=n(f);u("drop",{e:m,datetime:x})},h=m=>!m||/^\s*$/.test(m);return(m,b)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("div",{class:"g-gantt-row",style:t.normalizeStyle(s.value),onDragover:b[0]||(b[0]=t.withModifiers(f=>o.value=!0,["prevent"])),onDragleave:b[1]||(b[1]=f=>o.value=!1),onDrop:b[2]||(b[2]=f=>p(f)),onMouseover:b[3]||(b[3]=f=>o.value=!0),onMouseleave:b[4]||(b[4]=f=>o.value=!1)},[!h(m.label)&&!t.unref(l)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(y).primary,color:t.unref(y).text})},[t.renderSlot(m.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(m.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:a,class:"g-gantt-row-bars-container"},m.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition sys",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(m.bars,f=>(t.openBlock(),t.createBlock(Ot,{key:f.ganttBarConfig.id,bar:f},{default:t.withCtx(()=>[t.renderSlot(m.$slots,"bar-label",{bar:f})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36),m.overlaps?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row",style:t.normalizeStyle(s.value),onDragover:b[5]||(b[5]=t.withModifiers(f=>o.value=!0,["prevent"])),onDragleave:b[6]||(b[6]=f=>o.value=!1),onDrop:b[7]||(b[7]=f=>p(f)),onMouseover:b[8]||(b[8]=f=>o.value=!0),onMouseleave:b[9]||(b[9]=f=>o.value=!1)},[!h(m.label)&&!t.unref(l)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(y).primary,color:t.unref(y).text})},[t.renderSlot(m.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(m.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:a,class:"g-gantt-row-bars-container"},m.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition OVERLAP___",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(m.overlaps,f=>(t.openBlock(),t.createBlock(Ot,{key:f.ganttBarConfig.id,bar:f},{default:t.withCtx(()=>[t.renderSlot(m.$slots,"bar-label",{bar:f})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36)):t.createCommentVNode("",!0)]))}}),He="";function $t(){$.default.extend(Gt),$.default.extend(Vt),$.default.extend(ct),$.default.extend(Rt),$.default.extend(zt),$.default.extend(Yt),$.default.extend(It)}const Lt={install(e,u){$t(),e.component("GGanttChart",Dt),e.component("GGanttRow",Mt)}};M.GGanttChart=Dt,M.GGanttRow=Mt,M.default=Lt,M.extendDayjs=$t,M.ganttastic=Lt,Object.defineProperties(M,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(M,R="top"){if(!M||typeof document>"u")return;const t=document.head,F=document.createElement("style");R==="top"&&t.firstChild?t.insertBefore(F,t.firstChild):t.appendChild(F),F.appendChild(document.createTextNode(M))}injectStyle(`
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
.g-gantt-chart-container {
  background: #f0f1f2;
  padding: 0 24px 0 16px;
  border-top: 4px solid #91979C;
  border-bottom: 4px solid #91979C;
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
  padding: 16px 0;
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
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
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
  border-radius: 0px;
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
  border-left: 8px solid var(--22f5b0ec);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  z-index: 10;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
`,"top");injectStyle(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
}
`,"top");injectStyle(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
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
`,"top");
