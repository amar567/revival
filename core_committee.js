var mobMenuClicked=0;

const namesList={
  "Tech Team":[
    {src:"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",name:"xyz",insta:"xyz",email:"@xuz",fb:"fuvnfusvb"},
    {src:"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",name:"lkd",insta:"lkd",email:"aushcuas",fb:"fuvnfusvb"}
  ],
  "Tech Team":[
    {src:"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",name:"xyz",insta:"xyz",email:"@xuz",fb:"fuvnfusvb"},
    {src:"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",name:"lkd",insta:"lkd",email:"aushcuas",fb:"fuvnfusvb"}
  ],
  "Tech Team":[
    {src:"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",name:"xyz",insta:"xyz",email:"@xuz",fb:"fuvnfusvb"},
    {src:"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",name:"lkd",insta:"lkd",email:"aushcuas",fb:"fuvnfusvb"}
  ]
}

  if(window.innerWidth<=1079){
    console.log("hell");
    document.getElementById("events-leftBody").setAttribute('style','display: flex !important');
    document.getElementById("events-rightBody").setAttribute("style","display:none");
  }
  var eventActive="Tech Team";
  for(const key in namesList){
    var node = document.createElement("div");                 // Create a <li> node
    var textnode = document.createTextNode(key);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("events-listContainer").appendChild(node);
    node.addEventListener("click",evtUpdate)
    node.classList.add("events-listItems")
  }
  document.getElementById("events-listContainer").childNodes[0].style.marginTop=0;
  var evtActive=document.getElementById("events-listContainer").childNodes[0];
subFunc(eventActive)
  function evtUpdate(evt){
    if(window.innerWidth<=1079){
      document.getElementById("arrow").setAttribute('style','display:block !important')
      document.getElementById("events-leftBody").setAttribute('style','display: none !important');
      document.getElementById("events-rightBody").setAttribute("style","display:block");
    }
      var elem=evt.currentTarget;
      console.log(elem.innerHTML)
      eventActive=elem.innerHTML;
      if(eventActive.indexOf("<")!=-1){return}
      elem.classList.add("active");
      evtActive.classList.remove("active");
      evtActive.innerHTML=evtActive.innerHTML.split("<")[0];
      evtActive=elem;
      elem.innerHTML=eventActive+`<div style="
      width: 6px;
      height: 6px;
      background: black;
      border-radius: 150%;
      align-self: center;
      margin-left: 10px;
  "></div>`}
    function subFunc(eventActive){
    document.getElementById('event-heading').innerHTML=eventActive;
    for (i = 0; i < namesList[eventActive].length; i++) {
      var src= namesList[eventActive][i].src;
      var email = namesList[eventActive][i].email;
      var name = namesList[eventActive][i].name;
      var insta = namesList[eventActive][i].insta;
      var fb = namesList[eventActive][i].fb;
      var div = `
      <div class="peopleHolder">
          <img class="peopleImage" alt="" src=${src} style="width: 210px;border-radius: 50%;padding: 2px;background: white;border: solid;">

        <div style="font-size: 33px;color: black;">${name}</div>
        <div style="width: 60%;background: black;height: 2px;"></div>
          <div style=""> ${email} </div>
          <div style="">${insta} </div>
          <div>${fb} </div>
      </div>`
      document.getElementById("coreContainer").innerHTML+=div;
    }
    console.log(namesList[eventActive].length);
  }

  function arrow(){
    document.getElementById("arrow").setAttribute("style","display:none !important");
    document.getElementById("events-leftBody").setAttribute('style','display: flex !important');
    document.getElementById("events-rightBody").setAttribute("style","display:none");
  }
  function menu(){
    if(mobMenuClicked%2==0){
    document.getElementById("mobMenuHolder").setAttribute("style","display:block!important")
  }
  else{
    document.getElementById("mobMenuHolder").setAttribute("style","display:none!important")
  }
  mobMenuClicked+=1;
  }
