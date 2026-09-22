import {r as e, t} from "./rolldown-runtime-C60lm6uB.js";
import {i as n, n as r, r as i} from "./framework-D_rUT4EX.js";
var a = (...e) => e.filter( (e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim()
  , o = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase()
  , s = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase())
  , c = e => {
    let t = s(e);
    return t.charAt(0).toUpperCase() + t.slice(1)
}
  , l = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
}
  , u = e => {
    for (let t in e)
        if (t.startsWith(`aria-`) || t === `role` || t === `title`)
            return !0;
    return !1
}
  , d = e(n(), 1)
  , f = (0,
d.createContext)({})
  , p = () => (0,
d.useContext)(f)
  , m = (0,
d.forwardRef)( ({color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i=``, children: o, iconNode: s, ...c}, f) => {
    let {size: m=24, strokeWidth: h=2, absoluteStrokeWidth: g=!1, color: _=`currentColor`, className: v=``} = p() ?? {}
      , y = r ?? g ? Number(n ?? h) * 24 / Number(t ?? m) : n ?? h;
    return (0,
    d.createElement)(`svg`, {
        ref: f,
        ...l,
        width: t ?? m ?? l.width,
        height: t ?? m ?? l.height,
        stroke: e ?? _,
        strokeWidth: y,
        className: a(`lucide`, v, i),
        ...!o && !u(c) && {
            "aria-hidden": `true`
        },
        ...c
    }, [...s.map( ([e,t]) => (0,
    d.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])
}
)
  , h = (e, t) => {
    let n = (0,
    d.forwardRef)( ({className: n, ...r}, i) => (0,
    d.createElement)(m, {
        ref: i,
        iconNode: t,
        className: a(`lucide-${o(c(e))}`, `lucide-${e}`, n),
        ...r
    }));
    return n.displayName = c(e),
    n
}
  , g = h(`arrow-down`, [[`path`, {
    d: `M12 5v14`,
    key: `s699le`
}], [`path`, {
    d: `m19 12-7 7-7-7`,
    key: `1idqje`
}]])
  , _ = h(`arrow-right`, [[`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
}], [`path`, {
    d: `m12 5 7 7-7 7`,
    key: `xquz4c`
}]])
  , v = h(`arrow-up-right`, [[`path`, {
    d: `M7 7h10v10`,
    key: `1tivn9`
}], [`path`, {
    d: `M7 17 17 7`,
    key: `1vkiza`
}]])
  , y = h(`check`, [[`path`, {
    d: `M20 6 9 17l-5-5`,
    key: `1gmf2c`
}]])
  , b = h(`copy`, [[`rect`, {
    width: `14`,
    height: `14`,
    x: `8`,
    y: `8`,
    rx: `2`,
    ry: `2`,
    key: `17jyea`
}], [`path`, {
    d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
    key: `zix9uf`
}]])
  , x = h(`file-text`, [[`path`, {
    d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
    key: `1oefj6`
}], [`path`, {
    d: `M14 2v5a1 1 0 0 0 1 1h5`,
    key: `wfsgrz`
}], [`path`, {
    d: `M10 9H8`,
    key: `b1mrlr`
}], [`path`, {
    d: `M16 13H8`,
    key: `t4e002`
}], [`path`, {
    d: `M16 17H8`,
    key: `z1uh3a`
}]])
  , S = h(`gamepad-2`, [[`line`, {
    x1: `6`,
    x2: `10`,
    y1: `11`,
    y2: `11`,
    key: `1gktln`
}], [`line`, {
    x1: `8`,
    x2: `8`,
    y1: `9`,
    y2: `13`,
    key: `qnk9ow`
}], [`line`, {
    x1: `15`,
    x2: `15.01`,
    y1: `12`,
    y2: `12`,
    key: `krot7o`
}], [`line`, {
    x1: `18`,
    x2: `18.01`,
    y1: `10`,
    y2: `10`,
    key: `1lcuu1`
}], [`path`, {
    d: `M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,
    key: `mfqc10`
}]])
  , ee = h(`headphones`, [[`path`, {
    d: `M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,
    key: `1xhozi`
}]])
  , C = h(`menu`, [[`path`, {
    d: `M4 5h16`,
    key: `1tepv9`
}], [`path`, {
    d: `M4 12h16`,
    key: `1lakjw`
}], [`path`, {
    d: `M4 19h16`,
    key: `1djgab`
}]])
  , w = h(`message-circle`, [[`path`, {
    d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
    key: `1sd12s`
}]])
  , T = h(`moon`, [[`path`, {
    d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
    key: `kfwtm`
}]])
  , E = h(`play`, [[`path`, {
    d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
    key: `10ikf1`
}]])
  , te = h(`shield`, [[`path`, {
    d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
    key: `oel41y`
}]])
  , D = h(`shopping-bag`, [[`path`, {
    d: `M16 10a4 4 0 0 1-8 0`,
    key: `1ltviw`
}], [`path`, {
    d: `M3.103 6.034h17.794`,
    key: `awc11p`
}], [`path`, {
    d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
    key: `o988cm`
}]])
  , O = h(`sun`, [[`circle`, {
    cx: `12`,
    cy: `12`,
    r: `4`,
    key: `4exip2`
}], [`path`, {
    d: `M12 2v2`,
    key: `tus03m`
}], [`path`, {
    d: `M12 20v2`,
    key: `1lh1kg`
}], [`path`, {
    d: `m4.93 4.93 1.41 1.41`,
    key: `149t6j`
}], [`path`, {
    d: `m17.66 17.66 1.41 1.41`,
    key: `ptbguv`
}], [`path`, {
    d: `M2 12h2`,
    key: `1t8f8n`
}], [`path`, {
    d: `M20 12h2`,
    key: `1q8mjw`
}], [`path`, {
    d: `m6.34 17.66-1.41 1.41`,
    key: `1m8zz5`
}], [`path`, {
    d: `m19.07 4.93-1.41 1.41`,
    key: `1shlcs`
}]])
  , k = h(`swords`, [[`polyline`, {
    points: `14.5 17.5 3 6 3 3 6 3 17.5 14.5`,
    key: `1hfsw2`
}], [`line`, {
    x1: `13`,
    x2: `19`,
    y1: `19`,
    y2: `13`,
    key: `1vrmhu`
}], [`line`, {
    x1: `16`,
    x2: `20`,
    y1: `16`,
    y2: `20`,
    key: `1bron3`
}], [`line`, {
    x1: `19`,
    x2: `21`,
    y1: `21`,
    y2: `19`,
    key: `13pww6`
}], [`polyline`, {
    points: `14.5 6.5 18 3 21 3 21 6 17.5 9.5`,
    key: `hbey2j`
}], [`line`, {
    x1: `5`,
    x2: `9`,
    y1: `14`,
    y2: `18`,
    key: `1hf58s`
}], [`line`, {
    x1: `7`,
    x2: `4`,
    y1: `17`,
    y2: `20`,
    key: `pidxm4`
}], [`line`, {
    x1: `3`,
    x2: `5`,
    y1: `19`,
    y2: `21`,
    key: `1pehsh`
}]])
  , A = h(`users`, [[`path`, {
    d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,
    key: `1yyitq`
}], [`path`, {
    d: `M16 3.128a4 4 0 0 1 0 7.744`,
    key: `16gr8j`
}], [`path`, {
    d: `M22 21v-2a4 4 0 0 0-3-3.87`,
    key: `kshegd`
}], [`circle`, {
    cx: `9`,
    cy: `7`,
    r: `4`,
    key: `nufk8`
}]])
  , j = h(`wheat`, [[`path`, {
    d: `M2 22 16 8`,
    key: `60hf96`
}], [`path`, {
    d: `M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`,
    key: `1rdhi6`
}], [`path`, {
    d: `M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`,
    key: `1sdzmb`
}], [`path`, {
    d: `M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`,
    key: `eoatbi`
}], [`path`, {
    d: `M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z`,
    key: `19rau1`
}], [`path`, {
    d: `M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`,
    key: `tc8ph9`
}], [`path`, {
    d: `M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`,
    key: `2m8kc5`
}], [`path`, {
    d: `M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`,
    key: `vex3ng`
}]])
  , M = h(`x`, [[`path`, {
    d: `M18 6 6 18`,
    key: `1bl5f8`
}], [`path`, {
    d: `m6 6 12 12`,
    key: `d8bk6v`
}]]);
function N(e, t) {
    return function(n, ...r) {
        let i = new URL(e);
        return i.searchParams.set(`code`, n.toString()),
        r.forEach(e => i.searchParams.append(`args[]`, e)),
        `${t} error #${n}; visit ${i} for the full message.`
    }
}
var P = N(`https://base-ui.com/production-error`, `Base UI`)
  , ne = d.createContext(void 0);
function F(e) {
    let t = d.useContext(ne);
    if (!e && t === void 0)
        throw Error(P(27));
    return t
}
var re = {};
function ie(e, t) {
    let n = d.useRef(re);
    return n.current === re && (n.current = e(t)),
    n
}
function I(e, t, n, r) {
    let i = ie(R).current;
    return ae(i, e, t, n, r) && B(i, [e, t, n, r]),
    i.callback
}
function L(e) {
    let t = ie(R).current;
    return z(t, e) && B(t, e),
    t.callback
}
function R() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    }
}
function ae(e, t, n, r, i) {
    return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i
}
function z(e, t) {
    return e.refs.length !== t.length || e.refs.some( (e, n) => e !== t[n])
}
function B(e, t) {
    if (e.refs = t,
    t.every(e => e == null)) {
        e.callback = null;
        return
    }
    e.callback = n => {
        if (e.cleanup &&= (e.cleanup(),
        null),
        n != null) {
            let r = Array(t.length).fill(null);
            for (let e = 0; e < t.length; e += 1) {
                let i = t[e];
                if (i != null)
                    switch (typeof i) {
                    case `function`:
                        {
                            let t = i(n);
                            typeof t == `function` && (r[e] = t);
                            break
                        }
                    case `object`:
                        i.current = n;
                        break;
                    default:
                    }
            }
            e.cleanup = () => {
                for (let e = 0; e < t.length; e += 1) {
                    let n = t[e];
                    if (n != null)
                        switch (typeof n) {
                        case `function`:
                            {
                                let t = r[e];
                                typeof t == `function` ? t() : n(null);
                                break
                            }
                        case `object`:
                            n.current = null;
                            break;
                        default:
                        }
                }
            }
        }
    }
}
var oe = 19;
function V(e) {
    return oe >= e
}
function se(e) {
    if (!d.isValidElement(e))
        return null;
    let t = e
      , n = t.props;
    return (V(19) ? n?.ref : t.ref) ?? null
}
function ce(e, t) {
    if (e && !t)
        return e;
    if (!e && t)
        return t;
    if (e || t)
        return {
            ...e,
            ...t
        }
}
function le() {}
var ue = Object.freeze([])
  , de = Object.freeze({});
function fe(e, t) {
    let n = {};
    for (let r in e) {
        let i = e[r];
        if (t?.hasOwnProperty(r)) {
            let e = t[r](i);
            e != null && Object.assign(n, e);
            continue
        }
        i === !0 ? n[`data-${r.toLowerCase()}`] = `` : i && (n[`data-${r.toLowerCase()}`] = i.toString())
    }
    return n
}
function pe(e, t) {
    return typeof e == `function` ? e(t) : e
}
function me(e, t) {
    return typeof e == `function` ? e(t) : e
}
var he = {};
function ge(e, t, n, r, i) {
    if (!n && !r && !i && !e)
        return ve(t);
    let a = ve(e);
    return t && (a = ye(a, t)),
    n && (a = ye(a, n)),
    r && (a = ye(a, r)),
    i && (a = ye(a, i)),
    a
}
function _e(e) {
    if (e.length === 0)
        return he;
    if (e.length === 1)
        return ve(e[0]);
    let t = ve(e[0]);
    for (let n = 1; n < e.length; n += 1)
        t = ye(t, e[n]);
    return t
}
function ve(e) {
    return Ce(e) ? {
        ...we(e, he)
    } : be(e)
}
function ye(e, t) {
    return Ce(t) ? we(t, e) : xe(e, t)
}
function be(e) {
    let t = {
        ...e
    };
    for (let e in t) {
        let n = t[e];
        Se(e, n) && (t[e] = Ee(n))
    }
    return t
}
function xe(e, t) {
    if (!t)
        return e;
    for (let n in t) {
        let r = t[n];
        switch (n) {
        case `style`:
            e[n] = ce(e.style, r);
            break;
        case `className`:
            e[n] = Oe(e.className, r);
            break;
        default:
            Se(n, r) ? e[n] = Te(e[n], r) : e[n] = r
        }
    }
    return e
}
function Se(e, t) {
    let n = e.charCodeAt(0)
      , r = e.charCodeAt(1)
      , i = e.charCodeAt(2);
    return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == `function` || t === void 0)
}
function Ce(e) {
    return typeof e == `function`
}
function we(e, t) {
    return Ce(e) ? e(t) : e ?? he
}
function Te(e, t) {
    return t ? e ? (...n) => {
        let r = n[0];
        if (ke(r)) {
            let i = r;
            De(i);
            let a = t(...n);
            return i.baseUIHandlerPrevented || e?.(...n),
            a
        }
        let i = t(...n);
        return e?.(...n),
        i
    }
    : Ee(t) : e
}
function Ee(e) {
    return e && ( (...t) => {
        let n = t[0];
        return ke(n) && De(n),
        e(...t)
    }
    )
}
function De(e) {
    return e.preventBaseUIHandler = () => {
        e.baseUIHandlerPrevented = !0
    }
    ,
    e
}
function Oe(e, t) {
    return t ? e ? t + ` ` + e : t : e
}
function ke(e) {
    return typeof e == `object` && !!e && `nativeEvent` in e
}
function Ae(e, t, n={}) {
    let r = t.render
      , i = je(t, n);
    return n.enabled === !1 ? null : Pe(e, r, i, n.state ?? de)
}
function je(e, t={}) {
    let {className: n, style: r, render: i} = e
      , {state: a=de, ref: o, props: s, stateAttributesMapping: c, enabled: l=!0} = t
      , u = l ? pe(n, a) : void 0
      , d = l ? me(r, a) : void 0
      , f = l ? fe(a, c) : de
      , p = l && s ? Me(s) : void 0
      , m = l ? ce(f, p) ?? {} : de;
    return typeof document < `u` && (l ? Array.isArray(o) ? m.ref = L([m.ref, se(i), ...o]) : m.ref = I(m.ref, se(i), o) : I(null, null)),
    l ? (u !== void 0 && (m.className = Oe(m.className, u)),
    d !== void 0 && (m.style = ce(m.style, d)),
    m) : de
}
function Me(e) {
    return Array.isArray(e) ? _e(e) : ge(void 0, e)
}
var Ne = Symbol.for(`react.lazy`);
function Pe(e, t, n, r) {
    if (t) {
        if (typeof t == `function`)
            return t(n, r);
        let e = ge(n, t.props);
        e.ref = n.ref;
        let i = t;
        return i?.$$typeof === Ne && (i = d.Children.toArray(t)[0]),
        d.cloneElement(i, e)
    }
    if (e && typeof e == `string`)
        return Fe(e, n);
    throw Error(P(8))
}
function Fe(e, t) {
    return e === `button` ? (0,
    d.createElement)(`button`, {
        type: `button`,
        ...t,
        key: t.key
    }) : e === `img` ? (0,
    d.createElement)(`img`, {
        alt: ``,
        ...t,
        key: t.key
    }) : d.createElement(e, t)
}
var Ie = function(e) {
    return e.startingStyle = `data-starting-style`,
    e.endingStyle = `data-ending-style`,
    e
}({})
  , Le = {
    "data-starting-style": ``
}
  , Re = {
    "data-ending-style": ``
}
  , ze = {
    transitionStatus(e) {
        return e === `starting` ? Le : e === `ending` ? Re : null
    }
};
(function(e) {
    return e.open = `data-open`,
    e.closed = `data-closed`,
    e[e.startingStyle = Ie.startingStyle] = `startingStyle`,
    e[e.endingStyle = Ie.endingStyle] = `endingStyle`,
    e.anchorHidden = `data-anchor-hidden`,
    e.side = `data-side`,
    e.align = `data-align`,
    e
}
)({});
var Be = {
    "data-open": ``
}
  , Ve = {
    "data-closed": ``
}
  , He = {
    "data-anchor-hidden": ``
}
  , Ue = {
    open(e) {
        return e ? Be : Ve
    },
    anchorHidden(e) {
        return e ? He : null
    }
}
  , We = {
    ...Ue,
    ...ze
}
  , Ge = d.forwardRef(function(e, t) {
    let {render: n, className: r, style: i, forceRender: a=!1, ...o} = e
      , s = F()
      , c = s.useState(`open`)
      , l = s.useState(`nested`)
      , u = s.useState(`mounted`);
    return Ae(`div`, e, {
        state: {
            open: c,
            transitionStatus: s.useState(`transitionStatus`)
        },
        ref: [s.context.backdropRef, t],
        stateAttributesMapping: We,
        props: [{
            role: `presentation`,
            hidden: !u,
            style: {
                userSelect: `none`,
                WebkitUserSelect: `none`
            }
        }, o],
        enabled: a || !l
    })
});
function Ke() {
    return !0
}
function qe(e) {
    return Xe(e) ? (e.nodeName || ``).toLowerCase() : `#document`
}
function Je(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ye(e) {
    return ((Xe(e) ? e.ownerDocument : e.document) || window.document)?.documentElement
}
function Xe(e) {
    return Ke() ? e instanceof Node || e instanceof Je(e).Node : !1
}
function Ze(e) {
    return Ke() ? e instanceof Element || e instanceof Je(e).Element : !1
}
function Qe(e) {
    return Ke() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1
}
function $e(e) {
    return !Ke() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot
}
function et(e) {
    let {overflow: t, overflowX: n, overflowY: r, display: i} = nt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`
}
function tt(e) {
    return /^(html|body|#document)$/.test(qe(e))
}
function nt(e) {
    return Je(e).getComputedStyle(e)
}
function rt(e) {
    if (qe(e) === `html`)
        return e;
    let t = e.assignedSlot || e.parentNode || $e(e) && e.host || Ye(e);
    return $e(t) ? t.host : t
}
var it = {
    ...d
}
  , at = it.useInsertionEffect
  , ot = at && at !== it.useLayoutEffect ? at : e => e();
function H(e) {
    let t = ie(st).current;
    return t.next = e,
    ot(t.effect),
    t.trampoline
}
function st() {
    let e = {
        next: void 0,
        callback: ct,
        trampoline: (...t) => e.callback?.(...t),
        effect: () => {
            e.callback = e.next
        }
    };
    return e
}
function ct() {}
var U = typeof document < `u` ? d.useLayoutEffect : () => {}
  , lt = d.createContext(void 0);
function ut(e=!1) {
    let t = d.useContext(lt);
    if (t === void 0 && !e)
        throw Error(P(16));
    return t
}
function dt(e) {
    let {focusableWhenDisabled: t, disabled: n, composite: r=!1, tabIndex: i=0, isNativeButton: a} = e
      , o = r && t !== !1
      , s = r && t === !1;
    return {
        props: d.useMemo( () => {
            let e = {
                onKeyDown(e) {
                    n && t && e.key !== `Tab` && e.preventDefault()
                }
            };
            return r || (e.tabIndex = i,
            !a && n && (e.tabIndex = t ? i : -1)),
            (a && (t || o) || !a && n) && (e[`aria-disabled`] = n),
            a && (!t || s) && (e.disabled = n),
            e
        }
        , [r, n, t, o, s, a, i])
    }
}
function W(e) {
    return e?.ownerDocument || document
}
function ft(e, t, {detail: n=0}={}) {
    e.dispatchEvent(new (Je(e)).PointerEvent(`click`,{
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        detail: n,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        metaKey: t.metaKey
    }))
}
function pt(e={}) {
    let {disabled: t=!1, focusableWhenDisabled: n, tabIndex: r=0, native: i=!0, composite: a} = e
      , o = d.useRef(null)
      , s = ut(!0)
      , c = a ?? s !== void 0
      , {props: l} = dt({
        focusableWhenDisabled: n,
        disabled: t,
        composite: c,
        tabIndex: r,
        isNativeButton: i
    })
      , u = d.useCallback( () => {
        let e = o.current;
        mt(e) && c && t && l.disabled === void 0 && e.disabled && (e.disabled = !1)
    }
    , [t, l.disabled, c]);
    return U(u, [u]),
    {
        getButtonProps: d.useCallback( (e={}) => {
            let {onClick: n, onMouseDown: r, onKeyUp: a, onKeyDown: o, onPointerDown: s, ...u} = e;
            return ge({
                onClick(e) {
                    if (t) {
                        e.preventDefault();
                        return
                    }
                    n?.(e)
                },
                onMouseDown(e) {
                    t || r?.(e)
                },
                onKeyDown(e) {
                    if (t || (De(e),
                    o?.(e),
                    e.baseUIHandlerPrevented))
                        return;
                    let n = e.target === e.currentTarget
                      , r = e.currentTarget
                      , a = mt(r)
                      , s = !i && ht(r)
                      , l = n && (i ? a : !s)
                      , u = e.key === `Enter`
                      , d = e.key === ` `
                      , f = r.getAttribute(`role`)
                      , p = f?.startsWith(`menuitem`) || f === `option` || f === `gridcell`;
                    if (n && c && d) {
                        if (e.defaultPrevented && p)
                            return;
                        e.preventDefault(),
                        (!i || a) && (e.preventBaseUIHandler(),
                        ft(r, e));
                        return
                    }
                    if (!l || i || !d && !u) {
                        n && s && d && e.preventDefault();
                        return
                    }
                    e.defaultPrevented || (e.preventDefault(),
                    u && (e.preventBaseUIHandler(),
                    ft(r, e)))
                },
                onKeyUp(e) {
                    if (!t) {
                        if (De(e),
                        a?.(e),
                        e.target === e.currentTarget && i && c && mt(e.currentTarget) && e.key === ` `) {
                            e.preventDefault();
                            return
                        }
                        e.baseUIHandlerPrevented || e.target === e.currentTarget && !i && !c && !e.defaultPrevented && e.key === ` ` && (e.preventBaseUIHandler(),
                        ft(e.currentTarget, e))
                    }
                },
                onPointerDown(e) {
                    if (t) {
                        e.preventDefault();
                        return
                    }
                    s?.(e)
                }
            }, i ? {
                type: `button`
            } : {
                role: `button`
            }, l, u)
        }
        , [t, l, c, i]),
        buttonRef: H(e => {
            o.current = e,
            u()
        }
        )
    }
}
function mt(e) {
    return Qe(e) && e.tagName === `BUTTON`
}
function ht(e) {
    return Qe(e) && e.tagName === `A` && !!e.href
}
var gt = `none`
  , _t = `trigger-press`
  , vt = `outside-press`
  , yt = `close-press`
  , bt = `focus-out`
  , xt = `escape-key`
  , St = `imperative-action`;
function Ct(e, t, n, r) {
    let i = !1
      , a = !1
      , o = r ?? de;
    return {
        reason: e,
        event: t ?? new Event(`base-ui`),
        cancel() {
            i = !0
        },
        allowPropagation() {
            a = !0
        },
        get isCanceled() {
            return i
        },
        get isPropagationAllowed() {
            return a
        },
        trigger: n,
        ...o
    }
}
var wt = d.forwardRef(function(e, t) {
    let {render: n, className: r, style: i, disabled: a=!1, nativeButton: o=!0, ...s} = e
      , c = F()
      , l = c.useState(`open`)
      , {getButtonProps: u, buttonRef: d} = pt({
        disabled: a,
        native: o
    })
      , f = {
        disabled: a
    };
    function p(e) {
        l && c.setOpen(!1, Ct(yt, e.nativeEvent))
    }
    return Ae(`button`, e, {
        state: f,
        ref: [t, d],
        props: [{
            onClick: p
        }, s, u]
    })
})
  , Tt = 0;
function Et(e, t=`mui`) {
    let[n,r] = d.useState(e)
      , i = e || n;
    return d.useEffect( () => {
        n ?? (Tt += 1,
        r(`${t}-${Tt}`))
    }
    , [n, t]),
    i
}
var Dt = it.useId;
function Ot(e, t) {
    if (Dt !== void 0) {
        let n = Dt();
        return e ?? (t ? `${t}-${n}` : n)
    }
    return Et(e, t)
}
function kt(e) {
    return Ot(e, `base-ui`)
}
var At = d.forwardRef(function(e, t) {
    let {render: n, className: r, style: i, id: a, ...o} = e
      , s = F()
      , c = kt(a);
    return s.useSyncedValueWithCleanup(`descriptionElementId`, c),
    Ae(`p`, e, {
        ref: t,
        props: [{
            id: c
        }, o]
    })
});
function jt(e) {
    d.useEffect(e, ue)
}
var Mt = 0
  , Nt = class e {
    static create() {
        return new e
    }
    currentId = Mt;
    start(e, t) {
        this.clear(),
        this.currentId = setTimeout( () => {
            this.currentId = Mt,
            t()
        }
        , e)
    }
    isStarted() {
        return this.currentId !== Mt
    }
    clear = () => {
        this.currentId !== Mt && (clearTimeout(this.currentId),
        this.currentId = Mt)
    }
    ;
    disposeEffect = () => this.clear
}
;
function Pt() {
    let e = ie(Nt.create).current;
    return jt(e.disposeEffect),
    e
}
function Ft() {
    return typeof navigator > `u` ? {
        userAgent: ``,
        platform: ``,
        maxTouchPoints: 0
    } : {
        userAgent: navigator.userAgent,
        platform: navigator.platform ?? ``,
        maxTouchPoints: navigator.maxTouchPoints ?? 0
    }
}
var {userAgent: It, platform: Lt, maxTouchPoints: Rt} = Ft()
  , zt = It.toLowerCase()
  , Bt = Lt.toLowerCase()
  , Vt = /^i(os$|p)/.test(Bt) || Bt === `macintel` && Rt > 1
  , Ht = `android`
  , Ut = Bt === Ht || zt.includes(Ht)
  , Wt = !Vt && Bt.startsWith(`mac`);
Bt.startsWith(`win`),
!Ut && /^(linux|chrome os)/.test(Bt);
var Gt = Wt || Vt
  , Kt = typeof CSS < `u` && !!CSS.supports?.(`-webkit-backdrop-filter:none`);
!Kt && zt.includes(`firefox`),
!Kt && zt.includes(`chrom`);
var qt = Gt
  , Jt = /jsdom|happydom/.test(zt);
function Yt(e) {
    e.preventDefault(),
    e.stopPropagation()
}
function Xt(e) {
    return `nativeEvent` in e
}
function Zt(e) {
    return e.pointerType === `` && e.isTrusted ? !0 : Ut && e.pointerType ? e.type === `click` && e.buttons === 1 : e.detail === 0 && !e.pointerType
}
function Qt(e) {
    return Jt ? !1 : !Ut && e.width === 0 && e.height === 0 || Ut && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === `mouse` || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === `touch`
}
function $t(e) {
    let t = e.type;
    return t === `click` || t === `mousedown` || t === `keydown` || t === `keyup`
}
var en = `data-base-ui-focusable`;
function tn(e) {
    let t = e.activeElement;
    for (; t?.shadowRoot?.activeElement != null; )
        t = t.shadowRoot.activeElement;
    return t
}
function G(e, t) {
    if (!e || !t)
        return !1;
    let n = t.getRootNode?.();
    if (e.contains(t))
        return !0;
    if (n && $e(n)) {
        let n = t;
        for (; n; ) {
            if (e === n)
                return !0;
            n = n.parentNode || n.host
        }
    }
    return !1
}
function nn(e) {
    return `composedPath` in e ? e.composedPath()[0] : e.target
}
function rn(e, t) {
    if (t == null)
        return !1;
    if (`composedPath` in e)
        return e.composedPath().includes(t);
    let n = e;
    return n.target != null && t.contains(n.target)
}
function an(e) {
    return e.matches(`html,body`)
}
function on(e) {
    return Qe(e) && e.matches(`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`)
}
function sn(e) {
    return e ? e.getAttribute(`role`) === `combobox` && on(e) : !1
}
function cn(e) {
    return e ? e.hasAttribute(`data-base-ui-focusable`) ? e : e.querySelector(`[data-base-ui-focusable]`) || e : null
}
function K(e, t, n, r) {
    return e.addEventListener(t, n, r),
    () => {
        e.removeEventListener(t, n, r)
    }
}
function ln(...e) {
    return () => {
        for (let t = 0; t < e.length; t += 1) {
            let n = e[t];
            n && n()
        }
    }
}
function un(e) {
    let t = ie(dn, e).current;
    return t.next = e,
    U(t.effect),
    t
}
function dn(e) {
    let t = {
        current: e,
        next: e,
        effect: () => {
            t.current = t.next
        }
    };
    return t
}
var fn = null;
globalThis.requestAnimationFrame;
var pn = new class {
    callbacks = [];
    callbacksCount = 0;
    nextId = 1;
    startId = 1;
    isScheduled = !1;
    tick = e => {
        this.isScheduled = !1;
        let t = this.callbacks
          , n = this.callbacksCount;
        if (this.callbacks = [],
        this.callbacksCount = 0,
        this.startId = this.nextId,
        n > 0)
            for (let n = 0; n < t.length; n += 1)
                t[n]?.(e)
    }
    ;
    request(e) {
        let t = this.nextId;
        return this.nextId += 1,
        this.callbacks.push(e),
        this.callbacksCount += 1,
        this.isScheduled ||= (requestAnimationFrame(this.tick),
        !0),
        t
    }
    cancel(e) {
        let t = e - this.startId;
        t < 0 || t >= this.callbacks.length || (this.callbacks[t] = null,
        --this.callbacksCount)
    }
}
  , mn = class e {
    static create() {
        return new e
    }
    static request(e) {
        return pn.request(e)
    }
    static cancel(e) {
        return pn.cancel(e)
    }
    currentId = fn;
    request(e) {
        this.cancel(),
        this.currentId = pn.request( () => {
            this.currentId = fn,
            e()
        }
        )
    }
    cancel = () => {
        this.currentId !== fn && (pn.cancel(this.currentId),
        this.currentId = fn)
    }
    ;
    disposeEffect = () => this.cancel
}
;
function hn() {
    let e = ie(mn.create).current;
    return jt(e.disposeEffect),
    e
}
var gn = {
    clipPath: `inset(50%)`,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1
}
  , _n = {
    ...gn,
    position: `fixed`,
    top: 0,
    left: 0
};
({
    ...gn
});
var q = i()
  , vn = d.forwardRef(function(e, t) {
    let[n,r] = d.useState();
    U( () => {
        qt && Kt && r(`button`)
    }
    , []);
    let i = {
        tabIndex: 0,
        role: n
    };
    return (0,
    q.jsx)(`span`, {
        ...e,
        ref: t,
        style: _n,
        "aria-hidden": n ? void 0 : !0,
        ...i,
        "data-base-ui-focus-guard": ``
    })
});
function yn(e) {
    return e.visibility === `hidden` || e.visibility === `collapse`
}
function bn(e, t=e ? nt(e) : null) {
    return !e || !e.isConnected || !t || yn(t) ? !1 : typeof e.checkVisibility == `function` ? e.checkVisibility() : t.display !== `none` && t.display !== `contents`
}
var xn = `a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;
function Sn(e) {
    let t = e.assignedSlot;
    if (t)
        return t;
    if (e.parentElement)
        return e.parentElement;
    let n = e.getRootNode();
    return $e(n) ? n.host : null
}
function Cn(e) {
    for (let t of Array.from(e.children))
        if (qe(t) === `summary`)
            return t;
    return null
}
function wn(e, t) {
    let n = Cn(t);
    return !!n && (e === n || G(n, e))
}
function Tn(e) {
    let t = e ? qe(e) : ``;
    return e != null && e.matches(xn) && (t !== `summary` || e.parentElement != null && qe(e.parentElement) === `details` && Cn(e.parentElement) === e) && (t !== `details` || Cn(e) == null) && (t !== `input` || e.type !== `hidden`)
}
function En(e) {
    if (!Tn(e) || !e.isConnected || e.matches(`:disabled`))
        return !1;
    for (let t = e; t; t = Sn(t)) {
        let n = t !== e
          , r = qe(t) === `slot`;
        if (t.hasAttribute(`inert`) || n && qe(t) === `details` && !t.open && !wn(e, t) || t.hasAttribute(`hidden`) || !r && !Dn(t, n))
            return !1
    }
    return !0
}
function Dn(e, t) {
    let n = nt(e);
    return t ? n.display !== `none` : bn(e, n)
}
function On(e) {
    let t = e.tabIndex;
    if (t < 0) {
        let t = qe(e);
        if (t === `details` || t === `audio` || t === `video` || Qe(e) && e.isContentEditable)
            return 0
    }
    return t
}
function kn(e) {
    if (qe(e) !== `input`)
        return null;
    let t = e;
    return t.type === `radio` && t.name !== `` ? t : null
}
function An(e, t) {
    let n = kn(e);
    if (!n)
        return !0;
    let r = t.find(e => {
        let t = kn(e);
        return t?.name === n.name && t.form === n.form && t.checked
    }
    );
    return r ? r === n : t.find(e => {
        let t = kn(e);
        return t?.name === n.name && t.form === n.form
    }
    ) === n
}
function jn(e) {
    if (Qe(e) && qe(e) === `slot`) {
        let t = e.assignedElements({
            flatten: !0
        });
        if (t.length > 0)
            return t
    }
    return Qe(e) && e.shadowRoot ? Array.from(e.shadowRoot.children) : Array.from(e.children)
}
function Mn(e, t) {
    jn(e).forEach(e => {
        Tn(e) && t.push(e),
        Mn(e, t)
    }
    )
}
function Nn(e, t, n) {
    jn(e).forEach(e => {
        Qe(e) && e.matches(t) && n.push(e),
        Nn(e, t, n)
    }
    )
}
function Pn(e) {
    return En(e) && On(e) >= 0
}
function Fn(e) {
    let t = [];
    return Mn(e, t),
    t.filter(En)
}
function In(e) {
    let t = Fn(e);
    return t.filter(e => On(e) >= 0 && An(e, t))
}
function Ln(e, t) {
    let n = In(e)
      , r = n.length;
    if (r === 0)
        return;
    let i = tn(W(e))
      , a = n.indexOf(i);
    return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t]
}
function Rn(e) {
    return Ln(W(e).body, 1) || e
}
function zn(e) {
    return Ln(W(e).body, -1) || e
}
function Bn(e, t) {
    let n = t || e.currentTarget
      , r = e.relatedTarget;
    return !r || !G(n, r)
}
function Vn(e) {
    In(e).forEach(e => {
        e.dataset.tabindex = e.getAttribute(`tabindex`) || ``,
        e.setAttribute(`tabindex`, `-1`)
    }
    )
}
function Hn(e) {
    let t = [];
    Nn(e, `[data-tabindex]`, t),
    t.forEach(e => {
        let t = e.dataset.tabindex;
        delete e.dataset.tabindex,
        t ? e.setAttribute(`tabindex`, t) : e.removeAttribute(`tabindex`)
    }
    )
}
function Un(e, t, n=!0) {
    return e.filter(e => e.parentId === t).flatMap(t => [...!n || t.context?.open ? [t] : [], ...Un(e, t.id, n)])
}
function Wn(e, t) {
    let n = []
      , r = e.find(e => e.id === t)?.parentId;
    for (; r; ) {
        let t = e.find(e => e.id === r);
        r = t?.parentId,
        t && (n = n.concat(t))
    }
    return n
}
function Gn(e) {
    return `data-base-ui-${e}`
}
var Kn = 0;
function qn(e, t={}) {
    let {preventScroll: n=!1, sync: r=!1, shouldFocus: i} = t;
    cancelAnimationFrame(Kn);
    function a() {
        i && !i() || e?.focus({
            preventScroll: n
        })
    }
    if (r)
        return a(),
        le;
    let o = requestAnimationFrame(a);
    return Kn = o,
    () => {
        Kn === o && (cancelAnimationFrame(o),
        Kn = 0)
    }
}
var Jn = {
    inert: new WeakMap,
    "aria-hidden": new WeakMap
}
  , Yn = `data-base-ui-inert`
  , Xn = {
    inert: new WeakSet,
    "aria-hidden": new WeakSet
}
  , Zn = new WeakMap
  , Qn = 0;
function $n(e) {
    return Xn[e]
}
function er(e) {
    return e ? $e(e) ? e.host : er(e.parentNode) : null
}
var tr = (e, t) => t.map(t => {
    if (e.contains(t))
        return t;
    let n = er(t);
    return e.contains(n) ? n : null
}
).filter(e => e != null)
  , nr = e => {
    let t = new Set;
    return e.forEach(e => {
        let n = e;
        for (; n && !t.has(n); )
            t.add(n),
            n = n.parentNode
    }
    ),
    t
}
  , rr = (e, t, n) => {
    let r = []
      , i = e => {
        !e || n.has(e) || Array.from(e.children).forEach(e => {
            qe(e) !== `script` && (t.has(e) ? i(e) : r.push(e))
        }
        )
    }
    ;
    return i(e),
    r
}
;
function ir(e, t, n, r, {mark: i=!0}) {
    let a = null;
    r ? a = `inert` : n && (a = `aria-hidden`);
    let o = null
      , s = null
      , c = tr(t, e)
      , l = i ? rr(t, nr(c), new Set(c)) : []
      , u = []
      , d = [];
    if (a) {
        let e = Jn[a]
          , n = $n(a);
        s = n,
        o = e;
        let r = tr(t, Array.from(t.querySelectorAll(`[aria-live]`)))
          , i = c.concat(r);
        rr(t, nr(i), new Set(i)).forEach(t => {
            let r = t.getAttribute(a)
              , i = r !== null && r !== `false`
              , o = (e.get(t) || 0) + 1;
            e.set(t, o),
            u.push(t),
            o === 1 && i && n.add(t),
            i || t.setAttribute(a, a === `inert` ? `` : `true`)
        }
        )
    }
    return i && l.forEach(e => {
        let t = (Zn.get(e) || 0) + 1;
        Zn.set(e, t),
        d.push(e),
        t === 1 && e.setAttribute(Yn, ``)
    }
    ),
    Qn += 1,
    () => {
        o && u.forEach(e => {
            let t = (o.get(e) || 0) - 1;
            o.set(e, t),
            t || (!s?.has(e) && a && e.removeAttribute(a),
            s?.delete(e))
        }
        ),
        i && d.forEach(e => {
            let t = (Zn.get(e) || 0) - 1;
            Zn.set(e, t),
            t || e.removeAttribute(Yn)
        }
        ),
        --Qn,
        Qn || (Jn.inert = new WeakMap,
        Jn[`aria-hidden`] = new WeakMap,
        Xn.inert = new WeakSet,
        Xn[`aria-hidden`] = new WeakSet,
        Zn = new WeakMap)
    }
}
function ar(e, t={}) {
    let {ariaHidden: n=!1, inert: r=!1, mark: i=!0} = t
      , a = W(e[0]).body;
    return ir(e, a, n, r, {
        mark: i
    })
}
var or = {
    clipPath: `inset(50%)`,
    position: `fixed`,
    top: 0,
    left: 0
}
  , sr = e(r(), 1)
  , cr = d.createContext(null)
  , lr = () => d.useContext(cr)
  , ur = Gn(`portal`);
function dr(e={}) {
    let {ref: t, container: n, componentProps: r=de, elementProps: i} = e
      , a = Ot()
      , o = lr()?.portalNode
      , [s,c] = d.useState(null)
      , [l,u] = d.useState(null)
      , f = H(e => {
        e !== null && u(e)
    }
    )
      , p = d.useRef(null);
    U( () => {
        if (n === null) {
            p.current && (p.current = null,
            u(null),
            c(null));
            return
        }
        let e = (n && (Xe(n) ? n : n.current)) ?? o ?? document.body;
        if (e == null) {
            p.current && (p.current = null,
            u(null),
            c(null));
            return
        }
        p.current !== e && (p.current = e,
        u(null),
        c(e))
    }
    , [n, o]);
    let m = Ae(`div`, r, {
        ref: [t, f],
        props: [{
            id: a,
            [ur]: ``
        }, i]
    })
      , h = s && m ? sr.createPortal(m, s) : null;
    return {
        node: l,
        nodeId: d.isValidElement(m) ? m.props.id : void 0,
        subtree: h
    }
}
var fr = d.forwardRef(function(e, t) {
    let {render: n, className: r, style: i, children: a, container: o, ...s} = e
      , {node: c, nodeId: l, subtree: u} = dr({
        container: o,
        ref: t,
        componentProps: e,
        elementProps: s
    })
      , f = d.useRef(null)
      , p = d.useRef(null)
      , m = d.useRef(null)
      , h = d.useRef(null)
      , [g,_] = d.useState(null)
      , v = d.useRef(!1)
      , y = g?.modal
      , b = g?.open
      , x = !!g && !g.modal && g.open && !!c;
    d.useEffect( () => {
        if (!c || y)
            return;
        function e(e) {
            c && e.relatedTarget && Bn(e) && (e.type === `focusin` ? v.current &&= (Hn(c),
            !1) : (Vn(c),
            v.current = !0))
        }
        return ln(K(c, `focusin`, e, !0), K(c, `focusout`, e, !0))
    }
    , [c, y]),
    U( () => {
        !c || b !== !0 || !v.current || (Hn(c),
        v.current = !1)
    }
    , [b, c]);
    let S = d.useMemo( () => ({
        beforeOutsideRef: f,
        afterOutsideRef: p,
        beforeInsideRef: m,
        afterInsideRef: h,
        portalNode: c,
        setFocusManagerState: _
    }), [c]);
    return (0,
    q.jsxs)(d.Fragment, {
        children: [u, (0,
        q.jsxs)(cr.Provider, {
            value: S,
            children: [x && c && (0,
            q.jsx)(vn, {
                "data-type": `outside`,
                ref: f,
                onFocus: e => {
                    Bn(e, c) ? m.current?.focus() : zn(g ? g.domReference : null)?.focus()
                }
            }), x && c && (0,
            q.jsx)(`span`, {
                "aria-owns": l,
                style: or
            }), c && sr.createPortal(a, c), x && c && (0,
            q.jsx)(vn, {
                "data-type": `outside`,
                ref: p,
                onFocus: e => {
                    Bn(e, c) ? h.current?.focus() : (Rn(g ? g.domReference : null)?.focus(),
                    g?.closeOnFocusOut && g?.onOpenChange(!1, Ct(`focus-out`, e.nativeEvent)))
                }
            })]
        })]
    })
});
function pr() {
    let e = new Map;
    return {
        emit(t, n) {
            e.get(t)?.forEach(e => e(n))
        },
        on(t, n) {
            e.has(t) || e.set(t, new Set),
            e.get(t).add(n)
        },
        off(t, n) {
            e.get(t)?.delete(n)
        }
    }
}
var mr = d.createContext(null)
  , hr = d.createContext(null)
  , gr = () => d.useContext(mr)?.id || null
  , _r = e => {
    let t = d.useContext(hr);
    return e ?? t
}
;
function vr(e) {
    return e == null ? e : `current` in e ? e.current : e
}
function yr(e, t) {
    let n = Je(nn(e));
    return e instanceof n.KeyboardEvent ? `keyboard` : e instanceof n.FocusEvent ? t || `keyboard` : `pointerType` in e ? e.pointerType || `keyboard` : `touches` in e ? `touch` : e instanceof n.MouseEvent ? t || (e.detail === 0 ? `keyboard` : `mouse`) : ``
}
var br = 20
  , xr = [];
function Sr() {
    xr = xr.filter(e => e.deref()?.isConnected)
}
function Cr(e) {
    Sr(),
    e && qe(e) !== `body` && (xr.push(new WeakRef(e)),
    xr.length > br && (xr = xr.slice(-br)))
}
function wr() {
    return Sr(),
    xr[xr.length - 1]?.deref()
}
function Tr(e) {
    return e ? Pn(e) ? e : In(e)[0] || e : null
}
function Er(e) {
    if (e.hasAttribute(`tabindex`) && !e.hasAttribute(`data-tabindex`) || !e.getAttribute(`role`)?.includes(`dialog`))
        return;
    let t = Fn(e).filter(e => {
        let t = e.getAttribute(`data-tabindex`) || ``;
        return Pn(e) || e.hasAttribute(`data-tabindex`) && !t.startsWith(`-`)
    }
    )
      , n = e.getAttribute(`tabindex`);
    t.length === 0 ? n !== `0` && (e.setAttribute(`tabindex`, `0`),
    e.setAttribute(`data-tabindex`, `0`)) : (n !== `-1` || e.hasAttribute(`data-tabindex`) && e.getAttribute(`data-tabindex`) !== `-1`) && (e.setAttribute(`tabindex`, `-1`),
    e.setAttribute(`data-tabindex`, `-1`))
}
function Dr(e) {
    let {context: t, children: n, disabled: r=!1, initialFocus: i=!0, returnFocus: a=!0, restoreFocus: o=!1, modal: s=!0, closeOnFocusOut: c=!0, openInteractionType: l=``, nextFocusableElement: u, previousFocusableElement: f, beforeContentFocusGuardRef: p, externalTree: m, getInsideElements: h} = e
      , g = `rootStore` in t ? t.rootStore : t
      , _ = g.useState(`open`)
      , v = g.useState(`domReferenceElement`)
      , y = g.useState(`floatingElement`)
      , {events: b, dataRef: x} = g.context
      , S = H( () => x.current.floatingContext?.nodeId)
      , ee = i === !1
      , C = sn(v) && ee
      , w = un(i)
      , T = un(a)
      , E = un(l)
      , te = un(_)
      , D = _r(m)
      , O = lr()
      , k = d.useRef(!1)
      , A = d.useRef(!1)
      , j = d.useRef(!1)
      , M = d.useRef(null)
      , N = d.useRef(``)
      , P = d.useRef(``)
      , ne = d.useRef(null)
      , F = d.useRef(null)
      , re = I(ne, p, O?.beforeInsideRef)
      , ie = I(F, O?.afterInsideRef)
      , L = Pt()
      , R = Pt()
      , ae = hn()
      , z = O != null
      , B = cn(y)
      , oe = H( (e=B) => e ? In(e) : [])
      , V = H( () => h?.().filter(e => e != null) ?? []);
    d.useEffect( () => {
        if (r || !s)
            return;
        function e(e) {
            e.key === `Tab` && G(B, tn(W(B))) && oe().length === 0 && !C && Yt(e)
        }
        return K(W(B), `keydown`, e)
    }
    , [r, B, s, C, oe]),
    d.useEffect( () => {
        if (r || !_)
            return;
        let e = W(B);
        function t() {
            j.current = !1
        }
        function n(e) {
            let t = nn(e)
              , n = V();
            j.current = !(G(y, t) || G(v, t) || G(O?.portalNode, t) || n.some(e => e === t || G(e, t))),
            P.current = e.pointerType || `keyboard`,
            t?.closest(`[data-base-ui-click-trigger]`) && (A.current = !0,
            R.start(0, () => {
                A.current = !1
            }
            ))
        }
        function i() {
            P.current = `keyboard`
        }
        return ln(K(e, `pointerdown`, n, !0), K(e, `pointerup`, t, !0), K(e, `pointercancel`, t, !0), K(e, `keydown`, i, !0), t)
    }
    , [r, y, v, B, _, O, R, V]),
    d.useEffect( () => {
        if (r || !c)
            return;
        let e = W(B);
        function t() {
            A.current = !0,
            R.start(0, () => {
                A.current = !1
            }
            )
        }
        function n(e) {
            let t = nn(e);
            Pn(t) && (M.current = t)
        }
        function i(t) {
            let n = t.relatedTarget
              , r = t.currentTarget
              , i = nn(t);
            s && n == null && i != null && G(y, i) && Cr(i),
            queueMicrotask( () => {
                let a = S()
                  , c = g.context.triggerElements
                  , l = V()
                  , d = n?.hasAttribute(Gn(`focus-guard`)) && [ne.current, F.current, O?.beforeInsideRef.current, O?.afterInsideRef.current, O?.beforeOutsideRef.current, O?.afterOutsideRef.current, vr(f), vr(u)].includes(n)
                  , p = !(G(v, n) || G(y, n) || G(n, y) || G(O?.portalNode, n) || l.some(e => e === n || G(e, n)) || c.hasMatchingElement(e => G(e, n)) || d || D && (Un(D.nodesRef.current, a).find(e => G(e.context?.elements.floating, n) || G(e.context?.elements.domReference, n)) || Wn(D.nodesRef.current, a).find(e => [e.context?.elements.floating, cn(e.context?.elements.floating)].includes(n) || e.context?.elements.domReference === n)));
                if (r === v && B && Er(B),
                o && r !== v && !bn(i) && tn(e) === e.body) {
                    if (Qe(B) && (B.focus(),
                    o === `popup`)) {
                        ae.request( () => {
                            B.focus()
                        }
                        );
                        return
                    }
                    let e = oe()
                      , t = M.current
                      , n = (t && e.includes(t) ? t : null) || e[e.length - 1] || B;
                    Qe(n) && n.focus()
                }
                if (x.current.insideReactTree) {
                    x.current.insideReactTree = !1;
                    return
                }
                (C || !s) && n && p && !A.current && (C || n !== wr()) && (k.current = !0,
                g.setOpen(!1, Ct(bt, t)))
            }
            )
        }
        function a() {
            j.current || (x.current.insideReactTree = !0,
            L.start(0, () => {
                x.current.insideReactTree = !1
            }
            ))
        }
        let l = Qe(v) ? v : null;
        if (!(!y && !l))
            return ln(l && K(l, `focusout`, i), l && K(l, `pointerdown`, t), y && K(y, `focusin`, n), y && K(y, `focusout`, i), y && O && K(y, `focusout`, a, !0))
    }
    , [r, v, y, B, s, D, O, g, c, o, oe, C, S, x, L, R, ae, u, f, V]),
    d.useEffect( () => {
        if (r || !y || !_)
            return;
        let e = Array.from(O?.portalNode?.querySelectorAll(`[${Gn(`portal`)}]`) || [])
          , t = (D ? Wn(D.nodesRef.current, S()) : []).find(e => sn(e.context?.elements.domReference || null))?.context?.elements.domReference
          , n = ar([y, ...e, ne.current, F.current, O?.beforeOutsideRef.current, O?.afterOutsideRef.current, ...V(), t, vr(f), vr(u), C ? v : null].filter(e => e != null), {
            ariaHidden: s || C,
            mark: !1
        })
          , i = ar([y, ...e].filter(e => e != null));
        return () => {
            i(),
            n()
        }
    }
    , [_, r, v, y, s, O, C, D, S, u, f, V]),
    U( () => {
        if (!_ || r || !Qe(B))
            return;
        N.current = ``,
        P.current = ``;
        let e = W(B)
          , t = tn(e);
        queueMicrotask( () => {
            let n = w.current
              , r = typeof n == `function` ? n(E.current || ``) : n;
            if (r === void 0 || r === !1 || G(B, t))
                return;
            let i = null, a = () => (i ??= oe(B),
            i[0] || B), o;
            o = r === !0 || r === null ? a() : vr(r),
            o ||= a();
            let s = G(B, tn(e));
            qn(o, {
                preventScroll: o === B,
                shouldFocus() {
                    if (!te.current)
                        return !1;
                    if (s)
                        return !0;
                    let t = tn(e);
                    return !(t !== o && G(B, t))
                }
            })
        }
        )
    }
    , [r, _, B, oe, w, E, te]),
    U( () => {
        if (r || !B)
            return;
        let e = W(B)
          , t = tn(e)
          , n = E.current == null;
        Cr(t);
        function i(e) {
            if (e.open || (N.current = yr(e.nativeEvent, P.current)),
            e.reason === `trigger-hover` && e.nativeEvent.type === `mouseleave` && (k.current = !0),
            e.reason === `outside-press`)
                if (e.nested)
                    k.current = !1;
                else if (Zt(e.nativeEvent) || Qt(e.nativeEvent))
                    k.current = !1;
                else {
                    let e = !1;
                    W(B).createElement(`div`).focus({
                        get preventScroll() {
                            return e = !0,
                            !1
                        }
                    }),
                    e ? k.current = !1 : k.current = !0
                }
        }
        b.on(`openchange`, i);
        function a(e) {
            let r = T.current
              , i = typeof r == `function` ? r(e) : r;
            if (i === void 0 || i === !1)
                return null;
            i === null && (i = !0);
            let a = v?.isConnected ? v : null
              , o = t?.isConnected && qe(t) !== `body` ? t : null
              , s = n ? o || a : a || o;
            return s ||= wr() || null,
            typeof i == `boolean` ? s : vr(i) || s || null
        }
        return () => {
            b.off(`openchange`, i);
            let t = tn(e)
              , n = V()
              , r = G(y, t) || n.some(e => e === t || G(e, t)) || D && Un(D.nodesRef.current, S(), !1).some(e => G(e.context?.elements.floating, t))
              , o = T.current
              , s = N.current
              , c = a(s);
            queueMicrotask( () => {
                let n = Tr(c)
                  , i = typeof o != `boolean`;
                if (o && !k.current && Qe(n) && (!(!i && n !== t && t !== e.body) || r)) {
                    let e = {
                        preventScroll: !0
                    };
                    s === `keyboard` && (e.focusVisible = !0),
                    n.focus(e)
                }
                k.current = !1
            }
            )
        }
    }
    , [r, y, B, T, E, b, D, v, S, V]),
    U( () => {
        if (!Kt || _ || !y)
            return;
        let e = tn(W(y));
        !Qe(e) || !on(e) || G(y, e) && e.blur()
    }
    , [_, y]),
    U( () => {
        if (!(r || !O))
            return O.setFocusManagerState({
                modal: s,
                closeOnFocusOut: c,
                open: _,
                onOpenChange: g.setOpen,
                domReference: v
            }),
            () => {
                O.setFocusManagerState(null)
            }
    }
    , [r, O, s, _, g, c, v]),
    U( () => {
        if (!(r || !B))
            return Er(B),
            () => {
                queueMicrotask(Sr)
            }
    }
    , [r, B]);
    let se = !r && (s ? !C : !0) && (z || s);
    return (0,
    q.jsxs)(d.Fragment, {
        children: [se && (0,
        q.jsx)(vn, {
            "data-type": `inside`,
            ref: re,
            onFocus: e => {
                if (s) {
                    let e = oe();
                    qn(e[e.length - 1])
                } else
                    O?.portalNode && (k.current = !1,
                    Bn(e, O.portalNode) ? Rn(v)?.focus() : vr(f ?? O.beforeOutsideRef)?.focus())
            }
        }), n, se && (0,
        q.jsx)(vn, {
            "data-type": `inside`,
            ref: ie,
            onFocus: e => {
                s ? qn(oe()[0]) : O?.portalNode && (c && (k.current = !0),
                Bn(e, O.portalNode) ? zn(v)?.focus() : vr(u ?? O.afterOutsideRef)?.focus())
            }
        })]
    })
}
function Or() {
    return !1
}
function kr(e) {
    return {
        escapeKey: typeof e == `boolean` ? e : e?.escapeKey ?? !1,
        outsidePress: typeof e == `boolean` ? e : e?.outsidePress ?? !0
    }
}
function Ar(e, t={}) {
    let {enabled: n=!0, escapeKey: r=!0, outsidePress: i=!0, outsidePressEvent: a=`sloppy`, referencePress: o=Or, bubbles: s, externalTree: c} = t
      , l = `rootStore` in e ? e.rootStore : e
      , u = l.useState(`open`)
      , f = l.useState(`floatingElement`)
      , {dataRef: p} = l.context
      , m = _r(c)
      , h = H(typeof i == `function` ? i : () => !1)
      , g = typeof i == `function` ? h : i
      , _ = g !== !1
      , v = H( () => a)
      , {escapeKey: y, outsidePress: b} = kr(s)
      , x = d.useRef(!1)
      , S = d.useRef(!1)
      , ee = d.useRef(!1)
      , C = d.useRef(!1)
      , w = d.useRef(``)
      , T = d.useRef(null)
      , E = Pt()
      , te = Pt()
      , D = H( () => {
        te.clear(),
        p.current.insideReactTree = !1
    }
    )
      , O = H(e => {
        let t = p.current.floatingContext?.nodeId;
        return (m ? Un(m.nodesRef.current, t) : []).some(t => t.context?.open && !t.context.dataRef.current[e])
    }
    )
      , k = H(e => rn(e, l.select(`floatingElement`)) || rn(e, l.select(`domReferenceElement`)))
      , A = H(e => {
        o() && l.setOpen(!1, Ct(_t, e.nativeEvent))
    }
    )
      , j = H(e => {
        if (!u || !n || !r || e.key !== `Escape` || C.current || !y && O(`__escapeKeyBubbles`))
            return;
        let t = Ct(xt, Xt(e) ? e.nativeEvent : e);
        l.setOpen(!1, t),
        t.isCanceled || e.preventDefault(),
        !y && !t.isPropagationAllowed && e.stopPropagation()
    }
    )
      , M = H( () => {
        p.current.insideReactTree = !0,
        te.start(0, D)
    }
    )
      , N = H(e => {
        if (!u || !n || e.button !== 0)
            return;
        let t = nn(e.nativeEvent);
        G(l.select(`floatingElement`), t) && (x.current || (x.current = !0,
        S.current = !1))
    }
    )
      , P = H(e => {
        !u || !n || (e.defaultPrevented || e.nativeEvent.defaultPrevented) && x.current && (S.current = !0)
    }
    );
    d.useEffect( () => {
        if (!u || !n)
            return D;
        p.current.__escapeKeyBubbles = y,
        p.current.__outsidePressBubbles = b;
        let e = new Nt
          , t = new Nt;
        function i() {
            e.clear(),
            C.current = !0
        }
        function a() {
            e.start(Kt ? 5 : 0, () => {
                C.current = !1
            }
            )
        }
        function o() {
            ee.current = !0,
            t.start(0, () => {
                ee.current = !1
            }
            )
        }
        function s() {
            x.current = !1,
            S.current = !1
        }
        function c() {
            let e = w.current
              , t = e === `pen` || !e ? `mouse` : e
              , n = v()
              , r = typeof n == `function` ? n() : n;
            return typeof r == `string` ? r : r[t]
        }
        function d(e) {
            let t = c();
            return t === `intentional` && e.type !== `click` || t === `sloppy` && e.type === `click`
        }
        function h(e) {
            let t = p.current.floatingContext?.nodeId
              , n = m && Un(m.nodesRef.current, t).some(t => rn(e, t.context?.elements.floating));
            return k(e) || n
        }
        function te(e) {
            if (d(e)) {
                e.type !== `click` && !k(e) && (t.clear(),
                ee.current = !1),
                D();
                return
            }
            if (p.current.insideReactTree) {
                D();
                return
            }
            let n = nn(e)
              , r = `[${Gn(`inert`)}]`
              , i = Ze(n) ? n.getRootNode() : null
              , a = Array.from(($e(i) ? i : W(l.select(`floatingElement`))).querySelectorAll(r))
              , o = l.context.triggerElements;
            if (n && (o.hasElement(n) || o.hasMatchingElement(e => G(e, n))))
                return;
            let s = Ze(n) ? n : null;
            for (; s && !tt(s); ) {
                let e = rt(s);
                if (tt(e) || !Ze(e))
                    break;
                s = e
            }
            if (!(a.length && Ze(n) && !an(n) && !G(n, l.select(`floatingElement`)) && a.every(e => !G(s, e)))) {
                if (Qe(n) && !(`touches` in e)) {
                    let t = tt(n)
                      , r = nt(n)
                      , i = /auto|scroll/
                      , a = t || i.test(r.overflowX)
                      , o = t || i.test(r.overflowY)
                      , s = a && n.clientWidth > 0 && n.scrollWidth > n.clientWidth
                      , c = o && n.clientHeight > 0 && n.scrollHeight > n.clientHeight
                      , l = r.direction === `rtl`
                      , u = c && (l ? e.offsetX <= n.offsetWidth - n.clientWidth : e.offsetX > n.clientWidth)
                      , d = s && e.offsetY > n.clientHeight;
                    if (u || d)
                        return
                }
                if (!h(e)) {
                    if (c() === `intentional` && ee.current) {
                        t.clear(),
                        ee.current = !1;
                        return
                    }
                    typeof g == `function` && !g(e) || O(`__outsidePressBubbles`) || (l.setOpen(!1, Ct(vt, e)),
                    D())
                }
            }
        }
        function A(e) {
            c() !== `sloppy` || e.pointerType === `touch` || !l.select(`open`) || !n || k(e) || te(e)
        }
        function M(e) {
            if (c() !== `sloppy` || !l.select(`open`) || !n || k(e))
                return;
            let t = e.touches[0];
            t && (T.current = {
                startTime: Date.now(),
                startX: t.clientX,
                startY: t.clientY,
                dismissOnTouchEnd: !1,
                dismissOnMouseDown: !0
            },
            E.start(1e3, () => {
                T.current && (T.current.dismissOnTouchEnd = !1,
                T.current.dismissOnMouseDown = !1)
            }
            ))
        }
        function N(e, t) {
            let n = nn(e);
            if (!n)
                return;
            let r = K(n, e.type, () => {
                t(e),
                r()
            }
            )
        }
        function P(e) {
            w.current = `touch`,
            N(e, M)
        }
        function ne(e) {
            E.clear(),
            e.type === `pointerdown` && (w.current = e.pointerType),
            !(e.type === `mousedown` && T.current && !T.current.dismissOnMouseDown) && N(e, e => {
                e.type === `pointerdown` ? A(e) : te(e)
            }
            )
        }
        function F(e) {
            if (!x.current)
                return;
            let n = S.current;
            if (s(),
            c() === `intentional`) {
                if (e.type === `pointercancel`) {
                    n && o();
                    return
                }
                if (!h(e)) {
                    if (n) {
                        o();
                        return
                    }
                    typeof g == `function` && !g(e) || (t.clear(),
                    ee.current = !0,
                    D())
                }
            }
        }
        function re(e) {
            if (c() !== `sloppy` || !T.current || k(e))
                return;
            let t = e.touches[0];
            if (!t)
                return;
            let n = Math.abs(t.clientX - T.current.startX)
              , r = Math.abs(t.clientY - T.current.startY)
              , i = Math.sqrt(n * n + r * r);
            i > 5 && (T.current.dismissOnTouchEnd = !0),
            i > 10 && (te(e),
            E.clear(),
            T.current = null)
        }
        function ie(e) {
            N(e, re)
        }
        function I(e) {
            c() !== `sloppy` || !T.current || k(e) || (T.current.dismissOnTouchEnd && te(e),
            E.clear(),
            T.current = null)
        }
        function L(e) {
            N(e, I)
        }
        let R = W(f)
          , ae = ln(r && ln(K(R, `keydown`, j), K(R, `compositionstart`, i), K(R, `compositionend`, a)), _ && ln(K(R, `click`, ne, !0), K(R, `pointerdown`, ne, !0), K(R, `pointerup`, F, !0), K(R, `pointercancel`, F, !0), K(R, `mousedown`, ne, !0), K(R, `mouseup`, F, !0), K(R, `touchstart`, P, !0), K(R, `touchmove`, ie, !0), K(R, `touchend`, L, !0)));
        return () => {
            ae(),
            e.clear(),
            t.clear(),
            s(),
            ee.current = !1,
            D()
        }
    }
    , [p, f, r, _, g, u, n, y, b, j, D, v, O, k, m, l, E]);
    let ne = d.useMemo( () => ({
        onKeyDown: j,
        onPointerDown: A,
        onClick: A
    }), [j, A])
      , F = d.useMemo( () => ({
        onKeyDown: j,
        onPointerDown: P,
        onMouseDown: P,
        onClickCapture: M,
        onMouseDownCapture(e) {
            M(),
            N(e)
        },
        onPointerDownCapture(e) {
            M(),
            N(e)
        },
        onMouseUpCapture: M,
        onTouchEndCapture: M,
        onTouchMoveCapture: M
    }), [j, M, N, P]);
    return d.useMemo( () => n ? {
        reference: ne,
        floating: F,
        trigger: ne
    } : {}, [n, ne, F])
}
var jr = t((e => {
    var t = n();
    function r(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
    }
    var i = typeof Object.is == `function` ? Object.is : r
      , a = t.useState
      , o = t.useEffect
      , s = t.useLayoutEffect
      , c = t.useDebugValue;
    function l(e, t) {
        var n = t()
          , r = a({
            inst: {
                value: n,
                getSnapshot: t
            }
        })
          , i = r[0].inst
          , l = r[1];
        return s(function() {
            i.value = n,
            i.getSnapshot = t,
            u(i) && l({
                inst: i
            })
        }, [e, n, t]),
        o(function() {
            return u(i) && l({
                inst: i
            }),
            e(function() {
                u(i) && l({
                    inst: i
                })
            })
        }, [e]),
        c(n),
        n
    }
    function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !i(e, n)
        } catch {
            return !0
        }
    }
    function d(e, t) {
        return t()
    }
    var f = window.document === void 0 || window.document.createElement === void 0 ? d : l;
    e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore
}
))
  , Mr = t(( (e, t) => {
    t.exports = jr()
}
))
  , Nr = t((e => {
    var t = n()
      , r = Mr();
    function i(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
    }
    var a = typeof Object.is == `function` ? Object.is : i
      , o = r.useSyncExternalStore
      , s = t.useRef
      , c = t.useEffect
      , l = t.useMemo
      , u = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
        var d = s(null);
        if (d.current === null) {
            var f = {
                hasValue: !1,
                value: null
            };
            d.current = f
        } else
            f = d.current;
        d = l(function() {
            function e(e) {
                if (!o) {
                    if (o = !0,
                    s = e,
                    e = r(e),
                    i !== void 0 && f.hasValue) {
                        var t = f.value;
                        if (i(t, e))
                            return c = t
                    }
                    return c = e
                }
                if (t = c,
                a(s, e))
                    return t;
                var n = r(e);
                return i !== void 0 && i(t, n) ? (s = e,
                t) : (s = e,
                c = n)
            }
            var o = !1, s, c, l = n === void 0 ? null : n;
            return [function() {
                return e(t())
            }
            , l === null ? void 0 : function() {
                return e(l())
            }
            ]
        }, [t, n, r, i]);
        var p = o(e, d[0], d[1]);
        return c(function() {
            f.hasValue = !0,
            f.value = p
        }, [p]),
        u(p),
        p
    }
}
))
  , Pr = t(( (e, t) => {
    t.exports = Nr()
}
))
  , Fr = []
  , Ir = void 0;
