let coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('p-7');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('p-7');
    }
  });
}
const palindromText = document.getElementById('text-input');
const buttonCheck = document.getElementById('check-btn');
const resultBox = document.getElementById('result');

buttonCheck.addEventListener('click', () => {
  if (palindromText.value === '') {
    //noch in deutsch umschreiben
    return alert('Feld darf nicht leer sein!');
  }
  // create regex match-filter
  const regex = /[A-Za-z\d]/gi;
  // return only lowercase characters
  let palindromTextArray = palindromText.value.toLowerCase().match(regex);
  //let palindromTextArray = palindromText.value.toLowerCase().split('');
  // copy array to compare
  let compareArray = [...palindromTextArray];
  palindromTextArray = palindromTextArray.reverse();
  // check if palindrom - convert array to string for comparison
  if (palindromTextArray.toString() === compareArray.toString()) {
    resultBox.innerHTML = `${palindromText.value} ist ein Palindrom`;
  } else {
    resultBox.innerHTML = `${palindromText.value} ist kein Palindrom`;
  }
});
