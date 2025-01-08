import R from "dayjs";
import { inject as dt, computed as H, defineComponent as V, openBlock as E, createElementBlock as T, Fragment as K, renderList as et, unref as D, normalizeStyle as Y, renderSlot as I, createElementVNode as $, toDisplayString as Q, createCommentVNode as U, createTextVNode as rt, toRefs as at, ref as S, watch as ft, nextTick as Yt, createBlock as tt, Teleport as ne, createVNode as ct, Transition as re, withCtx as q, getCurrentScope as ae, onScopeDispose as oe, getCurrentInstance as ie, onMounted as _t, useSlots as se, provide as ut, normalizeClass as nt, useCssVars as le, withModifiers as ue, mergeProps as ce, TransitionGroup as de } from "vue";
var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(Z, function() {
    var i = "day";
    return function(r, v, l) {
      var u = function(n) {
        return n.add(4 - n.isoWeekday(), i);
      }, s = v.prototype;
      s.isoWeekYear = function() {
        return u(this).year();
      }, s.isoWeek = function(n) {
        if (!this.$utils().u(n))
          return this.add(7 * (n - this.isoWeek()), i);
        var a, f, g, x, k = u(this), w = (a = this.isoWeekYear(), f = this.$u, g = (f ? l.utc : l)().year(a).startOf("year"), x = 4 - g.isoWeekday(), g.isoWeekday() > 4 && (x += 7), g.add(x, i));
        return k.diff(w, "week") + 1;
      }, s.isoWeekday = function(n) {
        return this.$utils().u(n) ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7);
      };
      var o = s.startOf;
      s.startOf = function(n, a) {
        var f = this.$utils(), g = !!f.u(a) || a;
        return f.p(n) === "isoweek" ? g ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : o.bind(this)(n, a);
      };
    };
  });
})(Gt);
const fe = Gt.exports;
var It = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(Z, function() {
    return function(i, r) {
      r.prototype.isSameOrBefore = function(v, l) {
        return this.isSame(v, l) || this.isBefore(v, l);
      };
    };
  });
})(It);
const ge = It.exports;
var Rt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(Z, function() {
    return function(i, r) {
      r.prototype.isSameOrAfter = function(v, l) {
        return this.isSame(v, l) || this.isAfter(v, l);
      };
    };
  });
})(Rt);
const he = Rt.exports;
var Ht = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(Z, function() {
    return function(i, r, v) {
      r.prototype.isBetween = function(l, u, s, o) {
        var n = v(l), a = v(u), f = (o = o || "()")[0] === "(", g = o[1] === ")";
        return (f ? this.isAfter(n, s) : !this.isBefore(n, s)) && (g ? this.isBefore(a, s) : !this.isAfter(a, s)) || (f ? this.isBefore(n, s) : !this.isAfter(n, s)) && (g ? this.isAfter(a, s) : !this.isBefore(a, s));
      };
    };
  });
})(Ht);
const At = Ht.exports;
var Wt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(Z, function() {
    var i = "week", r = "year";
    return function(v, l, u) {
      var s = l.prototype;
      s.week = function(o) {
        if (o === void 0 && (o = null), o !== null)
          return this.add(7 * (o - this.week()), "day");
        var n = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var a = u(this).startOf(r).add(1, r).date(n), f = u(this).endOf(i);
          if (a.isBefore(f))
            return 1;
        }
        var g = u(this).startOf(r).date(n).startOf(i).subtract(1, "millisecond"), x = this.diff(g, i, !0);
        return x < 0 ? u(this).startOf("week").week() : Math.ceil(x);
      }, s.weeks = function(o) {
        return o === void 0 && (o = null), this.week(o);
      };
    };
  });
})(Wt);
const pe = Wt.exports;
var Ut = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(Z, function() {
    return function(i, r, v) {
      var l = r.prototype, u = l.format;
      v.en.ordinal = function(s) {
        var o = ["th", "st", "nd", "rd"], n = s % 100;
        return "[" + s + (o[(n - 20) % 10] || o[n] || o[0]) + "]";
      }, l.format = function(s) {
        var o = this, n = this.$locale();
        if (!this.isValid())
          return u.bind(this)(s);
        var a = this.$utils(), f = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(g) {
          switch (g) {
            case "Q":
              return Math.ceil((o.$M + 1) / 3);
            case "Do":
              return n.ordinal(o.$D);
            case "gggg":
              return o.weekYear();
            case "GGGG":
              return o.isoWeekYear();
            case "wo":
              return n.ordinal(o.week(), "W");
            case "w":
            case "ww":
              return a.s(o.week(), g === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return a.s(o.isoWeek(), g === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return a.s(String(o.$H === 0 ? 24 : o.$H), g === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(o.$d.getTime() / 1e3);
            case "x":
              return o.$d.getTime();
            case "z":
              return "[" + o.offsetName() + "]";
            case "zzz":
              return "[" + o.offsetName("long") + "]";
            default:
              return g;
          }
        });
        return u.bind(this)(f);
      };
    };
  });
})(Ut);
const me = Ut.exports;
var jt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(Z, function() {
    var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, v = /\d\d/, l = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, s = {}, o = function(w) {
      return (w = +w) + (w > 68 ? 1900 : 2e3);
    }, n = function(w) {
      return function(y) {
        this[w] = +y;
      };
    }, a = [/[+-]\d\d:?(\d\d)?|Z/, function(w) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var p = y.match(/([+-]|\d\d)/g), B = 60 * p[1] + (+p[2] || 0);
        return B === 0 ? 0 : p[0] === "+" ? -B : B;
      }(w);
    }], f = function(w) {
      var y = s[w];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, g = function(w, y) {
      var p, B = s.meridiem;
      if (B) {
        for (var m = 1; m <= 24; m += 1)
          if (w.indexOf(B(m, 0, y)) > -1) {
            p = m > 12;
            break;
          }
      } else
        p = w === (y ? "pm" : "PM");
      return p;
    }, x = { A: [u, function(w) {
      this.afternoon = g(w, !1);
    }], a: [u, function(w) {
      this.afternoon = g(w, !0);
    }], S: [/\d/, function(w) {
      this.milliseconds = 100 * +w;
    }], SS: [v, function(w) {
      this.milliseconds = 10 * +w;
    }], SSS: [/\d{3}/, function(w) {
      this.milliseconds = +w;
    }], s: [l, n("seconds")], ss: [l, n("seconds")], m: [l, n("minutes")], mm: [l, n("minutes")], H: [l, n("hours")], h: [l, n("hours")], HH: [l, n("hours")], hh: [l, n("hours")], D: [l, n("day")], DD: [v, n("day")], Do: [u, function(w) {
      var y = s.ordinal, p = w.match(/\d+/);
      if (this.day = p[0], y)
        for (var B = 1; B <= 31; B += 1)
          y(B).replace(/\[|\]/g, "") === w && (this.day = B);
    }], M: [l, n("month")], MM: [v, n("month")], MMM: [u, function(w) {
      var y = f("months"), p = (f("monthsShort") || y.map(function(B) {
        return B.slice(0, 3);
      })).indexOf(w) + 1;
      if (p < 1)
        throw new Error();
      this.month = p % 12 || p;
    }], MMMM: [u, function(w) {
      var y = f("months").indexOf(w) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, n("year")], YY: [v, function(w) {
      this.year = o(w);
    }], YYYY: [/\d{4}/, n("year")], Z: a, ZZ: a };
    function k(w) {
      var y, p;
      y = w, p = s && s.formats;
      for (var B = (w = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(C, M, O) {
        var L = O && O.toUpperCase();
        return M || p[O] || i[O] || p[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, A, P) {
          return A || P.slice(1);
        });
      })).match(r), m = B.length, b = 0; b < m; b += 1) {
        var e = B[b], h = x[e], d = h && h[0], _ = h && h[1];
        B[b] = _ ? { regex: d, parser: _ } : e.replace(/^\[|\]$/g, "");
      }
      return function(C) {
        for (var M = {}, O = 0, L = 0; O < m; O += 1) {
          var G = B[O];
          if (typeof G == "string")
            L += G.length;
          else {
            var A = G.regex, P = G.parser, F = C.slice(L), N = A.exec(F)[0];
            P.call(M, N), C = C.replace(N, "");
          }
        }
        return function(j) {
          var z = j.afternoon;
          if (z !== void 0) {
            var J = j.hours;
            z ? J < 12 && (j.hours += 12) : J === 12 && (j.hours = 0), delete j.afternoon;
          }
        }(M), M;
      };
    }
    return function(w, y, p) {
      p.p.customParseFormat = !0, w && w.parseTwoDigitYear && (o = w.parseTwoDigitYear);
      var B = y.prototype, m = B.parse;
      B.parse = function(b) {
        var e = b.date, h = b.utc, d = b.args;
        this.$u = h;
        var _ = d[1];
        if (typeof _ == "string") {
          var C = d[2] === !0, M = d[3] === !0, O = C || M, L = d[2];
          M && (L = d[2]), s = this.$locale(), !C && L && (s = p.Ls[L]), this.$d = function(F, N, j) {
            try {
              if (["x", "X"].indexOf(N) > -1)
                return new Date((N === "X" ? 1e3 : 1) * F);
              var z = k(N)(F), J = z.year, st = z.month, Kt = z.day, Zt = z.hours, Jt = z.minutes, te = z.seconds, ee = z.milliseconds, Ct = z.zone, ht = new Date(), pt = Kt || (J || st ? 1 : ht.getDate()), mt = J || ht.getFullYear(), lt = 0;
              J && !st || (lt = st > 0 ? st - 1 : ht.getMonth());
              var vt = Zt || 0, wt = Jt || 0, yt = te || 0, bt = ee || 0;
              return Ct ? new Date(Date.UTC(mt, lt, pt, vt, wt, yt, bt + 60 * Ct.offset * 1e3)) : j ? new Date(Date.UTC(mt, lt, pt, vt, wt, yt, bt)) : new Date(mt, lt, pt, vt, wt, yt, bt);
            } catch {
              return new Date("");
            }
          }(e, _, h), this.init(), L && L !== !0 && (this.$L = this.locale(L).$L), O && e != this.format(_) && (this.$d = new Date("")), s = {};
        } else if (_ instanceof Array)
          for (var G = _.length, A = 1; A <= G; A += 1) {
            d[1] = _[A - 1];
            var P = p.apply(this, d);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            A === G && (this.$d = new Date(""));
          }
        else
          m.call(this, b);
      };
    };
  });
})(jt);
const ve = jt.exports, zt = Symbol("CHART_ROWS_KEY"), Pt = Symbol("CONFIG_KEY"), Ft = Symbol("EMIT_BAR_EVENT_KEY"), Nt = Symbol("BAR_CONTAINER_KEY");
function W() {
  const t = dt(Pt);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const qt = "YYYY-MM-DD HH:mm";
function ot(t = W()) {
  const { chartStart: c, chartEnd: i, barStart: r, barEnd: v, dateFormat: l } = t, u = H(() => o(c.value)), s = H(() => o(i.value)), o = (a, f) => {
    let g;
    if (f !== void 0 && typeof a != "string" && !(a instanceof Date) && (g = f === "start" ? a[r.value] : a[v.value]), typeof a == "string")
      g = a;
    else if (a instanceof Date)
      return R(a);
    const x = l.value || qt;
    return R(g, x, !0);
  };
  return {
    chartStartDayjs: u,
    chartEndDayjs: s,
    toDayjs: o,
    format: (a, f) => f === !1 ? a instanceof Date ? a : R(a).toDate() : (typeof a == "string" || a instanceof Date ? o(a) : a).format(f)
  };
}
function Qt() {
  const { precision: t } = W(), { chartStartDayjs: c, chartEndDayjs: i } = ot(), r = H(() => {
    switch (t == null ? void 0 : t.value) {
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
  }), v = H(() => {
    switch (t.value) {
      case "date":
        return "day";
      case "week":
        return "isoWeek";
      default:
        return t.value;
    }
  }), l = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "W",
    month: "MMM",
    year: "YYYY"
  }, u = H(() => {
    const s = [], o = [], n = i.value.diff(c.value, "minutes", !0), a = r.value, f = v.value;
    let g = c.value, x = c.value;
    for (; x.isSameOrBefore(i.value); ) {
      const k = x.endOf(f), y = k.isAfter(i.value) ? i.value.diff(x, "minutes", !0) / n * 100 : k.diff(x, "minutes", !0) / n * 100;
      o.push({
        label: x.format(l[t == null ? void 0 : t.value]),
        value: String(x),
        date: x.toDate(),
        width: String(y) + "%"
      }), x = k.add(1, f === "isoWeek" ? "week" : f).startOf(f);
    }
    for (; g.isSameOrBefore(i.value); ) {
      const k = g.endOf(a), y = k.isAfter(i.value) ? i.value.diff(g, "minutes", !0) / n * 100 : k.diff(g, "minutes", !0) / n * 100;
      s.push({
        label: g.format(l[a]),
        value: String(g),
        date: g.toDate(),
        width: String(y) + "%"
      }), g = k.add(1, a).startOf(a);
    }
    return { upperUnits: s, lowerUnits: o };
  });
  return u.value.lowerUnits[0].label === "53" && u.value.lowerUnits.splice(0, 1), u.value.lowerUnits[u.value.lowerUnits.length - 1].label === "1" && u.value.lowerUnits.splice(u.value.lowerUnits.length - 1, 1), u.value.lowerUnits[u.value.lowerUnits.length - 1].label === "14" && u.value.lowerUnits.splice(u.value.lowerUnits.length - 1, 1), {
    timeaxisUnits: u
  };
}
const we = { class: "g-grid-container" }, Dt = /* @__PURE__ */ V({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(t) {
    const { colors: c } = W(), { timeaxisUnits: i } = Qt(), r = (l) => {
      const u = +l >= 14 && +l <= 26, s = +l >= 40 && +l <= 52;
      return u || s ? "#f7f8f9" : "#ffffff";
    }, v = (l, u) => u === i.value.lowerUnits.length - 1 ? "unset" : l && Number(l) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2";
    return (l, u) => (E(), T("div", we, [
      (E(!0), T(K, null, et(D(i).lowerUnits, ({ label: s, value: o, width: n }, a) => {
        var f;
        return E(), T("div", {
          key: s,
          class: "g-grid-line",
          style: Y({
            width: n,
            borderRight: v(s, a),
            background: (f = l.highlightedUnits) != null && f.includes(Number(o)) ? D(c).hoverHighlight : void 0,
            backgroundColor: r(s)
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
function kt() {
  const t = dt(zt);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
const ye = { class: "g-label-column-rows" }, be = /* @__PURE__ */ V({
  __name: "GGanttLabelColumn",
  setup(t) {
    const { font: c, colors: i, labelColumnTitle: r, rowHeight: v } = W(), l = kt();
    return (u, s) => (E(), T("div", {
      class: "g-label-column",
      style: Y({ fontFamily: D(c), color: D(i).text })
    }, [
      I(u.$slots, "label-column-title", {}, () => [
        $("div", {
          class: "g-label-column-header",
          style: Y({ background: D(i).primary })
        }, Q(D(r)), 5)
      ]),
      $("div", ye, [
        (E(!0), T(K, null, et(D(l)(), ({ label: o }, n) => (E(), T("div", {
          key: `${o}_${n}`,
          class: "g-label-column-row",
          style: Y({
            background: n % 2 === 0 ? D(i).ternary : D(i).quartenary,
            height: `${D(v)}px`
          })
        }, [
          I(u.$slots, "label-column-row", { label: o }, () => [
            $("span", null, Q(o), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const xe = { class: "g-timeaxis" }, Be = { class: "g-timeunits-container g-timeunits-low" }, _e = {
  key: 0,
  class: "g-timeunit-low-kw"
}, ke = { class: "g-timeunits-container g-timeunits-upper" }, Ce = /* @__PURE__ */ V({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: c, colors: i } = W(), { timeaxisUnits: r } = Qt();
    return (v, l) => (E(), T("div", xe, [
      $("div", Be, [
        (E(!0), T(K, null, et(D(r).lowerUnits, ({ label: u, value: s, date: o, width: n }, a) => (E(), T("div", {
          key: u,
          class: "g-timeunit g-timeunit-low",
          style: Y({
            flexDirection: D(c) === "hour" ? "column" : "row",
            alignItems: D(c) === "hour" ? "" : "center",
            width: n
          })
        }, [
          a === 0 ? (E(), T("span", _e, "KW")) : U("", !0),
          I(v.$slots, "timeunit", {
            label: u,
            value: s,
            date: o
          }, () => [
            rt(Q(u), 1)
          ]),
          D(c) === "hour" ? (E(), T("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: Y({ background: D(i).text })
          }, null, 4)) : U("", !0)
        ], 4))), 128))
      ]),
      $("div", ke, [
        (E(!0), T(K, null, et(D(r).upperUnits, ({ label: u, value: s, date: o, width: n }, a) => (E(), T("div", {
          key: u,
          class: "g-upper-timeunit",
          style: Y({
            width: n
          })
        }, [
          I(v.$slots, "upper-timeunit", {
            label: u,
            value: s,
            date: o
          }, () => [
            rt(Q(u), 1)
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
const De = "cadetblue", Ee = /* @__PURE__ */ V({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(t) {
    const c = t, i = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      date: "DD. MMMM YYYY",
      month: "DD. MMMM YYYY",
      week: "DD. MMMM YYYY (WW)"
    }, { bar: r } = at(c), { precision: v, font: l, barStart: u, barEnd: s, rowHeight: o } = W(), n = S("0px"), a = S("0px");
    ft(
      () => c.bar,
      async () => {
        var e;
        await Yt();
        const y = ((e = r == null ? void 0 : r.value) == null ? void 0 : e.ganttBarConfig.id) || "";
        if (!y)
          return;
        const p = document.getElementById(y), { top: B, left: m } = (p == null ? void 0 : p.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, b = Math.max(m, 10);
        n.value = `${B + o.value - 10}px`, a.value = `${b}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const f = H(() => {
      var y, p;
      return ((p = (y = r == null ? void 0 : r.value) == null ? void 0 : y.ganttBarConfig.style) == null ? void 0 : p.background) || De;
    }), { toDayjs: g } = ot(), x = H(() => {
      var y;
      return (y = r.value) == null ? void 0 : y[u.value];
    }), k = H(() => {
      var y;
      return (y = r.value) == null ? void 0 : y[s.value];
    }), w = H(() => {
      if (!(r != null && r.value))
        return "";
      const y = i[v.value], p = g(x.value).format(y), B = g(k.value).format(y);
      return `${p} \u2013 ${B}`;
    });
    return (y, p) => (E(), tt(ne, { to: "body" }, [
      ct(re, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: q(() => [
          y.modelValue ? (E(), T("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: Y({
              top: n.value,
              left: a.value,
              fontFamily: D(l)
            })
          }, [
            $("div", {
              class: "g-gantt-tooltip-color-dot",
              style: Y({ background: f.value })
            }, null, 4),
            I(y.$slots, "default", {
              bar: D(r),
              barStart: x.value,
              barEnd: k.value
            }, () => [
              rt(Q(w.value), 1)
            ])
          ], 4)) : U("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function gt(t = W()) {
  const { dateFormat: c, chartSize: i } = t, { chartStartDayjs: r, chartEndDayjs: v, toDayjs: l, format: u } = ot(t), s = H(() => v.value.diff(r.value, "minutes"));
  return {
    mapTimeToPosition: (a) => {
      const f = i.width.value || 0, g = l(a).diff(r.value, "minutes", !0);
      return Math.ceil(g / s.value * f);
    },
    mapPositionToTime: (a) => {
      const f = i.width.value || 0, g = a / f * s.value;
      return u(r.value.add(g, "minutes"), c.value);
    }
  };
}
const Oe = /* @__PURE__ */ V({
  __name: "GGanttCurrentTime",
  setup(t) {
    const { mapTimeToPosition: c } = gt(), i = S(R()), { colors: r, dateFormat: v, currentTimeLabel: l } = W(), u = H(() => {
      const s = v.value || "YYYY-MM-DD HH:mm";
      return c(R(i.value, s).format(s));
    });
    return (s, o) => (E(), T("div", {
      class: "g-grid-current-time",
      style: Y({
        left: `${u.value}px`
      })
    }, [
      $("div", {
        class: "g-grid-current-time-marker",
        style: Y({
          border: `1px dashed ${D(r).markerCurrentTime}`
        })
      }, null, 4),
      $("span", {
        class: "g-grid-current-time-text",
        style: Y({ color: D(r).markerCurrentTime })
      }, [
        I(s.$slots, "current-time-label", {}, () => [
          rt(Q(D(l)), 1)
        ])
      ], 4)
    ], 4));
  }
});
var Et;
const it = typeof window < "u";
it && ((Et = window == null ? void 0 : window.navigator) == null ? void 0 : Et.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Te(t) {
  return typeof t == "function" ? t() : D(t);
}
function Me(t) {
  return t;
}
function $e(t) {
  return ae() ? (oe(t), !0) : !1;
}
function Le(t, c = !0) {
  ie() ? _t(t) : c ? t() : Yt(t);
}
function Vt(t) {
  var c;
  const i = Te(t);
  return (c = i == null ? void 0 : i.$el) != null ? c : i;
}
const Se = it ? window : void 0;
it && window.document;
it && window.navigator;
it && window.location;
function Ye(t, c = !1) {
  const i = S(), r = () => i.value = Boolean(t());
  return r(), Le(r, c), i;
}
const xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bt = "__vueuse_ssr_handlers__";
xt[Bt] = xt[Bt] || {};
xt[Bt];
var Ot = Object.getOwnPropertySymbols, Ge = Object.prototype.hasOwnProperty, Ie = Object.prototype.propertyIsEnumerable, Re = (t, c) => {
  var i = {};
  for (var r in t)
    Ge.call(t, r) && c.indexOf(r) < 0 && (i[r] = t[r]);
  if (t != null && Ot)
    for (var r of Ot(t))
      c.indexOf(r) < 0 && Ie.call(t, r) && (i[r] = t[r]);
  return i;
};
function He(t, c, i = {}) {
  const r = i, { window: v = Se } = r, l = Re(r, ["window"]);
  let u;
  const s = Ye(() => v && "ResizeObserver" in v), o = () => {
    u && (u.disconnect(), u = void 0);
  }, n = ft(() => Vt(t), (f) => {
    o(), s.value && v && f && (u = new ResizeObserver(c), u.observe(f, l));
  }, { immediate: !0, flush: "post" }), a = () => {
    o(), n();
  };
  return $e(a), {
    isSupported: s,
    stop: a
  };
}
function Ae(t, c = { width: 0, height: 0 }, i = {}) {
  const r = S(c.width), v = S(c.height);
  return He(t, ([l]) => {
    r.value = l.contentRect.width, v.value = l.contentRect.height;
  }, i), ft(() => Vt(t), (l) => {
    r.value = l ? c.width : 0, v.value = l ? c.height : 0;
  }), {
    width: r,
    height: v
  };
}
var Tt;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Tt || (Tt = {}));
var We = Object.defineProperty, Mt = Object.getOwnPropertySymbols, Ue = Object.prototype.hasOwnProperty, je = Object.prototype.propertyIsEnumerable, $t = (t, c, i) => c in t ? We(t, c, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[c] = i, ze = (t, c) => {
  for (var i in c || (c = {}))
    Ue.call(c, i) && $t(t, i, c[i]);
  if (Mt)
    for (var i of Mt(c))
      je.call(c, i) && $t(t, i, c[i]);
  return t;
};
const Pe = {
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
ze({
  linear: Me
}, Pe);
const Lt = {
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
}, Fe = /* @__PURE__ */ $("div", { class: "g-gantt-chart-overview" }, null, -1), Ne = { class: "g-gantt-chart-quarters" }, qe = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q1", -1), Qe = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q2", -1), Ve = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q3", -1), Xe = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q4", -1), Ke = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, Ze = /* @__PURE__ */ V({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    currentTime: { type: Boolean },
    currentTimeLabel: { default: "" },
    dateFormat: { type: [String, Boolean], default: qt },
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
    verticalGrid: { type: Boolean }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(t, { emit: c }) {
    const i = t;
    R.extend(At);
    const r = new Date(), v = new Date();
    r.setDate(15), r.setMonth(10), v.setDate(31), v.setMonth(11);
    const l = S(
      R(new Date()).isBetween(r, v)
    ), { width: u, font: s, colorScheme: o } = at(i), n = se(), a = H(
      () => typeof o.value != "string" ? o.value : Lt[o.value] || Lt.default
    ), f = () => {
      var d;
      const e = (d = n.default) == null ? void 0 : d.call(n), h = [];
      return e && e.forEach((_) => {
        var C;
        if ((C = _.props) != null && C.bars) {
          const { label: M, bars: O } = _.props;
          h.push({ label: M, bars: O });
        } else
          Array.isArray(_.children) && _.children.forEach((M) => {
            var L;
            const O = M;
            if ((L = O == null ? void 0 : O.props) != null && L.bars) {
              const { label: G, bars: A } = O.props;
              h.push({ label: G, bars: A });
            }
          });
      }), h;
    }, g = S(!1), x = S(!1), k = S(void 0);
    let w;
    const y = (e) => {
      w && clearTimeout(w), w = setTimeout(() => {
        g.value = !0;
      }, 800), k.value = e;
    }, p = () => {
      clearTimeout(w), g.value = !1;
    }, B = (e, h, d, _) => {
      switch (e.type) {
        case "click":
          c("click-bar", { bar: h, e, datetime: d });
          break;
        case "mousedown":
          c("mousedown-bar", { bar: h, e, datetime: d });
          break;
        case "mouseup":
          c("mouseup-bar", { bar: h, e, datetime: d });
          break;
        case "dblclick":
          c("dblclick-bar", { bar: h, e, datetime: d });
          break;
        case "mouseenter":
          y(h), c("mouseenter-bar", { bar: h, e });
          break;
        case "mouseleave":
          p(), c("mouseleave-bar", { bar: h, e });
          break;
        case "dragstart":
          x.value = !0, c("dragstart-bar", { bar: h, e });
          break;
        case "drag":
          c("drag-bar", { bar: h, e });
          break;
        case "dragend":
          x.value = !1, c("dragend-bar", { bar: h, e, movedBars: _ });
          break;
        case "contextmenu":
          c("contextmenu-bar", { bar: h, e, datetime: d });
          break;
      }
    }, m = S(null), b = Ae(m);
    return document.getElementsByClassName("g-timeunit-low"), ut(zt, f), ut(Pt, {
      ...at(i),
      colors: a,
      chartSize: b
    }), ut(Ft, B), (e, h) => (E(), T("div", {
      class: nt(["g-gantt-chart-container", [
        l.value ? "g-gantt-chart-container--5-quarters-width" : "g-gantt-chart-container--4-quarters-width"
      ]])
    }, [
      Fe,
      $("div", {
        class: nt([{ "labels-in-column": !!e.labelColumnTitle }])
      }, [
        e.labelColumnTitle ? (E(), tt(be, {
          key: 0,
          style: Y({
            width: e.labelColumnWidth
          })
        }, {
          "label-column-title": q(() => [
            I(e.$slots, "label-column-title")
          ]),
          "label-column-row": q(({ label: d }) => [
            I(e.$slots, "label-column-row", { label: d })
          ]),
          _: 3
        }, 8, ["style"])) : U("", !0),
        $("div", {
          ref_key: "ganttChart",
          ref: m,
          class: nt(["g-gantt-chart", { "with-column": e.labelColumnTitle }]),
          style: Y({ width: D(u), background: a.value.background, fontFamily: D(s) })
        }, [
          e.grid ? (E(), tt(Dt, {
            key: 0,
            "highlighted-units": e.highlightedUnits
          }, null, 8, ["highlighted-units"])) : U("", !0),
          e.currentTime ? (E(), tt(Oe, { key: 1 }, {
            "current-time-label": q(() => [
              I(e.$slots, "current-time-label")
            ]),
            _: 3
          })) : U("", !0),
          $("div", Ne, [
            qe,
            Qe,
            Ve,
            Xe,
            l.value ? (E(), T("div", Ke, "Q1")) : U("", !0)
          ]),
          $("div", {
            class: nt([
              "g-gantt-rows-container",
              i.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            I(e.$slots, "default"),
            ct(Dt, { "highlighted-units": e.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          e.hideTimeaxis ? U("", !0) : (E(), tt(Ce, { key: 2 }, {
            "upper-timeunit": q(({ label: d, value: _, date: C }) => [
              I(e.$slots, "upper-timeunit", {
                label: d,
                value: _,
                date: C
              })
            ]),
            timeunit: q(({ label: d, value: _, date: C }) => [
              I(e.$slots, "timeunit", {
                label: d,
                value: _,
                date: C
              })
            ]),
            _: 3
          }))
        ], 6)
      ], 2),
      ct(Ee, {
        "model-value": g.value || x.value,
        bar: k.value
      }, {
        default: q(() => [
          I(e.$slots, "bar-tooltip", { bar: k.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ], 2));
  }
});
function St(t, c = () => null, i = () => null, r = W()) {
  const { barStart: v, barEnd: l, pushOnOverlap: u } = r, s = S(!1);
  let o = 0, n;
  const { mapPositionToTime: a } = gt(r), { toDayjs: f } = ot(r), g = (m) => {
    const b = document.getElementById(t.ganttBarConfig.id);
    if (!b)
      return;
    switch (o = m.clientX - (b.getBoundingClientRect().left || 0), m.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", n = w;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", n = y;
        break;
      default:
        n = k;
    }
    s.value = !0, window.addEventListener("mousemove", n), window.addEventListener("mouseup", B);
  }, x = () => {
    var e;
    const m = document.getElementById(t.ganttBarConfig.id), b = (e = m == null ? void 0 : m.closest(".g-gantt-row-bars-container")) == null ? void 0 : e.getBoundingClientRect();
    return { barElement: m, barContainer: b };
  }, k = (m) => {
    const { barElement: b, barContainer: e } = x();
    if (!b || !e)
      return;
    const h = b.getBoundingClientRect().width, d = m.clientX - e.left - o, _ = d + h;
    p(d, _) || (t[v.value] = a(d), t[l.value] = a(_), c(m, t));
  }, w = (m) => {
    const { barElement: b, barContainer: e } = x();
    if (!b || !e)
      return;
    const h = m.clientX - e.left, d = a(h);
    f(d).isSameOrAfter(f(t, "end")) || (t[v.value] = d, c(m, t));
  }, y = (m) => {
    const { barElement: b, barContainer: e } = x();
    if (!b || !e)
      return;
    const h = m.clientX - e.left, d = a(h);
    f(d).isSameOrBefore(f(t, "start")) || (t[l.value] = d, c(m, t));
  }, p = (m, b) => {
    if (!u.value)
      return !1;
    const e = t.ganttBarConfig.dragLimitLeft, h = t.ganttBarConfig.dragLimitRight;
    return m && e != null && m < e || b && h != null && b > h;
  }, B = (m) => {
    s.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", B), i(m, t);
  };
  return {
    isDragging: s,
    initDrag: g
  };
}
function Xt() {
  const t = dt(Ft);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Je() {
  const t = W(), c = kt(), i = Xt(), { pushOnOverlap: r, barStart: v, barEnd: l, noOverlap: u, dateFormat: s } = t, o = /* @__PURE__ */ new Map(), { toDayjs: n, format: a } = ot(), f = (e, h) => {
    const { initDrag: d } = St(e, x, B, t);
    i({ ...h, type: "dragstart" }, e), d(h), m(e);
  }, g = (e, h) => {
    const d = e.ganttBarConfig.bundle;
    d != null && (c().forEach((_) => {
      _.bars.forEach((C) => {
        if (C.ganttBarConfig.bundle === d) {
          const M = C === e ? B : () => null, { initDrag: O } = St(C, x, M, t);
          O(h), m(C);
        }
      });
    }), i({ ...h, type: "dragstart" }, e));
  }, x = (e, h) => {
    i({ ...e, type: "drag" }, h), k(h);
  }, k = (e) => {
    if (!(r != null && r.value))
      return;
    let h = e, { overlapBar: d, overlapType: _ } = w(h);
    for (; d; ) {
      m(d);
      const C = n(h[v.value]), M = n(h[l.value]), O = n(d[v.value]), L = n(d[l.value]);
      let G;
      switch (_) {
        case "left":
          G = L.diff(C, "minutes", !0), d[l.value] = a(h[v.value], s.value), d[v.value] = a(
            O.subtract(G, "minutes"),
            s.value
          );
          break;
        case "right":
          G = M.diff(O, "minutes", !0), d[v.value] = a(M, s.value), d[l.value] = a(
            L.add(G, "minutes"),
            s.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      d && (_ === "left" || _ === "right") && y(d, G, _), h = d, { overlapBar: d, overlapType: _ } = w(d);
    }
  }, w = (e) => {
    var A, P;
    let h, d, _;
    const C = (P = (A = c().find((F) => F.bars.includes(e))) == null ? void 0 : A.bars) != null ? P : [], M = n(e[v.value]), O = n(e[l.value]);
    return { overlapBar: C.find((F) => {
      if (F === e)
        return !1;
      const N = n(F[v.value]), j = n(F[l.value]);
      return h = M.isBetween(N, j), d = O.isBetween(N, j), _ = N.isBetween(M, O) || j.isBetween(M, O), h || d || _;
    }), overlapType: h ? "left" : d ? "right" : _ ? "between" : null };
  }, y = (e, h, d) => {
    m(e), e.ganttBarConfig.bundle && c().forEach((_) => {
      _.bars.forEach((C) => {
        C.ganttBarConfig.bundle === e.ganttBarConfig.bundle && C !== e && (m(C), p(C, h, d));
      });
    });
  }, p = (e, h, d) => {
    switch (d) {
      case "left":
        e[v.value] = a(
          n(e, "start").subtract(h, "minutes"),
          s.value
        ), e[l.value] = a(
          n(e, "end").subtract(h, "minutes"),
          s.value
        );
        break;
      case "right":
        e[v.value] = a(
          n(e, "start").add(h, "minutes"),
          s.value
        ), e[l.value] = a(n(e, "end").add(h, "minutes"), s.value);
    }
    k(e);
  }, B = (e, h) => {
    b();
    const d = {
      ...e,
      type: "dragend"
    };
    i(d, h, void 0, new Map(o)), o.clear();
  }, m = (e) => {
    if (!o.has(e)) {
      const h = e[v.value], d = e[l.value];
      o.set(e, { oldStart: h, oldEnd: d });
    }
  }, b = () => {
    if (r.value || !u.value)
      return;
    let e = !1;
    o.forEach((h, d) => {
      const { overlapBar: _ } = w(d);
      _ != null && (e = !0);
    }), e && o.forEach(({ oldStart: h, oldEnd: d }, _) => {
      _[v.value] = h, _[l.value] = d;
    });
  };
  return {
    initDragOfBar: f,
    initDragOfBundle: g
  };
}
function tn() {
  const { pushOnOverlap: t } = W(), c = kt(), i = (u) => {
    const s = [];
    return u != null && c().forEach((o) => {
      o.bars.forEach((n) => {
        n.ganttBarConfig.bundle === u && s.push(n);
      });
    }), s;
  }, r = (u) => {
    if (!t.value || u.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const o of ["left", "right"]) {
      const n = o, { gapDistanceSoFar: a, bundleBarsAndGapDist: f } = v(
        u,
        0,
        n
      );
      let g = a;
      const x = f;
      if (!x)
        continue;
      for (let w = 0; w < x.length; w++) {
        const y = x[w].bar, p = x[w].gapDistance;
        i(y.ganttBarConfig.bundle).filter(
          (m) => m !== y
        ).forEach((m) => {
          const b = v(m, p, n), e = b.gapDistanceSoFar, h = b.bundleBarsAndGapDist;
          e != null && (!g || e < g) && (g = e), h.forEach((d) => {
            x.find((_) => _.bar === d.bar) || x.push(d);
          });
        });
      }
      const k = document.getElementById(u.ganttBarConfig.id);
      g != null && n === "left" ? u.ganttBarConfig.dragLimitLeft = k.offsetLeft - g : g != null && n === "right" && (u.ganttBarConfig.dragLimitRight = k.offsetLeft + k.offsetWidth + g);
    }
    i(u.ganttBarConfig.bundle).forEach((o) => {
      o.ganttBarConfig.dragLimitLeft = u.ganttBarConfig.dragLimitLeft, o.ganttBarConfig.dragLimitRight = u.ganttBarConfig.dragLimitRight;
    });
  }, v = (u, s = 0, o) => {
    const n = u.ganttBarConfig.bundle ? [{ bar: u, gapDistance: s }] : [];
    let a = u, f = l(a, o);
    if (o === "left")
      for (; f; ) {
        const g = document.getElementById(a.ganttBarConfig.id), x = document.getElementById(f.ganttBarConfig.id), k = x.offsetLeft + x.offsetWidth;
        if (s += g.offsetLeft - k, f.ganttBarConfig.immobile)
          return { gapDistanceSoFar: s, bundleBarsAndGapDist: n };
        f.ganttBarConfig.bundle && n.push({
          bar: f,
          gapDistance: s
        }), a = f, f = l(f, "left");
      }
    if (o === "right")
      for (; f; ) {
        const g = document.getElementById(a.ganttBarConfig.id), x = document.getElementById(f.ganttBarConfig.id), k = g.offsetLeft + g.offsetWidth;
        if (s += x.offsetLeft - k, f.ganttBarConfig.immobile)
          return { gapDistanceSoFar: s, bundleBarsAndGapDist: n };
        f.ganttBarConfig.bundle && n.push({
          bar: f,
          gapDistance: s
        }), a = f, f = l(f, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: n };
  }, l = (u, s) => {
    var f, g;
    const o = document.getElementById(u.ganttBarConfig.id), n = (g = (f = c().find((x) => x.bars.includes(u))) == null ? void 0 : f.bars) != null ? g : [];
    let a = [];
    return s === "left" ? a = n.filter((x) => {
      const k = document.getElementById(x.ganttBarConfig.id);
      return k && k.offsetLeft < o.offsetLeft && x.ganttBarConfig.pushOnOverlap !== !1;
    }) : a = n.filter((x) => {
      const k = document.getElementById(x.ganttBarConfig.id);
      return k && k.offsetLeft > o.offsetLeft && x.ganttBarConfig.pushOnOverlap !== !1;
    }), a.length > 0 ? a.reduce((x, k) => {
      const w = document.getElementById(x.ganttBarConfig.id), y = document.getElementById(k.ganttBarConfig.id), p = Math.abs(w.offsetLeft - o.offsetLeft), B = Math.abs(y.offsetLeft - o.offsetLeft);
      return p < B ? x : k;
    }, a[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: r
  };
}
const en = ["id"], nn = { class: "g-gantt-bar-label" }, rn = ["innerHTML"], an = /* @__PURE__ */ $("div", { class: "g-gantt-bar-handle-left" }, null, -1), on = /* @__PURE__ */ $("div", { class: "g-gantt-bar-handle-right" }, null, -1), sn = 8, ln = /* @__PURE__ */ V({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(t) {
    var h;
    const c = t;
    le((d) => ({
      "22f5b0ec": D(u)
    }));
    const i = Xt(), r = W(), { rowHeight: v } = r, { bar: l } = at(c), u = (h = c.bar.ganttBarConfig.style) == null ? void 0 : h.backgroundColor, { mapTimeToPosition: s, mapPositionToTime: o } = gt();
    Je(), tn();
    const n = S(!1), a = H(() => l.value.ganttBarConfig), f = dt(Nt), g = (d) => {
      var M;
      d.preventDefault();
      const _ = (M = f == null ? void 0 : f.value) == null ? void 0 : M.getBoundingClientRect();
      if (!_)
        return;
      const C = o(d.clientX - _.left);
      i(d, l.value, C);
    }, { barStart: x, barEnd: k, width: w, chartStart: y, chartEnd: p, chartSize: B } = r, m = S(0), b = S(0), e = H(() => {
      const d = new Date(l.value.myBeginDate).getTime(), _ = new Date(l.value.myEndDate).getTime();
      return Math.abs(d - _) / (1e3 * 60 * 60 * 24) <= 2 ? 0 : b.value - m.value - sn;
    });
    return _t(() => {
      ft(
        [l, w, y, p, B.width],
        () => {
          m.value = s(l.value[x.value]), b.value = s(l.value[k.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (d, _) => {
      var C;
      return E(), T("div", {
        id: a.value.id,
        class: nt(["g-gantt-bar", a.value.asArrow ? "g-gantt-bar-is-arrow" : "", a.value.class || ""]),
        style: Y({
          ...a.value.style,
          position: "absolute",
          top: `${D(v) * 0.1}px`,
          left: `${m.value}px`,
          width: `${e.value}px`,
          height: `${D(v) * 0.8}px`,
          zIndex: n.value ? 3 : 2
        }),
        onMousedown: g,
        onClick: g,
        onDblclick: g,
        onMouseenter: g,
        onMouseleave: g,
        onContextmenu: g
      }, [
        $("div", nn, [
          I(d.$slots, "default", { bar: D(l) }, () => [
            $("div", null, Q(a.value.label || ""), 1),
            a.value.html ? (E(), T("div", {
              key: 0,
              innerHTML: a.value.html
            }, null, 8, rn)) : U("", !0)
          ])
        ]),
        a.value.asArrow ? (E(), T("div", {
          key: 0,
          class: "g-gantt-bar-arrow",
          style: Y({
            borderLeft: `8px solid #${(C = D(l).ganttBarConfig.style) == null ? void 0 : C.backgroundColor}`
          })
        }, null, 4)) : U("", !0),
        a.value.hasHandles ? (E(), T(K, { key: 1 }, [
          an,
          on
        ], 64)) : U("", !0)
      ], 46, en);
    };
  }
});
const un = /* @__PURE__ */ V({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    overlaps: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: c }) {
    const i = t, r = S([]), { rowHeight: v, colors: l, labelColumnTitle: u } = W(), { highlightOnHover: s } = at(i), o = S(!1), n = H(() => ({
      height: `${v.value}px`,
      background: (s == null ? void 0 : s.value) && o.value ? l.value.hoverHighlight : null
    })), { mapPositionToTime: a } = gt(), f = S(null);
    ut(Nt, f);
    const g = (p) => {
      var e;
      const B = (e = f.value) == null ? void 0 : e.getBoundingClientRect();
      if (!B) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const m = p.clientX - B.left, b = a(m);
      c("drop", { e: p, datetime: b });
    };
    function x(p, B, m, b) {
      return p <= b && m <= B;
    }
    function k(p) {
      const B = [];
      for (let m = 0; m < p.length; m++)
        for (let b = m + 1; b < p.length; b++)
          x(
            p[m].myBeginDate,
            p[m].myEndDate,
            p[b].myBeginDate,
            p[b].myEndDate
          ) && B.push(R(p[m].myEndDate).isAfter(p[b].myEndDate) ? p[m] : p[b]);
      return B;
    }
    const w = () => {
      const p = [], B = (m) => {
        if (!m || m.length === 0)
          return;
        const b = k(m);
        if (b.length > 0) {
          const e = m.filter((d) => !b.includes(d)), h = m.filter((d) => b.includes(d));
          p.push(e), B(h);
        } else
          p.push(m);
      };
      return B(i.bars), p;
    };
    _t(() => {
      r.value = w();
    });
    const y = (p) => !p || /^\s*$/.test(p);
    return (p, B) => (E(), T("div", null, [
      (E(!0), T(K, null, et(r.value, (m) => (E(), T("div", {
        class: "g-gantt-row",
        style: Y(n.value),
        onDragover: B[0] || (B[0] = ue((b) => o.value = !0, ["prevent"])),
        onDragleave: B[1] || (B[1] = (b) => o.value = !1),
        onDrop: B[2] || (B[2] = (b) => g(b)),
        onMouseover: B[3] || (B[3] = (b) => o.value = !0),
        onMouseleave: B[4] || (B[4] = (b) => o.value = !1)
      }, [
        !y(p.label) && !D(u) ? (E(), T("div", {
          key: 0,
          class: "g-gantt-row-label",
          style: Y({ background: D(l).primary, color: D(l).text })
        }, [
          I(p.$slots, "label", {}, () => [
            rt(Q(p.label), 1)
          ])
        ], 4)) : U("", !0),
        $("div", ce({
          ref_for: !0,
          ref_key: "barContainer",
          ref: f,
          class: "g-gantt-row-bars-container"
        }, p.$attrs), [
          ct(de, {
            name: "bar-transition sys",
            tag: "div"
          }, {
            default: q(() => [
              (E(!0), T(K, null, et(m, (b) => (E(), tt(ln, {
                key: b.ganttBarConfig.id,
                bar: b
              }, {
                default: q(() => [
                  I(p.$slots, "bar-label", { bar: b })
                ]),
                _: 2
              }, 1032, ["bar"]))), 128))
            ]),
            _: 2
          }, 1024)
        ], 16)
      ], 36))), 256))
    ]));
  }
});
function cn() {
  R.extend(ge), R.extend(he), R.extend(At), R.extend(ve), R.extend(pe), R.extend(fe), R.extend(me);
}
const hn = {
  install(t, c) {
    cn(), t.component("GGanttChart", Ze), t.component("GGanttRow", un);
  }
};
function X(t, c = "top") {
  if (!t || typeof document > "u")
    return;
  const i = document.head, r = document.createElement("style");
  c === "top" && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.appendChild(document.createTextNode(t));
}
X(`
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
.g-gantt-chart-container {
  background: #f0f1f2;
  padding: 0 24px 0 16px;
  border-top: 4px solid #91979C;
  border-bottom: 4px solid #91979C;
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
  padding: 16px 0;
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
X(`
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
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
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
X(`
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
  border-radius: 0px;
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
  border-left: 8px solid var(--22f5b0ec);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  z-index: 10;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
`, "top");
X(`
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
X(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`, "top");
X(`
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
X(`
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
X(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
}
`, "top");
export {
  Ze as GGanttChart,
  un as GGanttRow,
  hn as default,
  cn as extendDayjs,
  hn as ganttastic
};
