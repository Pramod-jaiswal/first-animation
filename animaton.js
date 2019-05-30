var i=0;
var txt="Software Incubator";
function typeWriter() {

  if (i < txt.length) {
    document.getElementById("write").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 500);
  }
}
function change(){
  console.log("hello");
  var p=0,q=0,r=0,s=0;
  setInterval(frame,500);
  function frame(){

    document.getElementById("si").style.color= "rgba("+ Number(p) + "," + Number(q) + "," + Number(r) + ","+ Number(s)+")";
    r =Math.floor(Math.random()*255+1);
    p=Math.floor(Math.random()*255+1);
    q=Math.floor(Math.random()*255+1);
    s=Math.random();
  }
}
