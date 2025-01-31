import { openBlock as t, createElementBlock as n, createElementVNode as l } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function d(i, e) {
  return t(), n("svg", o, e[0] || (e[0] = [
    l("path", {
      fill: "#1B1E1F",
      "fill-rule": "evenodd",
      d: "M12.272 4.08a.5.5 0 0 0-.544 0l-8.5 5.5A.5.5 0 0 0 3 10v8.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.228-.42zM4 18v-7.727l8-5.177 8 5.177V18zm7.688-2.61-5-4 .624-.78L12 14.36l4.688-3.75.624.78-5 4a.5.5 0 0 1-.624 0",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const a = { render: d };
export {
  a as default,
  d as render
};
