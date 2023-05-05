let slider = document.getElementById("slider");
let pos = 0;

let images = [
    './assets/b.png',
    './assets/a.png',
    './assets/c.png',
    './assets/d.png',
    './assets/e.png'
];


function next(){
    pos++;
    if(pos >= images.length){
        pos = 0;
    }
    slider.src = images[pos];
}

function prev(){
    pos--;
    if(pos < 0){
        pos = images.length -1;
    }
    slider.src = images[pos];
}

