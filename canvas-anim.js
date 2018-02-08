var c, ctx, size, grow, animationId, running;

function main() {
    c = document.getElementById("theCanvas");
    ctx = c.getContext("2d");
    ctx.fillStyle = "#ff0";

    size = 40;
    grow = 0.5;
    running = false;

    drawCircle();
}

function startAnim() {
    if (!running) {
        anim();
        running = true;
    }
}

function anim() {
    running = true;

    size += grow;
    if (size < 20) {
        grow = 0.5;
    } else if (size > 60) {
        grow = -0.5;
    }

    ctx.clearRect(0, 0, 600, 600);
    drawCircle();

    animationId = window.requestAnimationFrame(anim);
    //console.log(animationId)
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(300, 300, size, 0, Math.PI * 2);
    ctx.fill();
}

function stopAnim() {
    window.cancelAnimationFrame(animationId);
    running = false;
}
