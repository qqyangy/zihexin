function Yreturnarrow(bitmapDat,url){
    base(this,LSprite,[]);
    var self = this;
    var bitmapData = new LBitmapData(bitmapDat);
    var imgsd=new LBitmap(bitmapData);
    imgsd.scaleX=scale_bl;
    imgsd.scaleY=scale_bl
    self.addChild(imgsd)
    self.x=20;
    self.y=15;
    self.addEventListener(LMouseEvent.MOUSE_UP,function(){
        window.location.href=url;
    })
}