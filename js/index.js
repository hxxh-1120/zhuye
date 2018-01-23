$("#container").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    sectionsColor: ["#ccc", "yellow", "red", "#f88", "#99f"],
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: "right",
    continuousVertical: true,
    fixedElements:"#menu",
    menu:"#menu",
    afterLoad:function(anchor,index){
        if(index===1){
            $(".section p").css("top","350");
            $(".two-right").css("transform","translateX(0)");
        }
    },
    onLeave:function(index){
        if(index===1){
            $(".section p").css("top","700");
            $(".two-right").css("transform","translateX(1000px)");
        }
    }
});
let canvasobj=document.querySelectorAll("canvas");
function all(canvasObj,max,color){
    let cobj=canvasObj.getContext("2d");
    cobj.textAlign="center";
    cobj.textBaseline="middle";
    cobj.font="20px 微软雅黑";
    cobj.lineWidth=20;
    cobj.lineCap="round";
    cobj.strokeStyle="#f66";
    cobj.strokeStyle=color;
    cobj.fillStyle="#fff";
    let n=0;
    function fn(){
        n++;
        if(n<max){
            requestAnimationFrame(fn);
        }
        let angel=2*Math.PI*n/100-Math.PI/2;
        cobj.save();
        cobj.shadowColor="#fff";
        cobj.shadowBlur="10";
        cobj.clearRect(0,0,300,300);
        cobj.beginPath();
        cobj.arc(150,150,80,-Math.PI/2,angel);
        cobj.stroke();
        cobj.restore();
        cobj.fillText(n+"%",150,150);
    }
    fn();
}
all(canvasobj[0],90);
all(canvasobj[1],85,"#6f6");
all(canvasobj[2],75,"#66f");
//项目
$(".next").click(function(){
    $(".scene ul").transition({rotateY:"-=60"})
});
$(".prev").click(function(){
    $(".scene ul").transition({rotateY:"+=60"})
})