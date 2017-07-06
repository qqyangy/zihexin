////////…˘“Ù…Ë÷√µØ¥∞////////////
function  Tansetvoice(){
    base(this, LSprite, []);
    var self = this;
    var mousedowstate=false;
    //////±≥æ∞/////
    var Interface_01dt = new LBitmapData(datalist["Interface_14"]);
    var Interface_01bt=new LBitmap(Interface_01dt);
    Interface_01bt.x=-1024/2/2;
    Interface_01bt.y=-658/2/2;
    self.addChild(Interface_01bt);
    showsezhiTnc=true;
    var thisMask; /////’⁄’÷‘™Àÿ//////

    //thisparent.addChildAt(thisMask,thisparent.numChildren-2);



    //////“Ù¿÷∞¥≈•/////
    var Interface_03dt = new LBitmapData(datalist["Interface_12"]);
    var Interface_03bt=new LBitmap(Interface_03dt);
    var Interface_03yc = new LBitmapData(datalist["Interface_11"]);
    var Interface_03ycbt=new LBitmap(Interface_03yc);
    Interface_03ycbt.x=445/2;
    Interface_03ycbt.y=60/2;
    var splrit3=new LSprite();
    var splrit3a=new LSprite();
    splrit3a.addChild(Interface_03bt);
    if(!yinyue_switch){
        splrit3a.addChild(Interface_03ycbt);
    }
    splrit3.addChild(splrit3a);
    splrit3.x=(185-1024/2)/2;
    splrit3.y=(200-658/2)/2;
    self.addChild(splrit3);
    splrit3.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit3.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        if(!yinyue_switch){
            yinyue_switch=true;
            sound_back.play();
            setShenyinkai();
            splrit3a.removeChild(Interface_03ycbt);
        }else{
            yinyue_switch=false;
            sound_back.stop();
            setShenyinguan();
            splrit3a.addChild(Interface_03ycbt);
        }
    });

    //////“Ù–ß∞¥≈•/////
    var Interface_04dt = new LBitmapData(datalist["Interface_13"]);
    var Interface_04bt=new LBitmap(Interface_04dt);
    var Interface_04yc = new LBitmapData(datalist["Interface_11"]);
    var Interface_04ycbt=new LBitmap(Interface_04yc);
    Interface_04ycbt.x=445/2;
    Interface_04ycbt.y=60/2;
    var splrit4=new LSprite();
    var splrit4a=new LSprite();
    splrit4a.addChild(Interface_04bt);
    if(!yinxiao_switch){
        splrit4a.addChild(Interface_04ycbt);
    }
    splrit4.addChild(splrit4a);
    splrit4.x=(185-1024/2)/2;
    splrit4.y=(400-658/2)/2;
    self.addChild(splrit4);
    splrit4.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit4.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        if(!yinxiao_switch){
            yinxiao_switch=true;
            splrit4a.removeChild(Interface_04ycbt);
        }else{
            yinxiao_switch=false;
            splrit4a.addChild(Interface_04ycbt);
        }
    });

    //////πÿ±’∞¥≈•/////
    var Interface_02dtasd = new LBitmapData(datalist["Interface_10"]);
    var Interface_02btasdasd=new LBitmap(Interface_02dtasd);
    var splrit2sasdsad=new LSprite();
    splrit2sasdsad.addChild(Interface_02btasdasd);
    var splrit2s=new LSprite();
    splrit2s.addChild(splrit2sasdsad);
    splrit2s.x=(855-1024/2)/2;
    splrit2s.y=(57-658/2)/2
    self.addChild(splrit2s);
    splrit2s.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown);
    splrit2s.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        LTweenLite.to(self,0.3,{scaleX:0,scaleY:0,loop:false,ease:LEasing.Strong.easeOutElastic,onComplete:function(){
            showsezhiTnc=false;
            self.parent.removeChild(thisMask);
            thisMask=null;
            self.parent.removeChild(self);
        }});
    });


    self.addEventListener(LMouseEvent.MOUSE_UP,mouseup)
    ///// Û±Í∞¥œ¬/////
    function mousedown(e){
        e.currentTarget.getChildAt(0).y=7;
        //alert(sound)
        if(yinxiao_switch){
				sounda.play();
			}
        mousedowstate=true;
    }
    ///// Û±ÍÃß∆/////
    function mouseup(e){
        if(mousedowstate){
            splrit2s.getChildAt(0).y=0;
            splrit3.getChildAt(0).y=0;
            splrit4.getChildAt(0).y=0;
			if(yinxiao_switch){
				sounda.play();
			}
            mousedowstate=false;
        }
    }
    self.x=(29+1024/2)/2;
    self.y=(633+658/2)/2;
    self.scaleX=0;
    self.scaleY=0;
    self.alpha=0;
    //self.rotate=180;
    LTweenLite.to(self,0.3,{scaleX:1,scaleY:1,rotate:0,alpha:1,loop:false,ease:LEasing.Strong.easeOutElastic});
    setTimeout(function(){
        thisMask=new LSprite();
        thisMask.graphics.drawRect(0,"#ff0000",[0, 0, 1200/2, 2000/2],true,"#880088");
        thisMask.alpha=0;
        thisMask.x=0;
        var thisparent=self.parent;
        thisparent.addChildAt(thisMask,thisparent.numChildren-1)

    },10)


}

