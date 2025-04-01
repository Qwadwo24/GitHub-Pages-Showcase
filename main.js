function getRandomNumber (){
    const getRandomNumber = Math.random();
    return Math.floor(getRandomNumber * 6 + 1)
}

document.addEventListener("DOMContentLoaded", function () {
    let luckynumber = getRandomNumber();
    const circle =document.querySelector("#circle");
    const triangle =document.querySelector("#triangle");
    const square =document.querySelector("#square");
    const rectangle =document.querySelector("#rectangle");
    const pentagon =document.querySelector("#pentagon");
    const hexagon =document.querySelector("#hexagon");
    const title =document.querySelector("#title");
    circle.addEventListener("click", function (){
            if (luckynumber == 1) {
                title.innerHTML = 
                    "you clicked on a circle! and that is th lucky shape";
        } else{
            title.innerHTML= "you clicked on a circle! and do you even have lucky";
        }
        luckynumber = getRandomNumber();
    });
    triangle.addEventListener("click", function (){
        if (luckynumber == 2) {
            title.innerHTML = 
                "you clicked on a triangle! and that is th lucky shape";
    } else{
        title.innerHTML= "you clicked on a triangle! and Try again";
    }
    luckynumber = getRandomNumber();
        });
    square.addEventListener("click", function (){
        if (luckynumber == 3) {
            title.innerHTML = 
                "you clicked on a square! and that is th lucky shape";
    } else{
        title.innerHTML= "you clicked on a square! and Wow, make a good choice for once";
    }
    luckynumber = getRandomNumber();  
    });
    rectangle.addEventListener("click", function (){
        if (luckynumber == 4) {
            title.innerHTML = 
                "you clicked on a recctangle! and that is th lucky shape";
    } else{
        title.innerHTML= "you clicked on a rectangle! and great job for not doing a good job";
    }
    luckynumber = getRandomNumber();
        });
    pentagon.addEventListener("click", function (){
       if (luckynumber == 5) {
            title.innerHTML = 
                "you clicked on a Pentagon! and that is th lucky shape";
    } else{
        title.innerHTML= "you clicked on a Pentagon! and i am evn tired of you";
    }
    luckynumber = getRandomNumber();
    });

    hexagon.addEventListener("click", function (){
        if (luckynumber == 6) {
            title.innerHTML = 
                "you clicked on a hexagon! and that is th lucky shape";
    } else{
        title.innerHTML= "you clicked on a hexagon! and pick again";
    }
    luckynumber = getRandomNumber();
       });

});