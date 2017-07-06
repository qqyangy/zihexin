//游戏规则说明类
function YExplain(parenta,callback){
    base(this,LSprite,[]);
    var self = this;
    ///////背景/////
    var bitmapData = new LBitmapData(datalist["Explain_back"]);
    var imgsdback=new LBitmap(bitmapData);
    imgsdback.scaleX=scale_bl;
    imgsdback.scaleY=scale_bl;
    self.addChild(imgsdback);
    ///////说明文字/////
    var bitmapData_txt = new LBitmapData(datalist["Explain_text"]);
    var imgsdtext=new LBitmap(bitmapData_txt);
    imgsdtext.scaleX=scale_bl;
    imgsdtext.scaleY=scale_bl;
    self.addChild(imgsdtext);
    ///////关闭按钮/////
    var bitmapData_close = new LBitmapData(datalist["Explain_close"]);
    var imgsdclose=new LBitmap(bitmapData_close);
    imgsdclose.scaleX=scale_bl;
    imgsdclose.x=383;
    imgsdclose.y=18;
    imgsdclose.scaleY=scale_bl;
    var imgsdcloseSP=new LSprite();
    imgsdcloseSP.addChild(imgsdclose);
    self.addChild(imgsdcloseSP);
    ///////确定按钮/////
    var bitmapData_btn = new LBitmapData(datalist["Explain_btn"]);
    var imgsdbtn=new LBitmap(bitmapData_btn);
    imgsdbtn.scaleX=scale_bl;
    imgsdbtn.x=273;
    imgsdbtn.y=451;
    imgsdbtn.scaleY=scale_bl;
    var imgsdbtnSP=new LSprite();
    imgsdbtnSP.addChild(imgsdbtn);
    self.addChild(imgsdbtnSP);
    imgsdbtnSP.addEventListener(LMouseEvent.MOUSE_UP,mouseup_hs);
    imgsdcloseSP.addEventListener(LMouseEvent.MOUSE_UP,mouseup_hs);
    imgsdbtnSP.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown_hs);
    imgsdcloseSP.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown_hs);
    self.alpha=0;
    var tweenLtA;
    var tweenLtB;
    tweenLtA=LTweenLite.to(self,0.5,{alpha:1,loop:false,ease:LEasing.Strong.easeInOutQuint});
    function mousedown_hs(){
        if(yinxiao_switch){
				sounda.play();
			}
    }
    function mouseup_hs(){
        if(yinxiao_switch){
				sounda.play();
			}
        tweenLtB=LTweenLite.to(self,0.3,{alpha:0,loop:false,ease:LEasing.Strong.easeInOutQuint,onComplete:function(){
            LTweenLite.remove(tweenLtA);
            LTweenLite.remove(tweenLtB);
            parenta.removeChild(self);
        }});
        callback();
    }
    parenta.addChild(self);
    self.x=57;
    self.y=227;
}