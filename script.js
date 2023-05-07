// smooth scrolling saat user meng-klik navigasi
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// aktifkan link pada navbar saat user scroll
$(window).scroll(function () {
  $(".section").each(function () {
    if ($(window).scrollTop() >= $(this).offset().top - 10) {
      var id = $(this).attr("id");
      $(".navbar-nav a").removeClass("active");
      $('.navbar-nav a[href="#' + id + '"]').addClass("active");
    }
  });
});

// toggle navbar ketika layar kecil
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
