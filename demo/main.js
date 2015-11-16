

var addText = new window.AddText();

var container = document.getElementById('container');

var fontProperties = {
  fontSize: 40,
  fillStyle: 'white',
  fontName: 'Tahoma',
  stroke: {
    size: 7,
    color: 'black'
  }
};

var textPosition = {
  left: 20,
  top: 30
}

var text = 'ababagallamaga afsdf asfasd fasd dsfasd fasfasd adfs as';

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