function load(t, e, a) {
    "string" == typeof t && (a = e,
        e = t,
        t = document);
    var r = t.createElement("script");
    return r.type = "text/javascript",
        r.src = e,
    a && onLoad(r, a),
        r.onLoad = function(t) {
            return onLoad(r, t)
        }
        ,
        t.body.appendChild(r),
        r
}
function polyfillLoader(t, e, a) {
    if (window[e] = function() {
            return a(null )
        }
            ,
            document.body)
        load(t);
    else {
        var r = document.onreadystatechange;
        document.onreadystatechange = function() {
            "interactive" === document.readyState && ("function" == typeof r && r(),
                load(t))
        }
    }
}
//cdn.polyfill.io/v1/polyfill.min.js
polyfillLoader(
    // "//cdn.polyfill.io/v1/polyfill.min.js?features=Array.prototype.filter,Object.create,Object.defineProperties,Object.defineProperty&callback=polyfillServiceCallbackpvjscustomelement"
    "js/chaosofpvjs/pvjs_b.js"
    , "polyfillServiceCallbackpvjscustomelement", function() {
    require = function t(e, a, r) {
        function n(o, l) {
            if (!a[o]) {
                if (!e[o]) {
                    var s = "function" == typeof require && require;
                    if (!l && s)
                        return s(o, !0);
                    if (i)
                        return i(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                        u
                }
                var c = a[o] = {
                    exports: {}
                };
                e[o][0].call(c.exports, function(t) {
                    var a = e[o][1][t];
                    return n(a ? a : t)
                }, c, c.exports, t, e, a, r)
            }
            return a[o].exports
        }
        for (var i = "function" == typeof require && require, o = 0; o < r.length; o++)
            n(r[o]);
        return n
    }({
        "/Users/andersriutta/Sites/pvjs-lkg/lib/custom-element.js": [function(t) {
            function e() {
                function e(t) {
                    "use strict";
                    var e = Object.create(window.HTMLDivElement.prototype);
                    e.attributeChangedCallback = function(t, e, a) {
                        "alt" === t && (this.textContent = a)
                    }
                    ;
                    var a = Object.create(e);
                    a.createdCallback = function() {
                        var e = this
                            , a = {}
                            , r = a.alt = e.getAttribute("alt");
                        r && e.attributeChangedCallback("alt", null , r);
                        var n = a.displayErrors = Boolean(e.getAttribute("display-errors"));
                        e.attributeChangedCallback("display-errors", null , n);
                        var i = a.displayWarnings = Boolean(e.getAttribute("display-warnings"));
                        e.attributeChangedCallback("display-warnings", null , i);
                        var o = a.displaySuccess = Boolean(e.getAttribute("display-success"));
                        e.attributeChangedCallback("display-success", null , o);
                        var l = a.fitToContainer = Boolean(e.getAttribute("fit-to-container"));
                        e.attributeChangedCallback("fit-to-container", null , l);
                        var s = e.getAttribute("highlights");
                        s && (s = a.highlights = JSON.parse(decodeURIComponent(s)),
                            e.attributeChangedCallback("highlights", null , s));
                        var u, c = window.location.hash.match("editor/(.*)$");
                        c && c.length && (u = c[1]);
                        var d = a.editor = u || e.getAttribute("editor");
                        d && e.attributeChangedCallback("editor", null , d);
                        var p = a.resource = e.getAttribute("resource");
                        p && e.attributeChangedCallback("resource", null , p);
                        var b = a.version = parseFloat(e.getAttribute("version"));
                        b && e.attributeChangedCallback("version", null , b);
                        var v = e.getAttribute("src");
                        v && e.attributeChangedCallback("src", null , v),
                            a.sourceData = [{
                                uri: v,
                                fileType: "gpml"
                            }];
                        new t(e,a)
                    }
                        ,
                        window.WikiPathwaysPvjs = document.registerElement("wikipathways-pvjs", {
                            prototype: a
                        })
                }
                var a = t("./main.js");
                window.Kaavio ? e(a) : window.addEventListener("kaavioready", function r() {
                    window.removeEventListener("kaavioready", r, !1),
                        e(a)
                }, !1)
            }
            "complete" === document.readyState ? e() : window.addEventListener("load", function a() {
                window.removeEventListener("load", a, !1),
                    e()
            }, !1)
        }
            , {
                "./main.js": "/Users/andersriutta/Sites/pvjs-lkg/lib/main.js"
            }]
    }, {}, ["/Users/andersriutta/Sites/pvjs-lkg/lib/custom-element.js"])
});
//# sourceMappingURL=pvjs.custom-element.min.js.map
