import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "9",
  fill: "none"
};
function d(l, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", {
      fill: "#C882BE",
      d: "m8 8.857-8-8h16z"
    }, null, -1)
  ]));
}
const c = { render: d };
export {
  c as default,
  d as render
};
