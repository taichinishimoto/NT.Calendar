function gety(y){
  var y0="(日)";
  var y1="(月)";
  var y2="(火)";
  var y3="(水)";
  var y4="(木)";
  var y5="(金)";
  var y6="(土)";

  if(y==0){document.write(y0.fontcolor("red"))}
  if(y==1){document.write(y1)}
  if(y==2){document.write(y2)}
  if(y==3){document.write(y3)}
  if(y==4){document.write(y4)}
  if(y==5){document.write(y5)}
  if(y==6){document.write(y6.fontcolor("blue"))}
}

newday0=new Date();
newday=new Date();
var month=newday.getMonth()+1;
var date=newday.getDate();
document.write("現在　2021年"+month+"月"+date+"日");

newday.setMonth(newday.getMonth()+1);
newday.setDate(0);
var monthend=newday.getDate();
//document.write(monthend);
document.write("<table border='1'><tr><th>"+"日".fontcolor("red")+"</th><th>月</th>");
document.write("<th>火</th><th>水</th><th>木</th>");
document.write("<th>金</th><th>"+"土".fontcolor("blue")+"</th></tr><tr>");
newday.setDate(1);
var i=1;
if(newday.getDay()==0){
  if(newday0.getDate()==1){
    document.write("<td id='s4'>"+i);
    document.write("</td>");
  }else{
    document.write("<td id='s1'>"+i);
    document.write("</td>");
  }
}else if(newday.getDay()==1){
  if(newday0.getDate()==1){
    document.write("<td></td>");
    document.write("<td id='s6'>"+i);
    document.write("</td>");
  }else{
    document.write("<td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }
}else if(newday.getDay()==2){
  if(newday0.getDate()==1){
    document.write("<td></td><td></td>");
    document.write("<td id='s6'>"+i);
    document.write("</td>");
  }else{
    document.write("<td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }
}else if(newday.getDay()==3){
  if(newday0.getDate()==1){
    document.write("<td></td><td></td><td></td>");
    document.write("<td id='s6'>"+i);
    document.write("</td>");
  }else{
    document.write("<td></td><td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }
}else if(newday.getDay()==4){
  if(newday0.getDate()==1){
    document.write("<td></td><td></td><td></td><td></td>");
    document.write("<td id='s6'>"+i);
    document.write("</td>");
  }else{
    document.write("<td></td><td></td><td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }
}else if(newday.getDay()==5){
  if(newday0.getDate()==1){
    document.write("<td></td><td></td><td></td><td></td><td></td>");
    document.write("<td id='s6'>"+i);
    document.write("</td>");
  }else{
    document.write("<td></td><td></td><td></td><td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }
}else if(newday.getDay()==6){
  if(newday0.getDate()==1){
    document.write("<td></td><td></td><td></td><td></td><td></td><td></td>");
    document.write("<td id='s5'>"+i);
    document.write("</td></tr>");
  }else{
    document.write("<td></td><td></td><td></td><td></td><td></td><td></td>");
    document.write("<td id='s2'>"+i);
    document.write("</td></tr>");
  }
}
for(var i=2;i<=monthend;i++){
  newday.setDate(i);
  if(newday.getDay()==0){
    if(newday.getDate()==newday0.getDate()){
      document.write("<td id='s4'>"+i);
      document.write("</td>");
    }else{
    document.write("<td id='s1'>"+i);
    document.write("</td>");
    }
  }else if(newday.getDay()==6){
    if(newday.getDate()==newday0.getDate()){
      document.write("<td id='s5'>"+i);
      document.write("</td></tr><tr>");
    }else{
      document.write("<td id='s2'>"+i);
      document.write("</td></tr><tr>");
    }
  }else{
    if(newday.getDate()==newday0.getDate()){
      document.write("<td id='s6'>"+i);
      document.write("</td>");
    }else{
      document.write("<td>"+i);
      //document.write(gety(day1.getDay()));
      document.write("</td>");
    }
  }
}
document.write("</tr>");
document.write("</table>");

function Calendar(x){
  function gety(y){
    var y0="(日)";
    var y1="(月)";
    var y2="(火)";
    var y3="(水)";
    var y4="(木)";
    var y5="(金)";
    var y6="(土)";
  
    if(y==0){document.write(y0.fontcolor("red"))}
    if(y==1){document.write(y1)}
    if(y==2){document.write(y2)}
    if(y==3){document.write(y3)}
    if(y==4){document.write(y4)}
    if(y==5){document.write(y5)}
    if(y==6){document.write(y6.fontcolor("blue"))}
  }
  document.write("2021年"+x+"月");

  day1=new Date(2021,x-1);
  //document.write(monthstart);
  day1.setMonth(day1.getMonth()+1);
  day1.setDate(0);
  var monthend=day1.getDate();
  //document.write(monthend);
  document.write("<table border='1'><tr><th>"+"日".fontcolor("red")+"</th><th>月</th>");
  document.write("<th>火</th><th>水</th><th>木</th>");
  document.write("<th>金</th><th>"+"土".fontcolor("blue")+"</th></tr><tr>");
  day1.setDate(1);
  var i=1;
  if(day1.getDay()==0){
    document.write("<td id='s1'>"+i);
    document.write("</td>");
  }else if(day1.getDay()==1){
    document.write("<td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }else if(day1.getDay()==2){
    document.write("<td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }else if(day1.getDay()==3){
    document.write("<td></td><td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }else if(day1.getDay()==4){
    document.write("<td></td><td></td><td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }else if(day1.getDay()==5){
    document.write("<td></td><td></td><td></td><td></td><td></td>");
    document.write("<td>"+i);
    document.write("</td>");
  }else if(day1.getDay()==6){
    document.write("<td></td><td></td><td></td><td></td><td></td><td></td>");
    document.write("<td id='s2'>"+i);
    document.write("</td></tr>");
  }
  for(var i=2;i<=monthend;i++){
    day1.setDate(i);
    if(day1.getDay()==0){
      document.write("<td id='s1'>"+i);
      document.write("</td>");
    }else if(day1.getDay()==6){
      document.write("<td id='s2'>"+i);
      document.write("</td></tr><tr>");
    }else{
    document.write("<td>"+i);
    //document.write(gety(day1.getDay()));
    document.write("</td>");
    }
  }
  document.write("</tr>");
  document.write("</table>");
}