$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight(), // высота интро
		scrollOffset = $(window).scrollTop(); //сколько мы проскролили


	/* Fixed Header */
	checkScroll(scrollOffset) //чтобы при заходе на страницу выполнялась эта функция

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop(); // Показывет значение, которое проскролленно

		checkScroll(scrollOffset);
	});


		function checkScroll(scrollOffset) {
			if( scrollOffset >=introH ) {
				header.addClass("fixed");
			} else {
				header.removeClass("fixed");
			}
		}

	/* Smooth scroll */

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data("scroll"), //Получаем id элемента 
			blockOffset = $(blockId).offset().top;

		$("nav a").removeClass("active")
		$this.addClass("active")
		$("#nav").removeClass("active")
		$("#nav_toggle").removeClass("active")


		$("html, body").animate({
			scrollTop: blockOffset
		}, 500); //500 это количество миллисекунд за которое происходит анимация

	});


	/* Menu nav toggle*/
	$("#nav_toggle").on("click", function(event){
		event.preventDefault(); /*Убирает функцию ссылки(hreaf="#")*/

		$(this).toggleClass("active")
		$("#nav").toggleClass("active")
	});


	/* Collapse */

	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
	
		var $this = $(this),
			blockId = $this.data("collapse");

		$this.toggleClass("active");
	});
	
	/* Slider */
	$("[reviews]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
  		slidesToScroll: 1
	});


});
