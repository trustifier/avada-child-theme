jQuery(document).ready(function($) {
	$(".fusion-modal").each(function(idx, m) {
		$(m).find("[data-layerslider-uid]").each(function(idx, ls) {
			$(m).on("show.bs.modal", function(event) {
				$(ls).layerSlider('data').slideshow.state.paused = false;
				$(ls).layerSlider(1);
				$(ls).layerSlider('start');
			});
			$(m).on("hide.bs.modal", function(event) {
				$(ls).layerSlider('data').slideshow.state.paused = true;
				$(ls).layerSlider('stop');
			});
		});
	});
});

