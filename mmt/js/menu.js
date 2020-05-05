
var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var navSaitList = document.querySelector('.sait-list');
    var mainImg = document.querySelector('.main-nav__img');
    var links = document.querySelectorAll('.sait-list__item');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        navSaitList.classList.remove('sait-list__off');
        navSaitList.classList.add('sait-list__on');
        navSaitList.classList.remove('main-nav__img');
        navSaitList.classList.add('main-nav__img--mod');
        mainImg.classList.remove('main-nav__img');
        mainImg.classList.add('sait-list__off');
      } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navSaitList.classList.remove('sait-list__on');
      navSaitList.classList.add('sait-list__off');
      navSaitList.classList.remove('main-nav__img--mod');
      navSaitList.classList.add('main-nav__img--mod');
      mainImg.classList.remove('sait-list__off');
      mainImg.classList.add('main-nav__img');
    }
    });
    var klicovich = function(li) {
      li.addEventListener('click', function() {
        navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navSaitList.classList.remove('sait-list__on');
      navSaitList.classList.add('sait-list__off');
      navSaitList.classList.remove('main-nav__img--mod');
      navSaitList.classList.add('main-nav__img--mod');
      mainImg.classList.remove('sait-list__off');
      mainImg.classList.add('main-nav__img');
      });

    }

    for(var i = 0; i < links.length; i++) {
      var link = links[i];
      klicovich(link);
    }
