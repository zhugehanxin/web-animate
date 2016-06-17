var settime_a;
var settime_b;
var settime_m;
var settime_p;

var settime_s3a;
var settime_s3b;
var settime_s3c;
var settime_s3d;
var settime_s3e;
var settime_s3f;
var settime_s3g;
var settime_s3h;
var settime_s3i;
var settime_y;
var settime_bb;
var settime_r;
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

	settime_m = function() {
		m.css({
			"-webkit-transform": "translate(-330px,100px)",
			"-ms-transform": "translate(-330px,100px)",
			transform: "translate(-330px,100px)",
			opacity: 1,
			"-webkit-transition-duration": "1.5s",
			"transition-duration": "1.5s"
		})
	}

	settime_p = function() {
		p.css({
			"-webkit-transform": "translate(0,-250px)",
			"-mstransform": "translate(0,-250px)",
			transform: "translate(0,-250px)",
			opacity: 1,
			"-webkit-transition-duration": "2s",
			"transition-duration": "2s"
		})
	}

	settime_s3a = function() {
		Q.css({
			"-webkit-transform": "translate(-160px,-235px)",
			"-ms-transform": "translate(-160px,-235px)",
			transform: "translate(-160px,-235px)",
			"-webkit-transition-duration": "0.3s",
			"transition-duration": "0.3s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'
		})
	}

	settime_s3b = function() {
		Q.css({
			"-webkit-transform": "translate(-160px,-250px)",
			"-ms-transform": "translate(-160px,-250px)",
			transform: "translate(-160px,-250px)",
			"-webkit-transition-duration": "0.3s",
			"transition-duration": "0.3s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'
		})
	}

	settime_s3c = function() {
		Q.css({
			"-webkit-transform": "translate(-60px,-250px)",
			"-ms-transform": "translate(-60px,-250px)",
			transform: "translate(-60px,-250px)",
			"-webkit-transition-duration": "0.3s",
			"transition-duration": "0.3s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'
		})
	}

	settime_s3d = function() {
		Q.css({
			"-webkit-transform": "translate(-270px,100px)",
			"-ms-transform": "translate(-270px,100px)",
			transform: "translate(-270px,100px)",
			"-webkit-transition-duration": "0.8s",
			"transition-duration": "0.8s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'
		})
	}

	settime_s3e = function() {
		U.css({
			"background": "url('img/p3-phone3.png')",
		})
		Q.css({
			"-webkit-transform": "translate(-270px,80px)",
			"-ms-transform": "translate(-270px,80px)",
			transform: "translate(-270px,80px)",
			"-webkit-transition-duration": "0.2s",
			"transition-duration": "0.2s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'
		})
	}

	settime_s3f = function() {
		U.css({
			"background": "url('img/p3-phone2.png')",
		})
		Q.css({
			"-webkit-transform": "translate(-270px,100px)",
			"-ms-transform": "translate(-270px,100px)",
			transform: "translate(-270px,100px)",
			"-webkit-transition-duration": "0.2s",
			"transition-duration": "0.2s",
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'
		})
	}

	settime_s3g = function() {
		U.css({
			"background": "url('img/p3-phone2.png')",
			"-webkit-transition-duration": "0.4s",
			"transition-duration": "0.4s",
		})
	}

	settime_s3h = function() {
		Q.css({
			"-webkit-transform": "translate(-270px,100px)",
			"-ms-transform": "translate(-270px,100px)",
			transform: "translate(-200px,280px)",
			"-webkit-transition-duration": "0.8s",
			"transition-duration": "0.8s",
			opacity: 0,
			"transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-transition-timing-function": 'cubic-bezier(0.25, .04, 0.75, .96)'
		})
	}
	
	settime_s3i = function(){
		U.css({
			"background": "url('img/p3-phone4.png')",
			"-webkit-transition-duration": "0.3s",
			"transition-duration": "0.3s",
		})
	}

	settime_y = function() {
		Y.css({
			"-webkit-animation-name": 'yellow',
			"animation-name": 'yellow',
			"-webkit-animation-duration": "1s",
			"animation-duration": "1s",
			opacity: 1,
			"-webkit-animation-timing-function":  'cubic-bezier(0.25, .04, 0.75, .96)',
			"animation-timing-function":  'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-animation-direction": "alternate",
			"animation-direction": "alternate",
			"-webkit-animation-iteration-count": "infinite",
			"animation-iteration-count": "infinite"
		})
	}

	settime_r = function() {
		R.css({
			"-webkit-animation-name": 'red',
			"animation-name": 'red',
			"-webkit-animation-duration": "0.7s",
			"animation-duration": "0.7s",
			opacity: 1,
			"-webkit-animation-timing-function":  'cubic-bezier(0.25, .04, 0.75, .96)',
			"animation-timing-function":  'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-animation-direction": "alternate",
			"animation-direction": "alternate",
			"-webkit-animation-iteration-count": "infinite",
			"animation-iteration-count": "infinite"
		})
	}

	settime_bb = function() {
		bb.css({
			"-webkit-animation-name": 'blue',
			"animation-name": 'blue',
			"-webkit-animation-duration": "0.7s",
			"animation-duration": "0.7s",
			opacity: 1,
			"-webkit-animation-timing-function":  'cubic-bezier(0.25, .04, 0.75, .96)',
			"animation-timing-function":  'cubic-bezier(0.25, .04, 0.75, .96)',
			"-webkit-animation-direction": "alternate",
			"animation-direction": "alternate",
			"-webkit-animation-iteration-count": "infinite",
			"animation-iteration-count": "infinite"
		})
	}

	function a(a, c) {
		b(c), window.isIE6 && ($(".head").hide().css({
			top: document.body.scrollTop + document.documentElement.scrollTop + "px"
		}).fadeIn(), $(".g-part").hide().css({
			top: 450 + document.body.scrollTop + document.documentElement.scrollTop + "px"
		}).fadeIn()), 1 == a ? (w.fadeOut(), v.fadeOut(), J.fadeOut(), K.fadeOut(), L.fadeOut(), M.fadeOut(), N.fadeOut(), O.fadeOut(), t.fadeIn(), u.fadeIn(), j.show(),
			window.ltIE10 ? (r.animate({
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

			: (r.css({
					"-webkit-transform": "translate(-60px,-180px)",
					"-ms-transform": "translate(-60px,-180px)",
					transform: "translate(-60px,-180px)",
					opacity: 1,
					"-webkit-transition-duration": "1.2s",
					"transition-duration": "1.2s"
				}),
				_a = setTimeout('settime_a()', 1500),
				_m = setTimeout('settime_m()', 1800),
				_p = setTimeout('settime_p()', 1600),
				_b = setTimeout('settime_b()', 2000))
		)

		: 2 == a ? (t.fadeOut(), u.fadeOut(), J.fadeOut(), K.fadeOut(), L.fadeOut(), M.fadeOut(),
			N.fadeOut(), O.fadeOut(), w.fadeIn(), v.fadeIn(), j.hide(),
			window.isIE6 && (j.show()),
			window.ltIE10 ? (x.animate({
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

			: (
				x.css({
					height: "275px",
					width: "440px",
					left: "-68px",
					bottom: "240.5px",
					opacity: 1,
					"-web-transition-duration": "1s",
					"transition-duration": "1s",
					"-webkit-transition-delay": "0.5s",
					"-webkit-transition-delay": "0.5s"
				}),

				G.css({
					"-webkit-transform": "translate(250px,770px)",
					"-ms-transform": "translate(250px,770px)",
					transform: "translate(250px,770px)",
					"-web-transition-duration": "1.5s",
					"transition-duration": "1.5s",
					"-webkit-transition-delay": "2s",
					"-webkit-transition-delay": "2s"
				}),

				H.css({
					"-webkit-transform": "translate(230px,790px)",
					"-ms-transform": "translate(230px,790px)",
					transform: "translate(230px,790px)",
					"-web-transition-duration": "1.5s",
					"transition-duration": "1.5s",
					"-webkit-transition-delay": "2s",
					"-webkit-transition-delay": "2s"
				}),

				I.css({
					"-webkit-transform": "translate(-300px,760px)",
					"-ms-transform": "translate(-300px,760px)",
					transform: "translate(-300px,760px)",
					"-webit-transition-duration": "1.5s",
					"transition-duration": "1.5s",
					"-webkit-transition-delay": "2s",
					"-webkit-transition-delay": "2s"
				}),

				F.css({
					"-webkit-transform": "translate(150px,780px)",
					"-ms-transform": "translate(150px,780px)",
					transform: "translate(150px,780px)",
					"-web-transition-duration": "1.5s",
					"transition-duration": "1.5s",
					"-webkit-transition-delay": "2s",
					"-webkit-transition-delay": "2s"
				}),

				E.css({
					"-webkit-transform": "translate(170px,815px)",
					"-ms-transform": "translate(170px,815px)",
					transform: "translate(170px,815px)",
					"-web-transition-duration": "1.5s",
					"transition-duration": "1.5s",
					"-webkit-transition-delay": "2s",
					"-webkit-transition-delay": "2s"
				})
			))

		: 3 == a ? (t.fadeOut(), u.fadeOut(), L.fadeOut(), M.fadeOut(), N.fadeOut(), O.fadeOut(), w.fadeOut(), v.fadeOut(), J.fadeIn(), K.fadeIn(), j.hide(), window.isIE6 && (j.show()),
			window.ltIE10 ? (Q.animate({
				left: "40px"
			}, 1e3)) : (
				Q.css({
					"-webkit-transform": "translate(-160px,-250px)",
					"-ms-transform": "translate(-160px,-250px)",
					transform: "translate(-160px,-250px)",
					opacity: 1,
					"-webkit-transition-duration": "1.5s",
					"transition-duration": "1.5s"
				}),
				_s3a = setTimeout('settime_s3a()', 1500),
				_s3b = setTimeout('settime_s3b()', 1800),
				_s3c = setTimeout('settime_s3c()', 2100),
				_s3d = setTimeout('settime_s3d()', 2800),
				_s3g = setTimeout('settime_s3g()', 2200),
				_s3e = setTimeout('settime_s3e()', 3700),
				_s3f = setTimeout('settime_s3f()', 3900),
				_s3i = setTimeout('settime_s3i()', 4200),
				_s3h = setTimeout('settime_s3h()', 4100)
			))

		: 4 == a && (t.fadeOut(), u.fadeOut(), N.fadeOut(), O.fadeOut(), w.fadeOut(), v.fadeOut(), J.fadeOut(), K.fadeOut(), L.fadeIn(), M.fadeIn(), j.hide(), window.isIE6 && (j.show()),
			window.ltIE10 ? (C.animate({
				left: "40px"
			}, 1e3)) : (
				C.css({
					"animation-name": 'mov',
					"-webkit-animation-name": 'mov',
					"-ms-animation-name": 'mov',
					"-o-animation-name": 'mov',
					"-o-animation-duration": "1s",
					"animation-duration": "1s",
					"-webkit-animation-duration": "1s",
					"-ms-animation-duration": "1s",
					"-o-animation-timing-function": "linear",
					"animation-timing-function": "linear",
					"-webkit-animation-timing-function": "linear",
					"-ms-animation-timing-function": "linear",
					"-o-animation-direction": "alternate",
					"animation-direction": "alternate",
					"-webkit-animation-direction": "alternate",
					"-ms-animation-direction": "alternate",
					"animation-iteration-count": "2",
					"-o-animation-iteration-count": "2",
					"-webkit-animation-iteration-count": "2",
					"-ms-animation-iteration-count": "2"
				}),
				setTimeout('settime_y()', 1500),
				setTimeout('settime_r()', 1500),
				setTimeout('settime_bb()', 1500)

			))
	}

	function b(a) {
		switch (a) {
			case 1:
				window.ltIE10 ? (r.css({
					top: "800px",
					opacity: 0
				}), m.css({
					left: "-200px",
					opacity: 0
				}), p.css({
					left: "700px",
					opacity: 0
				})) : (
					r.stop().css({
						"-webkit-transition-duration": "0s",
						"transition-duration": "0s",
						"-webkit-transform": "translate(0,0)",
						"-ms-transform": "translate(0,0)",
						transform: "translate(0,0)",
						opacity: 0
					}),
					m.stop().css({
						"-webkit-transition-duration": "0s",
						"transition-duration": "0s",
						"-webkit-transform": "translate(0,0)",
						"-ms-transform": "translate(0,0)",
						transform: "translate(0,0)",
						opacity: 0
					}),
					p.stop().css({
						"-webkit-transition-duration": "0s",
						"transition-duration": "0s",
						"-webkit-transform": "translate(0,0)",
						"-ms-transform": "translate(0,0)",
						transform: "translate(0,0)",
						opacity: 0
					}),
					clearTimeout(_a),
					clearTimeout(_b),
					clearTimeout(_p),
					clearTimeout(_m)
				);
				break;
			case 2:
				window.ltIE10 ? (x.css({
					left: "-400px"
				}), H.css({
					bottom: "750px"
				}), G.css({
					top: "-250px"
				}), I.css({
					top: "-55px"
				}))

				: (G.add(H).add(I).add(F).add(E).css({
						"-webkit-transition-duration": "0s",
						"transition-duration": "0s",
						"-webkit-transition": "all  0s cubic-bezier(0.61, 0.04, 0, 0.96)",
						transition: "all  0s cubic-bezier(0.61, 0.04, 0, 0.96)",
						"-webkit-transform": "translate(0,0)",
						"-ms-transform": "translate(0,0)",
						transform: "translate(0,0)"
					}),
					x.stop().css({
						width: "200px",
						height: "125px",
						left: "52px",
						bottom: "138px",
						"-webkit-transition-duration": "0s",
						"transition-duration": "0s"
					}));
				break;

			case 3:
				window.ltIE10 ? (Q.animate({
					left: "-400px"
				})) : (Q.stop().css({
						"-webkit-transition-duration": "0s",
						"transition-duration": "0s",
						"-webkit-transition": "all  0s cubic-bezier(0.61, 0.04, 0, 0.96)",
						transition: "all  0s cubic-bezier(0.61, 0.04, 0, 0.96)",
						"-webkit-transform": "translate(0,0)",
						"-ms-transform": "translate(0,0)",
						transform: "translate(0,0)"
					}),
					U.stop().css({
						"background": "url('img/p3-phone1.png')",
						"-webkit-transition-duration": "0s",
						"transition-duration": "0s"
					}),
				clearTimeout(_s3a),
				clearTimeout(_s3b),
				clearTimeout(_s3c),
				clearTimeout(_s3d),
				clearTimeout(_s3e),
				clearTimeout(_s3f),
				clearTimeout(_s3g),
				clearTimeout(_s3i),
				clearTimeout(_s3h)
				);
				break;

			case 4:
				window.ltIE10 ? (C.animate({
					left: "-400px"
				})) : (C.stop().css({
						"-webkit-animation-name": ''
					}),
					Y.stop().css({
						"-webkit-animation-name": '',
						opacity: 0
					}),
					R.stop().css({
						"-webkit-animation-name": '',
						opacity: 0
					}),
					bb.stop().css({
						"-webkit-animation-name": '',
						opacity: 0
					})
				);
				break;
		}
	}

	function c(a) {
		var b = document.createElement("script");
		b.src = a, b.type = "text/javascript", document.body.appendChild(b)
	}

	var e = 450,
		f = 0,
		g = 1,
		h = 2e3,
		i = !1,
		j = ($(".s1"), $(".s2"), $(".s3"), $(".s4"), $(".s5")),

		m = $(".s1-zs"),
		p = $(".s1-kh"),
		r = $(".s1-finger"),

		t = $(".g-part-title1"),
		u = $(".g-part-des1"),
		v = $(".g-part-title2"),
		w = $(".g-part-des2"),
		J = $(".g-part-des3"),
		K = $(".g-part-title3"),
		L = $(".g-part-des4"),
		M = $(".g-part-title4"),
		N = $(".g-part-des5"),
		O = $(".g-part-title5"),
		
		x = $(".s2Card"),
		G = $(".s2Phone"),
		H = $(".s2Ipad"),
		I = $(".s2Car"),
		E = $(".s2-camera"),
		F = $(".s2-pc"),

		U = $(".s3-phone"),
		Q = $(".s3-finger"),

		C = $(".s4B-hat"),
		Y = $(".s4B-stars-y"),
		bb = $(".s4B-stars-b"),
		R = $(".s4B-stars-r");
	a(g), addEvent(document.body, "mousewheel", function(b) {
		b.preventDefault(), i || (i = !0, b.delta >= 0 ? 2 == g ? (e = 0, f = 2, g = 1) : 3 == g ? (e = 733, f = 3, g = 2) : 4 == g && (e = 1508, f = 4, g = 3)
			//		: 5 == g && (e = 2295, f = 5, g = 4) 
			: 1 == g ? (e = 733, f = 1, g = 2) : 2 == g ? (e = 1508, f = 2, g = 3) : 3 == g && (e = 2295, f = 3, g = 4)
			//		: 4 == g && (e = 3125, f = 4, g = 5)
			,
			window.ltIE10 ? $("#wrap").animate({
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
});