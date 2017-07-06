function Yqipai_content(aryesrting,callbake){
    base(this, LSprite, []);
    var self = this;
    self.isSelect=true;
    var hangAry=["A","B","C","D","E","F","G","H","I"];
    var aryesrtingAry=aryesrting.split(",");
    var danweikg=100;
    var suoyion=0; ////Ë÷Òý////
    var suoyionA=0;
    var isendsab=false;
    self.curren_objct;
    self.fanpai_canshu;
    self.isfanpai=false;
    self._callbake=callbake;
    self.kedian_objary=[];
    self.kedian_objarykey=[];

    //////////ÕÛ¿ÛÑ¡Ôñ¹âÈ¦ÕÚµ²//////////
    var bitmapDataF_gq=new LBitmapData(datalist["jianjian_btn_back_sd"]);
    self.imgsdF_gq=new LBitmap(bitmapDataF_gq);
    self.imgsdF_gq.x=44;
    self.imgsdF_gq.y=-202;

    //////»ð¹â////////
    self.firelightA=new LSprite();
    var bitmapDataF_hg=new LBitmapData(datalist["firelight"]);
    var imgsdF_hg=new LBitmap(bitmapDataF_hg);
    imgsdF_hg.x=-637/2;
    self.firelightA.addChild(imgsdF_hg);
    self.firelightA.alpha=0;
    self.firelightA.y=-234;

    for(var i=0;i<11;i++){
        for(var f=0;f<hangAry.length;f++){
            var thisnames=hangAry[f]+(i+1);
            if(aryesrtingAry.indexOf(thisnames)>-1){
                isendsab=true;
                suoyion++;
                suoyionA=suoyion;
            }else{
                isendsab=false;
                suoyionA=200;
            }
            var Yqipai_ziaa=thisnames.toString();
            if(window[Yqipai_ziaa]){
                Yqipai_ziaa=new Yqipai_zi(isendsab,thisnames,suoyionA,window[Yqipai_ziaa]);
            }else{
                Yqipai_ziaa=new Yqipai_zi(isendsab,thisnames,suoyionA);
            }

            Yqipai_ziaa.x=(f*danweikg+50)/2;
            Yqipai_ziaa.y=(i*100+50)/2;
            if(isendsab){
                self.kedian_objary.push(Yqipai_ziaa);
                self.kedian_objarykey.push({nm:thisnames,sy:suoyionA,x:Yqipai_ziaa.x,y:Yqipai_ziaa.y});
            }
            self.addChild(Yqipai_ziaa);
            Yqipai_ziaa.addEventListener(LMouseEvent.MOUSE_UP,self.mouseuo_hs);
            Yqipai_ziaa.addEventListener(LMouseEvent.MOUSE_DOWN,self.mousedown_hs);
        }
    }
    self.x=122/2;
    self.y=469/2;
}

Yqipai_content.prototype.initSet=function(){
    var self = this;
    self.isSelect=true;
}
Yqipai_content.prototype.mousedown_hs=function(e) {
    var self = this;
}
Yqipai_content.prototype.mouseuo_hs=function(e){
    var self = this;
    // alert(e.currentTarget.parent.isSelect)
    var thisobjct=e.currentTarget;
    if(thisobjct.parent.isSelect==false || thisobjct._indexa==200) return;
	 if(yinxiao_switch){
		soundc.play();
	}
    
    thisobjct.parent.addChild(thisobjct);
    thisobjct.parent._callbake(thisobjct._name,thisobjct._indexa);
    thisobjct.parent.isfanpai==false;
    if(thisobjct._endab){
        thisobjct.parent.curren_objct=thisobjct;
        thisobjct.parent.isSelect=false;
        thisobjct.scaleEfct(function(){
            thisobjct.parent.isSelect=true;
            thisobjct.parent.showAllpai();
        });
    }
    //alert(e.currentTarget._name)
}
Yqipai_content.prototype.showAllpai=function(numArystring){
    var self = this;
    var numArystringA=numArystring || self.fanpai_canshu;
    self.fanpai_canshu=numArystringA;
    if(self.isSelect==false){
        self.curren_objct.noscaleEfct(function(){
            self.isSelect=true;
            self.showAllpai();
        });
    }
    if(self.isSelect==false || self.isfanpai==false) return;
    callshan();
    function callshan(){
		 if(yinxiao_switch){
			soundd.play();
		}
        self.isSelect=false;
        var numAry=numArystringA.split(",");
        for(var i=0;i<self.kedian_objary.length;i++){
            self.kedian_objary[i].overturn_hs(numAry[i]);
        }
    }

}

