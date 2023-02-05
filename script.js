var score = 0;
var time = 60;
var hit;

function hitSetter() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
}

function setTime() {
    setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timer").innerHTML = time;
        } else {
            document.querySelector("#bottom").innerHTML = `<h1> Game Over <br> </h1> <h2> Your Score Is: ${score} </h2>`;
        }
    }, 1000);
}

function makeBubbles() {

    var clutter = "";
    for (let index = 0; index < 207; index++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bottom").innerHTML = clutter;

}

function setScore() {
    document.querySelector("#score").innerHTML = score;
}

function mainEngine() {
    document.querySelector("#bottom").addEventListener("click", function (dets) {

        if (Number(dets.target.textContent) === hit) {
            score += 10;
            setScore();
            makeBubbles();
            hitSetter();
        };

    });
}

makeBubbles();
setTime();
hitSetter();
setScore();
mainEngine();
