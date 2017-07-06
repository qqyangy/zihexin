//折扣数字特效类
function Yzhekou_effect(parentA,num){
    base(this,LSprite,[]);
    var self = this;
    var bitmapData = new LBitmapData(datalist["zhe_"+num]);
    var imgsd=new LBitmap(bitmapData);
    imgsd.x=-114;
    imgsd.x=-103;
    self.addChild(imgsd);
    self.alpha=2;
    self.tweenLt_zkAE=LTweenLite.to(self,0.5,{alpha:0,scaleX:1.5,scaleY:1.5,loop:false,ease:LEasing.Strong.easeInOutQuint,onComplete:function(){
        parentA.removeChild(self);
    }});
    self.x=270;
    self.y=350;
    parentA.addChild(self);
}
