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

function highlightThis(name) {
    const text = document.querySelector(name);
    text.classList.remove('highlightClass');
    void text.offsetHeight
    text.classList.add('highlightClass');
}

