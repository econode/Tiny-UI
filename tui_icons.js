function drawPlayButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = W*0.06;
    ctx.strokeStyle = fgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = fgColor;
    ctx.moveTo(W*0.30,W*0.20);
    ctx.lineTo(W*0.90,W*0.50);
    ctx.lineTo(W*0.30,W*0.80);
    ctx.lineTo(W*0.30,W*0.20);
    ctx.fillStyle=fgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawToggleButton(id,params){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const H = canvas.height;
    const W = canvas.width;
    const R = 0.0174533; // Radians to degrees
 
    const position = params.position==1 ? 1:0;
    const bgColor = params.bgColor;
    const fgColor = params.fgColor;
    const font = params.font;
    const textString = 'text' in params ? params.text : '';
    const fontColor = params.fontColor;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = H*0.06;
    ctx.strokeStyle = bgColor;
    ctx.arc(H*0.50, H*0.50, H*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc( W - (H*0.50), H*0.50, H*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle=bgColor;
    ctx.fillRect(H*0.50,H*0.01,W-(H*1),H*0.98);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle=fgColor;
    ctx.strokeStyle = fgColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc( position?W-(H*0.50):(H*0.50), H*0.50, H*0.40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if( String(textString).length>0 ){
        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText
        ctx.fillStyle = fontColor;
        ctx.font = String( H*0.9)+"px "+font;
        ctx.fillText(textString,position?(H*0.20):H*0.95,H*0.80,W-H*1.2);
    }
}

function drawPowerButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const R = 0.0174533; // Radians to degrees
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = bgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.lineWidth = W*0.10;
    ctx.lineCap = "round";
    ctx.strokeStyle = fgColor;
    ctx.moveTo(W*0.50,W*0.20);
    ctx.lineTo(W*0.50,W*0.40);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = fgColor;
    ctx.lineWidth = W*0.10;
    ctx.arc(W*0.50, W*0.50, W*0.28, -55*R, 235*R);

    // 229 = R 4.01
    ctx.stroke();
    ctx.closePath();
}

function drawTickButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const H = canvas.height;
    const W = canvas.width;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = W*0.06;
    ctx.strokeStyle = fgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = W*0.12;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = fgColor;
    ctx.moveTo(W*0.25,W*0.55);
    ctx.lineTo(W*0.40,W*0.70);
    ctx.lineTo(W*0.75,W*0.35);
    ctx.stroke();
    ctx.closePath();
}

function drawCrossButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = W*0.06;
    ctx.strokeStyle = fgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = W*0.12;
    ctx.lineCap = "round";
    ctx.strokeStyle = fgColor;
    ctx.moveTo(W*0.30,W*0.30);
    ctx.lineTo(W*0.70,W*0.70);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = W*0.12;
    ctx.lineCap = "round";
    ctx.strokeStyle = fgColor;
    ctx.moveTo(W*0.30,W*0.70);
    ctx.lineTo(W*0.70,W*0.30);
    ctx.stroke();
    ctx.closePath();
}
    
function drawFastForwardButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = W*0.06;
    ctx.strokeStyle = fgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = fgColor;
    ctx.fillStyle=fgColor;
    ctx.moveTo(W*0.20,W*0.25);
    ctx.lineTo(W*0.55,W*0.50);
    ctx.lineTo(W*0.20,W*0.75);
    ctx.lineTo(W*0.20,W*0.25);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = fgColor;
    ctx.fillStyle=fgColor;
    ctx.moveTo(W*0.55,W*0.25);
    ctx.lineTo(W*0.90,W*0.50);
    ctx.lineTo(W*0.55,W*0.75);
    ctx.lineTo(W*0.55,W*0.25);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
    
function drawRewindButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = W*0.06;
    ctx.strokeStyle = fgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = fgColor;
    ctx.fillStyle=fgColor;
    ctx.moveTo(W*0.45,W*0.25);
    ctx.lineTo(W*0.10,W*0.50);
    ctx.lineTo(W*0.45,W*0.75);
    ctx.lineTo(W*0.45,W*0.25);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = fgColor;
    ctx.fillStyle=fgColor;
    ctx.moveTo(W*0.80,W*0.25);
    ctx.lineTo(W*0.45,W*0.50);
    ctx.lineTo(W*0.80,W*0.75);
    ctx.lineTo(W*0.80,W*0.25);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
    
function drawStopButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = W*0.06;
    ctx.strokeStyle = fgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle=fgColor;
    ctx.fillRect(W*0.25, W*0.25, W*0.50, W*0.50);
}
    
function drawPauseButton(id,fgColor,bgColor){
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.beginPath();
    ctx.lineWidth = W*0.06;
    ctx.strokeStyle = fgColor;
    ctx.arc(W*0.50, W*0.50, W*0.46, 0, 2 * Math.PI);
    ctx.fillStyle=bgColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle=fgColor;
    ctx.fillRect(W*0.25, W*0.25, W*0.20, W*0.50);
    ctx.fillRect(W*0.55, W*0.25, W*0.20, W*0.50);
}