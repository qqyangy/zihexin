function Yqipai_zi(endab,nameA,indexa,Special) {
    base(this, LSprite, []);
    var self = this;
    self._name=nameA;
    self._endab=endab;
    self._indexa=indexa;
    self.curisfanhzuan=false; ////翻转状态///////
    if(endab){
        var bitmapDataD;
        if(Special){
            bitmapDataD = new LBitmapData(datalist[Special]);
        }else{
            bitmapDataD = new LBitmapData(datalist["qipai_default"]);
        }
        self.imgsdD=new LBitmap(bitmapDataD);
        self.imgsdD.x=-24;
        self.imgsdD.y=-24;
        self.addChild(self.imgsdD);
    }else{
        var bitmapDataE = new LBitmapData(datalist["qipai_endable"]);
        var imgsdE=new LBitmap(bitmapDataE);
        imgsdE.x=-24;
        imgsdE.y=-24;
        self.addChild(imgsdE);
    }

}
Yqipai_zi.prototype.scaleEfct=function(callback){
    var self = this;
    if(self.curisfanhzuan) return;
    var Yqipai_guanquanss=new Yqipai_guanquan(3,self);
    self.addChild(Yqipai_guanquanss);
    self.tweenLtA=LTweenLite.to(self,0.4,{scaleX:2,scaleY:2,loop:false,ease:LEasing.Strong.easeInOutBack}).to(self,0.7,{scaleX:1,scaleY:1,loop:false,ease:LEasing.Strong.easeInOutBack}).to(self,0.7,{scaleX:2,scaleY:2,loop:false,ease:LEasing.Strong.easeInOutBack}).to(self,0.7,{scaleX:1,scaleY:1,loop:false,ease:LEasing.Strong.easeInOutBack}).to(self,0.7,{scaleX:2,scaleY:2,loop:false,ease:LEasing.Strong.easeInOutBack}).to(self,0.7,{scaleX:1,scaleY:1,loop:false,ease:LEasing.Strong.easeInOutBack,onComplete:function(){
        setTimeout(function(){
            LTweenLite.remove(self.tweenLtA);
            callback();
        },100);
    }});

}
/////////停止缩放////////
Yqipai_zi.prototype.noscaleEfct=function(callback){
    var self = this;
    if(self.curisfanhzuan) return;
    LTweenLite.remove(self.tweenLtA);
    self.tweenLtAss=LTweenLite.to(self,0.3,{scaleX:1,scaleY:1,loop:false,ease:LEasing.Strong.easeInOutBack,onComplete:function(){
        setTimeout(function(){
            LTweenLite.remove(self.tweenLtAss);
            callback();
        },100);
    }});
}
Yqipai_zi.prototype.overturn_hs=function(num){
    var self = this;
    self.curisfanhzuan=true;
    self.tweenLtB=LTweenLite.to(self,0.4,{scaleY:0,loop:false,ease:LEasing.Strong.easeInOutBack,onComplete:function(){
        var bitmapDataE=new LBitmapData(datalist["qipai_num"+num]);
        self.imgsdE=new LBitmap(bitmapDataE);
        self.imgsdE.x=-24;
        self.imgsdE.y=-24;
        self.addChild(self.imgsdE);
    }}).to(self,0.6,{scaleY:1,loop:false,ease:LEasing.Strong.easeInOutBack,onComplete:function(){
        setTimeout(function(){
            LTweenLite.remove(self.tweenLtB);
            ///////翻牌完成调用父级选中对象放大函数///////
            if(self._indexa==1){
                self.parent.fanpaicompt();
            }
        },600);
    }})

}

Yqipai_zi.prototype.boxs_glow=function(){
    var self = this;
    var bitmapDataF=new LBitmapData(datalist["qipai_num_sd"]);
    self.imgsdF=new LBitmap(bitmapDataF);
    self.imgsdF.x=-40;
    self.imgsdF.y=-40;
    self.addChild(self.imgsdF);
    self.addChild(self.imgsdE);
}
Yqipai_zi.prototype.boxs_glowhide=function(){
    var self = this;
    self.removeChild(self.imgsdF);
}

