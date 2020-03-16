let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
function white() {
    // alert()
    let change = document.getElementById('all');
    change.style.color = "green";
    change.style.background = "blue";
    change.style.fontSize = "20pt";

}