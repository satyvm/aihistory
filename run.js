window.onload = function(){
    const constantDiv1 = document.getElementById("constant_div_1");
    const widthConstantDiv1 = constantDiv1.offsetWidth;
    const heightConstantDiv1 = constantDiv1.offsetHeight;
    
    const letters_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*&#%$!";

    let interval_1 = null;

    document.getElementById("random_letters_1").onmouseover = event => {
        constantDiv1.style.width = widthConstantDiv1 + "px";
        constantDiv1.style.height = heightConstantDiv1 + "px";
        let iterations_1 = 0;
    
        clearInterval(interval_1);
    
        interval_1 = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations_1) {
                        return event.target.dataset.value[index];
                    }
                    return letters_1[Math.floor(Math.random() * 58)];
                })
                .join("");
    
            if(iterations_1 >= event.target.dataset.value.length){
                clearInterval(interval_1);
            }
    
            iterations_1 += 1 / 3;
        }, 20);
    }

    const constantDiv2 = document.getElementById("constant_div_2");
    const widthConstantDiv2 = constantDiv2.offsetWidth;
    const heightConstantDiv2 = constantDiv2.offsetHeight;
    
    const letters_2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*&#%$!";

    let interval_2 = null;

    document.getElementById("random_letters_2").onmouseover = event => {
        constantDiv2.style.width = widthConstantDiv2 + "px";
        constantDiv2.style.height = heightConstantDiv2 + "px";
        let iterations_2 = 0;
    
        clearInterval(interval_2);
    
        interval_2 = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations_2) {
                        return event.target.dataset.value[index];
                    }
                    return letters_2[Math.floor(Math.random() * 58)];
                })
                .join("");
    
            if(iterations_2 >= event.target.dataset.value.length){
                clearInterval(interval_2);
            }
    
            iterations_2 += 1 / 3;
        }, 20);
    }
    let halfWidth = window.innerWidth/2;
    const textElements = document.querySelectorAll('.text_hover');
    textElements.forEach((textElement) => {
        let image = textElement.nextElementSibling;
        let textX = (textElement.getBoundingClientRect().right+textElement.getBoundingClientRect().left)/2;
        console.log(textX, halfWidth)
        if (textX<halfWidth){
            image.classList.remove('right');
            void image.offsetWidth
            image.classList.add('right');
        }
        else{
            image.classList.remove('left');
            void image.offsetWidth
            image.classList.add('left');
        }
    });

    
}

// function moveImage(event) {
//     let halfWidth = window.innerWidth/2;
//     let image = event.target.nextElementSibling;
//     let textLeft = event.target.getBoundingClientRect().left;
//     console.log(textLeft, halfWidth)
//     if (textLeft<halfWidth){
//         image.classList.remove('right');
//         void image.offsetWidth
//         image.classList.add('right');
//     }
//     else{
//         image.classList.remove('left');
//         void image.offsetWidth
//         image.classList.add('left');
//     }
// }
// image.style.top = `${yChange}px`;
//     let image = document.querySelector('.I1');
//     let text = document.querySelector('.text_hover').getBoundingClientRect();

//     let xChange = event.clientX - text.x;
//     let yChange = event.clientY - text.y;

//     console.log(xChange, yChange)

//     // console.log(xCursorPosition-rect.x, yCursorPosition-rect.y)
// //     let changeWidth = event.clientX-span.offsetWidth;
// //     let spanHeight = span.offsetHeight;

//     image.style.top = `${500 + yChange}px`;
//     image.style.left = `${1000 + xChange}px`;
// }

function highlightThis(name) {
    const text = document.querySelector(name);
    text.classList.remove('highlightClass');
    void text.offsetHeight
    text.classList.add('highlightClass');
}

