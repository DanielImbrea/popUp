const popups = document.querySelectorAll('.popup');
const popup = document.querySelector('.output');
const popMessage = document.querySelector('.message');
const closeButton = document.querySelector('.close');
for(let x =0; x<popups.length; x++) {
 popups[x].addEventListener('click', function() {
    let outputText = this.getAttribute("data");
   popup.classList.remove('hide');
   popMessage.innerText = outputText;
 });
}

closeButton.addEventListener('click', function() {
  popup.classList.add('hide');
});