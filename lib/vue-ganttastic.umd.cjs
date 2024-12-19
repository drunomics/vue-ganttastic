(function($,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],R):($=typeof globalThis<"u"?globalThis:$||self,R($.VueGanttastic={},$.dayjs,$.Vue))})(this,function($,R,t){"use strict";const L=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(R);var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,g){(function(c,a){e.exports=a()})(H,function(){var c="day";return function(a,p,i){var f=function(n){return n.add(4-n.isoWeekday(),c)},o=p.prototype;o.isoWeekYear=function(){return f(this).year()},o.isoWeek=function(n){if(!this.$utils().u(n))return this.add(7*(n-this.isoWeek()),c);var l,m,y,d,b=f(this),u=(l=this.isoWeekYear(),m=this.$u,y=(m?i.utc:i)().year(l).startOf("year"),d=4-y.isoWeekday(),y.isoWeekday()>4&&(d+=7),y.add(d,c));return b.diff(u,"week")+1},o.isoWeekday=function(n){return this.$utils().u(n)?this.day()||7:this.day(this.day()%7?n:n-7)};var s=o.startOf;o.startOf=function(n,l){var m=this.$utils(),y=!!m.u(l)||l;return m.p(n)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(n,l)}}})})(at);const Yt=at.exports;var it={exports:{}};(function(e,g){(function(c,a){e.exports=a()})(H,function(){return function(c,a){a.prototype.isSameOrBefore=function(p,i){return this.isSame(p,i)||this.isBefore(p,i)}}})})(it);const Gt=it.exports;var st={exports:{}};(function(e,g){(function(c,a){e.exports=a()})(H,function(){return function(c,a){a.prototype.isSameOrAfter=function(p,i){return this.isSame(p,i)||this.isAfter(p,i)}}})})(st);const Vt=st.exports;var lt={exports:{}};(function(e,g){(function(c,a){e.exports=a()})(H,function(){return function(c,a,p){a.prototype.isBetween=function(i,f,o,s){var n=p(i),l=p(f),m=(s=s||"()")[0]==="(",y=s[1]===")";return(m?this.isAfter(n,o):!this.isBefore(n,o))&&(y?this.isBefore(l,o):!this.isAfter(l,o))||(m?this.isBefore(n,o):!this.isAfter(n,o))&&(y?this.isAfter(l,o):!this.isBefore(l,o))}}})})(lt);const ct=lt.exports;var dt={exports:{}};(function(e,g){(function(c,a){e.exports=a()})(H,function(){var c="week",a="year";return function(p,i,f){var o=i.prototype;o.week=function(s){if(s===void 0&&(s=null),s!==null)return this.add(7*(s-this.week()),"day");var n=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var l=f(this).startOf(a).add(1,a).date(n),m=f(this).endOf(c);if(l.isBefore(m))return 1}var y=f(this).startOf(a).date(n).startOf(c).subtract(1,"millisecond"),d=this.diff(y,c,!0);return d<0?f(this).startOf("week").week():Math.ceil(d)},o.weeks=function(s){return s===void 0&&(s=null),this.week(s)}}})})(dt);const zt=dt.exports;var ft={exports:{}};(function(e,g){(function(c,a){e.exports=a()})(H,function(){return function(c,a,p){var i=a.prototype,f=i.format;p.en.ordinal=function(o){var s=["th","st","nd","rd"],n=o%100;return"["+o+(s[(n-20)%10]||s[n]||s[0])+"]"},i.format=function(o){var s=this,n=this.$locale();if(!this.isValid())return f.bind(this)(o);var l=this.$utils(),m=(o||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(y){switch(y){case"Q":return Math.ceil((s.$M+1)/3);case"Do":return n.ordinal(s.$D);case"gggg":return s.weekYear();case"GGGG":return s.isoWeekYear();case"wo":return n.ordinal(s.week(),"W");case"w":case"ww":return l.s(s.week(),y==="w"?1:2,"0");case"W":case"WW":return l.s(s.isoWeek(),y==="W"?1:2,"0");case"k":case"kk":return l.s(String(s.$H===0?24:s.$H),y==="k"?1:2,"0");case"X":return Math.floor(s.$d.getTime()/1e3);case"x":return s.$d.getTime();case"z":return"["+s.offsetName()+"]";case"zzz":return"["+s.offsetName("long")+"]";default:return y}});return f.bind(this)(m)}}})})(ft);const It=ft.exports;var ut={exports:{}};(function(e,g){(function(c,a){e.exports=a()})(H,function(){var c={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,p=/\d\d/,i=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,o={},s=function(u){return(u=+u)+(u>68?1900:2e3)},n=function(u){return function(k){this[u]=+k}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(u){(this.zone||(this.zone={})).offset=function(k){if(!k||k==="Z")return 0;var x=k.match(/([+-]|\d\d)/g),E=60*x[1]+(+x[2]||0);return E===0?0:x[0]==="+"?-E:E}(u)}],m=function(u){var k=o[u];return k&&(k.indexOf?k:k.s.concat(k.f))},y=function(u,k){var x,E=o.meridiem;if(E){for(var B=1;B<=24;B+=1)if(u.indexOf(E(B,0,k))>-1){x=B>12;break}}else x=u===(k?"pm":"PM");return x},d={A:[f,function(u){this.afternoon=y(u,!1)}],a:[f,function(u){this.afternoon=y(u,!0)}],S:[/\d/,function(u){this.milliseconds=100*+u}],SS:[p,function(u){this.milliseconds=10*+u}],SSS:[/\d{3}/,function(u){this.milliseconds=+u}],s:[i,n("seconds")],ss:[i,n("seconds")],m:[i,n("minutes")],mm:[i,n("minutes")],H:[i,n("hours")],h:[i,n("hours")],HH:[i,n("hours")],hh:[i,n("hours")],D:[i,n("day")],DD:[p,n("day")],Do:[f,function(u){var k=o.ordinal,x=u.match(/\d+/);if(this.day=x[0],k)for(var E=1;E<=31;E+=1)k(E).replace(/\[|\]/g,"")===u&&(this.day=E)}],M:[i,n("month")],MM:[p,n("month")],MMM:[f,function(u){var k=m("months"),x=(m("monthsShort")||k.map(function(E){return E.slice(0,3)})).indexOf(u)+1;if(x<1)throw new Error;this.month=x%12||x}],MMMM:[f,function(u){var k=m("months").indexOf(u)+1;if(k<1)throw new Error;this.month=k%12||k}],Y:[/[+-]?\d+/,n("year")],YY:[p,function(u){this.year=s(u)}],YYYY:[/\d{4}/,n("year")],Z:l,ZZ:l};function b(u){var k,x;k=u,x=o&&o.formats;for(var E=(u=k.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,T,S){var D=S&&S.toUpperCase();return T||x[S]||c[S]||x[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,M,N){return M||N.slice(1)})})).match(a),B=E.length,_=0;_<B;_+=1){var r=E[_],w=d[r],h=w&&w[0],C=w&&w[1];E[_]=C?{regex:h,parser:C}:r.replace(/^\[|\]$/g,"")}return function(v){for(var T={},S=0,D=0;S<B;S+=1){var O=E[S];if(typeof O=="string")D+=O.length;else{var M=O.regex,N=O.parser,z=v.slice(D),I=M.exec(z)[0];N.call(T,I),v=v.replace(I,"")}}return function(G){var V=G.afternoon;if(V!==void 0){var j=G.hours;V?j<12&&(G.hours+=12):j===12&&(G.hours=0),delete G.afternoon}}(T),T}}return function(u,k,x){x.p.customParseFormat=!0,u&&u.parseTwoDigitYear&&(s=u.parseTwoDigitYear);var E=k.prototype,B=E.parse;E.parse=function(_){var r=_.date,w=_.utc,h=_.args;this.$u=w;var C=h[1];if(typeof C=="string"){var v=h[2]===!0,T=h[3]===!0,S=v||T,D=h[2];T&&(D=h[2]),o=this.$locale(),!v&&D&&(o=x.Ls[D]),this.$d=function(z,I,G){try{if(["x","X"].indexOf(I)>-1)return new Date((I==="X"?1e3:1)*z);var V=b(I)(z),j=V.year,U=V.month,Se=V.day,Te=V.hours,Oe=V.minutes,Me=V.seconds,$e=V.milliseconds,Nt=V.zone,Z=new Date,J=Se||(j||U?1:Z.getDate()),tt=j||Z.getFullYear(),q=0;j&&!U||(q=U>0?U-1:Z.getMonth());var et=Te||0,nt=Oe||0,rt=Me||0,ot=$e||0;return Nt?new Date(Date.UTC(tt,q,J,et,nt,rt,ot+60*Nt.offset*1e3)):G?new Date(Date.UTC(tt,q,J,et,nt,rt,ot)):new Date(tt,q,J,et,nt,rt,ot)}catch{return new Date("")}}(r,C,w),this.init(),D&&D!==!0&&(this.$L=this.locale(D).$L),S&&r!=this.format(C)&&(this.$d=new Date("")),o={}}else if(C instanceof Array)for(var O=C.length,M=1;M<=O;M+=1){h[1]=C[M-1];var N=x.apply(this,h);if(N.isValid()){this.$d=N.$d,this.$L=N.$L,this.init();break}M===O&&(this.$d=new Date(""))}else B.call(this,_)}}})})(ut);const Rt=ut.exports,gt=Symbol("CHART_ROWS_KEY"),mt=Symbol("CONFIG_KEY"),pt=Symbol("EMIT_BAR_EVENT_KEY"),ht=Symbol("BAR_CONTAINER_KEY");function Y(){const e=t.inject(mt);if(!e)throw Error("Failed to inject config!");return e}const yt="YYYY-MM-DD HH:mm";function A(e=Y()){const{chartStart:g,chartEnd:c,barStart:a,barEnd:p,dateFormat:i}=e,f=t.computed(()=>s(g.value)),o=t.computed(()=>s(c.value)),s=(l,m)=>{let y;if(m!==void 0&&typeof l!="string"&&!(l instanceof Date)&&(y=m==="start"?l[a.value]:l[p.value]),typeof l=="string")y=l;else if(l instanceof Date)return L.default(l);const d=i.value||yt;return L.default(y,d,!0)};return{chartStartDayjs:f,chartEndDayjs:o,toDayjs:s,format:(l,m)=>m===!1?l instanceof Date?l:L.default(l).toDate():(typeof l=="string"||l instanceof Date?s(l):l).format(m)}}function wt(){const{precision:e}=Y(),{chartStartDayjs:g,chartEndDayjs:c}=A(),a=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),p=t.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),i={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"W",month:"MMM",year:"YYYY"},f=t.computed(()=>{const o=[],s=[],n=c.value.diff(g.value,"minutes",!0),l=a.value,m=p.value;let y=g.value,d=g.value;for(;d.isSameOrBefore(c.value);){const b=d.endOf(m),k=b.isAfter(c.value)?c.value.diff(d,"minutes",!0)/n*100:b.diff(d,"minutes",!0)/n*100;s.push({label:d.format(i[e==null?void 0:e.value]),value:String(d),date:d.toDate(),width:String(k)+"%"}),d=b.add(1,m==="isoWeek"?"week":m).startOf(m)}for(;y.isSameOrBefore(c.value);){const b=y.endOf(l),k=b.isAfter(c.value)?c.value.diff(y,"minutes",!0)/n*100:b.diff(y,"minutes",!0)/n*100;o.push({label:y.format(i[l]),value:String(y),date:y.toDate(),width:String(k)+"%"}),y=b.add(1,l).startOf(l)}return{upperUnits:o,lowerUnits:s}});return f.value.lowerUnits[0].label==="53"&&f.value.lowerUnits.splice(0,1),f.value.lowerUnits[f.value.lowerUnits.length-1].label==="14"&&f.value.lowerUnits.splice(f.value.lowerUnits.length-1,1),{timeaxisUnits:f}}const Ht={class:"g-grid-container"},bt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{}},setup(e){const{colors:g}=Y(),{timeaxisUnits:c}=wt(),a=i=>{const f=+i>=14&&+i<=26,o=+i>=40&&+i<=52;return f||o?"#f7f8f9":"#ffffff"},p=(i,f)=>f===c.value.lowerUnits.length-1?"unset":i&&Number(i)%13===0?"2px solid #a8adb3":"2px solid #f0f1f2";return(i,f)=>(t.openBlock(),t.createElementBlock("div",Ht,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c).lowerUnits,({label:o,value:s,width:n},l)=>{var m;return t.openBlock(),t.createElementBlock("div",{key:o,class:"g-grid-line",style:t.normalizeStyle({width:n,borderRight:p(o,l),background:(m=i.highlightedUnits)!=null&&m.includes(Number(s))?t.unref(g).hoverHighlight:void 0,backgroundColor:a(o)})},null,4)}),128))]))}}),Le="";function Q(){const e=t.inject(gt);if(!e)throw Error("Failed to inject getChartRows!");return e}const jt={class:"g-label-column-rows"},At=t.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:g,colors:c,labelColumnTitle:a,rowHeight:p}=Y(),i=Q();return(f,o)=>(t.openBlock(),t.createElementBlock("div",{class:"g-label-column",style:t.normalizeStyle({fontFamily:t.unref(g),color:t.unref(c).text})},[t.renderSlot(f.$slots,"label-column-title",{},()=>[t.createElementVNode("div",{class:"g-label-column-header",style:t.normalizeStyle({background:t.unref(c).primary})},t.toDisplayString(t.unref(a)),5)]),t.createElementVNode("div",jt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(i)(),({label:s},n)=>(t.openBlock(),t.createElementBlock("div",{key:`${s}_${n}`,class:"g-label-column-row",style:t.normalizeStyle({background:n%2===0?t.unref(c).ternary:t.unref(c).quartenary,height:`${t.unref(p)}px`})},[t.renderSlot(f.$slots,"label-column-row",{label:s},()=>[t.createElementVNode("span",null,t.toDisplayString(s),1)])],4))),128))])],4))}}),Ne="",Wt={class:"g-timeaxis"},Ft={class:"g-timeunits-container g-timeunits-low"},Pt={key:0,class:"g-timeunit-low-kw"},Ut={class:"g-timeunits-container g-timeunits-upper"},qt=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:g,colors:c}=Y(),{timeaxisUnits:a}=wt();return(p,i)=>(t.openBlock(),t.createElementBlock("div",Wt,[t.createElementVNode("div",Ft,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(a).lowerUnits,({label:f,value:o,date:s,width:n},l)=>(t.openBlock(),t.createElementBlock("div",{key:f,class:"g-timeunit g-timeunit-low",style:t.normalizeStyle({flexDirection:t.unref(g)==="hour"?"column":"row",alignItems:t.unref(g)==="hour"?"":"center",width:n})},[l===0?(t.openBlock(),t.createElementBlock("span",Pt,"KW")):t.createCommentVNode("",!0),t.renderSlot(p.$slots,"timeunit",{label:f,value:o,date:s},()=>[t.createTextVNode(t.toDisplayString(f),1)]),t.unref(g)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:1,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(c).text})},null,4)):t.createCommentVNode("",!0)],4))),128))]),t.createElementVNode("div",Ut,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(a).upperUnits,({label:f,value:o,date:s,width:n},l)=>(t.openBlock(),t.createElementBlock("div",{key:f,class:"g-upper-timeunit",style:t.normalizeStyle({width:n})},[t.renderSlot(p.$slots,"upper-timeunit",{label:f,value:o,date:s},()=>[t.createTextVNode(t.toDisplayString(f),1)])],4))),128))])]))}}),Ye="",Qt="cadetblue",Xt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(e){const g=e,c={hour:"HH:mm",day:"DD. MMM HH:mm",date:"DD. MMMM YYYY",month:"DD. MMMM YYYY",week:"DD. MMMM YYYY (WW)"},{bar:a}=t.toRefs(g),{precision:p,font:i,barStart:f,barEnd:o,rowHeight:s}=Y(),n=t.ref("0px"),l=t.ref("0px");t.watch(()=>g.bar,async()=>{var r;await t.nextTick();const k=((r=a==null?void 0:a.value)==null?void 0:r.ganttBarConfig.id)||"";if(!k)return;const x=document.getElementById(k),{top:E,left:B}=(x==null?void 0:x.getBoundingClientRect())||{top:0,left:0},_=Math.max(B,10);n.value=`${E+s.value-10}px`,l.value=`${_}px`},{deep:!0,immediate:!0});const m=t.computed(()=>{var k,x;return((x=(k=a==null?void 0:a.value)==null?void 0:k.ganttBarConfig.style)==null?void 0:x.background)||Qt}),{toDayjs:y}=A(),d=t.computed(()=>{var k;return(k=a.value)==null?void 0:k[f.value]}),b=t.computed(()=>{var k;return(k=a.value)==null?void 0:k[o.value]}),u=t.computed(()=>{if(!(a!=null&&a.value))return"";const k=c[p.value],x=y(d.value).format(k),E=y(b.value).format(k);return`${x} \u2013 ${E}`});return(k,x)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[k.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:l.value,fontFamily:t.unref(i)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:m.value})},null,4),t.renderSlot(k.$slots,"default",{bar:t.unref(a),barStart:d.value,barEnd:b.value},()=>[t.createTextVNode(t.toDisplayString(u.value),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Ge="";function P(e=Y()){const{dateFormat:g,chartSize:c}=e,{chartStartDayjs:a,chartEndDayjs:p,toDayjs:i,format:f}=A(e),o=t.computed(()=>p.value.diff(a.value,"minutes"));return{mapTimeToPosition:l=>{const m=c.width.value||0,y=i(l).diff(a.value,"minutes",!0);return Math.ceil(y/o.value*m)},mapPositionToTime:l=>{const m=c.width.value||0,y=l/m*o.value;return f(a.value.add(y,"minutes"),g.value)}}}const Kt=t.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:g}=P(),c=t.ref(L.default()),{colors:a,dateFormat:p,currentTimeLabel:i}=Y(),f=t.computed(()=>{const o=p.value||"YYYY-MM-DD HH:mm";return g(L.default(c.value,o).format(o))});return(o,s)=>(t.openBlock(),t.createElementBlock("div",{class:"g-grid-current-time",style:t.normalizeStyle({left:`${f.value}px`})},[t.createElementVNode("div",{class:"g-grid-current-time-marker",style:t.normalizeStyle({border:`1px dashed ${t.unref(a).markerCurrentTime}`})},null,4),t.createElementVNode("span",{class:"g-grid-current-time-text",style:t.normalizeStyle({color:t.unref(a).markerCurrentTime})},[t.renderSlot(o.$slots,"current-time-label",{},()=>[t.createTextVNode(t.toDisplayString(t.unref(i)),1)])],4)],4))}}),Ve="";var kt;const W=typeof window<"u";W&&((kt=window==null?void 0:window.navigator)==null?void 0:kt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Zt(e){return typeof e=="function"?e():t.unref(e)}function Jt(e){return e}function te(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function ee(e,g=!0){t.getCurrentInstance()?t.onMounted(e):g?e():t.nextTick(e)}function xt(e){var g;const c=Zt(e);return(g=c==null?void 0:c.$el)!=null?g:c}const ne=W?window:void 0;W&&window.document,W&&window.navigator,W&&window.location;function re(e,g=!1){const c=t.ref(),a=()=>c.value=Boolean(e());return a(),ee(a,g),c}const X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__";X[K]=X[K]||{},X[K];var Bt=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,ie=(e,g)=>{var c={};for(var a in e)oe.call(e,a)&&g.indexOf(a)<0&&(c[a]=e[a]);if(e!=null&&Bt)for(var a of Bt(e))g.indexOf(a)<0&&ae.call(e,a)&&(c[a]=e[a]);return c};function se(e,g,c={}){const a=c,{window:p=ne}=a,i=ie(a,["window"]);let f;const o=re(()=>p&&"ResizeObserver"in p),s=()=>{f&&(f.disconnect(),f=void 0)},n=t.watch(()=>xt(e),m=>{s(),o.value&&p&&m&&(f=new ResizeObserver(g),f.observe(m,i))},{immediate:!0,flush:"post"}),l=()=>{s(),n()};return te(l),{isSupported:o,stop:l}}function le(e,g={width:0,height:0},c={}){const a=t.ref(g.width),p=t.ref(g.height);return se(e,([i])=>{a.value=i.contentRect.width,p.value=i.contentRect.height},c),t.watch(()=>xt(e),i=>{a.value=i?g.width:0,p.value=i?g.height:0}),{width:a,height:p}}var Ct;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ct||(Ct={}));var ce=Object.defineProperty,Et=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,_t=(e,g,c)=>g in e?ce(e,g,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[g]=c,ue=(e,g)=>{for(var c in g||(g={}))de.call(g,c)&&_t(e,c,g[c]);if(Et)for(var c of Et(g))fe.call(g,c)&&_t(e,c,g[c]);return e};ue({linear:Jt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const vt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},ge=t.createElementVNode("div",{class:"g-gantt-chart-overview"},null,-1),me={class:"g-gantt-chart-quarters"},pe=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q1",-1),he=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q2",-1),ye=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q3",-1),we=t.createElementVNode("div",{class:"g-gantt-chart-quarter"},"Q4",-1),be={key:0,class:"g-gantt-chart-quarter"},Dt=t.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:yt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"},verticalGrid:{type:Boolean}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:g}){const c=e;L.default.extend(ct);const a=new Date,p=new Date;a.setDate(15),a.setMonth(10),p.setDate(31),p.setMonth(11);const i=t.ref(L.default(new Date).isBetween(a,p)),{width:f,font:o,colorScheme:s}=t.toRefs(c),n=t.useSlots(),l=t.computed(()=>typeof s.value!="string"?s.value:vt[s.value]||vt.default),m=()=>{var h;const r=(h=n.default)==null?void 0:h.call(n),w=[];return r&&r.forEach(C=>{var v;if((v=C.props)!=null&&v.bars){const{label:T,bars:S}=C.props;w.push({label:T,bars:S})}else Array.isArray(C.children)&&C.children.forEach(T=>{var D;const S=T;if((D=S==null?void 0:S.props)!=null&&D.bars){const{label:O,bars:M}=S.props;w.push({label:O,bars:M})}})}),w},y=t.ref(!1),d=t.ref(!1),b=t.ref(void 0);let u;const k=r=>{u&&clearTimeout(u),u=setTimeout(()=>{y.value=!0},800),b.value=r},x=()=>{clearTimeout(u),y.value=!1},E=(r,w,h,C)=>{switch(r.type){case"click":g("click-bar",{bar:w,e:r,datetime:h});break;case"mousedown":g("mousedown-bar",{bar:w,e:r,datetime:h});break;case"mouseup":g("mouseup-bar",{bar:w,e:r,datetime:h});break;case"dblclick":g("dblclick-bar",{bar:w,e:r,datetime:h});break;case"mouseenter":k(w),g("mouseenter-bar",{bar:w,e:r});break;case"mouseleave":x(),g("mouseleave-bar",{bar:w,e:r});break;case"dragstart":d.value=!0,g("dragstart-bar",{bar:w,e:r});break;case"drag":g("drag-bar",{bar:w,e:r});break;case"dragend":d.value=!1,g("dragend-bar",{bar:w,e:r,movedBars:C});break;case"contextmenu":g("contextmenu-bar",{bar:w,e:r,datetime:h});break}},B=t.ref(null),_=le(B);return document.getElementsByClassName("g-timeunit-low"),t.provide(gt,m),t.provide(mt,{...t.toRefs(c),colors:l,chartSize:_}),t.provide(pt,E),(r,w)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["g-gantt-chart-container",[i.value?"g-gantt-chart-container--5-quarters-width":"g-gantt-chart-container--4-quarters-width"]])},[ge,t.createElementVNode("div",{class:t.normalizeClass([{"labels-in-column":!!r.labelColumnTitle}])},[r.labelColumnTitle?(t.openBlock(),t.createBlock(At,{key:0,style:t.normalizeStyle({width:r.labelColumnWidth})},{"label-column-title":t.withCtx(()=>[t.renderSlot(r.$slots,"label-column-title")]),"label-column-row":t.withCtx(({label:h})=>[t.renderSlot(r.$slots,"label-column-row",{label:h})]),_:3},8,["style"])):t.createCommentVNode("",!0),t.createElementVNode("div",{ref_key:"ganttChart",ref:B,class:t.normalizeClass(["g-gantt-chart",{"with-column":r.labelColumnTitle}]),style:t.normalizeStyle({width:t.unref(f),background:l.value.background,fontFamily:t.unref(o)})},[r.grid?(t.openBlock(),t.createBlock(bt,{key:0,"highlighted-units":r.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),r.currentTime?(t.openBlock(),t.createBlock(Kt,{key:1},{"current-time-label":t.withCtx(()=>[t.renderSlot(r.$slots,"current-time-label")]),_:3})):t.createCommentVNode("",!0),t.createElementVNode("div",me,[pe,he,ye,we,i.value?(t.openBlock(),t.createElementBlock("div",be,"Q1")):t.createCommentVNode("",!0)]),t.createElementVNode("div",{class:t.normalizeClass(["g-gantt-rows-container",c.verticalGrid?"g-gantt-chart-vertical-grid":""])},[t.renderSlot(r.$slots,"default"),t.createVNode(bt,{"highlighted-units":r.highlightedUnits},null,8,["highlighted-units"])],2),r.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(qt,{key:2},{"upper-timeunit":t.withCtx(({label:h,value:C,date:v})=>[t.renderSlot(r.$slots,"upper-timeunit",{label:h,value:C,date:v})]),timeunit:t.withCtx(({label:h,value:C,date:v})=>[t.renderSlot(r.$slots,"timeunit",{label:h,value:C,date:v})]),_:3}))],6)],2),t.createVNode(Xt,{"model-value":y.value||d.value,bar:b.value},{default:t.withCtx(()=>[t.renderSlot(r.$slots,"bar-tooltip",{bar:b.value})]),_:3},8,["model-value","bar"])],2))}}),Ie="";function St(e,g=()=>null,c=()=>null,a=Y()){const{barStart:p,barEnd:i,pushOnOverlap:f}=a,o=t.ref(!1);let s=0,n;const{mapPositionToTime:l}=P(a),{toDayjs:m}=A(a),y=B=>{const _=document.getElementById(e.ganttBarConfig.id);if(!_)return;switch(s=B.clientX-(_.getBoundingClientRect().left||0),B.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",n=u;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",n=k;break;default:n=b}o.value=!0,window.addEventListener("mousemove",n),window.addEventListener("mouseup",E)},d=()=>{var r;const B=document.getElementById(e.ganttBarConfig.id),_=(r=B==null?void 0:B.closest(".g-gantt-row-bars-container"))==null?void 0:r.getBoundingClientRect();return{barElement:B,barContainer:_}},b=B=>{const{barElement:_,barContainer:r}=d();if(!_||!r)return;const w=_.getBoundingClientRect().width,h=B.clientX-r.left-s,C=h+w;x(h,C)||(e[p.value]=l(h),e[i.value]=l(C),g(B,e))},u=B=>{const{barElement:_,barContainer:r}=d();if(!_||!r)return;const w=B.clientX-r.left,h=l(w);m(h).isSameOrAfter(m(e,"end"))||(e[p.value]=h,g(B,e))},k=B=>{const{barElement:_,barContainer:r}=d();if(!_||!r)return;const w=B.clientX-r.left,h=l(w);m(h).isSameOrBefore(m(e,"start"))||(e[i.value]=h,g(B,e))},x=(B,_)=>{if(!f.value)return!1;const r=e.ganttBarConfig.dragLimitLeft,w=e.ganttBarConfig.dragLimitRight;return B&&r!=null&&B<r||_&&w!=null&&_>w},E=B=>{o.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",E),c(B,e)};return{isDragging:o,initDrag:y}}function Tt(){const e=t.inject(pt);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ke(){const e=Y(),g=Q(),c=Tt(),{pushOnOverlap:a,barStart:p,barEnd:i,noOverlap:f,dateFormat:o}=e,s=new Map,{toDayjs:n,format:l}=A(),m=(r,w)=>{const{initDrag:h}=St(r,d,E,e);c({...w,type:"dragstart"},r),h(w),B(r)},y=(r,w)=>{const h=r.ganttBarConfig.bundle;h!=null&&(g().forEach(C=>{C.bars.forEach(v=>{if(v.ganttBarConfig.bundle===h){const T=v===r?E:()=>null,{initDrag:S}=St(v,d,T,e);S(w),B(v)}})}),c({...w,type:"dragstart"},r))},d=(r,w)=>{c({...r,type:"drag"},w),b(w)},b=r=>{if(!(a!=null&&a.value))return;let w=r,{overlapBar:h,overlapType:C}=u(w);for(;h;){B(h);const v=n(w[p.value]),T=n(w[i.value]),S=n(h[p.value]),D=n(h[i.value]);let O;switch(C){case"left":O=D.diff(v,"minutes",!0),h[i.value]=l(w[p.value],o.value),h[p.value]=l(S.subtract(O,"minutes"),o.value);break;case"right":O=T.diff(S,"minutes",!0),h[p.value]=l(T,o.value),h[i.value]=l(D.add(O,"minutes"),o.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}h&&(C==="left"||C==="right")&&k(h,O,C),w=h,{overlapBar:h,overlapType:C}=u(h)}},u=r=>{var M,N;let w,h,C;const v=(N=(M=g().find(z=>z.bars.includes(r)))==null?void 0:M.bars)!=null?N:[],T=n(r[p.value]),S=n(r[i.value]);return{overlapBar:v.find(z=>{if(z===r)return!1;const I=n(z[p.value]),G=n(z[i.value]);return w=T.isBetween(I,G),h=S.isBetween(I,G),C=I.isBetween(T,S)||G.isBetween(T,S),w||h||C}),overlapType:w?"left":h?"right":C?"between":null}},k=(r,w,h)=>{B(r),r.ganttBarConfig.bundle&&g().forEach(C=>{C.bars.forEach(v=>{v.ganttBarConfig.bundle===r.ganttBarConfig.bundle&&v!==r&&(B(v),x(v,w,h))})})},x=(r,w,h)=>{switch(h){case"left":r[p.value]=l(n(r,"start").subtract(w,"minutes"),o.value),r[i.value]=l(n(r,"end").subtract(w,"minutes"),o.value);break;case"right":r[p.value]=l(n(r,"start").add(w,"minutes"),o.value),r[i.value]=l(n(r,"end").add(w,"minutes"),o.value)}b(r)},E=(r,w)=>{_();const h={...r,type:"dragend"};c(h,w,void 0,new Map(s)),s.clear()},B=r=>{if(!s.has(r)){const w=r[p.value],h=r[i.value];s.set(r,{oldStart:w,oldEnd:h})}},_=()=>{if(a.value||!f.value)return;let r=!1;s.forEach((w,h)=>{const{overlapBar:C}=u(h);C!=null&&(r=!0)}),r&&s.forEach(({oldStart:w,oldEnd:h},C)=>{C[p.value]=w,C[i.value]=h})};return{initDragOfBar:m,initDragOfBundle:y}}function xe(){const{pushOnOverlap:e}=Y(),g=Q(),c=f=>{const o=[];return f!=null&&g().forEach(s=>{s.bars.forEach(n=>{n.ganttBarConfig.bundle===f&&o.push(n)})}),o},a=f=>{if(!e.value||f.ganttBarConfig.pushOnOverlap===!1)return;for(const s of["left","right"]){const n=s,{gapDistanceSoFar:l,bundleBarsAndGapDist:m}=p(f,0,n);let y=l;const d=m;if(!d)continue;for(let u=0;u<d.length;u++){const k=d[u].bar,x=d[u].gapDistance;c(k.ganttBarConfig.bundle).filter(B=>B!==k).forEach(B=>{const _=p(B,x,n),r=_.gapDistanceSoFar,w=_.bundleBarsAndGapDist;r!=null&&(!y||r<y)&&(y=r),w.forEach(h=>{d.find(C=>C.bar===h.bar)||d.push(h)})})}const b=document.getElementById(f.ganttBarConfig.id);y!=null&&n==="left"?f.ganttBarConfig.dragLimitLeft=b.offsetLeft-y:y!=null&&n==="right"&&(f.ganttBarConfig.dragLimitRight=b.offsetLeft+b.offsetWidth+y)}c(f.ganttBarConfig.bundle).forEach(s=>{s.ganttBarConfig.dragLimitLeft=f.ganttBarConfig.dragLimitLeft,s.ganttBarConfig.dragLimitRight=f.ganttBarConfig.dragLimitRight})},p=(f,o=0,s)=>{const n=f.ganttBarConfig.bundle?[{bar:f,gapDistance:o}]:[];let l=f,m=i(l,s);if(s==="left")for(;m;){const y=document.getElementById(l.ganttBarConfig.id),d=document.getElementById(m.ganttBarConfig.id),b=d.offsetLeft+d.offsetWidth;if(o+=y.offsetLeft-b,m.ganttBarConfig.immobile)return{gapDistanceSoFar:o,bundleBarsAndGapDist:n};m.ganttBarConfig.bundle&&n.push({bar:m,gapDistance:o}),l=m,m=i(m,"left")}if(s==="right")for(;m;){const y=document.getElementById(l.ganttBarConfig.id),d=document.getElementById(m.ganttBarConfig.id),b=y.offsetLeft+y.offsetWidth;if(o+=d.offsetLeft-b,m.ganttBarConfig.immobile)return{gapDistanceSoFar:o,bundleBarsAndGapDist:n};m.ganttBarConfig.bundle&&n.push({bar:m,gapDistance:o}),l=m,m=i(m,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:n}},i=(f,o)=>{var m,y;const s=document.getElementById(f.ganttBarConfig.id),n=(y=(m=g().find(d=>d.bars.includes(f)))==null?void 0:m.bars)!=null?y:[];let l=[];return o==="left"?l=n.filter(d=>{const b=document.getElementById(d.ganttBarConfig.id);return b&&b.offsetLeft<s.offsetLeft&&d.ganttBarConfig.pushOnOverlap!==!1}):l=n.filter(d=>{const b=document.getElementById(d.ganttBarConfig.id);return b&&b.offsetLeft>s.offsetLeft&&d.ganttBarConfig.pushOnOverlap!==!1}),l.length>0?l.reduce((d,b)=>{const u=document.getElementById(d.ganttBarConfig.id),k=document.getElementById(b.ganttBarConfig.id),x=Math.abs(u.offsetLeft-s.offsetLeft),E=Math.abs(k.offsetLeft-s.offsetLeft);return x<E?d:b},l[0]):null};return{setDragLimitsOfGanttBar:a}}const Be=["id"],Ce={class:"g-gantt-bar-label"},Ee=["innerHTML"],_e=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),ve=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),De=8,Ot=t.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){var S;const g=e;t.useCssVars(D=>({"2e6f42dd":t.unref(f)}));const c=Tt(),a=Y(),{rowHeight:p}=a,{bar:i}=t.toRefs(g),f=(S=g.bar.ganttBarConfig.style)==null?void 0:S.backgroundColor,{mapTimeToPosition:o,mapPositionToTime:s}=P(),{initDragOfBar:n,initDragOfBundle:l}=ke(),{setDragLimitsOfGanttBar:m}=xe(),y=t.ref(!1),d=t.computed(()=>i.value.ganttBarConfig);function b(D){d.value.bundle!=null?l(i.value,D):n(i.value,D),y.value=!0}const u=()=>{m(i.value),!d.value.immobile&&(window.addEventListener("mousemove",b,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",b),y.value=!1},{once:!0}))},k=t.inject(ht),x=D=>{var N;D.preventDefault(),D.type==="mousedown"&&u();const O=(N=k==null?void 0:k.value)==null?void 0:N.getBoundingClientRect();if(!O)return;const M=s(D.clientX-O.left);c(D,i.value,M)},{barStart:E,barEnd:B,width:_,chartStart:r,chartEnd:w,chartSize:h}=a,C=t.ref(0),v=t.ref(0),T=t.computed(()=>{const D=new Date(i.value.myBeginDate).getTime(),O=new Date(i.value.myEndDate).getTime();return Math.abs(D-O)/(1e3*60*60*24)<=2?0:v.value-C.value-De});return t.onMounted(()=>{t.watch([i,_,r,w,h.width],()=>{C.value=o(i.value[E.value]),v.value=o(i.value[B.value])},{deep:!0,immediate:!0})}),(D,O)=>{var M;return t.openBlock(),t.createElementBlock("div",{id:d.value.id,class:t.normalizeClass(["g-gantt-bar",d.value.asArrow?"g-gantt-bar-is-arrow":"",d.value.class||""]),style:t.normalizeStyle({...d.value.style,position:"absolute",top:`${t.unref(p)*.1}px`,left:`${C.value}px`,width:`${T.value}px`,height:`${t.unref(p)*.8}px`,zIndex:y.value?3:2}),onMousedown:x,onClick:x,onDblclick:x,onMouseenter:x,onMouseleave:x,onContextmenu:x},[t.createElementVNode("div",Ce,[t.renderSlot(D.$slots,"default",{bar:t.unref(i)},()=>[t.createElementVNode("div",null,t.toDisplayString(d.value.label||""),1),d.value.html?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:d.value.html},null,8,Ee)):t.createCommentVNode("",!0)])]),d.value.asArrow?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-bar-arrow",style:t.normalizeStyle({borderLeft:`8px solid #${(M=t.unref(i).ganttBarConfig.style)==null?void 0:M.backgroundColor}`})},null,4)):t.createCommentVNode("",!0),d.value.hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[_e,ve],64)):t.createCommentVNode("",!0)],46,Be)}}}),Re="",Mt=t.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},overlaps:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:g}){const c=e,{rowHeight:a,colors:p,labelColumnTitle:i}=Y(),{highlightOnHover:f}=t.toRefs(c),o=t.ref(!1),s=t.computed(()=>({height:`${a.value}px`,background:(f==null?void 0:f.value)&&o.value?p.value.hoverHighlight:null})),{mapPositionToTime:n}=P(),l=t.ref(null);t.provide(ht,l);const m=d=>{var x;const b=(x=l.value)==null?void 0:x.getBoundingClientRect();if(!b){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const u=d.clientX-b.left,k=n(u);g("drop",{e:d,datetime:k})},y=d=>!d||/^\s*$/.test(d);return(d,b)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("div",{class:"g-gantt-row",style:t.normalizeStyle(s.value),onDragover:b[0]||(b[0]=t.withModifiers(u=>o.value=!0,["prevent"])),onDragleave:b[1]||(b[1]=u=>o.value=!1),onDrop:b[2]||(b[2]=u=>m(u)),onMouseover:b[3]||(b[3]=u=>o.value=!0),onMouseleave:b[4]||(b[4]=u=>o.value=!1)},[!y(d.label)&&!t.unref(i)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(p).primary,color:t.unref(p).text})},[t.renderSlot(d.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(d.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:l,class:"g-gantt-row-bars-container"},d.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition sys",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(d.bars,u=>(t.openBlock(),t.createBlock(Ot,{key:u.ganttBarConfig.id,bar:u},{default:t.withCtx(()=>[t.renderSlot(d.$slots,"bar-label",{bar:u})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36),d.overlaps?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row",style:t.normalizeStyle(s.value),onDragover:b[5]||(b[5]=t.withModifiers(u=>o.value=!0,["prevent"])),onDragleave:b[6]||(b[6]=u=>o.value=!1),onDrop:b[7]||(b[7]=u=>m(u)),onMouseover:b[8]||(b[8]=u=>o.value=!0),onMouseleave:b[9]||(b[9]=u=>o.value=!1)},[!y(d.label)&&!t.unref(i)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(p).primary,color:t.unref(p).text})},[t.renderSlot(d.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(d.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:l,class:"g-gantt-row-bars-container"},d.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition OVERLAP___",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(d.overlaps,u=>(t.openBlock(),t.createBlock(Ot,{key:u.ganttBarConfig.id,bar:u},{default:t.withCtx(()=>[t.renderSlot(d.$slots,"bar-label",{bar:u})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36)):t.createCommentVNode("",!0)]))}}),He="";function $t(){L.default.extend(Gt),L.default.extend(Vt),L.default.extend(ct),L.default.extend(Rt),L.default.extend(zt),L.default.extend(Yt),L.default.extend(It)}const Lt={install(e,g){$t(),e.component("GGanttChart",Dt),e.component("GGanttRow",Mt)}};$.GGanttChart=Dt,$.GGanttRow=Mt,$.default=Lt,$.extendDayjs=$t,$.ganttastic=Lt,Object.defineProperties($,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle($,R="top"){if(!$||typeof document>"u")return;const t=document.head,F=document.createElement("style");R==="top"&&t.firstChild?t.insertBefore(F,t.firstChild):t.appendChild(F),F.appendChild(document.createTextNode($))}injectStyle(`
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
  border-left: 8px solid var(--2e6f42dd);
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
`,"top");
