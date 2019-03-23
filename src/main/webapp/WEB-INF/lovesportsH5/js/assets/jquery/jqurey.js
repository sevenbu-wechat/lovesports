! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(h, e) {
	function a(e) {
		var t = "length" in e && e.length,
			n = Z.type(e);
		return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" ==
			typeof t && 0 < t && t - 1 in e))
	}

	function t(e, n, r) {
		if (Z.isFunction(n)) return Z.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		});
		if (n.nodeType) return Z.grep(e, function(e) {
			return e === n !== r
		});
		if ("string" == typeof n) {
			if (ae.test(n)) return Z.filter(n, e, r);
			n = Z.filter(n, e)
		}
		return Z.grep(e, function(e) {
			return 0 <= U.call(n, e) !== r
		})
	}

	function n(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function p(e) {
		var n = he[e] = {};
		return Z.each(e.match(de) || [], function(e, t) {
			n[t] = !0
		}), n
	}

	function r() {
		J.removeEventListener("DOMContentLoaded", r, !1), h.removeEventListener("load", r, !1), Z.ready()
	}

	function i() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = Z.expando + i.uid++
	}

	function u(e, t, n) {
		var r;
		if (n === undefined && 1 === e.nodeType)
			if (r = "data-" + t.replace(xe, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? Z.parseJSON(n) : n)
				} catch (i) {}
				ye.set(e, t, n)
			} else n = undefined;
		return n
	}

	function o() {
		return !0
	}

	function l() {
		return !1
	}

	function s() {
		try {
			return J.activeElement
		} catch (e) {}
	}

	function c(e, t) {
		return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName(
			"tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function g(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function m(e) {
		var t = Re.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function y(e, t) {
		for (var n = 0, r = e.length; n < r; n++) me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
	}

	function f(e, t) {
		var n, r, i, o, s, a, u, l;
		if (1 === t.nodeType) {
			if (me.hasData(e) && (o = me.access(e), s = me.set(t, o), l = o.events))
				for (i in delete s.handle, s.events = {}, l)
					for (n = 0, r = l[i].length; n < r; n++) Z.event.add(t, i, l[i][n]);
			ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
		}
	}

	function v(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") :
			[];
		return t === undefined || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
	}

	function d(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function x(e, t) {
		var n, r = Z(t.createElement(e)).appendTo(t.body),
			i = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0])) ? n.display : Z.css(r[0], "display");
		return r.detach(), i
	}

	function b(e) {
		var t = J,
			n = Ie[e];
		return n || ("none" !== (n = x(e, t)) && n || ((t = ($e = ($e || Z("<iframe frameborder='0' width='0' height='0'/>"))
			.appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = x(e, t), $e.detach()), Ie[e] = n), n
	}

	function w(e, t, n) {
		var r, i, o, s, a = e.style;
		return (n = n || ze(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) ||
			(s = Z.style(e, t)), _e.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth =
				a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), s !== undefined ? s + "" : s
	}

	function T(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}

	function C(e, t) {
		if (t in e) return t;
		for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Qe.length; i--;)
			if ((t = Qe[i] + n) in e) return t;
		return r
	}

	function N(e, t, n) {
		var r = Ue.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function k(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (
			s += Z.css(e, n + Ce[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Ce[o], !0, i)), "margin" !==
			n && (s -= Z.css(e, "border" + Ce[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Ce[o], !0, i), "padding" !==
			n && (s += Z.css(e, "border" + Ce[o] + "Width", !0, i)));
		return s
	}

	function E(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = ze(e),
			s = "border-box" === Z.css(e, "boxSizing", !1, o);
		if (i <= 0 || null == i) {
			if (((i = w(e, t, o)) < 0 || null == i) && (i = e.style[t]), _e.test(i)) return i;
			r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
	}

	function S(e, t) {
		for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = me.get(r, "olddisplay"), n = r
			.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ne(r) && (o[s] = me
				.access(r, "olddisplay", b(r.nodeName)))) : (i = Ne(r), "none" === n && i || me.set(r, "olddisplay", i ? n : Z.css(
				r, "display"))));
		for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display =
			t ? o[s] || "" : "none"));
		return e
	}

	function D(e, t, n, r, i) {
		return new D.prototype.init(e, t, n, r, i)
	}

	function j() {
		return setTimeout(function() {
			Je = undefined
		}), Je = Z.now()
	}

	function A(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Ce[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function L(e, t, n) {
		for (var r, i = (st[t] || []).concat(st["*"]), o = 0, s = i.length; o < s; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function q(t, e, n) {
		var r, i, o, s, a, u, l, c = this,
			f = {},
			p = t.style,
			d = t.nodeType && Ne(t),
			h = me.get(t, "fxshow");
		for (r in n.queue || (null == (a = Z._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire =
				function() {
					a.unqueued || u()
				}), a.unqueued++, c.always(function() {
				c.always(function() {
					a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
				})
			})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
				"inline" === ("none" === (l = Z.css(t, "display")) ? me.get(t, "olddisplay") || b(t.nodeName) : l) && "none" ===
				Z.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			})), e)
			if (i = e[r], nt.exec(i)) {
				if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
					if ("show" !== i || !h || h[r] === undefined) continue;
					d = !0
				}
				f[r] = h && h[r] || Z.style(t, r)
			} else l = undefined;
		if (Z.isEmptyObject(f)) "inline" === ("none" === l ? b(t.nodeName) : l) && (p.display = l);
		else
			for (r in h ? "hidden" in h && (d = h.hidden) : h = me.access(t, "fxshow", {}), o && (h.hidden = !d), d ? Z(t).show() :
				c.done(function() {
					Z(t).hide()
				}), c.done(function() {
					var e;
					for (e in me.remove(t, "fxshow"), f) Z.style(t, e, f[e])
				}), f) s = L(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r ||
				"height" === r ? 1 : 0))
	}

	function H(e, t) {
		var n, r, i, o, s;
		for (n in e)
			if (i = t[r = Z.camelCase(n)], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[
					n]), (s = Z.cssHooks[r]) && "expand" in s)
				for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
			else t[r] = i
	}

	function O(o, e, t) {
		var n, s, r = 0,
			i = ot.length,
			a = Z.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (s) return !1;
				for (var e = Je || j(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l
						.tweens.length; r < i; r++) l.tweens[r].run(n);
				return a.notifyWith(o, [l, n, t]), n < 1 && i ? t : (a.resolveWith(o, [l]), !1)
			},
			l = a.promise({
				elem: o,
				props: Z.extend({}, e),
				opts: Z.extend(!0, {
					specialEasing: {}
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Je || j(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = Z.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (s) return this;
					for (s = !0; t < n; t++) l.tweens[t].run(1);
					return e ? a.resolveWith(o, [l, e]) : a.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (H(c, l.opts.specialEasing); r < i; r++)
			if (n = ot[r].call(l, o, c, l.opts)) return n;
		return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(o, l), Z.fx.timer(Z.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function F(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(de) || [];
			if (Z.isFunction(t))
				for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(
					t)
		}
	}

	function P(t, i, o, s) {
		function a(e) {
			var r;
			return u[e] = !0, Z.each(t[e] || [], function(e, t) {
				var n = t(i, o, s);
				return "string" != typeof n || l || u[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), a(n), !1)
			}), r
		}
		var u = {},
			l = t === Ct;
		return a(i.dataTypes[0]) || !u["*"] && a("*")
	}

	function R(e, t) {
		var n, r, i = Z.ajaxSettings.flatOptions || {};
		for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && Z.extend(!0, e, r), e
	}

	function M(e, t, n) {
		for (var r, i, o, s, a = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in a)
				if (a[i] && a[i].test(r)) {
					u.unshift(i);
					break
				} if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				s || (s = i)
			}
			o = o || s
		}
		if (o) return o !== u[0] && u.unshift(o), n[o]
	}

	function W(e, t, n, r) {
		var i, o, s, a, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
				u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (!(s = l[u + " " + o] || l["* " + o]))
				for (i in l)
					if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
						!0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
						break
					} if (!0 !== s)
				if (s && e["throws"]) t = s(t);
				else try {
					t = s(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: s ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function $(n, e, r, i) {
		var t;
		if (Z.isArray(e)) Z.each(e, function(e, t) {
			r || Dt.test(n) ? i(n, t) : $(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== Z.type(e)) i(n, e);
		else
			for (t in e) $(n + "[" + t + "]", e[t], r, i)
	}

	function I(e) {
		return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var B = [],
		_ = B.slice,
		z = B.concat,
		X = B.push,
		U = B.indexOf,
		V = {},
		Y = V.toString,
		G = V.hasOwnProperty,
		Q = {},
		J = h.document,
		K = "2.1.4",
		Z = function(e, t) {
			return new Z.fn.init(e, t)
		},
		ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		re = function(e, t) {
			return t.toUpperCase()
		};
	Z.fn = Z.prototype = {
		jquery: K,
		constructor: Z,
		selector: "",
		length: 0,
		toArray: function() {
			return _.call(this)
		},
		get: function(e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : _.call(this)
		},
		pushStack: function(e) {
			var t = Z.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return Z.each(this, e, t)
		},
		map: function(n) {
			return this.pushStack(Z.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(_.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: X,
		sort: B.sort,
		splice: B.splice
	}, Z.extend = Z.fn.extend = function(e) {
		var t, n, r, i, o, s, a = e || {},
			u = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof a && (c = a, a = arguments[u] || {}, u++), "object" == typeof a || Z.isFunction(a) || (a = {}),
			u === l && (a = this, u--); u < l; u++)
			if (null != (t = arguments[u]))
				for (n in t) r = a[n], a !== (i = t[n]) && (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1,
						s = r && Z.isArray(r) ? r : []) : s = r && Z.isPlainObject(r) ? r : {}, a[n] = Z.extend(c, s, i)) : i !==
					undefined && (a[n] = i));
		return a
	}, Z.extend({
		expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === Z.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !Z.isArray(e) && 0 <= e - parseFloat(e) + 1
		},
		isPlainObject: function(e) {
			return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype,
				"isPrototypeOf"))
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			(e = Z.trim(e)) && (1 === e.indexOf("use strict") ? ((t = J.createElement("script")).text = e, J.head.appendChild(
				t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(te, "ms-").replace(ne, re)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r = 0,
				i = e.length,
				o = a(e);
			if (n) {
				if (o)
					for (; r < i && !1 !== t.apply(e[r], n); r++);
				else
					for (r in e)
						if (!1 === t.apply(e[r], n)) break
			} else if (o)
				for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ee, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (a(Object(e)) ? Z.merge(n, "string" == typeof e ? [e] : e) : X.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : U.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				s = [];
			if (a(e))
				for (; i < o; i++) null != (r = t(e[i], i, n)) && s.push(r);
			else
				for (i in e) null != (r = t(e[i], i, n)) && s.push(r);
			return z.apply([], s)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), (i =
				function() {
					return e.apply(t || this, r.concat(_.call(arguments)))
				}).guid = e.guid = e.guid || Z.guid++, i) : undefined
		},
		now: Date.now,
		support: Q
	}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		V["[object " + t + "]"] = t.toLowerCase()
	});
	var ie = function(n) {
		function b(e, t, n, r) {
			var i, o, s, a, u, l, c, f, p, d;
			if ((t ? t.ownerDocument || t : $) !== q && L(t), n = n || [], a = (t = t || q).nodeType, "string" != typeof e ||
				!e || 1 !== a && 9 !== a && 11 !== a) return n;
			if (!r && O) {
				if (11 !== a && (i = ve.exec(e)))
					if (s = i[1]) {
						if (9 === a) {
							if (!(o = t.getElementById(s)) || !o.parentNode) return n;
							if (o.id === s) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s) return n.push(o),
							n
					} else {
						if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
						if ((s = i[3]) && y.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
					} if (y.qsa && (!F || !F.test(e))) {
					if (f = c = W, p = t, d = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
						for (l = k(e), (c = t.getAttribute("id")) ? f = c.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" +
							f + "'] ", u = l.length; u--;) l[u] = f + m(l[u]);
						p = xe.test(e) && g(t.parentNode) || t, d = l.join(",")
					}
					if (d) try {
						return K.apply(n, p.querySelectorAll(d)), n
					} catch (h) {} finally {
						c || t.removeAttribute("id")
					}
				}
			}
			return S(e.replace(ue, "$1"), t, n, r)
		}

		function e() {
			function n(e, t) {
				return r.push(e + " ") > T.cacheLength && delete n[r.shift()], n[e + " "] = t
			}
			var r = [];
			return n
		}

		function u(e) {
			return e[W] = !0, e
		}

		function r(e) {
			var t = q.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function t(e, t) {
			for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
		}

		function l(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
			if (r) return r;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function i(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function o(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function s(s) {
			return u(function(o) {
				return o = +o, u(function(e, t) {
					for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function g(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function a() {}

		function m(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function f(s, e, t) {
			var a = e.dir,
				u = t && "parentNode" === a,
				l = B++;
			return e.first ? function(e, t, n) {
				for (; e = e[a];)
					if (1 === e.nodeType || u) return s(e, t, n)
			} : function(e, t, n) {
				var r, i, o = [I, l];
				if (n) {
					for (; e = e[a];)
						if ((1 === e.nodeType || u) && s(e, t, n)) return !0
				} else
					for (; e = e[a];)
						if (1 === e.nodeType || u) {
							if ((r = (i = e[W] || (e[W] = {}))[a]) && r[0] === I && r[1] === l) return o[2] = r[2];
							if ((i[a] = o)[2] = s(e, t, n)) return !0
						}
			}
		}

		function p(i) {
			return 1 < i.length ? function(e, t, n) {
				for (var r = i.length; r--;)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function v(e, t, n) {
			for (var r = 0, i = t.length; r < i; r++) b(e, t[r], n);
			return n
		}

		function w(e, t, n, r, i) {
			for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o),
				l && t.push(a)));
			return s
		}

		function x(d, h, g, m, y, e) {
			return m && !m[W] && (m = x(m)), y && !y[W] && (y = x(y, e)), u(function(e, t, n, r) {
				var i, o, s, a = [],
					u = [],
					l = t.length,
					c = e || v(h || "*", n.nodeType ? [n] : n, []),
					f = !d || !e && h ? c : w(c, a, d, n, r),
					p = g ? y || (e ? d : l || m) ? [] : t : f;
				if (g && g(f, p, n, r), m)
					for (i = w(p, u), m(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
				if (e) {
					if (y || d) {
						if (y) {
							for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
							y(null, p = [], i, r)
						}
						for (o = p.length; o--;)(s = p[o]) && -1 < (i = y ? ee(e, s) : a[o]) && (e[i] = !(t[i] = s))
					}
				} else p = w(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : K.apply(t, p)
			})
		}

		function d(e) {
			for (var i, t, n, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = f(function(
					e) {
					return e === i
				}, s, !0), l = f(function(e) {
					return -1 < ee(i, e)
				}, s, !0), c = [function(e, t, n) {
					var r = !o && (n || t !== D) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
					return i = null, r
				}]; a < r; a++)
				if (t = T.relative[e[a].type]) c = [f(p(c), t)];
				else {
					if ((t = T.filter[e[a].type].apply(null, e[a].matches))[W]) {
						for (n = ++a; n < r && !T.relative[e[n].type]; n++);
						return x(1 < a && p(c), 1 < a && m(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(ue, "$1"), t, a < n && d(e.slice(a, n)), n < r && d(e = e.slice(n)), n < r && m(e))
					}
					c.push(t)
				} return p(c)
		}

		function c(m, y) {
			var v = 0 < y.length,
				x = 0 < m.length,
				e = function(e, t, n, r, i) {
					var o, s, a, u = 0,
						l = "0",
						c = e && [],
						f = [],
						p = D,
						d = e || x && T.find.TAG("*", i),
						h = I += null == p ? 1 : Math.random() || .1,
						g = d.length;
					for (i && (D = t !== q && t); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							for (s = 0; a = m[s++];)
								if (a(o, t, n)) {
									r.push(o);
									break
								} i && (I = h)
						}
						v && ((o = !a && o) && u--, e && c.push(o))
					}
					if (u += l, v && l !== u) {
						for (s = 0; a = y[s++];) a(c, f, t, n);
						if (e) {
							if (0 < u)
								for (; l--;) c[l] || f[l] || (f[l] = Q.call(r));
							f = w(f)
						}
						K.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && b.uniqueSort(r)
					}
					return i && (I = h, D = p), c
				};
			return v ? u(e) : e
		}
		var h, y, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date,
			$ = n.document,
			I = 0,
			B = 0,
			_ = e(),
			z = e(),
			X = e(),
			U = function(e, t) {
				return e === t && (A = !0), 0
			},
			V = 1 << 31,
			Y = {}.hasOwnProperty,
			G = [],
			Q = G.pop,
			J = G.push,
			K = G.push,
			Z = G.slice,
			ee = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			te =
			"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ie = re.replace("w", "w#"),
			oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne +
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
			se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe +
			")*)|.*)\\)|)",
			ae = new RegExp(ne + "+", "g"),
			ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			le = new RegExp("^" + ne + "*," + ne + "*"),
			ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			pe = new RegExp(se),
			de = new RegExp("^" + ie + "$"),
			he = {
				ID: new RegExp("^#(" + re + ")"),
				CLASS: new RegExp("^\\.(" + re + ")"),
				TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + se),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" +
					ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" +
					ne + "*\\)|)(?=[^-]|$)", "i")
			},
			ge = /^(?:input|select|textarea|button)$/i,
			me = /^h\d$/i,
			ye = /^[^{]+\{\s*\[native \w/,
			ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			xe = /[+~]/,
			be = /'|\\/g,
			we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			Te = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r |
					56320)
			},
			Ce = function() {
				L()
			};
		try {
			K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
		} catch (Ne) {
			K = {
				apply: G.length ? function(e, t) {
					J.apply(e, Z.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		for (h in y = b.support = {}, N = b.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, L = b.setDocument = function(e) {
				var t, n, u = e ? e.ownerDocument || e : $;
				return u !== q && 9 === u.nodeType && u.documentElement ? (H = (q = u).documentElement, (n = u.defaultView) && n !==
					n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload",
						Ce)), O = !N(u), y.attributes = r(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), y.getElementsByTagName = r(function(e) {
						return e.appendChild(u.createComment("")), !e.getElementsByTagName("*").length
					}), y.getElementsByClassName = ye.test(u.getElementsByClassName), y.getById = r(function(e) {
						return H.appendChild(e).id = W, !u.getElementsByName || !u.getElementsByName(W).length
					}), y.getById ? (T.find.ID = function(e, t) {
						if ("undefined" != typeof t.getElementById && O) {
							var n = t.getElementById(e);
							return n && n.parentNode ? [n] : []
						}
					}, T.filter.ID = function(e) {
						var t = e.replace(we, Te);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}) : (delete T.find.ID, T.filter.ID = function(e) {
						var n = e.replace(we, Te);
						return function(e) {
							var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return t && t.value === n
						}
					}), T.find.TAG = y.getElementsByTagName ? function(e, t) {
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) :
							void 0
					} : function(e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, T.find.CLASS = y.getElementsByClassName && function(e, t) {
						if (O) return t.getElementsByClassName(e)
					}, P = [], F = [], (y.qsa = ye.test(u.querySelectorAll)) && (r(function(e) {
						H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W +
							"-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']")
							.length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" +
								ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(
								":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
					}), r(function(e) {
						var t = u.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]")
							.length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled",
								":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
					})), (y.matchesSelector = ye.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector ||
						H.msMatchesSelector)) && r(function(e) {
						y.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", se)
					}), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ye.test(H.compareDocumentPosition),
					M = t || ye.test(H.contains) ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 &
							e.compareDocumentPosition(r)))
					} : function(e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, U = t ? function(e, t) {
						if (e === t) return A = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
							!y.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument === $ && M($, e) ? -1 : t ===
							u || t.ownerDocument === $ && M($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
					} : function(e, t) {
						if (e === t) return A = !0, 0;
						var n, r = 0,
							i = e.parentNode,
							o = t.parentNode,
							s = [e],
							a = [t];
						if (!i || !o) return e === u ? -1 : t === u ? 1 : i ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
						if (i === o) return l(e, t);
						for (n = e; n = n.parentNode;) s.unshift(n);
						for (n = t; n = n.parentNode;) a.unshift(n);
						for (; s[r] === a[r];) r++;
						return r ? l(s[r], a[r]) : s[r] === $ ? -1 : a[r] === $ ? 1 : 0
					}, u) : q
			}, b.matches = function(e, t) {
				return b(e, null, null, t)
			}, b.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== q && L(e), t = t.replace(fe, "='$1']"), y.matchesSelector && O && (!P || !P.test(t)) &&
					(!F || !F.test(t))) try {
					var n = R.call(e, t);
					if (n || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (Ne) {}
				return 0 < b(t, q, null, [e]).length
			}, b.contains = function(e, t) {
				return (e.ownerDocument || e) !== q && L(e), M(e, t)
			}, b.attr = function(e, t) {
				(e.ownerDocument || e) !== q && L(e);
				var n = T.attrHandle[t.toLowerCase()],
					r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : undefined;
				return r !== undefined ? r : y.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ?
					r.value : null
			}, b.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, b.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (A = !y.detectDuplicates, j = !y.sortStable && e.slice(0), e.sort(U), A) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return j = null, e
			}, C = b.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r++];) n += C(t);
				return n
			}, (T = b.selectors = {
				cacheLength: 50,
				createPseudo: u,
				match: he,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[
							3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]), e[4] = +(e[4] ? e[5] +
								(e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] &&
							b.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) &&
							(t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0,
								3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(we, Te).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = _[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute(
								"class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = b.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i &&
								0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i :
								"~=" === r ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length +
									1) === i + "-"))
						}
					},
					CHILD: function(d, e, t, h, g) {
						var m = "nth" !== d.slice(0, 3),
							y = "last" !== d.slice(-4),
							v = "of-type" === e;
						return 1 === h && 0 === g ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, s, a, u, l = m !== y ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								f = v && e.nodeName.toLowerCase(),
								p = !n && !v;
							if (c) {
								if (m) {
									for (; l;) {
										for (o = e; o = o[l];)
											if (v ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
										u = l = "only" === d && !u && "nextSibling"
									}
									return !0
								}
								if (u = [y ? c.firstChild : c.lastChild], y && p) {
									for (a = (r = (i = c[W] || (c[W] = {}))[d] || [])[0] === I && r[1], s = r[0] === I && r[2], o = a && c.childNodes[
											a]; o = ++a && o && o[l] || (s = a = 0) || u.pop();)
										if (1 === o.nodeType && ++s && o === e) {
											i[d] = [I, a, s];
											break
										}
								} else if (p && (r = (e[W] || (e[W] = {}))[d]) && r[0] === I) s = r[1];
								else
									for (;
										(o = ++a && o && o[l] || (s = a = 0) || u.pop()) && ((v ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) ||
											!++s || (p && ((o[W] || (o[W] = {}))[d] = [I, s]), o !== e)););
								return (s -= g) === h || s % h == 0 && 0 <= s / h
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
						return s[W] ? s(o) : 1 < s.length ? (t = [e, e, "", o], T.setFilters.hasOwnProperty(e.toLowerCase()) ? u(
							function(e, t) {
								for (var n, r = s(e, o), i = r.length; i--;) e[n = ee(e, r[i])] = !(t[n] = r[i])
							}) : function(e) {
							return s(e, 0, t)
						}) : s
					}
				},
				pseudos: {
					not: u(function(e) {
						var r = [],
							i = [],
							a = E(e.replace(ue, "$1"));
						return a[W] ? u(function(e, t, n, r) {
							for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
						}) : function(e, t, n) {
							return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: u(function(t) {
						return function(e) {
							return 0 < b(t, e).length
						}
					}),
					contains: u(function(t) {
						return t = t.replace(we, Te),
							function(e) {
								return -1 < (e.textContent || e.innerText || C(e)).indexOf(t)
							}
					}),
					lang: u(function(n) {
						return de.test(n || "") || b.error("unsupported lang: " + n), n = n.replace(we, Te).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) ===
										n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === H
					},
					focus: function(e) {
						return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return !1 === e.disabled
					},
					disabled: function(e) {
						return !0 === e.disabled
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !T.pseudos.empty(e)
					},
					header: function(e) {
						return me.test(e.nodeName)
					},
					input: function(e) {
						return ge.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) ||
							"text" === t.toLowerCase())
					},
					first: s(function() {
						return [0]
					}),
					last: s(function(e, t) {
						return [t - 1]
					}),
					eq: s(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: s(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: s(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: s(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: s(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = T.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[h] = i(h);
		for (h in {
				submit: !0,
				reset: !0
			}) T.pseudos[h] = o(h);
		return a.prototype = T.filters = T.pseudos, T.setFilters = new a, k = b.tokenize = function(e, t) {
			var n, r, i, o, s, a, u, l = z[e + " "];
			if (l) return t ? 0 : l.slice(0);
			for (s = e, a = [], u = T.preFilter; s;) {
				for (o in n && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = ce.exec(
						s)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(ue, " ")
					}), s = s.slice(n.length)), T.filter) !(r = he[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length : s ? b.error(e) : z(e, a).slice(0)
		}, E = b.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = X[e + " "];
			if (!o) {
				for (t || (t = k(e)), n = t.length; n--;)(o = d(t[n]))[W] ? r.push(o) : i.push(o);
				(o = X(e, c(i, r))).selector = e
			}
			return o
		}, S = b.select = function(e, t, n, r) {
			var i, o, s, a, u, l = "function" == typeof e && e,
				c = !r && k(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && y.getById && 9 === t.nodeType && O && T
					.relative[o[1].type]) {
					if (!(t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
					if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && g(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && m(o))) return K.apply(n, r), n;
						break
					}
			}
			return (l || E(e, c))(r, t, !O, n, xe.test(e) && g(t.parentNode) || t), n
		}, y.sortStable = W.split("").sort(U).join("") === W, y.detectDuplicates = !!A, L(), y.sortDetached = r(function(e) {
			return 1 & e.compareDocumentPosition(q.createElement("div"))
		}), r(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || t("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), y.attributes && r(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute(
				"value")
		}) || t("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), r(function(e) {
			return null == e.getAttribute("disabled")
		}) || t(te, function(e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), b
	}(h);
	Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc =
		ie.isXML, Z.contains = ie.contains;
	var oe = Z.expr.match.needsContext,
		se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ae = /^.[^:#\[\.,]*$/;
	Z.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] :
			Z.find.matches(e, Z.grep(t, function(e) {
				return 1 === e.nodeType
			}))
	}, Z.fn.extend({
		find: function(e) {
			var t, n = this.length,
				r = [],
				i = this;
			if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
				for (t = 0; t < n; t++)
					if (Z.contains(i[t], this)) return !0
			}));
			for (t = 0; t < n; t++) Z.find(e, i[t], r);
			return (r = this.pushStack(1 < n ? Z.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
		},
		filter: function(e) {
			return this.pushStack(t(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(t(this, e || [], !0))
		},
		is: function(e) {
			return !!t(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
		}
	});
	var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(Z.fn.init = function(e, t) {
		var n, r;
		if (!e) return this;
		if ("string" == typeof e) {
			if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : le.exec(e)) || !n[1] && t)
				return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
			if (n[1]) {
				if (t = t instanceof Z ? t[0] : t,
					Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(
						t))
					for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
				return this
			}
			return (r = J.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector =
				e, this
		}
		return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue
			.ready ? ue.ready(e) : e(Z) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context),
				Z.makeArray(e, this))
	}).prototype = Z.fn, ue = Z(J);
	var ce = /^(?:parents|prev(?:Until|All))/,
		fe = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Z.extend({
		dir: function(e, t, n) {
			for (var r = [], i = n !== undefined;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (i && Z(e).is(n)) break;
					r.push(e)
				} return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), Z.fn.extend({
		has: function(e) {
			var t = Z(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (Z.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r <
				i; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
						o.push(n);
						break
					} return this.pushStack(1 < o.length ? Z.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0]
				.parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Z.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return Z.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return Z.dir(e, "parentNode", n)
		},
		next: function(e) {
			return n(e, "nextSibling")
		},
		prev: function(e) {
			return n(e, "previousSibling")
		},
		nextAll: function(e) {
			return Z.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return Z.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return Z.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return Z.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Z.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Z.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || Z.merge([], e.childNodes)
		}
	}, function(r, i) {
		Z.fn[r] = function(e, t) {
			var n = Z.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = Z.filter(t, n)), 1 < this.length &&
				(fe[r] || Z.unique(n), ce.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var pe, de = /\S+/g,
		he = {};
	Z.Callbacks = function(i) {
		i = "string" == typeof i ? he[i] || p(i) : Z.extend({}, i);
		var t, n, o, s, a, r, u = [],
			l = !i.once && [],
			c = function(e) {
				for (t = i.memory && e, n = !0, r = s || 0, s = 0, a = u.length, o = !0; u && r < a; r++)
					if (!1 === u[r].apply(e[0], e[1]) && i.stopOnFalse) {
						t = !1;
						break
					} o = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
			},
			f = {
				add: function() {
					if (u) {
						var e = u.length;
						! function r(e) {
							Z.each(e, function(e, t) {
								var n = Z.type(t);
								"function" === n ? i.unique && f.has(t) || u.push(t) : t && t.length && "string" !== n && r(t)
							})
						}(arguments), o ? a = u.length : t && (s = e, c(t))
					}
					return this
				},
				remove: function() {
					return u && Z.each(arguments, function(e, t) {
						for (var n; - 1 < (n = Z.inArray(t, u, n));) u.splice(n, 1), o && (n <= a && a--, n <= r && r--)
					}), this
				},
				has: function(e) {
					return e ? -1 < Z.inArray(e, u) : !(!u || !u.length)
				},
				empty: function() {
					return u = [], a = 0, this
				},
				disable: function() {
					return u = l = t = undefined, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = undefined, t || f.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, t) {
					return !u || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t], o ? l.push(t) : c(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return f
	}, Z.extend({
		Deferred: function(e) {
			var o = [
					["resolve", "done", Z.Callbacks("once memory"), "resolved"],
					["reject", "fail", Z.Callbacks("once memory"), "rejected"],
					["notify", "progress", Z.Callbacks("memory")]
				],
				i = "pending",
				s = {
					state: function() {
						return i
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					then: function() {
						var i = arguments;
						return Z.Deferred(function(r) {
							Z.each(o, function(e, t) {
								var n = Z.isFunction(i[e]) && i[e];
								a[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && Z.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[
										0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? Z.extend(e, s) : s
					}
				},
				a = {};
			return s.pipe = s.then, Z.each(o, function(e, t) {
				var n = t[2],
					r = t[3];
				s[t[1]] = n.add, r && n.add(function() {
					i = r
				}, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
					return a[t[0] + "With"](this === a ? s : this, arguments), this
				}, a[t[0] + "With"] = n.fireWith
			}), s.promise(a), e && e.call(a, a), a
		},
		when: function(e) {
			var i, t, n, r = 0,
				o = _.call(arguments),
				s = o.length,
				a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
				u = 1 === a ? e : Z.Deferred(),
				l = function(t, n, r) {
					return function(e) {
						n[t] = this, r[t] = 1 < arguments.length ? _.call(arguments) : e, r === i ? u.notifyWith(n, r) : --a || u.resolveWith(
							n, r)
					}
				};
			if (1 < s)
				for (i = new Array(s), t = new Array(s), n = new Array(s); r < s; r++) o[r] && Z.isFunction(o[r].promise) ? o[r]
					.promise().done(l(r, n, o)).fail(u.reject).progress(l(r, t, i)) : --a;
			return a || u.resolveWith(n, o), u.promise()
		}
	}), Z.fn.ready = function(e) {
		return Z.ready.promise().done(e), this
	}, Z.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? Z.readyWait++ : Z.ready(!0)
		},
		ready: function(e) {
			(!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0) !== e && 0 < --Z.readyWait || (pe.resolveWith(J, [Z]),
				Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready")))
		}
	}), Z.ready.promise = function(e) {
		return pe || (pe = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener(
			"DOMContentLoaded", r, !1), h.addEventListener("load", r, !1))), pe.promise(e)
	}, Z.ready.promise();
	var ge = Z.access = function(e, t, n, r, i, o, s) {
		var a = 0,
			u = e.length,
			l = null == n;
		if ("object" === Z.type(n))
			for (a in i = !0, n) Z.access(e, t, a, n[a], !0, o, s);
		else if (r !== undefined && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t =
				function(e, t, n) {
					return l.call(Z(e), n)
				})), t))
			for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
		return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
	};
	Z.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, i.uid = 1, i.accepts = Z.acceptData, i.prototype = {
		key: function(e) {
			if (!i.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = i.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n, Z.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if ("string" == typeof t) o[t] = n;
			else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
			else
				for (r in t) o[r] = t[r];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return t === undefined ? n : n[t]
		},
		access: function(e, t, n) {
			var r;
			return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t)) !== undefined ? r :
				this.get(e, Z.camelCase(t)) : (this.set(e, t, n), n !== undefined ? n : t)
		},
		remove: function(e, t) {
			var n, r, i, o = this.key(e),
				s = this.cache[o];
			if (t === undefined) this.cache[o] = {};
			else {
				Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), r = t in s ? [t, i] : (r = i) in s ? [r] :
					r.match(de) || []), n = r.length;
				for (; n--;) delete s[r[n]]
			}
		},
		hasData: function(e) {
			return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var me = new i,
		ye = new i,
		ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		xe = /([A-Z])/g;
	Z.extend({
		hasData: function(e) {
			return ye.hasData(e) || me.hasData(e)
		},
		data: function(e, t, n) {
			return ye.access(e, t, n)
		},
		removeData: function(e, t) {
			ye.remove(e, t)
		},
		_data: function(e, t, n) {
			return me.access(e, t, n)
		},
		_removeData: function(e, t) {
			me.remove(e, t)
		}
	}), Z.fn.extend({
		data: function(r, e) {
			var t, n, i, o = this[0],
				s = o && o.attributes;
			if (r === undefined) {
				if (this.length && (i = ye.get(o), 1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
					for (t = s.length; t--;) s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = Z.camelCase(n.slice(5)), u(o,
						n, i[n]));
					me.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof r ? this.each(function() {
				ye.set(this, r)
			}) : ge(this, function(t) {
				var e, n = Z.camelCase(r);
				if (o && t === undefined) return (e = ye.get(o, r)) !== undefined ? e : (e = ye.get(o, n)) !== undefined ? e :
					(e = u(o, n, undefined)) !== undefined ? e : void 0;
				this.each(function() {
					var e = ye.get(this, n);
					ye.set(this, n, t), -1 !== r.indexOf("-") && e !== undefined && ye.set(this, r, t)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				ye.remove(this, e)
			})
		}
	}), Z.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = me.get(e, t), n && (!r || Z.isArray(n) ? r = me.access(e, t, Z.makeArray(
				n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Z.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = Z._queueHooks(e, t),
				s = function() {
					Z.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e,
				s, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return me.get(e, n) || me.access(e, n, {
				empty: Z.Callbacks("once memory").add(function() {
					me.remove(e, [t + "queue", n])
				})
			})
		}
	}), Z.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? Z.queue(this[0], t) : n ===
				undefined ? this : this.each(function() {
					var e = Z.queue(this, t, n);
					Z._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && Z.dequeue(this, t)
				})
		},
		dequeue: function(e) {
			return this.each(function() {
				Z.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = Z.Deferred(),
				o = this,
				s = this.length,
				a = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = me.get(o[s], e + "queueHooks")) &&
				n.empty && (r++, n.empty.add(a));
			return a(), i.promise(t)
		}
	});
	var be, we, Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ce = ["Top", "Right", "Bottom", "Left"],
		Ne = function(e, t) {
			return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
		},
		ke = /^(?:checkbox|radio)$/i;
	be = J.createDocumentFragment().appendChild(J.createElement("div")), (we = J.createElement("input")).setAttribute(
			"type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), be.appendChild(we), Q.checkClone =
		be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!be.cloneNode(
			!0).lastChild.defaultValue;
	var Ee = typeof undefined;
	Q.focusinBubbles = "onfocusin" in h;
	var Se = /^key/,
		De = /^(?:mouse|pointer|contextmenu)|click/,
		je = /^(?:focusinfocus|focusoutblur)$/,
		Ae = /^([^.]*)(?:\.(.+)|)$/;
	Z.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, s, a, u, l, c, f, p, d, h, g, m = me.get(t);
			if (m)
				for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m
						.events = {}), (s = m.handle) || (s = m.handle = function(e) {
						return typeof Z !== Ee && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : undefined
					}), l = (e = (e || "").match(de) || [""]).length; l--;) d = g = (a = Ae.exec(e[l]) || [])[1], h = (a[2] || "").split(
					".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[
						d] || {}, c = Z.extend({
						type: d,
						origType: g,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && Z.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener &&
						t.addEventListener(d, s, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ?
					p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, s, a, u, l, c, f, p, d, h, g, m = me.hasData(e) && me.get(e);
			if (m && (u = m.events)) {
				for (l = (t = (t || "").match(de) || [""]).length; l--;)
					if (d = g = (a = Ae.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
						for (f = Z.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp(
								"(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType ||
							n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) ||
							(p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || Z.removeEvent(e, d, m.handle),
							delete u[d])
					} else
						for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
				Z.isEmptyObject(u) && (delete m.handle, me.remove(e, "events"))
			}
		},
		trigger: function(e, t, n, r) {
			var i, o, s, a, u, l, c, f = [n || J],
				p = G.call(e, "type") ? e.type : e,
				d = G.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = s = n = n || J, 3 !== n.nodeType && 8 !== n.nodeType && !je.test(p + Z.event.triggered) && (0 <= p.indexOf(
						".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[Z.expando] ? e :
						new Z.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re =
					e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target ||
					(e.target = n), t = null == t ? [e] : Z.makeArray(t, [e]), c = Z.event.special[p] || {}, r || !c.trigger || !1 !==
					c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !Z.isWindow(n)) {
					for (a = c.delegateType || p, je.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
					s === (n.ownerDocument || J) && f.push(s.defaultView || s.parentWindow || h)
				}
				for (i = 0;
					(o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a : c.bindType || p, (l = (me.get(o, "events") ||
					{})[e.type] && me.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && Z.acceptData(o) && (e.result =
					l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !Z.acceptData(
					n) || u && Z.isFunction(n[p]) && !Z.isWindow(n) && ((s = n[u]) && (n[u] = null), n[Z.event.triggered = p](), Z
					.event.triggered = undefined, s && (n[u] = s)), e.result
			}
		},
		dispatch: function(e) {
			e = Z.event.fix(e);
			var t, n, r, i, o, s = [],
				a = _.call(arguments),
				u = (me.get(this, "events") || {})[e.type] || [],
				l = Z.event.special[e.type] || {};
			if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
				for (s = Z.event.handlers.call(this, e, u), t = 0;
					(i = s[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) ||
						(e.handleObj = o, e.data = o.data, (r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem,
							a)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, s = [],
				a = t.delegateCount,
				u = e.target;
			if (a && u.nodeType && (!e.button || "click" !== e.type))
				for (; u !== this; u = u.parentNode || this)
					if (!0 !== u.disabled || "click" !== e.type) {
						for (r = [], n = 0; n < a; n++) r[i = (o = t[n]).selector + " "] === undefined && (r[i] = o.needsContext ? 0 <=
							Z(i, this).index(u) : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && s.push({
							elem: u,
							handlers: r
						})
					} return a < t.length && s.push({
				elem: this,
				handlers: t.slice(a)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
			.split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button;
				return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || J).documentElement, i = n.body,
					e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft ||
						0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop ||
						0)), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[Z.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			for (s || (this.fixHooks[i] = s = De.test(i) ? this.mouseHooks : Se.test(i) ? this.keyHooks : {}), r = s.props ?
				this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
			return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(
				e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== s() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === s() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && Z.nodeName(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return Z.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = Z.extend(new Z.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, Z.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, Z.Event = function(e, t) {
		if (!(this instanceof Z.Event)) return new Z.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented ===
				undefined && !1 === e.returnValue ? o : l) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp ||
			Z.now(), this[Z.expando] = !0
	}, Z.Event.prototype = {
		isDefaultPrevented: l,
		isPropagationStopped: l,
		isImmediatePropagationStopped: l,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = o, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = o, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = o, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Z.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, o) {
		Z.event.special[e] = {
			delegateType: o,
			bindType: o,
			handle: function(e) {
				var t, n = this,
					r = e.relatedTarget,
					i = e.handleObj;
				return r && (r === n || Z.contains(n, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type =
					o), t
			}
		}
	}), Q.focusinBubbles || Z.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		var i = function(e) {
			Z.event.simulate(r, e.target, Z.event.fix(e), !0)
		};
		Z.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this,
					t = me.access(e, r);
				t || e.addEventListener(n, i, !0), me.access(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this,
					t = me.access(e, r) - 1;
				t ? me.access(e, r, t) : (e.removeEventListener(n, i, !0), me.remove(e, r))
			}
		}
	}), Z.fn.extend({
		on: function(e, t, n, r, i) {
			var o, s;
			if ("object" == typeof e) {
				for (s in "string" != typeof t && (n = n || t, t = undefined), e) this.on(s, t, n, e[s], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n =
					undefined) : (r = n, n = t, t = undefined)), !1 === r) r = l;
			else if (!r) return this;
			return 1 === i && (o = r, (r = function(e) {
				return Z().off(e), o.apply(this, arguments)
			}).guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
				Z.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType +
				"." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = l), this.each(function() {
				Z.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				Z.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return Z.event.trigger(e, t, n, !0)
		}
	});
	var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		qe = /<([\w:]+)/,
		He = /<|&#?\w+;/,
		Oe = /<(?:script|style|link)/i,
		Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Pe = /^$|\/(?:java|ecma)script/i,
		Re = /^true\/(.*)/,
		Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		We = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	We.optgroup = We.option, We.tbody = We.tfoot = We.colgroup = We.caption = We.thead, We.th = We.td, Z.extend({
		clone: function(e, t, n) {
			var r, i, o, s, a = e.cloneNode(!0),
				u = Z.contains(e.ownerDocument, e);
			if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
				for (s = v(a), r = 0, i = (o = v(e)).length; r < i; r++) d(o[r], s[r]);
			if (t)
				if (n)
					for (o = o || v(e), s = s || v(a), r = 0, i = o.length; r < i; r++) f(o[r], s[r]);
				else f(e, a);
			return 0 < (s = v(a, "script")).length && y(s, !u && v(e, "script")), a
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
				if ((i = e[p]) || 0 === i)
					if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
					else if (He.test(i)) {
				for (o = o || c.appendChild(t.createElement("div")), s = (qe.exec(i) || ["", ""])[1].toLowerCase(), a = We[s] ||
					We._default, o.innerHTML = a[1] + i.replace(Le, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
				Z.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
			} else f.push(t.createTextNode(i));
			for (c.textContent = "", p = 0; i = f[p++];)
				if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u &&
						y(o), n))
					for (l = 0; i = o[l++];) Pe.test(i.type || "") && n.push(i);
			return c
		},
		cleanData: function(e) {
			for (var t, n, r, i, o = Z.event.special, s = 0;
				(n = e[s]) !== undefined; s++) {
				if (Z.acceptData(n) && (i = n[me.expando]) && (t = me.cache[i])) {
					if (t.events)
						for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
					me.cache[i] && delete me.cache[i]
				}
				delete ye.cache[n[ye.expando]]
			}
		}
	}), Z.fn.extend({
		text: function(e) {
			return ge(this, function(e) {
				return e === undefined ? Z.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || c(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = c(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(
				v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && y(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return Z.clone(this, e, t)
			})
		},
		html: function(e) {
			return ge(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (e === undefined && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Oe.test(e) && !We[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Le, "<$1></$2>");
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function(e) {
			var t = e;
			return this.domManip(arguments, function(e) {
				t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(n, r) {
			n = z.apply([], n);
			var e, t, i, o, s, a, u = 0,
				l = this.length,
				c = this,
				f = l - 1,
				p = n[0],
				d = Z.isFunction(p);
			if (d || 1 < l && "string" == typeof p && !Q.checkClone && Fe.test(p)) return this.each(function(e) {
				var t = c.eq(e);
				d && (n[0] = p.call(this, e, t.html())), t.domManip(n, r)
			});
			if (l && (t = (e = Z.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length &&
					(e = t), t)) {
				for (o = (i = Z.map(v(e, "script"), g)).length; u < l; u++) s = e, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(
					i, v(s, "script"))), r.call(this[u], s, u);
				if (o)
					for (a = i[i.length - 1].ownerDocument, Z.map(i, m), u = 0; u < o; u++) s = i[u], Pe.test(s.type || "") && !me
						.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent
							.replace(Me, "")))
			}
			return this
		}
	}), Z.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, s) {
		Z.fn[e] = function(e) {
			for (var t, n = [], r = Z(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), Z(r[o])[
				s](t), X.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var $e, Ie = {},
		Be = /^margin/,
		_e = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
		ze = function(e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(
				e, null)
		};
	! function() {
		function e() {
			o.style.cssText =
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
				o.innerHTML = "", r.appendChild(i);
			var e = h.getComputedStyle(o, null);
			t = "1%" !== e.top, n = "4px" === e.width, r.removeChild(i)
		}
		var t, n, r = J.documentElement,
			i = J.createElement("div"),
			o = J.createElement("div");
		o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle =
			"content-box" === o.style.backgroundClip, i.style.cssText =
			"border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(o), h.getComputedStyle &&
			Z.extend(Q, {
				pixelPosition: function() {
					return e(), t
				},
				boxSizingReliable: function() {
					return null == n && e(), n
				},
				reliableMarginRight: function() {
					var e, t = o.appendChild(J.createElement("div"));
					return t.style.cssText = o.style.cssText =
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
						t.style.marginRight = t.style.width = "0", o.style.width = "1px", r.appendChild(i), e = !parseFloat(h.getComputedStyle(
							t, null).marginRight), r.removeChild(i), o.removeChild(t), e
				}
			}))
	}(), Z.swap = function(e, t, n, r) {
		var i, o, s = {};
		for (o in t) s[o] = e.style[o], e.style[o] = t[o];
		for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
		return i
	};
	var Xe = /^(none|table(?!-c[ea]).+)/,
		Ue = new RegExp("^(" + Te + ")(.*)$", "i"),
		Ve = new RegExp("^([+-])=(" + Te + ")", "i"),
		Ye = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ge = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Qe = ["Webkit", "O", "Moz", "ms"];
	Z.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = w(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, s, a = Z.camelCase(t),
					u = e.style;
				if (t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], n === undefined) return s &&
					"get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t];
				"string" === (o = typeof n) && (i = Ve.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o =
					"number"), null != n && n == n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !==
					n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) ===
					undefined || (u[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, o, s, a = Z.camelCase(t);
			return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), (s = Z.cssHooks[t] || Z.cssHooks[a]) && "get" in s &&
				(i = s.get(e, !0, n)), i === undefined && (i = w(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n ||
				n ? (o = parseFloat(i), !0 === n || Z.isNumeric(o) ? o || 0 : i) : i
		}
	}), Z.each(["height", "width"], function(e, i) {
		Z.cssHooks[i] = {
			get: function(e, t, n) {
				if (t) return Xe.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ye, function() {
					return E(e, i, n)
				}) : E(e, i, n)
			},
			set: function(e, t, n) {
				var r = n && ze(e);
				return N(e, t, n ? k(e, i, n, "border-box" === Z.css(e, "boxSizing", !1, r), r) : 0)
			}
		}
	}), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
		if (t) return Z.swap(e, {
			display: "inline-block"
		}, w, [e, "marginRight"])
	}), Z.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		Z.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Ce[t] + o] = r[t] ||
					r[t - 2] || r[0];
				return n
			}
		}, Be.test(i) || (Z.cssHooks[i + o].set = N)
	}), Z.fn.extend({
		css: function(e, t) {
			return ge(this, function(e, t, n) {
				var r, i, o = {},
					s = 0;
				if (Z.isArray(t)) {
					for (r = ze(e), i = t.length; s < i; s++) o[t[s]] = Z.css(e, t[s], !1, r);
					return o
				}
				return n !== undefined ? Z.style(e, t, n) : Z.css(e, t)
			}, e, t, 1 < arguments.length)
		},
		show: function() {
			return S(this, !0)
		},
		hide: function() {
			return S(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Ne(this) ? Z(this).show() : Z(this).hide()
			})
		}
	}), (Z.Tween = D).prototype = {
		constructor: D,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(),
				this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = D.propHooks[this.prop];
			return e && e.get ? e.get(this) : D.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = D.propHooks[this.prop];
			return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options
					.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options
				.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
		}
	}, D.prototype.init.prototype = D.prototype, D.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, "")) &&
					"auto" !== t ? t : 0 : e.elem[e.prop]
			},
			set: function(e) {
				Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[
					e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, Z.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, Z.fx = D.prototype.init, Z.fx.step = {};
	var Je, Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
		rt = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
		it = /queueHooks$/,
		ot = [q],
		st = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = rt.exec(t),
					o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
					s = (Z.cssNumber[e] || "px" !== o && +r) && rt.exec(Z.css(n.elem, e)),
					a = 1,
					u = 20;
				if (s && s[3] !== o)
					for (o = o || s[3], i = i || [], s = +r || 1; s /= a = a || ".5", Z.style(n.elem, e, s + o), a !== (a = n.cur() /
							r) && 1 !== a && --u;);
				return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	Z.Animation = Z.extend(O, {
			tweener: function(e, t) {
				Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], st[n] = st[n] || [], st[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? ot.unshift(e) : ot.push(e)
			}
		}), Z.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? Z.extend({}, e) : {
				complete: n || !n && t || Z.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !Z.isFunction(t) && t
			};
			return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[
					r.duration] : Z.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete =
				function() {
					Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
				}, r
		}, Z.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(Ne).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(t, e, n, r) {
				var i = Z.isEmptyObject(t),
					o = Z.speed(e, n, r),
					s = function() {
						var e = O(this, Z.extend({}, t), o);
						(i || me.get(this, "finish")) && e.stop(!0)
					};
				return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
			},
			stop: function(i, e, o) {
				var s = function(e) {
					var t = e.stop;
					delete e.stop, t(o)
				};
				return "string" != typeof i && (o = e, e = i, i = undefined), e && !1 !== i && this.queue(i || "fx", []), this.each(
					function() {
						var e = !0,
							t = null != i && i + "queueHooks",
							n = Z.timers,
							r = me.get(this);
						if (t) r[t] && r[t].stop && s(r[t]);
						else
							for (t in r) r[t] && r[t].stop && it.test(t) && s(r[t]);
						for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n
							.splice(t, 1));
						!e && o || Z.dequeue(this, i)
					})
			},
			finish: function(s) {
				return !1 !== s && (s = s || "fx"), this.each(function() {
					var e, t = me.get(this),
						n = t[s + "queue"],
						r = t[s + "queueHooks"],
						i = Z.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, Z.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem ===
						this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
			}
		}), Z.each(["toggle", "show", "hide"], function(e, r) {
			var i = Z.fn[r];
			Z.fn[r] = function(e, t, n) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(A(r, !0), e, t, n)
			}
		}), Z.each({
			slideDown: A("show"),
			slideUp: A("hide"),
			slideToggle: A("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, r) {
			Z.fn[e] = function(e, t, n) {
				return this.animate(r, e, t, n)
			}
		}), Z.timers = [], Z.fx.tick = function() {
			var e, t = 0,
				n = Z.timers;
			for (Je = Z.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || Z.fx.stop(), Je = undefined
		}, Z.fx.timer = function(e) {
			Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
		}, Z.fx.interval = 13, Z.fx.start = function() {
			Ke || (Ke = setInterval(Z.fx.tick, Z.fx.interval))
		}, Z.fx.stop = function() {
			clearInterval(Ke), Ke = null
		}, Z.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, Z.fn.delay = function(r, e) {
			return r = Z.fx && Z.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
				var n = setTimeout(e, r);
				t.stop = function() {
					clearTimeout(n)
				}
			})
		}, Ze = J.createElement("input"), et = J.createElement("select"), tt = et.appendChild(J.createElement("option")), Ze
		.type = "checkbox", Q.checkOn = "" !== Ze.value, Q.optSelected = tt.selected, et.disabled = !0, Q.optDisabled = !tt.disabled,
		(Ze = J.createElement("input")).value = "t", Ze.type = "radio", Q.radioValue = "t" === Ze.value;
	var at, ut, lt = Z.expr.attrHandle;
	Z.fn.extend({
		attr: function(e, t) {
			return ge(this, Z.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Z.removeAttr(this, e)
			})
		}
	}), Z.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ee ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(
					e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? ut : at)), n === undefined ?
				r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = Z.find.attr(e, t)) ? undefined : i : null !==
				n ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(
					e, t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(de);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), ut = {
		set: function(e, t, n) {
			return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var o = lt[t] || Z.find.attr;
		lt[t] = function(e, t, n) {
			var r, i;
			return n || (i = lt[t], lt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, lt[t] = i), r
		}
	});
	var ct = /^(?:input|select|textarea|button)$/i;
	Z.fn.extend({
		prop: function(e, t) {
			return ge(this, Z.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Z.propFix[e] || e]
			})
		}
	}), Z.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !Z.isXMLDoc(e)) && (t = Z.propFix[t] || t, i = Z.propHooks[
					t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i &&
				null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || ct.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), Q.optSelected || (Z.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap",
		"frameBorder", "contentEditable"
	], function() {
		Z.propFix[this.toLowerCase()] = this
	});
	var ft = /[\t\r\n\f]/g;
	Z.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, s, a = "string" == typeof t && t,
				u = 0,
				l = this.length;
			if (Z.isFunction(t)) return this.each(function(e) {
				Z(this).addClass(t.call(this, e, this.className))
			});
			if (a)
				for (e = (t || "").match(de) || []; u < l; u++)
					if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ft, " ") : " ")) {
						for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						s = Z.trim(r), n.className !== s && (n.className = s)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof t && t,
				u = 0,
				l = this.length;
			if (Z.isFunction(t)) return this.each(function(e) {
				Z(this).removeClass(t.call(this, e, this.className))
			});
			if (a)
				for (e = (t || "").match(de) || []; u < l; u++)
					if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ft, " ") : "")) {
						for (o = 0; i = e[o++];)
							for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
						s = t ? Z.trim(r) : "", n.className !== s && (n.className = s)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i;
			return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : Z.isFunction(i) ?
				this.each(function(e) {
					Z(this).toggleClass(i.call(this, e, this.className, t), t)
				}) : this.each(function() {
					if ("string" === o)
						for (var e, t = 0, n = Z(this), r = i.match(de) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(
							e);
					else o !== Ee && "boolean" !== o || (this.className && me.set(this, "__className__", this.className), this.className =
						this.className || !1 === i ? "" : me.get(this, "__className__") || "")
				})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
				if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(ft, " ").indexOf(t)) return !0;
			return !1
		}
	});
	var pt = /\r/g;
	Z.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = Z.isFunction(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, Z(this).val()) : n) ? t = "" : "number" == typeof t ?
					t += "" : Z.isArray(t) && (t = Z.map(t, function(e) {
						return null == e ? "" : e + ""
					})), (r = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, t,
						"value") !== undefined || (this.value = t))
			})) : t ? (r = Z.valHooks[t.type] || Z.valHooks[t.nodeName.toLowerCase()]) && "get" in r && (e = r.get(t,
				"value")) !== undefined ? e : "string" == typeof(e = t.value) ? e.replace(pt, "") : null == e ? "" : e : void 0
		}
	}), Z.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Z.find.attr(e, "value");
					return null != t ? t : Z.trim(Z.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a =
							o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
						if (((n = r[u]).selected || u === i) && (Q.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) &&
							(!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
							if (t = Z(n).val(), o) return t;
							s.push(t)
						} return s
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;)((r = i[s]).selected = 0 <= Z.inArray(r.value,
						o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), Z.each(["radio", "checkbox"], function() {
		Z.valHooks[this] = {
			set: function(e, t) {
				if (Z.isArray(t)) return e.checked = 0 <= Z.inArray(Z(e).val(), t)
			}
		}, Q.checkOn || (Z.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), Z.each(
		"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
		.split(" "),
		function(e, n) {
			Z.fn[n] = function(e, t) {
				return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
			}
		}), Z.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var dt = Z.now(),
		ht = /\?/;
	Z.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, Z.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new DOMParser).parseFromString(e, "text/xml")
		} catch (n) {
			t = undefined
		}
		return t && !t.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + e), t
	};
	var gt = /#.*$/,
		mt = /([?&])_=[^&]*/,
		yt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		xt = /^(?:GET|HEAD)$/,
		bt = /^\/\//,
		wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Tt = {},
		Ct = {},
		Nt = "*/".concat("*"),
		kt = h.location.href,
		Et = wt.exec(kt.toLowerCase()) || [];
	Z.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: kt,
			type: "GET",
			isLocal: vt.test(Et[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Nt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": Z.parseJSON,
				"text xml": Z.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
		},
		ajaxPrefilter: F(Tt),
		ajaxTransport: F(Ct),
		ajax: function(e, t) {
			function n(e, t, n, r) {
				var i, o, s, a, u, l = t;
				2 !== w && (w = 2, d && clearTimeout(d), c = undefined, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e &&
					e < 300 || 304 === e, n && (a = M(g, T, n)), a = W(g, a, T, i), i ? (g.ifModified && ((u = T.getResponseHeader(
							"Last-Modified")) && (Z.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (Z.etag[f] = u)), 204 ===
						e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, o = a.data, i = !(s =
							a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) +
					"", i ? v.resolveWith(m, [o, l, T]) : v.rejectWith(m, [T, l, s]), T.statusCode(b), b = undefined, h && y.trigger(
						i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]), x.fireWith(m, [T, l]), h && (y.trigger("ajaxComplete",
						[T, g]), --Z.active || Z.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = undefined), t = t || {};
			var c, f, p, r, d, i, h, o, g = Z.ajaxSetup({}, t),
				m = g.context || g,
				y = g.context && (m.nodeType || m.jquery) ? Z(m) : Z.event,
				v = Z.Deferred(),
				x = Z.Callbacks("once memory"),
				b = g.statusCode || {},
				s = {},
				a = {},
				w = 0,
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === w) {
							if (!r)
								for (r = {}; t = yt.exec(p);) r[t[1].toLowerCase()] = t[2];
							t = r[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === w ? p : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return w || (e = a[n] = a[n] || e, s[e] = t), this
					},
					overrideMimeType: function(e) {
						return w || (g.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (w < 2)
								for (t in e) b[t] = [b[t], e[t]];
							else T.always(e[T.status]);
						return this
					},
					abort: function(e) {
						var t = e || u;
						return c && c.abort(t), n(0, t), this
					}
				};
			if (v.promise(T).complete = x.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || kt) + "").replace(
					gt, "").replace(bt, Et[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = Z.trim(g.dataType ||
					"*").toLowerCase().match(de) || [""], null == g.crossDomain && (i = wt.exec(g.url.toLowerCase()), g.crossDomain = !
					(!i || i[1] === Et[1] && i[2] === Et[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Et[3] || ("http:" ===
						Et[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = Z.param(g.data, g
					.traditional)), P(Tt, g, t, T), 2 === w) return T;
			for (o in (h = Z.event && g.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(),
				g.hasContent = !xt.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (ht.test(f) ? "&" : "?") +
					g.data, delete g.data), !1 === g.cache && (g.url = mt.test(f) ? f.replace(mt, "$1_=" + dt++) : f + (ht.test(f) ?
					"&" : "?") + "_=" + dt++)), g.ifModified && (Z.lastModified[f] && T.setRequestHeader("If-Modified-Since", Z.lastModified[
					f]), Z.etag[f] && T.setRequestHeader("If-None-Match", Z.etag[f])), (g.data && g.hasContent && !1 !== g.contentType ||
					t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[
					0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Nt +
					"; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(o, g.headers[o]);
			if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || 2 === w)) return T.abort();
			for (o in u = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) T[o](g[o]);
			if (c = P(Ct, g, t, T)) {
				T.readyState = 1, h && y.trigger("ajaxSend", [T, g]), g.async && 0 < g.timeout && (d = setTimeout(function() {
					T.abort("timeout")
				}, g.timeout));
				try {
					w = 1, c.send(s, n)
				} catch (l) {
					if (!(w < 2)) throw l;
					n(-1, l)
				}
			} else n(-1, "No Transport");
			return T
		},
		getJSON: function(e, t, n) {
			return Z.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Z.get(e, undefined, t, "script")
		}
	}), Z.each(["get", "post"], function(e, i) {
		Z[i] = function(e, t, n, r) {
			return Z.isFunction(t) && (r = r || n, n = t, t = undefined), Z.ajax({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			})
		}
	}), Z._evalUrl = function(e) {
		return Z.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, Z.fn.extend({
		wrapAll: function(t) {
			var e;
			return Z.isFunction(t) ? this.each(function(e) {
				Z(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]),
				e.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this)
		},
		wrapInner: function(n) {
			return Z.isFunction(n) ? this.each(function(e) {
				Z(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = Z(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = Z.isFunction(t);
			return this.each(function(e) {
				Z(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
			}).end()
		}
	}), Z.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, Z.expr.filters.visible = function(e) {
		return !Z.expr.filters.hidden(e)
	};
	var St = /%20/g,
		Dt = /\[\]$/,
		jt = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		Lt = /^(?:input|select|textarea|keygen)/i;
	Z.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (t === undefined && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(
				e)) Z.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) $(n, e[n], t, i);
		return r.join("&").replace(St, "+")
	}, Z.fn.extend({
		serialize: function() {
			return Z.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Z.prop(this, "elements");
				return e ? Z.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Z(this).is(":disabled") && Lt.test(this.nodeName) && !At.test(e) && (this.checked || !ke
					.test(e))
			}).map(function(e, t) {
				var n = Z(this).val();
				return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(jt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(jt, "\r\n")
				}
			}).get()
		}
	}), Z.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var qt = 0,
		Ht = {},
		Ot = {
			0: 200,
			1223: 204
		},
		Ft = Z.ajaxSettings.xhr();
	h.attachEvent && h.attachEvent("onunload", function() {
		for (var e in Ht) Ht[e]()
	}), Q.cors = !!Ft && "withCredentials" in Ft, Q.ajax = Ft = !!Ft, Z.ajaxTransport(function(s) {
		var a;
		if (Q.cors || Ft && !s.crossDomain) return {
			send: function(e, t) {
				var n, r = s.xhr(),
					i = ++qt;
				if (r.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
					for (n in s.xhrFields) r[n] = s.xhrFields[n];
				for (n in s.mimeType && r.overrideMimeType && r.overrideMimeType(s.mimeType), s.crossDomain || e[
						"X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				a = function(e) {
					return function() {
						a && (delete Ht[i], a = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? t(r.status,
							r.statusText) : t(Ot[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
							text: r.responseText
						} : undefined, r.getAllResponseHeaders()))
					}
				}, r.onload = a(), r.onerror = a("error"), a = Ht[i] = a("abort");
				try {
					r.send(s.hasContent && s.data || null)
				} catch (o) {
					if (a) throw o
				}
			},
			abort: function() {
				a && a()
			}
		}
	}), Z.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return Z.globalEval(e), e
			}
		}
	}), Z.ajaxPrefilter("script", function(e) {
		e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Z.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain) return {
			send: function(e, t) {
				r = Z("<script>").prop({
					async: !0,
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function(e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), J.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var Pt = [],
		Rt = /(=)\?(?=&|$)|\?\?/;
	Z.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Pt.pop() || Z.expando + "_" + dt++;
			return this[e] = !0, e
		}
	}), Z.ajaxPrefilter("json jsonp", function(e, t, n) {
		var r, i, o, s = !1 !== e.jsonp && (Rt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf(
			"application/x-www-form-urlencoded") && Rt.test(e.data) && "data");
		if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() :
			e.jsonpCallback, s ? e[s] = e[s].replace(Rt, "$1" + r) : !1 !== e.jsonp && (e.url += (ht.test(e.url) ? "&" : "?") +
				e.jsonp + "=" + r), e.converters["script json"] = function() {
				return o || Z.error(r + " was not called"), o[0]
			}, e.dataTypes[0] = "json", i = h[r], h[r] = function() {
				o = arguments
			}, n.always(function() {
				h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Pt.push(r)), o && Z.isFunction(i) && i(o[0]), o = i =
					undefined
			}), "script"
	}), Z.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || J;
		var r = se.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r
			.childNodes))
	};
	var Mt = Z.fn.load;
	Z.fn.load = function(e, t, n) {
		if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
		var r, i, o, s = this,
			a = e.indexOf(" ");
		return 0 <= a && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = undefined) : t &&
			"object" == typeof t && (i = "POST"), 0 < s.length && Z.ajax({
				url: e,
				type: i,
				dataType: "html",
				data: t
			}).done(function(e) {
				o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
			}).complete(n && function(e, t) {
				s.each(n, o || [e.responseText, t, e])
			}), this
	}, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Z.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Z.expr.filters.animated = function(t) {
		return Z.grep(Z.timers, function(e) {
			return t === e.elem
		}).length
	};
	var Wt = h.document.documentElement;
	Z.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, s, a, u, l = Z.css(e, "position"),
				c = Z(e),
				f = {};
			"static" === l && (e.style.position = "relative"), a = c.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), (
					"absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) :
				(s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top =
					t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(
					f)
		}
	}, Z.fn.extend({
		offset: function(t) {
			if (arguments.length) return t === undefined ? this : this.each(function(e) {
				Z.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0],
				i = {
					top: 0,
					left: 0
				},
				o = r && r.ownerDocument;
			return o ? (e = o.documentElement, Z.contains(e, r) ? (typeof r.getBoundingClientRect !== Ee && (i = r.getBoundingClientRect()),
				n = I(o), {
					top: i.top + n.pageYOffset - e.clientTop,
					left: i.left + n.pageXOffset - e.clientLeft
				}) : i) : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(),
					Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0],
						"borderLeftWidth", !0)), {
					top: t.top - r.top - Z.css(n, "marginTop", !0),
					left: t.left - r.left - Z.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Wt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e =
					e.offsetParent;
				return e || Wt
			})
		}
	}), Z.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = "pageYOffset" === i;
		Z.fn[t] = function(e) {
			return ge(this, function(e, t, n) {
				var r = I(e);
				if (n === undefined) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? h.pageXOffset : n, o ? n : h.pageYOffset) : e[t] = n
			}, t, e, arguments.length, null)
		}
	}), Z.each(["top", "left"], function(e, n) {
		Z.cssHooks[n] = T(Q.pixelPosition, function(e, t) {
			if (t) return t = w(e, n), _e.test(t) ? Z(e).position()[n] + "px" : t
		})
	}), Z.each({
		Height: "height",
		Width: "width"
	}, function(o, s) {
		Z.each({
			padding: "inner" + o,
			content: s,
			"": "outer" + o
		}, function(r, e) {
			Z.fn[e] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return ge(this, function(e, t, n) {
					var r;
					return Z.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement,
							Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) :
						n === undefined ? Z.css(e, t, i) : Z.style(e, t, n, i)
				}, s, n ? e : undefined, n, null)
			}
		})
	}), Z.fn.size = function() {
		return this.length
	}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return Z
	});
	var $t = h.jQuery,
		It = h.$;
	return Z.noConflict = function(e) {
		return h.$ === Z && (h.$ = It), e && h.jQuery === Z && (h.jQuery = $t), Z
	}, typeof e === Ee && (h.jQuery = h.$ = Z), Z
});
