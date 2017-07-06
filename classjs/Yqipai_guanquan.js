//鼠标点击光圈类
function Yqipai_guanquan(num,parensa) {
    base(this, LSprite, []);
    var self = this;
    var initNUm=0;
    self.setinds=setInterval(function(){
        initNUm++;
        var scrotps=new LSprite();
        var cuhuMs=Math.random()*3+2;
        scrotps.graphics.drawArc(cuhuMs, "#ffffff", [0, 0, 10, 0, 2*Math.PI]);
        self.addChild(scrotps)
        LTweenLite.to(scrotps,0.7,{alpha:0,scaleX:4,scaleY:4,loop:false,ease:LEasing.Strong.easeInOutBack,onComplete:function(){
            self.removeChild(scrotps);
        }})

        if(initNUm>=num){
            clearInterval(self.setinds);
            setTimeout(function(){
                parensa.removeChild(self);
            },0.7);
        }

    },300)

}