function YzhongJ_Effects(jpstring,biaoti,shuL,texta,btnURLA,btnURLB,backimg,sounda) {
    base(this, LSprite, []);
    var self = this;
    ////////添加背景//////
    var imgsAtrs=["zhongJ_star1"];
    var backimgA=backimg || "zhongJ_backyl";
    var bitmapDataE = new LBitmapData(datalist[backimgA]);
    var imgsdE=new LBitmap(bitmapDataE);
    self.addChild(imgsdE);
    ///////中奖音效//////////
    var zhongjiangyin = new LSound(); //////普通按钮////////
    zhongjiangyin.load(datalist[sounda]);
	if(yinxiao_switch){
		zhongjiangyin.play();
	}
    ///////////添加标题/////////
    var bitmapData_H = new LBitmapData(datalist[biaoti]);
    var imgsd_H=new LBitmap(bitmapData_H);
    imgsd_H.x=165/2;
    imgsd_H.y=520/2;
    self.addChild(imgsd_H);
    if(jpstring){
        ///////中奖显示/////
        ///奖品////
        var bitmapData_JP = new LBitmapData(datalist[jpstring]);
        var imgsd_JP=new LBitmap(bitmapData_JP);
        imgsd_JP.x=290/2;
        imgsd_JP.y=630/2;
        self.addChild(imgsd_JP);
        ///按钮框///
        var spritaCont=new LSprite();
        //背景//
        var bitmapData_btnback = new LBitmapData(datalist["zhongJ_kuang1"]);
        var imgsd_btnback=new LBitmap(bitmapData_btnback);
        spritaCont.addChild(imgsd_btnback);
        //文本//
        var textarys=texta.split("|");
        var textary=new LTextField();
        textary.size=34/2;
        textary.text=textarys[0];
        textary.color="#000000";
        textary.x=(500/2+117)/2;
        textary.y=36/2;
        if(textarys.length<2){
            textary.y=55/2;
        }
        textary.textAlign="center";
        spritaCont.addChild(textary);
        if(textarys.length>1){
            var textary2=new LTextField();
            textary2.size=34/2;
            textary2.text=textarys[1];
            textary2.color="#000000";
            textary2.x=(500/2+117)/2;
            textary2.y=81/2;
            textary2.textAlign="center";
            spritaCont.addChild(textary2);
        }
        //在玩1次//
        var spritA=new LSprite();
        spritA.graphics.drawRoundRect(0,"#ff0000", [0,0,290/2,100/2,50/2],true,"#000000");
        spritA.x=65/2;
        spritA.y=137/2;
        spritA.alpha=0;
        spritaCont.addChild(spritA);
        spritA.addEventListener(LMouseEvent.MOUSE_UP,function(){
			if(!wanistrue){
					Main_Interfaceob.y=0;
					Main_Interfaceob.alpha=1;
					newgameContent.removeAllChild();
					return;	
				}
            if(btnURLA){
                window.location.href=btnURLA;
            }
        });
        //领取//
        var spritB=new LSprite();
        spritB.graphics.drawRoundRect(0,"#ff0000", [0,0,290/2,100/2,50/2],true,"#000000");
        spritB.x=415/2;
        spritB.y=137/2;
        spritB.alpha=0;
        spritaCont.addChild(spritB);
        spritB.addEventListener(LMouseEvent.MOUSE_UP,function(){
			if(!wanistrue){
					Main_Interfaceob.y=0;
					Main_Interfaceob.alpha=1;
					newgameContent.removeAllChild();
					return;	
				}
            if(btnURLB){
                window.location.href=btnURLB;
            }
        });
        spritaCont.x=170/2;
        spritaCont.y=983/2;
        self.addChild(spritaCont);


    }else{
        ///////没中奖显示/////
        ///按钮框///
        var spritaContF=new LSprite();
        //背景//
        var bitmapData_btnbackF = new LBitmapData(datalist["zhongJ_kuang2"]);
        var imgsd_btnbackF=new LBitmap(bitmapData_btnbackF);
        spritaContF.addChild(imgsd_btnbackF);
        //文本//
        var textarysf=texta.split("|");
        var textaryf=new LTextField();
        textaryf.size=34/2;
        textaryf.text=textarysf[1];
        textaryf.color="#000000";
        textaryf.x=580/2;
        textaryf.y=36/2;
        if(textarysf.length<2){
            textaryf.y=55;
        }
        textaryf.textAlign="center";
        spritaContF.addChild(textaryf);

        spritaContF.x=253/2;
        spritaContF.y=730/2;
        self.addChild(spritaContF);

        if(textarysf.length>1){
            var textaryf2=new LTextField();
            textaryf2.size=34/2;
            textaryf2.text=textarysf[0];
            textaryf2.color="#000000";
            textaryf2.x=(500/2+42)/2;
            textaryf2.y=81/2;
            textaryf2.textAlign="center";
            spritaContF.addChild(textaryf2);
        }
        //在玩1次//
        var spritAf=new LSprite();
        spritAf.graphics.drawRoundRect(0,"#ff0000", [0,0,290/2,100/2,50/2],true,"#000000");
        spritAf.x=145/2;
        spritAf.y=135/2;
        spritAf.alpha=0;
        spritaContF.addChild(spritAf);
        spritAf.addEventListener(LMouseEvent.MOUSE_UP,function(){
			if(!wanistrue){
				Main_Interfaceob.y=0;
				Main_Interfaceob.alpha=1;
				newgameContent.removeAllChild();
				return;	
			}
            if(btnURLA){
                window.location.href=btnURLA;
            }
        });

    }
    self.x=0;
    self.y=0;
    var shuLA=shuL || 3;
    var shuLAINT=0;
    var setInterrss=setInterval(function(){
        self.star_ejector();
        shuLAINT++;
        if(shuLAINT>shuLA){
            clearInterval(setInterrss);
        }
    },500);



}



