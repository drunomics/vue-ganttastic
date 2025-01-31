import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16"
};
function r(d, e) {
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "m10.445 12.743-.78.624-4-5a.5.5 0 0 1-.054-.542l.053-.082 4-5 .781.624-3.75 4.688z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const c = { render: r };
export {
  c as default,
  r as render
};
