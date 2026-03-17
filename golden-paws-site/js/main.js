// Interactivity: mobile nav toggle, footer year, form validation, and smooth scroll fallback
document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      siteNav.classList.toggle('open');
    });
  }

  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Basic contact form validation + friendly UX
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var msg = form.querySelector('#message');
      if(!name.value.trim() || !email.value.trim() || !msg.value.trim()){
        e.preventDefault();
        alert('Please complete all fields before sending.');
        return false;
      }
      // For this static site we use mailto; show a quick confirmation
      alert('Thanks! Your message will open in your mail client.');
    });
  }
});
