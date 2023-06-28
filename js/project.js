// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwULQvG9QnlwG_SrFyUPh-p_-6VYVbunr9946fIC36M2LnMbW9acehAWlUzXFt-nPOzHw/exec'
const form = document.forms['yuanthio-contact-form']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
myAlert.classList.toggle('d-none');

form.addEventListener('submit', e => {
e.preventDefault();

btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        myAlert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))   
});


// Navbar Scroll
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-example2');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navbar Collapse
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', function() {
    navbar.classList.toggle('show');
});

// none list bg-social-media
let offcanvas = document.getElementById('offcanvasWithBothOptions');

offcanvas.addEventListener('show.bs.offcanvas', function () {
    let socialMediaListItems = document.querySelectorAll('.bg-social-media li');
    socialMediaListItems.forEach(function (item) {
        item.classList.add('fadeOut');
    });
});

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
    let socialMediaListItems = document.querySelectorAll('.bg-social-media li');
    
    socialMediaListItems.forEach(function (item) {
        item.classList.add('fadeIn');
    });

    setTimeout(function () {
        socialMediaListItems.forEach(function (item) {
            item.classList.remove('fadeOut', 'fadeIn');
        });
    }, 500);
});

// Anchor Top
document.addEventListener("DOMContentLoaded", function() {
    let anchorTop = document.querySelector(".anchor-top");
    let isShown = false;
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0 && !isShown) {
            anchorTop.style.display = "block";
            anchorTop.classList.remove("hide");
            anchorTop.classList.add("show");
            isShown = true;
        } else if (window.scrollY === 0 && isShown) {
            anchorTop.classList.remove("show");
            anchorTop.classList.add("hide");
            isShown = false;
        }
    });
});

// Loading Page
window.addEventListener('beforeunload', function() {
    document.querySelector('.loader-page').style.display = 'block';
  });
  
window.addEventListener('load', function() {
    document.querySelector('.loader-page').style.display = 'none';
});
  