///星星发射器/////
YzhongJ_Effects.prototype.star_ejector=function (){
    var self = this;
    var NUmberArry=[1,1,1,1,1,2,2,2,2,2,3,4,11,5,6,7,8,9,10];
    var starCont=new LSprite();
	if(yinxiao_switch){
		soundfARTY[curintss].play();
	}
    
    curintss++;
    for(var i=0;i<NUmberArry.length;i++){
        var mathsrm=Math.round(NUmberArry.length*Math.random());
        var bitmapDats = new LBitmapData(datalist["zhongJ_star"+NUmberArry[mathsrm]]);
        var imgsdts=new LBitmap(bitmapDats);
        imgsdts.x=-bitmapDats.width/2;
        imgsdts.y=-bitmapDats.height/2;
        var mathsSCA=Math.random()*0.5+0.1;
        var mathsSCB=Math.random()*1.5+0.7;
        var Msrro=Math.random()*300-150;
        imgsdts.scaleX=mathsSCA;
        imgsdts.scaleY=mathsSCA;
        imgsdts.alpha=3;
        var jiaodu=Math.random()*360;
        var hudu=jiaodu/180*Math.PI;
        var sjX=Math.cos(hudu)*800;
        var sjY=Math.sin(hudu)*800;
        var SJtime=Math.random()*1+1;
        var starContzi=new LSprite();
        starContzi.addChild(imgsdts);
        var huasbds=true;
        LTweenLite.to(imgsdts,SJtime,{scaleX:mathsSCB,scaleY:mathsSCB,x:sjX/2,y:sjY/2,alpha:0,rotate:Msrro,loop:false,ease:LEasing.Strong.easeInQuart,onComplete:function(){
            starContzi.removeChild(imgsdts);
            if(starContzi.numChildren<1 && huasbds){
                setTimeout(function(){
                    huasbds=false;
                    self.removeChild(starCont);
                },1000)
            }
        }});
        starCont.addChild(starContzi);
    }
    starCont.x=540/2;
    starCont.y=870/2;
    self.addChild(starCont);
}
