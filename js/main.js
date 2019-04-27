

function move() {
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}




// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("logo").style.color = "white";
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("image").style.width = "20%";
    document.getElementById("header__navbar").style.backgroundAttachment = "black";

  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("image").style.width = "30%";
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}
