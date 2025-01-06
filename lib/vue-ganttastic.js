import H from "dayjs";
import { inject as dt, computed as R, defineComponent as V, openBlock as E, createElementBlock as O, Fragment as Z, renderList as et, unref as C, normalizeStyle as S, renderSlot as Y, createElementVNode as $, toDisplayString as Q, createCommentVNode as A, createTextVNode as nt, toRefs as at, ref as I, watch as ft, nextTick as Rt, createBlock as K, Teleport as ie, createVNode as ot, Transition as se, withCtx as U, getCurrentScope as le, onScopeDispose as ue, getCurrentInstance as ce, onMounted as Ht, useSlots as de, provide as ct, normalizeClass as rt, useCssVars as fe, withModifiers as Ct, mergeProps as Dt, TransitionGroup as Et } from "vue";
var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, At = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(J, function() {
    var i = "day";
    return function(r, m, l) {
      var u = function(e) {
        return e.add(4 - e.isoWeekday(), i);
      }, a = m.prototype;
      a.isoWeekYear = function() {
        return u(this).year();
      }, a.isoWeek = function(e) {
        if (!this.$utils().u(e))
          return this.add(7 * (e - this.isoWeek()), i);
        var o, h, p, g, b = u(this), d = (o = this.isoWeekYear(), h = this.$u, p = (h ? l.utc : l)().year(o).startOf("year"), g = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (g += 7), p.add(g, i));
        return b.diff(d, "week") + 1;
      }, a.isoWeekday = function(e) {
        return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7);
      };
      var s = a.startOf;
      a.startOf = function(e, o) {
        var h = this.$utils(), p = !!h.u(o) || o;
        return h.p(e) === "isoweek" ? p ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : s.bind(this)(e, o);
      };
    };
  });
})(At);
const ge = At.exports;
var Wt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(J, function() {
    return function(i, r) {
      r.prototype.isSameOrBefore = function(m, l) {
        return this.isSame(m, l) || this.isBefore(m, l);
      };
    };
  });
})(Wt);
const he = Wt.exports;
var jt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(J, function() {
    return function(i, r) {
      r.prototype.isSameOrAfter = function(m, l) {
        return this.isSame(m, l) || this.isAfter(m, l);
      };
    };
  });
})(jt);
const pe = jt.exports;
var zt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(J, function() {
    return function(i, r, m) {
      r.prototype.isBetween = function(l, u, a, s) {
        var e = m(l), o = m(u), h = (s = s || "()")[0] === "(", p = s[1] === ")";
        return (h ? this.isAfter(e, a) : !this.isBefore(e, a)) && (p ? this.isBefore(o, a) : !this.isAfter(o, a)) || (h ? this.isBefore(e, a) : !this.isAfter(e, a)) && (p ? this.isAfter(o, a) : !this.isBefore(o, a));
      };
    };
  });
})(zt);
const Pt = zt.exports;
var Ut = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(J, function() {
    var i = "week", r = "year";
    return function(m, l, u) {
      var a = l.prototype;
      a.week = function(s) {
        if (s === void 0 && (s = null), s !== null)
          return this.add(7 * (s - this.week()), "day");
        var e = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var o = u(this).startOf(r).add(1, r).date(e), h = u(this).endOf(i);
          if (o.isBefore(h))
            return 1;
        }
        var p = u(this).startOf(r).date(e).startOf(i).subtract(1, "millisecond"), g = this.diff(p, i, !0);
        return g < 0 ? u(this).startOf("week").week() : Math.ceil(g);
      }, a.weeks = function(s) {
        return s === void 0 && (s = null), this.week(s);
      };
    };
  });
})(Ut);
const me = Ut.exports;
var Ft = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(J, function() {
    return function(i, r, m) {
      var l = r.prototype, u = l.format;
      m.en.ordinal = function(a) {
        var s = ["th", "st", "nd", "rd"], e = a % 100;
        return "[" + a + (s[(e - 20) % 10] || s[e] || s[0]) + "]";
      }, l.format = function(a) {
        var s = this, e = this.$locale();
        if (!this.isValid())
          return u.bind(this)(a);
        var o = this.$utils(), h = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(p) {
          switch (p) {
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
              return o.s(s.week(), p === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return o.s(s.isoWeek(), p === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return o.s(String(s.$H === 0 ? 24 : s.$H), p === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(s.$d.getTime() / 1e3);
            case "x":
              return s.$d.getTime();
            case "z":
              return "[" + s.offsetName() + "]";
            case "zzz":
              return "[" + s.offsetName("long") + "]";
            default:
              return p;
          }
        });
        return u.bind(this)(h);
      };
    };
  });
})(Ft);
const ve = Ft.exports;
var Nt = { exports: {} };
(function(t, c) {
  (function(i, r) {
    t.exports = r();
  })(J, function() {
    var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, m = /\d\d/, l = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, a = {}, s = function(d) {
      return (d = +d) + (d > 68 ? 1900 : 2e3);
    }, e = function(d) {
      return function(y) {
        this[d] = +y;
      };
    }, o = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var k = y.match(/([+-]|\d\d)/g), B = 60 * k[1] + (+k[2] || 0);
        return B === 0 ? 0 : k[0] === "+" ? -B : B;
      }(d);
    }], h = function(d) {
      var y = a[d];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, p = function(d, y) {
      var k, B = a.meridiem;
      if (B) {
        for (var w = 1; w <= 24; w += 1)
          if (d.indexOf(B(w, 0, y)) > -1) {
            k = w > 12;
            break;
          }
      } else
        k = d === (y ? "pm" : "PM");
      return k;
    }, g = { A: [u, function(d) {
      this.afternoon = p(d, !1);
    }], a: [u, function(d) {
      this.afternoon = p(d, !0);
    }], S: [/\d/, function(d) {
      this.milliseconds = 100 * +d;
    }], SS: [m, function(d) {
      this.milliseconds = 10 * +d;
    }], SSS: [/\d{3}/, function(d) {
      this.milliseconds = +d;
    }], s: [l, e("seconds")], ss: [l, e("seconds")], m: [l, e("minutes")], mm: [l, e("minutes")], H: [l, e("hours")], h: [l, e("hours")], HH: [l, e("hours")], hh: [l, e("hours")], D: [l, e("day")], DD: [m, e("day")], Do: [u, function(d) {
      var y = a.ordinal, k = d.match(/\d+/);
      if (this.day = k[0], y)
        for (var B = 1; B <= 31; B += 1)
          y(B).replace(/\[|\]/g, "") === d && (this.day = B);
    }], M: [l, e("month")], MM: [m, e("month")], MMM: [u, function(d) {
      var y = h("months"), k = (h("monthsShort") || y.map(function(B) {
        return B.slice(0, 3);
      })).indexOf(d) + 1;
      if (k < 1)
        throw new Error();
      this.month = k % 12 || k;
    }], MMMM: [u, function(d) {
      var y = h("months").indexOf(d) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, e("year")], YY: [m, function(d) {
      this.year = s(d);
    }], YYYY: [/\d{4}/, e("year")], Z: o, ZZ: o };
    function b(d) {
      var y, k;
      y = d, k = a && a.formats;
      for (var B = (d = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(D, M, T) {
        var L = T && T.toUpperCase();
        return M || k[T] || i[T] || k[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, W, F) {
          return W || F.slice(1);
        });
      })).match(r), w = B.length, _ = 0; _ < w; _ += 1) {
        var n = B[_], v = g[n], f = v && v[0], x = v && v[1];
        B[_] = x ? { regex: f, parser: x } : n.replace(/^\[|\]$/g, "");
      }
      return function(D) {
        for (var M = {}, T = 0, L = 0; T < w; T += 1) {
          var G = B[T];
          if (typeof G == "string")
            L += G.length;
          else {
            var W = G.regex, F = G.parser, N = D.slice(L), q = W.exec(N)[0];
            F.call(M, q), D = D.replace(q, "");
          }
        }
        return function(z) {
          var P = z.afternoon;
          if (P !== void 0) {
            var tt = z.hours;
            P ? tt < 12 && (z.hours += 12) : tt === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(M), M;
      };
    }
    return function(d, y, k) {
      k.p.customParseFormat = !0, d && d.parseTwoDigitYear && (s = d.parseTwoDigitYear);
      var B = y.prototype, w = B.parse;
      B.parse = function(_) {
        var n = _.date, v = _.utc, f = _.args;
        this.$u = v;
        var x = f[1];
        if (typeof x == "string") {
          var D = f[2] === !0, M = f[3] === !0, T = D || M, L = f[2];
          M && (L = f[2]), a = this.$locale(), !D && L && (a = k.Ls[L]), this.$d = function(N, q, z) {
            try {
              if (["x", "X"].indexOf(q) > -1)
                return new Date((q === "X" ? 1e3 : 1) * N);
              var P = b(q)(N), tt = P.year, lt = P.month, ee = P.day, ne = P.hours, re = P.minutes, ae = P.seconds, oe = P.milliseconds, _t = P.zone, ht = new Date(), pt = ee || (tt || lt ? 1 : ht.getDate()), mt = tt || ht.getFullYear(), ut = 0;
              tt && !lt || (ut = lt > 0 ? lt - 1 : ht.getMonth());
              var vt = ne || 0, bt = re || 0, yt = ae || 0, wt = oe || 0;
              return _t ? new Date(Date.UTC(mt, ut, pt, vt, bt, yt, wt + 60 * _t.offset * 1e3)) : z ? new Date(Date.UTC(mt, ut, pt, vt, bt, yt, wt)) : new Date(mt, ut, pt, vt, bt, yt, wt);
            } catch {
              return new Date("");
            }
          }(n, x, v), this.init(), L && L !== !0 && (this.$L = this.locale(L).$L), T && n != this.format(x) && (this.$d = new Date("")), a = {};
        } else if (x instanceof Array)
          for (var G = x.length, W = 1; W <= G; W += 1) {
            f[1] = x[W - 1];
            var F = k.apply(this, f);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            W === G && (this.$d = new Date(""));
          }
        else
          w.call(this, _);
      };
    };
  });
})(Nt);
const be = Nt.exports, qt = Symbol("CHART_ROWS_KEY"), Qt = Symbol("CONFIG_KEY"), Vt = Symbol("EMIT_BAR_EVENT_KEY"), Xt = Symbol("BAR_CONTAINER_KEY");
function j() {
  const t = dt(Qt);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Kt = "YYYY-MM-DD HH:mm";
function it(t = j()) {
  const { chartStart: c, chartEnd: i, barStart: r, barEnd: m, dateFormat: l } = t, u = R(() => s(c.value)), a = R(() => s(i.value)), s = (o, h) => {
    let p;
    if (h !== void 0 && typeof o != "string" && !(o instanceof Date) && (p = h === "start" ? o[r.value] : o[m.value]), typeof o == "string")
      p = o;
    else if (o instanceof Date)
      return H(o);
    const g = l.value || Kt;
    return H(p, g, !0);
  };
  return {
    chartStartDayjs: u,
    chartEndDayjs: a,
    toDayjs: s,
    format: (o, h) => h === !1 ? o instanceof Date ? o : H(o).toDate() : (typeof o == "string" || o instanceof Date ? s(o) : o).format(h)
  };
}
function Zt() {
  const { precision: t } = j(), { chartStartDayjs: c, chartEndDayjs: i } = it(), r = R(() => {
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
  }), m = R(() => {
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
  }, u = R(() => {
    const a = [], s = [], e = i.value.diff(c.value, "minutes", !0), o = r.value, h = m.value;
    let p = c.value, g = c.value;
    for (; g.isSameOrBefore(i.value); ) {
      const b = g.endOf(h), y = b.isAfter(i.value) ? i.value.diff(g, "minutes", !0) / e * 100 : b.diff(g, "minutes", !0) / e * 100;
      s.push({
        label: g.format(l[t == null ? void 0 : t.value]),
        value: String(g),
        date: g.toDate(),
        width: String(y) + "%"
      }), g = b.add(1, h === "isoWeek" ? "week" : h).startOf(h);
    }
    for (; p.isSameOrBefore(i.value); ) {
      const b = p.endOf(o), y = b.isAfter(i.value) ? i.value.diff(p, "minutes", !0) / e * 100 : b.diff(p, "minutes", !0) / e * 100;
      a.push({
        label: p.format(l[o]),
        value: String(p),
        date: p.toDate(),
        width: String(y) + "%"
      }), p = b.add(1, o).startOf(o);
    }
    return { upperUnits: a, lowerUnits: s };
  });
  return u.value.lowerUnits[0].label === "53" && u.value.lowerUnits.splice(0, 1), u.value.lowerUnits[u.value.lowerUnits.length - 1].label === "14" && u.value.lowerUnits.splice(u.value.lowerUnits.length - 1, 1), {
    timeaxisUnits: u
  };
}
const ye = { class: "g-grid-container" }, Ot = /* @__PURE__ */ V({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(t) {
    const { colors: c } = j(), { timeaxisUnits: i } = Zt(), r = (l) => {
      const u = +l >= 14 && +l <= 26, a = +l >= 40 && +l <= 52;
      return u || a ? "#f7f8f9" : "#ffffff";
    }, m = (l, u) => u === i.value.lowerUnits.length - 1 ? "unset" : l && Number(l) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2";
    return (l, u) => (E(), O("div", ye, [
      (E(!0), O(Z, null, et(C(i).lowerUnits, ({ label: a, value: s, width: e }, o) => {
        var h;
        return E(), O("div", {
          key: a,
          class: "g-grid-line",
          style: S({
            width: e,
            borderRight: m(a, o),
            background: (h = l.highlightedUnits) != null && h.includes(Number(s)) ? C(c).hoverHighlight : void 0,
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
const we = { class: "g-label-column-rows" }, xe = /* @__PURE__ */ V({
  __name: "GGanttLabelColumn",
  setup(t) {
    const { font: c, colors: i, labelColumnTitle: r, rowHeight: m } = j(), l = Bt();
    return (u, a) => (E(), O("div", {
      class: "g-label-column",
      style: S({ fontFamily: C(c), color: C(i).text })
    }, [
      Y(u.$slots, "label-column-title", {}, () => [
        $("div", {
          class: "g-label-column-header",
          style: S({ background: C(i).primary })
        }, Q(C(r)), 5)
      ]),
      $("div", we, [
        (E(!0), O(Z, null, et(C(l)(), ({ label: s }, e) => (E(), O("div", {
          key: `${s}_${e}`,
          class: "g-label-column-row",
          style: S({
            background: e % 2 === 0 ? C(i).ternary : C(i).quartenary,
            height: `${C(m)}px`
          })
        }, [
          Y(u.$slots, "label-column-row", { label: s }, () => [
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
    const { precision: c, colors: i } = j(), { timeaxisUnits: r } = Zt();
    return (m, l) => (E(), O("div", ke, [
      $("div", Be, [
        (E(!0), O(Z, null, et(C(r).lowerUnits, ({ label: u, value: a, date: s, width: e }, o) => (E(), O("div", {
          key: u,
          class: "g-timeunit g-timeunit-low",
          style: S({
            flexDirection: C(c) === "hour" ? "column" : "row",
            alignItems: C(c) === "hour" ? "" : "center",
            width: e
          })
        }, [
          o === 0 ? (E(), O("span", _e, "KW")) : A("", !0),
          Y(m.$slots, "timeunit", {
            label: u,
            value: a,
            date: s
          }, () => [
            nt(Q(u), 1)
          ]),
          C(c) === "hour" ? (E(), O("div", {
            key: 1,
            class: "g-timeaxis-hour-pin",
            style: S({ background: C(i).text })
          }, null, 4)) : A("", !0)
        ], 4))), 128))
      ]),
      $("div", Ce, [
        (E(!0), O(Z, null, et(C(r).upperUnits, ({ label: u, value: a, date: s, width: e }, o) => (E(), O("div", {
          key: u,
          class: "g-upper-timeunit",
          style: S({
            width: e
          })
        }, [
          Y(m.$slots, "upper-timeunit", {
            label: u,
            value: a,
            date: s
          }, () => [
            nt(Q(u), 1)
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
    const c = t, i = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      date: "DD. MMMM YYYY",
      month: "DD. MMMM YYYY",
      week: "DD. MMMM YYYY (WW)"
    }, { bar: r } = at(c), { precision: m, font: l, barStart: u, barEnd: a, rowHeight: s } = j(), e = I("0px"), o = I("0px");
    ft(
      () => c.bar,
      async () => {
        var n;
        await Rt();
        const y = ((n = r == null ? void 0 : r.value) == null ? void 0 : n.ganttBarConfig.id) || "";
        if (!y)
          return;
        const k = document.getElementById(y), { top: B, left: w } = (k == null ? void 0 : k.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, _ = Math.max(w, 10);
        e.value = `${B + s.value - 10}px`, o.value = `${_}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const h = R(() => {
      var y, k;
      return ((k = (y = r == null ? void 0 : r.value) == null ? void 0 : y.ganttBarConfig.style) == null ? void 0 : k.background) || Ee;
    }), { toDayjs: p } = it(), g = R(() => {
      var y;
      return (y = r.value) == null ? void 0 : y[u.value];
    }), b = R(() => {
      var y;
      return (y = r.value) == null ? void 0 : y[a.value];
    }), d = R(() => {
      if (!(r != null && r.value))
        return "";
      const y = i[m.value], k = p(g.value).format(y), B = p(b.value).format(y);
      return `${k} \u2013 ${B}`;
    });
    return (y, k) => (E(), K(ie, { to: "body" }, [
      ot(se, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: U(() => [
          y.modelValue ? (E(), O("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: S({
              top: e.value,
              left: o.value,
              fontFamily: C(l)
            })
          }, [
            $("div", {
              class: "g-gantt-tooltip-color-dot",
              style: S({ background: h.value })
            }, null, 4),
            Y(y.$slots, "default", {
              bar: C(r),
              barStart: g.value,
              barEnd: b.value
            }, () => [
              nt(Q(d.value), 1)
            ])
          ], 4)) : A("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function gt(t = j()) {
  const { dateFormat: c, chartSize: i } = t, { chartStartDayjs: r, chartEndDayjs: m, toDayjs: l, format: u } = it(t), a = R(() => m.value.diff(r.value, "minutes"));
  return {
    mapTimeToPosition: (o) => {
      const h = i.width.value || 0, p = l(o).diff(r.value, "minutes", !0);
      return Math.ceil(p / a.value * h);
    },
    mapPositionToTime: (o) => {
      const h = i.width.value || 0, p = o / h * a.value;
      return u(r.value.add(p, "minutes"), c.value);
    }
  };
}
const Te = /* @__PURE__ */ V({
  __name: "GGanttCurrentTime",
  setup(t) {
    const { mapTimeToPosition: c } = gt(), i = I(H()), { colors: r, dateFormat: m, currentTimeLabel: l } = j(), u = R(() => {
      const a = m.value || "YYYY-MM-DD HH:mm";
      return c(H(i.value, a).format(a));
    });
    return (a, s) => (E(), O("div", {
      class: "g-grid-current-time",
      style: S({
        left: `${u.value}px`
      })
    }, [
      $("div", {
        class: "g-grid-current-time-marker",
        style: S({
          border: `1px dashed ${C(r).markerCurrentTime}`
        })
      }, null, 4),
      $("span", {
        class: "g-grid-current-time-text",
        style: S({ color: C(r).markerCurrentTime })
      }, [
        Y(a.$slots, "current-time-label", {}, () => [
          nt(Q(C(l)), 1)
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
function Se(t) {
  return le() ? (ue(t), !0) : !1;
}
function Le(t, c = !0) {
  ce() ? Ht(t) : c ? t() : Rt(t);
}
function Jt(t) {
  var c;
  const i = Me(t);
  return (c = i == null ? void 0 : i.$el) != null ? c : i;
}
const Ye = st ? window : void 0;
st && window.document;
st && window.navigator;
st && window.location;
function Ge(t, c = !1) {
  const i = I(), r = () => i.value = Boolean(t());
  return r(), Le(r, c), i;
}
const xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, kt = "__vueuse_ssr_handlers__";
xt[kt] = xt[kt] || {};
xt[kt];
var Mt = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, Re = Object.prototype.propertyIsEnumerable, He = (t, c) => {
  var i = {};
  for (var r in t)
    Ie.call(t, r) && c.indexOf(r) < 0 && (i[r] = t[r]);
  if (t != null && Mt)
    for (var r of Mt(t))
      c.indexOf(r) < 0 && Re.call(t, r) && (i[r] = t[r]);
  return i;
};
function Ae(t, c, i = {}) {
  const r = i, { window: m = Ye } = r, l = He(r, ["window"]);
  let u;
  const a = Ge(() => m && "ResizeObserver" in m), s = () => {
    u && (u.disconnect(), u = void 0);
  }, e = ft(() => Jt(t), (h) => {
    s(), a.value && m && h && (u = new ResizeObserver(c), u.observe(h, l));
  }, { immediate: !0, flush: "post" }), o = () => {
    s(), e();
  };
  return Se(o), {
    isSupported: a,
    stop: o
  };
}
function We(t, c = { width: 0, height: 0 }, i = {}) {
  const r = I(c.width), m = I(c.height);
  return Ae(t, ([l]) => {
    r.value = l.contentRect.width, m.value = l.contentRect.height;
  }, i), ft(() => Jt(t), (l) => {
    r.value = l ? c.width : 0, m.value = l ? c.height : 0;
  }), {
    width: r,
    height: m
  };
}
var $t;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})($t || ($t = {}));
var je = Object.defineProperty, St = Object.getOwnPropertySymbols, ze = Object.prototype.hasOwnProperty, Pe = Object.prototype.propertyIsEnumerable, Lt = (t, c, i) => c in t ? je(t, c, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[c] = i, Ue = (t, c) => {
  for (var i in c || (c = {}))
    ze.call(c, i) && Lt(t, i, c[i]);
  if (St)
    for (var i of St(c))
      Pe.call(c, i) && Lt(t, i, c[i]);
  return t;
};
const Fe = {
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
Ue({
  linear: $e
}, Fe);
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
  setup(t, { emit: c }) {
    const i = t;
    H.extend(Pt);
    const r = new Date(), m = new Date();
    r.setDate(15), r.setMonth(10), m.setDate(31), m.setMonth(11);
    const l = I(
      H(new Date()).isBetween(r, m)
    ), { width: u, font: a, colorScheme: s } = at(i), e = de(), o = R(
      () => typeof s.value != "string" ? s.value : Yt[s.value] || Yt.default
    ), h = () => {
      var f;
      const n = (f = e.default) == null ? void 0 : f.call(e), v = [];
      return n && n.forEach((x) => {
        var D;
        if ((D = x.props) != null && D.bars) {
          const { label: M, bars: T } = x.props;
          v.push({ label: M, bars: T });
        } else
          Array.isArray(x.children) && x.children.forEach((M) => {
            var L;
            const T = M;
            if ((L = T == null ? void 0 : T.props) != null && L.bars) {
              const { label: G, bars: W } = T.props;
              v.push({ label: G, bars: W });
            }
          });
      }), v;
    }, p = I(!1), g = I(!1), b = I(void 0);
    let d;
    const y = (n) => {
      d && clearTimeout(d), d = setTimeout(() => {
        p.value = !0;
      }, 800), b.value = n;
    }, k = () => {
      clearTimeout(d), p.value = !1;
    }, B = (n, v, f, x) => {
      switch (n.type) {
        case "click":
          c("click-bar", { bar: v, e: n, datetime: f });
          break;
        case "mousedown":
          c("mousedown-bar", { bar: v, e: n, datetime: f });
          break;
        case "mouseup":
          c("mouseup-bar", { bar: v, e: n, datetime: f });
          break;
        case "dblclick":
          c("dblclick-bar", { bar: v, e: n, datetime: f });
          break;
        case "mouseenter":
          y(v), c("mouseenter-bar", { bar: v, e: n });
          break;
        case "mouseleave":
          k(), c("mouseleave-bar", { bar: v, e: n });
          break;
        case "dragstart":
          g.value = !0, c("dragstart-bar", { bar: v, e: n });
          break;
        case "drag":
          c("drag-bar", { bar: v, e: n });
          break;
        case "dragend":
          g.value = !1, c("dragend-bar", { bar: v, e: n, movedBars: x });
          break;
        case "contextmenu":
          c("contextmenu-bar", { bar: v, e: n, datetime: f });
          break;
      }
    }, w = I(null), _ = We(w);
    return document.getElementsByClassName("g-timeunit-low"), ct(qt, h), ct(Qt, {
      ...at(i),
      colors: o,
      chartSize: _
    }), ct(Vt, B), (n, v) => (E(), O("div", {
      class: rt(["g-gantt-chart-container", [
        l.value ? "g-gantt-chart-container--5-quarters-width" : "g-gantt-chart-container--4-quarters-width"
      ]])
    }, [
      Ne,
      $("div", {
        class: rt([{ "labels-in-column": !!n.labelColumnTitle }])
      }, [
        n.labelColumnTitle ? (E(), K(xe, {
          key: 0,
          style: S({
            width: n.labelColumnWidth
          })
        }, {
          "label-column-title": U(() => [
            Y(n.$slots, "label-column-title")
          ]),
          "label-column-row": U(({ label: f }) => [
            Y(n.$slots, "label-column-row", { label: f })
          ]),
          _: 3
        }, 8, ["style"])) : A("", !0),
        $("div", {
          ref_key: "ganttChart",
          ref: w,
          class: rt(["g-gantt-chart", { "with-column": n.labelColumnTitle }]),
          style: S({ width: C(u), background: o.value.background, fontFamily: C(a) })
        }, [
          n.grid ? (E(), K(Ot, {
            key: 0,
            "highlighted-units": n.highlightedUnits
          }, null, 8, ["highlighted-units"])) : A("", !0),
          n.currentTime ? (E(), K(Te, { key: 1 }, {
            "current-time-label": U(() => [
              Y(n.$slots, "current-time-label")
            ]),
            _: 3
          })) : A("", !0),
          $("div", qe, [
            Qe,
            Ve,
            Xe,
            Ke,
            l.value ? (E(), O("div", Ze, "Q1")) : A("", !0)
          ]),
          $("div", {
            class: rt([
              "g-gantt-rows-container",
              i.verticalGrid ? "g-gantt-chart-vertical-grid" : ""
            ])
          }, [
            Y(n.$slots, "default"),
            ot(Ot, { "highlighted-units": n.highlightedUnits }, null, 8, ["highlighted-units"])
          ], 2),
          n.hideTimeaxis ? A("", !0) : (E(), K(De, { key: 2 }, {
            "upper-timeunit": U(({ label: f, value: x, date: D }) => [
              Y(n.$slots, "upper-timeunit", {
                label: f,
                value: x,
                date: D
              })
            ]),
            timeunit: U(({ label: f, value: x, date: D }) => [
              Y(n.$slots, "timeunit", {
                label: f,
                value: x,
                date: D
              })
            ]),
            _: 3
          }))
        ], 6)
      ], 2),
      ot(Oe, {
        "model-value": p.value || g.value,
        bar: b.value
      }, {
        default: U(() => [
          Y(n.$slots, "bar-tooltip", { bar: b.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ], 2));
  }
});
function Gt(t, c = () => null, i = () => null, r = j()) {
  const { barStart: m, barEnd: l, pushOnOverlap: u } = r, a = I(!1);
  let s = 0, e;
  const { mapPositionToTime: o } = gt(r), { toDayjs: h } = it(r), p = (w) => {
    const _ = document.getElementById(t.ganttBarConfig.id);
    if (!_)
      return;
    switch (s = w.clientX - (_.getBoundingClientRect().left || 0), w.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", e = d;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", e = y;
        break;
      default:
        e = b;
    }
    a.value = !0, window.addEventListener("mousemove", e), window.addEventListener("mouseup", B);
  }, g = () => {
    var n;
    const w = document.getElementById(t.ganttBarConfig.id), _ = (n = w == null ? void 0 : w.closest(".g-gantt-row-bars-container")) == null ? void 0 : n.getBoundingClientRect();
    return { barElement: w, barContainer: _ };
  }, b = (w) => {
    const { barElement: _, barContainer: n } = g();
    if (!_ || !n)
      return;
    const v = _.getBoundingClientRect().width, f = w.clientX - n.left - s, x = f + v;
    k(f, x) || (t[m.value] = o(f), t[l.value] = o(x), c(w, t));
  }, d = (w) => {
    const { barElement: _, barContainer: n } = g();
    if (!_ || !n)
      return;
    const v = w.clientX - n.left, f = o(v);
    h(f).isSameOrAfter(h(t, "end")) || (t[m.value] = f, c(w, t));
  }, y = (w) => {
    const { barElement: _, barContainer: n } = g();
    if (!_ || !n)
      return;
    const v = w.clientX - n.left, f = o(v);
    h(f).isSameOrBefore(h(t, "start")) || (t[l.value] = f, c(w, t));
  }, k = (w, _) => {
    if (!u.value)
      return !1;
    const n = t.ganttBarConfig.dragLimitLeft, v = t.ganttBarConfig.dragLimitRight;
    return w && n != null && w < n || _ && v != null && _ > v;
  }, B = (w) => {
    a.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", B), i(w, t);
  };
  return {
    isDragging: a,
    initDrag: p
  };
}
function te() {
  const t = dt(Vt);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function tn() {
  const t = j(), c = Bt(), i = te(), { pushOnOverlap: r, barStart: m, barEnd: l, noOverlap: u, dateFormat: a } = t, s = /* @__PURE__ */ new Map(), { toDayjs: e, format: o } = it(), h = (n, v) => {
    const { initDrag: f } = Gt(n, g, B, t);
    i({ ...v, type: "dragstart" }, n), f(v), w(n);
  }, p = (n, v) => {
    const f = n.ganttBarConfig.bundle;
    f != null && (c().forEach((x) => {
      x.bars.forEach((D) => {
        if (D.ganttBarConfig.bundle === f) {
          const M = D === n ? B : () => null, { initDrag: T } = Gt(D, g, M, t);
          T(v), w(D);
        }
      });
    }), i({ ...v, type: "dragstart" }, n));
  }, g = (n, v) => {
    i({ ...n, type: "drag" }, v), b(v);
  }, b = (n) => {
    if (!(r != null && r.value))
      return;
    let v = n, { overlapBar: f, overlapType: x } = d(v);
    for (; f; ) {
      w(f);
      const D = e(v[m.value]), M = e(v[l.value]), T = e(f[m.value]), L = e(f[l.value]);
      let G;
      switch (x) {
        case "left":
          G = L.diff(D, "minutes", !0), f[l.value] = o(v[m.value], a.value), f[m.value] = o(
            T.subtract(G, "minutes"),
            a.value
          );
          break;
        case "right":
          G = M.diff(T, "minutes", !0), f[m.value] = o(M, a.value), f[l.value] = o(
            L.add(G, "minutes"),
            a.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      f && (x === "left" || x === "right") && y(f, G, x), v = f, { overlapBar: f, overlapType: x } = d(f);
    }
  }, d = (n) => {
    var W, F;
    let v, f, x;
    const D = (F = (W = c().find((N) => N.bars.includes(n))) == null ? void 0 : W.bars) != null ? F : [], M = e(n[m.value]), T = e(n[l.value]);
    return { overlapBar: D.find((N) => {
      if (N === n)
        return !1;
      const q = e(N[m.value]), z = e(N[l.value]);
      return v = M.isBetween(q, z), f = T.isBetween(q, z), x = q.isBetween(M, T) || z.isBetween(M, T), v || f || x;
    }), overlapType: v ? "left" : f ? "right" : x ? "between" : null };
  }, y = (n, v, f) => {
    w(n), n.ganttBarConfig.bundle && c().forEach((x) => {
      x.bars.forEach((D) => {
        D.ganttBarConfig.bundle === n.ganttBarConfig.bundle && D !== n && (w(D), k(D, v, f));
      });
    });
  }, k = (n, v, f) => {
    switch (f) {
      case "left":
        n[m.value] = o(
          e(n, "start").subtract(v, "minutes"),
          a.value
        ), n[l.value] = o(
          e(n, "end").subtract(v, "minutes"),
          a.value
        );
        break;
      case "right":
        n[m.value] = o(
          e(n, "start").add(v, "minutes"),
          a.value
        ), n[l.value] = o(e(n, "end").add(v, "minutes"), a.value);
    }
    b(n);
  }, B = (n, v) => {
    _();
    const f = {
      ...n,
      type: "dragend"
    };
    i(f, v, void 0, new Map(s)), s.clear();
  }, w = (n) => {
    if (!s.has(n)) {
      const v = n[m.value], f = n[l.value];
      s.set(n, { oldStart: v, oldEnd: f });
    }
  }, _ = () => {
    if (r.value || !u.value)
      return;
    let n = !1;
    s.forEach((v, f) => {
      const { overlapBar: x } = d(f);
      x != null && (n = !0);
    }), n && s.forEach(({ oldStart: v, oldEnd: f }, x) => {
      x[m.value] = v, x[l.value] = f;
    });
  };
  return {
    initDragOfBar: h,
    initDragOfBundle: p
  };
}
function en() {
  const { pushOnOverlap: t } = j(), c = Bt(), i = (u) => {
    const a = [];
    return u != null && c().forEach((s) => {
      s.bars.forEach((e) => {
        e.ganttBarConfig.bundle === u && a.push(e);
      });
    }), a;
  }, r = (u) => {
    if (!t.value || u.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const s of ["left", "right"]) {
      const e = s, { gapDistanceSoFar: o, bundleBarsAndGapDist: h } = m(
        u,
        0,
        e
      );
      let p = o;
      const g = h;
      if (!g)
        continue;
      for (let d = 0; d < g.length; d++) {
        const y = g[d].bar, k = g[d].gapDistance;
        i(y.ganttBarConfig.bundle).filter(
          (w) => w !== y
        ).forEach((w) => {
          const _ = m(w, k, e), n = _.gapDistanceSoFar, v = _.bundleBarsAndGapDist;
          n != null && (!p || n < p) && (p = n), v.forEach((f) => {
            g.find((x) => x.bar === f.bar) || g.push(f);
          });
        });
      }
      const b = document.getElementById(u.ganttBarConfig.id);
      p != null && e === "left" ? u.ganttBarConfig.dragLimitLeft = b.offsetLeft - p : p != null && e === "right" && (u.ganttBarConfig.dragLimitRight = b.offsetLeft + b.offsetWidth + p);
    }
    i(u.ganttBarConfig.bundle).forEach((s) => {
      s.ganttBarConfig.dragLimitLeft = u.ganttBarConfig.dragLimitLeft, s.ganttBarConfig.dragLimitRight = u.ganttBarConfig.dragLimitRight;
    });
  }, m = (u, a = 0, s) => {
    const e = u.ganttBarConfig.bundle ? [{ bar: u, gapDistance: a }] : [];
    let o = u, h = l(o, s);
    if (s === "left")
      for (; h; ) {
        const p = document.getElementById(o.ganttBarConfig.id), g = document.getElementById(h.ganttBarConfig.id), b = g.offsetLeft + g.offsetWidth;
        if (a += p.offsetLeft - b, h.ganttBarConfig.immobile)
          return { gapDistanceSoFar: a, bundleBarsAndGapDist: e };
        h.ganttBarConfig.bundle && e.push({
          bar: h,
          gapDistance: a
        }), o = h, h = l(h, "left");
      }
    if (s === "right")
      for (; h; ) {
        const p = document.getElementById(o.ganttBarConfig.id), g = document.getElementById(h.ganttBarConfig.id), b = p.offsetLeft + p.offsetWidth;
        if (a += g.offsetLeft - b, h.ganttBarConfig.immobile)
          return { gapDistanceSoFar: a, bundleBarsAndGapDist: e };
        h.ganttBarConfig.bundle && e.push({
          bar: h,
          gapDistance: a
        }), o = h, h = l(h, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: e };
  }, l = (u, a) => {
    var h, p;
    const s = document.getElementById(u.ganttBarConfig.id), e = (p = (h = c().find((g) => g.bars.includes(u))) == null ? void 0 : h.bars) != null ? p : [];
    let o = [];
    return a === "left" ? o = e.filter((g) => {
      const b = document.getElementById(g.ganttBarConfig.id);
      return b && b.offsetLeft < s.offsetLeft && g.ganttBarConfig.pushOnOverlap !== !1;
    }) : o = e.filter((g) => {
      const b = document.getElementById(g.ganttBarConfig.id);
      return b && b.offsetLeft > s.offsetLeft && g.ganttBarConfig.pushOnOverlap !== !1;
    }), o.length > 0 ? o.reduce((g, b) => {
      const d = document.getElementById(g.ganttBarConfig.id), y = document.getElementById(b.ganttBarConfig.id), k = Math.abs(d.offsetLeft - s.offsetLeft), B = Math.abs(y.offsetLeft - s.offsetLeft);
      return k < B ? g : b;
    }, o[0]) : null;
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
    var v;
    const c = t;
    fe((f) => ({
      "22f5b0ec": C(u)
    }));
    const i = te(), r = j(), { rowHeight: m } = r, { bar: l } = at(c), u = (v = c.bar.ganttBarConfig.style) == null ? void 0 : v.backgroundColor, { mapTimeToPosition: a, mapPositionToTime: s } = gt();
    tn(), en();
    const e = I(!1), o = R(() => l.value.ganttBarConfig), h = dt(Xt), p = (f) => {
      var M;
      f.preventDefault();
      const x = (M = h == null ? void 0 : h.value) == null ? void 0 : M.getBoundingClientRect();
      if (!x)
        return;
      const D = s(f.clientX - x.left);
      i(f, l.value, D);
    }, { barStart: g, barEnd: b, width: d, chartStart: y, chartEnd: k, chartSize: B } = r, w = I(0), _ = I(0), n = R(() => {
      const f = new Date(l.value.myBeginDate).getTime(), x = new Date(l.value.myEndDate).getTime();
      return Math.abs(f - x) / (1e3 * 60 * 60 * 24) <= 2 ? 0 : _.value - w.value - ln;
    });
    return Ht(() => {
      ft(
        [l, d, y, k, B.width],
        () => {
          w.value = a(l.value[g.value]), _.value = a(l.value[b.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (f, x) => {
      var D;
      return E(), O("div", {
        id: o.value.id,
        class: rt(["g-gantt-bar", o.value.asArrow ? "g-gantt-bar-is-arrow" : "", o.value.class || ""]),
        style: S({
          ...o.value.style,
          position: "absolute",
          top: `${C(m) * 0.1}px`,
          left: `${w.value}px`,
          width: `${n.value}px`,
          height: `${C(m) * 0.8}px`,
          zIndex: e.value ? 3 : 2
        }),
        onMousedown: p,
        onClick: p,
        onDblclick: p,
        onMouseenter: p,
        onMouseleave: p,
        onContextmenu: p
      }, [
        $("div", rn, [
          Y(f.$slots, "default", { bar: C(l) }, () => [
            $("div", null, Q(o.value.label || ""), 1),
            o.value.html ? (E(), O("div", {
              key: 0,
              innerHTML: o.value.html
            }, null, 8, an)) : A("", !0)
          ])
        ]),
        o.value.asArrow ? (E(), O("div", {
          key: 0,
          class: "g-gantt-bar-arrow",
          style: S({
            borderLeft: `8px solid #${(D = C(l).ganttBarConfig.style) == null ? void 0 : D.backgroundColor}`
          })
        }, null, 4)) : A("", !0),
        o.value.hasHandles ? (E(), O(Z, { key: 1 }, [
          on,
          sn
        ], 64)) : A("", !0)
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
  setup(t, { emit: c }) {
    const i = t, { rowHeight: r, colors: m, labelColumnTitle: l } = j(), { highlightOnHover: u } = at(i), a = I(!1), s = R(() => ({
      height: `${r.value}px`,
      background: (u == null ? void 0 : u.value) && a.value ? m.value.hoverHighlight : null
    })), { mapPositionToTime: e } = gt(), o = I(null);
    ct(Xt, o);
    const h = (g) => {
      var k;
      const b = (k = o.value) == null ? void 0 : k.getBoundingClientRect();
      if (!b) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const d = g.clientX - b.left, y = e(d);
      c("drop", { e: g, datetime: y });
    }, p = (g) => !g || /^\s*$/.test(g);
    return (g, b) => (E(), O("div", null, [
      $("div", {
        class: "g-gantt-row",
        style: S(s.value),
        onDragover: b[0] || (b[0] = Ct((d) => a.value = !0, ["prevent"])),
        onDragleave: b[1] || (b[1] = (d) => a.value = !1),
        onDrop: b[2] || (b[2] = (d) => h(d)),
        onMouseover: b[3] || (b[3] = (d) => a.value = !0),
        onMouseleave: b[4] || (b[4] = (d) => a.value = !1)
      }, [
        !p(g.label) && !C(l) ? (E(), O("div", {
          key: 0,
          class: "g-gantt-row-label",
          style: S({ background: C(m).primary, color: C(m).text })
        }, [
          Y(g.$slots, "label", {}, () => [
            nt(Q(g.label), 1)
          ])
        ], 4)) : A("", !0),
        $("div", Dt({
          ref_key: "barContainer",
          ref: o,
          class: "g-gantt-row-bars-container"
        }, g.$attrs), [
          ot(Et, {
            name: "bar-transition sys",
            tag: "div"
          }, {
            default: U(() => [
              (E(!0), O(Z, null, et(g.bars, (d) => (E(), K(It, {
                key: d.ganttBarConfig.id,
                bar: d
              }, {
                default: U(() => [
                  Y(g.$slots, "bar-label", { bar: d })
                ]),
                _: 2
              }, 1032, ["bar"]))), 128))
            ]),
            _: 3
          })
        ], 16)
      ], 36),
      g.overlaps ? (E(), O("div", {
        key: 0,
        class: "g-gantt-row",
        style: S(s.value),
        onDragover: b[5] || (b[5] = Ct((d) => a.value = !0, ["prevent"])),
        onDragleave: b[6] || (b[6] = (d) => a.value = !1),
        onDrop: b[7] || (b[7] = (d) => h(d)),
        onMouseover: b[8] || (b[8] = (d) => a.value = !0),
        onMouseleave: b[9] || (b[9] = (d) => a.value = !1)
      }, [
        !p(g.label) && !C(l) ? (E(), O("div", {
          key: 0,
          class: "g-gantt-row-label",
          style: S({ background: C(m).primary, color: C(m).text })
        }, [
          Y(g.$slots, "label", {}, () => [
            nt(Q(g.label), 1)
          ])
        ], 4)) : A("", !0),
        $("div", Dt({
          ref_key: "barContainer",
          ref: o,
          class: "g-gantt-row-bars-container"
        }, g.$attrs), [
          ot(Et, {
            name: "bar-transition OVERLAP___",
            tag: "div"
          }, {
            default: U(() => [
              (E(!0), O(Z, null, et(g.overlaps, (d) => (E(), K(It, {
                key: d.ganttBarConfig.id,
                bar: d
              }, {
                default: U(() => [
                  Y(g.$slots, "bar-label", { bar: d })
                ]),
                _: 2
              }, 1032, ["bar"]))), 128))
            ]),
            _: 3
          })
        ], 16)
      ], 36)) : A("", !0)
    ]));
  }
});
function cn() {
  H.extend(he), H.extend(pe), H.extend(Pt), H.extend(be), H.extend(me), H.extend(ge), H.extend(ve);
}
const hn = {
  install(t, c) {
    cn(), t.component("GGanttChart", Je), t.component("GGanttRow", un);
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
export {
  Je as GGanttChart,
  un as GGanttRow,
  hn as default,
  cn as extendDayjs,
  hn as ganttastic
};
