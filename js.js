// var todool1 = document.createElement("ol");
// var completedol1 = document.createElement("ol");

function newItem(){
  var item = document.getElementById("activity").value;
  document.getElementById("activity").value = "";
  
  var ol = document.getElementById("todool");
  
  var li = document.createElement("li");
  //var todoelement = document.createElement("li");
  
  
  li.appendChild(document.createTextNode(item)); 
  //todoelement.appendChild(document.createTextNode(item));  
   
  ol.appendChild(li);
  //todool1.appendChild(todoelement);
  
  
  li.onclick = removeItem;
 // todoelement.onclick = removeItem;
  
  localStorage.setItem("todoli",ol.innerText);   
  }

function removeItem(e) {
  var parent = e.target.parentElement;
  e.target.parentElement.removeChild(e.target);
  // var i ;
  // for(i = 0; i < todool1.children.length;i++){
  //   if(todool1.childNodes[i].innerText == e.target.innerText)
  //       todool1.removeChild(todool1.children[i]);
  // }
  
  
  var ol = document.getElementById("completedol");
   var li = document.createElement("li");
   //var completedeleemnt = document.createElement("li");
   
   
    li.appendChild(document.createTextNode(e.target.innerText));
   // completedeleemnt.appendChild(document.createTextNode(e.target.innerText));
    
    li.onclick = addAgain;
   // completedeleemnt.onclick = addAgain;
    
    ol.appendChild(li); 
 // completedol1.appendChild(completedeleemnt);
  
   localStorage.setItem("completedli", ol.innerText); 
   localStorage.setItem("todoli", parent.innerText); 
}

function addAgain(e){
  var parent = e.target.parentElement;
   e.target.parentElement.removeChild(e.target);
   
  //  var i ;
  // for(i = 0; i < completedol1.children.length;i++){
  //   if(completedol1.childNodes[i].innerText == e.target.innerText)
  //       completedol1.removeChild(completedol1.children[i]);
  // }
  var ol = document.getElementById("todool");
   var li = document.createElement("li");
   //var todoelement = document.createElement("li");
   
   
    li.appendChild(document.createTextNode(e.target.innerText));
    //todoelement.appendChild(document.createTextNode(e.target.innerText));  
     
  ol.appendChild(li);
  //todool1.appendChild(todoelement);
  
  li.onclick = removeItem;
  //todoelement.onclick = removeItem;
  
  localStorage.setItem("todoli",ol.innerText); 
  localStorage.setItem("completedli", parent.innerText);
}

window.onload = function(){
  
  // console.log(todool1.childNodes);
  // console.log(completedol1.childNodes);
  //document.getElementById("todool").innerText.onclick = removeItem;
  //document.getElementById("completedol").innerText.onclick = addAgain;
  document.getElementById("todool").innerText =  localStorage.getItem("todoli");
  document.getElementById("completedol").innerText =  localStorage.getItem("completedli");
  
}

