document.querySelector('h1').style.borderBottom = "3px solid black";
document.querySelectorAll('h2').forEach((el) => el.style.borderBottom = "3px solid black");
document.querySelectorAll('a').forEach((el) => {
    el.style.color = "black";
    el.style.textDecoration = "none";
    el.style.background = "none";
});

document.querySelector('#social-networks').style.marginTop = "30px";
document.querySelector('footer').style.visibility = "hidden";
document.querySelector('hr').style.visibility = "hidden";
