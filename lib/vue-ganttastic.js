import Q from "dayjs";
import { unref as $, getCurrentScope as Mr, onScopeDispose as Pr, getCurrentInstance as Hn, onMounted as Te, nextTick as bt, ref as Y, watch as qe, inject as Ie, computed as q, defineComponent as ee, openBlock as E, createElementBlock as R, Fragment as K, createElementVNode as L, normalizeStyle as U, createBlock as te, resolveDynamicComponent as Xe, toDisplayString as ne, renderList as we, createVNode as pt, renderSlot as J, createCommentVNode as se, createTextVNode as vt, useCssVars as Jt, onBeforeMount as $r, toRefs as gt, useSlots as Br, provide as Bt, normalizeClass as Lt, withCtx as We, shallowRef as Lr, onUnmounted as Rr, isRef as Re, isReactive as fn, reactive as Ir, h as Ne, isVNode as jr, createApp as pn, useTemplateRef as Hr, withModifiers as Gr, mergeProps as Yr, TransitionGroup as Ur } from "vue";
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "day";
    return function(r, o, s) {
      var a = function(d) {
        return d.add(4 - d.isoWeekday(), n);
      }, l = o.prototype;
      l.isoWeekYear = function() {
        return a(this).year();
      }, l.isoWeek = function(d) {
        if (!this.$utils().u(d))
          return this.add(7 * (d - this.isoWeek()), n);
        var c, m, w, x, O = a(this), v = (c = this.isoWeekYear(), m = this.$u, w = (m ? s.utc : s)().year(c).startOf("year"), x = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (x += 7), w.add(x, n));
        return O.diff(v, "week") + 1;
      }, l.isoWeekday = function(d) {
        return this.$utils().u(d) ? this.day() || 7 : this.day(this.day() % 7 ? d : d - 7);
      };
      var u = l.startOf;
      l.startOf = function(d, c) {
        var m = this.$utils(), w = !!m.u(c) || c;
        return m.p(d) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : u.bind(this)(d, c);
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
const Fr = Yn.exports;
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
const Nr = Un.exports;
var Wn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r, o) {
      r.prototype.isBetween = function(s, a, l, u) {
        var d = o(s), c = o(a), m = (u = u || "()")[0] === "(", w = u[1] === ")";
        return (m ? this.isAfter(d, l) : !this.isBefore(d, l)) && (w ? this.isBefore(c, l) : !this.isAfter(c, l)) || (m ? this.isBefore(d, l) : !this.isAfter(d, l)) && (w ? this.isAfter(c, l) : !this.isBefore(c, l));
      };
    };
  });
})(Wn);
const Fn = Wn.exports;
var Nn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "week", r = "year";
    return function(o, s, a) {
      var l = s.prototype;
      l.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var d = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var c = a(this).startOf(r).add(1, r).date(d), m = a(this).endOf(n);
          if (c.isBefore(m))
            return 1;
        }
        var w = a(this).startOf(r).date(d).startOf(n).subtract(1, "millisecond"), x = this.diff(w, n, !0);
        return x < 0 ? a(this).startOf("week").week() : Math.ceil(x);
      }, l.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(Nn);
