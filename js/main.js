$(document).ready(function () {
  $(".tab")
    .click(function () {
      $(".tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab-item").hide().eq($(this).index()).fadeIn(1000);
    })
    .eq(0)
    .addClass("active");
  $("a.anchor").click(function () {
    $("html, body").animate(
      { scrollTop: $($.attr(this, "href")).offset().top - 70 },
      1500
    );
    $("#menu").prop("checked", false);
    $(".overlay").removeClass("active");
    $(".header").removeClass("active");
    $(".nav").removeClass("active");
    $("body").removeClass("hid");
    return false;
  });
  if ($(window).width() > "1024") {
    $(window).scroll(function () {
      var headerHeight = $(".header").height() - 20;
      var menu = $(".header");
      if ($(this).scrollTop() > headerHeight && menu.hasClass("default")) {
        menu.removeClass("default").addClass("fixed");
      } else if (
        $(this).scrollTop() <= headerHeight &&
        menu.hasClass("fixed")
      ) {
        menu.removeClass("fixed").addClass("default");
      }
    });
  }
  var acc = document.getElementsByClassName("btn-toggle");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var attach = this.nextElementSibling;
      if (attach.style.maxHeight) {
        attach.style.maxHeight = null;
      } else {
        attach.style.maxHeight = attach.scrollHeight + "%";
      }
      if (attach.style.overflow) {
        attach.style.overflow = null;
      } else {
        attach.style.overflow = attach.scrollHeight = "inherit";
      }
      $(this).siblings(".box-line-one").slideToggle(600);
      $(this).prev(".toggle").toggleClass("active");
    });
  }
  $("body").on("click", ".btn-lg", function () {
    $(".list-lg").slideToggle(200);
    $(this).toggleClass("active");
  });
  $("body").on("click", ".menu", function () {
    $(".overlay").toggleClass("active");
    $(".header").toggleClass("active");
    $(".nav").toggleClass("active");
    $("body").toggleClass("hid");
  });
  $("body").on("click", ".overlay", function () {
    $(this).removeClass("active");
    $(".nav").removeClass("active");
    $(".header").removeClass("active");
    $("#menu").prop("checked", false);
    $("body").removeClass("hid");
  });
  $(".btn-m").click(function () {
    var buttonId = $(this).attr("id");
    $("#modal-container").removeAttr("class").addClass(buttonId);
    $("body").addClass("modal-active");
  });
  $("#modal-container").click(function () {
    $(this).addClass("out");
    $("body").removeClass("modal-active");
    $("#if").remove();
  });
  !(function () {
    var a = function (a, b) {
        var c = document.createElement("canvas");
        "undefined" != typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(c);
        var d = c.getContext("2d");
        if (
          ((c.width = c.height = b.size),
          a.appendChild(c),
          window.devicePixelRatio > 1)
        ) {
          var e = window.devicePixelRatio;
          (c.style.width = c.style.height = [b.size, "px"].join("")),
            (c.width = c.height = b.size * e),
            d.scale(e, e);
        }
        d.translate(b.size / 2, b.size / 2),
          d.rotate((-0.5 + b.rotate / 180) * Math.PI);
        var f = (b.size - b.lineWidth) / 2;
        b.scaleColor && b.scaleLength && (f -= b.scaleLength + 2);
        var g = function (a, b, c) {
            (c = Math.min(Math.max(0, c || 1), 1)),
              d.beginPath(),
              d.arc(0, 0, f, 0, 2 * Math.PI * c, !1),
              (d.strokeStyle = a),
              (d.lineWidth = b),
              d.stroke();
          },
          h = function () {
            var a,
              c,
              e = 24;
            (d.lineWidth = 1), (d.fillStyle = b.scaleColor), d.save();
            for (var e = 24; e >= 0; --e)
              0 === e % 6
                ? ((c = b.scaleLength), (a = 0))
                : ((c = 0.6 * b.scaleLength), (a = b.scaleLength - c)),
                d.fillRect(-b.size / 2 + a, 0, c, 1),
                d.rotate(Math.PI / 12);
            d.restore();
          };
        Date.now =
          Date.now ||
          function () {
            return +new Date();
          };
        var i = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (a) {
              window.setTimeout(a, 1e3 / 60);
            }
          );
        })();
        (this.clear = function () {
          d.clearRect(b.size / -2, b.size / -2, b.size, b.size);
        }),
          (this.draw = function (a) {
            this.clear(),
              b.scaleColor && h(),
              b.trackColor && g(b.trackColor, b.lineWidth),
              (d.lineCap = b.lineCap);
            var c;
            (c = "function" == typeof b.barColor ? b.barColor(a) : b.barColor),
              a > 0 && g(c, b.lineWidth, a / 100);
          }.bind(this)),
          (this.animate = function (a, c) {
            var d = Date.now();
            b.onStart(a, c);
            var e = function () {
              var f = Math.min(Date.now() - d, b.animate),
                g = b.easing(this, f, a, c - a, b.animate);
              this.draw(g),
                b.onStep(a, c, g),
                f >= b.animate ? b.onStop(a, c) : i(e);
            }.bind(this);
            i(e);
          }.bind(this));
      },
      b = function (b, c) {
        var d,
          e = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            size: 110,
            rotate: 180,
            animate: 1e3,
            renderer: a,
            easing: function (a, b, c, d, e) {
              return (b /= e / 2) < 1
                ? (d / 2) * b * b + c
                : (-d / 2) * (--b * (b - 2) - 1) + c;
            },
            onStart: function () {},
            onStep: function () {},
            onStop: function () {},
          },
          f = {},
          g = 0,
          h = function () {
            (this.el = b), (this.options = f);
            for (var a in e)
              e.hasOwnProperty(a) &&
                ((f[a] = c && "undefined" != typeof c[a] ? c[a] : e[a]),
                "function" == typeof f[a] && (f[a] = f[a].bind(this)));
            (f.easing =
              "string" == typeof f.easing &&
              "undefined" != typeof jQuery &&
              jQuery.isFunction(jQuery.easing[f.easing])
                ? jQuery.easing[f.easing]
                : e.easing),
              (d = new f.renderer(b, f)),
              d.draw(g),
              b.dataset &&
                b.dataset.percent &&
                this.update(parseInt(b.dataset.percent, 10));
          }.bind(this);
        (this.update = function (a) {
          return (
            (a = parseInt(a, 10)),
            f.animate ? d.animate(g, a) : d.draw(a),
            (g = a),
            this
          );
        }.bind(this)),
          h();
      };
    window.EasyPieChart = b;
  })();
  var options = {
    scaleColor: false,
    trackColor: "#deeafa",
    barColor: "#ff5284",
    lineWidth: 5,
    lineCap: "butt",
    size: 400,
  };
  window.addEventListener("DOMContentLoaded", function () {
    var charts = [];
    [].forEach.call(document.querySelectorAll(".circle"), function (el) {
      charts.push(new EasyPieChart(el, options));
    });
  });
  window.addEventListener("DOMContentLoaded", function () {
    var charts = [];
    [].forEach.call(document.querySelectorAll(".circle-2"), function (el) {
      charts.push(
        new EasyPieChart(
          el,
          (options = {
            scaleColor: false,
            trackColor: "#deeafa",
            barColor: "#4c58c8",
            lineWidth: 5,
            lineCap: "butt",
            size: 370,
          })
        )
      );
    });
  });
  window.addEventListener("DOMContentLoaded", function () {
    var charts = [];
    [].forEach.call(document.querySelectorAll(".circle-3"), function (el) {
      charts.push(
        new EasyPieChart(
          el,
          (options = {
            scaleColor: false,
            trackColor: "#deeafa",
            barColor: "#13d92a",
            lineWidth: 5,
            lineCap: "butt",
            size: 340,
          })
        )
      );
    });
  });
  var copyEmailBtn = document.querySelector(".js-linkcopybtn");
  copyEmailBtn.addEventListener("click", function (event) {
    var emailLink = document.querySelector(".js-linkslink");
    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copy email command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }
    window.getSelection().removeAllRanges();
  });
});
