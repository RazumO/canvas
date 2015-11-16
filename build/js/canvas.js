

/*
* var fontProperties = {
*   fontSize: 30,
*   fillStyle: 'black',
*   fontName: 'Times New Roman',
*   stroke: {
*     size: 7,
*     color: 'black'
*   }
* }
*
* var textPosition = {
*   left: 2,
*   top: 3
* };
*
* var options = {
* container, imgUrl, textPosition, fontProperties}
* */

var AddText = function () {
  var NUMBER_PICKER_ADD_TEXT = 'px';
  var NUMBER_PICKER_STEP = 10;
  var NUMBER_OF_ZERO = 10;
  var NUMBER_MIN = 0;
  var NUMBER_MAX = 300;
  var RETREAT_DEVIDER = 2;
  var RETREAT_DEVIDER_HEIGHT = 3;

  this.add = function (options) {
    options.fontProperties.font = function () {
      return this.fontSize + "px " + this.fontName;
    };

    var oldCanvas = document.getElementById('canvas');
    if (oldCanvas) {
      oldCanvas.parentElement.removeChild(oldCanvas);
    }

    var img = new Image();
    //img.setAttribute('width', options.width);
    img.onload = function(){
      //Get img parametres
      var realImgWidth = img.width;
      var realImgHeight = img.height;
      var strokeError = fontProperties.stroke.size / RETREAT_DEVIDER;
      var canvas = document.createElement("CANVAS");
      canvas.setAttribute('id', 'canvas');
      if (realImgWidth > realImgHeight) {
        var imgHeight = (options.width / realImgWidth) * realImgHeight;
        canvas.setAttribute('width', options.width + 'px');
        canvas.setAttribute('height', imgHeight + 'px');
        options.container.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, options.width, imgHeight);
      } else {
        var imgWidth = (options.height / realImgHeight) * realImgWidth;
        canvas.setAttribute('width', imgWidth + 'px');
        canvas.setAttribute('height', options.height + 'px');
        options.container.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, imgWidth, options.height);
      }
      setFontProperties(ctx, options.fontProperties);
      //separete by \n
      var strokeErrorHeight = options.fontProperties.stroke.size / RETREAT_DEVIDER_HEIGHT;
      var lineheight = fontProperties.fontSize + strokeErrorHeight * 2;
      var newInput = getWidthLines(ctx, strokeError, options.text);
      var lines = newInput.lines;
      var size = {width: newInput.width + strokeError * 2};
      size.height = lineheight * (lines.length);
      oldText = text;
      for (var i = 0; i < lines.length; i++) {
        ctx.strokeText(lines[i], options.textPosition.left, options.textPosition.top + (i * lineheight));
        ctx.fillText(lines[i], options.textPosition.left, options.textPosition.top + (i * lineheight));
      }
    };
    img.src = options.imgUrl;
  }

  function setFontProperties(ctx, fontProperties) {
    console.log(fontProperties);
    ctx.font = fontProperties.font();
    ctx.fillStyle = fontProperties.fillStyle;
    ctx.textBaseline = "hanging";
    ctx.lineWidth = fontProperties.stroke.size;
    ctx.strokeStyle = fontProperties.stroke.color;
    this.fontProperties = fontProperties;
  }

  function getWidthLines(ctx, strokeError, text) {
    var out = {lines: text.split('\n')};
    console.log(out);
    var widthArr = [];
    out.lines.forEach(function (elem) {
      widthArr.push(ctx.measureText(elem).width + strokeError * 2);
    });
    out.width = Math.max.apply(Math, widthArr);
    return out;
  }
}



window.AdddText = AddText;