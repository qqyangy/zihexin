//�ۿ�ѡ����
function Yjianjian_btn_control(callback,deftNum,is0){
    base(this,LSprite,[]);
    var self = this;
    var _deftNum=0 || deftNum;
    var _is0=is0 || false;
    self.isEndable=false;
    //////��������//////
    var bitmapData = new LBitmapData(datalist["jianjian_btn_back"]);
    var imgsdback=new LBitmap(bitmapData);
    imgsdback.x=-57;
    imgsdback.y=-49;
    imgsdback.scaleX=scale_bl;
    imgsdback.scaleY=scale_bl;
    //////������͸����//////
    var bitmapData2 = new LBitmapData(datalist["jianjian_btn_opct"]);
    var imgsdopct=new LBitmap(bitmapData2);
    imgsdopct.x=-45;
    imgsdopct.y=-45;
    imgsdopct.scaleX=scale_bl;
    imgsdopct.scaleY=scale_bl;
    //////��������/////
    var jianhao=new Yjianjian_btn(datalist["jianjian_btn"],"+");
    jianhao.x=-91;
    jianhao.y=0;
    //////�����Ӻ�/////
    var jiahao=new Yjianjian_btn(datalist["jianjian_btn"],"-");
    jiahao.x=91;
    jiahao.y=0;
    //////��������/////
    var jianjian_btn_num=new Yjianjian_btn_num("jianjian_btn_num",_deftNum);
    jianjian_btn_num.x=0;
    jianjian_btn_num.y=0;

    self.addChild(imgsdback);/////��ӱ���//////
    self.addChild(jianjian_btn_num);////�������/////
    self.addChild(imgsdopct);/////��Ӱ�͸����//////
    self.addChild(jianhao); ////��Ӽ���//////
    self.addChild(jiahao); ////��ӼӺ�//////
    jianhao.addEventListener(LMouseEvent.MOUSE_UP,function(){
        if(self.isEndable) return;
        _deftNum++;
        if(_deftNum>9){
            _deftNum=0;
        }
        if(_deftNum==0 && !_is0){
            _deftNum=1;
        }
        jianjian_btn_num.change_numberA(_deftNum,"L");
        callback(_deftNum);
    });
    jiahao.addEventListener(LMouseEvent.MOUSE_UP,function(){
        if(self.isEndable) return;

        _deftNum--;
        if(_deftNum<0){
            _deftNum=9;
        }
        if(_deftNum==0 && !_is0){
            _deftNum=9;
        }

        jianjian_btn_num.change_numberA(_deftNum,"R");
        callback(_deftNum);
    });

}

Yjianjian_btn_control.prototype.Ystop=function(){
    var self = this;
    self.isEndable=true;

}

Yjianjian_btn_control.prototype.Yplay=function(){
    var self = this;
    self.isEndable=false;
}
