let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });
var header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY>100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});


ScrollReveal().reveal('.home-content, .heading, .skills_head h2', { origin: 'top' });

ScrollReveal().reveal('.home-img img, .skills-container, .portfolio-box, .contact form, .skills_main', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img img, #colone', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, #coltwo', { origin: 'right' });


function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

const serviceID = "service_p56rb4x"
const templateID = "template_we11eam"

emailjs
.send(serviceID, templateID, params)
.then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
  console.log(res);
  alert("Your Message Sent Successfully!!");
})
.catch((err) => console.log(error));

}