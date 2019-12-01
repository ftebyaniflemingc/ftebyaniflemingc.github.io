
/* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_fading */

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slidesshow");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 8000);    
}