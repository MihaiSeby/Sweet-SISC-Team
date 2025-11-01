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