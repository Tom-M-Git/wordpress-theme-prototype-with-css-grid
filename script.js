if (document.querySelector('#collapsed-sidebar-nav')) {
  
  let collapsedSidebarNav = document.querySelector('#collapsed-sidebar-nav');
  let bodyOffset = collapsedSidebarNav.getBoundingClientRect().height + 'px';
  let bodyEl = document.querySelector('.grid-container');
  bodyEl.style.paddingTop = bodyOffset;

  let toggler = document.querySelector('#toggler');
  let slidebar = document.querySelector('#collapsed-sidebar');
  toggler.addEventListener('click', function(e){
    e.preventDefault();
    if(slidebar.matches('.toggled')){
      slidebar.className = slidebar.className.replace(/\stoggled/g, '');
    } else {
      slidebar.className += ' toggled';
    }
  });
  
  window.onresize = () => {
    if(window.innerWidth < 515){
      bodyOffset = collapsedSidebarNav.getBoundingClientRect().height + 'px';
      bodyEl.style.paddingTop = bodyOffset;
    }
    if(window.innerWidth >= 515 && slidebar.matches('.toggled')){
      slidebar.className = slidebar.className.replace(/\stoggled/g, '');
    }
  }
  
}