function Lr() {
    return Ir
}
function Rr(e) {
    Fr.push(e)
}
var zr = Mr()
  , Br = Pr()
  , Vr = V(19) ? Wr : Gr;
function Hr(e, t, n, r, i) {
    return Vr(e, t, n, r, i)
}
function Ur(e, t, n, r, i) {
    let a = d.useCallback( () => t(e.getSnapshot(), n, r, i), [e, t, n, r, i]);
    return (0,
    zr.useSyncExternalStore)(e.subscribe, a, a)
}
Rr({
    before(e) {
        e.syncIndex = 0,
        e.didInitialize || (e.syncTick = 1,
        e.syncHooks = [],
        e.didChangeStore = !0,
        e.getSnapshot = () => {
            let t = !1;
            for (let n = 0; n < e.syncHooks.length; n += 1) {
                let r = e.syncHooks[n]
                  , i = r.selector(r.store.state, r.a1, r.a2, r.a3);
                Object.is(r.value, i) || (t = !0,
                r.value = i)
            }
            return t && (e.syncTick += 1),
            e.syncTick
        }
        )
    },
    after(e) {
        e.syncHooks.length > 0 && (e.didChangeStore && (e.didChangeStore = !1,
        e.subscribe = t => {
            let n = new Set;
            for (let t of e.syncHooks)
                n.add(t.store);
            let r = [];
            for (let e of n)
                r.push(e.subscribe(t));
            return () => {
                for (let e of r)
                    e()
            }
        }
        ),
        (0,
        zr.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot))
    }
});
function Wr(e, t, n, r, i) {
    let a = Lr();
    if (!a)
        return Ur(e, t, n, r, i);
    let o = a.syncIndex;
    a.syncIndex += 1;
    let s;
    return a.didInitialize ? (s = a.syncHooks[o],
    (s.store !== e || s.selector !== t || !Object.is(s.a1, n) || !Object.is(s.a2, r) || !Object.is(s.a3, i)) && (s.store !== e && (a.didChangeStore = !0),
    s.store = e,
    s.selector = t,
    s.a1 = n,
    s.a2 = r,
    s.a3 = i,
    s.value = t(e.getSnapshot(), n, r, i))) : (s = {
        store: e,
        selector: t,
        a1: n,
        a2: r,
        a3: i,
        value: t(e.getSnapshot(), n, r, i)
    },
    a.syncHooks.push(s)),
    s.value
}
function Gr(e, t, n, r, i) {
    return (0,
    Br.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, e => t(e, n, r, i))
}
var Kr = class {
    constructor(e) {
        this.state = e,
        this.listeners = new Set,
        this.updateTick = 0
    }
    subscribe = e => (this.listeners.add(e),
    () => {
        this.listeners.delete(e)
    }
    );
    getSnapshot = () => this.state;
    setState(e) {
        if (this.state === e)
            return;
        this.state = e,
        this.updateTick += 1;
        let t = this.updateTick;
        for (let n of this.listeners) {
            if (t !== this.updateTick)
                return;
            n(e)
        }
    }
    update(e) {
        for (let t in e)
            if (!Object.is(this.state[t], e[t])) {
                this.setState({
                    ...this.state,
                    ...e
                });
                return
            }
    }
    set(e, t) {
        Object.is(this.state[e], t) || this.setState({
            ...this.state,
            [e]: t
        })
    }
    notifyAll() {
        let e = {
            ...this.state
        };
        this.setState(e)
    }
    use(e, t, n, r) {
        return Hr(this, e, t, n, r)
    }
}
  , qr = class extends Kr {
    constructor(e, t={}, n) {
        super(e),
        this.context = t,
        this.selectors = n
    }
    useSyncedValue(e, t) {
        d.useDebugValue(e);
        let n = this;
        U( () => {
            n.state[e] !== t && n.set(e, t)
        }
        , [n, e, t])
    }
    useSyncedValueWithCleanup(e, t) {
        let n = this;
        U( () => (n.state[e] !== t && n.set(e, t),
        () => {
            n.set(e, void 0)
        }
        ), [n, e, t])
    }
    useSyncedValues(e) {
        let t = this;
        U( () => {
            t.update(e)
        }
        , [t, ...Object.values(e)])
    }
    useControlledProp(e, t) {
        d.useDebugValue(e);
        let n = this
          , r = t !== void 0;
        U( () => {
            r && !Object.is(n.state[e], t) && n.setState({
                ...n.state,
                [e]: t
            })
        }
        , [n, e, t, r])
    }
    select(e, t, n, r) {
        let i = this.selectors[e];
        return i(this.state, t, n, r)
    }
    useState(e, t, n, r) {
        return d.useDebugValue(e),
        Hr(this, this.selectors[e], t, n, r)
    }
    useContextCallback(e, t) {
        d.useDebugValue(e);
        let n = H(t ?? le);
        this.context[e] = n
    }
    useStateSetter(e) {
        let t = d.useRef(void 0);
        return t.current === void 0 && (t.current = t => {
            this.set(e, t)
        }
        ),
        t.current
    }
    observe(e, t) {
        let n;
        n = typeof e == `function` ? e : this.selectors[e];
        let r = n(this.state);
        return t(r, r, this),
        this.subscribe(e => {
            let i = n(e);
            if (!Object.is(r, i)) {
                let e = r;
                r = i,
                t(i, e, this)
            }
        }
        )
    }
}
  , Jr = {
    open: e => e.open,
    transitionStatus: e => e.transitionStatus,
    domReferenceElement: e => e.domReferenceElement,
    referenceElement: e => e.positionReference ?? e.referenceElement,
    floatingElement: e => e.floatingElement,
    floatingId: e => e.floatingId
}
  , Yr = class extends qr {
    constructor(e) {
        let {syncOnly: t, nested: n, onOpenChange: r, triggerElements: i, ...a} = e;
        super({
            ...a,
            positionReference: a.referenceElement,
            domReferenceElement: a.referenceElement
        }, {
            onOpenChange: r,
            dataRef: {
                current: {}
            },
            events: pr(),
            nested: n,
            triggerElements: i
        }, Jr),
        this.syncOnly = t
    }
    syncOpenEvent = (e, t) => {
        (!e || !this.state.open || t != null && $t(t)) && (this.context.dataRef.current.openEvent = e ? t : void 0)
    }
    ;
    dispatchOpenChange = (e, t) => {
        this.syncOpenEvent(e, t.event);
        let n = {
            open: e,
            reason: t.reason,
            nativeEvent: t.event,
            nested: this.context.nested,
            triggerElement: t.trigger
        };
        this.context.events.emit(`openchange`, n)
    }
    ;
    setOpen = (e, t) => {
        if (this.syncOnly) {
            this.context.onOpenChange?.(e, t);
            return
        }
        this.dispatchOpenChange(e, t),
        this.context.onOpenChange?.(e, t)
    }
}
;
function Xr(e) {
    let {popupStore: t, treatPopupAsFloatingElement: n=!1, floatingRootContext: r, floatingId: i, nested: a, onOpenChange: o} = e
      , s = t.useState(`open`)
      , c = t.useState(`activeTriggerElement`)
      , l = t.useState(n ? `popupElement` : `positionerElement`)
      , u = t.context.triggerElements
      , f = o
      , p = d.useRef(null);
    r === void 0 && p.current === null && (p.current = new Yr({
        open: s,
        transitionStatus: void 0,
        referenceElement: c,
        floatingElement: l,
        triggerElements: u,
        onOpenChange: f,
        floatingId: i,
        syncOnly: !0,
        nested: a
    }));
    let m = r ?? p.current;
    return t.useSyncedValue(`floatingId`, i),
    U( () => {
        let e = {
            open: s,
            floatingId: i,
            referenceElement: c,
            floatingElement: l
        };
        Ze(c) && (e.domReferenceElement = c),
        m.state.positionReference === m.state.referenceElement && (e.positionReference = c),
        m.update(e)
    }
    , [s, i, c, l, m]),
    m.context.onOpenChange = f,
    m.context.nested = a,
    m
}
function Zr(e, t=!1, n=!1) {
    let[r,i] = d.useState(e && t ? `idle` : void 0)
      , [a,o] = d.useState(e);
    return e && !a && (o(!0),
    i(`starting`)),
    !e && a && r !== `ending` && !n && i(`ending`),
    !e && !a && r === `ending` && i(void 0),
    U( () => {
        if (!e && a && r !== `ending` && n) {
            let e = mn.request( () => {
                i(`ending`)
            }
            );
            return () => {
                mn.cancel(e)
            }
        }
    }
    , [e, a, r, n]),
    U( () => {
        if (!e || t)
            return;
        let n = mn.request( () => {
            i(void 0)
        }
        );
        return () => {
            mn.cancel(n)
        }
    }
    , [t, e]),
    U( () => {
        if (!e || !t)
            return;
        e && a && r !== `idle` && i(`starting`);
        let n = mn.request( () => {
            i(`idle`)
        }
        );
        return () => {
            mn.cancel(n)
        }
    }
    , [t, e, a, r]),
    {
        mounted: a,
        setMounted: o,
        transitionStatus: r
    }
}
function Qr(e, t=!1) {
    let n = hn();
    return H( (r, i=null) => {
        n.cancel();
        let a = vr(e);
        if (a == null)
            return;
        let o = a
          , s = () => {
            sr.flushSync(r)
        }
        ;
        if (typeof o.getAnimations != `function` || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
            r();
            return
        }
        function c() {
            Promise.all(o.getAnimations().map(e => e.finished)).then( () => {
                i?.aborted || s()
            }
            , () => {
                if (!i?.aborted) {
                    if (o.getAnimations().some(e => e.pending || e.playState !== `finished`)) {
                        c();
                        return
                    }
                    s()
                }
            }
            )
        }
        if (t) {
            let e = `data-starting-style`;
            if (!o.hasAttribute(e)) {
                n.request(c);
                return
            }
            let t = new MutationObserver( () => {
                o.hasAttribute(e) || (t.disconnect(),
                c())
            }
            );
            t.observe(o, {
                attributes: !0,
                attributeFilter: [e]
            }),
            i?.addEventListener(`abort`, () => t.disconnect(), {
                once: !0
            });
            return
        }
        n.request(c)
    }
    )
}
function $r(e) {
    let {enabled: t=!0, open: n, ref: r, onComplete: i} = e
      , a = H(i)
      , o = Qr(r, n);
    d.useEffect( () => {
        if (!t)
            return;
        let e = new AbortController;
        return o(a, e.signal),
        () => {
            e.abort()
        }
    }
    , [t, n, a, o])
}
var ei = {
    tabIndex: -1,
    [en]: ``
};
function ti(e) {
    return t => t === `touch` ? e.current : !0
}
function ni(e, t=!1) {
    let n = Ot()
      , r = gr() != null
      , i = ie( () => e(n, r)).current;
    return Xr({
        popupStore: i,
        treatPopupAsFloatingElement: t,
        floatingRootContext: i.state.floatingRootContext,
        floatingId: n,
        nested: r,
        onOpenChange: i.setOpen
    }),
    i
}
function ri({handle: e, store: t}) {
    return U( () => e.attachStore(t), [e, t]),
    null
}
function ii(e, t, n, r=!1) {
    t ? e.preventUnmountingOnClose = !1 : r && (e.preventUnmountingOnClose = !0);
    let i = n?.id ?? null;
    (i || t) && (e.activeTriggerId = i,
    e.activeTriggerElement = n ?? null)
}
function ai(e, t={}) {
    let {closeOnActiveTriggerUnmount: n=!1} = t
      , r = d.useRef(null)
      , i = e.useState(`open`);
    U( () => {
        if (!i) {
            r.current = null,
            e.state.triggerCount !== 0 && e.set(`triggerCount`, 0);
            return
        }
        let t = e.context.triggerElements.size
          , a = {};
        e.state.triggerCount !== t && (a.triggerCount = t);
        let o = e.select(`activeTriggerId`)
          , s = null;
        if (o) {
            let t = e.context.triggerElements.getById(o);
            if (t)
                r.current = o,
                t !== e.state.activeTriggerElement && (a.activeTriggerElement = t);
            else {
                for (let[t,n] of e.context.triggerElements.entries())
                    if (n === e.state.activeTriggerElement) {
                        a.activeTriggerId = t,
                        a.activeTriggerElement = n,
                        r.current = t;
                        break
                    }
                a.activeTriggerId === void 0 && (r.current === o ? s = o : r.current = null)
            }
        } else
            r.current = null;
        if (!s && !o && t === 1) {
            let t = e.context.triggerElements.entries().next();
            if (!t.done) {
                let[e,n] = t.value;
                a.activeTriggerId = e,
                a.activeTriggerElement = n,
                r.current = e
            }
        }
        (a.triggerCount !== void 0 || a.activeTriggerId !== void 0 || a.activeTriggerElement !== void 0) && e.update(a),
        s && n && queueMicrotask( () => {
            if (e.select(`open`) && e.select(`activeTriggerId`) === s && !e.context.triggerElements.getById(s)) {
                let t = Ct(gt);
                e.setOpen(!1, t),
                t.isCanceled || e.update({
                    activeTriggerId: null,
                    activeTriggerElement: null
                })
            }
        }
        )
    }
    , [i, e, e.useState(`triggerCount`), e.useState(`activeTriggerId`), e.useState(`activeTriggerElement`), n])
}
function oi(e, t, n) {
    let {mounted: r, setMounted: i, transitionStatus: a} = Zr(e)
      , o = t.useState(`preventUnmountingOnClose`)
      , s = e ? !1 : o;
    t.useSyncedValues({
        mounted: r,
        transitionStatus: a,
        preventUnmountingOnClose: s
    });
    let c = H( () => {
        i(!1),
        t.update({
            activeTriggerId: null,
            activeTriggerElement: null,
            mounted: !1,
            preventUnmountingOnClose: !1
        }),
        n?.(),
        t.context.onOpenChangeComplete?.(!1)
    }
    );
    return $r({
        enabled: r && !e && !s,
        open: e,
        ref: t.context.popupRef,
        onComplete() {
            e || c()
        }
    }),
    {
        forceUnmount: c,
        transitionStatus: a
    }
}
function si(e, t) {
    e.useSyncedValues(t),
    U( () => () => {
        e.update({
            activeTriggerProps: de,
            inactiveTriggerProps: de,
            popupProps: de
        })
    }
    , [e])
}
function ci(e, t) {
    U( () => {
        !t && e.state.openMethod !== null && e.set(`openMethod`, null)
    }
    , [t, e]),
    U( () => () => {
        e.state.openMethod !== null && e.set(`openMethod`, null)
    }
    , [e])
}
var li = class {
    constructor() {
        this.idMap = new Map
    }
    add(e, t) {
        this.idMap.set(e, t)
    }
    delete(e) {
        this.idMap.delete(e)
    }
    hasElement(e) {
        for (let t of this.idMap.values())
            if (t === e)
                return !0;
        return !1
    }
    hasMatchingElement(e) {
        for (let t of this.idMap.values())
            if (e(t))
                return !0;
        return !1
    }
    getById(e) {
        return this.idMap.get(e)
    }
    entries() {
        return this.idMap.entries()
    }
    elements() {
        return this.idMap.values()
    }
    get size() {
        return this.idMap.size
    }
}
;
function ui() {
    return new Yr({
        open: !1,
        transitionStatus: void 0,
        floatingElement: null,
        referenceElement: null,
        triggerElements: new li,
        floatingId: void 0,
        syncOnly: !1,
        nested: !1,
        onOpenChange: void 0
    })
}
function di() {
    return {
        open: !1,
        openProp: void 0,
        mounted: !1,
        transitionStatus: void 0,
        floatingRootContext: ui(),
        floatingId: void 0,
        triggerCount: 0,
        preventUnmountingOnClose: !1,
        payload: void 0,
        activeTriggerId: null,
        activeTriggerElement: null,
        triggerIdProp: void 0,
        popupElement: null,
        positionerElement: null,
        activeTriggerProps: de,
        inactiveTriggerProps: de,
        popupProps: de
    }
}
function fi(e, t, n=!1) {
    return new Yr({
        open: !1,
        transitionStatus: void 0,
        floatingElement: null,
        referenceElement: null,
        triggerElements: e,
        floatingId: t,
        syncOnly: !0,
        nested: n,
        onOpenChange: void 0
    })
}
var pi = e => e.triggerIdProp ?? e.activeTriggerId
  , mi = e => e.openProp ?? e.open
  , hi = e => (e.popupElement?.id ?? e.floatingId) || void 0;
