
window.addEventListener('DOMContentLoaded', (event) => {

    let height = window.innerHeight;
    let width = window.innerWidth;

    class Ball {
        constructor(id, maxSpeed, outScreen = 0, sizeCoef = 1) {
            this.id = id;

            this.opacity = Math.random();
            this.size = Math.random() * (150 + 30) * sizeCoef;
            this.coefX = Math.random() * maxSpeed - Math.random() * maxSpeed;
            this.coefY = Math.random() * maxSpeed - Math.random() * maxSpeed;
            this.positionX = Math.random() * (width - this.size);
            this.positionY = Math.random() * (height - this.size);
            this.shape = Math.round(Math.random() * 7) + 1;
            this.angle = Math.random();
            this.angleCoef = (Math.random() - 0.5) / 500;
            this.outScreen = outScreen;

            //ballsContainer.innerHTML += `<div class='ball' id='${this.id}'></div>`;

            ballsContainer.innerHTML += `<img class='ball' id='${this.id}' src="images/svg/shape${this.shape}.svg" style="opacity: 0;"></img>`;

            this.ball = document.querySelector("#" + this.id);

        }

        refresh(height, width) {
            this.positionY += this.coefY;
            this.positionX += this.coefX;
            this.angle += this.angleCoef;

            if (this.positionY > (height - this.size + this.outScreen) || this.positionY < (0 - this.outScreen)) {
                this.coefY *= -1;
                this.angleCoef = (Math.random() - 0.5) / 500;
            }
            if (this.positionX > (width - this.size + this.outScreen) || this.positionX < (0 - this.outScreen)) {
                this.coefX *= -1;
                this.angleCoef = (Math.random() - 0.5) / 500;
            }
            this.ball.style = `height:${this.size}px;width:${this.size}px;border-radius:50%;background-color:black;opacity:${this.opacity};position:fixed;top:${this.positionY}px;left:${this.positionX}px;`;

            return `height:${this.size}px;width:${this.size}px;opacity:${this.opacity};position:fixed;top:${this.positionY}px;left:${this.positionX}px;rotate:${this.angle}turn;`;
        }
    }



    let ballsContainer = document.querySelector('#balls');


    let body = document.querySelector('body');

    let ballname = 'a';
    let instances = [];
    for (let i = 0; i < 25; i++) {
        instances.push(new Ball(ballname, 1, 100, 0.8));
        ballname += 'a';
    }

    rdmColor = ["blue", "cyan", "purple", "green", "pink", "yellow", "beige"];
    function chooseColor() {
        return rdmColor[Math.floor(Math.random() * rdmColor.length)];
    }

    for (let i = 0; i < 25; i++) {
        document.querySelector('#' + instances[i].id).addEventListener('click', () => {
            for (let a = 0; a < rdmColor.length; a++) {
                body.classList.remove(rdmColor[a]);
            }
            body.classList.add(chooseColor());
            console.log(chooseColor());
        });
    }

    setInterval(() => {
        height = window.innerHeight;
        width = window.innerWidth;

        for (let i = 0; i < instances.length; i++) {

            document.querySelector('#' + instances[i].id).style = instances[i].refresh(height, width);
        }
    }, 10)

});