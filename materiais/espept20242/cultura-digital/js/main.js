function acessilibityOpenSummary() {
	$("#acessilibityOpenSummary").hasClass("active") ? openSummary() : closeSummary()
}
function acessilibityScrollTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0
}
function acessilibityScrollBottom() {
	document.body.scrollTop = $(document).height()
}
function acessilibityMain() {
	document.body.scrollTop = $("#main").scrollTop()
}
function acessilibityContrast() {
	$("body").toggleClass("contrasted"), $("body").hasClass("contrasted") ? enableContrastLinks() : disableContrastLinks()
}
function openSummary() {
	$("#acessilibityOpenSummary").text("Ir para o menu 2"), $("#acessilibityOpenSummary").addClass("active"), $("body").addClass("body-minified"), $(".sidebar").removeClass("sidebar-close"), openSummaryLinks()
}
function closeSummary() {
	$("#acessilibityOpenSummary").text("Fechar o menu 2"), $("#acessilibityOpenSummary").removeClass("active"), $(".sidebar").addClass("sidebar-close"), $("body").removeClass("body-minified"), closeSummaryLinks()
}
function enableContrastLinks() {
	$("#sidebar-desktop .sidebar .sidebar-body .sidebar-nav .nav-item .nav-link").each(function(a) {
		$(this).attr("href", insertUrlParam($(this).attr("href"), "contrast", "true"))
	}), $(".nav-pagination .nav-buttons .btn").each(function(a) {
		void 0 != $(this).attr("href") && $(this).attr("href", insertUrlParam($(this).attr("href"), "contrast", "true"))
	})
}
function disableContrastLinks() {
	$("#sidebar-desktop .sidebar .sidebar-body .sidebar-nav .nav-item .nav-link").each(function(a) {
		$(this).attr("href", insertUrlParam($(this).attr("href"), "contrast", "false"))
	}), $(".nav-pagination .nav-buttons .btn").each(function(a) {
		void 0 != $(this).attr("href") && $(this).attr("href", insertUrlParam($(this).attr("href"), "contrast", "false"))
	})
}
function openSummaryLinks() {
	$("#sidebar-desktop .sidebar .sidebar-body .sidebar-nav .nav-item .nav-link").each(function(a) {
		$(this).attr("href", insertUrlParam($(this).attr("href"), "summary", "open"))
	}), $(".nav-pagination .nav-buttons .btn").each(function(a) {
		void 0 != $(this).attr("href") && $(this).attr("href", insertUrlParam($(this).attr("href"), "summary", "open"))
	})
}
function closeSummaryLinks() {
	$("#sidebar-desktop .sidebar .sidebar-body .sidebar-nav .nav-item .nav-link").each(function(a) {
		$(this).attr("href", insertUrlParam($(this).attr("href"), "summary", "close"))
	}), $(".nav-pagination .nav-buttons .btn").each(function(a) {
		void 0 != $(this).attr("href") && $(this).attr("href", insertUrlParam($(this).attr("href"), "summary", "close"))
	})
}
function insertUrlParam(a, b, c) {
	if (b = escape(b), c = escape(c), a.includes("?")) {
		for (var d, e = getUrlParams(a).split("&"), f = e.length; f--;) if (d = e[f].split("="), d[0] == b) {
			d[1] = c, e[f] = d.join("=");
			break
		}
		return f < 0 && (e[e.length] = [b, c].join("=")), a.split("?")[0] + "?" + e.join("&")
	}
	return a.split("?")[0] + "?" + b + "=" + c
}
function getUrlParams(a) {
	return !!a.includes("?") && a.split("?")[1]
}
function getUrlParamsArray(a) {
	return !!a.includes("?") && a.split("?")[1]
}
function getSearchParameters() {
	var a = window.location.search.substr(1);
	return null != a && "" != a ? transformToAssocArray(a) : {}
}
function transformToAssocArray(a) {
	for (var b = {}, c = a.split("&"), d = 0; d < c.length; d++) {
		var e = c[d].split("=");
		b[e[0]] = e[1]
	}
	return b
}
function removeSaibaMais(a) {
	return semSaibaMais = [], $.each(a, function(a, b) {
		"know-more" != b.template && semSaibaMais.push(b)
	}), semSaibaMais
}
function pagination(a) {
	var b = Object.values(a),
		c = (b[0], b[1], b[2]),
		d = (removeSaibaMais(b[2]), c.length);
	$(".btn-nav-prev").hide(), $(".btn-nav-next").hide(), paginaAtual > 0 && (prevUrl = c[paginaAtual - 1].url, $(".btn-nav-prev").attr("href", prevUrl), $(".btn-nav-prev").show()), paginaAtual < c.length - 1 && (nextUrl = c[paginaAtual + 1].url, $(".btn-nav-next").attr("href", nextUrl), $(".btn-nav-next").show()), $(".nav-marker").html("Página " + (paginaAtual + 1) + " de " + d)
}
function setProgress(a, b) {
	var c = Object.values(a)[2].length,
		d = null;
	d = parseInt(100 * b / c), $(".navbar-progress .progress").css("width", d), console.log(d)
}
function makeSummaryList(a, b) {
	var c = "",
		d = Object.values(a)[2];
	return $.each(d, function(a, b) {
		null == b.parent ? b.id == paginaAtual && (b.active = !0) : b.id == paginaAtual && (d[b.parent].active = !0)
	}), $.each(d, function(a, b) {
		null == b.parent && (b.children.length ? (b.active ? c += '<li class="nav-item active">' : c += '<li class="nav-item">', c += '<a class="nav-link" href="' + b.url + '">', c += b.title, c += "</a>", c += '<div class="sublist-menu">', $.each(b.children, function(a, b) {
			b.active ? c += '<a class="sublist-link active" href="' + b.url + '">' : c += '<a class="sublist-link" href="' + b.url + '">', c += b.title, c += "</a>"
		}), c += "</div>", c += "</li>") : b.active ? (c += '<li class="nav-item active">', c += '<a class="nav-link" href="' + b.url + '">', c += b.title, c += "</a>", c += "</li>") : (c += '<li class="nav-item">', c += '<a class="nav-link" href="' + b.url + '">', c += b.title, c += "</a>", c += "</li>"))
	}), c
}
function track() {
	var a = encodeURIComponent("HZb25t0V3p11FO"),
		b = $("meta[name='user']", parent.document).attr("value"),
		c = null;
	if (void 0 != b) {
		var d = encodeURIComponent(window.location.href);
		b = encodeURIComponent(b), c = "http://apisenad7.nute.ufsc.br/logarAcessoAVEA/?auth=" + a + "&identificador_usuario=" + b + "&identificador_pagina=" + d
	}
	null != c && $.get(c)
}!
function(a, b) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	"use strict";

	function c(a, b, c) {
		b = b || ga;
		var d, e = b.createElement("script");
		if (e.text = a, c) for (d in ua) c[d] && (e[d] = c[d]);
		b.head.appendChild(e).parentNode.removeChild(e)
	}
	function d(a) {
		return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ma[na.call(a)] || "object" : typeof a
	}
	function e(a) {
		var b = !! a && "length" in a && a.length,
			c = d(a);
		return !sa(a) && !ta(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
	}
	function f(a, b) {
		return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
	}
	function g(a, b, c) {
		return sa(b) ? wa.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		}) : b.nodeType ? wa.grep(a, function(a) {
			return a === b !== c
		}) : "string" != typeof b ? wa.grep(a, function(a) {
			return la.call(b, a) > -1 !== c
		}) : wa.filter(b, a, c)
	}
	function h(a, b) {
		for (;
		(a = a[b]) && 1 !== a.nodeType;);
		return a
	}
	function i(a) {
		var b = {};
		
		return wa.each(a.match(Ha) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	function j(a) {
		return a
	}
	function k(a) {
		throw a
	}
	function l(a, b, c, d) {
		var e;
		try {
			a && sa(e = a.promise) ? e.call(a).done(b).fail(c) : a && sa(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
		} catch (a) {
			c.apply(void 0, [a])
		}
	}
	function m() {
		ga.removeEventListener("DOMContentLoaded", m), a.removeEventListener("load", m), wa.ready()
	}
	function n(a, b) {
		return b.toUpperCase()
	}
	function o(a) {
		return a.replace(La, "ms-").replace(Ma, n)
	}
	function p() {
		this.expando = wa.expando + p.uid++
	}
	function q(a) {
		return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Qa.test(a) ? JSON.parse(a) : a)
	}
	function r(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Ra, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
			try {
				c = q(c)
			} catch (e) {}
			Pa.set(a, b, c)
		} else c = void 0;
		return c
	}
	function s(a, b, c, d) {
		var e, f, g = 20,
			h = d ?
			function() {
				return d.cur()
			} : function() {
				return wa.css(a, b, "")
			},
			i = h(),
			j = c && c[3] || (wa.cssNumber[b] ? "" : "px"),
			k = (wa.cssNumber[b] || "px" !== j && +i) && Ta.exec(wa.css(a, b));
		if (k && k[3] !== j) {
			for (i /= 2, j = j || k[3], k = +i || 1; g--;) wa.style(a, b, k + j), (1 - f) * (1 - (f = h() / i || .5)) <= 0 && (g = 0), k /= f;
			k *= 2, wa.style(a, b, k + j), c = c || []
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
	}
	function t(a) {
		var b, c = a.ownerDocument,
			d = a.nodeName,
			e = Xa[d];
		return e || (b = c.body.appendChild(c.createElement(d)), e = wa.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Xa[d] = e, e)
	}
	function u(a, b) {
		for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Oa.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Va(d) && (e[f] = t(d))) : "none" !== c && (e[f] = "none", Oa.set(d, "display", c)));
		for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
		return a
	}
	function v(a, b) {
		var c;
		return c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && f(a, b) ? wa.merge([a], c) : c
	}
	function w(a, b) {
		for (var c = 0, d = a.length; c < d; c++) Oa.set(a[c], "globalEval", !b || Oa.get(b[c], "globalEval"))
	}
	function x(a, b, c, e, f) {
		for (var g, h, i, j, k, l, m = b.createDocumentFragment(), n = [], o = 0, p = a.length; o < p; o++) if ((g = a[o]) || 0 === g) if ("object" === d(g)) wa.merge(n, g.nodeType ? [g] : g);
		else if (ab.test(g)) {
			for (h = h || m.appendChild(b.createElement("div")), i = (Za.exec(g) || ["", ""])[1].toLowerCase(), j = _a[i] || _a._default, h.innerHTML = j[1] + wa.htmlPrefilter(g) + j[2], l = j[0]; l--;) h = h.lastChild;
			wa.merge(n, h.childNodes), h = m.firstChild, h.textContent = ""
		} else n.push(b.createTextNode(g));
		for (m.textContent = "", o = 0; g = n[o++];) if (e && wa.inArray(g, e) > -1) f && f.push(g);
		else if (k = wa.contains(g.ownerDocument, g), h = v(m.appendChild(g), "script"), k && w(h), c) for (l = 0; g = h[l++];) $a.test(g.type || "") && c.push(g);
		return m
	}
	function y() {
		return !0
	}
	function z() {
		return !1
	}
	function A() {
		try {
			return ga.activeElement
		} catch (a) {}
	}
	function B(a, b, c, d, e, f) {
		var g, h;
		if ("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for (h in b) B(a, h, c, d, b[h], f);
			return a
		}
		if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = z;
		else if (!e) return a;
		return 1 === f && (g = e, e = function(a) {
			return wa().off(a), g.apply(this, arguments)
		}, e.guid = g.guid || (g.guid = wa.guid++)), a.each(function() {
			wa.event.add(this, b, e, d, c)
		})
	}
	function C(a, b) {
		return f(a, "table") && f(11 !== b.nodeType ? b : b.firstChild, "tr") ? wa(a).children("tbody")[0] || a : a
	}
	function D(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}
	function E(a) {
		return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a
	}
	function F(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (Oa.hasData(a) && (f = Oa.access(a), g = Oa.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				
				for (e in j) for (c = 0, d = j[e].length; c < d; c++) wa.event.add(b, e, j[e][c])
			}
			Pa.hasData(a) && (h = Pa.access(a), i = wa.extend({}, h), Pa.set(b, i))
		}
	}
	function G(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && Ya.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
	}
	function H(a, b, d, e) {
		b = ja.apply([], b);
		var f, g, h, i, j, k, l = 0,
			m = a.length,
			n = m - 1,
			o = b[0],
			p = sa(o);
		if (p || m > 1 && "string" == typeof o && !ra.checkClone && hb.test(o)) return a.each(function(c) {
			var f = a.eq(c);
			p && (b[0] = o.call(this, c, f.html())), H(f, b, d, e)
		});
		
		if (m && (f = x(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
			for (h = wa.map(v(f, "script"), D), i = h.length; l < m; l++) j = f, l !== n && (j = wa.clone(j, !0, !0), i && wa.merge(h, v(j, "script"))), d.call(a[l], j, l);
			if (i) for (k = h[h.length - 1].ownerDocument, wa.map(h, E), l = 0; l < i; l++) j = h[l], $a.test(j.type || "") && !Oa.access(j, "globalEval") && wa.contains(k, j) && (j.src && "module" !== (j.type || "").toLowerCase() ? wa._evalUrl && wa._evalUrl(j.src) : c(j.textContent.replace(ib, ""), k, j))
		}
		return a
	}
	function I(a, b, c) {
		for (var d, e = b ? wa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || wa.cleanData(v(d)), d.parentNode && (c && wa.contains(d.ownerDocument, d) && w(v(d, "script")), d.parentNode.removeChild(d));
		return a
	}
	function J(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || kb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || wa.contains(a.ownerDocument, a) || (g = wa.style(a, b)), !ra.pixelBoxStyles() && jb.test(g) && lb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}
	function K(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	function L(a) {
		if (a in rb) return a;
		for (var b = a[0].toUpperCase() + a.slice(1), c = qb.length; c--;) if ((a = qb[c] + b) in rb) return a
	}
	function M(a) {
		var b = wa.cssProps[a];
		return b || (b = wa.cssProps[a] = L(a) || a), b
	}
	function N(a, b, c) {
		var d = Ta.exec(b);
		return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
	}
	function O(a, b, c, d, e, f) {
		var g = "width" === b ? 1 : 0,
			h = 0,
			i = 0;
		if (c === (d ? "border" : "content")) return 0;
		for (; g < 4; g += 2)"margin" === c && (i += wa.css(a, c + Ua[g], !0, e)), d ? ("content" === c && (i -= wa.css(a, "padding" + Ua[g], !0, e)), "margin" !== c && (i -= wa.css(a, "border" + Ua[g] + "Width", !0, e))) : (i += wa.css(a, "padding" + Ua[g], !0, e), "padding" !== c ? i += wa.css(a, "border" + Ua[g] + "Width", !0, e) : h += wa.css(a, "border" + Ua[g] + "Width", !0, e));
		return !d && f >= 0 && (i += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - i - h - .5))), i
	}
	function P(a, b, c) {
		var d = kb(a),
			e = J(a, b, d),
			f = "border-box" === wa.css(a, "boxSizing", !1, d),
			g = f;
		if (jb.test(e)) {
			if (!c) return e;
			e = "auto"
		}
		return g = g && (ra.boxSizingReliable() || e === a.style[b]), ("auto" === e || !parseFloat(e) && "inline" === wa.css(a, "display", !1, d)) && (e = a["offset" + b[0].toUpperCase() + b.slice(1)], g = !0), (e = parseFloat(e) || 0) + O(a, b, c || (f ? "border" : "content"), g, d, e) + "px"
	}
	function Q(a, b, c, d, e) {
		return new Q.prototype.init(a, b, c, d, e)
	}
	function R() {
		tb && (!1 === ga.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(R) : a.setTimeout(R, wa.fx.interval), wa.fx.tick())
	}
	function S() {
		return a.setTimeout(function() {
			sb = void 0
		}), sb = Date.now()
	}
	function T(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		
		for (b = b ? 1 : 0; d < 4; d += 2 - b) c = Ua[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}
	function U(a, b, c) {
		for (var d, e = (X.tweeners[b] || []).concat(X.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d
	}
	function V(a, b, c) {
		var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
			m = this,
			n = {},
			o = a.style,
			p = a.nodeType && Va(a),
			q = Oa.get(a, "fxshow");
		c.queue || (g = wa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
			g.unqueued || h()
		}), g.unqueued++, m.always(function() {
			m.always(function() {
				g.unqueued--, wa.queue(a, "fx").length || g.empty.fire()
			})
		}));
		for (d in b) if (e = b[d], ub.test(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
				if ("show" !== e || !q || void 0 === q[d]) continue;
				p = !0
			}
			n[d] = q && q[d] || wa.style(a, d)
		}
		if ((i = !wa.isEmptyObject(b)) || !wa.isEmptyObject(n)) {
			l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = Oa.get(a, "display")), k = wa.css(a, "display"), "none" === k && (j ? k = j : (u([a], !0), j = a.style.display || j, k = wa.css(a, "display"), u([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === wa.css(a, "float") && (i || (m.done(function() {
				o.display = j
			}), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
				o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
			})), i = !1;
			for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = Oa.access(a, "fxshow", {
				display: j
			}), f && (q.hidden = !p), p && u([a], !0), m.done(function() {
				p || u([a]), Oa.remove(a, "fxshow");
				for (d in n) wa.style(a, d, n[d])
			})), i = U(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
		}
	}
	function W(a, b) {
		var c, d, e, f, g;
		for (c in a) if (d = o(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = wa.cssHooks[d]) && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f) c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}
	function X(a, b, c) {
		var d, e, f = 0,
			g = X.prefilters.length,
			h = wa.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = sb || S(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: wa.extend({}, b),
				opts: wa.extend(!0, {
					specialEasing: {},
					
					easing: wa.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: sb || S(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = wa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; c < d; c++) j.tweens[c].run(1);
					return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (W(k, j.opts.specialEasing); f < g; f++) if (d = X.prefilters[f].call(j, a, k, j.opts)) return sa(d.stop) && (wa._queueHooks(j.elem, j.opts.queue).stop = d.stop.bind(d)), d;
		return wa.map(k, U, j), sa(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), wa.fx.timer(wa.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j
	}
	function Y(a) {
		return (a.match(Ha) || []).join(" ")
	}
	function Z(a) {
		return a.getAttribute && a.getAttribute("class") || ""
	}
	function $(a) {
		return Array.isArray(a) ? a : "string" == typeof a ? a.match(Ha) || [] : []
	}
	function _(a, b, c, e) {
		var f;
		if (Array.isArray(b)) wa.each(b, function(b, d) {
			c || Gb.test(a) ? e(a, d) : _(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, c, e)
		});
		else if (c || "object" !== d(b)) e(a, b);
		else
		for (f in b) _(a + "[" + f + "]", b[f], c, e)
	}
	function aa(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(Ha) || [];
			if (sa(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}
	function ba(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0, wa.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}
		var f = {},
			g = a === Sb;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}
	function ca(a, b) {
		var c, d, e = wa.ajaxSettings.flatOptions || {};
		
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && wa.extend(!0, a, d), a
	}
	function da(a, b, c) {
		for (var d, e, f, g, h = a.contents, i = a.dataTypes;
		"*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d) for (e in h) if (h[e] && h[e].test(d)) {
			i.unshift(e);
			break
		}
		if (i[0] in c) f = i[0];
		else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		if (f) return f !== i[0] && i.unshift(f), c[f]
	}
	function ea(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		
		if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
		else if ("*" !== i && i !== f) {
			if (!(g = j[i + " " + f] || j["* " + f])) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				!0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
				break
			}
			if (!0 !== g) if (g && a.throws) b = g(b);
			else
			try {
				b = g(b)
			} catch (l) {
				return {
					state: "parsererror",
					error: g ? l : "No conversion from " + i + " to " + f
				}
			}
		}
		return {
			state: "success",
			data: b
		}
	}
	var fa = [],
		ga = a.document,
		ha = Object.getPrototypeOf,
		ia = fa.slice,
		ja = fa.concat,
		ka = fa.push,
		la = fa.indexOf,
		ma = {},
		na = ma.toString,
		oa = ma.hasOwnProperty,
		pa = oa.toString,
		qa = pa.call(Object),
		ra = {},
		sa = function(a) {
			return "function" == typeof a && "number" != typeof a.nodeType
		},
		ta = function(a) {
			return null != a && a === a.window
		},
		ua = {
			type: !0,
			src: !0,
			noModule: !0
		},
		va = "3.3.1",
		wa = function(a, b) {
			return new wa.fn.init(a, b)
		},
		xa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	wa.fn = wa.prototype = {
		jquery: va,
		constructor: wa,
		length: 0,
		toArray: function() {
			return ia.call(this)
		},
		
		get: function(a) {
			return null == a ? ia.call(this) : a < 0 ? this[a + this.length] : this[a]
		},
		
		pushStack: function(a) {
			var b = wa.merge(this.constructor(), a);
			return b.prevObject = this, b
		},
		
		each: function(a) {
			return wa.each(this, a)
		},
		
		map: function(a) {
			return this.pushStack(wa.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		
		slice: function() {
			return this.pushStack(ia.apply(this, arguments))
		},
		
		first: function() {
			return this.eq(0)
		},
		
		last: function() {
			return this.eq(-1)
		},
		
		eq: function(a) {
			var b = this.length,
				c = +a + (a < 0 ? b : 0);
			return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
		},
		
		end: function() {
			return this.prevObject || this.constructor()
		},
		
		push: ka,
		sort: fa.sort,
		splice: fa.splice
	}, wa.extend = wa.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || sa(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (wa.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && wa.isPlainObject(c) ? c : {}, g[b] = wa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, wa.extend({
		expando: "jQuery" + (va + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		
		noop: function() {},
		
		isPlainObject: function(a) {
			var b, c;
			return !(!a || "[object Object]" !== na.call(a)) && (!(b = ha(a)) || "function" == typeof(c = oa.call(b, "constructor") && b.constructor) && pa.call(c) === qa)
		},
		
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		
		globalEval: function(a) {
			c(a)
		},
		
		each: function(a, b) {
			var c, d = 0;
			if (e(a)) for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
			else
			for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
			return a
		},
		
		trim: function(a) {
			return null == a ? "" : (a + "").replace(xa, "")
		},
		
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (e(Object(a)) ? wa.merge(c, "string" == typeof a ? [a] : a) : ka.call(c, a)), c
		},
		
		inArray: function(a, b, c) {
			return null == b ? -1 : la.call(b, a, c)
		},
		
		merge: function(a, b) {
			for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
			return a.length = e, a
		},
		
		grep: function(a, b, c) {
			for (var d = [], e = 0, f = a.length, g = !c; e < f; e++)!b(a[e], e) !== g && d.push(a[e]);
			return d
		},
		
		map: function(a, b, c) {
			var d, f, g = 0,
				h = [];
			if (e(a)) for (d = a.length; g < d; g++) null != (f = b(a[g], g, c)) && h.push(f);
			else
			for (g in a) null != (f = b(a[g], g, c)) && h.push(f);
			return ja.apply([], h)
		},
		
		guid: 1,
		support: ra
	}), "function" == typeof Symbol && (wa.fn[Symbol.iterator] = fa[Symbol.iterator]), wa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
		ma["[object " + b + "]"] = b.toLowerCase()
	});
	
	var ya = function(a) {
		function b(a, b, c, d) {
			var e, f, g, h, i, j, k, m = b && b.ownerDocument,
				o = b ? b.nodeType : 9;
			if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
			if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
				if (11 !== o && (i = ra.exec(a))) if (e = i[1]) {
					if (9 === o) {
						if (!(g = b.getElementById(e))) return c;
						if (g.id === e) return c.push(g), c
					} else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
				} else {
					if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
					if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
				}
				if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
					if (1 !== o) m = b, k = a;
					else if ("object" !== b.nodeName.toLowerCase()) {
						for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
						k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
					}
					if (k) try {
						return $.apply(c, m.querySelectorAll(k)), c
					} catch (p) {} finally {
						h === O && b.removeAttribute("id")
					}
				}
			}
			return C(a.replace(ha, "$1"), b, c, d)
		}
		function c() {
			function a(c, d) {
				return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
			}
			var b = [];
			return a
		}
		function d(a) {
			return a[O] = !0, a
		}
		function e(a) {
			var b = H.createElement("fieldset");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}
		function f(a, b) {
			for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
		}
		function g(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
			if (d) return d;
			if (c) for (; c = c.nextSibling;) if (c === b) return -1;
			return a ? 1 : -1
		}
		function h(a) {
			return function(b) {
				return "input" === b.nodeName.toLowerCase() && b.type === a
			}
		}
		function i(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				
				return ("input" === c || "button" === c) && b.type === a
			}
		}
		function j(a) {
			return function(b) {
				return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a
			}
		}
		function k(a) {
			return d(function(b) {
				return b = +b, d(function(c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}
		function l(a) {
			return a && void 0 !== a.getElementsByTagName && a
		}
		function m() {}
		function n(a) {
			for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
			return d
		}
		function o(a, b, c) {
			var d = b.dir,
				e = b.next,
				f = e || d,
				g = c && "parentNode" === f,
				h = R++;
			return b.first ?
			function(b, c, e) {
				for (; b = b[d];) if (1 === b.nodeType || g) return a(b, c, e);
				return !1
			} : function(b, c, i) {
				var j, k, l, m = [Q, h];
				if (i) {
					for (; b = b[d];) if ((1 === b.nodeType || g) && a(b, c, i)) return !0
				} else
				for (; b = b[d];) if (1 === b.nodeType || g) if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
				else {
					if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
					if (k[f] = m, m[2] = a(b, c, i)) return !0
				}
				return !1
			}
		}
		function p(a) {
			return a.length > 1 ?
			function(b, c, d) {
				for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}
		function q(a, c, d) {
			for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
			return d
		}
		function r(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
			return g
		}
		function s(a, b, c, e, f, g) {
			return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = d || q(b || "*", h.nodeType ? [h] : h, []),
					s = !a || !d && b ? p : r(p, m, a, h, i),
					t = c ? f || (d ? a : o || e) ? [] : g : s;
				if (c && c(s, t, h, i), e) for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
				if (d) {
					if (f || a) {
						if (f) {
							for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
							f(null, t = [], j, i)
						}
						for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
					}
				} else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
			})
		}
		function t(a) {
			for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
				return a === b
			}, g, !0), j = o(function(a) {
				return aa(b, a) > -1
			}, g, !0), k = [function(a, c, d) {
				var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
				return b = null, e
			}]; h < e; h++) if (c = x.relative[a[h].type]) k = [o(p(k), c)];
			else {
				if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
					for (d = ++h; d < e && !x.relative[a[d].type]; d++);
					return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
						value: " " === a[h - 2].type ? "*" : ""
					})).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a))
				}
				k.push(c)
			}
			return p(k)
		}
		function u(a, c) {
			var e = c.length > 0,
				f = a.length > 0,
				g = function(d, g, h, i, j) {
					var k, l, m, n = 0,
						o = "0",
						p = d && [],
						q = [],
						s = D,
						t = d || f && x.find.TAG("*", j),
						u = Q += null == s ? 1 : Math.random() || .1,
						v = t.length;
					for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
						if (f && k) {
							for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];) if (m(k, g || H, h)) {
								i.push(k);
								break
							}
							j && (Q = u)
						}
						e && ((k = !m && k) && n--, d && p.push(k))
					}
					if (n += o, e && o !== n) {
						for (l = 0; m = c[l++];) m(p, q, g, h);
						if (d) {
							if (n > 0) for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
							q = r(q)
						}
						$.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
					}
					return j && (Q = u, D = s), p
				};
			
			return e ? d(g) : g
		}
		var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
			P = a.document,
			Q = 0,
			R = 0,
			S = c(),
			T = c(),
			U = c(),
			V = function(a, b) {
				return a === b && (F = !0), 0
			},
			W = {}.hasOwnProperty,
			X = [],
			Y = X.pop,
			Z = X.push,
			$ = X.push,
			_ = X.slice,
			aa = function(a, b) {
				for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
				return -1
			},
			ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ca = "[\\x20\\t\\r\\n\\f]",
			da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
			fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
			ga = new RegExp(ca + "+", "g"),
			ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
			ia = new RegExp("^" + ca + "*," + ca + "*"),
			ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
			ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
			la = new RegExp(fa),
			ma = new RegExp("^" + da + "$"),
			na = {
				ID: new RegExp("^#(" + da + ")"),
				CLASS: new RegExp("^\\.(" + da + ")"),
				TAG: new RegExp("^(" + da + "|[*])"),
				ATTR: new RegExp("^" + ea),
				PSEUDO: new RegExp("^" + fa),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ba + ")$", "i"),
				needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
			},
			oa = /^(?:input|select|textarea|button)$/i,
			pa = /^h\d$/i,
			qa = /^[^{]+\{\s*\[native \w/,
			ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			sa = /[+~]/,
			ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
			ua = function(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			wa = function(a, b) {
				return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
			},
			xa = function() {
				G()
			},
			ya = o(function(a) {
				return !0 === a.disabled && ("form" in a || "label" in a)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		
		try {
			$.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
		} catch (za) {
			$ = {
				apply: X.length ?
				function(a, b) {
					Z.apply(a, _.call(b))
				} : function(a, b) {
					for (var c = a.length, d = 0; a[c++] = b[d++];);
					a.length = c - 1
				}
			}
		}
		w = b.support = {}, z = b.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return !!b && "HTML" !== b.nodeName
		}, G = b.setDocument = function(a) {
			var b, c, d = a ? a.ownerDocument || a : P;
			return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) {
				return a.className = "i", !a.getAttribute("className")
			}), w.getElementsByTagName = e(function(a) {
				return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
			}), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) {
				return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
			}), w.getById ? (x.filter.ID = function(a) {
				var b = a.replace(ta, ua);
				return function(a) {
					return a.getAttribute("id") === b
				}
			}, x.find.ID = function(a, b) {
				if (void 0 !== b.getElementById && J) {
					var c = b.getElementById(a);
					return c ? [c] : []
				}
			}) : (x.filter.ID = function(a) {
				var b = a.replace(ta, ua);
				return function(a) {
					var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}, x.find.ID = function(a, b) {
				if (void 0 !== b.getElementById && J) {
					var c, d, e, f = b.getElementById(a);
					if (f) {
						if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
						for (e = b.getElementsByName(a), d = 0; f = e[d++];) if ((c = f.getAttributeNode("id")) && c.value === a) return [f]
					}
					return []
				}
			}), x.find.TAG = w.getElementsByTagName ?
			function(a, b) {
				return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
			} : function(a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e++];) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, x.find.CLASS = w.getElementsByClassName &&
			function(a, b) {
				if (void 0 !== b.getElementsByClassName && J) return b.getElementsByClassName(a)
			}, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
				I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
			}), e(function(a) {
				a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var b = H.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
			})), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
				w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
			}), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ?
			function(a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function(a, b) {
				if (b) for (; b = b.parentNode;) if (b === a) return !0;
				return !1
			}, V = b ?
			function(a, b) {
				if (a === b) return F = !0, 0;
				var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
			} : function(a, b) {
				if (a === b) return F = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					h = [a],
					i = [b];
				if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
				if (e === f) return g(a, b);
				for (c = a; c = c.parentNode;) h.unshift(c);
				for (c = b; c = c.parentNode;) i.unshift(c);
				for (; h[d] === i[d];) d++;
				return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
			}, H) : H
		}, b.matches = function(a, c) {
			return b(a, null, null, c)
		}, b.matchesSelector = function(a, c) {
			if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
				var d = M.call(a, c);
				if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (za) {}
			return b(c, H, null, [a]).length > 0
		}, b.contains = function(a, b) {
			return (a.ownerDocument || a) !== H && G(a), N(a, b)
		}, b.attr = function(a, b) {
			(a.ownerDocument || a) !== H && G(a);
			var c = x.attrHandle[b.toLowerCase()],
				d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
			return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}, b.escape = function(a) {
			return (a + "").replace(va, wa)
		}, b.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, b.uniqueSort = function(a) {
			var b, c = [],
				d = 0,
				e = 0;
			if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
				for (; b = a[e++];) b === a[e] && (d = c.push(e));
				for (; d--;) a.splice(c[d], 1)
			}
			return E = null, a
		}, y = b.getText = function(a) {
			var b, c = "",
				d = 0,
				e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
				} else if (3 === e || 4 === e) return a.nodeValue
			} else
			for (; b = a[d++];) c += y(b);
			return c
		}, x = b.selectors = {
			cacheLength: 50,
			createPseudo: d,
			match: na,
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
				ATTR: function(a) {
					return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
				},
				
				PSEUDO: function(a) {
					var b, c = !a[6] && a[2];
					return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			
			filter: {
				TAG: function(a) {
					var b = a.replace(ta, ua).toLowerCase();
					
					return "*" === a ?
					function() {
						return !0
					} : function(a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				
				CLASS: function(a) {
					var b = S[a + " "];
					return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
						return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
					})
				},
				
				ATTR: function(a, c, d) {
					return function(e) {
						var f = b.attr(e, a);
						return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
					}
				},
				
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ?
					function(a) {
						return !!a.parentNode
					} : function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h,
							t = !1;
						if (q) {
							if (f) {
								for (; p;) {
									for (m = b; m = m[p];) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();) if (1 === m.nodeType && ++t && m === b) {
									k[a] = [Q, n, t];
									break
								}
							} else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), !1 === t) for (;
							(m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
							return (t -= e) === d || t % d == 0 && t / d >= 0
						}
					}
				},
				
				PSEUDO: function(a, c) {
					var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
					return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
						for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
					}) : function(a) {
						return f(a, 0, e)
					}) : f
				}
			},
			
			pseudos: {
				not: d(function(a) {
					var b = [],
						c = [],
						e = B(a.replace(ha, "$1"));
					return e[O] ? d(function(a, b, c, d) {
						for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, d, f) {
						return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: d(function(a) {
					return function(c) {
						return b(a, c).length > 0
					}
				}),
				contains: d(function(a) {
					return a = a.replace(ta, ua), function(b) {
						return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
					}
				}),
				lang: d(function(a) {
					return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(), function(b) {
						var c;
						do {
							if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
						} while 
						((b = b.parentNode) && 1 === b.nodeType);
						return !1
					}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				
				root: function(a) {
					return a === I
				},
				
				focus: function(a) {
					return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
				},
				
				enabled: j(!1),
				disabled: j(!0),
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					
					return "input" === b && !! a.checked || "option" === b && !! a.selected
				},
				
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
				},
				
				empty: function(a) {
					for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
					return !0
				},
				
				parent: function(a) {
					return !x.pseudos.empty(a)
				},
				
				header: function(a) {
					return pa.test(a.nodeName)
				},
				
				input: function(a) {
					return oa.test(a.nodeName)
				},
				
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					
					return "input" === b && "button" === a.type || "button" === b
				},
				
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				
				first: k(function() {
					return [0]
				}),
				last: k(function(a, b) {
					return [b - 1]
				}),
				eq: k(function(a, b, c) {
					return [c < 0 ? c + b : c]
				}),
				even: k(function(a, b) {
					for (var c = 0; c < b; c += 2) a.push(c);
					return a
				}),
				odd: k(function(a, b) {
					for (var c = 1; c < b; c += 2) a.push(c);
					return a
				}),
				lt: k(function(a, b, c) {
					for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: k(function(a, b, c) {
					for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, x.pseudos.nth = x.pseudos.eq;
		for (v in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) x.pseudos[v] = h(v);
		for (v in {
			submit: !0,
			reset: !0
		}) x.pseudos[v] = i(v);
		return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) {
			var d, e, f, g, h, i, j, k = T[a + " "];
			if (k) return c ? 0 : k.slice(0);
			for (h = a, i = [], j = x.preFilter; h;) {
				d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
					value: d,
					type: e[0].replace(ha, " ")
				}), h = h.slice(d.length));
				for (g in x.filter)!(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
					value: d,
					type: g,
					matches: e
				}), h = h.slice(d.length));
				if (!d) break
			}
			return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
		}, B = b.compile = function(a, b) {
			var c, d = [],
				e = [],
				f = U[a + " "];
			if (!f) {
				for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
				f = U(a, u(e, d)), f.selector = a
			}
			return f
		}, C = b.select = function(a, b, c, d) {
			var e, f, g, h, i, j = "function" == typeof a && a,
				k = !d && A(a = j.selector || a);
			if (c = c || [], 1 === k.length) {
				if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
					if (!(b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0])) return c;
					j && (b = b.parentNode), a = a.slice(f.shift().value.length)
				}
				for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);) if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
					if (f.splice(e, 1), !(a = d.length && n(f))) return $.apply(c, d), c;
					break
				}
			}
			return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
		}, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !! F, G(), w.sortDetached = e(function(a) {
			return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
		}), e(function(a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || f("type|href|height|width", function(a, b, c) {
			if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), w.attributes && e(function(a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || f("value", function(a, b, c) {
			if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
		}), e(function(a) {
			return null == a.getAttribute("disabled")
		}) || f(ba, function(a, b, c) {
			var d;
			if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), b
	}(a);
	wa.find = ya, wa.expr = ya.selectors, wa.expr[":"] = wa.expr.pseudos, wa.uniqueSort = wa.unique = ya.uniqueSort, wa.text = ya.getText, wa.isXMLDoc = ya.isXML, wa.contains = ya.contains, wa.escapeSelector = ya.escape;
	var za = function(a, b, c) {
		for (var d = [], e = void 0 !== c;
		(a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
			if (e && wa(a).is(c)) break;
			d.push(a)
		}
		return d
	},
		Aa = function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		},
		Ba = wa.expr.match.needsContext,
		Ca = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	wa.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? wa.find.matchesSelector(d, a) ? [d] : [] : wa.find.matches(a, wa.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, wa.fn.extend({
		find: function(a) {
			var b, c, d = this.length,
				e = this;
			if ("string" != typeof a) return this.pushStack(wa(a).filter(function() {
				for (b = 0; b < d; b++) if (wa.contains(e[b], this)) return !0
			}));
			for (c = this.pushStack([]), b = 0; b < d; b++) wa.find(a, e[b], c);
			return d > 1 ? wa.uniqueSort(c) : c
		},
		
		filter: function(a) {
			return this.pushStack(g(this, a || [], !1))
		},
		
		not: function(a) {
			return this.pushStack(g(this, a || [], !0))
		},
		
		is: function(a) {
			return !!g(this, "string" == typeof a && Ba.test(a) ? wa(a) : a || [], !1).length
		}
	});
	
	var Da, Ea = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(wa.fn.init = function(a, b, c) {
		var d, e;
		if (!a) return this;
		if (c = c || Da, "string" == typeof a) {
			if (!(d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Ea.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
			if (d[1]) {
				if (b = b instanceof wa ? b[0] : b, wa.merge(this, wa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ga, !0)), Ca.test(d[1]) && wa.isPlainObject(b)) for (d in b) sa(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
				return this
			}
			return e = ga.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
		}
		return a.nodeType ? (this[0] = a, this.length = 1, this) : sa(a) ? void 0 !== c.ready ? c.ready(a) : a(wa) : wa.makeArray(a, this)
	}).prototype = wa.fn, Da = wa(ga);
	var Fa = /^(?:parents|prev(?:Until|All))/,
		Ga = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	
	wa.fn.extend({
		has: function(a) {
			var b = wa(a, this),
				c = b.length;
			return this.filter(function() {
				for (var a = 0; a < c; a++) if (wa.contains(this, b[a])) return !0
			})
		},
		
		closest: function(a, b) {
			var c, d = 0,
				e = this.length,
				f = [],
				g = "string" != typeof a && wa(a);
			if (!Ba.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && wa.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? wa.uniqueSort(f) : f)
		},
		
		index: function(a) {
			return a ? "string" == typeof a ? la.call(wa(a), this[0]) : la.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		
		add: function(a, b) {
			return this.pushStack(wa.uniqueSort(wa.merge(this.get(), wa(a, b))))
		},
		
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), wa.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		
		parents: function(a) {
			return za(a, "parentNode")
		},
		
		parentsUntil: function(a, b, c) {
			return za(a, "parentNode", c)
		},
		
		next: function(a) {
			return h(a, "nextSibling")
		},
		
		prev: function(a) {
			return h(a, "previousSibling")
		},
		
		nextAll: function(a) {
			return za(a, "nextSibling")
		},
		
		prevAll: function(a) {
			return za(a, "previousSibling")
		},
		
		nextUntil: function(a, b, c) {
			return za(a, "nextSibling", c)
		},
		
		prevUntil: function(a, b, c) {
			return za(a, "previousSibling", c)
		},
		
		siblings: function(a) {
			return Aa((a.parentNode || {}).firstChild, a)
		},
		
		children: function(a) {
			return Aa(a.firstChild)
		},
		
		contents: function(a) {
			return f(a, "iframe") ? a.contentDocument : (f(a, "template") && (a = a.content || a), wa.merge([], a.childNodes))
		}
	}, function(a, b) {
		wa.fn[a] = function(c, d) {
			var e = wa.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = wa.filter(d, e)), this.length > 1 && (Ga[a] || wa.uniqueSort(e), Fa.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	
	var Ha = /[^\x20\t\r\n\f]+/g;
	wa.Callbacks = function(a) {
		a = "string" == typeof a ? i(a) : wa.extend({}, a);
		var b, c, e, f, g = [],
			h = [],
			j = -1,
			k = function() {
				for (f = f || a.once, e = b = !0; h.length; j = -1) for (c = h.shift(); ++j < g.length;)!1 === g[j].apply(c[0], c[1]) && a.stopOnFalse && (j = g.length, c = !1);
				a.memory || (c = !1), b = !1, f && (g = c ? [] : "")
			},
			l = {
				add: function() {
					return g && (c && !b && (j = g.length - 1, h.push(c)), function b(c) {
						wa.each(c, function(c, e) {
							sa(e) ? a.unique && l.has(e) || g.push(e) : e && e.length && "string" !== d(e) && b(e)
						})
					}(arguments), c && !b && k()), this
				},
				
				remove: function() {
					return wa.each(arguments, function(a, b) {
						for (var c;
						(c = wa.inArray(b, g, c)) > -1;) g.splice(c, 1), c <= j && j--
					}), this
				},
				
				has: function(a) {
					return a ? wa.inArray(a, g) > -1 : g.length > 0
				},
				
				empty: function() {
					return g && (g = []), this
				},
				
				disable: function() {
					return f = h = [], g = c = "", this
				},
				
				disabled: function() {
					return !g
				},
				
				lock: function() {
					return f = h = [], c || b || (g = c = ""), this
				},
				
				locked: function() {
					return !!f
				},
				
				fireWith: function(a, c) {
					return f || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || k()), this
				},
				
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				
				fired: function() {
					return !!e
				}
			};
		
		return l
	}, wa.extend({
		Deferred: function(b) {
			var c = [
				["notify", "progress", wa.Callbacks("memory"), wa.Callbacks("memory"), 2],
				["resolve", "done", wa.Callbacks("once memory"), wa.Callbacks("once memory"), 0, "resolved"],
				["reject", "fail", wa.Callbacks("once memory"), wa.Callbacks("once memory"), 1, "rejected"]
			],
				d = "pending",
				e = {
					state: function() {
						return d
					},
					
					always: function() {
						return f.done(arguments).fail(arguments), this
					},
					
					catch: function(a) {
						return e.then(null, a)
					},
					
					pipe: function() {
						var a = arguments;
						return wa.Deferred(function(b) {
							wa.each(c, function(c, d) {
								var e = sa(a[d[4]]) && a[d[4]];
								f[d[1]](function() {
									var a = e && e.apply(this, arguments);
									a && sa(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					
					then: function(b, d, e) {
						function f(b, c, d, e) {
							return function() {
								var h = this,
									i = arguments,
									l = function() {
										var a, l;
										if (!(b < g)) {
											if ((a = d.apply(h, i)) === c.promise()) throw new TypeError("Thenable self-resolution");
											l = a && ("object" == typeof a || "function" == typeof a) && a.then, sa(l) ? e ? l.call(a, f(g, c, j, e), f(g, c, k, e)) : (g++, l.call(a, f(g, c, j, e), f(g, c, k, e), f(g, c, j, c.notifyWith))) : (d !== j && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
										}
									},
									m = e ? l : function() {
										try {
											l()
										} catch (a) {
											wa.Deferred.exceptionHook && wa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== k && (h = void 0, i = [a]), c.rejectWith(h, i))
										}
									};
								
								b ? m() : (wa.Deferred.getStackHook && (m.stackTrace = wa.Deferred.getStackHook()), a.setTimeout(m))
							}
						}
						var g = 0;
						return wa.Deferred(function(a) {
							c[0][3].add(f(0, a, sa(e) ? e : j, a.notifyWith)), c[1][3].add(f(0, a, sa(b) ? b : j)), c[2][3].add(f(0, a, sa(d) ? d : k))
						}).promise()
					},
					
					promise: function(a) {
						return null != a ? wa.extend(a, e) : e
					}
				},
				f = {};
			
			return wa.each(c, function(a, b) {
				var g = b[2],
					h = b[5];
				e[b[1]] = g.add, h && g.add(function() {
					d = h
				}, c[3 - a][2].disable, c[3 - a][3].disable, c[0][2].lock, c[0][3].lock), g.add(b[3].fire), f[b[0]] = function() {
					return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
				}, f[b[0] + "With"] = g.fireWith
			}), e.promise(f), b && b.call(f, f), f
		},
		
		when: function(a) {
			var b = arguments.length,
				c = b,
				d = Array(c),
				e = ia.call(arguments),
				f = wa.Deferred(),
				g = function(a) {
					return function(c) {
						d[a] = this, e[a] = arguments.length > 1 ? ia.call(arguments) : c, --b || f.resolveWith(d, e)
					}
				};
			
			if (b <= 1 && (l(a, f.done(g(c)).resolve, f.reject, !b), "pending" === f.state() || sa(e[c] && e[c].then))) return f.then();
			
			for (; c--;) l(e[c], g(c), f.reject);
			return f.promise()
		}
	});
	
	var Ia = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	wa.Deferred.exceptionHook = function(b, c) {
		a.console && a.console.warn && b && Ia.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
	}, wa.readyException = function(b) {
		a.setTimeout(function() {
			throw b
		})
	};
	
	var Ja = wa.Deferred();
	
	wa.fn.ready = function(a) {
		return Ja.then(a).
		catch (function(a) {
			wa.readyException(a)
		}), this
	}, wa.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(a) {
			(!0 === a ? --wa.readyWait : wa.isReady) || (wa.isReady = !0, !0 !== a && --wa.readyWait > 0 || Ja.resolveWith(ga, [wa]))
		}
	}), wa.ready.then = Ja.then, "complete" === ga.readyState || "loading" !== ga.readyState && !ga.documentElement.doScroll ? a.setTimeout(wa.ready) : (ga.addEventListener("DOMContentLoaded", m), a.addEventListener("load", m));
	var Ka = function(a, b, c, e, f, g, h) {
		var i = 0,
			j = a.length,
			k = null == c;
		if ("object" === d(c)) {
			f = !0;
			for (i in c) Ka(a, b, i, c[i], !0, g, h)
		} else if (void 0 !== e && (f = !0, sa(e) || (h = !0), k && (h ? (b.call(a, e), b = null) : (k = b, b = function(a, b, c) {
			return k.call(wa(a), c)
		})), b)) for (; i < j; i++) b(a[i], c, h ? e : e.call(a[i], i, b(a[i], c)));
		return f ? a : k ? b.call(a) : j ? b(a[0], c) : g
	},
		La = /^-ms-/,
		Ma = /-([a-z])/g,
		Na = function(a) {
			return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
		};
	
	p.uid = 1, p.prototype = {
		cache: function(a) {
			var b = a[this.expando];
			return b || (b = {}, Na(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
				value: b,
				configurable: !0
			}))), b
		},
		
		set: function(a, b, c) {
			var d, e = this.cache(a);
			if ("string" == typeof b) e[o(b)] = c;
			else
			for (d in b) e[o(d)] = b[d];
			return e
		},
		
		get: function(a, b) {
			return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][o(b)]
		},
		
		access: function(a, b, c) {
			return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		
		remove: function(a, b) {
			var c, d = a[this.expando];
			if (void 0 !== d) {
				if (void 0 !== b) {
					Array.isArray(b) ? b = b.map(o) : (b = o(b), b = b in d ? [b] : b.match(Ha) || []), c = b.length;
					for (; c--;) delete d[b[c]]
				}(void 0 === b || wa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
			}
		},
		
		hasData: function(a) {
			var b = a[this.expando];
			return void 0 !== b && !wa.isEmptyObject(b)
		}
	};
	
	var Oa = new p,
		Pa = new p,
		Qa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ra = /[A-Z]/g;
	wa.extend({
		hasData: function(a) {
			return Pa.hasData(a) || Oa.hasData(a)
		},
		
		data: function(a, b, c) {
			return Pa.access(a, b, c)
		},
		
		removeData: function(a, b) {
			Pa.remove(a, b)
		},
		
		_data: function(a, b, c) {
			return Oa.access(a, b, c)
		},
		
		_removeData: function(a, b) {
			Oa.remove(a, b)
		}
	}), wa.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = Pa.get(f), 1 === f.nodeType && !Oa.get(f, "hasDataAttrs"))) {
					for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = o(d.slice(5)), r(f, d, e[d])));
					Oa.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				Pa.set(this, a)
			}) : Ka(this, function(b) {
				var c;
				if (f && void 0 === b) {
					if (void 0 !== (c = Pa.get(f, a))) return c;
					if (void 0 !== (c = r(f, a))) return c
				} else this.each(function() {
					Pa.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		
		removeData: function(a) {
			return this.each(function() {
				Pa.remove(this, a)
			})
		}
	}), wa.extend({
		queue: function(a, b, c) {
			var d;
			if (a) return b = (b || "fx") + "queue", d = Oa.get(a, b), c && (!d || Array.isArray(c) ? d = Oa.access(a, b, wa.makeArray(c)) : d.push(c)), d || []
		},
		
		dequeue: function(a, b) {
			b = b || "fx";
			var c = wa.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = wa._queueHooks(a, b),
				g = function() {
					wa.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return Oa.get(a, c) || Oa.access(a, c, {
				empty: wa.Callbacks("once memory").add(function() {
					Oa.remove(a, [b + "queue", c])
				})
			})
		}
	}), wa.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? wa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = wa.queue(this, a, b);
				wa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && wa.dequeue(this, a)
			})
		},
		
		dequeue: function(a) {
			return this.each(function() {
				wa.dequeue(this, a)
			})
		},
		
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		
		promise: function(a, b) {
			var c, d = 1,
				e = wa.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = Oa.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	
	var Sa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ta = new RegExp("^(?:([+-])=|)(" + Sa + ")([a-z%]*)$", "i"),
		Ua = ["Top", "Right", "Bottom", "Left"],
		Va = function(a, b) {
			return a = b || a, "none" === a.style.display || "" === a.style.display && wa.contains(a.ownerDocument, a) && "none" === wa.css(a, "display")
		},
		Wa = function(a, b, c, d) {
			var e, f, g = {};
			
			for (f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		},
		Xa = {};
	
	wa.fn.extend({
		show: function() {
			return u(this, !0)
		},
		
		hide: function() {
			return u(this)
		},
		
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				Va(this) ? wa(this).show() : wa(this).hide()
			})
		}
	});
	
	var Ya = /^(?:checkbox|radio)$/i,
		Za = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		$a = /^$|^module$|\/(?:java|ecma)script/i,
		_a = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	
	_a.optgroup = _a.option, _a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead, _a.th = _a.td;
	var ab = /<|&#?\w+;/;
	!
	function() {
		var a = ga.createDocumentFragment(),
			b = a.appendChild(ga.createElement("div")),
			c = ga.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ra.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ra.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue
	}();
	
	var bb = ga.documentElement,
		cb = /^key/,
		db = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		eb = /^([^.]*)(?:\.(.+)|)/;
	wa.event = {
		global: {},
		
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = Oa.get(a);
			if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), e && wa.find.matchesSelector(bb, e), c.guid || (c.guid = wa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
				return void 0 !== wa && wa.event.triggered !== b.type ? wa.event.dispatch.apply(a, arguments) : void 0
			}), b = (b || "").match(Ha) || [""], j = b.length; j--;) h = eb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = wa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = wa.event.special[n] || {}, k = wa.extend({
				type: n,
				origType: p,
				data: d,
				handler: c,
				guid: c.guid,
				selector: e,
				needsContext: e && wa.expr.match.needsContext.test(e),
				namespace: o.join(".")
			}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), wa.event.global[n] = !0)
		},
		
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = Oa.hasData(a) && Oa.get(a);
			if (q && (i = q.events)) {
				for (b = (b || "").match(Ha) || [""], j = b.length; j--;) if (h = eb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
					for (l = wa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
					g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || wa.removeEvent(a, n, q.handle), delete i[n])
				} else
				for (n in i) wa.event.remove(a, n + b[j], c, d, !0);
				wa.isEmptyObject(i) && Oa.remove(a, "handle events")
			}
		},
		
		dispatch: function(a) {
			var b, c, d, e, f, g, h = wa.event.fix(a),
				i = new Array(arguments.length),
				j = (Oa.get(this, "events") || {})[h.type] || [],
				k = wa.event.special[h.type] || {};
			
			for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
			if (h.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, h)) {
				for (g = wa.event.handlers.call(this, h, j), b = 0;
				(e = g[b++]) && !h.isPropagationStopped();) for (h.currentTarget = e.elem, c = 0;
				(f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, void 0 !== (d = ((wa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i)) && !1 === (h.result = d) && (h.preventDefault(), h.stopPropagation()));
				return k.postDispatch && k.postDispatch.call(this, h), h.result
			}
		},
		
		handlers: function(a, b) {
			var c, d, e, f, g, h = [],
				i = b.delegateCount,
				j = a.target;
			if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
				for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? wa(e, this).index(j) > -1 : wa.find(e, this, null, [j]).length), g[e] && f.push(d);
				f.length && h.push({
					elem: j,
					handlers: f
				})
			}
			return j = this, i < b.length && h.push({
				elem: j,
				handlers: b.slice(i)
			}), h
		},
		
		addProp: function(a, b) {
			Object.defineProperty(wa.Event.prototype, a, {
				enumerable: !0,
				configurable: !0,
				get: sa(b) ?
				function() {
					if (this.originalEvent) return b(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[a]
				},
				
				set: function(b) {
					Object.defineProperty(this, a, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: b
					})
				}
			})
		},
		
		fix: function(a) {
			return a[wa.expando] ? a : new wa.Event(a)
		},
		
		special: {
			load: {
				noBubble: !0
			},
			
			focus: {
				trigger: function() {
					if (this !== A() && this.focus) return this.focus(), !1
				},
				
				delegateType: "focusin"
			},
			
			blur: {
				trigger: function() {
					if (this === A() && this.blur) return this.blur(), !1
				},
				
				delegateType: "focusout"
			},
			
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
				},
				
				_default: function(a) {
					return f(a.target, "a")
				}
			},
			
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		}
	}, wa.removeEvent = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	}, wa.Event = function(a, b) {
		if (!(this instanceof wa.Event)) return new wa.Event(a, b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? y : z, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && wa.extend(this, b), this.timeStamp = a && a.timeStamp || Date.now(), this[wa.expando] = !0
	}, wa.Event.prototype = {
		constructor: wa.Event,
		isDefaultPrevented: z,
		isPropagationStopped: z,
		isImmediatePropagationStopped: z,
		isSimulated: !1,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = y, a && !this.isSimulated && a.preventDefault()
		},
		
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = y, a && !this.isSimulated && a.stopPropagation()
		},
		
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = y, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, wa.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(a) {
			var b = a.button;
			return null == a.which && cb.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && db.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
		}
	}, wa.event.addProp), wa.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		wa.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return e && (e === d || wa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), wa.fn.extend({
		on: function(a, b, c, d) {
			return B(this, a, b, c, d)
		},
		
		one: function(a, b, c, d) {
			return B(this, a, b, c, d, 1)
		},
		
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, wa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = z), this.each(function() {
				wa.event.remove(this, a, c, b)
			})
		}
	});
	
	var fb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		gb = /<script|<style|<link/i,
		hb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ib = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	wa.extend({
		htmlPrefilter: function(a) {
			return a.replace(fb, "<$1></$2>")
		},
		
		clone: function(a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = wa.contains(a.ownerDocument, a);
			if (!(ra.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || wa.isXMLDoc(a))) for (g = v(h), f = v(a), d = 0, e = f.length; d < e; d++) G(f[d], g[d]);
			if (b) if (c) for (f = f || v(a), g = g || v(h), d = 0, e = f.length; d < e; d++) F(f[d], g[d]);
			else F(a, h);
			return g = v(h, "script"), g.length > 0 && w(g, !i && v(a, "script")), h
		},
		
		cleanData: function(a) {
			for (var b, c, d, e = wa.event.special, f = 0; void 0 !== (c = a[f]); f++) if (Na(c)) {
				if (b = c[Oa.expando]) {
					if (b.events) for (d in b.events) e[d] ? wa.event.remove(c, d) : wa.removeEvent(c, d, b.handle);
					c[Oa.expando] = void 0
				}
				c[Pa.expando] && (c[Pa.expando] = void 0)
			}
		}
	}), wa.fn.extend({
		detach: function(a) {
			return I(this, a, !0)
		},
		
		remove: function(a) {
			return I(this, a)
		},
		
		text: function(a) {
			return Ka(this, function(a) {
				return void 0 === a ? wa.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		
		append: function() {
			return H(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					C(this, a).appendChild(a)
				}
			})
		},
		
		prepend: function() {
			return H(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = C(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		
		before: function() {
			return H(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		
		after: function() {
			return H(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (wa.cleanData(v(a, !1)), a.textContent = "");
			return this
		},
		
		clone: function(a, b) {
			return a = null != a && a, b = null == b ? a : b, this.map(function() {
				return wa.clone(this, a, b)
			})
		},
		
		html: function(a) {
			return Ka(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !gb.test(a) && !_a[(Za.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = wa.htmlPrefilter(a);
					try {
						for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (wa.cleanData(v(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		
		replaceWith: function() {
			var a = [];
			return H(this, arguments, function(b) {
				var c = this.parentNode;
				wa.inArray(this, a) < 0 && (wa.cleanData(v(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), wa.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		wa.fn[a] = function(a) {
			for (var c, d = [], e = wa(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), wa(e[g])[b](c), ka.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	
	var jb = new RegExp("^(" + Sa + ")(?!px)[a-z%]+$", "i"),
		kb = function(b) {
			var c = b.ownerDocument.defaultView;
			return c && c.opener || (c = a), c.getComputedStyle(b)
		},
		lb = new RegExp(Ua.join("|"), "i");
	!
	function() {
		function b() {
			if (j) {
				i.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", j.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bb.appendChild(i).appendChild(j);
				var b = a.getComputedStyle(j);
				d = "1%" !== b.top, h = 12 === c(b.marginLeft), j.style.right = "60%", g = 36 === c(b.right), e = 36 === c(b.width), j.style.position = "absolute", f = 36 === j.offsetWidth || "absolute", bb.removeChild(i), j = null
			}
		}
		function c(a) {
			return Math.round(parseFloat(a))
		}
		var d, e, f, g, h, i = ga.createElement("div"),
			j = ga.createElement("div");
		j.style && (j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", ra.clearCloneStyle = "content-box" === j.style.backgroundClip, wa.extend(ra, {
			boxSizingReliable: function() {
				return b(), e
			},
			
			pixelBoxStyles: function() {
				return b(), g
			},
			
			pixelPosition: function() {
				return b(), d
			},
			
			reliableMarginLeft: function() {
				return b(), h
			},
			
			scrollboxSize: function() {
				return b(), f
			}
		}))
	}();
	
	var mb = /^(none|table(?!-c[ea]).+)/,
		nb = /^--/,
		ob = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		pb = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		qb = ["Webkit", "Moz", "ms"],
		rb = ga.createElement("div").style;
	wa.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = J(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		
		cssNumber: {
			animationIterationCount: !0,
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
		
		cssProps: {},
		
		style: function(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = o(b),
					i = nb.test(b),
					j = a.style;
				if (i || (b = M(h)), g = wa.cssHooks[b] || wa.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b];
				f = typeof c, "string" === f && (e = Ta.exec(c)) && e[1] && (c = s(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (wa.cssNumber[h] ? "" : "px")), ra.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c))
			}
		},
		
		css: function(a, b, c, d) {
			var e, f, g, h = o(b);
			return nb.test(b) || (b = M(h)), g = wa.cssHooks[b] || wa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = J(a, b, d)), "normal" === e && b in pb && (e = pb[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
		}
	}), wa.each(["height", "width"], function(a, b) {
		wa.cssHooks[b] = {
			get: function(a, c, d) {
				if (c) return !mb.test(wa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? P(a, b, d) : Wa(a, ob, function() {
					return P(a, b, d)
				})
			},
			
			set: function(a, c, d) {
				var e, f = kb(a),
					g = "border-box" === wa.css(a, "boxSizing", !1, f),
					h = d && O(a, b, d, g, f);
				return g && ra.scrollboxSize() === f.position && (h -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - O(a, b, "border", !1, f) - .5)), h && (e = Ta.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = wa.css(a, b)), N(a, c, h)
			}
		}
	}), wa.cssHooks.marginLeft = K(ra.reliableMarginLeft, function(a, b) {
		if (b) return (parseFloat(J(a, "marginLeft")) || a.getBoundingClientRect().left - Wa(a, {
			marginLeft: 0
		}, function() {
			return a.getBoundingClientRect().left
		})) + "px"
	}), wa.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		wa.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Ua[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, "margin" !== a && (wa.cssHooks[a + b].set = N)
	}), wa.fn.extend({
		css: function(a, b) {
			return Ka(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if (Array.isArray(b)) {
					for (d = kb(a), e = b.length; g < e; g++) f[b[g]] = wa.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? wa.style(a, b, c) : wa.css(a, b)
			}, a, b, arguments.length > 1)
		}
	}), wa.Tween = Q, Q.prototype = {
		constructor: Q,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || wa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (wa.cssNumber[c] ? "" : "px")
		},
		
		cur: function() {
			var a = Q.propHooks[this.prop];
			return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
		},
		
		run: function(a) {
			var b, c = Q.propHooks[this.prop];
			return this.options.duration ? this.pos = b = wa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
		}
	}, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = wa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			
			set: function(a) {
				wa.fx.step[a.prop] ? wa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[wa.cssProps[a.prop]] && !wa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : wa.style(a.elem, a.prop, a.now + a.unit)
			}
		}
	}, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, wa.easing = {
		linear: function(a) {
			return a
		},
		
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		},
		
		_default: "swing"
	}, wa.fx = Q.prototype.init, wa.fx.step = {};
	
	var sb, tb, ub = /^(?:toggle|show|hide)$/,
		vb = /queueHooks$/;
	wa.Animation = wa.extend(X, {
		tweeners: {
			"*": [function(a, b) {
				var c = this.createTween(a, b);
				return s(c.elem, a, Ta.exec(b), c), c
			}]
		},
		
		tweener: function(a, b) {
			sa(a) ? (b = a, a = ["*"]) : a = a.match(Ha);
			for (var c, d = 0, e = a.length; d < e; d++) c = a[d], X.tweeners[c] = X.tweeners[c] || [], X.tweeners[c].unshift(b)
		},
		
		prefilters: [V],
		prefilter: function(a, b) {
			b ? X.prefilters.unshift(a) : X.prefilters.push(a)
		}
	}), wa.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? wa.extend({}, a) : {
			complete: c || !c && b || sa(a) && a,
			duration: a,
			easing: c && b || b && !sa(b) && b
		};
		
		return wa.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in wa.fx.speeds ? d.duration = wa.fx.speeds[d.duration] : d.duration = wa.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
			sa(d.old) && d.old.call(this), d.queue && wa.dequeue(this, d.queue)
		}, d
	}, wa.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(Va).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		
		animate: function(a, b, c, d) {
			var e = wa.isEmptyObject(a),
				f = wa.speed(b, c, d),
				g = function() {
					var b = X(this, wa.extend({}, a), f);
					(e || Oa.get(this, "finish")) && b.stop(!0)
				};
			
			return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
		},
		
		stop: function(a, b, c) {
			var d = function(a) {
				var b = a.stop;
				delete a.stop, b(c)
			};
			
			return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					e = null != a && a + "queueHooks",
					f = wa.timers,
					g = Oa.get(this);
				if (e) g[e] && g[e].stop && d(g[e]);
				else
				for (e in g) g[e] && g[e].stop && vb.test(e) && d(g[e]);
				for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				!b && c || wa.dequeue(this, a)
			})
		},
		
		finish: function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
				var b, c = Oa.get(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = wa.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, wa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), wa.each(["toggle", "show", "hide"], function(a, b) {
		var c = wa.fn[b];
		wa.fn[b] = function(a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(T(b, !0), a, d, e)
		}
	}), wa.each({
		slideDown: T("show"),
		slideUp: T("hide"),
		slideToggle: T("toggle"),
		fadeIn: {
			opacity: "show"
		},
		
		fadeOut: {
			opacity: "hide"
		},
		
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		wa.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), wa.timers = [], wa.fx.tick = function() {
		var a, b = 0,
			c = wa.timers;
		for (sb = Date.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
		c.length || wa.fx.stop(), sb = void 0
	}, wa.fx.timer = function(a) {
		wa.timers.push(a), wa.fx.start()
	}, wa.fx.interval = 13, wa.fx.start = function() {
		tb || (tb = !0, R())
	}, wa.fx.stop = function() {
		tb = null
	}, wa.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, wa.fn.delay = function(b, c) {
		return b = wa.fx ? wa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
			var e = a.setTimeout(c, b);
			d.stop = function() {
				a.clearTimeout(e)
			}
		})
	}, function() {
		var a = ga.createElement("input"),
			b = ga.createElement("select"),
			c = b.appendChild(ga.createElement("option"));
		a.type = "checkbox", ra.checkOn = "" !== a.value, ra.optSelected = c.selected, a = ga.createElement("input"), a.value = "t", a.type = "radio", ra.radioValue = "t" === a.value
	}();
	
	var wb, xb = wa.expr.attrHandle;
	wa.fn.extend({
		attr: function(a, b) {
			return Ka(this, wa.attr, a, b, arguments.length > 1)
		},
		
		removeAttr: function(a) {
			return this.each(function() {
				wa.removeAttr(this, a)
			})
		}
	}), wa.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? wa.prop(a, b, c) : (1 === f && wa.isXMLDoc(a) || (e = wa.attrHooks[b.toLowerCase()] || (wa.expr.match.bool.test(b) ? wb : void 0)), void 0 !== c ? null === c ? void wa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = wa.find.attr(a, b), null == d ? void 0 : d))
		},
		
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!ra.radioValue && "radio" === b && f(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		
		removeAttr: function(a, b) {
			var c, d = 0,
				e = b && b.match(Ha);
			if (e && 1 === a.nodeType) for (; c = e[d++];) a.removeAttribute(c)
		}
	}), wb = {
		set: function(a, b, c) {
			return !1 === b ? wa.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, wa.each(wa.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = xb[b] || wa.find.attr;
		xb[b] = function(a, b, d) {
			var e, f, g = b.toLowerCase();
			
			return d || (f = xb[g], xb[g] = e, e = null != c(a, b, d) ? g : null, xb[g] = f), e
		}
	});
	
	var yb = /^(?:input|select|textarea|button)$/i,
		zb = /^(?:a|area)$/i;
	wa.fn.extend({
		prop: function(a, b) {
			return Ka(this, wa.prop, a, b, arguments.length > 1)
		},
		
		removeProp: function(a) {
			return this.each(function() {
				delete this[wa.propFix[a] || a]
			})
		}
	}), wa.extend({
		prop: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return 1 === f && wa.isXMLDoc(a) || (b = wa.propFix[b] || b, e = wa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = wa.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), ra.optSelected || (wa.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		},
		
		set: function(a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	}), wa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		wa.propFix[this.toLowerCase()] = this
	}), wa.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (sa(a)) return this.each(function(b) {
				wa(this).addClass(a.call(this, b, Z(this)))
			});
			
			if (b = $(a), b.length) for (; c = this[i++];) if (e = Z(c), d = 1 === c.nodeType && " " + Y(e) + " ") {
				for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
				h = Y(d), e !== h && c.setAttribute("class", h)
			}
			return this
		},
		
		removeClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (sa(a)) return this.each(function(b) {
				wa(this).removeClass(a.call(this, b, Z(this)))
			});
			
			if (!arguments.length) return this.attr("class", "");
			if (b = $(a), b.length) for (; c = this[i++];) if (e = Z(c), d = 1 === c.nodeType && " " + Y(e) + " ") {
				for (g = 0; f = b[g++];) for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
				h = Y(d), e !== h && c.setAttribute("class", h)
			}
			return this
		},
		
		toggleClass: function(a, b) {
			var c = typeof a,
				d = "string" === c || Array.isArray(a);
			return "boolean" == typeof b && d ? b ? this.addClass(a) : this.removeClass(a) : sa(a) ? this.each(function(c) {
				wa(this).toggleClass(a.call(this, c, Z(this), b), b)
			}) : this.each(function() {
				var b, e, f, g;
				if (d) for (e = 0, f = wa(this), g = $(a); b = g[e++];) f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
				else void 0 !== a && "boolean" !== c || (b = Z(this), b && Oa.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Oa.get(this, "__className__") || ""))
			})
		},
		
		hasClass: function(a) {
			var b, c, d = 0;
			for (b = " " + a + " "; c = this[d++];) if (1 === c.nodeType && (" " + Y(Z(c)) + " ").indexOf(b) > -1) return !0;
			return !1
		}
	});
	
	var Ab = /\r/g;
	wa.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = sa(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, wa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = wa.map(e, function(a) {
						return null == a ? "" : a + ""
					})), (b = wa.valHooks[this.type] || wa.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				
				if (e) return (b = wa.valHooks[e.type] || wa.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Ab, "") : null == c ? "" : c)
			}
		}
	}), wa.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = wa.find.attr(a, "value");
					return null != b ? b : Y(wa.text(a))
				}
			},
			
			select: {
				get: function(a) {
					var b, c, d, e = a.options,
						g = a.selectedIndex,
						h = "select-one" === a.type,
						i = h ? null : [],
						j = h ? g + 1 : e.length;
					for (d = g < 0 ? j : h ? g : 0; d < j; d++) if (c = e[d], (c.selected || d === g) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
						if (b = wa(c).val(), h) return b;
						i.push(b)
					}
					return i
				},
				
				set: function(a, b) {
					for (var c, d, e = a.options, f = wa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = wa.inArray(wa.valHooks.option.get(d), f) > -1) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), wa.each(["radio", "checkbox"], function() {
		wa.valHooks[this] = {
			set: function(a, b) {
				if (Array.isArray(b)) return a.checked = wa.inArray(wa(a).val(), b) > -1
			}
		}, ra.checkOn || (wa.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), ra.focusin = "onfocusin" in a;
	var Bb = /^(?:focusinfocus|focusoutblur)$/,
		Cb = function(a) {
			a.stopPropagation()
		};
	
	wa.extend(wa.event, {
		trigger: function(b, c, d, e) {
			var f, g, h, i, j, k, l, m, n = [d || ga],
				o = oa.call(b, "type") ? b.type : b,
				p = oa.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = m = h = d = d || ga, 3 !== d.nodeType && 8 !== d.nodeType && !Bb.test(o + wa.event.triggered) && (o.indexOf(".") > -1 && (p = o.split("."), o = p.shift(), p.sort()), j = o.indexOf(":") < 0 && "on" + o, b = b[wa.expando] ? b : new wa.Event(o, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = p.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : wa.makeArray(c, [b]), l = wa.event.special[o] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
				if (!e && !l.noBubble && !ta(d)) {
					for (i = l.delegateType || o, Bb.test(i + o) || (g = g.parentNode); g; g = g.parentNode) n.push(g), h = g;
					h === (d.ownerDocument || ga) && n.push(h.defaultView || h.parentWindow || a)
				}
				for (f = 0;
				(g = n[f++]) && !b.isPropagationStopped();) m = g, b.type = f > 1 ? i : l.bindType || o, k = (Oa.get(g, "events") || {})[b.type] && Oa.get(g, "handle"), k && k.apply(g, c), (k = j && g[j]) && k.apply && Na(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
				return b.type = o, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(n.pop(), c) || !Na(d) || j && sa(d[o]) && !ta(d) && (h = d[j], h && (d[j] = null), wa.event.triggered = o, b.isPropagationStopped() && m.addEventListener(o, Cb), d[o](), b.isPropagationStopped() && m.removeEventListener(o, Cb), wa.event.triggered = void 0, h && (d[j] = h)), b.result
			}
		},
		
		simulate: function(a, b, c) {
			var d = wa.extend(new wa.Event, c, {
				type: a,
				isSimulated: !0
			});
			
			wa.event.trigger(d, null, b)
		}
	}), wa.fn.extend({
		trigger: function(a, b) {
			return this.each(function() {
				wa.event.trigger(a, b, this)
			})
		},
		
		triggerHandler: function(a, b) {
			var c = this[0];
			if (c) return wa.event.trigger(a, b, c, !0)
		}
	}), ra.focusin || wa.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
			wa.event.simulate(b, a.target, wa.event.fix(a))
		};
		
		wa.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = Oa.access(d, b);
				e || d.addEventListener(a, c, !0), Oa.access(d, b, (e || 0) + 1)
			},
			
			teardown: function() {
				var d = this.ownerDocument || this,
					e = Oa.access(d, b) - 1;
				e ? Oa.access(d, b, e) : (d.removeEventListener(a, c, !0), Oa.remove(d, b))
			}
		}
	});
	
	var Db = a.location,
		Eb = Date.now(),
		Fb = /\?/;
	wa.parseXML = function(b) {
		var c;
		if (!b || "string" != typeof b) return null;
		try {
			c = (new a.DOMParser).parseFromString(b, "text/xml")
		} catch (d) {
			c = void 0
		}
		return c && !c.getElementsByTagName("parsererror").length || wa.error("Invalid XML: " + b), c
	};
	
	var Gb = /\[\]$/,
		Hb = /\r?\n/g,
		Ib = /^(?:submit|button|image|reset|file)$/i,
		Jb = /^(?:input|select|textarea|keygen)/i;
	wa.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				var c = sa(b) ? b() : b;
				d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
			};
		
		if (Array.isArray(a) || a.jquery && !wa.isPlainObject(a)) wa.each(a, function() {
			e(this.name, this.value)
		});
		else
		for (c in a) _(c, a[c], b, e);
		return d.join("&")
	}, wa.fn.extend({
		serialize: function() {
			return wa.param(this.serializeArray())
		},
		
		serializeArray: function() {
			return this.map(function() {
				var a = wa.prop(this, "elements");
				return a ? wa.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !wa(this).is(":disabled") && Jb.test(this.nodeName) && !Ib.test(a) && (this.checked || !Ya.test(a))
			}).map(function(a, b) {
				var c = wa(this).val();
				
				return null == c ? null : Array.isArray(c) ? wa.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(Hb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Hb, "\r\n")
				}
			}).get()
		}
	});
	
	var Kb = /%20/g,
		Lb = /#.*$/,
		Mb = /([?&])_=[^&]*/,
		Nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Pb = /^(?:GET|HEAD)$/,
		Qb = /^\/\//,
		Rb = {},
		Sb = {},
		Tb = "*/".concat("*"),
		Ub = ga.createElement("a");
	Ub.href = Db.href, wa.extend({
		active: 0,
		lastModified: {},
		
		etag: {},
		
		ajaxSettings: {
			url: Db.href,
			type: "GET",
			isLocal: Ob.test(Db.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Tb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": wa.parseXML
			},
			
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		
		ajaxSetup: function(a, b) {
			return b ? ca(ca(a, wa.ajaxSettings), b) : ca(wa.ajaxSettings, a)
		},
		
		ajaxPrefilter: aa(Rb),
		ajaxTransport: aa(Sb),
		ajax: function(b, c) {
			function d(b, c, d, h) {
				var j, m, n, u, v, w = c;
				k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = da(o, x, d)), u = ea(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (wa.lastModified[f] = v), (v = x.getResponseHeader("etag")) && (wa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --wa.active || wa.event.trigger("ajaxStop")))
			}
			"object" == typeof b && (c = b, b = void 0), c = c || {};
			
			var e, f, g, h, i, j, k, l, m, n, o = wa.ajaxSetup({}, c),
				p = o.context || o,
				q = o.context && (p.nodeType || p.jquery) ? wa(p) : wa.event,
				r = wa.Deferred(),
				s = wa.Callbacks("once memory"),
				t = o.statusCode || {},
				u = {},
				v = {},
				w = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (k) {
							if (!h) for (h = {}; b = Nb.exec(g);) h[b[1].toLowerCase()] = b[2];
							b = h[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					
					getAllResponseHeaders: function() {
						return k ? g : null
					},
					
					setRequestHeader: function(a, b) {
						return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
					},
					
					overrideMimeType: function(a) {
						return null == k && (o.mimeType = a), this
					},
					
					statusCode: function(a) {
						var b;
						if (a) if (k) x.always(a[x.status]);
						else
						for (b in a) t[b] = [t[b], a[b]];
						return this
					},
					
					abort: function(a) {
						var b = a || w;
						return e && e.abort(b), d(0, b), this
					}
				};
			
			if (r.promise(x), o.url = ((b || o.url || Db.href) + "").replace(Qb, Db.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ha) || [""], null == o.crossDomain) {
				j = ga.createElement("a");
				try {
					j.href = o.url, j.href = j.href, o.crossDomain = Ub.protocol + "//" + Ub.host != j.protocol + "//" + j.host
				} catch (y) {
					o.crossDomain = !0
				}
			}
			if (o.data && o.processData && "string" != typeof o.data && (o.data = wa.param(o.data, o.traditional)), ba(Rb, o, c, x), k) return x;
			l = wa.event && o.global, l && 0 == wa.active++ && wa.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Pb.test(o.type), f = o.url.replace(Lb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Kb, "+")) : (n = o.url.slice(f.length), o.data && (o.processData || "string" == typeof o.data) && (f += (Fb.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Mb, "$1"), n = (Fb.test(f) ? "&" : "?") + "_=" + Eb+++n), o.url = f + n), o.ifModified && (wa.lastModified[f] && x.setRequestHeader("If-Modified-Since", wa.lastModified[f]), wa.etag[f] && x.setRequestHeader("If-None-Match", wa.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Tb + "; q=0.01" : "") : o.accepts["*"]);
			for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
			if (o.beforeSend && (!1 === o.beforeSend.call(p, x, o) || k)) return x.abort();
			
			if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = ba(Sb, o, c, x)) {
				if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
				o.async && o.timeout > 0 && (i = a.setTimeout(function() {
					x.abort("timeout")
				}, o.timeout));
				try {
					k = !1, e.send(u, d)
				} catch (y) {
					if (k) throw y;
					d(-1, y)
				}
			} else d(-1, "No Transport");
			return x
		},
		
		getJSON: function(a, b, c) {
			return wa.get(a, b, c, "json")
		},
		
		getScript: function(a, b) {
			return wa.get(a, void 0, b, "script")
		}
	}), wa.each(["get", "post"], function(a, b) {
		wa[b] = function(a, c, d, e) {
			return sa(c) && (e = e || d, d = c, c = void 0), wa.ajax(wa.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, wa.isPlainObject(a) && a))
		}
	}), wa._evalUrl = function(a) {
		return wa.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, wa.fn.extend({
		wrapAll: function(a) {
			var b;
			return this[0] && (sa(a) && (a = a.call(this[0])), b = wa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
				for (var a = this; a.firstElementChild;) a = a.firstElementChild;
				return a
			}).append(this)), this
		},
		
		wrapInner: function(a) {
			return sa(a) ? this.each(function(b) {
				wa(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = wa(this),
					c = b.contents();
				
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		
		wrap: function(a) {
			var b = sa(a);
			return this.each(function(c) {
				wa(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		
		unwrap: function(a) {
			return this.parent(a).not("body").each(function() {
				wa(this).replaceWith(this.childNodes)
			}), this
		}
	}), wa.expr.pseudos.hidden = function(a) {
		return !wa.expr.pseudos.visible(a)
	}, wa.expr.pseudos.visible = function(a) {
		return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
	}, wa.ajaxSettings.xhr = function() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	};
	
	var Vb = {
		0: 200,
		1223: 204
	},
		Wb = wa.ajaxSettings.xhr();
	
	ra.cors = !! Wb && "withCredentials" in Wb, ra.ajax = Wb = !! Wb, wa.ajaxTransport(function(b) {
		var c, d;
		if (ra.cors || Wb && !b.crossDomain) return {
			send: function(e, f) {
				var g, h = b.xhr();
				
				if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
				b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
				for (g in e) h.setRequestHeader(g, e[g]);
				c = function(a) {
					return function() {
						c && (c = d = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Vb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
							binary: h.response
						} : {
							text: h.responseText
						}, h.getAllResponseHeaders()))
					}
				}, h.onload = c(), d = h.onerror = h.ontimeout = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
					4 === h.readyState && a.setTimeout(function() {
						c && d()
					})
				}, c = c("abort");
				try {
					h.send(b.hasContent && b.data || null)
				} catch (i) {
					if (c) throw i
				}
			},
			
			abort: function() {
				c && c()
			}
		}
	}), wa.ajaxPrefilter(function(a) {
		a.crossDomain && (a.contents.script = !1)
	}), wa.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		
		converters: {
			"text script": function(a) {
				return wa.globalEval(a), a
			}
		}
	}), wa.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), wa.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c;
			return {
				send: function(d, e) {
					b = wa("<script>").prop({
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function(a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), ga.head.appendChild(b[0])
				},
				
				abort: function() {
					c && c()
				}
			}
		}
	});
	
	var Xb = [],
		Yb = /(=)\?(?=&|$)|\?\?/;
	wa.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Xb.pop() || wa.expando + "_" + Eb++;
			return this[a] = !0, a
		}
	}), wa.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = !1 !== b.jsonp && (Yb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Yb.test(b.data) && "data");
		if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = sa(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Yb, "$1" + e) : !1 !== b.jsonp && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || wa.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			void 0 === f ? wa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Xb.push(e)), g && sa(f) && f(g[0]), g = f = void 0
		}), "script"
	}), ra.createHTMLDocument = function() {
		var a = ga.implementation.createHTMLDocument("").body;
		return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
	}(), wa.parseHTML = function(a, b, c) {
		if ("string" != typeof a) return [];
		"boolean" == typeof b && (c = b, b = !1);
		var d, e, f;
		return b || (ra.createHTMLDocument ? (b = ga.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ga.location.href, b.head.appendChild(d)) : b = ga), e = Ca.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = x([a], b, f), f && f.length && wa(f).remove(), wa.merge([], e.childNodes))
	}, wa.fn.load = function(a, b, c) {
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = Y(a.slice(h)), a = a.slice(0, h)), sa(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && wa.ajax({
			url: a,
			type: e || "GET",
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? wa("<div>").append(wa.parseHTML(a)).find(d) : a)
		}).always(c &&
		function(a, b) {
			g.each(function() {
				c.apply(this, f || [a.responseText, b, a])
			})
		}), this
	}, wa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		wa.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), wa.expr.pseudos.animated = function(a) {
		return wa.grep(wa.timers, function(b) {
			return a === b.elem
		}).length
	}, wa.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = wa.css(a, "position"),
				l = wa(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = wa.css(a, "top"), i = wa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), sa(b) && (b = b.call(a, c, wa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, wa.fn.extend({
		offset: function(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function(b) {
				wa.offset.setOffset(this, a, b)
			});
			
			var b, c, d = this[0];
			if (d) return d.getClientRects().length ? (b = d.getBoundingClientRect(), c = d.ownerDocument.defaultView, {
				top: b.top + c.pageYOffset,
				left: b.left + c.pageXOffset
			}) : {
				top: 0,
				left: 0
			}
		},
		
		position: function() {
			if (this[0]) {
				var a, b, c, d = this[0],
					e = {
						top: 0,
						left: 0
					};
				
				if ("fixed" === wa.css(d, "position")) b = d.getBoundingClientRect();
				else {
					for (b = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement; a && (a === c.body || a === c.documentElement) && "static" === wa.css(a, "position");) a = a.parentNode;
					a && a !== d && 1 === a.nodeType && (e = wa(a).offset(), e.top += wa.css(a, "borderTopWidth", !0), e.left += wa.css(a, "borderLeftWidth", !0))
				}
				return {
					top: b.top - e.top - wa.css(d, "marginTop", !0),
					left: b.left - e.left - wa.css(d, "marginLeft", !0)
				}
			}
		},
		
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent; a && "static" === wa.css(a, "position");) a = a.offsetParent;
				return a || bb
			})
		}
	}), wa.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, b) {
		var c = "pageYOffset" === b;
		wa.fn[a] = function(d) {
			return Ka(this, function(a, d, e) {
				var f;
				if (ta(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e) return f ? f[b] : a[d];
				f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e
			}, a, d, arguments.length)
		}
	}), wa.each(["top", "left"], function(a, b) {
		wa.cssHooks[b] = K(ra.pixelPosition, function(a, c) {
			if (c) return c = J(a, b), jb.test(c) ? wa(a).position()[b] + "px" : c
		})
	}), wa.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		wa.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			wa.fn[d] = function(e, f) {
				var g = arguments.length && (c || "boolean" != typeof e),
					h = c || (!0 === e || !0 === f ? "margin" : "border");
				return Ka(this, function(b, c, e) {
					var f;
					return ta(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? wa.css(b, c, h) : wa.style(b, c, e, h)
				}, b, g ? e : void 0, g)
			}
		})
	}), wa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
		wa.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), wa.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}), wa.fn.extend({
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	}), wa.proxy = function(a, b) {
		var c, d, e;
		if ("string" == typeof b && (c = a[b], b = a, a = c), sa(a)) return d = ia.call(arguments, 2), e = function() {
			return a.apply(b || this, d.concat(ia.call(arguments)))
		}, e.guid = a.guid = a.guid || wa.guid++, e
	}, wa.holdReady = function(a) {
		a ? wa.readyWait++ : wa.ready(!0)
	}, wa.isArray = Array.isArray, wa.parseJSON = JSON.parse, wa.nodeName = f, wa.isFunction = sa, wa.isWindow = ta, wa.camelCase = o, wa.type = d, wa.now = Date.now, wa.isNumeric = function(a) {
		var b = wa.type(a);
		return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return wa
	});
	
	var Zb = a.jQuery,
		$b = a.$;
	return wa.noConflict = function(b) {
		return a.$ === wa && (a.$ = $b), b && a.jQuery === wa && (a.jQuery = Zb), wa
	}, b || (a.jQuery = a.$ = wa), wa
}), function(a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Popper = b()
}(this, function() {
	"use strict";

	function a(a) {
		var b = !1;
		return function() {
			b || (b = !0, window.Promise.resolve().then(function() {
				b = !1, a()
			}))
		}
	}
	function b(a) {
		var b = !1;
		return function() {
			b || (b = !0, setTimeout(function() {
				b = !1, a()
			}, ja))
		}
	}
	function c(a) {
		var b = {};
		
		return a && "[object Function]" === b.toString.call(a)
	}
	function d(a, b) {
		if (1 !== a.nodeType) return [];
		var c = getComputedStyle(a, null);
		return b ? c[b] : c
	}
	function e(a) {
		return "HTML" === a.nodeName ? a : a.parentNode || a.host
	}
	function f(a) {
		if (!a) return document.body;
		switch (a.nodeName) {
			case "HTML":
			case "BODY":
				return a.ownerDocument.body;
			case "#document":
				return a.body
		}
		var b = d(a),
			c = b.overflow,
			g = b.overflowX;
		return /(auto|scroll|overlay)/.test(c + b.overflowY + g) ? a : f(e(a))
	}
	function g(a) {
		return 11 === a ? na : 10 === a ? oa : na || oa
	}
	function h(a) {
		if (!a) return document.documentElement;
		for (var b = g(10) ? document.body : null, c = a.offsetParent; c === b && a.nextElementSibling;) c = (a = a.nextElementSibling).offsetParent;
		var e = c && c.nodeName;
		return e && "BODY" !== e && "HTML" !== e ? -1 !== ["TD", "TABLE"].indexOf(c.nodeName) && "static" === d(c, "position") ? h(c) : c : a ? a.ownerDocument.documentElement : document.documentElement
	}
	function i(a) {
		var b = a.nodeName;
		return "BODY" !== b && ("HTML" === b || h(a.firstElementChild) === a)
	}
	function j(a) {
		return null !== a.parentNode ? j(a.parentNode) : a
	}
	function k(a, b) {
		if (!(a && a.nodeType && b && b.nodeType)) return document.documentElement;
		var c = a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING,
			d = c ? a : b,
			e = c ? b : a,
			f = document.createRange();
		
		f.setStart(d, 0), f.setEnd(e, 0);
		var g = f.commonAncestorContainer;
		if (a !== g && b !== g || d.contains(e)) return i(g) ? g : h(g);
		var l = j(a);
		return l.host ? k(l.host, b) : k(a, j(b).host)
	}
	function l(a) {
		var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
			c = "top" === b ? "scrollTop" : "scrollLeft",
			d = a.nodeName;
		if ("BODY" === d || "HTML" === d) {
			var e = a.ownerDocument.documentElement;
			return (a.ownerDocument.scrollingElement || e)[c]
		}
		return a[c]
	}
	function m(a, b) {
		var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			d = l(b, "top"),
			e = l(b, "left"),
			f = c ? -1 : 1;
		return a.top += d * f, a.bottom += d * f, a.left += e * f, a.right += e * f, a
	}
	function n(a, b) {
		var c = "x" === b ? "Left" : "Top",
			d = "Left" === c ? "Right" : "Bottom";
		return parseFloat(a["border" + c + "Width"], 10) + parseFloat(a["border" + d + "Width"], 10)
	}
	function o(a, b, c, d) {
		return Math.max(b["offset" + a], b["scroll" + a], c["client" + a], c["offset" + a], c["scroll" + a], g(10) ? c["offset" + a] + d["margin" + ("Height" === a ? "Top" : "Left")] + d["margin" + ("Height" === a ? "Bottom" : "Right")] : 0)
	}
	function p() {
		var a = document.body,
			b = document.documentElement,
			c = g(10) && getComputedStyle(b);
		return {
			height: o("Height", a, b, c),
			width: o("Width", a, b, c)
		}
	}
	function q(a) {
		return sa({}, a, {
			right: a.left + a.width,
			bottom: a.top + a.height
		})
	}
	function r(a) {
		var b = {};
		
		try {
			if (g(10)) {
				b = a.getBoundingClientRect();
				
				var c = l(a, "top"),
					e = l(a, "left");
				b.top += c, b.left += e, b.bottom += c, b.right += e
			} else b = a.getBoundingClientRect()
		} catch (r) {}
		var f = {
			left: b.left,
			top: b.top,
			width: b.right - b.left,
			height: b.bottom - b.top
		},
			h = "HTML" === a.nodeName ? p() : {},
			i = h.width || a.clientWidth || f.right - f.left,
			j = h.height || a.clientHeight || f.bottom - f.top,
			k = a.offsetWidth - i,
			m = a.offsetHeight - j;
		if (k || m) {
			var o = d(a);
			k -= n(o, "x"), m -= n(o, "y"), f.width -= k, f.height -= m
		}
		return q(f)
	}
	function s(a, b) {
		var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			e = g(10),
			h = "HTML" === b.nodeName,
			i = r(a),
			j = r(b),
			k = f(a),
			l = d(b),
			n = parseFloat(l.borderTopWidth, 10),
			o = parseFloat(l.borderLeftWidth, 10);
		c && "HTML" === b.nodeName && (j.top = Math.max(j.top, 0), j.left = Math.max(j.left, 0));
		var p = q({
			top: i.top - j.top - n,
			left: i.left - j.left - o,
			width: i.width,
			height: i.height
		});
		
		if (p.marginTop = 0, p.marginLeft = 0, !e && h) {
			var s = parseFloat(l.marginTop, 10),
				t = parseFloat(l.marginLeft, 10);
			p.top -= n - s, p.bottom -= n - s, p.left -= o - t, p.right -= o - t, p.marginTop = s, p.marginLeft = t
		}
		return (e && !c ? b.contains(k) : b === k && "BODY" !== k.nodeName) && (p = m(p, b)), p
	}
	function t(a) {
		var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			c = a.ownerDocument.documentElement,
			d = s(a, c),
			e = Math.max(c.clientWidth, window.innerWidth || 0),
			f = Math.max(c.clientHeight, window.innerHeight || 0),
			g = b ? 0 : l(c),
			h = b ? 0 : l(c, "left");
		return q({
			top: g - d.top + d.marginTop,
			left: h - d.left + d.marginLeft,
			width: e,
			height: f
		})
	}
	function u(a) {
		var b = a.nodeName;
		return "BODY" !== b && "HTML" !== b && ("fixed" === d(a, "position") || u(e(a)))
	}
	function v(a) {
		if (!a || !a.parentElement || g()) return document.documentElement;
		for (var b = a.parentElement; b && "none" === d(b, "transform");) b = b.parentElement;
		return b || document.documentElement
	}
	function w(a, b, c, d) {
		var g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
			h = {
				top: 0,
				left: 0
			},
			i = g ? v(a) : k(a, b);
		if ("viewport" === d) h = t(i, g);
		else {
			var j = void 0;
			"scrollParent" === d ? (j = f(e(b)), "BODY" === j.nodeName && (j = a.ownerDocument.documentElement)) : j = "window" === d ? a.ownerDocument.documentElement : d;
			var l = s(j, i, g);
			if ("HTML" !== j.nodeName || u(i)) h = l;
			else {
				var m = p(),
					n = m.height,
					o = m.width;
				h.top += l.top - l.marginTop, h.bottom = n + l.top, h.left += l.left - l.marginLeft, h.right = o + l.left
			}
		}
		return h.left += c, h.top += c, h.right -= c, h.bottom -= c, h
	}
	function x(a) {
		return a.width * a.height
	}
	function y(a, b, c, d, e) {
		var f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === a.indexOf("auto")) return a;
		var g = w(c, d, f, e),
			h = {
				top: {
					width: g.width,
					height: b.top - g.top
				},
				
				right: {
					width: g.right - b.right,
					height: g.height
				},
				
				bottom: {
					width: g.width,
					height: g.bottom - b.bottom
				},
				
				left: {
					width: b.left - g.left,
					height: g.height
				}
			},
			i = Object.keys(h).map(function(a) {
				return sa({
					key: a
				}, h[a], {
					area: x(h[a])
				})
			}).sort(function(a, b) {
				return b.area - a.area
			}),
			j = i.filter(function(a) {
				var b = a.width,
					d = a.height;
				return b >= c.clientWidth && d >= c.clientHeight
			}),
			k = j.length > 0 ? j[0].key : i[0].key,
			l = a.split("-")[1];
		return k + (l ? "-" + l : "")
	}
	function z(a, b, c) {
		var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
		return s(c, d ? v(b) : k(b, c), d)
	}
	function A(a) {
		var b = getComputedStyle(a),
			c = parseFloat(b.marginTop) + parseFloat(b.marginBottom),
			d = parseFloat(b.marginLeft) + parseFloat(b.marginRight);
		return {
			width: a.offsetWidth + d,
			height: a.offsetHeight + c
		}
	}
	function B(a) {
		var b = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		};
		
		return a.replace(/left|right|bottom|top/g, function(a) {
			return b[a]
		})
	}
	function C(a, b, c) {
		c = c.split("-")[0];
		var d = A(a),
			e = {
				width: d.width,
				height: d.height
			},
			f = -1 !== ["right", "left"].indexOf(c),
			g = f ? "top" : "left",
			h = f ? "left" : "top",
			i = f ? "height" : "width",
			j = f ? "width" : "height";
		return e[g] = b[g] + b[i] / 2 - d[i] / 2, e[h] = c === h ? b[h] - d[j] : b[B(h)], e
	}
	function D(a, b) {
		return Array.prototype.find ? a.find(b) : a.filter(b)[0]
	}
	function E(a, b, c) {
		if (Array.prototype.findIndex) return a.findIndex(function(a) {
			return a[b] === c
		});
		
		var d = D(a, function(a) {
			return a[b] === c
		});
		
		return a.indexOf(d)
	}
	function F(a, b, d) {
		return (void 0 === d ? a : a.slice(0, E(a, "name", d))).forEach(function(a) {
			a.
			function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
			var d = a.
			function || a.fn;
			a.enabled && c(d) && (b.offsets.popper = q(b.offsets.popper), b.offsets.reference = q(b.offsets.reference), b = d(b, a))
		}), b
	}
	function G() {
		if (!this.state.isDestroyed) {
			var a = {
				instance: this,
				styles: {},
				
				arrowStyles: {},
				
				attributes: {},
				
				flipped: !1,
				offsets: {}
			};
			
			a.offsets.reference = z(this.state, this.popper, this.reference, this.options.positionFixed), a.placement = y(this.options.placement, a.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), a.originalPlacement = a.placement, a.positionFixed = this.options.positionFixed, a.offsets.popper = C(this.popper, a.offsets.reference, a.placement), a.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", a = F(this.modifiers, a), this.state.isCreated ? this.options.onUpdate(a) : (this.state.isCreated = !0, this.options.onCreate(a))
		}
	}
	function H(a, b) {
		return a.some(function(a) {
			var c = a.name;
			return a.enabled && c === b
		})
	}
	function I(a) {
		for (var b = [!1, "ms", "Webkit", "Moz", "O"], c = a.charAt(0).toUpperCase() + a.slice(1), d = 0; d < b.length; d++) {
			var e = b[d],
				f = e ? "" + e + c : a;
			if (void 0 !== document.body.style[f]) return f
		}
		return null
	}
	function J() {
		return this.state.isDestroyed = !0, H(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[I("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
	}
	function K(a) {
		var b = a.ownerDocument;
		return b ? b.defaultView : window
	}
	function L(a, b, c, d) {
		var e = "BODY" === a.nodeName,
			g = e ? a.ownerDocument.defaultView : a;
		g.addEventListener(b, c, {
			passive: !0
		}), e || L(f(g.parentNode), b, c, d), d.push(g)
	}
	function M(a, b, c, d) {
		c.updateBound = d, K(a).addEventListener("resize", c.updateBound, {
			passive: !0
		});
		
		var e = f(a);
		return L(e, "scroll", c.updateBound, c.scrollParents), c.scrollElement = e, c.eventsEnabled = !0, c
	}
	function N() {
		this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
	}
	function O(a, b) {
		return K(a).removeEventListener("resize", b.updateBound), b.scrollParents.forEach(function(a) {
			a.removeEventListener("scroll", b.updateBound)
		}), b.updateBound = null, b.scrollParents = [], b.scrollElement = null, b.eventsEnabled = !1, b
	}
	function P() {
		this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = O(this.reference, this.state))
	}
	function Q(a) {
		return "" !== a && !isNaN(parseFloat(a)) && isFinite(a)
	}
	function R(a, b) {
		Object.keys(b).forEach(function(c) {
			var d = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(c) && Q(b[c]) && (d = "px"), a.style[c] = b[c] + d
		})
	}
	function S(a, b) {
		Object.keys(b).forEach(function(c) {
			!1 !== b[c] ? a.setAttribute(c, b[c]) : a.removeAttribute(c)
		})
	}
	function T(a) {
		return R(a.instance.popper, a.styles), S(a.instance.popper, a.attributes), a.arrowElement && Object.keys(a.arrowStyles).length && R(a.arrowElement, a.arrowStyles), a
	}
	function U(a, b, c, d, e) {
		var f = z(e, b, a, c.positionFixed),
			g = y(c.placement, f, b, a, c.modifiers.flip.boundariesElement, c.modifiers.flip.padding);
		return b.setAttribute("x-placement", g), R(b, {
			position: c.positionFixed ? "fixed" : "absolute"
		}), c
	}
	function V(a, b) {
		var c = b.x,
			d = b.y,
			e = a.offsets.popper,
			f = D(a.instance.modifiers, function(a) {
				return "applyStyle" === a.name
			}).gpuAcceleration;
		void 0 !== f && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
		var g = void 0 !== f ? f : b.gpuAcceleration,
			i = h(a.instance.popper),
			j = r(i),
			k = {
				position: e.position
			},
			l = {
				left: Math.floor(e.left),
				top: Math.round(e.top),
				bottom: Math.round(e.bottom),
				right: Math.floor(e.right)
			},
			m = "bottom" === c ? "top" : "bottom",
			n = "right" === d ? "left" : "right",
			o = I("transform"),
			p = void 0,
			q = void 0;
		if (q = "bottom" === m ? -j.height + l.bottom : l.top, p = "right" === n ? -j.width + l.right : l.left, g && o) k[o] = "translate3d(" + p + "px, " + q + "px, 0)", k[m] = 0, k[n] = 0, k.willChange = "transform";
		else {
			var s = "bottom" === m ? -1 : 1,
				t = "right" === n ? -1 : 1;
			k[m] = q * s, k[n] = p * t, k.willChange = m + ", " + n
		}
		var u = {
			"x-placement": a.placement
		};
		
		return a.attributes = sa({}, u, a.attributes), a.styles = sa({}, k, a.styles), a.arrowStyles = sa({}, a.offsets.arrow, a.arrowStyles), a
	}
	function W(a, b, c) {
		var d = D(a, function(a) {
			return a.name === b
		}),
			e = !! d && a.some(function(a) {
				return a.name === c && a.enabled && a.order < d.order
			});
		
		if (!e) {
			var f = "`" + b + "`",
				g = "`" + c + "`";
			console.warn(g + " modifier is required by " + f + " modifier in order to work, be sure to include it before " + f + "!")
		}
		return e
	}
	function X(a, b) {
		var c;
		if (!W(a.instance.modifiers, "arrow", "keepTogether")) return a;
		var e = b.element;
		if ("string" == typeof e) {
			if (!(e = a.instance.popper.querySelector(e))) return a
		} else if (!a.instance.popper.contains(e)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), a;
		var f = a.placement.split("-")[0],
			g = a.offsets,
			h = g.popper,
			i = g.reference,
			j = -1 !== ["left", "right"].indexOf(f),
			k = j ? "height" : "width",
			l = j ? "Top" : "Left",
			m = l.toLowerCase(),
			n = j ? "left" : "top",
			o = j ? "bottom" : "right",
			p = A(e)[k];
		i[o] - p < h[m] && (a.offsets.popper[m] -= h[m] - (i[o] - p)), i[m] + p > h[o] && (a.offsets.popper[m] += i[m] + p - h[o]), a.offsets.popper = q(a.offsets.popper);
		var r = i[m] + i[k] / 2 - p / 2,
			s = d(a.instance.popper),
			t = parseFloat(s["margin" + l], 10),
			u = parseFloat(s["border" + l + "Width"], 10),
			v = r - a.offsets.popper[m] - t - u;
		return v = Math.max(Math.min(h[k] - p, v), 0), a.arrowElement = e, a.offsets.arrow = (c = {}, ra(c, m, Math.round(v)), ra(c, n, ""), c), a
	}
	function Y(a) {
		return "end" === a ? "start" : "start" === a ? "end" : a
	}
	function Z(a) {
		var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			c = ua.indexOf(a),
			d = ua.slice(c + 1).concat(ua.slice(0, c));
		return b ? d.reverse() : d
	}
	function $(a, b) {
		if (H(a.instance.modifiers, "inner")) return a;
		if (a.flipped && a.placement === a.originalPlacement) return a;
		var c = w(a.instance.popper, a.instance.reference, b.padding, b.boundariesElement, a.positionFixed),
			d = a.placement.split("-")[0],
			e = B(d),
			f = a.placement.split("-")[1] || "",
			g = [];
		switch (b.behavior) {
			case va.FLIP:
				g = [d, e];
				break;
			case va.CLOCKWISE:
				g = Z(d);
				break;
			case va.COUNTERCLOCKWISE:
				g = Z(d, !0);
				break;
			default:
				g = b.behavior
		}
		return g.forEach(function(h, i) {
			if (d !== h || g.length === i + 1) return a;
			d = a.placement.split("-")[0], e = B(d);
			var j = a.offsets.popper,
				k = a.offsets.reference,
				l = Math.floor,
				m = "left" === d && l(j.right) > l(k.left) || "right" === d && l(j.left) < l(k.right) || "top" === d && l(j.bottom) > l(k.top) || "bottom" === d && l(j.top) < l(k.bottom),
				n = l(j.left) < l(c.left),
				o = l(j.right) > l(c.right),
				p = l(j.top) < l(c.top),
				q = l(j.bottom) > l(c.bottom),
				r = "left" === d && n || "right" === d && o || "top" === d && p || "bottom" === d && q,
				s = -1 !== ["top", "bottom"].indexOf(d),
				t = !! b.flipVariations && (s && "start" === f && n || s && "end" === f && o || !s && "start" === f && p || !s && "end" === f && q);
			(m || r || t) && (a.flipped = !0, (m || r) && (d = g[i + 1]), t && (f = Y(f)), a.placement = d + (f ? "-" + f : ""), a.offsets.popper = sa({}, a.offsets.popper, C(a.instance.popper, a.offsets.reference, a.placement)), a = F(a.instance.modifiers, a, "flip"))
		}), a
	}
	function _(a) {
		var b = a.offsets,
			c = b.popper,
			d = b.reference,
			e = a.placement.split("-")[0],
			f = Math.floor,
			g = -1 !== ["top", "bottom"].indexOf(e),
			h = g ? "right" : "bottom",
			i = g ? "left" : "top",
			j = g ? "width" : "height";
		return c[h] < f(d[i]) && (a.offsets.popper[i] = f(d[i]) - c[j]), c[i] > f(d[h]) && (a.offsets.popper[i] = f(d[h])), a
	}
	function aa(a, b, c, d) {
		var e = a.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
			f = +e[1],
			g = e[2];
		if (!f) return a;
		if (0 === g.indexOf("%")) {
			var h = void 0;
			switch (g) {
				case "%p":
					h = c;
					break;
				case "%":
				case "%r":
				default:
					h = d
			}
			return q(h)[b] / 100 * f
		}
		if ("vh" === g || "vw" === g) {
			return ("vh" === g ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * f
		}
		return f
	}
	function ba(a, b, c, d) {
		var e = [0, 0],
			f = -1 !== ["right", "left"].indexOf(d),
			g = a.split(/(\+|\-)/).map(function(a) {
				return a.trim()
			}),
			h = g.indexOf(D(g, function(a) {
				return -1 !== a.search(/,|\s/)
			}));
		g[h] && -1 === g[h].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
		var i = /\s*,\s*|\s+/,
			j = -1 !== h ? [g.slice(0, h).concat([g[h].split(i)[0]]), [g[h].split(i)[1]].concat(g.slice(h + 1))] : [g];
		return j = j.map(function(a, d) {
			var e = (1 === d ? !f : f) ? "height" : "width",
				g = !1;
			return a.reduce(function(a, b) {
				return "" === a[a.length - 1] && -1 !== ["+", "-"].indexOf(b) ? (a[a.length - 1] = b, g = !0, a) : g ? (a[a.length - 1] += b, g = !1, a) : a.concat(b)
			}, []).map(function(a) {
				return aa(a, e, b, c)
			})
		}), j.forEach(function(a, b) {
			a.forEach(function(c, d) {
				Q(c) && (e[b] += c * ("-" === a[d - 1] ? -1 : 1))
			})
		}), e
	}
	function ca(a, b) {
		var c = b.offset,
			d = a.placement,
			e = a.offsets,
			f = e.popper,
			g = e.reference,
			h = d.split("-")[0],
			i = void 0;
		return i = Q(+c) ? [+c, 0] : ba(c, f, g, h), "left" === h ? (f.top += i[0], f.left -= i[1]) : "right" === h ? (f.top += i[0], f.left += i[1]) : "top" === h ? (f.left += i[0], f.top -= i[1]) : "bottom" === h && (f.left += i[0], f.top += i[1]), a.popper = f, a
	}
	function da(a, b) {
		var c = b.boundariesElement || h(a.instance.popper);
		a.instance.reference === c && (c = h(c));
		var d = I("transform"),
			e = a.instance.popper.style,
			f = e.top,
			g = e.left,
			i = e[d];
		e.top = "", e.left = "", e[d] = "";
		var j = w(a.instance.popper, a.instance.reference, b.padding, c, a.positionFixed);
		e.top = f, e.left = g, e[d] = i, b.boundaries = j;
		var k = b.priority,
			l = a.offsets.popper,
			m = {
				primary: function(a) {
					var c = l[a];
					return l[a] < j[a] && !b.escapeWithReference && (c = Math.max(l[a], j[a])), ra({}, a, c)
				},
				
				secondary: function(a) {
					var c = "right" === a ? "left" : "top",
						d = l[c];
					return l[a] > j[a] && !b.escapeWithReference && (d = Math.min(l[c], j[a] - ("right" === a ? l.width : l.height))), ra({}, c, d)
				}
			};
		
		return k.forEach(function(a) {
			var b = -1 !== ["left", "top"].indexOf(a) ? "primary" : "secondary";
			l = sa({}, l, m[b](a))
		}), a.offsets.popper = l, a
	}
	function ea(a) {
		var b = a.placement,
			c = b.split("-")[0],
			d = b.split("-")[1];
		if (d) {
			var e = a.offsets,
				f = e.reference,
				g = e.popper,
				h = -1 !== ["bottom", "top"].indexOf(c),
				i = h ? "left" : "top",
				j = h ? "width" : "height",
				k = {
					start: ra({}, i, f[i]),
					end: ra({}, i, f[i] + f[j] - g[j])
				};
			
			a.offsets.popper = sa({}, g, k[d])
		}
		return a
	}
	function fa(a) {
		if (!W(a.instance.modifiers, "hide", "preventOverflow")) return a;
		var b = a.offsets.reference,
			c = D(a.instance.modifiers, function(a) {
				return "preventOverflow" === a.name
			}).boundaries;
		if (b.bottom < c.top || b.left > c.right || b.top > c.bottom || b.right < c.left) {
			if (!0 === a.hide) return a;
			a.hide = !0, a.attributes["x-out-of-boundaries"] = ""
		} else {
			if (!1 === a.hide) return a;
			a.hide = !1, a.attributes["x-out-of-boundaries"] = !1
		}
		return a
	}
	function ga(a) {
		var b = a.placement,
			c = b.split("-")[0],
			d = a.offsets,
			e = d.popper,
			f = d.reference,
			g = -1 !== ["left", "right"].indexOf(c),
			h = -1 === ["top", "left"].indexOf(c);
		return e[g ? "left" : "top"] = f[c] - (h ? e[g ? "width" : "height"] : 0), a.placement = B(b), a.offsets.popper = q(e), a
	}
	for (var ha = "undefined" != typeof window && "undefined" != typeof document, ia = ["Edge", "Trident", "Firefox"], ja = 0, ka = 0; ka < ia.length; ka += 1) if (ha && navigator.userAgent.indexOf(ia[ka]) >= 0) {
		ja = 1;
		break
	}
	var la = ha && window.Promise,
		ma = la ? a : b,
		na = ha && !(!window.MSInputMethodContext || !document.documentMode),
		oa = ha && /MSIE 10/.test(navigator.userAgent),
		pa = function(a, b) {
			if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
		},
		qa = function() {
			function a(a, b) {
				for (var c = 0; c < b.length; c++) {
					var d = b[c];
					d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
				}
			}
			return function(b, c, d) {
				return c && a(b.prototype, c), d && a(b, d), b
			}
		}(),
		ra = function(a, b, c) {
			return b in a ? Object.defineProperty(a, b, {
				value: c,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : a[b] = c, a
		},
		sa = Object.assign ||
		function(a) {
			for (var b = 1; b < arguments.length; b++) {
				var c = arguments[b];
				for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
			}
			return a
		},
		ta = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
		ua = ta.slice(3),
		va = {
			FLIP: "flip",
			CLOCKWISE: "clockwise",
			COUNTERCLOCKWISE: "counterclockwise"
		},
		wa = {
			shift: {
				order: 100,
				enabled: !0,
				fn: ea
			},
			
			offset: {
				order: 200,
				enabled: !0,
				fn: ca,
				offset: 0
			},
			
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: da,
				priority: ["left", "right", "top", "bottom"],
				padding: 5,
				boundariesElement: "scrollParent"
			},
			
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: _
			},
			
			arrow: {
				order: 500,
				enabled: !0,
				fn: X,
				element: "[x-arrow]"
			},
			
			flip: {
				order: 600,
				enabled: !0,
				fn: $,
				behavior: "flip",
				padding: 5,
				boundariesElement: "viewport"
			},
			
			inner: {
				order: 700,
				enabled: !1,
				fn: ga
			},
			
			hide: {
				order: 800,
				enabled: !0,
				fn: fa
			},
			
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: V,
				gpuAcceleration: !0,
				x: "bottom",
				y: "right"
			},
			
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: T,
				onLoad: U,
				gpuAcceleration: void 0
			}
		},
		xa = {
			placement: "bottom",
			positionFixed: !1,
			eventsEnabled: !0,
			removeOnDestroy: !1,
			onCreate: function() {},
			
			onUpdate: function() {},
			
			modifiers: wa
		},
		ya = function() {
			function a(b, d) {
				var e = this,
					f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				
				pa(this, a), this.scheduleUpdate = function() {
					return requestAnimationFrame(e.update)
				}, this.update = ma(this.update.bind(this)), this.options = sa({}, a.Defaults, f), this.state = {
					isDestroyed: !1,
					isCreated: !1,
					scrollParents: []
				}, this.reference = b && b.jquery ? b[0] : b, this.popper = d && d.jquery ? d[0] : d, this.options.modifiers = {}, Object.keys(sa({}, a.Defaults.modifiers, f.modifiers)).forEach(function(b) {
					e.options.modifiers[b] = sa({}, a.Defaults.modifiers[b] || {}, f.modifiers ? f.modifiers[b] : {})
				}), this.modifiers = Object.keys(this.options.modifiers).map(function(a) {
					return sa({
						name: a
					}, e.options.modifiers[a])
				}).sort(function(a, b) {
					return a.order - b.order
				}), this.modifiers.forEach(function(a) {
					a.enabled && c(a.onLoad) && a.onLoad(e.reference, e.popper, e.options, a, e.state)
				}), this.update();
				
				var g = this.options.eventsEnabled;
				g && this.enableEventListeners(), this.state.eventsEnabled = g
			}
			return qa(a, [{
				key: "update",
				value: function() {
					return G.call(this)
				}
			},
			{
				key: "destroy",
				value: function() {
					return J.call(this)
				}
			},
			{
				key: "enableEventListeners",
				value: function() {
					return N.call(this)
				}
			},
			{
				key: "disableEventListeners",
				value: function() {
					return P.call(this)
				}
			}]), a
		}();
	
	return ya.Utils = ("undefined" != typeof window ? window : global).PopperUtils, ya.placements = ta, ya.Defaults = xa, ya
}), function(a, b) {
	"object" == typeof exports && "undefined" != typeof module ? b(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], b) : b(a.bootstrap = {}, a.jQuery, a.Popper)
}(this, function(a, b, c) {
	"use strict";

	function d(a, b) {
		for (var c = 0; c < b.length; c++) {
			var d = b[c];
			d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
		}
	}
	function e(a, b, c) {
		return b && d(a.prototype, b), c && d(a, c), a
	}
	function f(a, b, c) {
		return b in a ? Object.defineProperty(a, b, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : a[b] = c, a
	}
	function g(a) {
		for (var b = 1; b < arguments.length; b++) {
			var c = null != arguments[b] ? arguments[b] : {},
				d = Object.keys(c);
			"function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
				return Object.getOwnPropertyDescriptor(c, a).enumerable
			}))), d.forEach(function(b) {
				f(a, b, c[b])
			})
		}
		return a
	}
	function h(a, b) {
		a.prototype = Object.create(b.prototype), a.prototype.constructor = a, a.__proto__ = b
	}
	b = b && b.hasOwnProperty("default") ? b.