function gi(e, t) {
    return t !== void 0 && mi(e) && pi(e) === t
}
function _i(e, t) {
    return gi(e, t) ? !0 : t !== void 0 && mi(e) && pi(e) == null && e.triggerCount === 1
}
var vi = {
    open: mi,
    mounted: e => e.mounted,
    transitionStatus: e => e.transitionStatus,
    floatingRootContext: e => e.floatingRootContext,
    triggerCount: e => e.triggerCount,
    preventUnmountingOnClose: e => e.preventUnmountingOnClose,
    payload: e => e.payload,
    activeTriggerId: pi,
    activeTriggerElement: e => e.mounted ? e.activeTriggerElement : null,
    popupId: hi,
    isTriggerActive: (e, t) => t !== void 0 && pi(e) === t,
    isOpenedByTrigger: (e, t) => gi(e, t),
    isMountedByTrigger: (e, t) => t !== void 0 && pi(e) === t && e.mounted,
    triggerProps: (e, t) => t ? e.activeTriggerProps : e.inactiveTriggerProps,
    triggerPopupId: (e, t) => _i(e, t) ? hi(e) : void 0,
    popupProps: e => e.popupProps,
    popupElement: e => e.popupElement,
    positionerElement: e => e.positionerElement
}
  , yi = d.createContext(void 0);
