


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
  left: 50,
  top: 20
}

var text = 'ababagallamaga \nafsdf asfasd \nfasd dsfasd fasfa\nsd adfs as ababaga \nafsdf asfasd \nfasd dsfasd fasfa\nsd adfs as';

var options = {
  container: container,
  width: '400',
  height: '500',
  imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOx9QdgIohSdQ5sYj0nUC8imiRFaqdzdklKtq60rhJ9Vrqh5FnkQ',
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
  console.log(text);
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