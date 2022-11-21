 function updatetime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var am_or_pm = document.getElementById("am-or-pm");

    if(hours >= 12){
        am_or_pm .innerHTML = "PM";
    }else{
        am_or_pm .innerHTML = "AM";
    }
    if(Hours>= 12){
        Hours = Hours -12;
    }   
     document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Second").innerHTML = second;
 }
 setInterval(updatetime,1000);