var link = document.querySelector(".btn-contackts");
      var popup = document.querySelector(".modal");
      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector(".modal-form");
      var btn = document.querySelector(".btn-modal")
      var login = popup.querySelector("[name=login]");
      var email = popup.querySelector("[name=email]");

      var isStorageSupport = true;
      var storage = "";

      try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

      link.addEventListener("click", function (evt){
      evt.preventDefault();
      popup.classList.add("modal-show");

      if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });
      close.addEventListener("click", function(evt){
        evt.preventDefault();
        popup.classList.remove("modal-show");
      });

      close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

      form.addEventListener("submit", function (evt) {
      if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
