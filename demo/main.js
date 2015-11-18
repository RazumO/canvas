

var addText = new window.AddText();

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