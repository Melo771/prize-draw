$(function(){
        $('#lotteryBtn').click(function () {
            var data = [0,1,2,3,4,5];
            data = data[Math.floor(Math.random()*data.length)];
            switch (data){
                case 1:
                    rotateFunc(1,120,'恭喜您获得了1元代金券');
                    break;
                case 2:
                    rotateFunc(2,300,'恭喜您获得了5元代金券')
                    break;
                case 3:
                    rotateFunc(3,0,'恭喜您获得了10元代金券')
                    break;
                case 4:
                    rotateFunc(4,240,'恭喜您获得了20元代金券')
                    break;
                case 5:
                    rotateFunc(5,60,'恭喜您获得了50元代金券')
                    break;
                case 0:
                    rotateFunc(0,180,'恭喜您获得了100元代金券')
                    break;

            }
        });

        function rotateFunc(awards,angle,text) {  //awards：奖项  angle：奖项对应的角度  text:奖项的文字内容
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
            
        }

        $('#resultBtn').click(function(){
            $('.result').hide();
        });
    })