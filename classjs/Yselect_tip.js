function Yselect_tip(str,callback,callback2) {
    base(this, LSprite, []);
    var self = this;
    var bitmapData = new LBitmapData(datalist["select_tip"]);
    var imgsdback=new LBitmap(bitmapData);
    self.addChild(imgsdback);
    self.x=300/2;
    self.y=26/2;
    var strleng=str.length;
    var theTextField = new LTextField();
    theTextField.text = "您的选择是："+str.substr(0,1)+"列  第"+str.substr(1,strleng-1)+"行";
    theTextField.fontFamily="黑体";
    theTextField.color="#8b0909";
    theTextField.size = 49/2;
    theTextField.stroke = true;
    theTextField.lineWidth = 5/2;
    theTextField.lineColor = "#ffffff";
    theTextField.x=129/2;
    theTextField.y=58/2;
    self.addChild(theTextField);
    var spritA=new LSprite();
    spritA.graphics.drawRoundRect(0,"#ff0000", [0,0,260/2,100/2,15/2],true,"#000000");
    spritA.x=103/2;
    spritA.y=154/2;
    self.addChild(spritA);
    var spritB=new LSprite();
    spritA.alpha=0;
    spritA.addEventListener(LMouseEvent.MOUSE_UP,function(){
        if(yinxiao_switch){
				sounda.play();
			}
        if(callback2){
            callback2();
        }
        self.parent.removeChild(self);

    });
    spritA.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        if(yinxiao_switch){
				sounda.play();
			}
    })
    spritB.graphics.drawRoundRect(0,"#ff0000", [0,0,260/2,100/2,15/2],true,"#000000");
    spritB.x=421/2;
    spritB.y=154/2;
    spritB.alpha=0;
    self.addChild(spritB);
    spritB.addEventListener(LMouseEvent.MOUSE_UP,function(){
        callback();
        if(yinxiao_switch){
				sounda.play();
			}
        self.parent.removeChild(self);

    });
    spritB.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        if(yinxiao_switch){
				sounda.play();
			}
    })


}

