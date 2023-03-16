
window.addEventListener('DOMContentLoaded', (event) => {


    let body = document.querySelector('body');
    let projects = document.getElementsByClassName('article-project');
    let animateProject = document.querySelectorAll('.project');

    animateProject[0].classList.toggle('show');
    animateProject[0].scrollIntoView();

    for (let i = 0; i < projects.length - 1; i++) {
        let scrollDown = '.scroll-down-' + i;
        let targetDown = '#project-' + (i + 1);

        document.querySelector(scrollDown).addEventListener('click', () => {
            document.querySelector(targetDown).scrollIntoView({ behavior: "smooth" }); ({
                behavior: 'smooth'
            });
            body.classList.toggle('white');
            animateProject[i + 1].classList.toggle('show');
            setTimeout(() => {
                animateProject[i].classList.toggle('show');
            }, 500);
        });
    }
    for (let i = 1; i < projects.length; i++) {
        let scrollUp = '.scroll-up-' + i;
        let targetUp = '#project-' + (i - 1);

        document.querySelector(scrollUp).addEventListener('click', () => {

            document.querySelector(targetUp).scrollIntoView({ behavior: "smooth" }); ({
                behavior: 'smooth'
            });
            body.classList.toggle('white');
            animateProject[i - 1].classList.toggle('show');
            setTimeout(() => {
                animateProject[i].classList.toggle('show');
            }, 500);
        });
    }


    setTimeout(() => {
        document.querySelector('#project-0').scrollIntoView();
    }, 100);

    /*let round = document.querySelector('.round');
    let roundContent = round.textContent;
    let deg = 360 / roundContent.length;
    let roundContentArray = roundContent.split("");

    let newRoundContent = "";
    let rotate = 0;
    for (let i = 0; i < roundContentArray.length; i++) {
        newRoundContent += "<p style='rotate: " + rotate.toFixed(1) + "deg;'>" + roundContentArray[i] + "</p>";
        rotate += deg;
    }
    round.innerHTML = newRoundContent;*/


    let round = document.querySelectorAll('.round');

    for (let i = 0; i < round.length; i++) {

        let roundContent = round[i].textContent;
        let deg = 360 / roundContent.length;
        let roundContentArray = roundContent.split("");

        let newRoundContent = "";
        let rotate = 0;
        for (let i = 0; i < roundContentArray.length; i++) {
            newRoundContent += "<p style='rotate: " + rotate.toFixed(1) + "deg;'>" + roundContentArray[i] + "</p>";
            rotate += deg;
        }
        round[i].innerHTML = newRoundContent;
    }

});