var c, ctx, size, grow, x, y, dx, dy, animationId, running, whichAnimation;

function main() {
    c = document.getElementById("theCanvas");
    ctx = c.getContext("2d");
    ctx.fillStyle = "#ff0";

    size = 40;
    grow = 0.5;
    x = 290;
    y = 300;
    dx = Math.random()*2 + 1;
    dy = Math.random()*2 + 1;
    running = false;
    whichAnimation = 0;

    drawCircle();
}

function startAnim1() {
    if (running && whichAnimation == 1) {
        stopAnim();
    }
    if (!running) {
        whichAnimation = 0;
        anim1();
        running = true;
    }
}

function anim1() {
    size += grow;
    if (size < 20) {
        grow = 0.5;
    } else if (size > 60) {
        grow = -0.5;
    }

    ctx.clearRect(0, 0, 600, 600);
    drawCircle();

    animationId = window.requestAnimationFrame(anim1);
    //console.log(animationId)
}

function startAnim2() {
    if (running && whichAnimation == 0) {
        stopAnim();
    }
    if (!running) {
        whichAnimation = 1;
        anim2();
        running = true;
    }
}

function anim2() {
    x += dx;
    y += dy;
    
    if (x - size < 0 || x + size > 600) {
        dx *= -1;
        if (x - size < 0) {
            x = size;
        } else {
            x = 600 - size;
        }
    }
    if (y - size < 0 || y + size > 600) {
        dy *= -1;
        if (y - size < 0) {
            y = size;
        } else {
            y = 600 - size;
        }
    }

    ctx.clearRect(0, 0, 600, 600);
    drawCircle();
    
    animationId = window.requestAnimationFrame(anim2);
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

function stopAnim() {
    window.cancelAnimationFrame(animationId);
    running = false;
}
