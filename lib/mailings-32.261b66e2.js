import { openBlock as t, createElementBlock as n, createElementVNode as l } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  fill: "none"
};
function d(i, e) {
  return t(), n("svg", o, e[0] || (e[0] = [
    l("path", {
      fill: "#1B1E1F",
      "fill-rule": "evenodd",
      d: "M16.273 6.081a.5.5 0 0 0-.546 0l-11.5 7.5a.5.5 0 0 0-.227.42v12.5a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5V14a.5.5 0 0 0-.227-.42zM5 26.001V14.27l11-7.174 11 7.174v11.73zm10.677-3.62-6.5-5.5.646-.763L16 21.345l6.177-5.227.646.764-6.5 5.5a.5.5 0 0 1-.646 0",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const a = { render: d };
export {
  a as default,
  d as render
};
