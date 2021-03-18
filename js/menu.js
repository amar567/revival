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
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

function opennav(){
  darken();
  openNav();
}

function closenav(){
  darken();
  closeNav();
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
