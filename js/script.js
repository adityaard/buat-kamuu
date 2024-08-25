document.addEventListener("scroll", function () {
    let scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById("love-bar").style.width = scrollPercent + "%";
});
