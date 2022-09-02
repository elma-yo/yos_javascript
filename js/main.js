'use strict'

{
    function update(){
        // document.getElementById('target').textContent = 'Change!';
        // document.querySelector('p').textContent = 'Change!';
        document.querySelectorAll('p')[1].textContent = 'Change!';
    }

    setTimeout(update, 1000);
}