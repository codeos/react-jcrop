# react-jcrop
一个基于jcrop的react包装 


## 使用说明

1. 引入 jquery 和 Jcrop && css

> bower install Jcrop

> <link rel="stylesheet" type="text/css" href="/bower_components/Jcrop/css/jquery.Jcrop.css">
> <script src="/bower_components/jquery/dist/jquery.js"></script>
> <script type="text/javascript" src="/bower_components/Jcrop/js/jquery.Jcrop.js"></script>

2. 引入 react-Jcrop-plus

```
var Jcrop = require('react-jcrop-plus');

<Crop src={ this.state.img } options={ this.state.options } ref="crop" />

```

3. options 参数说明：


allowSelect	true	允许新选框

allowMove	true	允许选框移动

allowResize	true	允许选框缩放

trackDocument	true	拖动选框时，允许超出图像以外的地方时继续拖动。

baseClass	'jcrop'	基础样式名前缀。说明：class="jcrop-holder"，更改的只是其中的 jcrop。

例：假设值为 "test"，那么样式名会更改为 "test-holder"

addClass	null	添加样式。

例：假设值为 "test"，那么会添加样式到class="jcrop-holder test"

bgColor	'black'	背景颜色。颜色关键字、HEX、RGB 均可。

bgOpacity	0.6	背景透明度

bgFade	false	使用背景过渡效果

borderOpacity	0.4	选框边框透明度

handleOpacity	0.5	缩放按钮透明度

handleSize	9	缩放按钮大小

aspectRatio	0	选框宽高比。说明：width/height

keySupport	true	支持键盘控制。按键列表：上下左右（移动选框）、Esc（取消选框）

createHandles	['n','s','e','w','nw','ne','se','sw']	设置边角控制器

createDragbars	['n','s','e','w']	设置边框控制器

createBorders	['n','s','e','w']	设置边框

drawBorders	true	绘制边框

dragEdges	true	允许拖动边框

fixedSupport	true	支持 fixed，例如：IE6、iOS4

touchSupport	null	支持触摸事件

shade	null	使用更好的遮罩

boxWidth	0	画布宽度

boxHeight	0	画布高度

boundary	2	边界。说明：可以从边界开始拖动鼠标选择裁剪区域

fadeTime	400	过度效果的时间

animationDelay	20	动画延迟

swingSpeed	3	过渡速度

minSelect	[0,0]	选框最小选择尺寸。说明：若选框小于该尺寸，则自动取消选择

maxSize	[0,0]	选框最大尺寸

minSize	[0,0]	选框最小尺寸

onChange	function(){}	选框改变时的事件

onSelect	function(){}	选框选定时的事件

onDblClick	function(){}	在选框内双击时的事件

onRelease	function(){}	取消选框时的事件

例:

```
var App = React.createClass({
    getInitialState : function(){
        return {
            options :{
                aspectRatio : 1,
                minSize : [50,50],
                maxSize : [180 , 180],
                onChange : this.handleCropChange,
                onSelect : this.handleCropSelect,
                onDblClick : this.handleCropDoubleClick,
                onRelease : this.handleCropRelease
            },
            img : '/images/test-def.jpg'
        };
    },
    handleCropChange : function(){
        console.log('cropChange');
    },
    handleCropSelect : function(){
        console.log('cropSelect');
    },
    handleCropDoubleClick : function(){
        console.log('cropDBClick');
    },
    handleCropRelease : function(){
        console.log('cropRelease');
    },
    handleSelectFile : function(){
        
        
    },
    handleClick : function(){
        var $crop = this.refs.crop;

        console.log($crop.tellSelect());
    },
    render : function() {
        return (
            /*jshint ignore:start */
            <div>
                <input type="file" onChange={this.handleSelectFile } ref="files"/>
                <Crop src={ this.state.img } onCropChange={ this.handleCropChange } options={ this.state.options } ref="crop"/>
                <a hef="javascript:;" onClick={ this.handleClick } >修改图片</a>
            </div>
            /*jshint ignore:end */
        );
    }
});


/*jshint ignore:start */
React.render(<App />,document.getElementById('app'));
/*jshint ignore:end */


```


4. API接口

setImage(string)	设定（或改变）图像。例：jcrop_api.setImage('newpic.jpg')

setOptions(object)	设定（或改变）参数，格式与初始化设置参数一样

setSelect(array)	创建选框，参数格式为：[x, y, x2, y2]

animateTo(array)	用动画效果创建选框，参数格式为：[x, y, x2, y2]

release()	取消选框

disable()	禁用 Jcrop。说明：已有选框不会被清除。

enable()	启用 Jcrop

destroy()	移除 Jcrop

tellSelect()	获取选框的值（实际尺寸）。例：console.log(jcrop_api.tellSelect())

tellScaled()	获取选框的值（界面尺寸）。例：console.log(jcrop_api.tellScaled())

getBounds()	获取图片实际尺寸，格式为：[w, h]

getWidgetSize()	获取图片显示尺寸，格式为：[w, h]

getScaleFactor()	获取图片缩放的比例，格式为：[w, h]


例:

```

var App = React.createClass({
    ...........
    handleClick : function(){
        var $crop = this.refs.crop;

        $crop.setImage(string);
        
        $crop.setOptions({....});
        
        .....同上

    },
    render : function() {
        return (
            /*jshint ignore:start */
            <div>
                <Crop src={ this.state.img } onCropChange={ this.handleCropChange } options={ this.state.options } ref="crop"/>
                <a hef="javascript:;" onClick={ this.handleClick } >修改图片</a>
            </div>
            /*jshint ignore:end */
        );
    }
});


```