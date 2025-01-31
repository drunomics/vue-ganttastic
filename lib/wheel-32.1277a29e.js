import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "33",
  fill: "none"
};
function d(c, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", {
      fill: "#1B1E1F",
      d: "M16.5 14.214c-1.7 0-3 1.3-3 3h1c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2v1c1.7 0 3-1.3 3-3s-1.3-3-3-3"
    }, null, -1),
    e("path", {
      fill: "#1B1E1F",
      d: "M16.5 11.214c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6m0 11c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5"
    }, null, -1),
    e("path", {
      fill: "#1B1E1F",
      d: "M16.5 6.714c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5m0 20c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5"
    }, null, -1)
  ]));
}
const r = { render: d };
export {
  r as default,
  d as render
};
