import Q from "dayjs";
import { unref as P, getCurrentScope as Mr, onScopeDispose as Pr, getCurrentInstance as Hn, onMounted as Te, nextTick as bt, ref as U, watch as Xe, inject as Pe, computed as q, defineComponent as ee, openBlock as S, createElementBlock as L, Fragment as ne, createElementVNode as $, normalizeStyle as F, createBlock as J, resolveDynamicComponent as je, toDisplayString as te, renderList as be, createVNode as pt, renderSlot as Z, createCommentVNode as de, createTextVNode as vt, useCssVars as Jt, onBeforeMount as $r, toRefs as gt, useSlots as Br, provide as Bt, normalizeClass as Lt, withCtx as ze, shallowRef as Lr, onUnmounted as Rr, isRef as Ie, isReactive as fn, reactive as Ir, h as Ne, isVNode as jr, createApp as pn, useTemplateRef as Hr, withModifiers as Gr, mergeProps as Yr, TransitionGroup as Ur } from "vue";
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "day";
    return function(r, o, s) {
      var i = function(d) {
        return d.add(4 - d.isoWeekday(), n);
      }, l = o.prototype;
      l.isoWeekYear = function() {
        return i(this).year();
      }, l.isoWeek = function(d) {
        if (!this.$utils().u(d))
          return this.add(7 * (d - this.isoWeek()), n);
        var c, m, b, x, O = i(this), v = (c = this.isoWeekYear(), m = this.$u, b = (m ? s.utc : s)().year(c).startOf("year"), x = 4 - b.isoWeekday(), b.isoWeekday() > 4 && (x += 7), b.add(x, n));
        return O.diff(v, "week") + 1;
      }, l.isoWeekday = function(d) {
        return this.$utils().u(d) ? this.day() || 7 : this.day(this.day() % 7 ? d : d - 7);
      };
      var u = l.startOf;
      l.startOf = function(d, c) {
        var m = this.$utils(), b = !!m.u(c) || c;
        return m.p(d) === "isoweek" ? b ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : u.bind(this)(d, c);
      };
    };
  });
})(Gn);
const Wr = Gn.exports;
var Yn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r) {
      r.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Yn);
const zr = Yn.exports;
var Un = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r) {
      r.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Un);
const Fr = Un.exports;
var Wn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r, o) {
      r.prototype.isBetween = function(s, i, l, u) {
        var d = o(s), c = o(i), m = (u = u || "()")[0] === "(", b = u[1] === ")";
        return (m ? this.isAfter(d, l) : !this.isBefore(d, l)) && (b ? this.isBefore(c, l) : !this.isAfter(c, l)) || (m ? this.isBefore(d, l) : !this.isAfter(d, l)) && (b ? this.isAfter(c, l) : !this.isBefore(c, l));
      };
    };
  });
})(Wn);
const zn = Wn.exports;
var Fn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "week", r = "year";
    return function(o, s, i) {
      var l = s.prototype;
      l.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var d = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var c = i(this).startOf(r).add(1, r).date(d), m = i(this).endOf(n);
          if (c.isBefore(m))
            return 1;
        }
        var b = i(this).startOf(r).date(d).startOf(n).subtract(1, "millisecond"), x = this.diff(b, n, !0);
        return x < 0 ? i(this).startOf("week").week() : Math.ceil(x);
      }, l.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(Fn);
