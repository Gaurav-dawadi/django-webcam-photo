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


var context = canvas.getContext('2d');

document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});

document.getElementById('cimg').value = canvas.toDataURL('image/png');

