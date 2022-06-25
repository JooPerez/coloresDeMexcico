let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});
function nextSlide(){
  current = $("#testimonials .master-wrapper.active");
  next = current.next('.master-wrapper');
  if(next.length>0){
    current.hide();
    next.fadeIn('slow');
    $("#testimonials .master-wrapper").removeClass('active');
    next.addClass('active');

  }else{
    current.hide();
    next = $("#testimonials .master-wrapper").first();
    next.fadeIn('slow');
    current.removeClass('active');
    next.addClass('active');
  }
}
function previousSlide(){
  current = $("#testimonials .master-wrapper.active");
  prev = current.prev('.master-wrapper');
  if(prev.length>0){
    current.hide();
    prev.fadeIn('slow');
    $("#testimonials .master-wrapper").removeClass('active');
    prev.addClass('active');

  }else{
    current.hide();
    prev = $("#testimonials .master-wrapper").last();
    prev.fadeIn('slow');
    current.removeClass('active');
    prev.addClass('active');
  }
}
$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top-100;
    $('body, html').animate({scrollTop: pos});
});




