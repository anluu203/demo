let list = document.querySelector('.slider .list-img');
let images = document.querySelectorAll('.slider .list-img #image');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengImages = images.length - 1;

next.onclick = function() {
    if (active + 1 > lengImages) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
};

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengImages;
    } else {
        active -= 1;
    }
    reloadSlider();
};

let refloatslider = setInterval(() => {
    next.click();
}, 3000);

function reloadSlider() {
    let checkleft = images[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) {
        lastActiveDot.classList.remove('active');
    }
    dots[active].classList.add('active');
    clearInterval(refloatslider);
    refloatslider = setInterval(() => {
        next.click();
    }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    });
});
