

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

var text = 'ababagallamaga \nafsdf asfasd \nfasd dsfasd fasfa\nsd adfs as';

var options = {
  container: container,
  width: '500',
  height: '500',
  imgUrl: 'http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg',
  text: text,
  fontProperties: fontProperties,
  textPosition: textPosition
}

addText.add(options);