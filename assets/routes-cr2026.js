const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/leaflet-src-N2Z2ANU4.js",
      "assets/rolldown-runtime-CbXtAM7H.js",
      "assets/leaflet-vh-t_kPv.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, t } from "./rolldown-runtime-CbXtAM7H.js";
import {
  a as n,
  c as r,
  i,
  l as a,
  n as o,
  o as s,
  r as c,
  s as l,
  t as u,
} from "./index-cr2026.js";
function d(e) {
  if (Array.isArray(e)) return e.flatMap((e) => d(e));
  if (typeof e != `string`) return [];
  let t = [],
    n = 0,
    r,
    i,
    a,
    o,
    s,
    c = () => {
      for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
      return n < e.length;
    },
    l = () => ((i = e.charAt(n)), i !== `=` && i !== `;` && i !== `,`);
  for (; n < e.length;) {
    for (r = n, s = !1; c();)
      if (((i = e.charAt(n)), i === `,`)) {
        for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
        n < e.length && e.charAt(n) === `=`
          ? ((s = !0), (n = o), t.push(e.slice(r, a)), (r = n))
          : (n = a + 1);
      } else n += 1;
    (!s || n >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function f(e) {
  return e instanceof Headers
    ? e
    : Array.isArray(e) || typeof e == `object`
      ? new Headers(e)
      : null;
}
function p(...e) {
  return e.reduce((e, t) => {
    let n = f(t);
    if (!n) return e;
    for (let [t, r] of n.entries())
      t === `set-cookie`
        ? d(r).forEach((t) => e.append(`set-cookie`, t))
        : e.set(t, r);
    return e;
  }, new Headers());
}
var m = o(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  h = o(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  g = o(`external-link`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
    [
      `path`,
      {
        d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
        key: `a6xqqp`,
      },
    ],
  ]),
  _ = o(`file-down`, [
    [
      `path`,
      {
        d: `M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,
        key: `1rqfz7`,
      },
    ],
    [`path`, { d: `M14 2v4a2 2 0 0 0 2 2h4`, key: `tnqrlb` }],
    [`path`, { d: `M12 18v-6`, key: `17g6i2` }],
    [`path`, { d: `m9 15 3 3 3-3`, key: `1npd3o` }],
  ]),
  v = o(`map-pin`, [
    [
      `path`,
      {
        d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
        key: `1r0f0z`,
      },
    ],
    [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
  ]),
  y = o(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  b = o(`printer`, [
    [
      `path`,
      {
        d: `M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,
        key: `143wyd`,
      },
    ],
    [`path`, { d: `M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`, key: `1itne7` }],
    [
      `rect`,
      { x: `6`, y: `14`, width: `12`, height: `8`, rx: `1`, key: `1ue0tg` },
    ],
  ]),
  x = o(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  S = o(`trash-2`, [
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6`, key: `4alrt4` }],
    [`path`, { d: `M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2`, key: `v07s0e` }],
    [`line`, { x1: `10`, x2: `10`, y1: `11`, y2: `17`, key: `1uufr5` }],
    [`line`, { x1: `14`, x2: `14`, y1: `11`, y2: `17`, key: `xtxkd` }],
  ]),
  C = e(a(), 1),
  w = [
    {
      id: `5a`,
      label: `5a Commercial`,
      loa: 0.25,
      note: `Ordinance level 25%`,
    },
    {
      id: `5b`,
      label: `5b Industrial`,
      loa: 0.25,
      note: `Ordinance level 25%`,
    },
    {
      id: `3`,
      label: `3 Apartment, 7+ units`,
      loa: 0.1,
      note: `Ordinance level 10%`,
    },
    {
      id: `2`,
      label: `2 Residential, 6 or fewer`,
      loa: 0.1,
      note: `Ordinance level 10%`,
    },
    { id: `1`, label: `1 Vacant land`, loa: 0.1, note: `Ordinance level 10%` },
    {
      id: `4`,
      label: `4 Not-for-profit`,
      loa: 0.2,
      note: `Ordinance level 20% since 2018`,
    },
    {
      id: `inc10`,
      label: `Incentive at 10%`,
      loa: 0.1,
      note: `6b years 1–10, and 7 / 8 / 9 / C while the term holds`,
    },
    {
      id: `inc15`,
      label: `6b year 11`,
      loa: 0.15,
      note: `Step-down year. Confirm the certificate.`,
    },
    {
      id: `inc20`,
      label: `6b year 12`,
      loa: 0.2,
      note: `Step-down year. Confirm the certificate.`,
    },
    {
      id: `custom`,
      label: `Custom level`,
      loa: 0.25,
      note: `Type the level that applies`,
    },
  ],
  T = [
    { id: `2024`, label: `2024 final · 3.0355`, factor: 3.0355 },
    { id: `2025`, label: `2025 final · 3.0300`, factor: 3.03 },
  ],
  E =
    `Barrington.Berwyn.Bloom.Bremen.Calumet.Cicero.Elk Grove.Evanston.Hanover.Hyde Park.Jefferson.Lake.Lake View.Lemont.Leyden.Lyons.Maine.New Trier.Niles.North Chicago.Northfield.Norwood Park.Oak Park.Orland.Palos.Proviso.Rich.River Forest.Riverside.Rogers Park.Schaumburg.South Chicago.Stickney.Thornton.West Chicago.Wheeling.Worth`.split(
      `.`,
    ),
  D = {
    management: 0,
    insurance: 0,
    repairs: 0,
    utilities: 0,
    reserves: 0,
    other: 0,
  };
function ee() {
  return crypto.randomUUID();
}
function O() {
  return {
    id: ee(),
    name: `Untitled case`,
    pin: ``,
    address: ``,
    township: ``,
    taxYear: 2026,
    classId: `5a`,
    loa: 0.25,
    nra: 0,
    units: 0,
    pgiMode: `direct`,
    pgi: 0,
    rentPerSf: 0,
    rentPerUnitMonth: 0,
    otherIncome: 0,
    vacancyRate: 0,
    expenseMode: `ratio`,
    expenseRatio: 0,
    expenseDollars: 0,
    lines: { ...D },
    compareUnloaded: !1,
    reTax: 0,
    marketCap: 0,
    eqFactor: 3.0355,
    taxRate: 0,
    additionalLand: 0,
    currentAv: 0,
    note: ``,
    lat: null,
    lng: null,
    heading: 0,
    caseNumber: ``,
    analyst: typeof window < `u` ? crGetAnalyst() : ``,
    subject: null,
    lookup: null,
    sales: null,
    report: {},
  };
}
function te(e) {
  return {
    ...O(),
    id: e ?? ee(),
    name: `CCAO published example`,
    classId: `5a`,
    loa: 0.25,
    pgiMode: `direct`,
    pgi: 1e6,
    vacancyRate: 0.1,
    expenseMode: `ratio`,
    expenseRatio: 0.2,
    marketCap: 0.0625,
    eqFactor: 3.0355,
    taxRate: 0.0897,
    note: `Assessor worksheet: $1,000,000 PGI, 10% vacancy, 20% expenses, 6.25% market cap, 6.81% tax load.`,
  };
}
function k(e) {
  let t = e.replace(/\D/g, ``).slice(0, 14),
    n = [2, 2, 3, 3, 4],
    r = [],
    i = 0;
  for (let e of n) {
    if (i >= t.length) break;
    (r.push(t.slice(i, i + e)), (i += e));
  }
  return r.join(`-`);
}
function A(e) {
  let t = e.replace(/\D/g, ``);
  return t.length < 10 || t.length > 14 ? `` : t.padStart(14, `0`).slice(-14);
}
function ne(e, t, n = 0) {
  let r = ((n % 360) + 360) % 360;
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${`${re(e)},${re(t)}`}&heading=${re(r)}`;
}
function re(e) {
  return e.toFixed(7).replace(/\.?0+$/, ``);
}
function ie(e) {
  let t = e.replace(/\D/g, ``);
  return t.length < 10 || t.length > 14
    ? null
    : `https://www.cookcountyassessoril.gov/pin/${t.padStart(14, `0`)}`;
}
function ae(e, t, n) {
  let r = e * t * n;
  return Number.isFinite(r) ? Math.round(r * 1e4) / 1e4 : 0;
}
function oe(e) {
  return e.pgiMode === `perSf`
    ? e.nra * e.rentPerSf
    : e.pgiMode === `perUnit`
      ? e.units * e.rentPerUnitMonth * 12
      : e.pgi;
}
function se(e) {
  return (
    e.management + e.insurance + e.repairs + e.utilities + e.reserves + e.other
  );
}
function ce(e, t) {
  return !(t > 0) || !Number.isFinite(e) ? null : e / t;
}
function le(e, t) {
  if (e == null || !Number.isFinite(e))
    return { withLand: null, concluded: null };
  let n = e + (Number.isFinite(t) ? t : 0);
  return { withLand: n, concluded: Math.round(n / 1e3) * 1e3 };
}
function ue(e) {
  let t = oe(e),
    n = t * e.vacancyRate,
    r = t - n + e.otherIncome,
    i =
      e.expenseMode === `ratio`
        ? r * e.expenseRatio
        : e.expenseMode === `dollars`
          ? e.expenseDollars
          : se(e.lines),
    a = r - i,
    o = ae(e.loa, e.eqFactor, e.taxRate),
    s = e.marketCap + o,
    c = ce(a, s),
    l = c == null ? null : Math.round(c),
    { withLand: u, concluded: d } = le(l, e.additionalLand),
    f = d == null ? null : Math.round(d * e.loa),
    p = f == null ? null : Math.round(f * e.eqFactor),
    m = d != null && e.nra > 0 ? d / e.nra : null,
    h = d != null && e.units > 0 ? d / e.units : null,
    g = null;
  if (e.compareUnloaded) {
    let t = a - e.reTax,
      n = ce(t, e.marketCap),
      r = n == null ? null : Math.round(n),
      i = le(r, e.additionalLand);
    g = {
      noi: t,
      indicated: r,
      concluded: i.concluded,
      assessed: i.concluded == null ? null : Math.round(i.concluded * e.loa),
    };
  }
  return {
    pgi: t,
    vacancy: n,
    egi: r,
    operatingExpenses: i,
    noi: a,
    taxLoad: o,
    loadedCap: s,
    indicated: l,
    withLand: u,
    concluded: d,
    assessed: f,
    eav: p,
    perSf: m,
    perUnit: h,
    unloaded: g,
  };
}
function j(e, t = 0) {
  return e == null || !Number.isFinite(e)
    ? `—`
    : e.toLocaleString(`en-US`, {
        style: `currency`,
        currency: `USD`,
        minimumFractionDigits: t,
        maximumFractionDigits: t,
      });
}
function M(e, t = 2) {
  return Number.isFinite(e)
    ? `${(e * 100).toLocaleString(`en-US`, { minimumFractionDigits: t, maximumFractionDigits: t })}%`
    : `—`;
}
function de(e, t = 0) {
  return e == null || !Number.isFinite(e)
    ? `—`
    : e.toLocaleString(`en-US`, {
        minimumFractionDigits: t,
        maximumFractionDigits: t,
      });
}
function fe(e, t) {
  let n = A(e.pin),
    r = [
      `CAP & REVIEW — 2026 COMMERCIAL REVIEWS — INCOME APPROACH`,
      ...(n ? [`PIN ${n}`] : []),
      ...(e.caseNumber ? [`Docket / Complaint # ${e.caseNumber}`] : []),
      ...(e.analyst ? [`Analyst ${e.analyst}`] : []),
      e.name,
      [
        k(e.pin),
        e.address,
        e.township,
        e.taxYear ? `Tax year ${e.taxYear}` : ``,
      ]
        .filter(Boolean)
        .join(` · `),
      `Class ${pe(e)} · level of assessment ${M(e.loa, 2)}`,
      ``,
      `Potential gross income          ${j(t.pgi)}`,
      `Vacancy & collection (${M(e.vacancyRate)})  ${j(-t.vacancy)}`,
      `Other income                    ${j(e.otherIncome)}`,
      `Effective gross income          ${j(t.egi)}`,
      `Operating expenses (ex-tax)     ${j(-t.operatingExpenses)}`,
      `Net operating income            ${j(t.noi)}`,
      ``,
      `Market cap rate                 ${M(e.marketCap)}`,
      `Tax load ${M(e.loa)} × ${de(e.eqFactor, 4)} × ${M(e.taxRate)} = ${M(t.taxLoad)}`,
      `Loaded cap rate                 ${M(t.loadedCap)}`,
      `Indicated value                 ${j(t.indicated)}`,
      `Additional land                 ${j(e.additionalLand)}`,
      `Concluded market value          ${j(t.concluded)}`,
      `Assessed value                  ${j(t.assessed)}`,
      `Equalized assessed value        ${j(t.eav)}`,
    ];
  if (e.currentAv > 0 && t.assessed != null) {
    let n = t.assessed - e.currentAv,
      i = e.loa > 0 ? Math.round(e.currentAv / e.loa) : null;
    (r.push(``),
      r.push(`Original assessment            ${j(e.currentAv)}`),
      r.push(`New assessed value             ${j(t.assessed)}`),
      r.push(
        `Change from original           ${j(n)} (${M(e.currentAv ? n / e.currentAv : 0)})`,
      ),
      r.push(`Total new value                ${j(t.concluded)}`),
      i != null &&
        t.concluded != null &&
        (r.push(`Value of original assessment   ${j(i)}`),
        r.push(`Value change                   ${j(t.concluded - i)}`)));
  }
  return (
    e.note.trim() && r.push(``, e.note.trim()),
    r.push(
      ``,
      `Working paper. Taxes are not deducted; they load the cap rate. Confirm class, factor, and the township rate before you rely on it.`,
    ),
    r.join(`
`)
  );
}
function pe(e) {
  return w.find((t) => t.id === e.classId)?.label ?? `Custom`;
}
var me = `cr2026-income-v1`;
function he() {
  try {
    let e = localStorage.getItem(me);
    if (!e) return _e();
    let t = JSON.parse(e);
    if (!t?.sheets?.length || !t.activeId) return _e();
    let n = t.sheets.map(ve);
    return {
      activeId: n.some((e) => e.id === t.activeId) ? t.activeId : n[0].id,
      sheets: n,
    };
  } catch {
    return _e();
  }
}
function ge(e) {
  localStorage.setItem(me, JSON.stringify(e));
}
function _e() {
  let e = te(`cca-example`);
  return { activeId: e.id, sheets: [e] };
}
function ve(e) {
  let t = O();
  return {
    ...t,
    ...e,
    id: typeof e.id == `string` ? e.id : t.id,
    lines: { ...t.lines, ...(e.lines ?? {}) },
    compareUnloaded: !!e.compareUnloaded,
    lat: typeof e.lat == `number` && Number.isFinite(e.lat) ? e.lat : null,
    lng: typeof e.lng == `number` && Number.isFinite(e.lng) ? e.lng : null,
    heading:
      typeof e.heading == `number` && Number.isFinite(e.heading)
        ? e.heading
        : 0,
  };
}
var ye = function (e, t) {
  return (
    (ye =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      }),
    ye(e, t)
  );
};
function N(e, t) {
  ye(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var P = function () {
  return (
    (P =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    P.apply(this, arguments)
  );
};
function be(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function F(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function I(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    a,
    o = { next: s(0), throw: s(1), return: s(2) };
  return (
    typeof Symbol == `function` &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(e) {
    return function (t) {
      return c([e, t]);
    };
  }
  function c(o) {
    if (r) throw TypeError(`Generator is already executing.`);
    for (; n;)
      try {
        if (
          ((r = 1),
          i &&
            (a =
              o[0] & 2
                ? i.return
                : o[0]
                  ? i.throw || ((a = i.return) && a.call(i), 0)
                  : i.next) &&
            !(a = a.call(i, o[1])).done)
        )
          return a;
        switch (((i = 0), a && (o = [o[0] & 2, a.value]), o[0])) {
          case 0:
          case 1:
            a = o;
            break;
          case 4:
            return (n.label++, { value: o[1], done: !1 });
          case 5:
            (n.label++, (i = o[1]), (o = [0]));
            continue;
          case 7:
            ((o = n.ops.pop()), n.trys.pop());
            continue;
          default:
            if (
              ((a = n.trys),
              !(a = a.length > 0 && a[a.length - 1]) &&
                (o[0] === 6 || o[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
              n.label = o[1];
              break;
            }
            if (o[0] === 6 && n.label < a[1]) {
              ((n.label = a[1]), (a = o));
              break;
            }
            if (a && n.label < a[2]) {
              ((n.label = a[2]), n.ops.push(o));
              break;
            }
            (a[2] && n.ops.pop(), n.trys.pop());
            continue;
        }
        o = t.call(e, n);
      } catch (e) {
        ((o = [6, e]), (i = 0));
      } finally {
        r = a = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function L() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      r[i] = a[o];
  return r;
}
for (
  var R = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    xe = new Uint8Array(256),
    z = 0;
  z < R.length;
  z++
)
  xe[R.charCodeAt(z)] = z;
var B = function (e) {
    for (var t = ``, n = e.length, r = 0; r < n; r += 3)
      ((t += R[e[r] >> 2]),
        (t += R[((e[r] & 3) << 4) | (e[r + 1] >> 4)]),
        (t += R[((e[r + 1] & 15) << 2) | (e[r + 2] >> 6)]),
        (t += R[e[r + 2] & 63]));
    return (
      n % 3 == 2
        ? (t = t.substring(0, t.length - 1) + `=`)
        : n % 3 == 1 && (t = t.substring(0, t.length - 2) + `==`),
      t
    );
  },
  Se = function (e) {
    var t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      a,
      o,
      s,
      c;
    e[e.length - 1] === `=` && (t--, e[e.length - 2] === `=` && t--);
    var l = new Uint8Array(t);
    for (r = 0; r < n; r += 4)
      ((a = xe[e.charCodeAt(r)]),
        (o = xe[e.charCodeAt(r + 1)]),
        (s = xe[e.charCodeAt(r + 2)]),
        (c = xe[e.charCodeAt(r + 3)]),
        (l[i++] = (a << 2) | (o >> 4)),
        (l[i++] = ((o & 15) << 4) | (s >> 2)),
        (l[i++] = ((s & 3) << 6) | (c & 63)));
    return l;
  },
  Ce = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,
  we = function (e) {
    var t = e.trim(),
      n = t.substring(0, 100).match(Ce);
    if (!n) return Se(t);
    var r = n[0];
    return Se(t.substring(r.length));
  },
  V = function (e) {
    return e.charCodeAt(0);
  },
  H = function (e) {
    return e.codePointAt(0);
  },
  Te = function (e, t) {
    return ke(e.toString(16), t, `0`).toUpperCase();
  },
  Ee = function (e) {
    return Te(e, 2);
  },
  De = function (e) {
    return String.fromCharCode(e);
  },
  Oe = function (e) {
    return De(parseInt(e, 16));
  },
  ke = function (e, t, n) {
    for (var r = ``, i = 0, a = t - e.length; i < a; i++) r += n;
    return r + e;
  },
  Ae = function (e, t, n) {
    for (var r = e.length, i = 0; i < r; i++) t[n++] = e.charCodeAt(i);
    return r;
  },
  je = function (e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
  },
  Me = function (e) {
    return e.replace(/\t|\u0085|\u2028|\u2029/g, `    `).replace(/[\b\v]/g, ``);
  },
  Ne = [`\\n`, `\\f`, `\\r`, `\\u000B`],
  Pe = function (e) {
    return /^[\n\f\r\u000B]$/.test(e);
  },
  Fe = function (e) {
    return e.split(/[\n\f\r\u000B]/);
  },
  Ie = function (e) {
    return e.replace(/[\n\f\r\u000B]/g, ` `);
  },
  Le = function (e, t) {
    var n = e.charCodeAt(t),
      r,
      i = t + 1,
      a = 1;
    return (
      n >= 55296 &&
        n <= 56319 &&
        e.length > i &&
        ((r = e.charCodeAt(i)), r >= 56320 && r <= 57343 && (a = 2)),
      [e.slice(t, t + a), a]
    );
  },
  Re = function (e) {
    for (var t = [], n = 0, r = e.length; n < r;) {
      var i = Le(e, n),
        a = i[0],
        o = i[1];
      (t.push(a), (n += o));
    }
    return t;
  },
  ze = function (e) {
    for (var t = Ne.join(`|`), n = [`$`], r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      if (Pe(a)) throw TypeError("`wordBreak` must not include " + t);
      n.push(a === `` ? `.` : je(a));
    }
    var o = n.join(`|`);
    return RegExp(`(` + t + `)|((.*?)(` + o + `))`, `gm`);
  },
  Be = function (e, t, n, r) {
    for (
      var i = ze(t),
        a = Me(e).match(i),
        o = ``,
        s = 0,
        c = [],
        l = function () {
          (o !== `` && c.push(o), (o = ``), (s = 0));
        },
        u = 0,
        d = a.length;
      u < d;
      u++
    ) {
      var f = a[u];
      if (Pe(f)) l();
      else {
        var p = r(f);
        (s + p > n && l(), (o += f), (s += p));
      }
    }
    return (l(), c);
  },
  Ve =
    /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,
  He = function (e) {
    var t = e.match(Ve);
    if (t) {
      var n = t[1],
        r = t[2],
        i = r === void 0 ? `01` : r,
        a = t[3],
        o = a === void 0 ? `01` : a,
        s = t[4],
        c = s === void 0 ? `00` : s,
        l = t[5],
        u = l === void 0 ? `00` : l,
        d = t[6],
        f = d === void 0 ? `00` : d,
        p = t[7],
        m = p === void 0 ? `Z` : p,
        h = t[8],
        g = h === void 0 ? `00` : h,
        _ = t[9],
        v = _ === void 0 ? `00` : _,
        y = m === `Z` ? `Z` : `` + m + g + `:` + v;
      return new Date(n + `-` + i + `-` + o + `T` + c + `:` + u + `:` + f + y);
    }
  },
  Ue = function (e, t) {
    for (var n = 0, r; n < e.length;) {
      var i = e.substring(n).match(t);
      if (!i) return { match: r, pos: n };
      ((r = i), (n += (i.index ?? 0) + i[0].length));
    }
    return { match: r, pos: n };
  },
  We = function (e) {
    return e[e.length - 1];
  },
  Ge = function (e) {
    if (e instanceof Uint8Array) return e;
    for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++)
      n[r] = e.charCodeAt(r);
    return n;
  },
  Ke = function () {
    for (var e = [...arguments], t = e.length, n = [], r = 0; r < t; r++) {
      var i = e[r];
      n[r] = i instanceof Uint8Array ? i : Ge(i);
    }
    for (var a = 0, r = 0; r < t; r++) a += e[r].length;
    for (var o = new Uint8Array(a), s = 0, c = 0; c < t; c++)
      for (var l = n[c], u = 0, d = l.length; u < d; u++) o[s++] = l[u];
    return o;
  },
  qe = function (e) {
    for (var t = 0, n = 0, r = e.length; n < r; n++) t += e[n].length;
    for (var i = new Uint8Array(t), a = 0, n = 0, r = e.length; n < r; n++) {
      var o = e[n];
      (i.set(o, a), (a += o.length));
    }
    return i;
  },
  Je = function (e) {
    for (var t = ``, n = 0, r = e.length; n < r; n++) t += De(e[n]);
    return t;
  },
  Ye = function (e, t) {
    return e.id - t.id;
  },
  Xe = function (e, t) {
    for (var n = [], r = 0, i = e.length; r < i; r++) {
      var a = e[r],
        o = e[r - 1];
      (r === 0 || t(a) !== t(o)) && n.push(a);
    }
    return n;
  },
  Ze = function (e) {
    for (var t = e.length, n = 0, r = Math.floor(t / 2); n < r; n++) {
      var i = n,
        a = t - n - 1,
        o = e[n];
      ((e[i] = e[a]), (e[a] = o));
    }
    return e;
  },
  Qe = function (e) {
    for (var t = 0, n = 0, r = e.length; n < r; n++) t += e[n];
    return t;
  },
  $e = function (e, t) {
    for (var n = Array(t - e), r = 0, i = n.length; r < i; r++) n[r] = e + r;
    return n;
  },
  et = function (e, t) {
    for (var n = Array(t.length), r = 0, i = t.length; r < i; r++)
      n[r] = e[t[r]];
    return n;
  },
  tt = function (e) {
    return (
      e instanceof Uint8Array ||
      e instanceof ArrayBuffer ||
      typeof e == `string`
    );
  },
  nt = function (e) {
    if (typeof e == `string`) return we(e);
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (e instanceof Uint8Array) return e;
    throw TypeError(
      "`input` must be one of `string | ArrayBuffer | Uint8Array`",
    );
  },
  rt = function () {
    return new Promise(function (e) {
      setTimeout(function () {
        return e();
      }, 0);
    });
  },
  it = function (e, t) {
    t === void 0 && (t = !0);
    var n = [];
    t && n.push(65279);
    for (var r = 0, i = e.length; r < i;) {
      var a = e.codePointAt(r);
      if (a < 65536) (n.push(a), (r += 1));
      else if (a < 1114112) (n.push(st(a), ct(a)), (r += 2));
      else throw Error(`Invalid code point: 0x` + Ee(a));
    }
    return new Uint16Array(n);
  },
  at = function (e) {
    return e >= 0 && e <= 65535;
  },
  ot = function (e) {
    return e >= 65536 && e <= 1114111;
  },
  st = function (e) {
    return Math.floor((e - 65536) / 1024) + 55296;
  },
  ct = function (e) {
    return ((e - 65536) % 1024) + 56320;
  },
  lt;
(function (e) {
  ((e.BigEndian = `BigEndian`), (e.LittleEndian = `LittleEndian`));
})((lt ||= {}));
for (
  var ut = `�`.codePointAt(0),
    dt = function (e, t) {
      if ((t === void 0 && (t = !0), e.length <= 1))
        return String.fromCodePoint(ut);
      for (
        var n = t ? ht(e) : lt.BigEndian, r = t ? 2 : 0, i = [];
        e.length - r >= 2;
      ) {
        var a = mt(e[r++], e[r++], n);
        if (ft(a)) {
          if (e.length - r < 2) i.push(ut);
          else {
            var o = mt(e[r++], e[r++], n);
            pt(o) ? i.push(a, o) : i.push(ut);
          }
        } else pt(a) ? ((r += 2), i.push(ut)) : i.push(a);
      }
      return (
        r < e.length && i.push(ut),
        String.fromCodePoint.apply(String, i)
      );
    },
    ft = function (e) {
      return e >= 55296 && e <= 56319;
    },
    pt = function (e) {
      return e >= 56320 && e <= 57343;
    },
    mt = function (e, t, n) {
      if (n === lt.LittleEndian) return (t << 8) | e;
      if (n === lt.BigEndian) return (e << 8) | t;
      throw Error(`Invalid byteOrder: ` + n);
    },
    ht = function (e) {
      return gt(e) ? lt.BigEndian : _t(e) ? lt.LittleEndian : lt.BigEndian;
    },
    gt = function (e) {
      return e[0] === 254 && e[1] === 255;
    },
    _t = function (e) {
      return e[0] === 255 && e[1] === 254;
    },
    vt = function (e) {
      return gt(e) || _t(e);
    },
    yt = function (e) {
      var t = String(e);
      if (Math.abs(e) < 1) {
        var n = parseInt(e.toString().split(`e-`)[1]);
        if (n) {
          var r = e < 0;
          (r && (e *= -1),
            (e *= 10 ** (n - 1)),
            (t = `0.` + Array(n).join(`0`) + e.toString().substring(2)),
            r && (t = `-` + t));
        }
      } else {
        var n = parseInt(e.toString().split(`+`)[1]);
        n > 20 &&
          ((n -= 20),
          (e /= 10 ** n),
          (t = e.toString() + Array(n + 1).join(`0`)));
      }
      return t;
    },
    bt = function (e) {
      return Math.ceil(e.toString(2).length / 8);
    },
    xt = function (e) {
      for (var t = new Uint8Array(bt(e)), n = 1; n <= t.length; n++)
        t[n - 1] = e >> ((t.length - n) * 8);
      return t;
    },
    St = function (e) {
      throw Error(e);
    },
    Ct = t((e) => {
      var t =
        typeof Uint8Array < `u` &&
        typeof Uint16Array < `u` &&
        typeof Int32Array < `u`;
      function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      ((e.assign = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
          var r = t.shift();
          if (r) {
            if (typeof r != `object`) throw TypeError(r + `must be non-object`);
            for (var i in r) n(r, i) && (e[i] = r[i]);
          }
        }
        return e;
      }),
        (e.shrinkBuf = function (e, t) {
          return e.length === t
            ? e
            : e.subarray
              ? e.subarray(0, t)
              : ((e.length = t), e);
        }));
      var r = {
          arraySet: function (e, t, n, r, i) {
            if (t.subarray && e.subarray) {
              e.set(t.subarray(n, n + r), i);
              return;
            }
            for (var a = 0; a < r; a++) e[i + a] = t[n + a];
          },
          flattenChunks: function (e) {
            var t,
              n,
              r = 0,
              i,
              a,
              o;
            for (t = 0, n = e.length; t < n; t++) r += e[t].length;
            for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++)
              ((a = e[t]), o.set(a, i), (i += a.length));
            return o;
          },
        },
        i = {
          arraySet: function (e, t, n, r, i) {
            for (var a = 0; a < r; a++) e[i + a] = t[n + a];
          },
          flattenChunks: function (e) {
            return [].concat.apply([], e);
          },
        };
      ((e.setTyped = function (t) {
        t
          ? ((e.Buf8 = Uint8Array),
            (e.Buf16 = Uint16Array),
            (e.Buf32 = Int32Array),
            e.assign(e, r))
          : ((e.Buf8 = Array),
            (e.Buf16 = Array),
            (e.Buf32 = Array),
            e.assign(e, i));
      }),
        e.setTyped(t));
    }),
    wt = t((e) => {
      var t = Ct(),
        n = 4,
        r = 0,
        i = 1,
        a = 2;
      function o(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0;
      }
      var s = 0,
        c = 1,
        l = 2,
        u = 3,
        d = 258,
        f = 29,
        p = 256,
        m = p + 1 + f,
        h = 30,
        g = 19,
        _ = 2 * m + 1,
        v = 15,
        y = 16,
        b = 7,
        x = 256,
        S = 16,
        C = 17,
        w = 18,
        T = [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0,
        ],
        E = [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ],
        D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        ee = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        O = 512,
        te = Array((m + 2) * 2);
      o(te);
      var k = Array(h * 2);
      o(k);
      var A = Array(O);
      o(A);
      var ne = Array(d - u + 1);
      o(ne);
      var re = Array(f);
      o(re);
      var ie = Array(h);
      o(ie);
      function ae(e, t, n, r, i) {
        ((this.static_tree = e),
          (this.extra_bits = t),
          (this.extra_base = n),
          (this.elems = r),
          (this.max_length = i),
          (this.has_stree = e && e.length));
      }
      var oe, se, ce;
      function le(e, t) {
        ((this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t));
      }
      function ue(e) {
        return e < 256 ? A[e] : A[256 + (e >>> 7)];
      }
      function j(e, t) {
        ((e.pending_buf[e.pending++] = t & 255),
          (e.pending_buf[e.pending++] = (t >>> 8) & 255));
      }
      function M(e, t, n) {
        e.bi_valid > y - n
          ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
            j(e, e.bi_buf),
            (e.bi_buf = t >> (y - e.bi_valid)),
            (e.bi_valid += n - y))
          : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
      }
      function de(e, t, n) {
        M(e, n[t * 2], n[t * 2 + 1]);
      }
      function fe(e, t) {
        var n = 0;
        do ((n |= e & 1), (e >>>= 1), (n <<= 1));
        while (--t > 0);
        return n >>> 1;
      }
      function pe(e) {
        e.bi_valid === 16
          ? (j(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
          : e.bi_valid >= 8 &&
            ((e.pending_buf[e.pending++] = e.bi_buf & 255),
            (e.bi_buf >>= 8),
            (e.bi_valid -= 8));
      }
      function me(e, t) {
        var n = t.dyn_tree,
          r = t.max_code,
          i = t.stat_desc.static_tree,
          a = t.stat_desc.has_stree,
          o = t.stat_desc.extra_bits,
          s = t.stat_desc.extra_base,
          c = t.stat_desc.max_length,
          l,
          u,
          d,
          f,
          p,
          m,
          h = 0;
        for (f = 0; f <= v; f++) e.bl_count[f] = 0;
        for (n[e.heap[e.heap_max] * 2 + 1] = 0, l = e.heap_max + 1; l < _; l++)
          ((u = e.heap[l]),
            (f = n[n[u * 2 + 1] * 2 + 1] + 1),
            f > c && ((f = c), h++),
            (n[u * 2 + 1] = f),
            !(u > r) &&
              (e.bl_count[f]++,
              (p = 0),
              u >= s && (p = o[u - s]),
              (m = n[u * 2]),
              (e.opt_len += m * (f + p)),
              a && (e.static_len += m * (i[u * 2 + 1] + p))));
        if (h !== 0) {
          do {
            for (f = c - 1; e.bl_count[f] === 0;) f--;
            (e.bl_count[f]--,
              (e.bl_count[f + 1] += 2),
              e.bl_count[c]--,
              (h -= 2));
          } while (h > 0);
          for (f = c; f !== 0; f--)
            for (u = e.bl_count[f]; u !== 0;)
              ((d = e.heap[--l]),
                !(d > r) &&
                  (n[d * 2 + 1] !== f &&
                    ((e.opt_len += (f - n[d * 2 + 1]) * n[d * 2]),
                    (n[d * 2 + 1] = f)),
                  u--));
        }
      }
      function he(e, t, n) {
        for (var r = Array(v + 1), i = 0, a = 1, o; a <= v; a++)
          r[a] = i = (i + n[a - 1]) << 1;
        for (o = 0; o <= t; o++) {
          var s = e[o * 2 + 1];
          s !== 0 && (e[o * 2] = fe(r[s]++, s));
        }
      }
      function ge() {
        var e,
          t,
          n,
          r,
          i,
          a = Array(v + 1);
        for (n = 0, r = 0; r < f - 1; r++)
          for (re[r] = n, e = 0; e < 1 << T[r]; e++) ne[n++] = r;
        for (ne[n - 1] = r, i = 0, r = 0; r < 16; r++)
          for (ie[r] = i, e = 0; e < 1 << E[r]; e++) A[i++] = r;
        for (i >>= 7; r < h; r++)
          for (ie[r] = i << 7, e = 0; e < 1 << (E[r] - 7); e++)
            A[256 + i++] = r;
        for (t = 0; t <= v; t++) a[t] = 0;
        for (e = 0; e <= 143;) ((te[e * 2 + 1] = 8), e++, a[8]++);
        for (; e <= 255;) ((te[e * 2 + 1] = 9), e++, a[9]++);
        for (; e <= 279;) ((te[e * 2 + 1] = 7), e++, a[7]++);
        for (; e <= 287;) ((te[e * 2 + 1] = 8), e++, a[8]++);
        for (he(te, m + 1, a), e = 0; e < h; e++)
          ((k[e * 2 + 1] = 5), (k[e * 2] = fe(e, 5)));
        ((oe = new ae(te, T, p + 1, m, v)),
          (se = new ae(k, E, 0, h, v)),
          (ce = new ae([], D, 0, g, b)));
      }
      function _e(e) {
        for (var t = 0; t < m; t++) e.dyn_ltree[t * 2] = 0;
        for (t = 0; t < h; t++) e.dyn_dtree[t * 2] = 0;
        for (t = 0; t < g; t++) e.bl_tree[t * 2] = 0;
        ((e.dyn_ltree[x * 2] = 1),
          (e.opt_len = e.static_len = 0),
          (e.last_lit = e.matches = 0));
      }
      function ve(e) {
        (e.bi_valid > 8
          ? j(e, e.bi_buf)
          : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
          (e.bi_buf = 0),
          (e.bi_valid = 0));
      }
      function ye(e, n, r, i) {
        (ve(e),
          i && (j(e, r), j(e, ~r)),
          t.arraySet(e.pending_buf, e.window, n, r, e.pending),
          (e.pending += r));
      }
      function N(e, t, n, r) {
        var i = t * 2,
          a = n * 2;
        return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n]);
      }
      function P(e, t, n) {
        for (
          var r = e.heap[n], i = n << 1;
          i <= e.heap_len &&
          (i < e.heap_len && N(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
          !N(t, r, e.heap[i], e.depth));
        )
          ((e.heap[n] = e.heap[i]), (n = i), (i <<= 1));
        e.heap[n] = r;
      }
      function be(e, t, n) {
        var r,
          i,
          a = 0,
          o,
          s;
        if (e.last_lit !== 0)
          do
            ((r =
              (e.pending_buf[e.d_buf + a * 2] << 8) |
              e.pending_buf[e.d_buf + a * 2 + 1]),
              (i = e.pending_buf[e.l_buf + a]),
              a++,
              r === 0
                ? de(e, i, t)
                : ((o = ne[i]),
                  de(e, o + p + 1, t),
                  (s = T[o]),
                  s !== 0 && ((i -= re[o]), M(e, i, s)),
                  r--,
                  (o = ue(r)),
                  de(e, o, n),
                  (s = E[o]),
                  s !== 0 && ((r -= ie[o]), M(e, r, s))));
          while (a < e.last_lit);
        de(e, x, t);
      }
      function F(e, t) {
        var n = t.dyn_tree,
          r = t.stat_desc.static_tree,
          i = t.stat_desc.has_stree,
          a = t.stat_desc.elems,
          o,
          s,
          c = -1,
          l;
        for (e.heap_len = 0, e.heap_max = _, o = 0; o < a; o++)
          n[o * 2] === 0
            ? (n[o * 2 + 1] = 0)
            : ((e.heap[++e.heap_len] = c = o), (e.depth[o] = 0));
        for (; e.heap_len < 2;)
          ((l = e.heap[++e.heap_len] = c < 2 ? ++c : 0),
            (n[l * 2] = 1),
            (e.depth[l] = 0),
            e.opt_len--,
            i && (e.static_len -= r[l * 2 + 1]));
        for (t.max_code = c, o = e.heap_len >> 1; o >= 1; o--) P(e, n, o);
        l = a;
        do
          ((o = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            P(e, n, 1),
            (s = e.heap[1]),
            (e.heap[--e.heap_max] = o),
            (e.heap[--e.heap_max] = s),
            (n[l * 2] = n[o * 2] + n[s * 2]),
            (e.depth[l] =
              (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1),
            (n[o * 2 + 1] = n[s * 2 + 1] = l),
            (e.heap[1] = l++),
            P(e, n, 1));
        while (e.heap_len >= 2);
        ((e.heap[--e.heap_max] = e.heap[1]), me(e, t), he(n, c, e.bl_count));
      }
      function I(e, t, n) {
        var r,
          i = -1,
          a,
          o = t[1],
          s = 0,
          c = 7,
          l = 4;
        for (
          o === 0 && ((c = 138), (l = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0;
          r <= n;
          r++
        )
          ((a = o),
            (o = t[(r + 1) * 2 + 1]),
            !(++s < c && a === o) &&
              (s < l
                ? (e.bl_tree[a * 2] += s)
                : a === 0
                  ? s <= 10
                    ? e.bl_tree[C * 2]++
                    : e.bl_tree[w * 2]++
                  : (a !== i && e.bl_tree[a * 2]++, e.bl_tree[S * 2]++),
              (s = 0),
              (i = a),
              o === 0
                ? ((c = 138), (l = 3))
                : a === o
                  ? ((c = 6), (l = 3))
                  : ((c = 7), (l = 4))));
      }
      function L(e, t, n) {
        var r,
          i = -1,
          a,
          o = t[1],
          s = 0,
          c = 7,
          l = 4;
        for (o === 0 && ((c = 138), (l = 3)), r = 0; r <= n; r++)
          if (((a = o), (o = t[(r + 1) * 2 + 1]), !(++s < c && a === o))) {
            if (s < l)
              do de(e, a, e.bl_tree);
              while (--s !== 0);
            else
              a === 0
                ? s <= 10
                  ? (de(e, C, e.bl_tree), M(e, s - 3, 3))
                  : (de(e, w, e.bl_tree), M(e, s - 11, 7))
                : (a !== i && (de(e, a, e.bl_tree), s--),
                  de(e, S, e.bl_tree),
                  M(e, s - 3, 2));
            ((s = 0),
              (i = a),
              o === 0
                ? ((c = 138), (l = 3))
                : a === o
                  ? ((c = 6), (l = 3))
                  : ((c = 7), (l = 4)));
          }
      }
      function R(e) {
        var t;
        for (
          I(e, e.dyn_ltree, e.l_desc.max_code),
            I(e, e.dyn_dtree, e.d_desc.max_code),
            F(e, e.bl_desc),
            t = g - 1;
          t >= 3 && e.bl_tree[ee[t] * 2 + 1] === 0;
          t--
        );
        return ((e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t);
      }
      function xe(e, t, n, r) {
        var i;
        for (
          M(e, t - 257, 5), M(e, n - 1, 5), M(e, r - 4, 4), i = 0;
          i < r;
          i++
        )
          M(e, e.bl_tree[ee[i] * 2 + 1], 3);
        (L(e, e.dyn_ltree, t - 1), L(e, e.dyn_dtree, n - 1));
      }
      function z(e) {
        for (var t = 4093624447, n = 0; n <= 31; n++, t >>>= 1)
          if (t & 1 && e.dyn_ltree[n * 2] !== 0) return r;
        if (
          e.dyn_ltree[18] !== 0 ||
          e.dyn_ltree[20] !== 0 ||
          e.dyn_ltree[26] !== 0
        )
          return i;
        for (n = 32; n < p; n++) if (e.dyn_ltree[n * 2] !== 0) return i;
        return r;
      }
      var B = !1;
      function Se(e) {
        ((B ||= (ge(), !0)),
          (e.l_desc = new le(e.dyn_ltree, oe)),
          (e.d_desc = new le(e.dyn_dtree, se)),
          (e.bl_desc = new le(e.bl_tree, ce)),
          (e.bi_buf = 0),
          (e.bi_valid = 0),
          _e(e));
      }
      function Ce(e, t, n, r) {
        (M(e, (s << 1) + +!!r, 3), ye(e, t, n, !0));
      }
      function we(e) {
        (M(e, c << 1, 3), de(e, x, te), pe(e));
      }
      function V(e, t, r, i) {
        var o,
          s,
          u = 0;
        (e.level > 0
          ? (e.strm.data_type === a && (e.strm.data_type = z(e)),
            F(e, e.l_desc),
            F(e, e.d_desc),
            (u = R(e)),
            (o = (e.opt_len + 3 + 7) >>> 3),
            (s = (e.static_len + 3 + 7) >>> 3),
            s <= o && (o = s))
          : (o = s = r + 5),
          r + 4 <= o && t !== -1
            ? Ce(e, t, r, i)
            : e.strategy === n || s === o
              ? (M(e, (c << 1) + +!!i, 3), be(e, te, k))
              : (M(e, (l << 1) + +!!i, 3),
                xe(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, u + 1),
                be(e, e.dyn_ltree, e.dyn_dtree)),
          _e(e),
          i && ve(e));
      }
      function H(e, t, n) {
        return (
          (e.pending_buf[e.d_buf + e.last_lit * 2] = (t >>> 8) & 255),
          (e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255),
          (e.pending_buf[e.l_buf + e.last_lit] = n & 255),
          e.last_lit++,
          t === 0
            ? e.dyn_ltree[n * 2]++
            : (e.matches++,
              t--,
              e.dyn_ltree[(ne[n] + p + 1) * 2]++,
              e.dyn_dtree[ue(t) * 2]++),
          e.last_lit === e.lit_bufsize - 1
        );
      }
      ((e._tr_init = Se),
        (e._tr_stored_block = Ce),
        (e._tr_flush_block = V),
        (e._tr_tally = H),
        (e._tr_align = we));
    }),
    Tt = t((e, t) => {
      function n(e, t, n, r) {
        for (
          var i = (e & 65535) | 0, a = ((e >>> 16) & 65535) | 0, o = 0;
          n !== 0;
        ) {
          ((o = n > 2e3 ? 2e3 : n), (n -= o));
          do ((i = (i + t[r++]) | 0), (a = (a + i) | 0));
          while (--o);
          ((i %= 65521), (a %= 65521));
        }
        return i | (a << 16) | 0;
      }
      t.exports = n;
    }),
    Et = t((e, t) => {
      function n() {
        for (var e, t = [], n = 0; n < 256; n++) {
          e = n;
          for (var r = 0; r < 8; r++)
            e = e & 1 ? 3988292384 ^ (e >>> 1) : e >>> 1;
          t[n] = e;
        }
        return t;
      }
      var r = n();
      function i(e, t, n, i) {
        var a = r,
          o = i + n;
        e ^= -1;
        for (var s = i; s < o; s++) e = (e >>> 8) ^ a[(e ^ t[s]) & 255];
        return e ^ -1;
      }
      t.exports = i;
    }),
    Dt = t((e, t) => {
      t.exports = {
        2: `need dictionary`,
        1: `stream end`,
        0: ``,
        "-1": `file error`,
        "-2": `stream error`,
        "-3": `data error`,
        "-4": `insufficient memory`,
        "-5": `buffer error`,
        "-6": `incompatible version`,
      };
    }),
    Ot = t((e) => {
      var t = Ct(),
        n = wt(),
        r = Tt(),
        i = Et(),
        a = Dt(),
        o = 0,
        s = 1,
        c = 3,
        l = 4,
        u = 5,
        d = 0,
        f = 1,
        p = -2,
        m = -3,
        h = -5,
        g = -1,
        _ = 1,
        v = 2,
        y = 3,
        b = 4,
        x = 0,
        S = 2,
        C = 8,
        w = 9,
        T = 15,
        E = 8,
        D = 286,
        ee = 30,
        O = 19,
        te = 2 * D + 1,
        k = 15,
        A = 3,
        ne = 258,
        re = ne + A + 1,
        ie = 32,
        ae = 42,
        oe = 69,
        se = 73,
        ce = 91,
        le = 103,
        ue = 113,
        j = 666,
        M = 1,
        de = 2,
        fe = 3,
        pe = 4,
        me = 3;
      function he(e, t) {
        return ((e.msg = a[t]), t);
      }
      function ge(e) {
        return (e << 1) - (e > 4 ? 9 : 0);
      }
      function _e(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0;
      }
      function ve(e) {
        var n = e.state,
          r = n.pending;
        (r > e.avail_out && (r = e.avail_out),
          r !== 0 &&
            (t.arraySet(e.output, n.pending_buf, n.pending_out, r, e.next_out),
            (e.next_out += r),
            (n.pending_out += r),
            (e.total_out += r),
            (e.avail_out -= r),
            (n.pending -= r),
            n.pending === 0 && (n.pending_out = 0)));
      }
      function ye(e, t) {
        (n._tr_flush_block(
          e,
          e.block_start >= 0 ? e.block_start : -1,
          e.strstart - e.block_start,
          t,
        ),
          (e.block_start = e.strstart),
          ve(e.strm));
      }
      function N(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function P(e, t) {
        ((e.pending_buf[e.pending++] = (t >>> 8) & 255),
          (e.pending_buf[e.pending++] = t & 255));
      }
      function be(e, n, a, o) {
        var s = e.avail_in;
        return (
          s > o && (s = o),
          s === 0
            ? 0
            : ((e.avail_in -= s),
              t.arraySet(n, e.input, e.next_in, s, a),
              e.state.wrap === 1
                ? (e.adler = r(e.adler, n, s, a))
                : e.state.wrap === 2 && (e.adler = i(e.adler, n, s, a)),
              (e.next_in += s),
              (e.total_in += s),
              s)
        );
      }
      function F(e, t) {
        var n = e.max_chain_length,
          r = e.strstart,
          i,
          a,
          o = e.prev_length,
          s = e.nice_match,
          c = e.strstart > e.w_size - re ? e.strstart - (e.w_size - re) : 0,
          l = e.window,
          u = e.w_mask,
          d = e.prev,
          f = e.strstart + ne,
          p = l[r + o - 1],
          m = l[r + o];
        (e.prev_length >= e.good_match && (n >>= 2),
          s > e.lookahead && (s = e.lookahead));
        do
          if (
            ((i = t),
            l[i + o] === m &&
              l[i + o - 1] === p &&
              l[i] === l[r] &&
              l[++i] === l[r + 1])
          ) {
            ((r += 2), i++);
            do;
            while (
              l[++r] === l[++i] &&
              l[++r] === l[++i] &&
              l[++r] === l[++i] &&
              l[++r] === l[++i] &&
              l[++r] === l[++i] &&
              l[++r] === l[++i] &&
              l[++r] === l[++i] &&
              l[++r] === l[++i] &&
              r < f
            );
            if (((a = ne - (f - r)), (r = f - ne), a > o)) {
              if (((e.match_start = t), (o = a), a >= s)) break;
              ((p = l[r + o - 1]), (m = l[r + o]));
            }
          }
        while ((t = d[t & u]) > c && --n !== 0);
        return o <= e.lookahead ? o : e.lookahead;
      }
      function I(e) {
        var n = e.w_size,
          r,
          i,
          a,
          o,
          s;
        do {
          if (
            ((o = e.window_size - e.lookahead - e.strstart),
            e.strstart >= n + (n - re))
          ) {
            (t.arraySet(e.window, e.window, n, n, 0),
              (e.match_start -= n),
              (e.strstart -= n),
              (e.block_start -= n),
              (i = e.hash_size),
              (r = i));
            do ((a = e.head[--r]), (e.head[r] = a >= n ? a - n : 0));
            while (--i);
            ((i = n), (r = i));
            do ((a = e.prev[--r]), (e.prev[r] = a >= n ? a - n : 0));
            while (--i);
            o += n;
          }
          if (e.strm.avail_in === 0) break;
          if (
            ((i = be(e.strm, e.window, e.strstart + e.lookahead, o)),
            (e.lookahead += i),
            e.lookahead + e.insert >= A)
          )
            for (
              s = e.strstart - e.insert,
                e.ins_h = e.window[s],
                e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[s + 1]) & e.hash_mask;
              e.insert &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[s + A - 1]) &
                e.hash_mask),
              (e.prev[s & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = s),
              s++,
              e.insert--,
              !(e.lookahead + e.insert < A));
            );
        } while (e.lookahead < re && e.strm.avail_in !== 0);
      }
      function L(e, t) {
        var n = 65535;
        for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ;) {
          if (e.lookahead <= 1) {
            if ((I(e), e.lookahead === 0 && t === o)) return M;
            if (e.lookahead === 0) break;
          }
          ((e.strstart += e.lookahead), (e.lookahead = 0));
          var r = e.block_start + n;
          if (
            ((e.strstart === 0 || e.strstart >= r) &&
              ((e.lookahead = e.strstart - r),
              (e.strstart = r),
              ye(e, !1),
              e.strm.avail_out === 0)) ||
            (e.strstart - e.block_start >= e.w_size - re &&
              (ye(e, !1), e.strm.avail_out === 0))
          )
            return M;
        }
        return (
          (e.insert = 0),
          t === l
            ? (ye(e, !0), e.strm.avail_out === 0 ? fe : pe)
            : (e.strstart > e.block_start && (ye(e, !1), e.strm.avail_out), M)
        );
      }
      function R(e, t) {
        for (var r, i; ;) {
          if (e.lookahead < re) {
            if ((I(e), e.lookahead < re && t === o)) return M;
            if (e.lookahead === 0) break;
          }
          if (
            ((r = 0),
            e.lookahead >= A &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + A - 1]) &
                e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            r !== 0 &&
              e.strstart - r <= e.w_size - re &&
              (e.match_length = F(e, r)),
            e.match_length >= A)
          ) {
            if (
              ((i = n._tr_tally(
                e,
                e.strstart - e.match_start,
                e.match_length - A,
              )),
              (e.lookahead -= e.match_length),
              e.match_length <= e.max_lazy_match && e.lookahead >= A)
            ) {
              e.match_length--;
              do
                (e.strstart++,
                  (e.ins_h =
                    ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + A - 1]) &
                    e.hash_mask),
                  (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                  (e.head[e.ins_h] = e.strstart));
              while (--e.match_length !== 0);
              e.strstart++;
            } else
              ((e.strstart += e.match_length),
                (e.match_length = 0),
                (e.ins_h = e.window[e.strstart]),
                (e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
                  e.hash_mask));
          } else
            ((i = n._tr_tally(e, 0, e.window[e.strstart])),
              e.lookahead--,
              e.strstart++);
          if (i && (ye(e, !1), e.strm.avail_out === 0)) return M;
        }
        return (
          (e.insert = e.strstart < A - 1 ? e.strstart : A - 1),
          t === l
            ? (ye(e, !0), e.strm.avail_out === 0 ? fe : pe)
            : e.last_lit && (ye(e, !1), e.strm.avail_out === 0)
              ? M
              : de
        );
      }
      function xe(e, t) {
        for (var r, i, a; ;) {
          if (e.lookahead < re) {
            if ((I(e), e.lookahead < re && t === o)) return M;
            if (e.lookahead === 0) break;
          }
          if (
            ((r = 0),
            e.lookahead >= A &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + A - 1]) &
                e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = A - 1),
            r !== 0 &&
              e.prev_length < e.max_lazy_match &&
              e.strstart - r <= e.w_size - re &&
              ((e.match_length = F(e, r)),
              e.match_length <= 5 &&
                (e.strategy === _ ||
                  (e.match_length === A &&
                    e.strstart - e.match_start > 4096)) &&
                (e.match_length = A - 1)),
            e.prev_length >= A && e.match_length <= e.prev_length)
          ) {
            ((a = e.strstart + e.lookahead - A),
              (i = n._tr_tally(
                e,
                e.strstart - 1 - e.prev_match,
                e.prev_length - A,
              )),
              (e.lookahead -= e.prev_length - 1),
              (e.prev_length -= 2));
            do
              ++e.strstart <= a &&
                ((e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + A - 1]) &
                  e.hash_mask),
                (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart));
            while (--e.prev_length !== 0);
            if (
              ((e.match_available = 0),
              (e.match_length = A - 1),
              e.strstart++,
              i && (ye(e, !1), e.strm.avail_out === 0))
            )
              return M;
          } else if (e.match_available) {
            if (
              ((i = n._tr_tally(e, 0, e.window[e.strstart - 1])),
              i && ye(e, !1),
              e.strstart++,
              e.lookahead--,
              e.strm.avail_out === 0)
            )
              return M;
          } else ((e.match_available = 1), e.strstart++, e.lookahead--);
        }
        return (
          (e.match_available &&=
            ((i = n._tr_tally(e, 0, e.window[e.strstart - 1])), 0)),
          (e.insert = e.strstart < A - 1 ? e.strstart : A - 1),
          t === l
            ? (ye(e, !0), e.strm.avail_out === 0 ? fe : pe)
            : e.last_lit && (ye(e, !1), e.strm.avail_out === 0)
              ? M
              : de
        );
      }
      function z(e, t) {
        for (var r, i, a, s, c = e.window; ;) {
          if (e.lookahead <= ne) {
            if ((I(e), e.lookahead <= ne && t === o)) return M;
            if (e.lookahead === 0) break;
          }
          if (
            ((e.match_length = 0),
            e.lookahead >= A &&
              e.strstart > 0 &&
              ((a = e.strstart - 1),
              (i = c[a]),
              i === c[++a] && i === c[++a] && i === c[++a]))
          ) {
            s = e.strstart + ne;
            do;
            while (
              i === c[++a] &&
              i === c[++a] &&
              i === c[++a] &&
              i === c[++a] &&
              i === c[++a] &&
              i === c[++a] &&
              i === c[++a] &&
              i === c[++a] &&
              a < s
            );
            ((e.match_length = ne - (s - a)),
              e.match_length > e.lookahead && (e.match_length = e.lookahead));
          }
          if (
            (e.match_length >= A
              ? ((r = n._tr_tally(e, 1, e.match_length - A)),
                (e.lookahead -= e.match_length),
                (e.strstart += e.match_length),
                (e.match_length = 0))
              : ((r = n._tr_tally(e, 0, e.window[e.strstart])),
                e.lookahead--,
                e.strstart++),
            r && (ye(e, !1), e.strm.avail_out === 0))
          )
            return M;
        }
        return (
          (e.insert = 0),
          t === l
            ? (ye(e, !0), e.strm.avail_out === 0 ? fe : pe)
            : e.last_lit && (ye(e, !1), e.strm.avail_out === 0)
              ? M
              : de
        );
      }
      function B(e, t) {
        for (var r; ;) {
          if (e.lookahead === 0 && (I(e), e.lookahead === 0)) {
            if (t === o) return M;
            break;
          }
          if (
            ((e.match_length = 0),
            (r = n._tr_tally(e, 0, e.window[e.strstart])),
            e.lookahead--,
            e.strstart++,
            r && (ye(e, !1), e.strm.avail_out === 0))
          )
            return M;
        }
        return (
          (e.insert = 0),
          t === l
            ? (ye(e, !0), e.strm.avail_out === 0 ? fe : pe)
            : e.last_lit && (ye(e, !1), e.strm.avail_out === 0)
              ? M
              : de
        );
      }
      function Se(e, t, n, r, i) {
        ((this.good_length = e),
          (this.max_lazy = t),
          (this.nice_length = n),
          (this.max_chain = r),
          (this.func = i));
      }
      var Ce = [
        new Se(0, 0, 0, 0, L),
        new Se(4, 4, 8, 4, R),
        new Se(4, 5, 16, 8, R),
        new Se(4, 6, 32, 32, R),
        new Se(4, 4, 16, 16, xe),
        new Se(8, 16, 32, 32, xe),
        new Se(8, 16, 128, 128, xe),
        new Se(8, 32, 128, 256, xe),
        new Se(32, 128, 258, 1024, xe),
        new Se(32, 258, 258, 4096, xe),
      ];
      function we(e) {
        ((e.window_size = 2 * e.w_size),
          _e(e.head),
          (e.max_lazy_match = Ce[e.level].max_lazy),
          (e.good_match = Ce[e.level].good_length),
          (e.nice_match = Ce[e.level].nice_length),
          (e.max_chain_length = Ce[e.level].max_chain),
          (e.strstart = 0),
          (e.block_start = 0),
          (e.lookahead = 0),
          (e.insert = 0),
          (e.match_length = e.prev_length = A - 1),
          (e.match_available = 0),
          (e.ins_h = 0));
      }
      function V() {
        ((this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = C),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new t.Buf16(te * 2)),
          (this.dyn_dtree = new t.Buf16((2 * ee + 1) * 2)),
          (this.bl_tree = new t.Buf16((2 * O + 1) * 2)),
          _e(this.dyn_ltree),
          _e(this.dyn_dtree),
          _e(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new t.Buf16(k + 1)),
          (this.heap = new t.Buf16(2 * D + 1)),
          _e(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new t.Buf16(2 * D + 1)),
          _e(this.depth),
          (this.l_buf = 0),
          (this.lit_bufsize = 0),
          (this.last_lit = 0),
          (this.d_buf = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0));
      }
      function H(e) {
        var t;
        return !e || !e.state
          ? he(e, p)
          : ((e.total_in = e.total_out = 0),
            (e.data_type = S),
            (t = e.state),
            (t.pending = 0),
            (t.pending_out = 0),
            t.wrap < 0 && (t.wrap = -t.wrap),
            (t.status = t.wrap ? ae : ue),
            (e.adler = t.wrap === 2 ? 0 : 1),
            (t.last_flush = o),
            n._tr_init(t),
            d);
      }
      function Te(e) {
        var t = H(e);
        return (t === d && we(e.state), t);
      }
      function Ee(e, t) {
        return !e || !e.state || e.state.wrap !== 2
          ? p
          : ((e.state.gzhead = t), d);
      }
      function De(e, n, r, i, a, o) {
        if (!e) return p;
        var s = 1;
        if (
          (n === g && (n = 6),
          i < 0 ? ((s = 0), (i = -i)) : i > 15 && ((s = 2), (i -= 16)),
          a < 1 ||
            a > w ||
            r !== C ||
            i < 8 ||
            i > 15 ||
            n < 0 ||
            n > 9 ||
            o < 0 ||
            o > b)
        )
          return he(e, p);
        i === 8 && (i = 9);
        var c = new V();
        return (
          (e.state = c),
          (c.strm = e),
          (c.wrap = s),
          (c.gzhead = null),
          (c.w_bits = i),
          (c.w_size = 1 << c.w_bits),
          (c.w_mask = c.w_size - 1),
          (c.hash_bits = a + 7),
          (c.hash_size = 1 << c.hash_bits),
          (c.hash_mask = c.hash_size - 1),
          (c.hash_shift = ~~((c.hash_bits + A - 1) / A)),
          (c.window = new t.Buf8(c.w_size * 2)),
          (c.head = new t.Buf16(c.hash_size)),
          (c.prev = new t.Buf16(c.w_size)),
          (c.lit_bufsize = 1 << (a + 6)),
          (c.pending_buf_size = c.lit_bufsize * 4),
          (c.pending_buf = new t.Buf8(c.pending_buf_size)),
          (c.d_buf = 1 * c.lit_bufsize),
          (c.l_buf = 3 * c.lit_bufsize),
          (c.level = n),
          (c.strategy = o),
          (c.method = r),
          Te(e)
        );
      }
      function Oe(e, t) {
        return De(e, t, C, T, E, x);
      }
      function ke(e, t) {
        var r, a, m, g;
        if (!e || !e.state || t > u || t < 0) return e ? he(e, p) : p;
        if (
          ((a = e.state),
          !e.output ||
            (!e.input && e.avail_in !== 0) ||
            (a.status === j && t !== l))
        )
          return he(e, e.avail_out === 0 ? h : p);
        if (
          ((a.strm = e),
          (r = a.last_flush),
          (a.last_flush = t),
          a.status === ae)
        ) {
          if (a.wrap === 2)
            ((e.adler = 0),
              N(a, 31),
              N(a, 139),
              N(a, 8),
              a.gzhead
                ? (N(
                    a,
                    +!!a.gzhead.text +
                      (a.gzhead.hcrc ? 2 : 0) +
                      (a.gzhead.extra ? 4 : 0) +
                      (a.gzhead.name ? 8 : 0) +
                      (a.gzhead.comment ? 16 : 0),
                  ),
                  N(a, a.gzhead.time & 255),
                  N(a, (a.gzhead.time >> 8) & 255),
                  N(a, (a.gzhead.time >> 16) & 255),
                  N(a, (a.gzhead.time >> 24) & 255),
                  N(
                    a,
                    a.level === 9 ? 2 : a.strategy >= v || a.level < 2 ? 4 : 0,
                  ),
                  N(a, a.gzhead.os & 255),
                  a.gzhead.extra &&
                    a.gzhead.extra.length &&
                    (N(a, a.gzhead.extra.length & 255),
                    N(a, (a.gzhead.extra.length >> 8) & 255)),
                  a.gzhead.hcrc &&
                    (e.adler = i(e.adler, a.pending_buf, a.pending, 0)),
                  (a.gzindex = 0),
                  (a.status = oe))
                : (N(a, 0),
                  N(a, 0),
                  N(a, 0),
                  N(a, 0),
                  N(a, 0),
                  N(
                    a,
                    a.level === 9 ? 2 : a.strategy >= v || a.level < 2 ? 4 : 0,
                  ),
                  N(a, me),
                  (a.status = ue)));
          else {
            var _ = (C + ((a.w_bits - 8) << 4)) << 8,
              b = -1;
            ((b =
              a.strategy >= v || a.level < 2
                ? 0
                : a.level < 6
                  ? 1
                  : a.level === 6
                    ? 2
                    : 3),
              (_ |= b << 6),
              a.strstart !== 0 && (_ |= ie),
              (_ += 31 - (_ % 31)),
              (a.status = ue),
              P(a, _),
              a.strstart !== 0 && (P(a, e.adler >>> 16), P(a, e.adler & 65535)),
              (e.adler = 1));
          }
        }
        if (a.status === oe) {
          if (a.gzhead.extra) {
            for (
              m = a.pending;
              a.gzindex < (a.gzhead.extra.length & 65535) &&
              !(
                a.pending === a.pending_buf_size &&
                (a.gzhead.hcrc &&
                  a.pending > m &&
                  (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
                ve(e),
                (m = a.pending),
                a.pending === a.pending_buf_size)
              );
            )
              (N(a, a.gzhead.extra[a.gzindex] & 255), a.gzindex++);
            (a.gzhead.hcrc &&
              a.pending > m &&
              (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
              a.gzindex === a.gzhead.extra.length &&
                ((a.gzindex = 0), (a.status = se)));
          } else a.status = se;
        }
        if (a.status === se) {
          if (a.gzhead.name) {
            m = a.pending;
            do {
              if (
                a.pending === a.pending_buf_size &&
                (a.gzhead.hcrc &&
                  a.pending > m &&
                  (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
                ve(e),
                (m = a.pending),
                a.pending === a.pending_buf_size)
              ) {
                g = 1;
                break;
              }
              ((g =
                a.gzindex < a.gzhead.name.length
                  ? a.gzhead.name.charCodeAt(a.gzindex++) & 255
                  : 0),
                N(a, g));
            } while (g !== 0);
            (a.gzhead.hcrc &&
              a.pending > m &&
              (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
              g === 0 && ((a.gzindex = 0), (a.status = ce)));
          } else a.status = ce;
        }
        if (a.status === ce) {
          if (a.gzhead.comment) {
            m = a.pending;
            do {
              if (
                a.pending === a.pending_buf_size &&
                (a.gzhead.hcrc &&
                  a.pending > m &&
                  (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
                ve(e),
                (m = a.pending),
                a.pending === a.pending_buf_size)
              ) {
                g = 1;
                break;
              }
              ((g =
                a.gzindex < a.gzhead.comment.length
                  ? a.gzhead.comment.charCodeAt(a.gzindex++) & 255
                  : 0),
                N(a, g));
            } while (g !== 0);
            (a.gzhead.hcrc &&
              a.pending > m &&
              (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
              g === 0 && (a.status = le));
          } else a.status = le;
        }
        if (
          (a.status === le &&
            (a.gzhead.hcrc
              ? (a.pending + 2 > a.pending_buf_size && ve(e),
                a.pending + 2 <= a.pending_buf_size &&
                  (N(a, e.adler & 255),
                  N(a, (e.adler >> 8) & 255),
                  (e.adler = 0),
                  (a.status = ue)))
              : (a.status = ue)),
          a.pending !== 0)
        ) {
          if ((ve(e), e.avail_out === 0)) return ((a.last_flush = -1), d);
        } else if (e.avail_in === 0 && ge(t) <= ge(r) && t !== l)
          return he(e, h);
        if (a.status === j && e.avail_in !== 0) return he(e, h);
        if (
          e.avail_in !== 0 ||
          a.lookahead !== 0 ||
          (t !== o && a.status !== j)
        ) {
          var x =
            a.strategy === v
              ? B(a, t)
              : a.strategy === y
                ? z(a, t)
                : Ce[a.level].func(a, t);
          if (((x === fe || x === pe) && (a.status = j), x === M || x === fe))
            return (e.avail_out === 0 && (a.last_flush = -1), d);
          if (
            x === de &&
            (t === s
              ? n._tr_align(a)
              : t !== u &&
                (n._tr_stored_block(a, 0, 0, !1),
                t === c &&
                  (_e(a.head),
                  a.lookahead === 0 &&
                    ((a.strstart = 0), (a.block_start = 0), (a.insert = 0)))),
            ve(e),
            e.avail_out === 0)
          )
            return ((a.last_flush = -1), d);
        }
        return t === l
          ? a.wrap <= 0
            ? f
            : (a.wrap === 2
                ? (N(a, e.adler & 255),
                  N(a, (e.adler >> 8) & 255),
                  N(a, (e.adler >> 16) & 255),
                  N(a, (e.adler >> 24) & 255),
                  N(a, e.total_in & 255),
                  N(a, (e.total_in >> 8) & 255),
                  N(a, (e.total_in >> 16) & 255),
                  N(a, (e.total_in >> 24) & 255))
                : (P(a, e.adler >>> 16), P(a, e.adler & 65535)),
              ve(e),
              a.wrap > 0 && (a.wrap = -a.wrap),
              a.pending === 0 ? f : d)
          : d;
      }
      function Ae(e) {
        var t;
        return !e || !e.state
          ? p
          : ((t = e.state.status),
            t !== ae &&
            t !== oe &&
            t !== se &&
            t !== ce &&
            t !== le &&
            t !== ue &&
            t !== j
              ? he(e, p)
              : ((e.state = null), t === ue ? he(e, m) : d));
      }
      function je(e, n) {
        var i = n.length,
          a,
          o,
          s,
          c,
          l,
          u,
          f,
          m;
        if (
          !e ||
          !e.state ||
          ((a = e.state),
          (c = a.wrap),
          c === 2 || (c === 1 && a.status !== ae) || a.lookahead)
        )
          return p;
        for (
          c === 1 && (e.adler = r(e.adler, n, i, 0)),
            a.wrap = 0,
            i >= a.w_size &&
              (c === 0 &&
                (_e(a.head),
                (a.strstart = 0),
                (a.block_start = 0),
                (a.insert = 0)),
              (m = new t.Buf8(a.w_size)),
              t.arraySet(m, n, i - a.w_size, a.w_size, 0),
              (n = m),
              (i = a.w_size)),
            l = e.avail_in,
            u = e.next_in,
            f = e.input,
            e.avail_in = i,
            e.next_in = 0,
            e.input = n,
            I(a);
          a.lookahead >= A;
        ) {
          ((o = a.strstart), (s = a.lookahead - (A - 1)));
          do
            ((a.ins_h =
              ((a.ins_h << a.hash_shift) ^ a.window[o + A - 1]) & a.hash_mask),
              (a.prev[o & a.w_mask] = a.head[a.ins_h]),
              (a.head[a.ins_h] = o),
              o++);
          while (--s);
          ((a.strstart = o), (a.lookahead = A - 1), I(a));
        }
        return (
          (a.strstart += a.lookahead),
          (a.block_start = a.strstart),
          (a.insert = a.lookahead),
          (a.lookahead = 0),
          (a.match_length = a.prev_length = A - 1),
          (a.match_available = 0),
          (e.next_in = u),
          (e.input = f),
          (e.avail_in = l),
          (a.wrap = c),
          d
        );
      }
      ((e.deflateInit = Oe),
        (e.deflateInit2 = De),
        (e.deflateReset = Te),
        (e.deflateResetKeep = H),
        (e.deflateSetHeader = Ee),
        (e.deflate = ke),
        (e.deflateEnd = Ae),
        (e.deflateSetDictionary = je),
        (e.deflateInfo = `pako deflate (from Nodeca project)`));
    }),
    kt = t((e) => {
      var t = Ct(),
        n = !0,
        r = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        n = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        r = !1;
      }
      for (var i = new t.Buf8(256), a = 0; a < 256; a++)
        i[a] =
          a >= 252
            ? 6
            : a >= 248
              ? 5
              : a >= 240
                ? 4
                : a >= 224
                  ? 3
                  : a >= 192
                    ? 2
                    : 1;
      ((i[254] = i[254] = 1),
        (e.string2buf = function (e) {
          var n,
            r,
            i,
            a,
            o,
            s = e.length,
            c = 0;
          for (a = 0; a < s; a++)
            ((r = e.charCodeAt(a)),
              (r & 64512) == 55296 &&
                a + 1 < s &&
                ((i = e.charCodeAt(a + 1)),
                (i & 64512) == 56320 &&
                  ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), a++)),
              (c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4));
          for (n = new t.Buf8(c), o = 0, a = 0; o < c; a++)
            ((r = e.charCodeAt(a)),
              (r & 64512) == 55296 &&
                a + 1 < s &&
                ((i = e.charCodeAt(a + 1)),
                (i & 64512) == 56320 &&
                  ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), a++)),
              r < 128
                ? (n[o++] = r)
                : r < 2048
                  ? ((n[o++] = 192 | (r >>> 6)), (n[o++] = 128 | (r & 63)))
                  : r < 65536
                    ? ((n[o++] = 224 | (r >>> 12)),
                      (n[o++] = 128 | ((r >>> 6) & 63)),
                      (n[o++] = 128 | (r & 63)))
                    : ((n[o++] = 240 | (r >>> 18)),
                      (n[o++] = 128 | ((r >>> 12) & 63)),
                      (n[o++] = 128 | ((r >>> 6) & 63)),
                      (n[o++] = 128 | (r & 63))));
          return n;
        }));
      function o(e, i) {
        if (i < 65534 && ((e.subarray && r) || (!e.subarray && n)))
          return String.fromCharCode.apply(null, t.shrinkBuf(e, i));
        for (var a = ``, o = 0; o < i; o++) a += String.fromCharCode(e[o]);
        return a;
      }
      ((e.buf2binstring = function (e) {
        return o(e, e.length);
      }),
        (e.binstring2buf = function (e) {
          for (var n = new t.Buf8(e.length), r = 0, i = n.length; r < i; r++)
            n[r] = e.charCodeAt(r);
          return n;
        }),
        (e.buf2string = function (e, t) {
          var n,
            r,
            a,
            s,
            c = t || e.length,
            l = Array(c * 2);
          for (r = 0, n = 0; n < c;) {
            if (((a = e[n++]), a < 128)) {
              l[r++] = a;
              continue;
            }
            if (((s = i[a]), s > 4)) {
              ((l[r++] = 65533), (n += s - 1));
              continue;
            }
            for (a &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && n < c;)
              ((a = (a << 6) | (e[n++] & 63)), s--);
            if (s > 1) {
              l[r++] = 65533;
              continue;
            }
            a < 65536
              ? (l[r++] = a)
              : ((a -= 65536),
                (l[r++] = 55296 | ((a >> 10) & 1023)),
                (l[r++] = 56320 | (a & 1023)));
          }
          return o(l, r);
        }),
        (e.utf8border = function (e, t) {
          var n;
          for (
            t ||= e.length, t > e.length && (t = e.length), n = t - 1;
            n >= 0 && (e[n] & 192) == 128;
          )
            n--;
          return n < 0 || n === 0 ? t : n + i[e[n]] > t ? n : t;
        }));
    }),
    At = t((e, t) => {
      function n() {
        ((this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ``),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0));
      }
      t.exports = n;
    }),
    jt = t((e) => {
      var t = Ot(),
        n = Ct(),
        r = kt(),
        i = Dt(),
        a = At(),
        o = Object.prototype.toString,
        s = 0,
        c = 4,
        l = 0,
        u = 1,
        d = 2,
        f = -1,
        p = 0,
        m = 8;
      function h(e) {
        if (!(this instanceof h)) return new h(e);
        this.options = n.assign(
          {
            level: f,
            method: m,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: p,
            to: ``,
          },
          e || {},
        );
        var s = this.options;
        (s.raw && s.windowBits > 0
          ? (s.windowBits = -s.windowBits)
          : s.gzip &&
            s.windowBits > 0 &&
            s.windowBits < 16 &&
            (s.windowBits += 16),
          (this.err = 0),
          (this.msg = ``),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new a()),
          (this.strm.avail_out = 0));
        var c = t.deflateInit2(
          this.strm,
          s.level,
          s.method,
          s.windowBits,
          s.memLevel,
          s.strategy,
        );
        if (c !== l) throw Error(i[c]);
        if (
          (s.header && t.deflateSetHeader(this.strm, s.header), s.dictionary)
        ) {
          var u =
            typeof s.dictionary == `string`
              ? r.string2buf(s.dictionary)
              : o.call(s.dictionary) === `[object ArrayBuffer]`
                ? new Uint8Array(s.dictionary)
                : s.dictionary;
          if (((c = t.deflateSetDictionary(this.strm, u)), c !== l))
            throw Error(i[c]);
          this._dict_set = !0;
        }
      }
      ((h.prototype.push = function (e, i) {
        var a = this.strm,
          f = this.options.chunkSize,
          p,
          m;
        if (this.ended) return !1;
        ((m = i === ~~i ? i : i === !0 ? c : s),
          (a.input =
            typeof e == `string`
              ? r.string2buf(e)
              : o.call(e) === `[object ArrayBuffer]`
                ? new Uint8Array(e)
                : e),
          (a.next_in = 0),
          (a.avail_in = a.input.length));
        do {
          if (
            (a.avail_out === 0 &&
              ((a.output = new n.Buf8(f)), (a.next_out = 0), (a.avail_out = f)),
            (p = t.deflate(a, m)),
            p !== u && p !== l)
          )
            return (this.onEnd(p), (this.ended = !0), !1);
          (a.avail_out === 0 || (a.avail_in === 0 && (m === c || m === d))) &&
            (this.options.to === `string`
              ? this.onData(r.buf2binstring(n.shrinkBuf(a.output, a.next_out)))
              : this.onData(n.shrinkBuf(a.output, a.next_out)));
        } while ((a.avail_in > 0 || a.avail_out === 0) && p !== u);
        return m === c
          ? ((p = t.deflateEnd(this.strm)),
            this.onEnd(p),
            (this.ended = !0),
            p === l)
          : m !== d || (this.onEnd(l), (a.avail_out = 0), !0);
      }),
        (h.prototype.onData = function (e) {
          this.chunks.push(e);
        }),
        (h.prototype.onEnd = function (e) {
          (e === l &&
            (this.result =
              this.options.to === `string`
                ? this.chunks.join(``)
                : n.flattenChunks(this.chunks)),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg));
        }));
      function g(e, t) {
        var n = new h(t);
        if ((n.push(e, !0), n.err)) throw n.msg || i[n.err];
        return n.result;
      }
      function _(e, t) {
        return ((t ||= {}), (t.raw = !0), g(e, t));
      }
      function v(e, t) {
        return ((t ||= {}), (t.gzip = !0), g(e, t));
      }
      ((e.Deflate = h), (e.deflate = g), (e.deflateRaw = _), (e.gzip = v));
    }),
    Mt = t((e, t) => {
      t.exports = function (e, t) {
        var n = e.state,
          r = e.next_in,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w,
          T = e.input,
          E;
        ((i = r + (e.avail_in - 5)),
          (a = e.next_out),
          (E = e.output),
          (o = a - (t - e.avail_out)),
          (s = a + (e.avail_out - 257)),
          (c = n.dmax),
          (l = n.wsize),
          (u = n.whave),
          (d = n.wnext),
          (f = n.window),
          (p = n.hold),
          (m = n.bits),
          (h = n.lencode),
          (g = n.distcode),
          (_ = (1 << n.lenbits) - 1),
          (v = (1 << n.distbits) - 1));
        top: do {
          (m < 15 &&
            ((p += T[r++] << m), (m += 8), (p += T[r++] << m), (m += 8)),
            (y = h[p & _]));
          dolen: for (;;) {
            if (
              ((b = y >>> 24),
              (p >>>= b),
              (m -= b),
              (b = (y >>> 16) & 255),
              b === 0)
            )
              E[a++] = y & 65535;
            else if (b & 16) {
              ((x = y & 65535),
                (b &= 15),
                b &&
                  (m < b && ((p += T[r++] << m), (m += 8)),
                  (x += p & ((1 << b) - 1)),
                  (p >>>= b),
                  (m -= b)),
                m < 15 &&
                  ((p += T[r++] << m), (m += 8), (p += T[r++] << m), (m += 8)),
                (y = g[p & v]));
              dodist: for (;;) {
                if (
                  ((b = y >>> 24),
                  (p >>>= b),
                  (m -= b),
                  (b = (y >>> 16) & 255),
                  b & 16)
                ) {
                  if (
                    ((S = y & 65535),
                    (b &= 15),
                    m < b &&
                      ((p += T[r++] << m),
                      (m += 8),
                      m < b && ((p += T[r++] << m), (m += 8))),
                    (S += p & ((1 << b) - 1)),
                    S > c)
                  ) {
                    ((e.msg = `invalid distance too far back`), (n.mode = 30));
                    break top;
                  }
                  if (((p >>>= b), (m -= b), (b = a - o), S > b)) {
                    if (((b = S - b), b > u && n.sane)) {
                      ((e.msg = `invalid distance too far back`),
                        (n.mode = 30));
                      break top;
                    }
                    if (((C = 0), (w = f), d === 0)) {
                      if (((C += l - b), b < x)) {
                        x -= b;
                        do E[a++] = f[C++];
                        while (--b);
                        ((C = a - S), (w = E));
                      }
                    } else if (d < b) {
                      if (((C += l + d - b), (b -= d), b < x)) {
                        x -= b;
                        do E[a++] = f[C++];
                        while (--b);
                        if (((C = 0), d < x)) {
                          ((b = d), (x -= b));
                          do E[a++] = f[C++];
                          while (--b);
                          ((C = a - S), (w = E));
                        }
                      }
                    } else if (((C += d - b), b < x)) {
                      x -= b;
                      do E[a++] = f[C++];
                      while (--b);
                      ((C = a - S), (w = E));
                    }
                    for (; x > 2;)
                      ((E[a++] = w[C++]),
                        (E[a++] = w[C++]),
                        (E[a++] = w[C++]),
                        (x -= 3));
                    x && ((E[a++] = w[C++]), x > 1 && (E[a++] = w[C++]));
                  } else {
                    C = a - S;
                    do
                      ((E[a++] = E[C++]),
                        (E[a++] = E[C++]),
                        (E[a++] = E[C++]),
                        (x -= 3));
                    while (x > 2);
                    x && ((E[a++] = E[C++]), x > 1 && (E[a++] = E[C++]));
                  }
                } else if (b & 64) {
                  ((e.msg = `invalid distance code`), (n.mode = 30));
                  break top;
                } else {
                  y = g[(y & 65535) + (p & ((1 << b) - 1))];
                  continue dodist;
                }
                break;
              }
            } else if (!(b & 64)) {
              y = h[(y & 65535) + (p & ((1 << b) - 1))];
              continue dolen;
            } else if (b & 32) {
              n.mode = 12;
              break top;
            } else {
              ((e.msg = `invalid literal/length code`), (n.mode = 30));
              break top;
            }
            break;
          }
        } while (r < i && a < s);
        ((x = m >> 3),
          (r -= x),
          (m -= x << 3),
          (p &= (1 << m) - 1),
          (e.next_in = r),
          (e.next_out = a),
          (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)),
          (e.avail_out = a < s ? 257 + (s - a) : 257 - (a - s)),
          (n.hold = p),
          (n.bits = m));
      };
    }),
    Nt = t((e, t) => {
      var n = Ct(),
        r = 15,
        i = 852,
        a = 592,
        o = 0,
        s = 1,
        c = 2,
        l = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ],
        u = [
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ],
        d = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ],
        f = [
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ];
      t.exports = function (e, t, p, m, h, g, _, v) {
        var y = v.bits,
          b = 0,
          x = 0,
          S = 0,
          C = 0,
          w = 0,
          T = 0,
          E = 0,
          D = 0,
          ee = 0,
          O = 0,
          te,
          k,
          A,
          ne,
          re,
          ie = null,
          ae = 0,
          oe,
          se = new n.Buf16(r + 1),
          ce = new n.Buf16(r + 1),
          le = null,
          ue = 0,
          j,
          M,
          de;
        for (b = 0; b <= r; b++) se[b] = 0;
        for (x = 0; x < m; x++) se[t[p + x]]++;
        for (w = y, C = r; C >= 1 && se[C] === 0; C--);
        if ((w > C && (w = C), C === 0))
          return ((h[g++] = 20971520), (h[g++] = 20971520), (v.bits = 1), 0);
        for (S = 1; S < C && se[S] === 0; S++);
        for (w < S && (w = S), D = 1, b = 1; b <= r; b++)
          if (((D <<= 1), (D -= se[b]), D < 0)) return -1;
        if (D > 0 && (e === o || C !== 1)) return -1;
        for (ce[1] = 0, b = 1; b < r; b++) ce[b + 1] = ce[b] + se[b];
        for (x = 0; x < m; x++) t[p + x] !== 0 && (_[ce[t[p + x]]++] = x);
        if (
          (e === o
            ? ((ie = le = _), (oe = 19))
            : e === s
              ? ((ie = l), (ae -= 257), (le = u), (ue -= 257), (oe = 256))
              : ((ie = d), (le = f), (oe = -1)),
          (O = 0),
          (x = 0),
          (b = S),
          (re = g),
          (T = w),
          (E = 0),
          (A = -1),
          (ee = 1 << w),
          (ne = ee - 1),
          (e === s && ee > i) || (e === c && ee > a))
        )
          return 1;
        for (;;) {
          ((j = b - E),
            _[x] < oe
              ? ((M = 0), (de = _[x]))
              : _[x] > oe
                ? ((M = le[ue + _[x]]), (de = ie[ae + _[x]]))
                : ((M = 96), (de = 0)),
            (te = 1 << (b - E)),
            (k = 1 << T),
            (S = k));
          do
            ((k -= te),
              (h[re + (O >> E) + k] = (j << 24) | (M << 16) | de | 0));
          while (k !== 0);
          for (te = 1 << (b - 1); O & te;) te >>= 1;
          if (
            (te === 0 ? (O = 0) : ((O &= te - 1), (O += te)),
            x++,
            --se[b] === 0)
          ) {
            if (b === C) break;
            b = t[p + _[x]];
          }
          if (b > w && (O & ne) !== A) {
            for (
              E === 0 && (E = w), re += S, T = b - E, D = 1 << T;
              T + E < C && ((D -= se[T + E]), !(D <= 0));
            )
              (T++, (D <<= 1));
            if (((ee += 1 << T), (e === s && ee > i) || (e === c && ee > a)))
              return 1;
            ((A = O & ne), (h[A] = (w << 24) | (T << 16) | (re - g) | 0));
          }
        }
        return (
          O !== 0 && (h[re + O] = ((b - E) << 24) | 4194304),
          (v.bits = w),
          0
        );
      };
    }),
    Pt = t((e) => {
      var t = Ct(),
        n = Tt(),
        r = Et(),
        i = Mt(),
        a = Nt(),
        o = 0,
        s = 1,
        c = 2,
        l = 4,
        u = 5,
        d = 6,
        f = 0,
        p = 1,
        m = 2,
        h = -2,
        g = -3,
        _ = -4,
        v = -5,
        y = 8,
        b = 1,
        x = 2,
        S = 3,
        C = 4,
        w = 5,
        T = 6,
        E = 7,
        D = 8,
        ee = 9,
        O = 10,
        te = 11,
        k = 12,
        A = 13,
        ne = 14,
        re = 15,
        ie = 16,
        ae = 17,
        oe = 18,
        se = 19,
        ce = 20,
        le = 21,
        ue = 22,
        j = 23,
        M = 24,
        de = 25,
        fe = 26,
        pe = 27,
        me = 28,
        he = 29,
        ge = 30,
        _e = 31,
        ve = 32,
        ye = 852,
        N = 592,
        P = 15;
      function be(e) {
        return (
          ((e >>> 24) & 255) +
          ((e >>> 8) & 65280) +
          ((e & 65280) << 8) +
          ((e & 255) << 24)
        );
      }
      function F() {
        ((this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new t.Buf16(320)),
          (this.work = new t.Buf16(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0));
      }
      function I(e) {
        var n;
        return !e || !e.state
          ? h
          : ((n = e.state),
            (e.total_in = e.total_out = n.total = 0),
            (e.msg = ``),
            n.wrap && (e.adler = n.wrap & 1),
            (n.mode = b),
            (n.last = 0),
            (n.havedict = 0),
            (n.dmax = 32768),
            (n.head = null),
            (n.hold = 0),
            (n.bits = 0),
            (n.lencode = n.lendyn = new t.Buf32(ye)),
            (n.distcode = n.distdyn = new t.Buf32(N)),
            (n.sane = 1),
            (n.back = -1),
            f);
      }
      function L(e) {
        var t;
        return !e || !e.state
          ? h
          : ((t = e.state), (t.wsize = 0), (t.whave = 0), (t.wnext = 0), I(e));
      }
      function R(e, t) {
        var n, r;
        return !e ||
          !e.state ||
          ((r = e.state),
          t < 0
            ? ((n = 0), (t = -t))
            : ((n = (t >> 4) + 1), t < 48 && (t &= 15)),
          t && (t < 8 || t > 15))
          ? h
          : (r.window !== null && r.wbits !== t && (r.window = null),
            (r.wrap = n),
            (r.wbits = t),
            L(e));
      }
      function xe(e, t) {
        var n, r;
        return e
          ? ((r = new F()),
            (e.state = r),
            (r.window = null),
            (n = R(e, t)),
            n !== f && (e.state = null),
            n)
          : h;
      }
      function z(e) {
        return xe(e, P);
      }
      var B = !0,
        Se,
        Ce;
      function we(e) {
        if (B) {
          var n;
          for (Se = new t.Buf32(512), Ce = new t.Buf32(32), n = 0; n < 144;)
            e.lens[n++] = 8;
          for (; n < 256;) e.lens[n++] = 9;
          for (; n < 280;) e.lens[n++] = 7;
          for (; n < 288;) e.lens[n++] = 8;
          for (a(s, e.lens, 0, 288, Se, 0, e.work, { bits: 9 }), n = 0; n < 32;)
            e.lens[n++] = 5;
          (a(c, e.lens, 0, 32, Ce, 0, e.work, { bits: 5 }), (B = !1));
        }
        ((e.lencode = Se),
          (e.lenbits = 9),
          (e.distcode = Ce),
          (e.distbits = 5));
      }
      function V(e, n, r, i) {
        var a,
          o = e.state;
        return (
          o.window === null &&
            ((o.wsize = 1 << o.wbits),
            (o.wnext = 0),
            (o.whave = 0),
            (o.window = new t.Buf8(o.wsize))),
          i >= o.wsize
            ? (t.arraySet(o.window, n, r - o.wsize, o.wsize, 0),
              (o.wnext = 0),
              (o.whave = o.wsize))
            : ((a = o.wsize - o.wnext),
              a > i && (a = i),
              t.arraySet(o.window, n, r - i, a, o.wnext),
              (i -= a),
              i
                ? (t.arraySet(o.window, n, r - i, i, 0),
                  (o.wnext = i),
                  (o.whave = o.wsize))
                : ((o.wnext += a),
                  o.wnext === o.wsize && (o.wnext = 0),
                  o.whave < o.wsize && (o.whave += a))),
          0
        );
      }
      function H(e, ye) {
        var N,
          P,
          F,
          I,
          L,
          R,
          xe,
          z,
          B,
          Se,
          Ce,
          H,
          Te,
          Ee,
          De = 0,
          Oe,
          ke,
          Ae,
          je,
          Me,
          Ne,
          Pe,
          Fe,
          Ie = new t.Buf8(4),
          Le,
          Re,
          ze = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ];
        if (!e || !e.state || !e.output || (!e.input && e.avail_in !== 0))
          return h;
        ((N = e.state),
          N.mode === k && (N.mode = A),
          (L = e.next_out),
          (F = e.output),
          (xe = e.avail_out),
          (I = e.next_in),
          (P = e.input),
          (R = e.avail_in),
          (z = N.hold),
          (B = N.bits),
          (Se = R),
          (Ce = xe),
          (Fe = f));
        inf_leave: for (;;)
          switch (N.mode) {
            case b:
              if (N.wrap === 0) {
                N.mode = A;
                break;
              }
              for (; B < 16;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              if (N.wrap & 2 && z === 35615) {
                ((N.check = 0),
                  (Ie[0] = z & 255),
                  (Ie[1] = (z >>> 8) & 255),
                  (N.check = r(N.check, Ie, 2, 0)),
                  (z = 0),
                  (B = 0),
                  (N.mode = x));
                break;
              }
              if (
                ((N.flags = 0),
                N.head && (N.head.done = !1),
                !(N.wrap & 1) || (((z & 255) << 8) + (z >> 8)) % 31)
              ) {
                ((e.msg = `incorrect header check`), (N.mode = ge));
                break;
              }
              if ((z & 15) !== y) {
                ((e.msg = `unknown compression method`), (N.mode = ge));
                break;
              }
              if (((z >>>= 4), (B -= 4), (Pe = (z & 15) + 8), N.wbits === 0))
                N.wbits = Pe;
              else if (Pe > N.wbits) {
                ((e.msg = `invalid window size`), (N.mode = ge));
                break;
              }
              ((N.dmax = 1 << Pe),
                (e.adler = N.check = 1),
                (N.mode = z & 512 ? O : k),
                (z = 0),
                (B = 0));
              break;
            case x:
              for (; B < 16;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              if (((N.flags = z), (N.flags & 255) !== y)) {
                ((e.msg = `unknown compression method`), (N.mode = ge));
                break;
              }
              if (N.flags & 57344) {
                ((e.msg = `unknown header flags set`), (N.mode = ge));
                break;
              }
              (N.head && (N.head.text = (z >> 8) & 1),
                N.flags & 512 &&
                  ((Ie[0] = z & 255),
                  (Ie[1] = (z >>> 8) & 255),
                  (N.check = r(N.check, Ie, 2, 0))),
                (z = 0),
                (B = 0),
                (N.mode = S));
            case S:
              for (; B < 32;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              (N.head && (N.head.time = z),
                N.flags & 512 &&
                  ((Ie[0] = z & 255),
                  (Ie[1] = (z >>> 8) & 255),
                  (Ie[2] = (z >>> 16) & 255),
                  (Ie[3] = (z >>> 24) & 255),
                  (N.check = r(N.check, Ie, 4, 0))),
                (z = 0),
                (B = 0),
                (N.mode = C));
            case C:
              for (; B < 16;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              (N.head && ((N.head.xflags = z & 255), (N.head.os = z >> 8)),
                N.flags & 512 &&
                  ((Ie[0] = z & 255),
                  (Ie[1] = (z >>> 8) & 255),
                  (N.check = r(N.check, Ie, 2, 0))),
                (z = 0),
                (B = 0),
                (N.mode = w));
            case w:
              if (N.flags & 1024) {
                for (; B < 16;) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                ((N.length = z),
                  N.head && (N.head.extra_len = z),
                  N.flags & 512 &&
                    ((Ie[0] = z & 255),
                    (Ie[1] = (z >>> 8) & 255),
                    (N.check = r(N.check, Ie, 2, 0))),
                  (z = 0),
                  (B = 0));
              } else N.head && (N.head.extra = null);
              N.mode = T;
            case T:
              if (
                N.flags & 1024 &&
                ((H = N.length),
                H > R && (H = R),
                H &&
                  (N.head &&
                    ((Pe = N.head.extra_len - N.length),
                    N.head.extra || (N.head.extra = Array(N.head.extra_len)),
                    t.arraySet(N.head.extra, P, I, H, Pe)),
                  N.flags & 512 && (N.check = r(N.check, P, H, I)),
                  (R -= H),
                  (I += H),
                  (N.length -= H)),
                N.length)
              )
                break inf_leave;
              ((N.length = 0), (N.mode = E));
            case E:
              if (N.flags & 2048) {
                if (R === 0) break inf_leave;
                H = 0;
                do
                  ((Pe = P[I + H++]),
                    N.head &&
                      Pe &&
                      N.length < 65536 &&
                      (N.head.name += String.fromCharCode(Pe)));
                while (Pe && H < R);
                if (
                  (N.flags & 512 && (N.check = r(N.check, P, H, I)),
                  (R -= H),
                  (I += H),
                  Pe)
                )
                  break inf_leave;
              } else N.head && (N.head.name = null);
              ((N.length = 0), (N.mode = D));
            case D:
              if (N.flags & 4096) {
                if (R === 0) break inf_leave;
                H = 0;
                do
                  ((Pe = P[I + H++]),
                    N.head &&
                      Pe &&
                      N.length < 65536 &&
                      (N.head.comment += String.fromCharCode(Pe)));
                while (Pe && H < R);
                if (
                  (N.flags & 512 && (N.check = r(N.check, P, H, I)),
                  (R -= H),
                  (I += H),
                  Pe)
                )
                  break inf_leave;
              } else N.head && (N.head.comment = null);
              N.mode = ee;
            case ee:
              if (N.flags & 512) {
                for (; B < 16;) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                if (z !== (N.check & 65535)) {
                  ((e.msg = `header crc mismatch`), (N.mode = ge));
                  break;
                }
                ((z = 0), (B = 0));
              }
              (N.head &&
                ((N.head.hcrc = (N.flags >> 9) & 1), (N.head.done = !0)),
                (e.adler = N.check = 0),
                (N.mode = k));
              break;
            case O:
              for (; B < 32;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              ((e.adler = N.check = be(z)), (z = 0), (B = 0), (N.mode = te));
            case te:
              if (N.havedict === 0)
                return (
                  (e.next_out = L),
                  (e.avail_out = xe),
                  (e.next_in = I),
                  (e.avail_in = R),
                  (N.hold = z),
                  (N.bits = B),
                  m
                );
              ((e.adler = N.check = 1), (N.mode = k));
            case k:
              if (ye === u || ye === d) break inf_leave;
            case A:
              if (N.last) {
                ((z >>>= B & 7), (B -= B & 7), (N.mode = pe));
                break;
              }
              for (; B < 3;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              switch (((N.last = z & 1), (z >>>= 1), --B, z & 3)) {
                case 0:
                  N.mode = ne;
                  break;
                case 1:
                  if ((we(N), (N.mode = ce), ye === d)) {
                    ((z >>>= 2), (B -= 2));
                    break inf_leave;
                  }
                  break;
                case 2:
                  N.mode = ae;
                  break;
                case 3:
                  ((e.msg = `invalid block type`), (N.mode = ge));
              }
              ((z >>>= 2), (B -= 2));
              break;
            case ne:
              for (z >>>= B & 7, B -= B & 7; B < 32;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              if ((z & 65535) != ((z >>> 16) ^ 65535)) {
                ((e.msg = `invalid stored block lengths`), (N.mode = ge));
                break;
              }
              if (
                ((N.length = z & 65535),
                (z = 0),
                (B = 0),
                (N.mode = re),
                ye === d)
              )
                break inf_leave;
            case re:
              N.mode = ie;
            case ie:
              if (((H = N.length), H)) {
                if ((H > R && (H = R), H > xe && (H = xe), H === 0))
                  break inf_leave;
                (t.arraySet(F, P, I, H, L),
                  (R -= H),
                  (I += H),
                  (xe -= H),
                  (L += H),
                  (N.length -= H));
                break;
              }
              N.mode = k;
              break;
            case ae:
              for (; B < 14;) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              if (
                ((N.nlen = (z & 31) + 257),
                (z >>>= 5),
                (B -= 5),
                (N.ndist = (z & 31) + 1),
                (z >>>= 5),
                (B -= 5),
                (N.ncode = (z & 15) + 4),
                (z >>>= 4),
                (B -= 4),
                N.nlen > 286 || N.ndist > 30)
              ) {
                ((e.msg = `too many length or distance symbols`),
                  (N.mode = ge));
                break;
              }
              ((N.have = 0), (N.mode = oe));
            case oe:
              for (; N.have < N.ncode;) {
                for (; B < 3;) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                ((N.lens[ze[N.have++]] = z & 7), (z >>>= 3), (B -= 3));
              }
              for (; N.have < 19;) N.lens[ze[N.have++]] = 0;
              if (
                ((N.lencode = N.lendyn),
                (N.lenbits = 7),
                (Le = { bits: N.lenbits }),
                (Fe = a(o, N.lens, 0, 19, N.lencode, 0, N.work, Le)),
                (N.lenbits = Le.bits),
                Fe)
              ) {
                ((e.msg = `invalid code lengths set`), (N.mode = ge));
                break;
              }
              ((N.have = 0), (N.mode = se));
            case se:
              for (; N.have < N.nlen + N.ndist;) {
                for (
                  ;
                  (De = N.lencode[z & ((1 << N.lenbits) - 1)]),
                    (Oe = De >>> 24),
                    (ke = (De >>> 16) & 255),
                    (Ae = De & 65535),
                    !(Oe <= B);
                ) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                if (Ae < 16) ((z >>>= Oe), (B -= Oe), (N.lens[N.have++] = Ae));
                else {
                  if (Ae === 16) {
                    for (Re = Oe + 2; B < Re;) {
                      if (R === 0) break inf_leave;
                      (R--, (z += P[I++] << B), (B += 8));
                    }
                    if (((z >>>= Oe), (B -= Oe), N.have === 0)) {
                      ((e.msg = `invalid bit length repeat`), (N.mode = ge));
                      break;
                    }
                    ((Pe = N.lens[N.have - 1]),
                      (H = 3 + (z & 3)),
                      (z >>>= 2),
                      (B -= 2));
                  } else if (Ae === 17) {
                    for (Re = Oe + 3; B < Re;) {
                      if (R === 0) break inf_leave;
                      (R--, (z += P[I++] << B), (B += 8));
                    }
                    ((z >>>= Oe),
                      (B -= Oe),
                      (Pe = 0),
                      (H = 3 + (z & 7)),
                      (z >>>= 3),
                      (B -= 3));
                  } else {
                    for (Re = Oe + 7; B < Re;) {
                      if (R === 0) break inf_leave;
                      (R--, (z += P[I++] << B), (B += 8));
                    }
                    ((z >>>= Oe),
                      (B -= Oe),
                      (Pe = 0),
                      (H = 11 + (z & 127)),
                      (z >>>= 7),
                      (B -= 7));
                  }
                  if (N.have + H > N.nlen + N.ndist) {
                    ((e.msg = `invalid bit length repeat`), (N.mode = ge));
                    break;
                  }
                  for (; H--;) N.lens[N.have++] = Pe;
                }
              }
              if (N.mode === ge) break;
              if (N.lens[256] === 0) {
                ((e.msg = `invalid code -- missing end-of-block`),
                  (N.mode = ge));
                break;
              }
              if (
                ((N.lenbits = 9),
                (Le = { bits: N.lenbits }),
                (Fe = a(s, N.lens, 0, N.nlen, N.lencode, 0, N.work, Le)),
                (N.lenbits = Le.bits),
                Fe)
              ) {
                ((e.msg = `invalid literal/lengths set`), (N.mode = ge));
                break;
              }
              if (
                ((N.distbits = 6),
                (N.distcode = N.distdyn),
                (Le = { bits: N.distbits }),
                (Fe = a(c, N.lens, N.nlen, N.ndist, N.distcode, 0, N.work, Le)),
                (N.distbits = Le.bits),
                Fe)
              ) {
                ((e.msg = `invalid distances set`), (N.mode = ge));
                break;
              }
              if (((N.mode = ce), ye === d)) break inf_leave;
            case ce:
              N.mode = le;
            case le:
              if (R >= 6 && xe >= 258) {
                ((e.next_out = L),
                  (e.avail_out = xe),
                  (e.next_in = I),
                  (e.avail_in = R),
                  (N.hold = z),
                  (N.bits = B),
                  i(e, Ce),
                  (L = e.next_out),
                  (F = e.output),
                  (xe = e.avail_out),
                  (I = e.next_in),
                  (P = e.input),
                  (R = e.avail_in),
                  (z = N.hold),
                  (B = N.bits),
                  N.mode === k && (N.back = -1));
                break;
              }
              for (
                N.back = 0;
                (De = N.lencode[z & ((1 << N.lenbits) - 1)]),
                  (Oe = De >>> 24),
                  (ke = (De >>> 16) & 255),
                  (Ae = De & 65535),
                  !(Oe <= B);
              ) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              if (ke && !(ke & 240)) {
                for (
                  je = Oe, Me = ke, Ne = Ae;
                  (De = N.lencode[Ne + ((z & ((1 << (je + Me)) - 1)) >> je)]),
                    (Oe = De >>> 24),
                    (ke = (De >>> 16) & 255),
                    (Ae = De & 65535),
                    !(je + Oe <= B);
                ) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                ((z >>>= je), (B -= je), (N.back += je));
              }
              if (
                ((z >>>= Oe),
                (B -= Oe),
                (N.back += Oe),
                (N.length = Ae),
                ke === 0)
              ) {
                N.mode = fe;
                break;
              }
              if (ke & 32) {
                ((N.back = -1), (N.mode = k));
                break;
              }
              if (ke & 64) {
                ((e.msg = `invalid literal/length code`), (N.mode = ge));
                break;
              }
              ((N.extra = ke & 15), (N.mode = ue));
            case ue:
              if (N.extra) {
                for (Re = N.extra; B < Re;) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                ((N.length += z & ((1 << N.extra) - 1)),
                  (z >>>= N.extra),
                  (B -= N.extra),
                  (N.back += N.extra));
              }
              ((N.was = N.length), (N.mode = j));
            case j:
              for (
                ;
                (De = N.distcode[z & ((1 << N.distbits) - 1)]),
                  (Oe = De >>> 24),
                  (ke = (De >>> 16) & 255),
                  (Ae = De & 65535),
                  !(Oe <= B);
              ) {
                if (R === 0) break inf_leave;
                (R--, (z += P[I++] << B), (B += 8));
              }
              if (!(ke & 240)) {
                for (
                  je = Oe, Me = ke, Ne = Ae;
                  (De = N.distcode[Ne + ((z & ((1 << (je + Me)) - 1)) >> je)]),
                    (Oe = De >>> 24),
                    (ke = (De >>> 16) & 255),
                    (Ae = De & 65535),
                    !(je + Oe <= B);
                ) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                ((z >>>= je), (B -= je), (N.back += je));
              }
              if (((z >>>= Oe), (B -= Oe), (N.back += Oe), ke & 64)) {
                ((e.msg = `invalid distance code`), (N.mode = ge));
                break;
              }
              ((N.offset = Ae), (N.extra = ke & 15), (N.mode = M));
            case M:
              if (N.extra) {
                for (Re = N.extra; B < Re;) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                ((N.offset += z & ((1 << N.extra) - 1)),
                  (z >>>= N.extra),
                  (B -= N.extra),
                  (N.back += N.extra));
              }
              if (N.offset > N.dmax) {
                ((e.msg = `invalid distance too far back`), (N.mode = ge));
                break;
              }
              N.mode = de;
            case de:
              if (xe === 0) break inf_leave;
              if (((H = Ce - xe), N.offset > H)) {
                if (((H = N.offset - H), H > N.whave && N.sane)) {
                  ((e.msg = `invalid distance too far back`), (N.mode = ge));
                  break;
                }
                (H > N.wnext
                  ? ((H -= N.wnext), (Te = N.wsize - H))
                  : (Te = N.wnext - H),
                  H > N.length && (H = N.length),
                  (Ee = N.window));
              } else ((Ee = F), (Te = L - N.offset), (H = N.length));
              (H > xe && (H = xe), (xe -= H), (N.length -= H));
              do F[L++] = Ee[Te++];
              while (--H);
              N.length === 0 && (N.mode = le);
              break;
            case fe:
              if (xe === 0) break inf_leave;
              ((F[L++] = N.length), xe--, (N.mode = le));
              break;
            case pe:
              if (N.wrap) {
                for (; B < 32;) {
                  if (R === 0) break inf_leave;
                  (R--, (z |= P[I++] << B), (B += 8));
                }
                if (
                  ((Ce -= xe),
                  (e.total_out += Ce),
                  (N.total += Ce),
                  Ce &&
                    (e.adler = N.check =
                      N.flags
                        ? r(N.check, F, Ce, L - Ce)
                        : n(N.check, F, Ce, L - Ce)),
                  (Ce = xe),
                  (N.flags ? z : be(z)) !== N.check)
                ) {
                  ((e.msg = `incorrect data check`), (N.mode = ge));
                  break;
                }
                ((z = 0), (B = 0));
              }
              N.mode = me;
            case me:
              if (N.wrap && N.flags) {
                for (; B < 32;) {
                  if (R === 0) break inf_leave;
                  (R--, (z += P[I++] << B), (B += 8));
                }
                if (z !== (N.total & 4294967295)) {
                  ((e.msg = `incorrect length check`), (N.mode = ge));
                  break;
                }
                ((z = 0), (B = 0));
              }
              N.mode = he;
            case he:
              Fe = p;
              break inf_leave;
            case ge:
              Fe = g;
              break inf_leave;
            case _e:
              return _;
            case ve:
            default:
              return h;
          }
        return (
          (e.next_out = L),
          (e.avail_out = xe),
          (e.next_in = I),
          (e.avail_in = R),
          (N.hold = z),
          (N.bits = B),
          (N.wsize ||
            (Ce !== e.avail_out && N.mode < ge && (N.mode < pe || ye !== l))) &&
          V(e, e.output, e.next_out, Ce - e.avail_out)
            ? ((N.mode = _e), _)
            : ((Se -= e.avail_in),
              (Ce -= e.avail_out),
              (e.total_in += Se),
              (e.total_out += Ce),
              (N.total += Ce),
              N.wrap &&
                Ce &&
                (e.adler = N.check =
                  N.flags
                    ? r(N.check, F, Ce, e.next_out - Ce)
                    : n(N.check, F, Ce, e.next_out - Ce)),
              (e.data_type =
                N.bits +
                (N.last ? 64 : 0) +
                (N.mode === k ? 128 : 0) +
                (N.mode === ce || N.mode === re ? 256 : 0)),
              ((Se === 0 && Ce === 0) || ye === l) && Fe === f && (Fe = v),
              Fe)
        );
      }
      function Te(e) {
        if (!e || !e.state) return h;
        var t = e.state;
        return ((t.window &&= null), (e.state = null), f);
      }
      function Ee(e, t) {
        var n;
        return !e || !e.state || ((n = e.state), !(n.wrap & 2))
          ? h
          : ((n.head = t), (t.done = !1), f);
      }
      function De(e, t) {
        var r = t.length,
          i,
          a,
          o;
        return !e || !e.state || ((i = e.state), i.wrap !== 0 && i.mode !== te)
          ? h
          : i.mode === te && ((a = 1), (a = n(a, t, r, 0)), a !== i.check)
            ? g
            : ((o = V(e, t, r, r)),
              o ? ((i.mode = _e), _) : ((i.havedict = 1), f));
      }
      ((e.inflateReset = L),
        (e.inflateReset2 = R),
        (e.inflateResetKeep = I),
        (e.inflateInit = z),
        (e.inflateInit2 = xe),
        (e.inflate = H),
        (e.inflateEnd = Te),
        (e.inflateGetHeader = Ee),
        (e.inflateSetDictionary = De),
        (e.inflateInfo = `pako inflate (from Nodeca project)`));
    }),
    Ft = t((e, t) => {
      t.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    }),
    It = t((e, t) => {
      function n() {
        ((this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ``),
          (this.comment = ``),
          (this.hcrc = 0),
          (this.done = !1));
      }
      t.exports = n;
    }),
    Lt = t((e) => {
      var t = Pt(),
        n = Ct(),
        r = kt(),
        i = Ft(),
        a = Dt(),
        o = At(),
        s = It(),
        c = Object.prototype.toString;
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        this.options = n.assign(
          { chunkSize: 16384, windowBits: 0, to: `` },
          e || {},
        );
        var u = this.options;
        (u.raw &&
          u.windowBits >= 0 &&
          u.windowBits < 16 &&
          ((u.windowBits = -u.windowBits),
          u.windowBits === 0 && (u.windowBits = -15)),
          u.windowBits >= 0 &&
            u.windowBits < 16 &&
            !(e && e.windowBits) &&
            (u.windowBits += 32),
          u.windowBits > 15 &&
            u.windowBits < 48 &&
            (u.windowBits & 15 || (u.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ``),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new o()),
          (this.strm.avail_out = 0));
        var d = t.inflateInit2(this.strm, u.windowBits);
        if (
          d !== i.Z_OK ||
          ((this.header = new s()),
          t.inflateGetHeader(this.strm, this.header),
          u.dictionary &&
            (typeof u.dictionary == `string`
              ? (u.dictionary = r.string2buf(u.dictionary))
              : c.call(u.dictionary) === `[object ArrayBuffer]` &&
                (u.dictionary = new Uint8Array(u.dictionary)),
            u.raw &&
              ((d = t.inflateSetDictionary(this.strm, u.dictionary)),
              d !== i.Z_OK)))
        )
          throw Error(a[d]);
      }
      ((l.prototype.push = function (e, a) {
        var o = this.strm,
          s = this.options.chunkSize,
          l = this.options.dictionary,
          u,
          d,
          f,
          p,
          m,
          h = !1;
        if (this.ended) return !1;
        ((d = a === ~~a ? a : a === !0 ? i.Z_FINISH : i.Z_NO_FLUSH),
          (o.input =
            typeof e == `string`
              ? r.binstring2buf(e)
              : c.call(e) === `[object ArrayBuffer]`
                ? new Uint8Array(e)
                : e),
          (o.next_in = 0),
          (o.avail_in = o.input.length));
        do {
          if (
            (o.avail_out === 0 &&
              ((o.output = new n.Buf8(s)), (o.next_out = 0), (o.avail_out = s)),
            (u = t.inflate(o, i.Z_NO_FLUSH)),
            u === i.Z_NEED_DICT &&
              l &&
              (u = t.inflateSetDictionary(this.strm, l)),
            u === i.Z_BUF_ERROR && h === !0 && ((u = i.Z_OK), (h = !1)),
            u !== i.Z_STREAM_END && u !== i.Z_OK)
          )
            return (this.onEnd(u), (this.ended = !0), !1);
          (o.next_out &&
            (o.avail_out === 0 ||
              u === i.Z_STREAM_END ||
              (o.avail_in === 0 &&
                (d === i.Z_FINISH || d === i.Z_SYNC_FLUSH))) &&
            (this.options.to === `string`
              ? ((f = r.utf8border(o.output, o.next_out)),
                (p = o.next_out - f),
                (m = r.buf2string(o.output, f)),
                (o.next_out = p),
                (o.avail_out = s - p),
                p && n.arraySet(o.output, o.output, f, p, 0),
                this.onData(m))
              : this.onData(n.shrinkBuf(o.output, o.next_out))),
            o.avail_in === 0 && o.avail_out === 0 && (h = !0));
        } while ((o.avail_in > 0 || o.avail_out === 0) && u !== i.Z_STREAM_END);
        return (
          u === i.Z_STREAM_END && (d = i.Z_FINISH),
          d === i.Z_FINISH
            ? ((u = t.inflateEnd(this.strm)),
              this.onEnd(u),
              (this.ended = !0),
              u === i.Z_OK)
            : d !== i.Z_SYNC_FLUSH ||
              (this.onEnd(i.Z_OK), (o.avail_out = 0), !0)
        );
      }),
        (l.prototype.onData = function (e) {
          this.chunks.push(e);
        }),
        (l.prototype.onEnd = function (e) {
          (e === i.Z_OK &&
            (this.result =
              this.options.to === `string`
                ? this.chunks.join(``)
                : n.flattenChunks(this.chunks)),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg));
        }));
      function u(e, t) {
        var n = new l(t);
        if ((n.push(e, !0), n.err)) throw n.msg || a[n.err];
        return n.result;
      }
      function d(e, t) {
        return ((t ||= {}), (t.raw = !0), u(e, t));
      }
      ((e.Inflate = l), (e.inflate = u), (e.inflateRaw = d), (e.ungzip = u));
    }),
    Rt = e(
      t((e, t) => {
        var n = Ct().assign,
          r = jt(),
          i = Lt(),
          a = Ft(),
          o = {};
        (n(o, r, i, a), (t.exports = o));
      })(),
    ),
    zt = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    Bt = new Uint8Array(256),
    Vt = 0;
  Vt < zt.length;
  Vt++
)
  Bt[zt.charCodeAt(Vt)] = Vt;
var Ht = function (e) {
    var t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      a,
      o,
      s,
      c;
    e[e.length - 1] === `=` && (t--, e[e.length - 2] === `=` && t--);
    var l = new Uint8Array(t);
    for (r = 0; r < n; r += 4)
      ((a = Bt[e.charCodeAt(r)]),
        (o = Bt[e.charCodeAt(r + 1)]),
        (s = Bt[e.charCodeAt(r + 2)]),
        (c = Bt[e.charCodeAt(r + 3)]),
        (l[i++] = (a << 2) | (o >> 4)),
        (l[i++] = ((o & 15) << 4) | (s >> 2)),
        (l[i++] = ((s & 3) << 6) | (c & 63)));
    return l;
  },
  Ut = function (e) {
    for (var t = ``, n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
    return t;
  },
  Wt = function (e) {
    return Ut(Rt.default.inflate(Ht(e)));
  },
  Gt = function (e, t, n) {
    for (var r = ``, i = 0, a = t - e.length; i < a; i++) r += n;
    return r + e;
  },
  Kt = {
    Courier: `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`,
    "Courier-Bold": `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`,
    "Courier-Oblique": `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`,
    "Courier-BoldOblique": `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`,
    Helvetica: JSON.parse(
      `"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"`,
    ),
    "Helvetica-Bold": JSON.parse(
      `"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"`,
    ),
    "Helvetica-Oblique": JSON.parse(
      `"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"`,
    ),
    "Helvetica-BoldOblique": JSON.parse(
      `"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"`,
    ),
    "Times-Roman": JSON.parse(
      `"eJyFnVtzG0mOhf+Kgk+7Ee5ZSdbN/aa+ebzuMdvupmjORD9QUlnmmmJpSMoSZ2L++9YNwMEBkn5xuL6TdUkkgLxUFvXv0Y/1/X212o6+H1397XEzv6sOTl6+Onx1cHry6uXJ6MXol3q1fTe/r5oCfyzuq813H+r7+aoVHpdLFA5UmN8vljuUGjitFnef27tIqTfb+XJxc7m6WzbFDpvjzS+L5+r2t8X25vPo++36sXox+vHzfD2/2Vbr36v21J+ft9XqtrrVGzWP9sMP9fPo+398d3R28eK746OLF0eHh4cvLl5d/PliNGkKr5eLVfVbvVlsF/Vq9P13jQzCH58XN19W1WYz+v604VfVetMVGx0eHv+luVBzk3f1dnHT1uTH+mG3bitx8F83/31w9Ori9EX773n376v231eH3b8vu3/PDy5v6+vq4PfdZlvdbw7erG7q9UO9nm+r278cHFwulwcf2qs1dqs21fprQ3szLjYH84Pten5b3c/XXw7qTwe/Llb1dvdQfffXqjnr8vXBfHX7P/X6YNGcvHm83ixuF/P1otr8pXncn5vb3C5Wd7/ffK66Buie4vdtc8p8fStqU/DH+cNfhzY5Ozt+MfooRyetJS43N62p14148fLF6KdKjxsjn78Y/b69/et09P3xRfffq+a/Fyd9e/2t2q4XN41B//Hv0fRjU6S93LvmQTYP88aO/3nR45cvX/a4er5Zzu+Vnxxe9Pyfj3VjqeulKqeHw4VWj/fXbUPdraJ2Wy+X87XyC7nLQ7W+ab1chPPz4Tbz+0baNNaJT9Y9QdfiUXuYr6vVsvpUkvxp+njzTXvFzRdTzk6Gs5aPG6Vqs5smOOfxFp93D5+rVSzeVGVRW02OpZKb5XzzOT7Nv6p1HWm9qiLcPiUlt5/XVVL2U/24Tujia1J2s3hOYPW1Stq2ym26WsADa5Vv6mW9SixR3S+8pC2wbNNAoNU/H+fLiO/WVRPIVs2TkxNxmmrTpRpRXh0fDW0P3nd83LNLRWdn5z36IaIf44k/Wamj4fo/21OenvXol3ji64j+Gh3sjaEmtXXof+OJb+ND/GqhJyf+LZ74LqJxfPrfYqn30Tgf4om/x+f6I15rEtGVtZq05zSW+hjRLN7x79Gq101n9qXaurShnnndaD5O+TyfU07OXklOuVksbhbrm0fLohocj23S3jQ9T5J5u/zmHka9eB6vdB1L3ST5N5ZK7vwpnngX0edopEVE/xdP/BJLWQhr5k+slSSdJO09RPTPWEfLDRpCm/hcST57jOhr9LinWCrJpLvYHP8ydHFo/uUd4VhbHTpTX556uJMj8MbtYnlb7Opv66fEzq53tp5g243TzDmOJOw/tQNDzLNW56zv+LSs14uEb6rCVW4e1003fmMGPJLad2GzWXQD1yT996MWZ01z8sdFo9zX23zk0Mrdhb8hk+kl7X1aJCwZPzUDuXQ4cDu/u6uSnrvnOBSjAUfbdtW6gtg/tbHQ/G49f4CkJqdeN9OHKqmlmfd6vtlj4f1qYfylDeD1bs7Q22a5XDxsFptEauq6/Vw/urFi6Padc1vLredfk3iY3zxuE9zn8k/L6jlqhci6n9+s6+TG1+squ/FtvZ3fuIgzadG0JBrAEhrGoT1sdduYNBujPq7u5uvH++X8MblNfdcMM78kl5tjPaBd7p3P6uDi0kY9x+eDz9fr20/NMM+NC22A4vtYG394rjcY2w1eHh3qDe6bPPe4dHeQzDRPRqO3bchvNkn3tSyMzevCc9bJILqJzmZC3Hh90mpvQoNax+z9zzp/7zXWMaVNapfzbWdjo/AEOoq+XXxdgDvbKf7JbLichIY9duGkSXKSdRYUg9pVdzMvChKoaryk3c8FiuFyQ8wpGuwc/3TWEnSCzQHCTWzG0GQImIL4KSZV9PxMxWHNI7kV5RwbFXo/sFrmdnmXPYCFR8lHfUq1cX52NZtIla7m0yqYMyZK8xBXTeCUEW3wSnc/H+6yrP9Vre6STPKhEFGvs0qac+wNkn2ee1nqRtaFJr3hutrsJ1pOxyR/fK7XSa3GdHczA0WBTvOIX0iyLZhtQjcwi/muzS1vbB67Mc46eV7vgmbFEqe0Kknw/nG5XTwsd8lz+QqCk/vmkI6vGW1tF/Pl7eJTMsHalVPDO38fc9jEWSw29rrZnl6nLN0U0t2qlAapQSGnzFM/fkMXwsW3ZsCAK3A6AVrXX6oVToM0Oa6ru8XGD3wtRAsjrzcxLs50LvLYRLWbjZixCyPIdcEyNceSxmXBpf7uLXZ68kpGrt06l18F01r+vLURiiXZYgJcZnnr5fHgvdtCkqmKvWNJuCwNH/Z4pTewzZZLoVG697jUIqWuh3Ou9iOlO5fjeLx3WMI9powLquU2We7ZuiRtOfGp3pMR40hPzrt/TGrin8hMlY4zLRbI9DZP9SOc81PM440DrxtHhkfTbiRMYaRtloWO5G06yNAZhm+4V7JuoK90spxYnpC9KYT+m1KI/0pPLWZojPZ5voSeQWK8nZnQMrc2xb6x88qPmszTvtF+hUioSt3znc+lWKGhVbNG9fnMeDbcVQfOZzjqYE2WyF541BRalgnn+XiDks2pZvPbxU2WZ38q9GfrvbV559vHHpdGuzbc3OvWe+91WfCFy2KOzmcDY38dy8NJv2kjkUJvX0oUX9Lxs47H3EDArrY3FPwj2PLu3jst67u2vVd1Moqvy7n0MUoSys2lCpF8t3fOUEFHbjYvuO8q7cbh9WHoISzll2L858f2VeSfL0Zvq/Xqt/li3b5A/sfosn1RPXrx3cnhny+Goz57ONQ/p0dDTkf42h/1WcUhrBgK4+bo9FSP5BEAgXM4rk3laB//DrnM45TBZI71i0MO9YGD6L07+qM5Ojo60kMxmmOu/qBM3KUm0QCTggEmqQEm0QCTogEmiQFk6OdYl1GQXLWVeKmH0+bwlbbprBUPVZxJnZDBwwOGfQHOSF+bw/MTOXpq73YsRzt/JDcDBPca6FAIA0ARRYFyCgXjHA+ivE4QRYbyNDxEhRhRRH6iPHMWFaPHqERuozz3HZXZgVSgMFJOsST8fUQYVco4tExI40vkSbw8R5ryfRZMYk6lggUL0adyyYIhDlXwwSgYI1IYhKUgjE1lHKAqJFEqWhqqIkK8CoKgFbRLEIWv8hjDQyhhDCuiGFZOMWycY1iU1wmiGFaexrCoEMOKyAOVZx6oYvRAlcgDleceqDJ7oAoUw8ophoW/jwhjWBnHsAlpDIs8iZfnGFa+z4JJDKtUsGAhhlUuWTDEsAo+hgVjDAuDGBaEMayMY1iFJIZFS2NYRIhhQRDDgnYJohhWHmMY2wkD2XOKZi9SSJPIce3k1yVOEe7FNMxdEYh1z8ldvZj5rC8RHdfr5L1ezF3Yl2E/9iqlAy9STnDi+wLH7OAFThGkpnnClZkUbskZw4vfbIIkd3h9XxMUsogvs7cJQj7xqk8qTsPM4gRIL45jjvECJxqvJtnGFUhTjisBecdxSD6O70qc0pAXYy4ygpkIKeUhlCgLOYlzEIivc0r5B6U0+0AByD1Iye1Rypwe9ejyqJLDo5S7O5ZgZ0eNsg1KlGtAep9SzDOIOcs4Lc0xUGKS3orzC0rfMHSSW1AtG7qQV7DEHkOHnIKazyigYD4BDNkEKOYSxJxJUEvyCMhpFgEdcghQyCBAdzml7IFSzB1D42DiUERZQzmlDOOcL0R5nSDKFMrTNCEq5AhF5LfKM6dVMXqsSuSuynNfVZkdVQVKB8opFwh/HxFmAWWcAkxI41/kSbw8R77yfRZMYl6lggUL0a5yyYIhzlXwQS4YI1wYhLcgjG1lHNgqJFEtWhrSIkI8C4JgFrRLEIWx8hjDYjgMYmMUxSZQGIPAcazS64xRJJuQhrLKEMvGyBVNyHzR1OiMppE3mpC7o+nsj6ZQSJtAMa3C+4RhVBvksAYljWvVJ8ktOLJN2GvOJLZNK5mzEN2mF80Z4tsUH+DKMcIVQogrwxg3yEFuShLlKqZhrirEuTIIdGW7jFGomxBjXWyFsW6MYt0EinUQONZVep0xinUT0lhXGWLdGDmnCZlzmhqd0zRyThNy5zSdndMUinUTKNZVeJ8wjHWDHOugpLGu+iS5Bce6CXvNmcS6aSVzFmLd9KI5Q6yb4mNdOca6Qoh1ZRjrBjnWTUliXcU01lWFWFfWxvopheguY9pMLGBD9Np6+CjbAkoIxblginLFHOOD8DoSim/BaXQPIsS2EHJFwZkjihbdUBRyQsG5C4rKDiicolkwxfKA3weCcSyIo1h5GsODOgmX5vgVvMdoSeyKkhutELeiFowWYla4j9iBYrwOCKJ1IBirgjhShSdxOkhplA4axOhAoDceyC4S6okFx3548BgMTkUUncopPI1zfIryOkEUocrTEBUVYlQR+ZvyzOFUjB6nErmc8tznVGanU4FCVTnFqvD3EWG0KuNwNSGNV5En8fIcscr3WTCJWZUKFixErcolC4a4VcEHrmCMXGEQuoIwdpVx8KqQRK9oafiKCPErCAJY0C5BFMLKQwz/0NDL5qivcnck5wKSeAPk2hc43AGotCogbTFg2ljAhnYCIs5vaNJZVo+sIRS5xwXumkapPC4g8j9QtCLAtCLAhor05KfB7id25DPmT2h3QK4iwKEiQKUigPRxgenjAhseF4jY3dCVO2rj5KUezTS4fsLgABSywLCb11lGEZlHOdlIeWYoFaO1VCKTKWe7qcDGU8FbUDGZUfhVRGBQQbNoLDat8sS+3XcA3r6C2L7C2b7CU/uKmNhXJLav8GBfEYJ9RSD7Cmb7DvwqIrTvgGbRWMG+woN9fxlM2+fsX9CqgMSggJwtgcMdgIoFAanxgKndgA0mAyLWMtSOwY60PnNNpoakBoB8fjWO+dWo5ldDlkWNWRY1JlnUiNTAUP/jUC++uzgUUju9jnWqCxWo0wrUsQI1dxCmJFWrZWAHKNZj+NUqqcj/Du51ZkdSEUDSOIBc3YBD3YBK3QBpDYBp4wAbGgeIVKpHb0f9MPylHelow5AfWhjHoYVRHVoYoqYAxQYdxqQpAOkIQ1F7dHyqR/LUgGRMjQgrAhwqglQ/5HBY6gdIawFMm8NYrWOkt+j0gJJB3FtyeqB+EPc2cXpQaHj3Fp0ekB/LtehRQ6A78qHaoSRUOx5CtaM+VDuUhmqnUKh2jLJQx1wWasnOWX4X/WMXG91NtjAuSKAQITWLFioSA4cKUAyRmocTFeLIIpmCjFSKN69WJYtxFJJKAclqEptU5FstlkUslaDgJZXjmGQOaS9DdJNAgU5qFvNUJIY/FaBMQGqeFKgQ5weSKVWQSlnDq5BASKBcQmqWVqhIzDBUgJINqXneoUKcgkjmbESyT0xe3JVcidMVqSEOfh3160r9EkJ3JMGGyK0lmdAtsRweyuFUB5+/jmRhRUVYUzHm5uyK3UqK3a17/6BPvfNj+V+pegPFb1iGK4VPWALPauu+7hgeFb/uGOrtv+7wxYIF8q87vJbZAj/boHqyVbLPNgZJJpfZHUTbxeJ8B+XJHZzzQROQQA3BatYcvgw2ilegabwwK54SmonkpLF8idSgIXxTGwXjFsN3KDAkVzSuIjKr8cygoqIphYERBc2SYsFwKiQmEy0zlmi7WE82kPJgmncjXA7tjnxv2iG/HNqhpFfteOhKO+r7zw5Rf9gxWg7tmFsO7YjvDN9J8F4miOqinCqkPKuVirFqKlH9lHMlVeCaquCrq5jqjOuGjKjOYd2QeVbnbN2QJapzXDdkgevM64aMuc4uyi+LAtffq2wFr6a28EUSi/gCbBevBut4OdjIy2QpL5K95B3IZYLIRsrJOsozu6gYLaIS2UI5W0EFrr8KvuaKfZ3HrrrjWNNxrOS4UL9xWrVxrNU4qdA4qcs4VGOc16DtpfqF2zF2UIiS177joVs61aOpu+pHV3LmStqKryHsKnoaE+24kGjHhUQ73pdox+VEOy4k2nEp0Y5LiXacJ9pxIdEqhzYJI+PAs9bBkTHZcxpv9zGeOIsncrNlI+VBcl8TQQN6Tq3oRWpKL2bt6UvERvU6tawXuXm9ym3sVd/QXqPWDp/7nSTW43bf97FfVuSq0CrTwnN8LFxnVrgOe0Xxg7dBh09FwDGQklugRE6BUuYSqEeHQJXcASV2BtTYFVDzjoAKuQF9i3US7MQuUP4SKxa4Si0/Te/+Mb3CLL0CN3vh66RBlQ8LoMUVUXMrp7ZWnjW0irGVVaImVs7tqwI3rgq+ZRVTs+KXNSfeDNyghe9qSL2K9pzG232MJ87iidx82Tcog+RX1bAJWaGWZJkalOWsXblMbF4uQa3MMjc269zmrPumZ5U8gGRwBFbIH4KcuQUVuiq22LT4RB+LV5sVr8aew3J0IP3UAFzHGDmNCeQuJmSOYmp0EdPIOUxgtzCFHcIU7wrGyQnctzgnZBFu+NKXOCxfJdadJvf8mJw7S87lRk2/Vhk0Wd2B1lREjamc2lJ51pQqxpZUiRpSObejCtyMKvhWVEyNiCt6J94M3ISFFT1Sr6I9p/F2H+OJs3giN162wjdIcZI+LkzSx4VJ+njfJH1cnqSPC5P0cWmSPi5N0sf5JH1cmqTjTt0TbwZuu8I+XVKvoj2n8XYf44mzeCK3XbantZd+G5qtX479DVsMkDQWINdOwMNe1d+wdQBpwwDTNgE2NAcQaQlDtvmpO/JvDDvkNz91KHlz2PHwurCj/h1hh+idX8foRV/H3Nu9jvhNQy2SzU/DZuIW6T6igb0f4ZbZ7shvme1QsmW242HLbEf9ltkOpVtmO4W2zHaMtsx2zG2Z/TDqN0mc2JHfs9ihZFtix8OOxI76zYgdoqcGhXYodkzeUwPy+w8/DJF9ZkcS1IhcPJswcdeZxPpOCvWdpPWdxPpyK4GS1HdCmzE/QCsZaRPQhR61uad/u/JhyDFndqQb2AzhrrSeykIOtL4iMonyzC4qRuOoRBZSnptJZbaVCuQgyslLcGHtjBD5S2FhjdRJvDa7j/J9tkocSaWCrQoupXLJVsG5VPAehmuHFx6Br+FCIfkRe122UDhI8vYFXE8RmVN5Zk4VozlVInMqz82pMptTBXI95eR6wsH1FJHrGc9cT9RJvDa7nvJ9tkpcT6WCrQqup3LJVsH1VPCuh5v1LzwC18PN+uRH7HrZZn2RwvZAeYh8e2CupgYubg/MC7Cx924PzAsFw+fbA3OVHTbsEDlLBXbefTtE0jKT0j2DO3v12zbPXNsX2Gvzkpv7QvttHl3ey+T4YevMRSZgEISdM6lfh4Ao7pvpC/wxGqYZL/VIpxmGdJphyE8zjOM0w6hOMwzZNMOYTTOMyTTDiE4zFLXRfHShRzr6NuRH38Zx9G1UR9+GePRtio2+jen3CIZ0aqHIvqnojuSpAYndAbmKAA8R0FHv9h0iN+6Y2h0uONgdiM8bLer/wrVMWXvST5f6rUotac84V103GQOSxILIfcFjPGy97ilsHIbC+mGPIdpW3TH7sEfZ8HfPZSbbosVIpvzdkV896RCtW7SsdgasYwvXhebEPcNApUaAyC9B0boCE78EJK1qSOe31ohrV611rP1aGhGR6xJMsL+NLtmtpe0+4xM70i7BkO8HjKPrG1XXN8Rp3hQLCmOW0I1JFlfy5Cy380exvXexXXGz1ZDRwmYr5pSP881WLMbMHDZbMeccHTdbseCzddhsRRzydpgGMM8yeDYNYIlyeWkawDJn9TANYE75Xfg8tjRneuWU7pVnSULFmPhVouyvnLsAFbgfUMF3BoqpRxBO3YJh1zcIhhStiHoJ5dRVGI9f7ZgYOw2TYs+hGnUfyrkPUYE7EhG4NxEOXYoiyqzKuXMRoY6twt2M8n1ulHQ4KlGvozzvelTm/kcF6oSUU08knLsj4etoDe6YlFPvZDzrokRN+imRoLNSRD2W8qzbUjH2XSpRB6Y878VU5q5MBe7PVPCdmuCn2BK7BBWcLevowg5b6Q3yHba5yl3fnh22eZGkG8x32OZq6BILO2xzmbrHfIdtqmJXmS9Y5GrabRYXLPIC3IXuXbDIC4XuNF+wyFXuWp06L3lY6Ga9yp2tV9Nc6YskHa8vwN2vV0Mn7OXQFXuZOmQvcrfsVO6cSfRdtP+CEro2L3B37VXutEnNum5fJOnAqUDSjfsS/pNcVu33HlI5dOxODt27U7GT9wL3VV4NHb7/ZLPU9qHz9+q33TobCPgCPBzwamFQ4AuFoYGXeYDgVR4mODUMFpy6LtkzDBy8ysMHUtNBhCuTDSVcARxQeIGHFV5NBxe+SDLE8AV4oOHVwnDDFwqDDi+HoYeXaQDixKdSS++Kwt4QiAOTyTAaObEjvx49wXEHoGRdekIjDKC+N5i4sQQwWkaewKgBiM/wsn6O1QjfTjCnCuXfTrAYqxa+nWDOlYzfTrDgqxu+nRh4+OYg5VT7/JuDVMzsUPzmINXJIoVvDlKVbZN+c5BqZCXafp9QslC2/T6RMusUtt8nKlkm3X6faGyVZPt9opBFcG86I7JF2JvOPLNCtjedJap/3JvOAtec96Yzpjone7oLClmgtKe7IGf22LOnu1CCrFPc013Q2VaFPd0FlSznNjMHRtaKm5mDkFko3cwcNLJKspk5KGyJsJk5cKq9/pL0Zcao9iZQ7U3Iam9qrL1pVHsTuPamcO1N8bU3TrUffqn3MhKquWCqt+Cs1qLFOotCNRbM9RXOtRXu6yrU1/RqqOXwS61XWEVkulcTmF9fAAFXFQDrWgIwWxwAaBsYAcoORkC6OGCs/Y3jIzvyW0w75IfsJoydTWgvSIeSxux4aMiO+kbsULrXoFOoaTvmd3J0KLYd7E/tDrXtgKkRgPm3rMbxdxKN6nq4IZs3G7N2gztJuwHSX0pUJBOkfurWk2Hz7fErQVSHKqmrLTgAyqtapVV16wl44WiCKjFBlZlAVwmGH99oWbs2cGZHunXDkP9ZLeP4G0JG9eexDNlvYhmjnxpsWe2NbL/oCMxHOgg4ozKqywSGeKUQrmErAsZ0URDK6eRfke3GtmI43TZvaufY5xrqOrEG5L3EOHqJUfUGQ1RDUMxPjNm6kjH5SdGOTCUx9603dYkZmAY3MGouEzAxA9bEDMwSM0DzboAS4IA0MRvrFrHtyO+Sn4b0Cjzskp9iegWU7pKfuvQKTF3MkD62Ilthno7CsvJ0FNaSpyG3Ag/LD1PMrYBojWw6iovC0xGvBE8xsxqSWHh5bqTPrP2a5XRIrHZGFWupaRVRXssq9IZTTqtQ2HeSU5dVgSWV16R6puGycCctfA8+denPWO2uWse6ZwunU859RmNz5uui01FcDJ2OwgrodBSWPaeY+awRMfFZY7eJ71RP08QHyP95AePhs6QpJj5A/PcETLE/JWDM/oqAMfkDAkraBb7zl3qk6doQpuWOzny+nCX5cpbky1kpX87yfDlL8uUsy5ezLF/OYr6cJflyNsIfMZ1hvgSUvD2ZUb4E6t+CzJJ8CQrtc5hhvgTkf2x0NuTLYZQzw4SJTFsAGOV+E3DXqlH/w8ozlzOBwYdQBvVLKEP+p5VnkDX78JqNwnh0NqRNuEyVVFYTp2OFylZpZf2IFEpHI1SJEarMCDYi7UepsyF79u8nZpg9AdEfAJkN2fPoSK9rg0dgvrogYAwb9XtvZkkCxWvQ67sZZlAsp1MORTx4nFEOtaZ/9IZ6pHnHLGRRFMIsY4ZpFFCopEk00Zi5PIoF/VxrpuvnkFrCy4EgcIbMXw8ENcmV4QVBEELWjK8IgkL5M7wkYAEyafjWjXmWU7Nv3Vii7Fr61o1lzrPhWzfmlHGFY9pVxulIBU7AKqSJSdWYnVSiVKSc85EKISmpQulZOeVo4RSthn22Fp5VO+RtFTh5m7DPUEkaNynJ5SoWrBiyugpFK4b8LgIkeUWU6ZVzuhcBc74yTvwqpNlf1dgFqET9gPJCZ6A69wgqcLegAvUNwkMHIULSS4j0mNg89BcqpJ2GqrHnUIm6D+WFPkR17khUCL2JKtSl0EtFybXZW8VM476l+F4xK5D0MNmbxUwL/Uz6bjETqbfJ3i4mGvQ5SKnbQSnreVCPnQ+q1P+glHdBWIJ7IdSoI0KJ+iKQsDtCzIkWNe6UUEvTLRaIGRdVyqsocWpFLWRXFKmbQslWkYJGWcMpvsMCqXCt0G2hxj2X075hzaT/cmrShaFetnboyFDbZ+3QnYEGPRpS6tRQ4n4NNOzaEHPvhlrawWGB2MehSt0cSoWeDotwZ4ca93eoUZcHUuj1QEs6PlAf8wYK3R9qaQ+IBWIniCr1gygVukIswr0haqFDRNH3iU3Ydn9fsu8F2qN241r/YlFSHhYQBKWG5IelBEEpt9sHijoO5eGRoTRQKCvbR6CgICiluwWgmDIo5/629VDO/W3roRz8dd2hFPx13aEM/gnPoRD+Cc++1DV6br+4ez245LEdiScCSt6yXZPfAfVv2a4TPwOF3r9dO7cCNniTka9arZtRvxYKRxpNhnBc1FNxsV2C6ALK41Xw2w9GdJXs2w+R5M8Ru+sY5CuZEq/Vd5L9Hy24vV7K3y3os5hTvdRW0H7uqTvyOwM6lO0MUM/Toyd39OxK7vyRr1puZenG8fkU0UMqT5/UpRqPniJ6jifuEkRVKHuLDDmwHoqoHsrTeogK9cAPkwg9xxN3CaJ6lP3VDY9cZRznGjkxr1bI3gl/KvDnwnV2Jc71dWKsNHQKdzmlCqOUVpc7n0CfUvqcXmGXU6okSkkVbdzq6oiYK4laXksogdUE/JTj5/wiuwLmqqIW6ypd912CqI7K0/q5YYFHTxE9xxN3CaK6KI/10LHFXcaoJiakVfFjF2JPCXtOzt1ljOpjQqyQDoLuMkYVMiGtkB9kEXtK2HNy7i5jVCETQoU+jWS2r0d+Z0eHbG6vKNns0fGw2aOjfrNHh2hLR8fohw875n74sCN+l0eLmmhaVptNN5VU+Ekt2B4tdITWHfmR5CcadfQTy7vBNnagk1IlYhkj/nW8Ynwbr1BfxiuxN+6KbLqrSN63KxCT9ESmHvNIfA0U+2ooTuqiWqiQKr5Wiqlqyql+yl0llfqaxs9JU+5rXfiYNBUTC5Q/JU11b43Sh6SpSpbJPyNNNWcl/VNgeuDsEf78VwsXLi0t4tB0URgOLdJxwyL2Q4skny+SlNgeWbR3Rz5DdcjWywzFDNXxkKF66lbFFPvE1SFKXB2jxNWy2h/FZ64LD1inD1jHJwnrS6Ykz1j7/XId8pnUdydJR5J3IV/il8bD9QpfGucqteC+L43zItFse740zkuQjUtfGucy+0D86jcX9poldZLyV795gb3VKnhR6avfXCbfKnz1m6q7kiOx85W/Be0LLIdRU3+XpVul61H8OnUQ5GfYDUleOtEje85kzJiPFleYNocrxbn6qjBXX5Xn6iucYg8XjpPnVWHyvCpPnlfeRHj5QqOxwLf6RqOtcHVwuJWgXSzFl1ceLlyPcB2udiPqWi5+qEc+CGu+ZE+xOYfrxgWa2rWwP5Fvk7ZwL4XudbhhYbWhjqsKyXX4/uVVhV6nvnx4hHQNoObZfrgC37w02+9VHDAM940T19rNUv2JfLt0ltpL9B0h3JIUuDMpu+LV+DlYjo/jBkbDgyQT3dpPaulcvm0+qe01SX9wP8yIxx7t4ol8s+yvyg4SxvtwL3wbcOzRLp7I90pTQCc9uAs8xHMf8tOG1xCFVWove03OWFaf5Fvdi1SQ58hV/0kCq8l2di4CdcoL+E3urNKudpZpMz/L7qMGFv1O+E7NjbXHUnvM9C0b7TfQHuvsM80+u5SN8m2LwP+HL6HQ5Ubtm7LTw4ibB5xvc22pTu6xDwuv0dJVUsIP/pzmYyTWYZ0/p/6kS6bJRCHV3MMmJboJ7mnEfruB1/SGmSZvu3LVP05S4mF+U+Wm6ax9ETG1RyzxVWveWFf3pZwoudPTuiNd2zOU3aIVdBvHsV5M39n2lZOG49u6d2QXHtEDlN6ReZUfJez5G56Hf79yeB73ruvCI3qe0rsur/LzhB9AlOdJf7JLnsqJ+Gxe4Cf0av6c+c9eHWc3pmcefLRL0ER81CjWFTWP/Vqa13D9ySu6fuaxrZx5TpuDlMtqmae6TubwH2o3Jbo6QTixtYj2t6eEdH96ypH2t+BfeSI2JQwG6pUmzLsFz37E1B3porYhaQpAfseEcdwxYVR3TBiyfRHGbF+EMdkXYUTMbUgi4EyJze66Iz/h65C2BaD4Z6c6HqaFPcWFIMP+r1F1iP4aVcfor1G1rNZQ6o78y4UOJdtUOh62qXTUb1PpULpNpVNom0rHpEsGpLZXpHHeG/9phK+CntChAPlXQU/BoYCHkfUTOhQgWlx6cg4FzL0KekKHMuQd6mmEK29Po7Dc9hQaB3hagTpWIF9CexrFdbOnUVgsexqFFbKn2DjPLjKeY2Q8x8h4LkTGcxoZz3lkPMfIeE4i4zmJjF1ojl2s2I5HDIS5eLLlNip40p//+X+DG1I7"`,
    ),
    "Times-Bold": JSON.parse(
      `"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"`,
    ),
    "Times-Italic": JSON.parse(
      `"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"`,
    ),
    "Times-BoldItalic": JSON.parse(
      `"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"`,
    ),
    Symbol: `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`,
    ZapfDingbats: `eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==`,
  },
  qt;
(function (e) {
  ((e.Courier = `Courier`),
    (e.CourierBold = `Courier-Bold`),
    (e.CourierOblique = `Courier-Oblique`),
    (e.CourierBoldOblique = `Courier-BoldOblique`),
    (e.Helvetica = `Helvetica`),
    (e.HelveticaBold = `Helvetica-Bold`),
    (e.HelveticaOblique = `Helvetica-Oblique`),
    (e.HelveticaBoldOblique = `Helvetica-BoldOblique`),
    (e.TimesRoman = `Times-Roman`),
    (e.TimesRomanBold = `Times-Bold`),
    (e.TimesRomanItalic = `Times-Italic`),
    (e.TimesRomanBoldItalic = `Times-BoldItalic`),
    (e.Symbol = `Symbol`),
    (e.ZapfDingbats = `ZapfDingbats`));
})((qt ||= {}));
for (
  var Jt = {},
    Yt = (function () {
      function e() {
        var e = this;
        ((this.getWidthOfGlyph = function (t) {
          return e.CharWidths[t];
        }),
          (this.getXAxisKerningForPair = function (t, n) {
            return (e.KernPairXAmounts[t] || {})[n];
          }));
      }
      return (
        (e.load = function (t) {
          var n = Jt[t];
          if (n) return n;
          var r = Wt(Kt[t]),
            i = Object.assign(new e(), JSON.parse(r));
          return (
            (i.CharWidths = i.CharMetrics.reduce(function (e, t) {
              return ((e[t.N] = t.WX), e);
            }, {})),
            (i.KernPairXAmounts = i.KernPairs.reduce(function (e, t) {
              var n = t[0],
                r = t[1],
                i = t[2];
              return (e[n] || (e[n] = {}), (e[n][r] = i), e);
            }, {})),
            (Jt[t] = i),
            i
          );
        }),
        e
      );
    })(),
    Xt = Wt(
      `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`,
    ),
    Zt = JSON.parse(Xt),
    Qt = (function () {
      function e(e, t) {
        var n = this;
        ((this.canEncodeUnicodeCodePoint = function (e) {
          return (e in n.unicodeMappings);
        }),
          (this.encodeUnicodeCodePoint = function (e) {
            var t = n.unicodeMappings[e];
            if (!t) {
              var r = String.fromCharCode(e),
                i = `0x` + Gt(e.toString(16), 4, `0`),
                a = n.name + ` cannot encode "` + r + `" (` + i + `)`;
              throw Error(a);
            }
            return { code: t[0], name: t[1] };
          }),
          (this.name = e),
          (this.supportedCodePoints = Object.keys(t)
            .map(Number)
            .sort(function (e, t) {
              return e - t;
            })),
          (this.unicodeMappings = t));
      }
      return e;
    })(),
    $t = {
      Symbol: new Qt(`Symbol`, Zt.symbol),
      ZapfDingbats: new Qt(`ZapfDingbats`, Zt.zapfdingbats),
      WinAnsi: new Qt(`WinAnsi`, Zt.win1252),
    },
    en = function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
    tn = en(qt),
    nn = function (e) {
      return tn.includes(e);
    },
    rn = function (e, t) {
      return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
      );
    },
    an = function (e) {
      return "`" + e + "`";
    },
    on = function (e) {
      return `'` + e + `'`;
    },
    sn = function (e) {
      var t = typeof e;
      return t === `string` ? on(e) : t === `undefined` ? an(e) : e;
    },
    cn = function (e, t, n) {
      for (var r = Array(n.length), i = 0, a = n.length; i < a; i++) {
        var o = n[i];
        r[i] = sn(o);
      }
      var s = r.join(` or `);
      return an(t) + ` must be one of ` + s + `, but was actually ` + sn(e);
    },
    ln = function (e, t, n) {
      Array.isArray(n) || (n = en(n));
      for (var r = 0, i = n.length; r < i; r++) if (e === n[r]) return;
      throw TypeError(cn(e, t, n));
    },
    un = function (e, t, n) {
      (Array.isArray(n) || (n = en(n)), ln(e, t, n.concat(void 0)));
    },
    dn = function (e, t, n) {
      Array.isArray(n) || (n = en(n));
      for (var r = 0, i = e.length; r < i; r++) ln(e[r], t, n);
    },
    fn = function (e) {
      return e === null
        ? `null`
        : e === void 0
          ? `undefined`
          : typeof e == `string`
            ? `string`
            : isNaN(e)
              ? `NaN`
              : typeof e == `number`
                ? `number`
                : typeof e == `boolean`
                  ? `boolean`
                  : typeof e == `symbol`
                    ? `symbol`
                    : typeof e == `bigint`
                      ? `bigint`
                      : e.constructor && e.constructor.name
                        ? e.constructor.name
                        : e.name
                          ? e.name
                          : e.constructor
                            ? String(e.constructor)
                            : String(e);
    },
    pn = function (e, t) {
      return t === `null`
        ? e === null
        : t === `undefined`
          ? e === void 0
          : t === `string`
            ? typeof e == `string`
            : t === `number`
              ? typeof e == `number` && !isNaN(e)
              : t === `boolean`
                ? typeof e == `boolean`
                : t === `symbol`
                  ? typeof e == `symbol`
                  : t === `bigint`
                    ? typeof e == `bigint`
                    : t === Date
                      ? e instanceof Date
                      : t === Array
                        ? e instanceof Array
                        : t === Uint8Array
                          ? e instanceof Uint8Array
                          : t === ArrayBuffer
                            ? e instanceof ArrayBuffer
                            : t === Function
                              ? e instanceof Function
                              : e instanceof t[0];
    },
    mn = function (e, t, n) {
      for (var r = Array(n.length), i = 0, a = n.length; i < a; i++) {
        var o = n[i];
        (o === `null` && (r[i] = an(`null`)),
          o === `undefined` && (r[i] = an(`undefined`)),
          o === `string`
            ? (r[i] = an(`string`))
            : o === `number`
              ? (r[i] = an(`number`))
              : o === `boolean`
                ? (r[i] = an(`boolean`))
                : o === `symbol`
                  ? (r[i] = an(`symbol`))
                  : o === `bigint`
                    ? (r[i] = an(`bigint`))
                    : o === Array
                      ? (r[i] = an(`Array`))
                      : o === Uint8Array
                        ? (r[i] = an(`Uint8Array`))
                        : o === ArrayBuffer
                          ? (r[i] = an(`ArrayBuffer`))
                          : (r[i] = an(o[1])));
      }
      var s = r.join(` or `);
      return (
        an(t) +
        ` must be of type ` +
        s +
        `, but was actually of type ` +
        an(fn(e))
      );
    },
    U = function (e, t, n) {
      for (var r = 0, i = n.length; r < i; r++) if (pn(e, n[r])) return;
      throw TypeError(mn(e, t, n));
    },
    W = function (e, t, n) {
      U(e, t, n.concat(`undefined`));
    },
    hn = function (e, t, n) {
      for (var r = 0, i = e.length; r < i; r++) U(e[r], t, n);
    },
    gn = function (e, t, n, r) {
      if (
        (U(e, t, [`number`]),
        U(n, `min`, [`number`]),
        U(r, `max`, [`number`]),
        (r = Math.max(n, r)),
        e < n || e > r)
      )
        throw Error(
          an(t) +
            ` must be at least ` +
            n +
            ` and at most ` +
            r +
            `, but was actually ` +
            e,
        );
    },
    _n = function (e, t, n, r) {
      (U(e, t, [`number`, `undefined`]),
        typeof e == `number` && gn(e, t, n, r));
    },
    vn = function (e, t, n) {
      if ((U(e, t, [`number`]), e % n !== 0))
        throw Error(
          an(t) + ` must be a multiple of ` + n + `, but was actually ` + e,
        );
    },
    yn = function (e, t) {
      if (!Number.isInteger(e))
        throw Error(an(t) + ` must be an integer, but was actually ` + e);
    },
    bn = function (e, t) {
      if (![1, 0].includes(Math.sign(e)))
        throw Error(
          an(t) + ` must be a positive number or 0, but was actually ` + e,
        );
    },
    xn = new Uint16Array(256),
    Sn = 0;
  Sn < 256;
  Sn++
)
  xn[Sn] = Sn;
((xn[22] = V(``)),
  (xn[24] = V(`˘`)),
  (xn[25] = V(`ˇ`)),
  (xn[26] = V(`ˆ`)),
  (xn[27] = V(`˙`)),
  (xn[28] = V(`˝`)),
  (xn[29] = V(`˛`)),
  (xn[30] = V(`˚`)),
  (xn[31] = V(`˜`)),
  (xn[127] = V(`�`)),
  (xn[128] = V(`•`)),
  (xn[129] = V(`†`)),
  (xn[130] = V(`‡`)),
  (xn[131] = V(`…`)),
  (xn[132] = V(`—`)),
  (xn[133] = V(`–`)),
  (xn[134] = V(`ƒ`)),
  (xn[135] = V(`⁄`)),
  (xn[136] = V(`‹`)),
  (xn[137] = V(`›`)),
  (xn[138] = V(`−`)),
  (xn[139] = V(`‰`)),
  (xn[140] = V(`„`)),
  (xn[141] = V(`“`)),
  (xn[142] = V(`”`)),
  (xn[143] = V(`‘`)),
  (xn[144] = V(`’`)),
  (xn[145] = V(`‚`)),
  (xn[146] = V(`™`)),
  (xn[147] = V(`ﬁ`)),
  (xn[148] = V(`ﬂ`)),
  (xn[149] = V(`Ł`)),
  (xn[150] = V(`Œ`)),
  (xn[151] = V(`Š`)),
  (xn[152] = V(`Ÿ`)),
  (xn[153] = V(`Ž`)),
  (xn[154] = V(`ı`)),
  (xn[155] = V(`ł`)),
  (xn[156] = V(`œ`)),
  (xn[157] = V(`š`)),
  (xn[158] = V(`ž`)),
  (xn[159] = V(`�`)),
  (xn[160] = V(`€`)),
  (xn[173] = V(`�`)));
var Cn = function (e) {
    for (var t = Array(e.length), n = 0, r = e.length; n < r; n++)
      t[n] = xn[e[n]];
    return String.fromCodePoint.apply(String, t);
  },
  wn = (function () {
    function e(e) {
      ((this.populate = e), (this.value = void 0));
    }
    return (
      (e.prototype.getValue = function () {
        return this.value;
      }),
      (e.prototype.access = function () {
        return ((this.value ||= this.populate()), this.value);
      }),
      (e.prototype.invalidate = function () {
        this.value = void 0;
      }),
      (e.populatedBy = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Tn = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i = `Method ` + t + `.` + n + `() not implemented`;
      return ((r = e.call(this, i) || this), r);
    }
    return t;
  })(Error),
  En = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r = `Cannot construct ` + t + ` - it has a private constructor`;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Dn = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i = function (e) {
          return e?.name ?? e?.constructor?.name;
        },
        a =
          `Expected instance of ` +
          (Array.isArray(t) ? t.map(i) : [i(t)]).join(` or `) +
          `, ` +
          (`but got instance of ` + (n && i(n)));
      return ((r = e.call(this, a) || this), r);
    }
    return t;
  })(Error),
  On = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r = t + ` stream encoding not supported`;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  kn = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i = `Cannot call ` + t + `.` + n + `() more than once`;
      return ((r = e.call(this, i) || this), r);
    }
    return t;
  })(Error);
(function (e) {
  N(t, e);
  function t(t) {
    var n = this,
      r = `Missing catalog (ref=` + t + `)`;
    return ((n = e.call(this, r) || this), n);
  }
  return t;
})(Error);
var An = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t = e.call(this, `Can't embed page with missing Contents`) || this),
        t
      );
    }
    return t;
  })(Error),
  jn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r =
          `Unrecognized stream type: ` + (t?.contructor?.name ?? t?.name ?? t);
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Mn = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t =
          e.call(
            this,
            "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.",
          ) || this),
        t
      );
    }
    return t;
  })(Error),
  Nn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r =
          `Attempted to convert PDFArray with ` +
          t +
          ` elements to rectangle, but must have exactly 4 elements.`;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Pn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r =
          `Attempted to convert "` +
          t +
          `" to a date, but it does not match the PDF date string format.`;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Fn = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i =
          `Invalid targetIndex specified: targetIndex=` +
          t +
          ` must be less than Count=` +
          n;
      return ((r = e.call(this, i) || this), r);
    }
    return t;
  })(Error),
  In = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i =
          `Failed to ` +
          n +
          ` at targetIndex=` +
          t +
          ` due to corrupt page tree: It is likely that one or more 'Count' entries are invalid`;
      return ((r = e.call(this, i) || this), r);
    }
    return t;
  })(Error),
  Ln = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = this,
        a =
          `index should be at least ` +
          n +
          ` and at most ` +
          r +
          `, but was actually ` +
          t;
      return ((i = e.call(this, a) || this), i);
    }
    return t;
  })(Error),
  Rn = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t = e.call(this, `Attempted to set invalid field value`) || this),
        t
      );
    }
    return t;
  })(Error),
  zn = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t =
          e.call(
            this,
            `Attempted to select multiple values for single-select field`,
          ) || this),
        t
      );
    }
    return t;
  })(Error),
  Bn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r = `No /DA (default appearance) entry found for field: ` + t;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Vn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r = `No Tf operator found for DA of field: ` + t;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Hn = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i =
          `Failed to parse number ` +
          (`(line:` +
            t.line +
            ` col:` +
            t.column +
            ` offset=` +
            t.offset +
            `): "` +
            n +
            `"`);
      return ((r = e.call(this, i) || this), r);
    }
    return t;
  })(Error),
  Un = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i =
          `Failed to parse PDF document ` +
          (`(line:` +
            t.line +
            ` col:` +
            t.column +
            ` offset=` +
            t.offset +
            `): ` +
            n);
      return ((r = e.call(this, i) || this), r);
    }
    return t;
  })(Error),
  Wn = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = this,
        a = `Expected next byte to be ` + n + ` but it was actually ` + r;
      return ((i = e.call(this, t, a) || this), i);
    }
    return t;
  })(Un),
  Gn = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i = `Failed to parse PDF object starting with the following byte: ` + n;
      return ((r = e.call(this, t, i) || this), r);
    }
    return t;
  })(Un),
  Kn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this;
      return (
        (n = e.call(this, t, `Failed to parse invalid PDF object`) || this),
        n
      );
    }
    return t;
  })(Un),
  qn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this;
      return ((n = e.call(this, t, `Failed to parse PDF stream`) || this), n);
    }
    return t;
  })(Un),
  Jn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this;
      return (
        (n =
          e.call(
            this,
            t,
            `Failed to parse PDF literal string due to unbalanced parenthesis`,
          ) || this),
        n
      );
    }
    return t;
  })(Un),
  Yn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this;
      return ((n = e.call(this, t, `Parser stalled`) || this), n);
    }
    return t;
  })(Un),
  Xn = (function (e) {
    N(t, e);
    function t(t) {
      var n = this;
      return ((n = e.call(this, t, `No PDF header found`) || this), n);
    }
    return t;
  })(Un),
  Zn = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i = `Did not find expected keyword '` + Je(n) + `'`;
      return ((r = e.call(this, t, i) || this), r);
    }
    return t;
  })(Un),
  Qn;
(function (e) {
  ((e[(e.Null = 0)] = `Null`),
    (e[(e.Backspace = 8)] = `Backspace`),
    (e[(e.Tab = 9)] = `Tab`),
    (e[(e.Newline = 10)] = `Newline`),
    (e[(e.FormFeed = 12)] = `FormFeed`),
    (e[(e.CarriageReturn = 13)] = `CarriageReturn`),
    (e[(e.Space = 32)] = `Space`),
    (e[(e.ExclamationPoint = 33)] = `ExclamationPoint`),
    (e[(e.Hash = 35)] = `Hash`),
    (e[(e.Percent = 37)] = `Percent`),
    (e[(e.LeftParen = 40)] = `LeftParen`),
    (e[(e.RightParen = 41)] = `RightParen`),
    (e[(e.Plus = 43)] = `Plus`),
    (e[(e.Minus = 45)] = `Minus`),
    (e[(e.Dash = 45)] = `Dash`),
    (e[(e.Period = 46)] = `Period`),
    (e[(e.ForwardSlash = 47)] = `ForwardSlash`),
    (e[(e.Zero = 48)] = `Zero`),
    (e[(e.One = 49)] = `One`),
    (e[(e.Two = 50)] = `Two`),
    (e[(e.Three = 51)] = `Three`),
    (e[(e.Four = 52)] = `Four`),
    (e[(e.Five = 53)] = `Five`),
    (e[(e.Six = 54)] = `Six`),
    (e[(e.Seven = 55)] = `Seven`),
    (e[(e.Eight = 56)] = `Eight`),
    (e[(e.Nine = 57)] = `Nine`),
    (e[(e.LessThan = 60)] = `LessThan`),
    (e[(e.GreaterThan = 62)] = `GreaterThan`),
    (e[(e.A = 65)] = `A`),
    (e[(e.D = 68)] = `D`),
    (e[(e.E = 69)] = `E`),
    (e[(e.F = 70)] = `F`),
    (e[(e.O = 79)] = `O`),
    (e[(e.P = 80)] = `P`),
    (e[(e.R = 82)] = `R`),
    (e[(e.LeftSquareBracket = 91)] = `LeftSquareBracket`),
    (e[(e.BackSlash = 92)] = `BackSlash`),
    (e[(e.RightSquareBracket = 93)] = `RightSquareBracket`),
    (e[(e.a = 97)] = `a`),
    (e[(e.b = 98)] = `b`),
    (e[(e.d = 100)] = `d`),
    (e[(e.e = 101)] = `e`),
    (e[(e.f = 102)] = `f`),
    (e[(e.i = 105)] = `i`),
    (e[(e.j = 106)] = `j`),
    (e[(e.l = 108)] = `l`),
    (e[(e.m = 109)] = `m`),
    (e[(e.n = 110)] = `n`),
    (e[(e.o = 111)] = `o`),
    (e[(e.r = 114)] = `r`),
    (e[(e.s = 115)] = `s`),
    (e[(e.t = 116)] = `t`),
    (e[(e.u = 117)] = `u`),
    (e[(e.x = 120)] = `x`),
    (e[(e.LeftCurly = 123)] = `LeftCurly`),
    (e[(e.RightCurly = 125)] = `RightCurly`),
    (e[(e.Tilde = 126)] = `Tilde`));
})((Qn ||= {}));
var G = Qn,
  $n = (function () {
    function e(e, t) {
      ((this.major = String(e)), (this.minor = String(t)));
    }
    return (
      (e.prototype.toString = function () {
        var e = De(129);
        return (
          `%PDF-` +
          this.major +
          `.` +
          this.minor +
          `
%` +
          e +
          e +
          e +
          e
        );
      }),
      (e.prototype.sizeInBytes = function () {
        return 12 + this.major.length + this.minor.length;
      }),
      (e.prototype.copyBytesInto = function (e, t) {
        var n = t;
        return (
          (e[t++] = G.Percent),
          (e[t++] = G.P),
          (e[t++] = G.D),
          (e[t++] = G.F),
          (e[t++] = G.Dash),
          (t += Ae(this.major, e, t)),
          (e[t++] = G.Period),
          (t += Ae(this.minor, e, t)),
          (e[t++] = G.Newline),
          (e[t++] = G.Percent),
          (e[t++] = 129),
          (e[t++] = 129),
          (e[t++] = 129),
          (e[t++] = 129),
          t - n
        );
      }),
      (e.forVersion = function (t, n) {
        return new e(t, n);
      }),
      e
    );
  })(),
  er = (function () {
    function e() {}
    return (
      (e.prototype.clone = function (e) {
        throw new Tn(this.constructor.name, `clone`);
      }),
      (e.prototype.toString = function () {
        throw new Tn(this.constructor.name, `toString`);
      }),
      (e.prototype.sizeInBytes = function () {
        throw new Tn(this.constructor.name, `sizeInBytes`);
      }),
      (e.prototype.copyBytesInto = function (e, t) {
        throw new Tn(this.constructor.name, `copyBytesInto`);
      }),
      e
    );
  })(),
  K = (function (e) {
    N(t, e);
    function t(t) {
      var n = e.call(this) || this;
      return ((n.numberValue = t), (n.stringValue = yt(t)), n);
    }
    return (
      (t.prototype.asNumber = function () {
        return this.numberValue;
      }),
      (t.prototype.value = function () {
        return this.numberValue;
      }),
      (t.prototype.clone = function () {
        return t.of(this.numberValue);
      }),
      (t.prototype.toString = function () {
        return this.stringValue;
      }),
      (t.prototype.sizeInBytes = function () {
        return this.stringValue.length;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        return ((t += Ae(this.stringValue, e, t)), this.stringValue.length);
      }),
      (t.of = function (e) {
        return new t(e);
      }),
      t
    );
  })(er),
  tr = (function (e) {
    N(t, e);
    function t(t) {
      var n = e.call(this) || this;
      return ((n.array = []), (n.context = t), n);
    }
    return (
      (t.prototype.size = function () {
        return this.array.length;
      }),
      (t.prototype.push = function (e) {
        this.array.push(e);
      }),
      (t.prototype.insert = function (e, t) {
        this.array.splice(e, 0, t);
      }),
      (t.prototype.indexOf = function (e) {
        var t = this.array.indexOf(e);
        return t === -1 ? void 0 : t;
      }),
      (t.prototype.remove = function (e) {
        this.array.splice(e, 1);
      }),
      (t.prototype.set = function (e, t) {
        this.array[e] = t;
      }),
      (t.prototype.get = function (e) {
        return this.array[e];
      }),
      (t.prototype.lookupMaybe = function (e) {
        for (var t, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        return (t = this.context).lookupMaybe.apply(t, L([this.get(e)], n));
      }),
      (t.prototype.lookup = function (e) {
        for (var t, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        return (t = this.context).lookup.apply(t, L([this.get(e)], n));
      }),
      (t.prototype.asRectangle = function () {
        if (this.size() !== 4) throw new Nn(this.size());
        var e = this.lookup(0, K).asNumber(),
          t = this.lookup(1, K).asNumber(),
          n = this.lookup(2, K).asNumber(),
          r = this.lookup(3, K).asNumber();
        return { x: e, y: t, width: n - e, height: r - t };
      }),
      (t.prototype.asArray = function () {
        return this.array.slice();
      }),
      (t.prototype.clone = function (e) {
        for (
          var n = t.withContext(e || this.context), r = 0, i = this.size();
          r < i;
          r++
        )
          n.push(this.array[r]);
        return n;
      }),
      (t.prototype.toString = function () {
        for (var e = `[ `, t = 0, n = this.size(); t < n; t++)
          ((e += this.get(t).toString()), (e += ` `));
        return ((e += `]`), e);
      }),
      (t.prototype.sizeInBytes = function () {
        for (var e = 3, t = 0, n = this.size(); t < n; t++)
          e += this.get(t).sizeInBytes() + 1;
        return e;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        var n = t;
        ((e[t++] = G.LeftSquareBracket), (e[t++] = G.Space));
        for (var r = 0, i = this.size(); r < i; r++)
          ((t += this.get(r).copyBytesInto(e, t)), (e[t++] = G.Space));
        return ((e[t++] = G.RightSquareBracket), t - n);
      }),
      (t.prototype.scalePDFNumbers = function (e, t) {
        for (var n = 0, r = this.size(); n < r; n++) {
          var i = this.lookup(n);
          if (i instanceof K) {
            var a = n % 2 == 0 ? e : t;
            this.set(n, K.of(i.asNumber() * a));
          }
        }
      }),
      (t.withContext = function (e) {
        return new t(e);
      }),
      t
    );
  })(er),
  nr = {},
  rr = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this;
      if (t !== nr) throw new En(`PDFBool`);
      return ((r = e.call(this) || this), (r.value = n), r);
    }
    return (
      (t.prototype.asBoolean = function () {
        return this.value;
      }),
      (t.prototype.clone = function () {
        return this;
      }),
      (t.prototype.toString = function () {
        return String(this.value);
      }),
      (t.prototype.sizeInBytes = function () {
        return this.value ? 4 : 5;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        return this.value
          ? ((e[t++] = G.t), (e[t++] = G.r), (e[t++] = G.u), (e[t++] = G.e), 4)
          : ((e[t++] = G.f),
            (e[t++] = G.a),
            (e[t++] = G.l),
            (e[t++] = G.s),
            (e[t++] = G.e),
            5);
      }),
      (t.True = new t(nr, !0)),
      (t.False = new t(nr, !1)),
      t
    );
  })(er),
  ir = new Uint8Array(256);
((ir[G.LeftParen] = 1),
  (ir[G.RightParen] = 1),
  (ir[G.LessThan] = 1),
  (ir[G.GreaterThan] = 1),
  (ir[G.LeftSquareBracket] = 1),
  (ir[G.RightSquareBracket] = 1),
  (ir[G.LeftCurly] = 1),
  (ir[G.RightCurly] = 1),
  (ir[G.ForwardSlash] = 1),
  (ir[G.Percent] = 1));
var ar = new Uint8Array(256);
((ar[G.Null] = 1),
  (ar[G.Tab] = 1),
  (ar[G.Newline] = 1),
  (ar[G.FormFeed] = 1),
  (ar[G.CarriageReturn] = 1),
  (ar[G.Space] = 1));
for (var or = new Uint8Array(256), sr = 0, cr = 256; sr < cr; sr++)
  or[sr] = ar[sr] || ir[sr] ? 1 : 0;
or[G.Hash] = 1;
var lr = function (e) {
    return e.replace(/#([\dABCDEF]{2})/g, function (e, t) {
      return Oe(t);
    });
  },
  ur = function (e) {
    return e >= G.ExclamationPoint && e <= G.Tilde && !or[e];
  },
  dr = {},
  fr = new Map(),
  q = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this;
      if (t !== dr) throw new En(`PDFName`);
      r = e.call(this) || this;
      for (var i = `/`, a = 0, o = n.length; a < o; a++) {
        var s = n[a],
          c = V(s);
        i += ur(c) ? s : `#` + Ee(c);
      }
      return ((r.encodedName = i), r);
    }
    return (
      (t.prototype.asBytes = function () {
        for (
          var e = [],
            t = ``,
            n = !1,
            r = function (t) {
              (t !== void 0 && e.push(t), (n = !1));
            },
            i = 1,
            a = this.encodedName.length;
          i < a;
          i++
        ) {
          var o = this.encodedName[i],
            s = V(o),
            c = this.encodedName[i + 1];
          n
            ? (s >= G.Zero && s <= G.Nine) ||
              (s >= G.a && s <= G.f) ||
              (s >= G.A && s <= G.F)
              ? ((t += o),
                (t.length === 2 ||
                  !(
                    (c >= `0` && c <= `9`) ||
                    (c >= `a` && c <= `f`) ||
                    (c >= `A` && c <= `F`)
                  )) &&
                  (r(parseInt(t, 16)), (t = ``)))
              : r(s)
            : s === G.Hash
              ? (n = !0)
              : r(s);
        }
        return new Uint8Array(e);
      }),
      (t.prototype.decodeText = function () {
        var e = this.asBytes();
        return String.fromCharCode.apply(String, Array.from(e));
      }),
      (t.prototype.asString = function () {
        return this.encodedName;
      }),
      (t.prototype.value = function () {
        return this.encodedName;
      }),
      (t.prototype.clone = function () {
        return this;
      }),
      (t.prototype.toString = function () {
        return this.encodedName;
      }),
      (t.prototype.sizeInBytes = function () {
        return this.encodedName.length;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        return ((t += Ae(this.encodedName, e, t)), this.encodedName.length);
      }),
      (t.of = function (e) {
        var n = lr(e),
          r = fr.get(n);
        return (r || ((r = new t(dr, n)), fr.set(n, r)), r);
      }),
      (t.Length = t.of(`Length`)),
      (t.FlateDecode = t.of(`FlateDecode`)),
      (t.Resources = t.of(`Resources`)),
      (t.Font = t.of(`Font`)),
      (t.XObject = t.of(`XObject`)),
      (t.ExtGState = t.of(`ExtGState`)),
      (t.Contents = t.of(`Contents`)),
      (t.Type = t.of(`Type`)),
      (t.Parent = t.of(`Parent`)),
      (t.MediaBox = t.of(`MediaBox`)),
      (t.Page = t.of(`Page`)),
      (t.Annots = t.of(`Annots`)),
      (t.TrimBox = t.of(`TrimBox`)),
      (t.ArtBox = t.of(`ArtBox`)),
      (t.BleedBox = t.of(`BleedBox`)),
      (t.CropBox = t.of(`CropBox`)),
      (t.Rotate = t.of(`Rotate`)),
      (t.Title = t.of(`Title`)),
      (t.Author = t.of(`Author`)),
      (t.Subject = t.of(`Subject`)),
      (t.Creator = t.of(`Creator`)),
      (t.Keywords = t.of(`Keywords`)),
      (t.Producer = t.of(`Producer`)),
      (t.CreationDate = t.of(`CreationDate`)),
      (t.ModDate = t.of(`ModDate`)),
      t
    );
  })(er),
  pr = new ((function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.asNull = function () {
        return null;
      }),
      (t.prototype.clone = function () {
        return this;
      }),
      (t.prototype.toString = function () {
        return `null`;
      }),
      (t.prototype.sizeInBytes = function () {
        return 4;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        return (
          (e[t++] = G.n),
          (e[t++] = G.u),
          (e[t++] = G.l),
          (e[t++] = G.l),
          4
        );
      }),
      t
    );
  })(er))(),
  mr = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this) || this;
      return ((r.dict = t), (r.context = n), r);
    }
    return (
      (t.prototype.keys = function () {
        return Array.from(this.dict.keys());
      }),
      (t.prototype.values = function () {
        return Array.from(this.dict.values());
      }),
      (t.prototype.entries = function () {
        return Array.from(this.dict.entries());
      }),
      (t.prototype.set = function (e, t) {
        this.dict.set(e, t);
      }),
      (t.prototype.get = function (e, t) {
        t === void 0 && (t = !1);
        var n = this.dict.get(e);
        if (n !== pr || t) return n;
      }),
      (t.prototype.has = function (e) {
        var t = this.dict.get(e);
        return t !== void 0 && t !== pr;
      }),
      (t.prototype.lookupMaybe = function (e) {
        for (var t, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        var i = n.includes(pr),
          a = (t = this.context).lookupMaybe.apply(t, L([this.get(e, i)], n));
        if (a !== pr || i) return a;
      }),
      (t.prototype.lookup = function (e) {
        for (var t, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        var i = n.includes(pr),
          a = (t = this.context).lookup.apply(t, L([this.get(e, i)], n));
        if (a !== pr || i) return a;
      }),
      (t.prototype.delete = function (e) {
        return this.dict.delete(e);
      }),
      (t.prototype.asMap = function () {
        return new Map(this.dict);
      }),
      (t.prototype.uniqueKey = function (e) {
        e === void 0 && (e = ``);
        for (
          var t = this.keys(), n = q.of(this.context.addRandomSuffix(e, 10));
          t.includes(n);
        )
          n = q.of(this.context.addRandomSuffix(e, 10));
        return n;
      }),
      (t.prototype.clone = function (e) {
        for (
          var n = t.withContext(e || this.context),
            r = this.entries(),
            i = 0,
            a = r.length;
          i < a;
          i++
        ) {
          var o = r[i],
            s = o[0],
            c = o[1];
          n.set(s, c);
        }
        return n;
      }),
      (t.prototype.toString = function () {
        for (
          var e = `<<
`,
            t = this.entries(),
            n = 0,
            r = t.length;
          n < r;
          n++
        ) {
          var i = t[n],
            a = i[0],
            o = i[1];
          e +=
            a.toString() +
            ` ` +
            o.toString() +
            `
`;
        }
        return ((e += `>>`), e);
      }),
      (t.prototype.sizeInBytes = function () {
        for (var e = 5, t = this.entries(), n = 0, r = t.length; n < r; n++) {
          var i = t[n],
            a = i[0],
            o = i[1];
          e += a.sizeInBytes() + o.sizeInBytes() + 2;
        }
        return e;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        var n = t;
        ((e[t++] = G.LessThan), (e[t++] = G.LessThan), (e[t++] = G.Newline));
        for (var r = this.entries(), i = 0, a = r.length; i < a; i++) {
          var o = r[i],
            s = o[0],
            c = o[1];
          ((t += s.copyBytesInto(e, t)),
            (e[t++] = G.Space),
            (t += c.copyBytesInto(e, t)),
            (e[t++] = G.Newline));
        }
        return ((e[t++] = G.GreaterThan), (e[t++] = G.GreaterThan), t - n);
      }),
      (t.withContext = function (e) {
        return new t(new Map(), e);
      }),
      (t.fromMapWithContext = function (e, n) {
        return new t(e, n);
      }),
      t
    );
  })(er),
  hr = (function (e) {
    N(t, e);
    function t(t) {
      var n = e.call(this) || this;
      return ((n.dict = t), n);
    }
    return (
      (t.prototype.clone = function (e) {
        throw new Tn(this.constructor.name, `clone`);
      }),
      (t.prototype.getContentsString = function () {
        throw new Tn(this.constructor.name, `getContentsString`);
      }),
      (t.prototype.getContents = function () {
        throw new Tn(this.constructor.name, `getContents`);
      }),
      (t.prototype.getContentsSize = function () {
        throw new Tn(this.constructor.name, `getContentsSize`);
      }),
      (t.prototype.updateDict = function () {
        var e = this.getContentsSize();
        this.dict.set(q.Length, K.of(e));
      }),
      (t.prototype.sizeInBytes = function () {
        return (
          this.updateDict(),
          this.dict.sizeInBytes() + this.getContentsSize() + 18
        );
      }),
      (t.prototype.toString = function () {
        this.updateDict();
        var e = this.dict.toString();
        return (
          (e += `
stream
`),
          (e += this.getContentsString()),
          (e += `
endstream`),
          e
        );
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        this.updateDict();
        var n = t;
        ((t += this.dict.copyBytesInto(e, t)),
          (e[t++] = G.Newline),
          (e[t++] = G.s),
          (e[t++] = G.t),
          (e[t++] = G.r),
          (e[t++] = G.e),
          (e[t++] = G.a),
          (e[t++] = G.m),
          (e[t++] = G.Newline));
        for (var r = this.getContents(), i = 0, a = r.length; i < a; i++)
          e[t++] = r[i];
        return (
          (e[t++] = G.Newline),
          (e[t++] = G.e),
          (e[t++] = G.n),
          (e[t++] = G.d),
          (e[t++] = G.s),
          (e[t++] = G.t),
          (e[t++] = G.r),
          (e[t++] = G.e),
          (e[t++] = G.a),
          (e[t++] = G.m),
          t - n
        );
      }),
      t
    );
  })(er),
  gr = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this, t) || this;
      return ((r.contents = n), r);
    }
    return (
      (t.prototype.asUint8Array = function () {
        return this.contents.slice();
      }),
      (t.prototype.clone = function (e) {
        return t.of(this.dict.clone(e), this.contents.slice());
      }),
      (t.prototype.getContentsString = function () {
        return Je(this.contents);
      }),
      (t.prototype.getContents = function () {
        return this.contents;
      }),
      (t.prototype.getContentsSize = function () {
        return this.contents.length;
      }),
      (t.of = function (e, n) {
        return new t(e, n);
      }),
      t
    );
  })(hr),
  _r = {},
  vr = new Map(),
  yr = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = this;
      if (t !== _r) throw new En(`PDFRef`);
      return (
        (i = e.call(this) || this),
        (i.objectNumber = n),
        (i.generationNumber = r),
        (i.tag = n + ` ` + r + ` R`),
        i
      );
    }
    return (
      (t.prototype.clone = function () {
        return this;
      }),
      (t.prototype.toString = function () {
        return this.tag;
      }),
      (t.prototype.sizeInBytes = function () {
        return this.tag.length;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        return ((t += Ae(this.tag, e, t)), this.tag.length);
      }),
      (t.of = function (e, n) {
        n === void 0 && (n = 0);
        var r = e + ` ` + n + ` R`,
          i = vr.get(r);
        return (i || ((i = new t(_r, e, n)), vr.set(r, i)), i);
      }),
      t
    );
  })(er),
  br = (function () {
    function e(e, t) {
      ((this.name = e), (this.args = t || []));
    }
    return (
      (e.prototype.clone = function (t) {
        for (var n = Array(this.args.length), r = 0, i = n.length; r < i; r++) {
          var a = this.args[r];
          n[r] = a instanceof er ? a.clone(t) : a;
        }
        return e.of(this.name, n);
      }),
      (e.prototype.toString = function () {
        for (var e = ``, t = 0, n = this.args.length; t < n; t++)
          e += String(this.args[t]) + ` `;
        return ((e += this.name), e);
      }),
      (e.prototype.sizeInBytes = function () {
        for (var e = 0, t = 0, n = this.args.length; t < n; t++) {
          var r = this.args[t];
          e += (r instanceof er ? r.sizeInBytes() : r.length) + 1;
        }
        return ((e += this.name.length), e);
      }),
      (e.prototype.copyBytesInto = function (e, t) {
        for (var n = t, r = 0, i = this.args.length; r < i; r++) {
          var a = this.args[r];
          (a instanceof er ? (t += a.copyBytesInto(e, t)) : (t += Ae(a, e, t)),
            (e[t++] = G.Space));
        }
        return ((t += Ae(this.name, e, t)), t - n);
      }),
      (e.of = function (t, n) {
        return new e(t, n);
      }),
      e
    );
  })(),
  xr;
(function (e) {
  ((e.NonStrokingColor = `sc`),
    (e.NonStrokingColorN = `scn`),
    (e.NonStrokingColorRgb = `rg`),
    (e.NonStrokingColorGray = `g`),
    (e.NonStrokingColorCmyk = `k`),
    (e.NonStrokingColorspace = `cs`),
    (e.StrokingColor = `SC`),
    (e.StrokingColorN = `SCN`),
    (e.StrokingColorRgb = `RG`),
    (e.StrokingColorGray = `G`),
    (e.StrokingColorCmyk = `K`),
    (e.StrokingColorspace = `CS`),
    (e.BeginMarkedContentSequence = `BDC`),
    (e.BeginMarkedContent = `BMC`),
    (e.EndMarkedContent = `EMC`),
    (e.MarkedContentPointWithProps = `DP`),
    (e.MarkedContentPoint = `MP`),
    (e.DrawObject = `Do`),
    (e.ConcatTransformationMatrix = `cm`),
    (e.PopGraphicsState = `Q`),
    (e.PushGraphicsState = `q`),
    (e.SetFlatness = `i`),
    (e.SetGraphicsStateParams = `gs`),
    (e.SetLineCapStyle = `J`),
    (e.SetLineDashPattern = `d`),
    (e.SetLineJoinStyle = `j`),
    (e.SetLineMiterLimit = `M`),
    (e.SetLineWidth = `w`),
    (e.SetTextMatrix = `Tm`),
    (e.SetRenderingIntent = `ri`),
    (e.AppendRectangle = `re`),
    (e.BeginInlineImage = `BI`),
    (e.BeginInlineImageData = `ID`),
    (e.EndInlineImage = `EI`),
    (e.ClipEvenOdd = `W*`),
    (e.ClipNonZero = `W`),
    (e.CloseAndStroke = `s`),
    (e.CloseFillEvenOddAndStroke = `b*`),
    (e.CloseFillNonZeroAndStroke = `b`),
    (e.ClosePath = `h`),
    (e.AppendBezierCurve = `c`),
    (e.CurveToReplicateFinalPoint = `y`),
    (e.CurveToReplicateInitialPoint = `v`),
    (e.EndPath = `n`),
    (e.FillEvenOddAndStroke = `B*`),
    (e.FillEvenOdd = `f*`),
    (e.FillNonZeroAndStroke = `B`),
    (e.FillNonZero = `f`),
    (e.LegacyFillNonZero = `F`),
    (e.LineTo = `l`),
    (e.MoveTo = `m`),
    (e.ShadingFill = `sh`),
    (e.StrokePath = `S`),
    (e.BeginText = `BT`),
    (e.EndText = `ET`),
    (e.MoveText = `Td`),
    (e.MoveTextSetLeading = `TD`),
    (e.NextLine = `T*`),
    (e.SetCharacterSpacing = `Tc`),
    (e.SetFontAndSize = `Tf`),
    (e.SetTextHorizontalScaling = `Tz`),
    (e.SetTextLineHeight = `TL`),
    (e.SetTextRenderingMode = `Tr`),
    (e.SetTextRise = `Ts`),
    (e.SetWordSpacing = `Tw`),
    (e.ShowText = `Tj`),
    (e.ShowTextAdjusted = `TJ`),
    (e.ShowTextLine = `'`),
    (e.ShowTextLineAndSpace = `"`),
    (e.Type3D0 = `d0`),
    (e.Type3D1 = `d1`),
    (e.BeginCompatibilitySection = `BX`),
    (e.EndCompatibilitySection = `EX`));
})((xr ||= {}));
var Sr = xr,
  Cr = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this, t) || this;
      return (
        (r.computeContents = function () {
          var e = r.getUnencodedContents();
          return r.encode ? Rt.default.deflate(e) : e;
        }),
        (r.encode = n),
        n && t.set(q.of(`Filter`), q.of(`FlateDecode`)),
        (r.contentsCache = wn.populatedBy(r.computeContents)),
        r
      );
    }
    return (
      (t.prototype.getContents = function () {
        return this.contentsCache.access();
      }),
      (t.prototype.getContentsSize = function () {
        return this.contentsCache.access().length;
      }),
      (t.prototype.getUnencodedContents = function () {
        throw new Tn(this.constructor.name, `getUnencodedContents`);
      }),
      t
    );
  })(hr),
  wr = (function (e) {
    N(t, e);
    function t(t, n, r) {
      r === void 0 && (r = !0);
      var i = e.call(this, t, r) || this;
      return ((i.operators = n), i);
    }
    return (
      (t.prototype.push = function () {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        (e = this.operators).push.apply(e, t);
      }),
      (t.prototype.clone = function (e) {
        for (
          var n = Array(this.operators.length),
            r = 0,
            i = this.operators.length;
          r < i;
          r++
        )
          n[r] = this.operators[r].clone(e);
        var a = this,
          o = a.dict,
          s = a.encode;
        return t.of(o.clone(e), n, s);
      }),
      (t.prototype.getContentsString = function () {
        for (var e = ``, t = 0, n = this.operators.length; t < n; t++)
          e +=
            this.operators[t] +
            `
`;
        return e;
      }),
      (t.prototype.getUnencodedContents = function () {
        for (
          var e = new Uint8Array(this.getUnencodedContentsSize()),
            t = 0,
            n = 0,
            r = this.operators.length;
          n < r;
          n++
        )
          ((t += this.operators[n].copyBytesInto(e, t)), (e[t++] = G.Newline));
        return e;
      }),
      (t.prototype.getUnencodedContentsSize = function () {
        for (var e = 0, t = 0, n = this.operators.length; t < n; t++)
          e += this.operators[t].sizeInBytes() + 1;
        return e;
      }),
      (t.of = function (e, n, r) {
        return (r === void 0 && (r = !0), new t(e, n, r));
      }),
      t
    );
  })(Cr),
  Tr = (function () {
    function e(e) {
      this.seed = e;
    }
    return (
      (e.prototype.nextInt = function () {
        var e = Math.sin(this.seed++) * 1e4;
        return e - Math.floor(e);
      }),
      (e.withSeed = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Er = function (e, t) {
    var n = e[0],
      r = t[0];
    return n.objectNumber - r.objectNumber;
  },
  Dr = (function () {
    function e() {
      ((this.largestObjectNumber = 0),
        (this.header = $n.forVersion(1, 7)),
        (this.trailerInfo = {}),
        (this.indirectObjects = new Map()),
        (this.rng = Tr.withSeed(1)));
    }
    return (
      (e.prototype.assign = function (e, t) {
        (this.indirectObjects.set(e, t),
          e.objectNumber > this.largestObjectNumber &&
            (this.largestObjectNumber = e.objectNumber));
      }),
      (e.prototype.nextRef = function () {
        return (
          (this.largestObjectNumber += 1),
          yr.of(this.largestObjectNumber)
        );
      }),
      (e.prototype.register = function (e) {
        var t = this.nextRef();
        return (this.assign(t, e), t);
      }),
      (e.prototype.delete = function (e) {
        return this.indirectObjects.delete(e);
      }),
      (e.prototype.lookupMaybe = function (e) {
        var t = [...arguments].slice(1),
          n = t.includes(pr),
          r = e instanceof yr ? this.indirectObjects.get(e) : e;
        if (r && (r !== pr || n)) {
          for (var i = 0, a = t.length; i < a; i++) {
            var o = t[i];
            if (o === pr) {
              if (r === pr) return r;
            } else if (r instanceof o) return r;
          }
          throw new Dn(t, r);
        }
      }),
      (e.prototype.lookup = function (e) {
        var t = [...arguments].slice(1),
          n = e instanceof yr ? this.indirectObjects.get(e) : e;
        if (t.length === 0) return n;
        for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          if (a === pr) {
            if (n === pr) return n;
          } else if (n instanceof a) return n;
        }
        throw new Dn(t, n);
      }),
      (e.prototype.getObjectRef = function (e) {
        for (
          var t = Array.from(this.indirectObjects.entries()),
            n = 0,
            r = t.length;
          n < r;
          n++
        ) {
          var i = t[n],
            a = i[0];
          if (i[1] === e) return a;
        }
      }),
      (e.prototype.enumerateIndirectObjects = function () {
        return Array.from(this.indirectObjects.entries()).sort(Er);
      }),
      (e.prototype.obj = function (e) {
        if (e instanceof er) return e;
        if (e == null) return pr;
        if (typeof e == `string`) return q.of(e);
        if (typeof e == `number`) return K.of(e);
        if (typeof e == `boolean`) return e ? rr.True : rr.False;
        if (Array.isArray(e)) {
          for (var t = tr.withContext(this), n = 0, r = e.length; n < r; n++)
            t.push(this.obj(e[n]));
          return t;
        }
        for (
          var i = mr.withContext(this), a = Object.keys(e), n = 0, r = a.length;
          n < r;
          n++
        ) {
          var o = a[n],
            s = e[o];
          s !== void 0 && i.set(q.of(o), this.obj(s));
        }
        return i;
      }),
      (e.prototype.stream = function (e, t) {
        return (t === void 0 && (t = {}), gr.of(this.obj(t), Ge(e)));
      }),
      (e.prototype.flateStream = function (e, t) {
        return (
          t === void 0 && (t = {}),
          this.stream(
            Rt.default.deflate(Ge(e)),
            P(P({}, t), { Filter: `FlateDecode` }),
          )
        );
      }),
      (e.prototype.contentStream = function (e, t) {
        return (t === void 0 && (t = {}), wr.of(this.obj(t), e));
      }),
      (e.prototype.formXObject = function (e, t) {
        return (
          t === void 0 && (t = {}),
          this.contentStream(
            e,
            P(
              P(
                {
                  BBox: this.obj([0, 0, 0, 0]),
                  Matrix: this.obj([1, 0, 0, 1, 0, 0]),
                },
                t,
              ),
              { Type: `XObject`, Subtype: `Form` },
            ),
          )
        );
      }),
      (e.prototype.getPushGraphicsStateContentStream = function () {
        if (this.pushGraphicsStateContentStreamRef)
          return this.pushGraphicsStateContentStreamRef;
        var e = this.obj({}),
          t = br.of(Sr.PushGraphicsState),
          n = wr.of(e, [t]);
        return (
          (this.pushGraphicsStateContentStreamRef = this.register(n)),
          this.pushGraphicsStateContentStreamRef
        );
      }),
      (e.prototype.getPopGraphicsStateContentStream = function () {
        if (this.popGraphicsStateContentStreamRef)
          return this.popGraphicsStateContentStreamRef;
        var e = this.obj({}),
          t = br.of(Sr.PopGraphicsState),
          n = wr.of(e, [t]);
        return (
          (this.popGraphicsStateContentStreamRef = this.register(n)),
          this.popGraphicsStateContentStreamRef
        );
      }),
      (e.prototype.addRandomSuffix = function (e, t) {
        return (
          t === void 0 && (t = 4),
          e + `-` + Math.floor(this.rng.nextInt() * 10 ** t)
        );
      }),
      (e.create = function () {
        return new e();
      }),
      e
    );
  })(),
  Or = (function (e) {
    N(t, e);
    function t(t, n, r) {
      r === void 0 && (r = !0);
      var i = e.call(this, t, n) || this;
      return ((i.normalized = !1), (i.autoNormalizeCTM = r), i);
    }
    return (
      (t.prototype.clone = function (e) {
        for (
          var n = t.fromMapWithContext(
              new Map(),
              e || this.context,
              this.autoNormalizeCTM,
            ),
            r = this.entries(),
            i = 0,
            a = r.length;
          i < a;
          i++
        ) {
          var o = r[i],
            s = o[0],
            c = o[1];
          n.set(s, c);
        }
        return n;
      }),
      (t.prototype.Parent = function () {
        return this.lookupMaybe(q.Parent, mr);
      }),
      (t.prototype.Contents = function () {
        return this.lookup(q.of(`Contents`));
      }),
      (t.prototype.Annots = function () {
        return this.lookupMaybe(q.Annots, tr);
      }),
      (t.prototype.BleedBox = function () {
        return this.lookupMaybe(q.BleedBox, tr);
      }),
      (t.prototype.TrimBox = function () {
        return this.lookupMaybe(q.TrimBox, tr);
      }),
      (t.prototype.ArtBox = function () {
        return this.lookupMaybe(q.ArtBox, tr);
      }),
      (t.prototype.Resources = function () {
        var e = this.getInheritableAttribute(q.Resources);
        return this.context.lookupMaybe(e, mr);
      }),
      (t.prototype.MediaBox = function () {
        var e = this.getInheritableAttribute(q.MediaBox);
        return this.context.lookup(e, tr);
      }),
      (t.prototype.CropBox = function () {
        var e = this.getInheritableAttribute(q.CropBox);
        return this.context.lookupMaybe(e, tr);
      }),
      (t.prototype.Rotate = function () {
        var e = this.getInheritableAttribute(q.Rotate);
        return this.context.lookupMaybe(e, K);
      }),
      (t.prototype.getInheritableAttribute = function (e) {
        var t;
        return (
          this.ascend(function (n) {
            t ||= n.get(e);
          }),
          t
        );
      }),
      (t.prototype.setParent = function (e) {
        this.set(q.Parent, e);
      }),
      (t.prototype.addContentStream = function (e) {
        var t = this.normalizedEntries().Contents || this.context.obj([]);
        (this.set(q.Contents, t), t.push(e));
      }),
      (t.prototype.wrapContentStreams = function (e, t) {
        var n = this.Contents();
        return n instanceof tr && (n.insert(0, e), n.push(t), !0);
      }),
      (t.prototype.addAnnot = function (e) {
        this.normalizedEntries().Annots.push(e);
      }),
      (t.prototype.removeAnnot = function (e) {
        var t = this.normalizedEntries().Annots,
          n = t.indexOf(e);
        n !== void 0 && t.remove(n);
      }),
      (t.prototype.setFontDictionary = function (e, t) {
        this.normalizedEntries().Font.set(e, t);
      }),
      (t.prototype.newFontDictionaryKey = function (e) {
        return this.normalizedEntries().Font.uniqueKey(e);
      }),
      (t.prototype.newFontDictionary = function (e, t) {
        var n = this.newFontDictionaryKey(e);
        return (this.setFontDictionary(n, t), n);
      }),
      (t.prototype.setXObject = function (e, t) {
        this.normalizedEntries().XObject.set(e, t);
      }),
      (t.prototype.newXObjectKey = function (e) {
        return this.normalizedEntries().XObject.uniqueKey(e);
      }),
      (t.prototype.newXObject = function (e, t) {
        var n = this.newXObjectKey(e);
        return (this.setXObject(n, t), n);
      }),
      (t.prototype.setExtGState = function (e, t) {
        this.normalizedEntries().ExtGState.set(e, t);
      }),
      (t.prototype.newExtGStateKey = function (e) {
        return this.normalizedEntries().ExtGState.uniqueKey(e);
      }),
      (t.prototype.newExtGState = function (e, t) {
        var n = this.newExtGStateKey(e);
        return (this.setExtGState(n, t), n);
      }),
      (t.prototype.ascend = function (e) {
        e(this);
        var t = this.Parent();
        t && t.ascend(e);
      }),
      (t.prototype.normalize = function () {
        if (!this.normalized) {
          var e = this.context,
            t = this.get(q.Contents);
          (this.context.lookup(t) instanceof hr &&
            this.set(q.Contents, e.obj([t])),
            this.autoNormalizeCTM &&
              this.wrapContentStreams(
                this.context.getPushGraphicsStateContentStream(),
                this.context.getPopGraphicsStateContentStream(),
              ));
          var n = this.getInheritableAttribute(q.Resources),
            r = e.lookupMaybe(n, mr) || e.obj({});
          this.set(q.Resources, r);
          var i = r.lookupMaybe(q.Font, mr) || e.obj({});
          r.set(q.Font, i);
          var a = r.lookupMaybe(q.XObject, mr) || e.obj({});
          r.set(q.XObject, a);
          var o = r.lookupMaybe(q.ExtGState, mr) || e.obj({});
          r.set(q.ExtGState, o);
          var s = this.Annots() || e.obj([]);
          (this.set(q.Annots, s), (this.normalized = !0));
        }
      }),
      (t.prototype.normalizedEntries = function () {
        this.normalize();
        var e = this.Annots(),
          t = this.Resources();
        return {
          Annots: e,
          Resources: t,
          Contents: this.Contents(),
          Font: t.lookup(q.Font, mr),
          XObject: t.lookup(q.XObject, mr),
          ExtGState: t.lookup(q.ExtGState, mr),
        };
      }),
      (t.InheritableEntries = [`Resources`, `MediaBox`, `CropBox`, `Rotate`]),
      (t.withContextAndParent = function (e, n) {
        var r = new Map();
        return (
          r.set(q.Type, q.Page),
          r.set(q.Parent, n),
          r.set(q.Resources, e.obj({})),
          r.set(q.MediaBox, e.obj([0, 0, 612, 792])),
          new t(r, e, !1)
        );
      }),
      (t.fromMapWithContext = function (e, n, r) {
        return (r === void 0 && (r = !0), new t(e, n, r));
      }),
      t
    );
  })(mr),
  kr = (function () {
    function e(e, t) {
      var n = this;
      ((this.traversedObjects = new Map()),
        (this.copy = function (e) {
          return e instanceof Or
            ? n.copyPDFPage(e)
            : e instanceof mr
              ? n.copyPDFDict(e)
              : e instanceof tr
                ? n.copyPDFArray(e)
                : e instanceof hr
                  ? n.copyPDFStream(e)
                  : e instanceof yr
                    ? n.copyPDFIndirectObject(e)
                    : e.clone();
        }),
        (this.copyPDFPage = function (e) {
          for (
            var t = e.clone(), r = Or.InheritableEntries, i = 0, a = r.length;
            i < a;
            i++
          ) {
            var o = q.of(r[i]),
              s = t.getInheritableAttribute(o);
            !t.get(o) && s && t.set(o, s);
          }
          return (t.delete(q.of(`Parent`)), n.copyPDFDict(t));
        }),
        (this.copyPDFDict = function (e) {
          if (n.traversedObjects.has(e)) return n.traversedObjects.get(e);
          var t = e.clone(n.dest);
          n.traversedObjects.set(e, t);
          for (var r = e.entries(), i = 0, a = r.length; i < a; i++) {
            var o = r[i],
              s = o[0],
              c = o[1];
            t.set(s, n.copy(c));
          }
          return t;
        }),
        (this.copyPDFArray = function (e) {
          if (n.traversedObjects.has(e)) return n.traversedObjects.get(e);
          var t = e.clone(n.dest);
          n.traversedObjects.set(e, t);
          for (var r = 0, i = e.size(); r < i; r++) {
            var a = e.get(r);
            t.set(r, n.copy(a));
          }
          return t;
        }),
        (this.copyPDFStream = function (e) {
          if (n.traversedObjects.has(e)) return n.traversedObjects.get(e);
          var t = e.clone(n.dest);
          n.traversedObjects.set(e, t);
          for (var r = e.dict.entries(), i = 0, a = r.length; i < a; i++) {
            var o = r[i],
              s = o[0],
              c = o[1];
            t.dict.set(s, n.copy(c));
          }
          return t;
        }),
        (this.copyPDFIndirectObject = function (e) {
          if (!n.traversedObjects.has(e)) {
            var t = n.dest.nextRef();
            n.traversedObjects.set(e, t);
            var r = n.src.lookup(e);
            if (r) {
              var i = n.copy(r);
              n.dest.assign(t, i);
            }
          }
          return n.traversedObjects.get(e);
        }),
        (this.src = e),
        (this.dest = t));
    }
    return (
      (e.for = function (t, n) {
        return new e(t, n);
      }),
      e
    );
  })(),
  Ar = (function () {
    function e(e) {
      ((this.subsections = e ? [[e]] : []),
        (this.chunkIdx = 0),
        (this.chunkLength = +!!e));
    }
    return (
      (e.prototype.addEntry = function (e, t) {
        this.append({ ref: e, offset: t, deleted: !1 });
      }),
      (e.prototype.addDeletedEntry = function (e, t) {
        this.append({ ref: e, offset: t, deleted: !0 });
      }),
      (e.prototype.toString = function () {
        for (
          var e = `xref
`,
            t = 0,
            n = this.subsections.length;
          t < n;
          t++
        ) {
          var r = this.subsections[t];
          e +=
            r[0].ref.objectNumber +
            ` ` +
            r.length +
            `
`;
          for (var i = 0, a = r.length; i < a; i++) {
            var o = r[i];
            ((e += ke(String(o.offset), 10, `0`)),
              (e += ` `),
              (e += ke(String(o.ref.generationNumber), 5, `0`)),
              (e += ` `),
              (e += o.deleted ? `f` : `n`),
              (e += ` 
`));
          }
        }
        return e;
      }),
      (e.prototype.sizeInBytes = function () {
        for (var e = 5, t = 0, n = this.subsections.length; t < n; t++) {
          var r = this.subsections[t],
            i = r.length,
            a = r[0];
          ((e += 2),
            (e += String(a.ref.objectNumber).length),
            (e += String(i).length),
            (e += 20 * i));
        }
        return e;
      }),
      (e.prototype.copyBytesInto = function (e, t) {
        var n = t;
        return (
          (e[t++] = G.x),
          (e[t++] = G.r),
          (e[t++] = G.e),
          (e[t++] = G.f),
          (e[t++] = G.Newline),
          (t += this.copySubsectionsIntoBuffer(this.subsections, e, t)),
          t - n
        );
      }),
      (e.prototype.copySubsectionsIntoBuffer = function (e, t, n) {
        for (var r = n, i = e.length, a = 0; a < i; a++) {
          var o = this.subsections[a],
            s = String(o[0].ref.objectNumber);
          ((n += Ae(s, t, n)), (t[n++] = G.Space));
          var c = String(o.length);
          ((n += Ae(c, t, n)),
            (t[n++] = G.Newline),
            (n += this.copyEntriesIntoBuffer(o, t, n)));
        }
        return n - r;
      }),
      (e.prototype.copyEntriesIntoBuffer = function (e, t, n) {
        for (var r = e.length, i = 0; i < r; i++) {
          var a = e[i],
            o = ke(String(a.offset), 10, `0`);
          ((n += Ae(o, t, n)), (t[n++] = G.Space));
          var s = ke(String(a.ref.generationNumber), 5, `0`);
          ((n += Ae(s, t, n)),
            (t[n++] = G.Space),
            (t[n++] = a.deleted ? G.f : G.n),
            (t[n++] = G.Space),
            (t[n++] = G.Newline));
        }
        return 20 * r;
      }),
      (e.prototype.append = function (e) {
        if (this.chunkLength === 0) {
          (this.subsections.push([e]),
            (this.chunkIdx = 0),
            (this.chunkLength = 1));
          return;
        }
        var t = this.subsections[this.chunkIdx],
          n = t[this.chunkLength - 1];
        e.ref.objectNumber - n.ref.objectNumber > 1
          ? (this.subsections.push([e]),
            (this.chunkIdx += 1),
            (this.chunkLength = 1))
          : (t.push(e), (this.chunkLength += 1));
      }),
      (e.create = function () {
        return new e({ ref: yr.of(0, 65535), offset: 0, deleted: !0 });
      }),
      (e.createEmpty = function () {
        return new e();
      }),
      e
    );
  })(),
  jr = (function () {
    function e(e) {
      this.lastXRefOffset = String(e);
    }
    return (
      (e.prototype.toString = function () {
        return (
          `startxref
` +
          this.lastXRefOffset +
          `
%%EOF`
        );
      }),
      (e.prototype.sizeInBytes = function () {
        return 16 + this.lastXRefOffset.length;
      }),
      (e.prototype.copyBytesInto = function (e, t) {
        var n = t;
        return (
          (e[t++] = G.s),
          (e[t++] = G.t),
          (e[t++] = G.a),
          (e[t++] = G.r),
          (e[t++] = G.t),
          (e[t++] = G.x),
          (e[t++] = G.r),
          (e[t++] = G.e),
          (e[t++] = G.f),
          (e[t++] = G.Newline),
          (t += Ae(this.lastXRefOffset, e, t)),
          (e[t++] = G.Newline),
          (e[t++] = G.Percent),
          (e[t++] = G.Percent),
          (e[t++] = G.E),
          (e[t++] = G.O),
          (e[t++] = G.F),
          t - n
        );
      }),
      (e.forLastCrossRefSectionOffset = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Mr = (function () {
    function e(e) {
      this.dict = e;
    }
    return (
      (e.prototype.toString = function () {
        return (
          `trailer
` + this.dict.toString()
        );
      }),
      (e.prototype.sizeInBytes = function () {
        return 8 + this.dict.sizeInBytes();
      }),
      (e.prototype.copyBytesInto = function (e, t) {
        var n = t;
        return (
          (e[t++] = G.t),
          (e[t++] = G.r),
          (e[t++] = G.a),
          (e[t++] = G.i),
          (e[t++] = G.l),
          (e[t++] = G.e),
          (e[t++] = G.r),
          (e[t++] = G.Newline),
          (t += this.dict.copyBytesInto(e, t)),
          t - n
        );
      }),
      (e.of = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Nr = (function (e) {
    N(t, e);
    function t(t, n, r) {
      r === void 0 && (r = !0);
      var i = e.call(this, t.obj({}), r) || this;
      return (
        (i.objects = n),
        (i.offsets = i.computeObjectOffsets()),
        (i.offsetsString = i.computeOffsetsString()),
        i.dict.set(q.of(`Type`), q.of(`ObjStm`)),
        i.dict.set(q.of(`N`), K.of(i.objects.length)),
        i.dict.set(q.of(`First`), K.of(i.offsetsString.length)),
        i
      );
    }
    return (
      (t.prototype.getObjectsCount = function () {
        return this.objects.length;
      }),
      (t.prototype.clone = function (e) {
        return t.withContextAndObjects(
          e || this.dict.context,
          this.objects.slice(),
          this.encode,
        );
      }),
      (t.prototype.getContentsString = function () {
        for (
          var e = this.offsetsString, t = 0, n = this.objects.length;
          t < n;
          t++
        ) {
          var r = this.objects[t][1];
          e +=
            r +
            `
`;
        }
        return e;
      }),
      (t.prototype.getUnencodedContents = function () {
        for (
          var e = new Uint8Array(this.getUnencodedContentsSize()),
            t = Ae(this.offsetsString, e, 0),
            n = 0,
            r = this.objects.length;
          n < r;
          n++
        ) {
          var i = this.objects[n][1];
          ((t += i.copyBytesInto(e, t)), (e[t++] = G.Newline));
        }
        return e;
      }),
      (t.prototype.getUnencodedContentsSize = function () {
        return (
          this.offsetsString.length +
          We(this.offsets)[1] +
          We(this.objects)[1].sizeInBytes() +
          1
        );
      }),
      (t.prototype.computeOffsetsString = function () {
        for (var e = ``, t = 0, n = this.offsets.length; t < n; t++) {
          var r = this.offsets[t],
            i = r[0],
            a = r[1];
          e += i + ` ` + a + ` `;
        }
        return e;
      }),
      (t.prototype.computeObjectOffsets = function () {
        for (
          var e = 0,
            t = Array(this.objects.length),
            n = 0,
            r = this.objects.length;
          n < r;
          n++
        ) {
          var i = this.objects[n],
            a = i[0],
            o = i[1];
          ((t[n] = [a.objectNumber, e]), (e += o.sizeInBytes() + 1));
        }
        return t;
      }),
      (t.withContextAndObjects = function (e, n, r) {
        return (r === void 0 && (r = !0), new t(e, n, r));
      }),
      t
    );
  })(Cr),
  Pr = (function () {
    function e(e, t) {
      var n = this;
      ((this.parsedObjects = 0),
        (this.shouldWaitForTick = function (e) {
          return (
            (n.parsedObjects += e),
            n.parsedObjects % n.objectsPerTick === 0
          );
        }),
        (this.context = e),
        (this.objectsPerTick = t));
    }
    return (
      (e.prototype.serializeToBuffer = function () {
        return F(this, void 0, void 0, function () {
          var e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g;
          return I(this, function (_) {
            switch (_.label) {
              case 0:
                return [4, this.computeBufferSize()];
              case 1:
                ((e = _.sent()),
                  (t = e.size),
                  (n = e.header),
                  (r = e.indirectObjects),
                  (i = e.xref),
                  (a = e.trailerDict),
                  (o = e.trailer),
                  (s = 0),
                  (c = new Uint8Array(t)),
                  (s += n.copyBytesInto(c, s)),
                  (c[s++] = G.Newline),
                  (c[s++] = G.Newline),
                  (l = 0),
                  (u = r.length),
                  (_.label = 2));
              case 2:
                return l < u
                  ? ((d = r[l]),
                    (f = d[0]),
                    (p = d[1]),
                    (m = String(f.objectNumber)),
                    (s += Ae(m, c, s)),
                    (c[s++] = G.Space),
                    (h = String(f.generationNumber)),
                    (s += Ae(h, c, s)),
                    (c[s++] = G.Space),
                    (c[s++] = G.o),
                    (c[s++] = G.b),
                    (c[s++] = G.j),
                    (c[s++] = G.Newline),
                    (s += p.copyBytesInto(c, s)),
                    (c[s++] = G.Newline),
                    (c[s++] = G.e),
                    (c[s++] = G.n),
                    (c[s++] = G.d),
                    (c[s++] = G.o),
                    (c[s++] = G.b),
                    (c[s++] = G.j),
                    (c[s++] = G.Newline),
                    (c[s++] = G.Newline),
                    (g = p instanceof Nr ? p.getObjectsCount() : 1),
                    this.shouldWaitForTick(g) ? [4, rt()] : [3, 4])
                  : [3, 5];
              case 3:
                (_.sent(), (_.label = 4));
              case 4:
                return (l++, [3, 2]);
              case 5:
                return (
                  i && ((s += i.copyBytesInto(c, s)), (c[s++] = G.Newline)),
                  a &&
                    ((s += a.copyBytesInto(c, s)),
                    (c[s++] = G.Newline),
                    (c[s++] = G.Newline)),
                  (s += o.copyBytesInto(c, s)),
                  [2, c]
                );
            }
          });
        });
      }),
      (e.prototype.computeIndirectObjectSize = function (e) {
        var t = e[0],
          n = e[1];
        return t.sizeInBytes() + 3 + (n.sizeInBytes() + 9);
      }),
      (e.prototype.createTrailerDict = function () {
        return this.context.obj({
          Size: this.context.largestObjectNumber + 1,
          Root: this.context.trailerInfo.Root,
          Encrypt: this.context.trailerInfo.Encrypt,
          Info: this.context.trailerInfo.Info,
          ID: this.context.trailerInfo.ID,
        });
      }),
      (e.prototype.computeBufferSize = function () {
        return F(this, void 0, void 0, function () {
          var e, t, n, r, i, a, o, s, c, l, u;
          return I(this, function (d) {
            switch (d.label) {
              case 0:
                ((e = $n.forVersion(1, 7)),
                  (t = e.sizeInBytes() + 2),
                  (n = Ar.create()),
                  (r = this.context.enumerateIndirectObjects()),
                  (i = 0),
                  (a = r.length),
                  (d.label = 1));
              case 1:
                return i < a
                  ? ((o = r[i]),
                    (s = o[0]),
                    n.addEntry(s, t),
                    (t += this.computeIndirectObjectSize(o)),
                    this.shouldWaitForTick(1) ? [4, rt()] : [3, 3])
                  : [3, 4];
              case 2:
                (d.sent(), (d.label = 3));
              case 3:
                return (i++, [3, 1]);
              case 4:
                return (
                  (c = t),
                  (t += n.sizeInBytes() + 1),
                  (l = Mr.of(this.createTrailerDict())),
                  (t += l.sizeInBytes() + 2),
                  (u = jr.forLastCrossRefSectionOffset(c)),
                  (t += u.sizeInBytes()),
                  [
                    2,
                    {
                      size: t,
                      header: e,
                      indirectObjects: r,
                      xref: n,
                      trailerDict: l,
                      trailer: u,
                    },
                  ]
                );
            }
          });
        });
      }),
      (e.forContext = function (t, n) {
        return new e(t, n);
      }),
      e
    );
  })(),
  Fr = (function (e) {
    N(t, e);
    function t(t) {
      var n = e.call(this) || this;
      return ((n.data = t), n);
    }
    return (
      (t.prototype.clone = function () {
        return t.of(this.data.slice());
      }),
      (t.prototype.toString = function () {
        return `PDFInvalidObject(` + this.data.length + ` bytes)`;
      }),
      (t.prototype.sizeInBytes = function () {
        return this.data.length;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        for (var n = this.data.length, r = 0; r < n; r++) e[t++] = this.data[r];
        return n;
      }),
      (t.of = function (e) {
        return new t(e);
      }),
      t
    );
  })(er),
  Ir;
(function (e) {
  ((e[(e.Deleted = 0)] = `Deleted`),
    (e[(e.Uncompressed = 1)] = `Uncompressed`),
    (e[(e.Compressed = 2)] = `Compressed`));
})((Ir ||= {}));
var Lr = (function (e) {
    N(t, e);
    function t(t, n, r) {
      r === void 0 && (r = !0);
      var i = e.call(this, t, r) || this;
      return (
        (i.computeIndex = function () {
          for (var e = [], t = 0, n = 0, r = i.entries.length; n < r; n++) {
            var a = i.entries[n],
              o = i.entries[n - 1];
            (n === 0
              ? e.push(a.ref.objectNumber)
              : a.ref.objectNumber - o.ref.objectNumber > 1 &&
                (e.push(t), e.push(a.ref.objectNumber), (t = 0)),
              (t += 1));
          }
          return (e.push(t), e);
        }),
        (i.computeEntryTuples = function () {
          for (
            var e = Array(i.entries.length), t = 0, n = i.entries.length;
            t < n;
            t++
          ) {
            var r = i.entries[t];
            if (r.type === Ir.Deleted) {
              var a = r.type,
                o = r.nextFreeObjectNumber,
                s = r.ref;
              e[t] = [a, o, s.generationNumber];
            }
            if (r.type === Ir.Uncompressed) {
              var a = r.type,
                c = r.offset,
                s = r.ref;
              e[t] = [a, c, s.generationNumber];
            }
            if (r.type === Ir.Compressed) {
              var a = r.type,
                l = r.objectStreamRef,
                u = r.index;
              e[t] = [a, l.objectNumber, u];
            }
          }
          return e;
        }),
        (i.computeMaxEntryByteWidths = function () {
          for (
            var e = i.entryTuplesCache.access(),
              t = [0, 0, 0],
              n = 0,
              r = e.length;
            n < r;
            n++
          ) {
            var a = e[n],
              o = a[0],
              s = a[1],
              c = a[2],
              l = bt(o),
              u = bt(s),
              d = bt(c);
            (l > t[0] && (t[0] = l),
              u > t[1] && (t[1] = u),
              d > t[2] && (t[2] = d));
          }
          return t;
        }),
        (i.entries = n || []),
        (i.entryTuplesCache = wn.populatedBy(i.computeEntryTuples)),
        (i.maxByteWidthsCache = wn.populatedBy(i.computeMaxEntryByteWidths)),
        (i.indexCache = wn.populatedBy(i.computeIndex)),
        t.set(q.of(`Type`), q.of(`XRef`)),
        i
      );
    }
    return (
      (t.prototype.addDeletedEntry = function (e, t) {
        var n = Ir.Deleted;
        (this.entries.push({ type: n, ref: e, nextFreeObjectNumber: t }),
          this.entryTuplesCache.invalidate(),
          this.maxByteWidthsCache.invalidate(),
          this.indexCache.invalidate(),
          this.contentsCache.invalidate());
      }),
      (t.prototype.addUncompressedEntry = function (e, t) {
        var n = Ir.Uncompressed;
        (this.entries.push({ type: n, ref: e, offset: t }),
          this.entryTuplesCache.invalidate(),
          this.maxByteWidthsCache.invalidate(),
          this.indexCache.invalidate(),
          this.contentsCache.invalidate());
      }),
      (t.prototype.addCompressedEntry = function (e, t, n) {
        var r = Ir.Compressed;
        (this.entries.push({ type: r, ref: e, objectStreamRef: t, index: n }),
          this.entryTuplesCache.invalidate(),
          this.maxByteWidthsCache.invalidate(),
          this.indexCache.invalidate(),
          this.contentsCache.invalidate());
      }),
      (t.prototype.clone = function (e) {
        var n = this,
          r = n.dict,
          i = n.entries,
          a = n.encode;
        return t.of(r.clone(e), i.slice(), a);
      }),
      (t.prototype.getContentsString = function () {
        for (
          var e = this.entryTuplesCache.access(),
            t = this.maxByteWidthsCache.access(),
            n = ``,
            r = 0,
            i = e.length;
          r < i;
          r++
        ) {
          for (
            var a = e[r],
              o = a[0],
              s = a[1],
              c = a[2],
              l = Ze(xt(o)),
              u = Ze(xt(s)),
              d = Ze(xt(c)),
              f = t[0] - 1;
            f >= 0;
            f--
          )
            n += (l[f] || 0).toString(2);
          for (var f = t[1] - 1; f >= 0; f--) n += (u[f] || 0).toString(2);
          for (var f = t[2] - 1; f >= 0; f--) n += (d[f] || 0).toString(2);
        }
        return n;
      }),
      (t.prototype.getUnencodedContents = function () {
        for (
          var e = this.entryTuplesCache.access(),
            t = this.maxByteWidthsCache.access(),
            n = new Uint8Array(this.getUnencodedContentsSize()),
            r = 0,
            i = 0,
            a = e.length;
          i < a;
          i++
        ) {
          for (
            var o = e[i],
              s = o[0],
              c = o[1],
              l = o[2],
              u = Ze(xt(s)),
              d = Ze(xt(c)),
              f = Ze(xt(l)),
              p = t[0] - 1;
            p >= 0;
            p--
          )
            n[r++] = u[p] || 0;
          for (var p = t[1] - 1; p >= 0; p--) n[r++] = d[p] || 0;
          for (var p = t[2] - 1; p >= 0; p--) n[r++] = f[p] || 0;
        }
        return n;
      }),
      (t.prototype.getUnencodedContentsSize = function () {
        return Qe(this.maxByteWidthsCache.access()) * this.entries.length;
      }),
      (t.prototype.updateDict = function () {
        e.prototype.updateDict.call(this);
        var t = this.maxByteWidthsCache.access(),
          n = this.indexCache.access(),
          r = this.dict.context;
        (this.dict.set(q.of(`W`), r.obj(t)),
          this.dict.set(q.of(`Index`), r.obj(n)));
      }),
      (t.create = function (e, n) {
        n === void 0 && (n = !0);
        var r = new t(e, [], n);
        return (r.addDeletedEntry(yr.of(0, 65535), 0), r);
      }),
      (t.of = function (e, n, r) {
        return (r === void 0 && (r = !0), new t(e, n, r));
      }),
      t
    );
  })(Cr),
  Rr = (function (e) {
    N(t, e);
    function t(t, n, r, i) {
      var a = e.call(this, t, n) || this;
      return ((a.encodeStreams = r), (a.objectsPerStream = i), a);
    }
    return (
      (t.prototype.computeBufferSize = function () {
        return F(this, void 0, void 0, function () {
          var e,
            t,
            n,
            r,
            i,
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            c,
            l,
            m,
            d,
            g,
            _,
            v,
            y;
          return I(this, function (b) {
            switch (b.label) {
              case 0:
                ((e = this.context.largestObjectNumber + 1),
                  (t = $n.forVersion(1, 7)),
                  (n = t.sizeInBytes() + 2),
                  (r = Lr.create(this.createTrailerDict(), this.encodeStreams)),
                  (i = []),
                  (a = []),
                  (o = []),
                  (s = this.context.enumerateIndirectObjects()),
                  (c = 0),
                  (l = s.length),
                  (b.label = 1));
              case 1:
                return c < l
                  ? ((u = s[c]),
                    (d = u[0]),
                    (f = u[1]),
                    (p =
                      d === this.context.trailerInfo.Encrypt ||
                      f instanceof hr ||
                      f instanceof Fr ||
                      d.generationNumber !== 0),
                    p
                      ? (i.push(u),
                        r.addUncompressedEntry(d, n),
                        (n += this.computeIndirectObjectSize(u)),
                        this.shouldWaitForTick(1) ? [4, rt()] : [3, 3])
                      : [3, 4])
                  : [3, 6];
              case 2:
                (b.sent(), (b.label = 3));
              case 3:
                return [3, 5];
              case 4:
                ((m = We(a)),
                  (h = We(o)),
                  (!m || m.length % this.objectsPerStream === 0) &&
                    ((m = []), a.push(m), (h = yr.of(e++)), o.push(h)),
                  r.addCompressedEntry(d, h, m.length),
                  m.push(u),
                  (b.label = 5));
              case 5:
                return (c++, [3, 1]);
              case 6:
                ((c = 0), (l = a.length), (b.label = 7));
              case 7:
                return c < l
                  ? ((m = a[c]),
                    (d = o[c]),
                    (g = Nr.withContextAndObjects(
                      this.context,
                      m,
                      this.encodeStreams,
                    )),
                    r.addUncompressedEntry(d, n),
                    (n += this.computeIndirectObjectSize([d, g])),
                    i.push([d, g]),
                    this.shouldWaitForTick(m.length) ? [4, rt()] : [3, 9])
                  : [3, 10];
              case 8:
                (b.sent(), (b.label = 9));
              case 9:
                return (c++, [3, 7]);
              case 10:
                return (
                  (_ = yr.of(e++)),
                  r.dict.set(q.of(`Size`), K.of(e)),
                  r.addUncompressedEntry(_, n),
                  (v = n),
                  (n += this.computeIndirectObjectSize([_, r])),
                  i.push([_, r]),
                  (y = jr.forLastCrossRefSectionOffset(v)),
                  (n += y.sizeInBytes()),
                  [2, { size: n, header: t, indirectObjects: i, trailer: y }]
                );
            }
          });
        });
      }),
      (t.forContext = function (e, n, r, i) {
        return (
          r === void 0 && (r = !0),
          i === void 0 && (i = 50),
          new t(e, n, r, i)
        );
      }),
      t
    );
  })(Pr),
  J = (function (e) {
    N(t, e);
    function t(t) {
      var n = e.call(this) || this;
      return ((n.value = t), n);
    }
    return (
      (t.prototype.asBytes = function () {
        for (
          var e = this.value + (this.value.length % 2 == 1 ? `0` : ``),
            t = e.length,
            n = new Uint8Array(e.length / 2),
            r = 0,
            i = 0;
          r < t;
        ) {
          var a = parseInt(e.substring(r, r + 2), 16);
          ((n[i] = a), (r += 2), (i += 1));
        }
        return n;
      }),
      (t.prototype.decodeText = function () {
        var e = this.asBytes();
        return vt(e) ? dt(e) : Cn(e);
      }),
      (t.prototype.decodeDate = function () {
        var e = this.decodeText(),
          t = He(e);
        if (!t) throw new Pn(e);
        return t;
      }),
      (t.prototype.asString = function () {
        return this.value;
      }),
      (t.prototype.clone = function () {
        return t.of(this.value);
      }),
      (t.prototype.toString = function () {
        return `<` + this.value + `>`;
      }),
      (t.prototype.sizeInBytes = function () {
        return this.value.length + 2;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        return (
          (e[t++] = G.LessThan),
          (t += Ae(this.value, e, t)),
          (e[t++] = G.GreaterThan),
          this.value.length + 2
        );
      }),
      (t.of = function (e) {
        return new t(e);
      }),
      (t.fromText = function (e) {
        for (var n = it(e), r = ``, i = 0, a = n.length; i < a; i++)
          r += Te(n[i], 4);
        return new t(r);
      }),
      t
    );
  })(er),
  zr = (function () {
    function e(e, t) {
      ((this.encoding =
        e === qt.ZapfDingbats
          ? $t.ZapfDingbats
          : e === qt.Symbol
            ? $t.Symbol
            : $t.WinAnsi),
        (this.font = Yt.load(e)),
        (this.fontName = this.font.FontName),
        (this.customName = t));
    }
    return (
      (e.prototype.encodeText = function (e) {
        for (
          var t = this.encodeTextAsGlyphs(e),
            n = Array(t.length),
            r = 0,
            i = t.length;
          r < i;
          r++
        )
          n[r] = Ee(t[r].code);
        return J.of(n.join(``));
      }),
      (e.prototype.widthOfTextAtSize = function (e, t) {
        for (
          var n = this.encodeTextAsGlyphs(e), r = 0, i = 0, a = n.length;
          i < a;
          i++
        ) {
          var o = n[i].name,
            s = (n[i + 1] || {}).name,
            c = this.font.getXAxisKerningForPair(o, s) || 0;
          r += this.widthOfGlyph(o) + c;
        }
        var l = t / 1e3;
        return r * l;
      }),
      (e.prototype.heightOfFontAtSize = function (e, t) {
        t === void 0 && (t = {});
        var n = t.descender,
          r = n === void 0 || n,
          i = this.font,
          a = i.Ascender,
          o = i.Descender,
          s = i.FontBBox,
          c = (a || s[3]) - (o || s[1]);
        return (r || (c += o || 0), (c / 1e3) * e);
      }),
      (e.prototype.sizeOfFontAtHeight = function (e) {
        var t = this.font,
          n = t.Ascender,
          r = t.Descender,
          i = t.FontBBox,
          a = n || i[3],
          o = r || i[1];
        return (1e3 * e) / (a - o);
      }),
      (e.prototype.embedIntoContext = function (e, t) {
        var n = e.obj({
          Type: `Font`,
          Subtype: `Type1`,
          BaseFont: this.customName || this.fontName,
          Encoding: this.encoding === $t.WinAnsi ? `WinAnsiEncoding` : void 0,
        });
        return t ? (e.assign(t, n), t) : e.register(n);
      }),
      (e.prototype.widthOfGlyph = function (e) {
        return this.font.getWidthOfGlyph(e) || 250;
      }),
      (e.prototype.encodeTextAsGlyphs = function (e) {
        for (
          var t = Array.from(e), n = Array(t.length), r = 0, i = t.length;
          r < i;
          r++
        ) {
          var a = H(t[r]);
          n[r] = this.encoding.encodeUnicodeCodePoint(a);
        }
        return n;
      }),
      (e.for = function (t, n) {
        return new e(t, n);
      }),
      e
    );
  })(),
  Br = function (e, t) {
    for (var n = Array(e.length), r = 0, i = e.length; r < i; r++) {
      var a = e[r],
        o = Hr(Ur(t(a))),
        s = Hr.apply(void 0, a.codePoints.map(Wr));
      n[r] = [o, s];
    }
    return Vr(n);
  },
  Vr = function (e) {
    return (
      `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange
` +
      e.length +
      ` beginbfchar
` +
      e.map(function (e) {
        var t = e[0],
          n = e[1];
        return t + ` ` + n;
      }).join(`
`) +
      `
endbfchar
endcmap
CMapName currentdict /CMap defineresource pop
end
end`
    );
  },
  Hr = function () {
    return `<` + [...arguments].join(``) + `>`;
  },
  Ur = function (e) {
    return Te(e, 4);
  },
  Wr = function (e) {
    if (at(e)) return Ur(e);
    if (ot(e)) {
      var t = st(e),
        n = ct(e);
      return `` + Ur(t) + Ur(n);
    }
    var r = `0x` + Ee(e) + ` is not a valid UTF-8 or UTF-16 codepoint.`;
    throw Error(r);
  },
  Gr = function (e) {
    var t = 0,
      n = function (e) {
        t |= 1 << (e - 1);
      };
    return (
      e.fixedPitch && n(1),
      e.serif && n(2),
      e.symbolic && n(3),
      e.script && n(4),
      e.nonsymbolic && n(6),
      e.italic && n(7),
      e.allCap && n(17),
      e.smallCap && n(18),
      e.forceBold && n(19),
      t
    );
  },
  Kr = function (e) {
    var t = e[`OS/2`] ? e[`OS/2`].sFamilyClass : 0;
    return Gr({
      fixedPitch: e.post.isFixedPitch,
      serif: 1 <= t && t <= 7,
      symbolic: !0,
      script: t === 10,
      italic: e.head.macStyle.italic,
    });
  },
  qr = (function (e) {
    N(t, e);
    function t(t) {
      var n = e.call(this) || this;
      return ((n.value = t), n);
    }
    return (
      (t.prototype.asBytes = function () {
        for (
          var e = [],
            t = ``,
            n = !1,
            r = function (t) {
              (t !== void 0 && e.push(t), (n = !1));
            },
            i = 0,
            a = this.value.length;
          i < a;
          i++
        ) {
          var o = this.value[i],
            s = V(o),
            c = this.value[i + 1];
          n
            ? s === G.Newline || s === G.CarriageReturn
              ? r()
              : s === G.n
                ? r(G.Newline)
                : s === G.r
                  ? r(G.CarriageReturn)
                  : s === G.t
                    ? r(G.Tab)
                    : s === G.b
                      ? r(G.Backspace)
                      : s === G.f
                        ? r(G.FormFeed)
                        : s === G.LeftParen
                          ? r(G.LeftParen)
                          : s === G.RightParen
                            ? r(G.RightParen)
                            : s === G.Backspace
                              ? r(G.BackSlash)
                              : s >= G.Zero && s <= G.Seven
                                ? ((t += o),
                                  (t.length === 3 || !(c >= `0` && c <= `7`)) &&
                                    (r(parseInt(t, 8)), (t = ``)))
                                : r(s)
            : s === G.BackSlash
              ? (n = !0)
              : r(s);
        }
        return new Uint8Array(e);
      }),
      (t.prototype.decodeText = function () {
        var e = this.asBytes();
        return vt(e) ? dt(e) : Cn(e);
      }),
      (t.prototype.decodeDate = function () {
        var e = this.decodeText(),
          t = He(e);
        if (!t) throw new Pn(e);
        return t;
      }),
      (t.prototype.asString = function () {
        return this.value;
      }),
      (t.prototype.clone = function () {
        return t.of(this.value);
      }),
      (t.prototype.toString = function () {
        return `(` + this.value + `)`;
      }),
      (t.prototype.sizeInBytes = function () {
        return this.value.length + 2;
      }),
      (t.prototype.copyBytesInto = function (e, t) {
        return (
          (e[t++] = G.LeftParen),
          (t += Ae(this.value, e, t)),
          (e[t++] = G.RightParen),
          this.value.length + 2
        );
      }),
      (t.of = function (e) {
        return new t(e);
      }),
      (t.fromDate = function (e) {
        var n = ke(String(e.getUTCFullYear()), 4, `0`),
          r = ke(String(e.getUTCMonth() + 1), 2, `0`),
          i = ke(String(e.getUTCDate()), 2, `0`),
          a = ke(String(e.getUTCHours()), 2, `0`),
          o = ke(String(e.getUTCMinutes()), 2, `0`),
          s = ke(String(e.getUTCSeconds()), 2, `0`);
        return new t(`D:` + n + r + i + a + o + s + `Z`);
      }),
      t
    );
  })(er),
  Jr = (function () {
    function e(e, t, n, r) {
      var i = this;
      ((this.allGlyphsInFontSortedById = function () {
        for (
          var e = Array(i.font.characterSet.length), t = 0, n = e.length;
          t < n;
          t++
        ) {
          var r = i.font.characterSet[t];
          e[t] = i.font.glyphForCodePoint(r);
        }
        return Xe(e.sort(Ye), function (e) {
          return e.id;
        });
      }),
        (this.font = e),
        (this.scale = 1e3 / this.font.unitsPerEm),
        (this.fontData = t),
        (this.fontName = this.font.postscriptName || `Font`),
        (this.customName = n),
        (this.fontFeatures = r),
        (this.baseFontName = ``),
        (this.glyphCache = wn.populatedBy(this.allGlyphsInFontSortedById)));
    }
    return (
      (e.for = function (t, n, r, i) {
        return F(this, void 0, void 0, function () {
          var a;
          return I(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, t.create(n)];
              case 1:
                return ((a = o.sent()), [2, new e(a, n, r, i)]);
            }
          });
        });
      }),
      (e.prototype.encodeText = function (e) {
        for (
          var t = this.font.layout(e, this.fontFeatures).glyphs,
            n = Array(t.length),
            r = 0,
            i = t.length;
          r < i;
          r++
        )
          n[r] = Te(t[r].id, 4);
        return J.of(n.join(``));
      }),
      (e.prototype.widthOfTextAtSize = function (e, t) {
        for (
          var n = this.font.layout(e, this.fontFeatures).glyphs,
            r = 0,
            i = 0,
            a = n.length;
          i < a;
          i++
        )
          r += n[i].advanceWidth * this.scale;
        var o = t / 1e3;
        return r * o;
      }),
      (e.prototype.heightOfFontAtSize = function (e, t) {
        t === void 0 && (t = {});
        var n = t.descender,
          r = n === void 0 || n,
          i = this.font,
          a = i.ascent,
          o = i.descent,
          s = i.bbox,
          c = (a || s.maxY) * this.scale - (o || s.minY) * this.scale;
        return (r || (c -= Math.abs(o) || 0), (c / 1e3) * e);
      }),
      (e.prototype.sizeOfFontAtHeight = function (e) {
        var t = this.font,
          n = t.ascent,
          r = t.descent,
          i = t.bbox,
          a = (n || i.maxY) * this.scale,
          o = (r || i.minY) * this.scale;
        return (1e3 * e) / (a - o);
      }),
      (e.prototype.embedIntoContext = function (e, t) {
        return (
          (this.baseFontName =
            this.customName || e.addRandomSuffix(this.fontName)),
          this.embedFontDict(e, t)
        );
      }),
      (e.prototype.embedFontDict = function (e, t) {
        return F(this, void 0, void 0, function () {
          var n, r, i;
          return I(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.embedCIDFontDict(e)];
              case 1:
                return (
                  (n = a.sent()),
                  (r = this.embedUnicodeCmap(e)),
                  (i = e.obj({
                    Type: `Font`,
                    Subtype: `Type0`,
                    BaseFont: this.baseFontName,
                    Encoding: `Identity-H`,
                    DescendantFonts: [n],
                    ToUnicode: r,
                  })),
                  t ? (e.assign(t, i), [2, t]) : [2, e.register(i)]
                );
            }
          });
        });
      }),
      (e.prototype.isCFF = function () {
        return this.font.cff;
      }),
      (e.prototype.embedCIDFontDict = function (e) {
        return F(this, void 0, void 0, function () {
          var t, n;
          return I(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.embedFontDescriptor(e)];
              case 1:
                return (
                  (t = r.sent()),
                  (n = e.obj({
                    Type: `Font`,
                    Subtype: this.isCFF() ? `CIDFontType0` : `CIDFontType2`,
                    CIDToGIDMap: `Identity`,
                    BaseFont: this.baseFontName,
                    CIDSystemInfo: {
                      Registry: qr.of(`Adobe`),
                      Ordering: qr.of(`Identity`),
                      Supplement: 0,
                    },
                    FontDescriptor: t,
                    W: this.computeWidths(),
                  })),
                  [2, e.register(n)]
                );
            }
          });
        });
      }),
      (e.prototype.embedFontDescriptor = function (e) {
        return F(this, void 0, void 0, function () {
          var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h;
          return I(this, function (g) {
            switch (g.label) {
              case 0:
                return [4, this.embedFontStream(e)];
              case 1:
                return (
                  (t = g.sent()),
                  (n = this.scale),
                  (r = this.font),
                  (i = r.italicAngle),
                  (a = r.ascent),
                  (o = r.descent),
                  (s = r.capHeight),
                  (c = r.xHeight),
                  (l = this.font.bbox),
                  (u = l.minX),
                  (d = l.minY),
                  (f = l.maxX),
                  (p = l.maxY),
                  (m = e.obj(
                    ((h = {
                      Type: `FontDescriptor`,
                      FontName: this.baseFontName,
                      Flags: Kr(this.font),
                      FontBBox: [u * n, d * n, f * n, p * n],
                      ItalicAngle: i,
                      Ascent: a * n,
                      Descent: o * n,
                      CapHeight: (s || a) * n,
                      XHeight: (c || 0) * n,
                      StemV: 0,
                    }),
                    (h[this.isCFF() ? `FontFile3` : `FontFile2`] = t),
                    h),
                  )),
                  [2, e.register(m)]
                );
            }
          });
        });
      }),
      (e.prototype.serializeFont = function () {
        return F(this, void 0, void 0, function () {
          return I(this, function (e) {
            return [2, this.fontData];
          });
        });
      }),
      (e.prototype.embedFontStream = function (e) {
        return F(this, void 0, void 0, function () {
          var t, n, r;
          return I(this, function (i) {
            switch (i.label) {
              case 0:
                return ((r = (n = e).flateStream), [4, this.serializeFont()]);
              case 1:
                return (
                  (t = r.apply(n, [
                    i.sent(),
                    { Subtype: this.isCFF() ? `CIDFontType0C` : void 0 },
                  ])),
                  [2, e.register(t)]
                );
            }
          });
        });
      }),
      (e.prototype.embedUnicodeCmap = function (e) {
        var t = Br(this.glyphCache.access(), this.glyphId.bind(this)),
          n = e.flateStream(t);
        return e.register(n);
      }),
      (e.prototype.glyphId = function (e) {
        return e ? e.id : -1;
      }),
      (e.prototype.computeWidths = function () {
        for (
          var e = this.glyphCache.access(), t = [], n = [], r = 0, i = e.length;
          r < i;
          r++
        ) {
          var a = e[r],
            o = e[r - 1],
            s = this.glyphId(a),
            c = this.glyphId(o);
          (r === 0
            ? t.push(s)
            : s - c !== 1 && (t.push(n), t.push(s), (n = [])),
            n.push(a.advanceWidth * this.scale));
        }
        return (t.push(n), t);
      }),
      e
    );
  })(),
  Yr = (function (e) {
    N(t, e);
    function t(t, n, r, i) {
      var a = e.call(this, t, n, r, i) || this;
      return (
        (a.subset = a.font.createSubset()),
        (a.glyphs = []),
        (a.glyphCache = wn.populatedBy(function () {
          return a.glyphs;
        })),
        (a.glyphIdMap = new Map()),
        a
      );
    }
    return (
      (t.for = function (e, n, r, i) {
        return F(this, void 0, void 0, function () {
          var a;
          return I(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, e.create(n)];
              case 1:
                return ((a = o.sent()), [2, new t(a, n, r, i)]);
            }
          });
        });
      }),
      (t.prototype.encodeText = function (e) {
        for (
          var t = this.font.layout(e, this.fontFeatures).glyphs,
            n = Array(t.length),
            r = 0,
            i = t.length;
          r < i;
          r++
        ) {
          var a = t[r],
            o = this.subset.includeGlyph(a);
          ((this.glyphs[o - 1] = a),
            this.glyphIdMap.set(a.id, o),
            (n[r] = Te(o, 4)));
        }
        return (this.glyphCache.invalidate(), J.of(n.join(``)));
      }),
      (t.prototype.isCFF = function () {
        return this.subset.cff;
      }),
      (t.prototype.glyphId = function (e) {
        return e ? this.glyphIdMap.get(e.id) : -1;
      }),
      (t.prototype.serializeFont = function () {
        var e = this;
        return new Promise(function (t, n) {
          var r = [];
          e.subset
            .encodeStream()
            .on(`data`, function (e) {
              return r.push(e);
            })
            .on(`end`, function () {
              return t(qe(r));
            })
            .on(`error`, function (e) {
              return n(e);
            });
        });
      }),
      t
    );
  })(Jr),
  Xr;
(function (e) {
  ((e.Source = `Source`),
    (e.Data = `Data`),
    (e.Alternative = `Alternative`),
    (e.Supplement = `Supplement`),
    (e.EncryptedPayload = `EncryptedPayload`),
    (e.FormData = `EncryptedPayload`),
    (e.Schema = `Schema`),
    (e.Unspecified = `Unspecified`));
})((Xr ||= {}));
var Zr = (function () {
    function e(e, t, n) {
      (n === void 0 && (n = {}),
        (this.fileData = e),
        (this.fileName = t),
        (this.options = n));
    }
    return (
      (e.for = function (t, n, r) {
        return (r === void 0 && (r = {}), new e(t, n, r));
      }),
      (e.prototype.embedIntoContext = function (e, t) {
        return F(this, void 0, void 0, function () {
          var n, r, i, a, o, s, c, l, u;
          return I(this, function (d) {
            return (
              (n = this.options),
              (r = n.mimeType),
              (i = n.description),
              (a = n.creationDate),
              (o = n.modificationDate),
              (s = n.afRelationship),
              (c = e.flateStream(this.fileData, {
                Type: `EmbeddedFile`,
                Subtype: r ?? void 0,
                Params: {
                  Size: this.fileData.length,
                  CreationDate: a ? qr.fromDate(a) : void 0,
                  ModDate: o ? qr.fromDate(o) : void 0,
                },
              })),
              (l = e.register(c)),
              (u = e.obj({
                Type: `Filespec`,
                F: qr.of(this.fileName),
                UF: J.fromText(this.fileName),
                EF: { F: l },
                Desc: i ? J.fromText(i) : void 0,
                AFRelationship: s ?? void 0,
              })),
              t ? (e.assign(t, u), [2, t]) : [2, e.register(u)]
            );
          });
        });
      }),
      e
    );
  })(),
  Qr = [
    65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482, 65483,
    65484, 65485, 65486, 65487,
  ],
  $r;
(function (e) {
  ((e.DeviceGray = `DeviceGray`),
    (e.DeviceRGB = `DeviceRGB`),
    (e.DeviceCMYK = `DeviceCMYK`));
})(($r ||= {}));
var ei = { 1: $r.DeviceGray, 3: $r.DeviceRGB, 4: $r.DeviceCMYK },
  ti = (function () {
    function e(e, t, n, r, i) {
      ((this.imageData = e),
        (this.bitsPerComponent = t),
        (this.width = n),
        (this.height = r),
        (this.colorSpace = i));
    }
    return (
      (e.for = function (t) {
        return F(this, void 0, void 0, function () {
          var n, r, i, a, o, s, c, l, u, d;
          return I(this, function (f) {
            if (
              ((n = new DataView(t.buffer)), (r = n.getUint16(0)), r !== 65496)
            )
              throw Error(`SOI not found in JPEG`);
            for (
              i = 2;
              i < n.byteLength &&
              ((a = n.getUint16(i)), (i += 2), !Qr.includes(a));
            )
              i += n.getUint16(i);
            if (!Qr.includes(a)) throw Error(`Invalid JPEG`);
            if (
              ((i += 2),
              (o = n.getUint8(i++)),
              (s = n.getUint16(i)),
              (i += 2),
              (c = n.getUint16(i)),
              (i += 2),
              (l = n.getUint8(i++)),
              (u = ei[l]),
              !u)
            )
              throw Error(`Unknown JPEG channel.`);
            return ((d = u), [2, new e(t, o, c, s, d)]);
          });
        });
      }),
      (e.prototype.embedIntoContext = function (e, t) {
        return F(this, void 0, void 0, function () {
          var n;
          return I(this, function (r) {
            return (
              (n = e.stream(this.imageData, {
                Type: `XObject`,
                Subtype: `Image`,
                BitsPerComponent: this.bitsPerComponent,
                Width: this.width,
                Height: this.height,
                ColorSpace: this.colorSpace,
                Filter: `DCTDecode`,
                Decode:
                  this.colorSpace === $r.DeviceCMYK
                    ? [1, 0, 1, 0, 1, 0, 1, 0]
                    : void 0,
              })),
              t ? (e.assign(t, n), [2, t]) : [2, e.register(n)]
            );
          });
        });
      }),
      e
    );
  })(),
  Y = {};
((Y.toRGBA8 = function (e) {
  var t = e.width,
    n = e.height;
  if (e.tabs.acTL == null)
    return [Y.toRGBA8.decodeImage(e.data, t, n, e).buffer];
  var r = [];
  e.frames[0].data ?? (e.frames[0].data = e.data);
  for (
    var i = t * n * 4,
      a = new Uint8Array(i),
      o = new Uint8Array(i),
      s = new Uint8Array(i),
      c = 0;
    c < e.frames.length;
    c++
  ) {
    var l = e.frames[c],
      u = l.rect.x,
      d = l.rect.y,
      f = l.rect.width,
      p = l.rect.height,
      m = Y.toRGBA8.decodeImage(l.data, f, p, e);
    if (c != 0) for (var h = 0; h < i; h++) s[h] = a[h];
    if (
      (l.blend == 0
        ? Y._copyTile(m, f, p, a, t, n, u, d, 0)
        : l.blend == 1 && Y._copyTile(m, f, p, a, t, n, u, d, 1),
      r.push(a.buffer.slice(0)),
      l.dispose != 0)
    ) {
      if (l.dispose == 1) Y._copyTile(o, f, p, a, t, n, u, d, 0);
      else if (l.dispose == 2) for (var h = 0; h < i; h++) a[h] = s[h];
    }
  }
  return r;
}),
  (Y.toRGBA8.decodeImage = function (e, t, n, r) {
    var i = t * n,
      a = Y.decode._getBPP(r),
      o = Math.ceil((t * a) / 8),
      s = new Uint8Array(i * 4),
      c = new Uint32Array(s.buffer),
      l = r.ctype,
      u = r.depth,
      d = Y._bin.readUshort;
    if (l == 6) {
      var f = i << 2;
      if (u == 8)
        for (var p = 0; p < f; p += 4)
          ((s[p] = e[p]),
            (s[p + 1] = e[p + 1]),
            (s[p + 2] = e[p + 2]),
            (s[p + 3] = e[p + 3]));
      if (u == 16) for (var p = 0; p < f; p++) s[p] = e[p << 1];
    } else if (l == 2) {
      var m = r.tabs.tRNS;
      if (m == null) {
        if (u == 8)
          for (var p = 0; p < i; p++) {
            var h = p * 3;
            c[p] = (255 << 24) | (e[h + 2] << 16) | (e[h + 1] << 8) | e[h];
          }
        if (u == 16)
          for (var p = 0; p < i; p++) {
            var h = p * 6;
            c[p] = (255 << 24) | (e[h + 4] << 16) | (e[h + 2] << 8) | e[h];
          }
      } else {
        var g = m[0],
          _ = m[1],
          v = m[2];
        if (u == 8)
          for (var p = 0; p < i; p++) {
            var y = p << 2,
              h = p * 3;
            ((c[p] = (255 << 24) | (e[h + 2] << 16) | (e[h + 1] << 8) | e[h]),
              e[h] == g && e[h + 1] == _ && e[h + 2] == v && (s[y + 3] = 0));
          }
        if (u == 16)
          for (var p = 0; p < i; p++) {
            var y = p << 2,
              h = p * 6;
            ((c[p] = (255 << 24) | (e[h + 4] << 16) | (e[h + 2] << 8) | e[h]),
              d(e, h) == g &&
                d(e, h + 2) == _ &&
                d(e, h + 4) == v &&
                (s[y + 3] = 0));
          }
      }
    } else if (l == 3) {
      var b = r.tabs.PLTE,
        x = r.tabs.tRNS,
        S = x ? x.length : 0;
      if (u == 1)
        for (var C = 0; C < n; C++)
          for (var w = C * o, T = C * t, p = 0; p < t; p++) {
            var y = (T + p) << 2,
              E = (e[w + (p >> 3)] >> (7 - ((p & 7) << 0))) & 1,
              D = 3 * E;
            ((s[y] = b[D]),
              (s[y + 1] = b[D + 1]),
              (s[y + 2] = b[D + 2]),
              (s[y + 3] = E < S ? x[E] : 255));
          }
      if (u == 2)
        for (var C = 0; C < n; C++)
          for (var w = C * o, T = C * t, p = 0; p < t; p++) {
            var y = (T + p) << 2,
              E = (e[w + (p >> 2)] >> (6 - ((p & 3) << 1))) & 3,
              D = 3 * E;
            ((s[y] = b[D]),
              (s[y + 1] = b[D + 1]),
              (s[y + 2] = b[D + 2]),
              (s[y + 3] = E < S ? x[E] : 255));
          }
      if (u == 4)
        for (var C = 0; C < n; C++)
          for (var w = C * o, T = C * t, p = 0; p < t; p++) {
            var y = (T + p) << 2,
              E = (e[w + (p >> 1)] >> (4 - ((p & 1) << 2))) & 15,
              D = 3 * E;
            ((s[y] = b[D]),
              (s[y + 1] = b[D + 1]),
              (s[y + 2] = b[D + 2]),
              (s[y + 3] = E < S ? x[E] : 255));
          }
      if (u == 8)
        for (var p = 0; p < i; p++) {
          var y = p << 2,
            E = e[p],
            D = 3 * E;
          ((s[y] = b[D]),
            (s[y + 1] = b[D + 1]),
            (s[y + 2] = b[D + 2]),
            (s[y + 3] = E < S ? x[E] : 255));
        }
    } else if (l == 4) {
      if (u == 8)
        for (var p = 0; p < i; p++) {
          var y = p << 2,
            ee = p << 1,
            O = e[ee];
          ((s[y] = O), (s[y + 1] = O), (s[y + 2] = O), (s[y + 3] = e[ee + 1]));
        }
      if (u == 16)
        for (var p = 0; p < i; p++) {
          var y = p << 2,
            ee = p << 2,
            O = e[ee];
          ((s[y] = O), (s[y + 1] = O), (s[y + 2] = O), (s[y + 3] = e[ee + 2]));
        }
    } else if (l == 0)
      for (var g = r.tabs.tRNS ? r.tabs.tRNS : -1, C = 0; C < n; C++) {
        var te = C * o,
          k = C * t;
        if (u == 1)
          for (var A = 0; A < t; A++) {
            var O = 255 * ((e[te + (A >>> 3)] >>> (7 - (A & 7))) & 1),
              ne = O == g * 255 ? 0 : 255;
            c[k + A] = (ne << 24) | (O << 16) | (O << 8) | O;
          }
        else if (u == 2)
          for (var A = 0; A < t; A++) {
            var O = 85 * ((e[te + (A >>> 2)] >>> (6 - ((A & 3) << 1))) & 3),
              ne = O == g * 85 ? 0 : 255;
            c[k + A] = (ne << 24) | (O << 16) | (O << 8) | O;
          }
        else if (u == 4)
          for (var A = 0; A < t; A++) {
            var O = 17 * ((e[te + (A >>> 1)] >>> (4 - ((A & 1) << 2))) & 15),
              ne = O == g * 17 ? 0 : 255;
            c[k + A] = (ne << 24) | (O << 16) | (O << 8) | O;
          }
        else if (u == 8)
          for (var A = 0; A < t; A++) {
            var O = e[te + A],
              ne = O == g ? 0 : 255;
            c[k + A] = (ne << 24) | (O << 16) | (O << 8) | O;
          }
        else if (u == 16)
          for (var A = 0; A < t; A++) {
            var O = e[te + (A << 1)],
              ne = d(e, te + (A << p)) == g ? 0 : 255;
            c[k + A] = (ne << 24) | (O << 16) | (O << 8) | O;
          }
      }
    return s;
  }),
  (Y.decode = function (e) {
    for (
      var t = new Uint8Array(e),
        n = 8,
        r = Y._bin,
        i = r.readUshort,
        a = r.readUint,
        o = { tabs: {}, frames: [] },
        s = new Uint8Array(t.length),
        c = 0,
        l,
        u = 0,
        d = [137, 80, 78, 71, 13, 10, 26, 10],
        f = 0;
      f < 8;
      f++
    )
      if (t[f] != d[f]) throw `The input is not a PNG file!`;
    for (; n < t.length;) {
      var p = r.readUint(t, n);
      n += 4;
      var m = r.readASCII(t, n, 4);
      if (((n += 4), m == `IHDR`)) Y.decode._IHDR(t, n, o);
      else if (m == `IDAT`) {
        for (var f = 0; f < p; f++) s[c + f] = t[n + f];
        c += p;
      } else if (m == `acTL`)
        ((o.tabs[m] = { num_frames: a(t, n), num_plays: a(t, n + 4) }),
          (l = new Uint8Array(t.length)));
      else if (m == `fcTL`) {
        if (u != 0) {
          var h = o.frames[o.frames.length - 1];
          ((h.data = Y.decode._decompress(
            o,
            l.slice(0, u),
            h.rect.width,
            h.rect.height,
          )),
            (u = 0));
        }
        var g = {
            x: a(t, n + 12),
            y: a(t, n + 16),
            width: a(t, n + 4),
            height: a(t, n + 8),
          },
          _ = i(t, n + 22);
        _ = i(t, n + 20) / (_ == 0 ? 100 : _);
        var v = {
          rect: g,
          delay: Math.round(_ * 1e3),
          dispose: t[n + 24],
          blend: t[n + 25],
        };
        o.frames.push(v);
      } else if (m == `fdAT`) {
        for (var f = 0; f < p - 4; f++) l[u + f] = t[n + f + 4];
        u += p - 4;
      } else if (m == `pHYs`)
        o.tabs[m] = [r.readUint(t, n), r.readUint(t, n + 4), t[n + 8]];
      else if (m == `cHRM`) {
        o.tabs[m] = [];
        for (var f = 0; f < 8; f++) o.tabs[m].push(r.readUint(t, n + f * 4));
      } else if (m == `tEXt`) {
        o.tabs[m] ?? (o.tabs[m] = {});
        var y = r.nextZero(t, n),
          b = r.readASCII(t, n, y - n),
          x = r.readASCII(t, y + 1, n + p - y - 1);
        o.tabs[m][b] = x;
      } else if (m == `iTXt`) {
        o.tabs[m] ?? (o.tabs[m] = {});
        var y = 0,
          S = n;
        y = r.nextZero(t, S);
        var b = r.readASCII(t, S, y - S);
        ((S = y + 1),
          t[S],
          t[S + 1],
          (S += 2),
          (y = r.nextZero(t, S)),
          r.readASCII(t, S, y - S),
          (S = y + 1),
          (y = r.nextZero(t, S)),
          r.readUTF8(t, S, y - S),
          (S = y + 1));
        var x = r.readUTF8(t, S, p - (S - n));
        o.tabs[m][b] = x;
      } else if (m == `PLTE`) o.tabs[m] = r.readBytes(t, n, p);
      else if (m == `hIST`) {
        var C = o.tabs.PLTE.length / 3;
        o.tabs[m] = [];
        for (var f = 0; f < C; f++) o.tabs[m].push(i(t, n + f * 2));
      } else if (m == `tRNS`)
        o.ctype == 3
          ? (o.tabs[m] = r.readBytes(t, n, p))
          : o.ctype == 0
            ? (o.tabs[m] = i(t, n))
            : o.ctype == 2 && (o.tabs[m] = [i(t, n), i(t, n + 2), i(t, n + 4)]);
      else if (m == `gAMA`) o.tabs[m] = r.readUint(t, n) / 1e5;
      else if (m == `sRGB`) o.tabs[m] = t[n];
      else if (m == `bKGD`)
        o.ctype == 0 || o.ctype == 4
          ? (o.tabs[m] = [i(t, n)])
          : o.ctype == 2 || o.ctype == 6
            ? (o.tabs[m] = [i(t, n), i(t, n + 2), i(t, n + 4)])
            : o.ctype == 3 && (o.tabs[m] = t[n]);
      else if (m == `IEND`) break;
      ((n += p), r.readUint(t, n), (n += 4));
    }
    if (u != 0) {
      var h = o.frames[o.frames.length - 1];
      ((h.data = Y.decode._decompress(
        o,
        l.slice(0, u),
        h.rect.width,
        h.rect.height,
      )),
        (u = 0));
    }
    return (
      (o.data = Y.decode._decompress(o, s, o.width, o.height)),
      delete o.compress,
      delete o.interlace,
      delete o.filter,
      o
    );
  }),
  (Y.decode._decompress = function (e, t, n, r) {
    var i = Y.decode._getBPP(e),
      a = Math.ceil((n * i) / 8),
      o = new Uint8Array((a + 1 + e.interlace) * r);
    return (
      (t = Y.decode._inflate(t, o)),
      e.interlace == 0
        ? (t = Y.decode._filterZero(t, e, 0, n, r))
        : e.interlace == 1 && (t = Y.decode._readInterlace(t, e)),
      t
    );
  }),
  (Y.decode._inflate = function (e, t) {
    return Y.inflateRaw(new Uint8Array(e.buffer, 2, e.length - 6), t);
  }),
  (Y.inflateRaw = (function () {
    var e = {};
    return (
      (e.H = {}),
      (e.H.N = function (t, n) {
        var r = Uint8Array,
          i = 0,
          a = 0,
          o = 0,
          s = 0,
          c = 0,
          l = 0,
          u = 0,
          d = 0,
          f = 0,
          p,
          m;
        if (t[0] == 3 && t[1] == 0) return n || new r(0);
        var h = e.H,
          g = h.b,
          _ = h.e,
          v = h.R,
          y = h.n,
          b = h.A,
          x = h.Z,
          S = h.m,
          C = n == null;
        for (C && (n = new r((t.length >>> 2) << 3)); i == 0;) {
          if (((i = g(t, f, 1)), (a = g(t, f + 1, 2)), (f += 3), a == 0)) {
            f & 7 && (f += 8 - (f & 7));
            var w = (f >>> 3) + 4,
              T = t[w - 4] | (t[w - 3] << 8);
            (C && (n = e.H.W(n, d + T)),
              n.set(new r(t.buffer, t.byteOffset + w, T), d),
              (f = (w + T) << 3),
              (d += T));
            continue;
          }
          if (
            (C && (n = e.H.W(n, d + (1 << 17))),
            a == 1 && ((p = S.J), (m = S.h), (l = 511), (u = 31)),
            a == 2)
          ) {
            ((o = _(t, f, 5) + 257),
              (s = _(t, f + 5, 5) + 1),
              (c = _(t, f + 10, 4) + 4),
              (f += 14));
            for (var E = 1, D = 0; D < 38; D += 2)
              ((S.Q[D] = 0), (S.Q[D + 1] = 0));
            for (var D = 0; D < c; D++) {
              var ee = _(t, f + D * 3, 3);
              ((S.Q[(S.X[D] << 1) + 1] = ee), ee > E && (E = ee));
            }
            ((f += 3 * c),
              y(S.Q, E),
              b(S.Q, E, S.u),
              (p = S.w),
              (m = S.d),
              (f = v(S.u, (1 << E) - 1, o + s, t, f, S.v)));
            var O = h.V(S.v, 0, o, S.C);
            l = (1 << O) - 1;
            var te = h.V(S.v, o, s, S.D);
            ((u = (1 << te) - 1),
              y(S.C, O),
              b(S.C, O, p),
              y(S.D, te),
              b(S.D, te, m));
          }
          for (;;) {
            var k = p[x(t, f) & l];
            f += k & 15;
            var A = k >>> 4;
            if (!(A >>> 8)) n[d++] = A;
            else if (A == 256) break;
            else {
              var ne = d + A - 254;
              if (A > 264) {
                var re = S.q[A - 257];
                ((ne = d + (re >>> 3) + _(t, f, re & 7)), (f += re & 7));
              }
              var ie = m[x(t, f) & u];
              f += ie & 15;
              var ae = ie >>> 4,
                oe = S.c[ae],
                se = (oe >>> 4) + g(t, f, oe & 15);
              for (f += oe & 15; d < ne;)
                ((n[d] = n[d++ - se]),
                  (n[d] = n[d++ - se]),
                  (n[d] = n[d++ - se]),
                  (n[d] = n[d++ - se]));
              d = ne;
            }
          }
        }
        return n.length == d ? n : n.slice(0, d);
      }),
      (e.H.W = function (e, t) {
        var n = e.length;
        if (t <= n) return e;
        var r = new Uint8Array(n << 1);
        return (r.set(e, 0), r);
      }),
      (e.H.R = function (t, n, r, i, a, o) {
        for (var s = e.H.e, c = e.H.Z, l = 0; l < r;) {
          var u = t[c(i, a) & n];
          a += u & 15;
          var d = u >>> 4;
          if (d <= 15) ((o[l] = d), l++);
          else {
            var f = 0,
              p = 0;
            d == 16
              ? ((p = 3 + s(i, a, 2)), (a += 2), (f = o[l - 1]))
              : d == 17
                ? ((p = 3 + s(i, a, 3)), (a += 3))
                : d == 18 && ((p = 11 + s(i, a, 7)), (a += 7));
            for (var m = l + p; l < m;) ((o[l] = f), l++);
          }
        }
        return a;
      }),
      (e.H.V = function (e, t, n, r) {
        for (var i = 0, a = 0, o = r.length >>> 1; a < n;) {
          var s = e[a + t];
          ((r[a << 1] = 0), (r[(a << 1) + 1] = s), s > i && (i = s), a++);
        }
        for (; a < o;) ((r[a << 1] = 0), (r[(a << 1) + 1] = 0), a++);
        return i;
      }),
      (e.H.n = function (t, n) {
        for (
          var r = e.H.m, i = t.length, a, o, s, c, l, u = r.j, c = 0;
          c <= n;
          c++
        )
          u[c] = 0;
        for (c = 1; c < i; c += 2) u[t[c]]++;
        var d = r.K;
        for (a = 0, u[0] = 0, o = 1; o <= n; o++)
          ((a = (a + u[o - 1]) << 1), (d[o] = a));
        for (s = 0; s < i; s += 2)
          ((l = t[s + 1]), l != 0 && ((t[s] = d[l]), d[l]++));
      }),
      (e.H.A = function (t, n, r) {
        for (var i = t.length, a = e.H.m.r, o = 0; o < i; o += 2)
          if (t[o + 1] != 0)
            for (
              var s = o >> 1,
                c = t[o + 1],
                l = (s << 4) | c,
                u = n - c,
                d = t[o] << u,
                f = d + (1 << u);
              d != f;
            ) {
              var p = a[d] >>> (15 - n);
              ((r[p] = l), d++);
            }
      }),
      (e.H.l = function (t, n) {
        for (var r = e.H.m.r, i = 15 - n, a = 0; a < t.length; a += 2) {
          var o = t[a] << (n - t[a + 1]);
          t[a] = r[o] >>> i;
        }
      }),
      (e.H.M = function (e, t, n) {
        n <<= t & 7;
        var r = t >>> 3;
        ((e[r] |= n), (e[r + 1] |= n >>> 8));
      }),
      (e.H.I = function (e, t, n) {
        n <<= t & 7;
        var r = t >>> 3;
        ((e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16));
      }),
      (e.H.e = function (e, t, n) {
        return (
          ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (t & 7)) & ((1 << n) - 1)
        );
      }),
      (e.H.b = function (e, t, n) {
        return (
          ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>>
            (t & 7)) &
          ((1 << n) - 1)
        );
      }),
      (e.H.Z = function (e, t) {
        return (
          (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>>
          (t & 7)
        );
      }),
      (e.H.i = function (e, t) {
        return (
          (e[t >>> 3] |
            (e[(t >>> 3) + 1] << 8) |
            (e[(t >>> 3) + 2] << 16) |
            (e[(t >>> 3) + 3] << 24)) >>>
          (t & 7)
        );
      }),
      (e.H.m = (function () {
        var e = Uint16Array,
          t = Uint32Array;
        return {
          K: new e(16),
          j: new e(16),
          X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
          S: [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
            59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999,
          ],
          T: [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
            4, 5, 5, 5, 5, 0, 0, 0, 0,
          ],
          q: new e(32),
          p: [
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
            513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
            24577, 65535, 65535,
          ],
          z: [
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
            10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
          ],
          c: new t(32),
          J: new e(512),
          _: [],
          h: new e(32),
          $: [],
          w: new e(32768),
          C: [],
          v: [],
          d: new e(32768),
          D: [],
          u: new e(512),
          Q: [],
          r: new e(32768),
          s: new t(286),
          Y: new t(30),
          a: new t(19),
          t: new t(15e3),
          k: new e(65536),
          g: new e(32768),
        };
      })()),
      (function () {
        for (var t = e.H.m, n = 32768, r = 0; r < n; r++) {
          var i = r;
          ((i = ((i & 2863311530) >>> 1) | ((i & 1431655765) << 1)),
            (i = ((i & 3435973836) >>> 2) | ((i & 858993459) << 2)),
            (i = ((i & 4042322160) >>> 4) | ((i & 252645135) << 4)),
            (i = ((i & 4278255360) >>> 8) | ((i & 16711935) << 8)),
            (t.r[r] = ((i >>> 16) | (i << 16)) >>> 17));
        }
        function a(e, t, n) {
          for (; t-- != 0;) e.push(0, n);
        }
        for (var r = 0; r < 32; r++)
          ((t.q[r] = (t.S[r] << 3) | t.T[r]),
            (t.c[r] = (t.p[r] << 4) | t.z[r]));
        (a(t._, 144, 8),
          a(t._, 112, 9),
          a(t._, 24, 7),
          a(t._, 8, 8),
          e.H.n(t._, 9),
          e.H.A(t._, 9, t.J),
          e.H.l(t._, 9),
          a(t.$, 32, 5),
          e.H.n(t.$, 5),
          e.H.A(t.$, 5, t.h),
          e.H.l(t.$, 5),
          a(t.Q, 19, 0),
          a(t.C, 286, 0),
          a(t.D, 30, 0),
          a(t.v, 320, 0));
      })(),
      e.H.N
    );
  })()),
  (Y.decode._readInterlace = function (e, t) {
    for (
      var n = t.width,
        r = t.height,
        i = Y.decode._getBPP(t),
        a = i >> 3,
        o = Math.ceil((n * i) / 8),
        s = new Uint8Array(r * o),
        c = 0,
        l = [0, 0, 4, 0, 2, 0, 1],
        u = [0, 4, 0, 2, 0, 1, 0],
        d = [8, 8, 8, 4, 4, 2, 2],
        f = [8, 8, 4, 4, 2, 2, 1],
        p = 0;
      p < 7;
    ) {
      for (var m = d[p], h = f[p], g = 0, _ = 0, v = l[p]; v < r;)
        ((v += m), _++);
      for (var y = u[p]; y < n;) ((y += h), g++);
      var b = Math.ceil((g * i) / 8);
      Y.decode._filterZero(e, t, c, g, _);
      for (var x = 0, S = l[p]; S < r;) {
        for (var C = u[p], w = (c + x * b) << 3; C < n;) {
          if (i == 1) {
            var T = e[w >> 3];
            ((T = (T >> (7 - (w & 7))) & 1),
              (s[S * o + (C >> 3)] |= T << (7 - ((C & 7) << 0))));
          }
          if (i == 2) {
            var T = e[w >> 3];
            ((T = (T >> (6 - (w & 7))) & 3),
              (s[S * o + (C >> 2)] |= T << (6 - ((C & 3) << 1))));
          }
          if (i == 4) {
            var T = e[w >> 3];
            ((T = (T >> (4 - (w & 7))) & 15),
              (s[S * o + (C >> 1)] |= T << (4 - ((C & 1) << 2))));
          }
          if (i >= 8)
            for (var E = S * o + C * a, D = 0; D < a; D++)
              s[E + D] = e[(w >> 3) + D];
          ((w += i), (C += h));
        }
        (x++, (S += m));
      }
      (g * _ != 0 && (c += _ * (1 + b)), (p += 1));
    }
    return s;
  }),
  (Y.decode._getBPP = function (e) {
    return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
  }),
  (Y.decode._filterZero = function (e, t, n, r, i) {
    var a = Y.decode._getBPP(t),
      o = Math.ceil((r * a) / 8),
      s = Y.decode._paeth;
    a = Math.ceil(a / 8);
    var c = 0,
      l = 1,
      u = e[n],
      d = 0;
    if ((u > 1 && (e[n] = [0, 0, 1][u - 2]), u == 3))
      for (d = a; d < o; d++)
        e[d + 1] = (e[d + 1] + (e[d + 1 - a] >>> 1)) & 255;
    for (var f = 0; f < i; f++)
      if (((c = n + f * o), (l = c + f + 1), (u = e[l - 1]), (d = 0), u == 0))
        for (; d < o; d++) e[c + d] = e[l + d];
      else if (u == 1) {
        for (; d < a; d++) e[c + d] = e[l + d];
        for (; d < o; d++) e[c + d] = e[l + d] + e[c + d - a];
      } else if (u == 2) for (; d < o; d++) e[c + d] = e[l + d] + e[c + d - o];
      else if (u == 3) {
        for (; d < a; d++) e[c + d] = e[l + d] + (e[c + d - o] >>> 1);
        for (; d < o; d++)
          e[c + d] = e[l + d] + ((e[c + d - o] + e[c + d - a]) >>> 1);
      } else {
        for (; d < a; d++) e[c + d] = e[l + d] + s(0, e[c + d - o], 0);
        for (; d < o; d++)
          e[c + d] = e[l + d] + s(e[c + d - a], e[c + d - o], e[c + d - a - o]);
      }
    return e;
  }),
  (Y.decode._paeth = function (e, t, n) {
    var r = e + t - n,
      i = r - e,
      a = r - t,
      o = r - n;
    return i * i <= a * a && i * i <= o * o ? e : a * a <= o * o ? t : n;
  }),
  (Y.decode._IHDR = function (e, t, n) {
    var r = Y._bin;
    ((n.width = r.readUint(e, t)),
      (t += 4),
      (n.height = r.readUint(e, t)),
      (t += 4),
      (n.depth = e[t]),
      t++,
      (n.ctype = e[t]),
      t++,
      (n.compress = e[t]),
      t++,
      (n.filter = e[t]),
      t++,
      (n.interlace = e[t]),
      t++);
  }),
  (Y._bin = {
    nextZero: function (e, t) {
      for (; e[t] != 0;) t++;
      return t;
    },
    readUshort: function (e, t) {
      return (e[t] << 8) | e[t + 1];
    },
    writeUshort: function (e, t, n) {
      ((e[t] = (n >> 8) & 255), (e[t + 1] = n & 255));
    },
    readUint: function (e, t) {
      return e[t] * 16777216 + ((e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]);
    },
    writeUint: function (e, t, n) {
      ((e[t] = (n >> 24) & 255),
        (e[t + 1] = (n >> 16) & 255),
        (e[t + 2] = (n >> 8) & 255),
        (e[t + 3] = n & 255));
    },
    readASCII: function (e, t, n) {
      for (var r = ``, i = 0; i < n; i++) r += String.fromCharCode(e[t + i]);
      return r;
    },
    writeASCII: function (e, t, n) {
      for (var r = 0; r < n.length; r++) e[t + r] = n.charCodeAt(r);
    },
    readBytes: function (e, t, n) {
      for (var r = [], i = 0; i < n; i++) r.push(e[t + i]);
      return r;
    },
    pad: function (e) {
      return e.length < 2 ? `0` + e : e;
    },
    readUTF8: function (e, t, n) {
      for (var r = ``, i, a = 0; a < n; a++)
        r += `%` + Y._bin.pad(e[t + a].toString(16));
      try {
        i = decodeURIComponent(r);
      } catch {
        return Y._bin.readASCII(e, t, n);
      }
      return i;
    },
  }),
  (Y._copyTile = function (e, t, n, r, i, a, o, s, c) {
    for (
      var l = Math.min(t, i), u = Math.min(n, a), d = 0, f = 0, p = 0;
      p < u;
      p++
    )
      for (var m = 0; m < l; m++)
        if (
          (o >= 0 && s >= 0
            ? ((d = (p * t + m) << 2), (f = ((s + p) * i + o + m) << 2))
            : ((d = ((-s + p) * t - o + m) << 2), (f = (p * i + m) << 2)),
          c == 0)
        )
          ((r[f] = e[d]),
            (r[f + 1] = e[d + 1]),
            (r[f + 2] = e[d + 2]),
            (r[f + 3] = e[d + 3]));
        else if (c == 1) {
          var h = e[d + 3] * (1 / 255),
            g = e[d] * h,
            _ = e[d + 1] * h,
            v = e[d + 2] * h,
            y = r[f + 3] * (1 / 255),
            b = r[f] * y,
            x = r[f + 1] * y,
            S = r[f + 2] * y,
            C = 1 - h,
            w = h + y * C,
            T = w == 0 ? 0 : 1 / w;
          ((r[f + 3] = 255 * w),
            (r[f + 0] = (g + b * C) * T),
            (r[f + 1] = (_ + x * C) * T),
            (r[f + 2] = (v + S * C) * T));
        } else if (c == 2) {
          var h = e[d + 3],
            g = e[d],
            _ = e[d + 1],
            v = e[d + 2],
            y = r[f + 3],
            b = r[f],
            x = r[f + 1],
            S = r[f + 2];
          h == y && g == b && _ == x && v == S
            ? ((r[f] = 0), (r[f + 1] = 0), (r[f + 2] = 0), (r[f + 3] = 0))
            : ((r[f] = g), (r[f + 1] = _), (r[f + 2] = v), (r[f + 3] = h));
        } else if (c == 3) {
          var h = e[d + 3],
            g = e[d],
            _ = e[d + 1],
            v = e[d + 2],
            y = r[f + 3],
            b = r[f],
            x = r[f + 1],
            S = r[f + 2];
          if (h == y && g == b && _ == x && v == S) continue;
          if (h < 220 && y > 20) return !1;
        }
    return !0;
  }),
  (Y.encode = function (e, t, n, r, i, a, o) {
    ((r ??= 0), (o ??= !1));
    var s = Y.encode.compress(e, t, n, r, [!1, !1, !1, 0, o]);
    return (Y.encode.compressPNG(s, -1), Y.encode._main(s, t, n, i, a));
  }),
  (Y.encodeLL = function (e, t, n, r, i, a, o, s) {
    for (
      var c = {
          ctype: 0 + (r == 1 ? 0 : 2) + (i == 0 ? 0 : 4),
          depth: a,
          frames: [],
        },
        l = (r + i) * a,
        u = l * t,
        d = 0;
      d < e.length;
      d++
    )
      c.frames.push({
        rect: { x: 0, y: 0, width: t, height: n },
        img: new Uint8Array(e[d]),
        blend: 0,
        dispose: 1,
        bpp: Math.ceil(l / 8),
        bpl: Math.ceil(u / 8),
      });
    return (Y.encode.compressPNG(c, 0, !0), Y.encode._main(c, t, n, o, s));
  }),
  (Y.encode._main = function (e, t, n, r, i) {
    i ??= {};
    var a = Y.crc.crc,
      o = Y._bin.writeUint,
      s = Y._bin.writeUshort,
      c = Y._bin.writeASCII,
      l = 8,
      u = e.frames.length > 1,
      d = !1,
      f = 33 + (u ? 20 : 0);
    if (
      (i.sRGB != null && (f += 13), i.pHYs != null && (f += 21), e.ctype == 3)
    ) {
      for (var p = e.plte.length, m = 0; m < p; m++)
        e.plte[m] >>> 24 != 255 && (d = !0);
      f += 8 + p * 3 + 4 + (d ? 8 + p * 1 + 4 : 0);
    }
    for (var h = 0; h < e.frames.length; h++) {
      var g = e.frames[h];
      (u && (f += 38), (f += g.cimg.length + 12), h != 0 && (f += 4));
    }
    f += 12;
    for (
      var _ = new Uint8Array(f), v = [137, 80, 78, 71, 13, 10, 26, 10], m = 0;
      m < 8;
      m++
    )
      _[m] = v[m];
    if (
      (o(_, l, 13),
      (l += 4),
      c(_, l, `IHDR`),
      (l += 4),
      o(_, l, t),
      (l += 4),
      o(_, l, n),
      (l += 4),
      (_[l] = e.depth),
      l++,
      (_[l] = e.ctype),
      l++,
      (_[l] = 0),
      l++,
      (_[l] = 0),
      l++,
      (_[l] = 0),
      l++,
      o(_, l, a(_, l - 17, 17)),
      (l += 4),
      i.sRGB != null &&
        (o(_, l, 1),
        (l += 4),
        c(_, l, `sRGB`),
        (l += 4),
        (_[l] = i.sRGB),
        l++,
        o(_, l, a(_, l - 5, 5)),
        (l += 4)),
      i.pHYs != null &&
        (o(_, l, 9),
        (l += 4),
        c(_, l, `pHYs`),
        (l += 4),
        o(_, l, i.pHYs[0]),
        (l += 4),
        o(_, l, i.pHYs[1]),
        (l += 4),
        (_[l] = i.pHYs[2]),
        l++,
        o(_, l, a(_, l - 13, 13)),
        (l += 4)),
      u &&
        (o(_, l, 8),
        (l += 4),
        c(_, l, `acTL`),
        (l += 4),
        o(_, l, e.frames.length),
        (l += 4),
        o(_, l, i.loop == null ? 0 : i.loop),
        (l += 4),
        o(_, l, a(_, l - 12, 12)),
        (l += 4)),
      e.ctype == 3)
    ) {
      var p = e.plte.length;
      (o(_, l, p * 3), (l += 4), c(_, l, `PLTE`), (l += 4));
      for (var m = 0; m < p; m++) {
        var y = m * 3,
          b = e.plte[m],
          x = b & 255,
          S = (b >>> 8) & 255,
          C = (b >>> 16) & 255;
        ((_[l + y + 0] = x), (_[l + y + 1] = S), (_[l + y + 2] = C));
      }
      if (
        ((l += p * 3), o(_, l, a(_, l - p * 3 - 4, p * 3 + 4)), (l += 4), d)
      ) {
        (o(_, l, p), (l += 4), c(_, l, `tRNS`), (l += 4));
        for (var m = 0; m < p; m++) _[l + m] = (e.plte[m] >>> 24) & 255;
        ((l += p), o(_, l, a(_, l - p - 4, p + 4)), (l += 4));
      }
    }
    for (var w = 0, h = 0; h < e.frames.length; h++) {
      var g = e.frames[h];
      u &&
        (o(_, l, 26),
        (l += 4),
        c(_, l, `fcTL`),
        (l += 4),
        o(_, l, w++),
        (l += 4),
        o(_, l, g.rect.width),
        (l += 4),
        o(_, l, g.rect.height),
        (l += 4),
        o(_, l, g.rect.x),
        (l += 4),
        o(_, l, g.rect.y),
        (l += 4),
        s(_, l, r[h]),
        (l += 2),
        s(_, l, 1e3),
        (l += 2),
        (_[l] = g.dispose),
        l++,
        (_[l] = g.blend),
        l++,
        o(_, l, a(_, l - 30, 30)),
        (l += 4));
      var T = g.cimg,
        p = T.length;
      (o(_, l, p + (h == 0 ? 0 : 4)), (l += 4));
      var E = l;
      (c(_, l, h == 0 ? `IDAT` : `fdAT`),
        (l += 4),
        h != 0 && (o(_, l, w++), (l += 4)),
        _.set(T, l),
        (l += p),
        o(_, l, a(_, E, l - E)),
        (l += 4));
    }
    return (
      o(_, l, 0),
      (l += 4),
      c(_, l, `IEND`),
      (l += 4),
      o(_, l, a(_, l - 4, 4)),
      (l += 4),
      _.buffer
    );
  }),
  (Y.encode.compressPNG = function (e, t, n) {
    for (var r = 0; r < e.frames.length; r++) {
      var i = e.frames[r];
      i.rect.width;
      var a = i.rect.height,
        o = new Uint8Array(a * i.bpl + a);
      i.cimg = Y.encode._filterZero(i.img, a, i.bpp, i.bpl, o, t, n);
    }
  }),
  (Y.encode.compress = function (e, t, n, r, i) {
    for (
      var a = i[0],
        o = i[1],
        s = i[2],
        c = i[3],
        l = i[4],
        u = 6,
        d = 8,
        f = 255,
        p = 0;
      p < e.length;
      p++
    )
      for (var m = new Uint8Array(e[p]), h = m.length, g = 0; g < h; g += 4)
        f &= m[g + 3];
    var _ = f != 255,
      v = Y.encode.framize(e, t, n, a, o, s),
      y = {},
      b = [],
      x = [];
    if (r != 0) {
      for (var S = [], g = 0; g < v.length; g++) S.push(v[g].img.buffer);
      for (
        var C = Y.encode.concatRGBA(S),
          w = Y.quantize(C, r),
          T = 0,
          E = new Uint8Array(w.abuf),
          g = 0;
        g < v.length;
        g++
      ) {
        var D = v[g].img,
          ee = D.length;
        x.push(new Uint8Array(w.inds.buffer, T >> 2, ee >> 2));
        for (var p = 0; p < ee; p += 4)
          ((D[p] = E[T + p]),
            (D[p + 1] = E[T + p + 1]),
            (D[p + 2] = E[T + p + 2]),
            (D[p + 3] = E[T + p + 3]));
        T += ee;
      }
      for (var g = 0; g < w.plte.length; g++) b.push(w.plte[g].est.rgba);
    } else
      for (var p = 0; p < v.length; p++) {
        var O = v[p],
          te = new Uint32Array(O.img.buffer),
          k = O.rect.width,
          h = te.length,
          A = new Uint8Array(h);
        x.push(A);
        for (var g = 0; g < h; g++) {
          var ne = te[g];
          if (g != 0 && ne == te[g - 1]) A[g] = A[g - 1];
          else if (g > k && ne == te[g - k]) A[g] = A[g - k];
          else {
            var re = y[ne];
            if (
              re == null &&
              ((y[ne] = re = b.length), b.push(ne), b.length >= 300)
            )
              break;
            A[g] = re;
          }
        }
      }
    var ie = b.length;
    ie <= 256 &&
      l == 0 &&
      ((d = ie <= 2 ? 1 : ie <= 4 ? 2 : ie <= 16 ? 4 : 8),
      (d = Math.max(d, c)));
    for (var p = 0; p < v.length; p++) {
      var O = v[p];
      (O.rect.x, O.rect.y);
      var k = O.rect.width,
        ae = O.rect.height,
        oe = O.img;
      new Uint32Array(oe.buffer);
      var se = 4 * k,
        ce = 4;
      if (ie <= 256 && l == 0) {
        se = Math.ceil((d * k) / 8);
        for (var le = new Uint8Array(se * ae), ue = x[p], j = 0; j < ae; j++) {
          var g = j * se,
            M = j * k;
          if (d == 8) for (var de = 0; de < k; de++) le[g + de] = ue[M + de];
          else if (d == 4)
            for (var de = 0; de < k; de++)
              le[g + (de >> 1)] |= ue[M + de] << (4 - (de & 1) * 4);
          else if (d == 2)
            for (var de = 0; de < k; de++)
              le[g + (de >> 2)] |= ue[M + de] << (6 - (de & 3) * 2);
          else if (d == 1)
            for (var de = 0; de < k; de++)
              le[g + (de >> 3)] |= ue[M + de] << (7 - (de & 7) * 1);
        }
        ((oe = le), (u = 3), (ce = 1));
      } else if (_ == 0 && v.length == 1) {
        for (
          var le = new Uint8Array(k * ae * 3), fe = k * ae, g = 0;
          g < fe;
          g++
        ) {
          var D = g * 3,
            pe = g * 4;
          ((le[D] = oe[pe]),
            (le[D + 1] = oe[pe + 1]),
            (le[D + 2] = oe[pe + 2]));
        }
        ((oe = le), (u = 2), (ce = 3), (se = 3 * k));
      }
      ((O.img = oe), (O.bpl = se), (O.bpp = ce));
    }
    return { ctype: u, depth: d, plte: b, frames: v };
  }),
  (Y.encode.framize = function (e, t, n, r, i, a) {
    for (var o = [], s = 0; s < e.length; s++) {
      var c = new Uint8Array(e[s]),
        l = new Uint32Array(c.buffer),
        u,
        d = 0,
        f = 0,
        p = t,
        m = n,
        h = +!!r;
      if (s != 0) {
        for (
          var g = a || r || s == 1 || o[s - 2].dispose != 0 ? 1 : 2,
            _ = 0,
            v = 1e9,
            y = 0;
          y < g;
          y++
        ) {
          for (
            var b = new Uint8Array(e[s - 1 - y]),
              x = new Uint32Array(e[s - 1 - y]),
              S = t,
              C = n,
              w = -1,
              T = -1,
              E = 0;
            E < n;
            E++
          )
            for (var D = 0; D < t; D++) {
              var ee = E * t + D;
              l[ee] != x[ee] &&
                (D < S && (S = D),
                D > w && (w = D),
                E < C && (C = E),
                E > T && (T = E));
            }
          (w == -1 && (S = C = w = T = 0),
            i && ((S & 1) == 1 && S--, (C & 1) == 1 && C--));
          var O = (w - S + 1) * (T - C + 1);
          O < v &&
            ((v = O),
            (_ = y),
            (d = S),
            (f = C),
            (p = w - S + 1),
            (m = T - C + 1));
        }
        var b = new Uint8Array(e[s - 1 - _]);
        (_ == 1 && (o[s - 1].dispose = 2),
          (u = new Uint8Array(p * m * 4)),
          Y._copyTile(b, t, n, u, p, m, -d, -f, 0),
          (h = +!!Y._copyTile(c, t, n, u, p, m, -d, -f, 3)),
          h == 1
            ? Y.encode._prepareDiff(c, t, n, u, {
                x: d,
                y: f,
                width: p,
                height: m,
              })
            : Y._copyTile(c, t, n, u, p, m, -d, -f, 0));
      } else u = c.slice(0);
      o.push({
        rect: { x: d, y: f, width: p, height: m },
        img: u,
        blend: h,
        dispose: 0,
      });
    }
    if (r)
      for (var s = 0; s < o.length; s++) {
        var te = o[s];
        if (te.blend != 1) {
          var k = te.rect,
            A = o[s - 1].rect,
            ne = Math.min(k.x, A.x),
            re = Math.min(k.y, A.y),
            ie = Math.max(k.x + k.width, A.x + A.width),
            ae = Math.max(k.y + k.height, A.y + A.height),
            oe = { x: ne, y: re, width: ie - ne, height: ae - re };
          ((o[s - 1].dispose = 1),
            s - 1 != 0 && Y.encode._updateFrame(e, t, n, o, s - 1, oe, i),
            Y.encode._updateFrame(e, t, n, o, s, oe, i));
        }
      }
    var se = 0;
    if (e.length != 1)
      for (var ee = 0; ee < o.length; ee++) {
        var te = o[ee];
        se += te.rect.width * te.rect.height;
      }
    return o;
  }),
  (Y.encode._updateFrame = function (e, t, n, r, i, a, o) {
    for (
      var s = Uint8Array,
        c = Uint32Array,
        l = new s(e[i - 1]),
        u = new c(e[i - 1]),
        d = i + 1 < e.length ? new s(e[i + 1]) : null,
        f = new s(e[i]),
        p = new c(f.buffer),
        m = t,
        h = n,
        g = -1,
        _ = -1,
        v = 0;
      v < a.height;
      v++
    )
      for (var y = 0; y < a.width; y++) {
        var b = a.x + y,
          x = a.y + v,
          S = x * t + b,
          C = p[S];
        C == 0 ||
          (r[i - 1].dispose == 0 &&
            u[S] == C &&
            (d == null || d[S * 4 + 3] != 0)) ||
          (b < m && (m = b),
          b > g && (g = b),
          x < h && (h = x),
          x > _ && (_ = x));
      }
    (g == -1 && (m = h = g = _ = 0),
      o && ((m & 1) == 1 && m--, (h & 1) == 1 && h--),
      (a = { x: m, y: h, width: g - m + 1, height: _ - h + 1 }));
    var w = r[i];
    ((w.rect = a),
      (w.blend = 1),
      (w.img = new Uint8Array(a.width * a.height * 4)),
      r[i - 1].dispose == 0
        ? (Y._copyTile(l, t, n, w.img, a.width, a.height, -a.x, -a.y, 0),
          Y.encode._prepareDiff(f, t, n, w.img, a))
        : Y._copyTile(f, t, n, w.img, a.width, a.height, -a.x, -a.y, 0));
  }),
  (Y.encode._prepareDiff = function (e, t, n, r, i) {
    Y._copyTile(e, t, n, r, i.width, i.height, -i.x, -i.y, 2);
  }),
  (Y.encode._filterZero = function (e, t, n, r, i, a, o) {
    var s = [],
      c = [0, 1, 2, 3, 4];
    a == -1 ? (t * r > 5e5 || n == 1) && (c = [0]) : (c = [a]);
    var l;
    o && (l = { level: 0 });
    for (
      var u = o && UZIP != null ? UZIP : Rt.default, d = 0;
      d < c.length;
      d++
    ) {
      for (var f = 0; f < t; f++) Y.encode._filterLine(i, e, f, r, n, c[d]);
      s.push(u.deflate(i, l));
    }
    for (var p, m = 1e9, d = 0; d < s.length; d++)
      s[d].length < m && ((p = d), (m = s[d].length));
    return s[p];
  }),
  (Y.encode._filterLine = function (e, t, n, r, i, a) {
    var o = n * r,
      s = o + n,
      c = Y.decode._paeth;
    if (((e[s] = a), s++, a == 0)) {
      if (r < 500) for (var l = 0; l < r; l++) e[s + l] = t[o + l];
      else e.set(new Uint8Array(t.buffer, o, r), s);
    } else if (a == 1) {
      for (var l = 0; l < i; l++) e[s + l] = t[o + l];
      for (var l = i; l < r; l++)
        e[s + l] = (t[o + l] - t[o + l - i] + 256) & 255;
    } else if (n == 0) {
      for (var l = 0; l < i; l++) e[s + l] = t[o + l];
      if (a == 2) for (var l = i; l < r; l++) e[s + l] = t[o + l];
      if (a == 3)
        for (var l = i; l < r; l++)
          e[s + l] = (t[o + l] - (t[o + l - i] >> 1) + 256) & 255;
      if (a == 4)
        for (var l = i; l < r; l++)
          e[s + l] = (t[o + l] - c(t[o + l - i], 0, 0) + 256) & 255;
    } else {
      if (a == 2)
        for (var l = 0; l < r; l++)
          e[s + l] = (t[o + l] + 256 - t[o + l - r]) & 255;
      if (a == 3) {
        for (var l = 0; l < i; l++)
          e[s + l] = (t[o + l] + 256 - (t[o + l - r] >> 1)) & 255;
        for (var l = i; l < r; l++)
          e[s + l] =
            (t[o + l] + 256 - ((t[o + l - r] + t[o + l - i]) >> 1)) & 255;
      }
      if (a == 4) {
        for (var l = 0; l < i; l++)
          e[s + l] = (t[o + l] + 256 - c(0, t[o + l - r], 0)) & 255;
        for (var l = i; l < r; l++)
          e[s + l] =
            (t[o + l] + 256 - c(t[o + l - i], t[o + l - r], t[o + l - i - r])) &
            255;
      }
    }
  }),
  (Y.crc = {
    table: (function () {
      for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
        for (var n = t, r = 0; r < 8; r++)
          n & 1 ? (n = 3988292384 ^ (n >>> 1)) : (n >>>= 1);
        e[t] = n;
      }
      return e;
    })(),
    update: function (e, t, n, r) {
      for (var i = 0; i < r; i++)
        e = Y.crc.table[(e ^ t[n + i]) & 255] ^ (e >>> 8);
      return e;
    },
    crc: function (e, t, n) {
      return Y.crc.update(4294967295, e, t, n) ^ 4294967295;
    },
  }),
  (Y.quantize = function (e, t) {
    var n = new Uint8Array(e),
      r = n.slice(0),
      i = new Uint32Array(r.buffer),
      a = Y.quantize.getKDtree(r, t),
      o = a[0],
      s = a[1];
    Y.quantize.planeDst;
    for (
      var c = n, l = i, u = c.length, d = new Uint8Array(n.length >> 2), f = 0;
      f < u;
      f += 4
    ) {
      var p = c[f] * (1 / 255),
        m = c[f + 1] * (1 / 255),
        h = c[f + 2] * (1 / 255),
        g = c[f + 3] * (1 / 255),
        _ = Y.quantize.getNearest(o, p, m, h, g);
      ((d[f >> 2] = _.ind), (l[f >> 2] = _.est.rgba));
    }
    return { abuf: r.buffer, inds: d, plte: s };
  }),
  (Y.quantize.getKDtree = function (e, t, n) {
    n ??= 1e-4;
    var r = new Uint32Array(e.buffer),
      i = {
        i0: 0,
        i1: e.length,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null,
      };
    ((i.bst = Y.quantize.stats(e, i.i0, i.i1)),
      (i.est = Y.quantize.estats(i.bst)));
    for (var a = [i]; a.length < t;) {
      for (var o = 0, s = 0, c = 0; c < a.length; c++)
        a[c].est.L > o && ((o = a[c].est.L), (s = c));
      if (o < n) break;
      var l = a[s],
        u = Y.quantize.splitPixels(e, r, l.i0, l.i1, l.est.e, l.est.eMq255);
      if (l.i0 >= u || l.i1 <= u) {
        l.est.L = 0;
        continue;
      }
      var d = {
        i0: l.i0,
        i1: u,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null,
      };
      ((d.bst = Y.quantize.stats(e, d.i0, d.i1)),
        (d.est = Y.quantize.estats(d.bst)));
      var f = {
        i0: u,
        i1: l.i1,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null,
      };
      f.bst = { R: [], m: [], N: l.bst.N - d.bst.N };
      for (var c = 0; c < 16; c++) f.bst.R[c] = l.bst.R[c] - d.bst.R[c];
      for (var c = 0; c < 4; c++) f.bst.m[c] = l.bst.m[c] - d.bst.m[c];
      ((f.est = Y.quantize.estats(f.bst)),
        (l.left = d),
        (l.right = f),
        (a[s] = d),
        a.push(f));
    }
    a.sort(function (e, t) {
      return t.bst.N - e.bst.N;
    });
    for (var c = 0; c < a.length; c++) a[c].ind = c;
    return [i, a];
  }),
  (Y.quantize.getNearest = function (e, t, n, r, i) {
    if (e.left == null)
      return ((e.tdst = Y.quantize.dist(e.est.q, t, n, r, i)), e);
    var a = Y.quantize.planeDst(e.est, t, n, r, i),
      o = e.left,
      s = e.right;
    a > 0 && ((o = e.right), (s = e.left));
    var c = Y.quantize.getNearest(o, t, n, r, i);
    if (c.tdst <= a * a) return c;
    var l = Y.quantize.getNearest(s, t, n, r, i);
    return l.tdst < c.tdst ? l : c;
  }),
  (Y.quantize.planeDst = function (e, t, n, r, i) {
    var a = e.e;
    return a[0] * t + a[1] * n + a[2] * r + a[3] * i - e.eMq;
  }),
  (Y.quantize.dist = function (e, t, n, r, i) {
    var a = t - e[0],
      o = n - e[1],
      s = r - e[2],
      c = i - e[3];
    return a * a + o * o + s * s + c * c;
  }),
  (Y.quantize.splitPixels = function (e, t, n, r, i, a) {
    var o = Y.quantize.vecDot;
    for (r -= 4; n < r;) {
      for (; o(e, n, i) <= a;) n += 4;
      for (; o(e, r, i) > a;) r -= 4;
      if (n >= r) break;
      var s = t[n >> 2];
      ((t[n >> 2] = t[r >> 2]), (t[r >> 2] = s), (n += 4), (r -= 4));
    }
    for (; o(e, n, i) > a;) n -= 4;
    return n + 4;
  }),
  (Y.quantize.vecDot = function (e, t, n) {
    return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
  }),
  (Y.quantize.stats = function (e, t, n) {
    for (
      var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i = [0, 0, 0, 0],
        a = (n - t) >> 2,
        o = t;
      o < n;
      o += 4
    ) {
      var s = e[o] * (1 / 255),
        c = e[o + 1] * (1 / 255),
        l = e[o + 2] * (1 / 255),
        u = e[o + 3] * (1 / 255);
      ((i[0] += s),
        (i[1] += c),
        (i[2] += l),
        (i[3] += u),
        (r[0] += s * s),
        (r[1] += s * c),
        (r[2] += s * l),
        (r[3] += s * u),
        (r[5] += c * c),
        (r[6] += c * l),
        (r[7] += c * u),
        (r[10] += l * l),
        (r[11] += l * u),
        (r[15] += u * u));
    }
    return (
      (r[4] = r[1]),
      (r[8] = r[2]),
      (r[9] = r[6]),
      (r[12] = r[3]),
      (r[13] = r[7]),
      (r[14] = r[11]),
      { R: r, m: i, N: a }
    );
  }),
  (Y.quantize.estats = function (e) {
    var t = e.R,
      n = e.m,
      r = e.N,
      i = n[0],
      a = n[1],
      o = n[2],
      s = n[3],
      c = r == 0 ? 0 : 1 / r,
      l = [
        t[0] - i * i * c,
        t[1] - i * a * c,
        t[2] - i * o * c,
        t[3] - i * s * c,
        t[4] - a * i * c,
        t[5] - a * a * c,
        t[6] - a * o * c,
        t[7] - a * s * c,
        t[8] - o * i * c,
        t[9] - o * a * c,
        t[10] - o * o * c,
        t[11] - o * s * c,
        t[12] - s * i * c,
        t[13] - s * a * c,
        t[14] - s * o * c,
        t[15] - s * s * c,
      ],
      u = l,
      d = Y.M4,
      f = [0.5, 0.5, 0.5, 0.5],
      p = 0,
      m = 0;
    if (r != 0)
      for (
        var h = 0;
        h < 10 &&
        ((f = d.multVec(u, f)),
        (m = Math.sqrt(d.dot(f, f))),
        (f = d.sml(1 / m, f)),
        !(Math.abs(m - p) < 1e-9));
        h++
      )
        p = m;
    var g = [i * c, a * c, o * c, s * c],
      _ = d.dot(d.sml(255, g), f);
    return {
      Cov: l,
      q: g,
      e: f,
      L: p,
      eMq255: _,
      eMq: d.dot(f, g),
      rgba:
        ((Math.round(255 * g[3]) << 24) |
          (Math.round(255 * g[2]) << 16) |
          (Math.round(255 * g[1]) << 8) |
          (Math.round(255 * g[0]) << 0)) >>>
        0,
    };
  }),
  (Y.M4 = {
    multVec: function (e, t) {
      return [
        e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3],
        e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3],
        e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3],
        e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3],
      ];
    },
    dot: function (e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
    },
    sml: function (e, t) {
      return [e * t[0], e * t[1], e * t[2], e * t[3]];
    },
  }),
  (Y.encode.concatRGBA = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
    for (var r = new Uint8Array(t), i = 0, n = 0; n < e.length; n++) {
      for (var a = new Uint8Array(e[n]), o = a.length, s = 0; s < o; s += 4) {
        var c = a[s],
          l = a[s + 1],
          u = a[s + 2],
          d = a[s + 3];
        (d == 0 && (c = l = u = 0),
          (r[i + s] = c),
          (r[i + s + 1] = l),
          (r[i + s + 2] = u),
          (r[i + s + 3] = d));
      }
      i += o;
    }
    return r.buffer;
  }));
var ni = function (e) {
    if (e === 0) return ii.Greyscale;
    if (e === 2) return ii.Truecolour;
    if (e === 3) return ii.IndexedColour;
    if (e === 4) return ii.GreyscaleWithAlpha;
    if (e === 6) return ii.TruecolourWithAlpha;
    throw Error(`Unknown color type: ` + e);
  },
  ri = function (e) {
    for (
      var t = Math.floor(e.length / 4),
        n = new Uint8Array(t * 3),
        r = new Uint8Array(t * 1),
        i = 0,
        a = 0,
        o = 0;
      i < e.length;
    )
      ((n[a++] = e[i++]),
        (n[a++] = e[i++]),
        (n[a++] = e[i++]),
        (r[o++] = e[i++]));
    return { rgbChannel: n, alphaChannel: r };
  },
  ii;
(function (e) {
  ((e.Greyscale = `Greyscale`),
    (e.Truecolour = `Truecolour`),
    (e.IndexedColour = `IndexedColour`),
    (e.GreyscaleWithAlpha = `GreyscaleWithAlpha`),
    (e.TruecolourWithAlpha = `TruecolourWithAlpha`));
})((ii ||= {}));
var ai = (function () {
    function e(e) {
      var t = Y.decode(e),
        n = Y.toRGBA8(t);
      if (n.length > 1) throw Error(`Animated PNGs are not supported`);
      var r = ri(new Uint8Array(n[0])),
        i = r.rgbChannel,
        a = r.alphaChannel;
      ((this.rgbChannel = i),
        a.some(function (e) {
          return e < 255;
        }) && (this.alphaChannel = a),
        (this.type = ni(t.ctype)),
        (this.width = t.width),
        (this.height = t.height),
        (this.bitsPerComponent = 8));
    }
    return (
      (e.load = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  oi = (function () {
    function e(e) {
      ((this.image = e),
        (this.bitsPerComponent = e.bitsPerComponent),
        (this.width = e.width),
        (this.height = e.height),
        (this.colorSpace = `DeviceRGB`));
    }
    return (
      (e.for = function (t) {
        return F(this, void 0, void 0, function () {
          var n;
          return I(this, function (r) {
            return ((n = ai.load(t)), [2, new e(n)]);
          });
        });
      }),
      (e.prototype.embedIntoContext = function (e, t) {
        return F(this, void 0, void 0, function () {
          var n, r;
          return I(this, function (i) {
            return (
              (n = this.embedAlphaChannel(e)),
              (r = e.flateStream(this.image.rgbChannel, {
                Type: `XObject`,
                Subtype: `Image`,
                BitsPerComponent: this.image.bitsPerComponent,
                Width: this.image.width,
                Height: this.image.height,
                ColorSpace: this.colorSpace,
                SMask: n,
              })),
              t ? (e.assign(t, r), [2, t]) : [2, e.register(r)]
            );
          });
        });
      }),
      (e.prototype.embedAlphaChannel = function (e) {
        if (this.image.alphaChannel) {
          var t = e.flateStream(this.image.alphaChannel, {
            Type: `XObject`,
            Subtype: `Image`,
            Height: this.image.height,
            Width: this.image.width,
            BitsPerComponent: this.image.bitsPerComponent,
            ColorSpace: `DeviceGray`,
            Decode: [0, 1],
          });
          return e.register(t);
        }
      }),
      e
    );
  })(),
  si = (function () {
    function e(e, t, n) {
      ((this.bytes = e),
        (this.start = t || 0),
        (this.pos = this.start),
        (this.end = t && n ? t + n : this.bytes.length));
    }
    return (
      Object.defineProperty(e.prototype, "length", {
        get: function () {
          return this.end - this.start;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "isEmpty", {
        get: function () {
          return this.length === 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.getByte = function () {
        return this.pos >= this.end ? -1 : this.bytes[this.pos++];
      }),
      (e.prototype.getUint16 = function () {
        var e = this.getByte(),
          t = this.getByte();
        return e === -1 || t === -1 ? -1 : (e << 8) + t;
      }),
      (e.prototype.getInt32 = function () {
        var e = this.getByte(),
          t = this.getByte(),
          n = this.getByte(),
          r = this.getByte();
        return (e << 24) + (t << 16) + (n << 8) + r;
      }),
      (e.prototype.getBytes = function (e, t) {
        t === void 0 && (t = !1);
        var n = this.bytes,
          r = this.pos,
          i = this.end;
        if (e) {
          var a = r + e;
          (a > i && (a = i), (this.pos = a));
          var o = n.subarray(r, a);
          return t ? new Uint8ClampedArray(o) : o;
        }
        var o = n.subarray(r, i);
        return t ? new Uint8ClampedArray(o) : o;
      }),
      (e.prototype.peekByte = function () {
        var e = this.getByte();
        return (this.pos--, e);
      }),
      (e.prototype.peekBytes = function (e, t) {
        t === void 0 && (t = !1);
        var n = this.getBytes(e, t);
        return ((this.pos -= n.length), n);
      }),
      (e.prototype.skip = function (e) {
        ((e ||= 1), (this.pos += e));
      }),
      (e.prototype.reset = function () {
        this.pos = this.start;
      }),
      (e.prototype.moveStart = function () {
        this.start = this.pos;
      }),
      (e.prototype.makeSubStream = function (t, n) {
        return new e(this.bytes, t, n);
      }),
      (e.prototype.decode = function () {
        return this.bytes;
      }),
      e
    );
  })(),
  ci = new Uint8Array(),
  li = (function () {
    function e(e) {
      if (
        ((this.pos = 0),
        (this.bufferLength = 0),
        (this.eof = !1),
        (this.buffer = ci),
        (this.minBufferLength = 512),
        e)
      )
        for (; this.minBufferLength < e;) this.minBufferLength *= 2;
    }
    return (
      Object.defineProperty(e.prototype, "isEmpty", {
        get: function () {
          for (; !this.eof && this.bufferLength === 0;) this.readBlock();
          return this.bufferLength === 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.getByte = function () {
        for (var e = this.pos; this.bufferLength <= e;) {
          if (this.eof) return -1;
          this.readBlock();
        }
        return this.buffer[this.pos++];
      }),
      (e.prototype.getUint16 = function () {
        var e = this.getByte(),
          t = this.getByte();
        return e === -1 || t === -1 ? -1 : (e << 8) + t;
      }),
      (e.prototype.getInt32 = function () {
        var e = this.getByte(),
          t = this.getByte(),
          n = this.getByte(),
          r = this.getByte();
        return (e << 24) + (t << 16) + (n << 8) + r;
      }),
      (e.prototype.getBytes = function (e, t) {
        t === void 0 && (t = !1);
        var n,
          r = this.pos;
        if (e) {
          for (
            this.ensureBuffer(r + e), n = r + e;
            !this.eof && this.bufferLength < n;
          )
            this.readBlock();
          var i = this.bufferLength;
          n > i && (n = i);
        } else {
          for (; !this.eof;) this.readBlock();
          n = this.bufferLength;
        }
        this.pos = n;
        var a = this.buffer.subarray(r, n);
        return t && !(a instanceof Uint8ClampedArray)
          ? new Uint8ClampedArray(a)
          : a;
      }),
      (e.prototype.peekByte = function () {
        var e = this.getByte();
        return (this.pos--, e);
      }),
      (e.prototype.peekBytes = function (e, t) {
        t === void 0 && (t = !1);
        var n = this.getBytes(e, t);
        return ((this.pos -= n.length), n);
      }),
      (e.prototype.skip = function (e) {
        ((e ||= 1), (this.pos += e));
      }),
      (e.prototype.reset = function () {
        this.pos = 0;
      }),
      (e.prototype.makeSubStream = function (e, t) {
        for (var n = e + t; this.bufferLength <= n && !this.eof;)
          this.readBlock();
        return new si(this.buffer, e, t);
      }),
      (e.prototype.decode = function () {
        for (; !this.eof;) this.readBlock();
        return this.buffer.subarray(0, this.bufferLength);
      }),
      (e.prototype.readBlock = function () {
        throw new Tn(this.constructor.name, `readBlock`);
      }),
      (e.prototype.ensureBuffer = function (e) {
        var t = this.buffer;
        if (e <= t.byteLength) return t;
        for (var n = this.minBufferLength; n < e;) n *= 2;
        var r = new Uint8Array(n);
        return (r.set(t), (this.buffer = r));
      }),
      e
    );
  })(),
  ui = function (e) {
    return e === 32 || e === 9 || e === 13 || e === 10;
  },
  di = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this, n) || this;
      return (
        (r.stream = t),
        (r.input = new Uint8Array(5)),
        (n &&= 0.8 * n),
        r
      );
    }
    return (
      (t.prototype.readBlock = function () {
        for (
          var e = 126, t = 122, n = -1, r = this.stream, i = r.getByte();
          ui(i);
        )
          i = r.getByte();
        if (i === n || i === e) {
          this.eof = !0;
          return;
        }
        var a = this.bufferLength,
          o,
          s;
        if (i === t) {
          for (o = this.ensureBuffer(a + 4), s = 0; s < 4; ++s) o[a + s] = 0;
          this.bufferLength += 4;
        } else {
          var c = this.input;
          for (c[0] = i, s = 1; s < 5; ++s) {
            for (i = r.getByte(); ui(i);) i = r.getByte();
            if (((c[s] = i), i === n || i === e)) break;
          }
          if (
            ((o = this.ensureBuffer(a + s - 1)),
            (this.bufferLength += s - 1),
            s < 5)
          ) {
            for (; s < 5; ++s) c[s] = 117;
            this.eof = !0;
          }
          var l = 0;
          for (s = 0; s < 5; ++s) l = l * 85 + (c[s] - 33);
          for (s = 3; s >= 0; --s) ((o[a + s] = l & 255), (l >>= 8));
        }
      }),
      t
    );
  })(li),
  fi = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this, n) || this;
      return ((r.stream = t), (r.firstDigit = -1), (n &&= 0.5 * n), r);
    }
    return (
      (t.prototype.readBlock = function () {
        var e = this.stream.getBytes(8e3);
        if (!e.length) {
          this.eof = !0;
          return;
        }
        for (
          var t = (e.length + 1) >> 1,
            n = this.ensureBuffer(this.bufferLength + t),
            r = this.bufferLength,
            i = this.firstDigit,
            a = 0,
            o = e.length;
          a < o;
          a++
        ) {
          var s = e[a],
            c = void 0;
          if (s >= 48 && s <= 57) c = s & 15;
          else if ((s >= 65 && s <= 70) || (s >= 97 && s <= 102))
            c = (s & 15) + 9;
          else if (s === 62) {
            this.eof = !0;
            break;
          } else continue;
          i < 0 ? (i = c) : ((n[r++] = (i << 4) | c), (i = -1));
        }
        (i >= 0 && this.eof && ((n[r++] = i << 4), (i = -1)),
          (this.firstDigit = i),
          (this.bufferLength = r));
      }),
      t
    );
  })(li),
  pi = new Int32Array([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  mi = new Int32Array([
    3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099,
    131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259,
    327811, 327843, 327875, 327907, 258, 258, 258,
  ]),
  hi = new Int32Array([
    1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193,
    327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849,
    591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545,
  ]),
  gi = [
    new Int32Array([
      459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016,
      524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376,
      524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328,
      59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572,
      459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292,
      524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412,
      524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364,
      590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020,
      459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013,
      524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394,
      524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310,
      524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996,
      524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031,
      524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430,
      524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337,
      590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050,
      459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020,
      524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373,
      524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325,
      589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978,
      459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301,
      524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403,
      524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355,
      590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038,
      459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011,
      524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391,
      524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319,
      589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014,
      524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024,
      524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416,
      524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344,
      590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065,
      459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018,
      524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380,
      524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332,
      590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570,
      459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290,
      524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410,
      524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362,
      590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029,
      459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015,
      524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398,
      524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305,
      524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987,
      524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028,
      524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425,
      524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341,
      590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059,
      459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022,
      524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371,
      524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323,
      589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975,
      459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299,
      524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407,
      524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359,
      590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047,
      459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079,
    ]),
    9,
  ],
  _i = [
    new Int32Array([
      327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682,
      327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689,
      327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707,
      327687, 327703, 327695, 0,
    ]),
    5,
  ],
  vi = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this, n) || this;
      r.stream = t;
      var i = t.getByte(),
        a = t.getByte();
      if (i === -1 || a === -1)
        throw Error(`Invalid header in flate stream: ` + i + `, ` + a);
      if ((i & 15) != 8)
        throw Error(
          `Unknown compression method in flate stream: ` + i + `, ` + a,
        );
      if (((i << 8) + a) % 31 != 0)
        throw Error(`Bad FCHECK in flate stream: ` + i + `, ` + a);
      if (a & 32) throw Error(`FDICT bit set in flate stream: ` + i + `, ` + a);
      return ((r.codeSize = 0), (r.codeBuf = 0), r);
    }
    return (
      (t.prototype.readBlock = function () {
        var e,
          t,
          n = this.stream,
          r = this.getBits(3);
        if ((r & 1 && (this.eof = !0), (r >>= 1), r === 0)) {
          var i = void 0;
          if ((i = n.getByte()) === -1)
            throw Error(`Bad block header in flate stream`);
          var a = i;
          if (
            (i = n.getByte()) === -1 ||
            ((a |= i << 8), (i = n.getByte()) === -1)
          )
            throw Error(`Bad block header in flate stream`);
          var o = i;
          if ((i = n.getByte()) === -1)
            throw Error(`Bad block header in flate stream`);
          if (((o |= i << 8), o !== (~a & 65535) && (a !== 0 || o !== 0)))
            throw Error(`Bad uncompressed block length in flate stream`);
          ((this.codeBuf = 0), (this.codeSize = 0));
          var s = this.bufferLength;
          e = this.ensureBuffer(s + a);
          var c = s + a;
          if (((this.bufferLength = c), a === 0))
            n.peekByte() === -1 && (this.eof = !0);
          else
            for (var l = s; l < c; ++l) {
              if ((i = n.getByte()) === -1) {
                this.eof = !0;
                break;
              }
              e[l] = i;
            }
          return;
        }
        var u, d;
        if (r === 1) ((u = gi), (d = _i));
        else if (r === 2) {
          var f = this.getBits(5) + 257,
            p = this.getBits(5) + 1,
            m = this.getBits(4) + 4,
            h = new Uint8Array(pi.length),
            g = void 0;
          for (g = 0; g < m; ++g) h[pi[g]] = this.getBits(3);
          var _ = this.generateHuffmanTable(h);
          ((t = 0), (g = 0));
          for (
            var v = f + p,
              y = new Uint8Array(v),
              b = void 0,
              x = void 0,
              S = void 0;
            g < v;
          ) {
            var C = this.getCode(_);
            if (C === 16) ((b = 2), (x = 3), (S = t));
            else if (C === 17) ((b = 3), (x = 3), (S = t = 0));
            else if (C === 18) ((b = 7), (x = 11), (S = t = 0));
            else {
              y[g++] = t = C;
              continue;
            }
            for (var w = this.getBits(b) + x; w-- > 0;) y[g++] = S;
          }
          ((u = this.generateHuffmanTable(y.subarray(0, f))),
            (d = this.generateHuffmanTable(y.subarray(f, v))));
        } else throw Error(`Unknown block type in flate stream`);
        e = this.buffer;
        for (var T = e ? e.length : 0, E = this.bufferLength; ;) {
          var D = this.getCode(u);
          if (D < 256) {
            (E + 1 >= T && ((e = this.ensureBuffer(E + 1)), (T = e.length)),
              (e[E++] = D));
            continue;
          }
          if (D === 256) {
            this.bufferLength = E;
            return;
          }
          ((D -= 257), (D = mi[D]));
          var ee = D >> 16;
          (ee > 0 && (ee = this.getBits(ee)),
            (t = (D & 65535) + ee),
            (D = this.getCode(d)),
            (D = hi[D]),
            (ee = D >> 16),
            ee > 0 && (ee = this.getBits(ee)));
          var O = (D & 65535) + ee;
          E + t >= T && ((e = this.ensureBuffer(E + t)), (T = e.length));
          for (var te = 0; te < t; ++te, ++E) e[E] = e[E - O];
        }
      }),
      (t.prototype.getBits = function (e) {
        for (
          var t = this.stream, n = this.codeSize, r = this.codeBuf, i;
          n < e;
        ) {
          if ((i = t.getByte()) === -1)
            throw Error(`Bad encoding in flate stream`);
          ((r |= i << n), (n += 8));
        }
        return (
          (i = r & ((1 << e) - 1)),
          (this.codeBuf = r >> e),
          (this.codeSize = n -= e),
          i
        );
      }),
      (t.prototype.getCode = function (e) {
        for (
          var t = this.stream,
            n = e[0],
            r = e[1],
            i = this.codeSize,
            a = this.codeBuf,
            o;
          i < r && (o = t.getByte()) !== -1;
        )
          ((a |= o << i), (i += 8));
        var s = n[a & ((1 << r) - 1)];
        typeof n == `number` && console.log(`FLATE:`, s);
        var c = s >> 16,
          l = s & 65535;
        if (c < 1 || i < c) throw Error(`Bad encoding in flate stream`);
        return ((this.codeBuf = a >> c), (this.codeSize = i - c), l);
      }),
      (t.prototype.generateHuffmanTable = function (e) {
        for (var t = e.length, n = 0, r = 0; r < t; ++r) e[r] > n && (n = e[r]);
        for (
          var i = 1 << n, a = new Int32Array(i), o = 1, s = 0, c = 2;
          o <= n;
          ++o, s <<= 1, c <<= 1
        )
          for (var l = 0; l < t; ++l)
            if (e[l] === o) {
              var u = 0,
                d = s;
              for (r = 0; r < o; ++r) ((u = (u << 1) | (d & 1)), (d >>= 1));
              for (r = u; r < i; r += c) a[r] = (o << 16) | l;
              ++s;
            }
        return [a, n];
      }),
      t
    );
  })(li),
  yi = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, n) || this;
      ((i.stream = t), (i.cachedData = 0), (i.bitsCached = 0));
      for (
        var a = 4096,
          o = {
            earlyChange: r,
            codeLength: 9,
            nextCode: 258,
            dictionaryValues: new Uint8Array(a),
            dictionaryLengths: new Uint16Array(a),
            dictionaryPrevCodes: new Uint16Array(a),
            currentSequence: new Uint8Array(a),
            currentSequenceLength: 0,
          },
          s = 0;
        s < 256;
        ++s
      )
        ((o.dictionaryValues[s] = s), (o.dictionaryLengths[s] = 1));
      return ((i.lzwState = o), i);
    }
    return (
      (t.prototype.readBlock = function () {
        var e = 512,
          t = e * 2,
          n = e,
          r,
          i,
          a,
          o = this.lzwState;
        if (o) {
          var s = o.earlyChange,
            c = o.nextCode,
            l = o.dictionaryValues,
            u = o.dictionaryLengths,
            d = o.dictionaryPrevCodes,
            f = o.codeLength,
            p = o.prevCode,
            m = o.currentSequence,
            h = o.currentSequenceLength,
            g = 0,
            _ = this.bufferLength,
            v = this.ensureBuffer(this.bufferLength + t);
          for (r = 0; r < e; r++) {
            var y = this.readBits(f),
              b = h > 0;
            if (!y || y < 256) ((m[0] = y), (h = 1));
            else if (y >= 258) {
              if (y < c)
                for (h = u[y], i = h - 1, a = y; i >= 0; i--)
                  ((m[i] = l[a]), (a = d[a]));
              else m[h++] = m[0];
            } else if (y === 256) {
              ((f = 9), (c = 258), (h = 0));
              continue;
            } else {
              ((this.eof = !0), delete this.lzwState);
              break;
            }
            if (
              (b &&
                ((d[c] = p),
                (u[c] = u[p] + 1),
                (l[c] = m[0]),
                c++,
                (f =
                  (c + s) & (c + s - 1)
                    ? f
                    : Math.min(Math.log(c + s) / 0.6931471805599453 + 1, 12) |
                      0)),
              (p = y),
              (g += h),
              t < g)
            ) {
              do t += n;
              while (t < g);
              v = this.ensureBuffer(this.bufferLength + t);
            }
            for (i = 0; i < h; i++) v[_++] = m[i];
          }
          ((o.nextCode = c),
            (o.codeLength = f),
            (o.prevCode = p),
            (o.currentSequenceLength = h),
            (this.bufferLength = _));
        }
      }),
      (t.prototype.readBits = function (e) {
        for (var t = this.bitsCached, n = this.cachedData; t < e;) {
          var r = this.stream.getByte();
          if (r === -1) return ((this.eof = !0), null);
          ((n = (n << 8) | r), (t += 8));
        }
        return (
          (this.bitsCached = t -= e),
          (this.cachedData = n),
          (n >>> t) & ((1 << e) - 1)
        );
      }),
      t
    );
  })(li),
  bi = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this, n) || this;
      return ((r.stream = t), r);
    }
    return (
      (t.prototype.readBlock = function () {
        var e = this.stream.getBytes(2);
        if (!e || e.length < 2 || e[0] === 128) {
          this.eof = !0;
          return;
        }
        var t,
          n = this.bufferLength,
          r = e[0];
        if (r < 128) {
          if (((t = this.ensureBuffer(n + r + 1)), (t[n++] = e[1]), r > 0)) {
            var i = this.stream.getBytes(r);
            (t.set(i, n), (n += r));
          }
        } else {
          r = 257 - r;
          var a = e[1];
          t = this.ensureBuffer(n + r + 1);
          for (var o = 0; o < r; o++) t[n++] = a;
        }
        this.bufferLength = n;
      }),
      t
    );
  })(li),
  xi = function (e, t, n) {
    if (t === q.of(`FlateDecode`)) return new vi(e);
    if (t === q.of(`LZWDecode`)) {
      var r = 1;
      if (n instanceof mr) {
        var i = n.lookup(q.of(`EarlyChange`));
        i instanceof K && (r = i.asNumber());
      }
      return new yi(e, void 0, r);
    }
    if (t === q.of(`ASCII85Decode`)) return new di(e);
    if (t === q.of(`ASCIIHexDecode`)) return new fi(e);
    if (t === q.of(`RunLengthDecode`)) return new bi(e);
    throw new On(t.asString());
  },
  Si = function (e) {
    var t = e.dict,
      n = e.contents,
      r = new si(n),
      i = t.lookup(q.of(`Filter`)),
      a = t.lookup(q.of(`DecodeParms`));
    if (i instanceof q) r = xi(r, i, a);
    else if (i instanceof tr)
      for (var o = 0, s = i.size(); o < s; o++)
        r = xi(r, i.lookup(o, q), a && a.lookupMaybe(o, mr));
    else if (i) throw new Dn([q, tr], i);
    return r;
  },
  Ci = function (e) {
    var t = e.MediaBox();
    return {
      left: 0,
      bottom: 0,
      right: t.lookup(2, K).asNumber() - t.lookup(0, K).asNumber(),
      top: t.lookup(3, K).asNumber() - t.lookup(1, K).asNumber(),
    };
  },
  wi = function (e) {
    return [1, 0, 0, 1, -e.left, -e.bottom];
  },
  Ti = (function () {
    function e(e, t, n) {
      this.page = e;
      var r = t ?? Ci(e);
      ((this.width = r.right - r.left),
        (this.height = r.top - r.bottom),
        (this.boundingBox = r),
        (this.transformationMatrix = n ?? wi(r)));
    }
    return (
      (e.for = function (t, n, r) {
        return F(this, void 0, void 0, function () {
          return I(this, function (i) {
            return [2, new e(t, n, r)];
          });
        });
      }),
      (e.prototype.embedIntoContext = function (e, t) {
        return F(this, void 0, void 0, function () {
          var n, r, i, a, o, s, c, l, u, d;
          return I(this, function (f) {
            if (
              ((n = this.page.normalizedEntries()),
              (r = n.Contents),
              (i = n.Resources),
              !r)
            )
              throw new An();
            return (
              (a = this.decodeContents(r)),
              (o = this.boundingBox),
              (s = o.left),
              (c = o.bottom),
              (l = o.right),
              (u = o.top),
              (d = e.flateStream(a, {
                Type: `XObject`,
                Subtype: `Form`,
                FormType: 1,
                BBox: [s, c, l, u],
                Matrix: this.transformationMatrix,
                Resources: i,
              })),
              t ? (e.assign(t, d), [2, t]) : [2, e.register(d)]
            );
          });
        });
      }),
      (e.prototype.decodeContents = function (e) {
        for (
          var t = Uint8Array.of(G.Newline), n = [], r = 0, i = e.size();
          r < i;
          r++
        ) {
          var a = e.lookup(r, hr),
            o = void 0;
          if (a instanceof gr) o = Si(a).decode();
          else if (a instanceof wr) o = a.getUnencodedContents();
          else throw new jn(a);
          n.push(o, t);
        }
        return Ke.apply(void 0, n);
      }),
      e
    );
  })(),
  Ei = function (e, t) {
    if (e !== void 0) return t[e];
  },
  Di;
(function (e) {
  ((e.UseNone = `UseNone`),
    (e.UseOutlines = `UseOutlines`),
    (e.UseThumbs = `UseThumbs`),
    (e.UseOC = `UseOC`));
})((Di ||= {}));
var Oi;
(function (e) {
  ((e.L2R = `L2R`), (e.R2L = `R2L`));
})((Oi ||= {}));
var ki;
(function (e) {
  ((e.None = `None`), (e.AppDefault = `AppDefault`));
})((ki ||= {}));
var Ai;
(function (e) {
  ((e.Simplex = `Simplex`),
    (e.DuplexFlipShortEdge = `DuplexFlipShortEdge`),
    (e.DuplexFlipLongEdge = `DuplexFlipLongEdge`));
})((Ai ||= {}));
var ji = (function () {
    function e(e) {
      this.dict = e;
    }
    return (
      (e.prototype.lookupBool = function (e) {
        var t = this.dict.lookup(q.of(e));
        if (t instanceof rr) return t;
      }),
      (e.prototype.lookupName = function (e) {
        var t = this.dict.lookup(q.of(e));
        if (t instanceof q) return t;
      }),
      (e.prototype.HideToolbar = function () {
        return this.lookupBool(`HideToolbar`);
      }),
      (e.prototype.HideMenubar = function () {
        return this.lookupBool(`HideMenubar`);
      }),
      (e.prototype.HideWindowUI = function () {
        return this.lookupBool(`HideWindowUI`);
      }),
      (e.prototype.FitWindow = function () {
        return this.lookupBool(`FitWindow`);
      }),
      (e.prototype.CenterWindow = function () {
        return this.lookupBool(`CenterWindow`);
      }),
      (e.prototype.DisplayDocTitle = function () {
        return this.lookupBool(`DisplayDocTitle`);
      }),
      (e.prototype.NonFullScreenPageMode = function () {
        return this.lookupName(`NonFullScreenPageMode`);
      }),
      (e.prototype.Direction = function () {
        return this.lookupName(`Direction`);
      }),
      (e.prototype.PrintScaling = function () {
        return this.lookupName(`PrintScaling`);
      }),
      (e.prototype.Duplex = function () {
        return this.lookupName(`Duplex`);
      }),
      (e.prototype.PickTrayByPDFSize = function () {
        return this.lookupBool(`PickTrayByPDFSize`);
      }),
      (e.prototype.PrintPageRange = function () {
        var e = this.dict.lookup(q.of(`PrintPageRange`));
        if (e instanceof tr) return e;
      }),
      (e.prototype.NumCopies = function () {
        var e = this.dict.lookup(q.of(`NumCopies`));
        if (e instanceof K) return e;
      }),
      (e.prototype.getHideToolbar = function () {
        return this.HideToolbar()?.asBoolean() ?? !1;
      }),
      (e.prototype.getHideMenubar = function () {
        return this.HideMenubar()?.asBoolean() ?? !1;
      }),
      (e.prototype.getHideWindowUI = function () {
        return this.HideWindowUI()?.asBoolean() ?? !1;
      }),
      (e.prototype.getFitWindow = function () {
        return this.FitWindow()?.asBoolean() ?? !1;
      }),
      (e.prototype.getCenterWindow = function () {
        return this.CenterWindow()?.asBoolean() ?? !1;
      }),
      (e.prototype.getDisplayDocTitle = function () {
        return this.DisplayDocTitle()?.asBoolean() ?? !1;
      }),
      (e.prototype.getNonFullScreenPageMode = function () {
        return Ei(this.NonFullScreenPageMode()?.decodeText(), Di) ?? Di.UseNone;
      }),
      (e.prototype.getReadingDirection = function () {
        return Ei(this.Direction()?.decodeText(), Oi) ?? Oi.L2R;
      }),
      (e.prototype.getPrintScaling = function () {
        return Ei(this.PrintScaling()?.decodeText(), ki) ?? ki.AppDefault;
      }),
      (e.prototype.getDuplex = function () {
        return Ei(this.Duplex()?.decodeText(), Ai);
      }),
      (e.prototype.getPickTrayByPDFSize = function () {
        return this.PickTrayByPDFSize()?.asBoolean();
      }),
      (e.prototype.getPrintPageRange = function () {
        var e = this.PrintPageRange();
        if (!e) return [];
        for (var t = [], n = 0; n < e.size(); n += 2) {
          var r = e.lookup(n, K).asNumber(),
            i = e.lookup(n + 1, K).asNumber();
          t.push({ start: r, end: i });
        }
        return t;
      }),
      (e.prototype.getNumCopies = function () {
        return this.NumCopies()?.asNumber() ?? 1;
      }),
      (e.prototype.setHideToolbar = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`HideToolbar`), t);
      }),
      (e.prototype.setHideMenubar = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`HideMenubar`), t);
      }),
      (e.prototype.setHideWindowUI = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`HideWindowUI`), t);
      }),
      (e.prototype.setFitWindow = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`FitWindow`), t);
      }),
      (e.prototype.setCenterWindow = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`CenterWindow`), t);
      }),
      (e.prototype.setDisplayDocTitle = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`DisplayDocTitle`), t);
      }),
      (e.prototype.setNonFullScreenPageMode = function (e) {
        ln(e, `nonFullScreenPageMode`, Di);
        var t = q.of(e);
        this.dict.set(q.of(`NonFullScreenPageMode`), t);
      }),
      (e.prototype.setReadingDirection = function (e) {
        ln(e, `readingDirection`, Oi);
        var t = q.of(e);
        this.dict.set(q.of(`Direction`), t);
      }),
      (e.prototype.setPrintScaling = function (e) {
        ln(e, `printScaling`, ki);
        var t = q.of(e);
        this.dict.set(q.of(`PrintScaling`), t);
      }),
      (e.prototype.setDuplex = function (e) {
        ln(e, `duplex`, Ai);
        var t = q.of(e);
        this.dict.set(q.of(`Duplex`), t);
      }),
      (e.prototype.setPickTrayByPDFSize = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`PickTrayByPDFSize`), t);
      }),
      (e.prototype.setPrintPageRange = function (e) {
        Array.isArray(e) || (e = [e]);
        for (var t = [], n = 0, r = e.length; n < r; n++)
          (t.push(e[n].start), t.push(e[n].end));
        hn(t, `printPageRange`, [`number`]);
        var i = this.dict.context.obj(t);
        this.dict.set(q.of(`PrintPageRange`), i);
      }),
      (e.prototype.setNumCopies = function (e) {
        (gn(e, `numCopies`, 1, Number.MAX_VALUE), yn(e, `numCopies`));
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`NumCopies`), t);
      }),
      (e.fromDict = function (t) {
        return new e(t);
      }),
      (e.create = function (t) {
        return new e(t.obj({}));
      }),
      e
    );
  })(),
  Mi = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,
  Ni = (function () {
    function e(e, t) {
      ((this.dict = e), (this.ref = t));
    }
    return (
      (e.prototype.T = function () {
        return this.dict.lookupMaybe(q.of(`T`), qr, J);
      }),
      (e.prototype.Ff = function () {
        var e = this.getInheritableAttribute(q.of(`Ff`));
        return this.dict.context.lookupMaybe(e, K);
      }),
      (e.prototype.V = function () {
        var e = this.getInheritableAttribute(q.of(`V`));
        return this.dict.context.lookup(e);
      }),
      (e.prototype.Kids = function () {
        return this.dict.lookupMaybe(q.of(`Kids`), tr);
      }),
      (e.prototype.DA = function () {
        var e = this.dict.lookup(q.of(`DA`));
        if (e instanceof qr || e instanceof J) return e;
      }),
      (e.prototype.setKids = function (e) {
        this.dict.set(q.of(`Kids`), this.dict.context.obj(e));
      }),
      (e.prototype.getParent = function () {
        var t = this.dict.get(q.of(`Parent`));
        if (t instanceof yr)
          return new e(this.dict.lookup(q.of(`Parent`), mr), t);
      }),
      (e.prototype.setParent = function (e) {
        e ? this.dict.set(q.of(`Parent`), e) : this.dict.delete(q.of(`Parent`));
      }),
      (e.prototype.getFullyQualifiedName = function () {
        var e = this.getParent();
        return e
          ? e.getFullyQualifiedName() + `.` + this.getPartialName()
          : this.getPartialName();
      }),
      (e.prototype.getPartialName = function () {
        return this.T()?.decodeText();
      }),
      (e.prototype.setPartialName = function (e) {
        e
          ? this.dict.set(q.of(`T`), J.fromText(e))
          : this.dict.delete(q.of(`T`));
      }),
      (e.prototype.setDefaultAppearance = function (e) {
        this.dict.set(q.of(`DA`), qr.of(e));
      }),
      (e.prototype.getDefaultAppearance = function () {
        var e = this.DA();
        return e instanceof J ? e.decodeText() : e?.asString();
      }),
      (e.prototype.setFontSize = function (e) {
        var t = this.getFullyQualifiedName() ?? ``,
          n = this.getDefaultAppearance();
        if (!n) throw new Bn(t);
        var r = Ue(n, Mi);
        if (!r.match) throw new Vn(t);
        var i = n.slice(0, r.pos - r.match[0].length),
          a = r.pos <= n.length ? n.slice(r.pos) : ``,
          o = r.match[1],
          s = i + ` /` + o + ` ` + e + ` Tf ` + a;
        this.setDefaultAppearance(s);
      }),
      (e.prototype.getFlags = function () {
        return this.Ff()?.asNumber() ?? 0;
      }),
      (e.prototype.setFlags = function (e) {
        this.dict.set(q.of(`Ff`), K.of(e));
      }),
      (e.prototype.hasFlag = function (e) {
        return (this.getFlags() & e) !== 0;
      }),
      (e.prototype.setFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t | e);
      }),
      (e.prototype.clearFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t & ~e);
      }),
      (e.prototype.setFlagTo = function (e, t) {
        t ? this.setFlag(e) : this.clearFlag(e);
      }),
      (e.prototype.getInheritableAttribute = function (e) {
        var t;
        return (
          this.ascend(function (n) {
            t ||= n.dict.get(e);
          }),
          t
        );
      }),
      (e.prototype.ascend = function (e) {
        e(this);
        var t = this.getParent();
        t && t.ascend(e);
      }),
      e
    );
  })(),
  Pi = (function () {
    function e(e) {
      this.dict = e;
    }
    return (
      (e.prototype.W = function () {
        var e = this.dict.lookup(q.of(`W`));
        if (e instanceof K) return e;
      }),
      (e.prototype.getWidth = function () {
        return this.W()?.asNumber() ?? 1;
      }),
      (e.prototype.setWidth = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`W`), t);
      }),
      (e.fromDict = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Fi = (function () {
    function e(e) {
      this.dict = e;
    }
    return (
      (e.prototype.Rect = function () {
        return this.dict.lookup(q.of(`Rect`), tr);
      }),
      (e.prototype.AP = function () {
        return this.dict.lookupMaybe(q.of(`AP`), mr);
      }),
      (e.prototype.F = function () {
        var e = this.dict.lookup(q.of(`F`));
        return this.dict.context.lookupMaybe(e, K);
      }),
      (e.prototype.getRectangle = function () {
        return (
          this.Rect()?.asRectangle() ?? { x: 0, y: 0, width: 0, height: 0 }
        );
      }),
      (e.prototype.setRectangle = function (e) {
        var t = e.x,
          n = e.y,
          r = e.width,
          i = e.height,
          a = this.dict.context.obj([t, n, t + r, n + i]);
        this.dict.set(q.of(`Rect`), a);
      }),
      (e.prototype.getAppearanceState = function () {
        var e = this.dict.lookup(q.of(`AS`));
        if (e instanceof q) return e;
      }),
      (e.prototype.setAppearanceState = function (e) {
        this.dict.set(q.of(`AS`), e);
      }),
      (e.prototype.setAppearances = function (e) {
        this.dict.set(q.of(`AP`), e);
      }),
      (e.prototype.ensureAP = function () {
        var e = this.AP();
        return (
          e || ((e = this.dict.context.obj({})), this.dict.set(q.of(`AP`), e)),
          e
        );
      }),
      (e.prototype.getNormalAppearance = function () {
        var e = this.ensureAP().get(q.of(`N`));
        if (e instanceof yr || e instanceof mr) return e;
        throw Error(`Unexpected N type: ` + e?.constructor.name);
      }),
      (e.prototype.setNormalAppearance = function (e) {
        this.ensureAP().set(q.of(`N`), e);
      }),
      (e.prototype.setRolloverAppearance = function (e) {
        this.ensureAP().set(q.of(`R`), e);
      }),
      (e.prototype.setDownAppearance = function (e) {
        this.ensureAP().set(q.of(`D`), e);
      }),
      (e.prototype.removeRolloverAppearance = function () {
        this.AP()?.delete(q.of(`R`));
      }),
      (e.prototype.removeDownAppearance = function () {
        this.AP()?.delete(q.of(`D`));
      }),
      (e.prototype.getAppearances = function () {
        var e = this.AP();
        if (e)
          return {
            normal: e.lookup(q.of(`N`), mr, hr),
            rollover: e.lookupMaybe(q.of(`R`), mr, hr),
            down: e.lookupMaybe(q.of(`D`), mr, hr),
          };
      }),
      (e.prototype.getFlags = function () {
        return this.F()?.asNumber() ?? 0;
      }),
      (e.prototype.setFlags = function (e) {
        this.dict.set(q.of(`F`), K.of(e));
      }),
      (e.prototype.hasFlag = function (e) {
        return (this.getFlags() & e) !== 0;
      }),
      (e.prototype.setFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t | e);
      }),
      (e.prototype.clearFlag = function (e) {
        var t = this.getFlags();
        this.setFlags(t & ~e);
      }),
      (e.prototype.setFlagTo = function (e, t) {
        t ? this.setFlag(e) : this.clearFlag(e);
      }),
      (e.fromDict = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Ii = (function () {
    function e(e) {
      this.dict = e;
    }
    return (
      (e.prototype.R = function () {
        var e = this.dict.lookup(q.of(`R`));
        if (e instanceof K) return e;
      }),
      (e.prototype.BC = function () {
        var e = this.dict.lookup(q.of(`BC`));
        if (e instanceof tr) return e;
      }),
      (e.prototype.BG = function () {
        var e = this.dict.lookup(q.of(`BG`));
        if (e instanceof tr) return e;
      }),
      (e.prototype.CA = function () {
        var e = this.dict.lookup(q.of(`CA`));
        if (e instanceof J || e instanceof qr) return e;
      }),
      (e.prototype.RC = function () {
        var e = this.dict.lookup(q.of(`RC`));
        if (e instanceof J || e instanceof qr) return e;
      }),
      (e.prototype.AC = function () {
        var e = this.dict.lookup(q.of(`AC`));
        if (e instanceof J || e instanceof qr) return e;
      }),
      (e.prototype.getRotation = function () {
        return this.R()?.asNumber();
      }),
      (e.prototype.getBorderColor = function () {
        var e = this.BC();
        if (e) {
          for (var t = [], n = 0, r = e?.size(); n < r; n++) {
            var i = e.get(n);
            i instanceof K && t.push(i.asNumber());
          }
          return t;
        }
      }),
      (e.prototype.getBackgroundColor = function () {
        var e = this.BG();
        if (e) {
          for (var t = [], n = 0, r = e?.size(); n < r; n++) {
            var i = e.get(n);
            i instanceof K && t.push(i.asNumber());
          }
          return t;
        }
      }),
      (e.prototype.getCaptions = function () {
        var e = this.CA(),
          t = this.RC(),
          n = this.AC();
        return {
          normal: e?.decodeText(),
          rollover: t?.decodeText(),
          down: n?.decodeText(),
        };
      }),
      (e.prototype.setRotation = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`R`), t);
      }),
      (e.prototype.setBorderColor = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`BC`), t);
      }),
      (e.prototype.setBackgroundColor = function (e) {
        var t = this.dict.context.obj(e);
        this.dict.set(q.of(`BG`), t);
      }),
      (e.prototype.setCaptions = function (e) {
        var t = J.fromText(e.normal);
        if ((this.dict.set(q.of(`CA`), t), e.rollover)) {
          var n = J.fromText(e.rollover);
          this.dict.set(q.of(`RC`), n);
        } else this.dict.delete(q.of(`RC`));
        if (e.down) {
          var r = J.fromText(e.down);
          this.dict.set(q.of(`AC`), r);
        } else this.dict.delete(q.of(`AC`));
      }),
      (e.fromDict = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Li = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.MK = function () {
        var e = this.dict.lookup(q.of(`MK`));
        if (e instanceof mr) return e;
      }),
      (t.prototype.BS = function () {
        var e = this.dict.lookup(q.of(`BS`));
        if (e instanceof mr) return e;
      }),
      (t.prototype.DA = function () {
        var e = this.dict.lookup(q.of(`DA`));
        if (e instanceof qr || e instanceof J) return e;
      }),
      (t.prototype.P = function () {
        var e = this.dict.get(q.of(`P`));
        if (e instanceof yr) return e;
      }),
      (t.prototype.setP = function (e) {
        this.dict.set(q.of(`P`), e);
      }),
      (t.prototype.setDefaultAppearance = function (e) {
        this.dict.set(q.of(`DA`), qr.of(e));
      }),
      (t.prototype.getDefaultAppearance = function () {
        var e = this.DA();
        return e instanceof J ? e.decodeText() : e?.asString();
      }),
      (t.prototype.getAppearanceCharacteristics = function () {
        var e = this.MK();
        if (e) return Ii.fromDict(e);
      }),
      (t.prototype.getOrCreateAppearanceCharacteristics = function () {
        var e = this.MK();
        if (e) return Ii.fromDict(e);
        var t = Ii.fromDict(this.dict.context.obj({}));
        return (this.dict.set(q.of(`MK`), t.dict), t);
      }),
      (t.prototype.getBorderStyle = function () {
        var e = this.BS();
        if (e) return Pi.fromDict(e);
      }),
      (t.prototype.getOrCreateBorderStyle = function () {
        var e = this.BS();
        if (e) return Pi.fromDict(e);
        var t = Pi.fromDict(this.dict.context.obj({}));
        return (this.dict.set(q.of(`BS`), t.dict), t);
      }),
      (t.prototype.getOnValue = function () {
        var e = this.getAppearances()?.normal;
        if (e instanceof mr)
          for (var t = e.keys(), n = 0, r = t.length; n < r; n++) {
            var i = t[n];
            if (i !== q.of(`Off`)) return i;
          }
      }),
      (t.fromDict = function (e) {
        return new t(e);
      }),
      (t.create = function (e, n) {
        return new t(
          e.obj({
            Type: `Annot`,
            Subtype: `Widget`,
            Rect: [0, 0, 0, 0],
            Parent: n,
          }),
        );
      }),
      t
    );
  })(Fi),
  Ri = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.FT = function () {
        var e = this.getInheritableAttribute(q.of(`FT`));
        return this.dict.context.lookup(e, q);
      }),
      (t.prototype.getWidgets = function () {
        var e = this.Kids();
        if (!e) return [Li.fromDict(this.dict)];
        for (var t = Array(e.size()), n = 0, r = e.size(); n < r; n++) {
          var i = e.lookup(n, mr);
          t[n] = Li.fromDict(i);
        }
        return t;
      }),
      (t.prototype.addWidget = function (e) {
        this.normalizedEntries().Kids.push(e);
      }),
      (t.prototype.removeWidget = function (e) {
        var t = this.Kids();
        if (t) {
          if (e < 0 || e > t.size()) throw new Ln(e, 0, t.size());
          t.remove(e);
        } else {
          if (e !== 0) throw new Ln(e, 0, 0);
          this.setKids([]);
        }
      }),
      (t.prototype.normalizedEntries = function () {
        var e = this.Kids();
        return (
          e ||
            ((e = this.dict.context.obj([this.ref])),
            this.dict.set(q.of(`Kids`), e)),
          { Kids: e }
        );
      }),
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      t
    );
  })(Ni),
  zi = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.Opt = function () {
        return this.dict.lookupMaybe(q.of(`Opt`), qr, J, tr);
      }),
      (t.prototype.setOpt = function (e) {
        this.dict.set(q.of(`Opt`), this.dict.context.obj(e));
      }),
      (t.prototype.getExportValues = function () {
        var e = this.Opt();
        if (e) {
          if (e instanceof qr || e instanceof J) return [e];
          for (var t = [], n = 0, r = e.size(); n < r; n++) {
            var i = e.lookup(n);
            (i instanceof qr || i instanceof J) && t.push(i);
          }
          return t;
        }
      }),
      (t.prototype.removeExportValue = function (e) {
        var t = this.Opt();
        if (t) {
          if (t instanceof qr || t instanceof J) {
            if (e !== 0) throw new Ln(e, 0, 0);
            this.setOpt([]);
          } else {
            if (e < 0 || e > t.size()) throw new Ln(e, 0, t.size());
            t.remove(e);
          }
        }
      }),
      (t.prototype.normalizeExportValues = function () {
        for (
          var e = this.getExportValues() ?? [],
            t = [],
            n = this.getWidgets(),
            r = 0,
            i = n.length;
          r < i;
          r++
        ) {
          var a = n[r],
            o = e[r] ?? J.fromText(a.getOnValue()?.decodeText() ?? ``);
          t.push(o);
        }
        this.setOpt(t);
      }),
      (t.prototype.addOpt = function (e, t) {
        this.normalizeExportValues();
        var n = e.decodeText(),
          r;
        if (t)
          for (
            var i = this.getExportValues() ?? [], a = 0, o = i.length;
            a < o;
            a++
          )
            i[a].decodeText() === n && (r = a);
        var s = this.Opt();
        return (s.push(e), r ?? s.size() - 1);
      }),
      (t.prototype.addWidgetWithOpt = function (e, t, n) {
        var r = this.addOpt(t, n),
          i = q.of(String(r));
        return (this.addWidget(e), i);
      }),
      t
    );
  })(Ri),
  Bi = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.setValue = function (e) {
        if (e !== (this.getOnValue() ?? q.of(`Yes`)) && e !== q.of(`Off`))
          throw new Rn();
        this.dict.set(q.of(`V`), e);
        for (var t = this.getWidgets(), n = 0, r = t.length; n < r; n++) {
          var i = t[n],
            a = i.getOnValue() === e ? e : q.of(`Off`);
          i.setAppearanceState(a);
        }
      }),
      (t.prototype.getValue = function () {
        var e = this.V();
        return e instanceof q ? e : q.of(`Off`);
      }),
      (t.prototype.getOnValue = function () {
        return this.getWidgets()[0]?.getOnValue();
      }),
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      (t.create = function (e) {
        var n = e.obj({ FT: `Btn`, Kids: [] });
        return new t(n, e.register(n));
      }),
      t
    );
  })(zi),
  Vi = function (e) {
    return 1 << e;
  },
  Hi;
(function (e) {
  ((e[(e.ReadOnly = Vi(0))] = `ReadOnly`),
    (e[(e.Required = Vi(1))] = `Required`),
    (e[(e.NoExport = Vi(2))] = `NoExport`));
})((Hi ||= {}));
var Ui;
(function (e) {
  ((e[(e.NoToggleToOff = Vi(14))] = `NoToggleToOff`),
    (e[(e.Radio = Vi(15))] = `Radio`),
    (e[(e.PushButton = Vi(16))] = `PushButton`),
    (e[(e.RadiosInUnison = Vi(25))] = `RadiosInUnison`));
})((Ui ||= {}));
var Wi;
(function (e) {
  ((e[(e.Multiline = Vi(12))] = `Multiline`),
    (e[(e.Password = Vi(13))] = `Password`),
    (e[(e.FileSelect = Vi(20))] = `FileSelect`),
    (e[(e.DoNotSpellCheck = Vi(22))] = `DoNotSpellCheck`),
    (e[(e.DoNotScroll = Vi(23))] = `DoNotScroll`),
    (e[(e.Comb = Vi(24))] = `Comb`),
    (e[(e.RichText = Vi(25))] = `RichText`));
})((Wi ||= {}));
var Gi;
(function (e) {
  ((e[(e.Combo = Vi(17))] = `Combo`),
    (e[(e.Edit = Vi(18))] = `Edit`),
    (e[(e.Sort = Vi(19))] = `Sort`),
    (e[(e.MultiSelect = Vi(21))] = `MultiSelect`),
    (e[(e.DoNotSpellCheck = Vi(22))] = `DoNotSpellCheck`),
    (e[(e.CommitOnSelChange = Vi(26))] = `CommitOnSelChange`));
})((Gi ||= {}));
var Ki = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.setValues = function (e) {
        if (
          this.hasFlag(Gi.Combo) &&
          !this.hasFlag(Gi.Edit) &&
          !this.valuesAreValid(e)
        )
          throw new Rn();
        if (
          (e.length === 0 && this.dict.delete(q.of(`V`)),
          e.length === 1 && this.dict.set(q.of(`V`), e[0]),
          e.length > 1)
        ) {
          if (!this.hasFlag(Gi.MultiSelect)) throw new zn();
          this.dict.set(q.of(`V`), this.dict.context.obj(e));
        }
        this.updateSelectedIndices(e);
      }),
      (t.prototype.valuesAreValid = function (e) {
        for (
          var t = this.getOptions(),
            n = function (n, r) {
              var i = e[n].decodeText();
              if (
                !t.find(function (e) {
                  return i === (e.display || e.value).decodeText();
                })
              )
                return { value: !1 };
            },
            r = 0,
            i = e.length;
          r < i;
          r++
        ) {
          var a = n(r, i);
          if (typeof a == `object`) return a.value;
        }
        return !0;
      }),
      (t.prototype.updateSelectedIndices = function (e) {
        if (e.length > 1) {
          for (
            var t = Array(e.length),
              n = this.getOptions(),
              r = function (r, i) {
                var a = e[r].decodeText();
                t[r] = n.findIndex(function (e) {
                  return a === (e.display || e.value).decodeText();
                });
              },
              i = 0,
              a = e.length;
            i < a;
            i++
          )
            r(i, a);
          this.dict.set(q.of(`I`), this.dict.context.obj(t.sort()));
        } else this.dict.delete(q.of(`I`));
      }),
      (t.prototype.getValues = function () {
        var e = this.V();
        if (e instanceof qr || e instanceof J) return [e];
        if (e instanceof tr) {
          for (var t = [], n = 0, r = e.size(); n < r; n++) {
            var i = e.lookup(n);
            (i instanceof qr || i instanceof J) && t.push(i);
          }
          return t;
        }
        return [];
      }),
      (t.prototype.Opt = function () {
        return this.dict.lookupMaybe(q.of(`Opt`), qr, J, tr);
      }),
      (t.prototype.setOptions = function (e) {
        for (var t = Array(e.length), n = 0, r = e.length; n < r; n++) {
          var i = e[n],
            a = i.value,
            o = i.display;
          t[n] = this.dict.context.obj([a, o || a]);
        }
        this.dict.set(q.of(`Opt`), this.dict.context.obj(t));
      }),
      (t.prototype.getOptions = function () {
        var e = this.Opt();
        if (e instanceof qr || e instanceof J)
          return [{ value: e, display: e }];
        if (e instanceof tr) {
          for (var t = [], n = 0, r = e.size(); n < r; n++) {
            var i = e.lookup(n);
            if (
              ((i instanceof qr || i instanceof J) &&
                t.push({ value: i, display: i }),
              i instanceof tr && i.size() > 0)
            ) {
              var a = i.lookup(0, qr, J),
                o = i.lookupMaybe(1, qr, J);
              t.push({ value: a, display: o || a });
            }
          }
          return t;
        }
        return [];
      }),
      t
    );
  })(Ri),
  qi = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      (t.create = function (e) {
        var n = e.obj({ FT: `Ch`, Ff: Gi.Combo, Kids: [] });
        return new t(n, e.register(n));
      }),
      t
    );
  })(Ki),
  Ji = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.addField = function (e) {
        this.normalizedEntries().Kids?.push(e);
      }),
      (t.prototype.normalizedEntries = function () {
        var e = this.Kids();
        return (
          e ||
            ((e = this.dict.context.obj([])), this.dict.set(q.of(`Kids`), e)),
          { Kids: e }
        );
      }),
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      (t.create = function (e) {
        var n = e.obj({});
        return new t(n, e.register(n));
      }),
      t
    );
  })(Ni),
  Yi = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      t
    );
  })(Ri),
  Xi = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.MaxLen = function () {
        var e = this.dict.lookup(q.of(`MaxLen`));
        if (e instanceof K) return e;
      }),
      (t.prototype.Q = function () {
        var e = this.dict.lookup(q.of(`Q`));
        if (e instanceof K) return e;
      }),
      (t.prototype.setMaxLength = function (e) {
        this.dict.set(q.of(`MaxLen`), K.of(e));
      }),
      (t.prototype.removeMaxLength = function () {
        this.dict.delete(q.of(`MaxLen`));
      }),
      (t.prototype.getMaxLength = function () {
        return this.MaxLen()?.asNumber();
      }),
      (t.prototype.setQuadding = function (e) {
        this.dict.set(q.of(`Q`), K.of(e));
      }),
      (t.prototype.getQuadding = function () {
        return this.Q()?.asNumber();
      }),
      (t.prototype.setValue = function (e) {
        this.dict.set(q.of(`V`), e);
      }),
      (t.prototype.removeValue = function () {
        this.dict.delete(q.of(`V`));
      }),
      (t.prototype.getValue = function () {
        var e = this.V();
        if (e instanceof qr || e instanceof J) return e;
      }),
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      (t.create = function (e) {
        var n = e.obj({ FT: `Tx`, Kids: [] });
        return new t(n, e.register(n));
      }),
      t
    );
  })(Ri),
  Zi = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      (t.create = function (e) {
        var n = e.obj({ FT: `Btn`, Ff: Ui.PushButton, Kids: [] });
        return new t(n, e.register(n));
      }),
      t
    );
  })(zi),
  Qi = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.setValue = function (e) {
        if (!this.getOnValues().includes(e) && e !== q.of(`Off`))
          throw new Rn();
        this.dict.set(q.of(`V`), e);
        for (var t = this.getWidgets(), n = 0, r = t.length; n < r; n++) {
          var i = t[n],
            a = i.getOnValue() === e ? e : q.of(`Off`);
          i.setAppearanceState(a);
        }
      }),
      (t.prototype.getValue = function () {
        var e = this.V();
        return e instanceof q ? e : q.of(`Off`);
      }),
      (t.prototype.getOnValues = function () {
        for (
          var e = this.getWidgets(), t = [], n = 0, r = e.length;
          n < r;
          n++
        ) {
          var i = e[n].getOnValue();
          i && t.push(i);
        }
        return t;
      }),
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      (t.create = function (e) {
        var n = e.obj({ FT: `Btn`, Ff: Ui.Radio, Kids: [] });
        return new t(n, e.register(n));
      }),
      t
    );
  })(zi),
  $i = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.fromDict = function (e, n) {
        return new t(e, n);
      }),
      (t.create = function (e) {
        var n = e.obj({ FT: `Ch`, Kids: [] });
        return new t(n, e.register(n));
      }),
      t
    );
  })(Ki),
  ea = function (e) {
    if (!e) return [];
    for (var t = [], n = 0, r = e.size(); n < r; n++) {
      var i = e.get(n),
        a = e.lookup(n);
      i instanceof yr && a instanceof mr && t.push([ta(a, i), i]);
    }
    return t;
  },
  ta = function (e, t) {
    return na(e) ? Ji.fromDict(e, t) : ra(e, t);
  },
  na = function (e) {
    var t = e.lookup(q.of(`Kids`));
    if (t instanceof tr)
      for (var n = 0, r = t.size(); n < r; n++) {
        var i = t.lookup(n);
        if (i instanceof mr && i.has(q.of(`T`))) return !0;
      }
    return !1;
  },
  ra = function (e, t) {
    var n = sa(e, q.of(`FT`)),
      r = e.context.lookup(n, q);
    return r === q.of(`Btn`)
      ? ia(e, t)
      : r === q.of(`Ch`)
        ? aa(e, t)
        : r === q.of(`Tx`)
          ? Xi.fromDict(e, t)
          : r === q.of(`Sig`)
            ? Yi.fromDict(e, t)
            : Ri.fromDict(e, t);
  },
  ia = function (e, t) {
    var n = sa(e, q.of(`Ff`)),
      r = e.context.lookupMaybe(n, K)?.asNumber() ?? 0;
    return oa(r, Ui.PushButton)
      ? Zi.fromDict(e, t)
      : oa(r, Ui.Radio)
        ? Qi.fromDict(e, t)
        : Bi.fromDict(e, t);
  },
  aa = function (e, t) {
    var n = sa(e, q.of(`Ff`));
    return oa(e.context.lookupMaybe(n, K)?.asNumber() ?? 0, Gi.Combo)
      ? qi.fromDict(e, t)
      : $i.fromDict(e, t);
  },
  oa = function (e, t) {
    return (e & t) !== 0;
  },
  sa = function (e, t) {
    var n;
    return (
      ca(e, function (e) {
        n ||= e.get(t);
      }),
      n
    );
  },
  ca = function (e, t) {
    t(e);
    var n = e.lookupMaybe(q.of(`Parent`), mr);
    n && ca(n, t);
  },
  la = (function () {
    function e(e) {
      this.dict = e;
    }
    return (
      (e.prototype.Fields = function () {
        var e = this.dict.lookup(q.of(`Fields`));
        if (e instanceof tr) return e;
      }),
      (e.prototype.getFields = function () {
        for (
          var e = this.normalizedEntries().Fields,
            t = Array(e.size()),
            n = 0,
            r = e.size();
          n < r;
          n++
        ) {
          var i = e.get(n),
            a = e.lookup(n, mr);
          t[n] = [ta(a, i), i];
        }
        return t;
      }),
      (e.prototype.getAllFields = function () {
        var e = [],
          t = function (n) {
            if (n)
              for (var r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                e.push(a);
                var o = a[0];
                o instanceof Ji && t(ea(o.Kids()));
              }
          };
        return (t(this.getFields()), e);
      }),
      (e.prototype.addField = function (e) {
        this.normalizedEntries().Fields?.push(e);
      }),
      (e.prototype.removeField = function (e) {
        var t = e.getParent(),
          n = t === void 0 ? this.normalizedEntries().Fields : t.Kids(),
          r = n?.indexOf(e.ref);
        if (n === void 0 || r === void 0)
          throw Error(
            `Tried to remove inexistent field ` + e.getFullyQualifiedName(),
          );
        (n.remove(r), t !== void 0 && n.size() === 0 && this.removeField(t));
      }),
      (e.prototype.normalizedEntries = function () {
        var e = this.Fields();
        return (
          e ||
            ((e = this.dict.context.obj([])), this.dict.set(q.of(`Fields`), e)),
          { Fields: e }
        );
      }),
      (e.fromDict = function (t) {
        return new e(t);
      }),
      (e.create = function (t) {
        return new e(t.obj({ Fields: [] }));
      }),
      e
    );
  })(),
  ua = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.Pages = function () {
        return this.lookup(q.of(`Pages`), mr);
      }),
      (t.prototype.AcroForm = function () {
        return this.lookupMaybe(q.of(`AcroForm`), mr);
      }),
      (t.prototype.getAcroForm = function () {
        var e = this.AcroForm();
        if (e) return la.fromDict(e);
      }),
      (t.prototype.getOrCreateAcroForm = function () {
        var e = this.getAcroForm();
        if (!e) {
          e = la.create(this.context);
          var t = this.context.register(e.dict);
          this.set(q.of(`AcroForm`), t);
        }
        return e;
      }),
      (t.prototype.ViewerPreferences = function () {
        return this.lookupMaybe(q.of(`ViewerPreferences`), mr);
      }),
      (t.prototype.getViewerPreferences = function () {
        var e = this.ViewerPreferences();
        if (e) return ji.fromDict(e);
      }),
      (t.prototype.getOrCreateViewerPreferences = function () {
        var e = this.getViewerPreferences();
        if (!e) {
          e = ji.create(this.context);
          var t = this.context.register(e.dict);
          this.set(q.of(`ViewerPreferences`), t);
        }
        return e;
      }),
      (t.prototype.insertLeafNode = function (e, t) {
        var n = this.get(q.of(`Pages`));
        return this.Pages().insertLeafNode(e, t) || n;
      }),
      (t.prototype.removeLeafNode = function (e) {
        this.Pages().removeLeafNode(e);
      }),
      (t.withContextAndPages = function (e, n) {
        var r = new Map();
        return (
          r.set(q.of(`Type`), q.of(`Catalog`)),
          r.set(q.of(`Pages`), n),
          new t(r, e)
        );
      }),
      (t.fromMapWithContext = function (e, n) {
        return new t(e, n);
      }),
      t
    );
  })(mr),
  da = (function (e) {
    N(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.Parent = function () {
        return this.lookup(q.of(`Parent`));
      }),
      (t.prototype.Kids = function () {
        return this.lookup(q.of(`Kids`), tr);
      }),
      (t.prototype.Count = function () {
        return this.lookup(q.of(`Count`), K);
      }),
      (t.prototype.pushTreeNode = function (e) {
        this.Kids().push(e);
      }),
      (t.prototype.pushLeafNode = function (e) {
        var t = this.Kids();
        this.insertLeafKid(t.size(), e);
      }),
      (t.prototype.insertLeafNode = function (e, n) {
        var r = this.Kids(),
          i = this.Count().asNumber();
        if (n > i) throw new Fn(n, i);
        for (var a = n, o = 0, s = r.size(); o < s; o++) {
          if (a === 0) {
            this.insertLeafKid(o, e);
            return;
          }
          var c = r.get(o),
            l = this.context.lookup(c);
          if (l instanceof t) {
            if (l.Count().asNumber() > a) return l.insertLeafNode(e, a) || c;
            a -= l.Count().asNumber();
          }
          l instanceof Or && --a;
        }
        if (a === 0) {
          this.insertLeafKid(r.size(), e);
          return;
        }
        throw new In(n, `insertLeafNode`);
      }),
      (t.prototype.removeLeafNode = function (e, n) {
        n === void 0 && (n = !0);
        var r = this.Kids(),
          i = this.Count().asNumber();
        if (e >= i) throw new Fn(e, i);
        for (var a = e, o = 0, s = r.size(); o < s; o++) {
          var c = r.get(o),
            l = this.context.lookup(c);
          if (l instanceof t) {
            if (l.Count().asNumber() > a) {
              (l.removeLeafNode(a, n),
                n && l.Kids().size() === 0 && r.remove(o));
              return;
            }
            a -= l.Count().asNumber();
          }
          if (l instanceof Or) {
            if (a === 0) {
              this.removeKid(o);
              return;
            }
            --a;
          }
        }
        throw new In(e, `removeLeafNode`);
      }),
      (t.prototype.ascend = function (e) {
        e(this);
        var t = this.Parent();
        t && t.ascend(e);
      }),
      (t.prototype.traverse = function (e) {
        for (var n = this.Kids(), r = 0, i = n.size(); r < i; r++) {
          var a = n.get(r),
            o = this.context.lookup(a);
          (o instanceof t && o.traverse(e), e(o, a));
        }
      }),
      (t.prototype.insertLeafKid = function (e, t) {
        var n = this.Kids();
        (this.ascend(function (e) {
          var t = e.Count().asNumber() + 1;
          e.set(q.of(`Count`), K.of(t));
        }),
          n.insert(e, t));
      }),
      (t.prototype.removeKid = function (e) {
        var t = this.Kids();
        (t.lookup(e) instanceof Or &&
          this.ascend(function (e) {
            var t = e.Count().asNumber() - 1;
            e.set(q.of(`Count`), K.of(t));
          }),
          t.remove(e));
      }),
      (t.withContext = function (e, n) {
        var r = new Map();
        return (
          r.set(q.of(`Type`), q.of(`Pages`)),
          r.set(q.of(`Kids`), e.obj([])),
          r.set(q.of(`Count`), e.obj(0)),
          n && r.set(q.of(`Parent`), n),
          new t(r, e)
        );
      }),
      (t.fromMapWithContext = function (e, n) {
        return new t(e, n);
      }),
      t
    );
  })(mr),
  fa = new Uint8Array(256);
((fa[G.Zero] = 1),
  (fa[G.One] = 1),
  (fa[G.Two] = 1),
  (fa[G.Three] = 1),
  (fa[G.Four] = 1),
  (fa[G.Five] = 1),
  (fa[G.Six] = 1),
  (fa[G.Seven] = 1),
  (fa[G.Eight] = 1),
  (fa[G.Nine] = 1));
var pa = new Uint8Array(256);
((pa[G.Period] = 1), (pa[G.Plus] = 1), (pa[G.Minus] = 1));
for (var ma = new Uint8Array(256), ha = 0, ga = 256; ha < ga; ha++)
  ma[ha] = fa[ha] || pa[ha] ? 1 : 0;
var _a = G.Newline,
  va = G.CarriageReturn,
  ya = (function () {
    function e(e, t) {
      (t === void 0 && (t = !1), (this.bytes = e), (this.capNumbers = t));
    }
    return (
      (e.prototype.parseRawInt = function () {
        for (var e = ``; !this.bytes.done() && fa[this.bytes.peek()];)
          e += De(this.bytes.next());
        var t = Number(e);
        if (!e || !isFinite(t)) throw new Hn(this.bytes.position(), e);
        return t;
      }),
      (e.prototype.parseRawNumber = function () {
        for (var e = ``; !this.bytes.done();) {
          var t = this.bytes.peek();
          if (!ma[t] || ((e += De(this.bytes.next())), t === G.Period)) break;
        }
        for (; !this.bytes.done();) {
          var t = this.bytes.peek();
          if (!fa[t]) break;
          e += De(this.bytes.next());
        }
        var n = Number(e);
        if (!e || !isFinite(n)) throw new Hn(this.bytes.position(), e);
        if (n > 2 ** 53 - 1) {
          if (this.capNumbers) {
            var r =
              `Parsed number that is too large for some PDF readers: ` +
              e +
              `, using Number.MAX_SAFE_INTEGER instead.`;
            return (console.warn(r), 2 ** 53 - 1);
          }
          var r =
            `Parsed number that is too large for some PDF readers: ` +
            e +
            `, not capping.`;
          console.warn(r);
        }
        return n;
      }),
      (e.prototype.skipWhitespace = function () {
        for (; !this.bytes.done() && ar[this.bytes.peek()];) this.bytes.next();
      }),
      (e.prototype.skipLine = function () {
        for (; !this.bytes.done();) {
          var e = this.bytes.peek();
          if (e === _a || e === va) return;
          this.bytes.next();
        }
      }),
      (e.prototype.skipComment = function () {
        if (this.bytes.peek() !== G.Percent) return !1;
        for (; !this.bytes.done();) {
          var e = this.bytes.peek();
          if (e === _a || e === va) return !0;
          this.bytes.next();
        }
        return !0;
      }),
      (e.prototype.skipWhitespaceAndComments = function () {
        for (this.skipWhitespace(); this.skipComment();) this.skipWhitespace();
      }),
      (e.prototype.matchKeyword = function (e) {
        for (var t = this.bytes.offset(), n = 0, r = e.length; n < r; n++)
          if (this.bytes.done() || this.bytes.next() !== e[n])
            return (this.bytes.moveTo(t), !1);
        return !0;
      }),
      e
    );
  })(),
  ba = (function () {
    function e(e) {
      ((this.idx = 0),
        (this.line = 0),
        (this.column = 0),
        (this.bytes = e),
        (this.length = this.bytes.length));
    }
    return (
      (e.prototype.moveTo = function (e) {
        this.idx = e;
      }),
      (e.prototype.next = function () {
        var e = this.bytes[this.idx++];
        return (
          e === G.Newline
            ? ((this.line += 1), (this.column = 0))
            : (this.column += 1),
          e
        );
      }),
      (e.prototype.assertNext = function (e) {
        if (this.peek() !== e) throw new Wn(this.position(), e, this.peek());
        return this.next();
      }),
      (e.prototype.peek = function () {
        return this.bytes[this.idx];
      }),
      (e.prototype.peekAhead = function (e) {
        return this.bytes[this.idx + e];
      }),
      (e.prototype.peekAt = function (e) {
        return this.bytes[e];
      }),
      (e.prototype.done = function () {
        return this.idx >= this.length;
      }),
      (e.prototype.offset = function () {
        return this.idx;
      }),
      (e.prototype.slice = function (e, t) {
        return this.bytes.slice(e, t);
      }),
      (e.prototype.position = function () {
        return { line: this.line, column: this.column, offset: this.idx };
      }),
      (e.of = function (t) {
        return new e(t);
      }),
      (e.fromPDFRawStream = function (t) {
        return e.of(Si(t).decode());
      }),
      e
    );
  })(),
  xa = G.Space,
  Sa = G.CarriageReturn,
  Ca = G.Newline,
  wa = [G.s, G.t, G.r, G.e, G.a, G.m],
  Ta = [G.e, G.n, G.d, G.s, G.t, G.r, G.e, G.a, G.m],
  Ea = {
    header: [G.Percent, G.P, G.D, G.F, G.Dash],
    eof: [G.Percent, G.Percent, G.E, G.O, G.F],
    obj: [G.o, G.b, G.j],
    endobj: [G.e, G.n, G.d, G.o, G.b, G.j],
    xref: [G.x, G.r, G.e, G.f],
    trailer: [G.t, G.r, G.a, G.i, G.l, G.e, G.r],
    startxref: [G.s, G.t, G.a, G.r, G.t, G.x, G.r, G.e, G.f],
    true: [G.t, G.r, G.u, G.e],
    false: [G.f, G.a, G.l, G.s, G.e],
    null: [G.n, G.u, G.l, G.l],
    stream: wa,
    streamEOF1: L(wa, [xa, Sa, Ca]),
    streamEOF2: L(wa, [Sa, Ca]),
    streamEOF3: L(wa, [Sa]),
    streamEOF4: L(wa, [Ca]),
    endstream: Ta,
    EOF1endstream: L([Sa, Ca], Ta),
    EOF2endstream: L([Sa], Ta),
    EOF3endstream: L([Ca], Ta),
  },
  Da = (function (e) {
    N(t, e);
    function t(t, n, r) {
      r === void 0 && (r = !1);
      var i = e.call(this, t, r) || this;
      return ((i.context = n), i);
    }
    return (
      (t.prototype.parseObject = function () {
        if ((this.skipWhitespaceAndComments(), this.matchKeyword(Ea.true)))
          return rr.True;
        if (this.matchKeyword(Ea.false)) return rr.False;
        if (this.matchKeyword(Ea.null)) return pr;
        var e = this.bytes.peek();
        if (e === G.LessThan && this.bytes.peekAhead(1) === G.LessThan)
          return this.parseDictOrStream();
        if (e === G.LessThan) return this.parseHexString();
        if (e === G.LeftParen) return this.parseString();
        if (e === G.ForwardSlash) return this.parseName();
        if (e === G.LeftSquareBracket) return this.parseArray();
        if (ma[e]) return this.parseNumberOrRef();
        throw new Gn(this.bytes.position(), e);
      }),
      (t.prototype.parseNumberOrRef = function () {
        var e = this.parseRawNumber();
        this.skipWhitespaceAndComments();
        var t = this.bytes.offset();
        if (fa[this.bytes.peek()]) {
          var n = this.parseRawNumber();
          if ((this.skipWhitespaceAndComments(), this.bytes.peek() === G.R))
            return (this.bytes.assertNext(G.R), yr.of(e, n));
        }
        return (this.bytes.moveTo(t), K.of(e));
      }),
      (t.prototype.parseHexString = function () {
        var e = ``;
        for (
          this.bytes.assertNext(G.LessThan);
          !this.bytes.done() && this.bytes.peek() !== G.GreaterThan;
        )
          e += De(this.bytes.next());
        return (this.bytes.assertNext(G.GreaterThan), J.of(e));
      }),
      (t.prototype.parseString = function () {
        for (var e = 0, t = !1, n = ``; !this.bytes.done();) {
          var r = this.bytes.next();
          if (
            ((n += De(r)),
            t || (r === G.LeftParen && (e += 1), r === G.RightParen && --e),
            r === G.BackSlash ? (t = !t) : (t &&= !1),
            e === 0)
          )
            return qr.of(n.substring(1, n.length - 1));
        }
        throw new Jn(this.bytes.position());
      }),
      (t.prototype.parseName = function () {
        this.bytes.assertNext(G.ForwardSlash);
        for (var e = ``; !this.bytes.done();) {
          var t = this.bytes.peek();
          if (ar[t] || ir[t]) break;
          ((e += De(t)), this.bytes.next());
        }
        return q.of(e);
      }),
      (t.prototype.parseArray = function () {
        (this.bytes.assertNext(G.LeftSquareBracket),
          this.skipWhitespaceAndComments());
        for (
          var e = tr.withContext(this.context);
          this.bytes.peek() !== G.RightSquareBracket;
        ) {
          var t = this.parseObject();
          (e.push(t), this.skipWhitespaceAndComments());
        }
        return (this.bytes.assertNext(G.RightSquareBracket), e);
      }),
      (t.prototype.parseDict = function () {
        (this.bytes.assertNext(G.LessThan),
          this.bytes.assertNext(G.LessThan),
          this.skipWhitespaceAndComments());
        for (
          var e = new Map();
          !this.bytes.done() &&
          this.bytes.peek() !== G.GreaterThan &&
          this.bytes.peekAhead(1) !== G.GreaterThan;
        ) {
          var t = this.parseName(),
            n = this.parseObject();
          (e.set(t, n), this.skipWhitespaceAndComments());
        }
        (this.skipWhitespaceAndComments(),
          this.bytes.assertNext(G.GreaterThan),
          this.bytes.assertNext(G.GreaterThan));
        var r = e.get(q.of(`Type`));
        return r === q.of(`Catalog`)
          ? ua.fromMapWithContext(e, this.context)
          : r === q.of(`Pages`)
            ? da.fromMapWithContext(e, this.context)
            : r === q.of(`Page`)
              ? Or.fromMapWithContext(e, this.context)
              : mr.fromMapWithContext(e, this.context);
      }),
      (t.prototype.parseDictOrStream = function () {
        var e = this.bytes.position(),
          t = this.parseDict();
        if (
          (this.skipWhitespaceAndComments(),
          !this.matchKeyword(Ea.streamEOF1) &&
            !this.matchKeyword(Ea.streamEOF2) &&
            !this.matchKeyword(Ea.streamEOF3) &&
            !this.matchKeyword(Ea.streamEOF4) &&
            !this.matchKeyword(Ea.stream))
        )
          return t;
        var n = this.bytes.offset(),
          r,
          i = t.get(q.of(`Length`));
        i instanceof K
          ? ((r = n + i.asNumber()),
            this.bytes.moveTo(r),
            this.skipWhitespaceAndComments(),
            this.matchKeyword(Ea.endstream) ||
              (this.bytes.moveTo(n), (r = this.findEndOfStreamFallback(e))))
          : (r = this.findEndOfStreamFallback(e));
        var a = this.bytes.slice(n, r);
        return gr.of(t, a);
      }),
      (t.prototype.findEndOfStreamFallback = function (e) {
        for (
          var t = 1, n = this.bytes.offset();
          !this.bytes.done() &&
          ((n = this.bytes.offset()),
          this.matchKeyword(Ea.stream)
            ? (t += 1)
            : this.matchKeyword(Ea.EOF1endstream) ||
                this.matchKeyword(Ea.EOF2endstream) ||
                this.matchKeyword(Ea.EOF3endstream) ||
                this.matchKeyword(Ea.endstream)
              ? --t
              : this.bytes.next(),
          t !== 0);
        );
        if (t !== 0) throw new qn(e);
        return n;
      }),
      (t.forBytes = function (e, n, r) {
        return new t(ba.of(e), n, r);
      }),
      (t.forByteStream = function (e, n, r) {
        return (r === void 0 && (r = !1), new t(e, n, r));
      }),
      t
    );
  })(ya),
  Oa = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = e.call(this, ba.fromPDFRawStream(t), t.dict.context) || this,
        i = t.dict;
      return (
        (r.alreadyParsed = !1),
        (r.shouldWaitForTick =
          n ||
          function () {
            return !1;
          }),
        (r.firstOffset = i.lookup(q.of(`First`), K).asNumber()),
        (r.objectCount = i.lookup(q.of(`N`), K).asNumber()),
        r
      );
    }
    return (
      (t.prototype.parseIntoContext = function () {
        return F(this, void 0, void 0, function () {
          var e, t, n, r, i, a, o, s;
          return I(this, function (c) {
            switch (c.label) {
              case 0:
                if (this.alreadyParsed)
                  throw new kn(`PDFObjectStreamParser`, `parseIntoContext`);
                ((this.alreadyParsed = !0),
                  (e = this.parseOffsetsAndObjectNumbers()),
                  (t = 0),
                  (n = e.length),
                  (c.label = 1));
              case 1:
                return t < n
                  ? ((r = e[t]),
                    (i = r.objectNumber),
                    (a = r.offset),
                    this.bytes.moveTo(this.firstOffset + a),
                    (o = this.parseObject()),
                    (s = yr.of(i, 0)),
                    this.context.assign(s, o),
                    this.shouldWaitForTick() ? [4, rt()] : [3, 3])
                  : [3, 4];
              case 2:
                (c.sent(), (c.label = 3));
              case 3:
                return (t++, [3, 1]);
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.parseOffsetsAndObjectNumbers = function () {
        for (var e = [], t = 0, n = this.objectCount; t < n; t++) {
          this.skipWhitespaceAndComments();
          var r = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var i = this.parseRawInt();
          e.push({ objectNumber: r, offset: i });
        }
        return e;
      }),
      (t.forStream = function (e, n) {
        return new t(e, n);
      }),
      t
    );
  })(Da),
  ka = (function () {
    function e(e) {
      ((this.alreadyParsed = !1),
        (this.dict = e.dict),
        (this.bytes = ba.fromPDFRawStream(e)),
        (this.context = this.dict.context));
      var t = this.dict.lookup(q.of(`Size`), K),
        n = this.dict.lookup(q.of(`Index`));
      if (n instanceof tr) {
        this.subsections = [];
        for (var r = 0, i = n.size(); r < i; r += 2) {
          var a = n.lookup(r + 0, K).asNumber(),
            o = n.lookup(r + 1, K).asNumber();
          this.subsections.push({ firstObjectNumber: a, length: o });
        }
      } else
        this.subsections = [{ firstObjectNumber: 0, length: t.asNumber() }];
      var s = this.dict.lookup(q.of(`W`), tr);
      this.byteWidths = [-1, -1, -1];
      for (var r = 0, i = s.size(); r < i; r++)
        this.byteWidths[r] = s.lookup(r, K).asNumber();
    }
    return (
      (e.prototype.parseIntoContext = function () {
        if (this.alreadyParsed)
          throw new kn(`PDFXRefStreamParser`, `parseIntoContext`);
        return (
          (this.alreadyParsed = !0),
          (this.context.trailerInfo = {
            Root: this.dict.get(q.of(`Root`)),
            Encrypt: this.dict.get(q.of(`Encrypt`)),
            Info: this.dict.get(q.of(`Info`)),
            ID: this.dict.get(q.of(`ID`)),
          }),
          this.parseEntries()
        );
      }),
      (e.prototype.parseEntries = function () {
        for (
          var e = [],
            t = this.byteWidths,
            n = t[0],
            r = t[1],
            i = t[2],
            a = 0,
            o = this.subsections.length;
          a < o;
          a++
        )
          for (
            var s = this.subsections[a],
              c = s.firstObjectNumber,
              l = s.length,
              u = 0;
            u < l;
            u++
          ) {
            for (var d = 0, f = 0, p = n; f < p; f++)
              d = (d << 8) | this.bytes.next();
            for (var m = 0, f = 0, p = r; f < p; f++)
              m = (m << 8) | this.bytes.next();
            for (var h = 0, f = 0, p = i; f < p; f++)
              h = (h << 8) | this.bytes.next();
            n === 0 && (d = 1);
            var g = c + u,
              _ = {
                ref: yr.of(g, h),
                offset: m,
                deleted: d === 0,
                inObjectStream: d === 2,
              };
            e.push(_);
          }
        return e;
      }),
      (e.forStream = function (t) {
        return new e(t);
      }),
      e
    );
  })(),
  Aa = (function (e) {
    N(t, e);
    function t(t, n, r, i) {
      (n === void 0 && (n = 1 / 0),
        r === void 0 && (r = !1),
        i === void 0 && (i = !1));
      var a = e.call(this, ba.of(t), Dr.create(), i) || this;
      return (
        (a.alreadyParsed = !1),
        (a.parsedObjects = 0),
        (a.shouldWaitForTick = function () {
          return (
            (a.parsedObjects += 1),
            a.parsedObjects % a.objectsPerTick === 0
          );
        }),
        (a.objectsPerTick = n),
        (a.throwOnInvalidObject = r),
        a
      );
    }
    return (
      (t.prototype.parseDocument = function () {
        return F(this, void 0, void 0, function () {
          var e, t;
          return I(this, function (n) {
            switch (n.label) {
              case 0:
                if (this.alreadyParsed)
                  throw new kn(`PDFParser`, `parseDocument`);
                ((this.alreadyParsed = !0),
                  (this.context.header = this.parseHeader()),
                  (n.label = 1));
              case 1:
                return this.bytes.done()
                  ? [3, 3]
                  : [4, this.parseDocumentSection()];
              case 2:
                if ((n.sent(), (t = this.bytes.offset()), t === e))
                  throw new Yn(this.bytes.position());
                return ((e = t), [3, 1]);
              case 3:
                return (
                  this.maybeRecoverRoot(),
                  this.context.lookup(yr.of(0)) &&
                    (console.warn(`Removing parsed object: 0 0 R`),
                    this.context.delete(yr.of(0))),
                  [2, this.context]
                );
            }
          });
        });
      }),
      (t.prototype.maybeRecoverRoot = function () {
        var e = function (e) {
          return e instanceof mr && e.lookup(q.of(`Type`)) === q.of(`Catalog`);
        };
        if (!e(this.context.lookup(this.context.trailerInfo.Root)))
          for (
            var t = this.context.enumerateIndirectObjects(),
              n = 0,
              r = t.length;
            n < r;
            n++
          ) {
            var i = t[n],
              a = i[0],
              o = i[1];
            e(o) && (this.context.trailerInfo.Root = a);
          }
      }),
      (t.prototype.parseHeader = function () {
        for (; !this.bytes.done();) {
          if (this.matchKeyword(Ea.header)) {
            var e = this.parseRawInt();
            this.bytes.assertNext(G.Period);
            var t = this.parseRawInt(),
              n = $n.forVersion(e, t);
            return (this.skipBinaryHeaderComment(), n);
          }
          this.bytes.next();
        }
        throw new Xn(this.bytes.position());
      }),
      (t.prototype.parseIndirectObjectHeader = function () {
        this.skipWhitespaceAndComments();
        var e = this.parseRawInt();
        this.skipWhitespaceAndComments();
        var t = this.parseRawInt();
        if ((this.skipWhitespaceAndComments(), !this.matchKeyword(Ea.obj)))
          throw new Zn(this.bytes.position(), Ea.obj);
        return yr.of(e, t);
      }),
      (t.prototype.matchIndirectObjectHeader = function () {
        var e = this.bytes.offset();
        try {
          return (this.parseIndirectObjectHeader(), !0);
        } catch {
          return (this.bytes.moveTo(e), !1);
        }
      }),
      (t.prototype.parseIndirectObject = function () {
        return F(this, void 0, void 0, function () {
          var e, t;
          return I(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (e = this.parseIndirectObjectHeader()),
                  this.skipWhitespaceAndComments(),
                  (t = this.parseObject()),
                  this.skipWhitespaceAndComments(),
                  this.matchKeyword(Ea.endobj),
                  t instanceof gr &&
                  t.dict.lookup(q.of(`Type`)) === q.of(`ObjStm`)
                    ? [
                        4,
                        Oa.forStream(
                          t,
                          this.shouldWaitForTick,
                        ).parseIntoContext(),
                      ]
                    : [3, 2]
                );
              case 1:
                return (n.sent(), [3, 3]);
              case 2:
                (t instanceof gr && t.dict.lookup(q.of(`Type`)) === q.of(`XRef`)
                  ? ka.forStream(t).parseIntoContext()
                  : this.context.assign(e, t),
                  (n.label = 3));
              case 3:
                return [2, e];
            }
          });
        });
      }),
      (t.prototype.tryToParseInvalidIndirectObject = function () {
        var e = this.bytes.position(),
          t = `Trying to parse invalid object: ` + JSON.stringify(e) + `)`;
        if (this.throwOnInvalidObject) throw Error(t);
        console.warn(t);
        var n = this.parseIndirectObjectHeader();
        (console.warn(`Invalid object ref: ` + n),
          this.skipWhitespaceAndComments());
        for (
          var r = this.bytes.offset(), i = !0;
          !this.bytes.done() && (this.matchKeyword(Ea.endobj) && (i = !1), i);
        )
          this.bytes.next();
        if (i) throw new Kn(e);
        var a = this.bytes.offset() - Ea.endobj.length,
          o = Fr.of(this.bytes.slice(r, a));
        return (this.context.assign(n, o), n);
      }),
      (t.prototype.parseIndirectObjects = function () {
        return F(this, void 0, void 0, function () {
          var e;
          return I(this, function (t) {
            switch (t.label) {
              case 0:
                (this.skipWhitespaceAndComments(), (t.label = 1));
              case 1:
                if (this.bytes.done() || !fa[this.bytes.peek()]) return [3, 8];
                ((e = this.bytes.offset()), (t.label = 2));
              case 2:
                return (
                  t.trys.push([2, 4, , 5]),
                  [4, this.parseIndirectObject()]
                );
              case 3:
                return (t.sent(), [3, 5]);
              case 4:
                return (
                  t.sent(),
                  this.bytes.moveTo(e),
                  this.tryToParseInvalidIndirectObject(),
                  [3, 5]
                );
              case 5:
                return (
                  this.skipWhitespaceAndComments(),
                  this.skipJibberish(),
                  this.shouldWaitForTick() ? [4, rt()] : [3, 7]
                );
              case 6:
                (t.sent(), (t.label = 7));
              case 7:
                return [3, 1];
              case 8:
                return [2];
            }
          });
        });
      }),
      (t.prototype.maybeParseCrossRefSection = function () {
        if ((this.skipWhitespaceAndComments(), this.matchKeyword(Ea.xref))) {
          this.skipWhitespaceAndComments();
          for (
            var e = -1, t = Ar.createEmpty();
            !this.bytes.done() && fa[this.bytes.peek()];
          ) {
            var n = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var r = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var i = this.bytes.peek();
            if (i === G.n || i === G.f) {
              var a = yr.of(e, r);
              (this.bytes.next() === G.n
                ? t.addEntry(a, n)
                : t.addDeletedEntry(a, n),
                (e += 1));
            } else e = n;
            this.skipWhitespaceAndComments();
          }
          return t;
        }
      }),
      (t.prototype.maybeParseTrailerDict = function () {
        if ((this.skipWhitespaceAndComments(), this.matchKeyword(Ea.trailer))) {
          this.skipWhitespaceAndComments();
          var e = this.parseDict(),
            t = this.context;
          t.trailerInfo = {
            Root: e.get(q.of(`Root`)) || t.trailerInfo.Root,
            Encrypt: e.get(q.of(`Encrypt`)) || t.trailerInfo.Encrypt,
            Info: e.get(q.of(`Info`)) || t.trailerInfo.Info,
            ID: e.get(q.of(`ID`)) || t.trailerInfo.ID,
          };
        }
      }),
      (t.prototype.maybeParseTrailer = function () {
        if (
          (this.skipWhitespaceAndComments(), this.matchKeyword(Ea.startxref))
        ) {
          this.skipWhitespaceAndComments();
          var e = this.parseRawInt();
          return (
            this.skipWhitespace(),
            this.matchKeyword(Ea.eof),
            this.skipWhitespaceAndComments(),
            this.matchKeyword(Ea.eof),
            this.skipWhitespaceAndComments(),
            jr.forLastCrossRefSectionOffset(e)
          );
        }
      }),
      (t.prototype.parseDocumentSection = function () {
        return F(this, void 0, void 0, function () {
          return I(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.parseIndirectObjects()];
              case 1:
                return (
                  e.sent(),
                  this.maybeParseCrossRefSection(),
                  this.maybeParseTrailerDict(),
                  this.maybeParseTrailer(),
                  this.skipJibberish(),
                  [2]
                );
            }
          });
        });
      }),
      (t.prototype.skipJibberish = function () {
        for (this.skipWhitespaceAndComments(); !this.bytes.done();) {
          var e = this.bytes.offset(),
            t = this.bytes.peek();
          if (
            t >= G.Space &&
            t <= G.Tilde &&
            (this.matchKeyword(Ea.xref) ||
              this.matchKeyword(Ea.trailer) ||
              this.matchKeyword(Ea.startxref) ||
              this.matchIndirectObjectHeader())
          ) {
            this.bytes.moveTo(e);
            break;
          }
          this.bytes.next();
        }
      }),
      (t.prototype.skipBinaryHeaderComment = function () {
        this.skipWhitespaceAndComments();
        try {
          var e = this.bytes.offset();
          (this.parseIndirectObjectHeader(), this.bytes.moveTo(e));
        } catch {
          (this.bytes.next(), this.skipWhitespaceAndComments());
        }
      }),
      (t.forBytesWithOptions = function (e, n, r, i) {
        return new t(e, n, r, i);
      }),
      t
    );
  })(Da),
  ja = function (e) {
    return 1 << e;
  },
  Ma;
(function (e) {
  ((e[(e.Invisible = ja(0))] = `Invisible`),
    (e[(e.Hidden = ja(1))] = `Hidden`),
    (e[(e.Print = ja(2))] = `Print`),
    (e[(e.NoZoom = ja(3))] = `NoZoom`),
    (e[(e.NoRotate = ja(4))] = `NoRotate`),
    (e[(e.NoView = ja(5))] = `NoView`),
    (e[(e.ReadOnly = ja(6))] = `ReadOnly`),
    (e[(e.Locked = ja(7))] = `Locked`),
    (e[(e.ToggleNoView = ja(8))] = `ToggleNoView`),
    (e[(e.LockedContents = ja(9))] = `LockedContents`));
})((Ma ||= {}));
var Na = function (e) {
    return e instanceof q ? e : q.of(e);
  },
  Pa = function (e) {
    return e instanceof K ? e : K.of(e);
  },
  Fa = function (e) {
    return e instanceof K ? e.asNumber() : e;
  },
  Ia;
(function (e) {
  ((e.Degrees = `degrees`), (e.Radians = `radians`));
})((Ia ||= {}));
var X = function (e) {
    return (U(e, `degreeAngle`, [`number`]), { type: Ia.Degrees, angle: e });
  },
  La = Ia.Radians,
  Ra = Ia.Degrees,
  za = function (e) {
    return (e * Math.PI) / 180;
  },
  Ba = function (e) {
    return (e * 180) / Math.PI;
  },
  Va = function (e) {
    return e.type === La
      ? e.angle
      : e.type === Ra
        ? za(e.angle)
        : St(`Invalid rotation: ` + JSON.stringify(e));
  },
  Ha = function (e) {
    return e.type === La
      ? Ba(e.angle)
      : e.type === Ra
        ? e.angle
        : St(`Invalid rotation: ` + JSON.stringify(e));
  },
  Ua = function (e) {
    e === void 0 && (e = 0);
    var t = (e / 90) % 4;
    return t === 0 ? 0 : t === 1 ? 90 : t === 2 ? 180 : t === 3 ? 270 : 0;
  },
  Wa = function (e, t) {
    t === void 0 && (t = 0);
    var n = Ua(t);
    return n === 90 || n === 270
      ? { width: e.height, height: e.width }
      : { width: e.width, height: e.height };
  },
  Ga = function (e, t, n) {
    (t === void 0 && (t = 0), n === void 0 && (n = 0));
    var r = e.x,
      i = e.y,
      a = e.width,
      o = e.height,
      s = Ua(n),
      c = t / 2;
    return s === 0
      ? { x: r - c, y: i - c, width: a, height: o }
      : s === 90
        ? { x: r - o + c, y: i - c, width: o, height: a }
        : s === 180
          ? { x: r - a + c, y: i - o + c, width: a, height: o }
          : s === 270
            ? { x: r - c, y: i - a + c, width: o, height: a }
            : { x: r - c, y: i - c, width: a, height: o };
  },
  Ka = function () {
    return br.of(Sr.ClipNonZero);
  },
  qa = Math.cos,
  Ja = Math.sin,
  Ya = Math.tan,
  Xa = function (e, t, n, r, i, a) {
    return br.of(Sr.ConcatTransformationMatrix, [
      Pa(e),
      Pa(t),
      Pa(n),
      Pa(r),
      Pa(i),
      Pa(a),
    ]);
  },
  Za = function (e, t) {
    return Xa(1, 0, 0, 1, e, t);
  },
  Qa = function (e, t) {
    return Xa(e, 0, 0, t, 0, 0);
  },
  $a = function (e) {
    return Xa(qa(Fa(e)), Ja(Fa(e)), -Ja(Fa(e)), qa(Fa(e)), 0, 0);
  },
  eo = function (e) {
    return $a(za(Fa(e)));
  },
  to = function (e, t) {
    return Xa(1, Ya(Fa(e)), Ya(Fa(t)), 1, 0, 0);
  },
  no = function (e, t) {
    return br.of(Sr.SetLineDashPattern, [
      `[` + e.map(Pa).join(` `) + `]`,
      Pa(t),
    ]);
  },
  ro;
(function (e) {
  ((e[(e.Butt = 0)] = `Butt`),
    (e[(e.Round = 1)] = `Round`),
    (e[(e.Projecting = 2)] = `Projecting`));
})((ro ||= {}));
var io = function (e) {
    return br.of(Sr.SetLineCapStyle, [Pa(e)]);
  },
  ao;
(function (e) {
  ((e[(e.Miter = 0)] = `Miter`),
    (e[(e.Round = 1)] = `Round`),
    (e[(e.Bevel = 2)] = `Bevel`));
})((ao ||= {}));
var oo = function (e) {
    return br.of(Sr.SetGraphicsStateParams, [Na(e)]);
  },
  so = function () {
    return br.of(Sr.PushGraphicsState);
  },
  co = function () {
    return br.of(Sr.PopGraphicsState);
  },
  lo = function (e) {
    return br.of(Sr.SetLineWidth, [Pa(e)]);
  },
  uo = function (e, t, n, r, i, a) {
    return br.of(Sr.AppendBezierCurve, [
      Pa(e),
      Pa(t),
      Pa(n),
      Pa(r),
      Pa(i),
      Pa(a),
    ]);
  },
  fo = function (e, t, n, r) {
    return br.of(Sr.CurveToReplicateInitialPoint, [Pa(e), Pa(t), Pa(n), Pa(r)]);
  },
  po = function () {
    return br.of(Sr.ClosePath);
  },
  mo = function (e, t) {
    return br.of(Sr.MoveTo, [Pa(e), Pa(t)]);
  },
  ho = function (e, t) {
    return br.of(Sr.LineTo, [Pa(e), Pa(t)]);
  },
  go = function () {
    return br.of(Sr.StrokePath);
  },
  _o = function () {
    return br.of(Sr.FillNonZero);
  },
  vo = function () {
    return br.of(Sr.FillNonZeroAndStroke);
  },
  yo = function () {
    return br.of(Sr.EndPath);
  },
  bo = function () {
    return br.of(Sr.NextLine);
  },
  xo = function (e) {
    return br.of(Sr.ShowText, [e]);
  },
  So = function () {
    return br.of(Sr.BeginText);
  },
  Co = function () {
    return br.of(Sr.EndText);
  },
  wo = function (e, t) {
    return br.of(Sr.SetFontAndSize, [Na(e), Pa(t)]);
  },
  To = function (e) {
    return br.of(Sr.SetTextLineHeight, [Pa(e)]);
  },
  Eo;
(function (e) {
  ((e[(e.Fill = 0)] = `Fill`),
    (e[(e.Outline = 1)] = `Outline`),
    (e[(e.FillAndOutline = 2)] = `FillAndOutline`),
    (e[(e.Invisible = 3)] = `Invisible`),
    (e[(e.FillAndClip = 4)] = `FillAndClip`),
    (e[(e.OutlineAndClip = 5)] = `OutlineAndClip`),
    (e[(e.FillAndOutlineAndClip = 6)] = `FillAndOutlineAndClip`),
    (e[(e.Clip = 7)] = `Clip`));
})((Eo ||= {}));
var Do = function (e, t, n, r, i, a) {
    return br.of(Sr.SetTextMatrix, [Pa(e), Pa(t), Pa(n), Pa(r), Pa(i), Pa(a)]);
  },
  Oo = function (e, t, n, r, i) {
    return Do(
      qa(Fa(e)),
      Ja(Fa(e)) + Ya(Fa(t)),
      -Ja(Fa(e)) + Ya(Fa(n)),
      qa(Fa(e)),
      r,
      i,
    );
  },
  ko = function (e) {
    return br.of(Sr.DrawObject, [Na(e)]);
  },
  Ao = function (e) {
    return br.of(Sr.NonStrokingColorGray, [Pa(e)]);
  },
  jo = function (e) {
    return br.of(Sr.StrokingColorGray, [Pa(e)]);
  },
  Mo = function (e, t, n) {
    return br.of(Sr.NonStrokingColorRgb, [Pa(e), Pa(t), Pa(n)]);
  },
  No = function (e, t, n) {
    return br.of(Sr.StrokingColorRgb, [Pa(e), Pa(t), Pa(n)]);
  },
  Po = function (e, t, n, r) {
    return br.of(Sr.NonStrokingColorCmyk, [Pa(e), Pa(t), Pa(n), Pa(r)]);
  },
  Fo = function (e, t, n, r) {
    return br.of(Sr.StrokingColorCmyk, [Pa(e), Pa(t), Pa(n), Pa(r)]);
  },
  Io = function (e) {
    return br.of(Sr.BeginMarkedContent, [Na(e)]);
  },
  Lo = function () {
    return br.of(Sr.EndMarkedContent);
  },
  Ro;
(function (e) {
  ((e.Grayscale = `Grayscale`), (e.RGB = `RGB`), (e.CMYK = `CMYK`));
})((Ro ||= {}));
var zo = function (e) {
    return (gn(e, `gray`, 0, 1), { type: Ro.Grayscale, gray: e });
  },
  Bo = function (e, t, n) {
    return (
      gn(e, `red`, 0, 1),
      gn(t, `green`, 0, 1),
      gn(n, `blue`, 0, 1),
      { type: Ro.RGB, red: e, green: t, blue: n }
    );
  },
  Vo = function (e, t, n, r) {
    return (
      gn(e, `cyan`, 0, 1),
      gn(t, `magenta`, 0, 1),
      gn(n, `yellow`, 0, 1),
      gn(r, `key`, 0, 1),
      { type: Ro.CMYK, cyan: e, magenta: t, yellow: n, key: r }
    );
  },
  Ho = Ro.Grayscale,
  Uo = Ro.RGB,
  Wo = Ro.CMYK,
  Go = function (e) {
    return e.type === Ho
      ? Ao(e.gray)
      : e.type === Uo
        ? Mo(e.red, e.green, e.blue)
        : e.type === Wo
          ? Po(e.cyan, e.magenta, e.yellow, e.key)
          : St(`Invalid color: ` + JSON.stringify(e));
  },
  Ko = function (e) {
    return e.type === Ho
      ? jo(e.gray)
      : e.type === Uo
        ? No(e.red, e.green, e.blue)
        : e.type === Wo
          ? Fo(e.cyan, e.magenta, e.yellow, e.key)
          : St(`Invalid color: ` + JSON.stringify(e));
  },
  qo = function (e, t) {
    return (
      t === void 0 && (t = 1),
      e?.length === 1
        ? zo(e[0] * t)
        : e?.length === 3
          ? Bo(e[0] * t, e[1] * t, e[2] * t)
          : e?.length === 4
            ? Vo(e[0] * t, e[1] * t, e[2] * t, e[3] * t)
            : void 0
    );
  },
  Jo = function (e) {
    return e.type === Ho
      ? [e.gray]
      : e.type === Uo
        ? [e.red, e.green, e.blue]
        : e.type === Wo
          ? [e.cyan, e.magenta, e.yellow, e.key]
          : St(`Invalid color: ` + JSON.stringify(e));
  },
  Z = 0,
  Q = 0,
  Yo = 0,
  Xo = 0,
  Zo = 0,
  Qo = 0,
  $o = new Map([
    [`A`, 7],
    [`a`, 7],
    [`C`, 6],
    [`c`, 6],
    [`H`, 1],
    [`h`, 1],
    [`L`, 2],
    [`l`, 2],
    [`M`, 2],
    [`m`, 2],
    [`Q`, 4],
    [`q`, 4],
    [`S`, 4],
    [`s`, 4],
    [`T`, 2],
    [`t`, 2],
    [`V`, 1],
    [`v`, 1],
    [`Z`, 0],
    [`z`, 0],
  ]),
  es = function (e) {
    for (
      var t, n = [], r = [], i = ``, a = !1, o = 0, s = 0, c = e;
      s < c.length;
      s++
    ) {
      var l = c[s];
      if ($o.has(l))
        ((o = $o.get(l)),
          t &&
            (i.length > 0 && (r[r.length] = +i),
            (n[n.length] = { cmd: t, args: r }),
            (r = []),
            (i = ``),
            (a = !1)),
          (t = l));
      else if (
        [` `, `,`].includes(l) ||
        (l === `-` && i.length > 0 && i[i.length - 1] !== `e`) ||
        (l === `.` && a)
      ) {
        if (i.length === 0) continue;
        (r.length === o
          ? ((n[n.length] = { cmd: t, args: r }),
            (r = [+i]),
            t === `M` && (t = `L`),
            t === `m` && (t = `l`))
          : (r[r.length] = +i),
          (a = l === `.`),
          (i = [`-`, `.`].includes(l) ? l : ``));
      } else ((i += l), l === `.` && (a = !0));
    }
    return (
      i.length > 0 &&
        (r.length === o
          ? ((n[n.length] = { cmd: t, args: r }),
            (r = [+i]),
            t === `M` && (t = `L`),
            t === `m` && (t = `l`))
          : (r[r.length] = +i)),
      (n[n.length] = { cmd: t, args: r }),
      n
    );
  },
  ts = function (e) {
    Z = Q = Yo = Xo = Zo = Qo = 0;
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n];
      if (r.cmd && typeof ns[r.cmd] == `function`) {
        var i = ns[r.cmd](r.args);
        Array.isArray(i) ? (t = t.concat(i)) : t.push(i);
      }
    }
    return t;
  },
  ns = {
    M: function (e) {
      return (
        (Z = e[0]),
        (Q = e[1]),
        (Yo = Xo = null),
        (Zo = Z),
        (Qo = Q),
        mo(Z, Q)
      );
    },
    m: function (e) {
      return (
        (Z += e[0]),
        (Q += e[1]),
        (Yo = Xo = null),
        (Zo = Z),
        (Qo = Q),
        mo(Z, Q)
      );
    },
    C: function (e) {
      return (
        (Z = e[4]),
        (Q = e[5]),
        (Yo = e[2]),
        (Xo = e[3]),
        uo(e[0], e[1], e[2], e[3], e[4], e[5])
      );
    },
    c: function (e) {
      var t = uo(e[0] + Z, e[1] + Q, e[2] + Z, e[3] + Q, e[4] + Z, e[5] + Q);
      return ((Yo = Z + e[2]), (Xo = Q + e[3]), (Z += e[4]), (Q += e[5]), t);
    },
    S: function (e) {
      (Yo === null || Xo === null) && ((Yo = Z), (Xo = Q));
      var t = uo(Z - (Yo - Z), Q - (Xo - Q), e[0], e[1], e[2], e[3]);
      return ((Yo = e[0]), (Xo = e[1]), (Z = e[2]), (Q = e[3]), t);
    },
    s: function (e) {
      (Yo === null || Xo === null) && ((Yo = Z), (Xo = Q));
      var t = uo(
        Z - (Yo - Z),
        Q - (Xo - Q),
        Z + e[0],
        Q + e[1],
        Z + e[2],
        Q + e[3],
      );
      return ((Yo = Z + e[0]), (Xo = Q + e[1]), (Z += e[2]), (Q += e[3]), t);
    },
    Q: function (e) {
      return (
        (Yo = e[0]),
        (Xo = e[1]),
        (Z = e[2]),
        (Q = e[3]),
        fo(e[0], e[1], Z, Q)
      );
    },
    q: function (e) {
      var t = fo(e[0] + Z, e[1] + Q, e[2] + Z, e[3] + Q);
      return ((Yo = Z + e[0]), (Xo = Q + e[1]), (Z += e[2]), (Q += e[3]), t);
    },
    T: function (e) {
      Yo === null || Xo === null
        ? ((Yo = Z), (Xo = Q))
        : ((Yo = Z - (Yo - Z)), (Xo = Q - (Xo - Q)));
      var t = fo(Yo, Xo, e[0], e[1]);
      return (
        (Yo = Z - (Yo - Z)),
        (Xo = Q - (Xo - Q)),
        (Z = e[0]),
        (Q = e[1]),
        t
      );
    },
    t: function (e) {
      Yo === null || Xo === null
        ? ((Yo = Z), (Xo = Q))
        : ((Yo = Z - (Yo - Z)), (Xo = Q - (Xo - Q)));
      var t = fo(Yo, Xo, Z + e[0], Q + e[1]);
      return ((Z += e[0]), (Q += e[1]), t);
    },
    A: function (e) {
      var t = rs(Z, Q, e);
      return ((Z = e[5]), (Q = e[6]), t);
    },
    a: function (e) {
      ((e[5] += Z), (e[6] += Q));
      var t = rs(Z, Q, e);
      return ((Z = e[5]), (Q = e[6]), t);
    },
    L: function (e) {
      return ((Z = e[0]), (Q = e[1]), (Yo = Xo = null), ho(Z, Q));
    },
    l: function (e) {
      return ((Z += e[0]), (Q += e[1]), (Yo = Xo = null), ho(Z, Q));
    },
    H: function (e) {
      return ((Z = e[0]), (Yo = Xo = null), ho(Z, Q));
    },
    h: function (e) {
      return ((Z += e[0]), (Yo = Xo = null), ho(Z, Q));
    },
    V: function (e) {
      return ((Q = e[0]), (Yo = Xo = null), ho(Z, Q));
    },
    v: function (e) {
      return ((Q += e[0]), (Yo = Xo = null), ho(Z, Q));
    },
    Z: function () {
      var e = po();
      return ((Z = Zo), (Q = Qo), e);
    },
    z: function () {
      var e = po();
      return ((Z = Zo), (Q = Qo), e);
    },
  },
  rs = function (e, t, n) {
    for (
      var r = n[0],
        i = n[1],
        a = n[2],
        o = n[3],
        s = n[4],
        c = n[5],
        l = n[6],
        u = is(c, l, r, i, o, s, a, e, t),
        d = [],
        f = 0,
        p = u;
      f < p.length;
      f++
    ) {
      var m = p[f],
        h = as.apply(void 0, m);
      d.push(uo.apply(void 0, h));
    }
    return d;
  },
  is = function (e, t, n, r, i, a, o, s, c) {
    var l = (Math.PI / 180) * o,
      u = Math.sin(l),
      d = Math.cos(l);
    ((n = Math.abs(n)),
      (r = Math.abs(r)),
      (Yo = d * (s - e) * 0.5 + u * (c - t) * 0.5),
      (Xo = d * (c - t) * 0.5 - u * (s - e) * 0.5));
    var f = (Yo * Yo) / (n * n) + (Xo * Xo) / (r * r);
    f > 1 && ((f = Math.sqrt(f)), (n *= f), (r *= f));
    var p = d / n,
      m = u / n,
      h = -u / r,
      g = d / r,
      _ = p * s + m * c,
      v = h * s + g * c,
      y = p * e + m * t,
      b = h * e + g * t,
      x = 1 / ((y - _) * (y - _) + (b - v) * (b - v)) - 0.25;
    x < 0 && (x = 0);
    var S = Math.sqrt(x);
    a === i && (S = -S);
    var C = 0.5 * (_ + y) - S * (b - v),
      w = 0.5 * (v + b) + S * (y - _),
      T = Math.atan2(v - w, _ - C),
      E = Math.atan2(b - w, y - C) - T;
    E < 0 && a === 1
      ? (E += 2 * Math.PI)
      : E > 0 && a === 0 && (E -= 2 * Math.PI);
    for (
      var D = Math.ceil(Math.abs(E / (Math.PI * 0.5 + 0.001))), ee = [], O = 0;
      O < D;
      O++
    ) {
      var te = T + (O * E) / D,
        k = T + ((O + 1) * E) / D;
      ee[O] = [C, w, te, k, n, r, u, d];
    }
    return ee;
  },
  as = function (e, t, n, r, i, a, o, s) {
    var c = s * i,
      l = -o * a,
      u = o * i,
      d = s * a,
      f = 0.5 * (r - n),
      p = ((8 / 3) * Math.sin(f * 0.5) * Math.sin(f * 0.5)) / Math.sin(f),
      m = e + Math.cos(n) - p * Math.sin(n),
      h = t + Math.sin(n) + p * Math.cos(n),
      g = e + Math.cos(r),
      _ = t + Math.sin(r),
      v = g + p * Math.sin(r),
      y = _ - p * Math.cos(r);
    return [
      c * m + l * h,
      u * m + d * h,
      c * v + l * y,
      u * v + d * y,
      c * g + l * _,
      u * g + d * _,
    ];
  },
  os = function (e) {
    return ts(es(e));
  },
  ss = function (e, t) {
    for (
      var n = [
          so(),
          t.graphicsState && oo(t.graphicsState),
          So(),
          Go(t.color),
          wo(t.font, t.size),
          To(t.lineHeight),
          Oo(Va(t.rotate), Va(t.xSkew), Va(t.ySkew), t.x, t.y),
        ].filter(Boolean),
        r = 0,
        i = e.length;
      r < i;
      r++
    )
      n.push(xo(e[r]), bo());
    return (n.push(Co(), co()), n);
  },
  cs = function (e, t) {
    return [
      so(),
      t.graphicsState && oo(t.graphicsState),
      Za(t.x, t.y),
      $a(Va(t.rotate)),
      Qa(t.width, t.height),
      to(Va(t.xSkew), Va(t.ySkew)),
      ko(e),
      co(),
    ].filter(Boolean);
  },
  ls = function (e, t) {
    return [
      so(),
      t.graphicsState && oo(t.graphicsState),
      Za(t.x, t.y),
      $a(Va(t.rotate)),
      Qa(t.xScale, t.yScale),
      to(Va(t.xSkew), Va(t.ySkew)),
      ko(e),
      co(),
    ].filter(Boolean);
  },
  us = function (e) {
    return [
      so(),
      e.graphicsState && oo(e.graphicsState),
      e.color && Ko(e.color),
      lo(e.thickness),
      no(e.dashArray ?? [], e.dashPhase ?? 0),
      mo(e.start.x, e.start.y),
      e.lineCap && io(e.lineCap),
      mo(e.start.x, e.start.y),
      ho(e.end.x, e.end.y),
      go(),
      co(),
    ].filter(Boolean);
  },
  ds = function (e) {
    return [
      so(),
      e.graphicsState && oo(e.graphicsState),
      e.color && Go(e.color),
      e.borderColor && Ko(e.borderColor),
      lo(e.borderWidth),
      e.borderLineCap && io(e.borderLineCap),
      no(e.borderDashArray ?? [], e.borderDashPhase ?? 0),
      Za(e.x, e.y),
      $a(Va(e.rotate)),
      to(Va(e.xSkew), Va(e.ySkew)),
      mo(0, 0),
      ho(0, e.height),
      ho(e.width, e.height),
      ho(e.width, 0),
      po(),
      e.color && e.borderWidth
        ? vo()
        : e.color
          ? _o()
          : e.borderColor
            ? go()
            : po(),
      co(),
    ].filter(Boolean);
  },
  fs = 4 * ((Math.sqrt(2) - 1) / 3),
  ps = function (e) {
    var t = Fa(e.x),
      n = Fa(e.y),
      r = Fa(e.xScale),
      i = Fa(e.yScale);
    ((t -= r), (n -= i));
    var a = r * fs,
      o = i * fs,
      s = t + r * 2,
      c = n + i * 2,
      l = t + r,
      u = n + i;
    return [
      so(),
      mo(t, u),
      uo(t, u - o, l - a, n, l, n),
      uo(l + a, n, s, u - o, s, u),
      uo(s, u + o, l + a, c, l, c),
      uo(l - a, c, t, u + o, t, u),
      co(),
    ];
  },
  ms = function (e) {
    var t = Fa(e.x),
      n = Fa(e.y),
      r = Fa(e.xScale),
      i = Fa(e.yScale),
      a = -r,
      o = -i,
      s = r * fs,
      c = i * fs,
      l = a + r * 2,
      u = o + i * 2,
      d = a + r,
      f = o + i;
    return [
      Za(t, n),
      $a(Va(e.rotate)),
      mo(a, f),
      uo(a, f - c, d - s, o, d, o),
      uo(d + s, o, l, f - c, l, f),
      uo(l, f + c, d + s, u, d, u),
      uo(d - s, u, a, f + c, a, f),
    ];
  },
  hs = function (e) {
    return L(
      [
        so(),
        e.graphicsState && oo(e.graphicsState),
        e.color && Go(e.color),
        e.borderColor && Ko(e.borderColor),
        lo(e.borderWidth),
        e.borderLineCap && io(e.borderLineCap),
        no(e.borderDashArray ?? [], e.borderDashPhase ?? 0),
      ],
      e.rotate === void 0
        ? ps({ x: e.x, y: e.y, xScale: e.xScale, yScale: e.yScale })
        : ms({
            x: e.x,
            y: e.y,
            xScale: e.xScale,
            yScale: e.yScale,
            rotate: e.rotate ?? X(0),
          }),
      [
        e.color && e.borderWidth
          ? vo()
          : e.color
            ? _o()
            : e.borderColor
              ? go()
              : po(),
        co(),
      ],
    ).filter(Boolean);
  },
  gs = function (e, t) {
    return L(
      [
        so(),
        t.graphicsState && oo(t.graphicsState),
        Za(t.x, t.y),
        $a(Va(t.rotate ?? X(0))),
        t.scale ? Qa(t.scale, -t.scale) : Qa(1, -1),
        t.color && Go(t.color),
        t.borderColor && Ko(t.borderColor),
        t.borderWidth && lo(t.borderWidth),
        t.borderLineCap && io(t.borderLineCap),
        no(t.borderDashArray ?? [], t.borderDashPhase ?? 0),
      ],
      os(e),
      [
        t.color && t.borderWidth
          ? vo()
          : t.color
            ? _o()
            : t.borderColor
              ? go()
              : po(),
        co(),
      ],
    ).filter(Boolean);
  },
  _s = function (e) {
    var t = Fa(e.size),
      n = -0.25,
      r = -0.49,
      i = 0.475,
      a = 0.69,
      o = -0.675,
      s = -((o - n) * (a - n)) / (i - r) + r;
    return [
      so(),
      e.color && Ko(e.color),
      lo(e.thickness),
      Za(e.x, e.y),
      mo(o * t, s * t),
      ho(n * t, r * t),
      ho(a * t, i * t),
      go(),
      co(),
    ].filter(Boolean);
  },
  vs = function (e) {
    return e.rotation === 0
      ? [Za(0, 0), eo(0)]
      : e.rotation === 90
        ? [Za(e.width, 0), eo(90)]
        : e.rotation === 180
          ? [Za(e.width, e.height), eo(180)]
          : e.rotation === 270
            ? [Za(0, e.height), eo(270)]
            : [];
  },
  ys = function (e) {
    var t = ds({
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height,
      borderWidth: e.borderWidth,
      color: e.color,
      borderColor: e.borderColor,
      rotate: X(0),
      xSkew: X(0),
      ySkew: X(0),
    });
    if (!e.filled) return t;
    var n = Fa(e.width),
      r = Fa(e.height),
      i = Math.min(n, r) / 2,
      a = _s({
        x: n / 2,
        y: r / 2,
        size: i,
        thickness: e.thickness,
        color: e.markColor,
      });
    return L([so()], t, a, [co()]);
  },
  bs = function (e) {
    var t = Fa(e.width),
      n = Fa(e.height),
      r = Math.min(t, n) / 2,
      i = hs({
        x: e.x,
        y: e.y,
        xScale: r,
        yScale: r,
        color: e.color,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
      });
    if (!e.filled) return i;
    var a = hs({
      x: e.x,
      y: e.y,
      xScale: r * 0.45,
      yScale: r * 0.45,
      color: e.dotColor,
      borderColor: void 0,
      borderWidth: 0,
    });
    return L([so()], i, a, [co()]);
  },
  xs = function (e) {
    var t = ds({
        x: Fa(e.x),
        y: Fa(e.y),
        width: Fa(e.width),
        height: Fa(e.height),
        borderWidth: e.borderWidth,
        color: e.color,
        borderColor: e.borderColor,
        rotate: X(0),
        xSkew: X(0),
        ySkew: X(0),
      }),
      n = Ss(e.textLines, {
        color: e.textColor,
        font: e.font,
        size: e.fontSize,
        rotate: X(0),
        xSkew: X(0),
        ySkew: X(0),
      });
    return L([so()], t, n, [co()]);
  },
  Ss = function (e, t) {
    for (
      var n = [So(), Go(t.color), wo(t.font, t.size)], r = 0, i = e.length;
      r < i;
      r++
    ) {
      var a = e[r],
        o = a.encoded,
        s = a.x,
        c = a.y;
      n.push(Oo(Va(t.rotate), Va(t.xSkew), Va(t.ySkew), s, c), xo(o));
    }
    return (n.push(Co()), n);
  },
  Cs = function (e) {
    var t = Fa(e.x),
      n = Fa(e.y),
      r = Fa(e.width),
      i = Fa(e.height),
      a = Fa(e.borderWidth),
      o = Fa(e.padding),
      s = t + a / 2 + o,
      c = n + a / 2 + o,
      l = r - (a / 2 + o) * 2,
      u = i - (a / 2 + o) * 2,
      d = [
        mo(s, c),
        ho(s, c + u),
        ho(s + l, c + u),
        ho(s + l, c),
        po(),
        Ka(),
        yo(),
      ],
      f = ds({
        x: t,
        y: n,
        width: r,
        height: i,
        borderWidth: e.borderWidth,
        color: e.color,
        borderColor: e.borderColor,
        rotate: X(0),
        xSkew: X(0),
        ySkew: X(0),
      }),
      p = Ss(e.textLines, {
        color: e.textColor,
        font: e.font,
        size: e.fontSize,
        rotate: X(0),
        xSkew: X(0),
        ySkew: X(0),
      }),
      m = L([Io(`Tx`), so()], p, [co(), Lo()]);
    return L([so()], f, d, m, [co()]);
  },
  ws = function (e) {
    for (
      var t = Fa(e.x),
        n = Fa(e.y),
        r = Fa(e.width),
        i = Fa(e.height),
        a = Fa(e.lineHeight),
        o = Fa(e.borderWidth),
        s = Fa(e.padding),
        c = t + o / 2 + s,
        l = n + o / 2 + s,
        u = r - (o / 2 + s) * 2,
        d = i - (o / 2 + s) * 2,
        f = [
          mo(c, l),
          ho(c, l + d),
          ho(c + u, l + d),
          ho(c + u, l),
          po(),
          Ka(),
          yo(),
        ],
        p = ds({
          x: t,
          y: n,
          width: r,
          height: i,
          borderWidth: e.borderWidth,
          color: e.color,
          borderColor: e.borderColor,
          rotate: X(0),
          xSkew: X(0),
          ySkew: X(0),
        }),
        m = [],
        h = 0,
        g = e.selectedLines.length;
      h < g;
      h++
    ) {
      var _ = e.textLines[e.selectedLines[h]];
      m.push.apply(
        m,
        ds({
          x: _.x - s,
          y: _.y - (a - _.height) / 2,
          width: r - o,
          height: _.height + (a - _.height) / 2,
          borderWidth: 0,
          color: e.selectedColor,
          borderColor: void 0,
          rotate: X(0),
          xSkew: X(0),
          ySkew: X(0),
        }),
      );
    }
    var v = Ss(e.textLines, {
        color: e.textColor,
        font: e.font,
        size: e.fontSize,
        rotate: X(0),
        xSkew: X(0),
        ySkew: X(0),
      }),
      y = L([Io(`Tx`), so()], v, [co(), Lo()]);
    return L([so()], p, m, f, y, [co()]);
  },
  Ts = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t =
          e.call(
            this,
            "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.",
          ) || this),
        t
      );
    }
    return t;
  })(Error),
  Es = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t =
          e.call(
            this,
            "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.",
          ) || this),
        t
      );
    }
    return t;
  })(Error),
  Ds = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t =
          e.call(
            this,
            "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.",
          ) || this),
        t
      );
    }
    return t;
  })(Error),
  Os = (function (e) {
    N(t, e);
    function t() {
      var t = this;
      return (
        (t =
          e.call(
            this,
            "PDFDocument has no pages so `PDFDocument.removePage` cannot be called",
          ) || this),
        t
      );
    }
    return t;
  })(Error),
  ks = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r = `PDFDocument has no form field with the name "` + t + `"`;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  As = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = this,
        a = n?.name,
        o = r?.constructor?.name ?? r,
        s =
          `Expected field "` +
          t +
          `" to be of type ` +
          a +
          `, ` +
          (`but it is actually of type ` + o);
      return ((i = e.call(this, s) || this), i);
    }
    return t;
  })(Error);
(function (e) {
  N(t, e);
  function t(t) {
    var n = this,
      r = `Failed to select check box due to missing onValue: "` + t + `"`;
    return ((n = e.call(this, r) || this), n);
  }
  return t;
})(Error);
var js = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r = `A field already exists with the specified name: "` + t + `"`;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Ms = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r = `Field name contains invalid component: "` + t + `"`;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error);
(function (e) {
  N(t, e);
  function t(t) {
    var n = this,
      r =
        `A non-terminal field already exists with the specified name: "` +
        t +
        `"`;
    return ((n = e.call(this, r) || this), n);
  }
  return t;
})(Error);
var Ns = (function (e) {
    N(t, e);
    function t(t) {
      var n = this,
        r =
          `Reading rich text fields is not supported: Attempted to read rich text field: ` +
          t;
      return ((n = e.call(this, r) || this), n);
    }
    return t;
  })(Error),
  Ps = (function (e) {
    N(t, e);
    function t(t, n) {
      var r = this,
        i =
          `Failed to layout combed text as lineLength=` +
          t +
          ` is greater than cellCount=` +
          n;
      return ((r = e.call(this, i) || this), r);
    }
    return t;
  })(Error),
  Fs = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = this,
        a =
          `Attempted to set text with length=` +
          t +
          ` for TextField with maxLength=` +
          n +
          ` and name=` +
          r;
      return ((i = e.call(this, a) || this), i);
    }
    return t;
  })(Error),
  Is = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = this,
        a =
          `Attempted to set maxLength=` +
          n +
          `, which is less than ` +
          t +
          `, the length of this field's current value (name=` +
          r +
          `)`;
      return ((i = e.call(this, a) || this), i);
    }
    return t;
  })(Error),
  Ls;
(function (e) {
  ((e[(e.Left = 0)] = `Left`),
    (e[(e.Center = 1)] = `Center`),
    (e[(e.Right = 2)] = `Right`));
})((Ls ||= {}));
var Rs = 4,
  zs = 500,
  Bs = function (e, t, n, r) {
    r === void 0 && (r = !1);
    for (var i = Rs; i < zs;) {
      for (var a = 0, o = 0, s = e.length; o < s; o++) {
        a += 1;
        for (
          var c = e[o].split(` `), l = n.width, u = 0, d = c.length;
          u < d;
          u++
        ) {
          var f = u === d - 1 ? c[u] : c[u] + ` `,
            p = t.widthOfTextAtSize(f, i);
          ((l -= p), l <= 0 && ((a += 1), (l = n.width - p)));
        }
      }
      if (!r && a > e.length) return i - 1;
      var m = t.heightAtSize(i);
      if ((m + m * 0.2) * a > Math.abs(n.height)) return i - 1;
      i += 1;
    }
    return i;
  },
  Vs = function (e, t, n, r) {
    for (var i = n.width / r, a = n.height, o = Rs, s = Re(e); o < zs;) {
      for (var c = 0, l = s.length; c < l; c++) {
        var u = s[c];
        if (t.widthOfTextAtSize(u, o) > i * 0.75) return o - 1;
      }
      if (t.heightAtSize(o, { descender: !1 }) > a) return o - 1;
      o += 1;
    }
    return o;
  },
  Hs = function (e) {
    for (var t = e.length; t > 0; t--) if (/\s/.test(e[t])) return t;
  },
  Us = function (e, t, n, r) {
    for (var i = e.length; i > 0;) {
      var a = e.substring(0, i),
        o = n.encodeText(a),
        s = n.widthOfTextAtSize(a, r);
      if (s < t)
        return {
          line: a,
          encoded: o,
          width: s,
          remainder: e.substring(i) || void 0,
        };
      i = Hs(a) ?? 0;
    }
    return {
      line: e,
      encoded: n.encodeText(e),
      width: n.widthOfTextAtSize(e, r),
      remainder: void 0,
    };
  },
  Ws = function (e, t) {
    var n = t.alignment,
      r = t.fontSize,
      i = t.font,
      a = t.bounds,
      o = Fe(Me(e));
    (r === void 0 || r === 0) && (r = Bs(o, i, a, !0));
    for (
      var s = i.heightAtSize(r),
        c = s + s * 0.2,
        l = [],
        u = a.x,
        d = a.y,
        f = a.x + a.width,
        p = a.y + a.height,
        m = a.y + a.height,
        h = 0,
        g = o.length;
      h < g;
      h++
    )
      for (var _ = o[h]; _ !== void 0;) {
        var v = Us(_, a.width, i, r),
          y = v.line,
          b = v.encoded,
          x = v.width,
          S = v.remainder,
          C =
            n === Ls.Left
              ? a.x
              : n === Ls.Center
                ? a.x + a.width / 2 - x / 2
                : n === Ls.Right
                  ? a.x + a.width - x
                  : a.x;
        ((m -= c),
          C < u && (u = C),
          m < d && (d = m),
          C + x > f && (f = C + x),
          m + s > p && (p = m + s),
          l.push({ text: y, encoded: b, width: x, height: s, x: C, y: m }),
          (_ = S?.trim()));
      }
    return {
      fontSize: r,
      lineHeight: c,
      lines: l,
      bounds: { x: u, y: d, width: f - u, height: p - d },
    };
  },
  Gs = function (e, t) {
    var n = t.fontSize,
      r = t.font,
      i = t.bounds,
      a = t.cellCount,
      o = Ie(Me(e));
    if (o.length > a) throw new Ps(o.length, a);
    (n === void 0 || n === 0) && (n = Vs(o, r, i, a));
    for (
      var s = i.width / a,
        c = r.heightAtSize(n, { descender: !1 }),
        l = i.y + (i.height / 2 - c / 2),
        u = [],
        d = i.x,
        f = i.y,
        p = i.x + i.width,
        m = i.y + i.height,
        h = 0,
        g = 0;
      h < a;
    ) {
      var _ = Le(o, g),
        v = _[0],
        y = _[1],
        b = r.encodeText(v),
        x = r.widthOfTextAtSize(v, n),
        S = i.x + (s * h + s / 2) - x / 2;
      (S < d && (d = S),
        l < f && (f = l),
        S + x > p && (p = S + x),
        l + c > m && (m = l + c),
        u.push({ text: o, encoded: b, width: x, height: c, x: S, y: l }),
        (h += 1),
        (g += y));
    }
    return {
      fontSize: n,
      cells: u,
      bounds: { x: d, y: f, width: p - d, height: m - f },
    };
  },
  Ks = function (e, t) {
    var n = t.alignment,
      r = t.fontSize,
      i = t.font,
      a = t.bounds,
      o = Ie(Me(e));
    (r === void 0 || r === 0) && (r = Bs([o], i, a));
    var s = i.encodeText(o),
      c = i.widthOfTextAtSize(o, r),
      l = i.heightAtSize(r, { descender: !1 }),
      u =
        n === Ls.Left
          ? a.x
          : n === Ls.Center
            ? a.x + a.width / 2 - c / 2
            : n === Ls.Right
              ? a.x + a.width - c
              : a.x,
      d = a.y + (a.height / 2 - l / 2);
    return {
      fontSize: r,
      line: { text: o, encoded: s, width: c, height: l, x: u, y: d },
      bounds: { x: u, y: d, width: c, height: l },
    };
  },
  qs = function (e) {
    return `normal` in e ? e : { normal: e };
  },
  Js = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,
  Ys = function (e) {
    var t = Ue(e.getDefaultAppearance() ?? ``, Js).match ?? [],
      n = Number(t[2]);
    return isFinite(n) ? n : void 0;
  },
  Xs =
    /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,
  Zs = function (e) {
    var t = Ue(e.getDefaultAppearance() ?? ``, Xs).match ?? [],
      n = t[1],
      r = t[2],
      i = t[3],
      a = t[4],
      o = t[5];
    if (o === `g` && n) return zo(Number(n));
    if (o === `rg` && n && r && i) return Bo(Number(n), Number(r), Number(i));
    if (o === `k` && n && r && i && a)
      return Vo(Number(n), Number(r), Number(i), Number(a));
  },
  Qs = function (e, t, n, r) {
    r === void 0 && (r = 0);
    var i = [Go(t).toString(), wo(n?.name ?? `dummy__noop`, r).toString()]
      .join(`
`);
    e.setDefaultAppearance(i);
  },
  $s = function (e, t) {
    var n = Zs(t),
      r = Zs(e.acroField),
      i = t.getRectangle(),
      a = t.getAppearanceCharacteristics(),
      o = t.getBorderStyle()?.getWidth() ?? 0,
      s = Ua(a?.getRotation()),
      c = Wa(i, s),
      l = c.width,
      u = c.height,
      d = vs(P(P({}, i), { rotation: s })),
      f = Bo(0, 0, 0),
      p = qo(a?.getBorderColor()) ?? f,
      m = qo(a?.getBackgroundColor()),
      h = qo(a?.getBackgroundColor(), 0.8),
      g = n ?? r ?? f;
    Qs(n ? t : e.acroField, g);
    var _ = {
      x: 0 + o / 2,
      y: 0 + o / 2,
      width: l - o,
      height: u - o,
      thickness: 1.5,
      borderWidth: o,
      borderColor: p,
      markColor: g,
    };
    return {
      normal: {
        on: L(d, ys(P(P({}, _), { color: m, filled: !0 }))),
        off: L(d, ys(P(P({}, _), { color: m, filled: !1 }))),
      },
      down: {
        on: L(d, ys(P(P({}, _), { color: h, filled: !0 }))),
        off: L(d, ys(P(P({}, _), { color: h, filled: !1 }))),
      },
    };
  },
  ec = function (e, t) {
    var n = Zs(t),
      r = Zs(e.acroField),
      i = t.getRectangle(),
      a = t.getAppearanceCharacteristics(),
      o = t.getBorderStyle()?.getWidth() ?? 0,
      s = Ua(a?.getRotation()),
      c = Wa(i, s),
      l = c.width,
      u = c.height,
      d = vs(P(P({}, i), { rotation: s })),
      f = Bo(0, 0, 0),
      p = qo(a?.getBorderColor()) ?? f,
      m = qo(a?.getBackgroundColor()),
      h = qo(a?.getBackgroundColor(), 0.8),
      g = n ?? r ?? f;
    Qs(n ? t : e.acroField, g);
    var _ = {
      x: l / 2,
      y: u / 2,
      width: l - o,
      height: u - o,
      borderWidth: o,
      borderColor: p,
      dotColor: g,
    };
    return {
      normal: {
        on: L(d, bs(P(P({}, _), { color: m, filled: !0 }))),
        off: L(d, bs(P(P({}, _), { color: m, filled: !1 }))),
      },
      down: {
        on: L(d, bs(P(P({}, _), { color: h, filled: !0 }))),
        off: L(d, bs(P(P({}, _), { color: h, filled: !1 }))),
      },
    };
  },
  tc = function (e, t, n) {
    var r = Zs(t),
      i = Zs(e.acroField),
      a = Ys(t),
      o = Ys(e.acroField),
      s = t.getRectangle(),
      c = t.getAppearanceCharacteristics(),
      l = t.getBorderStyle(),
      u = c?.getCaptions(),
      d = u?.normal ?? ``,
      f = u?.down ?? d ?? ``,
      p = l?.getWidth() ?? 0,
      m = Ua(c?.getRotation()),
      h = Wa(s, m),
      g = h.width,
      _ = h.height,
      v = vs(P(P({}, s), { rotation: m })),
      y = Bo(0, 0, 0),
      b = qo(c?.getBorderColor()),
      x = qo(c?.getBackgroundColor()),
      S = qo(c?.getBackgroundColor(), 0.8),
      C = { x: p, y: p, width: g - p * 2, height: _ - p * 2 },
      w = Ks(d, { alignment: Ls.Center, fontSize: a ?? o, font: n, bounds: C }),
      T = Ks(f, { alignment: Ls.Center, fontSize: a ?? o, font: n, bounds: C }),
      E = Math.min(w.fontSize, T.fontSize),
      D = r ?? i ?? y;
    Qs(r || a !== void 0 ? t : e.acroField, D, n, E);
    var ee = {
      x: 0 + p / 2,
      y: 0 + p / 2,
      width: g - p,
      height: _ - p,
      borderWidth: p,
      borderColor: b,
      textColor: D,
      font: n.name,
      fontSize: E,
    };
    return {
      normal: L(v, xs(P(P({}, ee), { color: x, textLines: [w.line] }))),
      down: L(v, xs(P(P({}, ee), { color: S, textLines: [T.line] }))),
    };
  },
  nc = function (e, t, n) {
    var r = Zs(t),
      i = Zs(e.acroField),
      a = Ys(t),
      o = Ys(e.acroField),
      s = t.getRectangle(),
      c = t.getAppearanceCharacteristics(),
      l = t.getBorderStyle(),
      u = e.getText() ?? ``,
      d = l?.getWidth() ?? 0,
      f = Ua(c?.getRotation()),
      p = Wa(s, f),
      m = p.width,
      h = p.height,
      g = vs(P(P({}, s), { rotation: f })),
      _ = Bo(0, 0, 0),
      v = qo(c?.getBorderColor()),
      y = qo(c?.getBackgroundColor()),
      b,
      x,
      S = +!e.isCombed(),
      C = {
        x: d + S,
        y: d + S,
        width: m - (d + S) * 2,
        height: h - (d + S) * 2,
      };
    if (e.isMultiline()) {
      var w = Ws(u, {
        alignment: e.getAlignment(),
        fontSize: a ?? o,
        font: n,
        bounds: C,
      });
      ((b = w.lines), (x = w.fontSize));
    } else if (e.isCombed()) {
      var w = Gs(u, {
        fontSize: a ?? o,
        font: n,
        bounds: C,
        cellCount: e.getMaxLength() ?? 0,
      });
      ((b = w.cells), (x = w.fontSize));
    } else {
      var w = Ks(u, {
        alignment: e.getAlignment(),
        fontSize: a ?? o,
        font: n,
        bounds: C,
      });
      ((b = [w.line]), (x = w.fontSize));
    }
    var T = r ?? i ?? _;
    return (
      Qs(r || a !== void 0 ? t : e.acroField, T, n, x),
      L(
        g,
        Cs({
          x: 0 + d / 2,
          y: 0 + d / 2,
          width: m - d,
          height: h - d,
          borderWidth: d ?? 0,
          borderColor: v,
          textColor: T,
          font: n.name,
          fontSize: x,
          color: y,
          textLines: b,
          padding: S,
        }),
      )
    );
  },
  rc = function (e, t, n) {
    var r = Zs(t),
      i = Zs(e.acroField),
      a = Ys(t),
      o = Ys(e.acroField),
      s = t.getRectangle(),
      c = t.getAppearanceCharacteristics(),
      l = t.getBorderStyle(),
      u = e.getSelected()[0] ?? ``,
      d = l?.getWidth() ?? 0,
      f = Ua(c?.getRotation()),
      p = Wa(s, f),
      m = p.width,
      h = p.height,
      g = vs(P(P({}, s), { rotation: f })),
      _ = Bo(0, 0, 0),
      v = qo(c?.getBorderColor()),
      y = qo(c?.getBackgroundColor()),
      b = 1,
      x = {
        x: d + b,
        y: d + b,
        width: m - (d + b) * 2,
        height: h - (d + b) * 2,
      },
      S = Ks(u, { alignment: Ls.Left, fontSize: a ?? o, font: n, bounds: x }),
      C = S.line,
      w = S.fontSize,
      T = r ?? i ?? _;
    return (
      Qs(r || a !== void 0 ? t : e.acroField, T, n, w),
      L(
        g,
        Cs({
          x: 0 + d / 2,
          y: 0 + d / 2,
          width: m - d,
          height: h - d,
          borderWidth: d ?? 0,
          borderColor: v,
          textColor: T,
          font: n.name,
          fontSize: w,
          color: y,
          textLines: [C],
          padding: b,
        }),
      )
    );
  },
  ic = function (e, t, n) {
    var r = Zs(t),
      i = Zs(e.acroField),
      a = Ys(t),
      o = Ys(e.acroField),
      s = t.getRectangle(),
      c = t.getAppearanceCharacteristics(),
      l = t.getBorderStyle()?.getWidth() ?? 0,
      u = Ua(c?.getRotation()),
      d = Wa(s, u),
      f = d.width,
      p = d.height,
      m = vs(P(P({}, s), { rotation: u })),
      h = Bo(0, 0, 0),
      g = qo(c?.getBorderColor()),
      _ = qo(c?.getBackgroundColor()),
      v = e.getOptions(),
      y = e.getSelected();
    e.isSorted() && v.sort();
    for (var b = ``, x = 0, S = v.length; x < S; x++)
      ((b += v[x]),
        x < S - 1 &&
          (b += `
`));
    for (
      var C = 1,
        w = {
          x: l + C,
          y: l + C,
          width: f - (l + C) * 2,
          height: p - (l + C) * 2,
        },
        T = Ws(b, { alignment: Ls.Left, fontSize: a ?? o, font: n, bounds: w }),
        E = T.lines,
        D = T.fontSize,
        ee = T.lineHeight,
        O = [],
        x = 0,
        S = E.length;
      x < S;
      x++
    ) {
      var te = E[x];
      y.includes(te.text) && O.push(x);
    }
    var k = Bo(153 / 255, 193 / 255, 218 / 255),
      A = r ?? i ?? h;
    return (
      Qs(r || a !== void 0 ? t : e.acroField, A, n, D),
      L(
        m,
        ws({
          x: 0 + l / 2,
          y: 0 + l / 2,
          width: f - l,
          height: p - l,
          borderWidth: l ?? 0,
          borderColor: g,
          textColor: A,
          font: n.name,
          fontSize: D,
          color: _,
          textLines: E,
          lineHeight: ee,
          selectedColor: k,
          selectedLines: O,
          padding: C,
        }),
      )
    );
  },
  ac = (function () {
    function e(e, t, n) {
      ((this.alreadyEmbedded = !1),
        U(e, `ref`, [[yr, `PDFRef`]]),
        U(t, `doc`, [[Dc, `PDFDocument`]]),
        U(n, `embedder`, [[Ti, `PDFPageEmbedder`]]),
        (this.ref = e),
        (this.doc = t),
        (this.width = n.width),
        (this.height = n.height),
        (this.embedder = n));
    }
    return (
      (e.prototype.scale = function (e) {
        return (
          U(e, `factor`, [`number`]),
          { width: this.width * e, height: this.height * e }
        );
      }),
      (e.prototype.size = function () {
        return this.scale(1);
      }),
      (e.prototype.embed = function () {
        return F(this, void 0, void 0, function () {
          return I(this, function (e) {
            switch (e.label) {
              case 0:
                return this.alreadyEmbedded
                  ? [3, 2]
                  : [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref,
                      ),
                    ];
              case 1:
                (e.sent(), (this.alreadyEmbedded = !0), (e.label = 2));
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.of = function (t, n, r) {
        return new e(t, n, r);
      }),
      e
    );
  })(),
  oc = (function () {
    function e(e, t, n) {
      ((this.modified = !0),
        U(e, `ref`, [[yr, `PDFRef`]]),
        U(t, `doc`, [[Dc, `PDFDocument`]]),
        U(n, `embedder`, [
          [Jr, `CustomFontEmbedder`],
          [zr, `StandardFontEmbedder`],
        ]),
        (this.ref = e),
        (this.doc = t),
        (this.name = n.fontName),
        (this.embedder = n));
    }
    return (
      (e.prototype.encodeText = function (e) {
        return (
          U(e, `text`, [`string`]),
          (this.modified = !0),
          this.embedder.encodeText(e)
        );
      }),
      (e.prototype.widthOfTextAtSize = function (e, t) {
        return (
          U(e, `text`, [`string`]),
          U(t, `size`, [`number`]),
          this.embedder.widthOfTextAtSize(e, t)
        );
      }),
      (e.prototype.heightAtSize = function (e, t) {
        return (
          U(e, `size`, [`number`]),
          W(t?.descender, `options.descender`, [`boolean`]),
          this.embedder.heightOfFontAtSize(e, { descender: t?.descender ?? !0 })
        );
      }),
      (e.prototype.sizeAtHeight = function (e) {
        return (
          U(e, `height`, [`number`]),
          this.embedder.sizeOfFontAtHeight(e)
        );
      }),
      (e.prototype.getCharacterSet = function () {
        return this.embedder instanceof zr
          ? this.embedder.encoding.supportedCodePoints
          : this.embedder.font.characterSet;
      }),
      (e.prototype.embed = function () {
        return F(this, void 0, void 0, function () {
          return I(this, function (e) {
            switch (e.label) {
              case 0:
                return this.modified
                  ? [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref,
                      ),
                    ]
                  : [3, 2];
              case 1:
                (e.sent(), (this.modified = !1), (e.label = 2));
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.of = function (t, n, r) {
        return new e(t, n, r);
      }),
      e
    );
  })(),
  sc = (function () {
    function e(e, t, n) {
      (U(e, `ref`, [[yr, `PDFRef`]]),
        U(t, `doc`, [[Dc, `PDFDocument`]]),
        U(n, `embedder`, [
          [ti, `JpegEmbedder`],
          [oi, `PngEmbedder`],
        ]),
        (this.ref = e),
        (this.doc = t),
        (this.width = n.width),
        (this.height = n.height),
        (this.embedder = n));
    }
    return (
      (e.prototype.scale = function (e) {
        return (
          U(e, `factor`, [`number`]),
          { width: this.width * e, height: this.height * e }
        );
      }),
      (e.prototype.scaleToFit = function (e, t) {
        (U(e, `width`, [`number`]), U(t, `height`, [`number`]));
        var n = e / this.width,
          r = t / this.height,
          i = Math.min(n, r);
        return this.scale(i);
      }),
      (e.prototype.size = function () {
        return this.scale(1);
      }),
      (e.prototype.embed = function () {
        return F(this, void 0, void 0, function () {
          var e, t, n;
          return I(this, function (r) {
            switch (r.label) {
              case 0:
                return this.embedder
                  ? ((this.embedTask ||=
                      ((e = this),
                      (t = e.doc),
                      (n = e.ref),
                      this.embedder.embedIntoContext(t.context, n))),
                    [4, this.embedTask])
                  : [2];
              case 1:
                return (r.sent(), (this.embedder = void 0), [2]);
            }
          });
        });
      }),
      (e.of = function (t, n, r) {
        return new e(t, n, r);
      }),
      e
    );
  })(),
  cc;
(function (e) {
  ((e[(e.Left = 0)] = `Left`),
    (e[(e.Center = 1)] = `Center`),
    (e[(e.Right = 2)] = `Right`));
})((cc ||= {}));
var lc = function (e) {
    (W(e?.x, `options.x`, [`number`]),
      W(e?.y, `options.y`, [`number`]),
      W(e?.width, `options.width`, [`number`]),
      W(e?.height, `options.height`, [`number`]),
      W(e?.textColor, `options.textColor`, [[Object, `Color`]]),
      W(e?.backgroundColor, `options.backgroundColor`, [[Object, `Color`]]),
      W(e?.borderColor, `options.borderColor`, [[Object, `Color`]]),
      W(e?.borderWidth, `options.borderWidth`, [`number`]),
      W(e?.rotate, `options.rotate`, [[Object, `Rotation`]]));
  },
  uc = (function () {
    function e(e, t, n) {
      (U(e, `acroField`, [[Ri, `PDFAcroTerminal`]]),
        U(t, `ref`, [[yr, `PDFRef`]]),
        U(n, `doc`, [[Dc, `PDFDocument`]]),
        (this.acroField = e),
        (this.ref = t),
        (this.doc = n));
    }
    return (
      (e.prototype.getName = function () {
        return this.acroField.getFullyQualifiedName() ?? ``;
      }),
      (e.prototype.isReadOnly = function () {
        return this.acroField.hasFlag(Hi.ReadOnly);
      }),
      (e.prototype.enableReadOnly = function () {
        this.acroField.setFlagTo(Hi.ReadOnly, !0);
      }),
      (e.prototype.disableReadOnly = function () {
        this.acroField.setFlagTo(Hi.ReadOnly, !1);
      }),
      (e.prototype.isRequired = function () {
        return this.acroField.hasFlag(Hi.Required);
      }),
      (e.prototype.enableRequired = function () {
        this.acroField.setFlagTo(Hi.Required, !0);
      }),
      (e.prototype.disableRequired = function () {
        this.acroField.setFlagTo(Hi.Required, !1);
      }),
      (e.prototype.isExported = function () {
        return !this.acroField.hasFlag(Hi.NoExport);
      }),
      (e.prototype.enableExporting = function () {
        this.acroField.setFlagTo(Hi.NoExport, !1);
      }),
      (e.prototype.disableExporting = function () {
        this.acroField.setFlagTo(Hi.NoExport, !0);
      }),
      (e.prototype.needsAppearancesUpdate = function () {
        throw new Tn(this.constructor.name, `needsAppearancesUpdate`);
      }),
      (e.prototype.defaultUpdateAppearances = function (e) {
        throw new Tn(this.constructor.name, `defaultUpdateAppearances`);
      }),
      (e.prototype.markAsDirty = function () {
        this.doc.getForm().markFieldAsDirty(this.ref);
      }),
      (e.prototype.markAsClean = function () {
        this.doc.getForm().markFieldAsClean(this.ref);
      }),
      (e.prototype.isDirty = function () {
        return this.doc.getForm().fieldIsDirty(this.ref);
      }),
      (e.prototype.createWidget = function (e) {
        var t = e.textColor,
          n = e.backgroundColor,
          r = e.borderColor,
          i = e.borderWidth,
          a = Ha(e.rotate),
          o = e.caption,
          s = e.x,
          c = e.y,
          l = e.width + i,
          u = e.height + i,
          d = !!e.hidden,
          f = e.page;
        vn(a, `degreesAngle`, 90);
        var p = Li.create(this.doc.context, this.ref),
          m = Ga({ x: s, y: c, width: l, height: u }, i, a);
        (p.setRectangle(m), f && p.setP(f));
        var h = p.getOrCreateAppearanceCharacteristics();
        (n && h.setBackgroundColor(Jo(n)),
          h.setRotation(a),
          o && h.setCaptions({ normal: o }),
          r && h.setBorderColor(Jo(r)));
        var g = p.getOrCreateBorderStyle();
        if (
          (i !== void 0 && g.setWidth(i),
          p.setFlagTo(Ma.Print, !0),
          p.setFlagTo(Ma.Hidden, d),
          p.setFlagTo(Ma.Invisible, !1),
          t)
        ) {
          var _ =
            (this.acroField.getDefaultAppearance() ?? ``) +
            `
` +
            Go(t).toString();
          this.acroField.setDefaultAppearance(_);
        }
        return p;
      }),
      (e.prototype.updateWidgetAppearanceWithFont = function (e, t, n) {
        var r = n.normal,
          i = n.rollover,
          a = n.down;
        this.updateWidgetAppearances(e, {
          normal: this.createAppearanceStream(e, r, t),
          rollover: i && this.createAppearanceStream(e, i, t),
          down: a && this.createAppearanceStream(e, a, t),
        });
      }),
      (e.prototype.updateOnOffWidgetAppearance = function (e, t, n) {
        var r = n.normal,
          i = n.rollover,
          a = n.down;
        this.updateWidgetAppearances(e, {
          normal: this.createAppearanceDict(e, r, t),
          rollover: i && this.createAppearanceDict(e, i, t),
          down: a && this.createAppearanceDict(e, a, t),
        });
      }),
      (e.prototype.updateWidgetAppearances = function (e, t) {
        var n = t.normal,
          r = t.rollover,
          i = t.down;
        (e.setNormalAppearance(n),
          r ? e.setRolloverAppearance(r) : e.removeRolloverAppearance(),
          i ? e.setDownAppearance(i) : e.removeDownAppearance());
      }),
      (e.prototype.createAppearanceStream = function (e, t, n) {
        var r,
          i = this.acroField.dict.context,
          a = e.getRectangle(),
          o = a.width,
          s = a.height,
          c = n && { Font: ((r = {}), (r[n.name] = n.ref), r) },
          l = i.formXObject(t, {
            Resources: c,
            BBox: i.obj([0, 0, o, s]),
            Matrix: i.obj([1, 0, 0, 1, 0, 0]),
          });
        return i.register(l);
      }),
      (e.prototype.createImageAppearanceStream = function (e, t, n) {
        var r,
          i = this.acroField.dict.context,
          a = e.getRectangle(),
          o = e.getAppearanceCharacteristics(),
          s = e.getBorderStyle()?.getWidth() ?? 0,
          c = Ua(o?.getRotation()),
          l = vs(P(P({}, a), { rotation: c })),
          u = Wa(a, c),
          d = t.scaleToFit(u.width - s * 2, u.height - s * 2),
          f = {
            x: s,
            y: s,
            width: d.width,
            height: d.height,
            rotate: X(0),
            xSkew: X(0),
            ySkew: X(0),
          };
        n === cc.Center
          ? ((f.x += (u.width - s * 2) / 2 - d.width / 2),
            (f.y += (u.height - s * 2) / 2 - d.height / 2))
          : n === cc.Right &&
            ((f.x = u.width - s - d.width), (f.y = u.height - s - d.height));
        var p = this.doc.context.addRandomSuffix(`Image`, 10),
          m = L(l, cs(p, f)),
          h = { XObject: ((r = {}), (r[p] = t.ref), r) },
          g = i.formXObject(m, {
            Resources: h,
            BBox: i.obj([0, 0, a.width, a.height]),
            Matrix: i.obj([1, 0, 0, 1, 0, 0]),
          });
        return i.register(g);
      }),
      (e.prototype.createAppearanceDict = function (e, t, n) {
        var r = this.acroField.dict.context,
          i = this.createAppearanceStream(e, t.on),
          a = this.createAppearanceStream(e, t.off),
          o = r.obj({});
        return (o.set(n, i), o.set(q.of(`Off`), a), o);
      }),
      e
    );
  })(),
  dc = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (
        U(t, `acroCheckBox`, [[Bi, `PDFAcroCheckBox`]]),
        (i.acroField = t),
        i
      );
    }
    return (
      (t.prototype.check = function () {
        var e = this.acroField.getOnValue() ?? q.of(`Yes`);
        (this.markAsDirty(), this.acroField.setValue(e));
      }),
      (t.prototype.uncheck = function () {
        (this.markAsDirty(), this.acroField.setValue(q.of(`Off`)));
      }),
      (t.prototype.isChecked = function () {
        var e = this.acroField.getOnValue();
        return !!e && e === this.acroField.getValue();
      }),
      (t.prototype.addToPage = function (e, t) {
        (U(e, `page`, [[Ac, `PDFPage`]]),
          lc(t),
          (t ||= {}),
          `textColor` in t || (t.textColor = Bo(0, 0, 0)),
          `backgroundColor` in t || (t.backgroundColor = Bo(1, 1, 1)),
          `borderColor` in t || (t.borderColor = Bo(0, 0, 0)),
          `borderWidth` in t || (t.borderWidth = 1));
        var n = this.createWidget({
            x: t.x ?? 0,
            y: t.y ?? 0,
            width: t.width ?? 50,
            height: t.height ?? 50,
            textColor: t.textColor,
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth ?? 0,
            rotate: t.rotate ?? X(0),
            hidden: t.hidden,
            page: e.ref,
          }),
          r = this.doc.context.register(n.dict);
        (this.acroField.addWidget(r),
          n.setAppearanceState(q.of(`Off`)),
          this.updateWidgetAppearance(n, q.of(`Yes`)),
          e.node.addAnnot(r));
      }),
      (t.prototype.needsAppearancesUpdate = function () {
        for (
          var e = this.acroField.getWidgets(), t = 0, n = e.length;
          t < n;
          t++
        ) {
          var r = e[t],
            i = r.getAppearanceState(),
            a = r.getAppearances()?.normal;
          if (!(a instanceof mr) || (i && !a.has(i))) return !0;
        }
        return !1;
      }),
      (t.prototype.defaultUpdateAppearances = function () {
        this.updateAppearances();
      }),
      (t.prototype.updateAppearances = function (e) {
        W(e, `provider`, [Function]);
        for (
          var t = this.acroField.getWidgets(), n = 0, r = t.length;
          n < r;
          n++
        ) {
          var i = t[n],
            a = i.getOnValue() ?? q.of(`Yes`);
          a && this.updateWidgetAppearance(i, a, e);
        }
        this.markAsClean();
      }),
      (t.prototype.updateWidgetAppearance = function (e, t, n) {
        var r = qs((n ?? $s)(this, e));
        this.updateOnOffWidgetAppearance(e, t, r);
      }),
      (t.of = function (e, n, r) {
        return new t(e, n, r);
      }),
      t
    );
  })(uc),
  fc = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (
        U(t, `acroComboBox`, [[qi, `PDFAcroComboBox`]]),
        (i.acroField = t),
        i
      );
    }
    return (
      (t.prototype.getOptions = function () {
        for (
          var e = this.acroField.getOptions(),
            t = Array(e.length),
            n = 0,
            r = t.length;
          n < r;
          n++
        ) {
          var i = e[n],
            a = i.display,
            o = i.value;
          t[n] = (a ?? o).decodeText();
        }
        return t;
      }),
      (t.prototype.getSelected = function () {
        for (
          var e = this.acroField.getValues(),
            t = Array(e.length),
            n = 0,
            r = e.length;
          n < r;
          n++
        )
          t[n] = e[n].decodeText();
        return t;
      }),
      (t.prototype.setOptions = function (e) {
        U(e, `options`, [Array]);
        for (var t = Array(e.length), n = 0, r = e.length; n < r; n++)
          t[n] = { value: J.fromText(e[n]) };
        this.acroField.setOptions(t);
      }),
      (t.prototype.addOptions = function (e) {
        U(e, `options`, [`string`, Array]);
        for (
          var t = Array.isArray(e) ? e : [e],
            n = this.acroField.getOptions(),
            r = Array(t.length),
            i = 0,
            a = t.length;
          i < a;
          i++
        )
          r[i] = { value: J.fromText(t[i]) };
        this.acroField.setOptions(n.concat(r));
      }),
      (t.prototype.select = function (e, t) {
        (t === void 0 && (t = !1),
          U(e, `options`, [`string`, Array]),
          U(t, `merge`, [`boolean`]));
        var n = Array.isArray(e) ? e : [e],
          r = this.getOptions();
        (n.find(function (e) {
          return !r.includes(e);
        }) && this.enableEditing(),
          this.markAsDirty(),
          (n.length > 1 || (n.length === 1 && t)) && this.enableMultiselect());
        for (var i = Array(n.length), a = 0, o = n.length; a < o; a++)
          i[a] = J.fromText(n[a]);
        if (t) {
          var s = this.acroField.getValues();
          this.acroField.setValues(s.concat(i));
        } else this.acroField.setValues(i);
      }),
      (t.prototype.clear = function () {
        (this.markAsDirty(), this.acroField.setValues([]));
      }),
      (t.prototype.setFontSize = function (e) {
        (bn(e, `fontSize`), this.acroField.setFontSize(e), this.markAsDirty());
      }),
      (t.prototype.isEditable = function () {
        return this.acroField.hasFlag(Gi.Edit);
      }),
      (t.prototype.enableEditing = function () {
        this.acroField.setFlagTo(Gi.Edit, !0);
      }),
      (t.prototype.disableEditing = function () {
        this.acroField.setFlagTo(Gi.Edit, !1);
      }),
      (t.prototype.isSorted = function () {
        return this.acroField.hasFlag(Gi.Sort);
      }),
      (t.prototype.enableSorting = function () {
        this.acroField.setFlagTo(Gi.Sort, !0);
      }),
      (t.prototype.disableSorting = function () {
        this.acroField.setFlagTo(Gi.Sort, !1);
      }),
      (t.prototype.isMultiselect = function () {
        return this.acroField.hasFlag(Gi.MultiSelect);
      }),
      (t.prototype.enableMultiselect = function () {
        this.acroField.setFlagTo(Gi.MultiSelect, !0);
      }),
      (t.prototype.disableMultiselect = function () {
        this.acroField.setFlagTo(Gi.MultiSelect, !1);
      }),
      (t.prototype.isSpellChecked = function () {
        return !this.acroField.hasFlag(Gi.DoNotSpellCheck);
      }),
      (t.prototype.enableSpellChecking = function () {
        this.acroField.setFlagTo(Gi.DoNotSpellCheck, !1);
      }),
      (t.prototype.disableSpellChecking = function () {
        this.acroField.setFlagTo(Gi.DoNotSpellCheck, !0);
      }),
      (t.prototype.isSelectOnClick = function () {
        return this.acroField.hasFlag(Gi.CommitOnSelChange);
      }),
      (t.prototype.enableSelectOnClick = function () {
        this.acroField.setFlagTo(Gi.CommitOnSelChange, !0);
      }),
      (t.prototype.disableSelectOnClick = function () {
        this.acroField.setFlagTo(Gi.CommitOnSelChange, !1);
      }),
      (t.prototype.addToPage = function (e, t) {
        (U(e, `page`, [[Ac, `PDFPage`]]),
          lc(t),
          (t ||= {}),
          `textColor` in t || (t.textColor = Bo(0, 0, 0)),
          `backgroundColor` in t || (t.backgroundColor = Bo(1, 1, 1)),
          `borderColor` in t || (t.borderColor = Bo(0, 0, 0)),
          `borderWidth` in t || (t.borderWidth = 1));
        var n = this.createWidget({
            x: t.x ?? 0,
            y: t.y ?? 0,
            width: t.width ?? 200,
            height: t.height ?? 50,
            textColor: t.textColor,
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth ?? 0,
            rotate: t.rotate ?? X(0),
            hidden: t.hidden,
            page: e.ref,
          }),
          r = this.doc.context.register(n.dict);
        this.acroField.addWidget(r);
        var i = t.font ?? this.doc.getForm().getDefaultFont();
        (this.updateWidgetAppearance(n, i), e.node.addAnnot(r));
      }),
      (t.prototype.needsAppearancesUpdate = function () {
        if (this.isDirty()) return !0;
        for (
          var e = this.acroField.getWidgets(), t = 0, n = e.length;
          t < n;
          t++
        )
          if (!(e[t].getAppearances()?.normal instanceof hr)) return !0;
        return !1;
      }),
      (t.prototype.defaultUpdateAppearances = function (e) {
        (U(e, `font`, [[oc, `PDFFont`]]), this.updateAppearances(e));
      }),
      (t.prototype.updateAppearances = function (e, t) {
        (U(e, `font`, [[oc, `PDFFont`]]), W(t, `provider`, [Function]));
        for (
          var n = this.acroField.getWidgets(), r = 0, i = n.length;
          r < i;
          r++
        ) {
          var a = n[r];
          this.updateWidgetAppearance(a, e, t);
        }
        this.markAsClean();
      }),
      (t.prototype.updateWidgetAppearance = function (e, t, n) {
        var r = qs((n ?? rc)(this, e, t));
        this.updateWidgetAppearanceWithFont(e, t, r);
      }),
      (t.of = function (e, n, r) {
        return new t(e, n, r);
      }),
      t
    );
  })(uc),
  pc = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (
        U(t, `acroListBox`, [[$i, `PDFAcroListBox`]]),
        (i.acroField = t),
        i
      );
    }
    return (
      (t.prototype.getOptions = function () {
        for (
          var e = this.acroField.getOptions(),
            t = Array(e.length),
            n = 0,
            r = t.length;
          n < r;
          n++
        ) {
          var i = e[n],
            a = i.display,
            o = i.value;
          t[n] = (a ?? o).decodeText();
        }
        return t;
      }),
      (t.prototype.getSelected = function () {
        for (
          var e = this.acroField.getValues(),
            t = Array(e.length),
            n = 0,
            r = e.length;
          n < r;
          n++
        )
          t[n] = e[n].decodeText();
        return t;
      }),
      (t.prototype.setOptions = function (e) {
        (U(e, `options`, [Array]), this.markAsDirty());
        for (var t = Array(e.length), n = 0, r = e.length; n < r; n++)
          t[n] = { value: J.fromText(e[n]) };
        this.acroField.setOptions(t);
      }),
      (t.prototype.addOptions = function (e) {
        (U(e, `options`, [`string`, Array]), this.markAsDirty());
        for (
          var t = Array.isArray(e) ? e : [e],
            n = this.acroField.getOptions(),
            r = Array(t.length),
            i = 0,
            a = t.length;
          i < a;
          i++
        )
          r[i] = { value: J.fromText(t[i]) };
        this.acroField.setOptions(n.concat(r));
      }),
      (t.prototype.select = function (e, t) {
        (t === void 0 && (t = !1),
          U(e, `options`, [`string`, Array]),
          U(t, `merge`, [`boolean`]));
        var n = Array.isArray(e) ? e : [e];
        (dn(n, `option`, this.getOptions()),
          this.markAsDirty(),
          (n.length > 1 || (n.length === 1 && t)) && this.enableMultiselect());
        for (var r = Array(n.length), i = 0, a = n.length; i < a; i++)
          r[i] = J.fromText(n[i]);
        if (t) {
          var o = this.acroField.getValues();
          this.acroField.setValues(o.concat(r));
        } else this.acroField.setValues(r);
      }),
      (t.prototype.clear = function () {
        (this.markAsDirty(), this.acroField.setValues([]));
      }),
      (t.prototype.setFontSize = function (e) {
        (bn(e, `fontSize`), this.acroField.setFontSize(e), this.markAsDirty());
      }),
      (t.prototype.isSorted = function () {
        return this.acroField.hasFlag(Gi.Sort);
      }),
      (t.prototype.enableSorting = function () {
        this.acroField.setFlagTo(Gi.Sort, !0);
      }),
      (t.prototype.disableSorting = function () {
        this.acroField.setFlagTo(Gi.Sort, !1);
      }),
      (t.prototype.isMultiselect = function () {
        return this.acroField.hasFlag(Gi.MultiSelect);
      }),
      (t.prototype.enableMultiselect = function () {
        this.acroField.setFlagTo(Gi.MultiSelect, !0);
      }),
      (t.prototype.disableMultiselect = function () {
        this.acroField.setFlagTo(Gi.MultiSelect, !1);
      }),
      (t.prototype.isSelectOnClick = function () {
        return this.acroField.hasFlag(Gi.CommitOnSelChange);
      }),
      (t.prototype.enableSelectOnClick = function () {
        this.acroField.setFlagTo(Gi.CommitOnSelChange, !0);
      }),
      (t.prototype.disableSelectOnClick = function () {
        this.acroField.setFlagTo(Gi.CommitOnSelChange, !1);
      }),
      (t.prototype.addToPage = function (e, t) {
        (U(e, `page`, [[Ac, `PDFPage`]]),
          lc(t),
          (t ||= {}),
          `textColor` in t || (t.textColor = Bo(0, 0, 0)),
          `backgroundColor` in t || (t.backgroundColor = Bo(1, 1, 1)),
          `borderColor` in t || (t.borderColor = Bo(0, 0, 0)),
          `borderWidth` in t || (t.borderWidth = 1));
        var n = this.createWidget({
            x: t.x ?? 0,
            y: t.y ?? 0,
            width: t.width ?? 200,
            height: t.height ?? 100,
            textColor: t.textColor,
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth ?? 0,
            rotate: t.rotate ?? X(0),
            hidden: t.hidden,
            page: e.ref,
          }),
          r = this.doc.context.register(n.dict);
        this.acroField.addWidget(r);
        var i = t.font ?? this.doc.getForm().getDefaultFont();
        (this.updateWidgetAppearance(n, i), e.node.addAnnot(r));
      }),
      (t.prototype.needsAppearancesUpdate = function () {
        if (this.isDirty()) return !0;
        for (
          var e = this.acroField.getWidgets(), t = 0, n = e.length;
          t < n;
          t++
        )
          if (!(e[t].getAppearances()?.normal instanceof hr)) return !0;
        return !1;
      }),
      (t.prototype.defaultUpdateAppearances = function (e) {
        (U(e, `font`, [[oc, `PDFFont`]]), this.updateAppearances(e));
      }),
      (t.prototype.updateAppearances = function (e, t) {
        (U(e, `font`, [[oc, `PDFFont`]]), W(t, `provider`, [Function]));
        for (
          var n = this.acroField.getWidgets(), r = 0, i = n.length;
          r < i;
          r++
        ) {
          var a = n[r];
          this.updateWidgetAppearance(a, e, t);
        }
        this.markAsClean();
      }),
      (t.prototype.updateWidgetAppearance = function (e, t, n) {
        var r = qs((n ?? ic)(this, e, t));
        this.updateWidgetAppearanceWithFont(e, t, r);
      }),
      (t.of = function (e, n, r) {
        return new t(e, n, r);
      }),
      t
    );
  })(uc),
  mc = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (
        U(t, `acroRadioButton`, [[Qi, `PDFAcroRadioButton`]]),
        (i.acroField = t),
        i
      );
    }
    return (
      (t.prototype.getOptions = function () {
        var e = this.acroField.getExportValues();
        if (e) {
          for (var t = Array(e.length), n = 0, r = e.length; n < r; n++)
            t[n] = e[n].decodeText();
          return t;
        }
        for (
          var i = this.acroField.getOnValues(),
            a = Array(i.length),
            n = 0,
            r = a.length;
          n < r;
          n++
        )
          a[n] = i[n].decodeText();
        return a;
      }),
      (t.prototype.getSelected = function () {
        var e = this.acroField.getValue();
        if (e !== q.of(`Off`)) {
          var t = this.acroField.getExportValues();
          if (t) {
            for (
              var n = this.acroField.getOnValues(), r = 0, i = n.length;
              r < i;
              r++
            )
              if (n[r] === e) return t[r].decodeText();
          }
          return e.decodeText();
        }
      }),
      (t.prototype.select = function (e) {
        (U(e, `option`, [`string`]),
          ln(e, `option`, this.getOptions()),
          this.markAsDirty());
        var t = this.acroField.getOnValues(),
          n = this.acroField.getExportValues();
        if (n)
          for (var r = 0, i = n.length; r < i; r++)
            n[r].decodeText() === e && this.acroField.setValue(t[r]);
        else
          for (var r = 0, i = t.length; r < i; r++) {
            var a = t[r];
            a.decodeText() === e && this.acroField.setValue(a);
          }
      }),
      (t.prototype.clear = function () {
        (this.markAsDirty(), this.acroField.setValue(q.of(`Off`)));
      }),
      (t.prototype.isOffToggleable = function () {
        return !this.acroField.hasFlag(Ui.NoToggleToOff);
      }),
      (t.prototype.enableOffToggling = function () {
        this.acroField.setFlagTo(Ui.NoToggleToOff, !1);
      }),
      (t.prototype.disableOffToggling = function () {
        this.acroField.setFlagTo(Ui.NoToggleToOff, !0);
      }),
      (t.prototype.isMutuallyExclusive = function () {
        return !this.acroField.hasFlag(Ui.RadiosInUnison);
      }),
      (t.prototype.enableMutualExclusion = function () {
        this.acroField.setFlagTo(Ui.RadiosInUnison, !1);
      }),
      (t.prototype.disableMutualExclusion = function () {
        this.acroField.setFlagTo(Ui.RadiosInUnison, !0);
      }),
      (t.prototype.addOptionToPage = function (e, t, n) {
        (U(e, `option`, [`string`]), U(t, `page`, [[Ac, `PDFPage`]]), lc(n));
        var r = this.createWidget({
            x: n?.x ?? 0,
            y: n?.y ?? 0,
            width: n?.width ?? 50,
            height: n?.height ?? 50,
            textColor: n?.textColor ?? Bo(0, 0, 0),
            backgroundColor: n?.backgroundColor ?? Bo(1, 1, 1),
            borderColor: n?.borderColor ?? Bo(0, 0, 0),
            borderWidth: n?.borderWidth ?? 1,
            rotate: n?.rotate ?? X(0),
            hidden: n?.hidden,
            page: t.ref,
          }),
          i = this.doc.context.register(r.dict),
          a = this.acroField.addWidgetWithOpt(
            i,
            J.fromText(e),
            !this.isMutuallyExclusive(),
          );
        (r.setAppearanceState(q.of(`Off`)),
          this.updateWidgetAppearance(r, a),
          t.node.addAnnot(i));
      }),
      (t.prototype.needsAppearancesUpdate = function () {
        for (
          var e = this.acroField.getWidgets(), t = 0, n = e.length;
          t < n;
          t++
        ) {
          var r = e[t],
            i = r.getAppearanceState(),
            a = r.getAppearances()?.normal;
          if (!(a instanceof mr) || (i && !a.has(i))) return !0;
        }
        return !1;
      }),
      (t.prototype.defaultUpdateAppearances = function () {
        this.updateAppearances();
      }),
      (t.prototype.updateAppearances = function (e) {
        W(e, `provider`, [Function]);
        for (
          var t = this.acroField.getWidgets(), n = 0, r = t.length;
          n < r;
          n++
        ) {
          var i = t[n],
            a = i.getOnValue();
          a && this.updateWidgetAppearance(i, a, e);
        }
      }),
      (t.prototype.updateWidgetAppearance = function (e, t, n) {
        var r = qs((n ?? ec)(this, e));
        this.updateOnOffWidgetAppearance(e, t, r);
      }),
      (t.of = function (e, n, r) {
        return new t(e, n, r);
      }),
      t
    );
  })(uc),
  hc = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (
        U(t, `acroSignature`, [[Yi, `PDFAcroSignature`]]),
        (i.acroField = t),
        i
      );
    }
    return (
      (t.prototype.needsAppearancesUpdate = function () {
        return !1;
      }),
      (t.of = function (e, n, r) {
        return new t(e, n, r);
      }),
      t
    );
  })(uc),
  gc = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (U(t, `acroText`, [[Xi, `PDFAcroText`]]), (i.acroField = t), i);
    }
    return (
      (t.prototype.getText = function () {
        var e = this.acroField.getValue();
        if (!e && this.isRichFormatted()) throw new Ns(this.getName());
        return e?.decodeText();
      }),
      (t.prototype.setText = function (e) {
        W(e, `text`, [`string`]);
        var t = this.getMaxLength();
        if (t !== void 0 && e && e.length > t)
          throw new Fs(e.length, t, this.getName());
        (this.markAsDirty(),
          this.disableRichFormatting(),
          e
            ? this.acroField.setValue(J.fromText(e))
            : this.acroField.removeValue());
      }),
      (t.prototype.getAlignment = function () {
        var e = this.acroField.getQuadding();
        return e === 0
          ? Ls.Left
          : e === 1
            ? Ls.Center
            : e === 2
              ? Ls.Right
              : Ls.Left;
      }),
      (t.prototype.setAlignment = function (e) {
        (ln(e, `alignment`, Ls),
          this.markAsDirty(),
          this.acroField.setQuadding(e));
      }),
      (t.prototype.getMaxLength = function () {
        return this.acroField.getMaxLength();
      }),
      (t.prototype.setMaxLength = function (e) {
        if (
          (_n(e, `maxLength`, 0, 2 ** 53 - 1), this.markAsDirty(), e === void 0)
        )
          this.acroField.removeMaxLength();
        else {
          var t = this.getText();
          if (t && t.length > e) throw new Is(t.length, e, this.getName());
          this.acroField.setMaxLength(e);
        }
      }),
      (t.prototype.removeMaxLength = function () {
        (this.markAsDirty(), this.acroField.removeMaxLength());
      }),
      (t.prototype.setImage = function (e) {
        for (
          var t = this.getAlignment(),
            n =
              t === Ls.Center ? cc.Center : t === Ls.Right ? cc.Right : cc.Left,
            r = this.acroField.getWidgets(),
            i = 0,
            a = r.length;
          i < a;
          i++
        ) {
          var o = r[i],
            s = this.createImageAppearanceStream(o, e, n);
          this.updateWidgetAppearances(o, { normal: s });
        }
        this.markAsClean();
      }),
      (t.prototype.setFontSize = function (e) {
        (bn(e, `fontSize`), this.acroField.setFontSize(e), this.markAsDirty());
      }),
      (t.prototype.isMultiline = function () {
        return this.acroField.hasFlag(Wi.Multiline);
      }),
      (t.prototype.enableMultiline = function () {
        (this.markAsDirty(), this.acroField.setFlagTo(Wi.Multiline, !0));
      }),
      (t.prototype.disableMultiline = function () {
        (this.markAsDirty(), this.acroField.setFlagTo(Wi.Multiline, !1));
      }),
      (t.prototype.isPassword = function () {
        return this.acroField.hasFlag(Wi.Password);
      }),
      (t.prototype.enablePassword = function () {
        this.acroField.setFlagTo(Wi.Password, !0);
      }),
      (t.prototype.disablePassword = function () {
        this.acroField.setFlagTo(Wi.Password, !1);
      }),
      (t.prototype.isFileSelector = function () {
        return this.acroField.hasFlag(Wi.FileSelect);
      }),
      (t.prototype.enableFileSelection = function () {
        this.acroField.setFlagTo(Wi.FileSelect, !0);
      }),
      (t.prototype.disableFileSelection = function () {
        this.acroField.setFlagTo(Wi.FileSelect, !1);
      }),
      (t.prototype.isSpellChecked = function () {
        return !this.acroField.hasFlag(Wi.DoNotSpellCheck);
      }),
      (t.prototype.enableSpellChecking = function () {
        this.acroField.setFlagTo(Wi.DoNotSpellCheck, !1);
      }),
      (t.prototype.disableSpellChecking = function () {
        this.acroField.setFlagTo(Wi.DoNotSpellCheck, !0);
      }),
      (t.prototype.isScrollable = function () {
        return !this.acroField.hasFlag(Wi.DoNotScroll);
      }),
      (t.prototype.enableScrolling = function () {
        this.acroField.setFlagTo(Wi.DoNotScroll, !1);
      }),
      (t.prototype.disableScrolling = function () {
        this.acroField.setFlagTo(Wi.DoNotScroll, !0);
      }),
      (t.prototype.isCombed = function () {
        return (
          this.acroField.hasFlag(Wi.Comb) &&
          !this.isMultiline() &&
          !this.isPassword() &&
          !this.isFileSelector() &&
          this.getMaxLength() !== void 0
        );
      }),
      (t.prototype.enableCombing = function () {
        (this.getMaxLength() === void 0 &&
          console.warn(
            `PDFTextFields must have a max length in order to be combed`,
          ),
          this.markAsDirty(),
          this.disableMultiline(),
          this.disablePassword(),
          this.disableFileSelection(),
          this.acroField.setFlagTo(Wi.Comb, !0));
      }),
      (t.prototype.disableCombing = function () {
        (this.markAsDirty(), this.acroField.setFlagTo(Wi.Comb, !1));
      }),
      (t.prototype.isRichFormatted = function () {
        return this.acroField.hasFlag(Wi.RichText);
      }),
      (t.prototype.enableRichFormatting = function () {
        this.acroField.setFlagTo(Wi.RichText, !0);
      }),
      (t.prototype.disableRichFormatting = function () {
        this.acroField.setFlagTo(Wi.RichText, !1);
      }),
      (t.prototype.addToPage = function (e, t) {
        (U(e, `page`, [[Ac, `PDFPage`]]),
          lc(t),
          (t ||= {}),
          `textColor` in t || (t.textColor = Bo(0, 0, 0)),
          `backgroundColor` in t || (t.backgroundColor = Bo(1, 1, 1)),
          `borderColor` in t || (t.borderColor = Bo(0, 0, 0)),
          `borderWidth` in t || (t.borderWidth = 1));
        var n = this.createWidget({
            x: t.x ?? 0,
            y: t.y ?? 0,
            width: t.width ?? 200,
            height: t.height ?? 50,
            textColor: t.textColor,
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth ?? 0,
            rotate: t.rotate ?? X(0),
            hidden: t.hidden,
            page: e.ref,
          }),
          r = this.doc.context.register(n.dict);
        this.acroField.addWidget(r);
        var i = t.font ?? this.doc.getForm().getDefaultFont();
        (this.updateWidgetAppearance(n, i), e.node.addAnnot(r));
      }),
      (t.prototype.needsAppearancesUpdate = function () {
        if (this.isDirty()) return !0;
        for (
          var e = this.acroField.getWidgets(), t = 0, n = e.length;
          t < n;
          t++
        )
          if (!(e[t].getAppearances()?.normal instanceof hr)) return !0;
        return !1;
      }),
      (t.prototype.defaultUpdateAppearances = function (e) {
        (U(e, `font`, [[oc, `PDFFont`]]), this.updateAppearances(e));
      }),
      (t.prototype.updateAppearances = function (e, t) {
        (U(e, `font`, [[oc, `PDFFont`]]), W(t, `provider`, [Function]));
        for (
          var n = this.acroField.getWidgets(), r = 0, i = n.length;
          r < i;
          r++
        ) {
          var a = n[r];
          this.updateWidgetAppearance(a, e, t);
        }
        this.markAsClean();
      }),
      (t.prototype.updateWidgetAppearance = function (e, t, n) {
        var r = qs((n ?? nc)(this, e, t));
        this.updateWidgetAppearanceWithFont(e, t, r);
      }),
      (t.of = function (e, n, r) {
        return new t(e, n, r);
      }),
      t
    );
  })(uc),
  _c;
(function (e) {
  ((e.Courier = `Courier`),
    (e.CourierBold = `Courier-Bold`),
    (e.CourierOblique = `Courier-Oblique`),
    (e.CourierBoldOblique = `Courier-BoldOblique`),
    (e.Helvetica = `Helvetica`),
    (e.HelveticaBold = `Helvetica-Bold`),
    (e.HelveticaOblique = `Helvetica-Oblique`),
    (e.HelveticaBoldOblique = `Helvetica-BoldOblique`),
    (e.TimesRoman = `Times-Roman`),
    (e.TimesRomanBold = `Times-Bold`),
    (e.TimesRomanItalic = `Times-Italic`),
    (e.TimesRomanBoldItalic = `Times-BoldItalic`),
    (e.Symbol = `Symbol`),
    (e.ZapfDingbats = `ZapfDingbats`));
})((_c ||= {}));
var vc = (function () {
    function e(e, t) {
      var n = this;
      ((this.embedDefaultFont = function () {
        return n.doc.embedStandardFont(_c.Helvetica);
      }),
        U(e, `acroForm`, [[la, `PDFAcroForm`]]),
        U(t, `doc`, [[Dc, `PDFDocument`]]),
        (this.acroForm = e),
        (this.doc = t),
        (this.dirtyFields = new Set()),
        (this.defaultFontCache = wn.populatedBy(this.embedDefaultFont)));
    }
    return (
      (e.prototype.hasXFA = function () {
        return this.acroForm.dict.has(q.of(`XFA`));
      }),
      (e.prototype.deleteXFA = function () {
        this.acroForm.dict.delete(q.of(`XFA`));
      }),
      (e.prototype.getFields = function () {
        for (
          var e = this.acroForm.getAllFields(), t = [], n = 0, r = e.length;
          n < r;
          n++
        ) {
          var i = e[n],
            a = i[0],
            o = i[1],
            s = yc(a, o, this.doc);
          s && t.push(s);
        }
        return t;
      }),
      (e.prototype.getFieldMaybe = function (e) {
        U(e, `name`, [`string`]);
        for (var t = this.getFields(), n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          if (i.getName() === e) return i;
        }
      }),
      (e.prototype.getField = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getFieldMaybe(e);
        if (t) return t;
        throw new ks(e);
      }),
      (e.prototype.getButton = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getField(e);
        if (t instanceof jc) return t;
        throw new As(e, jc, t);
      }),
      (e.prototype.getCheckBox = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getField(e);
        if (t instanceof dc) return t;
        throw new As(e, dc, t);
      }),
      (e.prototype.getDropdown = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getField(e);
        if (t instanceof fc) return t;
        throw new As(e, fc, t);
      }),
      (e.prototype.getOptionList = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getField(e);
        if (t instanceof pc) return t;
        throw new As(e, pc, t);
      }),
      (e.prototype.getRadioGroup = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getField(e);
        if (t instanceof mc) return t;
        throw new As(e, mc, t);
      }),
      (e.prototype.getSignature = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getField(e);
        if (t instanceof hc) return t;
        throw new As(e, hc, t);
      }),
      (e.prototype.getTextField = function (e) {
        U(e, `name`, [`string`]);
        var t = this.getField(e);
        if (t instanceof gc) return t;
        throw new As(e, gc, t);
      }),
      (e.prototype.createButton = function (e) {
        U(e, `name`, [`string`]);
        var t = bc(e),
          n = this.findOrCreateNonTerminals(t.nonTerminal),
          r = Zi.create(this.doc.context);
        return (
          r.setPartialName(t.terminal),
          xc(n, [r, r.ref], t.terminal),
          jc.of(r, r.ref, this.doc)
        );
      }),
      (e.prototype.createCheckBox = function (e) {
        U(e, `name`, [`string`]);
        var t = bc(e),
          n = this.findOrCreateNonTerminals(t.nonTerminal),
          r = Bi.create(this.doc.context);
        return (
          r.setPartialName(t.terminal),
          xc(n, [r, r.ref], t.terminal),
          dc.of(r, r.ref, this.doc)
        );
      }),
      (e.prototype.createDropdown = function (e) {
        U(e, `name`, [`string`]);
        var t = bc(e),
          n = this.findOrCreateNonTerminals(t.nonTerminal),
          r = qi.create(this.doc.context);
        return (
          r.setPartialName(t.terminal),
          xc(n, [r, r.ref], t.terminal),
          fc.of(r, r.ref, this.doc)
        );
      }),
      (e.prototype.createOptionList = function (e) {
        U(e, `name`, [`string`]);
        var t = bc(e),
          n = this.findOrCreateNonTerminals(t.nonTerminal),
          r = $i.create(this.doc.context);
        return (
          r.setPartialName(t.terminal),
          xc(n, [r, r.ref], t.terminal),
          pc.of(r, r.ref, this.doc)
        );
      }),
      (e.prototype.createRadioGroup = function (e) {
        U(e, `name`, [`string`]);
        var t = bc(e),
          n = this.findOrCreateNonTerminals(t.nonTerminal),
          r = Qi.create(this.doc.context);
        return (
          r.setPartialName(t.terminal),
          xc(n, [r, r.ref], t.terminal),
          mc.of(r, r.ref, this.doc)
        );
      }),
      (e.prototype.createTextField = function (e) {
        U(e, `name`, [`string`]);
        var t = bc(e),
          n = this.findOrCreateNonTerminals(t.nonTerminal),
          r = Xi.create(this.doc.context);
        return (
          r.setPartialName(t.terminal),
          xc(n, [r, r.ref], t.terminal),
          gc.of(r, r.ref, this.doc)
        );
      }),
      (e.prototype.flatten = function (e) {
        (e === void 0 && (e = { updateFieldAppearances: !0 }),
          e.updateFieldAppearances && this.updateFieldAppearances());
        for (var t = this.getFields(), n = 0, r = t.length; n < r; n++) {
          for (
            var i = t[n], a = i.acroField.getWidgets(), o = 0, s = a.length;
            o < s;
            o++
          ) {
            var c = a[o],
              l = this.findWidgetPage(c),
              u = this.findWidgetAppearanceRef(i, c),
              d = l.node.newXObject(`FlatWidget`, u),
              f = c.getRectangle(),
              p = L([so(), Za(f.x, f.y)], vs(P(P({}, f), { rotation: 0 })), [
                ko(d),
                co(),
              ]).filter(Boolean);
            l.pushOperators.apply(l, p);
          }
          this.removeField(i);
        }
      }),
      (e.prototype.removeField = function (e) {
        for (
          var t = e.acroField.getWidgets(), n = new Set(), r = 0, i = t.length;
          r < i;
          r++
        ) {
          var a = t[r],
            o = this.findWidgetAppearanceRef(e, a),
            s = this.findWidgetPage(a);
          (n.add(s), s.node.removeAnnot(o));
        }
        (n.forEach(function (t) {
          return t.node.removeAnnot(e.ref);
        }),
          this.acroForm.removeField(e.acroField));
        for (
          var c = e.acroField.normalizedEntries().Kids, l = c.size(), u = 0;
          u < l;
          u++
        ) {
          var d = c.get(u);
          d instanceof yr && this.doc.context.delete(d);
        }
        this.doc.context.delete(e.ref);
      }),
      (e.prototype.updateFieldAppearances = function (e) {
        (W(e, `font`, [[oc, `PDFFont`]]), (e ??= this.getDefaultFont()));
        for (var t = this.getFields(), n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          i.needsAppearancesUpdate() && i.defaultUpdateAppearances(e);
        }
      }),
      (e.prototype.markFieldAsDirty = function (e) {
        (W(e, `fieldRef`, [[yr, `PDFRef`]]), this.dirtyFields.add(e));
      }),
      (e.prototype.markFieldAsClean = function (e) {
        (W(e, `fieldRef`, [[yr, `PDFRef`]]), this.dirtyFields.delete(e));
      }),
      (e.prototype.fieldIsDirty = function (e) {
        return (W(e, `fieldRef`, [[yr, `PDFRef`]]), this.dirtyFields.has(e));
      }),
      (e.prototype.getDefaultFont = function () {
        return this.defaultFontCache.access();
      }),
      (e.prototype.findWidgetPage = function (e) {
        var t = e.P(),
          n = this.doc.getPages().find(function (e) {
            return e.ref === t;
          });
        if (n === void 0) {
          var r = this.doc.context.getObjectRef(e.dict);
          if (r === void 0) throw Error(`Could not find PDFRef for PDFObject`);
          if (((n = this.doc.findPageForAnnotationRef(r)), n === void 0))
            throw Error(`Could not find page for PDFRef ` + r);
        }
        return n;
      }),
      (e.prototype.findWidgetAppearanceRef = function (e, t) {
        var n = t.getNormalAppearance();
        if (n instanceof mr && (e instanceof dc || e instanceof mc)) {
          var r = e.acroField.getValue(),
            i = n.get(r) ?? n.get(q.of(`Off`));
          i instanceof yr && (n = i);
        }
        if (!(n instanceof yr)) {
          var a = e.getName();
          throw Error(`Failed to extract appearance ref for: ` + a);
        }
        return n;
      }),
      (e.prototype.findOrCreateNonTerminals = function (e) {
        for (var t = [this.acroForm], n = 0, r = e.length; n < r; n++) {
          var i = e[n];
          if (!i) throw new Ms(i);
          var a = t[0],
            o = t[1],
            s = this.findNonTerminal(i, a);
          if (s) t = s;
          else {
            var c = Ji.create(this.doc.context);
            (c.setPartialName(i), c.setParent(o));
            var l = this.doc.context.register(c.dict);
            (a.addField(l), (t = [c, l]));
          }
        }
        return t;
      }),
      (e.prototype.findNonTerminal = function (e, t) {
        for (
          var n = t instanceof la ? this.acroForm.getFields() : ea(t.Kids()),
            r = 0,
            i = n.length;
          r < i;
          r++
        ) {
          var a = n[r],
            o = a[0],
            s = a[1];
          if (o.getPartialName() === e) {
            if (o instanceof Ji) return [o, s];
            throw new js(e);
          }
        }
      }),
      (e.of = function (t, n) {
        return new e(t, n);
      }),
      e
    );
  })(),
  yc = function (e, t, n) {
    if (e instanceof Zi) return jc.of(e, t, n);
    if (e instanceof Bi) return dc.of(e, t, n);
    if (e instanceof qi) return fc.of(e, t, n);
    if (e instanceof $i) return pc.of(e, t, n);
    if (e instanceof Xi) return gc.of(e, t, n);
    if (e instanceof Qi) return mc.of(e, t, n);
    if (e instanceof Yi) return hc.of(e, t, n);
  },
  bc = function (e) {
    if (e.length === 0)
      throw Error(`PDF field names must not be empty strings`);
    for (var t = e.split(`.`), n = 0, r = t.length; n < r; n++)
      if (t[n] === ``)
        throw Error(
          `Periods in PDF field names must be separated by at least one character: "` +
            e +
            `"`,
        );
    return t.length === 1
      ? { nonTerminal: [], terminal: t[0] }
      : { nonTerminal: t.slice(0, t.length - 1), terminal: t[t.length - 1] };
  },
  xc = function (e, t, n) {
    for (
      var r = e[0],
        i = e[1],
        a = t[0],
        o = t[1],
        s = r.normalizedEntries(),
        c = ea((`Kids` in s) ? s.Kids : s.Fields),
        l = 0,
        u = c.length;
      l < u;
      l++
    )
      if (c[l][0].getPartialName() === n) throw new js(n);
    (r.addField(o), a.setParent(i));
  },
  Sc = {
    "4A0": [4767.87, 6740.79],
    "2A0": [3370.39, 4767.87],
    A0: [2383.94, 3370.39],
    A1: [1683.78, 2383.94],
    A2: [1190.55, 1683.78],
    A3: [841.89, 1190.55],
    A4: [595.28, 841.89],
    A5: [419.53, 595.28],
    A6: [297.64, 419.53],
    A7: [209.76, 297.64],
    A8: [147.4, 209.76],
    A9: [104.88, 147.4],
    A10: [73.7, 104.88],
    B0: [2834.65, 4008.19],
    B1: [2004.09, 2834.65],
    B2: [1417.32, 2004.09],
    B3: [1000.63, 1417.32],
    B4: [708.66, 1000.63],
    B5: [498.9, 708.66],
    B6: [354.33, 498.9],
    B7: [249.45, 354.33],
    B8: [175.75, 249.45],
    B9: [124.72, 175.75],
    B10: [87.87, 124.72],
    C0: [2599.37, 3676.54],
    C1: [1836.85, 2599.37],
    C2: [1298.27, 1836.85],
    C3: [918.43, 1298.27],
    C4: [649.13, 918.43],
    C5: [459.21, 649.13],
    C6: [323.15, 459.21],
    C7: [229.61, 323.15],
    C8: [161.57, 229.61],
    C9: [113.39, 161.57],
    C10: [79.37, 113.39],
    RA0: [2437.8, 3458.27],
    RA1: [1729.13, 2437.8],
    RA2: [1218.9, 1729.13],
    RA3: [864.57, 1218.9],
    RA4: [609.45, 864.57],
    SRA0: [2551.18, 3628.35],
    SRA1: [1814.17, 2551.18],
    SRA2: [1275.59, 1814.17],
    SRA3: [907.09, 1275.59],
    SRA4: [637.8, 907.09],
    Executive: [521.86, 756],
    Folio: [612, 936],
    Legal: [612, 1008],
    Letter: [612, 792],
    Tabloid: [792, 1224],
  },
  Cc;
(function (e) {
  ((e[(e.Fastest = 1 / 0)] = `Fastest`),
    (e[(e.Fast = 1500)] = `Fast`),
    (e[(e.Medium = 500)] = `Medium`),
    (e[(e.Slow = 100)] = `Slow`));
})((Cc ||= {}));
var wc = (function () {
    function e(e, t, n) {
      ((this.alreadyEmbedded = !1),
        (this.ref = e),
        (this.doc = t),
        (this.embedder = n));
    }
    return (
      (e.prototype.embed = function () {
        return F(this, void 0, void 0, function () {
          var e, t, n, r, i;
          return I(this, function (a) {
            switch (a.label) {
              case 0:
                return this.alreadyEmbedded
                  ? [3, 2]
                  : [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref,
                      ),
                    ];
              case 1:
                ((e = a.sent()),
                  this.doc.catalog.has(q.of(`Names`)) ||
                    this.doc.catalog.set(
                      q.of(`Names`),
                      this.doc.context.obj({}),
                    ),
                  (t = this.doc.catalog.lookup(q.of(`Names`), mr)),
                  t.has(q.of(`EmbeddedFiles`)) ||
                    t.set(q.of(`EmbeddedFiles`), this.doc.context.obj({})),
                  (n = t.lookup(q.of(`EmbeddedFiles`), mr)),
                  n.has(q.of(`Names`)) ||
                    n.set(q.of(`Names`), this.doc.context.obj([])),
                  (r = n.lookup(q.of(`Names`), tr)),
                  r.push(J.fromText(this.embedder.fileName)),
                  r.push(e),
                  this.doc.catalog.has(q.of(`AF`)) ||
                    this.doc.catalog.set(q.of(`AF`), this.doc.context.obj([])),
                  (i = this.doc.catalog.lookup(q.of(`AF`), tr)),
                  i.push(e),
                  (this.alreadyEmbedded = !0),
                  (a.label = 2));
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.of = function (t, n, r) {
        return new e(t, n, r);
      }),
      e
    );
  })(),
  Tc = (function () {
    function e(e, t, n) {
      ((this.alreadyEmbedded = !1),
        (this.ref = e),
        (this.doc = t),
        (this.embedder = n));
    }
    return (
      (e.prototype.embed = function () {
        return F(this, void 0, void 0, function () {
          var e, t, n, r, i, a, o;
          return I(this, function (s) {
            switch (s.label) {
              case 0:
                return this.alreadyEmbedded
                  ? [3, 2]
                  : ((e = this.doc),
                    (t = e.catalog),
                    (n = e.context),
                    [
                      4,
                      this.embedder.embedIntoContext(
                        this.doc.context,
                        this.ref,
                      ),
                    ]);
              case 1:
                ((r = s.sent()),
                  t.has(q.of(`Names`)) || t.set(q.of(`Names`), n.obj({})),
                  (i = t.lookup(q.of(`Names`), mr)),
                  i.has(q.of(`JavaScript`)) ||
                    i.set(q.of(`JavaScript`), n.obj({})),
                  (a = i.lookup(q.of(`JavaScript`), mr)),
                  a.has(q.of(`Names`)) || a.set(q.of(`Names`), n.obj([])),
                  (o = a.lookup(q.of(`Names`), tr)),
                  o.push(J.fromText(this.embedder.scriptName)),
                  o.push(r),
                  (this.alreadyEmbedded = !0),
                  (s.label = 2));
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.of = function (t, n, r) {
        return new e(t, n, r);
      }),
      e
    );
  })(),
  Ec = (function () {
    function e(e, t) {
      ((this.script = e), (this.scriptName = t));
    }
    return (
      (e.for = function (t, n) {
        return new e(t, n);
      }),
      (e.prototype.embedIntoContext = function (e, t) {
        return F(this, void 0, void 0, function () {
          var n;
          return I(this, function (r) {
            return (
              (n = e.obj({
                Type: `Action`,
                S: `JavaScript`,
                JS: J.fromText(this.script),
              })),
              t ? (e.assign(t, n), [2, t]) : [2, e.register(n)]
            );
          });
        });
      }),
      e
    );
  })(),
  Dc = (function () {
    function e(e, t, n) {
      var r = this;
      if (
        ((this.defaultWordBreaks = [` `]),
        (this.computePages = function () {
          var e = [];
          return (
            r.catalog.Pages().traverse(function (t, n) {
              if (t instanceof Or) {
                var i = r.pageMap.get(t);
                (i || ((i = Ac.of(t, n, r)), r.pageMap.set(t, i)), e.push(i));
              }
            }),
            e
          );
        }),
        (this.getOrCreateForm = function () {
          var e = r.catalog.getOrCreateAcroForm();
          return vc.of(e, r);
        }),
        U(e, `context`, [[Dr, `PDFContext`]]),
        U(t, `ignoreEncryption`, [`boolean`]),
        (this.context = e),
        (this.catalog = e.lookup(e.trailerInfo.Root)),
        (this.isEncrypted = !!e.lookup(e.trailerInfo.Encrypt)),
        (this.pageCache = wn.populatedBy(this.computePages)),
        (this.pageMap = new Map()),
        (this.formCache = wn.populatedBy(this.getOrCreateForm)),
        (this.fonts = []),
        (this.images = []),
        (this.embeddedPages = []),
        (this.embeddedFiles = []),
        (this.javaScripts = []),
        !t && this.isEncrypted)
      )
        throw new Ts();
      n && this.updateInfoDict();
    }
    return (
      (e.load = function (t, n) {
        return (
          n === void 0 && (n = {}),
          F(this, void 0, void 0, function () {
            var r, i, a, o, s, c, l, u, d, f, p, m;
            return I(this, function (h) {
              switch (h.label) {
                case 0:
                  return (
                    (r = n.ignoreEncryption),
                    (i = r !== void 0 && r),
                    (a = n.parseSpeed),
                    (o = a === void 0 ? Cc.Slow : a),
                    (s = n.throwOnInvalidObject),
                    (c = s !== void 0 && s),
                    (l = n.updateMetadata),
                    (u = l === void 0 || l),
                    (d = n.capNumbers),
                    (f = d !== void 0 && d),
                    U(t, `pdf`, [`string`, Uint8Array, ArrayBuffer]),
                    U(i, `ignoreEncryption`, [`boolean`]),
                    U(o, `parseSpeed`, [`number`]),
                    U(c, `throwOnInvalidObject`, [`boolean`]),
                    (p = nt(t)),
                    [4, Aa.forBytesWithOptions(p, o, c, f).parseDocument()]
                  );
                case 1:
                  return ((m = h.sent()), [2, new e(m, i, u)]);
              }
            });
          })
        );
      }),
      (e.create = function (t) {
        return (
          t === void 0 && (t = {}),
          F(this, void 0, void 0, function () {
            var n, r, i, a, o, s;
            return I(this, function (c) {
              return (
                (n = t.updateMetadata),
                (r = n === void 0 || n),
                (i = Dr.create()),
                (a = da.withContext(i)),
                (o = i.register(a)),
                (s = ua.withContextAndPages(i, o)),
                (i.trailerInfo.Root = i.register(s)),
                [2, new e(i, !1, r)]
              );
            });
          })
        );
      }),
      (e.prototype.registerFontkit = function (e) {
        this.fontkit = e;
      }),
      (e.prototype.getForm = function () {
        var e = this.formCache.access();
        return (
          e.hasXFA() &&
            (console.warn(
              `Removing XFA form data as pdf-lib does not support reading or writing XFA`,
            ),
            e.deleteXFA()),
          e
        );
      }),
      (e.prototype.getTitle = function () {
        var e = this.getInfoDict().lookup(q.Title);
        if (e) return (Oc(e), e.decodeText());
      }),
      (e.prototype.getAuthor = function () {
        var e = this.getInfoDict().lookup(q.Author);
        if (e) return (Oc(e), e.decodeText());
      }),
      (e.prototype.getSubject = function () {
        var e = this.getInfoDict().lookup(q.Subject);
        if (e) return (Oc(e), e.decodeText());
      }),
      (e.prototype.getKeywords = function () {
        var e = this.getInfoDict().lookup(q.Keywords);
        if (e) return (Oc(e), e.decodeText());
      }),
      (e.prototype.getCreator = function () {
        var e = this.getInfoDict().lookup(q.Creator);
        if (e) return (Oc(e), e.decodeText());
      }),
      (e.prototype.getProducer = function () {
        var e = this.getInfoDict().lookup(q.Producer);
        if (e) return (Oc(e), e.decodeText());
      }),
      (e.prototype.getCreationDate = function () {
        var e = this.getInfoDict().lookup(q.CreationDate);
        if (e) return (Oc(e), e.decodeDate());
      }),
      (e.prototype.getModificationDate = function () {
        var e = this.getInfoDict().lookup(q.ModDate);
        if (e) return (Oc(e), e.decodeDate());
      }),
      (e.prototype.setTitle = function (e, t) {
        U(e, `title`, [`string`]);
        var n = q.of(`Title`);
        (this.getInfoDict().set(n, J.fromText(e)),
          t?.showInWindowTitleBar &&
            this.catalog.getOrCreateViewerPreferences().setDisplayDocTitle(!0));
      }),
      (e.prototype.setAuthor = function (e) {
        U(e, `author`, [`string`]);
        var t = q.of(`Author`);
        this.getInfoDict().set(t, J.fromText(e));
      }),
      (e.prototype.setSubject = function (e) {
        U(e, `author`, [`string`]);
        var t = q.of(`Subject`);
        this.getInfoDict().set(t, J.fromText(e));
      }),
      (e.prototype.setKeywords = function (e) {
        U(e, `keywords`, [Array]);
        var t = q.of(`Keywords`);
        this.getInfoDict().set(t, J.fromText(e.join(` `)));
      }),
      (e.prototype.setCreator = function (e) {
        U(e, `creator`, [`string`]);
        var t = q.of(`Creator`);
        this.getInfoDict().set(t, J.fromText(e));
      }),
      (e.prototype.setProducer = function (e) {
        U(e, `creator`, [`string`]);
        var t = q.of(`Producer`);
        this.getInfoDict().set(t, J.fromText(e));
      }),
      (e.prototype.setLanguage = function (e) {
        U(e, `language`, [`string`]);
        var t = q.of(`Lang`);
        this.catalog.set(t, qr.of(e));
      }),
      (e.prototype.setCreationDate = function (e) {
        U(e, `creationDate`, [[Date, `Date`]]);
        var t = q.of(`CreationDate`);
        this.getInfoDict().set(t, qr.fromDate(e));
      }),
      (e.prototype.setModificationDate = function (e) {
        U(e, `modificationDate`, [[Date, `Date`]]);
        var t = q.of(`ModDate`);
        this.getInfoDict().set(t, qr.fromDate(e));
      }),
      (e.prototype.getPageCount = function () {
        return (
          this.pageCount === void 0 &&
            (this.pageCount = this.getPages().length),
          this.pageCount
        );
      }),
      (e.prototype.getPages = function () {
        return this.pageCache.access();
      }),
      (e.prototype.getPage = function (e) {
        var t = this.getPages();
        return (gn(e, `index`, 0, t.length - 1), t[e]);
      }),
      (e.prototype.getPageIndices = function () {
        return $e(0, this.getPageCount());
      }),
      (e.prototype.removePage = function (e) {
        var t = this.getPageCount();
        if (this.pageCount === 0) throw new Os();
        (gn(e, `index`, 0, t - 1),
          this.catalog.removeLeafNode(e),
          (this.pageCount = t - 1));
      }),
      (e.prototype.addPage = function (e) {
        return (
          U(e, `page`, [`undefined`, [Ac, `PDFPage`], Array]),
          this.insertPage(this.getPageCount(), e)
        );
      }),
      (e.prototype.insertPage = function (e, t) {
        var n = this.getPageCount();
        if (
          (gn(e, `index`, 0, n),
          U(t, `page`, [`undefined`, [Ac, `PDFPage`], Array]),
          !t || Array.isArray(t))
        ) {
          var r = Array.isArray(t) ? t : Sc.A4;
          ((t = Ac.create(this)), t.setSize.apply(t, r));
        } else if (t.doc !== this) throw new Ds();
        var i = this.catalog.insertLeafNode(t.ref, e);
        return (
          t.node.setParent(i),
          this.pageMap.set(t.node, t),
          this.pageCache.invalidate(),
          (this.pageCount = n + 1),
          t
        );
      }),
      (e.prototype.copyPages = function (t, n) {
        return F(this, void 0, void 0, function () {
          var r, i, a, o, s, c, l, u;
          return I(this, function (d) {
            switch (d.label) {
              case 0:
                return (
                  U(t, `srcDoc`, [[e, `PDFDocument`]]),
                  U(n, `indices`, [Array]),
                  [4, t.flush()]
                );
              case 1:
                for (
                  d.sent(),
                    r = kr.for(t.context, this.context),
                    i = t.getPages(),
                    a = Array(n.length),
                    o = 0,
                    s = n.length;
                  o < s;
                  o++
                )
                  ((c = i[n[o]]),
                    (l = r.copy(c.node)),
                    (u = this.context.register(l)),
                    (a[o] = Ac.of(l, u, this)));
                return [2, a];
            }
          });
        });
      }),
      (e.prototype.copy = function () {
        return F(this, void 0, void 0, function () {
          var t, n, r, i;
          return I(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, e.create()];
              case 1:
                return (
                  (t = a.sent()),
                  [4, t.copyPages(this, this.getPageIndices())]
                );
              case 2:
                for (n = a.sent(), r = 0, i = n.length; r < i; r++)
                  t.addPage(n[r]);
                return (
                  this.getAuthor() !== void 0 && t.setAuthor(this.getAuthor()),
                  this.getCreationDate() !== void 0 &&
                    t.setCreationDate(this.getCreationDate()),
                  this.getCreator() !== void 0 &&
                    t.setCreator(this.getCreator()),
                  this.getModificationDate() !== void 0 &&
                    t.setModificationDate(this.getModificationDate()),
                  this.getProducer() !== void 0 &&
                    t.setProducer(this.getProducer()),
                  this.getSubject() !== void 0 &&
                    t.setSubject(this.getSubject()),
                  this.getTitle() !== void 0 && t.setTitle(this.getTitle()),
                  (t.defaultWordBreaks = this.defaultWordBreaks),
                  [2, t]
                );
            }
          });
        });
      }),
      (e.prototype.addJavaScript = function (e, t) {
        (U(e, `name`, [`string`]), U(t, `script`, [`string`]));
        var n = Ec.for(t, e),
          r = this.context.nextRef(),
          i = Tc.of(r, this, n);
        this.javaScripts.push(i);
      }),
      (e.prototype.attach = function (e, t, n) {
        return (
          n === void 0 && (n = {}),
          F(this, void 0, void 0, function () {
            var r, i, a, o;
            return I(this, function (s) {
              return (
                U(e, `attachment`, [`string`, Uint8Array, ArrayBuffer]),
                U(t, `name`, [`string`]),
                W(n.mimeType, `mimeType`, [`string`]),
                W(n.description, `description`, [`string`]),
                W(n.creationDate, `options.creationDate`, [Date]),
                W(n.modificationDate, `options.modificationDate`, [Date]),
                un(n.afRelationship, `options.afRelationship`, Xr),
                (r = nt(e)),
                (i = Zr.for(r, t, n)),
                (a = this.context.nextRef()),
                (o = wc.of(a, this, i)),
                this.embeddedFiles.push(o),
                [2]
              );
            });
          })
        );
      }),
      (e.prototype.embedFont = function (e, t) {
        return (
          t === void 0 && (t = {}),
          F(this, void 0, void 0, function () {
            var n, r, i, a, o, s, c, l, u, d;
            return I(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (n = t.subset),
                    (r = n !== void 0 && n),
                    (i = t.customName),
                    (a = t.features),
                    U(e, `font`, [`string`, Uint8Array, ArrayBuffer]),
                    U(r, `subset`, [`boolean`]),
                    nn(e) ? ((o = zr.for(e, i)), [3, 7]) : [3, 1]
                  );
                case 1:
                  return tt(e)
                    ? ((s = nt(e)),
                      (c = this.assertFontkit()),
                      r ? [4, Yr.for(c, s, i, a)] : [3, 3])
                    : [3, 6];
                case 2:
                  return ((l = f.sent()), [3, 5]);
                case 3:
                  return [4, Jr.for(c, s, i, a)];
                case 4:
                  ((l = f.sent()), (f.label = 5));
                case 5:
                  return ((o = l), [3, 7]);
                case 6:
                  throw TypeError(
                    "`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`",
                  );
                case 7:
                  return (
                    (u = this.context.nextRef()),
                    (d = oc.of(u, this, o)),
                    this.fonts.push(d),
                    [2, d]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.embedStandardFont = function (e, t) {
        if ((U(e, `font`, [`string`]), !nn(e)))
          throw TypeError("`font` must be one of type `StandardFonts`");
        var n = zr.for(e, t),
          r = this.context.nextRef(),
          i = oc.of(r, this, n);
        return (this.fonts.push(i), i);
      }),
      (e.prototype.embedJpg = function (e) {
        return F(this, void 0, void 0, function () {
          var t, n, r, i;
          return I(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  U(e, `jpg`, [`string`, Uint8Array, ArrayBuffer]),
                  (t = nt(e)),
                  [4, ti.for(t)]
                );
              case 1:
                return (
                  (n = a.sent()),
                  (r = this.context.nextRef()),
                  (i = sc.of(r, this, n)),
                  this.images.push(i),
                  [2, i]
                );
            }
          });
        });
      }),
      (e.prototype.embedPng = function (e) {
        return F(this, void 0, void 0, function () {
          var t, n, r, i;
          return I(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  U(e, `png`, [`string`, Uint8Array, ArrayBuffer]),
                  (t = nt(e)),
                  [4, oi.for(t)]
                );
              case 1:
                return (
                  (n = a.sent()),
                  (r = this.context.nextRef()),
                  (i = sc.of(r, this, n)),
                  this.images.push(i),
                  [2, i]
                );
            }
          });
        });
      }),
      (e.prototype.embedPdf = function (t, n) {
        return (
          n === void 0 && (n = [0]),
          F(this, void 0, void 0, function () {
            var r, i, a;
            return I(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    U(t, `pdf`, [
                      `string`,
                      Uint8Array,
                      ArrayBuffer,
                      [e, `PDFDocument`],
                    ]),
                    U(n, `indices`, [Array]),
                    t instanceof e ? ((i = t), [3, 3]) : [3, 1]
                  );
                case 1:
                  return [4, e.load(t)];
                case 2:
                  ((i = o.sent()), (o.label = 3));
                case 3:
                  return (
                    (r = i),
                    (a = et(r.getPages(), n)),
                    [2, this.embedPages(a)]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.embedPage = function (e, t, n) {
        return F(this, void 0, void 0, function () {
          var r;
          return I(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  U(e, `page`, [[Ac, `PDFPage`]]),
                  [4, this.embedPages([e], [t], [n])]
                );
              case 1:
                return ((r = i.sent()[0]), [2, r]);
            }
          });
        });
      }),
      (e.prototype.embedPages = function (e, t, n) {
        return (
          t === void 0 && (t = []),
          n === void 0 && (n = []),
          F(this, void 0, void 0, function () {
            var r, i, a, o, s, c, l, r, i, u, d, f, p, m, h;
            return I(this, function (g) {
              switch (g.label) {
                case 0:
                  if (e.length === 0) return [2, []];
                  for (r = 0, i = e.length - 1; r < i; r++)
                    if (
                      ((a = e[r]),
                      (o = e[r + 1]),
                      a.node.context !== o.node.context)
                    )
                      throw new Mn();
                  ((s = e[0].node.context),
                    (c =
                      s === this.context
                        ? function (e) {
                            return e;
                          }
                        : kr.for(s, this.context).copy),
                    (l = Array(e.length)),
                    (r = 0),
                    (i = e.length),
                    (g.label = 1));
                case 1:
                  return r < i
                    ? ((u = c(e[r].node)),
                      (d = t[r]),
                      (f = n[r]),
                      [4, Ti.for(u, d, f)])
                    : [3, 4];
                case 2:
                  ((p = g.sent()),
                    (m = this.context.nextRef()),
                    (l[r] = ac.of(m, this, p)),
                    (g.label = 3));
                case 3:
                  return (r++, [3, 1]);
                case 4:
                  return ((h = this.embeddedPages).push.apply(h, l), [2, l]);
              }
            });
          })
        );
      }),
      (e.prototype.flush = function () {
        return F(this, void 0, void 0, function () {
          return I(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.embedAll(this.fonts)];
              case 1:
                return (e.sent(), [4, this.embedAll(this.images)]);
              case 2:
                return (e.sent(), [4, this.embedAll(this.embeddedPages)]);
              case 3:
                return (e.sent(), [4, this.embedAll(this.embeddedFiles)]);
              case 4:
                return (e.sent(), [4, this.embedAll(this.javaScripts)]);
              case 5:
                return (e.sent(), [2]);
            }
          });
        });
      }),
      (e.prototype.save = function (e) {
        return (
          e === void 0 && (e = {}),
          F(this, void 0, void 0, function () {
            var t, n, r, i, a, o, s, c, l, u;
            return I(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (t = e.useObjectStreams),
                    (n = t === void 0 || t),
                    (r = e.addDefaultPage),
                    (i = r === void 0 || r),
                    (a = e.objectsPerTick),
                    (o = a === void 0 ? 50 : a),
                    (s = e.updateFieldAppearances),
                    (c = s === void 0 || s),
                    U(n, `useObjectStreams`, [`boolean`]),
                    U(i, `addDefaultPage`, [`boolean`]),
                    U(o, `objectsPerTick`, [`number`]),
                    U(c, `updateFieldAppearances`, [`boolean`]),
                    i && this.getPageCount() === 0 && this.addPage(),
                    c &&
                      ((l = this.formCache.getValue()),
                      l && l.updateFieldAppearances()),
                    [4, this.flush()]
                  );
                case 1:
                  return (
                    d.sent(),
                    (u = n ? Rr : Pr),
                    [2, u.forContext(this.context, o).serializeToBuffer()]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.saveAsBase64 = function (e) {
        return (
          e === void 0 && (e = {}),
          F(this, void 0, void 0, function () {
            var t, n, r, i, a;
            return I(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.dataUri),
                    (n = t !== void 0 && t),
                    (r = be(e, [`dataUri`])),
                    U(n, `dataUri`, [`boolean`]),
                    [4, this.save(r)]
                  );
                case 1:
                  return (
                    (i = o.sent()),
                    (a = B(i)),
                    [2, n ? `data:application/pdf;base64,` + a : a]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.findPageForAnnotationRef = function (e) {
        for (var t = this.getPages(), n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          if (i.node.Annots()?.indexOf(e) !== void 0) return i;
        }
      }),
      (e.prototype.embedAll = function (e) {
        return F(this, void 0, void 0, function () {
          var t, n;
          return I(this, function (r) {
            switch (r.label) {
              case 0:
                ((t = 0), (n = e.length), (r.label = 1));
              case 1:
                return t < n ? [4, e[t].embed()] : [3, 4];
              case 2:
                (r.sent(), (r.label = 3));
              case 3:
                return (t++, [3, 1]);
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.updateInfoDict = function () {
        var e = `pdf-lib (https://github.com/Hopding/pdf-lib)`,
          t = new Date(),
          n = this.getInfoDict();
        (this.setProducer(e),
          this.setModificationDate(t),
          n.get(q.of(`Creator`)) || this.setCreator(e),
          n.get(q.of(`CreationDate`)) || this.setCreationDate(t));
      }),
      (e.prototype.getInfoDict = function () {
        var e = this.context.lookup(this.context.trailerInfo.Info);
        if (e instanceof mr) return e;
        var t = this.context.obj({});
        return ((this.context.trailerInfo.Info = this.context.register(t)), t);
      }),
      (e.prototype.assertFontkit = function () {
        if (!this.fontkit) throw new Es();
        return this.fontkit;
      }),
      e
    );
  })();
function Oc(e) {
  if (!(e instanceof J) && !(e instanceof qr)) throw new Dn([J, qr], e);
}
var kc;
(function (e) {
  ((e.Normal = `Normal`),
    (e.Multiply = `Multiply`),
    (e.Screen = `Screen`),
    (e.Overlay = `Overlay`),
    (e.Darken = `Darken`),
    (e.Lighten = `Lighten`),
    (e.ColorDodge = `ColorDodge`),
    (e.ColorBurn = `ColorBurn`),
    (e.HardLight = `HardLight`),
    (e.SoftLight = `SoftLight`),
    (e.Difference = `Difference`),
    (e.Exclusion = `Exclusion`));
})((kc ||= {}));
var Ac = (function () {
    function e(e, t, n) {
      ((this.fontSize = 24),
        (this.fontColor = Bo(0, 0, 0)),
        (this.lineHeight = 24),
        (this.x = 0),
        (this.y = 0),
        U(e, `leafNode`, [[Or, `PDFPageLeaf`]]),
        U(t, `ref`, [[yr, `PDFRef`]]),
        U(n, `doc`, [[Dc, `PDFDocument`]]),
        (this.node = e),
        (this.ref = t),
        (this.doc = n));
    }
    return (
      (e.prototype.setRotation = function (e) {
        var t = Ha(e);
        (vn(t, `degreesAngle`, 90),
          this.node.set(q.of(`Rotate`), this.doc.context.obj(t)));
      }),
      (e.prototype.getRotation = function () {
        var e = this.node.Rotate();
        return X(e ? e.asNumber() : 0);
      }),
      (e.prototype.setSize = function (e, t) {
        (U(e, `width`, [`number`]), U(t, `height`, [`number`]));
        var n = this.getMediaBox();
        this.setMediaBox(n.x, n.y, e, t);
        var r = this.getCropBox(),
          i = this.getBleedBox(),
          a = this.getTrimBox(),
          o = this.getArtBox(),
          s = this.node.CropBox(),
          c = this.node.BleedBox(),
          l = this.node.TrimBox(),
          u = this.node.ArtBox();
        (s && rn(r, n) && this.setCropBox(n.x, n.y, e, t),
          c && rn(i, n) && this.setBleedBox(n.x, n.y, e, t),
          l && rn(a, n) && this.setTrimBox(n.x, n.y, e, t),
          u && rn(o, n) && this.setArtBox(n.x, n.y, e, t));
      }),
      (e.prototype.setWidth = function (e) {
        (U(e, `width`, [`number`]), this.setSize(e, this.getSize().height));
      }),
      (e.prototype.setHeight = function (e) {
        (U(e, `height`, [`number`]), this.setSize(this.getSize().width, e));
      }),
      (e.prototype.setMediaBox = function (e, t, n, r) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          U(n, `width`, [`number`]),
          U(r, `height`, [`number`]));
        var i = this.doc.context.obj([e, t, e + n, t + r]);
        this.node.set(q.MediaBox, i);
      }),
      (e.prototype.setCropBox = function (e, t, n, r) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          U(n, `width`, [`number`]),
          U(r, `height`, [`number`]));
        var i = this.doc.context.obj([e, t, e + n, t + r]);
        this.node.set(q.CropBox, i);
      }),
      (e.prototype.setBleedBox = function (e, t, n, r) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          U(n, `width`, [`number`]),
          U(r, `height`, [`number`]));
        var i = this.doc.context.obj([e, t, e + n, t + r]);
        this.node.set(q.BleedBox, i);
      }),
      (e.prototype.setTrimBox = function (e, t, n, r) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          U(n, `width`, [`number`]),
          U(r, `height`, [`number`]));
        var i = this.doc.context.obj([e, t, e + n, t + r]);
        this.node.set(q.TrimBox, i);
      }),
      (e.prototype.setArtBox = function (e, t, n, r) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          U(n, `width`, [`number`]),
          U(r, `height`, [`number`]));
        var i = this.doc.context.obj([e, t, e + n, t + r]);
        this.node.set(q.ArtBox, i);
      }),
      (e.prototype.getSize = function () {
        var e = this.getMediaBox();
        return { width: e.width, height: e.height };
      }),
      (e.prototype.getWidth = function () {
        return this.getSize().width;
      }),
      (e.prototype.getHeight = function () {
        return this.getSize().height;
      }),
      (e.prototype.getMediaBox = function () {
        return this.node.MediaBox().asRectangle();
      }),
      (e.prototype.getCropBox = function () {
        return this.node.CropBox()?.asRectangle() ?? this.getMediaBox();
      }),
      (e.prototype.getBleedBox = function () {
        return this.node.BleedBox()?.asRectangle() ?? this.getCropBox();
      }),
      (e.prototype.getTrimBox = function () {
        return this.node.TrimBox()?.asRectangle() ?? this.getCropBox();
      }),
      (e.prototype.getArtBox = function () {
        return this.node.ArtBox()?.asRectangle() ?? this.getCropBox();
      }),
      (e.prototype.translateContent = function (e, t) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          this.node.normalize(),
          this.getContentStream());
        var n = this.createContentStream(so(), Za(e, t)),
          r = this.doc.context.register(n),
          i = this.createContentStream(co()),
          a = this.doc.context.register(i);
        this.node.wrapContentStreams(r, a);
      }),
      (e.prototype.scale = function (e, t) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          this.setSize(this.getWidth() * e, this.getHeight() * t),
          this.scaleContent(e, t),
          this.scaleAnnotations(e, t));
      }),
      (e.prototype.scaleContent = function (e, t) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          this.node.normalize(),
          this.getContentStream());
        var n = this.createContentStream(so(), Qa(e, t)),
          r = this.doc.context.register(n),
          i = this.createContentStream(co()),
          a = this.doc.context.register(i);
        this.node.wrapContentStreams(r, a);
      }),
      (e.prototype.scaleAnnotations = function (e, t) {
        (U(e, `x`, [`number`]), U(t, `y`, [`number`]));
        var n = this.node.Annots();
        if (n)
          for (var r = 0; r < n.size(); r++) {
            var i = n.lookup(r);
            i instanceof mr && this.scaleAnnot(i, e, t);
          }
      }),
      (e.prototype.resetPosition = function () {
        (this.getContentStream(!1), (this.x = 0), (this.y = 0));
      }),
      (e.prototype.setFont = function (e) {
        (U(e, `font`, [[oc, `PDFFont`]]),
          (this.font = e),
          (this.fontKey = this.node.newFontDictionary(
            this.font.name,
            this.font.ref,
          )));
      }),
      (e.prototype.setFontSize = function (e) {
        (U(e, `fontSize`, [`number`]), (this.fontSize = e));
      }),
      (e.prototype.setFontColor = function (e) {
        (U(e, `fontColor`, [[Object, `Color`]]), (this.fontColor = e));
      }),
      (e.prototype.setLineHeight = function (e) {
        (U(e, `lineHeight`, [`number`]), (this.lineHeight = e));
      }),
      (e.prototype.getPosition = function () {
        return { x: this.x, y: this.y };
      }),
      (e.prototype.getX = function () {
        return this.x;
      }),
      (e.prototype.getY = function () {
        return this.y;
      }),
      (e.prototype.moveTo = function (e, t) {
        (U(e, `x`, [`number`]),
          U(t, `y`, [`number`]),
          (this.x = e),
          (this.y = t));
      }),
      (e.prototype.moveDown = function (e) {
        (U(e, `yDecrease`, [`number`]), (this.y -= e));
      }),
      (e.prototype.moveUp = function (e) {
        (U(e, `yIncrease`, [`number`]), (this.y += e));
      }),
      (e.prototype.moveLeft = function (e) {
        (U(e, `xDecrease`, [`number`]), (this.x -= e));
      }),
      (e.prototype.moveRight = function (e) {
        (U(e, `xIncrease`, [`number`]), (this.x += e));
      }),
      (e.prototype.pushOperators = function () {
        var e = [...arguments];
        hn(e, `operator`, [[br, `PDFOperator`]]);
        var t = this.getContentStream();
        t.push.apply(t, e);
      }),
      (e.prototype.drawText = function (e, t) {
        (t === void 0 && (t = {}),
          U(e, `text`, [`string`]),
          W(t.color, `options.color`, [[Object, `Color`]]),
          _n(t.opacity, `opacity.opacity`, 0, 1),
          W(t.font, `options.font`, [[oc, `PDFFont`]]),
          W(t.size, `options.size`, [`number`]),
          W(t.rotate, `options.rotate`, [[Object, `Rotation`]]),
          W(t.xSkew, `options.xSkew`, [[Object, `Rotation`]]),
          W(t.ySkew, `options.ySkew`, [[Object, `Rotation`]]),
          W(t.x, `options.x`, [`number`]),
          W(t.y, `options.y`, [`number`]),
          W(t.lineHeight, `options.lineHeight`, [`number`]),
          W(t.maxWidth, `options.maxWidth`, [`number`]),
          W(t.wordBreaks, `options.wordBreaks`, [Array]),
          un(t.blendMode, `options.blendMode`, kc));
        for (
          var n = this.setOrEmbedFont(t.font),
            r = n.oldFont,
            i = n.newFont,
            a = n.newFontKey,
            o = t.size || this.fontSize,
            s = t.wordBreaks || this.doc.defaultWordBreaks,
            c =
              t.maxWidth === void 0
                ? Fe(Me(e))
                : Be(e, s, t.maxWidth, function (e) {
                    return i.widthOfTextAtSize(e, o);
                  }),
            l = Array(c.length),
            u = 0,
            d = c.length;
          u < d;
          u++
        )
          l[u] = i.encodeText(c[u]);
        var f = this.maybeEmbedGraphicsState({
            opacity: t.opacity,
            blendMode: t.blendMode,
          }),
          p = this.getContentStream();
        (p.push.apply(
          p,
          ss(l, {
            color: t.color ?? this.fontColor,
            font: a,
            size: o,
            rotate: t.rotate ?? X(0),
            xSkew: t.xSkew ?? X(0),
            ySkew: t.ySkew ?? X(0),
            x: t.x ?? this.x,
            y: t.y ?? this.y,
            lineHeight: t.lineHeight ?? this.lineHeight,
            graphicsState: f,
          }),
        ),
          t.font && (r ? this.setFont(r) : this.resetFont()));
      }),
      (e.prototype.drawImage = function (e, t) {
        (t === void 0 && (t = {}),
          U(e, `image`, [[sc, `PDFImage`]]),
          W(t.x, `options.x`, [`number`]),
          W(t.y, `options.y`, [`number`]),
          W(t.width, `options.width`, [`number`]),
          W(t.height, `options.height`, [`number`]),
          W(t.rotate, `options.rotate`, [[Object, `Rotation`]]),
          W(t.xSkew, `options.xSkew`, [[Object, `Rotation`]]),
          W(t.ySkew, `options.ySkew`, [[Object, `Rotation`]]),
          _n(t.opacity, `opacity.opacity`, 0, 1),
          un(t.blendMode, `options.blendMode`, kc));
        var n = this.node.newXObject(`Image`, e.ref),
          r = this.maybeEmbedGraphicsState({
            opacity: t.opacity,
            blendMode: t.blendMode,
          }),
          i = this.getContentStream();
        i.push.apply(
          i,
          cs(n, {
            x: t.x ?? this.x,
            y: t.y ?? this.y,
            width: t.width ?? e.size().width,
            height: t.height ?? e.size().height,
            rotate: t.rotate ?? X(0),
            xSkew: t.xSkew ?? X(0),
            ySkew: t.ySkew ?? X(0),
            graphicsState: r,
          }),
        );
      }),
      (e.prototype.drawPage = function (e, t) {
        (t === void 0 && (t = {}),
          U(e, `embeddedPage`, [[ac, `PDFEmbeddedPage`]]),
          W(t.x, `options.x`, [`number`]),
          W(t.y, `options.y`, [`number`]),
          W(t.xScale, `options.xScale`, [`number`]),
          W(t.yScale, `options.yScale`, [`number`]),
          W(t.width, `options.width`, [`number`]),
          W(t.height, `options.height`, [`number`]),
          W(t.rotate, `options.rotate`, [[Object, `Rotation`]]),
          W(t.xSkew, `options.xSkew`, [[Object, `Rotation`]]),
          W(t.ySkew, `options.ySkew`, [[Object, `Rotation`]]),
          _n(t.opacity, `opacity.opacity`, 0, 1),
          un(t.blendMode, `options.blendMode`, kc));
        var n = this.node.newXObject(`EmbeddedPdfPage`, e.ref),
          r = this.maybeEmbedGraphicsState({
            opacity: t.opacity,
            blendMode: t.blendMode,
          }),
          i =
            t.width === void 0
              ? t.xScale === void 0
                ? 1
                : t.xScale
              : t.width / e.width,
          a =
            t.height === void 0
              ? t.yScale === void 0
                ? 1
                : t.yScale
              : t.height / e.height,
          o = this.getContentStream();
        o.push.apply(
          o,
          ls(n, {
            x: t.x ?? this.x,
            y: t.y ?? this.y,
            xScale: i,
            yScale: a,
            rotate: t.rotate ?? X(0),
            xSkew: t.xSkew ?? X(0),
            ySkew: t.ySkew ?? X(0),
            graphicsState: r,
          }),
        );
      }),
      (e.prototype.drawSvgPath = function (e, t) {
        (t === void 0 && (t = {}),
          U(e, `path`, [`string`]),
          W(t.x, `options.x`, [`number`]),
          W(t.y, `options.y`, [`number`]),
          W(t.scale, `options.scale`, [`number`]),
          W(t.rotate, `options.rotate`, [[Object, `Rotation`]]),
          W(t.borderWidth, `options.borderWidth`, [`number`]),
          W(t.color, `options.color`, [[Object, `Color`]]),
          _n(t.opacity, `opacity.opacity`, 0, 1),
          W(t.borderColor, `options.borderColor`, [[Object, `Color`]]),
          W(t.borderDashArray, `options.borderDashArray`, [Array]),
          W(t.borderDashPhase, `options.borderDashPhase`, [`number`]),
          un(t.borderLineCap, `options.borderLineCap`, ro),
          _n(t.borderOpacity, `options.borderOpacity`, 0, 1),
          un(t.blendMode, `options.blendMode`, kc));
        var n = this.maybeEmbedGraphicsState({
          opacity: t.opacity,
          borderOpacity: t.borderOpacity,
          blendMode: t.blendMode,
        });
        !(`color` in t) &&
          !(`borderColor` in t) &&
          (t.borderColor = Bo(0, 0, 0));
        var r = this.getContentStream();
        r.push.apply(
          r,
          gs(e, {
            x: t.x ?? this.x,
            y: t.y ?? this.y,
            scale: t.scale,
            rotate: t.rotate ?? X(0),
            color: t.color ?? void 0,
            borderColor: t.borderColor ?? void 0,
            borderWidth: t.borderWidth ?? 0,
            borderDashArray: t.borderDashArray ?? void 0,
            borderDashPhase: t.borderDashPhase ?? void 0,
            borderLineCap: t.borderLineCap ?? void 0,
            graphicsState: n,
          }),
        );
      }),
      (e.prototype.drawLine = function (e) {
        (U(e.start, `options.start`, [[Object, `{ x: number, y: number }`]]),
          U(e.end, `options.end`, [[Object, `{ x: number, y: number }`]]),
          U(e.start.x, `options.start.x`, [`number`]),
          U(e.start.y, `options.start.y`, [`number`]),
          U(e.end.x, `options.end.x`, [`number`]),
          U(e.end.y, `options.end.y`, [`number`]),
          W(e.thickness, `options.thickness`, [`number`]),
          W(e.color, `options.color`, [[Object, `Color`]]),
          W(e.dashArray, `options.dashArray`, [Array]),
          W(e.dashPhase, `options.dashPhase`, [`number`]),
          un(e.lineCap, `options.lineCap`, ro),
          _n(e.opacity, `opacity.opacity`, 0, 1),
          un(e.blendMode, `options.blendMode`, kc));
        var t = this.maybeEmbedGraphicsState({
          borderOpacity: e.opacity,
          blendMode: e.blendMode,
        });
        `color` in e || (e.color = Bo(0, 0, 0));
        var n = this.getContentStream();
        n.push.apply(
          n,
          us({
            start: e.start,
            end: e.end,
            thickness: e.thickness ?? 1,
            color: e.color ?? void 0,
            dashArray: e.dashArray ?? void 0,
            dashPhase: e.dashPhase ?? void 0,
            lineCap: e.lineCap ?? void 0,
            graphicsState: t,
          }),
        );
      }),
      (e.prototype.drawRectangle = function (e) {
        (e === void 0 && (e = {}),
          W(e.x, `options.x`, [`number`]),
          W(e.y, `options.y`, [`number`]),
          W(e.width, `options.width`, [`number`]),
          W(e.height, `options.height`, [`number`]),
          W(e.rotate, `options.rotate`, [[Object, `Rotation`]]),
          W(e.xSkew, `options.xSkew`, [[Object, `Rotation`]]),
          W(e.ySkew, `options.ySkew`, [[Object, `Rotation`]]),
          W(e.borderWidth, `options.borderWidth`, [`number`]),
          W(e.color, `options.color`, [[Object, `Color`]]),
          _n(e.opacity, `opacity.opacity`, 0, 1),
          W(e.borderColor, `options.borderColor`, [[Object, `Color`]]),
          W(e.borderDashArray, `options.borderDashArray`, [Array]),
          W(e.borderDashPhase, `options.borderDashPhase`, [`number`]),
          un(e.borderLineCap, `options.borderLineCap`, ro),
          _n(e.borderOpacity, `options.borderOpacity`, 0, 1),
          un(e.blendMode, `options.blendMode`, kc));
        var t = this.maybeEmbedGraphicsState({
          opacity: e.opacity,
          borderOpacity: e.borderOpacity,
          blendMode: e.blendMode,
        });
        !(`color` in e) && !(`borderColor` in e) && (e.color = Bo(0, 0, 0));
        var n = this.getContentStream();
        n.push.apply(
          n,
          ds({
            x: e.x ?? this.x,
            y: e.y ?? this.y,
            width: e.width ?? 150,
            height: e.height ?? 100,
            rotate: e.rotate ?? X(0),
            xSkew: e.xSkew ?? X(0),
            ySkew: e.ySkew ?? X(0),
            borderWidth: e.borderWidth ?? 0,
            color: e.color ?? void 0,
            borderColor: e.borderColor ?? void 0,
            borderDashArray: e.borderDashArray ?? void 0,
            borderDashPhase: e.borderDashPhase ?? void 0,
            graphicsState: t,
            borderLineCap: e.borderLineCap ?? void 0,
          }),
        );
      }),
      (e.prototype.drawSquare = function (e) {
        e === void 0 && (e = {});
        var t = e.size;
        (W(t, `size`, [`number`]),
          this.drawRectangle(P(P({}, e), { width: t, height: t })));
      }),
      (e.prototype.drawEllipse = function (e) {
        (e === void 0 && (e = {}),
          W(e.x, `options.x`, [`number`]),
          W(e.y, `options.y`, [`number`]),
          W(e.xScale, `options.xScale`, [`number`]),
          W(e.yScale, `options.yScale`, [`number`]),
          W(e.rotate, `options.rotate`, [[Object, `Rotation`]]),
          W(e.color, `options.color`, [[Object, `Color`]]),
          _n(e.opacity, `opacity.opacity`, 0, 1),
          W(e.borderColor, `options.borderColor`, [[Object, `Color`]]),
          _n(e.borderOpacity, `options.borderOpacity`, 0, 1),
          W(e.borderWidth, `options.borderWidth`, [`number`]),
          W(e.borderDashArray, `options.borderDashArray`, [Array]),
          W(e.borderDashPhase, `options.borderDashPhase`, [`number`]),
          un(e.borderLineCap, `options.borderLineCap`, ro),
          un(e.blendMode, `options.blendMode`, kc));
        var t = this.maybeEmbedGraphicsState({
          opacity: e.opacity,
          borderOpacity: e.borderOpacity,
          blendMode: e.blendMode,
        });
        !(`color` in e) && !(`borderColor` in e) && (e.color = Bo(0, 0, 0));
        var n = this.getContentStream();
        n.push.apply(
          n,
          hs({
            x: e.x ?? this.x,
            y: e.y ?? this.y,
            xScale: e.xScale ?? 100,
            yScale: e.yScale ?? 100,
            rotate: e.rotate ?? void 0,
            color: e.color ?? void 0,
            borderColor: e.borderColor ?? void 0,
            borderWidth: e.borderWidth ?? 0,
            borderDashArray: e.borderDashArray ?? void 0,
            borderDashPhase: e.borderDashPhase ?? void 0,
            borderLineCap: e.borderLineCap ?? void 0,
            graphicsState: t,
          }),
        );
      }),
      (e.prototype.drawCircle = function (e) {
        e === void 0 && (e = {});
        var t = e.size,
          n = t === void 0 ? 100 : t;
        (W(n, `size`, [`number`]),
          this.drawEllipse(P(P({}, e), { xScale: n, yScale: n })));
      }),
      (e.prototype.setOrEmbedFont = function (e) {
        var t = this.font,
          n = this.fontKey;
        return (
          e ? this.setFont(e) : this.getFont(),
          {
            oldFont: t,
            oldFontKey: n,
            newFont: this.font,
            newFontKey: this.fontKey,
          }
        );
      }),
      (e.prototype.getFont = function () {
        if (!this.font || !this.fontKey) {
          var e = this.doc.embedStandardFont(_c.Helvetica);
          this.setFont(e);
        }
        return [this.font, this.fontKey];
      }),
      (e.prototype.resetFont = function () {
        ((this.font = void 0), (this.fontKey = void 0));
      }),
      (e.prototype.getContentStream = function (e) {
        return (
          e === void 0 && (e = !0),
          e && this.contentStream
            ? this.contentStream
            : ((this.contentStream = this.createContentStream()),
              (this.contentStreamRef = this.doc.context.register(
                this.contentStream,
              )),
              this.node.addContentStream(this.contentStreamRef),
              this.contentStream)
        );
      }),
      (e.prototype.createContentStream = function () {
        var e = [...arguments],
          t = this.doc.context.obj({});
        return wr.of(t, e);
      }),
      (e.prototype.maybeEmbedGraphicsState = function (e) {
        var t = e.opacity,
          n = e.borderOpacity,
          r = e.blendMode;
        if (t !== void 0 || n !== void 0 || r !== void 0) {
          var i = this.doc.context.obj({
            Type: `ExtGState`,
            ca: t,
            CA: n,
            BM: r,
          });
          return this.node.newExtGState(`GS`, i);
        }
      }),
      (e.prototype.scaleAnnot = function (e, t, n) {
        for (
          var r = [`RD`, `CL`, `Vertices`, `QuadPoints`, `L`, `Rect`],
            i = 0,
            a = r.length;
          i < a;
          i++
        ) {
          var o = e.lookup(q.of(r[i]));
          o instanceof tr && o.scalePDFNumbers(t, n);
        }
        var s = e.lookup(q.of(`InkList`));
        if (s instanceof tr)
          for (var i = 0, a = s.size(); i < a; i++) {
            var c = s.lookup(i);
            c instanceof tr && c.scalePDFNumbers(t, n);
          }
      }),
      (e.of = function (t, n, r) {
        return new e(t, n, r);
      }),
      (e.create = function (t) {
        U(t, `doc`, [[Dc, `PDFDocument`]]);
        var n = yr.of(-1),
          r = Or.withContextAndParent(t.context, n);
        return new e(r, t.context.register(r), t);
      }),
      e
    );
  })(),
  jc = (function (e) {
    N(t, e);
    function t(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (
        U(t, `acroButton`, [[Zi, `PDFAcroPushButton`]]),
        (i.acroField = t),
        i
      );
    }
    return (
      (t.prototype.setImage = function (e, t) {
        t === void 0 && (t = cc.Center);
        for (
          var n = this.acroField.getWidgets(), r = 0, i = n.length;
          r < i;
          r++
        ) {
          var a = n[r],
            o = this.createImageAppearanceStream(a, e, t);
          this.updateWidgetAppearances(a, { normal: o });
        }
        this.markAsClean();
      }),
      (t.prototype.setFontSize = function (e) {
        (bn(e, `fontSize`), this.acroField.setFontSize(e), this.markAsDirty());
      }),
      (t.prototype.addToPage = function (e, t, n) {
        (W(e, `text`, [`string`]), W(t, `page`, [[Ac, `PDFPage`]]), lc(n));
        var r = this.createWidget({
            x: (n?.x ?? 0) - (n?.borderWidth ?? 0) / 2,
            y: (n?.y ?? 0) - (n?.borderWidth ?? 0) / 2,
            width: n?.width ?? 100,
            height: n?.height ?? 50,
            textColor: n?.textColor ?? Bo(0, 0, 0),
            backgroundColor: n?.backgroundColor ?? Bo(0.75, 0.75, 0.75),
            borderColor: n?.borderColor,
            borderWidth: n?.borderWidth ?? 0,
            rotate: n?.rotate ?? X(0),
            caption: e,
            hidden: n?.hidden,
            page: t.ref,
          }),
          i = this.doc.context.register(r.dict);
        this.acroField.addWidget(i);
        var a = n?.font ?? this.doc.getForm().getDefaultFont();
        (this.updateWidgetAppearance(r, a), t.node.addAnnot(i));
      }),
      (t.prototype.needsAppearancesUpdate = function () {
        if (this.isDirty()) return !0;
        for (
          var e = this.acroField.getWidgets(), t = 0, n = e.length;
          t < n;
          t++
        )
          if (!(e[t].getAppearances()?.normal instanceof hr)) return !0;
        return !1;
      }),
      (t.prototype.defaultUpdateAppearances = function (e) {
        (U(e, `font`, [[oc, `PDFFont`]]), this.updateAppearances(e));
      }),
      (t.prototype.updateAppearances = function (e, t) {
        (U(e, `font`, [[oc, `PDFFont`]]), W(t, `provider`, [Function]));
        for (
          var n = this.acroField.getWidgets(), r = 0, i = n.length;
          r < i;
          r++
        ) {
          var a = n[r];
          this.updateWidgetAppearance(a, e, t);
        }
      }),
      (t.prototype.updateWidgetAppearance = function (e, t, n) {
        var r = qs((n ?? tc)(this, e, t));
        this.updateWidgetAppearanceWithFont(e, t, r);
      }),
      (t.of = function (e, n, r) {
        return new t(e, n, r);
      }),
      t
    );
  })(uc);
function Mc(e) {
  return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function Nc(e, t) {
  let n = Object.create(null);
  if (e) for (let t of Object.keys(e)) Mc(t) && (n[t] = e[t]);
  if (t && typeof t == `object`)
    for (let e of Object.keys(t)) Mc(e) && (n[e] = t[e]);
  return n;
}
function Pc(e) {
  if (!e) return Object.create(null);
  let t = Object.create(null);
  for (let n of Object.keys(e)) Mc(n) && (t[n] = e[n]);
  return t;
}
var Fc = () => {
    throw Error(
      `createServerOnlyFn() functions can only be called on the server!`,
    );
  },
  Ic = (e, t) => {
    let n = t || e || {};
    n.method === void 0 && (n.method = `GET`);
    let i = (e) => Ic(void 0, { ...n, validator: e, inputValidator: e });
    return Object.assign((e) => Ic(void 0, { ...n, ...e }), {
      options: n,
      middleware: (e) => {
        let t = [...(n.middleware || [])];
        e.map((e) => {
          r in e
            ? e.options.middleware && t.push(...e.options.middleware)
            : t.push(e);
        });
        let i = Ic(void 0, { ...n, middleware: t });
        return ((i[r] = !0), i);
      },
      validator: i,
      inputValidator: i,
      handler: (...e) => {
        let [t, r] = e,
          i = { ...n, extractedFn: t, serverFn: r },
          a = [...(i.middleware || []), Bc(i)];
        return (
          (t.method = n.method),
          Object.assign(
            async (e) => {
              let n = await Lc(a, `client`, {
                  ...t,
                  ...i,
                  data: e?.data,
                  headers: e?.headers,
                  signal: e?.signal,
                  fetch: e?.fetch,
                  context: Pc(),
                }),
                r = s(n.error);
              if (r) throw r;
              if (n.error) throw n.error;
              return n.result;
            },
            {
              ...t,
              method: n.method,
              __executeServer: async (e) => {
                let n = Fc(),
                  r = n.contextAfterGlobalMiddlewares;
                return await Lc(a, `server`, {
                  ...t,
                  ...e,
                  serverFnMeta: t.serverFnMeta,
                  context: Nc(e.context, r),
                  request: n.request,
                }).then((e) => ({
                  result: e.result,
                  error: e.error,
                  context: e.sendContext,
                }));
              },
            },
          )
        );
      },
    });
  };
async function Lc(e, t, r) {
  let i = Rc([...(l()?.functionMiddleware || []), ...e]);
  if (t === `server`) {
    let e = Fc({ throwIfNotFound: !1 });
    e?.executedRequestMiddlewares &&
      (i = i.filter((t) => !e.executedRequestMiddlewares.has(t)));
  }
  let a = async (e) => {
    let r = i.shift();
    if (!r) return e;
    try {
      let i = `validator` in r.options ? r.options.validator : void 0;
      (!i && `inputValidator` in r.options && (i = r.options.inputValidator),
        i && t === `server` && (e.data = await zc(i, e.data)));
      let o;
      if (
        (t === `client`
          ? `client` in r.options && (o = r.options.client)
          : `server` in r.options && (o = r.options.server),
        o)
      ) {
        let t = async (t = {}) => {
            let n = await a({
              ...e,
              ...t,
              context: Nc(e.context, t.context),
              sendContext: Nc(e.sendContext, t.sendContext),
              headers: p(e.headers, t.headers),
              _callSiteFetch: e._callSiteFetch,
              fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
              result:
                t.result === void 0
                  ? t instanceof Response
                    ? t
                    : e.result
                  : t.result,
              error: t.error ?? e.error,
            });
            if (n.error) throw n.error;
            return n;
          },
          r = await o({ ...e, next: t });
        if (n(r)) return { ...e, error: r };
        if (r instanceof Response) return { ...e, result: r };
        if (!r)
          throw Error(
            `User middleware returned undefined. You must call next() or return a result in your middlewares.`,
          );
        return r;
      }
      return a(e);
    } catch (t) {
      return { ...e, error: t };
    }
  };
  return a({
    ...r,
    headers: r.headers || {},
    sendContext: r.sendContext || {},
    context: r.context || Pc(),
    _callSiteFetch: r.fetch,
  });
}
function Rc(e, t = 100) {
  let n = new Set(),
    r = [],
    i = (e, a) => {
      if (a > t)
        throw Error(
          `Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`,
        );
      e.forEach((e) => {
        (e.options.middleware && i(e.options.middleware, a + 1),
          n.has(e) || (n.add(e), r.push(e)));
      });
    };
  return (i(e, 0), r);
}
async function zc(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = await e[`~standard`].validate(t);
    if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  if (`parse` in e) return e.parse(t);
  if (typeof e == `function`) return e(t);
  throw Error(`Invalid validator type!`);
}
function Bc(e) {
  return {
    "~types": void 0,
    options: {
      inputValidator: e.validator ?? e.inputValidator,
      client: async ({ next: t, sendContext: n, fetch: r, ...i }) => {
        let a = { ...i, context: n, fetch: r };
        return t(await e.extractedFn?.(a));
      },
      server: async ({ next: t, ...n }) => {
        let r = await e.serverFn?.(n);
        return t({ ...n, result: r });
      },
    },
  };
}
var Vc = Ic({ method: `POST` }).handler(
    i(`7527ac28ce95edce589b1ae7f6242756099aca4ea04ee7bdefdbc93955c483a7`),
  ),
  Hc = Bo(0.12, 0.13, 0.15),
  Uc = Bo(0.38, 0.4, 0.43),
  Wc = Bo(0.78, 0.76, 0.72),
  Gc = Bo(0.96, 0.95, 0.93),
  Kc = Bo(0.45, 0.24, 0.1),
  qc = Bo(0.16, 0.28, 0.4);
async function Jc(e, t, n, r) {
  let i = t.comps.slice(0, 4),
    [a, o] = await Promise.all([
      $c([t.subject, ...t.comps]),
      ((crPhotoDeadline = Date.now() + 3000), Promise.all([t.subject, ...i].map((e) => el(e)))),
    ]);
  await Yc(e, t, n, r, a, o, i);
}
async function Yc(e, t, n, r, i, a, o) {
  let s = e.addPage([612, 792]),
    c = await e.embedFont(_c.Helvetica),
    l = await e.embedFont(_c.HelveticaBold),
    u = n.caseNumber || A(t.pin) || k(t.pin),
    d = n.concluded ?? r.concluded,
    f =
      n.concluded == null
        ? r.concluded == null
          ? ``
          : `sales approach`
        : `income approach`,
    p = d != null && n.loa > 0 ? Math.round(d * n.loa) : n.assessed;
  (s.drawText(`CAP & REVIEW  ·  2026 COMMERCIAL REVIEWS`, {
    x: 36,
    y: 758,
    size: 8,
    font: c,
    color: Uc,
  }),
    s.drawText(`Exhibit — photographs, map, and value`, {
      x: 36,
      y: 740,
      size: 16,
      font: l,
      color: Hc,
    }),
    s.drawText(
      rl(
        [n.name, u && `Case ${u}`, t.address, t.township]
          .filter(Boolean)
          .join(`  ·  `),
        92,
      ),
      { x: 36, y: 722, size: 9, font: c, color: Hc },
    ));
  let m = [t.subject, ...t.comps].some((e) => e.lat != null && e.lng != null);
  if (i && m) {
    let n = await e.embedPng(i);
    (s.drawImage(n, { x: 36, y: 500, width: 540, height: 208 }),
      Zc(s, l, t, 36, 500, 540, 208),
      s.drawText(
        `Subject is marked S. Numbered points are the checked sales. Basemap © Esri.`,
        { x: 36, y: 486, size: 7, font: c, color: Uc },
      ));
  } else
    m
      ? (s.drawRectangle({
          x: 36,
          y: 500,
          width: 540,
          height: 208,
          color: Gc,
          borderColor: Wc,
          borderWidth: 0.6,
        }),
        Zc(s, l, t, 36, 500, 540, 208),
        s.drawText(
          `The street map did not load. Points are plotted from the sale coordinates.`,
          { x: 36, y: 486, size: 7, font: c, color: Uc },
        ))
      : (s.drawRectangle({
          x: 36,
          y: 500,
          width: 540,
          height: 208,
          color: Gc,
          borderColor: Wc,
          borderWidth: 0.6,
        }),
        s.drawText(`No coordinates on these sales, so the map is left blank.`, {
          x: 48,
          y: 604,
          size: 9,
          font: c,
          color: Uc,
        }));
  let h = [t.subject, ...o],
    g = (540 - 8 * (h.length - 1)) / h.length;
  for (let t = 0; t < h.length; t++) {
    let n = 36 + t * (g + 8),
      r = a[t];
    if (
      (s.drawRectangle({
        x: n,
        y: 392,
        width: g,
        height: 84,
        color: Gc,
        borderColor: Wc,
        borderWidth: 0.5,
      }),
      r && r.bytes)
    )
      try {
        let t = await crEmbedPhoto(e, r),
          i = t ? nl(t.width, t.height, g - 4, 72) : null;
        if (t && i)
          s.drawImage(t, {
            x: n + (g - i.w) / 2,
            y: 392 + (76 - i.h) / 2,
            width: i.w,
            height: i.h,
          });
        else il(s, c, `No photo`, n + 6, 428, 8, Uc);
        if (r && r.bytes && crPhotoCaption(r.source)) {
          let p = crPhotoCaption(r.source),
            w = Math.min(g - 4, p.length * 3.7 + 8);
          s.drawRectangle({ x: n + 2, y: 466, width: w, height: 10, color: Bo(1, 1, 1) });
          il(s, c, p, n + 4, 468, 6, Uc);
        }
      } catch {
        il(s, c, `No photo`, n + 6, 428, 8, Uc);
      }
    else il(s, c, `No photo`, n + 6, 428, 8, Uc);
    let i = t === 0 ? `Subject` : String(t),
      o = h[t].address.split(`,`)[0] ?? ``;
    (il(s, l, i, n, 378, 8, Hc), il(s, c, rl(o, 22), n, 366, 7, Uc));
  }
  (t.comps.length > o.length &&
    il(
      s,
      c,
      `${t.comps.length - o.length} more sales are on the grid only.`,
      36,
      352,
      7,
      Uc,
    ),
    s.drawText(`Income approach`, {
      x: 36,
      y: 336,
      size: 11,
      font: l,
      color: Hc,
    }),
    s.drawText(`Sales approach`, {
      x: 306,
      y: 336,
      size: 11,
      font: l,
      color: Hc,
    }));
  let _ = [
      [`Potential gross income`, j(n.pgi)],
      [`Vacancy`, j(n.vacancy ? -n.vacancy : 0)],
      [`Effective gross income`, j(n.egi)],
      [`Expenses, ex-tax`, j(n.expenses ? -n.expenses : 0)],
      [`Net operating income`, j(n.noi)],
      [`Market cap`, M(n.marketCap)],
      [`Tax load`, M(n.taxLoad)],
      [`Loaded cap`, M(n.loadedCap)],
      [`Income value`, j(n.concluded)],
      [`Assessed value`, j(n.assessed)],
    ],
    v = [
      [`Sales used`, String(r.count)],
      [`Average sale price`, j(r.avgPrice)],
      [`Price per square foot`, r.avgPsf == null ? `—` : j(r.avgPsf, 2)],
      [
        `Building size`,
        r.area > 0 ? `${Math.round(r.area).toLocaleString(`en-US`)} sf` : `—`,
      ],
      [`Assessor cap`, r.avgCap == null ? `—` : M(r.avgCap)],
      [`Assessor vacancy`, r.avgVacancy == null ? `—` : M(r.avgVacancy)],
      [`Indicated`, j(r.indicated)],
      [`Sales value`, j(r.concluded)],
      [
        `Assessed value`,
        j(r.concluded == null ? null : Math.round(r.concluded * n.loa)),
      ],
    ];
  (Xc(s, c, l, _, 36, 320, 254),
    Xc(s, c, l, v, 306, 320, 262),
    s.drawRectangle({
      x: 36,
      y: 36,
      width: 540,
      height: 96,
      color: Gc,
      borderColor: Wc,
      borderWidth: 0.8,
    }),
    s.drawText(`Final value conclusion`, {
      x: 48,
      y: 112,
      size: 9,
      font: c,
      color: Uc,
    }),
    s.drawText(d == null ? `—` : j(d), {
      x: 48,
      y: 92,
      size: 18,
      font: l,
      color: Hc,
    }));
  let y =
      d == null
        ? `Neither approach has a concluded value yet.`
        : `Concluded on the ${f}. Assessed value ${j(p)} at ${M(n.loa)}.`,
    b =
      n.concluded != null && r.concluded != null
        ? `Income ${j(n.concluded)}. Sales ${j(r.concluded)}. Difference ${j(n.concluded - r.concluded)}.`
        : ``,
    x =
      n.originalAv > 0 && p != null
        ? `Original assessment ${j(n.originalAv)}. Change ${j(p - n.originalAv)}.`
        : ``,
    S = 74;
  for (let e of [y, b, x].filter(Boolean))
    (s.drawText(e, { x: 48, y: S, size: 8, font: c, color: Hc }), (S -= 12));
}
function Xc(e, t, n, r, i, a, o) {
  r.forEach(([s, c], l) => {
    let u = a - l * 13,
      d = l === r.length - 2 || l === r.length - 1;
    e.drawText(s, { x: i, y: u, size: 8, font: t, color: Uc });
    let f = d ? n : t,
      p = f.widthOfTextAtSize(c, 8);
    e.drawText(c, { x: i + o - p, y: u, size: 8, font: f, color: Hc });
  });
}
function Zc(e, t, n, r, i, a, o) {
  let s = [n.subject, ...n.comps].filter((e) => e.lat != null && e.lng != null);
  if (!s.length) return;
  let c = Qc(s);
  s.forEach((n, s) => {
    let l = r + ((n.lng - c.minLng) / (c.maxLng - c.minLng)) * a,
      u = i + ((n.lat - c.minLat) / (c.maxLat - c.minLat)) * o,
      d = s === 0;
    (e.drawEllipse({
      x: l,
      y: u,
      xScale: d ? 7 : 5.5,
      yScale: d ? 7 : 5.5,
      color: Bo(1, 1, 1),
    }),
      e.drawEllipse({
        x: l,
        y: u,
        xScale: d ? 5 : 3.8,
        yScale: d ? 5 : 3.8,
        color: d ? Kc : qc,
      }));
    let f = d ? `S` : String(s);
    e.drawText(f, { x: l + 7, y: u - 2, size: 7, font: t, color: Hc });
  });
}
function Qc(e) {
  let t = Math.min(...e.map((e) => e.lat)),
    n = Math.max(...e.map((e) => e.lat)),
    r = Math.min(...e.map((e) => e.lng)),
    i = Math.max(...e.map((e) => e.lng)),
    a = Math.max((n - t) * 0.28, 0.012),
    o = Math.max((i - r) * 0.28, 0.014);
  return (
    (t -= a),
    (n += a),
    (r -= o),
    (i += o),
    { minLat: t, maxLat: n, minLng: r, maxLng: i }
  );
}
async function $c(e) {
  let t = e.filter((e) => e.lat != null && e.lng != null);
  if (!t.length) return null;
  let n = Qc(t),
    r = `${n.minLng},${n.minLat},${n.maxLng},${n.maxLat}`,
    i = `https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/export?bbox=${encodeURIComponent(r)}&bboxSR=4326&size=1080,416&format=png&f=image`;
  try {
    let e = await fetch(i);
    if (!e.ok) return null;
    let t = new Uint8Array(await e.arrayBuffer());
    return t[0] === 137 ? t : null;
  } catch {
    return null;
  }
}
async function el(e) {
  try {
    let r = await crRaceTimeout(crPinPhotoBytes(e), Math.max(200, (crPhotoDeadline || Date.now() + 3000) - Date.now()));
    return r && r.bytes ? r : { bytes: null, source: null };
  } catch {
    return { bytes: null, source: null };
  }
  try {
    let t = await Vc({ data: e });
    return t ? await tl(t) : null;
  } catch {
    return null;
  }
}
async function tl(e) {
  let t = new Image();
  ((t.decoding = `async`), (t.src = e), await t.decode());
  let n = Math.min(1, 720 / Math.max(t.naturalWidth, t.naturalHeight)),
    r = Math.max(1, Math.round(t.naturalWidth * n)),
    i = Math.max(1, Math.round(t.naturalHeight * n)),
    a = document.createElement(`canvas`);
  ((a.width = r), (a.height = i));
  let o = a.getContext(`2d`);
  if (!o) return null;
  o.drawImage(t, 0, 0, r, i);
  let s = await new Promise((e) => a.toBlob(e, `image/jpeg`, 0.8));
  return s ? new Uint8Array(await s.arrayBuffer()) : null;
}
function nl(e, t, n, r) {
  let i = Math.min(n / e, r / t);
  return { w: e * i, h: t * i };
}
function rl(e, t) {
  let n = e.replace(/\s+/g, ` `).trim();
  return n.length > t ? `${n.slice(0, t - 3)}...` : n;
}
function il(e, t, n, r, i, a, o) {
  e.drawText(n, { x: r, y: i, size: a, font: t, color: o });
}
var al = new Set([550, 580, 581, 583, 587, 589, 593]),
  ol = `Sales Price  Sq Ft Sales Price  Impr Sq Ft`;
function sl(e, t, n) {
  if (
    e === `5b` ||
    e === `inc15` ||
    e === `inc20` ||
    /industrial|warehouse|manufactur|distribution/i.test(n)
  )
    return `industrial`;
  for (let e of t.split(`,`)) {
    let t = Number(e.replace(/\D/g, ``));
    if (al.has(t) || (t >= 600 && t < 700)) return `industrial`;
  }
  return `commercial`;
}
function cl(e) {
  return {
    file: `./forms/PTAB6C.pdf`,
    label: `PTAB-6C commercial`,
    blank: `https://ptab.illinois.gov/PDF/PTAB6C.pdf`,
  };
}
async function ll(e, t, n, r) {
  let i = await Dc.load(e),
    a = i.getForm(),
    o = await i.embedFont(_c.Helvetica),
    s = (e, t) => {
      let n = t.replace(/\s+/g, ` `).trim();
      if (n)
        try {
          let t = a.getTextField(e);
          (t.setText(n.slice(0, 90)), t.updateAppearances(o));
        } catch {}
    };
  return (
    s(`County`, `Cook`),
    s(`Property Tax Appeal Board Docket No`, t.docket || ``),
    s(`Appellant`, t.appellant || ``),
    crFillPtabExtras(s, a, t),
    s(`Parcel Address`, t.address),
    s(`Property ID No PIN`, fl(t.pin)),
    s(`Township`, t.township),
    s(
      `In Cook County  Property classification pursuant to Cook County classification ordinance`,
      t.classLine,
    ),
    s(`Total_2`, pl(t.mailedAv)),
    s(`Total_3`, pl(t.afterAv)),
    s(
      `Indicate proof of this contention below or attach appropriate evidence 1`,
      t.proof1,
    ),
    s(
      `Indicate proof of this contention below or attach appropriate evidence 2`,
      t.proof2,
    ),
    dl(s, `Subject`, t.subject, ``),
    t.comps.slice(0, 9).forEach((e, n) => {
      dl(s, `Comp ${n + 1}`, e, hl(t.subject, e));
    }),
    a.acroForm.dict.set(q.of(`NeedAppearances`), rr.True),
    await crValuationPdfPages(i, t, n, r),
    await Jc(i, t, n, r),
    await crNotesPdfPages(i, t),
    i.setTitle(`${crPtabPdfBase({ pin: t.pin })}.pdf`),
    i.save()
  );
}
async function ul(e, t, n, w) {
  let r = cl(e.kind),
    i = await fetch(r.file);
  if (!i.ok) throw Error(`The PTAB form did not load.`);
  let a = await ll(await i.arrayBuffer(), e, t, n),
    o = new Blob([a.buffer.slice(a.byteOffset, a.byteOffset + a.byteLength)], {
      type: `application/pdf`,
    }),
    s = URL.createObjectURL(o);
  crPresentPdf(s, `${crPtabPdfBase({ pin: e.pin })}.pdf`, w);
}
function dl(e, t, n, r) {
  crFillGridRow(e, t, n, r);
}
function fl(e) {
  return k(e);
}
function pl(e) {
  return e > 0 ? Math.round(e).toLocaleString(`en-US`) : ``;
}
function ml(e) {
  return e ? new Date(e).toLocaleDateString(`en-US`) : ``;
}
function hl(e, t) {
  let n = gl(e, t),
    r =
      t.township &&
      e.township &&
      t.township.toUpperCase() !== e.township.toUpperCase()
        ? t.township
        : ``;
  if (n == null) return r;
  let i = `${n.toFixed(2)} mi`;
  return r ? `${i} · ${r}` : i;
}
function gl(e, t) {
  if (e.lat == null || e.lng == null || t.lat == null || t.lng == null)
    return null;
  let n = Math.PI / 180,
    r = (t.lat - e.lat) * n,
    i = (t.lng - e.lng) * n,
    a =
      Math.sin(r / 2) ** 2 +
      Math.cos(e.lat * n) * Math.cos(t.lat * n) * Math.sin(i / 2) ** 2;
  return 7917.5226 * Math.asin(Math.min(1, Math.sqrt(a)));
}
var $ = c(),
  _l = new Map();
function vl(e) {
  return Promise.resolve(null);
  let t = _l.get(e);
  if (t) return t;
  let n = Vc({ data: e }).catch((t) => {
    throw (_l.delete(e), t);
  });
  return (_l.set(e, n), n);
}
function yl({ pin: e }) {
  return (0, $.jsx)(CrPropertyPhoto, { pin: e, variant: `thumb` });
}
function bl({ pins: e, empty: t = `No PIN`, size: n = `compact` }) {
  let r = e.flatMap((e) => {
    let t = ie(e),
      n = k(e),
      r = e.replace(/\D/g, ``).padStart(14, `0`);
    return t && n ? [{ href: t, label: n, pin: r }] : [];
  });
  return r.length
    ? (0, $.jsx)(`span`, {
        className: `pin-photos`,
        children: r.map((e) =>
          (0, $.jsxs)(
            `a`,
            {
              className: `pin-photo${n === `primary` ? ` is-primary` : ``}`,
              href: e.href,
              target: `_blank`,
              rel: `noreferrer`,
              children: [
                (0, $.jsx)(yl, { pin: e.pin }),
                (0, $.jsx)(`span`, { children: e.label }),
              ],
            },
            e.href,
          ),
        ),
      })
    : (0, $.jsx)($.Fragment, { children: t });
}
var xl = `https://datacatalog.cookcountyil.gov/resource/wvhk-k5uv.json`,
  Sl = [
    `pin`,
    `sale_date`,
    `sale_price`,
    `class`,
    `nbhd`,
    `township_code`,
    `deed_type`,
    `buyer_name`,
    `seller_name`,
    `doc_no`,
  ].join(`,`);
async function Cl(e, t) {
  let n = e.replace(/\D/g, ``).padStart(14, `0`).slice(-14),
    r = await wl(`pin='${n}'`, 6),
    i = r.find((e) => e.neighborhood)?.neighborhood ?? ``,
    a = r.find((e) => e.classCode)?.classCode || El(t);
  return !i || !a
    ? { subject: r, comps: [], neighborhood: i, classCode: a }
    : {
        subject: r,
        comps: await wl(
          [
            `class='${a}'`,
            `nbhd='${i}'`,
            `pin!='${n}'`,
            `sale_filter_less_than_10k=false`,
            `sale_filter_deed_type=false`,
            `sale_filter_same_sale_within_365=false`,
            `is_multisale=false`,
            `sale_price > 10000`,
          ].join(` AND `),
          6,
        ),
        neighborhood: i,
        classCode: a,
      };
}
async function wl(e, t) {
  let n = new URLSearchParams({
      $select: Sl,
      $where: e,
      $order: `sale_date DESC`,
      $limit: String(t),
    }),
    r = await fetch(`${xl}?${n}`);
  if (!r.ok) throw Error(`Parcel sales answered ${r.status}`);
  return (await r.json()).map(Tl).filter((e) => e.salePrice > 0 || e.saleDate);
}
function Tl(e) {
  let t = String(e.pin ?? ``)
      .replace(/\D/g, ``)
      .padStart(14, `0`)
      .slice(-14),
    n = Number(e.sale_price);
  return {
    pin: t,
    saleDate: String(e.sale_date ?? ``).slice(0, 10),
    salePrice: Number.isFinite(n) ? n : 0,
    classCode: String(e.class ?? ``),
    neighborhood: String(e.nbhd ?? ``),
    townshipCode: String(e.township_code ?? ``),
    deedType: String(e.deed_type ?? ``),
    buyer: String(e.buyer_name ?? ``),
    seller: String(e.seller_name ?? ``),
    docNo: String(e.doc_no ?? ``),
  };
}
function El(e) {
  return (e.split(`,`)[0] ?? ``).replace(/\D/g, ``);
}
function Dl({ spots: t }) {
  let n = (0, C.useRef)(null),
    r = (0, C.useRef)(null),
    i = (0, C.useRef)(t);
  return (
    (i.current = t),
    (0, C.useEffect)(() => {
      let t = !1,
        a = null;
      return (
        (async () => {
          let o = await u(
            () =>
              import(`./leaflet-src-N2Z2ANU4.js`).then((t) => e(t.default, 1)),
            __vite__mapDeps([0, 1]),
          );
          await u(() => Promise.resolve({}), __vite__mapDeps([2]));
          let s = o.default ?? o;
          if (t || !n.current) return;
          ((a = s.map(n.current, { scrollWheelZoom: !0 })),
            s
              .tileLayer(
                `https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,
                { attribution: `Tiles © Esri`, maxZoom: 19 },
              )
              .addTo(a));
          let c = s.layerGroup().addTo(a),
            l = () => {
              c.clearLayers();
              let e = i.current.filter(
                (e) => Number.isFinite(e.lat) && Number.isFinite(e.lng),
              );
              for (let t of e) {
                let e = s.marker([t.lat, t.lng], {
                    icon: Ol(s, t),
                    zIndexOffset: t.role === `subject` ? 800 : 0,
                  }),
                  n = [t.title, t.detail].filter(Boolean).join(` — `);
                (e.bindTooltip(n, { direction: `top`, offset: [0, -14] }),
                  e.addTo(c));
              }
              if (!e.length) {
                a?.setView([41.88, -87.75], 10);
                return;
              }
              if (e.length === 1) {
                a?.setView([e[0].lat, e[0].lng], 15);
                return;
              }
              a?.fitBounds(
                e.map((e) => [e.lat, e.lng]),
                { padding: [48, 72], maxZoom: 15 },
              );
            };
          ((r.current = { paint: l }),
            l(),
            window.setTimeout(() => a?.invalidateSize(), 200));
        })(),
        () => {
          ((t = !0), a?.remove(), (r.current = null));
        }
      );
    }, []),
    (0, C.useEffect)(() => {
      r.current?.paint();
    }, [t]),
    (0, $.jsxs)(`div`, {
      className: `sales-map relative`,
      children: [
        (0, $.jsx)(`div`, { ref: n, className: `cr-salesmap h-[420px] w-full` }),
        t.length
          ? null
          : (0, $.jsx)(`p`, {
              className: `pointer-events-none absolute inset-x-0 top-3 text-center text-sm text-muted`,
              children: `Search a PIN to place the subject and the comps.`,
            }),
      ],
    })
  );
}
function Ol(e, t) {
  let n = t.role === `subject` ? `#c62828` : t.role === `manual` ? `#7b1fa2` : `#2e7d32`,
    r = t.role === `subject` ? `#8e1c1c` : t.role === `manual` ? `#4a148c` : `#1b5e20`;
  return e.divIcon({
    className: `loc-pin`,
    html: `<span class="loc-pin-row"><i style="background:${n}"></i><em style="color:${r}">${kl(t.label)}</em></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}
function kl(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`);
}
var Al = `https://services2.arcgis.com/u5yy0jOf4YRHqe9N/arcgis/rest/services/Copy_Of_COMMERCIAL_MAP_DATA_SALES/FeatureServer/0/query`,
  jl = `https://experience.arcgis.com/experience/49bbd59a92fb4601af59a47f7aab97a4`,
  Ml = [
    `keypin`,
    `pins`,
    `address`,
    `township_name`,
    `class_es_`,
    `property_type_use`,
    `pgi`,
    `noi`,
    `caprate`,
    `vacancy`,
    `Exp`,
    `excesslandval`,
    `netrentablesf`,
    `bldgsf`,
    `tot_units`,
    `adj_rent_sf`,
    `finalmarketvalue`,
    `mailed_tot`,
    `board_tot`,
    `sale_price`,
    `sale_date`,
    `tax_year`,
  ].join(`,`);
function Nl(e) {
  let c0 = crClassId(e);
  if (c0) return c0;
  let t = Number(e.replace(/\D/g, ``));
  return t >= 200 && t < 300
    ? { classId: `2`, loa: 0.1 }
    : t >= 300 && t < 400
      ? { classId: `3`, loa: 0.1 }
      : t >= 400 && t < 500
        ? { classId: `4`, loa: 0.2 }
        : { classId: `5a`, loa: 0.25 };
}
function Pl(e) {
  return !Number.isFinite(e) || e <= 0 ? 0 : e > 1 ? e / 100 : e;
}
function Fl(e) {
  return typeof e == `number` && Number.isFinite(e)
    ? e
    : typeof e == `string` && e.trim() && Number.isFinite(Number(e))
      ? Number(e)
      : 0;
}
function Il(e) {
  return e == null ? `` : String(e).trim();
}
function Ll(e) {
  let t = e.replace(/\D/g, ``);
  return t.length < 10 || t.length > 14
    ? ``
    : k(t.padStart(14, `0`).slice(-14));
}
function Rl(e, t) {
  let n = new Set(),
    r = [];
  for (let i of `${e},${t}`.split(/[,;]+/)) {
    let e = i.replace(/\D/g, ``);
    if (e.length < 10 || e.length > 14) continue;
    let t = k(e.padStart(14, `0`).slice(-14));
    n.has(t) || (n.add(t), r.push(t));
  }
  return r;
}
function zl(e) {
  let t = e.attributes;
  if (!t) return null;
  let n = Il(t.class_es_),
    r = Nl(n),
    i = Rl(Il(t.pins), Il(t.keypin)),
    a = i[0] ?? ``,
    o = Fl(t.netrentablesf) || Fl(t.bldgsf),
    s = e.geometry?.y,
    c = e.geometry?.x;
  return {
    keypin: Ll(Il(t.keypin)) || a,
    pin: a,
    pins: i,
    address: Il(t.address),
    township: Il(t.township_name),
    classCode: n,
    sheet: Il(t.sheet),
    classId: r.classId,
    loa: r.loa,
    use: Il(t.property_type_use),
    pgi: Fl(t.pgi),
    noi: Fl(t.noi),
    capRate: Pl(Fl(t.caprate)),
    vacancy: Pl(Fl(t.vacancy)),
    expenseRatio: Pl(Fl(t.Exp)),
    excessLand: Fl(t.excesslandval),
    nra: o,
    units: Fl(t.tot_units),
    rentPerSf: Fl(t.adj_rent_sf),
    finalMv: Fl(t.finalmarketvalue),
    mailedAv: Fl(t.mailed_tot),
    boardAv: Fl(t.board_tot),
    salePrice: Fl(t.sale_price),
    saleDate: Fl(t.sale_date) > 0 ? Fl(t.sale_date) : null,
    taxYear: Fl(t.tax_year),
    lat: typeof s == `number` ? s : null,
    lng: typeof c == `number` ? c : null,
  };
}
function Bl(e) {
  return e
    .replace(/[^A-Za-z0-9 \-.,#]/g, ` `)
    .replace(/\s+/g, ` `)
    .trim();
}
async function Vl(e, t, n) {
  let r = new URLSearchParams({
    f: `json`,
    where: e,
    outFields: Ml,
    returnGeometry: `true`,
    outSR: `4326`,
    resultRecordCount: String(t),
    ...n,
  });
  n?.orderByFields || r.set(`orderByFields`, `sale_date DESC`);
  let i = await fetch(`${Al}?${r.toString()}`);
  if (!i.ok) throw Error(`Sales layer answered ${i.status}`);
  let a = await i.json();
  if (a.error) throw Error(a.error.message || `Sales layer rejected the query`);
  return (a.features ?? []).map(zl).filter((e) => e != null);
}
function Hl(e) {
  return Zl(e, 12);
}
var Ul = `https://datacatalog.cookcountyil.gov/api/odata/v4/csik-bsws`,
  Wl = `https://datacatalog.cookcountyil.gov/resource/csik-bsws.json`,
  Gl = [
    `keypin`,
    `pins`,
    `address`,
    `township`,
    `class_es`,
    `sheet`,
    `property_type_use`,
    `pgi`,
    `noi`,
    `caprate`,
    `vacancy`,
    `exp`,
    `excesslandval`,
    `netrentablesf`,
    `bldgsf`,
    `tot_units`,
    `adj_rent_sf`,
    `finalmarketvalue`,
    `year`,
  ].join(`,`),
  Kl = null;
function ql() {
  return (
    (Kl ||= Ql().catch((e) => {
      throw ((Kl = null), e);
    })),
    Kl
  );
}
async function Jl(e) {
  let t = await fetch(`${Wl}?${new URLSearchParams(e)}`);
  if (!t.ok) throw Error(`Assessor catalog answered ${t.status} from ${Ul}`);
  let n = await t.json();
  if (!Array.isArray(n)) throw Error(`Assessor catalog rejected the query`);
  return n;
}
function Yl(e) {
  let t = Il(e.class_es),
    n = Nl(t),
    r = Rl(Il(e.pins), Il(e.keypin)),
    i = r[0] ?? ``;
  return i
    ? {
        keypin: Ll(Il(e.keypin)) || i,
        pin: i,
        pins: r,
        address: Il(e.address),
        township: Il(e.township),
        classCode: t,
        sheet: Il(e.sheet),
        classId: n.classId,
        loa: n.loa,
        use: Il(e.property_type_use),
        pgi: Fl(e.pgi),
        noi: Fl(e.noi),
        capRate: Pl(Fl(e.caprate)),
        vacancy: Pl(Fl(e.vacancy)),
        expenseRatio: Pl(Fl(e.exp)),
        excessLand: Fl(e.excesslandval),
        nra: Fl(e.netrentablesf) || Fl(e.bldgsf),
        units: Fl(e.tot_units),
        rentPerSf: Fl(e.adj_rent_sf),
        finalMv: Fl(e.finalmarketvalue),
        mailedAv: 0,
        boardAv: 0,
        salePrice: 0,
        saleDate: null,
        taxYear: Fl(e.year),
        lat: null,
        lng: null,
      }
    : null;
}
function Xl(e, t) {
  let n = new Set(),
    r = [];
  for (let i of e) {
    let e = Yl(i);
    if (!e) continue;
    let a = e.keypin || e.pin;
    if (!n.has(a) && (n.add(a), r.push(e), r.length >= t)) break;
  }
  return r;
}
async function Zl(e, t) {
  let n = Bl(e);
  if (n.length < 3) return [];
  let r = n.replace(/\D/g, ``),
    i;
  if (r.length >= 10 && r.length <= 14) {
    let e = k(r);
    i = `keypin='${e}' OR pins like '%${e}%'`;
  } else {
    let e = n.toUpperCase().replace(/'/g, `''`);
    i = `upper(address) like '%${e}%' OR upper(township) like '%${e}%'`;
  }
  return Xl(
    await Jl({ $select: Gl, $where: i, $order: `year DESC`, $limit: `80` }),
    t,
  );
}
async function Ql() {
  let e = 2e4,
    t = [];
  for (let n = 0; n < 2e5; n += e) {
    let r = await Jl({
      $select: `keypin,max(address) as address`,
      $group: `keypin`,
      $order: `keypin`,
      $limit: `20000`,
      $offset: String(n),
    });
    for (let e of r) {
      let n = Il(e.keypin).replace(/\D/g, ``);
      n.length < 10 ||
        t.push({
          pin: k(n.padStart(14, `0`).slice(-14)),
          address: Il(e.address),
        });
    }
    if (r.length < e) break;
  }
  return t;
}
var $l = [
  { label: `Under 5,000 sf`, min: 1, max: 4999 },
  { label: `5,000–15,000 sf`, min: 5e3, max: 14999 },
  { label: `15,000–50,000 sf`, min: 15e3, max: 49999 },
  { label: `50,000–150,000 sf`, min: 5e4, max: 149999 },
  { label: `150,000 sf and up`, min: 15e4, max: 5e6 },
];
function eu(e) {
  return e > 0
    ? ($l.find((t) => e >= t.min && e <= t.max)?.label ?? `150,000 sf and up`)
    : `Size unknown`;
}
function tu(e) {
  if (!(e > 0)) return [1, 5e6];
  let t = $l.findIndex((t) => e >= t.min && e <= t.max),
    n = t < 0 ? 0 : t;
  return [$l[Math.max(0, n - 1)].min, $l[Math.min($l.length - 1, n + 1)].max];
}
function nu(e) {
  let t = new Set();
  for (let n of e.split(`,`)) {
    let e = n.trim();
    e && t.add(e);
  }
  return [...t];
}
var ru = `https://datacatalog.cookcountyil.gov/resource/wvhk-k5uv.json`;
async function iu(e) {
  let t = nu(e.classCode),
    n = e.use.trim();
  if (!t.length && !n) return [];
  let [r, i] = tu(e.nra),
    a = new Set(
      [e.keypin, e.pin, ...e.pins].map((e) =>
        e.replace(/\D/g, ``).replace(/^0+/, ``),
      ),
    ),
    o = t.map(au).filter((e) => e.length >= 3),
    s = await cu(o, 1e3);
  if (s.length < 60) {
    let e = await lu([...new Set(o.map((e) => e.slice(0, 1)).filter(Boolean))], 1e3),
      t = new Set(s.map((e) => `${e.pin}-${e.saleDate}`));
    for (let n of e) t.has(`${n.pin}-${n.saleDate}`) || s.push(n);
  }
  s = s.filter((e) => !a.has(e.pin.replace(/^0+/, ``)));
  let c = await crLocate(s.map((e) => e.pin)),
    l = e.lat != null && e.lng != null,
    u = s.map((t) => {
      let n = c.get(crPin14(t.pin));
      return {
        ...t,
        lat: n?.lat ?? null,
        lng: n?.lng ?? null,
        distanceMi: l && n ? vu(e.lat, e.lng, n.lat, n.lng) : null,
      };
    });
  l && (u = u.filter((e) => e.distanceMi != null && e.distanceMi <= CR_RADIUS_MI));
  u.sort(
    (e, t) =>
      (e.distanceMi ?? 1e9) - (t.distanceMi ?? 1e9) ||
      (t.saleDate ?? 0) - (e.saleDate ?? 0),
  );
  let d = u.slice(0, 150),
    f = await du(d, r, i, a);
  f.length < 6 && (f = mu(f, await du(d, 1, 5e6, a)));
  return (await pu(
    f
      .sort(
        (e, t) =>
          (e.distanceMi ?? 1e9) - (t.distanceMi ?? 1e9) ||
          (t.saleDate ?? 0) - (e.saleDate ?? 0),
      )
      .slice(0, 30),
  )).map((t) => ({
    ...t,
    distanceMi: l && t.lat != null ? vu(e.lat, e.lng, t.lat, t.lng) : t.distanceMi,
  }));
}
function au(e) {
  return e.replace(/\D/g, ``);
}
function ou() {
  let e = new Date();
  return (
    e.setFullYear(e.getFullYear() - (typeof CR_SALE_YEARS === `number` ? CR_SALE_YEARS : 2)),
    `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}T00:00:00`
  );
}
function su(e) {
  let [t, n, r] = e.slice(0, 10).split(`-`).map(Number);
  return !t || !n || !r ? 0 : new Date(t, n - 1, r).getTime();
}
async function cu(e, t) {
  let n = [...new Set(e)];
  return n.length
    ? uu(`(${n.map((e) => `class='${e}'`).join(` OR `)})`, t)
    : [];
}
async function lu(e, t) {
  let n = [...new Set(e.filter((e) => /^\d$/.test(e)))];
  return n.length
    ? uu(`(${n.map((e) => `class like '${e}%'`).join(` OR `)})`, t)
    : [];
}
async function uu(e, t) {
  let n = [
      `sale_date >= '${ou()}'`,
      `sale_price > 10000`,
      `sale_filter_less_than_10k=false`,
      `sale_filter_deed_type=false`,
      `sale_filter_same_sale_within_365=false`,
      `is_multisale=false`,
      e,
    ].join(` AND `),
    r = new URLSearchParams({
      $select: `pin,class,sale_date,sale_price,deed_type,is_multisale`,
      $where: n,
      $order: `sale_date DESC`,
      $limit: String(t),
    }),
    i = await fetch(`${ru}?${r}`);
  if (!i.ok) throw Error(`Parcel sales answered ${i.status}`);
  let a = await i.json();
  if (!Array.isArray(a)) throw Error(`Parcel sales rejected the query`);
  let o = [];
  for (let e of a) {
    let t = Il(e.pin).replace(/\D/g, ``),
      n = su(Il(e.sale_date)),
      r = Fl(e.sale_price);
    t.length < 10 ||
      !(r > 1e4) ||
      !(n > 0) ||
      o.push({ pin: t, classCode: Il(e.class), salePrice: r, saleDate: n, deedType: Il(e.deed_type), is_multisale: e.is_multisale === !0 || e.is_multisale === `true` });
  }
  return o;
}
async function du(e, t, n, r) {
  let i = e.filter((e) => !r.has(e.pin.replace(/^0+/, ``))),
    a = await fu(i.map((e) => e.pin)),
    o = new Map(),
    s = [];
  for (let e of i) {
    let r = e.pin.replace(/^0+/, ``),
      i = a.find((e) =>
        [e.keypin, e.pin, ...e.pins].some(
          (e) => e.replace(/\D/g, ``).replace(/^0+/, ``) === r,
        ),
      );
    if (!i) continue;
    let c = i.keypin || i.pin;
    if (o.has(c)) continue;
    let l = i.nra;
    if (t > 1 && (l < t || l > n)) continue;
    let u = { ...i, salePrice: e.salePrice, saleDate: e.saleDate, lat: e.lat ?? i.lat, lng: e.lng ?? i.lng, distanceMi: e.distanceMi ?? null };
    (o.set(c, u), s.push(u));
  }
  return s;
}
async function fu(e) {
  let t = [
      ...new Set(
        e.map((e) => e.replace(/\D/g, ``)).filter((e) => e.length >= 10),
      ),
    ],
    n = [],
    cb = [];
  for (let e = 0; e < t.length; e += 25) cb.push(t.slice(e, e + 25));
  for (let [r, i] of await Promise.all(cb.map(async (r) => [r, await Jl({
        $select: Gl,
        $where: r
          .map((e) => {
            let t = k(e.padStart(14, `0`).slice(-14));
            return `keypin='${t}' OR pins like '%${t}%'`;
          })
          .join(` OR `),
        $order: `year DESC`,
        $limit: `200`,
      })])))
    n.push(...Xl(i, r.length));
  return n;
}
async function pu(e) {
  let t = e
    .map((e) => (e.keypin || e.pin).replace(/\D/g, ``).replace(/^0+/, ``))
    .filter(Boolean);
  if (!t.length) return e;
  try {
    let n = await Vl(`keypin IN (${t.join(`,`)})`, Math.max(t.length, 1)),
      r = new Map(
        n.map((e) => [
          (e.keypin || e.pin).replace(/\D/g, ``).replace(/^0+/, ``),
          e,
        ]),
      );
    return e.map((e) => {
      let t = r.get((e.keypin || e.pin).replace(/\D/g, ``).replace(/^0+/, ``));
      return t
        ? {
            ...e,
            lat: t.lat ?? e.lat,
            lng: t.lng ?? e.lng,
            mailedAv: e.mailedAv || t.mailedAv,
            boardAv: e.boardAv || t.boardAv,
          }
        : e;
    });
  } catch {
    return e;
  }
}
function mu(e, t) {
  let n = new Set(e.map((e) => e.keypin || e.pin)),
    r = [...e];
  for (let e of t) {
    let t = e.keypin || e.pin;
    n.has(t) || (n.add(t), r.push(e));
  }
  return r;
}
function hu(e, t, n) {
  return (
    (t && e.township.toUpperCase() === t ? 0 : 2) +
    (n.has(e.classCode) || [...n].some((t) => e.classCode.startsWith(t))
      ? 0
      : 1)
  );
}
function gu(e) {
  let t = new Set(),
    n = [];
  for (let r of e.split(/[\s,;]+/)) {
    let e = r.replace(/\D/g, ``);
    if (e.length < 10 || e.length > 14) continue;
    let i = k(e);
    t.has(i) || (t.add(i), n.push(i));
  }
  return n;
}
async function _u(e) {
  let t = gu(e).slice(0, 15);
  if (!t.length) return { found: [], missing: [] };
  let n = Xl(
      await Jl({
        $select: Gl,
        $where: t
          .map((e) => `keypin='${e}' OR pins like '%${e}%'`)
          .join(` OR `),
        $order: `year DESC`,
        $limit: `80`,
      }),
      t.length,
    ),
    r = new Set(n.flatMap((e) => [e.keypin, ...e.pins]));
  return { found: n, missing: t.filter((e) => !r.has(e)) };
}
function vu(e, t, n, r) {
  let i = Math.PI / 180,
    a = (n - e) * i,
    o = (r - t) * i,
    s =
      Math.sin(a / 2) ** 2 +
      Math.cos(e * i) * Math.cos(n * i) * Math.sin(o / 2) ** 2;
  return 7917.6 * Math.asin(Math.min(1, Math.sqrt(s)));
}
async function yu(e) {
  if (e.lat != null && e.lng != null) return e;
  let t = (e.keypin || e.pin).replace(/\D/g, ``).replace(/^0+/, ``);
  if (!t) return e;
  try {
    let [n] = await Vl(`keypin = ${t}`, 1);
    return n?.lat == null || n.lng == null
      ? e
      : {
          ...e,
          lat: n.lat,
          lng: n.lng,
          mailedAv: e.mailedAv || n.mailedAv,
          boardAv: e.boardAv || n.boardAv,
        };
  } catch {
    return e;
  }
}
function bu(e) {
  let t = !(e.pgi > 0) && e.rentPerSf > 0;
  return {
    name: e.address || e.pin || `Sales map case`,
    pin: k(e.pin),
    address: e.address,
    township: e.township,
    taxYear: e.taxYear > 0 ? e.taxYear : 2026,
    classId: e.classId,
    loa: e.loa,
    nra: e.nra,
    units: e.units,
    pgiMode: t ? `perSf` : `direct`,
    pgi: e.pgi,
    rentPerSf: e.rentPerSf,
    vacancyRate: e.vacancy,
    expenseMode: `ratio`,
    expenseRatio: e.expenseRatio,
    marketCap: e.capRate,
    additionalLand: e.excessLand,
    currentAv: e.boardAv || e.mailedAv,
    note: xu(e),
    lat: e.lat,
    lng: e.lng,
    heading: 0,
  };
}
function xu(e) {
  let t = e.saleDate ? new Date(e.saleDate).toLocaleDateString(`en-US`) : ``;
  return [
    `From the Assessor commercial valuation catalog, ${e.pins.length > 1 ? e.pins.join(`, `) : e.pin}.`,
    e.classCode ? `Class ${e.classCode}.` : ``,
    e.use ? `${e.use}.` : ``,
    e.finalMv ? `Assessor final market value ${j(e.finalMv)}.` : ``,
    e.salePrice ? `Sale ${j(e.salePrice)}${t ? ` on ${t}` : ``}.` : ``,
    e.capRate
      ? `Assessor cap ${M(e.capRate)} is the unloaded market cap; the district tax load (factor × level × tax-code rate) is added to it.`
      : ``,
  ]
    .filter(Boolean)
    .join(` `);
}
function Su(e) {
  return !(e.noi > 0) || !(e.finalMv > 0) ? null : e.noi / e.finalMv;
}
async function Cu(e, t) {
  let n = [e.trim(), t.trim(), `Cook County, IL`].filter(Boolean).join(`, `);
  if (e.trim().length < 4) return null;
  let r = new URLSearchParams({ f: `json`, maxLocations: `1`, SingleLine: n }),
    i = await fetch(
      `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?${r}`,
    );
  if (!i.ok) throw Error(`Address search did not answer`);
  let a = (await i.json()).candidates?.[0]?.location;
  return typeof a?.y != `number` || typeof a?.x != `number`
    ? null
    : { lat: a.y, lng: a.x };
}
var wu = 48;
function Tu({ disabled: e, onLand: t, onCurrent: n }) {
  let r = (0, C.useRef)(null),
    i = (0, C.useRef)([]),
    a = (0, C.useRef)(0),
    o = (0, C.useRef)(!1),
    s = (0, C.useRef)(0),
    [c, l] = (0, C.useState)([]),
    [u, d] = (0, C.useState)(0),
    [f, p] = (0, C.useState)(``);
  (0, C.useEffect)(() => {
    let e = !1;
    return (
      ql()
        .then((t) => {
          e || ((i.current = t), l(t));
        })
        .catch((t) => {
          e ||
            p(
              t instanceof Error
                ? t.message
                : `The sales layer did not answer.`,
            );
        }),
      () => {
        e = !0;
      }
    );
  }, []);
  function m() {
    let e = r.current;
    if (!e) return 0;
    let t = Math.round(e.scrollTop / wu);
    return Math.max(0, Math.min(i.current.length - 1, t));
  }
  function h() {
    let e = m();
    e !== a.current &&
      ((a.current = e),
      d(e),
      window.clearTimeout(s.current),
      (s.current = window.setTimeout(() => {
        let e = r.current,
          n = a.current;
        if (e) {
          let t = n * wu;
          Math.abs(e.scrollTop - t) > 2 && (e.scrollTop = t);
        }
        if (!o.current) return;
        let s = i.current[n]?.pin;
        s && t(s);
      }, 180)));
  }
  let g = (0, C.useRef)(n);
  ((g.current = n),
    (0, C.useEffect)(() => {
      g.current?.(c[u] ?? null);
    }, [c, u]));
  let _ = c[u],
    v = Math.max(0, u - 8),
    y = Math.min(c.length, v + 18),
    b = c.slice(v, y);
  return (0, $.jsxs)(`div`, {
    className: `pin-wheel-wrap`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `pin-drum ${e ? `is-disabled` : ``}`,
        children: [
          (0, $.jsxs)(`div`, {
            ref: r,
            className: `pin-drum-scroller`,
            onScroll: h,
            onPointerDown: () => {
              o.current = !0;
            },
            onWheel: () => {
              o.current = !0;
            },
            children: [
              (0, $.jsx)(`div`, { style: { height: 96 + v * wu } }),
              b.map((e, t) => {
                let n = v + t;
                return (0, $.jsxs)(
                  `div`,
                  {
                    className: `pin-drum-row ${n === u ? `is-selected` : ``}`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `pin-drum-pin`,
                        children: e.pin,
                      }),
                      (0, $.jsx)(`span`, {
                        className: `pin-drum-addr`,
                        children: e.address || `No address`,
                      }),
                    ],
                  },
                  e.pin,
                );
              }),
              (0, $.jsx)(`div`, {
                style: { height: 96 + Math.max(0, c.length - y) * wu },
              }),
            ],
          }),
          (0, $.jsx)(`div`, { className: `pin-drum-window` }),
          (0, $.jsx)(`div`, { className: `pin-drum-shade` }),
        ],
      }),
      (0, $.jsx)(`p`, {
        className: `pin-wheel-pin`,
        children: f ? `Catalog unavailable` : _?.pin || `Loading the catalog`,
      }),
      (0, $.jsx)(`p`, {
        className: `pin-wheel-meta`,
        children:
          f ||
          (_
            ? `${_.address || `No address`} · this PIN is the case`
            : `Pulling every key PIN in the assessor commercial catalog.`),
      }),
    ],
  });
}
var Eu = `cr2026-pin-list-v1`;
function Du({
  casePin: e,
  subjectNra: t,
  classId: n,
  currentAv: r,
  taxYear: i,
  income: a,
  launchPin: o = ``,
  subjectLat: s = null,
  subjectLng: c = null,
  subjectLabel: l = ``,
  onApply: u,
  onApplyNew: d,
  onSummary: f,
  manualComps: mc0 = [],
  onManualComps: mcSet = () => {},
}) {
  let [p, m] = (0, C.useState)(``),
    [h, _] = (0, C.useState)(``),
    [y, b] = (0, C.useState)([]),
    [S, w] = (0, C.useState)([]),
    [T, E] = (0, C.useState)(null),
    [D, ee] = (0, C.useState)([]),
    [O, te] = (0, C.useState)(!1),
    [A, re] = (0, C.useState)(null),
    [ie, ae] = (0, C.useState)(new Set()),
    [oe, se] = (0, C.useState)(`idle`),
    [ce, le] = (0, C.useState)(``),
    [ue, de] = (0, C.useState)(null),
    [fe, pe] = (0, C.useState)(!1),
    [me, he] = (0, C.useState)(i || new Date().getFullYear()),
    ge = (0, C.useRef)(0);
  ((0, C.useEffect)(() => {
    try {
      let e = localStorage.getItem(Eu);
      if (e) {
        let t = JSON.parse(e);
        Array.isArray(t) && ee(t);
      }
    } catch {}
    te(!0);
  }, []),
    (0, C.useEffect)(() => {
      O && localStorage.setItem(Eu, JSON.stringify(D));
    }, [D, O]));
  function _e(e) {
    ee((t) => {
      let n = new Set(t.map((e) => e.keypin || e.pin)),
        r = [...t];
      for (let t of e) {
        let e = t.keypin || t.pin;
        e && !n.has(e) && (n.add(e), r.push(t));
      }
      return r.slice(0, 40);
    });
  }
  async function ve(e) {
    let t = e.replace(/\D/g, ``);
    if (t.length < 10) {
      le(`Scroll the catalog wheel to a PIN first.`);
      return;
    }
    let n = ++ge.current;
    (pe(!0), m(k(t)), le(``));
    try {
      let r = await Hl(e);
      if (n !== ge.current) return;
      let i =
        r.find((e) => (e.keypin || e.pin).replace(/\D/g, ``) === t) ?? r[0];
      if (!i) {
        (le(`That catalog PIN is not in the commercial valuation data.`),
          se(`idle`));
        return;
      }
      (b(r.length ? r : [i]), await N(i, !0, n));
    } catch (e) {
      if (n !== ge.current) return;
      (se(`error`),
        le(e instanceof Error ? e.message : `The sales layer did not answer.`));
    } finally {
      n === ge.current && pe(!1);
    }
  }
  async function ye(e = p) {
    (se(`search`), le(``));
    try {
      let t = await Hl(e);
      (b(t), se(`idle`));
      if (!t.length) {
        let t = e.replace(/\D/g, ``),
          n = t.length >= 10 ? await crPseudo(t) : null;
        n
          ? (le(`Not in the Assessor commercial catalog. Comps use the parcel class and location.`), await N(n, !0))
          : le(`No commercial or industrial record for that PIN or address.`);
      }
      t.length === 1 && (await N(t[0], !0));
    } catch (e) {
      (se(`error`),
        le(e instanceof Error ? e.message : `The sales layer did not answer.`));
    }
  }
  async function N(e, t, n) {
    let r = n ?? ++ge.current;
    (se(`comps`), E(null), w([]), ae(new Set()));
    let a = yu(e),
      s = Cl(e.keypin || e.pin, e.classCode).catch(() => null),
      c = await a;
    if (r !== ge.current) return;
    let cl0 = crSubjectLoc(c);
    cl0 && (c = { ...c, ...cl0 });
    if (c.lat == null) {
      let e = (await crLocate([c.keypin || c.pin])).get(crPin14(c.keypin || c.pin));
      if (r !== ge.current) return;
      e && (c = { ...c, lat: e.lat, lng: e.lng });
    }
    let o = iu(c);
    if (c.lat == null && c.address) {
      let e = await Cu(c.address, c.township).catch(() => null);
      if (r !== ge.current) return;
      e && (c = { ...c, lat: e.lat, lng: e.lng });
    }
    let l = Math.max(i || 0, c.taxYear || 0) || new Date().getFullYear(),
      f = bu(c);
    ((f.taxYear = l), c._pseudo ? u({ pin: f.pin, lat: c.lat, lng: c.lng }) : t ? u(f) : d(f), re(c), he(l));
    try {
      let [e, t] = await Promise.all([o, s]);
      if (r !== ge.current) return;
      let n = e.filter((e) => e.keypin !== c.keypin);
      (w(n),
        ae(crDefaultPicks(c, n)),
        E(t),
        se(`idle`));
    } catch {
      if (r !== ge.current) return;
      (w([]), E(null), se(`idle`));
    }
  }
  async function P() {
    if (!gu(h).length) {
      le(
        `Enter one or more 14-digit PINs, separated by a space or a new line.`,
      );
      return;
    }
    (se(`search`), le(``));
    try {
      let { found: e, missing: t } = await _u(h);
      (_e(e),
        b(e),
        _(``),
        se(`idle`),
        e.length
          ? t.length
            ? le(`Not on the layer: ${t.join(`, `)}`)
            : le(`${e.length} added to the PIN list.`)
          : le(`None of those PINs are on the commercial sales layer.`));
    } catch (e) {
      (se(`error`),
        le(e instanceof Error ? e.message : `The sales layer did not answer.`));
    }
  }
  async function be() {
    if (!gu(e).length) {
      le(`Put a PIN on the case first, or type one in the list box.`);
      return;
    }
    se(`search`);
    try {
      let { found: t, missing: n } = await _u(e);
      (_e(t),
        se(`idle`),
        le(
          t.length
            ? `Case PIN added to the list.`
            : `No sales-layer record for ${n[0] ?? `that PIN`}.`,
        ));
    } catch (e) {
      (se(`error`),
        le(e instanceof Error ? e.message : `The sales layer did not answer.`));
    }
  }
  function F(e) {
    if (e.manual) {
      mcSet(mc0.map((t) => (t.id === e.id ? { ...t, used: !e.used } : t)));
      return;
    }
    let t = Au(e);
    ae((e) => {
      let n = new Set(e);
      return (n.has(t) ? n.delete(t) : n.add(t), n);
    });
  }
  let [mcEdit, mcSetEdit] = (0, C.useState)(null),
    MC = (0, C.useMemo)(() => mc0.map(crManualRow), [mc0]),
    S2 = (0, C.useMemo)(() => [...S, ...MC], [S, MC]),
    ie2 = (0, C.useMemo)(() => {
      let e = new Set(ie);
      for (let t of MC) t.used && e.add(Au(t));
      return e;
    }, [ie, MC]);
  let I = (0, C.useMemo)(
      () => (A && S2.length ? Lu(S2, ie2, t, A, n, r) : null),
      [A, S2, ie2, t, n, r],
    ),
    L = (0, C.useRef)(f);
  L.current = f;
  let R = (0, C.useRef)(!1);
  ((0, C.useEffect)(() => {
    o && R.current !== o && ((R.current = o), m(k(o.split(`#`)[0])), ye(o.split(`#`)[0]));
  }, [o]),
    (0, C.useEffect)(() => {
      L.current(I);
    }, [I]));
  let xe = (0, C.useMemo)(
    () => Mu(A, S2, A ? null : s, A ? null : c, l, A ? 0 : r),
    [A, S2, s, c, l, r],
  );
  return (0, $.jsxs)(`section`, {
    className: `no-print mt-4 rounded-md border border-border bg-surface`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-end sm:justify-between`,
        children: [
          (0, $.jsxs)(`div`, {
            children: [
              (0, $.jsx)(`h2`, {
                className: `font-display text-2xl leading-none`,
                children: `Sales map`,
              }),
              (0, $.jsx)(`p`, {
                className: `mt-1 max-w-xl text-sm text-pretty text-muted`,
                children: `The case PIN is the red subject. Sales within ${CR_RADIUS_MI} miles from the last ${CR_SALE_YEARS} years are listed; the ${CR_AUTO_COMPS} best comps are auto-selected. Search below for any other PIN or address.`,
              }),
            ],
          }),
          (0, $.jsxs)(`a`, {
            className: `btn shrink-0`,
            href: jl,
            target: `_blank`,
            rel: `noreferrer`,
            children: [
              (0, $.jsx)(g, { className: `size-4`, "aria-hidden": !0 }),
              `Chicago commercial`,
            ],
          }),
        ],
      }),
      (0, $.jsx)(Dl, { spots: xe }),
      xe.length
        ? (0, $.jsx)(`p`, {
            className: `px-4 py-2 text-xs text-subtle`,
            children: `Red is the case, labeled with the assessment. Green is a sale, labeled with the price and date.`,
          })
        : null,

      (0, $.jsxs)(`form`, {
        className: `flex flex-col gap-2 px-4 py-3 sm:flex-row`,
        onSubmit: (e) => {
          (e.preventDefault(), ye());
        },
        children: [
          (0, $.jsxs)(`label`, {
            className: `flex min-w-0 flex-1 flex-col gap-1`,
            children: [
              (0, $.jsx)(`span`, {
                className: `lbl`,
                children: `PIN or address`,
              }),
              (0, $.jsx)(`input`, {
                className: `field`,
                value: p,
                placeholder: `02-15-102-206-0000 or Colfax Palatine`,
                onChange: (e) => m(e.target.value),
              }),
            ],
          }),
          (0, $.jsxs)(`button`, {
            type: `submit`,
            className: `btn self-end`,
            disabled: oe === `search`,
            children: [
              (0, $.jsx)(x, { className: `size-4`, "aria-hidden": !0 }),
              oe === `search` ? `Searching` : `Search`,
            ],
          }),
        ],
      }),
      ce
        ? (0, $.jsx)(`p`, {
            className: `px-4 pb-3 text-sm text-muted`,
            children: ce,
          })
        : null,
      y.length > 0
        ? (0, $.jsx)(`ul`, {
            className: `flex max-h-56 flex-col gap-2 overflow-auto px-4 pb-3`,
            children: y.map((e) =>
              (0, $.jsx)(
                `li`,
                {
                  children: (0, $.jsxs)(`div`, {
                    className: `rounded-sm border px-3 py-2 ${A?.keypin === e.keypin ? `border-accent` : `border-border`}`,
                    children: [
                      (0, $.jsxs)(`p`, {
                        className: `text-sm text-fg`,
                        children: [
                          e.address || `No address`,
                          (0, $.jsxs)(`span`, {
                            className: `text-muted`,
                            children: [` · `, e.township || `Township unknown`],
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`p`, {
                        className: `text-xs text-subtle`,
                        children: [
                          (0, $.jsx)(bl, {
                            pins: e.pins.length ? e.pins : [e.pin],
                            empty: `No PIN`,
                          }),
                          ` · `,
                          `Class `,
                          e.classCode || `—`,
                          e.salePrice ? ` · Sale ${j(e.salePrice)}` : ``,
                          e.capRate ? ` · Cap ${M(e.capRate)}` : ``,
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `mt-2 flex flex-wrap gap-2`,
                        children: [
                          (0, $.jsx)(`button`, {
                            type: `button`,
                            className: `btn`,
                            onClick: () => void N(e, !0),
                            children: `Use in this case`,
                          }),
                          (0, $.jsx)(`button`, {
                            type: `button`,
                            className: `btn`,
                            onClick: () => void N(e, !1),
                            children: `New case`,
                          }),
                          (0, $.jsx)(`button`, {
                            type: `button`,
                            className: `btn`,
                            onClick: () => _e([e]),
                            children: `Add to list`,
                          }),
                          e.lat != null && e.lng != null
                            ? (0, $.jsx)(`a`, {
                                className: `btn`,
                                href: ne(e.lat, e.lng, 0),
                                target: `bor-street-view`,
                                rel: `noreferrer`,
                                children: `Street view`,
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                },
                e.keypin || e.pin,
              ),
            ),
          })
        : null,
      (0, $.jsx)(Yu, {
        list: D,
        activeKey: A?.keypin || A?.pin || ``,
        draft: h,
        busy: oe === `search`,
        casePin: e,
        onDraft: _,
        onLookup: () => void P(),
        onAddCase: () => void be(),
        onUse: (e) => void N(e, !0),
        onRemove: (e) =>
          ee((t) =>
            t.filter((t) => (t.keypin || t.pin) !== (e.keypin || e.pin)),
          ),
        onClear: () => ee([]),
      }),
      A
        ? (0, $.jsxs)(`div`, {
            className: `border-t border-border px-4 py-3 text-sm`,
            children: [
              (0, $.jsxs)(`p`, {
                className: `flex items-center gap-2 text-fg`,
                children: [
                  (0, $.jsx)(v, {
                    className: `size-4 text-accent`,
                    "aria-hidden": !0,
                  }),
                  A.address,
                ],
              }),
              (0, $.jsxs)(`p`, {
                className: `mt-1 text-xs text-subtle`,
                children: [
                  `Assessor final MV `,
                  j(A.finalMv),
                  ` · Mailed AV `,
                  j(A.mailedAv),
                  Su(A) == null ? `` : ` · Implied cap ${M(Su(A) ?? 0)}`,
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `mt-3`,
                children: (0, $.jsx)(bl, {
                  pins: [A.keypin || A.pin],
                  size: `primary`,
                }),
              }),
              A
                ? (0, $.jsxs)(`div`, {
                    className: `mt-3`,
                    children: [
                      (0, $.jsx)(`p`, {
                        className: `text-xs font-medium tracking-wide text-muted uppercase`,
                        children: `Sales comps`,
                      }),
                      (0, $.jsxs)(`p`, {
                        className: `mt-1 text-xs text-subtle`,
                        children: [
                          [A.classCode, A.use, eu(A.nra), A.township]
                            .filter(Boolean)
                            .join(` · `),
                          `. Same or similar class first, then closeness in building size, distance, and sale recency. Sales from the last ${CR_SALE_YEARS} years within ${CR_RADIUS_MI} miles are listed; the ${CR_AUTO_COMPS} best are auto-checked. Analysts may check or uncheck others or add a manual comp. Distances are straight-line miles from the subject. Sales from the year before January 1, `,
                          me,
                          ` are checked. Check a sale to include it in the sales approach, which is separate from the income worksheet.`,
                        ],
                      }),
                      oe === `comps`
                        ? (0, $.jsx)(`p`, {
                            className: `mt-2 text-sm text-muted`,
                            children: `Loading sales.`,
                          })
                        : S2.length > 0
                          ? (0, $.jsx)(`div`, {
                              className: `mt-3 flex flex-col gap-3`,
                              children: Wu(S2, A).map((e) =>
                                (0, $.jsxs)(
                                  `div`,
                                  {
                                    children: [
                                      (0, $.jsxs)(`p`, {
                                        className: `text-xs text-muted`,
                                        children: [
                                          e.tier,
                                        ],
                                      }),
                                      (0, $.jsx)(`ul`, {
                                        className: `mt-2 flex flex-col gap-2`,
                                        children: e.rows.map((e) =>
                                          (0, $.jsx)(
                                            Gu,
                                            {
                                              comp: e,
                                              subject: A,
                                              used: ie2.has(Au(e)),
                                              onToggle: () => F(e),
                                              onApply: u,
                                              onEdit: () => mcSetEdit(e.id),
                                              onDelete: () => (mcSet(mc0.filter((t) => t.id !== e.id)), mcEdit === e.id && mcSetEdit(null)),
                                            },
                                            Au(e),
                                          ),
                                        ),
                                      }),
                                    ],
                                  },
                                  `${e.tier}-${e.classCode}`,
                                ),
                              ),
                            })
                          : (0, $.jsx)(`p`, {
                              className: `mt-2 text-sm text-muted`,
                              children: `No sales in a similar size tier and class.`,
                            }),
                      (0, $.jsx)(CrManualCompForm, {
                        subject: A,
                        comps: mc0,
                        onChange: mcSet,
                        editId: mcEdit,
                        setEditId: mcSetEdit,
                      }),
null,
                    ],
                  })
                : null,
              T ? (0, $.jsx)(Ou, { deeds: T }) : null,
            ],
          })
        : null,
    ],
  });
}
function Ou({ deeds: e }) {
  return (0, $.jsxs)(`div`, {
    className: `mt-4 border-t border-border pt-3`,
    children: [
      (0, $.jsx)(`p`, {
        className: `text-xs font-medium tracking-wide text-muted uppercase`,
        children: `Recorded sales`,
      }),
      (0, $.jsxs)(`p`, {
        className: `mt-1 text-xs text-subtle`,
        children: [
          `Assessor parcel sales`,
          e.neighborhood ? ` · neighborhood ${e.neighborhood}` : ``,
          e.classCode ? ` · class ${e.classCode}` : ``,
          `. Arm's-length deeds over $10,000.`,
        ],
      }),
      e.subject.length > 0
        ? (0, $.jsxs)(`div`, {
            className: `mt-3`,
            children: [
              (0, $.jsx)(`p`, {
                className: `text-xs text-muted`,
                children: `This PIN`,
              }),
              (0, $.jsx)(`ul`, {
                className: `mt-2 flex flex-col gap-2`,
                children: e.subject.map((e) =>
                  (0, $.jsx)(
                    ku,
                    { sale: e },
                    `${e.pin}-${e.saleDate}-${e.docNo}`,
                  ),
                ),
              }),
            ],
          })
        : (0, $.jsx)(`p`, {
            className: `mt-2 text-sm text-muted`,
            children: `No recorded sale on this PIN in the parcel sales file.`,
          }),
      e.comps.length > 0
        ? (0, $.jsxs)(`div`, {
            className: `mt-3`,
            children: [
              (0, $.jsx)(`p`, {
                className: `text-xs text-muted`,
                children: `Same neighborhood and class`,
              }),
              (0, $.jsx)(`ul`, {
                className: `mt-2 flex flex-col gap-2`,
                children: e.comps.map((e) =>
                  (0, $.jsx)(
                    ku,
                    { sale: e, photo: !0 },
                    `${e.pin}-${e.saleDate}-${e.docNo}`,
                  ),
                ),
              }),
            ],
          })
        : null,
    ],
  });
}
function ku({ sale: e, photo: t = !1 }) {
  return (0, $.jsxs)(`li`, {
    className: `flex flex-col gap-3 rounded-sm border border-border px-3 py-2 sm:flex-row sm:items-center`,
    children: [
      t ? (0, $.jsx)(bl, { pins: [e.pin] }) : null,
      (0, $.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, $.jsxs)(`p`, {
            className: `text-sm`,
            children: [
              e.saleDate || `Date unknown`,
              e.salePrice ? ` · ${j(e.salePrice)}` : ``,
              e.deedType ? ` · ${e.deedType}` : ``,
            ],
          }),
          (0, $.jsx)(`p`, {
            className: `text-xs text-subtle`,
            children: [
              e.buyer && `Buyer ${e.buyer}`,
              e.seller && `Seller ${e.seller}`,
            ]
              .filter(Boolean)
              .join(` · `),
          }),
          t
            ? null
            : (0, $.jsx)(`p`, {
                className: `text-xs text-subtle`,
                children: (0, $.jsx)(`a`, {
                  className: `pin-link`,
                  href: ie(e.pin) ?? void 0,
                  target: `_blank`,
                  rel: `noreferrer`,
                  children: k(e.pin),
                }),
              }),
        ],
      }),
    ],
  });
}
function Au(e) {
  if (e.manual) return `m-${e.id}`;
  return `${e.keypin || e.pin}-${e.saleDate ?? ``}`;
}
function ju(e, t) {
  if (!e || !(t > 0)) return !1;
  let n = new Date(t, 0, 1).getTime();
  return e >= new Date(t - 1, 0, 1).getTime() && e < n;
}
function Mu(e, t, n, r, i, a) {
  let o = [],
    s = e?.lat ?? n,
    c = e?.lng ?? r,
    l = (e?.keypin || e?.pin || ``).replace(/\D/g, ``);
  if (s != null && c != null) {
    let t = Nu(e, a);
    o.push({
      id: `subject`,
      lat: s,
      lng: c,
      title: e?.address || i || `Subject`,
      detail: t > 0 ? `Assessment ${j(t)}` : `Subject`,
      label: t > 0 ? `Case ${j(t)}` : `Case · ${e?.address || i || `Subject`}`,
      role: `subject`,
      number: 0,
    });
  }
  if (!e) return o;
  for (let n of Wu(t, e).flatMap((e) => e.rows)) {
    if (
      n.lat == null ||
      n.lng == null ||
      (l && (n.keypin || n.pin).replace(/\D/g, ``) === l)
    )
      continue;
    let e = n.saleDate
        ? new Date(n.saleDate).toLocaleDateString(`en-US`, {
            month: `numeric`,
            day: `numeric`,
            year: `2-digit`,
          })
        : ``,
      t = n.salePrice > 0 ? j(n.salePrice) : ``;
    o.push({
      id: Au(n),
      lat: n.lat,
      lng: n.lng,
      title: n.address || k(n.pin),
      detail: [t, e].filter(Boolean).join(` · `),
      label: (n.manual ? `${CR_MANUAL_LABEL} · ` : ``) + ([t, e].filter(Boolean).join(` · `) || `Sale`),
      role: n.manual ? `manual` : `sale`,
      number: 0,
    });
  }
  return o;
}
function Nu(e, t) {
  return e && e.boardAv > 0
    ? e.boardAv
    : e && e.mailedAv > 0
      ? e.mailedAv
      : t > 0
        ? t
        : 0;
}
function Pu(e, t) {
  return `${e} ${e === 1 ? t : `${t}s`}`;
}
function Fu(e, t) {
  return e === t ? Pu(e, `sale`) : `${e} of ${Pu(t, `sale`)}`;
}
function Iu(e) {
  return e.length ? e.reduce((e, t) => e + t, 0) / e.length : null;
}
function Lu(e, t, n, r, i, a) {
  let o = Wu(e, r)
      .flatMap((e) => e.rows)
      .filter((e) => t.has(Au(e))),
    s = o.map((e) => ({
      key: Au(e),
      manual: !!e.manual,
      landSf: e.landSf || null,
      address: (e.address || k(e.pin)) + (e.manual ? ` (${CR_MANUAL_LABEL})` : ``),
      pin: e.keypin || e.pin,
      township: e.township,
      salePrice: e.salePrice,
      nra: e.nra,
      psf: e.salePrice > 0 && e.nra > 0 ? e.salePrice / e.nra : null,
      capRate: e.capRate,
      vacancy: e.vacancy,
      distance: qu(Ku(r, e)),
      distanceMi: Ku(r, e),
      lat: e.lat,
      lng: e.lng,
      saleDate: e.saleDate,
      classCode: e.classCode,
    })),
    c = s.filter((e) => e.salePrice > 0),
    l = s.filter((e) => e.psf != null),
    u = s.filter((e) => e.capRate > 0),
    d = s.filter((e) => e.vacancy > 0),
    f = Iu(c.map((e) => e.salePrice)),
    p = Iu(l.map((e) => e.psf ?? 0)),
    m = p == null ? null : Math.round(p * 100) / 100,
    h = n > 0 ? n : r.nra > 0 ? r.nra : 0,
    g = m != null && h > 0 ? Math.round(m * h) : null,
    _ = g == null ? null : Math.round(g / 1e3) * 1e3,
    v = a || r.boardAv || r.mailedAv,
    y = {
      kind: sl(i, r.classCode, r.use),
      pin: r.keypin || r.pin,
      address: r.address,
      township: r.township,
      classLine: [r.classCode, r.use].filter(Boolean).join(` · `),
      mailedAv: r.mailedAv,
      afterAv: v,
      proof1:
        m == null
          ? `Comparable sales are listed on the grid.`
          : `Checked sales average ${j(m, 2)} per sq. ft. on ${s.length} comparables.`,
      proof2:
        _ == null
          ? ``
          : `Indicated ${j(g)}. Sales value ${j(_)}, nearest $1,000.`,
      subject: Ru(r, h, v),
      comps: o.map((e) => Ru(e)),
    };
  return {
    address: r.address,
    total: e.length,
    picked: s,
    avgPrice: f,
    avgPsf: m,
    avgCap: Iu(u.map((e) => e.capRate)),
    avgVacancy: Iu(d.map((e) => e.vacancy)),
    pricedCount: c.length,
    sizedCount: l.length,
    capCount: u.length,
    vacancyCount: d.length,
    area: h,
    areaFromCase: n > 0,
    indicated: g,
    concluded: _,
    bor: y,
  };
}
function Ru(e, t = e.nra, n = e.boardAv || e.mailedAv) {
  let x = (typeof crCompExtraOf == `function` && crCompExtraOf(e.keypin || e.pin)) || {};
  return {
    pin: e.keypin || e.pin,
    address: e.manual ? `${e.address} (${CR_MANUAL_LABEL})` : e.address,
    township: e.township,
    classCode: e.classCode,
    nra: t || x.bldgSf || 0,
    landSf: e.landSf || x.landSf || 0,
    yearBuilt: e.yearBuilt || x.yearBuilt || 0,
    units: e.units || 0,
    landAv: e.landAv || 0,
    bldgAv: e.bldgAv || 0,
    saleDate: e.saleDate,
    salePrice: e.salePrice,
    totalAv: n,
    lat: e.lat,
    lng: e.lng,
  };
}
function Vu({ summary: e, loa: t, incomeValue: n, income: r }) {
  let [i, a] = (0, C.useState)(!1),
    [o, s] = (0, C.useState)(!1),
    [c, l] = (0, C.useState)(``),
    u = e?.concluded == null ? null : Math.round(e.concluded * t),
    d = e?.concluded != null && n != null ? e.concluded - n : null,
    f = e ? cl(e.bor.kind) : null;
  return (0, $.jsxs)(`section`, {
    className: `mt-4 rounded-md border border-border bg-surface`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3`,
        children: [
          (0, $.jsx)(`h2`, {
            className: `font-display text-xl leading-none`,
            children: `Sales approach`,
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `px-4 py-4`,
        children: [
          (0, $.jsxs)(`p`, {
            className: `text-xs text-pretty text-subtle`,
            children: [
              `Separate from the income worksheet. Checked sales only. The income cap rate and vacancy are the rates the Assessor used on those sales.`,
              f
                ? ` ${f.label} is the PTAB notes form for these sales.`
                : ``,
            ],
          }),
          c
            ? (0, $.jsx)(`p`, {
                className: `mt-2 text-xs text-subtle`,
                children: c,
              })
            : null,
          e
            ? e.picked.length === 0
              ? (0, $.jsxs)(`p`, {
                  className: `mt-3 text-sm text-muted`,
                  children: [
                    e.total,
                    ` sales listed. Check Use comp on a sale to include it.`,
                  ],
                })
              : (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `mt-3 text-xs font-medium tracking-wide text-muted uppercase`,
                      children: `Sales value`,
                    }),
                    (0, $.jsx)(`p`, {
                      className: `font-display text-3xl leading-none tabular-nums sm:text-4xl`,
                      children: j(e.concluded),
                    }),
                    (0, $.jsx)(`p`, {
                      className: `mt-1 text-xs text-subtle`,
                      children:
                        e.indicated != null && e.avgPsf != null
                          ? `${Math.round(e.area).toLocaleString()} sf ${e.areaFromCase ? `on the case` : `from the sales layer`} × ${j(e.avgPsf, 2)}, rounded to the nearest $1,000. Indicated ${j(e.indicated)}.`
                          : e.area
                            ? `None of the checked sales have both a price and a size.`
                            : `Enter net rentable area on the case to extend the price per square foot.`,
                    }),
                    (0, $.jsxs)(`dl`, {
                      className: `mt-3 grid gap-3 sm:grid-cols-2`,
                      children: [
                        (0, $.jsx)(Hu, {
                          label: `Average sale price`,
                          value: j(e.avgPrice),
                          hint: e.pricedCount
                            ? Pu(e.pricedCount, `sale`)
                            : `No sale price`,
                        }),
                        (0, $.jsx)(Hu, {
                          label: `Price per square foot`,
                          value: e.avgPsf == null ? `—` : j(e.avgPsf, 2),
                          hint: e.sizedCount
                            ? `${Pu(e.sizedCount, `sale`)} with a size`
                            : `No size on the checked sales`,
                        }),
                        (0, $.jsx)(Hu, {
                          label: `Average income cap rate`,
                          value: e.avgCap == null ? `—` : M(e.avgCap),
                          hint: e.capCount
                            ? `Assessor cap on ${Fu(e.capCount, e.picked.length)}`
                            : `No cap rate on the checked sales`,
                        }),
                        (0, $.jsx)(Hu, {
                          label: `Assessor vacancy`,
                          value: e.avgVacancy == null ? `—` : M(e.avgVacancy),
                          hint: e.vacancyCount
                            ? `Vacancy the assessor used on ${Fu(e.vacancyCount, e.picked.length)}`
                            : `No vacancy on the checked sales`,
                        }),
                        (0, $.jsx)(Hu, {
                          label: `Assessed value`,
                          value: j(u),
                          hint: `Sales value × ${M(t)} level of assessment`,
                        }),
                        (0, $.jsx)(Hu, {
                          label: `Compared with income`,
                          value: d == null ? `—` : j(d),
                          hint:
                            n == null
                              ? `The income worksheet has no concluded value yet`
                              : `Income worksheet is ${j(n)}`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`ul`, {
                      className: `mt-4 flex flex-col gap-2 border-t border-border pt-3`,
                      children: e.picked.map((e) =>
                        (0, $.jsxs)(
                          `li`,
                          {
                            className: `text-sm`,
                            children: [
                              (0, $.jsx)(`span`, { children: e.address }),
                              (0, $.jsx)(`span`, {
                                className: `mt-0.5 block text-xs text-subtle`,
                                children: [
                                  e.distance,
                                  e.township,
                                  e.salePrice ? j(e.salePrice) : ``,
                                  e.nra
                                    ? `${Math.round(e.nra).toLocaleString()} sf`
                                    : ``,
                                  e.psf == null ? `` : `${j(e.psf, 2)} / sf`,
                                  e.capRate ? `Cap ${M(e.capRate)}` : ``,
                                  e.vacancy ? `Vacancy ${M(e.vacancy)}` : ``,
                                ]
                                  .filter(Boolean)
                                  .join(` · `),
                              }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                  ],
                })
            : (0, $.jsx)(`p`, {
                className: `mt-3 text-sm text-muted`,
                children: `Search a PIN, then check Use comp on the sales to include. The average shows up here.`,
              }),
        ],
      }),
    ],
  });
}
function Hu({ label: e, value: t, hint: n }) {
  return (0, $.jsxs)(`div`, {
    children: [
      (0, $.jsx)(`dt`, { className: `text-xs text-muted`, children: e }),
      (0, $.jsx)(`dd`, {
        className: `text-sm tabular-nums text-fg`,
        children: t,
      }),
      (0, $.jsx)(`dd`, { className: `text-xs text-subtle`, children: n }),
    ],
  });
}
function Uu(e) {
  return {
    concluded: e.concluded,
    indicated: e.indicated,
    avgPrice: e.avgPrice,
    avgPsf: e.avgPsf,
    avgCap: e.avgCap,
    avgVacancy: e.avgVacancy,
    count: e.picked.length,
    area: e.area,
  };
}
function Wu(e, t) {
  let n = [...e].sort(
    (e, n) => (Ku(t, e) ?? 1e9) - (Ku(t, n) ?? 1e9) || (n.saleDate ?? 0) - (e.saleDate ?? 0),
  );
  return n.length
    ? [{ tier: `Within ${CR_RADIUS_MI} miles · sold in the last 2 years · 4 best auto-selected`, classCode: ``, rows: n }]
    : [];
}
function Gu({ comp: e, subject: t, used: n, onToggle: r, onApply: i, onEdit: mE, onDelete: mD }) {
  let a = e.keypin || e.pin ? ie(e.keypin || e.pin) : null,
    mW = e.manual ? crManualOutside(e, Ku(t, e)) : [],
    o = e.saleDate ? new Date(e.saleDate).toLocaleDateString(`en-US`) : ``,
    s = e.salePrice > 0 && e.nra > 0 ? e.salePrice / e.nra : 0,
    c = qu(Ku(t, e));
  return (0, $.jsxs)(`li`, {
    className: `flex flex-col gap-3 rounded-sm border px-3 py-2 sm:flex-row sm:items-center ${e.manual ? `border-dashed` : `border-border`}`,
    style: e.manual ? { borderColor: `#7b1fa2` } : void 0,
    "data-manual": e.manual ? `1` : void 0,
    children: [
      (0, $.jsx)(bl, { pins: e.keypin || e.pin ? [e.keypin || e.pin] : [] }),
      (0, $.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, $.jsxs)(`p`, {
            className: `flex items-baseline gap-3 text-sm`,
            children: [
              (0, $.jsxs)(`span`, {
                className: `min-w-0`,
                children: [
                  e.address || (e.pin ? k(e.pin) : `No address`),
                  e.manual
                    ? (0, $.jsx)(`span`, {
                        className: `ml-2 rounded-sm px-1 text-xs`,
                        style: { background: `#7b1fa2`, color: `#fff` },
                        children: CR_MANUAL_LABEL,
                      })
                    : null,
                ],
              }),
              c
                ? (0, $.jsx)(`span`, {
                    className: `ml-auto shrink-0 tabular-nums text-fg`,
                    children: c,
                  })
                : null,
            ],
          }),
          (0, $.jsx)(`p`, {
            className: `text-xs text-subtle`,
            children: [
              e.township,
              e.use,
              e.nra ? `${Math.round(e.nra).toLocaleString()} sf` : ``,
              e.salePrice ? `Sold ${j(e.salePrice)}${o ? ` · ${o}` : ``}` : ``,
              s ? `${j(s, 2)} / sf` : ``,
            ]
              .filter(Boolean)
              .join(` · `),
          }),
          e.manual
            ? (0, $.jsx)(`p`, {
                className: `text-xs text-subtle`,
                children: [
                  e.pin ? `PIN ${k(e.pin)}` : `No PIN`,
                  e.classCode ? `Class ${e.classCode}` : ``,
                  e.landSf ? `${Math.round(e.landSf).toLocaleString()} sf land` : ``,
                  e.geoSource ? `Location: ${e.geoSource}` : ``,
                ].filter(Boolean).join(` · `),
              })
            : null,
          mW.length
            ? (0, $.jsx)(`p`, {
                className: `text-xs`,
                style: { color: `#b45309` },
                children: `Outside the 3-year / 15-mile screen: ${mW.join(`; `)}.`,
              })
            : null,
          e.manual ? null : (0, $.jsxs)(`p`, {
            className: `text-xs text-subtle`,
            children: [
              e.capRate ? `Cap ${M(e.capRate)}` : `No cap`,
              e.pgi ? ` · PGI ${j(e.pgi)}` : ``,
              e.noi ? ` · NOI ${j(e.noi)}` : ``,
              e.vacancy ? ` · Vacancy ${M(e.vacancy)}` : ``,
            ],
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-wrap gap-2`,
        children: [
          (0, $.jsxs)(`label`, {
            className: `btn cursor-pointer`,
            children: [
              (0, $.jsx)(`input`, {
                type: `checkbox`,
                className: `size-4 accent-accent`,
                checked: n,
                onChange: r,
              }),
              `Use comp`,
            ],
          }),
          e.manual
            ? (0, $.jsx)(`button`, { type: `button`, className: `btn`, onClick: mE, children: `Edit` })
            : null,
          e.manual
            ? (0, $.jsx)(`button`, { type: `button`, className: `btn`, "data-cr": `delete-manual`, onClick: () => window.confirm(`Delete this analyst-entered comp?`) && mD(), children: `Delete` })
            : null,
          e.capRate > 0
            ? (0, $.jsx)(`button`, {
                type: `button`,
                className: `btn`,
                onClick: () => i({ marketCap: e.capRate }),
                children: `Use cap rate`,
              })
            : null,
          e.pgi > 0 || e.rentPerSf > 0
            ? (0, $.jsx)(`button`, {
                type: `button`,
                className: `btn`,
                onClick: () => i(Ju(e)),
                children: `Use income`,
              })
            : null,
          a
            ? (0, $.jsxs)(`a`, {
                className: `btn`,
                href: a,
                target: `_blank`,
                rel: `noreferrer`,
                children: [
                  (0, $.jsx)(g, { className: `size-4`, "aria-hidden": !0 }),
                  `Assessor`,
                ],
              })
            : null,
        ],
      }),
    ],
  });
}
function Ku(e, t) {
  return e.lat == null || e.lng == null || t.lat == null || t.lng == null
    ? null
    : vu(e.lat, e.lng, t.lat, t.lng);
}
function qu(e) {
  return e == null ? `` : `${e.toFixed(2)} mi`;
}
function Ju(e) {
  let t = { expenseMode: `ratio` };
  return (
    e.pgi > 0
      ? ((t.pgiMode = `direct`), (t.pgi = Math.round(e.pgi)))
      : e.rentPerSf > 0 && ((t.pgiMode = `perSf`), (t.rentPerSf = e.rentPerSf)),
    e.vacancy > 0 && (t.vacancyRate = e.vacancy),
    e.expenseRatio > 0 && (t.expenseRatio = e.expenseRatio),
    t
  );
}
function Yu({
  list: e,
  activeKey: t,
  draft: n,
  busy: r,
  casePin: i,
  onDraft: a,
  onLookup: o,
  onAddCase: s,
  onUse: c,
  onRemove: l,
  onClear: u,
}) {
  return (0, $.jsxs)(`div`, {
    className: `border-t border-border px-4 py-3`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [
          (0, $.jsx)(`h3`, {
            className: `font-display text-xl leading-none`,
            children: `PIN list`,
          }),
          e.length > 0
            ? (0, $.jsx)(`button`, {
                type: `button`,
                className: `btn`,
                onClick: u,
                children: `Clear`,
              })
            : null,
        ],
      }),
      (0, $.jsx)(`p`, {
        className: `mt-1 text-sm text-muted`,
        children: `Paste PINs from a file, add the PIN already on this case, or tap the map. Use pulls that row into the income form.`,
      }),
      (0, $.jsxs)(`form`, {
        className: `mt-3 flex flex-col gap-2`,
        onSubmit: (e) => {
          (e.preventDefault(), o());
        },
        children: [
          (0, $.jsxs)(`label`, {
            className: `flex flex-col gap-1`,
            children: [
              (0, $.jsx)(`span`, { className: `lbl`, children: `PINs` }),
              (0, $.jsx)(`textarea`, {
                className: `field min-h-24`,
                value: n,
                placeholder: `02-15-102-206-0000
10-21-303-077-0000`,
                onChange: (e) => a(e.target.value),
              }),
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: `flex flex-wrap gap-2`,
            children: [
              (0, $.jsx)(`button`, {
                type: `submit`,
                className: `btn`,
                disabled: r,
                children: r ? `Looking up` : `Look up`,
              }),
              (0, $.jsx)(`button`, {
                type: `button`,
                className: `btn`,
                disabled: r || gu(i).length === 0,
                onClick: s,
                children: `Add PIN from the form`,
              }),
            ],
          }),
        ],
      }),
      e.length === 0
        ? (0, $.jsx)(`p`, {
            className: `mt-3 text-sm text-subtle`,
            children: `The list is empty.`,
          })
        : (0, $.jsx)(`ul`, {
            className: `mt-3 flex max-h-72 flex-col gap-2 overflow-auto`,
            children: e.map((e) => {
              let n = e.keypin || e.pin;
              return (0, $.jsxs)(
                `li`,
                {
                  className: `rounded-sm border px-3 py-2 ${t === n ? `border-accent` : `border-border`}`,
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `text-sm tabular-nums text-fg`,
                      children: (0, $.jsx)(bl, {
                        pins: e.pins.length ? e.pins : [e.pin],
                      }),
                    }),
                    (0, $.jsxs)(`p`, {
                      className: `text-xs text-subtle`,
                      children: [
                        e.address || `No address`,
                        e.township ? ` · ${e.township}` : ``,
                        e.classCode ? ` · ${e.classCode}` : ``,
                        e.capRate ? ` · Cap ${M(e.capRate)}` : ``,
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-2 flex flex-wrap gap-2`,
                      children: [
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          className: `btn`,
                          onClick: () => c(e),
                          children: `Use`,
                        }),
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          className: `btn`,
                          onClick: () => l(e),
                          children: `Remove`,
                        }),
                        e.lat != null && e.lng != null
                          ? (0, $.jsx)(`a`, {
                              className: `btn`,
                              href: ne(e.lat, e.lng, 0),
                              target: `bor-street-view`,
                              rel: `noreferrer`,
                              children: `Street view`,
                            })
                          : null,
                      ],
                    }),
                  ],
                },
                n,
              );
            }),
          }),
    ],
  });
}
function Xu({
  address: e,
  township: t,
  lat: n,
  lng: r,
  heading: i,
  onPlace: a,
  onHeading: o,
}) {
  let [s, c] = (0, C.useState)(``),
    l = n != null && r != null,
    u = l ? ne(n, r, i) : ``;
  async function d() {
    c(`Finding the address`);
    try {
      let n = await Cu(e, t);
      if (!n) {
        c(`No match for that address.`);
        return;
      }
      (a(n), c(``));
    } catch (e) {
      c(e instanceof Error ? e.message : `Address search did not answer.`);
    }
  }
  return (0, $.jsxs)(`section`, {
    className: `no-print overflow-hidden rounded-md border border-border bg-surface`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 border-b border-border px-4 py-3`,
        children: [
          (0, $.jsx)(`h2`, {
            className: `font-display text-xl leading-none`,
            children: `Street view`,
          }),
          (0, $.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [
              (0, $.jsx)(`button`, {
                type: `button`,
                className: `btn`,
                onClick: () => o(i - 45),
                disabled: !l,
                children: `Left`,
              }),
              (0, $.jsx)(`button`, {
                type: `button`,
                className: `btn`,
                onClick: () => o(i + 45),
                disabled: !l,
                children: `Right`,
              }),
            ],
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-4 py-3`,
        children: [
          (0, $.jsxs)(`p`, {
            className: `text-sm text-muted`,
            children: [
              e || `No address yet`,
              l ? ` · heading ${Math.round(((i % 360) + 360) % 360)}°` : ``,
            ],
          }),
          u
            ? (0, $.jsx)(`a`, {
                className: `btn self-start`,
                href: u,
                target: `bor-street-view`,
                rel: `noreferrer`,
                children: `Open street view`,
              })
            : (0, $.jsx)(`button`, {
                type: `button`,
                className: `btn self-start`,
                onClick: () => void d(),
                children: `Find street view`,
              }),
          u
            ? (0, $.jsx)(`a`, {
                className: `pin-link break-all text-xs`,
                href: u,
                target: `bor-street-view`,
                rel: `noreferrer`,
                children: u,
              })
            : (0, $.jsx)(`p`, {
                className: `text-xs text-subtle`,
                children: `Uses the sale point, or the address on the case.`,
              }),
          s
            ? (0, $.jsx)(`p`, { className: `text-xs text-muted`, children: s })
            : null,
        ],
      }),
    ],
  });
}
var CR_COMMENTS = [
  [`comments`, `Reviewer value conclusions`],
  [`docName`, `Document name / notes`],
  [`salesComment`, `Sales comparison`],
  [`incomeComment`, `Income approach`],
  [`equityComment`, `Equitability review`],
];
/* ===================== 2026 COMMERCIAL REVIEWS additions =====================
   Everything prefixed "cr" was added for the 2026 COMMERCIAL REVIEWS fork.
   - Subject harvest from Experience Builder (URL query/hash params + postMessage)
   - Case panel (PIN / case number / analyst), read-only subject panel
   - Comps: last 2 years, within 15 miles; 4 best auto-checked (class, size, distance, recency)
   - Two outputs: PTAB PDF (State Form) as <PIN14>_PTAB.pdf, Analyst Report as <docket>_<PIN>.pdf
============================================================================== */
var CR_FIELDS = ["Document_Name", "BOR_Filing_Year", "BOR_PTAB_Docket_ID", "BOR_PIN", "BOR_Property_Class", "BOR_PTAB_Status", "BOR_PTAB_Property_Type", "BOR_Property_Type", "BOR_PTAB_Number", "BOR_PTAB_Appellant_FN", "BOR_PTAB_Appellant_LN", "BOR_Attorney_Code", "BOR_Attorney_LN", "BOR_Attorney_FN", "BOR_Attorney_Firm", "BOR_PTAB_Letter_Date", "BOR_PTAB_Deadline_Date", "BOR_PTAB_Orig_Deadline_Date", "BOR_Township", "BOR_PTAB_Docket_ID_Rel", "BOR_Township_Num", "BOR_Land_AV", "BOR_Improvement_AV", "BOR_Total_AV", "BOR_Prior_Land_Value", "BOR_Prior_Cost_of_Improvements", "BOR_Prior_AV", "BOR_PTAB_Valuation_Req", "BOR_Complaint_Num", "BOR_PTAB_Analyst", "BOR_Current_Commissioner_Group", "BOR_PTAB_Evidence", "BOR_PTAB_Hearing_Requested", "BOR_PTAB_Formal_Hearing_Date", "BOR_PTAB_Formal_Hearing_Time", "BOR_PTAB_Withdrawal_Approved", "BOR_PTAB_IL_PTAB_Docket_ID", "BOR_PTAB_Notes_Sent", "BOR_PTAB_Stip_or_WD_Exist", "BOR_Queue_Name", "BOR_Description", "BOR_PTAB_Default", "BOR_PTAB_Trans_Code", "BOR_PTAB_Rebuttal", "BOR_PTAB_Ev_Appraisal", "BOR_PTAB_Ev_Assmt_Equity", "BOR_PTAB_Ev_Comp_Sales", "BOR_PTAB_Ev_Contention_Law", "BOR_PTAB_Ev_Recent_Constr", "BOR_PTAB_Ev_Recent_Sale", "BOR_PTAB_Appellant_Hrg_Req", "BOR_Current_MV", "BOR_Current_MV_Sq_Ft", "BOR_Property_Address", "BOR_Property_City", "BOR_Requested_AV", "BOR_Sq_Ft_Building", "BOR_Sq_Ft_Land", "BOR_Total_Value", "BOR_Vacancy_Pct", "BOR_PTAB_PIN_Count", "BOR_PTAB_Recent_Sale", "BOR_PTAB_Comparable_Sales", "BOR_PTAB_Contention_of_Law", "BOR_PTAB_Recent_Appraisal", "BOR_PTAB_Recent_Construction", "BOR_PTAB_Assessment_Equity", "BOR_PTAB_Property_Class", "BOR_PTAB_Notes_Stip", "BOR_PTAB_Notes_Stip_Impr", "BOR_PTAB_Notes_Stip_Land", "BOR_PTAB_Notes_Stip_Total", "BOR_PTAB_Rollover_PTAB", "BOR_PTAB_Direct_Appeal_PTAB", "BOR_PTAB_Rollover_BOR", "BOR_PTAB_Notes_Verified", "Add_Back_to_WF", "pin14", "pin10", "pin_dashed", "pin_flag", "lat", "lon", "matched_address", "match_method", "point_count", "matched_pin", "match_source", "inc_match_method", "inc_is_keypin", "inc_pin_role", "inc_pin_count", "inc_matched_pin", "inc_keypin", "inc_keypin_d", "inc_pins", "inc_year", "inc_year_n", "inc_tiebreak", "inc_alt_uses", "inc_use", "inc_township", "inc_townreg", "inc_sheet", "inc_model", "inc_class", "inc_address", "inc_taxpayer", "inc_propname", "inc_proptype", "inc_subclass", "inc_taxdist", "inc_invrate", "inc_nbhd", "inc_bldgsf", "inc_grossba", "inc_landsf", "inc_nrsf", "inc_commsf", "inc_units", "inc_apt", "inc_stories", "inc_yrbuilt", "inc_pgi", "inc_vacancy", "inc_egi", "inc_exp", "inc_totalexp", "inc_noi", "inc_caprate", "inc_incmv", "inc_incmvsf", "inc_fmv", "inc_fmvsf", "inc_fmvunit", "inc_fmvbed", "inc_fmvkey", "inc_landbldg", "inc_exland", "inc_exlandv", "inc_landval", "inc_costsf", "inc_salesf", "inc_parking", "inc_parksf", "inc_occup", "inc_covidvac", "inc_adjrent", "av_match", "av_cur_year", "av_prv_year", "av_cur_stage", "av_cur_class", "av_cur_town", "av_cur_tcode", "av_cur_nbhd", "av_prv_stage", "av_prv_class", "av_cur_land", "av_cur_bldg", "av_cur_tot", "av_cur_hie", "av_cur_mlnd", "av_cur_mbld", "av_cur_mtot", "av_cur_clnd", "av_cur_cbld", "av_cur_ctot", "av_cur_blnd", "av_cur_bbld", "av_cur_btot", "av_prv_land", "av_prv_bldg", "av_prv_tot", "av_prv_hie", "av_yoy_dlt", "av_yoy_pct", "av_m2c_dlt", "av_m2c_pct", "av_c2b_dlt", "av_c2b_pct", "av_m2b_dlt", "av_m2b_pct", "bor_match", "bor_prev_year", "bor_last_year", "bor_prev_n", "bor_tied", "bor_appealid", "bor_appellant", "bor_attorney", "bor_firm", "bor_attycode", "bor_result", "bor_changed", "bor_type", "bor_reason", "bor_class", "bor_majclass", "bor_pre_land", "bor_pre_bldg", "bor_pre_tot", "bor_post_land", "bor_post_bldg", "bor_post_tot", "bor_chg_dlt", "bor_chg_pct", "sale_match", "sale_count", "sale_date", "sale_year", "sale_price", "sale_doc_no", "sale_deed", "sale_mydeed", "sale_seller", "sale_buyer", "sale_type", "sale_multi", "sale_npins", "sale_mydate", "sale_f365", "sale_f10k", "sale_fdeed", "sale_class"],
  CR_FIELD_SET = new Set(CR_FIELDS),
  CR_ALIAS_PIN = [`pin14`, `pin`, `keypin`, `BOR_PIN`, `pin_dashed`, `inc_keypin`, `matched_pin`],
  CR_EXTRA_PARAMS = [`pin`, `keypin`, `case_number`, `case`, `analyst`, `lng`, `tax_year`, `tax_code`, `requested_av`, `requested_mv`],
  CR_ANALYST_KEY = `cr2026-analyst`,
  CR_RADIUS_MI = 15,
  CR_SALE_YEARS = 2,
  CR_AUTO_COMPS = 4,
  crAutoPickInfo = [],
  crPending = null,
  crHarvestLoc = null,
  crStateRef = null,
  crLastKey = ``;
function crGetAnalyst() {
  try { return localStorage.getItem(CR_ANALYST_KEY) || ``; } catch { return ``; }
}
function crSetAnalyst(e) {
  try { localStorage.setItem(CR_ANALYST_KEY, e); } catch {}
}
function crPin14(e) {
  let t = String(e ?? ``).replace(/\D/g, ``);
  return t.length < 10 || t.length > 14 ? `` : t.padStart(14, `0`).slice(-14);
}
function crClean(e) {
  if (e == null) return ``;
  let t = String(e).trim();
  return !t || /^\{[^}]*\}$/.test(t) || /^(null|<null>|undefined|nan|none)$/i.test(t) ? `` : t;
}
function crNum(e) {
  let t = crClean(e).replace(/[$,%\s]/g, ``);
  if (!t) return 0;
  let n = Number(t);
  return Number.isFinite(n) ? n : 0;
}
function crRate(e) {
  let t = crNum(e);
  return t > 0 ? (t > 1 ? t / 100 : t) : 0;
}
function crTitle(e) {
  let t = crClean(e);
  if (!t) return ``;
  let n = E.find((e) => e.toUpperCase() === t.toUpperCase());
  return n || t.toLowerCase().replace(/\b\w/g, (e) => e.toUpperCase());
}
function crClassId(e) {
  let t = Number(crClean(e).split(`,`)[0].replace(/\D/g, ``).slice(0, 3));
  if (!t) return null;
  if (t >= 100 && t < 200) return { classId: `1`, loa: 0.1 };
  if (t >= 200 && t < 300) return { classId: `2`, loa: 0.1 };
  if (t >= 300 && t < 400) return { classId: `3`, loa: 0.1 };
  if (t >= 400 && t < 500) return { classId: `4`, loa: 0.2 };
  if (al.has(t)) return { classId: `5b`, loa: 0.25 };
  if (t >= 500 && t < 600) return { classId: `5a`, loa: 0.25 };
  if (t >= 600 && t < 900) return { classId: `inc10`, loa: 0.1 };
  return null;
}
/* Read harvested attributes from ?query and #hash (hash wins). */
function crReadLocation() {
  let e = {},
    t = (t) => {
      for (let [n, r] of new URLSearchParams(t)) e[n] = r;
    };
  t(window.location.search);
  let n = window.location.hash.replace(/^#\/?/, ``);
  n.includes(`=`) && t(n.replace(/^\?/, ``));
  return e;
}
function crGet(e, t) {
  for (let n of t) {
    let t = crClean(e[n] ?? e[n.toLowerCase()] ?? e[n.toUpperCase()]);
    if (t) return t;
  }
  return ``;
}
/* Attribute object -> { pin14, sheet patch, subject (raw schema fields) } */
function crHarvestPatch(e) {
  if (!e || typeof e != `object`) return null;
  let t = ``;
  for (let n of CR_ALIAS_PIN) if ((t = crPin14(crGet(e, [n])))) break;
  if (!t) return null;
  let n = {};
  for (let [t, r] of Object.entries(e)) {
    let e = crClean(r);
    if (!e) continue;
    let i = CR_FIELD_SET.has(t) ? t : CR_FIELDS.find((e) => e.toLowerCase() === t.toLowerCase());
    (i || CR_EXTRA_PARAMS.includes(t)) && (n[i || t] = e);
  }
  n.pin14 = t;
  let r = { pin: k(t) },
    i = crGet(e, [`BOR_Property_Address`]),
    a = crGet(e, [`BOR_Property_City`]),
    o = i ? [i, a].filter(Boolean).join(`, `) : crGet(e, [`matched_address`, `inc_address`]);
  o && ((r.address = o), (r.name = o));
  let s = crTitle(crGet(e, [`BOR_Township`, `inc_township`, `av_cur_town`]));
  s && (r.township = s);
  let c = crGet(e, [`av_cur_class`, `BOR_PTAB_Property_Class`, `BOR_Property_Class`, `inc_class`]),
    l = crClassId(c);
  l && ((r.classId = l.classId), (r.loa = l.loa));
  let u = crNum(crGet(e, [`inc_nrsf`])) || crNum(crGet(e, [`inc_bldgsf`])) || crNum(crGet(e, [`BOR_Sq_Ft_Building`]));
  u > 0 && (r.nra = u);
  let d = crNum(crGet(e, [`inc_units`])) || crNum(crGet(e, [`inc_apt`]));
  d > 0 && (r.units = d);
  let f = crNum(crGet(e, [`inc_pgi`])),
    p = crNum(crGet(e, [`inc_adjrent`]));
  f > 0
    ? ((r.pgiMode = `direct`), (r.pgi = Math.round(f)))
    : p > 0 && u > 0 && ((r.pgiMode = `perSf`), (r.rentPerSf = p));
  let m = crRate(crGet(e, [`inc_vacancy`])) || crRate(crGet(e, [`BOR_Vacancy_Pct`]));
  m > 0 && (r.vacancyRate = m);
  let h = crRate(crGet(e, [`inc_exp`])),
    g = crNum(crGet(e, [`inc_totalexp`]));
  h > 0 && h < 1
    ? ((r.expenseMode = `ratio`), (r.expenseRatio = h))
    : g > 0 && ((r.expenseMode = `dollars`), (r.expenseDollars = Math.round(g)));
  let _ = crRate(crGet(e, [`inc_caprate`]));
  _ > 0 && (r.marketCap = _);
  let v = crNum(crGet(e, [`inc_exlandv`]));
  v > 0 && (r.additionalLand = Math.round(v));
  let y = crNum(crGet(e, [`av_cur_tot`])) || crNum(crGet(e, [`BOR_Total_AV`])) || crNum(crGet(e, [`av_cur_mtot`]));
  y > 0 && (r.currentAv = Math.round(y));
  let b = crNum(crGet(e, [`tax_year`, `av_cur_year`]));
  b >= 2000 && (r.taxYear = b);
  let tc = crGet(e, [`tax_code`, `inc_taxdist`]);
  tc && (r.taxCode = tc.replace(/\D/g, ``));
  let x = crGet(e, [`case_number`, `case`, `BOR_PTAB_Docket_ID`]);
  x && (r.caseNumber = x);
  let S = crGet(e, [`analyst`]);
  S && (r.analyst = S);
  let rq = crNum(crGet(e, [`requested_av`, `BOR_Requested_AV`])),
    rm = crNum(crGet(e, [`requested_mv`, `BOR_PTAB_Valuation_Req`]));
  rq > 0
    ? Object.assign(r, crReqPatch(r, `av`, rq, `prefill`))
    : rm > 0 && Object.assign(r, crReqPatch(r, `mv`, rm, `prefill`));
  let C2 = crNum(crGet(e, [`lat`])),
    w2 = crNum(crGet(e, [`lon`, `lng`]));
  C2 && w2 && ((r.lat = C2), (r.lng = w2));
  return { pin14: t, sheet: r, subject: n, classCode: c, use: crGet(e, [`inc_use`, `inc_proptype`, `BOR_Property_Type`]) };
}
function crEmpty(e) {
  return e == null || e === `` || e === 0;
}
function crApplyHarvest(e, t) {
  let n = crHarvestPatch(t);
  if (!n || !e) return { state: e, launch: `` };
  let r = n.pin14,
    i = e.sheets.find((e) => A(e.pin) === r),
    a;
  if (i) {
    let t = {};
    for (let [e, r] of Object.entries(n.sheet)) crEmpty(i[e]) && (t[e] = r);
    crPending = { pin14: r, mode: `existing`, patch: t, h: n };
    let o = { ...i, ...t, subject: n.subject, subjectAt: new Date().toISOString() };
    !i.taxRate && Object.assign(o, crRatePatch(o));
    a = { activeId: i.id, sheets: e.sheets.map((e) => (e.id === i.id ? o : e)) };
  } else {
    let t = e.sheets.find((t) => t.id === e.activeId),
      i = {
        ...O(),
        eqFactor: t?.eqFactor ?? 3.0355,
        ...n.sheet,
        subject: n.subject,
        subjectAt: new Date().toISOString(),
      };
    i.analyst || (i.analyst = crGetAnalyst());
    Object.assign(i, crRatePatch(i));
    crPending = { pin14: r, mode: `new`, patch: n.sheet, h: n };
    a = { activeId: i.id, sheets: [i, ...e.sheets] };
  }
  crHarvestLoc = n.sheet.lat != null ? { pin14: r, lat: n.sheet.lat, lng: n.sheet.lng } : null;
  return { state: a, launch: `${r}#${Date.now()}` };
}
/* Catalog/sales-layer values applied to the case; harvested Extract values win. */
function crMergeApply(e) {
  let t = crStateRef?.sheets.find((e) => e.id === crStateRef.activeId),
    n = { ...e };
  t && t.note && t.note.trim() && n.note != null && delete n.note;
  if (t?.assessorDefaults && e.pin && crPin14(e.pin) === t.assessorDefaults.pin14)
    for (let e of [...CR_INCOME_KEYS, ...CR_INCOME_MODES]) delete n[e];
  if (t) for (let [e, r] of Object.entries(n)) crEmpty(r) && !crEmpty(t[e]) && e !== `heading` && delete n[e];
  let r = crPending;
  if (!r || !e.pin || crPin14(e.pin) !== r.pin14) return n;
  crPending = null;
  if (r.mode === `existing`) {
    let t = {};
    return (e.lat != null && (t.lat = e.lat), e.lng != null && (t.lng = e.lng), t);
  }
  return { ...n, ...r.patch };
}
/* Parcel Universe (pabr-t5kh) lat/lon/class for PINs, latest year first. */
async function crLocate(e) {
  let t = [...new Set(e.map(crPin14).filter(Boolean))],
    n = new Map(),
    r = [];
  for (let e = 0; e < t.length; e += 80) r.push(t.slice(e, e + 80));
  await Promise.all(
    r.map(async (e) => {
      try {
        let t = await fetch(
          `https://datacatalog.cookcountyil.gov/resource/pabr-t5kh.json?${new URLSearchParams({
            $select: `pin,year,lat,lon,class,township_name`,
            $where: `pin in (${e.map((e) => `'${e}'`).join(`,`)}) AND year >= '2022'`,
            $order: `year DESC`,
            $limit: `2000`,
          })}`,
        );
        if (!t.ok) return;
        let r = await t.json();
        if (!Array.isArray(r)) return;
        for (let e of r) {
          let t = crPin14(e.pin),
            r = Number(e.lat),
            i = Number(e.lon);
          !t || n.has(t) || !Number.isFinite(r) || !Number.isFinite(i) || !r ||
            n.set(t, { lat: r, lng: i, classCode: Il(e.class), township: Il(e.township_name) });
        }
      } catch {}
    }),
  );
  return n;
}
/* Subject record for comps when the PIN is not in the Assessor commercial catalog. */
async function crPseudo(e) {
  let t = crPin14(e);
  if (!t) return null;
  let n = crPending && crPending.pin14 === t ? crPending.h : null,
    r = n?.sheet ?? {},
    i = (await crLocate([t])).get(t),
    a = n?.classCode || i?.classCode || ``,
    o = crClassId(a) ?? { classId: `5a`, loa: 0.25 };
  return {
    keypin: k(t), pin: k(t), pins: [k(t)],
    address: r.address || ``, township: r.township || crTitle(i?.township) || ``,
    classCode: a.replace(/\D/g, ``).slice(0, 3), sheet: ``, classId: o.classId, loa: o.loa,
    use: n?.use || ``, pgi: 0, noi: 0, capRate: 0, vacancy: 0, expenseRatio: 0, excessLand: 0,
    nra: r.nra || 0, units: r.units || 0, rentPerSf: 0, finalMv: 0,
    mailedAv: r.currentAv || 0, boardAv: 0, salePrice: 0, saleDate: null, taxYear: 0,
    lat: r.lat ?? i?.lat ?? null, lng: r.lng ?? i?.lng ?? null, _pseudo: !0,
  };
}
function crSubjectLoc(e) {
  let t = crPin14(e.keypin || e.pin);
  return crHarvestLoc && crHarvestLoc.pin14 === t ? { lat: crHarvestLoc.lat, lng: crHarvestLoc.lng } : null;
}
/* ---------- helpers ---------- */
function crRound(e, t = 6) {
  return e == null || !Number.isFinite(e) ? `` : Math.round(e * 10 ** t) / 10 ** t;
}
function crCompactSales(e) {
  return e
    ? {
        pin14: crPin14(e.bor?.pin),
        concluded: e.concluded, indicated: e.indicated, avgPsf: e.avgPsf, avgPrice: e.avgPrice, avgCap: e.avgCap,
        comps: e.picked.map((e) => ({
          pin: crPin14(e.pin), address: e.address, township: e.township, salePrice: e.salePrice,
          saleDate: e.saleDate ?? null, nra: e.nra, psf: e.psf, capRate: e.capRate, distanceMi: e.distanceMi ?? null,
          manual: !!e.manual, source: e.manual ? CR_MANUAL_LABEL : `Sales layer`, landSf: e.landSf ?? null, classCode: e.classCode ?? ``, lat: e.lat ?? null, lng: e.lng ?? null,
        })),
      }
    : null;
}
/* ---------- UI ---------- */
function crField({ label: e, value: t, onChange: n, placeholder: r, inputMode: i, maxLength: a, hint: o, mono: s, req: q, miss: w0 }) {
  return (0, $.jsxs)(`label`, {
    className: `flex min-w-0 flex-1 flex-col gap-1${q ? ` cr-req` : ``}${q && w0 ? ` is-miss` : ``}`,
    children: [
      (0, $.jsxs)(`span`, { className: `lbl`, children: [e, q ? (0, $.jsx)(`span`, { className: `cr-ast`, "aria-hidden": !0, children: ` *` }) : null] }),
      (0, $.jsx)(`input`, {
        className: `field${s ? ` tabular-nums` : ``}`, value: t, placeholder: r, inputMode: i, maxLength: a, required: !!q, "aria-required": q ? `true` : void 0,
        onChange: (e) => n(e.target.value),
      }),
      o ? (0, $.jsx)(`span`, { className: `text-xs text-subtle`, children: o }) : null,
    ],
  });
}
var crLookupBusy = new Set();
function CrCasePanel({ sheet: e, sheets: t, patch: n, onLookup: r, onExtract: x, result: y0, summary: z0 }) {
  let [i, a] = (0, C.useState)(``),
    [u, d] = (0, C.useState)(``),
    [f, p] = (0, C.useState)(crExtract ? crExtract.rows.length : 0),
    o = A(e.pin),
    s = e.pin.replace(/\D/g, ``),
    h = (0, C.useRef)(e);
  h.current = e;
  function l(e) {
    (a(e), window.setTimeout(() => a(``), 2200));
  }
  (0, C.useEffect)(() => {
    crLoadExtract().then((e) => e && p(e.rows.length));
  }, []);
  async function m(t, i) {
    if (!t || crLookupBusy.has(t)) return;
    crLookupBusy.add(t);
    d(`Looking up ${t}…`);
    try {
      let a = crFindExtract(t, h.current.caseNumber);
      a && crPin14(a.pin14 || a.BOR_PIN) === t && x(a);
      i && r(t);
      let o = await crLookupSubject(t);
      if (A(h.current.pin) !== t) return;
      await crLoadRates();
      if (A(h.current.pin) !== t) return;
      let p0 = { ...h.current, ...crLookupPatch(h.current, o) },
        q0 = crRatePatch(p0);
      n({ lookup: o, ...crLookupPatch(h.current, o), ...q0, ...crAssessorApply({ ...h.current, ...crLookupPatch(h.current, o) }, o) });
      d(o ? `Loaded ${[o.parcel && `location`, o.av.length && `${o.av.length} years of AVs`, o.sales.length && Pu(o.sales.length, `sale`), o.income && `Assessor income ${o.income.year}`, o.bor.length && `prior appeal decisions`, o.peers && `${o.peers.count} equitability records`].filter(Boolean).join(`, `)}.` : `Nothing found for ${t}.`);
    } catch (e) {
      d(e instanceof Error ? e.message : `Lookup failed.`);
    } finally {
      crLookupBusy.delete(t);
    }
  }
  (0, C.useEffect)(() => {
    o && e.lookup?.pin14 !== o && m(o, !(crPending && crPending.pin14 === o));
  }, [o]);
  /* Saved case reopened (reload or case switch): reload its sales map and comps. */
  (0, C.useEffect)(() => {
    o && e.lookup?.pin14 === o && r && r(o);
  }, [e.id]);
  (0, C.useEffect)(() => {
    o && crPreloadPinPhotos({ pin: o, lat: e.lat, lng: e.lng });
  }, [o, e.lat, e.lng]);
  function g(t) {
    n({ caseNumber: t });
    let r = crFindExtract(``, t);
    r && !o && x(r);
  }
  /* ---------- Step 1 "Start here" card / Step 2 analyst & request ---------- */
  let ok = !!o && e.lookup?.pin14 === o,
    dk = String(e.caseNumber || ``).trim(),
    [ed, setEd] = (0, C.useState)(!1),
    [pt, setPt] = (0, C.useState)(null),
    rD = (0, C.useRef)(null),
    rP = (0, C.useRef)(null),
    [sd0, setSd] = (0, C.useState)(!1),
    smp = !!e.sample && !dk,
    compact = ok && (dk || e.sample) && !ed;
  (0, C.useEffect)(() => {
    document.body.classList.toggle(`cr-no-case`, !ok);
  }, [ok]);
  (0, C.useEffect)(() => {
    let t = h.current;
    window.setTimeout(() => {
      String(t.caseNumber || ``).trim() ? A(t.pin).length !== 14 && rP.current?.focus({ preventScroll: !0 }) : rD.current?.focus({ preventScroll: !0 });
    }, 50);
  }, [e.id]);
  (0, C.useEffect)(() => {
    ed && (!dk && !s) && setEd(!1);
  }, [dk, s]);
  let go = () => (setEd(!1), o && m(o, !0)),
    key = (e) => e.key === `Enter` && (e.preventDefault(), go()),
    addr = e.address || e.lookup?.income?.address || e.subject?.BOR_Property_Address || ``,
    step1 = compact
      ? (0, $.jsxs)(`div`, { className: `cr-start is-compact`, "data-cr": `start-summary`, children: [
          (0, $.jsx)(`span`, { className: `cr-ok`, "aria-hidden": !0, children: `✓` }),
          (0, $.jsxs)(`div`, { className: `cr-sum-text`, children: [
            (0, $.jsxs)(`span`, { children: [(0, $.jsx)(`b`, { children: `Case ` }), dk || CR_SAMPLE_LABEL] }),
            (0, $.jsxs)(`span`, { className: `tabular-nums`, children: [(0, $.jsx)(`b`, { children: `PIN ` }), k(o)] }),
            addr ? (0, $.jsx)(`span`, { className: `cr-sum-addr`, children: addr }) : null,
          ] }),
          (0, $.jsx)(`button`, { type: `button`, className: `cr-edit`, "data-cr": `start-edit`, onClick: () => (setEd(!0), window.setTimeout(() => rP.current?.focus(), 30)), children: `Edit` }),
        ] })
      : (0, $.jsxs)(`div`, { className: `cr-start`, "data-cr": `start-card`, children: [
          (0, $.jsx)(`p`, { className: `cr-step`, children: `1 · Enter case` }),
          (0, $.jsx)(`h2`, { className: `cr-start-h`, children: `Start here` }),
          (0, $.jsx)(`p`, { className: `cr-start-help`, children: `Enter the docket number and PIN from the appeal, then press Look up.` }),
          (0, $.jsxs)(`div`, { className: `cr-start-grid`, children: [
            (0, $.jsxs)(`label`, { className: `cr-sh cr-req${dk || smp ? `` : ` is-miss`}`, children: [
              (0, $.jsxs)(`span`, { className: `cr-sh-l`, children: [`Case / Docket Number`, (0, $.jsx)(`span`, { className: `cr-ast`, children: ` *` })] }),
              (0, $.jsx)(`input`, { ref: rD, className: `field cr-sh-in`, "data-cr": `docket`, value: e.caseNumber || ``, placeholder: `e.g. 2022-77-16242`, autoComplete: `off`, spellCheck: !1, required: !0, "aria-required": `true`, onChange: (e) => g(e.target.value), onKeyDown: key }),
              (0, $.jsx)(`span`, { className: `cr-sh-hint`, children: dk ? (0, $.jsx)(`span`, { className: `cr-good`, children: `✓ Docket entered` }) : smp ? `${CR_SAMPLE_LABEL}: optional with sample data.` : `The PTAB docket or complaint number.` }),
            ] }),
            (0, $.jsxs)(`label`, { className: `cr-sh cr-req${o ? `` : ` is-miss`}`, children: [
              (0, $.jsxs)(`span`, { className: `cr-sh-l`, children: [`Subject PIN (14 digits)`, (0, $.jsx)(`span`, { className: `cr-ast`, children: ` *` })] }),
              (0, $.jsxs)(`div`, { className: `cr-pin-row`, children: [
              (0, $.jsx)(`input`, {
                ref: rP, className: `field cr-sh-in tabular-nums`, "data-cr": `pin`, inputMode: `numeric`, autoComplete: `off`, spellCheck: !1, required: !0, "aria-required": `true`,
                placeholder: `e.g. 17-20-439-002-0000`, value: pt ?? (s ? k(s) : ``),
                onFocus: () => setPt(s ? k(s) : ``),
                onBlur: () => setPt(null),
                onChange: (e) => {
                  let t = e.target.value.replace(/[^\d-\s]/g, ``),
                    r = t.replace(/\D/g, ``).slice(0, 14);
                  setPt(t);
                  n({ pin: k(r), sample: !1 });
                },
                onKeyDown: key,
              }),
              (0, $.jsx)(`button`, { type: `button`, className: `btn cr-sample-btn`, "data-cr": `sample-open`, onClick: () => setSd(!0), children: `Fill with sample data` }),
              ] }),
              (0, $.jsx)(`span`, { className: `cr-sh-hint`, "data-cr": `pin-count`, children: o
                ? (0, $.jsx)(`span`, { className: `cr-good`, children: `✓ 14/14 digits` })
                : (0, $.jsx)(`span`, { className: s.length ? `cr-warn` : ``, children: `${s.length}/14 digits · dashes optional` }) }),
            ] }),
          ] }),
          (0, $.jsx)(`button`, { type: `button`, className: `cr-go`, disabled: !o, onClick: go, "data-cr": `lookup`, children: crLookupBusy.has(o) ? `Looking up…` : `Look up property` }),
        ] });
  return (0, $.jsxs)(`section`, {
    className: `no-print mt-4`,
    "data-cr": `case-panel`,
    children: [
      step1,
      sd0
        ? (0, $.jsx)(CrSampleDrawer, {
            onClose: () => setSd(!1),
            onPick: (t) => {
              setSd(!1); setEd(!1); setPt(null);
              n({ pin: t.pin, sample: !0 });
            },
          })
        : null,
      (0, $.jsxs)(`div`, { className: `cr-step2 cr-req-box`, "data-cr": `required-box`, children: [
      (0, $.jsx)(`p`, { className: `cr-step`, children: `2 · Analyst & request` }),
      (0, $.jsxs)(`p`, { className: `cr-req-h`, children: [(0, $.jsx)(`span`, { className: `text-subtle`, style: { textTransform: `none`, fontWeight: 400 }, children: crMissing(e).length ? `Still blank: ${crMissing(e).join(`, `)}` : `✓ All required inputs filled in` })] }),
      (0, $.jsxs)(`div`, {
        className: `mt-2 flex flex-col gap-3 sm:flex-row sm:items-end`,
        children: [
          (0, $.jsx)(crField, {
            label: `Analyst name`, value: e.analyst || ``, placeholder: `Your name`, req: !0, miss: !String(e.analyst || ``).trim(),
            onChange: (e) => (crSetAnalyst(e), n({ analyst: e })),
          }),
          (0, $.jsx)(crReqField, { label: `Requested Market Value`, kind: `mv`, sheet: e, patch: n, req: !0 }),
          (0, $.jsx)(crReqField, { label: `Requested AV`, kind: `av`, sheet: e, patch: n, req: !0 }),
        ],
      }),
      (0, $.jsx)(`p`, {
        className: `mt-2 text-xs text-pretty text-subtle`, "data-cr": `requested-note`,
        children: (() => {
          let t = crCaseLoa(e),
            r = crReqCompare(e, ue(e));
          return [
            `Fill either requested value; the other converts at ${M(t, 0)} (class ${e.classId}). `,
            r ? `New AV ${j(r.concluded)} is ${j(Math.abs(r.delta))} ${r.delta >= 0 ? `above` : `below`} the requested AV (${r.delta >= 0 ? `+` : `−`}${M(Math.abs(r.pct), 1)}).` : ``,
          ].join(``);
        })(),
      }),
      ] }),
      u ? (0, $.jsx)(`p`, { className: `mt-2 text-xs text-subtle`, "data-cr": `lookup-status`, children: u }) : null,
      (0, $.jsxs)(`div`, {
        className: `mt-3 flex flex-wrap items-center gap-2`,
        children: [
          (0, $.jsx)(CrReportButtons, { sheet: e, result: y0, summary: z0 }),
          i ? (0, $.jsx)(`span`, { className: `text-xs text-subtle`, children: i }) : null,
        ],
      }),
      (0, $.jsxs)(`p`, {
        className: `mt-2 text-xs text-pretty text-subtle`,
        children: [
          `Cases are saved in this browser. `,
          (0, $.jsxs)(`label`, {
            className: `cursor-pointer underline`,
            children: [
              f ? `Extract loaded (${f} rows), replace` : `Load the Commercial Review Extract CSV`,
              (0, $.jsx)(`input`, {
                type: `file`, accept: `.csv,text/csv`, className: `hidden`, "data-cr": `extract-file`,
                onChange: async (e) => {
                  let t = e.target.files?.[0];
                  if (!t) return;
                  let n = await crSaveExtract(await t.text(), t.name);
                  p(n.rows.length);
                  l(`${n.rows.length} extract rows kept in this browser for docket and PIN lookups.`);
                  let r = crFindExtract(A(h.current.pin), h.current.caseNumber);
                  r && x(r);
                },
              }),
            ],
          }),
          ` (optional; stays in this browser) to fill complaint status, requested value and the docket fields.`,
        ],
      }),
    ],
  });
}
var CR_SUBJECT_ROWS = [
  [`Address`, (e) => [e.BOR_Property_Address, e.BOR_Property_City].filter(Boolean).join(`, `) || e.matched_address || e.inc_address],
  [`Township`, (e) => e.BOR_Township || e.inc_township || e.av_cur_town],
  [`Class`, (e) => [e.av_cur_class && `${e.av_cur_class} (${e.av_cur_year || `current`})`, e.inc_class && `catalog ${e.inc_class}`].filter(Boolean).join(` · `)],
  [`Use`, (e) => e.inc_use || e.inc_proptype || e.BOR_Property_Type],
  [`Building / NRA sf`, (e) => [crFmtN(e.inc_bldgsf || e.BOR_Sq_Ft_Building), e.inc_nrsf && `NRA ${crFmtN(e.inc_nrsf)}`].filter(Boolean).join(` · `)],
  [`Units`, (e) => crFmtN(e.inc_units || e.inc_apt)],
  [`Assessor income (${`catalog`})`, (e) => [e.inc_year && `${e.inc_year}`, e.inc_pgi && `PGI ${crFmt$(e.inc_pgi)}`, e.inc_vacancy && `vac ${crFmtP(e.inc_vacancy)}`, e.inc_exp && `exp ${crFmtP(e.inc_exp)}`, e.inc_noi && `NOI ${crFmt$(e.inc_noi)}`, e.inc_caprate && `cap ${crFmtP(e.inc_caprate)}`].filter(Boolean).join(` · `)],
  [`Assessor market value`, (e) => [e.inc_fmv && `final ${crFmt$(e.inc_fmv)}`, e.inc_incmv && `income ${crFmt$(e.inc_incmv)}`, e.inc_fmvsf && `${crFmt$(e.inc_fmvsf, 2)}/sf`].filter(Boolean).join(` · `)],
  [`Current AV`, (e) => e.av_cur_tot && `${crFmt$(e.av_cur_tot)} (${[e.av_cur_year, e.av_cur_stage].filter(Boolean).join(` `)})`],
  [`Prior-year AV`, (e) => e.av_prv_tot && `${crFmt$(e.av_prv_tot)} (${[e.av_prv_year, e.av_prv_stage].filter(Boolean).join(` `)})${e.av_yoy_pct ? ` · YoY ${Number(e.av_yoy_pct).toFixed(1)}%` : ``}`],
  [`Appeal decision`, (e) => [e.bor_prev_year, e.bor_result, e.bor_pre_tot && `${crFmt$(e.bor_pre_tot)} → ${crFmt$(e.bor_post_tot)}`, e.bor_chg_pct && `${Number(e.bor_chg_pct).toFixed(1)}%`, e.bor_reason].filter(Boolean).join(` · `) || (e.bor_match ? `No ${e.bor_prev_year || ``} decision joined (${e.bor_match})` : ``)],
  [`Last sale`, (e) => [e.sale_date, e.sale_price && crFmt$(e.sale_price), e.sale_mydeed || e.sale_deed, e.sale_doc_no && `doc ${e.sale_doc_no}`].filter(Boolean).join(` · `)],
  [`Appeal / docket`, (e) => [e.BOR_PTAB_Docket_ID && `Docket ${e.BOR_PTAB_Docket_ID}`, e.BOR_Filing_Year && `filed ${e.BOR_Filing_Year}`, e.BOR_PTAB_Status, e.BOR_PTAB_IL_PTAB_Docket_ID && `IL PTAB ${e.BOR_PTAB_IL_PTAB_Docket_ID}`, e.BOR_Complaint_Num && `complaint ${e.BOR_Complaint_Num}`].filter(Boolean).join(` · `)],
  [`Appellant / attorney`, (e) => [[e.BOR_PTAB_Appellant_FN, e.BOR_PTAB_Appellant_LN].filter(Boolean).join(` `), e.BOR_Attorney_Firm || [e.BOR_Attorney_FN, e.BOR_Attorney_LN].filter(Boolean).join(` `)].filter(Boolean).join(` · `)],
  [`Request / deadline`, (e) => [e.BOR_PTAB_Valuation_Req && `valuation request ${crFmt$(e.BOR_PTAB_Valuation_Req)}`, e.BOR_Requested_AV && `requested AV ${crFmt$(e.BOR_Requested_AV)}`, e.BOR_PTAB_Deadline_Date && `deadline ${e.BOR_PTAB_Deadline_Date}`].filter(Boolean).join(` · `)],
  [`Tax code`, (e) => e.inc_taxdist],
  [`PTAB analyst / group`, (e) => [e.BOR_PTAB_Analyst, e.BOR_Current_Commissioner_Group && `group ${e.BOR_Current_Commissioner_Group}`].filter(Boolean).join(` · `)],
];
function crFmt$(e, t = 0) {
  let n = crNum(e);
  return n ? j(n, t) : ``;
}
function crFmtP(e) {
  let t = crRate(e);
  return t ? M(t) : ``;
}
function crFmtN(e) {
  let t = crNum(e);
  return t ? Math.round(t).toLocaleString(`en-US`) : ``;
}
function CrSubject({ sheet: e }) {
  let t = e.subject;
  if (!t) return null;
  let n = CR_SUBJECT_ROWS.map(([e, n]) => [e, n(t)]).filter(([, e]) => e);
  return (0, $.jsxs)(`section`, {
    className: `no-print mt-4 rounded-md border border-border bg-surface px-4 py-4`,
    "data-cr": `subject-panel`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-end justify-between gap-2`,
        children: [
          (0, $.jsx)(`h2`, { className: `font-display text-2xl leading-none`, children: `Subject property` }),
          (0, $.jsx)(`span`, {
            className: `text-xs text-subtle`,
            children: `Read-only · Commercial Review Extract · pin14 ${t.pin14}${e.subjectAt ? ` · ${new Date(e.subjectAt).toLocaleString()}` : ``}`,
          }),
        ],
      }),
      (0, $.jsx)(`dl`, {
        className: `mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-sm`,
        children: n.flatMap(([e, t]) => [
          (0, $.jsx)(`dt`, { className: `text-muted`, children: e }, `t-${e}`),
          (0, $.jsx)(`dd`, { className: `text-fg`, children: t }, `d-${e}`),
        ]),
      }),
      (0, $.jsxs)(`details`, {
        className: `mt-3 text-xs text-subtle`,
        children: [
          (0, $.jsx)(`summary`, { children: `All harvested fields (${Object.keys(t).length})` }),
          (0, $.jsx)(`pre`, {
            className: `mt-2 max-h-56 overflow-auto whitespace-pre-wrap`,
            children: Object.entries(t).map(([e, t]) => `${e} = ${t}`).join(`\n`),
          }),
        ],
      }),
    ],
  });
}
/* ======================= end 2026 COMMERCIAL REVIEWS additions ======================= */

/* Restore the checked auto comps saved with the case (pin + price match). */
function crSavedPicks(e, t) {
  let n = crActiveSheet();
  if (!n?.sales?.comps?.length || n.sales.pin14 !== crPin14(e.keypin || e.pin)) return null;
  let r = new Set(n.sales.comps.filter((e) => !e.manual).map((e) => `${crPin14(e.pin)}|${Math.round(e.salePrice || 0)}`)),
    i = t.filter((e) => r.has(`${crPin14(e.keypin || e.pin)}|${Math.round(e.salePrice || 0)}`));
  return i.length ? new Set(i.map(Au)) : null;
}

function crSaleCutoff(e = CR_SALE_YEARS) {
  let t = new Date();
  t.setFullYear(t.getFullYear() - e);
  return t.getTime();
}
function crClassKey(e) {
  return String(e || ``).split(/[,;]/)[0].replace(/\D/g, ``).slice(0, 3);
}
function crClassTier(e, t) {
  let n = crClassKey(e),
    r = crClassKey(t);
  if (!n || !r) return 3;
  return n === r ? 0 : n.slice(0, 2) === r.slice(0, 2) ? 1 : n[0] === r[0] ? 2 : 3;
}
function crClassTierLabel(e) {
  return [`same class`, `similar class (same 2-digit group)`, `same major class`, `different class`][e] || `class`;
}
function crSaleFlagged(e) {
  if (e.multi === !0 || e.isMultisale === !0 || String(e.is_multisale ?? ``).toLowerCase() === `true`) return `multi-parcel sale`;
  let t = String(e.deedType || e.deed_type || ``).toUpperCase();
  if (/QUIT\s*CLAIM|SHERIFF|TAX DEED|FORECLOS|EXECUTOR|BENEFICIAR|DEED IN LIEU/.test(t)) return `deed type ${e.deedType || e.deed_type}`;
  return null;
}
function crAutoPicks(e, t) {
  crAutoPickInfo = [];
  let n = e?.nra || 0,
    r = e?.classCode || ``,
    i = crSaleCutoff(),
    a = [];
  for (let o of t || []) {
    if (crSaleFlagged(o) || !(o.saleDate >= i) || !(o.salePrice > 0)) continue;
    if (o.distanceMi != null && o.distanceMi > CR_RADIUS_MI) continue;
    let s = o.nra || 0,
      c = o.salePrice > 0 && s > 0 ? o.salePrice / s : null,
      l = crClassTier(r, o.classCode),
      u = n > 0 && s > 0 ? Math.min(2, Math.abs(s - n) / n) : 1,
      d = (o.distanceMi != null ? o.distanceMi : CR_RADIUS_MI) / CR_RADIUS_MI,
      f = o.saleDate ? (Date.now() - o.saleDate) / 864e5 : CR_SALE_YEARS * 365,
      p = Math.min(1, Math.max(0, f / (CR_SALE_YEARS * 365)));
    a.push({ e: o, tier: l, sizeRel: u, nra: s, psf: c, days: f, score: u * 3 + d * 2 + p * 1.5 });
  }
  let o = a.map((e) => e.psf).filter((e) => e != null).sort((e, t) => e - t);
  if (o.length >= 5) {
    let e = o[Math.floor(o.length / 2)];
    a = a.filter((t) => t.psf == null || (t.psf <= e * 3 && t.psf >= e / 3));
  }
  a.sort((e, t) => e.tier - t.tier || e.score - t.score || (t.e.saleDate || 0) - (e.e.saleDate || 0));
  let s = a.slice(0, CR_AUTO_COMPS);
  crAutoPickInfo = s.map((t, i) => ({
    key: Au(t.e),
    pin: crPin14(t.e.keypin || t.e.pin),
    rank: i + 1,
    why: [
      crClassTierLabel(t.tier),
      t.nra > 0 && n > 0 ? `${Math.round(t.nra).toLocaleString()} sf (${Math.round((Math.abs(t.nra - n) / n) * 100)}% size difference)` : t.nra > 0 ? `${Math.round(t.nra).toLocaleString()} sf` : `no building size`,
      t.e.distanceMi != null ? `${t.e.distanceMi.toFixed(2)} mi` : `distance unknown`,
      t.e.saleDate ? `sold ${new Date(t.e.saleDate).toLocaleDateString(`en-US`)}` : `no sale date`,
    ].join(`; `),
  }));
  return new Set(s.map((e) => Au(e.e)));
}
function crAutoPickRule() {
  return `Sales are drawn from the last ${CR_SALE_YEARS} years within ${CR_RADIUS_MI} miles. The ${CR_AUTO_COMPS} best comps are auto-selected, scored by same or similar class first, then closeness in building square feet, distance, and sale recency. Multi-parcel sales, non-arm's-length deed types, and extreme $/sf outliers are excluded when flagged. Analysts may check or uncheck other sales and add manual comps.`;
}
function crAutoPickDetails() {
  return crAutoPickInfo.map((e) => `Score ${e.rank}: ${e.pin ? k(e.pin) : ``} — ${e.why}`);
}
function crAutoPickNote() {
  let e = crAutoPickRule(),
    t = crAutoPickDetails();
  return t.length ? `${e} Auto-selected: ${t.join(`; `)}.` : e;
}
function crIsAutoPick(e) {
  let t = Au(e),
    n = crPin14(e.keypin || e.pin);
  return crAutoPickInfo.some((e) => e.key === t || (n && e.pin === n));
}
function crDefaultPicks(e, t) {
  crAutoPickInfo = [];
  return crSavedPicks(e, t) ?? crAutoPicks(e, t);
}
function crPdfWrap(e, t) {
  let n = String(e || ``).replace(/\s+/g, ` `).trim(),
    r = [];
  while (n.length) {
    if (n.length <= t) {
      r.push(n);
      break;
    }
    let i = n.lastIndexOf(` `, t);
    if (i < t * 0.55) i = t;
    r.push(n.slice(0, i).trim());
    n = n.slice(i).trim();
  }
  return r;
}
/* Property photos: first Assessor building picture (_AA on the PIN page); Esri aerial only when that photo is missing (vacant land, 404, or load failure). */
var CR_PHOTO_MS = 8000,
  CR_PTAB_PHOTO_BUDGET_MS = 3000,
  crPhotoCache = new Map(),
  crAssessorBytes = new Map(),
  crAssessorInflight = new Map(),
  crAerialBytes = new Map(),
  crAerialInflight = new Map(),
  crPhotoDeadline = 0;
function crAssessorPhotoUrls(e) {
  let t = crPin14(e);
  if (!t) return [];
  let n = `https://prodassets.cookcountyassessoril.gov/s3fs-public/pin_detail/${t.slice(0, 3)}-${t.slice(3, 5)}/${t.slice(5, 8)}/${t}_AA`;
  return [`${n}.jpg`, `${n}.JPG`];
}
function crPhotoCaption(e) {
  return e === `assessor` ? `Assessor photo` : e === `aerial` ? `Aerial` : ``;
}
function crIsImageBytes(e) {
  return !!(e && e.length > 24 && ((e[0] === 0xff && e[1] === 0xd8 && e[2] === 0xff) || (e[0] === 0x89 && e[1] === 0x50 && e[2] === 0x4e && e[3] === 0x47)));
}
function crIsPngBytes(e) {
  return !!(e && e[0] === 0x89 && e[1] === 0x50 && e[2] === 0x4e && e[3] === 0x47);
}
function crPhotoRec(e) {
  if (e != null && typeof e == `object`)
    return { pin: crPin14(e.pin ?? e.keypin ?? ``), lat: e.lat, lng: e.lng };
  return { pin: crPin14(e), lat: void 0, lng: void 0 };
}
function crAerialKey(e, t) {
  return e != null && t != null ? `${Number(e).toFixed(6)},${Number(t).toFixed(6)}` : ``;
}
async function crFetchBytes(e, t = CR_PHOTO_MS) {
  let n = new AbortController(),
    r = setTimeout(() => n.abort(), t);
  try {
    let t = await fetch(e, { signal: n.signal, mode: `cors`, credentials: `omit` });
    if (!t.ok) return null;
    let i = new Uint8Array(await t.arrayBuffer());
    return crIsImageBytes(i) ? i : null;
  } catch {
    return null;
  } finally {
    clearTimeout(r);
  }
}
function crProbeUrl(e, t = CR_PHOTO_MS) {
  return new Promise((n) => {
    let r = new Image(),
      i = 0,
      a = (e) => {
        if (!i) return;
        clearTimeout(i);
        i = 0;
        r.onload = r.onerror = null;
        n(e);
      };
    i = setTimeout(() => a(null), t);
    r.decoding = `async`;
    r.onload = () => a(r.naturalWidth > 16 ? e : null);
    r.onerror = () => a(null);
    r.src = e;
  });
}
function crRaceTimeout(e, t) {
  return Promise.race([e, new Promise((e) => setTimeout(() => e(null), t))]);
}
var crAssessorUrlCache = new Map();
async function crFirstAssessorUrl(e) {
  let t = crPin14(e),
    n = crAssessorPhotoUrls(e);
  if (!t || !n.length) return null;
  if (crAssessorUrlCache.has(t)) return crAssessorUrlCache.get(t);
  let r = await crRaceTimeout(Promise.all(n.map((e) => crProbeUrl(e, 6000))), CR_PHOTO_MS),
    i = (r && r.find(Boolean)) || null;
  if (i) crAssessorUrlCache.set(t, i);
  return i;
}
/* The Assessor CDN has no CORS. An already-loaded <img> taints a canvas (SecurityError), so we cannot copy those pixels into the PTAB PDF. Public proxies we tried: images.weserv.nl (origin 403), corsproxy.io (API key required), allorigins (slow/unreliable). imagecdn.app returns CORS JPEGs quickly; format=jpg is required so Chrome does not get WebP. Rate limit is 30/min per client, so we preload only the subject and checked comps, cache verified bytes, and fall back to the Esri aerial. */
function crAssessorProxyUrl(e) {
  return `https://imagecdn.app/v2/image/${encodeURIComponent(e)}?format=jpg`;
}
function crFetchAssessorBytes(e) {
  let t = crPin14(e);
  if (!t) return Promise.resolve(null);
  if (crAssessorBytes.has(t)) return Promise.resolve(crAssessorBytes.get(t));
  if (crAssessorInflight.has(t)) return crAssessorInflight.get(t);
  let n = (async () => {
    try {
      let e = await crFirstAssessorUrl(t);
      if (!e) {
        let n = { bytes: null, source: null, none: !0 };
        crAssessorBytes.set(t, n);
        return n;
      }
      let r = await crFetchBytes(crAssessorProxyUrl(e), 4000);
      if (r) {
        let n = { bytes: r, source: `assessor` };
        crAssessorBytes.set(t, n);
        return n;
      }
      return null;
    } catch {
      return null;
    } finally {
      crAssessorInflight.delete(t);
    }
  })();
  crAssessorInflight.set(t, n);
  return n;
}
function crFetchAerialBytes(e) {
  let t = crAerialKey(e.lat, e.lng);
  if (!t) return Promise.resolve({ bytes: null, source: null });
  if (crAerialBytes.has(t)) return Promise.resolve(crAerialBytes.get(t));
  if (crAerialInflight.has(t)) return crAerialInflight.get(t);
  let n = (async () => {
    try {
      let n = crAerial(e.lat, e.lng);
      if (!n) return { bytes: null, source: null };
      let r = await crFetchBytes(n, 5000);
      let i = r ? { bytes: r, source: `aerial` } : { bytes: null, source: null };
      if (i.bytes) crAerialBytes.set(t, i);
      return i;
    } catch {
      return { bytes: null, source: null };
    } finally {
      crAerialInflight.delete(t);
    }
  })();
  crAerialInflight.set(t, n);
  return n;
}
function crPreloadPinPhotos(e) {
  let t = crPhotoRec(e);
  if (t.pin) void crFetchAssessorBytes(t.pin);
  if (t.lat != null && t.lng != null) void crFetchAerialBytes(t);
}
function crPreloadCasePhotos(e, t) {
  crPreloadPinPhotos(e);
  for (let n of t || []) crPreloadPinPhotos(n);
}
async function crPinPhotoBytes(e) {
  try {
    let t = crPhotoRec(e),
      n = t.pin && crAssessorBytes.get(t.pin);
    if (n && n.bytes && crIsImageBytes(n.bytes)) return n;
    let r = crPhotoDeadline ? Math.max(0, crPhotoDeadline - Date.now()) : CR_PTAB_PHOTO_BUDGET_MS;
    if (t.pin && r > 0 && !(n && n.none)) {
      let e = await crRaceTimeout(crFetchAssessorBytes(t.pin), r);
      if (e && e.bytes && crIsImageBytes(e.bytes)) return e;
    }
    let i = crAerialKey(t.lat, t.lng),
      a = i && crAerialBytes.get(i);
    if (a && a.bytes) return a;
    let o = crPhotoDeadline ? Math.max(0, crPhotoDeadline - Date.now()) : 800;
    if (o > 0) {
      let e = await crRaceTimeout(crFetchAerialBytes(t), o);
      if (e && e.bytes) return e;
    }
  } catch {}
  return { bytes: null, source: null };
}
async function crEmbedPhoto(e, t) {
  if (!t || !crIsImageBytes(t.bytes)) return null;
  try {
    return crIsPngBytes(t.bytes) ? await e.embedPng(t.bytes) : await e.embedJpg(t.bytes);
  } catch {
    return null;
  }
}
function CrPropertyPhoto({ pin: e, lat: t, lng: n, alt: r, variant: i = `report`, heading: a, showStreet: o }) {
  let [s, c] = (0, C.useState)({ src: null, source: null, ready: !1 });
  (0, C.useEffect)(() => {
    let r = !0;
    c({ src: null, source: null, ready: !1 });
    (async () => {
      let i = crPin14(e) ? await crFirstAssessorUrl(e) : null;
      if (!r) return;
      if (i) return void c({ src: i, source: `assessor`, ready: !0 });
      let a = t != null && n != null ? crAerial(t, n) : null;
      if (!r) return;
      c({ src: a, source: a ? `aerial` : null, ready: !0 });
    })();
    return () => {
      r = !1;
    };
  }, [e, t, n]);
  let l = crPhotoCaption(s.source);
  if (i === `thumb`)
    return s.src
      ? (0, $.jsx)(`img`, { src: s.src, alt: ``, title: l })
      : s.ready
        ? null
        : (0, $.jsx)(`span`, { className: `pin-photo-wait` });
  if (!s.src)
    return (0, $.jsx)(`div`, { className: i === `card` ? `cr-empty` : `cr-photo cr-empty`, children: s.ready ? `No photo` : `\u00a0` });
  return (0, $.jsxs)(`div`, {
    className: `${i === `card` ? `cr-photo-wrap` : `cr-photo cr-photo-wrap`}${s.source === `aerial` && i === `report` ? ` is-aerial` : ``}`,
    children: [
      (0, $.jsx)(`img`, { src: s.src, alt: r || l || `Property photo` }),
      s.source === `aerial` && i === `report` ? (0, $.jsx)(`span`, { className: `cr-photo-dot` }) : null,
      l ? (0, $.jsx)(`span`, { className: `cr-photo-cap`, children: l }) : null,
      o && t != null && n != null
        ? (0, $.jsx)(`a`, { className: `cr-photo-link no-print`, href: ne(t, n, a || 0), target: `bor-street-view`, rel: `noreferrer`, children: `Street view` })
        : null,
    ],
  });
}
/* ---------- Subject lookup from public Cook County data (PIN is the key) ---------- */
var CR_SODA = `https://datacatalog.cookcountyil.gov/resource/`;
async function crSoda(e, t) {
  let n = await fetch(`${CR_SODA}${e}.json?${new URLSearchParams(t)}`);
  if (!n.ok) throw Error(`${e} answered ${n.status}`);
  let r = await n.json();
  if (!Array.isArray(r)) throw Error(`${e} rejected the query`);
  return r;
}
function crSafe(e) {
  return e.catch(() => null);
}
var CR_TIERS = [`A`, `B`, `C`, `D`, `E`];
function crTierIdx(e) {
  if (!(e > 0)) return -1;
  let t = $l.findIndex((t) => e >= t.min && e <= t.max);
  return t < 0 ? $l.length - 1 : t;
}
async function crLookupSubject(e) {
  let t = crPin14(e);
  if (!t) return null;
  let n = k(t),
    r = new Date();
  r.setFullYear(r.getFullYear() - 10);
  let i = r.toISOString().slice(0, 10) + `T00:00:00`,
    [a, o, s, c, l] = await Promise.all([
      crSafe(crSoda(`pabr-t5kh`, { $select: `pin,year,class,township_name,township_code,nbhd_code,tax_code,lat,lon`, $where: `pin='${t}'`, $order: `year DESC`, $limit: `1` })),
      crSafe(crSoda(`uzyt-m557`, { $where: `pin='${t}'`, $order: `year DESC`, $limit: `6` })),
      crSafe(crSoda(`wvhk-k5uv`, { $select: `pin,year,class,sale_date,sale_price,doc_no,deed_type,seller_name,buyer_name,sale_type,is_multisale,num_parcels_sale`, $where: `pin='${t}' AND sale_date >= '${i}'`, $order: `sale_date DESC`, $limit: `25` })),
      crSafe(crSoda(`csik-bsws`, { $where: `keypin='${n}' OR pins like '%${n}%'`, $order: `year DESC`, $limit: `3` })),
      crSafe(crSoda(`7pny-nedm`, { $select: `tax_year,appealid,appealtypedescription,class,taxcode,assessor_landvalue,assessor_improvementvalue,assessor_totalvalue,bor_landvalue,bor_improvementvalue,bor_totalvalue,result,changereasondescription,appellant,attorney_firmname,lat,long`, $where: `pin='${t}'`, $order: `tax_year DESC`, $limit: `5` })),
    ]),
    u = a?.[0] ?? null,
    d = c?.[0] ?? null,
    f = l?.[0] ?? null,
    p = null;
  d && (p = await crSafe(crPeers(d)));
  return {
    pin14: t, fetchedAt: new Date().toISOString(),
    parcel: u
      ? { year: u.year, classCode: u.class, township: u.township_name, townshipCode: u.township_code, nbhd: u.nbhd_code, taxCode: u.tax_code, lat: Number(u.lat) || null, lng: Number(u.lon) || null }
      : null,
    av: (o ?? []).map((e) => ({
      year: e.year, classCode: e.class, township: e.township_name, townshipCode: e.township_code,
      mailed_land: Fl(e.mailed_land), mailed_bldg: Fl(e.mailed_bldg), mailed_tot: Fl(e.mailed_tot),
      certified_land: Fl(e.certified_land), certified_bldg: Fl(e.certified_bldg), certified_tot: Fl(e.certified_tot),
      board_land: Fl(e.board_land), board_bldg: Fl(e.board_bldg), board_tot: Fl(e.board_tot),
    })),
    sales: (s ?? []).map((e) => ({
      date: Il(e.sale_date).slice(0, 10), price: Fl(e.sale_price), doc: Il(e.doc_no), deed: Il(e.deed_type),
      seller: Il(e.seller_name), buyer: Il(e.buyer_name), type: Il(e.sale_type), classCode: Il(e.class),
      multi: !!e.is_multisale, parcels: Fl(e.num_parcels_sale),
    })),
    income: d
      ? {
          year: d.year, keypin: Il(d.keypin), pins: Il(d.pins), address: Il(d.address), township: Il(d.township),
          classCode: Il(d.class_es), use: Il(d.property_type_use), rating: Il(d.investmentrating), townregion: Il(d.townregion),
          bldgsf: Fl(d.bldgsf), nrsf: Fl(d.netrentablesf), landsf: Fl(d.landsf), yearbuilt: Fl(d.yearbuilt),
          rentSf: Fl(d.adj_rent_sf), pgi: Fl(d.pgi), egi: Fl(d.egi), vacancy: Fl(d.vacancy), exp: Fl(d.exp),
          noi: Fl(d.noi), cap: Fl(d.caprate), fmv: Fl(d.finalmarketvalue), fmvSf: Fl(d.finalmarketvalue_sf),
          taxdist: Il(d.taxdist), exLandVal: Fl(d.excesslandval), totalExp: Fl(d.totalexp), units: Fl(d.units ?? d.apt ?? 0),
        }
      : null,
    bor: (l ?? []).map((e) => ({
      year: e.tax_year, appealId: Il(e.appealid), type: Il(e.appealtypedescription), taxCode: Il(e.taxcode),
      preLand: Fl(e.assessor_landvalue), preBldg: Fl(e.assessor_improvementvalue), preTot: Fl(e.assessor_totalvalue),
      postLand: Fl(e.bor_landvalue), postBldg: Fl(e.bor_improvementvalue), postTot: Fl(e.bor_totalvalue),
      result: Il(e.result), reason: Il(e.changereasondescription), appellant: Il(e.appellant), firm: Il(e.attorney_firmname),
    })),
    peers: p,
    borLoc: f && Number(f.lat) ? { lat: Number(f.lat), lng: Number(f.long) } : null,
  };
}
/* Equitability peers: same Assessor year, investment rating, township (location), size tier, major class. */
async function crPeers(e) {
  let t = Fl(e.bldgsf) || Fl(e.netrentablesf),
    n = crTierIdx(t),
    r = Il(e.investmentrating),
    i = Il(e.class_es).replace(/\D/g, ``).slice(0, 1),
    a = [`year='${e.year}'`];
  r && a.push(`investmentrating='${r.replace(/'/g, `''`)}'`);
  n >= 0 && a.push(`bldgsf >= ${$l[n].min} AND bldgsf <= ${$l[n].max}`);
  i && a.push(`starts_with(class_es, '${i}')`);
  let o = async (e) =>
      crSoda(`csik-bsws`, {
        $select: `keypin,township,adj_rent_sf,pgi,bldgsf,caprate,vacancy,exp,finalmarketvalue_sf`,
        $where: e.join(` AND `), $limit: `2000`,
      }),
    s = Il(e.township),
    c = s ? await o([...a, `township='${s.replace(/'/g, `''`)}'`]) : [],
    l = `township`;
  c.length < 5 && ((c = await o(a)), (l = `countywide`));
  let u = (e) => {
      let t = c.map(e).filter((e) => Number.isFinite(e) && e > 0);
      return t.length ? t.reduce((e, t) => e + t, 0) / t.length : null;
    };
  return {
    scope: l, township: s, rating: r, tier: n >= 0 ? CR_TIERS[n] : ``, tierLabel: n >= 0 ? $l[n].label : ``,
    majorClass: i, year: e.year, count: c.length,
    avgRentSf: u((e) => Fl(e.adj_rent_sf)),
    avgPgiSf: u((e) => (Fl(e.bldgsf) > 0 ? Fl(e.pgi) / Fl(e.bldgsf) : NaN)),
    avgCap: u((e) => Fl(e.caprate)), avgVacancy: u((e) => Fl(e.vacancy)), avgExp: u((e) => Fl(e.exp)),
    avgValueSf: u((e) => Fl(e.finalmarketvalue_sf)),
    valueSf: c.map((e) => Fl(e.finalmarketvalue_sf)).filter((e) => e > 0 && e < 2e3),
  };
}
/* Fill the case from the lookup (only fields that are empty on the case). */
function crLookupPatch(e, t) {
  if (!t) return {};
  let n = {},
    r = (t, r) => {
      r != null && r !== `` && r !== 0 && crEmpty(e[t]) && (n[t] = r);
    },
    i = t.av?.[0],
    a = i ? i.board_tot || i.certified_tot || i.mailed_tot : 0;
  r(`currentAv`, a);
  r(`address`, t.income?.address);
  e.name === `Untitled case` && t.income?.address && (n.name = t.income.address);
  r(`township`, crTitle(t.parcel?.township || t.income?.township));
  let o = t.parcel?.classCode || i?.classCode,
    s = crClassId(o);
  s && (e.classId === `5a` || crEmpty(e.classId)) && !e.subject && ((n.classId = s.classId), (n.loa = s.loa));
  r(`nra`, t.income?.nrsf || t.income?.bldgsf);
  let tc = [t.parcel?.taxCode, ...(t.bor ?? []).map((e) => e.taxCode), t.income?.taxdist].filter(Boolean);
  let fresh = !e.taxCode || (e.lookup?.pin14 && e.lookup.pin14 !== t.pin14) || e.taxCodePin !== t.pin14;
  tc.length && fresh && ((n.taxCodePin = t.pin14), (n.taxCode = tc[0]), (n.taxCodeAlt = [...new Set(tc.slice(1))]), (n.taxRateManual = !1));
  let c = t.parcel?.lat != null ? t.parcel : t.borLoc;
  c && e.lat == null && ((n.lat = c.lat), (n.lng = c.lng));
  return n;
}
/* ---------- Optional local copy of the Commercial Review Extract (docket lookup) ---------- */
var CR_DB = `cr2026`,
  crExtract = null;
function crIdb(e, t) {
  return new Promise((n, r) => {
    let i = indexedDB.open(CR_DB, 1);
    i.onupgradeneeded = () => i.result.createObjectStore(`kv`);
    i.onerror = () => r(i.error);
    i.onsuccess = () => {
      let a = i.result.transaction(`kv`, e === `get` ? `readonly` : `readwrite`).objectStore(`kv`),
        o = e === `get` ? a.get(t.key) : a.put(t.value, t.key);
      o.onsuccess = () => n(o.result);
      o.onerror = () => r(o.error);
    };
  });
}
function crParseCsv(e) {
  let t = [],
    n = [``],
    r = 0,
    i = !1;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    if (i) o === `"` ? (e[a + 1] === `"` ? ((n[r] += `"`), a++) : (i = !1)) : (n[r] += o);
    else if (o === `"`) i = !0;
    else if (o === `,`) (n.push(``), r++);
    else if (o === `\n` || o === `\r`) {
      o === `\r` && e[a + 1] === `\n` && a++;
      (t.push(n), (n = [``]), (r = 0));
    } else n[r] += o;
  }
  (n.length > 1 || n[0]) && t.push(n);
  let a = t.shift() ?? [];
  return t.filter((e) => e.length > 1).map((e) => Object.fromEntries(a.map((t, n) => [t.replace(/^\uFEFF/, ``), e[n] ?? ``])));
}
async function crLoadExtract() {
  if (crExtract) return crExtract;
  try {
    let e = await crIdb(`get`, { key: `extract` });
    e && Array.isArray(e.rows) && (crExtract = e);
  } catch {}
  return crExtract;
}
async function crSaveExtract(e, t) {
  let n = crParseCsv(e).filter((e) => crPin14(e.pin14 || e.BOR_PIN));
  crExtract = { name: t, loadedAt: new Date().toISOString(), rows: n };
  try { await crIdb(`put`, { key: `extract`, value: crExtract }); } catch {}
  return crExtract;
}
function crFindExtract(e, t) {
  if (!crExtract) return null;
  let n = crPin14(e),
    r = (t || ``).trim().toUpperCase(),
    i = crExtract.rows.filter((e) => (n && crPin14(e.pin14 || e.BOR_PIN) === n) || (r && (e.BOR_PTAB_Docket_ID || ``).toUpperCase() === r));
  if (!i.length) return null;
  return i.find((e) => n && r && crPin14(e.pin14 || e.BOR_PIN) === n && (e.BOR_PTAB_Docket_ID || ``).toUpperCase() === r) || i.find((e) => r && (e.BOR_PTAB_Docket_ID || ``).toUpperCase() === r) || i[0];
}
/* ---------- District (tax code) composite tax rates, Cook County Clerk ---------- */
var crRates = null,
  crRatesP = null;
function crLoadRates() {
  return (crRatesP ||= fetch(`./assets/taxcode-rates.json`)
    .then((e) => (e.ok ? e.json() : null))
    .then((e) => ((crRates = e), e))
    .catch(() => null));
}
function crDistrictRate(e, t) {
  let n = String(e || ``).replace(/\D/g, ``);
  if (!n) return null;
  let r = crRates?.years?.[String(t)]?.[n.padStart(5, `0`)];
  return r > 0 ? r / 100 : null;
}
/* Fill taxRate from the subject's tax code for the selected factor year (2024 / 2025). */
function crRatePatch(e, t) {
  let n = t ?? pd(e.eqFactor);
  if (n === `custom` || e.taxRateManual) return {};
  let r = [e.taxCode, ...(e.taxCodeAlt ?? [])].filter(Boolean);
  if (!r.length) return {};
  for (let t of r) {
    let r = crDistrictRate(t, n);
    if (r != null)
      return { taxRate: r, taxRateYear: n, taxCode: t, taxRateSource: `Cook County Clerk ${n} composite rate, tax code ${t} (${(r * 100).toFixed(3)}%)` };
  }
  return { taxRateYear: n, taxRateSource: `No Cook County Clerk ${n} rate for tax code ${r[0]}. Enter the district rate.` };
}
/* ---------- Commercial Review Worksheet (printable analysis report, 4 letter pages) ---------- */
function crBBox(e, t, n) {
  let r = e.filter((e) => e.lat != null && e.lng != null);
  if (!r.length) return null;
  let i = Math.min(...r.map((e) => e.lat)), a = Math.max(...r.map((e) => e.lat)),
    o = Math.min(...r.map((e) => e.lng)), s = Math.max(...r.map((e) => e.lng)),
    c = (i + a) / 2, l = Math.cos((c * Math.PI) / 180),
    u = Math.max((a - i) * 1.3, 0.01), d = Math.max((s - o) * 1.3, 0.01 / l),
    f = t / n;
  d * l / u > f ? (u = (d * l) / f) : (d = (u * f) / l);
  let p = (o + s) / 2;
  return { minLat: c - u / 2, maxLat: c + u / 2, minLng: p - d / 2, maxLng: p + d / 2 };
}
function crExportUrl(e, t, n, r = `World_Street_Map`) {
  return `https://services.arcgisonline.com/arcgis/rest/services/${r}/MapServer/export?bbox=${e.minLng},${e.minLat},${e.maxLng},${e.maxLat}&bboxSR=4326&imageSR=4326&size=${t},${n}&format=jpg&f=image`;
}
function crAerial(e, t) {
  if (e == null || t == null) return null;
  let n = 0.0011, r = n / Math.cos((e * Math.PI) / 180) * 1.45;
  return crExportUrl({ minLat: e - n, maxLat: e + n, minLng: t - r, maxLng: t + r }, 480, 330, `World_Imagery`);
}
function crIn({ value: e, onChange: t, num: n, wide: r, area: i, ph: a }) {
  let o = e == null ? `` : String(e);
  return i
    ? (0, $.jsx)(`textarea`, { className: `cr-in cr-area`, value: o, placeholder: a, onChange: (e) => t(e.target.value) })
    : (0, $.jsx)(`input`, { className: `cr-in${r ? ` cr-wide` : ``}${n ? ` cr-num` : ``}`, value: o, placeholder: a, onChange: (e) => t(e.target.value) });
}
function crV(e) {
  return (0, $.jsx)(`span`, { className: `cr-val`, children: e == null || e === `` ? `\u00a0` : e });
}
function crKV(e, t, n) {
  return (0, $.jsxs)(`div`, { className: `cr-kv${n ? ` ${n}` : ``}`, children: [(0, $.jsx)(`span`, { className: `cr-k`, children: e }), t] });
}
function crBox(e, t, n) {
  return (0, $.jsxs)(`div`, { className: `cr-box${n ? ` ${n}` : ``}`, children: [e ? (0, $.jsx)(`div`, { className: `cr-box-t`, children: e }) : null, t] });
}
function crD(e, t = 2) {
  return e == null || !Number.isFinite(e) ? `` : j(e, t);
}
function crN(e, t = 0) {
  return e == null || !Number.isFinite(e) || e === 0 ? `` : e.toLocaleString(`en-US`, { minimumFractionDigits: t, maximumFractionDigits: t });
}
function crNumIn(e) {
  let t = Number(String(e ?? ``).replace(/[$,\s]/g, ``));
  return Number.isFinite(t) ? t : 0;
}
function crReportModel(e, t, n) {
  let r = e.report ?? {}, i = e.subject ?? {}, a = e.lookup ?? {}, o = a.av?.[0], s = a.income, c = a.parcel,
    l = (e) => crNum(i[e]),
    u = o ? (o.board_tot ? `board` : o.certified_tot ? `certified` : `mailed`) : ``,
    d = l(`BOR_Land_AV`) || (o ? o[`${u}_land`] : 0),
    f = l(`BOR_Improvement_AV`) || (o ? o[`${u}_bldg`] : 0),
    p = l(`BOR_Total_AV`) || (o ? o[`${u}_tot`] : 0) || e.currentAv,
    m = r.landAv !== void 0 && r.landAv !== `` ? crNumIn(r.landAv) : d,
    h = r.impAv !== void 0 && r.impAv !== `` ? crNumIn(r.impAv) : f,
    g = r.totalAv !== void 0 && r.totalAv !== `` ? crNumIn(r.totalAv) : p,
    _ = e.requestedAv > 0 ? e.requestedAv : 0,
    v = e.requestedMv > 0 ? e.requestedMv : 0,
    y = t.assessed, b = t.concluded,
    x = r.newLandAv !== void 0 && r.newLandAv !== `` ? crNumIn(r.newLandAv) : m,
    S = y != null ? y - x : null,
    C2 = r.decision || (y == null ? `` : y === g ? `nochange` : `change`),
    w2 = s?.bldgsf || e.nra || 0,
    T2 = e.nra || w2,
    E2 = s?.yearbuilt ? (Number(e.taxYear) || new Date().getFullYear()) - s.yearbuilt : null,
    D2 = t.loadedCap > 0 ? t.noi / t.loadedCap : null,
    O2 = D2 == null ? null : D2 * e.loa,
    k2 = e.loa > 0 ? m / e.loa : 0,
    A2 = crNumIn(r.occFactor), j2 = crNumIn(r.prcCol4),
    M2 = j2 > 0 ? k2 + j2 * A2 : null,
    N2 = M2 == null ? null : Math.round(M2 * e.loa),
    P2 = a.peers,
    F2 = r.rentSf !== void 0 && r.rentSf !== `` ? crNumIn(r.rentSf) : P2?.avgRentSf ?? null,
    I2 = r.valueSf !== void 0 && r.valueSf !== `` ? crNumIn(r.valueSf) : P2?.avgValueSf ?? null,
    L2 = s?.bldgsf || e.nra || 0,
    R2 = n?.picked ?? [],
    z2 = sl(e.classId, c?.classCode || s?.classCode || ``, s?.use || ``);
  return {
    r, i, a, o, s, c, stage: u, landAv: m, impAv: h, totalAv: g, requestedAv: _, requestedMv: v,
    marketAv: e.loa > 0 && g ? g / e.loa : null, newAv: y, newValue: b, newLandAv: x, newImpAv: S, decision: C2,
    sfIncome: T2, age: E2, mv: D2, av: O2, marketLand: k2, occFactor: A2, prc: j2, oneMv: M2, oneAv: N2,
    peers: P2, rentSf: F2, valueSf: I2, sqft: L2, workbookPgi: F2 != null && L2 ? F2 * L2 : null,
    grossWorkbook: I2 != null && L2 ? I2 * L2 : null, comps: R2, kind: z2,
    townshipNum: i.BOR_Township_Num || c?.townshipCode || o?.townshipCode || ``,
    classCode: i.av_cur_class || c?.classCode || o?.classCode || ``,
    propType: r.propType ?? (i.BOR_Property_Type || (z2 === `industrial` ? `INDUSTRIAL` : `COMMERCIAL`)),
    propDesc: r.propDesc ?? (s?.use || i.inc_use || ``),
    status: r.status ?? (i.BOR_PTAB_Status || ``),
    filingYear: r.filingYear ?? (i.BOR_Filing_Year || a.bor?.[0]?.year || String(e.taxYear || ``)),
    docName: r.docName ?? (i.Document_Name || (e.caseNumber || A(e.pin) ? `Complaint for PIN# ${k(A(e.pin))}${e.caseNumber ? ` · Complaint # ${e.caseNumber}` : ``}` : ``)),
    taxCode: r.taxCode ?? (e.taxCode || c?.taxCode || a.bor?.[0]?.taxCode || s?.taxdist || i.inc_taxdist || ``),
  };
}
function CrReport({ sheet: e, result: t, summary: n, patch: r }) {
  let i = crReportModel(e, t, n),
    a = (t, n) => r({ report: { ...(e.report ?? {}), [t]: n } }),
    o = A(e.pin),
    s = e.lat != null ? { lat: e.lat, lng: e.lng } : i.c?.lat != null ? i.c : null,
    c = [s ? { ...s, role: `subject` } : null, ...i.comps.map((e, t) => ({ lat: e.lat, lng: e.lng, role: e.manual ? `manual` : `sale`, n: t + 1 })).filter((e) => e.lat != null)].filter(Boolean),
    l = c.length ? crBBox(c, 960, 520) : null,
    u = i.comps.filter((e) => e.salePrice > 0),
    d = u.length ? u.reduce((e, t) => e + t.salePrice, 0) / u.length : null,
    f = i.comps.filter((e) => e.psf != null),
    p = f.length ? f.reduce((e, t) => e + t.psf, 0) / f.length : null,
    m = (e, t) => (0, $.jsxs)(`label`, { className: `cr-check`, children: [(0, $.jsx)(`input`, { type: `checkbox`, checked: i.decision === e, onChange: () => a(`decision`, i.decision === e ? `none` : e) }), t] }),
    g = i.a.av ?? [],
    _ = i.a.sales ?? [],
    v = i.peers,
    y = v?.valueSf?.length ? crHist(v.valueSf, i.valueSf) : null,
    z9 = 0,
    pk = `${A(e.pin)}|${(i.comps || []).map((e) => A(e.pin)).join(`,`)}|${e.lat}|${e.lng}`;
  (0, C.useEffect)(() => {
    crPreloadCasePhotos({ pin: e.pin, lat: e.lat ?? s?.lat, lng: e.lng ?? s?.lng }, i.comps);
  }, [pk]);
  return (0, $.jsxs)(`section`, {
    className: `cr-report mt-8`, "data-cr": `analysis-report`,
    children: [
      (0, $.jsxs)(`div`, { className: `no-print flex flex-wrap items-end justify-between gap-3`, children: [
        (0, $.jsxs)(`div`, { children: [
          (0, $.jsx)(`p`, { className: `text-xs font-medium tracking-wide text-muted uppercase`, children: `Outputs` }),
          (0, $.jsx)(`h2`, { className: `mt-1 font-display text-2xl leading-none`, children: `Reports` }),
          (0, $.jsx)(`p`, { className: `mt-1 max-w-xl text-sm text-pretty text-muted`, children: `PTAB PDF (State Form) is the featured report: the Illinois PTAB notes on appeal (PTAB-6C or PTAB-6I) filled from this case (subject, checked sales including analyst-entered comps, exhibit page, comments, and Additional Notes pages). Analyst Report prints the worksheet below. The PTAB PDF is named <PIN14>_PTAB.pdf; the Analyst Report is named <docket>_<PIN>.pdf.` }),
          (0, $.jsx)(`p`, { className: `mt-1 max-w-xl text-sm text-pretty text-muted`, children: `Analyst Report: five letter pages (including the comparable sales grid) plus Additional Notes pages. Boxes and comment fields are editable and saved with the case; values come from the case, the PIN lookup, and the checked sales. Print to PDF from the browser.` }),
        ] }),
        (0, $.jsxs)(`div`, { className: `flex flex-wrap items-end gap-2`, children: [
          (0, $.jsxs)(`label`, { className: `flex flex-col gap-1`, children: [
            (0, $.jsx)(`span`, { className: `lbl`, children: `Additional Notes pages` }),
            (0, $.jsx)(`select`, { className: `field`, "data-cr": `notes-pages`, value: String(crNotesPages(e)), onChange: (e) => a(`notesPages`, Number(e.target.value)), children: [0, 1, 2, 3, 4, 5].map((e) => (0, $.jsx)(`option`, { value: String(e), children: e }, e)) }),
          ] }),
          (0, $.jsx)(CrReportButtons, { sheet: e, result: t, summary: n }),
        ] }),
      ] }),
      /* ---------------- page 1 ---------------- */
      (0, $.jsxs)(`div`, { className: `cr-page`, children: [
        (0, $.jsxs)(`div`, { className: `cr-head`, children: [
          (0, $.jsxs)(`div`, { className: `cr-head-l`, children: [
            (0, $.jsx)(`div`, { className: `cr-h1`, children: `Cap & Review` }),
            (0, $.jsx)(`div`, { className: `cr-h2`, children: `2026 COMMERCIAL REVIEWS` }),
            (0, $.jsx)(`div`, { className: `cr-h3`, children: `Tax year ${e.taxYear || ``}` }),
          ] }),
          (0, $.jsxs)(`div`, { className: `cr-head-r`, children: [
            crKV(`Complaint #`, (0, $.jsx)(crIn, { value: e.caseNumber ?? ``, ph: e.sample ? CR_SAMPLE_LABEL : void 0, onChange: (e) => r({ caseNumber: e }) })),
            crKV(`Complaint Status`, (0, $.jsx)(crIn, { value: i.status, onChange: (e) => a(`status`, e) })),
            crKV(`Analyst 1`, (0, $.jsx)(crIn, { value: e.analyst ?? ``, onChange: (e) => (crSetAnalyst(e), r({ analyst: e })) })),
            crKV(`Analyst 2`, (0, $.jsx)(crIn, { value: i.r.analyst2 ?? ``, onChange: (e) => a(`analyst2`, e) })),
            crKV(`Analyst 3`, (0, $.jsx)(crIn, { value: i.r.analyst3 ?? ``, onChange: (e) => a(`analyst3`, e) })),
          ] }),
        ] }),
        (0, $.jsxs)(`div`, { className: `cr-row`, children: [
          crBox(`Docket Information`, (0, $.jsxs)($.Fragment, { children: [
            crKV(`PIN`, crV(o)),
            (0, $.jsxs)(`div`, { className: `cr-inline`, children: [
              crKV(`Filing Year`, (0, $.jsx)(crIn, { value: i.filingYear, onChange: (e) => a(`filingYear`, e) })),
              crKV(`Township`, crV(`${(e.township || ``).toUpperCase()}${i.townshipNum ? `  ${i.townshipNum}` : ``}`)),
            ] }),
            crKV(`Property Address`, crV(e.address)),
          ] }), `cr-w60`),
          crBox(`Class and Use`, (0, $.jsxs)($.Fragment, { children: [
            crKV(`Property Type`, (0, $.jsx)(crIn, { value: i.propType, onChange: (e) => a(`propType`, e) })),
            crKV(`Property Classification`, crV(i.classCode)),
            crKV(`Property Description`, (0, $.jsx)(crIn, { value: i.propDesc, onChange: (e) => a(`propDesc`, e) })),
          ] }), `cr-w40`),
        ] }),
        (0, $.jsxs)(`div`, { className: `cr-row`, children: [
          crBox(`Assessment and Review Summary`, (0, $.jsxs)(`div`, { className: `cr-grid2`, children: [
            crKV(`Land AV`, (0, $.jsx)(crIn, { num: !0, value: i.r.landAv ?? crN(i.landAv), onChange: (e) => a(`landAv`, e) })),
            crKV(`Requested MV`, (0, $.jsx)(crIn, { num: !0, value: crN(i.requestedMv), onChange: (t) => r(crReqPatch(e, `mv`, t)) })),
            crKV(`Imp AV`, (0, $.jsx)(crIn, { num: !0, value: i.r.impAv ?? crN(i.impAv), onChange: (e) => a(`impAv`, e) })),
            crKV(`Requested AV`, (0, $.jsx)(crIn, { num: !0, value: crN(i.requestedAv), onChange: (t) => r(crReqPatch(e, `av`, t)) })),
            crKV(`Total AV`, (0, $.jsx)(crIn, { num: !0, value: i.r.totalAv ?? crN(i.totalAv), onChange: (e) => a(`totalAv`, e) })),
            crKV(`Market AV`, crV(crD(i.marketAv))),
          ] }), `cr-w60`),
          crBox(`Document Name / Notes`, (0, $.jsx)(crNote, { k: `docName`, value: i.docName, rows: 4, onChange: (e) => a(`docName`, e) }), `cr-w40`),
        ] }),
        (0, $.jsxs)(`div`, { className: `cr-row`, children: [
          crBox(o, crPin14(e.pin) || s ? (0, $.jsx)(CrPropertyPhoto, { pin: e.pin, lat: s?.lat, lng: s?.lng, alt: `Subject property`, variant: `report`, heading: e.heading || 0, showStreet: !0 }) : (0, $.jsx)(`div`, { className: `cr-photo cr-empty`, children: `No location yet` }), `cr-w45`),
          crBox(`Reviewer Value Conclusions`, (0, $.jsxs)($.Fragment, { children: [
            (0, $.jsxs)(`div`, { className: `cr-grid2`, children: [
              crKV(`NEW AV`, crV(crN(i.newAv))), crKV(`NEW VALUE`, crV(crD(i.newValue, 2))),
              crKV(`NEW LAND AV`, (0, $.jsx)(crIn, { num: !0, value: i.r.newLandAv ?? crN(i.newLandAv), onChange: (e) => a(`newLandAv`, e) })),
              (0, $.jsx)(`div`, { className: `cr-checks`, children: m(`nochange`, `NO CHANGE`) }),
              crKV(`NEW IMP AV`, crV(crD(i.newImpAv, 2))),
              (0, $.jsx)(`div`, {}),
              crKV(`VS REQUEST`, crV((() => { let t = crReqCompare(e, { assessed: i.newAv }); return t ? `${t.delta >= 0 ? `+` : `−`}${crN(Math.abs(t.delta))} (${t.delta >= 0 ? `+` : `−`}${(Math.abs(t.pct) * 100).toFixed(1)}%)` : ``; })())),
              (0, $.jsxs)(`div`, { className: `cr-checks`, children: [m(`settled`, `SETTLED`), m(`change`, `CHANGE`)] }),
            ] }),
            (0, $.jsx)(`div`, { className: `cr-sub`, children: `Reviewer comments` }),
            (0, $.jsx)(crNote, { k: `comments`, value: i.r.comments ?? ``, rows: 7, ph: `Reviewer comments: value conclusion, basis, settlement notes. Long text wraps and continues on the printed page.`, onChange: (e) => a(`comments`, e) }),
          ] }), `cr-w55`),
        ] }),
        (0, $.jsx)(`div`, { className: `cr-sec`, children: `VALUATION HISTORY` }),
        (0, $.jsxs)(`table`, { className: `cr-table`, children: [
          (0, $.jsx)(`thead`, { children: (0, $.jsx)(`tr`, { children: [`pin`, `tax_year`, `mailed_tot`, `certified_tot`, `board_tot`, `certified_bldg`, `certified_land`].map((e) => (0, $.jsx)(`th`, { children: e }, e)) }) }),
          (0, $.jsx)(`tbody`, { children: g.length ? g.map((e) => (0, $.jsx)(`tr`, { children: [o, e.year, crN(e.mailed_tot), crN(e.certified_tot), crN(e.board_tot), crN(e.certified_bldg), crN(e.certified_land)].map((e, t) => (0, $.jsx)(`td`, { children: e }, t)) }, e.year)) : (0, $.jsx)(`tr`, { children: (0, $.jsx)(`td`, { colSpan: 7, children: `Enter a PIN to load the Assessor values.` }) }) }),
        ] }),
        (0, $.jsx)(`div`, { className: `cr-sec`, children: `10 YEAR SALE HISTORY` }),
        (0, $.jsxs)(`table`, { className: `cr-table`, children: [
          (0, $.jsx)(`thead`, { children: (0, $.jsx)(`tr`, { children: [`sale_date`, `sale_price`, `deed_type`, `doc_no`, `seller`, `buyer`].map((e) => (0, $.jsx)(`th`, { children: e }, e)) }) }),
          (0, $.jsx)(`tbody`, { children: _.length ? _.map((e, t) => (0, $.jsx)(`tr`, { children: [e.date, crN(e.price), e.deed, e.doc, e.seller, e.buyer].map((e, t) => (0, $.jsx)(`td`, { children: e }, t)) }, t)) : (0, $.jsx)(`tr`, { children: (0, $.jsx)(`td`, { colSpan: 6, children: e.lookup ? `No recorded sales in the last ten years.` : `Enter a PIN to load the sale history.` }) }) }),
        ] }),
      ] }),
      /* ---------------- page 2 ---------------- */
      (0, $.jsxs)(`div`, { className: `cr-page`, children: [
        (0, $.jsx)(`div`, { className: `cr-band`, children: `SALES COMP APPROACH TO VALUE` }),
        (0, $.jsx)(`div`, { className: `cr-pin`, children: o }),
        (0, $.jsxs)(`div`, { className: `cr-map`, children: [
          l ? (0, $.jsx)(`img`, { src: crExportUrl(l, 960, 520), alt: `Map of the subject and the checked sales` }) : (0, $.jsx)(`div`, { className: `cr-empty`, children: `Map appears once the subject has a location.` }),
          l ? c.map((e, t) => (0, $.jsx)(`span`, {
            className: `cr-mk ${e.role === `subject` ? `is-s` : e.role === `manual` ? `is-m` : ``}`,
            style: { left: `${((e.lng - l.minLng) / (l.maxLng - l.minLng)) * 100}%`, top: `${((l.maxLat - e.lat) / (l.maxLat - l.minLat)) * 100}%` },
            children: e.role === `subject` ? `S` : e.n,
          }, t)) : null,
        ] }),
        (0, $.jsxs)(`div`, { className: `cr-stats`, children: [
          (0, $.jsxs)(`div`, { children: [(0, $.jsx)(`span`, { children: `AVERAGE SALE PRICE PER SQFT` }), (0, $.jsx)(`b`, { children: p == null ? `—` : j(p, 2) })] }),
          (0, $.jsxs)(`div`, { children: [(0, $.jsx)(`span`, { children: `AVERAGE SALE PRICE` }), (0, $.jsx)(`b`, { children: d == null ? `—` : j(d, 2) })] }),
        ] }),
        (0, $.jsx)(`div`, { className: `cr-cards`, children: i.comps.length ? i.comps.slice(0, 6).map((e, t) => (0, $.jsxs)(`div`, { className: `cr-card${e.manual ? ` is-m` : ``}`, children: [
          e.pin || e.lat != null ? (0, $.jsx)(CrPropertyPhoto, { pin: e.pin, lat: e.lat, lng: e.lng, variant: `card`, alt: `` }) : (0, $.jsx)(`div`, { className: `cr-empty`, children: `No photo` }),
          (0, $.jsxs)(`div`, { className: `cr-card-b`, children: [
            (0, $.jsx)(`b`, { children: `${t + 1}. ${e.address || k(e.pin)}` }),
            (0, $.jsx)(`span`, { children: [crPin14(e.pin) ? k(crPin14(e.pin)) : `No PIN`, e.classCode ? `Class ${e.classCode}` : ``].filter(Boolean).join(` · `) }),
            (0, $.jsx)(`span`, { children: [e.saleDate ? new Date(e.saleDate).toLocaleDateString(`en-US`) : ``, e.salePrice ? j(e.salePrice) : ``].filter(Boolean).join(` · `) }),
            (0, $.jsx)(`span`, { children: [e.psf != null ? `${j(e.psf, 2)} / sf` : ``, e.nra ? `${crN(e.nra)} sf` : ``].filter(Boolean).join(` · `) }),
            (0, $.jsx)(`span`, { children: e.distanceMi == null ? `Distance unknown` : `${e.distanceMi.toFixed(2)} mi from subject` }),
            e.manual ? (0, $.jsx)(`span`, { className: `cr-tag`, children: `${CR_MANUAL_LABEL}${e.landSf ? ` · ${crN(e.landSf)} sf land` : ``}` }) : null,
          ] }),
        ] }, t)) : [0, 1, 2].map((e) => (0, $.jsx)(`div`, { className: `cr-card cr-blank` }, e)) }),
        i.comps.length > 6 ? (0, $.jsx)(`p`, { className: `cr-note`, children: `${i.comps.length - 6} more checked sales are listed in the sales approach.` }) : null,
        (0, $.jsx)(`p`, { className: `cr-note`, children: `In cases where the assessment review is weighted more heavily towards the income approach, the sales comps may not be as relevant and the detailed comp area may be left blank.` }),
        crBox(`Sales Comparison Comments`, (0, $.jsx)(crNote, { k: `salesComment`, value: i.r.salesComment ?? ``, rows: 6, ph: `Comp selection, adjustments, analyst-entered sales, weight given to the sales approach.`, onChange: (e) => a(`salesComment`, e) }), `cr-mt`),
      ] }),
      /* ---------------- comparable sales grid ---------------- */
      (0, $.jsx)(CrCompGrid, { sheet: e, model: i }),
      /* ---------------- page 3 ---------------- */
      (0, $.jsxs)(`div`, { className: `cr-page`, children: [
        (0, $.jsx)(`div`, { className: `cr-band`, children: `INCOME APPROACH TO VALUE` }),
        (0, $.jsx)(`div`, { className: `cr-pin`, children: o }),
        (0, $.jsx)(`div`, { className: `cr-band2`, children: `INCOME VALUATION FOR COMMERCIAL BUILDING` }),
        (0, $.jsx)(`div`, { className: `cr-sub`, children: `Building Characteristic` }),
        crKV(`Age`, crV(i.age == null ? `` : String(i.age)), `cr-tight`),
        crKV(`Square Feet`, crV(crN(i.sfIncome)), `cr-tight`),
        crBox(`Tax Load Calculator`, (0, $.jsxs)($.Fragment, { children: [
          crKV(`Tax Code`, (0, $.jsx)(crIn, { value: i.taxCode, onChange: (e) => a(`taxCode`, e) }), `cr-tight`),
          crKV(`Tax Rate Year`, crV(pd(e.eqFactor) === `custom` ? `Custom` : pd(e.eqFactor)), `cr-tight`),
          crKV(`Tax Rate`, crV(M(e.taxRate, 3)), `cr-tight`),
          crKV(`Equalizer`, crV(de(e.eqFactor, 4)), `cr-tight`),
          crKV(`Level of Assessment`, crV(M(e.loa, 0)), `cr-tight`),
          crKV(`Tax Load`, crV(M(t.taxLoad)), `cr-tight`),
          e.taxRateSource ? (0, $.jsx)(`p`, { className: `cr-note`, children: `Tax rate source: ${e.taxRateSource}. Tax load = equalizer × level of assessment × tax rate; loaded cap = Assessor (unloaded) market cap + tax load.` }) : null,
        ] }), `cr-mt`),
        crBox(`Income Valuation Calculator`, (0, $.jsxs)(`table`, { className: `cr-calc`, children: [(0, $.jsxs)(`tbody`, { children: [
          (0, $.jsxs)(`tr`, { children: [(0, $.jsx)(`th`, { children: `PGI` }), (0, $.jsx)(`td`, { children: crN(t.pgi) }), (0, $.jsx)(`td`, { children: i.sfIncome ? j(t.pgi / i.sfIncome, 2) : `` }), (0, $.jsx)(`td`, { children: `/psf` })] }),
          (0, $.jsxs)(`tr`, { children: [(0, $.jsx)(`th`, { children: `Vacancy Rate` }), (0, $.jsx)(`td`, { children: crRound(e.vacancyRate, 4) }), (0, $.jsx)(`td`, { children: crD(t.egi, 2) }), (0, $.jsx)(`td`, { children: `EGI` })] }),
          (0, $.jsxs)(`tr`, { children: [(0, $.jsx)(`th`, { children: `Expense Ratio` }), (0, $.jsx)(`td`, { children: t.egi ? crRound(t.operatingExpenses / t.egi, 4) : `` }), (0, $.jsx)(`td`, { children: i.sfIncome ? j(t.operatingExpenses / i.sfIncome, 2) : `` }), (0, $.jsx)(`td`, { children: `/psf` })] }),
          (0, $.jsxs)(`tr`, { children: [(0, $.jsx)(`th`, { children: `Loaded Cap Rate` }), (0, $.jsx)(`td`, { children: crRound(t.loadedCap, 4) }), (0, $.jsx)(`td`, { children: crD(t.noi, 2) }), (0, $.jsx)(`td`, { children: `NOI` })] }),
        ] })] }), `cr-mt`),
        (0, $.jsxs)(`div`, { className: `cr-green`, children: [crKV(`Market Value:`, crV(crD(i.mv, 2))), crKV(`Assessed Value:`, crV(crD(i.av, 2)))] }),
        (0, $.jsx)(`p`, { className: `cr-note`, children: `Market value is NOI ÷ loaded cap before additional land and rounding. The income worksheet concludes ${crD(t.concluded, 0)} (new AV ${crD(t.assessed, 0)}).` }),
        crBox(`Additional Vacancy (if applicable)`, (0, $.jsxs)($.Fragment, { children: [
          (0, $.jsxs)(`div`, { className: `cr-inline`, children: [crKV(`Land A/V`, crV(crN(i.landAv)), `cr-tight`), crKV(`Market Land`, crV(crN(i.marketLand)), `cr-tight`)] }),
          crKV(`Total Occupancy Rate`, (0, $.jsx)(crIn, { num: !0, value: i.r.occRate ?? ``, onChange: (e) => a(`occRate`, e) }), `cr-tight`),
          crKV(`Add'l Occ Factor Applied`, (0, $.jsx)(crIn, { num: !0, value: i.r.occFactor ?? ``, onChange: (e) => a(`occFactor`, e) }), `cr-tight`),
          crKV(`PRC Column 4 Value`, (0, $.jsx)(crIn, { num: !0, value: i.r.prcCol4 ?? ``, onChange: (e) => a(`prcCol4`, e) }), `cr-tight`),
          (0, $.jsxs)(`div`, { className: `cr-green`, children: [
            crKV(`1 Year A/V:`, crV(`${crD(i.oneAv, 2)}${i.oneAv != null && i.sfIncome ? `   psf ${j(i.oneAv / i.sfIncome, 2)}` : ``}`)),
            crKV(`1 Year MV:`, crV(`${crD(i.oneMv, 2)}${i.oneMv != null && i.sfIncome ? `   psf ${j(i.oneMv / i.sfIncome, 2)}` : ``}`)),
          ] }),
          (0, $.jsx)(`p`, { className: `cr-note`, children: `1 Year MV = Market Land + PRC Column 4 × Add'l Occ Factor. 1 Year A/V = 1 Year MV × level of assessment.` }),
        ] }), `cr-mt`),
        crBox(`Income Approach Comments`, (0, $.jsx)(crNote, { k: `incomeComment`, value: i.r.incomeComment ?? ``, rows: 6, ph: `Rent, vacancy, expense and cap rate support; tax load notes.`, onChange: (e) => a(`incomeComment`, e) }), `cr-mt`),
      ] }),
      /* ---------------- page 4 ---------------- */
      (0, $.jsxs)(`div`, { className: `cr-page${crNotesPages(e) ? `` : ` cr-last`}`, children: [
        (0, $.jsx)(`div`, { className: `cr-band`, children: `Equitability Based Assessment Review` }),
        (0, $.jsx)(`p`, { className: `cr-intro`, children: `This review process takes into account aggregate assessment data used by the county assessor to value properties in the same use class and relates that data to sales within the search parameters which are analyzed geospatially.` }),
        (0, $.jsxs)(`div`, { className: `cr-row`, children: [
          crBox(`Search parameters`, (0, $.jsxs)($.Fragment, { children: [
            crKV(`Assessor year`, crV(v?.year ?? i.s?.year ?? ``), `cr-tight`),
            crKV(`Location`, crV(v ? (v.scope === `township` ? v.township : `Countywide (fewer than 5 in ${v.township})`) : ``), `cr-tight`),
            crKV(`Size tier`, crV(v ? `${v.tier} · ${v.tierLabel}` : ``), `cr-tight`),
            crKV(`Major class`, crV(v?.majorClass ?? ``), `cr-tight`),
            crKV(`Assessor records`, crV(v ? String(v.count) : ``), `cr-tight`),
          ] }), `cr-w45`),
          crBox(`Assessor averages`, (0, $.jsxs)($.Fragment, { children: [
            crKV(`PGI per sqft`, crV(v?.avgPgiSf != null ? j(v.avgPgiSf, 2) : ``), `cr-tight`),
            crKV(`Rent per sqft`, crV(v?.avgRentSf != null ? j(v.avgRentSf, 2) : ``), `cr-tight`),
            crKV(`Cap rate`, crV(v?.avgCap != null ? M(v.avgCap) : ``), `cr-tight`),
            crKV(`Vacancy`, crV(v?.avgVacancy != null ? M(v.avgVacancy) : ``), `cr-tight`),
            crKV(`Expenses`, crV(v?.avgExp != null ? M(v.avgExp) : ``), `cr-tight`),
            crKV(`Value per sqft`, crV(v?.avgValueSf != null ? j(v.avgValueSf, 2) : ``), `cr-tight`),
          ] }), `cr-w55`),
        ] }),
        y ? (0, $.jsxs)(`div`, { className: `cr-hist`, children: [y, (0, $.jsx)(`span`, { className: `cr-note`, children: `Assessor final market value per sqft for the search group. The line marks the value per sqft used below.` })] }) : null,
        (0, $.jsxs)(`div`, { className: `cr-row`, children: [
          crBox(``, (0, $.jsxs)($.Fragment, { children: [
            crKV(`keypin`, crV(crPin14(i.s?.keypin) || o), `cr-tight`),
            (0, $.jsxs)(`div`, { className: `cr-inline`, children: [
              crKV(`investment rating`, crV(i.s?.rating ?? ``), `cr-tight`),
              crKV(`location rating`, (0, $.jsx)(crIn, { value: i.r.locRating ?? ``, ph: v?.township || ``, onChange: (e) => a(`locRating`, e) }), `cr-tight`),
              crKV(`size tier`, crV(v?.tier ?? ``), `cr-tight`),
            ] }),
            (0, $.jsxs)(`div`, { className: `cr-inline`, children: [crKV(`age`, crV(i.age == null ? `` : String(i.age)), `cr-tight`), crKV(`SQFT`, crV(crN(i.sqft)), `cr-tight`)] }),
            crKV(`RENT PER SQFT`, (0, $.jsx)(crIn, { num: !0, value: i.r.rentSf ?? (i.rentSf == null ? `` : i.rentSf.toFixed(2)), onChange: (e) => a(`rentSf`, e) }), `cr-tight`),
            crKV(`WORKBOOK PGI`, crV(crD(i.workbookPgi, 2)), `cr-tight`),
          ] }), `cr-w55`),
          crBox(``, (0, $.jsxs)($.Fragment, { children: [
            crKV(`AVERAGE VALUE PER SQFT`, (0, $.jsx)(crIn, { num: !0, value: i.r.valueSf ?? (i.valueSf == null ? `` : i.valueSf.toFixed(2)), onChange: (e) => a(`valueSf`, e) }), `cr-tight`),
            crKV(`MARKET GROSS WORKBOOK`, (0, $.jsx)(`b`, { className: `cr-big`, children: crD(i.grossWorkbook, 2) || `—` }), `cr-tight`),
            (0, $.jsx)(`div`, { className: `cr-sub`, children: `ADDITIONAL PINS` }),
            (0, $.jsx)(`div`, { className: `cr-val cr-pins`, children: (i.s?.pins || k(o)).split(/[,;]\s*/).filter(Boolean).join(`\n`) }),
          ] }), `cr-w45`),
        ] }),
        (0, $.jsx)(`p`, { className: `cr-intro`, children: `PGI and other income approach factors in this report are based on the average PGI, CAP RATE, VACANCY and EXPENSES used by the assessor within the search parameters. The averages above are filtered by size tier, investment rating and location; this data is then compared to sales data to compute the resulting GROSS WORKBOOK VALUE by a price per sqft to establish a baseline estimate. This baseline estimate does not consider vacancy, sales or prior settlements of the subject property but can be a valid indicator of equitability and provide insight into how other properties were treated during assessment.` }),
        crBox(`Equitability Comments`, (0, $.jsx)(crNote, { k: `equityComment`, value: i.r.equityComment ?? ``, rows: 5, ph: `How the subject compares with the search group.`, onChange: (e) => a(`equityComment`, e) }), `cr-mt`),
        (0, $.jsx)(`p`, { className: `cr-foot`, children: `Prepared ${new Date().toLocaleDateString(`en-US`)}${e.analyst ? ` by ${e.analyst}` : ``}${e.caseNumber ? ` · Complaint # ${e.caseNumber}` : ``} · PIN ${o} · Working paper.` }),
      ] }),
      ...Array.from({ length: crNotesPages(e) }, (t, n) => (0, $.jsx)(CrNotesPage, { sheet: e, n: n + 1, of: crNotesPages(e), last: n === crNotesPages(e) - 1 }, `np${n}`)),
    ],
  });
}
function crHist(e, t) {
  let n = [...e].sort((e, t) => e - t),
    r = n[Math.floor(n.length * 0.98)] || n[n.length - 1],
    i = 24, a = new Array(i).fill(0);
  for (let e of n) a[Math.min(i - 1, Math.floor((Math.min(e, r) / r) * i))]++;
  let o = Math.max(...a, 1), s = 600, c = 110, l = s / i;
  return (0, $.jsxs)(`svg`, { viewBox: `0 0 ${s} ${c + 18}`, className: `cr-svg`, children: [
    ...a.map((e, t) => (0, $.jsx)(`rect`, { x: t * l + 1, y: c - (e / o) * c, width: l - 2, height: (e / o) * c, fill: `#7aa2c8` }, t)),
    t != null && r ? (0, $.jsx)(`line`, { x1: Math.min(1, t / r) * s, x2: Math.min(1, t / r) * s, y1: 0, y2: c, stroke: `#c0392b`, strokeWidth: 3 }) : null,
    (0, $.jsx)(`text`, { x: 0, y: c + 15, fontSize: 12, fill: `#333`, children: `$0` }),
    (0, $.jsx)(`text`, { x: s, y: c + 15, fontSize: 12, fill: `#333`, textAnchor: `end`, children: `${j(r)} / sf` }),
  ] });
}
function crPrintReport() {
  crWarnMissing();
  document.body.classList.add(`cr-print-report`);
  let e = () => (document.body.classList.remove(`cr-print-report`), window.removeEventListener(`afterprint`, e));
  window.addEventListener(`afterprint`, e);
  crTitledPrint(() => window.print());
  setTimeout(e, 1500);
}
/* ---------- Comparable sales grid (modeled on the PTAB-6C/6I comparable-sales section) ---------- */
var crCompExtra = new Map(),
  crCompExtraP = new Set();
/* Land sf and year built for comp PINs from the Assessor commercial valuation data (csik-bsws), latest year first. */
function crCompEnrich(e, t) {
  let n = [...new Set(e.map(crPin14).filter((e) => e && !crCompExtra.has(e) && !crCompExtraP.has(e)))];
  if (!n.length) return;
  n.forEach((e) => crCompExtraP.add(e));
  (async () => {
    for (let e = 0; e < n.length; e += 60) {
      let r = n.slice(e, e + 60);
      try {
        let e = await fetch(`https://datacatalog.cookcountyil.gov/resource/csik-bsws.json?${new URLSearchParams({ $select: `keypin,landsf,yearbuilt,bldgsf,year`, $where: `keypin in (${r.map((e) => `'${k(e)}'`).join(`,`)})`, $order: `year DESC`, $limit: `2000` })}`),
          t = e.ok ? await e.json() : [];
        for (let e of Array.isArray(t) ? t : []) {
          let t = crPin14(e.keypin);
          t && !crCompExtra.has(t) && crCompExtra.set(t, { landSf: Fl(e.landsf) || null, yearBuilt: Fl(e.yearbuilt) || null, bldgSf: Fl(e.bldgsf) || null });
        }
      } catch {}
      r.forEach((e) => (crCompExtra.has(e) || crCompExtra.set(e, {}), crCompExtraP.delete(e)));
    }
    t();
  })();
}
function crClsList(e) {
  let t = [...new Set(String(e || ``).split(/[,;]/).map((e) => e.trim()).filter(Boolean))];
  return t.length ? t.join(`, `) : `—`;
}
function crYb(e, t) {
  let n = Number(e) || 0,
    r = Number(t) || new Date().getFullYear();
  return n > 1800 ? `${n} / ${Math.max(0, r - n)}` : `—`;
}
function CrCompGrid({ sheet: e, model: t }) {
  let [, n] = (0, C.useState)(0),
    r = t.comps,
    i = r.map((e) => e.pin).concat([e.pin]).filter(Boolean).join(`|`);
  (0, C.useEffect)(() => {
    crCompEnrich(i.split(`|`), () => n((e) => e + 1));
  }, [i]);
  let a = Number(e.taxYear) || new Date().getFullYear(),
    o = (e) => crCompExtra.get(crPin14(e)) ?? {},
    s = t.s,
    c = (t.a.sales ?? []).find((e) => e.price > 0),
    l = t.sqft || s?.bldgsf || e.nra || 0,
    u = s?.landsf || o(e.pin).landSf,
    d = (e) => (e ? new Date(e).toLocaleDateString(`en-US`) : `—`),
    f = (e) => (e > 0 ? j(e) : `—`),
    p = (e) => (e > 0 ? crN(e) : `—`),
    m = (e) => (e != null && Number.isFinite(e) ? j(e, 2) : `—`),
    h = r.map((e, t) => {
      let n = o(e.pin);
      return {
        n: t + 1, src: e.manual ? `Analyst-entered` : typeof crIsAutoPick == `function` && crIsAutoPick(e) ? `Auto-selected` : `Auto`, pin: crPin14(e.pin) ? k(crPin14(e.pin)) : `—`, address: String(e.address || `—`).replace(/\s*\(Analyst-entered\)\s*$/i, ``),
        mi: e.distanceMi != null ? e.distanceMi.toFixed(2) : `—`, date: d(e.saleDate), price: e.salePrice, bldg: e.nra || n.bldgSf || 0,
        land: e.landSf || n.landSf || 0, psf: e.psf ?? (e.salePrice > 0 && (e.nra || n.bldgSf) ? e.salePrice / (e.nra || n.bldgSf) : null),
        cls: crClsList(e.classCode), yb: crYb(e.yearBuilt || n.yearBuilt, a), m: !!e.manual, dmi: e.distanceMi,
      };
    }),
    g = (e) => (e.length ? e.reduce((e, t) => e + t, 0) / e.length : null),
    _ = {
      mi: g(h.map((e) => e.dmi).filter((e) => e != null)),
      price: g(h.map((e) => e.price).filter((e) => e > 0)),
      bldg: g(h.map((e) => e.bldg).filter((e) => e > 0)),
      land: g(h.map((e) => e.land).filter((e) => e > 0)),
      psf: g(h.map((e) => e.psf).filter((e) => e != null && Number.isFinite(e))),
    },
    v = [`#`, `Source`, `PIN`, `Address`, `Prox. (mi)`, `Sale date`, `Sale price`, `Bldg sf`, `Land sf`, `$ / sf`, `Class`, `Yr built / age`];
  return (0, $.jsxs)(`div`, { className: `cr-page cr-grid-page`, "data-cr": `comp-grid`, children: [
    (0, $.jsx)(`div`, { className: `cr-band`, children: `COMPARABLE SALES GRID` }),
    (0, $.jsx)(`div`, { className: `cr-pin`, children: A(e.pin) }),
    (0, $.jsx)(`p`, { className: `cr-note`, children: `Subject first, then each checked comparable sale in the order used for the PTAB notes on appeal (PTAB-6C / 6I comparable-sales section). Proximity is straight-line miles from the subject. Land sf and year built come from the Assessor commercial valuation data when available.` }),
    (0, $.jsx)(`div`, { className: `cr-grid-wrap`, children: (0, $.jsxs)(`table`, { className: `cr-grid`, children: [
      (0, $.jsx)(`thead`, { children: (0, $.jsx)(`tr`, { children: v.map((e) => (0, $.jsx)(`th`, { children: e }, e)) }) }),
      (0, $.jsxs)(`tbody`, { children: [
        (0, $.jsx)(`tr`, { className: `is-subj`, children: [`S`, `Subject`, k(A(e.pin)) || `—`, e.address || s?.address || `—`, `—`, c ? d(c.date) : `—`, f(c?.price), p(l), p(u), m(c?.price > 0 && l ? c.price / l : null), crClsList(t.classCode || s?.classCode), crYb(s?.yearbuilt || o(e.pin).yearBuilt, a)].map((e, t) => (0, $.jsx)(`td`, { children: e }, t)) }),
        ...h.map((e) => (0, $.jsx)(`tr`, { className: e.m ? `is-m` : ``, children: [e.n, e.src, e.pin, e.address, e.mi, e.date, f(e.price), p(e.bldg), p(e.land), m(e.psf), e.cls, e.yb].map((e, t) => (0, $.jsx)(`td`, { children: e }, t)) }, e.n)),
        h.length ? null : (0, $.jsx)(`tr`, { children: (0, $.jsx)(`td`, { colSpan: v.length, children: `No comparable sales are checked. Check Use comp in the sales approach to list them here.` }) }),
      ] }),
      h.length
        ? (0, $.jsx)(`tfoot`, { children: (0, $.jsx)(`tr`, { children: [`Avg`, `${h.length} comp${h.length === 1 ? `` : `s`}`, ``, ``, _.mi == null ? `—` : _.mi.toFixed(2), ``, f(_.price), p(_.bldg), p(_.land), m(_.psf), ``, ``].map((e, t) => (0, $.jsx)(`td`, { children: e }, t)) }) })
        : null,
    ] }) }),
    (0, $.jsxs)(`div`, { className: `cr-stats`, children: [
      (0, $.jsxs)(`div`, { children: [(0, $.jsx)(`span`, { children: `AVERAGE SALE PRICE PER SQFT` }), (0, $.jsx)(`b`, { children: m(_.psf) })] }),
      (0, $.jsxs)(`div`, { children: [(0, $.jsx)(`span`, { children: `AVERAGE SALE PRICE` }), (0, $.jsx)(`b`, { children: _.price == null ? `—` : j(_.price, 2) })] }),
    ] }),
    (0, $.jsx)(`p`, { className: `cr-note`, children: `Source: Auto = sale from the Cook County sales and Assessor data, within ${CR_SALE_YEARS} years and ${CR_RADIUS_MI} miles; Analyst-entered = added by the analyst (exempt from that screen). Only checked comps are listed. ${crAutoPickNote()}` }),
  ] });
}
/* ---------- Analyst-entered (manual) comparable sales ---------- */
var CR_MANUAL_LABEL = `Analyst-entered`;
function crMcId() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
/* Saved manual comp -> row shaped like a sales-layer comp (Gu, Lu, Mu, Ru all read it). */
function crManualRow(e) {
  let t = crPin14(e.pin),
    n = e.saleDate ? Date.parse(`${e.saleDate}T12:00:00`) : NaN;
  return {
    manual: !0, id: e.id, used: e.used !== !1,
    pin: t || ``, keypin: t || ``, pins: t ? [t] : [],
    address: (e.address || ``).toUpperCase(), township: e.township || ``,
    saleDate: Number.isFinite(n) ? n : null, salePrice: crNum(e.salePrice) || 0,
    nra: crNum(e.bldgSf) || 0, landSf: crNum(e.landSf) || 0,
    classCode: e.classCode || ``, use: CR_MANUAL_LABEL,
    lat: e.lat === `` || e.lat == null ? null : Number(e.lat),
    lng: e.lng === `` || e.lng == null ? null : Number(e.lng),
    geoSource: e.geoSource || ``,
  };
}
/* True when a manual comp falls outside the automatic 3-year / 15-mile screen. */
function crManualOutside(e, t) {
  let n = [],
    r = new Date();
  r.setFullYear(r.getFullYear() - 3);
  e.saleDate != null && e.saleDate < r.getTime() && n.push(`sold more than 2 years ago`);
  t != null && t > CR_RADIUS_MI && n.push(`${t.toFixed(2)} mi away (over ${CR_RADIUS_MI})`);
  e.lat == null && n.push(`no location, so no distance`);
  return n;
}
async function crAddressPoint(e) {
  let t = String(e || ``).toUpperCase().replace(/[.,#]/g, ` `).replace(/\s+/g, ` `).trim(),
    n = t.match(/^(\d+)\s+(.+)$/);
  if (!n) return null;
  let r = n[2].split(` `).filter((e) => !/^(CHICAGO|IL|ILLINOIS|\d{5})$/.test(e)).slice(0, 3).join(` `);
  try {
    let e = await crSoda(`78yw-iddh`, {
      $select: `cmpaddabrv,post_comm,lat,long,pin`,
      $where: `add_number='${n[1]}' AND upper(cmpaddabrv) like '${`${n[1]} ${r}`.replace(/'/g, `''`)}%'`,
      $limit: `5`,
    });
    let t = e?.find((e) => Number(e.lat));
    return t ? { lat: Number(t.lat), lng: Number(t.long), address: `${t.cmpaddabrv} ${t.post_comm || ``}`.trim(), pin: crPin14(t.pin), source: `Cook County Address Points` } : null;
  } catch {
    return null;
  }
}
async function crPinAddress(e) {
  try {
    let t = await crSoda(`78yw-iddh`, { $select: `cmpaddabrv,post_comm,lat,long`, $where: `pin='${e}'`, $limit: `1` });
    return t?.[0] ? { address: `${t[0].cmpaddabrv} ${t[0].post_comm || ``}`.trim(), lat: Number(t[0].lat) || null, lng: Number(t[0].long) || null } : null;
  } catch {
    return null;
  }
}
/* Locate a manual comp: PIN -> Parcel Universe; else address -> Address Points -> Esri World Geocoder. */
async function crLocateManual(e) {
  let t = crPin14(e.pin);
  if (t) {
    let [n, r] = await Promise.all([crLocate([t]).then((e) => e.get(t)).catch(() => null), crPinAddress(t)]);
    if (n || r?.lat)
      return {
        lat: n?.lat ?? r.lat, lng: n?.lng ?? r.lng,
        address: e.address || r?.address || ``, classCode: e.classCode || n?.classCode || ``,
        township: n?.township || ``, geoSource: n ? `PIN (Parcel Universe)` : `PIN (Address Points)`,
      };
  }
  if ((e.address || ``).trim().length > 3) {
    let t = await crAddressPoint(e.address);
    if (t) return { lat: t.lat, lng: t.lng, geoSource: t.source, pin: e.pin || t.pin || `` };
    let n = await Cu(e.address, ``).catch(() => null);
    if (n) return { lat: n.lat, lng: n.lng, geoSource: `Esri World Geocoder` };
  }
  return null;
}
var CR_MC_EMPTY = { pin: ``, address: ``, saleDate: ``, salePrice: ``, bldgSf: ``, landSf: ``, classCode: ``, lat: ``, lng: `` };
function CrManualCompForm({ subject: e, comps: t, onChange: n, editId: r, setEditId: i }) {
  let a = t.find((e) => e.id === r) ?? null,
    [o, s] = (0, C.useState)(CR_MC_EMPTY),
    [c, l] = (0, C.useState)(``),
    [u, d] = (0, C.useState)(!1),
    [f, p] = (0, C.useState)(!1);
  (0, C.useEffect)(() => {
    a ? (s({ ...CR_MC_EMPTY, ...a, lat: a.lat ?? ``, lng: a.lng ?? `` }), p(!0), l(``)) : s(CR_MC_EMPTY);
  }, [r]);
  let m = (e, t) => s((n) => ({ ...n, [e]: t, ...(e === `lat` || e === `lng` ? { geoSource: `Entered lat/lon` } : {}) })),
    h = crManualRow({ ...o, id: `preview` }),
    g = h.salePrice > 0 && h.nra > 0 ? h.salePrice / h.nra : null,
    _ = e && h.lat != null && Number.isFinite(h.lat) ? Ku(e, h) : null,
    v = h.saleDate != null || h.lat != null ? crManualOutside(h, _) : [];
  async function y() {
    d(!0), l(`Locating…`);
    let e = await crLocateManual(o);
    d(!1);
    if (!e) return l(`Could not place it. Check the PIN or address, or type the lat/lon.`), null;
    let t = { ...o, ...Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== `` && t != null)) };
    return s(t), l(`Located by ${e.geoSource}.`), t;
  }
  async function b() {
    let e = o;
    if (!crNum(e.salePrice) || !e.saleDate) return l(`Sale date and sale price are required.`);
    if (!crPin14(e.pin) && !(e.address || ``).trim() && (e.lat === `` || e.lng === ``)) return l(`Enter a PIN, an address, or lat/lon.`);
    if (e.pin && !crPin14(e.pin)) return l(`PIN must be 14 digits (or leave it blank).`);
    if (e.lat === `` || e.lng === `` || e.lat == null) {
      let t = await y();
      t && (e = t);
    }
    let r = { ...e, pin: crPin14(e.pin) || ``, lat: e.lat === `` ? null : Number(e.lat), lng: e.lng === `` ? null : Number(e.lng) };
    a
      ? n(t.map((e) => (e.id === a.id ? { ...a, ...r } : e)))
      : n([...t, { ...r, id: crMcId(), used: !0, addedAt: new Date().toISOString() }]);
    l(a ? `Comp updated.` : `Comp added and checked.`), s(CR_MC_EMPTY), i(null);
  }
  let x = (e, t, n = {}) =>
    (0, $.jsxs)(`label`, {
      className: `flex min-w-0 flex-col gap-1 ${n.w || `w-36`}`,
      children: [
        (0, $.jsx)(`span`, { className: `lbl`, children: e }),
        (0, $.jsx)(`input`, { className: `field${n.num ? ` tabular-nums` : ``}`, type: n.type || `text`, value: o[t] ?? ``, placeholder: n.ph, inputMode: n.im, "data-mc": t, onChange: (e) => m(t, e.target.value) }),
      ],
    });
  return (0, $.jsxs)(`div`, {
    className: `mt-4 rounded-sm border border-dashed border-border p-3`, "data-cr": `manual-comp`,
    children: [
      (0, $.jsxs)(`div`, { className: `flex flex-wrap items-center justify-between gap-2`, children: [
        (0, $.jsxs)(`div`, { children: [
          (0, $.jsx)(`p`, { className: `text-sm font-medium`, children: a ? `Edit analyst-entered comp` : `Add comp` }),
          (0, $.jsx)(`p`, { className: `text-xs text-subtle`, children: `Your own sale. It joins the list as ${CR_MANUAL_LABEL}, is checked for the sales approach, and is kept with the case. It is not held to the 3-year / 15-mile screen.` }),
        ] }),
        f ? null : (0, $.jsx)(`button`, { type: `button`, className: `btn`, "data-cr": `open-manual`, onClick: () => p(!0), children: `Add comp` }),
      ] }),
      f
        ? (0, $.jsxs)(`div`, { className: `mt-3 flex flex-col gap-3`, children: [
            (0, $.jsxs)(`div`, { className: `flex flex-wrap gap-3`, children: [
              x(`PIN (optional)`, `pin`, { ph: `14 digits`, im: `numeric`, w: `w-44` }),
              x(`Address`, `address`, { ph: `1234 W EXAMPLE ST CHICAGO`, w: `min-w-64 flex-1` }),
              x(`Sale date`, `saleDate`, { type: `date`, w: `w-40` }),
              x(`Sale price`, `salePrice`, { num: !0, im: `decimal`, ph: `$` }),
            ] }),
            (0, $.jsxs)(`div`, { className: `flex flex-wrap gap-3`, children: [
              x(`Building sf`, `bldgSf`, { num: !0, im: `decimal` }),
              x(`Land sf (optional)`, `landSf`, { num: !0, im: `decimal` }),
              x(`Class`, `classCode`, { ph: `5-93`, w: `w-28` }),
              x(`Latitude`, `lat`, { num: !0, im: `decimal`, w: `w-32` }),
              x(`Longitude`, `lng`, { num: !0, im: `decimal`, w: `w-32` }),
            ] }),
            (0, $.jsxs)(`p`, { className: `text-xs text-muted tabular-nums`, "data-cr": `manual-preview`, children: [
              g != null ? `${j(g, 2)} / sf` : `$/sf after price and building sf`,
              ` · `,
              _ != null ? `${_.toFixed(2)} mi from the subject` : `distance after a location`,
              o.geoSource ? ` · location: ${o.geoSource}` : ``,
            ] }),
            v.length ? (0, $.jsx)(`p`, { className: `text-xs`, style: { color: `#b45309` }, children: `Outside the automatic screen: ${v.join(`; `)}. It stays because you entered it.` }) : null,
            (0, $.jsxs)(`div`, { className: `flex flex-wrap items-center gap-2`, children: [
              (0, $.jsx)(`button`, { type: `button`, className: `btn`, disabled: u, onClick: y, children: `Locate from PIN / address` }),
              (0, $.jsx)(`button`, { type: `button`, className: `btn btn-primary`, disabled: u, "data-cr": `save-manual`, onClick: b, children: a ? `Save changes` : `Add comp` }),
              (0, $.jsx)(`button`, { type: `button`, className: `btn`, onClick: () => (s(CR_MC_EMPTY), i(null), p(!1), l(``)), children: `Cancel` }),
              c ? (0, $.jsx)(`span`, { className: `text-xs text-muted`, "data-cr": `manual-status`, children: c }) : null,
            ] }),
          ] })
        : c ? (0, $.jsx)(`p`, { className: `mt-2 text-xs text-muted`, children: c }) : null,
    ],
  });
}
/* ---------- Report comment boxes (screen textarea, print text that wraps and flows) ---------- */
function crNote({ value: e, onChange: t, ph: n, rows: r = 6, k: i }) {
  let a = e == null ? `` : String(e),
    o = Math.max(r, a.split(`\n`).reduce((e, t) => e + 1 + Math.floor(t.length / 95), 0) + 1);
  return (0, $.jsxs)(`div`, { className: `cr-note-wrap`, children: [
    (0, $.jsx)(`textarea`, { className: `cr-in cr-area cr-note-in`, rows: o, value: a, placeholder: n, "data-note": i, onChange: (e) => t(e.target.value) }),
    (0, $.jsx)(`div`, { className: `cr-note-print${a.trim() ? `` : ` is-empty`}`, children: a }),
  ] });
}

/* ---------- Additional Notes pages ---------- */
function crNotesPages(e) {
  let t = Number(e.report?.notesPages);
  return Number.isFinite(t) && e.report?.notesPages !== `` && e.report?.notesPages != null ? Math.max(0, Math.min(5, Math.round(t))) : 2;
}
function CrNotesPage({ sheet: e, n: t, of: r, last: i }) {
  return (0, $.jsxs)(`div`, { className: `cr-page cr-notes-page${i ? ` cr-last` : ``}`, children: [
    (0, $.jsxs)(`div`, { className: `cr-head`, children: [
      (0, $.jsxs)(`div`, { className: `cr-head-l`, children: [
        (0, $.jsx)(`div`, { className: `cr-h1`, children: `Cap & Review` }),
        (0, $.jsx)(`div`, { className: `cr-h2`, children: `2026 COMMERCIAL REVIEWS` }),
        (0, $.jsx)(`div`, { className: `cr-h3`, children: `Tax year ${e.taxYear || ``}` }),
      ] }),
      (0, $.jsxs)(`div`, { className: `cr-head-r`, children: [
        crKV(`Complaint #`, crV(e.caseNumber || (e.sample ? CR_SAMPLE_LABEL : ``))),
        crKV(`PIN`, crV(k(A(e.pin)))),
        crKV(`Analyst`, crV(e.analyst || ``)),
      ] }),
    ] }),
    (0, $.jsx)(`div`, { className: `cr-band`, children: `ADDITIONAL NOTES` }),
    (0, $.jsx)(`div`, { className: `cr-lines`, children: Array.from({ length: 23 }, (e, t) => (0, $.jsx)(`div`, { className: `cr-line` }, t)) }),
    (0, $.jsx)(`p`, { className: `cr-foot`, children: `Additional notes · page ${t} of ${r}${e.caseNumber ? ` · Complaint # ${e.caseNumber}` : ``} · PIN ${k(A(e.pin))}` }),
  ] });
}
/* ---------- PTAB PDF (State Form): original PTAB-6C / 6I notes-on-appeal fill with case data ---------- */
function crActiveSheet() {
  return crStateRef?.sheets.find((e) => e.id === crStateRef.activeId) ?? null;
}
function crBorExtra(e, t = crActiveSheet()) {
  if (!t) return e;
  let n = t.subject ?? {},
    r = t.lookup?.bor?.[0],
    i = [n.BOR_PTAB_Appellant_FN, n.BOR_PTAB_Appellant_LN].filter(Boolean).join(` `) || r?.appellant || ``;
  return {
    ...e,
    docket: n.BOR_PTAB_Docket_ID || n.BOR_PTAB_IL_PTAB_Docket_ID || t.caseNumber || ``,
    appellant: i,
    caseNumber: t.caseNumber || ``,
    analyst: t.analyst || ``,
    comments: CR_COMMENTS.filter(([e]) => e !== `docName`).map(([e, n]) => [n, String(t.report?.[e] ?? ``).trim()]).filter(([, e]) => e),
    manualComps: (t.manualComps ?? []).filter((e) => e.used !== !1),
    requested: t.requestedAv > 0 ? { mv: t.requestedMv, av: t.requestedAv, as: t.requestedEnteredAs, loa: t.requestedLoa ?? crCaseLoa(t), cmp: crReqCompare(t, ue(t)) } : null,
  };
}
/* Fallback when no sale is checked: the form still fills the subject block. */
function crBorFromSheet(e) {
  let t = e.lookup ?? {},
    n = t.parcel ?? {},
    r = e.subject ?? {};
  return {
    kind: sl(e.classId, n.classCode || t.income?.classCode || ``, t.income?.use || ``),
    pin: A(e.pin), address: e.address, township: e.township,
    classLine: [n.classCode || r.av_cur_class, t.income?.use].filter(Boolean).join(` · `),
    mailedAv: e.currentAv, afterAv: e.currentAv, proof1: `Comparable sales: none checked.`, proof2: ``,
    subject: { pin: A(e.pin), address: e.address, township: e.township, classCode: n.classCode || ``, nra: e.nra, totalAv: e.currentAv, lat: e.lat, lng: e.lng },
    comps: [],
  };
}
var CR_EMPTY_SALES = { concluded: null, indicated: null, avgPrice: null, avgPsf: null, avgCap: null, avgVacancy: null, count: 0, area: 0 };
async function crNotesOnAppeal(e, t, n, w) {
  crWarnMissing(e);
  let r = n ? n.bor : crBorFromSheet(e),
    i = [e.pin, ...(r.comps || []).map((e) => e.pin), ...(n?.picked || []).map((e) => e.pin)];
  await crCompEnrichWait(i);
  return ul(crBorExtra(r, e), { ...sd(e, t), caseNumber: e.caseNumber || A(e.pin) }, n ? Uu(n) : CR_EMPTY_SALES, w);
}
/* Extra pages on the IL form: comments, analyst-entered comps, and blank Additional Notes pages. */
async function crNotesPdfPages(e, t) {
  let n = (t.comments ?? []).length,
    r = (t.manualComps ?? []).length,
    q = t.requested,
    i = await e.embedFont(_c.Helvetica),
    a = await e.embedFont(_c.HelveticaBold),
    o = null,
    s = 0,
    c = () => {
      o = e.addPage([612, 792]);
      o.drawText(`CAP & REVIEW`, { x: 36, y: 758, size: 8, font: i, color: Uc });
      o.drawText(`Notes on appeal`, { x: 36, y: 740, size: 16, font: a, color: Hc });
      o.drawText(
        rl([t.caseNumber ? `Complaint # ${t.caseNumber}` : t.sample && CR_SAMPLE_LABEL, `PIN ${k(t.pin)}`, t.analyst && `Analyst ${t.analyst}`, t.address].filter(Boolean).join(`  ·  `), 100),
        { x: 36, y: 722, size: 9, font: i, color: Hc },
      );
      s = 696;
    },
    l = (e, t = i, n = 9, r = 540) => {
      let a = [];
      for (let i of String(e).split(`\n`)) {
        let e = ``;
        for (let o of i.split(/\s+/)) {
          let i = e ? `${e} ${o}` : o;
          t.widthOfTextAtSize(i, n) > r && e ? (a.push(e), (e = o)) : (e = i);
        }
        a.push(e);
      }
      return a;
    },
    u = (e, t = i, n = 9, r = 12) => {
      for (let i of l(e, t, n)) (s < 48 && c(), o.drawText(i, { x: 36, y: s, size: n, font: t, color: Hc }), (s -= r));
    };
  if (n || r || q) {
    c();
    q &&
      (u(`Appellant's requested value`, a, 11, 16),
      u(`Requested market value ${j(q.mv)} · requested assessed value ${j(q.av)} at ${M(q.loa, 0)} (entered as ${q.as === `mv` ? `market value` : `assessed value`}).` +
        (q.cmp ? ` Conclusion ${j(q.cmp.concluded)} AV, ${j(Math.abs(q.cmp.delta))} ${q.cmp.delta >= 0 ? `above` : `below`} the request (${q.cmp.delta >= 0 ? `+` : `−`}${(Math.abs(q.cmp.pct) * 100).toFixed(1)}%).` : ``)),
      (s -= 10));
    for (let [e, n] of t.comments) (s < 80 && c(), u(e, a, 11, 16), u(n), (s -= 10));
    if (r) {
      (s < 100 && c(), u(`Analyst-entered comparable sales`, a, 11, 16));
      t.manualComps.forEach((e, t) => {
        let n = crManualRow(e);
        u(
          `${t + 1}. ${n.address || `No address`}${n.pin ? ` · PIN ${k(n.pin)}` : ``} · sold ${n.saleDate ? new Date(n.saleDate).toLocaleDateString(`en-US`) : `—`} for ${j(n.salePrice)}` +
            `${n.nra ? ` · ${Math.round(n.nra).toLocaleString()} sf · ${j(n.salePrice / n.nra, 2)}/sf` : ``}${n.landSf ? ` · land ${Math.round(n.landSf).toLocaleString()} sf` : ``}${n.classCode ? ` · class ${n.classCode}` : ``}${n.geoSource ? ` · location: ${n.geoSource}` : ``}`,
        );
      });
    }
  }
  let sheet = crActiveSheet() || t,
    pages = crNotesPages(sheet);
  for (let n = 1; n <= pages; n++) {
    let p = e.addPage([612, 792]);
    p.drawText(`CAP & REVIEW`, { x: 36, y: 758, size: 8, font: i, color: Uc });
    p.drawText(`2026 Commercial Reviews`, { x: 36, y: 740, size: 16, font: a, color: Hc });
    p.drawText(
      rl([t.caseNumber ? `Complaint # ${t.caseNumber}` : t.sample && CR_SAMPLE_LABEL, `PIN ${k(t.pin)}`, t.analyst && `Analyst ${t.analyst}`].filter(Boolean).join(`  ·  `), 100),
      { x: 36, y: 722, size: 9, font: i, color: Hc },
    );
    p.drawText(`ADDITIONAL NOTES`, { x: 36, y: 696, size: 12, font: a, color: Hc });
    for (let y = 678; y > 52; y -= 22)
      p.drawLine({ start: { x: 36, y }, end: { x: 576, y }, thickness: 0.5, color: Wc });
    p.drawText(`Additional notes · page ${n} of ${pages}${t.caseNumber ? ` · Complaint # ${t.caseNumber}` : ``} · PIN ${k(t.pin)}`, { x: 36, y: 36, size: 8, font: i, color: Uc });
  }
}
/* ---------- Appellant's requested value (manual entry; MV <-> AV at the listed class's LOA) ---------- */
function crCaseLoa(e) {
  return w.find((t) => t.id === e.classId)?.loa || (e.loa > 0 ? e.loa : 0.25);
}
/* kind: `mv` | `av`; value typed by the analyst. The other field is converted at the case LOA. */
function crReqPatch(e, t, n, r = `analyst`) {
  let i = crNum(n),
    a = crCaseLoa(e);
  if (!(i > 0))
    return { requestedMv: null, requestedAv: null, requestedEnteredAs: ``, requestedSource: ``, requestedLoa: null };
  return t === `mv`
    ? { requestedMv: Math.round(i), requestedAv: Math.round(i * a), requestedEnteredAs: `mv`, requestedSource: r, requestedLoa: a }
    : { requestedAv: Math.round(i), requestedMv: Math.round(i / a), requestedEnteredAs: `av`, requestedSource: r, requestedLoa: a };
}
function crReqField({ label: e, kind: t, sheet: n, patch: r, req: q }) {
  let i = t === `mv` ? n.requestedMv : n.requestedAv,
    a = n.requestedEnteredAs && n.requestedEnteredAs !== t && i > 0,
    [o, s] = (0, C.useState)(null);
  return (0, $.jsxs)(`label`, {
    className: `flex min-w-0 flex-1 flex-col gap-1${q ? ` cr-req` : ``}${q && !(n.requestedMv > 0 || n.requestedAv > 0) ? ` is-miss` : ``}`,
    children: [
      (0, $.jsxs)(`span`, { className: `lbl flex items-center gap-2`, children: [
        (0, $.jsxs)(`span`, { children: [e, q ? (0, $.jsx)(`span`, { className: `cr-ast`, children: ` *` }) : null] }),
        a ? (0, $.jsx)(`span`, { className: `rounded-sm px-1 text-[10px] font-semibold`, style: { background: `#e0e7ef`, color: `#33475b` }, "data-cr": `auto-${t}`, children: `auto` }) : null,
      ] }),
      (0, $.jsx)(`input`, {
        className: `field tabular-nums`, inputMode: `decimal`, "data-cr": `requested-${t}`, placeholder: `$`,
        value: o ?? (i > 0 ? `$${i.toLocaleString(`en-US`)}` : ``),
        onFocus: () => s(i > 0 && !a ? String(i) : ``),
        onChange: (e) => (s(e.target.value), r(crReqPatch(n, t, e.target.value))),
        onBlur: () => s(null),
      }),
    ],
  });
}
/* Change from the request (board AV vs requested AV). */
function crReqCompare(e, t) {
  let n = e.requestedAv > 0 ? e.requestedAv : null,
    r = t?.assessed;
  return n == null || r == null ? null : { delta: r - n, pct: (r - n) / n, requested: n, concluded: r };
}

/* ---------- The two outputs: PTAB PDF (State Form) and Analyst Report ---------- */
function CrReportButtons({ sheet: e, result: t, summary: n }) {
  let [r, i] = (0, C.useState)(!1),
    [a, o] = (0, C.useState)(``);
  return (0, $.jsxs)($.Fragment, { children: [
    (0, $.jsx)(`button`, {
      type: `button`, className: `btn btn-primary`, "data-cr": `il-form`, disabled: r || !t,
      title: `Opens the filled Illinois PTAB-6C notes on appeal, with a full valuation report, named ${crPtabPdfBase(e)}.pdf`,
      onClick: async () => {
        i(!0), o(``);
        let w = null;
        try { w = window.open(`about:blank`, `cr-ptab-pdf`); } catch {}
        try { await crNotesOnAppeal(e, t, n, w); o(`pdf`); } catch (e) {
          try { w && !w.closed && w.close(); } catch {}
          o(e instanceof Error ? e.message : `The form could not be filled.`);
        } finally { i(!1); }
      },
      children: r ? `Preparing…` : `PTAB PDF (State Form)`,
    }),
    (0, $.jsx)(`button`, {
      type: `button`, className: `btn`, "data-cr": `print-report`,
      title: `Commercial Review Worksheet with comments and Additional Notes pages. Save as PDF: ${crPdfBase(e)}.pdf`,
      onClick: () => crPrintReport(),
      children: `Analyst Report`,
    }),
    a === `pdf` && crLastPdf
      ? (0, $.jsxs)(`span`, { className: `text-xs text-subtle`, "data-cr": `pdf-fallback`, children: [
          `Saved as ${crLastPdf.name}. Nothing opened? `,
          (0, $.jsx)(`a`, { className: `underline`, href: crLastPdf.url, download: crLastPdf.name, target: `_blank`, rel: `noopener`, children: `Open or download the PDF` }),
        ] })
      : a ? (0, $.jsx)(`span`, { className: `text-xs text-subtle`, children: a }) : null,
  ] });
}
/* PTAB-6C fill, valuation report pages, and open-in-tab delivery. */
function crCompExtraOf(e) {
  return crCompExtra.get(crPin14(e)) ?? {};
}
async function crCompEnrichWait(e, t = 4000) {
  let n = [...new Set((e || []).map(crPin14).filter(Boolean))];
  if (!n.length) return;
  if (n.every((e) => crCompExtra.has(e))) return;
  crCompEnrich(n, () => {});
  let r = Date.now();
  while (!n.every((e) => crCompExtra.has(e)) && Date.now() - r < t) await new Promise((e) => setTimeout(e, 50));
}
function crLatestAv(e) {
  return e?.lookup?.av?.[0] || null;
}
function crFillGridRow(e, t, n, r) {
  let i = crCompExtraOf(n.pin),
    a = n.nra || i.bldgSf || 0,
    o = n.landSf || i.landSf || 0,
    s = n.yearBuilt || i.yearBuilt || 0,
    c = n.salePrice > 0 && a > 0 ? n.salePrice / a : 0,
    l = n.landAv || 0,
    u = n.bldgAv || 0,
    d = s > 1800 ? `${s} (age ${Math.max(0, (Number(n.taxYear) || new Date().getFullYear()) - s)})` : ``,
    f = o > 0 && a > 0 ? (o / a).toFixed(2) : ``;
  e(`${t}Property Index Number PIN`, fl(n.pin));
  e(`${t}Address`, n.address);
  e(`${t}Proximity to Subject`, r);
  e(`${t}Cook County Assessment Class`, n.classCode);
  e(`${t}Cook County Volume Assessment Class`, n.classCode);
  e(`${t}Total Land Sq Ft`, pl(o));
  e(`${t}Total Building Sq Ft`, pl(a));
  e(`${t}Age of Buildings`, d);
  e(`${t}LandtoBuilding Ratio`, f);
  n.units > 0 && e(`${t}Number of Apartments`, String(Math.round(n.units)));
  e(`${t}Date of Sale`, ml(n.saleDate));
  e(`${t}Sales Price`, pl(n.salePrice));
  e(`${t}${ol}`, c > 0 ? j(c, 2) : ``);
  e(`${t}Land Assessment`, pl(l));
  e(`${t}Improvement Assessment`, pl(u));
  e(`${t}Total Assessment`, pl(n.totalAv));
  u > 0 && a > 0 && e(`${t}Impr Assessment per Sq Ft Impr Assessment  Impr Sq Ft`, j(u / a, 2));
}
function crSelectPtab(e, t, n) {
  if (!n) return;
  try {
    e.getRadioGroup(t).select(n);
    return;
  } catch {}
  try {
    n !== `Off` && n !== `no` && e.getCheckBox(t).check();
  } catch {}
}
function crFillPtabExtras(s, form, t) {
  let n = crActiveSheet() || {},
    r = crLatestAv(n),
    i = crCompExtraOf(t.pin || n.pin),
    a = n.nra || i.bldgSf || t.subject?.nra || 0,
    o = n.units || t.subject?.units || 0;
  s(`What is the first year of the General Assessment Cycle for the subject property`, ``);
  if (r) {
    s(`Land`, pl(r.mailed_land));
    s(`Impr_2`, pl(r.mailed_bldg));
    s(`Total_2`, pl(r.mailed_tot || t.mailedAv));
    let e = r.board_tot > 0;
    s(`Land_2`, pl(e ? r.board_land : r.certified_land));
    s(`Impr_3`, pl(e ? r.board_bldg : r.certified_bldg));
    s(`Total_3`, pl((e ? r.board_tot : r.certified_tot) || t.afterAv));
  }
  let x = Number(n.eqFactor);
  if (x > 0) {
    crSelectPtab(form, `Did the township assessor Chief County Assessment Officer andor board of review apply a township equalization factor`, `yes_3`);
    s(`If yes list the factor and equalized assessment Factor`, de(x, 4));
  }
  let pins = n.pins || n.lookup?.income?.pins || t.subject?.pins;
  if ((Array.isArray(pins) ? pins.length : String(pins || ``).split(/[,;]/).filter(Boolean).length) > 1)
    crSelectPtab(form, `MultiParcelAppeal`, `On`);
  if (t.subject) {
    t.subject.landSf ||= i.landSf;
    t.subject.yearBuilt ||= i.yearBuilt;
    t.subject.units ||= o;
    t.subject.taxYear ||= n.taxYear;
    if (r) {
      t.subject.landAv ||= (r.board_tot > 0 ? r.board_land : r.certified_land) || r.mailed_land;
      t.subject.bldgAv ||= (r.board_tot > 0 ? r.board_bldg : r.certified_bldg) || r.mailed_bldg;
    }
  }
}
function crPresentPdf(e, t, n) {
  crKeepPdf(e, t);
  let r = !1,
    a = String(t || `PTAB.pdf`).replace(/[<>&"'`]/g, ``);
  try {
    if (n && !n.closed) {
      try {
        let i = n.document;
        i.open();
        i.write(
          `<!doctype html><html><head><meta charset="utf-8"><title>${a}</title><style>html,body,embed{margin:0;border:0;width:100%;height:100%;background:#404040}</style></head><body><embed type="application/pdf" src="${e}" title="${a}"></body></html>`,
        );
        i.close();
        i.title = a;
        r = !0;
      } catch {
        n.location.replace(e);
        r = !0;
        try {
          n.document.title = a;
        } catch {}
      }
    }
  } catch {}
  if (!r) {
    try {
      n && !n.closed && n.close();
    } catch {}
    let i = null;
    try {
      i = window.open(e, `cr-ptab-pdf`);
    } catch {}
    if (!i || i.closed) {
      let a = document.createElement(`a`);
      ((a.href = e), (a.download = t), (a.target = `_blank`), (a.rel = `noopener`));
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }
}
function crPdfFonts(e, t) {
  return { r: e, b: t };
}
function crNewReportPage(e, t, n, r, i) {
  let a = e.addPage([612, 792]);
  a.drawText(`CAP & REVIEW`, { x: 36, y: 758, size: 8, font: t.r, color: Uc });
  a.drawText(n, { x: 36, y: 738, size: 16, font: t.b, color: Hc });
  a.drawText(`2026 Commercial Reviews`, { x: 36, y: 722, size: 9, font: t.r, color: Uc });
  r && a.drawText(rl(r, 110), { x: 36, y: 708, size: 8, font: t.r, color: Hc });
  i && a.drawText(i, { x: 36, y: 36, size: 8, font: t.r, color: Uc });
  return a;
}
function crKvCol(e, t, n, r, i, a) {
  let o = r;
  for (let [s, c] of n) {
    e.drawText(String(s), { x: t, y: o, size: 8, font: i.r, color: Uc });
    e.drawText(String(c ?? `—`), { x: t + 168, y: o, size: 8, font: i.b, color: Hc });
    o -= a || 14;
  }
  return o;
}
function crSheetMeta(e) {
  return [e.caseNumber ? `Complaint # ${e.caseNumber}` : ``, e.pin ? `PIN ${k(A(e.pin) || e.pin)}` : ``, e.analyst ? `Analyst ${e.analyst}` : ``, e.address].filter(Boolean).join(`  ·  `);
}
async function crValuationPdfPages(e, t, n, r) {
  let i = await e.embedFont(_c.Helvetica),
    a = await e.embedFont(_c.HelveticaBold),
    o = crPdfFonts(i, a),
    s = crActiveSheet() || {},
    c = ue(s),
    l = crSheetMeta({ caseNumber: t.caseNumber || s.caseNumber, pin: t.pin || s.pin, analyst: t.analyst || s.analyst, address: t.address || s.address }),
    u = crReqCompare(s, c),
    d = typeof pd == `function` ? pd(s.eqFactor) : s.taxRateYear,
    f = d && d !== `custom` ? d : s.taxRateYear || ``,
    p = s.expenseMode === `ratio` ? M(s.expenseRatio, 1) : s.expenseMode === `dollars` ? `lump sum` : `line items`,
    m = [
      [`PGI`, j(c.pgi)],
      [`Vacancy & collection loss`, `${j(c.vacancy)}  (${M(s.vacancyRate, 1)})`],
      [`Other income`, j(s.otherIncome || 0)],
      [`EGI`, j(c.egi)],
      [`Operating expenses`, `${j(c.operatingExpenses)}  (${p}${s.expenseMode === `ratio` ? `` : c.egi ? ` · ${M(c.operatingExpenses / c.egi, 1)} of EGI` : ``})`],
      [`NOI`, j(c.noi)],
      [`Unloaded / market cap`, M(s.marketCap, 2)],
      [`Tax year`, s.taxYear || `—`],
      [`Equalization factor`, de(s.eqFactor, 4)],
      [`Level of assessment`, M(s.loa, 0)],
      [`Tax code`, s.taxCode || `—`],
      [`District tax rate`, `${M(s.taxRate, 3)}${f ? `  (${f})` : ``}`],
      [`Tax load (LOA × factor × rate)`, M(c.taxLoad, 2)],
      [`Loaded cap`, M(c.loadedCap, 2)],
      [`Indicated market value`, j(c.indicated)],
      [`Additional land`, j(s.additionalLand || 0)],
      [`Concluded market value`, j(c.concluded)],
      [`Indicated / new AV`, j(c.assessed)],
      [`EAV`, j(c.eav)],
      [`Requested MV`, s.requestedMv > 0 ? j(s.requestedMv) : `—`],
      [`Requested AV`, s.requestedAv > 0 ? j(s.requestedAv) : `—`],
      [`Vs request`, u ? `${u.delta >= 0 ? `+` : `−`}${j(Math.abs(u.delta))} AV (${(Math.abs(u.pct) * 100).toFixed(1)}%)` : `—`],
    ],
    h = crNewReportPage(e, o, `Income approach worksheet`, l, `Income calculator metrics  ·  ${t.caseNumber ? `Complaint # ${t.caseNumber}  ·  ` : ``}PIN ${k(t.pin)}`);
  h.drawText(`Every figure below is taken from the case income calculator.`, { x: 36, y: 690, size: 8, font: i, color: Uc });
  crKvCol(h, 36, m.slice(0, 12), 672, o, 15);
  crKvCol(h, 320, m.slice(12), 672, o, 15);
  if (s.taxRateSource)
    h.drawText(rl(`Tax rate source: ${s.taxRateSource}`, 100), { x: 36, y: 470, size: 7, font: i, color: Uc });
  h.drawText(`Income value is NOI ÷ loaded cap, before additional land and rounding to the nearest $1,000.`, { x: 36, y: 454, size: 7, font: i, color: Uc });

  /* Comps grid with averages and $/sf comparison */
  let g = (t.comps || []).map((e, n) => {
      let r = crGridExtraRow(e, t.subject);
      return { n: n + 1, auto: typeof crIsAutoPick == `function` && crIsAutoPick(e), ...r };
    }),
    _ = (e, t) => (e.length ? e.reduce((e, t) => e + t, 0) / e.length : null),
    v = {
      price: _(g.map((e) => e.price).filter((e) => e > 0)),
      bldg: _(g.map((e) => e.bldg).filter((e) => e > 0)),
      land: _(g.map((e) => e.land).filter((e) => e > 0)),
      psf: _(g.map((e) => e.psf).filter((e) => e != null && Number.isFinite(e))),
      mi: _(g.map((e) => e.mi).filter((e) => e != null)),
    },
    y = c.concluded != null && (s.nra || 0) > 0 ? c.concluded / s.nra : null,
    b = crNewReportPage(e, o, `Comparable sales grid`, l, `Sales comparison  ·  ${g.length} checked sale${g.length === 1 ? `` : `s`}${g.some((e) => e.auto) ? `  ·  * auto-selected` : ``}`);
  b.drawText(
    rl(
      [
        v.psf != null ? `Average sale price ${j(v.psf, 2)}/sf` : ``,
        v.price != null ? `average price ${j(v.price)}` : ``,
        y != null ? `income value ${j(y, 2)}/sf` : ``,
        v.psf != null && y != null ? `sales vs income ${j(v.psf - y, 2)}/sf` : ``,
      ]
        .filter(Boolean)
        .join(`  ·  `) || `Checked comparable sales used on the PTAB-6C grid.`,
      110,
    ),
    { x: 36, y: 690, size: 8, font: i, color: Hc },
  );
  let nt = typeof crPdfWrap == `function` ? crPdfWrap(typeof crAutoPickRule == `function` ? crAutoPickRule() : ``, 118) : [],
    ny = 678;
  for (let line of nt.slice(0, 4)) (b.drawText(line, { x: 36, y: ny, size: 6.5, font: i, color: Uc }), (ny -= 9));
  let x = [36, 52, 160, 306, 336, 392, 452, 510, 556],
    S = [`#`, `PIN`, `Address`, `Mi`, `Sale date`, `Price`, `Bldg sf`, `Land sf`, `$ / sf`],
    C2 = Math.min(662, ny - 8);
  S.forEach((e, t) => b.drawText(e, { x: x[t], y: C2, size: 7, font: a, color: Uc }));
  C2 -= 4;
  b.drawLine({ start: { x: 36, y: C2 }, end: { x: 576, y: C2 }, thickness: 0.6, color: Wc });
  C2 -= 12;
  let P = (e, t, n, r, i2 = i) => {
    C2 < 70 && ((b = crNewReportPage(e, o, `Comparable sales grid (continued)`, l, `Sales comparison`)), (C2 = 690));
    n.forEach((e, n) => b.drawText(rl(String(e ?? `—`), t[n] || 12), { x: x[n], y: C2, size: 7, font: i2, color: r || Hc }));
    C2 -= 12;
  };
  if (!g.length) P(e, [4, 18, 22, 8, 12, 12, 10, 10, 10], [`—`, `No comparable sales are checked.`, ``, ``, ``, ``, ``, ``, ``], Uc);
  g.forEach((t) =>
    P(e, [3, 20, 24, 6, 11, 11, 10, 9, 8], [`${t.n}${t.auto ? `*` : ``}`, t.pin, t.address, t.miS, t.date, t.price > 0 ? j(t.price) : `—`, t.bldg > 0 ? Math.round(t.bldg).toLocaleString() : `—`, t.land > 0 ? Math.round(t.land).toLocaleString() : `—`, t.psf != null ? j(t.psf, 2) : `—`], t.auto ? Hc : Hc, t.auto ? a : i),
  );
  C2 -= 4;
  b.drawLine({ start: { x: 36, y: C2 + 8 }, end: { x: 576, y: C2 + 8 }, thickness: 0.6, color: Wc });
  P(e, [3, 20, 24, 6, 11, 11, 10, 9, 8], [``, `Average`, ``, v.mi != null ? v.mi.toFixed(2) : `—`, ``, v.price != null ? j(v.price) : `—`, v.bldg != null ? Math.round(v.bldg).toLocaleString() : `—`, v.land != null ? Math.round(v.land).toLocaleString() : `—`, v.psf != null ? j(v.psf, 2) : `—`], Hc, a);
  if (y != null)
    b.drawText(`Subject income value ${j(y, 2)}/sf  ·  concluded ${j(c.concluded)}  ·  ${s.nra > 0 ? `${Math.round(s.nra).toLocaleString()} sf` : `no area on the case`}.`, { x: 36, y: Math.max(52, C2 - 6), size: 8, font: i, color: Hc });
  {
    let dy = Math.max(52, C2 - 6) - 12,
      ds = typeof crAutoPickDetails == `function` ? crAutoPickDetails() : [];
    for (let line of ds.flatMap((e) => (typeof crPdfWrap == `function` ? crPdfWrap(e, 118) : [e]))) {
      if (dy < 46) break;
      b.drawText(line, { x: 36, y: dy, size: 6.5, font: i, color: Uc });
      dy -= 9;
    }
  }

  /* Subject property data sheet */
  let T = crLatestAv(s),
    I = crCompExtraOf(s.pin),
    A2 = s.lookup || {},
    w2 = A2.parcel || {},
    inc = A2.income || {},
    z = crNewReportPage(e, o, `Subject property data`, l, `Subject data sheet  ·  PIN ${k(t.pin)}`);
  let rows1 = [
    [`PIN`, k(A(s.pin) || t.pin)],
    [`Address`, s.address || t.address || `—`],
    [`Township`, s.township || t.township || w2.township || `—`],
    [`Tax code`, s.taxCode || w2.taxCode || `—`],
    [`Class`, [w2.classCode || inc.classCode || s.classId, inc.use || ``].filter(Boolean).join(` · `) || t.classLine || `—`],
    [`Level of assessment`, M(s.loa, 0)],
    [`Land sf`, pl(I.landSf || inc.landsf) || `—`],
    [`Building sf (NRA)`, pl(s.nra || I.bldgSf || inc.bldgsf || inc.nrsf) || `—`],
    [`Year built / age`, I.yearBuilt || inc.yearbuilt ? crYb(I.yearBuilt || inc.yearbuilt, s.taxYear) : `—`],
    [`Units`, s.units > 0 ? String(s.units) : `—`],
    [`Tax year`, s.taxYear || `—`],
    [`Equalization factor`, de(s.eqFactor, 4)],
    [`Current / after AV`, j(t.afterAv || s.currentAv)],
    [`Mailed AV`, T ? j(T.mailed_tot) : j(t.mailedAv)],
    [`Land AV (current)`, T ? j((T.board_tot > 0 ? T.board_land : T.certified_land) || T.mailed_land) : `—`],
    [`Improvement AV (current)`, T ? j((T.board_tot > 0 ? T.board_bldg : T.certified_bldg) || T.mailed_bldg) : `—`],
    [`Requested MV`, s.requestedMv > 0 ? j(s.requestedMv) : `—`],
    [`Requested AV`, s.requestedAv > 0 ? j(s.requestedAv) : `—`],
    [`Docket / complaint`, t.caseNumber || s.caseNumber || `—`],
    [`Appellant`, t.appellant || `—`],
    [`Analyst`, s.analyst || t.analyst || `—`],
  ];
  crKvCol(z, 36, rows1, 688, o, 14);
  let hist = (A2.av || []).slice(0, 8);
  let hy = 688;
  z.drawText(`Valuation history`, { x: 320, y: hy, size: 9, font: a, color: Hc });
  hy -= 14;
  if (!hist.length) z.drawText(`No Assessor valuation history loaded.`, { x: 320, y: hy, size: 8, font: i, color: Uc });
  else {
    z.drawText(`Year        Mailed            Certified         Board`, { x: 320, y: hy, size: 7, font: a, color: Uc });
    hy -= 12;
    for (let e of hist) {
      z.drawText(`${e.year || ``}    ${String(e.mailed_tot > 0 ? Math.round(e.mailed_tot).toLocaleString() : `—`).padEnd(12)}  ${String(e.certified_tot > 0 ? Math.round(e.certified_tot).toLocaleString() : `—`).padEnd(12)}  ${e.board_tot > 0 ? Math.round(e.board_tot).toLocaleString() : `—`}`, { x: 320, y: hy, size: 7, font: i, color: Hc });
      hy -= 12;
    }
  }
  hy -= 8;
  z.drawText(`Ten-year sale history`, { x: 320, y: hy, size: 9, font: a, color: Hc });
  hy -= 14;
  let sales = (A2.sales || []).filter((e) => e.sale_price > 0 || e.price > 0).slice(0, 6);
  if (!sales.length) z.drawText(`No recorded sales in the last ten years.`, { x: 320, y: hy, size: 8, font: i, color: Uc });
  else
    for (let e of sales) {
      let t = e.sale_date || e.saleDate,
        n = t ? new Date(t).toLocaleDateString(`en-US`) : `—`,
        r = e.sale_price || e.price;
      z.drawText(rl(`${n}  ${r > 0 ? j(r) : `—`}  ${e.deed_type || e.deedType || ``}`, 48), { x: 320, y: hy, size: 7, font: i, color: Hc });
      hy -= 12;
    }
}
function crGridExtraRow(e, t) {
  let n = crCompExtraOf(e.pin),
    r = e.nra || n.bldgSf || 0,
    i = e.landSf || n.landSf || 0,
    a = e.salePrice > 0 && r > 0 ? e.salePrice / r : null,
    o = e.distanceMi;
  if (o == null && t && typeof gl == `function`) o = gl(t, e);
  return {
    pin: crPin14(e.pin) ? k(crPin14(e.pin)) : `—`,
    address: String(e.address || `—`).replace(/\s*\(Analyst-entered\)\s*$/i, ``).split(`,`)[0],
    mi: o,
    miS: o != null ? (o < 0.05 ? `0.00` : o.toFixed(2)) : `—`,
    date: e.saleDate ? new Date(e.saleDate).toLocaleDateString(`en-US`) : `—`,
    price: e.salePrice || 0,
    bldg: r,
    land: i,
    psf: a,
    cls: e.classCode || ``,
  };
}
/* ---------- PDF names: Analyst Report <docket>_<PIN>.pdf; PTAB <PIN14>_PTAB.pdf ---------- */
function crPdfBase(e = crActiveSheet()) {
  let t = (e) => String(e ?? ``).replace(/[\\/:*?"<>|\u0000-\u001f\u007f]/g, ``).trim(),
    n = t(e?.caseNumber),
    r = A(e?.pin ?? ``);
  return (n && r ? `${n}_${r}` : r ? (e?.sample ? `SAMPLE_${r}` : r) : n || `commercial-review`).replace(/^[.\s]+|[.\s]+$/g, ``) || `commercial-review`;
}
function crPtabPdfBase(e = crActiveSheet()) {
  let t = A(e?.pin ?? e?.keypin ?? ``) || A(crActiveSheet()?.pin ?? crActiveSheet()?.keypin ?? ``);
  return `${t || `subject`}_PTAB`;
}
/* Print with document.title set so the browser's Save as PDF defaults to <docket>_<PIN>.pdf. */
function crTitledPrint(e) {
  let t = document.title,
    n = crPdfBase(),
    r = () => {
      document.title = t;
      window.removeEventListener(`afterprint`, r);
    };
  document.title = n;
  window.addEventListener(`afterprint`, r);
  let i = !1,
    a = () => (i = !0);
  window.addEventListener(`beforeprint`, a);
  try {
    e();
  } catch {}
  window.removeEventListener(`beforeprint`, a);
  /* A sandboxed Embed iframe without allow-modals ignores print(): fall back to a new tab. */
  i || crOpenReportTab();
  setTimeout(r, 1500);
}
/* ---------- Required inputs: docket, analyst, PIN, requested amount ---------- */
function crMissing(e) {
  if (!e) return [];
  return [
    !String(e.caseNumber || ``).trim() && `Docket / Complaint #`,
    !String(e.analyst || ``).trim() && `Analyst name`,
    A(e.pin || ``).length !== 14 && `Subject PIN`,
    !(e.requestedMv > 0 || e.requestedAv > 0) && `Requested amount (MV or AV)`,
  ].filter(Boolean);
}
function crToast(e) {
  if (typeof document > `u`) return;
  let t = document.getElementById(`cr-toast`);
  t || ((t = document.createElement(`div`)), (t.id = `cr-toast`), (t.className = `cr-toast no-print`), t.setAttribute(`role`, `status`), document.body.appendChild(t));
  t.textContent = e;
  t.style.display = `block`;
  clearTimeout(crToast.t);
  crToast.t = setTimeout(() => (t.style.display = `none`), 9e3);
}
/* Gentle, non-blocking reminder before either report. */
function crWarnMissing(e = crActiveSheet()) {
  let t = crMissing(e);
  t.length && crToast(`Heads up: ${t.join(`, `)} ${t.length === 1 ? `is` : `are`} blank. The report still goes ahead.`);
  return t;
}
/* ---------- Income worksheet defaults from the Assessor commercial valuation data (csik-bsws) ---------- */
var CR_INCOME_KEYS = [`pgi`, `rentPerSf`, `otherIncome`, `vacancyRate`, `expenseRatio`, `expenseDollars`, `marketCap`, `nra`, `units`, `additionalLand`],
  CR_INCOME_MODES = [`pgiMode`, `expenseMode`],
  crIncomeCtx = null;
function crAssessorDefaults(e) {
  let t = e?.income;
  if (!t) return null;
  let n = {},
    r = (e, t) => (n[e] = Number.isFinite(t) ? t : 0);
  r(`nra`, t.nrsf || t.bldgsf || 0);
  r(`rentPerSf`, t.rentSf || 0);
  r(`pgi`, t.pgi > 0 ? Math.round(t.pgi * 100) / 100 : t.rentSf > 0 && n.nra > 0 ? Math.round(t.rentSf * n.nra) : 0);
  r(`otherIncome`, 0);
  r(`vacancyRate`, t.vacancy || 0);
  r(`expenseRatio`, t.exp || 0);
  r(`expenseDollars`, t.totalExp > 0 ? Math.round(t.totalExp) : 0);
  r(`marketCap`, t.cap || 0);
  r(`units`, t.units || 0);
  r(`additionalLand`, t.exLandVal > 0 ? Math.round(t.exLandVal) : 0);
  n.pgiMode = `direct`;
  n.expenseMode = `ratio`;
  return { pin14: e.pin14, year: t.year, keypin: t.keypin, source: `Cook County Assessor commercial valuation data (csik-bsws), ${t.year}`, values: n };
}
function crSame(e, t) {
  let n = Number(e) || 0,
    r = Number(t) || 0;
  return Math.abs(n - r) <= Math.max(1e-6, 1e-5 * Math.abs(r));
}
/* Lookup arrived: set every income field to the Assessor value unless the analyst edited it for this PIN. */
function crAssessorApply(e, t) {
  let n = crAssessorDefaults(t);
  if (!n) return {};
  let r = e.assessorDefaults,
    i = r?.pin14 === n.pin14,
    a = { assessorDefaults: n };
  for (let t of CR_INCOME_KEYS) (i && !crSame(e[t], r.values[t])) || (a[t] = n.values[t]);
  for (let t of CR_INCOME_MODES) (i && e[t] !== r.values[t]) || (a[t] = n.values[t]);
  return a;
}
function crIncomeState(e, t) {
  let n = e?.assessorDefaults;
  return n && t in n.values ? (crSame(e[t], n.values[t]) ? `assessor` : `edited`) : null;
}
function crResetPatch(e, t) {
  let n = e.assessorDefaults;
  if (!n) return {};
  let r = {};
  for (let e of t ?? [...CR_INCOME_KEYS, ...CR_INCOME_MODES]) e in n.values && (r[e] = n.values[e]);
  t?.includes(`pgi`) && (r.pgiMode = `direct`);
  t?.includes(`rentPerSf`) && (r.pgiMode = `perSf`);
  t?.includes(`expenseRatio`) && (r.expenseMode = `ratio`);
  t?.includes(`expenseDollars`) && (r.expenseMode = `dollars`);
  return r;
}
function CrSrcTag({ k: e }) {
  let t = crIncomeCtx?.sheet,
    n = crIncomeCtx?.patch,
    r = crIncomeState(t, e);
  if (!r) return null;
  return r === `assessor`
    ? (0, $.jsx)(`span`, { className: `cr-src is-a`, "data-src": e, title: t.assessorDefaults.source, children: `Assessor` })
    : (0, $.jsxs)(`span`, { className: `cr-src is-e`, "data-src": e, children: [
        `Edited`,
        (0, $.jsx)(`button`, {
          type: `button`, className: `cr-reset`, "data-reset": e,
          title: `Reset to the Assessor value (${crFmtIncome(e, t.assessorDefaults.values[e])})`,
          onClick: (r) => (r.preventDefault(), r.stopPropagation(), n(crResetPatch(t, [e]))),
          children: `↺ reset`,
        }),
      ] });
}
function crFmtIncome(e, t) {
  return [`vacancyRate`, `expenseRatio`, `marketCap`].includes(e) ? M(t) : [`nra`, `units`].includes(e) ? Math.round(t).toLocaleString() : j(t, e === `rentPerSf` ? 2 : 0);
}
function CrAssessorBar({ sheet: e, patch: t }) {
  let n = e?.assessorDefaults;
  if (!n) return null;
  let r = CR_INCOME_KEYS.filter((t) => crIncomeState(e, t) === `edited`);
  return (0, $.jsxs)(`div`, {
    className: `no-print mt-4 flex flex-wrap items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 text-sm`, "data-cr": `assessor-bar`,
    children: [
      (0, $.jsx)(`span`, { className: `cr-src is-a`, children: `Assessor` }),
      (0, $.jsx)(`span`, { className: `flex-1 text-pretty text-muted`, children: `Income worksheet fields default to the ${n.source} for keypin ${n.keypin || k(n.pin14)}. Every field stays editable; edited fields keep your value on re-lookup.` }),
      (0, $.jsx)(`span`, { className: `text-xs text-subtle`, "data-cr": `edited-count`, children: r.length ? `${r.length} edited` : `All at Assessor values` }),
      (0, $.jsx)(`button`, { type: `button`, className: `btn`, "data-cr": `reset-all`, disabled: !r.length && CR_INCOME_MODES.every((t) => e[t] === n.values[t]), onClick: () => t(crResetPatch(e)), children: `Reset all to Assessor` }),
    ],
  });
}
/* ---------- Side-panel / iframe support ---------- */
function crInFrame() {
  try {
    return window.self !== window.top;
  } catch {
    return !0;
  }
}
/* ?case=<id>&cr_print=1 opens a saved case (new-tab fallback for printing from a sandboxed panel). */
function crOpenCase(e) {
  if (!e || typeof location > `u`) return e;
  let t = new URLSearchParams(location.search).get(`case`);
  return t && e.sheets.some((e) => e.id === t) ? { ...e, activeId: t } : e;
}
function crPrintOnLoad() {
  typeof location < `u` && new URLSearchParams(location.search).get(`cr_print`) === `1` && setTimeout(() => crPrintReport(), 3500);
}
function crOpenReportTab() {
  let e = crActiveSheet(),
    t = `${location.origin}${location.pathname}?case=${encodeURIComponent(e?.id ?? ``)}&cr_print=1`,
    n = null;
  try {
    n = window.open(t, `_blank`, `noopener`);
  } catch {}
  let r = crMissing(e);
  crToast(
    (r.length ? `Heads up: ${r.join(`, `)} ${r.length === 1 ? `is` : `are`} blank. ` : ``) +
      `Printing is blocked inside this panel, so the Analyst Report opened in a new tab. If no tab appeared, open the tool in its own tab and print from there.`,
  );
}
/* Last PTAB PDF, kept so the analyst can open it in a new tab if the panel blocks downloads. */
var crLastPdf = null;
function crKeepPdf(e, t) {
  crLastPdf && crLastPdf.url !== e && setTimeout(((e) => () => URL.revokeObjectURL(e))(crLastPdf.url), 1e3);
  crLastPdf = { url: e, name: t, at: Date.now() };
}
/* Collapsible section (touch-friendly header, state kept per section; always expanded in print). */
function CrFold({ id: e, title: t, children: n }) {
  let r = `cr2026-fold-${e}`,
    [i, a] = (0, C.useState)(() => {
      try {
        return localStorage.getItem(r) !== `0`;
      } catch {
        return !0;
      }
    });
  return (0, $.jsxs)(`div`, {
    className: `cr-fold${i ? `` : ` is-closed`}`, "data-fold": e,
    children: [
      (0, $.jsxs)(`button`, {
        type: `button`, className: `cr-fold-head no-print`, "aria-expanded": i, "data-fold-head": e,
        onClick: () => a((e) => {
          try { localStorage.setItem(r, e ? `0` : `1`); } catch {}
          return !e;
        }),
        children: [(0, $.jsx)(`span`, { children: t }), (0, $.jsx)(`span`, { className: `cr-chev`, "aria-hidden": !0, children: `▾` })],
      }),
      (0, $.jsx)(`div`, { className: `cr-fold-body`, children: n }),
    ],
  });
}
/* ---------- "Fill with sample data": the original rotary PIN wheel (Tu) over the Assessor
   commercial valuation catalog (csik-bsws), with a filter box and paged loading. ---------- */
var CR_SAMPLE_URL = `https://datacatalog.cookcountyil.gov/resource/csik-bsws.json`,
  CR_SAMPLE_PAGE = 300,
  CR_ROW = 48,
  CR_DRUM = 336,
  CR_PAD = (CR_DRUM - CR_ROW) / 2,
  CR_SAMPLE_LABEL = `Sample / no docket`;
function crSampleTowns() {
  try {
    return Array.isArray(E) ? E : [];
  } catch {
    return [];
  }
}
/* Free text matches address, township, use, class, or PIN; the township picker narrows it. */
function crSampleWhere(q, t) {
  let w = [],
    s = String(q || ``).trim().toUpperCase().replace(/'/g, `''`),
    d = s.replace(/\D/g, ``);
  if (s) {
    let o = [`upper(address) like '%${s}%'`, `upper(township) like '%${s}%'`, `upper(property_type_use) like '%${s}%'`];
    /^\d-?\d{2}$/.test(s) && o.push(`class_es like '%${d[0]}-${d.slice(1)}%'`, `class_es like '%${d}%'`);
    d.length >= 4 && /^[\d\s-]+$/.test(s) && o.push(`keypin like '${k(d)}%'`);
    w.push(`(${o.join(` OR `)})`);
  }
  t && w.push(`township = '${String(t).replace(/'/g, `''`)}'`);
  return w.join(` AND `);
}
async function crSampleFetch(q, t, off, sig) {
  let w = crSampleWhere(q, t),
    p = new URLSearchParams({ $select: `keypin,address,township,class_es,property_type_use,year`, $order: `keypin,year DESC`, $limit: String(CR_SAMPLE_PAGE), $offset: String(off) });
  w && p.set(`$where`, w);
  let r = await fetch(`${CR_SAMPLE_URL}?${p}`, { signal: sig });
  if (!r.ok) throw Error(`Assessor catalog answered ${r.status}`);
  let n = await r.json();
  if (!Array.isArray(n)) throw Error(`Assessor catalog rejected the search`);
  return n;
}
async function crSampleCount(q, t, sig) {
  let w = crSampleWhere(q, t),
    p = new URLSearchParams({ $select: `count(distinct keypin) as n` });
  w && p.set(`$where`, w);
  try {
    let r = await fetch(`${CR_SAMPLE_URL}?${p}`, { signal: sig });
    return r.ok ? Number((await r.json())?.[0]?.n) || 0 : null;
  } catch {
    return null;
  }
}
function crSampleRow(e) {
  let t = Il(e.keypin).replace(/\D/g, ``);
  return t.length < 10
    ? null
    : { pin: k(t.padStart(14, `0`).slice(-14)), address: Il(e.address), township: Il(e.township), cls: Il(e.class_es).split(`,`)[0].trim(), use: Il(e.property_type_use), year: Il(e.year) };
}
function CrSampleDrawer({ onClose: e, onPick: t }) {
  let [n, r] = (0, C.useState)(``),
    [i, a] = (0, C.useState)(``),
    [o, s] = (0, C.useState)([]),
    [c, l] = (0, C.useState)(null),
    [u, d] = (0, C.useState)(!1),
    [f, p] = (0, C.useState)(``),
    [m, h] = (0, C.useState)(0),
    g = (0, C.useRef)(null),
    _ = (0, C.useRef)({ off: 0, done: !1, seen: new Set(), rows: [], ctl: null, key: `` }),
    v = (0, C.useRef)(0),
    y = (0, C.useRef)(null),
    b = (0, C.useRef)(null);
  async function x(reset) {
    let z = _.current;
    if (!reset && (z.done || z.busy)) return;
    let key = `${n}|${i}`;
    if (reset) {
      z.ctl?.abort();
      Object.assign(z, { off: 0, done: !1, seen: new Set(), rows: [], ctl: new AbortController(), key });
      s([]); h(0); g.current && (g.current.scrollTop = 0);
      l(null);
      crSampleCount(n, i, z.ctl.signal).then((e) => z.key === key && l(e));
    }
    z.busy = !0; d(!0); p(``);
    try {
      let e = await crSampleFetch(n, i, z.off, z.ctl.signal);
      if (z.key !== key) return;
      z.off += e.length;
      e.length < CR_SAMPLE_PAGE && (z.done = !0);
      for (let t of e) {
        let e = crSampleRow(t);
        e && !z.seen.has(e.pin) && (z.seen.add(e.pin), z.rows.push(e));
      }
      s([...z.rows]);
    } catch (e) {
      e?.name !== `AbortError` && p(e instanceof Error ? e.message : `The Assessor catalog did not answer.`);
    } finally {
      z.key === key && ((z.busy = !1), d(!1));
    }
  }
  (0, C.useEffect)(() => {
    let e = window.setTimeout(() => x(!0), n ? 350 : 0);
    return () => window.clearTimeout(e);
  }, [n, i]);
  (0, C.useEffect)(() => {
    let t = document.body.style.overflow;
    document.body.style.overflow = `hidden`;
    y.current = document.activeElement;
    b.current?.focus();
    let n = (t) => t.key === `Escape` && e();
    window.addEventListener(`keydown`, n);
    return () => {
      document.body.style.overflow = t;
      window.removeEventListener(`keydown`, n);
      _.current.ctl?.abort();
      y.current?.focus?.({ preventScroll: !0 });
    };
  }, []);
  /* Wheel mechanics from the original catalog wheel: 48px rows, snap after the scroll settles. */
  function S() {
    let e = g.current;
    if (!e) return;
    let t = Math.max(0, Math.min(o.length - 1, Math.round(e.scrollTop / CR_ROW)));
    t !== m && h(t);
    window.clearTimeout(v.current);
    v.current = window.setTimeout(() => {
      let e = g.current;
      if (!e) return;
      let t = Math.max(0, Math.min(_.current.rows.length - 1, Math.round(e.scrollTop / CR_ROW))) * CR_ROW;
      Math.abs(e.scrollTop - t) > 2 && (e.scrollTop = t);
    }, 180);
    t > o.length - 60 && x(!1);
  }
  function w(e) {
    let t = Math.max(0, Math.min(o.length - 1, e));
    h(t);
    g.current?.scrollTo({ top: t * CR_ROW, behavior: `smooth` });
    t > o.length - 60 && x(!1);
  }
  let T = o[m],
    D = Math.max(0, m - 12),
    O = Math.min(o.length, D + 30),
    k0 = o.slice(D, O),
    pick = () => T && t(T);
  return (0, $.jsx)(`div`, {
    className: `cr-drawer-bg no-print`, "data-cr": `sample-drawer`,
    onMouseDown: (t) => t.target === t.currentTarget && e(),
    children: (0, $.jsxs)(`div`, {
      className: `cr-drawer`, role: `dialog`, "aria-modal": `true`, "aria-labelledby": `cr-sample-h`,
      children: [
        (0, $.jsxs)(`div`, { className: `cr-drawer-head`, children: [
          (0, $.jsxs)(`div`, { children: [
            (0, $.jsx)(`p`, { className: `cr-step`, children: `Sample data` }),
            (0, $.jsx)(`h2`, { id: `cr-sample-h`, className: `cr-drawer-h`, children: `Pick a property` }),
          ] }),
          (0, $.jsx)(`button`, { type: `button`, className: `cr-drawer-x`, "aria-label": `Close`, "data-cr": `sample-close`, onClick: e, children: `✕` }),
        ] }),
        (0, $.jsxs)(`div`, { className: `cr-drawer-body`, children: [
          (0, $.jsx)(`p`, { className: `cr-sh-hint`, children: `Every key PIN in the Cook County Assessor commercial valuation data (csik-bsws). Scroll the wheel, or filter by address, PIN, township, class or use. No docket needed.` }),
          (0, $.jsxs)(`div`, { className: `cr-drawer-filters`, children: [
            (0, $.jsx)(`input`, {
              ref: b, className: `field`, type: `search`, "data-cr": `sample-q`, value: n, placeholder: `Address, PIN, class (5-93) or use`, autoComplete: `off`, spellCheck: !1, "aria-label": `Filter properties`,
              onChange: (e) => r(e.target.value),
              onKeyDown: (e) => (e.key === `ArrowDown` ? (e.preventDefault(), w(m + 1)) : e.key === `ArrowUp` ? (e.preventDefault(), w(m - 1)) : e.key === `Enter` && (e.preventDefault(), pick())),
            }),
            (0, $.jsxs)(`select`, {
              className: `field`, "data-cr": `sample-town`, value: i, "aria-label": `Township`, onChange: (e) => a(e.target.value),
              children: [(0, $.jsx)(`option`, { value: ``, children: `All townships` }), ...crSampleTowns().map((e) => (0, $.jsx)(`option`, { value: e, children: e }, e))],
            }),
          ] }),
          (0, $.jsx)(`p`, { className: `cr-drawer-count`, "data-cr": `sample-count`, children: f || (u && !o.length ? `Searching the Assessor catalog…` : !o.length ? `No properties match.` : `${c == null ? `${o.length.toLocaleString(`en-US`)}+` : c.toLocaleString(`en-US`)} ${c === 1 ? `property` : `properties`} · ${(m + 1).toLocaleString(`en-US`)} of ${o.length.toLocaleString(`en-US`)} loaded${u ? ` · loading more…` : ``}`) }),
          (0, $.jsxs)(`div`, { className: `pin-drum cr-drum`, style: { height: CR_DRUM }, children: [
            (0, $.jsxs)(`div`, {
              ref: g, className: `pin-drum-scroller`, onScroll: S, tabIndex: 0, "data-cr": `sample-wheel`, "aria-label": `Property wheel`,
              onKeyDown: (e) => (e.key === `ArrowDown` ? (e.preventDefault(), w(m + 1)) : e.key === `ArrowUp` ? (e.preventDefault(), w(m - 1)) : e.key === `Enter` && (e.preventDefault(), pick())),
              children: [
                (0, $.jsx)(`div`, { style: { height: CR_PAD + D * CR_ROW } }),
                k0.map((e, t) => {
                  let n = D + t;
                  return (0, $.jsxs)(`div`, {
                    className: `pin-drum-row ${n === m ? `is-selected` : ``}`, "data-pin": e.pin, onClick: () => (n === m ? pick() : w(n)),
                    children: [(0, $.jsx)(`span`, { className: `pin-drum-pin`, children: e.pin }), (0, $.jsx)(`span`, { className: `pin-drum-addr`, children: [e.address || `No address`, e.township].filter(Boolean).join(` · `) })],
                  }, e.pin);
                }),
                (0, $.jsx)(`div`, { style: { height: CR_PAD + Math.max(0, o.length - O) * CR_ROW } }),
              ],
            }),
            (0, $.jsx)(`div`, { className: `pin-drum-window`, style: { top: CR_PAD } }),
            (0, $.jsx)(`div`, { className: `pin-drum-shade` }),
          ] }),
          (0, $.jsxs)(`div`, { className: `cr-drawer-pick`, "data-cr": `sample-selected`, children: [
            (0, $.jsx)(`p`, { className: `pin-wheel-pin`, children: T?.pin || (u ? `Loading…` : `—`) }),
            (0, $.jsx)(`p`, { className: `pin-wheel-meta`, children: T ? [T.address || `No address`, T.township, T.cls && `Class ${T.cls}`, T.use, T.year && `Assessor ${T.year}`].filter(Boolean).join(` · `) : `` }),
          ] }),
        ] }),
        (0, $.jsxs)(`div`, { className: `cr-drawer-foot`, children: [
          (0, $.jsx)(`button`, { type: `button`, className: `cr-go`, disabled: !T, "data-cr": `sample-use`, onClick: pick, children: `Use this property` }),
          (0, $.jsx)(`button`, { type: `button`, className: `btn`, onClick: e, children: `Cancel` }),
        ] }),
      ],
    }),
  });
}

var Zu = (() => {
  let e = te(`cca-example`);
  return { activeId: e.id, sheets: [e] };
})();
function Qu() {
  let [e, t] = (0, C.useState)(Zu),
    [n, r] = (0, C.useState)(!1),
    [i, a] = (0, C.useState)(!1),
    [o, s] = (0, C.useState)(!1),
    [c, l] = (0, C.useState)(``),
    [u, d] = (0, C.useState)(!1),
    [f, p] = (0, C.useState)(null);
  ((0, C.useEffect)(() => {
    crLoadRates();
    let e0 = crReadLocation(),
      r0 = crApplyHarvest(crOpenCase(he()), e0);
    crPrintOnLoad();
    ((crLastKey = JSON.stringify(e0)), (crStateRef = r0.state), t(r0.state), r(!0));
    r0.launch && l(r0.launch);
    let h0 = (e) => {
        let n = JSON.stringify(e);
        if (n === crLastKey) return;
        crLastKey = n;
        let r = crApplyHarvest(crStateRef, e);
        r.launch && ((crStateRef = r.state), t(r.state), l(r.launch), p(null));
      },
      n0 = () => h0(crReadLocation()),
      m0 = (e) => {
        if (e.source !== window.parent && e.source !== window.opener) return;
        let t = e.data;
        if (typeof t == `string`)
          try {
            t = JSON.parse(t);
          } catch {
            return;
          }
        t && typeof t == `object` && h0(t.attributes ?? t.feature?.attributes ?? t.data?.attributes ?? t);
      };
    (window.addEventListener(`hashchange`, n0),
      window.addEventListener(`popstate`, n0),
      window.addEventListener(`message`, m0));
    try {
      d(window.self !== window.top);
    } catch {
      d(!0);
    }
  }, []),
    (0, C.useEffect)(() => {
      n && ge(e);
    }, [e, n]));
  crStateRef = e;
  let g = e?.sheets.find((t) => t.id === e.activeId) ?? null,
    _ = (0, C.useMemo)(() => (g ? ue(g) : null), [g]);
  crIncomeCtx = { sheet: g, patch: v };
  (0, C.useEffect)(() => {
    if (!g || !f) return;
    let e = crCompactSales(f);
    e && e.pin14 === A(g.pin) && JSON.stringify(e) !== JSON.stringify(g.sales ?? null) && v({ sales: e });
  }, [f]);
  function v(e) {
    t(
      (t) =>
        t && {
          ...t,
          sheets: t.sheets.map((n) =>
            n.id === t.activeId ? { ...n, ...e } : n,
          ),
        },
    );
  }
  function x(e, n) {
    t(
      (t) =>
        t && {
          ...t,
          sheets: t.sheets.map((r) =>
            r.id === t.activeId ? { ...r, lines: { ...r.lines, [e]: n } } : r,
          ),
        },
    );
  }
  function D(e) {
    t((t) => t && { activeId: e.id, sheets: [e, ...t.sheets] });
  }
  function ee() {
    t((e) => {
      if (!e || e.sheets.length < 2) return e;
      let t = e.sheets.filter((t) => t.id !== e.activeId);
      return { activeId: t[0].id, sheets: t };
    });
  }
  async function ne() {
    let e = A(g?.pin ?? ``);
    e &&
      (await navigator.clipboard.writeText(e),
      s(!0),
      window.setTimeout(() => s(!1), 1600));
  }
  if (!g || !_ || !e)
    return (0, $.jsx)(`main`, { className: `min-h-dvh bg-bg` });
  let ae =
      g.currentAv > 0 && _.assessed != null ? _.assessed - g.currentAv : null,
    oe = g.currentAv > 0 && g.loa > 0 ? Math.round(g.currentAv / g.loa) : null,
    se = oe != null && _.concluded != null ? _.concluded - oe : null;
  return (0, $.jsx)(`main`, {
    className: `min-h-dvh bg-bg text-fg`,
    children: (0, $.jsxs)(`div`, {
      className: `cr-shell mx-auto w-full max-w-5xl px-4 pt-5 pb-16 sm:px-6`,
      children: [
        (0, $.jsxs)(`header`, {
          className: `flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between`,
          children: [
            (0, $.jsxs)(`div`, {
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-xs font-medium tracking-wide text-muted uppercase`,
                  children: `Cap & Review`,
                }),
                (0, $.jsx)(`h1`, {
                  className: `mt-1 font-display text-4xl leading-none text-balance text-fg`,
                  children: `2026 Commercial Reviews`,
                }),
                (0, $.jsx)(`p`, {
                  className: `mt-2 max-w-xl text-sm text-pretty text-muted`,
                  children: `Income approach, loaded cap rate, 2026 Assessor method. Enter the docket and PIN; the case fills from the Assessor data, then pick comps and print the review worksheet.`,
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `flex flex-wrap gap-2 no-print`,
              children: [
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  className: `btn`,
                  onClick: () => D(O()),
                  children: [
                    (0, $.jsx)(y, { className: `size-4`, "aria-hidden": !0 }),
                    `New case`,
                  ],
                }),
                (0, $.jsx)(`button`, {
                  type: `button`,
                  className: `btn`,
                  onClick: () => D(te()),
                  children: `Load example`,
                }),
              ],
            }),
          ],
        }),
        (0, $.jsxs)(`div`, {
          className: `mt-4 flex flex-col gap-3 no-print sm:flex-row sm:items-center`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 flex-col gap-1`,
              children: [
                (0, $.jsxs)(`label`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `text-xs font-medium tracking-wide text-muted uppercase`,
                      children: `Saved cases`,
                    }),
                    (0, $.jsx)(`select`, {
                      className: `field`,
                      value: g.id,
                      onChange: (e) =>
                        t((t) => t && { ...t, activeId: e.target.value }),
                      children: e?.sheets.map((e) =>
                        (0, $.jsx)(
                          `option`,
                          { value: e.id, children: cd(e) + (e.sample && !String(e.caseNumber || ``).trim() ? ` · ${CR_SAMPLE_LABEL}` : ``) },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, $.jsxs)(`p`, {
                  className: `text-xs text-pretty text-subtle`,
                  children: [
                    `Every case is saved in this browser. Switch cases here.`,
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`button`, {
              type: `button`,
              className: `btn self-end`,
              onClick: () => void ne(),
              disabled: !A(g.pin),
              children: [
                o
                  ? (0, $.jsx)(m, { className: `size-4`, "aria-hidden": !0 })
                  : (0, $.jsx)(h, { className: `size-4`, "aria-hidden": !0 }),
                o ? `Copied` : `Copy PIN`,
              ],
            }),
            (0, $.jsxs)(`button`, {
              type: `button`,
              className: `btn self-end`,
              onClick: ee,
              disabled: (e?.sheets.length ?? 0) < 2,
              children: [
                (0, $.jsx)(S, { className: `size-4`, "aria-hidden": !0 }),
                `Delete`,
              ],
            }),
          ],
        }),
        (0, $.jsx)(CrCasePanel, {
          result: _,
          summary: f,
          sheet: g,
          sheets: e.sheets,
          patch: v,
          onLookup: (e) => l(`${e}#${Date.now()}`),
          onExtract: (e) => {
            let t = crHarvestPatch(e);
            if (!t) return;
            let n = {};
            for (let [e, r] of Object.entries(t.sheet)) crEmpty(g[e]) && (n[e] = r);
            v({ ...n, subject: t.subject, subjectAt: new Date().toISOString() });
          },
        }),
        (0, $.jsx)(CrFold, { id: `case`, title: `Subject details`, children: [
        (0, $.jsx)(CrSubject, { sheet: g }),
        ] }),
        (0, $.jsx)(CrFold, { id: `sales`, title: `Sales map & comps`, children: [
        (0, $.jsx)(Du, {
          casePin: g.pin,
          subjectNra: g.nra,
          classId: g.classId,
          currentAv: g.currentAv,
          taxYear: g.taxYear,
          income: sd(g, _),
          launchPin: c,
          subjectLat: g.lat,
          subjectLng: g.lng,
          subjectLabel: g.address,
          manualComps: g.manualComps ?? [],
          onManualComps: (e) => v({ manualComps: e }),
          onApply: (e) => v(crMergeApply(e)),
          onApplyNew: (e) =>
            D({ ...O(), eqFactor: g.eqFactor, taxRate: g.taxRate, ...e, report: {} }),
          onSummary: p,
        }),
        (0, $.jsx)(Vu, {
          summary: f,
          loa: g.loa,
          incomeValue: _.concluded,
          income: sd(g, _),
        }),
        ] }),
        (0, $.jsx)(CrFold, { id: `income`, title: `Income`, children: [
        (0, $.jsx)(CrAssessorBar, { sheet: g, patch: v }),
        (0, $.jsxs)(`section`, {
          className: `mt-4 rounded-md border border-accent/40 bg-surface px-4 py-4`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex flex-wrap items-end justify-between gap-3`,
              children: [
                (0, $.jsxs)(`div`, {
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `text-xs font-medium tracking-wide text-muted uppercase`,
                      children: `Income approach`,
                    }),
                    (0, $.jsx)(`p`, {
                      className: `mt-1 text-xs font-medium tracking-wide text-muted uppercase`,
                      children: `Total new value`,
                    }),
                    (0, $.jsx)(`p`, {
                      className: `font-display text-3xl leading-none tabular-nums text-accent sm:text-4xl`,
                      children: j(_.concluded),
                    }),
                    (0, $.jsx)(`p`, {
                      className: `mt-1 text-xs text-subtle`,
                      children: `Concluded market value`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`dl`, {
                  className: `grid grid-cols-2 gap-x-6 gap-y-1 text-sm`,
                  children: [
                    (0, $.jsx)(`dt`, {
                      className: `text-muted`,
                      children: `New assessed value`,
                    }),
                    (0, $.jsx)(`dd`, {
                      className: `text-right tabular-nums`,
                      children: j(_.assessed),
                    }),
                    (0, $.jsx)(`dt`, {
                      className: `text-muted`,
                      children: `Original assessment`,
                    }),
                    (0, $.jsx)(`dd`, {
                      className: `text-right tabular-nums`,
                      children: g.currentAv > 0 ? j(g.currentAv) : `—`,
                    }),
                    (0, $.jsx)(`dt`, {
                      className: `text-muted`,
                      children: `Change`,
                    }),
                    (0, $.jsx)(`dd`, {
                      className: `text-right tabular-nums`,
                      children:
                        ae == null
                          ? `—`
                          : (0, $.jsxs)($.Fragment, {
                              children: [
                                j(ae),
                                (0, $.jsx)(`span`, {
                                  className: `ml-2 text-xs text-subtle`,
                                  children: M(ae / g.currentAv),
                                }),
                              ],
                            }),
                    }),
                    (0, $.jsx)(`dt`, {
                      className: `text-muted`,
                      children: `Equalized AV`,
                    }),
                    (0, $.jsx)(`dd`, {
                      className: `text-right tabular-nums`,
                      children: j(_.eav),
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`p`, {
              className: `mt-3 text-xs text-subtle`,
              children: [
                `Indicated `,
                j(_.indicated),
                ` before land and rounding to the nearest $1,000. Loaded cap `,
                M(_.loadedCap),
                `.`,
                se == null
                  ? ` Enter the original assessment on the worksheet to compare.`
                  : ` Value of the original assessment ${j(oe)}; value change ${j(se)}.`,
              ],
            }),
          ],
        }),
        (0, $.jsxs)(`div`, {
          className: `sheet-layout mt-6`,
          children: [
            (0, $.jsxs)(
              `div`,
              {
                className: `flex flex-col gap-6`,
                children: [
                  (0, $.jsxs)(ad, {
                    title: `Income`,
                    children: [
                      (0, $.jsx)(od, {
                        value: g.pgiMode,
                        onChange: (e) => v({ pgiMode: e }),
                        options: [
                          [`direct`, `Dollar PGI`],
                          [`perSf`, `Rent / sf`],
                          [`perUnit`, `Rent / unit`],
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `grid gap-3 sm:grid-cols-2`,
                        children: [
                          g.pgiMode === `direct`
                            ? (0, $.jsx)(ud, {
                                label: `Potential gross income`,
                                value: g.pgi, crKey: `pgi`,
                                prefix: `$`,
                                onChange: (e) => v({ pgi: e }),
                              })
                            : null,
                          g.pgiMode === `perSf`
                            ? (0, $.jsx)(ud, {
                                label: `Market rent`,
                                value: g.rentPerSf, crKey: `rentPerSf`,
                                prefix: `$`,
                                suffix: `/sf`,
                                digits: 2,
                                onChange: (e) => v({ rentPerSf: e }),
                              })
                            : null,
                          g.pgiMode === `perUnit`
                            ? (0, $.jsx)(ud, {
                                label: `Monthly rent / unit`,
                                value: g.rentPerUnitMonth,
                                prefix: `$`,
                                digits: 2,
                                onChange: (e) => v({ rentPerUnitMonth: e }),
                              })
                            : null,
                          (0, $.jsx)(ud, {
                            label: `Vacancy & collection`,
                            value: g.vacancyRate, crKey: `vacancyRate`,
                            scale: 100,
                            suffix: `%`,
                            onChange: (e) => v({ vacancyRate: e }),
                            hint: `Applied to rental PGI only`,
                          }),
                          (0, $.jsx)(ud, {
                            label: `Other income`,
                            value: g.otherIncome, crKey: `otherIncome`,
                            prefix: `$`,
                            onChange: (e) => v({ otherIncome: e }),
                            hint: `Not vacated`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(ad, {
                    title: `Expenses, excluding real estate tax`,
                    children: [
                      (0, $.jsx)(od, {
                        value: g.expenseMode,
                        onChange: (e) => v({ expenseMode: e }),
                        options: [
                          [`ratio`, `% of EGI`],
                          [`dollars`, `Lump sum`],
                          [`lines`, `Line items`],
                        ],
                      }),
                      g.expenseMode === `ratio`
                        ? (0, $.jsx)(ud, {
                            label: `Operating expense ratio`,
                            value: g.expenseRatio, crKey: `expenseRatio`,
                            scale: 100,
                            suffix: `%`,
                            onChange: (e) => v({ expenseRatio: e }),
                          })
                        : null,
                      g.expenseMode === `dollars`
                        ? (0, $.jsx)(ud, {
                            label: `Operating expenses`,
                            value: g.expenseDollars, crKey: `expenseDollars`,
                            prefix: `$`,
                            onChange: (e) => v({ expenseDollars: e }),
                          })
                        : null,
                      g.expenseMode === `lines`
                        ? (0, $.jsxs)(`div`, {
                            className: `grid gap-3 sm:grid-cols-2`,
                            children: [
                              (0, $.jsx)(ud, {
                                label: `Management`,
                                value: g.lines.management,
                                prefix: `$`,
                                onChange: (e) => x(`management`, e),
                              }),
                              (0, $.jsx)(ud, {
                                label: `Insurance`,
                                value: g.lines.insurance,
                                prefix: `$`,
                                onChange: (e) => x(`insurance`, e),
                              }),
                              (0, $.jsx)(ud, {
                                label: `Repairs & maintenance`,
                                value: g.lines.repairs,
                                prefix: `$`,
                                onChange: (e) => x(`repairs`, e),
                              }),
                              (0, $.jsx)(ud, {
                                label: `Utilities`,
                                value: g.lines.utilities,
                                prefix: `$`,
                                onChange: (e) => x(`utilities`, e),
                              }),
                              (0, $.jsx)(ud, {
                                label: `Reserves`,
                                value: g.lines.reserves,
                                prefix: `$`,
                                onChange: (e) => x(`reserves`, e),
                              }),
                              (0, $.jsx)(ud, {
                                label: `Other`,
                                value: g.lines.other,
                                prefix: `$`,
                                onChange: (e) => x(`other`, e),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, $.jsxs)(ad, {
                    title: `Cap rate and tax load`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `grid gap-3 sm:grid-cols-2`,
                        children: [
                          (0, $.jsx)(ud, {
                            label: `Market cap rate`,
                            value: g.marketCap, crKey: `marketCap`,
                            scale: 100,
                            suffix: `%`,
                            digits: 2,
                            onChange: (e) => v({ marketCap: e }),
                            hint: `Unloaded. From sales, surveys, or the file.`,
                          }),
                          (0, $.jsxs)(`label`, {
                            className: `flex flex-col gap-1`,
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `lbl`,
                                children: `Equalization factor`,
                              }),
                              (0, $.jsxs)(`select`, {
                                className: `field`,
                                value: pd(g.eqFactor),
                                onChange: (e) => {
                                  let t = T.find(
                                    (t) => t.id === e.target.value,
                                  );
                                  t &&
                                    v({
                                      eqFactor: t.factor,
                                      taxRateManual: !1,
                                      ...crRatePatch({ ...g, taxRateManual: !1 }, t.id),
                                    });
                                },
                                children: [
                                  T.map((e) =>
                                    (0, $.jsx)(
                                      `option`,
                                      { value: e.id, children: e.label },
                                      e.id,
                                    ),
                                  ),
                                  (0, $.jsx)(`option`, {
                                    value: `custom`,
                                    children: `Custom`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsx)(ud, {
                            label: `Factor`,
                            value: g.eqFactor,
                            digits: 4,
                            onChange: (e) => v({ eqFactor: e }),
                            hint: `Prior-year factor is the usual load`,
                          }),
                          (0, $.jsx)(ud, {
                            label: `Composite tax rate`,
                            value: g.taxRate,
                            scale: 100,
                            suffix: `%`,
                            digits: 3,
                            onChange: (e) =>
                              v({ taxRate: e, taxRateManual: !0, taxRateSource: `Entered by the analyst` }),
                            hint:
                              (g.taxCode ? `Tax code ${g.taxCode}. ` : ``) +
                              (g.taxRateSource || `District composite rate for the subject's tax code; it fills from the PIN lookup`),
                          }),
                          (0, $.jsx)(ud, {
                            label: `Additional land`,
                            value: g.additionalLand, crKey: `additionalLand`,
                            prefix: `$`,
                            onChange: (e) => v({ additionalLand: e }),
                            hint: `Excess land, added after the income value`,
                          }),
                          (0, $.jsx)(ud, {
                            label: `Original assessment`,
                            value: g.currentAv,
                            prefix: `$`,
                            onChange: (e) => v({ currentAv: e }),
                            hint: `The assessment on the books. Compared with the new value.`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`label`, {
                        className: `flex min-h-11 items-center gap-3 text-sm`,
                        children: [
                          (0, $.jsx)(`input`, {
                            type: `checkbox`,
                            className: `size-4 accent-accent`,
                            checked: g.compareUnloaded,
                            onChange: (e) =>
                              v({ compareUnloaded: e.target.checked }),
                          }),
                          `Also show the unloaded method (taxes as an expense)`,
                        ],
                      }),
                      g.compareUnloaded
                        ? (0, $.jsx)(ud, {
                            label: `Real estate taxes`,
                            value: g.reTax,
                            prefix: `$`,
                            onChange: (e) => v({ reTax: e }),
                            hint: `Deducted only in the unloaded column`,
                          })
                        : null,
                    ],
                  }),
                  (0, $.jsxs)(ad, {
                    title: `Property`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `grid gap-3 sm:grid-cols-2`,
                        children: [
                          (0, $.jsx)(ld, {
                            label: `Case name`,
                            value: g.name,
                            onChange: (e) => v({ name: e }),
                          }),
                          (0, $.jsx)(ld, {
                            label: `PIN`,
                            value: k(g.pin),
                            onChange: (e) => v({ pin: k(e) }),
                            inputMode: `numeric`,
                            hint: ie(g.pin)
                              ? (0, $.jsx)(bl, {
                                  pins: [g.pin],
                                  size: `primary`,
                                })
                              : `14 digits`,
                          }),
                          (0, $.jsx)(ld, {
                            label: `Address`,
                            value: g.address,
                            onChange: (e) => v({ address: e }),
                          }),
                          (0, $.jsxs)(`label`, {
                            className: `flex flex-col gap-1`,
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `lbl`,
                                children: `Township`,
                              }),
                              (0, $.jsx)(`input`, {
                                className: `field`,
                                list: `townships`,
                                value: g.township,
                                onChange: (e) =>
                                  v({ township: e.target.value }),
                              }),
                              (0, $.jsx)(`datalist`, {
                                id: `townships`,
                                children: E.map((e) =>
                                  (0, $.jsx)(`option`, { value: e }, e),
                                ),
                              }),
                            ],
                          }),
                          (0, $.jsx)(ud, {
                            label: `Tax year`,
                            value: g.taxYear,
                            onChange: (e) => v({ taxYear: e }),
                          }),
                          (0, $.jsxs)(`label`, {
                            className: `flex flex-col gap-1`,
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `lbl`,
                                children: `Class`,
                              }),
                              (0, $.jsx)(`select`, {
                                className: `field`,
                                value: g.classId,
                                onChange: (e) => {
                                  let t = e.target.value,
                                    n = w.find((e) => e.id === t);
                                  v({
                                    classId: t,
                                    loa: n && t !== `custom` ? n.loa : g.loa,
                                  });
                                },
                                children: w.map((e) =>
                                  (0, $.jsx)(
                                    `option`,
                                    { value: e.id, children: e.label },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`p`, {
                        className: `text-xs text-subtle`,
                        children: [
                          w.find((e) => e.id === g.classId)?.note,
                          `. Level is editable if the ordinance class does not match the file.`,
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `grid gap-3 sm:grid-cols-3`,
                        children: [
                          (0, $.jsx)(ud, {
                            label: `Level of assessment`,
                            value: g.loa,
                            scale: 100,
                            suffix: `%`,
                            onChange: (e) =>
                              v({ loa: e, classId: md(e, g.classId) }),
                          }),
                          (0, $.jsx)(ud, {
                            label: `Net rentable area`,
                            value: g.nra, crKey: `nra`,
                            suffix: `sf`,
                            onChange: (e) => v({ nra: e }),
                          }),
                          (0, $.jsx)(ud, {
                            label: `Units`,
                            value: g.units, crKey: `units`,
                            onChange: (e) => v({ units: e }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsx)(Xu, {
                    address: g.address,
                    township: g.township,
                    lat: g.lat,
                    lng: g.lng,
                    heading: g.heading,
                    onPlace: (e) => v(e),
                    onHeading: (e) => v({ heading: e }),
                  }),
                  u
                    ? null
                    : (0, $.jsxs)(`section`, {
                        className: `no-print overflow-hidden rounded-md border border-border bg-surface`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-2 border-b border-border px-4 py-3`,
                            children: [
                              (0, $.jsx)(`h2`, {
                                className: `font-display text-xl leading-none`,
                                children: `Chicago commercial`,
                              }),
                              (0, $.jsx)(`a`, {
                                className: `btn`,
                                href: jl,
                                target: `_blank`,
                                rel: `noreferrer`,
                                children: `Open`,
                              }),
                            ],
                          }),
                          (0, $.jsx)(`iframe`, {
                            title: `Chicago commercial`,
                            src: jl,
                            className: `cr-ebmap h-[min(70vh,760px)] min-h-[520px] w-full bg-bg`,
                            allow: `fullscreen; geolocation`,
                          }),
                        ],
                      }),
                  (0, $.jsx)(ad, {
                    title: `Note`,
                    children: (0, $.jsx)(`textarea`, {
                      className: `field min-h-24 resize-y`,
                      value: g.note,
                      onChange: (e) => v({ note: e.target.value }),
                      placeholder: `Source of rent, vacancy, cap rate, or why this class.`,
                    }),
                  }),
                ],
              },
              g.id,
            ),
            (0, $.jsxs)(`aside`, {
              className: `print-sheet rounded-md border border-border bg-surface`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-2 border-b border-border px-4 py-3`,
                  children: [
                    (0, $.jsx)(`h2`, {
                      className: `font-display text-xl leading-none`,
                      children: `Income worksheet`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `px-4 py-3`,
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `text-sm text-fg`,
                      children: g.name,
                    }),
                    A(g.pin)
                      ? (0, $.jsx)(`p`, {
                          className: `mt-1 text-sm tabular-nums text-fg`,
                          children: A(g.pin),
                        })
                      : null,
                    (0, $.jsx)(`p`, {
                      className: `mt-1 text-xs text-muted`,
                      children: [
                        g.caseNumber ? `Docket / Complaint # ${g.caseNumber}` : `No docket entered`,
                        g.analyst ? ` · Analyst ${g.analyst}` : ``,
                      ].join(``),
                    }),
                    (0, $.jsxs)(`p`, {
                      className: `mt-1 text-xs text-muted`,
                      children: [
                        (0, $.jsx)(bl, { pins: g.pin ? [g.pin] : [] }),
                        [g.township, g.taxYear ? String(g.taxYear) : ``].filter(
                          Boolean,
                        ).length
                          ? ` · ${[g.township, g.taxYear ? String(g.taxYear) : ``].filter(Boolean).join(` · `)}`
                          : ``,
                      ],
                    }),
                    (0, $.jsxs)(`p`, {
                      className: `mt-1 text-xs text-subtle`,
                      children: [pe(g), ` · LOA `, M(g.loa)],
                    }),
                    (0, $.jsx)(`p`, {
                      className: `mt-1 text-xs text-subtle`,
                      children: `Underlined figures are editable. Totals recalculate against the original assessment.`,
                    }),
                    (0, $.jsx)($u, { result: _, sheet: g, patch: v }, g.id),
                    _.perSf != null || _.perUnit != null
                      ? (0, $.jsxs)(`div`, {
                          className: `mt-3 border-t border-border pt-3 text-sm`,
                          children: [
                            _.perSf == null
                              ? null
                              : (0, $.jsx)(id, {
                                  label: `Per square foot`,
                                  value: j(_.perSf, 2),
                                }),
                            _.perUnit == null
                              ? null
                              : (0, $.jsx)(id, {
                                  label: `Per unit`,
                                  value: j(_.perUnit),
                                }),
                          ],
                        })
                      : null,
                    _.unloaded
                      ? (0, $.jsxs)(`div`, {
                          className: `mt-3 border-t border-border pt-3 text-sm`,
                          children: [
                            (0, $.jsx)(`p`, {
                              className: `text-xs font-medium tracking-wide text-muted uppercase`,
                              children: `Unloaded`,
                            }),
                            (0, $.jsx)(id, {
                              label: `NOI after taxes`,
                              value: j(_.unloaded.noi),
                            }),
                            (0, $.jsx)(id, {
                              label: `Concluded value`,
                              value: j(_.unloaded.concluded),
                            }),
                            (0, $.jsx)(id, {
                              label: `Assessed value`,
                              value: j(_.unloaded.assessed),
                            }),
                          ],
                        })
                      : null,
                    (0, $.jsxs)(`p`, {
                      className: `mt-4 text-xs text-pretty text-subtle`,
                      children: [
                        `Tax load = `,
                        M(g.loa),
                        ` × `,
                        de(g.eqFactor, 4),
                        ` × `,
                        M(g.taxRate, 3),
                        ` =`,
                        ` `,
                        M(_.taxLoad),
                        `. Working paper only. Confirm the class, the factor, and the township rate before you use the number.`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        ] }),
        (0, $.jsx)(CrFold, { id: `reports`, title: `Reports`, children: (0, $.jsx)(CrReport, { sheet: g, result: _, summary: f, patch: v }) }),
      ],
    }),
  });
}
function $u({ result: e, sheet: t, patch: n }) {
  let r =
      t.currentAv > 0 && e.assessed != null ? e.assessed - t.currentAv : null,
    i = t.currentAv > 0 && t.loa > 0 ? Math.round(t.currentAv / t.loa) : null,
    a = i != null && e.concluded != null ? e.concluded - i : null;
  function o(e) {
    n({ expenseMode: `dollars`, expenseDollars: Math.max(0, e) });
  }
  function s(e) {
    n({ expenseMode: `ratio`, expenseRatio: Math.max(0, e) });
  }
  function c(t) {
    e.pgi > 0 && n({ vacancyRate: Math.abs(t) / e.pgi });
  }
  function l(e) {
    let r = t.loa * t.eqFactor;
    r > 0 && n({ taxRate: Math.max(0, e) / r });
  }
  let u =
    t.expenseMode === `ratio`
      ? t.expenseRatio
      : e.egi === 0
        ? 0
        : e.operatingExpenses / e.egi;
  return (0, $.jsxs)(`div`, {
    className: `mt-3 text-sm`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `border-b border-border pb-3`,
        children: [
          (0, $.jsx)(`p`, {
            className: `text-xs font-medium tracking-wide text-muted uppercase`,
            children: `Against the original assessment`,
          }),
          (0, $.jsx)(ed, {
            field: `original`,
            label: `Original assessment`,
            kind: `money`,
            value: t.currentAv,
            onChange: (e) => n({ currentAv: Math.max(0, e) }),
          }),
          (0, $.jsx)(id, {
            label: `Total new value`,
            value: j(e.concluded),
            strong: !0,
          }),
          (0, $.jsx)(id, {
            label: `New assessed value`,
            value: j(e.assessed),
            strong: !0,
          }),
          (0, $.jsx)(id, {
            label: `Assessment change`,
            value: r == null ? `—` : j(r),
            hint: r != null && t.currentAv ? M(r / t.currentAv) : void 0,
            strong: !0,
          }),
          (0, $.jsx)(id, { label: `Value of original`, value: j(i) }),
          (0, $.jsx)(id, {
            label: `Value change`,
            value: a == null ? `—` : j(a),
            strong: !0,
          }),
        ],
      }),
      (0, $.jsx)(ed, {
        field: `pgi`,
        label: `Potential gross income`,
        kind: `money`,
        value: t.pgiMode === `direct` ? t.pgi : e.pgi,
        onChange: (e) => n({ pgiMode: `direct`, pgi: Math.max(0, e) }),
      }),
      (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 py-0.5`,
        children: [
          (0, $.jsxs)(`span`, {
            className: `flex min-w-0 flex-wrap items-center gap-1 text-muted`,
            children: [
              `Vacancy`,
              (0, $.jsx)(td, {
                field: `vacancy-rate`,
                label: `Vacancy and collection rate`,
                kind: `pct`,
                value: t.vacancyRate,
                onChange: (e) => n({ vacancyRate: Math.max(0, e) }),
              }),
            ],
          }),
          (0, $.jsx)(td, {
            field: `vacancy`,
            label: `Vacancy and collection`,
            kind: `money`,
            signed: !0,
            value: e.vacancy,
            onChange: c,
          }),
        ],
      }),
      (0, $.jsx)(ed, {
        field: `other-income`,
        label: `Other income`,
        kind: `money`,
        value: t.otherIncome,
        onChange: (e) => n({ otherIncome: e }),
      }),
      (0, $.jsx)(id, {
        label: `Effective gross income`,
        value: j(e.egi),
        strong: !0,
      }),
      (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 py-0.5`,
        children: [
          (0, $.jsxs)(`span`, {
            className: `flex min-w-0 flex-wrap items-center gap-1 text-muted`,
            children: [
              `Operating expenses`,
              (0, $.jsx)(td, {
                field: `expense-ratio`,
                label: `Operating expense ratio`,
                kind: `pct`,
                value: u,
                onChange: s,
              }),
            ],
          }),
          (0, $.jsx)(td, {
            field: `expenses`,
            label: `Operating expenses`,
            kind: `money`,
            signed: !0,
            value: e.operatingExpenses,
            onChange: o,
          }),
        ],
      }),
      (0, $.jsx)(id, {
        label: `Net operating income`,
        value: j(e.noi),
        strong: !0,
      }),
      (0, $.jsx)(ed, {
        field: `market-cap`,
        label: `Market cap`,
        kind: `pct`,
        digits: 2,
        value: t.marketCap,
        onChange: (e) => n({ marketCap: Math.max(0, e) }),
      }),
      (0, $.jsx)(ed, {
        field: `tax-load`,
        label: `Tax load`,
        kind: `pct`,
        digits: 2,
        value: e.taxLoad,
        onChange: l,
      }),
      (0, $.jsx)(id, {
        label: `Loaded cap`,
        value: M(e.loadedCap),
        strong: !0,
      }),
      (0, $.jsx)(id, { label: `Indicated value`, value: j(e.indicated) }),
      (0, $.jsx)(ed, {
        field: `land`,
        label: `Additional land`,
        kind: `money`,
        value: t.additionalLand,
        onChange: (e) => n({ additionalLand: e }),
      }),
      (0, $.jsx)(ed, {
        field: `loa`,
        label: `Level of assessment`,
        kind: `pct`,
        value: t.loa,
        onChange: (e) =>
          n({ loa: Math.max(0, e), classId: md(Math.max(0, e), t.classId) }),
      }),
      (0, $.jsx)(id, {
        label: `Total new value`,
        value: j(e.concluded),
        strong: !0,
      }),
      (0, $.jsx)(id, {
        label: `New assessed value`,
        value: j(e.assessed),
        strong: !0,
      }),
      (0, $.jsx)(id, { label: `Equalized AV`, value: j(e.eav) }),
    ],
  });
}
function ed({
  field: e,
  label: t,
  value: n,
  onChange: r,
  kind: i,
  digits: a,
  signed: o,
}) {
  return (0, $.jsxs)(`div`, {
    className: `flex items-center justify-between gap-3 py-0.5`,
    children: [
      (0, $.jsx)(`span`, { className: `min-w-0 text-muted`, children: t }),
      (0, $.jsx)(td, {
        field: e,
        label: t,
        kind: i,
        digits: a,
        signed: o,
        value: n,
        onChange: r,
      }),
    ],
  });
}
function td({
  field: e,
  label: t,
  value: n,
  onChange: r,
  kind: i,
  digits: a,
  signed: o,
}) {
  let s = i === `pct` ? 100 : 1,
    c = a ?? (i === `pct` ? 2 : 0),
    [l, u] = (0, C.useState)(!1),
    [d, f] = (0, C.useState)(``),
    p = l ? d : nd(n, i, s, c, !!o);
  function m(e) {
    let t = e.replace(/[$,%\s]/g, ``);
    if (t === `` || t === `.` || t === `-` || t === `-.`) {
      n !== 0 && r(0);
      return;
    }
    if (t.endsWith(`.`) || !/^-?\d*\.?\d+$/.test(t)) return;
    let a = fd(t, s);
    if (!Number.isFinite(a)) return;
    let l = o ? Math.abs(a) : a,
      u = i === `money` ? Math.round(l) : l,
      d = o ? Math.abs(n) : n,
      f = i === `money` ? 0.5 : 0.5 / 10 ** c / s;
    Math.abs(d - u) < f || r(u);
  }
  return (0, $.jsxs)(`span`, {
    className: `inline-flex shrink-0 items-center justify-end`,
    children: [
      i === `money`
        ? (0, $.jsx)(`span`, {
            "aria-hidden": !0,
            className: `text-muted`,
            children: o && n ? `−$` : `$`,
          })
        : null,
      (0, $.jsx)(`input`, {
        "aria-label": t,
        "data-field": e,
        className: `sheet-num ${i === `pct` ? `is-short` : ``}`,
        inputMode: `decimal`,
        placeholder: `0`,
        value: p,
        onFocus: (e) => {
          let t = rd(o ? Math.abs(n) : n, s, c);
          (u(!0), f(t), requestAnimationFrame(() => e.currentTarget.select()));
        },
        onBlur: () => {
          (u(!1), m(d));
        },
        onChange: (e) => {
          let t = e.target.value;
          (f(t), m(t));
        },
      }),
      i === `pct`
        ? (0, $.jsx)(`span`, {
            "aria-hidden": !0,
            className: `text-muted`,
            children: `%`,
          })
        : null,
    ],
  });
}
function nd(e, t, n, r, i) {
  let a = i ? Math.abs(e) : e;
  if (t === `money`) {
    let t = i ? Math.abs(e) : e;
    return !Number.isFinite(t) || t === 0
      ? ``
      : Math.round(t).toLocaleString(`en-US`);
  }
  return rd(a, n, r);
}
function rd(e, t, n) {
  if (!Number.isFinite(e) || e === 0) return ``;
  let r = e * t,
    i = Math.round(r * 10 ** n) / 10 ** n;
  return String(i);
}
function id({ label: e, value: t, strong: n, hint: r }) {
  return (0, $.jsxs)(`div`, {
    className: `flex items-baseline justify-between gap-3 py-1 ${n ? `font-medium` : ``}`,
    children: [
      (0, $.jsx)(`span`, { className: `text-muted`, children: e }),
      (0, $.jsxs)(`span`, {
        className: `text-right tabular-nums text-fg`,
        children: [
          t,
          r
            ? (0, $.jsx)(`span`, {
                className: `ml-2 text-xs text-subtle`,
                children: r,
              })
            : null,
        ],
      }),
    ],
  });
}
function ad({ title: e, children: t }) {
  return (0, $.jsxs)(`section`, {
    className: `flex flex-col gap-3`,
    children: [
      (0, $.jsx)(`h2`, {
        className: `font-display text-2xl leading-none`,
        children: e,
      }),
      t,
    ],
  });
}
function od({ value: e, onChange: t, options: n }) {
  return (0, $.jsx)(`div`, {
    className: `flex flex-wrap gap-2`,
    children: n.map(([n, r]) =>
      (0, $.jsx)(
        `button`,
        {
          type: `button`,
          className: `min-h-11 rounded-sm border px-3 text-sm ${e === n ? `border-accent bg-accent text-accent-fg` : `border-border bg-surface text-fg`}`,
          onClick: () => t(n),
          children: r,
        },
        n,
      ),
    ),
  });
}
function sd(e, t) {
  return {
    caseNumber: A(e.pin),
    name: e.name,
    loa: e.loa,
    originalAv: e.currentAv,
    pgi: t.pgi,
    vacancy: t.vacancy,
    egi: t.egi,
    expenses: t.operatingExpenses,
    noi: t.noi,
    marketCap: e.marketCap,
    taxLoad: t.taxLoad,
    loadedCap: t.loadedCap,
    indicated: t.indicated,
    concluded: t.concluded,
    assessed: t.assessed,
  };
}
function cd(e) {
  let t = A(e.pin),
    n = e.name.trim();
  return t && n ? `${t} · ${n}` : t || n || `Untitled case`;
}
function ld({ label: e, value: t, onChange: n, hint: r, inputMode: i }) {
  return (0, $.jsxs)(`div`, {
    className: `flex flex-col gap-1`,
    children: [
      (0, $.jsxs)(`label`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, $.jsx)(`span`, { className: `lbl`, children: e }),
          (0, $.jsx)(`input`, {
            className: `field`,
            value: t,
            inputMode: i,
            onChange: (e) => n(e.target.value),
          }),
        ],
      }),
      r
        ? (0, $.jsx)(`span`, { className: `text-xs text-subtle`, children: r })
        : null,
    ],
  });
}
function ud({
  crKey: ck,
  label: e,
  value: t,
  onChange: n,
  scale: r = 1,
  prefix: i,
  suffix: a,
  hint: o,
  digits: s = 4,
}) {
  let [c, l] = (0, C.useState)(!1),
    [u, d] = (0, C.useState)(``),
    f = c ? u : dd(t, r, s);
  return (0, $.jsxs)(`label`, {
    className: `flex flex-col gap-1`,
    "data-field": ck,
    children: [
      (0, $.jsxs)(`span`, { className: `lbl flex items-center gap-2`, children: [e, ck ? (0, $.jsx)(CrSrcTag, { k: ck }) : null] }),
      (0, $.jsxs)(`span`, {
        className: `cr-ud flex min-h-11 items-center gap-2 rounded-sm border border-border bg-surface px-3 focus-within:border-accent`,
        children: [
          i
            ? (0, $.jsx)(`span`, {
                className: `text-sm text-muted`,
                children: i,
              })
            : null,
          (0, $.jsx)(`input`, {
            className: `w-full bg-transparent text-base tabular-nums text-fg outline-none`,
            inputMode: `decimal`,
            placeholder: `0`,
            value: f,
            onFocus: () => {
              (l(!0), d(dd(t, r, s)));
            },
            onBlur: () => {
              (l(!1), n(fd(u, r)));
            },
            onChange: (e) => {
              let t = e.target.value;
              if (
                (d(t),
                t.trim() === `` || t === `.` || t === `-` || t.endsWith(`.`))
              )
                return;
              let i = fd(t, r);
              Number.isFinite(i) && n(i);
            },
          }),
          a
            ? (0, $.jsx)(`span`, {
                className: `text-sm text-muted`,
                children: a,
              })
            : null,
        ],
      }),
      o
        ? (0, $.jsx)(`span`, { className: `text-xs text-subtle`, children: o })
        : null,
    ],
  });
}
function dd(e, t, n) {
  if (!e) return ``;
  let r = e * t,
    i = Math.round(r * 10 ** n) / 10 ** n;
  return String(i);
}
function fd(e, t) {
  let n = e.replace(/,/g, ``).trim();
  if (!n || n === `.` || n === `-`) return 0;
  let r = Number(n);
  return Number.isFinite(r) ? r / t : 0;
}
function pd(e) {
  return T.find((t) => Math.abs(t.factor - e) < 1e-7)?.id ?? `custom`;
}
function md(e, t) {
  let n = w.find((e) => e.id === t);
  return t !== `custom` && n && Math.abs(n.loa - e) < 1e-7 ? t : `custom`;
}
function hd() {
  return (0, $.jsx)(Qu, {});
}
export { hd as component };
