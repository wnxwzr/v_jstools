/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */
(function(a) {
    String.prototype.trim === a && (String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }
    ),
    Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
        if (this === void 0 || this === null)
            throw new TypeError;
        var c = Object(this), d = c.length >>> 0, e = 0, f;
        if (typeof b != "function")
            throw new TypeError;
        if (d == 0 && arguments.length == 1)
            throw new TypeError;
        if (arguments.length >= 2)
            f = arguments[1];
        else
            do {
                if (e in c) {
                    f = c[e++];
                    break
                }
                if (++e >= d)
                    throw new TypeError
            } while (!0);
        while (e < d)
            e in c && (f = b.call(a, f, c[e], e, c)),
            e++;
        return f
    }
    )
}
)();
var Zepto = function() {
    function A(a) {
        return v.call(a) == "[object Function]"
    }
    function B(a) {
        return a instanceof Object
    }
    function C(b) {
        var c, d;
        if (v.call(b) !== "[object Object]")
            return !1;
        d = A(b.constructor) && b.constructor.prototype;
        if (!d || !hasOwnProperty.call(d, "isPrototypeOf"))
            return !1;
        for (c in b)
            ;
        return c === a || hasOwnProperty.call(b, c)
    }
    function D(a) {
        return a instanceof Array
    }
    function E(a) {
        return typeof a.length == "number"
    }
    function F(b) {
        return b.filter(function(b) {
            return b !== a && b !== null
        })
    }
    function G(a) {
        return a.length > 0 ? [].concat.apply([], a) : a
    }
    function H(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function I(a) {
        return a in i ? i[a] : i[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function J(a, b) {
        return typeof b == "number" && !k[H(a)] ? b + "px" : b
    }
    function K(a) {
        var b, c;
        return h[a] || (b = g.createElement(a),
        g.body.appendChild(b),
        c = j(b, "").getPropertyValue("display"),
        b.parentNode.removeChild(b),
        c == "none" && (c = "block"),
        h[a] = c),
        h[a]
    }
    function L(b, d) {
        return d === a ? c(b) : c(b).filter(d)
    }
    function M(a, b, c, d) {
        return A(b) ? b.call(a, c, d) : b
    }
    function N(a, b, d) {
        var e = a % 2 ? b : b.parentNode;
        e ? e.insertBefore(d, a ? a == 1 ? e.firstChild : a == 2 ? b : null : b.nextSibling) : c(d).remove()
    }
    function O(a, b) {
        b(a);
        for (var c in a.childNodes)
            O(a.childNodes[c], b)
    }
    var a, b, c, d, e = [], f = e.slice, g = window.document, h = {}, i = {}, j = g.defaultView.getComputedStyle, k = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, l = /^\s*<(\w+|!)[^>]*>/, m = [1, 3, 8, 9, 11], n = ["after", "prepend", "before", "append"], o = g.createElement("table"), p = g.createElement("tr"), q = {
        tr: g.createElement("tbody"),
        tbody: o,
        thead: o,
        tfoot: o,
        td: p,
        th: p,
        "*": g.createElement("div")
    }, r = /complete|loaded|interactive/, s = /^\.([\w-]+)$/, t = /^#([\w-]+)$/, u = /^[\w-]+$/, v = {}.toString, w = {}, x, y, z = g.createElement("div");
    return w.matches = function(a, b) {
        if (!a || a.nodeType !== 1)
            return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c)
            return c.call(a, b);
        var d, e = a.parentNode, f = !e;
        return f && (e = z).appendChild(a),
        d = ~w.qsa(e, b).indexOf(a),
        f && z.removeChild(a),
        d
    }
    ,
    x = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    }
    ,
    y = function(a) {
        return a.filter(function(b, c) {
            return a.indexOf(b) == c
        })
    }
    ,
    w.fragment = function(b, d) {
        d === a && (d = l.test(b) && RegExp.$1),
        d in q || (d = "*");
        var e = q[d];
        return e.innerHTML = "" + b,
        c.each(f.call(e.childNodes), function() {
            e.removeChild(this)
        })
    }
    ,
    w.Z = function(a, b) {
        return a = a || [],
        a.__proto__ = arguments.callee.prototype,
        a.selector = b || "",
        a
    }
    ,
    w.isZ = function(a) {
        return a instanceof w.Z
    }
    ,
    w.init = function(b, d) {
        if (!b)
            return w.Z();
        if (A(b))
            return c(g).ready(b);
        if (w.isZ(b))
            return b;
        var e;
        if (D(b))
            e = F(b);
        else if (C(b))
            e = [c.extend({}, b)],
            b = null;
        else if (m.indexOf(b.nodeType) >= 0 || b === window)
            e = [b],
            b = null;
        else if (l.test(b))
            e = w.fragment(b.trim(), RegExp.$1),
            b = null;
        else {
            if (d !== a)
                return c(d).find(b);
            e = w.qsa(g, b)
        }
        return w.Z(e, b)
    }
    ,
    c = function(a, b) {
        return w.init(a, b)
    }
    ,
    c.extend = function(c) {
        return f.call(arguments, 1).forEach(function(d) {
            for (b in d)
                d[b] !== a && (c[b] = d[b])
        }),
        c
    }
    ,
    w.qsa = function(a, b) {
        var c;
        return a === g && t.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : e : a.nodeType !== 1 && a.nodeType !== 9 ? e : f.call(s.test(b) ? a.getElementsByClassName(RegExp.$1) : u.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
    }
    ,
    c.isFunction = A,
    c.isObject = B,
    c.isArray = D,
    c.isPlainObject = C,
    c.inArray = function(a, b, c) {
        return e.indexOf.call(b, a, c)
    }
    ,
    c.trim = function(a) {
        return a.trim()
    }
    ,
    c.uuid = 0,
    c.map = function(a, b) {
        var c, d = [], e, f;
        if (E(a))
            for (e = 0; e < a.length; e++)
                c = b(a[e], e),
                c != null && d.push(c);
        else
            for (f in a)
                c = b(a[f], f),
                c != null && d.push(c);
        return G(d)
    }
    ,
    c.each = function(a, b) {
        var c, d;
        if (E(a)) {
            for (c = 0; c < a.length; c++)
                if (b.call(a[c], c, a[c]) === !1)
                    return a
        } else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1)
                    return a;
        return a
    }
    ,
    c.fn = {
        forEach: e.forEach,
        reduce: e.reduce,
        push: e.push,
        indexOf: e.indexOf,
        concat: e.concat,
        map: function(a) {
            return c.map(this, function(b, c) {
                return a.call(b, c, b)
            })
        },
        slice: function() {
            return c(f.apply(this, arguments))
        },
        ready: function(a) {
            return r.test(g.readyState) ? a(c) : g.addEventListener("DOMContentLoaded", function() {
                a(c)
            }, !1),
            this
        },
        get: function(b) {
            return b === a ? f.call(this) : this[b]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                this.parentNode != null && this.parentNode.removeChild(this)
            })
        },
        each: function(a) {
            return this.forEach(function(b, c) {
                a.call(b, c, b)
            }),
            this
        },
        filter: function(a) {
            return c([].filter.call(this, function(b) {
                return w.matches(b, a)
            }))
        },
        add: function(a, b) {
            return c(y(this.concat(c(a, b))))
        },
        is: function(a) {
            return this.length > 0 && w.matches(this[0], a)
        },
        not: function(b) {
            var d = [];
            if (A(b) && b.call !== a)
                this.each(function(a) {
                    b.call(this, a) || d.push(this)
                });
            else {
                var e = typeof b == "string" ? this.filter(b) : E(b) && A(b.item) ? f.call(b) : c(b);
                this.forEach(function(a) {
                    e.indexOf(a) < 0 && d.push(a)
                })
            }
            return c(d)
        },
        eq: function(a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !B(a) ? a : c(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !B(a) ? a : c(a)
        },
        find: function(a) {
            var b;
            return this.length == 1 ? b = w.qsa(this[0], a) : b = this.map(function() {
                return w.qsa(this, a)
            }),
            c(b)
        },
        closest: function(a, b) {
            var d = this[0];
            while (d && !w.matches(d, a))
                d = d !== b && d !== g && d.parentNode;
            return c(d)
        },
        parents: function(a) {
            var b = []
              , d = this;
            while (d.length > 0)
                d = c.map(d, function(a) {
                    if ((a = a.parentNode) && a !== g && b.indexOf(a) < 0)
                        return b.push(a),
                        a
                });
            return L(b, a)
        },
        parent: function(a) {
            return L(y(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return L(this.map(function() {
                return f.call(this.children)
            }), a)
        },
        siblings: function(a) {
            return L(this.map(function(a, b) {
                return f.call(b.parentNode.children).filter(function(a) {
                    return a !== b
                })
            }), a)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(a) {
            return this.map(function() {
                return this[a]
            })
        },
        show: function() {
            return this.each(function() {
                this.style.display == "none" && (this.style.display = null),
                j(this, "").getPropertyValue("display") == "none" && (this.style.display = K(this.nodeName))
            })
        },
        replaceWith: function(a) {
            return this.before(a).remove()
        },
        wrap: function(a) {
            return this.each(function() {
                c(this).wrapAll(c(a)[0].cloneNode(!1))
            })
        },
        wrapAll: function(a) {
            return this[0] && (c(this[0]).before(a = c(a)),
            a.append(this)),
            this
        },
        unwrap: function() {
            return this.parent().each(function() {
                c(this).replaceWith(c(this).children())
            }),
            this
        },
        clone: function() {
            return c(this.map(function() {
                return this.cloneNode(!0)
            }))
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(b) {
            return (b === a ? this.css("display") == "none" : b) ? this.show() : this.hide()
        },
        prev: function() {
            return c(this.pluck("previousElementSibling"))
        },
        next: function() {
            return c(this.pluck("nextElementSibling"))
        },
        html: function(b) {
            return b === a ? this.length > 0 ? this[0].innerHTML : null : this.each(function(a) {
                var d = this.innerHTML;
                c(this).empty().append(M(this, b, a, d))
            })
        },
        text: function(b) {
            return b === a ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                this.textContent = b
            })
        },
        attr: function(c, d) {
            var e;
            return typeof c == "string" && d === a ? this.length == 0 || this[0].nodeType !== 1 ? a : c == "value" && this[0].nodeName == "INPUT" ? this.val() : !(e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e : this.each(function(a) {
                if (this.nodeType !== 1)
                    return;
                if (B(c))
                    for (b in c)
                        this.setAttribute(b, c[b]);
                else
                    this.setAttribute(c, M(this, d, a, this.getAttribute(c)))
            })
        },
        removeAttr: function(a) {
            return this.each(function() {
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        prop: function(b, c) {
            return c === a ? this[0] ? this[0][b] : a : this.each(function(a) {
                this[b] = M(this, c, a, this[b])
            })
        },
        data: function(b, c) {
            var d = this.attr("data-" + H(b), c);
            return d !== null ? d : a
        },
        val: function(b) {
            return b === a ? this.length > 0 ? this[0].value : a : this.each(function(a) {
                this.value = M(this, b, a, this.value)
            })
        },
        offset: function() {
            if (this.length == 0)
                return null;
            var a = this[0].getBoundingClientRect();
            return {
                left: a.left + window.pageXOffset,
                top: a.top + window.pageYOffset,
                width: a.width,
                height: a.height
            }
        },
        css: function(c, d) {
            if (d === a && typeof c == "string")
                return this.length == 0 ? a : this[0].style[x(c)] || j(this[0], "").getPropertyValue(c);
            var e = "";
            for (b in c)
                typeof c[b] == "string" && c[b] == "" ? this.each(function() {
                    this.style.removeProperty(H(b))
                }) : e += H(b) + ":" + J(b, c[b]) + ";";
            return typeof c == "string" && (d == "" ? this.each(function() {
                this.style.removeProperty(H(c))
            }) : e = H(c) + ":" + J(c, d)),
            this.each(function() {
                this.style.cssText += ";" + e
            })
        },
        index: function(a) {
            return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return this.length < 1 ? !1 : I(a).test(this[0].className)
        },
        addClass: function(a) {
            return this.each(function(b) {
                d = [];
                var e = this.className
                  , f = M(this, a, b, e);
                f.split(/\s+/g).forEach(function(a) {
                    c(this).hasClass(a) || d.push(a)
                }, this),
                d.length && (this.className += (e ? " " : "") + d.join(" "))
            })
        },
        removeClass: function(b) {
            return this.each(function(c) {
                if (b === a)
                    return this.className = "";
                d = this.className,
                M(this, b, c, d).split(/\s+/g).forEach(function(a) {
                    d = d.replace(I(a), " ")
                }),
                this.className = d.trim()
            })
        },
        toggleClass: function(b, d) {
            return this.each(function(e) {
                var f = M(this, b, e, this.className);
                (d === a ? !c(this).hasClass(f) : d) ? c(this).addClass(f) : c(this).removeClass(f)
            })
        }
    },
    ["width", "height"].forEach(function(b) {
        c.fn[b] = function(d) {
            var e, f = b.replace(/./, function(a) {
                return a[0].toUpperCase()
            });
            return d === a ? this[0] == window ? window["inner" + f] : this[0] == g ? g.documentElement["offset" + f] : (e = this.offset()) && e[b] : this.each(function(a) {
                var e = c(this);
                e.css(b, M(this, d, a, e[b]()))
            })
        }
    }),
    n.forEach(function(a, b) {
        c.fn[a] = function() {
            var a = c.map(arguments, function(a) {
                return B(a) ? a : w.fragment(a)
            });
            if (a.length < 1)
                return this;
            var d = this.length
              , e = d > 1
              , f = b < 2;
            return this.each(function(c, g) {
                for (var h = 0; h < a.length; h++) {
                    var i = a[f ? a.length - h - 1 : h];
                    O(i, function(a) {
                        a.nodeName != null && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && window.eval.call(window, a.innerHTML)
                    }),
                    e && c < d - 1 && (i = i.cloneNode(!0)),
                    N(b, g, i)
                }
            })
        }
        ,
        c.fn[b % 2 ? a + "To" : "insert" + (b ? "Before" : "After")] = function(b) {
            return c(b)[a](this),
            this
        }
    }),
    w.Z.prototype = c.fn,
    w.camelize = x,
    w.uniq = y,
    c.zepto = w,
    c
}();
window.Zepto = Zepto,
"$"in window || (window.$ = Zepto),
function(a) {
    function f(a) {
        return a._zid || (a._zid = d++)
    }
    function g(a, b, d, e) {
        b = h(b);
        if (b.ns)
            var g = i(b.ns);
        return (c[f(a)] || []).filter(function(a) {
            return a && (!b.e || a.e == b.e) && (!b.ns || g.test(a.ns)) && (!d || f(a.fn) === f(d)) && (!e || a.sel == e)
        })
    }
    function h(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }
    function i(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }
    function j(b, c, d) {
        a.isObject(b) ? a.each(b, d) : b.split(/\s/).forEach(function(a) {
            d(a, c)
        })
    }
    function k(b, d, e, g, i, k) {
        k = !!k;
        var l = f(b)
          , m = c[l] || (c[l] = []);
        j(d, e, function(c, d) {
            var e = i && i(d, c)
              , f = e || d
              , j = function(a) {
                var c = f.apply(b, [a].concat(a.data));
                return c === !1 && a.preventDefault(),
                c
            }
              , l = a.extend(h(c), {
                fn: d,
                proxy: j,
                sel: g,
                del: e,
                i: m.length
            });
            m.push(l),
            b.addEventListener(l.e, j, k)
        })
    }
    function l(a, b, d, e) {
        var h = f(a);
        j(b || "", d, function(b, d) {
            g(a, b, d, e).forEach(function(b) {
                delete c[h][b.i],
                a.removeEventListener(b.e, b.proxy, !1)
            })
        })
    }
    function p(b) {
        var c = a.extend({
            originalEvent: b
        }, b);
        return a.each(o, function(a, d) {
            c[a] = function() {
                return this[d] = m,
                b[a].apply(b, arguments)
            }
            ,
            c[d] = n
        }),
        c
    }
    function q(a) {
        if (!("defaultPrevented"in a)) {
            a.defaultPrevented = !1;
            var b = a.preventDefault;
            a.preventDefault = function() {
                this.defaultPrevented = !0,
                b.call(this)
            }
        }
    }
    var b = a.zepto.qsa
      , c = {}
      , d = 1
      , e = {};
    e.click = e.mousedown = e.mouseup = e.mousemove = "MouseEvents",
    a.event = {
        add: k,
        remove: l
    },
    a.proxy = function(b, c) {
        if (a.isFunction(b)) {
            var d = function() {
                return b.apply(c, arguments)
            };
            return d._zid = f(b),
            d
        }
        if (typeof c == "string")
            return a.proxy(b[c], b);
        throw new TypeError("expected function")
    }
    ,
    a.fn.bind = function(a, b) {
        return this.each(function() {
            k(this, a, b)
        })
    }
    ,
    a.fn.unbind = function(a, b) {
        return this.each(function() {
            l(this, a, b)
        })
    }
    ,
    a.fn.one = function(a, b) {
        return this.each(function(c, d) {
            k(this, a, b, null, function(a, b) {
                return function() {
                    var c = a.apply(d, arguments);
                    return l(d, b, a),
                    c
                }
            })
        })
    }
    ;
    var m = function() {
        return !0
    }
      , n = function() {
        return !1
    }
      , o = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    a.fn.delegate = function(b, c, d) {
        var e = !1;
        if (c == "blur" || c == "focus")
            a.iswebkit ? c = c == "blur" ? "focusout" : c == "focus" ? "focusin" : c : e = !0;
        return this.each(function(f, g) {
            k(g, c, d, b, function(c) {
                return function(d) {
                    var e, f = a(d.target).closest(b, g).get(0);
                    if (f)
                        return e = a.extend(p(d), {
                            currentTarget: f,
                            liveFired: g
                        }),
                        c.apply(f, [e].concat([].slice.call(arguments, 1)))
                }
            }, e)
        })
    }
    ,
    a.fn.undelegate = function(a, b, c) {
        return this.each(function() {
            l(this, b, c, a)
        })
    }
    ,
    a.fn.live = function(b, c) {
        return a(document.body).delegate(this.selector, b, c),
        this
    }
    ,
    a.fn.die = function(b, c) {
        return a(document.body).undelegate(this.selector, b, c),
        this
    }
    ,
    a.fn.on = function(b, c, d) {
        return c == undefined || a.isFunction(c) ? this.bind(b, c) : this.delegate(c, b, d)
    }
    ,
    a.fn.off = function(b, c, d) {
        return c == undefined || a.isFunction(c) ? this.unbind(b, c) : this.undelegate(c, b, d)
    }
    ,
    a.fn.trigger = function(b, c) {
        return typeof b == "string" && (b = a.Event(b)),
        q(b),
        b.data = c,
        this.each(function() {
            "dispatchEvent"in this && this.dispatchEvent(b)
        })
    }
    ,
    a.fn.triggerHandler = function(b, c) {
        var d, e;
        return this.each(function(f, h) {
            d = p(typeof b == "string" ? a.Event(b) : b),
            d.data = c,
            d.target = h,
            a.each(g(h, b.type || b), function(a, b) {
                e = b.proxy(d);
                if (d.isImmediatePropagationStopped())
                    return !1
            })
        }),
        e
    }
    ,
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b) {
        a.fn[b] = function(a) {
            return this.bind(b, a)
        }
    }),
    ["focus", "blur"].forEach(function(b) {
        a.fn[b] = function(a) {
            if (a)
                this.bind(b, a);
            else if (this.length)
                try {
                    this.get(0)[b]()
                } catch (c) {}
            return this
        }
    }),
    a.Event = function(a, b) {
        var c = document.createEvent(e[a] || "Events")
          , d = !0;
        if (b)
            for (var f in b)
                f == "bubbles" ? d = !!b[f] : c[f] = b[f];
        return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null),
        c
    }
}(Zepto),
function(a) {
    function b(a) {
        var b = this.os = {}
          , c = this.browser = {}
          , d = a.match(/WebKit\/([\d.]+)/)
          , e = a.match(/(Android)\s+([\d.]+)/)
          , f = a.match(/(iPad).*OS\s([\d_]+)/)
          , g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/)
          , h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
          , i = h && a.match(/TouchPad/)
          , j = a.match(/Kindle\/([\d.]+)/)
          , k = a.match(/Silk\/([\d._]+)/)
          , l = a.match(/(BlackBerry).*Version\/([\d.]+)/);
        if (c.webkit = !!d)
            c.version = d[1];
        e && (b.android = !0,
        b.version = e[2]),
        g && (b.ios = b.iphone = !0,
        b.version = g[2].replace(/_/g, ".")),
        f && (b.ios = b.ipad = !0,
        b.version = f[2].replace(/_/g, ".")),
        h && (b.webos = !0,
        b.version = h[2]),
        i && (b.touchpad = !0),
        l && (b.blackberry = !0,
        b.version = l[2]),
        j && (b.kindle = !0,
        b.version = j[1]),
        k && (c.silk = !0,
        c.version = k[1]),
        !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0)
    }
    b.call(a, navigator.userAgent),
    a.__detect = b
}(Zepto),
function(a, b) {
    function l(a) {
        return a.toLowerCase()
    }
    function m(a) {
        return d ? d + a : l(a)
    }
    var c = "", d, e, f, g = {
        Webkit: "webkit",
        Moz: "",
        O: "o",
        ms: "MS"
    }, h = window.document, i = h.createElement("div"), j = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, k = {};
    a.each(g, function(a, e) {
        if (i.style[a + "TransitionProperty"] !== b)
            return c = "-" + l(a) + "-",
            d = e,
            !1
    }),
    k[c + "transition-property"] = k[c + "transition-duration"] = k[c + "transition-timing-function"] = k[c + "animation-name"] = k[c + "animation-duration"] = "",
    a.fx = {
        off: d === b && i.style.transitionProperty === b,
        cssPrefix: c,
        transitionEnd: m("TransitionEnd"),
        animationEnd: m("AnimationEnd")
    },
    a.fn.animate = function(b, c, d, e) {
        return a.isObject(c) && (d = c.easing,
        e = c.complete,
        c = c.duration),
        c && (c /= 1e3),
        this.anim(b, c, d, e)
    }
    ,
    a.fn.anim = function(d, e, f, g) {
        var h, i = {}, l, m = this, n, o = a.fx.transitionEnd;
        e === b && (e = .4),
        a.fx.off && (e = 0);
        if (typeof d == "string")
            i[c + "animation-name"] = d,
            i[c + "animation-duration"] = e + "s",
            o = a.fx.animationEnd;
        else {
            for (l in d)
                j.test(l) ? (h || (h = []),
                h.push(l + "(" + d[l] + ")")) : i[l] = d[l];
            h && (i[c + "transform"] = h.join(" ")),
            !a.fx.off && typeof d == "object" && (i[c + "transition-property"] = Object.keys(d).join(", "),
            i[c + "transition-duration"] = e + "s",
            i[c + "transition-timing-function"] = f || "linear")
        }
        return n = function(b) {
            if (typeof b != "undefined") {
                if (b.target !== b.currentTarget)
                    return;
                a(b.target).unbind(o, arguments.callee)
            }
            a(this).css(k),
            g && g.call(this)
        }
        ,
        e > 0 && this.bind(o, n),
        setTimeout(function() {
            m.css(i),
            e <= 0 && setTimeout(function() {
                m.each(function() {
                    n.call(this)
                })
            }, 0)
        }, 0),
        this
    }
    ,
    i = null
}(Zepto),
function($) {
    function triggerAndReturn(a, b, c) {
        var d = $.Event(b);
        return $(a).trigger(d, c),
        !d.defaultPrevented
    }
    function triggerGlobal(a, b, c, d) {
        if (a.global)
            return triggerAndReturn(b || document, c, d)
    }
    function ajaxStart(a) {
        a.global && $.active++ === 0 && triggerGlobal(a, null, "ajaxStart")
    }
    function ajaxStop(a) {
        a.global && !--$.active && triggerGlobal(a, null, "ajaxStop")
    }
    function ajaxBeforeSend(a, b) {
        var c = b.context;
        if (b.beforeSend.call(c, a, b) === !1 || triggerGlobal(b, c, "ajaxBeforeSend", [a, b]) === !1)
            return !1;
        triggerGlobal(b, c, "ajaxSend", [a, b])
    }
    function ajaxSuccess(a, b, c) {
        var d = c.context
          , e = "success";
        c.success.call(d, a, e, b),
        triggerGlobal(c, d, "ajaxSuccess", [b, c, a]),
        ajaxComplete(e, b, c)
    }
    function ajaxError(a, b, c, d) {
        var e = d.context;
        d.error.call(e, c, b, a),
        triggerGlobal(d, e, "ajaxError", [c, d, a]),
        ajaxComplete(b, c, d)
    }
    function ajaxComplete(a, b, c) {
        var d = c.context;
        c.complete.call(d, b, a),
        triggerGlobal(c, d, "ajaxComplete", [b, c]),
        ajaxStop(c)
    }
    function empty() {}
    function mimeToDataType(a) {
        return a && (a == htmlType ? "html" : a == jsonType ? "json" : scriptTypeRE.test(a) ? "script" : xmlTypeRE.test(a) && "xml") || "text"
    }
    function appendQuery(a, b) {
        return (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }
    function serializeData(a) {
        isObject(a.data) && (a.data = $.param(a.data)),
        a.data && (!a.type || a.type.toUpperCase() == "GET") && (a.url = appendQuery(a.url, a.data))
    }
    function serialize(a, b, c, d) {
        var e = $.isArray(b);
        $.each(b, function(b, f) {
            d && (b = c ? d : d + "[" + (e ? "" : b) + "]"),
            !d && e ? a.add(f.name, f.value) : (c ? $.isArray(f) : isObject(f)) ? serialize(a, f, c, b) : a.add(b, f)
        })
    }
    var jsonpID = 0, isObject = $.isObject, document = window.document, key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/;
    $.active = 0,
    $.ajaxJSONP = function(a) {
        var b = "jsonp" + ++jsonpID, c = document.createElement("script"), d = function() {
            $(c).remove(),
            b in window && (window[b] = empty),
            ajaxComplete("abort", e, a)
        }, e = {
            abort: d
        }, f;
        return a.error && (c.onerror = function() {
            e.abort(),
            a.error()
        }
        ),
        window[b] = function(d) {
            clearTimeout(f),
            $(c).remove(),
            delete window[b],
            ajaxSuccess(d, e, a)
        }
        ,
        serializeData(a),
        c.src = a.url.replace(/=\?/, "=" + b),
        $("head").append(c),
        a.timeout > 0 && (f = setTimeout(function() {
            e.abort(),
            ajaxComplete("timeout", e, a)
        }, a.timeout)),
        e
    }
    ,
    $.ajaxSettings = {
        type: "GET",
        beforeSend: empty,
        success: empty,
        error: empty,
        complete: empty,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript",
            json: jsonType,
            xml: "application/xml, text/xml",
            html: htmlType,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0
    },
    $.ajax = function(options) {
        var settings = $.extend({}, options || {});
        for (key in $.ajaxSettings)
            settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
        ajaxStart(settings),
        settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host);
        var dataType = settings.dataType
          , hasPlaceholder = /=\?/.test(settings.url);
        if (dataType == "jsonp" || hasPlaceholder)
            return hasPlaceholder || (settings.url = appendQuery(settings.url, "callback=?")),
            $.ajaxJSONP(settings);
        settings.url || (settings.url = window.location.toString()),
        serializeData(settings);
        var mime = settings.accepts[dataType], baseHeaders = {}, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = $.ajaxSettings.xhr(), abortTimeout;
        settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"),
        mime && (baseHeaders.Accept = mime,
        mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]),
        xhr.overrideMimeType && xhr.overrideMimeType(mime));
        if (settings.contentType || settings.data && settings.type.toUpperCase() != "GET")
            baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded";
        settings.headers = $.extend(baseHeaders, settings.headers || {}),
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                clearTimeout(abortTimeout);
                var result, error = !1;
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
                    dataType = dataType || mimeToDataType(xhr.getResponseHeader("content-type")),
                    result = xhr.responseText;
                    try {
                        dataType == "script" ? (1,
                        eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : JSON.parse(result))
                    } catch (e) {
                        error = e
                    }
                    error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings)
                } else
                    ajaxError(null, "error", xhr, settings)
            }
        }
        ;
        var async = "async"in settings ? settings.async : !0;
        xhr.open(settings.type, settings.url, async);
        for (name in settings.headers)
            xhr.setRequestHeader(name, settings.headers[name]);
        return ajaxBeforeSend(xhr, settings) === !1 ? (xhr.abort(),
        !1) : (settings.timeout > 0 && (abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = empty,
            xhr.abort(),
            ajaxError(null, "timeout", xhr, settings)
        }, settings.timeout)),
        xhr.send(settings.data ? settings.data : null),
        xhr)
    }
    ,
    $.get = function(a, b) {
        return $.ajax({
            url: a,
            success: b
        })
    }
    ,
    $.post = function(a, b, c, d) {
        return $.isFunction(b) && (d = d || c,
        c = b,
        b = null),
        $.ajax({
            type: "POST",
            url: a,
            data: b,
            success: c,
            dataType: d
        })
    }
    ,
    $.getJSON = function(a, b) {
        return $.ajax({
            url: a,
            success: b,
            dataType: "json"
        })
    }
    ,
    $.fn.load = function(a, b) {
        if (!this.length)
            return this;
        var c = this, d = a.split(/\s/), e;
        return d.length > 1 && (a = d[0],
        e = d[1]),
        $.get(a, function(a) {
            c.html(e ? $(document.createElement("div")).html(a.replace(rscript, "")).find(e).html() : a),
            b && b.call(c)
        }),
        this
    }
    ;
    var escape = encodeURIComponent;
    $.param = function(a, b) {
        var c = [];
        return c.add = function(a, b) {
            this.push(escape(a) + "=" + escape(b))
        }
        ,
        serialize(c, a, b),
        c.join("&").replace("%20", "+")
    }
}(Zepto),
function(a) {
    a.fn.serializeArray = function() {
        var b = [], c;
        return a(Array.prototype.slice.call(this.get(0).elements)).each(function() {
            c = a(this);
            var d = c.attr("type");
            this.nodeName.toLowerCase() != "fieldset" && !this.disabled && d != "submit" && d != "reset" && d != "button" && (d != "radio" && d != "checkbox" || this.checked) && b.push({
                name: c.attr("name"),
                value: c.val()
            })
        }),
        b
    }
    ,
    a.fn.serialize = function() {
        var a = [];
        return this.serializeArray().forEach(function(b) {
            a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
        }),
        a.join("&")
    }
    ,
    a.fn.submit = function(b) {
        if (b)
            this.bind("submit", b);
        else if (this.length) {
            var c = a.Event("submit");
            this.eq(0).trigger(c),
            c.defaultPrevented || this.get(0).submit()
        }
        return this
    }
}(Zepto),
function(a) {
    function d(a) {
        return "tagName"in a ? a : a.parentNode
    }
    function e(a, b, c, d) {
        var e = Math.abs(a - b)
          , f = Math.abs(c - d);
        return e >= f ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
    }
    function h() {
        g = null,
        b.last && (b.el.trigger("longTap"),
        b = {})
    }
    function i() {
        g && clearTimeout(g),
        g = null
    }
    var b = {}, c, f = 750, g;
    a(document).ready(function() {
        var j, k;
        a(document.body).bind("touchstart", function(e) {
            j = Date.now(),
            k = j - (b.last || j),
            b.el = a(d(e.touches[0].target)),
            c && clearTimeout(c),
            b.x1 = e.touches[0].pageX,
            b.y1 = e.touches[0].pageY,
            k > 0 && k <= 250 && (b.isDoubleTap = !0),
            b.last = j,
            g = setTimeout(h, f)
        }).bind("touchmove", function(a) {
            i(),
            b.x2 = a.touches[0].pageX,
            b.y2 = a.touches[0].pageY
        }).bind("touchend", function(a) {
            i(),
            b.isDoubleTap ? (b.el.trigger("doubleTap"),
            b = {}) : b.x2 && Math.abs(b.x1 - b.x2) > 30 || b.y2 && Math.abs(b.y1 - b.y2) > 30 ? (b.el.trigger("swipe") && b.el.trigger("swipe" + e(b.x1, b.x2, b.y1, b.y2)),
            b = {}) : "last"in b && (b.el.trigger("tap"),
            c = setTimeout(function() {
                c = null,
                b.el.trigger("singleTap"),
                b = {}
            }, 250))
        }).bind("touchcancel", function() {
            c && clearTimeout(c),
            g && clearTimeout(g),
            g = c = null,
            b = {}
        })
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
        a.fn[b] = function(a) {
            return this.bind(b, a)
        }
    })
}(Zepto);
(function() {
    var opt = {
        'type': 1,
        'pageShow': function() {},
        'pageHide': function() {},
        'useParallax': true,
        'useArrow': true,
        'useAnimation': true
    };
    window.H5FullscreenPage = {
        'init': function(option) {
            $.extend(opt, option);
            initDom(opt);
            initEvent(opt);
        }
    };

    var obj = {
        '1': {
            'upDrag': function(percentage, item) {
                var translateY = 1 - 0.7 * percentage;
                //位置系数，可以微调
                item.next().css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //下一个item上移动
                item.css('-webkit-transform', 'translate3d(0,-' + (100 - translateY * 100) + '%,0)');
            },
            'downDrag': function(percentage, item) {
                var translateY = -(0.7 * percentage);
                item.prev().css('-webkit-transform', 'translate3d(0,' + (translateY * 100 - 100) + '%,0)');
                item.css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //当前item下移动
            },
            'nextSlide': function(item) {
                item.css('-webkit-transform', 'translate3d(0,-100%,0)');
                item.next().css('-webkit-transform', 'translate3d(0,0,0)');
            },
            'prevSlide': function(item) {
                item.prev().css('-webkit-transform', 'scale(1)');
                item.css('-webkit-transform', 'translate3d(0,100%,0)');
            },
            'showSlide': function(item) {
                item.css('-webkit-transform', 'scale(1)');
                item.next().css('-webkit-transform', 'translate3d(0,100%,0)');
            }
        },
        '2': {
            'upDrag': function(percentage, item) {
                var scale = 1 - 0.2 * percentage;
                //缩放系数，可以微调
                var translateY = 1 - 0.7 * percentage;
                //位置系数，可以微调
                item.css('-webkit-transform', 'scale(' + scale + ')');
                //当前item缩小
                item.next().css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //下一个item上移动
            },
            'downDrag': function(percentage, item) {
                var scale = 0.8 - 0.2 * percentage;
                var translateY = -(0.7 * percentage);
                item.css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //当前item下移动
                item.prev().css('-webkit-transform', 'scale(' + scale + ')');
                //前一个item放大
            },
            'nextSlide': function(item) {
                item.css('-webkit-transform', 'scale(.8)');
                item.next().css('-webkit-transform', 'translate3d(0,0,0)');
            },
            'prevSlide': function(item) {
                item.prev().css('-webkit-transform', 'scale(1)');
                item.css('-webkit-transform', 'translate3d(0,100%,0)');
            },
            'showSlide': function(item) {
                item.css('-webkit-transform', 'scale(1)');
                item.next().css('-webkit-transform', 'translate3d(0,100%,0)');
            }
        },
        '3': {
            'upDrag': function(percentage, item) {
                var translateY = 1 - 0.4 * percentage;
                //位置系数，可以微调
                item.css('-webkit-transform', 'translate3d(0,' + (translateY * 100 - 100) + '%,0)');
                item.next().css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //下一个item上移动
                item.css({
                    'opacity': 1 - percentage
                });
                item.next().css({
                    'opacity': percentage
                });
            },
            'downDrag': function(percentage, item) {
                var translateY = -(0.4 * percentage);
                item.prev().css('-webkit-transform', 'translate3d(0,' + (translateY * 100 - 100) + '%,0)');
                item.css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //当前item下移动
                item.css({
                    'opacity': 1 - Math.abs(percentage)
                });
                item.prev().css({
                    'opacity': Math.abs(percentage)
                });
            },
            'nextSlide': function(item) {
                item.css('-webkit-transform', 'translate3d(0,-100%,0)');
                item.next().css('-webkit-transform', 'translate3d(0,0,0)');
                item.css({
                    'opacity': 0
                });
                item.next().css({
                    'opacity': 1
                });
            },
            'prevSlide': function(item) {
                item.prev().css('-webkit-transform', 'scale(1)');
                item.css('-webkit-transform', 'translate3d(0,100%,0)');
                item.prev().css({
                    'opacity': 1
                });
                item.css({
                    'opacity': 0
                });
            },
            'showSlide': function(item) {
                item.css('-webkit-transform', 'scale(1)');
                item.next().css('-webkit-transform', 'translate3d(0,100%,0)');
                item.css({
                    'opacity': 1
                });
            }
        },
        '4': {
            'upDrag': function(percentage, item) {
                var translateY = 1 - 0.4 * percentage;
                //位置系数，可以微调
                item.css('-webkit-transform', 'translate3d(0,' + (translateY * 100 - 100) + '%,0)');
                item.next().css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //下一个item上移动
            },
            'downDrag': function(percentage, item) {
                var translateY = -(0.4 * percentage);
                item.prev().css('-webkit-transform', 'translate3d(0,' + (translateY * 100 - 100) + '%,0)');
                item.css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0)');
                //当前item下移动
            },
            'nextSlide': function(item) {
                item.addClass('zindex');
                setTimeout(function() {
                    item.removeClass('no-animation').css('-webkit-transform', 'translate3d(0,-100%,0)');
                    item.next().removeClass('zindex').addClass('no-animation').css('-webkit-transform', 'translate3d(0,0,0)');
                }, 100);

            },
            'prevSlide': function(item) {
                item.prev().css('-webkit-transform', 'translate3d(0,0,0)');
                item.next().css('-webkit-transform', 'translate3d(0,100%,0)');
                item.removeClass('zindex');
            },
            'showSlide': function(item) {
                item.css('-webkit-transform', 'scale(1)');
                item.next().css('-webkit-transform', 'translate3d(0,100%,0)');
            }
        }
    };
    var dragThreshold = 0.01;
    //临界值
    var dragStart = null;
    //开始抓取标志位
    var percentage = 0;
    //拖动量的百分比
    var currentItem;

    function touchStart(event) {
        if (dragStart !== null)
            return;
        var item = $(event.target).closest('.item');
        if (!item.length) {
            $('.overlay').hide();
            return;
        }
        if (event.touches) {
            event = event.touches[0];
        }
        //抓取时的所在位置
        dragStart = event.clientY;

        //分别关闭item的动画效果,动画效果只在松开抓取时出现
        item.addClass('no-animation');
        item.next().addClass('no-animation');
        item.prev().addClass('no-animation');

    }

    function touchMove(event) {
        //防止ios拖动事件
        event.preventDefault();
        //当item上有'no-scorll'样式时，不能滚动
        if ($(this).hasClass('no-scroll')) {
            return;
        }
        if (dragStart === null)
            return;
        var item = $(event.target).closest('.item');
        if (!item.length) {
            $('.overlay').hide();
            return;
        }
        if (event.touches) {
            event = event.touches[0];
        }
        //得到抓取开始时于进行中的差值的百分比
        percentage = (dragStart - event.clientY) / window.screen.height;
        //

        if (percentage > 0) {
            // //向上拖动
            var scale = 1 - 0.5 * percentage;
            //缩放系数，可以微调
            // var translateY = 1 - 0.4*percentage;//位置系数，可以微调
            // $(event.target).css('-webkit-transform', 'scale('+scale+')');//当前item缩小
            // $(event.target).next().css('-webkit-transform', 'translateY('+translateY*100+'%)'); //下一个item上移动
            //$(event.target).css('opacity', ''+scale+'');//当前item缩小
            obj[opt.type].upDrag(percentage, item);

        } else if (item.prev()) {
            //向下拖动
            // var scale = 0.8 - 0.2*percentage;
            // var translateY = -(0.4*percentage);
            // $(event.target).css('-webkit-transform', 'translateY('+translateY*100+'%)');//当前item下移动
            // $(event.target).prev().css('-webkit-transform', 'scale('+scale+')');//前一个item放大
            obj[opt.type].downDrag(percentage, item);
        }

    }

    function touchEnd(event) {
        //防止多次滚动，故增加一个覆盖层
        $('.overlay').show();
        dragStart = null;
        var item = $(event.target).closest('.item');
        if (!item.length) {
            $('.overlay').hide();
            return;
        }
        item.removeClass('no-animation');
        item.next().removeClass('no-animation');
        item.prev().removeClass('no-animation');

        //抓取停止后，根据临界值做相应判断
        if (percentage >= dragThreshold) {
            nextSlide(item);
        } else if (Math.abs(percentage) >= dragThreshold) {
            prevSlide(item);
        } else {
            showSlide(item);
        }
        //重置percentage
        percentage = 0;

    }

    function swipeUp(event) {
        var item = $(event.target).closest('.item');
        if (!item.length) {
            return;
        }
        nextSlide(item);
        //$(event.target).css('-webkit-transform', 'translateY(-101%)');
        //$(event.target).next().css('-webkit-transform', 'translateY(0)');
    }

    function swipeDown(event) {
        var item = $(event.target).closest('.item');
        if (!item.length) {
            return;
        }
        prevSlide(item);
        //$(event.target).css('-webkit-transform', 'translateY(101%)');
        //$(event.target).prev().css('-webkit-transform', 'translateY(0)');
    }

    function nextSlide(item) {
        //$(event.target).removeClass('parallax-item');
        //恢复到原样，或者展示下一item
        if (item.next().length) {
            item.attr('state', 'prev');
            item.siblings('.item').removeAttr('state');

            currentItem = item.next();
            currentItem.attr('state', 'next');

            orderPart(item.next());
            obj[opt.type].nextSlide(item);
        } else {
            obj[opt.type].showSlide(item);
        }

    }

    function prevSlide(item) {
        //$(event.target).removeClass('parallax-item');
        if (item.prev().length) {

            item.attr('state', 'prev');
            item.siblings('.item').removeAttr('state');
            currentItem = item.prev();
            currentItem.attr('state', 'next');
            obj[opt.type].prevSlide(item);
        } else {
            obj[opt.type].showSlide(item);
        }

    }

    function flip(event) {
        var item = $(event.target).closest('.item');
        if (item.next().length) {
            nextSlide(item);
        } else {
            prevSlide(item);
        }
    }

    function showSlide(item) {
        //$(event.target).removeClass('parallax-item');
        obj[opt.type].showSlide(item);
    }

    function initDom(opt) {
        $('body').addClass('H5FullscreenPage');
        currentItem = $('.item').first();
        currentItem.attr('state', 'next');
        if (opt.useAnimation) {
            var items = $('.item');
            items.find('.part').addClass('hide');
            orderPart(items.first());
        }
        $('body').append('<div class="overlay"></div>');
        if (opt.useArrow) {
            $('.item').slice(0, $('.item').length - 1).append('<span class="hot"></span><span class="arrow down"></span>');
            $('.item:last-child').append('<span class="hot"></span><span class="arrow up"></span>');
        }
    }

    function orderPart(dom) {
        var parts = $(dom).find('.part');
        parts.forEach(function(item) {
            var time = $(item).attr('data-delay') || 100;
            setTimeout(function() {
                $(item).removeClass('hide');
            }, time);
        });
    }

    function initEvent(opt) {
        if (opt.useParallax) {

            var orginData = {
                x: 0,
                y: 0
            };
            window.addEventListener('deviceorientation', function(event) {
                var gamma = event.gamma;
                var beta = event.beta;

                var x = -gamma;
                var y = -beta;

                if (Math.abs(Math.abs(x) - Math.abs(orginData.x)) < 0.1 || Math.abs(Math.abs(y) - Math.abs(orginData.y)) < 0.1) {
                    orginData.x = x;
                    orginData.y = y;
                    return;
                } else {
                    orginData.x = x;
                    orginData.y = y;
                }

                var halfWidth = window.innerWidth / 2;
                var halfHeight = window.innerHeight / 2;

                var max = 5;
                var items = $('.parallax');
                items.forEach(function(item) {
                    var dx = (item.getBoundingClientRect().width / max) * (x / halfWidth);
                    var dy = (item.getBoundingClientRect().width / max) * (y / halfHeight);

                    if ($(item).hasClass('item')) {
                        //$(item).addClass('parallax-item');
                        dx = -dx / 1 + 50;
                        dy = -dy / 1 + 50;
                        item.style['background-position'] = '' + dx + '% ' + dy + '%';
                        //$(item).removeClass('parallax-item');
                    } else {
                        item.style['transform'] = item.style['-webkit-transform'] = 'translate3d(' + dx + 'px,' + dy + 'px,0)';
                    }
                });
            }, false);
        }
        // 绑定事件
        $(document).on('touchmove', function(e) {
            e.preventDefault();
        });
        if (opt.type > 4) {
            opt.type = opt.type - 4;
            $('.item').on({
                'swipeUp': swipeUp,
                'swipeDown': swipeDown
            });
        } else {
            $('.item').on({
                'touchstart': touchStart,
                'touchmove': touchMove,
                'touchend': touchEnd,
                'touchcancel': touchEnd
            });
            $('.hot').on({
                'click': flip
            })
        }

        $('.item').on('tap', function() {
            //覆盖层隐藏
            $('.overlay').hide();
        });
        $('.item').on('transitionend webkitTransitionEnd', function(event) {
            //覆盖层隐藏
            $('.overlay').hide();
            if ($(event.target).attr('state') == 'next') {
                opt.pageShow(event.target);
            } else {
                opt.pageHide(event.target);
            }
            // opt.pageComplete(event.target);
            // debugger;
        });
        $('.overlay').on('tap', function() {
            //覆盖层隐藏
            $('.overlay').hide();
        });
    }

}
)();
/*! 
 hbec v1.0.0 build date:2015-11-19 16:11
 */
