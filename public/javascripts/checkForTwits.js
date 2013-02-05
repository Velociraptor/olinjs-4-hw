var checkTwits = function(){
	$.get('/user/list', function(html) {
		//$('div').replaceWith(<div>'_twits'</div>);
		$('.tweets').replaceWith(html);
	});
};
setInterval(checkTwits, 1000);