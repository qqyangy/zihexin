//数字变化类
//折扣数字变换效果 （图像数据前缀字符，默认数0）
//控制位置为中心 调用对象的change_numberA（设置数字，移动方向L或R）方法设置数字
function Yjianjian_btn_num(bitmapDatstr,deftNum){
    base(this,LSprite,[]);
    var self = this;
    self._deftNum=deftNum;
    self._curentNum=self._deftNum;
    self.LBitmap_ary=[];
    self.tween;
    self.anstop=false;
    var maksAA=new LSprite();
    self.mask1=maksAA;
    var maksBB=new LSprite();
    self.mask2=maksBB;
    //maksAA.graphics.drawArc(0, "#ff0000", [0, 0, 90, 0, 2*Math.PI],true,"#880088");
    //maksBB.graphics.drawArc(0, "#ff0000", [0, 0, 90, 0, 2*Math.PI],true,"#880088");
    self.addChild(maksAA);
    self.addChild(maksBB);
    for(var i=0;i<10;i++){
        var bitmapData = new LBitmapData(datalist["jianjian_btn_num"+i]);
        var imgsd=new LBitmap(bitmapData);
        imgsd.x=-45;
        imgsd.y=-45;
        imgsd.scaleX=scale_bl;
        imgsd.scaleY=scale_bl;
        self.LBitmap_ary.push(imgsd);
    }

    self.addChild(self.LBitmap_ary[self._deftNum]);


}

Yjianjian_btn_num.prototype.change_numberA=function(curentNum,LorR){
    var self=this;
    if(self.anstop || self._deftNum==curentNum) return;
    self.anstop=true;
    self._curentNum=curentNum;
    self.removeAllChild();

    var bitmapDataA = new LBitmapData(datalist["jianjian_btn_num"+self._deftNum]);
    var deftNumOBJ=new LBitmap(bitmapDataA);
    deftNumOBJ.x=-45;
    deftNumOBJ.y=-45;
    deftNumOBJ.scaleX=scale_bl;
    deftNumOBJ.scaleY=scale_bl;
   // self.LBitmap_ary.push(imgsd);


    var bitmapDataB = new LBitmapData(datalist["jianjian_btn_num"+self._curentNum]);
    var curentNumOBJ=new LBitmap(bitmapDataB);
    curentNumOBJ.x=-45;
    curentNumOBJ.y=-45;
    curentNumOBJ.scaleX=scale_bl;
    curentNumOBJ.scaleY=scale_bl;


   // var curentNumOBJ=self.LBitmap_ary[self._curentNum];
  // var deftNumOBJ=self.LBitmap_ary[self._deftNum];


    var maksAA=self.mask1;
    var maksBB=self.mask2;
    maksAA.graphics.drawArc(0, "#ff0000", [0, 0, 45, 0, 2*Math.PI]);
    maksBB.graphics.drawArc(0, "#ff0000", [0, 0, 45, 0, 2*Math.PI]);
    self.addChild(maksAA);
    self.addChild(maksBB);
    self.addChild(curentNumOBJ);
    self.addChild(deftNumOBJ);
    deftNumOBJ.mask=maksAA;
    curentNumOBJ.mask=maksBB;
    var tweenLtA1;
    var tweenLtB1;
    LTweenLite.remove(tweenLtA1);
    LTweenLite.remove(tweenLtB1);
    
	 if(yinxiao_switch){
		soundg.play();
	}
    if(LorR=="L"){
        /////向右//////
        curentNumOBJ.x=-135;
        deftNumOBJ.x=-45;
        tweenLtA1=LTweenLite.to(deftNumOBJ,0.2,{x:90,loop:false,ease:LEasing.Strong.easeInOutQuint});
    }else{
        /////向左//////
        curentNumOBJ.x=45;
        deftNumOBJ.x=-45;
        tweenLtA1=LTweenLite.to(deftNumOBJ,0.2,{x:-135,loop:false,ease:LEasing.Strong.easeInOutQuint});
    }
    self._deftNum=self._curentNum;

    tweenLtB=LTweenLite.to(curentNumOBJ,0.2,{x:-45,loop:false,ease:LEasing.Strong.easeInOutQuint,onComplete:function(){
        LTweenLite.remove(tweenLtA1);
        LTweenLite.remove(tweenLtB1);
        self.anstop=false;

    }});

}
