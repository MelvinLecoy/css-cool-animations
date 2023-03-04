const track = document.getElementById("gallery");

window.onmousedown = e => {
    track.dataset.mousex = e.clientX;
};

window.onmouseup = () => {
    track.dataset.mousex = "0";
    track.dataset.prevPerc = track.dataset.percentage;
};

window.onmousemove = e => {
    if (track.dataset.mousex === "0") return;
    const maxMove = window.innerWidth / 2, moved = parseFloat(track.dataset.mousex) - e.clientX;
    let perc = parseFloat(track.dataset.prevPerc) + ((moved / maxMove) * -100);
    perc = Math.max(Math.min(perc, 0), -100);
    track.dataset.percentage = perc;
    const prop = {duration: 1200, fill: "forwards"};
    track.animate({transform: `translate(${perc}%, -50%)`}, prop);
    for(const image of track.getElementsByClassName("img"))
        image.animate({objectPosition: `${perc + 100}% center`}, prop);
};