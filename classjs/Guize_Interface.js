//�齱������  ��ʾ��Щ������� ������Ϳ�ʼ��Ϸ������ť
function Guize_Interface() {
    base(this, LSprite, []);
    var self = this;
    var mousedowstate=false;
    //////����/////
    var Interface_01dt = new LBitmapData(datalist["Interface_07"]);
    var Interface_01bt=new LBitmap(Interface_01dt);
    self.addChild(Interface_01bt);

    //////�����/////
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

    //////��ʼ�齱/////
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

    //////////�����ı�//////////
//    var guuizhe_txt=new LTextField();
//    guuizhe_txt.width=795;
//    guuizhe_txt.height=1085;
//    guuizhe_txt.x=145;
//    guuizhe_txt.y=505;
//    guuizhe_txt.setWordWrap(true);
//    guuizhe_txt.text="������99�����У�һ����55�������ۿ۵����֣��ֱ�Ϊһ��1�ۣ�����2�ۣ�����3�ۣ��ĸ�4�ۣ����5�ۣ�����6�ۣ��߸�7�ۣ��˸�8�ۣ��Ÿ�9�ۣ�ʮ��10��,��������������С�������99�����У�һ����55�������ۿ۵����֣��ֱ�Ϊһ��1�ۣ�����2�ۣ�����3�ۣ��ĸ�4�ۣ����5�ۣ�����6�ۣ��߸�7�ۣ��˸�8�ۣ��Ÿ�9�ۣ�ʮ��10��,��������������С�";
//    guuizhe_txt.size=50;
//    guuizhe_txt.color="#663c0e";
//    guuizhe_txt.textAlign="right"
//    self.addChild(guuizhe_txt);



    self.addEventListener(LMouseEvent.MOUSE_UP,mouseup)
    /////��갴��/////
    function mousedown(e){
        e.currentTarget.getChildAt(0).y=10;
        //alert(sound)
        if(yinxiao_switch){
				sounda.play();
			}
        mousedowstate=true;
    }
    /////���̧��/////
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