const Nr = Fn.exports;
var Nn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r, o) {
      var s = r.prototype, i = s.format;
      o.en.ordinal = function(l) {
        var u = ["th", "st", "nd", "rd"], d = l % 100;
        return "[" + l + (u[(d - 20) % 10] || u[d] || u[0]) + "]";
      }, s.format = function(l) {
        var u = this, d = this.$locale();
        if (!this.isValid())
          return i.bind(this)(l);
        var c = this.$utils(), m = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(b) {
          switch (b) {
            case "Q":
              return Math.ceil((u.$M + 1) / 3);
            case "Do":
              return d.ordinal(u.$D);
            case "gggg":
              return u.weekYear();
            case "GGGG":
              return u.isoWeekYear();
            case "wo":
              return d.ordinal(u.week(), "W");
            case "w":
            case "ww":
              return c.s(u.week(), b === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(u.isoWeek(), b === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(u.$H === 0 ? 24 : u.$H), b === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(u.$d.getTime() / 1e3);
            case "x":
              return u.$d.getTime();
            case "z":
              return "[" + u.offsetName() + "]";
            case "zzz":
              return "[" + u.offsetName("long") + "]";
            default:
              return b;
          }
        });
        return i.bind(this)(m);
      };
    };
  });
})(Nn);
const Vr = Nn.exports;
var Vn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d\d/, s = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(C) {
        this[v] = +C;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(C) {
        if (!C || C === "Z")
          return 0;
        var f = C.match(/([+-]|\d\d)/g), p = 60 * f[1] + (+f[2] || 0);
        return p === 0 ? 0 : f[0] === "+" ? -p : p;
      }(v);
    }], m = function(v) {
      var C = l[v];
      return C && (C.indexOf ? C : C.s.concat(C.f));
    }, b = function(v, C) {
      var f, p = l.meridiem;
      if (p) {
        for (var _ = 1; _ <= 24; _ += 1)
          if (v.indexOf(p(_, 0, C)) > -1) {
            f = _ > 12;
            break;
          }
      } else
        f = v === (C ? "pm" : "PM");
      return f;
    }, x = { A: [i, function(v) {
      this.afternoon = b(v, !1);
    }], a: [i, function(v) {
      this.afternoon = b(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [o, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [s, d("seconds")], ss: [s, d("seconds")], m: [s, d("minutes")], mm: [s, d("minutes")], H: [s, d("hours")], h: [s, d("hours")], HH: [s, d("hours")], hh: [s, d("hours")], D: [s, d("day")], DD: [o, d("day")], Do: [i, function(v) {
      var C = l.ordinal, f = v.match(/\d+/);
      if (this.day = f[0], C)
        for (var p = 1; p <= 31; p += 1)
          C(p).replace(/\[|\]/g, "") === v && (this.day = p);
    }], M: [s, d("month")], MM: [o, d("month")], MMM: [i, function(v) {
      var C = m("months"), f = (m("monthsShort") || C.map(function(p) {
        return p.slice(0, 3);
      })).indexOf(v) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [i, function(v) {
      var C = m("months").indexOf(v) + 1;
      if (C < 1)
        throw new Error();
      this.month = C % 12 || C;
    }], Y: [/[+-]?\d+/, d("year")], YY: [o, function(v) {
      this.year = u(v);
    }], YYYY: [/\d{4}/, d("year")], Z: c, ZZ: c };
    function O(v) {
      var C, f;
      C = v, f = l && l.formats;
      for (var p = (v = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, R, A) {
        var D = A && A.toUpperCase();
        return R || f[A] || n[A] || f[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, j, W) {
          return j || W.slice(1);
        });
      })).match(r), _ = p.length, a = 0; a < _; a += 1) {
        var w = p[a], y = x[w], h = y && y[0], T = y && y[1];
        p[a] = T ? { regex: h, parser: T } : w.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var R = {}, A = 0, D = 0; A < _; A += 1) {
          var H = p[A];
          if (typeof H == "string")
            D += H.length;
          else {
            var j = H.regex, W = H.parser, N = B.slice(D), z = j.exec(N)[0];
            W.call(R, z), B = B.replace(z, "");
          }
        }
        return function(G) {
          var V = G.afternoon;
          if (V !== void 0) {
            var X = G.hours;
            V ? X < 12 && (G.hours += 12) : X === 12 && (G.hours = 0), delete G.afternoon;
          }
        }(R), R;
      };
    }
    return function(v, C, f) {
      f.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
      var p = C.prototype, _ = p.parse;
      p.parse = function(a) {
        var w = a.date, y = a.utc, h = a.args;
        this.$u = y;
        var T = h[1];
        if (typeof T == "string") {
          var B = h[2] === !0, R = h[3] === !0, A = B || R, D = h[2];
          R && (D = h[2]), l = this.$locale(), !B && D && (l = f.Ls[D]), this.$d = function(N, z, G) {
            try {
              if (["x", "X"].indexOf(z) > -1)
                return new Date((z === "X" ? 1e3 : 1) * N);
              var V = O(z)(N), X = V.year, se = V.month, le = V.day, Ee = V.hours, ge = V.minutes, ae = V.seconds, he = V.milliseconds, Se = V.zone, ie = new Date(), Oe = le || (X || se ? 1 : ie.getDate()), ue = X || ie.getFullYear(), me = 0;
              X && !se || (me = se > 0 ? se - 1 : ie.getMonth());
              var $e = Ee || 0, Ae = ge || 0, Be = ae || 0, Le = he || 0;
              return Se ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le + 60 * Se.offset * 1e3)) : G ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le)) : new Date(ue, me, Oe, $e, Ae, Be, Le);
            } catch {
              return new Date("");
            }
          }(w, T, y), this.init(), D && D !== !0 && (this.$L = this.locale(D).$L), A && w != this.format(T) && (this.$d = new Date("")), l = {};
        } else if (T instanceof Array)
          for (var H = T.length, j = 1; j <= H; j += 1) {
            h[1] = T[j - 1];
            var W = f.apply(this, h);
            if (W.isValid()) {
              this.$d = W.$d, this.$L = W.$L, this.init();
              break;
            }
            j === H && (this.$d = new Date(""));
          }
        else
          _.call(this, a);
      };
    };
  });
})(Vn);
const qr = Vn.exports;
var vn;
const wt = typeof window < "u";
wt && ((vn = window == null ? void 0 : window.navigator) == null ? void 0 : vn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xr(e) {
  return typeof e == "function" ? e() : P(e);
}
function Qr(e) {
  return e;
}
function Kr(e) {
  return Mr() ? (Pr(e), !0) : !1;
}
function Zr(e, t = !0) {
  Hn() ? Te(e) : t ? e() : bt(e);
}
function qn(e) {
  var t;
  const n = Xr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Jr = wt ? window : void 0;
wt && window.document;
wt && window.navigator;
wt && window.location;
function eo(e, t = !1) {
  const n = U(), r = () => n.value = Boolean(e());
  return r(), Zr(r, t), n;
}
const Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qt = "__vueuse_ssr_handlers__";
Vt[qt] = Vt[qt] || {};
Vt[qt];
var gn = Object.getOwnPropertySymbols, to = Object.prototype.hasOwnProperty, no = Object.prototype.propertyIsEnumerable, ro = (e, t) => {
  var n = {};
  for (var r in e)
    to.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && gn)
    for (var r of gn(e))
      t.indexOf(r) < 0 && no.call(e, r) && (n[r] = e[r]);
  return n;
};
function oo(e, t, n = {}) {
  const r = n, { window: o = Jr } = r, s = ro(r, ["window"]);
  let i;
  const l = eo(() => o && "ResizeObserver" in o), u = () => {
    i && (i.disconnect(), i = void 0);
  }, d = Xe(() => qn(e), (m) => {
    u(), l.value && o && m && (i = new ResizeObserver(t), i.observe(m, s));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), d();
  };
  return Kr(c), {
    isSupported: l,
    stop: c
  };
}
function Xn(e, t = { width: 0, height: 0 }, n = {}) {
  const r = U(t.width), o = U(t.height);
  return oo(e, ([s]) => {
    r.value = s.contentRect.width, o.value = s.contentRect.height;
  }, n), Xe(() => qn(e), (s) => {
    r.value = s ? t.width : 0, o.value = s ? t.height : 0;
  }), {
    width: r,
    height: o
  };
}
var hn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hn || (hn = {}));
var ao = Object.defineProperty, mn = Object.getOwnPropertySymbols, io = Object.prototype.hasOwnProperty, so = Object.prototype.propertyIsEnumerable, yn = (e, t, n) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lo = (e, t) => {
  for (var n in t || (t = {}))
    io.call(t, n) && yn(e, n, t[n]);
  if (mn)
    for (var n of mn(t))
      so.call(t, n) && yn(e, n, t[n]);
  return e;
};
const uo = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
lo({
  linear: Qr
}, uo);
const bn = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgba(204, 216, 219, 0.5)",
    markerCurrentTime: "#000",
    text: "#404040",
    background: "white"
  },
  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgba(230, 221, 202, 0.5)",
    markerCurrentTime: "#000",
    text: "#542d05",
    background: "white"
  },
  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgba(159, 160, 161, 0.5)",
    markerCurrentTime: "#fff",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },
  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgba(110, 165, 196, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgba(193, 202, 214, 0.5)",
    markerCurrentTime: "#000",
    text: "#022c47",
    background: "white"
  },
  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgba(179, 162, 127, 0.5)",
    markerCurrentTime: "#fff",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },
  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  }
}, Qn = Symbol("CHART_ROWS_KEY"), Kn = Symbol("CONFIG_KEY"), Zn = Symbol("EMIT_BAR_EVENT_KEY"), Jn = Symbol("BAR_CONTAINER_KEY");
function He() {
  const e = Pe(Kn);
  if (!e)
    throw Error("Failed to inject config!");
  return e;
}
const er = "YYYY-MM-DD HH:mm";
function en(e = He()) {
  const { chartStart: t, chartEnd: n, barStart: r, barEnd: o, dateFormat: s } = e, i = q(() => u(t.value)), l = q(() => u(n.value)), u = (c, m) => {
    let b;
    if (m !== void 0 && typeof c != "string" && !(c instanceof Date) && (b = m === "start" ? c[r.value] : c[o.value]), typeof c == "string")
      b = c;
    else if (c instanceof Date)
      return Q(c);
    const x = s.value || er;
    return Q(b, x, !0);
  };
  return {
    chartStartDayjs: i,
    chartEndDayjs: l,
    toDayjs: u,
    format: (c, m) => m === !1 ? c instanceof Date ? c : Q(c).toDate() : (typeof c == "string" || c instanceof Date ? u(c) : c).format(m)
  };
}
const co = { class: "g-gantt-grid-current-date" }, fo = /* @__PURE__ */ ee({
  __name: "GGanttGridCurrentDay",
  props: {
    parentWidth: {}
  },
  setup(e) {
    const t = e, n = Pe("iconComponent"), r = new Date(), o = new Date(r.getFullYear(), 0, 1), s = q(() => Math.ceil((new Date(r.getTime()).valueOf() - o.valueOf()) / 864e5)), i = q(() => t.parentWidth / 52 / 7), l = U(s.value >= 365 - 10), u = q(() => s.value >= 365 - 10 ? 0 : i.value * s.value - 33), d = q(() => s.value < 10 ? 0 : i.value * s.value - 33);
    return (c, m) => (S(), L(ne, null, [
      $("div", {
        style: F({
          position: "absolute",
          top: "-65px",
          zIndex: 3,
          left: i.value * s.value - 7.5 + "px"
        })
      }, [
        (S(), J(je(P(n)), {
          name: "marker-current-date",
          size: "16",
          "size-s": "16",
          style: {
            color: "#C882BE"
          }
        }))
      ], 4),
      $("div", {
        style: F({
          position: "absolute",
          top: "-52px",
          left: l.value ? "unset" : d.value + "px",
          right: l.value ? u.value + "px" : "unset",
          width: "68px",
          height: "20px",
          backgroundColor: "white",
          padding: "2px",
          borderRadius: "4px"
        })
      }, [
        $("p", co, te(P(Q)(new Date()).format("DD.MM.YYYY")), 1)
      ], 4),
      $("div", {
        style: F({
          position: "absolute",
          width: "2px",
          height: "100%",
          left: i.value * s.value + "px",
          borderRight: "2px solid #C882BE",
          zIndex: 3
        })
      }, null, 4)
    ], 64));
  }
});
const it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, po = /* @__PURE__ */ it(fo, [["__scopeId", "data-v-dd346c68"]]);
function tr() {
  const { precision: e } = He(), { chartStartDayjs: t, chartEndDayjs: n } = en(), r = q(() => {
    switch (e == null ? void 0 : e.value) {
      case "hour":
        return "day";
      case "day":
        return "month";
      case "date":
      case "week":
        return "month";
      case "month":
        return "year";
      default:
        throw new Error(
          "Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'"
        );
    }
  }), o = q(() => {
    switch (e.value) {
      case "date":
        return "day";
      case "week":
        return "isoWeek";
      default:
        return e.value;
    }
  }), s = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "W",
    month: "MMM",
    year: "YYYY"
  }, i = q(() => {
    const l = [], u = [], d = n.value.diff(t.value, "minutes", !0), c = r.value, m = o.value;
    let b = t.value, x = t.value;
    for (; x.isSameOrBefore(n.value); ) {
      const O = x.endOf(m), C = O.isAfter(n.value) ? n.value.diff(x, "minutes", !0) / d * 100 : O.diff(x, "minutes", !0) / d * 100;
      u.push({
        label: x.format(s[e == null ? void 0 : e.value]),
        value: String(x),
        date: x.toDate(),
        width: String(C) + "%"
      }), x = O.add(1, m === "isoWeek" ? "week" : m).startOf(m);
    }
    for (; b.isSameOrBefore(n.value); ) {
      const O = b.endOf(c), C = O.isAfter(n.value) ? n.value.diff(b, "minutes", !0) / d * 100 : O.diff(b, "minutes", !0) / d * 100;
      l.push({
        label: b.format(s[c]),
        value: String(b),
        date: b.toDate(),
        width: String(C) + "%"
      }), b = O.add(1, c).startOf(c);
    }
    return { upperUnits: l, lowerUnits: u };
  });
  return i.value.lowerUnits[0].label === "53" && i.value.lowerUnits.splice(0, 1), i.value.lowerUnits[i.value.lowerUnits.length - 1].label === "1" && i.value.lowerUnits.splice(i.value.lowerUnits.length - 1, 1), i.value.lowerUnits[i.value.lowerUnits.length - 1].label === "14" && i.value.lowerUnits.splice(i.value.lowerUnits.length - 1, 1), {
    timeaxisUnits: i
  };
}
const vo = /* @__PURE__ */ ee({
  __name: "GGanttGridAreaDivider",
  props: {
    areaHeights: {}
  },
  setup(e) {
    const { timeaxisUnits: t } = tr(), n = (o, s) => s === t.value.lowerUnits.length - 1 ? "unset" : o && Number(o) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2", r = (o) => {
      const s = +o >= 14 && +o <= 26, i = +o >= 40 && +o <= 52;
      return s || i ? "#f7f8f9" : "#ffffff";
    };
    return (o, s) => (S(), L(ne, null, [
      (S(!0), L(ne, null, be(o.areaHeights, (i) => (S(), L("div", {
        key: i,
        style: F({
          position: "absolute",
          top: i + "px",
          zIndex: 2,
          height: "6px",
          width: "100%",
          backgroundColor: "#DFE2E6"
        })
      }, null, 4))), 128)),
      (S(!0), L(ne, null, be(P(t).lowerUnits, ({ label: i, width: l }, u) => (S(), L("div", {
        key: i,
        style: F({
          width: l,
          borderRight: n(i, u),
          backgroundColor: r(i)
        }),
        class: "g-grid-line"
      }, null, 4))), 128))
    ], 64));
  }
}), go = /* @__PURE__ */ ee({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(e) {
    const t = U(null), { width: n } = Xn(t), r = U([]);
    return Te(() => {
      bt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((s) => {
          r.value.push(s.clientHeight);
        }), r.value.pop();
      });
    }), (o, s) => (S(), L("div", {
      ref_key: "gridContainer",
      ref: t,
      class: "g-grid-container"
    }, [
      pt(po, { "parent-width": P(n) }, null, 8, ["parent-width"]),
      pt(vo, { "area-heights": r.value }, null, 8, ["area-heights"])
    ], 512));
  }
});
const wn = /* @__PURE__ */ it(go, [["__scopeId", "data-v-a719d7c7"]]);
function ho() {
  const e = Pe(Qn);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const mo = { class: "g-label-column-rows" }, yo = /* @__PURE__ */ ee({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: t, colors: n, labelColumnTitle: r, rowHeight: o } = He(), s = ho();
    return (i, l) => (S(), L("div", {
      class: "g-label-column",
      style: F({ fontFamily: P(t), color: P(n).text })
    }, [
      Z(i.$slots, "label-column-title", {}, () => [
        $("div", {
          class: "g-label-column-header",
          style: F({ background: P(n).primary })
        }, te(P(r)), 5)
      ]),
      $("div", mo, [
        (S(!0), L(ne, null, be(P(s)(), ({ label: u }, d) => (S(), L("div", {
          key: `${u}_${d}`,
          class: "g-label-column-row",
          style: F({
            background: d % 2 === 0 ? P(n).ternary : P(n).quartenary,
            height: `${P(o)}px`
          })
        }, [
          Z(i.$slots, "label-column-row", { label: u }, () => [
            $("span", null, te(u), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const bo = { class: "g-timeaxis" }, wo = { class: "g-timeunits-container g-timeunits-low" }, xo = {
  key: 0,
  class: "g-timeunit-low-kw"
}, Oo = { class: "g-timeunits-container g-timeunits-upper" }, Co = /* @__PURE__ */ ee({
  __name: "GGanttTimeaxis",
  setup(e) {
    const { precision: t, colors: n } = He(), { timeaxisUnits: r } = tr();
    return (o, s) => (S(), L("div", bo, [
      $("div", wo, [
        (S(!0), L(ne, null, be(P(r).lowerUnits, ({ label: i, value: l, date: u, width: d }, c) => (S(), L("div", {
          key: i,
          class: "g-timeunit g-timeunit-low",
          style: F({
            flexDirection: P(t) === "hour" ? "column" : "row",
            alignItems: P(t) === "hour" ? "" : "center",
            width: d
          })
        }, [
          c === 0 ? (S(), L("span", xo, "KW")) : de("", !0),
          Z(o.$slots, "timeunit", {
            label: i,
            value: l,
            date: u
          }, () => [
            vt(te(i), 1)
          ]),
          P(t) === "hour" ? (S(), L("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: F({ background: P(n).text })
          }, null, 4)) : de("", !0)
        ], 4))), 128))
      ]),
      $("div", Oo, [
        (S(!0), L(ne, null, be(P(r).upperUnits, ({ label: i, value: l, date: u, width: d }) => (S(), L("div", {
          key: i,
          class: "g-upper-timeunit",
          style: F({
            width: d
          })
        }, [
          Z(o.$slots, "upper-timeunit", {
            label: i,
            value: l,
            date: u
          }, () => [
            vt(te(i), 1)
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
function tn(e = He()) {
  const { dateFormat: t, chartSize: n } = e, { chartStartDayjs: r, chartEndDayjs: o, toDayjs: s, format: i } = en(e), l = q(() => o.value.diff(r.value, "minutes"));
  return {
    mapTimeToPosition: (c) => {
      const m = n.width.value || 0, b = s(c).diff(r.value, "minutes", !0);
      return Math.ceil(b / l.value * m);
    },
    mapPositionToTime: (c) => {
      const m = n.width.value || 0, b = c / m * l.value;
      return i(r.value.add(b, "minutes"), t.value);
    }
  };
}
const _o = /* @__PURE__ */ ee({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: t } = tn(), n = U(Q()), { colors: r, dateFormat: o, currentTimeLabel: s } = He(), i = q(() => {
      const l = o.value || "YYYY-MM-DD HH:mm";
      return t(Q(n.value, l).format(l));
    });
    return (l, u) => (S(), L("div", {
      class: "g-grid-current-time",
      style: F({
        left: `${i.value}px`
      })
    }, [
      $("div", {
        class: "g-grid-current-time-marker",
        style: F({
          border: `1px dashed ${P(r).markerCurrentTime}`
        })
      }, null, 4),
      $("span", {
        class: "g-grid-current-time-text",
        style: F({ color: P(r).markerCurrentTime })
      }, [
        Z(l.$slots, "current-time-label", {}, () => [
          vt(te(P(s)), 1)
        ])
      ], 4)
    ], 4));
  }
});
const To = { class: "g-gantt-legend" }, ko = { class: "g-gantt-legend-collapse" }, Do = { class: "g-gantt-legend-areas-list" }, Eo = { class: "g-gantt-legend-promotion" }, So = 6, Ao = /* @__PURE__ */ ee({
  __name: "GGanttLegendNonCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  emits: ["update:isCollapsed"],
  setup(e) {
    const t = Pe("iconComponent"), n = U([]);
    return Te(() => {
      bt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((o) => {
          n.value.push(o.clientHeight);
        });
      });
    }), (r, o) => (S(), L("div", To, [
      $("div", ko, [
        (S(), J(je(P(t)), {
          name: "chevron-right",
          class: "g-gantt-legend-do-collapse",
          size: "24",
          onClick: o[0] || (o[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }))
      ]),
      $("div", Do, [
        (S(!0), L(ne, null, be(Object.entries(r.legend), ([s, i], l) => (S(), L("div", {
          key: s,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + So + "px"
          })
        }, [
          (S(), J(je(P(t)), {
            class: "g-gantt-legend-area-icon",
            "size-s": "24",
            "size-m": "32",
            "size-l": "32",
            name: r.legend[s][0].area.icon
          }, null, 8, ["name"])),
          $("div", Eo, [
            (S(!0), L(ne, null, be(i, (u) => (S(), L("div", {
              key: u.category.name,
              class: "g-gantt-legend-category-color",
              style: F({ backgroundColor: "#" + u.category.color })
            }, null, 4))), 128))
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
const Mo = /* @__PURE__ */ it(Ao, [["__scopeId", "data-v-6e9c4fc8"]]), Po = { class: "g-gantt-legend" }, $o = { class: "g-gantt-legend-collapse" }, Bo = { class: "g-gantt-legend-areas-list" }, Lo = { class: "g-gantt-legend-title" }, Ro = { class: "g-gantt-legend-area" }, Io = { class: "g-gantt-legend-category-name" }, jo = 6, Ho = /* @__PURE__ */ ee({
  __name: "GGanttLegendCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  emits: ["update:isCollapsed"],
  setup(e) {
    const t = Pe("iconComponent"), n = U([]);
    return Te(() => {
      bt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((o) => {
          n.value.push(o.clientHeight);
        });
      });
    }), (r, o) => (S(), L("div", Po, [
      $("div", $o, [
        (S(), J(je(P(t)), {
          name: "chevron-left",
          class: "g-gantt-legend-do-uncollapse",
          size: "24",
          onClick: o[0] || (o[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }))
      ]),
      $("div", Bo, [
        (S(!0), L(ne, null, be(Object.entries(r.legend), ([s, i], l) => (S(), L("div", {
          key: s,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + jo + "px"
          })
        }, [
          $("div", Lo, [
            (S(), J(je(P(t)), {
              "size-s": "24",
              "size-m": "32",
              "size-l": "32",
              name: r.legend[s][0].area.icon
            }, null, 8, ["name"])),
            $("p", Ro, te(s), 1)
          ]),
          (S(!0), L(ne, null, be(i, (u) => (S(), L("div", {
            key: u.category.name,
            class: "g-gantt-legend-promotion"
          }, [
            $("div", {
              class: "g-gantt-legend-category-color",
              style: F({ backgroundColor: "#" + u.category.color })
            }, null, 4),
            $("p", Io, te(u.category.name), 1)
          ]))), 128))
        ], 4))), 128))
      ])
    ]));
  }
});
const Go = /* @__PURE__ */ it(Ho, [["__scopeId", "data-v-a1ed28cb"]]), Yo = /* @__PURE__ */ ee({
  __name: "GGanttLegend",
  props: {
    legend: {}
  },
  setup(e) {
    Jt((o) => ({
      "323e6050": n.value
    }));
    const t = U(!0), n = q(() => {
      t.value;
    }), r = () => document.querySelector("body").clientWidth > 1200;
    return $r(() => {
      t.value = r();
    }), (o, s) => t.value ? (S(), J(Go, {
      key: 1,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": s[1] || (s[1] = (i) => t.value = i),
      legend: o.legend
    }, null, 8, ["is-collapsed", "legend"])) : (S(), J(Mo, {
      key: 0,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": s[0] || (s[0] = (i) => t.value = i),
      legend: o.legend
    }, null, 8, ["is-collapsed", "legend"]));
  }
});
const Uo = /* @__PURE__ */ it(Yo, [["__scopeId", "data-v-72932b17"]]), Wo = { class: "g-gantt-chart-container" }, zo = { class: "g-gantt-chart-quarters" }, Fo = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, No = { class: "g-gantt-rows-list" }, Vo = /* @__PURE__ */ ee({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    currentTime: { type: Boolean },
    currentTimeLabel: { default: "" },
    dateFormat: { type: [String, Boolean], default: er },
    width: { default: "100%" },
    hideTimeaxis: { type: Boolean, default: !1 },
    colorScheme: { default: "default" },
    grid: { type: Boolean, default: !1 },
    pushOnOverlap: { type: Boolean, default: !1 },
    noOverlap: { type: Boolean, default: !1 },
    rowHeight: { default: 40 },
    highlightedUnits: { default: () => [] },
    font: { default: "inherit" },
    labelColumnTitle: { default: "" },
    labelColumnWidth: { default: "150px" },
    verticalGrid: { type: Boolean },
    legend: {}
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(e, { emit: t }) {
    const n = e;
    Q.extend(zn);
    const r = new Date(), o = new Date();
    r.setDate(15), r.setMonth(10), o.setDate(31), o.setMonth(11);
    const s = U(
      Q(new Date()).isBetween(r, o)
    ), i = t, { width: l, font: u, colorScheme: d } = gt(n), c = Br(), m = q(
      () => typeof d.value != "string" ? d.value : bn[d.value] || bn.default
    ), b = () => {
      var _;
      const f = (_ = c.default) == null ? void 0 : _.call(c), p = [];
      return f && f.forEach((a) => {
        var w;
        if ((w = a.props) != null && w.bars) {
          const { label: y, bars: h } = a.props;
          p.push({ label: y, bars: h });
        } else
          Array.isArray(a.children) && a.children.forEach((y) => {
            var T;
            const h = y;
            if ((T = h == null ? void 0 : h.props) != null && T.bars) {
              const { label: B, bars: R } = h.props;
              p.push({ label: B, bars: R });
            }
          });
      }), p;
    }, x = U(!1), O = (f, p, _, a) => {
      switch (f.type) {
        case "click":
          i("click-bar", { bar: p, e: f, datetime: _ });
          break;
        case "mousedown":
          i("mousedown-bar", { bar: p, e: f, datetime: _ });
          break;
        case "mouseup":
          i("mouseup-bar", { bar: p, e: f, datetime: _ });
          break;
        case "dblclick":
          i("dblclick-bar", { bar: p, e: f, datetime: _ });
          break;
        case "mouseenter":
          i("mouseenter-bar", { bar: p, e: f });
          break;
        case "mouseleave":
          i("mouseleave-bar", { bar: p, e: f });
          break;
        case "dragstart":
          x.value = !0, i("dragstart-bar", { bar: p, e: f });
          break;
        case "drag":
          i("drag-bar", { bar: p, e: f });
          break;
        case "dragend":
          x.value = !1, i("dragend-bar", { bar: p, e: f, movedBars: a });
          break;
        case "contextmenu":
          i("contextmenu-bar", { bar: p, e: f, datetime: _ });
          break;
      }
    }, v = U(null), C = Xn(v);
    return Bt(Qn, b), Bt(Kn, {
      ...gt(n),
      colors: m,
      chartSize: C
    }), Bt(Zn, O), (f, p) => (S(), L("div", Wo, [
      pt(Uo, {
        legend: f.legend ? f.legend : {}
      }, null, 8, ["legend"]),
      $("div", {
        class: Lt([[{ "labels-in-column": !!f.labelColumnTitle }], "g-gantt-chart-wrapper"])
      }, [
        f.labelColumnTitle ? (S(), J(yo, {
          key: 0,
          style: F({
            width: f.labelColumnWidth
          })
        }, {
          "label-column-title": ze(() => [
            Z(f.$slots, "label-column-title")
          ]),
          "label-column-row": ze(({ label: _ }) => [
            Z(f.$slots, "label-column-row", { label: _ })
          ]),
          _: 3
        }, 8, ["style"])) : de("", !0),
        $("div", {
          ref_key: "ganttChart",
          ref: v,
          class: Lt([
            "g-gantt-chart",
            {
              "with-column": f.labelColumnTitle,
              "g-gantt-chart-container--4-quarters-width": !s.value,
              "g-gantt-chart-container--5-quarters-width": s.value
            }
          ]),
          style: F({ width: P(l), background: m.value.background, fontFamily: P(u) })
        }, [
          f.grid ? (S(), J(wn, {
            key: 0,
            "highlighted-units": f.highlightedUnits
          }, null, 8, ["highlighted-units"])) : de("", !0),
          f.currentTime ? (S(), J(_o, { key: 1 }, {
            "current-time-label": ze(() => [
              Z(f.$slots, "current-time-label")
            ]),
            _: 3
          })) : de("", !0),
          $("div", zo, [
            p[0] || (p[0] = $("div", { class: "g-gantt-chart-quarter" }, "Q1", -1)),
            p[1] || (p[1] = $("div", { class: "g-gantt-chart-quarter" }, "Q2", -1)),
            p[2] || (p[2] = $("div", { class: "g-gantt-chart-quarter" }, "Q3", -1)),
            p[3] || (p[3] = $("div", { class: "g-gantt-chart-quarter" }, "Q4", -1)),
            s.value ? (S(), L("div", Fo, "Q1")) : de("", !0)
          ]),
          $("div", {
            class: Lt([
              "g-gantt-rows-container",
              n.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            $("div", No, [
              Z(f.$slots, "default")
            ]),
            pt(wn, { "highlighted-units": f.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          f.hideTimeaxis ? de("", !0) : (S(), J(Co, { key: 2 }, {
            "upper-timeunit": ze(({ label: _, value: a, date: w }) => [
              Z(f.$slots, "upper-timeunit", {
                date: w,
                label: _,
                value: a
              })
            ]),
            timeunit: ze(({ label: _, value: a, date: w }) => [
              Z(f.$slots, "timeunit", {
                date: w,
                label: _,
                value: a
              })
            ]),
            _: 3
          }))
        ], 6)
      ], 2)
    ]));
  }
});
/*!
  * vue-tippy v6.6.0
  * (c) 2024 
  * @license MIT
  */
var re = "top", pe = "bottom", ve = "right", oe = "left", nn = "auto", xt = [re, pe, ve, oe], et = "start", ht = "end", qo = "clippingParents", nr = "viewport", ct = "popper", Xo = "reference", xn = /* @__PURE__ */ xt.reduce(function(e, t) {
  return e.concat([t + "-" + et, t + "-" + ht]);
}, []), rr = /* @__PURE__ */ [].concat(xt, [nn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + et, t + "-" + ht]);
}, []), Qo = "beforeRead", Ko = "read", Zo = "afterRead", Jo = "beforeMain", ea = "main", ta = "afterMain", na = "beforeWrite", ra = "write", oa = "afterWrite", aa = [Qo, Ko, Zo, Jo, ea, ta, na, ra, oa];
function ke(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function we(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function tt(e) {
  var t = we(e).Element;
  return e instanceof t || e instanceof Element;
}
function fe(e) {
  var t = we(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function or(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = we(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ia(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !fe(s) || !ke(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(i) {
      var l = o[i];
      l === !1 ? s.removeAttribute(i) : s.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function sa(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], s = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = i.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !fe(o) || !ke(o) || (Object.assign(o.style, l), Object.keys(s).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
var ar = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ia,
  effect: sa,
  requires: ["computeStyles"]
};
function _e(e) {
  return e.split("-")[0];
}
var Ve = Math.max, It = Math.min, nt = Math.round;
function rt(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (fe(e) && t) {
    var s = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = nt(n.width) / i || 1), s > 0 && (o = nt(n.height) / s || 1);
  }
  return {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o
  };
}
function rn(e) {
  var t = rt(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ir(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && or(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function De(e) {
  return we(e).getComputedStyle(e);
}
function la(e) {
  return ["table", "td", "th"].indexOf(ke(e)) >= 0;
}
function Ge(e) {
  return ((tt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ht(e) {
  return ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (or(e) ? e.host : null) || Ge(e);
}
function On(e) {
  return !fe(e) || De(e).position === "fixed" ? null : e.offsetParent;
}
function ua(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && fe(e)) {
    var r = De(e);
    if (r.position === "fixed")
      return null;
  }
  for (var o = Ht(e); fe(o) && ["html", "body"].indexOf(ke(o)) < 0; ) {
    var s = De(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ot(e) {
  for (var t = we(e), n = On(e); n && la(n) && De(n).position === "static"; )
    n = On(n);
  return n && (ke(n) === "html" || ke(n) === "body" && De(n).position === "static") ? t : n || ua(e) || t;
}
function on(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dt(e, t, n) {
  return Ve(e, It(t, n));
}
function ca(e, t, n) {
  var r = dt(e, t, n);
  return r > n ? n : r;
}
function sr() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function lr(e) {
  return Object.assign({}, sr(), e);
}
function ur(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var da = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, lr(typeof t != "number" ? t : ur(t, xt));
};
function fa(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = _e(n.placement), u = on(l), d = [oe, ve].indexOf(l) >= 0, c = d ? "height" : "width";
  if (!(!s || !i)) {
    var m = da(o.padding, n), b = rn(s), x = u === "y" ? re : oe, O = u === "y" ? pe : ve, v = n.rects.reference[c] + n.rects.reference[u] - i[u] - n.rects.popper[c], C = i[u] - n.rects.reference[u], f = Ot(s), p = f ? u === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, _ = v / 2 - C / 2, a = m[x], w = p - b[c] - m[O], y = p / 2 - b[c] / 2 + _, h = dt(a, y, w), T = u;
    n.modifiersData[r] = (t = {}, t[T] = h, t.centerOffset = h - y, t);
  }
}
function pa(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !ir(t.elements.popper, o) || (t.elements.arrow = o));
}
var va = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: fa,
  effect: pa,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ot(e) {
  return e.split("-")[1];
}
var ga = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ha(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return {
    x: nt(t * o) / o || 0,
    y: nt(n * o) / o || 0
  };
}
function Cn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, i = e.offsets, l = e.position, u = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, m = e.isFixed, b = c === !0 ? ha(i) : typeof c == "function" ? c(i) : i, x = b.x, O = x === void 0 ? 0 : x, v = b.y, C = v === void 0 ? 0 : v, f = i.hasOwnProperty("x"), p = i.hasOwnProperty("y"), _ = oe, a = re, w = window;
  if (d) {
    var y = Ot(n), h = "clientHeight", T = "clientWidth";
    if (y === we(n) && (y = Ge(n), De(y).position !== "static" && l === "absolute" && (h = "scrollHeight", T = "scrollWidth")), y = y, o === re || (o === oe || o === ve) && s === ht) {
      a = pe;
      var B = m && w.visualViewport ? w.visualViewport.height : y[h];
      C -= B - r.height, C *= u ? 1 : -1;
    }
    if (o === oe || (o === re || o === pe) && s === ht) {
      _ = ve;
      var R = m && w.visualViewport ? w.visualViewport.width : y[T];
      O -= R - r.width, O *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: l
  }, d && ga);
  if (u) {
    var D;
    return Object.assign({}, A, (D = {}, D[a] = p ? "0" : "", D[_] = f ? "0" : "", D.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + O + "px, " + C + "px)" : "translate3d(" + O + "px, " + C + "px, 0)", D));
  }
  return Object.assign({}, A, (t = {}, t[a] = p ? C + "px" : "", t[_] = f ? O + "px" : "", t.transform = "", t));
}
function ma(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, i = s === void 0 ? !0 : s, l = n.roundOffsets, u = l === void 0 ? !0 : l, d = {
    placement: _e(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Cn(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Cn(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var ya = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ma,
  data: {}
}, Mt = {
  passive: !0
};
function ba(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, i = r.resize, l = i === void 0 ? !0 : i, u = we(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && d.forEach(function(c) {
    c.addEventListener("scroll", n.update, Mt);
  }), l && u.addEventListener("resize", n.update, Mt), function() {
    s && d.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Mt);
    }), l && u.removeEventListener("resize", n.update, Mt);
  };
}
var wa = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ba,
  data: {}
}, xa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return xa[t];
  });
}
var Oa = {
  start: "end",
  end: "start"
};
function _n(e) {
  return e.replace(/start|end/g, function(t) {
    return Oa[t];
  });
}
function an(e) {
  var t = we(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function sn(e) {
  return rt(Ge(e)).left + an(e).scrollLeft;
}
function Ca(e) {
  var t = we(e), n = Ge(e), r = t.visualViewport, o = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, l = r.offsetTop)), {
    width: o,
    height: s,
    x: i + sn(e),
    y: l
  };
}
function _a(e) {
  var t, n = Ge(e), r = an(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ve(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Ve(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + sn(e), u = -r.scrollTop;
  return De(o || n).direction === "rtl" && (l += Ve(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: l,
    y: u
  };
}
function ln(e) {
  var t = De(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function cr(e) {
  return ["html", "body", "#document"].indexOf(ke(e)) >= 0 ? e.ownerDocument.body : fe(e) && ln(e) ? e : cr(Ht(e));
}
function ft(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = cr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = we(r), i = o ? [s].concat(s.visualViewport || [], ln(r) ? r : []) : r, l = t.concat(i);
  return o ? l : l.concat(ft(Ht(i)));
}
function Xt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ta(e) {
  var t = rt(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Tn(e, t) {
  return t === nr ? Xt(Ca(e)) : tt(t) ? Ta(t) : Xt(_a(Ge(e)));
}
function ka(e) {
  var t = ft(Ht(e)), n = ["absolute", "fixed"].indexOf(De(e).position) >= 0, r = n && fe(e) ? Ot(e) : e;
  return tt(r) ? t.filter(function(o) {
    return tt(o) && ir(o, r) && ke(o) !== "body" && (n ? De(o).position !== "static" : !0);
  }) : [];
}
function Da(e, t, n) {
  var r = t === "clippingParents" ? ka(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], i = o.reduce(function(l, u) {
    var d = Tn(e, u);
    return l.top = Ve(d.top, l.top), l.right = It(d.right, l.right), l.bottom = It(d.bottom, l.bottom), l.left = Ve(d.left, l.left), l;
  }, Tn(e, s));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function dr(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? _e(r) : null, s = r ? ot(r) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case re:
      u = {
        x: i,
        y: t.y - n.height
      };
      break;
    case pe:
      u = {
        x: i,
        y: t.y + t.height
      };
      break;
    case ve:
      u = {
        x: t.x + t.width,
        y: l
      };
      break;
    case oe:
      u = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? on(o) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (s) {
      case et:
        u[d] = u[d] - (t[c] / 2 - n[c] / 2);
        break;
      case ht:
        u[d] = u[d] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function mt(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.boundary, i = s === void 0 ? qo : s, l = n.rootBoundary, u = l === void 0 ? nr : l, d = n.elementContext, c = d === void 0 ? ct : d, m = n.altBoundary, b = m === void 0 ? !1 : m, x = n.padding, O = x === void 0 ? 0 : x, v = lr(typeof O != "number" ? O : ur(O, xt)), C = c === ct ? Xo : ct, f = e.rects.popper, p = e.elements[b ? C : c], _ = Da(tt(p) ? p : p.contextElement || Ge(e.elements.popper), i, u), a = rt(e.elements.reference), w = dr({
    reference: a,
    element: f,
    strategy: "absolute",
    placement: o
  }), y = Xt(Object.assign({}, f, w)), h = c === ct ? y : a, T = {
    top: _.top - h.top + v.top,
    bottom: h.bottom - _.bottom + v.bottom,
    left: _.left - h.left + v.left,
    right: h.right - _.right + v.right
  }, B = e.modifiersData.offset;
  if (c === ct && B) {
    var R = B[o];
    Object.keys(T).forEach(function(A) {
      var D = [ve, pe].indexOf(A) >= 0 ? 1 : -1, H = [re, pe].indexOf(A) >= 0 ? "y" : "x";
      T[A] += R[H] * D;
    });
  }
  return T;
}
function Ea(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, d = u === void 0 ? rr : u, c = ot(r), m = c ? l ? xn : xn.filter(function(O) {
    return ot(O) === c;
  }) : xt, b = m.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  b.length === 0 && (b = m);
  var x = b.reduce(function(O, v) {
    return O[v] = mt(e, {
      placement: v,
      boundary: o,
      rootBoundary: s,
      padding: i
    })[_e(v)], O;
  }, {});
  return Object.keys(x).sort(function(O, v) {
    return x[O] - x[v];
  });
}
function Sa(e) {
  if (_e(e) === nn)
    return [];
  var t = Rt(e);
  return [_n(e), t, _n(t)];
}
function Aa(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, i = n.altAxis, l = i === void 0 ? !0 : i, u = n.fallbackPlacements, d = n.padding, c = n.boundary, m = n.rootBoundary, b = n.altBoundary, x = n.flipVariations, O = x === void 0 ? !0 : x, v = n.allowedAutoPlacements, C = t.options.placement, f = _e(C), p = f === C, _ = u || (p || !O ? [Rt(C)] : Sa(C)), a = [C].concat(_).reduce(function(ge, ae) {
      return ge.concat(_e(ae) === nn ? Ea(t, {
        placement: ae,
        boundary: c,
        rootBoundary: m,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: v
      }) : ae);
    }, []), w = t.rects.reference, y = t.rects.popper, h = /* @__PURE__ */ new Map(), T = !0, B = a[0], R = 0; R < a.length; R++) {
      var A = a[R], D = _e(A), H = ot(A) === et, j = [re, pe].indexOf(D) >= 0, W = j ? "width" : "height", N = mt(t, {
        placement: A,
        boundary: c,
        rootBoundary: m,
        altBoundary: b,
        padding: d
      }), z = j ? H ? ve : oe : H ? pe : re;
      w[W] > y[W] && (z = Rt(z));
      var G = Rt(z), V = [];
      if (s && V.push(N[D] <= 0), l && V.push(N[z] <= 0, N[G] <= 0), V.every(function(ge) {
        return ge;
      })) {
        B = A, T = !1;
        break;
      }
      h.set(A, V);
    }
    if (T)
      for (var X = O ? 3 : 1, se = function(ae) {
        var he = a.find(function(Se) {
          var ie = h.get(Se);
          if (ie)
            return ie.slice(0, ae).every(function(Oe) {
              return Oe;
            });
        });
        if (he)
          return B = he, "break";
      }, le = X; le > 0; le--) {
        var Ee = se(le);
        if (Ee === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
var Ma = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Aa,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function kn(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Dn(e) {
  return [re, ve, pe, oe].some(function(t) {
    return e[t] >= 0;
  });
}
function Pa(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, i = mt(t, {
    elementContext: "reference"
  }), l = mt(t, {
    altBoundary: !0
  }), u = kn(i, r), d = kn(l, o, s), c = Dn(u), m = Dn(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": m
  });
}
var $a = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Pa
};
function Ba(e, t, n) {
  var r = _e(e), o = [oe, re].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = s[0], l = s[1];
  return i = i || 0, l = (l || 0) * o, [oe, ve].indexOf(r) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function La(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, i = rr.reduce(function(c, m) {
    return c[m] = Ba(m, t.rects, s), c;
  }, {}), l = i[t.placement], u = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i;
}
var Ra = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: La
};
function Ia(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = dr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var ja = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ia,
  data: {}
};
function Ha(e) {
  return e === "x" ? "y" : "x";
}
function Ga(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, i = n.altAxis, l = i === void 0 ? !1 : i, u = n.boundary, d = n.rootBoundary, c = n.altBoundary, m = n.padding, b = n.tether, x = b === void 0 ? !0 : b, O = n.tetherOffset, v = O === void 0 ? 0 : O, C = mt(t, {
    boundary: u,
    rootBoundary: d,
    padding: m,
    altBoundary: c
  }), f = _e(t.placement), p = ot(t.placement), _ = !p, a = on(f), w = Ha(a), y = t.modifiersData.popperOffsets, h = t.rects.reference, T = t.rects.popper, B = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, R = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (s) {
      var H, j = a === "y" ? re : oe, W = a === "y" ? pe : ve, N = a === "y" ? "height" : "width", z = y[a], G = z + C[j], V = z - C[W], X = x ? -T[N] / 2 : 0, se = p === et ? h[N] : T[N], le = p === et ? -T[N] : -h[N], Ee = t.elements.arrow, ge = x && Ee ? rn(Ee) : {
        width: 0,
        height: 0
      }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sr(), he = ae[j], Se = ae[W], ie = dt(0, h[N], ge[N]), Oe = _ ? h[N] / 2 - X - ie - he - R.mainAxis : se - ie - he - R.mainAxis, ue = _ ? -h[N] / 2 + X + ie + Se + R.mainAxis : le + ie + Se + R.mainAxis, me = t.elements.arrow && Ot(t.elements.arrow), $e = me ? a === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, Ae = (H = A == null ? void 0 : A[a]) != null ? H : 0, Be = z + Oe - Ae - $e, Le = z + ue - Ae, Ke = dt(x ? It(G, Be) : G, z, x ? Ve(V, Le) : V);
      y[a] = Ke, D[a] = Ke - z;
    }
    if (l) {
      var st, Ct = a === "x" ? re : oe, _t = a === "x" ? pe : ve, Me = y[w], Re = w === "y" ? "height" : "width", lt = Me + C[Ct], Ye = Me - C[_t], ut = [re, oe].indexOf(f) !== -1, Tt = (st = A == null ? void 0 : A[w]) != null ? st : 0, kt = ut ? lt : Me - h[Re] - T[Re] - Tt + R.altAxis, Dt = ut ? Me + h[Re] + T[Re] - Tt - R.altAxis : Ye, Et = x && ut ? ca(kt, Me, Dt) : dt(x ? kt : lt, Me, x ? Dt : Ye);
      y[w] = Et, D[w] = Et - Me;
    }
    t.modifiersData[r] = D;
  }
}
var Ya = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ga,
  requiresIfExists: ["offset"]
};
function Ua(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Wa(e) {
  return e === we(e) || !fe(e) ? an(e) : Ua(e);
}
function za(e) {
  var t = e.getBoundingClientRect(), n = nt(t.width) / e.offsetWidth || 1, r = nt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Fa(e, t, n) {
  n === void 0 && (n = !1);
  var r = fe(t), o = fe(t) && za(t), s = Ge(t), i = rt(e, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ke(t) !== "body" || ln(s)) && (l = Wa(t)), fe(t) ? (u = rt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = sn(s))), {
    x: i.left + l.scrollLeft - u.x,
    y: i.top + l.scrollTop - u.y,
    width: i.width,
    height: i.height
  };
}
function Na(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && o(u);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || o(s);
  }), r;
}
function Va(e) {
  var t = Na(e);
  return aa.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function qa(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Xa(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var En = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Sn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Qa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? En : o;
  return function(l, u, d) {
    d === void 0 && (d = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, En, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: u
      },
      attributes: {},
      styles: {}
    }, m = [], b = !1, x = {
      state: c,
      setOptions: function(f) {
        var p = typeof f == "function" ? f(c.options) : f;
        v(), c.options = Object.assign({}, s, c.options, p), c.scrollParents = {
          reference: tt(l) ? ft(l) : l.contextElement ? ft(l.contextElement) : [],
          popper: ft(u)
        };
        var _ = Va(Xa([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = _.filter(function(a) {
          return a.enabled;
        }), O(), x.update();
      },
      forceUpdate: function() {
        if (!b) {
          var f = c.elements, p = f.reference, _ = f.popper;
          if (!!Sn(p, _)) {
            c.rects = {
              reference: Fa(p, Ot(_), c.options.strategy === "fixed"),
              popper: rn(_)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var a = 0; a < c.orderedModifiers.length; a++) {
              if (c.reset === !0) {
                c.reset = !1, a = -1;
                continue;
              }
              var w = c.orderedModifiers[a], y = w.fn, h = w.options, T = h === void 0 ? {} : h, B = w.name;
              typeof y == "function" && (c = y({
                state: c,
                options: T,
                name: B,
                instance: x
              }) || c);
            }
          }
        }
      },
      update: qa(function() {
        return new Promise(function(C) {
          x.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        v(), b = !0;
      }
    };
    if (!Sn(l, u))
      return x;
    x.setOptions(d).then(function(C) {
      !b && d.onFirstUpdate && d.onFirstUpdate(C);
    });
    function O() {
      c.orderedModifiers.forEach(function(C) {
        var f = C.name, p = C.options, _ = p === void 0 ? {} : p, a = C.effect;
        if (typeof a == "function") {
          var w = a({
            state: c,
            name: f,
            instance: x,
            options: _
          }), y = function() {
          };
          m.push(w || y);
        }
      });
    }
    function v() {
      m.forEach(function(C) {
        return C();
      }), m = [];
    }
    return x;
  };
}
var Ka = [wa, ja, ya, ar, Ra, Ma, Ya, va, $a], Za = /* @__PURE__ */ Qa({
  defaultModifiers: Ka
}), Ja = "tippy-box", fr = "tippy-content", pr = "tippy-backdrop", vr = "tippy-arrow", gr = "tippy-svg-arrow", We = {
  passive: !0,
  capture: !0
}, hr = function() {
  return document.body;
};
function Wt(e, t, n) {
  if (Array.isArray(e)) {
    var r = e[t];
    return r == null ? Array.isArray(n) ? n[t] : n : r;
  }
  return e;
}
function un(e, t) {
  var n = {}.toString.call(e);
  return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
}
function mr(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function An(e, t) {
  if (t === 0)
    return e;
  var n;
  return function(r) {
    clearTimeout(n), n = setTimeout(function() {
      e(r);
    }, t);
  };
}
function ei(e, t) {
  var n = Object.assign({}, e);
  return t.forEach(function(r) {
    delete n[r];
  }), n;
}
function ti(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Fe(e) {
  return [].concat(e);
}
function Mn(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ni(e) {
  return e.filter(function(t, n) {
    return e.indexOf(t) === n;
  });
}
function yr(e) {
  return e.split("-")[0];
}
function at(e) {
  return [].slice.call(e);
}
function Pn(e) {
  return Object.keys(e).reduce(function(t, n) {
    return e[n] !== void 0 && (t[n] = e[n]), t;
  }, {});
}
function qe() {
  return document.createElement("div");
}
function Gt(e) {
  return ["Element", "Fragment"].some(function(t) {
    return un(e, t);
  });
}
function ri(e) {
  return un(e, "NodeList");
}
function cn(e) {
  return un(e, "MouseEvent");
}
function oi(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function ai(e) {
  return Gt(e) ? [e] : ri(e) ? at(e) : Array.isArray(e) ? e : at(document.querySelectorAll(e));
}
function zt(e, t) {
  e.forEach(function(n) {
    n && (n.style.transitionDuration = t + "ms");
  });
}
function yt(e, t) {
  e.forEach(function(n) {
    n && n.setAttribute("data-state", t);
  });
}
function br(e) {
  var t, n = Fe(e), r = n[0];
  return r != null && (t = r.ownerDocument) != null && t.body ? r.ownerDocument : document;
}
function ii(e, t) {
  var n = t.clientX, r = t.clientY;
  return e.every(function(o) {
    var s = o.popperRect, i = o.popperState, l = o.props, u = l.interactiveBorder, d = yr(i.placement), c = i.modifiersData.offset;
    if (!c)
      return !0;
    var m = d === "bottom" ? c.top.y : 0, b = d === "top" ? c.bottom.y : 0, x = d === "right" ? c.left.x : 0, O = d === "left" ? c.right.x : 0, v = s.top - r + m > u, C = r - s.bottom - b > u, f = s.left - n + x > u, p = n - s.right - O > u;
    return v || C || f || p;
  });
}
function Ft(e, t, n) {
  var r = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    e[r](o, n);
  });
}
function $n(e, t) {
  for (var n = t; n; ) {
    var r;
    if (e.contains(n))
      return !0;
    n = n.getRootNode == null || (r = n.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Ce = {
  isTouch: !1
}, Bn = 0;
function si() {
  Ce.isTouch || (Ce.isTouch = !0, window.performance && document.addEventListener("mousemove", wr));
}
function wr() {
  var e = performance.now();
  e - Bn < 20 && (Ce.isTouch = !1, document.removeEventListener("mousemove", wr)), Bn = e;
}
function li() {
  var e = document.activeElement;
  if (oi(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function ui() {
  document.addEventListener("touchstart", si, We), window.addEventListener("blur", li);
}
var ci = typeof window < "u" && typeof document < "u", di = ci ? !!window.msCrypto : !1, fi = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, pi = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, ye = Object.assign({
  appendTo: hr,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, fi, pi), vi = Object.keys(ye), gi = function(t) {
  var n = Object.keys(t);
  n.forEach(function(r) {
    ye[r] = t[r];
  });
};
function xr(e) {
  var t = e.plugins || [], n = t.reduce(function(r, o) {
    var s = o.name, i = o.defaultValue;
    if (s) {
      var l;
      r[s] = e[s] !== void 0 ? e[s] : (l = ye[s]) != null ? l : i;
    }
    return r;
  }, {});
  return Object.assign({}, e, n);
}
function hi(e, t) {
  var n = t ? Object.keys(xr(Object.assign({}, ye, {
    plugins: t
  }))) : vi, r = n.reduce(function(o, s) {
    var i = (e.getAttribute("data-tippy-" + s) || "").trim();
    if (!i)
      return o;
    if (s === "content")
      o[s] = i;
    else
      try {
        o[s] = JSON.parse(i);
      } catch {
        o[s] = i;
      }
    return o;
  }, {});
  return r;
}
function Ln(e, t) {
  var n = Object.assign({}, t, {
    content: mr(t.content, [e])
  }, t.ignoreAttributes ? {} : hi(e, t.plugins));
  return n.aria = Object.assign({}, ye.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
  }, n;
}
var mi = function() {
  return "innerHTML";
};
function Qt(e, t) {
  e[mi()] = t;
}
function Rn(e) {
  var t = qe();
  return e === !0 ? t.className = vr : (t.className = gr, Gt(e) ? t.appendChild(e) : Qt(t, e)), t;
}
function In(e, t) {
  Gt(t.content) ? (Qt(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Qt(e, t.content) : e.textContent = t.content);
}
function jt(e) {
  var t = e.firstElementChild, n = at(t.children);
  return {
    box: t,
    content: n.find(function(r) {
      return r.classList.contains(fr);
    }),
    arrow: n.find(function(r) {
      return r.classList.contains(vr) || r.classList.contains(gr);
    }),
    backdrop: n.find(function(r) {
      return r.classList.contains(pr);
    })
  };
}
function Or(e) {
  var t = qe(), n = qe();
  n.className = Ja, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = qe();
  r.className = fr, r.setAttribute("data-state", "hidden"), In(r, e.props), t.appendChild(n), n.appendChild(r), o(e.props, e.props);
  function o(s, i) {
    var l = jt(t), u = l.box, d = l.content, c = l.arrow;
    i.theme ? u.setAttribute("data-theme", i.theme) : u.removeAttribute("data-theme"), typeof i.animation == "string" ? u.setAttribute("data-animation", i.animation) : u.removeAttribute("data-animation"), i.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof i.maxWidth == "number" ? i.maxWidth + "px" : i.maxWidth, i.role ? u.setAttribute("role", i.role) : u.removeAttribute("role"), (s.content !== i.content || s.allowHTML !== i.allowHTML) && In(d, e.props), i.arrow ? c ? s.arrow !== i.arrow && (u.removeChild(c), u.appendChild(Rn(i.arrow))) : u.appendChild(Rn(i.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: o
  };
}
Or.$$tippy = !0;
var yi = 1, Pt = [], Nt = [];
function bi(e, t) {
  var n = Ln(e, Object.assign({}, ye, xr(Pn(t)))), r, o, s, i = !1, l = !1, u = !1, d = !1, c, m, b, x = [], O = An(Be, n.interactiveDebounce), v, C = yi++, f = null, p = ni(n.plugins), _ = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, a = {
    id: C,
    reference: e,
    popper: qe(),
    popperInstance: f,
    props: n,
    state: _,
    plugins: p,
    clearDelayTimeouts: kt,
    setProps: Dt,
    setContent: Et,
    show: Tr,
    hide: kr,
    hideWithInteractivity: Dr,
    enable: ut,
    disable: Tt,
    unmount: Er,
    destroy: Sr
  };
  if (!n.render)
    return a;
  var w = n.render(a), y = w.popper, h = w.onUpdate;
  y.setAttribute("data-tippy-root", ""), y.id = "tippy-" + a.id, a.popper = y, e._tippy = a, y._tippy = a;
  var T = p.map(function(g) {
    return g.fn(a);
  }), B = e.hasAttribute("aria-expanded");
  return me(), X(), z(), G("onCreate", [a]), n.showOnCreate && lt(), y.addEventListener("mouseenter", function() {
    a.props.interactive && a.state.isVisible && a.clearDelayTimeouts();
  }), y.addEventListener("mouseleave", function() {
    a.props.interactive && a.props.trigger.indexOf("mouseenter") >= 0 && j().addEventListener("mousemove", O);
  }), a;
  function R() {
    var g = a.props.touch;
    return Array.isArray(g) ? g : [g, 0];
  }
  function A() {
    return R()[0] === "hold";
  }
  function D() {
    var g;
    return !!((g = a.props.render) != null && g.$$tippy);
  }
  function H() {
    return v || e;
  }
  function j() {
    var g = H().parentNode;
    return g ? br(g) : document;
  }
  function W() {
    return jt(y);
  }
  function N(g) {
    return a.state.isMounted && !a.state.isVisible || Ce.isTouch || c && c.type === "focus" ? 0 : Wt(a.props.delay, g ? 0 : 1, ye.delay);
  }
  function z(g) {
    g === void 0 && (g = !1), y.style.pointerEvents = a.props.interactive && !g ? "" : "none", y.style.zIndex = "" + a.props.zIndex;
  }
  function G(g, k, M) {
    if (M === void 0 && (M = !0), T.forEach(function(I) {
      I[g] && I[g].apply(I, k);
    }), M) {
      var Y;
      (Y = a.props)[g].apply(Y, k);
    }
  }
  function V() {
    var g = a.props.aria;
    if (!!g.content) {
      var k = "aria-" + g.content, M = y.id, Y = Fe(a.props.triggerTarget || e);
      Y.forEach(function(I) {
        var K = I.getAttribute(k);
        if (a.state.isVisible)
          I.setAttribute(k, K ? K + " " + M : M);
        else {
          var ce = K && K.replace(M, "").trim();
          ce ? I.setAttribute(k, ce) : I.removeAttribute(k);
        }
      });
    }
  }
  function X() {
    if (!(B || !a.props.aria.expanded)) {
      var g = Fe(a.props.triggerTarget || e);
      g.forEach(function(k) {
        a.props.interactive ? k.setAttribute("aria-expanded", a.state.isVisible && k === H() ? "true" : "false") : k.removeAttribute("aria-expanded");
      });
    }
  }
  function se() {
    j().removeEventListener("mousemove", O), Pt = Pt.filter(function(g) {
      return g !== O;
    });
  }
  function le(g) {
    if (!(Ce.isTouch && (u || g.type === "mousedown"))) {
      var k = g.composedPath && g.composedPath()[0] || g.target;
      if (!(a.props.interactive && $n(y, k))) {
        if (Fe(a.props.triggerTarget || e).some(function(M) {
          return $n(M, k);
        })) {
          if (Ce.isTouch || a.state.isVisible && a.props.trigger.indexOf("click") >= 0)
            return;
        } else
          G("onClickOutside", [a, g]);
        a.props.hideOnClick === !0 && (a.clearDelayTimeouts(), a.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), a.state.isMounted || he());
      }
    }
  }
  function Ee() {
    u = !0;
  }
  function ge() {
    u = !1;
  }
  function ae() {
    var g = j();
    g.addEventListener("mousedown", le, !0), g.addEventListener("touchend", le, We), g.addEventListener("touchstart", ge, We), g.addEventListener("touchmove", Ee, We);
  }
  function he() {
    var g = j();
    g.removeEventListener("mousedown", le, !0), g.removeEventListener("touchend", le, We), g.removeEventListener("touchstart", ge, We), g.removeEventListener("touchmove", Ee, We);
  }
  function Se(g, k) {
    Oe(g, function() {
      !a.state.isVisible && y.parentNode && y.parentNode.contains(y) && k();
    });
  }
  function ie(g, k) {
    Oe(g, k);
  }
  function Oe(g, k) {
    var M = W().box;
    function Y(I) {
      I.target === M && (Ft(M, "remove", Y), k());
    }
    if (g === 0)
      return k();
    Ft(M, "remove", m), Ft(M, "add", Y), m = Y;
  }
  function ue(g, k, M) {
    M === void 0 && (M = !1);
    var Y = Fe(a.props.triggerTarget || e);
    Y.forEach(function(I) {
      I.addEventListener(g, k, M), x.push({
        node: I,
        eventType: g,
        handler: k,
        options: M
      });
    });
  }
  function me() {
    A() && (ue("touchstart", Ae, {
      passive: !0
    }), ue("touchend", Le, {
      passive: !0
    })), ti(a.props.trigger).forEach(function(g) {
      if (g !== "manual")
        switch (ue(g, Ae), g) {
          case "mouseenter":
            ue("mouseleave", Le);
            break;
          case "focus":
            ue(di ? "focusout" : "blur", Ke);
            break;
          case "focusin":
            ue("focusout", Ke);
            break;
        }
    });
  }
  function $e() {
    x.forEach(function(g) {
      var k = g.node, M = g.eventType, Y = g.handler, I = g.options;
      k.removeEventListener(M, Y, I);
    }), x = [];
  }
  function Ae(g) {
    var k, M = !1;
    if (!(!a.state.isEnabled || st(g) || l)) {
      var Y = ((k = c) == null ? void 0 : k.type) === "focus";
      c = g, v = g.currentTarget, X(), !a.state.isVisible && cn(g) && Pt.forEach(function(I) {
        return I(g);
      }), g.type === "click" && (a.props.trigger.indexOf("mouseenter") < 0 || i) && a.props.hideOnClick !== !1 && a.state.isVisible ? M = !0 : lt(g), g.type === "click" && (i = !M), M && !Y && Ye(g);
    }
  }
  function Be(g) {
    var k = g.target, M = H().contains(k) || y.contains(k);
    if (!(g.type === "mousemove" && M)) {
      var Y = Re().concat(y).map(function(I) {
        var K, ce = I._tippy, Ze = (K = ce.popperInstance) == null ? void 0 : K.state;
        return Ze ? {
          popperRect: I.getBoundingClientRect(),
          popperState: Ze,
          props: n
        } : null;
      }).filter(Boolean);
      ii(Y, g) && (se(), Ye(g));
    }
  }
  function Le(g) {
    var k = st(g) || a.props.trigger.indexOf("click") >= 0 && i;
    if (!k) {
      if (a.props.interactive) {
        a.hideWithInteractivity(g);
        return;
      }
      Ye(g);
    }
  }
  function Ke(g) {
    a.props.trigger.indexOf("focusin") < 0 && g.target !== H() || a.props.interactive && g.relatedTarget && y.contains(g.relatedTarget) || Ye(g);
  }
  function st(g) {
    return Ce.isTouch ? A() !== g.type.indexOf("touch") >= 0 : !1;
  }
  function Ct() {
    _t();
    var g = a.props, k = g.popperOptions, M = g.placement, Y = g.offset, I = g.getReferenceClientRect, K = g.moveTransition, ce = D() ? jt(y).arrow : null, Ze = I ? {
      getBoundingClientRect: I,
      contextElement: I.contextElement || H()
    } : e, dn = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(St) {
        var Je = St.state;
        if (D()) {
          var Ar = W(), Ut = Ar.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(At) {
            At === "placement" ? Ut.setAttribute("data-placement", Je.placement) : Je.attributes.popper["data-popper-" + At] ? Ut.setAttribute("data-" + At, "") : Ut.removeAttribute("data-" + At);
          }), Je.attributes.popper = {};
        }
      }
    }, Ue = [{
      name: "offset",
      options: {
        offset: Y
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !K
      }
    }, dn];
    D() && ce && Ue.push({
      name: "arrow",
      options: {
        element: ce,
        padding: 3
      }
    }), Ue.push.apply(Ue, (k == null ? void 0 : k.modifiers) || []), a.popperInstance = Za(Ze, y, Object.assign({}, k, {
      placement: M,
      onFirstUpdate: b,
      modifiers: Ue
    }));
  }
  function _t() {
    a.popperInstance && (a.popperInstance.destroy(), a.popperInstance = null);
  }
  function Me() {
    var g = a.props.appendTo, k, M = H();
    a.props.interactive && g === hr || g === "parent" ? k = M.parentNode : k = mr(g, [M]), k.contains(y) || k.appendChild(y), a.state.isMounted = !0, Ct();
  }
  function Re() {
    return at(y.querySelectorAll("[data-tippy-root]"));
  }
  function lt(g) {
    a.clearDelayTimeouts(), g && G("onTrigger", [a, g]), ae();
    var k = N(!0), M = R(), Y = M[0], I = M[1];
    Ce.isTouch && Y === "hold" && I && (k = I), k ? r = setTimeout(function() {
      a.show();
    }, k) : a.show();
  }
  function Ye(g) {
    if (a.clearDelayTimeouts(), G("onUntrigger", [a, g]), !a.state.isVisible) {
      he();
      return;
    }
    if (!(a.props.trigger.indexOf("mouseenter") >= 0 && a.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(g.type) >= 0 && i)) {
      var k = N(!1);
      k ? o = setTimeout(function() {
        a.state.isVisible && a.hide();
      }, k) : s = requestAnimationFrame(function() {
        a.hide();
      });
    }
  }
  function ut() {
    a.state.isEnabled = !0;
  }
  function Tt() {
    a.hide(), a.state.isEnabled = !1;
  }
  function kt() {
    clearTimeout(r), clearTimeout(o), cancelAnimationFrame(s);
  }
  function Dt(g) {
    if (!a.state.isDestroyed) {
      G("onBeforeUpdate", [a, g]), $e();
      var k = a.props, M = Ln(e, Object.assign({}, k, Pn(g), {
        ignoreAttributes: !0
      }));
      a.props = M, me(), k.interactiveDebounce !== M.interactiveDebounce && (se(), O = An(Be, M.interactiveDebounce)), k.triggerTarget && !M.triggerTarget ? Fe(k.triggerTarget).forEach(function(Y) {
        Y.removeAttribute("aria-expanded");
      }) : M.triggerTarget && e.removeAttribute("aria-expanded"), X(), z(), h && h(k, M), a.popperInstance && (Ct(), Re().forEach(function(Y) {
        requestAnimationFrame(Y._tippy.popperInstance.forceUpdate);
      })), G("onAfterUpdate", [a, g]);
    }
  }
  function Et(g) {
    a.setProps({
      content: g
    });
  }
  function Tr() {
    var g = a.state.isVisible, k = a.state.isDestroyed, M = !a.state.isEnabled, Y = Ce.isTouch && !a.props.touch, I = Wt(a.props.duration, 0, ye.duration);
    if (!(g || k || M || Y) && !H().hasAttribute("disabled") && (G("onShow", [a], !1), a.props.onShow(a) !== !1)) {
      if (a.state.isVisible = !0, D() && (y.style.visibility = "visible"), z(), ae(), a.state.isMounted || (y.style.transition = "none"), D()) {
        var K = W(), ce = K.box, Ze = K.content;
        zt([ce, Ze], 0);
      }
      b = function() {
        var Ue;
        if (!(!a.state.isVisible || d)) {
          if (d = !0, y.offsetHeight, y.style.transition = a.props.moveTransition, D() && a.props.animation) {
            var Yt = W(), St = Yt.box, Je = Yt.content;
            zt([St, Je], I), yt([St, Je], "visible");
          }
          V(), X(), Mn(Nt, a), (Ue = a.popperInstance) == null || Ue.forceUpdate(), G("onMount", [a]), a.props.animation && D() && ie(I, function() {
            a.state.isShown = !0, G("onShown", [a]);
          });
        }
      }, Me();
    }
  }
  function kr() {
    var g = !a.state.isVisible, k = a.state.isDestroyed, M = !a.state.isEnabled, Y = Wt(a.props.duration, 1, ye.duration);
    if (!(g || k || M) && (G("onHide", [a], !1), a.props.onHide(a) !== !1)) {
      if (a.state.isVisible = !1, a.state.isShown = !1, d = !1, i = !1, D() && (y.style.visibility = "hidden"), se(), he(), z(!0), D()) {
        var I = W(), K = I.box, ce = I.content;
        a.props.animation && (zt([K, ce], Y), yt([K, ce], "hidden"));
      }
      V(), X(), a.props.animation ? D() && Se(Y, a.unmount) : a.unmount();
    }
  }
  function Dr(g) {
    j().addEventListener("mousemove", O), Mn(Pt, O), O(g);
  }
  function Er() {
    a.state.isVisible && a.hide(), a.state.isMounted && (_t(), Re().forEach(function(g) {
      g._tippy.unmount();
    }), y.parentNode && y.parentNode.removeChild(y), Nt = Nt.filter(function(g) {
      return g !== a;
    }), a.state.isMounted = !1, G("onHidden", [a]));
  }
  function Sr() {
    a.state.isDestroyed || (a.clearDelayTimeouts(), a.unmount(), $e(), delete e._tippy, a.state.isDestroyed = !0, G("onDestroy", [a]));
  }
}
function E(e, t) {
  t === void 0 && (t = {});
  var n = ye.plugins.concat(t.plugins || []);
  ui();
  var r = Object.assign({}, t, {
    plugins: n
  }), o = ai(e), s = o.reduce(function(i, l) {
    var u = l && bi(l, r);
    return u && i.push(u), i;
  }, []);
  return Gt(e) ? s[0] : s;
}
E.defaultProps = ye;
E.setDefaultProps = gi;
E.currentInput = Ce;
var wi = Object.assign({}, ar, {
  effect: function(t) {
    var n = t.state, r = {
      popper: {
        position: n.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow);
  }
}), xi = function(t, n) {
  var r;
  n === void 0 && (n = {});
  var o = t, s = [], i = [], l, u = n.overrides, d = [], c = !1;
  function m() {
    i = o.map(function(a) {
      return Fe(a.props.triggerTarget || a.reference);
    }).reduce(function(a, w) {
      return a.concat(w);
    }, []);
  }
  function b() {
    s = o.map(function(a) {
      return a.reference;
    });
  }
  function x(a) {
    o.forEach(function(w) {
      a ? w.enable() : w.disable();
    });
  }
  function O(a) {
    return o.map(function(w) {
      var y = w.setProps;
      return w.setProps = function(h) {
        y(h), w.reference === l && a.setProps(h);
      }, function() {
        w.setProps = y;
      };
    });
  }
  function v(a, w) {
    var y = i.indexOf(w);
    if (w !== l) {
      l = w;
      var h = (u || []).concat("content").reduce(function(T, B) {
        return T[B] = o[y].props[B], T;
      }, {});
      a.setProps(Object.assign({}, h, {
        getReferenceClientRect: typeof h.getReferenceClientRect == "function" ? h.getReferenceClientRect : function() {
          var T;
          return (T = s[y]) == null ? void 0 : T.getBoundingClientRect();
        }
      }));
    }
  }
  x(!1), b(), m();
  var C = {
    fn: function() {
      return {
        onDestroy: function() {
          x(!0);
        },
        onHidden: function() {
          l = null;
        },
        onClickOutside: function(y) {
          y.props.showOnCreate && !c && (c = !0, l = null);
        },
        onShow: function(y) {
          y.props.showOnCreate && !c && (c = !0, v(y, s[0]));
        },
        onTrigger: function(y, h) {
          v(y, h.currentTarget);
        }
      };
    }
  }, f = E(qe(), Object.assign({}, ei(n, ["overrides"]), {
    plugins: [C].concat(n.plugins || []),
    triggerTarget: i,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((r = n.popperOptions) == null ? void 0 : r.modifiers) || [], [wi])
    })
  })), p = f.show;
  f.show = function(a) {
    if (p(), !l && a == null)
      return v(f, s[0]);
    if (!(l && a == null)) {
      if (typeof a == "number")
        return s[a] && v(f, s[a]);
      if (o.indexOf(a) >= 0) {
        var w = a.reference;
        return v(f, w);
      }
      if (s.indexOf(a) >= 0)
        return v(f, a);
    }
  }, f.showNext = function() {
    var a = s[0];
    if (!l)
      return f.show(0);
    var w = s.indexOf(l);
    f.show(s[w + 1] || a);
  }, f.showPrevious = function() {
    var a = s[s.length - 1];
    if (!l)
      return f.show(a);
    var w = s.indexOf(l), y = s[w - 1] || a;
    f.show(y);
  };
  var _ = f.setProps;
  return f.setProps = function(a) {
    u = a.overrides || u, _(a);
  }, f.setInstances = function(a) {
    x(!0), d.forEach(function(w) {
      return w();
    }), o = a, x(!1), b(), m(), d = O(f), f.setProps({
      triggerTarget: i
    });
  }, d = O(f), f;
}, Oi = {
  name: "animateFill",
  defaultValue: !1,
  fn: function(t) {
    var n;
    if (!((n = t.props.render) != null && n.$$tippy))
      return {};
    var r = jt(t.popper), o = r.box, s = r.content, i = t.props.animateFill ? Ci() : null;
    return {
      onCreate: function() {
        i && (o.insertBefore(i, o.firstElementChild), o.setAttribute("data-animatefill", ""), o.style.overflow = "hidden", t.setProps({
          arrow: !1,
          animation: "shift-away"
        }));
      },
      onMount: function() {
        if (i) {
          var u = o.style.transitionDuration, d = Number(u.replace("ms", ""));
          s.style.transitionDelay = Math.round(d / 10) + "ms", i.style.transitionDuration = u, yt([i], "visible");
        }
      },
      onShow: function() {
        i && (i.style.transitionDuration = "0ms");
      },
      onHide: function() {
        i && yt([i], "hidden");
      }
    };
  }
};
function Ci() {
  var e = qe();
  return e.className = pr, yt([e], "hidden"), e;
}
var Kt = {
  clientX: 0,
  clientY: 0
}, $t = [];
function Cr(e) {
  var t = e.clientX, n = e.clientY;
  Kt = {
    clientX: t,
    clientY: n
  };
}
function _i(e) {
  e.addEventListener("mousemove", Cr);
}
function Ti(e) {
  e.removeEventListener("mousemove", Cr);
}
var ki = {
  name: "followCursor",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, r = br(t.props.triggerTarget || n), o = !1, s = !1, i = !0, l = t.props;
    function u() {
      return t.props.followCursor === "initial" && t.state.isVisible;
    }
    function d() {
      r.addEventListener("mousemove", b);
    }
    function c() {
      r.removeEventListener("mousemove", b);
    }
    function m() {
      o = !0, t.setProps({
        getReferenceClientRect: null
      }), o = !1;
    }
    function b(v) {
      var C = v.target ? n.contains(v.target) : !0, f = t.props.followCursor, p = v.clientX, _ = v.clientY, a = n.getBoundingClientRect(), w = p - a.left, y = _ - a.top;
      (C || !t.props.interactive) && t.setProps({
        getReferenceClientRect: function() {
          var T = n.getBoundingClientRect(), B = p, R = _;
          f === "initial" && (B = T.left + w, R = T.top + y);
          var A = f === "horizontal" ? T.top : R, D = f === "vertical" ? T.right : B, H = f === "horizontal" ? T.bottom : R, j = f === "vertical" ? T.left : B;
          return {
            width: D - j,
            height: H - A,
            top: A,
            right: D,
            bottom: H,
            left: j
          };
        }
      });
    }
    function x() {
      t.props.followCursor && ($t.push({
        instance: t,
        doc: r
      }), _i(r));
    }
    function O() {
      $t = $t.filter(function(v) {
        return v.instance !== t;
      }), $t.filter(function(v) {
        return v.doc === r;
      }).length === 0 && Ti(r);
    }
    return {
      onCreate: x,
      onDestroy: O,
      onBeforeUpdate: function() {
        l = t.props;
      },
      onAfterUpdate: function(C, f) {
        var p = f.followCursor;
        o || p !== void 0 && l.followCursor !== p && (O(), p ? (x(), t.state.isMounted && !s && !u() && d()) : (c(), m()));
      },
      onMount: function() {
        t.props.followCursor && !s && (i && (b(Kt), i = !1), u() || d());
      },
      onTrigger: function(C, f) {
        cn(f) && (Kt = {
          clientX: f.clientX,
          clientY: f.clientY
        }), s = f.type === "focus";
      },
      onHidden: function() {
        t.props.followCursor && (m(), c(), i = !0);
      }
    };
  }
};
function Di(e, t) {
  var n;
  return {
    popperOptions: Object.assign({}, e.popperOptions, {
      modifiers: [].concat((((n = e.popperOptions) == null ? void 0 : n.modifiers) || []).filter(function(r) {
        var o = r.name;
        return o !== t.name;
      }), [t])
    })
  };
}
var Ei = {
  name: "inlinePositioning",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference;
    function r() {
      return !!t.props.inlinePositioning;
    }
    var o, s = -1, i = !1, l = [], u = {
      name: "tippyInlinePositioning",
      enabled: !0,
      phase: "afterWrite",
      fn: function(x) {
        var O = x.state;
        r() && (l.indexOf(O.placement) !== -1 && (l = []), o !== O.placement && l.indexOf(O.placement) === -1 && (l.push(O.placement), t.setProps({
          getReferenceClientRect: function() {
            return d(O.placement);
          }
        })), o = O.placement);
      }
    };
    function d(b) {
      return Si(yr(b), n.getBoundingClientRect(), at(n.getClientRects()), s);
    }
    function c(b) {
      i = !0, t.setProps(b), i = !1;
    }
    function m() {
      i || c(Di(t.props, u));
    }
    return {
      onCreate: m,
      onAfterUpdate: m,
      onTrigger: function(x, O) {
        if (cn(O)) {
          var v = at(t.reference.getClientRects()), C = v.find(function(p) {
            return p.left - 2 <= O.clientX && p.right + 2 >= O.clientX && p.top - 2 <= O.clientY && p.bottom + 2 >= O.clientY;
          }), f = v.indexOf(C);
          s = f > -1 ? f : s;
        }
      },
      onHidden: function() {
        s = -1;
      }
    };
  }
};
function Si(e, t, n, r) {
  if (n.length < 2 || e === null)
    return t;
  if (n.length === 2 && r >= 0 && n[0].left > n[1].right)
    return n[r] || t;
  switch (e) {
    case "top":
    case "bottom": {
      var o = n[0], s = n[n.length - 1], i = e === "top", l = o.top, u = s.bottom, d = i ? o.left : s.left, c = i ? o.right : s.right, m = c - d, b = u - l;
      return {
        top: l,
        bottom: u,
        left: d,
        right: c,
        width: m,
        height: b
      };
    }
    case "left":
    case "right": {
      var x = Math.min.apply(Math, n.map(function(y) {
        return y.left;
      })), O = Math.max.apply(Math, n.map(function(y) {
        return y.right;
      })), v = n.filter(function(y) {
        return e === "left" ? y.left === x : y.right === O;
      }), C = v[0].top, f = v[v.length - 1].bottom, p = x, _ = O, a = _ - p, w = f - C;
      return {
        top: C,
        bottom: f,
        left: p,
        right: _,
        width: a,
        height: w
      };
    }
    default:
      return t;
  }
}
var Ai = {
  name: "sticky",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, r = t.popper;
    function o() {
      return t.popperInstance ? t.popperInstance.state.elements.reference : n;
    }
    function s(d) {
      return t.props.sticky === !0 || t.props.sticky === d;
    }
    var i = null, l = null;
    function u() {
      var d = s("reference") ? o().getBoundingClientRect() : null, c = s("popper") ? r.getBoundingClientRect() : null;
      (d && jn(i, d) || c && jn(l, c)) && t.popperInstance && t.popperInstance.update(), i = d, l = c, t.state.isMounted && requestAnimationFrame(u);
    }
    return {
      onMount: function() {
        t.props.sticky && u();
      }
    };
  }
};
function jn(e, t) {
  return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
}
E.setDefaultProps({
  render: Or
});
E.setDefaultProps({
  onShow: (e) => {
    if (!e.props.content)
      return !1;
  }
});
function _r(e, t = {}, n = { mount: !0, appName: "Tippy" }) {
  n = Object.assign({ mount: !0, appName: "Tippy" }, n);
  const r = Hn(), o = U(), s = U({
    isEnabled: !1,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }), i = Lr();
  let l = null;
  const u = () => l || (l = document.createDocumentFragment(), l), d = (h) => {
    let T, B = Ie(h) ? h.value : h;
    return jr(B) ? (i.value || (i.value = pn({
      name: n.appName,
      setup: () => () => Ie(h) ? h.value : h
    }), r && Object.assign(i.value._context, r.appContext), i.value.mount(u())), T = () => u()) : typeof B == "object" ? (i.value || (i.value = pn({
      name: n.appName,
      setup: () => () => Ne(Ie(h) ? h.value : h)
    }), r && Object.assign(i.value._context, r.appContext), i.value.mount(u())), T = () => u()) : T = B, T;
  }, c = (h) => {
    let T = {};
    return Ie(h) ? T = h.value || {} : fn(h) ? T = { ...h } : T = { ...h }, T.content && (T.content = d(T.content)), T.triggerTarget && (T.triggerTarget = Ie(T.triggerTarget) ? T.triggerTarget.value : T.triggerTarget), (!T.plugins || !Array.isArray(T.plugins)) && (T.plugins = []), T.plugins = T.plugins.filter((B) => B.name !== "vueTippyReactiveState"), T.plugins.push({
      name: "vueTippyReactiveState",
      fn: () => ({
        onCreate() {
          s.value.isEnabled = !0;
        },
        onMount() {
          s.value.isMounted = !0;
        },
        onShow() {
          s.value.isMounted = !0, s.value.isVisible = !0;
        },
        onShown() {
          s.value.isShown = !0;
        },
        onHide() {
          s.value.isMounted = !1, s.value.isVisible = !1;
        },
        onHidden() {
          s.value.isShown = !1;
        },
        onUnmounted() {
          s.value.isMounted = !1;
        },
        onDestroy() {
          s.value.isDestroyed = !0;
        }
      })
    }), T;
  }, m = () => {
    !o.value || o.value.setProps(c(t));
  }, b = () => {
    !o.value || !t.content || o.value.setContent(d(t.content));
  }, x = (h) => {
    var T;
    (T = o.value) === null || T === void 0 || T.setContent(d(h));
  }, O = (h) => {
    var T;
    (T = o.value) === null || T === void 0 || T.setProps(c(h));
  }, v = () => {
    var h;
    o.value && (o.value.destroy(), o.value = void 0), l = null, (h = i.value) === null || h === void 0 || h.unmount(), i.value = void 0;
  }, C = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.show();
  }, f = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.hide();
  }, p = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.disable(), s.value.isEnabled = !1;
  }, _ = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.enable(), s.value.isEnabled = !0;
  }, a = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.unmount();
  }, w = () => {
    if (!e)
      return;
    let h = Ie(e) ? e.value : e;
    typeof h == "function" && (h = h()), h && (o.value = E(h, c(t)), h.$tippy = y);
  }, y = {
    tippy: o,
    refresh: m,
    refreshContent: b,
    setContent: x,
    setProps: O,
    destroy: v,
    hide: f,
    show: C,
    disable: p,
    enable: _,
    unmount: a,
    mount: w,
    state: s
  };
  return n.mount && (r ? r.isMounted ? w() : Te(w) : w()), r && Rr(() => {
    v();
  }), Ie(t) || fn(t) ? Xe(t, m, { immediate: !1 }) : Ie(t.content) && Xe(t.content, b, { immediate: !1 }), y;
}
function Mi(e, t) {
  const n = U();
  return Te(() => {
    const o = (Array.isArray(e) ? e.map((s) => s.value) : typeof e == "function" ? e() : e.value).map((s) => s instanceof Element ? s._tippy : s).filter(Boolean);
    n.value = xi(o, t ? { allowHTML: !0, ...t } : { allowHTML: !0 });
  }), {
    singleton: n
  };
}
function Pi(e) {
  return typeof e == "function" ? e() : P(e);
}
function $i(e) {
  var t, n;
  const r = Pi(e);
  return (n = (t = r) === null || t === void 0 ? void 0 : t.$el) !== null && n !== void 0 ? n : r;
}
ee({
  props: {
    to: {
      type: [String, Function]
    },
    tag: {
      type: [String, Object],
      default: "span"
    },
    contentTag: {
      type: [String, Object],
      default: "span"
    },
    contentClass: {
      type: String,
      default: null
    },
    appendTo: { default: () => E.defaultProps.appendTo },
    aria: { default: () => E.defaultProps.aria },
    delay: { default: () => E.defaultProps.delay },
    duration: { default: () => E.defaultProps.duration },
    getReferenceClientRect: { default: () => E.defaultProps.getReferenceClientRect },
    hideOnClick: { type: [Boolean, String], default: () => E.defaultProps.hideOnClick },
    ignoreAttributes: { type: Boolean, default: () => E.defaultProps.ignoreAttributes },
    interactive: { type: Boolean, default: () => E.defaultProps.interactive },
    interactiveBorder: { default: () => E.defaultProps.interactiveBorder },
    interactiveDebounce: { default: () => E.defaultProps.interactiveDebounce },
    moveTransition: { default: () => E.defaultProps.moveTransition },
    offset: { default: () => E.defaultProps.offset },
    onAfterUpdate: { default: () => E.defaultProps.onAfterUpdate },
    onBeforeUpdate: { default: () => E.defaultProps.onBeforeUpdate },
    onCreate: { default: () => E.defaultProps.onCreate },
    onDestroy: { default: () => E.defaultProps.onDestroy },
    onHidden: { default: () => E.defaultProps.onHidden },
    onHide: { default: () => E.defaultProps.onHide },
    onMount: { default: () => E.defaultProps.onMount },
    onShow: { default: () => E.defaultProps.onShow },
    onShown: { default: () => E.defaultProps.onShown },
    onTrigger: { default: () => E.defaultProps.onTrigger },
    onUntrigger: { default: () => E.defaultProps.onUntrigger },
    onClickOutside: { default: () => E.defaultProps.onClickOutside },
    placement: { default: () => E.defaultProps.placement },
    plugins: { default: () => E.defaultProps.plugins },
    popperOptions: { default: () => E.defaultProps.popperOptions },
    render: { default: () => E.defaultProps.render },
    showOnCreate: { type: Boolean, default: () => E.defaultProps.showOnCreate },
    touch: { type: [Boolean, String, Array], default: () => E.defaultProps.touch },
    trigger: { default: () => E.defaultProps.trigger },
    triggerTarget: { default: () => E.defaultProps.triggerTarget },
    animateFill: { type: Boolean, default: () => E.defaultProps.animateFill },
    followCursor: { type: [Boolean, String], default: () => E.defaultProps.followCursor },
    inlinePositioning: { type: Boolean, default: () => E.defaultProps.inlinePositioning },
    sticky: { type: [Boolean, String], default: () => E.defaultProps.sticky },
    allowHTML: { type: Boolean, default: () => E.defaultProps.allowHTML },
    animation: { default: () => E.defaultProps.animation },
    arrow: { default: () => E.defaultProps.arrow },
    content: { default: () => E.defaultProps.content },
    inertia: { default: () => E.defaultProps.inertia },
    maxWidth: { default: () => E.defaultProps.maxWidth },
    role: { default: () => E.defaultProps.role },
    theme: { default: () => E.defaultProps.theme },
    zIndex: { default: () => E.defaultProps.zIndex }
  },
  emits: ["state"],
  setup(e, { slots: t, emit: n, expose: r }) {
    const o = U(), s = U(), i = U(), l = U(!1), u = () => {
      let x = { ...e };
      for (const O of ["to", "tag", "contentTag", "contentClass"])
        x.hasOwnProperty(O) && delete x[O];
      return x;
    };
    let d = () => $i(o);
    e.to && (typeof Element < "u" && e.to instanceof Element ? d = () => e.to : e.to === "parent" ? d = () => {
      let x = o.value;
      return x || (x = o.value = s.value.parentElement), x;
    } : (typeof e.to == "string" || e.to instanceof String) && (d = () => document.querySelector(e.to)));
    const c = _r(d, u());
    let m = t.content;
    !m && e.to === "parent" && (m = t.default), Te(() => {
      l.value = !0, bt(() => {
        m && c.setContent(() => i.value);
      });
    }), Xe(c.state, () => {
      n("state", P(c.state));
    }, { immediate: !0, deep: !0 }), Xe(() => e, () => {
      c.setProps(u()), m && c.setContent(() => i.value);
    }, { deep: !0 });
    let b = Ir({
      elem: o,
      contentElem: i,
      mounted: l,
      ...c
    });
    return r(b), () => {
      const x = (typeof e.contentTag == "string", e.contentTag), O = m ? Ne(x, {
        ref: i,
        style: { display: l.value ? "inherit" : "none" },
        class: e.contentClass
      }, m(b)) : null;
      if (e.to === "parent") {
        const f = [];
        if (!o.value) {
          const p = Ne("span", {
            ref: s,
            "data-v-tippy": "",
            style: { display: "none" }
          });
          f.push(p);
        }
        return O && f.push(O), f;
      }
      const v = t.default ? t.default(b) : [];
      if (!e.tag) {
        const f = Ne(v[0], {
          ref: o,
          "data-v-tippy": ""
        });
        return O ? [f, O] : f;
      }
      const C = (typeof e.tag == "string", e.tag);
      return Ne(C, { ref: o, "data-v-tippy": "" }, O ? [v, O] : v);
    };
  }
});
const Bi = [
  "a11y",
  "allowHTML",
  "arrow",
  "flip",
  "flipOnUpdate",
  "hideOnClick",
  "ignoreAttributes",
  "inertia",
  "interactive",
  "lazy",
  "multiple",
  "showOnInit",
  "touch",
  "touchHold"
];
let Zt = {};
Object.keys(E.defaultProps).forEach((e) => {
  Bi.includes(e) ? Zt[e] = {
    type: Boolean,
    default: function() {
      return E.defaultProps[e];
    }
  } : Zt[e] = {
    default: function() {
      return E.defaultProps[e];
    }
  };
});
ee({
  props: Zt,
  setup(e) {
    const t = U([]), { singleton: n } = Mi(t, e);
    return { instances: t, singleton: n };
  },
  mounted() {
    var e;
    const n = this.$el.parentElement.querySelectorAll("[data-v-tippy]");
    this.instances = Array.from(n).map((r) => r._tippy).filter(Boolean), (e = this.singleton) === null || e === void 0 || e.setInstances(this.instances);
  },
  render() {
    let e = this.$slots.default ? this.$slots.default() : [];
    return Ne(() => e);
  }
});
const Li = E.setDefaultProps;
Li({
  ignoreAttributes: !0,
  plugins: [Ai, Ei, ki, Oi]
});
function Ri() {
  const e = Pe(Zn);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
const Ii = { class: "g-gantt-tooltip-container" }, ji = { class: "g-gantt-tooltip-area-container" }, Hi = { class: "g-gantt-tooltip-area" }, Gi = { class: "g-gantt-tooltip-category-container" }, Yi = { class: "g-gantt-tooltip-category" }, Ui = { class: "g-gantt-tooltip-promotion-title" }, Wi = { class: "g-gantt-tooltip-promotion-time-container" }, zi = { class: "g-gantt-tooltip-time" }, Fi = "cadetblue", Ni = /* @__PURE__ */ ee({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    config: {},
    toDayjs: {}
  },
  setup(e) {
    Jt((m) => ({
      "4613e272": s.value
    }));
    const t = Pe("iconComponent"), n = e, { bar: r } = gt(n), o = q(() => {
      var b, x, O;
      const m = (O = (x = (b = r.value) == null ? void 0 : b.ganttBarConfig) == null ? void 0 : x.tooltipInfo) == null ? void 0 : O.publishedAt;
      return m ? !Q(new Date(m * 1e3)).isAfter(new Date()) : !1;
    }), s = U(o.value ? "pointer" : "default"), i = q(
      () => {
        var m, b;
        return ((b = (m = r == null ? void 0 : r.value) == null ? void 0 : m.ganttBarConfig.style) == null ? void 0 : b.backgroundColor) || Fi;
      }
    ), l = () => {
      var b, x;
      const m = (x = (b = r.value) == null ? void 0 : b.ganttBarConfig.tooltipInfo) == null ? void 0 : x.promotionUrl;
      !m || !o.value || window.location.assign(m);
    }, u = q(() => {
      var m;
      return (m = r.value) == null ? void 0 : m[n.config.barStart.value];
    }), d = q(() => {
      var m;
      return (m = r.value) == null ? void 0 : m[n.config.barEnd.value];
    }), c = q(() => {
      if (!(r != null && r.value))
        return "";
      const m = n.toDayjs(u.value).format("DD.MM."), b = n.toDayjs(d.value).format("DD.MM.YYYY");
      return `${m} \u2013 ${b}`;
    });
    return (m, b) => {
      var x, O, v, C, f, p, _, a, w, y, h, T;
      return S(), L("div", {
        class: "g-gantt-tooltip",
        style: F({
          fontFamily: m.config.font.value
        }),
        onClick: l
      }, [
        $("div", Ii, [
          $("div", ji, [
            $("span", Hi, te((v = (O = (x = P(r)) == null ? void 0 : x.ganttBarConfig) == null ? void 0 : O.tooltipInfo) == null ? void 0 : v.areaName), 1),
            P(r) ? (S(), J(je(P(t)), {
              key: 0,
              name: (p = (f = (C = P(r)) == null ? void 0 : C.ganttBarConfig) == null ? void 0 : f.tooltipInfo) == null ? void 0 : p.icon,
              size: "24"
            }, null, 8, ["name"])) : de("", !0)
          ]),
          $("div", Gi, [
            $("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",
              style: F({ background: i.value })
            }, null, 4),
            $("span", Yi, te((w = (a = (_ = P(r)) == null ? void 0 : _.ganttBarConfig) == null ? void 0 : a.tooltipInfo) == null ? void 0 : w.categoryName), 1),
            $("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",
              style: F({ background: i.value })
            }, null, 4)
          ]),
          $("p", Ui, te((T = (h = (y = P(r)) == null ? void 0 : y.ganttBarConfig) == null ? void 0 : h.tooltipInfo) == null ? void 0 : T.title), 1),
          $("div", Wi, [
            $("p", zi, [
              Z(m.$slots, "default", {
                bar: P(r),
                barStart: u.value,
                barEnd: d.value
              }, () => [
                vt(te(c.value), 1)
              ], !0)
            ]),
            o.value ? (S(), J(je(P(t)), {
              key: 0,
              name: "chevron-right",
              size: "16",
              style: { color: "#008075" }
            })) : de("", !0)
          ])
        ])
      ], 4);
    };
  }
});
const Vi = /* @__PURE__ */ it(Ni, [["__scopeId", "data-v-00b81e26"]]), qi = ["id"], Xi = { class: "g-gantt-bar-label" }, Qi = ["innerHTML"], Ki = `
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`, Zi = /* @__PURE__ */ ee({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    var R;
    Jt((A) => ({
      "4e4674f5": P(o)
    }));
    const t = e, n = Ri(), { bar: r } = gt(t), o = (R = t.bar.ganttBarConfig.style) == null ? void 0 : R.backgroundColor, { mapTimeToPosition: s, mapPositionToTime: i } = tn(), { font: l, barEnd: u, barStart: d, rowHeight: c, width: m, chartStart: b, chartEnd: x, chartSize: O } = He(), v = U(), { toDayjs: C } = en(), f = U(!1), p = Pe("iconComponent"), _ = q(() => r.value.ganttBarConfig), a = Pe(Jn), w = (A) => {
      var N, z;
      const D = document.querySelector(".tippy-svg-arrow");
      if (!D)
        return;
      const j = ((N = D.style.transform) != null ? N : "").match(/translate3d\((-?\d+)/), W = (z = document.querySelector(".tippy-content")) == null ? void 0 : z.clientHeight;
      if (A === "bottom" && j) {
        const G = D.firstElementChild;
        G.style.transform = "rotateX(180deg)";
        const V = parseInt(j[1]);
        D.style.transform = `translate3d(${V}px, -${W + 6}px, 0px)`;
      }
      if (A === "top" && j) {
        const G = parseInt(j[1]);
        D.style.transform = `translate3d(${G}px, -1px, 0px)`;
      }
    };
    Te(() => {
      !(v != null && v.value) || _r(v.value, {
        content: Ne(Vi, { bar: r.value, config: { barStart: d, barEnd: u, font: l }, toDayjs: C }),
        arrow: Ki,
        interactiveBorder: 0,
        placement: "top",
        interactive: !0,
        popperOptions: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [5, 15]
              }
            },
            {
              name: "applyArrowHide",
              enabled: !0,
              phase: "write",
              fn({ instance: A }) {
                w((A == null ? void 0 : A.state.placement) || "top");
              }
            }
          ]
        },
        delay: [0, 0],
        duration: [300, 0]
      });
    });
    const y = (A) => {
      var j, W;
      if (A.preventDefault(), A.type === "mousedown" || !(a != null && a.value))
        return;
      const D = (W = (j = a == null ? void 0 : a.value) == null ? void 0 : j[0]) == null ? void 0 : W.getBoundingClientRect();
      if (!D)
        return;
      const H = i(A.clientX - D.left);
      n(A, r.value, H);
    }, h = U(0), T = U(0), B = q(() => {
      const A = new Date(r.value.myBeginDate).getTime(), D = new Date(r.value.myEndDate).getTime();
      if (Math.abs(A - D) / (1e3 * 60 * 60 * 24) <= 2)
        return 0;
      const W = 6;
      return T.value - h.value - W + W;
    });
    return Te(() => {
      Xe(
        [r, m, b, x, O.width],
        () => {
          h.value = s(r.value[d.value]), T.value = s(r.value[u.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (A, D) => (S(), L("div", {
      id: _.value.id,
      ref_key: "ganttBarRef",
      ref: v,
      class: Lt(["g-gantt-bar", _.value.asArrow ? "g-gantt-bar-is-arrow" : "", _.value.class || ""]),
      style: F({
        ..._.value.style,
        position: "absolute",
        top: `${P(c) * 0.1}px`,
        left: `${h.value}px`,
        width: `${B.value}px`,
        height: `${P(c) * 0.8}px`,
        zIndex: f.value ? 3 : 2
      }),
      onClick: y,
      onContextmenu: y,
      onDblclick: y,
      onMousedown: y,
      onMouseenter: y,
      onMouseleave: y
    }, [
      $("div", Xi, [
        Z(A.$slots, "default", { bar: P(r) }, () => [
          $("div", null, te(_.value.label || ""), 1),
          _.value.html ? (S(), L("div", {
            key: 0,
            innerHTML: _.value.html
          }, null, 8, Qi)) : de("", !0)
        ])
      ]),
      (S(), J(je(P(p)), {
        "size-s": "16",
        "size-m": "16",
        class: "g-gantt-bar-arrow",
        "size-l": "16",
        name: "gant-arrow",
        size: "16"
      })),
      _.value.hasHandles ? (S(), L(ne, { key: 0 }, [
        D[0] || (D[0] = $("div", { class: "g-gantt-bar-handle-left" }, null, -1)),
        D[1] || (D[1] = $("div", { class: "g-gantt-bar-handle-right" }, null, -1))
      ], 64)) : de("", !0)
    ], 46, qi));
  }
});
const Ji = /* @__PURE__ */ ee({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    overlaps: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: t }) {
    const n = e, r = U([]), o = t, { rowHeight: s, colors: i, labelColumnTitle: l } = He(), { highlightOnHover: u } = gt(n), d = U(!1), c = q(() => ({
      height: `${s.value}px`,
      background: (u == null ? void 0 : u.value) && d.value ? i.value.hoverHighlight : null
    })), { mapPositionToTime: m } = tn(), b = Hr("barContainer");
    Bt(Jn, b);
    const x = (p) => {
      var y, h;
      const _ = (h = (y = b.value) == null ? void 0 : y[0]) == null ? void 0 : h.getBoundingClientRect();
      if (!_) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const a = p.clientX - _.left, w = m(a);
      o("drop", { e: p, datetime: w });
    };
    function O(p, _, a, w) {
      return p <= w && a <= _;
    }
    function v(p) {
      const _ = [];
      for (let a = 0; a < p.length; a++)
        for (let w = a + 1; w < p.length; w++)
          O(
            p[a].myBeginDate,
            p[a].myEndDate,
            p[w].myBeginDate,
            p[w].myEndDate
          ) && _.push(Q(p[a].myEndDate).isAfter(p[w].myEndDate) ? p[a] : p[w]);
      return _;
    }
    const C = () => {
      const p = [], _ = (a) => {
        if (!a || a.length === 0)
          return;
        const w = v(a);
        if (w.length > 0) {
          const y = a.filter((T) => !w.includes(T)), h = a.filter((T) => w.includes(T));
          p.push(y), _(h);
        } else
          p.push(a);
      };
      return _(n.bars), p;
    };
    Te(() => {
      r.value = C();
    });
    const f = (p) => !p || /^\s*$/.test(p);
    return (p, _) => (S(), L("div", null, [
      (S(!0), L(ne, null, be(r.value, (a) => (S(), L("div", {
        key: a[0].ganttBarConfig.id,
        style: F(c.value),
        class: "g-gantt-row",
        onDragleave: _[0] || (_[0] = (w) => d.value = !1),
        onDrop: _[1] || (_[1] = (w) => x(w)),
        onMouseleave: _[2] || (_[2] = (w) => d.value = !1),
        onMouseover: _[3] || (_[3] = (w) => d.value = !0),
        onDragover: _[4] || (_[4] = Gr((w) => d.value = !0, ["prevent"]))
      }, [
        !f(p.label) && !P(l) ? (S(), L("div", {
          key: 0,
          style: F({ background: P(i).primary, color: P(i).text }),
          class: "g-gantt-row-label"
        }, [
          Z(p.$slots, "label", {}, () => [
            vt(te(p.label), 1)
          ])
        ], 4)) : de("", !0),
        $("div", Yr({
          ref_for: !0,
          ref: "barContainer",
          class: "g-gantt-row-bars-container"
        }, p.$attrs), [
          pt(Ur, {
            name: "bar-transition sys",
            tag: "div",
            class: "transition-group"
          }, {
            default: ze(() => [
              (S(!0), L(ne, null, be(a, (w) => (S(), J(Zi, {
                key: w.ganttBarConfig.id,
                bar: w
              }, {
                default: ze(() => [
                  Z(p.$slots, "bar-label", { bar: w })
                ]),
                _: 2
              }, 1032, ["bar"]))), 128))
            ]),
            _: 2
          }, 1024)
        ], 16)
      ], 36))), 128))
    ]));
  }
});
function es() {
  Q.extend(zr), Q.extend(Fr), Q.extend(zn), Q.extend(qr), Q.extend(Nr), Q.extend(Wr), Q.extend(Vr);
}
const rs = {
  install(e, t) {
    es(), e.component("GGanttChart", Vo), e.component("GGanttRow", Ji);
  }
};
function xe(e, t = "top") {
  if (!e || typeof document > "u")
    return;
  const n = document.head, r = document.createElement("style");
  t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.appendChild(document.createTextNode(e));
}
xe(`
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
.g-gantt-chart-wrapper {
  width: 100%;
  padding-left: 16px;
  overflow-x: scroll;
}
.g-gantt-chart-container {
  width: 100%;
  display: flex;
  background: #f0f1f2;
  padding: 0 24px 0 0;
  border-top: 4px solid #91979c;
  border-bottom: 4px solid #91979c;
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
  color: #636a6d;
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
`, "top");
xe(`
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
  left: 0;
  padding: 0 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.6);
}
.transition-group {
  position: relative;
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
`, "top");
xe(`
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
`, "top");
xe(`
.g-grid-container[data-v-a719d7c7] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line[data-v-a719d7c7] {
  width: 1px;
  height: 100%;
}
`, "top");
xe(`
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
`, "top");
xe(`
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
`, "top");
xe(`
#tippy-1 {
  top: auto;
  top: initial;
  right: auto;
  right: initial;
  bottom: auto;
  bottom: initial;
  left: auto;
  left: initial;
  transform: none;
  transform: initial;
}
.tippy-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 6px solid red;
  margin-top: -35px;
}
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
  border-radius: 0;
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
  width: 6.5px;
  right: -5px;
  bottom: -6px;
}
.g-gantt-bar-arrow > path {
  fill: var(--4e4674f5);
}
`, "top");
xe(`
.g-gantt-grid-current-date[data-v-dd346c68] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: center;
}
`, "top");
xe(`
.g-gantt-legend-collapse[data-v-a1ed28cb] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
}
.g-gantt-legend-title[data-v-a1ed28cb] {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}
.g-gantt-legend-area[data-v-a1ed28cb] {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;

  color: #1b1e1f;
}
.g-gantt-legend-category-color[data-v-a1ed28cb] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend-promotion[data-v-a1ed28cb] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-gantt-legend-do-uncollapse[data-v-a1ed28cb] {
  color: #008075;
}
.g-gantt-legend-do-uncollapse[data-v-a1ed28cb]:hover {
  cursor: pointer;
}
.g-gantt-legend-area-list[data-v-a1ed28cb] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-category-name[data-v-a1ed28cb] {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}
.g-gantt-legend[data-v-a1ed28cb] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: 255px;

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
}
`, "top");
xe(`
.g-gantt-legend-collapse[data-v-6e9c4fc8] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 48px;
  margin-bottom: 14px;
}
.g-gantt-legend-area-icon[data-v-6e9c4fc8] {
  margin: 0 8px 0 16px;
}
.g-gantt-legend-promotion[data-v-6e9c4fc8] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-gantt-legend-areas-list[data-v-6e9c4fc8] {
  display: flex;
  flex-direction: column;
}
.g-gantt-legend-area-list[data-v-6e9c4fc8] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-do-collapse[data-v-6e9c4fc8] {
  color: #008075;
}
.g-gantt-legend-do-collapse[data-v-6e9c4fc8]:hover {
  cursor: pointer;
}
.g-gantt-legend-category-color[data-v-6e9c4fc8] {
  width: 44px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend[data-v-6e9c4fc8] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: 60px;

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
}
@media (max-width: 700px) {
.g-gantt-legend[data-v-6e9c4fc8] {
    min-width: 52px;
}
}
`, "top");
xe(`
.g-gantt-tooltip[data-v-00b81e26] {
  display: flex;
  align-items: flex-start;

  width: 224px;

  background: white;
  color: #4c5356;
  z-index: 4;
  font-size: 0.85em;
  padding-top: 8px;
  padding-bottom: 12px;
  border-radius: 3px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;

  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
}
.g-gantt-tooltip[data-v-00b81e26]:hover {
  cursor: var(--4613e272);
}
.g-gantt-tooltip-category-container[data-v-00b81e26] {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.g-gantt-tooltip-container[data-v-00b81e26] {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.g-gantt-tooltip-time[data-v-00b81e26] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;

  color: #4c5356;
}
.g-gantt-tooltip-promotion-time-container[data-v-00b81e26] {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}
.g-gantt-tooltip-area[data-v-00b81e26] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-category[data-v-00b81e26] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-area-container[data-v-00b81e26] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.g-gantt-tooltip-promotion-title[data-v-00b81e26] {
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;

  color: #1b1e1f;

  padding: 0 12px 10px 12px;
}
.g-gantt-tooltip-color-line[data-v-00b81e26] {
  height: 2px;
}
.g-gantt-tooltip-color-line-left[data-v-00b81e26] {
  min-width: 8px;
  margin-right: 4px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-tooltip-color-line-right[data-v-00b81e26] {
  margin-left: 4px;
  width: 100%;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
@media (max-width: 1400px) {
.g-gantt-tooltip[data-v-00b81e26] {
    width: 208px;

    padding-top: 6px;
    padding-bottom: 8px;
}
.g-gantt-tooltip-color-line-left[data-v-00b81e26] {
    min-width: 4px;
}
.g-gantt-tooltip-area-container[data-v-00b81e26],
  .g-gantt-tooltip-promotion-title[data-v-00b81e26],
  .g-gantt-tooltip-promotion-time-container[data-v-00b81e26] {
    padding-left: 8px;
    padding-right: 8px;
}
}
`, "top");
export {
  Vo as GGanttChart,
  Ji as GGanttRow,
  rs as default,
  es as extendDayjs,
  rs as ganttastic
};
