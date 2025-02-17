import Q from "dayjs";
import { unref as B, getCurrentScope as Mr, onScopeDispose as Pr, getCurrentInstance as jn, onMounted as Te, nextTick as yt, ref as U, watch as Xe, inject as Pe, computed as q, defineComponent as ee, openBlock as S, createElementBlock as R, Fragment as ne, createElementVNode as $, normalizeStyle as F, createBlock as J, resolveDynamicComponent as je, toDisplayString as te, renderList as be, createVNode as ft, renderSlot as Z, createCommentVNode as de, createTextVNode as pt, onBeforeMount as $r, toRefs as gt, useSlots as Br, provide as Bt, normalizeClass as Lt, withCtx as We, shallowRef as Lr, onUnmounted as Rr, isRef as Ie, isReactive as dn, reactive as Ir, h as Ne, isVNode as jr, createApp as fn, useCssVars as Hn, useTemplateRef as Hr, withModifiers as Yr, mergeProps as Gr, TransitionGroup as Ur } from "vue";
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "day";
    return function(r, a, s) {
      var i = function(d) {
        return d.add(4 - d.isoWeekday(), n);
      }, l = a.prototype;
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
})(Yn);
const zr = Yn.exports;
var Gn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r) {
      r.prototype.isSameOrBefore = function(a, s) {
        return this.isSame(a, s) || this.isBefore(a, s);
      };
    };
  });
})(Gn);
const Wr = Gn.exports;
var Un = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r) {
      r.prototype.isSameOrAfter = function(a, s) {
        return this.isSame(a, s) || this.isAfter(a, s);
      };
    };
  });
})(Un);
const Fr = Un.exports;
var zn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r, a) {
      r.prototype.isBetween = function(s, i, l, u) {
        var d = a(s), c = a(i), m = (u = u || "()")[0] === "(", b = u[1] === ")";
        return (m ? this.isAfter(d, l) : !this.isBefore(d, l)) && (b ? this.isBefore(c, l) : !this.isAfter(c, l)) || (m ? this.isBefore(d, l) : !this.isAfter(d, l)) && (b ? this.isAfter(c, l) : !this.isBefore(c, l));
      };
    };
  });
})(zn);
const Wn = zn.exports;
var Fn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "week", r = "year";
    return function(a, s, i) {
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
    return function(n, r, a) {
      var s = r.prototype, i = s.format;
      a.en.ordinal = function(l) {
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
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, s = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(C) {
        this[v] = +C;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(C) {
        if (!C || C === "Z")
          return 0;
        var p = C.match(/([+-]|\d\d)/g), w = 60 * p[1] + (+p[2] || 0);
        return w === 0 ? 0 : p[0] === "+" ? -w : w;
      }(v);
    }], m = function(v) {
      var C = l[v];
      return C && (C.indexOf ? C : C.s.concat(C.f));
    }, b = function(v, C) {
      var p, w = l.meridiem;
      if (w) {
        for (var T = 1; T <= 24; T += 1)
          if (v.indexOf(w(T, 0, C)) > -1) {
            p = T > 12;
            break;
          }
      } else
        p = v === (C ? "pm" : "PM");
      return p;
    }, x = { A: [i, function(v) {
      this.afternoon = b(v, !1);
    }], a: [i, function(v) {
      this.afternoon = b(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [a, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [s, d("seconds")], ss: [s, d("seconds")], m: [s, d("minutes")], mm: [s, d("minutes")], H: [s, d("hours")], h: [s, d("hours")], HH: [s, d("hours")], hh: [s, d("hours")], D: [s, d("day")], DD: [a, d("day")], Do: [i, function(v) {
      var C = l.ordinal, p = v.match(/\d+/);
      if (this.day = p[0], C)
        for (var w = 1; w <= 31; w += 1)
          C(w).replace(/\[|\]/g, "") === v && (this.day = w);
    }], M: [s, d("month")], MM: [a, d("month")], MMM: [i, function(v) {
      var C = m("months"), p = (m("monthsShort") || C.map(function(w) {
        return w.slice(0, 3);
      })).indexOf(v) + 1;
      if (p < 1)
        throw new Error();
      this.month = p % 12 || p;
    }], MMMM: [i, function(v) {
      var C = m("months").indexOf(v) + 1;
      if (C < 1)
        throw new Error();
      this.month = C % 12 || C;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = u(v);
    }], YYYY: [/\d{4}/, d("year")], Z: c, ZZ: c };
    function O(v) {
      var C, p;
      C = v, p = l && l.formats;
      for (var w = (v = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, L, M) {
        var k = M && M.toUpperCase();
        return L || p[M] || n[M] || p[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, j, z) {
          return j || z.slice(1);
        });
      })).match(r), T = w.length, o = 0; o < T; o += 1) {
        var y = w[o], g = x[y], f = g && g[0], _ = g && g[1];
        w[o] = _ ? { regex: f, parser: _ } : y.replace(/^\[|\]$/g, "");
      }
      return function(A) {
        for (var L = {}, M = 0, k = 0; M < T; M += 1) {
          var H = w[M];
          if (typeof H == "string")
            k += H.length;
          else {
            var j = H.regex, z = H.parser, N = A.slice(k), W = j.exec(N)[0];
            z.call(L, W), A = A.replace(W, "");
          }
        }
        return function(Y) {
          var V = Y.afternoon;
          if (V !== void 0) {
            var X = Y.hours;
            V ? X < 12 && (Y.hours += 12) : X === 12 && (Y.hours = 0), delete Y.afternoon;
          }
        }(L), L;
      };
    }
    return function(v, C, p) {
      p.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
      var w = C.prototype, T = w.parse;
      w.parse = function(o) {
        var y = o.date, g = o.utc, f = o.args;
        this.$u = g;
        var _ = f[1];
        if (typeof _ == "string") {
          var A = f[2] === !0, L = f[3] === !0, M = A || L, k = f[2];
          L && (k = f[2]), l = this.$locale(), !A && k && (l = p.Ls[k]), this.$d = function(N, W, Y) {
            try {
              if (["x", "X"].indexOf(W) > -1)
                return new Date((W === "X" ? 1e3 : 1) * N);
              var V = O(W)(N), X = V.year, se = V.month, le = V.day, Ee = V.hours, ve = V.minutes, oe = V.seconds, he = V.milliseconds, Se = V.zone, ie = new Date(), Oe = le || (X || se ? 1 : ie.getDate()), ue = X || ie.getFullYear(), me = 0;
              X && !se || (me = se > 0 ? se - 1 : ie.getMonth());
              var $e = Ee || 0, Ae = ve || 0, Be = oe || 0, Le = he || 0;
              return Se ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le + 60 * Se.offset * 1e3)) : Y ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le)) : new Date(ue, me, Oe, $e, Ae, Be, Le);
            } catch {
              return new Date("");
            }
          }(y, _, g), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && y != this.format(_) && (this.$d = new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var H = _.length, j = 1; j <= H; j += 1) {
            f[1] = _[j - 1];
            var z = p.apply(this, f);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === H && (this.$d = new Date(""));
          }
        else
          T.call(this, o);
      };
    };
  });
})(Vn);
const qr = Vn.exports;
var pn;
const bt = typeof window < "u";
bt && ((pn = window == null ? void 0 : window.navigator) == null ? void 0 : pn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xr(e) {
  return typeof e == "function" ? e() : B(e);
}
function Qr(e) {
  return e;
}
function Kr(e) {
  return Mr() ? (Pr(e), !0) : !1;
}
function Zr(e, t = !0) {
  jn() ? Te(e) : t ? e() : yt(e);
}
function qn(e) {
  var t;
  const n = Xr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Jr = bt ? window : void 0;
bt && window.document;
bt && window.navigator;
bt && window.location;
function ea(e, t = !1) {
  const n = U(), r = () => n.value = Boolean(e());
  return r(), Zr(r, t), n;
}
const Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qt = "__vueuse_ssr_handlers__";
Vt[qt] = Vt[qt] || {};
Vt[qt];
var gn = Object.getOwnPropertySymbols, ta = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, ra = (e, t) => {
  var n = {};
  for (var r in e)
    ta.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && gn)
    for (var r of gn(e))
      t.indexOf(r) < 0 && na.call(e, r) && (n[r] = e[r]);
  return n;
};
function aa(e, t, n = {}) {
  const r = n, { window: a = Jr } = r, s = ra(r, ["window"]);
  let i;
  const l = ea(() => a && "ResizeObserver" in a), u = () => {
    i && (i.disconnect(), i = void 0);
  }, d = Xe(() => qn(e), (m) => {
    u(), l.value && a && m && (i = new ResizeObserver(t), i.observe(m, s));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), d();
  };
  return Kr(c), {
    isSupported: l,
    stop: c
  };
}
function Xn(e, t = { width: 0, height: 0 }, n = {}) {
  const r = U(t.width), a = U(t.height);
  return aa(e, ([s]) => {
    r.value = s.contentRect.width, a.value = s.contentRect.height;
  }, n), Xe(() => qn(e), (s) => {
    r.value = s ? t.width : 0, a.value = s ? t.height : 0;
  }), {
    width: r,
    height: a
  };
}
var vn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(vn || (vn = {}));
var oa = Object.defineProperty, hn = Object.getOwnPropertySymbols, ia = Object.prototype.hasOwnProperty, sa = Object.prototype.propertyIsEnumerable, mn = (e, t, n) => t in e ? oa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, la = (e, t) => {
  for (var n in t || (t = {}))
    ia.call(t, n) && mn(e, n, t[n]);
  if (hn)
    for (var n of hn(t))
      sa.call(t, n) && mn(e, n, t[n]);
  return e;
};
const ua = {
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
la({
  linear: Qr
}, ua);
const yn = {
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
function Jt(e = He()) {
  const { chartStart: t, chartEnd: n, barStart: r, barEnd: a, dateFormat: s } = e, i = q(() => u(t.value)), l = q(() => u(n.value)), u = (c, m) => {
    let b;
    if (m !== void 0 && typeof c != "string" && !(c instanceof Date) && (b = m === "start" ? c[r.value] : c[a.value]), typeof c == "string")
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
const ca = { class: "g-gantt-grid-current-date" }, da = /* @__PURE__ */ ee({
  __name: "GGanttGridCurrentDay",
  props: {
    parentWidth: {}
  },
  setup(e) {
    const t = e, n = Pe("iconComponent"), r = new Date(), a = new Date(r.getFullYear(), 0, 1), s = q(() => Math.ceil((new Date(r.getTime()).valueOf() - a.valueOf()) / 864e5)), i = q(() => t.parentWidth / 52 / 7), l = U(s.value >= 365 - 10), u = q(() => s.value >= 365 - 10 ? 0 : i.value * s.value - 33), d = q(() => s.value < 10 ? 0 : i.value * s.value - 33);
    return (c, m) => (S(), R(ne, null, [
      $("div", {
        style: F({
          position: "absolute",
          top: "-65px",
          zIndex: 3,
          left: i.value * s.value - 7.5 + "px"
        })
      }, [
        (S(), J(je(B(n)), {
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
        $("p", ca, te(B(Q)(new Date()).format("DD.MM.YYYY")), 1)
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
const wt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, fa = /* @__PURE__ */ wt(da, [["__scopeId", "data-v-dd346c68"]]);
function tr() {
  const { precision: e } = He(), { chartStartDayjs: t, chartEndDayjs: n } = Jt(), r = q(() => {
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
  }), a = q(() => {
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
    const l = [], u = [], d = n.value.diff(t.value, "minutes", !0), c = r.value, m = a.value;
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
const pa = /* @__PURE__ */ ee({
  __name: "GGanttGridAreaDivider",
  props: {
    areaHeights: {}
  },
  setup(e) {
    const { timeaxisUnits: t } = tr(), n = (a, s) => s === t.value.lowerUnits.length - 1 ? "unset" : a && Number(a) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2", r = (a) => {
      const s = +a >= 14 && +a <= 26, i = +a >= 40 && +a <= 52;
      return s || i ? "#f7f8f9" : "#ffffff";
    };
    return (a, s) => (S(), R(ne, null, [
      (S(!0), R(ne, null, be(a.areaHeights, (i) => (S(), R("div", {
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
      (S(!0), R(ne, null, be(B(t).lowerUnits, ({ label: i, width: l }, u) => (S(), R("div", {
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
}), ga = /* @__PURE__ */ ee({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(e) {
    const t = U(null), { width: n } = Xn(t), r = U([]);
    return Te(() => {
      yt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((s, i) => {
          if (i > 0) {
            r.value.push(s.clientHeight + r.value[i - 1]);
            return;
          }
          r.value.push(s.clientHeight);
        }), r.value.pop();
      });
    }), (a, s) => (S(), R("div", {
      ref_key: "gridContainer",
      ref: t,
      class: "g-grid-container"
    }, [
      ft(fa, { "parent-width": B(n) }, null, 8, ["parent-width"]),
      ft(pa, { "area-heights": r.value }, null, 8, ["area-heights"])
    ], 512));
  }
});
const bn = /* @__PURE__ */ wt(ga, [["__scopeId", "data-v-e196b6b3"]]);
function va() {
  const e = Pe(Qn);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const ha = { class: "g-label-column-rows" }, ma = /* @__PURE__ */ ee({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: t, colors: n, labelColumnTitle: r, rowHeight: a } = He(), s = va();
    return (i, l) => (S(), R("div", {
      class: "g-label-column",
      style: F({ fontFamily: B(t), color: B(n).text })
    }, [
      Z(i.$slots, "label-column-title", {}, () => [
        $("div", {
          class: "g-label-column-header",
          style: F({ background: B(n).primary })
        }, te(B(r)), 5)
      ]),
      $("div", ha, [
        (S(!0), R(ne, null, be(B(s)(), ({ label: u }, d) => (S(), R("div", {
          key: `${u}_${d}`,
          class: "g-label-column-row",
          style: F({
            background: d % 2 === 0 ? B(n).ternary : B(n).quartenary,
            height: `${B(a)}px`
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
const ya = { class: "g-timeaxis" }, ba = { class: "g-timeunits-container g-timeunits-low" }, wa = {
  key: 0,
  class: "g-timeunit-low-kw"
}, xa = { class: "g-timeunits-container g-timeunits-upper" }, Oa = /* @__PURE__ */ ee({
  __name: "GGanttTimeaxis",
  setup(e) {
    const { precision: t, colors: n } = He(), { timeaxisUnits: r } = tr();
    return (a, s) => (S(), R("div", ya, [
      $("div", ba, [
        (S(!0), R(ne, null, be(B(r).lowerUnits, ({ label: i, value: l, date: u, width: d }, c) => (S(), R("div", {
          key: i,
          class: "g-timeunit g-timeunit-low",
          style: F({
            flexDirection: B(t) === "hour" ? "column" : "row",
            alignItems: B(t) === "hour" ? "" : "center",
            width: d
          })
        }, [
          c === 0 ? (S(), R("span", wa, "KW")) : de("", !0),
          Z(a.$slots, "timeunit", {
            label: i,
            value: l,
            date: u
          }, () => [
            pt(te(i), 1)
          ]),
          B(t) === "hour" ? (S(), R("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: F({ background: B(n).text })
          }, null, 4)) : de("", !0)
        ], 4))), 128))
      ]),
      $("div", xa, [
        (S(!0), R(ne, null, be(B(r).upperUnits, ({ label: i, value: l, date: u, width: d }) => (S(), R("div", {
          key: i,
          class: "g-upper-timeunit",
          style: F({
            width: d
          })
        }, [
          Z(a.$slots, "upper-timeunit", {
            label: i,
            value: l,
            date: u
          }, () => [
            pt(te(i), 1)
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
function en(e = He()) {
  const { dateFormat: t, chartSize: n } = e, { chartStartDayjs: r, chartEndDayjs: a, toDayjs: s, format: i } = Jt(e), l = q(() => a.value.diff(r.value, "minutes"));
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
const Ca = /* @__PURE__ */ ee({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: t } = en(), n = U(Q()), { colors: r, dateFormat: a, currentTimeLabel: s } = He(), i = q(() => {
      const l = a.value || "YYYY-MM-DD HH:mm";
      return t(Q(n.value, l).format(l));
    });
    return (l, u) => (S(), R("div", {
      class: "g-grid-current-time",
      style: F({
        left: `${i.value}px`
      })
    }, [
      $("div", {
        class: "g-grid-current-time-marker",
        style: F({
          border: `1px dashed ${B(r).markerCurrentTime}`
        })
      }, null, 4),
      $("span", {
        class: "g-grid-current-time-text",
        style: F({ color: B(r).markerCurrentTime })
      }, [
        Z(l.$slots, "current-time-label", {}, () => [
          pt(te(B(s)), 1)
        ])
      ], 4)
    ], 4));
  }
});
const _a = { class: "g-gantt-legend" }, Ta = { class: "g-gantt-legend-collapse-container" }, Da = { class: "g-gantt-legend-areas-list" }, ka = { class: "g-gantt-legend-promotion" }, Ea = /* @__PURE__ */ ee({
  __name: "GGanttLegendNonCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  emits: ["update:isCollapsed"],
  setup(e) {
    const t = Pe("iconComponent"), n = U([]);
    return Te(() => {
      yt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((a) => {
          n.value.push(a.clientHeight);
        });
      });
    }), (r, a) => (S(), R("div", _a, [
      $("div", Ta, [
        $("div", {
          class: "g-gantt-legend-collapse",
          onClick: a[0] || (a[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }, [
          (S(), J(je(B(t)), {
            name: "chevron-right",
            class: "g-gantt-legend-do-collapse",
            size: "24"
          }))
        ])
      ]),
      $("div", Da, [
        (S(!0), R(ne, null, be(Object.entries(r.legend), ([s, i], l) => (S(), R("div", {
          key: s,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + "px"
          })
        }, [
          (S(), J(je(B(t)), {
            class: "g-gantt-legend-area-icon",
            "size-s": "24",
            "size-m": "24",
            "size-l": "32",
            name: r.legend[s][0].area.icon
          }, null, 8, ["name"])),
          $("div", ka, [
            (S(!0), R(ne, null, be(i, (u) => (S(), R("div", {
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
const Sa = /* @__PURE__ */ wt(Ea, [["__scopeId", "data-v-731ab940"]]), Aa = { class: "g-gantt-legend" }, Ma = { class: "g-gantt-legend-collapse-container" }, Pa = { class: "g-gantt-legend-areas-list" }, $a = { class: "g-gantt-legend-title" }, Ba = { class: "g-gantt-legend-area" }, La = { class: "g-gantt-legend-category-name" }, Ra = /* @__PURE__ */ ee({
  __name: "GGanttLegendCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  emits: ["update:isCollapsed"],
  setup(e) {
    const t = Pe("iconComponent"), n = U([]);
    return Te(() => {
      yt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((a) => {
          n.value.push(a.clientHeight);
        });
      });
    }), (r, a) => (S(), R("div", Aa, [
      $("div", Ma, [
        $("div", {
          class: "g-gantt-legend-collapse",
          onClick: a[0] || (a[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }, [
          (S(), J(je(B(t)), {
            name: "chevron-left",
            class: "g-gantt-legend-do-uncollapse",
            size: "24"
          }))
        ])
      ]),
      $("div", Pa, [
        (S(!0), R(ne, null, be(Object.entries(r.legend), ([s, i], l) => (S(), R("div", {
          key: s,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + "px"
          })
        }, [
          $("div", $a, [
            (S(), J(je(B(t)), {
              class: "g-gantt-legend-area-icon",
              "size-s": "24",
              "size-m": "24",
              "size-l": "32",
              name: r.legend[s][0].area.icon
            }, null, 8, ["name"])),
            $("p", Ba, te(s), 1)
          ]),
          (S(!0), R(ne, null, be(i, (u) => (S(), R("div", {
            key: u.category.name,
            class: "g-gantt-legend-promotion"
          }, [
            $("div", {
              class: "g-gantt-legend-category-color",
              style: F({ backgroundColor: "#" + u.category.color })
            }, null, 4),
            $("p", La, te(u.category.name), 1)
          ]))), 128))
        ], 4))), 128))
      ])
    ]));
  }
});
const Ia = /* @__PURE__ */ wt(Ra, [["__scopeId", "data-v-eea8ea32"]]), ja = /* @__PURE__ */ ee({
  __name: "GGanttLegend",
  props: {
    legend: {}
  },
  setup(e) {
    const t = U(!0), n = () => document.querySelector("body").clientWidth > 1200;
    return $r(() => {
      t.value = n();
    }), (r, a) => t.value ? (S(), J(Ia, {
      key: 1,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": a[1] || (a[1] = (s) => t.value = s),
      legend: r.legend
    }, null, 8, ["is-collapsed", "legend"])) : (S(), J(Sa, {
      key: 0,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": a[0] || (a[0] = (s) => t.value = s),
      legend: r.legend
    }, null, 8, ["is-collapsed", "legend"]));
  }
}), Ha = { class: "g-gantt-chart-container" }, Ya = { class: "g-gantt-chart-quarters" }, Ga = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, Ua = { class: "g-gantt-rows-list" }, za = /* @__PURE__ */ ee({
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
    Q.extend(Wn);
    const r = new Date(), a = new Date();
    r.setDate(15), r.setMonth(10), a.setDate(31), a.setMonth(11);
    const s = U(
      Q(new Date()).isBetween(r, a)
    ), i = t, { width: l, font: u, colorScheme: d } = gt(n), c = Br(), m = q(
      () => typeof d.value != "string" ? d.value : yn[d.value] || yn.default
    ), b = () => {
      var T;
      const p = (T = c.default) == null ? void 0 : T.call(c), w = [];
      return p && p.forEach((o) => {
        var y;
        if ((y = o.props) != null && y.bars) {
          const { label: g, bars: f } = o.props;
          w.push({ label: g, bars: f });
        } else
          Array.isArray(o.children) && o.children.forEach((g) => {
            var _;
            const f = g;
            if ((_ = f == null ? void 0 : f.props) != null && _.bars) {
              const { label: A, bars: L } = f.props;
              w.push({ label: A, bars: L });
            }
          });
      }), w;
    }, x = U(!1), O = (p, w, T, o) => {
      switch (p.type) {
        case "click":
          i("click-bar", { bar: w, e: p, datetime: T });
          break;
        case "mousedown":
          i("mousedown-bar", { bar: w, e: p, datetime: T });
          break;
        case "mouseup":
          i("mouseup-bar", { bar: w, e: p, datetime: T });
          break;
        case "dblclick":
          i("dblclick-bar", { bar: w, e: p, datetime: T });
          break;
        case "mouseenter":
          i("mouseenter-bar", { bar: w, e: p });
          break;
        case "mouseleave":
          i("mouseleave-bar", { bar: w, e: p });
          break;
        case "dragstart":
          x.value = !0, i("dragstart-bar", { bar: w, e: p });
          break;
        case "drag":
          i("drag-bar", { bar: w, e: p });
          break;
        case "dragend":
          x.value = !1, i("dragend-bar", { bar: w, e: p, movedBars: o });
          break;
        case "contextmenu":
          i("contextmenu-bar", { bar: w, e: p, datetime: T });
          break;
      }
    }, v = U(null), C = Xn(v);
    return Bt(Qn, b), Bt(Kn, {
      ...gt(n),
      colors: m,
      chartSize: C
    }), Bt(Zn, O), (p, w) => (S(), R("div", Ha, [
      ft(ja, {
        legend: p.legend ? p.legend : {}
      }, null, 8, ["legend"]),
      $("div", {
        class: Lt([[{ "labels-in-column": !!p.labelColumnTitle }], "g-gantt-chart-wrapper"])
      }, [
        p.labelColumnTitle ? (S(), J(ma, {
          key: 0,
          style: F({
            width: p.labelColumnWidth
          })
        }, {
          "label-column-title": We(() => [
            Z(p.$slots, "label-column-title")
          ]),
          "label-column-row": We(({ label: T }) => [
            Z(p.$slots, "label-column-row", { label: T })
          ]),
          _: 3
        }, 8, ["style"])) : de("", !0),
        $("div", {
          ref_key: "ganttChart",
          ref: v,
          class: Lt([
            "g-gantt-chart",
            {
              "with-column": p.labelColumnTitle,
              "g-gantt-chart-container--4-quarters-width": !s.value,
              "g-gantt-chart-container--5-quarters-width": s.value
            }
          ]),
          style: F({ width: B(l), background: m.value.background, fontFamily: B(u) })
        }, [
          p.grid ? (S(), J(bn, {
            key: 0,
            "highlighted-units": p.highlightedUnits
          }, null, 8, ["highlighted-units"])) : de("", !0),
          p.currentTime ? (S(), J(Ca, { key: 1 }, {
            "current-time-label": We(() => [
              Z(p.$slots, "current-time-label")
            ]),
            _: 3
          })) : de("", !0),
          $("div", Ya, [
            w[0] || (w[0] = $("div", { class: "g-gantt-chart-quarter" }, "Q1", -1)),
            w[1] || (w[1] = $("div", { class: "g-gantt-chart-quarter" }, "Q2", -1)),
            w[2] || (w[2] = $("div", { class: "g-gantt-chart-quarter" }, "Q3", -1)),
            w[3] || (w[3] = $("div", { class: "g-gantt-chart-quarter" }, "Q4", -1)),
            s.value ? (S(), R("div", Ga, "Q1")) : de("", !0)
          ]),
          $("div", {
            class: Lt([
              "g-gantt-rows-container",
              n.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            $("div", Ua, [
              Z(p.$slots, "default")
            ]),
            ft(bn, { "highlighted-units": p.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          p.hideTimeaxis ? de("", !0) : (S(), J(Oa, { key: 2 }, {
            "upper-timeunit": We(({ label: T, value: o, date: y }) => [
              Z(p.$slots, "upper-timeunit", {
                date: y,
                label: T,
                value: o
              })
            ]),
            timeunit: We(({ label: T, value: o, date: y }) => [
              Z(p.$slots, "timeunit", {
                date: y,
                label: T,
                value: o
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
var re = "top", pe = "bottom", ge = "right", ae = "left", tn = "auto", xt = [re, pe, ge, ae], et = "start", vt = "end", Wa = "clippingParents", nr = "viewport", ut = "popper", Fa = "reference", wn = /* @__PURE__ */ xt.reduce(function(e, t) {
  return e.concat([t + "-" + et, t + "-" + vt]);
}, []), rr = /* @__PURE__ */ [].concat(xt, [tn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + et, t + "-" + vt]);
}, []), Na = "beforeRead", Va = "read", qa = "afterRead", Xa = "beforeMain", Qa = "main", Ka = "afterMain", Za = "beforeWrite", Ja = "write", eo = "afterWrite", to = [Na, Va, qa, Xa, Qa, Ka, Za, Ja, eo];
function De(e) {
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
function ar(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = we(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function no(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !fe(s) || !De(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(i) {
      var l = a[i];
      l === !1 ? s.removeAttribute(i) : s.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function ro(e) {
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
      var a = t.elements[r], s = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = i.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !fe(a) || !De(a) || (Object.assign(a.style, l), Object.keys(s).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var or = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: no,
  effect: ro,
  requires: ["computeStyles"]
};
function _e(e) {
  return e.split("-")[0];
}
var Ve = Math.max, It = Math.min, nt = Math.round;
function rt(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, a = 1;
  if (fe(e) && t) {
    var s = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = nt(n.width) / i || 1), s > 0 && (a = nt(n.height) / s || 1);
  }
  return {
    width: n.width / r,
    height: n.height / a,
    top: n.top / a,
    right: n.right / r,
    bottom: n.bottom / a,
    left: n.left / r,
    x: n.left / r,
    y: n.top / a
  };
}
function nn(e) {
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
  if (n && ar(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ke(e) {
  return we(e).getComputedStyle(e);
}
function ao(e) {
  return ["table", "td", "th"].indexOf(De(e)) >= 0;
}
function Ye(e) {
  return ((tt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ht(e) {
  return De(e) === "html" ? e : e.assignedSlot || e.parentNode || (ar(e) ? e.host : null) || Ye(e);
}
function xn(e) {
  return !fe(e) || ke(e).position === "fixed" ? null : e.offsetParent;
}
function oo(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && fe(e)) {
    var r = ke(e);
    if (r.position === "fixed")
      return null;
  }
  for (var a = Ht(e); fe(a) && ["html", "body"].indexOf(De(a)) < 0; ) {
    var s = ke(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ot(e) {
  for (var t = we(e), n = xn(e); n && ao(n) && ke(n).position === "static"; )
    n = xn(n);
  return n && (De(n) === "html" || De(n) === "body" && ke(n).position === "static") ? t : n || oo(e) || t;
}
function rn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ct(e, t, n) {
  return Ve(e, It(t, n));
}
function io(e, t, n) {
  var r = ct(e, t, n);
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
var so = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, lr(typeof t != "number" ? t : ur(t, xt));
};
function lo(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = _e(n.placement), u = rn(l), d = [ae, ge].indexOf(l) >= 0, c = d ? "height" : "width";
  if (!(!s || !i)) {
    var m = so(a.padding, n), b = nn(s), x = u === "y" ? re : ae, O = u === "y" ? pe : ge, v = n.rects.reference[c] + n.rects.reference[u] - i[u] - n.rects.popper[c], C = i[u] - n.rects.reference[u], p = Ot(s), w = p ? u === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, T = v / 2 - C / 2, o = m[x], y = w - b[c] - m[O], g = w / 2 - b[c] / 2 + T, f = ct(o, g, y), _ = u;
    n.modifiersData[r] = (t = {}, t[_] = f, t.centerOffset = f - g, t);
  }
}
function uo(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || !ir(t.elements.popper, a) || (t.elements.arrow = a));
}
var co = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: lo,
  effect: uo,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function at(e) {
  return e.split("-")[1];
}
var fo = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function po(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return {
    x: nt(t * a) / a || 0,
    y: nt(n * a) / a || 0
  };
}
function On(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, i = e.offsets, l = e.position, u = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, m = e.isFixed, b = c === !0 ? po(i) : typeof c == "function" ? c(i) : i, x = b.x, O = x === void 0 ? 0 : x, v = b.y, C = v === void 0 ? 0 : v, p = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), T = ae, o = re, y = window;
  if (d) {
    var g = Ot(n), f = "clientHeight", _ = "clientWidth";
    if (g === we(n) && (g = Ye(n), ke(g).position !== "static" && l === "absolute" && (f = "scrollHeight", _ = "scrollWidth")), g = g, a === re || (a === ae || a === ge) && s === vt) {
      o = pe;
      var A = m && y.visualViewport ? y.visualViewport.height : g[f];
      C -= A - r.height, C *= u ? 1 : -1;
    }
    if (a === ae || (a === re || a === pe) && s === vt) {
      T = ge;
      var L = m && y.visualViewport ? y.visualViewport.width : g[_];
      O -= L - r.width, O *= u ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, d && fo);
  if (u) {
    var k;
    return Object.assign({}, M, (k = {}, k[o] = w ? "0" : "", k[T] = p ? "0" : "", k.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + O + "px, " + C + "px)" : "translate3d(" + O + "px, " + C + "px, 0)", k));
  }
  return Object.assign({}, M, (t = {}, t[o] = w ? C + "px" : "", t[T] = p ? O + "px" : "", t.transform = "", t));
}
function go(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, s = n.adaptive, i = s === void 0 ? !0 : s, l = n.roundOffsets, u = l === void 0 ? !0 : l, d = {
    placement: _e(t.placement),
    variation: at(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, On(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, On(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var vo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: go,
  data: {}
}, Mt = {
  passive: !0
};
function ho(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, i = r.resize, l = i === void 0 ? !0 : i, u = we(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && d.forEach(function(c) {
    c.addEventListener("scroll", n.update, Mt);
  }), l && u.addEventListener("resize", n.update, Mt), function() {
    s && d.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Mt);
    }), l && u.removeEventListener("resize", n.update, Mt);
  };
}
var mo = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ho,
  data: {}
}, yo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return yo[t];
  });
}
var bo = {
  start: "end",
  end: "start"
};
function Cn(e) {
  return e.replace(/start|end/g, function(t) {
    return bo[t];
  });
}
function an(e) {
  var t = we(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function on(e) {
  return rt(Ye(e)).left + an(e).scrollLeft;
}
function wo(e) {
  var t = we(e), n = Ye(e), r = t.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  return r && (a = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, l = r.offsetTop)), {
    width: a,
    height: s,
    x: i + on(e),
    y: l
  };
}
function xo(e) {
  var t, n = Ye(e), r = an(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ve(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = Ve(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + on(e), u = -r.scrollTop;
  return ke(a || n).direction === "rtl" && (l += Ve(n.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: l,
    y: u
  };
}
function sn(e) {
  var t = ke(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function cr(e) {
  return ["html", "body", "#document"].indexOf(De(e)) >= 0 ? e.ownerDocument.body : fe(e) && sn(e) ? e : cr(Ht(e));
}
function dt(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = cr(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = we(r), i = a ? [s].concat(s.visualViewport || [], sn(r) ? r : []) : r, l = t.concat(i);
  return a ? l : l.concat(dt(Ht(i)));
}
function Xt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Oo(e) {
  var t = rt(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function _n(e, t) {
  return t === nr ? Xt(wo(e)) : tt(t) ? Oo(t) : Xt(xo(Ye(e)));
}
function Co(e) {
  var t = dt(Ht(e)), n = ["absolute", "fixed"].indexOf(ke(e).position) >= 0, r = n && fe(e) ? Ot(e) : e;
  return tt(r) ? t.filter(function(a) {
    return tt(a) && ir(a, r) && De(a) !== "body" && (n ? ke(a).position !== "static" : !0);
  }) : [];
}
function _o(e, t, n) {
  var r = t === "clippingParents" ? Co(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = _n(e, u);
    return l.top = Ve(d.top, l.top), l.right = It(d.right, l.right), l.bottom = It(d.bottom, l.bottom), l.left = Ve(d.left, l.left), l;
  }, _n(e, s));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function dr(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? _e(r) : null, s = r ? at(r) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
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
    case ge:
      u = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ae:
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
  var d = a ? rn(a) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (s) {
      case et:
        u[d] = u[d] - (t[c] / 2 - n[c] / 2);
        break;
      case vt:
        u[d] = u[d] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function ht(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.boundary, i = s === void 0 ? Wa : s, l = n.rootBoundary, u = l === void 0 ? nr : l, d = n.elementContext, c = d === void 0 ? ut : d, m = n.altBoundary, b = m === void 0 ? !1 : m, x = n.padding, O = x === void 0 ? 0 : x, v = lr(typeof O != "number" ? O : ur(O, xt)), C = c === ut ? Fa : ut, p = e.rects.popper, w = e.elements[b ? C : c], T = _o(tt(w) ? w : w.contextElement || Ye(e.elements.popper), i, u), o = rt(e.elements.reference), y = dr({
    reference: o,
    element: p,
    strategy: "absolute",
    placement: a
  }), g = Xt(Object.assign({}, p, y)), f = c === ut ? g : o, _ = {
    top: T.top - f.top + v.top,
    bottom: f.bottom - T.bottom + v.bottom,
    left: T.left - f.left + v.left,
    right: f.right - T.right + v.right
  }, A = e.modifiersData.offset;
  if (c === ut && A) {
    var L = A[a];
    Object.keys(_).forEach(function(M) {
      var k = [ge, pe].indexOf(M) >= 0 ? 1 : -1, H = [re, pe].indexOf(M) >= 0 ? "y" : "x";
      _[M] += L[H] * k;
    });
  }
  return _;
}
function To(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, d = u === void 0 ? rr : u, c = at(r), m = c ? l ? wn : wn.filter(function(O) {
    return at(O) === c;
  }) : xt, b = m.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  b.length === 0 && (b = m);
  var x = b.reduce(function(O, v) {
    return O[v] = ht(e, {
      placement: v,
      boundary: a,
      rootBoundary: s,
      padding: i
    })[_e(v)], O;
  }, {});
  return Object.keys(x).sort(function(O, v) {
    return x[O] - x[v];
  });
}
function Do(e) {
  if (_e(e) === tn)
    return [];
  var t = Rt(e);
  return [Cn(e), t, Cn(t)];
}
function ko(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, i = n.altAxis, l = i === void 0 ? !0 : i, u = n.fallbackPlacements, d = n.padding, c = n.boundary, m = n.rootBoundary, b = n.altBoundary, x = n.flipVariations, O = x === void 0 ? !0 : x, v = n.allowedAutoPlacements, C = t.options.placement, p = _e(C), w = p === C, T = u || (w || !O ? [Rt(C)] : Do(C)), o = [C].concat(T).reduce(function(ve, oe) {
      return ve.concat(_e(oe) === tn ? To(t, {
        placement: oe,
        boundary: c,
        rootBoundary: m,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: v
      }) : oe);
    }, []), y = t.rects.reference, g = t.rects.popper, f = /* @__PURE__ */ new Map(), _ = !0, A = o[0], L = 0; L < o.length; L++) {
      var M = o[L], k = _e(M), H = at(M) === et, j = [re, pe].indexOf(k) >= 0, z = j ? "width" : "height", N = ht(t, {
        placement: M,
        boundary: c,
        rootBoundary: m,
        altBoundary: b,
        padding: d
      }), W = j ? H ? ge : ae : H ? pe : re;
      y[z] > g[z] && (W = Rt(W));
      var Y = Rt(W), V = [];
      if (s && V.push(N[k] <= 0), l && V.push(N[W] <= 0, N[Y] <= 0), V.every(function(ve) {
        return ve;
      })) {
        A = M, _ = !1;
        break;
      }
      f.set(M, V);
    }
    if (_)
      for (var X = O ? 3 : 1, se = function(oe) {
        var he = o.find(function(Se) {
          var ie = f.get(Se);
          if (ie)
            return ie.slice(0, oe).every(function(Oe) {
              return Oe;
            });
        });
        if (he)
          return A = he, "break";
      }, le = X; le > 0; le--) {
        var Ee = se(le);
        if (Ee === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
var Eo = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ko,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Tn(e, t, n) {
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
  return [re, ge, pe, ae].some(function(t) {
    return e[t] >= 0;
  });
}
function So(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, i = ht(t, {
    elementContext: "reference"
  }), l = ht(t, {
    altBoundary: !0
  }), u = Tn(i, r), d = Tn(l, a, s), c = Dn(u), m = Dn(d);
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
var Ao = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: So
};
function Mo(e, t, n) {
  var r = _e(e), a = [ae, re].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = s[0], l = s[1];
  return i = i || 0, l = (l || 0) * a, [ae, ge].indexOf(r) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Po(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, i = rr.reduce(function(c, m) {
    return c[m] = Mo(m, t.rects, s), c;
  }, {}), l = i[t.placement], u = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i;
}
var $o = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Po
};
function Bo(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = dr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var Lo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Bo,
  data: {}
};
function Ro(e) {
  return e === "x" ? "y" : "x";
}
function Io(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, i = n.altAxis, l = i === void 0 ? !1 : i, u = n.boundary, d = n.rootBoundary, c = n.altBoundary, m = n.padding, b = n.tether, x = b === void 0 ? !0 : b, O = n.tetherOffset, v = O === void 0 ? 0 : O, C = ht(t, {
    boundary: u,
    rootBoundary: d,
    padding: m,
    altBoundary: c
  }), p = _e(t.placement), w = at(t.placement), T = !w, o = rn(p), y = Ro(o), g = t.modifiersData.popperOffsets, f = t.rects.reference, _ = t.rects.popper, A = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, L = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, k = {
    x: 0,
    y: 0
  };
  if (!!g) {
    if (s) {
      var H, j = o === "y" ? re : ae, z = o === "y" ? pe : ge, N = o === "y" ? "height" : "width", W = g[o], Y = W + C[j], V = W - C[z], X = x ? -_[N] / 2 : 0, se = w === et ? f[N] : _[N], le = w === et ? -_[N] : -f[N], Ee = t.elements.arrow, ve = x && Ee ? nn(Ee) : {
        width: 0,
        height: 0
      }, oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sr(), he = oe[j], Se = oe[z], ie = ct(0, f[N], ve[N]), Oe = T ? f[N] / 2 - X - ie - he - L.mainAxis : se - ie - he - L.mainAxis, ue = T ? -f[N] / 2 + X + ie + Se + L.mainAxis : le + ie + Se + L.mainAxis, me = t.elements.arrow && Ot(t.elements.arrow), $e = me ? o === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, Ae = (H = M == null ? void 0 : M[o]) != null ? H : 0, Be = W + Oe - Ae - $e, Le = W + ue - Ae, Ke = ct(x ? It(Y, Be) : Y, W, x ? Ve(V, Le) : V);
      g[o] = Ke, k[o] = Ke - W;
    }
    if (l) {
      var it, Ct = o === "x" ? re : ae, _t = o === "x" ? pe : ge, Me = g[y], Re = y === "y" ? "height" : "width", st = Me + C[Ct], Ge = Me - C[_t], lt = [re, ae].indexOf(p) !== -1, Tt = (it = M == null ? void 0 : M[y]) != null ? it : 0, Dt = lt ? st : Me - f[Re] - _[Re] - Tt + L.altAxis, kt = lt ? Me + f[Re] + _[Re] - Tt - L.altAxis : Ge, Et = x && lt ? io(Dt, Me, kt) : ct(x ? Dt : st, Me, x ? kt : Ge);
      g[y] = Et, k[y] = Et - Me;
    }
    t.modifiersData[r] = k;
  }
}
var jo = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Io,
  requiresIfExists: ["offset"]
};
function Ho(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Yo(e) {
  return e === we(e) || !fe(e) ? an(e) : Ho(e);
}
function Go(e) {
  var t = e.getBoundingClientRect(), n = nt(t.width) / e.offsetWidth || 1, r = nt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Uo(e, t, n) {
  n === void 0 && (n = !1);
  var r = fe(t), a = fe(t) && Go(t), s = Ye(t), i = rt(e, a), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((De(t) !== "body" || sn(s)) && (l = Yo(t)), fe(t) ? (u = rt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = on(s))), {
    x: i.left + l.scrollLeft - u.x,
    y: i.top + l.scrollTop - u.y,
    width: i.width,
    height: i.height
  };
}
function zo(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && a(u);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || a(s);
  }), r;
}
function Wo(e) {
  var t = zo(e);
  return to.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Fo(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function No(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var kn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function En() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Vo(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? kn : a;
  return function(l, u, d) {
    d === void 0 && (d = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kn, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: u
      },
      attributes: {},
      styles: {}
    }, m = [], b = !1, x = {
      state: c,
      setOptions: function(p) {
        var w = typeof p == "function" ? p(c.options) : p;
        v(), c.options = Object.assign({}, s, c.options, w), c.scrollParents = {
          reference: tt(l) ? dt(l) : l.contextElement ? dt(l.contextElement) : [],
          popper: dt(u)
        };
        var T = Wo(No([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = T.filter(function(o) {
          return o.enabled;
        }), O(), x.update();
      },
      forceUpdate: function() {
        if (!b) {
          var p = c.elements, w = p.reference, T = p.popper;
          if (!!En(w, T)) {
            c.rects = {
              reference: Uo(w, Ot(T), c.options.strategy === "fixed"),
              popper: nn(T)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(L) {
              return c.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var o = 0; o < c.orderedModifiers.length; o++) {
              if (c.reset === !0) {
                c.reset = !1, o = -1;
                continue;
              }
              var y = c.orderedModifiers[o], g = y.fn, f = y.options, _ = f === void 0 ? {} : f, A = y.name;
              typeof g == "function" && (c = g({
                state: c,
                options: _,
                name: A,
                instance: x
              }) || c);
            }
          }
        }
      },
      update: Fo(function() {
        return new Promise(function(C) {
          x.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        v(), b = !0;
      }
    };
    if (!En(l, u))
      return x;
    x.setOptions(d).then(function(C) {
      !b && d.onFirstUpdate && d.onFirstUpdate(C);
    });
    function O() {
      c.orderedModifiers.forEach(function(C) {
        var p = C.name, w = C.options, T = w === void 0 ? {} : w, o = C.effect;
        if (typeof o == "function") {
          var y = o({
            state: c,
            name: p,
            instance: x,
            options: T
          }), g = function() {
          };
          m.push(y || g);
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
var qo = [mo, Lo, vo, or, $o, Eo, jo, co, Ao], Xo = /* @__PURE__ */ Vo({
  defaultModifiers: qo
}), Qo = "tippy-box", fr = "tippy-content", pr = "tippy-backdrop", gr = "tippy-arrow", vr = "tippy-svg-arrow", ze = {
  passive: !0,
  capture: !0
}, hr = function() {
  return document.body;
};
function zt(e, t, n) {
  if (Array.isArray(e)) {
    var r = e[t];
    return r == null ? Array.isArray(n) ? n[t] : n : r;
  }
  return e;
}
function ln(e, t) {
  var n = {}.toString.call(e);
  return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
}
function mr(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function Sn(e, t) {
  if (t === 0)
    return e;
  var n;
  return function(r) {
    clearTimeout(n), n = setTimeout(function() {
      e(r);
    }, t);
  };
}
function Ko(e, t) {
  var n = Object.assign({}, e);
  return t.forEach(function(r) {
    delete n[r];
  }), n;
}
function Zo(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Fe(e) {
  return [].concat(e);
}
function An(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Jo(e) {
  return e.filter(function(t, n) {
    return e.indexOf(t) === n;
  });
}
function yr(e) {
  return e.split("-")[0];
}
function ot(e) {
  return [].slice.call(e);
}
function Mn(e) {
  return Object.keys(e).reduce(function(t, n) {
    return e[n] !== void 0 && (t[n] = e[n]), t;
  }, {});
}
function qe() {
  return document.createElement("div");
}
function Yt(e) {
  return ["Element", "Fragment"].some(function(t) {
    return ln(e, t);
  });
}
function ei(e) {
  return ln(e, "NodeList");
}
function un(e) {
  return ln(e, "MouseEvent");
}
function ti(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function ni(e) {
  return Yt(e) ? [e] : ei(e) ? ot(e) : Array.isArray(e) ? e : ot(document.querySelectorAll(e));
}
function Wt(e, t) {
  e.forEach(function(n) {
    n && (n.style.transitionDuration = t + "ms");
  });
}
function mt(e, t) {
  e.forEach(function(n) {
    n && n.setAttribute("data-state", t);
  });
}
function br(e) {
  var t, n = Fe(e), r = n[0];
  return r != null && (t = r.ownerDocument) != null && t.body ? r.ownerDocument : document;
}
function ri(e, t) {
  var n = t.clientX, r = t.clientY;
  return e.every(function(a) {
    var s = a.popperRect, i = a.popperState, l = a.props, u = l.interactiveBorder, d = yr(i.placement), c = i.modifiersData.offset;
    if (!c)
      return !0;
    var m = d === "bottom" ? c.top.y : 0, b = d === "top" ? c.bottom.y : 0, x = d === "right" ? c.left.x : 0, O = d === "left" ? c.right.x : 0, v = s.top - r + m > u, C = r - s.bottom - b > u, p = s.left - n + x > u, w = n - s.right - O > u;
    return v || C || p || w;
  });
}
function Ft(e, t, n) {
  var r = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
    e[r](a, n);
  });
}
function Pn(e, t) {
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
}, $n = 0;
function ai() {
  Ce.isTouch || (Ce.isTouch = !0, window.performance && document.addEventListener("mousemove", wr));
}
function wr() {
  var e = performance.now();
  e - $n < 20 && (Ce.isTouch = !1, document.removeEventListener("mousemove", wr)), $n = e;
}
function oi() {
  var e = document.activeElement;
  if (ti(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function ii() {
  document.addEventListener("touchstart", ai, ze), window.addEventListener("blur", oi);
}
var si = typeof window < "u" && typeof document < "u", li = si ? !!window.msCrypto : !1, ui = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, ci = {
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
}, ui, ci), di = Object.keys(ye), fi = function(t) {
  var n = Object.keys(t);
  n.forEach(function(r) {
    ye[r] = t[r];
  });
};
function xr(e) {
  var t = e.plugins || [], n = t.reduce(function(r, a) {
    var s = a.name, i = a.defaultValue;
    if (s) {
      var l;
      r[s] = e[s] !== void 0 ? e[s] : (l = ye[s]) != null ? l : i;
    }
    return r;
  }, {});
  return Object.assign({}, e, n);
}
function pi(e, t) {
  var n = t ? Object.keys(xr(Object.assign({}, ye, {
    plugins: t
  }))) : di, r = n.reduce(function(a, s) {
    var i = (e.getAttribute("data-tippy-" + s) || "").trim();
    if (!i)
      return a;
    if (s === "content")
      a[s] = i;
    else
      try {
        a[s] = JSON.parse(i);
      } catch {
        a[s] = i;
      }
    return a;
  }, {});
  return r;
}
function Bn(e, t) {
  var n = Object.assign({}, t, {
    content: mr(t.content, [e])
  }, t.ignoreAttributes ? {} : pi(e, t.plugins));
  return n.aria = Object.assign({}, ye.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
  }, n;
}
var gi = function() {
  return "innerHTML";
};
function Qt(e, t) {
  e[gi()] = t;
}
function Ln(e) {
  var t = qe();
  return e === !0 ? t.className = gr : (t.className = vr, Yt(e) ? t.appendChild(e) : Qt(t, e)), t;
}
function Rn(e, t) {
  Yt(t.content) ? (Qt(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Qt(e, t.content) : e.textContent = t.content);
}
function jt(e) {
  var t = e.firstElementChild, n = ot(t.children);
  return {
    box: t,
    content: n.find(function(r) {
      return r.classList.contains(fr);
    }),
    arrow: n.find(function(r) {
      return r.classList.contains(gr) || r.classList.contains(vr);
    }),
    backdrop: n.find(function(r) {
      return r.classList.contains(pr);
    })
  };
}
function Or(e) {
  var t = qe(), n = qe();
  n.className = Qo, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = qe();
  r.className = fr, r.setAttribute("data-state", "hidden"), Rn(r, e.props), t.appendChild(n), n.appendChild(r), a(e.props, e.props);
  function a(s, i) {
    var l = jt(t), u = l.box, d = l.content, c = l.arrow;
    i.theme ? u.setAttribute("data-theme", i.theme) : u.removeAttribute("data-theme"), typeof i.animation == "string" ? u.setAttribute("data-animation", i.animation) : u.removeAttribute("data-animation"), i.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof i.maxWidth == "number" ? i.maxWidth + "px" : i.maxWidth, i.role ? u.setAttribute("role", i.role) : u.removeAttribute("role"), (s.content !== i.content || s.allowHTML !== i.allowHTML) && Rn(d, e.props), i.arrow ? c ? s.arrow !== i.arrow && (u.removeChild(c), u.appendChild(Ln(i.arrow))) : u.appendChild(Ln(i.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: a
  };
}
Or.$$tippy = !0;
var vi = 1, Pt = [], Nt = [];
function hi(e, t) {
  var n = Bn(e, Object.assign({}, ye, xr(Mn(t)))), r, a, s, i = !1, l = !1, u = !1, d = !1, c, m, b, x = [], O = Sn(Be, n.interactiveDebounce), v, C = vi++, p = null, w = Jo(n.plugins), T = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, o = {
    id: C,
    reference: e,
    popper: qe(),
    popperInstance: p,
    props: n,
    state: T,
    plugins: w,
    clearDelayTimeouts: Dt,
    setProps: kt,
    setContent: Et,
    show: Tr,
    hide: Dr,
    hideWithInteractivity: kr,
    enable: lt,
    disable: Tt,
    unmount: Er,
    destroy: Sr
  };
  if (!n.render)
    return o;
  var y = n.render(o), g = y.popper, f = y.onUpdate;
  g.setAttribute("data-tippy-root", ""), g.id = "tippy-" + o.id, o.popper = g, e._tippy = o, g._tippy = o;
  var _ = w.map(function(h) {
    return h.fn(o);
  }), A = e.hasAttribute("aria-expanded");
  return me(), X(), W(), Y("onCreate", [o]), n.showOnCreate && st(), g.addEventListener("mouseenter", function() {
    o.props.interactive && o.state.isVisible && o.clearDelayTimeouts();
  }), g.addEventListener("mouseleave", function() {
    o.props.interactive && o.props.trigger.indexOf("mouseenter") >= 0 && j().addEventListener("mousemove", O);
  }), o;
  function L() {
    var h = o.props.touch;
    return Array.isArray(h) ? h : [h, 0];
  }
  function M() {
    return L()[0] === "hold";
  }
  function k() {
    var h;
    return !!((h = o.props.render) != null && h.$$tippy);
  }
  function H() {
    return v || e;
  }
  function j() {
    var h = H().parentNode;
    return h ? br(h) : document;
  }
  function z() {
    return jt(g);
  }
  function N(h) {
    return o.state.isMounted && !o.state.isVisible || Ce.isTouch || c && c.type === "focus" ? 0 : zt(o.props.delay, h ? 0 : 1, ye.delay);
  }
  function W(h) {
    h === void 0 && (h = !1), g.style.pointerEvents = o.props.interactive && !h ? "" : "none", g.style.zIndex = "" + o.props.zIndex;
  }
  function Y(h, D, P) {
    if (P === void 0 && (P = !0), _.forEach(function(I) {
      I[h] && I[h].apply(I, D);
    }), P) {
      var G;
      (G = o.props)[h].apply(G, D);
    }
  }
  function V() {
    var h = o.props.aria;
    if (!!h.content) {
      var D = "aria-" + h.content, P = g.id, G = Fe(o.props.triggerTarget || e);
      G.forEach(function(I) {
        var K = I.getAttribute(D);
        if (o.state.isVisible)
          I.setAttribute(D, K ? K + " " + P : P);
        else {
          var ce = K && K.replace(P, "").trim();
          ce ? I.setAttribute(D, ce) : I.removeAttribute(D);
        }
      });
    }
  }
  function X() {
    if (!(A || !o.props.aria.expanded)) {
      var h = Fe(o.props.triggerTarget || e);
      h.forEach(function(D) {
        o.props.interactive ? D.setAttribute("aria-expanded", o.state.isVisible && D === H() ? "true" : "false") : D.removeAttribute("aria-expanded");
      });
    }
  }
  function se() {
    j().removeEventListener("mousemove", O), Pt = Pt.filter(function(h) {
      return h !== O;
    });
  }
  function le(h) {
    if (!(Ce.isTouch && (u || h.type === "mousedown"))) {
      var D = h.composedPath && h.composedPath()[0] || h.target;
      if (!(o.props.interactive && Pn(g, D))) {
        if (Fe(o.props.triggerTarget || e).some(function(P) {
          return Pn(P, D);
        })) {
          if (Ce.isTouch || o.state.isVisible && o.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Y("onClickOutside", [o, h]);
        o.props.hideOnClick === !0 && (o.clearDelayTimeouts(), o.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), o.state.isMounted || he());
      }
    }
  }
  function Ee() {
    u = !0;
  }
  function ve() {
    u = !1;
  }
  function oe() {
    var h = j();
    h.addEventListener("mousedown", le, !0), h.addEventListener("touchend", le, ze), h.addEventListener("touchstart", ve, ze), h.addEventListener("touchmove", Ee, ze);
  }
  function he() {
    var h = j();
    h.removeEventListener("mousedown", le, !0), h.removeEventListener("touchend", le, ze), h.removeEventListener("touchstart", ve, ze), h.removeEventListener("touchmove", Ee, ze);
  }
  function Se(h, D) {
    Oe(h, function() {
      !o.state.isVisible && g.parentNode && g.parentNode.contains(g) && D();
    });
  }
  function ie(h, D) {
    Oe(h, D);
  }
  function Oe(h, D) {
    var P = z().box;
    function G(I) {
      I.target === P && (Ft(P, "remove", G), D());
    }
    if (h === 0)
      return D();
    Ft(P, "remove", m), Ft(P, "add", G), m = G;
  }
  function ue(h, D, P) {
    P === void 0 && (P = !1);
    var G = Fe(o.props.triggerTarget || e);
    G.forEach(function(I) {
      I.addEventListener(h, D, P), x.push({
        node: I,
        eventType: h,
        handler: D,
        options: P
      });
    });
  }
  function me() {
    M() && (ue("touchstart", Ae, {
      passive: !0
    }), ue("touchend", Le, {
      passive: !0
    })), Zo(o.props.trigger).forEach(function(h) {
      if (h !== "manual")
        switch (ue(h, Ae), h) {
          case "mouseenter":
            ue("mouseleave", Le);
            break;
          case "focus":
            ue(li ? "focusout" : "blur", Ke);
            break;
          case "focusin":
            ue("focusout", Ke);
            break;
        }
    });
  }
  function $e() {
    x.forEach(function(h) {
      var D = h.node, P = h.eventType, G = h.handler, I = h.options;
      D.removeEventListener(P, G, I);
    }), x = [];
  }
  function Ae(h) {
    var D, P = !1;
    if (!(!o.state.isEnabled || it(h) || l)) {
      var G = ((D = c) == null ? void 0 : D.type) === "focus";
      c = h, v = h.currentTarget, X(), !o.state.isVisible && un(h) && Pt.forEach(function(I) {
        return I(h);
      }), h.type === "click" && (o.props.trigger.indexOf("mouseenter") < 0 || i) && o.props.hideOnClick !== !1 && o.state.isVisible ? P = !0 : st(h), h.type === "click" && (i = !P), P && !G && Ge(h);
    }
  }
  function Be(h) {
    var D = h.target, P = H().contains(D) || g.contains(D);
    if (!(h.type === "mousemove" && P)) {
      var G = Re().concat(g).map(function(I) {
        var K, ce = I._tippy, Ze = (K = ce.popperInstance) == null ? void 0 : K.state;
        return Ze ? {
          popperRect: I.getBoundingClientRect(),
          popperState: Ze,
          props: n
        } : null;
      }).filter(Boolean);
      ri(G, h) && (se(), Ge(h));
    }
  }
  function Le(h) {
    var D = it(h) || o.props.trigger.indexOf("click") >= 0 && i;
    if (!D) {
      if (o.props.interactive) {
        o.hideWithInteractivity(h);
        return;
      }
      Ge(h);
    }
  }
  function Ke(h) {
    o.props.trigger.indexOf("focusin") < 0 && h.target !== H() || o.props.interactive && h.relatedTarget && g.contains(h.relatedTarget) || Ge(h);
  }
  function it(h) {
    return Ce.isTouch ? M() !== h.type.indexOf("touch") >= 0 : !1;
  }
  function Ct() {
    _t();
    var h = o.props, D = h.popperOptions, P = h.placement, G = h.offset, I = h.getReferenceClientRect, K = h.moveTransition, ce = k() ? jt(g).arrow : null, Ze = I ? {
      getBoundingClientRect: I,
      contextElement: I.contextElement || H()
    } : e, cn = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(St) {
        var Je = St.state;
        if (k()) {
          var Ar = z(), Ut = Ar.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(At) {
            At === "placement" ? Ut.setAttribute("data-placement", Je.placement) : Je.attributes.popper["data-popper-" + At] ? Ut.setAttribute("data-" + At, "") : Ut.removeAttribute("data-" + At);
          }), Je.attributes.popper = {};
        }
      }
    }, Ue = [{
      name: "offset",
      options: {
        offset: G
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
    }, cn];
    k() && ce && Ue.push({
      name: "arrow",
      options: {
        element: ce,
        padding: 3
      }
    }), Ue.push.apply(Ue, (D == null ? void 0 : D.modifiers) || []), o.popperInstance = Xo(Ze, g, Object.assign({}, D, {
      placement: P,
      onFirstUpdate: b,
      modifiers: Ue
    }));
  }
  function _t() {
    o.popperInstance && (o.popperInstance.destroy(), o.popperInstance = null);
  }
  function Me() {
    var h = o.props.appendTo, D, P = H();
    o.props.interactive && h === hr || h === "parent" ? D = P.parentNode : D = mr(h, [P]), D.contains(g) || D.appendChild(g), o.state.isMounted = !0, Ct();
  }
  function Re() {
    return ot(g.querySelectorAll("[data-tippy-root]"));
  }
  function st(h) {
    o.clearDelayTimeouts(), h && Y("onTrigger", [o, h]), oe();
    var D = N(!0), P = L(), G = P[0], I = P[1];
    Ce.isTouch && G === "hold" && I && (D = I), D ? r = setTimeout(function() {
      o.show();
    }, D) : o.show();
  }
  function Ge(h) {
    if (o.clearDelayTimeouts(), Y("onUntrigger", [o, h]), !o.state.isVisible) {
      he();
      return;
    }
    if (!(o.props.trigger.indexOf("mouseenter") >= 0 && o.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(h.type) >= 0 && i)) {
      var D = N(!1);
      D ? a = setTimeout(function() {
        o.state.isVisible && o.hide();
      }, D) : s = requestAnimationFrame(function() {
        o.hide();
      });
    }
  }
  function lt() {
    o.state.isEnabled = !0;
  }
  function Tt() {
    o.hide(), o.state.isEnabled = !1;
  }
  function Dt() {
    clearTimeout(r), clearTimeout(a), cancelAnimationFrame(s);
  }
  function kt(h) {
    if (!o.state.isDestroyed) {
      Y("onBeforeUpdate", [o, h]), $e();
      var D = o.props, P = Bn(e, Object.assign({}, D, Mn(h), {
        ignoreAttributes: !0
      }));
      o.props = P, me(), D.interactiveDebounce !== P.interactiveDebounce && (se(), O = Sn(Be, P.interactiveDebounce)), D.triggerTarget && !P.triggerTarget ? Fe(D.triggerTarget).forEach(function(G) {
        G.removeAttribute("aria-expanded");
      }) : P.triggerTarget && e.removeAttribute("aria-expanded"), X(), W(), f && f(D, P), o.popperInstance && (Ct(), Re().forEach(function(G) {
        requestAnimationFrame(G._tippy.popperInstance.forceUpdate);
      })), Y("onAfterUpdate", [o, h]);
    }
  }
  function Et(h) {
    o.setProps({
      content: h
    });
  }
  function Tr() {
    var h = o.state.isVisible, D = o.state.isDestroyed, P = !o.state.isEnabled, G = Ce.isTouch && !o.props.touch, I = zt(o.props.duration, 0, ye.duration);
    if (!(h || D || P || G) && !H().hasAttribute("disabled") && (Y("onShow", [o], !1), o.props.onShow(o) !== !1)) {
      if (o.state.isVisible = !0, k() && (g.style.visibility = "visible"), W(), oe(), o.state.isMounted || (g.style.transition = "none"), k()) {
        var K = z(), ce = K.box, Ze = K.content;
        Wt([ce, Ze], 0);
      }
      b = function() {
        var Ue;
        if (!(!o.state.isVisible || d)) {
          if (d = !0, g.offsetHeight, g.style.transition = o.props.moveTransition, k() && o.props.animation) {
            var Gt = z(), St = Gt.box, Je = Gt.content;
            Wt([St, Je], I), mt([St, Je], "visible");
          }
          V(), X(), An(Nt, o), (Ue = o.popperInstance) == null || Ue.forceUpdate(), Y("onMount", [o]), o.props.animation && k() && ie(I, function() {
            o.state.isShown = !0, Y("onShown", [o]);
          });
        }
      }, Me();
    }
  }
  function Dr() {
    var h = !o.state.isVisible, D = o.state.isDestroyed, P = !o.state.isEnabled, G = zt(o.props.duration, 1, ye.duration);
    if (!(h || D || P) && (Y("onHide", [o], !1), o.props.onHide(o) !== !1)) {
      if (o.state.isVisible = !1, o.state.isShown = !1, d = !1, i = !1, k() && (g.style.visibility = "hidden"), se(), he(), W(!0), k()) {
        var I = z(), K = I.box, ce = I.content;
        o.props.animation && (Wt([K, ce], G), mt([K, ce], "hidden"));
      }
      V(), X(), o.props.animation ? k() && Se(G, o.unmount) : o.unmount();
    }
  }
  function kr(h) {
    j().addEventListener("mousemove", O), An(Pt, O), O(h);
  }
  function Er() {
    o.state.isVisible && o.hide(), o.state.isMounted && (_t(), Re().forEach(function(h) {
      h._tippy.unmount();
    }), g.parentNode && g.parentNode.removeChild(g), Nt = Nt.filter(function(h) {
      return h !== o;
    }), o.state.isMounted = !1, Y("onHidden", [o]));
  }
  function Sr() {
    o.state.isDestroyed || (o.clearDelayTimeouts(), o.unmount(), $e(), delete e._tippy, o.state.isDestroyed = !0, Y("onDestroy", [o]));
  }
}
function E(e, t) {
  t === void 0 && (t = {});
  var n = ye.plugins.concat(t.plugins || []);
  ii();
  var r = Object.assign({}, t, {
    plugins: n
  }), a = ni(e), s = a.reduce(function(i, l) {
    var u = l && hi(l, r);
    return u && i.push(u), i;
  }, []);
  return Yt(e) ? s[0] : s;
}
E.defaultProps = ye;
E.setDefaultProps = fi;
E.currentInput = Ce;
var mi = Object.assign({}, or, {
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
}), yi = function(t, n) {
  var r;
  n === void 0 && (n = {});
  var a = t, s = [], i = [], l, u = n.overrides, d = [], c = !1;
  function m() {
    i = a.map(function(o) {
      return Fe(o.props.triggerTarget || o.reference);
    }).reduce(function(o, y) {
      return o.concat(y);
    }, []);
  }
  function b() {
    s = a.map(function(o) {
      return o.reference;
    });
  }
  function x(o) {
    a.forEach(function(y) {
      o ? y.enable() : y.disable();
    });
  }
  function O(o) {
    return a.map(function(y) {
      var g = y.setProps;
      return y.setProps = function(f) {
        g(f), y.reference === l && o.setProps(f);
      }, function() {
        y.setProps = g;
      };
    });
  }
  function v(o, y) {
    var g = i.indexOf(y);
    if (y !== l) {
      l = y;
      var f = (u || []).concat("content").reduce(function(_, A) {
        return _[A] = a[g].props[A], _;
      }, {});
      o.setProps(Object.assign({}, f, {
        getReferenceClientRect: typeof f.getReferenceClientRect == "function" ? f.getReferenceClientRect : function() {
          var _;
          return (_ = s[g]) == null ? void 0 : _.getBoundingClientRect();
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
        onClickOutside: function(g) {
          g.props.showOnCreate && !c && (c = !0, l = null);
        },
        onShow: function(g) {
          g.props.showOnCreate && !c && (c = !0, v(g, s[0]));
        },
        onTrigger: function(g, f) {
          v(g, f.currentTarget);
        }
      };
    }
  }, p = E(qe(), Object.assign({}, Ko(n, ["overrides"]), {
    plugins: [C].concat(n.plugins || []),
    triggerTarget: i,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((r = n.popperOptions) == null ? void 0 : r.modifiers) || [], [mi])
    })
  })), w = p.show;
  p.show = function(o) {
    if (w(), !l && o == null)
      return v(p, s[0]);
    if (!(l && o == null)) {
      if (typeof o == "number")
        return s[o] && v(p, s[o]);
      if (a.indexOf(o) >= 0) {
        var y = o.reference;
        return v(p, y);
      }
      if (s.indexOf(o) >= 0)
        return v(p, o);
    }
  }, p.showNext = function() {
    var o = s[0];
    if (!l)
      return p.show(0);
    var y = s.indexOf(l);
    p.show(s[y + 1] || o);
  }, p.showPrevious = function() {
    var o = s[s.length - 1];
    if (!l)
      return p.show(o);
    var y = s.indexOf(l), g = s[y - 1] || o;
    p.show(g);
  };
  var T = p.setProps;
  return p.setProps = function(o) {
    u = o.overrides || u, T(o);
  }, p.setInstances = function(o) {
    x(!0), d.forEach(function(y) {
      return y();
    }), a = o, x(!1), b(), m(), d = O(p), p.setProps({
      triggerTarget: i
    });
  }, d = O(p), p;
}, bi = {
  name: "animateFill",
  defaultValue: !1,
  fn: function(t) {
    var n;
    if (!((n = t.props.render) != null && n.$$tippy))
      return {};
    var r = jt(t.popper), a = r.box, s = r.content, i = t.props.animateFill ? wi() : null;
    return {
      onCreate: function() {
        i && (a.insertBefore(i, a.firstElementChild), a.setAttribute("data-animatefill", ""), a.style.overflow = "hidden", t.setProps({
          arrow: !1,
          animation: "shift-away"
        }));
      },
      onMount: function() {
        if (i) {
          var u = a.style.transitionDuration, d = Number(u.replace("ms", ""));
          s.style.transitionDelay = Math.round(d / 10) + "ms", i.style.transitionDuration = u, mt([i], "visible");
        }
      },
      onShow: function() {
        i && (i.style.transitionDuration = "0ms");
      },
      onHide: function() {
        i && mt([i], "hidden");
      }
    };
  }
};
function wi() {
  var e = qe();
  return e.className = pr, mt([e], "hidden"), e;
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
function xi(e) {
  e.addEventListener("mousemove", Cr);
}
function Oi(e) {
  e.removeEventListener("mousemove", Cr);
}
var Ci = {
  name: "followCursor",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, r = br(t.props.triggerTarget || n), a = !1, s = !1, i = !0, l = t.props;
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
      a = !0, t.setProps({
        getReferenceClientRect: null
      }), a = !1;
    }
    function b(v) {
      var C = v.target ? n.contains(v.target) : !0, p = t.props.followCursor, w = v.clientX, T = v.clientY, o = n.getBoundingClientRect(), y = w - o.left, g = T - o.top;
      (C || !t.props.interactive) && t.setProps({
        getReferenceClientRect: function() {
          var _ = n.getBoundingClientRect(), A = w, L = T;
          p === "initial" && (A = _.left + y, L = _.top + g);
          var M = p === "horizontal" ? _.top : L, k = p === "vertical" ? _.right : A, H = p === "horizontal" ? _.bottom : L, j = p === "vertical" ? _.left : A;
          return {
            width: k - j,
            height: H - M,
            top: M,
            right: k,
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
      }), xi(r));
    }
    function O() {
      $t = $t.filter(function(v) {
        return v.instance !== t;
      }), $t.filter(function(v) {
        return v.doc === r;
      }).length === 0 && Oi(r);
    }
    return {
      onCreate: x,
      onDestroy: O,
      onBeforeUpdate: function() {
        l = t.props;
      },
      onAfterUpdate: function(C, p) {
        var w = p.followCursor;
        a || w !== void 0 && l.followCursor !== w && (O(), w ? (x(), t.state.isMounted && !s && !u() && d()) : (c(), m()));
      },
      onMount: function() {
        t.props.followCursor && !s && (i && (b(Kt), i = !1), u() || d());
      },
      onTrigger: function(C, p) {
        un(p) && (Kt = {
          clientX: p.clientX,
          clientY: p.clientY
        }), s = p.type === "focus";
      },
      onHidden: function() {
        t.props.followCursor && (m(), c(), i = !0);
      }
    };
  }
};
function _i(e, t) {
  var n;
  return {
    popperOptions: Object.assign({}, e.popperOptions, {
      modifiers: [].concat((((n = e.popperOptions) == null ? void 0 : n.modifiers) || []).filter(function(r) {
        var a = r.name;
        return a !== t.name;
      }), [t])
    })
  };
}
var Ti = {
  name: "inlinePositioning",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference;
    function r() {
      return !!t.props.inlinePositioning;
    }
    var a, s = -1, i = !1, l = [], u = {
      name: "tippyInlinePositioning",
      enabled: !0,
      phase: "afterWrite",
      fn: function(x) {
        var O = x.state;
        r() && (l.indexOf(O.placement) !== -1 && (l = []), a !== O.placement && l.indexOf(O.placement) === -1 && (l.push(O.placement), t.setProps({
          getReferenceClientRect: function() {
            return d(O.placement);
          }
        })), a = O.placement);
      }
    };
    function d(b) {
      return Di(yr(b), n.getBoundingClientRect(), ot(n.getClientRects()), s);
    }
    function c(b) {
      i = !0, t.setProps(b), i = !1;
    }
    function m() {
      i || c(_i(t.props, u));
    }
    return {
      onCreate: m,
      onAfterUpdate: m,
      onTrigger: function(x, O) {
        if (un(O)) {
          var v = ot(t.reference.getClientRects()), C = v.find(function(w) {
            return w.left - 2 <= O.clientX && w.right + 2 >= O.clientX && w.top - 2 <= O.clientY && w.bottom + 2 >= O.clientY;
          }), p = v.indexOf(C);
          s = p > -1 ? p : s;
        }
      },
      onHidden: function() {
        s = -1;
      }
    };
  }
};
function Di(e, t, n, r) {
  if (n.length < 2 || e === null)
    return t;
  if (n.length === 2 && r >= 0 && n[0].left > n[1].right)
    return n[r] || t;
  switch (e) {
    case "top":
    case "bottom": {
      var a = n[0], s = n[n.length - 1], i = e === "top", l = a.top, u = s.bottom, d = i ? a.left : s.left, c = i ? a.right : s.right, m = c - d, b = u - l;
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
      var x = Math.min.apply(Math, n.map(function(g) {
        return g.left;
      })), O = Math.max.apply(Math, n.map(function(g) {
        return g.right;
      })), v = n.filter(function(g) {
        return e === "left" ? g.left === x : g.right === O;
      }), C = v[0].top, p = v[v.length - 1].bottom, w = x, T = O, o = T - w, y = p - C;
      return {
        top: C,
        bottom: p,
        left: w,
        right: T,
        width: o,
        height: y
      };
    }
    default:
      return t;
  }
}
var ki = {
  name: "sticky",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, r = t.popper;
    function a() {
      return t.popperInstance ? t.popperInstance.state.elements.reference : n;
    }
    function s(d) {
      return t.props.sticky === !0 || t.props.sticky === d;
    }
    var i = null, l = null;
    function u() {
      var d = s("reference") ? a().getBoundingClientRect() : null, c = s("popper") ? r.getBoundingClientRect() : null;
      (d && In(i, d) || c && In(l, c)) && t.popperInstance && t.popperInstance.update(), i = d, l = c, t.state.isMounted && requestAnimationFrame(u);
    }
    return {
      onMount: function() {
        t.props.sticky && u();
      }
    };
  }
};
function In(e, t) {
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
  const r = jn(), a = U(), s = U({
    isEnabled: !1,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }), i = Lr();
  let l = null;
  const u = () => l || (l = document.createDocumentFragment(), l), d = (f) => {
    let _, A = Ie(f) ? f.value : f;
    return jr(A) ? (i.value || (i.value = fn({
      name: n.appName,
      setup: () => () => Ie(f) ? f.value : f
    }), r && Object.assign(i.value._context, r.appContext), i.value.mount(u())), _ = () => u()) : typeof A == "object" ? (i.value || (i.value = fn({
      name: n.appName,
      setup: () => () => Ne(Ie(f) ? f.value : f)
    }), r && Object.assign(i.value._context, r.appContext), i.value.mount(u())), _ = () => u()) : _ = A, _;
  }, c = (f) => {
    let _ = {};
    return Ie(f) ? _ = f.value || {} : dn(f) ? _ = { ...f } : _ = { ...f }, _.content && (_.content = d(_.content)), _.triggerTarget && (_.triggerTarget = Ie(_.triggerTarget) ? _.triggerTarget.value : _.triggerTarget), (!_.plugins || !Array.isArray(_.plugins)) && (_.plugins = []), _.plugins = _.plugins.filter((A) => A.name !== "vueTippyReactiveState"), _.plugins.push({
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
    }), _;
  }, m = () => {
    !a.value || a.value.setProps(c(t));
  }, b = () => {
    !a.value || !t.content || a.value.setContent(d(t.content));
  }, x = (f) => {
    var _;
    (_ = a.value) === null || _ === void 0 || _.setContent(d(f));
  }, O = (f) => {
    var _;
    (_ = a.value) === null || _ === void 0 || _.setProps(c(f));
  }, v = () => {
    var f;
    a.value && (a.value.destroy(), a.value = void 0), l = null, (f = i.value) === null || f === void 0 || f.unmount(), i.value = void 0;
  }, C = () => {
    var f;
    (f = a.value) === null || f === void 0 || f.show();
  }, p = () => {
    var f;
    (f = a.value) === null || f === void 0 || f.hide();
  }, w = () => {
    var f;
    (f = a.value) === null || f === void 0 || f.disable(), s.value.isEnabled = !1;
  }, T = () => {
    var f;
    (f = a.value) === null || f === void 0 || f.enable(), s.value.isEnabled = !0;
  }, o = () => {
    var f;
    (f = a.value) === null || f === void 0 || f.unmount();
  }, y = () => {
    if (!e)
      return;
    let f = Ie(e) ? e.value : e;
    typeof f == "function" && (f = f()), f && (a.value = E(f, c(t)), f.$tippy = g);
  }, g = {
    tippy: a,
    refresh: m,
    refreshContent: b,
    setContent: x,
    setProps: O,
    destroy: v,
    hide: p,
    show: C,
    disable: w,
    enable: T,
    unmount: o,
    mount: y,
    state: s
  };
  return n.mount && (r ? r.isMounted ? y() : Te(y) : y()), r && Rr(() => {
    v();
  }), Ie(t) || dn(t) ? Xe(t, m, { immediate: !1 }) : Ie(t.content) && Xe(t.content, b, { immediate: !1 }), g;
}
function Ei(e, t) {
  const n = U();
  return Te(() => {
    const a = (Array.isArray(e) ? e.map((s) => s.value) : typeof e == "function" ? e() : e.value).map((s) => s instanceof Element ? s._tippy : s).filter(Boolean);
    n.value = yi(a, t ? { allowHTML: !0, ...t } : { allowHTML: !0 });
  }), {
    singleton: n
  };
}
function Si(e) {
  return typeof e == "function" ? e() : B(e);
}
function Ai(e) {
  var t, n;
  const r = Si(e);
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
    const a = U(), s = U(), i = U(), l = U(!1), u = () => {
      let x = { ...e };
      for (const O of ["to", "tag", "contentTag", "contentClass"])
        x.hasOwnProperty(O) && delete x[O];
      return x;
    };
    let d = () => Ai(a);
    e.to && (typeof Element < "u" && e.to instanceof Element ? d = () => e.to : e.to === "parent" ? d = () => {
      let x = a.value;
      return x || (x = a.value = s.value.parentElement), x;
    } : (typeof e.to == "string" || e.to instanceof String) && (d = () => document.querySelector(e.to)));
    const c = _r(d, u());
    let m = t.content;
    !m && e.to === "parent" && (m = t.default), Te(() => {
      l.value = !0, yt(() => {
        m && c.setContent(() => i.value);
      });
    }), Xe(c.state, () => {
      n("state", B(c.state));
    }, { immediate: !0, deep: !0 }), Xe(() => e, () => {
      c.setProps(u()), m && c.setContent(() => i.value);
    }, { deep: !0 });
    let b = Ir({
      elem: a,
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
        const p = [];
        if (!a.value) {
          const w = Ne("span", {
            ref: s,
            "data-v-tippy": "",
            style: { display: "none" }
          });
          p.push(w);
        }
        return O && p.push(O), p;
      }
      const v = t.default ? t.default(b) : [];
      if (!e.tag) {
        const p = Ne(v[0], {
          ref: a,
          "data-v-tippy": ""
        });
        return O ? [p, O] : p;
      }
      const C = (typeof e.tag == "string", e.tag);
      return Ne(C, { ref: a, "data-v-tippy": "" }, O ? [v, O] : v);
    };
  }
});
const Mi = [
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
  Mi.includes(e) ? Zt[e] = {
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
    const t = U([]), { singleton: n } = Ei(t, e);
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
const Pi = E.setDefaultProps;
Pi({
  ignoreAttributes: !0,
  plugins: [ki, Ti, Ci, bi]
});
function $i() {
  const e = Pe(Zn);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
const Bi = { class: "g-gantt-tooltip-container" }, Li = { class: "g-gantt-tooltip-area-container" }, Ri = { class: "g-gantt-tooltip-area" }, Ii = { class: "g-gantt-tooltip-category-container" }, ji = { class: "g-gantt-tooltip-category" }, Hi = { class: "g-gantt-tooltip-promotion-title" }, Yi = { class: "g-gantt-tooltip-promotion-time-container" }, Gi = { class: "g-gantt-tooltip-time" }, Ui = "cadetblue", zi = /* @__PURE__ */ ee({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    config: {},
    toDayjs: {}
  },
  setup(e) {
    Hn((m) => ({
      f7565ec2: s.value
    }));
    const t = Pe("iconComponent"), n = e, { bar: r } = gt(n), a = q(() => {
      var b, x, O;
      const m = (O = (x = (b = r.value) == null ? void 0 : b.ganttBarConfig) == null ? void 0 : x.tooltipInfo) == null ? void 0 : O.publishedAt;
      return m ? !Q(new Date(m * 1e3)).isAfter(new Date()) : !1;
    }), s = U(a.value ? "pointer" : "default"), i = q(
      () => {
        var m, b;
        return ((b = (m = r == null ? void 0 : r.value) == null ? void 0 : m.ganttBarConfig.style) == null ? void 0 : b.backgroundColor) || Ui;
      }
    ), l = () => {
      var b, x;
      const m = (x = (b = r.value) == null ? void 0 : b.ganttBarConfig.tooltipInfo) == null ? void 0 : x.promotionUrl;
      !m || !a.value || window.location.assign(m);
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
      var x, O, v, C, p, w, T, o, y, g, f, _;
      return S(), R("div", {
        class: "g-gantt-tooltip",
        style: F({
          fontFamily: m.config.font.value
        }),
        onClick: l
      }, [
        $("div", Bi, [
          $("div", Li, [
            $("span", Ri, te((v = (O = (x = B(r)) == null ? void 0 : x.ganttBarConfig) == null ? void 0 : O.tooltipInfo) == null ? void 0 : v.areaName), 1),
            B(r) ? (S(), J(je(B(t)), {
              key: 0,
              name: (w = (p = (C = B(r)) == null ? void 0 : C.ganttBarConfig) == null ? void 0 : p.tooltipInfo) == null ? void 0 : w.icon,
              size: "24"
            }, null, 8, ["name"])) : de("", !0)
          ]),
          $("div", Ii, [
            $("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",
              style: F({ background: i.value })
            }, null, 4),
            $("span", ji, te((y = (o = (T = B(r)) == null ? void 0 : T.ganttBarConfig) == null ? void 0 : o.tooltipInfo) == null ? void 0 : y.categoryName), 1),
            $("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",
              style: F({ background: i.value })
            }, null, 4)
          ]),
          $("p", Hi, te((_ = (f = (g = B(r)) == null ? void 0 : g.ganttBarConfig) == null ? void 0 : f.tooltipInfo) == null ? void 0 : _.title), 1),
          $("div", Yi, [
            $("p", Gi, [
              Z(m.$slots, "default", {
                bar: B(r),
                barStart: u.value,
                barEnd: d.value
              }, () => [
                pt(te(c.value), 1)
              ], !0)
            ]),
            a.value ? (S(), J(je(B(t)), {
              key: 0,
              name: "chevron-right",
              "size-s": "16",
              style: { color: "#008075" }
            })) : de("", !0)
          ])
        ])
      ], 4);
    };
  }
});
const Wi = /* @__PURE__ */ wt(zi, [["__scopeId", "data-v-3a31d377"]]), Fi = ["id"], Ni = { class: "g-gantt-bar-label" }, Vi = ["innerHTML"], qi = `
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`, Xi = /* @__PURE__ */ ee({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    var L;
    Hn((M) => ({
      "267f9539": B(a)
    }));
    const t = e, n = $i(), { bar: r } = gt(t), a = (L = t.bar.ganttBarConfig.style) == null ? void 0 : L.backgroundColor, { mapTimeToPosition: s, mapPositionToTime: i } = en(), { font: l, barEnd: u, barStart: d, rowHeight: c, width: m, chartStart: b, chartEnd: x, chartSize: O } = He(), v = U(), { toDayjs: C } = Jt(), p = U(!1), w = Pe("iconComponent"), T = q(() => r.value.ganttBarConfig), o = Pe(Jn), y = (M) => {
      var N, W;
      const k = document.querySelector(".tippy-svg-arrow");
      if (!k)
        return;
      const j = ((N = k.style.transform) != null ? N : "").match(/translate3d\((-?\d+)/), z = (W = document.querySelector(".tippy-content")) == null ? void 0 : W.clientHeight;
      if (M === "bottom" && j) {
        const Y = k.firstElementChild;
        Y.style.transform = "rotateX(180deg)";
        const V = parseInt(j[1]);
        k.style.transform = `translate3d(${V}px, -${z + 6}px, 0px)`;
      }
      if (M === "top" && j) {
        const Y = parseInt(j[1]);
        k.style.transform = `translate3d(${Y}px, -1px, 0px)`;
      }
    };
    Te(() => {
      !(v != null && v.value) || _r(v.value, {
        content: Ne(Wi, { bar: r.value, config: { barStart: d, barEnd: u, font: l }, toDayjs: C }),
        arrow: qi,
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
              fn({ instance: M }) {
                y((M == null ? void 0 : M.state.placement) || "top");
              }
            }
          ]
        },
        delay: [0, 0],
        duration: [300, 0]
      });
    });
    const g = (M) => {
      var j, z;
      if (M.preventDefault(), M.type === "mousedown" || !(o != null && o.value))
        return;
      const k = (z = (j = o == null ? void 0 : o.value) == null ? void 0 : j[0]) == null ? void 0 : z.getBoundingClientRect();
      if (!k)
        return;
      const H = i(M.clientX - k.left);
      n(M, r.value, H);
    }, f = U(0), _ = U(0), A = q(() => {
      const M = new Date(r.value.myBeginDate).getTime(), k = new Date(r.value.myEndDate).getTime();
      if (Math.abs(M - k) / (1e3 * 60 * 60 * 24) <= 2)
        return 0;
      const z = 6;
      return _.value - f.value - z + z;
    });
    return Te(() => {
      Xe(
        [r, m, b, x, O.width],
        () => {
          f.value = s(r.value[d.value]), _.value = s(r.value[u.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (M, k) => (S(), R("div", {
      id: T.value.id,
      ref_key: "ganttBarRef",
      ref: v,
      class: Lt(["g-gantt-bar", T.value.asArrow ? "g-gantt-bar-is-arrow" : "", T.value.class || ""]),
      style: F({
        ...T.value.style,
        position: "absolute",
        top: `${B(c) * 0.1}px`,
        left: `${f.value}px`,
        width: `${A.value}px`,
        height: `${B(c) * 0.8}px`,
        zIndex: p.value ? 3 : 2
      }),
      onClick: g,
      onContextmenu: g,
      onDblclick: g,
      onMousedown: g,
      onMouseenter: g,
      onMouseleave: g
    }, [
      $("div", Ni, [
        Z(M.$slots, "default", { bar: B(r) }, () => [
          $("div", null, te(T.value.label || ""), 1),
          T.value.html ? (S(), R("div", {
            key: 0,
            innerHTML: T.value.html
          }, null, 8, Vi)) : de("", !0)
        ])
      ]),
      (S(), J(je(B(w)), {
        "size-s": "16",
        "size-m": "16",
        class: "g-gantt-bar-arrow",
        "size-l": "16",
        name: "gant-arrow",
        size: "16"
      })),
      T.value.hasHandles ? (S(), R(ne, { key: 0 }, [
        k[0] || (k[0] = $("div", { class: "g-gantt-bar-handle-left" }, null, -1)),
        k[1] || (k[1] = $("div", { class: "g-gantt-bar-handle-right" }, null, -1))
      ], 64)) : de("", !0)
    ], 46, Fi));
  }
});
const Qi = /* @__PURE__ */ ee({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    overlaps: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: t }) {
    const n = e, r = U([]), a = t, { rowHeight: s, colors: i, labelColumnTitle: l } = He(), { highlightOnHover: u } = gt(n), d = U(!1), c = q(() => ({
      height: `${s.value}px`,
      background: (u == null ? void 0 : u.value) && d.value ? i.value.hoverHighlight : null
    })), { mapPositionToTime: m } = en(), b = Hr("barContainer");
    Bt(Jn, b);
    const x = (o) => {
      var _, A;
      const y = (A = (_ = b.value) == null ? void 0 : _[0]) == null ? void 0 : A.getBoundingClientRect();
      if (!y) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const g = o.clientX - y.left, f = m(g);
      a("drop", { e: o, datetime: f });
    };
    function O(o, y, g, f) {
      return Math.max(g.valueOf() - y.valueOf(), o.valueOf() - f.valueOf()) / 864e5 < 3;
    }
    function v(o, y, g, f) {
      return o <= f && g <= y || O(o, y, g, f);
    }
    function C(o) {
      const y = [];
      for (let g = 0; g < o.length; g++)
        for (let f = g + 1; f < o.length; f++)
          v(
            o[g].myBeginDate,
            o[g].myEndDate,
            o[f].myBeginDate,
            o[f].myEndDate
          ) && y.push(Q(o[g].myEndDate).isAfter(o[f].myEndDate) ? o[g] : o[f]);
      return y;
    }
    const p = () => {
      const o = [], y = (g) => {
        if (!g || g.length === 0)
          return;
        const f = C(g);
        if (f.length > 0) {
          const _ = g.filter((L) => !f.includes(L)), A = g.filter((L) => f.includes(L));
          o.push(_), y(A);
        } else
          o.push(g);
      };
      return y(n.bars), o;
    };
    function w(o) {
      return o.sort((y, g) => {
        const f = Math.min(...y.map((A) => A.myBeginDate.getTime())), _ = Math.min(...g.map((A) => A.myBeginDate.getTime()));
        return f - _;
      });
    }
    Te(() => {
      r.value = w(p());
    });
    const T = (o) => !o || /^\s*$/.test(o);
    return (o, y) => (S(), R("div", null, [
      (S(!0), R(ne, null, be(r.value, (g) => (S(), R("div", {
        key: g[0].ganttBarConfig.id,
        style: F(c.value),
        class: "g-gantt-row",
        onDragleave: y[0] || (y[0] = (f) => d.value = !1),
        onDrop: y[1] || (y[1] = (f) => x(f)),
        onMouseleave: y[2] || (y[2] = (f) => d.value = !1),
        onMouseover: y[3] || (y[3] = (f) => d.value = !0),
        onDragover: y[4] || (y[4] = Yr((f) => d.value = !0, ["prevent"]))
      }, [
        !T(o.label) && !B(l) ? (S(), R("div", {
          key: 0,
          style: F({ background: B(i).primary, color: B(i).text }),
          class: "g-gantt-row-label"
        }, [
          Z(o.$slots, "label", {}, () => [
            pt(te(o.label), 1)
          ])
        ], 4)) : de("", !0),
        $("div", Gr({
          ref_for: !0,
          ref: "barContainer",
          class: "g-gantt-row-bars-container"
        }, o.$attrs), [
          ft(Ur, {
            name: "bar-transition sys",
            tag: "div",
            class: "transition-group"
          }, {
            default: We(() => [
              (S(!0), R(ne, null, be(g, (f) => (S(), J(Xi, {
                key: f.ganttBarConfig.id,
                bar: f
              }, {
                default: We(() => [
                  Z(o.$slots, "bar-label", { bar: f })
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
function Ki() {
  Q.extend(Wr), Q.extend(Fr), Q.extend(Wn), Q.extend(qr), Q.extend(Nr), Q.extend(zr), Q.extend(Vr);
}
const es = {
  install(e, t) {
    Ki(), e.component("GGanttChart", za), e.component("GGanttRow", Qi);
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
.g-gantt-chart-wrapper {
  width: 100%;
  padding: 0 24px 0 16px;
  overflow-x: scroll;
}
.g-gantt-chart-container {
  width: 100%;
  display: flex;
  background: #f0f1f2;
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
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
@media (max-width: 700px) {
.g-gantt-chart-wrapper {
    padding-right: 16px;
}
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
.g-grid-container[data-v-e196b6b3] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line[data-v-e196b6b3] {
  width: 1px;
  height: 100%;
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
  fill: var(--267f9539);
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
.g-gantt-legend-collapse-container[data-v-eea8ea32] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
}
.g-gantt-legend-collapse[data-v-eea8ea32] {
  display: flex;
  align-items: center;
  align-self: baseline;
  justify-content: flex-end;

  width: 48px;
  height: 48px;
}
.g-gantt-legend-collapse[data-v-eea8ea32]:hover {
  cursor: pointer;
}
.g-gantt-legend-title[data-v-eea8ea32] {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}
.g-gantt-legend-area[data-v-eea8ea32] {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;
}
.g-gantt-legend-area-icon > path[data-v-eea8ea32] {
  fill: #4c5356;
}
.g-gantt-legend-category-color[data-v-eea8ea32] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend-promotion[data-v-eea8ea32] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-gantt-legend-do-uncollapse[data-v-eea8ea32] {
  color: #008075;
}
.g-gantt-legend-area-list[data-v-eea8ea32] {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 0;
}
.g-gantt-legend-category-name[data-v-eea8ea32] {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}
.g-gantt-legend[data-v-eea8ea32] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: -moz-fit-content;
  min-width: fit-content;
  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);

  z-index: 1;
}
.g-gantt-legend-area-icon[data-v-eea8ea32] * {
  fill: #4c5356;
}
@media (max-width: 1400px) {
.g-gantt-legend-category-color[data-v-eea8ea32] {
    max-width: 52px;
}
.g-gantt-legend-category-name[data-v-eea8ea32] {
    font-weight: 400;
    font-size: 12px;
    line-height: 15.6px;
    letter-spacing: 0;
}
.g-gantt-legend-area[data-v-eea8ea32] {
    font-weight: 700;
    font-size: 14px;
    line-height: 21.7px;
    letter-spacing: 0;
}
}
@media (max-width: 700px) {
.g-gantt-legend-category-color[data-v-eea8ea32] {
    max-width: 44px;
}
.g-gantt-legend-title[data-v-eea8ea32] {
    padding: 0 16px;
}
}
`, "top");
xe(`
.g-gantt-legend-collapse-container[data-v-731ab940] {
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-end;

  height: 62px;
}
.g-gantt-legend-collapse[data-v-731ab940] {
  display: flex;
  align-items: center;
  align-self: baseline;
  justify-content: flex-end;

  width: 48px;
  height: 48px;
}
.g-gantt-legend-collapse[data-v-731ab940]:hover {
  cursor: pointer;
}
.g-gantt-legend-area-icon[data-v-731ab940] {
  margin: 0 8px 0 24px;
}
.g-gantt-legend-area-icon[data-v-731ab940] > * {
  fill: #4c5356;
}
.g-gantt-legend-promotion[data-v-731ab940] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-gantt-legend-areas-list[data-v-731ab940] {
  display: flex;
  flex-direction: column;
}
.g-gantt-legend-area-list[data-v-731ab940] {
  display: flex;
  flex-direction: column;

  padding: 6px 0;
}
.g-gantt-legend-do-collapse[data-v-731ab940] {
  color: #008075;
}
.g-gantt-legend-category-color[data-v-731ab940] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend[data-v-731ab940] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: 68px;

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
  z-index: 1;
}
@media (max-width: 1400px) {
.g-gantt-legend[data-v-731ab940] {
    min-width: 60px;
}
.g-gantt-legend-category-color[data-v-731ab940] {
    max-width: 52px;
}
.g-gantt-legend-collapse[data-v-731ab940] {
    width: 56px;
    height: 48px;
}
}
@media (max-width: 700px) {
.g-gantt-legend[data-v-731ab940] {
    min-width: 56px;
}
.g-gantt-legend-category-color[data-v-731ab940] {
    max-width: 44px;
}
.g-gantt-legend-area-icon[data-v-731ab940] {
    margin-left: 16px;
}
}
`, "top");
xe(`
.g-gantt-tooltip[data-v-3a31d377] {
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
.g-gantt-tooltip[data-v-3a31d377]:hover {
  cursor: var(--f7565ec2);
}
.g-gantt-tooltip-category-container[data-v-3a31d377] {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.g-gantt-tooltip-container[data-v-3a31d377] {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.g-gantt-tooltip-time[data-v-3a31d377] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;

  color: #4c5356;
}
.g-gantt-tooltip-promotion-time-container[data-v-3a31d377] {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}
.g-gantt-tooltip-area[data-v-3a31d377] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-category[data-v-3a31d377] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-area-container[data-v-3a31d377] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.g-gantt-tooltip-promotion-title[data-v-3a31d377] {
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;

  color: #1b1e1f;

  padding: 0 12px 10px 12px;
}
.g-gantt-tooltip-color-line[data-v-3a31d377] {
  height: 2px;
}
.g-gantt-tooltip-color-line-left[data-v-3a31d377] {
  min-width: 8px;
  margin-right: 4px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-tooltip-color-line-right[data-v-3a31d377] {
  margin-left: 4px;
  width: 100%;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
@media (max-width: 1400px) {
.g-gantt-tooltip[data-v-3a31d377] {
    width: 208px;

    padding-top: 6px;
    padding-bottom: 8px;
}
.g-gantt-tooltip-color-line-left[data-v-3a31d377] {
    min-width: 4px;
}
.g-gantt-tooltip-area-container[data-v-3a31d377],
  .g-gantt-tooltip-promotion-title[data-v-3a31d377],
  .g-gantt-tooltip-promotion-time-container[data-v-3a31d377] {
    padding-left: 8px;
    padding-right: 8px;
}
}
`, "top");
export {
  za as GGanttChart,
  Qi as GGanttRow,
  es as default,
  Ki as extendDayjs,
  es as ganttastic
};
