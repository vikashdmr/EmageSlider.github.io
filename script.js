let green=0;
function controler(x){
    green=green+x; 
    if(green>4){
        green=0;
    }
    if(green<0){
        green=4;
    }
    slideshow(green);
   
}
slideshow(green);


function slideshow(num){
let slids = document.getElementsByClassName("slide");
    for(let y of slids) {
        y.style.display='none';
    }
slids[num].style.display='block';

}
