// Grab elements
const video  = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap   = document.getElementById('snap');
const errorMsgElement = document.querySelector('span#errorMsg');

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

// Capture Image
var context = canvas.getContext('2d');

document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});

// To clear whole Canvas Area
function ClearCanvas(){
    context.clearRect(0,0,canvas.width,canvas.height);
}

// To draw Polygon over canvas image
function drawPolygon(radius=150, sides=7, r=185, g=185, b=15){

    context.translate(canvas.width/2, canvas.height/2);
    var a = ((Math.PI * 2)/sides);
    context.beginPath();
    context.moveTo(radius, 0);
    for(var i=1; i<sides; i++){
        context.lineTo(radius*Math.cos(a*i), radius*Math.sin(a*i));
    }
    context.closePath();
    context.lineWidth = 3;
    context.strokeStyle = 'rgba('+r+','+g+','+b+',1.0';
    context.fillStyle = 'rgba('+r+','+g+','+b+',0.0';
    context.fill();
    context.stroke();
    context.translate(-1*canvas.width/2, -1*canvas.height/2);
}

document.getElementById('cimg').value = canvas.toDataURL('image/png');