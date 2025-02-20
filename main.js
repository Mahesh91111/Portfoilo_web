// ==============================togglr icon  navbar======================
let menuIcon  = document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}// ========================scrolll section active list =============================//
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.array.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    
            });
        };
    });
//    ===============================sticky navbar===================
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
//    ===============================remove  toggle Icon navbar===================
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
}
// ===========================================scroll reveal==============================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay : 200,
});
ScrollReveal().reveal('.home-content,heading', { orgin:'top' });
ScrollReveal().reveal('.home-img, .services-cointainer, sercice-box1, .contact form', { orgin: 'buttton' });
ScrollReveal().reveal('.home-contact h1, .about-img', { orgin: 'left' });
ScrollReveal().reveal('.home-contact p , .about-content', { orgin: 'right' });
// ===========================================typed js==============================
const typed =  new Typed('.multiple-text',{
    strings: ['Java FullStack Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    BackDelay: 1000,
    loop: true,
});
const form = document.querySelector('form');
const Name = document.getElementById('Name');
const Num = document.getElementById('Number');
const sub = document.getElementById('subject');
const mes = document.getElementById('Message');
function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> 
    Email:${email.value}<br> Number:${numbber.value}<br> subject:${subject.value}<br>
    Message:${message.value}`;
    Email.send({
        Host : "smtp.mailendo.com",
        Username : "mallemahesh77@gmail.com",
        Password : "mallemahesh77@gmail.com",
        To : 'mallemahesh77@gmail.com',
        From : "mallemahesh77@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "ok"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}
function checkEmail(){
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error")
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})