var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    "use strict";
    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
        [45186], {
            20241: (t, e, s) => {
                s.d(e, {
                    dj: () => c,
                    oR: () => b
                });
                var p = s(12115);
                let a = 0,
                    n = new Map,
                    f = t => {
                        if (n.has(t)) return;
                        let e = setTimeout(() => {
                            n.delete(t), d({
                                type: "REMOVE_TOAST",
                                toastId: t
                            })
                        }, 1e6);
                        n.set(t, e)
                    },
                    i = (t, e) => {
                        switch (e.type) {
                            case "ADD_TOAST":
                                return {
                                    ...t, toasts: [e.toast, ...t.toasts].slice(0, 1)
                                };
                            case "UPDATE_TOAST":
                                return {
                                    ...t, toasts: t.toasts.map(t => t.id === e.toast.id ? {
                                        ...t,
                                        ...e.toast
                                    } : t)
                                };
                            case "DISMISS_TOAST": {
                                let {
                                    toastId: s
                                } = e;
                                return s ? f(s) : t.toasts.forEach(t => {
                                    f(t.id)
                                }), {
                                    ...t,
                                    toasts: t.toasts.map(t => t.id === s || void 0 === s ? {
                                        ...t,
                                        open: !1
                                    } : t)
                                }
                            }
                            case "REMOVE_TOAST":
                                if (void 0 === e.toastId) return {
                                    ...t,
                                    toasts: []
                                };
                                return {
                                    ...t, toasts: t.toasts.filter(t => t.id !== e.toastId)
                                }
                        }
                    },
                    o = [],
                    r = {
                        toasts: []
                    };

                function d(t) {
                    r = i(r, t), o.forEach(t => {
                        t(r)
                    })
                }

                function b(t) {
                    let {
                        ...e
                    } = t, s = (a = (a + 1) % Number.MAX_SAFE_INTEGER).toString(), p = () => d({
                        type: "DISMISS_TOAST",
                        toastId: s
                    });
                    return d({
                        type: "ADD_TOAST",
                        toast: {
                            ...e,
                            id: s,
                            open: !0,
                            onOpenChange: t => {
                                t || p()
                            }
                        }
                    }), {
                        id: s,
                        dismiss: p,
                        update: t => d({
                            type: "UPDATE_TOAST",
                            toast: {
                                ...t,
                                id: s
                            }
                        })
                    }
                }

                function c() {
                    let [t, e] = p.useState(r);
                    return p.useEffect(() => (o.push(e), () => {
                        let t = o.indexOf(e);
                        t > -1 && o.splice(t, 1)
                    }), [t]), {
                        ...t,
                        toast: b,
                        dismiss: t => d({
                            type: "DISMISS_TOAST",
                            toastId: t
                        })
                    }
                }
            },
            29602: (t, e, s) => {
                s.d(e, {
                    cn: () => n
                });
                var p = s(43463),
                    a = s(69795);

                function n() {
                    for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                    return (0, a.QP)((0, p.$)(e))
                }
            },
            64106: (t, e, s) => {
                s.d(e, {
                    S: () => p
                });
                let p = (0, s(54685).N)({
                    clientId: "fab52d828afb2b0d77531d1be007ff7f"
                })
            },
            87729: (t, e, s) => {
                s.d(e, {
                    MP: () => b,
                    TI: () => r,
                    V2: () => i,
                    eC: () => o,
                    kW: () => c,
                    u3: () => d,
                    xO: () => u
                });
                var p = s(32068),
                    a = s(64106),
                    n = s(78144),
                    f = s(38472);
                let i = "https://web.archive.org/web/20250615234246/https://predict.fishtank.live/",
                    o = 6,
                    r = "0x137e83634A3FFe8698d7Aa35B14EcA8F90f5F701",
                    d = "0x109450B2f2E0A27B845abbF6B058d230Cb1a39e2",
                    b = ["/pfps/1.png", "/pfps/alex.webp", "/pfps/alexis.webp", "/pfps/binx.webp", "/pfps/burt.webp", "/pfps/ian.webp", "/pfps/laron.webp", "/pfps/luke.webp", "/pfps/mizzy.webp", "/pfps/payton.webp", "/pfps/simbal.webp", "/pfps/smaack.webp", "/pfps/ted.webp"],
                    c = (0, p.P)({
                        client: a.S,
                        chain: n.E,
                        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                        abi: f.xw
                    }),
                    u = (0, p.P)({
                        client: a.S,
                        chain: n.E,
                        address: r
                    })
            }
        }
    ]);

}
/*
     FILE ARCHIVED ON 23:42:46 Jun 15, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:27:11 Jul 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.487
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 16.069
  LoadShardBlock: 178.985 (3)
  PetaboxLoader3.datanode: 246.112 (5)
  load_resource: 402.794 (2)
  PetaboxLoader3.resolve: 271.393 (2)
*/