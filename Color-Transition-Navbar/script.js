for (const link of document.getElementsByClassName("link"))
    link.onmousemove = e => link.style.setProperty("--trans", `${70 + 30 * (e.clientX / link.offsetWidth)}%`);