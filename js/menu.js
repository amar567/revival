function darken(){
document.getElementById('dark').classList.toggle("disp_none");
};

function menu(){
document.getElementById('menu1').classList.toggle("none");
};
function closebtns(){
document.getElementById('container').style.display='none';
document.getElementById('extrabtn2').innerHTML=``;
document.getElementById('extrabtn1').innerHTML=``;
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function opennav(){
  darken();
  openNav();
  document.getElementById("hamburger").onClick = closenav();
}

function closenav(){
  darken();
  closeNav();
  document.getElementById("hamburger").onclick = opennav;
}

var n=1;

function toggle(){
  if(n===1){
    opennav();
    n-=1;
    console.log(n)
  }else {
    closenav();
    n+=1;
    console.log(n)
  }
}

function close(){
  document.getElementById("hamburger").click();
}

// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback){

    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 100, //required min distance traveled to be considered swipe
    restraint = 80, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 200, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
               if(distX < 0){closenav()} // if dist traveled is negative, it indicates left swipe
            }
            // else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
            //     swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            // }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

//USAGE:

var el = document.getElementById('swipezone');
swipedetect(el, function(swipedir){
    // swipedir contains either "none", "left", "right", "top", or "down"
    el.innerHTML = 'Swiped <span style="color:yellow;margin: 0 5px;">' + swipedir +'</span>';
});