!function() {
    function a(a, d, g, h) {
        var i, j, k, l, m, n, o = a.length, p = "";
        if (null != d && "" != d && (i = b(d),
        l = i.length),
        null != g && "" != g && (j = b(g),
        m = j.length),
        null != h && "" != h && (k = b(h),
        n = k.length),
        o > 0)
            if (4 > o) {
                var q, r = c(a);
                if (null != d && "" != d && null != g && "" != g && null != h && "" != h) {
                    var s, t, u, v;
                    for (s = r,
                    t = 0; l > t; t++)
                        s = f(s, i[t]);
                    for (u = 0; m > u; u++)
                        s = f(s, j[u]);
                    for (v = 0; n > v; v++)
                        s = f(s, k[v]);
                    q = s
                } else if (null != d && "" != d && null != g && "" != g) {
                    var s, t, u;
                    for (s = r,
                    t = 0; l > t; t++)
                        s = f(s, i[t]);
                    for (u = 0; m > u; u++)
                        s = f(s, j[u]);
                    q = s
                } else if (null != d && "" != d) {
                    var s, t = 0;
                    for (s = r,
                    t = 0; l > t; t++)
                        s = f(s, i[t]);
                    q = s
                }
                p = e(q)
            } else {
                var w = parseInt(o / 4)
                  , x = o % 4
                  , y = 0;
                for (y = 0; w > y; y++) {
                    var q, z = a.substring(4 * y + 0, 4 * y + 4), A = c(z);
                    if (null != d && "" != d && null != g && "" != g && null != h && "" != h) {
                        var s, t, u, v;
                        for (s = A,
                        t = 0; l > t; t++)
                            s = f(s, i[t]);
                        for (u = 0; m > u; u++)
                            s = f(s, j[u]);
                        for (v = 0; n > v; v++)
                            s = f(s, k[v]);
                        q = s
                    } else if (null != d && "" != d && null != g && "" != g) {
                        var s, t, u;
                        for (s = A,
                        t = 0; l > t; t++)
                            s = f(s, i[t]);
                        for (u = 0; m > u; u++)
                            s = f(s, j[u]);
                        q = s
                    } else if (null != d && "" != d) {
                        var s, t;
                        for (s = A,
                        t = 0; l > t; t++)
                            s = f(s, i[t]);
                        q = s
                    }
                    p += e(q)
                }
                if (x > 0) {
                    var q, B = a.substring(4 * w + 0, o), A = c(B);
                    if (null != d && "" != d && null != g && "" != g && null != h && "" != h) {
                        var s, t, u, v;
                        for (s = A,
                        t = 0; l > t; t++)
                            s = f(s, i[t]);
                        for (u = 0; m > u; u++)
                            s = f(s, j[u]);
                        for (v = 0; n > v; v++)
                            s = f(s, k[v]);
                        q = s
                    } else if (null != d && "" != d && null != g && "" != g) {
                        var s, t, u;
                        for (s = A,
                        t = 0; l > t; t++)
                            s = f(s, i[t]);
                        for (u = 0; m > u; u++)
                            s = f(s, j[u]);
                        q = s
                    } else if (null != d && "" != d) {
                        var s, t;
                        for (s = A,
                        t = 0; l > t; t++)
                            s = f(s, i[t]);
                        q = s
                    }
                    p += e(q)
                }
            }
        return p
    }
    function b(a) {
        var b = new Array
          , d = a.length
          , e = parseInt(d / 4)
          , f = d % 4
          , g = 0;
        for (g = 0; e > g; g++)
            b[g] = c(a.substring(4 * g + 0, 4 * g + 4));
        return f > 0 && (b[g] = c(a.substring(4 * g + 0, d))),
        b
    }
    function c(a) {
        var b = a.length
          , c = new Array(64);
        if (4 > b) {
            var d = 0
              , e = 0
              , f = 0
              , g = 0;
            for (d = 0; b > d; d++) {
                var h = a.charCodeAt(d);
                for (e = 0; 16 > e; e++) {
                    var i = 1
                      , j = 0;
                    for (j = 15; j > e; j--)
                        i *= 2;
                    c[16 * d + e] = parseInt(h / i) % 2
                }
            }
            for (f = b; 4 > f; f++) {
                var h = 0;
                for (g = 0; 16 > g; g++) {
                    var i = 1
                      , j = 0;
                    for (j = 15; j > g; j--)
                        i *= 2;
                    c[16 * f + g] = parseInt(h / i) % 2
                }
            }
        } else
            for (d = 0; 4 > d; d++) {
                var h = a.charCodeAt(d);
                for (e = 0; 16 > e; e++) {
                    var i = 1;
                    for (j = 15; j > e; j--)
                        i *= 2;
                    c[16 * d + e] = parseInt(h / i) % 2
                }
            }
        return c
    }
    function d(a) {
        var b;
        switch (a) {
        case "0000":
            b = "0";
            break;
        case "0001":
            b = "1";
            break;
        case "0010":
            b = "2";
            break;
        case "0011":
            b = "3";
            break;
        case "0100":
            b = "4";
            break;
        case "0101":
            b = "5";
            break;
        case "0110":
            b = "6";
            break;
        case "0111":
            b = "7";
            break;
        case "1000":
            b = "8";
            break;
        case "1001":
            b = "9";
            break;
        case "1010":
            b = "A";
            break;
        case "1011":
            b = "B";
            break;
        case "1100":
            b = "C";
            break;
        case "1101":
            b = "D";
            break;
        case "1110":
            b = "E";
            break;
        case "1111":
            b = "F"
        }
        return b
    }
    function e(a) {
        var b = "";
        for (i = 0; i < 16; i++) {
            var c = "";
            for (j = 0; j < 4; j++)
                c += a[4 * i + j];
            b += d(c)
        }
        return b
    }
    function f(a, b) {
        var c = s(b)
          , d = g(a)
          , e = new Array(32)
          , f = new Array(32)
          , i = new Array(32)
          , j = 0
          , k = 0
          , m = 0
          , n = 0
          , r = 0;
        for (m = 0; 32 > m; m++)
            e[m] = d[m],
            f[m] = d[32 + m];
        for (j = 0; 16 > j; j++) {
            for (k = 0; 32 > k; k++)
                i[k] = e[k],
                e[k] = f[k];
            var t = new Array(48);
            for (n = 0; 48 > n; n++)
                t[n] = c[j][n];
            var u = l(p(o(l(h(f), t))), i);
            for (r = 0; 32 > r; r++)
                f[r] = u[r]
        }
        var v = new Array(64);
        for (j = 0; 32 > j; j++)
            v[j] = f[j],
            v[32 + j] = e[j];
        return q(v)
    }
    function g(a) {
        var b = new Array(64);
        for (i = 0,
        m = 1,
        n = 0; i < 4; i++,
        m += 2,
        n += 2)
            for (j = 7,
            k = 0; j >= 0; j--,
            k++)
                b[8 * i + k] = a[8 * j + m],
                b[8 * i + k + 32] = a[8 * j + n];
        return b
    }
    function h(a) {
        var b = new Array(48);
        for (i = 0; i < 8; i++)
            0 == i ? b[6 * i + 0] = a[31] : b[6 * i + 0] = a[4 * i - 1],
            b[6 * i + 1] = a[4 * i + 0],
            b[6 * i + 2] = a[4 * i + 1],
            b[6 * i + 3] = a[4 * i + 2],
            b[6 * i + 4] = a[4 * i + 3],
            7 == i ? b[6 * i + 5] = a[0] : b[6 * i + 5] = a[4 * i + 4];
        return b
    }
    function l(a, b) {
        var c = new Array(a.length);
        for (i = 0; i < a.length; i++)
            c[i] = a[i] ^ b[i];
        return c
    }
    function o(a) {
        var b = new Array(32)
          , c = ""
          , d = [[14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7], [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8], [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0], [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]]
          , e = [[15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10], [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5], [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15], [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]]
          , f = [[10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8], [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1], [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7], [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]]
          , g = [[7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15], [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9], [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4], [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]]
          , h = [[2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9], [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6], [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14], [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]]
          , i = [[12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11], [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8], [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6], [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]]
          , j = [[4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1], [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6], [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2], [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]]
          , k = [[13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7], [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2], [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8], [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]];
        for (m = 0; m < 8; m++) {
            var l = 0
              , n = 0;
            switch (l = 2 * a[6 * m + 0] + a[6 * m + 5],
            n = 2 * a[6 * m + 1] * 2 * 2 + 2 * a[6 * m + 2] * 2 + 2 * a[6 * m + 3] + a[6 * m + 4],
            m) {
            case 0:
                c = r(d[l][n]);
                break;
            case 1:
                c = r(e[l][n]);
                break;
            case 2:
                c = r(f[l][n]);
                break;
            case 3:
                c = r(g[l][n]);
                break;
            case 4:
                c = r(h[l][n]);
                break;
            case 5:
                c = r(i[l][n]);
                break;
            case 6:
                c = r(j[l][n]);
                break;
            case 7:
                c = r(k[l][n])
            }
            b[4 * m + 0] = parseInt(c.substring(0, 1)),
            b[4 * m + 1] = parseInt(c.substring(1, 2)),
            b[4 * m + 2] = parseInt(c.substring(2, 3)),
            b[4 * m + 3] = parseInt(c.substring(3, 4))
        }
        return b
    }
    function p(a) {
        var b = new Array(32);
        return b[0] = a[15],
        b[1] = a[6],
        b[2] = a[19],
        b[3] = a[20],
        b[4] = a[28],
        b[5] = a[11],
        b[6] = a[27],
        b[7] = a[16],
        b[8] = a[0],
        b[9] = a[14],
        b[10] = a[22],
        b[11] = a[25],
        b[12] = a[4],
        b[13] = a[17],
        b[14] = a[30],
        b[15] = a[9],
        b[16] = a[1],
        b[17] = a[7],
        b[18] = a[23],
        b[19] = a[13],
        b[20] = a[31],
        b[21] = a[26],
        b[22] = a[2],
        b[23] = a[8],
        b[24] = a[18],
        b[25] = a[12],
        b[26] = a[29],
        b[27] = a[5],
        b[28] = a[21],
        b[29] = a[10],
        b[30] = a[3],
        b[31] = a[24],
        b
    }
    function q(a) {
        var b = new Array(64);
        return b[0] = a[39],
        b[1] = a[7],
        b[2] = a[47],
        b[3] = a[15],
        b[4] = a[55],
        b[5] = a[23],
        b[6] = a[63],
        b[7] = a[31],
        b[8] = a[38],
        b[9] = a[6],
        b[10] = a[46],
        b[11] = a[14],
        b[12] = a[54],
        b[13] = a[22],
        b[14] = a[62],
        b[15] = a[30],
        b[16] = a[37],
        b[17] = a[5],
        b[18] = a[45],
        b[19] = a[13],
        b[20] = a[53],
        b[21] = a[21],
        b[22] = a[61],
        b[23] = a[29],
        b[24] = a[36],
        b[25] = a[4],
        b[26] = a[44],
        b[27] = a[12],
        b[28] = a[52],
        b[29] = a[20],
        b[30] = a[60],
        b[31] = a[28],
        b[32] = a[35],
        b[33] = a[3],
        b[34] = a[43],
        b[35] = a[11],
        b[36] = a[51],
        b[37] = a[19],
        b[38] = a[59],
        b[39] = a[27],
        b[40] = a[34],
        b[41] = a[2],
        b[42] = a[42],
        b[43] = a[10],
        b[44] = a[50],
        b[45] = a[18],
        b[46] = a[58],
        b[47] = a[26],
        b[48] = a[33],
        b[49] = a[1],
        b[50] = a[41],
        b[51] = a[9],
        b[52] = a[49],
        b[53] = a[17],
        b[54] = a[57],
        b[55] = a[25],
        b[56] = a[32],
        b[57] = a[0],
        b[58] = a[40],
        b[59] = a[8],
        b[60] = a[48],
        b[61] = a[16],
        b[62] = a[56],
        b[63] = a[24],
        b
    }
    function r(a) {
        var b = "";
        switch (a) {
        case 0:
            b = "0000";
            break;
        case 1:
            b = "0001";
            break;
        case 2:
            b = "0010";
            break;
        case 3:
            b = "0011";
            break;
        case 4:
            b = "0100";
            break;
        case 5:
            b = "0101";
            break;
        case 6:
            b = "0110";
            break;
        case 7:
            b = "0111";
            break;
        case 8:
            b = "1000";
            break;
        case 9:
            b = "1001";
            break;
        case 10:
            b = "1010";
            break;
        case 11:
            b = "1011";
            break;
        case 12:
            b = "1100";
            break;
        case 13:
            b = "1101";
            break;
        case 14:
            b = "1110";
            break;
        case 15:
            b = "1111"
        }
        return b
    }
    function s(a) {
        var b = new Array(56)
          , c = new Array;
        c[0] = new Array,
        c[1] = new Array,
        c[2] = new Array,
        c[3] = new Array,
        c[4] = new Array,
        c[5] = new Array,
        c[6] = new Array,
        c[7] = new Array,
        c[8] = new Array,
        c[9] = new Array,
        c[10] = new Array,
        c[11] = new Array,
        c[12] = new Array,
        c[13] = new Array,
        c[14] = new Array,
        c[15] = new Array;
        var d = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        for (e = 0; 7 > e; e++)
            for (j = 0,
            k = 7; j < 8; j++,
            k--)
                b[8 * e + j] = a[8 * k + e];
        var e = 0;
        for (e = 0; 16 > e; e++) {
            var f = 0
              , g = 0;
            for (j = 0; j < d[e]; j++) {
                for (f = b[0],
                g = b[28],
                k = 0; k < 27; k++)
                    b[k] = b[k + 1],
                    b[28 + k] = b[29 + k];
                b[27] = f,
                b[55] = g
            }
            var h = new Array(48);
            switch (h[0] = b[13],
            h[1] = b[16],
            h[2] = b[10],
            h[3] = b[23],
            h[4] = b[0],
            h[5] = b[4],
            h[6] = b[2],
            h[7] = b[27],
            h[8] = b[14],
            h[9] = b[5],
            h[10] = b[20],
            h[11] = b[9],
            h[12] = b[22],
            h[13] = b[18],
            h[14] = b[11],
            h[15] = b[3],
            h[16] = b[25],
            h[17] = b[7],
            h[18] = b[15],
            h[19] = b[6],
            h[20] = b[26],
            h[21] = b[19],
            h[22] = b[12],
            h[23] = b[1],
            h[24] = b[40],
            h[25] = b[51],
            h[26] = b[30],
            h[27] = b[36],
            h[28] = b[46],
            h[29] = b[54],
            h[30] = b[29],
            h[31] = b[39],
            h[32] = b[50],
            h[33] = b[44],
            h[34] = b[32],
            h[35] = b[47],
            h[36] = b[43],
            h[37] = b[48],
            h[38] = b[38],
            h[39] = b[55],
            h[40] = b[33],
            h[41] = b[52],
            h[42] = b[45],
            h[43] = b[41],
            h[44] = b[49],
            h[45] = b[35],
            h[46] = b[28],
            h[47] = b[31],
            e) {
            case 0:
                for (m = 0; m < 48; m++)
                    c[0][m] = h[m];
                break;
            case 1:
                for (m = 0; m < 48; m++)
                    c[1][m] = h[m];
                break;
            case 2:
                for (m = 0; m < 48; m++)
                    c[2][m] = h[m];
                break;
            case 3:
                for (m = 0; m < 48; m++)
                    c[3][m] = h[m];
                break;
            case 4:
                for (m = 0; m < 48; m++)
                    c[4][m] = h[m];
                break;
            case 5:
                for (m = 0; m < 48; m++)
                    c[5][m] = h[m];
                break;
            case 6:
                for (m = 0; m < 48; m++)
                    c[6][m] = h[m];
                break;
            case 7:
                for (m = 0; m < 48; m++)
                    c[7][m] = h[m];
                break;
            case 8:
                for (m = 0; m < 48; m++)
                    c[8][m] = h[m];
                break;
            case 9:
                for (m = 0; m < 48; m++)
                    c[9][m] = h[m];
                break;
            case 10:
                for (m = 0; m < 48; m++)
                    c[10][m] = h[m];
                break;
            case 11:
                for (m = 0; m < 48; m++)
                    c[11][m] = h[m];
                break;
            case 12:
                for (m = 0; m < 48; m++)
                    c[12][m] = h[m];
                break;
            case 13:
                for (m = 0; m < 48; m++)
                    c[13][m] = h[m];
                break;
            case 14:
                for (m = 0; m < 48; m++)
                    c[14][m] = h[m];
                break;
            case 15:
                for (m = 0; m < 48; m++)
                    c[15][m] = h[m]
            }
        }
        return c
    }
    this.strEnc = a
}();
