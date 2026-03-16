import { createElementBlock as M, openBlock as w, createElementVNode as Y, Fragment as W, renderList as Be, defineComponent as ve, useTemplateRef as le, createCommentVNode as J, createBlock as V, withModifiers as xe, resolveDynamicComponent as H, normalizeClass as B, computed as N, ref as j, shallowRef as pt, watch as ce, getCurrentScope as vt, onScopeDispose as mt, shallowReadonly as re, unref as k, inject as Le, withKeys as ht, renderSlot as gt, mergeModels as Ee, useModel as Ge, onMounted as yt, onBeforeUnmount as bt, normalizeStyle as wt, withCtx as xt, createTextVNode as ie, toDisplayString as ue, createVNode as Je, useSlots as Ot, useAttrs as St, provide as We, withDirectives as Ct, mergeProps as At, vModelDynamic as Mt, Teleport as kt } from "vue";
const G = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
}, Rt = {}, Dt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function Lt(e, t) {
  return w(), M("svg", Dt, [...t[0] || (t[0] = [
    Y("path", {
      "fill-rule": "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const Et = /* @__PURE__ */ G(Rt, [["render", Lt]]), Tt = {}, Vt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function Bt(e, t) {
  return w(), M("svg", Vt, [...t[0] || (t[0] = [
    Y("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }, null, -1)
  ])]);
}
const Qe = /* @__PURE__ */ G(Tt, [["render", Bt]]), $t = {}, It = { className: "spinner" };
function Pt(e, t) {
  return w(), M("div", It, [
    (w(), M(W, null, Be(12, (o) => Y("div", {
      key: o,
      class: "spinner-circle"
    })), 64))
  ]);
}
const Ft = /* @__PURE__ */ G($t, [["render", Pt], ["__scopeId", "data-v-ed866313"]]), Nt = {
  ref: "container",
  class: "indicators-container"
}, Wt = ["disabled"], Ht = ["disabled"], _t = /* @__PURE__ */ ve({
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
    const n = e, i = o, s = le("container"), l = le("clearButton"), a = le("dropdownButton");
    return t({ containerRef: s, clearButtonRef: l, dropdownButtonRef: a }), (u, d) => (w(), M("div", Nt, [
      e.hasSelectedOption && e.isClearable && !e.isLoading ? (w(), M("button", {
        key: 0,
        ref: "clearButton",
        type: "button",
        class: "clear-button",
        disabled: e.isDisabled,
        onClick: d[0] || (d[0] = xe((f) => i("clear"), ["stop"]))
      }, [
        n.slots.clear ? (w(), V(H(n.slots.clear), { key: 0 })) : (w(), V(Qe, { key: 1 }))
      ], 8, Wt)) : J("", !0),
      e.isLoading ? J("", !0) : (w(), M("button", {
        key: 1,
        ref: "dropdownButton",
        type: "button",
        class: B(["dropdown-icon", { active: e.isMenuOpen }]),
        disabled: e.isDisabled,
        onClick: d[1] || (d[1] = xe((f) => i("toggle"), ["stop"]))
      }, [
        n.slots.dropdown ? (w(), V(H(n.slots.dropdown), { key: 0 })) : (w(), V(Et, { key: 1 }))
      ], 10, Ht)),
      n.slots.loading ? (w(), V(H(n.slots.loading), { key: 2 })) : (w(), M(W, { key: 3 }, [
        e.isLoading ? (w(), V(Ft, { key: 0 })) : J("", !0)
      ], 64))
    ], 512));
  }
}), zt = /* @__PURE__ */ G(_t, [["__scopeId", "data-v-2d0f5223"]]), et = /* @__PURE__ */ Symbol("props"), $e = /* @__PURE__ */ Symbol("data");
let jt = 0;
function qt() {
  return ++jt;
}
const fe = Math.min, I = Math.max, Oe = Math.round, we = Math.floor, q = (e) => ({
  x: e,
  y: e
}), Ut = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xt = {
  start: "end",
  end: "start"
};
function He(e, t, o) {
  return I(e, fe(t, o));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Q(e) {
  return e.split("-")[0];
}
function ye(e) {
  return e.split("-")[1];
}
function tt(e) {
  return e === "x" ? "y" : "x";
}
function nt(e) {
  return e === "y" ? "height" : "width";
}
const Kt = /* @__PURE__ */ new Set(["top", "bottom"]);
function Z(e) {
  return Kt.has(Q(e)) ? "y" : "x";
}
function ot(e) {
  return tt(Z(e));
}
function Yt(e, t, o) {
  o === void 0 && (o = !1);
  const n = ye(e), i = ot(e), s = nt(i);
  let l = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = Se(l)), [l, Se(l)];
}
function Zt(e) {
  const t = Se(e);
  return [Te(e), t, Te(t)];
}
function Te(e) {
  return e.replace(/start|end/g, (t) => Xt[t]);
}
const _e = ["left", "right"], ze = ["right", "left"], Gt = ["top", "bottom"], Jt = ["bottom", "top"];
function Qt(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? ze : _e : t ? _e : ze;
    case "left":
    case "right":
      return t ? Gt : Jt;
    default:
      return [];
  }
}
function en(e, t, o, n) {
  const i = ye(e);
  let s = Qt(Q(e), o === "start", n);
  return i && (s = s.map((l) => l + "-" + i), t && (s = s.concat(s.map(Te)))), s;
}
function Se(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ut[t]);
}
function tn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function nn(e) {
  return typeof e != "number" ? tn(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ce(e) {
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
function je(e, t, o) {
  let {
    reference: n,
    floating: i
  } = e;
  const s = Z(t), l = ot(t), a = nt(l), u = Q(t), d = s === "y", f = n.x + n.width / 2 - i.width / 2, p = n.y + n.height / 2 - i.height / 2, c = n[a] / 2 - i[a] / 2;
  let r;
  switch (u) {
    case "top":
      r = {
        x: f,
        y: n.y - i.height
      };
      break;
    case "bottom":
      r = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      r = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      r = {
        x: n.x - i.width,
        y: p
      };
      break;
    default:
      r = {
        x: n.x,
        y: n.y
      };
  }
  switch (ye(t)) {
    case "start":
      r[l] -= c * (o && d ? -1 : 1);
      break;
    case "end":
      r[l] += c * (o && d ? -1 : 1);
      break;
  }
  return r;
}
async function on(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: s,
    rects: l,
    elements: a,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: c = !1,
    padding: r = 0
  } = ge(t, e), m = nn(r), g = a[c ? p === "floating" ? "reference" : "floating" : p], h = Ce(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(g))) == null || o ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: u
  })), x = p === "floating" ? {
    x: n,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), O = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = Ce(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: b,
    strategy: u
  }) : x);
  return {
    top: (h.top - D.top + m.top) / O.y,
    bottom: (D.bottom - h.bottom + m.bottom) / O.y,
    left: (h.left - D.left + m.left) / O.x,
    right: (D.right - h.right + m.right) / O.x
  };
}
const ln = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: l
  } = o, a = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: f,
    y: p
  } = je(d, n, u), c = n, r = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    var v;
    const {
      name: h,
      fn: x
    } = a[g], {
      x: b,
      y: O,
      data: D,
      reset: L
    } = await x({
      x: f,
      y: p,
      initialPlacement: n,
      placement: c,
      strategy: i,
      middlewareData: r,
      rects: d,
      platform: {
        ...l,
        detectOverflow: (v = l.detectOverflow) != null ? v : on
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b ?? f, p = O ?? p, r = {
      ...r,
      [h]: {
        ...r[h],
        ...D
      }
    }, L && m <= 50 && (m++, typeof L == "object" && (L.placement && (c = L.placement), L.rects && (d = L.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : L.rects), {
      x: f,
      y: p
    } = je(d, c, u)), g = -1);
  }
  return {
    x: f,
    y: p,
    placement: c,
    strategy: i,
    middlewareData: r
  };
}, sn = function(e) {
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
        platform: u,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: c,
        fallbackStrategy: r = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...g
      } = ge(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const h = Q(i), x = Z(a), b = Q(a) === a, O = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), D = c || (b || !v ? [Se(a)] : Zt(a)), L = m !== "none";
      !c && L && D.push(...en(a, v, m, O));
      const C = [a, ...D], E = await u.detectOverflow(t, g), $ = [];
      let F = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (f && $.push(E[h]), p) {
        const K = Yt(i, l, O);
        $.push(E[K[0]], E[K[1]]);
      }
      if (F = [...F, {
        placement: i,
        overflows: $
      }], !$.every((K) => K <= 0)) {
        var te, ne;
        const K = (((te = s.flip) == null ? void 0 : te.index) || 0) + 1, y = C[K];
        if (y && (!(p === "alignment" ? x !== Z(y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((R) => Z(R.placement) === x ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: F
            },
            reset: {
              placement: y
            }
          };
        let S = (ne = F.filter((A) => A.overflows[0] <= 0).sort((A, R) => A.overflows[1] - R.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!S)
          switch (r) {
            case "bestFit": {
              var oe;
              const A = (oe = F.filter((R) => {
                if (L) {
                  const T = Z(R.placement);
                  return T === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((T) => T > 0).reduce((T, ft) => T + ft, 0)]).sort((R, T) => R[1] - T[1])[0]) == null ? void 0 : oe[0];
              A && (S = A);
              break;
            }
            case "initialPlacement":
              S = a;
              break;
          }
        if (i !== S)
          return {
            reset: {
              placement: S
            }
          };
      }
      return {};
    }
  };
}, an = /* @__PURE__ */ new Set(["left", "top"]);
async function rn(e, t) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), l = Q(o), a = ye(o), u = Z(o) === "y", d = an.has(l) ? -1 : 1, f = s && u ? -1 : 1, p = ge(t, e);
  let {
    mainAxis: c,
    crossAxis: r,
    alignmentAxis: m
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof m == "number" && (r = a === "end" ? m * -1 : m), u ? {
    x: r * f,
    y: c * d
  } : {
    x: c * d,
    y: r * f
  };
}
const cn = function(e) {
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
      } = t, u = await rn(t, e);
      return l === ((o = a.offset) == null ? void 0 : o.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: i + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, un = function(e) {
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
        limiter: u = {
          fn: (h) => {
            let {
              x,
              y: b
            } = h;
            return {
              x,
              y: b
            };
          }
        },
        ...d
      } = ge(e, t), f = {
        x: o,
        y: n
      }, p = await s.detectOverflow(t, d), c = Z(Q(i)), r = tt(c);
      let m = f[r], v = f[c];
      if (l) {
        const h = r === "y" ? "top" : "left", x = r === "y" ? "bottom" : "right", b = m + p[h], O = m - p[x];
        m = He(b, m, O);
      }
      if (a) {
        const h = c === "y" ? "top" : "left", x = c === "y" ? "bottom" : "right", b = v + p[h], O = v - p[x];
        v = He(b, v, O);
      }
      const g = u.fn({
        ...t,
        [r]: m,
        [c]: v
      });
      return {
        ...g,
        data: {
          x: g.x - o,
          y: g.y - n,
          enabled: {
            [r]: l,
            [c]: a
          }
        }
      };
    }
  };
}, dn = function(e) {
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
        apply: u = () => {
        },
        ...d
      } = ge(e, t), f = await l.detectOverflow(t, d), p = Q(i), c = ye(i), r = Z(i) === "y", {
        width: m,
        height: v
      } = s.floating;
      let g, h;
      p === "top" || p === "bottom" ? (g = p, h = c === (await (l.isRTL == null ? void 0 : l.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = p, g = c === "end" ? "top" : "bottom");
      const x = v - f.top - f.bottom, b = m - f.left - f.right, O = fe(v - f[g], x), D = fe(m - f[h], b), L = !t.middlewareData.shift;
      let C = O, E = D;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (E = b), (n = t.middlewareData.shift) != null && n.enabled.y && (C = x), L && !c) {
        const F = I(f.left, 0), te = I(f.right, 0), ne = I(f.top, 0), oe = I(f.bottom, 0);
        r ? E = m - 2 * (F !== 0 || te !== 0 ? F + te : I(f.left, f.right)) : C = v - 2 * (ne !== 0 || oe !== 0 ? ne + oe : I(f.top, f.bottom));
      }
      await u({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const $ = await l.getDimensions(a.floating);
      return m !== $.width || v !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ae() {
  return typeof window < "u";
}
function ae(e) {
  return Ie(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function P(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
  var t;
  return (t = (Ie(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ie(e) {
  return Ae() ? e instanceof Node || e instanceof P(e).Node : !1;
}
function _(e) {
  return Ae() ? e instanceof Element || e instanceof P(e).Element : !1;
}
function U(e) {
  return Ae() ? e instanceof HTMLElement || e instanceof P(e).HTMLElement : !1;
}
function qe(e) {
  return !Ae() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof P(e).ShadowRoot;
}
const fn = /* @__PURE__ */ new Set(["inline", "contents"]);
function be(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: i
  } = z(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !fn.has(i);
}
const pn = /* @__PURE__ */ new Set(["table", "td", "th"]);
function vn(e) {
  return pn.has(ae(e));
}
const mn = [":popover-open", ":modal"];
function Me(e) {
  return mn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const hn = ["transform", "translate", "scale", "rotate", "perspective"], gn = ["transform", "translate", "scale", "rotate", "perspective", "filter"], yn = ["paint", "layout", "strict", "content"];
function Pe(e) {
  const t = Fe(), o = _(e) ? z(e) : e;
  return hn.some((n) => o[n] ? o[n] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || gn.some((n) => (o.willChange || "").includes(n)) || yn.some((n) => (o.contain || "").includes(n));
}
function bn(e) {
  let t = ee(e);
  for (; U(t) && !pe(t); ) {
    if (Pe(t))
      return t;
    if (Me(t))
      return null;
    t = ee(t);
  }
  return null;
}
function Fe() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const wn = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function pe(e) {
  return wn.has(ae(e));
}
function z(e) {
  return P(e).getComputedStyle(e);
}
function ke(e) {
  return _(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ee(e) {
  if (ae(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qe(e) && e.host || // Fallback.
    X(e)
  );
  return qe(t) ? t.host : t;
}
function it(e) {
  const t = ee(e);
  return pe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : U(t) && be(t) ? t : it(t);
}
function he(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const i = it(e), s = i === ((n = e.ownerDocument) == null ? void 0 : n.body), l = P(i);
  if (s) {
    const a = Ve(l);
    return t.concat(l, l.visualViewport || [], be(i) ? i : [], a && o ? he(a) : []);
  }
  return t.concat(i, he(i, [], o));
}
function Ve(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lt(e) {
  const t = z(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = U(e), s = i ? e.offsetWidth : o, l = i ? e.offsetHeight : n, a = Oe(o) !== s || Oe(n) !== l;
  return a && (o = s, n = l), {
    width: o,
    height: n,
    $: a
  };
}
function Ne(e) {
  return _(e) ? e : e.contextElement;
}
function de(e) {
  const t = Ne(e);
  if (!U(t))
    return q(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: s
  } = lt(t);
  let l = (s ? Oe(o.width) : o.width) / n, a = (s ? Oe(o.height) : o.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: l,
    y: a
  };
}
const xn = /* @__PURE__ */ q(0);
function st(e) {
  const t = P(e);
  return !Fe() || !t.visualViewport ? xn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function On(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== P(e) ? !1 : t;
}
function se(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const i = e.getBoundingClientRect(), s = Ne(e);
  let l = q(1);
  t && (n ? _(n) && (l = de(n)) : l = de(e));
  const a = On(s, o, n) ? st(s) : q(0);
  let u = (i.left + a.x) / l.x, d = (i.top + a.y) / l.y, f = i.width / l.x, p = i.height / l.y;
  if (s) {
    const c = P(s), r = n && _(n) ? P(n) : n;
    let m = c, v = Ve(m);
    for (; v && n && r !== m; ) {
      const g = de(v), h = v.getBoundingClientRect(), x = z(v), b = h.left + (v.clientLeft + parseFloat(x.paddingLeft)) * g.x, O = h.top + (v.clientTop + parseFloat(x.paddingTop)) * g.y;
      u *= g.x, d *= g.y, f *= g.x, p *= g.y, u += b, d += O, m = P(v), v = Ve(m);
    }
  }
  return Ce({
    width: f,
    height: p,
    x: u,
    y: d
  });
}
function Re(e, t) {
  const o = ke(e).scrollLeft;
  return t ? t.left + o : se(X(e)).left + o;
}
function at(e, t) {
  const o = e.getBoundingClientRect(), n = o.left + t.scrollLeft - Re(e, o), i = o.top + t.scrollTop;
  return {
    x: n,
    y: i
  };
}
function Sn(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: i
  } = e;
  const s = i === "fixed", l = X(n), a = t ? Me(t.floating) : !1;
  if (n === l || a && s)
    return o;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = q(1);
  const f = q(0), p = U(n);
  if ((p || !p && !s) && ((ae(n) !== "body" || be(l)) && (u = ke(n)), U(n))) {
    const r = se(n);
    d = de(n), f.x = r.x + n.clientLeft, f.y = r.y + n.clientTop;
  }
  const c = l && !p && !s ? at(l, u) : q(0);
  return {
    width: o.width * d.x,
    height: o.height * d.y,
    x: o.x * d.x - u.scrollLeft * d.x + f.x + c.x,
    y: o.y * d.y - u.scrollTop * d.y + f.y + c.y
  };
}
function Cn(e) {
  return Array.from(e.getClientRects());
}
function An(e) {
  const t = X(e), o = ke(e), n = e.ownerDocument.body, i = I(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = I(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -o.scrollLeft + Re(e);
  const a = -o.scrollTop;
  return z(n).direction === "rtl" && (l += I(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
const Ue = 25;
function Mn(e, t) {
  const o = P(e), n = X(e), i = o.visualViewport;
  let s = n.clientWidth, l = n.clientHeight, a = 0, u = 0;
  if (i) {
    s = i.width, l = i.height;
    const f = Fe();
    (!f || f && t === "fixed") && (a = i.offsetLeft, u = i.offsetTop);
  }
  const d = Re(n);
  if (d <= 0) {
    const f = n.ownerDocument, p = f.body, c = getComputedStyle(p), r = f.compatMode === "CSS1Compat" && parseFloat(c.marginLeft) + parseFloat(c.marginRight) || 0, m = Math.abs(n.clientWidth - p.clientWidth - r);
    m <= Ue && (s -= m);
  } else d <= Ue && (s += d);
  return {
    width: s,
    height: l,
    x: a,
    y: u
  };
}
const kn = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Rn(e, t) {
  const o = se(e, !0, t === "fixed"), n = o.top + e.clientTop, i = o.left + e.clientLeft, s = U(e) ? de(e) : q(1), l = e.clientWidth * s.x, a = e.clientHeight * s.y, u = i * s.x, d = n * s.y;
  return {
    width: l,
    height: a,
    x: u,
    y: d
  };
}
function Xe(e, t, o) {
  let n;
  if (t === "viewport")
    n = Mn(e, o);
  else if (t === "document")
    n = An(X(e));
  else if (_(t))
    n = Rn(t, o);
  else {
    const i = st(e);
    n = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Ce(n);
}
function rt(e, t) {
  const o = ee(e);
  return o === t || !_(o) || pe(o) ? !1 : z(o).position === "fixed" || rt(o, t);
}
function Dn(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = he(e, [], !1).filter((a) => _(a) && ae(a) !== "body"), i = null;
  const s = z(e).position === "fixed";
  let l = s ? ee(e) : e;
  for (; _(l) && !pe(l); ) {
    const a = z(l), u = Pe(l);
    !u && a.position === "fixed" && (i = null), (s ? !u && !i : !u && a.position === "static" && !!i && kn.has(i.position) || be(l) && !u && rt(e, l)) ? n = n.filter((f) => f !== l) : i = a, l = ee(l);
  }
  return t.set(e, n), n;
}
function Ln(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: i
  } = e;
  const l = [...o === "clippingAncestors" ? Me(t) ? [] : Dn(t, this._c) : [].concat(o), n], a = l[0], u = l.reduce((d, f) => {
    const p = Xe(t, f, i);
    return d.top = I(p.top, d.top), d.right = fe(p.right, d.right), d.bottom = fe(p.bottom, d.bottom), d.left = I(p.left, d.left), d;
  }, Xe(t, a, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function En(e) {
  const {
    width: t,
    height: o
  } = lt(e);
  return {
    width: t,
    height: o
  };
}
function Tn(e, t, o) {
  const n = U(t), i = X(t), s = o === "fixed", l = se(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = q(0);
  function d() {
    u.x = Re(i);
  }
  if (n || !n && !s)
    if ((ae(t) !== "body" || be(i)) && (a = ke(t)), n) {
      const r = se(t, !0, s, t);
      u.x = r.x + t.clientLeft, u.y = r.y + t.clientTop;
    } else i && d();
  s && !n && i && d();
  const f = i && !n && !s ? at(i, a) : q(0), p = l.left + a.scrollLeft - u.x - f.x, c = l.top + a.scrollTop - u.y - f.y;
  return {
    x: p,
    y: c,
    width: l.width,
    height: l.height
  };
}
function De(e) {
  return z(e).position === "static";
}
function Ke(e, t) {
  if (!U(e) || z(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return X(e) === o && (o = o.ownerDocument.body), o;
}
function ct(e, t) {
  const o = P(e);
  if (Me(e))
    return o;
  if (!U(e)) {
    let i = ee(e);
    for (; i && !pe(i); ) {
      if (_(i) && !De(i))
        return i;
      i = ee(i);
    }
    return o;
  }
  let n = Ke(e, t);
  for (; n && vn(n) && De(n); )
    n = Ke(n, t);
  return n && pe(n) && De(n) && !Pe(n) ? o : n || bn(e) || o;
}
const Vn = async function(e) {
  const t = this.getOffsetParent || ct, o = this.getDimensions, n = await o(e.floating);
  return {
    reference: Tn(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Bn(e) {
  return z(e).direction === "rtl";
}
const $n = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sn,
  getDocumentElement: X,
  getClippingRect: Ln,
  getOffsetParent: ct,
  getElementRects: Vn,
  getClientRects: Cn,
  getDimensions: En,
  getScale: de,
  isElement: _,
  isRTL: Bn
};
function ut(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function In(e, t) {
  let o = null, n;
  const i = X(e);
  function s() {
    var a;
    clearTimeout(n), (a = o) == null || a.disconnect(), o = null;
  }
  function l(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), s();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: c,
      height: r
    } = d;
    if (a || t(), !c || !r)
      return;
    const m = we(p), v = we(i.clientWidth - (f + c)), g = we(i.clientHeight - (p + r)), h = we(f), b = {
      rootMargin: -m + "px " + -v + "px " + -g + "px " + -h + "px",
      threshold: I(0, fe(1, u)) || 1
    };
    let O = !0;
    function D(L) {
      const C = L[0].intersectionRatio;
      if (C !== u) {
        if (!O)
          return l();
        C ? l(!1, C) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !ut(d, e.getBoundingClientRect()) && l(), O = !1;
    }
    try {
      o = new IntersectionObserver(D, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(D, b);
    }
    o.observe(e);
  }
  return l(!0), s;
}
function Pn(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, d = Ne(e), f = i || s ? [...d ? he(d) : [], ...he(t)] : [];
  f.forEach((h) => {
    i && h.addEventListener("scroll", o, {
      passive: !0
    }), s && h.addEventListener("resize", o);
  });
  const p = d && a ? In(d, o) : null;
  let c = -1, r = null;
  l && (r = new ResizeObserver((h) => {
    let [x] = h;
    x && x.target === d && r && (r.unobserve(t), cancelAnimationFrame(c), c = requestAnimationFrame(() => {
      var b;
      (b = r) == null || b.observe(t);
    })), o();
  }), d && !u && r.observe(d), r.observe(t));
  let m, v = u ? se(e) : null;
  u && g();
  function g() {
    const h = se(e);
    v && !ut(v, h) && o(), v = h, m = requestAnimationFrame(g);
  }
  return o(), () => {
    var h;
    f.forEach((x) => {
      i && x.removeEventListener("scroll", o), s && x.removeEventListener("resize", o);
    }), p?.(), (h = r) == null || h.disconnect(), r = null, u && cancelAnimationFrame(m);
  };
}
const Fn = cn, Nn = un, Wn = sn, Hn = dn, _n = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: $n,
    ...o
  }, s = {
    ...i.platform,
    _c: n
  };
  return ln(e, t, {
    ...i,
    platform: s
  });
};
function zn(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ye(e) {
  if (zn(e)) {
    const t = e.$el;
    return Ie(t) && ae(t) === "#comment" ? null : t;
  }
  return e;
}
function me(e) {
  return typeof e == "function" ? e() : k(e);
}
function dt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ze(e, t) {
  const o = dt(e);
  return Math.round(t * o) / o;
}
function jn(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, i = N(() => {
    var C;
    return (C = me(o.open)) != null ? C : !0;
  }), s = N(() => me(o.middleware)), l = N(() => {
    var C;
    return (C = me(o.placement)) != null ? C : "bottom";
  }), a = N(() => {
    var C;
    return (C = me(o.strategy)) != null ? C : "absolute";
  }), u = N(() => {
    var C;
    return (C = me(o.transform)) != null ? C : !0;
  }), d = N(() => Ye(e.value)), f = N(() => Ye(t.value)), p = j(0), c = j(0), r = j(a.value), m = j(l.value), v = pt({}), g = j(!1), h = N(() => {
    const C = {
      position: r.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return C;
    const E = Ze(f.value, p.value), $ = Ze(f.value, c.value);
    return u.value ? {
      ...C,
      transform: "translate(" + E + "px, " + $ + "px)",
      ...dt(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r.value,
      left: E + "px",
      top: $ + "px"
    };
  });
  let x;
  function b() {
    if (d.value == null || f.value == null)
      return;
    const C = i.value;
    _n(d.value, f.value, {
      middleware: s.value,
      placement: l.value,
      strategy: a.value
    }).then((E) => {
      p.value = E.x, c.value = E.y, r.value = E.strategy, m.value = E.placement, v.value = E.middlewareData, g.value = C !== !1;
    });
  }
  function O() {
    typeof x == "function" && (x(), x = void 0);
  }
  function D() {
    if (O(), n === void 0) {
      b();
      return;
    }
    if (d.value != null && f.value != null) {
      x = n(d.value, f.value, b);
      return;
    }
  }
  function L() {
    i.value || (g.value = !1);
  }
  return ce([s, l, a, i], b, {
    flush: "sync"
  }), ce([d, f], D, {
    flush: "sync"
  }), ce(i, L, {
    flush: "sync"
  }), vt() && mt(O), {
    x: re(p),
    y: re(c),
    strategy: re(r),
    placement: re(m),
    middlewareData: re(v),
    isPositioned: re(g),
    floatingStyles: h,
    update: b
  };
}
const qn = ["aria-disabled", "aria-selected"], Un = /* @__PURE__ */ ve({
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
    const o = e, n = t, i = Le($e), s = () => {
      !o.isDisabled && i?.setFocusedOption && i.setFocusedOption(o.index);
    }, l = j(null);
    return ce(
      () => o.isFocused,
      () => {
        if (o.isFocused && o.menu) {
          const a = o.menu.children[o.index], u = a.offsetTop, d = u + a.clientHeight, f = o.menu.scrollTop, p = o.menu.clientHeight;
          u < f ? o.menu.scrollTop = u : d > f + p && (o.menu.scrollTop = d - p);
        }
      }
    ), (a, u) => (w(), M("div", {
      ref_key: "option",
      ref: l,
      class: B(["menu-option", { focused: e.isFocused, selected: e.isSelected, disabled: e.isDisabled }]),
      role: "option",
      "aria-disabled": e.isDisabled,
      "aria-selected": e.isSelected,
      onMousedown: u[0] || (u[0] = xe(() => {
      }, ["prevent"])),
      onClick: u[1] || (u[1] = (d) => n("select")),
      onKeydown: u[2] || (u[2] = ht((d) => n("select"), ["enter"])),
      onMouseenter: s
    }, [
      gt(a.$slots, "default", {}, void 0, !0)
    ], 42, qn));
  }
}), Xn = /* @__PURE__ */ G(Un, [["__scopeId", "data-v-c02f5942"]]), Kn = ["id", "aria-label", "aria-multiselectable", "data-state-position"], Yn = /* @__PURE__ */ ve({
  __name: "Menu",
  props: /* @__PURE__ */ Ee({
    slots: {},
    rootClass: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = Ge(e, "modelValue"), n = Le(et), i = Le($e), s = le("menu"), { floatingStyles: l, placement: a } = jn(i.containerRef, s, {
      whileElementsMounted: Pn,
      placement: "bottom-start",
      middleware: [
        Wn(),
        Fn(5),
        Nn(),
        Hn({
          apply({ elements: c, rects: r }) {
            Object.assign(c.floating.style, {
              width: `${Math.max(0, r.reference.width)}px`
            });
          }
        })
      ]
    }), u = (c) => {
      if (i.menuOpen.value) {
        const r = i.focusedOption.value;
        if (c.key === "ArrowDown") {
          c.preventDefault();
          const v = i.availableOptions.value.findIndex((h, x) => !h.disabled && x > r), g = i.availableOptions.value.findIndex((h) => !h.disabled);
          i.focusedOption.value = v === -1 ? g : v;
        }
        if (c.key === "ArrowUp") {
          c.preventDefault();
          const v = i.availableOptions.value.reduce(
            (h, x, b) => !x.disabled && b < r ? b : h,
            -1
          ), g = i.availableOptions.value.reduce(
            (h, x, b) => x.disabled ? h : b,
            -1
          );
          i.focusedOption.value = v === -1 ? g : v;
        }
        if (c.key === "Enter") {
          const v = i.availableOptions.value[r];
          c.preventDefault(), v ? i.setOption(v) : n.isTaggable && i.search.value && i.createOption();
        }
        if (c.code === "Space" && i.search.value.length === 0) {
          const v = i.availableOptions.value[r];
          c.preventDefault(), v && i.setOption(v);
        }
        if (c.key === "Escape" && (c.preventDefault(), i.closeMenu()), c.key === "PageDown") {
          c.preventDefault();
          const v = i.availableOptions.value.reduce(
            (g, h, x) => h.disabled ? g : x,
            -1
          );
          i.focusedOption.value = v;
        }
        if (c.key === "PageUp") {
          c.preventDefault();
          const v = i.availableOptions.value.findIndex((g) => !g.disabled);
          i.focusedOption.value = v;
        }
        const m = n.isMulti && Array.isArray(o.value) ? o.value.length > 0 : !!o.value;
        if (c.key === "Backspace" && i.search.value.length === 0 && m)
          if (c.preventDefault(), n.isMulti) {
            const v = i.selectedOptions.value, g = v[v.length - 1];
            g && i.removeOption(g);
          } else {
            const v = i.selectedOptions.value[0];
            v && i.removeOption(v);
          }
      }
    }, d = (c) => {
      const r = c.target, m = i.containerRef.value && i.containerRef.value.contains(r), v = s.value && s.value.contains(r), g = r?.getAttribute?.("role") === "option";
      !m && !v && !g && i.closeMenu();
    }, f = () => {
      i.isPointerDownInMenu.value = !0;
    }, p = () => {
      i.isPointerDownInMenu.value = !1;
    };
    return yt(() => {
      document.addEventListener("keydown", u), document.addEventListener("click", d), document.addEventListener("pointerup", p), document.addEventListener("pointercancel", p);
    }), bt(() => {
      document.removeEventListener("keydown", u), document.removeEventListener("click", d), document.removeEventListener("pointerup", p), document.removeEventListener("pointercancel", p);
    }), (c, r) => (w(), M("div", {
      id: `vue-select-${k(n).uid}-listbox`,
      ref: "menu",
      class: B(["menu", [k(n).classes?.menuContainer, t.rootClass]]),
      role: "listbox",
      "aria-label": k(n).aria?.labelledby,
      "aria-multiselectable": k(n).isMulti,
      "data-state-position": k(a),
      style: wt({
        ...k(l)
      }),
      onPointerdown: f
    }, [
      t.slots["menu-header"] ? (w(), V(H(t.slots["menu-header"]), { key: 0 })) : J("", !0),
      (w(!0), M(W, null, Be(k(i).availableOptions.value, (m, v) => (w(), V(Xn, {
        key: v,
        type: "button",
        menu: s.value,
        index: v,
        "is-focused": k(i).focusedOption.value === v,
        "is-selected": Array.isArray(o.value) ? o.value.includes(m.value) : m.value === o.value,
        "is-disabled": m.disabled || !1,
        class: B(k(n).classes?.menuOption),
        onSelect: (g) => k(i).setOption(m)
      }, {
        default: xt(() => [
          t.slots.option ? (w(), V(H(t.slots.option), {
            key: 0,
            option: m,
            index: v,
            "is-focused": k(i).focusedOption.value === v,
            "is-selected": Array.isArray(o.value) ? o.value.includes(m.value) : m.value === o.value,
            "is-disabled": m.disabled || !1
          }, null, 8, ["option", "index", "is-focused", "is-selected", "is-disabled"])) : k(n).getOptionLabel ? (w(), M(W, { key: 1 }, [
            ie(ue(k(n).getOptionLabel(m)), 1)
          ], 64)) : (w(), M(W, { key: 2 }, [
            ie(ue(m.label), 1)
          ], 64))
        ]),
        _: 2
      }, 1032, ["menu", "index", "is-focused", "is-selected", "is-disabled", "class", "onSelect"]))), 128)),
      !k(n).isTaggable && k(i).availableOptions.value.length === 0 ? (w(), M("div", {
        key: 1,
        class: B(["no-results", k(n).classes?.noResults])
      }, [
        t.slots["no-options"] ? (w(), V(H(t.slots["no-options"]), { key: 0 })) : (w(), M(W, { key: 1 }, [
          ie(" No results found ")
        ], 64))
      ], 2)) : J("", !0),
      k(n).isTaggable && k(i).search.value ? (w(), M("div", {
        key: 2,
        class: B(["taggable-no-options", k(n).classes?.taggableNoOptions]),
        onClick: r[0] || (r[0] = //@ts-ignore
        (...m) => k(i).createOption && k(i).createOption(...m))
      }, [
        t.slots["taggable-no-options"] ? (w(), V(H(t.slots["taggable-no-options"]), {
          key: 0,
          option: k(i).search.value
        }, null, 8, ["option"])) : (w(), M(W, { key: 1 }, [
          ie(" Press enter to add " + ue(k(i).search.value) + " option ", 1)
        ], 64))
      ], 2)) : J("", !0)
    ], 46, Kn));
  }
}), Zn = /* @__PURE__ */ G(Yn, [["__scopeId", "data-v-51bf3ffa"]]), Gn = ["aria-label"], Jn = /* @__PURE__ */ ve({
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
    return (i, s) => (w(), M("div", {
      class: B(["multi-value", o.classes?.multiValue])
    }, [
      Y("div", {
        class: B(["multi-value-label", o.classes?.multiValueLabel])
      }, [
        o.tagContentSlot ? (w(), V(H(o.tagContentSlot), {
          key: 0,
          option: o.option
        }, null, 8, ["option"])) : (w(), M(W, { key: 1 }, [
          ie(ue(o.label), 1)
        ], 64))
      ], 2),
      Y("button", {
        type: "button",
        class: B(["multi-value-remove", o.classes?.multiValueRemove]),
        "aria-label": `Remove ${o.label}`,
        onClick: s[0] || (s[0] = xe((l) => n("remove"), ["stop"]))
      }, [
        Je(Qe)
      ], 10, Gn)
    ], 2));
  }
}), Qn = /* @__PURE__ */ G(Jn, [["__scopeId", "data-v-ba5b83d4"]]), eo = { class: "input-placeholder" }, to = /* @__PURE__ */ ve({
  __name: "Placeholder",
  props: {
    text: {},
    placeholderSlot: { type: Function }
  },
  setup(e) {
    return (t, o) => (w(), M("div", eo, [
      e.placeholderSlot ? (w(), V(H(e.placeholderSlot), { key: 0 })) : (w(), M(W, { key: 1 }, [
        ie(ue(e.text), 1)
      ], 64))
    ]));
  }
}), no = /* @__PURE__ */ G(to, [["__scopeId", "data-v-d650edcf"]]), oo = ["data-state"], io = ["id", "aria-expanded", "aria-describedby", "aria-description", "aria-labelledby", "aria-label", "aria-required", "aria-owns", "aria-controls"], lo = ["data-value"], so = ["id", "aria-labelledby", "disabled"], ao = /* @__PURE__ */ ve({
  __name: "Select",
  props: /* @__PURE__ */ Ee({
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
    uid: { default: qt() },
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
  emits: /* @__PURE__ */ Ee(["optionSelected", "optionDeselected", "optionCreated", "menuOpened", "menuClosed", "search"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, i = o, s = Ot(), l = Ge(e, "modelValue"), a = St(), u = N(() => a.class), d = le("container"), f = le("input"), p = le("indicators"), c = j(""), r = j(!1), m = j(-1), v = j(!1), g = N(() => {
      const y = n.displayedOptions || n.options;
      y?.length || console.warn("[vue3-select-component warn]: No options or displayedOptions were provided to the component.");
      const S = y.map((R) => ({
        ...R,
        label: n.getOptionLabel(R),
        value: n.getOptionValue(R)
      })), A = (R) => R.filter(
        (T) => n.hideSelectedOptions && Array.isArray(l.value) ? !l.value.includes(T.value) : !0
      );
      if (n.isSearchable && c.value) {
        const R = S.filter((T) => n.filterBy(T, n.getOptionLabel(T), c.value));
        return n.isMulti ? A(R) : R;
      }
      return n.isMulti ? A(S) : S;
    }), h = N(() => {
      if (n.isMulti)
        return Array.isArray(l.value) ? l.value.map((S) => n.options.find((A) => n.getOptionValue(A) === S)).filter((S) => S !== void 0) : (n.disableInvalidVModelWarn || console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${l.value}`), []);
      const y = n.options.find((S) => n.getOptionValue(S) === l.value);
      return y ? [y] : [];
    }), x = N(() => {
      const y = {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: !1,
        tabindex: 0,
        type: "text"
      }, S = n.isSearchable ? {} : { readonly: !0, tabindex: -1, "aria-hidden": !0 };
      return {
        ...y,
        ...S,
        ...n.inputAttrs
      };
    });
    function b() {
      n.isDisabled || (r.value = !0, n.shouldAutofocusOption && (m.value = n.options.findIndex((y) => !y.disabled)), n.isSearchable && f.value && f.value.focus(), i("menuOpened"));
    }
    function O() {
      r.value = !1, c.value = "", m.value = -1, v.value = !1, i("menuClosed");
    }
    function D() {
      r.value ? O() : b();
    }
    function L(y) {
      p.value?.containerRef && !p.value.containerRef.contains(y.target) && (r.value && c.value.length === 0 ? O() : b());
    }
    function C() {
      r.value && c.value.length === 0 ? O() : b();
    }
    const E = (y) => {
      if (!y.disabled) {
        if (n.isMulti)
          if (Array.isArray(l.value)) {
            const S = !!l.value.find((T) => T === y.value), R = g.value.findIndex((T) => T.value === y.value) >= g.value.length - 1;
            S ? l.value = l.value.filter((T) => T !== y.value) : l.value = [...l.value, y.value], R && (m.value = g.value.length - 2);
          } else
            l.value = [y.value], n.disableInvalidVModelWarn || console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${l.value}. Since an option has been selected, the component automatically converted the v-model to an array.`);
        else
          l.value = y.value;
        i("optionSelected", y), n.closeOnSelect ? O() : c.value = "";
      }
    }, $ = (y) => {
      n.isDisabled || (n.isMulti ? Array.isArray(l.value) ? (l.value = l.value.filter((S) => S !== n.getOptionValue(y)), i("optionDeselected", y)) : n.disableInvalidVModelWarn || console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${l.value}`) : (l.value = void 0, i("optionDeselected", y)));
    }, F = () => {
      n.isMulti ? (l.value = [], i("optionDeselected", null)) : (l.value = void 0, h.value[0] && i("optionDeselected", h.value[0])), r.value && O(), f.value && f.value.focus();
    }, te = () => {
      i("optionCreated", c.value), c.value = "", O();
    }, ne = (y) => {
      m.value = y;
    }, oe = (y) => {
      y.key === "Tab" ? O() : (y.code === "Space" && !r.value && c.value.length === 0 || (y.key === "ArrowDown" || y.key === "ArrowUp") && !r.value) && (y.preventDefault(), y.stopImmediatePropagation(), b());
    }, K = () => {
      if (!v.value && n.selectOnBlur && r.value && m.value >= 0) {
        const y = g.value[m.value];
        y && !y.disabled && E(y);
      }
    };
    return We(et, n), We($e, {
      vmodel: l,
      availableOptions: g,
      selectedOptions: h,
      menuOpen: r,
      focusedOption: m,
      containerRef: d,
      search: c,
      openMenu: b,
      closeMenu: O,
      toggleMenu: D,
      handleControlClick: L,
      handleInputMousedown: C,
      setOption: E,
      removeOption: $,
      createOption: te,
      setFocusedOption: ne,
      isPointerDownInMenu: v
    }), t({
      inputRef: f,
      containerRef: d,
      openMenu: b,
      closeMenu: O,
      toggleMenu: D,
      clear: F
    }), ce(
      () => c.value,
      (y, S) => {
        n.isSearchable && y !== S && (y.length || S.length) && (i("search", c.value), m.value = -1, !r.value && y.length > 0 && b());
      }
    ), ce(
      () => n.isMenuOpen,
      (y, S) => {
        S === void 0 && y === void 0 || (y ? b() : O());
      },
      { immediate: !0 }
    ), (y, S) => (w(), M("div", {
      ref: "container",
      dir: "auto",
      class: B(["vue-select", [{ open: r.value, typing: r.value && c.value.length > 0, disabled: e.isDisabled }, n.classes?.container]]),
      "data-state": r.value ? "open" : "closed"
    }, [
      Y("div", {
        class: B(["control", [{ focused: r.value, disabled: n.isDisabled }, n.classes?.control]]),
        onClick: S[2] || (S[2] = (A) => L(A))
      }, [
        Y("div", {
          id: `vue-select-${e.uid}-combobox`,
          class: B(["value-container", [{ multi: e.isMulti, "has-value": h.value.length > 0 }, n.classes?.valueContainer]]),
          role: "combobox",
          "aria-expanded": r.value,
          "aria-describedby": e.placeholder,
          "aria-description": e.placeholder,
          "aria-labelledby": e.aria?.labelledby,
          "aria-label": h.value.length ? h.value.map(e.getOptionLabel).join(", ") : "",
          "aria-required": e.aria?.required,
          "aria-owns": `vue-select-${e.uid}-listbox`,
          "aria-controls": `vue-select-${e.uid}-listbox`,
          "aria-haspopup": "true"
        }, [
          !h.value[0] && !c.value.length ? (w(), V(no, {
            key: 0,
            text: e.placeholder,
            "placeholder-slot": s.placeholder,
            class: B(n.classes?.placeholder)
          }, null, 8, ["text", "placeholder-slot", "class"])) : !n.isMulti && h.value[0] ? (w(), M("div", {
            key: 1,
            class: B(["single-value", [n.classes?.singleValue]]),
            onClick: S[0] || (S[0] = (A) => b())
          }, [
            s.value ? (w(), V(H(s.value), {
              key: 0,
              option: h.value[0]
            }, null, 8, ["option"])) : (w(), M(W, { key: 1 }, [
              ie(ue(e.getOptionLabel(h.value[0])), 1)
            ], 64))
          ], 2)) : n.isMulti && h.value.length ? (w(!0), M(W, { key: 2 }, Be(h.value, (A) => (w(), M(W, {
            key: A.value
          }, [
            s.tag ? (w(), V(H(s.tag), {
              key: 0,
              option: A,
              removeOption: () => $(A)
            }, null, 8, ["option", "removeOption"])) : (w(), V(Qn, {
              key: 1,
              label: e.getOptionLabel(A),
              option: A,
              "tag-content-slot": s["tag-content"],
              classes: {
                multiValue: n.classes?.multiValue,
                multiValueLabel: n.classes?.multiValueLabel,
                multiValueRemove: n.classes?.multiValueRemove
              },
              onRemove: (R) => $(A)
            }, null, 8, ["label", "option", "tag-content-slot", "classes", "onRemove"]))
          ], 64))), 128)) : J("", !0),
          Y("div", {
            class: B(["input-container", [{ typing: r.value && c.value.length > 0 }, n.classes?.inputContainer]]),
            "data-value": c.value
          }, [
            Ct(Y("input", At({
              id: e.inputId,
              ref: "input",
              "onUpdate:modelValue": S[1] || (S[1] = (A) => c.value = A),
              class: ["search-input", n.classes?.searchInput]
            }, x.value, {
              "aria-autocomplete": "list",
              "aria-labelledby": `vue-select-${e.uid}-combobox`,
              disabled: e.isDisabled,
              placeholder: "",
              onMousedown: C,
              onKeydown: oe,
              onBlur: K
            }), null, 16, so), [
              [Mt, c.value]
            ])
          ], 10, lo)
        ], 10, io),
        Je(zt, {
          ref: "indicators",
          "has-selected-option": h.value.length > 0,
          "is-menu-open": r.value,
          "is-clearable": e.isClearable,
          "is-loading": e.isLoading,
          "is-disabled": e.isDisabled,
          slots: { clear: s.clear, dropdown: s.dropdown, loading: s.loading },
          onClear: F,
          onToggle: D
        }, null, 8, ["has-selected-option", "is-menu-open", "is-clearable", "is-loading", "is-disabled", "slots"])
      ], 2),
      (w(), V(kt, {
        to: e.teleport,
        disabled: !e.teleport,
        defer: !0
      }, [
        r.value ? (w(), V(Zn, {
          key: 0,
          modelValue: l.value,
          "onUpdate:modelValue": S[3] || (S[3] = (A) => l.value = A),
          "root-class": u.value,
          slots: {
            option: s.option,
            "menu-header": s["menu-header"],
            "no-options": s["no-options"],
            "taggable-no-options": s["taggable-no-options"]
          }
        }, null, 8, ["modelValue", "root-class", "slots"])) : J("", !0)
      ], 8, ["to", "disabled"]))
    ], 10, oo));
  }
}), co = /* @__PURE__ */ G(ao, [["__scopeId", "data-v-f59527f3"]]);
export {
  co as default
};
