/**
 * Created by 浩 on 2015/9/7.
 */

var containerTimer;
var birdTimer;
var fullTimer;
var timerCount=0;
var score = 0;
// 存放tube数组
var tubeArr = [];

/*********初始化游戏*******/
$(function(){
    $(".reload-btn").click(function(){
        location.reload();
    });
    $(".startBtn").click(function(){
        $(".pop-start").css("display","none");
        $(".score").css("display","block");
        produceTube();
        listenEvent();
        containerTimer = setInterval(moveContainer,1800);
        birdTimer = setInterval(birdDown,100);
        fullTimer = setInterval(removeTube,10);
    });
});
/*****gameover********/
function gameEnd(){
    clearInterval(birdTimer);
    clearInterval(containerTimer);
    clearInterval(fullTimer);
    $(document).unbind("keydown");
    $(".tube-container").children("div").stop(true);
    $("#bird").animate({"transform":"rotate(90deg)","top":480},1000);
    setTimeout(function(){
        $("#bird").stop(true);
        $("#audio-die")[0].play();
    },1000);
    setTimeout(function(){
        $(".get-score").html("你得了"+$(".score").html()+"分!");
        $(".pop-reload").css("display","block");
    },500);
}
/********定时移除tube以及检测碰撞********/
function removeTube(){
    timerCount++;
    //碰撞检测
    isCollision($("#bird"),tubeArr);
    //移除tube
    if(timerCount==75)
    {
        if($(".tube-container").children("div.tube").length>5){
            for(var c=0;c<5;c++){
                if($(".tube-container").children("div.tube").eq(0).position().left==-62){
                    $(".tube-container").children("div.tube").eq(0).remove();
                }
            }
        }
        timerCount=0;
    }
}
/**********检测碰撞*********/
function isCollision(bird,tube){
    if(parseInt(bird.offset().top+$("#bird").height())>=500||bird.offset().top<0){
        $("#audio-hit")[0].play();
        gameEnd();
    }
    //bird左边的tube移出数组
    if(tube[0].offset().left+tube[0].width()<$("#bird").offset().left){
        tubeArr.shift();
        $("#audio-point")[0].play();
        score++;
        $(".score").html(score);
    }
    var curTube = tube[0];
    if(curTube.length>0)
    {
        var curTubeBody1=curTube.find("div.tube1");
        if((bird.offset().left+2<(curTube.offset().left+curTube.width()))&&(bird.offset().left+bird.width()-2>curTube.offset().left))
        {
            if(bird.offset().top<(curTube.offset().top+curTubeBody1.height())||
                (bird.offset().top+bird.height())>curTube.offset().top+curTubeBody1.height()+114)
            {
                $("#audio-hit")[0].play();
                gameEnd();
            }
        }
    }
}
/**********bird的下落*********/
function birdDown(){
    //$("#bird").stop(true);
    $("#bird").animate({"top":'+=19px'},100,'linear',function(){
        $(this).css({"transform":"rotate(30deg)"},190);
    })
}

/**********bird的控制*********/
function listenEvent(){
    $(document).bind("keydown",function(event){
        if(event.keyCode.toString()=='38'||event.keyCode.toString()=='32')
        {
            window.clearInterval(birdTimer);
            $("#bird").stop(true);
            $("#audio-wing")[0].pause();
            $("#audio-wing")[0].play();
            $("#bird").css("transform",'rotate(-20deg)');
            $("#bird").animate({"top":'-=60px'},150,'linear',function(){
                isCollision($("#bird"),tubeArr);
                $("#bird").css("transform",'rotate(0deg)');
            });
            setTimeout(function(){
                birdTimer = setInterval(birdDown,100)
            },50);
        }
    });
}

/*********移动tube********/
function moveContainer()
{
    for(var i=0;i<tubeArr.length;i++)
    {
        tubeArr[i].animate({"left":"-62px"},12000,'linear');
    }
    produceTube();
}

/********tube的增加********/
function produceTube()
{
    /*增加一个tube*/
        var ele = $("<div class='tube'>" +
            "<div class='tube1'>" +
            "<div class='tube-body tube-body-height1'></div>" +
            " <img src='images/4_2.png'/> </div>" +
            "<div class='tube2'> " +
            "<img src='images/4.png'/> " +
            "<div class='tube-body tube-body-height2'></div></div>"+
            "</div>");
        var randomCount = Math.floor(Math.random()*14)+4;
        var count2 = 18 - randomCount;
        ele.css("left","1260px");
        ele.find("div.tube-body-height1").css("height",randomCount*18);
        ele.find("div.tube-body-height2").css("height",count2*18);
        $(".tube-container").append(ele);
        tubeArr.push(ele);
}

