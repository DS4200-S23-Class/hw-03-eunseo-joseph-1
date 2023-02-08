function increaseFontSize(increase) {

    // get current info from html file
    const txt = document.getElementById('title');
    const style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    const currentSize = parseFloat(style);

    // increases font size by 10px
    if (increase === true) {
        txt.style.fontSize = (currentSize + 10) + 'px';
    }
    // decreases font size by 10px
    if (increase === false) {
        txt.style.fontSize = (currentSize - 10) + 'px';
    }

}