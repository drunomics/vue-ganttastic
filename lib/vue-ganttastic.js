import Q from "dayjs";
import { unref as L, getCurrentScope as Lr, onScopeDispose as Rr, getCurrentInstance as Yn, onMounted as be, nextTick as yt, ref as G, watch as je, inject as jt, computed as q, defineComponent as Z, onUnmounted as Un, defineAsyncComponent as fn, useAttrs as Ir, openBlock as A, createBlock as Ce, mergeProps as Wn, createElementBlock as R, Fragment as K, createElementVNode as B, normalizeStyle as U, createVNode as ke, toDisplayString as te, renderList as we, renderSlot as ee, createCommentVNode as ie, createTextVNode as pt, useCssVars as Jt, onBeforeMount as jr, toRefs as vt, useSlots as Hr, provide as $t, normalizeClass as Bt, withCtx as ze, shallowRef as Gr, isRef as Ie, isReactive as pn, reactive as Yr, h as Ne, isVNode as Ur, createApp as vn, useTemplateRef as Wr, withModifiers as zr, TransitionGroup as Fr } from "vue";
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "day";
    return function(r, o, i) {
      var a = function(d) {
        return d.add(4 - d.isoWeekday(), n);
      }, l = o.prototype;
      l.isoWeekYear = function() {
        return a(this).year();
      }, l.isoWeek = function(d) {
        if (!this.$utils().u(d))
          return this.add(7 * (d - this.isoWeek()), n);
        var c, b, w, x, O = a(this), v = (c = this.isoWeekYear(), b = this.$u, w = (b ? i.utc : i)().year(c).startOf("year"), x = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (x += 7), w.add(x, n));
        return O.diff(v, "week") + 1;
      }, l.isoWeekday = function(d) {
        return this.$utils().u(d) ? this.day() || 7 : this.day(this.day() % 7 ? d : d - 7);
      };
      var u = l.startOf;
      l.startOf = function(d, c) {
        var b = this.$utils(), w = !!b.u(c) || c;
        return b.p(d) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : u.bind(this)(d, c);
      };
    };
  });
})(zn);
const Nr = zn.exports;
var Fn = { exports: {} };
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
})(Fn);
const Vr = Fn.exports;
var Nn = { exports: {} };
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
})(Nn);
const qr = Nn.exports;
var Vn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r, o) {
      r.prototype.isBetween = function(i, a, l, u) {
        var d = o(i), c = o(a), b = (u = u || "()")[0] === "(", w = u[1] === ")";
        return (b ? this.isAfter(d, l) : !this.isBefore(d, l)) && (w ? this.isBefore(c, l) : !this.isAfter(c, l)) || (b ? this.isBefore(d, l) : !this.isAfter(d, l)) && (w ? this.isAfter(c, l) : !this.isBefore(c, l));
      };
    };
  });
})(Vn);
const qn = Vn.exports;
var Xn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = "week", r = "year";
    return function(o, i, a) {
      var l = i.prototype;
      l.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var d = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var c = a(this).startOf(r).add(1, r).date(d), b = a(this).endOf(n);
          if (c.isBefore(b))
            return 1;
        }
        var w = a(this).startOf(r).date(d).startOf(n).subtract(1, "millisecond"), x = this.diff(w, n, !0);
        return x < 0 ? a(this).startOf("week").week() : Math.ceil(x);
      }, l.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(Xn);
