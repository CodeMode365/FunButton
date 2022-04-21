let butN = document.getElementById('button');
let backBody =document.getElementsByClassName('bulb-container');





//clickevent for the button

butN.addEventListener('click', function changer(){
    //rbg values
let R = Math.round(Math.random()*255);
let B = Math.round(Math.random()*255);
let G = Math.round(Math.random()*255);
let alp = Math.random()*1;
console.log(alp)



    let col ='rgba('+R+','+G+','+B+','+alp+')';
    console.log(col);
    document.body.firstElementChild.style.backgroundColor ='rgba('+R+','+G+','+B+','+alp+')';
    // changer();
})