import Q from "dayjs";
import { unref as B, getCurrentScope as Mr, onScopeDispose as Pr, getCurrentInstance as jn, onMounted as Te, nextTick as yt, ref as U, watch as Xe, inject as Pe, computed as q, defineComponent as ee, openBlock as S, createElementBlock as L, Fragment as ne, createElementVNode as $, normalizeStyle as F, createBlock as J, resolveDynamicComponent as je, toDisplayString as te, renderList as be, createVNode as ft, renderSlot as Z, createCommentVNode as de, createTextVNode as pt, onBeforeMount as $r, toRefs as gt, useSlots as Br, provide as Bt, normalizeClass as Lt, withCtx as We, shallowRef as Lr, onUnmounted as Rr, isRef as Ie, isReactive as dn, reactive as Ir, h as Ne, isVNode as jr, createApp as fn, useCssVars as Hn, useTemplateRef as Hr, withModifiers as Yr, mergeProps as Gr, TransitionGroup as Ur } from "vue";
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "day";
    return function(r, a, i) {
      var s = function(d) {
        return d.add(4 - d.isoWeekday(), n);
      }, l = a.prototype;
      l.isoWeekYear = function() {
        return s(this).year();
      }, l.isoWeek = function(d) {
        if (!this.$utils().u(d))
          return this.add(7 * (d - this.isoWeek()), n);
        var c, m, y, O, C = s(this), g = (c = this.isoWeekYear(), m = this.$u, y = (m ? i.utc : i)().year(c).startOf("year"), O = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (O += 7), y.add(O, n));
        return C.diff(g, "week") + 1;
      }, l.isoWeekday = function(d) {
        return this.$utils().u(d) ? this.day() || 7 : this.day(this.day() % 7 ? d : d - 7);
      };
      var u = l.startOf;
      l.startOf = function(d, c) {
        var m = this.$utils(), y = !!m.u(c) || c;
        return m.p(d) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : u.bind(this)(d, c);
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
      r.prototype.isSameOrBefore = function(a, i) {
        return this.isSame(a, i) || this.isBefore(a, i);
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
      r.prototype.isSameOrAfter = function(a, i) {
        return this.isSame(a, i) || this.isAfter(a, i);
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
      r.prototype.isBetween = function(i, s, l, u) {
        var d = a(i), c = a(s), m = (u = u || "()")[0] === "(", y = u[1] === ")";
        return (m ? this.isAfter(d, l) : !this.isBefore(d, l)) && (y ? this.isBefore(c, l) : !this.isAfter(c, l)) || (m ? this.isBefore(d, l) : !this.isAfter(d, l)) && (y ? this.isAfter(c, l) : !this.isBefore(c, l));
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
    return function(a, i, s) {
      var l = i.prototype;
      l.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var d = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var c = s(this).startOf(r).add(1, r).date(d), m = s(this).endOf(n);
          if (c.isBefore(m))
            return 1;
        }
        var y = s(this).startOf(r).date(d).startOf(n).subtract(1, "millisecond"), O = this.diff(y, n, !0);
        return O < 0 ? s(this).startOf("week").week() : Math.ceil(O);
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
      var i = r.prototype, s = i.format;
      a.en.ordinal = function(l) {
        var u = ["th", "st", "nd", "rd"], d = l % 100;
        return "[" + l + (u[(d - 20) % 10] || u[d] || u[0]) + "]";
      }, i.format = function(l) {
        var u = this, d = this.$locale();
        if (!this.isValid())
          return s.bind(this)(l);
        var c = this.$utils(), m = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(y) {
          switch (y) {
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
              return c.s(u.week(), y === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(u.isoWeek(), y === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(u.$H === 0 ? 24 : u.$H), y === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(u.$d.getTime() / 1e3);
            case "x":
              return u.$d.getTime();
            case "z":
              return "[" + u.offsetName() + "]";
            case "zzz":
              return "[" + u.offsetName("long") + "]";
            default:
              return y;
          }
        });
        return s.bind(this)(m);
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
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, i = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, d = function(g) {
      return function(_) {
        this[g] = +_;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var f = _.match(/([+-]|\d\d)/g), x = 60 * f[1] + (+f[2] || 0);
        return x === 0 ? 0 : f[0] === "+" ? -x : x;
      }(g);
    }], m = function(g) {
      var _ = l[g];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, y = function(g, _) {
      var f, x = l.meridiem;
      if (x) {
        for (var w = 1; w <= 24; w += 1)
          if (g.indexOf(x(w, 0, _)) > -1) {
            f = w > 12;
            break;
          }
      } else
        f = g === (_ ? "pm" : "PM");
      return f;
    }, O = { A: [s, function(g) {
      this.afternoon = y(g, !1);
    }], a: [s, function(g) {
      this.afternoon = y(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [a, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, d("seconds")], ss: [i, d("seconds")], m: [i, d("minutes")], mm: [i, d("minutes")], H: [i, d("hours")], h: [i, d("hours")], HH: [i, d("hours")], hh: [i, d("hours")], D: [i, d("day")], DD: [a, d("day")], Do: [s, function(g) {
      var _ = l.ordinal, f = g.match(/\d+/);
      if (this.day = f[0], _)
        for (var x = 1; x <= 31; x += 1)
          _(x).replace(/\[|\]/g, "") === g && (this.day = x);
    }], M: [i, d("month")], MM: [a, d("month")], MMM: [s, function(g) {
      var _ = m("months"), f = (m("monthsShort") || _.map(function(x) {
        return x.slice(0, 3);
      })).indexOf(g) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [s, function(g) {
      var _ = m("months").indexOf(g) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(g) {
      this.year = u(g);
    }], YYYY: [/\d{4}/, d("year")], Z: c, ZZ: c };
    function C(g) {
      var _, f;
      _ = g, f = l && l.formats;
      for (var x = (g = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, R, A) {
        var D = A && A.toUpperCase();
        return R || f[A] || n[A] || f[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, j, z) {
          return j || z.slice(1);
        });
      })).match(r), w = x.length, o = 0; o < w; o += 1) {
        var b = x[o], p = O[b], h = p && p[0], T = p && p[1];
        x[o] = T ? { regex: h, parser: T } : b.replace(/^\[|\]$/g, "");
      }
      return function(M) {
        for (var R = {}, A = 0, D = 0; A < w; A += 1) {
          var H = x[A];
          if (typeof H == "string")
            D += H.length;
          else {
            var j = H.regex, z = H.parser, N = M.slice(D), W = j.exec(N)[0];
            z.call(R, W), M = M.replace(W, "");
          }
        }
        return function(Y) {
          var V = Y.afternoon;
          if (V !== void 0) {
            var X = Y.hours;
            V ? X < 12 && (Y.hours += 12) : X === 12 && (Y.hours = 0), delete Y.afternoon;
          }
        }(R), R;
      };
    }
    return function(g, _, f) {
      f.p.customParseFormat = !0, g && g.parseTwoDigitYear && (u = g.parseTwoDigitYear);
      var x = _.prototype, w = x.parse;
      x.parse = function(o) {
        var b = o.date, p = o.utc, h = o.args;
        this.$u = p;
        var T = h[1];
        if (typeof T == "string") {
          var M = h[2] === !0, R = h[3] === !0, A = M || R, D = h[2];
          R && (D = h[2]), l = this.$locale(), !M && D && (l = f.Ls[D]), this.$d = function(N, W, Y) {
            try {
              if (["x", "X"].indexOf(W) > -1)
                return new Date((W === "X" ? 1e3 : 1) * N);
              var V = C(W)(N), X = V.year, se = V.month, le = V.day, Ee = V.hours, ve = V.minutes, oe = V.seconds, he = V.milliseconds, Se = V.zone, ie = new Date(), Oe = le || (X || se ? 1 : ie.getDate()), ue = X || ie.getFullYear(), me = 0;
              X && !se || (me = se > 0 ? se - 1 : ie.getMonth());
              var $e = Ee || 0, Ae = ve || 0, Be = oe || 0, Le = he || 0;
              return Se ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le + 60 * Se.offset * 1e3)) : Y ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le)) : new Date(ue, me, Oe, $e, Ae, Be, Le);
            } catch {
              return new Date("");
            }
          }(b, T, p), this.init(), D && D !== !0 && (this.$L = this.locale(D).$L), A && b != this.format(T) && (this.$d = new Date("")), l = {};
        } else if (T instanceof Array)
          for (var H = T.length, j = 1; j <= H; j += 1) {
            h[1] = T[j - 1];
            var z = f.apply(this, h);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === H && (this.$d = new Date(""));
          }
        else
          w.call(this, o);
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
  const r = n, { window: a = Jr } = r, i = ra(r, ["window"]);
  let s;
  const l = ea(() => a && "ResizeObserver" in a), u = () => {
    s && (s.disconnect(), s = void 0);
  }, d = Xe(() => qn(e), (m) => {
    u(), l.value && a && m && (s = new ResizeObserver(t), s.observe(m, i));
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
  return aa(e, ([i]) => {
    r.value = i.contentRect.width, a.value = i.contentRect.height;
  }, n), Xe(() => qn(e), (i) => {
    r.value = i ? t.width : 0, a.value = i ? t.height : 0;
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
  const { chartStart: t, chartEnd: n, barStart: r, barEnd: a, dateFormat: i } = e, s = q(() => u(t.value)), l = q(() => u(n.value)), u = (c, m) => {
    let y;
    if (m !== void 0 && typeof c != "string" && !(c instanceof Date) && (y = m === "start" ? c[r.value] : c[a.value]), typeof c == "string")
      y = c;
    else if (c instanceof Date)
      return Q(c);
    const O = i.value || er;
    return Q(y, O, !0);
  };
  return {
    chartStartDayjs: s,
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
    const t = e, n = Pe("iconComponent"), r = new Date(), a = new Date(r.getFullYear(), 0, 1), i = q(() => Math.ceil((new Date(r.getTime()).valueOf() - a.valueOf()) / 864e5)), s = q(() => t.parentWidth / 52 / 7), l = U(i.value >= 365 - 10), u = q(() => i.value >= 365 - 10 ? 0 : s.value * i.value - 33), d = q(() => i.value < 10 ? 0 : s.value * i.value - 33);
    return (c, m) => (S(), L(ne, null, [
      $("div", {
        style: F({
          position: "absolute",
          top: "-65px",
          zIndex: 3,
          left: s.value * i.value - 7.5 + "px"
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
          left: s.value * i.value + "px",
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
  }), i = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "W",
    month: "MMM",
    year: "YYYY"
  }, s = q(() => {
    const l = [], u = [], d = n.value.diff(t.value, "minutes", !0), c = r.value, m = a.value;
    let y = t.value, O = t.value;
    for (; O.isSameOrBefore(n.value); ) {
      const C = O.endOf(m), _ = C.isAfter(n.value) ? n.value.diff(O, "minutes", !0) / d * 100 : C.diff(O, "minutes", !0) / d * 100;
      u.push({
        label: O.format(i[e == null ? void 0 : e.value]),
        value: String(O),
        date: O.toDate(),
        width: String(_) + "%"
      }), O = C.add(1, m === "isoWeek" ? "week" : m).startOf(m);
    }
    for (; y.isSameOrBefore(n.value); ) {
      const C = y.endOf(c), _ = C.isAfter(n.value) ? n.value.diff(y, "minutes", !0) / d * 100 : C.diff(y, "minutes", !0) / d * 100;
      l.push({
        label: y.format(i[c]),
        value: String(y),
        date: y.toDate(),
        width: String(_) + "%"
      }), y = C.add(1, c).startOf(c);
    }
    return { upperUnits: l, lowerUnits: u };
  });
  return s.value.lowerUnits[0].label === "53" && s.value.lowerUnits.splice(0, 1), s.value.lowerUnits[s.value.lowerUnits.length - 1].label === "1" && s.value.lowerUnits.splice(s.value.lowerUnits.length - 1, 1), s.value.lowerUnits[s.value.lowerUnits.length - 1].label === "14" && s.value.lowerUnits.splice(s.value.lowerUnits.length - 1, 1), {
    timeaxisUnits: s
  };
}
const pa = /* @__PURE__ */ ee({
  __name: "GGanttGridAreaDivider",
  props: {
    areaHeights: {}
  },
  setup(e) {
    const { timeaxisUnits: t } = tr(), n = (a, i) => i === t.value.lowerUnits.length - 1 ? "unset" : a && Number(a) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2", r = (a) => {
      const i = +a >= 14 && +a <= 26, s = +a >= 40 && +a <= 52;
      return i || s ? "#f7f8f9" : "#ffffff";
    };
    return (a, i) => (S(), L(ne, null, [
      (S(!0), L(ne, null, be(a.areaHeights, (s) => (S(), L("div", {
        key: s,
        style: F({
          position: "absolute",
          top: s + "px",
          zIndex: 2,
          height: "6px",
          width: "100%",
          backgroundColor: "#DFE2E6"
        })
      }, null, 4))), 128)),
      (S(!0), L(ne, null, be(B(t).lowerUnits, ({ label: s, width: l }, u) => (S(), L("div", {
        key: s,
        style: F({
          width: l,
          borderRight: n(s, u),
          backgroundColor: r(s)
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
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((i) => {
          r.value.push(i.clientHeight);
        }), r.value.pop();
      });
    }), (a, i) => (S(), L("div", {
      ref_key: "gridContainer",
      ref: t,
      class: "g-grid-container"
    }, [
      ft(fa, { "parent-width": B(n) }, null, 8, ["parent-width"]),
      ft(pa, { "area-heights": r.value }, null, 8, ["area-heights"])
    ], 512));
  }
});
const bn = /* @__PURE__ */ wt(ga, [["__scopeId", "data-v-a719d7c7"]]);
function va() {
  const e = Pe(Qn);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const ha = { class: "g-label-column-rows" }, ma = /* @__PURE__ */ ee({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: t, colors: n, labelColumnTitle: r, rowHeight: a } = He(), i = va();
    return (s, l) => (S(), L("div", {
      class: "g-label-column",
      style: F({ fontFamily: B(t), color: B(n).text })
    }, [
      Z(s.$slots, "label-column-title", {}, () => [
        $("div", {
          class: "g-label-column-header",
          style: F({ background: B(n).primary })
        }, te(B(r)), 5)
      ]),
      $("div", ha, [
        (S(!0), L(ne, null, be(B(i)(), ({ label: u }, d) => (S(), L("div", {
          key: `${u}_${d}`,
          class: "g-label-column-row",
          style: F({
            background: d % 2 === 0 ? B(n).ternary : B(n).quartenary,
            height: `${B(a)}px`
          })
        }, [
          Z(s.$slots, "label-column-row", { label: u }, () => [
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
    return (a, i) => (S(), L("div", ya, [
      $("div", ba, [
        (S(!0), L(ne, null, be(B(r).lowerUnits, ({ label: s, value: l, date: u, width: d }, c) => (S(), L("div", {
          key: s,
          class: "g-timeunit g-timeunit-low",
          style: F({
            flexDirection: B(t) === "hour" ? "column" : "row",
            alignItems: B(t) === "hour" ? "" : "center",
            width: d
          })
        }, [
          c === 0 ? (S(), L("span", wa, "KW")) : de("", !0),
          Z(a.$slots, "timeunit", {
            label: s,
            value: l,
            date: u
          }, () => [
            pt(te(s), 1)
          ]),
          B(t) === "hour" ? (S(), L("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: F({ background: B(n).text })
          }, null, 4)) : de("", !0)
        ], 4))), 128))
      ]),
      $("div", xa, [
        (S(!0), L(ne, null, be(B(r).upperUnits, ({ label: s, value: l, date: u, width: d }) => (S(), L("div", {
          key: s,
          class: "g-upper-timeunit",
          style: F({
            width: d
          })
        }, [
          Z(a.$slots, "upper-timeunit", {
            label: s,
            value: l,
            date: u
          }, () => [
            pt(te(s), 1)
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
function en(e = He()) {
  const { dateFormat: t, chartSize: n } = e, { chartStartDayjs: r, chartEndDayjs: a, toDayjs: i, format: s } = Jt(e), l = q(() => a.value.diff(r.value, "minutes"));
  return {
    mapTimeToPosition: (c) => {
      const m = n.width.value || 0, y = i(c).diff(r.value, "minutes", !0);
      return Math.ceil(y / l.value * m);
    },
    mapPositionToTime: (c) => {
      const m = n.width.value || 0, y = c / m * l.value;
      return s(r.value.add(y, "minutes"), t.value);
    }
  };
}
const Ca = /* @__PURE__ */ ee({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: t } = en(), n = U(Q()), { colors: r, dateFormat: a, currentTimeLabel: i } = He(), s = q(() => {
      const l = a.value || "YYYY-MM-DD HH:mm";
      return t(Q(n.value, l).format(l));
    });
    return (l, u) => (S(), L("div", {
      class: "g-grid-current-time",
      style: F({
        left: `${s.value}px`
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
          pt(te(B(i)), 1)
        ])
      ], 4)
    ], 4));
  }
});
const _a = { class: "g-gantt-legend" }, Ta = { class: "g-gantt-legend-collapse-container" }, ka = { class: "g-gantt-legend-areas-list" }, Da = { class: "g-gantt-legend-promotion" }, Ea = 6, Sa = /* @__PURE__ */ ee({
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
    }), (r, a) => (S(), L("div", _a, [
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
      $("div", ka, [
        (S(!0), L(ne, null, be(Object.entries(r.legend), ([i, s], l) => (S(), L("div", {
          key: i,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + Ea + "px"
          })
        }, [
          (S(), J(je(B(t)), {
            class: "g-gantt-legend-area-icon",
            "size-s": "24",
            "size-m": "24",
            "size-l": "32",
            name: r.legend[i][0].area.icon
          }, null, 8, ["name"])),
          $("div", Da, [
            (S(!0), L(ne, null, be(s, (u) => (S(), L("div", {
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
const Aa = /* @__PURE__ */ wt(Sa, [["__scopeId", "data-v-8009c547"]]), Ma = { class: "g-gantt-legend" }, Pa = { class: "g-gantt-legend-collapse-container" }, $a = { class: "g-gantt-legend-areas-list" }, Ba = { class: "g-gantt-legend-title" }, La = { class: "g-gantt-legend-area" }, Ra = { class: "g-gantt-legend-category-name" }, Ia = 6, ja = /* @__PURE__ */ ee({
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
    }), (r, a) => (S(), L("div", Ma, [
      $("div", Pa, [
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
      $("div", $a, [
        (S(!0), L(ne, null, be(Object.entries(r.legend), ([i, s], l) => (S(), L("div", {
          key: i,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + Ia + "px"
          })
        }, [
          $("div", Ba, [
            (S(), J(je(B(t)), {
              class: "g-gantt-legend-area-icon",
              "size-s": "24",
              "size-m": "24",
              "size-l": "32",
              name: r.legend[i][0].area.icon
            }, null, 8, ["name"])),
            $("p", La, te(i), 1)
          ]),
          (S(!0), L(ne, null, be(s, (u) => (S(), L("div", {
            key: u.category.name,
            class: "g-gantt-legend-promotion"
          }, [
            $("div", {
              class: "g-gantt-legend-category-color",
              style: F({ backgroundColor: "#" + u.category.color })
            }, null, 4),
            $("p", Ra, te(u.category.name), 1)
          ]))), 128))
        ], 4))), 128))
      ])
    ]));
  }
});
const Ha = /* @__PURE__ */ wt(ja, [["__scopeId", "data-v-31a73749"]]), Ya = /* @__PURE__ */ ee({
  __name: "GGanttLegend",
  props: {
    legend: {}
  },
  setup(e) {
    const t = U(!0), n = () => document.querySelector("body").clientWidth > 1200;
    return $r(() => {
      t.value = n();
    }), (r, a) => t.value ? (S(), J(Ha, {
      key: 1,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": a[1] || (a[1] = (i) => t.value = i),
      legend: r.legend
    }, null, 8, ["is-collapsed", "legend"])) : (S(), J(Aa, {
      key: 0,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": a[0] || (a[0] = (i) => t.value = i),
      legend: r.legend
    }, null, 8, ["is-collapsed", "legend"]));
  }
}), Ga = { class: "g-gantt-chart-container" }, Ua = { class: "g-gantt-chart-quarters" }, za = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, Wa = { class: "g-gantt-rows-list" }, Fa = /* @__PURE__ */ ee({
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
    const i = U(
      Q(new Date()).isBetween(r, a)
    ), s = t, { width: l, font: u, colorScheme: d } = gt(n), c = Br(), m = q(
      () => typeof d.value != "string" ? d.value : yn[d.value] || yn.default
    ), y = () => {
      var w;
      const f = (w = c.default) == null ? void 0 : w.call(c), x = [];
      return f && f.forEach((o) => {
        var b;
        if ((b = o.props) != null && b.bars) {
          const { label: p, bars: h } = o.props;
          x.push({ label: p, bars: h });
        } else
          Array.isArray(o.children) && o.children.forEach((p) => {
            var T;
            const h = p;
            if ((T = h == null ? void 0 : h.props) != null && T.bars) {
              const { label: M, bars: R } = h.props;
              x.push({ label: M, bars: R });
            }
          });
      }), x;
    }, O = U(!1), C = (f, x, w, o) => {
      switch (f.type) {
        case "click":
          s("click-bar", { bar: x, e: f, datetime: w });
          break;
        case "mousedown":
          s("mousedown-bar", { bar: x, e: f, datetime: w });
          break;
        case "mouseup":
          s("mouseup-bar", { bar: x, e: f, datetime: w });
          break;
        case "dblclick":
          s("dblclick-bar", { bar: x, e: f, datetime: w });
          break;
        case "mouseenter":
          s("mouseenter-bar", { bar: x, e: f });
          break;
        case "mouseleave":
          s("mouseleave-bar", { bar: x, e: f });
          break;
        case "dragstart":
          O.value = !0, s("dragstart-bar", { bar: x, e: f });
          break;
        case "drag":
          s("drag-bar", { bar: x, e: f });
          break;
        case "dragend":
          O.value = !1, s("dragend-bar", { bar: x, e: f, movedBars: o });
          break;
        case "contextmenu":
          s("contextmenu-bar", { bar: x, e: f, datetime: w });
          break;
      }
    }, g = U(null), _ = Xn(g);
    return Bt(Qn, y), Bt(Kn, {
      ...gt(n),
      colors: m,
      chartSize: _
    }), Bt(Zn, C), (f, x) => (S(), L("div", Ga, [
      ft(Ya, {
        legend: f.legend ? f.legend : {}
      }, null, 8, ["legend"]),
      $("div", {
        class: Lt([[{ "labels-in-column": !!f.labelColumnTitle }], "g-gantt-chart-wrapper"])
      }, [
        f.labelColumnTitle ? (S(), J(ma, {
          key: 0,
          style: F({
            width: f.labelColumnWidth
          })
        }, {
          "label-column-title": We(() => [
            Z(f.$slots, "label-column-title")
          ]),
          "label-column-row": We(({ label: w }) => [
            Z(f.$slots, "label-column-row", { label: w })
          ]),
          _: 3
        }, 8, ["style"])) : de("", !0),
        $("div", {
          ref_key: "ganttChart",
          ref: g,
          class: Lt([
            "g-gantt-chart",
            {
              "with-column": f.labelColumnTitle,
              "g-gantt-chart-container--4-quarters-width": !i.value,
              "g-gantt-chart-container--5-quarters-width": i.value
            }
          ]),
          style: F({ width: B(l), background: m.value.background, fontFamily: B(u) })
        }, [
          f.grid ? (S(), J(bn, {
            key: 0,
            "highlighted-units": f.highlightedUnits
          }, null, 8, ["highlighted-units"])) : de("", !0),
          f.currentTime ? (S(), J(Ca, { key: 1 }, {
            "current-time-label": We(() => [
              Z(f.$slots, "current-time-label")
            ]),
            _: 3
          })) : de("", !0),
          $("div", Ua, [
            x[0] || (x[0] = $("div", { class: "g-gantt-chart-quarter" }, "Q1", -1)),
            x[1] || (x[1] = $("div", { class: "g-gantt-chart-quarter" }, "Q2", -1)),
            x[2] || (x[2] = $("div", { class: "g-gantt-chart-quarter" }, "Q3", -1)),
            x[3] || (x[3] = $("div", { class: "g-gantt-chart-quarter" }, "Q4", -1)),
            i.value ? (S(), L("div", za, "Q1")) : de("", !0)
          ]),
          $("div", {
            class: Lt([
              "g-gantt-rows-container",
              n.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            $("div", Wa, [
              Z(f.$slots, "default")
            ]),
            ft(bn, { "highlighted-units": f.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          f.hideTimeaxis ? de("", !0) : (S(), J(Oa, { key: 2 }, {
            "upper-timeunit": We(({ label: w, value: o, date: b }) => [
              Z(f.$slots, "upper-timeunit", {
                date: b,
                label: w,
                value: o
              })
            ]),
            timeunit: We(({ label: w, value: o, date: b }) => [
              Z(f.$slots, "timeunit", {
                date: b,
                label: w,
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
var re = "top", pe = "bottom", ge = "right", ae = "left", tn = "auto", xt = [re, pe, ge, ae], et = "start", vt = "end", Na = "clippingParents", nr = "viewport", ut = "popper", Va = "reference", wn = /* @__PURE__ */ xt.reduce(function(e, t) {
  return e.concat([t + "-" + et, t + "-" + vt]);
}, []), rr = /* @__PURE__ */ [].concat(xt, [tn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + et, t + "-" + vt]);
}, []), qa = "beforeRead", Xa = "read", Qa = "afterRead", Ka = "beforeMain", Za = "main", Ja = "afterMain", eo = "beforeWrite", to = "write", no = "afterWrite", ro = [qa, Xa, Qa, Ka, Za, Ja, eo, to, no];
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
function ar(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = we(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ao(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !fe(i) || !ke(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(s) {
      var l = a[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function oo(e) {
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
      var a = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !fe(a) || !ke(a) || (Object.assign(a.style, l), Object.keys(i).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var or = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ao,
  effect: oo,
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
    var i = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (r = nt(n.width) / s || 1), i > 0 && (a = nt(n.height) / i || 1);
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
function De(e) {
  return we(e).getComputedStyle(e);
}
function io(e) {
  return ["table", "td", "th"].indexOf(ke(e)) >= 0;
}
function Ye(e) {
  return ((tt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ht(e) {
  return ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (ar(e) ? e.host : null) || Ye(e);
}
function xn(e) {
  return !fe(e) || De(e).position === "fixed" ? null : e.offsetParent;
}
function so(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && fe(e)) {
    var r = De(e);
    if (r.position === "fixed")
      return null;
  }
  for (var a = Ht(e); fe(a) && ["html", "body"].indexOf(ke(a)) < 0; ) {
    var i = De(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ot(e) {
  for (var t = we(e), n = xn(e); n && io(n) && De(n).position === "static"; )
    n = xn(n);
  return n && (ke(n) === "html" || ke(n) === "body" && De(n).position === "static") ? t : n || so(e) || t;
}
function rn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ct(e, t, n) {
  return Ve(e, It(t, n));
}
function lo(e, t, n) {
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
var uo = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, lr(typeof t != "number" ? t : ur(t, xt));
};
function co(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = _e(n.placement), u = rn(l), d = [ae, ge].indexOf(l) >= 0, c = d ? "height" : "width";
  if (!(!i || !s)) {
    var m = uo(a.padding, n), y = nn(i), O = u === "y" ? re : ae, C = u === "y" ? pe : ge, g = n.rects.reference[c] + n.rects.reference[u] - s[u] - n.rects.popper[c], _ = s[u] - n.rects.reference[u], f = Ot(i), x = f ? u === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, w = g / 2 - _ / 2, o = m[O], b = x - y[c] - m[C], p = x / 2 - y[c] / 2 + w, h = ct(o, p, b), T = u;
    n.modifiersData[r] = (t = {}, t[T] = h, t.centerOffset = h - p, t);
  }
}
function fo(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || !ir(t.elements.popper, a) || (t.elements.arrow = a));
}
var po = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: co,
  effect: fo,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function at(e) {
  return e.split("-")[1];
}
var go = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function vo(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return {
    x: nt(t * a) / a || 0,
    y: nt(n * a) / a || 0
  };
}
function On(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, s = e.offsets, l = e.position, u = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, m = e.isFixed, y = c === !0 ? vo(s) : typeof c == "function" ? c(s) : s, O = y.x, C = O === void 0 ? 0 : O, g = y.y, _ = g === void 0 ? 0 : g, f = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), w = ae, o = re, b = window;
  if (d) {
    var p = Ot(n), h = "clientHeight", T = "clientWidth";
    if (p === we(n) && (p = Ye(n), De(p).position !== "static" && l === "absolute" && (h = "scrollHeight", T = "scrollWidth")), p = p, a === re || (a === ae || a === ge) && i === vt) {
      o = pe;
      var M = m && b.visualViewport ? b.visualViewport.height : p[h];
      _ -= M - r.height, _ *= u ? 1 : -1;
    }
    if (a === ae || (a === re || a === pe) && i === vt) {
      w = ge;
      var R = m && b.visualViewport ? b.visualViewport.width : p[T];
      C -= R - r.width, C *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: l
  }, d && go);
  if (u) {
    var D;
    return Object.assign({}, A, (D = {}, D[o] = x ? "0" : "", D[w] = f ? "0" : "", D.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + C + "px, " + _ + "px)" : "translate3d(" + C + "px, " + _ + "px, 0)", D));
  }
  return Object.assign({}, A, (t = {}, t[o] = x ? _ + "px" : "", t[w] = f ? C + "px" : "", t.transform = "", t));
}
function ho(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, u = l === void 0 ? !0 : l, d = {
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
    adaptive: s,
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
var mo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ho,
  data: {}
}, Mt = {
  passive: !0
};
function yo(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, s = r.resize, l = s === void 0 ? !0 : s, u = we(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && d.forEach(function(c) {
    c.addEventListener("scroll", n.update, Mt);
  }), l && u.addEventListener("resize", n.update, Mt), function() {
    i && d.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Mt);
    }), l && u.removeEventListener("resize", n.update, Mt);
  };
}
var bo = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: yo,
  data: {}
}, wo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wo[t];
  });
}
var xo = {
  start: "end",
  end: "start"
};
function Cn(e) {
  return e.replace(/start|end/g, function(t) {
    return xo[t];
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
function Oo(e) {
  var t = we(e), n = Ye(e), r = t.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  return r && (a = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, l = r.offsetTop)), {
    width: a,
    height: i,
    x: s + on(e),
    y: l
  };
}
function Co(e) {
  var t, n = Ye(e), r = an(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ve(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Ve(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + on(e), u = -r.scrollTop;
  return De(a || n).direction === "rtl" && (l += Ve(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function sn(e) {
  var t = De(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function cr(e) {
  return ["html", "body", "#document"].indexOf(ke(e)) >= 0 ? e.ownerDocument.body : fe(e) && sn(e) ? e : cr(Ht(e));
}
function dt(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = cr(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = we(r), s = a ? [i].concat(i.visualViewport || [], sn(r) ? r : []) : r, l = t.concat(s);
  return a ? l : l.concat(dt(Ht(s)));
}
function Xt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _o(e) {
  var t = rt(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function _n(e, t) {
  return t === nr ? Xt(Oo(e)) : tt(t) ? _o(t) : Xt(Co(Ye(e)));
}
function To(e) {
  var t = dt(Ht(e)), n = ["absolute", "fixed"].indexOf(De(e).position) >= 0, r = n && fe(e) ? Ot(e) : e;
  return tt(r) ? t.filter(function(a) {
    return tt(a) && ir(a, r) && ke(a) !== "body" && (n ? De(a).position !== "static" : !0);
  }) : [];
}
function ko(e, t, n) {
  var r = t === "clippingParents" ? To(e) : [].concat(t), a = [].concat(r, [n]), i = a[0], s = a.reduce(function(l, u) {
    var d = _n(e, u);
    return l.top = Ve(d.top, l.top), l.right = It(d.right, l.right), l.bottom = It(d.bottom, l.bottom), l.left = Ve(d.left, l.left), l;
  }, _n(e, i));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function dr(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? _e(r) : null, i = r ? at(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case re:
      u = {
        x: s,
        y: t.y - n.height
      };
      break;
    case pe:
      u = {
        x: s,
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
    switch (i) {
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
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.boundary, s = i === void 0 ? Na : i, l = n.rootBoundary, u = l === void 0 ? nr : l, d = n.elementContext, c = d === void 0 ? ut : d, m = n.altBoundary, y = m === void 0 ? !1 : m, O = n.padding, C = O === void 0 ? 0 : O, g = lr(typeof C != "number" ? C : ur(C, xt)), _ = c === ut ? Va : ut, f = e.rects.popper, x = e.elements[y ? _ : c], w = ko(tt(x) ? x : x.contextElement || Ye(e.elements.popper), s, u), o = rt(e.elements.reference), b = dr({
    reference: o,
    element: f,
    strategy: "absolute",
    placement: a
  }), p = Xt(Object.assign({}, f, b)), h = c === ut ? p : o, T = {
    top: w.top - h.top + g.top,
    bottom: h.bottom - w.bottom + g.bottom,
    left: w.left - h.left + g.left,
    right: h.right - w.right + g.right
  }, M = e.modifiersData.offset;
  if (c === ut && M) {
    var R = M[a];
    Object.keys(T).forEach(function(A) {
      var D = [ge, pe].indexOf(A) >= 0 ? 1 : -1, H = [re, pe].indexOf(A) >= 0 ? "y" : "x";
      T[A] += R[H] * D;
    });
  }
  return T;
}
function Do(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, d = u === void 0 ? rr : u, c = at(r), m = c ? l ? wn : wn.filter(function(C) {
    return at(C) === c;
  }) : xt, y = m.filter(function(C) {
    return d.indexOf(C) >= 0;
  });
  y.length === 0 && (y = m);
  var O = y.reduce(function(C, g) {
    return C[g] = ht(e, {
      placement: g,
      boundary: a,
      rootBoundary: i,
      padding: s
    })[_e(g)], C;
  }, {});
  return Object.keys(O).sort(function(C, g) {
    return O[C] - O[g];
  });
}
function Eo(e) {
  if (_e(e) === tn)
    return [];
  var t = Rt(e);
  return [Cn(e), t, Cn(t)];
}
function So(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, s = n.altAxis, l = s === void 0 ? !0 : s, u = n.fallbackPlacements, d = n.padding, c = n.boundary, m = n.rootBoundary, y = n.altBoundary, O = n.flipVariations, C = O === void 0 ? !0 : O, g = n.allowedAutoPlacements, _ = t.options.placement, f = _e(_), x = f === _, w = u || (x || !C ? [Rt(_)] : Eo(_)), o = [_].concat(w).reduce(function(ve, oe) {
      return ve.concat(_e(oe) === tn ? Do(t, {
        placement: oe,
        boundary: c,
        rootBoundary: m,
        padding: d,
        flipVariations: C,
        allowedAutoPlacements: g
      }) : oe);
    }, []), b = t.rects.reference, p = t.rects.popper, h = /* @__PURE__ */ new Map(), T = !0, M = o[0], R = 0; R < o.length; R++) {
      var A = o[R], D = _e(A), H = at(A) === et, j = [re, pe].indexOf(D) >= 0, z = j ? "width" : "height", N = ht(t, {
        placement: A,
        boundary: c,
        rootBoundary: m,
        altBoundary: y,
        padding: d
      }), W = j ? H ? ge : ae : H ? pe : re;
      b[z] > p[z] && (W = Rt(W));
      var Y = Rt(W), V = [];
      if (i && V.push(N[D] <= 0), l && V.push(N[W] <= 0, N[Y] <= 0), V.every(function(ve) {
        return ve;
      })) {
        M = A, T = !1;
        break;
      }
      h.set(A, V);
    }
    if (T)
      for (var X = C ? 3 : 1, se = function(oe) {
        var he = o.find(function(Se) {
          var ie = h.get(Se);
          if (ie)
            return ie.slice(0, oe).every(function(Oe) {
              return Oe;
            });
        });
        if (he)
          return M = he, "break";
      }, le = X; le > 0; le--) {
        var Ee = se(le);
        if (Ee === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
var Ao = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: So,
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
function kn(e) {
  return [re, ge, pe, ae].some(function(t) {
    return e[t] >= 0;
  });
}
function Mo(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, s = ht(t, {
    elementContext: "reference"
  }), l = ht(t, {
    altBoundary: !0
  }), u = Tn(s, r), d = Tn(l, a, i), c = kn(u), m = kn(d);
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
var Po = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Mo
};
function $o(e, t, n) {
  var r = _e(e), a = [ae, re].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * a, [ae, ge].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Bo(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, s = rr.reduce(function(c, m) {
    return c[m] = $o(m, t.rects, i), c;
  }, {}), l = s[t.placement], u = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = s;
}
var Lo = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bo
};
function Ro(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = dr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var Io = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ro,
  data: {}
};
function jo(e) {
  return e === "x" ? "y" : "x";
}
function Ho(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, s = n.altAxis, l = s === void 0 ? !1 : s, u = n.boundary, d = n.rootBoundary, c = n.altBoundary, m = n.padding, y = n.tether, O = y === void 0 ? !0 : y, C = n.tetherOffset, g = C === void 0 ? 0 : C, _ = ht(t, {
    boundary: u,
    rootBoundary: d,
    padding: m,
    altBoundary: c
  }), f = _e(t.placement), x = at(t.placement), w = !x, o = rn(f), b = jo(o), p = t.modifiersData.popperOffsets, h = t.rects.reference, T = t.rects.popper, M = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, R = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!p) {
    if (i) {
      var H, j = o === "y" ? re : ae, z = o === "y" ? pe : ge, N = o === "y" ? "height" : "width", W = p[o], Y = W + _[j], V = W - _[z], X = O ? -T[N] / 2 : 0, se = x === et ? h[N] : T[N], le = x === et ? -T[N] : -h[N], Ee = t.elements.arrow, ve = O && Ee ? nn(Ee) : {
        width: 0,
        height: 0
      }, oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sr(), he = oe[j], Se = oe[z], ie = ct(0, h[N], ve[N]), Oe = w ? h[N] / 2 - X - ie - he - R.mainAxis : se - ie - he - R.mainAxis, ue = w ? -h[N] / 2 + X + ie + Se + R.mainAxis : le + ie + Se + R.mainAxis, me = t.elements.arrow && Ot(t.elements.arrow), $e = me ? o === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, Ae = (H = A == null ? void 0 : A[o]) != null ? H : 0, Be = W + Oe - Ae - $e, Le = W + ue - Ae, Ke = ct(O ? It(Y, Be) : Y, W, O ? Ve(V, Le) : V);
      p[o] = Ke, D[o] = Ke - W;
    }
    if (l) {
      var it, Ct = o === "x" ? re : ae, _t = o === "x" ? pe : ge, Me = p[b], Re = b === "y" ? "height" : "width", st = Me + _[Ct], Ge = Me - _[_t], lt = [re, ae].indexOf(f) !== -1, Tt = (it = A == null ? void 0 : A[b]) != null ? it : 0, kt = lt ? st : Me - h[Re] - T[Re] - Tt + R.altAxis, Dt = lt ? Me + h[Re] + T[Re] - Tt - R.altAxis : Ge, Et = O && lt ? lo(kt, Me, Dt) : ct(O ? kt : st, Me, O ? Dt : Ge);
      p[b] = Et, D[b] = Et - Me;
    }
    t.modifiersData[r] = D;
  }
}
var Yo = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ho,
  requiresIfExists: ["offset"]
};
function Go(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Uo(e) {
  return e === we(e) || !fe(e) ? an(e) : Go(e);
}
function zo(e) {
  var t = e.getBoundingClientRect(), n = nt(t.width) / e.offsetWidth || 1, r = nt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Wo(e, t, n) {
  n === void 0 && (n = !1);
  var r = fe(t), a = fe(t) && zo(t), i = Ye(t), s = rt(e, a), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ke(t) !== "body" || sn(i)) && (l = Uo(t)), fe(t) ? (u = rt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = on(i))), {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function Fo(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && a(u);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function No(e) {
  var t = Fo(e);
  return ro.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Vo(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function qo(e) {
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
var Dn = {
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
function Xo(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Dn : a;
  return function(l, u, d) {
    d === void 0 && (d = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dn, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: u
      },
      attributes: {},
      styles: {}
    }, m = [], y = !1, O = {
      state: c,
      setOptions: function(f) {
        var x = typeof f == "function" ? f(c.options) : f;
        g(), c.options = Object.assign({}, i, c.options, x), c.scrollParents = {
          reference: tt(l) ? dt(l) : l.contextElement ? dt(l.contextElement) : [],
          popper: dt(u)
        };
        var w = No(qo([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = w.filter(function(o) {
          return o.enabled;
        }), C(), O.update();
      },
      forceUpdate: function() {
        if (!y) {
          var f = c.elements, x = f.reference, w = f.popper;
          if (!!En(x, w)) {
            c.rects = {
              reference: Wo(x, Ot(w), c.options.strategy === "fixed"),
              popper: nn(w)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var o = 0; o < c.orderedModifiers.length; o++) {
              if (c.reset === !0) {
                c.reset = !1, o = -1;
                continue;
              }
              var b = c.orderedModifiers[o], p = b.fn, h = b.options, T = h === void 0 ? {} : h, M = b.name;
              typeof p == "function" && (c = p({
                state: c,
                options: T,
                name: M,
                instance: O
              }) || c);
            }
          }
        }
      },
      update: Vo(function() {
        return new Promise(function(_) {
          O.forceUpdate(), _(c);
        });
      }),
      destroy: function() {
        g(), y = !0;
      }
    };
    if (!En(l, u))
      return O;
    O.setOptions(d).then(function(_) {
      !y && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function C() {
      c.orderedModifiers.forEach(function(_) {
        var f = _.name, x = _.options, w = x === void 0 ? {} : x, o = _.effect;
        if (typeof o == "function") {
          var b = o({
            state: c,
            name: f,
            instance: O,
            options: w
          }), p = function() {
          };
          m.push(b || p);
        }
      });
    }
    function g() {
      m.forEach(function(_) {
        return _();
      }), m = [];
    }
    return O;
  };
}
var Qo = [bo, Io, mo, or, Lo, Ao, Yo, po, Po], Ko = /* @__PURE__ */ Xo({
  defaultModifiers: Qo
}), Zo = "tippy-box", fr = "tippy-content", pr = "tippy-backdrop", gr = "tippy-arrow", vr = "tippy-svg-arrow", ze = {
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
function Jo(e, t) {
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
function An(e, t) {
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
function ni(e) {
  return ln(e, "NodeList");
}
function un(e) {
  return ln(e, "MouseEvent");
}
function ri(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function ai(e) {
  return Yt(e) ? [e] : ni(e) ? ot(e) : Array.isArray(e) ? e : ot(document.querySelectorAll(e));
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
function oi(e, t) {
  var n = t.clientX, r = t.clientY;
  return e.every(function(a) {
    var i = a.popperRect, s = a.popperState, l = a.props, u = l.interactiveBorder, d = yr(s.placement), c = s.modifiersData.offset;
    if (!c)
      return !0;
    var m = d === "bottom" ? c.top.y : 0, y = d === "top" ? c.bottom.y : 0, O = d === "right" ? c.left.x : 0, C = d === "left" ? c.right.x : 0, g = i.top - r + m > u, _ = r - i.bottom - y > u, f = i.left - n + O > u, x = n - i.right - C > u;
    return g || _ || f || x;
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
function ii() {
  Ce.isTouch || (Ce.isTouch = !0, window.performance && document.addEventListener("mousemove", wr));
}
function wr() {
  var e = performance.now();
  e - $n < 20 && (Ce.isTouch = !1, document.removeEventListener("mousemove", wr)), $n = e;
}
function si() {
  var e = document.activeElement;
  if (ri(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function li() {
  document.addEventListener("touchstart", ii, ze), window.addEventListener("blur", si);
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
}, di, fi), pi = Object.keys(ye), gi = function(t) {
  var n = Object.keys(t);
  n.forEach(function(r) {
    ye[r] = t[r];
  });
};
function xr(e) {
  var t = e.plugins || [], n = t.reduce(function(r, a) {
    var i = a.name, s = a.defaultValue;
    if (i) {
      var l;
      r[i] = e[i] !== void 0 ? e[i] : (l = ye[i]) != null ? l : s;
    }
    return r;
  }, {});
  return Object.assign({}, e, n);
}
function vi(e, t) {
  var n = t ? Object.keys(xr(Object.assign({}, ye, {
    plugins: t
  }))) : pi, r = n.reduce(function(a, i) {
    var s = (e.getAttribute("data-tippy-" + i) || "").trim();
    if (!s)
      return a;
    if (i === "content")
      a[i] = s;
    else
      try {
        a[i] = JSON.parse(s);
      } catch {
        a[i] = s;
      }
    return a;
  }, {});
  return r;
}
function Bn(e, t) {
  var n = Object.assign({}, t, {
    content: mr(t.content, [e])
  }, t.ignoreAttributes ? {} : vi(e, t.plugins));
  return n.aria = Object.assign({}, ye.aria, n.aria), n.aria = {
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
  n.className = Zo, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = qe();
  r.className = fr, r.setAttribute("data-state", "hidden"), Rn(r, e.props), t.appendChild(n), n.appendChild(r), a(e.props, e.props);
  function a(i, s) {
    var l = jt(t), u = l.box, d = l.content, c = l.arrow;
    s.theme ? u.setAttribute("data-theme", s.theme) : u.removeAttribute("data-theme"), typeof s.animation == "string" ? u.setAttribute("data-animation", s.animation) : u.removeAttribute("data-animation"), s.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? u.setAttribute("role", s.role) : u.removeAttribute("role"), (i.content !== s.content || i.allowHTML !== s.allowHTML) && Rn(d, e.props), s.arrow ? c ? i.arrow !== s.arrow && (u.removeChild(c), u.appendChild(Ln(s.arrow))) : u.appendChild(Ln(s.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: a
  };
}
Or.$$tippy = !0;
var mi = 1, Pt = [], Nt = [];
function yi(e, t) {
  var n = Bn(e, Object.assign({}, ye, xr(Mn(t)))), r, a, i, s = !1, l = !1, u = !1, d = !1, c, m, y, O = [], C = Sn(Be, n.interactiveDebounce), g, _ = mi++, f = null, x = ti(n.plugins), w = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, o = {
    id: _,
    reference: e,
    popper: qe(),
    popperInstance: f,
    props: n,
    state: w,
    plugins: x,
    clearDelayTimeouts: kt,
    setProps: Dt,
    setContent: Et,
    show: Tr,
    hide: kr,
    hideWithInteractivity: Dr,
    enable: lt,
    disable: Tt,
    unmount: Er,
    destroy: Sr
  };
  if (!n.render)
    return o;
  var b = n.render(o), p = b.popper, h = b.onUpdate;
  p.setAttribute("data-tippy-root", ""), p.id = "tippy-" + o.id, o.popper = p, e._tippy = o, p._tippy = o;
  var T = x.map(function(v) {
    return v.fn(o);
  }), M = e.hasAttribute("aria-expanded");
  return me(), X(), W(), Y("onCreate", [o]), n.showOnCreate && st(), p.addEventListener("mouseenter", function() {
    o.props.interactive && o.state.isVisible && o.clearDelayTimeouts();
  }), p.addEventListener("mouseleave", function() {
    o.props.interactive && o.props.trigger.indexOf("mouseenter") >= 0 && j().addEventListener("mousemove", C);
  }), o;
  function R() {
    var v = o.props.touch;
    return Array.isArray(v) ? v : [v, 0];
  }
  function A() {
    return R()[0] === "hold";
  }
  function D() {
    var v;
    return !!((v = o.props.render) != null && v.$$tippy);
  }
  function H() {
    return g || e;
  }
  function j() {
    var v = H().parentNode;
    return v ? br(v) : document;
  }
  function z() {
    return jt(p);
  }
  function N(v) {
    return o.state.isMounted && !o.state.isVisible || Ce.isTouch || c && c.type === "focus" ? 0 : zt(o.props.delay, v ? 0 : 1, ye.delay);
  }
  function W(v) {
    v === void 0 && (v = !1), p.style.pointerEvents = o.props.interactive && !v ? "" : "none", p.style.zIndex = "" + o.props.zIndex;
  }
  function Y(v, k, P) {
    if (P === void 0 && (P = !0), T.forEach(function(I) {
      I[v] && I[v].apply(I, k);
    }), P) {
      var G;
      (G = o.props)[v].apply(G, k);
    }
  }
  function V() {
    var v = o.props.aria;
    if (!!v.content) {
      var k = "aria-" + v.content, P = p.id, G = Fe(o.props.triggerTarget || e);
      G.forEach(function(I) {
        var K = I.getAttribute(k);
        if (o.state.isVisible)
          I.setAttribute(k, K ? K + " " + P : P);
        else {
          var ce = K && K.replace(P, "").trim();
          ce ? I.setAttribute(k, ce) : I.removeAttribute(k);
        }
      });
    }
  }
  function X() {
    if (!(M || !o.props.aria.expanded)) {
      var v = Fe(o.props.triggerTarget || e);
      v.forEach(function(k) {
        o.props.interactive ? k.setAttribute("aria-expanded", o.state.isVisible && k === H() ? "true" : "false") : k.removeAttribute("aria-expanded");
      });
    }
  }
  function se() {
    j().removeEventListener("mousemove", C), Pt = Pt.filter(function(v) {
      return v !== C;
    });
  }
  function le(v) {
    if (!(Ce.isTouch && (u || v.type === "mousedown"))) {
      var k = v.composedPath && v.composedPath()[0] || v.target;
      if (!(o.props.interactive && Pn(p, k))) {
        if (Fe(o.props.triggerTarget || e).some(function(P) {
          return Pn(P, k);
        })) {
          if (Ce.isTouch || o.state.isVisible && o.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Y("onClickOutside", [o, v]);
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
    var v = j();
    v.addEventListener("mousedown", le, !0), v.addEventListener("touchend", le, ze), v.addEventListener("touchstart", ve, ze), v.addEventListener("touchmove", Ee, ze);
  }
  function he() {
    var v = j();
    v.removeEventListener("mousedown", le, !0), v.removeEventListener("touchend", le, ze), v.removeEventListener("touchstart", ve, ze), v.removeEventListener("touchmove", Ee, ze);
  }
  function Se(v, k) {
    Oe(v, function() {
      !o.state.isVisible && p.parentNode && p.parentNode.contains(p) && k();
    });
  }
  function ie(v, k) {
    Oe(v, k);
  }
  function Oe(v, k) {
    var P = z().box;
    function G(I) {
      I.target === P && (Ft(P, "remove", G), k());
    }
    if (v === 0)
      return k();
    Ft(P, "remove", m), Ft(P, "add", G), m = G;
  }
  function ue(v, k, P) {
    P === void 0 && (P = !1);
    var G = Fe(o.props.triggerTarget || e);
    G.forEach(function(I) {
      I.addEventListener(v, k, P), O.push({
        node: I,
        eventType: v,
        handler: k,
        options: P
      });
    });
  }
  function me() {
    A() && (ue("touchstart", Ae, {
      passive: !0
    }), ue("touchend", Le, {
      passive: !0
    })), ei(o.props.trigger).forEach(function(v) {
      if (v !== "manual")
        switch (ue(v, Ae), v) {
          case "mouseenter":
            ue("mouseleave", Le);
            break;
          case "focus":
            ue(ci ? "focusout" : "blur", Ke);
            break;
          case "focusin":
            ue("focusout", Ke);
            break;
        }
    });
  }
  function $e() {
    O.forEach(function(v) {
      var k = v.node, P = v.eventType, G = v.handler, I = v.options;
      k.removeEventListener(P, G, I);
    }), O = [];
  }
  function Ae(v) {
    var k, P = !1;
    if (!(!o.state.isEnabled || it(v) || l)) {
      var G = ((k = c) == null ? void 0 : k.type) === "focus";
      c = v, g = v.currentTarget, X(), !o.state.isVisible && un(v) && Pt.forEach(function(I) {
        return I(v);
      }), v.type === "click" && (o.props.trigger.indexOf("mouseenter") < 0 || s) && o.props.hideOnClick !== !1 && o.state.isVisible ? P = !0 : st(v), v.type === "click" && (s = !P), P && !G && Ge(v);
    }
  }
  function Be(v) {
    var k = v.target, P = H().contains(k) || p.contains(k);
    if (!(v.type === "mousemove" && P)) {
      var G = Re().concat(p).map(function(I) {
        var K, ce = I._tippy, Ze = (K = ce.popperInstance) == null ? void 0 : K.state;
        return Ze ? {
          popperRect: I.getBoundingClientRect(),
          popperState: Ze,
          props: n
        } : null;
      }).filter(Boolean);
      oi(G, v) && (se(), Ge(v));
    }
  }
  function Le(v) {
    var k = it(v) || o.props.trigger.indexOf("click") >= 0 && s;
    if (!k) {
      if (o.props.interactive) {
        o.hideWithInteractivity(v);
        return;
      }
      Ge(v);
    }
  }
  function Ke(v) {
    o.props.trigger.indexOf("focusin") < 0 && v.target !== H() || o.props.interactive && v.relatedTarget && p.contains(v.relatedTarget) || Ge(v);
  }
  function it(v) {
    return Ce.isTouch ? A() !== v.type.indexOf("touch") >= 0 : !1;
  }
  function Ct() {
    _t();
    var v = o.props, k = v.popperOptions, P = v.placement, G = v.offset, I = v.getReferenceClientRect, K = v.moveTransition, ce = D() ? jt(p).arrow : null, Ze = I ? {
      getBoundingClientRect: I,
      contextElement: I.contextElement || H()
    } : e, cn = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(St) {
        var Je = St.state;
        if (D()) {
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
    D() && ce && Ue.push({
      name: "arrow",
      options: {
        element: ce,
        padding: 3
      }
    }), Ue.push.apply(Ue, (k == null ? void 0 : k.modifiers) || []), o.popperInstance = Ko(Ze, p, Object.assign({}, k, {
      placement: P,
      onFirstUpdate: y,
      modifiers: Ue
    }));
  }
  function _t() {
    o.popperInstance && (o.popperInstance.destroy(), o.popperInstance = null);
  }
  function Me() {
    var v = o.props.appendTo, k, P = H();
    o.props.interactive && v === hr || v === "parent" ? k = P.parentNode : k = mr(v, [P]), k.contains(p) || k.appendChild(p), o.state.isMounted = !0, Ct();
  }
  function Re() {
    return ot(p.querySelectorAll("[data-tippy-root]"));
  }
  function st(v) {
    o.clearDelayTimeouts(), v && Y("onTrigger", [o, v]), oe();
    var k = N(!0), P = R(), G = P[0], I = P[1];
    Ce.isTouch && G === "hold" && I && (k = I), k ? r = setTimeout(function() {
      o.show();
    }, k) : o.show();
  }
  function Ge(v) {
    if (o.clearDelayTimeouts(), Y("onUntrigger", [o, v]), !o.state.isVisible) {
      he();
      return;
    }
    if (!(o.props.trigger.indexOf("mouseenter") >= 0 && o.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(v.type) >= 0 && s)) {
      var k = N(!1);
      k ? a = setTimeout(function() {
        o.state.isVisible && o.hide();
      }, k) : i = requestAnimationFrame(function() {
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
  function kt() {
    clearTimeout(r), clearTimeout(a), cancelAnimationFrame(i);
  }
  function Dt(v) {
    if (!o.state.isDestroyed) {
      Y("onBeforeUpdate", [o, v]), $e();
      var k = o.props, P = Bn(e, Object.assign({}, k, Mn(v), {
        ignoreAttributes: !0
      }));
      o.props = P, me(), k.interactiveDebounce !== P.interactiveDebounce && (se(), C = Sn(Be, P.interactiveDebounce)), k.triggerTarget && !P.triggerTarget ? Fe(k.triggerTarget).forEach(function(G) {
        G.removeAttribute("aria-expanded");
      }) : P.triggerTarget && e.removeAttribute("aria-expanded"), X(), W(), h && h(k, P), o.popperInstance && (Ct(), Re().forEach(function(G) {
        requestAnimationFrame(G._tippy.popperInstance.forceUpdate);
      })), Y("onAfterUpdate", [o, v]);
    }
  }
  function Et(v) {
    o.setProps({
      content: v
    });
  }
  function Tr() {
    var v = o.state.isVisible, k = o.state.isDestroyed, P = !o.state.isEnabled, G = Ce.isTouch && !o.props.touch, I = zt(o.props.duration, 0, ye.duration);
    if (!(v || k || P || G) && !H().hasAttribute("disabled") && (Y("onShow", [o], !1), o.props.onShow(o) !== !1)) {
      if (o.state.isVisible = !0, D() && (p.style.visibility = "visible"), W(), oe(), o.state.isMounted || (p.style.transition = "none"), D()) {
        var K = z(), ce = K.box, Ze = K.content;
        Wt([ce, Ze], 0);
      }
      y = function() {
        var Ue;
        if (!(!o.state.isVisible || d)) {
          if (d = !0, p.offsetHeight, p.style.transition = o.props.moveTransition, D() && o.props.animation) {
            var Gt = z(), St = Gt.box, Je = Gt.content;
            Wt([St, Je], I), mt([St, Je], "visible");
          }
          V(), X(), An(Nt, o), (Ue = o.popperInstance) == null || Ue.forceUpdate(), Y("onMount", [o]), o.props.animation && D() && ie(I, function() {
            o.state.isShown = !0, Y("onShown", [o]);
          });
        }
      }, Me();
    }
  }
  function kr() {
    var v = !o.state.isVisible, k = o.state.isDestroyed, P = !o.state.isEnabled, G = zt(o.props.duration, 1, ye.duration);
    if (!(v || k || P) && (Y("onHide", [o], !1), o.props.onHide(o) !== !1)) {
      if (o.state.isVisible = !1, o.state.isShown = !1, d = !1, s = !1, D() && (p.style.visibility = "hidden"), se(), he(), W(!0), D()) {
        var I = z(), K = I.box, ce = I.content;
        o.props.animation && (Wt([K, ce], G), mt([K, ce], "hidden"));
      }
      V(), X(), o.props.animation ? D() && Se(G, o.unmount) : o.unmount();
    }
  }
  function Dr(v) {
    j().addEventListener("mousemove", C), An(Pt, C), C(v);
  }
  function Er() {
    o.state.isVisible && o.hide(), o.state.isMounted && (_t(), Re().forEach(function(v) {
      v._tippy.unmount();
    }), p.parentNode && p.parentNode.removeChild(p), Nt = Nt.filter(function(v) {
      return v !== o;
    }), o.state.isMounted = !1, Y("onHidden", [o]));
  }
  function Sr() {
    o.state.isDestroyed || (o.clearDelayTimeouts(), o.unmount(), $e(), delete e._tippy, o.state.isDestroyed = !0, Y("onDestroy", [o]));
  }
}
function E(e, t) {
  t === void 0 && (t = {});
  var n = ye.plugins.concat(t.plugins || []);
  li();
  var r = Object.assign({}, t, {
    plugins: n
  }), a = ai(e), i = a.reduce(function(s, l) {
    var u = l && yi(l, r);
    return u && s.push(u), s;
  }, []);
  return Yt(e) ? i[0] : i;
}
E.defaultProps = ye;
E.setDefaultProps = gi;
E.currentInput = Ce;
var bi = Object.assign({}, or, {
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
  var a = t, i = [], s = [], l, u = n.overrides, d = [], c = !1;
  function m() {
    s = a.map(function(o) {
      return Fe(o.props.triggerTarget || o.reference);
    }).reduce(function(o, b) {
      return o.concat(b);
    }, []);
  }
  function y() {
    i = a.map(function(o) {
      return o.reference;
    });
  }
  function O(o) {
    a.forEach(function(b) {
      o ? b.enable() : b.disable();
    });
  }
  function C(o) {
    return a.map(function(b) {
      var p = b.setProps;
      return b.setProps = function(h) {
        p(h), b.reference === l && o.setProps(h);
      }, function() {
        b.setProps = p;
      };
    });
  }
  function g(o, b) {
    var p = s.indexOf(b);
    if (b !== l) {
      l = b;
      var h = (u || []).concat("content").reduce(function(T, M) {
        return T[M] = a[p].props[M], T;
      }, {});
      o.setProps(Object.assign({}, h, {
        getReferenceClientRect: typeof h.getReferenceClientRect == "function" ? h.getReferenceClientRect : function() {
          var T;
          return (T = i[p]) == null ? void 0 : T.getBoundingClientRect();
        }
      }));
    }
  }
  O(!1), y(), m();
  var _ = {
    fn: function() {
      return {
        onDestroy: function() {
          O(!0);
        },
        onHidden: function() {
          l = null;
        },
        onClickOutside: function(p) {
          p.props.showOnCreate && !c && (c = !0, l = null);
        },
        onShow: function(p) {
          p.props.showOnCreate && !c && (c = !0, g(p, i[0]));
        },
        onTrigger: function(p, h) {
          g(p, h.currentTarget);
        }
      };
    }
  }, f = E(qe(), Object.assign({}, Jo(n, ["overrides"]), {
    plugins: [_].concat(n.plugins || []),
    triggerTarget: s,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((r = n.popperOptions) == null ? void 0 : r.modifiers) || [], [bi])
    })
  })), x = f.show;
  f.show = function(o) {
    if (x(), !l && o == null)
      return g(f, i[0]);
    if (!(l && o == null)) {
      if (typeof o == "number")
        return i[o] && g(f, i[o]);
      if (a.indexOf(o) >= 0) {
        var b = o.reference;
        return g(f, b);
      }
      if (i.indexOf(o) >= 0)
        return g(f, o);
    }
  }, f.showNext = function() {
    var o = i[0];
    if (!l)
      return f.show(0);
    var b = i.indexOf(l);
    f.show(i[b + 1] || o);
  }, f.showPrevious = function() {
    var o = i[i.length - 1];
    if (!l)
      return f.show(o);
    var b = i.indexOf(l), p = i[b - 1] || o;
    f.show(p);
  };
  var w = f.setProps;
  return f.setProps = function(o) {
    u = o.overrides || u, w(o);
  }, f.setInstances = function(o) {
    O(!0), d.forEach(function(b) {
      return b();
    }), a = o, O(!1), y(), m(), d = C(f), f.setProps({
      triggerTarget: s
    });
  }, d = C(f), f;
}, xi = {
  name: "animateFill",
  defaultValue: !1,
  fn: function(t) {
    var n;
    if (!((n = t.props.render) != null && n.$$tippy))
      return {};
    var r = jt(t.popper), a = r.box, i = r.content, s = t.props.animateFill ? Oi() : null;
    return {
      onCreate: function() {
        s && (a.insertBefore(s, a.firstElementChild), a.setAttribute("data-animatefill", ""), a.style.overflow = "hidden", t.setProps({
          arrow: !1,
          animation: "shift-away"
        }));
      },
      onMount: function() {
        if (s) {
          var u = a.style.transitionDuration, d = Number(u.replace("ms", ""));
          i.style.transitionDelay = Math.round(d / 10) + "ms", s.style.transitionDuration = u, mt([s], "visible");
        }
      },
      onShow: function() {
        s && (s.style.transitionDuration = "0ms");
      },
      onHide: function() {
        s && mt([s], "hidden");
      }
    };
  }
};
function Oi() {
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
    var n = t.reference, r = br(t.props.triggerTarget || n), a = !1, i = !1, s = !0, l = t.props;
    function u() {
      return t.props.followCursor === "initial" && t.state.isVisible;
    }
    function d() {
      r.addEventListener("mousemove", y);
    }
    function c() {
      r.removeEventListener("mousemove", y);
    }
    function m() {
      a = !0, t.setProps({
        getReferenceClientRect: null
      }), a = !1;
    }
    function y(g) {
      var _ = g.target ? n.contains(g.target) : !0, f = t.props.followCursor, x = g.clientX, w = g.clientY, o = n.getBoundingClientRect(), b = x - o.left, p = w - o.top;
      (_ || !t.props.interactive) && t.setProps({
        getReferenceClientRect: function() {
          var T = n.getBoundingClientRect(), M = x, R = w;
          f === "initial" && (M = T.left + b, R = T.top + p);
          var A = f === "horizontal" ? T.top : R, D = f === "vertical" ? T.right : M, H = f === "horizontal" ? T.bottom : R, j = f === "vertical" ? T.left : M;
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
    function O() {
      t.props.followCursor && ($t.push({
        instance: t,
        doc: r
      }), Ci(r));
    }
    function C() {
      $t = $t.filter(function(g) {
        return g.instance !== t;
      }), $t.filter(function(g) {
        return g.doc === r;
      }).length === 0 && _i(r);
    }
    return {
      onCreate: O,
      onDestroy: C,
      onBeforeUpdate: function() {
        l = t.props;
      },
      onAfterUpdate: function(_, f) {
        var x = f.followCursor;
        a || x !== void 0 && l.followCursor !== x && (C(), x ? (O(), t.state.isMounted && !i && !u() && d()) : (c(), m()));
      },
      onMount: function() {
        t.props.followCursor && !i && (s && (y(Kt), s = !1), u() || d());
      },
      onTrigger: function(_, f) {
        un(f) && (Kt = {
          clientX: f.clientX,
          clientY: f.clientY
        }), i = f.type === "focus";
      },
      onHidden: function() {
        t.props.followCursor && (m(), c(), s = !0);
      }
    };
  }
};
function ki(e, t) {
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
var Di = {
  name: "inlinePositioning",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference;
    function r() {
      return !!t.props.inlinePositioning;
    }
    var a, i = -1, s = !1, l = [], u = {
      name: "tippyInlinePositioning",
      enabled: !0,
      phase: "afterWrite",
      fn: function(O) {
        var C = O.state;
        r() && (l.indexOf(C.placement) !== -1 && (l = []), a !== C.placement && l.indexOf(C.placement) === -1 && (l.push(C.placement), t.setProps({
          getReferenceClientRect: function() {
            return d(C.placement);
          }
        })), a = C.placement);
      }
    };
    function d(y) {
      return Ei(yr(y), n.getBoundingClientRect(), ot(n.getClientRects()), i);
    }
    function c(y) {
      s = !0, t.setProps(y), s = !1;
    }
    function m() {
      s || c(ki(t.props, u));
    }
    return {
      onCreate: m,
      onAfterUpdate: m,
      onTrigger: function(O, C) {
        if (un(C)) {
          var g = ot(t.reference.getClientRects()), _ = g.find(function(x) {
            return x.left - 2 <= C.clientX && x.right + 2 >= C.clientX && x.top - 2 <= C.clientY && x.bottom + 2 >= C.clientY;
          }), f = g.indexOf(_);
          i = f > -1 ? f : i;
        }
      },
      onHidden: function() {
        i = -1;
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
      var a = n[0], i = n[n.length - 1], s = e === "top", l = a.top, u = i.bottom, d = s ? a.left : i.left, c = s ? a.right : i.right, m = c - d, y = u - l;
      return {
        top: l,
        bottom: u,
        left: d,
        right: c,
        width: m,
        height: y
      };
    }
    case "left":
    case "right": {
      var O = Math.min.apply(Math, n.map(function(p) {
        return p.left;
      })), C = Math.max.apply(Math, n.map(function(p) {
        return p.right;
      })), g = n.filter(function(p) {
        return e === "left" ? p.left === O : p.right === C;
      }), _ = g[0].top, f = g[g.length - 1].bottom, x = O, w = C, o = w - x, b = f - _;
      return {
        top: _,
        bottom: f,
        left: x,
        right: w,
        width: o,
        height: b
      };
    }
    default:
      return t;
  }
}
var Si = {
  name: "sticky",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, r = t.popper;
    function a() {
      return t.popperInstance ? t.popperInstance.state.elements.reference : n;
    }
    function i(d) {
      return t.props.sticky === !0 || t.props.sticky === d;
    }
    var s = null, l = null;
    function u() {
      var d = i("reference") ? a().getBoundingClientRect() : null, c = i("popper") ? r.getBoundingClientRect() : null;
      (d && In(s, d) || c && In(l, c)) && t.popperInstance && t.popperInstance.update(), s = d, l = c, t.state.isMounted && requestAnimationFrame(u);
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
  const r = jn(), a = U(), i = U({
    isEnabled: !1,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }), s = Lr();
  let l = null;
  const u = () => l || (l = document.createDocumentFragment(), l), d = (h) => {
    let T, M = Ie(h) ? h.value : h;
    return jr(M) ? (s.value || (s.value = fn({
      name: n.appName,
      setup: () => () => Ie(h) ? h.value : h
    }), r && Object.assign(s.value._context, r.appContext), s.value.mount(u())), T = () => u()) : typeof M == "object" ? (s.value || (s.value = fn({
      name: n.appName,
      setup: () => () => Ne(Ie(h) ? h.value : h)
    }), r && Object.assign(s.value._context, r.appContext), s.value.mount(u())), T = () => u()) : T = M, T;
  }, c = (h) => {
    let T = {};
    return Ie(h) ? T = h.value || {} : dn(h) ? T = { ...h } : T = { ...h }, T.content && (T.content = d(T.content)), T.triggerTarget && (T.triggerTarget = Ie(T.triggerTarget) ? T.triggerTarget.value : T.triggerTarget), (!T.plugins || !Array.isArray(T.plugins)) && (T.plugins = []), T.plugins = T.plugins.filter((M) => M.name !== "vueTippyReactiveState"), T.plugins.push({
      name: "vueTippyReactiveState",
      fn: () => ({
        onCreate() {
          i.value.isEnabled = !0;
        },
        onMount() {
          i.value.isMounted = !0;
        },
        onShow() {
          i.value.isMounted = !0, i.value.isVisible = !0;
        },
        onShown() {
          i.value.isShown = !0;
        },
        onHide() {
          i.value.isMounted = !1, i.value.isVisible = !1;
        },
        onHidden() {
          i.value.isShown = !1;
        },
        onUnmounted() {
          i.value.isMounted = !1;
        },
        onDestroy() {
          i.value.isDestroyed = !0;
        }
      })
    }), T;
  }, m = () => {
    !a.value || a.value.setProps(c(t));
  }, y = () => {
    !a.value || !t.content || a.value.setContent(d(t.content));
  }, O = (h) => {
    var T;
    (T = a.value) === null || T === void 0 || T.setContent(d(h));
  }, C = (h) => {
    var T;
    (T = a.value) === null || T === void 0 || T.setProps(c(h));
  }, g = () => {
    var h;
    a.value && (a.value.destroy(), a.value = void 0), l = null, (h = s.value) === null || h === void 0 || h.unmount(), s.value = void 0;
  }, _ = () => {
    var h;
    (h = a.value) === null || h === void 0 || h.show();
  }, f = () => {
    var h;
    (h = a.value) === null || h === void 0 || h.hide();
  }, x = () => {
    var h;
    (h = a.value) === null || h === void 0 || h.disable(), i.value.isEnabled = !1;
  }, w = () => {
    var h;
    (h = a.value) === null || h === void 0 || h.enable(), i.value.isEnabled = !0;
  }, o = () => {
    var h;
    (h = a.value) === null || h === void 0 || h.unmount();
  }, b = () => {
    if (!e)
      return;
    let h = Ie(e) ? e.value : e;
    typeof h == "function" && (h = h()), h && (a.value = E(h, c(t)), h.$tippy = p);
  }, p = {
    tippy: a,
    refresh: m,
    refreshContent: y,
    setContent: O,
    setProps: C,
    destroy: g,
    hide: f,
    show: _,
    disable: x,
    enable: w,
    unmount: o,
    mount: b,
    state: i
  };
  return n.mount && (r ? r.isMounted ? b() : Te(b) : b()), r && Rr(() => {
    g();
  }), Ie(t) || dn(t) ? Xe(t, m, { immediate: !1 }) : Ie(t.content) && Xe(t.content, y, { immediate: !1 }), p;
}
function Ai(e, t) {
  const n = U();
  return Te(() => {
    const a = (Array.isArray(e) ? e.map((i) => i.value) : typeof e == "function" ? e() : e.value).map((i) => i instanceof Element ? i._tippy : i).filter(Boolean);
    n.value = wi(a, t ? { allowHTML: !0, ...t } : { allowHTML: !0 });
  }), {
    singleton: n
  };
}
function Mi(e) {
  return typeof e == "function" ? e() : B(e);
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
    const a = U(), i = U(), s = U(), l = U(!1), u = () => {
      let O = { ...e };
      for (const C of ["to", "tag", "contentTag", "contentClass"])
        O.hasOwnProperty(C) && delete O[C];
      return O;
    };
    let d = () => Pi(a);
    e.to && (typeof Element < "u" && e.to instanceof Element ? d = () => e.to : e.to === "parent" ? d = () => {
      let O = a.value;
      return O || (O = a.value = i.value.parentElement), O;
    } : (typeof e.to == "string" || e.to instanceof String) && (d = () => document.querySelector(e.to)));
    const c = _r(d, u());
    let m = t.content;
    !m && e.to === "parent" && (m = t.default), Te(() => {
      l.value = !0, yt(() => {
        m && c.setContent(() => s.value);
      });
    }), Xe(c.state, () => {
      n("state", B(c.state));
    }, { immediate: !0, deep: !0 }), Xe(() => e, () => {
      c.setProps(u()), m && c.setContent(() => s.value);
    }, { deep: !0 });
    let y = Ir({
      elem: a,
      contentElem: s,
      mounted: l,
      ...c
    });
    return r(y), () => {
      const O = (typeof e.contentTag == "string", e.contentTag), C = m ? Ne(O, {
        ref: s,
        style: { display: l.value ? "inherit" : "none" },
        class: e.contentClass
      }, m(y)) : null;
      if (e.to === "parent") {
        const f = [];
        if (!a.value) {
          const x = Ne("span", {
            ref: i,
            "data-v-tippy": "",
            style: { display: "none" }
          });
          f.push(x);
        }
        return C && f.push(C), f;
      }
      const g = t.default ? t.default(y) : [];
      if (!e.tag) {
        const f = Ne(g[0], {
          ref: a,
          "data-v-tippy": ""
        });
        return C ? [f, C] : f;
      }
      const _ = (typeof e.tag == "string", e.tag);
      return Ne(_, { ref: a, "data-v-tippy": "" }, C ? [g, C] : g);
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
Object.keys(E.defaultProps).forEach((e) => {
  $i.includes(e) ? Zt[e] = {
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
    const t = U([]), { singleton: n } = Ai(t, e);
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
const Bi = E.setDefaultProps;
Bi({
  ignoreAttributes: !0,
  plugins: [Si, Di, Ti, xi]
});
function Li() {
  const e = Pe(Zn);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
const Ri = { class: "g-gantt-tooltip-container" }, Ii = { class: "g-gantt-tooltip-area-container" }, ji = { class: "g-gantt-tooltip-area" }, Hi = { class: "g-gantt-tooltip-category-container" }, Yi = { class: "g-gantt-tooltip-category" }, Gi = { class: "g-gantt-tooltip-promotion-title" }, Ui = { class: "g-gantt-tooltip-promotion-time-container" }, zi = { class: "g-gantt-tooltip-time" }, Wi = "cadetblue", Fi = /* @__PURE__ */ ee({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    config: {},
    toDayjs: {}
  },
  setup(e) {
    Hn((m) => ({
      f7565ec2: i.value
    }));
    const t = Pe("iconComponent"), n = e, { bar: r } = gt(n), a = q(() => {
      var y, O, C;
      const m = (C = (O = (y = r.value) == null ? void 0 : y.ganttBarConfig) == null ? void 0 : O.tooltipInfo) == null ? void 0 : C.publishedAt;
      return m ? !Q(new Date(m * 1e3)).isAfter(new Date()) : !1;
    }), i = U(a.value ? "pointer" : "default"), s = q(
      () => {
        var m, y;
        return ((y = (m = r == null ? void 0 : r.value) == null ? void 0 : m.ganttBarConfig.style) == null ? void 0 : y.backgroundColor) || Wi;
      }
    ), l = () => {
      var y, O;
      const m = (O = (y = r.value) == null ? void 0 : y.ganttBarConfig.tooltipInfo) == null ? void 0 : O.promotionUrl;
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
      const m = n.toDayjs(u.value).format("DD.MM."), y = n.toDayjs(d.value).format("DD.MM.YYYY");
      return `${m} \u2013 ${y}`;
    });
    return (m, y) => {
      var O, C, g, _, f, x, w, o, b, p, h, T;
      return S(), L("div", {
        class: "g-gantt-tooltip",
        style: F({
          fontFamily: m.config.font.value
        }),
        onClick: l
      }, [
        $("div", Ri, [
          $("div", Ii, [
            $("span", ji, te((g = (C = (O = B(r)) == null ? void 0 : O.ganttBarConfig) == null ? void 0 : C.tooltipInfo) == null ? void 0 : g.areaName), 1),
            B(r) ? (S(), J(je(B(t)), {
              key: 0,
              name: (x = (f = (_ = B(r)) == null ? void 0 : _.ganttBarConfig) == null ? void 0 : f.tooltipInfo) == null ? void 0 : x.icon,
              size: "24"
            }, null, 8, ["name"])) : de("", !0)
          ]),
          $("div", Hi, [
            $("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",
              style: F({ background: s.value })
            }, null, 4),
            $("span", Yi, te((b = (o = (w = B(r)) == null ? void 0 : w.ganttBarConfig) == null ? void 0 : o.tooltipInfo) == null ? void 0 : b.categoryName), 1),
            $("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",
              style: F({ background: s.value })
            }, null, 4)
          ]),
          $("p", Gi, te((T = (h = (p = B(r)) == null ? void 0 : p.ganttBarConfig) == null ? void 0 : h.tooltipInfo) == null ? void 0 : T.title), 1),
          $("div", Ui, [
            $("p", zi, [
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
const Ni = /* @__PURE__ */ wt(Fi, [["__scopeId", "data-v-3a31d377"]]), Vi = ["id"], qi = { class: "g-gantt-bar-label" }, Xi = ["innerHTML"], Qi = `
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`, Ki = /* @__PURE__ */ ee({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    var R;
    Hn((A) => ({
      "267f9539": B(a)
    }));
    const t = e, n = Li(), { bar: r } = gt(t), a = (R = t.bar.ganttBarConfig.style) == null ? void 0 : R.backgroundColor, { mapTimeToPosition: i, mapPositionToTime: s } = en(), { font: l, barEnd: u, barStart: d, rowHeight: c, width: m, chartStart: y, chartEnd: O, chartSize: C } = He(), g = U(), { toDayjs: _ } = Jt(), f = U(!1), x = Pe("iconComponent"), w = q(() => r.value.ganttBarConfig), o = Pe(Jn), b = (A) => {
      var N, W;
      const D = document.querySelector(".tippy-svg-arrow");
      if (!D)
        return;
      const j = ((N = D.style.transform) != null ? N : "").match(/translate3d\((-?\d+)/), z = (W = document.querySelector(".tippy-content")) == null ? void 0 : W.clientHeight;
      if (A === "bottom" && j) {
        const Y = D.firstElementChild;
        Y.style.transform = "rotateX(180deg)";
        const V = parseInt(j[1]);
        D.style.transform = `translate3d(${V}px, -${z + 6}px, 0px)`;
      }
      if (A === "top" && j) {
        const Y = parseInt(j[1]);
        D.style.transform = `translate3d(${Y}px, -1px, 0px)`;
      }
    };
    Te(() => {
      !(g != null && g.value) || _r(g.value, {
        content: Ne(Ni, { bar: r.value, config: { barStart: d, barEnd: u, font: l }, toDayjs: _ }),
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
                b((A == null ? void 0 : A.state.placement) || "top");
              }
            }
          ]
        },
        delay: [0, 0],
        duration: [300, 0]
      });
    });
    const p = (A) => {
      var j, z;
      if (A.preventDefault(), A.type === "mousedown" || !(o != null && o.value))
        return;
      const D = (z = (j = o == null ? void 0 : o.value) == null ? void 0 : j[0]) == null ? void 0 : z.getBoundingClientRect();
      if (!D)
        return;
      const H = s(A.clientX - D.left);
      n(A, r.value, H);
    }, h = U(0), T = U(0), M = q(() => {
      const A = new Date(r.value.myBeginDate).getTime(), D = new Date(r.value.myEndDate).getTime();
      if (Math.abs(A - D) / (1e3 * 60 * 60 * 24) <= 2)
        return 0;
      const z = 6;
      return T.value - h.value - z + z;
    });
    return Te(() => {
      Xe(
        [r, m, y, O, C.width],
        () => {
          h.value = i(r.value[d.value]), T.value = i(r.value[u.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (A, D) => (S(), L("div", {
      id: w.value.id,
      ref_key: "ganttBarRef",
      ref: g,
      class: Lt(["g-gantt-bar", w.value.asArrow ? "g-gantt-bar-is-arrow" : "", w.value.class || ""]),
      style: F({
        ...w.value.style,
        position: "absolute",
        top: `${B(c) * 0.1}px`,
        left: `${h.value}px`,
        width: `${M.value}px`,
        height: `${B(c) * 0.8}px`,
        zIndex: f.value ? 3 : 2
      }),
      onClick: p,
      onContextmenu: p,
      onDblclick: p,
      onMousedown: p,
      onMouseenter: p,
      onMouseleave: p
    }, [
      $("div", qi, [
        Z(A.$slots, "default", { bar: B(r) }, () => [
          $("div", null, te(w.value.label || ""), 1),
          w.value.html ? (S(), L("div", {
            key: 0,
            innerHTML: w.value.html
          }, null, 8, Xi)) : de("", !0)
        ])
      ]),
      (S(), J(je(B(x)), {
        "size-s": "16",
        "size-m": "16",
        class: "g-gantt-bar-arrow",
        "size-l": "16",
        name: "gant-arrow",
        size: "16"
      })),
      w.value.hasHandles ? (S(), L(ne, { key: 0 }, [
        D[0] || (D[0] = $("div", { class: "g-gantt-bar-handle-left" }, null, -1)),
        D[1] || (D[1] = $("div", { class: "g-gantt-bar-handle-right" }, null, -1))
      ], 64)) : de("", !0)
    ], 46, Vi));
  }
});
const Zi = /* @__PURE__ */ ee({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    overlaps: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: t }) {
    const n = e, r = U([]), a = t, { rowHeight: i, colors: s, labelColumnTitle: l } = He(), { highlightOnHover: u } = gt(n), d = U(!1), c = q(() => ({
      height: `${i.value}px`,
      background: (u == null ? void 0 : u.value) && d.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: m } = en(), y = Hr("barContainer");
    Bt(Jn, y);
    const O = (w) => {
      var h, T;
      const o = (T = (h = y.value) == null ? void 0 : h[0]) == null ? void 0 : T.getBoundingClientRect();
      if (!o) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const b = w.clientX - o.left, p = m(b);
      a("drop", { e: w, datetime: p });
    };
    function C(w, o, b, p) {
      return Math.max(b.valueOf() - o.valueOf(), w.valueOf() - p.valueOf()) / 864e5 < 3;
    }
    function g(w, o, b, p) {
      return w <= p && b <= o || C(w, o, b, p);
    }
    function _(w) {
      const o = [];
      for (let b = 0; b < w.length; b++)
        for (let p = b + 1; p < w.length; p++)
          g(
            w[b].myBeginDate,
            w[b].myEndDate,
            w[p].myBeginDate,
            w[p].myEndDate
          ) && o.push(Q(w[b].myEndDate).isAfter(w[p].myEndDate) ? w[b] : w[p]);
      return o;
    }
    const f = () => {
      const w = [], o = (b) => {
        if (!b || b.length === 0)
          return;
        const p = _(b);
        if (p.length > 0) {
          const h = b.filter((M) => !p.includes(M)), T = b.filter((M) => p.includes(M));
          w.push(h), o(T);
        } else
          w.push(b);
      };
      return o(n.bars), w;
    };
    Te(() => {
      r.value = f();
    });
    const x = (w) => !w || /^\s*$/.test(w);
    return (w, o) => (S(), L("div", null, [
      (S(!0), L(ne, null, be(r.value, (b) => (S(), L("div", {
        key: b[0].ganttBarConfig.id,
        style: F(c.value),
        class: "g-gantt-row",
        onDragleave: o[0] || (o[0] = (p) => d.value = !1),
        onDrop: o[1] || (o[1] = (p) => O(p)),
        onMouseleave: o[2] || (o[2] = (p) => d.value = !1),
        onMouseover: o[3] || (o[3] = (p) => d.value = !0),
        onDragover: o[4] || (o[4] = Yr((p) => d.value = !0, ["prevent"]))
      }, [
        !x(w.label) && !B(l) ? (S(), L("div", {
          key: 0,
          style: F({ background: B(s).primary, color: B(s).text }),
          class: "g-gantt-row-label"
        }, [
          Z(w.$slots, "label", {}, () => [
            pt(te(w.label), 1)
          ])
        ], 4)) : de("", !0),
        $("div", Gr({
          ref_for: !0,
          ref: "barContainer",
          class: "g-gantt-row-bars-container"
        }, w.$attrs), [
          ft(Ur, {
            name: "bar-transition sys",
            tag: "div",
            class: "transition-group"
          }, {
            default: We(() => [
              (S(!0), L(ne, null, be(b, (p) => (S(), J(Ki, {
                key: p.ganttBarConfig.id,
                bar: p
              }, {
                default: We(() => [
                  Z(w.$slots, "bar-label", { bar: p })
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
function Ji() {
  Q.extend(Wr), Q.extend(Fr), Q.extend(Wn), Q.extend(qr), Q.extend(Nr), Q.extend(zr), Q.extend(Vr);
}
const ns = {
  install(e, t) {
    Ji(), e.component("GGanttChart", Fa), e.component("GGanttRow", Zi);
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
.g-gantt-grid-current-date[data-v-dd346c68] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: center;
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
xe(`
.g-gantt-legend-collapse-container[data-v-8009c547] {
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-end;

  height: 62px;
  margin-bottom: 14px;
}
.g-gantt-legend-collapse[data-v-8009c547] {
  display: flex;
  align-items: center;
  align-self: baseline;
  justify-content: flex-end;

  width: 48px;
  height: 48px;
}
.g-gantt-legend-collapse[data-v-8009c547]:hover {
  cursor: pointer;
}
.g-gantt-legend-area-icon[data-v-8009c547] {
  margin: 0 8px 0 24px;
}
.g-gantt-legend-area-icon[data-v-8009c547] > * {
  fill: #4c5356;
}
.g-gantt-legend-promotion[data-v-8009c547] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-gantt-legend-areas-list[data-v-8009c547] {
  display: flex;
  flex-direction: column;
}
.g-gantt-legend-area-list[data-v-8009c547] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-do-collapse[data-v-8009c547] {
  color: #008075;
}
.g-gantt-legend-category-color[data-v-8009c547] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend[data-v-8009c547] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: 68px;

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
  z-index: 1;
}
@media (max-width: 1400px) {
.g-gantt-legend[data-v-8009c547] {
    min-width: 60px;
}
.g-gantt-legend-category-color[data-v-8009c547] {
    max-width: 52px;
}
.g-gantt-legend-collapse[data-v-8009c547] {
    width: 56px;
    height: 48px;
}
}
@media (max-width: 700px) {
.g-gantt-legend[data-v-8009c547] {
    min-width: 56px;
}
.g-gantt-legend-category-color[data-v-8009c547] {
    max-width: 44px;
}
.g-gantt-legend-area-icon[data-v-8009c547] {
    margin-left: 16px;
}
}
`, "top");
xe(`
.g-gantt-legend-collapse-container[data-v-31a73749] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
}
.g-gantt-legend-collapse[data-v-31a73749] {
  display: flex;
  align-items: center;
  align-self: baseline;
  justify-content: flex-end;

  width: 48px;
  height: 48px;
}
.g-gantt-legend-collapse[data-v-31a73749]:hover {
  cursor: pointer;
}
.g-gantt-legend-title[data-v-31a73749] {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}
.g-gantt-legend-area[data-v-31a73749] {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;
}
.g-gantt-legend-area-icon > path[data-v-31a73749] {
  fill: #4c5356;
}
.g-gantt-legend-category-color[data-v-31a73749] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend-promotion[data-v-31a73749] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-gantt-legend-do-uncollapse[data-v-31a73749] {
  color: #008075;
}
.g-gantt-legend-area-list[data-v-31a73749] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-category-name[data-v-31a73749] {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}
.g-gantt-legend[data-v-31a73749] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: -moz-fit-content;
  min-width: fit-content;
  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);

  z-index: 1;
}
.g-gantt-legend-area-icon[data-v-31a73749] * {
  fill: #4c5356;
}
@media (max-width: 1400px) {
.g-gantt-legend-category-color[data-v-31a73749] {
    max-width: 52px;
}
.g-gantt-legend-category-name[data-v-31a73749] {
    font-weight: 400;
    font-size: 12px;
    line-height: 15.6px;
    letter-spacing: 0;
}
.g-gantt-legend-area[data-v-31a73749] {
    font-weight: 700;
    font-size: 14px;
    line-height: 21.7px;
    letter-spacing: 0;
}
}
@media (max-width: 700px) {
.g-gantt-legend-category-color[data-v-31a73749] {
    max-width: 44px;
}
.g-gantt-legend-title[data-v-31a73749] {
    padding: 0 16px;
}
}
`, "top");
export {
  Fa as GGanttChart,
  Zi as GGanttRow,
  ns as default,
  Ji as extendDayjs,
  ns as ganttastic
};
