function addItem() {
    const textField = document.getElementById('newItemText').value;
    const valueField = document.getElementById('newItemValue').value;

    let newOption = document.createElement('option');
    newOption.textContent = textField;
    newOption.value = valueField;

    let dropMenu = document.getElementById('menu');
    dropMenu.appendChild(newOption);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}