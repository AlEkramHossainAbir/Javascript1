var data = document.getElementById("data");
var btn = document.getElementById("btn");
var table = document.getElementById("data");

btn.style.fontSize= "16px";
btn.style.margin= "2rem 3rem";
btn.style.float= "right";
table.style.cssText = "   width: 800px;float: left;margin-right: 200px;display: none;";



let x
count =0;
let add = () => {
    if(count==0){
        data.style.display = "block";
    }
    else{
    x= data.rows.length;
    var table = data;
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3= row.insertCell(2);
    cell1.innerHTML= '<input id="name" placeholder="Student Name">'
    cell2.innerHTML = '<input id="payment" placeholder="Payment">';
    cell3.innerHTML = '<button id="del1" onclick= "del()">Del</button>';
    }
  count++;
    
}

let del = () =>{
    if(x==1){
        data.style.display = "none";
    }
    else{
    var table = data;
    var row = table.deleteRow(x);
    x=x-1;
    }
    
}