default:
	b, c = c && c.hasOwnProperty("default") ? c.
default:
	c;
	var i = function(a) {
		function b(a) {
			return {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()
		}
		function c() {
			return {
				bindType: f,
				delegateType: f,
				handle: function(b) {
					if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
				}
			}
		}
		function d(b) {
			var c = this,
				d = !1;
			return a(this).one(i.TRANSITION_END, function() {
				d = !0
			}), setTimeout(function() {
				d || i.triggerTransitionEnd(c)
			}, b), this
		}
		function e() {
			a.fn.emulateTransitionEnd = d, a.event.special[i.TRANSITION_END] = c()
		}
		var f = "transitionend",
			g = 1e6,
			h = 1e3,
			i = {
				TRANSITION_END: "bsTransitionEnd",
				getUID: function(a) {
					do {
						a += ~~ (Math.random() * g)
					} while 
					(document.getElementById(a));
					return a
				},
				
				getSelectorFromElement: function(b) {
					var c = b.getAttribute("data-target");
					c && "#" !== c || (c = b.getAttribute("href") || "");
					try {
						return a(document).find(c).length > 0 ? c : null
					} catch (d) {
						return null
					}
				},
				
				getTransitionDurationFromElement: function(b) {
					if (!b) return 0;
					var c = a(b).css("transition-duration");
					return parseFloat(c) ? (c = c.split(",")[0], parseFloat(c) * h) : 0
				},
				
				reflow: function(a) {
					return a.offsetHeight
				},
				
				triggerTransitionEnd: function(b) {
					a(b).trigger(f)
				},
				
				supportsTransitionEnd: function() {
					return Boolean(f)
				},
				
				isElement: function(a) {
					return (a[0] || a).nodeType
				},
				
				typeCheckConfig: function(a, c, d) {
					for (var e in d) if (Object.prototype.hasOwnProperty.call(d, e)) {
						var f = d[e],
							g = c[e],
							h = g && i.isElement(g) ? "element" : b(g);
						if (!new RegExp(f).test(h)) throw new Error(a.toUpperCase() + ': Option "' + e + '" provided type "' + h + '" but expected type "' + f + '".')
					}
				}
			};
		
		return e(), i
	}(b),
		j = function(a) {
			var b = "alert",
				c = "4.1.0",
				d = "bs.alert",
				f = "." + d,
				g = ".data-api",
				h = a.fn[b],
				j = {
					DISMISS: '[data-dismiss="alert"]'
				},
				k = {
					CLOSE: "close" + f,
					CLOSED: "closed" + f,
					CLICK_DATA_API: "click" + f + g
				},
				l = {
					ALERT: "alert",
					FADE: "fade",
					SHOW: "show"
				},
				m = function() {
					function b(a) {
						this._element = a
					}
					var f = b.prototype;
					return f.close = function(a) {
						a = a || this._element;
						var b = this._getRootElement(a);
						this._triggerCloseEvent(b).isDefaultPrevented() || this._removeElement(b)
					}, f.dispose = function() {
						a.removeData(this._element, d), this._element = null
					}, f._getRootElement = function(b) {
						var c = i.getSelectorFromElement(b),
							d = !1;
						return c && (d = a(c)[0]), d || (d = a(b).closest("." + l.ALERT)[0]), d
					}, f._triggerCloseEvent = function(b) {
						var c = a.Event(k.CLOSE);
						return a(b).trigger(c), c
					}, f._removeElement = function(b) {
						var c = this;
						if (a(b).removeClass(l.SHOW), !a(b).hasClass(l.FADE)) return void this._destroyElement(b);
						var d = i.getTransitionDurationFromElement(b);
						a(b).one(i.TRANSITION_END, function(a) {
							return c._destroyElement(b, a)
						}).emulateTransitionEnd(d)
					}, f._destroyElement = function(b) {
						a(b).detach().trigger(k.CLOSED).remove()
					}, b._jQueryInterface = function(c) {
						return this.each(function() {
							var e = a(this),
								f = e.data(d);
							f || (f = new b(this), e.data(d, f)), "close" === c && f[c](this)
						})
					}, b._handleDismiss = function(a) {
						return function(b) {
							b && b.preventDefault(), a.close(this)
						}
					}, e(b, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					}]), b
				}();
			
			return a(document).on(k.CLICK_DATA_API, j.DISMISS, m._handleDismiss(new m)), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
				return a.fn[b] = h, m._jQueryInterface
			}, m
		}(b),
		k = function(a) {
			var b = "button",
				c = "4.1.0",
				d = "bs.button",
				f = "." + d,
				g = ".data-api",
				h = a.fn[b],
				i = {
					ACTIVE: "active",
					BUTTON: "btn",
					FOCUS: "focus"
				},
				j = {
					DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
					DATA_TOGGLE: '[data-toggle="buttons"]',
					INPUT: "input",
					ACTIVE: ".active",
					BUTTON: ".btn"
				},
				k = {
					CLICK_DATA_API: "click" + f + g,
					FOCUS_BLUR_DATA_API: "focus" + f + g + " blur" + f + g
				},
				l = function() {
					function b(a) {
						this._element = a
					}
					var f = b.prototype;
					return f.toggle = function() {
						var b = !0,
							c = !0,
							d = a(this._element).closest(j.DATA_TOGGLE)[0];
						if (d) {
							var e = a(this._element).find(j.INPUT)[0];
							if (e) {
								if ("radio" === e.type) if (e.checked && a(this._element).hasClass(i.ACTIVE)) b = !1;
								else {
									var f = a(d).find(j.ACTIVE)[0];
									f && a(f).removeClass(i.ACTIVE)
								}
								if (b) {
									if (e.hasAttribute("disabled") || d.hasAttribute("disabled") || e.classList.contains("disabled") || d.classList.contains("disabled")) return;
									e.checked = !a(this._element).hasClass(i.ACTIVE), a(e).trigger("change")
								}
								e.focus(), c = !1
							}
						}
						c && this._element.setAttribute("aria-pressed", !a(this._element).hasClass(i.ACTIVE)), b && a(this._element).toggleClass(i.ACTIVE)
					}, f.dispose = function() {
						a.removeData(this._element, d), this._element = null
					}, b._jQueryInterface = function(c) {
						return this.each(function() {
							var e = a(this).data(d);
							e || (e = new b(this), a(this).data(d, e)), "toggle" === c && e[c]()
						})
					}, e(b, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					}]), b
				}();
			
			return a(document).on(k.CLICK_DATA_API, j.DATA_TOGGLE_CARROT, function(b) {
				b.preventDefault();
				
				var c = b.target;
				a(c).hasClass(i.BUTTON) || (c = a(c).closest(j.BUTTON)), l._jQueryInterface.call(a(c), "toggle")
			}).on(k.FOCUS_BLUR_DATA_API, j.DATA_TOGGLE_CARROT, function(b) {
				var c = a(b.target).closest(j.BUTTON)[0];
				a(c).toggleClass(i.FOCUS, /^focus(in)?$/.test(b.type))
			}), a.fn[b] = l._jQueryInterface, a.fn[b].Constructor = l, a.fn[b].noConflict = function() {
				return a.fn[b] = h, l._jQueryInterface
			}, l
		}(b),
		l = function(a) {
			var b = "carousel",
				c = "4.1.0",
				d = "bs.carousel",
				f = "." + d,
				h = ".data-api",
				j = a.fn[b],
				k = 37,
				l = 39,
				m = 500,
				n = {
					interval: 5e3,
					keyboard: !0,
					slide: !1,
					pause: "hover",
					wrap: !0
				},
				o = {
					interval: "(number|boolean)",
					keyboard: "boolean",
					slide: "(boolean|string)",
					pause: "(string|boolean)",
					wrap: "boolean"
				},
				p = {
					NEXT: "next",
					PREV: "prev",
					LEFT: "left",
					RIGHT: "right"
				},
				q = {
					SLIDE: "slide" + f,
					SLID: "slid" + f,
					KEYDOWN: "keydown" + f,
					MOUSEENTER: "mouseenter" + f,
					MOUSELEAVE: "mouseleave" + f,
					TOUCHEND: "touchend" + f,
					LOAD_DATA_API: "load" + f + h,
					CLICK_DATA_API: "click" + f + h
				},
				r = {
					CAROUSEL: "carousel",
					ACTIVE: "active",
					SLIDE: "slide",
					RIGHT: "carousel-item-right",
					LEFT: "carousel-item-left",
					NEXT: "carousel-item-next",
					PREV: "carousel-item-prev",
					ITEM: "carousel-item"
				},
				s = {
					ACTIVE: ".active",
					ACTIVE_ITEM: ".active.carousel-item",
					ITEM: ".carousel-item",
					NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
					INDICATORS: ".carousel-indicators",
					DATA_SLIDE: "[data-slide], [data-slide-to]",
					DATA_RIDE: '[data-ride="carousel"]'
				},
				t = function() {
					function h(b, c) {
						this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(c), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(s.INDICATORS)[0], this._addEventListeners()
					}
					var j = h.prototype;
					return j.next = function() {
						this._isSliding || this._slide(p.NEXT)
					}, j.nextWhenVisible = function() {
						!document.hidden && a(this._element).is(":visible") && "hidden" !== a(this._element).css("visibility") && this.next()
					}, j.prev = function() {
						this._isSliding || this._slide(p.PREV)
					}, j.pause = function(b) {
						b || (this._isPaused = !0), a(this._element).find(s.NEXT_PREV)[0] && (i.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
					}, j.cycle = function(a) {
						a || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
					}, j.to = function(b) {
						var c = this;
						this._activeElement = a(this._element).find(s.ACTIVE_ITEM)[0];
						var d = this._getItemIndex(this._activeElement);
						if (!(b > this._items.length - 1 || b < 0)) {
							if (this._isSliding) return void a(this._element).one(q.SLID, function() {
								return c.to(b)
							});
							
							if (d === b) return this.pause(), void this.cycle();
							
							var e = b > d ? p.NEXT : p.PREV;
							this._slide(e, this._items[b])
						}
					}, j.dispose = function() {
						a(this._element).off(f), a.removeData(this._element, d), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
					}, j._getConfig = function(a) {
						return a = g({}, n, a), i.typeCheckConfig(b, a, o), a
					}, j._addEventListeners = function() {
						var b = this;
						this._config.keyboard && a(this._element).on(q.KEYDOWN, function(a) {
							return b._keydown(a)
						}), "hover" === this._config.pause && (a(this._element).on(q.MOUSEENTER, function(a) {
							return b.pause(a)
						}).on(q.MOUSELEAVE, function(a) {
							return b.cycle(a)
						}), "ontouchstart" in document.documentElement && a(this._element).on(q.TOUCHEND, function() {
							b.pause(), b.touchTimeout && clearTimeout(b.touchTimeout), b.touchTimeout = setTimeout(function(a) {
								return b.cycle(a)
							}, m + b._config.interval)
						}))
					}, j._keydown = function(a) {
						if (!/input|textarea/i.test(a.target.tagName)) switch (a.which) {
							case k:
								a.preventDefault(), this.prev();
								
								break;
							case l:
								a.preventDefault(), this.next()
						}
					}, j._getItemIndex = function(b) {
						return this._items = a.makeArray(a(b).parent().find(s.ITEM)), this._items.indexOf(b)
					}, j._getItemByDirection = function(a, b) {
						var c = a === p.NEXT,
							d = a === p.PREV,
							e = this._getItemIndex(b),
							f = this._items.length - 1;
						if ((d && 0 === e || c && e === f) && !this._config.wrap) return b;
						var g = a === p.PREV ? -1 : 1,
							h = (e + g) % this._items.length;
						return -1 === h ? this._items[this._items.length - 1] : this._items[h]
					}, j._triggerSlideEvent = function(b, c) {
						var d = this._getItemIndex(b),
							e = this._getItemIndex(a(this._element).find(s.ACTIVE_ITEM)[0]),
							f = a.Event(q.SLIDE, {
								relatedTarget: b,
								direction: c,
								from: e,
								to: d
							});
						
						return a(this._element).trigger(f), f
					}, j._setActiveIndicatorElement = function(b) {
						if (this._indicatorsElement) {
							a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);
							var c = this._indicatorsElement.children[this._getItemIndex(b)];
							c && a(c).addClass(r.ACTIVE)
						}
					}, j._slide = function(b, c) {
						var d, e, f, g = this,
							h = a(this._element).find(s.ACTIVE_ITEM)[0],
							j = this._getItemIndex(h),
							k = c || h && this._getItemByDirection(b, h),
							l = this._getItemIndex(k),
							m = Boolean(this._interval);
						if (b === p.NEXT ? (d = r.LEFT, e = r.NEXT, f = p.LEFT) : (d = r.RIGHT, e = r.PREV, f = p.RIGHT), k && a(k).hasClass(r.ACTIVE)) return void(this._isSliding = !1);
						if (!this._triggerSlideEvent(k, f).isDefaultPrevented() && h && k) {
							this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(k);
							var n = a.Event(q.SLID, {
								relatedTarget: k,
								direction: f,
								from: j,
								to: l
							});
							
							if (a(this._element).hasClass(r.SLIDE)) {
								a(k).addClass(e), i.reflow(k), a(h).addClass(d), a(k).addClass(d);
								var o = i.getTransitionDurationFromElement(h);
								a(h).one(i.TRANSITION_END, function() {
									a(k).removeClass(d + " " + e).addClass(r.ACTIVE), a(h).removeClass(r.ACTIVE + " " + e + " " + d), g._isSliding = !1, setTimeout(function() {
										return a(g._element).trigger(n)
									}, 0)
								}).emulateTransitionEnd(o)
							} else a(h).removeClass(r.ACTIVE), a(k).addClass(r.ACTIVE), this._isSliding = !1, a(this._element).trigger(n);
							m && this.cycle()
						}
					}, h._jQueryInterface = function(b) {
						return this.each(function() {
							var c = a(this).data(d),
								e = g({}, n, a(this).data());
							"object" == typeof b && (e = g({}, e, b));
							var f = "string" == typeof b ? b : e.slide;
							if (c || (c = new h(this, e), a(this).data(d, c)), "number" == typeof b) c.to(b);
							else if ("string" == typeof f) {
								if (void 0 === c[f]) throw new TypeError('No method named "' + f + '"');
								c[f]()
							} else e.interval && (c.pause(), c.cycle())
						})
					}, h._dataApiClickHandler = function(b) {
						var c = i.getSelectorFromElement(this);
						if (c) {
							var e = a(c)[0];
							if (e && a(e).hasClass(r.CAROUSEL)) {
								var f = g({}, a(e).data(), a(this).data()),
									j = this.getAttribute("data-slide-to");
								j && (f.interval = !1), h._jQueryInterface.call(a(e), f), j && a(e).data(d).to(j), b.preventDefault()
							}
						}
					}, e(h, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					},
					{
						key: "Default",
						get: function() {
							return n
						}
					}]), h
				}();
			
			return a(document).on(q.CLICK_DATA_API, s.DATA_SLIDE, t._dataApiClickHandler), a(window).on(q.LOAD_DATA_API, function() {
				a(s.DATA_RIDE).each(function() {
					var b = a(this);
					t._jQueryInterface.call(b, b.data())
				})
			}), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function() {
				return a.fn[b] = j, t._jQueryInterface
			}, t
		}(b),
		m = function(a) {
			var b = "collapse",
				c = "4.1.0",
				d = "bs.collapse",
				f = "." + d,
				h = ".data-api",
				j = a.fn[b],
				k = {
					toggle: !0,
					parent: ""
				},
				l = {
					toggle: "boolean",
					parent: "(string|element)"
				},
				m = {
					SHOW: "show" + f,
					SHOWN: "shown" + f,
					HIDE: "hide" + f,
					HIDDEN: "hidden" + f,
					CLICK_DATA_API: "click" + f + h
				},
				n = {
					SHOW: "show",
					COLLAPSE: "collapse",
					COLLAPSING: "collapsing",
					COLLAPSED: "collapsed"
				},
				o = {
					WIDTH: "width",
					HEIGHT: "height"
				},
				p = {
					ACTIVES: ".show, .collapsing",
					DATA_TOGGLE: '[data-toggle="collapse"]'
				},
				q = function() {
					function f(b, c) {
						this._isTransitioning = !1, this._element = b, this._config = this._getConfig(c), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'));
						for (var d = a(p.DATA_TOGGLE), e = 0; e < d.length; e++) {
							var f = d[e],
								g = i.getSelectorFromElement(f);
							null !== g && a(g).filter(b).length > 0 && (this._selector = g, this._triggerArray.push(f))
						}
						this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
					}
					var h = f.prototype;
					return h.toggle = function() {
						a(this._element).hasClass(n.SHOW) ? this.hide() : this.show()
					}, h.show = function() {
						var b = this;
						if (!this._isTransitioning && !a(this._element).hasClass(n.SHOW)) {
							var c, e;
							if (this._parent && (c = a.makeArray(a(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]')), 0 === c.length && (c = null)), !(c && (e = a(c).not(this._selector).data(d)) && e._isTransitioning)) {
								var g = a.Event(m.SHOW);
								if (a(this._element).trigger(g), !g.isDefaultPrevented()) {
									c && (f._jQueryInterface.call(a(c).not(this._selector), "hide"), e || a(c).data(d, null));
									var h = this._getDimension();
									
									a(this._element).removeClass(n.COLLAPSE).addClass(n.COLLAPSING), this._element.style[h] = 0, this._triggerArray.length > 0 && a(this._triggerArray).removeClass(n.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
									var j = function() {
										a(b._element).removeClass(n.COLLAPSING).addClass(n.COLLAPSE).addClass(n.SHOW), b._element.style[h] = "", b.setTransitioning(!1), a(b._element).trigger(m.SHOWN)
									},
										k = h[0].toUpperCase() + h.slice(1),
										l = "scroll" + k,
										o = i.getTransitionDurationFromElement(this._element);
									a(this._element).one(i.TRANSITION_END, j).emulateTransitionEnd(o), this._element.style[h] = this._element[l] + "px"
								}
							}
						}
					}, h.hide = function() {
						var b = this;
						if (!this._isTransitioning && a(this._element).hasClass(n.SHOW)) {
							var c = a.Event(m.HIDE);
							if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
								var d = this._getDimension();
								
								if (this._element.style[d] = this._element.getBoundingClientRect()[d] + "px", i.reflow(this._element), a(this._element).addClass(n.COLLAPSING).removeClass(n.COLLAPSE).removeClass(n.SHOW), this._triggerArray.length > 0) for (var e = 0; e < this._triggerArray.length; e++) {
									var f = this._triggerArray[e],
										g = i.getSelectorFromElement(f);
									if (null !== g) {
										var h = a(g);
										h.hasClass(n.SHOW) || a(f).addClass(n.COLLAPSED).attr("aria-expanded", !1)
									}
								}
								this.setTransitioning(!0);
								var j = function() {
									b.setTransitioning(!1), a(b._element).removeClass(n.COLLAPSING).addClass(n.COLLAPSE).trigger(m.HIDDEN)
								};
								
								this._element.style[d] = "";
								var k = i.getTransitionDurationFromElement(this._element);
								a(this._element).one(i.TRANSITION_END, j).emulateTransitionEnd(k)
							}
						}
					}, h.setTransitioning = function(a) {
						this._isTransitioning = a
					}, h.dispose = function() {
						a.removeData(this._element, d), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
					}, h._getConfig = function(a) {
						return a = g({}, k, a), a.toggle = Boolean(a.toggle), i.typeCheckConfig(b, a, l), a
					}, h._getDimension = function() {
						return a(this._element).hasClass(o.WIDTH) ? o.WIDTH : o.HEIGHT
					}, h._getParent = function() {
						var b = this,
							c = null;
						i.isElement(this._config.parent) ? (c = this._config.parent, void 0 !== this._config.parent.jquery && (c = this._config.parent[0])) : c = a(this._config.parent)[0];
						var d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
						return a(c).find(d).each(function(a, c) {
							b._addAriaAndCollapsedClass(f._getTargetFromElement(c), [c])
						}), c
					}, h._addAriaAndCollapsedClass = function(b, c) {
						if (b) {
							var d = a(b).hasClass(n.SHOW);
							c.length > 0 && a(c).toggleClass(n.COLLAPSED, !d).attr("aria-expanded", d)
						}
					}, f._getTargetFromElement = function(b) {
						var c = i.getSelectorFromElement(b);
						return c ? a(c)[0] : null
					}, f._jQueryInterface = function(b) {
						return this.each(function() {
							var c = a(this),
								e = c.data(d),
								h = g({}, k, c.data(), "object" == typeof b && b);
							if (!e && h.toggle && /show|hide/.test(b) && (h.toggle = !1), e || (e = new f(this, h), c.data(d, e)), "string" == typeof b) {
								if (void 0 === e[b]) throw new TypeError('No method named "' + b + '"');
								e[b]()
							}
						})
					}, e(f, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					},
					{
						key: "Default",
						get: function() {
							return k
						}
					}]), f
				}();
			
			return a(document).on(m.CLICK_DATA_API, p.DATA_TOGGLE, function(b) {
				"A" === b.currentTarget.tagName && b.preventDefault();
				
				var c = a(this),
					e = i.getSelectorFromElement(this);
				a(e).each(function() {
					var b = a(this),
						e = b.data(d),
						f = e ? "toggle" : c.data();
					
					q._jQueryInterface.call(b, f)
				})
			}), a.fn[b] = q._jQueryInterface, a.fn[b].Constructor = q, a.fn[b].noConflict = function() {
				return a.fn[b] = j, q._jQueryInterface
			}, q
		}(b),
		n = function(a) {
			var b = "dropdown",
				d = "4.1.0",
				f = "bs.dropdown",
				h = "." + f,
				j = ".data-api",
				k = a.fn[b],
				l = 27,
				m = 32,
				n = 9,
				o = 38,
				p = 40,
				q = 3,
				r = new RegExp(o + "|" + p + "|" + l),
				s = {
					HIDE: "hide" + h,
					HIDDEN: "hidden" + h,
					SHOW: "show" + h,
					SHOWN: "shown" + h,
					CLICK: "click" + h,
					CLICK_DATA_API: "click" + h + j,
					KEYDOWN_DATA_API: "keydown" + h + j,
					KEYUP_DATA_API: "keyup" + h + j
				},
				t = {
					DISABLED: "disabled",
					SHOW: "show",
					DROPUP: "dropup",
					DROPRIGHT: "dropright",
					DROPLEFT: "dropleft",
					MENURIGHT: "dropdown-menu-right",
					MENULEFT: "dropdown-menu-left",
					POSITION_STATIC: "position-static"
				},
				u = {
					DATA_TOGGLE: '[data-toggle="dropdown"]',
					FORM_CHILD: ".dropdown form",
					MENU: ".dropdown-menu",
					NAVBAR_NAV: ".navbar-nav",
					VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
				},
				v = {
					TOP: "top-start",
					TOPEND: "top-end",
					BOTTOM: "bottom-start",
					BOTTOMEND: "bottom-end",
					RIGHT: "right-start",
					RIGHTEND: "right-end",
					LEFT: "left-start",
					LEFTEND: "left-end"
				},
				w = {
					offset: 0,
					flip: !0,
					boundary: "scrollParent",
					reference: "toggle",
					display: "dynamic"
				},
				x = {
					offset: "(number|string|function)",
					flip: "boolean",
					boundary: "(string|element)",
					reference: "(string|element)",
					display: "string"
				},
				y = function() {
					function j(a, b) {
						this._element = a, this._popper = null, this._config = this._getConfig(b), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
					}
					var k = j.prototype;
					return k.toggle = function() {
						if (!this._element.disabled && !a(this._element).hasClass(t.DISABLED)) {
							var b = j._getParentFromElement(this._element),
								d = a(this._menu).hasClass(t.SHOW);
							if (j._clearMenus(), !d) {
								var e = {
									relatedTarget: this._element
								},
									f = a.Event(s.SHOW, e);
								if (a(b).trigger(f), !f.isDefaultPrevented()) {
									if (!this._inNavbar) {
										if (void 0 === c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
										var g = this._element;
										"parent" === this._config.reference ? g = b : i.isElement(this._config.reference) && (g = this._config.reference, void 0 !== this._config.reference.jquery && (g = this._config.reference[0])), "scrollParent" !== this._config.boundary && a(b).addClass(t.POSITION_STATIC), this._popper = new c(g, this._menu, this._getPopperConfig())
									}
									"ontouchstart" in document.documentElement && 0 === a(b).closest(u.NAVBAR_NAV).length && a(document.body).children().on("mouseover", null, a.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), a(this._menu).toggleClass(t.SHOW), a(b).toggleClass(t.SHOW).trigger(a.Event(s.SHOWN, e))
								}
							}
						}
					}, k.dispose = function() {
						a.removeData(this._element, f), a(this._element).off(h), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
					}, k.update = function() {
						this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
					}, k._addEventListeners = function() {
						var b = this;
						a(this._element).on(s.CLICK, function(a) {
							a.preventDefault(), a.stopPropagation(), b.toggle()
						})
					}, k._getConfig = function(c) {
						return c = g({}, this.constructor.Default, a(this._element).data(), c), i.typeCheckConfig(b, c, this.constructor.DefaultType), c
					}, k._getMenuElement = function() {
						if (!this._menu) {
							var b = j._getParentFromElement(this._element);
							this._menu = a(b).find(u.MENU)[0]
						}
						return this._menu
					}, k._getPlacement = function() {
						var b = a(this._element).parent(),
							c = v.BOTTOM;
						return b.hasClass(t.DROPUP) ? (c = v.TOP, a(this._menu).hasClass(t.MENURIGHT) && (c = v.TOPEND)) : b.hasClass(t.DROPRIGHT) ? c = v.RIGHT : b.hasClass(t.DROPLEFT) ? c = v.LEFT : a(this._menu).hasClass(t.MENURIGHT) && (c = v.BOTTOMEND), c
					}, k._detectNavbar = function() {
						return a(this._element).closest(".navbar").length > 0
					}, k._getPopperConfig = function() {
						var a = this,
							b = {};
						"function" == typeof this._config.offset ? b.fn = function(b) {
							return b.offsets = g({}, b.offsets, a._config.offset(b.offsets) || {}), b
						} : b.offset = this._config.offset;
						var c = {
							placement: this._getPlacement(),
							modifiers: {
								offset: b,
								flip: {
									enabled: this._config.flip
								},
								
								preventOverflow: {
									boundariesElement: this._config.boundary
								}
							}
						};
						
						return "static" === this._config.display && (c.modifiers.applyStyle = {
							enabled: !1
						}), c
					}, j._jQueryInterface = function(b) {
						return this.each(function() {
							var c = a(this).data(f),
								d = "object" == typeof b ? b : null;
							if (c || (c = new j(this, d), a(this).data(f, c)), "string" == typeof b) {
								if (void 0 === c[b]) throw new TypeError('No method named "' + b + '"');
								c[b]()
							}
						})
					}, j._clearMenus = function(b) {
						if (!b || b.which !== q && ("keyup" !== b.type || b.which === n)) for (var c = a.makeArray(a(u.DATA_TOGGLE)), d = 0; d < c.length; d++) {
							var e = j._getParentFromElement(c[d]),
								g = a(c[d]).data(f),
								h = {
									relatedTarget: c[d]
								};
							
							if (g) {
								var i = g._menu;
								if (a(e).hasClass(t.SHOW) && !(b && ("click" === b.type && /input|textarea/i.test(b.target.tagName) || "keyup" === b.type && b.which === n) && a.contains(e, b.target))) {
									var k = a.Event(s.HIDE, h);
									a(e).trigger(k), k.isDefaultPrevented() || ("ontouchstart" in document.documentElement && a(document.body).children().off("mouseover", null, a.noop), c[d].setAttribute("aria-expanded", "false"), a(i).removeClass(t.SHOW), a(e).removeClass(t.SHOW).trigger(a.Event(s.HIDDEN, h)))
								}
							}
						}
					}, j._getParentFromElement = function(b) {
						var c, d = i.getSelectorFromElement(b);
						return d && (c = a(d)[0]), c || b.parentNode
					}, j._dataApiKeydownHandler = function(b) {
						if ((/input|textarea/i.test(b.target.tagName) ? !(b.which === m || b.which !== l && (b.which !== p && b.which !== o || a(b.target).closest(u.MENU).length)) : r.test(b.which)) && (b.preventDefault(), b.stopPropagation(), !this.disabled && !a(this).hasClass(t.DISABLED))) {
							var c = j._getParentFromElement(this),
								d = a(c).hasClass(t.SHOW);
							if (!d && (b.which !== l || b.which !== m) || d && (b.which === l || b.which === m)) {
								if (b.which === l) {
									var e = a(c).find(u.DATA_TOGGLE)[0];
									a(e).trigger("focus")
								}
								return void a(this).trigger("click")
							}
							var f = a(c).find(u.VISIBLE_ITEMS).get();
							
							if (0 !== f.length) {
								var g = f.indexOf(b.target);
								b.which === o && g > 0 && g--, b.which === p && g < f.length - 1 && g++, g < 0 && (g = 0), f[g].focus()
							}
						}
					}, e(j, null, [{
						key: "VERSION",
						get: function() {
							return d
						}
					},
					{
						key: "Default",
						get: function() {
							return w
						}
					},
					{
						key: "DefaultType",
						get: function() {
							return x
						}
					}]), j
				}();
			
			return a(document).on(s.KEYDOWN_DATA_API, u.DATA_TOGGLE, y._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, u.MENU, y._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.KEYUP_DATA_API, y._clearMenus).on(s.CLICK_DATA_API, u.DATA_TOGGLE, function(b) {
				b.preventDefault(), b.stopPropagation(), y._jQueryInterface.call(a(this), "toggle")
			}).on(s.CLICK_DATA_API, u.FORM_CHILD, function(a) {
				a.stopPropagation()
			}), a.fn[b] = y._jQueryInterface, a.fn[b].Constructor = y, a.fn[b].noConflict = function() {
				return a.fn[b] = k, y._jQueryInterface
			}, y
		}(b),
		o = function(a) {
			var b = "modal",
				c = "4.1.0",
				d = "bs.modal",
				f = "." + d,
				h = ".data-api",
				j = a.fn[b],
				k = 27,
				l = {
					backdrop: !0,
					keyboard: !0,
					focus: !0,
					show: !0
				},
				m = {
					backdrop: "(boolean|string)",
					keyboard: "boolean",
					focus: "boolean",
					show: "boolean"
				},
				n = {
					HIDE: "hide" + f,
					HIDDEN: "hidden" + f,
					SHOW: "show" + f,
					SHOWN: "shown" + f,
					FOCUSIN: "focusin" + f,
					RESIZE: "resize" + f,
					CLICK_DISMISS: "click.dismiss" + f,
					KEYDOWN_DISMISS: "keydown.dismiss" + f,
					MOUSEUP_DISMISS: "mouseup.dismiss" + f,
					MOUSEDOWN_DISMISS: "mousedown.dismiss" + f,
					CLICK_DATA_API: "click" + f + h
				},
				o = {
					SCROLLBAR_MEASURER: "modal-scrollbar-measure",
					BACKDROP: "modal-backdrop",
					OPEN: "modal-open",
					FADE: "fade",
					SHOW: "show"
				},
				p = {
					DIALOG: ".modal-dialog",
					DATA_TOGGLE: '[data-toggle="modal"]',
					DATA_DISMISS: '[data-dismiss="modal"]',
					FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
					STICKY_CONTENT: ".sticky-top",
					NAVBAR_TOGGLER: ".navbar-toggler"
				},
				q = function() {
					function h(b, c) {
						this._config = this._getConfig(c), this._element = b, this._dialog = a(b).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
					}
					var j = h.prototype;
					return j.toggle = function(a) {
						return this._isShown ? this.hide() : this.show(a)
					}, j.show = function(b) {
						var c = this;
						if (!this._isTransitioning && !this._isShown) {
							a(this._element).hasClass(o.FADE) && (this._isTransitioning = !0);
							var d = a.Event(n.SHOW, {
								relatedTarget: b
							});
							
							a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), a(document.body).addClass(o.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(n.CLICK_DISMISS, p.DATA_DISMISS, function(a) {
								return c.hide(a)
							}), a(this._dialog).on(n.MOUSEDOWN_DISMISS, function() {
								a(c._element).one(n.MOUSEUP_DISMISS, function(b) {
									a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
								})
							}), this._showBackdrop(function() {
								return c._showElement(b)
							}))
						}
					}, j.hide = function(b) {
						var c = this;
						if (b && b.preventDefault(), !this._isTransitioning && this._isShown) {
							var d = a.Event(n.HIDE);
							if (a(this._element).trigger(d), this._isShown && !d.isDefaultPrevented()) {
								this._isShown = !1;
								var e = a(this._element).hasClass(o.FADE);
								if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), a(document).off(n.FOCUSIN), a(this._element).removeClass(o.SHOW), a(this._element).off(n.CLICK_DISMISS), a(this._dialog).off(n.MOUSEDOWN_DISMISS), e) {
									var f = i.getTransitionDurationFromElement(this._element);
									a(this._element).one(i.TRANSITION_END, function(a) {
										return c._hideModal(a)
									}).emulateTransitionEnd(f)
								} else this._hideModal()
							}
						}
					}, j.dispose = function() {
						a.removeData(this._element, d), a(window, document, this._element, this._backdrop).off(f), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
					}, j.handleUpdate = function() {
						this._adjustDialog()
					}, j._getConfig = function(a) {
						return a = g({}, l, a), i.typeCheckConfig(b, a, m), a
					}, j._showElement = function(b) {
						var c = this,
							d = a(this._element).hasClass(o.FADE);
						this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && i.reflow(this._element), a(this._element).addClass(o.SHOW), this._config.focus && this._enforceFocus();
						
						var e = a.Event(n.SHOWN, {
							relatedTarget: b
						}),
							f = function() {
								c._config.focus && c._element.focus(), c._isTransitioning = !1, a(c._element).trigger(e)
							};
						
						if (d) {
							var g = i.getTransitionDurationFromElement(this._element);
							a(this._dialog).one(i.TRANSITION_END, f).emulateTransitionEnd(g)
						} else f()
					}, j._enforceFocus = function() {
						var b = this;
						a(document).off(n.FOCUSIN).on(n.FOCUSIN, function(c) {
							document !== c.target && b._element !== c.target && 0 === a(b._element).has(c.target).length && b._element.focus()
						})
					}, j._setEscapeEvent = function() {
						var b = this;
						this._isShown && this._config.keyboard ? a(this._element).on(n.KEYDOWN_DISMISS, function(a) {
							a.which === k && (a.preventDefault(), b.hide())
						}) : this._isShown || a(this._element).off(n.KEYDOWN_DISMISS)
					}, j._setResizeEvent = function() {
						var b = this;
						this._isShown ? a(window).on(n.RESIZE, function(a) {
							return b.handleUpdate(a)
						}) : a(window).off(n.RESIZE)
					}, j._hideModal = function() {
						var b = this;
						this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
							a(document.body).removeClass(o.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(n.HIDDEN)
						})
					}, j._removeBackdrop = function() {
						this._backdrop && (a(this._backdrop).remove(), this._backdrop = null)
					}, j._showBackdrop = function(b) {
						var c = this,
							d = a(this._element).hasClass(o.FADE) ? o.FADE : "";
						if (this._isShown && this._config.backdrop) {
							if (this._backdrop = document.createElement("div"), this._backdrop.className = o.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(n.CLICK_DISMISS, function(a) {
								if (c._ignoreBackdropClick) return void(c._ignoreBackdropClick = !1);
								a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide())
							}), d && i.reflow(this._backdrop), a(this._backdrop).addClass(o.SHOW), !b) return;
							if (!d) return void b();
							
							var e = i.getTransitionDurationFromElement(this._backdrop);
							a(this._backdrop).one(i.TRANSITION_END, b).emulateTransitionEnd(e)
						} else if (!this._isShown && this._backdrop) {
							a(this._backdrop).removeClass(o.SHOW);
							var f = function() {
								c._removeBackdrop(), b && b()
							};
							
							if (a(this._element).hasClass(o.FADE)) {
								var g = i.getTransitionDurationFromElement(this._backdrop);
								a(this._backdrop).one(i.TRANSITION_END, f).emulateTransitionEnd(g)
							} else f()
						} else b && b()
					}, j._adjustDialog = function() {
						var a = this._element.scrollHeight > document.documentElement.clientHeight;
						!this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
					}, j._resetAdjustments = function() {
						this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
					}, j._checkScrollbar = function() {
						var a = document.body.getBoundingClientRect();
						
						this._isBodyOverflowing = a.left + a.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
					}, j._setScrollbar = function() {
						var b = this;
						if (this._isBodyOverflowing) {
							a(p.FIXED_CONTENT).each(function(c, d) {
								var e = a(d)[0].style.paddingRight,
									f = a(d).css("padding-right");
								a(d).data("padding-right", e).css("padding-right", parseFloat(f) + b._scrollbarWidth + "px")
							}), a(p.STICKY_CONTENT).each(function(c, d) {
								var e = a(d)[0].style.marginRight,
									f = a(d).css("margin-right");
								a(d).data("margin-right", e).css("margin-right", parseFloat(f) - b._scrollbarWidth + "px")
							}), a(p.NAVBAR_TOGGLER).each(function(c, d) {
								var e = a(d)[0].style.marginRight,
									f = a(d).css("margin-right");
								a(d).data("margin-right", e).css("margin-right", parseFloat(f) + b._scrollbarWidth + "px")
							});
							
							var c = document.body.style.paddingRight,
								d = a(document.body).css("padding-right");
							a(document.body).data("padding-right", c).css("padding-right", parseFloat(d) + this._scrollbarWidth + "px")
						}
					}, j._resetScrollbar = function() {
						a(p.FIXED_CONTENT).each(function(b, c) {
							var d = a(c).data("padding-right");
							void 0 !== d && a(c).css("padding-right", d).removeData("padding-right")
						}), a(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function(b, c) {
							var d = a(c).data("margin-right");
							void 0 !== d && a(c).css("margin-right", d).removeData("margin-right")
						});
						
						var b = a(document.body).data("padding-right");
						void 0 !== b && a(document.body).css("padding-right", b).removeData("padding-right")
					}, j._getScrollbarWidth = function() {
						var a = document.createElement("div");
						a.className = o.SCROLLBAR_MEASURER, document.body.appendChild(a);
						var b = a.getBoundingClientRect().width - a.clientWidth;
						return document.body.removeChild(a), b
					}, h._jQueryInterface = function(b, c) {
						return this.each(function() {
							var e = a(this).data(d),
								f = g({}, h.Default, a(this).data(), "object" == typeof b && b);
							if (e || (e = new h(this, f), a(this).data(d, e)), "string" == typeof b) {
								if (void 0 === e[b]) throw new TypeError('No method named "' + b + '"');
								e[b](c)
							} else f.show && e.show(c)
						})
					}, e(h, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					},
					{
						key: "Default",
						get: function() {
							return l
						}
					}]), h
				}();
			
			return a(document).on(n.CLICK_DATA_API, p.DATA_TOGGLE, function(b) {
				var c, e = this,
					f = i.getSelectorFromElement(this);
				f && (c = a(f)[0]);
				var h = a(c).data(d) ? "toggle" : g({}, a(c).data(), a(this).data());
				"A" !== this.tagName && "AREA" !== this.tagName || b.preventDefault();
				
				var j = a(c).one(n.SHOW, function(b) {
					b.isDefaultPrevented() || j.one(n.HIDDEN, function() {
						a(e).is(":visible") && e.focus()
					})
				});
				
				q._jQueryInterface.call(a(c), h, this)
			}), a.fn[b] = q._jQueryInterface, a.fn[b].Constructor = q, a.fn[b].noConflict = function() {
				return a.fn[b] = j, q._jQueryInterface
			}, q
		}(b),
		p = function(a) {
			var b = "tooltip",
				d = "4.1.0",
				f = "bs.tooltip",
				h = "." + f,
				j = a.fn[b],
				k = "bs-tooltip",
				l = new RegExp("(^|\\s)" + k + "\\S+", "g"),
				m = {
					animation: "boolean",
					template: "string",
					title: "(string|element|function)",
					trigger: "string",
					delay: "(number|object)",
					html: "boolean",
					selector: "(string|boolean)",
					placement: "(string|function)",
					offset: "(number|string)",
					container: "(string|element|boolean)",
					fallbackPlacement: "(string|array)",
					boundary: "(string|element)"
				},
				n = {
					AUTO: "auto",
					TOP: "top",
					RIGHT: "right",
					BOTTOM: "bottom",
					LEFT: "left"
				},
				o = {
					animation: !0,
					template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
					trigger: "hover focus",
					title: "",
					delay: 0,
					html: !1,
					selector: !1,
					placement: "top",
					offset: 0,
					container: !1,
					fallbackPlacement: "flip",
					boundary: "scrollParent"
				},
				p = {
					SHOW: "show",
					OUT: "out"
				},
				q = {
					HIDE: "hide" + h,
					HIDDEN: "hidden" + h,
					SHOW: "show" + h,
					SHOWN: "shown" + h,
					INSERTED: "inserted" + h,
					CLICK: "click" + h,
					FOCUSIN: "focusin" + h,
					FOCUSOUT: "focusout" + h,
					MOUSEENTER: "mouseenter" + h,
					MOUSELEAVE: "mouseleave" + h
				},
				r = {
					FADE: "fade",
					SHOW: "show"
				},
				s = {
					TOOLTIP: ".tooltip",
					TOOLTIP_INNER: ".tooltip-inner",
					ARROW: ".arrow"
				},
				t = {
					HOVER: "hover",
					FOCUS: "focus",
					CLICK: "click",
					MANUAL: "manual"
				},
				u = function() {
					function j(a, b) {
						if (void 0 === c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
						this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners()
					}
					var u = j.prototype;
					return u.enable = function() {
						this._isEnabled = !0
					}, u.disable = function() {
						this._isEnabled = !1
					}, u.toggleEnabled = function() {
						this._isEnabled = !this._isEnabled
					}, u.toggle = function(b) {
						if (this._isEnabled) if (b) {
							var c = this.constructor.DATA_KEY,
								d = a(b.currentTarget).data(c);
							d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
						} else {
							if (a(this.getTipElement()).hasClass(r.SHOW)) return void this._leave(null, this);
							this._enter(null, this)
						}
					}, u.dispose = function() {
						clearTimeout(this._timeout), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), a(this.element).closest(".modal").off("hide.bs.modal"), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
					}, u.show = function() {
						var b = this;
						if ("none" === a(this.element).css("display")) throw new Error("Please use show on visible elements");
						var d = a.Event(this.constructor.Event.SHOW);
						if (this.isWithContent() && this._isEnabled) {
							a(this.element).trigger(d);
							var e = a.contains(this.element.ownerDocument.documentElement, this.element);
							if (d.isDefaultPrevented() || !e) return;
							var f = this.getTipElement(),
								g = i.getUID(this.constructor.NAME);
							f.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(f).addClass(r.FADE);
							var h = "function" == typeof this.config.placement ? this.config.placement.call(this, f, this.element) : this.config.placement,
								j = this._getAttachment(h);
							this.addAttachmentClass(j);
							var k = !1 === this.config.container ? document.body : a(this.config.container);
							a(f).data(this.constructor.DATA_KEY, this), a.contains(this.element.ownerDocument.documentElement, this.tip) || a(f).appendTo(k), a(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, f, {
								placement: j,
								modifiers: {
									offset: {
										offset: this.config.offset
									},
									
									flip: {
										behavior: this.config.fallbackPlacement
									},
									
									arrow: {
										element: s.ARROW
									},
									
									preventOverflow: {
										boundariesElement: this.config.boundary
									}
								},
								
								onCreate: function(a) {
									a.originalPlacement !== a.placement && b._handlePopperPlacementChange(a)
								},
								
								onUpdate: function(a) {
									b._handlePopperPlacementChange(a)
								}
							}), a(f).addClass(r.SHOW), "ontouchstart" in document.documentElement && a(document.body).children().on("mouseover", null, a.noop);
							var l = function() {
								b.config.animation && b._fixTransition();
								
								var c = b._hoverState;
								b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === p.OUT && b._leave(null, b)
							};
							
							if (a(this.tip).hasClass(r.FADE)) {
								var m = i.getTransitionDurationFromElement(this.tip);
								a(this.tip).one(i.TRANSITION_END, l).emulateTransitionEnd(m)
							} else l()
						}
					}, u.hide = function(b) {
						var c = this,
							d = this.getTipElement(),
							e = a.Event(this.constructor.Event.HIDE),
							f = function() {
								c._hoverState !== p.SHOW && d.parentNode && d.parentNode.removeChild(d), c._cleanTipClass(), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), null !== c._popper && c._popper.destroy(), b && b()
							};
						
						if (a(this.element).trigger(e), !e.isDefaultPrevented()) {
							if (a(d).removeClass(r.SHOW), "ontouchstart" in document.documentElement && a(document.body).children().off("mouseover", null, a.noop), this._activeTrigger[t.CLICK] = !1, this._activeTrigger[t.FOCUS] = !1, this._activeTrigger[t.HOVER] = !1, a(this.tip).hasClass(r.FADE)) {
								var g = i.getTransitionDurationFromElement(d);
								a(d).one(i.TRANSITION_END, f).emulateTransitionEnd(g)
							} else f();
							
							this._hoverState = ""
						}
					}, u.update = function() {
						null !== this._popper && this._popper.scheduleUpdate()
					}, u.isWithContent = function() {
						return Boolean(this.getTitle())
					}, u.addAttachmentClass = function(b) {
						a(this.getTipElement()).addClass(k + "-" + b)
					}, u.getTipElement = function() {
						return this.tip = this.tip || a(this.config.template)[0], this.tip
					}, u.setContent = function() {
						var b = a(this.getTipElement());
						this.setElementContent(b.find(s.TOOLTIP_INNER), this.getTitle()), b.removeClass(r.FADE + " " + r.SHOW)
					}, u.setElementContent = function(b, c) {
						var d = this.config.html;
						"object" == typeof c && (c.nodeType || c.jquery) ? d ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[d ? "html" : "text"](c)
					}, u.getTitle = function() {
						var a = this.element.getAttribute("data-original-title");
						return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a
					}, u._getAttachment = function(a) {
						return n[a.toUpperCase()]
					}, u._setListeners = function() {
						var b = this;
						this.config.trigger.split(" ").forEach(function(c) {
							if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, function(a) {
								return b.toggle(a)
							});
							else if (c !== t.MANUAL) {
								var d = c === t.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
									e = c === t.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
								a(b.element).on(d, b.config.selector, function(a) {
									return b._enter(a)
								}).on(e, b.config.selector, function(a) {
									return b._leave(a)
								})
							}
							a(b.element).closest(".modal").on("hide.bs.modal", function() {
								return b.hide()
							})
						}), this.config.selector ? this.config = g({}, this.config, {
							trigger: "manual",
							selector: ""
						}) : this._fixTitle()
					}, u._fixTitle = function() {
						var a = typeof this.element.getAttribute("data-original-title");
						(this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
					}, u._enter = function(b, c) {
						var d = this.constructor.DATA_KEY;
						return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? t.FOCUS : t.HOVER] = !0), a(c.getTipElement()).hasClass(r.SHOW) || c._hoverState === p.SHOW ? void(c._hoverState = p.SHOW) : (clearTimeout(c._timeout), c._hoverState = p.SHOW, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() {
							c._hoverState === p.SHOW && c.show()
						}, c.config.delay.show)) : void c.show())
					}, u._leave = function(b, c) {
						var d = this.constructor.DATA_KEY;
						if (c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? t.FOCUS : t.HOVER] = !1), !c._isWithActiveTrigger()) {
							if (clearTimeout(c._timeout), c._hoverState = p.OUT, !c.config.delay || !c.config.delay.hide) return void c.hide();
							
							c._timeout = setTimeout(function() {
								c._hoverState === p.OUT && c.hide()
							}, c.config.delay.hide)
						}
					}, u._isWithActiveTrigger = function() {
						for (var a in this._activeTrigger) if (this._activeTrigger[a]) return !0;
						return !1
					}, u._getConfig = function(c) {
						return c = g({}, this.constructor.Default, a(this.element).data(), c), "number" == typeof c.delay && (c.delay = {
							show: c.delay,
							hide: c.delay
						}), "number" == typeof c.title && (c.title = c.title.toString()), "number" == typeof c.content && (c.content = c.content.toString()), i.typeCheckConfig(b, c, this.constructor.DefaultType), c
					}, u._getDelegateConfig = function() {
						var a = {};
						
						if (this.config) for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
						return a
					}, u._cleanTipClass = function() {
						var b = a(this.getTipElement()),
							c = b.attr("class").match(l);
						null !== c && c.length > 0 && b.removeClass(c.join(""))
					}, u._handlePopperPlacementChange = function(a) {
						this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(a.placement))
					}, u._fixTransition = function() {
						var b = this.getTipElement(),
							c = this.config.animation;
						null === b.getAttribute("x-placement") && (a(b).removeClass(r.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = c)
					}, j._jQueryInterface = function(b) {
						return this.each(function() {
							var c = a(this).data(f),
								d = "object" == typeof b && b;
							if ((c || !/dispose|hide/.test(b)) && (c || (c = new j(this, d), a(this).data(f, c)), "string" == typeof b)) {
								if (void 0 === c[b]) throw new TypeError('No method named "' + b + '"');
								c[b]()
							}
						})
					}, e(j, null, [{
						key: "VERSION",
						get: function() {
							return d
						}
					},
					{
						key: "Default",
						get: function() {
							return o
						}
					},
					{
						key: "NAME",
						get: function() {
							return b
						}
					},
					{
						key: "DATA_KEY",
						get: function() {
							return f
						}
					},
					{
						key: "Event",
						get: function() {
							return q
						}
					},
					{
						key: "EVENT_KEY",
						get: function() {
							return h
						}
					},
					{
						key: "DefaultType",
						get: function() {
							return m
						}
					}]), j
				}();
			
			return a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function() {
				return a.fn[b] = j, u._jQueryInterface
			}, u
		}(b),
		q = function(a) {
			var b = "popover",
				c = "4.1.0",
				d = "bs.popover",
				f = "." + d,
				i = a.fn[b],
				j = "bs-popover",
				k = new RegExp("(^|\\s)" + j + "\\S+", "g"),
				l = g({}, p.Default, {
					placement: "right",
					trigger: "click",
					content: "",
					template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
				}),
				m = g({}, p.DefaultType, {
					content: "(string|element|function)"
				}),
				n = {
					FADE: "fade",
					SHOW: "show"
				},
				o = {
					TITLE: ".popover-header",
					CONTENT: ".popover-body"
				},
				q = {
					HIDE: "hide" + f,
					HIDDEN: "hidden" + f,
					SHOW: "show" + f,
					SHOWN: "shown" + f,
					INSERTED: "inserted" + f,
					CLICK: "click" + f,
					FOCUSIN: "focusin" + f,
					FOCUSOUT: "focusout" + f,
					MOUSEENTER: "mouseenter" + f,
					MOUSELEAVE: "mouseleave" + f
				},
				r = function(g) {
					function i() {
						return g.apply(this, arguments) || this
					}
					h(i, g);
					var p = i.prototype;
					return p.isWithContent = function() {
						return this.getTitle() || this._getContent()
					}, p.addAttachmentClass = function(b) {
						a(this.getTipElement()).addClass(j + "-" + b)
					}, p.getTipElement = function() {
						return this.tip = this.tip || a(this.config.template)[0], this.tip
					}, p.setContent = function() {
						var b = a(this.getTipElement());
						this.setElementContent(b.find(o.TITLE), this.getTitle());
						var c = this._getContent();
						"function" == typeof c && (c = c.call(this.element)), this.setElementContent(b.find(o.CONTENT), c), b.removeClass(n.FADE + " " + n.SHOW)
					}, p._getContent = function() {
						return this.element.getAttribute("data-content") || this.config.content
					}, p._cleanTipClass = function() {
						var b = a(this.getTipElement()),
							c = b.attr("class").match(k);
						null !== c && c.length > 0 && b.removeClass(c.join(""))
					}, i._jQueryInterface = function(b) {
						return this.each(function() {
							var c = a(this).data(d),
								e = "object" == typeof b ? b : null;
							if ((c || !/destroy|hide/.test(b)) && (c || (c = new i(this, e), a(this).data(d, c)), "string" == typeof b)) {
								if (void 0 === c[b]) throw new TypeError('No method named "' + b + '"');
								c[b]()
							}
						})
					}, e(i, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					},
					{
						key: "Default",
						get: function() {
							return l
						}
					},
					{
						key: "NAME",
						get: function() {
							return b
						}
					},
					{
						key: "DATA_KEY",
						get: function() {
							return d
						}
					},
					{
						key: "Event",
						get: function() {
							return q
						}
					},
					{
						key: "EVENT_KEY",
						get: function() {
							return f
						}
					},
					{
						key: "DefaultType",
						get: function() {
							return m
						}
					}]), i
				}(p);
			return a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
				return a.fn[b] = i, r._jQueryInterface
			}, r
		}(b),
		r = function(a) {
			var b = "scrollspy",
				c = "4.1.0",
				d = "bs.scrollspy",
				f = "." + d,
				h = ".data-api",
				j = a.fn[b],
				k = {
					offset: 10,
					method: "auto",
					target: ""
				},
				l = {
					offset: "number",
					method: "string",
					target: "(string|element)"
				},
				m = {
					ACTIVATE: "activate" + f,
					SCROLL: "scroll" + f,
					LOAD_DATA_API: "load" + f + h
				},
				n = {
					DROPDOWN_ITEM: "dropdown-item",
					DROPDOWN_MENU: "dropdown-menu",
					ACTIVE: "active"
				},
				o = {
					DATA_SPY: '[data-spy="scroll"]',
					ACTIVE: ".active",
					NAV_LIST_GROUP: ".nav, .list-group",
					NAV_LINKS: ".nav-link",
					NAV_ITEMS: ".nav-item",
					LIST_ITEMS: ".list-group-item",
					DROPDOWN: ".dropdown",
					DROPDOWN_ITEMS: ".dropdown-item",
					DROPDOWN_TOGGLE: ".dropdown-toggle"
				},
				p = {
					OFFSET: "offset",
					POSITION: "position"
				},
				q = function() {
					function h(b, c) {
						var d = this;
						this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(c), this._selector = this._config.target + " " + o.NAV_LINKS + "," + this._config.target + " " + o.LIST_ITEMS + "," + this._config.target + " " + o.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(m.SCROLL, function(a) {
							return d._process(a)
						}), this.refresh(), this._process()
					}
					var j = h.prototype;
					return j.refresh = function() {
						var b = this,
							c = this._scrollElement === this._scrollElement.window ? p.OFFSET : p.POSITION,
							d = "auto" === this._config.method ? c : this._config.method,
							e = d === p.POSITION ? this._getScrollTop() : 0;
						this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), a.makeArray(a(this._selector)).map(function(b) {
							var c, f = i.getSelectorFromElement(b);
							if (f && (c = a(f)[0]), c) {
								var g = c.getBoundingClientRect();
								
								if (g.width || g.height) return [a(c)[d]().top + e, f]
							}
							return null
						}).filter(function(a) {
							return a
						}).sort(function(a, b) {
							return a[0] - b[0]
						}).forEach(function(a) {
							b._offsets.push(a[0]), b._targets.push(a[1])
						})
					}, j.dispose = function() {
						a.removeData(this._element, d), a(this._scrollElement).off(f), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
					}, j._getConfig = function(c) {
						if (c = g({}, k, c), "string" != typeof c.target) {
							var d = a(c.target).attr("id");
							d || (d = i.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d
						}
						return i.typeCheckConfig(b, c, l), c
					}, j._getScrollTop = function() {
						return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
					}, j._getScrollHeight = function() {
						return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
					}, j._getOffsetHeight = function() {
						return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
					}, j._process = function() {
						var a = this._getScrollTop() + this._config.offset,
							b = this._getScrollHeight(),
							c = this._config.offset + b - this._getOffsetHeight();
						
						if (this._scrollHeight !== b && this.refresh(), a >= c) {
							var d = this._targets[this._targets.length - 1];
							return void(this._activeTarget !== d && this._activate(d))
						}
						if (this._activeTarget && a < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
						
						for (var e = this._offsets.length; e--;) {
							this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]) && this._activate(this._targets[e])
						}
					}, j._activate = function(b) {
						this._activeTarget = b, this._clear();
						
						var c = this._selector.split(",");
						c = c.map(function(a) {
							return a + '[data-target="' + b + '"],' + a + '[href="' + b + '"]'
						});
						
						var d = a(c.join(","));
						d.hasClass(n.DROPDOWN_ITEM) ? (d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE), d.addClass(n.ACTIVE)) : (d.addClass(n.ACTIVE), d.parents(o.NAV_LIST_GROUP).prev(o.NAV_LINKS + ", " + o.LIST_ITEMS).addClass(n.ACTIVE), d.parents(o.NAV_LIST_GROUP).prev(o.NAV_ITEMS).children(o.NAV_LINKS).addClass(n.ACTIVE)), a(this._scrollElement).trigger(m.ACTIVATE, {
							relatedTarget: b
						})
					}, j._clear = function() {
						a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)
					}, h._jQueryInterface = function(b) {
						return this.each(function() {
							var c = a(this).data(d),
								e = "object" == typeof b && b;
							if (c || (c = new h(this, e), a(this).data(d, c)), "string" == typeof b) {
								if (void 0 === c[b]) throw new TypeError('No method named "' + b + '"');
								c[b]()
							}
						})
					}, e(h, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					},
					{
						key: "Default",
						get: function() {
							return k
						}
					}]), h
				}();
			
			return a(window).on(m.LOAD_DATA_API, function() {
				for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--;) {
					var d = a(b[c]);
					q._jQueryInterface.call(d, d.data())
				}
			}), a.fn[b] = q._jQueryInterface, a.fn[b].Constructor = q, a.fn[b].noConflict = function() {
				return a.fn[b] = j, q._jQueryInterface
			}, q
		}(b),
		s = function(a) {
			var b = "tab",
				c = "4.1.0",
				d = "bs.tab",
				f = "." + d,
				g = ".data-api",
				h = a.fn[b],
				j = {
					HIDE: "hide" + f,
					HIDDEN: "hidden" + f,
					SHOW: "show" + f,
					SHOWN: "shown" + f,
					CLICK_DATA_API: "click" + f + g
				},
				k = {
					DROPDOWN_MENU: "dropdown-menu",
					ACTIVE: "active",
					DISABLED: "disabled",
					FADE: "fade",
					SHOW: "show"
				},
				l = {
					DROPDOWN: ".dropdown",
					NAV_LIST_GROUP: ".nav, .list-group",
					ACTIVE: ".active",
					ACTIVE_UL: "> li > .active",
					DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
					DROPDOWN_TOGGLE: ".dropdown-toggle",
					DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
				},
				m = function() {
					function b(a) {
						this._element = a
					}
					var f = b.prototype;
					return f.show = function() {
						var b = this;
						if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && a(this._element).hasClass(k.ACTIVE) || a(this._element).hasClass(k.DISABLED))) {
							var c, d, e = a(this._element).closest(l.NAV_LIST_GROUP)[0],
								f = i.getSelectorFromElement(this._element);
							if (e) {
								var g = "UL" === e.nodeName ? l.ACTIVE_UL : l.ACTIVE;
								d = a.makeArray(a(e).find(g)), d = d[d.length - 1]
							}
							var h = a.Event(j.HIDE, {
								relatedTarget: this._element
							}),
								m = a.Event(j.SHOW, {
									relatedTarget: d
								});
							
							if (d && a(d).trigger(h), a(this._element).trigger(m), !m.isDefaultPrevented() && !h.isDefaultPrevented()) {
								f && (c = a(f)[0]), this._activate(this._element, e);
								var n = function() {
									var c = a.Event(j.HIDDEN, {
										relatedTarget: b._element
									}),
										e = a.Event(j.SHOWN, {
											relatedTarget: d
										});
									
									a(d).trigger(c), a(b._element).trigger(e)
								};
								
								c ? this._activate(c, c.parentNode, n) : n()
							}
						}
					}, f.dispose = function() {
						a.removeData(this._element, d), this._element = null
					}, f._activate = function(b, c, d) {
						var e, f = this;
						e = "UL" === c.nodeName ? a(c).find(l.ACTIVE_UL) : a(c).children(l.ACTIVE);
						var g = e[0],
							h = d && g && a(g).hasClass(k.FADE),
							j = function() {
								return f._transitionComplete(b, g, d)
							};
						
						if (g && h) {
							var m = i.getTransitionDurationFromElement(g);
							a(g).one(i.TRANSITION_END, j).emulateTransitionEnd(m)
						} else j()
					}, f._transitionComplete = function(b, c, d) {
						if (c) {
							a(c).removeClass(k.SHOW + " " + k.ACTIVE);
							var e = a(c.parentNode).find(l.DROPDOWN_ACTIVE_CHILD)[0];
							e && a(e).removeClass(k.ACTIVE), "tab" === c.getAttribute("role") && c.setAttribute("aria-selected", !1)
						}
						if (a(b).addClass(k.ACTIVE), "tab" === b.getAttribute("role") && b.setAttribute("aria-selected", !0), i.reflow(b), a(b).addClass(k.SHOW), b.parentNode && a(b.parentNode).hasClass(k.DROPDOWN_MENU)) {
							var f = a(b).closest(l.DROPDOWN)[0];
							f && a(f).find(l.DROPDOWN_TOGGLE).addClass(k.ACTIVE), b.setAttribute("aria-expanded", !0)
						}
						d && d()
					}, b._jQueryInterface = function(c) {
						return this.each(function() {
							var e = a(this),
								f = e.data(d);
							if (f || (f = new b(this), e.data(d, f)), "string" == typeof c) {
								if (void 0 === f[c]) throw new TypeError('No method named "' + c + '"');
								f[c]()
							}
						})
					}, e(b, null, [{
						key: "VERSION",
						get: function() {
							return c
						}
					}]), b
				}();
			
			return a(document).on(j.CLICK_DATA_API, l.DATA_TOGGLE, function(b) {
				b.preventDefault(), m._jQueryInterface.call(a(this), "show")
			}), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
				return a.fn[b] = h, m._jQueryInterface
			}, m
		}(b);
	!
	function(a) {
		if (void 0 === a) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
		var b = a.fn.jquery.split(" ")[0].split("."),
			c = 9;
		if (b[0] < 2 && b[1] < c || 1 === b[0] && b[1] === c && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
	}(b), a.Util = i, a.Alert = j, a.Button = k, a.Carousel = l, a.Collapse = m, a.Dropdown = n, a.Modal = o, a.Popover = q, a.Scrollspy = r, a.Tab = s, a.Tooltip = p, Object.defineProperty(a, "__esModule", {
		value: !0
	})
}), function(a) {
	if (a.document) {
		var b = a.document;
		b.querySelectorAll || (b.querySelectorAll = function(c) {
			var d, e = b.createElement("style"),
				f = [];
			for (b.documentElement.firstChild.appendChild(e), b._qsa = [], e.styleSheet.cssText = c + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", a.scrollBy(0, 0), e.parentNode.removeChild(e); b._qsa.length;) d = b._qsa.shift(), d.style.removeAttribute("x-qsa"), f.push(d);
			return b._qsa = null, f
		}), b.querySelector || (b.querySelector = function(a) {
			var c = b.querySelectorAll(a);
			return c.length ? c[0] : null
		}), b.getElementsByClassName || (b.getElementsByClassName = function(a) {
			return a = String(a).replace(/^|\s+/g, "."), b.querySelectorAll(a)
		}), Object.keys || (Object.keys = function(a) {
			if (a !== Object(a)) throw TypeError("Object.keys called on non-object");
			var b, c = [];
			for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
			return c
		}), function(a) {
			var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			a.atob = a.atob ||
			function(a) {
				a = String(a);
				var c, d = 0,
					e = [],
					f = 0,
					g = 0;
				if (a = a.replace(/\s/g, ""), a.length % 4 == 0 && (a = a.replace(/=+$/, "")), a.length % 4 == 1) throw Error("InvalidCharacterError");
				if (/[^+\/0-9A-Za-z]/.test(a)) throw Error("InvalidCharacterError");
				for (; d < a.length;) c = b.indexOf(a.charAt(d)), f = f << 6 | c, g += 6, 24 === g && (e.push(String.fromCharCode(f >> 16 & 255)), e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f)), g = 0, f = 0), d += 1;
				return 12 === g ? (f >>= 4, e.push(String.fromCharCode(255 & f))) : 18 === g && (f >>= 2, e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f))), e.join("")
			}, a.btoa = a.btoa ||
			function(a) {
				a = String(a);
				var c, d, e, f, g, h, i, j = 0,
					k = [];
				if (/[^\x00-\xFF]/.test(a)) throw Error("InvalidCharacterError");
				for (; j < a.length;) c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, j === a.length + 2 ? (h = 64, i = 64) : j === a.length + 1 && (i = 64), k.push(b.charAt(f), b.charAt(g), b.charAt(h), b.charAt(i));
				return k.join("")
			}
		}(a), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(a) {
			var b = this.__proto__ || this.constructor.prototype;
			return a in this && (!(a in b) || b[a] !== this[a])
		}), function() {
			if ("performance" in a == !1 && (a.performance = {}), Date.now = Date.now ||
			function() {
				return (new Date).getTime()
			}, "now" in a.performance == !1) {
				var b = Date.now();
				
				performance.timing && performance.timing.navigationStart && (b = performance.timing.navigationStart), a.performance.now = function() {
					return Date.now() - b
				}
			}
		}(), a.requestAnimationFrame || (a.webkitRequestAnimationFrame ?
		function(a) {
			a.requestAnimationFrame = function(b) {
				return webkitRequestAnimationFrame(function() {
					b(a.performance.now())
				})
			}, a.cancelAnimationFrame = webkitCancelAnimationFrame
		}(a) : a.mozRequestAnimationFrame ?
		function(a) {
			a.requestAnimationFrame = function(b) {
				return mozRequestAnimationFrame(function() {
					b(a.performance.now())
				})
			}, a.cancelAnimationFrame = mozCancelAnimationFrame
		}(a) : function(a) {
			a.requestAnimationFrame = function(b) {
				return a.setTimeout(b, 1e3 / 60)
			}, a.cancelAnimationFrame = a.clearTimeout
		}(a))
	}
}(this), function(a, b) {
	"object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? exports.Holder = b() : a.Holder = b()
}(this, function() {
	return function(a) {
		function b(d) {
			if (c[d]) return c[d].exports;
			var e = c[d] = {
				exports: {},
				
				id: d,
				loaded: !1
			};
			
			return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
		}
		var c = {};
		
		return b.m = a, b.c = c, b.p = "", b(0)
	}([function(a, b, c) {
		a.exports = c(1)
	}, function(a, b, c) {
		(function(b) {
			function d(a, b, c, d) {
				var f = e(c.substr(c.lastIndexOf(a.domain)), a);
				f && g({
					mode: null,
					el: d,
					flags: f,
					engineSettings: b
				})
			}
			function e(a, b) {
				return f(a, {
					theme: y(E.settings.themes.gray, null),
					stylesheets: b.stylesheets,
					instanceOptions: b
				})
			}
			function f(a, b) {
				var c = a.split("?"),
					d = c[0].split("/");
				b.holderURL = a;
				var e = d[1],
					f = e.match(/([\d]+p?)x([\d]+p?)/);
				if (!f) return !1;
				if (b.fluid = -1 !== e.indexOf("p"), b.dimensions = {
					width: f[1].replace("p", "%"),
					height: f[2].replace("p", "%")
				}, 2 === c.length) {
					var g = s.parse(c[1]);
					if (g.bg && (b.theme.background = (-1 === g.bg.indexOf("#") ? "#" : "") + g.bg), g.fg && (b.theme.foreground = (-1 === g.fg.indexOf("#") ? "#" : "") + g.fg), g.bg && !g.fg && (b.autoFg = !0), g.theme && b.instanceOptions.themes.hasOwnProperty(g.theme) && (b.theme = y(b.instanceOptions.themes[g.theme], null)), g.text && (b.text = g.text), g.textmode && (b.textmode = g.textmode), g.size && (b.size = g.size), g.font && (b.font = g.font), g.align && (b.align = g.align), b.nowrap = u.truthy(g.nowrap), b.auto = u.truthy(g.auto), b.outline = u.truthy(g.outline), u.truthy(g.random)) {
						E.vars.cache.themeKeys = E.vars.cache.themeKeys || Object.keys(b.instanceOptions.themes);
						var h = E.vars.cache.themeKeys[0 | Math.random() * E.vars.cache.themeKeys.length];
						b.theme = y(b.instanceOptions.themes[h], null)
					}
				}
				return b
			}
			function g(a) {
				var b = a.mode,
					c = a.el,
					d = a.flags,
					e = a.engineSettings,
					f = d.dimensions,
					g = d.theme,
					i = f.width + "x" + f.height;
				if (b = null == b ? d.fluid ? "fluid" : "image" : b, null != d.text && (g.text = d.text, "object" === c.nodeName.toLowerCase())) {
					for (var j = g.text.split("\\n"), m = 0; m < j.length; m++) j[m] = u.encodeHtmlEntity(j[m]);
					g.text = j.join("\\n")
				}
				var n = d.holderURL,
					o = y(e, null);
				if (d.font && (g.font = d.font, !o.noFontFallback && "img" === c.nodeName.toLowerCase() && E.setup.supportsCanvas && "svg" === o.renderer && (o = y(o, {
					renderer: "canvas"
				}))), d.font && "canvas" == o.renderer && (o.reRender = !0), "background" == b) null == c.getAttribute("data-background-src") && w.setAttr(c, {
					"data-background-src": n
				});
				else {
					var p = {};
					
					p[E.vars.dataAttr] = n, w.setAttr(c, p)
				}
				d.theme = g, c.holderData = {
					flags: d,
					engineSettings: o
				}, "image" != b && "fluid" != b || w.setAttr(c, {
					alt: g.text ? g.text + " [" + i + "]" : i
				});
				
				var q = {
					mode: b,
					el: c,
					holderSettings: {
						dimensions: f,
						theme: g,
						flags: d
					},
					
					engineSettings: o
				};
				"image" == b ? ("html" != o.renderer && d.auto || (c.style.width = f.width + "px", c.style.height = f.height + "px"), "html" == o.renderer ? c.style.backgroundColor = g.background : (h(q), "exact" == d.textmode && (c.holderData.resizeUpdate = !0, E.vars.resizableImages.push(c), k(c)))) : "background" == b && "html" != o.renderer ? h(q) : "fluid" == b && (c.holderData.resizeUpdate = !0, "%" == f.height.slice(-1) ? c.style.height = f.height : null != d.auto && d.auto || (c.style.height = f.height + "px"), "%" == f.width.slice(-1) ? c.style.width = f.width : null != d.auto && d.auto || (c.style.width = f.width + "px"), "inline" != c.style.display && "" !== c.style.display && "none" != c.style.display || (c.style.display = "block"), l(c), "html" == o.renderer ? c.style.backgroundColor = g.background : (E.vars.resizableImages.push(c), k(c)))
			}
			function h(a) {
				function c() {
					var b = null;
					switch (h.renderer) {
						case "canvas":
							b = G(k, a);
							break;
						case "svg":
							b = H(k, a);
							break;
						default:
							throw "Holder: invalid renderer: " + h.renderer
					}
					return b
				}
				var d = null,
					e = a.mode,
					f = a.el,
					g = a.holderSettings,
					h = a.engineSettings;
				switch (h.renderer) {
					case "svg":
						if (!E.setup.supportsSVG) return;
						break;
					case "canvas":
						if (!E.setup.supportsCanvas) return;
						break;
					default:
						return
				}
				var j = {
					width: g.dimensions.width,
					height: g.dimensions.height,
					theme: g.theme,
					flags: g.flags
				},
					k = i(j);
				if (null == (d = c())) throw "Holder: couldn't render placeholder";
				"background" == e ? (f.style.backgroundImage = "url(" + d + ")", f.style.backgroundSize = j.width + "px " + j.height + "px") : ("img" === f.nodeName.toLowerCase() ? w.setAttr(f, {
					src: d
				}) : "object" === f.nodeName.toLowerCase() && (w.setAttr(f, {
					data: d
				}), w.setAttr(f, {
					type: "image/svg+xml"
				})), h.reRender && b.setTimeout(function() {
					var a = c();
					
					if (null == a) throw "Holder: couldn't render placeholder";
					"img" === f.nodeName.toLowerCase() ? w.setAttr(f, {
						src: a
					}) : "object" === f.nodeName.toLowerCase() && (w.setAttr(f, {
						data: a
					}), w.setAttr(f, {
						type: "image/svg+xml"
					}))
				}, 150)), w.setAttr(f, {
					"data-holder-rendered": !0
				})
			}
			function i(a) {
				function b(a, b, c, d) {
					b.width = c, b.height = d, a.width = Math.max(a.width, b.width), a.height += b.height
				}
				var c = E.defaults.size;
				switch (parseFloat(a.theme.size) ? c = a.theme.size : parseFloat(a.flags.size) && (c = a.flags.size), a.font = {
					family: a.theme.font ? a.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
					size: j(a.width, a.height, c),
					units: a.theme.units ? a.theme.units : E.defaults.units,
					weight: a.theme.fontweight ? a.theme.fontweight : "bold"
				}, a.text = a.theme.text || Math.floor(a.width) + "x" + Math.floor(a.height), a.noWrap = a.theme.nowrap || a.flags.nowrap, a.align = a.theme.align || a.flags.align || "center", a.flags.textmode) {
					case "literal":
						a.text = a.flags.dimensions.width + "x" + a.flags.dimensions.height;
						break;
					case "exact":
						if (!a.flags.exactDimensions) break;
						a.text = Math.floor(a.flags.exactDimensions.width) + "x" + Math.floor(a.flags.exactDimensions.height)
				}
				var d = new t({
					width: a.width,
					height: a.height
				}),
					e = d.Shape,
					f = new e.Rect("holderBg", {
						fill: a.theme.background
					});
				
				if (f.resize(a.width, a.height), d.root.add(f), a.flags.outline) {
					var g = new x(f.properties.fill);
					g = g.lighten(g.lighterThan("7f7f7f") ? -.1 : .1), f.properties.outline = {
						fill: g.toHex(!0),
						width: 2
					}
				}
				var h = a.theme.foreground;
				if (a.flags.autoFg) {
					var i = new x(f.properties.fill),
						k = new x("fff"),
						l = new x("000", {
							alpha: .285714
						});
					
					h = i.blendAlpha(i.lighterThan("7f7f7f") ? l : k).toHex(!0)
				}
				var m = new e.Group("holderTextGroup", {
					text: a.text,
					align: a.align,
					font: a.font,
					fill: h
				});
				
				m.moveTo(null, null, 1), d.root.add(m);
				var n = m.textPositionData = F(d);
				if (!n) throw "Holder: staging fallback not supported yet.";
				m.properties.leading = n.boundingBox.height;
				var o = null,
					p = null,
					q = a.width * E.vars.lineWrapRatio,
					r = q;
				if (n.lineCount > 1) {
					var s, u = 0,
						v = 0,
						w = 0;
					p = new e.Group("line" + w), "left" !== a.align && "right" !== a.align || (r = a.width * (1 - 2 * (1 - E.vars.lineWrapRatio)));
					for (var y = 0; y < n.words.length; y++) {
						var z = n.words[y];
						o = new e.Text(z.text);
						var A = "\\n" == z.text;
						!a.noWrap && (u + z.width >= r || !0 === A) && (b(m, p, u, m.properties.leading), m.add(p), u = 0, v += m.properties.leading, w += 1, p = new e.Group("line" + w), p.y = v), !0 !== A && (o.moveTo(u, 0), u += n.spaceWidth + z.width, p.add(o))
					}
					if (b(m, p, u, m.properties.leading), m.add(p), "left" === a.align) m.moveTo(a.width - q, null, null);
					else if ("right" === a.align) {
						for (s in m.children) p = m.children[s], p.moveTo(a.width - p.width, null, null);
						m.moveTo(0 - (a.width - q), null, null)
					} else {
						for (s in m.children) p = m.children[s], p.moveTo((m.width - p.width) / 2, null, null);
						m.moveTo((a.width - m.width) / 2, null, null)
					}
					m.moveTo(null, (a.height - m.height) / 2, null), (a.height - m.height) / 2 < 0 && m.moveTo(null, 0, null)
				} else o = new e.Text(a.text), p = new e.Group("line0"), p.add(o), m.add(p), "left" === a.align ? m.moveTo(a.width - q, null, null) : "right" === a.align ? m.moveTo(0 - (a.width - q), null, null) : m.moveTo((a.width - n.boundingBox.width) / 2, null, null), m.moveTo(null, (a.height - n.boundingBox.height) / 2, null);
				return d
			}
			function j(a, b, c) {
				var d = parseInt(a, 10),
					e = parseInt(b, 10),
					f = Math.max(d, e),
					g = Math.min(d, e),
					h = .8 * Math.min(g, f * E.defaults.scale);
				return Math.round(Math.max(c, h))
			}
			function k(a) {
				var b;
				b = null == a || null == a.nodeType ? E.vars.resizableImages : [a];
				for (var c = 0, d = b.length; c < d; c++) {
					var e = b[c];
					if (e.holderData) {
						var f = e.holderData.flags,
							g = z(e);
						if (g) {
							if (!e.holderData.resizeUpdate) continue;
							if (f.fluid && f.auto) {
								var i = e.holderData.fluidConfig;
								switch (i.mode) {
									case "width":
										g.height = g.width / i.ratio;
										break;
									case "height":
										g.width = g.height * i.ratio
								}
							}
							var j = {
								mode: "image",
								holderSettings: {
									dimensions: g,
									theme: f.theme,
									flags: f
								},
								
								el: e,
								engineSettings: e.holderData.engineSettings
							};
							"exact" == f.textmode && (f.exactDimensions = g, j.holderSettings.dimensions = f.dimensions), h(j)
						} else o(e)
					}
				}
			}
			function l(a) {
				if (a.holderData) {
					var b = z(a);
					if (b) {
						var c = a.holderData.flags,
							d = {
								fluidHeight: "%" == c.dimensions.height.slice(-1),
								fluidWidth: "%" == c.dimensions.width.slice(-1),
								mode: null,
								initialDimensions: b
							};
						
						d.fluidWidth && !d.fluidHeight ? (d.mode = "width", d.ratio = d.initialDimensions.width / parseFloat(c.dimensions.height)) : !d.fluidWidth && d.fluidHeight && (d.mode = "height", d.ratio = parseFloat(c.dimensions.width) / d.initialDimensions.height), a.holderData.fluidConfig = d
					} else o(a)
				}
			}
			function m() {
				for (var a, c = [], d = Object.keys(E.vars.invisibleImages), e = 0, f = d.length; e < f; e++) a = E.vars.invisibleImages[d[e]], z(a) && "img" == a.nodeName.toLowerCase() && (c.push(a), delete E.vars.invisibleImages[d[e]]);
				c.length && D.run({
					images: c
				}), b.requestAnimationFrame(m)
			}
			function n() {
				E.vars.visibilityCheckStarted || (b.requestAnimationFrame(m), E.vars.visibilityCheckStarted = !0)
			}
			function o(a) {
				a.holderData.invisibleId || (E.vars.invisibleId += 1, E.vars.invisibleImages["i" + E.vars.invisibleId] = a, a.holderData.invisibleId = E.vars.invisibleId)
			}
			function p(a) {
				E.vars.debounceTimer || a.call(this), E.vars.debounceTimer && b.clearTimeout(E.vars.debounceTimer), E.vars.debounceTimer = b.setTimeout(function() {
					E.vars.debounceTimer = null, a.call(this)
				}, E.setup.debounce)
			}
			function q() {
				p(function() {
					k(null)
				})
			}
			var r = c(3),
				s = c(2),
				t = c(4),
				u = c(5),
				v = c(6),
				w = c(7),
				x = c(8),
				y = u.extend,
				z = u.dimensionCheck,
				A = "http://www.w3.org/2000/svg",
				B = "2.8.0",
				C = "\nCreated with Holder.js " + B + ".\nLearn more at http://holderjs.com\n(c) 2012-2015 Ivan Malopinsky - http://imsky.co\n",
				D = {
					version: B,
					addTheme: function(a, b) {
						return null != a && null != b && (E.settings.themes[a] = b), delete E.vars.cache.themeKeys, this
					},
					
					addImage: function(a, b) {
						var c = w.getNodeArray(b);
						if (c.length) for (var d = 0, e = c.length; d < e; d++) {
							var f = w.newEl("img"),
								g = {};
							
							g[E.setup.dataAttr] = a, w.setAttr(f, g), c[d].appendChild(f)
						}
						return this
					},
					
					setResizeUpdate: function(a, b) {
						a.holderData && (a.holderData.resizeUpdate = !! b, a.holderData.resizeUpdate && k(a))
					},
					
					run: function(a) {
						a = a || {};
						
						var c = {},
							f = y(E.settings, a);
						E.vars.preempted = !0, E.vars.dataAttr = f.dataAttr || E.setup.dataAttr, E.vars.lineWrapRatio = f.lineWrapRatio || E.setup.lineWrapRatio, c.renderer = f.renderer ? f.renderer : E.setup.renderer, -1 === E.setup.renderers.join(",").indexOf(c.renderer) && (c.renderer = E.setup.supportsSVG ? "svg" : E.setup.supportsCanvas ? "canvas" : "html");
						var h = w.getNodeArray(f.images),
							i = w.getNodeArray(f.bgnodes),
							j = w.getNodeArray(f.stylenodes),
							k = w.getNodeArray(f.objects);
						c.stylesheets = [], c.svgXMLStylesheet = !0, c.noFontFallback = !! f.noFontFallback && f.noFontFallback;
						for (var l = 0; l < j.length; l++) {
							var m = j[l];
							if (m.attributes.rel && m.attributes.href && "stylesheet" == m.attributes.rel.value) {
								var n = m.attributes.href.value,
									o = w.newEl("a");
								o.href = n;
								var p = o.protocol + "//" + o.host + o.pathname + o.search;
								c.stylesheets.push(p)
							}
						}
						for (l = 0; l < i.length; l++) if (b.getComputedStyle) {
							var q = b.getComputedStyle(i[l], null).getPropertyValue("background-image"),
								r = i[l].getAttribute("data-background-src"),
								s = r || q,
								t = null,
								v = "?" + f.domain + "/";
							if (0 === s.indexOf(v)) t = s.slice(1);
							else if (-1 != s.indexOf(v)) {
								var x = s.substr(s.indexOf(v)).slice(1),
									z = x.match(/([^\"]*)"?\)/);
								null != z && (t = z[1])
							}
							if (null != t) {
								var A = e(t, f);
								A && g({
									mode: "background",
									el: i[l],
									flags: A,
									engineSettings: c
								})
							}
						}
						for (l = 0; l < k.length; l++) {
							var B = k[l],
								C = {};
							
							try {
								C.data = B.getAttribute("data"), C.dataSrc = B.getAttribute(E.vars.dataAttr)
							} catch (L) {}
							var D = null != C.data && 0 === C.data.indexOf(f.domain),
								F = null != C.dataSrc && 0 === C.dataSrc.indexOf(f.domain);
							D ? d(f, c, C.data, B) : F && d(f, c, C.dataSrc, B)
						}
						for (l = 0; l < h.length; l++) {
							var G = h[l],
								H = {};
							
							try {
								H.src = G.getAttribute("src"), H.dataSrc = G.getAttribute(E.vars.dataAttr), H.rendered = G.getAttribute("data-holder-rendered")
							} catch (L) {}
							var I = null != H.src,
								J = null != H.dataSrc && 0 === H.dataSrc.indexOf(f.domain),
								K = null != H.rendered && "true" == H.rendered;
							I ? 0 === H.src.indexOf(f.domain) ? d(f, c, H.src, G) : J && (K ? d(f, c, H.dataSrc, G) : function(a, b, c, e, f) {
								u.imageExists(a, function(a) {
									a || d(b, c, e, f)
								})
							}(H.src, f, c, H.dataSrc, G)) : J && d(f, c, H.dataSrc, G)
						}
						return this
					}
				},
				E = {
					settings: {
						domain: "holder.js",
						images: "img",
						objects: "object",
						bgnodes: "body .holderjs",
						stylenodes: "head link.holderjs",
						themes: {
							gray: {
								background: "#EEEEEE",
								foreground: "#AAAAAA"
							},
							
							social: {
								background: "#3a5a97",
								foreground: "#FFFFFF"
							},
							
							industrial: {
								background: "#434A52",
								foreground: "#C2F200"
							},
							
							sky: {
								background: "#0D8FDB",
								foreground: "#FFFFFF"
							},
							
							vine: {
								background: "#39DBAC",
								foreground: "#1E292C"
							},
							
							lava: {
								background: "#F8591A",
								foreground: "#1C2846"
							}
						}
					},
					
					defaults: {
						size: 10,
						units: "pt",
						scale: 1 / 16
					}
				},
				F = function() {
					var a = null,
						b = null,
						c = null;
					return function(d) {
						var e = d.root;
						if (E.setup.supportsSVG) {
							var f = !1,
								g = function(a) {
									return document.createTextNode(a)
								};
							
							null != a && a.parentNode === document.body || (f = !0), a = v.initSVG(a, e.properties.width, e.properties.height), a.style.display = "block", f && (b = w.newEl("text", A), c = g(null), w.setAttr(b, {
								x: 0
							}), b.appendChild(c), a.appendChild(b), document.body.appendChild(a), a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-100%", a.style.left = "-100%");
							var h = e.children.holderTextGroup,
								i = h.properties;
							w.setAttr(b, {
								y: i.font.size,
								style: u.cssProps({
									"font-weight": i.font.weight,
									"font-size": i.font.size + i.font.units,
									"font-family": i.font.family
								})
							}), c.nodeValue = i.text;
							var j = b.getBBox(),
								k = Math.ceil(j.width / (e.properties.width * E.vars.lineWrapRatio)),
								l = i.text.split(" "),
								m = i.text.match(/\\n/g);
							k += null == m ? 0 : m.length, c.nodeValue = i.text.replace(/[ ]+/g, "");
							var n = b.getComputedTextLength(),
								o = j.width - n,
								p = Math.round(o / Math.max(1, l.length - 1)),
								q = [];
							if (k > 1) {
								c.nodeValue = "";
								for (var r = 0; r < l.length; r++) if (0 !== l[r].length) {
									c.nodeValue = u.decodeHtmlEntity(l[r]);
									var s = b.getBBox();
									
									q.push({
										text: l[r],
										width: s.width
									})
								}
							}
							return a.style.display = "none", {
								spaceWidth: p,
								lineCount: k,
								boundingBox: j,
								words: q
							}
						}
						return !1
					}
				}(),
				G = function() {
					var a = w.newEl("canvas"),
						b = null;
					return function(c) {
						null == b && (b = a.getContext("2d"));
						var d = c.root;
						a.width = E.dpr(d.properties.width), a.height = E.dpr(d.properties.height), b.textBaseline = "middle";
						var e = d.children.holderBg,
							f = E.dpr(e.width),
							g = E.dpr(e.height),
							h = 2,
							i = h / 2;
						b.fillStyle = e.properties.fill, b.fillRect(0, 0, f, g), e.properties.outline && (b.strokeStyle = e.properties.outline.fill, b.lineWidth = e.properties.outline.width, b.moveTo(i, i), b.lineTo(f - i, i), b.lineTo(f - i, g - i), b.lineTo(i, g - i), b.lineTo(i, i), b.moveTo(0, i), b.lineTo(f, g - i), b.moveTo(0, g - i), b.lineTo(f, i), b.stroke());
						var j = d.children.holderTextGroup;
						j.properties;
						b.font = j.properties.font.weight + " " + E.dpr(j.properties.font.size) + j.properties.font.units + " " + j.properties.font.family + ", monospace", b.fillStyle = j.properties.fill;
						for (var k in j.children) {
							var l = j.children[k];
							for (var m in l.children) {
								var n = l.children[m],
									o = E.dpr(j.x + l.x + n.x),
									p = E.dpr(j.y + l.y + n.y + j.properties.leading / 2);
								b.fillText(n.properties.text, o, p)
							}
						}
						return a.toDataURL("image/png")
					}
				}(),
				H = function() {
					if (b.XMLSerializer) {
						var a = w.createXML(),
							c = v.initSVG(null, 0, 0),
							d = w.newEl("rect", A);
						return c.appendChild(d), function(b, e) {
							var f = b.root;
							v.initSVG(c, f.properties.width, f.properties.height);
							for (var g = c.querySelectorAll("g"), h = 0; h < g.length; h++) g[h].parentNode.removeChild(g[h]);
							var i = e.holderSettings.flags.holderURL,
								j = "holder_" + (Number(new Date) + 32768 + (0 | 32768 * Math.random())).toString(16),
								k = w.newEl("g", A),
								l = f.children.holderTextGroup,
								m = l.properties,
								n = w.newEl("g", A),
								o = l.textPositionData,
								p = "#" + j + " text { " + u.cssProps({
									fill: m.fill,
									"font-weight": m.font.weight,
									"font-family": m.font.family + ", monospace",
									"font-size": m.font.size + m.font.units
								}) + " } ",
								q = a.createComment("\nSource URL: " + i + C),
								r = a.createCDATASection(p),
								s = c.querySelector("style"),
								t = f.children.holderBg;
							if (w.setAttr(k, {
								id: j
							}), c.insertBefore(q, c.firstChild), s.appendChild(r), k.appendChild(d), t.properties.outline) {
								var x = w.newEl("path", A),
									y = t.properties.outline.width,
									z = y / 2;
								w.setAttr(x, {
									d: ["M", z, z, "H", t.width - z, "V", t.height - z, "H", z, "V", 0, "M", 0, z, "L", t.width, t.height - z, "M", 0, t.height - z, "L", t.width, z].join(" "),
									"stroke-width": t.properties.outline.width,
									stroke: t.properties.outline.fill,
									fill: "none"
								}), k.appendChild(x)
							}
							k.appendChild(n), c.appendChild(k), w.setAttr(d, {
								width: t.width,
								height: t.height,
								fill: t.properties.fill
							}), l.y += .8 * o.boundingBox.height;
							for (var B in l.children) {
								var D = l.children[B];
								for (var E in D.children) {
									var F = D.children[E],
										G = l.x + D.x + F.x,
										H = l.y + D.y + F.y,
										I = w.newEl("text", A),
										J = document.createTextNode(null);
									w.setAttr(I, {
										x: G,
										y: H
									}), J.nodeValue = F.properties.text, I.appendChild(J), n.appendChild(I)
								}
							}
							return v.svgStringToDataURI(v.serializeSVG(c, e.engineSettings), "background" === e.mode)
						}
					}
				}();
			
			for (var I in E.flags) E.flags.hasOwnProperty(I) && (E.flags[I].match = function(a) {
				return a.match(this.regex)
			});
			
			E.setup = {
				renderer: "html",
				debounce: 100,
				ratio: 1,
				supportsCanvas: !1,
				supportsSVG: !1,
				lineWrapRatio: .9,
				dataAttr: "data-src",
				renderers: ["html", "canvas", "svg"]
			}, E.dpr = function(a) {
				return a * E.setup.ratio
			}, E.vars = {
				preempted: !1,
				resizableImages: [],
				invisibleImages: {},
				
				invisibleId: 0,
				visibilityCheckStarted: !1,
				debounceTimer: null,
				cache: {}
			}, function() {
				var a = 1,
					c = 1,
					d = w.newEl("canvas"),
					e = null;
				d.getContext && -1 != d.toDataURL("image/png").indexOf("data:image/png") && (E.setup.renderer = "canvas", e = d.getContext("2d"), E.setup.supportsCanvas = !0), E.setup.supportsCanvas && (a = b.devicePixelRatio || 1, c = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1), E.setup.ratio = a / c, document.createElementNS && document.createElementNS(A, "svg").createSVGRect && (E.setup.renderer = "svg", E.setup.supportsSVG = !0)
			}(), n(), r && r(function() {
				E.vars.preempted || D.run(), b.addEventListener ? (b.addEventListener("resize", q, !1), b.addEventListener("orientationchange", q, !1)) : b.attachEvent("onresize", q), "object" == typeof b.Turbolinks && b.document.addEventListener("page:change", function() {
					D.run()
				})
			}), a.exports = D
		}).call(b, function() {
			return this
		}())
	}, function(a, b, c) {
		var d = encodeURIComponent,
			e = decodeURIComponent,
			f = c(10),
			g = c(9),
			h = /(\w+)\[(\d+)\]/,
			i = /\w+\.\w+/;
		b.parse = function(a) {
			if ("string" != typeof a) return {};
			
			if ("" === (a = f(a))) return {};
			"?" === a.charAt(0) && (a = a.slice(1));
			for (var b = {}, c = a.split("&"), d = 0; d < c.length; d++) {
				var g, j, k, l = c[d].split("="),
					m = e(l[0]);
				if (g = h.exec(m)) b[g[1]] = b[g[1]] || [], b[g[1]][g[2]] = e(l[1]);
				else if (g = i.test(m)) {
					for (g = m.split("."), j = b; g.length;) if (k = g.shift(), k.length) {
						if (j[k]) {
							if (j[k] && "object" != typeof j[k]) break
						} else j[k] = {};
						
						g.length || (j[k] = e(l[1])), j = j[k]
					}
				} else b[l[0]] = null == l[1] ? "" : e(l[1])
			}
			return b
		}, b.stringify = function(a) {
			if (!a) return "";
			var b = [];
			for (var c in a) {
				var e = a[c];
				if ("array" != g(e)) b.push(d(c) + "=" + d(a[c]));
				else
				for (var f = 0; f < e.length; ++f) b.push(d(c + "[" + f + "]") + "=" + d(e[f]))
			}
			return b.join("&")
		}
	}, function(a, b, c) {
		function d(a) {
			function b(a) {
				if (!v) {
					if (!g.body) return e(b);
					for (v = !0; a = w.shift();) e(a)
				}
			}
			function c(a) {
				(t || a.type === i || g[m] === l) && (d(), b())
			}
			function d() {
				t ? (g[s](q, c, j), a[s](i, c, j)) : (g[o](r, c), a[o](k, c))
			}
			function e(a, b) {
				setTimeout(a, +b >= 0 ? b : 1)
			}
			function f(a) {
				v ? e(a) : w.push(a)
			}
			null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function a() {
				document.removeEventListener("DOMContentLoaded", a, !1), document.readyState = "complete"
			}, !1), document.readyState = "loading");
			var g = a.document,
				h = g.documentElement,
				i = "load",
				j = !1,
				k = "on" + i,
				l = "complete",
				m = "readyState",
				n = "attachEvent",
				o = "detachEvent",
				p = "addEventListener",
				q = "DOMContentLoaded",
				r = "onreadystatechange",
				s = "removeEventListener",
				t = p in g,
				u = j,
				v = j,
				w = [];
			if (g[m] === l) e(b);
			else if (t) g[p](q, c, j), a[p](i, c, j);
			else {
				g[n](r, c), a[n](k, c);
				try {
					u = null == a.frameElement && h
				} catch (x) {}
				u && u.doScroll &&
				function a() {
					if (!v) {
						try {
							u.doScroll("left")
						} catch (x) {
							return e(a, 50)
						}
						d(), b()
					}
				}()
			}
			return f.version = "1.4.0", f.isReady = function() {
				return v
			}, f
		}
		a.exports = "undefined" != typeof window && d(window)
	}, function(a, b, c) {
		var d = function(a) {
			function b(a, b) {
				for (var c in b) a[c] = b[c];
				return a
			}
			var c = 1,
				d = function(a) {
					c++, this.parent = null, this.children = {}, this.id = c, this.name = "n" + c, void 0 !== a && (this.name = a), this.x = this.y = this.z = 0, this.width = this.height = 0
				};
			
			d.prototype.resize = function(a, b) {
				null != a && (this.width = a), null != b && (this.height = b)
			}, d.prototype.moveTo = function(a, b, c) {
				this.x = null != a ? a : this.x, this.y = null != b ? b : this.y, this.z = null != c ? c : this.z
			}, d.prototype.add = function(a) {
				var b = a.name;
				if (void 0 !== this.children[b]) throw "SceneGraph: child already exists: " + b;
				this.children[b] = a, a.parent = this
			};
			
			var e = function() {
				d.call(this, "root"), this.properties = a
			};
			
			e.prototype = new d;
			var f = function(a, c) {
				if (d.call(this, a), this.properties = {
					fill: "#000000"
				}, void 0 !== c) b(this.properties, c);
				else if (void 0 !== a && "string" != typeof a) throw "SceneGraph: invalid node name"
			};
			
			f.prototype = new d;
			var g = function() {
				f.apply(this, arguments), this.type = "group"
			};
			
			g.prototype = new f;
			var h = function() {
				f.apply(this, arguments), this.type = "rect"
			};
			
			h.prototype = new f;
			var i = function(a) {
				f.call(this), this.type = "text", this.properties.text = a
			};
			
			i.prototype = new f;
			var j = new e;
			return this.Shape = {
				Rect: h,
				Text: i,
				Group: g
			}, this.root = j, this
		};
		
		a.exports = d
	}, function(a, b, c) {
		b.extend = function(a, b) {
			var c = {};
			
			for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
			if (null != b) for (var e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
			return c
		}, b.cssProps = function(a) {
			var b = [];
			for (var c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
			return b.join(";")
		}, b.encodeHtmlEntity = function(a) {
			for (var b = [], c = 0, d = a.length - 1; d >= 0; d--) c = a.charCodeAt(d), c > 128 ? b.unshift(["&#", c, ";"].join("")) : b.unshift(a[d]);
			return b.join("")
		}, b.imageExists = function(a, b) {
			var c = new Image;
			c.onerror = function() {
				b.call(this, !1)
			}, c.onload = function() {
				b.call(this, !0)
			}, c.src = a
		}, b.decodeHtmlEntity = function(a) {
			return a.replace(/&#(\d+);/g, function(a, b) {
				return String.fromCharCode(b)
			})
		}, b.dimensionCheck = function(a) {
			var b = {
				height: a.clientHeight,
				width: a.clientWidth
			};
			
			return !(!b.height || !b.width) && b
		}, b.truthy = function(a) {
			return "string" == typeof a ? "true" === a || "yes" === a || "1" === a || "on" === a || "✓" === a : !! a
		}
	}, function(a, b, c) {
		(function(a) {
			var d = c(7),
				e = "http://www.w3.org/2000/svg";
			b.initSVG = function(a, b, c) {
				var f, g, h = !1;
				a && a.querySelector ? null === (g = a.querySelector("style")) && (h = !0) : (a = d.newEl("svg", e), h = !0), h && (f = d.newEl("defs", e), g = d.newEl("style", e), d.setAttr(g, {
					type: "text/css"
				}), f.appendChild(g), a.appendChild(f)), a.webkitMatchesSelector && a.setAttribute("xmlns", e);
				for (var i = 0; i < a.childNodes.length; i++) 8 === a.childNodes[i].nodeType && a.removeChild(a.childNodes[i]);
				for (; g.childNodes.length;) g.removeChild(g.childNodes[0]);
				return d.setAttr(a, {
					width: b,
					height: c,
					viewBox: "0 0 " + b + " " + c,
					preserveAspectRatio: "none"
				}), a
			}, b.svgStringToDataURI = function() {
				return function(a, b) {
					return b ? "data:image/svg+xml;charset=UTF-8;base64," + btoa(unescape(encodeURIComponent(a))) : "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(a)
				}
			}(), b.serializeSVG = function(b, c) {
				if (a.XMLSerializer) {
					var e = new XMLSerializer,
						f = "",
						g = c.stylesheets;
					if (c.svgXMLStylesheet) {
						for (var h = d.createXML(), i = g.length - 1; i >= 0; i--) {
							var j = h.createProcessingInstruction("xml-stylesheet", 'href="' + g[i] + '" rel="stylesheet"');
							h.insertBefore(j, h.firstChild)
						}
						h.removeChild(h.documentElement), f = e.serializeToString(h)
					}
					var k = e.serializeToString(b);
					return k = k.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), f + k
				}
			}
		}).call(b, function() {
			return this
		}())
	}, function(a, b, c) {
		(function(a) {
			b.newEl = function(b, c) {
				if (a.document) return null == c ? document.createElement(b) : document.createElementNS(c, b)
			}, b.setAttr = function(a, b) {
				for (var c in b) a.setAttribute(c, b[c])
			}, b.createXML = function() {
				if (a.DOMParser) return (new DOMParser).parseFromString("<xml />", "application/xml")
			}, b.getNodeArray = function(b) {
				var c = null;
				return "string" == typeof b ? c = document.querySelectorAll(b) : a.NodeList && b instanceof a.NodeList ? c = b : a.Node && b instanceof a.Node ? c = [b] : a.HTMLCollection && b instanceof a.HTMLCollection ? c = b : b instanceof Array ? c = b : null === b && (c = []), c
			}
		}).call(b, function() {
			return this
		}())
	}, function(a, b, c) {
		function d(a) {
			return this.rgb = {}, this.yuv = {}, this.raw = a, this.rgb.r = (16711680 & a) >> 16, this.rgb.g = (65280 & a) >> 8, this.rgb.b = 255 & a, this.yuv.y = .2126 * this.rgb.r + .7152 * this.rgb.g + .0722 * this.rgb.b, this.yuv.u = -.09991 * this.rgb.r - .33609 * this.rgb.g + .436 * this.rgb.b, this.yuv.v = .615 * this.rgb.r - .55861 * this.rgb.g - .05639 * this.rgb.b, this
		}
		var e = function(a, b) {
			"string" == typeof a && ("#" === a.charAt(0) && (a = a.slice(1)), /[^a-f0-9]+/i.test(a) || (3 === a.length && (a = a.replace(/./g, "$&$&")), 6 === a.length && (this.alpha = 1, b && (this.alpha = b.alpha || this.alpha), d.call(this, parseInt(a, 16)))))
		};
		
		e.rgbToHex = function(a, b, c) {
			return (((0 | a) << 16) + ((0 | b) << 8) + (0 | c)).toString(16)
		}, e.prototype.lighten = function(a) {
			var b = this.rgb.r,
				c = this.rgb.g,
				d = this.rgb.b,
				f = 255 * a | 0;
			return new e(e.rgbToHex(b + f, c + f, d + f))
		}, e.prototype.toHex = function(a) {
			return (a ? "#" : "") + this.raw.toString(16)
		}, e.prototype.lighterThan = function(a) {
			return a instanceof e || (a = new e(a)), this.yuv.y > a.yuv.y
		}, e.prototype.blendAlpha = function(a) {
			a instanceof e || (a = new e(a));
			var b = a,
				c = this,
				d = b.alpha * b.rgb.r + (1 - b.alpha) * c.rgb.r,
				f = b.alpha * b.rgb.g + (1 - b.alpha) * c.rgb.g,
				g = b.alpha * b.rgb.b + (1 - b.alpha) * c.rgb.b;
			return new e(e.rgbToHex(d, f, g))
		}, a.exports = e
	}, function(a, b, c) {
		var d = Object.prototype.toString;
		a.exports = function(a) {
			switch (d.call(a)) {
				case "[object Date]":
					return "date";
				case "[object RegExp]":
					return "regexp";
				case "[object Arguments]":
					return "arguments";
				case "[object Array]":
					return "array";
				case "[object Error]":
					return "error"
			}
			return null === a ? "null" : void 0 === a ? "undefined" : a !== a ? "nan" : a && 1 === a.nodeType ? "element" : typeof(a = a.valueOf ? a.valueOf() : Object.prototype.valueOf.apply(a))
		}
	}, function(a, b, c) {
		function d(a) {
			return a.replace(/^\s*|\s*$/g, "")
		}
		b = a.exports = d, b.left = function(a) {
			return a.replace(/^\s*/, "")
		}, b.right = function(a) {
			return a.replace(/\s*$/, "")
		}
	}])
}), function(a, b) {
	b && (Holder = a.Holder)
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package), $(function() {
	$.getJSON("medias/menus.json", function(a) {
		var b = Object.values(a);
		if ($(".thematic-title").text(b[0]), $(".caderno-title").text(b[1]), b[2][paginaAtual]) {
			var c = b[2][paginaAtual].title;
			$(".page-title").text(c)
		}
		setProgress(a, paginaAtual), pagination(a), $("#sidebar-desktop .sidebar-nav, #sidebar-mobile .sidebar-nav").html(makeSummaryList(a, paginaAtual));
		var d = getSearchParameters();
		"open" == d.summary && openSummary(), "true" == d.contrast ? ($("body").addClass("contrasted"), enableContrastLinks()) : ($("body").removeClass("contrasted"), disableContrastLinks())
	}), $(".carousel").carousel({
		interval: 2e3
	})
}), $(function() {
	$("#acessilibityOpenSummary").click(function(a) {
		a.preventDefault(), acessilibityOpenSummary()
	}), $("#acessilibityScrollTop").click(function(a) {
		a.preventDefault(), acessilibityScrollTop()
	}), $("#acessilibityContrast").click(function(a) {
		a.preventDefault(), acessilibityContrast()
	}), $("#acessilibityMain").click(function(a) {
		a.preventDefault(), acessilibityMain()
	}), $(this).keydown(function(a) {
		a.preventDefault(), 49 == a.keyCode ? acessilibityMain() : 50 == a.keyCode ? acessilibityOpenSummary() : 51 == a.keyCode ? acessilibityScrollTop() : 52 == a.keyCode && acessilibityScrollBottom()
	})
}), $(function() {
	function a() {
		var a = $(this).scrollTop();
		
		Math.abs(c - a) <= d || (a > c && a > e ? $("#header").removeClass("nav-down").addClass("nav-up") : a + $(window).height() < $(document).height() && $("#header").removeClass("nav-up").addClass("nav-down"), c = a)
	}
	var b, c = 0,
		d = 5,
		e = $("#header").outerHeight();
	
	$(window).scroll(function(a) {
		b = !0
	}), setInterval(function() {
		b && (a(), b = !1)
	}, 250)
}), $(function() {
	$('[data-toggle="tooltip"]').tooltip()
}), $(function() {
	$(".sidebar-open").click(function() {
		openSummary()
	}), $(".sidebar-close-btn").click(function() {
		closeSummary()
	}), $("#sidebar-mobile-toggle").click(function() {
		$(this).toggleClass("active"), $("#sidebar-mobile").toggleClass("active"), $("body").toggleClass("modal-open")
	})
}), $(function() {
	$('a[rel="modal"]').click(function(a) {
		var b = $(this).attr("href");
		a.preventDefault(), $(b).modal()
	})
}), $(document).ready(function() {
	function a() {
		$("iframe.youtube-frame").each(function(a, b) {
			var c = $(b).attr("src"),
				d = ($(b).attr("style"), c.replace("http://www.youtube.com/embed/", ""));
			if (-1 != d.indexOf("?")) {
				var e = d.indexOf("?");
				d = d.substring(0, e)
			}
			$(b).replaceWith('<a href="http://www.youtube.com/watch?v=' + d + '" target="_new"><img src="medias/video/' + d + '.jpg" class="img-responsive"></a>'), console.log(d + " replaced")
		})
	}
	/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && a()
}), function() {
	"use strict";

	function a(a, b, c) {
		"addEventListener" in window ? a.addEventListener(b, c, !1) : "attachEvent" in window && a.attachEvent("on" + b, c)
	}
	function b(a) {
		return aa + "[" + ca + "] " + a
	}
	function c(a) {
		_ && "object" == typeof window.console && console.log(b(a))
	}
	function d(a) {
		"object" == typeof window.console && console.warn(b(a))
	}
	function e() {
		c("Initialising iFrame"), f(), i(), h("background", M), h("padding", P), o(), m(), j(), q(), n(), Z = p(), E("init", "Init message from host page")
	}
	function f() {
		function a(a) {
			return "true" === a
		}
		var b = Y.substr(ba).split(":");
		ca = b[0], N = void 0 !== b[1] ? Number(b[1]) : N, Q = void 0 !== b[2] ? a(b[2]) : Q, _ = void 0 !== b[3] ? a(b[3]) : _, $ = void 0 !== b[4] ? Number(b[4]) : $, da = void 0 !== b[5] ? a(b[5]) : da, K = void 0 !== b[6] ? a(b[6]) : K, O = b[7], W = void 0 !== b[8] ? b[8] : W, M = b[9], P = b[10], ia = void 0 !== b[11] ? Number(b[11]) : ia, Z.enable = void 0 !== b[12] && a(b[12]), fa = void 0 !== b[13] ? b[13] : fa
	}
	function g(a, b) {
		return -1 !== b.indexOf("-") && (d("Negative CSS value ignored for " + a), b = ""), b
	}
	function h(a, b) {
		void 0 !== b && "" !== b && "null" !== b && (document.body.style[a] = b, c("Body " + a + ' set to "' + b + '"'))
	}
	function i() {
		void 0 === O && (O = N + "px"), g("margin", O), h("margin", O)
	}
	function j() {
		document.documentElement.style.height = "", document.body.style.height = "", c('HTML & body height set to "auto"')
	}
	function k(b) {
		function d(c) {
			a(window, c, function() {
				E(b.eventName, b.eventType)
			})
		}
		b.eventNames && Array.prototype.map ? (b.eventName = b.eventNames[0], b.eventNames.map(d)) : d(b.eventName), c("Added event listener: " + b.eventType)
	}
	function l() {
		k({
			eventType: "Animation Start",
			eventNames: ["animationstart", "webkitAnimationStart"]
		}), k({
			eventType: "Animation Iteration",
			eventNames: ["animationiteration", "webkitAnimationIteration"]
		}), k({
			eventType: "Animation End",
			eventNames: ["animationend", "webkitAnimationEnd"]
		}), k({
			eventType: "Device Orientation Change",
			eventName: "orientationchange"
		}), k({
			eventType: "Transition End",
			eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"]
		}), k({
			eventType: "Window Clicked",
			eventName: "click"
		}), "child" === fa && k({
			eventType: "IFrame Resized",
			eventName: "resize"
		})
	}
	function m() {
		V !== W && (W in ma || (d(W + " is not a valid option for heightCalculationMethod."), W = "bodyScroll"), c('Height calculation method set to "' + W + '"'))
	}
	function n() {
		!0 === K ? (l(), t()) : c("Auto Resize disabled")
	}
	function o() {
		var a = document.createElement("div");
		a.style.clear = "both", a.style.display = "block", document.body.appendChild(a)
	}
	function p() {
		function b() {
			return {
				x: void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft,
				y: void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
			}
		}
		function e(a) {
			var c = a.getBoundingClientRect(),
				d = b();
			
			return {
				x: parseInt(c.left, 10) + parseInt(d.x, 10),
				y: parseInt(c.top, 10) + parseInt(d.y, 10)
			}
		}
		function f(a) {
			function b(a) {
				var b = e(a);
				c("Moving to in page link (#" + d + ") at x: " + b.x + " y: " + b.y), I(b.y, b.x, "scrollToOffset")
			}
			var d = a.split("#")[1] || "",
				f = decodeURIComponent(d),
				g = document.getElementById(f) || document.getElementsByName(f)[0];
			g ? b(g) : (c("In page link (#" + d + ") not found in iFrame, so sending to parent"), I(0, 0, "inPageLink", "#" + d))
		}
		function g() {
			"" !== location.hash && "#" !== location.hash && f(location.href)
		}
		function h() {
			function b(b) {
				function c(a) {
					a.preventDefault(), f(this.getAttribute("href"))
				}
				"#" !== b.getAttribute("href") && a(b, "click", c)
			}
			Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), b)
		}
		function i() {
			a(window, "hashchange", g)
		}
		function j() {
			setTimeout(g, S)
		}
		function k() {
			Array.prototype.forEach && document.querySelectorAll ? (c("Setting up location.hash handlers"), h(), i(), j()) : d("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")
		}
		return Z.enable ? k() : c("In page linking not enabled"), {
			findTarget: f
		}
	}
	function q() {
		da && (c("Enable public methods"), window.parentIFrame = {
			close: function() {
				I(0, 0, "close")
			},
			
			getId: function() {
				return ca
			},
			
			moveToAnchor: function(a) {
				Z.findTarget(a)
			},
			
			reset: function() {
				H("parentIFrame.reset")
			},
			
			scrollTo: function(a, b) {
				I(b, a, "scrollTo")
			},
			
			scrollToOffset: function(a, b) {
				I(b, a, "scrollToOffset")
			},
			
			sendMessage: function(a, b) {
				I(0, 0, "message", JSON.stringify(a), b)
			},
			
			setHeightCalculationMethod: function(a) {
				W = a, m()
			},
			
			setTargetOrigin: function(a) {
				c("Set targetOrigin: " + a), ga = a
			},
			
			size: function(a, b) {
				var c = (a || "") + (b ? "," + b : "");
				F(), E("size", "parentIFrame.size(" + c + ")", a, b)
			}
		})
	}
	function r() {
		0 !== $ && (c("setInterval: " + $ + "ms"), setInterval(function() {
			E("interval", "setInterval: " + $)
		}, Math.abs($)))
	}
	function s(b) {
		function d(b) {
			(void 0 === b.height || void 0 === b.width || 0 === b.height || 0 === b.width) && (c("Attach listerner to " + b.src), a(b, "load", function() {
				E("imageLoad", "Image loaded")
			}))
		}
		b.forEach(function(a) {
			if ("attributes" === a.type && "src" === a.attributeName) d(a.target);
			else if ("childList" === a.type) {
				var b = a.target.querySelectorAll("img");
				Array.prototype.forEach.call(b, function(a) {
					d(a)
				})
			}
		})
	}
	function t() {
		function a() {
			var a = document.querySelector("body"),
				d = {
					attributes: !0,
					attributeOldValue: !1,
					characterData: !0,
					characterDataOldValue: !1,
					childList: !0,
					subtree: !0
				},
				e = new b(function(a) {
					E("mutationObserver", "mutationObserver: " + a[0].target + " " + a[0].type), s(a)
				});
			
			c("Enable MutationObserver"), e.observe(a, d)
		}
		var b = window.MutationObserver || window.WebKitMutationObserver;
		b ? 0 > $ ? r() : a() : (d("MutationObserver not supported in this browser!"), r())
	}
	function u() {
		function a(a) {
			function b(a) {
				if (/^\d+(px)?$/i.test(a)) return parseInt(a, L);
				var b = c.style.left,
					d = c.runtimeStyle.left;
				return c.runtimeStyle.left = c.currentStyle.left, c.style.left = a || 0, a = c.style.pixelLeft, c.style.left = b, c.runtimeStyle.left = d, a
			}
			var c = document.body,
				d = 0;
			return "defaultView" in document && "getComputedStyle" in document.defaultView ? (d = document.defaultView.getComputedStyle(c, null), d = null !== d ? d[a] : 0) : d = b(c.currentStyle[a]), parseInt(d, L)
		}
		return document.body.offsetHeight + a("marginTop") + a("marginBottom")
	}
	function v() {
		return document.body.scrollHeight
	}
	function w() {
		return document.documentElement.offsetHeight
	}
	function x() {
		return document.documentElement.scrollHeight
	}
	function y() {
		for (var a = document.querySelectorAll("body *"), b = a.length, d = 0, e = (new Date).getTime(), f = 0; b > f; f++) a[f].getBoundingClientRect().bottom > d && (d = a[f].getBoundingClientRect().bottom);
		return e = (new Date).getTime() - e, c("Parsed " + b + " HTML elements"), c("LowestElement bottom position calculated in " + e + "ms"), d
	}
	function z() {
		return [u(), v(), w(), x()]
	}
	function A() {
		return Math.max.apply(null, z())
	}
	function B() {
		return Math.min.apply(null, z())
	}
	function C() {
		return Math.max(u(), y())
	}
	function D() {
		return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)
	}
	function E(a, b, d, e) {
		function f() {
			a in {
				reset: 1,
				resetPage: 1,
				init: 1
			} || c("Trigger event: " + b)
		}
		function g() {
			U = n, la = o, I(U, la, a)
		}
		function h() {
			return ja && a in R
		}
		function i() {
			function a(a, b) {
				return !(Math.abs(a - b) <= ia)
			}
			return n = void 0 !== d ? d : ma[W](), o = void 0 !== e ? e : D(), a(U, n) || Q && a(la, o)
		}
		function j() {
			return !(a in {
				init: 1,
				interval: 1,
				size: 1
			})
		}
		function k() {
			return W in ea
		}
		function l() {
			c("No change in size detected")
		}
		function m() {
			j() && k() ? H(b) : a in {
				interval: 1
			} || (f(), l())
		}
		var n, o;
		h() ? c("Trigger event cancelled: " + a) : i() || "init" === a ? (f(), F(), g()) : m()
	}
	function F() {
		ja || (ja = !0, c("Trigger event lock on")), clearTimeout(ka), ka = setTimeout(function() {
			ja = !1, c("Trigger event lock off"), c("--")
		}, S)
	}
	function G(a) {
		U = ma[W](), la = D(), I(U, la, a)
	}
	function H(a) {
		var b = W;
		W = V, c("Reset trigger event: " + a), F(), G("reset"), W = b
	}
	function I(a, b, d, e, f) {
		function g() {
			void 0 === f ? f = ga : c("Message targetOrigin: " + f)
		}
		function h() {
			var g = a + ":" + b,
				h = ca + ":" + g + ":" + d + (void 0 !== e ? ":" + e : "");
			c("Sending message to host page (" + h + ")"), ha.postMessage(aa + h, f)
		}
		g(), h()
	}
	function J(a) {
		function b() {
			return aa === ("" + a.data).substr(0, ba)
		}
		function f() {
			Y = a.data, ha = a.source, e(), T = !1, setTimeout(function() {
				X = !1
			}, S)
		}
		function g() {
			X ? c("Page reset ignored by init") : (c("Page size reset by host page"), G("resetPage"))
		}
		function h() {
			E("resizeParent", "Parent window resized")
		}
		function i() {
			return a.data.split("]")[1]
		}
		function j() {
			return "iFrameResize" in window
		}
		function k() {
			return a.data.split(":")[2] in {
				true: 1,
				false: 1
			}
		}
		if (b()) if (!1 === T) switch (i()) {
			case "reset":
				g();
				
				break;
			case "resize":
				h();
				
				break;
			default:
				j() || d("Unexpected message (" + a.data + ")")
		} else k() ? f() : c('Ignored message of type "' + i() + '". Received before initialization.')
	}
	var K = !0,
		L = 10,
		M = "",
		N = 0,
		O = "",
		P = "",
		Q = !1,
		R = {
			resize: 1,
			click: 1
		},
		S = 128,
		T = !0,
		U = 1,
		V = "offset",
		W = V,
		X = !0,
		Y = "",
		Z = {},
		$ = 32,
		_ = !1,
		aa = "[iFrameSizer]",
		ba = aa.length,
		ca = "",
		da = !1,
		ea = {
			max: 1,
			scroll: 1,
			bodyScroll: 1,
			documentElementScroll: 1
		},
		fa = "child",
		ga = "*",
		ha = window.parent,
		ia = 0,
		ja = !1,
		ka = null,
		la = 1,
		ma = {
			offset: u,
			bodyOffset: u,
			bodyScroll: v,
			documentElementOffset: w,
			scroll: x,
			documentElementScroll: x,
			max: A,
			min: B,
			grow: A,
			lowestElement: C
		};
	
	a(window, "message", J)
}(), $("#btnCalcular").click(function() {
	for (var a = 0, b = 1; b < 6; b++) a += parseInt(document.getElementById("idForm1").elements["radio" + b].value);
	document.getElementById("paragrafoResposta").innerHTML = a < 6 ? "RESULTADO: Você está próximo da filosofia do tratamento comunitário." : a < 13 ? "RESULTADO: Você está querendo se aproximar da filosofia do tratamento comunitário." : "RESULTADO: Você está caminhando muito longe da filosofia do tratamento comunitário."
});