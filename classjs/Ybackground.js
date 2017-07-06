/**
 * Created by asdw on 2015/12/19.
 */
//±≥æ∞¿‡
function Ybackground(bitmapDat){
    base(this,LSprite,[]);
    var self = this;
    var bitmapData = new LBitmapData(bitmapDat);
    var imgsd=new LBitmap(bitmapData);
    imgsd.scaleX=scale_bl;
    imgsd.scaleY=scale_bl
    self.addChild(imgsd)
}