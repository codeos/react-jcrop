'use strict';

/**
* @jsx React.DOM
*/

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
        // var $crop = this.refs.crop.getDOMNode();
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