$(function(){
        $('#lotteryBtn').click(function () {
           lottery();
        });
		
		function lottery(){ 
			$.ajax({ 
				type: 'POST', 
				url: 'data.php', 
				dataType: 'json', 
				cache: false, 
				error: function(){ 
					alert('出错了！'); 
					return false; 
				}, 
				success:function(json){ 
					var a = json.angle; //角度 
					var p = json.prize; //奖项 
					$('#lotteryBtn').rotate({
						duration:5000, //转动时间 
						angle: 0, 
						animateTo:1440+a, //转动角度 
						//easing: $.easing.easeOutSine, 
						callback: function(){ 
							$('#resultTxt').html(p);
							$('.result').show();
						} 
					}); 
				} 
			}); 
		}
		
		 $('#resultBtn').click(function(){
            $('.result').hide();
        });
        /* function rotateFunc(awards,angle,text) {  //awards：奖项  angle：奖项对应的角度  text:奖项的文字内容
            $('#lotteryBtn').stopRotate();
            $('#lotteryBtn').rotate({
                angle:0,
                duration:5000,
                animateTo:angle+1440, //angle是图片上各奖项对应的角度，1440是让指针固定旋转4圈
                callback:function () {
                    $('#resultTxt').html(text);
                    $('.result').show();
                }
            });
            
        } */

       
		
    })