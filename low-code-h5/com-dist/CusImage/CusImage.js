exports.CUSIMAGE = (function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 65))
  );
})([
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, n(31)));
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = {}.hasOwnProperty;
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return o.call(r(t), e);
      };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(16),
      i = n(20);
    t.exports = r
      ? function (t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    var r = n(1);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(8),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(4);
    t.exports = function (t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(10),
      o = n(12);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(11),
      i = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == o(t) ? i.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(14),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e, n) {
    var r = n(40),
      o = n(7);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.15.2",
      mode: r ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e, n) {
    var r = n(5),
      o = n(17),
      i = n(18),
      u = n(19),
      c = Object.defineProperty;
    e.f = r
      ? c
      : function (t, e, n) {
          if ((i(t), (e = u(e, !0)), i(n), o))
            try {
              return c(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(1),
      i = n(41);
    t.exports =
      !r &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    var r = n(42),
      o = n(1);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      });
  },
  function (t, e, n) {
    var r = n(44),
      o = n(0),
      i = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][e]) || (o[t] && o[t][e]);
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(49),
      i = n(20),
      u = n(9),
      c = n(19),
      a = n(2),
      s = n(17),
      f = Object.getOwnPropertyDescriptor;
    e.f = r
      ? f
      : function (t, e) {
          if (((t = u(t)), (e = c(e, !0)), s))
            try {
              return f(t, e);
            } catch (t) {}
          if (a(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    var r = n(7),
      o = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function (t) {
        return o.call(t);
      }),
      (t.exports = r.inspectSource);
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(2),
      o = n(9),
      i = n(57).indexOf,
      u = n(26);
    t.exports = function (t, e) {
      var n,
        c = o(t),
        a = 0,
        s = [];
      for (n in c) !r(u, n) && r(c, n) && s.push(n);
      for (; e.length > a; ) r(c, (n = e[a++])) && (~i(s, n) || s.push(n));
      return s;
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, n) {
    var r = n(63);
    r.__esModule && (r = r.default),
      "string" == typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    (0, n(66).default)("80ceca9e", r, !1, {});
  },
  function (t, e, n) {
    var r = n(0),
      o = n(32),
      i = n(33),
      u = n(4);
    for (var c in o) {
      var a = r[c],
        s = a && a.prototype;
      if (s && s.forEach !== i)
        try {
          u(s, "forEach", i);
        } catch (t) {
          s.forEach = i;
        }
    }
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(34).forEach,
      o = n(46)("forEach");
    t.exports = o
      ? [].forEach
      : function (t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        };
  },
  function (t, e, n) {
    var r = n(35),
      o = n(10),
      i = n(6),
      u = n(13),
      c = n(37),
      a = [].push,
      s = function (t) {
        var e = 1 == t,
          n = 2 == t,
          s = 3 == t,
          f = 4 == t,
          l = 6 == t,
          p = 7 == t,
          d = 5 == t || l;
        return function (v, h, y, g) {
          for (
            var b,
              m,
              x = i(v),
              S = o(x),
              O = r(h, y, 3),
              j = u(S.length),
              w = 0,
              _ = g || c,
              T = e ? _(v, j) : n || p ? _(v, 0) : void 0;
            j > w;
            w++
          )
            if ((d || w in S) && ((m = O((b = S[w]), w, x)), t))
              if (e) T[w] = m;
              else if (m)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return b;
                  case 6:
                    return w;
                  case 2:
                    a.call(T, b);
                }
              else
                switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    a.call(T, b);
                }
          return l ? -1 : s || f ? f : T;
        };
      };
    t.exports = {
      forEach: s(0),
      map: s(1),
      filter: s(2),
      some: s(3),
      every: s(4),
      find: s(5),
      findIndex: s(6),
      filterOut: s(7),
    };
  },
  function (t, e, n) {
    var r = n(36);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(3),
      o = n(38),
      i = n(39)("species");
    t.exports = function (t, e) {
      var n;
      return (
        o(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !o(n.prototype))
            ? r(n) && null === (n = n[i]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, n) {
    var r = n(11);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(15),
      i = n(2),
      u = n(21),
      c = n(22),
      a = n(45),
      s = o("wks"),
      f = r.Symbol,
      l = a ? f : (f && f.withoutSetter) || u;
    t.exports = function (t) {
      return (
        (i(s, t) && (c || "string" == typeof s[t])) ||
          (c && i(f, t) ? (s[t] = f[t]) : (s[t] = l("Symbol." + t))),
        s[t]
      );
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(3),
      i = r.document,
      u = o(i) && o(i.createElement);
    t.exports = function (t) {
      return u ? i.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r,
      o,
      i = n(0),
      u = n(43),
      c = i.process,
      a = c && c.versions,
      s = a && a.v8;
    s
      ? (o = (r = s.split("."))[0] < 4 ? 1 : r[0] + r[1])
      : u &&
        (!(r = u.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = u.match(/Chrome\/(\d+)/)) &&
        (o = r[1]),
      (t.exports = o && +o);
  },
  function (t, e, n) {
    var r = n(23);
    t.exports = r("navigator", "userAgent") || "";
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(22);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(48),
      o = n(6),
      i = n(61);
    r(
      {
        target: "Object",
        stat: !0,
        forced: n(1)(function () {
          i(1);
        }),
      },
      {
        keys: function (t) {
          return i(o(t));
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(0),
      o = n(24).f,
      i = n(4),
      u = n(50),
      c = n(8),
      a = n(54),
      s = n(60);
    t.exports = function (t, e) {
      var n,
        f,
        l,
        p,
        d,
        v = t.target,
        h = t.global,
        y = t.stat;
      if ((n = h ? r : y ? r[v] || c(v, {}) : (r[v] || {}).prototype))
        for (f in e) {
          if (
            ((p = e[f]),
            (l = t.noTargetGet ? (d = o(n, f)) && d.value : n[f]),
            !s(h ? f : v + (y ? "." : "#") + f, t.forced) && void 0 !== l)
          ) {
            if (typeof p == typeof l) continue;
            a(p, l);
          }
          (t.sham || (l && l.sham)) && i(p, "sham", !0), u(n, f, p, t);
        }
    };
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(4),
      i = n(2),
      u = n(8),
      c = n(25),
      a = n(51),
      s = a.get,
      f = a.enforce,
      l = String(String).split("String");
    (t.exports = function (t, e, n, c) {
      var a,
        s = !!c && !!c.unsafe,
        p = !!c && !!c.enumerable,
        d = !!c && !!c.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof e || i(n, "name") || o(n, "name", e),
        (a = f(n)).source ||
          (a.source = l.join("string" == typeof e ? e : ""))),
        t !== r
          ? (s ? !d && t[e] && (p = !0) : delete t[e],
            p ? (t[e] = n) : o(t, e, n))
          : p
          ? (t[e] = n)
          : u(e, n);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && s(this).source) || c(this);
    });
  },
  function (t, e, n) {
    var r,
      o,
      i,
      u = n(52),
      c = n(0),
      a = n(3),
      s = n(4),
      f = n(2),
      l = n(7),
      p = n(53),
      d = n(26),
      v = c.WeakMap;
    if (u || l.state) {
      var h = l.state || (l.state = new v()),
        y = h.get,
        g = h.has,
        b = h.set;
      (r = function (t, e) {
        if (g.call(h, t)) throw new TypeError("Object already initialized");
        return (e.facade = t), b.call(h, t, e), e;
      }),
        (o = function (t) {
          return y.call(h, t) || {};
        }),
        (i = function (t) {
          return g.call(h, t);
        });
    } else {
      var m = p("state");
      (d[m] = !0),
        (r = function (t, e) {
          if (f(t, m)) throw new TypeError("Object already initialized");
          return (e.facade = t), s(t, m, e), e;
        }),
        (o = function (t) {
          return f(t, m) ? t[m] : {};
        }),
        (i = function (t) {
          return f(t, m);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!a(e) || (n = o(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(25),
      i = r.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o(i));
  },
  function (t, e, n) {
    var r = n(15),
      o = n(21),
      i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(55),
      i = n(24),
      u = n(16);
    t.exports = function (t, e) {
      for (var n = o(e), c = u.f, a = i.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || c(t, f, a(e, f));
      }
    };
  },
  function (t, e, n) {
    var r = n(23),
      o = n(56),
      i = n(59),
      u = n(18);
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = o.f(u(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(27),
      o = n(28).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(9),
      o = n(13),
      i = n(58),
      u = function (t) {
        return function (e, n, u) {
          var c,
            a = r(e),
            s = o(a.length),
            f = i(u, s);
          if (t && n != n) {
            for (; s > f; ) if ((c = a[f++]) != c) return !0;
          } else
            for (; s > f; f++)
              if ((t || f in a) && a[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: u(!0), indexOf: u(!1) };
  },
  function (t, e, n) {
    var r = n(14),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(1),
      o = /#|\.prototype\./,
      i = function (t, e) {
        var n = c[u(t)];
        return n == s || (n != a && ("function" == typeof e ? r(e) : !!e));
      },
      u = (i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }),
      c = (i.data = {}),
      a = (i.NATIVE = "N"),
      s = (i.POLYFILL = "P");
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(27),
      o = n(28);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    "use strict";
    n(29);
  },
  function (t, e, n) {
    (e = n(64)(!1)).push([
      t.i,
      ".img-warp[data-v-5242d92c]{width:100%;display:flex}\n",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = (function (t, e) {
              var n = t[1] || "",
                r = t[3];
              if (!r) return n;
              if (e && "function" == typeof btoa) {
                var o =
                    ((u = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(u))))),
                    (a =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        c
                      )),
                    "/*# ".concat(a, " */")),
                  i = r.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(t, " */");
                  });
                return [n].concat(i).concat([o]).join("\n");
              }
              var u, c, a;
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function (t, n, r) {
          "string" == typeof t && (t = [[null, t, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var u = this[i][0];
              null != u && (o[u] = !0);
            }
          for (var c = 0; c < t.length; c++) {
            var a = [].concat(t[c]);
            (r && o[a[0]]) ||
              (n &&
                (a[2]
                  ? (a[2] = "".concat(n, " and ").concat(a[2]))
                  : (a[2] = n)),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = function () {
      var t = this.$createElement,
        e = this._self._c || t;
      return e(
        "div",
        {
          staticClass: "img-warp",
          style: { justifyContent: this.propsData.align },
        },
        [
          e("img", {
            style: {
              width: this.propsData.width + "px",
              height: this.propsData.height + "px",
            },
            attrs: { src: this.propsData.src || this.settings.src.default },
          }),
        ]
      );
    };
    function o(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function i(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    r._withStripped = !0;
    n(30), n(47);
    var u = {
        src: {
          default:
            "https://web-data.zmlearn.com/image/vhZfCTJjPpKUHV2gTi447y/1.jpg",
          label: "图片地址",
          type: "input",
          require: !0,
          placeholder: "请输入图片地址",
        },
        width: {
          default: "200",
          label: "宽度",
          type: "numberInput",
          require: !0,
          placeholder: "请输入图片宽度",
        },
        height: {
          default: "200",
          label: "高度",
          type: "numberInput",
          require: !0,
          placeholder: "请输入图片高度",
        },
        align: {
          default: "center",
          label: "对齐方式",
          type: "align",
          require: !0,
        },
        isJump: { default: !1, label: "是否跳转", type: "switch", require: !0 },
        jumpUrl: {
          default: "",
          label: "跳转地址",
          type: "input",
          require: !1,
          placeholder: "请输入跳转地址",
        },
      },
      c = {};
    Object.keys(u).forEach(function (t) {
      c[t] = u[t].default;
    });
    var a = {
      name: "CusImage",
      data: function () {
        return { settings: u };
      },
      props: {
        propsData: {
          type: Object,
          default: function () {
            return (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? i(Object(n), !0).forEach(function (e) {
                      o(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : i(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, c);
          },
        },
      },
      created: function () {},
      mounted: function () {},
      methods: {
        handleClick: function () {
          this.propsData.isJump && (location.href = this.propsData.jumpUrl);
        },
      },
    };
    n(62);
    var s = (function (t, e, n, r, o, i, u, c) {
      var a,
        s = "function" == typeof t ? t.options : t;
      if (
        (e && ((s.render = e), (s.staticRenderFns = n), (s._compiled = !0)),
        r && (s.functional = !0),
        i && (s._scopeId = "data-v-" + i),
        u
          ? ((a = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                o && o.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(u);
            }),
            (s._ssrRegister = a))
          : o &&
            (a = c
              ? function () {
                  o.call(
                    this,
                    (s.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : o),
        a)
      )
        if (s.functional) {
          s._injectStyles = a;
          var f = s.render;
          s.render = function (t, e) {
            return a.call(e), f(t, e);
          };
        } else {
          var l = s.beforeCreate;
          s.beforeCreate = l ? [].concat(l, a) : [a];
        }
      return { exports: t, options: s };
    })(a, r, [], !1, null, "5242d92c", null);
    s.options.__file = "src/components/CusImage/views/index.vue";
    var f = s.exports;
    e.default = f;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          u = i[0],
          c = { id: t + ":" + o, css: i[1], media: i[2], sourceMap: i[3] };
        r[u] ? r[u].parts.push(c) : n.push((r[u] = { id: u, parts: [c] }));
      }
      return n;
    }
    n.r(e),
      n.d(e, "default", function () {
        return d;
      });
    var o = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !o)
      throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      );
    var i = {},
      u = o && (document.head || document.getElementsByTagName("head")[0]),
      c = null,
      a = 0,
      s = !1,
      f = function () {},
      l = null,
      p =
        "undefined" != typeof navigator &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function d(t, e, n, o) {
      (s = n), (l = o || {});
      var u = r(t, e);
      return (
        v(u),
        function (e) {
          for (var n = [], o = 0; o < u.length; o++) {
            var c = u[o];
            (a = i[c.id]).refs--, n.push(a);
          }
          e ? v((u = r(t, e))) : (u = []);
          for (o = 0; o < n.length; o++) {
            var a;
            if (0 === (a = n[o]).refs) {
              for (var s = 0; s < a.parts.length; s++) a.parts[s]();
              delete i[a.id];
            }
          }
        }
      );
    }
    function v(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e],
          r = i[n.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
          for (; o < n.parts.length; o++) r.parts.push(y(n.parts[o]));
          r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
        } else {
          var u = [];
          for (o = 0; o < n.parts.length; o++) u.push(y(n.parts[o]));
          i[n.id] = { id: n.id, refs: 1, parts: u };
        }
      }
    }
    function h() {
      var t = document.createElement("style");
      return (t.type = "text/css"), u.appendChild(t), t;
    }
    function y(t) {
      var e,
        n,
        r = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
      if (r) {
        if (s) return f;
        r.parentNode.removeChild(r);
      }
      if (p) {
        var o = a++;
        (r = c || (c = h())),
          (e = m.bind(null, r, o, !1)),
          (n = m.bind(null, r, o, !0));
      } else
        (r = h()),
          (e = x.bind(null, r)),
          (n = function () {
            r.parentNode.removeChild(r);
          });
      return (
        e(t),
        function (r) {
          if (r) {
            if (
              r.css === t.css &&
              r.media === t.media &&
              r.sourceMap === t.sourceMap
            )
              return;
            e((t = r));
          } else n();
        }
      );
    }
    var g,
      b =
        ((g = []),
        function (t, e) {
          return (g[t] = e), g.filter(Boolean).join("\n");
        });
    function m(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = b(e, o);
      else {
        var i = document.createTextNode(o),
          u = t.childNodes;
        u[e] && t.removeChild(u[e]),
          u.length ? t.insertBefore(i, u[e]) : t.appendChild(i);
      }
    }
    function x(t, e) {
      var n = e.css,
        r = e.media,
        o = e.sourceMap;
      if (
        (r && t.setAttribute("media", r),
        l.ssrId && t.setAttribute("data-vue-ssr-id", e.id),
        o &&
          ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
          (n +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            " */")),
        t.styleSheet)
      )
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
  },
]).default;
