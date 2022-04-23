let butN = document.getElementById('button1');
let backBody = document.getElementsByClassName('bulb-container');





//clickevent for the button

butN.addEventListener('click', function changer() {
    //rbg values
    let R = Math.round(Math.random() * 255);
    let B = Math.round(Math.random() * 255);
    let G = Math.round(Math.random() * 255);
    let alp = Math.random() * 1;
    console.log(alp)



    let col = 'rgba(' + R + ',' + G + ',' + B + ',' + alp + ')';
    // console.log(col);
    document.body.firstElementChild.style.backgroundColor = 'rgba(' + R + ',' + G + ',' + B + ',' + alp + ')';
    // changer();
})

//change background color when window is loaded
window.onload = (e) => {
    let R = Math.round(Math.random() * 255);
    let B = Math.round(Math.random() * 255);
    let G = Math.round(Math.random() * 255);
    let alp = Math.random() * 1;
    document.body.firstElementChild.style.backgroundColor = 'rgba(' + R + ',' + G + ',' + B + ',' + alp + ')';
}



//traffic
let clicker = document.getElementById('button2')
let starter = document.getElementById('button3')
let offlights = document.getElementsByClassName('bubbles');
let Onlights = document.getElementsByClassName('innerButton');
let OnlightArray = Array.from(Onlights);

// console.log(OnlightArray);
// console.log(typeof(OnlightArray))
// console.log(OnlightArray[1])

let ind = 0;
// console.log(Onlights.length)
clicker.onclick = () => {
    clicker.innerText = 'Change';
    starter.style.visibility = 'visible';
    // console.log(Onlights[ind])


        //no repeter    
        var randNum = Math.round(Math.random() * 3);
    




    Onlights[randNum].style.visibility = 'visible';
    OnlightArray.forEach((currEl, indx, arr) => {

        if (currEl != Onlights[randNum]) {
            currEl.style.visibility = 'hidden';
        }
    });
}