const Xr = Xn.exports;
var Qn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    return function(n, r, o) {
      var i = r.prototype, a = i.format;
      o.en.ordinal = function(l) {
        var u = ["th", "st", "nd", "rd"], d = l % 100;
        return "[" + l + (u[(d - 20) % 10] || u[d] || u[0]) + "]";
      }, i.format = function(l) {
        var u = this, d = this.$locale();
        if (!this.isValid())
          return a.bind(this)(l);
        var c = this.$utils(), b = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(w) {
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
        return a.bind(this)(b);
      };
    };
  });
})(Qn);
const Qr = Qn.exports;
var Kn = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Qe, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d\d/, i = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(_) {
        this[v] = +_;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var p = _.match(/([+-]|\d\d)/g), f = 60 * p[1] + (+p[2] || 0);
        return f === 0 ? 0 : p[0] === "+" ? -f : f;
      }(v);
    }], b = function(v) {
      var _ = l[v];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, w = function(v, _) {
      var p, f = l.meridiem;
      if (f) {
        for (var C = 1; C <= 24; C += 1)
          if (v.indexOf(f(C, 0, _)) > -1) {
            p = C > 12;
            break;
          }
      } else
        p = v === (_ ? "pm" : "PM");
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
    }], s: [i, d("seconds")], ss: [i, d("seconds")], m: [i, d("minutes")], mm: [i, d("minutes")], H: [i, d("hours")], h: [i, d("hours")], HH: [i, d("hours")], hh: [i, d("hours")], D: [i, d("day")], DD: [o, d("day")], Do: [a, function(v) {
      var _ = l.ordinal, p = v.match(/\d+/);
      if (this.day = p[0], _)
        for (var f = 1; f <= 31; f += 1)
          _(f).replace(/\[|\]/g, "") === v && (this.day = f);
    }], M: [i, d("month")], MM: [o, d("month")], MMM: [a, function(v) {
      var _ = b("months"), p = (b("monthsShort") || _.map(function(f) {
        return f.slice(0, 3);
      })).indexOf(v) + 1;
      if (p < 1)
        throw new Error();
      this.month = p % 12 || p;
    }], MMMM: [a, function(v) {
      var _ = b("months").indexOf(v) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, d("year")], YY: [o, function(v) {
      this.year = u(v);
    }], YYYY: [/\d{4}/, d("year")], Z: c, ZZ: c };
    function O(v) {
      var _, p;
      _ = v, p = l && l.formats;
      for (var f = (v = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function($, E, S) {
        var M = S && S.toUpperCase();
        return E || p[S] || n[S] || p[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, H, z) {
          return H || z.slice(1);
        });
      })).match(r), C = f.length, s = 0; s < C; s += 1) {
        var m = f[s], y = x[m], h = y && y[0], T = y && y[1];
        f[s] = T ? { regex: h, parser: T } : m.replace(/^\[|\]$/g, "");
      }
      return function($) {
        for (var E = {}, S = 0, M = 0; S < C; S += 1) {
          var I = f[S];
          if (typeof I == "string")
            M += I.length;
          else {
            var H = I.regex, z = I.parser, F = $.slice(M), N = H.exec(F)[0];
            z.call(E, N), $ = $.replace(N, "");
          }
        }
        return function(W) {
          var V = W.afternoon;
          if (V !== void 0) {
            var X = W.hours;
            V ? X < 12 && (W.hours += 12) : X === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(E), E;
      };
    }
    return function(v, _, p) {
      p.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
      var f = _.prototype, C = f.parse;
      f.parse = function(s) {
        var m = s.date, y = s.utc, h = s.args;
        this.$u = y;
        var T = h[1];
        if (typeof T == "string") {
          var $ = h[2] === !0, E = h[3] === !0, S = $ || E, M = h[2];
          E && (M = h[2]), l = this.$locale(), !$ && M && (l = p.Ls[M]), this.$d = function(F, N, W) {
            try {
              if (["x", "X"].indexOf(N) > -1)
                return new Date((N === "X" ? 1e3 : 1) * F);
              var V = O(N)(F), X = V.year, se = V.month, le = V.day, Ae = V.hours, ge = V.minutes, oe = V.seconds, he = V.milliseconds, Se = V.zone, ae = new Date(), Oe = le || (X || se ? 1 : ae.getDate()), ue = X || ae.getFullYear(), me = 0;
              X && !se || (me = se > 0 ? se - 1 : ae.getMonth());
              var $e = Ae || 0, Me = ge || 0, Be = oe || 0, Le = he || 0;
              return Se ? new Date(Date.UTC(ue, me, Oe, $e, Me, Be, Le + 60 * Se.offset * 1e3)) : W ? new Date(Date.UTC(ue, me, Oe, $e, Me, Be, Le)) : new Date(ue, me, Oe, $e, Me, Be, Le);
            } catch {
              return new Date("");
            }
          }(m, T, y), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), S && m != this.format(T) && (this.$d = new Date("")), l = {};
        } else if (T instanceof Array)
          for (var I = T.length, H = 1; H <= I; H += 1) {
            h[1] = T[H - 1];
            var z = p.apply(this, h);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            H === I && (this.$d = new Date(""));
          }
        else
          C.call(this, s);
      };
    };
  });
})(Kn);
const Kr = Kn.exports;
var gn;
const bt = typeof window < "u";
bt && ((gn = window == null ? void 0 : window.navigator) == null ? void 0 : gn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Zr(e) {
  return typeof e == "function" ? e() : L(e);
}
function Jr(e) {
  return e;
}
function eo(e) {
  return Lr() ? (Rr(e), !0) : !1;
}
function to(e, t = !0) {
  Yn() ? be(e) : t ? e() : yt(e);
}
function Zn(e) {
  var t;
  const n = Zr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const no = bt ? window : void 0;
bt && window.document;
bt && window.navigator;
bt && window.location;
function ro(e, t = !1) {
  const n = G(), r = () => n.value = Boolean(e());
  return r(), to(r, t), n;
}
const Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qt = "__vueuse_ssr_handlers__";
Vt[qt] = Vt[qt] || {};
Vt[qt];
var hn = Object.getOwnPropertySymbols, oo = Object.prototype.hasOwnProperty, ao = Object.prototype.propertyIsEnumerable, io = (e, t) => {
  var n = {};
  for (var r in e)
    oo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && hn)
    for (var r of hn(e))
      t.indexOf(r) < 0 && ao.call(e, r) && (n[r] = e[r]);
  return n;
};
function so(e, t, n = {}) {
  const r = n, { window: o = no } = r, i = io(r, ["window"]);
  let a;
  const l = ro(() => o && "ResizeObserver" in o), u = () => {
    a && (a.disconnect(), a = void 0);
  }, d = je(() => Zn(e), (b) => {
    u(), l.value && o && b && (a = new ResizeObserver(t), a.observe(b, i));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), d();
  };
  return eo(c), {
    isSupported: l,
    stop: c
  };
}
function Jn(e, t = { width: 0, height: 0 }, n = {}) {
  const r = G(t.width), o = G(t.height);
  return so(e, ([i]) => {
    r.value = i.contentRect.width, o.value = i.contentRect.height;
  }, n), je(() => Zn(e), (i) => {
    r.value = i ? t.width : 0, o.value = i ? t.height : 0;
  }), {
    width: r,
    height: o
  };
}
var mn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(mn || (mn = {}));
var lo = Object.defineProperty, yn = Object.getOwnPropertySymbols, uo = Object.prototype.hasOwnProperty, co = Object.prototype.propertyIsEnumerable, bn = (e, t, n) => t in e ? lo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fo = (e, t) => {
  for (var n in t || (t = {}))
    uo.call(t, n) && bn(e, n, t[n]);
  if (yn)
    for (var n of yn(t))
      co.call(t, n) && bn(e, n, t[n]);
  return e;
};
const po = {
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
fo({
  linear: Jr
}, po);
const wn = {
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
}, er = Symbol("CHART_ROWS_KEY"), tr = Symbol("CONFIG_KEY"), nr = Symbol("EMIT_BAR_EVENT_KEY"), rr = Symbol("BAR_CONTAINER_KEY");
function He() {
  const e = jt(tr);
  if (!e)
    throw Error("Failed to inject config!");
  return e;
}
const or = "YYYY-MM-DD HH:mm";
function en(e = He()) {
  const { chartStart: t, chartEnd: n, barStart: r, barEnd: o, dateFormat: i } = e, a = q(() => u(t.value)), l = q(() => u(n.value)), u = (c, b) => {
    let w;
    if (b !== void 0 && typeof c != "string" && !(c instanceof Date) && (w = b === "start" ? c[r.value] : c[o.value]), typeof c == "string")
      w = c;
    else if (c instanceof Date)
      return Q(c);
    const x = i.value || or;
    return Q(w, x, !0);
  };
  return {
    chartStartDayjs: a,
    chartEndDayjs: l,
    toDayjs: u,
    format: (c, b) => b === !1 ? c instanceof Date ? c : Q(c).toDate() : (typeof c == "string" || c instanceof Date ? u(c) : c).format(b)
  };
}
const xn = (e, t) => {
  const n = e[t];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((r, o) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(o.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
}, Xe = /* @__PURE__ */ Z({
  __name: "UiIcon",
  props: {
    name: {},
    iconClass: {},
    size: {}
  },
  setup(e) {
    const t = e, n = G("desktop"), r = G(!1), o = () => {
      window.matchMedia("(min-width: 1200px)").matches ? n.value = "desktop" : window.matchMedia("(min-width: 700px)").matches ? n.value = "tablet" : n.value = "mobile", r.value = !0;
    };
    let i;
    be(() => {
      i && i.disconnect(), (i = new ResizeObserver(o)).observe(document.body, { box: "border-box" });
    }), Un(() => {
      i == null || i.disconnect();
    });
    let a = fn(() => xn(/* @__PURE__ */ Object.assign({ "../assets/arrow-head.svg": () => import("./arrow-head.6bce18ac.js"), "../assets/car_add-24.svg": () => import("./car_add-24.58ca91fe.js"), "../assets/car_add-32.svg": () => import("./car_add-32.55a9157d.js"), "../assets/chevron-left-16.svg": () => import("./chevron-left-16.5c4eb924.js"), "../assets/chevron-left-24.svg": () => import("./chevron-left-24.8b32798a.js"), "../assets/chevron-left-32.svg": () => import("./chevron-left-32.d67ce714.js"), "../assets/chevron-left-48.svg": () => import("./chevron-left-48.2238b996.js"), "../assets/chevron-right-16.svg": () => import("./chevron-right-16.5474ca01.js"), "../assets/chevron-right-24.svg": () => import("./chevron-right-24.bddc526e.js"), "../assets/chevron-right-32.svg": () => import("./chevron-right-32.8f783d1a.js"), "../assets/chevron-right-48.svg": () => import("./chevron-right-48.71aa1fb3.js"), "../assets/mailings-24.svg": () => import("./mailings-24.cc3b283f.js"), "../assets/mailings-32.svg": () => import("./mailings-32.261b66e2.js"), "../assets/marker-current-date-16.svg": () => import("./marker-current-date-16.b2dde6d2.js"), "../assets/wheel-24.svg": () => import("./wheel-24.5ca38bf9.js"), "../assets/wheel-32.svg": () => import("./wheel-32.1277a29e.js") }), `../assets/${t.name}-${t.size}.svg`));
    const l = Ir();
    return je(
      () => t.name,
      (u) => {
        !u || (a = fn(() => xn(/* @__PURE__ */ Object.assign({ "../assets/arrow-head.svg": () => import("./arrow-head.6bce18ac.js"), "../assets/car_add-24.svg": () => import("./car_add-24.58ca91fe.js"), "../assets/car_add-32.svg": () => import("./car_add-32.55a9157d.js"), "../assets/chevron-left-16.svg": () => import("./chevron-left-16.5c4eb924.js"), "../assets/chevron-left-24.svg": () => import("./chevron-left-24.8b32798a.js"), "../assets/chevron-left-32.svg": () => import("./chevron-left-32.d67ce714.js"), "../assets/chevron-left-48.svg": () => import("./chevron-left-48.2238b996.js"), "../assets/chevron-right-16.svg": () => import("./chevron-right-16.5474ca01.js"), "../assets/chevron-right-24.svg": () => import("./chevron-right-24.bddc526e.js"), "../assets/chevron-right-32.svg": () => import("./chevron-right-32.8f783d1a.js"), "../assets/chevron-right-48.svg": () => import("./chevron-right-48.71aa1fb3.js"), "../assets/mailings-24.svg": () => import("./mailings-24.cc3b283f.js"), "../assets/mailings-32.svg": () => import("./mailings-32.261b66e2.js"), "../assets/marker-current-date-16.svg": () => import("./marker-current-date-16.b2dde6d2.js"), "../assets/wheel-24.svg": () => import("./wheel-24.5ca38bf9.js"), "../assets/wheel-32.svg": () => import("./wheel-32.1277a29e.js") }), `../assets/${u}-${t.size}.svg`)));
      }
    ), (u, d) => (A(), Ce(L(a), Wn({
      width: u.size,
      height: u.size
    }, L(l)), null, 16, ["width", "height"]));
  }
}), vo = { class: "g-gantt-grid-current-date" }, go = /* @__PURE__ */ Z({
  __name: "GGanttGridCurrentDay",
  props: {
    parentWidth: {}
  },
  setup(e) {
    const t = e, n = new Date(), r = new Date(n.getFullYear(), 0, 1), o = q(() => Math.ceil((new Date(n.getTime()).valueOf() - r.valueOf()) / 864e5)), i = q(() => t.parentWidth / 52 / 7), a = G(o.value >= 365 - 10), l = q(() => o.value >= 365 - 10 ? 0 : i.value * o.value - 33), u = q(() => o.value < 10 ? 0 : i.value * o.value - 33);
    return (d, c) => (A(), R(K, null, [
      B("div", {
        style: U({
          position: "absolute",
          top: "-65px",
          zIndex: 3,
          left: i.value * o.value - 7.5 + "px"
        })
      }, [
        ke(Xe, {
          name: "marker-current-date",
          size: "16",
          style: {
            color: "#C882BE"
          }
        })
      ], 4),
      B("div", {
        style: U({
          position: "absolute",
          top: "-52px",
          left: a.value ? "unset" : u.value + "px",
          right: a.value ? l.value + "px" : "unset",
          width: "68px",
          height: "20px",
          backgroundColor: "white",
          padding: "2px",
          borderRadius: "4px"
        })
      }, [
        B("p", vo, te(L(Q)(new Date()).format("DD.MM.YYYY")), 1)
      ], 4),
      B("div", {
        style: U({
          position: "absolute",
          width: "2px",
          height: "100%",
          left: i.value * o.value + "px",
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
}, ho = /* @__PURE__ */ it(go, [["__scopeId", "data-v-9729fb07"]]);
function ar() {
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
  }), i = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "W",
    month: "MMM",
    year: "YYYY"
  }, a = q(() => {
    const l = [], u = [], d = n.value.diff(t.value, "minutes", !0), c = r.value, b = o.value;
    let w = t.value, x = t.value;
    for (; x.isSameOrBefore(n.value); ) {
      const O = x.endOf(b), _ = O.isAfter(n.value) ? n.value.diff(x, "minutes", !0) / d * 100 : O.diff(x, "minutes", !0) / d * 100;
      u.push({
        label: x.format(i[e == null ? void 0 : e.value]),
        value: String(x),
        date: x.toDate(),
        width: String(_) + "%"
      }), x = O.add(1, b === "isoWeek" ? "week" : b).startOf(b);
    }
    for (; w.isSameOrBefore(n.value); ) {
      const O = w.endOf(c), _ = O.isAfter(n.value) ? n.value.diff(w, "minutes", !0) / d * 100 : O.diff(w, "minutes", !0) / d * 100;
      l.push({
        label: w.format(i[c]),
        value: String(w),
        date: w.toDate(),
        width: String(_) + "%"
      }), w = O.add(1, c).startOf(c);
    }
    return { upperUnits: l, lowerUnits: u };
  });
  return a.value.lowerUnits[0].label === "53" && a.value.lowerUnits.splice(0, 1), a.value.lowerUnits[a.value.lowerUnits.length - 1].label === "1" && a.value.lowerUnits.splice(a.value.lowerUnits.length - 1, 1), a.value.lowerUnits[a.value.lowerUnits.length - 1].label === "14" && a.value.lowerUnits.splice(a.value.lowerUnits.length - 1, 1), {
    timeaxisUnits: a
  };
}
const mo = /* @__PURE__ */ Z({
  __name: "GGanttGridAreaDivider",
  props: {
    areaHeights: {}
  },
  setup(e) {
    const { timeaxisUnits: t } = ar(), n = (o, i) => i === t.value.lowerUnits.length - 1 ? "unset" : o && Number(o) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2", r = (o) => {
      const i = +o >= 14 && +o <= 26, a = +o >= 40 && +o <= 52;
      return i || a ? "#f7f8f9" : "#ffffff";
    };
    return (o, i) => (A(), R(K, null, [
      (A(!0), R(K, null, we(o.areaHeights, (a) => (A(), R("div", {
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
      (A(!0), R(K, null, we(L(t).lowerUnits, ({ label: a, width: l }, u) => (A(), R("div", {
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
}), yo = /* @__PURE__ */ Z({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(e) {
    const t = G(null), { width: n } = Jn(t), r = G([]);
    return be(() => {
      yt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((i) => {
          r.value.push(i.clientHeight);
        }), r.value.pop();
      });
    }), (o, i) => (A(), R("div", {
      ref_key: "gridContainer",
      ref: t,
      class: "g-grid-container"
    }, [
      ke(ho, { "parent-width": L(n) }, null, 8, ["parent-width"]),
      ke(mo, { "area-heights": r.value }, null, 8, ["area-heights"])
    ], 512));
  }
});
const On = /* @__PURE__ */ it(yo, [["__scopeId", "data-v-a719d7c7"]]);
function bo() {
  const e = jt(er);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const wo = { class: "g-label-column-rows" }, xo = /* @__PURE__ */ Z({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: t, colors: n, labelColumnTitle: r, rowHeight: o } = He(), i = bo();
    return (a, l) => (A(), R("div", {
      class: "g-label-column",
      style: U({ fontFamily: L(t), color: L(n).text })
    }, [
      ee(a.$slots, "label-column-title", {}, () => [
        B("div", {
          class: "g-label-column-header",
          style: U({ background: L(n).primary })
        }, te(L(r)), 5)
      ]),
      B("div", wo, [
        (A(!0), R(K, null, we(L(i)(), ({ label: u }, d) => (A(), R("div", {
          key: `${u}_${d}`,
          class: "g-label-column-row",
          style: U({
            background: d % 2 === 0 ? L(n).ternary : L(n).quartenary,
            height: `${L(o)}px`
          })
        }, [
          ee(a.$slots, "label-column-row", { label: u }, () => [
            B("span", null, te(u), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const Oo = { class: "g-timeaxis" }, _o = { class: "g-timeunits-container g-timeunits-low" }, Co = {
  key: 0,
  class: "g-timeunit-low-kw"
}, To = { class: "g-timeunits-container g-timeunits-upper" }, ko = /* @__PURE__ */ Z({
  __name: "GGanttTimeaxis",
  setup(e) {
    const { precision: t, colors: n } = He(), { timeaxisUnits: r } = ar();
    return (o, i) => (A(), R("div", Oo, [
      B("div", _o, [
        (A(!0), R(K, null, we(L(r).lowerUnits, ({ label: a, value: l, date: u, width: d }, c) => (A(), R("div", {
          key: a,
          class: "g-timeunit g-timeunit-low",
          style: U({
            flexDirection: L(t) === "hour" ? "column" : "row",
            alignItems: L(t) === "hour" ? "" : "center",
            width: d
          })
        }, [
          c === 0 ? (A(), R("span", Co, "KW")) : ie("", !0),
          ee(o.$slots, "timeunit", {
            label: a,
            value: l,
            date: u
          }, () => [
            pt(te(a), 1)
          ]),
          L(t) === "hour" ? (A(), R("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: U({ background: L(n).text })
          }, null, 4)) : ie("", !0)
        ], 4))), 128))
      ]),
      B("div", To, [
        (A(!0), R(K, null, we(L(r).upperUnits, ({ label: a, value: l, date: u, width: d }) => (A(), R("div", {
          key: a,
          class: "g-upper-timeunit",
          style: U({
            width: d
          })
        }, [
          ee(o.$slots, "upper-timeunit", {
            label: a,
            value: l,
            date: u
          }, () => [
            pt(te(a), 1)
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
function tn(e = He()) {
  const { dateFormat: t, chartSize: n } = e, { chartStartDayjs: r, chartEndDayjs: o, toDayjs: i, format: a } = en(e), l = q(() => o.value.diff(r.value, "minutes"));
  return {
    mapTimeToPosition: (c) => {
      const b = n.width.value || 0, w = i(c).diff(r.value, "minutes", !0);
      return Math.ceil(w / l.value * b);
    },
    mapPositionToTime: (c) => {
      const b = n.width.value || 0, w = c / b * l.value;
      return a(r.value.add(w, "minutes"), t.value);
    }
  };
}
const Do = /* @__PURE__ */ Z({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: t } = tn(), n = G(Q()), { colors: r, dateFormat: o, currentTimeLabel: i } = He(), a = q(() => {
      const l = o.value || "YYYY-MM-DD HH:mm";
      return t(Q(n.value, l).format(l));
    });
    return (l, u) => (A(), R("div", {
      class: "g-grid-current-time",
      style: U({
        left: `${a.value}px`
      })
    }, [
      B("div", {
        class: "g-grid-current-time-marker",
        style: U({
          border: `1px dashed ${L(r).markerCurrentTime}`
        })
      }, null, 4),
      B("span", {
        class: "g-grid-current-time-text",
        style: U({ color: L(r).markerCurrentTime })
      }, [
        ee(l.$slots, "current-time-label", {}, () => [
          pt(te(L(i)), 1)
        ])
      ], 4)
    ], 4));
  }
});
const Eo = { class: "g-gantt-legend-collapse" }, Ao = { class: "g-gantt-legend-areas-list" }, So = { class: "g-gantt-legend-promotion" }, Mo = 6, Po = /* @__PURE__ */ Z({
  __name: "GGanttLegendNonCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  setup(e) {
    const t = G([]);
    return be(() => {
      yt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((r) => {
          t.value.push(r.clientHeight);
        });
      });
    }), (n, r) => (A(), R(K, null, [
      B("div", Eo, [
        ke(Xe, {
          name: "chevron-left",
          class: "g-gantt-legend-do-collapse",
          size: "24",
          onClick: r[0] || (r[0] = () => n.$emit("update:isCollapsed", !n.isCollapsed))
        })
      ]),
      B("div", Ao, [
        (A(!0), R(K, null, we(Object.entries(n.legend), ([o, i], a) => (A(), R("div", {
          key: o,
          class: "g-gantt-legend-area-list",
          style: U({
            height: t.value[a] + Mo + "px"
          })
        }, [
          ke(Xe, {
            class: "g-gantt-legend-area-icon",
            size: "24",
            name: n.legend[o][0].area.icon
          }, null, 8, ["name"]),
          B("div", So, [
            (A(!0), R(K, null, we(i, (l) => (A(), R("div", {
              key: l.category.name,
              class: "g-gantt-legend-category-color",
              style: U({ backgroundColor: "#" + l.category.color })
            }, null, 4))), 128))
          ])
        ], 4))), 128))
      ])
    ], 64));
  }
});
const $o = /* @__PURE__ */ it(Po, [["__scopeId", "data-v-bd5f4d76"]]), Bo = { class: "g-gantt-legend-collapse" }, Lo = { class: "g-gantt-legend-areas-list" }, Ro = { class: "g-gantt-legend-title" }, Io = { class: "g-gantt-legend-area" }, jo = { class: "g-gantt-legend-category-name" }, Ho = 6, Go = /* @__PURE__ */ Z({
  __name: "GGanttLegendCollapsedView",
  props: {
    legend: {},
    isCollapsed: { type: Boolean }
  },
  setup(e) {
    const t = G([]);
    return be(() => {
      yt(() => {
        Object.values(document.querySelector(".g-gantt-rows-list").children).forEach((r) => {
          t.value.push(r.clientHeight);
        });
      });
    }), (n, r) => (A(), R(K, null, [
      B("div", Bo, [
        ke(Xe, {
          name: "chevron-right",
          class: "g-gantt-legend-do-uncollapse",
          size: "24",
          onClick: r[0] || (r[0] = () => n.$emit("update:isCollapsed", !n.isCollapsed))
        })
      ]),
      B("div", Lo, [
        (A(!0), R(K, null, we(Object.entries(n.legend), ([o, i], a) => (A(), R("div", {
          key: o,
          class: "g-gantt-legend-area-list",
          style: U({
            height: t.value[a] + Ho + "px"
          })
        }, [
          B("div", Ro, [
            ke(Xe, {
              size: "32",
              name: n.legend[o][0].area.icon
            }, null, 8, ["name"]),
            B("p", Io, te(o), 1)
          ]),
          (A(!0), R(K, null, we(i, (l) => (A(), R("div", {
            key: l.category.name,
            class: "g-gantt-legend-promotion"
          }, [
            B("div", {
              class: "g-gantt-legend-category-color",
              style: U({ backgroundColor: "#" + l.category.color })
            }, null, 4),
            B("p", jo, te(l.category.name), 1)
          ]))), 128))
        ], 4))), 128))
      ])
    ], 64));
  }
});
const Yo = /* @__PURE__ */ it(Go, [["__scopeId", "data-v-88971dc7"]]), Uo = { class: "g-gantt-legend" }, Wo = /* @__PURE__ */ Z({
  __name: "GGanttLegend",
  props: {
    legend: {}
  },
  setup(e) {
    Jt((i) => ({
      "8b45b7ac": r.value
    }));
    const t = G(!0), n = q(() => t.value ? "chevron-right" : "chevron-left"), r = q(() => t.value ? "255px" : "56px"), o = () => document.querySelector("body").clientWidth > 1200;
    return jr(() => {
      t.value = o();
    }), (i, a) => (A(), R("div", Uo, [
      t.value ? (A(), Ce(Yo, {
        key: 1,
        "is-collapsed": t.value,
        "onUpdate:isCollapsed": a[1] || (a[1] = (l) => t.value = l),
        "arrow-name": n.value,
        legend: i.legend
      }, null, 8, ["is-collapsed", "arrow-name", "legend"])) : (A(), Ce($o, {
        key: 0,
        "is-collapsed": t.value,
        "onUpdate:isCollapsed": a[0] || (a[0] = (l) => t.value = l),
        "arrow-name": n.value,
        legend: i.legend
      }, null, 8, ["is-collapsed", "arrow-name", "legend"]))
    ]));
  }
});
const zo = /* @__PURE__ */ it(Wo, [["__scopeId", "data-v-517e11e4"]]), Fo = { class: "g-gantt-chart-container" }, No = { class: "g-gantt-chart-quarters" }, Vo = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, qo = { class: "g-gantt-rows-list" }, Xo = /* @__PURE__ */ Z({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    currentTime: { type: Boolean },
    currentTimeLabel: { default: "" },
    dateFormat: { type: [String, Boolean], default: or },
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
    Q.extend(qn);
    const r = new Date(), o = new Date();
    r.setDate(15), r.setMonth(10), o.setDate(31), o.setMonth(11);
    const i = G(
      Q(new Date()).isBetween(r, o)
    ), a = t, { width: l, font: u, colorScheme: d } = vt(n), c = Hr(), b = q(
      () => typeof d.value != "string" ? d.value : wn[d.value] || wn.default
    ), w = () => {
      var C;
      const p = (C = c.default) == null ? void 0 : C.call(c), f = [];
      return p && p.forEach((s) => {
        var m;
        if ((m = s.props) != null && m.bars) {
          const { label: y, bars: h } = s.props;
          f.push({ label: y, bars: h });
        } else
          Array.isArray(s.children) && s.children.forEach((y) => {
            var T;
            const h = y;
            if ((T = h == null ? void 0 : h.props) != null && T.bars) {
              const { label: $, bars: E } = h.props;
              f.push({ label: $, bars: E });
            }
          });
      }), f;
    }, x = G(!1), O = (p, f, C, s) => {
      switch (p.type) {
        case "click":
          a("click-bar", { bar: f, e: p, datetime: C });
          break;
        case "mousedown":
          a("mousedown-bar", { bar: f, e: p, datetime: C });
          break;
        case "mouseup":
          a("mouseup-bar", { bar: f, e: p, datetime: C });
          break;
        case "dblclick":
          a("dblclick-bar", { bar: f, e: p, datetime: C });
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
          x.value = !1, a("dragend-bar", { bar: f, e: p, movedBars: s });
          break;
        case "contextmenu":
          a("contextmenu-bar", { bar: f, e: p, datetime: C });
          break;
      }
    }, v = G(null), _ = Jn(v);
    return $t(er, w), $t(tr, {
      ...vt(n),
      colors: b,
      chartSize: _
    }), $t(nr, O), (p, f) => (A(), R("div", Fo, [
      ke(zo, {
        legend: p.legend ? p.legend : {}
      }, null, 8, ["legend"]),
      B("div", {
        class: Bt([[{ "labels-in-column": !!p.labelColumnTitle }], "g-gantt-chart-wrapper"])
      }, [
        p.labelColumnTitle ? (A(), Ce(xo, {
          key: 0,
          style: U({
            width: p.labelColumnWidth
          })
        }, {
          "label-column-title": ze(() => [
            ee(p.$slots, "label-column-title")
          ]),
          "label-column-row": ze(({ label: C }) => [
            ee(p.$slots, "label-column-row", { label: C })
          ]),
          _: 3
        }, 8, ["style"])) : ie("", !0),
        B("div", {
          ref_key: "ganttChart",
          ref: v,
          class: Bt([
            "g-gantt-chart",
            {
              "with-column": p.labelColumnTitle,
              "g-gantt-chart-container--4-quarters-width": !i.value,
              "g-gantt-chart-container--5-quarters-width": i.value
            }
          ]),
          style: U({ width: L(l), background: b.value.background, fontFamily: L(u) })
        }, [
          p.grid ? (A(), Ce(On, {
            key: 0,
            "highlighted-units": p.highlightedUnits
          }, null, 8, ["highlighted-units"])) : ie("", !0),
          p.currentTime ? (A(), Ce(Do, { key: 1 }, {
            "current-time-label": ze(() => [
              ee(p.$slots, "current-time-label")
            ]),
            _: 3
          })) : ie("", !0),
          B("div", No, [
            f[0] || (f[0] = B("div", { class: "g-gantt-chart-quarter" }, "Q1", -1)),
            f[1] || (f[1] = B("div", { class: "g-gantt-chart-quarter" }, "Q2", -1)),
            f[2] || (f[2] = B("div", { class: "g-gantt-chart-quarter" }, "Q3", -1)),
            f[3] || (f[3] = B("div", { class: "g-gantt-chart-quarter" }, "Q4", -1)),
            i.value ? (A(), R("div", Vo, "Q1")) : ie("", !0)
          ]),
          B("div", {
            class: Bt([
              "g-gantt-rows-container",
              n.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            B("div", qo, [
              ee(p.$slots, "default")
            ]),
            ke(On, { "highlighted-units": p.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          p.hideTimeaxis ? ie("", !0) : (A(), Ce(ko, { key: 2 }, {
            "upper-timeunit": ze(({ label: C, value: s, date: m }) => [
              ee(p.$slots, "upper-timeunit", {
                date: m,
                label: C,
                value: s
              })
            ]),
            timeunit: ze(({ label: C, value: s, date: m }) => [
              ee(p.$slots, "timeunit", {
                date: m,
                label: C,
                value: s
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
var ne = "top", fe = "bottom", pe = "right", re = "left", nn = "auto", wt = [ne, fe, pe, re], et = "start", gt = "end", Qo = "clippingParents", ir = "viewport", ct = "popper", Ko = "reference", _n = /* @__PURE__ */ wt.reduce(function(e, t) {
  return e.concat([t + "-" + et, t + "-" + gt]);
}, []), sr = /* @__PURE__ */ [].concat(wt, [nn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + et, t + "-" + gt]);
}, []), Zo = "beforeRead", Jo = "read", ea = "afterRead", ta = "beforeMain", na = "main", ra = "afterMain", oa = "beforeWrite", aa = "write", ia = "afterWrite", sa = [Zo, Jo, ea, ta, na, ra, oa, aa, ia];
function De(e) {
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
function de(e) {
  var t = xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function lr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function la(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !de(i) || !De(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function ua(e) {
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
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = a.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !de(o) || !De(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
var ur = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: la,
  effect: ua,
  requires: ["computeStyles"]
};
function Te(e) {
  return e.split("-")[0];
}
var Ve = Math.max, Rt = Math.min, nt = Math.round;
function rt(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (de(e) && t) {
    var i = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (r = nt(n.width) / a || 1), i > 0 && (o = nt(n.height) / i || 1);
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
function cr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && lr(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ee(e) {
  return xe(e).getComputedStyle(e);
}
function ca(e) {
  return ["table", "td", "th"].indexOf(De(e)) >= 0;
}
function Ge(e) {
  return ((tt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ht(e) {
  return De(e) === "html" ? e : e.assignedSlot || e.parentNode || (lr(e) ? e.host : null) || Ge(e);
}
function Cn(e) {
  return !de(e) || Ee(e).position === "fixed" ? null : e.offsetParent;
}
function da(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && de(e)) {
    var r = Ee(e);
    if (r.position === "fixed")
      return null;
  }
  for (var o = Ht(e); de(o) && ["html", "body"].indexOf(De(o)) < 0; ) {
    var i = Ee(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function xt(e) {
  for (var t = xe(e), n = Cn(e); n && ca(n) && Ee(n).position === "static"; )
    n = Cn(n);
  return n && (De(n) === "html" || De(n) === "body" && Ee(n).position === "static") ? t : n || da(e) || t;
}
function on(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dt(e, t, n) {
  return Ve(e, Rt(t, n));
}
function fa(e, t, n) {
  var r = dt(e, t, n);
  return r > n ? n : r;
}
function dr() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function fr(e) {
  return Object.assign({}, dr(), e);
}
function pr(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var pa = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, fr(typeof t != "number" ? t : pr(t, wt));
};
function va(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Te(n.placement), u = on(l), d = [re, pe].indexOf(l) >= 0, c = d ? "height" : "width";
  if (!(!i || !a)) {
    var b = pa(o.padding, n), w = rn(i), x = u === "y" ? ne : re, O = u === "y" ? fe : pe, v = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c], _ = a[u] - n.rects.reference[u], p = xt(i), f = p ? u === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, C = v / 2 - _ / 2, s = b[x], m = f - w[c] - b[O], y = f / 2 - w[c] / 2 + C, h = dt(s, y, m), T = u;
    n.modifiersData[r] = (t = {}, t[T] = h, t.centerOffset = h - y, t);
  }
}
function ga(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !cr(t.elements.popper, o) || (t.elements.arrow = o));
}
var ha = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: va,
  effect: ga,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ot(e) {
  return e.split("-")[1];
}
var ma = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ya(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return {
    x: nt(t * o) / o || 0,
    y: nt(n * o) / o || 0
  };
}
function Tn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, l = e.position, u = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, b = e.isFixed, w = c === !0 ? ya(a) : typeof c == "function" ? c(a) : a, x = w.x, O = x === void 0 ? 0 : x, v = w.y, _ = v === void 0 ? 0 : v, p = a.hasOwnProperty("x"), f = a.hasOwnProperty("y"), C = re, s = ne, m = window;
  if (d) {
    var y = xt(n), h = "clientHeight", T = "clientWidth";
    if (y === xe(n) && (y = Ge(n), Ee(y).position !== "static" && l === "absolute" && (h = "scrollHeight", T = "scrollWidth")), y = y, o === ne || (o === re || o === pe) && i === gt) {
      s = fe;
      var $ = b && m.visualViewport ? m.visualViewport.height : y[h];
      _ -= $ - r.height, _ *= u ? 1 : -1;
    }
    if (o === re || (o === ne || o === fe) && i === gt) {
      C = pe;
      var E = b && m.visualViewport ? m.visualViewport.width : y[T];
      O -= E - r.width, O *= u ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: l
  }, d && ma);
  if (u) {
    var M;
    return Object.assign({}, S, (M = {}, M[s] = f ? "0" : "", M[C] = p ? "0" : "", M.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + O + "px, " + _ + "px)" : "translate3d(" + O + "px, " + _ + "px, 0)", M));
  }
  return Object.assign({}, S, (t = {}, t[s] = f ? _ + "px" : "", t[C] = p ? O + "px" : "", t.transform = "", t));
}
function ba(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, l = n.roundOffsets, u = l === void 0 ? !0 : l, d = {
    placement: Te(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Tn(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tn(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var wa = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ba,
  data: {}
}, St = {
  passive: !0
};
function xa(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, l = a === void 0 ? !0 : a, u = xe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && d.forEach(function(c) {
    c.addEventListener("scroll", n.update, St);
  }), l && u.addEventListener("resize", n.update, St), function() {
    i && d.forEach(function(c) {
      c.removeEventListener("scroll", n.update, St);
    }), l && u.removeEventListener("resize", n.update, St);
  };
}
var Oa = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xa,
  data: {}
}, _a = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Lt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return _a[t];
  });
}
var Ca = {
  start: "end",
  end: "start"
};
function kn(e) {
  return e.replace(/start|end/g, function(t) {
    return Ca[t];
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
  return rt(Ge(e)).left + an(e).scrollLeft;
}
function Ta(e) {
  var t = xe(e), n = Ge(e), r = t.visualViewport, o = n.clientWidth, i = n.clientHeight, a = 0, l = 0;
  return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, l = r.offsetTop)), {
    width: o,
    height: i,
    x: a + sn(e),
    y: l
  };
}
function ka(e) {
  var t, n = Ge(e), r = an(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ve(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ve(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + sn(e), u = -r.scrollTop;
  return Ee(o || n).direction === "rtl" && (l += Ve(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function ln(e) {
  var t = Ee(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function vr(e) {
  return ["html", "body", "#document"].indexOf(De(e)) >= 0 ? e.ownerDocument.body : de(e) && ln(e) ? e : vr(Ht(e));
}
function ft(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = vr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = xe(r), a = o ? [i].concat(i.visualViewport || [], ln(r) ? r : []) : r, l = t.concat(a);
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
function Da(e) {
  var t = rt(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Dn(e, t) {
  return t === ir ? Xt(Ta(e)) : tt(t) ? Da(t) : Xt(ka(Ge(e)));
}
function Ea(e) {
  var t = ft(Ht(e)), n = ["absolute", "fixed"].indexOf(Ee(e).position) >= 0, r = n && de(e) ? xt(e) : e;
  return tt(r) ? t.filter(function(o) {
    return tt(o) && cr(o, r) && De(o) !== "body" && (n ? Ee(o).position !== "static" : !0);
  }) : [];
}
function Aa(e, t, n) {
  var r = t === "clippingParents" ? Ea(e) : [].concat(t), o = [].concat(r, [n]), i = o[0], a = o.reduce(function(l, u) {
    var d = Dn(e, u);
    return l.top = Ve(d.top, l.top), l.right = Rt(d.right, l.right), l.bottom = Rt(d.bottom, l.bottom), l.left = Ve(d.left, l.left), l;
  }, Dn(e, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function gr(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Te(r) : null, i = r ? ot(r) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case ne:
      u = {
        x: a,
        y: t.y - n.height
      };
      break;
    case fe:
      u = {
        x: a,
        y: t.y + t.height
      };
      break;
    case pe:
      u = {
        x: t.x + t.width,
        y: l
      };
      break;
    case re:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.boundary, a = i === void 0 ? Qo : i, l = n.rootBoundary, u = l === void 0 ? ir : l, d = n.elementContext, c = d === void 0 ? ct : d, b = n.altBoundary, w = b === void 0 ? !1 : b, x = n.padding, O = x === void 0 ? 0 : x, v = fr(typeof O != "number" ? O : pr(O, wt)), _ = c === ct ? Ko : ct, p = e.rects.popper, f = e.elements[w ? _ : c], C = Aa(tt(f) ? f : f.contextElement || Ge(e.elements.popper), a, u), s = rt(e.elements.reference), m = gr({
    reference: s,
    element: p,
    strategy: "absolute",
    placement: o
  }), y = Xt(Object.assign({}, p, m)), h = c === ct ? y : s, T = {
    top: C.top - h.top + v.top,
    bottom: h.bottom - C.bottom + v.bottom,
    left: C.left - h.left + v.left,
    right: h.right - C.right + v.right
  }, $ = e.modifiersData.offset;
  if (c === ct && $) {
    var E = $[o];
    Object.keys(T).forEach(function(S) {
      var M = [pe, fe].indexOf(S) >= 0 ? 1 : -1, I = [ne, fe].indexOf(S) >= 0 ? "y" : "x";
      T[S] += E[I] * M;
    });
  }
  return T;
}
function Sa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, d = u === void 0 ? sr : u, c = ot(r), b = c ? l ? _n : _n.filter(function(O) {
    return ot(O) === c;
  }) : wt, w = b.filter(function(O) {
    return d.indexOf(O) >= 0;
  });
  w.length === 0 && (w = b);
  var x = w.reduce(function(O, v) {
    return O[v] = ht(e, {
      placement: v,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Te(v)], O;
  }, {});
  return Object.keys(x).sort(function(O, v) {
    return x[O] - x[v];
  });
}
function Ma(e) {
  if (Te(e) === nn)
    return [];
  var t = Lt(e);
  return [kn(e), t, kn(t)];
}
function Pa(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, l = a === void 0 ? !0 : a, u = n.fallbackPlacements, d = n.padding, c = n.boundary, b = n.rootBoundary, w = n.altBoundary, x = n.flipVariations, O = x === void 0 ? !0 : x, v = n.allowedAutoPlacements, _ = t.options.placement, p = Te(_), f = p === _, C = u || (f || !O ? [Lt(_)] : Ma(_)), s = [_].concat(C).reduce(function(ge, oe) {
      return ge.concat(Te(oe) === nn ? Sa(t, {
        placement: oe,
        boundary: c,
        rootBoundary: b,
        padding: d,
        flipVariations: O,
        allowedAutoPlacements: v
      }) : oe);
    }, []), m = t.rects.reference, y = t.rects.popper, h = /* @__PURE__ */ new Map(), T = !0, $ = s[0], E = 0; E < s.length; E++) {
      var S = s[E], M = Te(S), I = ot(S) === et, H = [ne, fe].indexOf(M) >= 0, z = H ? "width" : "height", F = ht(t, {
        placement: S,
        boundary: c,
        rootBoundary: b,
        altBoundary: w,
        padding: d
      }), N = H ? I ? pe : re : I ? fe : ne;
      m[z] > y[z] && (N = Lt(N));
      var W = Lt(N), V = [];
      if (i && V.push(F[M] <= 0), l && V.push(F[N] <= 0, F[W] <= 0), V.every(function(ge) {
        return ge;
      })) {
        $ = S, T = !1;
        break;
      }
      h.set(S, V);
    }
    if (T)
      for (var X = O ? 3 : 1, se = function(oe) {
        var he = s.find(function(Se) {
          var ae = h.get(Se);
          if (ae)
            return ae.slice(0, oe).every(function(Oe) {
              return Oe;
            });
        });
        if (he)
          return $ = he, "break";
      }, le = X; le > 0; le--) {
        var Ae = se(le);
        if (Ae === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
var $a = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Pa,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function En(e, t, n) {
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
function An(e) {
  return [ne, pe, fe, re].some(function(t) {
    return e[t] >= 0;
  });
}
function Ba(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = ht(t, {
    elementContext: "reference"
  }), l = ht(t, {
    altBoundary: !0
  }), u = En(a, r), d = En(l, o, i), c = An(u), b = An(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: b
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": b
  });
}
var La = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ba
};
function Ra(e, t, n) {
  var r = Te(e), o = [re, ne].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], l = i[1];
  return a = a || 0, l = (l || 0) * o, [re, pe].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Ia(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = sr.reduce(function(c, b) {
    return c[b] = Ra(b, t.rects, i), c;
  }, {}), l = a[t.placement], u = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = a;
}
var ja = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ia
};
function Ha(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var Ga = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ha,
  data: {}
};
function Ya(e) {
  return e === "x" ? "y" : "x";
}
function Ua(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, l = a === void 0 ? !1 : a, u = n.boundary, d = n.rootBoundary, c = n.altBoundary, b = n.padding, w = n.tether, x = w === void 0 ? !0 : w, O = n.tetherOffset, v = O === void 0 ? 0 : O, _ = ht(t, {
    boundary: u,
    rootBoundary: d,
    padding: b,
    altBoundary: c
  }), p = Te(t.placement), f = ot(t.placement), C = !f, s = on(p), m = Ya(s), y = t.modifiersData.popperOffsets, h = t.rects.reference, T = t.rects.popper, $ = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, E = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (i) {
      var I, H = s === "y" ? ne : re, z = s === "y" ? fe : pe, F = s === "y" ? "height" : "width", N = y[s], W = N + _[H], V = N - _[z], X = x ? -T[F] / 2 : 0, se = f === et ? h[F] : T[F], le = f === et ? -T[F] : -h[F], Ae = t.elements.arrow, ge = x && Ae ? rn(Ae) : {
        width: 0,
        height: 0
      }, oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : dr(), he = oe[H], Se = oe[z], ae = dt(0, h[F], ge[F]), Oe = C ? h[F] / 2 - X - ae - he - E.mainAxis : se - ae - he - E.mainAxis, ue = C ? -h[F] / 2 + X + ae + Se + E.mainAxis : le + ae + Se + E.mainAxis, me = t.elements.arrow && xt(t.elements.arrow), $e = me ? s === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, Me = (I = S == null ? void 0 : S[s]) != null ? I : 0, Be = N + Oe - Me - $e, Le = N + ue - Me, Ke = dt(x ? Rt(W, Be) : W, N, x ? Ve(V, Le) : V);
      y[s] = Ke, M[s] = Ke - N;
    }
    if (l) {
      var st, Ot = s === "x" ? ne : re, _t = s === "x" ? fe : pe, Pe = y[m], Re = m === "y" ? "height" : "width", lt = Pe + _[Ot], Ye = Pe - _[_t], ut = [ne, re].indexOf(p) !== -1, Ct = (st = S == null ? void 0 : S[m]) != null ? st : 0, Tt = ut ? lt : Pe - h[Re] - T[Re] - Ct + E.altAxis, kt = ut ? Pe + h[Re] + T[Re] - Ct - E.altAxis : Ye, Dt = x && ut ? fa(Tt, Pe, kt) : dt(x ? Tt : lt, Pe, x ? kt : Ye);
      y[m] = Dt, M[m] = Dt - Pe;
    }
    t.modifiersData[r] = M;
  }
}
var Wa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ua,
  requiresIfExists: ["offset"]
};
function za(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fa(e) {
  return e === xe(e) || !de(e) ? an(e) : za(e);
}
function Na(e) {
  var t = e.getBoundingClientRect(), n = nt(t.width) / e.offsetWidth || 1, r = nt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Va(e, t, n) {
  n === void 0 && (n = !1);
  var r = de(t), o = de(t) && Na(t), i = Ge(t), a = rt(e, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((De(t) !== "body" || ln(i)) && (l = Fa(t)), de(t) ? (u = rt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = sn(i))), {
    x: a.left + l.scrollLeft - u.x,
    y: a.top + l.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function qa(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(l) {
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
function Xa(e) {
  var t = qa(e);
  return sa.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Qa(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ka(e) {
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
var Sn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Mn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Za(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Sn : o;
  return function(l, u, d) {
    d === void 0 && (d = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Sn, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: u
      },
      attributes: {},
      styles: {}
    }, b = [], w = !1, x = {
      state: c,
      setOptions: function(p) {
        var f = typeof p == "function" ? p(c.options) : p;
        v(), c.options = Object.assign({}, i, c.options, f), c.scrollParents = {
          reference: tt(l) ? ft(l) : l.contextElement ? ft(l.contextElement) : [],
          popper: ft(u)
        };
        var C = Xa(Ka([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = C.filter(function(s) {
          return s.enabled;
        }), O(), x.update();
      },
      forceUpdate: function() {
        if (!w) {
          var p = c.elements, f = p.reference, C = p.popper;
          if (!!Mn(f, C)) {
            c.rects = {
              reference: Va(f, xt(C), c.options.strategy === "fixed"),
              popper: rn(C)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(E) {
              return c.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var s = 0; s < c.orderedModifiers.length; s++) {
              if (c.reset === !0) {
                c.reset = !1, s = -1;
                continue;
              }
              var m = c.orderedModifiers[s], y = m.fn, h = m.options, T = h === void 0 ? {} : h, $ = m.name;
              typeof y == "function" && (c = y({
                state: c,
                options: T,
                name: $,
                instance: x
              }) || c);
            }
          }
        }
      },
      update: Qa(function() {
        return new Promise(function(_) {
          x.forceUpdate(), _(c);
        });
      }),
      destroy: function() {
        v(), w = !0;
      }
    };
    if (!Mn(l, u))
      return x;
    x.setOptions(d).then(function(_) {
      !w && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function O() {
      c.orderedModifiers.forEach(function(_) {
        var p = _.name, f = _.options, C = f === void 0 ? {} : f, s = _.effect;
        if (typeof s == "function") {
          var m = s({
            state: c,
            name: p,
            instance: x,
            options: C
          }), y = function() {
          };
          b.push(m || y);
        }
      });
    }
    function v() {
      b.forEach(function(_) {
        return _();
      }), b = [];
    }
    return x;
  };
}
var Ja = [Oa, Ga, wa, ur, ja, $a, Wa, ha, La], ei = /* @__PURE__ */ Za({
  defaultModifiers: Ja
}), ti = "tippy-box", hr = "tippy-content", mr = "tippy-backdrop", yr = "tippy-arrow", br = "tippy-svg-arrow", We = {
  passive: !0,
  capture: !0
}, wr = function() {
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
function xr(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function Pn(e, t) {
  if (t === 0)
    return e;
  var n;
  return function(r) {
    clearTimeout(n), n = setTimeout(function() {
      e(r);
    }, t);
  };
}
function ni(e, t) {
  var n = Object.assign({}, e);
  return t.forEach(function(r) {
    delete n[r];
  }), n;
}
function ri(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Fe(e) {
  return [].concat(e);
}
function $n(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function oi(e) {
  return e.filter(function(t, n) {
    return e.indexOf(t) === n;
  });
}
function Or(e) {
  return e.split("-")[0];
}
function at(e) {
  return [].slice.call(e);
}
function Bn(e) {
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
function ai(e) {
  return un(e, "NodeList");
}
function cn(e) {
  return un(e, "MouseEvent");
}
function ii(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function si(e) {
  return Gt(e) ? [e] : ai(e) ? at(e) : Array.isArray(e) ? e : at(document.querySelectorAll(e));
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
function _r(e) {
  var t, n = Fe(e), r = n[0];
  return r != null && (t = r.ownerDocument) != null && t.body ? r.ownerDocument : document;
}
function li(e, t) {
  var n = t.clientX, r = t.clientY;
  return e.every(function(o) {
    var i = o.popperRect, a = o.popperState, l = o.props, u = l.interactiveBorder, d = Or(a.placement), c = a.modifiersData.offset;
    if (!c)
      return !0;
    var b = d === "bottom" ? c.top.y : 0, w = d === "top" ? c.bottom.y : 0, x = d === "right" ? c.left.x : 0, O = d === "left" ? c.right.x : 0, v = i.top - r + b > u, _ = r - i.bottom - w > u, p = i.left - n + x > u, f = n - i.right - O > u;
    return v || _ || p || f;
  });
}
function Ft(e, t, n) {
  var r = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    e[r](o, n);
  });
}
function Ln(e, t) {
  for (var n = t; n; ) {
    var r;
    if (e.contains(n))
      return !0;
    n = n.getRootNode == null || (r = n.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var _e = {
  isTouch: !1
}, Rn = 0;
function ui() {
  _e.isTouch || (_e.isTouch = !0, window.performance && document.addEventListener("mousemove", Cr));
}
function Cr() {
  var e = performance.now();
  e - Rn < 20 && (_e.isTouch = !1, document.removeEventListener("mousemove", Cr)), Rn = e;
}
function ci() {
  var e = document.activeElement;
  if (ii(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function di() {
  document.addEventListener("touchstart", ui, We), window.addEventListener("blur", ci);
}
var fi = typeof window < "u" && typeof document < "u", pi = fi ? !!window.msCrypto : !1, vi = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, gi = {
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
  appendTo: wr,
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
}, vi, gi), hi = Object.keys(ye), mi = function(t) {
  var n = Object.keys(t);
  n.forEach(function(r) {
    ye[r] = t[r];
  });
};
function Tr(e) {
  var t = e.plugins || [], n = t.reduce(function(r, o) {
    var i = o.name, a = o.defaultValue;
    if (i) {
      var l;
      r[i] = e[i] !== void 0 ? e[i] : (l = ye[i]) != null ? l : a;
    }
    return r;
  }, {});
  return Object.assign({}, e, n);
}
function yi(e, t) {
  var n = t ? Object.keys(Tr(Object.assign({}, ye, {
    plugins: t
  }))) : hi, r = n.reduce(function(o, i) {
    var a = (e.getAttribute("data-tippy-" + i) || "").trim();
    if (!a)
      return o;
    if (i === "content")
      o[i] = a;
    else
      try {
        o[i] = JSON.parse(a);
      } catch {
        o[i] = a;
      }
    return o;
  }, {});
  return r;
}
function In(e, t) {
  var n = Object.assign({}, t, {
    content: xr(t.content, [e])
  }, t.ignoreAttributes ? {} : yi(e, t.plugins));
  return n.aria = Object.assign({}, ye.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
  }, n;
}
var bi = function() {
  return "innerHTML";
};
function Qt(e, t) {
  e[bi()] = t;
}
function jn(e) {
  var t = qe();
  return e === !0 ? t.className = yr : (t.className = br, Gt(e) ? t.appendChild(e) : Qt(t, e)), t;
}
function Hn(e, t) {
  Gt(t.content) ? (Qt(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Qt(e, t.content) : e.textContent = t.content);
}
function It(e) {
  var t = e.firstElementChild, n = at(t.children);
  return {
    box: t,
    content: n.find(function(r) {
      return r.classList.contains(hr);
    }),
    arrow: n.find(function(r) {
      return r.classList.contains(yr) || r.classList.contains(br);
    }),
    backdrop: n.find(function(r) {
      return r.classList.contains(mr);
    })
  };
}
function kr(e) {
  var t = qe(), n = qe();
  n.className = ti, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = qe();
  r.className = hr, r.setAttribute("data-state", "hidden"), Hn(r, e.props), t.appendChild(n), n.appendChild(r), o(e.props, e.props);
  function o(i, a) {
    var l = It(t), u = l.box, d = l.content, c = l.arrow;
    a.theme ? u.setAttribute("data-theme", a.theme) : u.removeAttribute("data-theme"), typeof a.animation == "string" ? u.setAttribute("data-animation", a.animation) : u.removeAttribute("data-animation"), a.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof a.maxWidth == "number" ? a.maxWidth + "px" : a.maxWidth, a.role ? u.setAttribute("role", a.role) : u.removeAttribute("role"), (i.content !== a.content || i.allowHTML !== a.allowHTML) && Hn(d, e.props), a.arrow ? c ? i.arrow !== a.arrow && (u.removeChild(c), u.appendChild(jn(a.arrow))) : u.appendChild(jn(a.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: t,
    onUpdate: o
  };
}
kr.$$tippy = !0;
var wi = 1, Mt = [], Nt = [];
function xi(e, t) {
  var n = In(e, Object.assign({}, ye, Tr(Bn(t)))), r, o, i, a = !1, l = !1, u = !1, d = !1, c, b, w, x = [], O = Pn(Be, n.interactiveDebounce), v, _ = wi++, p = null, f = oi(n.plugins), C = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, s = {
    id: _,
    reference: e,
    popper: qe(),
    popperInstance: p,
    props: n,
    state: C,
    plugins: f,
    clearDelayTimeouts: Tt,
    setProps: kt,
    setContent: Dt,
    show: Ar,
    hide: Sr,
    hideWithInteractivity: Mr,
    enable: ut,
    disable: Ct,
    unmount: Pr,
    destroy: $r
  };
  if (!n.render)
    return s;
  var m = n.render(s), y = m.popper, h = m.onUpdate;
  y.setAttribute("data-tippy-root", ""), y.id = "tippy-" + s.id, s.popper = y, e._tippy = s, y._tippy = s;
  var T = f.map(function(g) {
    return g.fn(s);
  }), $ = e.hasAttribute("aria-expanded");
  return me(), X(), N(), W("onCreate", [s]), n.showOnCreate && lt(), y.addEventListener("mouseenter", function() {
    s.props.interactive && s.state.isVisible && s.clearDelayTimeouts();
  }), y.addEventListener("mouseleave", function() {
    s.props.interactive && s.props.trigger.indexOf("mouseenter") >= 0 && H().addEventListener("mousemove", O);
  }), s;
  function E() {
    var g = s.props.touch;
    return Array.isArray(g) ? g : [g, 0];
  }
  function S() {
    return E()[0] === "hold";
  }
  function M() {
    var g;
    return !!((g = s.props.render) != null && g.$$tippy);
  }
  function I() {
    return v || e;
  }
  function H() {
    var g = I().parentNode;
    return g ? _r(g) : document;
  }
  function z() {
    return It(y);
  }
  function F(g) {
    return s.state.isMounted && !s.state.isVisible || _e.isTouch || c && c.type === "focus" ? 0 : Wt(s.props.delay, g ? 0 : 1, ye.delay);
  }
  function N(g) {
    g === void 0 && (g = !1), y.style.pointerEvents = s.props.interactive && !g ? "" : "none", y.style.zIndex = "" + s.props.zIndex;
  }
  function W(g, k, P) {
    if (P === void 0 && (P = !0), T.forEach(function(j) {
      j[g] && j[g].apply(j, k);
    }), P) {
      var Y;
      (Y = s.props)[g].apply(Y, k);
    }
  }
  function V() {
    var g = s.props.aria;
    if (!!g.content) {
      var k = "aria-" + g.content, P = y.id, Y = Fe(s.props.triggerTarget || e);
      Y.forEach(function(j) {
        var J = j.getAttribute(k);
        if (s.state.isVisible)
          j.setAttribute(k, J ? J + " " + P : P);
        else {
          var ce = J && J.replace(P, "").trim();
          ce ? j.setAttribute(k, ce) : j.removeAttribute(k);
        }
      });
    }
  }
  function X() {
    if (!($ || !s.props.aria.expanded)) {
      var g = Fe(s.props.triggerTarget || e);
      g.forEach(function(k) {
        s.props.interactive ? k.setAttribute("aria-expanded", s.state.isVisible && k === I() ? "true" : "false") : k.removeAttribute("aria-expanded");
      });
    }
  }
  function se() {
    H().removeEventListener("mousemove", O), Mt = Mt.filter(function(g) {
      return g !== O;
    });
  }
  function le(g) {
    if (!(_e.isTouch && (u || g.type === "mousedown"))) {
      var k = g.composedPath && g.composedPath()[0] || g.target;
      if (!(s.props.interactive && Ln(y, k))) {
        if (Fe(s.props.triggerTarget || e).some(function(P) {
          return Ln(P, k);
        })) {
          if (_e.isTouch || s.state.isVisible && s.props.trigger.indexOf("click") >= 0)
            return;
        } else
          W("onClickOutside", [s, g]);
        s.props.hideOnClick === !0 && (s.clearDelayTimeouts(), s.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), s.state.isMounted || he());
      }
    }
  }
  function Ae() {
    u = !0;
  }
  function ge() {
    u = !1;
  }
  function oe() {
    var g = H();
    g.addEventListener("mousedown", le, !0), g.addEventListener("touchend", le, We), g.addEventListener("touchstart", ge, We), g.addEventListener("touchmove", Ae, We);
  }
  function he() {
    var g = H();
    g.removeEventListener("mousedown", le, !0), g.removeEventListener("touchend", le, We), g.removeEventListener("touchstart", ge, We), g.removeEventListener("touchmove", Ae, We);
  }
  function Se(g, k) {
    Oe(g, function() {
      !s.state.isVisible && y.parentNode && y.parentNode.contains(y) && k();
    });
  }
  function ae(g, k) {
    Oe(g, k);
  }
  function Oe(g, k) {
    var P = z().box;
    function Y(j) {
      j.target === P && (Ft(P, "remove", Y), k());
    }
    if (g === 0)
      return k();
    Ft(P, "remove", b), Ft(P, "add", Y), b = Y;
  }
  function ue(g, k, P) {
    P === void 0 && (P = !1);
    var Y = Fe(s.props.triggerTarget || e);
    Y.forEach(function(j) {
      j.addEventListener(g, k, P), x.push({
        node: j,
        eventType: g,
        handler: k,
        options: P
      });
    });
  }
  function me() {
    S() && (ue("touchstart", Me, {
      passive: !0
    }), ue("touchend", Le, {
      passive: !0
    })), ri(s.props.trigger).forEach(function(g) {
      if (g !== "manual")
        switch (ue(g, Me), g) {
          case "mouseenter":
            ue("mouseleave", Le);
            break;
          case "focus":
            ue(pi ? "focusout" : "blur", Ke);
            break;
          case "focusin":
            ue("focusout", Ke);
            break;
        }
    });
  }
  function $e() {
    x.forEach(function(g) {
      var k = g.node, P = g.eventType, Y = g.handler, j = g.options;
      k.removeEventListener(P, Y, j);
    }), x = [];
  }
  function Me(g) {
    var k, P = !1;
    if (!(!s.state.isEnabled || st(g) || l)) {
      var Y = ((k = c) == null ? void 0 : k.type) === "focus";
      c = g, v = g.currentTarget, X(), !s.state.isVisible && cn(g) && Mt.forEach(function(j) {
        return j(g);
      }), g.type === "click" && (s.props.trigger.indexOf("mouseenter") < 0 || a) && s.props.hideOnClick !== !1 && s.state.isVisible ? P = !0 : lt(g), g.type === "click" && (a = !P), P && !Y && Ye(g);
    }
  }
  function Be(g) {
    var k = g.target, P = I().contains(k) || y.contains(k);
    if (!(g.type === "mousemove" && P)) {
      var Y = Re().concat(y).map(function(j) {
        var J, ce = j._tippy, Ze = (J = ce.popperInstance) == null ? void 0 : J.state;
        return Ze ? {
          popperRect: j.getBoundingClientRect(),
          popperState: Ze,
          props: n
        } : null;
      }).filter(Boolean);
      li(Y, g) && (se(), Ye(g));
    }
  }
  function Le(g) {
    var k = st(g) || s.props.trigger.indexOf("click") >= 0 && a;
    if (!k) {
      if (s.props.interactive) {
        s.hideWithInteractivity(g);
        return;
      }
      Ye(g);
    }
  }
  function Ke(g) {
    s.props.trigger.indexOf("focusin") < 0 && g.target !== I() || s.props.interactive && g.relatedTarget && y.contains(g.relatedTarget) || Ye(g);
  }
  function st(g) {
    return _e.isTouch ? S() !== g.type.indexOf("touch") >= 0 : !1;
  }
  function Ot() {
    _t();
    var g = s.props, k = g.popperOptions, P = g.placement, Y = g.offset, j = g.getReferenceClientRect, J = g.moveTransition, ce = M() ? It(y).arrow : null, Ze = j ? {
      getBoundingClientRect: j,
      contextElement: j.contextElement || I()
    } : e, dn = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Et) {
        var Je = Et.state;
        if (M()) {
          var Br = z(), Ut = Br.box;
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
        adaptive: !J
      }
    }, dn];
    M() && ce && Ue.push({
      name: "arrow",
      options: {
        element: ce,
        padding: 3
      }
    }), Ue.push.apply(Ue, (k == null ? void 0 : k.modifiers) || []), s.popperInstance = ei(Ze, y, Object.assign({}, k, {
      placement: P,
      onFirstUpdate: w,
      modifiers: Ue
    }));
  }
  function _t() {
    s.popperInstance && (s.popperInstance.destroy(), s.popperInstance = null);
  }
  function Pe() {
    var g = s.props.appendTo, k, P = I();
    s.props.interactive && g === wr || g === "parent" ? k = P.parentNode : k = xr(g, [P]), k.contains(y) || k.appendChild(y), s.state.isMounted = !0, Ot();
  }
  function Re() {
    return at(y.querySelectorAll("[data-tippy-root]"));
  }
  function lt(g) {
    s.clearDelayTimeouts(), g && W("onTrigger", [s, g]), oe();
    var k = F(!0), P = E(), Y = P[0], j = P[1];
    _e.isTouch && Y === "hold" && j && (k = j), k ? r = setTimeout(function() {
      s.show();
    }, k) : s.show();
  }
  function Ye(g) {
    if (s.clearDelayTimeouts(), W("onUntrigger", [s, g]), !s.state.isVisible) {
      he();
      return;
    }
    if (!(s.props.trigger.indexOf("mouseenter") >= 0 && s.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(g.type) >= 0 && a)) {
      var k = F(!1);
      k ? o = setTimeout(function() {
        s.state.isVisible && s.hide();
      }, k) : i = requestAnimationFrame(function() {
        s.hide();
      });
    }
  }
  function ut() {
    s.state.isEnabled = !0;
  }
  function Ct() {
    s.hide(), s.state.isEnabled = !1;
  }
  function Tt() {
    clearTimeout(r), clearTimeout(o), cancelAnimationFrame(i);
  }
  function kt(g) {
    if (!s.state.isDestroyed) {
      W("onBeforeUpdate", [s, g]), $e();
      var k = s.props, P = In(e, Object.assign({}, k, Bn(g), {
        ignoreAttributes: !0
      }));
      s.props = P, me(), k.interactiveDebounce !== P.interactiveDebounce && (se(), O = Pn(Be, P.interactiveDebounce)), k.triggerTarget && !P.triggerTarget ? Fe(k.triggerTarget).forEach(function(Y) {
        Y.removeAttribute("aria-expanded");
      }) : P.triggerTarget && e.removeAttribute("aria-expanded"), X(), N(), h && h(k, P), s.popperInstance && (Ot(), Re().forEach(function(Y) {
        requestAnimationFrame(Y._tippy.popperInstance.forceUpdate);
      })), W("onAfterUpdate", [s, g]);
    }
  }
  function Dt(g) {
    s.setProps({
      content: g
    });
  }
  function Ar() {
    var g = s.state.isVisible, k = s.state.isDestroyed, P = !s.state.isEnabled, Y = _e.isTouch && !s.props.touch, j = Wt(s.props.duration, 0, ye.duration);
    if (!(g || k || P || Y) && !I().hasAttribute("disabled") && (W("onShow", [s], !1), s.props.onShow(s) !== !1)) {
      if (s.state.isVisible = !0, M() && (y.style.visibility = "visible"), N(), oe(), s.state.isMounted || (y.style.transition = "none"), M()) {
        var J = z(), ce = J.box, Ze = J.content;
        zt([ce, Ze], 0);
      }
      w = function() {
        var Ue;
        if (!(!s.state.isVisible || d)) {
          if (d = !0, y.offsetHeight, y.style.transition = s.props.moveTransition, M() && s.props.animation) {
            var Yt = z(), Et = Yt.box, Je = Yt.content;
            zt([Et, Je], j), mt([Et, Je], "visible");
          }
          V(), X(), $n(Nt, s), (Ue = s.popperInstance) == null || Ue.forceUpdate(), W("onMount", [s]), s.props.animation && M() && ae(j, function() {
            s.state.isShown = !0, W("onShown", [s]);
          });
        }
      }, Pe();
    }
  }
  function Sr() {
    var g = !s.state.isVisible, k = s.state.isDestroyed, P = !s.state.isEnabled, Y = Wt(s.props.duration, 1, ye.duration);
    if (!(g || k || P) && (W("onHide", [s], !1), s.props.onHide(s) !== !1)) {
      if (s.state.isVisible = !1, s.state.isShown = !1, d = !1, a = !1, M() && (y.style.visibility = "hidden"), se(), he(), N(!0), M()) {
        var j = z(), J = j.box, ce = j.content;
        s.props.animation && (zt([J, ce], Y), mt([J, ce], "hidden"));
      }
      V(), X(), s.props.animation ? M() && Se(Y, s.unmount) : s.unmount();
    }
  }
  function Mr(g) {
    H().addEventListener("mousemove", O), $n(Mt, O), O(g);
  }
  function Pr() {
    s.state.isVisible && s.hide(), s.state.isMounted && (_t(), Re().forEach(function(g) {
      g._tippy.unmount();
    }), y.parentNode && y.parentNode.removeChild(y), Nt = Nt.filter(function(g) {
      return g !== s;
    }), s.state.isMounted = !1, W("onHidden", [s]));
  }
  function $r() {
    s.state.isDestroyed || (s.clearDelayTimeouts(), s.unmount(), $e(), delete e._tippy, s.state.isDestroyed = !0, W("onDestroy", [s]));
  }
}
function D(e, t) {
  t === void 0 && (t = {});
  var n = ye.plugins.concat(t.plugins || []);
  di();
  var r = Object.assign({}, t, {
    plugins: n
  }), o = si(e), i = o.reduce(function(a, l) {
    var u = l && xi(l, r);
    return u && a.push(u), a;
  }, []);
  return Gt(e) ? i[0] : i;
}
D.defaultProps = ye;
D.setDefaultProps = mi;
D.currentInput = _e;
var Oi = Object.assign({}, ur, {
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
}), _i = function(t, n) {
  var r;
  n === void 0 && (n = {});
  var o = t, i = [], a = [], l, u = n.overrides, d = [], c = !1;
  function b() {
    a = o.map(function(s) {
      return Fe(s.props.triggerTarget || s.reference);
    }).reduce(function(s, m) {
      return s.concat(m);
    }, []);
  }
  function w() {
    i = o.map(function(s) {
      return s.reference;
    });
  }
  function x(s) {
    o.forEach(function(m) {
      s ? m.enable() : m.disable();
    });
  }
  function O(s) {
    return o.map(function(m) {
      var y = m.setProps;
      return m.setProps = function(h) {
        y(h), m.reference === l && s.setProps(h);
      }, function() {
        m.setProps = y;
      };
    });
  }
  function v(s, m) {
    var y = a.indexOf(m);
    if (m !== l) {
      l = m;
      var h = (u || []).concat("content").reduce(function(T, $) {
        return T[$] = o[y].props[$], T;
      }, {});
      s.setProps(Object.assign({}, h, {
        getReferenceClientRect: typeof h.getReferenceClientRect == "function" ? h.getReferenceClientRect : function() {
          var T;
          return (T = i[y]) == null ? void 0 : T.getBoundingClientRect();
        }
      }));
    }
  }
  x(!1), w(), b();
  var _ = {
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
          y.props.showOnCreate && !c && (c = !0, v(y, i[0]));
        },
        onTrigger: function(y, h) {
          v(y, h.currentTarget);
        }
      };
    }
  }, p = D(qe(), Object.assign({}, ni(n, ["overrides"]), {
    plugins: [_].concat(n.plugins || []),
    triggerTarget: a,
    popperOptions: Object.assign({}, n.popperOptions, {
      modifiers: [].concat(((r = n.popperOptions) == null ? void 0 : r.modifiers) || [], [Oi])
    })
  })), f = p.show;
  p.show = function(s) {
    if (f(), !l && s == null)
      return v(p, i[0]);
    if (!(l && s == null)) {
      if (typeof s == "number")
        return i[s] && v(p, i[s]);
      if (o.indexOf(s) >= 0) {
        var m = s.reference;
        return v(p, m);
      }
      if (i.indexOf(s) >= 0)
        return v(p, s);
    }
  }, p.showNext = function() {
    var s = i[0];
    if (!l)
      return p.show(0);
    var m = i.indexOf(l);
    p.show(i[m + 1] || s);
  }, p.showPrevious = function() {
    var s = i[i.length - 1];
    if (!l)
      return p.show(s);
    var m = i.indexOf(l), y = i[m - 1] || s;
    p.show(y);
  };
  var C = p.setProps;
  return p.setProps = function(s) {
    u = s.overrides || u, C(s);
  }, p.setInstances = function(s) {
    x(!0), d.forEach(function(m) {
      return m();
    }), o = s, x(!1), w(), b(), d = O(p), p.setProps({
      triggerTarget: a
    });
  }, d = O(p), p;
}, Ci = {
  name: "animateFill",
  defaultValue: !1,
  fn: function(t) {
    var n;
    if (!((n = t.props.render) != null && n.$$tippy))
      return {};
    var r = It(t.popper), o = r.box, i = r.content, a = t.props.animateFill ? Ti() : null;
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
          i.style.transitionDelay = Math.round(d / 10) + "ms", a.style.transitionDuration = u, mt([a], "visible");
        }
      },
      onShow: function() {
        a && (a.style.transitionDuration = "0ms");
      },
      onHide: function() {
        a && mt([a], "hidden");
      }
    };
  }
};
function Ti() {
  var e = qe();
  return e.className = mr, mt([e], "hidden"), e;
}
var Kt = {
  clientX: 0,
  clientY: 0
}, Pt = [];
function Dr(e) {
  var t = e.clientX, n = e.clientY;
  Kt = {
    clientX: t,
    clientY: n
  };
}
function ki(e) {
  e.addEventListener("mousemove", Dr);
}
function Di(e) {
  e.removeEventListener("mousemove", Dr);
}
var Ei = {
  name: "followCursor",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference, r = _r(t.props.triggerTarget || n), o = !1, i = !1, a = !0, l = t.props;
    function u() {
      return t.props.followCursor === "initial" && t.state.isVisible;
    }
    function d() {
      r.addEventListener("mousemove", w);
    }
    function c() {
      r.removeEventListener("mousemove", w);
    }
    function b() {
      o = !0, t.setProps({
        getReferenceClientRect: null
      }), o = !1;
    }
    function w(v) {
      var _ = v.target ? n.contains(v.target) : !0, p = t.props.followCursor, f = v.clientX, C = v.clientY, s = n.getBoundingClientRect(), m = f - s.left, y = C - s.top;
      (_ || !t.props.interactive) && t.setProps({
        getReferenceClientRect: function() {
          var T = n.getBoundingClientRect(), $ = f, E = C;
          p === "initial" && ($ = T.left + m, E = T.top + y);
          var S = p === "horizontal" ? T.top : E, M = p === "vertical" ? T.right : $, I = p === "horizontal" ? T.bottom : E, H = p === "vertical" ? T.left : $;
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
      t.props.followCursor && (Pt.push({
        instance: t,
        doc: r
      }), ki(r));
    }
    function O() {
      Pt = Pt.filter(function(v) {
        return v.instance !== t;
      }), Pt.filter(function(v) {
        return v.doc === r;
      }).length === 0 && Di(r);
    }
    return {
      onCreate: x,
      onDestroy: O,
      onBeforeUpdate: function() {
        l = t.props;
      },
      onAfterUpdate: function(_, p) {
        var f = p.followCursor;
        o || f !== void 0 && l.followCursor !== f && (O(), f ? (x(), t.state.isMounted && !i && !u() && d()) : (c(), b()));
      },
      onMount: function() {
        t.props.followCursor && !i && (a && (w(Kt), a = !1), u() || d());
      },
      onTrigger: function(_, p) {
        cn(p) && (Kt = {
          clientX: p.clientX,
          clientY: p.clientY
        }), i = p.type === "focus";
      },
      onHidden: function() {
        t.props.followCursor && (b(), c(), a = !0);
      }
    };
  }
};
function Ai(e, t) {
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
var Si = {
  name: "inlinePositioning",
  defaultValue: !1,
  fn: function(t) {
    var n = t.reference;
    function r() {
      return !!t.props.inlinePositioning;
    }
    var o, i = -1, a = !1, l = [], u = {
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
      return Mi(Or(w), n.getBoundingClientRect(), at(n.getClientRects()), i);
    }
    function c(w) {
      a = !0, t.setProps(w), a = !1;
    }
    function b() {
      a || c(Ai(t.props, u));
    }
    return {
      onCreate: b,
      onAfterUpdate: b,
      onTrigger: function(x, O) {
        if (cn(O)) {
          var v = at(t.reference.getClientRects()), _ = v.find(function(f) {
            return f.left - 2 <= O.clientX && f.right + 2 >= O.clientX && f.top - 2 <= O.clientY && f.bottom + 2 >= O.clientY;
          }), p = v.indexOf(_);
          i = p > -1 ? p : i;
        }
      },
      onHidden: function() {
        i = -1;
      }
    };
  }
};
function Mi(e, t, n, r) {
  if (n.length < 2 || e === null)
    return t;
  if (n.length === 2 && r >= 0 && n[0].left > n[1].right)
    return n[r] || t;
  switch (e) {
    case "top":
    case "bottom": {
      var o = n[0], i = n[n.length - 1], a = e === "top", l = o.top, u = i.bottom, d = a ? o.left : i.left, c = a ? o.right : i.right, b = c - d, w = u - l;
      return {
        top: l,
        bottom: u,
        left: d,
        right: c,
        width: b,
        height: w
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
      }), _ = v[0].top, p = v[v.length - 1].bottom, f = x, C = O, s = C - f, m = p - _;
      return {
        top: _,
        bottom: p,
        left: f,
        right: C,
        width: s,
        height: m
      };
    }
    default:
      return t;
  }
}
var Pi = {
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
    var a = null, l = null;
    function u() {
      var d = i("reference") ? o().getBoundingClientRect() : null, c = i("popper") ? r.getBoundingClientRect() : null;
      (d && Gn(a, d) || c && Gn(l, c)) && t.popperInstance && t.popperInstance.update(), a = d, l = c, t.state.isMounted && requestAnimationFrame(u);
    }
    return {
      onMount: function() {
        t.props.sticky && u();
      }
    };
  }
};
function Gn(e, t) {
  return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
}
D.setDefaultProps({
  render: kr
});
D.setDefaultProps({
  onShow: (e) => {
    if (!e.props.content)
      return !1;
  }
});
function Er(e, t = {}, n = { mount: !0, appName: "Tippy" }) {
  n = Object.assign({ mount: !0, appName: "Tippy" }, n);
  const r = Yn(), o = G(), i = G({
    isEnabled: !1,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }), a = Gr();
  let l = null;
  const u = () => l || (l = document.createDocumentFragment(), l), d = (h) => {
    let T, $ = Ie(h) ? h.value : h;
    return Ur($) ? (a.value || (a.value = vn({
      name: n.appName,
      setup: () => () => Ie(h) ? h.value : h
    }), r && Object.assign(a.value._context, r.appContext), a.value.mount(u())), T = () => u()) : typeof $ == "object" ? (a.value || (a.value = vn({
      name: n.appName,
      setup: () => () => Ne(Ie(h) ? h.value : h)
    }), r && Object.assign(a.value._context, r.appContext), a.value.mount(u())), T = () => u()) : T = $, T;
  }, c = (h) => {
    let T = {};
    return Ie(h) ? T = h.value || {} : pn(h) ? T = { ...h } : T = { ...h }, T.content && (T.content = d(T.content)), T.triggerTarget && (T.triggerTarget = Ie(T.triggerTarget) ? T.triggerTarget.value : T.triggerTarget), (!T.plugins || !Array.isArray(T.plugins)) && (T.plugins = []), T.plugins = T.plugins.filter(($) => $.name !== "vueTippyReactiveState"), T.plugins.push({
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
  }, b = () => {
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
  }, _ = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.show();
  }, p = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.hide();
  }, f = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.disable(), i.value.isEnabled = !1;
  }, C = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.enable(), i.value.isEnabled = !0;
  }, s = () => {
    var h;
    (h = o.value) === null || h === void 0 || h.unmount();
  }, m = () => {
    if (!e)
      return;
    let h = Ie(e) ? e.value : e;
    typeof h == "function" && (h = h()), h && (o.value = D(h, c(t)), h.$tippy = y);
  }, y = {
    tippy: o,
    refresh: b,
    refreshContent: w,
    setContent: x,
    setProps: O,
    destroy: v,
    hide: p,
    show: _,
    disable: f,
    enable: C,
    unmount: s,
    mount: m,
    state: i
  };
  return n.mount && (r ? r.isMounted ? m() : be(m) : m()), r && Un(() => {
    v();
  }), Ie(t) || pn(t) ? je(t, b, { immediate: !1 }) : Ie(t.content) && je(t.content, w, { immediate: !1 }), y;
}
function $i(e, t) {
  const n = G();
  return be(() => {
    const o = (Array.isArray(e) ? e.map((i) => i.value) : typeof e == "function" ? e() : e.value).map((i) => i instanceof Element ? i._tippy : i).filter(Boolean);
    n.value = _i(o, t ? { allowHTML: !0, ...t } : { allowHTML: !0 });
  }), {
    singleton: n
  };
}
function Bi(e) {
  return typeof e == "function" ? e() : L(e);
}
function Li(e) {
  var t, n;
  const r = Bi(e);
  return (n = (t = r) === null || t === void 0 ? void 0 : t.$el) !== null && n !== void 0 ? n : r;
}
Z({
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
    const o = G(), i = G(), a = G(), l = G(!1), u = () => {
      let x = { ...e };
      for (const O of ["to", "tag", "contentTag", "contentClass"])
        x.hasOwnProperty(O) && delete x[O];
      return x;
    };
    let d = () => Li(o);
    e.to && (typeof Element < "u" && e.to instanceof Element ? d = () => e.to : e.to === "parent" ? d = () => {
      let x = o.value;
      return x || (x = o.value = i.value.parentElement), x;
    } : (typeof e.to == "string" || e.to instanceof String) && (d = () => document.querySelector(e.to)));
    const c = Er(d, u());
    let b = t.content;
    !b && e.to === "parent" && (b = t.default), be(() => {
      l.value = !0, yt(() => {
        b && c.setContent(() => a.value);
      });
    }), je(c.state, () => {
      n("state", L(c.state));
    }, { immediate: !0, deep: !0 }), je(() => e, () => {
      c.setProps(u()), b && c.setContent(() => a.value);
    }, { deep: !0 });
    let w = Yr({
      elem: o,
      contentElem: a,
      mounted: l,
      ...c
    });
    return r(w), () => {
      const x = (typeof e.contentTag == "string", e.contentTag), O = b ? Ne(x, {
        ref: a,
        style: { display: l.value ? "inherit" : "none" },
        class: e.contentClass
      }, b(w)) : null;
      if (e.to === "parent") {
        const p = [];
        if (!o.value) {
          const f = Ne("span", {
            ref: i,
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
      const _ = (typeof e.tag == "string", e.tag);
      return Ne(_, { ref: o, "data-v-tippy": "" }, O ? [v, O] : v);
    };
  }
});
const Ri = [
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
  Ri.includes(e) ? Zt[e] = {
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
Z({
  props: Zt,
  setup(e) {
    const t = G([]), { singleton: n } = $i(t, e);
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
const Ii = D.setDefaultProps;
Ii({
  ignoreAttributes: !0,
  plugins: [Pi, Si, Ei, Ci]
});
function ji() {
  const e = jt(nr);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
const Hi = { class: "g-gantt-tooltip-container" }, Gi = { class: "g-gantt-tooltip-area-container" }, Yi = { class: "g-gantt-tooltip-area" }, Ui = { class: "g-gantt-tooltip-category-container" }, Wi = { class: "g-gantt-tooltip-category" }, zi = { class: "g-gantt-tooltip-promotion-title" }, Fi = { class: "g-gantt-tooltip-promotion-time-container" }, Ni = { class: "g-gantt-tooltip-time" }, Vi = "cadetblue", qi = /* @__PURE__ */ Z({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    config: {},
    toDayjs: {}
  },
  setup(e) {
    Jt((c) => ({
      "260d265f": o.value
    }));
    const t = e, { bar: n } = vt(t), r = q(() => {
      var b, w, x;
      const c = (x = (w = (b = n.value) == null ? void 0 : b.ganttBarConfig) == null ? void 0 : w.tooltipInfo) == null ? void 0 : x.publishedAt;
      return c ? !Q(new Date(c * 1e3)).isAfter(new Date()) : !1;
    }), o = G(r.value ? "pointer" : "default"), i = q(
      () => {
        var c, b;
        return ((b = (c = n == null ? void 0 : n.value) == null ? void 0 : c.ganttBarConfig.style) == null ? void 0 : b.backgroundColor) || Vi;
      }
    ), a = () => {
      var b, w;
      const c = (w = (b = n.value) == null ? void 0 : b.ganttBarConfig.tooltipInfo) == null ? void 0 : w.promotionUrl;
      !c || !r.value || window.location.assign(c);
    }, l = q(() => {
      var c;
      return (c = n.value) == null ? void 0 : c[t.config.barStart.value];
    }), u = q(() => {
      var c;
      return (c = n.value) == null ? void 0 : c[t.config.barEnd.value];
    }), d = q(() => {
      if (!(n != null && n.value))
        return "";
      const c = t.toDayjs(l.value).format("DD.MM."), b = t.toDayjs(u.value).format("DD.MM.YYYY");
      return `${c} \u2013 ${b}`;
    });
    return (c, b) => {
      var w, x, O, v, _, p, f, C, s, m, y, h;
      return A(), R("div", {
        class: "g-gantt-tooltip",
        style: U({
          fontFamily: c.config.font.value
        }),
        onClick: a
      }, [
        B("div", Hi, [
          B("div", Gi, [
            B("span", Yi, te((O = (x = (w = L(n)) == null ? void 0 : w.ganttBarConfig) == null ? void 0 : x.tooltipInfo) == null ? void 0 : O.areaName), 1),
            L(n) ? (A(), Ce(Xe, {
              key: 0,
              name: (p = (_ = (v = L(n)) == null ? void 0 : v.ganttBarConfig) == null ? void 0 : _.tooltipInfo) == null ? void 0 : p.icon,
              size: "24"
            }, null, 8, ["name"])) : ie("", !0)
          ]),
          B("div", Ui, [
            B("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left",
              style: U({ background: i.value })
            }, null, 4),
            B("span", Wi, te((s = (C = (f = L(n)) == null ? void 0 : f.ganttBarConfig) == null ? void 0 : C.tooltipInfo) == null ? void 0 : s.categoryName), 1),
            B("div", {
              class: "g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right",
              style: U({ background: i.value })
            }, null, 4)
          ]),
          B("p", zi, te((h = (y = (m = L(n)) == null ? void 0 : m.ganttBarConfig) == null ? void 0 : y.tooltipInfo) == null ? void 0 : h.title), 1),
          B("div", Fi, [
            B("p", Ni, [
              ee(c.$slots, "default", {
                bar: L(n),
                barStart: l.value,
                barEnd: u.value
              }, () => [
                pt(te(d.value), 1)
              ], !0)
            ]),
            r.value ? (A(), Ce(Xe, {
              key: 0,
              name: "chevron-right",
              size: "16",
              style: { color: "#008075" }
            })) : ie("", !0)
          ])
        ])
      ], 4);
    };
  }
});
const Xi = /* @__PURE__ */ it(qi, [["__scopeId", "data-v-c08197b9"]]), Qi = ["id"], Ki = { class: "g-gantt-bar-label" }, Zi = ["innerHTML"], Ji = `
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`, es = 8, ts = /* @__PURE__ */ Z({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    var $;
    Jt((E) => ({
      "2abf47e3": L(o)
    }));
    const t = e, n = ji(), { bar: r } = vt(t), o = ($ = t.bar.ganttBarConfig.style) == null ? void 0 : $.backgroundColor, { mapTimeToPosition: i, mapPositionToTime: a } = tn(), { font: l, barEnd: u, barStart: d, rowHeight: c, width: b, chartStart: w, chartEnd: x, chartSize: O } = He(), v = G(), { toDayjs: _ } = en(), p = G(!1), f = q(() => r.value.ganttBarConfig), C = jt(rr), s = (E) => {
      var H;
      const S = document.querySelector(".tippy-svg-arrow");
      if (!S)
        return;
      const I = ((H = S.style.transform) != null ? H : "").match(/translate3d\((-?\d+)/);
      if (E === "bottom" && I) {
        const z = S.firstElementChild;
        z.style.transform = "rotateX(180deg)";
        const F = parseInt(I[1]);
        S.style.transform = `translate3d(${F}px, -115px, 0px)`;
      }
      if (E === "top" && I) {
        const z = parseInt(I[1]);
        S.style.transform = `translate3d(${z}px, -1px, 0px)`;
      }
    };
    be(() => {
      !(v != null && v.value) || Er(v.value, {
        content: Ne(Xi, { bar: r.value, config: { barStart: d, barEnd: u, font: l }, toDayjs: _ }),
        arrow: Ji,
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
              fn({ instance: E }) {
                s((E == null ? void 0 : E.state.placement) || "top");
              }
            }
          ]
        },
        delay: [0, 0],
        duration: [300, 0]
      });
    });
    const m = (E) => {
      var I, H;
      if (E.preventDefault(), E.type === "mousedown" || !(C != null && C.value))
        return;
      const S = (H = (I = C == null ? void 0 : C.value) == null ? void 0 : I[0]) == null ? void 0 : H.getBoundingClientRect();
      if (!S)
        return;
      const M = a(E.clientX - S.left);
      n(E, r.value, M);
    }, y = G(0), h = G(0), T = q(() => {
      const E = new Date(r.value.myBeginDate).getTime(), S = new Date(r.value.myEndDate).getTime();
      return Math.abs(E - S) / (1e3 * 60 * 60 * 24) <= 2 ? 0 : h.value - y.value - es;
    });
    return be(() => {
      je(
        [r, b, w, x, O.width],
        () => {
          y.value = i(r.value[d.value]), h.value = i(r.value[u.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (E, S) => {
      var M, I, H;
      return A(), R("div", {
        id: f.value.id,
        ref_key: "ganttBarRef",
        ref: v,
        class: Bt(["g-gantt-bar", f.value.asArrow ? "g-gantt-bar-is-arrow" : "", f.value.class || ""]),
        style: U({
          ...f.value.style,
          position: "relative",
          top: `${L(c) * 0.1}px`,
          left: `${y.value}px`,
          width: `${T.value}px`,
          height: `${L(c) * 0.8}px`,
          zIndex: p.value ? 3 : 2
        }),
        onClick: m,
        onContextmenu: m,
        onDblclick: m,
        onMousedown: m,
        onMouseenter: m,
        onMouseleave: m
      }, [
        B("div", Ki, [
          ee(E.$slots, "default", { bar: L(r) }, () => [
            B("div", null, te(f.value.label || ""), 1),
            f.value.html ? (A(), R("div", {
              key: 0,
              innerHTML: f.value.html
            }, null, 8, Zi)) : ie("", !0)
          ])
        ]),
        f.value.asArrow ? (A(), R("div", {
          key: 0,
          style: U({
            borderLeft: `8px solid #${(H = (I = (M = L(r)) == null ? void 0 : M.ganttBarConfig) == null ? void 0 : I.style) == null ? void 0 : H.backgroundColor}`
          }),
          class: "g-gantt-bar-arrow"
        }, null, 4)) : ie("", !0),
        f.value.hasHandles ? (A(), R(K, { key: 1 }, [
          S[0] || (S[0] = B("div", { class: "g-gantt-bar-handle-left" }, null, -1)),
          S[1] || (S[1] = B("div", { class: "g-gantt-bar-handle-right" }, null, -1))
        ], 64)) : ie("", !0)
      ], 46, Qi);
    };
  }
});
const ns = /* @__PURE__ */ Z({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    overlaps: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: t }) {
    const n = e, r = G([]), o = t, { rowHeight: i, colors: a, labelColumnTitle: l } = He(), { highlightOnHover: u } = vt(n), d = G(!1), c = q(() => ({
      height: `${i.value}px`,
      background: (u == null ? void 0 : u.value) && d.value ? a.value.hoverHighlight : null
    })), { mapPositionToTime: b } = tn(), w = Wr("barContainer");
    $t(rr, w);
    const x = (f) => {
      var y, h;
      const C = (h = (y = w.value) == null ? void 0 : y[0]) == null ? void 0 : h.getBoundingClientRect();
      if (!C) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const s = f.clientX - C.left, m = b(s);
      o("drop", { e: f, datetime: m });
    };
    function O(f, C, s, m) {
      return f <= m && s <= C;
    }
    function v(f) {
      const C = [];
      for (let s = 0; s < f.length; s++)
        for (let m = s + 1; m < f.length; m++)
          O(
            f[s].myBeginDate,
            f[s].myEndDate,
            f[m].myBeginDate,
            f[m].myEndDate
          ) && C.push(Q(f[s].myEndDate).isAfter(f[m].myEndDate) ? f[s] : f[m]);
      return C;
    }
    const _ = () => {
      const f = [], C = (s) => {
        if (!s || s.length === 0)
          return;
        const m = v(s);
        if (m.length > 0) {
          const y = s.filter((T) => !m.includes(T)), h = s.filter((T) => m.includes(T));
          f.push(y), C(h);
        } else
          f.push(s);
      };
      return C(n.bars), f;
    };
    be(() => {
      r.value = _();
    });
    const p = (f) => !f || /^\s*$/.test(f);
    return (f, C) => (A(), R("div", null, [
      (A(!0), R(K, null, we(r.value, (s) => (A(), R("div", {
        key: s[0].ganttBarConfig.id,
        style: U(c.value),
        class: "g-gantt-row",
        onDragleave: C[0] || (C[0] = (m) => d.value = !1),
        onDrop: C[1] || (C[1] = (m) => x(m)),
        onMouseleave: C[2] || (C[2] = (m) => d.value = !1),
        onMouseover: C[3] || (C[3] = (m) => d.value = !0),
        onDragover: C[4] || (C[4] = zr((m) => d.value = !0, ["prevent"]))
      }, [
        !p(f.label) && !L(l) ? (A(), R("div", {
          key: 0,
          style: U({ background: L(a).primary, color: L(a).text }),
          class: "g-gantt-row-label"
        }, [
          ee(f.$slots, "label", {}, () => [
            pt(te(f.label), 1)
          ])
        ], 4)) : ie("", !0),
        B("div", Wn({
          ref_for: !0,
          ref: "barContainer",
          class: "g-gantt-row-bars-container"
        }, f.$attrs), [
          ke(Fr, {
            name: "bar-transition sys",
            tag: "div"
          }, {
            default: ze(() => [
              (A(!0), R(K, null, we(s, (m) => (A(), Ce(ts, {
                key: m.ganttBarConfig.id,
                bar: m
              }, {
                default: ze(() => [
                  ee(f.$slots, "bar-label", { bar: m })
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
function rs() {
  Q.extend(Vr), Q.extend(qr), Q.extend(qn), Q.extend(Kr), Q.extend(Xr), Q.extend(Nr), Q.extend(Qr);
}
const is = {
  install(e, t) {
    rs(), e.component("GGanttChart", Xo), e.component("GGanttRow", ns);
  }
};
function ve(e, t = "top") {
  if (!e || typeof document > "u")
    return;
  const n = document.head, r = document.createElement("style");
  t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.appendChild(document.createTextNode(e));
}
ve(`
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
ve(`
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
ve(`
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
ve(`
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
ve(`
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
ve(`
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
ve(`
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
ve(`
.g-gantt-legend[data-v-517e11e4] {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: var(--8b45b7ac);

  box-shadow: 4px 0 8px 1px rgba(27,30,31,0.2);
}
`, "top");
ve(`
.g-gantt-tooltip[data-v-c08197b9] {
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
.g-gantt-tooltip[data-v-c08197b9]:hover {
  cursor: var(--260d265f);
}
.g-gantt-tooltip-category-container[data-v-c08197b9] {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.g-gantt-tooltip-container[data-v-c08197b9] {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.g-gantt-tooltip-time[data-v-c08197b9] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;

  color: #4c5356;
}
.g-gantt-tooltip-promotion-time-container[data-v-c08197b9] {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}
.g-gantt-tooltip-area[data-v-c08197b9] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-category[data-v-c08197b9] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}
.g-gantt-tooltip-area-container[data-v-c08197b9] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.g-gantt-tooltip-promotion-title[data-v-c08197b9] {
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;

  color: #1b1e1f;

  padding: 0 12px 10px 12px;
}
.g-gantt-tooltip-color-line[data-v-c08197b9] {
  height: 2px;
}
.g-gantt-tooltip-color-line-left[data-v-c08197b9] {
  min-width: 8px;
  margin-right: 4px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-tooltip-color-line-right[data-v-c08197b9] {
  margin-left: 4px;
  width: 100%;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
@media (max-width: 1400px) {
.g-gantt-tooltip[data-v-c08197b9] {
    width: 208px;

    padding-top: 6px;
    padding-bottom: 8px;
}
.g-gantt-tooltip-color-line-left[data-v-c08197b9] {
    min-width: 4px;
}
.g-gantt-tooltip-area-container[data-v-c08197b9],
  .g-gantt-tooltip-promotion-title[data-v-c08197b9],
  .g-gantt-tooltip-promotion-time-container[data-v-c08197b9] {
    padding-left: 8px;
    padding-right: 8px;
}
}
`, "top");
ve(`
.g-gantt-grid-current-date[data-v-9729fb07] {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: center;
}
`, "top");
ve(`
.g-gantt-legend-collapse[data-v-88971dc7] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
}
.g-gantt-legend-title[data-v-88971dc7] {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}
.g-gantt-legend-area[data-v-88971dc7] {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;

  color: #1b1e1f;
}
.g-gantt-legend-category-color[data-v-88971dc7] {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.g-gantt-legend-promotion[data-v-88971dc7] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-gantt-legend-do-uncollapse[data-v-88971dc7]:hover {
  cursor: pointer;
  color: #008075;
}
.g-gantt-legend-area-list[data-v-88971dc7] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-category-name[data-v-88971dc7] {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}
`, "top");
ve(`
.g-gantt-legend-collapse[data-v-bd5f4d76] {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 48px;
  margin-bottom: 14px;
}
.g-gantt-legend-area-icon[data-v-bd5f4d76] {
  margin: 0 8px 0 16px;
}
.g-gantt-legend-promotion[data-v-bd5f4d76] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-gantt-legend-areas-list[data-v-bd5f4d76] {
  display: flex;
  flex-direction: column;
}
.g-gantt-legend-area-list[data-v-bd5f4d76] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-gantt-legend-do-collapse[data-v-bd5f4d76]:hover {
  cursor: pointer;
  color: #008075;
}
.g-gantt-legend-category-color[data-v-bd5f4d76] {
  width: 44px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
`, "top");
export {
  Xo as GGanttChart,
  ns as GGanttRow,
  is as default,
  rs as extendDayjs,
  is as ganttastic
};
