let data=JSON.parse(localStorage.getItem("fitness"))||[];

function showData(){
    let list=document.getElementById("list");
    let totalTime=0;
    let totalCalories=0;
    list.innerHTML="";
    data.forEach((item,index)=>{
        let li=document.createElement("li");
        li.innerHTML=
            item.activity+"-"+item.time+"min-"+item.calories+"cal "+
            "<button onclick='deleteData("+index+")'>X</button>";
        list.appendChild(li);
        totalTime+=parseInt(item.time);
        totalCalories+=parseInt(item.calories);
    });
    document.getElementById("totalTime").innerText=totalTime;
    document.getElementById("totalCalories").innerText=totalCalories;
    let progress=(totalCalories/500)*100;
    if(progress>100)progress=100;
    document.getElementById("progressBar").style.width=progress+"%";
}
function addData(){
    let activity=document.getElementById("activity").value;
    let time=document.getElementById("time").value;
    let calories=document.getElementById("calories").value;
    if(activity==""||time==""||calories==""){
        alert("Enter all fields");
        return;
    }
    data.push({activity,time,calories});
    localStorage.setItem("fitness",JSON.stringify(data));
    showData();
    document.getElementById("activity").value="";
    document.getElementById("time").value="";
    document.getElementById("calories").value="";
}
function deleteData(index){
    data.splice(index,1);
    localStorage.setItem("fitness",JSON.stringify(data));
    showData();
}
showData();