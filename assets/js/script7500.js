/*! Template: TokenWiz v1.0.3 */
!(function (e) {
  "use strict";
  var t = e(window),
    a = e("body"),
    o = e(document);
  function i() {
    return t.width();
  }
  "ontouchstart" in document.documentElement || a.addClass("no-touch");
  var n = i();
  t.on("resize", function () {
    n = i();
  });
  var l = e(".is-sticky"),
    r = e(".topbar"),
    s = e(".topbar-wrap");
  if (l.length > 0) {
    var c = l.offset();
    t.scroll(function () {
      var e = t.scrollTop(),
        a = r.height();
      e > c.top
        ? l.hasClass("has-fixed") ||
          (l.addClass("has-fixed"), s.css("padding-top", a))
        : l.hasClass("has-fixed") &&
          (l.removeClass("has-fixed"), s.css("padding-top", 0));
    });
  }
  var d = e("[data-percent]");
  d.length > 0 &&
    d.each(function () {
      var t = e(this),
        a = t.data("percent");
      t.css("width", a + "%");
    });
  var p = window.location.href,
    g = p.split("#"),
    h = e("a");
  h.length > 0 &&
    h.each(function () {
      p === this.href &&
        "" !== g[1] &&
        e(this)
          .closest("li")
          .addClass("active")
          .parent()
          .closest("li")
          .addClass("active");
    });
  var f = e(".countdown-clock");
  f.length > 0 &&
    f.each(function () {
      var t = e(this),
        a = t.attr("data-date");
      t.countdown(a).on("update.countdown", function (t) {
        e(this).html(
          t.strftime(
            '<div><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">Day</span></div><div><span class="countdown-time">%H</span><span class="countdown-text">Hour</span></div><div><span class="countdown-time">%M</span><span class="countdown-text">Min</span></div><div><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">Sec</span></div>'
          )
        );
      });
    });
  var u = e(".select");
  u.length > 0 &&
    u.each(function () {
      e(this).select2({ theme: "flat" });
    });
  var v = e(".select-bordered");
  v.length > 0 &&
    v.each(function () {
      e(this).select2({ theme: "flat bordered" });
    });
  var m = ".toggle-tigger",
    b = ".toggle-class";
  e(m).length > 0 &&
    o.on("click", m, function (t) {
      var a = e(this);
      e(m).not(a).removeClass("active"),
        e(b).not(a.parent().children()).removeClass("active"),
        a.toggleClass("active").parent().find(b).toggleClass("active"),
        t.preventDefault();
    }),
    o.on("click", "body", function (t) {
      var a = e(m),
        o = e(b);
      o.is(t.target) ||
        0 !== o.has(t.target).length ||
        a.is(t.target) ||
        0 !== a.has(t.target).length ||
        (o.removeClass("active"), a.removeClass("active"));
    });
  var y = e(".toggle-nav"),
    x = e(".navbar");
  function C(e) {
    n < 991
      ? e.delay(500).addClass("navbar-mobile")
      : e.delay(500).removeClass("navbar-mobile");
  }
  y.length > 0 &&
    y.on("click", function (e) {
      y.toggleClass("active"), x.toggleClass("active"), e.preventDefault();
    }),
    o.on("click", "body", function (e) {
      y.is(e.target) ||
        0 !== y.has(e.target).length ||
        x.is(e.target) ||
        0 !== x.has(e.target).length ||
        (y.removeClass("active"), x.removeClass("active"));
    }),
    C(x),
    t.on("resize", function () {
      C(x);
    });
  var w = e(".color-trigger");
  w.length > 0 &&
    w.on("click", function () {
      var t = e(this).attr("title");
      return (
        e("body").fadeOut(function () {
          e("#layoutstyle").attr("href", "assets/css/" + t + ".css"),
            e(this).delay(150).fadeIn();
        }),
        !1
      );
    });
  var T = e(".date-picker"),
    S = e(".date-picker-dob"),
    _ = e(".time-picker");
  function D(t, a) {
    "success" === a
      ? e(t)
          .parent()
          .find(".copy-feedback")
          .text("Copied to Clipboard")
          .fadeIn()
          .delay(1e3)
          .fadeOut()
      : e(t)
          .parent()
          .find(".copy-feedback")
          .text("Faild to Copy")
          .fadeIn()
          .delay(1e3)
          .fadeOut();
  }
  T.length > 0 &&
    T.each(function () {
      e(this).datepicker({
        format: "mm/dd/yyyy",
        maxViewMode: 2,
        clearBtn: !0,
        autoclose: !0,
        todayHighlight: !0,
      });
    }),
    S.length > 0 &&
      S.each(function () {
        e(this).datepicker({
          format: "mm/dd/yyyy",
          startView: 2,
          maxViewMode: 2,
          clearBtn: !0,
          autoclose: !0,
        });
      }),
    _.length > 0 &&
      _.each(function () {
        e(this).parent().addClass("has-timepicker"),
          e(this).timepicker({ timeFormat: "HH:mm", interval: 15 });
      }),
    new ClipboardJS(".copy-clipboard")
      .on("success", function (e) {
        D(e.trigger, "success"), e.clearSelection();
      })
      .on("error", function (e) {
        D(e.trigger, "fail");
      }),
    new ClipboardJS(".copy-clipboard-modal", {
      container: document.querySelector(".modal"),
    })
      .on("success", function (e) {
        D(e.trigger, "success"), e.clearSelection();
      })
      .on("error", function (e) {
        D(e.trigger, "fail");
      });
  var z = e(".input-file");
  z.length > 0 &&
    z.each(function () {
      var t = e(this),
        a = e(this).next(),
        o = e(this).next().text();
      t.on("change", function () {
        var e = t.val();
        a.html(e), a.is(":empty") && a.html(o);
      });
    });
  var L = e(".upload-zone");
  L.length > 0 &&
    ((Dropzone.autoDiscover = !1),
    L.each(function () {
      e(this).addClass("dropzone").dropzone({ url: "/images" });
    }));
  var P = e(".image-popup");
  P.length > 0 &&
    P.magnificPopup({
      type: "image",
      preloader: !0,
      removalDelay: 400,
      mainClass: "mfp-fade",
    });
  var A = e(".dt-init");
  A.length > 0 &&
    A.DataTable({
      ordering: !1,
      autoWidth: !1,
      dom: '<t><"row align-items-center"<"col-sm-6 text-left"p><"col-sm-6 text-sm-right"i>>',
      pageLength: 3,
      bPaginate: e(".data-table tbody tr").length > 3,
      iDisplayLength: 3,
      language: {
        search: "",
        searchPlaceholder: "Type in to Search",
        info: "_START_ -_END_ of _TOTAL_",
        infoEmpty: "No records",
        infoFiltered: "( Total _MAX_  )",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Prev",
        },
      },
    });
  var F = e(".dt-filter-init");
  if (F.length > 0) {
    var O = F.DataTable({
      ordering: !1,
      autoWidth: !1,
      dom: '<"row justify-content-between pdb-1x"<"col-9 col-sm-6 text-left"f><"col-3 text-right"<"data-table-filter relative d-inline-block">>><t><"row align-items-center"<"col-sm-6 text-left"p><"col-sm-6 text-sm-right"i>>',
      pageLength: 6,
      bPaginate: e(".data-table tbody tr").length > 6,
      iDisplayLength: 6,
      language: {
        search: "",
        searchPlaceholder: "Type in to Search",
        info: "_START_ -_END_ of _TOTAL_",
        infoEmpty: "No records",
        infoFiltered: "( Total _MAX_  )",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Prev",
        },
      },
    });
    e(".data-table-filter").append(
      '<a href="#" class="btn btn-light-alt btn-xs btn-icon toggle-tigger"> <em class="ti ti-settings"></em> </a><div class="toggle-class toggle-datatable-filter dropdown-content dropdown-content-top-left text-left"><ul class="pdt-1x pdb-1x"><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" id="all" checked value=""> <label for="all">All</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" id="approved" value="approved"> <label for="approved">Approved</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" value="pending" id="pending"> <label for="pending">Pending</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" value="progress" id="progress"> <label for="progress">Progress</label></li><li class="pd-1x pdl-2x pdr-2x"> <input class="data-filter input-checkbox input-checkbox-sm" type="radio" name="filter" value="cancled" id="cancled"> <label for="cancled">Cancled</label></li></ul></div>'
    ),
      e(".data-filter").on("change", function () {
        var t = e(this).val();
        O.columns(".dt-tnxno")
          .search(t || "", !0, !1)
          .draw();
      });
  }
  var B = "tknSale";
  if (e("#" + B).length > 0) {
    var H = document.getElementById(B).getContext("2d");
    new Chart(H, {
      type: "line",
      data: {
        labels: [
          "01 Oct",
          "02 Oct",
          "03 Oct",
          "04 Oct",
          "05 Oct",
          "06 Oct",
          "07 Oct",
        ],
        datasets: [
          {
            label: "",
            tension: 0.4,
            backgroundColor: "transparent",
            borderColor: "#2c80ff",
            pointBorderColor: "#2c80ff",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#2c80ff",
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 6,
            data: [110, 80, 125, 55, 95, 75, 90],
          },
        ],
      },
      options: {
        legend: { display: !1 },
        maintainAspectRatio: !1,
        tooltips: {
          callbacks: {
            title: function (e, t) {
              return "Date : " + t.labels[e[0].index];
            },
            label: function (e, t) {
              return t.datasets[0].data[e.index] + " Tokens";
            },
          },
          backgroundColor: "#eff6ff",
          titleFontSize: 13,
          titleFontColor: "#6783b8",
          titleMarginBottom: 10,
          bodyFontColor: "#9eaecf",
          bodyFontSize: 14,
          bodySpacing: 4,
          yPadding: 15,
          xPadding: 15,
          footerMarginTop: 5,
          displayColors: !1,
        },
        scales: {
          yAxes: [
            {
              ticks: { beginAtZero: !0, fontSize: 12, fontColor: "#9eaecf" },
              gridLines: {
                color: "#e5ecf8",
                tickMarkLength: 0,
                zeroLineColor: "#e5ecf8",
              },
            },
          ],
          xAxes: [
            {
              ticks: { fontSize: 12, fontColor: "#9eaecf", source: "auto" },
              gridLines: {
                color: "transparent",
                tickMarkLength: 20,
                zeroLineColor: "#e5ecf8",
              },
            },
          ],
        },
      },
    });
  }
  e(".modal").on("shown.bs.modal", function () {
    a.hasClass("modal-open") || a.addClass("modal-open");
  });
  var M = e(".drop-toggle");
  M.length > 0 &&
    M.on("click", function (a) {
      t.width() < 991 &&
        (e(this).parent().children(".navbar-dropdown").slideToggle(400),
        e(this).parent().siblings().children(".navbar-dropdown").slideUp(400),
        e(this).parent().toggleClass("current"),
        e(this).parent().siblings().removeClass("current"),
        a.preventDefault());
    });
  var N = e(".form-validate");
  N.length > 0 &&
    N.each(function () {
      e(this).validate();
    });
  var E = e(".wizard-wrap").show();
  E.steps({
    headerTag: ".wizard-head",
    bodyTag: ".wizard-content",
    labels: {
      finish: "Submit",
      next: "Next",
      previous: "Prev",
      loading: "Loading ...",
    },
    onStepChanging: function (e, t, a) {
      return (
        t > a ||
        (t < a &&
          (E.find(".body:eq(" + a + ") label.error").remove(),
          E.find(".body:eq(" + a + ") .error").removeClass("error")),
        (E.validate().settings.ignore = ":disabled,:hidden"),
        E.valid())
      );
    },
    onFinishing: function (e, t) {
      return (E.validate().settings.ignore = ":disabled"), E.valid();
    },
    onFinished: function (e, t) {
      window.location.href = "thank-you.html";
    },
  }).validate({
    errorPlacement: function (e, t) {
      t.after(e);
    },
  });
})(jQuery);
