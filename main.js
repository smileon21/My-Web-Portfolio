// wait for page to fully load

document.addEventListener('DOMContentLoaded',function() {

 //smooth scrolling for navigation
 document.querySelectorAll('a[href^="#"]').forEach(link => {
   link.addEventListener('click',function(e) {
     e.preventDefault(); 
   }) 
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
         window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior : 'smooth'
           });
          }
        });
     });

//Simple dark mode toggle
const darkModeBtn = document.getElementById('dark-mode-btn');
if (darkModeBtn) {
   darkModeBtn.addEventListener('click',function() {
      document.body.classList.toggle('dark-mode');
      this.textContent = document.body.classList.contains('dark-mode')
      
          ?'Light Mode'
          :'Dark Mode';
         });
      }


//Animate sections when they appear
const sections = document.querySelectorAll('section');

function checkVisible() {
   sections.forEach(section => {
       const sectionTop = section.getBoundingClientRect().top;
       if (sectionTop < window.innerHeight - 100) {
           section.classList.add('visible');
         }
      });
   }

window.addEventListener('scroll',checkVisible);
checkVisible();//run once on page load

 // Small: stop typing animation after first play so it doesn't look odd on repeat
window.addEventListener('load', ()=> {
const t = document.querySelector('.typing');
if(t) setTimeOut( ()=> {t.style.borderRight='0';t.style.animation='none';},3300)
});
  