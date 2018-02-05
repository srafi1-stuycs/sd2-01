var c, ctx, clearBtn, startedLine, lastCoords;
const width = 600;
const height = 600;

function main() {
    c = document.getElementById("theCanvas");
    c.addEventListener("click", drawDot);

    ctx = c.getContext("2d");
    ctx.fillStyle = "#ff0000";

    clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", clearScreen);

    startedLine = false;
    lastCoords = {
        x: 0,
        y: 0
    };
}

function clearScreen(e) {
    ctx.clearRect(0, 0, width, height);
    startedLine = false;
}

function drawDot(e) {
    e.preventDefault();
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 20, 0, 2 * Math.PI);
    ctx.fill();
    if (startedLine) {
        ctx.beginPath();
        ctx.moveTo(lastCoords.x, lastCoords.y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastCoords.x = e.offsetX;
        lastCoords.y = e.offsetY;
    } else {
        lastCoords.x = e.offsetX;
        lastCoords.y = e.offsetY;
        startedLine = true;
    }
}
