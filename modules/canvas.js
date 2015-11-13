

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
  this.add = function (options) {
    options.fontProperties.font = function () {
      return this.fontSize + "px " + this.fontName;
    };
    var canvas = document.createElement("CANVAS");
    canvas.setAttribute('width', options.width + 'px');
    canvas.setAttribute('height', options.height + 'px');
    options.container.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var img = new Image();
    //img.setAttribute('width', options.width);
    img.onload = function(){
      ctx.drawImage(img, 0, 0, options.width, options.height);
      setFontProperties(ctx, options.fontProperties);
      ctx.fillText(options.text, options.textPosition.left, options.textPosition.top);
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
  }

}



window.AdddText = AddText;