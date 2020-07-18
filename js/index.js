//font-family: 'Roboto', sans-serif;
//font-family: 'Roboto Condensed', sans-serif;
//font-family: 'Roboto Slab', serif;
//font-family: 'Ubuntu Condensed', sans-serif;

var timer = setInterval(nextImage, 4000);
var curImage = 0;
var numImages = 17;

function nextImage() {
    var e;
    var a;
    // remove showMe class from current image
    e = document.getElementsByClassName("slides")[curImage];
    removeClass(e, "showMe");

    console.log(e)

    // compute next image
    curImage++;
    if (curImage > numImages - 1) {
        curImage = 0;
    }

    // add showMe class to next image
    e = document.getElementsByClassName("slides")[curImage];
    addClass(e, "showMe");
}

function addClass(elem, name) {
    var c = elem.className;
    if (c) c += " ";  // if not blank, add a space separator
    c += name;
    elem.className = c;
}

function removeClass(elem, name) {
    var c = elem.className;
    elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
}
