import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  style: { fill: "currentColor" },
  viewBox: "0 0 32 32"
};
function r(d, e) {
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", {
      "fill-rule": "evenodd",
      d: "m11.5 25.688.78.624 8-10a.5.5 0 0 0 .054-.542l-.053-.082-8-10-.781.624L19.25 16z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const c = { render: r };
export {
  c as default,
  r as render
};
