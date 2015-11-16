

var addText = new window.AddText();

var container = document.getElementById('container');

var fontProperties = {
  fontSize: 40,
  fillStyle: 'white',
  fontName: 'Tahoma',
  stroke: {
    size: 7,
    color: 'blue'
  }
};

var textPosition = {
  left: 30,
  top: 20
}

var text = 'ababagallamaga \nafsdf asfasd \nfasd dsfasd fasfa\nsd adfs as ababagallamaga \nafsdf asfasd \nfasd dsfasd fasfa\nsd adfs as';

var options = {
  container: container,
  width: '500',
  height: '500',
  imgUrl: 'http://www.designchen.de/wp-content/uploads/2012/12/M1.gif',
  text: text,
  fontProperties: fontProperties,
  textPosition: textPosition
};

var textarea = document.getElementById('text')
var text = document.getElementById('text').value = (JSON.stringify(options, null, 2));

var btn = document.getElementById('btn');
btn.onclick = function () {
  var textarea = document.getElementById('text')
  var text = textarea.value;
  console.log(text);
  var newOptions = JSON.parse(text);
  newOptions.container = container;
  addText.add(newOptions);
};

//addText.add(options);