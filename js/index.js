$("#container").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    sectionsColor: ["#ccc", "yellow", "red", "#f88", "#99f"],
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["111", "222", "333", "444"],
    continuousVertical: true,
    fixedElements:"#menu",
    menu:"#menu",
    afterLoad:function(anchor,index){
        if(index===2){
            $(".two-left").css("transform","translateX(0)");
            $(".two-right").css("transform","translateX(0)");
        }
    },
    onLeave:function(index){
        if(index===2){
            $(".two-left").css("transform","translateX(-1000px)");
            $(".two-right").css("transform","translateX(1000px)");
        }
    }
});