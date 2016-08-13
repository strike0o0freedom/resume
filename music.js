/**
 * Created by strike on 2016/8/12.
 */
window.onload=function(){
    var music=document.getElementById('music');
    var image=document.getElementsByTagName('img')[0];
    var audio=document.getElementsByTagName('audio')[0];
    var circle1=document.getElementsByClassName('pg_circle1')[0];
    var circle2=document.getElementsByClassName('pg_circle2')[0];
    var circle3=document.getElementsByClassName('pg_circle3')[0];
    var resume=document.getElementById("pg_resume");
    var music_on=true;

    music.onclick=function(){
       if(music_on){
           image.src="./images/music_off.png";
           music_on=false;
           audio.pause();
       }
        else{
           image.src="./images/music_on.png";
           music_on=true;
           audio.play();
       }
    }

    //点击RESUME
    resume.addEventListener("click",function(){
        circle1.style.display="block";
        setTimeout(function() {
            circle2.style.display = "block";
        },1000);
        setTimeout(function() {
            circle3.style.display = "block";
        },2000);

    })
}