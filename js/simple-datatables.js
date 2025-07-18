/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /npm/simple-datatables@7.1.2/dist/umd/simple-datatables.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (t) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).simpleDatatables = t();
  }
})(function () {
  return (function t(e, s, i) {
    function n(o, r) {
      if (!s[o]) {
        if (!e[o]) {
          var l = "function" == typeof require && require;
          if (!r && l) return l(o, !0);
          if (a) return a(o, !0);
          var d = new Error("Cannot find module '" + o + "'");
          throw ((d.code = "MODULE_NOT_FOUND"), d);
        }
        var c = (s[o] = { exports: {} });
        e[o][0].call(
          c.exports,
          function (t) {
            return n(e[o][1][t] || t);
          },
          c,
          c.exports,
          t,
          e,
          s,
          i
        );
      }
      return s[o].exports;
    }
    for (
      var a = "function" == typeof require && require, o = 0;
      o < i.length;
      o++
    )
      n(i[o]);
    return n;
  })(
    {
      1: [
        function (t, e, s) {
          (function (t) {
            (function () {
              "use strict";
              const e = (t) =>
                  "[object Object]" === Object.prototype.toString.call(t),
                i = (t) => {
                  let s = !1;
                  try {
                    s = JSON.parse(t);
                  } catch (t) {
                    return !1;
                  }
                  return !(null === s || (!Array.isArray(s) && !e(s))) && s;
                },
                n = (t, e) => {
                  const s = document.createElement(t);
                  if (e && "object" == typeof e)
                    for (const t in e)
                      "html" === t
                        ? (s.innerHTML = e[t])
                        : s.setAttribute(t, e[t]);
                  return s;
                },
                a = (t) =>
                  ["#text", "#comment"].includes(t.nodeName)
                    ? t.data
                    : t.childNodes
                    ? t.childNodes.map((t) => a(t)).join("")
                    : "",
                o = function (t) {
                  return t
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;");
                },
                r = function (t, e) {
                  let s = 0,
                    i = 0;
                  for (; s < t + 1; ) e[i].hidden || (s += 1), (i += 1);
                  return i - 1;
                },
                l = function (t, e) {
                  let s = t,
                    i = 0;
                  for (; i < t; ) e[t].hidden && (s -= 1), i++;
                  return s;
                };
              function d(t, e, s) {
                var i;
                return (
                  "#text" === t.nodeName
                    ? (i = s.document.createTextNode(t.data))
                    : "#comment" === t.nodeName
                    ? (i = s.document.createComment(t.data))
                    : (e
                        ? (i = s.document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            t.nodeName
                          ))
                        : "svg" === t.nodeName.toLowerCase()
                        ? ((i = s.document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "svg"
                          )),
                          (e = !0))
                        : (i = s.document.createElement(t.nodeName)),
                      t.attributes &&
                        Object.entries(t.attributes).forEach(function (t) {
                          var e = t[0],
                            s = t[1];
                          return i.setAttribute(e, s);
                        }),
                      t.childNodes &&
                        t.childNodes.forEach(function (t) {
                          return i.appendChild(d(t, e, s));
                        }),
                      s.valueDiffing &&
                        (t.value &&
                          (i instanceof HTMLButtonElement ||
                            i instanceof HTMLDataElement ||
                            i instanceof HTMLInputElement ||
                            i instanceof HTMLLIElement ||
                            i instanceof HTMLMeterElement ||
                            i instanceof HTMLOptionElement ||
                            i instanceof HTMLProgressElement ||
                            i instanceof HTMLParamElement) &&
                          (i.value = t.value),
                        t.checked &&
                          i instanceof HTMLInputElement &&
                          (i.checked = t.checked),
                        t.selected &&
                          i instanceof HTMLOptionElement &&
                          (i.selected = t.selected))),
                  i
                );
              }
              var c = function (t, e) {
                for (e = e.slice(); e.length > 0; ) {
                  var s = e.splice(0, 1)[0];
                  t = t.childNodes[s];
                }
                return t;
              };
              function h(t, e, s) {
                var i,
                  n,
                  a,
                  o = e[s._const.action],
                  r = e[s._const.route];
                [s._const.addElement, s._const.addTextElement].includes(o) ||
                  (i = c(t, r));
                var l = { diff: e, node: i };
                if (s.preDiffApply(l)) return !0;
                switch (o) {
                  case s._const.addAttribute:
                    if (!(i && i instanceof Element)) return !1;
                    i.setAttribute(e[s._const.name], e[s._const.value]);
                    break;
                  case s._const.modifyAttribute:
                    if (!(i && i instanceof Element)) return !1;
                    i.setAttribute(e[s._const.name], e[s._const.newValue]),
                      i instanceof HTMLInputElement &&
                        "value" === e[s._const.name] &&
                        (i.value = e[s._const.newValue]);
                    break;
                  case s._const.removeAttribute:
                    if (!(i && i instanceof Element)) return !1;
                    i.removeAttribute(e[s._const.name]);
                    break;
                  case s._const.modifyTextElement:
                    if (!(i && i instanceof Text)) return !1;
                    s.textDiff(
                      i,
                      i.data,
                      e[s._const.oldValue],
                      e[s._const.newValue]
                    );
                    break;
                  case s._const.modifyValue:
                    if (!i || void 0 === i.value) return !1;
                    i.value = e[s._const.newValue];
                    break;
                  case s._const.modifyComment:
                    if (!(i && i instanceof Comment)) return !1;
                    s.textDiff(
                      i,
                      i.data,
                      e[s._const.oldValue],
                      e[s._const.newValue]
                    );
                    break;
                  case s._const.modifyChecked:
                    if (!i || void 0 === i.checked) return !1;
                    i.checked = e[s._const.newValue];
                    break;
                  case s._const.modifySelected:
                    if (!i || void 0 === i.selected) return !1;
                    i.selected = e[s._const.newValue];
                    break;
                  case s._const.replaceElement:
                    i.parentNode.replaceChild(
                      d(
                        e[s._const.newValue],
                        "svg" === e[s._const.newValue].nodeName.toLowerCase(),
                        s
                      ),
                      i
                    );
                    break;
                  case s._const.relocateGroup:
                    Array.apply(void 0, new Array(e[s._const.groupLength]))
                      .map(function () {
                        return i.removeChild(i.childNodes[e[s._const.from]]);
                      })
                      .forEach(function (t, n) {
                        0 === n && (a = i.childNodes[e[s._const.to]]),
                          i.insertBefore(t, a || null);
                      });
                    break;
                  case s._const.removeElement:
                    i.parentNode.removeChild(i);
                    break;
                  case s._const.addElement:
                    var h = (u = r.slice()).splice(u.length - 1, 1)[0];
                    if (!((i = c(t, u)) instanceof Element)) return !1;
                    i.insertBefore(
                      d(
                        e[s._const.element],
                        "http://www.w3.org/2000/svg" === i.namespaceURI,
                        s
                      ),
                      i.childNodes[h] || null
                    );
                    break;
                  case s._const.removeTextElement:
                    if (!i || 3 !== i.nodeType) return !1;
                    i.parentNode.removeChild(i);
                    break;
                  case s._const.addTextElement:
                    var u;
                    if (
                      ((h = (u = r.slice()).splice(u.length - 1, 1)[0]),
                      (n = s.document.createTextNode(e[s._const.value])),
                      !(i = c(t, u)).childNodes)
                    )
                      return !1;
                    i.insertBefore(n, i.childNodes[h] || null);
                    break;
                  default:
                    console.log("unknown action");
                }
                return (
                  s.postDiffApply({ diff: l.diff, node: l.node, newNode: n }),
                  !0
                );
              }
              function u(t, e, s) {
                var i = t[e];
                (t[e] = t[s]), (t[s] = i);
              }
              var p = function (t) {
                  var e = [];
                  return (
                    e.push(t.nodeName),
                    "#text" !== t.nodeName &&
                      "#comment" !== t.nodeName &&
                      t.attributes &&
                      (t.attributes.class &&
                        e.push(
                          ""
                            .concat(t.nodeName, ".")
                            .concat(t.attributes.class.replace(/ /g, "."))
                        ),
                      t.attributes.id &&
                        e.push(
                          "".concat(t.nodeName, "#").concat(t.attributes.id)
                        )),
                    e
                  );
                },
                f = function (t) {
                  var e = {},
                    s = {};
                  return (
                    t.forEach(function (t) {
                      p(t).forEach(function (t) {
                        var i = t in e;
                        i || t in s
                          ? i && (delete e[t], (s[t] = !0))
                          : (e[t] = !0);
                      });
                    }),
                    e
                  );
                },
                m = function (t, e) {
                  var s = f(t),
                    i = f(e),
                    n = {};
                  return (
                    Object.keys(s).forEach(function (t) {
                      i[t] && (n[t] = !0);
                    }),
                    n
                  );
                },
                g = function (t) {
                  return (
                    delete t.outerDone,
                    delete t.innerDone,
                    delete t.valueDone,
                    !t.childNodes || t.childNodes.every(g)
                  );
                },
                b = function (t) {
                  if (Object.prototype.hasOwnProperty.call(t, "data"))
                    return {
                      nodeName: "#text" === t.nodeName ? "#text" : "#comment",
                      data: t.data,
                    };
                  var e = { nodeName: t.nodeName };
                  return (
                    Object.prototype.hasOwnProperty.call(t, "attributes") &&
                      (e.attributes = t.attributes),
                    Object.prototype.hasOwnProperty.call(t, "checked") &&
                      (e.checked = t.checked),
                    Object.prototype.hasOwnProperty.call(t, "value") &&
                      (e.value = t.value),
                    Object.prototype.hasOwnProperty.call(t, "selected") &&
                      (e.selected = t.selected),
                    Object.prototype.hasOwnProperty.call(t, "childNodes") &&
                      (e.childNodes = t.childNodes.map(function (t) {
                        return b(t);
                      })),
                    e
                  );
                },
                v = function (t, e) {
                  if (
                    !["nodeName", "value", "checked", "selected", "data"].every(
                      function (s) {
                        return t[s] === e[s];
                      }
                    )
                  )
                    return !1;
                  if (Object.prototype.hasOwnProperty.call(t, "data"))
                    return !0;
                  if (Boolean(t.attributes) !== Boolean(e.attributes))
                    return !1;
                  if (Boolean(t.childNodes) !== Boolean(e.childNodes))
                    return !1;
                  if (t.attributes) {
                    var s = Object.keys(t.attributes),
                      i = Object.keys(e.attributes);
                    if (s.length !== i.length) return !1;
                    if (
                      !s.every(function (s) {
                        return t.attributes[s] === e.attributes[s];
                      })
                    )
                      return !1;
                  }
                  if (t.childNodes) {
                    if (t.childNodes.length !== e.childNodes.length) return !1;
                    if (
                      !t.childNodes.every(function (t, s) {
                        return v(t, e.childNodes[s]);
                      })
                    )
                      return !1;
                  }
                  return !0;
                },
                w = function (t, e, s, i, n) {
                  if ((void 0 === n && (n = !1), !t || !e)) return !1;
                  if (t.nodeName !== e.nodeName) return !1;
                  if (["#text", "#comment"].includes(t.nodeName))
                    return !!n || t.data === e.data;
                  if (t.nodeName in s) return !0;
                  if (t.attributes && e.attributes) {
                    if (t.attributes.id) {
                      if (t.attributes.id !== e.attributes.id) return !1;
                      if (
                        "".concat(t.nodeName, "#").concat(t.attributes.id) in s
                      )
                        return !0;
                    }
                    if (
                      t.attributes.class &&
                      t.attributes.class === e.attributes.class &&
                      ""
                        .concat(t.nodeName, ".")
                        .concat(t.attributes.class.replace(/ /g, ".")) in s
                    )
                      return !0;
                  }
                  if (i) return !0;
                  var a = t.childNodes ? t.childNodes.slice().reverse() : [],
                    o = e.childNodes ? e.childNodes.slice().reverse() : [];
                  if (a.length !== o.length) return !1;
                  if (n)
                    return a.every(function (t, e) {
                      return t.nodeName === o[e].nodeName;
                    });
                  var r = m(a, o);
                  return a.every(function (t, e) {
                    return w(t, o[e], r, !0, !0);
                  });
                },
                _ = function (t, e) {
                  return Array.apply(void 0, new Array(t)).map(function () {
                    return e;
                  });
                },
                y = function (t, e) {
                  for (
                    var s = t.childNodes ? t.childNodes : [],
                      i = e.childNodes ? e.childNodes : [],
                      n = _(s.length, !1),
                      a = _(i.length, !1),
                      o = [],
                      r = function () {
                        return arguments[1];
                      },
                      l = !1,
                      d = function () {
                        var t = (function (t, e, s, i) {
                          var n = 0,
                            a = [],
                            o = t.length,
                            r = e.length,
                            l = Array.apply(void 0, new Array(o + 1)).map(
                              function () {
                                return [];
                              }
                            ),
                            d = m(t, e),
                            c = o === r;
                          c &&
                            t.some(function (t, s) {
                              var i = p(t),
                                n = p(e[s]);
                              return i.length !== n.length
                                ? ((c = !1), !0)
                                : (i.some(function (t, e) {
                                    if (t !== n[e]) return (c = !1), !0;
                                  }),
                                  !c || void 0);
                            });
                          for (var h = 0; h < o; h++)
                            for (var u = t[h], f = 0; f < r; f++) {
                              var g = e[f];
                              s[h] || i[f] || !w(u, g, d, c)
                                ? (l[h + 1][f + 1] = 0)
                                : ((l[h + 1][f + 1] = l[h][f]
                                    ? l[h][f] + 1
                                    : 1),
                                  l[h + 1][f + 1] >= n &&
                                    ((n = l[h + 1][f + 1]),
                                    (a = [h + 1, f + 1])));
                            }
                          return (
                            0 !== n && {
                              oldValue: a[0] - n,
                              newValue: a[1] - n,
                              length: n,
                            }
                          );
                        })(s, i, n, a);
                        t
                          ? (o.push(t),
                            Array.apply(void 0, new Array(t.length))
                              .map(r)
                              .forEach(function (e) {
                                return (function (t, e, s, i) {
                                  (t[s.oldValue + i] = !0),
                                    (e[s.newValue + i] = !0);
                                })(n, a, t, e);
                              }))
                          : (l = !0);
                      };
                    !l;

                  )
                    d();
                  return (t.subsets = o), (t.subsetsAge = 100), o;
                },
                x = (function () {
                  function t() {
                    this.list = [];
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e;
                      (e = this.list).push.apply(e, t);
                    }),
                    (t.prototype.forEach = function (t) {
                      this.list.forEach(function (e) {
                        return t(e);
                      });
                    }),
                    t
                  );
                })(),
                N = (function () {
                  function t(t) {
                    void 0 === t && (t = {});
                    var e = this;
                    Object.entries(t).forEach(function (t) {
                      var s = t[0],
                        i = t[1];
                      return (e[s] = i);
                    });
                  }
                  return (
                    (t.prototype.toString = function () {
                      return JSON.stringify(this);
                    }),
                    (t.prototype.setValue = function (t, e) {
                      return (this[t] = e), this;
                    }),
                    t
                  );
                })();
              function D(t, e) {
                var s,
                  i,
                  n = t;
                for (e = e.slice(); e.length > 0; )
                  (i = e.splice(0, 1)[0]),
                    (s = n),
                    (n = n.childNodes ? n.childNodes[i] : void 0);
                return { node: n, parentNode: s, nodeIndex: i };
              }
              function M(t, e, s) {
                return (
                  e.forEach(function (e) {
                    !(function (t, e, s) {
                      var i, n, a, o;
                      if (
                        ![
                          s._const.addElement,
                          s._const.addTextElement,
                        ].includes(e[s._const.action])
                      ) {
                        var r = D(t, e[s._const.route]);
                        (n = r.node), (a = r.parentNode), (o = r.nodeIndex);
                      }
                      var l,
                        d,
                        c = [],
                        h = { diff: e, node: n };
                      if (s.preVirtualDiffApply(h)) return !0;
                      switch (e[s._const.action]) {
                        case s._const.addAttribute:
                          n.attributes || (n.attributes = {}),
                            (n.attributes[e[s._const.name]] =
                              e[s._const.value]),
                            "checked" === e[s._const.name]
                              ? (n.checked = !0)
                              : "selected" === e[s._const.name]
                              ? (n.selected = !0)
                              : "INPUT" === n.nodeName &&
                                "value" === e[s._const.name] &&
                                (n.value = e[s._const.value]);
                          break;
                        case s._const.modifyAttribute:
                          n.attributes[e[s._const.name]] = e[s._const.newValue];
                          break;
                        case s._const.removeAttribute:
                          delete n.attributes[e[s._const.name]],
                            0 === Object.keys(n.attributes).length &&
                              delete n.attributes,
                            "checked" === e[s._const.name]
                              ? (n.checked = !1)
                              : "selected" === e[s._const.name]
                              ? delete n.selected
                              : "INPUT" === n.nodeName &&
                                "value" === e[s._const.name] &&
                                delete n.value;
                          break;
                        case s._const.modifyTextElement:
                          n.data = e[s._const.newValue];
                          break;
                        case s._const.modifyValue:
                          n.value = e[s._const.newValue];
                          break;
                        case s._const.modifyComment:
                          n.data = e[s._const.newValue];
                          break;
                        case s._const.modifyChecked:
                          n.checked = e[s._const.newValue];
                          break;
                        case s._const.modifySelected:
                          n.selected = e[s._const.newValue];
                          break;
                        case s._const.replaceElement:
                          (l = e[s._const.newValue]), (a.childNodes[o] = l);
                          break;
                        case s._const.relocateGroup:
                          n.childNodes
                            .splice(e[s._const.from], e[s._const.groupLength])
                            .reverse()
                            .forEach(function (t) {
                              return n.childNodes.splice(e[s._const.to], 0, t);
                            }),
                            n.subsets &&
                              n.subsets.forEach(function (t) {
                                if (
                                  e[s._const.from] < e[s._const.to] &&
                                  t.oldValue <= e[s._const.to] &&
                                  t.oldValue > e[s._const.from]
                                )
                                  (t.oldValue -= e[s._const.groupLength]),
                                    (i =
                                      t.oldValue + t.length - e[s._const.to]) >
                                      0 &&
                                      (c.push({
                                        oldValue:
                                          e[s._const.to] +
                                          e[s._const.groupLength],
                                        newValue: t.newValue + t.length - i,
                                        length: i,
                                      }),
                                      (t.length -= i));
                                else if (
                                  e[s._const.from] > e[s._const.to] &&
                                  t.oldValue > e[s._const.to] &&
                                  t.oldValue < e[s._const.from]
                                ) {
                                  var i;
                                  (t.oldValue += e[s._const.groupLength]),
                                    (i =
                                      t.oldValue + t.length - e[s._const.to]) >
                                      0 &&
                                      (c.push({
                                        oldValue:
                                          e[s._const.to] +
                                          e[s._const.groupLength],
                                        newValue: t.newValue + t.length - i,
                                        length: i,
                                      }),
                                      (t.length -= i));
                                } else
                                  t.oldValue === e[s._const.from] &&
                                    (t.oldValue = e[s._const.to]);
                              });
                          break;
                        case s._const.removeElement:
                          a.childNodes.splice(o, 1),
                            a.subsets &&
                              a.subsets.forEach(function (t) {
                                t.oldValue > o
                                  ? (t.oldValue -= 1)
                                  : t.oldValue === o
                                  ? (t.delete = !0)
                                  : t.oldValue < o &&
                                    t.oldValue + t.length > o &&
                                    (t.oldValue + t.length - 1 === o
                                      ? t.length--
                                      : (c.push({
                                          newValue: t.newValue + o - t.oldValue,
                                          oldValue: o,
                                          length: t.length - o + t.oldValue - 1,
                                        }),
                                        (t.length = o - t.oldValue)));
                              }),
                            (n = a);
                          break;
                        case s._const.addElement:
                          var u = (d = e[s._const.route].slice()).splice(
                            d.length - 1,
                            1
                          )[0];
                          (n =
                            null === (i = D(t, d)) || void 0 === i
                              ? void 0
                              : i.node),
                            (l = e[s._const.element]),
                            n.childNodes || (n.childNodes = []),
                            u >= n.childNodes.length
                              ? n.childNodes.push(l)
                              : n.childNodes.splice(u, 0, l),
                            n.subsets &&
                              n.subsets.forEach(function (t) {
                                if (t.oldValue >= u) t.oldValue += 1;
                                else if (
                                  t.oldValue < u &&
                                  t.oldValue + t.length > u
                                ) {
                                  var e = t.oldValue + t.length - u;
                                  c.push({
                                    newValue: t.newValue + t.length - e,
                                    oldValue: u + 1,
                                    length: e,
                                  }),
                                    (t.length -= e);
                                }
                              });
                          break;
                        case s._const.removeTextElement:
                          a.childNodes.splice(o, 1),
                            "TEXTAREA" === a.nodeName && delete a.value,
                            a.subsets &&
                              a.subsets.forEach(function (t) {
                                t.oldValue > o
                                  ? (t.oldValue -= 1)
                                  : t.oldValue === o
                                  ? (t.delete = !0)
                                  : t.oldValue < o &&
                                    t.oldValue + t.length > o &&
                                    (t.oldValue + t.length - 1 === o
                                      ? t.length--
                                      : (c.push({
                                          newValue: t.newValue + o - t.oldValue,
                                          oldValue: o,
                                          length: t.length - o + t.oldValue - 1,
                                        }),
                                        (t.length = o - t.oldValue)));
                              }),
                            (n = a);
                          break;
                        case s._const.addTextElement:
                          var p = (d = e[s._const.route].slice()).splice(
                            d.length - 1,
                            1
                          )[0];
                          ((l = {}).nodeName = "#text"),
                            (l.data = e[s._const.value]),
                            (n = D(t, d).node).childNodes ||
                              (n.childNodes = []),
                            p >= n.childNodes.length
                              ? n.childNodes.push(l)
                              : n.childNodes.splice(p, 0, l),
                            "TEXTAREA" === n.nodeName &&
                              (n.value = e[s._const.newValue]),
                            n.subsets &&
                              n.subsets.forEach(function (t) {
                                if (
                                  (t.oldValue >= p && (t.oldValue += 1),
                                  t.oldValue < p && t.oldValue + t.length > p)
                                ) {
                                  var e = t.oldValue + t.length - p;
                                  c.push({
                                    newValue: t.newValue + t.length - e,
                                    oldValue: p + 1,
                                    length: e,
                                  }),
                                    (t.length -= e);
                                }
                              });
                          break;
                        default:
                          console.log("unknown action");
                      }
                      n.subsets &&
                        ((n.subsets = n.subsets.filter(function (t) {
                          return !t.delete && t.oldValue !== t.newValue;
                        })),
                        c.length && (n.subsets = n.subsets.concat(c))),
                        s.postVirtualDiffApply({
                          node: h.node,
                          diff: h.diff,
                          newNode: l,
                        });
                    })(t, e, s);
                  }),
                  !0
                );
              }
              function E(t, e) {
                void 0 === e && (e = {});
                var s = { nodeName: t.nodeName };
                return (
                  t instanceof Text || t instanceof Comment
                    ? (s.data = t.data)
                    : (t.attributes &&
                        t.attributes.length > 0 &&
                        ((s.attributes = {}),
                        Array.prototype.slice
                          .call(t.attributes)
                          .forEach(function (t) {
                            return (s.attributes[t.name] = t.value);
                          })),
                      t instanceof HTMLTextAreaElement
                        ? (s.value = t.value)
                        : t.childNodes &&
                          t.childNodes.length > 0 &&
                          ((s.childNodes = []),
                          Array.prototype.slice
                            .call(t.childNodes)
                            .forEach(function (t) {
                              return s.childNodes.push(E(t, e));
                            })),
                      e.valueDiffing &&
                        (t instanceof HTMLInputElement &&
                        ["radio", "checkbox"].includes(t.type.toLowerCase()) &&
                        void 0 !== t.checked
                          ? (s.checked = t.checked)
                          : (t instanceof HTMLButtonElement ||
                              t instanceof HTMLDataElement ||
                              t instanceof HTMLInputElement ||
                              t instanceof HTMLLIElement ||
                              t instanceof HTMLMeterElement ||
                              t instanceof HTMLOptionElement ||
                              t instanceof HTMLProgressElement ||
                              t instanceof HTMLParamElement) &&
                            (s.value = t.value),
                        t instanceof HTMLOptionElement &&
                          (s.selected = t.selected))),
                  s
                );
              }
              var O =
                  /<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g,
                V = Object.create ? Object.create(null) : {},
                $ = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
              function C(t) {
                return t
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")
                  .replace(/&amp;/g, "&");
              }
              var L = {
                  area: !0,
                  base: !0,
                  br: !0,
                  col: !0,
                  embed: !0,
                  hr: !0,
                  img: !0,
                  input: !0,
                  keygen: !0,
                  link: !0,
                  menuItem: !0,
                  meta: !0,
                  param: !0,
                  source: !0,
                  track: !0,
                  wbr: !0,
                },
                S = function (t) {
                  var e = { nodeName: "", attributes: {} },
                    s = !1,
                    i = t.match(/<\/?([^\s]+?)[/\s>]/);
                  if (
                    i &&
                    ((e.nodeName = i[1].toUpperCase()),
                    (L[i[1]] || "/" === t.charAt(t.length - 2)) && (s = !0),
                    e.nodeName.startsWith("!--"))
                  ) {
                    var n = t.indexOf("--\x3e");
                    return {
                      type: "comment",
                      node: {
                        nodeName: "#comment",
                        data: -1 !== n ? t.slice(4, n) : "",
                      },
                      voidElement: s,
                    };
                  }
                  for (var a = new RegExp($), o = null, r = !1; !r; )
                    if (null === (o = a.exec(t))) r = !0;
                    else if (o[0].trim())
                      if (o[1]) {
                        var l = o[1].trim(),
                          d = [l, ""];
                        l.indexOf("=") > -1 && (d = l.split("=")),
                          (e.attributes[d[0]] = d[1]),
                          a.lastIndex--;
                      } else
                        o[2] &&
                          (e.attributes[o[2]] = o[3]
                            .trim()
                            .substring(1, o[3].length - 1));
                  return { type: "tag", node: e, voidElement: s };
                },
                k = function (t, e) {
                  void 0 === e && (e = { components: V });
                  var s,
                    i = [],
                    n = -1,
                    a = [],
                    o = !1;
                  if (0 !== t.indexOf("<")) {
                    var r = t.indexOf("<");
                    i.push({
                      nodeName: "#text",
                      data: -1 === r ? t : t.substring(0, r),
                    });
                  }
                  return (
                    t.replace(O, function (r, l) {
                      if (o) {
                        if (r !== "</".concat(s.node.nodeName, ">")) return "";
                        o = !1;
                      }
                      var d = "/" !== r.charAt(1),
                        c = r.startsWith("\x3c!--"),
                        h = l + r.length,
                        u = t.charAt(h);
                      if (c) {
                        var p = S(r).node;
                        if (n < 0) return i.push(p), "";
                        var f = a[n];
                        return (
                          f &&
                            p.nodeName &&
                            (f.node.childNodes || (f.node.childNodes = []),
                            f.node.childNodes.push(p)),
                          ""
                        );
                      }
                      if (d) {
                        (s = S(r)),
                          n++,
                          "tag" === s.type &&
                            e.components[s.node.nodeName] &&
                            ((s.type = "component"), (o = !0)),
                          s.voidElement ||
                            o ||
                            !u ||
                            "<" === u ||
                            (s.node.childNodes || (s.node.childNodes = []),
                            s.node.childNodes.push({
                              nodeName: "#text",
                              data: C(t.slice(h, t.indexOf("<", h))),
                            })),
                          0 === n && s.node.nodeName && i.push(s.node);
                        var m = a[n - 1];
                        m &&
                          s.node.nodeName &&
                          (m.node.childNodes || (m.node.childNodes = []),
                          m.node.childNodes.push(s.node)),
                          (a[n] = s);
                      }
                      if (
                        (!d || s.voidElement) &&
                        (n > -1 &&
                          (s.voidElement ||
                            s.node.nodeName === r.slice(2, -1).toUpperCase()) &&
                          --n > -1 &&
                          (s = a[n]),
                        !o && "<" !== u && u)
                      ) {
                        var g = -1 === n ? i : a[n].node.childNodes || [],
                          b = t.indexOf("<", h),
                          v = C(t.slice(h, -1 === b ? void 0 : b));
                        g.push({ nodeName: "#text", data: v });
                      }
                      return "";
                    }),
                    i[0]
                  );
                },
                T = (function () {
                  function t(t, e, s) {
                    (this.options = s),
                      (this.t1 =
                        "undefined" != typeof Element && t instanceof Element
                          ? E(t, this.options)
                          : "string" == typeof t
                          ? k(t, this.options)
                          : JSON.parse(JSON.stringify(t))),
                      (this.t2 =
                        "undefined" != typeof Element && e instanceof Element
                          ? E(e, this.options)
                          : "string" == typeof e
                          ? k(e, this.options)
                          : JSON.parse(JSON.stringify(e))),
                      (this.diffcount = 0),
                      (this.foundAll = !1),
                      this.debug &&
                        ((this.t1Orig =
                          "undefined" != typeof Element && t instanceof Element
                            ? E(t, this.options)
                            : "string" == typeof t
                            ? k(t, this.options)
                            : JSON.parse(JSON.stringify(t))),
                        (this.t2Orig =
                          "undefined" != typeof Element && e instanceof Element
                            ? E(e, this.options)
                            : "string" == typeof e
                            ? k(e, this.options)
                            : JSON.parse(JSON.stringify(e)))),
                      (this.tracker = new x());
                  }
                  return (
                    (t.prototype.init = function () {
                      return this.findDiffs(this.t1, this.t2);
                    }),
                    (t.prototype.findDiffs = function (t, e) {
                      var s;
                      do {
                        if (
                          this.options.debug &&
                          ((this.diffcount += 1),
                          this.diffcount > this.options.diffcap)
                        )
                          throw new Error(
                            "surpassed diffcap:"
                              .concat(JSON.stringify(this.t1Orig), " -> ")
                              .concat(JSON.stringify(this.t2Orig))
                          );
                        0 === (s = this.findNextDiff(t, e, [])).length &&
                          (v(t, e) ||
                            (this.foundAll
                              ? console.error("Could not find remaining diffs!")
                              : ((this.foundAll = !0),
                                g(t),
                                (s = this.findNextDiff(t, e, []))))),
                          s.length > 0 &&
                            ((this.foundAll = !1),
                            this.tracker.add(s),
                            M(t, s, this.options));
                      } while (s.length > 0);
                      return this.tracker.list;
                    }),
                    (t.prototype.findNextDiff = function (t, e, s) {
                      var i, n;
                      if (
                        this.options.maxDepth &&
                        s.length > this.options.maxDepth
                      )
                        return [];
                      if (!t.outerDone) {
                        if (
                          ((i = this.findOuterDiff(t, e, s)),
                          this.options.filterOuterDiff &&
                            (n = this.options.filterOuterDiff(t, e, i)) &&
                            (i = n),
                          i.length > 0)
                        )
                          return (t.outerDone = !0), i;
                        t.outerDone = !0;
                      }
                      if (Object.prototype.hasOwnProperty.call(t, "data"))
                        return [];
                      if (!t.innerDone) {
                        if ((i = this.findInnerDiff(t, e, s)).length > 0)
                          return i;
                        t.innerDone = !0;
                      }
                      if (this.options.valueDiffing && !t.valueDone) {
                        if ((i = this.findValueDiff(t, e, s)).length > 0)
                          return (t.valueDone = !0), i;
                        t.valueDone = !0;
                      }
                      return [];
                    }),
                    (t.prototype.findOuterDiff = function (t, e, s) {
                      var i,
                        n,
                        a,
                        o,
                        r,
                        l,
                        d = [];
                      if (t.nodeName !== e.nodeName) {
                        if (!s.length)
                          throw new Error(
                            "Top level nodes have to be of the same kind."
                          );
                        return [
                          new N()
                            .setValue(
                              this.options._const.action,
                              this.options._const.replaceElement
                            )
                            .setValue(this.options._const.oldValue, b(t))
                            .setValue(this.options._const.newValue, b(e))
                            .setValue(this.options._const.route, s),
                        ];
                      }
                      if (
                        s.length &&
                        this.options.diffcap <
                          Math.abs(
                            (t.childNodes || []).length -
                              (e.childNodes || []).length
                          )
                      )
                        return [
                          new N()
                            .setValue(
                              this.options._const.action,
                              this.options._const.replaceElement
                            )
                            .setValue(this.options._const.oldValue, b(t))
                            .setValue(this.options._const.newValue, b(e))
                            .setValue(this.options._const.route, s),
                        ];
                      if (
                        Object.prototype.hasOwnProperty.call(t, "data") &&
                        t.data !== e.data
                      )
                        return "#text" === t.nodeName
                          ? [
                              new N()
                                .setValue(
                                  this.options._const.action,
                                  this.options._const.modifyTextElement
                                )
                                .setValue(this.options._const.route, s)
                                .setValue(this.options._const.oldValue, t.data)
                                .setValue(this.options._const.newValue, e.data),
                            ]
                          : [
                              new N()
                                .setValue(
                                  this.options._const.action,
                                  this.options._const.modifyComment
                                )
                                .setValue(this.options._const.route, s)
                                .setValue(this.options._const.oldValue, t.data)
                                .setValue(this.options._const.newValue, e.data),
                            ];
                      for (
                        n = t.attributes
                          ? Object.keys(t.attributes).sort()
                          : [],
                          a = e.attributes
                            ? Object.keys(e.attributes).sort()
                            : [],
                          o = n.length,
                          l = 0;
                        l < o;
                        l++
                      )
                        (i = n[l]),
                          -1 === (r = a.indexOf(i))
                            ? d.push(
                                new N()
                                  .setValue(
                                    this.options._const.action,
                                    this.options._const.removeAttribute
                                  )
                                  .setValue(this.options._const.route, s)
                                  .setValue(this.options._const.name, i)
                                  .setValue(
                                    this.options._const.value,
                                    t.attributes[i]
                                  )
                              )
                            : (a.splice(r, 1),
                              t.attributes[i] !== e.attributes[i] &&
                                d.push(
                                  new N()
                                    .setValue(
                                      this.options._const.action,
                                      this.options._const.modifyAttribute
                                    )
                                    .setValue(this.options._const.route, s)
                                    .setValue(this.options._const.name, i)
                                    .setValue(
                                      this.options._const.oldValue,
                                      t.attributes[i]
                                    )
                                    .setValue(
                                      this.options._const.newValue,
                                      e.attributes[i]
                                    )
                                ));
                      for (o = a.length, l = 0; l < o; l++)
                        (i = a[l]),
                          d.push(
                            new N()
                              .setValue(
                                this.options._const.action,
                                this.options._const.addAttribute
                              )
                              .setValue(this.options._const.route, s)
                              .setValue(this.options._const.name, i)
                              .setValue(
                                this.options._const.value,
                                e.attributes[i]
                              )
                          );
                      return d;
                    }),
                    (t.prototype.findInnerDiff = function (t, e, s) {
                      var i = t.childNodes ? t.childNodes.slice() : [],
                        n = e.childNodes ? e.childNodes.slice() : [],
                        a = Math.max(i.length, n.length),
                        o = Math.abs(i.length - n.length),
                        r = [],
                        l = 0;
                      if (
                        !this.options.maxChildCount ||
                        a < this.options.maxChildCount
                      ) {
                        var d = Boolean(t.subsets && t.subsetsAge--),
                          c = d
                            ? t.subsets
                            : t.childNodes && e.childNodes
                            ? y(t, e)
                            : [];
                        if (
                          c.length > 0 &&
                          (r = this.attemptGroupRelocation(t, e, c, s, d))
                            .length > 0
                        )
                          return r;
                      }
                      for (var h = 0; h < a; h += 1) {
                        var u = i[h],
                          p = n[h];
                        if (
                          (o &&
                            (u && !p
                              ? "#text" === u.nodeName
                                ? (r.push(
                                    new N()
                                      .setValue(
                                        this.options._const.action,
                                        this.options._const.removeTextElement
                                      )
                                      .setValue(
                                        this.options._const.route,
                                        s.concat(l)
                                      )
                                      .setValue(
                                        this.options._const.value,
                                        u.data
                                      )
                                  ),
                                  (l -= 1))
                                : (r.push(
                                    new N()
                                      .setValue(
                                        this.options._const.action,
                                        this.options._const.removeElement
                                      )
                                      .setValue(
                                        this.options._const.route,
                                        s.concat(l)
                                      )
                                      .setValue(
                                        this.options._const.element,
                                        b(u)
                                      )
                                  ),
                                  (l -= 1))
                              : p &&
                                !u &&
                                ("#text" === p.nodeName
                                  ? r.push(
                                      new N()
                                        .setValue(
                                          this.options._const.action,
                                          this.options._const.addTextElement
                                        )
                                        .setValue(
                                          this.options._const.route,
                                          s.concat(l)
                                        )
                                        .setValue(
                                          this.options._const.value,
                                          p.data
                                        )
                                    )
                                  : r.push(
                                      new N()
                                        .setValue(
                                          this.options._const.action,
                                          this.options._const.addElement
                                        )
                                        .setValue(
                                          this.options._const.route,
                                          s.concat(l)
                                        )
                                        .setValue(
                                          this.options._const.element,
                                          b(p)
                                        )
                                    ))),
                          u && p)
                        )
                          if (
                            !this.options.maxChildCount ||
                            a < this.options.maxChildCount
                          )
                            r = r.concat(this.findNextDiff(u, p, s.concat(l)));
                          else if (!v(u, p))
                            if (i.length > n.length)
                              "#text" === u.nodeName
                                ? r.push(
                                    new N()
                                      .setValue(
                                        this.options._const.action,
                                        this.options._const.removeTextElement
                                      )
                                      .setValue(
                                        this.options._const.route,
                                        s.concat(l)
                                      )
                                      .setValue(
                                        this.options._const.value,
                                        u.data
                                      )
                                  )
                                : r.push(
                                    new N()
                                      .setValue(
                                        this.options._const.action,
                                        this.options._const.removeElement
                                      )
                                      .setValue(
                                        this.options._const.element,
                                        b(u)
                                      )
                                      .setValue(
                                        this.options._const.route,
                                        s.concat(l)
                                      )
                                  ),
                                i.splice(h, 1),
                                (h -= 1),
                                (l -= 1),
                                (o -= 1);
                            else if (i.length < n.length) {
                              var f = b(p);
                              (r = r.concat([
                                new N()
                                  .setValue(
                                    this.options._const.action,
                                    this.options._const.addElement
                                  )
                                  .setValue(this.options._const.element, f)
                                  .setValue(
                                    this.options._const.route,
                                    s.concat(l)
                                  ),
                              ])),
                                i.splice(h, 0, f),
                                (o -= 1);
                            } else
                              r = r.concat([
                                new N()
                                  .setValue(
                                    this.options._const.action,
                                    this.options._const.replaceElement
                                  )
                                  .setValue(this.options._const.oldValue, b(u))
                                  .setValue(this.options._const.newValue, b(p))
                                  .setValue(
                                    this.options._const.route,
                                    s.concat(l)
                                  ),
                              ]);
                        l += 1;
                      }
                      return (t.innerDone = !0), r;
                    }),
                    (t.prototype.attemptGroupRelocation = function (
                      t,
                      e,
                      s,
                      i,
                      n
                    ) {
                      for (
                        var a,
                          o,
                          r,
                          l,
                          d,
                          c,
                          h = (function (t, e, s) {
                            var i = t.childNodes
                                ? _(t.childNodes.length, !0)
                                : [],
                              n = e.childNodes
                                ? _(e.childNodes.length, !0)
                                : [],
                              a = 0;
                            return (
                              s.forEach(function (t) {
                                for (
                                  var e = t.oldValue + t.length,
                                    s = t.newValue + t.length,
                                    o = t.oldValue;
                                  o < e;
                                  o += 1
                                )
                                  i[o] = a;
                                for (o = t.newValue; o < s; o += 1) n[o] = a;
                                a += 1;
                              }),
                              { gaps1: i, gaps2: n }
                            );
                          })(t, e, s),
                          u = h.gaps1,
                          p = h.gaps2,
                          f = Math.min(u.length, p.length),
                          m = [],
                          g = 0,
                          v = 0;
                        g < f;
                        v += 1, g += 1
                      )
                        if (!n || (!0 !== u[g] && !0 !== p[g]))
                          if (!0 === u[g])
                            if ("#text" === (l = t.childNodes[v]).nodeName)
                              if ("#text" === e.childNodes[g].nodeName) {
                                if (l.data !== e.childNodes[g].data) {
                                  for (
                                    c = v;
                                    t.childNodes.length > c + 1 &&
                                    "#text" === t.childNodes[c + 1].nodeName;

                                  )
                                    if (
                                      ((c += 1),
                                      e.childNodes[g].data ===
                                        t.childNodes[c].data)
                                    ) {
                                      d = !0;
                                      break;
                                    }
                                  if (!d)
                                    return (
                                      m.push(
                                        new N()
                                          .setValue(
                                            this.options._const.action,
                                            this.options._const
                                              .modifyTextElement
                                          )
                                          .setValue(
                                            this.options._const.route,
                                            i.concat(g)
                                          )
                                          .setValue(
                                            this.options._const.oldValue,
                                            l.data
                                          )
                                          .setValue(
                                            this.options._const.newValue,
                                            e.childNodes[g].data
                                          )
                                      ),
                                      m
                                    );
                                }
                              } else
                                m.push(
                                  new N()
                                    .setValue(
                                      this.options._const.action,
                                      this.options._const.removeTextElement
                                    )
                                    .setValue(
                                      this.options._const.route,
                                      i.concat(g)
                                    )
                                    .setValue(this.options._const.value, l.data)
                                ),
                                  u.splice(g, 1),
                                  (f = Math.min(u.length, p.length)),
                                  (g -= 1);
                            else
                              m.push(
                                new N()
                                  .setValue(
                                    this.options._const.action,
                                    this.options._const.removeElement
                                  )
                                  .setValue(
                                    this.options._const.route,
                                    i.concat(g)
                                  )
                                  .setValue(this.options._const.element, b(l))
                              ),
                                u.splice(g, 1),
                                (f = Math.min(u.length, p.length)),
                                (g -= 1);
                          else if (!0 === p[g])
                            "#text" === (l = e.childNodes[g]).nodeName
                              ? (m.push(
                                  new N()
                                    .setValue(
                                      this.options._const.action,
                                      this.options._const.addTextElement
                                    )
                                    .setValue(
                                      this.options._const.route,
                                      i.concat(g)
                                    )
                                    .setValue(this.options._const.value, l.data)
                                ),
                                u.splice(g, 0, !0),
                                (f = Math.min(u.length, p.length)),
                                (v -= 1))
                              : (m.push(
                                  new N()
                                    .setValue(
                                      this.options._const.action,
                                      this.options._const.addElement
                                    )
                                    .setValue(
                                      this.options._const.route,
                                      i.concat(g)
                                    )
                                    .setValue(this.options._const.element, b(l))
                                ),
                                u.splice(g, 0, !0),
                                (f = Math.min(u.length, p.length)),
                                (v -= 1));
                          else if (u[g] !== p[g]) {
                            if (m.length > 0) return m;
                            if (
                              ((r = s[u[g]]),
                              (o = Math.min(
                                r.newValue,
                                t.childNodes.length - r.length
                              )) !== r.oldValue)
                            ) {
                              a = !1;
                              for (var y = 0; y < r.length; y += 1)
                                w(
                                  t.childNodes[o + y],
                                  t.childNodes[r.oldValue + y],
                                  {},
                                  !1,
                                  !0
                                ) || (a = !0);
                              if (a)
                                return [
                                  new N()
                                    .setValue(
                                      this.options._const.action,
                                      this.options._const.relocateGroup
                                    )
                                    .setValue(
                                      this.options._const.groupLength,
                                      r.length
                                    )
                                    .setValue(
                                      this.options._const.from,
                                      r.oldValue
                                    )
                                    .setValue(this.options._const.to, o)
                                    .setValue(this.options._const.route, i),
                                ];
                            }
                          }
                      return m;
                    }),
                    (t.prototype.findValueDiff = function (t, e, s) {
                      var i = [];
                      return (
                        t.selected !== e.selected &&
                          i.push(
                            new N()
                              .setValue(
                                this.options._const.action,
                                this.options._const.modifySelected
                              )
                              .setValue(
                                this.options._const.oldValue,
                                t.selected
                              )
                              .setValue(
                                this.options._const.newValue,
                                e.selected
                              )
                              .setValue(this.options._const.route, s)
                          ),
                        (t.value || e.value) &&
                          t.value !== e.value &&
                          "OPTION" !== t.nodeName &&
                          i.push(
                            new N()
                              .setValue(
                                this.options._const.action,
                                this.options._const.modifyValue
                              )
                              .setValue(
                                this.options._const.oldValue,
                                t.value || ""
                              )
                              .setValue(
                                this.options._const.newValue,
                                e.value || ""
                              )
                              .setValue(this.options._const.route, s)
                          ),
                        t.checked !== e.checked &&
                          i.push(
                            new N()
                              .setValue(
                                this.options._const.action,
                                this.options._const.modifyChecked
                              )
                              .setValue(this.options._const.oldValue, t.checked)
                              .setValue(this.options._const.newValue, e.checked)
                              .setValue(this.options._const.route, s)
                          ),
                        i
                      );
                    }),
                    t
                  );
                })(),
                A = {
                  debug: !1,
                  diffcap: 10,
                  maxDepth: !1,
                  maxChildCount: 50,
                  valueDiffing: !0,
                  textDiff: function (t, e, s, i) {
                    t.data = i;
                  },
                  preVirtualDiffApply: function () {},
                  postVirtualDiffApply: function () {},
                  preDiffApply: function () {},
                  postDiffApply: function () {},
                  filterOuterDiff: null,
                  compress: !1,
                  _const: !1,
                  document:
                    !("undefined" == typeof window || !window.document) &&
                    window.document,
                  components: [],
                },
                P = (function () {
                  function t(t) {
                    if (
                      (void 0 === t && (t = {}),
                      Object.entries(A).forEach(function (e) {
                        var s = e[0],
                          i = e[1];
                        Object.prototype.hasOwnProperty.call(t, s) ||
                          (t[s] = i);
                      }),
                      !t._const)
                    ) {
                      var e = [
                          "addAttribute",
                          "modifyAttribute",
                          "removeAttribute",
                          "modifyTextElement",
                          "relocateGroup",
                          "removeElement",
                          "addElement",
                          "removeTextElement",
                          "addTextElement",
                          "replaceElement",
                          "modifyValue",
                          "modifyChecked",
                          "modifySelected",
                          "modifyComment",
                          "action",
                          "route",
                          "oldValue",
                          "newValue",
                          "element",
                          "group",
                          "groupLength",
                          "from",
                          "to",
                          "name",
                          "value",
                          "data",
                          "attributes",
                          "nodeName",
                          "childNodes",
                          "checked",
                          "selected",
                        ],
                        s = {};
                      t.compress
                        ? e.forEach(function (t, e) {
                            return (s[t] = e);
                          })
                        : e.forEach(function (t) {
                            return (s[t] = t);
                          }),
                        (t._const = s);
                    }
                    this.options = t;
                  }
                  return (
                    (t.prototype.apply = function (t, e) {
                      return (function (t, e, s) {
                        return e.every(function (e) {
                          return h(t, e, s);
                        });
                      })(t, e, this.options);
                    }),
                    (t.prototype.undo = function (t, e) {
                      return (function (t, e, s) {
                        (e = e.slice()).reverse(),
                          e.forEach(function (e) {
                            !(function (t, e, s) {
                              switch (e[s._const.action]) {
                                case s._const.addAttribute:
                                  (e[s._const.action] =
                                    s._const.removeAttribute),
                                    h(t, e, s);
                                  break;
                                case s._const.modifyAttribute:
                                  u(e, s._const.oldValue, s._const.newValue),
                                    h(t, e, s);
                                  break;
                                case s._const.removeAttribute:
                                  (e[s._const.action] = s._const.addAttribute),
                                    h(t, e, s);
                                  break;
                                case s._const.modifyTextElement:
                                case s._const.modifyValue:
                                case s._const.modifyComment:
                                case s._const.modifyChecked:
                                case s._const.modifySelected:
                                case s._const.replaceElement:
                                  u(e, s._const.oldValue, s._const.newValue),
                                    h(t, e, s);
                                  break;
                                case s._const.relocateGroup:
                                  u(e, s._const.from, s._const.to), h(t, e, s);
                                  break;
                                case s._const.removeElement:
                                  (e[s._const.action] = s._const.addElement),
                                    h(t, e, s);
                                  break;
                                case s._const.addElement:
                                  (e[s._const.action] = s._const.removeElement),
                                    h(t, e, s);
                                  break;
                                case s._const.removeTextElement:
                                  (e[s._const.action] =
                                    s._const.addTextElement),
                                    h(t, e, s);
                                  break;
                                case s._const.addTextElement:
                                  (e[s._const.action] =
                                    s._const.removeTextElement),
                                    h(t, e, s);
                                  break;
                                default:
                                  console.log("unknown action");
                              }
                            })(t, e, s);
                          });
                      })(t, e, this.options);
                    }),
                    (t.prototype.diff = function (t, e) {
                      return new T(t, e, this.options).init();
                    }),
                    t
                  );
                })();
              const H = (
                  t,
                  e,
                  s,
                  {
                    classes: i,
                    format: n,
                    hiddenHeader: a,
                    sortable: o,
                    scrollY: r,
                    type: l,
                  },
                  { noColumnWidths: d, unhideHeader: c }
                ) => ({
                  nodeName: "TR",
                  childNodes: t
                    .map((t, h) => {
                      const u = e[h] || {
                        type: l,
                        format: n,
                        sortable: !0,
                        searchable: !0,
                      };
                      if (u.hidden) return;
                      const p = {};
                      if (
                        (u.sortable &&
                          o &&
                          (!r.length || c) &&
                          (u.filter
                            ? (p["data-filterable"] = "true")
                            : (p["data-sortable"] = "true")),
                        u.headerClass && (p.class = u.headerClass),
                        s.sort && s.sort.column === h)
                      ) {
                        const t =
                          "asc" === s.sort.dir ? i.ascending : i.descending;
                        (p.class = p.class ? `${p.class} ${t}` : t),
                          (p["aria-sort"] =
                            "asc" === s.sort.dir ? "ascending" : "descending");
                      } else
                        s.filters[h] &&
                          (p.class = p.class
                            ? `${p.class} ${i.filterActive}`
                            : i.filterActive);
                      let f = "";
                      s.widths[h] && !d && (f += `width: ${s.widths[h]}%;`),
                        r.length &&
                          !c &&
                          (f += "padding-bottom: 0;padding-top: 0;border: 0;"),
                        f.length && (p.style = f),
                        u.headerClass && (p.class = u.headerClass);
                      const m =
                        "html" === t.type
                          ? t.data
                          : [
                              {
                                nodeName: "#text",
                                data: t.text ?? String(t.data),
                              },
                            ];
                      return {
                        nodeName: "TH",
                        attributes: p,
                        childNodes:
                          (!a && !r.length) || c
                            ? u.sortable && o
                              ? [
                                  {
                                    nodeName: "a",
                                    attributes: {
                                      href: "#",
                                      class: u.filter ? i.filter : i.sorter,
                                    },
                                    childNodes: m,
                                  },
                                ]
                              : m
                            : [{ nodeName: "#text", data: "" }],
                      };
                    })
                    .filter((t) => t),
                }),
                R = (
                  t,
                  e,
                  s,
                  i,
                  n,
                  a,
                  {
                    classes: o,
                    hiddenHeader: r,
                    header: l,
                    footer: d,
                    format: c,
                    sortable: h,
                    scrollY: u,
                    type: p,
                    rowRender: f,
                    tabIndex: m,
                  },
                  { noColumnWidths: g, unhideHeader: b, renderHeader: v }
                ) => {
                  const w = {
                    nodeName: "TABLE",
                    attributes: { ...t },
                    childNodes: [
                      {
                        nodeName: "TBODY",
                        childNodes: s.map(({ row: t, index: e }) => {
                          const s = {
                            nodeName: "TR",
                            attributes: { "data-index": String(e) },
                            childNodes: t
                              .map((t, s) => {
                                const a = i[s] || {
                                  type: p,
                                  format: c,
                                  sortable: !0,
                                  searchable: !0,
                                };
                                if (a.hidden) return;
                                const o =
                                  "html" === a.type
                                    ? { nodeName: "TD", childNodes: t.data }
                                    : {
                                        nodeName: "TD",
                                        childNodes: [
                                          {
                                            nodeName: "#text",
                                            data: t.text ?? String(t.data),
                                          },
                                        ],
                                      };
                                if (
                                  (l ||
                                    d ||
                                    !n.widths[s] ||
                                    g ||
                                    (o.attributes = {
                                      style: `width: ${n.widths[s]}%;`,
                                    }),
                                  a.cellClass &&
                                    (o.attributes || (o.attributes = {}),
                                    (o.attributes.class = a.cellClass)),
                                  a.render)
                                ) {
                                  const i = a.render(t.data, o, e, s);
                                  if (i) {
                                    if ("string" != typeof i) return i;
                                    {
                                      const t = k(`<td>${i}</td>`);
                                      1 === t.childNodes.length &&
                                      ["#text", "#comment"].includes(
                                        t.childNodes[0].nodeName
                                      )
                                        ? (o.childNodes[0].data = i)
                                        : (o.childNodes = t.childNodes);
                                    }
                                  }
                                }
                                return o;
                              })
                              .filter((t) => t),
                          };
                          if ((e === a && (s.attributes.class = o.cursor), f)) {
                            const i = f(t, s, e);
                            if (i) {
                              if ("string" != typeof i) return i;
                              {
                                const t = k(`<tr>${i}</tr>`);
                                !t.childNodes ||
                                (1 === t.childNodes.length &&
                                  ["#text", "#comment"].includes(
                                    t.childNodes[0].nodeName
                                  ))
                                  ? (s.childNodes[0].data = i)
                                  : (s.childNodes = t.childNodes);
                              }
                            }
                          }
                          return s;
                        }),
                      },
                    ],
                  };
                  if (
                    ((w.attributes.class = w.attributes.class
                      ? `${w.attributes.class} ${o.table}`
                      : o.table),
                    l || d || v)
                  ) {
                    const t = H(
                      e,
                      i,
                      n,
                      { classes: o, hiddenHeader: r, sortable: h, scrollY: u },
                      { noColumnWidths: g, unhideHeader: b }
                    );
                    if (l || v) {
                      const e = { nodeName: "THEAD", childNodes: [t] };
                      (!u.length && !r) ||
                        b ||
                        (e.attributes = { style: "height: 0px;" }),
                        w.childNodes.unshift(e);
                    }
                    if (d) {
                      const e = {
                        nodeName: "TFOOT",
                        childNodes: [l ? structuredClone(t) : t],
                      };
                      (!u.length && !r) ||
                        b ||
                        (e.attributes = { style: "height: 0px;" }),
                        w.childNodes.push(e);
                    }
                  }
                  return !1 !== m && (w.attributes.tabindex = String(m)), w;
                };
              "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof window
                ? window
                : void 0 !== t || ("undefined" != typeof self && self);
              var I = {},
                Y = {
                  get exports() {
                    return I;
                  },
                  set exports(t) {
                    I = t;
                  },
                };
              Y.exports = (function () {
                var t = 6e4,
                  e = 36e5,
                  s = "millisecond",
                  i = "second",
                  n = "minute",
                  a = "hour",
                  o = "day",
                  r = "week",
                  l = "month",
                  d = "quarter",
                  c = "year",
                  h = "date",
                  u = "Invalid Date",
                  p =
                    /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                  f =
                    /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                  m = {
                    name: "en",
                    weekdays:
                      "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                        "_"
                      ),
                    months:
                      "January_February_March_April_May_June_July_August_September_October_November_December".split(
                        "_"
                      ),
                    ordinal: function (t) {
                      var e = ["th", "st", "nd", "rd"],
                        s = t % 100;
                      return "[" + t + (e[(s - 20) % 10] || e[s] || e[0]) + "]";
                    },
                  },
                  g = function (t, e, s) {
                    var i = String(t);
                    return !i || i.length >= e
                      ? t
                      : "" + Array(e + 1 - i.length).join(s) + t;
                  },
                  b = {
                    s: g,
                    z: function (t) {
                      var e = -t.utcOffset(),
                        s = Math.abs(e),
                        i = Math.floor(s / 60),
                        n = s % 60;
                      return (
                        (e <= 0 ? "+" : "-") + g(i, 2, "0") + ":" + g(n, 2, "0")
                      );
                    },
                    m: function t(e, s) {
                      if (e.date() < s.date()) return -t(s, e);
                      var i =
                          12 * (s.year() - e.year()) + (s.month() - e.month()),
                        n = e.clone().add(i, l),
                        a = s - n < 0,
                        o = e.clone().add(i + (a ? -1 : 1), l);
                      return +(-(i + (s - n) / (a ? n - o : o - n)) || 0);
                    },
                    a: function (t) {
                      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                    },
                    p: function (t) {
                      return (
                        {
                          M: l,
                          y: c,
                          w: r,
                          d: o,
                          D: h,
                          h: a,
                          m: n,
                          s: i,
                          ms: s,
                          Q: d,
                        }[t] ||
                        String(t || "")
                          .toLowerCase()
                          .replace(/s$/, "")
                      );
                    },
                    u: function (t) {
                      return void 0 === t;
                    },
                  },
                  v = "en",
                  w = {};
                w[v] = m;
                var _ = function (t) {
                    return t instanceof D;
                  },
                  y = function t(e, s, i) {
                    var n;
                    if (!e) return v;
                    if ("string" == typeof e) {
                      var a = e.toLowerCase();
                      w[a] && (n = a), s && ((w[a] = s), (n = a));
                      var o = e.split("-");
                      if (!n && o.length > 1) return t(o[0]);
                    } else {
                      var r = e.name;
                      (w[r] = e), (n = r);
                    }
                    return !i && n && (v = n), n || (!i && v);
                  },
                  x = function (t, e) {
                    if (_(t)) return t.clone();
                    var s = "object" == typeof e ? e : {};
                    return (s.date = t), (s.args = arguments), new D(s);
                  },
                  N = b;
                (N.l = y),
                  (N.i = _),
                  (N.w = function (t, e) {
                    return x(t, {
                      locale: e.$L,
                      utc: e.$u,
                      x: e.$x,
                      $offset: e.$offset,
                    });
                  });
                var D = (function () {
                    function m(t) {
                      (this.$L = y(t.locale, null, !0)), this.parse(t);
                    }
                    var g = m.prototype;
                    return (
                      (g.parse = function (t) {
                        (this.$d = (function (t) {
                          var e = t.date,
                            s = t.utc;
                          if (null === e) return new Date(NaN);
                          if (N.u(e)) return new Date();
                          if (e instanceof Date) return new Date(e);
                          if ("string" == typeof e && !/Z$/i.test(e)) {
                            var i = e.match(p);
                            if (i) {
                              var n = i[2] - 1 || 0,
                                a = (i[7] || "0").substring(0, 3);
                              return s
                                ? new Date(
                                    Date.UTC(
                                      i[1],
                                      n,
                                      i[3] || 1,
                                      i[4] || 0,
                                      i[5] || 0,
                                      i[6] || 0,
                                      a
                                    )
                                  )
                                : new Date(
                                    i[1],
                                    n,
                                    i[3] || 1,
                                    i[4] || 0,
                                    i[5] || 0,
                                    i[6] || 0,
                                    a
                                  );
                            }
                          }
                          return new Date(e);
                        })(t)),
                          (this.$x = t.x || {}),
                          this.init();
                      }),
                      (g.init = function () {
                        var t = this.$d;
                        (this.$y = t.getFullYear()),
                          (this.$M = t.getMonth()),
                          (this.$D = t.getDate()),
                          (this.$W = t.getDay()),
                          (this.$H = t.getHours()),
                          (this.$m = t.getMinutes()),
                          (this.$s = t.getSeconds()),
                          (this.$ms = t.getMilliseconds());
                      }),
                      (g.$utils = function () {
                        return N;
                      }),
                      (g.isValid = function () {
                        return !(this.$d.toString() === u);
                      }),
                      (g.isSame = function (t, e) {
                        var s = x(t);
                        return this.startOf(e) <= s && s <= this.endOf(e);
                      }),
                      (g.isAfter = function (t, e) {
                        return x(t) < this.startOf(e);
                      }),
                      (g.isBefore = function (t, e) {
                        return this.endOf(e) < x(t);
                      }),
                      (g.$g = function (t, e, s) {
                        return N.u(t) ? this[e] : this.set(s, t);
                      }),
                      (g.unix = function () {
                        return Math.floor(this.valueOf() / 1e3);
                      }),
                      (g.valueOf = function () {
                        return this.$d.getTime();
                      }),
                      (g.startOf = function (t, e) {
                        var s = this,
                          d = !!N.u(e) || e,
                          u = N.p(t),
                          p = function (t, e) {
                            var i = N.w(
                              s.$u
                                ? Date.UTC(s.$y, e, t)
                                : new Date(s.$y, e, t),
                              s
                            );
                            return d ? i : i.endOf(o);
                          },
                          f = function (t, e) {
                            return N.w(
                              s
                                .toDate()
                                [t].apply(
                                  s.toDate("s"),
                                  (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(
                                    e
                                  )
                                ),
                              s
                            );
                          },
                          m = this.$W,
                          g = this.$M,
                          b = this.$D,
                          v = "set" + (this.$u ? "UTC" : "");
                        switch (u) {
                          case c:
                            return d ? p(1, 0) : p(31, 11);
                          case l:
                            return d ? p(1, g) : p(0, g + 1);
                          case r:
                            var w = this.$locale().weekStart || 0,
                              _ = (m < w ? m + 7 : m) - w;
                            return p(d ? b - _ : b + (6 - _), g);
                          case o:
                          case h:
                            return f(v + "Hours", 0);
                          case a:
                            return f(v + "Minutes", 1);
                          case n:
                            return f(v + "Seconds", 2);
                          case i:
                            return f(v + "Milliseconds", 3);
                          default:
                            return this.clone();
                        }
                      }),
                      (g.endOf = function (t) {
                        return this.startOf(t, !1);
                      }),
                      (g.$set = function (t, e) {
                        var r,
                          d = N.p(t),
                          u = "set" + (this.$u ? "UTC" : ""),
                          p = ((r = {}),
                          (r[o] = u + "Date"),
                          (r[h] = u + "Date"),
                          (r[l] = u + "Month"),
                          (r[c] = u + "FullYear"),
                          (r[a] = u + "Hours"),
                          (r[n] = u + "Minutes"),
                          (r[i] = u + "Seconds"),
                          (r[s] = u + "Milliseconds"),
                          r)[d],
                          f = d === o ? this.$D + (e - this.$W) : e;
                        if (d === l || d === c) {
                          var m = this.clone().set(h, 1);
                          m.$d[p](f),
                            m.init(),
                            (this.$d = m.set(
                              h,
                              Math.min(this.$D, m.daysInMonth())
                            ).$d);
                        } else p && this.$d[p](f);
                        return this.init(), this;
                      }),
                      (g.set = function (t, e) {
                        return this.clone().$set(t, e);
                      }),
                      (g.get = function (t) {
                        return this[N.p(t)]();
                      }),
                      (g.add = function (s, d) {
                        var h,
                          u = this;
                        s = Number(s);
                        var p = N.p(d),
                          f = function (t) {
                            var e = x(u);
                            return N.w(e.date(e.date() + Math.round(t * s)), u);
                          };
                        if (p === l) return this.set(l, this.$M + s);
                        if (p === c) return this.set(c, this.$y + s);
                        if (p === o) return f(1);
                        if (p === r) return f(7);
                        var m =
                            ((h = {}), (h[n] = t), (h[a] = e), (h[i] = 1e3), h)[
                              p
                            ] || 1,
                          g = this.$d.getTime() + s * m;
                        return N.w(g, this);
                      }),
                      (g.subtract = function (t, e) {
                        return this.add(-1 * t, e);
                      }),
                      (g.format = function (t) {
                        var e = this,
                          s = this.$locale();
                        if (!this.isValid()) return s.invalidDate || u;
                        var i = t || "YYYY-MM-DDTHH:mm:ssZ",
                          n = N.z(this),
                          a = this.$H,
                          o = this.$m,
                          r = this.$M,
                          l = s.weekdays,
                          d = s.months,
                          c = function (t, s, n, a) {
                            return (t && (t[s] || t(e, i))) || n[s].slice(0, a);
                          },
                          h = function (t) {
                            return N.s(a % 12 || 12, t, "0");
                          },
                          p =
                            s.meridiem ||
                            function (t, e, s) {
                              var i = t < 12 ? "AM" : "PM";
                              return s ? i.toLowerCase() : i;
                            },
                          m = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: r + 1,
                            MM: N.s(r + 1, 2, "0"),
                            MMM: c(s.monthsShort, r, d, 3),
                            MMMM: c(d, r),
                            D: this.$D,
                            DD: N.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: c(s.weekdaysMin, this.$W, l, 2),
                            ddd: c(s.weekdaysShort, this.$W, l, 3),
                            dddd: l[this.$W],
                            H: String(a),
                            HH: N.s(a, 2, "0"),
                            h: h(1),
                            hh: h(2),
                            a: p(a, o, !0),
                            A: p(a, o, !1),
                            m: String(o),
                            mm: N.s(o, 2, "0"),
                            s: String(this.$s),
                            ss: N.s(this.$s, 2, "0"),
                            SSS: N.s(this.$ms, 3, "0"),
                            Z: n,
                          };
                        return i.replace(f, function (t, e) {
                          return e || m[t] || n.replace(":", "");
                        });
                      }),
                      (g.utcOffset = function () {
                        return (
                          15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        );
                      }),
                      (g.diff = function (s, h, u) {
                        var p,
                          f = N.p(h),
                          m = x(s),
                          g = (m.utcOffset() - this.utcOffset()) * t,
                          b = this - m,
                          v = N.m(this, m);
                        return (
                          (v =
                            ((p = {}),
                            (p[c] = v / 12),
                            (p[l] = v),
                            (p[d] = v / 3),
                            (p[r] = (b - g) / 6048e5),
                            (p[o] = (b - g) / 864e5),
                            (p[a] = b / e),
                            (p[n] = b / t),
                            (p[i] = b / 1e3),
                            p)[f] || b),
                          u ? v : N.a(v)
                        );
                      }),
                      (g.daysInMonth = function () {
                        return this.endOf(l).$D;
                      }),
                      (g.$locale = function () {
                        return w[this.$L];
                      }),
                      (g.locale = function (t, e) {
                        if (!t) return this.$L;
                        var s = this.clone(),
                          i = y(t, e, !0);
                        return i && (s.$L = i), s;
                      }),
                      (g.clone = function () {
                        return N.w(this.$d, this);
                      }),
                      (g.toDate = function () {
                        return new Date(this.valueOf());
                      }),
                      (g.toJSON = function () {
                        return this.isValid() ? this.toISOString() : null;
                      }),
                      (g.toISOString = function () {
                        return this.$d.toISOString();
                      }),
                      (g.toString = function () {
                        return this.$d.toUTCString();
                      }),
                      m
                    );
                  })(),
                  M = D.prototype;
                return (
                  (x.prototype = M),
                  [
                    ["$ms", s],
                    ["$s", i],
                    ["$m", n],
                    ["$H", a],
                    ["$W", o],
                    ["$M", l],
                    ["$y", c],
                    ["$D", h],
                  ].forEach(function (t) {
                    M[t[1]] = function (e) {
                      return this.$g(e, t[0], t[1]);
                    };
                  }),
                  (x.extend = function (t, e) {
                    return t.$i || (t(e, D, x), (t.$i = !0)), x;
                  }),
                  (x.locale = y),
                  (x.isDayjs = _),
                  (x.unix = function (t) {
                    return x(1e3 * t);
                  }),
                  (x.en = w[v]),
                  (x.Ls = w),
                  (x.p = {}),
                  x
                );
              })();
              var j = I,
                q = {},
                B = {
                  get exports() {
                    return q;
                  },
                  set exports(t) {
                    q = t;
                  },
                };
              B.exports = (function () {
                var t = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A",
                  },
                  e =
                    /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                  s = /\d\d/,
                  i = /\d\d?/,
                  n = /\d*[^-_:/,()\s\d]+/,
                  a = {},
                  o = function (t) {
                    return (t = +t) + (t > 68 ? 1900 : 2e3);
                  },
                  r = function (t) {
                    return function (e) {
                      this[t] = +e;
                    };
                  },
                  l = [
                    /[+-]\d\d:?(\d\d)?|Z/,
                    function (t) {
                      (this.zone || (this.zone = {})).offset = (function (t) {
                        if (!t) return 0;
                        if ("Z" === t) return 0;
                        var e = t.match(/([+-]|\d\d)/g),
                          s = 60 * e[1] + (+e[2] || 0);
                        return 0 === s ? 0 : "+" === e[0] ? -s : s;
                      })(t);
                    },
                  ],
                  d = function (t) {
                    var e = a[t];
                    return e && (e.indexOf ? e : e.s.concat(e.f));
                  },
                  c = function (t, e) {
                    var s,
                      i = a.meridiem;
                    if (i) {
                      for (var n = 1; n <= 24; n += 1)
                        if (t.indexOf(i(n, 0, e)) > -1) {
                          s = n > 12;
                          break;
                        }
                    } else s = t === (e ? "pm" : "PM");
                    return s;
                  },
                  h = {
                    A: [
                      n,
                      function (t) {
                        this.afternoon = c(t, !1);
                      },
                    ],
                    a: [
                      n,
                      function (t) {
                        this.afternoon = c(t, !0);
                      },
                    ],
                    S: [
                      /\d/,
                      function (t) {
                        this.milliseconds = 100 * +t;
                      },
                    ],
                    SS: [
                      s,
                      function (t) {
                        this.milliseconds = 10 * +t;
                      },
                    ],
                    SSS: [
                      /\d{3}/,
                      function (t) {
                        this.milliseconds = +t;
                      },
                    ],
                    s: [i, r("seconds")],
                    ss: [i, r("seconds")],
                    m: [i, r("minutes")],
                    mm: [i, r("minutes")],
                    H: [i, r("hours")],
                    h: [i, r("hours")],
                    HH: [i, r("hours")],
                    hh: [i, r("hours")],
                    D: [i, r("day")],
                    DD: [s, r("day")],
                    Do: [
                      n,
                      function (t) {
                        var e = a.ordinal,
                          s = t.match(/\d+/);
                        if (((this.day = s[0]), e))
                          for (var i = 1; i <= 31; i += 1)
                            e(i).replace(/\[|\]/g, "") === t && (this.day = i);
                      },
                    ],
                    M: [i, r("month")],
                    MM: [s, r("month")],
                    MMM: [
                      n,
                      function (t) {
                        var e = d("months"),
                          s =
                            (
                              d("monthsShort") ||
                              e.map(function (t) {
                                return t.slice(0, 3);
                              })
                            ).indexOf(t) + 1;
                        if (s < 1) throw new Error();
                        this.month = s % 12 || s;
                      },
                    ],
                    MMMM: [
                      n,
                      function (t) {
                        var e = d("months").indexOf(t) + 1;
                        if (e < 1) throw new Error();
                        this.month = e % 12 || e;
                      },
                    ],
                    Y: [/[+-]?\d+/, r("year")],
                    YY: [
                      s,
                      function (t) {
                        this.year = o(t);
                      },
                    ],
                    YYYY: [/\d{4}/, r("year")],
                    Z: l,
                    ZZ: l,
                  };
                function u(s) {
                  var i, n;
                  (i = s), (n = a && a.formats);
                  for (
                    var o = (s = i.replace(
                        /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                        function (e, s, i) {
                          var a = i && i.toUpperCase();
                          return (
                            s ||
                            n[i] ||
                            t[i] ||
                            n[a].replace(
                              /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                              function (t, e, s) {
                                return e || s.slice(1);
                              }
                            )
                          );
                        }
                      )).match(e),
                      r = o.length,
                      l = 0;
                    l < r;
                    l += 1
                  ) {
                    var d = o[l],
                      c = h[d],
                      u = c && c[0],
                      p = c && c[1];
                    o[l] = p
                      ? { regex: u, parser: p }
                      : d.replace(/^\[|\]$/g, "");
                  }
                  return function (t) {
                    for (var e = {}, s = 0, i = 0; s < r; s += 1) {
                      var n = o[s];
                      if ("string" == typeof n) i += n.length;
                      else {
                        var a = n.regex,
                          l = n.parser,
                          d = t.slice(i),
                          c = a.exec(d)[0];
                        l.call(e, c), (t = t.replace(c, ""));
                      }
                    }
                    return (
                      (function (t) {
                        var e = t.afternoon;
                        if (void 0 !== e) {
                          var s = t.hours;
                          e
                            ? s < 12 && (t.hours += 12)
                            : 12 === s && (t.hours = 0),
                            delete t.afternoon;
                        }
                      })(e),
                      e
                    );
                  };
                }
                return function (t, e, s) {
                  (s.p.customParseFormat = !0),
                    t && t.parseTwoDigitYear && (o = t.parseTwoDigitYear);
                  var i = e.prototype,
                    n = i.parse;
                  i.parse = function (t) {
                    var e = t.date,
                      i = t.utc,
                      o = t.args;
                    this.$u = i;
                    var r = o[1];
                    if ("string" == typeof r) {
                      var l = !0 === o[2],
                        d = !0 === o[3],
                        c = l || d,
                        h = o[2];
                      d && (h = o[2]),
                        (a = this.$locale()),
                        !l && h && (a = s.Ls[h]),
                        (this.$d = (function (t, e, s) {
                          try {
                            if (["x", "X"].indexOf(e) > -1)
                              return new Date(("X" === e ? 1e3 : 1) * t);
                            var i = u(e)(t),
                              n = i.year,
                              a = i.month,
                              o = i.day,
                              r = i.hours,
                              l = i.minutes,
                              d = i.seconds,
                              c = i.milliseconds,
                              h = i.zone,
                              p = new Date(),
                              f = o || (n || a ? 1 : p.getDate()),
                              m = n || p.getFullYear(),
                              g = 0;
                            (n && !a) || (g = a > 0 ? a - 1 : p.getMonth());
                            var b = r || 0,
                              v = l || 0,
                              w = d || 0,
                              _ = c || 0;
                            return h
                              ? new Date(
                                  Date.UTC(
                                    m,
                                    g,
                                    f,
                                    b,
                                    v,
                                    w,
                                    _ + 60 * h.offset * 1e3
                                  )
                                )
                              : s
                              ? new Date(Date.UTC(m, g, f, b, v, w, _))
                              : new Date(m, g, f, b, v, w, _);
                          } catch (t) {
                            return new Date("");
                          }
                        })(e, r, i)),
                        this.init(),
                        h && !0 !== h && (this.$L = this.locale(h).$L),
                        c && e != this.format(r) && (this.$d = new Date("")),
                        (a = {});
                    } else if (r instanceof Array)
                      for (var p = r.length, f = 1; f <= p; f += 1) {
                        o[1] = r[f - 1];
                        var m = s.apply(this, o);
                        if (m.isValid()) {
                          (this.$d = m.$d), (this.$L = m.$L), this.init();
                          break;
                        }
                        f === p && (this.$d = new Date(""));
                      }
                    else n.call(this, t);
                  };
                };
              })();
              var F = q;
              j.extend(F);
              const U = (t, e) => {
                  let s;
                  if (e)
                    switch (e) {
                      case "ISO_8601":
                        s = t;
                        break;
                      case "RFC_2822":
                        s = j(t.slice(5), "DD MMM YYYY HH:mm:ss ZZ").unix();
                        break;
                      case "MYSQL":
                        s = j(t, "YYYY-MM-DD hh:mm:ss").unix();
                        break;
                      case "UNIX":
                        s = j(t).unix();
                        break;
                      default:
                        s = j(t, e, !0).valueOf();
                    }
                  return s;
                },
                z = (t, e) => {
                  if (
                    t?.constructor === Object &&
                    Object.prototype.hasOwnProperty.call(t, "data") &&
                    !Object.keys(t).find(
                      (t) => !["text", "order", "data"].includes(t)
                    )
                  )
                    return t;
                  const s = { data: t };
                  switch (e.type) {
                    case "string":
                      "string" != typeof t &&
                        ((s.text = String(s.data)), (s.order = s.text));
                      break;
                    case "date":
                      e.format && (s.order = U(String(s.data), e.format));
                      break;
                    case "number":
                      (s.text = String(s.data)),
                        (s.data = parseInt(s.data, 10));
                      break;
                    case "html": {
                      const t = Array.isArray(s.data)
                        ? { nodeName: "TD", childNodes: s.data }
                        : k(`<td>${String(s.data)}</td>`);
                      s.data = t.childNodes || [];
                      const e = a(t);
                      (s.text = e), (s.order = e);
                      break;
                    }
                    case "boolean":
                      "string" == typeof s.data &&
                        (s.data = s.data.toLowerCase().trim()),
                        (s.data = !["false", !1, null, void 0, 0].includes(
                          s.data
                        )),
                        (s.order = s.data ? 1 : 0),
                        (s.text = String(s.data));
                      break;
                    case "other":
                      (s.text = ""), (s.order = 0);
                      break;
                    default:
                      s.text = JSON.stringify(s.data);
                  }
                  return s;
                },
                J = (t) => {
                  if (
                    t instanceof Object &&
                    t.constructor === Object &&
                    t.hasOwnProperty("data") &&
                    ("string" == typeof t.text || "string" == typeof t.data)
                  )
                    return t;
                  const e = { data: t };
                  if ("string" == typeof t) {
                    if (t.length) {
                      const s = k(`<th>${t}</th>`);
                      if (
                        s.childNodes &&
                        (1 !== s.childNodes.length ||
                          "#text" !== s.childNodes[0].nodeName)
                      ) {
                        (e.data = s.childNodes), (e.type = "html");
                        const t = a(s);
                        e.text = t;
                      }
                    }
                  } else
                    [null, void 0].includes(t)
                      ? (e.text = "")
                      : (e.text = JSON.stringify(t));
                  return e;
                },
                W = (t, e, s, i, n) => {
                  const o = { data: [], headings: [] };
                  t.headings
                    ? (o.headings = t.headings.map((t) => J(t)))
                    : e?.tHead
                    ? (o.headings = Array.from(
                        e.tHead.querySelectorAll("th")
                      ).map((t, e) => {
                        const o = ((t) => {
                          const e = E(t, { valueDiffing: !1 });
                          let s;
                          return (
                            (s =
                              !e.childNodes ||
                              (1 === e.childNodes.length &&
                                "#text" === e.childNodes[0].nodeName)
                                ? { data: t.innerText, type: "string" }
                                : {
                                    data: e.childNodes,
                                    type: "html",
                                    text: a(e),
                                  }),
                            s
                          );
                        })(t);
                        s[e] ||
                          (s[e] = {
                            type: i,
                            format: n,
                            searchable: !0,
                            sortable: !0,
                          });
                        const r = s[e];
                        return (
                          ("false" !==
                            t.dataset.sortable?.trim().toLowerCase() &&
                            "false" !== t.dataset.sort?.trim().toLowerCase()) ||
                            (r.sortable = !1),
                          "false" ===
                            t.dataset.searchable?.trim().toLowerCase() &&
                            (r.searchable = !1),
                          ("true" !== t.dataset.hidden?.trim().toLowerCase() &&
                            "true" !==
                              t.getAttribute("hidden")?.trim().toLowerCase()) ||
                            (r.hidden = !0),
                          [
                            "number",
                            "string",
                            "html",
                            "date",
                            "boolean",
                            "other",
                          ].includes(t.dataset.type) &&
                            ((r.type = t.dataset.type),
                            "date" === r.type &&
                              t.dataset.format &&
                              (r.format = t.dataset.format)),
                          o
                        );
                      }))
                    : t.data?.length
                    ? (o.headings = t.data[0].map((t) => J("")))
                    : e?.tBodies.length &&
                      (o.headings = Array.from(e.tBodies[0].rows[0].cells).map(
                        (t) => J("")
                      ));
                  for (let t = 0; t < o.headings.length; t++)
                    s[t] ||
                      (s[t] = {
                        type: i,
                        format: n,
                        sortable: !0,
                        searchable: !0,
                      });
                  if (
                    (t.data
                      ? (o.data = t.data.map((t) =>
                          t.map((t, e) => z(t, s[e]))
                        ))
                      : e?.tBodies?.length &&
                        (o.data = Array.from(e.tBodies[0].rows).map((t) =>
                          Array.from(t.cells).map((t, e) => {
                            const i = t.dataset.content
                              ? z(t.dataset.content, s[e])
                              : ((t, e) => {
                                  let s;
                                  switch (e.type) {
                                    case "string":
                                      s = { data: t.innerText };
                                      break;
                                    case "date": {
                                      const i = t.innerText;
                                      s = { data: i, order: U(i, e.format) };
                                      break;
                                    }
                                    case "number":
                                      s = {
                                        data: parseInt(t.innerText, 10),
                                        text: t.innerText,
                                      };
                                      break;
                                    case "boolean": {
                                      const e = ![
                                        "false",
                                        "0",
                                        "null",
                                        "undefined",
                                      ].includes(
                                        t.innerText.toLowerCase().trim()
                                      );
                                      s = {
                                        data: e,
                                        order: e ? 1 : 0,
                                        text: e ? "1" : "0",
                                      };
                                      break;
                                    }
                                    default:
                                      s = {
                                        data:
                                          E(t, { valueDiffing: !1 })
                                            .childNodes || [],
                                        text: t.innerText,
                                        order: t.innerText,
                                      };
                                  }
                                  return s;
                                })(t, s[e]);
                            return (
                              t.dataset.order &&
                                (i.order = isNaN(parseFloat(t.dataset.order))
                                  ? t.dataset.order
                                  : parseFloat(t.dataset.order)),
                              i
                            );
                          })
                        )),
                    o.data.length && o.data[0].length !== o.headings.length)
                  )
                    throw new Error("Data heading length mismatch.");
                  return o;
                };
              class Q {
                constructor(t) {
                  (this.dt = t), (this.cursor = !1);
                }
                setCursor(t = !1) {
                  if (t === this.cursor) return;
                  const e = this.cursor;
                  if (
                    ((this.cursor = t),
                    this.dt._renderTable(),
                    !1 !== t && this.dt.options.scrollY)
                  ) {
                    const t = this.dt.dom.querySelector(
                      `tr.${this.dt.options.classes.cursor}`
                    );
                    t && t.scrollIntoView({ block: "nearest" });
                  }
                  this.dt.emit("datatable.cursormove", this.cursor, e);
                }
                add(t) {
                  const e = t.map((t, e) => {
                    const s = this.dt.columns.settings[e];
                    return z(t, s);
                  });
                  this.dt.data.data.push(e),
                    this.dt.data.data.length && (this.dt.hasRows = !0),
                    this.dt.update(!0);
                }
                remove(t) {
                  if (!Array.isArray(t)) return this.remove([t]);
                  (this.dt.data.data = this.dt.data.data.filter(
                    (e, s) => !t.includes(s)
                  )),
                    this.dt.data.data.length || (this.dt.hasRows = !1),
                    this.dt.update(!0);
                }
                findRowIndex(t, e) {
                  return this.dt.data.data.findIndex((s) =>
                    (s[t].text ?? String(s[t].data))
                      .toLowerCase()
                      .includes(String(e).toLowerCase())
                  );
                }
                findRow(t, e) {
                  const s = this.findRowIndex(t, e);
                  if (s < 0) return { index: -1, row: null, cols: [] };
                  const i = this.dt.data.data[s],
                    n = i.map((t) => t.data);
                  return { index: s, row: i, cols: n };
                }
                updateRow(t, e) {
                  const s = e.map((t, e) => {
                    const s = this.dt.columns.settings[e];
                    return z(t, s);
                  });
                  this.dt.data.data.splice(t, 1, s), this.dt.update(!0);
                }
              }
              class Z {
                constructor(t) {
                  (this.dt = t), this.init();
                }
                init() {
                  [this.settings, this._state] = ((t = [], e, s) => {
                    let i = [],
                      n = !1;
                    const a = [];
                    return (
                      t.forEach((t) => {
                        (Array.isArray(t.select)
                          ? t.select
                          : [t.select]
                        ).forEach((o) => {
                          i[o] ||
                            (i[o] = {
                              type: t.type || e,
                              sortable: !0,
                              searchable: !0,
                            });
                          const r = i[o];
                          t.render && (r.render = t.render),
                            t.format
                              ? (r.format = t.format)
                              : "date" === t.type && (r.format = s),
                            t.cellClass && (r.cellClass = t.cellClass),
                            t.headerClass && (r.headerClass = t.headerClass),
                            t.locale && (r.locale = t.locale),
                            !1 === t.sortable
                              ? (r.sortable = !1)
                              : (t.numeric && (r.numeric = t.numeric),
                                t.caseFirst && (r.caseFirst = t.caseFirst)),
                            !1 === t.searchable
                              ? (r.searchable = !1)
                              : t.sensitivity &&
                                (r.sensitivity = t.sensitivity),
                            (r.searchable || r.sortable) &&
                              t.ignorePunctuation &&
                              (r.ignorePunctuation = t.ignorePunctuation),
                            t.hidden && (r.hidden = !0),
                            t.filter && (r.filter = t.filter),
                            t.sortSequence && (r.sortSequence = t.sortSequence),
                            t.sort &&
                              (t.filter
                                ? (a[o] = t.sort)
                                : (n = { column: o, dir: t.sort }));
                        });
                      }),
                      (i = i.map(
                        (t) =>
                          t || {
                            type: e,
                            format: "date" === e ? s : void 0,
                            sortable: !0,
                            searchable: !0,
                          }
                      )),
                      [i, { filters: a, sort: n, widths: [] }]
                    );
                  })(
                    this.dt.options.columns,
                    this.dt.options.type,
                    this.dt.options.format
                  );
                }
                swap(t) {
                  if (2 === t.length) {
                    const e = this.dt.data.headings.map((t, e) => e),
                      s = t[0],
                      i = t[1],
                      n = e[i];
                    return (e[i] = e[s]), (e[s] = n), this.order(e);
                  }
                }
                order(t) {
                  (this.dt.data.headings = t.map(
                    (t) => this.dt.data.headings[t]
                  )),
                    (this.dt.data.data = this.dt.data.data.map((e) =>
                      t.map((t) => e[t])
                    )),
                    (this.settings = t.map((t) => this.settings[t])),
                    this.dt.update();
                }
                hide(t) {
                  t.length &&
                    (t.forEach((t) => {
                      this.settings[t] ||
                        (this.settings[t] = { type: "string" }),
                        (this.settings[t].hidden = !0);
                    }),
                    this.dt.update());
                }
                show(t) {
                  t.length &&
                    (t.forEach((t) => {
                      this.settings[t] ||
                        (this.settings[t] = { type: "string", sortable: !0 }),
                        delete this.settings[t].hidden;
                    }),
                    this.dt.update());
                }
                visible(t) {
                  return (
                    void 0 === t &&
                      (t = [...Array(this.dt.data.headings.length).keys()]),
                    Array.isArray(t)
                      ? t.map((t) => !this.settings[t]?.hidden)
                      : !this.settings[t]?.hidden
                  );
                }
                add(t) {
                  const e = this.dt.data.headings.length;
                  if (
                    ((this.dt.data.headings = this.dt.data.headings.concat([
                      J(t.heading),
                    ])),
                    (this.dt.data.data = this.dt.data.data.map((e, s) =>
                      e.concat([z(t.data[s], t)])
                    )),
                    (this.settings[e] = {
                      type: t.type || "string",
                      sortable: !0,
                      searchable: !0,
                    }),
                    t.type || t.format || t.sortable || t.render || t.filter)
                  ) {
                    const s = this.settings[e];
                    t.render && (s.render = t.render),
                      t.format && (s.format = t.format),
                      t.cellClass && (s.cellClass = t.cellClass),
                      t.headerClass && (s.headerClass = t.headerClass),
                      t.locale && (s.locale = t.locale),
                      !1 === t.sortable
                        ? (s.sortable = !1)
                        : (t.numeric && (s.numeric = t.numeric),
                          t.caseFirst && (s.caseFirst = t.caseFirst)),
                      !1 === t.searchable
                        ? (s.searchable = !1)
                        : t.sensitivity && (s.sensitivity = t.sensitivity),
                      (s.searchable || s.sortable) &&
                        t.ignorePunctuation &&
                        (s.ignorePunctuation = t.ignorePunctuation),
                      t.hidden && (s.hidden = !0),
                      t.filter && (s.filter = t.filter),
                      t.sortSequence && (s.sortSequence = t.sortSequence);
                  }
                  this.dt.update(!0);
                }
                remove(t) {
                  if (!Array.isArray(t)) return this.remove([t]);
                  (this.dt.data.headings = this.dt.data.headings.filter(
                    (e, s) => !t.includes(s)
                  )),
                    (this.dt.data.data = this.dt.data.data.map((e) =>
                      e.filter((e, s) => !t.includes(s))
                    )),
                    this.dt.update(!0);
                }
                filter(t, e = !1) {
                  if (!this.settings[t]?.filter?.length) return;
                  const s = this._state.filters[t];
                  let i;
                  if (s) {
                    let e = !1;
                    i = this.settings[t].filter.find(
                      (t) => !!e || (t === s && (e = !0), !1)
                    );
                  } else {
                    const e = this.settings[t].filter;
                    i = e ? e[0] : void 0;
                  }
                  i
                    ? (this._state.filters[t] = i)
                    : s && (this._state.filters[t] = void 0),
                    (this.dt._currentPage = 1),
                    this.dt.update(),
                    e || this.dt.emit("datatable.filter", t, i);
                }
                sort(t, e, s = !1) {
                  const i = this.settings[t];
                  if ((s || this.dt.emit("datatable.sorting", t, e), !e)) {
                    const t = !!this._state.sort && this._state.sort?.dir,
                      s = i?.sortSequence || ["asc", "desc"];
                    if (t) {
                      const i = s.indexOf(t);
                      e =
                        -1 === i ? "asc" : i === s.length - 1 ? s[0] : s[i + 1];
                    } else e = s.length ? s[0] : "asc";
                  }
                  const n =
                    !!["string", "html"].includes(i.type) &&
                    new Intl.Collator(i.locale || this.dt.options.locale, {
                      usage: "sort",
                      numeric: i.numeric || this.dt.options.numeric,
                      caseFirst: i.caseFirst || this.dt.options.caseFirst,
                      ignorePunctuation:
                        i.ignorePunctuation ||
                        this.dt.options.ignorePunctuation,
                    });
                  this.dt.data.data.sort((s, i) => {
                    let a = s[t].order || s[t].data,
                      o = i[t].order || i[t].data;
                    if ("desc" === e) {
                      const t = a;
                      (a = o), (o = t);
                    }
                    return n
                      ? n.compare(String(a), String(o))
                      : a < o
                      ? -1
                      : a > o
                      ? 1
                      : 0;
                  }),
                    (this._state.sort = { column: t, dir: e }),
                    this.dt._searchQueries.length
                      ? (this.dt.multiSearch(this.dt._searchQueries),
                        this.dt.emit("datatable.sort", t, e))
                      : s ||
                        ((this.dt._currentPage = 1),
                        this.dt.update(),
                        this.dt.emit("datatable.sort", t, e));
                }
                _measureWidths() {
                  const t = this.dt.data.headings.filter(
                    (t, e) => !this.settings[e]?.hidden
                  );
                  if (
                    (this.dt.options.scrollY.length ||
                      this.dt.options.fixedColumns) &&
                    t?.length
                  ) {
                    this._state.widths = [];
                    const t = { noPaging: !0 };
                    if (this.dt.options.header || this.dt.options.footer) {
                      this.dt.options.scrollY.length && (t.unhideHeader = !0),
                        this.dt.headerDOM &&
                          this.dt.headerDOM.parentElement.removeChild(
                            this.dt.headerDOM
                          ),
                        (t.noColumnWidths = !0),
                        this.dt._renderTable(t);
                      const e = Array.from(
                        this.dt.dom
                          .querySelector("thead, tfoot")
                          ?.firstElementChild?.querySelectorAll("th") || []
                      );
                      let s = 0;
                      const i = this.dt.data.headings.map((t, i) => {
                          if (this.settings[i]?.hidden) return 0;
                          const n = e[s].offsetWidth;
                          return (s += 1), n;
                        }),
                        n = i.reduce((t, e) => t + e, 0);
                      this._state.widths = i.map((t) => (t / n) * 100);
                    } else {
                      (t.renderHeader = !0), this.dt._renderTable(t);
                      const e = Array.from(
                        this.dt.dom
                          .querySelector("thead, tfoot")
                          ?.firstElementChild?.querySelectorAll("th") || []
                      );
                      let s = 0;
                      const i = this.dt.data.headings.map((t, i) => {
                          if (this.settings[i]?.hidden) return 0;
                          const n = e[s].offsetWidth;
                          return (s += 1), n;
                        }),
                        n = i.reduce((t, e) => t + e, 0);
                      this._state.widths = i.map((t) => (t / n) * 100);
                    }
                    this.dt._renderTable();
                  }
                }
              }
              const X = {
                  sortable: false,
                  locale: "en",
                  numeric: !0,
                  caseFirst: "false",
                  searchable: !0,
                  sensitivity: "base",
                  ignorePunctuation: !0,
                  destroyable: !0,
                  data: {},
                  type: "html",
                  format: "YYYY-MM-DD",
                  columns: [],
                  paging: !0,
                  perPage: 10,
                  perPageSelect: [10, 20, 50],
                  nextPrev: !0,
                  firstLast: !1,
                  prevText: "‹",
                  nextText: "›",
                  firstText: "«",
                  lastText: "»",
                  ellipsisText: "…",
                  truncatePager: !0,
                  pagerDelta: 2,
                  scrollY: "",
                  fixedColumns: !0,
                  fixedHeight: !1,
                  footer: !1,
                  header: !0,
                  hiddenHeader: !1,
                  rowNavigation: !1,
                  tabIndex: !1,
                  pagerRender: !1,
                  rowRender: !1,
                  tableRender: !1,
                  labels: {
                    placeholder: "Search...",
                    searchTitle: "Search within table",
                    perPageStart: "顯示",
                    perPageEnd: "筆&nbsp;",
                    noRows: "資料庫錯誤，請嘗試縮小範圍。",
                    noResults: "查詢無結果",
                    info: "/ 共 {rows} 筆資料",
                  },
                  template: (t, e) =>
                    `<div class='${t.classes.container}'${
                      t.scrollY.length
                        ? ` style='height: ${t.scrollY}; overflow-Y: auto;'`
                        : ""
                    }></div>\n<div class='${t.classes.bottom}'>\n       ${
                      t.paging && t.perPageSelect
                        ? `<div class='${t.classes.dropdown}'>\n            <label>\n                ${t.labels.perPageStart}  <select class='${t.classes.selector}'></select> ${t.labels.perPageEnd}\n            </label>\n        </div>`
                        : ""
                    }\n${
                      t.paging ? `<div class='${t.classes.info}'></div>` : ""
                    }\n    <nav class='${t.classes.pagination}'></nav>\n</div>`,
                  classes: {
                    active: "datatable-active",
                    ascending: "datatable-ascending",
                    bottom: "datatable-bottom",
                    container: "datatable-container",
                    cursor: "datatable-cursor",
                    descending: "datatable-descending",
                    disabled: "datatable-disabled",
                    dropdown: "datatable-dropdown",
                    ellipsis: "datatable-ellipsis",
                    filter: "datatable-filter",
                    filterActive: "datatable-filter-active",
                    empty: "datatable-empty",
                    headercontainer: "datatable-headercontainer",
                    hidden: "datatable-hidden",
                    info: "datatable-info",
                    input: "datatable-input",
                    loading: "datatable-loading",
                    pagination: "datatable-pagination",
                    paginationList: "datatable-pagination-list",
                    paginationListItem: "datatable-pagination-list-item",
                    paginationListItemLink:
                      "datatable-pagination-list-item-link",
                    search: "datatable-search",
                    selector: "datatable-selector",
                    sorter: "datatable-sorter",
                    table: "datatable-table",
                    top: "datatable-top",
                    wrapper: "datatable-wrapper",
                  },
                },
                G = (t, e, s, i = {}) => ({
                  nodeName: "LI",
                  attributes: {
                    class:
                      i.active && !i.hidden
                        ? `${s.classes.paginationListItem} ${s.classes.active}`
                        : i.hidden
                        ? `${s.classes.paginationListItem} ${s.classes.hidden} ${s.classes.disabled}`
                        : s.classes.paginationListItem,
                  },
                  childNodes: [
                    {
                      nodeName: "A",
                      attributes: {
                        "data-page": String(t),
                        class: s.classes.paginationListItemLink,
                      },
                      childNodes: [{ nodeName: "#text", data: e }],
                    },
                  ],
                }),
                K = {
                  classes: {
                    row: "datatable-editor-row",
                    form: "datatable-editor-form",
                    item: "datatable-editor-item",
                    menu: "datatable-editor-menu",
                    save: "datatable-editor-save",
                    block: "datatable-editor-block",
                    close: "datatable-editor-close",
                    inner: "datatable-editor-inner",
                    input: "datatable-editor-input",
                    label: "datatable-editor-label",
                    modal: "datatable-editor-modal",
                    action: "datatable-editor-action",
                    header: "datatable-editor-header",
                    wrapper: "datatable-editor-wrapper",
                    editable: "datatable-editor-editable",
                    container: "datatable-editor-container",
                    separator: "datatable-editor-separator",
                  },
                  labels: {
                    editCell: "Edit Cell",
                    editRow: "Edit Row",
                    removeRow: "Remove Row",
                    reallyRemove: "Are you sure?",
                  },
                  inline: !0,
                  hiddenColumns: !1,
                  contextMenu: !0,
                  clickEvent: "dblclick",
                  excludeColumns: [],
                  menuItems: [
                    {
                      text: (t) => t.options.labels.editCell,
                      action: (t, e) => {
                        if (!(t.event.target instanceof Element)) return;
                        const s = t.event.target.closest("td");
                        return t.editCell(s);
                      },
                    },
                    {
                      text: (t) => t.options.labels.editRow,
                      action: (t, e) => {
                        if (!(t.event.target instanceof Element)) return;
                        const s = t.event.target.closest("tr");
                        return t.editRow(s);
                      },
                    },
                    { separator: !0 },
                    {
                      text: (t) => t.options.labels.removeRow,
                      action: (t, e) => {
                        if (
                          t.event.target instanceof Element &&
                          confirm(t.options.labels.reallyRemove)
                        ) {
                          const e = t.event.target.closest("tr");
                          t.removeRow(e);
                        }
                      },
                    },
                  ],
                };
              class tt {
                constructor(t, e = {}) {
                  (this.dt = t), (this.options = { ...K, ...e });
                }
                init() {
                  this.initialized ||
                    (this.dt.wrapperDOM.classList.add(
                      this.options.classes.editable
                    ),
                    this.options.inline &&
                      ((this.originalRowRender = this.dt.options.rowRender),
                      (this.dt.options.rowRender = (t, e, s) => {
                        let i = this.rowRender(t, e, s);
                        return (
                          this.originalRowRender &&
                            (i = this.originalRowRender(t, i, s)),
                          i
                        );
                      })),
                    this.options.contextMenu &&
                      ((this.containerDOM = n("div", {
                        id: this.options.classes.container,
                      })),
                      (this.wrapperDOM = n("div", {
                        class: this.options.classes.wrapper,
                      })),
                      (this.menuDOM = n("ul", {
                        class: this.options.classes.menu,
                      })),
                      this.options.menuItems &&
                        this.options.menuItems.length &&
                        this.options.menuItems.forEach((t) => {
                          const e = n("li", {
                            class: t.separator
                              ? this.options.classes.separator
                              : this.options.classes.item,
                          });
                          if (!t.separator) {
                            const s = n("a", {
                              class: this.options.classes.action,
                              href: t.url || "#",
                              html:
                                "function" == typeof t.text
                                  ? t.text(this)
                                  : t.text,
                            });
                            e.appendChild(s),
                              t.action &&
                                "function" == typeof t.action &&
                                s.addEventListener("click", (e) => {
                                  e.preventDefault(), t.action(this, e);
                                });
                          }
                          this.menuDOM.appendChild(e);
                        }),
                      this.wrapperDOM.appendChild(this.menuDOM),
                      this.containerDOM.appendChild(this.wrapperDOM),
                      this.update()),
                    (this.data = {}),
                    (this.closed = !0),
                    (this.editing = !1),
                    (this.editingRow = !1),
                    (this.editingCell = !1),
                    this.bindEvents(),
                    setTimeout(() => {
                      (this.initialized = !0), this.dt.emit("editable.init");
                    }, 10));
                }
                bindEvents() {
                  (this.events = {
                    context: this.context.bind(this),
                    update: this.update.bind(this),
                    dismiss: this.dismiss.bind(this),
                    keydown: this.keydown.bind(this),
                    click: this.click.bind(this),
                  }),
                    this.dt.dom.addEventListener(
                      this.options.clickEvent,
                      this.events.click
                    ),
                    document.addEventListener("click", this.events.dismiss),
                    document.addEventListener("keydown", this.events.keydown),
                    this.options.contextMenu &&
                      (this.dt.dom.addEventListener(
                        "contextmenu",
                        this.events.context
                      ),
                      (this.events.reset = (function (t, e = 300) {
                        let s;
                        return (...i) => {
                          clearTimeout(s),
                            (s = window.setTimeout(() => t(), e));
                        };
                      })(() => this.events.update(), 50)),
                      window.addEventListener("resize", this.events.reset),
                      window.addEventListener("scroll", this.events.reset));
                }
                context(t) {
                  const e = t.target;
                  if (!(e instanceof Element)) return;
                  this.event = t;
                  const s = e.closest("tbody td");
                  if (this.options.contextMenu && !this.disabled && s) {
                    t.preventDefault();
                    let e = t.pageX,
                      s = t.pageY;
                    e > this.limits.x && (e -= this.rect.width),
                      s > this.limits.y && (s -= this.rect.height),
                      (this.wrapperDOM.style.top = `${s}px`),
                      (this.wrapperDOM.style.left = `${e}px`),
                      this.openMenu(),
                      this.update();
                  }
                }
                click(t) {
                  const e = t.target;
                  if (e instanceof Element)
                    if (this.editing && this.data && this.editingCell) {
                      const t = this.modalDOM
                        ? this.modalDOM.querySelector(
                            `input.${this.options.classes.input}[type=text]`
                          )
                        : this.dt.wrapperDOM.querySelector(
                            `input.${this.options.classes.input}[type=text]`
                          );
                      this.saveCell(t.value);
                    } else if (!this.editing) {
                      const s = e.closest("tbody td");
                      s && (this.editCell(s), t.preventDefault());
                    }
                }
                keydown(t) {
                  if (this.modalDOM) {
                    if ("Escape" === t.key) this.closeModal();
                    else if ("Enter" === t.key)
                      if (this.editingCell) {
                        const t = this.modalDOM.querySelector(
                          `input.${this.options.classes.input}[type=text]`
                        );
                        this.saveCell(t.value);
                      } else {
                        const t = Array.from(
                          this.modalDOM.querySelectorAll(
                            `input.${this.options.classes.input}[type=text]`
                          )
                        );
                        this.saveRow(
                          t.map((t) => t.value.trim()),
                          this.data.row
                        );
                      }
                  } else if (this.editing && this.data)
                    if ("Enter" === t.key) {
                      if (this.editingCell) {
                        const t = this.dt.wrapperDOM.querySelector(
                          `input.${this.options.classes.input}[type=text]`
                        );
                        this.saveCell(t.value);
                      } else if (this.editingRow) {
                        const t = Array.from(
                          this.dt.wrapperDOM.querySelectorAll(
                            `input.${this.options.classes.input}[type=text]`
                          )
                        );
                        this.saveRow(
                          t.map((t) => t.value.trim()),
                          this.data.row
                        );
                      }
                    } else
                      "Escape" === t.key && this.saveCell(this.data.content);
                }
                editCell(t) {
                  const e = r(t.cellIndex, this.dt.columns.settings);
                  if (this.options.excludeColumns.includes(e))
                    return void this.closeMenu();
                  const s = parseInt(t.parentElement.dataset.index, 10),
                    i = this.dt.data.data[s][e];
                  (this.data = {
                    cell: i,
                    rowIndex: s,
                    columnIndex: e,
                    content: i.text || String(i.data),
                  }),
                    (this.editing = !0),
                    (this.editingCell = !0),
                    this.options.inline
                      ? this.dt.update()
                      : this.editCellModal(),
                    this.closeMenu();
                }
                editCellModal() {
                  const t = this.data.cell,
                    e = this.data.columnIndex,
                    s =
                      this.dt.data.headings[e].text ||
                      String(this.dt.data.headings[e].data),
                    i = [
                      `<div class='${this.options.classes.inner}'>`,
                      `<div class='${this.options.classes.header}'>`,
                      "<h4>Editing cell</h4>",
                      `<button class='${this.options.classes.close}' type='button' data-editor-close>×</button>`,
                      " </div>",
                      `<div class='${this.options.classes.block}'>`,
                      `<form class='${this.options.classes.form}'>`,
                      `<div class='${this.options.classes.row}'>`,
                      `<label class='${this.options.classes.label}'>${o(
                        s
                      )}</label>`,
                      `<input class='${this.options.classes.input}' value='${o(
                        t.text || String(t.data) || ""
                      )}' type='text'>`,
                      "</div>",
                      `<div class='${this.options.classes.row}'>`,
                      `<button class='${this.options.classes.save}' type='button' data-editor-save>Save</button>`,
                      "</div>",
                      "</form>",
                      "</div>",
                      "</div>",
                    ].join(""),
                    a = n("div", {
                      class: this.options.classes.modal,
                      html: i,
                    });
                  (this.modalDOM = a), this.openModal();
                  const r = a.querySelector(
                    `input.${this.options.classes.input}[type=text]`
                  );
                  r.focus(),
                    (r.selectionStart = r.selectionEnd = r.value.length),
                    a.addEventListener("click", (t) => {
                      const e = t.target;
                      e instanceof Element &&
                        (e.hasAttribute("data-editor-close")
                          ? this.closeModal()
                          : e.hasAttribute("data-editor-save") &&
                            this.saveCell(r.value));
                    });
                }
                saveCell(t) {
                  const e = this.data.content,
                    s =
                      this.dt.columns.settings[this.data.columnIndex].type ||
                      this.dt.options.type,
                    i = t.trim();
                  let n;
                  if ("number" === s) n = { data: parseFloat(i) };
                  else if ("boolean" === s)
                    n = ["", "false", "0"].includes(i)
                      ? { data: !1, text: "false", order: 0 }
                      : { data: !0, text: "true", order: 1 };
                  else if ("html" === s)
                    n = {
                      data: [{ nodeName: "#text", data: t }],
                      text: t,
                      order: t,
                    };
                  else if ("string" === s) n = { data: t };
                  else if ("date" === s) {
                    const e =
                      this.dt.columns.settings[this.data.columnIndex].format ||
                      this.dt.options.format;
                    n = { data: t, order: U(String(t), e) };
                  } else n = { data: t };
                  (this.dt.data.data[this.data.rowIndex][
                    this.data.columnIndex
                  ] = n),
                    this.closeModal();
                  const a = this.data.rowIndex,
                    o = this.data.columnIndex;
                  (this.data = {}),
                    this.dt.update(!0),
                    (this.editing = !1),
                    (this.editingCell = !1),
                    this.dt.emit("editable.save.cell", t, e, a, o);
                }
                editRow(t) {
                  if (!t || "TR" !== t.nodeName || this.editing) return;
                  const e = parseInt(t.dataset.index, 10),
                    s = this.dt.data.data[e];
                  (this.data = { row: s, rowIndex: e }),
                    (this.editing = !0),
                    (this.editingRow = !0),
                    this.options.inline
                      ? this.dt.update()
                      : this.editRowModal(),
                    this.closeMenu();
                }
                editRowModal() {
                  const t = this.data.row,
                    e = [
                      `<div class='${this.options.classes.inner}'>`,
                      `<div class='${this.options.classes.header}'>`,
                      "<h4>Editing row</h4>",
                      `<button class='${this.options.classes.close}' type='button' data-editor-close>×</button>`,
                      " </div>",
                      `<div class='${this.options.classes.block}'>`,
                      `<form class='${this.options.classes.form}'>`,
                      `<div class='${this.options.classes.row}'>`,
                      `<button class='${this.options.classes.save}' type='button' data-editor-save>Save</button>`,
                      "</div>",
                      "</form>",
                      "</div>",
                      "</div>",
                    ].join(""),
                    s = n("div", {
                      class: this.options.classes.modal,
                      html: e,
                    }),
                    i = s.firstElementChild;
                  if (!i) return;
                  const a = i.lastElementChild?.firstElementChild;
                  if (!a) return;
                  t.forEach((t, e) => {
                    const s = this.dt.columns.settings[e];
                    if (
                      (!s.hidden || (s.hidden && this.options.hiddenColumns)) &&
                      !this.options.excludeColumns.includes(e)
                    ) {
                      const s =
                        this.dt.data.headings[e].text ||
                        String(this.dt.data.headings[e].data);
                      a.insertBefore(
                        n("div", {
                          class: this.options.classes.row,
                          html: [
                            `<div class='${this.options.classes.row}'>`,
                            `<label class='${this.options.classes.label}'>${o(
                              s
                            )}</label>`,
                            `<input class='${
                              this.options.classes.input
                            }' value='${o(
                              t.text || String(t.data) || ""
                            )}' type='text'>`,
                            "</div>",
                          ].join(""),
                        }),
                        a.lastElementChild
                      );
                    }
                  }),
                    (this.modalDOM = s),
                    this.openModal();
                  const r = Array.from(
                    a.querySelectorAll(
                      `input.${this.options.classes.input}[type=text]`
                    )
                  );
                  r.pop(),
                    s.addEventListener("click", (t) => {
                      const e = t.target;
                      e instanceof Element &&
                        (e.hasAttribute("data-editor-close")
                          ? this.closeModal()
                          : e.hasAttribute("data-editor-save") &&
                            this.saveRow(
                              r.map((t) => t.value.trim()),
                              this.data.row
                            ));
                    });
                }
                saveRow(t, e) {
                  const s = e.map((t) => t.text ?? String(t.data));
                  (this.dt.data.data[this.data.rowIndex] = this.dt.data.data[
                    this.data.rowIndex
                  ].map((e, s) => {
                    if (
                      this.dt.columns.settings[s].hidden ||
                      this.options.excludeColumns.includes(s)
                    )
                      return e;
                    const i =
                        this.dt.columns.settings[s].type ||
                        this.dt.options.type,
                      n = t[l(s, this.dt.columns.settings)],
                      a = n.trim();
                    let o;
                    if ("number" === i) o = { data: parseFloat(a) };
                    else if ("boolean" === i)
                      o = ["", "false", "0"].includes(a)
                        ? { data: !1, text: "false", order: 0 }
                        : { data: !0, text: "true", order: 1 };
                    else if ("html" === i)
                      o = {
                        data: [{ nodeName: "#text", data: n }],
                        text: n,
                        order: n,
                      };
                    else if ("string" === i) o = { data: n };
                    else if ("date" === i) {
                      const t =
                        this.dt.columns.settings[s].format ||
                        this.dt.options.format;
                      o = { data: n, order: U(String(n), t) };
                    } else o = { data: n };
                    return o;
                  })),
                    (this.data = {}),
                    this.dt.update(!0),
                    this.closeModal(),
                    this.dt.emit("editable.save.row", t, s, e);
                }
                openModal() {
                  this.modalDOM && document.body.appendChild(this.modalDOM);
                }
                closeModal() {
                  this.editing &&
                    this.modalDOM &&
                    (document.body.removeChild(this.modalDOM),
                    (this.modalDOM =
                      this.editing =
                      this.editingRow =
                      this.editingCell =
                        !1));
                }
                removeRow(t) {
                  if (!t || "TR" !== t.nodeName || this.editing) return;
                  const e = parseInt(t.dataset.index, 10);
                  this.dt.rows.remove(e), this.closeMenu();
                }
                update() {
                  const t = window.scrollX || window.pageXOffset,
                    e = window.scrollY || window.pageYOffset;
                  (this.rect = this.wrapperDOM.getBoundingClientRect()),
                    (this.limits = {
                      x: window.innerWidth + t - this.rect.width,
                      y: window.innerHeight + e - this.rect.height,
                    });
                }
                dismiss(t) {
                  const e = t.target;
                  if (!(e instanceof Element)) return;
                  let s = !0;
                  this.options.contextMenu &&
                    ((s = !this.wrapperDOM.contains(e)),
                    this.editing &&
                      (s =
                        !this.wrapperDOM.contains(e) &&
                        !e.matches(
                          `input.${this.options.classes.input}[type=text]`
                        ))),
                    s &&
                      (this.editingCell && this.saveCell(this.data.content),
                      this.closeMenu());
                }
                openMenu() {
                  if (this.editing && this.data && this.editingCell) {
                    const t = this.modalDOM
                      ? this.modalDOM.querySelector(
                          `input.${this.options.classes.input}[type=text]`
                        )
                      : this.dt.wrapperDOM.querySelector(
                          `input.${this.options.classes.input}[type=text]`
                        );
                    this.saveCell(t.value);
                  }
                  this.options.contextMenu &&
                    (document.body.appendChild(this.containerDOM),
                    (this.closed = !1),
                    this.dt.emit("editable.context.open"));
                }
                closeMenu() {
                  this.options.contextMenu &&
                    !this.closed &&
                    ((this.closed = !0),
                    document.body.removeChild(this.containerDOM),
                    this.dt.emit("editable.context.close"));
                }
                destroy() {
                  this.dt.dom.removeEventListener(
                    this.options.clickEvent,
                    this.events.click
                  ),
                    this.dt.dom.removeEventListener(
                      "contextmenu",
                      this.events.context
                    ),
                    document.removeEventListener("click", this.events.dismiss),
                    document.removeEventListener(
                      "keydown",
                      this.events.keydown
                    ),
                    window.removeEventListener("resize", this.events.reset),
                    window.removeEventListener("scroll", this.events.reset),
                    document.body.contains(this.containerDOM) &&
                      document.body.removeChild(this.containerDOM),
                    this.options.inline &&
                      (this.dt.options.rowRender = this.originalRowRender),
                    (this.initialized = !1);
                }
                rowRender(t, e, s) {
                  return this.data && this.data.rowIndex === s
                    ? (this.editingCell
                        ? (e.childNodes[
                            l(this.data.columnIndex, this.dt.columns.settings)
                          ].childNodes = [
                            {
                              nodeName: "INPUT",
                              attributes: {
                                type: "text",
                                value: this.data.content,
                                class: this.options.classes.input,
                              },
                            },
                          ])
                        : e.childNodes.forEach((s, i) => {
                            const n = r(i, this.dt.columns.settings),
                              a = t[n];
                            this.options.excludeColumns.includes(n) ||
                              (e.childNodes[i].childNodes = [
                                {
                                  nodeName: "INPUT",
                                  attributes: {
                                    type: "text",
                                    value: o(a.text || String(a.data) || ""),
                                    class: this.options.classes.input,
                                  },
                                },
                              ]);
                          }),
                      e)
                    : e;
                }
              }
              (s.DataTable = class {
                constructor(t, e = {}) {
                  const s =
                    "string" == typeof t ? document.querySelector(t) : t;
                  s instanceof HTMLTableElement
                    ? (this.dom = s)
                    : ((this.dom = document.createElement("table")),
                      s.appendChild(this.dom));
                  const i = { ...X.labels, ...e.labels },
                    n = { ...X.classes, ...e.classes };
                  (this.options = { ...X, ...e, labels: i, classes: n }),
                    (this._initialInnerHTML = this.options.destroyable
                      ? this.dom.innerHTML
                      : ""),
                    this.options.tabIndex
                      ? (this.dom.tabIndex = this.options.tabIndex)
                      : this.options.rowNavigation &&
                        -1 === this.dom.tabIndex &&
                        (this.dom.tabIndex = 0),
                    (this._listeners = { onResize: () => this._onResize() }),
                    (this._dd = new P({ valueDiffing: !1 })),
                    (this.initialized = !1),
                    (this._events = {}),
                    (this._currentPage = 0),
                    (this.onFirstPage = !0),
                    (this.hasHeadings = !1),
                    (this.hasRows = !1),
                    (this._searchQueries = []),
                    this.init();
                }
                init() {
                  if (
                    this.initialized ||
                    this.dom.classList.contains(this.options.classes.table)
                  )
                    return !1;
                  (this._virtualDOM = E(this.dom, { valueDiffing: !1 })),
                    (this._tableAttributes = {
                      ...this._virtualDOM.attributes,
                    }),
                    (this.rows = new Q(this)),
                    (this.columns = new Z(this)),
                    (this.data = W(
                      this.options.data,
                      this.dom,
                      this.columns.settings,
                      this.options.type,
                      this.options.format
                    )),
                    this._render(),
                    setTimeout(() => {
                      this.emit("datatable.init"), (this.initialized = !0);
                    }, 10);
                }
                _render() {
                  (this.wrapperDOM = n("div", {
                    class: `${this.options.classes.wrapper} ${this.options.classes.loading}`,
                  })),
                    (this.wrapperDOM.innerHTML = this.options.template(
                      this.options,
                      this.dom
                    ));
                  const t = this.wrapperDOM.querySelector(
                    `select.${this.options.classes.selector}`
                  );
                  t && this.options.paging && this.options.perPageSelect
                    ? this.options.perPageSelect.forEach((e) => {
                        const [s, i] = Array.isArray(e)
                            ? [e[0], e[1]]
                            : [String(e), e],
                          n = i === this.options.perPage,
                          a = new Option(s, String(i), n, n);
                        t.appendChild(a);
                      })
                    : t && t.parentElement.removeChild(t),
                    (this.containerDOM = this.wrapperDOM.querySelector(
                      `.${this.options.classes.container}`
                    )),
                    (this._pagerDOMs = []),
                    Array.from(
                      this.wrapperDOM.querySelectorAll(
                        `.${this.options.classes.pagination}`
                      )
                    ).forEach((t) => {
                      t instanceof HTMLElement &&
                        ((t.innerHTML = `<ul class="${this.options.classes.paginationList}"></ul>`),
                        this._pagerDOMs.push(t.firstElementChild));
                    }),
                    (this._virtualPagerDOM = {
                      nodeName: "UL",
                      attributes: {
                        class: this.options.classes.paginationList,
                      },
                    }),
                    (this._label = this.wrapperDOM.querySelector(
                      `.${this.options.classes.info}`
                    )),
                    this.dom.parentElement.replaceChild(
                      this.wrapperDOM,
                      this.dom
                    ),
                    this.containerDOM.appendChild(this.dom),
                    (this._rect = this.dom.getBoundingClientRect()),
                    this._fixHeight(),
                    this.options.header ||
                      this.wrapperDOM.classList.add("no-header"),
                    this.options.footer ||
                      this.wrapperDOM.classList.add("no-footer"),
                    this.options.sortable &&
                      this.wrapperDOM.classList.add("sortable"),
                    this.options.searchable &&
                      this.wrapperDOM.classList.add("searchable"),
                    this.options.fixedHeight &&
                      this.wrapperDOM.classList.add("fixed-height"),
                    this.options.fixedColumns &&
                      this.wrapperDOM.classList.add("fixed-columns"),
                    this._bindEvents(),
                    this.columns._state.sort &&
                      this.columns.sort(
                        this.columns._state.sort.column,
                        this.columns._state.sort.dir,
                        !0
                      ),
                    this.update(!0);
                }
                _renderTable(t = {}) {
                  let e = R(
                    this._tableAttributes,
                    this.data.headings,
                    (this.options.paging || this._searchQueries.length) &&
                      this._currentPage &&
                      this.pages.length &&
                      !t.noPaging
                      ? this.pages[this._currentPage - 1]
                      : this.data.data.map((t, e) => ({ row: t, index: e })),
                    this.columns.settings,
                    this.columns._state,
                    this.rows.cursor,
                    this.options,
                    t
                  );
                  if (this.options.tableRender) {
                    const t = this.options.tableRender(this.data, e, "main");
                    t && (e = t);
                  }
                  const s = this._dd.diff(this._virtualDOM, e);
                  this._dd.apply(this.dom, s), (this._virtualDOM = e);
                }
                _renderPage(t = !1) {
                  this.hasRows && this.totalPages
                    ? (this._currentPage > this.totalPages &&
                        (this._currentPage = 1),
                      this._renderTable(),
                      (this.onFirstPage = 1 === this._currentPage),
                      (this.onLastPage = this._currentPage === this.lastPage))
                    : this.setMessage(this.options.labels.noRows);
                  let e,
                    s = 0,
                    i = 0,
                    n = 0;
                  if (
                    (this.totalPages &&
                      ((s = this._currentPage - 1),
                      (i = s * this.options.perPage),
                      (n = i + this.pages[s].length),
                      (i += 1),
                      (e = this._searchQueries.length
                        ? this._searchData.length
                        : this.data.data.length)),
                    this._label && this.options.labels.info.length)
                  ) {
                    const t = this.options.labels.info
                      .replace("{start}", String(i))
                      .replace("{end}", String(n))
                      .replace("{page}", String(this._currentPage))
                      .replace("{pages}", String(this.totalPages))
                      .replace("{rows}", String(e));
                    this._label.innerHTML = e ? t : "";
                  }
                  if (
                    (1 == this._currentPage && this._fixHeight(),
                    this.options.rowNavigation &&
                      this._currentPage &&
                      (!this.rows.cursor ||
                        !this.pages[this._currentPage - 1].find(
                          (t) => t.index === this.rows.cursor
                        )))
                  ) {
                    const e = this.pages[this._currentPage - 1];
                    e.length &&
                      (t
                        ? this.rows.setCursor(e[e.length - 1].index)
                        : this.rows.setCursor(e[0].index));
                  }
                }
                _renderPagers() {
                  if (!this.options.paging) return;
                  let t = ((t, e, s, i, n) => {
                    let a = [];
                    if (
                      (n.firstLast && a.push(G(1, n.firstText, n)), n.nextPrev)
                    ) {
                      const e = t ? 1 : s - 1;
                      a.push(G(e, n.prevText, n, { hidden: t }));
                    }
                    let o = [...Array(i).keys()].map((t) =>
                      G(t + 1, String(t + 1), n, { active: t === s - 1 })
                    );
                    if (
                      (n.truncatePager &&
                        (o = ((t, e, s, i) => {
                          const n = i.pagerDelta,
                            a = i.classes,
                            o = i.ellipsisText,
                            r = 2 * n;
                          let l = e - n,
                            d = e + n;
                          e < 4 - n + r
                            ? (d = 3 + r)
                            : e > s - (3 - n + r) && (l = s - (2 + r));
                          const c = [];
                          for (let e = 1; e <= s; e++)
                            if (1 == e || e == s || (e >= l && e <= d)) {
                              const s = t[e - 1];
                              c.push(s);
                            }
                          let h;
                          const u = [];
                          return (
                            c.forEach((e) => {
                              const s = parseInt(
                                e.childNodes[0].attributes["data-page"],
                                10
                              );
                              if (h) {
                                const e = parseInt(
                                  h.childNodes[0].attributes["data-page"],
                                  10
                                );
                                if (s - e == 2) u.push(t[e]);
                                else if (s - e != 1) {
                                  const t = {
                                    nodeName: "LI",
                                    attributes: {
                                      class: `${a.paginationListItem} ${a.ellipsis} ${a.disabled}`,
                                    },
                                    childNodes: [
                                      {
                                        nodeName: "A",
                                        attributes: {
                                          class: a.paginationListItemLink,
                                        },
                                        childNodes: [
                                          { nodeName: "#text", data: o },
                                        ],
                                      },
                                    ],
                                  };
                                  u.push(t);
                                }
                              }
                              u.push(e), (h = e);
                            }),
                            u
                          );
                        })(o, s, i, n)),
                      (a = a.concat(o)),
                      n.nextPrev)
                    ) {
                      const t = e ? i : s + 1;
                      a.push(G(t, n.nextText, n, { hidden: e }));
                    }
                    return (
                      n.firstLast && a.push(G(i, n.lastText, n)),
                      {
                        nodeName: "UL",
                        attributes: { class: n.classes.paginationList },
                        childNodes: o.length > 1 ? a : [],
                      }
                    );
                  })(
                    this.onFirstPage,
                    this.onLastPage,
                    this._currentPage,
                    this.totalPages,
                    this.options
                  );
                  if (this.options.pagerRender) {
                    const e = this.options.pagerRender(
                      [
                        this.onFirstPage,
                        this.onLastPage,
                        this._currentPage,
                        this.totalPages,
                      ],
                      t
                    );
                    e && (t = e);
                  }
                  const e = this._dd.diff(this._virtualPagerDOM, t);
                  this._pagerDOMs.forEach((t) => {
                    this._dd.apply(t, e);
                  }),
                    (this._virtualPagerDOM = t);
                }
                _renderSeparateHeader() {
                  const t = this.dom.parentElement;
                  this.headerDOM ||
                    ((this.headerDOM = document.createElement("div")),
                    (this._virtualHeaderDOM = { nodeName: "DIV" })),
                    t.parentElement.insertBefore(this.headerDOM, t);
                  let e = {
                    nodeName: "TABLE",
                    attributes: { class: this.options.classes.table },
                    childNodes: [
                      {
                        nodeName: "THEAD",
                        childNodes: [
                          H(
                            this.data.headings,
                            this.columns.settings,
                            this.columns._state,
                            this.options,
                            { unhideHeader: !0 }
                          ),
                        ],
                      },
                    ],
                  };
                  if (this.options.tableRender) {
                    const t = this.options.tableRender(this.data, e, "header");
                    t && (e = t);
                  }
                  const s = {
                      nodeName: "DIV",
                      attributes: {
                        class: this.options.classes.headercontainer,
                      },
                      childNodes: [e],
                    },
                    i = this._dd.diff(this._virtualHeaderDOM, s);
                  this._dd.apply(this.headerDOM, i),
                    (this._virtualHeaderDOM = s);
                  const n =
                    this.headerDOM.firstElementChild.clientWidth -
                    this.dom.clientWidth;
                  if (n) {
                    const t = structuredClone(this._virtualHeaderDOM);
                    t.attributes.style = `padding-right: ${n}px;`;
                    const e = this._dd.diff(this._virtualHeaderDOM, t);
                    this._dd.apply(this.headerDOM, e),
                      (this._virtualHeaderDOM = t);
                  }
                  t.scrollHeight > t.clientHeight &&
                    (t.style.overflowY = "scroll");
                }
                _bindEvents() {
                  if (this.options.perPageSelect) {
                    const t = this.wrapperDOM.querySelector(
                      `select.${this.options.classes.selector}`
                    );
                    t &&
                      t instanceof HTMLSelectElement &&
                      t.addEventListener(
                        "change",
                        () => {
                          (this.options.perPage = parseInt(t.value, 10)),
                            this.update(),
                            this._fixHeight(),
                            this.emit(
                              "datatable.perpage",
                              this.options.perPage
                            );
                        },
                        !1
                      );
                  }
                  this.options.searchable &&
                    this.wrapperDOM.addEventListener("keyup", (t) => {
                      const e = t.target;
                      if (
                        !(
                          e instanceof HTMLInputElement &&
                          e.matches(`.${this.options.classes.input}`)
                        )
                      )
                        return;
                      t.preventDefault();
                      const s = Array.from(
                        this.wrapperDOM.querySelectorAll(
                          `.${this.options.classes.input}`
                        )
                      )
                        .filter((t) => t.value.length)
                        .map((t) =>
                          t.dataset.columns
                            ? {
                                term: t.value,
                                columns: JSON.parse(t.dataset.columns),
                              }
                            : { term: t.value, columns: void 0 }
                        );
                      if (1 === s.length) {
                        const t = s[0];
                        this.search(t.term, t.columns);
                      } else this.multiSearch(s);
                    }),
                    this.wrapperDOM.addEventListener(
                      "click",
                      (t) => {
                        const e = t.target.closest("a");
                        if (e)
                          if (e.hasAttribute("data-page"))
                            this.page(
                              parseInt(e.getAttribute("data-page"), 10)
                            ),
                              t.preventDefault();
                          else if (
                            e.classList.contains(this.options.classes.sorter)
                          ) {
                            const s = Array.from(
                                e.parentElement.parentElement.children
                              ).indexOf(e.parentElement),
                              i = r(s, this.columns.settings);
                            this.columns.sort(i), t.preventDefault();
                          } else if (
                            e.classList.contains(this.options.classes.filter)
                          ) {
                            const s = Array.from(
                                e.parentElement.parentElement.children
                              ).indexOf(e.parentElement),
                              i = r(s, this.columns.settings);
                            this.columns.filter(i), t.preventDefault();
                          }
                      },
                      !1
                    ),
                    this.options.rowNavigation
                      ? (this.dom.addEventListener("keydown", (t) => {
                          if ("ArrowUp" === t.key) {
                            let e;
                            t.preventDefault(),
                              t.stopPropagation(),
                              this.pages[this._currentPage - 1].find(
                                (t) =>
                                  t.index === this.rows.cursor || ((e = t), !1)
                              ),
                              e
                                ? this.rows.setCursor(e.index)
                                : this.onFirstPage ||
                                  this.page(this._currentPage - 1, !0);
                          } else if ("ArrowDown" === t.key) {
                            let e;
                            t.preventDefault(), t.stopPropagation();
                            const s = this.pages[this._currentPage - 1].find(
                              (t) =>
                                !!e ||
                                (t.index === this.rows.cursor && (e = !0), !1)
                            );
                            s
                              ? this.rows.setCursor(s.index)
                              : this.onLastPage ||
                                this.page(this._currentPage + 1);
                          } else
                            ["Enter", " "].includes(t.key) &&
                              this.emit(
                                "datatable.selectrow",
                                this.rows.cursor,
                                t
                              );
                        }),
                        this.dom.addEventListener("mousedown", (t) => {
                          const e = t.target;
                          if (
                            e instanceof Element &&
                            this.dom.matches(":focus")
                          ) {
                            const s = Array.from(
                              this.dom.querySelectorAll("body tr")
                            ).find((t) => t.contains(e));
                            s &&
                              s instanceof HTMLElement &&
                              this.emit(
                                "datatable.selectrow",
                                parseInt(s.dataset.index, 10),
                                t
                              );
                          }
                        }))
                      : this.dom.addEventListener("mousedown", (t) => {
                          const e = t.target;
                          if (!(e instanceof Element)) return;
                          const s = Array.from(
                            this.dom.querySelectorAll("body tr")
                          ).find((t) => t.contains(e));
                          s &&
                            s instanceof HTMLElement &&
                            this.emit(
                              "datatable.selectrow",
                              parseInt(s.dataset.index, 10),
                              t
                            );
                        }),
                    window.addEventListener("resize", this._listeners.onResize);
                }
                _onResize() {
                  (this._rect = this.containerDOM.getBoundingClientRect()),
                    this._rect.width && this.update(!0);
                }
                destroy() {
                  this.options.destroyable &&
                    ((this.dom.innerHTML = this._initialInnerHTML),
                    this.dom.classList.remove(this.options.classes.table),
                    this.wrapperDOM.parentElement &&
                      this.wrapperDOM.parentElement.replaceChild(
                        this.dom,
                        this.wrapperDOM
                      ),
                    (this.initialized = !1),
                    window.removeEventListener(
                      "resize",
                      this._listeners.onResize
                    ));
                }
                update(t = !1) {
                  t &&
                    (this.columns._measureWidths(),
                    (this.hasRows = Boolean(this.data.data.length)),
                    (this.hasHeadings = Boolean(this.data.headings.length))),
                    this.wrapperDOM.classList.remove(
                      this.options.classes.empty
                    ),
                    this._paginate(),
                    this._renderPage(),
                    this._renderPagers(),
                    this.options.scrollY.length && this._renderSeparateHeader(),
                    this.emit("datatable.update");
                }
                _paginate() {
                  let t = this.data.data.map((t, e) => ({ row: t, index: e }));
                  return (
                    this._searchQueries.length &&
                      ((t = []),
                      this._searchData.forEach((e) =>
                        t.push({ index: e, row: this.data.data[e] })
                      )),
                    this.columns._state.filters.length &&
                      this.columns._state.filters.forEach((e, s) => {
                        e &&
                          (t = t.filter((t) =>
                            "function" == typeof e
                              ? e(t.row[s].data)
                              : (t.row[s].text ?? t.row[s].data) === e
                          ));
                      }),
                    this.options.paging && this.options.perPage > 0
                      ? (this.pages = t
                          .map((e, s) =>
                            s % this.options.perPage == 0
                              ? t.slice(s, s + this.options.perPage)
                              : null
                          )
                          .filter((t) => t))
                      : (this.pages = [t]),
                    (this.totalPages = this.lastPage = this.pages.length),
                    this._currentPage || (this._currentPage = 1),
                    this.totalPages
                  );
                }
                _fixHeight() {
                  this.options.fixedHeight &&
                    ((this.containerDOM.style.height = null),
                    (this._rect = this.containerDOM.getBoundingClientRect()),
                    (this.containerDOM.style.height = `${this._rect.height}px`));
                }
                search(t, e) {
                  if (!t.length)
                    return (
                      (this._currentPage = 1),
                      (this._searchQueries = []),
                      (this._searchData = []),
                      this.update(),
                      this.emit("datatable.search", "", []),
                      this.wrapperDOM.classList.remove("search-results"),
                      !1
                    );
                  this.multiSearch([{ term: t, columns: e || void 0 }]),
                    this.emit("datatable.search", t, this._searchData);
                }
                multiSearch(t) {
                  if (!this.hasRows) return !1;
                  if (
                    ((this._currentPage = 1),
                    (this._searchQueries = t),
                    (this._searchData = []),
                    !(t = t.filter((t) => t.term.length)).length)
                  )
                    return (
                      this.update(),
                      this.emit("datatable.multisearch", t, this._searchData),
                      this.wrapperDOM.classList.remove("search-results"),
                      !1
                    );
                  const e = t.map((t) =>
                    this.columns.settings.map((e, s) => {
                      if (
                        e.hidden ||
                        !e.searchable ||
                        (t.columns && !t.columns.includes(s))
                      )
                        return !1;
                      let i = t.term;
                      const n = e.sensitivity || this.options.sensitivity;
                      return (
                        ["base", "accent"].includes(n) && (i = i.toLowerCase()),
                        ["base", "case"].includes(n) &&
                          (i = i
                            .normalize("NFD")
                            .replace(/\p{Diacritic}/gu, "")),
                        (e.ignorePunctuation ||
                          this.options.ignorePunctuation) &&
                          (i = i.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "")),
                        i
                      );
                    })
                  );
                  this.data.data.forEach((t, s) => {
                    const i = t.map((t, e) => {
                      let s = (t.text || String(t.data)).trim();
                      if (s.length) {
                        const t = this.columns.settings[e],
                          i = t.sensitivity || this.options.sensitivity;
                        ["base", "accent"].includes(i) && (s = s.toLowerCase()),
                          ["base", "case"].includes(i) &&
                            (s = s
                              .normalize("NFD")
                              .replace(/\p{Diacritic}/gu, "")),
                          (t.ignorePunctuation ||
                            this.options.ignorePunctuation) &&
                            (s = s.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, ""));
                      }
                      return s;
                    });
                    e.every((t) =>
                      t.find(
                        (t, e) =>
                          !!t && t.split(" ").find((t) => i[e].includes(t))
                      )
                    ) && this._searchData.push(s);
                  }),
                    this.wrapperDOM.classList.add("search-results"),
                    this._searchData.length
                      ? this.update()
                      : (this.wrapperDOM.classList.remove("search-results"),
                        this.setMessage(this.options.labels.noResults)),
                    this.emit("datatable.multisearch", t, this._searchData);
                }
                page(t, e = !1) {
                  return (
                    t !== this._currentPage &&
                    (isNaN(t) || (this._currentPage = t),
                    !(t > this.pages.length || t < 0) &&
                      (this._renderPage(e),
                      this._renderPagers(),
                      void this.emit("datatable.page", t)))
                  );
                }
                insert(t) {
                  let s = [];
                  if (Array.isArray(t)) {
                    const e = this.data.headings.map(
                      (t) => t.text ?? String(t.data)
                    );
                    t.forEach((t, i) => {
                      const n = [];
                      Object.entries(t).forEach(([t, s]) => {
                        const a = e.indexOf(t);
                        a > -1
                          ? (n[a] = z(s, this.columns.settings[a]))
                          : this.hasHeadings ||
                            this.hasRows ||
                            0 !== i ||
                            ((n[e.length] = z(
                              s,
                              this.columns.settings[e.length]
                            )),
                            e.push(t),
                            this.data.headings.push(J(t)));
                      }),
                        s.push(n);
                    });
                  } else
                    e(t) &&
                      (!t.headings || this.hasHeadings || this.hasRows
                        ? t.data &&
                          Array.isArray(t.data) &&
                          (s = t.data.map((t) =>
                            t.map((t, e) => z(t, this.columns.settings[e]))
                          ))
                        : (this.data = W(
                            t,
                            void 0,
                            this.columns.settings,
                            this.options.type,
                            this.options.format
                          )));
                  s.length && s.forEach((t) => this.data.data.push(t)),
                    (this.hasHeadings = Boolean(this.data.headings.length)),
                    this.columns._state.sort &&
                      this.columns.sort(
                        this.columns._state.sort.column,
                        this.columns._state.sort.dir,
                        !0
                      ),
                    this.update(!0);
                }
                refresh() {
                  this.options.searchable &&
                    (Array.from(
                      this.wrapperDOM.querySelectorAll(
                        `.${this.options.classes.input}`
                      )
                    ).forEach((t) => {
                      t.value = "";
                    }),
                    (this._searchQueries = [])),
                    (this._currentPage = 1),
                    (this.onFirstPage = !0),
                    this.update(!0),
                    this.emit("datatable.refresh");
                }
                print() {
                  const t = n("table");
                  let e = R(
                    this._tableAttributes,
                    this.data.headings,
                    this.data.data.map((t, e) => ({ row: t, index: e })),
                    this.columns.settings,
                    this.columns._state,
                    !1,
                    this.options,
                    { noColumnWidths: !0, unhideHeader: !0 }
                  );
                  if (this.options.tableRender) {
                    const t = this.options.tableRender(this.data, e, "print");
                    t && (e = t);
                  }
                  const s = this._dd.diff({ nodeName: "TABLE" }, e);
                  this._dd.apply(t, s);
                  const i = window.open();
                  i.document.body.appendChild(t), i.print();
                }
                setMessage(t) {
                  const e =
                    this.data.headings.filter(
                      (t, e) => !this.columns.settings[e]?.hidden
                    ).length || 1;
                  this.wrapperDOM.classList.add(this.options.classes.empty),
                    this._label && (this._label.innerHTML = ""),
                    (this.totalPages = 0),
                    this._renderPagers();
                  let s = {
                    nodeName: "TABLE",
                    attributes: { class: this.options.classes.table },
                    childNodes: [
                      {
                        nodeName: "THEAD",
                        childNodes: [
                          H(
                            this.data.headings,
                            this.columns.settings,
                            this.columns._state,
                            this.options,
                            {}
                          ),
                        ],
                      },
                      {
                        nodeName: "TBODY",
                        childNodes: [
                          {
                            nodeName: "TR",
                            childNodes: [
                              {
                                nodeName: "TD",
                                attributes: {
                                  class: this.options.classes.empty,
                                  colspan: String(e),
                                },
                                childNodes: [{ nodeName: "#text", data: t }],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  };
                  if (this.options.tableRender) {
                    const t = this.options.tableRender(this.data, s, "message");
                    t && (s = t);
                  }
                  const i = this._dd.diff(this._virtualDOM, s);
                  this._dd.apply(this.dom, i), (this._virtualDOM = s);
                }
                on(t, e) {
                  (this._events[t] = this._events[t] || []),
                    this._events[t].push(e);
                }
                off(t, e) {
                  t in this._events != 0 &&
                    this._events[t].splice(this._events[t].indexOf(e), 1);
                }
                emit(t, ...e) {
                  if (t in this._events != 0)
                    for (let s = 0; s < this._events[t].length; s++)
                      this._events[t][s](...e);
                }
              }),
                (s.convertCSV = function (t) {
                  let s;
                  if (!e(t)) return !1;
                  const i = {
                    lineDelimiter: "\n",
                    columnDelimiter: ",",
                    removeDoubleQuotes: !1,
                    ...t,
                  };
                  if (i.data.length) {
                    s = { data: [] };
                    const t = i.data.split(i.lineDelimiter);
                    if (
                      (t.length &&
                        (i.headings &&
                          ((s.headings = t[0].split(i.columnDelimiter)),
                          i.removeDoubleQuotes &&
                            (s.headings = s.headings.map((t) =>
                              t.trim().replace(/(^"|"$)/g, "")
                            )),
                          t.shift()),
                        t.forEach((t, e) => {
                          s.data[e] = [];
                          const n = t.split(i.columnDelimiter);
                          n.length &&
                            n.forEach((t) => {
                              i.removeDoubleQuotes &&
                                (t = t.trim().replace(/(^"|"$)/g, "")),
                                s.data[e].push(t);
                            });
                        })),
                      s)
                    )
                      return s;
                  }
                  return !1;
                }),
                (s.convertJSON = function (t) {
                  let s;
                  if (!e(t)) return !1;
                  const n = { data: "", ...t };
                  if (n.data.length || e(n.data)) {
                    const t = !!i(n.data) && JSON.parse(n.data);
                    if (
                      (t
                        ? ((s = { headings: [], data: [] }),
                          t.forEach((t, e) => {
                            (s.data[e] = []),
                              Object.entries(t).forEach(([t, i]) => {
                                s.headings.includes(t) || s.headings.push(t),
                                  s.data[e].push(i);
                              });
                          }))
                        : console.warn("That's not valid JSON!"),
                      s)
                    )
                      return s;
                  }
                  return !1;
                }),
                (s.createElement = n),
                (s.exportCSV = function (t, s = {}) {
                  if (!t.hasHeadings && !t.hasRows) return !1;
                  if (!e(s)) return !1;
                  const i = {
                      download: !0,
                      skipColumn: [],
                      lineDelimiter: "\n",
                      columnDelimiter: ",",
                      ...s,
                    },
                    n = (e) =>
                      !i.skipColumn.includes(e) &&
                      !t.columns.settings[e]?.hidden;
                  let a = [];
                  const o = t.data.headings
                    .filter((t, e) => n(e))
                    .map((t) => t.text ?? t.data);
                  if (((a[0] = o), i.selection))
                    if (Array.isArray(i.selection))
                      for (let e = 0; e < i.selection.length; e++)
                        a = a.concat(
                          t.pages[i.selection[e] - 1].map((t) =>
                            t.row
                              .filter((t, e) => n(e))
                              .map((t) => t.text ?? t.data)
                          )
                        );
                    else
                      a = a.concat(
                        t.pages[i.selection - 1].map((t) =>
                          t.row
                            .filter((t, e) => n(e))
                            .map((t) => t.text ?? t.data)
                        )
                      );
                  else
                    a = a.concat(
                      t.data.data.map((t) =>
                        t.filter((t, e) => n(e)).map((t) => t.text ?? t.data)
                      )
                    );
                  if (a.length) {
                    let t = "";
                    if (
                      (a.forEach((e) => {
                        e.forEach((e) => {
                          "string" == typeof e &&
                            (e = (e = (e = (e = (e = e.trim()).replace(
                              /\s{2,}/g,
                              " "
                            )).replace(/\n/g, "  ")).replace(
                              /"/g,
                              '""'
                            )).replace(/#/g, "%23")).includes(",") &&
                            (e = `"${e}"`),
                            (t += e + i.columnDelimiter);
                        }),
                          (t = t.trim().substring(0, t.length - 1)),
                          (t += i.lineDelimiter);
                      }),
                      (t = t.trim().substring(0, t.length - 1)),
                      i.download)
                    ) {
                      const e = document.createElement("a");
                      (e.href = encodeURI(`data:text/csv;charset=utf-8,${t}`)),
                        (e.download = `${
                          i.filename || "datatable_export"
                        }.csv`),
                        document.body.appendChild(e),
                        e.click(),
                        document.body.removeChild(e);
                    }
                    return t;
                  }
                  return !1;
                }),
                (s.exportJSON = function (t, s = {}) {
                  if (!t.hasHeadings && !t.hasRows) return !1;
                  if (!e(s)) return !1;
                  const i = {
                      download: !0,
                      skipColumn: [],
                      replacer: null,
                      space: 4,
                      ...s,
                    },
                    n = (e) =>
                      !i.skipColumn.includes(e) &&
                      !t.columns.settings[e]?.hidden;
                  let a = [];
                  if (i.selection)
                    if (Array.isArray(i.selection))
                      for (let e = 0; e < i.selection.length; e++)
                        a = a.concat(
                          t.pages[i.selection[e] - 1].map((t) =>
                            t.row.filter((t, e) => n(e)).map((t) => t.data)
                          )
                        );
                    else
                      a = a.concat(
                        t.pages[i.selection - 1].map((t) =>
                          t.row.filter((t, e) => n(e)).map((t) => t.data)
                        )
                      );
                  else
                    a = a.concat(
                      t.data.data.map((t) =>
                        t.filter((t, e) => n(e)).map((t) => t.data)
                      )
                    );
                  const o = t.data.headings
                    .filter((t, e) => n(e))
                    .map((t) => t.text ?? String(t.data));
                  if (a.length) {
                    const t = [];
                    a.forEach((e, s) => {
                      (t[s] = t[s] || {}),
                        e.forEach((e, i) => {
                          t[s][o[i]] = e;
                        });
                    });
                    const e = JSON.stringify(t, i.replacer, i.space);
                    if (i.download) {
                      const t = new Blob([e], {
                          type: "data:application/json;charset=utf-8",
                        }),
                        s = URL.createObjectURL(t),
                        n = document.createElement("a");
                      (n.href = s),
                        (n.download = `${
                          i.filename || "datatable_export"
                        }.json`),
                        document.body.appendChild(n),
                        n.click(),
                        document.body.removeChild(n),
                        URL.revokeObjectURL(s);
                    }
                    return e;
                  }
                  return !1;
                }),
                (s.exportSQL = function (t, s = {}) {
                  if (!t.hasHeadings && !t.hasRows) return !1;
                  if (!e(s)) return !1;
                  const i = {
                      download: !0,
                      skipColumn: [],
                      tableName: "myTable",
                      ...s,
                    },
                    n = (e) =>
                      !i.skipColumn.includes(e) &&
                      !t.columns.settings[e]?.hidden;
                  let a = [];
                  if (i.selection)
                    if (Array.isArray(i.selection))
                      for (let e = 0; e < i.selection.length; e++)
                        a = a.concat(
                          t.pages[i.selection[e] - 1].map((t) =>
                            t.row
                              .filter((t, e) => n(e))
                              .map((t) => t.text ?? t.data)
                          )
                        );
                    else
                      a = a.concat(
                        t.pages[i.selection - 1].map((t) =>
                          t.row
                            .filter((t, e) => n(e))
                            .map((t) => t.text ?? t.data)
                        )
                      );
                  else
                    a = a.concat(
                      t.data.data.map((t) =>
                        t.filter((t, e) => n(e)).map((t) => t.data)
                      )
                    );
                  const o = t.data.headings
                    .filter((t, e) => n(e))
                    .map((t) => t.text ?? String(t.data));
                  if (a.length) {
                    let t = `INSERT INTO \`${i.tableName}\` (`;
                    if (
                      (o.forEach((e) => {
                        t += `\`${e}\`,`;
                      }),
                      (t = t.trim().substring(0, t.length - 1)),
                      (t += ") VALUES "),
                      a.forEach((e) => {
                        (t += "("),
                          e.forEach((e) => {
                            t += "string" == typeof e ? `"${e}",` : `${e},`;
                          }),
                          (t = t.trim().substring(0, t.length - 1)),
                          (t += "),");
                      }),
                      (t = t.trim().substring(0, t.length - 1)),
                      (t += ";"),
                      i.download &&
                        (t = `data:application/sql;charset=utf-8,${t}`),
                      i.download)
                    ) {
                      const e = document.createElement("a");
                      (e.href = encodeURI(t)),
                        (e.download = `${
                          i.filename || "datatable_export"
                        }.sql`),
                        document.body.appendChild(e),
                        e.click(),
                        document.body.removeChild(e);
                    }
                    return t;
                  }
                  return !1;
                }),
                (s.exportTXT = function (t, s = {}) {
                  if (!t.hasHeadings && !t.hasRows) return !1;
                  if (!e(s)) return !1;
                  const i = {
                      download: !0,
                      skipColumn: [],
                      lineDelimiter: "\n",
                      columnDelimiter: ",",
                      ...s,
                    },
                    n = (e) =>
                      !i.skipColumn.includes(e) &&
                      !t.columns.settings[e]?.hidden;
                  let a = [];
                  const o = t.data.headings
                    .filter((t, e) => n(e))
                    .map((t) => t.text ?? t.data);
                  if (((a[0] = o), i.selection))
                    if (Array.isArray(i.selection))
                      for (let e = 0; e < i.selection.length; e++)
                        a = a.concat(
                          t.pages[i.selection[e] - 1].map((t) =>
                            t.row.filter((t, e) => n(e)).map((t) => t.data)
                          )
                        );
                    else
                      a = a.concat(
                        t.pages[i.selection - 1].map((t) =>
                          t.row.filter((t, e) => n(e)).map((t) => t.data)
                        )
                      );
                  else
                    a = a.concat(
                      t.data.data.map((t) =>
                        t.filter((t, e) => n(e)).map((t) => t.data)
                      )
                    );
                  if (a.length) {
                    let t = "";
                    if (
                      (a.forEach((e) => {
                        e.forEach((e) => {
                          "string" == typeof e &&
                            (e = (e = (e = (e = (e = e.trim()).replace(
                              /\s{2,}/g,
                              " "
                            )).replace(/\n/g, "  ")).replace(
                              /"/g,
                              '""'
                            )).replace(/#/g, "%23")).includes(",") &&
                            (e = `"${e}"`),
                            (t += e + i.columnDelimiter);
                        }),
                          (t = t.trim().substring(0, t.length - 1)),
                          (t += i.lineDelimiter);
                      }),
                      (t = t.trim().substring(0, t.length - 1)),
                      i.download && (t = `data:text/csv;charset=utf-8,${t}`),
                      i.download)
                    ) {
                      const e = document.createElement("a");
                      (e.href = encodeURI(t)),
                        (e.download = `${
                          i.filename || "datatable_export"
                        }.txt`),
                        document.body.appendChild(e),
                        e.click(),
                        document.body.removeChild(e);
                    }
                    return t;
                  }
                  return !1;
                }),
                (s.isJson = i),
                (s.isObject = e),
                (s.makeEditable = function (t, e = {}) {
                  const s = new tt(t, e);
                  return (
                    t.initialized
                      ? s.init()
                      : t.on("datatable.init", () => s.init()),
                    s
                  );
                });
            }).call(this);
          }).call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
//# sourceMappingURL=/sm/9490ccdb15ed3f73f41907981ba6976a7eb8c04244b21bfbf7fc57777a8a8b9a.map
