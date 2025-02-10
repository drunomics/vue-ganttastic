import Q from "dayjs";
import { unref as $, getCurrentScope as Mr, onScopeDispose as Pr, getCurrentInstance as jn, onMounted as Te, nextTick as yt, ref as U, watch as Xe, inject as Pe, computed as q, defineComponent as ee, openBlock as S, createElementBlock as L, Fragment as ne, createElementVNode as B, normalizeStyle as F, createBlock as J, resolveDynamicComponent as je, toDisplayString as te, renderList as be, createVNode as ft, renderSlot as Z, createCommentVNode as de, createTextVNode as pt, onBeforeMount as $r, toRefs as vt, useSlots as Br, provide as Bt, normalizeClass as Lt, withCtx as ze, shallowRef as Lr, onUnmounted as Rr, isRef as Ie, isReactive as dn, reactive as Ir, h as Ne, isVNode as jr, createApp as fn, useCssVars as Hn, useTemplateRef as Hr, withModifiers as Yr, mergeProps as Gr, TransitionGroup as Ur } from "vue";
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "day";
    return function(r, o, i) {
      var s = function(d) {
        return d.add(4 - d.isoWeekday(), n);
      }, l = o.prototype;
      l.isoWeekYear = function() {
        return s(this).year();
      }, l.isoWeek = function(d) {
        if (!this.$utils().u(d))
          return this.add(7 * (d - this.isoWeek()), n);
        var c, m, y, O, C = s(this), v = (c = this.isoWeekYear(), m = this.$u, y = (m ? i.utc : i)().year(c).startOf("year"), O = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (O += 7), y.add(O, n));
        return C.diff(v, "week") + 1;
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
const Wr = Yn.exports;
var Gn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r) {
      r.prototype.isSameOrBefore = function(o, i) {
        return this.isSame(o, i) || this.isBefore(o, i);
      };
    };
  });
})(Gn);
const zr = Gn.exports;
var Un = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r) {
      r.prototype.isSameOrAfter = function(o, i) {
        return this.isSame(o, i) || this.isAfter(o, i);
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
      r.prototype.isBetween = function(i, s, l, u) {
        var d = o(i), c = o(s), m = (u = u || "()")[0] === "(", y = u[1] === ")";
        return (m ? this.isAfter(d, l) : !this.isBefore(d, l)) && (y ? this.isBefore(c, l) : !this.isAfter(c, l)) || (m ? this.isBefore(d, l) : !this.isAfter(d, l)) && (y ? this.isAfter(c, l) : !this.isBefore(c, l));
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
    return function(o, i, s) {
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
    return function(n, r, o) {
      var i = r.prototype, s = i.format;
      o.en.ordinal = function(l) {
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
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d\d/, i = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(_) {
        this[v] = +_;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var f = _.match(/([+-]|\d\d)/g), x = 60 * f[1] + (+f[2] || 0);
        return x === 0 ? 0 : f[0] === "+" ? -x : x;
      }(v);
    }], m = function(v) {
      var _ = l[v];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, y = function(v, _) {
      var f, x = l.meridiem;
      if (x) {
        for (var w = 1; w <= 24; w += 1)
          if (v.indexOf(x(w, 0, _)) > -1) {
            f = w > 12;
            break;
          }
      } else
        f = v === (_ ? "pm" : "PM");
      return f;
    }, O = { A: [s, function(v) {
      this.afternoon = y(v, !1);
    }], a: [s, function(v) {
      this.afternoon = y(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [o, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [i, d("seconds")], ss: [i, d("seconds")], m: [i, d("minutes")], mm: [i, d("minutes")], H: [i, d("hours")], h: [i, d("hours")], HH: [i, d("hours")], hh: [i, d("hours")], D: [i, d("day")], DD: [o, d("day")], Do: [s, function(v) {
      var _ = l.ordinal, f = v.match(/\d+/);
      if (this.day = f[0], _)
        for (var x = 1; x <= 31; x += 1)
          _(x).replace(/\[|\]/g, "") === v && (this.day = x);
    }], M: [i, d("month")], MM: [o, d("month")], MMM: [s, function(v) {
      var _ = m("months"), f = (m("monthsShort") || _.map(function(x) {
        return x.slice(0, 3);
      })).indexOf(v) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [s, function(v) {
      var _ = m("months").indexOf(v) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, d("year")], YY: [o, function(v) {
      this.year = u(v);
    }], YYYY: [/\d{4}/, d("year")], Z: c, ZZ: c };
    function C(v) {
      var _, f;
      _ = v, f = l && l.formats;
      for (var x = (v = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, R, A) {
        var D = A && A.toUpperCase();
        return R || f[A] || n[A] || f[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, j, W) {
          return j || W.slice(1);
        });
      })).match(r), w = x.length, a = 0; a < w; a += 1) {
        var b = x[a], p = O[b], h = p && p[0], T = p && p[1];
        x[a] = T ? { regex: h, parser: T } : b.replace(/^\[|\]$/g, "");
      }
      return function(M) {
        for (var R = {}, A = 0, D = 0; A < w; A += 1) {
          var H = x[A];
          if (typeof H == "string")
            D += H.length;
          else {
            var j = H.regex, W = H.parser, N = M.slice(D), z = j.exec(N)[0];
            W.call(R, z), M = M.replace(z, "");
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
    return function(v, _, f) {
      f.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
      var x = _.prototype, w = x.parse;
      x.parse = function(a) {
        var b = a.date, p = a.utc, h = a.args;
        this.$u = p;
        var T = h[1];
        if (typeof T == "string") {
          var M = h[2] === !0, R = h[3] === !0, A = M || R, D = h[2];
          R && (D = h[2]), l = this.$locale(), !M && D && (l = f.Ls[D]), this.$d = function(N, z, Y) {
            try {
              if (["x", "X"].indexOf(z) > -1)
                return new Date((z === "X" ? 1e3 : 1) * N);
              var V = C(z)(N), X = V.year, se = V.month, le = V.day, Ee = V.hours, ge = V.minutes, ae = V.seconds, he = V.milliseconds, Se = V.zone, ie = new Date(), Oe = le || (X || se ? 1 : ie.getDate()), ue = X || ie.getFullYear(), me = 0;
              X && !se || (me = se > 0 ? se - 1 : ie.getMonth());
              var $e = Ee || 0, Ae = ge || 0, Be = ae || 0, Le = he || 0;
              return Se ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le + 60 * Se.offset * 1e3)) : Y ? new Date(Date.UTC(ue, me, Oe, $e, Ae, Be, Le)) : new Date(ue, me, Oe, $e, Ae, Be, Le);
            } catch {
              return new Date("");
            }
          }(b, T, p), this.init(), D && D !== !0 && (this.$L = this.locale(D).$L), A && b != this.format(T) && (this.$d = new Date("")), l = {};
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
          w.call(this, a);
      };
    };
  });
})(Vn);
const qr = Vn.exports;
var pn;
const bt = typeof window < "u";
bt && ((pn = window == null ? void 0 : window.navigator) == null ? void 0 : pn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
function eo(e, t = !1) {
  const n = U(), r = () => n.value = Boolean(e());
  return r(), Zr(r, t), n;
}
const Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qt = "__vueuse_ssr_handlers__";
Vt[qt] = Vt[qt] || {};
Vt[qt];
var vn = Object.getOwnPropertySymbols, to = Object.prototype.hasOwnProperty, no = Object.prototype.propertyIsEnumerable, ro = (e, t) => {
  var n = {};
  for (var r in e)
    to.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && vn)
    for (var r of vn(e))
      t.indexOf(r) < 0 && no.call(e, r) && (n[r] = e[r]);
  return n;
};
function oo(e, t, n = {}) {
  const r = n, { window: o = Jr } = r, i = ro(r, ["window"]);
  let s;
  const l = eo(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, d = Xe(() => qn(e), (m) => {
    u(), l.value && o && m && (s = new ResizeObserver(t), s.observe(m, i));
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
  return oo(e, ([i]) => {
    r.value = i.contentRect.width, o.value = i.contentRect.height;
  }, n), Xe(() => qn(e), (i) => {
    r.value = i ? t.width : 0, o.value = i ? t.height : 0;
  }), {
    width: r,
    height: o
  };
}
var gn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(gn || (gn = {}));
var ao = Object.defineProperty, hn = Object.getOwnPropertySymbols, io = Object.prototype.hasOwnProperty, so = Object.prototype.propertyIsEnumerable, mn = (e, t, n) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lo = (e, t) => {
  for (var n in t || (t = {}))
    io.call(t, n) && mn(e, n, t[n]);
  if (hn)
    for (var n of hn(t))
      so.call(t, n) && mn(e, n, t[n]);
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
  const { chartStart: t, chartEnd: n, barStart: r, barEnd: o, dateFormat: i } = e, s = q(() => u(t.value)), l = q(() => u(n.value)), u = (c, m) => {
    let y;
    if (m !== void 0 && typeof c != "string" && !(c instanceof Date) && (y = m === "start" ? c[r.value] : c[o.value]), typeof c == "string")
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
const co = { class: "g-gantt-grid-current-date" }, fo = /* @__PURE__ */ ee({
  __name: "GGanttGridCurrentDay",
  props: {
    parentWidth: {}
  },
  setup(e) {
    const t = e, n = Pe("iconComponent"), r = new Date(), o = new Date(r.getFullYear(), 0, 1), i = q(() => Math.ceil((new Date(r.getTime()).valueOf() - o.valueOf()) / 864e5)), s = q(() => t.parentWidth / 52 / 7), l = U(i.value >= 365 - 10), u = q(() => i.value >= 365 - 10 ? 0 : s.value * i.value - 33), d = q(() => i.value < 10 ? 0 : s.value * i.value - 33);
    return (c, m) => (S(), L(ne, null, [
      B("div", {
        style: F({
          position: "absolute",
          top: "-65px",
          zIndex: 3,
          left: s.value * i.value - 7.5 + "px"
        })
      }, [
        (S(), J(je($(n)), {
          name: "marker-current-date",
          size: "16",
          "size-s": "16",
          style: {
            color: "#C882BE"
          }
        }))
      ], 4),
      B("div", {
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
        B("p", co, te($(Q)(new Date()).format("DD.MM.YYYY")), 1)
      ], 4),
      B("div", {
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
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, po = /* @__PURE__ */ wt(fo, [["__scopeId", "data-v-dd346c68"]]);
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
  }), o = q(() => {
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
    const l = [], u = [], d = n.value.diff(t.value, "minutes", !0), c = r.value, m = o.value;
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
const vo = /* @__PURE__ */ ee({
  __name: "GGanttGridAreaDivider",
  props: {
    areaHeights: {}
  },
  setup(e) {
    const { timeaxisUnits: t } = tr(), n = (o, i) => i === t.value.lowerUnits.length - 1 ? "unset" : o && Number(o) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2", r = (o) => {
      const i = +o >= 14 && +o <= 26, s = +o >= 40 && +o <= 52;
      return i || s ? "#f7f8f9" : "#ffffff";
    };
    return (o, i) => (S(), L(ne, null, [
      (S(!0), L(ne, null, be(o.areaHeights, (s) => (S(), L("div", {
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
      (S(!0), L(ne, null, be($(t).lowerUnits, ({ label: s, width: l }, u) => (S(), L("div", {
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
}), go = /* @__PURE__ */ ee({
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
    }), (o, i) => (S(), L("div", {
      ref_key: "gridContainer",
      ref: t,
      class: "g-grid-container"
    }, [
      ft(po, { "parent-width": $(n) }, null, 8, ["parent-width"]),
      ft(vo, { "area-heights": r.value }, null, 8, ["area-heights"])
    ], 512));
  }
});
const bn = /* @__PURE__ */ wt(go, [["__scopeId", "data-v-a719d7c7"]]);
function ho() {
  const e = Pe(Qn);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const mo = { class: "g-label-column-rows" }, yo = /* @__PURE__ */ ee({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: t, colors: n, labelColumnTitle: r, rowHeight: o } = He(), i = ho();
    return (s, l) => (S(), L("div", {
      class: "g-label-column",
      style: F({ fontFamily: $(t), color: $(n).text })
    }, [
      Z(s.$slots, "label-column-title", {}, () => [
        B("div", {
          class: "g-label-column-header",
          style: F({ background: $(n).primary })
        }, te($(r)), 5)
      ]),
      B("div", mo, [
        (S(!0), L(ne, null, be($(i)(), ({ label: u }, d) => (S(), L("div", {
          key: `${u}_${d}`,
          class: "g-label-column-row",
          style: F({
            background: d % 2 === 0 ? $(n).ternary : $(n).quartenary,
            height: `${$(o)}px`
          })
        }, [
          Z(s.$slots, "label-column-row", { label: u }, () => [
            B("span", null, te(u), 1)
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
    return (o, i) => (S(), L("div", bo, [
      B("div", wo, [
        (S(!0), L(ne, null, be($(r).lowerUnits, ({ label: s, value: l, date: u, width: d }, c) => (S(), L("div", {
          key: s,
          class: "g-timeunit g-timeunit-low",
          style: F({
            flexDirection: $(t) === "hour" ? "column" : "row",
            alignItems: $(t) === "hour" ? "" : "center",
            width: d
          })
        }, [
          c === 0 ? (S(), L("span", xo, "KW")) : de("", !0),
          Z(o.$slots, "timeunit", {
            label: s,
            value: l,
            date: u
          }, () => [
            pt(te(s), 1)
          ]),
          $(t) === "hour" ? (S(), L("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: F({ background: $(n).text })
          }, null, 4)) : de("", !0)
        ], 4))), 128))
      ]),
      B("div", Oo, [
        (S(!0), L(ne, null, be($(r).upperUnits, ({ label: s, value: l, date: u, width: d }) => (S(), L("div", {
          key: s,
          class: "g-upper-timeunit",
          style: F({
            width: d
          })
        }, [
          Z(o.$slots, "upper-timeunit", {
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
  const { dateFormat: t, chartSize: n } = e, { chartStartDayjs: r, chartEndDayjs: o, toDayjs: i, format: s } = Jt(e), l = q(() => o.value.diff(r.value, "minutes"));
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
const _o = /* @__PURE__ */ ee({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: t } = en(), n = U(Q()), { colors: r, dateFormat: o, currentTimeLabel: i } = He(), s = q(() => {
      const l = o.value || "YYYY-MM-DD HH:mm";
      return t(Q(n.value, l).format(l));
    });
    return (l, u) => (S(), L("div", {
      class: "g-grid-current-time",
      style: F({
        left: `${s.value}px`
      })
    }, [
      B("div", {
        class: "g-grid-current-time-marker",
        style: F({
          border: `1px dashed ${$(r).markerCurrentTime}`
        })
      }, null, 4),
      B("span", {
        class: "g-grid-current-time-text",
        style: F({ color: $(r).markerCurrentTime })
      }, [
        Z(l.$slots, "current-time-label", {}, () => [
          pt(te($(i)), 1)
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
      yt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((o) => {
          n.value.push(o.clientHeight);
        });
      });
    }), (r, o) => (S(), L("div", To, [
      B("div", ko, [
        (S(), J(je($(t)), {
          name: "chevron-right",
          class: "g-gantt-legend-do-collapse",
          size: "24",
          onClick: o[0] || (o[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }))
      ]),
      B("div", Do, [
        (S(!0), L(ne, null, be(Object.entries(r.legend), ([i, s], l) => (S(), L("div", {
          key: i,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + So + "px"
          })
        }, [
          (S(), J(je($(t)), {
            class: "g-gantt-legend-area-icon",
            "size-s": "24",
            "size-m": "32",
            "size-l": "32",
            name: r.legend[i][0].area.icon
          }, null, 8, ["name"])),
          B("div", Eo, [
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
const Mo = /* @__PURE__ */ wt(Ao, [["__scopeId", "data-v-6e9c4fc8"]]), Po = { class: "g-gantt-legend" }, $o = { class: "g-gantt-legend-collapse" }, Bo = { class: "g-gantt-legend-areas-list" }, Lo = { class: "g-gantt-legend-title" }, Ro = { class: "g-gantt-legend-area" }, Io = { class: "g-gantt-legend-category-name" }, jo = 6, Ho = /* @__PURE__ */ ee({
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
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((o) => {
          n.value.push(o.clientHeight);
        });
      });
    }), (r, o) => (S(), L("div", Po, [
      B("div", $o, [
        (S(), J(je($(t)), {
          name: "chevron-left",
          class: "g-gantt-legend-do-uncollapse",
          size: "24",
          onClick: o[0] || (o[0] = () => r.$emit("update:isCollapsed", !r.isCollapsed))
        }))
      ]),
      B("div", Bo, [
        (S(!0), L(ne, null, be(Object.entries(r.legend), ([i, s], l) => (S(), L("div", {
          key: i,
          class: "g-gantt-legend-area-list",
          style: F({
            height: n.value[l] + jo + "px"
          })
        }, [
          B("div", Lo, [
            (S(), J(je($(t)), {
              "size-s": "24",
              "size-m": "32",
              "size-l": "32",
              name: r.legend[i][0].area.icon
            }, null, 8, ["name"])),
            B("p", Ro, te(i), 1)
          ]),
          (S(!0), L(ne, null, be(s, (u) => (S(), L("div", {
            key: u.category.name,
            class: "g-gantt-legend-promotion"
          }, [
            B("div", {
              class: "g-gantt-legend-category-color",
              style: F({ backgroundColor: "#" + u.category.color })
            }, null, 4),
            B("p", Io, te(u.category.name), 1)
          ]))), 128))
        ], 4))), 128))
      ])
    ]));
  }
});
const Yo = /* @__PURE__ */ wt(Ho, [["__scopeId", "data-v-a1ed28cb"]]), Go = /* @__PURE__ */ ee({
  __name: "GGanttLegend",
  props: {
    legend: {}
  },
  setup(e) {
    const t = U(!0), n = () => document.querySelector("body").clientWidth > 1200;
    return $r(() => {
      t.value = n();
    }), (r, o) => t.value ? (S(), J(Yo, {
      key: 1,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": o[1] || (o[1] = (i) => t.value = i),
      legend: r.legend
    }, null, 8, ["is-collapsed", "legend"])) : (S(), J(Mo, {
      key: 0,
      "is-collapsed": t.value,
      "onUpdate:isCollapsed": o[0] || (o[0] = (i) => t.value = i),
      legend: r.legend
    }, null, 8, ["is-collapsed", "legend"]));
  }
}), Uo = { class: "g-gantt-chart-container" }, Wo = { class: "g-gantt-chart-quarters" }, zo = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, Fo = { class: "g-gantt-rows-list" }, No = /* @__PURE__ */ ee({
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
    const i = U(
      Q(new Date()).isBetween(r, o)
    ), s = t, { width: l, font: u, colorScheme: d } = vt(n), c = Br(), m = q(
      () => typeof d.value != "string" ? d.value : yn[d.value] || yn.default
    ), y = () => {
      var w;
      const f = (w = c.default) == null ? void 0 : w.call(c), x = [];
      return f && f.forEach((a) => {
        var b;
        if ((b = a.props) != null && b.bars) {
          const { label: p, bars: h } = a.props;
          x.push({ label: p, bars: h });
        } else
          Array.isArray(a.children) && a.children.forEach((p) => {
            var T;
            const h = p;
            if ((T = h == null ? void 0 : h.props) != null && T.bars) {
              const { label: M, bars: R } = h.props;
              x.push({ label: M, bars: R });
            }
          });
      }), x;
    }, O = U(!1), C = (f, x, w, a) => {
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
          O.value = !1, s("dragend-bar", { bar: x, e: f, movedBars: a });
          break;
        case "contextmenu":
          s("contextmenu-bar", { bar: x, e: f, datetime: w });
          break;
      }
    }, v = U(null), _ = Xn(v);
    return Bt(Qn, y), Bt(Kn, {
      ...vt(n),
      colors: m,
      chartSize: _
    }), Bt(Zn, C), (f, x) => (S(), L("div", Uo, [
      ft(Go, {
        legend: f.legend ? f.legend : {}
      }, null, 8, ["legend"]),
      B("div", {
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
          "label-column-row": ze(({ label: w }) => [
            Z(f.$slots, "label-column-row", { label: w })
          ]),
          _: 3
        }, 8, ["style"])) : de("", !0),
        B("div", {
          ref_key: "ganttChart",
          ref: v,
          class: Lt([
            "g-gantt-chart",
            {
              "with-column": f.labelColumnTitle,
              "g-gantt-chart-container--4-quarters-width": !i.value,
              "g-gantt-chart-container--5-quarters-width": i.value
            }
          ]),
          style: F({ width: $(l), background: m.value.background, fontFamily: $(u) })
        }, [
          f.grid ? (S(), J(bn, {
            key: 0,
            "highlighted-units": f.highlightedUnits
          }, null, 8, ["highlighted-units"])) : de("", !0),
          f.currentTime ? (S(), J(_o, { key: 1 }, {
            "current-time-label": ze(() => [
              Z(f.$slots, "current-time-label")
            ]),
            _: 3
          })) : de("", !0),
          B("div", Wo, [
            x[0] || (x[0] = B("div", { class: "g-gantt-chart-quarter" }, "Q1", -1)),
            x[1] || (x[1] = B("div", { class: "g-gantt-chart-quarter" }, "Q2", -1)),
            x[2] || (x[2] = B("div", { class: "g-gantt-chart-quarter" }, "Q3", -1)),
            x[3] || (x[3] = B("div", { class: "g-gantt-chart-quarter" }, "Q4", -1)),
            i.value ? (S(), L("div", zo, "Q1")) : de("", !0)
          ]),
          B("div", {
            class: Lt([
              "g-gantt-rows-container",
              n.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            B("div", Fo, [
              Z(f.$slots, "default")
            ]),
            ft(bn, { "highlighted-units": f.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          f.hideTimeaxis ? de("", !0) : (S(), J(Co, { key: 2 }, {
            "upper-timeunit": ze(({ label: w, value: a, date: b }) => [
              Z(f.$slots, "upper-timeunit", {
                date: b,
                label: w,
                value: a
              })
            ]),
            timeunit: ze(({ label: w, value: a, date: b }) => [
              Z(f.$slots, "timeunit", {
                date: b,
                label: w,
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
var re = "top", pe = "bottom", ve = "right", oe = "left", tn = "auto", xt = [re, pe, ve, oe], et = "start", gt = "end", Vo = "clippingParents", nr = "viewport", ut = "popper", qo = "reference", wn = /* @__PURE__ */ xt.reduce(function(e, t) {
  return e.concat([t + "-" + et, t + "-" + gt]);
}, []), rr = /* @__PURE__ */ [].concat(xt, [tn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + et, t + "-" + gt]);
}, []), Xo = "beforeRead", Qo = "read", Ko = "afterRead", Zo = "beforeMain", Jo = "main", ea = "afterMain", ta = "beforeWrite", na = "write", ra = "afterWrite", oa = [Xo, Qo, Ko, Zo, Jo, ea, ta, na, ra];
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
function aa(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !fe(i) || !ke(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
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
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !fe(o) || !ke(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(u) {
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
var Ve = Math.max, It = Math.min, nt = Math.round;
function rt(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (fe(e) && t) {
    var i = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (r = nt(n.width) / s || 1), i > 0 && (o = nt(n.height) / i || 1);
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
function sa(e) {
  return ["table", "td", "th"].indexOf(ke(e)) >= 0;
}
function Ye(e) {
  return ((tt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ht(e) {
  return ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (or(e) ? e.host : null) || Ye(e);
}
function xn(e) {
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
    var i = De(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ot(e) {
  for (var t = we(e), n = xn(e); n && sa(n) && De(n).position === "static"; )
    n = xn(n);
  return n && (ke(n) === "html" || ke(n) === "body" && De(n).position === "static") ? t : n || la(e) || t;
}
function rn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ct(e, t, n) {
  return Ve(e, It(t, n));
}
function ua(e, t, n) {
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
var ca = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, lr(typeof t != "number" ? t : ur(t, xt));
};
function da(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = _e(n.placement), u = rn(l), d = [oe, ve].indexOf(l) >= 0, c = d ? "height" : "width";
  if (!(!i || !s)) {
    var m = ca(o.padding, n), y = nn(i), O = u === "y" ? re : oe, C = u === "y" ? pe : ve, v = n.rects.reference[c] + n.rects.reference[u] - s[u] - n.rects.popper[c], _ = s[u] - n.rects.reference[u], f = Ot(i), x = f ? u === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, w = v / 2 - _ / 2, a = m[O], b = x - y[c] - m[C], p = x / 2 - y[c] / 2 + w, h = ct(a, p, b), T = u;
    n.modifiersData[r] = (t = {}, t[T] = h, t.centerOffset = h - p, t);
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
function On(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, u = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, m = e.isFixed, y = c === !0 ? ga(s) : typeof c == "function" ? c(s) : s, O = y.x, C = O === void 0 ? 0 : O, v = y.y, _ = v === void 0 ? 0 : v, f = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), w = oe, a = re, b = window;
  if (d) {
    var p = Ot(n), h = "clientHeight", T = "clientWidth";
    if (p === we(n) && (p = Ye(n), De(p).position !== "static" && l === "absolute" && (h = "scrollHeight", T = "scrollWidth")), p = p, o === re || (o === oe || o === ve) && i === gt) {
      a = pe;
      var M = m && b.visualViewport ? b.visualViewport.height : p[h];
      _ -= M - r.height, _ *= u ? 1 : -1;
    }
    if (o === oe || (o === re || o === pe) && i === gt) {
      w = ve;
      var R = m && b.visualViewport ? b.visualViewport.width : p[T];
      C -= R - r.width, C *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: l
  }, d && va);
  if (u) {
    var D;
    return Object.assign({}, A, (D = {}, D[a] = x ? "0" : "", D[w] = f ? "0" : "", D.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + C + "px, " + _ + "px)" : "translate3d(" + C + "px, " + _ + "px, 0)", D));
  }
  return Object.assign({}, A, (t = {}, t[a] = x ? _ + "px" : "", t[w] = f ? C + "px" : "", t.transform = "", t));
}
function ha(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, u = l === void 0 ? !0 : l, d = {
    placement: _e(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
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
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, u = we(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && d.forEach(function(c) {
    c.addEventListener("scroll", n.update, Mt);
  }), l && u.addEventListener("resize", n.update, Mt), function() {
    i && d.forEach(function(c) {
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
function Cn(e) {
  return e.replace(/start|end/g, function(t) {
    return xa[t];
  });
}
function on(e) {
  var t = we(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function an(e) {
  return rt(Ye(e)).left + on(e).scrollLeft;
}
function Oa(e) {
  var t = we(e), n = Ye(e), r = t.visualViewport, o = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, l = r.offsetTop)), {
    width: o,
    height: i,
    x: s + an(e),
    y: l
  };
}
function Ca(e) {
  var t, n = Ye(e), r = on(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ve(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Ve(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + an(e), u = -r.scrollTop;
  return De(o || n).direction === "rtl" && (l += Ve(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function sn(e) {
  var t = De(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function cr(e) {
  return ["html", "body", "#document"].indexOf(ke(e)) >= 0 ? e.ownerDocument.body : fe(e) && sn(e) ? e : cr(Ht(e));
}
function dt(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = cr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = we(r), s = o ? [i].concat(i.visualViewport || [], sn(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(dt(Ht(s)));
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
function _n(e, t) {
  return t === nr ? Xt(Oa(e)) : tt(t) ? _a(t) : Xt(Ca(Ye(e)));
}
function Ta(e) {
  var t = dt(Ht(e)), n = ["absolute", "fixed"].indexOf(De(e).position) >= 0, r = n && fe(e) ? Ot(e) : e;
  return tt(r) ? t.filter(function(o) {
    return tt(o) && ir(o, r) && ke(o) !== "body" && (n ? De(o).position !== "static" : !0);
  }) : [];
}
function ka(e, t, n) {
  var r = t === "clippingParents" ? Ta(e) : [].concat(t), o = [].concat(r, [n]), i = o[0], s = o.reduce(function(l, u) {
    var d = _n(e, u);
    return l.top = Ve(d.top, l.top), l.right = It(d.right, l.right), l.bottom = It(d.bottom, l.bottom), l.left = Ve(d.left, l.left), l;
  }, _n(e, i));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function dr(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? _e(r) : null, i = r ? ot(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
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
  var d = o ? rn(o) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (i) {
      case et:
        u[d] = u[d] - (t[c] / 2 - n[c] / 2);
        break;
      case gt:
        u[d] = u[d] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function ht(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.boundary, s = i === void 0 ? Vo : i, l = n.rootBoundary, u = l === void 0 ? nr : l, d = n.elementContext, c = d === void 0 ? ut : d, m = n.altBoundary, y = m === void 0 ? !1 : m, O = n.padding, C = O === void 0 ? 0 : O, v = lr(typeof C != "number" ? C : ur(C, xt)), _ = c === ut ? qo : ut, f = e.rects.popper, x = e.elements[y ? _ : c], w = ka(tt(x) ? x : x.contextElement || Ye(e.elements.popper), s, u), a = rt(e.elements.reference), b = dr({
    reference: a,
    element: f,
    strategy: "absolute",
    placement: o
  }), p = Xt(Object.assign({}, f, b)), h = c === ut ? p : a, T = {
    top: w.top - h.top + v.top,
    bottom: h.bottom - w.bottom + v.bottom,
    left: w.left - h.left + v.left,
    right: h.right - w.right + v.right
  }, M = e.modifiersData.offset;
  if (c === ut && M) {
    var R = M[o];
    Object.keys(T).forEach(function(A) {
      var D = [ve, pe].indexOf(A) >= 0 ? 1 : -1, H = [re, pe].indexOf(A) >= 0 ? "y" : "x";
      T[A] += R[H] * D;
    });
  }
  return T;
}
function Da(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, d = u === void 0 ? rr : u, c = ot(r), m = c ? l ? wn : wn.filter(function(C) {
    return ot(C) === c;
  }) : xt, y = m.filter(function(C) {
    return d.indexOf(C) >= 0;
  });
  y.length === 0 && (y = m);
  var O = y.reduce(function(C, v) {
    return C[v] = ht(e, {
      placement: v,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[_e(v)], C;
  }, {});
  return Object.keys(O).sort(function(C, v) {
    return O[C] - O[v];
  });
}
function Ea(e) {
  if (_e(e) === tn)
    return [];
  var t = Rt(e);
  return [Cn(e), t, Cn(t)];
}
function Sa(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, u = n.fallbackPlacements, d = n.padding, c = n.boundary, m = n.rootBoundary, y = n.altBoundary, O = n.flipVariations, C = O === void 0 ? !0 : O, v = n.allowedAutoPlacements, _ = t.options.placement, f = _e(_), x = f === _, w = u || (x || !C ? [Rt(_)] : Ea(_)), a = [_].concat(w).reduce(function(ge, ae) {
      return ge.concat(_e(ae) === tn ? Da(t, {
        placement: ae,
        boundary: c,
        rootBoundary: m,
        padding: d,
        flipVariations: C,
        allowedAutoPlacements: v
      }) : ae);
    }, []), b = t.rects.reference, p = t.rects.popper, h = /* @__PURE__ */ new Map(), T = !0, M = a[0], R = 0; R < a.length; R++) {
      var A = a[R], D = _e(A), H = ot(A) === et, j = [re, pe].indexOf(D) >= 0, W = j ? "width" : "height", N = ht(t, {
        placement: A,
        boundary: c,
        rootBoundary: m,
        altBoundary: y,
        padding: d
      }), z = j ? H ? ve : oe : H ? pe : re;
      b[W] > p[W] && (z = Rt(z));
      var Y = Rt(z), V = [];
      if (i && V.push(N[D] <= 0), l && V.push(N[z] <= 0, N[Y] <= 0), V.every(function(ge) {
        return ge;
      })) {
        M = A, T = !1;
        break;
      }
      h.set(A, V);
    }
    if (T)
      for (var X = C ? 3 : 1, se = function(ae) {
        var he = a.find(function(Se) {
          var ie = h.get(Se);
          if (ie)
            return ie.slice(0, ae).every(function(Oe) {
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
var Aa = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Sa,
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
  return [re, ve, pe, oe].some(function(t) {
    return e[t] >= 0;
  });
}
function Ma(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = ht(t, {
    elementContext: "reference"
  }), l = ht(t, {
    altBoundary: !0
  }), u = Tn(s, r), d = Tn(l, o, i), c = kn(u), m = kn(d);
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
  var r = _e(e), o = [oe, re].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [oe, ve].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Ba(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = rr.reduce(function(c, m) {
    return c[m] = $a(m, t.rects, i), c;
  }, {}), l = s[t.placement], u = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = s;
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, u = n.boundary, d = n.rootBoundary, c = n.altBoundary, m = n.padding, y = n.tether, O = y === void 0 ? !0 : y, C = n.tetherOffset, v = C === void 0 ? 0 : C, _ = ht(t, {
    boundary: u,
    rootBoundary: d,
    padding: m,
    altBoundary: c
  }), f = _e(t.placement), x = ot(t.placement), w = !x, a = rn(f), b = ja(a), p = t.modifiersData.popperOffsets, h = t.rects.reference, T = t.rects.popper, M = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, R = typeof M == "number" ? {
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
      var H, j = a === "y" ? re : oe, W = a === "y" ? pe : ve, N = a === "y" ? "height" : "width", z = p[a], Y = z + _[j], V = z - _[W], X = O ? -T[N] / 2 : 0, se = x === et ? h[N] : T[N], le = x === et ? -T[N] : -h[N], Ee = t.elements.arrow, ge = O && Ee ? nn(Ee) : {
        width: 0,
        height: 0
      }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sr(), he = ae[j], Se = ae[W], ie = ct(0, h[N], ge[N]), Oe = w ? h[N] / 2 - X - ie - he - R.mainAxis : se - ie - he - R.mainAxis, ue = w ? -h[N] / 2 + X + ie + Se + R.mainAxis : le + ie + Se + R.mainAxis, me = t.elements.arrow && Ot(t.elements.arrow), $e = me ? a === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, Ae = (H = A == null ? void 0 : A[a]) != null ? H : 0, Be = z + Oe - Ae - $e, Le = z + ue - Ae, Ke = ct(O ? It(Y, Be) : Y, z, O ? Ve(V, Le) : V);
      p[a] = Ke, D[a] = Ke - z;
    }
    if (l) {
      var it, Ct = a === "x" ? re : oe, _t = a === "x" ? pe : ve, Me = p[b], Re = b === "y" ? "height" : "width", st = Me + _[Ct], Ge = Me - _[_t], lt = [re, oe].indexOf(f) !== -1, Tt = (it = A == null ? void 0 : A[b]) != null ? it : 0, kt = lt ? st : Me - h[Re] - T[Re] - Tt + R.altAxis, Dt = lt ? Me + h[Re] + T[Re] - Tt - R.altAxis : Ge, Et = O && lt ? ua(kt, Me, Dt) : ct(O ? kt : st, Me, O ? Dt : Ge);
      p[b] = Et, D[b] = Et - Me;
    }
    t.modifiersData[r] = D;
  }
}
var Ya = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ha,
  requiresIfExists: ["offset"]
};
function Ga(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ua(e) {
  return e === we(e) || !fe(e) ? on(e) : Ga(e);
}
function Wa(e) {
  var t = e.getBoundingClientRect(), n = nt(t.width) / e.offsetWidth || 1, r = nt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function za(e, t, n) {
  n === void 0 && (n = !1);
  var r = fe(t), o = fe(t) && Wa(t), i = Ye(t), s = rt(e, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ke(t) !== "body" || sn(i)) && (l = Ua(t)), fe(t) ? (u = rt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = an(i))), {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function Fa(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && o(u);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function Na(e) {
  var t = Fa(e);
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
function Xa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Dn : o;
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
        v(), c.options = Object.assign({}, i, c.options, x), c.scrollParents = {
          reference: tt(l) ? dt(l) : l.contextElement ? dt(l.contextElement) : [],
          popper: dt(u)
        };
        var w = Na(qa([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = w.filter(function(a) {
          return a.enabled;
        }), C(), O.update();
      },
      forceUpdate: function() {
        if (!y) {
          var f = c.elements, x = f.reference, w = f.popper;
          if (!!En(x, w)) {
            c.rects = {
              reference: za(x, Ot(w), c.options.strategy === "fixed"),
              popper: nn(w)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var a = 0; a < c.orderedModifiers.length; a++) {
              if (c.reset === !0) {
                c.reset = !1, a = -1;
                continue;
              }
              var b = c.orderedModifiers[a], p = b.fn, h = b.options, T = h === void 0 ? {} : h, M = b.name;
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
      update: Va(function() {
        return new Promise(function(_) {
          O.forceUpdate(), _(c);
        });
      }),
      destroy: function() {
        v(), y = !0;
      }
    };
    if (!En(l, u))
      return O;
    O.setOptions(d).then(function(_) {
      !y && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function C() {
      c.orderedModifiers.forEach(function(_) {
        var f = _.name, x = _.options, w = x === void 0 ? {} : x, a = _.effect;
        if (typeof a == "function") {
          var b = a({
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
    function v() {
      m.forEach(function(_) {
        return _();
      }), m = [];
    }
    return O;
  };
}
var Qa = [ba, Ia, ma, ar, La, Aa, Ya, pa, Pa], Ka = /* @__PURE__ */ Xa({
  defaultModifiers: Qa
}), Za = "tippy-box", fr = "tippy-content", pr = "tippy-backdrop", vr = "tippy-arrow", gr = "tippy-svg-arrow", We = {
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
function at(e) {
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
function oi(e) {
  return Yt(e) ? [e] : ni(e) ? at(e) : Array.isArray(e) ? e : at(document.querySelectorAll(e));
}
function zt(e, t) {
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
function ai(e, t) {
  var n = t.clientX, r = t.clientY;
  return e.every(function(o) {
    var i = o.popperRect, s = o.popperState, l = o.props, u = l.interactiveBorder, d = yr(s.placement), c = s.modifiersData.offset;
    if (!c)
      return !0;
    var m = d === "bottom" ? c.top.y : 0, y = d === "top" ? c.bottom.y : 0, O = d === "right" ? c.left.x : 0, C = d === "left" ? c.right.x : 0, v = i.top - r + m > u, _ = r - i.bottom - y > u, f = i.left - n + O > u, x = n - i.right - C > u;
    return v || _ || f || x;
  });
}
function Ft(e, t, n) {
  var r = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    e[r](o, n);
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
  document.addEventListener("touchstart", ii, We), window.addEventListener("blur", si);
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
}, di, fi), pi = Object.keys(ye), vi = function(t) {
  var n = Object.keys(t);
  n.forEach(function(r) {
    ye[r] = t[r];
  });
};
function xr(e) {
  var t = e.plugins || [], n = t.reduce(function(r, o) {
    var i = o.name, s = o.defaultValue;
    if (i) {
      var l;
      r[i] = e[i] !== void 0 ? e[i] : (l = ye[i]) != null ? l : s;
    }
    return r;
  }, {});
  return Object.assign({}, e, n);
}
function gi(e, t) {
  var n = t ? Object.keys(xr(Object.assign({}, ye, {
    plugins: t
  }))) : pi, r = n.reduce(function(o, i) {
    var s = (e.getAttribute("data-tippy-" + i) || "").trim();
    if (!s)
      return o;
    if (i === "content")
      o[i] = s;
    else
      try {
        o[i] = JSON.parse(s);
      } catch {
        o[i] = s;
      }
    return o;
  }, {});
  return r;
}
function Bn(e, t) {
  var n = Object.assign({}, t, {
    content: mr(t.content, [e])
  }, t.ignoreAttributes ? {} : gi(e, t.plugins));
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
  return e === !0 ? t.className = vr : (t.className = gr, Yt(e) ? t.appendChild(e) : Qt(t, e)), t;
}
function Rn(e, t) {
  Yt(t.content) ? (Qt(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Qt(e, t.content) : e.textContent = t.content);
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
  n.className = Za, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = qe();
  r.className = fr, r.setAttribute("data-state", "hidden"), Rn(r, e.props), t.appendChild(n), n.appendChild(r), o(e.props, e.props);
  function o(i, s) {
    var l = jt(t), u = l.box, d = l.content, c = l.arrow;
    s.theme ? u.setAttribute("data-theme", s.theme) : u.removeAttribute("data-theme"), typeof s.animation == "string" ? u.setAttribute("data-animation", s.animation) : u.removeAttribute("data-animation"), s.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? u.setAttribute("role", s.role) : u.removeAttribute("role"), (i.content !== s.content || i.allowHTML !== s.allowHTML) && Rn(d, e.props), s.arrow ? c ? i.arrow !== s.arrow && (u.removeChild(c), u.appendChild(Ln(s.arrow))) : u.appendChild(Ln(s.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: o
  };
}
Or.$$tippy = !0;
var mi = 1, Pt = [], Nt = [];
function yi(e, t) {
  var n = Bn(e, Object.assign({}, ye, xr(Mn(t)))), r, o, i, s = !1, l = !1, u = !1, d = !1, c, m, y, O = [], C = Sn(Be, n.interactiveDebounce), v, _ = mi++, f = null, x = ti(n.plugins), w = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, a = {
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
    return a;
  var b = n.render(a), p = b.popper, h = b.onUpdate;
  p.setAttribute("data-tippy-root", ""), p.id = "tippy-" + a.id, a.popper = p, e._tippy = a, p._tippy = a;
  var T = x.map(function(g) {
    return g.fn(a);
  }), M = e.hasAttribute("aria-expanded");
  return me(), X(), z(), Y("onCreate", [a]), n.showOnCreate && st(), p.addEventListener("mouseenter", function() {
    a.props.interactive && a.state.isVisible && a.clearDelayTimeouts();
  }), p.addEventListener("mouseleave", function() {
    a.props.interactive && a.props.trigger.indexOf("mouseenter") >= 0 && j().addEventListener("mousemove", C);
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
    return jt(p);
  }
  function N(g) {
    return a.state.isMounted && !a.state.isVisible || Ce.isTouch || c && c.type === "focus" ? 0 : Wt(a.props.delay, g ? 0 : 1, ye.delay);
  }
  function z(g) {
    g === void 0 && (g = !1), p.style.pointerEvents = a.props.interactive && !g ? "" : "none", p.style.zIndex = "" + a.props.zIndex;
  }
  function Y(g, k, P) {
    if (P === void 0 && (P = !0), T.forEach(function(I) {
      I[g] && I[g].apply(I, k);
    }), P) {
      var G;
      (G = a.props)[g].apply(G, k);
    }
  }
  function V() {
    var g = a.props.aria;
    if (!!g.content) {
      var k = "aria-" + g.content, P = p.id, G = Fe(a.props.triggerTarget || e);
      G.forEach(function(I) {
        var K = I.getAttribute(k);
        if (a.state.isVisible)
          I.setAttribute(k, K ? K + " " + P : P);
        else {
          var ce = K && K.replace(P, "").trim();
          ce ? I.setAttribute(k, ce) : I.removeAttribute(k);
        }
      });
    }
  }
  function X() {
    if (!(M || !a.props.aria.expanded)) {
      var g = Fe(a.props.triggerTarget || e);
      g.forEach(function(k) {
        a.props.interactive ? k.setAttribute("aria-expanded", a.state.isVisible && k === H() ? "true" : "false") : k.removeAttribute("aria-expanded");
      });
    }
  }
  function se() {
    j().removeEventListener("mousemove", C), Pt = Pt.filter(function(g) {
      return g !== C;
    });
  }
  function le(g) {
    if (!(Ce.isTouch && (u || g.type === "mousedown"))) {
      var k = g.composedPath && g.composedPath()[0] || g.target;
      if (!(a.props.interactive && Pn(p, k))) {
        if (Fe(a.props.triggerTarget || e).some(function(P) {
          return Pn(P, k);
        })) {
          if (Ce.isTouch || a.state.isVisible && a.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Y("onClickOutside", [a, g]);
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
      !a.state.isVisible && p.parentNode && p.parentNode.contains(p) && k();
    });
  }
  function ie(g, k) {
    Oe(g, k);
  }
  function Oe(g, k) {
    var P = W().box;
    function G(I) {
      I.target === P && (Ft(P, "remove", G), k());
    }
    if (g === 0)
      return k();
    Ft(P, "remove", m), Ft(P, "add", G), m = G;
  }
  function ue(g, k, P) {
    P === void 0 && (P = !1);
    var G = Fe(a.props.triggerTarget || e);
    G.forEach(function(I) {
      I.addEventListener(g, k, P), O.push({
        node: I,
        eventType: g,
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
    })), ei(a.props.trigger).forEach(function(g) {
      if (g !== "manual")
        switch (ue(g, Ae), g) {
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
    O.forEach(function(g) {
      var k = g.node, P = g.eventType, G = g.handler, I = g.options;
      k.removeEventListener(P, G, I);
    }), O = [];
  }
  function Ae(g) {
    var k, P = !1;
    if (!(!a.state.isEnabled || it(g) || l)) {
      var G = ((k = c) == null ? void 0 : k.type) === "focus";
      c = g, v = g.currentTarget, X(), !a.state.isVisible && un(g) && Pt.forEach(function(I) {
        return I(g);
      }), g.type === "click" && (a.props.trigger.indexOf("mouseenter") < 0 || s) && a.props.hideOnClick !== !1 && a.state.isVisible ? P = !0 : st(g), g.type === "click" && (s = !P), P && !G && Ge(g);
    }
  }
  function Be(g) {
    var k = g.target, P = H().contains(k) || p.contains(k);
    if (!(g.type === "mousemove" && P)) {
      var G = Re().concat(p).map(function(I) {
        var K, ce = I._tippy, Ze = (K = ce.popperInstance) == null ? void 0 : K.state;
        return Ze ? {
          popperRect: I.getBoundingClientRect(),
          popperState: Ze,
          props: n
        } : null;
      }).filter(Boolean);
      ai(G, g) && (se(), Ge(g));
    }
  }
  function Le(g) {
    var k = it(g) || a.props.trigger.indexOf("click") >= 0 && s;
    if (!k) {
      if (a.props.interactive) {
        a.hideWithInteractivity(g);
        return;
      }
      Ge(g);
    }
  }
  function Ke(g) {
    a.props.trigger.indexOf("focusin") < 0 && g.target !== H() || a.props.interactive && g.relatedTarget && p.contains(g.relatedTarget) || Ge(g);
  }
  function it(g) {
    return Ce.isTouch ? A() !== g.type.indexOf("touch") >= 0 : !1;
  }
  function Ct() {
    _t();
    var g = a.props, k = g.popperOptions, P = g.placement, G = g.offset, I = g.getReferenceClientRect, K = g.moveTransition, ce = D() ? jt(p).arrow : null, Ze = I ? {
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
          var Ar = W(), Ut = Ar.box;
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
    }), Ue.push.apply(Ue, (k == null ? void 0 : k.modifiers) || []), a.popperInstance = Ka(Ze, p, Object.assign({}, k, {
      placement: P,
      onFirstUpdate: y,
      modifiers: Ue
    }));
  }
  function _t() {
    a.popperInstance && (a.popperInstance.destroy(), a.popperInstance = null);
  }
  function Me() {
    var g = a.props.appendTo, k, P = H();
    a.props.interactive && g === hr || g === "parent" ? k = P.parentNode : k = mr(g, [P]), k.contains(p) || k.appendChild(p), a.state.isMounted = !0, Ct();
  }
  function Re() {
    return at(p.querySelectorAll("[data-tippy-root]"));
  }
  function st(g) {
    a.clearDelayTimeouts(), g && Y("onTrigger", [a, g]), ae();
    var k = N(!0), P = R(), G = P[0], I = P[1];
    Ce.isTouch && G === "hold" && I && (k = I), k ? r = setTimeout(function() {
      a.show();
    }, k) : a.show();
  }
  function Ge(g) {
    if (a.clearDelayTimeouts(), Y("onUntrigger", [a, g]), !a.state.isVisible) {
      he();
      return;
    }
    if (!(a.props.trigger.indexOf("mouseenter") >= 0 && a.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(g.type) >= 0 && s)) {
      var k = N(!1);
      k ? o = setTimeout(function() {
        a.state.isVisible && a.hide();
      }, k) : i = requestAnimationFrame(function() {
        a.hide();
      });
    }
  }
  function lt() {
    a.state.isEnabled = !0;
  }
  function Tt() {
    a.hide(), a.state.isEnabled = !1;
  }
  function kt() {
    clearTimeout(r), clearTimeout(o), cancelAnimationFrame(i);
  }
  function Dt(g) {
    if (!a.state.isDestroyed) {
      Y("onBeforeUpdate", [a, g]), $e();
      var k = a.props, P = Bn(e, Object.assign({}, k, Mn(g), {
        ignoreAttributes: !0
      }));
      a.props = P, me(), k.interactiveDebounce !== P.interactiveDebounce && (se(), C = Sn(Be, P.interactiveDebounce)), k.triggerTarget && !P.triggerTarget ? Fe(k.triggerTarget).forEach(function(G) {
        G.removeAttribute("aria-expanded");
      }) : P.triggerTarget && e.removeAttribute("aria-expanded"), X(), z(), h && h(k, P), a.popperInstance && (Ct(), Re().forEach(function(G) {
        requestAnimationFrame(G._tippy.popperInstance.forceUpdate);
      })), Y("onAfterUpdate", [a, g]);
    }
  }
  function Et(g) {
    a.setProps({
      content: g
    });
  }
  function Tr() {
    var g = a.state.isVisible, k = a.state.isDestroyed, P = !a.state.isEnabled, G = Ce.isTouch && !a.props.touch, I = Wt(a.props.duration, 0, ye.duration);
    if (!(g || k || P || G) && !H().hasAttribute("disabled") && (Y("onShow", [a], !1), a.props.onShow(a) !== !1)) {
      if (a.state.isVisible = !0, D() && (p.style.visibility = "visible"), z(), ae(), a.state.isMounted || (p.style.transition = "none"), D()) {
        var K = W(), ce = K.box, Ze = K.content;
        zt([ce, Ze], 0);
      }
      y = function() {
        var Ue;
        if (!(!a.state.isVisible || d)) {
          if (d = !0, p.offsetHeight, p.style.transition = a.props.moveTransition, D() && a.props.animation) {
            var Gt = W(), St = Gt.box, Je = Gt.content;
            zt([St, Je], I), mt([St, Je], "visible");
          }
          V(), X(), An(Nt, a), (Ue = a.popperInstance) == null || Ue.forceUpdate(), Y("onMount", [a]), a.props.animation && D() && ie(I, function() {
            a.state.isShown = !0, Y("onShown", [a]);
          });
        }
      }, Me();
    }
  }
  function kr() {
    var g = !a.state.isVisible, k = a.state.isDestroyed, P = !a.state.isEnabled, G = Wt(a.props.duration, 1, ye.duration);
    if (!(g || k || P) && (Y("onHide", [a], !1), a.props.onHide(a) !== !1)) {
      if (a.state.isVisible = !1, a.state.isShown = !1, d = !1, s = !1, D() && (p.style.visibility = "hidden"), se(), he(), z(!0), D()) {
        var I = W(), K = I.box, ce = I.content;
        a.props.animation && (zt([K, ce], G), mt([K, ce], "hidden"));
      }
      V(), X(), a.props.animation ? D() && Se(G, a.unmount) : a.unmount();
    }
  }
  function Dr(g) {
    j().addEventListener("mousemove", C), An(Pt, C), C(g);
  }
  function Er() {
    a.state.isVisible && a.hide(), a.state.isMounted && (_t(), Re().forEach(function(g) {
      g._tippy.unmount();
    }), p.parentNode && p.parentNode.removeChild(p), Nt = Nt.filter(function(g) {
      return g !== a;
    }), a.state.isMounted = !1, Y("onHidden", [a]));
  }
  function Sr() {
    a.state.isDestroyed || (a.clearDelayTimeouts(), a.unmount(), $e(), delete e._tippy, a.state.isDestroyed = !0, Y("onDestroy", [a]));
  }
}
function E(e, t) {
  t === void 0 && (t = {});
  var n = ye.plugins.concat(t.plugins || []);
  li();
  var r = Object.assign({}, t, {
    plugins: n
  }), o = oi(e), i = o.reduce(function(s, l) {
    var u = l && yi(l, r);
    return u && s.push(u), s;
  }, []);
  return Yt(e) ? i[0] : i;
}
E.defaultProps = ye;
E.setDefaultProps = vi;
E.currentInput = Ce;
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
  var o = t, i = [], s = [], l, u = n.overrides, d = [], c = !1;
  function m() {
    s = o.map(function(a) {
      return Fe(a.props.triggerTarget || a.reference);
    }).reduce(function(a, b) {
      return a.concat(b);
    }, []);
  }
  function y() {
    i = o.map(function(a) {
      return a.reference;
    });
  }
  function O(a) {
    o.forEach(function(b) {
      a ? b.enable() : b.disable();
    });
  }
  function C(a) {
    return o.map(function(b) {
      var p = b.setProps;
      return b.setProps = function(h) {
        p(h), b.reference === l && a.setProps(h);
      }, function() {
        b.setProps = p;
      };
    });
  }
  function v(a, b) {
    var p = s.indexOf(b);
    if (b !== l) {
      l = b;
      var h = (u || []).concat("content").reduce(function(T, M) {
        return T[M] = o[p].props[M], T;
      }, {});
      a.setProps(Object.assign({}, h, {
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
          p.props.showOnCreate && !c && (c = !0, v(p, i[0]));
        },
        onTrigger: function(p, h) {
          v(p, h.currentTarget);
        }
      };
    }
  }, f = E(qe(), Object.assign({}, Ja(n, ["overrides"]), {
    plugins: [_].concat(n.plugins || []),
    triggerTarget: s,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((r = n.popperOptions) == null ? void 0 : r.modifiers) || [], [bi])
    })
  })), x = f.show;
  f.show = function(a) {
    if (x(), !l && a == null)
      return v(f, i[0]);
    if (!(l && a == null)) {
      if (typeof a == "number")
        return i[a] && v(f, i[a]);
      if (o.indexOf(a) >= 0) {
        var b = a.reference;
        return v(f, b);
      }
      if (i.indexOf(a) >= 0)
        return v(f, a);
    }
  }, f.showNext = function() {
    var a = i[0];
    if (!l)
      return f.show(0);
    var b = i.indexOf(l);
    f.show(i[b + 1] || a);
  }, f.showPrevious = function() {
    var a = i[i.length - 1];
    if (!l)
      return f.show(a);
    var b = i.indexOf(l), p = i[b - 1] || a;
    f.show(p);
  };
  var w = f.setProps;
  return f.setProps = function(a) {
    u = a.overrides || u, w(a);
  }, f.setInstances = function(a) {
    O(!0), d.forEach(function(b) {
      return b();
    }), o = a, O(!1), y(), m(), d = C(f), f.setProps({
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
    var r = jt(t.popper), o = r.box, i = r.content, s = t.props.animateFill ? Oi() : null;
    return {
      onCreate: function() {
        s && (o.insertBefore(s, o.firstElementChild), o.setAttribute("data-animatefill", ""), o.style.overflow = "hidden", t.setProps({
          arrow: !1,
          animation: "shift-away"
        }));
      },
      onMount: function() {
        if (s) {
          var u = o.style.transitionDuration, d = Number(u.replace("ms", ""));
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
    var n = t.reference, r = br(t.props.triggerTarget || n), o = !1, i = !1, s = !0, l = t.props;
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
      o = !0, t.setProps({
        getReferenceClientRect: null
      }), o = !1;
    }
    function y(v) {
      var _ = v.target ? n.contains(v.target) : !0, f = t.props.followCursor, x = v.clientX, w = v.clientY, a = n.getBoundingClientRect(), b = x - a.left, p = w - a.top;
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
      $t = $t.filter(function(v) {
        return v.instance !== t;
      }), $t.filter(function(v) {
        return v.doc === r;
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
        o || x !== void 0 && l.followCursor !== x && (C(), x ? (O(), t.state.isMounted && !i && !u() && d()) : (c(), m()));
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
    var o, i = -1, s = !1, l = [], u = {
      name: "tippyInlinePositioning",
      enabled: !0,
      phase: "afterWrite",
      fn: function(O) {
        var C = O.state;
        r() && (l.indexOf(C.placement) !== -1 && (l = []), o !== C.placement && l.indexOf(C.placement) === -1 && (l.push(C.placement), t.setProps({
          getReferenceClientRect: function() {
            return d(C.placement);
          }
        })), o = C.placement);
      }
    };
    function d(y) {
      return Ei(yr(y), n.getBoundingClientRect(), at(n.getClientRects()), i);
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
          var v = at(t.reference.getClientRects()), _ = v.find(function(x) {
            return x.left - 2 <= C.clientX && x.right + 2 >= C.clientX && x.top - 2 <= C.clientY && x.bottom + 2 >= C.clientY;
          }), f = v.indexOf(_);
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
      var o = n[0], i = n[n.length - 1], s = e === "top", l = o.top, u = i.bottom, d = s ? o.left : i.left, c = s ? o.right : i.right, m = c - d, y = u - l;
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
      })), v = n.filter(function(p) {
        return e === "left" ? p.left === O : p.right === C;
      }), _ = v[0].top, f = v[v.length - 1].bottom, x = O, w = C, a = w - x, b = f - _;
      return {
        top: _,
        bottom: f,
        left: x,
        right: w,
        width: a,
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
    function o() {
      return t.popperInstance ? t.popperInstance.state.elements.reference : n;
    }
    function i(d) {
      return t.props.sticky === !0 || t.props.sticky === d;
    }
    var s = null, l = null;
    function u() {
      var d = i("reference") ? o().getBoundingClientRect() : null, c = i("popper") ? r.getBoundingClientRect() : null;
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
  const r = jn(), o = U(), i = U({
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
    !o.value || o.value.setProps(c(t));
  }, y = () => {
    !o.value || !t.content || o.value.setContent(d(t.content));
  }, O = (h) => {
    var T;
    (T = o.value) === null || T === void 0 || T.setContent(d(h));
  }, C = (h) => {
    var T;
    (T = o.value) === null || T === void 0 || T.setProps(c(h));
  }, v = () => {
    var h;
    o.value && (o.value.destroy(), o.value = void 0), l = null, (h = s.value) === null || h === void 0 || h.unmount(), s.value = void 0;
  }, _ = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.show();
  }, f = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.hide();
  }, x = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.disable(), i.value.isEnabled = !1;
  }, w = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.enable(), i.value.isEnabled = !0;
  }, a = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.unmount();
  }, b = () => {
    if (!e)
      return;
    let h = Ie(e) ? e.value : e;
    typeof h == "function" && (h = h()), h && (o.value = E(h, c(t)), h.$tippy = p);
  }, p = {
    tippy: o,
    refresh: m,
    refreshContent: y,
    setContent: O,
    setProps: C,
    destroy: v,
    hide: f,
    show: _,
    disable: x,
    enable: w,
    unmount: a,
    mount: b,
    state: i
  };
  return n.mount && (r ? r.isMounted ? b() : Te(b) : b()), r && Rr(() => {
    v();
  }), Ie(t) || dn(t) ? Xe(t, m, { immediate: !1 }) : Ie(t.content) && Xe(t.content, y, { immediate: !1 }), p;
}
function Ai(e, t) {
  const n = U();
  return Te(() => {
    const o = (Array.isArray(e) ? e.map((i) => i.value) : typeof e == "function" ? e() : e.value).map((i) => i instanceof Element ? i._tippy : i).filter(Boolean);
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
    const o = U(), i = U(), s = U(), l = U(!1), u = () => {
      let O = { ...e };
      for (const C of ["to", "tag", "contentTag", "contentClass"])
        O.hasOwnProperty(C) && delete O[C];
      return O;
    };
    let d = () => Pi(o);
    e.to && (typeof Element < "u" && e.to instanceof Element ? d = () => e.to : e.to === "parent" ? d = () => {
      let O = o.value;
      return O || (O = o.value = i.value.parentElement), O;
    } : (typeof e.to == "string" || e.to instanceof String) && (d = () => document.querySelector(e.to)));
    const c = _r(d, u());
    let m = t.content;
    !m && e.to === "parent" && (m = t.default), Te(() => {
      l.value = !0, yt(() => {
        m && c.setContent(() => s.value);
      });
    }), Xe(c.state, () => {
      n("state", $(c.state));
    }, { immediate: !0, deep: !0 }), Xe(() => e, () => {
      c.setProps(u()), m && c.setContent(() => s.value);
    }, { deep: !0 });
    let y = Ir({
      elem: o,
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
        if (!o.value) {
          const x = Ne("span", {
            ref: i,
            "data-v-tippy": "",
            style: { display: "none" }
          });
          f.push(x);
        }
        return C && f.push(C), f;
      }
      const v = t.default ? t.default(y) : [];
      if (!e.tag) {
        const f = Ne(v[0], {
          ref: o,
          "data-v-tippy": ""
        });
        return C ? [f, C] : f;
      }
      const _ = (typeof e.tag == "string", e.tag);
      return Ne(_, { ref: o, "data-v-tippy": "" }, C ? [v, C] : v);
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
const Ri = { class: "g-gantt-tooltip-container" }, Ii = { class: "g-gantt-tooltip-area-container" }, ji = { class: "g-gantt-tooltip-area" }, Hi = { class: "g-gantt-tooltip-category-container" }, Yi = { class: "g-gantt-tooltip-category" }, Gi = { class: "g-gantt-tooltip-promotion-title" }, Ui = { class: "g-gantt-tooltip-promotion-time-container" }, Wi = { class: "g-gantt-tooltip-time" }, zi = "cadetblue", Fi = /* @__PURE__ */ ee({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    config: {},
    toDayjs: {}
  },
  setup(e) {
    Hn((m) => ({
      "4613e272": i.value
    }));
    const t = Pe("iconComponent"), n = e, { bar: r } = vt(n), o = q(() => {
      var y, O, C;
      const m = (C = (O = (y = r.value) == null ? void 0 : y.ganttBarConfig) == null ? void 0 : O.tooltipInfo) == null ? void 0 : C.publishedAt;
      return m ? !Q(new Date(m * 1e3)).isAfter(new Date()) : !1;
    }), i = U(o.value ? "pointer" : "default"), s = q(
      () => {
        var m, y;
        return ((y = (m = r == null ? void 0 : r.value) == null ? void 0 : m.ganttBarConfig.style) == null ? void 0 : y.backgroundColor) || zi;
      }
    ), l = () => {
      var y, O;
      const m = (O = (y = r.value) == null ? void 0 : y.ganttBarConfig.tooltipInfo) == null ? void 0 : O.promotionUrl;
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
      const m = n.toDayjs(u.value).format("DD.MM."), y = n.toDayjs(d.value).format("DD.MM.YYYY");
      return `${m} \u2013 ${y}`;
    });
    return (m, y) => {
      var O, C, v, _, f, x, w, a, b, p, h, T;
      return S(), L("div", {
        class: "g-gantt-tooltip",
        style: F({
          fontFamily: m.config.font.value
        }),
        onClick: l
      }, [
        B("div", Ri, [
          B("div", Ii, [
            B("span", ji, te((v = (C = (O = $(r)) == null ? void 0 : O.ganttBarConfig) == null ? void 0 : C.tooltipInfo) == null ? void 0 : v.areaName), 1),
            $(r) ? (S(), J(je($(t)), {
              key: 0,
              name: (x = (f = (_ = $(r)) == null ? void 0 : _.ganttBarConfig) == null ? void 0 : f.tooltipInfo) == null ? void 0 : x.icon,
              size: "24"
            }, null, 8, ["name"])) : de("", !0)
          ]),
          B("div", Hi, [
            B("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",
              style: F({ background: s.value })
            }, null, 4),
            B("span", Yi, te((b = (a = (w = $(r)) == null ? void 0 : w.ganttBarConfig) == null ? void 0 : a.tooltipInfo) == null ? void 0 : b.categoryName), 1),
            B("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",
              style: F({ background: s.value })
            }, null, 4)
          ]),
          B("p", Gi, te((T = (h = (p = $(r)) == null ? void 0 : p.ganttBarConfig) == null ? void 0 : h.tooltipInfo) == null ? void 0 : T.title), 1),
          B("div", Ui, [
            B("p", Wi, [
              Z(m.$slots, "default", {
                bar: $(r),
                barStart: u.value,
                barEnd: d.value
              }, () => [
                pt(te(c.value), 1)
              ], !0)
            ]),
            o.value ? (S(), J(je($(t)), {
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
const Ni = /* @__PURE__ */ wt(Fi, [["__scopeId", "data-v-00b81e26"]]), Vi = ["id"], qi = { class: "g-gantt-bar-label" }, Xi = ["innerHTML"], Qi = `
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
      "267f9539": $(o)
    }));
    const t = e, n = Li(), { bar: r } = vt(t), o = (R = t.bar.ganttBarConfig.style) == null ? void 0 : R.backgroundColor, { mapTimeToPosition: i, mapPositionToTime: s } = en(), { font: l, barEnd: u, barStart: d, rowHeight: c, width: m, chartStart: y, chartEnd: O, chartSize: C } = He(), v = U(), { toDayjs: _ } = Jt(), f = U(!1), x = Pe("iconComponent"), w = q(() => r.value.ganttBarConfig), a = Pe(Jn), b = (A) => {
      var N, z;
      const D = document.querySelector(".tippy-svg-arrow");
      if (!D)
        return;
      const j = ((N = D.style.transform) != null ? N : "").match(/translate3d\((-?\d+)/), W = (z = document.querySelector(".tippy-content")) == null ? void 0 : z.clientHeight;
      if (A === "bottom" && j) {
        const Y = D.firstElementChild;
        Y.style.transform = "rotateX(180deg)";
        const V = parseInt(j[1]);
        D.style.transform = `translate3d(${V}px, -${W + 6}px, 0px)`;
      }
      if (A === "top" && j) {
        const Y = parseInt(j[1]);
        D.style.transform = `translate3d(${Y}px, -1px, 0px)`;
      }
    };
    Te(() => {
      !(v != null && v.value) || _r(v.value, {
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
      var j, W;
      if (A.preventDefault(), A.type === "mousedown" || !(a != null && a.value))
        return;
      const D = (W = (j = a == null ? void 0 : a.value) == null ? void 0 : j[0]) == null ? void 0 : W.getBoundingClientRect();
      if (!D)
        return;
      const H = s(A.clientX - D.left);
      n(A, r.value, H);
    }, h = U(0), T = U(0), M = q(() => {
      const A = new Date(r.value.myBeginDate).getTime(), D = new Date(r.value.myEndDate).getTime();
      if (Math.abs(A - D) / (1e3 * 60 * 60 * 24) <= 2)
        return 0;
      const W = 6;
      return T.value - h.value - W + W;
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
      ref: v,
      class: Lt(["g-gantt-bar", w.value.asArrow ? "g-gantt-bar-is-arrow" : "", w.value.class || ""]),
      style: F({
        ...w.value.style,
        position: "absolute",
        top: `${$(c) * 0.1}px`,
        left: `${h.value}px`,
        width: `${M.value}px`,
        height: `${$(c) * 0.8}px`,
        zIndex: f.value ? 3 : 2
      }),
      onClick: p,
      onContextmenu: p,
      onDblclick: p,
      onMousedown: p,
      onMouseenter: p,
      onMouseleave: p
    }, [
      B("div", qi, [
        Z(A.$slots, "default", { bar: $(r) }, () => [
          B("div", null, te(w.value.label || ""), 1),
          w.value.html ? (S(), L("div", {
            key: 0,
            innerHTML: w.value.html
          }, null, 8, Xi)) : de("", !0)
        ])
      ]),
      (S(), J(je($(x)), {
        "size-s": "16",
        "size-m": "16",
        class: "g-gantt-bar-arrow",
        "size-l": "16",
        name: "gant-arrow",
        size: "16"
      })),
      w.value.hasHandles ? (S(), L(ne, { key: 0 }, [
        D[0] || (D[0] = B("div", { class: "g-gantt-bar-handle-left" }, null, -1)),
        D[1] || (D[1] = B("div", { class: "g-gantt-bar-handle-right" }, null, -1))
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
    const n = e, r = U([]), o = t, { rowHeight: i, colors: s, labelColumnTitle: l } = He(), { highlightOnHover: u } = vt(n), d = U(!1), c = q(() => ({
      height: `${i.value}px`,
      background: (u == null ? void 0 : u.value) && d.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: m } = en(), y = Hr("barContainer");
    Bt(Jn, y);
    const O = (w) => {
      var h, T;
      const a = (T = (h = y.value) == null ? void 0 : h[0]) == null ? void 0 : T.getBoundingClientRect();
      if (!a) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const b = w.clientX - a.left, p = m(b);
      o("drop", { e: w, datetime: p });
    };
    function C(w, a, b, p) {
      return Math.max(b.valueOf() - a.valueOf(), w.valueOf() - p.valueOf()) / 864e5 < 3;
    }
    function v(w, a, b, p) {
      return w <= p && b <= a || C(w, a, b, p);
    }
    function _(w) {
      const a = [];
      for (let b = 0; b < w.length; b++)
        for (let p = b + 1; p < w.length; p++)
          v(
            w[b].myBeginDate,
            w[b].myEndDate,
            w[p].myBeginDate,
            w[p].myEndDate
          ) && a.push(Q(w[b].myEndDate).isAfter(w[p].myEndDate) ? w[b] : w[p]);
      return a;
    }
    const f = () => {
      const w = [], a = (b) => {
        if (!b || b.length === 0)
          return;
        const p = _(b);
        if (p.length > 0) {
          const h = b.filter((M) => !p.includes(M)), T = b.filter((M) => p.includes(M));
          w.push(h), a(T);
        } else
          w.push(b);
      };
      return a(n.bars), w;
    };
    Te(() => {
      r.value = f();
    });
    const x = (w) => !w || /^\s*$/.test(w);
    return (w, a) => (S(), L("div", null, [
      (S(!0), L(ne, null, be(r.value, (b) => (S(), L("div", {
        key: b[0].ganttBarConfig.id,
        style: F(c.value),
        class: "g-gantt-row",
        onDragleave: a[0] || (a[0] = (p) => d.value = !1),
        onDrop: a[1] || (a[1] = (p) => O(p)),
        onMouseleave: a[2] || (a[2] = (p) => d.value = !1),
        onMouseover: a[3] || (a[3] = (p) => d.value = !0),
        onDragover: a[4] || (a[4] = Yr((p) => d.value = !0, ["prevent"]))
      }, [
        !x(w.label) && !$(l) ? (S(), L("div", {
          key: 0,
          style: F({ background: $(s).primary, color: $(s).text }),
          class: "g-gantt-row-label"
        }, [
          Z(w.$slots, "label", {}, () => [
            pt(te(w.label), 1)
          ])
        ], 4)) : de("", !0),
        B("div", Gr({
          ref_for: !0,
          ref: "barContainer",
          class: "g-gantt-row-bars-container"
        }, w.$attrs), [
          ft(Ur, {
            name: "bar-transition sys",
            tag: "div",
            class: "transition-group"
          }, {
            default: ze(() => [
              (S(!0), L(ne, null, be(b, (p) => (S(), J(Ki, {
                key: p.ganttBarConfig.id,
                bar: p
              }, {
                default: ze(() => [
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
  Q.extend(zr), Q.extend(Fr), Q.extend(zn), Q.extend(qr), Q.extend(Nr), Q.extend(Wr), Q.extend(Vr);
}
const ns = {
  install(e, t) {
    Ji(), e.component("GGanttChart", No), e.component("GGanttRow", Zi);
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
  No as GGanttChart,
  Zi as GGanttRow,
  ns as default,
  Ji as extendDayjs,
  ns as ganttastic
};
