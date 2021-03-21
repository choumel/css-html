var backdrop_var = document.querySelector('.backdrop');
var selectPlanButtons= document.querySelectorAll('.plan button');
var modal= document.querySelector('.modal');
var closebt= document.querySelector('.modal button');
var toogleButton= document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');
var ctaButton= document.querySelector('.main-nav__item--cta');

// console.dir(backdrop);
for (var i= 0;i< selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click',function(){
        // modal.style.display= 'block';
        // backdrop_var.style.display= 'block';
        // modal.className = 'open';
        modal.classList.add('open');
        backdrop_var.style.display='block';
        setTimeout( function(){
            backdrop_var.classList.add('open');
        }, 10);
    });
}

if(closebt){
    closebt.addEventListener('click', closeModal);
}


backdrop_var.addEventListener('click', function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal(){
    // modal.style.display='none';
    // backdrop_var.style.display= 'none';
    if(modal)
    modal.classList.remove('open');
    backdrop_var.classList.remove('open');
    
    setTimeout( function(){
        backdrop_var.style.display='none';
    }, 200);
}

toogleButton.addEventListener('click', function(){
    // mobileNav.style.display='block';
    // backdrop_var.style.display= 'block';
    mobileNav.classList.add('open');
    backdrop_var.style.display='block';
    setTimeout( function(){
        backdrop_var.classList.add('open');
    }, 10);
});

ctaButton.addEventListener('animationstart', function(){
    console.log("Animation started",event);
});

ctaButton.addEventListener('animationend', function(){
    console.log("Animation ended",event);
});

ctaButton.addEventListener('animationiteration', function(){
    console.log("Animation iteration",event);
});