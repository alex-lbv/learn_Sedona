function hideForm(form) {
    form.style.height = 0;
    form.style.padding = 0;
    form.classList.remove("is-opened");
}
function showForm(form, height) {
    form.style.height = height + "px";
    form.style.removeProperty("padding");
    form.classList.add("is-opened");
}
(function() {
  const button = document.getElementsByClassName("j-catalog-button")[0];
  const form = document.getElementsByClassName("j-search-form")[0];
  const formPaddingTop = 55;
  const formHeight = form.clientHeight - formPaddingTop;
  hideForm(form);
  button.onclick = function() {
    if (form.classList.contains("is-opened")) {
      hideForm(form);
    } else {
      showForm(form, formHeight);
    }
  }
})();