const zr = Nn.exports;
var zn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r, o) {
      var s = r.prototype, a = s.format;
      o.en.ordinal = function(l) {
        var u = ["th", "st", "nd", "rd"], d = l % 100;
        return "[" + l + (u[(d - 20) % 10] || u[d] || u[0]) + "]";
      }, s.format = function(l) {
        var u = this, d = this.$locale();
        if (!this.isValid())
          return a.bind(this)(l);
        var c = this.$utils(), m = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(w) {
          switch (w) {
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
              return c.s(u.week(), w === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(u.isoWeek(), w === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(u.$H === 0 ? 24 : u.$H), w === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(u.$d.getTime() / 1e3);
            case "x":
              return u.$d.getTime();
            case "z":
              return "[" + u.offsetName() + "]";
            case "zzz":
              return "[" + u.offsetName("long") + "]";
            default:
              return w;
          }
        });
        return a.bind(this)(m);
      };
    };
  });
})(zn);
const Vr = zn.exports;
var Vn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d\d/, s = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(C) {
        this[v] = +C;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(C) {
        if (!C || C === "Z")
          return 0;
        var p = C.match(/([+-]|\d\d)/g), f = 60 * p[1] + (+p[2] || 0);
        return f === 0 ? 0 : p[0] === "+" ? -f : f;
      }(v);
    }], m = function(v) {
      var C = l[v];
      return C && (C.indexOf ? C : C.s.concat(C.f));
    }, w = function(v, C) {
      var p, f = l.meridiem;
      if (f) {
        for (var _ = 1; _ <= 24; _ += 1)
          if (v.indexOf(f(_, 0, C)) > -1) {
            p = _ > 12;
            break;
          }
      } else
        p = v === (C ? "pm" : "PM");
      return p;
    }, x = { A: [a, function(v) {
      this.afternoon = w(v, !1);
    }], a: [a, function(v) {
      this.afternoon = w(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [o, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [s, d("seconds")], ss: [s, d("seconds")], m: [s, d("minutes")], mm: [s, d("minutes")], H: [s, d("hours")], h: [s, d("hours")], HH: [s, d("hours")], hh: [s, d("hours")], D: [s, d("day")], DD: [o, d("day")], Do: [a, function(v) {
      var C = l.ordinal, p = v.match(/\d+/);
      if (this.day = p[0], C)
        for (var f = 1; f <= 31; f += 1)
          C(f).replace(/\[|\]/g, "") === v && (this.day = f);
    }], M: [s, d("month")], MM: [o, d("month")], MMM: [a, function(v) {
      var C = m("months"), p = (m("monthsShort") || C.map(function(f) {
        return f.slice(0, 3);
      })).indexOf(v) + 1;
      if (p < 1)
        throw new Error();
      this.month = p % 12 || p;
    }], MMMM: [a, function(v) {
      var C = m("months").indexOf(v) + 1;
      if (C < 1)
        throw new Error();
      this.month = C % 12 || C;
    }], Y: [/[+-]?\d+/, d("year")], YY: [o, function(v) {
      this.year = u(v);
    }], YYYY: [/\d{4}/, d("year")], Z: c, ZZ: c };
    function O(v) {
      var C, p;
      C = v, p = l && l.formats;
      for (var f = (v = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, A, S) {
        var M = S && S.toUpperCase();
        return A || p[S] || n[S] || p[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, H, F) {
          return H || F.slice(1);
        });
      })).match(r), _ = f.length, i = 0; i < _; i += 1) {
        var y = f[i], b = x[y], h = b && b[0], T = b && b[1];
        f[i] = T ? { regex: h, parser: T } : y.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var A = {}, S = 0, M = 0; S < _; S += 1) {
          var I = f[S];
          if (typeof I == "string")
            M += I.length;
          else {
            var H = I.regex, F = I.parser, N = B.slice(M), z = H.exec(N)[0];
            F.call(A, z), B = B.replace(z, "");
          }
        }
        return function(W) {
          var V = W.afternoon;
          if (V !== void 0) {
            var X = W.hours;
            V ? X < 12 && (W.hours += 12) : X === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(A), A;
      };
    }
    return function(v, C, p) {
      p.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
      var f = C.prototype, _ = f.parse;
      f.parse = function(i) {
        var y = i.date, b = i.utc, h = i.args;
        this.$u = b;
        var T = h[1];
        if (typeof T == "string") {
          var B = h[2] === !0, A = h[3] === !0, S = B || A, M = h[2];
          A && (M = h[2]), l = this.$locale(), !B && M && (l = p.Ls[M]), this.$d = function(N, z, W) {
            try {
              if (["x", "X"].indexOf(z) > -1)
                return new Date((z === "X" ? 1e3 : 1) * N);
              var V = O(z)(N), X = V.year, le = V.month, ue = V.day, Ee = V.hours, he = V.minutes, ae = V.seconds, me = V.milliseconds, Ae = V.zone, ie = new Date(), Oe = ue || (X || le ? 1 : ie.getDate()), ce = X || ie.getFullYear(), ye = 0;
              X && !le || (ye = le > 0 ? le - 1 : ie.getMonth());
              var Pe = Ee || 0, Se = he || 0, $e = ae || 0, Be = me || 0;
              return Ae ? new Date(Date.UTC(ce, ye, Oe, Pe, Se, $e, Be + 60 * Ae.offset * 1e3)) : W ? new Date(Date.UTC(ce, ye, Oe, Pe, Se, $e, Be)) : new Date(ce, ye, Oe, Pe, Se, $e, Be);
            } catch {
              return new Date("");
            }
          }(y, T, b), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), S && y != this.format(T) && (this.$d = new Date("")), l = {};
        } else if (T instanceof Array)
          for (var I = T.length, H = 1; H <= I; H += 1) {
            h[1] = T[H - 1];
            var F = p.apply(this, h);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            H === I && (this.$d = new Date(""));
          }
        else
          _.call(this, i);
      };
    };
  });
})(Vn);
const qr = Vn.exports;
var vn;
const wt = typeof window < "u";
wt && ((vn = window == null ? void 0 : window.navigator) == null ? void 0 : vn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xr(e) {
  return typeof e == "function" ? e() : $(e);
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
  const n = Y(), r = () => n.value = Boolean(e());
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
  let a;
  const l = eo(() => o && "ResizeObserver" in o), u = () => {
    a && (a.disconnect(), a = void 0);
  }, d = qe(() => qn(e), (m) => {
    u(), l.value && o && m && (a = new ResizeObserver(t), a.observe(m, s));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), d();
  };
  return Kr(c), {
    isSupported: l,
    stop: c
  };
}
function Xn(e, t = { width: 0, height: 0 }, n = {}) {
  const r = Y(t.width), o = Y(t.height);
  return oo(e, ([s]) => {
    r.value = s.contentRect.width, o.value = s.contentRect.height;
  }, n), qe(() => qn(e), (s) => {
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
function je() {
  const e = Ie(Kn);
  if (!e)
    throw Error("Failed to inject config!");
  return e;
}
const er = "YYYY-MM-DD HH:mm";
function en(e = je()) {
  const { chartStart: t, chartEnd: n, barStart: r, barEnd: o, dateFormat: s } = e, a = q(() => u(t.value)), l = q(() => u(n.value)), u = (c, m) => {
    let w;
    if (m !== void 0 && typeof c != "string" && !(c instanceof Date) && (w = m === "start" ? c[r.value] : c[o.value]), typeof c == "string")
      w = c;
    else if (c instanceof Date)
      return Q(c);
    const x = s.value || er;
    return Q(w, x, !0);
  };
  return {
    chartStartDayjs: a,
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
    const t = e, n = Ie("iconComponent"), r = new Date(), o = new Date(r.getFullYear(), 0, 1), s = q(() => Math.ceil((new Date(r.getTime()).valueOf() - o.valueOf()) / 864e5)), a = q(() => t.parentWidth / 52 / 7), l = Y(s.value >= 365 - 10), u = q(() => s.value >= 365 - 10 ? 0 : a.value * s.value - 33), d = q(() => s.value < 10 ? 0 : a.value * s.value - 33);
    return (c, m) => (E(), R(K, null, [
      L("div", {
        style: U({
          position: "absolute",
          top: "-65px",
          zIndex: 3,
          left: a.value * s.value - 7.5 + "px"
        })
      }, [
        (E(), te(Xe($(n)), {
          name: "marker-current-date",
          size: "16",
          "size-s": "16",
          style: {
            color: "#C882BE"
          }
        }))
      ], 4),
      L("div", {
        style: U({
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
        L("p", co, ne($(Q)(new Date()).format("DD.MM.YYYY")), 1)
      ], 4),
      L("div", {
        style: U({
          position: "absolute",
          width: "2px",
          height: "100%",
          left: a.value * s.value + "px",
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
  const { precision: e } = je(), { chartStartDayjs: t, chartEndDayjs: n } = en(), r = q(() => {
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
  }, a = q(() => {
    const l = [], u = [], d = n.value.diff(t.value, "minutes", !0), c = r.value, m = o.value;
    let w = t.value, x = t.value;
    for (; x.isSameOrBefore(n.value); ) {
      const O = x.endOf(m), C = O.isAfter(n.value) ? n.value.diff(x, "minutes", !0) / d * 100 : O.diff(x, "minutes", !0) / d * 100;
      u.push({
        label: x.format(s[e == null ? void 0 : e.value]),
        value: String(x),
        date: x.toDate(),
        width: String(C) + "%"
      }), x = O.add(1, m === "isoWeek" ? "week" : m).startOf(m);
    }
    for (; w.isSameOrBefore(n.value); ) {
      const O = w.endOf(c), C = O.isAfter(n.value) ? n.value.diff(w, "minutes", !0) / d * 100 : O.diff(w, "minutes", !0) / d * 100;
      l.push({
        label: w.format(s[c]),
        value: String(w),
        date: w.toDate(),
        width: String(C) + "%"
      }), w = O.add(1, c).startOf(c);
    }
    return { upperUnits: l, lowerUnits: u };
  });
  return a.value.lowerUnits[0].label === "53" && a.value.lowerUnits.splice(0, 1), a.value.lowerUnits[a.value.lowerUnits.length - 1].label === "1" && a.value.lowerUnits.splice(a.value.lowerUnits.length - 1, 1), a.value.lowerUnits[a.value.lowerUnits.length - 1].label === "14" && a.value.lowerUnits.splice(a.value.lowerUnits.length - 1, 1), {
    timeaxisUnits: a
  };
}
const vo = /* @__PURE__ */ ee({
  __name: "GGanttGridAreaDivider",
  props: {
    areaHeights: {}
  },
  setup(e) {
    const { timeaxisUnits: t } = tr(), n = (o, s) => s === t.value.lowerUnits.length - 1 ? "unset" : o && Number(o) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2", r = (o) => {
      const s = +o >= 14 && +o <= 26, a = +o >= 40 && +o <= 52;
      return s || a ? "#f7f8f9" : "#ffffff";
    };
    return (o, s) => (E(), R(K, null, [
      (E(!0), R(K, null, we(o.areaHeights, (a) => (E(), R("div", {
        key: a,
        style: U({
          position: "absolute",
          top: a + "px",
          zIndex: 2,
          height: "6px",
          width: "100%",
          backgroundColor: "#DFE2E6"
        })
      }, null, 4))), 128)),
      (E(!0), R(K, null, we($(t).lowerUnits, ({ label: a, width: l }, u) => (E(), R("div", {
        key: a,
        style: U({
          width: l,
          borderRight: n(a, u),
          backgroundColor: r(a)
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
    const t = Y(null), { width: n } = Xn(t), r = Y([]);
    return Te(() => {
      bt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((s) => {
          r.value.push(s.clientHeight);
        }), r.value.pop();
      });
    }), (o, s) => (E(), R("div", {
      ref_key: "gridContainer",
      ref: t,
      class: "g-grid-container"
    }, [
      pt(po, { "parent-width": $(n) }, null, 8, ["parent-width"]),
      pt(vo, { "area-heights": r.value }, null, 8, ["area-heights"])
    ], 512));
  }
});
const wn = /* @__PURE__ */ it(go, [["__scopeId", "data-v-a719d7c7"]]);
function ho() {
  const e = Ie(Qn);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const mo = { class: "g-label-column-rows" }, yo = /* @__PURE__ */ ee({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: t, colors: n, labelColumnTitle: r, rowHeight: o } = je(), s = ho();
    return (a, l) => (E(), R("div", {
      class: "g-label-column",
      style: U({ fontFamily: $(t), color: $(n).text })
    }, [
      J(a.$slots, "label-column-title", {}, () => [
        L("div", {
          class: "g-label-column-header",
          style: U({ background: $(n).primary })
        }, ne($(r)), 5)
      ]),
      L("div", mo, [
        (E(!0), R(K, null, we($(s)(), ({ label: u }, d) => (E(), R("div", {
          key: `${u}_${d}`,
          class: "g-label-column-row",
          style: U({
            background: d % 2 === 0 ? $(n).ternary : $(n).quartenary,
            height: `${$(o)}px`
          })
        }, [
          J(a.$slots, "label-column-row", { label: u }, () => [
            L("span", null, ne(u), 1)
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
    const { precision: t, colors: n } = je(), { timeaxisUnits: r } = tr();
    return (o, s) => (E(), R("div", bo, [
      L("div", wo, [
        (E(!0), R(K, null, we($(r).lowerUnits, ({ label: a, value: l, date: u, width: d }, c) => (E(), R("div", {
          key: a,
          class: "g-timeunit g-timeunit-low",
          style: U({
            flexDirection: $(t) === "hour" ? "column" : "row",
            alignItems: $(t) === "hour" ? "" : "center",
            width: d
          })
        }, [
          c === 0 ? (E(), R("span", xo, "KW")) : se("", !0),
          J(o.$slots, "timeunit", {
            label: a,
            value: l,
            date: u
          }, () => [
            vt(ne(a), 1)
          ]),
          $(t) === "hour" ? (E(), R("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: U({ background: $(n).text })
          }, null, 4)) : se("", !0)
        ], 4))), 128))
      ]),
      L("div", Oo, [
        (E(!0), R(K, null, we($(r).upperUnits, ({ label: a, value: l, date: u, width: d }) => (E(), R("div", {
          key: a,
          class: "g-upper-timeunit",
          style: U({
            width: d
          })
        }, [
          J(o.$slots, "upper-timeunit", {
            label: a,
            value: l,
            date: u
          }, () => [
            vt(ne(a), 1)
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
function tn(e = je()) {
  const { dateFormat: t, chartSize: n } = e, { chartStartDayjs: r, chartEndDayjs: o, toDayjs: s, format: a } = en(e), l = q(() => o.value.diff(r.value, "minutes"));
  return {
    mapTimeToPosition: (c) => {
      const m = n.width.value || 0, w = s(c).diff(r.value, "minutes", !0);
      return Math.ceil(w / l.value * m);
    },
    mapPositionToTime: (c) => {
      const m = n.width.value || 0, w = c / m * l.value;
      return a(r.value.add(w, "minutes"), t.value);
    }
  };
}
const _o = /* @__PURE__ */ ee({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: t } = tn(), n = Y(Q()), { colors: r, dateFormat: o, currentTimeLabel: s } = je(), a = q(() => {
      const l = o.value || "YYYY-MM-DD HH:mm";
      return t(Q(n.value, l).format(l));
    });
    return (l, u) => (E(), R("div", {
      class: "g-grid-current-time",
      style: U({
        left: `${a.value}px`
      })
    }, [
      L("div", {
        class: "g-grid-current-time-marker",
        style: U({
          border: `1px dashed ${$(r).markerCurrentTime}`
        })
      }, null, 4),
      L("span", {
        class: "g-grid-current-time-text",
        style: U({ color: $(r).markerCurrentTime })
      }, [
        J(l.$slots, "current-time-label", {}, () => [
          vt(ne($(s)), 1)
        ])
      ], 4)
    ], 4));
  }
});
const To = { class: "g-gantt-legend-collapse" }, ko = { class: "g-gantt-legend-areas-list" }, Do = { class: "g-gantt-legend-promotion" }, Eo = 6, Ao = /* @__PURE__ */ ee({
  __name: "GGanttLegendNonCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  emits: ["update:isCollapsed"],
  setup(e) {
    const t = Ie("iconComponent"), n = Y([]);
    return Te(() => {
      bt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((o) => {
          n.value.push(o.clientHeight);
        });
      });
    }), (r, o) => (E(), R(K, null, [
      L("div", To, [
        (E(), te(Xe($(t)), {
          name: "chevron-left",
          class: "g-gantt-legend-do-collapse",
          size: "24",
          onClick: o[0] || (o[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }))
      ]),
      L("div", ko, [
        (E(!0), R(K, null, we(Object.entries(r.legend), ([s, a], l) => (E(), R("div", {
          key: s,
          class: "g-gantt-legend-area-list",
          style: U({
            height: n.value[l] + Eo + "px"
          })
        }, [
          (E(), te(Xe($(t)), {
            class: "g-gantt-legend-area-icon",
            size: "24",
            name: r.legend[s][0].area.icon
          }, null, 8, ["name"])),
          L("div", Do, [
            (E(!0), R(K, null, we(a, (u) => (E(), R("div", {
              key: u.category.name,
              class: "g-gantt-legend-category-color",
              style: U({ backgroundColor: "#" + u.category.color })
            }, null, 4))), 128))
          ])
        ], 4))), 128))
      ])
    ], 64));
  }
});
const So = /* @__PURE__ */ it(Ao, [["__scopeId", "data-v-1dd633de"]]), Mo = { class: "g-gantt-legend-collapse" }, Po = { class: "g-gantt-legend-areas-list" }, $o = { class: "g-gantt-legend-title" }, Bo = { class: "g-gantt-legend-area" }, Lo = { class: "g-gantt-legend-category-name" }, Ro = 6, Io = /* @__PURE__ */ ee({
  __name: "GGanttLegendCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  emits: ["update:isCollapsed"],
  setup(e) {
    const t = Ie("iconComponent"), n = Y([]);
    return Te(() => {
      bt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((o) => {
          n.value.push(o.clientHeight);
        });
      });
    }), (r, o) => (E(), R(K, null, [
      L("div", Mo, [
        (E(), te(Xe($(t)), {
          name: "chevron-right",
          class: "g-gantt-legend-do-uncollapse",
          size: "24",
          onClick: o[0] || (o[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }))
      ]),
      L("div", Po, [
        (E(!0), R(K, null, we(Object.entries(r.legend), ([s, a], l) => (E(), R("div", {
          key: s,
          class: "g-gantt-legend-area-list",
          style: U({
            height: n.value[l] + Ro + "px"
          })
        }, [
          L("div", $o, [
            (E(), te(Xe($(t)), {
              size: "32",
              name: r.legend[s][0].area.icon
            }, null, 8, ["name"])),
            L("p", Bo, ne(s), 1)
          ]),
          (E(!0), R(K, null, we(a, (u) => (E(), R("div", {
            key: u.category.name,
            class: "g-gantt-legend-promotion"
          }, [
            L("div", {
              class: "g-gantt-legend-category-color",
              style: U({ backgroundColor: "#" + u.category.color })
            }, null, 4),
            L("p", Lo, ne(u.category.name), 1)
          ]))), 128))
        ], 4))), 128))
      ])
    ], 64));
  }
});
const jo = /* @__PURE__ */ it(Io, [["__scopeId", "data-v-46e9751c"]]), Ho = { class: "g-gantt-legend" }, Go = /* @__PURE__ */ ee({
  __name: "GGanttLegend",
  props: {
    legend: {}
  },
  setup(e) {
    Jt((s) => ({
      "8b45b7ac": r.value
    }));
    const t = Y(!0), n = q(() => t.value ? "chevron-right" : "chevron-left"), r = q(() => t.value ? "255px" : "56px"), o = () => document.querySelector("body").clientWidth > 1200;
    return $r(() => {
      t.value = o();
    }), (s, a) => (E(), R("div", Ho, [
      t.value ? (E(), te(jo, {
        key: 1,
        "is-collapsed": t.value,
        "onUpdate:isCollapsed": a[1] || (a[1] = (l) => t.value = l),
        "arrow-name": n.value,
        legend: s.legend
      }, null, 8, ["is-collapsed", "arrow-name", "legend"])) : (E(), te(So, {
        key: 0,
        "is-collapsed": t.value,
        "onUpdate:isCollapsed": a[0] || (a[0] = (l) => t.value = l),
        "arrow-name": n.value,
        legend: s.legend
      }, null, 8, ["is-collapsed", "arrow-name", "legend"]))
    ]));
  }
});
const Yo = /* @__PURE__ */ it(Go, [["__scopeId", "data-v-517e11e4"]]), Uo = { class: "g-gantt-chart-container" }, Wo = { class: "g-gantt-chart-quarters" }, Fo = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, No = { class: "g-gantt-rows-list" }, zo = /* @__PURE__ */ ee({
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
    Q.extend(Fn);
    const r = new Date(), o = new Date();
    r.setDate(15), r.setMonth(10), o.setDate(31), o.setMonth(11);
    const s = Y(
      Q(new Date()).isBetween(r, o)
    ), a = t, { width: l, font: u, colorScheme: d } = gt(n), c = Br(), m = q(
      () => typeof d.value != "string" ? d.value : bn[d.value] || bn.default
    ), w = () => {
      var _;
      const p = (_ = c.default) == null ? void 0 : _.call(c), f = [];
      return p && p.forEach((i) => {
        var y;
        if ((y = i.props) != null && y.bars) {
          const { label: b, bars: h } = i.props;
          f.push({ label: b, bars: h });
        } else
          Array.isArray(i.children) && i.children.forEach((b) => {
            var T;
            const h = b;
            if ((T = h == null ? void 0 : h.props) != null && T.bars) {
              const { label: B, bars: A } = h.props;
              f.push({ label: B, bars: A });
            }
          });
      }), f;
    }, x = Y(!1), O = (p, f, _, i) => {
      switch (p.type) {
        case "click":
          a("click-bar", { bar: f, e: p, datetime: _ });
          break;
        case "mousedown":
          a("mousedown-bar", { bar: f, e: p, datetime: _ });
          break;
        case "mouseup":
          a("mouseup-bar", { bar: f, e: p, datetime: _ });
          break;
        case "dblclick":
          a("dblclick-bar", { bar: f, e: p, datetime: _ });
          break;
        case "mouseenter":
          a("mouseenter-bar", { bar: f, e: p });
          break;
        case "mouseleave":
          a("mouseleave-bar", { bar: f, e: p });
          break;
        case "dragstart":
          x.value = !0, a("dragstart-bar", { bar: f, e: p });
          break;
        case "drag":
          a("drag-bar", { bar: f, e: p });
          break;
        case "dragend":
          x.value = !1, a("dragend-bar", { bar: f, e: p, movedBars: i });
          break;
        case "contextmenu":
          a("contextmenu-bar", { bar: f, e: p, datetime: _ });
          break;
      }
    }, v = Y(null), C = Xn(v);
    return Bt(Qn, w), Bt(Kn, {
      ...gt(n),
      colors: m,
      chartSize: C
    }), Bt(Zn, O), (p, f) => (E(), R("div", Uo, [
      pt(Yo, {
        legend: p.legend ? p.legend : {}
      }, null, 8, ["legend"]),
      L("div", {
        class: Lt([[{ "labels-in-column": !!p.labelColumnTitle }], "g-gantt-chart-wrapper"])
      }, [
        p.labelColumnTitle ? (E(), te(yo, {
          key: 0,
          style: U({
            width: p.labelColumnWidth
          })
        }, {
          "label-column-title": We(() => [
            J(p.$slots, "label-column-title")
          ]),
          "label-column-row": We(({ label: _ }) => [
            J(p.$slots, "label-column-row", { label: _ })
          ]),
          _: 3
        }, 8, ["style"])) : se("", !0),
        L("div", {
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
          style: U({ width: $(l), background: m.value.background, fontFamily: $(u) })
        }, [
          p.grid ? (E(), te(wn, {
            key: 0,
            "highlighted-units": p.highlightedUnits
          }, null, 8, ["highlighted-units"])) : se("", !0),
          p.currentTime ? (E(), te(_o, { key: 1 }, {
            "current-time-label": We(() => [
              J(p.$slots, "current-time-label")
            ]),
            _: 3
          })) : se("", !0),
          L("div", Wo, [
            f[0] || (f[0] = L("div", { class: "g-gantt-chart-quarter" }, "Q1", -1)),
            f[1] || (f[1] = L("div", { class: "g-gantt-chart-quarter" }, "Q2", -1)),
            f[2] || (f[2] = L("div", { class: "g-gantt-chart-quarter" }, "Q3", -1)),
            f[3] || (f[3] = L("div", { class: "g-gantt-chart-quarter" }, "Q4", -1)),
            s.value ? (E(), R("div", Fo, "Q1")) : se("", !0)
          ]),
          L("div", {
            class: Lt([
              "g-gantt-rows-container",
              n.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            L("div", No, [
              J(p.$slots, "default")
            ]),
            pt(wn, { "highlighted-units": p.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          p.hideTimeaxis ? se("", !0) : (E(), te(Co, { key: 2 }, {
            "upper-timeunit": We(({ label: _, value: i, date: y }) => [
              J(p.$slots, "upper-timeunit", {
                date: y,
                label: _,
                value: i
              })
            ]),
            timeunit: We(({ label: _, value: i, date: y }) => [
              J(p.$slots, "timeunit", {
                date: y,
                label: _,
                value: i
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
var re = "top", pe = "bottom", ve = "right", oe = "left", nn = "auto", xt = [re, pe, ve, oe], et = "start", ht = "end", Vo = "clippingParents", nr = "viewport", ct = "popper", qo = "reference", xn = /* @__PURE__ */ xt.reduce(function(e, t) {
  return e.concat([t + "-" + et, t + "-" + ht]);
}, []), rr = /* @__PURE__ */ [].concat(xt, [nn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + et, t + "-" + ht]);
}, []), Xo = "beforeRead", Qo = "read", Ko = "afterRead", Zo = "beforeMain", Jo = "main", ea = "afterMain", ta = "beforeWrite", na = "write", ra = "afterWrite", oa = [Xo, Qo, Ko, Zo, Jo, ea, ta, na, ra];
function ke(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function tt(e) {
  var t = xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function fe(e) {
  var t = xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function or(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function aa(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !fe(s) || !ke(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function ia(e) {
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
      var o = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = a.reduce(function(u, d) {
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
  fn: aa,
  effect: ia,
  requires: ["computeStyles"]
};
function _e(e) {
  return e.split("-")[0];
}
var ze = Math.max, It = Math.min, nt = Math.round;
function rt(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (fe(e) && t) {
    var s = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (r = nt(n.width) / a || 1), s > 0 && (o = nt(n.height) / s || 1);
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
  return xe(e).getComputedStyle(e);
}
function sa(e) {
  return ["table", "td", "th"].indexOf(ke(e)) >= 0;
}
function He(e) {
  return ((tt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ht(e) {
  return ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (or(e) ? e.host : null) || He(e);
}
function On(e) {
  return !fe(e) || De(e).position === "fixed" ? null : e.offsetParent;
}
function la(e) {
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
  for (var t = xe(e), n = On(e); n && sa(n) && De(n).position === "static"; )
    n = On(n);
  return n && (ke(n) === "html" || ke(n) === "body" && De(n).position === "static") ? t : n || la(e) || t;
}
function on(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dt(e, t, n) {
  return ze(e, It(t, n));
}
function ua(e, t, n) {
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
var ca = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, lr(typeof t != "number" ? t : ur(t, xt));
};
function da(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = _e(n.placement), u = on(l), d = [oe, ve].indexOf(l) >= 0, c = d ? "height" : "width";
  if (!(!s || !a)) {
    var m = ca(o.padding, n), w = rn(s), x = u === "y" ? re : oe, O = u === "y" ? pe : ve, v = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c], C = a[u] - n.rects.reference[u], p = Ot(s), f = p ? u === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, _ = v / 2 - C / 2, i = m[x], y = f - w[c] - m[O], b = f / 2 - w[c] / 2 + _, h = dt(i, b, y), T = u;
    n.modifiersData[r] = (t = {}, t[T] = h, t.centerOffset = h - b, t);
  }
}
function fa(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !ir(t.elements.popper, o) || (t.elements.arrow = o));
}
var pa = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: da,
  effect: fa,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ot(e) {
  return e.split("-")[1];
}
var va = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ga(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return {
    x: nt(t * o) / o || 0,
    y: nt(n * o) / o || 0
  };
}
function Cn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, l = e.position, u = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, m = e.isFixed, w = c === !0 ? ga(a) : typeof c == "function" ? c(a) : a, x = w.x, O = x === void 0 ? 0 : x, v = w.y, C = v === void 0 ? 0 : v, p = a.hasOwnProperty("x"), f = a.hasOwnProperty("y"), _ = oe, i = re, y = window;
  if (d) {
    var b = Ot(n), h = "clientHeight", T = "clientWidth";
    if (b === xe(n) && (b = He(n), De(b).position !== "static" && l === "absolute" && (h = "scrollHeight", T = "scrollWidth")), b = b, o === re || (o === oe || o === ve) && s === ht) {
      i = pe;
      var B = m && y.visualViewport ? y.visualViewport.height : b[h];
      C -= B - r.height, C *= u ? 1 : -1;
    }
    if (o === oe || (o === re || o === pe) && s === ht) {
      _ = ve;
      var A = m && y.visualViewport ? y.visualViewport.width : b[T];
      O -= A - r.width, O *= u ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: l
  }, d && va);
  if (u) {
    var M;
    return Object.assign({}, S, (M = {}, M[i] = f ? "0" : "", M[_] = p ? "0" : "", M.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + O + "px, " + C + "px)" : "translate3d(" + O + "px, " + C + "px, 0)", M));
  }
  return Object.assign({}, S, (t = {}, t[i] = f ? C + "px" : "", t[_] = p ? O + "px" : "", t.transform = "", t));
}
function ha(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, u = l === void 0 ? !0 : l, d = {
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
    adaptive: a,
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
var ma = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ha,
  data: {}
}, Mt = {
  passive: !0
};
function ya(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, a = r.resize, l = a === void 0 ? !0 : a, u = xe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && d.forEach(function(c) {
    c.addEventListener("scroll", n.update, Mt);
  }), l && u.addEventListener("resize", n.update, Mt), function() {
    s && d.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Mt);
    }), l && u.removeEventListener("resize", n.update, Mt);
  };
}
var ba = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ya,
  data: {}
}, wa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wa[t];
  });
}
var xa = {
  start: "end",
  end: "start"
};
function _n(e) {
  return e.replace(/start|end/g, function(t) {
    return xa[t];
  });
}
function an(e) {
  var t = xe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function sn(e) {
  return rt(He(e)).left + an(e).scrollLeft;
}
function Oa(e) {
  var t = xe(e), n = He(e), r = t.visualViewport, o = n.clientWidth, s = n.clientHeight, a = 0, l = 0;
  return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, l = r.offsetTop)), {
    width: o,
    height: s,
    x: a + sn(e),
    y: l
  };
}
function Ca(e) {
  var t, n = He(e), r = an(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = ze(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = ze(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + sn(e), u = -r.scrollTop;
  return De(o || n).direction === "rtl" && (l += ze(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: a,
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
  var r = cr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = xe(r), a = o ? [s].concat(s.visualViewport || [], ln(r) ? r : []) : r, l = t.concat(a);
  return o ? l : l.concat(ft(Ht(a)));
}
function Xt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _a(e) {
  var t = rt(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Tn(e, t) {
  return t === nr ? Xt(Oa(e)) : tt(t) ? _a(t) : Xt(Ca(He(e)));
}
function Ta(e) {
  var t = ft(Ht(e)), n = ["absolute", "fixed"].indexOf(De(e).position) >= 0, r = n && fe(e) ? Ot(e) : e;
  return tt(r) ? t.filter(function(o) {
    return tt(o) && ir(o, r) && ke(o) !== "body" && (n ? De(o).position !== "static" : !0);
  }) : [];
}
function ka(e, t, n) {
  var r = t === "clippingParents" ? Ta(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], a = o.reduce(function(l, u) {
    var d = Tn(e, u);
    return l.top = ze(d.top, l.top), l.right = It(d.right, l.right), l.bottom = It(d.bottom, l.bottom), l.left = ze(d.left, l.left), l;
  }, Tn(e, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function dr(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? _e(r) : null, s = r ? ot(r) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case re:
      u = {
        x: a,
        y: t.y - n.height
      };
      break;
    case pe:
      u = {
        x: a,
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.boundary, a = s === void 0 ? Vo : s, l = n.rootBoundary, u = l === void 0 ? nr : l, d = n.elementContext, c = d === void 0 ? ct : d, m = n.altBoundary, w = m === void 0 ? !1 : m, x = n.padding, O = x === void 0 ? 0 : x, v = lr(typeof O != "number" ? O : ur(O, xt)), C = c === ct ? qo : ct, p = e.rects.popper, f = e.elements[w ? C : c], _ = ka(tt(f) ? f : f.contextElement || He(e.elements.popper), a, u), i = rt(e.elements.reference), y = dr({
    reference: i,
    element: p,
    strategy: "absolute",
    placement: o
  }), b = Xt(Object.assign({}, p, y)), h = c === ct ? b : i, T = {
    top: _.top - h.top + v.top,
    bottom: h.bottom - _.bottom + v.bottom,
    left: _.left - h.left + v.left,
    right: h.right - _.right + v.right
  }, B = e.modifiersData.offset;
  if (c === ct && B) {
    var A = B[o];
    Object.keys(T).forEach(function(S) {
      var M = [ve, pe].indexOf(S) >= 0 ? 1 : -1, I = [re, pe].indexOf(S) >= 0 ? "y" : "x";
      T[S] += A[I] * M;
    });
  }
  return T;
}
function Da(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, d = u === void 0 ? rr : u, c = ot(r), m = c ? l ? xn : xn.filter(function(O) {
    return ot(O) === c;
  }) : xt, w = m.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  w.length === 0 && (w = m);
  var x = w.reduce(function(O, v) {
    return O[v] = mt(e, {
      placement: v,
      boundary: o,
      rootBoundary: s,
      padding: a
    })[_e(v)], O;
  }, {});
  return Object.keys(x).sort(function(O, v) {
    return x[O] - x[v];
  });
}
function Ea(e) {
  if (_e(e) === nn)
    return [];
  var t = Rt(e);
  return [_n(e), t, _n(t)];
}
function Aa(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, l = a === void 0 ? !0 : a, u = n.fallbackPlacements, d = n.padding, c = n.boundary, m = n.rootBoundary, w = n.altBoundary, x = n.flipVariations, O = x === void 0 ? !0 : x, v = n.allowedAutoPlacements, C = t.options.placement, p = _e(C), f = p === C, _ = u || (f || !O ? [Rt(C)] : Ea(C)), i = [C].concat(_).reduce(function(he, ae) {
      return he.concat(_e(ae) === nn ? Da(t, {
        placement: ae,
        boundary: c,
        rootBoundary: m,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: v
      }) : ae);
    }, []), y = t.rects.reference, b = t.rects.popper, h = /* @__PURE__ */ new Map(), T = !0, B = i[0], A = 0; A < i.length; A++) {
      var S = i[A], M = _e(S), I = ot(S) === et, H = [re, pe].indexOf(M) >= 0, F = H ? "width" : "height", N = mt(t, {
        placement: S,
        boundary: c,
        rootBoundary: m,
        altBoundary: w,
        padding: d
      }), z = H ? I ? ve : oe : I ? pe : re;
      y[F] > b[F] && (z = Rt(z));
      var W = Rt(z), V = [];
      if (s && V.push(N[M] <= 0), l && V.push(N[z] <= 0, N[W] <= 0), V.every(function(he) {
        return he;
      })) {
        B = S, T = !1;
        break;
      }
      h.set(S, V);
    }
    if (T)
      for (var X = O ? 3 : 1, le = function(ae) {
        var me = i.find(function(Ae) {
          var ie = h.get(Ae);
          if (ie)
            return ie.slice(0, ae).every(function(Oe) {
              return Oe;
            });
        });
        if (me)
          return B = me, "break";
      }, ue = X; ue > 0; ue--) {
        var Ee = le(ue);
        if (Ee === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
var Sa = {
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
function Ma(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = mt(t, {
    elementContext: "reference"
  }), l = mt(t, {
    altBoundary: !0
  }), u = kn(a, r), d = kn(l, o, s), c = Dn(u), m = Dn(d);
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
var Pa = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ma
};
function $a(e, t, n) {
  var r = _e(e), o = [oe, re].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * o, [oe, ve].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Ba(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, a = rr.reduce(function(c, m) {
    return c[m] = $a(m, t.rects, s), c;
  }, {}), l = a[t.placement], u = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = a;
}
var La = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ba
};
function Ra(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = dr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var Ia = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ra,
  data: {}
};
function ja(e) {
  return e === "x" ? "y" : "x";
}
function Ha(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, l = a === void 0 ? !1 : a, u = n.boundary, d = n.rootBoundary, c = n.altBoundary, m = n.padding, w = n.tether, x = w === void 0 ? !0 : w, O = n.tetherOffset, v = O === void 0 ? 0 : O, C = mt(t, {
    boundary: u,
    rootBoundary: d,
    padding: m,
    altBoundary: c
  }), p = _e(t.placement), f = ot(t.placement), _ = !f, i = on(p), y = ja(i), b = t.modifiersData.popperOffsets, h = t.rects.reference, T = t.rects.popper, B = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, A = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (s) {
      var I, H = i === "y" ? re : oe, F = i === "y" ? pe : ve, N = i === "y" ? "height" : "width", z = b[i], W = z + C[H], V = z - C[F], X = x ? -T[N] / 2 : 0, le = f === et ? h[N] : T[N], ue = f === et ? -T[N] : -h[N], Ee = t.elements.arrow, he = x && Ee ? rn(Ee) : {
        width: 0,
        height: 0
      }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sr(), me = ae[H], Ae = ae[F], ie = dt(0, h[N], he[N]), Oe = _ ? h[N] / 2 - X - ie - me - A.mainAxis : le - ie - me - A.mainAxis, ce = _ ? -h[N] / 2 + X + ie + Ae + A.mainAxis : ue + ie + Ae + A.mainAxis, ye = t.elements.arrow && Ot(t.elements.arrow), Pe = ye ? i === "y" ? ye.clientTop || 0 : ye.clientLeft || 0 : 0, Se = (I = S == null ? void 0 : S[i]) != null ? I : 0, $e = z + Oe - Se - Pe, Be = z + ce - Se, Ke = dt(x ? It(W, $e) : W, z, x ? ze(V, Be) : V);
      b[i] = Ke, M[i] = Ke - z;
    }
    if (l) {
      var st, Ct = i === "x" ? re : oe, _t = i === "x" ? pe : ve, Me = b[y], Le = y === "y" ? "height" : "width", lt = Me + C[Ct], Ge = Me - C[_t], ut = [re, oe].indexOf(p) !== -1, Tt = (st = S == null ? void 0 : S[y]) != null ? st : 0, kt = ut ? lt : Me - h[Le] - T[Le] - Tt + A.altAxis, Dt = ut ? Me + h[Le] + T[Le] - Tt - A.altAxis : Ge, Et = x && ut ? ua(kt, Me, Dt) : dt(x ? kt : lt, Me, x ? Dt : Ge);
      b[y] = Et, M[y] = Et - Me;
    }
    t.modifiersData[r] = M;
  }
}
var Ga = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ha,
  requiresIfExists: ["offset"]
};
function Ya(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ua(e) {
  return e === xe(e) || !fe(e) ? an(e) : Ya(e);
}
function Wa(e) {
  var t = e.getBoundingClientRect(), n = nt(t.width) / e.offsetWidth || 1, r = nt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Fa(e, t, n) {
  n === void 0 && (n = !1);
  var r = fe(t), o = fe(t) && Wa(t), s = He(t), a = rt(e, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ke(t) !== "body" || ln(s)) && (l = Ua(t)), fe(t) ? (u = rt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = sn(s))), {
    x: a.left + l.scrollLeft - u.x,
    y: a.top + l.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function Na(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
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
function za(e) {
  var t = Na(e);
  return oa.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Va(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function qa(e) {
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
function An() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Xa(e) {
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
    }, m = [], w = !1, x = {
      state: c,
      setOptions: function(p) {
        var f = typeof p == "function" ? p(c.options) : p;
        v(), c.options = Object.assign({}, s, c.options, f), c.scrollParents = {
          reference: tt(l) ? ft(l) : l.contextElement ? ft(l.contextElement) : [],
          popper: ft(u)
        };
        var _ = za(qa([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = _.filter(function(i) {
          return i.enabled;
        }), O(), x.update();
      },
      forceUpdate: function() {
        if (!w) {
          var p = c.elements, f = p.reference, _ = p.popper;
          if (!!An(f, _)) {
            c.rects = {
              reference: Fa(f, Ot(_), c.options.strategy === "fixed"),
              popper: rn(_)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(A) {
              return c.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var i = 0; i < c.orderedModifiers.length; i++) {
              if (c.reset === !0) {
                c.reset = !1, i = -1;
                continue;
              }
              var y = c.orderedModifiers[i], b = y.fn, h = y.options, T = h === void 0 ? {} : h, B = y.name;
              typeof b == "function" && (c = b({
                state: c,
                options: T,
                name: B,
                instance: x
              }) || c);
            }
          }
        }
      },
      update: Va(function() {
        return new Promise(function(C) {
          x.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        v(), w = !0;
      }
    };
    if (!An(l, u))
      return x;
    x.setOptions(d).then(function(C) {
      !w && d.onFirstUpdate && d.onFirstUpdate(C);
    });
    function O() {
      c.orderedModifiers.forEach(function(C) {
        var p = C.name, f = C.options, _ = f === void 0 ? {} : f, i = C.effect;
        if (typeof i == "function") {
          var y = i({
            state: c,
            name: p,
            instance: x,
            options: _
          }), b = function() {
          };
          m.push(y || b);
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
var Qa = [ba, Ia, ma, ar, La, Sa, Ga, pa, Pa], Ka = /* @__PURE__ */ Xa({
  defaultModifiers: Qa
}), Za = "tippy-box", fr = "tippy-content", pr = "tippy-backdrop", vr = "tippy-arrow", gr = "tippy-svg-arrow", Ue = {
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
function Ja(e, t) {
  var n = Object.assign({}, e);
  return t.forEach(function(r) {
    delete n[r];
  }), n;
}
function ei(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Fe(e) {
  return [].concat(e);
}
function Mn(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ti(e) {
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
function Ve() {
  return document.createElement("div");
}
function Gt(e) {
  return ["Element", "Fragment"].some(function(t) {
    return un(e, t);
  });
}
function ni(e) {
  return un(e, "NodeList");
}
function cn(e) {
  return un(e, "MouseEvent");
}
function ri(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function oi(e) {
  return Gt(e) ? [e] : ni(e) ? at(e) : Array.isArray(e) ? e : at(document.querySelectorAll(e));
}
function Ft(e, t) {
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
function ai(e, t) {
  var n = t.clientX, r = t.clientY;
  return e.every(function(o) {
    var s = o.popperRect, a = o.popperState, l = o.props, u = l.interactiveBorder, d = yr(a.placement), c = a.modifiersData.offset;
    if (!c)
      return !0;
    var m = d === "bottom" ? c.top.y : 0, w = d === "top" ? c.bottom.y : 0, x = d === "right" ? c.left.x : 0, O = d === "left" ? c.right.x : 0, v = s.top - r + m > u, C = r - s.bottom - w > u, p = s.left - n + x > u, f = n - s.right - O > u;
    return v || C || p || f;
  });
}
function Nt(e, t, n) {
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
function ii() {
  Ce.isTouch || (Ce.isTouch = !0, window.performance && document.addEventListener("mousemove", wr));
}
function wr() {
  var e = performance.now();
  e - Bn < 20 && (Ce.isTouch = !1, document.removeEventListener("mousemove", wr)), Bn = e;
}
function si() {
  var e = document.activeElement;
  if (ri(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function li() {
  document.addEventListener("touchstart", ii, Ue), window.addEventListener("blur", si);
}
var ui = typeof window < "u" && typeof document < "u", ci = ui ? !!window.msCrypto : !1, di = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, fi = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, be = Object.assign({
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
}, di, fi), pi = Object.keys(be), vi = function(t) {
  var n = Object.keys(t);
  n.forEach(function(r) {
    be[r] = t[r];
  });
};
function xr(e) {
  var t = e.plugins || [], n = t.reduce(function(r, o) {
    var s = o.name, a = o.defaultValue;
    if (s) {
      var l;
      r[s] = e[s] !== void 0 ? e[s] : (l = be[s]) != null ? l : a;
    }
    return r;
  }, {});
  return Object.assign({}, e, n);
}
function gi(e, t) {
  var n = t ? Object.keys(xr(Object.assign({}, be, {
    plugins: t
  }))) : pi, r = n.reduce(function(o, s) {
    var a = (e.getAttribute("data-tippy-" + s) || "").trim();
    if (!a)
      return o;
    if (s === "content")
      o[s] = a;
    else
      try {
        o[s] = JSON.parse(a);
      } catch {
        o[s] = a;
      }
    return o;
  }, {});
  return r;
}
function Ln(e, t) {
  var n = Object.assign({}, t, {
    content: mr(t.content, [e])
  }, t.ignoreAttributes ? {} : gi(e, t.plugins));
  return n.aria = Object.assign({}, be.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
  }, n;
}
var hi = function() {
  return "innerHTML";
};
function Qt(e, t) {
  e[hi()] = t;
}
function Rn(e) {
  var t = Ve();
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
  var t = Ve(), n = Ve();
  n.className = Za, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = Ve();
  r.className = fr, r.setAttribute("data-state", "hidden"), In(r, e.props), t.appendChild(n), n.appendChild(r), o(e.props, e.props);
  function o(s, a) {
    var l = jt(t), u = l.box, d = l.content, c = l.arrow;
    a.theme ? u.setAttribute("data-theme", a.theme) : u.removeAttribute("data-theme"), typeof a.animation == "string" ? u.setAttribute("data-animation", a.animation) : u.removeAttribute("data-animation"), a.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof a.maxWidth == "number" ? a.maxWidth + "px" : a.maxWidth, a.role ? u.setAttribute("role", a.role) : u.removeAttribute("role"), (s.content !== a.content || s.allowHTML !== a.allowHTML) && In(d, e.props), a.arrow ? c ? s.arrow !== a.arrow && (u.removeChild(c), u.appendChild(Rn(a.arrow))) : u.appendChild(Rn(a.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: o
  };
}
Or.$$tippy = !0;
var mi = 1, Pt = [], zt = [];
function yi(e, t) {
  var n = Ln(e, Object.assign({}, be, xr(Pn(t)))), r, o, s, a = !1, l = !1, u = !1, d = !1, c, m, w, x = [], O = Sn($e, n.interactiveDebounce), v, C = mi++, p = null, f = ti(n.plugins), _ = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, i = {
    id: C,
    reference: e,
    popper: Ve(),
    popperInstance: p,
    props: n,
    state: _,
    plugins: f,
    clearDelayTimeouts: kt,
    setProps: Dt,
    setContent: Et,
    show: Tr,
    hide: kr,
    hideWithInteractivity: Dr,
    enable: ut,
    disable: Tt,
    unmount: Er,
    destroy: Ar
  };
  if (!n.render)
    return i;
  var y = n.render(i), b = y.popper, h = y.onUpdate;
  b.setAttribute("data-tippy-root", ""), b.id = "tippy-" + i.id, i.popper = b, e._tippy = i, b._tippy = i;
  var T = f.map(function(g) {
    return g.fn(i);
  }), B = e.hasAttribute("aria-expanded");
  return ye(), X(), z(), W("onCreate", [i]), n.showOnCreate && lt(), b.addEventListener("mouseenter", function() {
    i.props.interactive && i.state.isVisible && i.clearDelayTimeouts();
  }), b.addEventListener("mouseleave", function() {
    i.props.interactive && i.props.trigger.indexOf("mouseenter") >= 0 && H().addEventListener("mousemove", O);
  }), i;
  function A() {
    var g = i.props.touch;
    return Array.isArray(g) ? g : [g, 0];
  }
  function S() {
    return A()[0] === "hold";
  }
  function M() {
    var g;
    return !!((g = i.props.render) != null && g.$$tippy);
  }
  function I() {
    return v || e;
  }
  function H() {
    var g = I().parentNode;
    return g ? br(g) : document;
  }
  function F() {
    return jt(b);
  }
  function N(g) {
    return i.state.isMounted && !i.state.isVisible || Ce.isTouch || c && c.type === "focus" ? 0 : Wt(i.props.delay, g ? 0 : 1, be.delay);
  }
  function z(g) {
    g === void 0 && (g = !1), b.style.pointerEvents = i.props.interactive && !g ? "" : "none", b.style.zIndex = "" + i.props.zIndex;
  }
  function W(g, k, P) {
    if (P === void 0 && (P = !0), T.forEach(function(j) {
      j[g] && j[g].apply(j, k);
    }), P) {
      var G;
      (G = i.props)[g].apply(G, k);
    }
  }
  function V() {
    var g = i.props.aria;
    if (!!g.content) {
      var k = "aria-" + g.content, P = b.id, G = Fe(i.props.triggerTarget || e);
      G.forEach(function(j) {
        var Z = j.getAttribute(k);
        if (i.state.isVisible)
          j.setAttribute(k, Z ? Z + " " + P : P);
        else {
          var de = Z && Z.replace(P, "").trim();
          de ? j.setAttribute(k, de) : j.removeAttribute(k);
        }
      });
    }
  }
  function X() {
    if (!(B || !i.props.aria.expanded)) {
      var g = Fe(i.props.triggerTarget || e);
      g.forEach(function(k) {
        i.props.interactive ? k.setAttribute("aria-expanded", i.state.isVisible && k === I() ? "true" : "false") : k.removeAttribute("aria-expanded");
      });
    }
  }
  function le() {
    H().removeEventListener("mousemove", O), Pt = Pt.filter(function(g) {
      return g !== O;
    });
  }
  function ue(g) {
    if (!(Ce.isTouch && (u || g.type === "mousedown"))) {
      var k = g.composedPath && g.composedPath()[0] || g.target;
      if (!(i.props.interactive && $n(b, k))) {
        if (Fe(i.props.triggerTarget || e).some(function(P) {
          return $n(P, k);
        })) {
          if (Ce.isTouch || i.state.isVisible && i.props.trigger.indexOf("click") >= 0)
            return;
        } else
          W("onClickOutside", [i, g]);
        i.props.hideOnClick === !0 && (i.clearDelayTimeouts(), i.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), i.state.isMounted || me());
      }
    }
  }
  function Ee() {
    u = !0;
  }
  function he() {
    u = !1;
  }
  function ae() {
    var g = H();
    g.addEventListener("mousedown", ue, !0), g.addEventListener("touchend", ue, Ue), g.addEventListener("touchstart", he, Ue), g.addEventListener("touchmove", Ee, Ue);
  }
  function me() {
    var g = H();
    g.removeEventListener("mousedown", ue, !0), g.removeEventListener("touchend", ue, Ue), g.removeEventListener("touchstart", he, Ue), g.removeEventListener("touchmove", Ee, Ue);
  }
  function Ae(g, k) {
    Oe(g, function() {
      !i.state.isVisible && b.parentNode && b.parentNode.contains(b) && k();
    });
  }
  function ie(g, k) {
    Oe(g, k);
  }
  function Oe(g, k) {
    var P = F().box;
    function G(j) {
      j.target === P && (Nt(P, "remove", G), k());
    }
    if (g === 0)
      return k();
    Nt(P, "remove", m), Nt(P, "add", G), m = G;
  }
  function ce(g, k, P) {
    P === void 0 && (P = !1);
    var G = Fe(i.props.triggerTarget || e);
    G.forEach(function(j) {
      j.addEventListener(g, k, P), x.push({
        node: j,
        eventType: g,
        handler: k,
        options: P
      });
    });
  }
  function ye() {
    S() && (ce("touchstart", Se, {
      passive: !0
    }), ce("touchend", Be, {
      passive: !0
    })), ei(i.props.trigger).forEach(function(g) {
      if (g !== "manual")
        switch (ce(g, Se), g) {
          case "mouseenter":
            ce("mouseleave", Be);
            break;
          case "focus":
            ce(ci ? "focusout" : "blur", Ke);
            break;
          case "focusin":
            ce("focusout", Ke);
            break;
        }
    });
  }
  function Pe() {
    x.forEach(function(g) {
      var k = g.node, P = g.eventType, G = g.handler, j = g.options;
      k.removeEventListener(P, G, j);
    }), x = [];
  }
  function Se(g) {
    var k, P = !1;
    if (!(!i.state.isEnabled || st(g) || l)) {
      var G = ((k = c) == null ? void 0 : k.type) === "focus";
      c = g, v = g.currentTarget, X(), !i.state.isVisible && cn(g) && Pt.forEach(function(j) {
        return j(g);
      }), g.type === "click" && (i.props.trigger.indexOf("mouseenter") < 0 || a) && i.props.hideOnClick !== !1 && i.state.isVisible ? P = !0 : lt(g), g.type === "click" && (a = !P), P && !G && Ge(g);
    }
  }
  function $e(g) {
    var k = g.target, P = I().contains(k) || b.contains(k);
    if (!(g.type === "mousemove" && P)) {
      var G = Le().concat(b).map(function(j) {
        var Z, de = j._tippy, Ze = (Z = de.popperInstance) == null ? void 0 : Z.state;
        return Ze ? {
          popperRect: j.getBoundingClientRect(),
          popperState: Ze,
          props: n
        } : null;
      }).filter(Boolean);
      ai(G, g) && (le(), Ge(g));
    }
  }
  function Be(g) {
    var k = st(g) || i.props.trigger.indexOf("click") >= 0 && a;
    if (!k) {
      if (i.props.interactive) {
        i.hideWithInteractivity(g);
        return;
      }
      Ge(g);
    }
  }
  function Ke(g) {
    i.props.trigger.indexOf("focusin") < 0 && g.target !== I() || i.props.interactive && g.relatedTarget && b.contains(g.relatedTarget) || Ge(g);
  }
  function st(g) {
    return Ce.isTouch ? S() !== g.type.indexOf("touch") >= 0 : !1;
  }
  function Ct() {
    _t();
    var g = i.props, k = g.popperOptions, P = g.placement, G = g.offset, j = g.getReferenceClientRect, Z = g.moveTransition, de = M() ? jt(b).arrow : null, Ze = j ? {
      getBoundingClientRect: j,
      contextElement: j.contextElement || I()
    } : e, dn = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(At) {
        var Je = At.state;
        if (M()) {
          var Sr = F(), Ut = Sr.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(St) {
            St === "placement" ? Ut.setAttribute("data-placement", Je.placement) : Je.attributes.popper["data-popper-" + St] ? Ut.setAttribute("data-" + St, "") : Ut.removeAttribute("data-" + St);
          }), Je.attributes.popper = {};
        }
      }
    }, Ye = [{
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
        adaptive: !Z
      }
    }, dn];
    M() && de && Ye.push({
      name: "arrow",
      options: {
        element: de,
        padding: 3
      }
    }), Ye.push.apply(Ye, (k == null ? void 0 : k.modifiers) || []), i.popperInstance = Ka(Ze, b, Object.assign({}, k, {
      placement: P,
      onFirstUpdate: w,
      modifiers: Ye
    }));
  }
  function _t() {
    i.popperInstance && (i.popperInstance.destroy(), i.popperInstance = null);
  }
  function Me() {
    var g = i.props.appendTo, k, P = I();
    i.props.interactive && g === hr || g === "parent" ? k = P.parentNode : k = mr(g, [P]), k.contains(b) || k.appendChild(b), i.state.isMounted = !0, Ct();
  }
  function Le() {
    return at(b.querySelectorAll("[data-tippy-root]"));
  }
  function lt(g) {
    i.clearDelayTimeouts(), g && W("onTrigger", [i, g]), ae();
    var k = N(!0), P = A(), G = P[0], j = P[1];
    Ce.isTouch && G === "hold" && j && (k = j), k ? r = setTimeout(function() {
      i.show();
    }, k) : i.show();
  }
  function Ge(g) {
    if (i.clearDelayTimeouts(), W("onUntrigger", [i, g]), !i.state.isVisible) {
      me();
      return;
    }
    if (!(i.props.trigger.indexOf("mouseenter") >= 0 && i.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(g.type) >= 0 && a)) {
      var k = N(!1);
      k ? o = setTimeout(function() {
        i.state.isVisible && i.hide();
      }, k) : s = requestAnimationFrame(function() {
        i.hide();
      });
    }
  }
  function ut() {
    i.state.isEnabled = !0;
  }
  function Tt() {
    i.hide(), i.state.isEnabled = !1;
  }
  function kt() {
    clearTimeout(r), clearTimeout(o), cancelAnimationFrame(s);
  }
  function Dt(g) {
    if (!i.state.isDestroyed) {
      W("onBeforeUpdate", [i, g]), Pe();
      var k = i.props, P = Ln(e, Object.assign({}, k, Pn(g), {
        ignoreAttributes: !0
      }));
      i.props = P, ye(), k.interactiveDebounce !== P.interactiveDebounce && (le(), O = Sn($e, P.interactiveDebounce)), k.triggerTarget && !P.triggerTarget ? Fe(k.triggerTarget).forEach(function(G) {
        G.removeAttribute("aria-expanded");
      }) : P.triggerTarget && e.removeAttribute("aria-expanded"), X(), z(), h && h(k, P), i.popperInstance && (Ct(), Le().forEach(function(G) {
        requestAnimationFrame(G._tippy.popperInstance.forceUpdate);
      })), W("onAfterUpdate", [i, g]);
    }
  }
  function Et(g) {
    i.setProps({
      content: g
    });
  }
  function Tr() {
    var g = i.state.isVisible, k = i.state.isDestroyed, P = !i.state.isEnabled, G = Ce.isTouch && !i.props.touch, j = Wt(i.props.duration, 0, be.duration);
    if (!(g || k || P || G) && !I().hasAttribute("disabled") && (W("onShow", [i], !1), i.props.onShow(i) !== !1)) {
      if (i.state.isVisible = !0, M() && (b.style.visibility = "visible"), z(), ae(), i.state.isMounted || (b.style.transition = "none"), M()) {
        var Z = F(), de = Z.box, Ze = Z.content;
        Ft([de, Ze], 0);
      }
      w = function() {
        var Ye;
        if (!(!i.state.isVisible || d)) {
          if (d = !0, b.offsetHeight, b.style.transition = i.props.moveTransition, M() && i.props.animation) {
            var Yt = F(), At = Yt.box, Je = Yt.content;
            Ft([At, Je], j), yt([At, Je], "visible");
          }
          V(), X(), Mn(zt, i), (Ye = i.popperInstance) == null || Ye.forceUpdate(), W("onMount", [i]), i.props.animation && M() && ie(j, function() {
            i.state.isShown = !0, W("onShown", [i]);
          });
        }
      }, Me();
    }
  }
  function kr() {
    var g = !i.state.isVisible, k = i.state.isDestroyed, P = !i.state.isEnabled, G = Wt(i.props.duration, 1, be.duration);
    if (!(g || k || P) && (W("onHide", [i], !1), i.props.onHide(i) !== !1)) {
      if (i.state.isVisible = !1, i.state.isShown = !1, d = !1, a = !1, M() && (b.style.visibility = "hidden"), le(), me(), z(!0), M()) {
        var j = F(), Z = j.box, de = j.content;
        i.props.animation && (Ft([Z, de], G), yt([Z, de], "hidden"));
      }
      V(), X(), i.props.animation ? M() && Ae(G, i.unmount) : i.unmount();
    }
  }
  function Dr(g) {
    H().addEventListener("mousemove", O), Mn(Pt, O), O(g);
  }
  function Er() {
    i.state.isVisible && i.hide(), i.state.isMounted && (_t(), Le().forEach(function(g) {
      g._tippy.unmount();
    }), b.parentNode && b.parentNode.removeChild(b), zt = zt.filter(function(g) {
      return g !== i;
    }), i.state.isMounted = !1, W("onHidden", [i]));
  }
  function Ar() {
    i.state.isDestroyed || (i.clearDelayTimeouts(), i.unmount(), Pe(), delete e._tippy, i.state.isDestroyed = !0, W("onDestroy", [i]));
  }
}
function D(e, t) {
  t === void 0 && (t = {});
  var n = be.plugins.concat(t.plugins || []);
  li();
  var r = Object.assign({}, t, {
    plugins: n
  }), o = oi(e), s = o.reduce(function(a, l) {
    var u = l && yi(l, r);
    return u && a.push(u), a;
  }, []);
  return Gt(e) ? s[0] : s;
}
D.defaultProps = be;
D.setDefaultProps = vi;
D.currentInput = Ce;
var bi = Object.assign({}, ar, {
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
}), wi = function(t, n) {
  var r;
  n === void 0 && (n = {});
  var o = t, s = [], a = [], l, u = n.overrides, d = [], c = !1;
  function m() {
    a = o.map(function(i) {
      return Fe(i.props.triggerTarget || i.reference);
    }).reduce(function(i, y) {
      return i.concat(y);
    }, []);
  }
  function w() {
    s = o.map(function(i) {
      return i.reference;
    });
  }
  function x(i) {
    o.forEach(function(y) {
      i ? y.enable() : y.disable();
    });
  }
  function O(i) {
    return o.map(function(y) {
      var b = y.setProps;
      return y.setProps = function(h) {
        b(h), y.reference === l && i.setProps(h);
      }, function() {
        y.setProps = b;
      };
    });
  }
  function v(i, y) {
    var b = a.indexOf(y);
    if (y !== l) {
      l = y;
      var h = (u || []).concat("content").reduce(function(T, B) {
        return T[B] = o[b].props[B], T;
      }, {});
      i.setProps(Object.assign({}, h, {
        getReferenceClientRect: typeof h.getReferenceClientRect == "function" ? h.getReferenceClientRect : function() {
          var T;
          return (T = s[b]) == null ? void 0 : T.getBoundingClientRect();
        }
      }));
    }
  }
  x(!1), w(), m();
  var C = {
    fn: function() {
      return {
        onDestroy: function() {
          x(!0);
        },
        onHidden: function() {
          l = null;
        },
        onClickOutside: function(b) {
          b.props.showOnCreate && !c && (c = !0, l = null);
        },
        onShow: function(b) {
          b.props.showOnCreate && !c && (c = !0, v(b, s[0]));
        },
        onTrigger: function(b, h) {
          v(b, h.currentTarget);
        }
      };
    }
  }, p = D(Ve(), Object.assign({}, Ja(n, ["overrides"]), {
    plugins: [C].concat(n.plugins || []),
    triggerTarget: a,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((r = n.popperOptions) == null ? void 0 : r.modifiers) || [], [bi])
    })
  })), f = p.show;
  p.show = function(i) {
    if (f(), !l && i == null)
      return v(p, s[0]);
    if (!(l && i == null)) {
      if (typeof i == "number")
        return s[i] && v(p, s[i]);
      if (o.indexOf(i) >= 0) {
        var y = i.reference;
        return v(p, y);
      }
      if (s.indexOf(i) >= 0)
        return v(p, i);
    }
  }, p.showNext = function() {
    var i = s[0];
    if (!l)
      return p.show(0);
    var y = s.indexOf(l);
    p.show(s[y + 1] || i);
  }, p.showPrevious = function() {
    var i = s[s.length - 1];
    if (!l)
      return p.show(i);
    var y = s.indexOf(l), b = s[y - 1] || i;
    p.show(b);
  };
  var _ = p.setProps;
  return p.setProps = function(i) {
    u = i.overrides || u, _(i);
  }, p.setInstances = function(i) {
    x(!0), d.forEach(function(y) {
      return y();
    }), o = i, x(!1), w(), m(), d = O(p), p.setProps({
      triggerTarget: a
    });
  }, d = O(p), p;
}, xi = {
  name: "animateFill",
  defaultValue: !1,
  fn: function(t) {
    var n;
    if (!((n = t.props.render) != null && n.$$tippy))
      return {};
    var r = jt(t.popper), o = r.box, s = r.content, a = t.props.animateFill ? Oi() : null;
    return {
      onCreate: function() {
        a && (o.insertBefore(a, o.firstElementChild), o.setAttribute("data-animatefill", ""), o.style.overflow = "hidden", t.setProps({
          arrow: !1,
          animation: "shift-away"
        }));
      },
      onMount: function() {
        if (a) {
          var u = o.style.transitionDuration, d = Number(u.replace("ms", ""));
          s.style.transitionDelay = Math.round(d / 10) + "ms", a.style.transitionDuration = u, yt([a], "visible");
        }
      },
      onShow: function() {
        a && (a.style.transitionDuration = "0ms");
      },
      onHide: function() {
        a && yt([a], "hidden");
      }
    };
  }
};
function Oi() {
  var e = Ve();
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
function Ci(e) {
  e.addEventListener("mousemove", Cr);
}
function _i(e) {
  e.removeEventListener("mousemove", Cr);
}
var Ti = {
  name: "followCursor",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, r = br(t.props.triggerTarget || n), o = !1, s = !1, a = !0, l = t.props;
    function u() {
      return t.props.followCursor === "initial" && t.state.isVisible;
    }
    function d() {
      r.addEventListener("mousemove", w);
    }
    function c() {
      r.removeEventListener("mousemove", w);
    }
    function m() {
      o = !0, t.setProps({
        getReferenceClientRect: null
      }), o = !1;
    }
    function w(v) {
      var C = v.target ? n.contains(v.target) : !0, p = t.props.followCursor, f = v.clientX, _ = v.clientY, i = n.getBoundingClientRect(), y = f - i.left, b = _ - i.top;
      (C || !t.props.interactive) && t.setProps({
        getReferenceClientRect: function() {
          var T = n.getBoundingClientRect(), B = f, A = _;
          p === "initial" && (B = T.left + y, A = T.top + b);
          var S = p === "horizontal" ? T.top : A, M = p === "vertical" ? T.right : B, I = p === "horizontal" ? T.bottom : A, H = p === "vertical" ? T.left : B;
          return {
            width: M - H,
            height: I - S,
            top: S,
            right: M,
            bottom: I,
            left: H
          };
        }
      });
    }
    function x() {
      t.props.followCursor && ($t.push({
        instance: t,
        doc: r
      }), Ci(r));
    }
    function O() {
      $t = $t.filter(function(v) {
        return v.instance !== t;
      }), $t.filter(function(v) {
        return v.doc === r;
      }).length === 0 && _i(r);
    }
    return {
      onCreate: x,
      onDestroy: O,
      onBeforeUpdate: function() {
        l = t.props;
      },
      onAfterUpdate: function(C, p) {
        var f = p.followCursor;
        o || f !== void 0 && l.followCursor !== f && (O(), f ? (x(), t.state.isMounted && !s && !u() && d()) : (c(), m()));
      },
      onMount: function() {
        t.props.followCursor && !s && (a && (w(Kt), a = !1), u() || d());
      },
      onTrigger: function(C, p) {
        cn(p) && (Kt = {
          clientX: p.clientX,
          clientY: p.clientY
        }), s = p.type === "focus";
      },
      onHidden: function() {
        t.props.followCursor && (m(), c(), a = !0);
      }
    };
  }
};
function ki(e, t) {
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
var Di = {
  name: "inlinePositioning",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference;
    function r() {
      return !!t.props.inlinePositioning;
    }
    var o, s = -1, a = !1, l = [], u = {
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
    function d(w) {
      return Ei(yr(w), n.getBoundingClientRect(), at(n.getClientRects()), s);
    }
    function c(w) {
      a = !0, t.setProps(w), a = !1;
    }
    function m() {
      a || c(ki(t.props, u));
    }
    return {
      onCreate: m,
      onAfterUpdate: m,
      onTrigger: function(x, O) {
        if (cn(O)) {
          var v = at(t.reference.getClientRects()), C = v.find(function(f) {
            return f.left - 2 <= O.clientX && f.right + 2 >= O.clientX && f.top - 2 <= O.clientY && f.bottom + 2 >= O.clientY;
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
function Ei(e, t, n, r) {
  if (n.length < 2 || e === null)
    return t;
  if (n.length === 2 && r >= 0 && n[0].left > n[1].right)
    return n[r] || t;
  switch (e) {
    case "top":
    case "bottom": {
      var o = n[0], s = n[n.length - 1], a = e === "top", l = o.top, u = s.bottom, d = a ? o.left : s.left, c = a ? o.right : s.right, m = c - d, w = u - l;
      return {
        top: l,
        bottom: u,
        left: d,
        right: c,
        width: m,
        height: w
      };
    }
    case "left":
    case "right": {
      var x = Math.min.apply(Math, n.map(function(b) {
        return b.left;
      })), O = Math.max.apply(Math, n.map(function(b) {
        return b.right;
      })), v = n.filter(function(b) {
        return e === "left" ? b.left === x : b.right === O;
      }), C = v[0].top, p = v[v.length - 1].bottom, f = x, _ = O, i = _ - f, y = p - C;
      return {
        top: C,
        bottom: p,
        left: f,
        right: _,
        width: i,
        height: y
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
    var a = null, l = null;
    function u() {
      var d = s("reference") ? o().getBoundingClientRect() : null, c = s("popper") ? r.getBoundingClientRect() : null;
      (d && jn(a, d) || c && jn(l, c)) && t.popperInstance && t.popperInstance.update(), a = d, l = c, t.state.isMounted && requestAnimationFrame(u);
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
D.setDefaultProps({
  render: Or
});
D.setDefaultProps({
  onShow: (e) => {
    if (!e.props.content)
      return !1;
  }
});
function _r(e, t = {}, n = { mount: !0, appName: "Tippy" }) {
  n = Object.assign({ mount: !0, appName: "Tippy" }, n);
  const r = Hn(), o = Y(), s = Y({
    isEnabled: !1,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }), a = Lr();
  let l = null;
  const u = () => l || (l = document.createDocumentFragment(), l), d = (h) => {
    let T, B = Re(h) ? h.value : h;
    return jr(B) ? (a.value || (a.value = pn({
      name: n.appName,
      setup: () => () => Re(h) ? h.value : h
    }), r && Object.assign(a.value._context, r.appContext), a.value.mount(u())), T = () => u()) : typeof B == "object" ? (a.value || (a.value = pn({
      name: n.appName,
      setup: () => () => Ne(Re(h) ? h.value : h)
    }), r && Object.assign(a.value._context, r.appContext), a.value.mount(u())), T = () => u()) : T = B, T;
  }, c = (h) => {
    let T = {};
    return Re(h) ? T = h.value || {} : fn(h) ? T = { ...h } : T = { ...h }, T.content && (T.content = d(T.content)), T.triggerTarget && (T.triggerTarget = Re(T.triggerTarget) ? T.triggerTarget.value : T.triggerTarget), (!T.plugins || !Array.isArray(T.plugins)) && (T.plugins = []), T.plugins = T.plugins.filter((B) => B.name !== "vueTippyReactiveState"), T.plugins.push({
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
  }, w = () => {
    !o.value || !t.content || o.value.setContent(d(t.content));
  }, x = (h) => {
    var T;
    (T = o.value) === null || T === void 0 || T.setContent(d(h));
  }, O = (h) => {
    var T;
    (T = o.value) === null || T === void 0 || T.setProps(c(h));
  }, v = () => {
    var h;
    o.value && (o.value.destroy(), o.value = void 0), l = null, (h = a.value) === null || h === void 0 || h.unmount(), a.value = void 0;
  }, C = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.show();
  }, p = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.hide();
  }, f = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.disable(), s.value.isEnabled = !1;
  }, _ = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.enable(), s.value.isEnabled = !0;
  }, i = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.unmount();
  }, y = () => {
    if (!e)
      return;
    let h = Re(e) ? e.value : e;
    typeof h == "function" && (h = h()), h && (o.value = D(h, c(t)), h.$tippy = b);
  }, b = {
    tippy: o,
    refresh: m,
    refreshContent: w,
    setContent: x,
    setProps: O,
    destroy: v,
    hide: p,
    show: C,
    disable: f,
    enable: _,
    unmount: i,
    mount: y,
    state: s
  };
  return n.mount && (r ? r.isMounted ? y() : Te(y) : y()), r && Rr(() => {
    v();
  }), Re(t) || fn(t) ? qe(t, m, { immediate: !1 }) : Re(t.content) && qe(t.content, w, { immediate: !1 }), b;
}
function Si(e, t) {
  const n = Y();
  return Te(() => {
    const o = (Array.isArray(e) ? e.map((s) => s.value) : typeof e == "function" ? e() : e.value).map((s) => s instanceof Element ? s._tippy : s).filter(Boolean);
    n.value = wi(o, t ? { allowHTML: !0, ...t } : { allowHTML: !0 });
  }), {
    singleton: n
  };
}
function Mi(e) {
  return typeof e == "function" ? e() : $(e);
}
function Pi(e) {
  var t, n;
  const r = Mi(e);
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
    appendTo: { default: () => D.defaultProps.appendTo },
    aria: { default: () => D.defaultProps.aria },
    delay: { default: () => D.defaultProps.delay },
    duration: { default: () => D.defaultProps.duration },
    getReferenceClientRect: { default: () => D.defaultProps.getReferenceClientRect },
    hideOnClick: { type: [Boolean, String], default: () => D.defaultProps.hideOnClick },
    ignoreAttributes: { type: Boolean, default: () => D.defaultProps.ignoreAttributes },
    interactive: { type: Boolean, default: () => D.defaultProps.interactive },
    interactiveBorder: { default: () => D.defaultProps.interactiveBorder },
    interactiveDebounce: { default: () => D.defaultProps.interactiveDebounce },
    moveTransition: { default: () => D.defaultProps.moveTransition },
    offset: { default: () => D.defaultProps.offset },
    onAfterUpdate: { default: () => D.defaultProps.onAfterUpdate },
    onBeforeUpdate: { default: () => D.defaultProps.onBeforeUpdate },
    onCreate: { default: () => D.defaultProps.onCreate },
    onDestroy: { default: () => D.defaultProps.onDestroy },
    onHidden: { default: () => D.defaultProps.onHidden },
    onHide: { default: () => D.defaultProps.onHide },
    onMount: { default: () => D.defaultProps.onMount },
    onShow: { default: () => D.defaultProps.onShow },
    onShown: { default: () => D.defaultProps.onShown },
    onTrigger: { default: () => D.defaultProps.onTrigger },
    onUntrigger: { default: () => D.defaultProps.onUntrigger },
    onClickOutside: { default: () => D.defaultProps.onClickOutside },
    placement: { default: () => D.defaultProps.placement },
    plugins: { default: () => D.defaultProps.plugins },
    popperOptions: { default: () => D.defaultProps.popperOptions },
    render: { default: () => D.defaultProps.render },
    showOnCreate: { type: Boolean, default: () => D.defaultProps.showOnCreate },
    touch: { type: [Boolean, String, Array], default: () => D.defaultProps.touch },
    trigger: { default: () => D.defaultProps.trigger },
    triggerTarget: { default: () => D.defaultProps.triggerTarget },
    animateFill: { type: Boolean, default: () => D.defaultProps.animateFill },
    followCursor: { type: [Boolean, String], default: () => D.defaultProps.followCursor },
    inlinePositioning: { type: Boolean, default: () => D.defaultProps.inlinePositioning },
    sticky: { type: [Boolean, String], default: () => D.defaultProps.sticky },
    allowHTML: { type: Boolean, default: () => D.defaultProps.allowHTML },
    animation: { default: () => D.defaultProps.animation },
    arrow: { default: () => D.defaultProps.arrow },
    content: { default: () => D.defaultProps.content },
    inertia: { default: () => D.defaultProps.inertia },
    maxWidth: { default: () => D.defaultProps.maxWidth },
    role: { default: () => D.defaultProps.role },
    theme: { default: () => D.defaultProps.theme },
    zIndex: { default: () => D.defaultProps.zIndex }
  },
  emits: ["state"],
  setup(e, { slots: t, emit: n, expose: r }) {
    const o = Y(), s = Y(), a = Y(), l = Y(!1), u = () => {
      let x = { ...e };
      for (const O of ["to", "tag", "contentTag", "contentClass"])
        x.hasOwnProperty(O) && delete x[O];
      return x;
    };
    let d = () => Pi(o);
    e.to && (typeof Element < "u" && e.to instanceof Element ? d = () => e.to : e.to === "parent" ? d = () => {
      let x = o.value;
      return x || (x = o.value = s.value.parentElement), x;
    } : (typeof e.to == "string" || e.to instanceof String) && (d = () => document.querySelector(e.to)));
    const c = _r(d, u());
    let m = t.content;
    !m && e.to === "parent" && (m = t.default), Te(() => {
      l.value = !0, bt(() => {
        m && c.setContent(() => a.value);
      });
    }), qe(c.state, () => {
      n("state", $(c.state));
    }, { immediate: !0, deep: !0 }), qe(() => e, () => {
      c.setProps(u()), m && c.setContent(() => a.value);
    }, { deep: !0 });
    let w = Ir({
      elem: o,
      contentElem: a,
      mounted: l,
      ...c
    });
    return r(w), () => {
      const x = (typeof e.contentTag == "string", e.contentTag), O = m ? Ne(x, {
        ref: a,
        style: { display: l.value ? "inherit" : "none" },
        class: e.contentClass
      }, m(w)) : null;
      if (e.to === "parent") {
        const p = [];
        if (!o.value) {
          const f = Ne("span", {
            ref: s,
            "data-v-tippy": "",
            style: { display: "none" }
          });
          p.push(f);
        }
        return O && p.push(O), p;
      }
      const v = t.default ? t.default(w) : [];
      if (!e.tag) {
        const p = Ne(v[0], {
          ref: o,
          "data-v-tippy": ""
        });
        return O ? [p, O] : p;
      }
      const C = (typeof e.tag == "string", e.tag);
      return Ne(C, { ref: o, "data-v-tippy": "" }, O ? [v, O] : v);
    };
  }
});
const $i = [
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
Object.keys(D.defaultProps).forEach((e) => {
  $i.includes(e) ? Zt[e] = {
    type: Boolean,
    default: function() {
      return D.defaultProps[e];
    }
  } : Zt[e] = {
    default: function() {
      return D.defaultProps[e];
    }
  };
});
ee({
  props: Zt,
  setup(e) {
    const t = Y([]), { singleton: n } = Si(t, e);
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
const Bi = D.setDefaultProps;
Bi({
  ignoreAttributes: !0,
  plugins: [Ai, Di, Ti, xi]
});
function Li() {
  const e = Ie(Zn);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
const Ri = { class: "g-gantt-tooltip-container" }, Ii = { class: "g-gantt-tooltip-area-container" }, ji = { class: "g-gantt-tooltip-area" }, Hi = { class: "g-gantt-tooltip-category-container" }, Gi = { class: "g-gantt-tooltip-category" }, Yi = { class: "g-gantt-tooltip-promotion-title" }, Ui = { class: "g-gantt-tooltip-promotion-time-container" }, Wi = { class: "g-gantt-tooltip-time" }, Fi = "cadetblue", Ni = /* @__PURE__ */ ee({
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
    const t = Ie("iconComponent"), n = e, { bar: r } = gt(n), o = q(() => {
      var w, x, O;
      const m = (O = (x = (w = r.value) == null ? void 0 : w.ganttBarConfig) == null ? void 0 : x.tooltipInfo) == null ? void 0 : O.publishedAt;
      return m ? !Q(new Date(m * 1e3)).isAfter(new Date()) : !1;
    }), s = Y(o.value ? "pointer" : "default"), a = q(
      () => {
        var m, w;
        return ((w = (m = r == null ? void 0 : r.value) == null ? void 0 : m.ganttBarConfig.style) == null ? void 0 : w.backgroundColor) || Fi;
      }
    ), l = () => {
      var w, x;
      const m = (x = (w = r.value) == null ? void 0 : w.ganttBarConfig.tooltipInfo) == null ? void 0 : x.promotionUrl;
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
      const m = n.toDayjs(u.value).format("DD.MM."), w = n.toDayjs(d.value).format("DD.MM.YYYY");
      return `${m} \u2013 ${w}`;
    });
    return (m, w) => {
      var x, O, v, C, p, f, _, i, y, b, h, T;
      return E(), R("div", {
        class: "g-gantt-tooltip",
        style: U({
          fontFamily: m.config.font.value
        }),
        onClick: l
      }, [
        L("div", Ri, [
          L("div", Ii, [
            L("span", ji, ne((v = (O = (x = $(r)) == null ? void 0 : x.ganttBarConfig) == null ? void 0 : O.tooltipInfo) == null ? void 0 : v.areaName), 1),
            $(r) ? (E(), te(Xe($(t)), {
              key: 0,
              name: (f = (p = (C = $(r)) == null ? void 0 : C.ganttBarConfig) == null ? void 0 : p.tooltipInfo) == null ? void 0 : f.icon,
              size: "24"
            }, null, 8, ["name"])) : se("", !0)
          ]),
          L("div", Hi, [
            L("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",
              style: U({ background: a.value })
            }, null, 4),
            L("span", Gi, ne((y = (i = (_ = $(r)) == null ? void 0 : _.ganttBarConfig) == null ? void 0 : i.tooltipInfo) == null ? void 0 : y.categoryName), 1),
            L("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",
              style: U({ background: a.value })
            }, null, 4)
          ]),
          L("p", Yi, ne((T = (h = (b = $(r)) == null ? void 0 : b.ganttBarConfig) == null ? void 0 : h.tooltipInfo) == null ? void 0 : T.title), 1),
          L("div", Ui, [
            L("p", Wi, [
              J(m.$slots, "default", {
                bar: $(r),
                barStart: u.value,
                barEnd: d.value
              }, () => [
                vt(ne(c.value), 1)
              ], !0)
            ]),
            o.value ? (E(), te(Xe($(t)), {
              key: 0,
              name: "chevron-right",
              size: "16",
              style: { color: "#008075" }
            })) : se("", !0)
          ])
        ])
      ], 4);
    };
  }
});
const zi = /* @__PURE__ */ it(Ni, [["__scopeId", "data-v-00b81e26"]]), Vi = ["id"], qi = { class: "g-gantt-bar-label" }, Xi = ["innerHTML"], Qi = `
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`, Ki = 8, Zi = /* @__PURE__ */ ee({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    var B;
    Jt((A) => ({
      "2abf47e3": $(o)
    }));
    const t = e, n = Li(), { bar: r } = gt(t), o = (B = t.bar.ganttBarConfig.style) == null ? void 0 : B.backgroundColor, { mapTimeToPosition: s, mapPositionToTime: a } = tn(), { font: l, barEnd: u, barStart: d, rowHeight: c, width: m, chartStart: w, chartEnd: x, chartSize: O } = je(), v = Y(), { toDayjs: C } = en(), p = Y(!1), f = q(() => r.value.ganttBarConfig), _ = Ie(Jn), i = (A) => {
      var H;
      const S = document.querySelector(".tippy-svg-arrow");
      if (!S)
        return;
      const I = ((H = S.style.transform) != null ? H : "").match(/translate3d\((-?\d+)/);
      if (A === "bottom" && I) {
        const F = S.firstElementChild;
        F.style.transform = "rotateX(180deg)";
        const N = parseInt(I[1]);
        S.style.transform = `translate3d(${N}px, -115px, 0px)`;
      }
      if (A === "top" && I) {
        const F = parseInt(I[1]);
        S.style.transform = `translate3d(${F}px, -1px, 0px)`;
      }
    };
    Te(() => {
      !(v != null && v.value) || _r(v.value, {
        content: Ne(zi, { bar: r.value, config: { barStart: d, barEnd: u, font: l }, toDayjs: C }),
        arrow: Qi,
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
                i((A == null ? void 0 : A.state.placement) || "top");
              }
            }
          ]
        },
        delay: [0, 0],
        duration: [300, 0]
      });
    });
    const y = (A) => {
      var I, H;
      if (A.preventDefault(), A.type === "mousedown" || !(_ != null && _.value))
        return;
      const S = (H = (I = _ == null ? void 0 : _.value) == null ? void 0 : I[0]) == null ? void 0 : H.getBoundingClientRect();
      if (!S)
        return;
      const M = a(A.clientX - S.left);
      n(A, r.value, M);
    }, b = Y(0), h = Y(0), T = q(() => {
      const A = new Date(r.value.myBeginDate).getTime(), S = new Date(r.value.myEndDate).getTime();
      return Math.abs(A - S) / (1e3 * 60 * 60 * 24) <= 2 ? 0 : h.value - b.value - Ki;
    });
    return Te(() => {
      qe(
        [r, m, w, x, O.width],
        () => {
          b.value = s(r.value[d.value]), h.value = s(r.value[u.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (A, S) => {
      var M, I, H;
      return E(), R("div", {
        id: f.value.id,
        ref_key: "ganttBarRef",
        ref: v,
        class: Lt(["g-gantt-bar", f.value.asArrow ? "g-gantt-bar-is-arrow" : "", f.value.class || ""]),
        style: U({
          ...f.value.style,
          position: "relative",
          top: `${$(c) * 0.1}px`,
          left: `${b.value}px`,
          width: `${T.value}px`,
          height: `${$(c) * 0.8}px`,
          zIndex: p.value ? 3 : 2
        }),
        onClick: y,
        onContextmenu: y,
        onDblclick: y,
        onMousedown: y,
        onMouseenter: y,
        onMouseleave: y
      }, [
        L("div", qi, [
          J(A.$slots, "default", { bar: $(r) }, () => [
            L("div", null, ne(f.value.label || ""), 1),
            f.value.html ? (E(), R("div", {
              key: 0,
              innerHTML: f.value.html
            }, null, 8, Xi)) : se("", !0)
          ])
        ]),
        f.value.asArrow ? (E(), R("div", {
          key: 0,
          style: U({
            borderLeft: `8px solid #${(H = (I = (M = $(r)) == null ? void 0 : M.ganttBarConfig) == null ? void 0 : I.style) == null ? void 0 : H.backgroundColor}`
          }),
          class: "g-gantt-bar-arrow"
        }, null, 4)) : se("", !0),
        f.value.hasHandles ? (E(), R(K, { key: 1 }, [
          S[0] || (S[0] = L("div", { class: "g-gantt-bar-handle-left" }, null, -1)),
          S[1] || (S[1] = L("div", { class: "g-gantt-bar-handle-right" }, null, -1))
        ], 64)) : se("", !0)
      ], 46, Vi);
    };
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
    const n = e, r = Y([]), o = t, { rowHeight: s, colors: a, labelColumnTitle: l } = je(), { highlightOnHover: u } = gt(n), d = Y(!1), c = q(() => ({
      height: `${s.value}px`,
      background: (u == null ? void 0 : u.value) && d.value ? a.value.hoverHighlight : null
    })), { mapPositionToTime: m } = tn(), w = Hr("barContainer");
    Bt(Jn, w);
    const x = (f) => {
      var b, h;
      const _ = (h = (b = w.value) == null ? void 0 : b[0]) == null ? void 0 : h.getBoundingClientRect();
      if (!_) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const i = f.clientX - _.left, y = m(i);
      o("drop", { e: f, datetime: y });
    };
    function O(f, _, i, y) {
      return f <= y && i <= _;
    }
    function v(f) {
      const _ = [];
      for (let i = 0; i < f.length; i++)
        for (let y = i + 1; y < f.length; y++)
          O(
            f[i].myBeginDate,
            f[i].myEndDate,
            f[y].myBeginDate,
            f[y].myEndDate
          ) && _.push(Q(f[i].myEndDate).isAfter(f[y].myEndDate) ? f[i] : f[y]);
      return _;
    }
    const C = () => {
      const f = [], _ = (i) => {
        if (!i || i.length === 0)
          return;
        const y = v(i);
        if (y.length > 0) {
          const b = i.filter((T) => !y.includes(T)), h = i.filter((T) => y.includes(T));
          f.push(b), _(h);
        } else
          f.push(i);
      };
      return _(n.bars), f;
    };
    Te(() => {
      r.value = C();
    });
    const p = (f) => !f || /^\s*$/.test(f);
    return (f, _) => (E(), R("div", null, [
      (E(!0), R(K, null, we(r.value, (i) => (E(), R("div", {
        key: i[0].ganttBarConfig.id,
        style: U(c.value),
        class: "g-gantt-row",
        onDragleave: _[0] || (_[0] = (y) => d.value = !1),
        onDrop: _[1] || (_[1] = (y) => x(y)),
        onMouseleave: _[2] || (_[2] = (y) => d.value = !1),
        onMouseover: _[3] || (_[3] = (y) => d.value = !0),
        onDragover: _[4] || (_[4] = Gr((y) => d.value = !0, ["prevent"]))
      }, [
        !p(f.label) && !$(l) ? (E(), R("div", {
          key: 0,
          style: U({ background: $(a).primary, color: $(a).text }),
          class: "g-gantt-row-label"
        }, [
          J(f.$slots, "label", {}, () => [
            vt(ne(f.label), 1)
          ])
        ], 4)) : se("", !0),
        L("div", Yr({
          ref_for: !0,
          ref: "barContainer",
          class: "g-gantt-row-bars-container"
        }, f.$attrs), [
          pt(Ur, {
            name: "bar-transition sys",
            tag: "div"
          }, {
            default: We(() => [
              (E(!0), R(K, null, we(i, (y) => (E(), te(Zi, {
                key: y.ganttBarConfig.id,
                bar: y
              }, {
                default: We(() => [
                  J(f.$slots, "bar-label", { bar: y })
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
  Q.extend(Fr), Q.extend(Nr), Q.extend(Fn), Q.extend(qr), Q.extend(zr), Q.extend(Wr), Q.extend(Vr);
}
const rs = {
  install(e, t) {
    es(), e.component("GGanttChart", zo), e.component("GGanttRow", Ji);
  }
};
function ge(e, t = "top") {
  if (!e || typeof document > "u")
    return;
  const n = document.head, r = document.createElement("style");
  t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.appendChild(document.createTextNode(e));
}
ge(`
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
ge(`
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
ge(`
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
ge(`
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
ge(`
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
ge(`
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
ge(`
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
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid var(--2abf47e3);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  z-index: 10;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
`, "top");
ge(`
.g-gantt-legend[data-v-517e11e4] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: var(--8b45b7ac);

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
}
`, "top");
ge(`
.g-gantt-grid-current-date[data-v-dd346c68] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: center;
}
`, "top");
ge(`
.g-gantt-legend-collapse[data-v-1dd633de] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 48px;
  margin-bottom: 14px;
}
.g-gantt-legend-area-icon[data-v-1dd633de] {
  margin: 0 8px 0 16px;
}
.g-gantt-legend-promotion[data-v-1dd633de] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-gantt-legend-areas-list[data-v-1dd633de] {
  display: flex;
  flex-direction: column;
}
.g-gantt-legend-area-list[data-v-1dd633de] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-do-collapse[data-v-1dd633de]:hover {
  cursor: pointer;
  color: #008075;
}
.g-gantt-legend-category-color[data-v-1dd633de] {
  width: 44px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
`, "top");
ge(`
.g-gantt-legend-collapse[data-v-46e9751c] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
}
.g-gantt-legend-title[data-v-46e9751c] {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}
.g-gantt-legend-area[data-v-46e9751c] {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;

  color: #1b1e1f;
}
.g-gantt-legend-category-color[data-v-46e9751c] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend-promotion[data-v-46e9751c] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-gantt-legend-do-uncollapse[data-v-46e9751c]:hover {
  cursor: pointer;
  color: #008075;
}
.g-gantt-legend-area-list[data-v-46e9751c] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-category-name[data-v-46e9751c] {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}
`, "top");
ge(`
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
  zo as GGanttChart,
  Ji as GGanttRow,
  rs as default,
  es as extendDayjs,
  rs as ganttastic
};
