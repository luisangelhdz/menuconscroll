$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		console.log(scroll);
		if(scroll != 00){
			if(!flag){
				$("#parra").css({"display": "block"});
				$("#logo").css({"margin-top": "-5px", "width": "auto","height":"auto"});

				$("header").css({"background-color": "#000"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "auto","height":"auto"});
				$("#parra").css({"display": "none"});
				$("#parra").className = "fadeOutLeftBig";
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});
