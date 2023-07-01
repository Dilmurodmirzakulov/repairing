let t = $("#back-top");
$(window).on("scroll", function () {
  ($scrollTop = $(window).scrollTop()),
    (t = $("#back-top")),
    $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");

  $scrollTop > 0
    ? $(".es-navbar").addClass("es-navbar-fixed")
    : $(".es-navbar").removeClass("es-navbar-fixed");
});
($htmlBody = $("html, body")),
  t.length &&
    t.on("click", function (t) {
      $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
    });
$(".es-feedbacks-slick").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
});
