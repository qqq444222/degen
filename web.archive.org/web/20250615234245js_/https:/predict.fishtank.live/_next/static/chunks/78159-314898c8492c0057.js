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
        [78159], {
            7345: (e, t, n) => {
                n.d(t, {
                    A: () => C
                });
                var o = n(95155),
                    i = n(12115),
                    r = n(5565),
                    a = n(13478),
                    s = n(20241),
                    l = n(81143),
                    c = n(52678),
                    d = n(62685),
                    u = n(87729),
                    h = n(26542),
                    m = n(35684),
                    p = n(18676),
                    x = n(73571);
                let f = e => {
                    let {
                        closeModal: t,
                        betContest: n,
                        optionClickedIndex: f,
                        isConnected: b = !1,
                        walletBalance: g,
                        formattedWalletBalance: y,
                        allowance: v
                    } = e, [w, j] = (0, i.useState)(f || 0), [N, E] = (0, i.useState)(void 0 === g || g <= 0 ? "" : Math.min(25, g || 0).toString()), [C, S] = (0, i.useState)(!1), [A, F] = (0, i.useState)(!1), [T, Y] = (0, i.useState)(!1), [P, B] = (0, i.useState)(!1), [D, k] = (0, i.useState)("");
                    (0, i.useEffect)(() => {
                        null !== w && n && N && k("".concat((0, l.Dj)(n, w, parseFloat(N || "0") || 0)))
                    }, [w, N]);
                    let I = (0, d.m)({
                        contract: u.kW,
                        method: "approve",
                        params: [u.TI, h.Ao]
                    });
                    (0, i.useEffect)(() => {
                        if (!b) {
                            S(!1);
                            return
                        }
                        g && S("" !== N && parseFloat(N || "0") > 0 && parseFloat(N || "0") <= g && null !== w)
                    }, [b, g, N]);
                    let W = () => (0, d.m)({
                        contract: u.xO,
                        method: "function bet(uint256 contestID, uint8 optionID, uint256 amount)",
                        params: [BigInt(n.id), w, (0, m.X)(N || "0", u.eC)]
                    });
                    if (!0 === A) return (0, o.jsxs)(a.P.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 20
                        },
                        className: "mt-12 flex flex-col gap-6 w-full",
                        children: [(0, o.jsx)("h3", {
                            className: "text-[#F2E691] text-xl font-bold uppercase text-center",
                            children: "Prediction Placed!"
                        }), (0, o.jsxs)("div", {
                            className: "text-left font-medium text-lg",
                            children: [(0, o.jsxs)("div", {
                                children: [(0, o.jsx)("p", {
                                    className: "text-xs text-[#4E4E4E]",
                                    children: "Market"
                                }), (0, o.jsx)("p", {
                                    children: n.betName
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "mt-5 grid grid-cols-1 md:grid-cols-2 gap-y-[20px] gap-x-4",
                                children: [(0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("p", {
                                        className: "text-xs text-[#4E4E4E]",
                                        children: "Your Prediction"
                                    }), (0, o.jsx)("p", {
                                        children: n.optionNames[w]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("p", {
                                        className: "text-xs text-[#4E4E4E]",
                                        children: "Current Odds"
                                    }), (0, o.jsx)("p", {
                                        children: (0, l.El)(n, w, 1e-5)
                                    })]
                                }), (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("p", {
                                        className: "text-xs text-[#4E4E4E]",
                                        children: "Prediction Amount"
                                    }), (0, o.jsxs)("p", {
                                        children: ["$", N]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("p", {
                                        className: "text-xs text-[#4E4E4E]",
                                        children: "Current Potential Winnings"
                                    }), (0, o.jsxs)("p", {
                                        children: ["$", D]
                                    })]
                                })]
                            })]
                        }), (0, o.jsx)("div", {
                            className: "bg-[##131619] border border-[#4E4E4E] rounded-[2px] px-6 py-4 flex justify-center items-center text-center text-[#A9A9A9] text-sm",
                            children: (0, o.jsx)("p", {
                                children: "Your prediction has been placed! Good luck!"
                            })
                        }), (0, o.jsxs)("div", {
                            className: "flex flex-col xs:flex-row items-center gap-4 sm:gap-6",
                            children: [(0, o.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    let e = u.V2 + "prediction/" + n.id;
                                    navigator.clipboard.writeText(e), (0, s.oR)({
                                        title: "Copied Link",
                                        description: "Direct link has been copied to clipboard."
                                    })
                                },
                                className: "w-full h-min m-auto bg-[#101C18] border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center cursor-pointer hover:bg-[#243d35]",
                                children: "Share It!"
                            }), (0, o.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    F(!1), t()
                                },
                                className: "w-full h-min m-auto bg-[#53D0B0] hover:bg-[#53D0B0]/70 border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#101C18] text-center cursor-pointer",
                                children: "Explore More"
                            })]
                        })]
                    });
                    let M = e => {
                        !P && j(e)
                    };
                    return (0, o.jsxs)(o.Fragment, {
                        children: [T && (0, o.jsx)(p.z, {
                            wider: !0,
                            onClose: () => Y(!1),
                            children: (0, o.jsx)(x.A, {
                                setShowUserModal: Y,
                                defaultTab: "Wallet"
                            })
                        }), (0, o.jsxs)("div", {
                            className: "mt-12",
                            children: [(0, o.jsx)("div", {
                                className: "text-left text-[#F2E691] text-xl font-bold",
                                children: n.betName
                            }), (0, o.jsxs)("div", {
                                className: "mt-6 sm:mt-8 h-full flex flex-col gap-4 w-full relative",
                                children: [(0, o.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, o.jsx)("p", {
                                        className: "text-left font-medium text-xs text-[#A9A9A9]",
                                        children: "Predict"
                                    }), (0, o.jsxs)("div", {
                                        className: "mt-1 relative w-full",
                                        children: [(0, o.jsx)("select", {
                                            name: "",
                                            id: "",
                                            defaultValue: f,
                                            onChange: e => M(Number(e.target.value)),
                                            className: "w-full text-left bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium appearance-none pr-10 focus:outline-none focus:ring focus:ring-[#F2E691] focus:border-[#F2E691]",
                                            children: n.optionNames.map((e, t) => (0, o.jsx)("option", {
                                                value: t,
                                                children: e
                                            }, t))
                                        }), (0, o.jsx)("div", {
                                            className: "absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none",
                                            children: (0, o.jsx)(r.default, {
                                                src: "/icons/chevron.svg",
                                                alt: "chevron",
                                                width: 16,
                                                height: 16
                                            })
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, o.jsxs)("div", {
                                        className: "flex justify-between font-medium text-xs text-[#A9A9A9]",
                                        children: [(0, o.jsx)("p", {
                                            className: "text-left",
                                            children: "Amount to Predict"
                                        }), y && (0, o.jsxs)("p", {
                                            className: "text-right",
                                            children: ["Balance: ", y]
                                        })]
                                    }), (0, o.jsx)("div", {
                                        className: "flex gap-0.5 items-center",
                                        children: (0, o.jsx)("input", {
                                            type: "text",
                                            inputMode: "decimal",
                                            name: "betAmount",
                                            id: "betAmount",
                                            placeholder: "Prediction Amount",
                                            value: N || "",
                                            onChange: e => {
                                                let t = e.target.value;
                                                !P && ("" === t || /^\d*\.?\d*$/.test(t)) && E(t)
                                            },
                                            className: "mt-1 w-full text-left bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] ".concat((g || 0) >= (parseFloat(N || "0") || 0) ? "text-white" : "text-red-500", " font-medium focus:outline-none focus:ring focus:ring-[#F2E691] focus:border-[#F2E691]")
                                        })
                                    }), (0, o.jsxs)("div", {
                                        className: "mt-[6px] flex items-center gap-4",
                                        children: [b && parseFloat(N || "0") > (null != g ? g : 0) ? (0, o.jsx)("p", {
                                            className: "text-xs text-red-500",
                                            children: "Insufficient Balance"
                                        }) : b && !1 === C && parseFloat(N || "0") <= (null != g ? g : 0) && (0, o.jsx)("p", {
                                            className: "text-xs text-red-500",
                                            children: "Enter a valid amount"
                                        }), !!b && (!!(parseFloat(N || "0") > (null != g ? g : 0)) || !!((null != g ? g : 0) <= .5)) && (0, o.jsx)("button", {
                                            type: "button",
                                            onClick: () => Y(!0),
                                            disabled: !b,
                                            className: "cursor-pointer text-left text-xs text-[#A9A9A9] hover:text-[#A9A9A9]/80 underline",
                                            children: "Add Funds"
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, o.jsx)("p", {
                                        className: "text-left font-medium text-xs text-[#A9A9A9]",
                                        children: "Current Odds"
                                    }), (0, o.jsx)("div", {
                                        className: "mt-1 w-full text-left bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                        children: "+0" == (0, l.El)(n, w, 0) ? "You Are Placing The First Prediction" : "--" == (0, l.El)(n, w, 0) ? "No Predictions On Other Option" : (0, l.El)(n, w, parseFloat(N || "0") || 0)
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, o.jsx)("p", {
                                        className: "text-left font-medium text-xs text-[#A9A9A9]",
                                        children: "Current Payout"
                                    }), (0, o.jsx)("div", {
                                        className: "mt-1 w-full text-left bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                        children: null !== w ? "$".concat(D) : "Select an option"
                                    })]
                                })]
                            }), b ? null === N || "" === N || 0 >= parseFloat(N || "0") ? (0, o.jsx)("button", {
                                className: "mt-6 sm:mt-8 w-full h-min m-auto bg-[#101C18]  border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center opacity-50 cursor-not-allowed",
                                disabled: !0,
                                children: "Enter Prediction Amount"
                            }) : void 0 === g || g < parseFloat(N || "0") ? (0, o.jsx)("button", {
                                className: "mt-6 sm:mt-8 w-full h-min m-auto bg-[#101C18]  border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center opacity-50 cursor-not-allowed",
                                disabled: !0,
                                children: "Insufficient Balance"
                            }) : parseFloat(N || "0") > v ? (0, o.jsx)(c.v, {
                                transaction: () => I,
                                disabled: !C,
                                unstyled: !0,
                                className: "mt-6 sm:mt-8 w-full h-min m-auto bg-[#101C18]  border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center flex justify-center items-center ".concat(C ? "cursor-pointer hover:bg-[#243d35]" : "opacity-50 cursor-not-allowed"),
                                onTransactionConfirmed: () => {
                                    (0, s.oR)({
                                        title: "Approval Confirmed",
                                        description: "Successfully Approved USDC."
                                    }), B(!1)
                                },
                                onTransactionSent: () => {
                                    (0, s.oR)({
                                        title: "Approval Sent",
                                        description: "Waiting for approval..."
                                    }), B(!0)
                                },
                                onError: () => {
                                    (0, s.oR)({
                                        title: "Approval Failed",
                                        description: "Failed to approve USDC.",
                                        variant: "destructive"
                                    }), B(!1)
                                },
                                children: "Approve"
                            }) : (0, o.jsx)(c.v, {
                                transaction: () => W(),
                                disabled: !C,
                                unstyled: !0,
                                className: "mt-6 sm:mt-8 w-full h-min m-auto bg-[#101C18]  border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center ".concat(C ? "cursor-pointer hover:bg-[#243d35]" : "opacity-50 cursor-not-allowed"),
                                onTransactionConfirmed: () => {
                                    (0, s.oR)({
                                        title: "Prediction Confirmed",
                                        description: "Successfully Placed Prediction."
                                    }), F(!0)
                                },
                                onTransactionSent: () => {
                                    (0, s.oR)({
                                        title: "Prediction Sent",
                                        description: "Waiting for confirmation..."
                                    })
                                },
                                onError: () => {
                                    (0, s.oR)({
                                        title: "Prediction Failed",
                                        description: "Failed to place Prediction.",
                                        variant: "destructive"
                                    })
                                },
                                children: "Place Prediction"
                            }) : (0, o.jsx)("button", {
                                className: "mt-6 sm:mt-8 w-full h-min m-auto bg-[#101C18]  border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center opacity-50 cursor-not-allowed",
                                disabled: !0,
                                children: "Login to Predict"
                            })]
                        })]
                    })
                };
                var b = n(24786),
                    g = n(15158),
                    y = n(32206),
                    v = n(69596),
                    w = n(25683);
                let j = ["Please read these terms and conditions carefully before using PVP Money and any of its connected services.", "PVP.money is owned and operated by PVP Money System Limitada and is registered in Costa Rica.", "Interpretation and Definitions\nInterpretation\nThe words of which the initial letter is capitalized have meanings defined under the following conditions.\nThe following definitions shall have the same meaning regardless of whether they appear in singular or in plural.", 'Definitions\nFor the purposes of these Terms and Conditions:\nCompany: (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to PVP Money Systems Limitada.\nCountry: refers to “Costa Rica”.\nService: refers to the Website or any subsidiary pages on the website.\nRestricted Jurisdiction: refers to any jurisdiction, state, country, or region as outlined in the ‘Restricted Regions and Jurisdictions’ section of these Terms.\nTerms and Conditions: (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.\nWebsite: refers to PVP.money, accessible from the Company.\nYou: means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. The term ‘Your’ also refers to the individual in the same way as aforementioned.', "Acknowledgement\nThese are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.\nYour access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.\nBy accessing or using the Service, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, then You may not access the Service.\nBy accessing or using the Service, You confirm to be 18 years or older. If You are not 18 years or older, You may not access the Service.\nYou are not allowed to register on the Website or use Our Service if you are a resident of any Restricted Jurisdiction. We reserve the right to refuse customers from any other countries over and above these jurisdictions at Our own discretion. It is the responsibility and duty of You to ensure that You are legally allowed to use Our Service based on Your local laws and regulations.\nFor legal reasons, some or all residents or persons located in certain countries, may be prohibited from accessing certain services on the Website. This Website is not intended to be used by persons in countries where such activities are prohibited. You are responsible for researching the laws applicable in Your locality or country. You must ensure that You are complying with relevant laws in the jurisdiction in which You are using the Website or any Service offered by Us.\nYour access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.", "Grant of License\nWe grant You a non-exclusive, personal, non-transferable right to use Our Service on any device able to connect to the internet in Your possession. This right also extends to other platforms that may choose to integrate or utilise the Service as owned and provisioned by the Company.\nThe Service is for adults only, therefore Minors below the age of 18 are not permitted to access the Website or use any Service on the Website. We do not allow gambling below the age of 18, even if it is allowed in Your jurisdiction.", "Intellectual Property\nThe Service and its original content, features and functionality are and will remain the exclusive property of the Company.\nThe Service is protected by copyright, trademark, and other laws of both the Country of Company registration and other foreign countries.\nOur trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.", "Links to Other Websites\nOur Service may contain links to third-party web sites or services that are not owned or controlled by the Company.\nThe Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly, or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.\nWe strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.", "Limitation of Liability\nNotwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing, shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.\nTo the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.\nSome jurisdictions do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these jurisdictions, each party's liability will be limited to the greatest extent permitted by law.", 'As Is and As Available Disclaimer\nThe Service is provided to You "As Is" and "As Available" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Shareholders and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.\nWithout limiting the foregoing, neither the Company nor any of the company\'s provider(s) makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.\nSome jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.', "Governing Law\nThe laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.\nThe Service shall be provided, governed, and enforced in accordance with the laws of the Country, without regard to its conflict of laws rules. It\xb4s courts shall have exclusive jurisdiction.", "Disputes Resolution\nIf You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.", "For European Union (EU) Users\nIf You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.", "United States Legal Compliance\nYou represent and warrant that; (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a “terrorist supporting” country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.", "Restricted Region and Territories\nIndividuals in, under the control of, or a national or resident of the following jurisdictions are prohibited from participating and using the Service:\nAlgeria, American Samoa, Angola, Aruba, Australia, Austria, Belgium, Bonaire, Sint Eustatius and Saba, Brunei Darussalam, Bulgaria, Cambodia, Christmas Island, Cocos (Keeling) Islands (the), Croatia, Cura\xe7ao, Cyprus, Czechia, France, French Guiana, French Polynesia, French Southern Territories (the), Germany, Guadeloupe, Guam, Heard Island and McDonald Islands, Korea (the Democratic People's Republic of), Korea (the Republic of), Martinique, Mayotte, Netherlands (the), Norfolk Island, Northern Mariana Islands (the), Norway, Pakistan, Poland, Puerto Rico, R\xe9union, Saint Barth\xe9lemy, Saint Martin (French part), Saint Pierre and Miquelon, Singapore, Sint Maarten (Dutch part), Spain, Thailand, United Arab Emirates (the), United Kingdom of Great Britain and Northern Ireland (the), United States of America (the), Virgin Islands (U.S.), Wallis and Futuna, and any other jurisdiction where laws prohibit participation in or require licensing or registration of the Company in order for participation to take place, or which is embargoed by the United States of America, the European Union or the United Kingdom.\nIf You are resident in, either permanently or temporarily, or connect to Our Service from any jurisdiction outlined above, You assume all responsibility for any attempted or successful usage of Our Service, and You agree that you are legally allowed to use the Service based on your location or residence.", "Severability and Waiver\nSeverability\nIf any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.\nWaiver\nExcept as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter, nor shall be the waiver of a breach constitute a waiver of any subsequent breach.", "Translation Interpretation\nThese Terms and Conditions may have been translated if We have made them available to You on our Service.\nYou agree that the original English text shall prevail in the case of a dispute.", "Changes to these Terms and Conditions\nWe reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 14 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.\nBy continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.", "Contact Us\nIf you have any questions about these Terms and Conditions, You can contact us:\nBy email: contact@pvp.money", "Last updated: June 12th, 2025"],
                    N = ["This is a prediction market platform. You might win, you might lose. That's how predictions work.", "Fishtank makes money from VOLUME, not outcomes. We profit whether you win or lose.", "Only an idiot would rig a prediction market platform, it kills the fun, and makes it not profitable over time.", "Fishtank is chaos by design. Random shit happens constantly. That's literally the show.", "By clicking “I Agree” you promise not to cry “rigged” if you lose a prediction.", "If you can't handle the unpredictability, go bet on golf."],
                    E = e => {
                        let {
                            closeModal: t
                        } = e, [n, r] = (0, i.useState)(0), [s, l] = (0, i.useState)(!1), c = !s && j.length > 3;
                        (0, i.useEffect)(() => {
                            if ((0, v.Di)()) {
                                t();
                                return
                            }
                            if ((0, v.Ui)()) {
                                if ((0, v.jY)()) {
                                    t();
                                    return
                                }
                                r(1)
                            }
                        }, []);
                        let d = e => {
                            if (0 === e) {
                                if ((0, v.hI)(), (0, v.jY)()) {
                                    t();
                                    return
                                }
                                r(1)
                            }
                            if (1 === e) {
                                if ((0, v.WP)(), (0, v.Ui)()) {
                                    t();
                                    return
                                }
                                r(0)
                            }
                        };
                        return (0, o.jsxs)(w.N, {
                            mode: "wait",
                            children: [0 === n && (0, o.jsxs)(a.P.div, {
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
                                className: "mt-12",
                                children: [(0, o.jsx)("h3", {
                                    className: "text-center text-[#F2E691] text-xl font-bold uppercase",
                                    children: "Anti-Whining Policy"
                                }), (0, o.jsxs)("div", {
                                    className: "",
                                    children: [(0, o.jsx)("div", {
                                        className: "mt-6 sm:mt-8 h-full flex flex-col gap-2",
                                        children: N.map((e, t) => (0, o.jsx)("div", {
                                            className: "mt-1 w-full text-left bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                            children: e
                                        }, t))
                                    }), (0, o.jsx)("button", {
                                        onClick: () => d(0),
                                        className: "mt-6 sm:mt-8 w-full h-min cursor-pointer m-auto bg-[#101C18] hover:bg-[#243d35] border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center",
                                        children: "I Agree - I'm Not a Whiner"
                                    })]
                                })]
                            }, "anti-whine-policy"), 1 === n && (0, o.jsxs)(a.P.div, {
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
                                className: "mt-12",
                                children: [(0, o.jsx)("h3", {
                                    className: "text-center text-[#F2E691] text-xl font-bold uppercase",
                                    children: "Terms and Conditions"
                                }), (0, o.jsxs)("div", {
                                    className: "",
                                    children: [(0, o.jsxs)("div", {
                                        className: "relative mt-6 sm:mt-8",
                                        children: [(0, o.jsx)("div", {
                                            className: "flex flex-col gap-2 transition-max-height duration-300 ".concat(s ? "max-h-full" : "max-h-[400px] overflow-hidden"),
                                            children: j.map((e, t) => (0, o.jsx)("div", {
                                                className: "mt-1 w-full text-left bg-[#1F2223] border border-[#4E4E4E] rounded-[2px] p-[10px] text-white font-medium",
                                                children: e
                                            }, t))
                                        }), c && (0, o.jsx)("div", {
                                            className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1213] to-transparent flex items-end justify-center",
                                            children: (0, o.jsx)("button", {
                                                onClick: () => l(!0),
                                                className: "cursor-pointer mb-2 text-sm text-[#53D0B0] underline hover:text-[#6FE6C3]",
                                                children: "Show More"
                                            })
                                        })]
                                    }), (0, o.jsx)("button", {
                                        onClick: () => d(1),
                                        className: "mt-6 sm:mt-8 w-full h-min cursor-pointer m-auto bg-[#101C18] hover:bg-[#243d35] border border-[#21493E] rounded-[2px] py-1 sm:py-2 px-6 font-medium text-base uppercase text-[#53D0B0] text-center",
                                        children: "I Agree to the Terms and Conditions"
                                    })]
                                })]
                            }, "terms-and-conditions")]
                        })
                    },
                    C = e => {
                        let {
                            betContest: t,
                            isConnected: n,
                            address: a,
                            walletBalance: c,
                            formattedWalletBalance: d,
                            allowance: h,
                            sticky: m = !1,
                            userBetAmounts: x = [],
                            hideTitle: w = !1
                        } = e, [j, N] = (0, i.useState)(!1), [C, S] = (0, i.useState)(!1), [A, F] = (0, i.useState)(null), [T, Y] = (0, i.useState)(!1), [P, B] = (0, i.useState)(!1), [D, k] = (0, i.useState)(!1), I = (0, y.Ay)({
                            targetTime: t.bettingEndTime
                        }), W = e => "Total Prediction Pool: $".concat(e.toLocaleString()), M = e => {
                            if (!1 == (0, v.Di)()) {
                                N(!0), (0, s.oR)({
                                    title: "Please agree to the terms.",
                                    description: "You must agree to the terms before placing a prediction."
                                });
                                return
                            }
                            F(e), S(!C)
                        }, O = e => {
                            Y(!T)
                        }, U = () => {
                            B(!P)
                        }, R = x.length > 0 ? x : Array(t.optionNames.length).fill(0), L = t.winningOption < t.optionNames.length, q = L ? 0 : (0, y.kz)(t.bettingEndTime), V = new Date(1e3 * t.bettingEndTime).toLocaleString("en-US", {
                            month: "long",
                            day: "2-digit",
                            year: "numeric"
                        }), z = e => t.winningOption === e ? "bg-[#101C18] border-[#53D0B0]" : R[e] > 0 ? L ? "bg-[#211413] border-[#562C2A]" : "bg-[#1B1F24] border-[#4E4E4E]" : "bg-[#131619] border-[#4E4E4E]", G = e => t.winningOption === t.optionBetAmounts.length ? R[e] > 0 ? (0, o.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:flex-row justify-between items-center gap-4",
                            children: [(0, o.jsxs)("p", {
                                className: "text-[#808080] text-sm font-medium text-center",
                                children: ["You have placed $", R[e].toLocaleString([], {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }), " ", "on this prediction."]
                            }), (0, o.jsx)("button", {
                                onClick: () => M(e),
                                className: "cursor-pointer bg-[#2F322D] text-[#F2E691] border border-[#4E4E4E] p-1 text-sm font-medium uppercase",
                                children: "Add More"
                            })]
                        }) : void 0 : t.winningOption === e ? R[e] > 0 ? (0, o.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:flex-row justify-between items-center gap-4",
                            children: [(0, o.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, o.jsx)(r.default, {
                                    src: "/icons/trophy.svg",
                                    alt: "Trophy Icon",
                                    width: 20,
                                    height: 20
                                }), (0, o.jsx)("p", {
                                    className: "text-[#808080] text-sm font-medium text-center",
                                    children: "You've won! Claim your share of the prize pool if you have not yet"
                                })]
                            }), (0, o.jsx)("button", {
                                onClick: () => O(e),
                                className: "cursor-pointer bg-[#2F322D] text-[#F2E691] border border-[#4E4E4E] p-1 text-sm font-medium uppercase",
                                children: "Claim Winnings"
                            })]
                        }) : (0, o.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, o.jsx)(r.default, {
                                src: "/icons/trophy.svg",
                                alt: "Trophy Icon",
                                width: 20,
                                height: 20
                            }), (0, o.jsx)("p", {
                                className: "text-[#808080] text-sm font-medium text-center",
                                children: "Winner!"
                            })]
                        }) : R[e] > 0 ? (0, o.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:flex-row justify-between items-center gap-4",
                            children: [(0, o.jsx)("p", {
                                className: "text-[#808080] text-sm font-medium text-center",
                                children: "Try again, Loser."
                            }), (0, o.jsx)("button", {
                                onClick: () => U(),
                                className: "cursor-pointer bg-[#2F322D] text-[#F2E691] border border-[#4E4E4E] p-1 text-sm font-medium uppercase",
                                children: "View History"
                            })]
                        }) : void 0, J = t.metadata.length > 0 ? t.metadata.filter((e, t) => t > 0) : [], _ = ["Daniel", "Arye", "Aryeh", "Jin", "Rachel", "Ellie", "Freddy", "Angelina", "Direnc"], $ = ["/contestants/daniel.png", "/contestants/Aryeh.png", "/contestants/Aryeh.png", "/contestants/Jin.png", "/contestants/Rachel.png", "/contestants/Ellie.png", "/contestants/Freddy.png", "/contestants/Angelina.png", "/contestants/Direnc.png"], K = e => {
                            let t = _.findIndex(t => t.toLowerCase() === e.toLowerCase());
                            if (-1 !== t) return $[t]
                        }, H = e => "Arye" === e ? "Aryeh" : e;
                        return (0, o.jsxs)(o.Fragment, {
                            children: [j && (0, o.jsx)(p.z, {
                                onClose: () => N(!1),
                                children: (0, o.jsx)(E, {
                                    closeModal: () => {
                                        N(!1)
                                    }
                                })
                            }), C && (0, o.jsx)(p.z, {
                                onClose: () => S(!1),
                                children: (0, o.jsx)(f, {
                                    closeModal: () => S(!1),
                                    betContest: t,
                                    optionClickedIndex: A,
                                    isConnected: n,
                                    walletBalance: c,
                                    formattedWalletBalance: d,
                                    allowance: h
                                })
                            }), T && (0, o.jsx)(p.z, {
                                onClose: () => Y(!1),
                                children: (0, o.jsx)(b.A, {})
                            }), P && (0, o.jsx)(p.z, {
                                onClose: () => B(!1),
                                children: (0, o.jsx)(g.A, {})
                            }), (0, o.jsxs)("div", {
                                className: "bg-[#0B0D0F] border ".concat(m ? "border-[#F2E691]" : "border-[#4E4E4E]", " rounded-[2px] px-2 md:px-6 py-6"),
                                children: [!w && (0, o.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row justify-between font-bold",
                                    children: [(0, o.jsx)("h3", {
                                        className: "text-[#F2E691] text-xl md:text-2xl gap-2",
                                        children: t.betName
                                    }), q > 0 && (0, o.jsx)("h3", {
                                        className: "text-white text-2xl text-center sm:text-right",
                                        children: I
                                    })]
                                }), q <= 0 && (L ? (0, o.jsx)("p", {
                                    className: "text-center text-[#53D0B0] text-lg sm:text-2xl font-medium mt-2",
                                    children: "Prediction Completed"
                                }) : (0, o.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, o.jsxs)("p", {
                                        className: "text-[#53D0B0] text-lg sm:text-2xl font-medium mt-2",
                                        children: ["Prediction Closed On ", V]
                                    }), (0, o.jsx)("p", {
                                        className: "text-[#A9A9A9] text-sm",
                                        children: "This prediction has been closed and is awaiting results."
                                    })]
                                })), (0, o.jsx)("div", {
                                    className: "mt-4 flex flex-col gap-1",
                                    children: t.optionNames.map((e, n) => (0, o.jsxs)("div", {
                                        className: "py-4 px-6 border rounded-[4px] ".concat(z(n)),
                                        children: [(0, o.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-12",
                                            children: [(0, o.jsxs)("div", {
                                                className: "w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4",
                                                children: [void 0 === K(e) ? (0, o.jsx)("p", {
                                                    className: "text-[#F2F2F2] font-medium text-lg w-fit lg:w-[280px] overflow-hidden whitespace-pre-wrap",
                                                    children: H(e)
                                                }) : (0, o.jsxs)("div", {
                                                    className: "flex items-center gap-2 w-fit lg:w-[280px]",
                                                    children: [(0, o.jsx)(r.default, {
                                                        src: K(e),
                                                        alt: e,
                                                        width: 48,
                                                        height: 48,
                                                        className: "rounded-full"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-[#F2F2F2] font-medium text-lg w-fit lg:w-[280px] overflow-hidden whitespace-pre-wrap",
                                                        children: H(e)
                                                    })]
                                                }), (0, o.jsxs)("div", {
                                                    className: "w-full",
                                                    children: [(0, o.jsxs)("div", {
                                                        className: "w-full h-4 sm:h-6 bg-[#07090A] border border-[#4E4E4E] rounded-[2px] p-[2px] relative flex gap-[1px]",
                                                        children: [Array.from({
                                                            length: (0, l.dP)(t, n)
                                                        }, (e, t) => (0, o.jsx)("div", {
                                                            className: "h-full w-[1.5%] xs:min-w-[6px] max-w-2 bg-[#BD0706]"
                                                        }, t)), (0, o.jsx)("p", {
                                                            className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-[#F2F2F2] text-sm sm:text-base uppercase font-medium",
                                                            children: (0, l.El)(t, n)
                                                        })]
                                                    }), (0, o.jsx)("p", {
                                                        className: "mt-1 font-medium text-xs text-[#4E4E4E]",
                                                        children: W(t.optionBetAmounts[n])
                                                    })]
                                                })]
                                            }), q > 0 && (0, o.jsx)("button", {
                                                onClick: () => M(n),
                                                disabled: q <= 0,
                                                className: "w-full sm:w-auto h-min ".concat(q <= 0 ? "cursor-disabled" : "cursor-pointer hover:bg-[#243d35]", " m-auto bg-[#101C18] border border-[#21493E] rounded-[2px] py-1 px-6 font-medium text-base uppercase text-[#53D0B0] text-center"),
                                                children: "Predict"
                                            })]
                                        }), G(n)]
                                    }, n))
                                }), (0, o.jsxs)("div", {
                                    className: "w-full flex flex-col sm:flex-row justify-between items-center",
                                    children: [J && J.length > 0 && (0, o.jsxs)("div", {
                                        className: "mt-4",
                                        children: [(0, o.jsxs)("button", {
                                            onClick: () => k(!D),
                                            className: "flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200",
                                            children: [(0, o.jsx)("p", {
                                                className: "text-[#53D0B0] font-bold text-lg",
                                                children: "Requirements"
                                            }), (0, o.jsx)(r.default, {
                                                src: "/icons/chevron_green.svg",
                                                alt: "chevron",
                                                width: 24,
                                                height: 24,
                                                className: "text-[#53D0B0] ".concat(D ? "rotate-180" : "rotate-0", " transition-transform duration-150 ease-in-out")
                                            })]
                                        }), (0, o.jsx)("div", {
                                            className: "".concat(D ? "max-h-96" : "max-h-0", " overflow-hidden transition-all duration-300 ease-in-out"),
                                            children: (0, o.jsx)("div", {
                                                className: "mt-3 flex flex-col gap-3",
                                                children: J.map((e, t) => (0, o.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, o.jsx)(r.default, {
                                                        src: "/icons/pixel_label.svg",
                                                        alt: "chevron",
                                                        width: 20,
                                                        height: 20,
                                                        className: "text-[#53D0B0]"
                                                    }), (0, o.jsx)("p", {
                                                        className: "text-[#808080] text-sm font-bold",
                                                        children: e
                                                    })]
                                                }, t))
                                            })
                                        })]
                                    }), (0, o.jsx)("button", {
                                        onClick: () => {
                                            let e = u.V2 + "prediction/" + t.id;
                                            navigator.clipboard.writeText(e), (0, s.oR)({
                                                title: "Copied Link",
                                                description: "Direct link has been copied to clipboard."
                                            })
                                        },
                                        className: "ml-auto self-start shrink-0 w-full sm:w-auto flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200 mt-4 bg-[#53D0B0] border border-[#21493E] rounded-[2px] py-1.5 px-10 font-medium text-base text-[#101C18] text-center uppercase",
                                        children: (0, o.jsx)("p", {
                                            children: "Copy & Share"
                                        })
                                    })]
                                })]
                            })]
                        })
                    }
            },
            26542: (e, t, n) => {
                n.d(t, {
                    $K: () => u,
                    $R: () => ek,
                    $n: () => K,
                    AN: () => B,
                    Ao: () => ez,
                    Aq: () => er,
                    Au: () => ep,
                    CO: () => $,
                    DW: () => em,
                    EA: () => eE,
                    Fg: () => c,
                    Fy: () => eh,
                    GS: () => G,
                    Gq: () => z,
                    HS: () => eP,
                    HX: () => ej,
                    Hb: () => V,
                    Ht: () => eb,
                    J3: () => J,
                    JQ: () => ee,
                    Jn: () => ex,
                    KF: () => eD,
                    KV: () => m,
                    Kt: () => h,
                    M7: () => Z,
                    MV: () => d,
                    Ng: () => H,
                    OU: () => D,
                    OV: () => ea,
                    PI: () => W,
                    Pg: () => eW,
                    QT: () => eL,
                    Qm: () => o,
                    SS: () => eY,
                    ST: () => M,
                    T: () => _,
                    T_: () => eR,
                    Uo: () => en,
                    V4: () => x,
                    Vq: () => eN,
                    W: () => y,
                    XI: () => ev,
                    Y_: () => eB,
                    Yl: () => U,
                    Yx: () => R,
                    ZT: () => b,
                    _u: () => r,
                    aS: () => A,
                    ap: () => s,
                    av: () => ed,
                    bG: () => a,
                    bi: () => X,
                    cI: () => ey,
                    d: () => v,
                    di: () => es,
                    dz: () => k,
                    eD: () => f,
                    f4: () => eS,
                    gD: () => E,
                    gs: () => eA,
                    h2: () => O,
                    he: () => i,
                    iB: () => eF,
                    ip: () => eU,
                    jJ: () => eT,
                    jY: () => eo,
                    j_: () => ec,
                    lc: () => eO,
                    lk: () => p,
                    ln: () => g,
                    mf: () => S,
                    nc: () => L,
                    o: () => w,
                    o0: () => eu,
                    oU: () => l,
                    ol: () => F,
                    pC: () => C,
                    pc: () => eV,
                    po: () => eq,
                    q1: () => q,
                    qC: () => eC,
                    r_: () => T,
                    sD: () => I,
                    sb: () => ef,
                    tm: () => eg,
                    u8: () => ew,
                    uj: () => Y,
                    uq: () => ei,
                    us: () => el,
                    vl: () => et,
                    w3: () => eI,
                    wC: () => Q,
                    x1: () => N,
                    xP: () => j,
                    xw: () => P,
                    zH: () => eM
                });
                let o = 2n ** (8n - 1n) - 1n,
                    i = 2n ** (16n - 1n) - 1n,
                    r = 2n ** (24n - 1n) - 1n,
                    a = 2n ** (32n - 1n) - 1n,
                    s = 2n ** (40n - 1n) - 1n,
                    l = 2n ** (48n - 1n) - 1n,
                    c = 2n ** (56n - 1n) - 1n,
                    d = 2n ** (64n - 1n) - 1n,
                    u = 2n ** (72n - 1n) - 1n,
                    h = 2n ** (80n - 1n) - 1n,
                    m = 2n ** (88n - 1n) - 1n,
                    p = 2n ** (96n - 1n) - 1n,
                    x = 2n ** (104n - 1n) - 1n,
                    f = 2n ** (112n - 1n) - 1n,
                    b = 2n ** (120n - 1n) - 1n,
                    g = 2n ** (128n - 1n) - 1n,
                    y = 2n ** (136n - 1n) - 1n,
                    v = 2n ** (144n - 1n) - 1n,
                    w = 2n ** (152n - 1n) - 1n,
                    j = 2n ** (160n - 1n) - 1n,
                    N = 2n ** (168n - 1n) - 1n,
                    E = 2n ** (176n - 1n) - 1n,
                    C = 2n ** (184n - 1n) - 1n,
                    S = 2n ** (192n - 1n) - 1n,
                    A = 2n ** (200n - 1n) - 1n,
                    F = 2n ** (208n - 1n) - 1n,
                    T = 2n ** (216n - 1n) - 1n,
                    Y = 2n ** (224n - 1n) - 1n,
                    P = 2n ** (232n - 1n) - 1n,
                    B = 2n ** (240n - 1n) - 1n,
                    D = 2n ** (248n - 1n) - 1n,
                    k = 2n ** (256n - 1n) - 1n,
                    I = -(2n ** (8n - 1n)),
                    W = -(2n ** (16n - 1n)),
                    M = -(2n ** (24n - 1n)),
                    O = -(2n ** (32n - 1n)),
                    U = -(2n ** (40n - 1n)),
                    R = -(2n ** (48n - 1n)),
                    L = -(2n ** (56n - 1n)),
                    q = -(2n ** (64n - 1n)),
                    V = -(2n ** (72n - 1n)),
                    z = -(2n ** (80n - 1n)),
                    G = -(2n ** (88n - 1n)),
                    J = -(2n ** (96n - 1n)),
                    _ = -(2n ** (104n - 1n)),
                    $ = -(2n ** (112n - 1n)),
                    K = -(2n ** (120n - 1n)),
                    H = -(2n ** (128n - 1n)),
                    Q = -(2n ** (136n - 1n)),
                    X = -(2n ** (144n - 1n)),
                    Z = -(2n ** (152n - 1n)),
                    ee = -(2n ** (160n - 1n)),
                    et = -(2n ** (168n - 1n)),
                    en = -(2n ** (176n - 1n)),
                    eo = -(2n ** (184n - 1n)),
                    ei = -(2n ** (192n - 1n)),
                    er = -(2n ** (200n - 1n)),
                    ea = -(2n ** (208n - 1n)),
                    es = -(2n ** (216n - 1n)),
                    el = -(2n ** (224n - 1n)),
                    ec = -(2n ** (232n - 1n)),
                    ed = -(2n ** (240n - 1n)),
                    eu = -(2n ** (248n - 1n)),
                    eh = -(2n ** (256n - 1n)),
                    em = 2n ** 8n - 1n,
                    ep = 2n ** 16n - 1n,
                    ex = 2n ** 24n - 1n,
                    ef = 2n ** 32n - 1n,
                    eb = 2n ** 40n - 1n,
                    eg = 2n ** 48n - 1n,
                    ey = 2n ** 56n - 1n,
                    ev = 2n ** 64n - 1n,
                    ew = 2n ** 72n - 1n,
                    ej = 2n ** 80n - 1n,
                    eN = 2n ** 88n - 1n,
                    eE = 2n ** 96n - 1n,
                    eC = 2n ** 104n - 1n,
                    eS = 2n ** 112n - 1n,
                    eA = 2n ** 120n - 1n,
                    eF = 2n ** 128n - 1n,
                    eT = 2n ** 136n - 1n,
                    eY = 2n ** 144n - 1n,
                    eP = 2n ** 152n - 1n,
                    eB = 2n ** 160n - 1n,
                    eD = 2n ** 168n - 1n,
                    ek = 2n ** 176n - 1n,
                    eI = 2n ** 184n - 1n,
                    eW = 2n ** 192n - 1n,
                    eM = 2n ** 200n - 1n,
                    eO = 2n ** 208n - 1n,
                    eU = 2n ** 216n - 1n,
                    eR = 2n ** 224n - 1n,
                    eL = 2n ** 232n - 1n,
                    eq = 2n ** 240n - 1n,
                    eV = 2n ** 248n - 1n,
                    ez = 2n ** 256n - 1n
            },
            32206: (e, t, n) => {
                n.d(t, {
                    Ay: () => a,
                    kz: () => r
                });
                var o = n(12115);

                function i(e) {
                    let t = e - Math.floor(Date.now() / 1e3);
                    if (t <= 0) return "0d:0h:0m:0s";
                    let n = Math.floor(t / 86400),
                        o = Math.floor((t %= 86400) / 3600),
                        i = Math.floor((t %= 3600) / 60),
                        r = t % 60;
                    return "".concat(n, "d:").concat(o, "h:").concat(i, "m:").concat(r, "s")
                }
                let r = e => e - Math.floor(Date.now() / 1e3),
                    a = e => {
                        let {
                            targetTime: t
                        } = e, [n, r] = (0, o.useState)(i(t));
                        return (0, o.useEffect)(() => {
                            let e = setInterval(() => {
                                r(i(t))
                            }, 1e3);
                            return () => clearInterval(e)
                        }, [t]), n
                    }
            },
            71391: (e, t, n) => {
                n.d(t, {
                    J: () => i
                });
                var o = n(95155);
                n(12115);
                let i = () => (0, o.jsxs)("div", {
                    className: "bg-[#0B0D0F] border border-[#4E4E4E] rounded-[2px] px-2 md:px-6 py-6",
                    children: [(0, o.jsx)("div", {
                        className: "flex flex-col sm:flex-row justify-between font-bold",
                        children: (0, o.jsx)("div", {
                            className: "w-1/3 h-6 bg-gray-600 animate-pulse"
                        })
                    }), (0, o.jsx)("div", {
                        className: "mt-4 flex flex-col gap-1",
                        children: Array.from({
                            length: 3
                        }).map((e, t) => (0, o.jsx)("div", {
                            className: "flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-12 py-4 px-6 bg-[#131619] border border-[#4E4E4E] rounded-[4px]",
                            children: (0, o.jsxs)("div", {
                                className: "w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4",
                                children: [(0, o.jsx)("div", {
                                    className: "w-1/3 h-6 bg-gray-600 animate-pulse"
                                }), (0, o.jsx)("div", {
                                    className: "w-full h-6 bg-gray-600 animate-pulse"
                                }), (0, o.jsx)("div", {
                                    className: "w-full sm:w-40 h-6 bg-gray-600 animate-pulse"
                                })]
                            })
                        }, t))
                    })]
                })
            },
            81143: (e, t, n) => {
                n.d(t, {
                    $B: () => a,
                    Dj: () => i,
                    El: () => o,
                    dP: () => r
                });
                let o = (e, t, n) => {
                        let o = e.optionBetAmounts.reduce((e, t) => e + t, 0);
                        return 0 == o ? (n || 0).toString() : 0 == e.optionBetAmounts[t] ? "".concat((.7 * o + (n || 0)).toFixed(2)) : ((o - e.optionBetAmounts[t]) * .7 / (e.optionBetAmounts[t] + (n || 0)) + 1).toFixed(2) + "x"
                    },
                    i = (e, t, n) => {
                        let o = e.optionBetAmounts.reduce((e, t) => e + t, 0);
                        if (0 == o) return (n || 0).toString();
                        if (0 == e.optionBetAmounts[t]) return "".concat((.7 * o + (n || 0)).toFixed(2));
                        let i = (o - e.optionBetAmounts[t]) * .7 / (e.optionBetAmounts[t] + (n || 0));
                        return ((n || 0) * i + (n || 0)).toFixed(2)
                    },
                    r = (e, t) => {
                        let n = e.optionBetAmounts.reduce((e, t) => e + t, 0);
                        return 0 == n || 0 == e.optionBetAmounts[t] ? 0 : Math.round(e.optionBetAmounts[t] / n * 45)
                    },
                    a = e => {
                        let t = e - Math.floor(Date.now() / 1e3);
                        if (t <= 0) return "Betting Closed";
                        let n = Math.floor(t / 86400),
                            o = Math.floor((t %= 86400) / 3600),
                            i = Math.floor((t %= 3600) / 60),
                            r = t % 60;
                        return "".concat(n, "d:").concat(o, "h:").concat(i, "m:").concat(r, "s Remaining")
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
  captures_list: 0.5
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 46.159
  LoadShardBlock: 93.819 (3)
  PetaboxLoader3.datanode: 120.912 (4)
  load_resource: 360.912
  PetaboxLoader3.resolve: 234.12
*/