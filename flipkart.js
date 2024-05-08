let flag = 0;

function controller(x){
    
    if (flag == -1){
        flag = 2;
    } 
    else if (flag == 2){
        flag= 0;
    }

    else {
        flag = flag + x;
    }

    slidechange(flag);
}




function slidechange(num){
    let slidearray = document.getElementsByClassName("Slider");
    
    for(let i=0;i < slidearray.length ; i++){
        slidearray[i].style.display = 'none';
    }

    slidearray[num].style.display = 'block';
}


function change(num){
    let imagearray = document.getElementsByClassName('images');

    let afterarray = ["images/1-2b.webp","images/1-3b.webp","images/1-4b.webp","images/1-5b.webp","images/1-1b.webp","images/shoes2.jpeg"];

    for (let i = 0 ; i < imagearray.length; i++ ){
        if(num === i ){
            imagearray[i].setAttribute('src', afterarray[i]);
        }
    }
    
}

function reverse(num){
    let imagearray = document.getElementsByClassName('images');

    let beforearray = ["images/1-2a.webp","images/1-3a.webp","images/1-4a.webp","images/1-5a.webp","Camera.webp","images/shoes1.webp"];


    for (let i = 0 ; i < imagearray.length; i++ ){
        if(num === i ){
            imagearray[i].setAttribute('src', beforearray[i]);
        }
    }
}