$(function(){
  const menuEl = document.getElementById("menu")
  const headercontEl = document.getElementById("header__content")

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY

    if (scrollPos > 90) {
      menuEl.classList.add("menu--fixed")
      headercontEl.classList.add("header_content--big")
    } else {
      menuEl.classList.remove("menu--fixed")
      headercontEl.classList.remove("header_content--big")
    }
  });
});

$(function() {
  $(".logo, .menu a, .header__link").on("click", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
	});
  
  $('.burger-btn, .menu a').on('click', function(){
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  var mixer = mixitup('.works__content');
})



