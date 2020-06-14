var myAudio: HTMLAudioElement[] = [];
myAudio.push(new Audio('A.mp3'));
myAudio.push(new Audio('C.mp3'));
myAudio.push(new Audio('F.mp3'));
myAudio.push(new Audio('G.mp3'));
myAudio.push(new Audio('hihat.mp3'));
myAudio.push(new Audio('kick.mp3'));
myAudio.push(new Audio('laugh-1.mp3'));
myAudio.push(new Audio('laugh-2.mp3'));
myAudio.push(new Audio('snare.mp3'));
function playSample(samplenumber: number) {
    myAudio[samplenumber].play();
}
window.addEventListener("load", function () {
document.querySelector("#amp3").addEventListener("click", function () { playSample(0); });
document.querySelector("#cmp3").addEventListener("click", function () { playSample(1); });
document.querySelector("#fmp3").addEventListener("click", function () { playSample(2); });
document.querySelector("#gmp3").addEventListener("click", function () { playSample(3); });
document.querySelector("#himp3").addEventListener("click", function () { playSample(4); });
document.querySelector("#kimp3").addEventListener("click", function () { playSample(5); });
document.querySelector("#la1mp3").addEventListener("click", function () { playSample(6); });
document.querySelector("#la2mp3").addEventListener("click", function () { playSample(7); });
document.querySelector("#snmp3").addEventListener("click", function () { playSample(8); });

function drumpadbeat() {
    setInterval(function () {
        playSample(5);
        playSample(8);
        playSample(4);
    }, 500);
}
document.querySelector("#playbutton").addEventListener('click', drumpadbeat);