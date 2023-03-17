
window.addEventListener('DOMContentLoaded', (event) => {

    let height = window.innerHeight;
    let width = window.innerWidth;

    class Ball {
        constructor(id, maxSpeed) {
            this.id = id;

            this.opacity = Math.random();
            this.size = Math.random() * 150 + 30;
            this.coefX = Math.random() * maxSpeed - Math.random() * maxSpeed;
            this.coefY = Math.random() * maxSpeed - Math.random() * maxSpeed;
            this.positionX = Math.random() * (width - this.size);
            this.positionY = Math.random() * (height - this.size);
            this.shape = Math.round(Math.random() * 7) + 1;
            this.angle = Math.random();
            this.angleCoef = (Math.random() - 0.5) / 500;

            //ballsContainer.innerHTML += `<div class='ball' id='${this.id}'></div>`;

            ballsContainer.innerHTML += `<img class='ball' id='${this.id}' src="images/svg/shape${this.shape}.svg" style="opacity: 0;"></img>`;

            this.ball = document.querySelector("#" + this.id);

        }

        refresh(height, width) {
            this.positionY += this.coefY;
            this.positionX += this.coefX;
            this.angle += this.angleCoef;

            if (this.positionY > (height - this.size) || this.positionY < 0) {
                this.coefY *= -1;
                this.angleCoef = (Math.random() - 0.5) / 500;
            }
            if (this.positionX > (width - this.size) || this.positionX < 0) {
                this.coefX *= -1;
                this.angleCoef = (Math.random() - 0.5) / 500;
            }
            this.ball.style = `height:${this.size}px;width:${this.size}px;border-radius:50%;background-color:black;opacity:${this.opacity};position:fixed;top:${this.positionY}px;left:${this.positionX}px;`;

            return `height:${this.size}px;width:${this.size}px;opacity:${this.opacity};position:fixed;top:${this.positionY}px;left:${this.positionX}px;rotate:${this.angle}turn;`;
        }
    }



    let ballsContainer = document.querySelector('#balls');



    let ballname = 'a';
    let instances = [];
    for (let i = 0; i < 25; i++) {
        instances.push(new Ball(ballname, 1));
        ballname += 'a';

    }



    setInterval(() => {
        height = window.innerHeight;
        width = window.innerWidth;

        for (let i = 0; i < instances.length; i++) {
            document.querySelector('#' + instances[i].id).style = instances[i].refresh(height, width);
        }
        /*
                instances.forEach(function (instance) {
                    instance.refresh(height, width);
                });*/
    }, 10)

});