Yqipai_content.prototype.Shuffle_pai=function(){
    var self = this;
    if(self.isSelect==false) return;
    self.isSelect=false;
    var maxW=850/2;
    var maxH=1054/2;
    var objarykey_ary=self.kedian_objarykey.slice();
    var xipaixinxiao=new LSound();
    if(xipaiyin){
        xipaixinxiao.load(xipaiyin);
        xipaixinxiao.addEventListener(LEvent.COMPLETE,function(){
			if(yinxiao_switch){
				xipaixinxiao.play();
			}
        });
    }
    for (var i=0;i<self.kedian_objary.length;i++){
        self.addChild(self.kedian_objary[i]);
        var mathrdX=maxW*Math.random();
        var mathrdY=maxH*Math.random();
        var mathrdX1=maxW*Math.random();
        var mathrdY1=maxH*Math.random();
        var timea=Math.random()*1+0.3;
        var Marinpost=Math.floor(objarykey_ary.length*Math.random());
        //console.log(objarykey_ary[1].x)
        LTweenLite.to(self.kedian_objary[i],timea,{x:mathrdX,y:mathrdY,loop:false,ease:LEasing.Strong.easeOutBack}).to(self.kedian_objary[i],timea,{x:objarykey_ary[Marinpost].x,y:objarykey_ary[Marinpost].y,loop:false,ease:LEasing.Strong.easeOutCubic});
        self.kedian_objary[i]._name=objarykey_ary[Marinpost].nm;
        self.kedian_objary[i]._indexa=objarykey_ary[Marinpost].sy;
        objarykey_ary.splice(Marinpost,1);
    }
    setTimeout(function(){
        self.isSelect=true;
		if(yinxiao_switch){
				xipaixinxiao.stop();
			} 
    },2600);
}

Yqipai_content.prototype.fanpaicompt=function(){
    var self = this;
    var shadow = new LDropShadowFilter(0,45,"#ffffff",50);
    //self.curren_objct.filters = [shadow];
    /////////////ÏÔÊ¾»ð¹â//////////////
    setTimeout(sounde.play,1000);
    //sounde.play();
    self.addChild(self.firelightA);
    self.firelightA.x=self.curren_objct.x;
    self.addChild(self.curren_objct);
    LTweenLite.to(self.firelightA,1,{alpha:0.8,loop:false,ease:LEasing.Strong.easeInBounce}).to(self.firelightA,0.5,{alpha:0,loop:false,ease:LEasing.Strong.easeInExpo,onComplete:function(){
        self.removeChild(self.firelightA);
    }});

    LTweenLite.to(self.curren_objct,0.2,{scaleX:2,scaleY:2,delay:0.5,loop:false,ease:LEasing.Strong.easeOutElastic,onComplete:function(){
        var shanguang=0;
        var setintsdsd=setInterval(function(){
            if(shanguang%2==0){
                self.curren_objct.boxs_glow();
                self.addChild(self.imgsdF_gq);
            }else{
                self.curren_objct.boxs_glowhide();
                self.removeChild(self.imgsdF_gq);
            }
            shanguang++;
            if(shanguang>10){
                clearInterval(setintsdsd);
                show_Result();
            }
        },400)
    }});
}




