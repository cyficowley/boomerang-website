import anime from 'animejs';

let path1 = anime.path("#path1");

let developing = true;

let speed_factor = 1;

if(developing){
    speed_factor = 0;
}

let planeAnimation1 = anime({
    targets: ".plane",
    translateX: path1('x'),
    translateY: path1('y'),
    rotate: path1('angle'),
    easing: 'linear',
    duration: 2000 * speed_factor,
    autoplay: true
});

let path2 = anime.path("#path2");

let planeAnimation2 = anime({
    targets: ".plane",
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    easing: 'linear',
    duration: 2000 * speed_factor,
    autoplay: false
});

let path3 = anime.path("#path3");

let planeAnimation3 = anime({
    targets: ".plane",
    translateX: path3('x'),
    translateY: path3('y'),
    rotate: path3('angle'),
    opacity: 0,
    easing: 'easeOutQuad',
    duration: 2000 * speed_factor,
    autoplay: false
});

let canAnimation = anime({
    targets: ".can",
    opacity: 100,
    translateY: 400,
    easeing: "easeOutBounce",
    duration: 6000 * speed_factor,
    autoplay: false
});

let titleAnimation = anime({
    targets: ".title-text",
    y: 200,
    easeing: "easeInOutSine",
    duration: 2000 * speed_factor,
    autoplay: false
});

planeAnimation1.finished.then(function () {
    planeAnimation2.play();
    canAnimation.play();  
});

planeAnimation2.finished.then(function () {
    planeAnimation3.play();
    titleAnimation.play();   
});

planeAnimation3.finished.then(function () {
    console.log("breh")
    document.body.style.overflowY = "visible";
});