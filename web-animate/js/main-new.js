var settime_a;
var settime_b;
$(document).ready(function() {
	settime_a = function() {
		r.css({
			"-webkit-transform": "translate(-70px,-160px)",
			"-ms-transform": "translate(-70px,-160px)",
			transform: "translate(-70px,-160px)",
			opacity: 1,
			"-webkit-transition-duration": "0.5s",
			"transition-duration": "0.5s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'

		})
	}

    settime_b = function() {
		r.css({
			"-webkit-transform": "translate(-40px,-170px)",
			"-ms-transform": "translate(-40px,-170px)",
			transform: "translate(-40px,-170px)",
			opacity: 0,
			"-webkit-transition-duration": "0.5s",
			"transition-duration": "0.5s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'

		})
	}

	function a(a, c) {
		b(c), window.isIE6 && ($(".head").hide().css({
			top: document.body.scrollTop + document.documentElement.scrollTop + "px"
		}).fadeIn(), $(".g-part").hide().css({
			top: 450 + document.body.scrollTop + document.documentElement.scrollTop + "px"
		}).fadeIn()), 1 == a ? (window.ltIE10 ? (r.animate({
					top: "453px",
					opacity: 1
				}, 4500, "easeInOutQuint"),

				m.animate({
					left: "100px",
					opacity: 1
				}, 3e3, "easeInOutQuint"),

				p.animate({
					top: "450px",
					opacity: 1
				}, 3e3, "easeInOutQuint"))

			: (r.add(m).add(p).css("transition-duration", "3s"), r.css({
					"-webkit-transform": "translate(-60px,-180px)",
					"-ms-transform": "translate(-60px,-180px)",
					transform: "translate(-60px,-180px)",
					opacity: 1,
					"-webkit-transition-duration": "1.5s",
					"transition-duration": "1.5s"
				}),

				m.css({
					"-webkit-transform": "translate(-330px,100px)",
					"-ms-transform": "translate(-330px,100px)",
					transform: "translate(-330px,100px)",
					opacity: 1,
					"-webkit-transition-delay":"1.5s",
					"-webkit-transition-delay":"1.5s"
				}),
				p.css({
					"-webkit-transform": "translate(0,-250px)",
					"-mstransform": "translate(0,-250px)",
					transform: "translate(0,-250px)",
					opacity: 1,
					"-webkit-transition-delay":"1.8s",
					"transition-delay":"1.8s"
				}),
				setTimeout('settime_a()', 1500),
				setTimeout('settime_b()', 2000)),

			w.fadeOut(), v.fadeOut(), J.fadeOut(), K.fadeOut(), L.fadeOut(), M.fadeOut(), N.fadeOut(), O.fadeOut(), s.fadeIn(), t.fadeIn(), u.fadeIn(), k.hide(), l.hide(), j.show(), $(".g-part-bottom-des").css({
				color: "#FFFFFF"
			}))

		: 2 == a ? (s.fadeOut(), t.fadeOut(), u.fadeOut(), J.fadeOut(), K.fadeOut(), L.fadeOut(), M.fadeOut(), N.fadeOut(), O.fadeOut(), w.fadeIn(), v.fadeIn(), j.hide(), l.hide(), k.show(), window.isIE6 && (k.hide(), l.hide(), j.show()), $(".g-part-bottom-des").css({
			color: "#FFFFFF"
		}), window.ltIE10 ? (x.animate({
			left: "40px"
		}, 1e3), 
	   	G.animate({
			top: "60px"
		}, 1500),
		H.animate({
			top: "60px"
		}, 1500),
		
	    I.animate({
			top: "60px"
		}, 1500)) 
		
		: ($(".s2 i").css({
			"-webkit-transition": "all  1.5s cubic-bezier(0.45, 0.32, 0.49, 0.78)",
			transition: "all  1.5s cubic-bezier(0.45, 0.32, 0.49, 0.78)"
		}), 
		
		x.css({
			height: "200px",
			width:"320px",
			left:"-8px",
			bottom:"190.5px",
			"-web-transition-duration": "1s",
			"transition-duration": "1s",
			"-webkit-transition-delay":"1s",
			"-webkit-transition-delay":"1s"
		}), 
	
		G.css({
			"-webkit-transform": "translate(220px,770px)",
			"-ms-transform": "translate(220px,770px)",
			transform: "translate(230px,770px)",
			"-web-transition-duration": "1.5s",
			"transition-duration": "1.5s",
			"-webkit-transition-delay":"2s",
			"-webkit-transition-delay":"2s"
		}), 
		
		H.css({
			"-webkit-transform": "translate(180px,770px)",
			"-ms-transform": "translate(180px,770px)",
			transform: "translate(180px,770px)",
			"-web-transition-duration": "1.5s",
			"transition-duration": "1.5s",
			"-webkit-transition-delay":"2s",
			"-webkit-transition-delay":"2s"
		}), 
		
		I.css({
			"-webkit-transform": "translate(-300px,760px)",
			"-ms-transform": "translate(-300px,760px)",
			transform: "translate(-300px,760px)",
			"-web-transition-duration": "1.5s",
			"transition-duration": "1.5s",
			"-webkit-transition-delay":"2s",
			"-webkit-transition-delay":"2s"
		}), 
		
		D.css({
			"-webkit-transform": "translate(-66px,80px)",
			"-ms-transform": "translate(-66px,80px)",
			transform: "translate(-66px,80px)",
			"-web-transition-duration": "1s",
			"transition-duration": "1s"
		}))) 
		
		: 3 == a ? (s.fadeOut(), t.fadeOut(), u.fadeOut(), L.fadeOut(), M.fadeOut(), N.fadeOut(), O.fadeOut(), w.fadeOut(), v.fadeOut(), J.fadeIn(), K.fadeIn(), j.hide(), k.hide(), l.show(), window.isIE6 && (k.hide(), l.hide(), j.show()), setTimeout(function() {
			$(".g-part-bottom-des").css({
				color: "#666666"
			})
		}, 400), P.animate({
			left: "210px",
			bottom: 0
		}, 1e3, function() {
			P.fadeOut(), R.fadeIn(function() {
				U.slideDown(function() {
					V.show(function() {
						W.show(), S.show(), T.show(function() {
							Q.show();
							for (var a = 0; a < Q.length; a++) {
								var b = Math.random(),
									c = Math.random(),
									d = 340,
									e = 180;
								Q.eq(a).animate({
									left: d * b + 50 + "px",
									top: e * c + 150 + "px"
								}, 1e3 * (b + c))
							}
						})
					})
				})
			})
		})) : 4 == a ? (s.fadeOut(), t.fadeOut(), u.fadeOut(), N.fadeOut(), O.fadeOut(), w.fadeOut(), v.fadeOut(), J.fadeOut(), K.fadeOut(), L.fadeIn(), M.fadeIn(), j.hide(), k.hide(), l.show(), window.isIE6 && (k.hide(), l.hide(), j.show()), X.animate({
			"margin-top": "-536px"
		}, 2e3), Y.animate({
			"margin-top": "-1206px"
		}, 2150), Z.animate({
			"margin-top": "-1876px"
		}, 2300), _.animate({
			"margin-top": "-2546px"
		}, 2500, function() {
			aa.animate({
				left: "90px",
				top: "110px"
			}, 1500), setTimeout(function() {
				ca.fadeIn()
			}, 200), setTimeout(function() {
				ba.fadeIn()
			}, 400)
		})) : 5 == a && (s.fadeOut(), t.fadeOut(), u.fadeOut(), L.fadeOut(), M.fadeOut(), w.fadeOut(), v.fadeOut(), J.fadeOut(), K.fadeOut(), N.fadeIn(), O.fadeIn(), j.hide(), k.hide(), l.show(), window.isIE6 && (k.hide(), l.hide(), j.show()), da.animate({
			left: "-32px"
		}, 1e3), ga.animate({
			top: "565px"
		}, 2e3), fa.animate({
			top: "320px",
			opacity: 1
		}, 3e3, function() {
			ea.show()
		}))
	}

	function b(a) {
		switch (a) {
			case 1:
				window.ltIE10 ? (r.css({
					top: "800px",
					opacity: 0
				}), o.css({
					top: "100px",
					opacity: 0
				}), m.css({
					left: "-200px",
					opacity: 0
				}), n.css({
					left: "-200px",
					opacity: 0
				}), p.css({
					left: "700px",
					opacity: 0
				}), q.css({
					left: "750px",
					opacity: 0
				})) : r.add(m).add(o).add(n).add(p).add(q).css({
					"-webkit-transition-duration": "0s",
					"transition-duration": "0s",
					"-webkit-transform": "translate(0,0)",
					"-ms-transform": "translate(0,0)",
					transform: "translate(0,0)",
					opacity: 0
				});

				break;
			case 2:
				window.ltIE10 ? (x.css({
					left: "-400px"
				}), y.css({
					bottom: "250px"
				}), z.css({
					bottom: "310px"
				}), A.css({
					bottom: "390px"
				}), B.css({
					bottom: "500px"
				}), C.css({
					bottom: "500px"
				}), H.css({
					bottom: "750px"
				}), G.css({
					top: "-250px"
				}), F.css({
					left: "0px",
					bottom: "550px"
				}), E.css({
					left: "30px",
					bottom: "550px"
				}), I.css({
					top: "-55px"
				}), D.css({
					left: "450px",
					bottom: "480px"
				})) : $(".s2 i").css({
					"-webkit-transition": "all  0s cubic-bezier(0.61, 0.04, 0, 0.96)",
					transition: "all  0s cubic-bezier(0.61, 0.04, 0, 0.96)",
					"-webkit-transform": "translate(0,0)",
					"-ms-transform": "translate(0,0)",
					transform: "translate(0,0)"
				});
				break;
			case 3:
				P.stop().css({
					left: "400px",
					bottom: "-65px"
				}).show(), R.stop().hide(), U.stop().hide(), V.stop().hide(), W.stop().hide(), T.stop().hide(), S.stop().hide(), Q.stop().hide();
				break;
			case 4:
				X.stop().css({
					"margin-top": "0px"
				}), Y.stop().css({
					"margin-top": "0px"
				}), Z.stop().css({
					"margin-top": "0px"
				}), _.stop().css({
					"margin-top": "0px"
				}), aa.stop().css({
					left: "390px",
					top: "170px"
				}), ba.stop().hide(), ca.stop().hide();
				break;
			case 5:
				da.stop().css({
					left: "-132px"
				}), ga.stop().css({
					top: "450px"
				}), fa.stop().css({
					top: "180px",
					opacity: 0
				}), ea.stop().hide()
		}
	}

	function c(a) {
		var b = document.createElement("script");
		b.src = a, b.type = "text/javascript", document.body.appendChild(b)
	}

	function d() {
		ka.hide()
	}
	var e = 450,
		f = 0,
		g = 1,
		h = 2e3,
		i = !1,
		j = ($(".s1"), $(".s2"), $(".s3"), $(".s4"), $(".s5"), $(".g-part-icon1")),
		k = $(".g-part-icon2"),
		l = $(".g-part-icon3"),
		m = $(".s1-zs"),
		n = $(".s1-computer"),
		o = $(".s1-cup"),
		p = $(".s1-kh"),
		q = $(".s1-camera"),
		r = $(".s1-finger"),
		s = $(".s1-top"),
		t = $(".g-part-title1"),
		u = $(".g-part-des1"),
		v = $(".g-part-title2"),
		w = $(".g-part-des2"),
		x = $(".s2Card"),
		y = $(".s2Ear"),
		z = $(".s2Pad"),
		A = $(".s2Ping2"),
		B = $(".s2Ping1"),
		C = $(".s2Watch"),
		D = $(".s2Cam2"),
		E = $(".s2Phone"),
		F = $(".s2Yg"),
		G = $(".s2Phone"),
		H = $(".s2Ipad"),
		I = $(".s2Car"),
		J = $(".g-part-des3"),
		K = $(".g-part-title3"),
		L = $(".g-part-des4"),
		M = $(".g-part-title4"),
		N = $(".g-part-des5"),
		O = $(".g-part-title5"),
		P = $(".s3Finger"),
		Q = $(".s3i"),
		R = $(".s3b"),
		S = $(".s3l"),
		T = $(".s3r"),
		U = $(".s3Tag"),
		V = $(".s3lphone"),
		W = $(".s3Light"),
		X = $(".s4-wrap1"),
		Y = $(".s4-wrap2"),
		Z = $(".s4-wrap3"),
		_ = $(".s4-wrap4"),
		aa = $(".s4F"),
		ba = $(".s4Q1"),
		ca = $(".s4Q2"),
		da = $(".s5Dt"),
		ea = $(".s5D"),
		fa = $(".s5P"),
		ga = $(".s5Wt");
	a(g), addEvent(document.body, "mousewheel", function(b) {
		b.preventDefault(), i || (i = !0, b.delta >= 0 ? 2 == g ? (e = 0, f = 2, g = 1) : 3 == g ? (e = 733, f = 3, g = 2) : 4 == g ? (e = 1508, f = 4, g = 3) : 5 == g && (e = 2295, f = 5, g = 4) : 1 == g ? (e = 733, f = 1, g = 2) : 2 == g ? (e = 1508, f = 2, g = 3) : 3 == g ? (e = 2295, f = 3, g = 4) : 4 == g && (e = 3125, f = 4, g = 5), window.ltIE10 ? $("#wrap").animate({
			top: -e + "px"
		}, h, "easeInOutQuint", function() {
			i = !1, a(g, f)
		}) : ($("#wrap").css({
			"-moz-transform": "translate(0px,-" + e + "px)",
			"-webkit-transform": "translate(0px,-" + e + "px)",
			"-ms-transform": "translate(0px,-" + e + "px)",
			"-o-transform": "translate(0px,-" + e + "px)",
			transform: "translate(0px,-" + e + "px)"
		}), setTimeout(function() {
			i = !1, a(g, f)
		}, 1300)))
	});
	var ha = /1[3,4,5,8]\d{8}/,
		ia = $(".dialog-content-t"),
		ja = $(".dialog-content-d"),
		ka = $(".dialog"),
		la = $(".dialog-but"),
		ma = $(".close"),
		na = !0,
		oa = $(".g-part-submit");
	window.cb = function(a) {
		1 == a ? (ia.html("发送成功"), ja.html("请在短信中点击链接，下载安装网易一元夺宝APP。"), ka.show()) : (ia.html("发送失败"), ja.html("发送失败，请用手机扫一扫屏幕中的二维码下载。"), ka.show())
	}, la.click(d), ma.click(d), oa.click(function() {
		if (na) {
			var a = $(".numInput").val();
			if (ha.test(a)) {
				na = !1, c("http://smsspub.mail.163.com/mobileserv/fsms.do?product=oneapp&template=oneand1&mobile=" + a + "&callback=cb"), oa.css({
					background: "#938A8B",
					cursor: "default"
				});
				var b = 0,
					d = 61,
					e = setInterval(function() {
						oa.html(--d), b++, b > 60 && (oa.html("发送").css({
							background: "#dd3555",
							cursor: "pointer"
						}), na = !0, clearInterval(e))
					}, 1e3)
			} else ia.html("号码不正确"), ja.html("请重新输入或者用手机扫一扫屏幕中的二维码。"), ka.show()
		}
	})
});