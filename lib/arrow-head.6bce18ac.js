import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const d = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "17",
  fill: "none"
};
function l(r, e) {
  return t(), n("svg", d, e[0] || (e[0] = [
    o("path", {
      fill: "#FAAA3C",
      d: "M6.033 8.114a1 1 0 0 1 0 1.2l-3.75 5c-.576.77-1.8.361-1.8-.6v-10c0-.96 1.224-1.368 1.8-.6z"
    }, null, -1)
  ]));
}
const c = { render: l };
export {
  c as default,
  l as render
};
