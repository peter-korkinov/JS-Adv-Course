function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let textToShow = document.getElementById('extra');

    if (button.innerHTML == 'More') {
        button.innerHTML = 'Less';
        textToShow.style.display = 'block';
    } else {
        button.innerHTML = 'More';
        textToShow.style.display = 'none';
    }
}