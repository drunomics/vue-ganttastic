import W from "dayjs";
import { inject as dt, computed as H, defineComponent as V, openBlock as D, createElementBlock as M, Fragment as Z, renderList as et, unref as C, normalizeStyle as Y, renderSlot as I, createElementVNode as $, toDisplayString as Q, createCommentVNode as j, createTextVNode as nt, toRefs as at, ref as R, watch as ft, nextTick as Rt, createBlock as K, Teleport as ie, createVNode as ot, Transition as se, withCtx as U, getCurrentScope as le, onScopeDispose as ue, getCurrentInstance as ce, onMounted as Ht, useSlots as de, provide as ct, normalizeClass as rt, useCssVars as fe, withModifiers as Ct, mergeProps as Dt, TransitionGroup as Et } from "vue";
var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, At = { exports: {} };
(function(t, d) {
  (function(o, r) {
    t.exports = r();
  })(J, function() {
    var o = "day";
    return function(r, h, i) {
      var c = function(e) {
        return e.add(4 - e.isoWeekday(), o);
      }, a = h.prototype;
      a.isoWeekYear = function() {
        return c(this).year();
      }, a.isoWeek = function(e) {
        if (!this.$utils().u(e))
          return this.add(7 * (e - this.isoWeek()), o);
        var l, g, m, u, w = c(this), f = (l = this.isoWeekYear(), g = this.$u, m = (g ? i.utc : i)().year(l).startOf("year"), u = 4 - m.isoWeekday(), m.isoWeekday() > 4 && (u += 7), m.add(u, o));
        return w.diff(f, "week") + 1;
      }, a.isoWeekday = function(e) {
        return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7);
      };
      var s = a.startOf;
      a.startOf = function(e, l) {
        var g = this.$utils(), m = !!g.u(l) || l;
        return g.p(e) === "isoweek" ? m ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : s.bind(this)(e, l);
      };
    };
  });
})(At);
const ge = At.exports;
var Wt = { exports: {} };
(function(t, d) {
  (function(o, r) {
    t.exports = r();
  })(J, function() {
    return function(o, r) {
      r.prototype.isSameOrBefore = function(h, i) {
        return this.isSame(h, i) || this.isBefore(h, i);
      };
    };
  });
})(Wt);
const he = Wt.exports;
var jt = { exports: {} };
(function(t, d) {
  (function(o, r) {
    t.exports = r();
  })(J, function() {
    return function(o, r) {
      r.prototype.isSameOrAfter = function(h, i) {
        return this.isSame(h, i) || this.isAfter(h, i);
      };
    };
  });
})(jt);
const pe = jt.exports;
var zt = { exports: {} };
(function(t, d) {
  (function(o, r) {
    t.exports = r();
  })(J, function() {
    return function(o, r, h) {
      r.prototype.isBetween = function(i, c, a, s) {
        var e = h(i), l = h(c), g = (s = s || "()")[0] === "(", m = s[1] === ")";
        return (g ? this.isAfter(e, a) : !this.isBefore(e, a)) && (m ? this.isBefore(l, a) : !this.isAfter(l, a)) || (g ? this.isBefore(e, a) : !this.isAfter(e, a)) && (m ? this.isAfter(l, a) : !this.isBefore(l, a));
      };
    };
  });
})(zt);
const Pt = zt.exports;
var Ft = { exports: {} };
(function(t, d) {
  (function(o, r) {
    t.exports = r();
  })(J, function() {
    var o = "week", r = "year";
    return function(h, i, c) {
      var a = i.prototype;
      a.week = function(s) {
        if (s === void 0 && (s = null), s !== null)
          return this.add(7 * (s - this.week()), "day");
        var e = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var l = c(this).startOf(r).add(1, r).date(e), g = c(this).endOf(o);
          if (l.isBefore(g))
            return 1;
        }
        var m = c(this).startOf(r).date(e).startOf(o).subtract(1, "millisecond"), u = this.diff(m, o, !0);
        return u < 0 ? c(this).startOf("week").week() : Math.ceil(u);
      }, a.weeks = function(s) {
        return s === void 0 && (s = null), this.week(s);
      };
    };
  });
})(Ft);
const me = Ft.exports;
var Ut = { exports: {} };
(function(t, d) {
  (function(o, r) {
    t.exports = r();
  })(J, function() {
    return function(o, r, h) {
      var i = r.prototype, c = i.format;
      h.en.ordinal = function(a) {
        var s = ["th", "st", "nd", "rd"], e = a % 100;
        return "[" + a + (s[(e - 20) % 10] || s[e] || s[0]) + "]";
      }, i.format = function(a) {
        var s = this, e = this.$locale();
        if (!this.isValid())
          return c.bind(this)(a);
        var l = this.$utils(), g = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(m) {
          switch (m) {
            case "Q":
              return Math.ceil((s.$M + 1) / 3);
            case "Do":
              return e.ordinal(s.$D);
            case "gggg":
              return s.weekYear();
            case "GGGG":
              return s.isoWeekYear();
            case "wo":
              return e.ordinal(s.week(), "W");
            case "w":
            case "ww":
              return l.s(s.week(), m === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return l.s(s.isoWeek(), m === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return l.s(String(s.$H === 0 ? 24 : s.$H), m === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(s.$d.getTime() / 1e3);
            case "x":
              return s.$d.getTime();
            case "z":
              return "[" + s.offsetName() + "]";
            case "zzz":
              return "[" + s.offsetName("long") + "]";
            default:
              return m;
          }
        });
        return c.bind(this)(g);
      };
    };
  });
})(Ut);
const ve = Ut.exports;
var Nt = { exports: {} };
(function(t, d) {
  (function(o, r) {
    t.exports = r();
  })(J, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, h = /\d\d/, i = /\d\d?/, c = /\d*[^-_:/,()\s\d]+/, a = {}, s = function(f) {
      return (f = +f) + (f > 68 ? 1900 : 2e3);
    }, e = function(f) {
      return function(b) {
        this[f] = +b;
      };
    }, l = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var y = b.match(/([+-]|\d\d)/g), B = 60 * y[1] + (+y[2] || 0);
        return B === 0 ? 0 : y[0] === "+" ? -B : B;
      }(f);
    }], g = function(f) {
      var b = a[f];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, m = function(f, b) {
      var y, B = a.meridiem;
      if (B) {
        for (var x = 1; x <= 24; x += 1)
          if (f.indexOf(B(x, 0, b)) > -1) {
            y = x > 12;
            break;
          }
      } else
        y = f === (b ? "pm" : "PM");
      return y;
    }, u = { A: [c, function(f) {
      this.afternoon = m(f, !1);
    }], a: [c, function(f) {
      this.afternoon = m(f, !0);
    }], S: [/\d/, function(f) {
      this.milliseconds = 100 * +f;
    }], SS: [h, function(f) {
      this.milliseconds = 10 * +f;
    }], SSS: [/\d{3}/, function(f) {
      this.milliseconds = +f;
    }], s: [i, e("seconds")], ss: [i, e("seconds")], m: [i, e("minutes")], mm: [i, e("minutes")], H: [i, e("hours")], h: [i, e("hours")], HH: [i, e("hours")], hh: [i, e("hours")], D: [i, e("day")], DD: [h, e("day")], Do: [c, function(f) {
      var b = a.ordinal, y = f.match(/\d+/);
      if (this.day = y[0], b)
        for (var B = 1; B <= 31; B += 1)
          b(B).replace(/\[|\]/g, "") === f && (this.day = B);
    }], M: [i, e("month")], MM: [h, e("month")], MMM: [c, function(f) {
      var b = g("months"), y = (g("monthsShort") || b.map(function(B) {
        return B.slice(0, 3);
      })).indexOf(f) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], MMMM: [c, function(f) {
      var b = g("months").indexOf(f) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, e("year")], YY: [h, function(f) {
      this.year = s(f);
    }], YYYY: [/\d{4}/, e("year")], Z: l, ZZ: l };
    function w(f) {
      var b, y;
      b = f, y = a && a.formats;
      for (var B = (f = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, L, T) {
        var O = T && T.toUpperCase();
        return L || y[T] || o[T] || y[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(S, G, A) {
          return G || A.slice(1);
        });
      })).match(r), x = B.length, _ = 0; _ < x; _ += 1) {
        var n = B[_], v = u[n], p = v && v[0], k = v && v[1];
        B[_] = k ? { regex: p, parser: k } : n.replace(/^\[|\]$/g, "");
      }
      return function(E) {
        for (var L = {}, T = 0, O = 0; T < x; T += 1) {
          var S = B[T];
          if (typeof S == "string")
            O += S.length;
          else {
            var G = S.regex, A = S.parser, N = E.slice(O), q = G.exec(N)[0];
            A.call(L, q), E = E.replace(q, "");
          }
        }
        return function(P) {
          var F = P.afternoon;
          if (F !== void 0) {
            var tt = P.hours;
            F ? tt < 12 && (P.hours += 12) : tt === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(L), L;
      };
    }
    return function(f, b, y) {
      y.p.customParseFormat = !0, f && f.parseTwoDigitYear && (s = f.parseTwoDigitYear);
      var B = b.prototype, x = B.parse;
      B.parse = function(_) {
        var n = _.date, v = _.utc, p = _.args;
        this.$u = v;
        var k = p[1];
        if (typeof k == "string") {
          var E = p[2] === !0, L = p[3] === !0, T = E || L, O = p[2];
          L && (O = p[2]), a = this.$locale(), !E && O && (a = y.Ls[O]), this.$d = function(N, q, P) {
            try {
              if (["x", "X"].indexOf(q) > -1)
                return new Date((q === "X" ? 1e3 : 1) * N);
              var F = w(q)(N), tt = F.year, lt = F.month, ee = F.day, ne = F.hours, re = F.minutes, ae = F.seconds, oe = F.milliseconds, _t = F.zone, ht = new Date(), pt = ee || (tt || lt ? 1 : ht.getDate()), mt = tt || ht.getFullYear(), ut = 0;
              tt && !lt || (ut = lt > 0 ? lt - 1 : ht.getMonth());
              var vt = ne || 0, wt = re || 0, bt = ae || 0, yt = oe || 0;
              return _t ? new Date(Date.UTC(mt, ut, pt, vt, wt, bt, yt + 60 * _t.offset * 1e3)) : P ? new Date(Date.UTC(mt, ut, pt, vt, wt, bt, yt)) : new Date(mt, ut, pt, vt, wt, bt, yt);
            } catch {
              return new Date("");
            }
          }(n, k, v), this.init(), O && O !== !0 && (this.$L = this.locale(O).$L), T && n != this.format(k) && (this.$d = new Date("")), a = {};
        } else if (k instanceof Array)
          for (var S = k.length, G = 1; G <= S; G += 1) {
            p[1] = k[G - 1];
            var A = y.apply(this, p);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            G === S && (this.$d = new Date(""));
          }
        else
          x.call(this, _);
      };
    };
  });
})(Nt);
const we = Nt.exports, qt = Symbol("CHART_ROWS_KEY"), Qt = Symbol("CONFIG_KEY"), Vt = Symbol("EMIT_BAR_EVENT_KEY"), Xt = Symbol("BAR_CONTAINER_KEY");
function z() {
  const t = dt(Qt);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Kt = "YYYY-MM-DD HH:mm";
function it(t = z()) {
  const { chartStart: d, chartEnd: o, barStart: r, barEnd: h, dateFormat: i } = t, c = H(() => s(d.value)), a = H(() => s(o.value)), s = (l, g) => {
    let m;
    if (g !== void 0 && typeof l != "string" && !(l instanceof Date) && (m = g === "start" ? l[r.value] : l[h.value]), typeof l == "string")
      m = l;
    else if (l instanceof Date)
      return W(l);
    const u = i.value || Kt;
    return W(m, u, !0);
  };
  return {
    chartStartDayjs: c,
    chartEndDayjs: a,
    toDayjs: s,
    format: (l, g) => g === !1 ? l instanceof Date ? l : W(l).toDate() : (typeof l == "string" || l instanceof Date ? s(l) : l).format(g)
  };
}
function Zt() {
  const { precision: t } = z(), { chartStartDayjs: d, chartEndDayjs: o } = it(), r = H(() => {
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
  }), h = H(() => {
    switch (t.value) {
      case "date":
        return "day";
      case "week":
        return "isoWeek";
      default:
        return t.value;
    }
  }), i = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "W",
    month: "MMM",
    year: "YYYY"
  }, c = H(() => {
    const a = [], s = [], e = o.value.diff(d.value, "minutes", !0), l = r.value, g = h.value;
    let m = d.value, u = d.value;
    for (; u.isSameOrBefore(o.value); ) {
      const w = u.endOf(g), b = w.isAfter(o.value) ? o.value.diff(u, "minutes", !0) / e * 100 : w.diff(u, "minutes", !0) / e * 100;
      s.push({
        label: u.format(i[t == null ? void 0 : t.value]),
        value: String(u),
        date: u.toDate(),
        width: String(b) + "%"
      }), u = w.add(1, g === "isoWeek" ? "week" : g).startOf(g);
    }
    for (; m.isSameOrBefore(o.value); ) {
      const w = m.endOf(l), b = w.isAfter(o.value) ? o.value.diff(m, "minutes", !0) / e * 100 : w.diff(m, "minutes", !0) / e * 100;
      a.push({
        label: m.format(i[l]),
        value: String(m),
        date: m.toDate(),
        width: String(b) + "%"
      }), m = w.add(1, l).startOf(l);
    }
    return { upperUnits: a, lowerUnits: s };
  });
  return c.value.lowerUnits[0].label === "53" && c.value.lowerUnits.splice(0, 1), c.value.lowerUnits[c.value.lowerUnits.length - 1].label === "14" && c.value.lowerUnits.splice(c.value.lowerUnits.length - 1, 1), {
    timeaxisUnits: c
  };
}
const be = { class: "g-grid-container" }, Ot = /* @__PURE__ */ V({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(t) {
    const { colors: d } = z(), { timeaxisUnits: o } = Zt(), r = (i) => {
      const c = +i >= 14 && +i <= 26, a = +i >= 40 && +i <= 52;
      return c || a ? "#f7f8f9" : "#ffffff";
    }, h = (i, c) => c === o.value.lowerUnits.length - 1 ? "unset" : i && Number(i) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2";
    return (i, c) => (D(), M("div", be, [
      (D(!0), M(Z, null, et(C(o).lowerUnits, ({ label: a, value: s, width: e }, l) => {
        var g;
        return D(), M("div", {
          key: a,
          class: "g-grid-line",
          style: Y({
            width: e,
            borderRight: h(a, l),
            background: (g = i.highlightedUnits) != null && g.includes(Number(s)) ? C(d).hoverHighlight : void 0,
            backgroundColor: r(a)
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
function Bt() {
  const t = dt(qt);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
const ye = { class: "g-label-column-rows" }, xe = /* @__PURE__ */ V({
  __name: "GGanttLabelColumn",
  setup(t) {
    const { font: d, colors: o, labelColumnTitle: r, rowHeight: h } = z(), i = Bt();
    return (c, a) => (D(), M("div", {
      class: "g-label-column",
      style: Y({ fontFamily: C(d), color: C(o).text })
    }, [
      I(c.$slots, "label-column-title", {}, () => [
        $("div", {
          class: "g-label-column-header",
          style: Y({ background: C(o).primary })
        }, Q(C(r)), 5)
      ]),
      $("div", ye, [
        (D(!0), M(Z, null, et(C(i)(), ({ label: s }, e) => (D(), M("div", {
          key: `${s}_${e}`,
          class: "g-label-column-row",
          style: Y({
            background: e % 2 === 0 ? C(o).ternary : C(o).quartenary,
            height: `${C(h)}px`
          })
        }, [
          I(c.$slots, "label-column-row", { label: s }, () => [
            $("span", null, Q(s), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const ke = { class: "g-timeaxis" }, Be = { class: "g-timeunits-container g-timeunits-low" }, _e = {
  key: 0,
  class: "g-timeunit-low-kw"
}, Ce = { class: "g-timeunits-container g-timeunits-upper" }, De = /* @__PURE__ */ V({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: d, colors: o } = z(), { timeaxisUnits: r } = Zt();
    return (h, i) => (D(), M("div", ke, [
      $("div", Be, [
        (D(!0), M(Z, null, et(C(r).lowerUnits, ({ label: c, value: a, date: s, width: e }, l) => (D(), M("div", {
          key: c,
          class: "g-timeunit g-timeunit-low",
          style: Y({
            flexDirection: C(d) === "hour" ? "column" : "row",
            alignItems: C(d) === "hour" ? "" : "center",
            width: e
          })
        }, [
          l === 0 ? (D(), M("span", _e, "KW")) : j("", !0),
          I(h.$slots, "timeunit", {
            label: c,
            value: a,
            date: s
          }, () => [
            nt(Q(c), 1)
          ]),
          C(d) === "hour" ? (D(), M("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: Y({ background: C(o).text })
          }, null, 4)) : j("", !0)
        ], 4))), 128))
      ]),
      $("div", Ce, [
        (D(!0), M(Z, null, et(C(r).upperUnits, ({ label: c, value: a, date: s, width: e }, l) => (D(), M("div", {
          key: c,
          class: "g-upper-timeunit",
          style: Y({
            width: e
          })
        }, [
          I(h.$slots, "upper-timeunit", {
            label: c,
            value: a,
            date: s
          }, () => [
            nt(Q(c), 1)
          ])
        ], 4))), 128))
      ])
    ]));
  }
});
const Ee = "cadetblue", Oe = /* @__PURE__ */ V({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(t) {
    const d = t, o = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      date: "DD. MMMM YYYY",
      month: "DD. MMMM YYYY",
      week: "DD. MMMM YYYY (WW)"
    }, { bar: r } = at(d), { precision: h, font: i, barStart: c, barEnd: a, rowHeight: s } = z(), e = R("0px"), l = R("0px");
    ft(
      () => d.bar,
      async () => {
        var n;
        await Rt();
        const b = ((n = r == null ? void 0 : r.value) == null ? void 0 : n.ganttBarConfig.id) || "";
        if (!b)
          return;
        const y = document.getElementById(b), { top: B, left: x } = (y == null ? void 0 : y.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, _ = Math.max(x, 10);
        e.value = `${B + s.value - 10}px`, l.value = `${_}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const g = H(() => {
      var b, y;
      return ((y = (b = r == null ? void 0 : r.value) == null ? void 0 : b.ganttBarConfig.style) == null ? void 0 : y.background) || Ee;
    }), { toDayjs: m } = it(), u = H(() => {
      var b;
      return (b = r.value) == null ? void 0 : b[c.value];
    }), w = H(() => {
      var b;
      return (b = r.value) == null ? void 0 : b[a.value];
    }), f = H(() => {
      if (!(r != null && r.value))
        return "";
      const b = o[h.value], y = m(u.value).format(b), B = m(w.value).format(b);
      return `${y} \u2013 ${B}`;
    });
    return (b, y) => (D(), K(ie, { to: "body" }, [
      ot(se, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: U(() => [
          b.modelValue ? (D(), M("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: Y({
              top: e.value,
              left: l.value,
              fontFamily: C(i)
            })
          }, [
            $("div", {
              class: "g-gantt-tooltip-color-dot",
              style: Y({ background: g.value })
            }, null, 4),
            I(b.$slots, "default", {
              bar: C(r),
              barStart: u.value,
              barEnd: w.value
            }, () => [
              nt(Q(f.value), 1)
            ])
          ], 4)) : j("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function gt(t = z()) {
  const { dateFormat: d, chartSize: o } = t, { chartStartDayjs: r, chartEndDayjs: h, toDayjs: i, format: c } = it(t), a = H(() => h.value.diff(r.value, "minutes"));
  return {
    mapTimeToPosition: (l) => {
      const g = o.width.value || 0, m = i(l).diff(r.value, "minutes", !0);
      return Math.ceil(m / a.value * g);
    },
    mapPositionToTime: (l) => {
      const g = o.width.value || 0, m = l / g * a.value;
      return c(r.value.add(m, "minutes"), d.value);
    }
  };
}
const Te = /* @__PURE__ */ V({
  __name: "GGanttCurrentTime",
  setup(t) {
    const { mapTimeToPosition: d } = gt(), o = R(W()), { colors: r, dateFormat: h, currentTimeLabel: i } = z(), c = H(() => {
      const a = h.value || "YYYY-MM-DD HH:mm";
      return d(W(o.value, a).format(a));
    });
    return (a, s) => (D(), M("div", {
      class: "g-grid-current-time",
      style: Y({
        left: `${c.value}px`
      })
    }, [
      $("div", {
        class: "g-grid-current-time-marker",
        style: Y({
          border: `1px dashed ${C(r).markerCurrentTime}`
        })
      }, null, 4),
      $("span", {
        class: "g-grid-current-time-text",
        style: Y({ color: C(r).markerCurrentTime })
      }, [
        I(a.$slots, "current-time-label", {}, () => [
          nt(Q(C(i)), 1)
        ])
      ], 4)
    ], 4));
  }
});
var Tt;
const st = typeof window < "u";
st && ((Tt = window == null ? void 0 : window.navigator) == null ? void 0 : Tt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Me(t) {
  return typeof t == "function" ? t() : C(t);
}
function $e(t) {
  return t;
}
function Le(t) {
  return le() ? (ue(t), !0) : !1;
}
function Se(t, d = !0) {
  ce() ? Ht(t) : d ? t() : Rt(t);
}
function Jt(t) {
  var d;
  const o = Me(t);
  return (d = o == null ? void 0 : o.$el) != null ? d : o;
}
const Ye = st ? window : void 0;
st && window.document;
st && window.navigator;
st && window.location;
function Ge(t, d = !1) {
  const o = R(), r = () => o.value = Boolean(t());
  return r(), Se(r, d), o;
}
const xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, kt = "__vueuse_ssr_handlers__";
xt[kt] = xt[kt] || {};
xt[kt];
var Mt = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, Re = Object.prototype.propertyIsEnumerable, He = (t, d) => {
  var o = {};
  for (var r in t)
    Ie.call(t, r) && d.indexOf(r) < 0 && (o[r] = t[r]);
  if (t != null && Mt)
    for (var r of Mt(t))
      d.indexOf(r) < 0 && Re.call(t, r) && (o[r] = t[r]);
  return o;
};
function Ae(t, d, o = {}) {
  const r = o, { window: h = Ye } = r, i = He(r, ["window"]);
  let c;
  const a = Ge(() => h && "ResizeObserver" in h), s = () => {
    c && (c.disconnect(), c = void 0);
  }, e = ft(() => Jt(t), (g) => {
    s(), a.value && h && g && (c = new ResizeObserver(d), c.observe(g, i));
  }, { immediate: !0, flush: "post" }), l = () => {
    s(), e();
  };
  return Le(l), {
    isSupported: a,
    stop: l
  };
}
function We(t, d = { width: 0, height: 0 }, o = {}) {
  const r = R(d.width), h = R(d.height);
  return Ae(t, ([i]) => {
    r.value = i.contentRect.width, h.value = i.contentRect.height;
  }, o), ft(() => Jt(t), (i) => {
    r.value = i ? d.width : 0, h.value = i ? d.height : 0;
  }), {
    width: r,
    height: h
  };
}
var $t;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})($t || ($t = {}));
var je = Object.defineProperty, Lt = Object.getOwnPropertySymbols, ze = Object.prototype.hasOwnProperty, Pe = Object.prototype.propertyIsEnumerable, St = (t, d, o) => d in t ? je(t, d, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[d] = o, Fe = (t, d) => {
  for (var o in d || (d = {}))
    ze.call(d, o) && St(t, o, d[o]);
  if (Lt)
    for (var o of Lt(d))
      Pe.call(d, o) && St(t, o, d[o]);
  return t;
};
const Ue = {
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
Fe({
  linear: $e
}, Ue);
const Yt = {
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
}, Ne = /* @__PURE__ */ $("div", { class: "g-gantt-chart-overview" }, null, -1), qe = { class: "g-gantt-chart-quarters" }, Qe = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q1", -1), Ve = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q2", -1), Xe = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q3", -1), Ke = /* @__PURE__ */ $("div", { class: "g-gantt-chart-quarter" }, "Q4", -1), Ze = {
  key: 0,
  class: "g-gantt-chart-quarter"
}, Je = /* @__PURE__ */ V({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    currentTime: { type: Boolean },
    currentTimeLabel: { default: "" },
    dateFormat: { type: [String, Boolean], default: Kt },
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
  setup(t, { emit: d }) {
    const o = t;
    W.extend(Pt);
    const r = new Date(), h = new Date();
    r.setDate(15), r.setMonth(10), h.setDate(31), h.setMonth(11);
    const i = R(
      W(new Date()).isBetween(r, h)
    ), { width: c, font: a, colorScheme: s } = at(o), e = de(), l = H(
      () => typeof s.value != "string" ? s.value : Yt[s.value] || Yt.default
    ), g = () => {
      var p;
      const n = (p = e.default) == null ? void 0 : p.call(e), v = [];
      return n && n.forEach((k) => {
        var E;
        if ((E = k.props) != null && E.bars) {
          const { label: L, bars: T } = k.props;
          v.push({ label: L, bars: T });
        } else
          Array.isArray(k.children) && k.children.forEach((L) => {
            var O;
            const T = L;
            if ((O = T == null ? void 0 : T.props) != null && O.bars) {
              const { label: S, bars: G } = T.props;
              v.push({ label: S, bars: G });
            }
          });
      }), v;
    }, m = R(!1), u = R(!1), w = R(void 0);
    let f;
    const b = (n) => {
      f && clearTimeout(f), f = setTimeout(() => {
        m.value = !0;
      }, 800), w.value = n;
    }, y = () => {
      clearTimeout(f), m.value = !1;
    }, B = (n, v, p, k) => {
      switch (n.type) {
        case "click":
          d("click-bar", { bar: v, e: n, datetime: p });
          break;
        case "mousedown":
          d("mousedown-bar", { bar: v, e: n, datetime: p });
          break;
        case "mouseup":
          d("mouseup-bar", { bar: v, e: n, datetime: p });
          break;
        case "dblclick":
          d("dblclick-bar", { bar: v, e: n, datetime: p });
          break;
        case "mouseenter":
          b(v), d("mouseenter-bar", { bar: v, e: n });
          break;
        case "mouseleave":
          y(), d("mouseleave-bar", { bar: v, e: n });
          break;
        case "dragstart":
          u.value = !0, d("dragstart-bar", { bar: v, e: n });
          break;
        case "drag":
          d("drag-bar", { bar: v, e: n });
          break;
        case "dragend":
          u.value = !1, d("dragend-bar", { bar: v, e: n, movedBars: k });
          break;
        case "contextmenu":
          d("contextmenu-bar", { bar: v, e: n, datetime: p });
          break;
      }
    }, x = R(null), _ = We(x);
    return document.getElementsByClassName("g-timeunit-low"), ct(qt, g), ct(Qt, {
      ...at(o),
      colors: l,
      chartSize: _
    }), ct(Vt, B), (n, v) => (D(), M("div", {
      class: rt(["g-gantt-chart-container", [
        i.value ? "g-gantt-chart-container--5-quarters-width" : "g-gantt-chart-container--4-quarters-width"
      ]])
    }, [
      Ne,
      $("div", {
        class: rt([{ "labels-in-column": !!n.labelColumnTitle }])
      }, [
        n.labelColumnTitle ? (D(), K(xe, {
          key: 0,
          style: Y({
            width: n.labelColumnWidth
          })
        }, {
          "label-column-title": U(() => [
            I(n.$slots, "label-column-title")
          ]),
          "label-column-row": U(({ label: p }) => [
            I(n.$slots, "label-column-row", { label: p })
          ]),
          _: 3
        }, 8, ["style"])) : j("", !0),
        $("div", {
          ref_key: "ganttChart",
          ref: x,
          class: rt(["g-gantt-chart", { "with-column": n.labelColumnTitle }]),
          style: Y({ width: C(c), background: l.value.background, fontFamily: C(a) })
        }, [
          n.grid ? (D(), K(Ot, {
            key: 0,
            "highlighted-units": n.highlightedUnits
          }, null, 8, ["highlighted-units"])) : j("", !0),
          n.currentTime ? (D(), K(Te, { key: 1 }, {
            "current-time-label": U(() => [
              I(n.$slots, "current-time-label")
            ]),
            _: 3
          })) : j("", !0),
          $("div", qe, [
            Qe,
            Ve,
            Xe,
            Ke,
            i.value ? (D(), M("div", Ze, "Q1")) : j("", !0)
          ]),
          $("div", {
            class: rt([
              "g-gantt-rows-container",
              o.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            I(n.$slots, "default"),
            ot(Ot, { "highlighted-units": n.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          n.hideTimeaxis ? j("", !0) : (D(), K(De, { key: 2 }, {
            "upper-timeunit": U(({ label: p, value: k, date: E }) => [
              I(n.$slots, "upper-timeunit", {
                label: p,
                value: k,
                date: E
              })
            ]),
            timeunit: U(({ label: p, value: k, date: E }) => [
              I(n.$slots, "timeunit", {
                label: p,
                value: k,
                date: E
              })
            ]),
            _: 3
          }))
        ], 6)
      ], 2),
      ot(Oe, {
        "model-value": m.value || u.value,
        bar: w.value
      }, {
        default: U(() => [
          I(n.$slots, "bar-tooltip", { bar: w.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ], 2));
  }
});
function Gt(t, d = () => null, o = () => null, r = z()) {
  const { barStart: h, barEnd: i, pushOnOverlap: c } = r, a = R(!1);
  let s = 0, e;
  const { mapPositionToTime: l } = gt(r), { toDayjs: g } = it(r), m = (x) => {
    const _ = document.getElementById(t.ganttBarConfig.id);
    if (!_)
      return;
    switch (s = x.clientX - (_.getBoundingClientRect().left || 0), x.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", e = f;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", e = b;
        break;
      default:
        e = w;
    }
    a.value = !0, window.addEventListener("mousemove", e), window.addEventListener("mouseup", B);
  }, u = () => {
    var n;
    const x = document.getElementById(t.ganttBarConfig.id), _ = (n = x == null ? void 0 : x.closest(".g-gantt-row-bars-container")) == null ? void 0 : n.getBoundingClientRect();
    return { barElement: x, barContainer: _ };
  }, w = (x) => {
    const { barElement: _, barContainer: n } = u();
    if (!_ || !n)
      return;
    const v = _.getBoundingClientRect().width, p = x.clientX - n.left - s, k = p + v;
    y(p, k) || (t[h.value] = l(p), t[i.value] = l(k), d(x, t));
  }, f = (x) => {
    const { barElement: _, barContainer: n } = u();
    if (!_ || !n)
      return;
    const v = x.clientX - n.left, p = l(v);
    g(p).isSameOrAfter(g(t, "end")) || (t[h.value] = p, d(x, t));
  }, b = (x) => {
    const { barElement: _, barContainer: n } = u();
    if (!_ || !n)
      return;
    const v = x.clientX - n.left, p = l(v);
    g(p).isSameOrBefore(g(t, "start")) || (t[i.value] = p, d(x, t));
  }, y = (x, _) => {
    if (!c.value)
      return !1;
    const n = t.ganttBarConfig.dragLimitLeft, v = t.ganttBarConfig.dragLimitRight;
    return x && n != null && x < n || _ && v != null && _ > v;
  }, B = (x) => {
    a.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", B), o(x, t);
  };
  return {
    isDragging: a,
    initDrag: m
  };
}
function te() {
  const t = dt(Vt);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function tn() {
  const t = z(), d = Bt(), o = te(), { pushOnOverlap: r, barStart: h, barEnd: i, noOverlap: c, dateFormat: a } = t, s = /* @__PURE__ */ new Map(), { toDayjs: e, format: l } = it(), g = (n, v) => {
    const { initDrag: p } = Gt(n, u, B, t);
    o({ ...v, type: "dragstart" }, n), p(v), x(n);
  }, m = (n, v) => {
    const p = n.ganttBarConfig.bundle;
    p != null && (d().forEach((k) => {
      k.bars.forEach((E) => {
        if (E.ganttBarConfig.bundle === p) {
          const L = E === n ? B : () => null, { initDrag: T } = Gt(E, u, L, t);
          T(v), x(E);
        }
      });
    }), o({ ...v, type: "dragstart" }, n));
  }, u = (n, v) => {
    o({ ...n, type: "drag" }, v), w(v);
  }, w = (n) => {
    if (!(r != null && r.value))
      return;
    let v = n, { overlapBar: p, overlapType: k } = f(v);
    for (; p; ) {
      x(p);
      const E = e(v[h.value]), L = e(v[i.value]), T = e(p[h.value]), O = e(p[i.value]);
      let S;
      switch (k) {
        case "left":
          S = O.diff(E, "minutes", !0), p[i.value] = l(v[h.value], a.value), p[h.value] = l(
            T.subtract(S, "minutes"),
            a.value
          );
          break;
        case "right":
          S = L.diff(T, "minutes", !0), p[h.value] = l(L, a.value), p[i.value] = l(
            O.add(S, "minutes"),
            a.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      p && (k === "left" || k === "right") && b(p, S, k), v = p, { overlapBar: p, overlapType: k } = f(p);
    }
  }, f = (n) => {
    var G, A;
    let v, p, k;
    const E = (A = (G = d().find((N) => N.bars.includes(n))) == null ? void 0 : G.bars) != null ? A : [], L = e(n[h.value]), T = e(n[i.value]);
    return { overlapBar: E.find((N) => {
      if (N === n)
        return !1;
      const q = e(N[h.value]), P = e(N[i.value]);
      return v = L.isBetween(q, P), p = T.isBetween(q, P), k = q.isBetween(L, T) || P.isBetween(L, T), v || p || k;
    }), overlapType: v ? "left" : p ? "right" : k ? "between" : null };
  }, b = (n, v, p) => {
    x(n), n.ganttBarConfig.bundle && d().forEach((k) => {
      k.bars.forEach((E) => {
        E.ganttBarConfig.bundle === n.ganttBarConfig.bundle && E !== n && (x(E), y(E, v, p));
      });
    });
  }, y = (n, v, p) => {
    switch (p) {
      case "left":
        n[h.value] = l(
          e(n, "start").subtract(v, "minutes"),
          a.value
        ), n[i.value] = l(
          e(n, "end").subtract(v, "minutes"),
          a.value
        );
        break;
      case "right":
        n[h.value] = l(
          e(n, "start").add(v, "minutes"),
          a.value
        ), n[i.value] = l(e(n, "end").add(v, "minutes"), a.value);
    }
    w(n);
  }, B = (n, v) => {
    _();
    const p = {
      ...n,
      type: "dragend"
    };
    o(p, v, void 0, new Map(s)), s.clear();
  }, x = (n) => {
    if (!s.has(n)) {
      const v = n[h.value], p = n[i.value];
      s.set(n, { oldStart: v, oldEnd: p });
    }
  }, _ = () => {
    if (r.value || !c.value)
      return;
    let n = !1;
    s.forEach((v, p) => {
      const { overlapBar: k } = f(p);
      k != null && (n = !0);
    }), n && s.forEach(({ oldStart: v, oldEnd: p }, k) => {
      k[h.value] = v, k[i.value] = p;
    });
  };
  return {
    initDragOfBar: g,
    initDragOfBundle: m
  };
}
function en() {
  const { pushOnOverlap: t } = z(), d = Bt(), o = (c) => {
    const a = [];
    return c != null && d().forEach((s) => {
      s.bars.forEach((e) => {
        e.ganttBarConfig.bundle === c && a.push(e);
      });
    }), a;
  }, r = (c) => {
    if (!t.value || c.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const s of ["left", "right"]) {
      const e = s, { gapDistanceSoFar: l, bundleBarsAndGapDist: g } = h(
        c,
        0,
        e
      );
      let m = l;
      const u = g;
      if (!u)
        continue;
      for (let f = 0; f < u.length; f++) {
        const b = u[f].bar, y = u[f].gapDistance;
        o(b.ganttBarConfig.bundle).filter(
          (x) => x !== b
        ).forEach((x) => {
          const _ = h(x, y, e), n = _.gapDistanceSoFar, v = _.bundleBarsAndGapDist;
          n != null && (!m || n < m) && (m = n), v.forEach((p) => {
            u.find((k) => k.bar === p.bar) || u.push(p);
          });
        });
      }
      const w = document.getElementById(c.ganttBarConfig.id);
      m != null && e === "left" ? c.ganttBarConfig.dragLimitLeft = w.offsetLeft - m : m != null && e === "right" && (c.ganttBarConfig.dragLimitRight = w.offsetLeft + w.offsetWidth + m);
    }
    o(c.ganttBarConfig.bundle).forEach((s) => {
      s.ganttBarConfig.dragLimitLeft = c.ganttBarConfig.dragLimitLeft, s.ganttBarConfig.dragLimitRight = c.ganttBarConfig.dragLimitRight;
    });
  }, h = (c, a = 0, s) => {
    const e = c.ganttBarConfig.bundle ? [{ bar: c, gapDistance: a }] : [];
    let l = c, g = i(l, s);
    if (s === "left")
      for (; g; ) {
        const m = document.getElementById(l.ganttBarConfig.id), u = document.getElementById(g.ganttBarConfig.id), w = u.offsetLeft + u.offsetWidth;
        if (a += m.offsetLeft - w, g.ganttBarConfig.immobile)
          return { gapDistanceSoFar: a, bundleBarsAndGapDist: e };
        g.ganttBarConfig.bundle && e.push({
          bar: g,
          gapDistance: a
        }), l = g, g = i(g, "left");
      }
    if (s === "right")
      for (; g; ) {
        const m = document.getElementById(l.ganttBarConfig.id), u = document.getElementById(g.ganttBarConfig.id), w = m.offsetLeft + m.offsetWidth;
        if (a += u.offsetLeft - w, g.ganttBarConfig.immobile)
          return { gapDistanceSoFar: a, bundleBarsAndGapDist: e };
        g.ganttBarConfig.bundle && e.push({
          bar: g,
          gapDistance: a
        }), l = g, g = i(g, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: e };
  }, i = (c, a) => {
    var g, m;
    const s = document.getElementById(c.ganttBarConfig.id), e = (m = (g = d().find((u) => u.bars.includes(c))) == null ? void 0 : g.bars) != null ? m : [];
    let l = [];
    return a === "left" ? l = e.filter((u) => {
      const w = document.getElementById(u.ganttBarConfig.id);
      return w && w.offsetLeft < s.offsetLeft && u.ganttBarConfig.pushOnOverlap !== !1;
    }) : l = e.filter((u) => {
      const w = document.getElementById(u.ganttBarConfig.id);
      return w && w.offsetLeft > s.offsetLeft && u.ganttBarConfig.pushOnOverlap !== !1;
    }), l.length > 0 ? l.reduce((u, w) => {
      const f = document.getElementById(u.ganttBarConfig.id), b = document.getElementById(w.ganttBarConfig.id), y = Math.abs(f.offsetLeft - s.offsetLeft), B = Math.abs(b.offsetLeft - s.offsetLeft);
      return y < B ? u : w;
    }, l[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: r
  };
}
const nn = ["id"], rn = { class: "g-gantt-bar-label" }, an = ["innerHTML"], on = /* @__PURE__ */ $("div", { class: "g-gantt-bar-handle-left" }, null, -1), sn = /* @__PURE__ */ $("div", { class: "g-gantt-bar-handle-right" }, null, -1), ln = 8, It = /* @__PURE__ */ V({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(t) {
    var T;
    const d = t;
    fe((O) => ({
      "2e6f42dd": C(c)
    }));
    const o = te(), r = z(), { rowHeight: h } = r, { bar: i } = at(d), c = (T = d.bar.ganttBarConfig.style) == null ? void 0 : T.backgroundColor, { mapTimeToPosition: a, mapPositionToTime: s } = gt(), { initDragOfBar: e, initDragOfBundle: l } = tn(), { setDragLimitsOfGanttBar: g } = en(), m = R(!1), u = H(() => i.value.ganttBarConfig);
    function w(O) {
      u.value.bundle != null ? l(i.value, O) : e(i.value, O), m.value = !0;
    }
    const f = () => {
      g(i.value), !u.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), m.value = !1;
        },
        { once: !0 }
      ));
    }, b = dt(Xt), y = (O) => {
      var A;
      O.preventDefault(), O.type === "mousedown" && f();
      const S = (A = b == null ? void 0 : b.value) == null ? void 0 : A.getBoundingClientRect();
      if (!S)
        return;
      const G = s(O.clientX - S.left);
      o(O, i.value, G);
    }, { barStart: B, barEnd: x, width: _, chartStart: n, chartEnd: v, chartSize: p } = r, k = R(0), E = R(0), L = H(() => {
      const O = new Date(i.value.myBeginDate).getTime(), S = new Date(i.value.myEndDate).getTime();
      return Math.abs(O - S) / (1e3 * 60 * 60 * 24) <= 2 ? 0 : E.value - k.value - ln;
    });
    return Ht(() => {
      ft(
        [i, _, n, v, p.width],
        () => {
          k.value = a(i.value[B.value]), E.value = a(i.value[x.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (O, S) => {
      var G;
      return D(), M("div", {
        id: u.value.id,
        class: rt(["g-gantt-bar", u.value.asArrow ? "g-gantt-bar-is-arrow" : "", u.value.class || ""]),
        style: Y({
          ...u.value.style,
          position: "absolute",
          top: `${C(h) * 0.1}px`,
          left: `${k.value}px`,
          width: `${L.value}px`,
          height: `${C(h) * 0.8}px`,
          zIndex: m.value ? 3 : 2
        }),
        onMousedown: y,
        onClick: y,
        onDblclick: y,
        onMouseenter: y,
        onMouseleave: y,
        onContextmenu: y
      }, [
        $("div", rn, [
          I(O.$slots, "default", { bar: C(i) }, () => [
            $("div", null, Q(u.value.label || ""), 1),
            u.value.html ? (D(), M("div", {
              key: 0,
              innerHTML: u.value.html
            }, null, 8, an)) : j("", !0)
          ])
        ]),
        u.value.asArrow ? (D(), M("div", {
          key: 0,
          class: "g-gantt-bar-arrow",
          style: Y({
            borderLeft: `8px solid #${(G = C(i).ganttBarConfig.style) == null ? void 0 : G.backgroundColor}`
          })
        }, null, 4)) : j("", !0),
        u.value.hasHandles ? (D(), M(Z, { key: 1 }, [
          on,
          sn
        ], 64)) : j("", !0)
      ], 46, nn);
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
  setup(t, { emit: d }) {
    const o = t, { rowHeight: r, colors: h, labelColumnTitle: i } = z(), { highlightOnHover: c } = at(o), a = R(!1), s = H(() => ({
      height: `${r.value}px`,
      background: (c == null ? void 0 : c.value) && a.value ? h.value.hoverHighlight : null
    })), { mapPositionToTime: e } = gt(), l = R(null);
    ct(Xt, l);
    const g = (u) => {
      var y;
      const w = (y = l.value) == null ? void 0 : y.getBoundingClientRect();
      if (!w) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const f = u.clientX - w.left, b = e(f);
      d("drop", { e: u, datetime: b });
    }, m = (u) => !u || /^\s*$/.test(u);
    return (u, w) => (D(), M("div", null, [
      $("div", {
        class: "g-gantt-row",
        style: Y(s.value),
        onDragover: w[0] || (w[0] = Ct((f) => a.value = !0, ["prevent"])),
        onDragleave: w[1] || (w[1] = (f) => a.value = !1),
        onDrop: w[2] || (w[2] = (f) => g(f)),
        onMouseover: w[3] || (w[3] = (f) => a.value = !0),
        onMouseleave: w[4] || (w[4] = (f) => a.value = !1)
      }, [
        !m(u.label) && !C(i) ? (D(), M("div", {
          key: 0,
          class: "g-gantt-row-label",
          style: Y({ background: C(h).primary, color: C(h).text })
        }, [
          I(u.$slots, "label", {}, () => [
            nt(Q(u.label), 1)
          ])
        ], 4)) : j("", !0),
        $("div", Dt({
          ref_key: "barContainer",
          ref: l,
          class: "g-gantt-row-bars-container"
        }, u.$attrs), [
          ot(Et, {
            name: "bar-transition sys",
            tag: "div"
          }, {
            default: U(() => [
              (D(!0), M(Z, null, et(u.bars, (f) => (D(), K(It, {
                key: f.ganttBarConfig.id,
                bar: f
              }, {
                default: U(() => [
                  I(u.$slots, "bar-label", { bar: f })
                ]),
                _: 2
              }, 1032, ["bar"]))), 128))
            ]),
            _: 3
          })
        ], 16)
      ], 36),
      u.overlaps ? (D(), M("div", {
        key: 0,
        class: "g-gantt-row",
        style: Y(s.value),
        onDragover: w[5] || (w[5] = Ct((f) => a.value = !0, ["prevent"])),
        onDragleave: w[6] || (w[6] = (f) => a.value = !1),
        onDrop: w[7] || (w[7] = (f) => g(f)),
        onMouseover: w[8] || (w[8] = (f) => a.value = !0),
        onMouseleave: w[9] || (w[9] = (f) => a.value = !1)
      }, [
        !m(u.label) && !C(i) ? (D(), M("div", {
          key: 0,
          class: "g-gantt-row-label",
          style: Y({ background: C(h).primary, color: C(h).text })
        }, [
          I(u.$slots, "label", {}, () => [
            nt(Q(u.label), 1)
          ])
        ], 4)) : j("", !0),
        $("div", Dt({
          ref_key: "barContainer",
          ref: l,
          class: "g-gantt-row-bars-container"
        }, u.$attrs), [
          ot(Et, {
            name: "bar-transition OVERLAP___",
            tag: "div"
          }, {
            default: U(() => [
              (D(!0), M(Z, null, et(u.overlaps, (f) => (D(), K(It, {
                key: f.ganttBarConfig.id,
                bar: f
              }, {
                default: U(() => [
                  I(u.$slots, "bar-label", { bar: f })
                ]),
                _: 2
              }, 1032, ["bar"]))), 128))
            ]),
            _: 3
          })
        ], 16)
      ], 36)) : j("", !0)
    ]));
  }
});
function cn() {
  W.extend(he), W.extend(pe), W.extend(Pt), W.extend(we), W.extend(me), W.extend(ge), W.extend(ve);
}
const hn = {
  install(t, d) {
    cn(), t.component("GGanttChart", Je), t.component("GGanttRow", un);
  }
};
function X(t, d = "top") {
  if (!t || typeof document > "u")
    return;
  const o = document.head, r = document.createElement("style");
  d === "top" && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r.appendChild(document.createTextNode(t));
}
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
  border-left: 8px solid var(--2e6f42dd);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  z-index: 10;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
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
export {
  Je as GGanttChart,
  un as GGanttRow,
  hn as default,
  cn as extendDayjs,
  hn as ganttastic
};
