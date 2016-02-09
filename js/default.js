var tmp = '';
var tmp2 = 0;
var height = 0;
$(document).ready(function(e){
	startScroll();
});


var infinityScroll = function() {	
	$('.hack-bg').animate({ scrollTop: height }, 2000,'linear',function(){	
		height = height + tmp2;
		infinityScroll();
	});
	$('.hack-bg').append(tmp);
}

var startScroll = function(){
	$.get("js/hacklorem.js",function(data){
		tmp = data;
		$('.hack-bg').append(tmp);
		tmp2 = height = $('.hack-bg').height() / 2;
		infinityScroll();
	});
}

$(document).ready(function(e){
	$('.typist')
	.typist({
		speed: 14,
		text: 'welcome.'
	})
	.typistPause(1500)
	.typistRemove(8)
	.typistPause(1500)
	.typistAdd('Are you ready to build?')
	.typistPause(1500)
	.typistRemove(6)
	.typistPause(500)
	.typistAdd('#HackManipal?')
	
	.typistPause(1000,function(){
		$('.fade-first').animate({
			'opacity':'0.7'
		},200,'linear',function(){
			$('.fade-second').animate({
				'opacity':'1'
			},2000,'linear',function(e){
				$('.typist').typistAdd('\n\ncoming soon.');
			});	
		});
	})
	// .typistAdd('\n\ncoming soon.')
	;

});