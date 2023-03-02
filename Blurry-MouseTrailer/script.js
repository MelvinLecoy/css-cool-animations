const blob = document.getElementById("blob");

document.addEventListener("mousemove", e => {
  blob.animate({left: `${e.clientX}px`, top: `${e.clientY}px`},
                {duration: 3000, fill: "forwards"});
});