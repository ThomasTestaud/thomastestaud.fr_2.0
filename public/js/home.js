
window.addEventListener('DOMContentLoaded', (event) => {
    class Ball {
        constructor(id) {
            this.id = id;

            this.opacity = Math.random();
            this.size = Math.random() * 50;
            this.coefX = Math.random() * 10 - Math.random() * 10;
            this.coefY = Math.random() * 10 - Math.random() * 10;
            this.positionX = Math.random() * 400;
            this.positionY = Math.random() * 600;

            ballsContainer.innerHTML += `<div id='${this.id}'></div>`;
            this.ball = document.querySelector("#" + this.id);

        }

        refresh(height, width) {
            this.positionY += this.coefY;
            this.positionX += this.coefX;

            if (this.positionY > height || this.positionY < 0) {
                this.coefY *= -1;
            }
            if (this.positionX > width || this.positionX < 0) {
                this.coefX *= -1;
            }
            this.ball.style = `height:${this.size}px;width:${this.size}px;border-radius:50%;background-color:black;opacity:${this.opacity};position:fixed;top:${this.positionY}px;left:${this.positionX}px;`;

            return `height:${this.size}px;width:${this.size}px;border-radius:50%;background-color:black;opacity:${this.opacity};position:fixed;top:${this.positionY}px;left:${this.positionX}px;`;
        }
    }



    let ballsContainer = document.querySelector('#balls');
    let height = window.innerHeight;
    let width = window.innerWidth;



    let ballname = 'a';
    let instances = [];
    for (let i = 0; i < 5; i++) {
        instances.push(new Ball(ballname));
        ballname += 'a';

    }


    document.querySelector('#' + instances[0].id).style = instances[0].refresh(height, width);


    setInterval(() => {
        height = window.innerHeight;
        width = window.innerWidth;


        instances.forEach(function (instance) {
            instance.refresh(height, width);
        });
    }, 10)

});