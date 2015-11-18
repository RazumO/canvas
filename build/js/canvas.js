

/*
* var options = {
* "container": document.getElementById('container'),
* "width": "400",
* "height": "500",
* "imgUrl": "http://www.gettyimages.co.uk/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
* "text": "ababagallamaga \nafsdf asfasd \nfasd dsfasd fasfa",
* "fontProperties": {
*   "fontSize": 40,
*   "fillStyle": "red",
*   "fontName": "Tahoma",
*   "stroke": {
*     "size": 7,
*     "color": "blue"
*     }
*   },
*   "textPosition": {
*     "left": 50,
*     "top": 20
*   }
* }
* */

var AddText = function () {
  var NUMBER_PICKER_ADD_TEXT = 'px';
  var NUMBER_PICKER_STEP = 10;
  var NUMBER_OF_ZERO = 10;
  var NUMBER_MIN = 0;
  var NUMBER_MAX = 300;
  var RETREAT_DEVIDER = 2;
  var RETREAT_DEVIDER_HEIGHT = 3;

  var canvas = document.createElement("CANVAS");
  canvas.setAttribute('class', 'canvas');
  var ctx = canvas.getContext('2d');
  var imgSize;
  var startPosition;
  var percentsTextPosition;
  //ctx.clearRect(20,20,100,50);
  var textPositionCurrent;

  this.add = function (options) {
    options.fontProperties.font = function () {
      return this.fontSize + "px " + this.fontName;
    };
    options.container.style['background-size'] = 'contain';
    options.container.style['background-repeat'] = 'no-repeat';
    options.container.style['background-position'] = 'center center';
    options.container.style['background-image'] = 'url(' + options.imgUrl + ')';
    options.container.style.width = options.width + 'px';
    options.container.style.height = options.height + 'px';
    options.container.style.position = 'relative';

    var mousemoveListener = function (event) {
      console.log('mousemove:', event.clientX, event.clientY);
      if (imgSize) {
        ctx.clearRect(0, 0, imgSize.width, imgSize.height);

        var diff = {
          x: startPosition.x - event.clientX,
          y: startPosition.y - event.clientY
        };
        var textPosition = {
          left: percentsTextPosition.left - diff.x,
          top: percentsTextPosition.top - diff.y
        };
        textPositionCurrent = textPosition;
        ctx = drawText(options.text, options.fontProperties, textPosition);
      }
    }

    canvas.addEventListener('mousedown', function (event) {
      console.log('mosuedown:', event.clientX, event.clientY);
      startPosition =  {
        x: event.clientX,
        y: event.clientY
      };
      canvas.addEventListener('mousemove', mousemoveListener);
    });

    canvas.addEventListener('mouseup', function (event) {
      console.log('mosueup', event.clientX, event.clientY);
      canvas.removeEventListener('mousemove', mousemoveListener);
      percentsTextPosition = textPositionCurrent;
    });

    var img = new Image();
    img.onload = function () {
      imgSize = getImageSize(img, options.width, options.height);
      canvas.setAttribute('width', imgSize.width + 'px');
      canvas.setAttribute('height', imgSize.height + 'px');
      //if (imgSize.top) {
      //  canvas.style['padding-top'] = imgSize.top;
      //} else if (imgSize.left) {
      //  canvas.style['padding-left'] = imgSize.left;
      //}
      canvas.style.position = 'absolute';
      canvas.style.top = '0px';
      canvas.style.bottom = '0px';
      canvas.style.left = '0px';
      canvas.style.right = '0px';
      canvas.style.margin = 'auto';
      ctx.clearRect(0, 0, imgSize.width, img.height);
      percentsTextPosition = textPositionCurrent ? textPositionCurrent : {
        left: (textPosition.left * imgSize.width) / 100,
        top: (textPosition.top * imgSize.height) / 100
      };
      ctx = drawText(options.text, options.fontProperties, percentsTextPosition);
      options.container.appendChild(canvas);
    }
    img.src = options.imgUrl;
  }

  function drawText (text, fontProperties, percentsTextPosition)
  {
    setFontProperties(ctx, fontProperties);
    //separete by \n
    var strokeError = fontProperties.stroke.size / RETREAT_DEVIDER;
    var strokeErrorHeight = options.fontProperties.stroke.size / RETREAT_DEVIDER_HEIGHT;
    var lineheight = fontProperties.fontSize + strokeErrorHeight * 2;
    var newInput = getWidthLines(ctx, strokeError, text);
    var lines = newInput.lines;
    var size = {width: newInput.width + strokeError * 2};
    size.height = lineheight * (lines.length);

    oldText = text;
    console.log('Text position: ', percentsTextPosition);

    for (var i = 0; i < lines.length; i++) {
      ctx.strokeText(lines[i], percentsTextPosition.left, percentsTextPosition.top + (i * lineheight));
      ctx.fillText(lines[i], percentsTextPosition.left, percentsTextPosition.top + (i * lineheight));
    }
    return ctx;
  }

  function getImageSize(img, containerWidth, containerHeight) {
    console.log(containerHeight, containerWidth);
    var realImgWidth = img.width;
    var realImgHeight = img.height;
    console.log(realImgHeight, realImgWidth);
    var size;

    var half = 0.49999999999999999999999999999999999999999999;
    if (realImgWidth > realImgHeight) {
      var imgHeight = (+containerWidth / realImgWidth) * realImgHeight;
      var top = options.height / 2 - imgHeight / 2;
      size = {
        width: +containerWidth,
        height: imgHeight,
        top: Math.round(top + half)
      }
      //ctx.drawImage(img, 0, options.height / 2 - imgHeight / 2, options.width, imgHeight);
    } else {
      var imgWidth = (+containerHeight / realImgHeight) * realImgWidth;
      var left = options.width / 2 - imgWidth / 2;
      size = {
        width: imgWidth,
        height: +containerHeight,
        left: Math.round(left + half)
      }
      //ctx.drawImage(img, options.width / 2 - imgWidth / 2, 0, imgWidth, options.height);
    }
    console.log(size);
    return size;
  }


  function setFontProperties(ctx, fontProperties) {
    //console.log(fontProperties);
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