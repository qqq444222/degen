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
        [81816], {
            15158: (e, t, s) => {
                s.d(t, {
                    A: () => h
                });
                var r = s(95155),
                    n = s(12115),
                    a = s(48173),
                    i = s.n(a),
                    o = s(5565),
                    l = s(25683),
                    d = s(13478),
                    c = s(87729),
                    m = s(40297),
                    u = s(89888),
                    p = s(97727),
                    x = s(41112);
                let h = () => {
                    let e = (0, p.L)(),
                        [t, s] = (0, n.useState)(null),
                        [a, h] = n.useState([]),
                        {
                            data: f
                        } = (0, x.Q)({
                            contract: c.xO,
                            method: "function paginateContestsBetOnByUser(address, uint256, uint256) returns (uint256[])",
                            params: [(null == e ? void 0 : e.address) || m.Xd, BigInt(0), BigInt(150)],
                            queryOptions: {
                                refetchInterval: 3e3,
                                enabled: !!e
                            }
                        }),
                        {
                            data: b
                        } = (0, x.Q)({
                            contract: c.xO,
                            method: "function batchGetBetContests(uint256[]) returns ((string, uint256[], string[], uint256, uint256, uint8, address[], uint256, uint256, bool, string[])[])",
                            params: [f || []],
                            queryOptions: {
                                enabled: f && f.length > 0,
                                refetchInterval: 3e3
                            }
                        });
                    (0, n.useEffect)(() => {
                        b && f && f.length == b.length && h(b.map((e, t) => ({
                            id: parseInt(f[t].toString()),
                            betName: e[0],
                            optionBetAmounts: e[1].map(e => parseFloat((0, u.J)(e, c.eC))),
                            optionNames: e[2],
                            bettingStartTime: parseInt(e[3].toString()),
                            bettingEndTime: parseInt(e[4].toString()),
                            winningOption: e[5],
                            betters: e[6],
                            refundModeEnabled: e[9],
                            metadata: e[10]
                        })).reverse())
                    }, [b, f]);
                    let {
                        data: g,
                        isLoading: v
                    } = (0, x.Q)({
                        contract: c.xO,
                        method: "function getUserBetsForContest(uint256, address) returns (uint256[])",
                        params: [BigInt(t || 0), (null == e ? void 0 : e.address) || m.Xd],
                        queryOptions: {
                            enabled: !!e && null !== t,
                            refetchInterval: 3e3
                        }
                    }), j = e => v || !g ? [] : e.optionNames.map((e, t) => ({
                        optionName: e,
                        amount: parseFloat((0, u.J)(g[t], c.eC))
                    })).filter(e => e.amount > 0), N = e => {
                        t === e ? s(null) : s(e)
                    }, w = e => {
                        if (e.winningOption >= e.optionNames.length) return e.refundModeEnabled ? {
                            pnl: "Refund Issued",
                            showRed: !0
                        } : {
                            pnl: "Results Pending",
                            showRed: !1
                        };
                        let t = j(e),
                            s = t.reduce((e, t) => e + t.amount, 0),
                            r = t.find(t => t.optionName === e.optionNames[e.winningOption]);
                        if (!r) return {
                            pnl: "".concat(-1 * s),
                            showRed: !0
                        };
                        let n = (e.optionBetAmounts.reduce((e, t) => e + t, 0) - e.optionBetAmounts[e.winningOption]) * .7,
                            a = e.optionBetAmounts[e.winningOption],
                            i = r.amount * (n / a + 1) - s;
                        return {
                            pnl: "".concat(i > 0 ? "+$" : "-$").concat(Math.abs(i).toFixed(2)),
                            showRed: i < 0
                        }
                    }, y = e => e.refundModeEnabled ? "Refund Issued" : e.winningOption >= e.optionNames.length ? "Results Pending" : e.optionNames[e.winningOption];
                    return (0, r.jsx)(r.Fragment, {
                        children: a.length > 0 ? (0, r.jsx)("div", {
                            className: "w-full flex flex-col gap-8",
                            children: a.map((e, s) => (0, r.jsxs)("div", {
                                className: "bg-[#131619] border border-[#4E4E4E] rounded-[2px] p-4 sm:p-6",
                                children: [(0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("p", {
                                        className: "text-xs text-[#A9A9A9] font-medium",
                                        children: "Bet"
                                    }), (0, r.jsxs)("button", {
                                        onClick: () => N(e.id),
                                        className: "mt-1 text-left cursor-pointer w-full flex justify-between gap-2 items-center bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                        children: [(0, r.jsx)("p", {
                                            children: e.betName
                                        }), (0, r.jsx)(o.default, {
                                            src: "/icons/chevron.svg",
                                            alt: "chevron",
                                            width: 16,
                                            height: 16
                                        })]
                                    })]
                                }), (0, r.jsx)(l.N, {
                                    children: t === e.id && (0, r.jsx)(d.P.div, {
                                        initial: {
                                            height: 0
                                        },
                                        animate: {
                                            height: "auto"
                                        },
                                        exit: {
                                            height: 0
                                        },
                                        transition: {
                                            duration: .2
                                        },
                                        className: "overflow-hidden",
                                        children: (0, r.jsxs)("div", {
                                            className: "mt-2 flex flex-col gap-2",
                                            children: [(0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "text-xs text-[#A9A9A9] font-medium",
                                                    children: "Your Bet"
                                                }), j(e).map((e, t) => (0, r.jsxs)("div", {
                                                    className: "mt-1 w-full flex flex-col sm:flex-row gap-2",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "w-full sm:w-1/2 bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                                        children: e.optionName
                                                    }), (0, r.jsxs)("div", {
                                                        className: "w-full sm:w-1/2 bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                                        children: ["$", e.amount]
                                                    })]
                                                }, t))]
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "text-xs text-[#A9A9A9] font-medium",
                                                    children: "Result"
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-1 w-full bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                                    children: y(e)
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "text-xs text-[#A9A9A9] font-medium",
                                                    children: "PNL"
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-1 w-full bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] font-medium ".concat(w(e).showRed ? "text-[#E80D00]" : "text-[#53D0B0]"),
                                                    children: w(e).pnl
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }, s))
                        }) : (0, r.jsx)("div", {
                            className: "bg-[#131619] border border-[#4E4E4E] rounded-[2px] p-4 sm:p-6",
                            children: (0, r.jsxs)("p", {
                                className: "text-[#A9A9A9] text-sm sm:text-base",
                                children: ["You haven't placed a bet yet.", " ", (0, r.jsx)(i(), {
                                    href: "/",
                                    className: "text-[#53D0B0] underline hover:text-[#51b79d]",
                                    children: "Bet Now"
                                })]
                            })
                        })
                    })
                }
            },
            18676: (e, t, s) => {
                s.d(t, {
                    z: () => l
                });
                var r = s(95155),
                    n = s(12115),
                    a = s(47650),
                    i = s(5565),
                    o = s(13478);
                let l = e => {
                    let {
                        children: t,
                        wider: s,
                        onClose: l
                    } = e, [d, c] = (0, n.useState)(!1), m = (0, n.useRef)(!1);
                    return ((0, n.useEffect)(() => {
                        c(!0), document.body.style.overflow = "hidden";
                        let e = e => {
                            let t = document.querySelector(".modal-container");
                            t && !t.contains(e.target) && e.preventDefault()
                        };
                        return document.addEventListener("touchmove", e, {
                            passive: !1
                        }), () => {
                            document.body.style.overflow = "", document.removeEventListener("touchmove", e)
                        }
                    }, []), d) ? (0, a.createPortal)((0, r.jsx)(o.P.div, {
                        variants: {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                transition: {
                                    duration: .5
                                }
                            }
                        },
                        initial: "initial",
                        animate: "animate",
                        exit: "initial",
                        transition: {
                            delay: .1,
                            duration: .5
                        },
                        className: "fixed z-50 inset-0 flex items-center justify-center bg-[#080807D9] bg-opacity-85",
                        onClick: () => {
                            if (m.current) {
                                m.current = !1;
                                return
                            }
                            l()
                        },
                        children: (0, r.jsx)("div", {
                            id: "modal-container",
                            className: "modal-container relative bg-[#191D21] border border-[#4E4E4E] rounded-[2px] overflow-hidden transform transition-all w-[95%] sm:w-full max-h-[80vh] shadow-lg ".concat(s ? "max-w-[640px]" : "max-w-[512px]"),
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-labelledby": "modal-headline",
                            onClick: e => e.stopPropagation(),
                            onMouseDown: () => {
                                m.current = !0
                            },
                            onMouseUp: () => {
                                m.current = !1
                            },
                            children: (0, r.jsxs)("div", {
                                className: "py-4 pl-4 sm:py-6 sm:pl-6 pr-2 relative flex flex-col max-h-[80vh]",
                                children: [(0, r.jsx)("button", {
                                    onClick: l,
                                    className: "absolute top-4 sm:top-6 right-4 sm:right-6 cursor-pointer",
                                    children: (0, r.jsx)(i.default, {
                                        src: "/icons/close.svg",
                                        alt: "Close",
                                        width: 18,
                                        height: 18
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "flex-1 overflow-auto scrollable-content pr-4",
                                    children: t
                                })]
                            })
                        })
                    }), document.body) : null
                }
            },
            24786: (e, t, s) => {
                s.d(t, {
                    A: () => p
                });
                var r = s(95155),
                    n = s(12115),
                    a = s(87729),
                    i = s(20241),
                    o = s(40297),
                    l = s(89888),
                    d = s(97727),
                    c = s(41112),
                    m = s(52678),
                    u = s(62685);
                let p = () => {
                    let e = (0, d.L)(),
                        [t, s] = n.useState([]),
                        {
                            data: p,
                            refetch: x
                        } = (0, c.Q)({
                            contract: a.xO,
                            method: "function paginateContestsBetOnByUserWithoutClaimingAndPendingClaim(address, uint256, uint256) returns (uint256[], uint256[])",
                            params: [(null == e ? void 0 : e.address) || o.Xd, BigInt(0), BigInt(150)],
                            queryOptions: {
                                refetchInterval: 3e3,
                                enabled: !!e
                            }
                        }),
                        h = () => {
                            if (!p) return [];
                            let e = [];
                            for (let t = 0; t < p[0].length; t++) p[1][t] > BigInt(0) && e.push({
                                id: p[0][t],
                                amount: p[1][t]
                            });
                            return e
                        },
                        {
                            data: f
                        } = (0, c.Q)({
                            contract: a.xO,
                            method: "function batchGetBetContests(uint256[]) returns ((string, uint256[], string[], uint256, uint256, uint8, address[], uint256, uint256, bool, string[])[])",
                            params: [(() => {
                                if (!p) return [];
                                let e = [];
                                for (let t = 0; t < p[0].length; t++) p[1][t] > BigInt(0) && e.push(p[0][t]);
                                return e
                            })()],
                            queryOptions: {
                                enabled: p && p.length > 0 && !!e && !!(null == e ? void 0 : e.address),
                                refetchInterval: 3e3
                            }
                        });
                    (0, n.useEffect)(() => {
                        let e = h();
                        if (f && e.length == f.length) {
                            let t = f.map((t, s) => ({
                                    id: parseInt(e[s].id.toString()),
                                    betName: t[0],
                                    optionBetAmounts: t[1].map(e => parseFloat((0, l.J)(e, a.eC))),
                                    optionNames: t[2],
                                    bettingStartTime: parseInt(t[3].toString()),
                                    bettingEndTime: parseInt(t[4].toString()),
                                    winningOption: t[5],
                                    betters: t[6],
                                    refundModeEnabled: t[9],
                                    metadata: t[10],
                                    claimableAmount: parseFloat((0, l.J)(e[s].amount, a.eC))
                                })),
                                r = [];
                            for (let e = 0; e < t.length; e++) t[e].winningOption < t[e].optionNames.length ? r.push(t[e]) : t[e].refundModeEnabled && r.push(t[e]);
                            s(r.reverse())
                        }
                    }, [f, p]);
                    let [b, g] = n.useState([!1, 0, 0]), [v, j] = n.useState(void 0), N = () => !!t && 0 != t.length, w = () => N() && t ? t.filter(e => !1 == e.refundModeEnabled) : [], y = () => N() && t ? t.filter(e => !0 == e.refundModeEnabled) : [];
                    (0, n.useEffect)(() => {
                        void 0 !== v && ("success" === v && ((0, i.oR)({
                            title: "Claim successful.",
                            description: "Your bet has been claimed successfully."
                        }), setTimeout(() => {
                            j(void 0)
                        }, 2e3)), "failed" === v && ((0, i.oR)({
                            title: "Something went wrong.",
                            description: "Your claim failed. Please try again.",
                            variant: "destructive"
                        }), setTimeout(() => {
                            j(void 0)
                        }, 2e3)))
                    }, [v]);
                    let E = e => (0, u.m)({
                        contract: a.xO,
                        method: "function claim(uint256)",
                        params: [e]
                    });
                    return (0, r.jsx)(r.Fragment, {
                        children: N() ? (0, r.jsxs)(r.Fragment, {
                            children: [w().length > 0 && (0, r.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: w().map((e, t) => (0, r.jsxs)("div", {
                                    className: "bg-[#131619] border border-[#4E4E4E] rounded-[2px] p-4 sm:p-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-xs text-[#A9A9A9] font-medium",
                                                children: "Bet"
                                            }), (0, r.jsx)("div", {
                                                className: "mt-1 text-left cursor-pointer w-full flex justify-between gap-2 items-center bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                                children: (0, r.jsx)("p", {
                                                    children: e.betName
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-xs text-[#A9A9A9] font-medium",
                                                children: "PNL"
                                            }), (0, r.jsxs)("div", {
                                                className: "mt-1 w-full bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] font-medium text-[#53D0B0]",
                                                children: ["$", e.claimableAmount]
                                            })]
                                        })]
                                    }), (0, r.jsx)(m.v, {
                                        transaction: () => E(BigInt(e.id.toString())),
                                        unstyled: !0,
                                        className: "mt-8 w-full cursor-pointer bg-[#2F322D] hover:bg-stone-900 border border-[#4E4E4E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#F2E691]",
                                        onTransactionConfirmed: e => {
                                            console.log("Transaction complete!", e), g([!1, 0, 0]), j("success"), x()
                                        },
                                        onTransactionSent: () => {
                                            g([!0, t, 1])
                                        },
                                        onError: e => {
                                            console.error("Transaction failed!", e), g([!1, 0, 0]), j("failed"), x()
                                        },
                                        children: b[0] && b[1] == t && 1 == b[2] ? (0, r.jsx)("div", {
                                            className: "flex flex-col items-center",
                                            children: (0, r.jsx)("div", {
                                                className: "w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"
                                            })
                                        }) : "Claim"
                                    })]
                                }, t))
                            }), y().length > 0 && (0, r.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: y().map((e, t) => (0, r.jsxs)("div", {
                                    className: "bg-[#131619] border border-[#4E4E4E] rounded-[2px] p-4 sm:p-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-xs text-[#A9A9A9] font-medium",
                                                children: "Bet"
                                            }), (0, r.jsx)("div", {
                                                className: "mt-1 text-left cursor-pointer w-full flex justify-between gap-2 items-center bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                                children: (0, r.jsx)("p", {
                                                    children: e.betName
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-xs text-[#A9A9A9] font-medium",
                                                children: "This bet was deemed unfair, and all funds have been returned."
                                            }), (0, r.jsxs)("div", {
                                                className: "mt-1 w-full bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] font-medium text-[#F97971]",
                                                children: ["$", e.claimableAmount]
                                            })]
                                        })]
                                    }), (0, r.jsx)(m.v, {
                                        transaction: () => E(BigInt(e.id.toString())),
                                        unstyled: !0,
                                        className: "mt-8 w-full cursor-pointer bg-[#2F322D] hover:bg-stone-900 border border-[#4E4E4E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#F2E691]",
                                        onTransactionConfirmed: e => {
                                            console.log("Transaction complete!", e), g([!1, 0, 0]), j("success"), x()
                                        },
                                        onTransactionSent: () => {
                                            g([!0, t, 2])
                                        },
                                        onError: e => {
                                            console.error("Transaction failed!", e), g([!1, 0, 0]), j("failed"), x()
                                        },
                                        children: b[0] && b[1] == t && 2 == b[2] ? (0, r.jsx)("div", {
                                            className: "flex flex-col items-center",
                                            children: (0, r.jsx)("div", {
                                                className: "w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"
                                            })
                                        }) : "Claim Refund"
                                    })]
                                }, t))
                            })]
                        }) : (0, r.jsx)("div", {
                            className: "bg-[#131619] border border-[#4E4E4E] rounded-[2px] p-4 sm:p-6",
                            children: (0, r.jsx)("p", {
                                className: "text-[#A9A9A9] text-sm sm:text-base",
                                children: "Nothing to claim currently! Good luck!"
                            })
                        })
                    })
                }
            },
            55571: (e, t, s) => {
                s.d(t, {
                    R: () => o,
                    T: () => i
                });
                var r = s(95155),
                    n = s(12115);
                let a = (0, n.createContext)({
                        displayName: null,
                        pfpString: null,
                        setDisplayName: () => {},
                        setPfpString: () => {}
                    }),
                    i = e => {
                        let {
                            children: t
                        } = e, [s, i] = (0, n.useState)(null), [o, l] = (0, n.useState)(null);
                        return (0, n.useEffect)(() => {
                            i(localStorage.getItem("displayName")), l(localStorage.getItem("pfpString"))
                        }, []), (0, r.jsx)(a.Provider, {
                            value: {
                                displayName: s,
                                pfpString: o,
                                setDisplayName: e => {
                                    i(e), localStorage.setItem("displayName", e), document.cookie = "displayName=".concat(e, "; path=/")
                                },
                                setPfpString: e => {
                                    l(e), localStorage.setItem("pfpString", e), document.cookie = "pfpString=".concat(e, "; path=/")
                                }
                            },
                            children: t
                        })
                    },
                    o = () => (0, n.useContext)(a)
            },
            69596: (e, t, s) => {
                s.d(t, {
                    Di: () => o,
                    Ui: () => a,
                    WP: () => d,
                    hI: () => l,
                    jY: () => i,
                    rP: () => n
                });
                var r = s(87729);
                let n = e => r.MP.includes(e),
                    a = () => {
                        var e;
                        return (null === (e = document.cookie.split("; ").find(e => e.startsWith("hasAgreedToAntiWhinePolicy="))) || void 0 === e ? void 0 : e.split("=")[1]) === "true"
                    },
                    i = () => {
                        var e;
                        return (null === (e = document.cookie.split("; ").find(e => e.startsWith("hasAgreedToTermsAndConditions="))) || void 0 === e ? void 0 : e.split("=")[1]) === "true"
                    },
                    o = () => a() && i(),
                    l = () => {
                        document.cookie = "hasAgreedToAntiWhinePolicy=true; path=/; max-age=31536000"
                    },
                    d = () => {
                        document.cookie = "hasAgreedToTermsAndConditions=true; path=/; max-age=31536000"
                    }
            },
            73571: (e, t, s) => {
                s.d(t, {
                    A: () => H
                });
                var r = s(95155),
                    n = s(12115),
                    a = s(5565),
                    i = s(20241),
                    o = s(87729),
                    l = s(69596),
                    d = s(48948),
                    c = s(69729),
                    m = s(55571);
                let u = e => {
                    let {
                        setShowUserModal: t,
                        setShowPfpView: s
                    } = e, {
                        disconnect: u
                    } = (0, d.u)(), p = (0, c.z)(), {
                        displayName: x,
                        pfpString: h,
                        setDisplayName: f
                    } = (0, m.R)(), [b, g] = (0, n.useState)(x || ""), [v, j] = (0, n.useState)(!1);
                    return (0, r.jsxs)("div", {
                        className: "bg-[#131619] border border-[#4E4E4E] rounded-[2px] p-4 sm:p-6",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [(0, r.jsxs)("div", {
                                className: "w-[140px] mx-auto sm:mx-0",
                                children: [(0, r.jsx)("div", {
                                    className: "w-[140px] h-[140px] flex justify-center items-center bg-[#090B0C] border border-[#4E4E4E]",
                                    children: (0, r.jsx)(a.default, {
                                        src: h && (0, l.rP)(h) ? h : o.MP[0],
                                        alt: "User icon",
                                        width: 100,
                                        height: 100,
                                        className: "rounded-full"
                                    })
                                }), (0, r.jsx)("button", {
                                    onClick: () => s(!0),
                                    className: "w-full cursor-pointer bg-[#1F2223] hover:bg-stone-900 border border-[#4E4E4E] py-[10px] px-2 font-medium text-base uppercase",
                                    children: "Change"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "w-full",
                                children: [(0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("p", {
                                        className: "text-[#A9A9A9] text-xs sm:text-sm uppercase font-medium",
                                        children: "Display Name"
                                    }), (0, r.jsx)("input", {
                                        className: "w-full mt-[2px] bg-[#1F2223] rounded-[2px] border border-[#4E4E4E] p-[10px] focus:outline-none focus:ring focus:ring-[#F2E691] focus:border-[#F2E691]",
                                        placeholder: "[name]",
                                        type: "text",
                                        name: "name",
                                        id: "name",
                                        autoComplete: "off",
                                        value: b || "",
                                        onChange: e => g(e.target.value)
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-4 w-full flex gap-2",
                                    children: [(0, r.jsx)("button", {
                                        onClick: () => {
                                            if (b === x) {
                                                (0, i.oR)({
                                                    title: "New display name matches old display name.",
                                                    description: "Please enter a different display name.",
                                                    variant: "destructive"
                                                });
                                                return
                                            }
                                            j(!0), setTimeout(() => {
                                                j(!1), f(b), (0, i.oR)({
                                                    title: "Success",
                                                    description: "Display name updated successfully"
                                                })
                                            }, 1e3)
                                        },
                                        className: "w-1/2 cursor-pointer bg-[#1F2223] hover:bg-stone-900 border border-[#4E4E4E] py-[10px] px-2 font-medium text-base uppercase",
                                        children: v ? (0, r.jsx)("div", {
                                            className: "flex flex-col items-center",
                                            children: (0, r.jsx)("div", {
                                                className: "w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"
                                            })
                                        }) : "Save"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => {
                                            t(!1)
                                        },
                                        className: "w-1/2 cursor-pointer bg-[#1F2223] hover:bg-stone-900 border border-[#4E4E4E] py-[10px] px-2 font-medium text-base uppercase",
                                        children: "Cancel"
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("button", {
                            onClick: () => {
                                p && u(p), t(!1)
                            },
                            className: "mt-4 w-full cursor-pointer bg-[#1F2223] hover:bg-stone-900 border border-[#4E4E4E] py-[10px] px-2 font-medium text-base uppercase",
                            children: "Log Out"
                        })]
                    })
                };
                var p = s(24786),
                    x = s(15158);
                let h = e => {
                    let {
                        setShowPfpView: t
                    } = e, {
                        pfpString: s,
                        setPfpString: d
                    } = (0, m.R)(), [c, u] = (0, n.useState)(s || ""), [p, x] = n.useState(!1);
                    return (0, r.jsxs)("div", {
                        className: "mt-6",
                        children: [(0, r.jsxs)("div", {
                            className: "max-w-[510px]",
                            children: [(0, r.jsx)("p", {
                                className: "text-sm uppercase font-medium text-[#F2E691]",
                                children: "Current"
                            }), (0, r.jsxs)("div", {
                                className: "mt-2 flex flex-col sm:flex-row gap-6 sm:items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "shrink-0 bg-[#090B0C] border border-[#4E4E4E] w-[200px] h-[200px] flex justify-center items-center p-5",
                                    children: (0, r.jsx)("div", {
                                        className: "relative",
                                        children: (0, r.jsx)(a.default, {
                                            src: s && (0, l.rP)(s) ? s : o.MP[0],
                                            alt: "User icon",
                                            width: 100,
                                            height: 100,
                                            objectFit: "cover"
                                        })
                                    })
                                }), (0, r.jsx)("p", {
                                    className: "text-sm text-[#B1B1B1]",
                                    children: "Choose your profile photo to rep your favorite fish this season."
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "mt-12 grid grid-cols-2 min-[460px]:grid-cols-3 sm:grid-cols-4 gap-4 place-items-center sm:place-content-between",
                            children: o.MP.map((e, t) => (0, r.jsx)("div", {
                                className: "relative cursor-pointer bg-[#090B0C] border border-[#4E4E4E] w-[112px] h-[112px] flex justify-center items-center p-5 rounded-[2px] transition-transform ".concat(c === e ? "ring-2 ring-[#F2E691] scale-90" : ""),
                                onClick: () => u(e),
                                children: (0, r.jsx)(a.default, {
                                    src: e,
                                    alt: "User icon",
                                    width: 100,
                                    height: 100,
                                    objectFit: "cover"
                                })
                            }, t))
                        }), (0, r.jsxs)("div", {
                            className: "mt-6 w-full flex gap-2",
                            children: [(0, r.jsx)("button", {
                                onClick: () => {
                                    if (c) {
                                        if (c === s) {
                                            (0, i.oR)({
                                                title: "New profile photo matches old profile photo.",
                                                description: "Please select a different profile photo.",
                                                variant: "destructive"
                                            });
                                            return
                                        }
                                        x(!0), setTimeout(() => {
                                            x(!1), d(c), (0, i.oR)({
                                                title: "Success",
                                                description: "Profile photo updated successfully"
                                            }), t(!1)
                                        }, 1e3)
                                    }
                                },
                                className: "w-1/2 cursor-pointer bg-[#1F2223] hover:bg-stone-900 border border-[#4E4E4E] py-[10px] px-2 font-medium text-base uppercase",
                                children: p ? (0, r.jsx)("div", {
                                    className: "flex flex-col items-center",
                                    children: (0, r.jsx)("div", {
                                        className: "w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"
                                    })
                                }) : "Save"
                            }), (0, r.jsx)("button", {
                                onClick: () => t(!1),
                                className: "w-1/2 cursor-pointer bg-[#1F2223] hover:bg-stone-900 border border-[#4E4E4E] py-[10px] px-2 font-medium text-base uppercase",
                                children: "Cancel"
                            })]
                        })]
                    })
                };
                var f = s(65236),
                    b = s(8017),
                    g = s(48251),
                    v = s(10590),
                    j = s(64983),
                    N = s(98867),
                    w = s(23920),
                    y = s(97727),
                    E = s(41112),
                    C = s(79995),
                    A = s(40297),
                    k = s(89888),
                    S = s(34354),
                    F = s(35684),
                    R = s(62685),
                    B = s(27165),
                    D = s(50323),
                    P = s(64106),
                    T = s(78144),
                    O = s(25848),
                    I = s(25683),
                    U = s(13478),
                    M = s(19710),
                    z = s(29602);

                function L(e) {
                    let {
                        delayDuration: t = 0,
                        ...s
                    } = e;
                    return (0, r.jsx)(M.Kq, {
                        "data-slot": "tooltip-provider",
                        delayDuration: t,
                        ...s
                    })
                }

                function _(e) {
                    let {
                        ...t
                    } = e;
                    return (0, r.jsx)(L, {
                        children: (0, r.jsx)(M.bL, {
                            "data-slot": "tooltip",
                            ...t
                        })
                    })
                }

                function q(e) {
                    let {
                        ...t
                    } = e;
                    return (0, r.jsx)(M.l9, {
                        "data-slot": "tooltip-trigger",
                        ...t
                    })
                }

                function W(e) {
                    let {
                        className: t,
                        sideOffset: s = 0,
                        children: n,
                        ...a
                    } = e;
                    return (0, r.jsx)(M.ZL, {
                        children: (0, r.jsxs)(M.UC, {
                            "data-slot": "tooltip-content",
                            sideOffset: s,
                            className: (0, z.cn)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", t),
                            ...a,
                            children: [n, (0, r.jsx)(M.i3, {
                                className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                            })]
                        })
                    })
                }
                var Q = s(48173),
                    X = s.n(Q);
                let $ = [{
                        id: 1,
                        name: "Bitcoin",
                        ticker: "btc",
                        network: "btc",
                        image: "https://web.archive.org/web/20250615234246/https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                        networkDisplayName: "Bitcoin"
                    }, {
                        id: 2,
                        name: "Ethereum",
                        ticker: "eth",
                        network: "eth",
                        image: "https://web.archive.org/web/20250615234246/https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501400",
                        networkDisplayName: "Ethereum"
                    }, {
                        id: 3,
                        name: "Solana",
                        ticker: "sol",
                        network: "sol",
                        image: "https://web.archive.org/web/20250615234246/https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501400",
                        networkDisplayName: "Solana"
                    }, {
                        id: 4,
                        name: "Ripple",
                        ticker: "xrp",
                        network: "xrp",
                        image: "https://web.archive.org/web/20250615234246/https://content-api.changenow.io/uploads/xrp_3b5212fd4a.svg",
                        networkDisplayName: "Ripple"
                    }, {
                        id: 5,
                        name: "Dogecoin",
                        ticker: "doge",
                        network: "doge",
                        image: "https://web.archive.org/web/20250615234246/https://content-api.changenow.io/uploads/doge_a0321dc732.svg",
                        networkDisplayName: "Dogecoin"
                    }, {
                        id: 6,
                        name: "Cardano",
                        ticker: "ada",
                        network: "ada",
                        image: "https://web.archive.org/web/20250615234246/https://content-api.changenow.io/uploads/ada_fb42809541.svg",
                        networkDisplayName: "Cardano"
                    }, {
                        id: 7,
                        name: "BNB",
                        ticker: "bnb",
                        network: "bsc",
                        image: "https://web.archive.org/web/20250615234246/https://content-api.changenow.io/uploads/bnbbsc_331e969a6b.svg",
                        networkDisplayName: "BNB Smart Chain"
                    }, {
                        id: 8,
                        name: "Avalanche",
                        ticker: "avax",
                        network: "cchain",
                        image: "https://web.archive.org/web/20250615234246/https://content-api.changenow.io/uploads/avaxs_4e906c3ad4.svg",
                        networkDisplayName: "Avalanche C-Chain"
                    }],
                    J = e => e ? "".concat(e.substring(0, 6), "...").concat(e.substring(e.length - 4)) : "No Address",
                    Y = () => {
                        var e, t;
                        let [s, l] = (0, n.useState)("main"), [m, u] = (0, n.useState)(""), [p, x] = (0, n.useState)(""), [h, M] = (0, n.useState)(!1), [z, Q] = (0, n.useState)(""), [Y, G] = (0, n.useState)(!1), H = (0, y.L)(), V = (0, c.z)(), {
                            disconnect: K
                        } = (0, d.u)(), {
                            data: Z
                        } = (0, E.Q)({
                            contract: o.kW,
                            method: "balanceOf",
                            params: [(null == H ? void 0 : H.address) || A.Xd],
                            queryOptions: {
                                enabled: !!H,
                                refetchInterval: 3e3
                            }
                        });
                        (0, n.useEffect)(() => {
                            Z && Q((0, k.J)(Z, o.eC))
                        }, [Z]);
                        let ee = e => {
                                e ? (navigator.clipboard.writeText(e), (0, i.oR)({
                                    title: "Address Copied",
                                    description: "The deposit address has been copied to your clipboard."
                                }), G(!0), setTimeout(() => G(!1), 2e3)) : (0, i.oR)({
                                    title: "Copy Failed",
                                    description: "No address available to copy.",
                                    variant: "destructive"
                                })
                            },
                            [et, es] = (0, n.useState)("");
                        (0, n.useEffect)(() => {
                            H && C.toDataURL(H.address, {
                                width: 128,
                                margin: 2
                            }, (e, t) => {
                                if (e) {
                                    console.error(e);
                                    return
                                }
                                es(t)
                            })
                        }, [H]);
                        let er = async () => {
                            if (!H) return;
                            if (!m) {
                                (0, i.oR)({
                                    title: "Error",
                                    description: "Please enter a recipient address.",
                                    variant: "destructive"
                                });
                                return
                            }
                            if (!1 === (0, S.P)(m, {
                                    strict: !1
                                })) {
                                (0, i.oR)({
                                    title: "Error",
                                    description: "Invalid recipient address.",
                                    variant: "destructive"
                                });
                                return
                            }
                            if (!p || 0 == p.length || "0" === p) {
                                (0, i.oR)({
                                    title: "Error",
                                    description: "Please enter a valid amount to send.",
                                    variant: "destructive"
                                });
                                return
                            }
                            let e = (0, R.m)({
                                contract: o.kW,
                                method: "transfer",
                                params: [m, (0, F.X)(p, o.eC)]
                            });
                            M(!0);
                            try {
                                let {
                                    transactionHash: t
                                } = await (0, B.sendTransaction)({
                                    account: H,
                                    transaction: e
                                }), s = await (0, D.L)({
                                    client: P.S,
                                    chain: T.E,
                                    transactionHash: t
                                });
                                "success" == s.status ? (console.log("Transaction complete!", s), (0, i.oR)({
                                    title: "Success",
                                    description: "USDC sent successfully!"
                                }), u(""), x(""), l("main")) : (console.error("Transaction failed!", s), (0, i.oR)({
                                    title: "Error",
                                    description: "Transaction failed. Please try again.",
                                    variant: "destructive"
                                }))
                            } catch (e) {
                                console.error("Transaction submission failed!", e), (0, i.oR)({
                                    title: "Error",
                                    description: "Failed to send transaction. Please check your connection and try again.",
                                    variant: "destructive"
                                })
                            } finally {
                                M(!1)
                            }
                        }, en = (0, n.useMemo)(() => !z || 0 == z.length || isNaN(Number(z)) ? "0.00" : parseFloat(z).toFixed(2), [z]), [ea, ei] = (0, n.useState)({
                            fromAmount: "",
                            fromNetwork: "btc",
                            fromCurrency: "btc",
                            toNetwork: "base",
                            toCurrency: "usdc",
                            address: (null == H ? void 0 : H.address) || A.Xd
                        }), [eo, el] = (0, n.useState)(null), [ed, ec] = (0, n.useState)(!0), [em, eu] = (0, n.useState)(!1), {
                            mutateAsync: ep,
                            isPending: ex,
                            data: eh
                        } = (0, O.n)({
                            mutationFn: async e => (await fetch("/api/changenow", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(e)
                            })).json()
                        }), ef = e => {
                            ei(t => ({
                                ...t,
                                fromCurrency: e.ticker,
                                fromNetwork: e.network
                            }))
                        };
                        (0, n.useEffect)(() => {
                            if (!H) {
                                ec(!0);
                                return
                            }
                            ex ? ec(!1) : isNaN(parseFloat(ea.fromAmount)) || 0 >= parseFloat(ea.fromAmount || "0") ? (el("Enter amount to receive"), ec(!0)) : (el(null), ec(!1))
                        }, [H, ex, ea.fromAmount]);
                        let eb = async e => {
                            if (e.preventDefault(), !H) {
                                (0, i.oR)({
                                    title: "Not Connected",
                                    description: "Please connect your wallet to proceed.",
                                    variant: "destructive"
                                });
                                return
                            }
                            if ("" === ea.fromAmount) {
                                (0, i.oR)({
                                    title: "Invalid Amount",
                                    description: "Please enter a valid amount.",
                                    variant: "destructive"
                                });
                                return
                            }
                            let t = {
                                fromAmount: parseFloat(ea.fromAmount),
                                fromNetwork: ea.fromNetwork,
                                fromCurrency: ea.fromCurrency,
                                toNetwork: ea.toNetwork,
                                toCurrency: ea.toCurrency,
                                address: ea.address
                            };
                            await ep(t, {
                                onSuccess: e => {
                                    e.id ? (0, i.oR)({
                                        title: "Transaction Initiated",
                                        description: "Transaction ID: ".concat(e.id, ". Please keep this for your records.")
                                    }) : (console.error("Failed to get transaction id from ChangeNow response", e), (0, i.oR)({
                                        title: "Transaction Failed",
                                        description: "An unknown error occurred while processing your request.",
                                        variant: "destructive"
                                    }))
                                },
                                onError: e => {
                                    var t;
                                    console.error(e), (0, i.oR)({
                                        title: "Transaction Failed",
                                        description: null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : "An unknown error occurred while processing your request.",
                                        variant: "destructive"
                                    })
                                }
                            })
                        }, [eg, ev] = (0, n.useState)("");
                        (0, n.useEffect)(() => {
                            if ((null == eh ? void 0 : eh.payinAddress) && (null == eh ? void 0 : eh.payoutAddress)) {
                                let e = eh.payinAddress;
                                C.toDataURL(e, {
                                    width: 128,
                                    margin: 2
                                }, (e, t) => {
                                    if (e) {
                                        console.error(e);
                                        return
                                    }
                                    ev(t)
                                }), eu(!0)
                            }
                        }, [eh]);
                        let ej = (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("header", {
                                    className: "flex items-center justify-between border-b pb-2 border-white/10",
                                    children: [(0, r.jsx)("div", {
                                        className: "bg-white/10 text-sm px-3 py-1 rounded-full",
                                        children: J((null == H ? void 0 : H.address) || "")
                                    }), (0, r.jsxs)("button", {
                                        onClick: () => {
                                            V && K(V)
                                        },
                                        className: "flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-2 py-1 hover:bg-white/10 rounded-md cursor-pointer",
                                        children: [(0, r.jsx)(f.A, {
                                            size: 18
                                        }), (0, r.jsx)("span", {
                                            className: "text-sm font-medium",
                                            children: "Disconnect"
                                        })]
                                    })]
                                }), (0, r.jsxs)("main", {
                                    className: "p-2 sm:p-6 flex flex-col items-center",
                                    children: [(0, r.jsx)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "USDC (Base)"
                                    }), (0, r.jsxs)("h1", {
                                        className: "mt-4 mb-2 text-5xl font-bold",
                                        children: ["$", en]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 mt-8 w-full",
                                        children: [(0, r.jsxs)("button", {
                                            onClick: () => l("receive"),
                                            className: "flex-1 flex flex-col items-center gap-2 py-3 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg transition-colors cursor-pointer",
                                            children: [(0, r.jsx)(b.A, {
                                                size: 24,
                                                className: "text-blue-400"
                                            }), "Receive"]
                                        }), (0, r.jsxs)("button", {
                                            onClick: () => l("send"),
                                            className: "flex-1 flex flex-col items-center gap-2 py-3 bg-green-500/20 hover:bg-green-500/40 rounded-lg transition-colors cursor-pointer",
                                            children: [(0, r.jsx)(g.A, {
                                                size: 24,
                                                className: "text-green-400"
                                            }), "Send"]
                                        }), (0, r.jsxs)("button", {
                                            onClick: () => l("exchange"),
                                            className: "flex-1 flex flex-col items-center gap-2 py-3 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg transition-colors cursor-pointer",
                                            children: [(0, r.jsx)(v.A, {
                                                size: 24,
                                                className: "text-purple-400"
                                            }), "Exchange"]
                                        })]
                                    })]
                                })]
                            }),
                            eN = (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("header", {
                                    className: "relative flex items-center p-4 border-b border-white/10",
                                    children: [(0, r.jsx)("button", {
                                        onClick: () => l("main"),
                                        className: "absolute top-2 left-2 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer",
                                        children: (0, r.jsx)(j.A, {
                                            size: 20
                                        })
                                    }), (0, r.jsx)("h2", {
                                        className: "flex-1 text-center font-bold",
                                        children: "Receive USDC"
                                    })]
                                }), (0, r.jsxs)("main", {
                                    className: "pt-4 flex flex-col items-center gap-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "bg-red-900/50 border border-red-700 text-red-300 text-center text-sm p-3 rounded-lg",
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold",
                                            children: "IMPORTANT"
                                        }), (0, r.jsxs)("p", {
                                            children: ["Only send ", (0, r.jsx)("span", {
                                                className: "font-bold",
                                                children: "USDC"
                                            }), " on the", " ", (0, r.jsx)("span", {
                                                className: "font-bold",
                                                children: "Base"
                                            }), " network to this address. Other assets or networks will result in permanent loss."]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "bg-white p-4 rounded-lg",
                                        children: H && et && (0, r.jsx)("div", {
                                            className: "flex justify-center",
                                            children: (0, r.jsx)(a.default, {
                                                src: et,
                                                width: 128,
                                                height: 128,
                                                alt: "QR Code"
                                            })
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "bg-white/10 p-3 rounded-lg mt-4 w-full flex items-center gap-2",
                                        children: [(0, r.jsx)("p", {
                                            className: "flex-1 text-sm text-gray-300 break-all",
                                            children: null == H ? void 0 : H.address
                                        }), (0, r.jsx)("button", {
                                            onClick: () => ee(null == H ? void 0 : H.address),
                                            className: "p-2 hover:bg-white/20 rounded-md transition-colors",
                                            children: Y ? (0, r.jsx)(N.A, {
                                                size: 18,
                                                className: "text-green-400"
                                            }) : (0, r.jsx)(w.A, {
                                                size: 18,
                                                className: "cursor-pointer"
                                            })
                                        })]
                                    })]
                                })]
                            }),
                            ew = (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("header", {
                                    className: "relative flex items-center p-4 border-b border-white/10",
                                    children: [(0, r.jsx)("button", {
                                        onClick: () => l("main"),
                                        className: "absolute top-2 left-2 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer",
                                        children: (0, r.jsx)(j.A, {
                                            size: 20
                                        })
                                    }), (0, r.jsx)("h2", {
                                        className: "flex-1 text-center font-bold",
                                        children: "Send USDC"
                                    })]
                                }), (0, r.jsxs)("main", {
                                    className: "p-2 sm:p-6 flex flex-col gap-4",
                                    children: [(0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("label", {
                                            htmlFor: "send-address",
                                            className: "text-sm text-gray-400 mb-1 block",
                                            children: "Recipient Address"
                                        }), (0, r.jsx)("input", {
                                            id: "send-address",
                                            type: "text",
                                            value: m,
                                            onChange: e => u(e.target.value),
                                            placeholder: "0x...",
                                            className: "w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                        }), (0, r.jsxs)("p", {
                                            className: "text-xs text-yellow-400/80 mt-2 text-center px-2",
                                            children: ["Ensure the recipient can receive", " ", (0, r.jsx)("span", {
                                                className: "font-bold",
                                                children: "USDC"
                                            }), " on the", " ", (0, r.jsx)("span", {
                                                className: "font-bold",
                                                children: "Base"
                                            }), " network."]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("label", {
                                            htmlFor: "send-amount",
                                            className: "text-sm text-gray-400 mb-1 block",
                                            children: (0, r.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [(0, r.jsx)("p", {
                                                    children: "Amount (USDC)"
                                                }), (0, r.jsxs)("p", {
                                                    className: "text-xs text-gray-500 ml-2",
                                                    children: ["Balance: ", en, " USDC"]
                                                })]
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, r.jsx)("input", {
                                                id: "send-amount",
                                                type: "number",
                                                value: p,
                                                onChange: e => x(e.target.value),
                                                placeholder: "0.00",
                                                className: "w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none pr-16"
                                            }), (0, r.jsx)("button", {
                                                onClick: () => x(z),
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 text-blue-400 font-bold text-sm px-3 py-1 hover:bg-blue-500/20 rounded-md cursor-pointer transition-colors",
                                                children: "MAX"
                                            })]
                                        })]
                                    }), (0, r.jsx)("button", {
                                        onClick: er,
                                        disabled: !m || !p || h,
                                        className: "mt-6 sm:mt-8 w-full h-min cursor-pointer m-auto bg-[#101C18] hover:bg-[#243d35] border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center",
                                        children: h ? "Sending..." : "Send"
                                    })]
                                })]
                            }),
                            ey = (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("header", {
                                    className: "relative flex items-center p-4 border-b border-white/10",
                                    children: [(0, r.jsx)("button", {
                                        onClick: () => l("main"),
                                        className: "absolute top-2 left-2 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer",
                                        children: (0, r.jsx)(j.A, {
                                            size: 20
                                        })
                                    }), (0, r.jsx)("h2", {
                                        className: "flex-1 text-center font-bold",
                                        children: "Exchange"
                                    })]
                                }), (0, r.jsx)("main", {
                                    className: "p-2 sm:p-6",
                                    children: (0, r.jsx)(I.N, {
                                        mode: "wait",
                                        children: !1 == em ? (0, r.jsx)(U.P.div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: .5
                                            },
                                            className: "mt-6",
                                            children: (0, r.jsxs)("form", {
                                                onSubmit: eb,
                                                children: [(0, r.jsx)("div", {
                                                    className: "mb-4 flex flex-row flex-wrap items-center gap-2",
                                                    children: $.map((e, t) => (0, r.jsxs)("button", {
                                                        type: "button",
                                                        className: "flex flex-row items-center gap-2 rounded-[2px] p-1.5 cursor-pointer ".concat(e.ticker === ea.fromCurrency && e.network === ea.fromNetwork ? "bg-foreground text-background" : "bg-background text-foreground"),
                                                        onClick: () => ef(e),
                                                        children: [(0, r.jsx)("div", {
                                                            className: "w-4 h-4",
                                                            children: e.image ? (0, r.jsx)(a.default, {
                                                                src: e.image,
                                                                width: 16,
                                                                height: 16,
                                                                alt: e.name,
                                                                className: "rounded-full"
                                                            }) : (0, r.jsx)("p", {
                                                                className: "text-xs text-center",
                                                                children: e.ticker
                                                            })
                                                        }), (0, r.jsx)("p", {
                                                            className: "text-xs",
                                                            children: e.name
                                                        })]
                                                    }, t))
                                                }), (0, r.jsxs)("div", {
                                                    className: "mb-4",
                                                    children: [(0, r.jsxs)("label", {
                                                        className: "font-medium text-xs text-[#A9A9A9]",
                                                        htmlFor: "amount",
                                                        children: ["Enter Amount (", (ea.fromCurrency || "").toUpperCase(), ")"]
                                                    }), (0, r.jsx)("input", {
                                                        type: "text",
                                                        inputMode: "decimal",
                                                        id: "amount",
                                                        name: "amount",
                                                        value: ea.fromAmount,
                                                        onChange: e => {
                                                            let t = e.target.value;
                                                            ("" === t || /^\d*\.?\d*$/.test(t)) && ei(e => ({
                                                                ...e,
                                                                fromAmount: t
                                                            }))
                                                        },
                                                        className: "mt-1 w-full text-left bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium focus:outline-none focus:ring focus:ring-[#F2E691] focus:border-[#F2E691]",
                                                        placeholder: "Enter Amount Of ".concat((ea.fromCurrency || "").toUpperCase(), " to Exchange")
                                                    }), eo && (0, r.jsx)("p", {
                                                        className: "mt-[6px] text-xs text-red-500",
                                                        children: eo
                                                    })]
                                                }), (0, r.jsx)("button", {
                                                    type: "submit",
                                                    className: "w-full bg-[#1F2223] border border-[#4E4E4E] py-[10px] px-2 font-medium text-[#F2E691] text-base uppercase ".concat(ed ? "opacity-50" : "cursor-pointer hover:bg-stone-900"),
                                                    disabled: ed,
                                                    children: ex ? "Generating..." : "Generate Address to Deposit Funds"
                                                })]
                                            })
                                        }, "form") : (0, r.jsx)(U.P.div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: .5
                                            },
                                            className: "mt-2",
                                            children: eh ? (0, r.jsxs)("div", {
                                                className: "flex flex-col space-y-4 text-[#A9A9A9] text-sm sm:text-base text-center",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "bg-red-900/50 border border-red-700 text-red-300 text-center text-sm p-3 rounded-lg",
                                                    children: [(0, r.jsx)("p", {
                                                        className: "font-bold",
                                                        children: "IMPORTANT"
                                                    }), (0, r.jsxs)("p", {
                                                        children: ["Only send", " ", (0, r.jsx)("span", {
                                                            className: "font-bold",
                                                            children: eh.fromCurrency.toUpperCase()
                                                        }), " ", "on the", " ", (0, r.jsx)("span", {
                                                            className: "font-bold",
                                                            children: (null === (e = $.find(e => e.ticker === eh.fromCurrency)) || void 0 === e ? void 0 : e.networkDisplayName) || eh.fromNetwork
                                                        }), " ", "network to this address. Other assets or networks will result in permanent loss."]
                                                    })]
                                                }), (null == eh ? void 0 : eh.fromAmount) && (null == eh ? void 0 : eh.fromCurrency) && (0, r.jsxs)("p", {
                                                    className: "",
                                                    children: ["Send", " ", (0, r.jsxs)("span", {
                                                        className: "bg-background",
                                                        children: [eh.fromAmount, " ", eh.fromCurrency.toUpperCase(), " (", (null === (t = $.find(e => e.ticker === eh.fromCurrency)) || void 0 === t ? void 0 : t.networkDisplayName) || eh.fromNetwork, ")"]
                                                    }), " ", "to this address:", " ", (0, r.jsx)(L, {
                                                        children: (0, r.jsxs)(_, {
                                                            children: [(0, r.jsx)(q, {
                                                                onClick: () => {
                                                                    (null == eh ? void 0 : eh.payinAddress) ? (navigator.clipboard.writeText(eh.payinAddress), (0, i.oR)({
                                                                        title: "Address Copied",
                                                                        description: "The deposit address has been copied to your clipboard."
                                                                    })) : (0, i.oR)({
                                                                        title: "Copy Failed",
                                                                        description: "No address available to copy.",
                                                                        variant: "destructive"
                                                                    })
                                                                },
                                                                children: (0, r.jsx)("span", {
                                                                    className: "break-all text-left bg-background hover:bg-foreground/20 cursor-pointer",
                                                                    children: (null == eh ? void 0 : eh.payinAddress) || "Address not available"
                                                                })
                                                            }), (0, r.jsx)(W, {
                                                                children: (0, r.jsx)("p", {
                                                                    children: "Copy Address"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                }), eg && (0, r.jsx)("div", {
                                                    className: "flex justify-center",
                                                    children: (0, r.jsx)(a.default, {
                                                        src: eg,
                                                        width: 128,
                                                        height: 128,
                                                        alt: "QR Code"
                                                    })
                                                }), (0, r.jsxs)("p", {
                                                    children: ["You will receive:", " ", ((null == eh ? void 0 : eh.toAmount) || 0).toFixed(2), " ", eh.toCurrency.toUpperCase() || "N/A", " ", "within 45 minutes"]
                                                }), (0, r.jsxs)("p", {
                                                    className: "-mt-1 italic",
                                                    children: ["Click", " ", (0, r.jsx)(X(), {
                                                        href: "https://web.archive.org/web/20250615234246/https://changenow.io/exchange/txs/".concat(eh.id),
                                                        target: "_blank",
                                                        className: "text-blue-400 hover:underline",
                                                        children: "here"
                                                    }), " ", "to track your exchange or contact exchange support."]
                                                })]
                                            }) : (0, r.jsx)("p", {
                                                children: "Something went wrong"
                                            })
                                        }, "results")
                                    })
                                })]
                            });
                        return (0, r.jsxs)("div", {
                            className: "bg-[#131619] border border-[#4E4E4E] rounded-[2px] p-4 sm:p-6",
                            children: ["main" === s && ej, "receive" === s && eN, "send" === s && ew, "exchange" === s && ey]
                        })
                    },
                    G = ["Settings", "Claim", "History", "Wallet"],
                    H = e => {
                        let {
                            setShowUserModal: t,
                            defaultTab: s = G[0]
                        } = e, [a, i] = (0, n.useState)(s), [o, l] = (0, n.useState)(!1);
                        return (0, r.jsxs)("div", {
                            className: "",
                            children: [(0, r.jsx)("h2", {
                                className: "text-center text-[#F2E691] text-xl font-bold",
                                children: o ? "Profile Photo" : a
                            }), o ? (0, r.jsx)(h, {
                                setShowPfpView: l
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "mt-4 w-full grid grid-cols-2 sm:grid-cols-4",
                                    children: G.map(e => (0, r.jsx)("button", {
                                        onClick: () => i(e),
                                        className: "".concat(a === e ? "bg-[#2F322D] text-[#F2E691]" : "cursor-pointer bg-[#1E2125] text-white hover:bg-stone-900", " border border-[#4E4E4E] p-1 text-base font-medium"),
                                        children: e
                                    }, e))
                                }), (0, r.jsx)("div", {
                                    className: "mt-8",
                                    children: (() => {
                                        switch (a) {
                                            case "Settings":
                                                return (0, r.jsx)(u, {
                                                    setShowUserModal: t,
                                                    setShowPfpView: l
                                                });
                                            case "Claim":
                                                return (0, r.jsx)(p.A, {});
                                            case "History":
                                                return (0, r.jsx)(x.A, {});
                                            case "Wallet":
                                                return (0, r.jsx)(Y, {});
                                            default:
                                                return null
                                        }
                                    })()
                                })]
                            })]
                        })
                    }
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
  captures_list: 0.506
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.012
  cdx.remote: 31.911
  LoadShardBlock: 138.192 (3)
  PetaboxLoader3.datanode: 124.409 (5)
  load_resource: 255.038 (2)
  PetaboxLoader3.resolve: 123.55 (2)
*/