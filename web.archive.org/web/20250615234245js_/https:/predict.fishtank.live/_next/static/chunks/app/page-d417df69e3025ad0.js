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
        [58974], {
            19619: (e, t, n) => {
                Promise.resolve().then(n.bind(n, 22413))
            },
            22413: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => v
                });
                var a = n(95155),
                    s = n(12115);
                let i = e => {
                    let {
                        activeTab: t,
                        setActiveTab: n
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "flex border border-[#4E4E4E] p-[2px] rounded-[8px]",
                        children: [(0, a.jsxs)("button", {
                            className: "cursor-pointer text-base font-bold py-1 px-4 rounded-[6px] ".concat("all" === t ? "bg-[#131619] text-[#53D0B0] border border-[#4E4E4E]" : " text-white hover:bg-stone-900"),
                            onClick: () => n("all"),
                            children: ["All ", (0, a.jsx)("span", {
                                className: "hidden sm:inline-block",
                                children: "Predictions"
                            })]
                        }), (0, a.jsxs)("button", {
                            className: "cursor-pointer text-base font-bold py-1 px-4 rounded-[6px] ".concat("live" === t ? "bg-[#131619] text-[#53D0B0] border border-[#4E4E4E]" : "text-white hover:bg-stone-900"),
                            onClick: () => n("live"),
                            children: ["Live ", (0, a.jsx)("span", {
                                className: "hidden sm:inline-block",
                                children: "Predictions"
                            })]
                        }), (0, a.jsxs)("button", {
                            className: "cursor-pointer text-base font-bold py-1 px-4 rounded-[6px] ".concat("yours" === t ? "bg-[#131619] text-[#53D0B0] border border-[#4E4E4E]" : "text-white hover:bg-stone-900"),
                            onClick: () => n("yours"),
                            children: ["Your", (0, a.jsx)("span", {
                                className: "sm:hidden",
                                children: "s"
                            }), " ", (0, a.jsx)("span", {
                                className: "hidden sm:inline-block",
                                children: "Predictions"
                            })]
                        })]
                    })
                };
                var r = n(7345),
                    l = n(87729),
                    o = n(71391),
                    d = n(40297),
                    c = n(89888),
                    u = n(32206),
                    m = n(32068),
                    h = n(64106),
                    f = n(78144),
                    g = n(97727),
                    p = n(41112);
                let x = (0, m.P)({
                        client: h.S,
                        chain: f.E,
                        address: l.u3
                    }),
                    b = e => {
                        let {
                            betsToShow: t
                        } = e, n = (0, g.L)(), [i, m] = (0, s.useState)(0), [h, f] = (0, s.useState)(0), [b, v] = (0, s.useState)([]), [B, j] = (0, s.useState)([]), [y, w] = (0, s.useState)([]), [C, E] = (0, s.useState)([]), {
                            data: N
                        } = (0, p.Q)({
                            contract: l.xO,
                            method: "function getUserBalanceWithCredits(address user) returns (uint256)",
                            params: [(null == n ? void 0 : n.address) || d.Xd],
                            queryOptions: {
                                enabled: void 0 != n,
                                refetchInterval: 3e3
                            }
                        }), {
                            data: I
                        } = (0, p.Q)({
                            contract: l.kW,
                            method: "allowance",
                            params: [(null == n ? void 0 : n.address) || d.Xd, l.TI],
                            queryOptions: {
                                enabled: !!n,
                                refetchInterval: 3e3
                            }
                        }), {
                            data: S
                        } = (0, p.Q)({
                            contract: l.xO,
                            method: "function getActiveBetContestsIDs() returns (uint256[])",
                            params: [],
                            queryOptions: {
                                refetchInterval: 3e3
                            }
                        }), {
                            data: F
                        } = (0, p.Q)({
                            contract: l.xO,
                            method: "function batchGetBetContests(uint256[]) returns ((string, uint256[], string[], uint256, uint256, uint8, address[], uint256, uint256, bool, string[])[])",
                            params: [S || []],
                            queryOptions: {
                                enabled: S && S.length > 0,
                                refetchInterval: 3e3
                            }
                        }), {
                            data: O
                        } = (0, p.Q)({
                            contract: x,
                            method: "function batchUserBets(uint256[], address) returns (uint256[][])",
                            params: [S || [], (null == n ? void 0 : n.address) || d.Xd],
                            queryOptions: {
                                enabled: S && S.length > 0 && !!n,
                                refetchInterval: 3e3
                            }
                        }), {
                            data: A,
                            isLoading: k
                        } = (0, p.Q)({
                            contract: l.xO,
                            method: "function getNumContestsBetOnByUser(address user) returns (uint256)",
                            params: [(null == n ? void 0 : n.address) || d.Xd],
                            queryOptions: {
                                enabled: !!n,
                                refetchInterval: 3e3
                            }
                        }), {
                            data: D
                        } = (0, p.Q)({
                            contract: l.xO,
                            method: "function paginateContestsBetOnByUser(address user, uint256 start, uint256 end) returns (uint256[] memory)",
                            params: [(null == n ? void 0 : n.address) || d.Xd, (() => {
                                if (k || !A) return BigInt(0);
                                let e = parseInt(A.toString());
                                return BigInt(e > 25 ? e - 25 : 0)
                            })(), A || BigInt(1e4)],
                            queryOptions: {
                                enabled: !!n && !k && void 0 !== A,
                                refetchInterval: 3e3
                            }
                        }), {
                            data: T
                        } = (0, p.Q)({
                            contract: l.xO,
                            method: "function batchGetBetContests(uint256[]) returns ((string, uint256[], string[], uint256, uint256, uint8, address[], uint256, uint256, bool, string[])[])",
                            params: [D || []],
                            queryOptions: {
                                enabled: D && D.length > 0,
                                refetchInterval: 3e3
                            }
                        }), {
                            data: L
                        } = (0, p.Q)({
                            contract: x,
                            method: "function batchUserBets(uint256[], address) returns (uint256[][])",
                            params: [D || [], (null == n ? void 0 : n.address) || d.Xd],
                            queryOptions: {
                                enabled: D && D.length > 0 && !!n,
                                refetchInterval: 3e3
                            }
                        });
                        (0, s.useEffect)(() => {
                            m(parseFloat((0, c.J)(N || BigInt(0), l.eC)))
                        }, [
                            [N]
                        ]), (0, s.useEffect)(() => {
                            I && f(parseFloat((0, c.J)(I, l.eC)))
                        }, [I]), (0, s.useEffect)(() => {
                            F && S && S.length == F.length && v(F.map((e, t) => ({
                                id: parseInt(S[t].toString()),
                                betName: e[0],
                                optionBetAmounts: e[1].map(e => parseFloat((0, c.J)(e, l.eC))),
                                optionNames: e[2],
                                bettingStartTime: parseInt(e[3].toString()),
                                bettingEndTime: parseInt(e[4].toString()),
                                winningOption: e[5],
                                betters: e[6],
                                refundModeEnabled: e[9],
                                metadata: e[10]
                            })).reverse())
                        }, [F, S]), (0, s.useEffect)(() => {
                            T && D && D.length == T.length && j(T.map((e, t) => ({
                                id: parseInt(D[t].toString()),
                                betName: e[0],
                                optionBetAmounts: e[1].map(e => parseFloat((0, c.J)(e, l.eC))),
                                optionNames: e[2],
                                bettingStartTime: parseInt(e[3].toString()),
                                bettingEndTime: parseInt(e[4].toString()),
                                winningOption: e[5],
                                betters: e[6],
                                refundModeEnabled: e[9],
                                metadata: e[10]
                            })).reverse())
                        }, [T, D]), (0, s.useEffect)(() => {
                            O && w(O.map((e, t) => e.map(e => parseFloat((0, c.J)(e, l.eC)))))
                        }, [O, S]), (0, s.useEffect)(() => {
                            L && E(L.map((e, t) => e.map(e => parseFloat((0, c.J)(e, l.eC)))))
                        }, [L, D]);
                        let [q, Q] = s.useState(!1);
                        if ((0, s.useEffect)(() => {
                                Q(!0), setTimeout(() => {
                                    Q(!1)
                                }, 500)
                            }, [t]), q) return (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, a.jsx)(o.J, {}), (0, a.jsx)(o.J, {})]
                        });
                        let J = () => {
                                if (b && b.length > 0) {
                                    let e = b.find(e => e.betName.toLowerCase().includes("contestant to be eliminated"));
                                    if (e) return e
                                }
                            },
                            W = e => {
                                if (b && b.length > 0) {
                                    let t = J(),
                                        a = t ? b.filter(e => e.id !== (null == t ? void 0 : t.id)) : b;
                                    if ("all" == e);
                                    else if ("live" == e) return a.filter(e => (0, u.kz)(e.bettingEndTime) > 0);
                                    else if ("yours" == e) {
                                        if (!n) return a;
                                        let e = a.filter(e => e.betters.includes(n.address));
                                        if (0 == B.length || void 0 === D || B.length !== D.length) return e;
                                        if (0 == e.length) return B;
                                        let t = new Set(e.map(e => e.id));
                                        return [...e, ...B.filter(e => !1 == t.has(e.id))]
                                    }
                                    return a
                                }
                                return []
                            },
                            X = e => {
                                if (b) {
                                    let t = W(e),
                                        n = J();
                                    return !!(n && $(n, e)) || t.length > 0
                                }
                                return !1
                            },
                            $ = (e, t) => {
                                if (!e) return !1;
                                if ("all" === t);
                                else if ("live" === t) return (0, u.kz)(e.bettingEndTime) > 0;
                                else if ("yours" === t) return !!n && e.betters.includes(n.address);
                                return !0
                            },
                            _ = J(),
                            P = e => {
                                if (y && y.length > 0 && S) {
                                    let t = null == S ? void 0 : S.findIndex(t => t === BigInt(e.id));
                                    if (void 0 !== t && t >= 0) return y[t];
                                    if (C && C.length > 0 && D) {
                                        let t = null == D ? void 0 : D.findIndex(t => t === BigInt(e.id));
                                        if (void 0 !== t && t >= 0) return C[t]
                                    }
                                }
                                return []
                            };
                        return (0, a.jsxs)(a.Fragment, {
                            children: ["all" === t && (0, a.jsx)(a.Fragment, {
                                children: X("all") ? (0, a.jsxs)(a.Fragment, {
                                    children: [$(_, "all") && _ && (0, a.jsx)(r.A, {
                                        betContest: _,
                                        isConnected: !!n,
                                        address: null == n ? void 0 : n.address,
                                        walletBalance: i || 0,
                                        formattedWalletBalance: "$".concat((i || 0).toLocaleString([], {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })),
                                        allowance: h || 0,
                                        sticky: !0,
                                        userBetAmounts: P(_)
                                    }, _.id), W("all").map(e => (0, a.jsx)(r.A, {
                                        betContest: e,
                                        isConnected: !!n,
                                        address: null == n ? void 0 : n.address,
                                        walletBalance: i || 0,
                                        formattedWalletBalance: "$".concat((i || 0).toLocaleString([], {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })),
                                        allowance: h || 0,
                                        userBetAmounts: P(e)
                                    }, e.id))]
                                }) : (0, a.jsx)("div", {
                                    className: "min-h-[30vh] flex justify-center items-center text-white text-center",
                                    children: "No predictions available at the moment."
                                })
                            }), "live" === t && (0, a.jsx)(a.Fragment, {
                                children: X("live") ? (0, a.jsxs)(a.Fragment, {
                                    children: [$(_, "live") && _ && (0, a.jsx)(r.A, {
                                        betContest: _,
                                        isConnected: !!n,
                                        address: null == n ? void 0 : n.address,
                                        walletBalance: i || 0,
                                        formattedWalletBalance: "$".concat((i || 0).toLocaleString([], {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })),
                                        allowance: h || 0,
                                        sticky: !0,
                                        userBetAmounts: P(_)
                                    }, _.id), W("live").map(e => (0, a.jsx)(r.A, {
                                        betContest: e,
                                        isConnected: !!n,
                                        address: null == n ? void 0 : n.address,
                                        walletBalance: i || 0,
                                        formattedWalletBalance: "$".concat((i || 0).toLocaleString([], {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })),
                                        allowance: h || 0,
                                        userBetAmounts: P(e)
                                    }, e.id))]
                                }) : (0, a.jsx)("div", {
                                    className: "min-h-[30vh] flex justify-center items-center text-white text-center",
                                    children: "No live predictions available at the moment."
                                })
                            }), "yours" === t && (0, a.jsx)(a.Fragment, {
                                children: X("yours") ? (0, a.jsxs)(a.Fragment, {
                                    children: [$(_, "yours") && _ && (0, a.jsx)(r.A, {
                                        betContest: _,
                                        isConnected: !!n,
                                        address: null == n ? void 0 : n.address,
                                        walletBalance: i || 0,
                                        formattedWalletBalance: "$".concat((i || 0).toLocaleString([], {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })),
                                        allowance: h || 0,
                                        sticky: !0,
                                        userBetAmounts: P(_)
                                    }, _.id), W("yours").map(e => (0, a.jsx)(r.A, {
                                        betContest: e,
                                        isConnected: !!n,
                                        address: null == n ? void 0 : n.address,
                                        walletBalance: i || 0,
                                        formattedWalletBalance: "$".concat((i || 0).toLocaleString([], {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })),
                                        allowance: h || 0,
                                        userBetAmounts: P(e)
                                    }, e.id))]
                                }) : (0, a.jsx)("div", {
                                    className: "min-h-[30vh] flex justify-center items-center text-white text-center",
                                    children: "You haven't placed any predictions yet."
                                })
                            })]
                        })
                    };

                function v() {
                    let [e, t] = (0, s.useState)("all");
                    return (0, a.jsx)("div", {
                        className: "min-h-screen p-4 pb-10 gap-16 sm:p-10 lg:px-20 lg:py-10",
                        children: (0, a.jsxs)("main", {
                            className: "flex flex-col gap-6 sm:gap-8 row-start-2 items-center sm:items-start",
                            children: [(0, a.jsx)("div", {
                                className: "w-full flex justify-center",
                                children: (0, a.jsx)(i, {
                                    activeTab: e,
                                    setActiveTab: t
                                })
                            }), (0, a.jsx)("div", {
                                className: "w-full max-w-4xl mx-auto flex flex-col gap-8",
                                children: (0, a.jsx)(b, {
                                    betsToShow: e
                                })
                            })]
                        })
                    })
                }
            }
        },
        e => {
            var t = t => e(e.s = t);
            e.O(0, [85105, 7745, 5565, 15136, 45186, 81816, 78159, 28441, 86587, 77358], () => t(19619)), _N_E = e.O()
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
  captures_list: 0.568
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 32.538
  LoadShardBlock: 183.085 (3)
  PetaboxLoader3.datanode: 111.55 (4)
  PetaboxLoader3.resolve: 258.284 (2)
  load_resource: 220.527
*/