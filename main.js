// wait for page to fully load

document.addEventListener('DOMContentLoaded',function() {

 //smooth scrolling for navigation
 document.querySelectorAll('a[href^="#"]').forEach(link => {
   link.addEventListener('click',function(e) (
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
         window.scrolTo({
            top: targetSection.offsetTop - 20,
            behaviour : 'smooth'
           });
          }
        });
     });

//Simple dark mode toggle
const darkModeBtn = document.getElementById('dark-mode');
if (darkModeBtn) {
   darkModeBtn.addEventListener('click',function() {
      document.body.classList.toggle('dark-mode');
      this.textContent = document.body.classList.contains('dark-mode')
      
          ?'Light Mode'
          :'Dark Mode';
         });
      }

//Animate sections when they appear
const sections = document.querySelectorAll('section'):

function checkVisible() {
   sections.forEach(section => {
       const sectionTop = section.getBoundingClientRect().top;
       if (sectionTop < window.inerHeight - 100) {
           section.classList.add('visible');
         }
      });
   }

window.addEventListener('scroll',checkVisible);
checkVisible();//run once on page load
});
  