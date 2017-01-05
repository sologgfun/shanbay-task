//注入页面的脚本文件
;
$(function() {

//过滤广告
	var shellbay ={

		clearAd : function () {

				$(".top-banner-ad-container").remove();
				$(".ad-slot-container").remove();
				$("#comments").hide();
				$(".fc-container").remove();
				$(".js-components-container").remove();
				$(".rich-link").remove();
				$(".js-components-container").remove();
				$(".js-external-content-widget-anchor").remove();
				$(".l-footer__secondary").remove();
				$(".content__meta-container").remove();
				$(".content__labels").remove();
				$("#header").remove();
				$(".l-footer").remove();
				$(".submeta").remove();
				$("body").append("<audio id='audio' type='audio/mpeg'></audio>")
				$("#header").css("margin-top",0);

		},
//实现分页
		splitPage : function () {

				$(".content__secondary-column").html("<div id='wrapbtn' style='position:fixed;bottom:40px;right:90px;display:inline-block;z-index:1000'></div>");
				 // 通过body和window的height属性来进行分页
				 var $w = $(window);
			     var wh = $w.height();
			     var h = $('body').height();
			     var num =  Math.floor(h/wh);

			     //添加button
			     var inserticon = function (x) {
			     	var j = 1;
			     	for (var i = x; i > 0; i--) {
			     		$("#wrapbtn").append("<button type='button' class='btngroup' style='border: 1px solid transparent; color: #333;background-color: #fff;border-color: #ccc;width:40px;'>" + j + "</button>");
			     		j++;
			     	}
			     };

			     inserticon(num);

			     //button绑定事件实现分页	
			     $(".btngroup").on("click",function () {
			     	var page = $(this).text();
			     	var scrollVal = (page-1)*wh;
			     	$("body").scrollTop(scrollVal);
			     })
		},
//扇贝查词
		shellapi: function (word,x,y,z,q) {

				var $w = $(window);
			    var wh = $w.height();
			    var ww = $w.width();

				$.get("https://api.shanbay.com/bdc/search/?word="+word,
		        function(data){

		        if(data.data.content==undefined) return;


		        content = data.data.content+"<img src='http://images2015.cnblogs.com/blog/885879/201701/885879-20170104195122081-2070857638.png' width='25px' height='25px' style='margin-left:5px' id='horn' onclick=''></a>"+"<br>"+data.data.definition+"<br>"+data.data.pronunciation;
				$(".card").remove();
				var htmldiv = "<div class='card' style='display:block;'>"+content+"</div>";	
				$("body").append(htmldiv);

				//发音
				$("#horn").on("click",function () {
					$("#audio").attr("src",data.data.audio);
					document.getElementById("audio").play();
				})

				//通过判断单词在窗口的左右，改变DIV出现的位置
				if(q>(wh/2)){
					$(".card").css("top",y-100);
				}else{
				    $(".card").css("top",y+10);
				}	
				if(z>(ww/2)){
					$(".card").css("left",x-150);
				}else{
				    $(".card").css("left",x+10);
				}	

		        });
		}

	}

 		shellbay.clearAd();

 		shellbay.splitPage();

 		$(document).on('dblclick',function(e){
 			$(".selection-sharing").remove();
 			if(window.getSelection().toString()){
 			// var lastword = window.getSelection().toString();
 			shellbay.shellapi(window.getSelection().toString(),e.pageX,e.pageY,e.clientX,e.clientY);
 		}
 		});

 		$(document).on('click',function(){
 			$(".card").remove();
 		});


})


