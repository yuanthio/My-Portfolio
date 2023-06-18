// Owl Carousel Jquery
var owl = $('.owl-carousel');
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
        strings: ["Front End Web Developer.", "Freelancer.", "Hard worker.", "Person who never gives up."],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
});


