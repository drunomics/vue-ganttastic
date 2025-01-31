import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  style: { fill: "currentColor" },
  viewBox: "0 0 24 24"
};
function r(d, e) {
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", {
      "fill-rule": "evenodd",
      d: "m8.5 19.188.78.624 6-7.5a.5.5 0 0 0 .055-.542l-.054-.082-6-7.5-.781.624L14.25 12z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const c = { render: r };
export {
  c as default,
  r as render
};
