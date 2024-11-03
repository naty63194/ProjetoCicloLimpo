function toggleSwitch(clickedCheckbox) {
  const moradorCheckbox = document.querySelector('#moradorCheckbox');
  const coletorCheckbox = document.querySelector('#coletorCheckbox');

  if (clickedCheckbox === moradorCheckbox && moradorCheckbox.checked) {
    coletorCheckbox.checked = false;
  } else if (clickedCheckbox === coletorCheckbox && coletorCheckbox.checked) {
    moradorCheckbox.checked = false;
  }
}