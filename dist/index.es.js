import { createElementBlock as k, openBlock as w, createElementVNode as Z, Fragment as N, renderList as $e, defineComponent as me, useTemplateRef as se, createCommentVNode as ee, createBlock as L, withModifiers as Se, resolveDynamicComponent as _, normalizeClass as T, computed as F, ref as W, shallowRef as vt, watch as ue, getCurrentScope as mt, onScopeDispose as ht, shallowReadonly as ce, unref as R, inject as Te, withKeys as gt, renderSlot as yt, mergeModels as Ve, useModel as Qe, onMounted as bt, onBeforeUnmount as wt, normalizeStyle as xt, withCtx as Ot, createTextVNode as le, toDisplayString as de, createVNode as et, useSlots as St, useAttrs as Ct, provide as He, mergeProps as At, Teleport as Mt } from "vue";
const J = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
}, kt = {}, Rt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function Dt(e, t) {
  return w(), k("svg", Rt, [...t[0] || (t[0] = [
    Z("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const Lt = /* @__PURE__ */ J(kt, [["render", Dt]]), Et = {}, Tt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function Vt(e, t) {
  return w(), k("svg", Tt, [...t[0] || (t[0] = [
    Z("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }, null, -1)
  ])]);
}
const tt = /* @__PURE__ */ J(Et, [["render", Vt]]), Bt = {}, It = { className: "spinner" };
function $t(e, t) {
  return w(), k("div", It, [
    (w(), k(N, null, $e(12, (o) => Z("div", {
      key: o,
      class: "spinner-circle"
    })), 64))
  ]);
}
const Pt = /* @__PURE__ */ J(Bt, [["render", $t], ["__scopeId", "data-v-ed866313"]]), Ft = {
  ref: "container",
  class: "indicators-container"
}, Nt = ["disabled"], Wt = ["disabled"], _t = /* @__PURE__ */ me({
  __name: "Indicators",
  props: {
    hasSelectedOption: { type: Boolean },
    isMenuOpen: { type: Boolean },
    isClearable: { type: Boolean },
    isLoading: { type: Boolean },
    isDisabled: { type: Boolean },
    slots: {}
  },
  emits: ["clear", "toggle"],
  setup(e, { expose: t, emit: o }) {
    const n = e, i = o, s = se("container"), l = se("clearButton"), a = se("dropdownButton");
    return t({ containerRef: s, clearButtonRef: l, dropdownButtonRef: a }), (c, u) => (w(), k("div", Ft, [
      e.hasSelectedOption && e.isClearable && !e.isLoading ? (w(), k("button", {
        key: 0,
        ref: "clearButton",
        type: "button",
        class: "clear-button",
        disabled: e.isDisabled,
        onClick: u[0] || (u[0] = Se((d) => i("clear"), ["stop"]))
      }, [
        n.slots.clear ? (w(), L(_(n.slots.clear), { key: 0 })) : (w(), L(tt, { key: 1 }))
      ], 8, Nt)) : ee("", !0),
      e.isLoading ? ee("", !0) : (w(), k("button", {
        key: 1,
        ref: "dropdownButton",
        type: "button",
        class: T(["dropdown-icon", { active: e.isMenuOpen }]),
        disabled: e.isDisabled,
        onClick: u[1] || (u[1] = Se((d) => i("toggle"), ["stop"]))
      }, [
        n.slots.dropdown ? (w(), L(_(n.slots.dropdown), { key: 0 })) : (w(), L(Lt, { key: 1 }))
      ], 10, Wt)),
      n.slots.loading ? (w(), L(_(n.slots.loading), { key: 2 })) : (w(), k(N, { key: 3 }, [
        e.isLoading ? (w(), L(Pt, { key: 0 })) : ee("", !0)
      ], 64))
    ], 512));
  }
}), Ht = /* @__PURE__ */ J(_t, [["__scopeId", "data-v-2d0f5223"]]), nt = /* @__PURE__ */ Symbol("props"), Pe = /* @__PURE__ */ Symbol("data");
let zt = 0;
function jt() {
  return ++zt;
}
const pe = Math.min, I = Math.max, Ce = Math.round, Oe = Math.floor, q = (e) => ({
  x: e,
  y: e
}), qt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ut = {
  start: "end",
  end: "start"
};
function ze(e, t, o) {
  return I(e, pe(t, o));
}
function be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function te(e) {
  return e.split("-")[0];
}
function we(e) {
  return e.split("-")[1];
}
function ot(e) {
  return e === "x" ? "y" : "x";
}
function it(e) {
  return e === "y" ? "height" : "width";
}
const Xt = /* @__PURE__ */ new Set(["top", "bottom"]);
function G(e) {
  return Xt.has(te(e)) ? "y" : "x";
}
function lt(e) {
  return ot(G(e));
}
function Kt(e, t, o) {
  o === void 0 && (o = !1);
  const n = we(e), i = lt(e), s = it(i);
  let l = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = Ae(l)), [l, Ae(l)];
}
function Yt(e) {
  const t = Ae(e);
  return [Be(e), t, Be(t)];
}
function Be(e) {
  return e.replace(/start|end/g, (t) => Ut[t]);
}
const je = ["left", "right"], qe = ["right", "left"], Zt = ["top", "bottom"], Gt = ["bottom", "top"];
function Jt(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? qe : je : t ? je : qe;
    case "left":
    case "right":
      return t ? Zt : Gt;
    default:
      return [];
  }
}
function Qt(e, t, o, n) {
  const i = we(e);
  let s = Jt(te(e), o === "start", n);
  return i && (s = s.map((l) => l + "-" + i), t && (s = s.concat(s.map(Be)))), s;
}
function Ae(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qt[t]);
}
function en(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function tn(e) {
  return typeof e != "number" ? en(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Me(e) {
  const {
    x: t,
    y: o,
    width: n,
    height: i
  } = e;
  return {
    width: n,
    height: i,
    top: o,
    left: t,
    right: t + n,
    bottom: o + i,
    x: t,
    y: o
  };
}
function Ue(e, t, o) {
  let {
    reference: n,
    floating: i
  } = e;
  const s = G(t), l = lt(t), a = it(l), c = te(t), u = s === "y", d = n.x + n.width / 2 - i.width / 2, m = n.y + n.height / 2 - i.height / 2, r = n[a] / 2 - i[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: m
      };
      break;
    case "left":
      p = {
        x: n.x - i.width,
        y: m
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (we(t)) {
    case "start":
      p[l] -= r * (o && u ? -1 : 1);
      break;
    case "end":
      p[l] += r * (o && u ? -1 : 1);
      break;
  }
  return p;
}
async function nn(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: s,
    rects: l,
    elements: a,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: r = !1,
    padding: p = 0
  } = be(t, e), f = tn(p), b = a[r ? m === "floating" ? "reference" : "floating" : m], y = Me(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(b))) == null || o ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), g = m === "floating" ? {
    x: n,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(O)) ? await (s.getScale == null ? void 0 : s.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = Me(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: g,
    offsetParent: O,
    strategy: c
  }) : g);
  return {
    top: (y.top - A.top + f.top) / S.y,
    bottom: (A.bottom - y.bottom + f.bottom) / S.y,
    left: (y.left - A.left + f.left) / S.x,
    right: (A.right - y.right + f.right) / S.x
  };
}
const on = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: l
  } = o, a = s.filter(Boolean), c = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: m
  } = Ue(u, n, c), r = n, p = {}, f = 0;
  for (let b = 0; b < a.length; b++) {
    var v;
    const {
      name: y,
      fn: g
    } = a[b], {
      x: O,
      y: S,
      data: A,
      reset: D
    } = await g({
      x: d,
      y: m,
      initialPlacement: n,
      placement: r,
      strategy: i,
      middlewareData: p,
      rects: u,
      platform: {
        ...l,
        detectOverflow: (v = l.detectOverflow) != null ? v : nn
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, m = S ?? m, p = {
      ...p,
      [y]: {
        ...p[y],
        ...A
      }
    }, D && f <= 50 && (f++, typeof D == "object" && (D.placement && (r = D.placement), D.rects && (u = D.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : D.rects), {
      x: d,
      y: m
    } = Ue(u, r, c)), b = -1);
  }
  return {
    x: d,
    y: m,
    placement: r,
    strategy: i,
    middlewareData: p
  };
}, ln = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: i,
        middlewareData: s,
        rects: l,
        initialPlacement: a,
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: m = !0,
        fallbackPlacements: r,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: v = !0,
        ...b
      } = be(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const y = te(i), g = G(a), O = te(a) === a, S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), A = r || (O || !v ? [Ae(a)] : Yt(a)), D = f !== "none";
      !r && D && A.push(...Qt(a, v, f, S));
      const C = [a, ...A], E = await c.detectOverflow(t, b), V = [];
      let P = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && V.push(E[y]), m) {
        const Y = Kt(i, l, S);
        V.push(E[Y[0]], E[Y[1]]);
      }
      if (P = [...P, {
        placement: i,
        overflows: V
      }], !V.every((Y) => Y <= 0)) {
        var K, Q;
        const Y = (((K = s.flip) == null ? void 0 : K.index) || 0) + 1, he = C[Y];
        if (he && (!(m === "alignment" ? g !== G(he) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((x) => G(x.placement) === g ? x.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Y,
              overflows: P
            },
            reset: {
              placement: he
            }
          };
        let ie = (Q = P.filter((h) => h.overflows[0] <= 0).sort((h, x) => h.overflows[1] - x.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!ie)
          switch (p) {
            case "bestFit": {
              var oe;
              const h = (oe = P.filter((x) => {
                if (D) {
                  const M = G(x.placement);
                  return M === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((x) => [x.placement, x.overflows.filter((M) => M > 0).reduce((M, B) => M + B, 0)]).sort((x, M) => x[1] - M[1])[0]) == null ? void 0 : oe[0];
              h && (ie = h);
              break;
            }
            case "initialPlacement":
              ie = a;
              break;
          }
        if (i !== ie)
          return {
            reset: {
              placement: ie
            }
          };
      }
      return {};
    }
  };
}, sn = /* @__PURE__ */ new Set(["left", "top"]);
async function an(e, t) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), l = te(o), a = we(o), c = G(o) === "y", u = sn.has(l) ? -1 : 1, d = s && c ? -1 : 1, m = be(t, e);
  let {
    mainAxis: r,
    crossAxis: p,
    alignmentAxis: f
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return a && typeof f == "number" && (p = a === "end" ? f * -1 : f), c ? {
    x: p * d,
    y: r * u
  } : {
    x: r * u,
    y: p * d
  };
}
const rn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: i,
        y: s,
        placement: l,
        middlewareData: a
      } = t, c = await an(t, e);
      return l === ((o = a.offset) == null ? void 0 : o.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: i + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: l
        }
      };
    }
  };
}, cn = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: n,
        placement: i,
        platform: s
      } = t, {
        mainAxis: l = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: g,
              y: O
            } = y;
            return {
              x: g,
              y: O
            };
          }
        },
        ...u
      } = be(e, t), d = {
        x: o,
        y: n
      }, m = await s.detectOverflow(t, u), r = G(te(i)), p = ot(r);
      let f = d[p], v = d[r];
      if (l) {
        const y = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", O = f + m[y], S = f - m[g];
        f = ze(O, f, S);
      }
      if (a) {
        const y = r === "y" ? "top" : "left", g = r === "y" ? "bottom" : "right", O = v + m[y], S = v - m[g];
        v = ze(O, v, S);
      }
      const b = c.fn({
        ...t,
        [p]: f,
        [r]: v
      });
      return {
        ...b,
        data: {
          x: b.x - o,
          y: b.y - n,
          enabled: {
            [p]: l,
            [r]: a
          }
        }
      };
    }
  };
}, un = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: i,
        rects: s,
        platform: l,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...u
      } = be(e, t), d = await l.detectOverflow(t, u), m = te(i), r = we(i), p = G(i) === "y", {
        width: f,
        height: v
      } = s.floating;
      let b, y;
      m === "top" || m === "bottom" ? (b = m, y = r === (await (l.isRTL == null ? void 0 : l.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = m, b = r === "end" ? "top" : "bottom");
      const g = v - d.top - d.bottom, O = f - d.left - d.right, S = pe(v - d[b], g), A = pe(f - d[y], O), D = !t.middlewareData.shift;
      let C = S, E = A;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (E = O), (n = t.middlewareData.shift) != null && n.enabled.y && (C = g), D && !r) {
        const P = I(d.left, 0), K = I(d.right, 0), Q = I(d.top, 0), oe = I(d.bottom, 0);
        p ? E = f - 2 * (P !== 0 || K !== 0 ? P + K : I(d.left, d.right)) : C = v - 2 * (Q !== 0 || oe !== 0 ? Q + oe : I(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const V = await l.getDimensions(a.floating);
      return f !== V.width || v !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ke() {
  return typeof window < "u";
}
function re(e) {
  return Fe(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
  var t;
  return (t = (Fe(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Fe(e) {
  return ke() ? e instanceof Node || e instanceof $(e).Node : !1;
}
function H(e) {
  return ke() ? e instanceof Element || e instanceof $(e).Element : !1;
}
function U(e) {
  return ke() ? e instanceof HTMLElement || e instanceof $(e).HTMLElement : !1;
}
function Xe(e) {
  return !ke() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $(e).ShadowRoot;
}
const dn = /* @__PURE__ */ new Set(["inline", "contents"]);
function xe(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: i
  } = z(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !dn.has(i);
}
const fn = /* @__PURE__ */ new Set(["table", "td", "th"]);
function pn(e) {
  return fn.has(re(e));
}
const vn = [":popover-open", ":modal"];
function Re(e) {
  return vn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const mn = ["transform", "translate", "scale", "rotate", "perspective"], hn = ["transform", "translate", "scale", "rotate", "perspective", "filter"], gn = ["paint", "layout", "strict", "content"];
function Ne(e) {
  const t = We(), o = H(e) ? z(e) : e;
  return mn.some((n) => o[n] ? o[n] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || hn.some((n) => (o.willChange || "").includes(n)) || gn.some((n) => (o.contain || "").includes(n));
}
function yn(e) {
  let t = ne(e);
  for (; U(t) && !ve(t); ) {
    if (Ne(t))
      return t;
    if (Re(t))
      return null;
    t = ne(t);
  }
  return null;
}
function We() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const bn = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ve(e) {
  return bn.has(re(e));
}
function z(e) {
  return $(e).getComputedStyle(e);
}
function De(e) {
  return H(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ne(e) {
  if (re(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xe(e) && e.host || // Fallback.
    X(e)
  );
  return Xe(t) ? t.host : t;
}
function st(e) {
  const t = ne(e);
  return ve(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : U(t) && xe(t) ? t : st(t);
}
function ye(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const i = st(e), s = i === ((n = e.ownerDocument) == null ? void 0 : n.body), l = $(i);
  if (s) {
    const a = Ie(l);
    return t.concat(l, l.visualViewport || [], xe(i) ? i : [], a && o ? ye(a) : []);
  }
  return t.concat(i, ye(i, [], o));
}
function Ie(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function at(e) {
  const t = z(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = U(e), s = i ? e.offsetWidth : o, l = i ? e.offsetHeight : n, a = Ce(o) !== s || Ce(n) !== l;
  return a && (o = s, n = l), {
    width: o,
    height: n,
    $: a
  };
}
function _e(e) {
  return H(e) ? e : e.contextElement;
}
function fe(e) {
  const t = _e(e);
  if (!U(t))
    return q(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: s
  } = at(t);
  let l = (s ? Ce(o.width) : o.width) / n, a = (s ? Ce(o.height) : o.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: l,
    y: a
  };
}
const wn = /* @__PURE__ */ q(0);
function rt(e) {
  const t = $(e);
  return !We() || !t.visualViewport ? wn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xn(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== $(e) ? !1 : t;
}
function ae(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const i = e.getBoundingClientRect(), s = _e(e);
  let l = q(1);
  t && (n ? H(n) && (l = fe(n)) : l = fe(e));
  const a = xn(s, o, n) ? rt(s) : q(0);
  let c = (i.left + a.x) / l.x, u = (i.top + a.y) / l.y, d = i.width / l.x, m = i.height / l.y;
  if (s) {
    const r = $(s), p = n && H(n) ? $(n) : n;
    let f = r, v = Ie(f);
    for (; v && n && p !== f; ) {
      const b = fe(v), y = v.getBoundingClientRect(), g = z(v), O = y.left + (v.clientLeft + parseFloat(g.paddingLeft)) * b.x, S = y.top + (v.clientTop + parseFloat(g.paddingTop)) * b.y;
      c *= b.x, u *= b.y, d *= b.x, m *= b.y, c += O, u += S, f = $(v), v = Ie(f);
    }
  }
  return Me({
    width: d,
    height: m,
    x: c,
    y: u
  });
}
function Le(e, t) {
  const o = De(e).scrollLeft;
  return t ? t.left + o : ae(X(e)).left + o;
}
function ct(e, t) {
  const o = e.getBoundingClientRect(), n = o.left + t.scrollLeft - Le(e, o), i = o.top + t.scrollTop;
  return {
    x: n,
    y: i
  };
}
function On(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: i
  } = e;
  const s = i === "fixed", l = X(n), a = t ? Re(t.floating) : !1;
  if (n === l || a && s)
    return o;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = q(1);
  const d = q(0), m = U(n);
  if ((m || !m && !s) && ((re(n) !== "body" || xe(l)) && (c = De(n)), U(n))) {
    const p = ae(n);
    u = fe(n), d.x = p.x + n.clientLeft, d.y = p.y + n.clientTop;
  }
  const r = l && !m && !s ? ct(l, c) : q(0);
  return {
    width: o.width * u.x,
    height: o.height * u.y,
    x: o.x * u.x - c.scrollLeft * u.x + d.x + r.x,
    y: o.y * u.y - c.scrollTop * u.y + d.y + r.y
  };
}
function Sn(e) {
  return Array.from(e.getClientRects());
}
function Cn(e) {
  const t = X(e), o = De(e), n = e.ownerDocument.body, i = I(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = I(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -o.scrollLeft + Le(e);
  const a = -o.scrollTop;
  return z(n).direction === "rtl" && (l += I(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
const Ke = 25;
function An(e, t) {
  const o = $(e), n = X(e), i = o.visualViewport;
  let s = n.clientWidth, l = n.clientHeight, a = 0, c = 0;
  if (i) {
    s = i.width, l = i.height;
    const d = We();
    (!d || d && t === "fixed") && (a = i.offsetLeft, c = i.offsetTop);
  }
  const u = Le(n);
  if (u <= 0) {
    const d = n.ownerDocument, m = d.body, r = getComputedStyle(m), p = d.compatMode === "CSS1Compat" && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0, f = Math.abs(n.clientWidth - m.clientWidth - p);
    f <= Ke && (s -= f);
  } else u <= Ke && (s += u);
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
const Mn = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function kn(e, t) {
  const o = ae(e, !0, t === "fixed"), n = o.top + e.clientTop, i = o.left + e.clientLeft, s = U(e) ? fe(e) : q(1), l = e.clientWidth * s.x, a = e.clientHeight * s.y, c = i * s.x, u = n * s.y;
  return {
    width: l,
    height: a,
    x: c,
    y: u
  };
}
function Ye(e, t, o) {
  let n;
  if (t === "viewport")
    n = An(e, o);
  else if (t === "document")
    n = Cn(X(e));
  else if (H(t))
    n = kn(t, o);
  else {
    const i = rt(e);
    n = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Me(n);
}
function ut(e, t) {
  const o = ne(e);
  return o === t || !H(o) || ve(o) ? !1 : z(o).position === "fixed" || ut(o, t);
}
function Rn(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = ye(e, [], !1).filter((a) => H(a) && re(a) !== "body"), i = null;
  const s = z(e).position === "fixed";
  let l = s ? ne(e) : e;
  for (; H(l) && !ve(l); ) {
    const a = z(l), c = Ne(l);
    !c && a.position === "fixed" && (i = null), (s ? !c && !i : !c && a.position === "static" && !!i && Mn.has(i.position) || xe(l) && !c && ut(e, l)) ? n = n.filter((d) => d !== l) : i = a, l = ne(l);
  }
  return t.set(e, n), n;
}
function Dn(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: i
  } = e;
  const l = [...o === "clippingAncestors" ? Re(t) ? [] : Rn(t, this._c) : [].concat(o), n], a = l[0], c = l.reduce((u, d) => {
    const m = Ye(t, d, i);
    return u.top = I(m.top, u.top), u.right = pe(m.right, u.right), u.bottom = pe(m.bottom, u.bottom), u.left = I(m.left, u.left), u;
  }, Ye(t, a, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ln(e) {
  const {
    width: t,
    height: o
  } = at(e);
  return {
    width: t,
    height: o
  };
}
function En(e, t, o) {
  const n = U(t), i = X(t), s = o === "fixed", l = ae(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = q(0);
  function u() {
    c.x = Le(i);
  }
  if (n || !n && !s)
    if ((re(t) !== "body" || xe(i)) && (a = De(t)), n) {
      const p = ae(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else i && u();
  s && !n && i && u();
  const d = i && !n && !s ? ct(i, a) : q(0), m = l.left + a.scrollLeft - c.x - d.x, r = l.top + a.scrollTop - c.y - d.y;
  return {
    x: m,
    y: r,
    width: l.width,
    height: l.height
  };
}
function Ee(e) {
  return z(e).position === "static";
}
function Ze(e, t) {
  if (!U(e) || z(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return X(e) === o && (o = o.ownerDocument.body), o;
}
function dt(e, t) {
  const o = $(e);
  if (Re(e))
    return o;
  if (!U(e)) {
    let i = ne(e);
    for (; i && !ve(i); ) {
      if (H(i) && !Ee(i))
        return i;
      i = ne(i);
    }
    return o;
  }
  let n = Ze(e, t);
  for (; n && pn(n) && Ee(n); )
    n = Ze(n, t);
  return n && ve(n) && Ee(n) && !Ne(n) ? o : n || yn(e) || o;
}
const Tn = async function(e) {
  const t = this.getOffsetParent || dt, o = this.getDimensions, n = await o(e.floating);
  return {
    reference: En(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Vn(e) {
  return z(e).direction === "rtl";
}
const Bn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: On,
  getDocumentElement: X,
  getClippingRect: Dn,
  getOffsetParent: dt,
  getElementRects: Tn,
  getClientRects: Sn,
  getDimensions: Ln,
  getScale: fe,
  isElement: H,
  isRTL: Vn
};
function ft(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function In(e, t) {
  let o = null, n;
  const i = X(e);
  function s() {
    var a;
    clearTimeout(n), (a = o) == null || a.disconnect(), o = null;
  }
  function l(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: m,
      width: r,
      height: p
    } = u;
    if (a || t(), !r || !p)
      return;
    const f = Oe(m), v = Oe(i.clientWidth - (d + r)), b = Oe(i.clientHeight - (m + p)), y = Oe(d), O = {
      rootMargin: -f + "px " + -v + "px " + -b + "px " + -y + "px",
      threshold: I(0, pe(1, c)) || 1
    };
    let S = !0;
    function A(D) {
      const C = D[0].intersectionRatio;
      if (C !== c) {
        if (!S)
          return l();
        C ? l(!1, C) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !ft(u, e.getBoundingClientRect()) && l(), S = !1;
    }
    try {
      o = new IntersectionObserver(A, {
        ...O,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(A, O);
    }
    o.observe(e);
  }
  return l(!0), s;
}
function $n(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, u = _e(e), d = i || s ? [...u ? ye(u) : [], ...ye(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", o, {
      passive: !0
    }), s && y.addEventListener("resize", o);
  });
  const m = u && a ? In(u, o) : null;
  let r = -1, p = null;
  l && (p = new ResizeObserver((y) => {
    let [g] = y;
    g && g.target === u && p && (p.unobserve(t), cancelAnimationFrame(r), r = requestAnimationFrame(() => {
      var O;
      (O = p) == null || O.observe(t);
    })), o();
  }), u && !c && p.observe(u), p.observe(t));
  let f, v = c ? ae(e) : null;
  c && b();
  function b() {
    const y = ae(e);
    v && !ft(v, y) && o(), v = y, f = requestAnimationFrame(b);
  }
  return o(), () => {
    var y;
    d.forEach((g) => {
      i && g.removeEventListener("scroll", o), s && g.removeEventListener("resize", o);
    }), m?.(), (y = p) == null || y.disconnect(), p = null, c && cancelAnimationFrame(f);
  };
}
const Pn = rn, Fn = cn, Nn = ln, Wn = un, _n = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Bn,
    ...o
  }, s = {
    ...i.platform,
    _c: n
  };
  return on(e, t, {
    ...i,
    platform: s
  });
};
function Hn(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ge(e) {
  if (Hn(e)) {
    const t = e.$el;
    return Fe(t) && re(t) === "#comment" ? null : t;
  }
  return e;
}
function ge(e) {
  return typeof e == "function" ? e() : R(e);
}
function pt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Je(e, t) {
  const o = pt(e);
  return Math.round(t * o) / o;
}
function zn(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, i = F(() => {
    var C;
    return (C = ge(o.open)) != null ? C : !0;
  }), s = F(() => ge(o.middleware)), l = F(() => {
    var C;
    return (C = ge(o.placement)) != null ? C : "bottom";
  }), a = F(() => {
    var C;
    return (C = ge(o.strategy)) != null ? C : "absolute";
  }), c = F(() => {
    var C;
    return (C = ge(o.transform)) != null ? C : !0;
  }), u = F(() => Ge(e.value)), d = F(() => Ge(t.value)), m = W(0), r = W(0), p = W(a.value), f = W(l.value), v = vt({}), b = W(!1), y = F(() => {
    const C = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return C;
    const E = Je(d.value, m.value), V = Je(d.value, r.value);
    return c.value ? {
      ...C,
      transform: "translate(" + E + "px, " + V + "px)",
      ...pt(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: E + "px",
      top: V + "px"
    };
  });
  let g;
  function O() {
    if (u.value == null || d.value == null)
      return;
    const C = i.value;
    _n(u.value, d.value, {
      middleware: s.value,
      placement: l.value,
      strategy: a.value
    }).then((E) => {
      m.value = E.x, r.value = E.y, p.value = E.strategy, f.value = E.placement, v.value = E.middlewareData, b.value = C !== !1;
    });
  }
  function S() {
    typeof g == "function" && (g(), g = void 0);
  }
  function A() {
    if (S(), n === void 0) {
      O();
      return;
    }
    if (u.value != null && d.value != null) {
      g = n(u.value, d.value, O);
      return;
    }
  }
  function D() {
    i.value || (b.value = !1);
  }
  return ue([s, l, a, i], O, {
    flush: "sync"
  }), ue([u, d], A, {
    flush: "sync"
  }), ue(i, D, {
    flush: "sync"
  }), mt() && ht(S), {
    x: ce(m),
    y: ce(r),
    strategy: ce(p),
    placement: ce(f),
    middlewareData: ce(v),
    isPositioned: ce(b),
    floatingStyles: y,
    update: O
  };
}
const jn = ["aria-disabled", "aria-selected"], qn = /* @__PURE__ */ me({
  __name: "MenuOption",
  props: {
    menu: {},
    index: {},
    isFocused: { type: Boolean },
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, i = Te(Pe), s = () => {
      !o.isDisabled && i?.setFocusedOption && i.setFocusedOption(o.index);
    }, l = W(null);
    return ue(
      () => o.isFocused,
      () => {
        if (o.isFocused && o.menu) {
          const a = o.menu.children[o.index], c = a.offsetTop, u = c + a.clientHeight, d = o.menu.scrollTop, m = o.menu.clientHeight;
          c < d ? o.menu.scrollTop = c : u > d + m && (o.menu.scrollTop = u - m);
        }
      }
    ), (a, c) => (w(), k("div", {
      ref_key: "option",
      ref: l,
      class: T(["menu-option", { focused: e.isFocused, selected: e.isSelected, disabled: e.isDisabled }]),
      role: "option",
      "aria-disabled": e.isDisabled,
      "aria-selected": e.isSelected,
      onMousedown: c[0] || (c[0] = Se(() => {
      }, ["prevent"])),
      onClick: c[1] || (c[1] = (u) => n("select")),
      onKeydown: c[2] || (c[2] = gt((u) => n("select"), ["enter"])),
      onMouseenter: s
    }, [
      yt(a.$slots, "default", {}, void 0, !0)
    ], 42, jn));
  }
}), Un = /* @__PURE__ */ J(qn, [["__scopeId", "data-v-c02f5942"]]), Xn = ["id", "aria-label", "aria-multiselectable", "data-state-position"], Kn = /* @__PURE__ */ me({
  __name: "Menu",
  props: /* @__PURE__ */ Ve({
    slots: {},
    rootClass: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = Qe(e, "modelValue"), n = Te(nt), i = Te(Pe), s = se("menu"), { floatingStyles: l, placement: a } = zn(i.containerRef, s, {
      whileElementsMounted: $n,
      placement: "bottom-start",
      middleware: [
        Nn(),
        Pn(5),
        Fn(),
        Wn({
          apply({ elements: r, rects: p }) {
            Object.assign(r.floating.style, {
              width: `${Math.max(0, p.reference.width)}px`
            });
          }
        })
      ]
    }), c = (r) => {
      if (i.menuOpen.value) {
        const p = i.focusedOption.value;
        if (r.key === "ArrowDown") {
          r.preventDefault();
          const v = i.availableOptions.value.findIndex((y, g) => !y.disabled && g > p), b = i.availableOptions.value.findIndex((y) => !y.disabled);
          i.focusedOption.value = v === -1 ? b : v;
        }
        if (r.key === "ArrowUp") {
          r.preventDefault();
          const v = i.availableOptions.value.reduce(
            (y, g, O) => !g.disabled && O < p ? O : y,
            -1
          ), b = i.availableOptions.value.reduce(
            (y, g, O) => g.disabled ? y : O,
            -1
          );
          i.focusedOption.value = v === -1 ? b : v;
        }
        if (r.key === "Enter") {
          const v = i.availableOptions.value[p];
          r.preventDefault(), v ? i.setOption(v) : n.isTaggable && i.search.value && i.createOption();
        }
        if (r.code === "Space" && i.search.value.length === 0) {
          const v = i.availableOptions.value[p];
          r.preventDefault(), v && i.setOption(v);
        }
        if (r.key === "Escape" && (r.preventDefault(), i.closeMenu()), r.key === "PageDown") {
          r.preventDefault();
          const v = i.availableOptions.value.reduce(
            (b, y, g) => y.disabled ? b : g,
            -1
          );
          i.focusedOption.value = v;
        }
        if (r.key === "PageUp") {
          r.preventDefault();
          const v = i.availableOptions.value.findIndex((b) => !b.disabled);
          i.focusedOption.value = v;
        }
        const f = n.isMulti && Array.isArray(o.value) ? o.value.length > 0 : !!o.value;
        if (r.key === "Backspace" && i.search.value.length === 0 && f)
          if (r.preventDefault(), n.isMulti) {
            const v = i.selectedOptions.value, b = v[v.length - 1];
            b && i.removeOption(b);
          } else {
            const v = i.selectedOptions.value[0];
            v && i.removeOption(v);
          }
      }
    }, u = (r) => {
      const p = r.target, f = i.containerRef.value && i.containerRef.value.contains(p), v = s.value && s.value.contains(p), b = p?.getAttribute?.("role") === "option";
      !f && !v && !b && i.closeMenu();
    }, d = () => {
      i.isPointerDownInMenu.value = !0;
    }, m = () => {
      i.isPointerDownInMenu.value = !1;
    };
    return bt(() => {
      document.addEventListener("keydown", c), document.addEventListener("click", u), document.addEventListener("pointerup", m), document.addEventListener("pointercancel", m);
    }), wt(() => {
      document.removeEventListener("keydown", c), document.removeEventListener("click", u), document.removeEventListener("pointerup", m), document.removeEventListener("pointercancel", m);
    }), (r, p) => (w(), k("div", {
      id: `vue-select-${R(n).uid}-listbox`,
      ref: "menu",
      class: T(["menu", [R(n).classes?.menuContainer, t.rootClass]]),
      role: "listbox",
      "aria-label": R(n).aria?.labelledby,
      "aria-multiselectable": R(n).isMulti,
      "data-state-position": R(a),
      style: xt({
        ...R(l)
      }),
      onPointerdown: d
    }, [
      t.slots["menu-header"] ? (w(), L(_(t.slots["menu-header"]), { key: 0 })) : ee("", !0),
      (w(!0), k(N, null, $e(R(i).availableOptions.value, (f, v) => (w(), L(Un, {
        key: v,
        type: "button",
        menu: s.value,
        index: v,
        "is-focused": R(i).focusedOption.value === v,
        "is-selected": Array.isArray(o.value) ? o.value.includes(f.value) : f.value === o.value,
        "is-disabled": f.disabled || !1,
        class: T(R(n).classes?.menuOption),
        onSelect: (b) => R(i).setOption(f)
      }, {
        default: Ot(() => [
          t.slots.option ? (w(), L(_(t.slots.option), {
            key: 0,
            option: f,
            index: v,
            "is-focused": R(i).focusedOption.value === v,
            "is-selected": Array.isArray(o.value) ? o.value.includes(f.value) : f.value === o.value,
            "is-disabled": f.disabled || !1
          }, null, 8, ["option", "index", "is-focused", "is-selected", "is-disabled"])) : R(n).getOptionLabel ? (w(), k(N, { key: 1 }, [
            le(de(R(n).getOptionLabel(f)), 1)
          ], 64)) : (w(), k(N, { key: 2 }, [
            le(de(f.label), 1)
          ], 64))
        ]),
        _: 2
      }, 1032, ["menu", "index", "is-focused", "is-selected", "is-disabled", "class", "onSelect"]))), 128)),
      !R(n).isTaggable && R(i).availableOptions.value.length === 0 ? (w(), k("div", {
        key: 1,
        class: T(["no-results", R(n).classes?.noResults])
      }, [
        t.slots["no-options"] ? (w(), L(_(t.slots["no-options"]), { key: 0 })) : (w(), k(N, { key: 1 }, [
          le(" No results found ")
        ], 64))
      ], 2)) : ee("", !0),
      R(n).isTaggable && R(i).search.value ? (w(), k("div", {
        key: 2,
        class: T(["taggable-no-options", R(n).classes?.taggableNoOptions]),
        onClick: p[0] || (p[0] = //@ts-ignore
        (...f) => R(i).createOption && R(i).createOption(...f))
      }, [
        t.slots["taggable-no-options"] ? (w(), L(_(t.slots["taggable-no-options"]), {
          key: 0,
          option: R(i).search.value
        }, null, 8, ["option"])) : (w(), k(N, { key: 1 }, [
          le(" Press enter to add " + de(R(i).search.value) + " option ", 1)
        ], 64))
      ], 2)) : ee("", !0)
    ], 46, Xn));
  }
}), Yn = /* @__PURE__ */ J(Kn, [["__scopeId", "data-v-51bf3ffa"]]), Zn = ["aria-label"], Gn = /* @__PURE__ */ me({
  __name: "MultiValue",
  props: {
    label: {},
    option: {},
    classes: {},
    tagContentSlot: { type: Function }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    return (i, s) => (w(), k("div", {
      class: T(["multi-value", o.classes?.multiValue])
    }, [
      Z("div", {
        class: T(["multi-value-label", o.classes?.multiValueLabel])
      }, [
        o.tagContentSlot ? (w(), L(_(o.tagContentSlot), {
          key: 0,
          option: o.option
        }, null, 8, ["option"])) : (w(), k(N, { key: 1 }, [
          le(de(o.label), 1)
        ], 64))
      ], 2),
      Z("button", {
        type: "button",
        class: T(["multi-value-remove", o.classes?.multiValueRemove]),
        "aria-label": `Remove ${o.label}`,
        onClick: s[0] || (s[0] = Se((l) => n("remove"), ["stop"]))
      }, [
        et(tt)
      ], 10, Zn)
    ], 2));
  }
}), Jn = /* @__PURE__ */ J(Gn, [["__scopeId", "data-v-ba5b83d4"]]), Qn = { class: "input-placeholder" }, eo = /* @__PURE__ */ me({
  __name: "Placeholder",
  props: {
    text: {},
    placeholderSlot: { type: Function }
  },
  setup(e) {
    return (t, o) => (w(), k("div", Qn, [
      e.placeholderSlot ? (w(), L(_(e.placeholderSlot), { key: 0 })) : (w(), k(N, { key: 1 }, [
        le(de(e.text), 1)
      ], 64))
    ]));
  }
}), to = /* @__PURE__ */ J(eo, [["__scopeId", "data-v-d650edcf"]]), no = ["data-state"], oo = ["id", "aria-expanded", "aria-describedby", "aria-description", "aria-labelledby", "aria-label", "aria-required", "aria-owns", "aria-controls"], io = ["data-value"], lo = ["id", "value", "aria-labelledby", "disabled"], so = /* @__PURE__ */ me({
  __name: "Select",
  props: /* @__PURE__ */ Ve({
    options: {},
    displayedOptions: {},
    placeholder: { default: "Select an option" },
    isClearable: { type: Boolean, default: !0 },
    isDisabled: { type: Boolean, default: !1 },
    isSearchable: { type: Boolean, default: !0 },
    isMulti: { type: Boolean, default: !1 },
    isTaggable: { type: Boolean, default: !1 },
    isLoading: { type: Boolean, default: !1 },
    isMenuOpen: { type: Boolean, default: void 0 },
    hideSelectedOptions: { type: Boolean, default: !0 },
    shouldAutofocusOption: { type: Boolean, default: !0 },
    closeOnSelect: { type: Boolean, default: !0 },
    teleport: { default: void 0 },
    inputId: { default: void 0 },
    classes: { default: void 0 },
    uid: { default: jt() },
    aria: { default: void 0 },
    disableInvalidVModelWarn: { type: Boolean, default: !1 },
    filterBy: { type: Function, default: (e, t, o) => t.toLowerCase().includes(o.toLowerCase()) },
    getOptionValue: { type: Function, default: (e) => e.value },
    getOptionLabel: { type: Function, default: (e) => e.label },
    inputAttrs: { default: void 0 },
    selectOnBlur: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["optionSelected", "optionDeselected", "optionCreated", "menuOpened", "menuClosed", "search"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, i = o, s = St(), l = Qe(e, "modelValue"), a = Ct(), c = F(() => a.class), u = se("container"), d = se("input"), m = se("indicators"), r = W(""), p = W(""), f = W(!1), v = W(-1), b = W(!1), y = F(() => {
      const h = n.displayedOptions || n.options;
      h?.length || console.warn("[vue3-select-component warn]: No options or displayedOptions were provided to the component.");
      const x = h.map((B) => ({
        ...B,
        label: n.getOptionLabel(B),
        value: n.getOptionValue(B)
      })), M = (B) => B.filter(
        (j) => n.hideSelectedOptions && Array.isArray(l.value) ? !l.value.includes(j.value) : !0
      );
      if (n.isSearchable && r.value) {
        const B = x.filter((j) => n.filterBy(j, n.getOptionLabel(j), r.value));
        return n.isMulti ? M(B) : B;
      }
      return n.isMulti ? M(x) : x;
    }), g = F(() => {
      if (n.isMulti)
        return Array.isArray(l.value) ? l.value.map((x) => n.options.find((M) => n.getOptionValue(M) === x)).filter((x) => x !== void 0) : (n.disableInvalidVModelWarn || console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${l.value}`), []);
      const h = n.options.find((x) => n.getOptionValue(x) === l.value);
      return h ? [h] : [];
    }), O = F(() => {
      const h = {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: !1,
        tabindex: 0,
        type: "text"
      }, x = n.isSearchable ? {} : { readonly: !0, tabindex: -1, "aria-hidden": !0 };
      return {
        ...h,
        ...x,
        ...n.inputAttrs
      };
    });
    function S() {
      n.isDisabled || (f.value = !0, n.shouldAutofocusOption && (v.value = n.options.findIndex((h) => !h.disabled)), n.isSearchable && d.value && d.value.focus(), i("menuOpened"));
    }
    function A() {
      f.value = !1, r.value = "", p.value = "", v.value = -1, b.value = !1, i("menuClosed");
    }
    function D() {
      f.value ? A() : S();
    }
    function C(h) {
      m.value?.containerRef && !m.value.containerRef.contains(h.target) && (f.value && r.value.length === 0 ? A() : S());
    }
    function E(h) {
      const x = h.target.value;
      r.value = x, p.value = x;
    }
    function V() {
      f.value && r.value.length === 0 ? A() : S();
    }
    const P = (h) => {
      if (!h.disabled) {
        if (n.isMulti)
          if (Array.isArray(l.value)) {
            const x = !!l.value.find((j) => j === h.value), B = y.value.findIndex((j) => j.value === h.value) >= y.value.length - 1;
            x ? l.value = l.value.filter((j) => j !== h.value) : l.value = [...l.value, h.value], B && (v.value = y.value.length - 2);
          } else
            l.value = [h.value], n.disableInvalidVModelWarn || console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${l.value}. Since an option has been selected, the component automatically converted the v-model to an array.`);
        else
          l.value = h.value;
        i("optionSelected", h), n.closeOnSelect ? A() : (r.value = "", p.value = "");
      }
    }, K = (h) => {
      n.isDisabled || (n.isMulti ? Array.isArray(l.value) ? (l.value = l.value.filter((x) => x !== n.getOptionValue(h)), i("optionDeselected", h)) : n.disableInvalidVModelWarn || console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${l.value}`) : (l.value = void 0, i("optionDeselected", h)));
    }, Q = () => {
      n.isMulti ? (l.value = [], i("optionDeselected", null)) : (l.value = void 0, g.value[0] && i("optionDeselected", g.value[0])), f.value && A(), d.value && d.value.focus();
    }, oe = () => {
      i("optionCreated", r.value), r.value = "", A();
    }, Y = (h) => {
      v.value = h;
    }, he = (h) => {
      h.key === "Tab" ? A() : (h.code === "Space" && !f.value && r.value.length === 0 || (h.key === "ArrowDown" || h.key === "ArrowUp") && !f.value) && (h.preventDefault(), h.stopImmediatePropagation(), S());
    }, ie = () => {
      if (!b.value && n.selectOnBlur && f.value && v.value >= 0) {
        const h = y.value[v.value];
        h && !h.disabled && P(h);
      }
    };
    return He(nt, n), He(Pe, {
      vmodel: l,
      availableOptions: y,
      selectedOptions: g,
      menuOpen: f,
      focusedOption: v,
      containerRef: u,
      search: r,
      openMenu: S,
      closeMenu: A,
      toggleMenu: D,
      handleControlClick: C,
      handleInputMousedown: V,
      setOption: P,
      removeOption: K,
      createOption: oe,
      setFocusedOption: Y,
      isPointerDownInMenu: b
    }), t({
      inputRef: d,
      containerRef: u,
      openMenu: S,
      closeMenu: A,
      toggleMenu: D,
      clear: Q
    }), ue(
      () => r.value,
      (h, x) => {
        n.isSearchable && h !== x && (h.length || x.length) && (i("search", r.value), v.value = -1, !f.value && h.length > 0 && S());
      }
    ), ue(
      () => n.isMenuOpen,
      (h, x) => {
        x === void 0 && h === void 0 || (h ? S() : A());
      },
      { immediate: !0 }
    ), (h, x) => (w(), k("div", {
      ref: "container",
      dir: "auto",
      class: T(["vue-select", [{ open: f.value, typing: f.value && r.value.length > 0, disabled: e.isDisabled }, n.classes?.container]]),
      "data-state": f.value ? "open" : "closed"
    }, [
      Z("div", {
        class: T(["control", [{ focused: f.value, disabled: n.isDisabled }, n.classes?.control]]),
        onClick: x[1] || (x[1] = (M) => C(M))
      }, [
        Z("div", {
          id: `vue-select-${e.uid}-combobox`,
          class: T(["value-container", [{ multi: e.isMulti, "has-value": g.value.length > 0 }, n.classes?.valueContainer]]),
          role: "combobox",
          "aria-expanded": f.value,
          "aria-describedby": e.placeholder,
          "aria-description": e.placeholder,
          "aria-labelledby": e.aria?.labelledby,
          "aria-label": g.value.length ? g.value.map(e.getOptionLabel).join(", ") : "",
          "aria-required": e.aria?.required,
          "aria-owns": `vue-select-${e.uid}-listbox`,
          "aria-controls": `vue-select-${e.uid}-listbox`,
          "aria-haspopup": "true"
        }, [
          !g.value[0] && !r.value.length ? (w(), L(to, {
            key: 0,
            text: e.placeholder,
            "placeholder-slot": s.placeholder,
            class: T(n.classes?.placeholder)
          }, null, 8, ["text", "placeholder-slot", "class"])) : !n.isMulti && g.value[0] ? (w(), k("div", {
            key: 1,
            class: T(["single-value", [n.classes?.singleValue]]),
            onClick: x[0] || (x[0] = (M) => S())
          }, [
            s.value ? (w(), L(_(s.value), {
              key: 0,
              option: g.value[0]
            }, null, 8, ["option"])) : (w(), k(N, { key: 1 }, [
              le(de(e.getOptionLabel(g.value[0])), 1)
            ], 64))
          ], 2)) : n.isMulti && g.value.length ? (w(!0), k(N, { key: 2 }, $e(g.value, (M) => (w(), k(N, {
            key: M.value
          }, [
            s.tag ? (w(), L(_(s.tag), {
              key: 0,
              option: M,
              removeOption: () => K(M)
            }, null, 8, ["option", "removeOption"])) : (w(), L(Jn, {
              key: 1,
              label: e.getOptionLabel(M),
              option: M,
              "tag-content-slot": s["tag-content"],
              classes: {
                multiValue: n.classes?.multiValue,
                multiValueLabel: n.classes?.multiValueLabel,
                multiValueRemove: n.classes?.multiValueRemove
              },
              onRemove: (B) => K(M)
            }, null, 8, ["label", "option", "tag-content-slot", "classes", "onRemove"]))
          ], 64))), 128)) : ee("", !0),
          Z("div", {
            class: T(["input-container", [{ typing: f.value && (r.value.length > 0 || p.value.length > 0) }, n.classes?.inputContainer]]),
            "data-value": p.value
          }, [
            Z("input", At({
              id: e.inputId,
              ref: "input",
              value: r.value,
              class: ["search-input", n.classes?.searchInput]
            }, O.value, {
              "aria-autocomplete": "list",
              "aria-labelledby": `vue-select-${e.uid}-combobox`,
              disabled: e.isDisabled,
              placeholder: "",
              onInput: E,
              onMousedown: V,
              onKeydown: he,
              onBlur: ie
            }), null, 16, lo)
          ], 10, io)
        ], 10, oo),
        et(Ht, {
          ref: "indicators",
          "has-selected-option": g.value.length > 0,
          "is-menu-open": f.value,
          "is-clearable": e.isClearable,
          "is-loading": e.isLoading,
          "is-disabled": e.isDisabled,
          slots: { clear: s.clear, dropdown: s.dropdown, loading: s.loading },
          onClear: Q,
          onToggle: D
        }, null, 8, ["has-selected-option", "is-menu-open", "is-clearable", "is-loading", "is-disabled", "slots"])
      ], 2),
      (w(), L(Mt, {
        to: e.teleport,
        disabled: !e.teleport,
        defer: !0
      }, [
        f.value ? (w(), L(Yn, {
          key: 0,
          modelValue: l.value,
          "onUpdate:modelValue": x[2] || (x[2] = (M) => l.value = M),
          "root-class": c.value,
          slots: {
            option: s.option,
            "menu-header": s["menu-header"],
            "no-options": s["no-options"],
            "taggable-no-options": s["taggable-no-options"]
          }
        }, null, 8, ["modelValue", "root-class", "slots"])) : ee("", !0)
      ], 8, ["to", "disabled"]))
    ], 10, no));
  }
}), ro = /* @__PURE__ */ J(so, [["__scopeId", "data-v-47937928"]]);
export {
  ro as default
};
