(function(M,V){typeof exports=="object"&&typeof module<"u"?V(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],V):(M=typeof globalThis<"u"?globalThis:M||self,V(M.VueGanttastic={},M.dayjs,M.Vue))})(this,function(M,V,t){"use strict";const $=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(V);var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,f){(function(c,o){e.exports=o()})(H,function(){var c="day";return function(o,p,l){var d=function(r){return r.add(4-r.isoWeekday(),c)},s=p.prototype;s.isoWeekYear=function(){return d(this).year()},s.isoWeek=function(r){if(!this.$utils().u(r))return this.add(7*(r-this.isoWeek()),c);var a,g,m,k,C=d(this),y=(a=this.isoWeekYear(),g=this.$u,m=(g?l.utc:l)().year(a).startOf("year"),k=4-m.isoWeekday(),m.isoWeekday()>4&&(k+=7),m.add(k,c));return C.diff(y,"week")+1},s.isoWeekday=function(r){return this.$utils().u(r)?this.day()||7:this.day(this.day()%7?r:r-7)};var i=s.startOf;s.startOf=function(r,a){var g=this.$utils(),m=!!g.u(a)||a;return g.p(r)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):i.bind(this)(r,a)}}})})(at);const Yt=at.exports;var it={exports:{}};(function(e,f){(function(c,o){e.exports=o()})(H,function(){return function(c,o){o.prototype.isSameOrBefore=function(p,l){return this.isSame(p,l)||this.isBefore(p,l)}}})})(it);const Gt=it.exports;var st={exports:{}};(function(e,f){(function(c,o){e.exports=o()})(H,function(){return function(c,o){o.prototype.isSameOrAfter=function(p,l){return this.isSame(p,l)||this.isAfter(p,l)}}})})(st);const Nt=st.exports;var lt={exports:{}};(function(e,f){(function(c,o){e.exports=o()})(H,function(){return function(c,o,p){o.prototype.isBetween=function(l,d,s,i){var r=p(l),a=p(d),g=(i=i||"()")[0]==="(",m=i[1]===")";return(g?this.isAfter(r,s):!this.isBefore(r,s))&&(m?this.isBefore(a,s):!this.isAfter(a,s))||(g?this.isBefore(r,s):!this.isAfter(r,s))&&(m?this.isAfter(a,s):!this.isBefore(a,s))}}})})(lt);const ct=lt.exports;var dt={exports:{}};(function(e,f){(function(c,o){e.exports=o()})(H,function(){var c="week",o="year";return function(p,l,d){var s=l.prototype;s.week=function(i){if(i===void 0&&(i=null),i!==null)return this.add(7*(i-this.week()),"day");var r=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var a=d(this).startOf(o).add(1,o).date(r),g=d(this).endOf(c);if(a.isBefore(g))return 1}var m=d(this).startOf(o).date(r).startOf(c).subtract(1,"millisecond"),k=this.diff(m,c,!0);return k<0?d(this).startOf("week").week():Math.ceil(k)},s.weeks=function(i){return i===void 0&&(i=null),this.week(i)}}})})(dt);const It=dt.exports;var ft={exports:{}};(function(e,f){(function(c,o){e.exports=o()})(H,function(){return function(c,o,p){var l=o.prototype,d=l.format;p.en.ordinal=function(s){var i=["th","st","nd","rd"],r=s%100;return"["+s+(i[(r-20)%10]||i[r]||i[0])+"]"},l.format=function(s){var i=this,r=this.$locale();if(!this.isValid())return d.bind(this)(s);var a=this.$utils(),g=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(m){switch(m){case"Q":return Math.ceil((i.$M+1)/3);case"Do":return r.ordinal(i.$D);case"gggg":return i.weekYear();case"GGGG":return i.isoWeekYear();case"wo":return r.ordinal(i.week(),"W");case"w":case"ww":return a.s(i.week(),m==="w"?1:2,"0");case"W":case"WW":return a.s(i.isoWeek(),m==="W"?1:2,"0");case"k":case"kk":return a.s(String(i.$H===0?24:i.$H),m==="k"?1:2,"0");case"X":return Math.floor(i.$d.getTime()/1e3);case"x":return i.$d.getTime();case"z":return"["+i.offsetName()+"]";case"zzz":return"["+i.offsetName("long")+"]";default:return m}});return d.bind(this)(g)}}})})(ft);const Rt=ft.exports;var ut={exports:{}};(function(e,f){(function(c,o){e.exports=o()})(H,function(){var c={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},o=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,p=/\d\d/,l=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,s={},i=function(y){return(y=+y)+(y>68?1900:2e3)},r=function(y){return function(w){this[y]=+w}},a=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var x=w.match(/([+-]|\d\d)/g),_=60*x[1]+(+x[2]||0);return _===0?0:x[0]==="+"?-_:_}(y)}],g=function(y){var w=s[y];return w&&(w.indexOf?w:w.s.concat(w.f))},m=function(y,w){var x,_=s.meridiem;if(_){for(var b=1;b<=24;b+=1)if(y.indexOf(_(b,0,w))>-1){x=b>12;break}}else x=y===(w?"pm":"PM");return x},k={A:[d,function(y){this.afternoon=m(y,!1)}],a:[d,function(y){this.afternoon=m(y,!0)}],S:[/\d/,function(y){this.milliseconds=100*+y}],SS:[p,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[l,r("seconds")],ss:[l,r("seconds")],m:[l,r("minutes")],mm:[l,r("minutes")],H:[l,r("hours")],h:[l,r("hours")],HH:[l,r("hours")],hh:[l,r("hours")],D:[l,r("day")],DD:[p,r("day")],Do:[d,function(y){var w=s.ordinal,x=y.match(/\d+/);if(this.day=x[0],w)for(var _=1;_<=31;_+=1)w(_).replace(/\[|\]/g,"")===y&&(this.day=_)}],M:[l,r("month")],MM:[p,r("month")],MMM:[d,function(y){var w=g("months"),x=(g("monthsShort")||w.map(function(_){return _.slice(0,3)})).indexOf(y)+1;if(x<1)throw new Error;this.month=x%12||x}],MMMM:[d,function(y){var w=g("months").indexOf(y)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,r("year")],YY:[p,function(y){this.year=i(y)}],YYYY:[/\d{4}/,r("year")],Z:a,ZZ:a};function C(y){var w,x;w=y,x=s&&s.formats;for(var _=(y=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,T,D){var O=D&&D.toUpperCase();return T||x[D]||c[D]||x[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(S,Y,I){return Y||I.slice(1)})})).match(o),b=_.length,B=0;B<b;B+=1){var n=_[B],h=k[n],u=h&&h[0],E=h&&h[1];_[B]=E?{regex:u,parser:E}:n.replace(/^\[|\]$/g,"")}return function(v){for(var T={},D=0,O=0;D<b;D+=1){var S=_[D];if(typeof S=="string")O+=S.length;else{var Y=S.regex,I=S.parser,R=v.slice(O),z=Y.exec(R)[0];I.call(T,z),v=v.replace(z,"")}}return function(G){var N=G.afternoon;if(N!==void 0){var j=G.hours;N?j<12&&(G.hours+=12):j===12&&(G.hours=0),delete G.afternoon}}(T),T}}return function(y,w,x){x.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(i=y.parseTwoDigitYear);var _=w.prototype,b=_.parse;_.parse=function(B){var n=B.date,h=B.utc,u=B.args;this.$u=h;var E=u[1];if(typeof E=="string"){var v=u[2]===!0,T=u[3]===!0,D=v||T,O=u[2];T&&(O=u[2]),s=this.$locale(),!v&&O&&(s=x.Ls[O]),this.$d=function(R,z,G){try{if(["x","X"].indexOf(z)>-1)return new Date((z==="X"?1e3:1)*R);var N=C(z)(R),j=N.year,P=N.month,Te=N.day,Oe=N.hours,Se=N.minutes,Me=N.seconds,$e=N.milliseconds,Lt=N.zone,Z=new Date,J=Te||(j||P?1:Z.getDate()),tt=j||Z.getFullYear(),q=0;j&&!P||(q=P>0?P-1:Z.getMonth());var et=Oe||0,nt=Se||0,rt=Me||0,ot=$e||0;return Lt?new Date(Date.UTC(tt,q,J,et,nt,rt,ot+60*Lt.offset*1e3)):G?new Date(Date.UTC(tt,q,J,et,nt,rt,ot)):new Date(tt,q,J,et,nt,rt,ot)}catch{return new Date("")}}(n,E,h),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),D&&n!=this.format(E)&&(this.$d=new Date("")),s={}}else if(E instanceof Array)for(var S=E.length,Y=1;Y<=S;Y+=1){u[1]=E[Y-1];var I=x.apply(this,u);if(I.isValid()){this.$d=I.$d,this.$L=I.$L,this.init();break}Y===S&&(this.$d=new Date(""))}else b.call(this,B)}}})})(ut);const zt=ut.exports,gt=Symbol("CHART_ROWS_KEY"),mt=Symbol("CONFIG_KEY"),ht=Symbol("EMIT_BAR_EVENT_KEY"),pt=Symbol("BAR_CONTAINER_KEY");function L(){const e=t.inject(mt);if(!e)throw Error("Failed to inject config!");return e}const yt="YYYY-MM-DD HH:mm";function A(e=L()){const{chartStart:f,chartEnd:c,barStart:o,barEnd:p,dateFormat:l}=e,d=t.computed(()=>i(f.value)),s=t.computed(()=>i(c.value)),i=(a,g)=>{let m;if(g!==void 0&&typeof a!="string"&&!(a instanceof Date)&&(m=g==="start"?a[o.value]:a[p.value]),typeof a=="string")m=a;else if(a instanceof Date)return $.default(a);const k=l.value||yt;return $.default(m,k,!0)};return{chartStartDayjs:d,chartEndDayjs:s,toDayjs:i,format:(a,g)=>g===!1?a instanceof Date?a:$.default(a).toDate():(typeof a=="string"||a instanceof Date?i(a):a).format(g)}}function wt(){const{precision:e}=L(),{chartStartDayjs:f,chartEndDayjs:c}=A(),o=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),p=t.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),l={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"W",month:"MMM",year:"YYYY"},d=t.computed(()=>{const s=[],i=[],r=c.value.diff(f.value,"minutes",!0),a=o.value,g=p.value;let m=f.value,k=f.value;for(;k.isSameOrBefore(c.value);){const C=k.endOf(g),w=C.isAfter(c.value)?c.value.diff(k,"minutes",!0)/r*100:C.diff(k,"minutes",!0)/r*100;i.push({label:k.format(l[e==null?void 0:e.value]),value:String(k),date:k.toDate(),width:String(w)+"%"}),k=C.add(1,g==="isoWeek"?"week":g).startOf(g)}for(;m.isSameOrBefore(c.value);){const C=m.endOf(a),w=C.isAfter(c.value)?c.value.diff(m,"minutes",!0)/r*100:C.diff(m,"minutes",!0)/r*100;s.push({label:m.format(l[a]),value:String(m),date:m.toDate(),width:String(w)+"%"}),m=C.add(1,a).startOf(a)}return{upperUnits:s,lowerUnits:i}});return d.value.lowerUnits[0].label==="53"&&d.value.lowerUnits.splice(0,1),d.value.lowerUnits[d.value.lowerUnits.length-1].label==="1"&&d.value.lowerUnits.splice(d.value.lowerUnits.length-1,1),d.value.lowerUnits[d.value.lowerUnits.length-1].label==="14"&&d.value.lowerUnits.splice(d.value.lowerUnits.length-1,1),{timeaxisUnits:d}}const Vt={class:"g-grid-container"},bt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{}},setup(e){const{colors:f}=L(),{timeaxisUnits:c}=wt(),o=l=>{const d=+l>=14&&+l<=26,s=+l>=40&&+l<=52;return d||s?"#f7f8f9":"#ffffff"},p=(l,d)=>d===c.value.lowerUnits.length-1?"unset":l&&Number(l)%13===0?"2px solid #a8adb3":"2px solid #f0f1f2";return(l,d)=>(t.openBlock(),t.createElementBlock("div",Vt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c).lowerUnits,({label:s,value:i,width:r},a)=>{var g;return t.openBlock(),t.createElementBlock("div",{key:s,class:"g-grid-line",style:t.normalizeStyle({width:r,borderRight:p(s,a),background:(g=l.highlightedUnits)!=null&&g.includes(Number(i))?t.unref(f).hoverHighlight:void 0,backgroundColor:o(s)})},null,4)}),128))]))}}),Le="";function Q(){const e=t.inject(gt);if(!e)throw Error("Failed to inject getChartRows!");return e}const Ht={class:"g-label-column-rows"},jt=t.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:f,colors:c,labelColumnTitle:o,rowHeight:p}=L(),l=Q();return(d,s)=>(t.openBlock(),t.createElementBlock("div",{class:"g-label-column",style:t.normalizeStyle({fontFamily:t.unref(f),color:t.unref(c).text})},[t.renderSlot(d.$slots,"label-column-title",{},()=>[t.createElementVNode("div",{class:"g-label-column-header",style:t.normalizeStyle({background:t.unref(c).primary})},t.toDisplayString(t.unref(o)),5)]),t.createElementVNode("div",Ht,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l)(),({label:i},r)=>(t.openBlock(),t.createElementBlock("div",{key:`${i}_${r}`,class:"g-label-column-row",style:t.normalizeStyle({background:r%2===0?t.unref(c).ternary:t.unref(c).quartenary,height:`${t.unref(p)}px`})},[t.renderSlot(d.$slots,"label-column-row",{label:i},()=>[t.createElementVNode("span",null,t.toDisplayString(i),1)])],4))),128))])],4))}}),Ye="",At={class:"g-timeaxis"},Wt={class:"g-timeunits-container g-timeunits-low"},Ft={key:0,class:"g-timeunit-low-kw"},Ut={class:"g-timeunits-container g-timeunits-upper"},Pt=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:f,colors:c}=L(),{timeaxisUnits:o}=wt();return(p,l)=>(t.openBlock(),t.createElementBlock("div",At,[t.createElementVNode("div",Wt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o).lowerUnits,({label:d,value:s,date:i,width:r},a)=>(t.openBlock(),t.createElementBlock("div",{key:d,class:"g-timeunit g-timeunit-low",style:t.normalizeStyle({flexDirection:t.unref(f)==="hour"?"column":"row",alignItems:t.unref(f)==="hour"?"":"center",width:r})},[a===0?(t.openBlock(),t.createElementBlock("span",Ft,"KW")):t.createCommentVNode("",!0),t.renderSlot(p.$slots,"timeunit",{label:d,value:s,date:i},()=>[t.createTextVNode(t.toDisplayString(d),1)]),t.unref(f)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:1,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(c).text})},null,4)):t.createCommentVNode("",!0)],4))),128))]),t.createElementVNode("div",Ut,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o).upperUnits,({label:d,value:s,date:i,width:r},a)=>(t.openBlock(),t.createElementBlock("div",{key:d,class:"g-upper-timeunit",style:t.normalizeStyle({width:r})},[t.renderSlot(p.$slots,"upper-timeunit",{label:d,value:s,date:i},()=>[t.createTextVNode(t.toDisplayString(d),1)])],4))),128))])]))}}),Ge="",qt="cadetblue",Qt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(e){const f=e,c={hour:"HH:mm",day:"DD. MMM HH:mm",date:"DD. MMMM YYYY",month:"DD. MMMM YYYY",week:"DD. MMMM YYYY (WW)"},{bar:o}=t.toRefs(f),{precision:p,font:l,barStart:d,barEnd:s,rowHeight:i}=L(),r=t.ref("0px"),a=t.ref("0px");t.watch(()=>f.bar,async()=>{var n;await t.nextTick();const w=((n=o==null?void 0:o.value)==null?void 0:n.ganttBarConfig.id)||"";if(!w)return;const x=document.getElementById(w),{top:_,left:b}=(x==null?void 0:x.getBoundingClientRect())||{top:0,left:0},B=Math.max(b,10);r.value=`${_+i.value-10}px`,a.value=`${B}px`},{deep:!0,immediate:!0});const g=t.computed(()=>{var w,x;return((x=(w=o==null?void 0:o.value)==null?void 0:w.ganttBarConfig.style)==null?void 0:x.background)||qt}),{toDayjs:m}=A(),k=t.computed(()=>{var w;return(w=o.value)==null?void 0:w[d.value]}),C=t.computed(()=>{var w;return(w=o.value)==null?void 0:w[s.value]}),y=t.computed(()=>{if(!(o!=null&&o.value))return"";const w=c[p.value],x=m(k.value).format(w),_=m(C.value).format(w);return`${x} \u2013 ${_}`});return(w,x)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[w.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:r.value,left:a.value,fontFamily:t.unref(l)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:g.value})},null,4),t.renderSlot(w.$slots,"default",{bar:t.unref(o),barStart:k.value,barEnd:C.value},()=>[t.createTextVNode(t.toDisplayString(y.value),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Ne="";function U(e=L()){const{dateFormat:f,chartSize:c}=e,{chartStartDayjs:o,chartEndDayjs:p,toDayjs:l,format:d}=A(e),s=t.computed(()=>p.value.diff(o.value,"minutes"));return{mapTimeToPosition:a=>{const g=c.width.value||0,m=l(a).diff(o.value,"minutes",!0);return Math.ceil(m/s.value*g)},mapPositionToTime:a=>{const g=c.width.value||0,m=a/g*s.value;return d(o.value.add(m,"minutes"),f.value)}}}const Xt=t.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:f}=U(),c=t.ref($.default()),{colors:o,dateFormat:p,currentTimeLabel:l}=L(),d=t.computed(()=>{const s=p.value||"YYYY-MM-DD HH:mm";return f($.default(c.value,s).format(s))});return(s,i)=>(t.openBlock(),t.createElementBlock("div",{class:"g-grid-current-time",style:t.normalizeStyle({left:`${d.value}px`})},[t.createElementVNode("div",{class:"g-grid-current-time-marker",style:t.normalizeStyle({border:`1px dashed ${t.unref(o).markerCurrentTime}`})},null,4),t.createElementVNode("span",{class:"g-grid-current-time-text",style:t.normalizeStyle({color:t.unref(o).markerCurrentTime})},[t.renderSlot(s.$slots,"current-time-label",{},()=>[t.createTextVNode(t.toDisplayString(t.unref(l)),1)])],4)],4))}}),Ie="";var xt;const W=typeof window<"u";W&&((xt=window==null?void 0:window.navigator)==null?void 0:xt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Kt(e){return typeof e=="function"?e():t.unref(e)}function Zt(e){return e}function Jt(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function te(e,f=!0){t.getCurrentInstance()?t.onMounted(e):f?e():t.nextTick(e)}function Bt(e){var f;const c=Kt(e);return(f=c==null?void 0:c.$el)!=null?f:c}const ee=W?window:void 0;W&&window.document,W&&window.navigator,W&&window.location;function ne(e,f=!1){const c=t.ref(),o=()=>c.value=Boolean(e());return o(),te(o,f),c}const X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__";X[K]=X[K]||{},X[K];var kt=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,ae=(e,f)=>{var c={};for(var o in e)re.call(e,o)&&f.indexOf(o)<0&&(c[o]=e[o]);if(e!=null&&kt)for(var o of kt(e))f.indexOf(o)<0&&oe.call(e,o)&&(c[o]=e[o]);return c};function ie(e,f,c={}){const o=c,{window:p=ee}=o,l=ae(o,["window"]);let d;const s=ne(()=>p&&"ResizeObserver"in p),i=()=>{d&&(d.disconnect(),d=void 0)},r=t.watch(()=>Bt(e),g=>{i(),s.value&&p&&g&&(d=new ResizeObserver(f),d.observe(g,l))},{immediate:!0,flush:"post"}),a=()=>{i(),r()};return Jt(a),{isSupported:s,stop:a}}function se(e,f={width:0,height:0},c={}){const o=t.ref(f.width),p=t.ref(f.height);return ie(e,([l])=>{o.value=l.contentRect.width,p.value=l.contentRect.height},c),t.watch(()=>Bt(e),l=>{o.value=l?f.width:0,p.value=l?f.height:0}),{width:o,height:p}}var _t;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(_t||(_t={}));var le=Object.defineProperty,Et=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,Ct=(e,f,c)=>f in e?le(e,f,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[f]=c,fe=(e,f)=>{for(var c in f||(f={}))ce.call(f,c)&&Ct(e,c,f[c]);if(Et)for(var c of Et(f))de.call(f,c)&&Ct(e,c,f[c]);return e};fe({linear:Zt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const vt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},ue=t.createElementVNode("div",{class:"g-gantt-chart-overview"},null,-1),ge={class:"g-gantt-chart-quarters"},me=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q1",-1),he=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q2",-1),pe=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q3",-1),ye=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q4",-1),we={key:0,class:"g-gantt-chart-quarter"},Dt=t.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:yt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"},verticalGrid:{type:Boolean}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:f}){const c=e;$.default.extend(ct);const o=new Date,p=new Date;o.setDate(15),o.setMonth(10),p.setDate(31),p.setMonth(11);const l=t.ref($.default(new Date).isBetween(o,p)),{width:d,font:s,colorScheme:i}=t.toRefs(c),r=t.useSlots(),a=t.computed(()=>typeof i.value!="string"?i.value:vt[i.value]||vt.default),g=()=>{var u;const n=(u=r.default)==null?void 0:u.call(r),h=[];return n&&n.forEach(E=>{var v;if((v=E.props)!=null&&v.bars){const{label:T,bars:D}=E.props;h.push({label:T,bars:D})}else Array.isArray(E.children)&&E.children.forEach(T=>{var O;const D=T;if((O=D==null?void 0:D.props)!=null&&O.bars){const{label:S,bars:Y}=D.props;h.push({label:S,bars:Y})}})}),h},m=t.ref(!1),k=t.ref(!1),C=t.ref(void 0);let y;const w=n=>{y&&clearTimeout(y),y=setTimeout(()=>{m.value=!0},800),C.value=n},x=()=>{clearTimeout(y),m.value=!1},_=(n,h,u,E)=>{switch(n.type){case"click":f("click-bar",{bar:h,e:n,datetime:u});break;case"mousedown":f("mousedown-bar",{bar:h,e:n,datetime:u});break;case"mouseup":f("mouseup-bar",{bar:h,e:n,datetime:u});break;case"dblclick":f("dblclick-bar",{bar:h,e:n,datetime:u});break;case"mouseenter":w(h),f("mouseenter-bar",{bar:h,e:n});break;case"mouseleave":x(),f("mouseleave-bar",{bar:h,e:n});break;case"dragstart":k.value=!0,f("dragstart-bar",{bar:h,e:n});break;case"drag":f("drag-bar",{bar:h,e:n});break;case"dragend":k.value=!1,f("dragend-bar",{bar:h,e:n,movedBars:E});break;case"contextmenu":f("contextmenu-bar",{bar:h,e:n,datetime:u});break}},b=t.ref(null),B=se(b);return document.getElementsByClassName("g-timeunit-low"),t.provide(gt,g),t.provide(mt,{...t.toRefs(c),colors:a,chartSize:B}),t.provide(ht,_),(n,h)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["g-gantt-chart-container",[l.value?"g-gantt-chart-container--5-quarters-width":"g-gantt-chart-container--4-quarters-width"]])},[ue,t.createElementVNode("div",{class:t.normalizeClass([{"labels-in-column":!!n.labelColumnTitle}])},[n.labelColumnTitle?(t.openBlock(),t.createBlock(jt,{key:0,style:t.normalizeStyle({width:n.labelColumnWidth})},{"label-column-title":t.withCtx(()=>[t.renderSlot(n.$slots,"label-column-title")]),"label-column-row":t.withCtx(({label:u})=>[t.renderSlot(n.$slots,"label-column-row",{label:u})]),_:3},8,["style"])):t.createCommentVNode("",!0),t.createElementVNode("div",{ref_key:"ganttChart",ref:b,class:t.normalizeClass(["g-gantt-chart",{"with-column":n.labelColumnTitle}]),style:t.normalizeStyle({width:t.unref(d),background:a.value.background,fontFamily:t.unref(s)})},[n.grid?(t.openBlock(),t.createBlock(bt,{key:0,"highlighted-units":n.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),n.currentTime?(t.openBlock(),t.createBlock(Xt,{key:1},{"current-time-label":t.withCtx(()=>[t.renderSlot(n.$slots,"current-time-label")]),_:3})):t.createCommentVNode("",!0),t.createElementVNode("div",ge,[me,he,pe,ye,l.value?(t.openBlock(),t.createElementBlock("div",we,"Q1")):t.createCommentVNode("",!0)]),t.createElementVNode("div",{class:t.normalizeClass(["g-gantt-rows-container",c.verticalGrid?"g-gantt-chart-vertical-grid":""])},[t.renderSlot(n.$slots,"default"),t.createVNode(bt,{"highlighted-units":n.highlightedUnits},null,8,["highlighted-units"])],2),n.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(Pt,{key:2},{"upper-timeunit":t.withCtx(({label:u,value:E,date:v})=>[t.renderSlot(n.$slots,"upper-timeunit",{label:u,value:E,date:v})]),timeunit:t.withCtx(({label:u,value:E,date:v})=>[t.renderSlot(n.$slots,"timeunit",{label:u,value:E,date:v})]),_:3}))],6)],2),t.createVNode(Qt,{"model-value":m.value||k.value,bar:C.value},{default:t.withCtx(()=>[t.renderSlot(n.$slots,"bar-tooltip",{bar:C.value})]),_:3},8,["model-value","bar"])],2))}}),ze="";function Tt(e,f=()=>null,c=()=>null,o=L()){const{barStart:p,barEnd:l,pushOnOverlap:d}=o,s=t.ref(!1);let i=0,r;const{mapPositionToTime:a}=U(o),{toDayjs:g}=A(o),m=b=>{const B=document.getElementById(e.ganttBarConfig.id);if(!B)return;switch(i=b.clientX-(B.getBoundingClientRect().left||0),b.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",r=y;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",r=w;break;default:r=C}s.value=!0,window.addEventListener("mousemove",r),window.addEventListener("mouseup",_)},k=()=>{var n;const b=document.getElementById(e.ganttBarConfig.id),B=(n=b==null?void 0:b.closest(".g-gantt-row-bars-container"))==null?void 0:n.getBoundingClientRect();return{barElement:b,barContainer:B}},C=b=>{const{barElement:B,barContainer:n}=k();if(!B||!n)return;const h=B.getBoundingClientRect().width,u=b.clientX-n.left-i,E=u+h;x(u,E)||(e[p.value]=a(u),e[l.value]=a(E),f(b,e))},y=b=>{const{barElement:B,barContainer:n}=k();if(!B||!n)return;const h=b.clientX-n.left,u=a(h);g(u).isSameOrAfter(g(e,"end"))||(e[p.value]=u,f(b,e))},w=b=>{const{barElement:B,barContainer:n}=k();if(!B||!n)return;const h=b.clientX-n.left,u=a(h);g(u).isSameOrBefore(g(e,"start"))||(e[l.value]=u,f(b,e))},x=(b,B)=>{if(!d.value)return!1;const n=e.ganttBarConfig.dragLimitLeft,h=e.ganttBarConfig.dragLimitRight;return b&&n!=null&&b<n||B&&h!=null&&B>h},_=b=>{s.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",_),c(b,e)};return{isDragging:s,initDrag:m}}function Ot(){const e=t.inject(ht);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function be(){const e=L(),f=Q(),c=Ot(),{pushOnOverlap:o,barStart:p,barEnd:l,noOverlap:d,dateFormat:s}=e,i=new Map,{toDayjs:r,format:a}=A(),g=(n,h)=>{const{initDrag:u}=Tt(n,k,_,e);c({...h,type:"dragstart"},n),u(h),b(n)},m=(n,h)=>{const u=n.ganttBarConfig.bundle;u!=null&&(f().forEach(E=>{E.bars.forEach(v=>{if(v.ganttBarConfig.bundle===u){const T=v===n?_:()=>null,{initDrag:D}=Tt(v,k,T,e);D(h),b(v)}})}),c({...h,type:"dragstart"},n))},k=(n,h)=>{c({...n,type:"drag"},h),C(h)},C=n=>{if(!(o!=null&&o.value))return;let h=n,{overlapBar:u,overlapType:E}=y(h);for(;u;){b(u);const v=r(h[p.value]),T=r(h[l.value]),D=r(u[p.value]),O=r(u[l.value]);let S;switch(E){case"left":S=O.diff(v,"minutes",!0),u[l.value]=a(h[p.value],s.value),u[p.value]=a(D.subtract(S,"minutes"),s.value);break;case"right":S=T.diff(D,"minutes",!0),u[p.value]=a(T,s.value),u[l.value]=a(O.add(S,"minutes"),s.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}u&&(E==="left"||E==="right")&&w(u,S,E),h=u,{overlapBar:u,overlapType:E}=y(u)}},y=n=>{var Y,I;let h,u,E;const v=(I=(Y=f().find(R=>R.bars.includes(n)))==null?void 0:Y.bars)!=null?I:[],T=r(n[p.value]),D=r(n[l.value]);return{overlapBar:v.find(R=>{if(R===n)return!1;const z=r(R[p.value]),G=r(R[l.value]);return h=T.isBetween(z,G),u=D.isBetween(z,G),E=z.isBetween(T,D)||G.isBetween(T,D),h||u||E}),overlapType:h?"left":u?"right":E?"between":null}},w=(n,h,u)=>{b(n),n.ganttBarConfig.bundle&&f().forEach(E=>{E.bars.forEach(v=>{v.ganttBarConfig.bundle===n.ganttBarConfig.bundle&&v!==n&&(b(v),x(v,h,u))})})},x=(n,h,u)=>{switch(u){case"left":n[p.value]=a(r(n,"start").subtract(h,"minutes"),s.value),n[l.value]=a(r(n,"end").subtract(h,"minutes"),s.value);break;case"right":n[p.value]=a(r(n,"start").add(h,"minutes"),s.value),n[l.value]=a(r(n,"end").add(h,"minutes"),s.value)}C(n)},_=(n,h)=>{B();const u={...n,type:"dragend"};c(u,h,void 0,new Map(i)),i.clear()},b=n=>{if(!i.has(n)){const h=n[p.value],u=n[l.value];i.set(n,{oldStart:h,oldEnd:u})}},B=()=>{if(o.value||!d.value)return;let n=!1;i.forEach((h,u)=>{const{overlapBar:E}=y(u);E!=null&&(n=!0)}),n&&i.forEach(({oldStart:h,oldEnd:u},E)=>{E[p.value]=h,E[l.value]=u})};return{initDragOfBar:g,initDragOfBundle:m}}function xe(){const{pushOnOverlap:e}=L(),f=Q(),c=d=>{const s=[];return d!=null&&f().forEach(i=>{i.bars.forEach(r=>{r.ganttBarConfig.bundle===d&&s.push(r)})}),s},o=d=>{if(!e.value||d.ganttBarConfig.pushOnOverlap===!1)return;for(const i of["left","right"]){const r=i,{gapDistanceSoFar:a,bundleBarsAndGapDist:g}=p(d,0,r);let m=a;const k=g;if(!k)continue;for(let y=0;y<k.length;y++){const w=k[y].bar,x=k[y].gapDistance;c(w.ganttBarConfig.bundle).filter(b=>b!==w).forEach(b=>{const B=p(b,x,r),n=B.gapDistanceSoFar,h=B.bundleBarsAndGapDist;n!=null&&(!m||n<m)&&(m=n),h.forEach(u=>{k.find(E=>E.bar===u.bar)||k.push(u)})})}const C=document.getElementById(d.ganttBarConfig.id);m!=null&&r==="left"?d.ganttBarConfig.dragLimitLeft=C.offsetLeft-m:m!=null&&r==="right"&&(d.ganttBarConfig.dragLimitRight=C.offsetLeft+C.offsetWidth+m)}c(d.ganttBarConfig.bundle).forEach(i=>{i.ganttBarConfig.dragLimitLeft=d.ganttBarConfig.dragLimitLeft,i.ganttBarConfig.dragLimitRight=d.ganttBarConfig.dragLimitRight})},p=(d,s=0,i)=>{const r=d.ganttBarConfig.bundle?[{bar:d,gapDistance:s}]:[];let a=d,g=l(a,i);if(i==="left")for(;g;){const m=document.getElementById(a.ganttBarConfig.id),k=document.getElementById(g.ganttBarConfig.id),C=k.offsetLeft+k.offsetWidth;if(s+=m.offsetLeft-C,g.ganttBarConfig.immobile)return{gapDistanceSoFar:s,bundleBarsAndGapDist:r};g.ganttBarConfig.bundle&&r.push({bar:g,gapDistance:s}),a=g,g=l(g,"left")}if(i==="right")for(;g;){const m=document.getElementById(a.ganttBarConfig.id),k=document.getElementById(g.ganttBarConfig.id),C=m.offsetLeft+m.offsetWidth;if(s+=k.offsetLeft-C,g.ganttBarConfig.immobile)return{gapDistanceSoFar:s,bundleBarsAndGapDist:r};g.ganttBarConfig.bundle&&r.push({bar:g,gapDistance:s}),a=g,g=l(g,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:r}},l=(d,s)=>{var g,m;const i=document.getElementById(d.ganttBarConfig.id),r=(m=(g=f().find(k=>k.bars.includes(d)))==null?void 0:g.bars)!=null?m:[];let a=[];return s==="left"?a=r.filter(k=>{const C=document.getElementById(k.ganttBarConfig.id);return C&&C.offsetLeft<i.offsetLeft&&k.ganttBarConfig.pushOnOverlap!==!1}):a=r.filter(k=>{const C=document.getElementById(k.ganttBarConfig.id);return C&&C.offsetLeft>i.offsetLeft&&k.ganttBarConfig.pushOnOverlap!==!1}),a.length>0?a.reduce((k,C)=>{const y=document.getElementById(k.ganttBarConfig.id),w=document.getElementById(C.ganttBarConfig.id),x=Math.abs(y.offsetLeft-i.offsetLeft),_=Math.abs(w.offsetLeft-i.offsetLeft);return x<_?k:C},a[0]):null};return{setDragLimitsOfGanttBar:o}}const Be=["id"],ke={class:"g-gantt-bar-label"},_e=["innerHTML"],Ee=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),Ce=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),ve=8,De=t.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){var h;const f=e;t.useCssVars(u=>({"22f5b0ec":t.unref(d)}));const c=Ot(),o=L(),{rowHeight:p}=o,{bar:l}=t.toRefs(f),d=(h=f.bar.ganttBarConfig.style)==null?void 0:h.backgroundColor,{mapTimeToPosition:s,mapPositionToTime:i}=U();be(),xe();const r=t.ref(!1),a=t.computed(()=>l.value.ganttBarConfig),g=t.inject(pt),m=u=>{var T;u.preventDefault();const E=(T=g==null?void 0:g.value)==null?void 0:T.getBoundingClientRect();if(!E)return;const v=i(u.clientX-E.left);c(u,l.value,v)},{barStart:k,barEnd:C,width:y,chartStart:w,chartEnd:x,chartSize:_}=o,b=t.ref(0),B=t.ref(0),n=t.computed(()=>{const u=new Date(l.value.myBeginDate).getTime(),E=new Date(l.value.myEndDate).getTime();return Math.abs(u-E)/(1e3*60*60*24)<=2?0:B.value-b.value-ve});return t.onMounted(()=>{t.watch([l,y,w,x,_.width],()=>{b.value=s(l.value[k.value]),B.value=s(l.value[C.value])},{deep:!0,immediate:!0})}),(u,E)=>{var v;return t.openBlock(),t.createElementBlock("div",{id:a.value.id,class:t.normalizeClass(["g-gantt-bar",a.value.asArrow?"g-gantt-bar-is-arrow":"",a.value.class||""]),style:t.normalizeStyle({...a.value.style,position:"absolute",top:`${t.unref(p)*.1}px`,left:`${b.value}px`,width:`${n.value}px`,height:`${t.unref(p)*.8}px`,zIndex:r.value?3:2}),onMousedown:m,onClick:m,onDblclick:m,onMouseenter:m,onMouseleave:m,onContextmenu:m},[t.createElementVNode("div",ke,[t.renderSlot(u.$slots,"default",{bar:t.unref(l)},()=>[t.createElementVNode("div",null,t.toDisplayString(a.value.label||""),1),a.value.html?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:a.value.html},null,8,_e)):t.createCommentVNode("",!0)])]),a.value.asArrow?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-bar-arrow",style:t.normalizeStyle({borderLeft:`8px solid #${(v=t.unref(l).ganttBarConfig.style)==null?void 0:v.backgroundColor}`})},null,4)):t.createCommentVNode("",!0),a.value.hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[Ee,Ce],64)):t.createCommentVNode("",!0)],46,Be)}}}),Ve="",St=t.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},overlaps:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:f}){const c=e,o=t.ref([]),{rowHeight:p,colors:l,labelColumnTitle:d}=L(),{highlightOnHover:s}=t.toRefs(c),i=t.ref(!1),r=t.computed(()=>({height:`${p.value}px`,background:(s==null?void 0:s.value)&&i.value?l.value.hoverHighlight:null})),{mapPositionToTime:a}=U(),g=t.ref(null);t.provide(pt,g);const m=x=>{var n;const _=(n=g.value)==null?void 0:n.getBoundingClientRect();if(!_){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const b=x.clientX-_.left,B=a(b);f("drop",{e:x,datetime:B})};function k(x,_,b,B){return x<=B&&b<=_}function C(x){const _=[];return x.forEach(b=>{x.forEach(B=>{b.myBeginDate===B.myBeginDate&&b.myEndDate===B.myEndDate||k(b.myBeginDate,b.myEndDate,B.myBeginDate,B.myEndDate)&&_.push($.default(b.myEndDate).isAfter(B.myEndDate)?b:B)})}),_}const y=()=>{const x=[],_=b=>{const B=C(b);x.push(B),B.length&&_(B)};return _(c.bars),console.log(x," barsList"),x};t.onMounted(()=>{o.value=y(),console.log(o.value,"  barstornder")});const w=x=>!x||/^\s*$/.test(x);return(x,_)=>(t.openBlock(),t.createElementBlock("div",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(o.value,b=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(r.value),onDragover:_[0]||(_[0]=t.withModifiers(B=>i.value=!0,["prevent"])),onDragleave:_[1]||(_[1]=B=>i.value=!1),onDrop:_[2]||(_[2]=B=>m(B)),onMouseover:_[3]||(_[3]=B=>i.value=!0),onMouseleave:_[4]||(_[4]=B=>i.value=!1)},[!w(x.label)&&!t.unref(d)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(l).primary,color:t.unref(l).text})},[t.renderSlot(x.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(x.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_for:!0,ref_key:"barContainer",ref:g,class:"g-gantt-row-bars-container"},x.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition sys",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(b,B=>(t.openBlock(),t.createBlock(De,{key:B.ganttBarConfig.id,bar:B},{default:t.withCtx(()=>[t.renderSlot(x.$slots,"bar-label",{bar:B})]),_:2},1032,["bar"]))),128))]),_:2},1024)],16)],36))),256))]))}}),He="";function Mt(){$.default.extend(Gt),$.default.extend(Nt),$.default.extend(ct),$.default.extend(zt),$.default.extend(It),$.default.extend(Yt),$.default.extend(Rt)}const $t={install(e,f){Mt(),e.component("GGanttChart",Dt),e.component("GGanttRow",St)}};M.GGanttChart=Dt,M.GGanttRow=St,M.default=$t,M.extendDayjs=Mt,M.ganttastic=$t,Object.defineProperties(M,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(M,V="top"){if(!M||typeof document>"u")return;const t=document.head,F=document.createElement("style");V==="top"&&t.firstChild?t.insertBefore(F,t.firstChild):t.appendChild(F),F.appendChild(document.createTextNode(M))}injectStyle(`
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
`,"top");