function bi() {
    let e = d.useContext(yi);
    if (e === void 0)
        throw Error(P(26));
    return e
}
var xi = new Set([`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`])
  , Si = {
    ...Ue,
    ...ze,
    nestedDialogOpen(e) {
        return e ? {
            "data-nested-dialog-open": ``
        } : null
    }
}
  , Ci = d.forwardRef(function(e, t) {
    let {render: n, className: r, style: i, finalFocus: a, initialFocus: o, ...s} = e
      , c = F()
      , l = c.useState(`descriptionElementId`)
      , u = c.useState(`disablePointerDismissal`)
      , d = c.useState(`floatingRootContext`)
      , f = c.useState(`popupProps`)
      , p = c.useState(`modal`)
      , m = c.useState(`mounted`)
      , h = c.useState(`nested`)
      , g = c.useState(`nestedOpenDialogCount`)
      , _ = c.useState(`open`)
      , v = c.useState(`openMethod`)
      , y = c.useState(`titleElementId`)
      , b = c.useState(`transitionStatus`)
      , x = c.useState(`role`)
      , S = d.useState(`floatingId`);
    bi(),
    $r({
        open: _,
        ref: c.context.popupRef,
        onComplete() {
            _ && c.context.onOpenChangeComplete?.(!0)
        }
    });
    let ee = o === void 0 ? ti(c.context.popupRef) : o
      , C = g > 0
      , w = c.useStateSetter(`popupElement`)
      , T = Ae(`div`, e, {
        state: {
            open: _,
            nested: h,
            transitionStatus: b,
            nestedDialogOpen: C
        },
        props: [f, {
            id: S,
            "aria-labelledby": y,
            "aria-describedby": l,
            role: x,
            ...ei,
            hidden: !m,
            onKeyDown(e) {
                xi.has(e.key) && e.stopPropagation()
            },
            style: {
                "--nested-dialogs": g
            }
        }, s],
        ref: [t, c.context.popupRef, w],
        stateAttributesMapping: Si
    });
    return (0,
    q.jsx)(Dr, {
        context: d,
        openInteractionType: v,
        disabled: !m,
        closeOnFocusOut: !u,
        initialFocus: ee,
        returnFocus: a,
        modal: p !== !1,
        restoreFocus: `popup`,
        children: T
    })
});
function wi(e) {
    return V(19) ? e : e ? `true` : void 0
}
var Ti = d.forwardRef(function(e, t) {
    let {cutout: n, ...r} = e, i;
    if (n) {
        let e = n.getBoundingClientRect();
        i = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`
    }
    return (0,
    q.jsx)(`div`, {
        ref: t,
        role: `presentation`,
        "data-base-ui-inert": ``,
        ...r,
        style: {
            position: `fixed`,
            inset: 0,
            userSelect: `none`,
            WebkitUserSelect: `none`,
            clipPath: i
        }
    })
})
  , Ei = d.forwardRef(function(e, t) {
    let {keepMounted: n=!1, ...r} = e
      , i = F()
      , a = i.useState(`mounted`)
      , o = i.useState(`modal`)
      , s = i.useState(`open`);
    return a || n ? (0,
    q.jsx)(yi.Provider, {
        value: n,
        children: (0,
        q.jsxs)(fr, {
            ref: t,
            ...r,
            children: [a && o === !0 && (0,
            q.jsx)(Ti, {
                ref: i.context.internalBackdropRef,
                inert: wi(!s)
            }), e.children]
        })
    }) : null
})
  , Di = {}
  , Oi = {}
  , ki = ``;
function Ai(e, t) {
    return et(e) ? e : t
}
function ji(e, t, n) {
    return /hidden|clip/.test(e.getComputedStyle(Ai(t, n)).overflowY)
}
function Mi(e) {
    if (typeof document > `u`)
        return !1;
    let t = W(e);
    return Je(t).innerWidth - t.documentElement.clientWidth > 0
}
function Ni(e) {
    if (!(typeof CSS < `u` && CSS.supports && CSS.supports(`scrollbar-gutter`, `stable`)) || typeof document > `u`)
        return !1;
    let t = W(e)
      , n = t.documentElement
      , r = t.body
      , i = Ai(n, r)
      , a = i.style.overflowY
      , o = n.style.scrollbarGutter;
    n.style.scrollbarGutter = `stable`,
    i.style.overflowY = `scroll`;
    let s = i.offsetWidth;
    i.style.overflowY = `hidden`;
    let c = i.offsetWidth;
    return i.style.overflowY = a,
    n.style.scrollbarGutter = o,
    s === c
}
function Pi(e) {
    let t = W(e)
      , n = t.documentElement
      , r = t.body
      , i = Ai(n, r)
      , a = {
        overflowY: i.style.overflowY,
        overflowX: i.style.overflowX
    };
    return Object.assign(i.style, {
        overflowY: `hidden`,
        overflowX: `hidden`
    }),
    () => {
        Object.assign(i.style, a)
    }
}
function Fi(e) {
    let t = W(e)
      , n = t.documentElement
      , r = t.body
      , i = Je(n)
      , a = 0
      , o = 0
      , s = !1
      , c = mn.create();
    if (Kt && (i.visualViewport?.scale ?? 1) !== 1)
        return () => {}
        ;
    function l() {
        let t = i.getComputedStyle(n)
          , c = i.getComputedStyle(r)
          , l = (t.scrollbarGutter || ``).includes(`both-edges`) ? `stable both-edges` : `stable`;
        a = n.scrollTop,
        o = n.scrollLeft,
        Di = {
            scrollbarGutter: n.style.scrollbarGutter,
            overflowY: n.style.overflowY,
            overflowX: n.style.overflowX
        },
        ki = n.style.scrollBehavior,
        Oi = {
            position: r.style.position,
            height: r.style.height,
            width: r.style.width,
            boxSizing: r.style.boxSizing,
            overflowY: r.style.overflowY,
            overflowX: r.style.overflowX,
            scrollBehavior: r.style.scrollBehavior
        };
        let u = n.scrollHeight > n.clientHeight
          , d = n.scrollWidth > n.clientWidth
          , f = t.overflowY === `scroll` || c.overflowY === `scroll`
          , p = t.overflowX === `scroll` || c.overflowX === `scroll`
          , m = Math.max(0, i.innerWidth - r.clientWidth)
          , h = Math.max(0, i.innerHeight - r.clientHeight)
          , g = parseFloat(c.marginTop) + parseFloat(c.marginBottom)
          , _ = parseFloat(c.marginLeft) + parseFloat(c.marginRight)
          , v = Ai(n, r);
        if (s = Ni(e),
        s) {
            n.style.scrollbarGutter = l,
            v.style.overflowY = `hidden`,
            v.style.overflowX = `hidden`;
            return
        }
        Object.assign(n.style, {
            scrollbarGutter: l,
            overflowY: `hidden`,
            overflowX: `hidden`
        }),
        (u || f) && (n.style.overflowY = `scroll`),
        (d || p) && (n.style.overflowX = `scroll`),
        Object.assign(r.style, {
            position: `relative`,
            height: g || h ? `calc(100dvh - ${g + h}px)` : `100dvh`,
            width: _ || m ? `calc(100vw - ${_ + m}px)` : `100vw`,
            boxSizing: `border-box`,
            overflowY: `hidden`,
            overflowX: `hidden`,
            scrollBehavior: `unset`
        }),
        r.scrollTop = a,
        r.scrollLeft = o,
        n.setAttribute(`data-base-ui-scroll-locked`, ``),
        n.style.scrollBehavior = `unset`
    }
    function u() {
        Object.assign(n.style, Di),
        Object.assign(r.style, Oi),
        s || (n.scrollTop = a,
        n.scrollLeft = o,
        n.removeAttribute(`data-base-ui-scroll-locked`),
        n.style.scrollBehavior = ki)
    }
    function d() {
        u(),
        c.request(l)
    }
    l();
    let f = K(i, `resize`, d);
    return () => {
        c.cancel(),
        u(),
        typeof i.removeEventListener == `function` && f()
    }
}
var Ii = new class {
    lockCount = 0;
    restore = null;
    timeoutLock = Nt.create();
    timeoutUnlock = Nt.create();
    acquire(e) {
        return this.lockCount += 1,
        this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(e)),
        this.release
    }
    release = () => {
        --this.lockCount,
        this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock)
    }
    ;
    unlock = () => {
        this.lockCount === 0 && this.restore && (this.restore?.(),
        this.restore = null)
    }
    ;
    lock(e) {
        if (this.lockCount === 0 || this.restore !== null)
            return;
        let t = W(e)
          , n = t.documentElement
          , r = t.body
          , i = Je(n);
        if (ji(i, n, r)) {
            let t = new i.MutationObserver( () => {
                ji(i, n, r) || (t.disconnect(),
                this.restore = null,
                this.lock(e))
            }
            )
              , a = {
                attributes: !0
            };
            t.observe(n, a),
            t.observe(r, a),
            this.restore = () => t.disconnect();
            return
        }
        let a = Vt || !Mi(e);
        this.restore = a ? Pi(e) : Fi(e)
    }
}
;
function Li(e=!0, t=null) {
    U( () => {
        if (e)
            return Ii.acquire(t)
    }
    , [e, t])
}
function Ri({store: e, parentContext: t, isDrawer: n}) {
    let r = e.useState(`open`)
      , i = e.useState(`disablePointerDismissal`)
      , a = e.useState(`modal`)
      , o = e.useState(`popupElement`)
      , s = e.useState(`floatingRootContext`)
      , [c,l] = d.useState(0)
      , [u,f] = d.useState(0)
      , p = c === 0
      , m = Ar(s, {
        outsidePressEvent() {
            return e.context.internalBackdropRef.current || e.context.backdropRef.current ? `intentional` : {
                mouse: a === `trap-focus` ? `sloppy` : `intentional`,
                touch: `sloppy`
            }
        },
        outsidePress(t) {
            if (!e.context.outsidePressEnabledRef.current || `button` in t && t.button !== 0)
                return !1;
            if (`touches` in t) {
                if (t.type === `touchend`) {
                    if (t.changedTouches.length !== 1 || t.touches.length !== 0)
                        return !1
                } else if (t.touches.length !== 1)
                    return !1
            }
            let n = nn(t);
            if (p && !i) {
                if (a) {
                    let t = e.context.internalBackdropRef.current
                      , r = e.context.backdropRef.current;
                    return t || r ? t === n || r === n || G(n, o) && !n?.hasAttribute(`data-base-ui-portal`) : !0
                }
                return !0
            }
            return !1
        },
        escapeKey: p
    });
    return Li(r && a === !0, o),
    e.useContextCallback(`onNestedDialogOpen`, (e, t) => {
        l(e),
        f(t)
    }
    ),
    U( () => (t?.onNestedDialogOpen && (r ? t.onNestedDialogOpen(c + 1, u + +!!n) : t.onNestedDialogOpen(0, 0)),
    () => {
        t?.onNestedDialogOpen && r && t.onNestedDialogOpen(0, 0)
    }
    ), [n, r, c, u, t]),
    si(e, {
        activeTriggerProps: m.reference,
        inactiveTriggerProps: m.trigger,
        popupProps: m.floating,
        nestedOpenDialogCount: c,
        nestedOpenDrawerCount: u
    }),
    null
}
var zi = {
    ...vi,
    modal: e => e.modal,
    nested: e => e.nested,
    nestedOpenDialogCount: e => e.nestedOpenDialogCount,
    nestedOpenDrawerCount: e => e.nestedOpenDrawerCount,
    disablePointerDismissal: e => e.disablePointerDismissal,
    openMethod: e => e.openMethod,
    descriptionElementId: e => e.descriptionElementId,
    titleElementId: e => e.titleElementId,
    viewportElement: e => e.viewportElement,
    role: e => e.role
}
  , Bi = class extends qr {
    constructor(e, t, n) {
        let r = new li
          , i = Vi(e, r, t, n);
        super(i, Hi(r), zi)
    }
    setOpen = (e, t) => {
        if (t.preventUnmountOnClose = () => {
            this.set(`preventUnmountingOnClose`, !0)
        }
        ,
        !e && t.trigger == null && this.state.activeTriggerId != null && (t.trigger = this.state.activeTriggerElement ?? void 0),
        this.context.onOpenChange?.(e, t),
        t.isCanceled)
            return;
        this.state.floatingRootContext.dispatchOpenChange(e, t);
        let n = {
            open: e
        };
        ii(n, e, t.trigger),
        this.update(n)
    }
}
;
function Vi(e, t, n, r=!1) {
    let i = {
        ...di(),
        modal: !0,
        disablePointerDismissal: !1,
        viewportElement: null,
        descriptionElementId: void 0,
        titleElementId: void 0,
        openMethod: null,
        nested: !1,
        nestedOpenDialogCount: 0,
        nestedOpenDrawerCount: 0,
        role: `dialog`,
        ...e
    };
    return i.floatingRootContext = fi(t, n, r),
    i
}
function Hi(e) {
    return {
        popupRef: d.createRef(),
        backdropRef: d.createRef(),
        internalBackdropRef: d.createRef(),
        outsidePressEnabledRef: {
            current: !0
        },
        triggerElements: e,
        onOpenChange: void 0,
        onOpenChangeComplete: void 0
    }
}
function Ui(e, t) {
    let {children: n, open: r, defaultOpen: i=!1, onOpenChange: a, onOpenChangeComplete: o, disablePointerDismissal: s=!1, modal: c=!0, actionsRef: l, handle: u, triggerId: f, defaultTriggerId: p=null} = t
      , m = e === `drawer`
      , h = e === `alert-dialog`
      , g = h ? !0 : c
      , _ = h || s
      , v = h ? `alertdialog` : `dialog`
      , y = F(!0)
      , b = {
        modal: g,
        disablePointerDismissal: _,
        nested: y != null,
        role: v
    }
      , x = ni( (e, t) => new Bi({
        open: i,
        openProp: r,
        activeTriggerId: p,
        triggerIdProp: f,
        ...b
    },e,t), !0);
    x.useControlledProp(`openProp`, r),
    x.useControlledProp(`triggerIdProp`, f),
    x.useSyncedValues(b),
    x.useContextCallback(`onOpenChange`, a),
    x.useContextCallback(`onOpenChangeComplete`, o);
    let S = x.useState(`open`)
      , ee = x.useState(`mounted`)
      , C = x.useState(`payload`);
    ci(x, S),
    ai(x);
    let {forceUnmount: w} = oi(S, x);
    d.useImperativeHandle(l, () => ({
        unmount: w,
        close: () => x.setOpen(!1, Ct(St))
    }), [w, x]);
    let T = S || ee;
    return (0,
    q.jsxs)(ne.Provider, {
        value: x,
        children: [u && (0,
        q.jsx)(ri, {
            handle: u,
            store: x
        }), T && (0,
        q.jsx)(Ri, {
            store: x,
            parentContext: y?.context,
            isDrawer: m
        }), typeof n == `function` ? n({
            payload: C
        }) : n]
    })
}
function Wi(e) {
    return Ui(`dialog`, e)
}
var Gi = d.forwardRef(function(e, t) {
    let {render: n, className: r, style: i, id: a, ...o} = e
      , s = F()
      , c = kt(a);
    return s.useSyncedValueWithCleanup(`titleElementId`, c),
    Ae(`h2`, e, {
        ref: t,
        props: [{
            id: c
        }, o]
    })
});
function Ki(e) {
    var t, n, r = ``;
    if (typeof e == `string` || typeof e == `number`)
        r += e;
    else if (typeof e == `object`)
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = Ki(e[t])) && (r && (r += ` `),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += ` `),
                r += n);
    return r
}
function qi() {
    for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = Ki(e)) && (r && (r += ` `),
        r += t);
    return r
}
var Ji = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++)
        n[t] = e[t];
    for (let r = 0; r < t.length; r++)
        n[e.length + r] = t[r];
    return n
}
  , Yi = (e, t) => ({
    classGroupId: e,
    validator: t
})
  , Xi = (e=new Map, t=null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n
})
  , Zi = `-`
  , Qi = []
  , $i = `arbitrary..`
  , ea = e => {
    let t = ra(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: e => {
            if (e.startsWith(`[`) && e.endsWith(`]`))
                return na(e);
            let n = e.split(Zi);
            return ta(n, +(n[0] === `` && n.length > 1), t)
        }
        ,
        getConflictingClassGroupIds: (e, t) => {
            if (t) {
                let t = r[e]
                  , i = n[e];
                return t ? i ? Ji(i, t) : t : i || Qi
            }
            return n[e] || Qi
        }
    }
}
  , ta = (e, t, n) => {
    if (e.length - t === 0)
        return n.classGroupId;
    let r = e[t]
      , i = n.nextPart.get(r);
    if (i) {
        let n = ta(e, t + 1, i);
        if (n)
            return n
    }
    let a = n.validators;
    if (a === null)
        return;
    let o = t === 0 ? e.join(Zi) : e.slice(t).join(Zi)
      , s = a.length;
    for (let e = 0; e < s; e++) {
        let t = a[e];
        if (t.validator(o))
            return t.classGroupId
    }
}
  , na = e => e.slice(1, -1).indexOf(`:`) === -1 ? void 0 : ( () => {
    let t = e.slice(1, -1)
      , n = t.indexOf(`:`)
      , r = t.slice(0, n);
    return r ? $i + r : void 0
}
)()
  , ra = e => {
    let {theme: t, classGroups: n} = e;
    return ia(n, t)
}
  , ia = (e, t) => {
    let n = Xi();
    for (let r in e) {
        let i = e[r];
        aa(i, n, r, t)
    }
    return n
}
  , aa = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
        let i = e[a];
        oa(i, t, n, r)
    }
}
  , oa = (e, t, n, r) => {
    if (typeof e == `string`) {
        sa(e, t, n);
        return
    }
    if (typeof e == `function`) {
        ca(e, t, n, r);
        return
    }
    la(e, t, n, r)
}
  , sa = (e, t, n) => {
    let r = e === `` ? t : ua(t, e);
    r.classGroupId = n
}
  , ca = (e, t, n, r) => {
    if (da(e)) {
        aa(e(r), t, n, r);
        return
    }
    t.validators === null && (t.validators = []),
    t.validators.push(Yi(n, e))
}
  , la = (e, t, n, r) => {
    let i = Object.entries(e)
      , a = i.length;
    for (let e = 0; e < a; e++) {
        let[a,o] = i[e];
        aa(o, ua(t, a), n, r)
    }
}
  , ua = (e, t) => {
    let n = e
      , r = t.split(Zi)
      , i = r.length;
    for (let e = 0; e < i; e++) {
        let t = r[e]
          , i = n.nextPart.get(t);
        i || (i = Xi(),
        n.nextPart.set(t, i)),
        n = i
    }
    return n
}
  , da = e => `isThemeGetter` in e && e.isThemeGetter === !0
  , fa = e => {
    if (e < 1)
        return {
            get: () => void 0,
            set: () => {}
        };
    let t = 0
      , n = Object.create(null)
      , r = Object.create(null)
      , i = (i, a) => {
        n[i] = a,
        t++,
        t > e && (t = 0,
        r = n,
        n = Object.create(null))
    }
    ;
    return {
        get(e) {
            let t = n[e];
            if (t !== void 0)
                return t;
            if ((t = r[e]) !== void 0)
                return i(e, t),
                t
        },
        set(e, t) {
            e in n ? n[e] = t : i(e, t)
        }
    }
}
  , pa = `!`
  , ma = `:`
  , ha = []
  , ga = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i
})
  , _a = e => {
    let {prefix: t, experimentalParseClassName: n} = e
      , r = e => {
        let t = [], n = 0, r = 0, i = 0, a, o = e.length;
        for (let s = 0; s < o; s++) {
            let o = e[s];
            if (n === 0 && r === 0) {
                if (o === ma) {
                    t.push(e.slice(i, s)),
                    i = s + 1;
                    continue
                }
                if (o === `/`) {
                    a = s;
                    continue
                }
            }
            o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
        }
        let s = t.length === 0 ? e : e.slice(i)
          , c = s
          , l = !1;
        s.endsWith(pa) ? (c = s.slice(0, -1),
        l = !0) : s.startsWith(pa) && (c = s.slice(1),
        l = !0);
        let u = a && a > i ? a - i : void 0;
        return ga(t, l, c, u)
    }
    ;
    if (t) {
        let e = t + ma
          , n = r;
        r = t => t.startsWith(e) ? n(t.slice(e.length)) : ga(ha, !1, t, void 0, !0)
    }
    if (n) {
        let e = r;
        r = t => n({
            className: t,
            parseClassName: e
        })
    }
    return r
}
  , va = e => {
    let t = new Map;
    return e.orderSensitiveModifiers.forEach( (e, n) => {
        t.set(e, 1e6 + n)
    }
    ),
    e => {
        let n = []
          , r = [];
        for (let i = 0; i < e.length; i++) {
            let a = e[i]
              , o = a[0] === `[`
              , s = t.has(a);
            o || s ? (r.length > 0 && (r.sort(),
            n.push(...r),
            r = []),
            n.push(a)) : r.push(a)
        }
        return r.length > 0 && (r.sort(),
        n.push(...r)),
        n
    }
}
  , ya = e => ({
    cache: fa(e.cacheSize),
    parseClassName: _a(e),
    sortModifiers: va(e),
    postfixLookupClassGroupIds: ba(e),
    ...ea(e)
})
  , ba = e => {
    let t = Object.create(null)
      , n = e.postfixLookupClassGroups;
    if (n)
        for (let e = 0; e < n.length; e++)
            t[n[e]] = !0;
    return t
}
  , xa = /\s+/
  , Sa = (e, t) => {
    let {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o} = t
      , s = []
      , c = e.trim().split(xa)
      , l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
        let t = c[e]
          , {isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m} = n(t);
        if (u) {
            l = t + (l.length > 0 ? ` ` + l : l);
            continue
        }
        let h = !!m, g;
        if (h) {
            g = r(p.substring(0, m));
            let e = g && o[g] ? r(p) : void 0;
            e && e !== g && (g = e,
            h = !1)
        } else
            g = r(p);
        if (!g) {
            if (!h) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            if (g = r(p),
            !g) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            h = !1
        }
        let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`)
          , v = f ? _ + pa : _
          , y = v + g;
        if (s.indexOf(y) > -1)
            continue;
        s.push(y);
        let b = i(g, h);
        for (let e = 0; e < b.length; ++e) {
            let t = b[e];
            s.push(v + t)
        }
        l = t + (l.length > 0 ? ` ` + l : l)
    }
    return l
}
  , Ca = (...e) => {
    let t = 0, n, r, i = ``;
    for (; t < e.length; )
        (n = e[t++]) && (r = wa(n)) && (i && (i += ` `),
        i += r);
    return i
}
  , wa = e => {
    if (typeof e == `string`)
        return e;
    let t, n = ``;
    for (let r = 0; r < e.length; r++)
        e[r] && (t = wa(e[r])) && (n && (n += ` `),
        n += t);
    return n
}
  , Ta = (e, ...t) => {
    let n, r, i, a, o = o => (n = ya(t.reduce( (e, t) => t(e), e())),
    r = n.cache.get,
    i = n.cache.set,
    a = s,
    s(o)), s = e => {
        let t = r(e);
        if (t)
            return t;
        let a = Sa(e, n);
        return i(e, a),
        a
    }
    ;
    return a = o,
    (...e) => a(Ca(...e))
}
  , Ea = []
  , J = e => {
    let t = t => t[e] || Ea;
    return t.isThemeGetter = !0,
    t
}
  , Da = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Oa = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , ka = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , Aa = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , ja = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Ma = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Na = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Pa = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Fa = e => ka.test(e)
  , Y = e => !!e && !Number.isNaN(Number(e))
  , Ia = e => !!e && Number.isInteger(Number(e))
  , La = e => e.endsWith(`%`) && Y(e.slice(0, -1))
  , Ra = e => Aa.test(e)
  , za = () => !0
  , Ba = e => ja.test(e) && !Ma.test(e)
  , Va = () => !1
  , Ha = e => Na.test(e)
  , Ua = e => Pa.test(e)
  , Wa = e => !X(e) && !Z(e)
  , Ga = e => e.startsWith(`@container`) && (e[10] === `/` && e[11] !== void 0 || e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10) || e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))
  , Ka = e => so(e, fo, Va)
  , X = e => Da.test(e)
  , qa = e => so(e, po, Ba)
  , Ja = e => so(e, mo, Y)
  , Ya = e => so(e, go, za)
  , Xa = e => so(e, ho, Va)
  , Za = e => so(e, lo, Va)
  , Qa = e => so(e, uo, Ua)
  , $a = e => so(e, _o, Ha)
  , Z = e => Oa.test(e)
  , eo = e => co(e, po)
  , to = e => co(e, ho)
  , no = e => co(e, lo)
  , ro = e => co(e, fo)
  , io = e => co(e, uo)
  , ao = e => co(e, _o, !0)
  , oo = e => co(e, go, !0)
  , so = (e, t, n) => {
    let r = Da.exec(e);
    return r ? r[1] ? t(r[1]) : n(r[2]) : !1
}
  , co = (e, t, n=!1) => {
    let r = Oa.exec(e);
    return r ? r[1] ? t(r[1]) : n : !1
}
  , lo = e => e === `position` || e === `percentage`
  , uo = e => e === `image` || e === `url`
  , fo = e => e === `length` || e === `size` || e === `bg-size`
  , po = e => e === `length`
  , mo = e => e === `number`
  , ho = e => e === `family-name`
  , go = e => e === `number` || e === `weight`
  , _o = e => e === `shadow`
  , vo = Ta( () => {
    let e = J(`color`)
      , t = J(`font`)
      , n = J(`text`)
      , r = J(`font-weight`)
      , i = J(`tracking`)
      , a = J(`leading`)
      , o = J(`breakpoint`)
      , s = J(`container`)
      , c = J(`spacing`)
      , l = J(`radius`)
      , u = J(`shadow`)
      , d = J(`inset-shadow`)
      , f = J(`text-shadow`)
      , p = J(`drop-shadow`)
      , m = J(`blur`)
      , h = J(`perspective`)
      , g = J(`aspect`)
      , _ = J(`ease`)
      , v = J(`animate`)
      , y = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`]
      , b = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`]
      , x = () => [...b(), Z, X]
      , S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`]
      , ee = () => [`auto`, `contain`, `none`]
      , C = () => [Z, X, c]
      , w = () => [Fa, `full`, `auto`, ...C()]
      , T = () => [Ia, `none`, `subgrid`, Z, X]
      , E = () => [`auto`, {
        span: [`full`, Ia, Z, X]
    }, Ia, Z, X]
      , te = () => [Ia, `auto`, Z, X]
      , D = () => [`auto`, `min`, `max`, `fr`, Z, X]
      , O = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`]
      , k = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`]
      , A = () => [`auto`, ...C()]
      , j = () => [Fa, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...C()]
      , M = () => [Fa, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...C()]
      , N = () => [Fa, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...C()]
      , P = () => [e, Z, X]
      , ne = () => [...b(), no, Za, {
        position: [Z, X]
    }]
      , F = () => [`no-repeat`, {
        repeat: [``, `x`, `y`, `space`, `round`]
    }]
      , re = () => [`auto`, `cover`, `contain`, ro, Ka, {
        size: [Z, X]
    }]
      , ie = () => [La, eo, qa]
      , I = () => [``, `none`, `full`, l, Z, X]
      , L = () => [``, Y, eo, qa]
      , R = () => [`solid`, `dashed`, `dotted`, `double`]
      , ae = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`]
      , z = () => [Y, La, no, Za]
      , B = () => [``, `none`, m, Z, X]
      , oe = () => [`none`, Y, Z, X]
      , V = () => [`none`, Y, Z, X]
      , se = () => [Y, Z, X]
      , ce = () => [Fa, `full`, ...C()];
    return {
        cacheSize: 500,
        theme: {
            animate: [`spin`, `ping`, `pulse`, `bounce`],
            aspect: [`video`],
            blur: [Ra],
            breakpoint: [Ra],
            color: [za],
            container: [Ra],
            "drop-shadow": [Ra],
            ease: [`in`, `out`, `in-out`],
            font: [Wa],
            "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`],
            "inset-shadow": [Ra],
            leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
            perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
            radius: [Ra],
            shadow: [Ra],
            spacing: [`px`, Y],
            text: [Ra],
            "text-shadow": [Ra],
            tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`]
        },
        classGroups: {
            aspect: [{
                aspect: [`auto`, `square`, Fa, X, Z, g]
            }],
            container: [`container`],
            "container-type": [{
                "@container": [``, `normal`, `size`, Z, X]
            }],
            "container-named": [Ga],
            columns: [{
                columns: [Y, X, Z, s]
            }],
            "break-after": [{
                "break-after": y()
            }],
            "break-before": [{
                "break-before": y()
            }],
            "break-inside": [{
                "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`]
            }],
            "box-decoration": [{
                "box-decoration": [`slice`, `clone`]
            }],
            box: [{
                box: [`border`, `content`]
            }],
            display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`],
            sr: [`sr-only`, `not-sr-only`],
            float: [{
                float: [`right`, `left`, `none`, `start`, `end`]
            }],
            clear: [{
                clear: [`left`, `right`, `both`, `none`, `start`, `end`]
            }],
            isolation: [`isolate`, `isolation-auto`],
            "object-fit": [{
                object: [`contain`, `cover`, `fill`, `none`, `scale-down`]
            }],
            "object-position": [{
                object: x()
            }],
            overflow: [{
                overflow: S()
            }],
            "overflow-x": [{
                "overflow-x": S()
            }],
            "overflow-y": [{
                "overflow-y": S()
            }],
            overscroll: [{
                overscroll: ee()
            }],
            "overscroll-x": [{
                "overscroll-x": ee()
            }],
            "overscroll-y": [{
                "overscroll-y": ee()
            }],
            position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
            inset: [{
                inset: w()
            }],
            "inset-x": [{
                "inset-x": w()
            }],
            "inset-y": [{
                "inset-y": w()
            }],
            start: [{
                "inset-s": w(),
                start: w()
            }],
            end: [{
                "inset-e": w(),
                end: w()
            }],
            "inset-bs": [{
                "inset-bs": w()
            }],
            "inset-be": [{
                "inset-be": w()
            }],
            top: [{
                top: w()
            }],
            right: [{
                right: w()
            }],
            bottom: [{
                bottom: w()
            }],
            left: [{
                left: w()
            }],
            visibility: [`visible`, `invisible`, `collapse`],
            z: [{
                z: [Ia, `auto`, Z, X]
            }],
            basis: [{
                basis: [Fa, `full`, `auto`, s, ...C()]
            }],
            "flex-direction": [{
                flex: [`row`, `row-reverse`, `col`, `col-reverse`]
            }],
            "flex-wrap": [{
                flex: [`nowrap`, `wrap`, `wrap-reverse`]
            }],
            flex: [{
                flex: [Y, Fa, `auto`, `initial`, `none`, X]
            }],
            grow: [{
                grow: [``, Y, Z, X]
            }],
            shrink: [{
                shrink: [``, Y, Z, X]
            }],
            order: [{
                order: [Ia, `first`, `last`, `none`, Z, X]
            }],
            "grid-cols": [{
                "grid-cols": T()
            }],
            "col-start-end": [{
                col: E()
            }],
            "col-start": [{
                "col-start": te()
            }],
            "col-end": [{
                "col-end": te()
            }],
            "grid-rows": [{
                "grid-rows": T()
            }],
            "row-start-end": [{
                row: E()
            }],
            "row-start": [{
                "row-start": te()
            }],
            "row-end": [{
                "row-end": te()
            }],
            "grid-flow": [{
                "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`]
            }],
            "auto-cols": [{
                "auto-cols": D()
            }],
            "auto-rows": [{
                "auto-rows": D()
            }],
            gap: [{
                gap: C()
            }],
            "gap-x": [{
                "gap-x": C()
            }],
            "gap-y": [{
                "gap-y": C()
            }],
            "justify-content": [{
                justify: [...O(), `normal`]
            }],
            "justify-items": [{
                "justify-items": [...k(), `normal`]
            }],
            "justify-self": [{
                "justify-self": [`auto`, ...k()]
            }],
            "align-content": [{
                content: [`normal`, ...O()]
            }],
            "align-items": [{
                items: [...k(), {
                    baseline: [``, `last`]
                }]
            }],
            "align-self": [{
                self: [`auto`, ...k(), {
                    baseline: [``, `last`]
                }]
            }],
            "place-content": [{
                "place-content": O()
            }],
            "place-items": [{
                "place-items": [...k(), `baseline`]
            }],
            "place-self": [{
                "place-self": [`auto`, ...k()]
            }],
            p: [{
                p: C()
            }],
            px: [{
                px: C()
            }],
            py: [{
                py: C()
            }],
            ps: [{
                ps: C()
            }],
            pe: [{
                pe: C()
            }],
            pbs: [{
                pbs: C()
            }],
            pbe: [{
                pbe: C()
            }],
            pt: [{
                pt: C()
            }],
            pr: [{
                pr: C()
            }],
            pb: [{
                pb: C()
            }],
            pl: [{
                pl: C()
            }],
            m: [{
                m: A()
            }],
            mx: [{
                mx: A()
            }],
            my: [{
                my: A()
            }],
            ms: [{
                ms: A()
            }],
            me: [{
                me: A()
            }],
            mbs: [{
                mbs: A()
            }],
            mbe: [{
                mbe: A()
            }],
            mt: [{
                mt: A()
            }],
            mr: [{
                mr: A()
            }],
            mb: [{
                mb: A()
            }],
            ml: [{
                ml: A()
            }],
            "space-x": [{
                "space-x": C()
            }],
            "space-x-reverse": [`space-x-reverse`],
            "space-y": [{
                "space-y": C()
            }],
            "space-y-reverse": [`space-y-reverse`],
            size: [{
                size: j()
            }],
            "inline-size": [{
                inline: [`auto`, ...M()]
            }],
            "min-inline-size": [{
                "min-inline": [`auto`, ...M()]
            }],
            "max-inline-size": [{
                "max-inline": [`none`, ...M()]
            }],
            "block-size": [{
                block: [`auto`, ...N()]
            }],
            "min-block-size": [{
                "min-block": [`auto`, ...N()]
            }],
            "max-block-size": [{
                "max-block": [`none`, ...N()]
            }],
            w: [{
                w: [s, `screen`, ...j()]
            }],
            "min-w": [{
                "min-w": [s, `screen`, `none`, ...j()]
            }],
            "max-w": [{
                "max-w": [s, `screen`, `none`, `prose`, {
                    screen: [o]
                }, ...j()]
            }],
            h: [{
                h: [`screen`, `lh`, ...j()]
            }],
            "min-h": [{
                "min-h": [`screen`, `lh`, `none`, ...j()]
            }],
            "max-h": [{
                "max-h": [`screen`, `lh`, ...j()]
            }],
            "font-size": [{
                text: [`base`, n, eo, qa]
            }],
            "font-smoothing": [`antialiased`, `subpixel-antialiased`],
            "font-style": [`italic`, `not-italic`],
            "font-weight": [{
                font: [r, oo, Ya]
            }],
            "font-stretch": [{
                "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, La, X]
            }],
            "font-family": [{
                font: [to, Xa, t]
            }],
            "font-features": [{
                "font-features": [X]
            }],
            "fvn-normal": [`normal-nums`],
            "fvn-ordinal": [`ordinal`],
            "fvn-slashed-zero": [`slashed-zero`],
            "fvn-figure": [`lining-nums`, `oldstyle-nums`],
            "fvn-spacing": [`proportional-nums`, `tabular-nums`],
            "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
            tracking: [{
                tracking: [i, Z, X]
            }],
            "line-clamp": [{
                "line-clamp": [Y, `none`, Z, Ja]
            }],
            leading: [{
                leading: [a, ...C()]
            }],
            "list-image": [{
                "list-image": [`none`, Z, X]
            }],
            "list-style-position": [{
                list: [`inside`, `outside`]
            }],
            "list-style-type": [{
                list: [`disc`, `decimal`, `none`, Z, X]
            }],
            "text-alignment": [{
                text: [`left`, `center`, `right`, `justify`, `start`, `end`]
            }],
            "placeholder-color": [{
                placeholder: P()
            }],
            "text-color": [{
                text: P()
            }],
            "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
            "text-decoration-style": [{
                decoration: [...R(), `wavy`]
            }],
            "text-decoration-thickness": [{
                decoration: [Y, `from-font`, `auto`, Z, qa]
            }],
            "text-decoration-color": [{
                decoration: P()
            }],
            "underline-offset": [{
                "underline-offset": [Y, `auto`, Z, X]
            }],
            "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
            "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
            "text-wrap": [{
                text: [`wrap`, `nowrap`, `balance`, `pretty`]
            }],
            indent: [{
                indent: C()
            }],
            "tab-size": [{
                tab: [Ia, Z, X]
            }],
            "vertical-align": [{
                align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, Z, X]
            }],
            whitespace: [{
                whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`]
            }],
            break: [{
                break: [`normal`, `words`, `all`, `keep`]
            }],
            wrap: [{
                wrap: [`break-word`, `anywhere`, `normal`]
            }],
            hyphens: [{
                hyphens: [`none`, `manual`, `auto`]
            }],
            content: [{
                content: [`none`, Z, X]
            }],
            "bg-attachment": [{
                bg: [`fixed`, `local`, `scroll`]
            }],
            "bg-clip": [{
                "bg-clip": [`border`, `padding`, `content`, `text`]
            }],
            "bg-origin": [{
                "bg-origin": [`border`, `padding`, `content`]
            }],
            "bg-position": [{
                bg: ne()
            }],
            "bg-repeat": [{
                bg: F()
            }],
            "bg-size": [{
                bg: re()
            }],
            "bg-image": [{
                bg: [`none`, {
                    linear: [{
                        to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`]
                    }, Ia, Z, X],
                    radial: [``, Z, X],
                    conic: [Ia, Z, X]
                }, io, Qa]
            }],
            "bg-color": [{
                bg: P()
            }],
            "gradient-from-pos": [{
                from: ie()
            }],
            "gradient-via-pos": [{
                via: ie()
            }],
            "gradient-to-pos": [{
                to: ie()
            }],
            "gradient-from": [{
                from: P()
            }],
            "gradient-via": [{
                via: P()
            }],
            "gradient-to": [{
                to: P()
            }],
            rounded: [{
                rounded: I()
            }],
            "rounded-s": [{
                "rounded-s": I()
            }],
            "rounded-e": [{
                "rounded-e": I()
            }],
            "rounded-t": [{
                "rounded-t": I()
            }],
            "rounded-r": [{
                "rounded-r": I()
            }],
            "rounded-b": [{
                "rounded-b": I()
            }],
            "rounded-l": [{
                "rounded-l": I()
            }],
            "rounded-ss": [{
                "rounded-ss": I()
            }],
            "rounded-se": [{
                "rounded-se": I()
            }],
            "rounded-ee": [{
                "rounded-ee": I()
            }],
            "rounded-es": [{
                "rounded-es": I()
            }],
            "rounded-tl": [{
                "rounded-tl": I()
            }],
            "rounded-tr": [{
                "rounded-tr": I()
            }],
            "rounded-br": [{
                "rounded-br": I()
            }],
            "rounded-bl": [{
                "rounded-bl": I()
            }],
            "border-w": [{
                border: L()
            }],
            "border-w-x": [{
                "border-x": L()
            }],
            "border-w-y": [{
                "border-y": L()
            }],
            "border-w-s": [{
                "border-s": L()
            }],
            "border-w-e": [{
                "border-e": L()
            }],
            "border-w-bs": [{
                "border-bs": L()
            }],
            "border-w-be": [{
                "border-be": L()
            }],
            "border-w-t": [{
                "border-t": L()
            }],
            "border-w-r": [{
                "border-r": L()
            }],
            "border-w-b": [{
                "border-b": L()
            }],
            "border-w-l": [{
                "border-l": L()
            }],
            "divide-x": [{
                "divide-x": L()
            }],
            "divide-x-reverse": [`divide-x-reverse`],
            "divide-y": [{
                "divide-y": L()
            }],
            "divide-y-reverse": [`divide-y-reverse`],
            "border-style": [{
                border: [...R(), `hidden`, `none`]
            }],
            "divide-style": [{
                divide: [...R(), `hidden`, `none`]
            }],
            "border-color": [{
                border: P()
            }],
            "border-color-x": [{
                "border-x": P()
            }],
            "border-color-y": [{
                "border-y": P()
            }],
            "border-color-s": [{
                "border-s": P()
            }],
            "border-color-e": [{
                "border-e": P()
            }],
            "border-color-bs": [{
                "border-bs": P()
            }],
            "border-color-be": [{
                "border-be": P()
            }],
            "border-color-t": [{
                "border-t": P()
            }],
            "border-color-r": [{
                "border-r": P()
            }],
            "border-color-b": [{
                "border-b": P()
            }],
            "border-color-l": [{
                "border-l": P()
            }],
            "divide-color": [{
                divide: P()
            }],
            "outline-style": [{
                outline: [...R(), `none`, `hidden`]
            }],
            "outline-offset": [{
                "outline-offset": [Y, Z, X]
            }],
            "outline-w": [{
                outline: [``, Y, eo, qa]
            }],
            "outline-color": [{
                outline: P()
            }],
            shadow: [{
                shadow: [``, `none`, u, ao, $a]
            }],
            "shadow-color": [{
                shadow: P()
            }],
            "inset-shadow": [{
                "inset-shadow": [`none`, d, ao, $a]
            }],
            "inset-shadow-color": [{
                "inset-shadow": P()
            }],
            "ring-w": [{
                ring: L()
            }],
            "ring-w-inset": [`ring-inset`],
            "ring-color": [{
                ring: P()
            }],
            "ring-offset-w": [{
                "ring-offset": [Y, qa]
            }],
            "ring-offset-color": [{
                "ring-offset": P()
            }],
            "inset-ring-w": [{
                "inset-ring": L()
            }],
            "inset-ring-color": [{
                "inset-ring": P()
            }],
            "text-shadow": [{
                "text-shadow": [`none`, f, ao, $a]
            }],
            "text-shadow-color": [{
                "text-shadow": P()
            }],
            opacity: [{
                opacity: [Y, Z, X]
            }],
            "mix-blend": [{
                "mix-blend": [...ae(), `plus-darker`, `plus-lighter`]
            }],
            "bg-blend": [{
                "bg-blend": ae()
            }],
            "mask-clip": [{
                "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
            }, `mask-no-clip`],
            "mask-composite": [{
                mask: [`add`, `subtract`, `intersect`, `exclude`]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Y]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": z()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": z()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": P()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": P()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": z()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": z()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": P()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": P()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": z()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": z()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": P()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": P()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": z()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": z()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": P()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": P()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": z()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": z()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": P()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": P()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": z()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": z()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": P()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": P()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": z()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": z()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": P()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": P()
            }],
            "mask-image-radial": [{
                "mask-radial": [Z, X]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": z()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": z()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": P()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": P()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": [`circle`, `ellipse`]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: [`side`, `corner`],
                    farthest: [`side`, `corner`]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": b()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Y]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": z()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": z()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": P()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": P()
            }],
            "mask-mode": [{
                mask: [`alpha`, `luminance`, `match`]
            }],
            "mask-origin": [{
                "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
            }],
            "mask-position": [{
                mask: ne()
            }],
            "mask-repeat": [{
                mask: F()
            }],
            "mask-size": [{
                mask: re()
            }],
            "mask-type": [{
                "mask-type": [`alpha`, `luminance`]
            }],
            "mask-image": [{
                mask: [`none`, Z, X]
            }],
            filter: [{
                filter: [``, `none`, Z, X]
            }],
            blur: [{
                blur: B()
            }],
            brightness: [{
                brightness: [Y, Z, X]
            }],
            contrast: [{
                contrast: [Y, Z, X]
            }],
            "drop-shadow": [{
                "drop-shadow": [``, `none`, p, ao, $a]
            }],
            "drop-shadow-color": [{
                "drop-shadow": P()
            }],
            grayscale: [{
                grayscale: [``, Y, Z, X]
            }],
            "hue-rotate": [{
                "hue-rotate": [Y, Z, X]
            }],
            invert: [{
                invert: [``, Y, Z, X]
            }],
            saturate: [{
                saturate: [Y, Z, X]
            }],
            sepia: [{
                sepia: [``, Y, Z, X]
            }],
            "backdrop-filter": [{
                "backdrop-filter": [``, `none`, Z, X]
            }],
            "backdrop-blur": [{
                "backdrop-blur": B()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Y, Z, X]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Y, Z, X]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [``, Y, Z, X]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Y, Z, X]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [``, Y, Z, X]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Y, Z, X]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Y, Z, X]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [``, Y, Z, X]
            }],
            "border-collapse": [{
                border: [`collapse`, `separate`]
            }],
            "border-spacing": [{
                "border-spacing": C()
            }],
            "border-spacing-x": [{
                "border-spacing-x": C()
            }],
            "border-spacing-y": [{
                "border-spacing-y": C()
            }],
            "table-layout": [{
                table: [`auto`, `fixed`]
            }],
            caption: [{
                caption: [`top`, `bottom`]
            }],
            transition: [{
                transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, Z, X]
            }],
            "transition-behavior": [{
                transition: [`normal`, `discrete`]
            }],
            duration: [{
                duration: [Y, `initial`, Z, X]
            }],
            ease: [{
                ease: [`linear`, `initial`, _, Z, X]
            }],
            delay: [{
                delay: [Y, Z, X]
            }],
            animate: [{
                animate: [`none`, v, Z, X]
            }],
            backface: [{
                backface: [`hidden`, `visible`]
            }],
            perspective: [{
                perspective: [h, Z, X]
            }],
            "perspective-origin": [{
                "perspective-origin": x()
            }],
            rotate: [{
                rotate: oe()
            }],
            "rotate-x": [{
                "rotate-x": oe()
            }],
            "rotate-y": [{
                "rotate-y": oe()
            }],
            "rotate-z": [{
                "rotate-z": oe()
            }],
            scale: [{
                scale: V()
            }],
            "scale-x": [{
                "scale-x": V()
            }],
            "scale-y": [{
                "scale-y": V()
            }],
            "scale-z": [{
                "scale-z": V()
            }],
            "scale-3d": [`scale-3d`],
            skew: [{
                skew: se()
            }],
            "skew-x": [{
                "skew-x": se()
            }],
            "skew-y": [{
                "skew-y": se()
            }],
            transform: [{
                transform: [Z, X, ``, `none`, `gpu`, `cpu`]
            }],
            "transform-origin": [{
                origin: x()
            }],
            "transform-style": [{
                transform: [`3d`, `flat`]
            }],
            translate: [{
                translate: ce()
            }],
            "translate-x": [{
                "translate-x": ce()
            }],
            "translate-y": [{
                "translate-y": ce()
            }],
            "translate-z": [{
                "translate-z": ce()
            }],
            "translate-none": [`translate-none`],
            zoom: [{
                zoom: [Ia, Z, X]
            }],
            accent: [{
                accent: P()
            }],
            appearance: [{
                appearance: [`none`, `auto`]
            }],
            "caret-color": [{
                caret: P()
            }],
            "color-scheme": [{
                scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`]
            }],
            cursor: [{
                cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, Z, X]
            }],
            "field-sizing": [{
                "field-sizing": [`fixed`, `content`]
            }],
            "pointer-events": [{
                "pointer-events": [`auto`, `none`]
            }],
            resize: [{
                resize: [`none`, ``, `y`, `x`]
            }],
            "scroll-behavior": [{
                scroll: [`auto`, `smooth`]
            }],
            "scrollbar-thumb-color": [{
                "scrollbar-thumb": P()
            }],
            "scrollbar-track-color": [{
                "scrollbar-track": P()
            }],
            "scrollbar-gutter": [{
                "scrollbar-gutter": [`auto`, `stable`, `both`]
            }],
            "scrollbar-w": [{
                scrollbar: [`auto`, `thin`, `none`]
            }],
            "scroll-m": [{
                "scroll-m": C()
            }],
            "scroll-mx": [{
                "scroll-mx": C()
            }],
            "scroll-my": [{
                "scroll-my": C()
            }],
            "scroll-ms": [{
                "scroll-ms": C()
            }],
            "scroll-me": [{
                "scroll-me": C()
            }],
            "scroll-mbs": [{
                "scroll-mbs": C()
            }],
            "scroll-mbe": [{
                "scroll-mbe": C()
            }],
            "scroll-mt": [{
                "scroll-mt": C()
            }],
            "scroll-mr": [{
                "scroll-mr": C()
            }],
            "scroll-mb": [{
                "scroll-mb": C()
            }],
            "scroll-ml": [{
                "scroll-ml": C()
            }],
            "scroll-p": [{
                "scroll-p": C()
            }],
            "scroll-px": [{
                "scroll-px": C()
            }],
            "scroll-py": [{
                "scroll-py": C()
            }],
            "scroll-ps": [{
                "scroll-ps": C()
            }],
            "scroll-pe": [{
                "scroll-pe": C()
            }],
            "scroll-pbs": [{
                "scroll-pbs": C()
            }],
            "scroll-pbe": [{
                "scroll-pbe": C()
            }],
            "scroll-pt": [{
                "scroll-pt": C()
            }],
            "scroll-pr": [{
                "scroll-pr": C()
            }],
            "scroll-pb": [{
                "scroll-pb": C()
            }],
            "scroll-pl": [{
                "scroll-pl": C()
            }],
            "snap-align": [{
                snap: [`start`, `end`, `center`, `align-none`]
            }],
            "snap-stop": [{
                snap: [`normal`, `always`]
            }],
            "snap-type": [{
                snap: [`none`, `x`, `y`, `both`]
            }],
            "snap-strictness": [{
                snap: [`mandatory`, `proximity`]
            }],
            touch: [{
                touch: [`auto`, `none`, `manipulation`]
            }],
            "touch-x": [{
                "touch-pan": [`x`, `left`, `right`]
            }],
            "touch-y": [{
                "touch-pan": [`y`, `up`, `down`]
            }],
            "touch-pz": [`touch-pinch-zoom`],
            select: [{
                select: [`none`, `text`, `all`, `auto`]
            }],
            "will-change": [{
                "will-change": [`auto`, `scroll`, `contents`, `transform`, Z, X]
            }],
            fill: [{
                fill: [`none`, ...P()]
            }],
            "stroke-w": [{
                stroke: [Y, eo, qa, Ja]
            }],
            stroke: [{
                stroke: [`none`, ...P()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": [`auto`, `none`]
            }]
        },
        conflictingClassGroups: {
            "container-named": [`container-type`],
            overflow: [`overflow-x`, `overflow-y`],
            overscroll: [`overscroll-x`, `overscroll-y`],
            inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`],
            "inset-x": [`right`, `left`],
            "inset-y": [`top`, `bottom`],
            flex: [`basis`, `grow`, `shrink`],
            gap: [`gap-x`, `gap-y`],
            p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
            px: [`pr`, `pl`],
            py: [`pt`, `pb`],
            m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
            mx: [`mr`, `ml`],
            my: [`mt`, `mb`],
            size: [`w`, `h`],
            "font-size": [`leading`],
            "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`],
            "fvn-ordinal": [`fvn-normal`],
            "fvn-slashed-zero": [`fvn-normal`],
            "fvn-figure": [`fvn-normal`],
            "fvn-spacing": [`fvn-normal`],
            "fvn-fraction": [`fvn-normal`],
            "line-clamp": [`display`, `overflow`],
            rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`],
            "rounded-s": [`rounded-ss`, `rounded-es`],
            "rounded-e": [`rounded-se`, `rounded-ee`],
            "rounded-t": [`rounded-tl`, `rounded-tr`],
            "rounded-r": [`rounded-tr`, `rounded-br`],
            "rounded-b": [`rounded-br`, `rounded-bl`],
            "rounded-l": [`rounded-tl`, `rounded-bl`],
            "border-spacing": [`border-spacing-x`, `border-spacing-y`],
            "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`],
            "border-w-x": [`border-w-r`, `border-w-l`],
            "border-w-y": [`border-w-t`, `border-w-b`],
            "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`],
            "border-color-x": [`border-color-r`, `border-color-l`],
            "border-color-y": [`border-color-t`, `border-color-b`],
            translate: [`translate-x`, `translate-y`, `translate-none`],
            "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
            "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`],
            "scroll-mx": [`scroll-mr`, `scroll-ml`],
            "scroll-my": [`scroll-mt`, `scroll-mb`],
            "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`],
            "scroll-px": [`scroll-pr`, `scroll-pl`],
            "scroll-py": [`scroll-pt`, `scroll-pb`],
            touch: [`touch-x`, `touch-y`, `touch-pz`],
            "touch-x": [`touch`],
            "touch-y": [`touch`],
            "touch-pz": [`touch`]
        },
        conflictingClassGroupModifiers: {
            "font-size": [`leading`]
        },
        postfixLookupClassGroups: [`container-type`],
        orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`]
    }
}
);
function yo(...e) {
    return vo(qi(e))
}
var bo = d.forwardRef(function(e, t) {
    let {render: n, className: r, disabled: i=!1, focusableWhenDisabled: a=!1, nativeButton: o=!0, style: s, ...c} = e
      , {getButtonProps: l, buttonRef: u} = pt({
        disabled: i,
        focusableWhenDisabled: a,
        native: o
    });
    return Ae(`button`, e, {
        state: {
            disabled: i
        },
        ref: [t, u],
        props: [c, l]
    })
})
  , xo = e => typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e
  , So = qi
  , Co = ( (e, t) => n => {
    if (t?.variants == null)
        return So(e, n?.class, n?.className);
    let {variants: r, defaultVariants: i} = t
      , a = Object.keys(r).map(e => {
        let t = n?.[e]
          , a = i?.[e];
        if (t === null)
            return null;
        let o = xo(t) || xo(a);
        return r[e][o]
    }
    )
      , o = n && Object.entries(n).reduce( (e, t) => {
        let[n,r] = t;
        return r === void 0 || (e[n] = r),
        e
    }
    , {});
    return So(e, a, t?.compoundVariants?.reduce( (e, t) => {
        let {class: n, className: r, ...a} = t;
        return Object.entries(a).every(e => {
            let[t,n] = e;
            return Array.isArray(n) ? n.includes({
                ...i,
                ...o
            }[t]) : {
                ...i,
                ...o
            }[t] === n
        }
        ) ? [...e, n, r] : e
    }
    , []), n?.class, n?.className)
}
)(`group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, {
    variants: {
        variant: {
            default: `bg-primary text-primary-foreground hover:bg-primary/80`,
            outline: `border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
            secondary: `bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,
            ghost: `hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,
            destructive: `bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,
            link: `text-primary underline-offset-4 hover:underline`
        },
        size: {
            default: `h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
            xs: `h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3`,
            sm: `h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5`,
            lg: `h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
            icon: `size-8`,
            "icon-xs": `size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,
            "icon-sm": `size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg`,
            "icon-lg": `size-9`
        }
    },
    defaultVariants: {
        variant: `default`,
        size: `default`
    }
});
function wo({className: e, variant: t=`default`, size: n=`default`, ...r}) {
    return (0,
    q.jsx)(bo, {
        "data-slot": `button`,
        className: yo(Co({
            variant: t,
            size: n,
            className: e
        })),
        ...r
    })
}
function To({...e}) {
    return (0,
    q.jsx)(Wi, {
        "data-slot": `dialog`,
        ...e
    })
}
function Eo({...e}) {
    return (0,
    q.jsx)(Ei, {
        "data-slot": `dialog-portal`,
        ...e
    })
}
function Do({...e}) {
    return (0,
    q.jsx)(wt, {
        "data-slot": `dialog-close`,
        ...e
    })
}
function Oo({className: e, ...t}) {
    return (0,
    q.jsx)(Ge, {
        "data-slot": `dialog-overlay`,
        className: yo(`fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`, e),
        ...t
    })
}
function ko({className: e, children: t, showCloseButton: n=!0, ...r}) {
    return (0,
    q.jsxs)(Eo, {
        children: [(0,
        q.jsx)(Oo, {}), (0,
        q.jsxs)(Ci, {
            "data-slot": `dialog-content`,
            className: yo(`fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`, e),
            ...r,
            children: [t, n && (0,
            q.jsxs)(wt, {
                "data-slot": `dialog-close`,
                render: (0,
                q.jsx)(wo, {
                    variant: `ghost`,
                    className: `absolute top-2 right-2`,
                    size: `icon-sm`
                }),
                children: [(0,
                q.jsx)(M, {}), (0,
                q.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Close`
                })]
            })]
        })]
    })
}
function Ao({className: e, ...t}) {
    return (0,
    q.jsx)(Gi, {
        "data-slot": `dialog-title`,
        className: yo(`font-heading text-base leading-none font-medium`, e),
        ...t
    })
}
function jo({className: e, ...t}) {
    return (0,
    q.jsx)(At, {
        "data-slot": `dialog-description`,
        className: yo(`text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground`, e),
        ...t
    })
}
var Q = {
    page: `_page_10do4_5`,
    joinDialog: `_joinDialog_10do4_7`,
    header: `_header_10do4_185`,
    brand: `_brand_10do4_215`,
    brandEmblem: `_brandEmblem_10do4_227`,
    nav: `_nav_10do4_259`,
    menuToggle: `_menuToggle_10do4_299`,
    poster: `_poster_10do4_311`,
    primary: `_primary_10do4_351`,
    copyAddress: `_copyAddress_10do4_391`,
    modeSelector: `_modeSelector_10do4_423`,
    selectorIntro: `_selectorIntro_10do4_443`,
    sectionMarker: `_sectionMarker_10do4_453`,
    modeButtons: `_modeButtons_10do4_491`,
    modeButton: `_modeButton_10do4_491`,
    modeArrow: `_modeArrow_10do4_545`,
    modeJourney: `_modeJourney_10do4_551`,
    journeyLayout: `_journeyLayout_10do4_563`,
    journeyChapter: `_journeyChapter_10do4_575`,
    chapterText: `_chapterText_10do4_589`,
    chapterIcon: `_chapterIcon_10do4_597`,
    mainModeLabel: `_mainModeLabel_10do4_617`,
    chapterDescription: `_chapterDescription_10do4_649`,
    modeTags: `_modeTags_10do4_665`,
    chapterJoin: `_chapterJoin_10do4_709`,
    journeyVisual: `_journeyVisual_10do4_715`,
    journeyFigure: `_journeyFigure_10do4_745`,
    journeyImage: `_journeyImage_10do4_759`,
    boxPvpArt: `_boxPvpArt_10do4_817`,
    journeyStops: `_journeyStops_10do4_825`,
    pushButton: `_pushButton_10do4_863`,
    mobileChapterArt: `_mobileChapterArt_10do4_879`,
    videosSection: `_videosSection_10do4_885`,
    sectionHeading: `_sectionHeading_10do4_899`,
    joinSection: `_joinSection_10do4_921`,
    channelLink: `_channelLink_10do4_935`,
    moderationLink: `_moderationLink_10do4_937`,
    videoGrid: `_videoGrid_10do4_959`,
    videoArticle: `_videoArticle_10do4_969`,
    videoButton: `_videoButton_10do4_975`,
    pushContent: `_pushContent_10do4_989`,
    videoPlay: `_videoPlay_10do4_1021`,
    videoType: `_videoType_10do4_1053`,
    joinSectionCopy: `_joinSectionCopy_10do4_1119`,
    largeIP: `_largeIP_10do4_1133`,
    joinHelp: `_joinHelp_10do4_1173`,
    connectionSteps: `_connectionSteps_10do4_1185`,
    moderation: `_moderation_10do4_937`,
    moderationIcon: `_moderationIcon_10do4_1277`,
    videoDialog: `_videoDialog_10do4_1323`,
    videoDialogTitle: `_videoDialogTitle_10do4_1331`,
    videoDialogDescription: `_videoDialogDescription_10do4_1345`,
    videoFallback: `_videoFallback_10do4_1371`,
    footer: `_footer_10do4_1391`,
    footerIdentity: `_footerIdentity_10do4_1415`,
    footerLinks: `_footerLinks_10do4_1459`,
    footerLegal: `_footerLegal_10do4_1499`,
    skip: `_skip_10do4_1539`,
    liveStatus: `_liveStatus_10do4_1565`,
    dialogClose: `_dialogClose_10do4_1621`,
    dialogIcon: `_dialogIcon_10do4_1645`,
    dialogTitle: `_dialogTitle_10do4_1663`,
    dialogDescription: `_dialogDescription_10do4_1675`,
    dialogIP: `_dialogIP_10do4_1687`,
    dialogAddressText: `_dialogAddressText_10do4_1713`,
    addressLabel: `_addressLabel_10do4_1723`,
    addressValue: `_addressValue_10do4_1739`,
    dialogCopy: `_dialogCopy_10do4_1759`,
    dialogStatus: `_dialogStatus_10do4_1785`,
    stepsToggle: `_stepsToggle_10do4_1797`,
    steps: `_steps_10do4_1797`,
    guide: `_guide_10do4_1847`,
    navOpen: `_navOpen_10do4_2443`,
    heroPattern: `_heroPattern_10do4_3079`,
    entryLayout: `_entryLayout_10do4_3165`,
    welcomeBanner: `_welcomeBanner_10do4_3191`,
    heroLogo: `_heroLogo_10do4_3223`,
    bannerJoin: `_bannerJoin_10do4_3292`,
    entryDetails: `_entryDetails_10do4_3308`,
    entryIP: `_entryIP_10do4_3336`,
    onlineStatus: `_onlineStatus_10do4_3378`,
    statusDot: `_statusDot_10do4_3410`,
    themeToggle: `_themeToggle_10do4_3430`,
    headerChannel: `_headerChannel_10do4_3460`,
    shopLink: `_shopLink_10do4_3500`,
    trailerBackdrop: `_trailerBackdrop_10do4_3506`,
    trailerShade: `_trailerShade_10do4_3534`,
    headerChannelLabel: `_headerChannelLabel_10do4_4009`,
    headerDock: `_headerDock_10do4_4105`,
    faqSection: `_faqSection_10do4_4159`,
    faqIntro: `_faqIntro_10do4_4175`,
    faqList: `_faqList_10do4_4197`,
    "art-appear": `_art-appear_10do4_1`
};
function Mo(e) {
    return typeof e == `object` && e && !Array.isArray(e) ? e : {}
}
function No(e) {
    return typeof e == `number` && Number.isSafeInteger(e) && e >= 0 ? e : null
}
function Po(e) {
    let t = Mo(e);
    return Mo(t.guild).id === `1034791544579956846` ? {
        total: No(t.approximate_member_count),
        online: No(t.approximate_presence_count)
    } : {
        total: null,
        online: null
    }
}
function Fo(e) {
    let t = Mo(e);
    if (t.id !== `1034791544579956846`)
        return {
            online: null,
            members: []
        };
    let n = [];
    if (Array.isArray(t.members))
        for (let e of t.members) {
            let t = Mo(e);
            if (typeof t.username != `string` || !t.username.trim() || ![`online`, `idle`, `dnd`].includes(String(t.status)))
                continue;
            let r = null;
            if (typeof t.avatar_url == `string`)
                try {
                    let e = new URL(t.avatar_url);
                    e.protocol === `https:` && e.hostname === `cdn.discordapp.com` && e.pathname.startsWith(`/widget-avatars/`) && (r = e.href)
                } catch {}
            if (n.push({
                id: typeof t.id == `string` ? t.id : String(n.length),
                name: t.username.trim().slice(0, 80),
                avatar: r,
                status: t.status
            }),
            n.length === 6)
                break
        }
    return {
        online: No(t.presence_count),
        members: n
    }
}
var $ = {
    section: `_section_1vb82_1`,
    wordmark: `_wordmark_1vb82_27`,
    clyde: `_clyde_1vb82_43`,
    serverClyde: `_serverClyde_1vb82_45`,
    copy: `_copy_1vb82_61`,
    features: `_features_1vb82_89`,
    join: `_join_1vb82_115`,
    address: `_address_1vb82_179`,
    server: `_server_1vb82_45`,
    serverTop: `_serverTop_1vb82_205`,
    serverLabel: `_serverLabel_1vb82_245`,
    stats: `_stats_1vb82_293`,
    dot: `_dot_1vb82_347`,
    liveDot: `_liveDot_1vb82_349`,
    memberHeader: `_memberHeader_1vb82_365`,
    memberArea: `_memberArea_1vb82_397`,
    members: `_members_1vb82_405`,
    avatar: `_avatar_1vb82_433`,
    memberName: `_memberName_1vb82_505`,
    statusText: `_statusText_1vb82_521`,
    empty: `_empty_1vb82_539`,
    note: `_note_1vb82_557`
}
  , Io = `https://discord.com/api/v10/invites/vNASKDmyqv?with_counts=true`
  , Lo = `https://discord.com/api/v10/guilds/1034791544579956846/widget.json`
  , Ro = 18e4
  , zo = {
    online: `Onlayn`,
    idle: `Faol emas`,
    dnd: `Bezovta qilmang`
};
function Bo() {
    let e = (0,
    d.useRef)(null)
      , [t,n] = (0,
    d.useState)({
        total: null,
        online: null,
        members: [],
        loading: !0
    });
    (0,
    d.useEffect)( () => {
        let t = e.current;
        if (!t)
            return;
        let r = !1
          , i = !1
          , a = 0
          , o = null;
        async function s() {
            if (!r || document.hidden || o || Date.now() - a < Ro)
                return;
            a = Date.now();
            let e = new AbortController;
            o = e;
            let t = setTimeout( () => e.abort(), 1e4)
              , c = async t => {
                let n = await fetch(t, {
                    signal: e.signal,
                    credentials: `omit`
                });
                if (!n.ok)
                    throw Error(`Discord unavailable`);
                return n.json()
            }
            ;
            try {
                let[t,o] = await Promise.allSettled([c(Io), c(Lo)]);
                if (i || !r || document.hidden || e.signal.reason === `hidden`) {
                    a = 0;
                    return
                }
                let s = Po(t.status === `fulfilled` ? t.value : null)
                  , l = Fo(o.status === `fulfilled` ? o.value : null);
                n({
                    total: s.total,
                    online: l.online ?? s.online,
                    members: l.members,
                    loading: !1
                })
            } finally {
                clearTimeout(t),
                o = null,
                !i && r && !document.hidden && a === 0 && s()
            }
        }
        let c = () => {
            if (!r || document.hidden) {
                o?.abort(`hidden`);
                return
            }
            s()
        }
          , l = new IntersectionObserver( ([e]) => {
            r = e.isIntersecting,
            c()
        }
        ,{
            rootMargin: `300px`
        });
        l.observe(t),
        document.addEventListener(`visibilitychange`, c);
        let u = setInterval(c, Ro);
        return () => {
            i = !0,
            o?.abort(),
            l.disconnect(),
            clearInterval(u),
            document.removeEventListener(`visibilitychange`, c)
        }
    }
    , []);
    let r = e => e === null ? `—` : new Intl.NumberFormat(`uz-UZ`).format(e)
      , i = !t.loading && t.total === null && t.online === null;
    return (0,
    q.jsxs)(`section`, {
        ref: e,
        id: `discord`,
        className: $.section,
        "aria-labelledby": `discord-heading`,
        children: [(0,
        q.jsxs)(`div`, {
            className: $.copy,
            children: [(0,
            q.jsxs)(`span`, {
                className: $.wordmark,
                children: [(0,
                q.jsx)(`span`, {
                    className: $.clyde,
                    "aria-hidden": `true`
                }), ` Discord`]
            }), (0,
            q.jsxs)(`h2`, {
                id: `discord-heading`,
                children: [`Jamoangni top.`, (0,
                q.jsx)(`br`, {}), `Ovozli chatga kir.`]
            }), (0,
            q.jsx)(`p`, {
                children: `Anarxiyaga sherik, BoxPvP’ga raqib yoki Survival’ga do‘st izlayapsanmi? Minestax Discord’ida uchrashamiz.`
            }), (0,
            q.jsxs)(`div`, {
                className: $.features,
                children: [(0,
                q.jsxs)(`span`, {
                    children: [(0,
                    q.jsx)(w, {
                        size: 17
                    }), ` Suhbat`]
                }), (0,
                q.jsxs)(`span`, {
                    children: [(0,
                    q.jsx)(ee, {
                        size: 17
                    }), ` Ovozli kanallar`]
                }), (0,
                q.jsxs)(`span`, {
                    children: [(0,
                    q.jsx)(A, {
                        size: 17
                    }), ` O‘yinchilar`]
                })]
            }), (0,
            q.jsx)(`a`, {
                className: $.join,
                href: `https://discord.minestax.uz`,
                target: `_blank`,
                rel: `noreferrer`,
                children: (0,
                q.jsxs)(`span`, {
                    children: [`Discord’ga qo‘shilish `, (0,
                    q.jsx)(v, {
                        size: 21
                    })]
                })
            }), (0,
            q.jsx)(`span`, {
                className: $.address,
                children: `discord.minestax.uz`
            })]
        }), (0,
        q.jsxs)(`div`, {
            className: $.server,
            "aria-busy": t.loading,
            children: [(0,
            q.jsxs)(`div`, {
                className: $.serverTop,
                children: [(0,
                q.jsx)(`picture`, {
                    children: (0,
                    q.jsx)(`img`, {
                        src: `/art/brand/minestax-logo-96.webp`,
                        alt: ``,
                        width: 56,
                        height: 54,
                        loading: `lazy`
                    })
                }), (0,
                q.jsxs)(`div`, {
                    children: [(0,
                    q.jsx)(`span`, {
                        className: $.serverLabel,
                        children: `MINESTAX DISCORD`
                    }), (0,
                    q.jsx)(`h3`, {
                        children: `MINESTAX`
                    }), (0,
                    q.jsx)(`p`, {
                        children: `Minecraft Server`
                    })]
                }), (0,
                q.jsx)(`span`, {
                    className: $.serverClyde,
                    "aria-hidden": `true`
                })]
            }), (0,
            q.jsxs)(`dl`, {
                className: $.stats,
                children: [(0,
                q.jsxs)(`div`, {
                    children: [(0,
                    q.jsxs)(`dt`, {
                        children: [(0,
                        q.jsx)(`span`, {
                            className: $.dot
                        }), ` Onlayn`]
                    }), (0,
                    q.jsx)(`dd`, {
                        children: r(t.online)
                    })]
                }), (0,
                q.jsxs)(`div`, {
                    children: [(0,
                    q.jsxs)(`dt`, {
                        children: [(0,
                        q.jsx)(A, {
                            size: 13
                        }), ` Jami a’zolar`]
                    }), (0,
                    q.jsx)(`dd`, {
                        children: r(t.total)
                    })]
                })]
            }), (0,
            q.jsxs)(`div`, {
                className: $.memberHeader,
                children: [(0,
                q.jsx)(`span`, {
                    children: `HOZIR DISCORD’DA`
                }), (0,
                q.jsx)(`span`, {
                    className: $.liveDot,
                    "data-active": !t.loading && !i
                })]
            }), (0,
            q.jsx)(`div`, {
                className: $.memberArea,
                children: t.members.length > 0 ? (0,
                q.jsx)(`ul`, {
                    className: $.members,
                    children: t.members.map( (e, t) => (0,
                    q.jsxs)(`li`, {
                        children: [(0,
                        q.jsxs)(`span`, {
                            className: $.avatar,
                            children: [e.avatar ? (0,
                            q.jsx)(`picture`, {
                                children: (0,
                                q.jsx)(`img`, {
                                    src: e.avatar,
                                    width: 34,
                                    height: 34,
                                    alt: ``,
                                    loading: `lazy`,
                                    referrerPolicy: `no-referrer`
                                })
                            }) : (0,
                            q.jsx)(`span`, {
                                children: Array.from(e.name)[0]
                            }), (0,
                            q.jsx)(`i`, {
                                "data-status": e.status,
                                "aria-hidden": `true`
                            })]
                        }), (0,
                        q.jsxs)(`span`, {
                            className: $.memberName,
                            title: e.name,
                            children: [e.name, (0,
                            q.jsxs)(`span`, {
                                className: $.statusText,
                                children: [` `, `— `, zo[e.status]]
                            })]
                        })]
                    }, `${e.id}-${t}`))
                }) : (0,
                q.jsx)(`p`, {
                    className: $.empty,
                    children: t.loading ? `Discord ma’lumotlari yuklanmoqda…` : i ? `Hozir ma’lumotlarni olib bo‘lmadi. Discord’ga kirish mumkin.` : `A’zolar bilan Discord ichida tanish.`
                })
            }), (0,
            q.jsx)(`p`, {
                className: $.note,
                "aria-live": `polite`,
                children: t.loading ? `Server bilan bog‘lanmoqda` : i ? `Ma’lumot vaqtincha mavjud emas` : `Discord’ning ochiq ma’lumotlari · sonlar taxminiy`
            })]
        })]
    })
}
var Vo = `mc.minestax.uz`;
function Ho({children: e, className: t=``, ...n}) {
    return (0,
    q.jsx)(`button`, {
        ...n,
        className: `${Q.pushButton} ${t}`,
        children: (0,
        q.jsx)(`span`, {
            className: Q.pushContent,
            children: e
        })
    })
}
function Uo({children: e, className: t=``, ...n}) {
    return (0,
    q.jsx)(`a`, {
        ...n,
        className: `${Q.pushButton} ${t}`,
        children: (0,
        q.jsx)(`span`, {
            className: Q.pushContent,
            children: e
        })
    })
}
var Wo = [{
    id: `g-qJhbw7WhQ`,
    title: `Minestax rasmiy treyleri`,
    description: `Server bilan tanish.`,
    label: `Rasmiy treyler`
}, {
    id: `EjZ6fI1VITw`,
    title: `Minestax’ga qanday ulanaman?`,
    description: `Serverga kirish bo‘yicha video qo‘llanma.`,
    label: `Ulanish qo‘llanmasi`
}]
  , Go = [{
    text: `Minestaxning asosiy rejimi. Grief va PvP janglarida qatnash, bazangni himoya qil va raqiblaringga qarshi reja tuz.`,
    tags: [`Grief`, `PvP`, `Raqobat`]
}, {
    text: `Shaxtada resurs yig‘ib, jihozlaringni kuchaytir. Tayyor bo‘lgach, arenaga chiqib PvP janglarida qatnash.`,
    tags: [`Shaxta`, `Jihozlar`, `Arena`]
}, {
    text: `Fermangni yarat, uy qur va atrofni kashf et. Do‘stlaring bilan boshlagan qurilishingni katta bazaga aylantir.`,
    tags: [`Ferma`, `Qurilish`, `Sarguzasht`]
}]
  , Ko = [{
    id: `anarxiya`,
    name: `Anarxiya`,
    image: `anarxiya-nano-v1`,
    icon: k,
    label: `ASOSIY REJIM`,
    description: `Grief, PvP va kuchli raqobat. Bazangni qur. Jangga qo‘shil.`,
    alt: `Oq-oltin va qora-oltin zirhli Minestax jangchilari havoda qilich urishtirmoqda.`
}, {
    id: `boxpvp`,
    name: `BoxPvP`,
    image: `boxpvp-nano-v4`,
    icon: te,
    label: `ARENA`,
    description: `Resurs yig‘, jihozingni kuchaytir va arenada kuchingni sinab ko‘r.`,
    alt: `Olmos zirhli BoxPvP jangchisi qilich va oltin olma bilan ruda bloklari ustida.`
}, {
    id: `survival`,
    name: `Survival`,
    image: `survival-nano-v2`,
    icon: j,
    label: `O‘Z DUNYONG`,
    description: `Ferma qur, yangi yerlarni kashf qil. Do‘stlaring bilan birga o‘yna.`,
    alt: `Survival fermeri kichik bug‘doyzor va tovuq yonida hosil yig‘moqda.`
}];
function qo({onClick: e}) {
    return (0,
    q.jsxs)(`a`, {
        href: `#preview-top`,
        onClick: e,
        className: Q.brand,
        "aria-label": `Minestax — bosh sahifa`,
        children: [(0,
        q.jsx)(`picture`, {
            children: (0,
            q.jsx)(`img`, {
                className: Q.brandEmblem,
                src: `/art/brand/minestax-logo-96.webp`,
                srcSet: `/art/brand/minestax-logo-96.webp 96w, /art/brand/minestax-logo-192.webp 192w`,
                sizes: `44px`,
                alt: ``,
                width: 44,
                height: 43
            })
        }), (0,
        q.jsxs)(`span`, {
            children: [(0,
            q.jsx)(`span`, {
                children: `MINE`
            }), `STAX`]
        })]
    })
}
function Jo() {
    let[e,t] = (0,
    d.useState)(!1)
      , [n,r] = (0,
    d.useState)(!1)
      , [i,a] = (0,
    d.useState)(!1)
      , [o,s] = (0,
    d.useState)(``)
      , [c,l] = (0,
    d.useState)(!1)
      , [u,f] = (0,
    d.useState)(!1)
      , [p,m] = (0,
    d.useState)(!1)
      , [h,ee] = (0,
    d.useState)(!0)
      , [k,A] = (0,
    d.useState)(0)
      , [j,N] = (0,
    d.useState)(null)
      , [P,ne] = (0,
    d.useState)(!1)
      , [F,re] = (0,
    d.useState)(!1)
      , ie = (0,
    d.useRef)(null)
      , [I,L] = (0,
    d.useState)(`light`)
      , [R,ae] = (0,
    d.useState)({
        state: `loading`
    })
      , z = (0,
    d.useRef)(null)
      , B = (0,
    d.useRef)(null);
    (0,
    d.useEffect)( () => {
        let e = window.matchMedia(`(max-width: 800px)`)
          , t = () => re(e.matches);
        return t(),
        e.addEventListener(`change`, t),
        () => e.removeEventListener(`change`, t)
    }
    , []),
    (0,
    d.useEffect)( () => {
        let e = 0
          , t = () => {
            e = 0,
            a(window.scrollY > 80);
            let t = document.getElementById(`rejimlar`)
              , n = document.getElementById(`videolar`)
              , r = document.getElementById(`ulanish`)
              , i = document.getElementById(`discord`)
              , o = e => e !== null && e.getBoundingClientRect().top <= 160;
            s(o(r) ? `` : o(i) ? `discord` : o(n) ? `videolar` : o(t) ? `rejimlar` : ``)
        }
          , n = () => {
            e ||= requestAnimationFrame(t)
        }
        ;
        return window.addEventListener(`scroll`, n, {
            passive: !0
        }),
        window.addEventListener(`resize`, n),
        t(),
        () => {
            cancelAnimationFrame(e),
            window.removeEventListener(`scroll`, n),
            window.removeEventListener(`resize`, n)
        }
    }
    , []),
    (0,
    d.useEffect)( () => {
        if (!n)
            return;
        let e = e => {
            e.key === `Escape` && r(!1)
        }
        ;
        return document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
    }
    , [n]),
    (0,
    d.useEffect)( () => {
        let e = ie.current;
        if (!e)
            return;
        let t = !1
          , n = () => ne(t && !document.hidden)
          , r = new IntersectionObserver( ([e]) => {
            t = e.isIntersecting,
            n()
        }
        ,{
            threshold: .05
        });
        return r.observe(e),
        document.addEventListener(`visibilitychange`, n),
        () => {
            r.disconnect(),
            document.removeEventListener(`visibilitychange`, n)
        }
    }
    , []),
    (0,
    d.useEffect)( () => (document.documentElement.dataset.minestaxTheme = I,
    () => {
        delete document.documentElement.dataset.minestaxTheme
    }
    ), [I]),
    (0,
    d.useEffect)( () => {
        let e = !1
          , t = null
          , n = 0;
        async function r() {
            if (document.hidden || t || Date.now() - n < 6e4)
                return;
            n = Date.now();
            let r = new AbortController;
            t = r;
            let i = setTimeout( () => r.abort(), 1e4);
            try {
                let t = await fetch(`https://api.mcstatus.io/v2/status/java/${Vo}`, {
                    credentials: `omit`,
                    signal: r.signal
                });
                if (!t.ok)
                    throw Error(`Status service unavailable`);
                let n = await t.json();
                if (!n || typeof n != `object` || !(`online` in n))
                    throw Error(`Invalid status response`);
                if (e)
                    return;
                if (n.online === !1)
                    ae({
                        state: `offline`
                    });
                else if (n.online === !0 && `players` in n && n.players && typeof n.players == `object` && `online` in n.players && typeof n.players.online == `number` && Number.isSafeInteger(n.players.online) && n.players.online >= 0)
                    ae({
                        state: `online`,
                        players: n.players.online
                    });
                else
                    throw Error(`Player count unavailable`)
            } catch {
                e || ae({
                    state: `unavailable`
                })
            } finally {
                clearTimeout(i),
                t = null
            }
        }
        r();
        let i = setInterval( () => {
            r()
        }
        , 65e3)
          , a = () => {
            document.hidden || r()
        }
        ;
        return document.addEventListener(`visibilitychange`, a),
        () => {
            e = !0,
            t?.abort(),
            clearInterval(i),
            document.removeEventListener(`visibilitychange`, a)
        }
    }
    , []);
    function oe() {
        L(e => e === `dark` ? `light` : `dark`)
    }
    (0,
    d.useEffect)( () => (document.documentElement.classList.add(`minestax-preview-active`),
    document.body.classList.add(`minestax-preview-active`),
    () => {
        document.documentElement.classList.remove(`minestax-preview-active`),
        document.body.classList.remove(`minestax-preview-active`),
        B.current && clearTimeout(B.current)
    }
    ), []),
    (0,
    d.useEffect)( () => {
        let e = window.matchMedia(`(prefers-reduced-motion: reduce)`)
          , t = () => ee(!e.matches);
        return t(),
        e.addEventListener(`change`, t),
        () => e.removeEventListener(`change`, t)
    }
    , []),
    (0,
    d.useEffect)( () => {
        let e = z.current;
        if (!e)
            return;
        let t = [...e.querySelectorAll(`[data-story-mode]`)]
          , n = 0
          , r = () => {
            if (n = 0,
            document.hidden)
                return;
            let r = e.getBoundingClientRect();
            if (r.top > innerHeight || r.bottom < 0)
                return;
            let i = 0
              , a = 1 / 0;
            for (let[e,n] of t.entries()) {
                let t = n.getBoundingClientRect()
                  , r = Math.abs(t.top + t.height / 2 - innerHeight * .52);
                r < a && (i = e,
                a = r)
            }
            A(e => e === i ? e : i);
            let o = t[i].getBoundingClientRect()
              , s = Math.max(0, Math.min(1, (innerHeight * .52 - o.top) / o.height));
            e.style.setProperty(`--scene-y`, `${h && innerWidth > 800 ? (s - .5) * -38 : 0}px`)
        }
          , i = () => {
            n ||= requestAnimationFrame(r)
        }
        ;
        return window.addEventListener(`scroll`, i, {
            passive: !0
        }),
        window.addEventListener(`resize`, i),
        document.addEventListener(`visibilitychange`, i),
        document.fonts.ready.then(i),
        r(),
        () => {
            cancelAnimationFrame(n),
            window.removeEventListener(`scroll`, i),
            window.removeEventListener(`resize`, i),
            document.removeEventListener(`visibilitychange`, i)
        }
    }
    , [h]);
    async function V() {
        try {
            await navigator.clipboard.writeText(Vo),
            l(!0),
            f(!1),
            B.current && clearTimeout(B.current),
            B.current = setTimeout( () => l(!1), 2400)
        } catch {
            f(!0)
        }
    }
    return (0,
    q.jsxs)(`div`, {
        className: Q.page,
        id: `preview-top`,
        "data-theme": I,
        children: [(0,
        q.jsx)(`a`, {
            className: Q.skip,
            href: `#hero-join`,
            children: `Ulanish tugmasiga o‘tish`
        }), (0,
        q.jsx)(`div`, {
            className: Q.headerDock,
            children: (0,
            q.jsxs)(`header`, {
                className: Q.header,
                "data-compact": i,
                children: [(0,
                q.jsx)(qo, {
                    onClick: () => r(!1)
                }), (0,
                q.jsxs)(`nav`, {
                    className: `${Q.nav} ${n ? Q.navOpen : ``}`,
                    "aria-label": `Asosiy menyu`,
                    id: `preview-navigation`,
                    children: [(0,
                    q.jsxs)(`a`, {
                        href: `#rejimlar`,
                        "aria-current": o === `rejimlar` ? `location` : void 0,
                        onClick: () => r(!1),
                        children: [`Rejimlar `, (0,
                        q.jsx)(g, {
                            size: 15
                        })]
                    }), (0,
                    q.jsxs)(`a`, {
                        href: `#videolar`,
                        "aria-current": o === `videolar` ? `location` : void 0,
                        onClick: () => r(!1),
                        children: [`Videolar `, (0,
                        q.jsx)(E, {
                            size: 15
                        })]
                    }), (0,
                    q.jsxs)(`a`, {
                        href: `https://bans.minestax.uz`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: [`Jazolar `, (0,
                        q.jsx)(v, {
                            size: 15
                        })]
                    }), (0,
                    q.jsxs)(`a`, {
                        href: `#discord`,
                        "aria-current": o === `discord` ? `location` : void 0,
                        onClick: () => r(!1),
                        children: [`Discord `, (0,
                        q.jsx)(w, {
                            size: 15
                        })]
                    }), (0,
                    q.jsxs)(`a`, {
                        className: Q.shopLink,
                        href: `https://t.me/minestaxbot`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        onClick: () => r(!1),
                        children: [`Do‘kon `, (0,
                        q.jsx)(D, {
                            size: 16
                        })]
                    })]
                }), (0,
                q.jsx)(`button`, {
                    className: Q.themeToggle,
                    onClick: oe,
                    "aria-label": I === `light` ? `Tungi rejimni yoqish` : `Kunduzgi rejimni yoqish`,
                    title: I === `light` ? `Tungi rejim` : `Kunduzgi rejim`,
                    children: I === `light` ? (0,
                    q.jsx)(T, {
                        size: 19
                    }) : (0,
                    q.jsx)(O, {
                        size: 19
                    })
                }), (0,
                q.jsxs)(Uo, {
                    className: Q.headerChannel,
                    href: `https://www.youtube.com/@minestaxuz`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    "aria-label": `Minestax YouTube kanali`,
                    children: [(0,
                    q.jsx)(E, {
                        size: 18
                    }), (0,
                    q.jsx)(`span`, {
                        className: Q.headerChannelLabel,
                        children: `YouTube`
                    })]
                }), (0,
                q.jsx)(Ho, {
                    className: Q.menuToggle,
                    "aria-controls": `preview-navigation`,
                    "aria-expanded": n,
                    "aria-label": n ? `Menyuni yopish` : `Menyuni ochish`,
                    onClick: () => r(!n),
                    children: n ? (0,
                    q.jsx)(M, {
                        size: 22
                    }) : (0,
                    q.jsx)(C, {
                        size: 22
                    })
                })]
            })
        }), (0,
        q.jsxs)(`main`, {
            children: [(0,
            q.jsxs)(`section`, {
                className: Q.poster,
                ref: ie,
                "aria-labelledby": `welcome-heading`,
                children: [(0,
                q.jsxs)(`div`, {
                    className: Q.trailerBackdrop,
                    "aria-hidden": `true`,
                    children: [P && (0,
                    q.jsx)(`video`, {
                        src: F ? `/media/minestax-trailer-480p30.mp4` : `/media/minestax-trailer-720p30.mp4`,
                        poster: `/media/minestax-trailer-poster.webp`,
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        preload: `none`,
                        tabIndex: -1
                    }), (0,
                    q.jsx)(`div`, {
                        className: Q.trailerShade
                    })]
                }), (0,
                q.jsxs)(`div`, {
                    className: Q.entryLayout,
                    children: [(0,
                    q.jsxs)(`div`, {
                        className: Q.welcomeBanner,
                        children: [(0,
                        q.jsx)(`div`, {
                            className: Q.heroLogo,
                            children: (0,
                            q.jsx)(`picture`, {
                                children: (0,
                                q.jsx)(`img`, {
                                    src: `/art/brand/minestax-logo-512-q88.webp`,
                                    srcSet: `/art/brand/minestax-logo-512-q88.webp 512w, /art/brand/minestax-logo-842-q88.webp 842w`,
                                    sizes: `(max-width: 720px) 140px, (max-width: 1100px) 264px, 308px`,
                                    alt: `Minestaxning oltin tojli M logosi`,
                                    width: 842,
                                    height: 820,
                                    loading: `eager`,
                                    fetchPriority: `high`,
                                    decoding: `async`
                                })
                            })
                        }), (0,
                        q.jsxs)(`h1`, {
                            id: `welcome-heading`,
                            children: [`O‘zbek Minecraft`, (0,
                            q.jsx)(`br`, {}), `serveri. O‘yin seniki!`]
                        }), (0,
                        q.jsx)(Ho, {
                            className: `${Q.primary} ${Q.bannerJoin}`,
                            onClick: () => t(!0),
                            id: `hero-join`,
                            children: `O‘yinga kirish`
                        })]
                    }), (0,
                    q.jsxs)(`div`, {
                        className: Q.entryDetails,
                        children: [(0,
                        q.jsxs)(`button`, {
                            className: `${Q.copyAddress} ${Q.entryIP}`,
                            onClick: V,
                            "aria-label": `${Vo} server manzilini nusxalash`,
                            children: [(0,
                            q.jsx)(`span`, {
                                children: Vo
                            }), c ? (0,
                            q.jsx)(y, {
                                size: 19
                            }) : (0,
                            q.jsx)(b, {
                                size: 19
                            })]
                        }), (0,
                        q.jsxs)(`output`, {
                            className: Q.onlineStatus,
                            "data-state": R.state,
                            "aria-live": `polite`,
                            title: `Server holati taxminan har daqiqada yangilanadi.`,
                            children: [(0,
                            q.jsx)(`span`, {
                                className: Q.statusDot
                            }), R.state === `online` ? (0,
                            q.jsxs)(`span`, {
                                children: [(0,
                                q.jsx)(`strong`, {
                                    children: R.players
                                }), ` onlayn`]
                            }) : (0,
                            q.jsx)(`span`, {
                                children: R.state === `loading` ? `Tekshirilmoqda` : R.state === `offline` ? `Javob yo‘q` : `Holat noma’lum`
                            })]
                        })]
                    })]
                })]
            }), (0,
            q.jsxs)(`section`, {
                className: Q.modeSelector,
                id: `rejimlar`,
                "aria-labelledby": `mode-selector-title`,
                children: [(0,
                q.jsxs)(`div`, {
                    className: Q.selectorIntro,
                    children: [(0,
                    q.jsx)(`span`, {
                        className: Q.sectionMarker,
                        children: (0,
                        q.jsx)(S, {
                            size: 22
                        })
                    }), (0,
                    q.jsxs)(`div`, {
                        children: [(0,
                        q.jsx)(`h2`, {
                            id: `mode-selector-title`,
                            children: `Qaysi rejim seniki?`
                        }), (0,
                        q.jsx)(`p`, {
                            children: `Minestax — o‘zbek o‘yinchilari uchun Minecraft Java serveri. Anarxiya, BoxPvP yoki Survival: o‘zingga mos rejimni tanla.`
                        })]
                    })]
                }), (0,
                q.jsx)(`div`, {
                    className: Q.modeButtons,
                    "aria-label": `Rejimni ko‘rish`,
                    children: Ko.map( (e, t) => {
                        let n = e.icon;
                        return (0,
                        q.jsxs)(`a`, {
                            className: Q.modeButton,
                            "aria-current": k === t ? `step` : void 0,
                            href: `#mode-${e.id}`,
                            children: [(0,
                            q.jsx)(n, {
                                size: 21
                            }), (0,
                            q.jsx)(`span`, {
                                children: e.name
                            }), (0,
                            q.jsx)(v, {
                                className: Q.modeArrow,
                                size: 16
                            })]
                        }, e.id)
                    }
                    )
                })]
            }), (0,
            q.jsx)(`section`, {
                className: Q.modeJourney,
                ref: z,
                "aria-label": `Rejimlar haqida`,
                "data-current-mode": Ko[k].id,
                children: (0,
                q.jsxs)(`div`, {
                    className: Q.journeyLayout,
                    children: [(0,
                    q.jsx)(`div`, {
                        className: Q.journeyChapters,
                        children: Ko.map( (e, n) => {
                            let r = e.icon;
                            return (0,
                            q.jsxs)(`article`, {
                                className: Q.journeyChapter,
                                "data-story-mode": e.id,
                                id: `mode-${e.id}`,
                                children: [(0,
                                q.jsxs)(`div`, {
                                    className: Q.chapterText,
                                    children: [(0,
                                    q.jsx)(`span`, {
                                        className: Q.chapterIcon,
                                        children: (0,
                                        q.jsx)(r, {
                                            size: 27
                                        })
                                    }), n === 0 && (0,
                                    q.jsx)(`p`, {
                                        className: Q.mainModeLabel,
                                        children: `Minestaxning asosiy rejimi`
                                    }), (0,
                                    q.jsxs)(`h2`, {
                                        children: [e.name, (0,
                                        q.jsx)(`span`, {
                                            children: `.`
                                        })]
                                    }), (0,
                                    q.jsx)(`p`, {
                                        className: Q.chapterDescription,
                                        children: Go[n].text
                                    }), (0,
                                    q.jsx)(`ul`, {
                                        className: Q.modeTags,
                                        children: Go[n].tags.map(e => (0,
                                        q.jsx)(`li`, {
                                            children: e
                                        }, e))
                                    }), (0,
                                    q.jsxs)(Ho, {
                                        className: `${Q.primary} ${Q.chapterJoin}`,
                                        onClick: () => t(!0),
                                        children: [`O‘yinga kirish`, (0,
                                        q.jsx)(_, {
                                            size: 21
                                        })]
                                    })]
                                }), (0,
                                q.jsx)(`picture`, {
                                    className: `${Q.mobileChapterArt} ${e.id === `boxpvp` ? Q.boxPvpArt : ``}`,
                                    children: (0,
                                    q.jsx)(`img`, {
                                        src: `/art/approved/${e.image}-900.webp`,
                                        width: 900,
                                        height: 604,
                                        alt: e.alt,
                                        loading: `lazy`,
                                        decoding: `async`
                                    })
                                })]
                            }, e.id)
                        }
                        )
                    }), (0,
                    q.jsxs)(`div`, {
                        className: Q.journeyVisual,
                        children: [(0,
                        q.jsx)(`div`, {
                            className: Q.journeyFigure,
                            children: Ko.map( (e, t) => (0,
                            q.jsx)(`picture`, {
                                className: `${Q.journeyImage} ${e.id === `boxpvp` ? Q.boxPvpArt : ``}`,
                                "data-visible": k === t,
                                children: (0,
                                q.jsx)(`img`, {
                                    src: `/art/approved/${e.image}-1600.webp`,
                                    srcSet: `/art/approved/${e.image}-900.webp 900w, /art/approved/${e.image}-1600.webp 1600w`,
                                    sizes: `(max-width:1100px) 55vw, 720px`,
                                    alt: k === t ? e.alt : ``,
                                    width: 1600,
                                    height: 1073,
                                    loading: `lazy`,
                                    decoding: `async`
                                })
                            }, e.id))
                        }), (0,
                        q.jsx)(`div`, {
                            className: Q.journeyStops,
                            "aria-label": `Rejim bo‘limiga o‘tish`,
                            children: Ko.map( (e, t) => {
                                let n = e.icon;
                                return (0,
                                q.jsxs)(Uo, {
                                    href: `#mode-${e.id}`,
                                    "aria-label": e.name,
                                    "aria-current": k === t ? `step` : void 0,
                                    children: [(0,
                                    q.jsx)(n, {
                                        size: 18
                                    }), (0,
                                    q.jsx)(`span`, {
                                        children: e.name
                                    })]
                                }, e.id)
                            }
                            )
                        })]
                    })]
                })
            }), (0,
            q.jsxs)(`section`, {
                className: Q.videosSection,
                id: `videolar`,
                "aria-labelledby": `videos-heading`,
                children: [(0,
                q.jsxs)(`div`, {
                    className: Q.sectionHeading,
                    children: [(0,
                    q.jsxs)(`div`, {
                        children: [(0,
                        q.jsx)(`span`, {
                            className: Q.sectionMarker,
                            children: (0,
                            q.jsx)(E, {
                                size: 23
                            })
                        }), (0,
                        q.jsxs)(`h2`, {
                            id: `videos-heading`,
                            children: [`Minestaxni`, (0,
                            q.jsx)(`br`, {}), `videoda ko‘r.`]
                        })]
                    }), (0,
                    q.jsxs)(Uo, {
                        className: Q.channelLink,
                        href: `https://www.youtube.com/@minestaxuz`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: [`@minestaxuz`, (0,
                        q.jsx)(v, {
                            size: 19
                        })]
                    })]
                }), (0,
                q.jsx)(`div`, {
                    className: Q.videoGrid,
                    children: Wo.map(e => (0,
                    q.jsxs)(`article`, {
                        className: Q.videoArticle,
                        children: [(0,
                        q.jsxs)(Ho, {
                            className: Q.videoButton,
                            onClick: () => N(e),
                            "aria-label": `${e.title} — videoni ochish`,
                            children: [(0,
                            q.jsx)(`picture`, {
                                children: (0,
                                q.jsx)(`img`, {
                                    src: `https://i.ytimg.com/vi/${e.id}/hqdefault.jpg`,
                                    alt: ``,
                                    width: 480,
                                    height: 360,
                                    loading: `lazy`
                                })
                            }), (0,
                            q.jsx)(`span`, {
                                className: Q.videoPlay,
                                children: (0,
                                q.jsx)(E, {
                                    size: 28,
                                    fill: `currentColor`
                                })
                            }), (0,
                            q.jsx)(`span`, {
                                className: Q.videoType,
                                children: e.label
                            })]
                        }), (0,
                        q.jsx)(`h3`, {
                            children: e.title
                        }), (0,
                        q.jsx)(`p`, {
                            children: e.description
                        })]
                    }, e.id))
                })]
            }), (0,
            q.jsx)(Bo, {}), (0,
            q.jsxs)(`section`, {
                className: Q.joinSection,
                id: `ulanish`,
                "aria-labelledby": `join-heading`,
                children: [(0,
                q.jsxs)(`div`, {
                    className: Q.joinSectionCopy,
                    children: [(0,
                    q.jsx)(S, {
                        size: 34
                    }), (0,
                    q.jsx)(`h2`, {
                        id: `join-heading`,
                        children: `Serverga qo‘shil.`
                    }), (0,
                    q.jsx)(`p`, {
                        children: `Minecraft Java Edition orqali o‘yna.`
                    }), (0,
                    q.jsxs)(`button`, {
                        className: Q.largeIP,
                        onClick: V,
                        "aria-label": `${Vo} manzilini nusxalash`,
                        children: [(0,
                        q.jsx)(`span`, {
                            children: Vo
                        }), c ? (0,
                        q.jsx)(y, {
                            size: 24
                        }) : (0,
                        q.jsx)(b, {
                            size: 24
                        })]
                    }), (0,
                    q.jsx)(`output`, {
                        className: Q.joinHelp,
                        children: c ? `Manzil nusxalandi!` : u ? `Qo‘lda nusxala: ${Vo}` : `Manzil ustiga bosib nusxala.`
                    })]
                }), (0,
                q.jsxs)(`ol`, {
                    className: Q.connectionSteps,
                    children: [(0,
                    q.jsxs)(`li`, {
                        children: [(0,
                        q.jsx)(`span`, {
                            children: `1`
                        }), (0,
                        q.jsxs)(`div`, {
                            children: [(0,
                            q.jsx)(`h3`, {
                                children: `Minecraft’ni och`
                            }), (0,
                            q.jsxs)(`p`, {
                                children: [`Java Edition’da `, (0,
                                q.jsx)(`strong`, {
                                    children: `Multiplayer`
                                }), ` bo‘limiga kir.`]
                            })]
                        })]
                    }), (0,
                    q.jsxs)(`li`, {
                        children: [(0,
                        q.jsx)(`span`, {
                            children: `2`
                        }), (0,
                        q.jsxs)(`div`, {
                            children: [(0,
                            q.jsx)(`h3`, {
                                children: `Serverni qo‘sh`
                            }), (0,
                            q.jsxs)(`p`, {
                                children: [(0,
                                q.jsx)(`strong`, {
                                    children: `Add Server → Server Address`
                                }), ` maydoniga`, ` `, (0,
                                q.jsx)(`strong`, {
                                    children: Vo
                                }), ` yoz.`]
                            })]
                        })]
                    }), (0,
                    q.jsxs)(`li`, {
                        children: [(0,
                        q.jsx)(`span`, {
                            children: `3`
                        }), (0,
                        q.jsxs)(`div`, {
                            children: [(0,
                            q.jsx)(`h3`, {
                                children: `O‘yinga kir`
                            }), (0,
                            q.jsxs)(`p`, {
                                children: [(0,
                                q.jsx)(`strong`, {
                                    children: `Done → Join Server`
                                }), ` tugmalarini bos va rejimingni tanla.`]
                            })]
                        })]
                    })]
                })]
            }), (0,
            q.jsxs)(`section`, {
                className: Q.faqSection,
                "aria-labelledby": `faq-heading`,
                id: `savollar`,
                children: [(0,
                q.jsxs)(`div`, {
                    className: Q.faqIntro,
                    children: [(0,
                    q.jsx)(`span`, {
                        className: Q.eyebrow,
                        children: `O‘YINDAN OLDIN`
                    }), (0,
                    q.jsx)(`h2`, {
                        id: `faq-heading`,
                        children: `Savoling bormi?`
                    }), (0,
                    q.jsx)(`p`, {
                        children: `Server manzili, rejimlar va ulanish haqida.`
                    })]
                }), (0,
                q.jsxs)(`div`, {
                    className: Q.faqList,
                    children: [(0,
                    q.jsxs)(`details`, {
                        children: [(0,
                        q.jsx)(`summary`, {
                            children: `Minestax qanday Minecraft serveri?`
                        }), (0,
                        q.jsx)(`p`, {
                            children: `Minestax — o‘zbekcha Minecraft o‘ynashni istaganlar uchun Java Edition serveri. Asosiy rejim Anarxiya: grief, PvP va raqobat. BoxPvP hamda Survival rejimlarida ham o‘ynash mumkin.`
                        })]
                    }), (0,
                    q.jsxs)(`details`, {
                        children: [(0,
                        q.jsx)(`summary`, {
                            children: `Minestax serverining IP manzili qanday?`
                        }), (0,
                        q.jsxs)(`p`, {
                            children: [`Server manzili — `, (0,
                            q.jsx)(`strong`, {
                                children: `mc.minestax.uz`
                            }), `. Minecraft Java Edition’da Multiplayer → Add Server bo‘limini ochib, Server Address maydoniga shu manzilni yoz.`, ` `, (0,
                            q.jsx)(`a`, {
                                href: `#ulanish`,
                                children: `Ulanish bosqichlarini ko‘r.`
                            })]
                        })]
                    }), (0,
                    q.jsxs)(`details`, {
                        children: [(0,
                        q.jsx)(`summary`, {
                            children: `Anarxiya, BoxPvP va Survival nimasi bilan farq qiladi?`
                        }), (0,
                        q.jsxs)(`p`, {
                            children: [`Anarxiyada baza qurish, grief va PvP janglari asosiy o‘rinda. BoxPvP’da shaxtadan resurs yig‘ib, jihozlaringni kuchaytirasan va arenada jang qilasan. Survival’da esa uy, ferma va do‘stlaring bilan qurilishlar yaratishing mumkin.`, ` `, (0,
                            q.jsx)(`a`, {
                                href: `#rejimlar`,
                                children: `Rejimlar bilan tanish.`
                            })]
                        })]
                    }), (0,
                    q.jsxs)(`details`, {
                        children: [(0,
                        q.jsx)(`summary`, {
                            children: `Serverga kirish bo‘yicha video bormi?`
                        }), (0,
                        q.jsxs)(`p`, {
                            children: [`Ha, rasmiy`, ` `, (0,
                            q.jsx)(`a`, {
                                href: `https://www.youtube.com/watch?v=EjZ6fI1VITw`,
                                target: `_blank`,
                                rel: `noreferrer`,
                                children: `ulanish video qo‘llanmasida`
                            }), ` `, `serverni qo‘shish va o‘yinga kirish ko‘rsatilgan.`]
                        })]
                    }), (0,
                    q.jsxs)(`details`, {
                        children: [(0,
                        q.jsx)(`summary`, {
                            children: `Donat do‘koni va jazolar tarixini qayerdan topaman?`
                        }), (0,
                        q.jsxs)(`p`, {
                            children: [`Rasmiy do‘kon`, ` `, (0,
                            q.jsx)(`a`, {
                                href: `https://t.me/minestaxbot`,
                                target: `_blank`,
                                rel: `noreferrer`,
                                children: `@minestaxbot`
                            }), ` `, `orqali ishlaydi. Jazolar tarixini`, ` `, (0,
                            q.jsx)(`a`, {
                                href: `https://bans.minestax.uz`,
                                target: `_blank`,
                                rel: `noreferrer`,
                                children: `bans.minestax.uz`
                            }), ` `, `saytida tekshirishing mumkin.`]
                        })]
                    })]
                })]
            }), (0,
            q.jsxs)(`section`, {
                className: Q.moderation,
                "aria-labelledby": `punishment-heading`,
                children: [(0,
                q.jsx)(`div`, {
                    className: Q.moderationIcon,
                    children: (0,
                    q.jsx)(te, {
                        size: 30
                    })
                }), (0,
                q.jsxs)(`div`, {
                    children: [(0,
                    q.jsx)(`h2`, {
                        id: `punishment-heading`,
                        children: `Jazolar tarixi`
                    }), (0,
                    q.jsx)(`p`, {
                        children: `Faol cheklovlar va jazo tarixini rasmiy sahifada tekshir.`
                    })]
                }), (0,
                q.jsxs)(Uo, {
                    className: Q.moderationLink,
                    href: `https://bans.minestax.uz`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [`Jazolarni ko‘rish`, (0,
                    q.jsx)(v, {
                        size: 19
                    })]
                })]
            })]
        }), (0,
        q.jsxs)(`footer`, {
            className: Q.footer,
            children: [(0,
            q.jsxs)(`div`, {
                className: Q.footerIdentity,
                children: [(0,
                q.jsx)(`picture`, {
                    children: (0,
                    q.jsx)(`img`, {
                        src: `/art/brand/minestax-logo-96.webp`,
                        width: 52,
                        height: 50,
                        alt: ``,
                        loading: `lazy`
                    })
                }), (0,
                q.jsxs)(`div`, {
                    children: [(0,
                    q.jsxs)(`strong`, {
                        children: [`MINESTAX `, (0,
                        q.jsx)(`span`, {
                            children: `MCHJ`
                        })]
                    }), (0,
                    q.jsx)(`p`, {
                        children: `Anarxiya • BoxPvP • Survival`
                    })]
                })]
            }), (0,
            q.jsxs)(`div`, {
                className: Q.footerLinks,
                children: [(0,
                q.jsxs)(`a`, {
                    href: `https://discord.minestax.uz`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [(0,
                    q.jsx)(w, {
                        size: 15
                    }), ` Discord `, (0,
                    q.jsx)(v, {
                        size: 15
                    })]
                }), (0,
                q.jsxs)(`a`, {
                    href: `https://drive.google.com/file/d/1LIplAwyy5IOYdkWWP_X8WRagHNiyWKSH/view`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [(0,
                    q.jsx)(x, {
                        size: 15
                    }), ` Ommaviy oferta `, (0,
                    q.jsx)(v, {
                        size: 15
                    })]
                }), (0,
                q.jsxs)(`a`, {
                    href: `https://www.youtube.com/@minestaxuz`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [(0,
                    q.jsx)(E, {
                        size: 15
                    }), ` O‘yinlardan lavhalar `, (0,
                    q.jsx)(v, {
                        size: 15
                    })]
                })]
            }), (0,
            q.jsx)(`p`, {
                className: Q.footerLegal,
                children: `Minestax Mojang yoki Microsoft bilan bog‘liq bo‘lmagan mustaqil loyihadir.`
            })]
        }), (0,
        q.jsx)(`output`, {
            className: Q.liveStatus,
            "aria-live": `polite`,
            children: u ? `Nusxalash imkoni bo‘lmadi. Manzilni qo‘lda kiriting: ${Vo}` : c ? `Server manzili nusxalandi.` : ``
        }), (0,
        q.jsx)(To, {
            open: e,
            onOpenChange: t,
            children: (0,
            q.jsxs)(ko, {
                className: Q.joinDialog,
                showCloseButton: !1,
                "data-theme": I,
                children: [(0,
                q.jsx)(Do, {
                    className: Q.dialogClose,
                    "aria-label": `Yopish`,
                    children: (0,
                    q.jsx)(M, {
                        size: 22
                    })
                }), (0,
                q.jsx)(`span`, {
                    className: Q.dialogIcon,
                    children: (0,
                    q.jsx)(S, {
                        size: 30
                    })
                }), (0,
                q.jsx)(Ao, {
                    className: Q.dialogTitle,
                    children: `O‘yinda ko‘rishamiz!`
                }), (0,
                q.jsx)(jo, {
                    className: Q.dialogDescription,
                    children: `Minecraft Java Edition orqali Minestax’ga ulan.`
                }), (0,
                q.jsxs)(`div`, {
                    className: Q.dialogIP,
                    children: [(0,
                    q.jsxs)(`div`, {
                        className: Q.dialogAddressText,
                        children: [(0,
                        q.jsx)(`span`, {
                            className: Q.addressLabel,
                            children: `Server manzili`
                        }), (0,
                        q.jsxs)(`span`, {
                            className: Q.addressValue,
                            children: [(0,
                            q.jsx)(`span`, {
                                children: `mc.`
                            }), `minestax`, (0,
                            q.jsx)(`span`, {
                                children: `.uz`
                            })]
                        })]
                    }), (0,
                    q.jsx)(Ho, {
                        className: Q.dialogCopy,
                        onClick: V,
                        "aria-label": `${Vo} manzilini nusxalash`,
                        title: `Manzilni nusxalash`,
                        children: c ? (0,
                        q.jsx)(y, {
                            size: 22
                        }) : (0,
                        q.jsx)(b, {
                            size: 22
                        })
                    })]
                }), (0,
                q.jsx)(`output`, {
                    className: Q.dialogStatus,
                    children: u ? `Qo‘lda nusxala: ${Vo}` : c ? `Nusxalandi. Endi Minecraft’ga o‘t!` : `Yonidagi belgi orqali manzilni nusxala.`
                }), (0,
                q.jsxs)(Ho, {
                    className: Q.stepsToggle,
                    onClick: () => m(!p),
                    "aria-expanded": p,
                    "aria-controls": `connection-steps`,
                    children: [`Qanday ulanaman?`, (0,
                    q.jsx)(g, {
                        size: 17
                    })]
                }), p && (0,
                q.jsxs)(`ol`, {
                    className: Q.steps,
                    id: `connection-steps`,
                    children: [(0,
                    q.jsx)(`li`, {
                        children: `Minecraft Java Edition’ni och.`
                    }), (0,
                    q.jsxs)(`li`, {
                        children: [(0,
                        q.jsx)(`strong`, {
                            children: `Multiplayer → Add Server`
                        }), ` bo‘limiga kir.`]
                    }), (0,
                    q.jsxs)(`li`, {
                        children: [(0,
                        q.jsx)(`strong`, {
                            children: `Server Address`
                        }), ` maydoniga `, (0,
                        q.jsx)(`strong`, {
                            children: Vo
                        }), ` `, `ni yoz.`]
                    }), (0,
                    q.jsxs)(`li`, {
                        children: [(0,
                        q.jsx)(`strong`, {
                            children: `Done → Join Server.`
                        }), ` Rejimingni tanla.`]
                    })]
                }), (0,
                q.jsxs)(`a`, {
                    className: Q.guide,
                    href: `https://www.youtube.com/watch?v=EjZ6fI1VITw`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [(0,
                    q.jsx)(E, {
                        size: 17
                    }), ` Video qo‘llanma`, (0,
                    q.jsx)(v, {
                        size: 16
                    })]
                })]
            })
        }), (0,
        q.jsx)(To, {
            open: j !== null,
            onOpenChange: e => {
                e || N(null)
            }
            ,
            children: (0,
            q.jsxs)(ko, {
                className: `${Q.joinDialog} ${Q.videoDialog}`,
                "data-theme": I,
                showCloseButton: !1,
                children: [(0,
                q.jsx)(Do, {
                    className: Q.dialogClose,
                    "aria-label": `Videoni yopish`,
                    children: (0,
                    q.jsx)(M, {
                        size: 22
                    })
                }), (0,
                q.jsx)(Ao, {
                    className: Q.videoDialogTitle,
                    children: j?.title ?? `Minestax videosi`
                }), (0,
                q.jsx)(jo, {
                    className: Q.videoDialogDescription,
                    children: `Minestax rasmiy YouTube kanali.`
                }), j && (0,
                q.jsx)(`iframe`, {
                    src: `https://www.youtube-nocookie.com/embed/${j.id}?autoplay=1&rel=0`,
                    title: j.title,
                    allow: `autoplay; encrypted-media; picture-in-picture`,
                    allowFullScreen: !0
                }), (0,
                q.jsxs)(`a`, {
                    className: Q.videoFallback,
                    href: `https://www.youtube.com/watch?v=${j?.id ?? Wo[0].id}`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [`YouTube’da ochish`, (0,
                    q.jsx)(v, {
                        size: 17
                    })]
                })]
            })
        })]
    })
}
export {Jo as default};
