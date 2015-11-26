


var container = document.getElementById('container');

var fontProperties = {
  fontSize: 40,
  fillStyle: 'red',
  fontName: 'Tahoma',
  stroke: {
    size: 7,
    color: 'blue'
  }
};

var textPosition = {
  left: 29.142857142857142, top: 42.2
}

var text = '213123';

var options = {
  container: container,
  "editable": false,
  width: '400',
  height: '500',
  imgUrl: 'http://images.entertainment.ie/images_content/rectangle/620x372/success-kid.jpg',
  text: text,
  fontProperties: fontProperties,
  textPosition: textPosition
};

var cb = new window.CanvasBanner(options);

var textarea = document.getElementById('text')
var text = document.getElementById('text').value = (JSON.stringify(options, null, 2));

var btn = document.getElementById('btn');
btn.onclick = function () {
  var textarea = document.getElementById('text');
  var text = textarea.value;
  var newOptions = JSON.parse(text);
  newOptions.container = container;
  cb.reinit(newOptions);
};

//addText.add(options);

var textarea2 = document.getElementById('text2');
  textarea2.onkeyup = function() {
    var text2 = textarea2.value;
    var textarea = document.getElementById('text');
    var text = textarea.value;
    var newOptions = JSON.parse(text);
    newOptions.container = container;
    newOptions.text = text2;
    cb.drawText(text2);
    //addText.add(newOptions);
  }