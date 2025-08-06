const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '50px' ,
    duration: 2500,
    reset: true
});

sr.reveal('.home-text' ,{delay:500, origin:'left'})
sr.reveal('.home-img' ,{delay:500, origin:'right'})

sr.reveal('.about, .gallery, .contact' ,{delay:100, origin:'bottom'})

var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter > 7){
        counter = 1;
    }
},5000);


var loader;
function loadNow(opacity) {
    if(opacity <= 0) {
        displayContent();
    }
    else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.2);
        }, 150);
    }
}

function displayContent () {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});


function gotoPage(pageUrl) {
    document.getElementById("loader").style.display = "flex";
    loadPageContent(pageUrl);
    document.getElementById("loader").style.display = "none";
}

function loadPageContent(pageUrl) {
    
    fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById("kontenti").innerHTML = data;

        history.pushState(null, '', pageUrl);
    })
    .catch(error => console.error('Gabim ne ngarkimin e permbajtjes:', error));
}

window.addEventListener('popstate', function(){
    this.location.reload();
});