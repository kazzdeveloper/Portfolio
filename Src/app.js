//https://www.superhi.com/video/smooth-movements-with-javascript

const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.2;


function animate(){
  
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  
  
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})

document.addEventListener('DOMContentLoaded', () => {
    const CursorInspects = document.querySelectorAll('#CursorInspect');
    const Pictures = document.querySelectorAll('.AboutPicture');
    const NavBar = document.querySelectorAll('nav');
    const ball = document.querySelector('.ball');

    CursorInspects.forEach(container => {
        container.addEventListener('mouseenter', () => {
            ball.style.width = '15em';
            ball.style.height = '15em';
            ball.style.zIndex = '100';
        });

        container.addEventListener('mouseleave', () => {
            ball.style.width = '5em';
            ball.style.height = '5em';
        });
    });
    Pictures.forEach(picture => {
      picture.addEventListener('mouseenter', () => {
          ball.style.width = '0em';
          ball.style.height = '0em';
      });

      picture.addEventListener('mouseleave', () => {
          ball.style.width = '5em';
          ball.style.height = '5em';
      });
  });
  NavBar.forEach(navBar => {
    navBar.addEventListener('mouseenter', () => {
        ball.style.width = '0em';
        ball.style.height = '0em';
    });

    navBar.addEventListener('mouseleave', () => {
        ball.style.width = '5em';
        ball.style.height = '5em';
    });
});
});
document.querySelectorAll('.NavLinks a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetClass = this.getAttribute('data-target');
      const targetElement = document.querySelector(targetClass);
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});
var dob = new Date("03/21/2009");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);
document.getElementById("age").innerHTML = age;

function DarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
