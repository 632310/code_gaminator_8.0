
const menu = document.querySelector ('#mobile-menu')
const menuLinks = document.querySelector ('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// show active when sliding 

const highLightMenu = ()=> {
  const elem = document.querySelector
  ('.highlight')
  const homeMenu = document.querySelector ('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const instructorMenu = document.querySelector('#instructor-page');
  let scrollPos = window.scrollY;


  // add 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    instructorMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 2670)
{
  instructorMenu.classList.add('highlight')
  aboutMenu.classList.remove('highlight')
  return
} if ((elem && window.innerWidth <960 &&scrollPos <600) || elem) {
  elem.classList.remove('highlight')
}
};

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click',highLightMenu);

// close mobile menu when clicked upon

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if (window.innerWidth <=1000 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
// slide show 

const myslide = document.querySelectorAll('.myslider'),
dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun (counter);

let timer = setInterval(autoslide, 8000);

function autoslide() {
    counter +=1;
    slidefun(counter);
}

function plusSlide(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
    let i;
    for(i =0;i<myslide.length;i++) {
     myslide[i].style.display = "none";   
    }
    for(i = 0;i<dot.length;i++) {
        dot[i].classList.remove('active');
    }
    if(n > myslide.length) {
        counter = 1;
    }
    if(n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}

// lightMode
// function toggle_light_mode() {
//     var app = document.getElementsByTagName("BODY")[0];
//     if (localStorage.lightMode == "dark") {
// 	localStorage.lightMode = "light";
// 	app.setAttribute("light-mode", "light");
//     } else {
// 	localStorage.lightMode = "dark";
// 	app.setAttribute("light-mode", "dark");
//     }		
// }

// show password

function viewPassword()
{
  var passwordInput = document.getElementById('password-field');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
  }
  else{
    passwordInput.type='password';
  }
}

// show confirm password

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

//   validate passwword

var password = document.getElementById("password-field"), myInput = document.getElementById("myInput")

function validatePassword() {
  if(password.value != myInput.value)
  {
    myInput.setCustomValidity("Incorrect Password's");
  } else {
    myInput.setCustomValidity('');
  }
}

password.onchange = validatePassword;
myInput.onkeyup = validatePassword;
