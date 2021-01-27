let custArray = [];

let cityArray = [];

function formSubmitEvent() {
 let name = document.getElementById("custname").value;
 let city = document.getElementById("cityname").value;
 let paytype = document.getElementById("paytype").value;
 let cust = name + " " + city + " " + paytype;
 custArray.push(cust);

 let myUl = document.getElementById("list");
 myUl.innerHTML = "";
 
 for (let i = 0; i <custArray.length; i++) {
  let anotherLi = document.createElement("li");
  anotherLi.appendChild(document.createTextNode(custArray[i]));

  myUl.appendChild(anotherLi);


 }
}



