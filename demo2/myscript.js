// declare variabel
let btn = document.querySelector('#btn');

//disable context menu when right mouse clicked
btn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

//show the mouse event messege
btn.addEventListener ('mouseup', (e) => {
    let msg = document.querySelector('#messege');
    switch (e.button){
        case 0:
            msg.textContent = 'left mouse button clicked';
            break;
        case 1:
            msg.textContent = 'middle mouse button clicked';
            break
        case 2:
            msg.textContent = 'right mouse button clicked';
            break
        default:
            msg.textContent = 'unknown mouse button code: ${event.button}';
    }
});