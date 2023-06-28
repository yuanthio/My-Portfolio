// Owl Carousel Jquery
let owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
  

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


// Preloader 
document.addEventListener("DOMContentLoaded", function() {
    let hasAnimated = sessionStorage.getItem('hasAnimated');
    
    if (!hasAnimated) {
        let count = 0;
        let counter = setInterval(function() {
            if (count <= 100) {
            document.querySelector('.count').textContent = count + '%';
            document.querySelector('.loader').style.width = count + '%';
            count++;
            } else {
            clearInterval(counter);
            sessionStorage.setItem('hasAnimated', true);
            }
        }, 50);
    } else {
      document.querySelector('.preloader').style.display = 'none'; 
    }
});

// Multiple Text
document.addEventListener("DOMContentLoaded", function () {
    let typed = new Typed('.typed-text', {
        strings: ["Frontend Web Developer.", "Freelancer.", "Web Design.", "Web Development."],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
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

// Loading Page
window.addEventListener('beforeunload', function() {
    document.querySelector('.loader-page').style.display = 'block';
  });
  
window.addEventListener('pageshow', function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        // Halaman ditampilkan kembali setelah "undo" navigasi
        // Sembunyikan atau hapus elemen animasi loading di sini
        document.querySelector('.loader-page').style.display = 'none';
    }
});
  