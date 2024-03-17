$(document).ready(function () {
  calculate();
  var moneyElem = $("#calc_sum");
  moneyElem.keyup(calculate);
  moneyElem.keypress(function (e) {
    e = e || event;
    var chr = getChar(e);
    if (e.ctrlKey || e.altKey || chr == null) return;
    if ((chr < "0" && chr != ".") || (chr > "9" && chr != ".")) return false;
  });
  function calculate() {
    var invest = $("#calc_sum").val();
    if (!Number(invest) || Number(invest) < 0.01) invest = 0;
    var percent = 0.0144;
    $("#calc_day").text(round(invest * percent * 1));
    $("#calc_month").text(round(invest * percent * 30));
    $("#calc_year").text(round(invest * percent * 365));
  }
  function round(val) {
    return Math.ceil(val * 10000) / 10000;
  }
  function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode);
    }
    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which);
    }
    return null;
  }
  $(".btn-m").click(function () {
    var buttonId = $(this).attr("id");
    $("#modal-container").removeAttr("class").addClass(buttonId);
    $("body").addClass("modal-active");
    var lang = document.documentElement.lang;
    var video_url;
    if (lang == "ru") video_url = "https://www.youtube.com/embed/2rg1J35mJvU";
    if (lang == "en" || lang == "ch")
      video_url = "https://www.youtube.com/embed/UF9cJNyV9yU";
    $(".frame-box").append(
      '<iframe id="if" width="100%" height="100%" src="' +
        video_url +
        '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    );
  });
});
