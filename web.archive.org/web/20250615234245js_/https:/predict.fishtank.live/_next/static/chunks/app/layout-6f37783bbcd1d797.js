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

    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
        [7177], {
            10657: (e, t, s) => {
                "use strict";
                s.d(t, {
                    default: () => j
                });
                var r = s(95155),
                    a = s(12115),
                    o = s(20241),
                    i = s(9930),
                    n = s(31027),
                    l = s(40767),
                    c = s(29602);
                let d = i.Kq,
                    u = a.forwardRef((e, t) => {
                        let {
                            className: s,
                            ...a
                        } = e;
                        return (0, r.jsx)(i.LM, {
                            ref: t,
                            className: (0, c.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", s),
                            ...a
                        })
                    });
                u.displayName = i.LM.displayName;
                let m = (0, n.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
                        variants: {
                            variant: {
                                default: "border bg-background text-foreground",
                                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
                            }
                        },
                        defaultVariants: {
                            variant: "default"
                        }
                    }),
                    f = a.forwardRef((e, t) => {
                        let {
                            className: s,
                            variant: a,
                            ...o
                        } = e;
                        return (0, r.jsx)(i.bL, {
                            ref: t,
                            className: (0, c.cn)(m({
                                variant: a
                            }), s),
                            ...o
                        })
                    });
                f.displayName = i.bL.displayName, a.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...a
                    } = e;
                    return (0, r.jsx)(i.rc, {
                        ref: t,
                        className: (0, c.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", s),
                        ...a
                    })
                }).displayName = i.rc.displayName;
                let h = a.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...a
                    } = e;
                    return (0, r.jsx)(i.bm, {
                        ref: t,
                        className: (0, c.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", s),
                        "toast-close": "",
                        ...a,
                        children: (0, r.jsx)(l.A, {
                            className: "h-4 w-4"
                        })
                    })
                });
                h.displayName = i.bm.displayName;
                let x = a.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...a
                    } = e;
                    return (0, r.jsx)(i.hE, {
                        ref: t,
                        className: (0, c.cn)("text-sm font-semibold", s),
                        ...a
                    })
                });
                x.displayName = i.hE.displayName;
                let p = a.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...a
                    } = e;
                    return (0, r.jsx)(i.VY, {
                        ref: t,
                        className: (0, c.cn)("text-sm opacity-90", s),
                        ...a
                    })
                });

                function g() {
                    let {
                        toasts: e
                    } = (0, o.dj)();
                    return (0, r.jsxs)(d, {
                        children: [e.map(function(e) {
                            let {
                                id: t,
                                title: s,
                                description: a,
                                action: o,
                                ...i
                            } = e;
                            return (0, r.jsxs)(f, {
                                ...i,
                                children: [(0, r.jsxs)("div", {
                                    className: "grid gap-1",
                                    children: [s && (0, r.jsx)(x, {
                                        children: s
                                    }), a && (0, r.jsx)(p, {
                                        children: a
                                    })]
                                }), o, (0, r.jsx)(h, {})]
                            }, t)
                        }), (0, r.jsx)(u, {})]
                    })
                }
                p.displayName = i.VY.displayName;
                var v = s(55571),
                    b = s(21666);
                let j = e => {
                    let {
                        children: t
                    } = e, [s, o] = (0, a.useState)(!1);
                    return (0, a.useEffect)(() => {
                        o(!0)
                    }, []), (0, r.jsx)(r.Fragment, {
                        children: s && (0, r.jsx)(b.X, {
                            children: (0, r.jsxs)(v.T, {
                                children: [(0, r.jsx)(g, {}), t]
                            })
                        })
                    })
                }
            },
            11030: (e, t, s) => {
                "use strict";
                s.d(t, {
                    default: () => P
                });
                var r = s(95155),
                    a = s(12115),
                    o = s(5565),
                    i = s(48173),
                    n = s.n(i),
                    l = s(18676),
                    c = s(73571),
                    d = s(87729),
                    u = s(69596),
                    m = s(40297),
                    f = s(89888),
                    h = s(55571),
                    x = s(64106),
                    p = s(28869),
                    g = s(73836),
                    v = s(97727),
                    b = s(74306),
                    j = s(41112),
                    N = s(78144),
                    w = s(31720),
                    k = s(31439);

                function y() {
                    let e = (0, v.L)(),
                        {
                            connect: t
                        } = (0, p.V)();
                    (0, g.I6)();
                    let {
                        displayName: s,
                        pfpString: i
                    } = (0, h.R)(), [n, y] = (0, a.useState)(!1), [E, C] = (0, a.useState)(0), {
                        data: P
                    } = (0, j.Q)({
                        contract: d.xO,
                        method: "function getUserBalanceWithCredits(address user) returns (uint256)",
                        params: [(null == e ? void 0 : e.address) || m.Xd],
                        queryOptions: {
                            enabled: !!e,
                            refetchInterval: 3e3
                        }
                    });
                    async function F() {
                        try {
                            let e = await t({
                                client: x.S,
                                theme: "dark",
                                chain: N.E,
                                appMetadata: {
                                    name: "Fishtank Prediction Market",
                                    description: "Predict the outcome of various events for FishTank Season 4 and Beyond",
                                    url: "https://web.archive.org/web/20250615234246/https://predict.fishtank.live",
                                    logoUrl: "/icons/Logo_192px_Black.png"
                                },
                                wallets: [(0, w.q)({
                                    auth: {
                                        options: ["google", "apple", "telegram", "discord", "email", "passkey", "facebook", "twitch"]
                                    },
                                    smartAccount: {
                                        chain: N.E,
                                        sponsorGas: !0
                                    }
                                }), (0, k.i)("io.metamask"), (0, k.i)("com.coinbase.wallet")]
                            });
                            console.log("connected to", e)
                        } catch (e) {
                            e && console.error("Error connecting wallet:", e)
                        }
                    }
                    return (0, a.useEffect)(() => {
                        P && C(parseFloat((0, f.J)(P, d.eC)))
                    }, [P]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(b.C, {
                            client: x.S,
                            chain: N.E,
                            timeout: 1e4,
                            onConnect: () => console.log("Auto Connected To Wallet"),
                            onTimeout: () => console.log("Auto Connect Timeout"),
                            appMetadata: {
                                name: "Fishtank Prediction Market",
                                description: "Predict the outcome of various events for FishTank Season 4 and Beyond",
                                url: "https://web.archive.org/web/20250615234246/https://predict.fishtank.live",
                                logoUrl: "/icons/Logo_192px_Black.png"
                            },
                            wallets: [(0, w.q)({
                                auth: {
                                    options: ["google", "apple", "telegram", "discord", "email", "passkey", "facebook", "twitch"]
                                },
                                smartAccount: {
                                    chain: N.E,
                                    sponsorGas: !0
                                }
                            }), (0, k.i)("io.metamask"), (0, k.i)("com.coinbase.wallet")]
                        }), n && (0, r.jsx)(l.z, {
                            wider: !0,
                            onClose: () => y(!1),
                            children: (0, r.jsx)(c.A, {
                                setShowUserModal: y
                            })
                        }), e ? (0, r.jsxs)("button", {
                            onClick: () => y(!0),
                            className: "cursor-pointer px-2 py-1 rounded-[2px] border border-[#4E4E4E] flex gap-3 items-center",
                            children: [(0, r.jsxs)("div", {
                                className: "self-end text-right",
                                children: [(0, r.jsx)("p", {
                                    className: "text-base font-medium",
                                    children: s ? s.length > 10 ? "".concat(s.slice(0, 10), "...") : s : e ? "".concat(e.address.slice(0, 6), "...").concat(e.address.slice(-4)) : "Log In"
                                }), (0, r.jsx)("p", {
                                    className: "font-light text-sm text-[#DF7026]",
                                    children: e ? E ? "$".concat(E.toLocaleString([], {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })) : "$0.00" : ""
                                })]
                            }), (0, r.jsx)("div", {
                                className: "bg-[#07090A] size-12 flex justify-center items-center rounded-sm p-1",
                                children: (0, r.jsx)(o.default, {
                                    src: i && (0, u.rP)(i) ? i : d.MP[0],
                                    alt: "User icon",
                                    width: 44,
                                    height: 44
                                })
                            })]
                        }) : (0, r.jsxs)("button", {
                            onClick: F,
                            className: "cursor-pointer flex gap-2 font-medium text-base items-center",
                            children: [(0, r.jsx)("p", {
                                children: "log in"
                            }), (0, r.jsx)("div", {
                                className: "bg-[#07090A] border border-[#4E4E4E] size-10 flex justify-center items-center rounded-sm p-1",
                                children: (0, r.jsx)(o.default, {
                                    src: "/logos/logo.png",
                                    alt: "User icon",
                                    width: 25.34,
                                    height: 15.21
                                })
                            })]
                        })]
                    })
                }
                let E = () => (0, r.jsxs)(n(), {
                        href: "https://web.archive.org/web/20250615234246/https://pvp.money/fishtank",
                        target: "_blank",
                        className: "text-[#E2E2E2] flex flex-col gap-2 justify-center items-center",
                        children: [(0, r.jsx)("p", {
                            className: "uppercase text-sm text-center font-medium",
                            children: "Powered By"
                        }), (0, r.jsx)(o.default, {
                            src: "/logos/pvp-logo.svg",
                            alt: "PVP logo",
                            width: 88,
                            height: 48
                        })]
                    }),
                    C = [{
                        title: "Prediction Market",
                        href: "/"
                    }],
                    P = () => {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, r.jsxs)("nav", {
                            className: "grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center justify-items-stretch p-4 z-50",
                            children: [(0, r.jsxs)("div", {
                                className: "flex gap-4 items-center",
                                children: [(0, r.jsx)("button", {
                                    onClick: () => t(!0),
                                    className: "sm:hidden cursor-pointer",
                                    children: (0, r.jsx)(o.default, {
                                        src: "/icons/hamburger.svg",
                                        alt: "menu icon",
                                        width: 24,
                                        height: 16
                                    })
                                }), (0, r.jsxs)(n(), {
                                    href: "/",
                                    className: "",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, r.jsx)(o.default, {
                                            src: "/logos/logo-text.png",
                                            alt: "fishtank logo",
                                            width: 140,
                                            height: 36,
                                            className: "hidden sm:block"
                                        }), (0, r.jsx)("div", {
                                            className: "relative",
                                            children: (0, r.jsx)(o.default, {
                                                src: "/logos/logo.png",
                                                alt: "fish logo",
                                                width: 40,
                                                height: 24,
                                                className: "w-10 sm:w-12 h-6 sm:h-8"
                                            })
                                        })]
                                    }), (0, r.jsx)("h3", {
                                        className: "hidden sm:block uppercase font-black text-md text-[#BD0706]",
                                        children: "Prediction Market"
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "ml-auto justify-self-end",
                                children: (0, r.jsx)(y, {})
                            }), (0, r.jsxs)("div", {
                                className: "fixed top-0 left-0 h-full w-4/5 bg-[#0F1012] text-[#F2F2F2] shadow-lg transform transition-transform duration-300 ease-in-out ".concat(e ? "translate-x-0" : "-translate-x-full", " sm:hidden flex flex-col z-10"),
                                children: [(0, r.jsxs)("div", {
                                    className: "flex justify-between items-center p-4",
                                    children: [(0, r.jsx)("div", {
                                        className: "self-end",
                                        children: (0, r.jsx)(o.default, {
                                            src: "/logos/logo-subtitle.png",
                                            alt: "fishtank logo",
                                            width: 160,
                                            height: 36
                                        })
                                    }), (0, r.jsx)("button", {
                                        onClick: () => t(!1),
                                        "aria-label": "Close menu",
                                        className: "p-2 cursor-pointer",
                                        children: (0, r.jsx)(o.default, {
                                            src: "/icons/close.svg",
                                            alt: "close icon",
                                            width: 24,
                                            height: 24
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "mt-8 flex-1 overflow-y-auto px-6 py-4",
                                    children: (0, r.jsxs)("ul", {
                                        className: "flex flex-col gap-4 w-full",
                                        children: [C.map((e, s) => (0, r.jsx)(n(), {
                                            href: e.href,
                                            className: "w-full hover:bg-stone-900 border border-[#4E4E4E] rounded-[2px] hover:text-white font-bold text-base p-[10px]",
                                            onClick: () => t(!1),
                                            children: e.title
                                        }, s)), (0, r.jsx)(n(), {
                                            href: "https://web.archive.org/web/20250615234246/https://fishtank.live",
                                            target: "_blank",
                                            className: "w-full hover:bg-stone-900 border border-[#4E4E4E] rounded-[2px] hover:text-white font-bold text-base p-[10px]",
                                            onClick: () => t(!1),
                                            children: "Return to Fishtank.live"
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "flex-1"
                                }), (0, r.jsx)("div", {
                                    className: "flex flex-col gap-4 items-center justify-center mt-2 mb-6",
                                    children: (0, r.jsx)(E, {})
                                })]
                            }), e && (0, r.jsx)("div", {
                                className: "fixed inset-0 bg-black/20 sm:hidden z-0",
                                onClick: () => t(!1)
                            })]
                        })
                    }
            },
            19324: () => {},
            48260: (e, t, s) => {
                Promise.resolve().then(s.t.bind(s, 19324, 23)), Promise.resolve().then(s.bind(s, 10657)), Promise.resolve().then(s.bind(s, 11030)), Promise.resolve().then(s.t.bind(s, 48173, 23)), Promise.resolve().then(s.t.bind(s, 87970, 23)), Promise.resolve().then(s.t.bind(s, 47292, 23))
            }
        },
        e => {
            var t = t => e(e.s = t);
            e.O(0, [84125, 85105, 7745, 5565, 15136, 10460, 43522, 45186, 81816, 28441, 86587, 77358], () => t(48260)), _N_E = e.O()
        }
    ]);

}
/*
     FILE ARCHIVED ON 23:42:46 Jun 15, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:27:13 Jul 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.529
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 20.219
  LoadShardBlock: 125.286 (3)
  PetaboxLoader3.datanode: 192.611 (5)
  load_resource: 2002.501 (2)
  PetaboxLoader3.resolve: 1900.489 (2)
*/