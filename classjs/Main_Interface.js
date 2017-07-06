//主界面类
//包含抽奖规则、玩家设置、是玩儿、开始抽奖按钮和用户协议
//需要参数素材数组
function Main_Interface(srcary){
    base(this,LSprite,[]);
    var self = this;
    var _srcary=srcary || [];
    var mousedowstate=false;
    //////背景/////
    var Interface_01dt = new LBitmapData(datalist[_srcary[0]]);
    var Interface_01bt=new LBitmap(Interface_01dt);
    self.addChild(Interface_01bt);
    //////抽奖规则按钮/////
    var Interface_02dt = new LBitmapData(datalist[_srcary[1]]);
    var Interface_02bt=new LBitmap(Interface_02dt);
    var splrit2=new LSprite();
    splrit2.addChild(Interface_02bt);
    splrit2.x=259/2;
    splrit2.y=627/2;
    self.addChild(splrit2);
    splrit2.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit2.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        /////////实例化抽奖规则界面///////////////
        var Guize_Interfaceob=new Guize_Interface();
        self.parent.addChild(Guize_Interfaceob);
    });
    //////玩家设置/////
    var Interface_03dt = new LBitmapData(datalist[_srcary[2]]);
    var Interface_03bt=new LBitmap(Interface_03dt);
    var splrit3=new LSprite();
    splrit3.addChild(Interface_03bt);
    splrit3.x=259/2;
    splrit3.y=813/2;
    self.addChild(splrit3);
    splrit3.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit3.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        /////////实例化弹窗///////////////
        if(!showsezhiTnc){
            var TansetvoiceiObj=new Tansetvoice();
            self.parent.addChild(TansetvoiceiObj);
        }
    });
    //////试玩儿/////
    var Interface_04dt = new LBitmapData(datalist[_srcary[3]]);
    var Interface_04bt=new LBitmap(Interface_04dt);
    var splrit4=new LSprite();
    splrit4.addChild(Interface_04bt);
    splrit4.x=259/2;
    splrit4.y=1002/2;
    self.addChild(splrit4);
    splrit4.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit4.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        shilihua_newgame(false);
        LTweenLite.to(self,0.5,{y:-1925/2,alpha:0,loop:false,ease:LEasing.Strong.easeOutElastic});
    });
    //////开始抽奖/////
    var Interface_05dt = new LBitmapData(datalist[_srcary[4]]);
    var Interface_05bt=new LBitmap(Interface_05dt);
    var splrit5=new LSprite();
    splrit5.addChild(Interface_05bt);
    splrit5.x=259/2;
    splrit5.y=1187/2;
    self.addChild(splrit5);
    splrit5.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit5.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        shilihua_newgame(true);
        LTweenLite.to(self,0.5,{y:-1925/2,alpha:0,loop:false,ease:LEasing.Strong.easeOutElastic});
    });


    //////用户协议/////
    var Interface_06dt = new LBitmapData(datalist[_srcary[5]]);
    var Interface_06bt=new LBitmap(Interface_06dt);
    var splrit6=new LSprite();
    splrit6.addChild(Interface_06bt);
    splrit6.x=235/2;
    splrit6.y=1802/2;
    self.addChild(splrit6);
//    splrit6.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
//    splrit6.addEventListener(LMouseEvent.MOUSE_UP,function(e){
//        mouseup(e);
//    });

    self.addEventListener(LMouseEvent.MOUSE_UP,mouseup)
    /////鼠标按下/////
    function mousedown(e){
        e.currentTarget.getChildAt(0).y=10;
        //alert(sound)
        if(yinxiao_switch){
				sounda.play();
			}
        mousedowstate=true;
    }
    /////鼠标抬起/////
    function mouseup(e){
        if(mousedowstate){
            splrit2.getChildAt(0).y=0;
            splrit3.getChildAt(0).y=0;
            splrit3.getChildAt(0).y=0;
            splrit4.getChildAt(0).y=0;
            splrit5.getChildAt(0).y=0;
            if(yinxiao_switch){
				sounda.play();
			}
            mousedowstate=false;
        }
    }


}

