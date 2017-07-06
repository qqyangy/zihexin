function Yjianjian_btn(bitmapDat,addorjian){
    base(this,LSprite,[]);
    var self = this;
    var bitmapData;
    var bitmapDatah;
    var imgsd;
    var imgsdh;
    if(addorjian=="+"){
        bitmapData = new LBitmapData(bitmapDat,55,0,55,55);
        bitmapDatah = new LBitmapData(bitmapDat,55,55,55,55);
    }else{
        bitmapData = new LBitmapData(bitmapDat,0,0,55,55);
        bitmapDatah = new LBitmapData(bitmapDat,0,55,55,55);
    }
    imgsd=new LBitmap(bitmapData);
    imgsd.x=-22;
    imgsd.y=-22;
    imgsdh=new LBitmap(bitmapDatah);
    imgsdh.x=-22;
    imgsdh.y=-22;
    imgsd.scaleX=scale_bl;
    imgsd.scaleY=scale_bl;
    imgsdh.scaleX=scale_bl;
    imgsdh.scaleY=scale_bl
    //var bitmapData = new LBitmapData(bitmapDat);
    self.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		 if(yinxiao_switch){
			soundb.play();
		}
        self.removeChild(imgsd)
        self.addChild(imgsdh)
    });
    self.addEventListener(LMouseEvent.MOUSE_UP,function(){
        if(yinxiao_switch){
			soundb.play();
		}
        self.removeChild(imgsdh)
        self.addChild(imgsd)
    });

    self.addChild(imgsd)
}
