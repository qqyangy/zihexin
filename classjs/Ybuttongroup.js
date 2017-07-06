//°´Å¥ÉùÒôÀà
function Ybutton_sound(callback) {
    base(this, LSprite, []);
    var self = this;
    var bitmapDataF_sound=new LBitmapData(datalist["audiobutton"]);
    var imgsdF_sound=new LBitmap(bitmapDataF_sound);
    var soundPrit=new LSprite();
    soundPrit.graphics.beginPath();
    soundPrit.graphics.lineWidth(10/2);
    soundPrit.graphics.strokeStyle("#FF0000");
    soundPrit.graphics.moveTo(-40/2,-40/2);
    soundPrit.graphics.lineTo(40/2,40/2);
    soundPrit.graphics.stroke();
    imgsdF_sound.x=-94/2/2;
    imgsdF_sound.y=-94/2/2;
    self.addChild(imgsdF_sound);

    self.addEventListener(LMouseEvent.MOUSE_UP,function(){
        if(showsezhiTnc) return;
        if(self.numChildren>1){
            setShenyinkai();
            sound_back.play();
            yinyue_switch=true;
        }else{
            setShenyinguan();
            sound_back.stop();
            yinyue_switch=false;
        }
        if(callback){
            callback();
        }
        if(yinxiao_switch){
				sounda.play();
			}
    })

    window.setShenyinkai=function(){
        self.removeChild(soundPrit);
    }
    window.setShenyinguan=function(){
        soundPrit.graphics.beginPath();
        soundPrit.graphics.lineWidth(10/2);
        soundPrit.graphics.strokeStyle("#FF0000");
        soundPrit.graphics.moveTo(-40/2,-40/2);
        soundPrit.graphics.lineTo(40/2,40/2);
        soundPrit.graphics.stroke();
        imgsdF_sound.x=-94/2/2;
        imgsdF_sound.y=-94/2/2;
        self.addChild(soundPrit);
    }


    self.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        if(showsezhiTnc) return;
        if(yinxiao_switch){
				sounda.play();
			}
    });
    self.x=995/2;
    self.y=1707/2;

}

function Ybutton_set(callback) {
    base(this, LSprite, []);
    var self = this;
    var bitmapDataF_set=new LBitmapData(datalist["setbutton"]);
    var imgsdF_set=new LBitmap(bitmapDataF_set);
    imgsdF_set.x=-96/2/2;
    imgsdF_set.y=-96/2/2;
    self.addChild(imgsdF_set);
    self.addEventListener(LMouseEvent.MOUSE_UP,function(){
        if(callback){
            callback();
        }
       // sounda.close();
        if(yinxiao_switch){
				sounda.play();
			}
    })

    self.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
        if(yinxiao_switch){
				sounda.play();
			}
    });
    self.x=137/2;
    self.y=1707/2;
}

