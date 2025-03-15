function result(){

    var name=document.getElementById("name").Value;
    var res = document.getElementById("res");
    var per=(Math.random()*100).toFixed(2);
    res.innerHTML="the result is"+" "+per;
}