const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
document.querySelector("h1").onmouseover = e => {
    let itr = 0;
    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split("").map((l, idx) => {
            if (idx < itr) return e.target.dataset.value[idx];
            return letters[Math.floor(Math.random() * 52)];
        }).join("");
        if (itr >= e.target.dataset.value.length) clearInterval(interval);
        itr += 1/3;
    }, 30);
};