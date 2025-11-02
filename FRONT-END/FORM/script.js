const maxAllowed = 6; 
const checkboxes = document.querySelectorAll('input[name="option"]');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const checkedBoxes = document.querySelectorAll('input[name="option"]:checked');
        if (checkedBoxes.length >= maxAllowed) {
          checkboxes.forEach(box => {
            if (!box.checked) {
              box.disabled = true;
            }
          });
        } else {
          checkboxes.forEach(box => box.disabled = false);
        }
      });
    });


// Limitare la trimitere
const form = document.getElementById("myform");
const checkbox = form.querySelectorAll('input[type="checkbox"]');
const maxSelect = 6;

//numar cate au fost selectate
function countChecked() {
  return [...checkbox].filter(c => c.checked).length;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selected = countChecked();

  if(selected < maxSelect) {
    alert(`Alege exact ${maxSelect} jocuri!`);
    return;
  }
  alert("Mulțumim! Alegerea ta a fost notată!");

  //redirecționare spre main
  window.location.href = "/FRONT-END/MAIN/index.html";
});