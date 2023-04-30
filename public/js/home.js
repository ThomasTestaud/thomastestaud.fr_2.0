
window.addEventListener('DOMContentLoaded', (event) => {

    let height = window.innerHeight;
    let width = window.innerWidth;

    class Ball {
        constructor(comp, comp_description, id, maxSpeed, outScreen = 0, sizeCoef = 1) {
            this.id = id;
            this.comp = comp;
            this.comp_description = comp_description;
            this.opacity = Math.random() + 0.7;
            this.size = Math.random() * (80 * sizeCoef) + 90;
            this.coefX = Math.random() * maxSpeed - Math.random() * maxSpeed;
            this.coefY = Math.random() * maxSpeed - Math.random() * maxSpeed;
            this.positionX = Math.random() * (width - this.size);
            this.positionY = Math.random() * (height - this.size);
            this.shape = Math.round(Math.random() * 7) + 1;
            this.angle = Math.random();
            this.angleCoef = (Math.random() - 0.5) / 500;
            this.outScreen = outScreen;

            //ballsContainer.innerHTML += `<div class='ball' id='${this.id}'></div>`;
            //ballsContainer.innerHTML += `<img class='ball' id='${this.id}' src="images/svg/shape${this.shape}.svg" style="opacity: 0;"></img>`;
            ballsContainer.innerHTML += `<div class="div-ball" id='${this.id}' style='position: relative;'>
            <img style='position: absolute; top:0; left:0; width: ${this.size}px; height: ${this.size}px;' class='ball' src="images/svg/shape${this.shape}.svg" style="opacity: 0;"></img>
            <p  style='position: absolute; top:${this.size / 2 - 50}px; left:${this.size / 2 - 50}px;'>${comp}</p>
                                        </div>`;

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

        focus() {
            console.log('focus');
            let original = this.size;
            let target = 600;
            let thisInt = setInterval(function () {
                //Ball get biger while target is not reached
                if (this.size >= target) {
                    clearInterval(thisInt);
                    let thisInt = setInterval(function () {
                        if (this.size <= original) {
                            clearInterval(thisInt);
                        }
                        this.size--;
                        //this.ball.style = `height:${this.size}px;width:${this.size}px;`;
                        console.log('smaller');
                    }, 1);
                }
                this.size;
                //this.ball.style = `height:${this.size}px;width:${this.size}px;`;
                console.log(this.size);
            }, 1);

        }
    }



    let ballsContainer = document.querySelector('#balls');
    let body = document.querySelector('body');
    let display = document.querySelector('#display');
    document.addEventListener('click', function () {
        display.innerHTML = "";
    })

    //AJAX///////
    function getAjax(varLink) {
        fetch(varLink, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('GET request failed.');
                }
            })
            .then(data => {
                console.log(data);
                createBalls(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    ///////////////
    let mainInt;
    let write;
    function createBalls(data) {
        //Create balls
        let ballname = 'a';
        let instances = [];
        for (let i = 0; i < data.length; i++) {
            instances.push(new Ball(data[i].comp, data[i].comp_description, ballname, 1, 0, 2));
            ballname += 'a';
        }

        //Pick a ramdom color from the array
        rdmColor = ["blue", "cyan", "purple", "green", "pink", "yellow", "beige"];
        function chooseColor() {
            return rdmColor[Math.floor(Math.random() * rdmColor.length)];
        }

        ////ADD EVENT LISTENER ON ALL BALLS
        //Adding click events on balls for the background-color swap
        for (let i = 0; i < data.length; i++) {
            document.querySelector('#' + instances[i].id).addEventListener('click', () => {
                //Background-color
                for (let a = 0; a < rdmColor.length; a++) {
                    body.classList.remove(rdmColor[a]);
                }
                let color = chooseColor();
                body.classList.add(color);
                //Remove background-color after a delay
                setTimeout(() => {
                    body.classList.remove(color);
                }, 5000);

                //Display skills description
                display.innerHTML = "";
                console.log(instances[i].comp_description);
                let array = instances[i].comp_description.split("");
                let a = 0;
                write = setInterval(function () {
                    display.innerHTML += array[a];
                    a++;
                    if (a >= array.length) {
                        clearInterval(write);
                    }
                }, 40);

                //Making the ball go bigger
                instances[i].focus();
            });
        }

        //Move all the balls
        mainInt = setInterval(() => {
            height = window.innerHeight;
            width = window.innerWidth;

            for (let i = 0; i < instances.length; i++) {
                document.querySelector('#' + instances[i].id).style = instances[i].refresh(height, width);
            }
        }, 10)
    }

    getAjax('https://skillsapi.thomastestaud.com/index.php?route=api&user=0');


    //Reload the balls
    function deleteBalls() {
        clearInterval(write);
        clearInterval(mainInt);
    }

    let reload = document.querySelector('#reload-balls');
    reload.addEventListener('click', function () {
        deleteBalls();
        ballsContainer.innerHTML = "";
        getAjax('https://skillsapi.thomastestaud.com/index.php?route=api&user=0');
    });


});