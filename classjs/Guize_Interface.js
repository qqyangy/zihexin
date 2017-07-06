//抽奖规则类  显示有些规则界面 带试玩和开始游戏两个按钮
function Guize_Interface() {
    base(this, LSprite, []);
    var self = this;
    var mousedowstate=false;
    //////背景/////
    var Interface_01dt = new LBitmapData(datalist["Interface_07"]);
    var Interface_01bt=new LBitmap(Interface_01dt);
    self.addChild(Interface_01bt);

    //////试玩儿/////
    var Interface_02dt = new LBitmapData(datalist["Interface_08"]);
    var Interface_02bt=new LBitmap(Interface_02dt);
    var splrit2=new LSprite();
    splrit2.addChild(Interface_02bt);
    splrit2.x=72/2;
    splrit2.y=1745/2;
    self.addChild(splrit2);
    splrit2.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit2.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        // mouseup(e);
        shilihua_newgame(false);
        Main_Interfaceob.y=-1925/2;
        LTweenLite.to(self,0.3,{y:-1925/2,loop:false,ease:LEasing.Strong.easeOutElastic,onComplete:function(){
            self.parent.removeChild(self);
        }});
    });

    //////开始抽奖/////
    var Interface_03dt = new LBitmapData(datalist["Interface_09"]);
    var Interface_03bt=new LBitmap(Interface_03dt);
    var splrit3=new LSprite();
    splrit3.addChild(Interface_03bt);
    splrit3.x=575/2;
    splrit3.y=1745/2;
    self.addChild(splrit3);
    splrit3.addEventListener(LMouseEvent.MOUSE_DOWN,mousedown)
    splrit3.addEventListener(LMouseEvent.MOUSE_UP,function(e){
        // mouseup(e);
        shilihua_newgame(true);
        Main_Interfaceob.y=-1925/2;
        LTweenLite.to(self,0.3,{y:-1925/2,loop:false,ease:LEasing.Strong.easeOutElastic,onComplete:function(){
            self.parent.removeChild(self);
        }});
    });

    //////////规则文本//////////
//    var guuizhe_txt=new LTextField();
//    guuizhe_txt.width=795;
//    guuizhe_txt.height=1085;
//    guuizhe_txt.x=145;
//    guuizhe_txt.y=505;
//    guuizhe_txt.setWordWrap(true);
//    guuizhe_txt.text="在如下99个牌中，一共有55个代表折扣的数字，分别为一个1折，二个2折，三个3折，四个4折，五个5折，六个6折，七个7折，八个8折，九个9折，十个10折,所有数字随机排列。在如下99个牌中，一共有55个代表折扣的数字，分别为一个1折，二个2折，三个3折，四个4折，五个5折，六个6折，七个7折，八个8折，九个9折，十个10折,所有数字随机排列。";
//    guuizhe_txt.size=50;
//    guuizhe_txt.color="#663c0e";
//    guuizhe_txt.textAlign="right"
//    self.addChild(guuizhe_txt);



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
            if(yinxiao_switch){
				sounda.play();
			}
            mousedowstate=false;
        }
    }
    self.y=-1925/2;
    LTweenLite.to(self,0.3,{y:0,loop:false,ease:LEasing.Strong.easeOutCubic});
}

