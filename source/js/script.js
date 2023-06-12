/* в этот файл добавляет скрипты*/
const wight = document.documentElement.clientWidth;
let items = 3;
if (wight < 1200) {
  items = 1;
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: items,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
  });
});

Fancybox.bind("[data-fancybox]", {
  // Custom options for all galleries
});
