//œ¥≈∆∞¥≈•¿‡
function Yxipai_butn(callback) {
    base(this, LSprite, []);
    var self = this;
    var bitmapData = new LBitmapData(datalist["xipai_A"]);
    var imgsd=new LBitmap(bitmapData);
    var bitmapDataH = new LBitmapData(datalist["xipai_B"]);
    var imgsdH=new LBitmap(bitmapDataH);
    imgsd.x=-198/2/2;
    imgsd.y=-198/2/2;
    self.addChild(imgsd);
    self.x=945/2;
    self.y=226/2;
    imgsdH.x=-277/2/2;
    imgsdH.y=-277/2/2;
    self.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        
		if(yinxiao_switch){
			soundh.play();
		}
        self.removeChild(imgsd);
        self.addChild(imgsdH);
    });
    self.addEventListener(LMouseEvent.MOUSE_UP,function(){
		if(yinxiao_switch){
			soundh.play();
		}
        self.removeChild(imgsdH);
        self.addChild(imgsd);
        callback();
    });
}
